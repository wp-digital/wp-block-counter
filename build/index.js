(window["webpackJsonp_wp_block_counter"] = window["webpackJsonp_wp_block_counter"] || []).push([["style-index"],{

/***/ "./src/style.scss":
/*!************************!*\
  !*** ./src/style.scss ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

}]);

/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"index": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
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
/******/ 	var jsonpArray = window["webpackJsonp_wp_block_counter"] = window["webpackJsonp_wp_block_counter"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./src/index.js","style-index"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@babel/runtime/helpers/arrayLikeToArray.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayLikeToArray.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

module.exports = _arrayLikeToArray;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/arrayWithHoles.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayWithHoles.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

module.exports = _arrayWithHoles;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/defineProperty.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/defineProperty.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

module.exports = _defineProperty;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _iterableToArrayLimit(arr, i) {
  var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]);

  if (_i == null) return;
  var _arr = [];
  var _n = true;
  var _d = false;

  var _s, _e;

  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

module.exports = _iterableToArrayLimit;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/nonIterableRest.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/nonIterableRest.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

module.exports = _nonIterableRest;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/slicedToArray.js":
/*!**************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/slicedToArray.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayWithHoles = __webpack_require__(/*! ./arrayWithHoles.js */ "./node_modules/@babel/runtime/helpers/arrayWithHoles.js");

var iterableToArrayLimit = __webpack_require__(/*! ./iterableToArrayLimit.js */ "./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js");

var unsupportedIterableToArray = __webpack_require__(/*! ./unsupportedIterableToArray.js */ "./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js");

var nonIterableRest = __webpack_require__(/*! ./nonIterableRest.js */ "./node_modules/@babel/runtime/helpers/nonIterableRest.js");

function _slicedToArray(arr, i) {
  return arrayWithHoles(arr) || iterableToArrayLimit(arr, i) || unsupportedIterableToArray(arr, i) || nonIterableRest();
}

module.exports = _slicedToArray;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeToArray = __webpack_require__(/*! ./arrayLikeToArray.js */ "./node_modules/@babel/runtime/helpers/arrayLikeToArray.js");

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return arrayLikeToArray(o, minLen);
}

module.exports = _unsupportedIterableToArray;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./src/IconsPicker.js":
/*!****************************!*\
  !*** ./src/IconsPicker.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return IconsPicker; });
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_4__);






function IconsPicker(props) {
  var label = props.label,
      icons = props.icons,
      value = props.value,
      onChange = props.onChange;

  var _useState = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState, 2),
      isOpened = _useState2[0],
      setIsOpened = _useState2[1];

  var _useState3 = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["useState"])(value),
      _useState4 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState3, 2),
      selected = _useState4[0],
      setSelected = _useState4[1];

  if (!icons.length) {
    return null;
  }

  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["BaseControl"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["BaseControl"].VisualLabel, null, label), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["Button"], {
    isTertiary: true,
    variant: "tertiary",
    isPressed: isOpened,
    onClick: function onClick() {
      setIsOpened(!isOpened);
    }
  }, !value ? Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Add Icon', 'innocode-block-counter') : Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Update Icon', 'innocode-block-counter')), isOpened && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["Modal"], {
    title: label,
    onRequestClose: function onRequestClose() {
      setIsOpened(false);
    }
  }, Object(lodash__WEBPACK_IMPORTED_MODULE_4__["chunk"])(icons, 5).map(function (line) {
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["Flex"], {
      key: line.map(function (icon) {
        return icon.value;
      }).join('|'),
      justify: "flex-start"
    }, line.map(function (icon) {
      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["FlexItem"], {
        key: icon.value,
        style: {
          marginBottom: 8
        }
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["Button"], {
        isPressed: icon.value === value,
        onClick: function onClick() {
          setSelected(icon.value);
        }
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["Icon"], {
        icon: Object(lodash__WEBPACK_IMPORTED_MODULE_4__["has"])(icon, 'icon') ? icon.icon : icon.value
      })));
    }));
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["Flex"], {
    justify: "flex-end"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["FlexItem"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["Button"], {
    isPrimary: true,
    variant: "primary",
    onClick: function onClick() {
      onChange(selected);
      setIsOpened(false);
    }
  }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Set Icon', 'innocode-block-counter'))))));
}

/***/ }),

