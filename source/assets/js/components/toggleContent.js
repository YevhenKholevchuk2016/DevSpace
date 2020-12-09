import {slideToggle} from "../functions/slide";

export default (arrContent, classNameBody, classNameHead) => {
	arrContent.map(elem => {
		const arrContentTouch = classNameHead
			? elem.querySelector(`${classNameHead}`)
			: elem;
		arrContentTouch.addEventListener('click', () => {
			slideToggle(
				elem.classList.toggle('is-open'),
				elem.querySelector(`${classNameBody}`)
			);
		});
	});
};