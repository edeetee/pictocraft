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
// connect("1234")
function connect(key) {
    connectContainer.style.display = 'none';
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vaW1ncy50cyIsIndlYnBhY2s6Ly8vLi9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBeUMsaUNBQWlDO0FBQzFFLHdIQUFnSCxtQkFBbUIsRUFBRTtBQUNySTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOzs7QUFHQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNsRkEsSUFBTSxJQUFJLEdBQUc7SUFDVCxVQUFVO0lBQ1YsRUFBRSxFQUFFLElBQUk7SUFDUixHQUFHLEVBQUUsS0FBSztJQUNWLEVBQUUsRUFBRSxLQUFLO0lBRVQsVUFBVTtJQUNWLEtBQUssRUFBRSxNQUFNO0lBQ2IsUUFBUSxFQUFFLFlBQVk7SUFDdEIsS0FBSyxFQUFFLGdCQUFnQjtJQUN2QixTQUFTLEVBQUUsWUFBWTtJQUN2QixJQUFJLEVBQUUsTUFBTTtJQUNaLEdBQUcsRUFBRSxRQUFRO0lBQ2IsUUFBUSxFQUFFLE1BQU07SUFDaEIsS0FBSyxFQUFFLGNBQWM7SUFDckIsSUFBSSxFQUFFLFFBQVE7SUFDZCxLQUFLLEVBQUUsUUFBUTtJQUVmLE9BQU87SUFDUCxNQUFNLEVBQUUsUUFBUTtJQUNoQixHQUFHLEVBQUUsT0FBTztJQUNaLE9BQU8sRUFBRSxVQUFVO0lBQ25CLE9BQU8sRUFBRSxNQUFNO0lBQ2YsT0FBTyxFQUFFLFFBQVE7SUFDakIsSUFBSSxFQUFFLGNBQWM7SUFDcEIsSUFBSSxFQUFFLFNBQVM7SUFDZixLQUFLLEVBQUUsT0FBTztJQUNkLElBQUksRUFBRSxTQUFTO0lBQ2YsTUFBTSxFQUFFLFVBQVU7SUFDbEIsR0FBRyxFQUFFLFFBQVE7SUFDYixHQUFHLEVBQUUsS0FBSztJQUVWLFFBQVE7SUFDUixLQUFLLEVBQUUsUUFBUTtJQUNmLEdBQUcsRUFBRSxLQUFLO0lBQ1YsUUFBUSxFQUFFLFFBQVE7SUFDbEIsSUFBSSxFQUFFLE1BQU07SUFDWixJQUFJLEVBQUUsTUFBTTtJQUNaLE1BQU0sRUFBRSxRQUFRO0lBQ2hCLE9BQU8sRUFBRSxTQUFTO0lBQ2xCLElBQUksRUFBRSxRQUFRO0lBRWQsUUFBUTtJQUNSLElBQUksRUFBRSxNQUFNO0lBQ1osR0FBRyxFQUFFLEtBQUs7SUFDVixLQUFLLEVBQUUsYUFBYTtJQUVwQixhQUFhO0lBQ2IsT0FBTyxFQUFFLE1BQU07SUFDZixRQUFRLEVBQUUsa0JBQWtCO0NBQy9CO0FBRUQsSUFBTSxVQUFVLEdBQUcsa0RBQWtEO0FBRXJFLFNBQWdCLE9BQU87SUFDbkIsT0FBTyxNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQztBQUM5QixDQUFDO0FBRkQsMEJBRUM7QUFFRCxTQUFnQixPQUFPO0lBQ25CLE9BQU8sT0FBTyxFQUFFLENBQUMsR0FBRyxDQUFDLGFBQUcsSUFBSSxpQkFBVSxHQUFHLEdBQUcsR0FBRyxNQUFNLEVBQXpCLENBQXlCLENBQUM7QUFDMUQsQ0FBQztBQUZELDBCQUVDOzs7Ozs7Ozs7Ozs7Ozs7QUN4REQsNERBQTBDO0FBQzFDLCtCQUErQjtBQUMvQiwyQkFBMkI7QUFFM0IsSUFBTSxTQUFTLEdBQUcsc0NBQXNDO0FBRXhELElBQU0sT0FBTyxHQUFHLGNBQU8sRUFBRTtBQUN6QixJQUFNLGFBQWEsR0FBRyxRQUFRLENBQUMsY0FBYyxDQUFDLFdBQVcsQ0FBQyxDQUFDO0FBQzNELElBQU0sV0FBVyxHQUFHLGFBQWEsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBcUIsQ0FBQztBQUN2RSxhQUFhLENBQUMsV0FBVyxDQUFDLFdBQVcsQ0FBQztBQUV0QyxJQUFNLGdCQUFnQixHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsU0FBUyxDQUFDLENBQUM7QUFDNUQsSUFBTSxLQUFLLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUM7QUFDNUMsUUFBUSxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxPQUFPLEdBQUcsWUFBRSxJQUFJLGNBQU8sQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLEVBQXhCLENBQXdCO0FBRTFFLGtCQUFrQjtBQUVsQixTQUFTLE9BQU8sQ0FBQyxHQUFXO0lBQ3hCLGdCQUFnQixDQUFDLEtBQUssQ0FBQyxPQUFPLEdBQUcsTUFBTTtJQUV2QyxPQUFPLENBQUMsT0FBTyxDQUFDLGdCQUFNO1FBQ2xCLElBQUksUUFBUSxHQUFHLFdBQVcsQ0FBQyxTQUFTLEVBQXNCLENBQUM7UUFDM0QsUUFBUSxDQUFDLEdBQUcsR0FBRyxNQUFNO1FBQ3JCLGFBQWEsQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDO0lBQ3ZDLENBQUMsQ0FBQztJQUVGLGFBQWEsQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO0lBRTdCLFlBQVk7SUFDWiwrQkFBK0I7SUFDL0Isd0JBQXdCO0lBQ3hCLHFCQUFxQjtJQUNyQiw0QkFBNEI7SUFDNUIsbUNBQW1DO0lBQ25DLEtBQUs7QUFDVCxDQUFDIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi4vZG9jc1wiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL2luZGV4LnRzXCIpO1xuIiwiY29uc3QgaW1ncyA9IHtcbiAgICAvL3N1YmplY3RzXG4gICAgbWU6ICdpaycsXG4gICAgeW91OiAnamlqJyxcbiAgICB1czogJ3dpaicsXG5cbiAgICAvL2ZlZWxpbmdzXG4gICAgYW5ncnk6ICdib29zJyxcbiAgICBxdWVzdGlvbjogJ3ZyYWFndGVrZW4nLFxuICAgIGhlbGxvOiAnaGFsbG8temVnZ2VuLTInLFxuICAgIGdyZWV0aW5nczogJ2RhZy16ZWdnZW4nLFxuICAgIGdvb2Q6ICdnb2VkJyxcbiAgICBiYWQ6ICdzbGVjaHQnLFxuICAgIHBhaW5IdXJ0OiAncGlqbicsXG4gICAgY3Jhenk6ICdvbm5vemVsLWRvZW4nLFxuICAgIGhhaGE6ICdsYWNoZW4nLFxuICAgIGRhbmNlOiAnZGFuc2VuJyxcblxuICAgIC8vaWRlYXNcbiAgICBsb29rQXQ6ICd2aW5kZW4nLFxuICAgIHJ1bjogJ2xvcGVuJyxcbiAgICB0aW1lT3V0OiAndGltZS1vdXQnLFxuICAgIHdoZXJlSXM6ICd3YWFyJyxcbiAgICBvdXRzaWRlOiAnYnVpdGVuJyxcbiAgICBsYXRlOiAndGUtbGFhdC1rbG9rJyxcbiAgICB3aGVuOiAnd2FubmVlcicsXG4gICAgbmlnaHQ6ICduYWNodCcsXG4gICAgZGF3bjogJ29jaHRlbmQnLFxuICAgIGZ1dHVyZTogJ3RvZWtvbXN0JyxcbiAgICB3aHk6ICd3YWFyb20nLFxuICAgIGhvdzogJ2hvZScsXG4gICAgXG4gICAgLy9wbGFjZXNcbiAgICBoaWxsczogJ2Fra2VycycsXG4gICAgc2VhOiAnemVlJyxcbiAgICBtb3VudGFpbjogJ2JlcmdlbicsXG4gICAgY2F2ZTogJ2dyb3QnLFxuICAgIG1pbmU6ICdtaWpuJyxcbiAgICBqdW5nbGU6ICdqdW5nbGUnLFxuICAgIGljZWJlcmc6ICdpanNiZXJnJyxcbiAgICBzbm93OiAnc25lZXV3JyxcblxuICAgIC8vdGhpbmdzXG4gICAgdHJlZTogJ2Jvb20nLFxuICAgIGJlZDogJ2JlZCcsXG4gICAgcmFpbHM6ICd0cmVpbi1yYWlscycsXG5cbiAgICAvL2NvbXBhcmF0b3JzXG4gICAgYW5kUGx1czogJ3BsdXMnLFxuICAgIGlzRXF1YWxzOiAnZ2VsaWpraGVpZHN0ZWtlbidcbn1cblxuY29uc3QgYmFzZUltZ1VybCA9IFwiaHR0cDovL3dlYnNlcnZpY2VzLmNjbC5rdWxldXZlbi5iZS9waWN0by9zY2xlcmEvXCJcblxuZXhwb3J0IGZ1bmN0aW9uIGdldEltZ3MoKXtcbiAgICByZXR1cm4gT2JqZWN0LnZhbHVlcyhpbWdzKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0VXJscygpe1xuICAgIHJldHVybiBnZXRJbWdzKCkubWFwKGltZyA9PiBiYXNlSW1nVXJsICsgaW1nICsgXCIucG5nXCIpXG59IiwiLy8gaW1wb3J0IFwiaXNvcGVuXCIgYXMgaXNvcGVuXG4vLyBpbXBvcnQge3Bvc3R9IGZyb20gJ3JlcXVlc3QnXG4vLyBpbXBvcnQge2dldCBhcyByZXF1ZXN0fSBmcm9tICdzaW1wbGUtZ2V0J1xuaW1wb3J0IHt0ZWVueVJlcXVlc3QgYXMgcmVxdWVzdH0gZnJvbSAndGVlbnktcmVxdWVzdCdcbmltcG9ydCB7IGdldEltZ3MsIGdldFVybHMgfSBmcm9tICcuL2ltZ3MnO1xuLy8gaW1wb3J0IHtyZXF1ZXN0fSBmcm9tICdodHRwJ1xuLy8gaW1wb3J0ICogYXMgZnMgZnJvbSAnZnMnXG5cbmNvbnN0IGJhc2VSZWxheSA9IFwiaHR0cHM6Ly9odHRwcmVsYXkuaW8vbGluay9waWN0b2NyYWZ0XCJcblxuY29uc3QgaW1nVXJscyA9IGdldFVybHMoKVxuY29uc3QgaW1nc0NvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaW50ZXJmYWNlXCIpO1xuY29uc3QgaW1nVGVtcGxhdGUgPSBpbWdzQ29udGFpbmVyLmNoaWxkcmVuLml0ZW0oMCkgYXMgSFRNTElucHV0RWxlbWVudDtcbmltZ3NDb250YWluZXIucmVtb3ZlQ2hpbGQoaW1nVGVtcGxhdGUpXG5cbmNvbnN0IGNvbm5lY3RDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbm5lY3RcIik7XG5jb25zdCBrZXlFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwia2V5XCIpXG5kb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInN1Ym1pdFwiKS5vbmNsaWNrID0gZXYgPT4gY29ubmVjdChrZXlFbC5ub2RlVmFsdWUpXG5cbi8vIGNvbm5lY3QoXCIxMjM0XCIpXG5cbmZ1bmN0aW9uIGNvbm5lY3Qoa2V5OiBzdHJpbmcpe1xuICAgIGNvbm5lY3RDb250YWluZXIuc3R5bGUuZGlzcGxheSA9ICdub25lJ1xuXG4gICAgaW1nVXJscy5mb3JFYWNoKGltZ1VybCA9PiB7XG4gICAgICAgIGxldCBuZXdQaWN0byA9IGltZ1RlbXBsYXRlLmNsb25lTm9kZSgpIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XG4gICAgICAgIG5ld1BpY3RvLnNyYyA9IGltZ1VybFxuICAgICAgICBpbWdzQ29udGFpbmVyLmFwcGVuZENoaWxkKG5ld1BpY3RvKVxuICAgIH0pXG5cbiAgICBpbWdzQ29udGFpbmVyLmhpZGRlbiA9IGZhbHNlO1xuXG4gICAgLy8gcmVxdWVzdCh7XG4gICAgLy8gICAgIHVybDogYmFzZVJlbGF5ICsgJ2YzZmQnLFxuICAgIC8vICAgICBib2R5OiAndGVzdDEyMzQnLFxuICAgIC8vICAgICBtZXRob2Q6ICdQT1NUJ1xuICAgIC8vIH0sIChlcnIsIHJlc3AsIGJvZHkpID0+IHtcbiAgICAvLyAgICAgY29uc29sZS5sb2cocmVzcC5zdGF0dXNDb2RlKVxuICAgIC8vIH0pXG59XG4iXSwic291cmNlUm9vdCI6IiJ9