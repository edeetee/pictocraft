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
/******/ 	__webpack_require__.p = "./docs";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./imgs.ts":
/*!*****************!*\
  !*** ./imgs.ts ***!
  \*****************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var imgs = {
    //subjects
    me: 'ik',
    you: 'jij',
    us: 'wij',
    //feelings
    angry: 'boos',
    question: 'vraagteken',
    hello: 'hallo-zeggen-2',
    greetings: 'dag-zeggen',
    good: 'goed',
    bad: 'slecht',
    painHurt: 'pijn',
    crazy: 'onnozel-doen',
    haha: 'lachen',
    dance: 'dansen',
    //ideas
    lookAt: 'vinden',
    run: 'lopen',
    timeOut: 'time-out',
    whereIs: 'waar',
    outside: 'buiten',
    late: 'te-laat-klok',
    when: 'wanneer',
    night: 'nacht',
    dawn: 'ochtend',
    future: 'toekomst',
    why: 'waarom',
    how: 'hoe',
    //places
    hills: 'akkers',
    sea: 'zee',
    mountain: 'bergen',
    cave: 'grot',
    mine: 'mijn',
    jungle: 'jungle',
    iceberg: 'ijsberg',
    snow: 'sneeuw',
    //things
    tree: 'boom',
    bed: 'bed',
    rails: 'trein-rails',
    //comparators
    andPlus: 'plus',
    isEquals: 'gelijkheidsteken'
};
var baseImgUrl = "http://webservices.ccl.kuleuven.be/picto/sclera/";
function getImgs() {
    return Object.values(imgs);
}
exports.getImgs = getImgs;
function getUrls() {
    return getImgs().map(function (img) { return baseImgUrl + img + ".png"; });
}
exports.getUrls = getUrls;


/***/ }),

/***/ "./index.ts":
/*!******************!*\
  !*** ./index.ts ***!
  \******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var imgs_1 = __webpack_require__(/*! ./imgs */ "./imgs.ts");
