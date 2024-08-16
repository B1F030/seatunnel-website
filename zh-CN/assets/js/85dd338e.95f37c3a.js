"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[90409],{15680:(e,n,t)=>{t.d(n,{xA:()=>m,yg:()=>d});var a=t(96540);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=a.createContext({}),p=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},m=function(e){var n=p(e.components);return a.createElement(s.Provider,{value:n},e.children)},u="mdxType",g={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},c=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),u=p(t),c=r,d=u["".concat(s,".").concat(c)]||u[c]||g[c]||l;return t?a.createElement(d,i(i({ref:n},m),{},{components:t})):a.createElement(d,i({ref:n},m))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=t.length,i=new Array(l);i[0]=c;var o={};for(var s in n)hasOwnProperty.call(n,s)&&(o[s]=n[s]);o.originalType=e,o[u]="string"==typeof e?e:r,i[1]=o;for(var p=2;p<l;p++)i[p]=t[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}c.displayName="MDXCreateElement"},54849:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>i,default:()=>g,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var a=t(58168),r=(t(96540),t(15680));const l={},i="Common Options",o={unversionedId:"flink/configuration/transform-plugins/transform-plugin",id:"version-2.1.0/flink/configuration/transform-plugins/transform-plugin",title:"Common Options",description:"Transform Common Options [Flink]",source:"@site/versioned_docs/version-2.1.0/flink/configuration/transform-plugins/transform-plugin.md",sourceDirName:"flink/configuration/transform-plugins",slug:"/flink/configuration/transform-plugins/transform-plugin",permalink:"/zh-CN/docs/2.1.0/flink/configuration/transform-plugins/transform-plugin",draft:!1,editUrl:"https://github.com/apache/incubator-seatunnel-website/edit/main/versioned_docs/version-2.1.0/flink/configuration/transform-plugins/transform-plugin.md",tags:[],version:"2.1.0",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Sql",permalink:"/zh-CN/docs/2.1.0/flink/configuration/transform-plugins/Sql"},next:{title:"Deployment and run",permalink:"/zh-CN/docs/2.1.0/flink/deployment"}},s={},p=[{value:"Transform Plugin common parameters",id:"transform-plugin-common-parameters",level:2},{value:"source_table_name string",id:"source_table_name-string",level:3},{value:"result_table_name string",id:"result_table_name-string",level:3},{value:"field_name string",id:"field_name-string",level:3},{value:"Examples",id:"examples",level:2}],m={toc:p},u="wrapper";function g(e){let{components:n,...t}=e;return(0,r.yg)(u,(0,a.A)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"common-options"},"Common Options"),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"Transform Common Options ","[Flink]")),(0,r.yg)("h2",{id:"transform-plugin-common-parameters"},"Transform Plugin common parameters"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"name"),(0,r.yg)("th",{parentName:"tr",align:null},"type"),(0,r.yg)("th",{parentName:"tr",align:null},"required"),(0,r.yg)("th",{parentName:"tr",align:null},"default value"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"source_table_name"),(0,r.yg)("td",{parentName:"tr",align:null},"string"),(0,r.yg)("td",{parentName:"tr",align:null},"no"),(0,r.yg)("td",{parentName:"tr",align:null},"-")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"result_table_name"),(0,r.yg)("td",{parentName:"tr",align:null},"string"),(0,r.yg)("td",{parentName:"tr",align:null},"no"),(0,r.yg)("td",{parentName:"tr",align:null},"-")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"field_name"),(0,r.yg)("td",{parentName:"tr",align:null},"string"),(0,r.yg)("td",{parentName:"tr",align:null},"no"),(0,r.yg)("td",{parentName:"tr",align:null},"-")))),(0,r.yg)("h3",{id:"source_table_name-string"},"source_table_name ","[string]"),(0,r.yg)("p",null,"When ",(0,r.yg)("inlineCode",{parentName:"p"},"source_table_name")," is not specified, the current plugin is processing the data set ",(0,r.yg)("inlineCode",{parentName:"p"},"(dataStream/dataset)")," output by the previous plugin in the configuration file;"),(0,r.yg)("p",null,"When ",(0,r.yg)("inlineCode",{parentName:"p"},"source_table_name")," is specified, the current plugin is processing the data set corresponding to this parameter."),(0,r.yg)("h3",{id:"result_table_name-string"},"result_table_name ","[string]"),(0,r.yg)("p",null,"When ",(0,r.yg)("inlineCode",{parentName:"p"},"result_table_name")," is not specified, the data processed by this plugin will not be registered as a data set ",(0,r.yg)("inlineCode",{parentName:"p"},"(dataStream/dataset)")," that can be directly accessed by other plugins, or called a temporary table (table);"),(0,r.yg)("p",null,"When ",(0,r.yg)("inlineCode",{parentName:"p"},"result_table_name")," is specified, the data processed by this plugin will be registered as a data set ",(0,r.yg)("inlineCode",{parentName:"p"},"(dataStream/dataset)")," that can be directly accessed by other plugins, or called a temporary table ",(0,r.yg)("inlineCode",{parentName:"p"},"(table)")," . The data set ",(0,r.yg)("inlineCode",{parentName:"p"},"(dataStream/dataset)")," registered here can be directly accessed by other plugins by specifying ",(0,r.yg)("inlineCode",{parentName:"p"},"source_table_name")," ."),(0,r.yg)("h3",{id:"field_name-string"},"field_name ","[string]"),(0,r.yg)("p",null,"When the data is obtained from the upper-level plugin, you can specify the name of the obtained field, which is convenient for use in subsequent sql plugins."),(0,r.yg)("h2",{id:"examples"},"Examples"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},'source {\n    FakeSourceStream {\n      result_table_name = "fake_1"\n      field_name = "name,age"\n    }\n    FakeSourceStream {\n      result_table_name = "fake_2"\n      field_name = "name,age"\n    }\n}\n\ntransform {\n    sql {\n      source_table_name = "fake_1"\n      sql = "select name from fake_1"\n      result_table_name = "fake_name"\n    }\n}\n')),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"If ",(0,r.yg)("inlineCode",{parentName:"p"},"source_table_name")," is not specified, the sql plugin will process the data of ",(0,r.yg)("inlineCode",{parentName:"p"},"fake_2")," , and if it is set to ",(0,r.yg)("inlineCode",{parentName:"p"},"fake_1")," , it will process the data of ",(0,r.yg)("inlineCode",{parentName:"p"},"fake_1")," .")))}g.isMDXComponent=!0}}]);