document.addEventListener('DOMContentLoaded', () => { 
	const allPacks = document.querySelector('#expand');
	const cardArr = document.querySelectorAll('.second > *:not(.gradient-white)');
	if (allPacks !== null) {
		allPacks.addEventListener('click', () => {
			document.location.href = '/all/';
		});
	}
	console.log(cardArr);
	cardArr.forEach((el) => {
		el.addEventListener('click', () => {
			document.location.href = '/Packages/' + el.childNodes[1].id;
		})
	})
});