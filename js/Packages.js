//get location to fetch data
const packageName = document.location.pathname.split('/')[1];
var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
if (this.readyState == 4 && this.status == 200) {
	const jsonResponse = JSON.parse(this.responseText);
	console.log(jsonResponse);
	render(jsonResponse);
}
};
xhttp.open("GET", "../_data/packages/" + packageName + ".json", true);
xhttp.send();

function render (data) {
	const mainBox = document.querySelector('.packages');
	data.forEach(pack => {
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
	});
}