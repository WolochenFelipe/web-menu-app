"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "app/api/presigned-url/route";
exports.ids = ["app/api/presigned-url/route"];
exports.modules = {

/***/ "@aws-sdk/client-s3":
/*!*************************************!*\
  !*** external "@aws-sdk/client-s3" ***!
  \*************************************/
/***/ ((module) => {

module.exports = require("@aws-sdk/client-s3");

/***/ }),

/***/ "next/dist/compiled/next-server/app-page.runtime.dev.js":
/*!*************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-page.runtime.dev.js" ***!
  \*************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-page.runtime.dev.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ }),

/***/ "buffer":
/*!*************************!*\
  !*** external "buffer" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("buffer");

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("crypto");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("http");

/***/ }),

/***/ "http2":
/*!************************!*\
  !*** external "http2" ***!
  \************************/
/***/ ((module) => {

module.exports = require("http2");

/***/ }),

/***/ "https":
/*!************************!*\
  !*** external "https" ***!
  \************************/
/***/ ((module) => {

module.exports = require("https");

/***/ }),

/***/ "os":
/*!*********************!*\
  !*** external "os" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("os");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("path");

/***/ }),

/***/ "stream":
/*!*************************!*\
  !*** external "stream" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("stream");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fpresigned-url%2Froute&page=%2Fapi%2Fpresigned-url%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fpresigned-url%2Froute.ts&appDir=C%3A%5CUsers%5Cfelip%5CDesktop%5CFaculdade%5CEstagio%20MT%5Cweb-menu%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Cfelip%5CDesktop%5CFaculdade%5CEstagio%20MT%5Cweb-menu&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=standalone&preferredRegion=&middlewareConfig=e30%3D!":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fpresigned-url%2Froute&page=%2Fapi%2Fpresigned-url%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fpresigned-url%2Froute.ts&appDir=C%3A%5CUsers%5Cfelip%5CDesktop%5CFaculdade%5CEstagio%20MT%5Cweb-menu%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Cfelip%5CDesktop%5CFaculdade%5CEstagio%20MT%5Cweb-menu&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=standalone&preferredRegion=&middlewareConfig=e30%3D! ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   originalPathname: () => (/* binding */ originalPathname),\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   requestAsyncStorage: () => (/* binding */ requestAsyncStorage),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/future/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/future/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(rsc)/./node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var C_Users_felip_Desktop_Faculdade_Estagio_MT_web_menu_app_api_presigned_url_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/api/presigned-url/route.ts */ \"(rsc)/./app/api/presigned-url/route.ts\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"standalone\"\nconst routeModule = new next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/presigned-url/route\",\n        pathname: \"/api/presigned-url\",\n        filename: \"route\",\n        bundlePath: \"app/api/presigned-url/route\"\n    },\n    resolvedPagePath: \"C:\\\\Users\\\\felip\\\\Desktop\\\\Faculdade\\\\Estagio MT\\\\web-menu\\\\app\\\\api\\\\presigned-url\\\\route.ts\",\n    nextConfigOutput,\n    userland: C_Users_felip_Desktop_Faculdade_Estagio_MT_web_menu_app_api_presigned_url_route_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { requestAsyncStorage, staticGenerationAsyncStorage, serverHooks } = routeModule;\nconst originalPathname = \"/api/presigned-url/route\";\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        serverHooks,\n        staticGenerationAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIuanM/bmFtZT1hcHAlMkZhcGklMkZwcmVzaWduZWQtdXJsJTJGcm91dGUmcGFnZT0lMkZhcGklMkZwcmVzaWduZWQtdXJsJTJGcm91dGUmYXBwUGF0aHM9JnBhZ2VQYXRoPXByaXZhdGUtbmV4dC1hcHAtZGlyJTJGYXBpJTJGcHJlc2lnbmVkLXVybCUyRnJvdXRlLnRzJmFwcERpcj1DJTNBJTVDVXNlcnMlNUNmZWxpcCU1Q0Rlc2t0b3AlNUNGYWN1bGRhZGUlNUNFc3RhZ2lvJTIwTVQlNUN3ZWItbWVudSU1Q2FwcCZwYWdlRXh0ZW5zaW9ucz10c3gmcGFnZUV4dGVuc2lvbnM9dHMmcGFnZUV4dGVuc2lvbnM9anN4JnBhZ2VFeHRlbnNpb25zPWpzJnJvb3REaXI9QyUzQSU1Q1VzZXJzJTVDZmVsaXAlNUNEZXNrdG9wJTVDRmFjdWxkYWRlJTVDRXN0YWdpbyUyME1UJTVDd2ViLW1lbnUmaXNEZXY9dHJ1ZSZ0c2NvbmZpZ1BhdGg9dHNjb25maWcuanNvbiZiYXNlUGF0aD0mYXNzZXRQcmVmaXg9Jm5leHRDb25maWdPdXRwdXQ9c3RhbmRhbG9uZSZwcmVmZXJyZWRSZWdpb249Jm1pZGRsZXdhcmVDb25maWc9ZTMwJTNEISIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBc0c7QUFDdkM7QUFDYztBQUM2QztBQUMxSDtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsZ0hBQW1CO0FBQzNDO0FBQ0EsY0FBYyx5RUFBUztBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsWUFBWTtBQUNaLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSxRQUFRLGlFQUFpRTtBQUN6RTtBQUNBO0FBQ0EsV0FBVyw0RUFBVztBQUN0QjtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ3VIOztBQUV2SCIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYi1tZW51Lz85M2I5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFwcFJvdXRlUm91dGVNb2R1bGUgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9mdXR1cmUvcm91dGUtbW9kdWxlcy9hcHAtcm91dGUvbW9kdWxlLmNvbXBpbGVkXCI7XG5pbXBvcnQgeyBSb3V0ZUtpbmQgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9mdXR1cmUvcm91dGUta2luZFwiO1xuaW1wb3J0IHsgcGF0Y2hGZXRjaCBhcyBfcGF0Y2hGZXRjaCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2xpYi9wYXRjaC1mZXRjaFwiO1xuaW1wb3J0ICogYXMgdXNlcmxhbmQgZnJvbSBcIkM6XFxcXFVzZXJzXFxcXGZlbGlwXFxcXERlc2t0b3BcXFxcRmFjdWxkYWRlXFxcXEVzdGFnaW8gTVRcXFxcd2ViLW1lbnVcXFxcYXBwXFxcXGFwaVxcXFxwcmVzaWduZWQtdXJsXFxcXHJvdXRlLnRzXCI7XG4vLyBXZSBpbmplY3QgdGhlIG5leHRDb25maWdPdXRwdXQgaGVyZSBzbyB0aGF0IHdlIGNhbiB1c2UgdGhlbSBpbiB0aGUgcm91dGVcbi8vIG1vZHVsZS5cbmNvbnN0IG5leHRDb25maWdPdXRwdXQgPSBcInN0YW5kYWxvbmVcIlxuY29uc3Qgcm91dGVNb2R1bGUgPSBuZXcgQXBwUm91dGVSb3V0ZU1vZHVsZSh7XG4gICAgZGVmaW5pdGlvbjoge1xuICAgICAgICBraW5kOiBSb3V0ZUtpbmQuQVBQX1JPVVRFLFxuICAgICAgICBwYWdlOiBcIi9hcGkvcHJlc2lnbmVkLXVybC9yb3V0ZVwiLFxuICAgICAgICBwYXRobmFtZTogXCIvYXBpL3ByZXNpZ25lZC11cmxcIixcbiAgICAgICAgZmlsZW5hbWU6IFwicm91dGVcIixcbiAgICAgICAgYnVuZGxlUGF0aDogXCJhcHAvYXBpL3ByZXNpZ25lZC11cmwvcm91dGVcIlxuICAgIH0sXG4gICAgcmVzb2x2ZWRQYWdlUGF0aDogXCJDOlxcXFxVc2Vyc1xcXFxmZWxpcFxcXFxEZXNrdG9wXFxcXEZhY3VsZGFkZVxcXFxFc3RhZ2lvIE1UXFxcXHdlYi1tZW51XFxcXGFwcFxcXFxhcGlcXFxccHJlc2lnbmVkLXVybFxcXFxyb3V0ZS50c1wiLFxuICAgIG5leHRDb25maWdPdXRwdXQsXG4gICAgdXNlcmxhbmRcbn0pO1xuLy8gUHVsbCBvdXQgdGhlIGV4cG9ydHMgdGhhdCB3ZSBuZWVkIHRvIGV4cG9zZSBmcm9tIHRoZSBtb2R1bGUuIFRoaXMgc2hvdWxkXG4vLyBiZSBlbGltaW5hdGVkIHdoZW4gd2UndmUgbW92ZWQgdGhlIG90aGVyIHJvdXRlcyB0byB0aGUgbmV3IGZvcm1hdC4gVGhlc2Vcbi8vIGFyZSB1c2VkIHRvIGhvb2sgaW50byB0aGUgcm91dGUuXG5jb25zdCB7IHJlcXVlc3RBc3luY1N0b3JhZ2UsIHN0YXRpY0dlbmVyYXRpb25Bc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzIH0gPSByb3V0ZU1vZHVsZTtcbmNvbnN0IG9yaWdpbmFsUGF0aG5hbWUgPSBcIi9hcGkvcHJlc2lnbmVkLXVybC9yb3V0ZVwiO1xuZnVuY3Rpb24gcGF0Y2hGZXRjaCgpIHtcbiAgICByZXR1cm4gX3BhdGNoRmV0Y2goe1xuICAgICAgICBzZXJ2ZXJIb29rcyxcbiAgICAgICAgc3RhdGljR2VuZXJhdGlvbkFzeW5jU3RvcmFnZVxuICAgIH0pO1xufVxuZXhwb3J0IHsgcm91dGVNb2R1bGUsIHJlcXVlc3RBc3luY1N0b3JhZ2UsIHN0YXRpY0dlbmVyYXRpb25Bc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzLCBvcmlnaW5hbFBhdGhuYW1lLCBwYXRjaEZldGNoLCAgfTtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YXBwLXJvdXRlLmpzLm1hcCJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fpresigned-url%2Froute&page=%2Fapi%2Fpresigned-url%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fpresigned-url%2Froute.ts&appDir=C%3A%5CUsers%5Cfelip%5CDesktop%5CFaculdade%5CEstagio%20MT%5Cweb-menu%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Cfelip%5CDesktop%5CFaculdade%5CEstagio%20MT%5Cweb-menu&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=standalone&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./app/api/presigned-url/route.ts":
