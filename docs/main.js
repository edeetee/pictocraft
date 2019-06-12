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
exports.imgCategories = {
    subjects: {
        me: 'ik',
        you: 'jij',
        us: 'wij'
    },
    comparisons: {
        //comparators
        and: 'plus',
        "equal to": 'gelijkheidsteken'
    },
    feelings: {
        angry: 'boos',
        good: 'goed',
        bad: 'slecht',
        painHurt: 'pijn',
        crazy: 'onnozel-doen',
        haha: 'lachen',
    },
    actions: {
        question: 'vraagteken',
        hello: 'hallo-zeggen-2',
        greetings: 'dag-zeggen',
        dance: 'dansen',
        lookAt: 'vinden',
        run: 'lopen',
        timeOut: 'time-out',
    },
    ideas: {
        outside: 'buiten',
        late: 'te-laat-klok',
        night: 'nacht',
        dawn: 'ochtend',
        future: 'toekomst',
        when: 'wanneer',
        where: 'waar',
        why: 'waarom',
        how: 'hoe',
    },
    places: {
        hills: 'akkers',
        sea: 'zee',
        mountain: 'bergen',
        cave: 'grot',
        mine: 'mijn',
        jungle: 'jungle',
        icebergs: 'ijsberg',
        snow: 'sneeuw',
    },
    things: {
        tree: 'boom',
        bed: 'bed',
        rails: 'trein-rails',
    }
};
Object.assign(exports.imgCategories.subjects, exports.imgCategories.comparisons);
delete exports.imgCategories.comparisons;
var baseImgUrl = "http://webservices.ccl.kuleuven.be/picto/sclera/";
function idToUrl(imgId) {
    return baseImgUrl + imgId + ".png";
}
exports.idToUrl = idToUrl;


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
var baseRelay = "https://httprelay.io/link/pictocraft";
var uiContainer = document.getElementById("interface");
var imgsContainer = document.getElementById("input");
var imgTemplate = document.getElementsByClassName("picto").item(0);
var catTemplate = document.getElementsByClassName("category").item(0);
var connectContainer = document.getElementById("connect");
var keyEl = document.getElementById("key");
document.getElementById("submit").onclick = function (ev) { return connect(keyEl.nodeValue); };
connect("1234");
function connect(key) {
    connectContainer.style.display = 'none';
    Object.keys(imgs_1.imgCategories).forEach(function (cat) {
        var catEl = catTemplate.cloneNode();
        imgsContainer.appendChild(catEl);
        var imgs = imgs_1.imgCategories[cat];
        Object.keys(imgs).forEach(function (imgTitle) {
            var imgId = imgs[imgTitle];
            var imgEl = imgTemplate.cloneNode();
            imgEl.id = imgId;
            imgEl.src = imgs_1.idToUrl(imgId);
            catEl.appendChild(imgEl);
        });
    });
    // imgUrls.forEach(imgUrl => {
    //     let newPicto = imgTemplate.cloneNode() as HTMLInputElement;
    //     newPicto.src = imgUrl
    //     imgsContainer.appendChild(newPicto)
    // })
    uiContainer.hidden = false;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vaW1ncy50cyIsIndlYnBhY2s6Ly8vLi9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBeUMsaUNBQWlDO0FBQzFFLHdIQUFnSCxtQkFBbUIsRUFBRTtBQUNySTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOzs7QUFHQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUM5RWEscUJBQWEsR0FBaUM7SUFDdkQsUUFBUSxFQUFFO1FBQ04sRUFBRSxFQUFFLElBQUk7UUFDUixHQUFHLEVBQUUsS0FBSztRQUNWLEVBQUUsRUFBRSxLQUFLO0tBQ1o7SUFDRCxXQUFXLEVBQUU7UUFDVCxhQUFhO1FBQ2IsR0FBRyxFQUFFLE1BQU07UUFDWCxVQUFVLEVBQUUsa0JBQWtCO0tBQ2pDO0lBQ0QsUUFBUSxFQUFFO1FBQ04sS0FBSyxFQUFFLE1BQU07UUFDYixJQUFJLEVBQUUsTUFBTTtRQUNaLEdBQUcsRUFBRSxRQUFRO1FBQ2IsUUFBUSxFQUFFLE1BQU07UUFDaEIsS0FBSyxFQUFFLGNBQWM7UUFDckIsSUFBSSxFQUFFLFFBQVE7S0FDakI7SUFDRCxPQUFPLEVBQUU7UUFDTCxRQUFRLEVBQUUsWUFBWTtRQUN0QixLQUFLLEVBQUUsZ0JBQWdCO1FBQ3ZCLFNBQVMsRUFBRSxZQUFZO1FBQ3ZCLEtBQUssRUFBRSxRQUFRO1FBQ2YsTUFBTSxFQUFFLFFBQVE7UUFDaEIsR0FBRyxFQUFFLE9BQU87UUFDWixPQUFPLEVBQUUsVUFBVTtLQUN0QjtJQUNELEtBQUssRUFBRTtRQUNILE9BQU8sRUFBRSxRQUFRO1FBQ2pCLElBQUksRUFBRSxjQUFjO1FBQ3BCLEtBQUssRUFBRSxPQUFPO1FBQ2QsSUFBSSxFQUFFLFNBQVM7UUFDZixNQUFNLEVBQUUsVUFBVTtRQUVsQixJQUFJLEVBQUUsU0FBUztRQUNmLEtBQUssRUFBRSxNQUFNO1FBQ2IsR0FBRyxFQUFFLFFBQVE7UUFDYixHQUFHLEVBQUUsS0FBSztLQUNiO0lBQ0QsTUFBTSxFQUFFO1FBQ0osS0FBSyxFQUFFLFFBQVE7UUFDZixHQUFHLEVBQUUsS0FBSztRQUNWLFFBQVEsRUFBRSxRQUFRO1FBQ2xCLElBQUksRUFBRSxNQUFNO1FBQ1osSUFBSSxFQUFFLE1BQU07UUFDWixNQUFNLEVBQUUsUUFBUTtRQUNoQixRQUFRLEVBQUUsU0FBUztRQUNuQixJQUFJLEVBQUUsUUFBUTtLQUNqQjtJQUNELE1BQU0sRUFBRTtRQUNKLElBQUksRUFBRSxNQUFNO1FBQ1osR0FBRyxFQUFFLEtBQUs7UUFDVixLQUFLLEVBQUUsYUFBYTtLQUN2QjtDQUNKO0FBRUQsTUFBTSxDQUFDLE1BQU0sQ0FBQyxxQkFBYSxDQUFDLFFBQVEsRUFBRSxxQkFBYSxDQUFDLFdBQVcsQ0FBQztBQUNoRSxPQUFPLHFCQUFhLENBQUMsV0FBVyxDQUFDO0FBRWpDLElBQU0sVUFBVSxHQUFHLGtEQUFrRDtBQUVyRSxTQUFnQixPQUFPLENBQUMsS0FBYTtJQUNqQyxPQUFPLFVBQVUsR0FBRyxLQUFLLEdBQUcsTUFBTTtBQUN0QyxDQUFDO0FBRkQsMEJBRUM7Ozs7Ozs7Ozs7Ozs7OztBQ25FRCw0REFBZ0Q7QUFFaEQsSUFBTSxTQUFTLEdBQUcsc0NBQXNDO0FBRXhELElBQU0sV0FBVyxHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsV0FBVyxDQUFDLENBQUM7QUFDekQsSUFBTSxhQUFhLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsQ0FBQztBQUN2RCxJQUFNLFdBQVcsR0FBRyxRQUFRLENBQUMsc0JBQXNCLENBQUMsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQ3JFLElBQU0sV0FBVyxHQUFHLFFBQVEsQ0FBQyxzQkFBc0IsQ0FBQyxVQUFVLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFFeEUsSUFBTSxnQkFBZ0IsR0FBRyxRQUFRLENBQUMsY0FBYyxDQUFDLFNBQVMsQ0FBQyxDQUFDO0FBQzVELElBQU0sS0FBSyxHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDO0FBQzVDLFFBQVEsQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFDLENBQUMsT0FBTyxHQUFHLFlBQUUsSUFBSSxjQUFPLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxFQUF4QixDQUF3QjtBQUUxRSxPQUFPLENBQUMsTUFBTSxDQUFDO0FBRWYsU0FBUyxPQUFPLENBQUMsR0FBVztJQUN4QixnQkFBZ0IsQ0FBQyxLQUFLLENBQUMsT0FBTyxHQUFHLE1BQU07SUFFdkMsTUFBTSxDQUFDLElBQUksQ0FBQyxvQkFBYSxDQUFDLENBQUMsT0FBTyxDQUFDLGFBQUc7UUFDbEMsSUFBSSxLQUFLLEdBQUcsV0FBVyxDQUFDLFNBQVMsRUFBRTtRQUNuQyxhQUFhLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQztRQUNoQyxJQUFJLElBQUksR0FBRyxvQkFBYSxDQUFDLEdBQUcsQ0FBQztRQUM3QixNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLE9BQU8sQ0FBQyxrQkFBUTtZQUM5QixJQUFJLEtBQUssR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDO1lBQzFCLElBQUksS0FBSyxHQUFHLFdBQVcsQ0FBQyxTQUFTLEVBQXNCO1lBRXZELEtBQUssQ0FBQyxFQUFFLEdBQUcsS0FBSztZQUNoQixLQUFLLENBQUMsR0FBRyxHQUFHLGNBQU8sQ0FBQyxLQUFLLENBQUM7WUFDMUIsS0FBSyxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUM7UUFDNUIsQ0FBQyxDQUFDO0lBQ04sQ0FBQyxDQUFDO0lBQ0YsOEJBQThCO0lBQzlCLGtFQUFrRTtJQUNsRSw0QkFBNEI7SUFDNUIsMENBQTBDO0lBQzFDLEtBQUs7SUFFTCxXQUFXLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztJQUUzQixZQUFZO0lBQ1osK0JBQStCO0lBQy9CLHdCQUF3QjtJQUN4QixxQkFBcUI7SUFDckIsNEJBQTRCO0lBQzVCLG1DQUFtQztJQUNuQyxLQUFLO0FBQ1QsQ0FBQyIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIuL2RvY3NcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9pbmRleC50c1wiKTtcbiIsImludGVyZmFjZSBzdHJpbmdNYXA8VD57XG4gICAgW2tleTogc3RyaW5nXTogVFxufVxuXG5leHBvcnQgY29uc3QgaW1nQ2F0ZWdvcmllczogc3RyaW5nTWFwPHN0cmluZ01hcDxzdHJpbmc+PiA9IHtcbiAgICBzdWJqZWN0czoge1xuICAgICAgICBtZTogJ2lrJyxcbiAgICAgICAgeW91OiAnamlqJyxcbiAgICAgICAgdXM6ICd3aWonXG4gICAgfSxcbiAgICBjb21wYXJpc29uczoge1xuICAgICAgICAvL2NvbXBhcmF0b3JzXG4gICAgICAgIGFuZDogJ3BsdXMnLFxuICAgICAgICBcImVxdWFsIHRvXCI6ICdnZWxpamtoZWlkc3Rla2VuJ1xuICAgIH0sXG4gICAgZmVlbGluZ3M6IHtcbiAgICAgICAgYW5ncnk6ICdib29zJyxcbiAgICAgICAgZ29vZDogJ2dvZWQnLFxuICAgICAgICBiYWQ6ICdzbGVjaHQnLFxuICAgICAgICBwYWluSHVydDogJ3Bpam4nLFxuICAgICAgICBjcmF6eTogJ29ubm96ZWwtZG9lbicsXG4gICAgICAgIGhhaGE6ICdsYWNoZW4nLFxuICAgIH0sXG4gICAgYWN0aW9uczoge1xuICAgICAgICBxdWVzdGlvbjogJ3ZyYWFndGVrZW4nLFxuICAgICAgICBoZWxsbzogJ2hhbGxvLXplZ2dlbi0yJyxcbiAgICAgICAgZ3JlZXRpbmdzOiAnZGFnLXplZ2dlbicsXG4gICAgICAgIGRhbmNlOiAnZGFuc2VuJyxcbiAgICAgICAgbG9va0F0OiAndmluZGVuJyxcbiAgICAgICAgcnVuOiAnbG9wZW4nLFxuICAgICAgICB0aW1lT3V0OiAndGltZS1vdXQnLFxuICAgIH0sXG4gICAgaWRlYXM6IHtcbiAgICAgICAgb3V0c2lkZTogJ2J1aXRlbicsXG4gICAgICAgIGxhdGU6ICd0ZS1sYWF0LWtsb2snLFxuICAgICAgICBuaWdodDogJ25hY2h0JyxcbiAgICAgICAgZGF3bjogJ29jaHRlbmQnLFxuICAgICAgICBmdXR1cmU6ICd0b2Vrb21zdCcsXG4gICAgICAgIFxuICAgICAgICB3aGVuOiAnd2FubmVlcicsXG4gICAgICAgIHdoZXJlOiAnd2FhcicsXG4gICAgICAgIHdoeTogJ3dhYXJvbScsXG4gICAgICAgIGhvdzogJ2hvZScsXG4gICAgfSxcbiAgICBwbGFjZXM6IHtcbiAgICAgICAgaGlsbHM6ICdha2tlcnMnLFxuICAgICAgICBzZWE6ICd6ZWUnLFxuICAgICAgICBtb3VudGFpbjogJ2JlcmdlbicsXG4gICAgICAgIGNhdmU6ICdncm90JyxcbiAgICAgICAgbWluZTogJ21pam4nLFxuICAgICAgICBqdW5nbGU6ICdqdW5nbGUnLFxuICAgICAgICBpY2ViZXJnczogJ2lqc2JlcmcnLFxuICAgICAgICBzbm93OiAnc25lZXV3JyxcbiAgICB9LFxuICAgIHRoaW5nczoge1xuICAgICAgICB0cmVlOiAnYm9vbScsXG4gICAgICAgIGJlZDogJ2JlZCcsXG4gICAgICAgIHJhaWxzOiAndHJlaW4tcmFpbHMnLFxuICAgIH1cbn1cblxuT2JqZWN0LmFzc2lnbihpbWdDYXRlZ29yaWVzLnN1YmplY3RzLCBpbWdDYXRlZ29yaWVzLmNvbXBhcmlzb25zKVxuZGVsZXRlIGltZ0NhdGVnb3JpZXMuY29tcGFyaXNvbnM7XG5cbmNvbnN0IGJhc2VJbWdVcmwgPSBcImh0dHA6Ly93ZWJzZXJ2aWNlcy5jY2wua3VsZXV2ZW4uYmUvcGljdG8vc2NsZXJhL1wiXG5cbmV4cG9ydCBmdW5jdGlvbiBpZFRvVXJsKGltZ0lkOiBzdHJpbmcpe1xuICAgIHJldHVybiBiYXNlSW1nVXJsICsgaW1nSWQgKyBcIi5wbmdcIlxufSIsImltcG9ydCB7dGVlbnlSZXF1ZXN0IGFzIHJlcXVlc3R9IGZyb20gJ3RlZW55LXJlcXVlc3QnXG5pbXBvcnQgeyBpbWdDYXRlZ29yaWVzLCBpZFRvVXJsIH0gZnJvbSAnLi9pbWdzJztcblxuY29uc3QgYmFzZVJlbGF5ID0gXCJodHRwczovL2h0dHByZWxheS5pby9saW5rL3BpY3RvY3JhZnRcIlxuXG5jb25zdCB1aUNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaW50ZXJmYWNlXCIpO1xuY29uc3QgaW1nc0NvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaW5wdXRcIik7XG5jb25zdCBpbWdUZW1wbGF0ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJwaWN0b1wiKS5pdGVtKDApO1xuY29uc3QgY2F0VGVtcGxhdGUgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiY2F0ZWdvcnlcIikuaXRlbSgwKTtcblxuY29uc3QgY29ubmVjdENvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29ubmVjdFwiKTtcbmNvbnN0IGtleUVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJrZXlcIilcbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic3VibWl0XCIpLm9uY2xpY2sgPSBldiA9PiBjb25uZWN0KGtleUVsLm5vZGVWYWx1ZSlcblxuY29ubmVjdChcIjEyMzRcIilcblxuZnVuY3Rpb24gY29ubmVjdChrZXk6IHN0cmluZyl7XG4gICAgY29ubmVjdENvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnXG5cbiAgICBPYmplY3Qua2V5cyhpbWdDYXRlZ29yaWVzKS5mb3JFYWNoKGNhdCA9PiB7XG4gICAgICAgIGxldCBjYXRFbCA9IGNhdFRlbXBsYXRlLmNsb25lTm9kZSgpXG4gICAgICAgIGltZ3NDb250YWluZXIuYXBwZW5kQ2hpbGQoY2F0RWwpXG4gICAgICAgIGxldCBpbWdzID0gaW1nQ2F0ZWdvcmllc1tjYXRdXG4gICAgICAgIE9iamVjdC5rZXlzKGltZ3MpLmZvckVhY2goaW1nVGl0bGUgPT4ge1xuICAgICAgICAgICAgbGV0IGltZ0lkID0gaW1nc1tpbWdUaXRsZV1cbiAgICAgICAgICAgIGxldCBpbWdFbCA9IGltZ1RlbXBsYXRlLmNsb25lTm9kZSgpIGFzIEhUTUxJbnB1dEVsZW1lbnRcblxuICAgICAgICAgICAgaW1nRWwuaWQgPSBpbWdJZFxuICAgICAgICAgICAgaW1nRWwuc3JjID0gaWRUb1VybChpbWdJZClcbiAgICAgICAgICAgIGNhdEVsLmFwcGVuZENoaWxkKGltZ0VsKVxuICAgICAgICB9KVxuICAgIH0pXG4gICAgLy8gaW1nVXJscy5mb3JFYWNoKGltZ1VybCA9PiB7XG4gICAgLy8gICAgIGxldCBuZXdQaWN0byA9IGltZ1RlbXBsYXRlLmNsb25lTm9kZSgpIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XG4gICAgLy8gICAgIG5ld1BpY3RvLnNyYyA9IGltZ1VybFxuICAgIC8vICAgICBpbWdzQ29udGFpbmVyLmFwcGVuZENoaWxkKG5ld1BpY3RvKVxuICAgIC8vIH0pXG5cbiAgICB1aUNvbnRhaW5lci5oaWRkZW4gPSBmYWxzZTtcblxuICAgIC8vIHJlcXVlc3Qoe1xuICAgIC8vICAgICB1cmw6IGJhc2VSZWxheSArICdmM2ZkJyxcbiAgICAvLyAgICAgYm9keTogJ3Rlc3QxMjM0JyxcbiAgICAvLyAgICAgbWV0aG9kOiAnUE9TVCdcbiAgICAvLyB9LCAoZXJyLCByZXNwLCBib2R5KSA9PiB7XG4gICAgLy8gICAgIGNvbnNvbGUubG9nKHJlc3Auc3RhdHVzQ29kZSlcbiAgICAvLyB9KVxufSJdLCJzb3VyY2VSb290IjoiIn0=