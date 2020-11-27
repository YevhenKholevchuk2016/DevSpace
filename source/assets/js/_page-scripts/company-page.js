'use strict';

/*---=== import modules ===---*/

import {qS} from "../functions/querySelector";
import aboutToggle from '../pages/company/about-toggle';

/*---=== /import modules ===---*/

/*---=== declare variables ===---*/

const companyAbout = qS('.js-company-about');
const truncatedText = '.js-truncated-text';

/*---=== /declare variables ===---*/

/*---=== run modules ===---*/

document.addEventListener("DOMContentLoaded", () => {

	if(companyAbout != null) {
		aboutToggle(truncatedText);
	}

});

/*---=== /run modules ===---*/