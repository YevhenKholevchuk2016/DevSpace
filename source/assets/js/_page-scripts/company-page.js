'use strict';

/*---=== import modules ===---*/

import {qS, qSA} from "../functions/querySelector";
import aboutToggle from '../pages/company/about-toggle';
import slider from  '../pages/company/slider';
import companyInfo from '../components/toggleContent';

/*---=== /import modules ===---*/

/*---=== declare variables ===---*/

const companyAbout = qS('.js-company-about');
const truncatedText = '.js-truncated-text';
const galleryArr = qSA('.js-gallery');
const galleryOpenArr = qSA('.js-open-gallery');
const arrCompanyInfo = qSA('.js-company-info');

/*---=== /declare variables ===---*/

/*---=== run modules ===---*/

document.addEventListener("DOMContentLoaded", () => {

	if (arrCompanyInfo.length > 0) {
		console.log('11');
		companyInfo(arrCompanyInfo,'.js-company-info-content', '.js-company-info-header');
	}

	if(companyAbout != null) {
		aboutToggle(truncatedText);
	}

	if(galleryArr.length > 0) {
		slider(galleryOpenArr);
	}

});

/*---=== /run modules ===---*/