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

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.restaurants = exports.restaurantsContainer = exports.heroContainer = void 0;\nconst classes_1 = __webpack_require__(/*! ./classes */ \"./src/classes.ts\");\nconst utils_1 = __webpack_require__(/*! ./utils */ \"./src/utils.ts\");\nconst utils_2 = __webpack_require__(/*! ./utils */ \"./src/utils.ts\");\nexports.heroContainer = document.getElementById('hero');\nexports.restaurantsContainer = document.getElementById(\"restaurants\");\nexports.restaurants = [\n    {\n        image: 'https://images.unsplash.com/photo-1593275513770-0566f717f3a5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',\n        name: 'The Hot Pot',\n        address: {\n            street: '1234 Main St',\n            zipCode: 12345,\n            city: 'Kicukiro',\n            country: 'Rwanda'\n        },\n        rating: 4.5,\n        menu: ['Hot Pot', 'Sushi', 'Ramen', 'Dumplings'],\n        reviews: ['Great food!', 'Great service!', 'Great atmosphere!'],\n        contact: [787209830, 'iamhir@gmail.com']\n    },\n    {\n        image: 'https://images.unsplash.com/photo-1515669097368-22e68427d265?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',\n        name: 'The Delicious Spoon',\n        address: {\n            street: '1234 Main St',\n            zipCode: 12345,\n            city: 'Nyarugenge',\n            country: 'Rwanda'\n        },\n        rating: 4.5,\n        menu: ['Hot Pot--------1000 Rwf', 'Sushi ------- 5000 Rwf', 'Ramen-------- 20500 Rwf', 'Dumplings ------- 3500 Rwf'],\n        reviews: ['Great food!', 'Great service!', 'Great atmosphere!'],\n        contact: [789064536, 'iamhir@gmail.com']\n    },\n    {\n        image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fanglophone-direct.com%2Fap_img%2Frestaurant2.jpg&f=1&nofb=1&ipt=10acf44fb0a9d7480482a1ea8aa420d0d2139d198a06c7fea92ad10b64d420b5&ipo=images',\n        name: `Peter's Kithcen`,\n        address: {\n            street: '1234 Main St',\n            zipCode: 12345,\n            city: 'Gasabo',\n            country: 'Rwanda'\n        },\n        rating: 4.5,\n        menu: ['Hot Pot--------1000 Rwf', 'Sushi ------- 5000 Rwf', 'Ramen-------- 20500 Rwf', 'Dumplings ------- 3500 Rwf'],\n        reviews: ['Great food!', 'Great service!', 'Great atmosphere!'],\n        contact: [7678756789, 'iamhir@gmail.com']\n    },\n    {\n        image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwallup.net%2Fwp-content%2Fuploads%2F2019%2F09%2F761345-restaurant-food-architecture-interior-design-room.jpg&f=1&nofb=1&ipt=0f51a3ac61eafcf2f3d66db066510720c6c26469bd4c65f8874b65d1ff853f7c&ipo=images',\n        name: 'The Lux Resto',\n        address: {\n            street: '1234 Main St',\n            zipCode: 12345,\n            city: 'Musanze',\n            country: 'Rwanda'\n        },\n        rating: 4.5,\n        menu: ['Hot Pot--------1000 Rwf', 'Sushi ------- 5000 Rwf', 'Ramen-------- 20500 Rwf', 'Dumplings ------- 3500 Rwf'],\n        reviews: ['Great food!', 'Great service!', 'Great atmosphere!'],\n        contact: [7908768767, 'iamhir@gmail.com']\n    }\n];\n(0, utils_2.genRestaurant)(exports.restaurants);\nconst hero = new classes_1.Hero('https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimage.cnbcfm.com%2Fapi%2Fv1%2Fimage%2F105989359-1561566296439gettyimages-492868234.jpg%3Fv%3D1561566362&f=1&nofb=1&ipt=fe45830be36e050e7b25ec0464a0dd9602055d1bb5ff94d0ff168f364d218e5d&ipo=images', '\"Explore Culinary Delights: Indulge in Exquisite Flavors  Where Gastronomy Meets Artistry\"');\n(0, utils_1.generateHero)(hero);\n\n\n//# sourceURL=webpack://restoview-website/./src/index.ts?");

