import GLightbox from 'glightbox';
export default () => {
	// const leftBtn = demoSection.querySelector('.demo-section__slider-prev');
	// const rightBtn = demoSection.querySelector('.demo-section__slider-next');
	const gallery = GLightbox({
		keyboardNavigation: true,
		touchNavigation: true,
		loop: true
	});

	/*leftBtn.addEventListener('click', () => {
		if (window.innerWidth > 992) {
			desktopGallery.open();
		} else {
			mobileGallery.open();
		}
	});

	rightBtn.addEventListener('click', () => {
		if (window.innerWidth > 992) {
			desktopGallery.open();
		} else {
			mobileGallery.open();
		}
	});*/
}