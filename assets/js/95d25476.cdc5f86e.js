"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[92850],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return d}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),m=p(n),d=a,b=m["".concat(c,".").concat(d)]||m[d]||u[d]||o;return n?r.createElement(b,l(l({ref:t},s),{},{components:n})):r.createElement(b,l({ref:t},s))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var p=2;p<o;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},79915:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return c},metadata:function(){return p},assets:function(){return s},toc:function(){return u},default:function(){return d}});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),l=["components"],i={},c="Common Options",p={unversionedId:"connector-v2/source/common-options",id:"connector-v2/source/common-options",title:"Common Options",description:"Common parameters of source connectors",source:"@site/docs/connector-v2/source/common-options.md",sourceDirName:"connector-v2/source",slug:"/connector-v2/source/common-options",permalink:"/docs/connector-v2/source/common-options",editUrl:"https://github.com/apache/incubator-seatunnel-website/edit/main/docs/connector-v2/source/common-options.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Socket",permalink:"/docs/connector-v2/source/Socket"},next:{title:"Apache Pulsar",permalink:"/docs/connector-v2/source/pulsar"}},s={},u=[{value:"result_table_name string",id:"result_table_name-string",level:3},{value:"field_name string",id:"field_name-string",level:3},{value:"Example",id:"example",level:2}],m={toc:u};function d(e){var t=e.components,n=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"common-options"},"Common Options"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Common parameters of source connectors")),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"name"),(0,o.kt)("th",{parentName:"tr",align:null},"type"),(0,o.kt)("th",{parentName:"tr",align:null},"required"),(0,o.kt)("th",{parentName:"tr",align:null},"default value"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"result_table_name"),(0,o.kt)("td",{parentName:"tr",align:null},"string"),(0,o.kt)("td",{parentName:"tr",align:null},"no"),(0,o.kt)("td",{parentName:"tr",align:null},"-")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"field_name"),(0,o.kt)("td",{parentName:"tr",align:null},"string"),(0,o.kt)("td",{parentName:"tr",align:null},"no"),(0,o.kt)("td",{parentName:"tr",align:null},"-")))),(0,o.kt)("h3",{id:"result_table_name-string"},"result_table_name ","[string]"),(0,o.kt)("p",null,"When ",(0,o.kt)("inlineCode",{parentName:"p"},"result_table_name")," is not specified, the data processed by this plugin will not be registered as a data set ",(0,o.kt)("inlineCode",{parentName:"p"},"(dataStream/dataset)")," that can be directly accessed by other plugins, or called a temporary table ",(0,o.kt)("inlineCode",{parentName:"p"},"(table)")," ;"),(0,o.kt)("p",null,"When ",(0,o.kt)("inlineCode",{parentName:"p"},"result_table_name")," is specified, the data processed by this plugin will be registered as a data set ",(0,o.kt)("inlineCode",{parentName:"p"},"(dataStream/dataset)")," that can be directly accessed by other plugins, or called a temporary table ",(0,o.kt)("inlineCode",{parentName:"p"},"(table)")," . The data set ",(0,o.kt)("inlineCode",{parentName:"p"},"(dataStream/dataset)")," registered here can be directly accessed by other plugins by specifying ",(0,o.kt)("inlineCode",{parentName:"p"},"source_table_name")," ."),(0,o.kt)("h3",{id:"field_name-string"},"field_name ","[string]"),(0,o.kt)("p",null,"When the data is obtained from the upper-level plug-in, you can specify the name of the obtained field, which is convenient for use in subsequent sql plugins."),(0,o.kt)("h2",{id:"example"},"Example"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'source {\n    FakeSourceStream {\n        result_table_name = "fake"\n        field_name = "name,age"\n    }\n}\n')),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"The result of the data source ",(0,o.kt)("inlineCode",{parentName:"p"},"FakeSourceStream")," will be registered as a temporary table named ",(0,o.kt)("inlineCode",{parentName:"p"},"fake")," . This temporary table can be used by any ",(0,o.kt)("inlineCode",{parentName:"p"},"Transform")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"Sink")," plugin by specifying ",(0,o.kt)("inlineCode",{parentName:"p"},"source_table_name")," ."),(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("inlineCode",{parentName:"p"},"field_name")," names the two columns of the temporary table ",(0,o.kt)("inlineCode",{parentName:"p"},"name")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"age")," respectively.")))}d.isMDXComponent=!0}}]);