(globalThis.webpackChunkconnector_tester=globalThis.webpackChunkconnector_tester||[]).push([["src_bootstrap_app_tsx"],{45597:(e,t,r)=>{"use strict";Object.defineProperty(t,"X$",{value:!0}),Object.defineProperty(t,"jY",{enumerable:!0,get:function(){return a.default}}),t.h0=void 0,Object.defineProperty(t,"ng",{enumerable:!0,get:function(){return i.default}});var s=l(r(96369)),n=l(r(18126)),a=l(r(69363)),i=l(r(83272));function l(e){return e&&e.__esModule?e:{default:e}}const o=[s.default,n.default];t.h0=o},92991:(e,t,r)=>{"use strict";r.r(t),r.d(t,{Page:()=>ie,__esModule:()=>ne.X$,logo:()=>ne.jY,panels:()=>ne.h0,readme:()=>ne.ng});var s=r(55754),n=r(68275),a=r(92950),i=r(45055),l=r(32671),o=r(80754),d=r(45263);const c=()=>{const[e,t]=(0,a.useState)(""),[r,s]=(0,a.useState)("https://sentre.io/"),[n,i]=(0,a.useState)(""),c=(0,a.useMemo)((()=>n+"-iframe"),[n]),p=(0,a.useCallback)((()=>s(e)),[e]),u=(0,a.useCallback)((()=>{const e=document.getElementById(c);e&&(e.src+="")}),[c]);return(0,a.useEffect)((()=>new o.Gateway(window.sentre.wallet).terminate),[]),(0,d.jsxs)(l.Row,{gutter:[12,12],children:[(0,d.jsx)(l.Col,{span:8,children:(0,d.jsx)(l.Input,{value:n,onChange:e=>i(e.target.value||""),placeholder:"my_app_id"})}),(0,d.jsx)(l.Col,{span:16,children:(0,d.jsx)(l.Input,{value:e,onChange:e=>t(e.target.value||""),placeholder:"http://localhost:3000",suffix:(0,d.jsx)(l.Button,{type:"text",size:"small",onClick:e===r?u:p,disabled:!e,style:{marginRight:-7},children:e===r?"Refresh":"Save"})})}),(0,d.jsx)(l.Col,{span:24,children:(0,d.jsx)(l.Card,{bodyStyle:{padding:16,height:"calc(100vh - 206px)"},children:(0,d.jsx)("iframe",{id:c,src:r,title:"Senhub Connector Tester.",style:{height:"100%",width:"100%",border:"none",borderRadius:8},loading:"lazy",allowFullScreen:!0})})})]})};var p=r(69716),u=r(24214);class h extends a.Component{constructor(e){super(e),this.state={failed:!1}}componentDidUpdate(e){if(e.children!==this.props.children)return this.setState({failed:!1})}static getDerivedStateFromError(){return{failed:!0}}render(){const{failed:e}=this.state,{children:t,defaultChildren:r}=this.props;return e||!t?r:t}}const y=h,f=e=>{let{url:t,scope:r}=e;const s=(0,a.useCallback)((async e=>{const r=t.replace("index.js",""),s=await fetch(r+`${e}-asset-senhub.json`),n=await s.json();return Object.keys(n).forEach((e=>n[e]=(e=>{if("string"===typeof e)return r+e;if(Array.isArray(e))return e.map((e=>r+e));throw new Error("Invalid static asset")})(n[e]))),n}),[t]),{data:n}=(0,u.ZP)(r,s,{shouldRetryOnError:!1,revalidateOnFocus:!1,dedupingInterval:36e5});return n||{}},x=(0,a.forwardRef)(((e,t)=>{let{type:r="default",manifest:s,render:n}=e;const{[r]:i}=f(s);return(0,a.cloneElement)(n(i),t?{ref:t}:{})}));x.displayName="RemoteStatic";const j=(0,a.forwardRef)(((e,t)=>{let{type:r,appId:s,defaultData:i="",render:o}=e;const{url:c}=(0,n.useRegisterSelector)((e=>e[s]))||{url:""},p=(0,a.useMemo)((()=>({url:c,scope:s,module:"./static"})),[c,s]);return c?(0,d.jsx)(y,{defaultChildren:o(i),children:(0,d.jsx)(a.Suspense,{fallback:(0,d.jsx)(l.Spin,{size:"small"}),children:(0,d.jsx)(x,{type:r,manifest:p,render:o,ref:t})})}):null}));j.displayName="StaticLoader";const m=(0,a.forwardRef)(((e,t)=>{let{type:r="default",manifest:s,render:n}=e;const{[r]:i}=f(s);return(0,a.cloneElement)(n(i||[]),t?{ref:t}:{})}));m.displayName="RemoteMultiStatic";const g=(0,a.forwardRef)(((e,t)=>{let{type:r,appId:s,defaultData:i=[""],render:o}=e;const{url:c}=(0,n.useRegisterSelector)((e=>e[s]))||{url:""},p=(0,a.useMemo)((()=>({url:c,scope:s,module:"./static"})),[c,s]);return c?(0,d.jsx)(y,{defaultChildren:o(i),children:(0,d.jsx)(a.Suspense,{fallback:(0,d.jsx)(l.Spin,{size:"small"}),children:(0,d.jsx)(m,{type:r,manifest:p,render:o,ref:t})})}):null}));g.displayName="MultiStaticLoader";const w=e=>{let{avatarProps:t}=e;return(0,d.jsx)(l.Avatar,{...t,children:(0,d.jsx)(p.Z,{name:"image-outline"})})},C=e=>{let{src:t,appId:r,onClick:s=(()=>{}),size:a=64,name:i=!0}=e;const{name:o}=(0,n.useRegisterSelector)((e=>e[r]))||{name:"Unknown"};return(0,d.jsxs)(l.Space,{direction:"vertical",style:{width:a,textAlign:"center",lineHeight:1.25},onClick:s,children:[(0,d.jsx)(w,{appId:r,avatarProps:{src:t,shape:"square",size:a,style:{cursor:"pointer"}}}),i?(0,d.jsx)(l.Typography.Text,{style:{fontSize:Math.floor(a/4.5)},children:o}):null]})},b=e=>{let{src:t,appId:r,onClick:s=(()=>{}),size:a=32,name:i=!0}=e;const{name:o}=(0,n.useRegisterSelector)((e=>e[r]))||{name:"Unknown"};return(0,d.jsxs)(l.Space,{style:{cursor:"pointer",lineHeight:1},onClick:s,children:[(0,d.jsx)(w,{appId:r,avatarProps:{src:t,shape:"square",size:a,style:{cursor:"pointer"}}}),i?(0,d.jsx)(l.Typography.Text,{children:o}):null]})},v=e=>{let{direction:t="vertical",...r}=e;return"vertical"===t?(0,d.jsx)(C,{...r}):(0,d.jsx)(b,{...r})},S=e=>(0,d.jsx)(j,{type:"logo",appId:e.appId,render:t=>(0,d.jsx)(v,{...e,src:t})});var A=r(19289),k=r(21995),T=r.n(k);const R={appId:"connector_tester",url:"https://tuphan-dn.github.io/connector-tester/index.js"},I={development:{...R},production:{...R}},D=e=>({origin:e,dapp:{index:e+"/dapp",get author(){return this.index+"/author"},get verify(){return this.index+"/verify"}}}),E={development:{adminAddresses:["8W6QginLcAydYyMYjxuyKQN56NzeakDE3aRFrAmocS6D"],...D("https://api.sentre.io")},production:{adminAddresses:["8W6QginLcAydYyMYjxuyKQN56NzeakDE3aRFrAmocS6D"],...D("https://api.sentre.io")}},O={manifest:I[n.env],api:E[n.env]},{api:{dapp:M}}=O,P="dapp",z=(0,A.createAsyncThunk)("dapp/getDApps",(async()=>{const{data:e}=await T().get(M.author,{withCredentials:!0}),t={};return e.forEach((e=>t[e.appId]=e)),t})),$=(0,A.createAsyncThunk)("dapp/submitDApp",(async e=>{const{data:t}=await T().put(M.index,e,{withCredentials:!0});return{[t.appId]:t}})),_=(0,A.createAsyncThunk)("dapp/deleteDApp",(async e=>(await T().delete(`${M.index}/${e}`,{withCredentials:!0}),{appId:e}))),N=(0,A.createSlice)({name:P,initialState:{},reducers:{},extraReducers:e=>{e.addCase(z.fulfilled,((e,t)=>{let{payload:r}=t;Object.assign(e,r)})).addCase($.fulfilled,((e,t)=>{let{payload:r}=t;Object.assign(e,r)})).addCase(_.fulfilled,((e,t)=>{let{payload:r}=t;delete e[r.appId]}))}}).reducer,{api:{dapp:B}}=O,L="admin",U=(0,A.createAsyncThunk)("admin/getAllDApps",(async()=>{const{data:e}=await T().get(B.index,{withCredentials:!0}),t={};return e.forEach((e=>t[e.appId]=e)),t})),F=(0,A.createAsyncThunk)("admin/verifyDApp",(async e=>{const{data:t}=await T().post(B.verify,e,{withCredentials:!0});return{[t.appId]:t}})),Y=(0,A.createSlice)({name:L,initialState:{},reducers:{},extraReducers:e=>{e.addCase(U.fulfilled,((e,t)=>{let{payload:r}=t;Object.assign(e,r)})).addCase(F.fulfilled,((e,t)=>{let{payload:r}=t;Object.assign(e,r)}))}}).reducer,Z=e=>{let{appId:t,isAdmin:r=!1}=e;const[n,i]=(0,a.useState)(!1),o=(0,s.useDispatch)(),{name:c,description:u,verified:h}=(0,s.useSelector)((e=>r?e.admin[t]:e.dapp[t]))||{},y=(0,a.useCallback)((async()=>{try{return i(!0),await o(_(t)).unwrap(),window.notify({type:"success",description:`Delist ${c}!`})}catch(e){return window.notify({type:"error",description:e.message})}finally{return i(!1)}}),[o,t,c]),f=(0,a.useCallback)((async e=>{try{i(!0),await o(F({appId:t,verified:e})).unwrap();const r=e?"Verify":"Unverify";return window.notify({type:"success",description:`${r} ${c}!`})}catch(r){return window.notify({type:"error",description:r.message})}finally{return i(!1)}}),[o,t,c]);return(0,d.jsx)(l.Card,{bodyStyle:{padding:24},children:(0,d.jsxs)(l.Row,{gutter:[12,12],wrap:!1,align:"middle",children:[(0,d.jsx)(l.Col,{children:(0,d.jsx)(S,{appId:t,name:!1})}),(0,d.jsx)(l.Col,{flex:"auto",children:(0,d.jsxs)(l.Space,{direction:"vertical",children:[(0,d.jsx)(l.Typography.Title,{level:5,children:c}),(0,d.jsx)(l.Typography.Text,{children:u})]})}),(0,d.jsx)(l.Col,{children:r?(0,d.jsx)(l.Switch,{checked:h,onChange:f,size:"small",loading:n}):(0,d.jsxs)(l.Space,{children:[h&&(0,d.jsx)(l.Button,{type:"text",icon:(0,d.jsx)(p.Z,{name:"checkmark-circle"})}),(0,d.jsx)(l.Button,{type:"text",icon:(0,d.jsx)(p.Z,{name:"trash-outline"}),onClick:y,loading:n})]})})]})})},Q=()=>{const e=(0,s.useDispatch)(),t=(0,s.useSelector)((e=>e.dapp)),r=(0,a.useMemo)((()=>Object.keys(t)),[t]);return(0,a.useEffect)((()=>{e(z())}),[e]),(0,d.jsxs)(l.Row,{gutter:[12,12],justify:"center",children:[(0,d.jsx)(l.Col,{span:24,children:(0,d.jsx)(l.Typography.Title,{level:4,children:`My DApps (${r.length})`})}),r.length?r.map((e=>(0,d.jsx)(l.Col,{span:24,children:(0,d.jsx)(Z,{appId:e})},e))):(0,d.jsx)(l.Col,{children:(0,d.jsx)(l.Empty,{})})]})},W=()=>{const[e,t]=(0,a.useState)(!1),[r,i]=(0,a.useState)([]),o=(0,s.useDispatch)(),c=(0,n.useWalletAddress)(),u=(0,a.useMemo)((()=>{var e;return null===(e=r[0])||void 0===e?void 0:e.originFileObj}),[r]),h=(0,a.useCallback)((async e=>{try{if(e.stopPropagation(),t(!0),!u)throw new Error("Cannot submit empty file");const r=await(e=>new Promise(((t,r)=>{const s=new FileReader;s.onload=e=>{var s;if(null===(s=e.target)||void 0===s||!s.result)return r("Cannot read empty file");const n=JSON.parse(e.target.result.toString());return t(n)},s.onerror=r,s.readAsText(e)})))(u);return await o($({...r,author:{...r.author,walletAddress:c}})),i([]),window.notify({type:"success",description:`Complete the ${r.name} submission!`})}catch(r){return window.notify({type:"error",description:r.message})}finally{return t(!1)}}),[o,c,u]);return(0,a.useEffect)((()=>{o(z())}),[o]),(0,d.jsxs)(l.Row,{gutter:[12,12],justify:"center",children:[(0,d.jsx)(l.Col,{xs:24,md:18,children:(0,d.jsx)(l.Upload.Dragger,{accept:".json",beforeUpload:()=>!1,onRemove:()=>(i([]),!0),onChange:e=>{let{fileList:t}=e;return i(t)},fileList:r,maxCount:1,children:(0,d.jsxs)(l.Space,{direction:"vertical",size:"large",align:"center",children:[(0,d.jsx)(l.Typography.Title,{level:3,children:"Click or Drop file to upload the Manifest"}),(0,d.jsxs)(l.Typography.Text,{children:["The accepted file type is only ",(0,d.jsx)("code",{children:".json"}),"."]}),(0,d.jsxs)(l.Space,{children:[(0,d.jsx)(l.Button,{icon:(0,d.jsx)(p.Z,{name:"cloud-upload-outline"}),children:"Upload"}),u&&(0,d.jsx)(l.Button,{type:"primary",icon:(0,d.jsx)(p.Z,{name:"paper-plane-outline"}),onClick:h,loading:e,children:"Submit"})]})]})})}),(0,d.jsx)(l.Col,{xs:24}),(0,d.jsx)(l.Col,{xs:24,md:18,children:(0,d.jsx)(Q,{})}),(0,d.jsx)(l.Col,{xs:24})]})},K=()=>{const e=(0,s.useDispatch)(),t=(0,s.useSelector)((e=>e.admin)),r=(0,a.useMemo)((()=>Object.keys(t)),[t]);return(0,a.useEffect)((()=>{e(U())}),[e]),(0,d.jsx)(l.Row,{gutter:[12,12],justify:"center",children:(0,d.jsx)(l.Col,{xs:24,md:18,children:(0,d.jsxs)(l.Row,{gutter:[12,12],justify:"center",children:[(0,d.jsx)(l.Col,{span:24,children:(0,d.jsx)(l.Typography.Title,{level:4,children:`All DApps (${r.length})`})}),r.length?r.map((e=>(0,d.jsx)(l.Col,{span:24,children:(0,d.jsx)(Z,{appId:e,isAdmin:!0})},e))):(0,d.jsx)(l.Col,{children:(0,d.jsx)(l.Empty,{})})]})})})},{api:{adminAddresses:q}}=O;let H;!function(e){e.Tester="connector-tester",e.Submission="dapp-submission",e.Administrator="administrator"}(H||(H={}));const J=e=>{let{type:t=H.Tester}=e;return t===H.Submission?(0,d.jsx)(W,{}):t===H.Administrator?(0,d.jsx)(K,{}):(0,d.jsx)(c,{})},X=()=>{const{to:e}=(0,n.useAppRoute)(),{search:t}=(0,i.useLocation)(),r=(0,n.useWalletAddress)(),s=(0,a.useMemo)((()=>q.includes(r)),[r]),o=(0,a.useMemo)((()=>{const e=[{label:"Connector Tester",value:H.Tester},{label:"DApp Submission",value:H.Submission}];return s&&e.push({label:"Administrator",value:H.Administrator}),e}),[s]),c=(0,a.useMemo)((()=>{const e=new URLSearchParams(t).get("tab");return Object.values(H).includes(e)?e:H.Tester}),[t]),p=(0,a.useCallback)((t=>e(`?tab=${t}`)),[e]);return(0,d.jsxs)(l.Row,{gutter:[24,24],children:[(0,d.jsx)(l.Col,{span:24,children:(0,d.jsx)(l.Row,{gutter:[24,24],justify:"center",children:(0,d.jsx)(l.Col,{children:(0,d.jsx)(l.Segmented,{options:o,value:c,onChange:e=>p(e)})})})}),(0,d.jsx)(l.Col,{span:24,children:(0,d.jsx)(J,{type:c})})]})};var G=r(71256),V=r(48744),ee=r.n(V),te=r(97429).Buffer;BigInt.prototype.toJSON=function(){return this.toString()};const re={serializableCheck:{isSerializable:e=>"undefined"===typeof e||null===e||"string"===typeof e||"boolean"===typeof e||"number"===typeof e||Array.isArray(e)||(e=>{if(null===e)return!1;const t=Object.getPrototypeOf(e);return null!==t&&null===Object.getPrototypeOf(t)})(e)||"bigint"===typeof e||e instanceof G.PublicKey||e instanceof ee()||te.isBuffer(e)}},se=(0,A.configureStore)({middleware:e=>e(re),devTools:!1,reducer:{dapp:N,admin:Y}});var ne=r(45597);const{manifest:{appId:ae}}=O,ie=()=>(0,d.jsx)(n.AntdProvider,{appId:ae,children:(0,d.jsx)(s.Provider,{store:se,children:(0,d.jsx)(X,{})})})},83272:(e,t,r)=>{"use strict";e.exports=r.p+"static/media/README.ff93448fef94ea73029b.md"},69363:(e,t,r)=>{"use strict";e.exports=r.p+"static/media/logo.253548ecad509e29d940.png"},96369:(e,t,r)=>{"use strict";e.exports=r.p+"static/media/panel-1.8b8b6d38dde47cb968cd.png"},18126:(e,t,r)=>{"use strict";e.exports=r.p+"static/media/panel-2.82047203a7541d412288.png"},7420:()=>{},95856:()=>{},46601:()=>{},89214:()=>{},85568:()=>{},55024:()=>{}}]);
//# sourceMappingURL=src_bootstrap_app_tsx.a194fb5f.chunk.js.map