/***/ }),

/***/ "./src/utils.ts":
/*!**********************!*\
  !*** ./src/utils.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.genRestaurant = exports.generateHero = void 0;\nconst index_1 = __webpack_require__(/*! ./index */ \"./src/index.ts\");\nconst generateHero = (obj) => {\n    const title = document.createElement('h3');\n    title.setAttribute('class', 'hero-title');\n    title.innerText = obj.headline;\n    title.style.position = 'absolute';\n    title.style.top = '50%';\n    title.style.right = '30%';\n    title.style.left = '30%';\n    const img = document.createElement('img');\n    img.src = obj.image;\n    index_1.heroContainer.appendChild(img);\n    index_1.heroContainer.appendChild(title);\n};\nexports.generateHero = generateHero;\nconst genRestaurant = (restaurants) => {\n    for (const item of restaurants) {\n        const rest = document.createElement('div');\n        rest.setAttribute('class', 'rest-container');\n        const restHero = document.createElement('div');\n        restHero.setAttribute('class', 'rest-hero');\n        const img = document.createElement('img');\n        img.src = item.image;\n        img.style.width = '100%';\n        img.style.height = '100%';\n        restHero.appendChild(img);\n        rest.appendChild(restHero);\n        index_1.restaurantsContainer.appendChild(rest);\n        const restaurantDescription = document.createElement('div');\n        restaurantDescription.setAttribute('class', 'restaurant-description');\n        const restaurantName = document.createElement('h1');\n        restaurantName.setAttribute('class', 'rest-name');\n        const restaurantLocation = document.createElement('p');\n        restaurantLocation.setAttribute('class', 'rest-location');\n        const star = document.createElement('p');\n        star.setAttribute('class', 'star');\n        const restaurantRating = document.createElement('p');\n        const mail = document.createElement('p');\n        mail.setAttribute('class', 'rest-email');\n        const phone = document.createElement('p');\n        phone.setAttribute('class', 'rest-phone');\n        const bookBtn = document.createElement('button');\n        bookBtn.setAttribute('class', 'book-btn');\n        const viewMenu = document.createElement('button');\n        const nameRating = document.createElement('div');\n        nameRating.setAttribute('class', 'name-rating');\n        const starRating = document.createElement('div');\n        starRating.setAttribute('class', 'star-rating');\n        starRating.appendChild(star);\n        starRating.appendChild(restaurantRating);\n        nameRating.appendChild(restaurantName);\n        nameRating.appendChild(starRating);\n        viewMenu.setAttribute('class', 'view-menu');\n        restaurantRating.textContent = item.rating.toString();\n        restaurantLocation.setAttribute('class', 'restaurant-location');\n        star.textContent = '⭐';\n        restaurantName.textContent = item.name;\n        mail.textContent = '✉ ' + item.contact[1];\n        phone.textContent = '☎ ' + '250' + item.contact[0].toString();\n        restaurantLocation.textContent = '📍' + item.address.city + ', ' + ' ' + item.address.country;\n        bookBtn.textContent = 'Book a Table';\n        viewMenu.textContent = 'View Menu';\n        restaurantDescription.appendChild(nameRating);\n        restaurantDescription.appendChild(restaurantLocation);\n        restaurantDescription.appendChild(mail);\n        restaurantDescription.appendChild(phone);\n        restaurantDescription.appendChild(bookBtn);\n        restaurantDescription.appendChild(viewMenu);\n        restaurantDescription.setAttribute('class', 'restaurant-description');\n        rest.appendChild(restaurantDescription);\n    }\n};\nexports.genRestaurant = genRestaurant;\n\n\n//# sourceURL=webpack://restoview-website/./src/utils.ts?");

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