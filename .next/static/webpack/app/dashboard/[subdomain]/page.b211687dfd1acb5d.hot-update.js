"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/dashboard/[subdomain]/page",{

/***/ "(app-pages-browser)/./app/components/product-box.tsx":
/*!****************************************!*\
  !*** ./app/components/product-box.tsx ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ ProductBox; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/dialog */ \"(app-pages-browser)/./app/components/dialog.tsx\");\n/* harmony import */ var _product_show_product__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./product/show-product */ \"(app-pages-browser)/./app/components/product/show-product.tsx\");\n// ./components/product-box.tsx\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nfunction ProductBox(param) {\n    let { tenant } = param;\n    _s();\n    const [categories, setCategories] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [selectedProductId, setSelectedProductId] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [open, setOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (!tenant) {\n            console.error(\"Tenant is undefined or empty\");\n            return;\n        }\n        const fetchCategories = async ()=>{\n            try {\n                const resp = await fetch(\"/api/product/product-box/\".concat(tenant));\n                const data = await resp.json();\n                if (data.categories) {\n                    setCategories(data.categories);\n                } else {\n                    console.error(\"No categories found or error occurred:\", data.error);\n                }\n            } catch (error) {\n                console.error(\"Error fetching categories:\", error);\n                setCategories([]);\n            }\n        };\n        fetchCategories();\n    }, [\n        tenant\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"grid grid-cols-4 gap-4\",\n        children: categories.length === 0 ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n            children: \"No categories available\"\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\felip\\\\Desktop\\\\Faculdade\\\\Estagio MT\\\\web-menu\\\\app\\\\components\\\\product-box.tsx\",\n            lineNumber: 46,\n            columnNumber: 17\n        }, this) : categories.map((product)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_dialog__WEBPACK_IMPORTED_MODULE_2__.Dialog, {\n                open: open,\n                setOpen: setOpen,\n                trigger: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    onClick: ()=>setSelectedProductId(product.id),\n                    className: \"bg-gray-300 p-4 rounded-lg shadow-md text-center cursor-pointer\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"h-16 w-16 mx-auto bg-white rounded-full mb-4\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\felip\\\\Desktop\\\\Faculdade\\\\Estagio MT\\\\web-menu\\\\app\\\\components\\\\product-box.tsx\",\n                            lineNumber: 58,\n                            columnNumber: 33\n                        }, void 0),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"font-medium\",\n                            children: product.description\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\felip\\\\Desktop\\\\Faculdade\\\\Estagio MT\\\\web-menu\\\\app\\\\components\\\\product-box.tsx\",\n                            lineNumber: 59,\n                            columnNumber: 33\n                        }, void 0),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"text-gray-600\",\n                            children: product.name\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\felip\\\\Desktop\\\\Faculdade\\\\Estagio MT\\\\web-menu\\\\app\\\\components\\\\product-box.tsx\",\n                            lineNumber: 60,\n                            columnNumber: 33\n                        }, void 0)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\felip\\\\Desktop\\\\Faculdade\\\\Estagio MT\\\\web-menu\\\\app\\\\components\\\\product-box.tsx\",\n                    lineNumber: 54,\n                    columnNumber: 29\n                }, void 0),\n                open: selectedProductId === product.id,\n                children: selectedProductId === product.id && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_product_show_product__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                    tenantId: tenant,\n                    productId: selectedProductId\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\felip\\\\Desktop\\\\Faculdade\\\\Estagio MT\\\\web-menu\\\\app\\\\components\\\\product-box.tsx\",\n                    lineNumber: 66,\n                    columnNumber: 29\n                }, this)\n            }, product.id, false, {\n                fileName: \"C:\\\\Users\\\\felip\\\\Desktop\\\\Faculdade\\\\Estagio MT\\\\web-menu\\\\app\\\\components\\\\product-box.tsx\",\n                lineNumber: 49,\n                columnNumber: 21\n            }, this))\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\felip\\\\Desktop\\\\Faculdade\\\\Estagio MT\\\\web-menu\\\\app\\\\components\\\\product-box.tsx\",\n        lineNumber: 44,\n        columnNumber: 9\n    }, this);\n}\n_s(ProductBox, \"TrnWyNpiVHsWmC3WNPo/5dV+iqo=\");\n_c = ProductBox;\nvar _c;\n$RefreshReg$(_c, \"ProductBox\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9jb21wb25lbnRzL3Byb2R1Y3QtYm94LnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSwrQkFBK0I7OztBQUVhO0FBQ0U7QUFDRztBQVFsQyxTQUFTSSxXQUFXLEtBQThCO1FBQTlCLEVBQUVDLE1BQU0sRUFBc0IsR0FBOUI7O0lBQy9CLE1BQU0sQ0FBQ0MsWUFBWUMsY0FBYyxHQUFHUCwrQ0FBUUEsQ0FBWSxFQUFFO0lBQzFELE1BQU0sQ0FBQ1EsbUJBQW1CQyxxQkFBcUIsR0FBR1QsK0NBQVFBLENBQWdCO0lBQzFFLE1BQU0sQ0FBQ1UsTUFBTUMsUUFBUSxHQUFHWCwrQ0FBUUEsQ0FBQztJQUVqQ0MsZ0RBQVNBLENBQUM7UUFDTixJQUFJLENBQUNJLFFBQVE7WUFDVE8sUUFBUUMsS0FBSyxDQUFDO1lBQ2Q7UUFDSjtRQUVBLE1BQU1DLGtCQUFrQjtZQUNwQixJQUFJO2dCQUNBLE1BQU1DLE9BQU8sTUFBTUMsTUFBTSw0QkFBbUMsT0FBUFg7Z0JBQ3JELE1BQU1ZLE9BQU8sTUFBTUYsS0FBS0csSUFBSTtnQkFFNUIsSUFBSUQsS0FBS1gsVUFBVSxFQUFFO29CQUNqQkMsY0FBY1UsS0FBS1gsVUFBVTtnQkFDakMsT0FBTztvQkFDSE0sUUFBUUMsS0FBSyxDQUFDLDBDQUEwQ0ksS0FBS0osS0FBSztnQkFDdEU7WUFDSixFQUFFLE9BQU9BLE9BQU87Z0JBQ1pELFFBQVFDLEtBQUssQ0FBQyw4QkFBOEJBO2dCQUM1Q04sY0FBYyxFQUFFO1lBQ3BCO1FBQ0o7UUFFQU87SUFDSixHQUFHO1FBQUNUO0tBQU87SUFFWCxxQkFDSSw4REFBQ2M7UUFBSUMsV0FBVTtrQkFDVmQsV0FBV2UsTUFBTSxLQUFLLGtCQUNuQiw4REFBQ0M7c0JBQUU7Ozs7O21CQUVIaEIsV0FBV2lCLEdBQUcsQ0FBQyxDQUFDQyx3QkFDWiw4REFBQ3RCLHNEQUFNQTtnQkFDSFEsTUFBTUE7Z0JBQ05DLFNBQVNBO2dCQUVUYyx1QkFDSSw4REFBQ047b0JBQ0dPLFNBQVMsSUFBTWpCLHFCQUFxQmUsUUFBUUcsRUFBRTtvQkFDOUNQLFdBQVU7O3NDQUVWLDhEQUFDRDs0QkFBSUMsV0FBVTs7Ozs7O3NDQUNmLDhEQUFDRTs0QkFBRUYsV0FBVTtzQ0FBZUksUUFBUUksV0FBVzs7Ozs7O3NDQUMvQyw4REFBQ047NEJBQUVGLFdBQVU7c0NBQWlCSSxRQUFRSyxJQUFJOzs7Ozs7Ozs7Ozs7Z0JBR2xEbkIsTUFBTUYsc0JBQXNCZ0IsUUFBUUcsRUFBRTswQkFFckNuQixzQkFBc0JnQixRQUFRRyxFQUFFLGtCQUM3Qiw4REFBQ3hCLDZEQUFXQTtvQkFBQzJCLFVBQVV6QjtvQkFBUTBCLFdBQVd2Qjs7Ozs7O2VBZHpDZ0IsUUFBUUcsRUFBRTs7Ozs7Ozs7OztBQXFCdkM7R0E1RHdCdkI7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL2NvbXBvbmVudHMvcHJvZHVjdC1ib3gudHN4PzFmNzIiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gLi9jb21wb25lbnRzL3Byb2R1Y3QtYm94LnRzeFxyXG5cInVzZSBjbGllbnRcIjtcclxuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgRGlhbG9nIH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvZGlhbG9nXCI7XHJcbmltcG9ydCBTaG93UHJvZHVjdCBmcm9tIFwiLi9wcm9kdWN0L3Nob3ctcHJvZHVjdFwiO1xyXG5cclxudHlwZSBQcm9kdWN0ID0ge1xyXG4gICAgaWQ6IHN0cmluZztcclxuICAgIG5hbWU6IHN0cmluZztcclxuICAgIGRlc2NyaXB0aW9uOiBzdHJpbmc7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQcm9kdWN0Qm94KHsgdGVuYW50IH06IHsgdGVuYW50OiBzdHJpbmcgfSkge1xyXG4gICAgY29uc3QgW2NhdGVnb3JpZXMsIHNldENhdGVnb3JpZXNdID0gdXNlU3RhdGU8UHJvZHVjdFtdPihbXSk7XHJcbiAgICBjb25zdCBbc2VsZWN0ZWRQcm9kdWN0SWQsIHNldFNlbGVjdGVkUHJvZHVjdElkXSA9IHVzZVN0YXRlPHN0cmluZyB8IG51bGw+KG51bGwpO1xyXG4gICAgY29uc3QgW29wZW4sIHNldE9wZW5dID0gdXNlU3RhdGUoZmFsc2UpXHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBpZiAoIXRlbmFudCkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiVGVuYW50IGlzIHVuZGVmaW5lZCBvciBlbXB0eVwiKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgZmV0Y2hDYXRlZ29yaWVzID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcmVzcCA9IGF3YWl0IGZldGNoKGAvYXBpL3Byb2R1Y3QvcHJvZHVjdC1ib3gvJHt0ZW5hbnR9YCk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcC5qc29uKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKGRhdGEuY2F0ZWdvcmllcykge1xyXG4gICAgICAgICAgICAgICAgICAgIHNldENhdGVnb3JpZXMoZGF0YS5jYXRlZ29yaWVzKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcignTm8gY2F0ZWdvcmllcyBmb3VuZCBvciBlcnJvciBvY2N1cnJlZDonLCBkYXRhLmVycm9yKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGZldGNoaW5nIGNhdGVnb3JpZXM6JywgZXJyb3IpO1xyXG4gICAgICAgICAgICAgICAgc2V0Q2F0ZWdvcmllcyhbXSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBmZXRjaENhdGVnb3JpZXMoKTtcclxuICAgIH0sIFt0ZW5hbnRdKTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBncmlkLWNvbHMtNCBnYXAtNFwiPlxyXG4gICAgICAgICAgICB7Y2F0ZWdvcmllcy5sZW5ndGggPT09IDAgPyAoXHJcbiAgICAgICAgICAgICAgICA8cD5ObyBjYXRlZ29yaWVzIGF2YWlsYWJsZTwvcD5cclxuICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgIGNhdGVnb3JpZXMubWFwKChwcm9kdWN0KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPERpYWxvZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBvcGVuPXtvcGVufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRPcGVuPXtzZXRPcGVufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBrZXk9e3Byb2R1Y3QuaWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyaWdnZXI9e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldFNlbGVjdGVkUHJvZHVjdElkKHByb2R1Y3QuaWQpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJnLWdyYXktMzAwIHAtNCByb3VuZGVkLWxnIHNoYWRvdy1tZCB0ZXh0LWNlbnRlciBjdXJzb3ItcG9pbnRlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoLTE2IHctMTYgbXgtYXV0byBiZy13aGl0ZSByb3VuZGVkLWZ1bGwgbWItNFwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImZvbnQtbWVkaXVtXCI+e3Byb2R1Y3QuZGVzY3JpcHRpb259PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtZ3JheS02MDBcIj57cHJvZHVjdC5uYW1lfTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9wZW49e3NlbGVjdGVkUHJvZHVjdElkID09PSBwcm9kdWN0LmlkfVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAge3NlbGVjdGVkUHJvZHVjdElkID09PSBwcm9kdWN0LmlkICYmIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTaG93UHJvZHVjdCB0ZW5hbnRJZD17dGVuYW50fSBwcm9kdWN0SWQ9e3NlbGVjdGVkUHJvZHVjdElkfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvRGlhbG9nPlxyXG4gICAgICAgICAgICAgICAgKSlcclxuICAgICAgICAgICAgKX1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn1cclxuXHJcblxyXG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJEaWFsb2ciLCJTaG93UHJvZHVjdCIsIlByb2R1Y3RCb3giLCJ0ZW5hbnQiLCJjYXRlZ29yaWVzIiwic2V0Q2F0ZWdvcmllcyIsInNlbGVjdGVkUHJvZHVjdElkIiwic2V0U2VsZWN0ZWRQcm9kdWN0SWQiLCJvcGVuIiwic2V0T3BlbiIsImNvbnNvbGUiLCJlcnJvciIsImZldGNoQ2F0ZWdvcmllcyIsInJlc3AiLCJmZXRjaCIsImRhdGEiLCJqc29uIiwiZGl2IiwiY2xhc3NOYW1lIiwibGVuZ3RoIiwicCIsIm1hcCIsInByb2R1Y3QiLCJ0cmlnZ2VyIiwib25DbGljayIsImlkIiwiZGVzY3JpcHRpb24iLCJuYW1lIiwidGVuYW50SWQiLCJwcm9kdWN0SWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/components/product-box.tsx\n"));

/***/ })

});