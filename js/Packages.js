//get location to fetch data
const packageName = document.querySelector('meta[name="atg-location"]').content;
var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
if (this.readyState == 4 && this.status == 200) {
	const jsonResponse = JSON.parse(this.responseText);
	console.log(jsonResponse);
	render(jsonResponse);
}
};
xhttp.open("GET", "../../_data/packages/" + packageName + ".json", true);
xhttp.send();

function render (data) {
	const mainBox = document.querySelector('.packages');
	let locationName = document.location.pathname.split('/')[2];
	locationName = locationName.split('-').join(' ');
	data.forEach(pack => {
		console.log(locationName, pack.title)
		if (locationName.toUpperCase() === pack.title.toUpperCase()) {
			console.log(pack);
			writePack(pack, mainBox)
		}
	});
}

function writePack(pack, mainBox) {
	const box = document.createElement('div');
		box.innerHTML = `
			<h3>${pack.title}</h3>
			<p>${pack.Description}</p>
		`;
		Object.keys(pack.include).map((key) => {
			const arr = pack.include[key];
			const ul = document.createElement('ul');
			ul.innerHTML = `
				<span>${key}<span>
				${arr.map(itin => {
					return `<li>${itin}</li>`
				}).join('')}
			`
			box.appendChild(ul);
		})
		mainBox.appendChild(box);
}