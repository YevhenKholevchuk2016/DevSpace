export default (targetElement, elementHeight) => {
	let height = elementHeight.getBoundingClientRect().height;
	targetElement.style.setProperty('--company-about-height', `${height}px`);
}