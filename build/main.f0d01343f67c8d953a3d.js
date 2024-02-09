/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.scss":
/*!************************!*\
  !*** ./src/index.scss ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.scss */ "./src/index.scss");

var menuBtn = document.querySelector('.burger-menu');
var modal = document.querySelector('.modal');
var closeBtn = document.querySelector('.modal .cross');
var nav = document.querySelector('.nav');
var office = document.querySelector('.office');
var minus = document.querySelector('.minus');
var plus = document.querySelector('.plus');
var officePlus = document.querySelector('.office-plus');
var officeMinus = document.querySelector('.office-minus');
var check = document.querySelector('.checkbox-wrapper');
var tick = document.querySelector('.checkbox__tick');
var modalCheck = document.querySelector('.modal-checkbox-wrapper');
var modalTick = document.querySelector('.modal-tick');
menuBtn.addEventListener('click', function () {
    modal.showModal();
});
closeBtn.addEventListener('click', function () {
    modal.close();
});
modal.addEventListener("click", function (e) {
    var modalDismensions = modal.getBoundingClientRect();
    var closeCondition = e.clientX < modalDismensions.left ||
        e.clientX > modalDismensions.right ||
        e.clientY < modalDismensions.top ||
        e.clientY > modalDismensions.bottom;
    if (closeCondition) {
        modal.close();
    }
});
plus.addEventListener('click', function () {
    nav.classList.add('nav-open');
    plus.classList.add('plus-open');
    minus.classList.add('minus-open');
});
minus.addEventListener('click', function () {
    plus.classList.remove('plus-open');
    nav.classList.remove('nav-open');
    minus.classList.remove('minus-open');
});
officePlus.addEventListener('click', function () {
    office.classList.add('office-open');
    officePlus.classList.add('office-plus-open');
    officeMinus.classList.add('office-minus-open');
});
officeMinus.addEventListener('click', function () {
    officePlus.classList.remove('office-plus-open');
    office.classList.remove('office-open');
    officeMinus.classList.remove('office-minus-open');
});
check.addEventListener('click', function () {
    tick.classList.toggle('checkbox__tick-visible');
});
modalCheck.addEventListener('click', function () {
    modalTick.classList.toggle('modal-tick-visible');
});

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5mMGQwMTM0M2Y2N2M4ZDk1M2EzZC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBOzs7Ozs7O1VDQUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7QUNOc0I7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWJwYWNrLy4vc3JjL2luZGV4LnNjc3M/MjA2ZiIsIndlYnBhY2s6Ly93ZWJwYWNrL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3dlYnBhY2svd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly93ZWJwYWNrLy4vc3JjL2luZGV4LnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgJy4vaW5kZXguc2Nzcyc7XG52YXIgbWVudUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5idXJnZXItbWVudScpO1xudmFyIG1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vZGFsJyk7XG52YXIgY2xvc2VCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWwgLmNyb3NzJyk7XG52YXIgbmF2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5hdicpO1xudmFyIG9mZmljZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5vZmZpY2UnKTtcbnZhciBtaW51cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5taW51cycpO1xudmFyIHBsdXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGx1cycpO1xudmFyIG9mZmljZVBsdXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcub2ZmaWNlLXBsdXMnKTtcbnZhciBvZmZpY2VNaW51cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5vZmZpY2UtbWludXMnKTtcbnZhciBjaGVjayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jaGVja2JveC13cmFwcGVyJyk7XG52YXIgdGljayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jaGVja2JveF9fdGljaycpO1xudmFyIG1vZGFsQ2hlY2sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWwtY2hlY2tib3gtd3JhcHBlcicpO1xudmFyIG1vZGFsVGljayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbC10aWNrJyk7XG5tZW51QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAgIG1vZGFsLnNob3dNb2RhbCgpO1xufSk7XG5jbG9zZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgICBtb2RhbC5jbG9zZSgpO1xufSk7XG5tb2RhbC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKGUpIHtcbiAgICB2YXIgbW9kYWxEaXNtZW5zaW9ucyA9IG1vZGFsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgIHZhciBjbG9zZUNvbmRpdGlvbiA9IGUuY2xpZW50WCA8IG1vZGFsRGlzbWVuc2lvbnMubGVmdCB8fFxuICAgICAgICBlLmNsaWVudFggPiBtb2RhbERpc21lbnNpb25zLnJpZ2h0IHx8XG4gICAgICAgIGUuY2xpZW50WSA8IG1vZGFsRGlzbWVuc2lvbnMudG9wIHx8XG4gICAgICAgIGUuY2xpZW50WSA+IG1vZGFsRGlzbWVuc2lvbnMuYm90dG9tO1xuICAgIGlmIChjbG9zZUNvbmRpdGlvbikge1xuICAgICAgICBtb2RhbC5jbG9zZSgpO1xuICAgIH1cbn0pO1xucGx1cy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgICBuYXYuY2xhc3NMaXN0LmFkZCgnbmF2LW9wZW4nKTtcbiAgICBwbHVzLmNsYXNzTGlzdC5hZGQoJ3BsdXMtb3BlbicpO1xuICAgIG1pbnVzLmNsYXNzTGlzdC5hZGQoJ21pbnVzLW9wZW4nKTtcbn0pO1xubWludXMuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gICAgcGx1cy5jbGFzc0xpc3QucmVtb3ZlKCdwbHVzLW9wZW4nKTtcbiAgICBuYXYuY2xhc3NMaXN0LnJlbW92ZSgnbmF2LW9wZW4nKTtcbiAgICBtaW51cy5jbGFzc0xpc3QucmVtb3ZlKCdtaW51cy1vcGVuJyk7XG59KTtcbm9mZmljZVBsdXMuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gICAgb2ZmaWNlLmNsYXNzTGlzdC5hZGQoJ29mZmljZS1vcGVuJyk7XG4gICAgb2ZmaWNlUGx1cy5jbGFzc0xpc3QuYWRkKCdvZmZpY2UtcGx1cy1vcGVuJyk7XG4gICAgb2ZmaWNlTWludXMuY2xhc3NMaXN0LmFkZCgnb2ZmaWNlLW1pbnVzLW9wZW4nKTtcbn0pO1xub2ZmaWNlTWludXMuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gICAgb2ZmaWNlUGx1cy5jbGFzc0xpc3QucmVtb3ZlKCdvZmZpY2UtcGx1cy1vcGVuJyk7XG4gICAgb2ZmaWNlLmNsYXNzTGlzdC5yZW1vdmUoJ29mZmljZS1vcGVuJyk7XG4gICAgb2ZmaWNlTWludXMuY2xhc3NMaXN0LnJlbW92ZSgnb2ZmaWNlLW1pbnVzLW9wZW4nKTtcbn0pO1xuY2hlY2suYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gICAgdGljay5jbGFzc0xpc3QudG9nZ2xlKCdjaGVja2JveF9fdGljay12aXNpYmxlJyk7XG59KTtcbm1vZGFsQ2hlY2suYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gICAgbW9kYWxUaWNrLmNsYXNzTGlzdC50b2dnbGUoJ21vZGFsLXRpY2stdmlzaWJsZScpO1xufSk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=