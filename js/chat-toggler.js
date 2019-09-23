document.addEventListener('DOMContentLoaded', () => {
	//TEPAGO

	const tpgHeader = document.querySelector('#tpg-container > main-header > div');
	const el2 = document.createElement('i');
	el2.className = 'fa fa-times';
	el2.id = 'tepago-close';
	tpgHeader.appendChild(el2);
	el2.addEventListener('click', () => {
		document.querySelector('div#tepago-area').classList.toggle('hide');
	})
	//
	document.querySelector('.title-box > h4').classList.remove('title');
});