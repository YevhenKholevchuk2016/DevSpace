import Cuttr from 'Cuttr';
export default truncatedText => {
	new Cuttr(truncatedText, {
		truncate: 'characters',
		length: 273,
		readMore: true,
		readMoreText: window.devSpaceSettings.textMore,
		readLessText: window.devSpaceSettings.textLess,
		readMoreBtnPosition: 'inside',
		readMoreBtnSelectorClass: 'company-extended__button'
	});
}