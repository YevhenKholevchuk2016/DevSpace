(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
'use strict';
/*---=== import modules ===---*/

var _querySelector = require("../functions/querySelector");

var _lazyLoading = _interopRequireDefault(require("./../components/lazyLoading"));

var _hamburger = _interopRequireDefault(require("../components/hamburger"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*---=== /import modules ===---*/

/*---=== declare variables ===---*/
var arrImages = (0, _querySelector.qSA)(".js-lazy");
var header = (0, _querySelector.qS)('.main-header');
/*---=== /declare variables ===---*/

/*---=== run modules ===---*/

document.addEventListener("DOMContentLoaded", function () {
  // call lazy loading module
  if (arrImages.length > 0) {
    (0, _lazyLoading.default)(arrImages);
  } // call header hamburger menu  show/hide module


  if (header !== null) {
    (0, _hamburger.default)();
  }
});
/*---=== /run modules ===---*/

},{"../components/hamburger":2,"../functions/querySelector":4,"./../components/lazyLoading":3}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _querySelector = require("../functions/querySelector");

// define functions for show/hide mobile menu
var _default = function _default() {
  var hamburger = (0, _querySelector.qS)('.js-hamburger');
  var body = (0, _querySelector.qS)('body');
  var mainHeaderNav = (0, _querySelector.qS)('.main-header__nav');
  hamburger.addEventListener('click', function () {
    showMenu(hamburger.classList.contains('is-active'));
  });

  var showMenu = function showMenu(boolean) {
    hamburger.classList.toggle('is-active');
    hamburger.setAttribute('aria-expanded', "".concat(boolean ? 'false' : 'true'));
    body.classList.toggle('disabled-scroll');
    mainHeaderNav.classList.toggle('is-opened');
  };
};

exports.default = _default;

},{"../functions/querySelector":4}],3:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _default = function _default(arrImages) {
  var removeDataImageSources = function removeDataImageSources(target) {
    return ['data-src', 'data-srcset'].map(function (elem) {
      return target.removeAttribute(elem);
    });
  };

  var setSrcData = function setSrcData(image) {
    if (image.parentElement.nodeName === 'PICTURE') {
      var imageParents = Array.from(image.parentElement.querySelectorAll('source'));
      imageParents.map(function (source) {
        source.setAttribute('srcset', source.dataset.srcset);
        removeDataImageSources(source);
      });
    }
  };

  var setDataImage = function setDataImage(img) {
    if (img.tagName === 'IMG') {
      img.setAttribute('src', img.dataset.src);
      setSrcData(img);
    } else if (img.tagName !== 'SOURCE') {
      img.style.setProperty('background-image', "url(".concat(img.dataset.src, ")"));
    }

    if (img.hasAttribute('srcset')) {
      img.setAttribute('srcset', img.dataset.srcset);
    }

    removeDataImageSources(img);
  };

  if ("IntersectionObserver" in window) {
    var lazyImageObserver = new IntersectionObserver(function (entries) {
      entries.map(function (entry) {
        if (entry.isIntersecting) {
          setDataImage(entry.target);
          lazyImageObserver.unobserve(entry.target);
        }
      });
    }, {
      rootMargin: '0px 0px 20px 0px'
    });
    arrImages.map(function (img) {
      return lazyImageObserver.observe(img);
    });
  } else {
    arrImages.map(setDataImage);
  }
};

exports.default = _default;

},{}],4:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.qSA = exports.qS = void 0;
// alias for the document.querySelector(selectors); function
var qS = document.querySelector.bind(document); // alias for the document.querySelectorAll(selectors); function

exports.qS = qS;

var qSA = function qSA(arg) {
  return Array.from(document.querySelectorAll("".concat(arg)));
};

exports.qSA = qSA;

},{}]},{},[1]);

//# sourceMappingURL=common.js.map
