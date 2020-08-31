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
eval("__webpack_require__.r(__webpack_exports__);\nlet Component = (function() {\r\n    function navHeaderLink(text, id, {textColorClass, fontWeightClass, fontSize}) {\r\n        const headerListItem = document.createElement('li');\r\n        headerListItem.style.listStyle = 'none';\r\n    \r\n        const headerLink = document.createElement('a');\r\n        headerLink.href = `#${id}`;\r\n    \r\n        const header = document.createElement('h5');\r\n        header.textContent = text;\r\n        header.style.fontSize = fontSize || '1.1rem';\r\n        textColorClass && header.classList.add(textColorClass);\r\n        fontWeightClass && header.classList.add(fontWeightClass);\r\n    \r\n        headerLink.appendChild(header);\r\n        headerListItem.appendChild(headerLink);\r\n        return headerListItem;\r\n    }\r\n\r\n    function getStyledParagraph(textGroup) {\r\n        const para = document.createElement('p');\r\n        for (const text of textGroup) {\r\n            const span = document.createElement('span');\r\n            span.textContent = `${text} `;\r\n            if (text.startsWith('.')) {                    \r\n                span.classList.add('text-red');\r\n            }\r\n            para.appendChild(span);\r\n        }\r\n        return para;\r\n    }\r\n\r\n    function createUnorderedList(listTextGroups) {\r\n        const uList = document.createElement('ul');\r\n        for (const textGroup of listTextGroups) {\r\n            const listItem = document.createElement('li');\r\n            for (const text of textGroup) {\r\n                const span = document.createElement('span');\r\n                span.textContent = text;\r\n                if (text.startsWith('.')) {                    \r\n                    span.classList.add('text-red');\r\n                }\r\n                listItem.appendChild(span);\r\n            }\r\n            uList.appendChild(listItem);\r\n        }\r\n        return uList;\r\n    }\r\n    \r\n    function greenSpan(text, classlist) {\r\n        const span = document.createElement('span');\r\n        span.textContent = text;\r\n        span.classList.add(...classlist);\r\n        span.classList.add('text-green');\r\n        return span;\r\n    }\r\n\r\n    function getRow(rowProps) {\r\n        const row = document.createElement('div');\r\n        row.classList.add('row', 'my-2');\r\n        rowProps.classList && row.classList.add(...rowProps.classList);\r\n        console.log(rowProps.cols);\r\n        for (const child of rowProps.cols) {\r\n            const col = document.createElement('div');\r\n            col.style.fontSize = '0.9rem';\r\n            if (!child.text) {\r\n                col.textContent = child.classList.map(name => `.${name}`).join(' ');\r\n            } else {\r\n                col.textContent = child.text;\r\n            }\r\n            col.classList.add(...child.classList);\r\n            col.classList.add('py-3', 'bg-col');\r\n            row.appendChild(col);\r\n        }\r\n        return row;\r\n    }\r\n\r\n    function getContainerWithRows(rows) {\r\n        const container = document.createElement('div');\r\n        container.classList.add('container');\r\n        for (const row of rows) {\r\n            container.appendChild(getRow(row));\r\n        }\r\n        return container;\r\n    }\r\n\r\n    return {\r\n        navHeaderLink, createUnorderedList, greenSpan,\r\n        getRow, getStyledParagraph, getContainerWithRows\r\n    };\r\n})();\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (Component);\n\n//# sourceURL=webpack:///./docs/src/component-creators.js?");

/***/ }),

