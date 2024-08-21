"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[20191],{15680:(e,n,r)=>{r.d(n,{xA:()=>p,yg:()=>y});var t=r(96540);function o(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function i(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function a(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?i(Object(r),!0).forEach((function(n){o(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function l(e,n){if(null==e)return{};var r,t,o=function(e,n){if(null==e)return{};var r,t,o={},i=Object.keys(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||(o[r]=e[r]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=t.createContext({}),c=function(e){var n=t.useContext(s),r=n;return e&&(r="function"==typeof e?e(n):a(a({},n),e)),r},p=function(e){var n=c(e.components);return t.createElement(s.Provider,{value:n},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},d=t.forwardRef((function(e,n){var r=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(r),d=o,y=u["".concat(s,".").concat(d)]||u[d]||m[d]||i;return r?t.createElement(y,a(a({ref:n},p),{},{components:r})):t.createElement(y,a({ref:n},p))}));function y(e,n){var r=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=d;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[u]="string"==typeof e?e:o,a[1]=l;for(var c=2;c<i;c++)a[c]=r[c];return t.createElement.apply(null,a)}return t.createElement.apply(null,r)}d.displayName="MDXCreateElement"},89394:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>s,contentTitle:()=>a,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var t=r(58168),o=(r(96540),r(15680));const i={},a="Greenplum",l={unversionedId:"connector-v2/sink/Greenplum",id:"version-2.3.7/connector-v2/sink/Greenplum",title:"Greenplum",description:"Greenplum sink connector",source:"@site/versioned_docs/version-2.3.7/connector-v2/sink/Greenplum.md",sourceDirName:"connector-v2/sink",slug:"/connector-v2/sink/Greenplum",permalink:"/docs/2.3.7/connector-v2/sink/Greenplum",draft:!1,editUrl:"https://github.com/apache/incubator-seatunnel-website/edit/main/versioned_docs/version-2.3.7/connector-v2/sink/Greenplum.md",tags:[],version:"2.3.7",frontMatter:{},sidebar:"docs",previous:{title:"GoogleFirestore",permalink:"/docs/2.3.7/connector-v2/sink/GoogleFirestore"},next:{title:"Hbase",permalink:"/docs/2.3.7/connector-v2/sink/Hbase"}},s={},c=[{value:"Description",id:"description",level:2},{value:"Key Features",id:"key-features",level:2},{value:"Options",id:"options",level:2},{value:"driver string",id:"driver-string",level:3},{value:"url string",id:"url-string",level:3},{value:"common options",id:"common-options",level:3},{value:"Changelog",id:"changelog",level:2},{value:"2.2.0-beta 2022-09-26",id:"220-beta-2022-09-26",level:3}],p={toc:c},u="wrapper";function m(e){let{components:n,...r}=e;return(0,o.yg)(u,(0,t.A)({},p,r,{components:n,mdxType:"MDXLayout"}),(0,o.yg)("h1",{id:"greenplum"},"Greenplum"),(0,o.yg)("blockquote",null,(0,o.yg)("p",{parentName:"blockquote"},"Greenplum sink connector")),(0,o.yg)("h2",{id:"description"},"Description"),(0,o.yg)("p",null,"Write data to Greenplum using ",(0,o.yg)("a",{parentName:"p",href:"/docs/2.3.7/connector-v2/sink/Jdbc"},"Jdbc connector"),"."),(0,o.yg)("h2",{id:"key-features"},"Key Features"),(0,o.yg)("ul",{className:"contains-task-list"},(0,o.yg)("li",{parentName:"ul",className:"task-list-item"},(0,o.yg)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ",(0,o.yg)("a",{parentName:"li",href:"/docs/2.3.7/concept/connector-v2-features"},"exactly-once"))),(0,o.yg)("admonition",{type:"tip"},(0,o.yg)("p",{parentName:"admonition"},"Not support exactly-once semantics (XA transaction is not yet supported in Greenplum database).")),(0,o.yg)("h2",{id:"options"},"Options"),(0,o.yg)("h3",{id:"driver-string"},"driver ","[string]"),(0,o.yg)("p",null,"Optional jdbc drivers:"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("inlineCode",{parentName:"li"},"org.postgresql.Driver")),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("inlineCode",{parentName:"li"},"com.pivotal.jdbc.GreenplumDriver"))),(0,o.yg)("p",null,"Warn: for license compliance, if you use ",(0,o.yg)("inlineCode",{parentName:"p"},"GreenplumDriver")," the have to provide Greenplum JDBC driver yourself, e.g. copy greenplum-xxx.jar to $SEATNUNNEL_HOME/lib for Standalone."),(0,o.yg)("h3",{id:"url-string"},"url ","[string]"),(0,o.yg)("p",null,"The URL of the JDBC connection. if you use postgresql driver the value is ",(0,o.yg)("inlineCode",{parentName:"p"},"jdbc:postgresql://${yous_host}:${yous_port}/${yous_database}"),", or you use greenplum driver the value is ",(0,o.yg)("inlineCode",{parentName:"p"},"jdbc:pivotal:greenplum://${yous_host}:${yous_port};DatabaseName=${yous_database}")),(0,o.yg)("h3",{id:"common-options"},"common options"),(0,o.yg)("p",null,"Sink plugin common parameters, please refer to ",(0,o.yg)("a",{parentName:"p",href:"/docs/2.3.7/connector-v2/sink/common-options"},"Sink Common Options")," for details"),(0,o.yg)("h2",{id:"changelog"},"Changelog"),(0,o.yg)("h3",{id:"220-beta-2022-09-26"},"2.2.0-beta 2022-09-26"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"Add Greenplum Sink Connector")))}m.isMDXComponent=!0}}]);