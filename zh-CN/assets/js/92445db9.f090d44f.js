"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[20122],{15680:(e,t,n)=>{n.d(t,{xA:()=>s,yg:()=>m});var r=n(96540);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},p="mdxType",y={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),p=u(n),d=o,m=p["".concat(l,".").concat(d)]||p[d]||y[d]||i;return n?r.createElement(m,a(a({ref:t},s),{},{components:n})):r.createElement(m,a({ref:t},s))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[p]="string"==typeof e?e:o,a[1]=c;for(var u=2;u<i;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},38455:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>y,frontMatter:()=>i,metadata:()=>c,toc:()=>u});var r=n(58168),o=(n(96540),n(15680));const i={sidebar_position:2},a="Why SeaTunnel",c={unversionedId:"introduction/why",id:"version-2.1.1/introduction/why",title:"Why SeaTunnel",description:"SeaTunnel will do its best to solve the problems that may be encountered in the synchronization of massive data:",source:"@site/versioned_docs/version-2.1.1/introduction/why.md",sourceDirName:"introduction",slug:"/introduction/why",permalink:"/zh-CN/docs/2.1.1/introduction/why",draft:!1,editUrl:"https://github.com/apache/incubator-seatunnel-website/edit/main/versioned_docs/version-2.1.1/introduction/why.md",tags:[],version:"2.1.1",sidebarPosition:2,frontMatter:{sidebar_position:2}},l={},u=[],s={toc:u},p="wrapper";function y(e){let{components:t,...n}=e;return(0,o.yg)(p,(0,r.A)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.yg)("h1",{id:"why-seatunnel"},"Why SeaTunnel"),(0,o.yg)("p",null,"SeaTunnel will do its best to solve the problems that may be encountered in the synchronization of massive data:"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"Data loss and duplication"),(0,o.yg)("li",{parentName:"ul"},"Task accumulation and delay"),(0,o.yg)("li",{parentName:"ul"},"Low throughput"),(0,o.yg)("li",{parentName:"ul"},"Long cycle to be applied in the production environment"),(0,o.yg)("li",{parentName:"ul"},"Lack of application running status monitoring")))}y.isMDXComponent=!0}}]);