/***/ "./src/attributes.js":
/*!***************************!*\
  !*** ./src/attributes.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constants */ "./src/constants/index.js");
/* harmony import */ var _constants_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./constants/editor */ "./src/constants/editor.js");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }




/* harmony default export */ __webpack_exports__["default"] = (_objectSpread({
  hasSectionTitle: {
    type: 'boolean',
    default: _constants_editor__WEBPACK_IMPORTED_MODULE_3__["HAS_SECTION_TITLE_DEFAULT"]
  },
  title: {
    type: 'string',
    source: 'html',
    selector: ".".concat(_constants__WEBPACK_IMPORTED_MODULE_2__["BLOCK_CLASS_NAME"], "-title")
  },
  hasSectionDescription: {
    type: 'boolean',
    default: _constants_editor__WEBPACK_IMPORTED_MODULE_3__["HAS_SECTION_DESCRIPTION_DEFAULT"]
  },
  description: {
    type: 'string',
    source: 'html',
    multiline: 'p',
    selector: ".".concat(_constants__WEBPACK_IMPORTED_MODULE_2__["BLOCK_CLASS_NAME"], "-description")
  },
  columns: {
    type: 'integer',
    minimum: 1,
    maximum: _constants_editor__WEBPACK_IMPORTED_MODULE_3__["COLUMNS_MAX"],
    default: _constants_editor__WEBPACK_IMPORTED_MODULE_3__["COLUMNS_DEFAULT"]
  },
  hasTitle: {
    type: 'boolean',
    default: _constants_editor__WEBPACK_IMPORTED_MODULE_3__["HAS_TITLE_DEFAULT"]
  },
  hasIcon: {
    type: 'boolean',
    default: _constants_editor__WEBPACK_IMPORTED_MODULE_3__["HAS_ICON_DEFAULT"]
  },
  hasDescription: {
    type: 'boolean',
    default: _constants_editor__WEBPACK_IMPORTED_MODULE_3__["HAS_DESCRIPTION_DEFAULT"]
  },
  layout: {
    type: 'string',
    default: _constants_editor__WEBPACK_IMPORTED_MODULE_3__["LAYOUT_DEFAULT"]
  }
}, Object(lodash__WEBPACK_IMPORTED_MODULE_1__["range"])(_constants_editor__WEBPACK_IMPORTED_MODULE_3__["COLUMNS_MAX"]).reduce(function (columns, i) {
  var _objectSpread2;

  return _objectSpread(_objectSpread({}, columns), {}, (_objectSpread2 = {}, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_objectSpread2, "icon-".concat(i), {
    type: 'string'
  }), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_objectSpread2, "number-".concat(i), {
    type: 'string',
    source: 'html',
    selector: ".".concat(_constants__WEBPACK_IMPORTED_MODULE_2__["BLOCK_CLASS_NAME"], "-item_").concat(i + 1, " .").concat(_constants__WEBPACK_IMPORTED_MODULE_2__["BLOCK_CLASS_NAME"], "-item__number")
  }), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_objectSpread2, "title-".concat(i), {
    type: 'string',
    source: 'html',
    selector: ".".concat(_constants__WEBPACK_IMPORTED_MODULE_2__["BLOCK_CLASS_NAME"], "-item_").concat(i + 1, " .").concat(_constants__WEBPACK_IMPORTED_MODULE_2__["BLOCK_CLASS_NAME"], "-item__title")
  }), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_objectSpread2, "description-".concat(i), {
    type: 'string',
    source: 'html',
    multiline: 'p',
    selector: ".".concat(_constants__WEBPACK_IMPORTED_MODULE_2__["BLOCK_CLASS_NAME"], "-item_").concat(i + 1, " .").concat(_constants__WEBPACK_IMPORTED_MODULE_2__["BLOCK_CLASS_NAME"], "-item__description")
  }), _objectSpread2));
}, {})));

/***/ }),

/***/ "./src/constants/editor.js":
/*!*********************************!*\
  !*** ./src/constants/editor.js ***!
  \*********************************/
