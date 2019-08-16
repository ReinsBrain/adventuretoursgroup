document.addEventListener('DOMContentLoaded', () => { 
	var slideIndex = 0;
	showSlides(slideIndex);
	const Next = document.querySelector('.next');
	// next btn
	Next.addEventListener('click', () => {
		if (slideIndex < 7) {
			slideIndex++
		} else {
			slideIndex = 0;
		}
		showSlides(slideIndex);
	});
	//  prev
	const Prev = document.querySelector('.prev');
	// prev btn
	Prev.addEventListener('click', () => {
		if (slideIndex > 0) {
			slideIndex--
		} else {
			slideIndex = 6;
		}
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
