export default button => {
	button.addEventListener('click', event => {
		event.target.previousElementSibling.classList.toggle('trim-text');
		if(event.target.previousElementSibling.classList.contains('trim-text') !== true) {
			event.target.innerText = event.target.dataset.textHide;
		} else {
			event.target.innerText = event.target.dataset.textShow;
		}
	});
}