/***/ "./docs/src/content.js":
/*!*****************************!*\
  !*** ./docs/src/content.js ***!
  \*****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _component_creators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./component-creators */ \"./docs/src/component-creators.js\");\n\r\n\r\nfunction getHeading(id, text) {\r\n    const heading = document.createElement('h3');\r\n    heading.classList.add('section-header');\r\n    if (id.length > 0) {\r\n        heading.id = id;\r\n    }    \r\n    heading.textContent = text;\r\n    return heading;\r\n}\r\n\r\nfunction getSubheading(id, text) {\r\n    const subheading = document.createElement('h4');\r\n    subheading.id = id;\r\n    subheading.classList.add('fw-bold');\r\n    subheading.textContent = text;\r\n    return subheading;\r\n}\r\n\r\nfunction getParagraph(text, classnames = []) {\r\n    const paragraph = document.createElement('p');\r\n    paragraph.textContent = text;\r\n\r\n    classnames.forEach(name => paragraph.classList.add(name));\r\n    return paragraph;\r\n}\r\n\r\nconst content = document.getElementById('content');\r\n\r\n// Grid Layout\r\nconst gridLayoutHeading = getHeading('grid-layout', 'Grid Layout');\r\ncontent.appendChild(gridLayoutHeading);\r\n\r\nconst containerSubheading = getSubheading('container', 'Containers');\r\nconst description = 'Containers are the building blocks of the grid layout. They contain the rows that construct the grid. They also contain your content so that you can apply the required margin, padding and alignment.';\r\nconst containerDesc = getParagraph(description, ['text-grey', 'h5']);\r\ncontent.appendChild(containerSubheading);\r\ncontent.appendChild(containerDesc);\r\n\r\nconst containerFeatures = _component_creators__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createUnorderedList(\r\n    [\r\n        [\r\n            'The class ',\r\n            '.container ',\r\n            'is responsive across all viewports and sets a max-width at each breakpoint'\r\n        ],\r\n        [\r\n            'The class ',\r\n            '.container-fluid ',\r\n            'is always 100% wide with respect to its parent'\r\n        ],\r\n        [\r\n            '.container-[breakpoint] ',\r\n            'are 100% wide upto the specified breakpoint'\r\n        ]\r\n    ]\r\n);\r\ncontent.appendChild(containerFeatures);\r\ncontent.appendChild(getHeading('row-columns', 'Rows and Columns'));\r\nconst rowColDesc = getParagraph(\r\n    'Rows are contained within containers. Each row can display 12 columns by default. The number of columns can be changed by using the sass variable ',\r\n    ['h5', 'text-grey']\r\n);\r\nrowColDesc.appendChild(_component_creators__WEBPACK_IMPORTED_MODULE_0__[\"default\"].greenSpan('$grid-columns', ['h5']));\r\ncontent.appendChild(rowColDesc);\r\n\r\ncontent.appendChild(getSubheading('', 'Equal width columns'));\r\ncontent.appendChild(_component_creators__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getStyledParagraph([ 'Using the class', '.col', 'creates equal width columns' ]));\r\ncontent.appendChild(_component_creators__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getContainerWithRows(\r\n    [\r\n        { cols: [{classList: ['col']}, {classList: ['col']}, {classList: ['col']}] },\r\n        { cols: [{classList: ['col']}, {classList: ['col']}] }\r\n    ]    \r\n));\r\n\r\ncontent.appendChild(getSubheading('', 'Setting column widths'));\r\ncontent.appendChild(_component_creators__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getStyledParagraph(\r\n    [\r\n        'Classes',\r\n        '.col-[size]',\r\n        'can be used to create columns of specific sizes based on the maximum number of columns in the grid system '\r\n    ]\r\n));\r\ncontent.appendChild(_component_creators__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getContainerWithRows(\r\n    [\r\n        { cols: [{classList: ['col']}, {classList: ['col-6']}, {classList: ['col']}] },\r\n        { cols: [{classList: ['col-4']}, {classList: ['col-5']}, {classList: ['col']}] },\r\n        { cols: [{classList: ['col-8']}, {classList: ['col-4']}] },\r\n        { cols: [{classList: ['col-2']}, {classList: ['col-6']}, {classList: ['col-2']}] }\r\n    ]    \r\n));\r\n\r\ncontent.appendChild(getSubheading('', 'Responsive columns'));\r\ncontent.appendChild(_component_creators__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getStyledParagraph(\r\n    [\r\n        'Classes',\r\n        '.col-[breakpoint]-[size]',\r\n        'can be used to change the column width at each breakpoint. Since recurve has a desktop-first design approach, the default',\r\n        '.col-[responsive]-[size]',\r\n        'classes specify the size of the column for the specified breakpoint and downwardsResponsive columns can be mixed with',\r\n        '.col',\r\n        'columns and auto-width columns to achieve the required design.'\r\n    ]\r\n));\r\ncontent.appendChild(_component_creators__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getContainerWithRows(\r\n    [\r\n        { cols: [{classList: ['col']}, {classList: ['col-4', 'col-md-6']}] },\r\n        { cols: [{classList: ['col-4', 'col-md-6']}, {classList: ['col-4', 'col-md-6']}, {classList: ['col-4', 'col-md-6']}] },\r\n        { cols: [{classList: ['col-md-6']}, {classList: ['col-md-6']}] },\r\n        {\r\n            cols: [\r\n                {classList: ['col-8', 'col-lg-6', 'col-md-4', 'col-sm-3', 'col-xs-12']},\r\n                {classList: ['col-4', 'col-lg-6', 'col-md-8', 'col-sm-9', 'col-xs-12']}\r\n            ]\r\n        },\r\n        { cols: [{classList: ['col-6']}, {classList: ['col-6', 'col-md-8']}] },        \r\n    ]    \r\n));\r\n\r\ncontent.appendChild(getSubheading('', 'Responsive auto width columns'));\r\ncontent.appendChild(_component_creators__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getStyledParagraph(\r\n    [\r\n        '.col-auto',\r\n        'and',\r\n        '.col-[breakpoint]-[auto]',\r\n        'classes can be used to create auto-width columns which have the width property set to auto',\r\n        '.col-[breakpoint]-[auto]',\r\n        'makes the width auto for screens of that size and smaller, while',\r\n        '.col-auto',\r\n        'is the default and applies for all screens.'\r\n    ]\r\n));\r\ncontent.appendChild(_component_creators__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getContainerWithRows(\r\n    [\r\n        { cols: [{classList: ['col-2', 'col-lg-3']}, {classList: ['col-6', 'col-lg-auto']}, {classList: ['col-auto']}] },\r\n        { cols: [{classList: ['col-6', 'col-md-auto']}, {classList: ['col-6']}] }\r\n    ]    \r\n));\r\n\r\ncontent.appendChild(getSubheading('', 'Row Columns'));\r\ncontent.appendChild(_component_creators__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getStyledParagraph(\r\n    [\r\n        'Using the classes',\r\n        '.row-col-*',\r\n        'and their responsive variants',\r\n        '.col-row-[breakpoint]-*',\r\n        ' you can quickly set the number of columns as a shortcut directly along with the row instead of specifying the sizes on each column.'\r\n    ]\r\n));\r\nconst rowCol = _component_creators__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getContainerWithRows(\r\n    [\r\n        {\r\n            classList: ['row-cols-3'],\r\n            cols: [{classList: ['col']}, {classList: ['col']}, {classList: ['col']}, {classList: ['col']}]\r\n        },\r\n    ],\r\n);\r\ncontent.appendChild(rowCol);\n\n//# sourceURL=webpack:///./docs/src/content.js?");

/***/ }),

/***/ "./docs/src/index.js":
/*!***************************!*\
  !*** ./docs/src/index.js ***!
  \***************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _content__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./content */ \"./docs/src/content.js\");\n/* harmony import */ var _left_nav__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./left-nav */ \"./docs/src/left-nav.js\");\n/* harmony import */ var _right_nav__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./right-nav */ \"./docs/src/right-nav.js\");\n\r\n\r\n\n\n//# sourceURL=webpack:///./docs/src/index.js?");

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