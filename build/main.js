/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/counterup2/dist/index.js":
/*!***********************************************!*\
  !*** ./node_modules/counterup2/dist/index.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

!function(t,e){ true?module.exports=e():undefined}(window,function(){return function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=0)}([function(t,e,n){"use strict";n.r(e),n.d(e,"divideNumbers",function(){return o}),n.d(e,"hasComma",function(){return i}),n.d(e,"isFloat",function(){return u}),n.d(e,"decimalPlaces",function(){return l});e.default=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=e.action,i=void 0===n?"start":n,u=e.duration,l=void 0===u?1e3:u,a=e.delay,c=void 0===a?16:a,d=e.lang,f=void 0===d?void 0:d;if("stop"!==i){if(r(t),/[0-9]/.test(t.innerHTML)){var s=o(t.innerHTML,{duration:l||t.getAttribute("data-duration"),lang:f||document.querySelector("html").getAttribute("lang")||void 0,delay:c||t.getAttribute("data-delay")});t._countUpOrigInnerHTML=t.innerHTML,t.innerHTML=s[0],t.style.visibility="visible",t.countUpTimeout=setTimeout(function e(){t.innerHTML=s.shift(),s.length?(clearTimeout(t.countUpTimeout),t.countUpTimeout=setTimeout(e,c)):t._countUpOrigInnerHTML=void 0},c)}}else r(t)};var r=function(t){clearTimeout(t.countUpTimeout),t._countUpOrigInnerHTML&&(t.innerHTML=t._countUpOrigInnerHTML,t._countUpOrigInnerHTML=void 0),t.style.visibility=""},o=function(t){for(var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=e.duration,r=void 0===n?1e3:n,o=e.delay,i=void 0===o?16:o,u=e.lang,l=void 0===u?void 0:u,a=r/i,c=t.toString().split(/(<[^>]+>|[0-9.][,.0-9]*[0-9]*)/),d=[],f=0;f<a;f++)d.push("");for(var s=0;s<c.length;s++)if(/([0-9.][,.0-9]*[0-9]*)/.test(c[s])&&!/<[^>]+>/.test(c[s])){var p=c[s],v=/[0-9]+,[0-9]+/.test(p);p=p.replace(/,/g,"");for(var g=/^[0-9]+\.[0-9]+$/.test(p),y=g?(p.split(".")[1]||[]).length:0,b=d.length-1,m=a;m>=1;m--){var T=parseInt(p/a*m,10);g&&(T=parseFloat(p/a*m).toFixed(y),T=parseFloat(T).toLocaleString(l)),v&&(T=T.toLocaleString(l)),d[b--]+=T}}else for(var M=0;M<a;M++)d[M]+=c[s];return d[d.length]=t.toString(),d},i=function(t){return/[0-9]+,[0-9]+/.test(t)},u=function(t){return/^[0-9]+\.[0-9]+$/.test(t)},l=function(t){return u(t)?(t.split(".")[1]||[]).length:0}}])});

/***/ }),

/***/ "./src/constants/index.js":
/*!********************************!*\
  !*** ./src/constants/index.js ***!
  \********************************/
/*! exports provided: BLOCK_CLASS_NAME */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BLOCK_CLASS_NAME", function() { return BLOCK_CLASS_NAME; });
var BLOCK_CLASS_NAME = 'innocode-block-counter';

/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_dom_ready__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/dom-ready */ "@wordpress/dom-ready");
/* harmony import */ var _wordpress_dom_ready__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_dom_ready__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var counterup2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! counterup2 */ "./node_modules/counterup2/dist/index.js");
/* harmony import */ var counterup2__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(counterup2__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constants */ "./src/constants/index.js");



_wordpress_dom_ready__WEBPACK_IMPORTED_MODULE_0___default()(function () {
  var elements = document.querySelectorAll(".".concat(_constants__WEBPACK_IMPORTED_MODULE_2__["BLOCK_CLASS_NAME"], "-item__number"));

  if (!elements.length) {
    return;
  }

  var handler = function handler(element) {
    counterup2__WEBPACK_IMPORTED_MODULE_1___default()(element);
    element.classList.add("".concat(_constants__WEBPACK_IMPORTED_MODULE_2__["BLOCK_CLASS_NAME"], "-item__number_is-visible"));
  };

  if (typeof window.IntersectionObserver === 'undefined') {
    [].map.call(elements, handler);
    return;
  }

  var observer = new window.IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (!entry.isIntersecting) {
        return;
      }

      var element = entry.target;
      handler(element);
      observer.unobserve(element);
    });
  }, {
    threshold: 0.75
  });
  elements.forEach(function (element) {
    element.style.visibility = 'hidden';
    observer.observe(element);
  });
});

/***/ }),

/***/ "@wordpress/dom-ready":
/*!**********************************!*\
  !*** external ["wp","domReady"] ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["domReady"]; }());

/***/ })

/******/ });
//# sourceMappingURL=main.js.map