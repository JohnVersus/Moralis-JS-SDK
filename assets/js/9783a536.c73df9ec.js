"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9455],{3905:(e,t,r)=>{r.d(t,{Zo:()=>m,kt:()=>c});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),p=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},m=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),u=p(r),c=n,k=u["".concat(s,".").concat(c)]||u[c]||d[c]||o;return r?a.createElement(k,l(l({ref:t},m),{},{components:r})):a.createElement(k,l({ref:t},m))}));function c(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,l=new Array(o);l[0]=u;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:n,l[1]=i;for(var p=2;p<o;p++)l[p]=r[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},3369:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var a=r(7462),n=(r(7294),r(3905));const o={slug:"/moralisweb3/common-core/operationrequestvalidator",title:"Class: OperationRequestValidator<Request>",sidebar_label:"OperationRequestValidator<Request>"},l=void 0,i={unversionedId:"api/moralisweb3/common-core/operationrequestvalidator",id:"api/moralisweb3/common-core/operationrequestvalidator",title:"Class: OperationRequestValidator<Request>",description:"moralis-monorepo / @moralisweb3/common-core / OperationRequestValidator",source:"@site/docs/api/moralisweb3/common-core/operationrequestvalidator.md",sourceDirName:"api/moralisweb3/common-core",slug:"/moralisweb3/common-core/operationrequestvalidator",permalink:"/Moralis-JS-SDK/moralisweb3/common-core/operationrequestvalidator",draft:!1,tags:[],version:"current",frontMatter:{slug:"/moralisweb3/common-core/operationrequestvalidator",title:"Class: OperationRequestValidator<Request>",sidebar_label:"OperationRequestValidator<Request>"},sidebar:"sidebar",previous:{title:"Operation<Request, JSONRequest, Response, JSONResponse>",permalink:"/Moralis-JS-SDK/moralisweb3/common-core/operation"},next:{title:"OperationType",permalink:"/Moralis-JS-SDK/moralisweb3/common-core/operationtype"}},s={},p=[{value:"Type parameters",id:"type-parameters",level:2},{value:"Table of contents",id:"table-of-contents",level:2},{value:"Constructors",id:"constructors",level:3},{value:"Methods",id:"methods",level:3},{value:"Constructors",id:"constructors-1",level:2},{value:"constructor",id:"constructor",level:3},{value:"Type parameters",id:"type-parameters-1",level:4},{value:"Parameters",id:"parameters",level:4},{value:"Methods",id:"methods-1",level:2},{value:"validate",id:"validate",level:3},{value:"Parameters",id:"parameters-1",level:4},{value:"Returns",id:"returns",level:4}],m={toc:p};function d(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/Moralis-JS-SDK/modules"},"moralis-monorepo")," / ",(0,n.kt)("a",{parentName:"p",href:"/Moralis-JS-SDK/moralisweb3/common-core/index"},"@moralisweb3/common-core")," / OperationRequestValidator"),(0,n.kt)("h1",{id:"class-operationrequestvalidatorrequest"},"Class: OperationRequestValidator<Request",">"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/Moralis-JS-SDK/moralisweb3/common-core/index"},"@moralisweb3/common-core"),".OperationRequestValidator"),(0,n.kt)("h2",{id:"type-parameters"},"Type parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Name"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"Request"))))),(0,n.kt)("h2",{id:"table-of-contents"},"Table of contents"),(0,n.kt)("h3",{id:"constructors"},"Constructors"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/Moralis-JS-SDK/moralisweb3/common-core/operationrequestvalidator#constructor"},"constructor"))),(0,n.kt)("h3",{id:"methods"},"Methods"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/Moralis-JS-SDK/moralisweb3/common-core/operationrequestvalidator#validate"},"validate"))),(0,n.kt)("h2",{id:"constructors-1"},"Constructors"),(0,n.kt)("h3",{id:"constructor"},"constructor"),(0,n.kt)("p",null,"\u2022 ",(0,n.kt)("strong",{parentName:"p"},"new OperationRequestValidator"),"<",(0,n.kt)("inlineCode",{parentName:"p"},"Request"),">","(",(0,n.kt)("inlineCode",{parentName:"p"},"operation"),")"),(0,n.kt)("h4",{id:"type-parameters-1"},"Type parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Name"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"Request"))))),(0,n.kt)("h4",{id:"parameters"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"operation")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"/Moralis-JS-SDK/moralisweb3/common-core/operation"},(0,n.kt)("inlineCode",{parentName:"a"},"Operation")),"<",(0,n.kt)("inlineCode",{parentName:"td"},"Request"),", ",(0,n.kt)("inlineCode",{parentName:"td"},"unknown"),", ",(0,n.kt)("inlineCode",{parentName:"td"},"unknown"),", ",(0,n.kt)("inlineCode",{parentName:"td"},"unknown"),">")))),(0,n.kt)("h2",{id:"methods-1"},"Methods"),(0,n.kt)("h3",{id:"validate"},"validate"),(0,n.kt)("p",null,"\u25b8 ",(0,n.kt)("strong",{parentName:"p"},"validate"),"(",(0,n.kt)("inlineCode",{parentName:"p"},"request"),"): ",(0,n.kt)("inlineCode",{parentName:"p"},"void")),(0,n.kt)("h4",{id:"parameters-1"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"request")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"Request"))))),(0,n.kt)("h4",{id:"returns"},"Returns"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"void")))}d.isMDXComponent=!0}}]);