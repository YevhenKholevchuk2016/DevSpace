'use strict';

/*---=== import modules ===---*/

import {qS, qSA} from "../functions/querySelector";
import lazyLoading from './../components/lazyLoading';
import hamburger from "../components/hamburger";

/*---=== /import modules ===---*/

/*---=== declare variables ===---*/

const arrImages = qSA(".js-lazy");
const header = qS('.main-header');

/*---=== /declare variables ===---*/

/*---=== run modules ===---*/

document.addEventListener("DOMContentLoaded", () => {

	// call lazy loading module
	if (arrImages.length > 0) {
		lazyLoading(arrImages);
	}

	// call header hamburger menu  show/hide module
	if (header !== null) {
		hamburger();
	}
});

/*---=== /run modules ===---*/