/*! exports provided: COLUMNS_MAX, COLUMNS_DEFAULT, LAYOUT_BEFORE_TITLE, LAYOUT_AFTER_TITLE, LAYOUT_DEFAULT, SECTION_TITLE_TAG, TITLE_TAG, ICONS, HAS_SECTION_TITLE_DEFAULT, HAS_SECTION_DESCRIPTION_DEFAULT, HAS_TITLE_DEFAULT, HAS_ICON_DEFAULT, HAS_DESCRIPTION_DEFAULT, NUMBER_EXAMPLES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "COLUMNS_MAX", function() { return COLUMNS_MAX; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "COLUMNS_DEFAULT", function() { return COLUMNS_DEFAULT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LAYOUT_BEFORE_TITLE", function() { return LAYOUT_BEFORE_TITLE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LAYOUT_AFTER_TITLE", function() { return LAYOUT_AFTER_TITLE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LAYOUT_DEFAULT", function() { return LAYOUT_DEFAULT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SECTION_TITLE_TAG", function() { return SECTION_TITLE_TAG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TITLE_TAG", function() { return TITLE_TAG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ICONS", function() { return ICONS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HAS_SECTION_TITLE_DEFAULT", function() { return HAS_SECTION_TITLE_DEFAULT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HAS_SECTION_DESCRIPTION_DEFAULT", function() { return HAS_SECTION_DESCRIPTION_DEFAULT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HAS_TITLE_DEFAULT", function() { return HAS_TITLE_DEFAULT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HAS_ICON_DEFAULT", function() { return HAS_ICON_DEFAULT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HAS_DESCRIPTION_DEFAULT", function() { return HAS_DESCRIPTION_DEFAULT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NUMBER_EXAMPLES", function() { return NUMBER_EXAMPLES; });
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/hooks */ "@wordpress/hooks");
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_0__);

var COLUMNS_MAX = Object(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_0__["applyFilters"])('innocode.block-counter.columns.max', 6);
var COLUMNS_DEFAULT = Object(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_0__["applyFilters"])('innocode.block-counter.columns.default', 3);
var LAYOUT_BEFORE_TITLE = 'before_title';
var LAYOUT_AFTER_TITLE = 'after_title';
var LAYOUT_DEFAULT = Object(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_0__["applyFilters"])('innocode.block-counter.layout.default', LAYOUT_BEFORE_TITLE);
var SECTION_TITLE_TAG = Object(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_0__["applyFilters"])('innocode.block-counter.section_title.tag', 'h3');
var TITLE_TAG = Object(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_0__["applyFilters"])('innocode.block-counter.title.tag', 'h4');
var ICONS = Object(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_0__["applyFilters"])('innocode.block-counter.icons', Object(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_0__["applyFilters"])('innocode.block.icons', []));
var HAS_SECTION_TITLE_DEFAULT = Object(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_0__["applyFilters"])('innocode.block-counter.has_section_title.default', true);
var HAS_SECTION_DESCRIPTION_DEFAULT = Object(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_0__["applyFilters"])('innocode.block-counter.has_section_description.default', false);
var HAS_TITLE_DEFAULT = Object(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_0__["applyFilters"])('innocode.block-counter.has_title.default', true);
var HAS_ICON_DEFAULT = Object(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_0__["applyFilters"])('innocode.block-counter.has_icon.default', false);
var HAS_DESCRIPTION_DEFAULT = Object(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_0__["applyFilters"])('innocode.block-counter.has_description.default', true);
var NUMBER_EXAMPLES = Object(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_0__["applyFilters"])('innocode.block-counter.number.examples', ['1,234.95', '934', '$100.00', '95%']);

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

/***/ "./src/edit.js":
/*!*********************!*\
  !*** ./src/edit.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Edit; });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./constants */ "./src/constants/index.js");
/* harmony import */ var _constants_editor__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./constants/editor */ "./src/constants/editor.js");
/* harmony import */ var _IconsPicker__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./IconsPicker */ "./src/IconsPicker.js");




/* eslint-disable @wordpress/no-unsafe-wp-apis */








