(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\n  <h1>Visualize Search Algorithms</h1>\n</div>\n\n<div style=\"margin-top: 60px;\">\n  \n  <button name=\"visualize\" (click)=\"startSearch($event)\">Visualize</button>\n  <button name=\"refresh\" (click)=\"refresh()\">Refresh</button>\n  <button name=\"keepBlocks\" (click)=\"keepBlocks()\">Keep</button>\n\n</div>\n\n<div>\n<table style=\"width:400px;height:400px\" >\n<tr id=\"0\">\n  <td id=\"0-0\" (mousedown)=\"press($event)\" (mouseup)=\"mouseupp($event)\" (click)=\"clicked($event)\" (mouseover)=\"mousecome($event)\" (mouseleave)=\"mouseleft($event)\"></td>\n  <td id=\"0-1\" (mousedown)=\"press($event)\"  (mouseup)=\"mouseupp($event)\" (click)=\"clicked($event)\" (mouseover)=\"mousecome($event)\" (mouseleave)=\"mouseleft($event)\"></td>\n  <td id=\"0-2\" (mousedown)=\"press($event)\"  (mouseup)=\"mouseupp($event)\" (click)=\"clicked($event)\" (mouseover)=\"mousecome($event)\" (mouseleave)=\"mouseleft($event)\"></td>\n  <td id=\"0-3\" (mousedown)=\"press($event)\"  (mouseup)=\"mouseupp($event)\" (click)=\"clicked($event)\" (mouseover)=\"mousecome($event)\" (mouseleave)=\"mouseleft($event)\"></td>\n  <td id=\"0-4\" (mousedown)=\"press($event)\"  (mouseup)=\"mouseupp($event)\" (click)=\"clicked($event)\" (mouseover)=\"mousecome($event)\" (mouseleave)=\"mouseleft($event)\"></td>\n  <td id=\"0-5\" (mousedown)=\"press($event)\" (mouseup)=\"mouseupp($event)\" (click)=\"clicked($event)\" (mouseover)=\"mousecome($event)\" (mouseleave)=\"mouseleft($event)\"></td>\n  <td id=\"0-6\" (mousedown)=\"press($event)\"  (mouseup)=\"mouseupp($event)\" (click)=\"clicked($event)\" (mouseover)=\"mousecome($event)\" (mouseleave)=\"mouseleft($event)\"></td>\n  <td id=\"0-7\" (mousedown)=\"press($event)\"  (mouseup)=\"mouseupp($event)\" (click)=\"clicked($event)\" (mouseover)=\"mousecome($event)\" (mouseleave)=\"mouseleft($event)\"></td>\n  <td id=\"0-8\" (mousedown)=\"press($event)\"  (mouseup)=\"mouseupp($event)\" (click)=\"clicked($event)\" (mouseover)=\"mousecome($event)\" (mouseleave)=\"mouseleft($event)\"></td>\n  <td id=\"0-9\" (mousedown)=\"press($event)\"  (mouseup)=\"mouseupp($event)\" (click)=\"clicked($event)\" (mouseover)=\"mousecome($event)\" (mouseleave)=\"mouseleft($event)\"></td>\n\n</tr>\n<tr id=\"1\">\n  <td id=\"1-0\" (mousedown)=\"press($event)\" (mouseup)=\"mouseupp($event)\" (click)=\"clicked($event)\" (mouseover)=\"mousecome($event)\" (mouseleave)=\"mouseleft($event)\"></td>\n  <td id=\"1-1\" (mousedown)=\"press($event)\"  (mouseup)=\"mouseupp($event)\" (click)=\"clicked($event)\" (mouseover)=\"mousecome($event)\" (mouseleave)=\"mouseleft($event)\"></td>\n  <td id=\"1-2\" (mousedown)=\"press($event)\"  (mouseup)=\"mouseupp($event)\" (click)=\"clicked($event)\" (mouseover)=\"mousecome($event)\" (mouseleave)=\"mouseleft($event)\"></td>\n  <td id=\"1-3\" (mousedown)=\"press($event)\"  (mouseup)=\"mouseupp($event)\" (click)=\"clicked($event)\" (mouseover)=\"mousecome($event)\" (mouseleave)=\"mouseleft($event)\"></td>\n  <td id=\"1-4\" (mousedown)=\"press($event)\"  (mouseup)=\"mouseupp($event)\" (click)=\"clicked($event)\" (mouseover)=\"mousecome($event)\" (mouseleave)=\"mouseleft($event)\"></td>\n  <td id=\"1-5\" (mousedown)=\"press($event)\" (mouseup)=\"mouseupp($event)\" (click)=\"clicked($event)\" (mouseover)=\"mousecome($event)\" (mouseleave)=\"mouseleft($event)\"></td>\n  <td id=\"1-6\" (mousedown)=\"press($event)\"  (mouseup)=\"mouseupp($event)\" (click)=\"clicked($event)\" (mouseover)=\"mousecome($event)\" (mouseleave)=\"mouseleft($event)\"></td>\n  <td id=\"1-7\" (mousedown)=\"press($event)\"  (mouseup)=\"mouseupp($event)\" (click)=\"clicked($event)\" (mouseover)=\"mousecome($event)\" (mouseleave)=\"mouseleft($event)\"></td>\n  <td id=\"1-8\" (mousedown)=\"press($event)\"  (mouseup)=\"mouseupp($event)\" (click)=\"clicked($event)\" (mouseover)=\"mousecome($event)\" (mouseleave)=\"mouseleft($event)\"></td>\n  <td id=\"1-9\" (mousedown)=\"press($event)\"  (mouseup)=\"mouseupp($event)\" (click)=\"clicked($event)\" (mouseover)=\"mousecome($event)\" (mouseleave)=\"mouseleft($event)\"></td>\n\n</tr>\n<tr id=\"2\">\n  <td id=\"2-0\" (mousedown)=\"press($event)\"  (mouseup)=\"mouseupp($event)\" (click)=\"clicked($event)\" (mouseover)=\"mousecome($event)\" (mouseleave)=\"mouseleft($event)\"></td>\n  <td id=\"2-1\" (mousedown)=\"press($event)\"  (mouseup)=\"mouseupp($event)\" (click)=\"clicked($event)\" (mouseover)=\"mousecome($event)\" (mouseleave)=\"mouseleft($event)\"></td>\n  <td id=\"2-2\" (mousedown)=\"press($event)\"  (mouseup)=\"mouseupp($event)\" (click)=\"clicked($event)\" (mouseover)=\"mousecome($event)\" (mouseleave)=\"mouseleft($event)\"></td>\n  <td id=\"2-3\" (mousedown)=\"press($event)\"  (mouseup)=\"mouseupp($event)\" (click)=\"clicked($event)\" (mouseover)=\"mousecome($event)\" (mouseleave)=\"mouseleft($event)\"></td>\n  <td id=\"2-4\" (mousedown)=\"press($event)\"  (mouseup)=\"mouseupp($event)\" (click)=\"clicked($event)\" (mouseover)=\"mousecome($event)\" (mouseleave)=\"mouseleft($event)\"></td>\n  <td id=\"2-5\" (mousedown)=\"press($event)\" (mouseup)=\"mouseupp($event)\" (click)=\"clicked($event)\" (mouseover)=\"mousecome($event)\" (mouseleave)=\"mouseleft($event)\"></td>\n  <td id=\"2-6\" (mousedown)=\"press($event)\"  (mouseup)=\"mouseupp($event)\" (click)=\"clicked($event)\" (mouseover)=\"mousecome($event)\" (mouseleave)=\"mouseleft($event)\"></td>\n  <td id=\"2-7\" (mousedown)=\"press($event)\"  (mouseup)=\"mouseupp($event)\" (click)=\"clicked($event)\" (mouseover)=\"mousecome($event)\" (mouseleave)=\"mouseleft($event)\"></td>\n  <td id=\"2-8\" (mousedown)=\"press($event)\"  (mouseup)=\"mouseupp($event)\" (click)=\"clicked($event)\" (mouseover)=\"mousecome($event)\" (mouseleave)=\"mouseleft($event)\"></td>\n  <td id=\"2-9\" (mousedown)=\"press($event)\"  (mouseup)=\"mouseupp($event)\" (click)=\"clicked($event)\" (mouseover)=\"mousecome($event)\" (mouseleave)=\"mouseleft($event)\"></td>\n\n</tr>\n<tr id=\"3\">\n  <td id=\"3-0\" (mousedown)=\"press($event)\"  (mouseup)=\"mouseupp($event)\" (click)=\"clicked($event)\" (mouseover)=\"mousecome($event)\" (mouseleave)=\"mouseleft($event)\"></td>\n  <td id=\"3-1\" (mousedown)=\"press($event)\"  (mouseup)=\"mouseupp($event)\" (click)=\"clicked($event)\" (mouseover)=\"mousecome($event)\" (mouseleave)=\"mouseleft($event)\"></td>\n  <td id=\"3-2\" (mousedown)=\"press($event)\"  (mouseup)=\"mouseupp($event)\" (click)=\"clicked($eventv)\" (mouseover)=\"mousecome($event)\" (mouseleave)=\"mouseleft($event)\"></td>\n  <td id=\"3-3\" (mousedown)=\"press($event)\"  (mouseup)=\"mouseupp($event)\" (click)=\"clicked($event)\" (mouseover)=\"mousecome($event)\" (mouseleave)=\"mouseleft($event)\"></td>\n  <td id=\"3-4\" (mousedown)=\"press($event)\"  (mouseup)=\"mouseupp($event)\" (click)=\"clicked($event)\" (mouseover)=\"mousecome($event)\" (mouseleave)=\"mouseleft($event)\"></td>\n  <td id=\"3-5\" (mousedown)=\"press($event)\" (mouseup)=\"mouseupp($event)\" (click)=\"clicked($event)\" (mouseover)=\"mousecome($event)\" (mouseleave)=\"mouseleft($event)\"></td>\n  <td id=\"3-6\" (mousedown)=\"press($event)\"  (mouseup)=\"mouseupp($event)\" (click)=\"clicked($event)\" (mouseover)=\"mousecome($event)\" (mouseleave)=\"mouseleft($event)\"></td>\n  <td id=\"3-7\" (mousedown)=\"press($event)\"  (mouseup)=\"mouseupp($event)\" (click)=\"clicked($event)\" (mouseover)=\"mousecome($event)\" (mouseleave)=\"mouseleft($event)\"></td>\n  <td id=\"3-8\" (mousedown)=\"press($event)\"  (mouseup)=\"mouseupp($event)\" (click)=\"clicked($event)\" (mouseover)=\"mousecome($event)\" (mouseleave)=\"mouseleft($event)\"></td>\n  <td id=\"3-9\" (mousedown)=\"press($event)\"  (mouseup)=\"mouseupp($event)\" (click)=\"clicked($event)\" (mouseover)=\"mousecome($event)\" (mouseleave)=\"mouseleft($event)\"></td>\n\n</tr>\n<tr id=\"4\">\n  <td id=\"4-0\" (mousedown)=\"press($event)\"  (mouseup)=\"mouseupp($event)\" (click)=\"clicked($event)\" (mouseover)=\"mousecome($event)\" (mouseleave)=\"mouseleft($event)\"></td>\n  <td id=\"4-1\" (mousedown)=\"press($event)\"  (mouseup)=\"mouseupp($event)\" (click)=\"clicked($event)\" (mouseover)=\"mousecome($event)\" (mouseleave)=\"mouseleft($event)\"></td>\n  <td id=\"4-2\" (mousedown)=\"press($event)\"  (mouseup)=\"mouseupp($event)\" (click)=\"clicked($event)\" (mouseover)=\"mousecome($event)\" (mouseleave)=\"mouseleft($event)\"></td>\n  <td id=\"4-3\" (mousedown)=\"press($event)\"  (mouseup)=\"mouseupp($event)\" (click)=\"clicked($event)\" (mouseover)=\"mousecome($event)\" (mouseleave)=\"mouseleft($event)\"></td>\n  <td id=\"4-4\" (mousedown)=\"press($event)\"  (mouseup)=\"mouseupp($event)\" (click)=\"clicked($event)\" (mouseover)=\"mousecome($event)\" (mouseleave)=\"mouseleft($event)\"></td>\n  <td id=\"4-5\" (mousedown)=\"press($event)\" (mouseup)=\"mouseupp($event)\" (click)=\"clicked($event)\" (mouseover)=\"mousecome($event)\" (mouseleave)=\"mouseleft($event)\"></td>\n  <td id=\"4-6\" (mousedown)=\"press($event)\"  (mouseup)=\"mouseupp($event)\" (click)=\"clicked($event)\" (mouseover)=\"mousecome($event)\" (mouseleave)=\"mouseleft($event)\"></td>\n  <td id=\"4-7\" (mousedown)=\"press($event)\"  (mouseup)=\"mouseupp($event)\" (click)=\"clicked($event)\" (mouseover)=\"mousecome($event)\" (mouseleave)=\"mouseleft($event)\"></td>\n  <td id=\"4-8\" (mousedown)=\"press($event)\"  (mouseup)=\"mouseupp($event)\" (click)=\"clicked($event)\" (mouseover)=\"mousecome($event)\" (mouseleave)=\"mouseleft($event)\"></td>\n  <td id=\"4-9\" (mousedown)=\"press($event)\"  (mouseup)=\"mouseupp($event)\" (click)=\"clicked($event)\" (mouseover)=\"mousecome($event)\" (mouseleave)=\"mouseleft($event)\"></td>\n\n</tr>\n<tr id=\"5\">\n  <td id=\"5-0\" (mousedown)=\"press($event)\"  (mouseup)=\"mouseupp($event)\" (click)=\"clicked($event)\" (mouseover)=\"mousecome($event)\" (mouseleave)=\"mouseleft($event)\"></td>\n  <td id=\"5-1\" (mousedown)=\"press($event)\"  (mouseup)=\"mouseupp($event)\" (click)=\"clicked($event)\" (mouseover)=\"mousecome($event)\" (mouseleave)=\"mouseleft($event)\"></td>\n  <td id=\"5-2\" (mousedown)=\"press($event)\"  (mouseup)=\"mouseupp($event)\" (click)=\"clicked($event)\" (mouseover)=\"mousecome($event)\" (mouseleave)=\"mouseleft($event)\"></td>\n  <td id=\"5-3\" (mousedown)=\"press($event)\"  (mouseup)=\"mouseupp($event)\" (click)=\"clicked($event)\" (mouseover)=\"mousecome($event)\" (mouseleave)=\"mouseleft($event)\"></td>\n  <td id=\"5-4\" (mousedown)=\"press($event)\"  (mouseup)=\"mouseupp($event)\" (click)=\"clicked($event)\" (mouseover)=\"mousecome($event)\" (mouseleave)=\"mouseleft($event)\"></td>\n  <td id=\"5-5\" (mousedown)=\"press($event)\" (mouseup)=\"mouseupp($event)\" (click)=\"clicked($event)\" (mouseover)=\"mousecome($event)\" (mouseleave)=\"mouseleft($event)\"></td>\n  <td id=\"5-6\" (mousedown)=\"press($event)\"  (mouseup)=\"mouseupp($event)\" (click)=\"clicked($event)\" (mouseover)=\"mousecome($event)\" (mouseleave)=\"mouseleft($event)\"></td>\n  <td id=\"5-7\" (mousedown)=\"press($event)\"  (mouseup)=\"mouseupp($event)\" (click)=\"clicked($event)\" (mouseover)=\"mousecome($event)\" (mouseleave)=\"mouseleft($event)\"></td>\n  <td id=\"5-8\" (mousedown)=\"press($event)\"  (mouseup)=\"mouseupp($event)\" (click)=\"clicked($event)\" (mouseover)=\"mousecome($event)\" (mouseleave)=\"mouseleft($event)\"></td>\n  <td id=\"5-9\" (mousedown)=\"press($event)\"  (mouseup)=\"mouseupp($event)\" (click)=\"clicked($event)\" (mouseover)=\"mousecome($event)\" (mouseleave)=\"mouseleft($event)\"></td>\n\n</tr>\n\n<tr id=\"6\">\n  <td id=\"6-0\" (mousedown)=\"press($event)\"  (mouseup)=\"mouseupp($event)\" (click)=\"clicked($event)\" (mouseover)=\"mousecome($event)\" (mouseleave)=\"mouseleft($event)\"></td>\n  <td id=\"6-1\" (mousedown)=\"press($event)\"  (mouseup)=\"mouseupp($event)\" (click)=\"clicked($event)\" (mouseover)=\"mousecome($event)\" (mouseleave)=\"mouseleft($event)\"></td>\n  <td id=\"6-2\" (mousedown)=\"press($event)\"  (mouseup)=\"mouseupp($event)\" (click)=\"clicked($event)\" (mouseover)=\"mousecome($event)\" (mouseleave)=\"mouseleft($event)\"></td>\n  <td id=\"6-3\" (mousedown)=\"press($event)\"  (mouseup)=\"mouseupp($event)\" (click)=\"clicked($event)\" (mouseover)=\"mousecome($event)\" (mouseleave)=\"mouseleft($event)\"></td>\n  <td id=\"6-4\" (mousedown)=\"press($event)\"  (mouseup)=\"mouseupp($event)\" (click)=\"clicked($event)\" (mouseover)=\"mousecome($event)\" (mouseleave)=\"mouseleft($event)\"></td>\n  <td id=\"6-5\" (mousedown)=\"press($event)\" (mouseup)=\"mouseupp($event)\" (click)=\"clicked($event)\" (mouseover)=\"mousecome($event)\" (mouseleave)=\"mouseleft($event)\"></td>\n  <td id=\"6-6\" (mousedown)=\"press($event)\"  (mouseup)=\"mouseupp($event)\" (click)=\"clicked($event)\" (mouseover)=\"mousecome($event)\" (mouseleave)=\"mouseleft($event)\"></td>\n  <td id=\"6-7\" (mousedown)=\"press($event)\"  (mouseup)=\"mouseupp($event)\" (click)=\"clicked($event)\" (mouseover)=\"mousecome($event)\" (mouseleave)=\"mouseleft($event)\"></td>\n  <td id=\"6-8\" (mousedown)=\"press($event)\"  (mouseup)=\"mouseupp($event)\" (click)=\"clicked($event)\" (mouseover)=\"mousecome($event)\" (mouseleave)=\"mouseleft($event)\"></td>\n  <td id=\"6-9\" (mousedown)=\"press($event)\"  (mouseup)=\"mouseupp($event)\" (click)=\"clicked($event)\" (mouseover)=\"mousecome($event)\" (mouseleave)=\"mouseleft($event)\"></td>\n\n</tr>\n<tr id=\"7\">\n  <td id=\"7-0\" (mousedown)=\"press($event)\"  (mouseup)=\"mouseupp($event)\" (click)=\"clicked($event)\" (mouseover)=\"mousecome($event)\" (mouseleave)=\"mouseleft($event)\"></td>\n  <td id=\"7-1\" (mousedown)=\"press($event)\"  (mouseup)=\"mouseupp($event)\" (click)=\"clicked($event)\" (mouseover)=\"mousecome($event)\" (mouseleave)=\"mouseleft($event)\"></td>\n  <td id=\"7-2\" (mousedown)=\"press($event)\"  (mouseup)=\"mouseupp($event)\" (click)=\"clicked($event)\" (mouseover)=\"mousecome($event)\" (mouseleave)=\"mouseleft($event)\"></td>\n  <td id=\"7-3\" (mousedown)=\"press($event)\"  (mouseup)=\"mouseupp($event)\" (click)=\"clicked($event)\" (mouseover)=\"mousecome($event)\" (mouseleave)=\"mouseleft($event)\"></td>\n  <td id=\"7-4\" (mousedown)=\"press($event)\"  (mouseup)=\"mouseupp($event)\" (click)=\"clicked($event)\" (mouseover)=\"mousecome($event)\" (mouseleave)=\"mouseleft($event)\"></td>\n  <td id=\"7-5\" (mousedown)=\"press($event)\" (mouseup)=\"mouseupp($event)\" (click)=\"clicked($event)\" (mouseover)=\"mousecome($event)\" (mouseleave)=\"mouseleft($event)\"></td>\n  <td id=\"7-6\" (mousedown)=\"press($event)\"  (mouseup)=\"mouseupp($event)\" (click)=\"clicked($event)\" (mouseover)=\"mousecome($event)\" (mouseleave)=\"mouseleft($event)\"></td>\n  <td id=\"7-7\" (mousedown)=\"press($event)\"  (mouseup)=\"mouseupp($event)\" (click)=\"clicked($event)\" (mouseover)=\"mousecome($event)\" (mouseleave)=\"mouseleft($event)\"></td>\n  <td id=\"7-8\" (mousedown)=\"press($event)\"  (mouseup)=\"mouseupp($event)\" (click)=\"clicked($event)\" (mouseover)=\"mousecome($event)\" (mouseleave)=\"mouseleft($event)\"></td>\n  <td id=\"7-9\" (mousedown)=\"press($event)\"  (mouseup)=\"mouseupp($event)\" (click)=\"clicked($event)\" (mouseover)=\"mousecome($event)\" (mouseleave)=\"mouseleft($event)\"></td>\n\n</tr>\n<tr id=\"8\">\n  <td id=\"8-0\" (mousedown)=\"press($event)\"  (mouseup)=\"mouseupp($event)\" (click)=\"clicked($event)\" (mouseover)=\"mousecome($event)\" (mouseleave)=\"mouseleft($event)\"></td>\n  <td id=\"8-1\" (mousedown)=\"press($event)\"  (mouseup)=\"mouseupp($event)\" (click)=\"clicked($event)\" (mouseover)=\"mousecome($event)\" (mouseleave)=\"mouseleft($event)\"></td>\n  <td id=\"8-2\" (mousedown)=\"press($event)\"  (mouseup)=\"mouseupp($event)\" (click)=\"clicked($event)\" (mouseover)=\"mousecome($event)\" (mouseleave)=\"mouseleft($event)\"></td>\n  <td id=\"8-3\" (mousedown)=\"press($event)\"  (mouseup)=\"mouseupp($event)\" (click)=\"clicked($event)\" (mouseover)=\"mousecome($event)\" (mouseleave)=\"mouseleft($event)\"></td>\n  <td id=\"8-4\" (mousedown)=\"press($event)\"  (mouseup)=\"mouseupp($event)\" (click)=\"clicked($event)\" (mouseover)=\"mousecome($event)\" (mouseleave)=\"mouseleft($event)\"></td>\n  <td id=\"8-5\" (mousedown)=\"press($event)\" (mouseup)=\"mouseupp($event)\" (click)=\"clicked($event)\" (mouseover)=\"mousecome($event)\" (mouseleave)=\"mouseleft($event)\"></td>\n  <td id=\"8-6\" (mousedown)=\"press($event)\"  (mouseup)=\"mouseupp($event)\" (click)=\"clicked($event)\" (mouseover)=\"mousecome($event)\" (mouseleave)=\"mouseleft($event)\"></td>\n  <td id=\"8-7\" (mousedown)=\"press($event)\"  (mouseup)=\"mouseupp($event)\" (click)=\"clicked($event)\" (mouseover)=\"mousecome($event)\" (mouseleave)=\"mouseleft($event)\"></td>\n  <td id=\"8-8\" (mousedown)=\"press($event)\"  (mouseup)=\"mouseupp($event)\" (click)=\"clicked($event)\" (mouseover)=\"mousecome($event)\" (mouseleave)=\"mouseleft($event)\"></td>\n  <td id=\"8-9\" (mousedown)=\"press($event)\"  (mouseup)=\"mouseupp($event)\" (click)=\"clicked($event)\" (mouseover)=\"mousecome($event)\" (mouseleave)=\"mouseleft($event)\"></td>\n\n</tr>\n\n<tr id=\"9\">\n  <td id=\"9-0\" (mousedown)=\"press($event)\"  (mouseup)=\"mouseupp($event)\" (click)=\"clicked($event)\" (mouseover)=\"mousecome($event)\" (mouseleave)=\"mouseleft($event)\"></td>\n  <td id=\"9-1\" (mousedown)=\"press($event)\"  (mouseup)=\"mouseupp($event)\" (click)=\"clicked($event)\" (mouseover)=\"mousecome($event)\" (mouseleave)=\"mouseleft($event)\"></td>\n  <td id=\"9-2\" (mousedown)=\"press($event)\"  (mouseup)=\"mouseupp($event)\" (click)=\"clicked($event)\" (mouseover)=\"mousecome($event)\" (mouseleave)=\"mouseleft($event)\"></td>\n  <td id=\"9-3\" (mousedown)=\"press($event)\"  (mouseup)=\"mouseupp($event)\" (click)=\"clicked($event)\" (mouseover)=\"mousecome($event)\" (mouseleave)=\"mouseleft($event)\"></td>\n  <td id=\"9-4\" (mousedown)=\"press($event)\"  (mouseup)=\"mouseupp($event)\" (click)=\"clicked($event)\" (mouseover)=\"mousecome($event)\" (mouseleave)=\"mouseleft($event)\"></td>\n  <td id=\"9-5\" (mousedown)=\"press($event)\" (mouseup)=\"mouseupp($event)\" (click)=\"clicked($event)\" (mouseover)=\"mousecome($event)\" (mouseleave)=\"mouseleft($event)\"></td>\n  <td id=\"9-6\" (mousedown)=\"press($event)\"  (mouseup)=\"mouseupp($event)\" (click)=\"clicked($event)\" (mouseover)=\"mousecome($event)\" (mouseleave)=\"mouseleft($event)\"></td>\n  <td id=\"9-7\" (mousedown)=\"press($event)\"  (mouseup)=\"mouseupp($event)\" (click)=\"clicked($event)\" (mouseover)=\"mousecome($event)\" (mouseleave)=\"mouseleft($event)\"></td>\n  <td id=\"9-8\" (mousedown)=\"press($event)\"  (mouseup)=\"mouseupp($event)\" (click)=\"clicked($event)\" (mouseover)=\"mousecome($event)\" (mouseleave)=\"mouseleft($event)\"></td>\n  <td id=\"9-9\" (mousedown)=\"press($event)\"  (mouseup)=\"mouseupp($event)\" (click)=\"clicked($event)\" (mouseover)=\"mousecome($event)\" (mouseleave)=\"mouseleft($event)\"></td>\n\n</tr>\n\n</table>\n\n</div>\n");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function() { return __classPrivateFieldGet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function() { return __classPrivateFieldSet; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
}

function __classPrivateFieldSet(receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
}


/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".container{\r\n    font-family: Arial, Helvetica, sans-serif;\r\n    background-color:#24292e;\r\n    margin: 0em; \r\n    padding-top: 0em;\r\n    position: fixed;\r\n    width: 100%;\r\n    height:10%;\r\n    top:0px;\r\n    left:0px;\r\n    color:white;\r\n}\r\n\r\n/* td:hover{\r\n    background-color:aqua;\r\n} */\r\n\r\ntable{\r\n    margin-top: 40px;\r\n    border-collapse: collapse;\r\n}\r\n\r\ntable, th, td {\r\n    border: 1px solid black;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSx5Q0FBeUM7SUFDekMsd0JBQXdCO0lBQ3hCLFdBQVc7SUFDWCxnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLFdBQVc7SUFDWCxVQUFVO0lBQ1YsT0FBTztJQUNQLFFBQVE7SUFDUixXQUFXO0FBQ2Y7O0FBRUE7O0dBRUc7O0FBRUg7SUFDSSxnQkFBZ0I7SUFDaEIseUJBQXlCO0FBQzdCOztBQUNBO0lBQ0ksdUJBQXVCO0VBQ3pCIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVye1xyXG4gICAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiMyNDI5MmU7XHJcbiAgICBtYXJnaW46IDBlbTsgXHJcbiAgICBwYWRkaW5nLXRvcDogMGVtO1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6MTAlO1xyXG4gICAgdG9wOjBweDtcclxuICAgIGxlZnQ6MHB4O1xyXG4gICAgY29sb3I6d2hpdGU7XHJcbn1cclxuXHJcbi8qIHRkOmhvdmVye1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjphcXVhO1xyXG59ICovXHJcblxyXG50YWJsZXtcclxuICAgIG1hcmdpbi10b3A6IDQwcHg7XHJcbiAgICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xyXG59XHJcbnRhYmxlLCB0aCwgdGQge1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XHJcbiAgfSJdfQ== */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'visualsearch';
        this.map = new Map();
        this.startrow = 0;
        this.startcol = 0;
        this.destinationrow = 1;
        this.destinationcol = 3;
        this.destination = [1, 3];
        //pressed stores if user is dragging any of the board elements
        this.pressed = false;
        //val stores clicked element value, 4 if none
        this.val = 4;
        //snaketiles stores values of board
        this.snaketiles = new Array(5);
        this.prevrow = -1;
        this.prevcolumn = -1;
        this.theQ = [{ row: this.startrow, col: this.startcol, isvisited: true, prevrow: -1, prevcol: -1 }];
        /*renderdfs():void{
          this.element=this.theQ[this.theQ];
          
          let rows=this.element.row
          let cols=this.element.col;
      
      
      
      
        }
      
        depthfirst():void{
          this.theQ.shift();
          this.theQ.push({row:this.startrow,col:this.startcol,isvisited:true,prevrow:-1,prevcol:-1});
          this.intervals=setInterval(() => {
          this.renderdfs()}, 50);
        }*/
    }
    keepBlocks() {
        for (let i = 0; i < 10; i++) {
            for (let j = 0; j < 10; j++) {
                let element = i.toString() + "-" + j.toString();
                if (this.snaketiles[i][j] == 5) {
                    this.snaketiles[i][j] = 0;
                    document.getElementById(element).style.backgroundColor = "white";
                }
                //else if(this.snaketiles[i][j]==)
            }
        }
        this.snaketiles[this.startrow][this.startcol] = 1;
        this.snaketiles[this.destinationrow][this.destinationcol] = 2;
        let element = this.startrow.toString() + "-" + this.startcol.toString();
        document.getElementById(element).style.backgroundColor = "green";
        element = this.destinationrow.toString() + "-" + this.destinationcol.toString();
        document.getElementById(element).style.backgroundColor = "red";
        while (this.theQ.length > 0) {
            this.theQ.shift();
        }
        this.theQ.push({ row: this.startrow, col: this.startcol, isvisited: true, prevrow: -1, prevcol: -1 });
    }
    refresh() {
        for (let i = 0; i < 10; i++) {
            //this.snaketiles[i]=new Array(10);
            for (let j = 0; j < 10; j++) {
                let element = i.toString() + "-" + j.toString();
                if (i == 0 && j == 0) {
                    this.snaketiles[i][j] = 1;
                    document.getElementById("0-0").style.backgroundColor = "green";
                    continue;
                }
                if (i == 1 && j == 3) {
                    this.snaketiles[i][j] = 2;
                    document.getElementById("1-3").style.backgroundColor = "red";
                    continue;
                }
                this.snaketiles[i][j] = 0;
                document.getElementById(element).style.backgroundColor = "white";
            }
        }
        this.startrow = 0;
        this.startcol = 0;
        console.log(this.theQ.length);
        while (this.theQ.length > 0) {
            this.theQ.shift();
        }
        this.theQ.push({ row: this.startrow, col: this.startcol, isvisited: false, prevrow: -1, prevcol: -1 });
        //clearInterval(this.intervals);*/
    }
    //0 is white 1 is start 2 is destination 3 is wall
    ngOnInit() {
        for (let i = 0; i < 10; i++) {
            this.snaketiles[i] = new Array(10);
            for (let j = 0; j < 10; j++) {
                if (i == 0 && j == 0) {
                    this.snaketiles[i][j] = 1;
                    document.getElementById("0-0").style.backgroundColor = "green";
                    continue;
                }
                if (i == 1 && j == 3) {
                    this.snaketiles[i][j] = 2;
                    document.getElementById("1-3").style.backgroundColor = "red";
                    continue;
                }
                this.snaketiles[i][j] = 0;
            }
        }
    }
    clicked(event) {
        let elementId = event.target.id;
        let row = parseInt(elementId[0]);
        //console.log(row);
        let col = parseInt(elementId[2]);
        if (this.snaketiles[row][col] == 3) {
            this.snaketiles[row][col] = 0;
            document.getElementById(elementId).style.backgroundColor = "white";
        }
    }
    //mousedown event
    press(event) {
        // console.log('here');
        this.pressed = true;
        let elementId = event.target.id;
        let row = parseInt(elementId[0]);
        //console.log(row);
        let col = parseInt(elementId[2]);
        //updates val to value of pressed value in board
        this.val = this.snaketiles[row][col];
        //console.log(this.val);
        //checks if val is white or brown
        if (this.val == 0 || this.val == 3) {
            this.snaketiles[row][col] = 3;
            document.getElementById(elementId).style.backgroundColor = "grey";
        }
        else if (this.val == 1 || this.val == 2) { //checks if val is green
            this.prevrow = row;
            this.prevcolumn = col;
            this.transferElement = elementId;
            //console.log(this.prevrow);
            //console.log(this.transferElement);
            //console.log(this.prevcolumn);
        }
    }
    findpath() {
        let elementStr = this.pathrow.toString() + "-" + this.pathcol.toString();
        //this.theQ.shift();
        //console.log(elementStr);
        document.getElementById(elementStr).style.backgroundColor = "blue";
        let ele = this.map.get(elementStr);
        console.log(ele);
        // clearInterval(this.intervals);
        this.pathrow = parseInt(ele[0]);
        this.pathcol = parseInt(ele[2]);
        if (this.pathrow == this.startrow && this.pathcol == this.startcol) {
            clearInterval(this.intervals);
        }
        //console.log(this.pathrow);
    }
    renders() {
        //console.log(this.theQ);
        if (this.theQ.length == 0) {
            clearInterval(this.intervals);
            console.log("No path");
            return;
        }
        this.element = this.theQ[0];
        let rows = this.element.row;
        let cols = this.element.col;
        if (this.snaketiles[rows][cols] == 2) {
            this.snaketiles[rows][cols] = 2;
            let elementStr = rows.toString() + "-" + cols.toString();
            this.theQ.shift();
            // console.log(elementStr);
            document.getElementById(elementStr).style.backgroundColor = "blue";
            clearInterval(this.intervals);
            this.pathrow = rows;
            this.pathcol = cols;
            //this.map.set((rows+1).toString+"-"+cols.toString(),elementStr);
            //console.log(this.map.get("0-2"));
            this.intervals = setInterval(() => { this.findpath(), 100; });
            return;
        }
        this.snaketiles[rows][cols] = 5;
        let elementStr = rows.toString() + "-" + cols.toString();
        this.theQ.shift();
        // console.log(elementStr);
        document.getElementById(elementStr).style.backgroundColor = "yellow";
        if (rows - 1 >= 0 && (this.snaketiles[rows - 1][cols] == 0 || this.snaketiles[rows - 1][cols] == 2)) {
            this.theQ.push({ row: rows - 1, col: cols, isvisited: false, prevrow: rows, prevcol: cols });
            this.map.set((rows - 1).toString() + "-" + cols.toString(), elementStr);
        }
        if (rows + 1 < 10 && (this.snaketiles[rows + 1][cols] == 0 || this.snaketiles[rows + 1][cols] == 2)) {
            this.theQ.push({ row: rows + 1, col: cols, isvisited: false, prevrow: rows, prevcol: cols });
            this.map.set((rows + 1).toString() + "-" + cols.toString(), elementStr);
        }
        if (cols - 1 >= 0 && (this.snaketiles[rows][cols - 1] == 0 || this.snaketiles[rows][cols - 1] == 2)) {
            this.theQ.push({ row: rows, col: cols - 1, isvisited: false, prevrow: rows, prevcol: cols });
            this.map.set((rows).toString() + "-" + (cols - 1).toString(), elementStr);
        }
        if (cols + 1 < 10 && (this.snaketiles[rows][cols + 1] == 0 || this.snaketiles[rows][cols + 1] == 2)) {
            this.theQ.push({ row: rows, col: cols + 1, isvisited: false, prevrow: rows, prevcol: cols });
            this.map.set((rows).toString() + "-" + (cols + 1).toString(), elementStr);
            // console.log(this.map.get(rows.toString+"-"+(cols+1).toString()))
        }
    }
    startSearch(event) {
        this.theQ.shift();
        this.theQ.push({ row: this.startrow, col: this.startcol, isvisited: true, prevrow: -1, prevcol: -1 });
        this.intervals = setInterval(() => {
            this.renders();
        }, 20);
        //console.log(this.theQ);
    }
    //mouseup event
    mouseupp(event) {
        //console.log('hello');
        let elementId = event.target.id;
        let row = parseInt(elementId[0]);
        let col = parseInt(elementId[2]);
        // console.log('here');
        if (this.val == 1) {
            //console.log('here');
            if (this.snaketiles[row][col] == 0) {
                this.snaketiles[this.prevrow][this.prevcolumn] = 0;
                this.snaketiles[row][col] = 1;
                this.startrow = row;
                this.startcol = col;
                document.getElementById(elementId).style.backgroundColor = "green";
                document.getElementById(this.transferElement).style.backgroundColor = "white";
            }
            this.pressed = false;
            this.val = 4;
        }
        else if (this.val == 2) {
            if (this.snaketiles[row][col] == 0) {
                this.snaketiles[this.prevrow][this.prevcolumn] = 0;
                this.snaketiles[row][col] = 2;
                this.destinationrow = row;
                this.destinationcol = col;
                document.getElementById(elementId).style.backgroundColor = "red";
                document.getElementById(this.transferElement).style.backgroundColor = "white";
            }
            this.pressed = false;
            this.val = 4;
        }
        // console.log('here');
        this.pressed = false;
        this.val = 4;
    }
    //mouse enter event
    mousecome(event) {
        //console.log('hello');
        // if(this.val==1||this.val==2)
        // {
        //   //do nothing
        //  // console.log('here');
        // }
        // else{
        let elementId = event.target.id;
        let row = parseInt(elementId[0]);
        let col = parseInt(elementId[2]);
        if ((this.val == 0 || this.val == 3) && this.pressed == true && (this.snaketiles[row][col] == 0 || this.snaketiles[row][col] == 3)) {
            this.snaketiles[row][col] = 3;
            document.getElementById(elementId).style.backgroundColor = "grey";
            //console.log('here');
        }
    }
    mouseleft(event) {
        // let elementId: string = (event.target as Element).id;
        // let row:number=parseInt(elementId[0]);
        // let col:number=parseInt(elementId[2]);
        // if(elementId!=this.start&&elementId!=this.destination&&this.snaketiles[row][col]!=3)
        // {
        //   let doc=document.getElementById(elementId);
        //   doc.style.backgroundColor="white";
        // }
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");




//import { BoardComponent } from './board/board.component';
let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"]
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\I533116\angular-projects\visualsearch\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map