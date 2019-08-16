//get location to fetch data
const packageName = document.querySelector('meta[name="og:locality"]').content;
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
	locationName = locationName.replace('%26', '&');
	data.forEach(pack => {
		console.log(locationName, pack.title)
		if (locationName.toUpperCase() === pack.title.toUpperCase()) {
			console.log(pack);
			writePack(pack, mainBox)
		}
	});
}
/**
 * write the current pack
 * @param { * } pack 
 * @param { HTMLElement } mainBox 
 */
function writePack(pack, mainBox) {
	setSlider(pack.imgs);
	const box = document.createElement('div');
	const includeBox = document.createElement('div');
	includeBox.innerHTML = `
		<h3>Your Itinerary</h3>
	`;
	box.className = "summary";
	includeBox.className = "include-area";
		box.innerHTML = `
			<h3>${pack.title}</h3>
			<p>
				${pack.Description}
			</p>
			<div class="gradient-white">
				<div id="expand">Show More</div>
			</div>
		`;
		const btn = box.querySelector('#expand');
		btn.addEventListener('click', () => {
			box.classList.toggle('expanded');
			if (box.classList.contains('expanded')) {
				btn.textContent = 'Show Less';
			} else {
				btn.textContent = 'Show More';
			}
		});
		const btnBox = document.createElement('div');
		btnBox.className = "book-btn";
		const btnBook = document.createElement('button');
		btnBook.className = 'book';
		btnBook.textContent = 'Book Now';
		Object.keys(pack.include).map((key) => {
			const arr = pack.include[key];
			const ul = document.createElement('div');
			ul.className = 'itinerary';
			ul.innerHTML = `
				<div class="itinerary-title">${key}</div>
				${arr.map(itin => {
					return `<div class="itinerary-item">${itin}</div>`
				}).join('')}
			`
			includeBox.appendChild(ul);
		});
		btnBox.appendChild(btnBook)
		includeBox.appendChild(btnBox);
		const backgroundArea = document.createElement('div');
		mainBox.append(box, includeBox);
}
/**
 * 
 * @param {Array} imgs 
 */
function setSlider (imgs) {
	const slider = document.querySelector('.moving-background');
	slider.style.background = `url(${ imgs[0] }) 0% 70%`;
	slider.style.backgroundSize = "cover";
}