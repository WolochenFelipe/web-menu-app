"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/@kinde";
exports.ids = ["vendor-chunks/@kinde"];
exports.modules = {

/***/ "(ssr)/./node_modules/@kinde/jwt-decoder/dist/jwt-decoder.js":
/*!*************************************************************!*\
  !*** ./node_modules/@kinde/jwt-decoder/dist/jwt-decoder.js ***!
  \*************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   TokenPart: () => (/* binding */ s),\n/* harmony export */   jwtDecoder: () => (/* binding */ c)\n/* harmony export */ });\nvar s = /* @__PURE__ */ ((e) => (e[e.header = 0] = \"header\", e[e.body = 1] = \"body\", e))(s || {});\nfunction c(e, t) {\n  if (!e)\n    return null;\n  const r = e.split(\".\");\n  if (r.length !== 3)\n    return null;\n  const n = r[\n    t ?? 1\n    /* body */\n  ].replace(/-/g, \"+\").replace(/_/g, \"/\"), o = decodeURIComponent(\n    atob(n).split(\"\").map((l) => \"%\" + (\"00\" + l.charCodeAt(0).toString(16)).slice(-2)).join(\"\")\n  );\n  return JSON.parse(o);\n}\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvQGtpbmRlL2p3dC1kZWNvZGVyL2Rpc3Qvand0LWRlY29kZXIuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxnR0FBZ0c7QUFDaEc7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2ViLW1lbnUvLi9ub2RlX21vZHVsZXMvQGtpbmRlL2p3dC1kZWNvZGVyL2Rpc3Qvand0LWRlY29kZXIuanM/OGJjZCJdLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgcyA9IC8qIEBfX1BVUkVfXyAqLyAoKGUpID0+IChlW2UuaGVhZGVyID0gMF0gPSBcImhlYWRlclwiLCBlW2UuYm9keSA9IDFdID0gXCJib2R5XCIsIGUpKShzIHx8IHt9KTtcbmZ1bmN0aW9uIGMoZSwgdCkge1xuICBpZiAoIWUpXG4gICAgcmV0dXJuIG51bGw7XG4gIGNvbnN0IHIgPSBlLnNwbGl0KFwiLlwiKTtcbiAgaWYgKHIubGVuZ3RoICE9PSAzKVxuICAgIHJldHVybiBudWxsO1xuICBjb25zdCBuID0gcltcbiAgICB0ID8/IDFcbiAgICAvKiBib2R5ICovXG4gIF0ucmVwbGFjZSgvLS9nLCBcIitcIikucmVwbGFjZSgvXy9nLCBcIi9cIiksIG8gPSBkZWNvZGVVUklDb21wb25lbnQoXG4gICAgYXRvYihuKS5zcGxpdChcIlwiKS5tYXAoKGwpID0+IFwiJVwiICsgKFwiMDBcIiArIGwuY2hhckNvZGVBdCgwKS50b1N0cmluZygxNikpLnNsaWNlKC0yKSkuam9pbihcIlwiKVxuICApO1xuICByZXR1cm4gSlNPTi5wYXJzZShvKTtcbn1cbmV4cG9ydCB7XG4gIHMgYXMgVG9rZW5QYXJ0LFxuICBjIGFzIGp3dERlY29kZXJcbn07XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/@kinde/jwt-decoder/dist/jwt-decoder.js\n");

/***/ })

};
;