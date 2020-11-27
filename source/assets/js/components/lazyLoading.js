export default arrImages => {
	const removeDataImageSources = target => ['data-src', 'data-srcset'].map(elem => target.removeAttribute(elem));

	const setSrcData = image => {
		if(image.parentElement.nodeName === 'PICTURE') {
			const imageParents = Array.from(image.parentElement.querySelectorAll('source'));
			imageParents.map(source => {
				source.setAttribute('srcset', source.dataset.srcset);
				removeDataImageSources(source);
			});
		}
	}

	const setDataImage = img => {
		if (img.tagName === 'IMG') {
			img.setAttribute('src', img.dataset.src);
			setSrcData(img);
		} else if(img.tagName !== 'SOURCE') {
			img.style.setProperty('background-image', `url(${img.dataset.src})`);
		}
		if (img.hasAttribute('srcset')) {
			img.setAttribute('srcset', img.dataset.srcset);
		}
		removeDataImageSources(img);
	}

	if ("IntersectionObserver" in window) {
		let lazyImageObserver = new IntersectionObserver(entries => {
			entries.map(entry => {
				if (entry.isIntersecting) {
					setDataImage(entry.target);
					lazyImageObserver.unobserve(entry.target);
				}
			});
		}, {rootMargin: '0px 0px 20px 0px'});
		arrImages.map(img => lazyImageObserver.observe(img));
	} else {
		arrImages.map(setDataImage);
	}
}