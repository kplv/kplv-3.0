exports.id = 303;
exports.ids = [303];
exports.modules = {

/***/ 7299:
/***/ ((module) => {

// Exports
module.exports = {
	"project": "project_project__0C5Uy",
	"header": "project_header__n4wdB",
	"projectName": "project_projectName__EG41h",
	"body": "project_body__NTYei",
	"year": "project_year__qSHK_",
	"link": "project_link__7u7op",
	"text": "project_text__0da8C"
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

/***/ 4303:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ project)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./components/project.module.css
var project_module = __webpack_require__(7299);
var project_module_default = /*#__PURE__*/__webpack_require__.n(project_module);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./components/tag.module.css
var tag_module = __webpack_require__(8063);
var tag_module_default = /*#__PURE__*/__webpack_require__.n(tag_module);
;// CONCATENATED MODULE: ./components/tag.js


function Tag(props) {
    const { backColor , text , textColor , isIcon  } = props;
    // console.log(props);
    if (isIcon) {
        return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
            className: (tag_module_default()).tag,
            style: {
                backgroundColor: backColor,
                color: textColor
            },
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                    width: "16",
                    height: "16",
                    viewBox: "0 0 16 17",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        d: "M3 10.875L9.62357 3L8.84833 9.125H14L6.67976 17L8.15167 10.875H3Z",
                        fill: "#A273FE"
                    })
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
const tags_namespaceObject = JSON.parse('{"p":[{"text":"e-vehicles","id":"e-vehicles","textColor":"#A273FE","backColor":"rgba(162, 115, 254, 0.1)","isIcon":true},{"text":"startup","id":"startup","textColor":"#FE73CB","backColor":"rgba(254, 115, 203, 0.1)"},{"text":"b2b","id":"b2b","textColor":"rgba(28, 65, 250, 1)","backColor":"rgba(28, 65, 250, 0.1)"},{"text":"urban","id":"urban","textColor":"rgba(126, 57, 255, 1)","backColor":"rgba(126, 57, 255, 0.1)"},{"text":"zero to one","id":"zero to one","textColor":"rgba(255, 107, 57, 1)","backColor":"rgba(255, 107, 57, 0.1)"},{"text":"b2c","id":"b2c","textColor":"rgba(18, 224, 76, 1)","backColor":"rgba(18, 224, 76, 0.1)"},{"text":"locals","id":"locals","textColor":"rgba(57, 86, 255, 1)","backColor":"rgba(57, 86, 255, 0.1)"},{"text":"award concepts","id":"award","textColor":"rgba(255, 57, 94, 1)","backColor":"rgba(255, 57, 94, 0.1)"}]}');
;// CONCATENATED MODULE: ./components/tagList.js




function TagList(props) {
    const { projectTags  } = props;
    console.log;
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: (tagList_module_default()).list,
        children: projectTags.map((projectTag)=>tags_namespaceObject.p.map((tag)=>{
                if (projectTag === tag.id) {
                    console.log(tag.id);
                    return /*#__PURE__*/ jsx_runtime_.jsx(components_tag, {
                        text: tag.text,
                        backColor: tag.backColor,
                        textColor: tag.textColor,
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

;// CONCATENATED MODULE: ./components/project.js






function Project(props) {
    const { description , image , id , projectTags , name  } = props;
    const link = `/${id}`;
    return /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
        href: link,
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: (project_module_default()).project,
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: (project_module_default()).header,
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                            className: (project_module_default()).projectName,
                            children: name
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(tagList, {
                            projectTags: projectTags
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: (project_module_default()).body,
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: (project_module_default()).text,
                            children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                children: description
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                            src: image,
                            width: "364px",
                            height: "228px",
                            objectFit: "contain",
                            quality: "100"
                        })
                    ]
                })
            ]
        })
    });
}
/* harmony default export */ const project = (Project);


/***/ })

};
;