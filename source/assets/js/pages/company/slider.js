import GLightbox from 'glightbox';
import getParents from "../../functions/getParents";
export default galleryOpenArr => {

	const gallery = GLightbox({
		keyboardNavigation: true,
		touchNavigation: true,
		loop: true
	});

	galleryOpenArr.forEach(element => {
		element.addEventListener('click', event => {
			const [parents] = getParents(event.target, '.company-info__content', true);
			if(parents && parents.querySelector('.glightbox') !== null) {
				parents.querySelector('.glightbox').click();
			} else {
				console.warn('There is no photo inside of - ', parents);
			}
		});
	});
}