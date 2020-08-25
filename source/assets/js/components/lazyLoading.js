export default arrImages => {
	const removeDataImageSources = target => ['data-src','data-srcset'].forEach(elem => target.removeAttribute(elem));

	if ("IntersectionObserver" in window) {
		let lazyImageObserver = new IntersectionObserver(entries => {
			entries.forEach(entry => {
				if (entry.isIntersecting) {
					let Image = entry.target;
					if (Image.tagName === 'IMG') {
						Image.src = Image.getAttribute('data-src');
						if(Image.hasAttribute('srcset')) {
							Image.srcset = Image.getAttribute('data-srcset');
						}
					} else {
						Image.style.setProperty('background-image', `url(${Image.getAttribute('data-src')})`);
					}
					removeDataImageSources(Image);
					lazyImageObserver.unobserve(Image);
				}

			});

		});
		arrImages.forEach(Image => {
			lazyImageObserver.observe(Image);
		});
	} else {
		arrImages.forEach(Image => {
			if (Image.tagName === 'IMG') {
				Image.setAttribute('src', Image.getAttribute('data-src'));
				if(Image.hasAttribute('srcset')) {
					Image.setAttribute('srcset', Image.getAttribute('data-srcset'))
				}
			} else {
				Image.style.setProperty('background-image', `url(${Image.getAttribute('data-src')})`);
			}
			removeDataImageSources(Image);
		});
	}
}