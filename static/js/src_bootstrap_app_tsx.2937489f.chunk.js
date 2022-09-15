/*! For license information please see src_bootstrap_app_tsx.2937489f.chunk.js.LICENSE.txt */
(globalThis.webpackChunkconnector_tester=globalThis.webpackChunkconnector_tester||[]).push([["src_bootstrap_app_tsx"],{45597:(e,t,r)=>{"use strict";Object.defineProperty(t,"X$",{value:!0}),Object.defineProperty(t,"jY",{enumerable:!0,get:function(){return a.default}}),t.h0=void 0,Object.defineProperty(t,"ng",{enumerable:!0,get:function(){return i.default}});var n=l(r(96369)),s=l(r(18126)),a=l(r(69363)),i=l(r(83272));function l(e){return e&&e.__esModule?e:{default:e}}const o=[n.default,s.default];t.h0=o},92991:(e,t,r)=>{"use strict";r.r(t),r.d(t,{Page:()=>ie,__esModule:()=>se.X$,logo:()=>se.jY,panels:()=>se.h0,readme:()=>se.ng});var n=r(55754),s=r(68275),a=r(92950),i=r(45055),l=r(32671),o=r(80754),c=r(45263);const d=()=>{const[e,t]=(0,a.useState)(""),[r,n]=(0,a.useState)("https://sentre.io/"),[s,i]=(0,a.useState)(""),d=(0,a.useMemo)((()=>s+"-iframe"),[s]),p=(0,a.useCallback)((()=>n(e)),[e]),u=(0,a.useCallback)((()=>{const e=document.getElementById(d);e&&(e.src+="")}),[d]);return(0,a.useEffect)((()=>new o.Gateway(window.sentre.wallet).terminate),[]),(0,c.jsxs)(l.Row,{gutter:[12,12],children:[(0,c.jsx)(l.Col,{span:8,children:(0,c.jsx)(l.Input,{value:s,onChange:e=>i(e.target.value||""),placeholder:"my_app_id"})}),(0,c.jsx)(l.Col,{span:16,children:(0,c.jsx)(l.Input,{value:e,onChange:e=>t(e.target.value||""),placeholder:"http://localhost:3000",suffix:(0,c.jsx)(l.Button,{type:"text",size:"small",onClick:e===r?u:p,disabled:!e,style:{marginRight:-7},children:e===r?"Refresh":"Save"})})}),(0,c.jsx)(l.Col,{span:24,children:(0,c.jsx)(l.Card,{bodyStyle:{padding:16,height:"calc(100vh - 206px)"},children:(0,c.jsx)("iframe",{id:d,src:r,title:"Senhub Connector Tester.",style:{height:"100%",width:"100%",border:"none",borderRadius:8},loading:"lazy",allowFullScreen:!0})})})]})};var p=r(69716),u=r(24214);class h extends a.Component{constructor(e){super(e),this.state={failed:!1}}componentDidUpdate(e){if(e.children!==this.props.children)return this.setState({failed:!1})}static getDerivedStateFromError(){return{failed:!0}}render(){const{failed:e}=this.state,{children:t,defaultChildren:r}=this.props;return e||!t?r:t}}const f=h,y=e=>{let{url:t,scope:r}=e;const n=(0,a.useCallback)((async e=>{const r=t.replace("index.js",""),n=await fetch(r+`${e}-asset-senhub.json`),s=await n.json();return Object.keys(s).forEach((e=>s[e]=(e=>{if("string"===typeof e)return r+e;if(Array.isArray(e))return e.map((e=>r+e));throw new Error("Invalid static asset")})(s[e]))),s}),[t]),{data:s}=(0,u.ZP)(r,n,{shouldRetryOnError:!1,revalidateOnFocus:!1,dedupingInterval:36e5});return s||{}},j=(0,a.forwardRef)(((e,t)=>{let{type:r="default",manifest:n,render:s}=e;const{[r]:i}=y(n);return(0,a.cloneElement)(s(i),t?{ref:t}:{})}));j.displayName="RemoteStatic";const m=(0,a.forwardRef)(((e,t)=>{let{type:r,appId:n,defaultData:i="",render:o}=e;const{url:d}=(0,s.useRegisterSelector)((e=>e[n]))||{url:""},p=(0,a.useMemo)((()=>({url:d,scope:n,module:"./static"})),[d,n]);return d?(0,c.jsx)(f,{defaultChildren:o(i),children:(0,c.jsx)(a.Suspense,{fallback:(0,c.jsx)(l.Spin,{size:"small"}),children:(0,c.jsx)(j,{type:r,manifest:p,render:o,ref:t})})}):null}));m.displayName="StaticLoader";const x=(0,a.forwardRef)(((e,t)=>{let{type:r="default",manifest:n,render:s}=e;const{[r]:i}=y(n);return(0,a.cloneElement)(s(i||[]),t?{ref:t}:{})}));x.displayName="RemoteMultiStatic";const g=(0,a.forwardRef)(((e,t)=>{let{type:r,appId:n,defaultData:i=[""],render:o}=e;const{url:d}=(0,s.useRegisterSelector)((e=>e[n]))||{url:""},p=(0,a.useMemo)((()=>({url:d,scope:n,module:"./static"})),[d,n]);return d?(0,c.jsx)(f,{defaultChildren:o(i),children:(0,c.jsx)(a.Suspense,{fallback:(0,c.jsx)(l.Spin,{size:"small"}),children:(0,c.jsx)(x,{type:r,manifest:p,render:o,ref:t})})}):null}));g.displayName="MultiStaticLoader";const b=e=>{let{avatarProps:t}=e;return(0,c.jsx)(l.Avatar,{...t,children:(0,c.jsx)(p.Z,{name:"image-outline"})})},w=e=>{let{src:t,appId:r,onClick:n=(()=>{}),size:a=64,name:i=!0}=e;const{name:o}=(0,s.useRegisterSelector)((e=>e[r]))||{name:"Unknown"};return(0,c.jsxs)(l.Space,{direction:"vertical",style:{width:a,textAlign:"center",lineHeight:1.25},onClick:n,children:[(0,c.jsx)(b,{appId:r,avatarProps:{src:t,shape:"square",size:a,style:{cursor:"pointer"}}}),i?(0,c.jsx)(l.Typography.Text,{style:{fontSize:Math.floor(a/4.5)},children:o}):null]})},v=e=>{let{src:t,appId:r,onClick:n=(()=>{}),size:a=32,name:i=!0}=e;const{name:o}=(0,s.useRegisterSelector)((e=>e[r]))||{name:"Unknown"};return(0,c.jsxs)(l.Space,{style:{cursor:"pointer",lineHeight:1},onClick:n,children:[(0,c.jsx)(b,{appId:r,avatarProps:{src:t,shape:"square",size:a,style:{cursor:"pointer"}}}),i?(0,c.jsx)(l.Typography.Text,{children:o}):null]})},C=e=>{let{direction:t="vertical",...r}=e;return"vertical"===t?(0,c.jsx)(w,{...r}):(0,c.jsx)(v,{...r})},S=e=>(0,c.jsx)(m,{type:"logo",appId:e.appId,render:t=>(0,c.jsx)(C,{...e,src:t})});var k=r(19289),O=r(21995),A=r.n(O);const R={appId:"connector_tester",url:"https://tuphan-dn.github.io/connector-tester/index.js"},T={development:{...R},production:{...R}},I=e=>({origin:e,dapp:{index:e+"/dapp",get author(){return this.index+"/author"},get verify(){return this.index+"/verify"}}}),E={development:{adminAddresses:["8W6QginLcAydYyMYjxuyKQN56NzeakDE3aRFrAmocS6D"],...I("https://api.sentre.io")},production:{adminAddresses:["8W6QginLcAydYyMYjxuyKQN56NzeakDE3aRFrAmocS6D"],...I("https://api.sentre.io")}},_={manifest:T[s.env],api:E[s.env]},{api:{dapp:D}}=_,P="dapp",M=(0,k.createAsyncThunk)("dapp/getDApps",(async()=>{const{data:e}=await A().get(D.author,{withCredentials:!0}),t={};return e.forEach((e=>t[e.appId]=e)),t})),z=(0,k.createAsyncThunk)("dapp/submitDApp",(async e=>{const{data:t}=await A().put(D.index,e,{withCredentials:!0});return{[t.appId]:t}})),N=(0,k.createAsyncThunk)("dapp/deleteDApp",(async e=>(await A().delete(`${D.index}/${e}`,{withCredentials:!0}),{appId:e}))),$=(0,k.createSlice)({name:P,initialState:{},reducers:{},extraReducers:e=>{e.addCase(M.fulfilled,((e,t)=>{let{payload:r}=t;Object.assign(e,r)})).addCase(z.fulfilled,((e,t)=>{let{payload:r}=t;Object.assign(e,r)})).addCase(N.fulfilled,((e,t)=>{let{payload:r}=t;delete e[r.appId]}))}}).reducer,{api:{dapp:L}}=_,B="admin",U=(0,k.createAsyncThunk)("admin/getAllDApps",(async()=>{const{data:e}=await A().get(L.index,{withCredentials:!0}),t={};return e.forEach((e=>t[e.appId]=e)),t})),F=(0,k.createAsyncThunk)("admin/verifyDApp",(async e=>{const{data:t}=await A().post(L.verify,e,{withCredentials:!0});return{[t.appId]:t}})),Y=(0,k.createSlice)({name:B,initialState:{},reducers:{},extraReducers:e=>{e.addCase(U.fulfilled,((e,t)=>{let{payload:r}=t;Object.assign(e,r)})).addCase(F.fulfilled,((e,t)=>{let{payload:r}=t;Object.assign(e,r)}))}}).reducer,Z=e=>{let{appId:t,isAdmin:r=!1}=e;const[s,i]=(0,a.useState)(!1),o=(0,n.useDispatch)(),{name:d,description:u,verified:h}=(0,n.useSelector)((e=>r?e.admin[t]:e.dapp[t]))||{},f=(0,a.useCallback)((async()=>{try{return i(!0),await o(N(t)).unwrap(),window.notify({type:"success",description:`Delist ${d}!`})}catch(e){return window.notify({type:"error",description:e.message})}finally{return i(!1)}}),[o,t,d]),y=(0,a.useCallback)((async e=>{try{i(!0),await o(F({appId:t,verified:e})).unwrap();const r=e?"Verify":"Unverify";return window.notify({type:"success",description:`${r} ${d}!`})}catch(r){return window.notify({type:"error",description:r.message})}finally{return i(!1)}}),[o,t,d]);return(0,c.jsx)(l.Card,{bodyStyle:{padding:24},children:(0,c.jsxs)(l.Row,{gutter:[12,12],wrap:!1,align:"middle",children:[(0,c.jsx)(l.Col,{children:(0,c.jsx)(S,{appId:t,name:!1})}),(0,c.jsx)(l.Col,{flex:"auto",children:(0,c.jsxs)(l.Space,{direction:"vertical",children:[(0,c.jsx)(l.Typography.Title,{level:5,children:d}),(0,c.jsx)(l.Typography.Text,{children:u})]})}),(0,c.jsx)(l.Col,{children:r?(0,c.jsx)(l.Switch,{checked:h,onChange:y,size:"small",loading:s}):(0,c.jsxs)(l.Space,{children:[h&&(0,c.jsx)(l.Button,{type:"text",icon:(0,c.jsx)(p.Z,{name:"checkmark-circle"})}),(0,c.jsx)(l.Button,{type:"text",icon:(0,c.jsx)(p.Z,{name:"trash-outline"}),onClick:f,loading:s})]})})]})})},W=()=>{const e=(0,n.useDispatch)(),t=(0,n.useSelector)((e=>e.dapp)),r=(0,a.useMemo)((()=>Object.keys(t)),[t]);return(0,a.useEffect)((()=>{e(M())}),[e]),(0,c.jsxs)(l.Row,{gutter:[12,12],justify:"center",children:[(0,c.jsx)(l.Col,{span:24,children:(0,c.jsx)(l.Typography.Title,{level:4,children:`My DApps (${r.length})`})}),r.length?r.map((e=>(0,c.jsx)(l.Col,{span:24,children:(0,c.jsx)(Z,{appId:e})},e))):(0,c.jsx)(l.Col,{children:(0,c.jsx)(l.Empty,{})})]})},q=()=>{const[e,t]=(0,a.useState)(!1),[r,i]=(0,a.useState)([]),o=(0,n.useDispatch)(),d=(0,s.useWalletAddress)(),u=(0,a.useMemo)((()=>{var e;return null===(e=r[0])||void 0===e?void 0:e.originFileObj}),[r]),h=(0,a.useCallback)((async e=>{try{if(e.stopPropagation(),t(!0),!u)throw new Error("Cannot submit empty file");const r=await(e=>new Promise(((t,r)=>{const n=new FileReader;n.onload=e=>{var n;if(null===(n=e.target)||void 0===n||!n.result)return r("Cannot read empty file");const s=JSON.parse(e.target.result.toString());return t(s)},n.onerror=r,n.readAsText(e)})))(u);return await o(z({...r,author:{...r.author,walletAddress:d}})),i([]),window.notify({type:"success",description:`Complete the ${r.name} submission!`})}catch(r){return window.notify({type:"error",description:r.message})}finally{return t(!1)}}),[o,d,u]);return(0,a.useEffect)((()=>{o(M())}),[o]),(0,c.jsxs)(l.Row,{gutter:[12,12],justify:"center",children:[(0,c.jsx)(l.Col,{xs:24,md:18,children:(0,c.jsx)(l.Upload.Dragger,{accept:".json",beforeUpload:()=>!1,onRemove:()=>(i([]),!0),onChange:e=>{let{fileList:t}=e;return i(t)},fileList:r,maxCount:1,children:(0,c.jsxs)(l.Space,{direction:"vertical",size:"large",align:"center",children:[(0,c.jsx)(l.Typography.Title,{level:3,children:"Click or Drop file to upload the Manifest"}),(0,c.jsxs)(l.Typography.Text,{children:["The accepted file type is only ",(0,c.jsx)("code",{children:".json"}),"."]}),(0,c.jsxs)(l.Space,{children:[(0,c.jsx)(l.Button,{icon:(0,c.jsx)(p.Z,{name:"cloud-upload-outline"}),children:"Upload"}),u&&(0,c.jsx)(l.Button,{type:"primary",icon:(0,c.jsx)(p.Z,{name:"paper-plane-outline"}),onClick:h,loading:e,children:"Submit"})]})]})})}),(0,c.jsx)(l.Col,{xs:24}),(0,c.jsx)(l.Col,{xs:24,md:18,children:(0,c.jsx)(W,{})}),(0,c.jsx)(l.Col,{xs:24})]})},Q=()=>{const e=(0,n.useDispatch)(),t=(0,n.useSelector)((e=>e.admin)),r=(0,a.useMemo)((()=>Object.keys(t)),[t]);return(0,a.useEffect)((()=>{e(U())}),[e]),(0,c.jsx)(l.Row,{gutter:[12,12],justify:"center",children:(0,c.jsx)(l.Col,{xs:24,md:18,children:(0,c.jsxs)(l.Row,{gutter:[12,12],justify:"center",children:[(0,c.jsx)(l.Col,{span:24,children:(0,c.jsx)(l.Typography.Title,{level:4,children:`All DApps (${r.length})`})}),r.length?r.map((e=>(0,c.jsx)(l.Col,{span:24,children:(0,c.jsx)(Z,{appId:e,isAdmin:!0})},e))):(0,c.jsx)(l.Col,{children:(0,c.jsx)(l.Empty,{})})]})})})},{api:{adminAddresses:K}}=_;let H;!function(e){e.Tester="connector-tester",e.Submission="dapp-submission",e.Administrator="administrator"}(H||(H={}));const J=e=>{let{type:t=H.Tester}=e;return t===H.Submission?(0,c.jsx)(q,{}):t===H.Administrator?(0,c.jsx)(Q,{}):(0,c.jsx)(d,{})},X=()=>{const{to:e}=(0,s.useAppRoute)(),{search:t}=(0,i.useLocation)(),r=(0,s.useWalletAddress)(),n=(0,a.useMemo)((()=>K.includes(r)),[r]),o=(0,a.useMemo)((()=>{const e=[{label:"Connector Tester",value:H.Tester},{label:"DApp Submission",value:H.Submission}];return n&&e.push({label:"Administrator",value:H.Administrator}),e}),[n]),d=(0,a.useMemo)((()=>{const e=new URLSearchParams(t).get("tab");return Object.values(H).includes(e)?e:H.Tester}),[t]),p=(0,a.useCallback)((t=>e(`?tab=${t}`)),[e]);return(0,c.jsxs)(l.Row,{gutter:[24,24],children:[(0,c.jsx)(l.Col,{span:24,children:(0,c.jsx)(l.Row,{gutter:[24,24],justify:"center",children:(0,c.jsx)(l.Col,{children:(0,c.jsx)(l.Segmented,{options:o,value:d,onChange:e=>p(e)})})})}),(0,c.jsx)(l.Col,{span:24,children:(0,c.jsx)(J,{type:d})})]})};var G=r(71256),V=r(48744),ee=r.n(V),te=r(97429).Buffer;BigInt.prototype.toJSON=function(){return this.toString()};const re={serializableCheck:{isSerializable:e=>"undefined"===typeof e||null===e||"string"===typeof e||"boolean"===typeof e||"number"===typeof e||Array.isArray(e)||(e=>{if(null===e)return!1;const t=Object.getPrototypeOf(e);return null!==t&&null===Object.getPrototypeOf(t)})(e)||"bigint"===typeof e||e instanceof G.PublicKey||e instanceof ee()||te.isBuffer(e)}},ne=(0,k.configureStore)({middleware:e=>e(re),devTools:!1,reducer:{dapp:$,admin:Y}});var se=r(45597);const{manifest:{appId:ae}}=_,ie=()=>(0,c.jsx)(s.AntdProvider,{appId:ae,children:(0,c.jsx)(n.Provider,{store:ne,children:(0,c.jsx)(X,{})})})},25882:e=>{"use strict";var t=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable;function s(e){if(null===e||void 0===e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},r=0;r<10;r++)t["_"+String.fromCharCode(r)]=r;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach((function(e){n[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(s){return!1}}()?Object.assign:function(e,a){for(var i,l,o=s(e),c=1;c<arguments.length;c++){for(var d in i=Object(arguments[c]))r.call(i,d)&&(o[d]=i[d]);if(t){l=t(i);for(var p=0;p<l.length;p++)n.call(i,l[p])&&(o[l[p]]=i[l[p]])}}return o}},62175:(e,t,r)=>{"use strict";r(25882);var n=r(92950),s=60103;if(60107,"function"===typeof Symbol&&Symbol.for){var a=Symbol.for;s=a("react.element"),a("react.fragment")}var i=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l=Object.prototype.hasOwnProperty,o={key:!0,ref:!0,__self:!0,__source:!0};function c(e,t,r){var n,a={},c=null,d=null;for(n in void 0!==r&&(c=""+r),void 0!==t.key&&(c=""+t.key),void 0!==t.ref&&(d=t.ref),t)l.call(t,n)&&!o.hasOwnProperty(n)&&(a[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps)void 0===a[n]&&(a[n]=t[n]);return{$$typeof:s,type:e,key:c,ref:d,props:a,_owner:i.current}}t.jsx=c,t.jsxs=c},45263:(e,t,r)=>{"use strict";e.exports=r(62175)},83272:(e,t,r)=>{"use strict";e.exports=r.p+"static/media/README.ff93448fef94ea73029b.md"},69363:(e,t,r)=>{"use strict";e.exports=r.p+"static/media/logo.253548ecad509e29d940.png"},96369:(e,t,r)=>{"use strict";e.exports=r.p+"static/media/panel-1.8b8b6d38dde47cb968cd.png"},18126:(e,t,r)=>{"use strict";e.exports=r.p+"static/media/panel-2.82047203a7541d412288.png"},7420:()=>{},95856:()=>{},46601:()=>{},89214:()=>{},85568:()=>{},55024:()=>{}}]);
//# sourceMappingURL=src_bootstrap_app_tsx.2937489f.chunk.js.map