function Edit(props) {
  var attributes = props.attributes,
      setAttributes = props.setAttributes;
  var _attributes$hasSectio = attributes.hasSectionTitle,
      hasSectionTitle = _attributes$hasSectio === void 0 ? _constants_editor__WEBPACK_IMPORTED_MODULE_8__["HAS_SECTION_TITLE_DEFAULT"] : _attributes$hasSectio,
      title = attributes.title,
      _attributes$hasSectio2 = attributes.hasSectionDescription,
      hasSectionDescription = _attributes$hasSectio2 === void 0 ? _constants_editor__WEBPACK_IMPORTED_MODULE_8__["HAS_SECTION_DESCRIPTION_DEFAULT"] : _attributes$hasSectio2,
      description = attributes.description,
      _attributes$columns = attributes.columns,
      columns = _attributes$columns === void 0 ? _constants_editor__WEBPACK_IMPORTED_MODULE_8__["COLUMNS_DEFAULT"] : _attributes$columns,
      _attributes$hasTitle = attributes.hasTitle,
      hasTitle = _attributes$hasTitle === void 0 ? _constants_editor__WEBPACK_IMPORTED_MODULE_8__["HAS_TITLE_DEFAULT"] : _attributes$hasTitle,
      _attributes$hasIcon = attributes.hasIcon,
      hasIcon = _attributes$hasIcon === void 0 ? _constants_editor__WEBPACK_IMPORTED_MODULE_8__["HAS_ICON_DEFAULT"] : _attributes$hasIcon,
      _attributes$hasDescri = attributes.hasDescription,
      hasDescription = _attributes$hasDescri === void 0 ? _constants_editor__WEBPACK_IMPORTED_MODULE_8__["HAS_DESCRIPTION_DEFAULT"] : _attributes$hasDescri,
      _attributes$layout = attributes.layout,
      layout = _attributes$layout === void 0 ? _constants_editor__WEBPACK_IMPORTED_MODULE_8__["LAYOUT_DEFAULT"] : _attributes$layout;

  var _useState = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["useState"])(Object(lodash__WEBPACK_IMPORTED_MODULE_6__["range"])(0, _constants_editor__WEBPACK_IMPORTED_MODULE_8__["COLUMNS_MAX"]).map(function () {
    return _constants_editor__WEBPACK_IMPORTED_MODULE_8__["NUMBER_EXAMPLES"][Object(lodash__WEBPACK_IMPORTED_MODULE_6__["random"])(0, _constants_editor__WEBPACK_IMPORTED_MODULE_8__["NUMBER_EXAMPLES"].length - 1)];
  })),
      _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(_useState, 1),
      randomNumbers = _useState2[0];

  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("div", Object(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__["useBlockProps"])({
    className: "".concat(_constants__WEBPACK_IMPORTED_MODULE_7__["BLOCK_CLASS_NAME"], " ").concat(_constants__WEBPACK_IMPORTED_MODULE_7__["BLOCK_CLASS_NAME"], "_columns-").concat(columns)
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__["InspectorControls"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__["PanelBody"], {
    title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Section Settings', 'innocode-block-counter'),
    initialOpen: false
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__["PanelRow"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("legend", {
    className: "blocks-base-control__label"
  }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Show title', 'innocode-block-counter')), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__["FormToggle"], {
    checked: hasSectionTitle,
    onChange: function onChange(event) {
      setAttributes({
        hasSectionTitle: event.target.checked
      });
    }
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__["PanelRow"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("legend", {
    className: "blocks-base-control__label"
  }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Show description', 'innocode-block-counter')), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__["FormToggle"], {
    checked: hasSectionDescription,
    onChange: function onChange(event) {
      setAttributes({
        hasSectionDescription: event.target.checked
      });
    }
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__["PanelRow"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("legend", {
    className: "blocks-base-control__label"
  }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Columns', 'innocode-block-counter')), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__["__experimentalRadioGroup"], {
    onChange: function onChange(value) {
      setAttributes({
        columns: value
      });
    },
    checked: columns
  }, Object(lodash__WEBPACK_IMPORTED_MODULE_6__["range"])(1, _constants_editor__WEBPACK_IMPORTED_MODULE_8__["COLUMNS_MAX"] + 1).map(function (i) {
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__["__experimentalRadio"], {
      key: i,
      value: i
    }, i);
  })))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__["PanelBody"], {
    title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Item Settings', 'innocode-block-counter')
  }, !!_constants_editor__WEBPACK_IMPORTED_MODULE_8__["ICONS"].length && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__["PanelRow"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("legend", {
    className: "blocks-base-control__label"
  }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Show icon', 'innocode-block-counter')), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__["FormToggle"], {
    checked: hasIcon,
    onChange: function onChange(event) {
      setAttributes({
        hasIcon: event.target.checked
      });
    }
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__["PanelRow"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("legend", {
    className: "blocks-base-control__label"
  }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Show title', 'innocode-block-counter')), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__["FormToggle"], {
    checked: hasTitle,
    onChange: function onChange(event) {
      setAttributes({
        hasTitle: event.target.checked
      });
    }
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__["PanelRow"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("legend", {
    className: "blocks-base-control__label"
  }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Show description', 'innocode-block-counter')), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__["FormToggle"], {
    checked: hasDescription,
    onChange: function onChange(event) {
      setAttributes({
        hasDescription: event.target.checked
      });
    }
  })), hasTitle && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__["PanelRow"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__["RadioControl"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Layout', 'innocode-block-counter'),
    selected: layout,
    disabled: !hasTitle,
    options: [{
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Before Title', 'innocode-block-counter'),
      value: _constants_editor__WEBPACK_IMPORTED_MODULE_8__["LAYOUT_BEFORE_TITLE"]
    }, {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('After Title', 'innocode-block-counter'),
      value: _constants_editor__WEBPACK_IMPORTED_MODULE_8__["LAYOUT_AFTER_TITLE"]
    }],
    onChange: function onChange(value) {
      setAttributes({
        layout: value
      });
    }
  }))), !!_constants_editor__WEBPACK_IMPORTED_MODULE_8__["ICONS"].length && hasIcon && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__["PanelBody"], {
    title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Icons', 'innocode-block-counter')
  }, Object(lodash__WEBPACK_IMPORTED_MODULE_6__["range"])(columns).map(function (i) {
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__["PanelRow"], {
      key: i
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(_IconsPicker__WEBPACK_IMPORTED_MODULE_9__["default"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["sprintf"])(
      /* translators: %d: Column number. */
      Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Column #%d', 'innocode-block-counter'), i + 1),
      icons: _constants_editor__WEBPACK_IMPORTED_MODULE_8__["ICONS"],
      value: attributes["icon-".concat(i)],
      onChange: function onChange(value) {
        setAttributes(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, "icon-".concat(i), value));
      }
    }));
  }))), hasSectionTitle && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__["RichText"], {
    tagName: _constants_editor__WEBPACK_IMPORTED_MODULE_8__["SECTION_TITLE_TAG"],
    value: title,
    placeholder: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Title', 'innocode-block-counter'),
    onChange: function onChange(value) {
      setAttributes({
        title: value
      });
    },
    keepPlaceholderOnFocus: true,
    className: "".concat(_constants__WEBPACK_IMPORTED_MODULE_7__["BLOCK_CLASS_NAME"], "-title")
  }), hasSectionDescription && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__["RichText"], {
    tagName: "div",
    multiline: "p",
    value: description,
    placeholder: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Description', 'innocode-block-counter'),
    onChange: function onChange(value) {
      setAttributes({
        description: value
      });
    },
    keepPlaceholderOnFocus: true,
    className: "".concat(_constants__WEBPACK_IMPORTED_MODULE_7__["BLOCK_CLASS_NAME"], "-description")
  }), columns > 0 && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("ul", {
    className: "".concat(_constants__WEBPACK_IMPORTED_MODULE_7__["BLOCK_CLASS_NAME"], "-list")
  }, Object(lodash__WEBPACK_IMPORTED_MODULE_6__["range"])(columns).map(function (i) {
    var icon = _constants_editor__WEBPACK_IMPORTED_MODULE_8__["ICONS"].find(function (_ref) {
      var value = _ref.value;
      return value === attributes["icon-".concat(i)];
    });
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("li", {
      key: i,
      className: "".concat(_constants__WEBPACK_IMPORTED_MODULE_7__["BLOCK_CLASS_NAME"], "-item ").concat(_constants__WEBPACK_IMPORTED_MODULE_7__["BLOCK_CLASS_NAME"], "-item_").concat(i + 1)
    }, !!icon && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__["Icon"], {
      icon: Object(lodash__WEBPACK_IMPORTED_MODULE_6__["has"])(icon, 'icon') ? icon.icon : icon.value
    }), hasTitle && layout === _constants_editor__WEBPACK_IMPORTED_MODULE_8__["LAYOUT_AFTER_TITLE"] && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__["RichText"], {
      tagName: _constants_editor__WEBPACK_IMPORTED_MODULE_8__["TITLE_TAG"],
      value: attributes["title-".concat(i)],
      placeholder: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Title', 'innocode-block-counter'),
      onChange: function onChange(value) {
        setAttributes(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, "title-".concat(i), value));
      },
      keepPlaceholderOnFocus: true,
      className: "".concat(_constants__WEBPACK_IMPORTED_MODULE_7__["BLOCK_CLASS_NAME"], "-item__title")
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__["RichText"], {
      tagName: "div",
      value: attributes["number-".concat(i)],
      placeholder: randomNumbers[i],
      onChange: function onChange(value) {
        setAttributes(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, "number-".concat(i), value));
      },
      keepPlaceholderOnFocus: true,
      className: "".concat(_constants__WEBPACK_IMPORTED_MODULE_7__["BLOCK_CLASS_NAME"], "-item__number")
    }), hasTitle && layout === _constants_editor__WEBPACK_IMPORTED_MODULE_8__["LAYOUT_BEFORE_TITLE"] && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__["RichText"], {
      tagName: _constants_editor__WEBPACK_IMPORTED_MODULE_8__["TITLE_TAG"],
      value: attributes["title-".concat(i)],
      placeholder: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Title', 'innocode-block-counter'),
      onChange: function onChange(value) {
        setAttributes(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, "title-".concat(i), value));
      },
      keepPlaceholderOnFocus: true,
      className: "".concat(_constants__WEBPACK_IMPORTED_MODULE_7__["BLOCK_CLASS_NAME"], "-item__title")
    }), hasDescription && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__["RichText"], {
      tagName: "div",
      multiline: "p",
      value: attributes["description-".concat(i)],
      placeholder: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Description', 'innocode-block-counter'),
      onChange: function onChange(value) {
        setAttributes(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, "description-".concat(i), value));
      },
      keepPlaceholderOnFocus: true,
      className: "".concat(_constants__WEBPACK_IMPORTED_MODULE_7__["BLOCK_CLASS_NAME"], "-item__description")
    }));
  })));
}

