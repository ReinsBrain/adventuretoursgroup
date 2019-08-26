document.addEventListener('DOMContentLoaded', () => {
	const controlls = document.querySelector('div[class^="user-actions"]');
	const el = document.createElement('i');
	el.className = "fa fa-times";
	// add the close button
	controlls.appendChild(el);
	el.addEventListener('click', () => {
		toggleChat();
	});
	// bubble
	const bubble = document.querySelector('#chat-bubble');
	bubble.addEventListener('click', () => {
		toggleChat();
	})

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

function toggleChat () {
	const chat = document.querySelector('#yak-chat-embended');
	chat.classList.toggle('hidden');
}