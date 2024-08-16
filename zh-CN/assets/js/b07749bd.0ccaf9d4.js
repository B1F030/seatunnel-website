"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[5656],{15680:(e,t,n)=>{n.d(t,{xA:()=>s,yg:()=>d});var r=n(96540);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},g="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),g=c(n),m=a,d=g["".concat(p,".").concat(m)]||g[m]||u[m]||o;return n?r.createElement(d,l(l({ref:t},s),{},{components:n})):r.createElement(d,l({ref:t},s))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[g]="string"==typeof e?e:a,l[1]=i;for(var c=2;c<o;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},27791:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var r=n(58168),a=(n(96540),n(15680));const o={},l="Iceberg",i={unversionedId:"connector/source/Iceberg",id:"version-2.3.0-beta/connector/source/Iceberg",title:"Iceberg",description:"Iceberg source connector",source:"@site/versioned_docs/version-2.3.0-beta/connector/source/Iceberg.md",sourceDirName:"connector/source",slug:"/connector/source/Iceberg",permalink:"/zh-CN/docs/2.3.0-beta/connector/source/Iceberg",draft:!1,editUrl:"https://github.com/apache/incubator-seatunnel-website/edit/main/versioned_docs/version-2.3.0-beta/connector/source/Iceberg.md",tags:[],version:"2.3.0-beta",frontMatter:{},sidebar:"docs",previous:{title:"Hudi",permalink:"/zh-CN/docs/2.3.0-beta/connector/source/Hudi"},next:{title:"InfluxDB",permalink:"/zh-CN/docs/2.3.0-beta/connector/source/InfluxDB"}},p={},c=[{value:"Description",id:"description",level:2},{value:"Options",id:"options",level:2},{value:"common-options",id:"common-options",level:3},{value:"path",id:"path",level:3},{value:"pre_sql",id:"pre_sql",level:3},{value:"snapshot-id",id:"snapshot-id",level:3},{value:"as-of-timestamp",id:"as-of-timestamp",level:3},{value:"Example",id:"example",level:2}],s={toc:c},g="wrapper";function u(e){let{components:t,...n}=e;return(0,a.yg)(g,(0,r.A)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"iceberg"},"Iceberg"),(0,a.yg)("blockquote",null,(0,a.yg)("p",{parentName:"blockquote"},"Iceberg source connector")),(0,a.yg)("h2",{id:"description"},"Description"),(0,a.yg)("p",null,"Read data from Iceberg."),(0,a.yg)("admonition",{type:"tip"},(0,a.yg)("p",{parentName:"admonition"},"Engine Supported and plugin name"),(0,a.yg)("ul",{parentName:"admonition",className:"contains-task-list"},(0,a.yg)("li",{parentName:"ul",className:"task-list-item"},(0,a.yg)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","Spark: Iceberg"),(0,a.yg)("li",{parentName:"ul",className:"task-list-item"},(0,a.yg)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Flink"))),(0,a.yg)("h2",{id:"options"},"Options"),(0,a.yg)("table",null,(0,a.yg)("thead",{parentName:"table"},(0,a.yg)("tr",{parentName:"thead"},(0,a.yg)("th",{parentName:"tr",align:null},"name"),(0,a.yg)("th",{parentName:"tr",align:null},"type"),(0,a.yg)("th",{parentName:"tr",align:null},"required"),(0,a.yg)("th",{parentName:"tr",align:null},"default value"))),(0,a.yg)("tbody",{parentName:"table"},(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"common-options"),(0,a.yg)("td",{parentName:"tr",align:null}),(0,a.yg)("td",{parentName:"tr",align:null},"yes"),(0,a.yg)("td",{parentName:"tr",align:null},"-")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("a",{parentName:"td",href:"#path"},"path")),(0,a.yg)("td",{parentName:"tr",align:null},"string"),(0,a.yg)("td",{parentName:"tr",align:null},"yes"),(0,a.yg)("td",{parentName:"tr",align:null},"-")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("a",{parentName:"td",href:"#pre_sql"},"pre_sql")),(0,a.yg)("td",{parentName:"tr",align:null},"string"),(0,a.yg)("td",{parentName:"tr",align:null},"yes"),(0,a.yg)("td",{parentName:"tr",align:null},"-")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("a",{parentName:"td",href:"#snapshot-id"},"snapshot-id")),(0,a.yg)("td",{parentName:"tr",align:null},"long"),(0,a.yg)("td",{parentName:"tr",align:null},"no"),(0,a.yg)("td",{parentName:"tr",align:null},"-")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("a",{parentName:"td",href:"#as-of-timestamp"},"as-of-timestamp")),(0,a.yg)("td",{parentName:"tr",align:null},"long"),(0,a.yg)("td",{parentName:"tr",align:null},"no"),(0,a.yg)("td",{parentName:"tr",align:null},"-")))),(0,a.yg)("p",null,"Refer to ",(0,a.yg)("a",{parentName:"p",href:"https://iceberg.apache.org/docs/latest/spark-configuration/"},"iceberg read options")," for more configurations."),(0,a.yg)("h3",{id:"common-options"},"common-options"),(0,a.yg)("p",null,"Source plugin common parameters, please refer to ",(0,a.yg)("a",{parentName:"p",href:"/zh-CN/docs/2.3.0-beta/connector/source/common-options"},"Source Plugin")," for details"),(0,a.yg)("h3",{id:"path"},"path"),(0,a.yg)("p",null,"Iceberg table location."),(0,a.yg)("h3",{id:"pre_sql"},"pre_sql"),(0,a.yg)("p",null,"SQL statements queried from iceberg table. Note that the table name is ",(0,a.yg)("inlineCode",{parentName:"p"},"result_table_name")," configuration"),(0,a.yg)("h3",{id:"snapshot-id"},"snapshot-id"),(0,a.yg)("p",null,"Snapshot ID of the table snapshot to read"),(0,a.yg)("h3",{id:"as-of-timestamp"},"as-of-timestamp"),(0,a.yg)("p",null,"A timestamp in milliseconds; the snapshot used will be the snapshot current at this time."),(0,a.yg)("h2",{id:"example"},"Example"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-bash"},'iceberg {\n    path = "hdfs://localhost:9000/iceberg/warehouse/db/table"\n    result_table_name = "my_source"\n    pre_sql="select * from my_source where dt = \'2019-01-01\'"\n}\n')))}u.isMDXComponent=!0}}]);