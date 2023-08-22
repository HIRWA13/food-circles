/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/classes.ts":
/*!************************!*\
  !*** ./src/classes.ts ***!
  \************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.Hero = void 0;\nclass Hero {\n    constructor(image, headline) {\n        this.image = image;\n        this.headline = headline;\n    }\n}\nexports.Hero = Hero;\n\n\n//# sourceURL=webpack://restoview-website/./src/classes.ts?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.heroContainer = void 0;\nconst classes_1 = __webpack_require__(/*! ./classes */ \"./src/classes.ts\");\nconst utils_1 = __webpack_require__(/*! ./utils */ \"./src/utils.ts\");\nexports.heroContainer = document.getElementById('hero');\nconst restaurants = [\n    {\n        image: 'https://images.unsplash.com/photo-1593275513770-0566f717f3a5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',\n        name: 'The Hot Pot',\n        address: {\n            street: '1234 Main St',\n            zipCode: 12345,\n            city: 'Hawaii',\n            country: 'USA'\n        },\n        rating: 4.5,\n        menu: ['Hot Pot', 'Sushi', 'Ramen', 'Dumplings'],\n        reviews: ['Great food!', 'Great service!', 'Great atmosphere!'],\n        contact: [1234567890, 'iamhir@gmail.com']\n    },\n    {\n        image: 'https://images.unsplash.com/photo-1515669097368-22e68427d265?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',\n        name: 'The Hot Pot',\n        address: {\n            street: '1234 Main St',\n            zipCode: 12345,\n            city: 'Hawaii',\n            country: 'USA'\n        },\n        rating: 4.5,\n        menu: ['Hot Pot', 'Sushi', 'Ramen', 'Dumplings'],\n        reviews: ['Great food!', 'Great service!', 'Great atmosphere!'],\n        contact: [1234567890, 'iamhir@gmail.com']\n    },\n];\nconst hero = new classes_1.Hero('https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimage.cnbcfm.com%2Fapi%2Fv1%2Fimage%2F105989359-1561566296439gettyimages-492868234.jpg%3Fv%3D1561566362&f=1&nofb=1&ipt=fe45830be36e050e7b25ec0464a0dd9602055d1bb5ff94d0ff168f364d218e5d&ipo=images', '\"Explore Culinary Delights: Indulge in Exquisite Flavors  Where Gastronomy Meets Artistry\"');\n(0, utils_1.generateHero)(hero);\n\n\n//# sourceURL=webpack://restoview-website/./src/index.ts?");

/***/ }),

/***/ "./src/utils.ts":
/*!**********************!*\
  !*** ./src/utils.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.generateHero = void 0;\nconst index_1 = __webpack_require__(/*! ./index */ \"./src/index.ts\");\nconst generateHero = (obj) => {\n    const title = document.createElement('h3');\n    title.setAttribute('class', 'hero-title');\n    title.innerText = obj.headline;\n    title.style.position = 'absolute';\n    title.style.top = '50%';\n    title.style.right = '30%';\n    title.style.left = '30%';\n    const img = document.createElement('img');\n    img.src = obj.image;\n    index_1.heroContainer.appendChild(img);\n    index_1.heroContainer.appendChild(title);\n};\nexports.generateHero = generateHero;\n\n\n//# sourceURL=webpack://restoview-website/./src/utils.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	
/******/ })()
;