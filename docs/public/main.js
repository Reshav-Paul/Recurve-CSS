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
/******/ 	return __webpack_require__(__webpack_require__.s = "./docs/src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./docs/src/component-creators.js":
/*!****************************************!*\
  !*** ./docs/src/component-creators.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nlet Component = (function() {\r\n    function navHeaderLink(text, id, {textColorClass, fontWeightClass, fontSize}) {\r\n        const headerListItem = document.createElement('li');\r\n        headerListItem.style.listStyle = 'none';\r\n    \r\n        const headerLink = document.createElement('a');\r\n        headerLink.href = `#${id}`;\r\n    \r\n        const header = document.createElement('h5');\r\n        header.textContent = text;\r\n        header.style.fontSize = fontSize || '1.1rem';\r\n        textColorClass && header.classList.add(textColorClass);\r\n        fontWeightClass && header.classList.add(fontWeightClass);\r\n    \r\n        headerLink.appendChild(header);\r\n        headerListItem.appendChild(headerLink);\r\n        return headerListItem;\r\n    }\r\n    \r\n    return {navHeaderLink};\r\n})();\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (Component);\n\n//# sourceURL=webpack:///./docs/src/component-creators.js?");

/***/ }),

/***/ "./docs/src/content.js":
/*!*****************************!*\
  !*** ./docs/src/content.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function getHeading(id, text) {\r\n    const heading = document.createElement('h3');\r\n    heading.classList.add('section-header');\r\n    heading.id = id;\r\n    heading.textContent = text;\r\n    return heading;\r\n}\r\n\r\nfunction getSubheading(id, text) {\r\n    const subheading = document.createElement('h4');\r\n    subheading.id = id;\r\n    subheading.classList.add('fw-bold');\r\n    subheading.textContent = text;\r\n    return subheading;\r\n}\r\n\r\nfunction getParagraph(text, classnames = []) {\r\n    const paragraph = document.createElement('p');\r\n    paragraph.textContent = text;\r\n\r\n    classnames.forEach(name => paragraph.classList.add(name));\r\n    return paragraph;\r\n}\r\n\r\nconst content = document.getElementById('content');\r\n\r\n// Grid Layout\r\nlet gridLayoutHeading = getHeading('grid-layout', 'Grid Layout');\r\nlet containerSubheading = getSubheading('container', 'Containers');\r\ncontent.appendChild(gridLayoutHeading);\n\n//# sourceURL=webpack:///./docs/src/content.js?");

/***/ }),

/***/ "./docs/src/index.js":
/*!***************************!*\
  !*** ./docs/src/index.js ***!
  \***************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _content__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./content */ \"./docs/src/content.js\");\n/* harmony import */ var _content__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_content__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _left_nav__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./left-nav */ \"./docs/src/left-nav.js\");\n/* harmony import */ var _right_nav__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./right-nav */ \"./docs/src/right-nav.js\");\n\r\n\r\n\n\n//# sourceURL=webpack:///./docs/src/index.js?");

/***/ }),

/***/ "./docs/src/left-nav.js":
/*!******************************!*\
  !*** ./docs/src/left-nav.js ***!
  \******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _component_creators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./component-creators */ \"./docs/src/component-creators.js\");\n\r\n\r\nconst leftNav = document.getElementById('left-nav');\r\nleftNav.appendChild(_component_creators__WEBPACK_IMPORTED_MODULE_0__[\"default\"].navHeaderLink('HTML default restyle', 'html-restyle',\r\n    {textColorClass: 'text-red', fontWeightClass: 'fw-bold'}\r\n));\r\nleftNav.appendChild(_component_creators__WEBPACK_IMPORTED_MODULE_0__[\"default\"].navHeaderLink('Grid Layout', 'grid-layout',\r\n    {textColorClass: 'text-red', fontWeightClass: 'fw-bold'}\r\n));\r\n\n\n//# sourceURL=webpack:///./docs/src/left-nav.js?");

/***/ }),

/***/ "./docs/src/right-nav.js":
/*!*******************************!*\
  !*** ./docs/src/right-nav.js ***!
  \*******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _component_creators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./component-creators */ \"./docs/src/component-creators.js\");\n\r\n\r\nconst rightNav = document.getElementById('right-nav');\r\nrightNav.appendChild(_component_creators__WEBPACK_IMPORTED_MODULE_0__[\"default\"].navHeaderLink('HTML default restyle', 'html-restyle', {fontSize: '1rem'}));\r\n\r\nconst htmlRestyleSectionLinks = document.createElement('ul');\r\nhtmlRestyleSectionLinks.classList.add('px-2');\r\nconst htmlRestyleHeaders = document.querySelectorAll('#html-restyle-content > .section-header');\r\nhtmlRestyleHeaders.forEach(header => {\r\n    if (header.id == 'html-restyle') return;\r\n    htmlRestyleSectionLinks.appendChild(\r\n        _component_creators__WEBPACK_IMPORTED_MODULE_0__[\"default\"].navHeaderLink(header.textContent, header.id, {fontSize: '0.9rem'})\r\n    );\r\n});\r\nrightNav.appendChild(htmlRestyleSectionLinks);\n\n//# sourceURL=webpack:///./docs/src/right-nav.js?");

/***/ })

/******/ });