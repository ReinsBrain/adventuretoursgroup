document.addEventListener('DOMContentLoaded', () => { 
	var slideIndex = 0;
	showSlides(slideIndex);
	const Next = document.querySelector('.next');
	// next btn
	Next.addEventListener('click', () => {
		slideIndex++;
		showSlides(slideIndex);
	});
	// TODO: PREV
	const Prev = document.querySelector('.prev');
	// next btn
	Prev.addEventListener('click', () => {
		slideIndex--;
		showSlides(slideIndex);
	});
});

/*
// Next/previous controls
function plusSlides(n) {
	showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
	showSlides(slideIndex = n);
}*/
/**
 * presentation
 * @param {Number} n 
 */
function showSlides(n) {
	var slides = document.getElementsByClassName("mySlides");
	if (n > slides.length) {slideIndex = 1} 
	if (n < 1) {slideIndex = slides.length}
	for (let i = 0; i < slides.length; i++) {
		if (n === i) {
			let active = document.querySelector('.active');
			active.classList.toggle('active');
			slides[i].classList.add('active');
		}
	}
}