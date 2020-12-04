'use strict';

/*---=== import modules ===---*/

import {qS} from "../functions/querySelector";
import aboutToggle from '../pages/company/about-toggle';
import slider from  '../pages/company/slider';

/*---=== /import modules ===---*/

/*---=== declare variables ===---*/

const companyAbout = qS('.js-company-about');
const truncatedText = '.js-truncated-text';
const gallery = qS('.js-gallery');

/*---=== /declare variables ===---*/

/*---=== run modules ===---*/

document.addEventListener("DOMContentLoaded", () => {

	if(companyAbout != null) {
		aboutToggle(truncatedText);
	}

	if(gallery !== null) {
		slider();
	}

});

/*---=== /run modules ===---*/