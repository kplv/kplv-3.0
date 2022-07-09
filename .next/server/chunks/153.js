exports.id = 153;
exports.ids = [153];
exports.modules = {

/***/ 7299:
/***/ ((module) => {

// Exports
module.exports = {
	"project": "project_project__0C5Uy",
	"header": "project_header__n4wdB",
	"projectName": "project_projectName__EG41h",
	"projectText": "project_projectText__H0aEI",
	"body": "project_body__NTYei",
	"year": "project_year__qSHK_",
	"link": "project_link__7u7op",
	"description": "project_description__QKgUF",
	"locked": "project_locked__cdgir"
};


/***/ }),

/***/ 7830:
/***/ ((module) => {

// Exports
module.exports = {
	"description": "projectImageDescription_description__tJb3t"
};


/***/ }),

/***/ 1808:
/***/ ((module) => {

// Exports
module.exports = {

};


/***/ }),

/***/ 8063:
/***/ ((module) => {

// Exports
module.exports = {
	"tag": "tag_tag__7gVde"
};


/***/ }),

/***/ 2289:
/***/ ((module) => {

// Exports
module.exports = {
	"list": "tagList_list__TN1uy"
};


/***/ }),

/***/ 5599:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _project_module_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(7299);
/* harmony import */ var _project_module_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_project_module_css__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _tagList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2999);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6197);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_device_detect__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3599);
/* harmony import */ var react_device_detect__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_device_detect__WEBPACK_IMPORTED_MODULE_6__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([framer_motion__WEBPACK_IMPORTED_MODULE_4__]);
framer_motion__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];








let variants = {};
let intialOpacity;
if (!react_device_detect__WEBPACK_IMPORTED_MODULE_6__.isMobile) {
    intialOpacity = 0;
    variants = {
        open: {
            opacity: 1,
            transition: {
                duration: 0.3,
                type: "ease"
            }
        },
        closed: {
            opacity: 0,
            y: 24,
            transition: {
                duration: 0.3,
                type: "ease"
            }
        }
    };
} else {
    intialOpacity = 1;
}
function Project(props) {
    const { 0: isHovered , 1: setIsHovered  } = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(false);
    const { description , image , id , projectTags , name , nda  } = props;
    let link;
    let projectClass;
    let scrollAfterClick;
    if (!nda) {
        link = `/${id}`;
        projectClass = "";
    } else {
        link = "";
        projectClass = (_project_module_css__WEBPACK_IMPORTED_MODULE_7___default().locked);
        scrollAfterClick = false;
    }
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_4__.motion.div, {
        whileHover: ()=>setIsHovered(true)
        ,
        onHoverEnd: ()=>setIsHovered(false)
        ,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
            href: link,
            scroll: scrollAfterClick,
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: (_project_module_css__WEBPACK_IMPORTED_MODULE_7___default().project) + " " + projectClass,
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: (_project_module_css__WEBPACK_IMPORTED_MODULE_7___default().header),
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                            className: (_project_module_css__WEBPACK_IMPORTED_MODULE_7___default().projectName),
                            children: name
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: (_project_module_css__WEBPACK_IMPORTED_MODULE_7___default().body),
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: (_project_module_css__WEBPACK_IMPORTED_MODULE_7___default().description),
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_tagList__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                                        projectTags: projectTags
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                        className: (_project_module_css__WEBPACK_IMPORTED_MODULE_7___default().projectText),
                                        children: description
                                    })
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_4__.motion.div, {
                                variants: variants,
                                animate: isHovered ? "open" : "closed",
                                initial: {
                                    opacity: {
                                        intialOpacity
                                    }
                                },
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
                                    src: image,
                                    width: "364px",
                                    height: "228px",
                                    objectFit: "contain",
                                    quality: "100",
                                    priority: true,
                                    eager: true
                                })
                            })
                        ]
                    })
                ]
            })
        })
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Project);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 849:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _projectImageDescription_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7830);
/* harmony import */ var _projectImageDescription_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_projectImageDescription_module_css__WEBPACK_IMPORTED_MODULE_1__);


function ImageDescription(props) {
    const { caption  } = props;
    if (caption) {
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
            className: (_projectImageDescription_module_css__WEBPACK_IMPORTED_MODULE_1___default().description),
            children: caption
        });
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ImageDescription);


/***/ }),

/***/ 3258:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _projectVideo_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1808);
/* harmony import */ var _projectVideo_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_projectVideo_module_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _projectImageDescription__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(849);



