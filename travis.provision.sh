#!/bin/bash -e
travis_arg=$1
set -a
LOG=${LOG:-/home/vagrant/adventuretoursgroup/vagrant/tmp/log/boot.log}
VAGRANT_PROVISION=${VAGRANT_PROVISION:-0}
NODE_VER=${NODE_VER:-10.x}
REGION="us-west-1";

datestamp=$(date +%s)
t_pull_request=${travis_arg:-"vagrant-${datestamp}"}
policy_file=/tmp/policy.json
lifecycle_file=/tmp/lifecycle.json

set +a
echo "..........Deleting useless file for deploy.........."

rm -rf $TRAVIS_BUILD_DIR/docs
rm -rf $TRAVIS_BUILD_DIR/imgs

build_dir=$TRAVIS_BUILD_DIR/

echo "..........Creating Pull Request Deploy.........."
echo "..........Create a new S3 bucket.........."

aws s3 mb s3://"adventuretoursgroup-$t_pull_request" --region $REGION

echo "..........Copy release into the bucket.........."
aws s3 sync $build_dir s3://"adventuretoursgroup-$t_pull_request/"

echo "..........Creating the policy file.........."
cat > $policy_file <<- EOM
{
	"Version":"2012-10-17",
	"Statement":[{
	"Sid":"PublicReadGetObject",
				"Effect":"Allow",
		"Principal": "*",
			"Action":["s3:GetObject"],
			"Resource":["arn:aws:s3:::adventuretoursgroup-$t_pull_request/*"
			]
		}
	]
}
EOM

echo "..........Set policy to the bucket.........."
aws s3api put-bucket-policy --bucket "adventuretoursgroup-$t_pull_request" --policy file://$policy_file

echo "..........Creating lifecycle to the bucket.........."
cat > $lifecycle_file <<- EOM
{
	"Rules": [
		{
			"Expiration": {
				"Days": 20
			},
			"Prefix": "",
			"ID": "Delete bucket content after 20 days",
			"Status": "Enabled"
		}
	]
}
EOM

echo "..........Set lifecycle to the bucket.........."
aws s3api put-bucket-lifecycle --bucket "adventuretoursgroup-$t_pull_request" --lifecycle-configuration file://$lifecycle_file

echo "..........Making the bucket a host for static websites.........."
aws s3 website s3://"adventuretoursgroup-$t_pull_request/" --index-document index.html

echo "..........Cleaning old and empty buckets from previous pull requests.........."

for bucketname in $(aws s3 ls| awk '{print $3}');
do
	echo "..........Checking the bucket $bucketname"

	if [ $VAGRANT_PROVISION -eq 1 ]; then
		results=`aws s3api list-objects  --bucket $bucketname`
		if [[ 0 == $? ]]; then
			if [[ -z "$results" ]]; then
				echo "..........No files found for bucket $bucketname...candidate for delete"
				aws s3api delete-bucket --bucket $bucketname --region $REGION
			else
				echo "..........Bucket $bucketname still have content... skipping delete"
			fi
		else
			echo "..........Failed to list content from bucket $bucketname"
		fi
	else
		results=`aws s3api list-objects  --bucket $bucketname`
		if [ 0 = $? ]; then
			if [ -z "$results" ]; then
				echo "..........No files found for bucket $bucketname...candidate for delete"
				aws s3api delete-bucket --bucket $bucketname --region $REGION
			else
				echo "..........Bucket $bucketname still have content... skipping delete"
			fi
		else
			echo "..........Failed to list content from bucket $bucketname"
		fi
	fi
done

echo "..........DONE!!!.........."


