"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[92895],{15680:(e,t,n)=>{n.d(t,{xA:()=>c,yg:()=>d});var r=n(96540);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=p(n),m=a,d=u["".concat(s,".").concat(m)]||u[m]||g[m]||o;return n?r.createElement(d,l(l({ref:t},c),{},{components:n})):r.createElement(d,l({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[u]="string"==typeof e?e:a,l[1]=i;for(var p=2;p<o;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3142:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>g,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var r=n(58168),a=(n(96540),n(15680));const o={},l="HBase",i={unversionedId:"connector/source/Hbase",id:"version-2.1.2/connector/source/Hbase",title:"HBase",description:"Description",source:"@site/versioned_docs/version-2.1.2/connector/source/Hbase.md",sourceDirName:"connector/source",slug:"/connector/source/Hbase",permalink:"/zh-CN/docs/2.1.2/connector/source/Hbase",draft:!1,editUrl:"https://github.com/apache/incubator-seatunnel-website/edit/main/versioned_docs/version-2.1.2/connector/source/Hbase.md",tags:[],version:"2.1.2",frontMatter:{},sidebar:"docs",previous:{title:"File",permalink:"/zh-CN/docs/2.1.2/connector/source/File"},next:{title:"Hive",permalink:"/zh-CN/docs/2.1.2/connector/source/Hive"}},s={},p=[{value:"Description",id:"description",level:2},{value:"Options",id:"options",level:2},{value:"hbase.zookeeper.quorum string",id:"hbasezookeeperquorum-string",level:3},{value:"catalog string",id:"catalog-string",level:3},{value:"common options string",id:"common-options-string",level:3},{value:"Example",id:"example",level:2}],c={toc:p},u="wrapper";function g(e){let{components:t,...n}=e;return(0,a.yg)(u,(0,r.A)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"hbase"},"HBase"),(0,a.yg)("h2",{id:"description"},"Description"),(0,a.yg)("p",null,"Get data from HBase"),(0,a.yg)("admonition",{type:"tip"},(0,a.yg)("p",{parentName:"admonition"},"Engine Supported and plugin name"),(0,a.yg)("ul",{parentName:"admonition",className:"contains-task-list"},(0,a.yg)("li",{parentName:"ul",className:"task-list-item"},(0,a.yg)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","Spark: HBase"),(0,a.yg)("li",{parentName:"ul",className:"task-list-item"},(0,a.yg)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Flink"))),(0,a.yg)("h2",{id:"options"},"Options"),(0,a.yg)("table",null,(0,a.yg)("thead",{parentName:"table"},(0,a.yg)("tr",{parentName:"thead"},(0,a.yg)("th",{parentName:"tr",align:null},"name"),(0,a.yg)("th",{parentName:"tr",align:null},"type"),(0,a.yg)("th",{parentName:"tr",align:null},"required"),(0,a.yg)("th",{parentName:"tr",align:null},"default value"))),(0,a.yg)("tbody",{parentName:"table"},(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"hbase.zookeeper.quorum"),(0,a.yg)("td",{parentName:"tr",align:null},"string"),(0,a.yg)("td",{parentName:"tr",align:null},"yes"),(0,a.yg)("td",{parentName:"tr",align:null})),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"catalog"),(0,a.yg)("td",{parentName:"tr",align:null},"string"),(0,a.yg)("td",{parentName:"tr",align:null},"yes"),(0,a.yg)("td",{parentName:"tr",align:null})),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"common-options"),(0,a.yg)("td",{parentName:"tr",align:null},"string"),(0,a.yg)("td",{parentName:"tr",align:null},"yes"),(0,a.yg)("td",{parentName:"tr",align:null},"-")))),(0,a.yg)("h3",{id:"hbasezookeeperquorum-string"},"hbase.zookeeper.quorum ","[string]"),(0,a.yg)("p",null,"The address of the ",(0,a.yg)("inlineCode",{parentName:"p"},"zookeeper")," cluster, the format is: ",(0,a.yg)("inlineCode",{parentName:"p"},"host01:2181,host02:2181,host03:2181")),(0,a.yg)("h3",{id:"catalog-string"},"catalog ","[string]"),(0,a.yg)("p",null,"The structure of the ",(0,a.yg)("inlineCode",{parentName:"p"},"hbase")," table is defined by ",(0,a.yg)("inlineCode",{parentName:"p"},"catalog")," , the name of the ",(0,a.yg)("inlineCode",{parentName:"p"},"hbase")," table and its ",(0,a.yg)("inlineCode",{parentName:"p"},"namespace")," , which ",(0,a.yg)("inlineCode",{parentName:"p"},"columns")," are used as ",(0,a.yg)("inlineCode",{parentName:"p"},"rowkey"),", and the correspondence between ",(0,a.yg)("inlineCode",{parentName:"p"},"column family")," and ",(0,a.yg)("inlineCode",{parentName:"p"},"columns")," can be defined by ",(0,a.yg)("inlineCode",{parentName:"p"},"catalog")," ",(0,a.yg)("inlineCode",{parentName:"p"},"hbase table catalog")),(0,a.yg)("h3",{id:"common-options-string"},"common options ","[string]"),(0,a.yg)("p",null,"Source plugin common parameters, please refer to ",(0,a.yg)("a",{parentName:"p",href:"/zh-CN/docs/2.1.2/connector/source/common-options"},"Source Plugin")," for details"),(0,a.yg)("h2",{id:"example"},"Example"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-bash"},'  Hbase {\n    hbase.zookeeper.quorum = "localhost:2181"\n    catalog = "{\\"table\\":{\\"namespace\\":\\"default\\", \\"name\\":\\"test\\"},\\"rowkey\\":\\"id\\",\\"columns\\":{\\"id\\":{\\"cf\\":\\"rowkey\\", \\"col\\":\\"id\\", \\"type\\":\\"string\\"},\\"a\\":{\\"cf\\":\\"f1\\", \\"col\\":\\"a\\", \\"type\\":\\"string\\"},\\"b\\":{\\"cf\\":\\"f1\\", \\"col\\":\\"b\\", \\"type\\":\\"string\\"},\\"c\\":{\\"cf\\":\\"f1\\", \\"col\\":\\"c\\", \\"type\\":\\"string\\"}}}"\n    result_table_name = "my_dataset"\n  }\n')))}g.isMDXComponent=!0}}]);