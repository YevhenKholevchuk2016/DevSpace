import request from '../functions/request';
import Fuse from 'fuse.js';

export default class searchDevice {
	constructor(form) {
		this.form = form;
		this.value = form.querySelector('[data-search=input]');
		this.listResult = form.querySelector('[data-search=result-list]');
		this.infoPopup = form.querySelector('.search-result');
		this.url = form.getAttribute('data-search-url-file') || 'assets/json/devices.json';
		this.listType = form.getAttribute('data-search-list-type') || 'li';
		this.fuseSearch = null;
		this.device = [];
		this.activeListElem = null;
		this.stopTimeout = null;
		this.stopTimeoutInput = null;
		this.runSearch = this.runSearch.bind(this);
		request({method: 'get', url: this.url}, this.runSearch);
	}

	runSearch(data) {
		this.createArrDevice(data);

		this.form.addEventListener('submit', (even) => {
			even.preventDefault();
			this.setActiveListElem();
			this.listener(true);
			this.searchResult();
		});

		this.value.addEventListener('input', (even) => {
			even.preventDefault();
			this.value.value = this.value.value.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
			clearTimeout(this.stopTimeoutInput);
			this.stopTimeoutInput = setTimeout(() => {
				this.listener();
				this.searchResult(true);
			}, 310);
		});

		this.listResult.addEventListener('click', (even) => {
			even.preventDefault();
			this.setActiveListElem(even);
			this.searchResult();
		});

		document.addEventListener('keyup', (e) => {
			if (e.keyCode === 27 && this.listResult.classList.contains('active')) {
				this.visibleList(false);
			}
			if (e.keyCode === 40 || e.keyCode === 38 && this.listResult.classList.contains('active')) {
				this.navKeyboardActiveElem(e.keyCode);
			}
		});
	}

	createResultElem(text) {
		let elemResult = document.createElement(this.listType);
		elemResult.textContent = text;
		this.listResult.appendChild(elemResult);
	}

	createResult(arrResult) {
		clearTimeout(this.stopTimeout);
		this.listResult.innerHTML = '';
		for (let i = 0; i < arrResult.length; i++) {
			if (i === 50) {
				break;
			}
			this.createResultElem(arrResult[i]);
		}
		if (arrResult.length > 50) {
			this.stopTimeout = setTimeout(() => {
				for (let i = 50; i < arrResult.length; i++) {
					this.createResultElem(arrResult[i]);
				}
			}, 600);
		}
		this.activeListElem = this.listResult.firstElementChild;
		if (this.activeListElem) {
			this.activeListElem.classList.add('active');
		}
	}

	listener(boll) {
		if (this.value.value.length > 0 && !this.value.value.match(/^\s*$/)) {
			this.checkDevice(this.value.value);
		} else {
			this.visibleList(false);
		}
		if (boll) {
			this.visibleList(!boll);
		}
	}

	createArrDevice(objectDevices) {
		this.fuseSearch = new Fuse(Object.keys(objectDevices).reduce(function (acc, item) {
			return acc.concat(objectDevices[item]);
		}, []), {
			location: 5, shouldSort: true, findAllMatches: true, threshold: 0.25, keys: ['name'], id: "name"
		});
	}

	checkDevice(name) {
		this.device = this.mackIphone(this.fuseSearch.search(name));
		this.createResult(this.device);
		this.visibleList(this.device.length > 0);
	}

	setActiveListElem(even) {
		if (even && even.target.nodeName === 'LI') {
			this.value.value = even.target.textContent;
			if (this.activeListElem) {
				this.activeListElem.classList.remove('active');
			}
			this.activeListElem = even.target;
			this.activeListElem.classList.add('active');
			this.visibleList(false);
		} else if (this.listResult.classList.contains('active')) {
			this.value.value = this.activeListElem.textContent;
			this.visibleList(false);
		}
	}

	navKeyboardActiveElem(code) {
		let nextElem = (code === 38) ?
			this.activeListElem.previousElementSibling : this.activeListElem.nextElementSibling;
		if (nextElem) {
			this.activeListElem.classList.remove('active');
			this.activeListElem = nextElem;
			if (this.listResult.clientHeight < this.activeListElem.offsetTop) {
				this.listResult.scrollTo(0, this.activeListElem.offsetTop);
			} else {
				this.listResult.scrollTo(0, 0);
			}
			this.activeListElem.classList.add('active');
		}
	}

	visibleList(boll) {
		if (boll) {
			this.listResult.classList.add('active');
		} else {
			this.listResult.classList.remove('active');
		}
	}

	mackIphone(arr) {
		let newArr = [];
		arr = arr.filter(function (elem) {
			if (!elem.toLowerCase().includes('iphone')) {
				return true;
			} else {
				newArr.push(elem);
				return false
			}
		});
		return newArr.sort().concat(arr);
	}

	searchResult(boll) {
		this.infoPopup.className = (boll || this.value.value.match(/^\s*$/)) ?
			`search-result` : `search-result res-${(this.device.length > 0) ? 'ok' : 'no'}`;
	}
}