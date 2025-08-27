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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ \"./src/styles.css\");\n\nconst city = \"Odesa\";\nfunction updateCurrentTime() {\n  const now = new Date();\n  let hours = now.getHours();\n  if (hours < 10) {\n    hours = `0${hours}`;\n  }\n  let minutes = now.getMinutes();\n  if (minutes < 10) {\n    minutes = `0${minutes}`;\n  }\n  const currentDay = now.getDate();\n  const days = [\"Sunday\", \"Monday\", \"Tuesday\", \"Wednesday\", \"Thursday\", \"Friday\", \"Saturday\"];\n  const months = [\"Jan\", \"Feb\", \"Mar\", \"Apr\", \"May\", \"Jun\", \"Jul\", \"Aug\", \"Sep\", \"Oct\", \"Nov\", \"Dec\"];\n  const month = months[now.getMonth()];\n  const day = days[now.getDay()];\n  const year = now.getFullYear();\n  const dateElement = document.getElementById('date');\n  const timeElement = document.getElementById('time');\n  if (dateElement) {\n    dateElement.innerHTML = `${month} ${currentDay}, ${year} - ${day}`;\n  }\n  if (timeElement) {\n    timeElement.innerHTML = `${hours}:${minutes}`;\n  }\n}\nfunction search(city) {\n  const apiKey = \"c6fb9cf9fcf533911a33d1b36aed1619\";\n  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;\n  fetch(apiUrl).then(response => response.json()).then(data => showTemperature(data)).catch(error => console.log(\"Mistake with uploaading weather\", error));\n}\nfunction showTemperature(response) {\n  document.getElementById('city').innerHTML = `${city}`;\n  const temperature = Math.round(response.main.temp);\n  document.getElementById('temperature').innerHTML = `${temperature}°C`;\n  const humidity = response.main.humidity;\n  document.getElementById('humidity').innerHTML = `${humidity}%`;\n  const pressure = response.main.pressure;\n  document.getElementById('pressure').innerHTML = `${pressure}Pa`;\n  const wind = response.wind.speed;\n  document.getElementById('wind').innerHTML = `${wind} km/h`;\n  const feelsLike = response.main.feels_like;\n  document.getElementById('feels-like').innerHTML = `Feels like ${feelsLike}°C`;\n  const description = response.weather[0].description;\n  document.getElementById('description').innerHTML = `${description}`;\n  const iconCode = response.weather[0].icon;\n  document.getElementById('icon').setAttribute(\"src\", `http://openweathermap.org/img/wn/${iconCode}@2x.png`);\n  document.getElementById('icon').setAttribute(\"alt\", description);\n}\nupdateCurrentTime();\nsetInterval(updateCurrentTime, 60000);\nsearch(city);\ndocument.getElementById(\"refresh\").addEventListener(\"click\", function () {\n  search(city);\n});\n\n//# sourceURL=webpack:///./src/index.js?\n}");

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack:///./src/styles.css?\n}");

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
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;