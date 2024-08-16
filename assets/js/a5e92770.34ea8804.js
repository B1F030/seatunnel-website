"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[39735],{15680:(e,n,t)=>{t.d(n,{xA:()=>g,yg:()=>u});var r=t(96540);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=r.createContext({}),s=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},g=function(e){var n=s(e.components);return r.createElement(p.Provider,{value:n},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,g=l(e,["components","mdxType","originalType","parentName"]),c=s(t),d=a,u=c["".concat(p,".").concat(d)]||c[d]||m[d]||i;return t?r.createElement(u,o(o({ref:n},g),{},{components:t})):r.createElement(u,o({ref:n},g))}));function u(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=d;var l={};for(var p in n)hasOwnProperty.call(n,p)&&(l[p]=n[p]);l.originalType=e,l[c]="string"==typeof e?e:a,o[1]=l;for(var s=2;s<i;s++)o[s]=t[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},20767:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var r=t(58168),a=(t(96540),t(15680));const i={},o="Phoenix",l={unversionedId:"connector/sink/Phoenix",id:"version-2.1.3/connector/sink/Phoenix",title:"Phoenix",description:"Description",source:"@site/versioned_docs/version-2.1.3/connector/sink/Phoenix.md",sourceDirName:"connector/sink",slug:"/connector/sink/Phoenix",permalink:"/docs/2.1.3/connector/sink/Phoenix",draft:!1,editUrl:"https://github.com/apache/incubator-seatunnel-website/edit/main/versioned_docs/version-2.1.3/connector/sink/Phoenix.md",tags:[],version:"2.1.3",frontMatter:{},sidebar:"docs",previous:{title:"MongoDB",permalink:"/docs/2.1.3/connector/sink/MongoDB"},next:{title:"Redis",permalink:"/docs/2.1.3/connector/sink/Redis"}},p={},s=[{value:"Description",id:"description",level:2},{value:"Options",id:"options",level:2},{value:"zk-connect string",id:"zk-connect-string",level:3},{value:"table string",id:"table-string",level:3},{value:"tenantId string",id:"tenantid-string",level:5},{value:"skipNormalizingIdentifier boolean",id:"skipnormalizingidentifier-boolean",level:3},{value:"common options string",id:"common-options-string",level:3},{value:"Examples",id:"examples",level:2}],g={toc:s},c="wrapper";function m(e){let{components:n,...t}=e;return(0,a.yg)(c,(0,r.A)({},g,t,{components:n,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"phoenix"},"Phoenix"),(0,a.yg)("h2",{id:"description"},"Description"),(0,a.yg)("p",null,"Export data to ",(0,a.yg)("inlineCode",{parentName:"p"},"Phoenix")," , compatible with ",(0,a.yg)("inlineCode",{parentName:"p"},"Kerberos")," authentication"),(0,a.yg)("admonition",{type:"tip"},(0,a.yg)("p",{parentName:"admonition"},"Engine Supported and plugin name"),(0,a.yg)("ul",{parentName:"admonition",className:"contains-task-list"},(0,a.yg)("li",{parentName:"ul",className:"task-list-item"},(0,a.yg)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","Spark: Phoenix"),(0,a.yg)("li",{parentName:"ul",className:"task-list-item"},(0,a.yg)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Flink"))),(0,a.yg)("h2",{id:"options"},"Options"),(0,a.yg)("table",null,(0,a.yg)("thead",{parentName:"table"},(0,a.yg)("tr",{parentName:"thead"},(0,a.yg)("th",{parentName:"tr",align:null},"name"),(0,a.yg)("th",{parentName:"tr",align:null},"type"),(0,a.yg)("th",{parentName:"tr",align:null},"required"),(0,a.yg)("th",{parentName:"tr",align:null},"default value"))),(0,a.yg)("tbody",{parentName:"table"},(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"zk-connect"),(0,a.yg)("td",{parentName:"tr",align:null},"array"),(0,a.yg)("td",{parentName:"tr",align:null},"yes"),(0,a.yg)("td",{parentName:"tr",align:null},"-")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"table"),(0,a.yg)("td",{parentName:"tr",align:null},"string"),(0,a.yg)("td",{parentName:"tr",align:null},"yes"),(0,a.yg)("td",{parentName:"tr",align:null},"-")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"tenantId"),(0,a.yg)("td",{parentName:"tr",align:null},"string"),(0,a.yg)("td",{parentName:"tr",align:null},"no"),(0,a.yg)("td",{parentName:"tr",align:null},"-")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"skipNormalizingIdentifier"),(0,a.yg)("td",{parentName:"tr",align:null},"boolean"),(0,a.yg)("td",{parentName:"tr",align:null},"no"),(0,a.yg)("td",{parentName:"tr",align:null},"false")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"common-options"),(0,a.yg)("td",{parentName:"tr",align:null},"string"),(0,a.yg)("td",{parentName:"tr",align:null},"no"),(0,a.yg)("td",{parentName:"tr",align:null},"-")))),(0,a.yg)("h3",{id:"zk-connect-string"},"zk-connect ","[string]"),(0,a.yg)("p",null,"Connection string, configuration example: ",(0,a.yg)("inlineCode",{parentName:"p"},"host1:2181,host2:2181,host3:2181 [/znode]")),(0,a.yg)("h3",{id:"table-string"},"table ","[string]"),(0,a.yg)("p",null,"Target table name"),(0,a.yg)("h5",{id:"tenantid-string"},"tenantId ","[string]"),(0,a.yg)("p",null,"Tenant ID, optional configuration item"),(0,a.yg)("h3",{id:"skipnormalizingidentifier-boolean"},"skipNormalizingIdentifier ","[boolean]"),(0,a.yg)("p",null,"Whether to skip the normalized identifier, if the column name is surrounded by double quotes, it is used as is, otherwise the name is uppercase. Optional configuration items, the default is ",(0,a.yg)("inlineCode",{parentName:"p"},"false")),(0,a.yg)("h3",{id:"common-options-string"},"common options ","[string]"),(0,a.yg)("p",null,"Sink plugin common parameters, please refer to ",(0,a.yg)("a",{parentName:"p",href:"/docs/2.1.3/connector/sink/common-options"},"Sink Plugin")," for details"),(0,a.yg)("h2",{id:"examples"},"Examples"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-bash"},'  Phoenix {\n    zk-connect = "host1:2181,host2:2181,host3:2181"\n    table = "tableName"\n  }\n')))}m.isMDXComponent=!0}}]);