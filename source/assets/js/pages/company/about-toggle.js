import Cuttr from 'cuttr/dist/cuttr';
import setHeight from "./setHeight";
export default (truncatedText, readMoreBtn, companyInfoWrapper, companyAbout) => {
	new Cuttr(truncatedText, {
		truncate: 'characters',
		length: 273,
		readMore: true,
		readMoreText: window.devSpaceSettings.textMore,
		readLessText: window.devSpaceSettings.textLess,
		readMoreBtnPosition: 'inside',
		readMoreBtnSelectorClass: 'company-extended__buttons'
	});

	document.addEventListener('click', event => {
		if (!event.target.matches(readMoreBtn)) {
			setHeight(companyInfoWrapper, companyAbout);
		}
	});
}