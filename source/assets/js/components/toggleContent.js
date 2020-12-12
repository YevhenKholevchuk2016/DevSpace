import {slideToggle} from "../functions/slide";

export default (arrContent, classNameBody, classNameHead) => {
	arrContent.map(elem => {
		const arrContentTouch = classNameHead
			? elem.querySelector(`${classNameHead}`)
			: elem;
		/*setTimeout(() => {
			arrContentTouch.click();
		}, 1);*/
		arrContentTouch.addEventListener('click', () => {
			slideToggle(
				elem.classList.toggle('is-open'),
				elem.querySelector(`${classNameBody}`)
			);
		});
	});
};