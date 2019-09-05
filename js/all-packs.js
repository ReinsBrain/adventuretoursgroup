document.addEventListener('DOMContentLoaded', () => {
	getAllPacks();
})

function getAllPacks () {
	['Paracas', 'Arequipa', 'Cuzco', 'Jungle', 'Lima']
	.forEach(dest => {
		var xhttp = new XMLHttpRequest();
		xhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			const jsonResponse = JSON.parse(this.responseText);
			console.log(jsonResponse);
			writePack(jsonResponse);
		}
		};
		xhttp.open("GET", "../../data/packages/" + dest + ".json", true);
		xhttp.send();
	})
}

function writePack (packs) {
	const mainBox = document.querySelector('.trending-packages');
	packs.forEach(p => {
		const itemDiv = document.createElement('div');
		const id = p.title.toUpperCase().split(' ').join('-');
		const img = p.imgs.length > 1 ? p.imgs[1] : p.imgs[0];
		itemDiv.innerHTML = `
			<div class="pack" id="${ id }" style="background: url(${ img })">
			</div>
			<div class="package-details">
				<div class="package-title">${ p.title }</div>
				<div class="duration">
					<img src="../css/icons/clock-regular.svg" />
					<div>Duration: ${ Object.keys(p.include).length } days</div>
				</div>
				<div class="bestseller ${ p.bestSeller ? '' : 'hidden' }">
					<img src="../css/icons/crown-solid.svg" alt="">
					<div>bestseller</div>
				</div>
				<div class="reviews">
					<div class="stars"><div></div><div></div><div></div><div></div><div></div></div>
					<div>${ p.reviews } Reviews</div>
				</div>
			</div>
		`
		mainBox.appendChild(itemDiv);
		itemDiv.addEventListener('click', () => {
			document.location.href = '/Packages/' + itemDiv.childNodes[1].id + '/';
		})
	})
}