function ProjectVideo(props) {
    const { src , caption  } = props;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        style: {
            position: "relative"
        },
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_projectImageDescription__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
                caption: caption
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("video", {
                class: (_projectVideo_module_css__WEBPACK_IMPORTED_MODULE_2___default().video),
                src: src,
                autoplay: "yes",
                frameborder: "0",
                allowfullscreen: "",
                height: "100%",
                width: "100%",
                muted: "true",
                playsinline: "true",
                loop: "true"
            })
        ]
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProjectVideo);


/***/ }),

/***/ 2999:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ tagList)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./components/tag.module.css
var tag_module = __webpack_require__(8063);
var tag_module_default = /*#__PURE__*/__webpack_require__.n(tag_module);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
;// CONCATENATED MODULE: ./components/tag.js



function Tag(props) {
    const { backColor , text , textColor , isIcon , path  } = props;
    // console.log(props);
    if (isIcon) {
        return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
            className: (tag_module_default()).tag,
            style: {
                backgroundColor: backColor,
                color: textColor
            },
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                    src: path,
                    width: "16px",
                    height: "16px"
                }),
                text
            ]
        });
    } else {
        return /*#__PURE__*/ jsx_runtime_.jsx("span", {
            className: (tag_module_default()).tag,
            style: {
                backgroundColor: backColor,
                color: textColor
            },
            children: text
        });
    }
}
/* harmony default export */ const components_tag = (Tag);

// EXTERNAL MODULE: ./components/tagList.module.css
var tagList_module = __webpack_require__(2289);
var tagList_module_default = /*#__PURE__*/__webpack_require__.n(tagList_module);
;// CONCATENATED MODULE: ./data/tags.json
const tags_namespaceObject = JSON.parse('{"p":[{"text":"nda","id":"nda","textColor":"#192124","backColor":"rgba(25, 33, 36, 0.05)","isIcon":true,"path":"/icons/nda.svg"},{"text":"e-vehicles","id":"e-vehicles","textColor":"#A273FE","backColor":"rgba(162, 115, 254, 0.1)","isIcon":true,"path":"/icons/e-vehicles.svg"},{"text":"startup","id":"startup","textColor":"#FE73CB","backColor":"rgba(254, 115, 203, 0.1)"},{"text":"b2b","id":"b2b","textColor":"rgba(28, 65, 250, 1)","backColor":"rgba(28, 65, 250, 0.1)"},{"text":"city discovery","id":"city discovery","textColor":"#A273FE","backColor":"rgba(162, 115, 254, 0.1)","isIcon":true,"path":"/icons/discovery.svg"},{"text":"zero to one","id":"zero to one","textColor":"#FE73CB","backColor":"rgba(254, 115, 203, 0.1)"},{"text":"b2c","id":"b2c","textColor":"rgba(255, 57, 94, 1)","backColor":"rgba(255, 57, 94, 0.1)"},{"text":"local","id":"local","textColor":"#A273FE","backColor":"rgba(162, 115, 254, 0.1)"},{"text":"award concepts","id":"award","textColor":"rgba(255, 57, 94, 1)","backColor":"rgba(255, 57, 94, 0.1)","isIcon":true,"path":"/icons/award.svg"}]}');
;// CONCATENATED MODULE: ./components/tagList.js




function TagList(props) {
    const { projectTags  } = props;
    console.log;
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: (tagList_module_default()).list,
        children: projectTags.map((projectTag)=>tags_namespaceObject.p.map((tag)=>{
                if (projectTag === tag.id) {
                    return /*#__PURE__*/ jsx_runtime_.jsx(components_tag, {
                        text: tag.text,
                        backColor: tag.backColor,
                        textColor: tag.textColor,
                        path: tag.path,
                        isIcon: tag.isIcon
                    });
                }
            })
        )
    });
}
// export async function getStaticProps(context) {
//   const filePath = path.join(process.cwd(), "data", "tags.json");
//   const jsonData = await fs.readFile(filePath);
//   const data = JSON.parse(jsonData);
//   console.log(data);
//   return {
//     props: {
//       allTags: data.tags,
//     },
//     revalidate: 100,
//   };
// }
// export async function getStaticProps(context) {
//   const filePath = path.join(process.cwd(), 'data', 'tags.json');
//   const jsonData = await fs.readFile(filePath);
//   const data = JSON.parse(jsonData);
//   console.log(data + 'tagList')
//   return {
//     props: {
//       projects: data.projects,
//     },
//     revalidate: 10,
//   };
// }
/* harmony default export */ const tagList = (TagList);


/***/ })

};
;