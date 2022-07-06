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

/***/ 7830:
/***/ ((module) => {

// Exports
module.exports = {
	"description": "projectImageDescription_description__tJb3t"
};


/***/ }),

/***/ 8453:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _id_),
  "getStaticPaths": () => (/* binding */ getStaticPaths),
  "getStaticProps": () => (/* binding */ getStaticProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: external "next/router"
const router_namespaceObject = require("next/router");
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./components/projectImage.module.css
var projectImage_module = __webpack_require__(2061);
var projectImage_module_default = /*#__PURE__*/__webpack_require__.n(projectImage_module);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: ./components/projectImageDescription.module.css
var projectImageDescription_module = __webpack_require__(7830);
var projectImageDescription_module_default = /*#__PURE__*/__webpack_require__.n(projectImageDescription_module);
;// CONCATENATED MODULE: ./components/projectImageDescription.js


function ImageDescription(props) {
    const { caption  } = props;
    if (caption) {
        return /*#__PURE__*/ jsx_runtime_.jsx("span", {
            className: (projectImageDescription_module_default()).description,
            children: caption
        });
    }
}
/* harmony default export */ const projectImageDescription = (ImageDescription);

;// CONCATENATED MODULE: ./components/projectImage.js




function ProjectImage(props) {
    const { src , caption  } = props;
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        style: {
            position: "relative"
        },
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(projectImageDescription, {
                caption: caption
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                src: src,
                width: "760px",
                height: "474px",
                className: (projectImage_module_default()).image
            })
        ]
    });
}
/* harmony default export */ const projectImage = (ProjectImage);

// EXTERNAL MODULE: external "fs/promises"
var promises_ = __webpack_require__(3292);
var promises_default = /*#__PURE__*/__webpack_require__.n(promises_);
// EXTERNAL MODULE: external "path"
var external_path_ = __webpack_require__(1017);
var external_path_default = /*#__PURE__*/__webpack_require__.n(external_path_);
// EXTERNAL MODULE: ./components/project.js + 3 modules
var project = __webpack_require__(4303);
;// CONCATENATED MODULE: ./pages/[id].js







function ProjectPage(props) {
    const { blocks , projects  } = props;
    const projectId = (0,router_namespaceObject.useRouter)().query.id;
    console.log(projectId);
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
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_.Fragment, {
        children: [
            blocks.map((block)=>{
                return /*#__PURE__*/ jsx_runtime_.jsx("section", {
                    children: block.content.map((contentItem)=>{
                        if (contentItem.type === "text") {
                            return /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                children: contentItem.data
                            });
                        }
                        if (contentItem.type === "header") {
                            return /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                className: "sectionHeader",
                                children: contentItem.data
                            });
                        }
                        if (contentItem.type === "image") {
                            return /*#__PURE__*/ jsx_runtime_.jsx(projectImage, {
                                src: contentItem.src,
                                caption: contentItem.caption
                            });
                        }
                    })
                }, block.id);
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                className: "sectionHeader",
                children: "Next project"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(project/* default */.Z, {
                name: projects[nextProjectNumber].name,
                description: projects[nextProjectNumber].description,
                image: projects[nextProjectNumber].image,
                id: projects[nextProjectNumber].id,
                projectTags: projects[nextProjectNumber].projectTags
            }, projects[nextProjectNumber].id)
        ]
    });
}
/* harmony default export */ const _id_ = (ProjectPage);
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
    const filePath = external_path_default().join(process.cwd(), "data/projects", `${params.id}.json`);
    const jsonData = await promises_default().readFile(filePath);
    const data = JSON.parse(jsonData);
    const filePathProjects = external_path_default().join(process.cwd(), "data", "data.json");
    const jsonDataProjects = await promises_default().readFile(filePathProjects);
    const dataProjects = JSON.parse(jsonDataProjects);
    return {
        props: {
            blocks: data.blocks,
            projects: dataProjects.projects
        },
        revalidate: 1
    };
}


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

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

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
var __webpack_exports__ = __webpack_require__.X(0, [895,61,303], () => (__webpack_exec__(8453)));
module.exports = __webpack_exports__;

})();