/***/ }),

/***/ "./src/icon.js":
/*!*********************!*\
  !*** ./src/icon.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = (function () {
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("svg", {
    viewBox: "0 0 36 36",
    xmlns: "http://www.w3.org/2000/svg"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
    d: "M31.4 0H4.6C2 0 0 2 0 4.6V25.4C0 28 2 30 4.6 30H31.4C34 30 36 28 36 25.4V4.6C36 2 34 0 31.4 0ZM33 25.4C33 26.2 32.2 27 31.4 27H4.6C3.8 27 3 26.2 3 25.4V4.6C3 3.8 3.8 3 4.6 3H31.4C32.2 3 33 3.8 33 4.6V25.4Z",
    fill: "black"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
    d: "M4 33H32V36H4V33Z",
    fill: "black"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
    d: "M12.861 22.724C11.529 22.724 10.563 22.466 9.963 21.95C9.375 21.434 9.057 20.576 9.009 19.376C8.997 18.86 8.997 18.32 9.009 17.756H11.439V19.682C11.439 20.414 11.889 20.78 12.789 20.78C13.653 20.78 14.097 20.42 14.121 19.7C14.133 19.244 14.139 18.836 14.139 18.476C14.139 18.104 14.133 17.744 14.121 17.396C14.097 17.048 13.983 16.754 13.779 16.514C13.587 16.262 13.215 16.142 12.663 16.154L10.989 16.172L10.917 14.174L13.689 10.268H9.171V8.162H16.461L16.443 10.196L13.563 14.102C14.547 14.162 15.273 14.456 15.741 14.984C16.221 15.5 16.491 16.328 16.551 17.468C16.563 17.792 16.569 18.116 16.569 18.44C16.569 18.752 16.563 19.064 16.551 19.376C16.491 20.576 16.173 21.434 15.597 21.95C15.033 22.466 14.121 22.724 12.861 22.724Z",
    fill: "black"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
    d: "M23.4023 22.742C22.1303 22.742 21.2063 22.484 20.6303 21.968C20.0663 21.44 19.7843 20.582 19.7843 19.394C19.7843 19.226 19.7843 19.022 19.7843 18.782C19.7843 18.542 19.7903 18.314 19.8023 18.098H22.2143C22.2023 18.398 22.1903 18.686 22.1783 18.962C22.1783 19.226 22.1903 19.514 22.2143 19.826C22.2263 20.126 22.3163 20.36 22.4843 20.528C22.6643 20.696 22.9583 20.78 23.3663 20.78C24.1223 20.78 24.5123 20.45 24.5363 19.79C24.5603 19.31 24.5783 18.764 24.5903 18.152C24.6023 17.54 24.6143 16.886 24.6263 16.19H24.2303C24.0983 16.466 23.8643 16.7 23.5283 16.892C23.2043 17.072 22.8083 17.162 22.3403 17.162C21.8483 17.162 21.3863 17.06 20.9543 16.856C20.5343 16.652 20.1923 16.328 19.9283 15.884C19.6763 15.44 19.5443 14.858 19.5323 14.138C19.5323 13.442 19.5323 12.86 19.5323 12.392C19.5323 11.924 19.5383 11.576 19.5503 11.348C19.5983 10.148 19.9103 9.29 20.4863 8.774C21.0743 8.258 22.0103 8 23.2943 8C24.5903 8 25.5143 8.258 26.0663 8.774C26.6303 9.29 26.9243 10.148 26.9483 11.348C26.9723 12.452 26.9843 13.442 26.9843 14.318C26.9963 15.182 26.9963 16.016 26.9843 16.82C26.9843 17.624 26.9723 18.482 26.9483 19.394C26.9243 20.582 26.6243 21.44 26.0483 21.968C25.4843 22.484 24.6023 22.742 23.4023 22.742ZM23.2763 15.2C24.0803 15.2 24.5243 14.924 24.6083 14.372C24.5963 13.796 24.5843 13.214 24.5723 12.626C24.5603 12.038 24.5423 11.456 24.5183 10.88C24.5063 10.256 24.0923 9.944 23.2763 9.944C22.4123 9.944 21.9803 10.268 21.9803 10.916C21.9803 10.988 21.9803 11.168 21.9803 11.456C21.9803 11.744 21.9743 12.074 21.9623 12.446C21.9623 12.818 21.9623 13.172 21.9623 13.508C21.9623 13.832 21.9623 14.072 21.9623 14.228C21.9743 14.552 22.1003 14.798 22.3403 14.966C22.5923 15.122 22.9043 15.2 23.2763 15.2Z",
    fill: "black"
  }));
});

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit */ "./src/edit.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./save */ "./src/save.js");
/* harmony import */ var _attributes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./attributes */ "./src/attributes.js");
/* harmony import */ var _icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./icon */ "./src/icon.js");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./style.scss */ "./src/style.scss");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_5__);






