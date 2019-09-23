document.addEventListener('DOMContentLoaded', () => { 
	const allPacks = document.querySelector('#expand-all');
	const cardArr = document.querySelectorAll('.trending-packages > *:not(.gradient-white)');
	const home = document.querySelector('.logo.fadein');
	const planBtn = document.querySelector('.btn-big');
	if (allPacks !== null) {
		allPacks.addEventListener('click', () => {
			document.location.href = '/all/';
		});
	}

	if (cardArr !== null) {
		console.log(cardArr);
		cardArr.forEach((el) => {
			if (el.children[0].id !== 'BARRANCO-GASTRO-PACK') {
				el.addEventListener('click', () => {
					document.location.href = '/Packages/' + el.childNodes[1].id;
				})
			}
		})
	}
	home.addEventListener('click', () => {
		document.location.href = '/';
	});
	if (planBtn !== null) {
		planBtn.addEventListener('click', () => {
			document.querySelector('#trending-section').scrollIntoView({
				behavior: "smooth",
			});
		})
	}
});