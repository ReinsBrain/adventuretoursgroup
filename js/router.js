document.addEventListener('DOMContentLoaded', () => { 
	const allPacks = document.querySelector('#expand');
	const cardArr = document.querySelectorAll('.trending-packages > *:not(.gradient-white)');
	const home = document.querySelector('.logo.fadein');
	if (allPacks !== null) {
		allPacks.addEventListener('click', () => {
			document.location.href = '/all/';
		});
	}

	if (cardArr !== null) {
		console.log(cardArr);
		cardArr.forEach((el) => {
			el.addEventListener('click', () => {
				document.location.href = '/Packages/' + el.childNodes[1].id;
			})
		})
	}
	home.addEventListener('click', () => {
		document.location.href = '/';
	})
});