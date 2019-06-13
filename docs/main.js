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
loadImgs();
function loadImgs() {
    Object.keys(imgs_1.imgCategories).forEach(function (cat) {
        var catEl = catTemplate.cloneNode();
        imgsContainer.appendChild(catEl);
        var imgs = imgs_1.imgCategories[cat];
        catEl.appendChild(document.createElement("div"));
        catEl.appendChild(document.createElement("div"));
        Object.keys(imgs).forEach(function (imgTitle, i, keys) {
            var imgId = imgs[imgTitle];
            var imgEl = imgTemplate.cloneNode();
            imgEl.id = imgId;
            imgEl.src = imgs_1.idToUrl(imgId);
            catEl.childNodes[Math.floor(2 * i / keys.length)].appendChild(imgEl);
            // catEl.appendChild(imgEl)
        });
    });
}
function connect(key) {
    connectContainer.style.display = 'none';
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vaW1ncy50cyIsIndlYnBhY2s6Ly8vLi9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBeUMsaUNBQWlDO0FBQzFFLHdIQUFnSCxtQkFBbUIsRUFBRTtBQUNySTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOzs7QUFHQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUM5RWEscUJBQWEsR0FBaUM7SUFDdkQsUUFBUSxFQUFFO1FBQ04sRUFBRSxFQUFFLElBQUk7UUFDUixHQUFHLEVBQUUsS0FBSztRQUNWLEVBQUUsRUFBRSxLQUFLO0tBQ1o7SUFDRCxXQUFXLEVBQUU7UUFDVCxhQUFhO1FBQ2IsR0FBRyxFQUFFLE1BQU07UUFDWCxVQUFVLEVBQUUsa0JBQWtCO0tBQ2pDO0lBQ0QsUUFBUSxFQUFFO1FBQ04sS0FBSyxFQUFFLE1BQU07UUFDYixJQUFJLEVBQUUsTUFBTTtRQUNaLEdBQUcsRUFBRSxRQUFRO1FBQ2IsUUFBUSxFQUFFLE1BQU07UUFDaEIsS0FBSyxFQUFFLGNBQWM7UUFDckIsSUFBSSxFQUFFLFFBQVE7S0FDakI7SUFDRCxPQUFPLEVBQUU7UUFDTCxRQUFRLEVBQUUsWUFBWTtRQUN0QixLQUFLLEVBQUUsZ0JBQWdCO1FBQ3ZCLFNBQVMsRUFBRSxZQUFZO1FBQ3ZCLEtBQUssRUFBRSxRQUFRO1FBQ2YsTUFBTSxFQUFFLFFBQVE7UUFDaEIsR0FBRyxFQUFFLE9BQU87UUFDWixPQUFPLEVBQUUsVUFBVTtLQUN0QjtJQUNELEtBQUssRUFBRTtRQUNILE9BQU8sRUFBRSxRQUFRO1FBQ2pCLElBQUksRUFBRSxjQUFjO1FBQ3BCLEtBQUssRUFBRSxPQUFPO1FBQ2QsSUFBSSxFQUFFLFNBQVM7UUFDZixNQUFNLEVBQUUsVUFBVTtRQUVsQixJQUFJLEVBQUUsU0FBUztRQUNmLEtBQUssRUFBRSxNQUFNO1FBQ2IsR0FBRyxFQUFFLFFBQVE7UUFDYixHQUFHLEVBQUUsS0FBSztLQUNiO0lBQ0QsTUFBTSxFQUFFO1FBQ0osS0FBSyxFQUFFLFFBQVE7UUFDZixHQUFHLEVBQUUsS0FBSztRQUNWLFFBQVEsRUFBRSxRQUFRO1FBQ2xCLElBQUksRUFBRSxNQUFNO1FBQ1osSUFBSSxFQUFFLE1BQU07UUFDWixNQUFNLEVBQUUsUUFBUTtRQUNoQixRQUFRLEVBQUUsU0FBUztRQUNuQixJQUFJLEVBQUUsUUFBUTtLQUNqQjtJQUNELE1BQU0sRUFBRTtRQUNKLElBQUksRUFBRSxNQUFNO1FBQ1osR0FBRyxFQUFFLEtBQUs7UUFDVixLQUFLLEVBQUUsYUFBYTtLQUN2QjtDQUNKO0FBRUQsTUFBTSxDQUFDLE1BQU0sQ0FBQyxxQkFBYSxDQUFDLFFBQVEsRUFBRSxxQkFBYSxDQUFDLFdBQVcsQ0FBQztBQUNoRSxPQUFPLHFCQUFhLENBQUMsV0FBVyxDQUFDO0FBRWpDLElBQU0sVUFBVSxHQUFHLGtEQUFrRDtBQUVyRSxTQUFnQixPQUFPLENBQUMsS0FBYTtJQUNqQyxPQUFPLFVBQVUsR0FBRyxLQUFLLEdBQUcsTUFBTTtBQUN0QyxDQUFDO0FBRkQsMEJBRUM7Ozs7Ozs7Ozs7Ozs7OztBQ25FRCw0REFBZ0Q7QUFFaEQsSUFBTSxTQUFTLEdBQUcsc0NBQXNDO0FBRXhELElBQU0sV0FBVyxHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsV0FBVyxDQUFDLENBQUM7QUFDekQsSUFBTSxhQUFhLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsQ0FBQztBQUN2RCxJQUFNLFdBQVcsR0FBRyxRQUFRLENBQUMsc0JBQXNCLENBQUMsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQ3JFLElBQU0sV0FBVyxHQUFHLFFBQVEsQ0FBQyxzQkFBc0IsQ0FBQyxVQUFVLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFFeEUsSUFBTSxnQkFBZ0IsR0FBRyxRQUFRLENBQUMsY0FBYyxDQUFDLFNBQVMsQ0FBQyxDQUFDO0FBQzVELElBQU0sS0FBSyxHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDO0FBQzVDLFFBQVEsQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFDLENBQUMsT0FBTyxHQUFHLFlBQUUsSUFBSSxjQUFPLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxFQUF4QixDQUF3QjtBQUUxRSxPQUFPLENBQUMsTUFBTSxDQUFDO0FBQ2YsUUFBUSxFQUFFO0FBRVYsU0FBUyxRQUFRO0lBQ2IsTUFBTSxDQUFDLElBQUksQ0FBQyxvQkFBYSxDQUFDLENBQUMsT0FBTyxDQUFDLGFBQUc7UUFDbEMsSUFBSSxLQUFLLEdBQUcsV0FBVyxDQUFDLFNBQVMsRUFBRTtRQUNuQyxhQUFhLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQztRQUNoQyxJQUFJLElBQUksR0FBRyxvQkFBYSxDQUFDLEdBQUcsQ0FBQztRQUU3QixLQUFLLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDaEQsS0FBSyxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBRWhELE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsT0FBTyxDQUFDLFVBQUMsUUFBUSxFQUFFLENBQUMsRUFBRSxJQUFJO1lBQ3hDLElBQUksS0FBSyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUM7WUFDMUIsSUFBSSxLQUFLLEdBQUcsV0FBVyxDQUFDLFNBQVMsRUFBc0I7WUFFdkQsS0FBSyxDQUFDLEVBQUUsR0FBRyxLQUFLO1lBQ2hCLEtBQUssQ0FBQyxHQUFHLEdBQUcsY0FBTyxDQUFDLEtBQUssQ0FBQztZQUUxQixLQUFLLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFDLENBQUMsR0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDO1lBQ2hFLDJCQUEyQjtRQUMvQixDQUFDLENBQUM7SUFDTixDQUFDLENBQUM7QUFDTixDQUFDO0FBRUQsU0FBUyxPQUFPLENBQUMsR0FBVztJQUN4QixnQkFBZ0IsQ0FBQyxLQUFLLENBQUMsT0FBTyxHQUFHLE1BQU07SUFDdkMsV0FBVyxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7SUFFM0IsWUFBWTtJQUNaLCtCQUErQjtJQUMvQix3QkFBd0I7SUFDeEIscUJBQXFCO0lBQ3JCLDRCQUE0QjtJQUM1QixtQ0FBbUM7SUFDbkMsS0FBSztBQUNULENBQUMiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiLi9kb2NzXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vaW5kZXgudHNcIik7XG4iLCJpbnRlcmZhY2Ugc3RyaW5nTWFwPFQ+e1xuICAgIFtrZXk6IHN0cmluZ106IFRcbn1cblxuZXhwb3J0IGNvbnN0IGltZ0NhdGVnb3JpZXM6IHN0cmluZ01hcDxzdHJpbmdNYXA8c3RyaW5nPj4gPSB7XG4gICAgc3ViamVjdHM6IHtcbiAgICAgICAgbWU6ICdpaycsXG4gICAgICAgIHlvdTogJ2ppaicsXG4gICAgICAgIHVzOiAnd2lqJ1xuICAgIH0sXG4gICAgY29tcGFyaXNvbnM6IHtcbiAgICAgICAgLy9jb21wYXJhdG9yc1xuICAgICAgICBhbmQ6ICdwbHVzJyxcbiAgICAgICAgXCJlcXVhbCB0b1wiOiAnZ2VsaWpraGVpZHN0ZWtlbidcbiAgICB9LFxuICAgIGZlZWxpbmdzOiB7XG4gICAgICAgIGFuZ3J5OiAnYm9vcycsXG4gICAgICAgIGdvb2Q6ICdnb2VkJyxcbiAgICAgICAgYmFkOiAnc2xlY2h0JyxcbiAgICAgICAgcGFpbkh1cnQ6ICdwaWpuJyxcbiAgICAgICAgY3Jhenk6ICdvbm5vemVsLWRvZW4nLFxuICAgICAgICBoYWhhOiAnbGFjaGVuJyxcbiAgICB9LFxuICAgIGFjdGlvbnM6IHtcbiAgICAgICAgcXVlc3Rpb246ICd2cmFhZ3Rla2VuJyxcbiAgICAgICAgaGVsbG86ICdoYWxsby16ZWdnZW4tMicsXG4gICAgICAgIGdyZWV0aW5nczogJ2RhZy16ZWdnZW4nLFxuICAgICAgICBkYW5jZTogJ2RhbnNlbicsXG4gICAgICAgIGxvb2tBdDogJ3ZpbmRlbicsXG4gICAgICAgIHJ1bjogJ2xvcGVuJyxcbiAgICAgICAgdGltZU91dDogJ3RpbWUtb3V0JyxcbiAgICB9LFxuICAgIGlkZWFzOiB7XG4gICAgICAgIG91dHNpZGU6ICdidWl0ZW4nLFxuICAgICAgICBsYXRlOiAndGUtbGFhdC1rbG9rJyxcbiAgICAgICAgbmlnaHQ6ICduYWNodCcsXG4gICAgICAgIGRhd246ICdvY2h0ZW5kJyxcbiAgICAgICAgZnV0dXJlOiAndG9la29tc3QnLFxuICAgICAgICBcbiAgICAgICAgd2hlbjogJ3dhbm5lZXInLFxuICAgICAgICB3aGVyZTogJ3dhYXInLFxuICAgICAgICB3aHk6ICd3YWFyb20nLFxuICAgICAgICBob3c6ICdob2UnLFxuICAgIH0sXG4gICAgcGxhY2VzOiB7XG4gICAgICAgIGhpbGxzOiAnYWtrZXJzJyxcbiAgICAgICAgc2VhOiAnemVlJyxcbiAgICAgICAgbW91bnRhaW46ICdiZXJnZW4nLFxuICAgICAgICBjYXZlOiAnZ3JvdCcsXG4gICAgICAgIG1pbmU6ICdtaWpuJyxcbiAgICAgICAganVuZ2xlOiAnanVuZ2xlJyxcbiAgICAgICAgaWNlYmVyZ3M6ICdpanNiZXJnJyxcbiAgICAgICAgc25vdzogJ3NuZWV1dycsXG4gICAgfSxcbiAgICB0aGluZ3M6IHtcbiAgICAgICAgdHJlZTogJ2Jvb20nLFxuICAgICAgICBiZWQ6ICdiZWQnLFxuICAgICAgICByYWlsczogJ3RyZWluLXJhaWxzJyxcbiAgICB9XG59XG5cbk9iamVjdC5hc3NpZ24oaW1nQ2F0ZWdvcmllcy5zdWJqZWN0cywgaW1nQ2F0ZWdvcmllcy5jb21wYXJpc29ucylcbmRlbGV0ZSBpbWdDYXRlZ29yaWVzLmNvbXBhcmlzb25zO1xuXG5jb25zdCBiYXNlSW1nVXJsID0gXCJodHRwOi8vd2Vic2VydmljZXMuY2NsLmt1bGV1dmVuLmJlL3BpY3RvL3NjbGVyYS9cIlxuXG5leHBvcnQgZnVuY3Rpb24gaWRUb1VybChpbWdJZDogc3RyaW5nKXtcbiAgICByZXR1cm4gYmFzZUltZ1VybCArIGltZ0lkICsgXCIucG5nXCJcbn0iLCJpbXBvcnQge3RlZW55UmVxdWVzdCBhcyByZXF1ZXN0fSBmcm9tICd0ZWVueS1yZXF1ZXN0J1xuaW1wb3J0IHsgaW1nQ2F0ZWdvcmllcywgaWRUb1VybCB9IGZyb20gJy4vaW1ncyc7XG5cbmNvbnN0IGJhc2VSZWxheSA9IFwiaHR0cHM6Ly9odHRwcmVsYXkuaW8vbGluay9waWN0b2NyYWZ0XCJcblxuY29uc3QgdWlDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImludGVyZmFjZVwiKTtcbmNvbnN0IGltZ3NDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImlucHV0XCIpO1xuY29uc3QgaW1nVGVtcGxhdGUgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwicGljdG9cIikuaXRlbSgwKTtcbmNvbnN0IGNhdFRlbXBsYXRlID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImNhdGVnb3J5XCIpLml0ZW0oMCk7XG5cbmNvbnN0IGNvbm5lY3RDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbm5lY3RcIik7XG5jb25zdCBrZXlFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwia2V5XCIpXG5kb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInN1Ym1pdFwiKS5vbmNsaWNrID0gZXYgPT4gY29ubmVjdChrZXlFbC5ub2RlVmFsdWUpXG5cbmNvbm5lY3QoXCIxMjM0XCIpXG5sb2FkSW1ncygpXG5cbmZ1bmN0aW9uIGxvYWRJbWdzKCl7XG4gICAgT2JqZWN0LmtleXMoaW1nQ2F0ZWdvcmllcykuZm9yRWFjaChjYXQgPT4ge1xuICAgICAgICBsZXQgY2F0RWwgPSBjYXRUZW1wbGF0ZS5jbG9uZU5vZGUoKVxuICAgICAgICBpbWdzQ29udGFpbmVyLmFwcGVuZENoaWxkKGNhdEVsKVxuICAgICAgICBsZXQgaW1ncyA9IGltZ0NhdGVnb3JpZXNbY2F0XVxuXG4gICAgICAgIGNhdEVsLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIikpXG4gICAgICAgIGNhdEVsLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIikpXG5cbiAgICAgICAgT2JqZWN0LmtleXMoaW1ncykuZm9yRWFjaCgoaW1nVGl0bGUsIGksIGtleXMpID0+IHtcbiAgICAgICAgICAgIGxldCBpbWdJZCA9IGltZ3NbaW1nVGl0bGVdXG4gICAgICAgICAgICBsZXQgaW1nRWwgPSBpbWdUZW1wbGF0ZS5jbG9uZU5vZGUoKSBhcyBIVE1MSW5wdXRFbGVtZW50XG5cbiAgICAgICAgICAgIGltZ0VsLmlkID0gaW1nSWRcbiAgICAgICAgICAgIGltZ0VsLnNyYyA9IGlkVG9VcmwoaW1nSWQpXG5cbiAgICAgICAgICAgIGNhdEVsLmNoaWxkTm9kZXNbTWF0aC5mbG9vcigyKmkva2V5cy5sZW5ndGgpXS5hcHBlbmRDaGlsZChpbWdFbClcbiAgICAgICAgICAgIC8vIGNhdEVsLmFwcGVuZENoaWxkKGltZ0VsKVxuICAgICAgICB9KVxuICAgIH0pXG59XG5cbmZ1bmN0aW9uIGNvbm5lY3Qoa2V5OiBzdHJpbmcpe1xuICAgIGNvbm5lY3RDb250YWluZXIuc3R5bGUuZGlzcGxheSA9ICdub25lJ1xuICAgIHVpQ29udGFpbmVyLmhpZGRlbiA9IGZhbHNlO1xuXG4gICAgLy8gcmVxdWVzdCh7XG4gICAgLy8gICAgIHVybDogYmFzZVJlbGF5ICsgJ2YzZmQnLFxuICAgIC8vICAgICBib2R5OiAndGVzdDEyMzQnLFxuICAgIC8vICAgICBtZXRob2Q6ICdQT1NUJ1xuICAgIC8vIH0sIChlcnIsIHJlc3AsIGJvZHkpID0+IHtcbiAgICAvLyAgICAgY29uc29sZS5sb2cocmVzcC5zdGF0dXNDb2RlKVxuICAgIC8vIH0pXG59Il0sInNvdXJjZVJvb3QiOiIifQ==