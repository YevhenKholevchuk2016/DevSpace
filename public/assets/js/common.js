(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
'use strict';
/*---=== import modules ===---*/

var _lazyLoading = _interopRequireDefault(require("./../components/lazyLoading"));

var _querySelector = require("../components/functions/querySelector");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*---=== /import modules ===---*/

/*---=== declare variables ===---*/
var arrImages = (0, _querySelector.qSA)(".b-lazy");
/*---=== /declare variables ===---*/

/*---=== run modules ===---*/

document.addEventListener("DOMContentLoaded", function () {
  // call lazy loading module
  if (arrImages !== null) {
    (0, _lazyLoading.default)(arrImages);
  }
});
/*---=== /run modules ===---*/

},{"../components/functions/querySelector":2,"./../components/lazyLoading":3}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.qSA = exports.qS = void 0;
var qS = document.querySelector.bind(document);
exports.qS = qS;
var qSA = document.querySelectorAll.bind(document);
exports.qSA = qSA;

},{}],3:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _default = function _default(arrImages) {
  var removeDataImageSources = function removeDataImageSources(target) {
    return ['data-src', 'data-srcset'].forEach(function (elem) {
      return target.removeAttribute(elem);
    });
  };

  if ("IntersectionObserver" in window) {
    var lazyImageObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          var Image = entry.target;

          if (Image.tagName === 'IMG') {
            Image.src = Image.getAttribute('data-src');

            if (Image.hasAttribute('srcset')) {
              Image.srcset = Image.getAttribute('data-srcset');
            }
          } else {
            Image.style.setProperty('background-image', "url(".concat(Image.getAttribute('data-src'), ")"));
          }

          removeDataImageSources(Image);
          lazyImageObserver.unobserve(Image);
        }
      });
    });
    arrImages.forEach(function (Image) {
      lazyImageObserver.observe(Image);
    });
  } else {
    arrImages.forEach(function (Image) {
      if (Image.tagName === 'IMG') {
        Image.setAttribute('src', Image.getAttribute('data-src'));

        if (Image.hasAttribute('srcset')) {
          Image.setAttribute('srcset', Image.getAttribute('data-srcset'));
        }
      } else {
        Image.style.setProperty('background-image', "url(".concat(Image.getAttribute('data-src'), ")"));
      }

      removeDataImageSources(Image);
    });
  }
};

exports.default = _default;

},{}]},{},[1]);

//# sourceMappingURL=common.js.map
