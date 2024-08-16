"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[34067],{15680:(e,t,n)=>{n.d(t,{xA:()=>u,yg:()=>d});var r=n(96540);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},m="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=p(n),c=a,d=m["".concat(s,".").concat(c)]||m[c]||g[c]||l;return n?r.createElement(d,o(o({ref:t},u),{},{components:n})):r.createElement(d,o({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=c;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[m]="string"==typeof e?e:a,o[1]=i;for(var p=2;p<l;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},4314:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>g,frontMatter:()=>l,metadata:()=>i,toc:()=>p});var r=n(58168),a=(n(96540),n(15680));const l={},o="NullRate",i={unversionedId:"transform/nullRate",id:"version-2.1.3/transform/nullRate",title:"NullRate",description:"Description",source:"@site/versioned_docs/version-2.1.3/transform/nullRate.md",sourceDirName:"transform",slug:"/transform/nullRate",permalink:"/zh-CN/docs/2.1.3/transform/nullRate",draft:!1,editUrl:"https://github.com/apache/incubator-seatunnel-website/edit/main/versioned_docs/version-2.1.3/transform/nullRate.md",tags:[],version:"2.1.3",frontMatter:{},sidebar:"docs",previous:{title:"Json",permalink:"/zh-CN/docs/2.1.3/transform/json"},next:{title:"Nulltf",permalink:"/zh-CN/docs/2.1.3/transform/nulltf"}},s={},p=[{value:"Description",id:"description",level:2},{value:"Options",id:"options",level:2},{value:"field string_list",id:"field-string_list",level:3},{value:"rates double_list",id:"rates-double_list",level:3},{value:"throw_exception_enable boolean",id:"throw_exception_enable-boolean",level:3},{value:"save_to_table_name string",id:"save_to_table_name-string",level:3},{value:"common options string",id:"common-options-string",level:3},{value:"Examples",id:"examples",level:2}],u={toc:p},m="wrapper";function g(e){let{components:t,...n}=e;return(0,a.yg)(m,(0,r.A)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"nullrate"},"NullRate"),(0,a.yg)("h2",{id:"description"},"Description"),(0,a.yg)("p",null,"When there is a large amount of data, the final result will always be greatly affected by the problem of data null value. Therefore, early null value detection is particularly important. For this reason, this function came into being"),(0,a.yg)("admonition",{type:"tip"},(0,a.yg)("p",{parentName:"admonition"},"This transform ",(0,a.yg)("strong",{parentName:"p"},"ONLY")," supported by Spark.")),(0,a.yg)("h2",{id:"options"},"Options"),(0,a.yg)("table",null,(0,a.yg)("thead",{parentName:"table"},(0,a.yg)("tr",{parentName:"thead"},(0,a.yg)("th",{parentName:"tr",align:null},"name"),(0,a.yg)("th",{parentName:"tr",align:null},"type"),(0,a.yg)("th",{parentName:"tr",align:null},"required"),(0,a.yg)("th",{parentName:"tr",align:null},"default value"))),(0,a.yg)("tbody",{parentName:"table"},(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"fields"),(0,a.yg)("td",{parentName:"tr",align:null},"string_list"),(0,a.yg)("td",{parentName:"tr",align:null},"yes"),(0,a.yg)("td",{parentName:"tr",align:null},"-")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"rates"),(0,a.yg)("td",{parentName:"tr",align:null},"double_list"),(0,a.yg)("td",{parentName:"tr",align:null},"yes"),(0,a.yg)("td",{parentName:"tr",align:null},"-")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"throw_exception_enable"),(0,a.yg)("td",{parentName:"tr",align:null},"boolean"),(0,a.yg)("td",{parentName:"tr",align:null},"no"),(0,a.yg)("td",{parentName:"tr",align:null},"-")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"save_to_table_name"),(0,a.yg)("td",{parentName:"tr",align:null},"string"),(0,a.yg)("td",{parentName:"tr",align:null},"no"),(0,a.yg)("td",{parentName:"tr",align:null},"-")))),(0,a.yg)("h3",{id:"field-string_list"},"field ","[string_list]"),(0,a.yg)("p",null,"Which fields do you want to monitor ."),(0,a.yg)("h3",{id:"rates-double_list"},"rates ","[double_list]"),(0,a.yg)("p",null,"It is consistent with the number of fields. Double type indicates the set null rate value ."),(0,a.yg)("h3",{id:"throw_exception_enable-boolean"},"throw_exception_enable ","[boolean]"),(0,a.yg)("p",null,"Whether to throw an exception when it is greater than the set value. The default value is false ."),(0,a.yg)("h3",{id:"save_to_table_name-string"},"save_to_table_name ","[string]"),(0,a.yg)("p",null,"Whether the current verification value is output to the table. It is not output by defaul ."),(0,a.yg)("h3",{id:"common-options-string"},"common options ","[string]"),(0,a.yg)("p",null,"Transform plugin common parameters, please refer to ",(0,a.yg)("a",{parentName:"p",href:"/zh-CN/docs/2.1.3/transform/common-options"},"Transform Plugin")," for details"),(0,a.yg)("h2",{id:"examples"},"Examples"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-bash"},'  nullRate {\n     fields = ["msg", "name"]\n     rates = [10.0,3.45]\n     save_to_table_name = "tmp"\n     throw_exception_enable = true\n  }\n}\n')),(0,a.yg)("p",null,"Use ",(0,a.yg)("inlineCode",{parentName:"p"},"NullRate")," in transform's Dataset."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-bash"},'  transform {\n    NullRate {\n      fields = ["msg", "name"]\n      rates = [10.0,3.45]\n      save_to_table_name = "tmp"\n      throw_exception_enable = true\n    }\n  }\n')))}g.isMDXComponent=!0}}]);