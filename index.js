var connector_tester;(()=>{"use strict";var e={57253:(e,r,t)=>{var o={"./bootstrap":()=>Promise.all([t.e("vendors-node_modules_solana_web3_js_lib_index_browser_esm_js"),t.e("webpack_sharing_consume_default_react_react"),t.e("webpack_sharing_consume_default_reduxjs_toolkit_reduxjs_toolkit-webpack_sharing_consume_defau-0c3314"),t.e("webpack_sharing_consume_default_sentre_senhub_sentre_senhub"),t.e("src_bootstrap_app_tsx")]).then((()=>()=>t(43008)))},_=(e,r)=>(t.R=r,r=t.o(o,e)?o[e]():Promise.resolve().then((()=>{throw new Error('Module "'+e+'" does not exist in container.')})),t.R=void 0,r),n=(e,r)=>{if(t.S){var o="default",_=t.S[o];if(_&&_!==e)throw new Error("Container initialization failed as it has already been initialized with a different share scope");return t.S[o]=e,t.I(o,r)}};t.d(r,{get:()=>_,init:()=>n})}},r={};function t(o){var _=r[o];if(void 0!==_)return _.exports;var n=r[o]={id:o,loaded:!1,exports:{}};return e[o].call(n.exports,n,n.exports,t),n.loaded=!0,n.exports}t.m=e,t.c=r,t.amdO={},t.n=e=>{var r=e&&e.__esModule?()=>e.default:()=>e;return t.d(r,{a:r}),r},(()=>{var e,r=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__;t.t=function(o,_){if(1&_&&(o=this(o)),8&_)return o;if("object"===typeof o&&o){if(4&_&&o.__esModule)return o;if(16&_&&"function"===typeof o.then)return o}var n=Object.create(null);t.r(n);var a={};e=e||[null,r({}),r([]),r(r)];for(var s=2&_&&o;"object"==typeof s&&!~e.indexOf(s);s=r(s))Object.getOwnPropertyNames(s).forEach((e=>a[e]=()=>o[e]));return a.default=()=>o,t.d(n,a),n}})(),t.d=(e,r)=>{for(var o in r)t.o(r,o)&&!t.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:r[o]})},t.f={},t.e=e=>Promise.all(Object.keys(t.f).reduce(((r,o)=>(t.f[o](e,r),r)),[])),t.u=e=>"static/js/"+e+"."+{"vendors-node_modules_reduxjs_toolkit_dist_redux-toolkit_esm_js":"20ffb0a3","vendors-node_modules_solana_web3_js_lib_index_browser_esm_js":"666af51e","vendors-node_modules_react-router_esm_react-router_js":"661d738a","vendors-node_modules_sentre_senhub_dist_index_js-node_modules_sentre_senhub_dist_static_image-55fa97":"d6b67ce5",webpack_sharing_consume_default_react_react:"aa934645","webpack_sharing_consume_default_react-dom_react-dom":"d4ea6edd","webpack_sharing_consume_default_reduxjs_toolkit_reduxjs_toolkit-webpack_sharing_consume_defau-0c3314":"56e7222d","webpack_sharing_consume_default_react-router-dom_react-router-dom":"ae13538e","node_modules_react_jsx-runtime_js":"f6e41fa3","vendors-node_modules_antd_es_index_js":"49006f23","vendors-node_modules_react-dom_index_js":"e84dddd5","vendors-node_modules_react-redux_es_index_js":"bf63601c","node_modules_react-router-dom_esm_react-router-dom_js-_d6f00":"8fa28689",node_modules_react_index_js:"c7eabc3a",webpack_sharing_consume_default_sentre_senhub_sentre_senhub:"f7237c69",src_bootstrap_app_tsx:"dd0fee71","node_modules_react-router-dom_esm_react-router-dom_js-_d6f01":"333664ae","_18f2-_0b7d-_25ed-_8131-_3fc0-_e4dd-_7bec-_ec71-_df0e-_887c-_c738-_9820-_7d1a-_b254-_ed1b-_d1-147343":"cf80e415"}[e]+".chunk.js",t.miniCssF=e=>"static/css/"+e+".33d0acef.chunk.css",t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}(),t.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),(()=>{var e={},r="connector_tester:";t.l=(o,_,n,a)=>{if(e[o])e[o].push(_);else{var s,d;if(void 0!==n)for(var u=document.getElementsByTagName("script"),c=0;c<u.length;c++){var i=u[c];if(i.getAttribute("src")==o||i.getAttribute("data-webpack")==r+n){s=i;break}}s||(d=!0,(s=document.createElement("script")).charset="utf-8",s.timeout=120,t.nc&&s.setAttribute("nonce",t.nc),s.setAttribute("data-webpack",r+n),s.src=o),e[o]=[_];var l=(r,t)=>{s.onerror=s.onload=null,clearTimeout(m);var _=e[o];if(delete e[o],s.parentNode&&s.parentNode.removeChild(s),_&&_.forEach((e=>e(t))),r)return r(t)},m=setTimeout(l.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=l.bind(null,s.onerror),s.onload=l.bind(null,s.onload),d&&document.head.appendChild(s)}}})(),t.r=e=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.nmd=e=>(e.paths=[],e.children||(e.children=[]),e),(()=>{t.S={};var e={},r={};t.I=(o,_)=>{_||(_=[]);var n=r[o];if(n||(n=r[o]={}),!(_.indexOf(n)>=0)){if(_.push(n),e[o])return e[o];t.o(t.S,o)||(t.S[o]={});var a=t.S[o],s="connector_tester",d=(e,r,t,o)=>{var _=a[e]=a[e]||{},n=_[r];(!n||!n.loaded&&(!o!=!n.eager?o:s>n.from))&&(_[r]={get:t,from:s,eager:!!o})},u=[];if("default"===o)d("@reduxjs/toolkit","1.8.3",(()=>t.e("vendors-node_modules_reduxjs_toolkit_dist_redux-toolkit_esm_js").then((()=>()=>t(57853))))),d("@sentre/senhub","3.0.42",(()=>Promise.all([t.e("vendors-node_modules_solana_web3_js_lib_index_browser_esm_js"),t.e("vendors-node_modules_react-router_esm_react-router_js"),t.e("vendors-node_modules_sentre_senhub_dist_index_js-node_modules_sentre_senhub_dist_static_image-55fa97"),t.e("webpack_sharing_consume_default_react_react"),t.e("webpack_sharing_consume_default_react-dom_react-dom"),t.e("webpack_sharing_consume_default_reduxjs_toolkit_reduxjs_toolkit-webpack_sharing_consume_defau-0c3314"),t.e("webpack_sharing_consume_default_react-router-dom_react-router-dom"),t.e("node_modules_react_jsx-runtime_js")]).then((()=>()=>t(14894))))),d("antd","4.21.6",(()=>Promise.all([t.e("vendors-node_modules_antd_es_index_js"),t.e("webpack_sharing_consume_default_react_react"),t.e("webpack_sharing_consume_default_react-dom_react-dom")]).then((()=>()=>t(31108))))),d("react-dom","17.0.2",(()=>Promise.all([t.e("vendors-node_modules_react-dom_index_js"),t.e("webpack_sharing_consume_default_react_react")]).then((()=>()=>t(81108))))),d("react-redux","7.2.8",(()=>Promise.all([t.e("vendors-node_modules_react-redux_es_index_js"),t.e("webpack_sharing_consume_default_react_react"),t.e("webpack_sharing_consume_default_react-dom_react-dom")]).then((()=>()=>t(59771))))),d("react-router-dom","5.3.3",(()=>Promise.all([t.e("vendors-node_modules_react-router_esm_react-router_js"),t.e("webpack_sharing_consume_default_react_react"),t.e("node_modules_react-router-dom_esm_react-router-dom_js-_d6f00")]).then((()=>()=>t(9402))))),d("react","17.0.2",(()=>t.e("node_modules_react_index_js").then((()=>()=>t(7276)))));return u.length?e[o]=Promise.all(u).then((()=>e[o]=1)):e[o]=1}}})(),(()=>{var e;t.g.importScripts&&(e=t.g.location+"");var r=t.g.document;if(!e&&r&&(r.currentScript&&(e=r.currentScript.src),!e)){var o=r.getElementsByTagName("script");o.length&&(e=o[o.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=e})(),(()=>{var e=e=>{var r=e=>e.split(".").map((e=>+e==e?+e:e)),t=/^([^-+]+)?(?:-([^+]+))?(?:\+(.+))?$/.exec(e),o=t[1]?r(t[1]):[];return t[2]&&(o.length++,o.push.apply(o,r(t[2]))),t[3]&&(o.push([]),o.push.apply(o,r(t[3]))),o},r=(r,t)=>{r=e(r),t=e(t);for(var o=0;;){if(o>=r.length)return o<t.length&&"u"!=(typeof t[o])[0];var _=r[o],n=(typeof _)[0];if(o>=t.length)return"u"==n;var a=t[o],s=(typeof a)[0];if(n!=s)return"o"==n&&"n"==s||"s"==s||"u"==n;if("o"!=n&&"u"!=n&&_!=a)return _<a;o++}},o=e=>{var r=e[0],t="";if(1===e.length)return"*";if(r+.5){t+=0==r?">=":-1==r?"<":1==r?"^":2==r?"~":r>0?"=":"!=";for(var _=1,n=1;n<e.length;n++)_--,t+="u"==(typeof(s=e[n]))[0]?"-":(_>0?".":"")+(_=2,s);return t}var a=[];for(n=1;n<e.length;n++){var s=e[n];a.push(0===s?"not("+d()+")":1===s?"("+d()+" || "+d()+")":2===s?a.pop()+" "+a.pop():o(s))}return d();function d(){return a.pop().replace(/^\((.+)\)$/,"$1")}},_=(r,t)=>{if(0 in r){t=e(t);var o=r[0],n=o<0;n&&(o=-o-1);for(var a=0,s=1,d=!0;;s++,a++){var u,c,i=s<r.length?(typeof r[s])[0]:"";if(a>=t.length||"o"==(c=(typeof(u=t[a]))[0]))return!d||("u"==i?s>o&&!n:""==i!=n);if("u"==c){if(!d||"u"!=i)return!1}else if(d)if(i==c)if(s<=o){if(u!=r[s])return!1}else{if(n?u>r[s]:u<r[s])return!1;u!=r[s]&&(d=!1)}else if("s"!=i&&"n"!=i){if(n||s<=o)return!1;d=!1,s--}else{if(s<=o||c<i!=n)return!1;d=!1}else"s"!=i&&"n"!=i&&(d=!1,s--)}}var l=[],m=l.pop.bind(l);for(a=1;a<r.length;a++){var f=r[a];l.push(1==f?m()|m():2==f?m()&m():f?_(f,t):!m())}return!!m()},n=(e,t)=>{var o=e[t];return Object.keys(o).reduce(((e,t)=>!e||!o[e].loaded&&r(e,t)?t:e),0)},a=(e,r,t,_)=>"Unsatisfied version "+t+" from "+(t&&e[r][t].from)+" of shared singleton module "+r+" (required "+o(_)+")",s=(e,r,t,o)=>{var s=n(e,t);return _(o,s)||"undefined"!==typeof console&&console.warn&&console.warn(a(e,t,s,o)),d(e[t][s])},d=e=>(e.loaded=1,e.get()),u=e=>function(r,o,_,n){var a=t.I(r);return a&&a.then?a.then(e.bind(e,r,t.S[r],o,_,n)):e(r,t.S[r],o,_,n)},c=u(((e,r,o,_,n)=>r&&t.o(r,o)?s(r,0,o,_):n())),i={},l={92950:()=>c("default","react",[1,17,0,2],(()=>t.e("node_modules_react_index_js").then((()=>()=>t(7276))))),12181:()=>c("default","react-dom",[1,17,0,2],(()=>t.e("vendors-node_modules_react-dom_index_js").then((()=>()=>t(81108))))),55754:()=>c("default","react-redux",[1,7,2,5],(()=>Promise.all([t.e("vendors-node_modules_react-redux_es_index_js"),t.e("webpack_sharing_consume_default_react-dom_react-dom")]).then((()=>()=>t(59771))))),94751:()=>c("default","antd",[1,4,21,0],(()=>Promise.all([t.e("vendors-node_modules_antd_es_index_js"),t.e("webpack_sharing_consume_default_react-dom_react-dom")]).then((()=>()=>t(31108))))),19289:()=>c("default","@reduxjs/toolkit",[1,1,6,2],(()=>t.e("vendors-node_modules_reduxjs_toolkit_dist_redux-toolkit_esm_js").then((()=>()=>t(57853))))),45055:()=>c("default","react-router-dom",[1,5,3,0],(()=>t.e("node_modules_react-router-dom_esm_react-router-dom_js-_d6f01").then((()=>()=>t(9402))))),45179:()=>c("default","@sentre/senhub",[1,3,0,42],(()=>Promise.all([t.e("vendors-node_modules_solana_web3_js_lib_index_browser_esm_js"),t.e("vendors-node_modules_react-router_esm_react-router_js"),t.e("vendors-node_modules_sentre_senhub_dist_index_js-node_modules_sentre_senhub_dist_static_image-55fa97"),t.e("webpack_sharing_consume_default_react-dom_react-dom"),t.e("webpack_sharing_consume_default_reduxjs_toolkit_reduxjs_toolkit-webpack_sharing_consume_defau-0c3314"),t.e("webpack_sharing_consume_default_react-router-dom_react-router-dom"),t.e("_18f2-_0b7d-_25ed-_8131-_3fc0-_e4dd-_7bec-_ec71-_df0e-_887c-_c738-_9820-_7d1a-_b254-_ed1b-_d1-147343")]).then((()=>()=>t(14894)))))},m={webpack_sharing_consume_default_react_react:[92950],"webpack_sharing_consume_default_react-dom_react-dom":[12181],"webpack_sharing_consume_default_reduxjs_toolkit_reduxjs_toolkit-webpack_sharing_consume_defau-0c3314":[55754,94751,19289],"webpack_sharing_consume_default_react-router-dom_react-router-dom":[45055],webpack_sharing_consume_default_sentre_senhub_sentre_senhub:[45179]};t.f.consumes=(e,r)=>{t.o(m,e)&&m[e].forEach((e=>{if(t.o(i,e))return r.push(i[e]);var o=r=>{i[e]=0,t.m[e]=o=>{delete t.c[e],o.exports=r()}},_=r=>{delete i[e],t.m[e]=o=>{throw delete t.c[e],r}};try{var n=l[e]();n.then?r.push(i[e]=n.then(o).catch(_)):o(n)}catch(a){_(a)}}))}})(),(()=>{var e=e=>new Promise(((r,o)=>{var _=t.miniCssF(e),n=t.p+_;if(((e,r)=>{for(var t=document.getElementsByTagName("link"),o=0;o<t.length;o++){var _=(a=t[o]).getAttribute("data-href")||a.getAttribute("href");if("stylesheet"===a.rel&&(_===e||_===r))return a}var n=document.getElementsByTagName("style");for(o=0;o<n.length;o++){var a;if((_=(a=n[o]).getAttribute("data-href"))===e||_===r)return a}})(_,n))return r();((e,r,t,o)=>{var _=document.createElement("link");_.rel="stylesheet",_.type="text/css",_.onerror=_.onload=n=>{if(_.onerror=_.onload=null,"load"===n.type)t();else{var a=n&&("load"===n.type?"missing":n.type),s=n&&n.target&&n.target.href||r,d=new Error("Loading CSS chunk "+e+" failed.\n("+s+")");d.code="CSS_CHUNK_LOAD_FAILED",d.type=a,d.request=s,_.parentNode.removeChild(_),o(d)}},_.href=r,document.head.appendChild(_)})(e,n,r,o)})),r={connector_tester:0};t.f.miniCss=(t,o)=>{r[t]?o.push(r[t]):0!==r[t]&&{"vendors-node_modules_sentre_senhub_dist_index_js-node_modules_sentre_senhub_dist_static_image-55fa97":1}[t]&&o.push(r[t]=e(t).then((()=>{r[t]=0}),(e=>{throw delete r[t],e})))}})(),(()=>{var e={connector_tester:0};t.f.j=(r,o)=>{var _=t.o(e,r)?e[r]:void 0;if(0!==_)if(_)o.push(_[2]);else if(/^webpack_sharing_consume_default_(re(act(\-(dom_react|router\-dom_react\-router)\-dom|_react)|duxjs_toolkit_reduxjs_toolkit\-webpack_sharing_consume_defau\-0c3314)|sentre_senhub_sentre_senhub)$/.test(r))e[r]=0;else{var n=new Promise(((t,o)=>_=e[r]=[t,o]));o.push(_[2]=n);var a=t.p+t.u(r),s=new Error;t.l(a,(o=>{if(t.o(e,r)&&(0!==(_=e[r])&&(e[r]=void 0),_)){var n=o&&("load"===o.type?"missing":o.type),a=o&&o.target&&o.target.src;s.message="Loading chunk "+r+" failed.\n("+n+": "+a+")",s.name="ChunkLoadError",s.type=n,s.request=a,_[1](s)}}),"chunk-"+r,r)}};var r=(r,o)=>{var _,n,[a,s,d]=o,u=0;if(a.some((r=>0!==e[r]))){for(_ in s)t.o(s,_)&&(t.m[_]=s[_]);if(d)d(t)}for(r&&r(o);u<a.length;u++)n=a[u],t.o(e,n)&&e[n]&&e[n][0](),e[n]=0},o=globalThis.webpackChunkconnector_tester=globalThis.webpackChunkconnector_tester||[];o.forEach(r.bind(null,0)),o.push=r.bind(null,o.push.bind(o))})();var o=t(57253);connector_tester=o})();
//# sourceMappingURL=index.js.map