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

/***/ "./components/project.js":
/*!*******************************!*\
  !*** ./components/project.js ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _project_module_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./project.module.css */ \"./components/project.module.css\");\n/* harmony import */ var _project_module_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_project_module_css__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _tagList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tagList */ \"./components/tagList.js\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.mjs\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_device_detect__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-device-detect */ \"./node_modules/react-device-detect/dist/lib.js\");\n\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar variants = {};\nvar intialOpacity;\nif (!react_device_detect__WEBPACK_IMPORTED_MODULE_5__.isMobile) {\n    intialOpacity = 0;\n    variants = {\n        open: {\n            opacity: 1,\n            transition: {\n                duration: 0.3,\n                type: \"ease\"\n            }\n        },\n        closed: {\n            opacity: 0,\n            y: 24,\n            transition: {\n                duration: 0.3,\n                type: \"ease\"\n            }\n        }\n    };\n} else {\n    intialOpacity = 1;\n}\nfunction Project(props) {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false), isHovered = ref[0], setIsHovered = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false), isClicked = ref1[0], setIsClicked = ref1[1]; // Add this line\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(props.name), projectName = ref2[0], setProjectName = ref2[1]; // Add this line\n    var description = props.description, image = props.image, id = props.id, projectTags = props.projectTags, name = props.name, nda = props.nda;\n    var jiggleVariants = {\n        initial: {\n            x: 0\n        },\n        jiggle: {\n            x: [\n                0,\n                5,\n                -5,\n                5,\n                -5,\n                0\n            ],\n            transition: {\n                duration: 0.35,\n                type: \"spring\",\n                stiffness: 300\n            } // Jiggle lasts 0.35 seconds with a spring effect\n        }\n    };\n    var handleClick = function() {\n        if (nda) {\n            console.log(\"Project clicked, triggering jiggle\"); // Add this line for debugging\n            setIsClicked(true); // Set clicked state to true to trigger animation\n            setProjectName(\"Currently under NDA\"); // Change project name\n            setTimeout(function() {\n                setIsClicked(false);\n                setProjectName(name); // Revert to initial project name\n            }, 5000); // 5 seconds\n        }\n    };\n    var textVariants = {\n        initial: {\n            opacity: 0,\n            y: 12\n        },\n        animate: {\n            opacity: 1,\n            y: 0,\n            transition: {\n                duration: 0.15,\n                ease: \"easeOut\",\n                y: {\n                    type: \"spring\",\n                    stiffness: 300,\n                    damping: 30\n                }\n            }\n        },\n        exit: {\n            opacity: 0,\n            y: -12,\n            transition: {\n                duration: 0.1,\n                ease: \"easeIn\",\n                y: {\n                    type: \"spring\",\n                    stiffness: 300,\n                    damping: 30\n                }\n            }\n        }\n    };\n    var projectClass;\n    var link = \"/\".concat(id);\n    if (!nda) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_6__.motion.div, {\n            whileHover: function() {\n                return setIsHovered(true);\n            },\n            onHoverEnd: function() {\n                return setIsHovered(false);\n            },\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                href: link,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_project_module_css__WEBPACK_IMPORTED_MODULE_7___default().project) + \" \" + projectClass,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: (_project_module_css__WEBPACK_IMPORTED_MODULE_7___default().header),\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                className: (_project_module_css__WEBPACK_IMPORTED_MODULE_7___default().projectName),\n                                children: name\n                            }, void 0, false, {\n                                fileName: \"/Users/deniskplv/Documents/dev/kplv-3.0/components/project.js\",\n                                lineNumber: 94,\n                                columnNumber: 15\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/deniskplv/Documents/dev/kplv-3.0/components/project.js\",\n                            lineNumber: 93,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: (_project_module_css__WEBPACK_IMPORTED_MODULE_7___default().body),\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: (_project_module_css__WEBPACK_IMPORTED_MODULE_7___default().description),\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_tagList__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                            projectTags: projectTags\n                                        }, void 0, false, {\n                                            fileName: \"/Users/deniskplv/Documents/dev/kplv-3.0/components/project.js\",\n                                            lineNumber: 99,\n                                            columnNumber: 17\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                            className: (_project_module_css__WEBPACK_IMPORTED_MODULE_7___default().projectText),\n                                            children: description\n                                        }, void 0, false, {\n                                            fileName: \"/Users/deniskplv/Documents/dev/kplv-3.0/components/project.js\",\n                                            lineNumber: 100,\n                                            columnNumber: 17\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/deniskplv/Documents/dev/kplv-3.0/components/project.js\",\n                                    lineNumber: 98,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_6__.motion.div, {\n                                    variants: variants,\n                                    animate: isHovered ? \"open\" : \"closed\",\n                                    initial: {\n                                        opacity: {\n                                            intialOpacity: intialOpacity\n                                        }\n                                    },\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                        src: image,\n                                        width: \"364px\",\n                                        height: \"228px\",\n                                        objectFit: \"contain\",\n                                        quality: \"100\",\n                                        priority: true,\n                                        eager: true\n                                    }, void 0, false, {\n                                        fileName: \"/Users/deniskplv/Documents/dev/kplv-3.0/components/project.js\",\n                                        lineNumber: 107,\n                                        columnNumber: 17\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"/Users/deniskplv/Documents/dev/kplv-3.0/components/project.js\",\n                                    lineNumber: 102,\n                                    columnNumber: 15\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/deniskplv/Documents/dev/kplv-3.0/components/project.js\",\n                            lineNumber: 97,\n                            columnNumber: 13\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/deniskplv/Documents/dev/kplv-3.0/components/project.js\",\n                    lineNumber: 92,\n                    columnNumber: 11\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/deniskplv/Documents/dev/kplv-3.0/components/project.js\",\n                lineNumber: 91,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"/Users/deniskplv/Documents/dev/kplv-3.0/components/project.js\",\n            lineNumber: 87,\n            columnNumber: 7\n        }, this);\n    } else {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_6__.motion.div, {\n            whileHover: function() {\n                return setIsHovered(true);\n            },\n            onHoverEnd: function() {\n                return setIsHovered(false);\n            },\n            onClick: handleClick,\n            animate: isClicked ? \"jiggle\" : \"initial\",\n            variants: jiggleVariants,\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_project_module_css__WEBPACK_IMPORTED_MODULE_7___default().project) + \" \" + (_project_module_css__WEBPACK_IMPORTED_MODULE_7___default().locked),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_project_module_css__WEBPACK_IMPORTED_MODULE_7___default().header),\n                        style: {\n                            position: \"relative\",\n                            overflow: \"hidden\"\n                        },\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_6__.AnimatePresence, {\n                            mode: \"wait\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_6__.motion.h2, {\n                                className: (_project_module_css__WEBPACK_IMPORTED_MODULE_7___default().projectName),\n                                initial: \"initial\",\n                                animate: \"animate\",\n                                exit: \"exit\",\n                                variants: textVariants,\n                                style: {\n                                    position: \"absolute\",\n                                    left: 0,\n                                    right: 0\n                                },\n                                children: projectName\n                            }, projectName, false, {\n                                fileName: \"/Users/deniskplv/Documents/dev/kplv-3.0/components/project.js\",\n                                lineNumber: 134,\n                                columnNumber: 15\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/deniskplv/Documents/dev/kplv-3.0/components/project.js\",\n                            lineNumber: 133,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/deniskplv/Documents/dev/kplv-3.0/components/project.js\",\n                        lineNumber: 132,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_project_module_css__WEBPACK_IMPORTED_MODULE_7___default().body),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: (_project_module_css__WEBPACK_IMPORTED_MODULE_7___default().description),\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_tagList__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                        projectTags: projectTags\n                                    }, void 0, false, {\n                                        fileName: \"/Users/deniskplv/Documents/dev/kplv-3.0/components/project.js\",\n                                        lineNumber: 154,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                        className: (_project_module_css__WEBPACK_IMPORTED_MODULE_7___default().projectText),\n                                        children: description\n                                    }, void 0, false, {\n                                        fileName: \"/Users/deniskplv/Documents/dev/kplv-3.0/components/project.js\",\n                                        lineNumber: 155,\n                                        columnNumber: 15\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/deniskplv/Documents/dev/kplv-3.0/components/project.js\",\n                                lineNumber: 153,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_6__.motion.div, {\n                                variants: variants,\n                                animate: isHovered ? \"open\" : \"closed\",\n                                initial: {\n                                    opacity: {\n                                        intialOpacity: intialOpacity\n                                    }\n                                },\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                    src: image,\n                                    width: \"364px\",\n                                    height: \"228px\",\n                                    objectFit: \"contain\",\n                                    quality: \"100\",\n                                    priority: true,\n                                    eager: true\n                                }, void 0, false, {\n                                    fileName: \"/Users/deniskplv/Documents/dev/kplv-3.0/components/project.js\",\n                                    lineNumber: 162,\n                                    columnNumber: 15\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/deniskplv/Documents/dev/kplv-3.0/components/project.js\",\n                                lineNumber: 157,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/deniskplv/Documents/dev/kplv-3.0/components/project.js\",\n                        lineNumber: 152,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/deniskplv/Documents/dev/kplv-3.0/components/project.js\",\n                lineNumber: 131,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"/Users/deniskplv/Documents/dev/kplv-3.0/components/project.js\",\n            lineNumber: 124,\n            columnNumber: 7\n        }, this);\n    }\n}\n_s(Project, \"fFhPGqMozohmotB8NUngyytTOrY=\");\n_c = Project;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Project);\nvar _c;\n$RefreshReg$(_c, \"Project\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFFO2lDQUFFOzBDQUV2Qyw0RUFBQ1IsbURBQUs7b0NBQ0p3RCxHQUFHLEVBQUU5QixLQUFLO29DQUNWK0IsS0FBSyxFQUFDLE9BQU87b0NBQ2JDLE1BQU0sRUFBQyxPQUFPO29DQUNkQyxTQUFTLEVBQUMsU0FBUztvQ0FDbkJDLE9BQU8sRUFBQyxLQUFLO29DQUNiQyxRQUFRO29DQUNSQyxLQUFLOzs7Ozt3Q0FDRTs7Ozs7b0NBQ0U7Ozs7Ozs0QkFDVDs7Ozs7O29CQUNGOzs7OztnQkFDSyxDQUNiO0tBQ0g7Q0FDRjtHQWxKUTlDLE9BQU87QUFBUEEsS0FBQUEsT0FBTztBQW9KaEIsK0RBQWVBLE9BQU8sRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL3Byb2plY3QuanM/OGU0MyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY2xhc3NlcyBmcm9tICcuL3Byb2plY3QubW9kdWxlLmNzcyc7XG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSc7XG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuaW1wb3J0IFRhZ0xpc3QgZnJvbSAnLi90YWdMaXN0JztcbmltcG9ydCB7IG1vdGlvbiwgQW5pbWF0ZVByZXNlbmNlIH0gZnJvbSAnZnJhbWVyLW1vdGlvbic7XG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGlzTW9iaWxlIH0gZnJvbSAncmVhY3QtZGV2aWNlLWRldGVjdCc7XG5cbmxldCB2YXJpYW50cyA9IHt9O1xubGV0IGludGlhbE9wYWNpdHk7XG5cblxuXG5cblxuXG5pZiAoIWlzTW9iaWxlKSB7XG4gIGludGlhbE9wYWNpdHkgPSAwO1xuICB2YXJpYW50cyA9IHtcbiAgICBvcGVuOiB7IG9wYWNpdHk6IDEsIHRyYW5zaXRpb246IHsgZHVyYXRpb246IDAuMywgdHlwZTogJ2Vhc2UnIH0gfSxcbiAgICBjbG9zZWQ6IHtcbiAgICAgIG9wYWNpdHk6IDAsXG4gICAgICB5OiAyNCxcbiAgICAgIHRyYW5zaXRpb246IHsgZHVyYXRpb246IDAuMywgdHlwZTogJ2Vhc2UnIH0sXG4gICAgfSxcbiAgfTtcbn0gZWxzZSB7XG4gIGludGlhbE9wYWNpdHkgPSAxO1xufVxuXG5mdW5jdGlvbiBQcm9qZWN0KHByb3BzKSB7XG4gIGNvbnN0IFtpc0hvdmVyZWQsIHNldElzSG92ZXJlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtpc0NsaWNrZWQsIHNldElzQ2xpY2tlZF0gPSB1c2VTdGF0ZShmYWxzZSk7IC8vIEFkZCB0aGlzIGxpbmVcbiAgY29uc3QgW3Byb2plY3ROYW1lLCBzZXRQcm9qZWN0TmFtZV0gPSB1c2VTdGF0ZShwcm9wcy5uYW1lKTsgLy8gQWRkIHRoaXMgbGluZVxuICBjb25zdCB7IGRlc2NyaXB0aW9uLCBpbWFnZSwgaWQsIHByb2plY3RUYWdzLCBuYW1lLCBuZGEgfSA9IHByb3BzO1xuXG4gIGNvbnN0IGppZ2dsZVZhcmlhbnRzID0ge1xuICAgIGluaXRpYWw6IHsgeDogMCB9LCAvLyBJbml0aWFsIHN0YXRlLCBubyBob3Jpem9udGFsIG1vdmVtZW50XG4gICAgamlnZ2xlOiB7IFxuICAgICAgeDogWzAsIDUsIC01LCA1LCAtNSwgMF0sIC8vIEtleWZyYW1lcyBmb3IgdGhlIGhvcml6b250YWwgamlnZ2xlIGVmZmVjdFxuICAgICAgdHJhbnNpdGlvbjogeyBkdXJhdGlvbjogMC4zNSwgdHlwZTogJ3NwcmluZycsIHN0aWZmbmVzczogMzAwIH0gLy8gSmlnZ2xlIGxhc3RzIDAuMzUgc2Vjb25kcyB3aXRoIGEgc3ByaW5nIGVmZmVjdFxuICAgIH0sXG4gIH07XG5cbiAgY29uc3QgaGFuZGxlQ2xpY2sgPSAoKSA9PiB7XG4gICAgaWYgKG5kYSkge1xuICAgICAgY29uc29sZS5sb2coJ1Byb2plY3QgY2xpY2tlZCwgdHJpZ2dlcmluZyBqaWdnbGUnKTsgLy8gQWRkIHRoaXMgbGluZSBmb3IgZGVidWdnaW5nXG4gICAgICBzZXRJc0NsaWNrZWQodHJ1ZSk7IC8vIFNldCBjbGlja2VkIHN0YXRlIHRvIHRydWUgdG8gdHJpZ2dlciBhbmltYXRpb25cbiAgICAgIHNldFByb2plY3ROYW1lKCdDdXJyZW50bHkgdW5kZXIgTkRBJyk7IC8vIENoYW5nZSBwcm9qZWN0IG5hbWVcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBzZXRJc0NsaWNrZWQoZmFsc2UpO1xuICAgICAgICBzZXRQcm9qZWN0TmFtZShuYW1lKTsgLy8gUmV2ZXJ0IHRvIGluaXRpYWwgcHJvamVjdCBuYW1lXG4gICAgICB9LCA1MDAwKTsgLy8gNSBzZWNvbmRzXG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IHRleHRWYXJpYW50cyA9IHtcbiAgICBpbml0aWFsOiB7IFxuICAgICAgb3BhY2l0eTogMCwgXG4gICAgICB5OiAxMlxuICAgIH0sXG4gICAgYW5pbWF0ZTogeyBcbiAgICAgIG9wYWNpdHk6IDEsIFxuICAgICAgeTogMCxcbiAgICAgIHRyYW5zaXRpb246IHsgXG4gICAgICAgIGR1cmF0aW9uOiAwLjE1LCBcbiAgICAgICAgZWFzZTogJ2Vhc2VPdXQnLFxuICAgICAgICB5OiB7IHR5cGU6ICdzcHJpbmcnLCBzdGlmZm5lc3M6IDMwMCwgZGFtcGluZzogMzAgfVxuICAgICAgfSBcbiAgICB9LFxuICAgIGV4aXQ6IHsgXG4gICAgICBvcGFjaXR5OiAwLCBcbiAgICAgIHk6IC0xMixcbiAgICAgIHRyYW5zaXRpb246IHsgXG4gICAgICAgIGR1cmF0aW9uOiAwLjEsIFxuICAgICAgICBlYXNlOiAnZWFzZUluJyxcbiAgICAgICAgeTogeyB0eXBlOiAnc3ByaW5nJywgc3RpZmZuZXNzOiAzMDAsIGRhbXBpbmc6IDMwIH1cbiAgICAgIH0gXG4gICAgfSxcbiAgfTtcblxuICBsZXQgcHJvamVjdENsYXNzO1xuICBsZXQgbGluayA9IGAvJHtpZH1gO1xuXG4gIGlmICghbmRhKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxtb3Rpb24uZGl2XG4gICAgICB3aGlsZUhvdmVyPXsoKSA9PiBzZXRJc0hvdmVyZWQodHJ1ZSl9XG4gICAgICBvbkhvdmVyRW5kPXsoKSA9PiBzZXRJc0hvdmVyZWQoZmFsc2UpfVxuICAgICAgPlxuICAgICAgICA8TGluayBocmVmPXtsaW5rfT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5wcm9qZWN0ICsgJyAnICsgcHJvamVjdENsYXNzfT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmhlYWRlcn0+XG4gICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9e2NsYXNzZXMucHJvamVjdE5hbWV9PntuYW1lfTwvaDI+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuYm9keX0+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmRlc2NyaXB0aW9ufT5cbiAgICAgICAgICAgICAgICA8VGFnTGlzdCBwcm9qZWN0VGFncz17cHJvamVjdFRhZ3N9IC8+XG4gICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT17Y2xhc3Nlcy5wcm9qZWN0VGV4dH0+e2Rlc2NyaXB0aW9ufTwvaDI+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8bW90aW9uLmRpdlxuICAgICAgICAgICAgICAgIHZhcmlhbnRzPXt2YXJpYW50c31cbiAgICAgICAgICAgICAgICBhbmltYXRlPXtpc0hvdmVyZWQgPyAnb3BlbicgOiAnY2xvc2VkJ31cbiAgICAgICAgICAgICAgICBpbml0aWFsPXt7IG9wYWNpdHk6IHsgaW50aWFsT3BhY2l0eSB9IH19XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8SW1hZ2VcbiAgICAgICAgICAgICAgICAgIHNyYz17aW1hZ2V9XG4gICAgICAgICAgICAgICAgICB3aWR0aD0nMzY0cHgnXG4gICAgICAgICAgICAgICAgICBoZWlnaHQ9JzIyOHB4J1xuICAgICAgICAgICAgICAgICAgb2JqZWN0Rml0PSdjb250YWluJ1xuICAgICAgICAgICAgICAgICAgcXVhbGl0eT0nMTAwJ1xuICAgICAgICAgICAgICAgICAgcHJpb3JpdHlcbiAgICAgICAgICAgICAgICAgIGVhZ2VyXG4gICAgICAgICAgICAgICAgPjwvSW1hZ2U+XG4gICAgICAgICAgICAgIDwvbW90aW9uLmRpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L0xpbms+XG4gICAgICA8L21vdGlvbi5kaXY+XG4gICAgKTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gKFxuICAgICAgPG1vdGlvbi5kaXZcbiAgICAgICAgd2hpbGVIb3Zlcj17KCkgPT4gc2V0SXNIb3ZlcmVkKHRydWUpfVxuICAgICAgICBvbkhvdmVyRW5kPXsoKSA9PiBzZXRJc0hvdmVyZWQoZmFsc2UpfVxuICAgICAgICBvbkNsaWNrPXtoYW5kbGVDbGlja30gLy8gQWRkIHRoaXMgbGluZSB0byBoYW5kbGUgY2xpY2sgZXZlbnRzXG4gICAgICAgIGFuaW1hdGU9e2lzQ2xpY2tlZCA/ICdqaWdnbGUnIDogJ2luaXRpYWwnfSAvLyBBZGQgdGhpcyBsaW5lIHRvIHRyaWdnZXIgdGhlIGppZ2dsZSBhbmltYXRpb25cbiAgICAgICAgdmFyaWFudHM9e2ppZ2dsZVZhcmlhbnRzfSAvLyBBZGQgdGhpcyBsaW5lIHRvIGRlZmluZSB0aGUgYW5pbWF0aW9uIHZhcmlhbnRzXG4gICAgICA+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnByb2plY3QgKyAnICcgKyBjbGFzc2VzLmxvY2tlZH0+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuaGVhZGVyfSBzdHlsZT17eyBwb3NpdGlvbjogJ3JlbGF0aXZlJywgb3ZlcmZsb3c6ICdoaWRkZW4nIH19PlxuICAgICAgICAgICAgPEFuaW1hdGVQcmVzZW5jZSBtb2RlPVwid2FpdFwiPlxuICAgICAgICAgICAgICA8bW90aW9uLmgyXG4gICAgICAgICAgICAgICAga2V5PXtwcm9qZWN0TmFtZX1cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMucHJvamVjdE5hbWV9XG4gICAgICAgICAgICAgICAgaW5pdGlhbD1cImluaXRpYWxcIlxuICAgICAgICAgICAgICAgIGFuaW1hdGU9XCJhbmltYXRlXCJcbiAgICAgICAgICAgICAgICBleGl0PVwiZXhpdFwiXG4gICAgICAgICAgICAgICAgdmFyaWFudHM9e3RleHRWYXJpYW50c31cbiAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgICAgICAgICAgICAgICBsZWZ0OiAwLFxuICAgICAgICAgICAgICAgICAgcmlnaHQ6IDAsXG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIHtwcm9qZWN0TmFtZX1cbiAgICAgICAgICAgICAgPC9tb3Rpb24uaDI+XG4gICAgICAgICAgICA8L0FuaW1hdGVQcmVzZW5jZT5cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmJvZHl9PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuZGVzY3JpcHRpb259PlxuICAgICAgICAgICAgICA8VGFnTGlzdCBwcm9qZWN0VGFncz17cHJvamVjdFRhZ3N9IC8+XG4gICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9e2NsYXNzZXMucHJvamVjdFRleHR9PntkZXNjcmlwdGlvbn08L2gyPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8bW90aW9uLmRpdlxuICAgICAgICAgICAgICB2YXJpYW50cz17dmFyaWFudHN9XG4gICAgICAgICAgICAgIGFuaW1hdGU9e2lzSG92ZXJlZCA/ICdvcGVuJyA6ICdjbG9zZWQnfVxuICAgICAgICAgICAgICBpbml0aWFsPXt7IG9wYWNpdHk6IHsgaW50aWFsT3BhY2l0eSB9IH19XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxJbWFnZVxuICAgICAgICAgICAgICAgIHNyYz17aW1hZ2V9XG4gICAgICAgICAgICAgICAgd2lkdGg9JzM2NHB4J1xuICAgICAgICAgICAgICAgIGhlaWdodD0nMjI4cHgnXG4gICAgICAgICAgICAgICAgb2JqZWN0Rml0PSdjb250YWluJ1xuICAgICAgICAgICAgICAgIHF1YWxpdHk9JzEwMCdcbiAgICAgICAgICAgICAgICBwcmlvcml0eVxuICAgICAgICAgICAgICAgIGVhZ2VyXG4gICAgICAgICAgICAgID48L0ltYWdlPlxuICAgICAgICAgICAgPC9tb3Rpb24uZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvbW90aW9uLmRpdj5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFByb2plY3Q7XG4iXSwibmFtZXMiOlsiY2xhc3NlcyIsIkltYWdlIiwiTGluayIsIlRhZ0xpc3QiLCJtb3Rpb24iLCJBbmltYXRlUHJlc2VuY2UiLCJ1c2VTdGF0ZSIsImlzTW9iaWxlIiwidmFyaWFudHMiLCJpbnRpYWxPcGFjaXR5Iiwib3BlbiIsIm9wYWNpdHkiLCJ0cmFuc2l0aW9uIiwiZHVyYXRpb24iLCJ0eXBlIiwiY2xvc2VkIiwieSIsIlByb2plY3QiLCJwcm9wcyIsImlzSG92ZXJlZCIsInNldElzSG92ZXJlZCIsImlzQ2xpY2tlZCIsInNldElzQ2xpY2tlZCIsIm5hbWUiLCJwcm9qZWN0TmFtZSIsInNldFByb2plY3ROYW1lIiwiZGVzY3JpcHRpb24iLCJpbWFnZSIsImlkIiwicHJvamVjdFRhZ3MiLCJuZGEiLCJqaWdnbGVWYXJpYW50cyIsImluaXRpYWwiLCJ4IiwiamlnZ2xlIiwic3RpZmZuZXNzIiwiaGFuZGxlQ2xpY2siLCJjb25zb2xlIiwibG9nIiwic2V0VGltZW91dCIsInRleHRWYXJpYW50cyIsImFuaW1hdGUiLCJlYXNlIiwiZGFtcGluZyIsImV4aXQiLCJwcm9qZWN0Q2xhc3MiLCJsaW5rIiwiZGl2Iiwid2hpbGVIb3ZlciIsIm9uSG92ZXJFbmQiLCJocmVmIiwiY2xhc3NOYW1lIiwicHJvamVjdCIsImhlYWRlciIsImgyIiwiYm9keSIsInByb2plY3RUZXh0Iiwic3JjIiwid2lkdGgiLCJoZWlnaHQiLCJvYmplY3RGaXQiLCJxdWFsaXR5IiwicHJpb3JpdHkiLCJlYWdlciIsIm9uQ2xpY2siLCJsb2NrZWQiLCJzdHlsZSIsInBvc2l0aW9uIiwib3ZlcmZsb3ciLCJtb2RlIiwibGVmdCIsInJpZ2h0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/project.js\n");

/***/ })

});