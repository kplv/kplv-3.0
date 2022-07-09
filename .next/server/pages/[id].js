(() => {
var exports = {};
exports.id = 112;
exports.ids = [112];
exports.modules = {

/***/ 2061:
/***/ ((module) => {

// Exports
module.exports = {
	"image": "projectImage_image__lqTFR"
};


/***/ }),

/***/ 4716:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _projectImage_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2061);
/* harmony import */ var _projectImage_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_projectImage_module_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _projectImageDescription__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(849);




function ProjectImage(props) {
    const { src , caption  } = props;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        style: {
            position: "relative"
        },
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_projectImageDescription__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                caption: caption
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
                src: src,
                width: "760px",
                height: "474px",
                className: (_projectImage_module_css__WEBPACK_IMPORTED_MODULE_3___default().image),
                objectFit: "cover"
            })
        ]
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProjectImage);


/***/ }),

/***/ 1577:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getStaticPaths": () => (/* binding */ getStaticPaths),
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_projectImage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4716);
/* harmony import */ var fs_promises__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3292);
/* harmony import */ var fs_promises__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(fs_promises__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1017);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_project__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5599);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6197);
/* harmony import */ var _components_projectVideo__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(3258);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_project__WEBPACK_IMPORTED_MODULE_5__, framer_motion__WEBPACK_IMPORTED_MODULE_7__]);
([_components_project__WEBPACK_IMPORTED_MODULE_5__, framer_motion__WEBPACK_IMPORTED_MODULE_7__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);









function ProjectPage(props) {
    const { blocks , projects  } = props;
    const projectId = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)().query.id;
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();
    let currentProject = projects.find((obj)=>{
        return obj.id === projectId;
    });
    function findNextProject() {
        if (projectId === "arrival") {
            return 1;
        } else if (projectId === "sber") {
            return 2;
        } else {
            return 0;
        }
    }
    const nextProjectNumber = findNextProject();
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_7__.AnimatePresence, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_7__.motion.div, {
            initial: {
                opacity: 0
            },
            animate: {
                opacity: 1
            },
            exit: {
                opacity: 0
            },
            children: [
                blocks.map((block)=>{
                    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
                        children: block.content.map((contentItem)=>{
                            if (contentItem.type === "text") {
                                return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                    children: contentItem.data
                                });
                            }
                            if (contentItem.type === "header") {
                                return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                    className: "sectionHeader",
                                    children: contentItem.data
                                });
                            }
                            if (contentItem.type === "image") {
                                return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_projectImage__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                                    src: contentItem.src,
                                    caption: contentItem.caption
                                });
                            }
                            if (contentItem.type === "video") {
                                return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_projectVideo__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                                    src: contentItem.src,
                                    caption: contentItem.caption
                                });
                            }
                        })
                    }, block.id);
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                    className: "sectionHeader",
                    children: "Next project"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_project__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                    name: projects[nextProjectNumber].name,
                    description: projects[nextProjectNumber].description,
                    image: projects[nextProjectNumber].image,
                    id: projects[nextProjectNumber].id,
                    projectTags: projects[nextProjectNumber].projectTags
                }, projects[nextProjectNumber].id),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_head__WEBPACK_IMPORTED_MODULE_6___default()), {
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("title", {
                            children: currentProject.name + " \u2014 Denis Kopylov"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                            name: "description",
                            content: currentProject.description
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                            property: "og:title",
                            content: "Denis Kopylov"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                            property: "og:type",
                            content: "article"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                            property: "og:image",
                            content: "/thumb.png"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                            property: "og:description",
                            content: "Denis Kopylov \u2014 senior product designer at Arrival"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
                            rel: "icon",
                            href: "/favicon.ico"
                        })
                    ]
                })
            ]
        })
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProjectPage);
async function getStaticPaths() {
    return {
        paths: [
            // String variant:
            "/arrival",
            "/sber",
            "/other"
        ],
        fallback: false
    };
}
async function getStaticProps({ params  }) {
    const filePath = path__WEBPACK_IMPORTED_MODULE_4___default().join(process.cwd(), "data/projects", `${params.id}.json`);
    const jsonData = await fs_promises__WEBPACK_IMPORTED_MODULE_3___default().readFile(filePath);
    const data = JSON.parse(jsonData);
    const filePathProjects = path__WEBPACK_IMPORTED_MODULE_4___default().join(process.cwd(), "data", "data.json");
    const jsonDataProjects = await fs_promises__WEBPACK_IMPORTED_MODULE_3___default().readFile(filePathProjects);
    const dataProjects = JSON.parse(jsonDataProjects);
    return {
        props: {
            blocks: data.blocks,
            projects: dataProjects.projects
        },
        revalidate: 1
    };
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 562:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/denormalize-page-path.js");

/***/ }),

/***/ 4957:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 4365:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-middleware-regex.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ 1853:
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 3599:
/***/ ((module) => {

"use strict";
module.exports = require("react-device-detect");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 6197:
/***/ ((module) => {

"use strict";
module.exports = import("framer-motion");;

/***/ }),

/***/ 3292:
/***/ ((module) => {

"use strict";
module.exports = require("fs/promises");

/***/ }),

/***/ 1017:
/***/ ((module) => {

"use strict";
module.exports = require("path");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [895,61,153], () => (__webpack_exec__(1577)));
module.exports = __webpack_exports__;

})();