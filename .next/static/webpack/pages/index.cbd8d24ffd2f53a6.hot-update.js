"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/tag.js":
/*!***************************!*\
  !*** ./components/tag.js ***!
  \***************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _tag_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tag.module.css */ \"./components/tag.module.css\");\n/* harmony import */ var _tag_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_tag_module_css__WEBPACK_IMPORTED_MODULE_1__);\n\n\nfunction Tag(props) {\n    var backColor = props.backColor, text = props.text;\n    console.log(props);\n    if (isIcon) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n            className: (_tag_module_css__WEBPACK_IMPORTED_MODULE_1___default().tag),\n            style: {\n                backgroundColor: backColor\n            },\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                    width: \"16\",\n                    height: \"16\",\n                    viewBox: \"0 0 16 17\",\n                    fill: \"none\",\n                    xmlns: \"http://www.w3.org/2000/svg\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                        d: \"M3 10.875L9.62357 3L8.84833 9.125H14L6.67976 17L8.15167 10.875H3Z\",\n                        fill: \"#A273FE\"\n                    }, void 0, false, {\n                        fileName: \"/Users/deniskopylov/Documents/dev/kplv 3.0/components/tag.js\",\n                        lineNumber: 17,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/deniskopylov/Documents/dev/kplv 3.0/components/tag.js\",\n                    lineNumber: 10,\n                    columnNumber: 9\n                }, this),\n                text\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/deniskopylov/Documents/dev/kplv 3.0/components/tag.js\",\n            lineNumber: 9,\n            columnNumber: 7\n        }, this);\n    }\n}\n_c = Tag;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Tag);\nvar _c;\n$RefreshReg$(_c, \"Tag\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL3RhZy5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQXVDO0FBRXZDLFNBQVNDLEdBQUcsQ0FBQ0MsS0FBSyxFQUFFO0lBQ2xCLElBQVFDLFNBQVMsR0FBV0QsS0FBSyxDQUF6QkMsU0FBUyxFQUFFQyxJQUFJLEdBQUtGLEtBQUssQ0FBZEUsSUFBSTtJQUN2QkMsT0FBTyxDQUFDQyxHQUFHLENBQUNKLEtBQUssQ0FBQyxDQUFDO0lBRW5CLElBQUlLLE1BQU0sRUFBRTtRQUNWLHFCQUNFLDhEQUFDQyxNQUFJO1lBQUNDLFNBQVMsRUFBRVQsNERBQVc7WUFBRVcsS0FBSyxFQUFFO2dCQUFFQyxlQUFlLEVBQUVULFNBQVM7YUFBRTs7OEJBQ2pFLDhEQUFDVSxLQUFHO29CQUNGQyxLQUFLLEVBQUMsSUFBSTtvQkFDVkMsTUFBTSxFQUFDLElBQUk7b0JBQ1hDLE9BQU8sRUFBQyxXQUFXO29CQUNuQkMsSUFBSSxFQUFDLE1BQU07b0JBQ1hDLEtBQUssRUFBQyw0QkFBNEI7OEJBRWxDLDRFQUFDQyxNQUFJO3dCQUNIQyxDQUFDLEVBQUMsbUVBQW1FO3dCQUNyRUgsSUFBSSxFQUFDLFNBQVM7Ozs7OzRCQUNkOzs7Ozt3QkFDRTtnQkFFTGIsSUFBSTs7Ozs7O2dCQUNBLENBQ1A7S0FDSDtDQUNGO0FBeEJRSCxLQUFBQSxHQUFHO0FBMEJaLCtEQUFlQSxHQUFHLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy90YWcuanM/OWFjZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY2xhc3NlcyBmcm9tICcuL3RhZy5tb2R1bGUuY3NzJztcblxuZnVuY3Rpb24gVGFnKHByb3BzKSB7XG4gIGNvbnN0IHsgYmFja0NvbG9yLCB0ZXh0IH0gPSBwcm9wcztcbiAgY29uc29sZS5sb2cocHJvcHMpO1xuXG4gIGlmIChpc0ljb24pIHtcbiAgICByZXR1cm4gKFxuICAgICAgPHNwYW4gY2xhc3NOYW1lPXtjbGFzc2VzLnRhZ30gc3R5bGU9e3sgYmFja2dyb3VuZENvbG9yOiBiYWNrQ29sb3IgfX0+XG4gICAgICAgIDxzdmdcbiAgICAgICAgICB3aWR0aD0nMTYnXG4gICAgICAgICAgaGVpZ2h0PScxNidcbiAgICAgICAgICB2aWV3Qm94PScwIDAgMTYgMTcnXG4gICAgICAgICAgZmlsbD0nbm9uZSdcbiAgICAgICAgICB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnXG4gICAgICAgID5cbiAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgZD0nTTMgMTAuODc1TDkuNjIzNTcgM0w4Ljg0ODMzIDkuMTI1SDE0TDYuNjc5NzYgMTdMOC4xNTE2NyAxMC44NzVIM1onXG4gICAgICAgICAgICBmaWxsPScjQTI3M0ZFJ1xuICAgICAgICAgIC8+XG4gICAgICAgIDwvc3ZnPlxuXG4gICAgICAgIHt0ZXh0fVxuICAgICAgPC9zcGFuPlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgVGFnO1xuIl0sIm5hbWVzIjpbImNsYXNzZXMiLCJUYWciLCJwcm9wcyIsImJhY2tDb2xvciIsInRleHQiLCJjb25zb2xlIiwibG9nIiwiaXNJY29uIiwic3BhbiIsImNsYXNzTmFtZSIsInRhZyIsInN0eWxlIiwiYmFja2dyb3VuZENvbG9yIiwic3ZnIiwid2lkdGgiLCJoZWlnaHQiLCJ2aWV3Qm94IiwiZmlsbCIsInhtbG5zIiwicGF0aCIsImQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/tag.js\n");

/***/ })

});