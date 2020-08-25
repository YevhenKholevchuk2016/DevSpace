'use strict';

/*---=== import modules ===---*/

import lazyLoading from './../components/lazyLoading';
import {qS, qSA} from "../components/functions/querySelector";

/*---=== /import modules ===---*/

/*---=== declare variables ===---*/

const arrImages = qSA(".b-lazy");

/*---=== /declare variables ===---*/

/*---=== run modules ===---*/

document.addEventListener("DOMContentLoaded", () => {

	// call lazy loading module
	if (arrImages !== null) {
		lazyLoading(arrImages);
	}
});

/*---=== /run modules ===---*/