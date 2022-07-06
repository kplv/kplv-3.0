(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 2987:
/***/ ((module) => {

// Exports
module.exports = {
	"footer": "Footer_footer___O5Nl"
};


/***/ }),

/***/ 2711:
/***/ ((module) => {

// Exports
module.exports = {
	"text": "bottom-text_text__fHjFE"
};


/***/ }),

/***/ 5161:
/***/ ((module) => {

// Exports
module.exports = {
	"link": "footerLink_link__HBmrn"
};


/***/ }),

/***/ 2626:
/***/ ((module) => {

// Exports
module.exports = {
	"header": "header_header__xdC5s",
	"link": "header_link__BHkuM"
};


/***/ }),

/***/ 9378:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./components/header.module.css
var header_module = __webpack_require__(2626);
var header_module_default = /*#__PURE__*/__webpack_require__.n(header_module);
;// CONCATENATED MODULE: ./components/header.js



function Header() {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("header", {
        className: (header_module_default()).header,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                href: "/",
                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                    className: (header_module_default()).link,
                    children: "Denis Kopylov"
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                href: "#contacts",
                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                    className: (header_module_default()).link,
                    children: "Contacts"
                })
            })
        ]
    });
}
/* harmony default export */ const header = (Header);

;// CONCATENATED MODULE: ./data/socialData.js
const socialData = [
    {
        id: "mail",
        text: "Write me a Mail",
        link: "mailto:denis@kplv.ru",
        src: "/social/mail.svg"
    },
    {
        id: "telegram",
        text: "Telegram",
        link: "https://t.me/deniskplv",
        src: "/social/telegram.svg"
    },
    {
        id: "dribbble",
        text: "Dribbble",
        link: "https://dribbble.com/kplv",
        src: "/social/dribbble.svg"
    },
    {
        id: "linkedin",
        text: "Linked In",
        link: "https://www.linkedin.com/in/denis-kopylov-782510167/",
        src: "/social/linkedin.svg"
    }
];
/* harmony default export */ const data_socialData = (socialData);

// EXTERNAL MODULE: ./components/Footer.module.css
var Footer_module = __webpack_require__(2987);
var Footer_module_default = /*#__PURE__*/__webpack_require__.n(Footer_module);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: ./components/footerLink.module.css
var footerLink_module = __webpack_require__(5161);
var footerLink_module_default = /*#__PURE__*/__webpack_require__.n(footerLink_module);
;// CONCATENATED MODULE: ./components/footerLink.js




function FooterLink(props) {
    const { id , text , link , src  } = props;
    return /*#__PURE__*/ jsx_runtime_.jsx("a", {
        href: link,
        target: "_blank",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
            className: (footerLink_module_default()).link,
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                    src: src,
                    width: "28px",
                    height: "28px"
                }),
                text
            ]
        })
    });
}
/* harmony default export */ const footerLink = (FooterLink);

;// CONCATENATED MODULE: ./components/footer.js



function Footer(props) {
    const { items  } = props;
    return /*#__PURE__*/ jsx_runtime_.jsx("footer", {
        id: "contacts",
        children: /*#__PURE__*/ jsx_runtime_.jsx("ul", {
            className: (Footer_module_default()).footer,
            children: items.map((item)=>/*#__PURE__*/ jsx_runtime_.jsx(footerLink, {
                    link: item.link,
                    text: item.text,
                    src: item.src
                }, item.id)
            )
        })
    });
}
/* harmony default export */ const footer = (Footer);

// EXTERNAL MODULE: ./components/bottom-text.module.css
var bottom_text_module = __webpack_require__(2711);
var bottom_text_module_default = /*#__PURE__*/__webpack_require__.n(bottom_text_module);
// EXTERNAL MODULE: ./data/texts.json
var texts = __webpack_require__(6390);
;// CONCATENATED MODULE: ./components/bottom-text.js



function BottomText() {
    return /*#__PURE__*/ jsx_runtime_.jsx("p", {
        className: (bottom_text_module_default()).text,
        children: texts/* bottom */.I
    });
}
/* harmony default export */ const bottom_text = (BottomText);

;// CONCATENATED MODULE: ./components/layout.js






function Layout(props) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(header, {}),
            /*#__PURE__*/ jsx_runtime_.jsx("main", {
                children: props.children
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(footer, {
                items: data_socialData
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(bottom_text, {})
        ]
    });
}
/* harmony default export */ const layout = (Layout);

// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
;// CONCATENATED MODULE: ./pages/_app.js




function MyApp({ Component , pageProps  }) {
    return /*#__PURE__*/ jsx_runtime_.jsx(layout, {
        children: /*#__PURE__*/ jsx_runtime_.jsx(Component, {
            ...pageProps
        })
    });
}
/* harmony default export */ const _app = (MyApp);


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

/***/ 6390:
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"j":"Senior product designer at Arrival. I create innovative experiences & mentor junior designers.","I":"Made with help of Next.js, PolySans, and VS Code"}');

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [895,61], () => (__webpack_exec__(9378)));
module.exports = __webpack_exports__;

})();