// import {request} from 'http'
// import * as fs from 'fs'
var baseRelay = "https://httprelay.io/link/pictocraft";
var imgUrls = imgs_1.getUrls();
var imgsContainer = document.getElementById("interface");
var imgTemplate = imgsContainer.children.item(0);
imgsContainer.removeChild(imgTemplate);
var connectContainer = document.getElementById("connect");
var keyEl = document.getElementById("key");
document.getElementById("submit").onclick = function (ev) { return connect(keyEl.nodeValue); };
connect("1234");
function connect(key) {
    connectContainer.hidden = true;
    imgUrls.forEach(function (imgUrl) {
        var newPicto = imgTemplate.cloneNode();
        newPicto.src = imgUrl;
        imgsContainer.appendChild(newPicto);
    });
    imgsContainer.hidden = false;
    // request({
    //     url: baseRelay + 'f3fd',
    //     body: 'test1234',
    //     method: 'POST'
    // }, (err, resp, body) => {
    //     console.log(resp.statusCode)
    // })
}


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vaW1ncy50cyIsIndlYnBhY2s6Ly8vLi9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBeUMsaUNBQWlDO0FBQzFFLHdIQUFnSCxtQkFBbUIsRUFBRTtBQUNySTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOzs7QUFHQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNsRkEsSUFBTSxJQUFJLEdBQUc7SUFDVCxVQUFVO0lBQ1YsRUFBRSxFQUFFLElBQUk7SUFDUixHQUFHLEVBQUUsS0FBSztJQUNWLEVBQUUsRUFBRSxLQUFLO0lBRVQsVUFBVTtJQUNWLEtBQUssRUFBRSxNQUFNO0lBQ2IsUUFBUSxFQUFFLFlBQVk7SUFDdEIsS0FBSyxFQUFFLGdCQUFnQjtJQUN2QixTQUFTLEVBQUUsWUFBWTtJQUN2QixJQUFJLEVBQUUsTUFBTTtJQUNaLEdBQUcsRUFBRSxRQUFRO0lBQ2IsUUFBUSxFQUFFLE1BQU07SUFDaEIsS0FBSyxFQUFFLGNBQWM7SUFDckIsSUFBSSxFQUFFLFFBQVE7SUFDZCxLQUFLLEVBQUUsUUFBUTtJQUVmLE9BQU87SUFDUCxNQUFNLEVBQUUsUUFBUTtJQUNoQixHQUFHLEVBQUUsT0FBTztJQUNaLE9BQU8sRUFBRSxVQUFVO0lBQ25CLE9BQU8sRUFBRSxNQUFNO0lBQ2YsT0FBTyxFQUFFLFFBQVE7SUFDakIsSUFBSSxFQUFFLGNBQWM7SUFDcEIsSUFBSSxFQUFFLFNBQVM7SUFDZixLQUFLLEVBQUUsT0FBTztJQUNkLElBQUksRUFBRSxTQUFTO0lBQ2YsTUFBTSxFQUFFLFVBQVU7SUFDbEIsR0FBRyxFQUFFLFFBQVE7SUFDYixHQUFHLEVBQUUsS0FBSztJQUVWLFFBQVE7SUFDUixLQUFLLEVBQUUsUUFBUTtJQUNmLEdBQUcsRUFBRSxLQUFLO0lBQ1YsUUFBUSxFQUFFLFFBQVE7SUFDbEIsSUFBSSxFQUFFLE1BQU07SUFDWixJQUFJLEVBQUUsTUFBTTtJQUNaLE1BQU0sRUFBRSxRQUFRO0lBQ2hCLE9BQU8sRUFBRSxTQUFTO0lBQ2xCLElBQUksRUFBRSxRQUFRO0lBRWQsUUFBUTtJQUNSLElBQUksRUFBRSxNQUFNO0lBQ1osR0FBRyxFQUFFLEtBQUs7SUFDVixLQUFLLEVBQUUsYUFBYTtJQUVwQixhQUFhO0lBQ2IsT0FBTyxFQUFFLE1BQU07SUFDZixRQUFRLEVBQUUsa0JBQWtCO0NBQy9CO0FBRUQsSUFBTSxVQUFVLEdBQUcsa0RBQWtEO0FBRXJFLFNBQWdCLE9BQU87SUFDbkIsT0FBTyxNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQztBQUM5QixDQUFDO0FBRkQsMEJBRUM7QUFFRCxTQUFnQixPQUFPO0lBQ25CLE9BQU8sT0FBTyxFQUFFLENBQUMsR0FBRyxDQUFDLGFBQUcsSUFBSSxpQkFBVSxHQUFHLEdBQUcsR0FBRyxNQUFNLEVBQXpCLENBQXlCLENBQUM7QUFDMUQsQ0FBQztBQUZELDBCQUVDOzs7Ozs7Ozs7Ozs7Ozs7QUN4REQsNERBQTBDO0FBQzFDLCtCQUErQjtBQUMvQiwyQkFBMkI7QUFFM0IsSUFBTSxTQUFTLEdBQUcsc0NBQXNDO0FBRXhELElBQU0sT0FBTyxHQUFHLGNBQU8sRUFBRTtBQUN6QixJQUFNLGFBQWEsR0FBRyxRQUFRLENBQUMsY0FBYyxDQUFDLFdBQVcsQ0FBQyxDQUFDO0FBQzNELElBQU0sV0FBVyxHQUFHLGFBQWEsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBcUIsQ0FBQztBQUN2RSxhQUFhLENBQUMsV0FBVyxDQUFDLFdBQVcsQ0FBQztBQUV0QyxJQUFNLGdCQUFnQixHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsU0FBUyxDQUFDLENBQUM7QUFDNUQsSUFBTSxLQUFLLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUM7QUFDNUMsUUFBUSxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxPQUFPLEdBQUcsWUFBRSxJQUFJLGNBQU8sQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLEVBQXhCLENBQXdCO0FBRTFFLE9BQU8sQ0FBQyxNQUFNLENBQUM7QUFFZixTQUFTLE9BQU8sQ0FBQyxHQUFXO0lBQ3hCLGdCQUFnQixDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7SUFFL0IsT0FBTyxDQUFDLE9BQU8sQ0FBQyxnQkFBTTtRQUNsQixJQUFJLFFBQVEsR0FBRyxXQUFXLENBQUMsU0FBUyxFQUFzQixDQUFDO1FBQzNELFFBQVEsQ0FBQyxHQUFHLEdBQUcsTUFBTTtRQUNyQixhQUFhLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQztJQUN2QyxDQUFDLENBQUM7SUFFRixhQUFhLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztJQUU3QixZQUFZO0lBQ1osK0JBQStCO0lBQy9CLHdCQUF3QjtJQUN4QixxQkFBcUI7SUFDckIsNEJBQTRCO0lBQzVCLG1DQUFtQztJQUNuQyxLQUFLO0FBQ1QsQ0FBQyIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIuL2RvY3NcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9pbmRleC50c1wiKTtcbiIsImNvbnN0IGltZ3MgPSB7XG4gICAgLy9zdWJqZWN0c1xuICAgIG1lOiAnaWsnLFxuICAgIHlvdTogJ2ppaicsXG4gICAgdXM6ICd3aWonLFxuXG4gICAgLy9mZWVsaW5nc1xuICAgIGFuZ3J5OiAnYm9vcycsXG4gICAgcXVlc3Rpb246ICd2cmFhZ3Rla2VuJyxcbiAgICBoZWxsbzogJ2hhbGxvLXplZ2dlbi0yJyxcbiAgICBncmVldGluZ3M6ICdkYWctemVnZ2VuJyxcbiAgICBnb29kOiAnZ29lZCcsXG4gICAgYmFkOiAnc2xlY2h0JyxcbiAgICBwYWluSHVydDogJ3Bpam4nLFxuICAgIGNyYXp5OiAnb25ub3plbC1kb2VuJyxcbiAgICBoYWhhOiAnbGFjaGVuJyxcbiAgICBkYW5jZTogJ2RhbnNlbicsXG5cbiAgICAvL2lkZWFzXG4gICAgbG9va0F0OiAndmluZGVuJyxcbiAgICBydW46ICdsb3BlbicsXG4gICAgdGltZU91dDogJ3RpbWUtb3V0JyxcbiAgICB3aGVyZUlzOiAnd2FhcicsXG4gICAgb3V0c2lkZTogJ2J1aXRlbicsXG4gICAgbGF0ZTogJ3RlLWxhYXQta2xvaycsXG4gICAgd2hlbjogJ3dhbm5lZXInLFxuICAgIG5pZ2h0OiAnbmFjaHQnLFxuICAgIGRhd246ICdvY2h0ZW5kJyxcbiAgICBmdXR1cmU6ICd0b2Vrb21zdCcsXG4gICAgd2h5OiAnd2Fhcm9tJyxcbiAgICBob3c6ICdob2UnLFxuICAgIFxuICAgIC8vcGxhY2VzXG4gICAgaGlsbHM6ICdha2tlcnMnLFxuICAgIHNlYTogJ3plZScsXG4gICAgbW91bnRhaW46ICdiZXJnZW4nLFxuICAgIGNhdmU6ICdncm90JyxcbiAgICBtaW5lOiAnbWlqbicsXG4gICAganVuZ2xlOiAnanVuZ2xlJyxcbiAgICBpY2ViZXJnOiAnaWpzYmVyZycsXG4gICAgc25vdzogJ3NuZWV1dycsXG5cbiAgICAvL3RoaW5nc1xuICAgIHRyZWU6ICdib29tJyxcbiAgICBiZWQ6ICdiZWQnLFxuICAgIHJhaWxzOiAndHJlaW4tcmFpbHMnLFxuXG4gICAgLy9jb21wYXJhdG9yc1xuICAgIGFuZFBsdXM6ICdwbHVzJyxcbiAgICBpc0VxdWFsczogJ2dlbGlqa2hlaWRzdGVrZW4nXG59XG5cbmNvbnN0IGJhc2VJbWdVcmwgPSBcImh0dHA6Ly93ZWJzZXJ2aWNlcy5jY2wua3VsZXV2ZW4uYmUvcGljdG8vc2NsZXJhL1wiXG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRJbWdzKCl7XG4gICAgcmV0dXJuIE9iamVjdC52YWx1ZXMoaW1ncylcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFVybHMoKXtcbiAgICByZXR1cm4gZ2V0SW1ncygpLm1hcChpbWcgPT4gYmFzZUltZ1VybCArIGltZyArIFwiLnBuZ1wiKVxufSIsIi8vIGltcG9ydCBcImlzb3BlblwiIGFzIGlzb3BlblxuLy8gaW1wb3J0IHtwb3N0fSBmcm9tICdyZXF1ZXN0J1xuLy8gaW1wb3J0IHtnZXQgYXMgcmVxdWVzdH0gZnJvbSAnc2ltcGxlLWdldCdcbmltcG9ydCB7dGVlbnlSZXF1ZXN0IGFzIHJlcXVlc3R9IGZyb20gJ3RlZW55LXJlcXVlc3QnXG5pbXBvcnQgeyBnZXRJbWdzLCBnZXRVcmxzIH0gZnJvbSAnLi9pbWdzJztcbi8vIGltcG9ydCB7cmVxdWVzdH0gZnJvbSAnaHR0cCdcbi8vIGltcG9ydCAqIGFzIGZzIGZyb20gJ2ZzJ1xuXG5jb25zdCBiYXNlUmVsYXkgPSBcImh0dHBzOi8vaHR0cHJlbGF5LmlvL2xpbmsvcGljdG9jcmFmdFwiXG5cbmNvbnN0IGltZ1VybHMgPSBnZXRVcmxzKClcbmNvbnN0IGltZ3NDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImludGVyZmFjZVwiKTtcbmNvbnN0IGltZ1RlbXBsYXRlID0gaW1nc0NvbnRhaW5lci5jaGlsZHJlbi5pdGVtKDApIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XG5pbWdzQ29udGFpbmVyLnJlbW92ZUNoaWxkKGltZ1RlbXBsYXRlKVxuXG5jb25zdCBjb25uZWN0Q29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb25uZWN0XCIpO1xuY29uc3Qga2V5RWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImtleVwiKVxuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzdWJtaXRcIikub25jbGljayA9IGV2ID0+IGNvbm5lY3Qoa2V5RWwubm9kZVZhbHVlKVxuXG5jb25uZWN0KFwiMTIzNFwiKVxuXG5mdW5jdGlvbiBjb25uZWN0KGtleTogc3RyaW5nKXtcbiAgICBjb25uZWN0Q29udGFpbmVyLmhpZGRlbiA9IHRydWU7XG5cbiAgICBpbWdVcmxzLmZvckVhY2goaW1nVXJsID0+IHtcbiAgICAgICAgbGV0IG5ld1BpY3RvID0gaW1nVGVtcGxhdGUuY2xvbmVOb2RlKCkgYXMgSFRNTElucHV0RWxlbWVudDtcbiAgICAgICAgbmV3UGljdG8uc3JjID0gaW1nVXJsXG4gICAgICAgIGltZ3NDb250YWluZXIuYXBwZW5kQ2hpbGQobmV3UGljdG8pXG4gICAgfSlcblxuICAgIGltZ3NDb250YWluZXIuaGlkZGVuID0gZmFsc2U7XG5cbiAgICAvLyByZXF1ZXN0KHtcbiAgICAvLyAgICAgdXJsOiBiYXNlUmVsYXkgKyAnZjNmZCcsXG4gICAgLy8gICAgIGJvZHk6ICd0ZXN0MTIzNCcsXG4gICAgLy8gICAgIG1ldGhvZDogJ1BPU1QnXG4gICAgLy8gfSwgKGVyciwgcmVzcCwgYm9keSkgPT4ge1xuICAgIC8vICAgICBjb25zb2xlLmxvZyhyZXNwLnN0YXR1c0NvZGUpXG4gICAgLy8gfSlcbn0iXSwic291cmNlUm9vdCI6IiJ9