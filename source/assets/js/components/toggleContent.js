import {slideToggle} from "../functions/slide";

export default (arrContent, classNameBody, classNameHead) => {
	arrContent.map(elem => {
		console.log(elem)
		const arrContentTouch = classNameHead
			? elem.querySelector(`${classNameHead}`)
			: elem;
		arrContentTouch.addEventListener('click', () => {
			console.log('234');
			slideToggle(
				elem.classList.toggle('is-open'),
				elem.querySelector(`${classNameBody}`)
			);
		});
	});
};