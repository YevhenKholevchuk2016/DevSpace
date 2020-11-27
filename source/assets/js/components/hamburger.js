// define functions for show/hide mobile menu
import {qS} from "../functions/querySelector";

export default () => {
	const hamburger = qS('.js-hamburger');
	const body = qS('body');
	const mainHeaderNav = qS('.main-header__nav');

	hamburger.addEventListener('click', () => {
		showMenu(hamburger.classList.contains('is-active'));
	});

	const showMenu = boolean => {
		hamburger.classList.toggle('is-active');
		hamburger.setAttribute('aria-expanded', `${ boolean ? 'false' : 'true' }`);
		body.classList.toggle('disabled-scroll');
		mainHeaderNav.classList.toggle('is-opened');
	};
}