/*! For license information please see src_bootstrap_app_tsx.dd0fee71.chunk.js.LICENSE.txt */
(globalThis.webpackChunkconnector_tester=globalThis.webpackChunkconnector_tester||[]).push([["src_bootstrap_app_tsx"],{45597:(e,t,n)=>{"use strict";Object.defineProperty(t,"X$",{value:!0}),Object.defineProperty(t,"jY",{enumerable:!0,get:function(){return o.default}}),t.h0=void 0,Object.defineProperty(t,"ng",{enumerable:!0,get:function(){return s.default}});var r=a(n(96369)),i=a(n(18126)),o=a(n(69363)),s=a(n(83272));function a(e){return e&&e.__esModule?e:{default:e}}const l=[r.default,i.default];t.h0=l},43008:(e,t,n)=>{"use strict";n.r(t),n.d(t,{Page:()=>T,__esModule:()=>M.X$,logo:()=>M.jY,panels:()=>M.h0,readme:()=>M.ng});var r=n(55754),i=n(45179),o=n(92950),s=n(80754),a=n(94751),l=n(45263);const c=()=>{const[e,t]=(0,o.useState)(""),[n,r]=(0,o.useState)(""),[i,c]=(0,o.useState)("https://sentre.io/"),[d,u]=(0,o.useState)("my-app-id"),h=(0,o.useMemo)((()=>d+"-iframe"),[d]),g=(0,o.useCallback)((()=>c(e)),[e]),f=(0,o.useCallback)((()=>{const e=document.getElementById(h);e&&(e.src+="")}),[h]);return(0,o.useEffect)((()=>new s.Gateway(window.sentre.wallet).terminate),[]),(0,l.jsxs)(a.Row,{gutter:[12,12],children:[(0,l.jsx)(a.Col,{span:12,children:(0,l.jsx)(a.Input,{value:n,onChange:e=>r(e.target.value||""),placeholder:"my-app-id",suffix:(0,l.jsx)(a.Button,{type:"text",size:"small",onClick:()=>u(n),disabled:!n||n===d,style:{marginRight:-7},children:"Save"})})}),(0,l.jsx)(a.Col,{span:12,children:(0,l.jsx)(a.Input,{value:e,onChange:e=>t(e.target.value||""),placeholder:"http://localhost:3000",suffix:(0,l.jsx)(a.Button,{type:"text",size:"small",onClick:e===i?f:g,disabled:!e,style:{marginRight:-7},children:e===i?"Refresh":"Save"})})}),(0,l.jsx)(a.Col,{span:24,children:(0,l.jsx)(a.Card,{bodyStyle:{padding:16,height:"calc(100vh - 144px)"},children:(0,l.jsx)("iframe",{id:h,src:i,title:"Senhub Connector Tester.",style:{height:"100%",width:"100%",border:"none",borderRadius:8},loading:"lazy",allowFullScreen:!0})})})]})};var d=n(19289),u=n(42224),h=n(48744),g=n.n(h),f=n(97429).Buffer;BigInt.prototype.toJSON=function(){return this.toString()};const p={serializableCheck:{isSerializable:e=>"undefined"===typeof e||null===e||"string"===typeof e||"boolean"===typeof e||"number"===typeof e||Array.isArray(e)||(e=>{if(null===e)return!1;const t=Object.getPrototypeOf(e);return null!==t&&null===Object.getPrototypeOf(t)})(e)||"bigint"===typeof e||e instanceof u.PublicKey||e instanceof g()||f.isBuffer(e)}},y="main",v=(0,d.createAsyncThunk)("main/increaseCounter",(async(e,t)=>{let{getState:n}=t;const{main:{counter:r}}=n();return{counter:r+1}})),N=(0,d.createSlice)({name:y,initialState:{counter:0},reducers:{},extraReducers:e=>{e.addCase(v.fulfilled,((e,t)=>{let{payload:n}=t;Object.assign(e,n)}))}}).reducer,E=(0,d.configureStore)({middleware:e=>e(p),devTools:!1,reducer:{main:N}});const S={appId:"connector_tester",url:"https://tuphan-dn.github.io/connector-tester/index.js"},m={devnet:{node:"https://api.devnet.solana.com",spltAddress:"TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA",splataAddress:"ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL"},testnet:{node:"https://api.testnet.solana.com",spltAddress:"TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA",splataAddress:"ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL"},mainnet:{node:"https://api.mainnet-beta.solana.com",spltAddress:"TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA",splataAddress:"ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL"}},w={manifest:{development:{...S},staging:{...S},production:{...S}}[i.env],sol:m[i.net]};var M=n(45597);const{manifest:{appId:b}}=w,T=()=>(0,l.jsx)(i.UIProvider,{appId:b,antd:!0,children:(0,l.jsx)(r.Provider,{store:E,children:(0,l.jsx)(c,{})})})},54922:function(e,t,n){"use strict";var r=n(97429).Buffer,i=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))((function(i,o){function s(e){try{l(r.next(e))}catch(t){o(t)}}function a(e){try{l(r.throw(e))}catch(t){o(t)}}function l(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(s,a)}l((r=r.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0}),t.SentreWalletAdapter=t.SentreWalletName=void 0;const o=n(49778),s=n(42224),a=n(17543),l="https://hub.sentre.io";t.SentreWalletName="Sentre";class c extends o.BaseMessageSignerWalletAdapter{constructor(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{appId:""};super(),this.name=t.SentreWalletName,this.url=l,this.icon="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTg2IiBoZWlnaHQ9IjIyOCIgdmlld0JveD0iMCAwIDE4NiAyMjgiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGQ9Ik05Mi42ODA5IDIyNy44ODJMMzAuODY2NyAxNjUuOTYzQzExLjEwMzEgMTQ2LjE2NSAwIDExOS4zMTUgMCA5MS4zMTY3QzAgNjMuMzE5NSAxMS4xMDMxIDM2LjQ2ODggMzAuODY2NyAxNi42NzE1TDQ3LjQ4MDkgMC4wMjkyMzU4TDEwOS4zMyA2MS45ODMzQzEyOS4wNzggODEuNzgzOCAxNDAuMTY4IDEwOC42MjkgMTQwLjE2MiAxMzYuNjE5QzE0MC4xNTUgMTY0LjYwOCAxMjkuMDUyIDE5MS40NDggMTA5LjI5NSAyMTEuMjM5TDkyLjY4MDkgMjI3Ljg4MloiIGZpbGw9InVybCgjcGFpbnQwX2xpbmVhcl8zMTdfNCkiLz4KPHBhdGggZD0iTTc2LjA3MzkgNjEuOTg4OUwxMzcuOTU4IDBMMTU0LjU3MiAxNi42NDIzQzE2NC4zNjggMjYuNDQ2MSAxNzIuMTM5IDM4LjA4NzggMTc3LjQ0MiA1MC45MDJDMTgyLjc0NCA2My43MTYyIDE4NS40NzQgNzcuNDUxMyAxODUuNDc0IDkxLjMyMjdDMTg1LjQ3NCAxMDUuMTk0IDE4Mi43NDQgMTE4LjkyOSAxNzcuNDQyIDEzMS43NDNDMTcyLjEzOSAxNDQuNTU3IDE2NC4zNjggMTU2LjE5OSAxNTQuNTcyIDE2Ni4wMDNMOTIuNzIyNSAyMjcuOTU3TDc2LjA3MzkgMjExLjI4QzU2LjMxMDIgMTkxLjQ4MyA0NS4yMDcgMTY0LjYzMiA0NS4yMDcgMTM2LjYzNUM0NS4yMDcgMTA4LjYzNyA1Ni4zMTAyIDgxLjc4NjEgNzYuMDczOSA2MS45ODg5WiIgZmlsbD0idXJsKCNwYWludDFfbGluZWFyXzMxN180KSIvPgo8ZGVmcz4KPGxpbmVhckdyYWRpZW50IGlkPSJwYWludDBfbGluZWFyXzMxN180IiB4MT0iMTQwLjIyIiB5MT0iMTEzLjk3MyIgeDI9Ii0wLjAyMjgyMDMiIHkyPSIxMTMuOTczIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+CjxzdG9wIHN0b3AtY29sb3I9IiNGOTU3NUUiLz4KPHN0b3Agb2Zmc2V0PSIwLjI3IiBzdG9wLWNvbG9yPSIjRjg1NTVCIi8+CjxzdG9wIG9mZnNldD0iMC40OSIgc3RvcC1jb2xvcj0iI0Y0NEY1MSIvPgo8c3RvcCBvZmZzZXQ9IjAuNjgiIHN0b3AtY29sb3I9IiNFRTQ1NDAiLz4KPHN0b3Agb2Zmc2V0PSIwLjg3IiBzdG9wLWNvbG9yPSIjRTYzNzI4Ii8+CjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iI0RFMkExMyIvPgo8L2xpbmVhckdyYWRpZW50Pgo8bGluZWFyR3JhZGllbnQgaWQ9InBhaW50MV9saW5lYXJfMzE3XzQiIHgxPSItNDIwNjA4IiB5MT0iMzUyNjM0IiB4Mj0iLTQyNDM3MSIgeTI9IjM1MTcxMiIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPgo8c3RvcCBzdG9wLWNvbG9yPSIjRjk1NzVFIi8+CjxzdG9wIG9mZnNldD0iMC4yNyIgc3RvcC1jb2xvcj0iI0Y4NTU1QiIvPgo8c3RvcCBvZmZzZXQ9IjAuNDkiIHN0b3AtY29sb3I9IiNGNDRGNTEiLz4KPHN0b3Agb2Zmc2V0PSIwLjY4IiBzdG9wLWNvbG9yPSIjRUU0NTQwIi8+CjxzdG9wIG9mZnNldD0iMC44NyIgc3RvcC1jb2xvcj0iI0U2MzcyOCIvPgo8c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiNERTJBMTMiLz4KPC9saW5lYXJHcmFkaWVudD4KPC9kZWZzPgo8L3N2Zz4K",this._readyState="undefined"===typeof window||"undefined"===typeof document?o.WalletReadyState.Unsupported:o.WalletReadyState.NotDetected,this._connecting=!1,this._wallet=null,this._publicKey=null,this._appId=e.appId,this._readyState!==o.WalletReadyState.Unsupported&&(0,o.scopePollingDetectionStrategy)((()=>!!window.parent.location.origin.includes(l)&&(this._readyState=o.WalletReadyState.Installed,this.emit("readyStateChange",this._readyState),!0)))}get publicKey(){return this._publicKey}get connecting(){return this._connecting}get readyState(){return this._readyState}connect(){return i(this,void 0,void 0,(function*(){try{if(this.connected||this.connecting)return;if(this._readyState!==o.WalletReadyState.Installed)throw new o.WalletNotReadyError;this._connecting=!0;const t=new a.WalletConnector(this._appId);let n,r;try{n=yield t.getAddress()}catch(e){throw new o.WalletAccountError(null===e||void 0===e?void 0:e.message,e)}try{r=new s.PublicKey(n)}catch(e){throw new o.WalletPublicKeyError(null===e||void 0===e?void 0:e.message,e)}this._publicKey=r,this._wallet=t,this.emit("connect",r)}catch(e){throw this.emit("error",e),e}finally{this._connecting=!1}}))}disconnect(){return i(this,void 0,void 0,(function*(){this._wallet&&(this._wallet=null,this._publicKey=null),this.emit("disconnect")}))}signTransaction(e){return i(this,void 0,void 0,(function*(){try{const n=this._wallet;if(!n)throw new o.WalletNotConnectedError;try{return(yield n.signTransaction(e))||e}catch(t){throw new o.WalletSignTransactionError(null===t||void 0===t?void 0:t.message,t)}}catch(t){throw this.emit("error",t),t}}))}signAllTransactions(e){return i(this,void 0,void 0,(function*(){try{const n=this._wallet;if(!n)throw new o.WalletNotConnectedError;try{return(yield n.signAllTransactions(e))||e}catch(t){throw new o.WalletSignTransactionError(null===t||void 0===t?void 0:t.message,t)}}catch(t){throw this.emit("error",t),t}}))}signMessage(e){return i(this,void 0,void 0,(function*(){try{const n=this._wallet;if(!n)throw new o.WalletNotConnectedError;try{const t=(new TextDecoder).decode(e),{signature:i}=yield n.signMessage(t),o=r.from(i,"hex");return Uint8Array.from(o)}catch(t){throw new o.WalletSignMessageError(null===t||void 0===t?void 0:t.message,t)}}catch(t){throw this.emit("error",t),t}}))}}t.SentreWalletAdapter=c},39297:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Messenger=void 0;const n="sentre";t.Messenger=class{constructor(e){let{name:t="unknown",verbose:r=!1}=e;this.emit=(e,t)=>e.postMessage({type:n,payload:t},"*"),this.listen=e=>{const t=t=>{let{data:{type:r,payload:i},origin:o}=t;if(r===n)return this.verbose&&console.log(this.name,o,i),e(i)};window.addEventListener("message",t);const r=()=>window.removeEventListener("message",t);return this.killers.push(r),r},this.killAll=()=>{for(;this.killers.length>0;){const e=this.killers.pop();e&&e()}},this.name=t,this.verbose=r,this.killers=[]}}},94559:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.ONE_SEC=t.EVENTS=void 0,function(e){e[e.CONNECT=0]="CONNECT",e[e.GET_ADDRESS=1]="GET_ADDRESS",e[e.SIGN_TRANSACTION=2]="SIGN_TRANSACTION",e[e.SIGN_ALL_TRANSACTIONS=3]="SIGN_ALL_TRANSACTIONS",e[e.SIGN_MESSAGE=4]="SIGN_MESSAGE"}(t.EVENTS||(t.EVENTS={})),t.ONE_SEC=1e3},83179:function(e,t,n){"use strict";var r=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))((function(i,o){function s(e){try{l(r.next(e))}catch(t){o(t)}}function a(e){try{l(r.throw(e))}catch(t){o(t)}}function l(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(s,a)}l((r=r.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0}),t.Gateway=void 0;const i=n(42224),o=n(39297),s=n(94559);t.Gateway=class{constructor(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];this.terminate=()=>this.messenger.killAll(),this.emit=(e,t)=>{const n=document.getElementById(e);if(!n||"IFRAME"!==n.tagName)throw new Error(`Cannot find iframe with id ${e}`);const r=null===n||void 0===n?void 0:n.contentWindow;if(!r)throw new Error("Cannot access to iframe window");return this.messenger.emit(r,t)},this.onConnect=(e,t)=>this.emit(e,{uid:t,event:s.EVENTS.CONNECT,data:!0}),this.onGetAddress=(e,t)=>r(this,void 0,void 0,(function*(){const n=yield this.wallet.getAddress();return this.emit(e,{uid:t,event:s.EVENTS.GET_ADDRESS,data:n})})),this.onSignTransaction=(e,t,n)=>r(this,void 0,void 0,(function*(){const r=i.Transaction.from(n),o=(yield this.wallet.signTransaction(r)).serialize();return this.emit(e,{uid:t,event:s.EVENTS.SIGN_TRANSACTION,data:o})})),this.onSignAllTransactions=(e,t,n)=>r(this,void 0,void 0,(function*(){const r=n.map((e=>i.Transaction.from(e))),o=(yield this.wallet.signAllTransactions(r)).map((e=>e.serialize()));return this.emit(e,{uid:t,event:s.EVENTS.SIGN_ALL_TRANSACTIONS,data:o})})),this.onSignMessage=(e,t,n)=>r(this,void 0,void 0,(function*(){const r=yield this.wallet.signMessage(n);return this.emit(e,{uid:t,event:s.EVENTS.SIGN_MESSAGE,data:r})})),this.messenger=new o.Messenger({name:"gateway",verbose:t}),this.wallet=e,this.messenger.listen((e=>{let{id:t,uid:n,event:i,data:o}=e;return r(this,void 0,void 0,(function*(){return i===s.EVENTS.CONNECT?this.onConnect(t,n):i===s.EVENTS.GET_ADDRESS?this.onGetAddress(t,n):i===s.EVENTS.SIGN_TRANSACTION?this.onSignTransaction(t,n,o):i===s.EVENTS.SIGN_ALL_TRANSACTIONS?this.onSignAllTransactions(t,n,o):i===s.EVENTS.SIGN_MESSAGE?this.onSignMessage(t,n,o):void 0}))}))}}},80754:function(e,t,n){"use strict";var r=this&&this.__createBinding||(Object.create?function(e,t,n,r){void 0===r&&(r=n);var i=Object.getOwnPropertyDescriptor(t,n);i&&!("get"in i?!t.__esModule:i.writable||i.configurable)||(i={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,r,i)}:function(e,t,n,r){void 0===r&&(r=n),e[r]=t[n]}),i=this&&this.__exportStar||function(e,t){for(var n in e)"default"===n||Object.prototype.hasOwnProperty.call(t,n)||r(t,e,n)};Object.defineProperty(t,"__esModule",{value:!0}),i(n(39297),t),i(n(94559),t),i(n(83179),t),i(n(17543),t),i(n(54922),t)},17543:function(e,t,n){"use strict";var r=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))((function(i,o){function s(e){try{l(r.next(e))}catch(t){o(t)}}function a(e){try{l(r.throw(e))}catch(t){o(t)}}function l(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(s,a)}l((r=r.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0}),t.WalletConnector=t.UID=void 0;const i=n(42224),o=n(39297),s=n(94559);t.UID=()=>Math.round(Math.random()*Math.pow(10,9));t.WalletConnector=class{constructor(e){let n=arguments.length>1&&void 0!==arguments[1]&&arguments[1];this.interact=e=>{let{event:n,data:i={},timeout:o=3*s.ONE_SEC}=e;return r(this,void 0,void 0,(function*(){return new Promise(((e,r)=>{try{if(!window.parent)throw new Error("Cannot access to parent window");const s=setTimeout((()=>r("Request timeout")),o),a=this.id,l=(0,t.UID)(),c=this.messenger.listen((t=>{let{event:r,uid:i,data:o}=t;if(n===r&&l===i)return clearTimeout(s),c(),e(o)}));return this.messenger.emit(window.parent,{event:n,id:a,uid:l,data:i})}catch(s){return r(s.message)}}))}))},this.isConnected=()=>r(this,void 0,void 0,(function*(){return yield this.interact({event:s.EVENTS.CONNECT,timeout:3*s.ONE_SEC})})),this.getAddress=()=>r(this,void 0,void 0,(function*(){return yield this.interact({event:s.EVENTS.GET_ADDRESS,timeout:6*s.ONE_SEC})})),this.signTransaction=e=>r(this,void 0,void 0,(function*(){const t=yield this.interact({event:s.EVENTS.SIGN_TRANSACTION,data:e.serialize({requireAllSignatures:!1,verifySignatures:!1}),timeout:60*s.ONE_SEC});return i.Transaction.from(t)})),this.signAllTransactions=e=>r(this,void 0,void 0,(function*(){return(yield this.interact({event:s.EVENTS.SIGN_ALL_TRANSACTIONS,data:e.map((e=>e.serialize({requireAllSignatures:!1,verifySignatures:!1}))),timeout:120*s.ONE_SEC})).map((e=>i.Transaction.from(e)))})),this.signMessage=e=>r(this,void 0,void 0,(function*(){return yield this.interact({event:s.EVENTS.SIGN_MESSAGE,data:e,timeout:60*s.ONE_SEC})})),this.id=e+"-iframe",this.messenger=new o.Messenger({name:this.id,verbose:n})}}},25882:e=>{"use strict";var t=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable;function i(e){if(null===e||void 0===e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach((function(e){r[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(i){return!1}}()?Object.assign:function(e,o){for(var s,a,l=i(e),c=1;c<arguments.length;c++){for(var d in s=Object(arguments[c]))n.call(s,d)&&(l[d]=s[d]);if(t){a=t(s);for(var u=0;u<a.length;u++)r.call(s,a[u])&&(l[a[u]]=s[a[u]])}}return l}},62175:(e,t,n)=>{"use strict";n(25882);var r=n(92950),i=60103;if(60107,"function"===typeof Symbol&&Symbol.for){var o=Symbol.for;i=o("react.element"),o("react.fragment")}var s=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a=Object.prototype.hasOwnProperty,l={key:!0,ref:!0,__self:!0,__source:!0};function c(e,t,n){var r,o={},c=null,d=null;for(r in void 0!==n&&(c=""+n),void 0!==t.key&&(c=""+t.key),void 0!==t.ref&&(d=t.ref),t)a.call(t,r)&&!l.hasOwnProperty(r)&&(o[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===o[r]&&(o[r]=t[r]);return{$$typeof:i,type:e,key:c,ref:d,props:o,_owner:s.current}}t.jsx=c,t.jsxs=c},45263:(e,t,n)=>{"use strict";e.exports=n(62175)},83272:(e,t,n)=>{"use strict";e.exports=n.p+"static/media/README.ff93448fef94ea73029b.md"},69363:(e,t,n)=>{"use strict";e.exports=n.p+"static/media/logo.253548ecad509e29d940.png"},96369:(e,t,n)=>{"use strict";e.exports=n.p+"static/media/panel-1.8b8b6d38dde47cb968cd.png"},18126:(e,t,n)=>{"use strict";e.exports=n.p+"static/media/panel-2.82047203a7541d412288.png"},46601:()=>{},89214:()=>{},85568:()=>{},55024:()=>{},40361:function(e,t,n){"use strict";var r=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))((function(i,o){function s(e){try{l(r.next(e))}catch(t){o(t)}}function a(e){try{l(r.throw(e))}catch(t){o(t)}}function l(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(s,a)}l((r=r.apply(e,t||[])).next())}))},i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.scopePollingDetectionStrategy=t.BaseWalletAdapter=t.WalletReadyState=t.EventEmitter=void 0;const o=i(n(48449));t.EventEmitter=o.default;const s=n(74982);!function(e){e.Installed="Installed",e.NotDetected="NotDetected",e.Loadable="Loadable",e.Unsupported="Unsupported"}(t.WalletReadyState||(t.WalletReadyState={}));class a extends o.default{get connected(){return!!this.publicKey}prepareTransaction(e,t){return r(this,void 0,void 0,(function*(){const n=this.publicKey;if(!n)throw new s.WalletNotConnectedError;return e.feePayer=e.feePayer||n,e.recentBlockhash=e.recentBlockhash||(yield t.getRecentBlockhash("finalized")).blockhash,e}))}}t.BaseWalletAdapter=a,t.scopePollingDetectionStrategy=function(e){if("undefined"===typeof window||"undefined"===typeof document)return;const t=[];function n(){if(e())for(const e of t)e()}const r=setInterval(n,1e3);t.push((()=>clearInterval(r))),"loading"===document.readyState&&(document.addEventListener("DOMContentLoaded",n,{once:!0}),t.push((()=>document.removeEventListener("DOMContentLoaded",n)))),"complete"!==document.readyState&&(window.addEventListener("load",n,{once:!0}),t.push((()=>window.removeEventListener("load",n)))),n()}},74982:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.WalletWindowClosedError=t.WalletWindowBlockedError=t.WalletTimeoutError=t.WalletSignTransactionError=t.WalletSignMessageError=t.WalletSendTransactionError=t.WalletNotConnectedError=t.WalletKeypairError=t.WalletPublicKeyError=t.WalletAccountError=t.WalletDisconnectionError=t.WalletDisconnectedError=t.WalletConnectionError=t.WalletConfigError=t.WalletLoadError=t.WalletNotReadyError=t.WalletError=void 0;class n extends Error{constructor(e,t){super(e),this.error=t}}t.WalletError=n;t.WalletNotReadyError=class extends n{constructor(){super(...arguments),this.name="WalletNotReadyError"}};t.WalletLoadError=class extends n{constructor(){super(...arguments),this.name="WalletLoadError"}};t.WalletConfigError=class extends n{constructor(){super(...arguments),this.name="WalletConfigError"}};t.WalletConnectionError=class extends n{constructor(){super(...arguments),this.name="WalletConnectionError"}};t.WalletDisconnectedError=class extends n{constructor(){super(...arguments),this.name="WalletDisconnectedError"}};t.WalletDisconnectionError=class extends n{constructor(){super(...arguments),this.name="WalletDisconnectionError"}};t.WalletAccountError=class extends n{constructor(){super(...arguments),this.name="WalletAccountError"}};t.WalletPublicKeyError=class extends n{constructor(){super(...arguments),this.name="WalletPublicKeyError"}};t.WalletKeypairError=class extends n{constructor(){super(...arguments),this.name="WalletKeypairError"}};t.WalletNotConnectedError=class extends n{constructor(){super(...arguments),this.name="WalletNotConnectedError"}};t.WalletSendTransactionError=class extends n{constructor(){super(...arguments),this.name="WalletSendTransactionError"}};t.WalletSignMessageError=class extends n{constructor(){super(...arguments),this.name="WalletSignMessageError"}};t.WalletSignTransactionError=class extends n{constructor(){super(...arguments),this.name="WalletSignTransactionError"}};t.WalletTimeoutError=class extends n{constructor(){super(...arguments),this.name="WalletTimeoutError"}};t.WalletWindowBlockedError=class extends n{constructor(){super(...arguments),this.name="WalletWindowBlockedError"}};t.WalletWindowClosedError=class extends n{constructor(){super(...arguments),this.name="WalletWindowClosedError"}}},49778:function(e,t,n){"use strict";var r=this&&this.__createBinding||(Object.create?function(e,t,n,r){void 0===r&&(r=n);var i=Object.getOwnPropertyDescriptor(t,n);i&&!("get"in i?!t.__esModule:i.writable||i.configurable)||(i={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,r,i)}:function(e,t,n,r){void 0===r&&(r=n),e[r]=t[n]}),i=this&&this.__exportStar||function(e,t){for(var n in e)"default"===n||Object.prototype.hasOwnProperty.call(t,n)||r(t,e,n)};Object.defineProperty(t,"__esModule",{value:!0}),i(n(40361),t),i(n(74982),t),i(n(38382),t),i(n(7736),t)},38382:function(e,t,n){"use strict";var r=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))((function(i,o){function s(e){try{l(r.next(e))}catch(t){o(t)}}function a(e){try{l(r.throw(e))}catch(t){o(t)}}function l(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(s,a)}l((r=r.apply(e,t||[])).next())}))},i=this&&this.__rest||function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n};Object.defineProperty(t,"__esModule",{value:!0}),t.BaseMessageSignerWalletAdapter=t.BaseSignerWalletAdapter=void 0;const o=n(40361),s=n(74982);class a extends o.BaseWalletAdapter{sendTransaction(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return r(this,void 0,void 0,(function*(){let r=!0;try{try{e=yield this.prepareTransaction(e,t);const{signers:r}=n,o=i(n,["signers"]);(null===r||void 0===r?void 0:r.length)&&e.partialSign(...r);const s=(e=yield this.signTransaction(e)).serialize();return yield t.sendRawTransaction(s,o)}catch(o){if(o instanceof s.WalletSignTransactionError)throw r=!1,o;throw new s.WalletSendTransactionError(null===o||void 0===o?void 0:o.message,o)}}catch(o){throw r&&this.emit("error",o),o}}))}}t.BaseSignerWalletAdapter=a;t.BaseMessageSignerWalletAdapter=class extends a{}},7736:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.WalletAdapterNetwork=void 0,function(e){e.Mainnet="mainnet-beta",e.Testnet="testnet",e.Devnet="devnet"}(t.WalletAdapterNetwork||(t.WalletAdapterNetwork={}))}}]);
//# sourceMappingURL=src_bootstrap_app_tsx.dd0fee71.chunk.js.map