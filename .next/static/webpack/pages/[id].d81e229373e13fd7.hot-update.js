"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/[id]",{

/***/ "./pages/[id].js":
/*!***********************!*\
  !*** ./pages/[id].js ***!
  \***********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSG\": function() { return /* binding */ __N_SSG; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_projectImage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/projectImage */ \"./components/projectImage.js\");\n/* harmony import */ var _components_project__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/project */ \"./components/project.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.mjs\");\n/* harmony import */ var _components_projectVideo__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/projectVideo */ \"./components/projectVideo.js\");\n/* harmony import */ var _components_pageLoader__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/pageLoader */ \"./components/pageLoader.js\");\n\n\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nfunction ProjectPage(props) {\n    var _this = this;\n    var findNextProject = function findNextProject() {\n        if (projectId === \"arrival\") {\n            return 1;\n        } else if (projectId === \"sber\") {\n            return 2;\n        } else {\n            return 0;\n        }\n    };\n    _s();\n    var blocks = props.blocks, projects = props.projects;\n    var projectId = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)().query.id;\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    var currentProject = projects.find(function(obj) {\n        return obj.id === projectId;\n    });\n    var nextProjectNumber = findNextProject();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_8__.motion.div, {\n        initial: {\n            opacity: 0\n        },\n        animate: {\n            opacity: 1\n        },\n        exit: {\n            opacity: 0\n        },\n        children: [\n            blocks.map(function(block) {\n                var _this1 = _this;\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                    children: block.content.map(function(contentItem) {\n                        if (contentItem.type === \"text\") {\n                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: contentItem.data\n                            }, void 0, false, {\n                                fileName: \"/Users/deniskopylov/Documents/dev/kplv 3.0/pages/[id].js\",\n                                lineNumber: 44,\n                                columnNumber: 24\n                            }, _this1);\n                        }\n                        if (contentItem.type === \"header\") {\n                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                className: \"sectionHeader\",\n                                children: contentItem.data\n                            }, void 0, false, {\n                                fileName: \"/Users/deniskopylov/Documents/dev/kplv 3.0/pages/[id].js\",\n                                lineNumber: 48,\n                                columnNumber: 24\n                            }, _this1);\n                        }\n                        if (contentItem.type === \"image\") {\n                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_projectImage__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                src: contentItem.src,\n                                caption: contentItem.caption\n                            }, void 0, false, {\n                                fileName: \"/Users/deniskopylov/Documents/dev/kplv 3.0/pages/[id].js\",\n                                lineNumber: 53,\n                                columnNumber: 19\n                            }, _this1);\n                        }\n                        if (contentItem.type === \"video\") {\n                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_projectVideo__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                                src: contentItem.src,\n                                caption: contentItem.caption\n                            }, void 0, false, {\n                                fileName: \"/Users/deniskopylov/Documents/dev/kplv 3.0/pages/[id].js\",\n                                lineNumber: 62,\n                                columnNumber: 19\n                            }, _this1);\n                        }\n                    })\n                }, block.id, false, {\n                    fileName: \"/Users/deniskopylov/Documents/dev/kplv 3.0/pages/[id].js\",\n                    lineNumber: 41,\n                    columnNumber: 11\n                }, _this);\n            }),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                className: \"sectionHeader\",\n                children: \"Next project\"\n            }, void 0, false, {\n                fileName: \"/Users/deniskopylov/Documents/dev/kplv 3.0/pages/[id].js\",\n                lineNumber: 72,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_project__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                name: projects[nextProjectNumber].name,\n                description: projects[nextProjectNumber].description,\n                image: projects[nextProjectNumber].image,\n                id: projects[nextProjectNumber].id,\n                projectTags: projects[nextProjectNumber].projectTags\n            }, projects[nextProjectNumber].id, false, {\n                fileName: \"/Users/deniskopylov/Documents/dev/kplv 3.0/pages/[id].js\",\n                lineNumber: 74,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_5___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: currentProject.name + \" \\u2014 Denis Kopylov\"\n                    }, void 0, false, {\n                        fileName: \"/Users/deniskopylov/Documents/dev/kplv 3.0/pages/[id].js\",\n                        lineNumber: 83,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"description\",\n                        content: currentProject.description\n                    }, void 0, false, {\n                        fileName: \"/Users/deniskopylov/Documents/dev/kplv 3.0/pages/[id].js\",\n                        lineNumber: 84,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"icon\",\n                        href: \"/favicon.ico\"\n                    }, void 0, false, {\n                        fileName: \"/Users/deniskopylov/Documents/dev/kplv 3.0/pages/[id].js\",\n                        lineNumber: 85,\n                        columnNumber: 9\n                    }, this),\n                    \"``\"\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/deniskopylov/Documents/dev/kplv 3.0/pages/[id].js\",\n                lineNumber: 82,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/deniskopylov/Documents/dev/kplv 3.0/pages/[id].js\",\n        lineNumber: 34,\n        columnNumber: 5\n    }, this);\n}\n_s(ProjectPage, \"NOzcgyhwm8DDBgPCd0C0NM2zWBA=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter,\n        next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter\n    ];\n});\n_c = ProjectPage;\nvar __N_SSG = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ProjectPage);\nvar _c;\n$RefreshReg$(_c, \"ProjectPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9baWRdLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFBd0M7QUFDUDtBQUNxQjtBQUdWO0FBQ2Y7QUFDMkI7QUFDRjtBQUNKOztBQUVsRCxTQUFTUyxXQUFXLENBQUNDLEtBQUssRUFBRTs7UUFTakJDLGVBQWUsR0FBeEIsU0FBU0EsZUFBZSxHQUFHO1FBQ3pCLElBQUlDLFNBQVMsS0FBSyxTQUFTLEVBQUU7WUFDM0IsT0FBTyxDQUFDLENBQUM7U0FDVixNQUFNLElBQUlBLFNBQVMsS0FBSyxNQUFNLEVBQUU7WUFDL0IsT0FBTyxDQUFDLENBQUM7U0FDVixNQUFNO1lBQ0wsT0FBTyxDQUFDLENBQUM7U0FDVjtLQUNGOztJQWhCRCxJQUFRQyxNQUFNLEdBQWVILEtBQUssQ0FBMUJHLE1BQU0sRUFBRUMsUUFBUSxHQUFLSixLQUFLLENBQWxCSSxRQUFRO0lBQ3hCLElBQU1GLFNBQVMsR0FBR1osc0RBQVMsRUFBRSxDQUFDZSxLQUFLLENBQUNDLEVBQUU7SUFDdEMsSUFBTUMsTUFBTSxHQUFHakIsc0RBQVMsRUFBRTtJQUUxQixJQUFJa0IsY0FBYyxHQUFHSixRQUFRLENBQUNLLElBQUksQ0FBQyxTQUFDQyxHQUFHLEVBQUs7UUFDMUMsT0FBT0EsR0FBRyxDQUFDSixFQUFFLEtBQUtKLFNBQVMsQ0FBQztLQUM3QixDQUFDO0lBWUYsSUFBTVMsaUJBQWlCLEdBQUdWLGVBQWUsRUFBRTtJQUUzQyxxQkFDRSw4REFBQ04scURBQVU7UUFDVGtCLE9BQU8sRUFBRTtZQUFFQyxPQUFPLEVBQUUsQ0FBQztTQUFFO1FBQ3ZCQyxPQUFPLEVBQUU7WUFBRUQsT0FBTyxFQUFFLENBQUM7U0FBRTtRQUN2QkUsSUFBSSxFQUFFO1lBQUVGLE9BQU8sRUFBRSxDQUFDO1NBQUU7O1lBRW5CWCxNQUFNLENBQUNjLEdBQUcsQ0FBQyxTQUFDQyxLQUFLLEVBQUs7O2dCQUNyQixxQkFDRSw4REFBQ0MsU0FBTzs4QkFDTEQsS0FBSyxDQUFDRSxPQUFPLENBQUNILEdBQUcsQ0FBQyxTQUFDSSxXQUFXLEVBQUs7d0JBQ2xDLElBQUlBLFdBQVcsQ0FBQ0MsSUFBSSxLQUFLLE1BQU0sRUFBRTs0QkFDL0IscUJBQU8sOERBQUNDLEdBQUM7MENBQUVGLFdBQVcsQ0FBQ0csSUFBSTs7Ozs7c0NBQUssQ0FBQzt5QkFDbEM7d0JBRUQsSUFBSUgsV0FBVyxDQUFDQyxJQUFJLEtBQUssUUFBUSxFQUFFOzRCQUNqQyxxQkFBTyw4REFBQ0csSUFBRTtnQ0FBQ0MsU0FBUyxFQUFDLGVBQWU7MENBQUVMLFdBQVcsQ0FBQ0csSUFBSTs7Ozs7c0NBQU0sQ0FBQzt5QkFDOUQ7d0JBRUQsSUFBSUgsV0FBVyxDQUFDQyxJQUFJLEtBQUssT0FBTyxFQUFFOzRCQUNoQyxxQkFDRSw4REFBQzlCLGdFQUFZO2dDQUNYbUMsR0FBRyxFQUFFTixXQUFXLENBQUNNLEdBQUc7Z0NBQ3BCQyxPQUFPLEVBQUVQLFdBQVcsQ0FBQ08sT0FBTzs7Ozs7c0NBQzVCLENBQ0Y7eUJBQ0g7d0JBRUQsSUFBSVAsV0FBVyxDQUFDQyxJQUFJLEtBQUssT0FBTyxFQUFFOzRCQUNoQyxxQkFDRSw4REFBQ3pCLGdFQUFZO2dDQUNYOEIsR0FBRyxFQUFFTixXQUFXLENBQUNNLEdBQUc7Z0NBQ3BCQyxPQUFPLEVBQUVQLFdBQVcsQ0FBQ08sT0FBTzs7Ozs7c0NBQzVCLENBQ0Y7eUJBQ0g7cUJBQ0YsQ0FBQzttQkEzQlVWLEtBQUssQ0FBQ1osRUFBRTs7Ozt5QkE0QlosQ0FDVjthQUNILENBQUM7MEJBQ0YsOERBQUNtQixJQUFFO2dCQUFDQyxTQUFTLEVBQUMsZUFBZTswQkFBQyxjQUFZOzs7OztvQkFBSzswQkFFL0MsOERBQUNqQywyREFBTztnQkFDTm9DLElBQUksRUFBRXpCLFFBQVEsQ0FBQ08saUJBQWlCLENBQUMsQ0FBQ2tCLElBQUk7Z0JBQ3RDQyxXQUFXLEVBQUUxQixRQUFRLENBQUNPLGlCQUFpQixDQUFDLENBQUNtQixXQUFXO2dCQUVwREMsS0FBSyxFQUFFM0IsUUFBUSxDQUFDTyxpQkFBaUIsQ0FBQyxDQUFDb0IsS0FBSztnQkFDeEN6QixFQUFFLEVBQUVGLFFBQVEsQ0FBQ08saUJBQWlCLENBQUMsQ0FBQ0wsRUFBRTtnQkFDbEMwQixXQUFXLEVBQUU1QixRQUFRLENBQUNPLGlCQUFpQixDQUFDLENBQUNxQixXQUFXO2VBSC9DNUIsUUFBUSxDQUFDTyxpQkFBaUIsQ0FBQyxDQUFDTCxFQUFFOzs7O29CQUluQzswQkFDRiw4REFBQ1osa0RBQUk7O2tDQUNILDhEQUFDdUMsT0FBSztrQ0FBRXpCLGNBQWMsQ0FBQ3FCLElBQUksR0FBRyx1QkFBa0I7Ozs7OzRCQUFTO2tDQUN6RCw4REFBQ0ssTUFBSTt3QkFBQ0wsSUFBSSxFQUFDLGFBQWE7d0JBQUNULE9BQU8sRUFBRVosY0FBYyxDQUFDc0IsV0FBVzs7Ozs7NEJBQUk7a0NBQ2hFLDhEQUFDSyxNQUFJO3dCQUFDQyxHQUFHLEVBQUMsTUFBTTt3QkFBQ0MsSUFBSSxFQUFDLGNBQWM7Ozs7OzRCQUFHO29CQUFBLElBRXpDOzs7Ozs7b0JBQU87Ozs7OztZQUNJLENBQ2I7Q0FDSDtHQTlFUXRDLFdBQVc7O1FBRUFULGtEQUFTO1FBQ1pBLGtEQUFTOzs7QUFIakJTLEtBQUFBLFdBQVc7O0FBZ0ZwQiwrREFBZUEsV0FBVyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL1tpZF0uanM/YTMwNSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XG5pbXBvcnQgeyBGcmFnbWVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9qZWN0SW1hZ2UgZnJvbSAnLi4vY29tcG9uZW50cy9wcm9qZWN0SW1hZ2UnO1xuaW1wb3J0IGZzIGZyb20gJ2ZzL3Byb21pc2VzJztcbmltcG9ydCBwYXRoIGZyb20gJ3BhdGgnO1xuaW1wb3J0IFByb2plY3QgZnJvbSAnLi4vY29tcG9uZW50cy9wcm9qZWN0JztcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XG5pbXBvcnQgeyBtb3Rpb24sIEFuaW1hdGVQcmVzZW5jZSB9IGZyb20gJ2ZyYW1lci1tb3Rpb24nO1xuaW1wb3J0IFByb2plY3RWaWRlbyBmcm9tICcuLi9jb21wb25lbnRzL3Byb2plY3RWaWRlbyc7XG5pbXBvcnQgUGFnZUxvYWRlciBmcm9tICcuLi9jb21wb25lbnRzL3BhZ2VMb2FkZXInO1xuXG5mdW5jdGlvbiBQcm9qZWN0UGFnZShwcm9wcykge1xuICBjb25zdCB7IGJsb2NrcywgcHJvamVjdHMgfSA9IHByb3BzO1xuICBjb25zdCBwcm9qZWN0SWQgPSB1c2VSb3V0ZXIoKS5xdWVyeS5pZDtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG5cbiAgbGV0IGN1cnJlbnRQcm9qZWN0ID0gcHJvamVjdHMuZmluZCgob2JqKSA9PiB7XG4gICAgcmV0dXJuIG9iai5pZCA9PT0gcHJvamVjdElkO1xuICB9KTtcblxuICBmdW5jdGlvbiBmaW5kTmV4dFByb2plY3QoKSB7XG4gICAgaWYgKHByb2plY3RJZCA9PT0gJ2Fycml2YWwnKSB7XG4gICAgICByZXR1cm4gMTtcbiAgICB9IGVsc2UgaWYgKHByb2plY3RJZCA9PT0gJ3NiZXInKSB7XG4gICAgICByZXR1cm4gMjtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIDA7XG4gICAgfVxuICB9XG5cbiAgY29uc3QgbmV4dFByb2plY3ROdW1iZXIgPSBmaW5kTmV4dFByb2plY3QoKTtcblxuICByZXR1cm4gKFxuICAgIDxtb3Rpb24uZGl2XG4gICAgICBpbml0aWFsPXt7IG9wYWNpdHk6IDAgfX1cbiAgICAgIGFuaW1hdGU9e3sgb3BhY2l0eTogMSB9fVxuICAgICAgZXhpdD17eyBvcGFjaXR5OiAwIH19XG4gICAgPlxuICAgICAge2Jsb2Nrcy5tYXAoKGJsb2NrKSA9PiB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgPHNlY3Rpb24ga2V5PXtibG9jay5pZH0+XG4gICAgICAgICAgICB7YmxvY2suY29udGVudC5tYXAoKGNvbnRlbnRJdGVtKSA9PiB7XG4gICAgICAgICAgICAgIGlmIChjb250ZW50SXRlbS50eXBlID09PSAndGV4dCcpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gPHA+e2NvbnRlbnRJdGVtLmRhdGF9PC9wPjtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIGlmIChjb250ZW50SXRlbS50eXBlID09PSAnaGVhZGVyJykge1xuICAgICAgICAgICAgICAgIHJldHVybiA8aDIgY2xhc3NOYW1lPSdzZWN0aW9uSGVhZGVyJz57Y29udGVudEl0ZW0uZGF0YX08L2gyPjtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIGlmIChjb250ZW50SXRlbS50eXBlID09PSAnaW1hZ2UnKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgIDxQcm9qZWN0SW1hZ2VcbiAgICAgICAgICAgICAgICAgICAgc3JjPXtjb250ZW50SXRlbS5zcmN9XG4gICAgICAgICAgICAgICAgICAgIGNhcHRpb249e2NvbnRlbnRJdGVtLmNhcHRpb259XG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBpZiAoY29udGVudEl0ZW0udHlwZSA9PT0gJ3ZpZGVvJykge1xuICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICA8UHJvamVjdFZpZGVvXG4gICAgICAgICAgICAgICAgICAgIHNyYz17Y29udGVudEl0ZW0uc3JjfVxuICAgICAgICAgICAgICAgICAgICBjYXB0aW9uPXtjb250ZW50SXRlbS5jYXB0aW9ufVxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KX1cbiAgICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgICk7XG4gICAgICB9KX1cbiAgICAgIDxoMiBjbGFzc05hbWU9J3NlY3Rpb25IZWFkZXInPk5leHQgcHJvamVjdDwvaDI+XG5cbiAgICAgIDxQcm9qZWN0XG4gICAgICAgIG5hbWU9e3Byb2plY3RzW25leHRQcm9qZWN0TnVtYmVyXS5uYW1lfVxuICAgICAgICBkZXNjcmlwdGlvbj17cHJvamVjdHNbbmV4dFByb2plY3ROdW1iZXJdLmRlc2NyaXB0aW9ufVxuICAgICAgICBrZXk9e3Byb2plY3RzW25leHRQcm9qZWN0TnVtYmVyXS5pZH1cbiAgICAgICAgaW1hZ2U9e3Byb2plY3RzW25leHRQcm9qZWN0TnVtYmVyXS5pbWFnZX1cbiAgICAgICAgaWQ9e3Byb2plY3RzW25leHRQcm9qZWN0TnVtYmVyXS5pZH1cbiAgICAgICAgcHJvamVjdFRhZ3M9e3Byb2plY3RzW25leHRQcm9qZWN0TnVtYmVyXS5wcm9qZWN0VGFnc31cbiAgICAgIC8+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPntjdXJyZW50UHJvamVjdC5uYW1lICsgJyDigJQgRGVuaXMgS29weWxvdid9PC90aXRsZT5cbiAgICAgICAgPG1ldGEgbmFtZT0nZGVzY3JpcHRpb24nIGNvbnRlbnQ9e2N1cnJlbnRQcm9qZWN0LmRlc2NyaXB0aW9ufSAvPlxuICAgICAgICA8bGluayByZWw9J2ljb24nIGhyZWY9Jy9mYXZpY29uLmljbycgLz5cbiAgICAgICAgYGBcbiAgICAgIDwvSGVhZD5cbiAgICA8L21vdGlvbi5kaXY+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IFByb2plY3RQYWdlO1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUGF0aHMoKSB7XG4gIHJldHVybiB7XG4gICAgcGF0aHM6IFtcbiAgICAgIC8vIFN0cmluZyB2YXJpYW50OlxuICAgICAgJy9hcnJpdmFsJyxcbiAgICAgICcvc2JlcicsXG4gICAgICAnL290aGVyJyxcbiAgICAgIC8vIE9iamVjdCB2YXJpYW50OlxuICAgIF0sXG4gICAgZmFsbGJhY2s6IGZhbHNlLFxuICB9O1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoeyBwYXJhbXMgfSkge1xuICBjb25zdCBmaWxlUGF0aCA9IHBhdGguam9pbihcbiAgICBwcm9jZXNzLmN3ZCgpLFxuICAgICdkYXRhL3Byb2plY3RzJyxcbiAgICBgJHtwYXJhbXMuaWR9Lmpzb25gXG4gICk7XG4gIGNvbnN0IGpzb25EYXRhID0gYXdhaXQgZnMucmVhZEZpbGUoZmlsZVBhdGgpO1xuICBjb25zdCBkYXRhID0gSlNPTi5wYXJzZShqc29uRGF0YSk7XG5cbiAgY29uc3QgZmlsZVBhdGhQcm9qZWN0cyA9IHBhdGguam9pbihwcm9jZXNzLmN3ZCgpLCAnZGF0YScsICdkYXRhLmpzb24nKTtcbiAgY29uc3QganNvbkRhdGFQcm9qZWN0cyA9IGF3YWl0IGZzLnJlYWRGaWxlKGZpbGVQYXRoUHJvamVjdHMpO1xuICBjb25zdCBkYXRhUHJvamVjdHMgPSBKU09OLnBhcnNlKGpzb25EYXRhUHJvamVjdHMpO1xuXG4gIHJldHVybiB7XG4gICAgcHJvcHM6IHtcbiAgICAgIGJsb2NrczogZGF0YS5ibG9ja3MsXG4gICAgICBwcm9qZWN0czogZGF0YVByb2plY3RzLnByb2plY3RzLFxuICAgIH0sXG4gICAgcmV2YWxpZGF0ZTogMSxcbiAgfTtcbn1cbiJdLCJuYW1lcyI6WyJ1c2VSb3V0ZXIiLCJGcmFnbWVudCIsIlByb2plY3RJbWFnZSIsIlByb2plY3QiLCJIZWFkIiwibW90aW9uIiwiQW5pbWF0ZVByZXNlbmNlIiwiUHJvamVjdFZpZGVvIiwiUGFnZUxvYWRlciIsIlByb2plY3RQYWdlIiwicHJvcHMiLCJmaW5kTmV4dFByb2plY3QiLCJwcm9qZWN0SWQiLCJibG9ja3MiLCJwcm9qZWN0cyIsInF1ZXJ5IiwiaWQiLCJyb3V0ZXIiLCJjdXJyZW50UHJvamVjdCIsImZpbmQiLCJvYmoiLCJuZXh0UHJvamVjdE51bWJlciIsImRpdiIsImluaXRpYWwiLCJvcGFjaXR5IiwiYW5pbWF0ZSIsImV4aXQiLCJtYXAiLCJibG9jayIsInNlY3Rpb24iLCJjb250ZW50IiwiY29udGVudEl0ZW0iLCJ0eXBlIiwicCIsImRhdGEiLCJoMiIsImNsYXNzTmFtZSIsInNyYyIsImNhcHRpb24iLCJuYW1lIiwiZGVzY3JpcHRpb24iLCJpbWFnZSIsInByb2plY3RUYWdzIiwidGl0bGUiLCJtZXRhIiwibGluayIsInJlbCIsImhyZWYiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/[id].js\n");

/***/ })

});