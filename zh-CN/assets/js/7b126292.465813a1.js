"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[21476],{15680:(e,n,t)=>{t.d(n,{xA:()=>u,yg:()=>d});var r=t(96540);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var i=r.createContext({}),l=function(e){var n=r.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},u=function(e){var n=l(e.components);return r.createElement(i.Provider,{value:n},e.children)},m="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},b=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=l(t),b=a,d=m["".concat(i,".").concat(b)]||m[b]||p[b]||o;return t?r.createElement(d,c(c({ref:n},u),{},{components:t})):r.createElement(d,c({ref:n},u))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,c=new Array(o);c[0]=b;var s={};for(var i in n)hasOwnProperty.call(n,i)&&(s[i]=n[i]);s.originalType=e,s[m]="string"==typeof e?e:a,c[1]=s;for(var l=2;l<o;l++)c[l]=t[l];return r.createElement.apply(null,c)}return r.createElement.apply(null,t)}b.displayName="MDXCreateElement"},45879:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>c,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var r=t(58168),a=(t(96540),t(15680));const o={},c="CDC \u517c\u5bb9 Debezium-json",s={unversionedId:"connector-v2/formats/cdc-compatible-debezium-json",id:"connector-v2/formats/cdc-compatible-debezium-json",title:"CDC \u517c\u5bb9 Debezium-json",description:"SeaTunnel \u652f\u6301\u5c06 cdc \u8bb0\u5f55\u89e3\u6790\u4e3a Debezium-JSON \u6d88\u606f\uff0c\u5e76\u53d1\u5e03\u5230 MQ (kafka) \u7b49\u6d88\u606f\u7cfb\u7edf\u4e2d",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/connector-v2/formats/cdc-compatible-debezium-json.md",sourceDirName:"connector-v2/formats",slug:"/connector-v2/formats/cdc-compatible-debezium-json",permalink:"/zh-CN/docs/connector-v2/formats/cdc-compatible-debezium-json",draft:!1,editUrl:"https://github.com/apache/incubator-seatunnel-website/edit/main/i18n/zh-CN/docusaurus-plugin-content-docs/current/connector-v2/formats/cdc-compatible-debezium-json.md",tags:[],version:"current",frontMatter:{}},i={},l=[{value:"MySQL-CDC \u6d41\u5165 Kafka",id:"mysql-cdc-\u6d41\u5165-kafka",level:2}],u={toc:l},m="wrapper";function p(e){let{components:n,...t}=e;return(0,a.yg)(m,(0,r.A)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"cdc-\u517c\u5bb9-debezium-json"},"CDC \u517c\u5bb9 Debezium-json"),(0,a.yg)("p",null,"SeaTunnel \u652f\u6301\u5c06 cdc \u8bb0\u5f55\u89e3\u6790\u4e3a Debezium-JSON \u6d88\u606f\uff0c\u5e76\u53d1\u5e03\u5230 MQ (kafka) \u7b49\u6d88\u606f\u7cfb\u7edf\u4e2d"),(0,a.yg)("p",null,"\u8fd9\u4e2a\u7279\u6027\u5728\u5f88\u591a\u573a\u666f\u4e0b\u90fd\u975e\u5e38\u5b9e\u7528\uff0c\u4f8b\u5982\uff0c\u5b83\u53ef\u4ee5\u5b9e\u73b0\u4e0e Debezium \u751f\u6001\u7cfb\u7edf\u7684\u517c\u5bb9\u6027"),(0,a.yg)("h1",{id:"\u5982\u4f55\u4f7f\u7528"},"\u5982\u4f55\u4f7f\u7528"),(0,a.yg)("h2",{id:"mysql-cdc-\u6d41\u5165-kafka"},"MySQL-CDC \u6d41\u5165 Kafka"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-bash"},'env {\n  parallelism = 1\n  job.mode = "STREAMING"\n  checkpoint.interval = 15000\n}\n\nsource {\n  MySQL-CDC {\n    result_table_name = "table1"\n\n    base-url="jdbc:mysql://localhost:3306/test"\n    "startup.mode"=INITIAL\n    table-names=[\n        "database1.t1",\n        "database1.t2",\n        "database2.t1"\n    ]\n\n    # compatible_debezium_json options\n    format = compatible_debezium_json\n    debezium = {\n        # include schema into kafka message\n        key.converter.schemas.enable = false\n        value.converter.schemas.enable = false\n        # include ddl\n        include.schema.changes = true\n        # topic prefix\n        database.server.name =  "mysql_cdc_1"\n    }\n  }\n}\n\nsink {\n  Kafka {\n    source_table_name = "table1"\n\n    bootstrap.servers = "localhost:9092"\n\n    # compatible_debezium_json options\n    format = compatible_debezium_json\n  }\n}\n')))}p.isMDXComponent=!0}}]);