Object(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__["registerBlockType"])('innocode/wp-block-counter', {
  apiVersion: 2,
  supports: {
    align: ['center', 'wide', 'full'],
    className: false
  },
  edit: _edit__WEBPACK_IMPORTED_MODULE_1__["default"],
  save: _save__WEBPACK_IMPORTED_MODULE_2__["default"],
  attributes: _attributes__WEBPACK_IMPORTED_MODULE_3__["default"],
  icon: _icon__WEBPACK_IMPORTED_MODULE_4__["default"]
});

/***/ }),

/***/ "./src/save.js":
/*!*********************!*\
  !*** ./src/save.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return save; });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./constants */ "./src/constants/index.js");
/* harmony import */ var _constants_editor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./constants/editor */ "./src/constants/editor.js");





function save(_ref) {
  var attributes = _ref.attributes;
  var _attributes$hasSectio = attributes.hasSectionTitle,
      hasSectionTitle = _attributes$hasSectio === void 0 ? true : _attributes$hasSectio,
      title = attributes.title,
      _attributes$hasSectio2 = attributes.hasSectionDescription,
      hasSectionDescription = _attributes$hasSectio2 === void 0 ? false : _attributes$hasSectio2,
      description = attributes.description,
      _attributes$columns = attributes.columns,
      columns = _attributes$columns === void 0 ? _constants_editor__WEBPACK_IMPORTED_MODULE_4__["COLUMNS_DEFAULT"] : _attributes$columns,
      _attributes$hasIcon = attributes.hasIcon,
      hasIcon = _attributes$hasIcon === void 0 ? false : _attributes$hasIcon,
      _attributes$hasTitle = attributes.hasTitle,
      hasTitle = _attributes$hasTitle === void 0 ? true : _attributes$hasTitle,
      _attributes$hasDescri = attributes.hasDescription,
      hasDescription = _attributes$hasDescri === void 0 ? true : _attributes$hasDescri,
      _attributes$layout = attributes.layout,
      layout = _attributes$layout === void 0 ? _constants_editor__WEBPACK_IMPORTED_MODULE_4__["LAYOUT_DEFAULT"] : _attributes$layout;
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__["useBlockProps"].save({
    className: "".concat(_constants__WEBPACK_IMPORTED_MODULE_3__["BLOCK_CLASS_NAME"], " ").concat(_constants__WEBPACK_IMPORTED_MODULE_3__["BLOCK_CLASS_NAME"], "_columns-").concat(columns)
  }), hasSectionTitle && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__["RichText"].Content, {
    tagName: _constants_editor__WEBPACK_IMPORTED_MODULE_4__["SECTION_TITLE_TAG"],
    className: "".concat(_constants__WEBPACK_IMPORTED_MODULE_3__["BLOCK_CLASS_NAME"], "-title"),
    value: title
  }), hasSectionDescription && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__["RichText"].Content, {
    tagName: "div",
    multiline: "p",
    value: description,
    className: "".concat(_constants__WEBPACK_IMPORTED_MODULE_3__["BLOCK_CLASS_NAME"], "-description")
  }), columns > 0 && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("ul", {
    className: "".concat(_constants__WEBPACK_IMPORTED_MODULE_3__["BLOCK_CLASS_NAME"], "-list")
  }, Object(lodash__WEBPACK_IMPORTED_MODULE_2__["range"])(columns).map(function (i) {
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("li", {
      key: i,
      className: "".concat(_constants__WEBPACK_IMPORTED_MODULE_3__["BLOCK_CLASS_NAME"], "-item ").concat(_constants__WEBPACK_IMPORTED_MODULE_3__["BLOCK_CLASS_NAME"], "-item_").concat(i + 1)
    }, hasIcon && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "".concat(_constants__WEBPACK_IMPORTED_MODULE_3__["BLOCK_CLASS_NAME"], "-item__icon")
    }, attributes["icon-".concat(i)]), hasTitle && layout === _constants_editor__WEBPACK_IMPORTED_MODULE_4__["LAYOUT_AFTER_TITLE"] && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__["RichText"].Content, {
      tagName: _constants_editor__WEBPACK_IMPORTED_MODULE_4__["TITLE_TAG"],
      className: "".concat(_constants__WEBPACK_IMPORTED_MODULE_3__["BLOCK_CLASS_NAME"], "-item__title"),
      value: attributes["title-".concat(i)]
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__["RichText"].Content, {
      tagName: "div",
      className: "".concat(_constants__WEBPACK_IMPORTED_MODULE_3__["BLOCK_CLASS_NAME"], "-item__number"),
      value: attributes["number-".concat(i)]
    }), hasTitle && layout === _constants_editor__WEBPACK_IMPORTED_MODULE_4__["LAYOUT_BEFORE_TITLE"] && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__["RichText"].Content, {
      tagName: _constants_editor__WEBPACK_IMPORTED_MODULE_4__["TITLE_TAG"],
      className: "".concat(_constants__WEBPACK_IMPORTED_MODULE_3__["BLOCK_CLASS_NAME"], "-item__title"),
      value: attributes["title-".concat(i)]
    }), hasDescription && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__["RichText"].Content, {
      tagName: "div",
      multiline: "p",
      value: attributes["description-".concat(i)],
      className: "".concat(_constants__WEBPACK_IMPORTED_MODULE_3__["BLOCK_CLASS_NAME"], "-item__description")
    }));
  })));
}

/***/ }),

/***/ "@wordpress/block-editor":
/*!*************************************!*\
  !*** external ["wp","blockEditor"] ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["blockEditor"]; }());

/***/ }),

/***/ "@wordpress/blocks":
/*!********************************!*\
  !*** external ["wp","blocks"] ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["blocks"]; }());

/***/ }),

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["components"]; }());

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["element"]; }());

/***/ }),

/***/ "@wordpress/hooks":
/*!*******************************!*\
  !*** external ["wp","hooks"] ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["hooks"]; }());

/***/ }),

/***/ "@wordpress/i18n":
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["i18n"]; }());

/***/ }),

/***/ "lodash":
/*!*************************!*\
  !*** external "lodash" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["lodash"]; }());

/***/ })

/******/ });
//# sourceMappingURL=index.js.map