/*!****************************************!*\
  !*** ./app/api/presigned-url/route.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   POST: () => (/* binding */ POST)\n/* harmony export */ });\n/* harmony import */ var _aws_sdk_client_s3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @aws-sdk/client-s3 */ \"@aws-sdk/client-s3\");\n/* harmony import */ var _aws_sdk_client_s3__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_aws_sdk_client_s3__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _aws_sdk_s3_request_presigner__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @aws-sdk/s3-request-presigner */ \"(rsc)/./node_modules/@aws-sdk/s3-request-presigner/dist-es/index.js\");\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/server */ \"(rsc)/./node_modules/next/dist/api/server.js\");\n\n\n\nconst accountId = process.env.CLOUDFLARE_ACCOUNT_ID;\nconst client = new _aws_sdk_client_s3__WEBPACK_IMPORTED_MODULE_0__.S3Client({\n    endpoint: `https://${accountId}.r2.cloudflarestorage.com`,\n    region: \"auto\",\n    credentials: {\n        accessKeyId: process.env.AWS_ACCESS_KEY_ID,\n        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY\n    }\n});\nasync function POST(request) {\n    const { key } = await request.json(); // key pode ser o nome da imagem\n    if (!key) {\n        return next_server__WEBPACK_IMPORTED_MODULE_2__.NextResponse.json({\n            error: \"File key is required.\"\n        }, {\n            status: 400\n        });\n    }\n    const signedUrl = await (0,_aws_sdk_s3_request_presigner__WEBPACK_IMPORTED_MODULE_1__.getSignedUrl)(client, new _aws_sdk_client_s3__WEBPACK_IMPORTED_MODULE_0__.PutObjectCommand({\n        Bucket: process.env.AWS_BUCKET_NAME,\n        Key: key\n    }), {\n        expiresIn: 60 // URL válida por 1 minuto\n    });\n    return next_server__WEBPACK_IMPORTED_MODULE_2__.NextResponse.json({\n        signedUrl\n    }, {\n        status: 200\n    });\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvYXBpL3ByZXNpZ25lZC11cmwvcm91dGUudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBZ0U7QUFDSDtBQUVMO0FBRXhELE1BQU1JLFlBQVlDLFFBQVFDLEdBQUcsQ0FBQ0MscUJBQXFCO0FBRW5ELE1BQU1DLFNBQVMsSUFBSVAsd0RBQVFBLENBQUM7SUFDeEJRLFVBQVUsQ0FBQyxRQUFRLEVBQUVMLFVBQVUseUJBQXlCLENBQUM7SUFDekRNLFFBQVE7SUFDUkMsYUFBYTtRQUNUQyxhQUFhUCxRQUFRQyxHQUFHLENBQUNPLGlCQUFpQjtRQUMxQ0MsaUJBQWlCVCxRQUFRQyxHQUFHLENBQUNTLHFCQUFxQjtJQUN0RDtBQUNKO0FBRU8sZUFBZUMsS0FBS0MsT0FBb0I7SUFDM0MsTUFBTSxFQUFFQyxHQUFHLEVBQUUsR0FBRyxNQUFNRCxRQUFRRSxJQUFJLElBQUksZ0NBQWdDO0lBRXRFLElBQUksQ0FBQ0QsS0FBSztRQUNOLE9BQU9mLHFEQUFZQSxDQUFDZ0IsSUFBSSxDQUFDO1lBQUVDLE9BQU87UUFBd0IsR0FBRztZQUFFQyxRQUFRO1FBQUk7SUFDL0U7SUFFQSxNQUFNQyxZQUFZLE1BQU1wQiwyRUFBWUEsQ0FBQ00sUUFBUSxJQUFJUixnRUFBZ0JBLENBQUM7UUFDOUR1QixRQUFRbEIsUUFBUUMsR0FBRyxDQUFDa0IsZUFBZTtRQUNuQ0MsS0FBS1A7SUFDVCxJQUFJO1FBQ0FRLFdBQVcsR0FBRywwQkFBMEI7SUFDNUM7SUFFQSxPQUFPdkIscURBQVlBLENBQUNnQixJQUFJLENBQUM7UUFBRUc7SUFBVSxHQUFHO1FBQUVELFFBQVE7SUFBSTtBQUMxRCIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYi1tZW51Ly4vYXBwL2FwaS9wcmVzaWduZWQtdXJsL3JvdXRlLnRzPzFjODEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUHV0T2JqZWN0Q29tbWFuZCwgUzNDbGllbnQgfSBmcm9tICdAYXdzLXNkay9jbGllbnQtczMnO1xyXG5pbXBvcnQgeyBnZXRTaWduZWRVcmwgfSBmcm9tICdAYXdzLXNkay9zMy1yZXF1ZXN0LXByZXNpZ25lcic7XHJcbmltcG9ydCB7IE5leHRBcGlSZXF1ZXN0LCBOZXh0QXBpUmVzcG9uc2UgfSBmcm9tICduZXh0JztcclxuaW1wb3J0IHsgTmV4dFJlcXVlc3QsIE5leHRSZXNwb25zZSB9IGZyb20gJ25leHQvc2VydmVyJztcclxuXHJcbmNvbnN0IGFjY291bnRJZCA9IHByb2Nlc3MuZW52LkNMT1VERkxBUkVfQUNDT1VOVF9JRFxyXG5cclxuY29uc3QgY2xpZW50ID0gbmV3IFMzQ2xpZW50KHtcclxuICAgIGVuZHBvaW50OiBgaHR0cHM6Ly8ke2FjY291bnRJZH0ucjIuY2xvdWRmbGFyZXN0b3JhZ2UuY29tYCxcclxuICAgIHJlZ2lvbjogJ2F1dG8nLFxyXG4gICAgY3JlZGVudGlhbHM6IHtcclxuICAgICAgICBhY2Nlc3NLZXlJZDogcHJvY2Vzcy5lbnYuQVdTX0FDQ0VTU19LRVlfSUQhLFxyXG4gICAgICAgIHNlY3JldEFjY2Vzc0tleTogcHJvY2Vzcy5lbnYuQVdTX1NFQ1JFVF9BQ0NFU1NfS0VZISxcclxuICAgIH1cclxufSlcclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBQT1NUKHJlcXVlc3Q6IE5leHRSZXF1ZXN0KSB7XHJcbiAgICBjb25zdCB7IGtleSB9ID0gYXdhaXQgcmVxdWVzdC5qc29uKCk7IC8vIGtleSBwb2RlIHNlciBvIG5vbWUgZGEgaW1hZ2VtXHJcblxyXG4gICAgaWYgKCFrZXkpIHtcclxuICAgICAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oeyBlcnJvcjogJ0ZpbGUga2V5IGlzIHJlcXVpcmVkLicgfSwgeyBzdGF0dXM6IDQwMCB9KVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHNpZ25lZFVybCA9IGF3YWl0IGdldFNpZ25lZFVybChjbGllbnQsIG5ldyBQdXRPYmplY3RDb21tYW5kKHtcclxuICAgICAgICBCdWNrZXQ6IHByb2Nlc3MuZW52LkFXU19CVUNLRVRfTkFNRSxcclxuICAgICAgICBLZXk6IGtleVxyXG4gICAgfSksIHtcclxuICAgICAgICBleHBpcmVzSW46IDYwIC8vIFVSTCB2w6FsaWRhIHBvciAxIG1pbnV0b1xyXG4gICAgfSlcclxuXHJcbiAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oeyBzaWduZWRVcmwgfSwgeyBzdGF0dXM6IDIwMCB9KVxyXG59Il0sIm5hbWVzIjpbIlB1dE9iamVjdENvbW1hbmQiLCJTM0NsaWVudCIsImdldFNpZ25lZFVybCIsIk5leHRSZXNwb25zZSIsImFjY291bnRJZCIsInByb2Nlc3MiLCJlbnYiLCJDTE9VREZMQVJFX0FDQ09VTlRfSUQiLCJjbGllbnQiLCJlbmRwb2ludCIsInJlZ2lvbiIsImNyZWRlbnRpYWxzIiwiYWNjZXNzS2V5SWQiLCJBV1NfQUNDRVNTX0tFWV9JRCIsInNlY3JldEFjY2Vzc0tleSIsIkFXU19TRUNSRVRfQUNDRVNTX0tFWSIsIlBPU1QiLCJyZXF1ZXN0Iiwia2V5IiwianNvbiIsImVycm9yIiwic3RhdHVzIiwic2lnbmVkVXJsIiwiQnVja2V0IiwiQVdTX0JVQ0tFVF9OQU1FIiwiS2V5IiwiZXhwaXJlc0luIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./app/api/presigned-url/route.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/@smithy","vendor-chunks/@aws-sdk"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fpresigned-url%2Froute&page=%2Fapi%2Fpresigned-url%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fpresigned-url%2Froute.ts&appDir=C%3A%5CUsers%5Cfelip%5CDesktop%5CFaculdade%5CEstagio%20MT%5Cweb-menu%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Cfelip%5CDesktop%5CFaculdade%5CEstagio%20MT%5Cweb-menu&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=standalone&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();