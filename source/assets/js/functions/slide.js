let stopTimeout = null;

export function slideUp(target, duration = 500) {
	target.style.setProperty('transition-property', 'height, margin, padding');
	target.style.setProperty('transition-duration', `${duration}ms`);
	target.style.setProperty('box-sizing', 'border-box');
	target.style.setProperty('height', `${target.offsetHeight}px`);
	target.style.setProperty('overflow', 'hidden');
	target.offsetHeight;
	target.style.setProperty('height', '0');
	target.style.setProperty('padding-top', '0');
	target.style.setProperty('padding-bottom', '0');
	target.style.setProperty('margin-top', '0');
	target.style.setProperty('margin-bottom', '0');
	clearTimeout(stopTimeout);
	stopTimeout = setTimeout(() => {
		target.style.display = 'none';
		target.style.removeProperty('height');
		target.style.removeProperty('padding-top');
		target.style.removeProperty('padding-bottom');
		target.style.removeProperty('margin-top');
		target.style.removeProperty('margin-bottom');
		target.style.removeProperty('overflow');
		target.style.removeProperty('transition-duration');
		target.style.removeProperty('transition-property');
	}, duration);
}

export function slideDown(target, duration = 1500, blockType = 'block') {
	let display = window.getComputedStyle(target).display;

	if (display === 'none') {
		display = blockType;
	}

	target.style.setProperty('display', display);
	let height = target.offsetHeight;
	target.style.setProperty('overflow', 'hidden');
	target.style.setProperty('height', '0');
	target.style.setProperty('padding-top', '0');
	target.style.setProperty('padding-bottom', '0');
	target.style.setProperty('margin-top', '0');
	target.style.setProperty('margin-bottom', '0');
	target.offsetHeight;
	target.style.setProperty('box-sizing', 'border-box');
	target.style.setProperty('transition-property', 'height, margin, padding');
	target.style.setProperty('transition-duration', `${duration}ms`);
	target.style.setProperty('height', `${height}px`);
	target.style.removeProperty('padding-top');
	target.style.removeProperty('padding-bottom');
	target.style.removeProperty('margin-top');
	target.style.removeProperty('margin-bottom');
	clearTimeout(stopTimeout);
	stopTimeout = setTimeout(() => {
		target.style.removeProperty('height');
		target.style.removeProperty('overflow');
		target.style.removeProperty('transition-duration');
		target.style.removeProperty('transition-property');
	}, duration);
}

export function slideToggle(boolean, target, duration = 500, blockType) {
	return (boolean) ? slideDown(target, duration, blockType) : slideUp(target, duration);
}