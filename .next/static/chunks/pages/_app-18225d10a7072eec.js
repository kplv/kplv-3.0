(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{1780:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return n(9378)}])},9749:function(e,t,n){"use strict";function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,i,o=[],a=!0,l=!1;try{for(n=n.call(e);!(a=(r=n.next()).done)&&(o.push(r.value),!t||o.length!==t);a=!0);}catch(c){l=!0,i=c}finally{try{a||null==n.return||n.return()}finally{if(l)throw i}}return o}}(e,t)||l(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function a(e){return function(e){if(Array.isArray(e))return r(e)}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||l(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function l(e,t){if(e){if("string"===typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(n):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(e,t):void 0}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t=e.src,n=e.sizes,r=e.unoptimized,l=void 0!==r&&r,c=e.priority,u=void 0!==c&&c,m=e.loading,h=e.lazyRoot,x=void 0===h?null:h,_=e.lazyBoundary,z=void 0===_?"200px":_,I=e.className,L=e.quality,C=e.width,P=e.height,R=e.style,N=e.objectFit,M=e.objectPosition,q=e.onLoadingComplete,D=(e.onError,e.placeholder),U=void 0===D?"empty":D,B=e.blurDataURL,T=b(e,["src","sizes","unoptimized","priority","loading","lazyRoot","lazyBoundary","className","quality","width","height","style","objectFit","objectPosition","onLoadingComplete","onError","placeholder","blurDataURL"]),H=s.useContext(g.ImageConfigContext),W=s.useMemo((function(){var e=v||H||d.imageConfigDefault,t=a(e.deviceSizes).concat(a(e.imageSizes)).sort((function(e,t){return e-t})),n=e.deviceSizes.sort((function(e,t){return e-t}));return y({},e,{allSizes:t,deviceSizes:n})}),[H]),F=T,V=n?"responsive":"intrinsic";"layout"in F&&(F.layout&&(V=F.layout),delete F.layout);var K=A;if("loader"in F){if(F.loader){var J=F.loader;K=function(e){e.config;var t=b(e,["config"]);return J(t)}}delete F.loader}var $="";if(function(e){return"object"===typeof e&&(S(e)||function(e){return void 0!==e.src}(e))}(t)){var G=S(t)?t.default:t;if(!G.src)throw new Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ".concat(JSON.stringify(G)));if(B=B||G.blurDataURL,$=G.src,(!V||"fill"!==V)&&(P=P||G.height,C=C||G.width,!G.height||!G.width))throw new Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ".concat(JSON.stringify(G)))}t="string"===typeof t?t:$;var X=O(C),Q=O(P),Y=O(L),Z=!u&&("lazy"===m||"undefined"===typeof m);(t.startsWith("data:")||t.startsWith("blob:"))&&(l=!0,Z=!1);w.has(t)&&(Z=!1);var ee,te=o(s.useState(!1),2),ne=te[0],re=te[1],ie=o(p.useIntersection({rootRef:x,rootMargin:z,disabled:!Z}),3),oe=ie[0],ae=ie[1],le=ie[2],ce=!Z||ae,ue={boxSizing:"border-box",display:"block",overflow:"hidden",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},se={boxSizing:"border-box",display:"block",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},fe=!1,de={position:"absolute",top:0,left:0,bottom:0,right:0,boxSizing:"border-box",padding:0,border:"none",margin:"auto",display:"block",width:0,height:0,minWidth:"100%",maxWidth:"100%",minHeight:"100%",maxHeight:"100%",objectFit:N,objectPosition:M};0;0;var pe=Object.assign({},R,"raw"===V?{aspectRatio:"".concat(X," / ").concat(Q)}:de),ge="blur"!==U||ne?{}:{filter:"blur(20px)",backgroundSize:N||"cover",backgroundImage:'url("'.concat(B,'")'),backgroundPosition:M||"0% 0%"};if("fill"===V)ue.display="block",ue.position="absolute",ue.top=0,ue.left=0,ue.bottom=0,ue.right=0;else if("undefined"!==typeof X&&"undefined"!==typeof Q){var me=Q/X,he=isNaN(me)?"100%":"".concat(100*me,"%");"responsive"===V?(ue.display="block",ue.position="relative",fe=!0,se.paddingTop=he):"intrinsic"===V?(ue.display="inline-block",ue.position="relative",ue.maxWidth="100%",fe=!0,se.maxWidth="100%",ee="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27".concat(X,"%27%20height=%27").concat(Q,"%27/%3e")):"fixed"===V&&(ue.display="inline-block",ue.position="relative",ue.width=X,ue.height=Q)}else 0;var ye={src:j,srcSet:void 0,sizes:void 0};ce&&(ye=k({config:W,src:t,unoptimized:l,layout:V,width:X,quality:Y,sizes:n,loader:K}));var be=t;0;var ve,we="imagesrcset",je="imagesizes";we="imageSrcSet",je="imageSizes";var xe=(i(ve={},we,ye.srcSet),i(ve,je,ye.sizes),ve),Se=s.default.useLayoutEffect,ke=s.useRef(q),Oe=s.useRef(t);s.useEffect((function(){ke.current=q}),[q]),Se((function(){Oe.current!==t&&(le(),Oe.current=t)}),[le,t]);var Ae=y({isLazy:Z,imgAttributes:ye,heightInt:Q,widthInt:X,qualityInt:Y,layout:V,className:I,imgStyle:pe,blurStyle:ge,loading:m,config:W,unoptimized:l,placeholder:U,loader:K,srcString:be,onLoadingCompleteRef:ke,setBlurComplete:re,setIntersection:oe,isVisible:ce},F);return s.default.createElement(s.default.Fragment,null,"raw"===V?s.default.createElement(E,Object.assign({},Ae)):s.default.createElement("span",{style:ue},fe?s.default.createElement("span",{style:se},ee?s.default.createElement("img",{style:{display:"block",maxWidth:"100%",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},alt:"","aria-hidden":!0,src:ee}):null):null,s.default.createElement(E,Object.assign({},Ae))),u?s.default.createElement(f.default,null,s.default.createElement("link",Object.assign({key:"__nimg-"+ye.src+ye.srcSet+ye.sizes,rel:"preload",as:"image",href:ye.srcSet?void 0:ye.src},xe))):null)};var c,u,s=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var r=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,n):{};r.get||r.set?Object.defineProperty(t,n,r):t[n]=e[n]}return t.default=e,t}(n(7294)),f=(c=n(3121))&&c.__esModule?c:{default:c},d=n(139),p=n(9246),g=n(8730),m=(n(670),n(2700));function h(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function y(e){for(var t=arguments,n=function(n){var r=null!=t[n]?t[n]:{},i=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(i=i.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),i.forEach((function(t){h(e,t,r[t])}))},r=1;r<arguments.length;r++)n(r);return e}function b(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}u={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",experimentalLayoutRaw:!1};var v={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",experimentalLayoutRaw:!1},w=new Set,j=(new Map,"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7");var x=new Map([["default",function(e){var t=e.config,n=e.src,r=e.width,i=e.quality;0;if(n.endsWith(".svg")&&!t.dangerouslyAllowSVG)return n;return"".concat(m.normalizePathTrailingSlash(t.path),"?url=").concat(encodeURIComponent(n),"&w=").concat(r,"&q=").concat(i||75)}],["imgix",function(e){var t=e.config,n=e.src,r=e.width,i=e.quality,o=new URL("".concat(t.path).concat(z(n))),a=o.searchParams;a.set("auto",a.get("auto")||"format"),a.set("fit",a.get("fit")||"max"),a.set("w",a.get("w")||r.toString()),i&&a.set("q",i.toString());return o.href}],["cloudinary",function(e){var t=e.config,n=e.src,r=e.width,i=e.quality,o=["f_auto","c_limit","w_"+r,"q_"+(i||"auto")].join(",")+"/";return"".concat(t.path).concat(o).concat(z(n))}],["akamai",function(e){var t=e.config,n=e.src,r=e.width;return"".concat(t.path).concat(z(n),"?imwidth=").concat(r)}],["custom",function(e){var t=e.src;throw new Error('Image with src "'.concat(t,'" is missing "loader" prop.')+"\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader")}]]);function S(e){return void 0!==e.default}function k(e){var t=e.config,n=e.src,r=e.unoptimized,i=e.layout,o=e.width,l=e.quality,c=e.sizes,u=e.loader;if(r)return{src:n,srcSet:void 0,sizes:void 0};var s=function(e,t,n,r){var i=e.deviceSizes,o=e.allSizes;if(r&&("fill"===n||"responsive"===n||"raw"===n)){for(var l,c=/(^|\s)(1?\d?\d)vw/g,u=[];l=c.exec(r);l)u.push(parseInt(l[2]));if(u.length){var s,f=.01*(s=Math).min.apply(s,a(u));return{widths:o.filter((function(e){return e>=i[0]*f})),kind:"w"}}return{widths:o,kind:"w"}}return"number"!==typeof t||"fill"===n||"responsive"===n?{widths:i,kind:"w"}:{widths:a(new Set([t,2*t].map((function(e){return o.find((function(t){return t>=e}))||o[o.length-1]})))),kind:"x"}}(t,o,i,c),f=s.widths,d=s.kind,p=f.length-1;return{sizes:c||"w"!==d?c:"100vw",srcSet:f.map((function(e,r){return"".concat(u({config:t,src:n,quality:l,width:e})," ").concat("w"===d?e:r+1).concat(d)})).join(", "),src:u({config:t,src:n,quality:l,width:f[p]})}}function O(e){return"number"===typeof e?e:"string"===typeof e?parseInt(e,10):void 0}function A(e){var t,n=(null===(t=e.config)||void 0===t?void 0:t.loader)||"default",r=x.get(n);if(r)return r(e);throw new Error('Unknown "loader" found in "next.config.js". Expected: '.concat(d.VALID_LOADERS.join(", "),". Received: ").concat(n))}function _(e,t,n,r,i,o){e&&e.src!==j&&e["data-loaded-src"]!==t&&(e["data-loaded-src"]=t,("decode"in e?e.decode():Promise.resolve()).catch((function(){})).then((function(){if(e.parentNode&&(w.add(t),"blur"===r&&o(!0),null===i||void 0===i?void 0:i.current)){var n=e.naturalWidth,a=e.naturalHeight;i.current({naturalWidth:n,naturalHeight:a})}})))}var E=function(e){var t=e.imgAttributes,n=e.heightInt,r=e.widthInt,i=e.qualityInt,o=e.layout,a=e.className,l=e.imgStyle,c=e.blurStyle,u=e.isLazy,f=e.placeholder,d=e.loading,p=e.srcString,g=e.config,m=e.unoptimized,h=e.loader,v=e.onLoadingCompleteRef,w=e.setBlurComplete,j=e.setIntersection,x=e.onError,S=(e.isVisible,b(e,["imgAttributes","heightInt","widthInt","qualityInt","layout","className","imgStyle","blurStyle","isLazy","placeholder","loading","srcString","config","unoptimized","loader","onLoadingCompleteRef","setBlurComplete","setIntersection","onError","isVisible"]));return s.default.createElement(s.default.Fragment,null,s.default.createElement("img",Object.assign({},S,t,"raw"!==o||t.sizes?{}:{height:n,width:r},{decoding:"async","data-nimg":o,className:a,style:y({},l,c),ref:s.useCallback((function(e){j(e),(null===e||void 0===e?void 0:e.complete)&&_(e,p,0,f,v,w)}),[j,p,o,f,v,w]),onLoad:function(e){_(e.currentTarget,p,0,f,v,w)},onError:function(e){"blur"===f&&w(!0),x&&x(e)}})),(u||"blur"===f)&&s.default.createElement("noscript",null,s.default.createElement("img",Object.assign({},S,k({config:g,src:p,unoptimized:m,layout:o,width:r,quality:i,sizes:t.sizes,loader:h}),"raw"!==o||t.sizes?{}:{height:n,width:r},{decoding:"async","data-nimg":o,style:l,className:a,loading:d||"lazy"}))))};function z(e){return"/"===e[0]?e.slice(1):e}("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&(Object.assign(t.default,t),e.exports=t.default)},1551:function(e,t,n){"use strict";function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function i(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,i,o=[],a=!0,l=!1;try{for(n=n.call(e);!(a=(r=n.next()).done)&&(o.push(r.value),!t||o.length!==t);a=!0);}catch(c){l=!0,i=c}finally{try{a||null==n.return||n.return()}finally{if(l)throw i}}return o}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return r(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o,a=(o=n(7294))&&o.__esModule?o:{default:o},l=n(1003),c=n(880),u=n(9246);var s={};function f(e,t,n,r){if(e&&l.isLocalURL(t)){e.prefetch(t,n,r).catch((function(e){0}));var i=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;s[t+"%"+n+(i?"%"+i:"")]=!0}}var d=function(e){var t,n=!1!==e.prefetch,r=c.useRouter(),o=a.default.useMemo((function(){var t=i(l.resolveHref(r,e.href,!0),2),n=t[0],o=t[1];return{href:n,as:e.as?l.resolveHref(r,e.as):o||n}}),[r,e.href,e.as]),d=o.href,p=o.as,g=a.default.useRef(d),m=a.default.useRef(p),h=e.children,y=e.replace,b=e.shallow,v=e.scroll,w=e.locale;"string"===typeof h&&(h=a.default.createElement("a",null,h));var j=(t=a.default.Children.only(h))&&"object"===typeof t&&t.ref,x=i(u.useIntersection({rootMargin:"200px"}),3),S=x[0],k=x[1],O=x[2],A=a.default.useCallback((function(e){m.current===p&&g.current===d||(O(),m.current=p,g.current=d),S(e),j&&("function"===typeof j?j(e):"object"===typeof j&&(j.current=e))}),[p,j,d,O,S]);a.default.useEffect((function(){var e=k&&n&&l.isLocalURL(d),t="undefined"!==typeof w?w:r&&r.locale,i=s[d+"%"+p+(t?"%"+t:"")];e&&!i&&f(r,d,p,{locale:t})}),[p,d,k,w,n,r]);var _={ref:A,onClick:function(e){t.props&&"function"===typeof t.props.onClick&&t.props.onClick(e),e.defaultPrevented||function(e,t,n,r,i,o,a,c){("A"!==e.currentTarget.nodeName.toUpperCase()||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&l.isLocalURL(n))&&(e.preventDefault(),t[i?"replace":"push"](n,r,{shallow:o,locale:c,scroll:a}))}(e,r,d,p,y,b,v,w)},onMouseEnter:function(e){t.props&&"function"===typeof t.props.onMouseEnter&&t.props.onMouseEnter(e),l.isLocalURL(d)&&f(r,d,p,{priority:!0})}};if(e.passHref||"a"===t.type&&!("href"in t.props)){var E="undefined"!==typeof w?w:r&&r.locale,z=r&&r.isLocaleDomain&&l.getDomainLocale(p,E,r&&r.locales,r&&r.domainLocales);_.href=z||l.addBasePath(l.addLocale(p,E,r&&r.defaultLocale))}return a.default.cloneElement(t,_)};t.default=d,("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&(Object.assign(t.default,t),e.exports=t.default)},9246:function(e,t,n){"use strict";function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function i(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,i,o=[],a=!0,l=!1;try{for(n=n.call(e);!(a=(r=n.next()).done)&&(o.push(r.value),!t||o.length!==t);a=!0);}catch(c){l=!0,i=c}finally{try{a||null==n.return||n.return()}finally{if(l)throw i}}return o}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return r(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootRef,n=e.rootMargin,r=e.disabled||!l,s=o.useRef(),f=i(o.useState(!1),2),d=f[0],p=f[1],g=i(o.useState(t?t.current:null),2),m=g[0],h=g[1],y=o.useCallback((function(e){s.current&&(s.current(),s.current=void 0),r||d||e&&e.tagName&&(s.current=function(e,t,n){var r=function(e){var t,n={root:e.root||null,margin:e.rootMargin||""},r=u.find((function(e){return e.root===n.root&&e.margin===n.margin}));r?t=c.get(r):(t=c.get(n),u.push(n));if(t)return t;var i=new Map,o=new IntersectionObserver((function(e){e.forEach((function(e){var t=i.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return c.set(n,t={id:n,observer:o,elements:i}),t}(n),i=r.id,o=r.observer,a=r.elements;return a.set(e,t),o.observe(e),function(){if(a.delete(e),o.unobserve(e),0===a.size){o.disconnect(),c.delete(i);var t=u.findIndex((function(e){return e.root===i.root&&e.margin===i.margin}));t>-1&&u.splice(t,1)}}}(e,(function(e){return e&&p(e)}),{root:m,rootMargin:n}))}),[r,m,n,d]),b=o.useCallback((function(){p(!1)}),[]);return o.useEffect((function(){if(!l&&!d){var e=a.requestIdleCallback((function(){return p(!0)}));return function(){return a.cancelIdleCallback(e)}}}),[d]),o.useEffect((function(){t&&h(t.current)}),[t]),[y,d,b]};var o=n(7294),a=n(4686),l="undefined"!==typeof IntersectionObserver;var c=new Map,u=[];("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&(Object.assign(t.default,t),e.exports=t.default)},9378:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return A}});var r=n(5893),i=n(7294),o=n(1664),a=n.n(o),l=n(1002),c=n.n(l);var u=function(){return(0,r.jsxs)("header",{className:c().header,children:[(0,r.jsx)(a(),{href:"/",children:(0,r.jsx)("a",{className:c().link,children:"Denis Kopylov"})}),(0,r.jsx)(a(),{href:"#contacts",children:(0,r.jsx)("a",{className:c().link,children:"Contacts"})})]})},s=[{id:"mail",text:"Write me a Mail",link:"mailto:denis@kplv.ru",src:"/social/mail.svg"},{id:"telegram",text:"Telegram",link:"https://t.me/deniskplv",src:"/social/telegram.svg"},{id:"dribbble",text:"Dribbble",link:"https://dribbble.com/kplv",src:"/social/dribbble.svg"},{id:"linkedin",text:"Linked In",link:"https://www.linkedin.com/in/denis-kopylov-782510167/",src:"/social/linkedin.svg"}],f=n(6084),d=n.n(f),p=n(5675),g=n.n(p),m=n(2411),h=n.n(m);var y=function(e){e.id;var t=e.text,n=e.link,i=e.src;return(0,r.jsx)("a",{href:n,target:"_blank",children:(0,r.jsxs)("li",{className:h().link,children:[(0,r.jsx)(g(),{src:i,width:"28px",height:"28px"}),t]})})};var b=function(e){var t=e.items;return(0,r.jsx)("footer",{id:"contacts",children:(0,r.jsx)("ul",{className:d().footer,children:t.map((function(e){return(0,r.jsx)(y,{link:e.link,text:e.text,src:e.src},e.id)}))})})},v=n(9419),w=n.n(v),j=n(6390);var x=function(){return(0,r.jsx)("p",{className:w().text,children:j.I})};var S=function(e){return(0,r.jsxs)(i.Fragment,{children:[(0,r.jsx)(u,{}),(0,r.jsx)("main",{children:e.children}),(0,r.jsx)(b,{items:s}),(0,r.jsx)(x,{})]})};n(6774),n(9008);function k(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function O(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){k(e,t,n[t])}))}return e}var A=function(e){var t=e.Component,n=e.pageProps;return(0,r.jsx)(S,{children:(0,r.jsx)(t,O({},n))})}},6084:function(e){e.exports={footer:"Footer_footer___O5Nl"}},9419:function(e){e.exports={text:"bottom-text_text__fHjFE"}},2411:function(e){e.exports={link:"footerLink_link__HBmrn"}},1002:function(e){e.exports={header:"header_header__xdC5s",link:"header_link__BHkuM"}},6774:function(){},9008:function(e,t,n){e.exports=n(3121)},5675:function(e,t,n){e.exports=n(9749)},1664:function(e,t,n){e.exports=n(1551)},6390:function(e){"use strict";e.exports=JSON.parse('{"j":"Senior product designer at Arrival. I\xa0create innovative experiences &\xa0mentor junior designers.","I":"Made with help of Next.js, PolySans, and VS Code"}')}},function(e){var t=function(t){return e(e.s=t)};e.O(0,[774,179],(function(){return t(1780),t(880)}));var n=e.O();_N_E=n}]);