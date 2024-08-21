"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[867],{15680:(e,n,t)=>{t.d(n,{xA:()=>u,yg:()=>g});var a=t(96540);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=a.createContext({}),m=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=m(e.components);return a.createElement(l.Provider,{value:n},e.children)},c="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=m(t),d=r,g=c["".concat(l,".").concat(d)]||c[d]||p[d]||o;return t?a.createElement(g,i(i({ref:n},u),{},{components:t})):a.createElement(g,i({ref:n},u))}));function g(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=d;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s[c]="string"==typeof e?e:r,i[1]=s;for(var m=2;m<o;m++)i[m]=t[m];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},94110:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>m});var a=t(58168),r=(t(96540),t(15680));const o={},i="Debezium Format",s={unversionedId:"connector-v2/formats/debezium-json",id:"version-2.3.7/connector-v2/formats/debezium-json",title:"Debezium Format",description:"Changelog-Data-Capture Format Deserialization Schema",source:"@site/versioned_docs/version-2.3.7/connector-v2/formats/debezium-json.md",sourceDirName:"connector-v2/formats",slug:"/connector-v2/formats/debezium-json",permalink:"/docs/2.3.7/connector-v2/formats/debezium-json",draft:!1,editUrl:"https://github.com/apache/incubator-seatunnel-website/edit/main/versioned_docs/version-2.3.7/connector-v2/formats/debezium-json.md",tags:[],version:"2.3.7",frontMatter:{}},l={},m=[{value:"Kafka Uses example",id:"kafka-uses-example",level:2}],u={toc:m},c="wrapper";function p(e){let{components:n,...t}=e;return(0,r.yg)(c,(0,a.A)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"debezium-format"},"Debezium Format"),(0,r.yg)("p",null,"Changelog-Data-Capture Format: Serialization Schema Format: Deserialization Schema"),(0,r.yg)("p",null,"Debezium is a set of distributed services to capture changes in your databases so that your applications can see those changes and respond to them. Debezium records all row-level changes within each database table in a ",(0,r.yg)("em",{parentName:"p"},"change event stream"),", and applications simply read these streams to see the change events in the same order in which they occurred."),(0,r.yg)("p",null,"Seatunnel supports to interpret Debezium JSON messages as INSERT/UPDATE/DELETE messages into seatunnel system. This is useful in many cases to leverage this feature, such as"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"    synchronizing incremental data from databases to other systems\n    auditing logs\n    real-time materialized views on databases\n    temporal join changing history of a database table and so on.\n")),(0,r.yg)("p",null,"Seatunnel also supports to encode the INSERT/UPDATE/DELETE messages in Seatunnel asDebezium JSON messages, and emit to storage like Kafka."),(0,r.yg)("h1",{id:"format-options"},"Format Options"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Option"),(0,r.yg)("th",{parentName:"tr",align:null},"Default"),(0,r.yg)("th",{parentName:"tr",align:null},"Required"),(0,r.yg)("th",{parentName:"tr",align:null},"Description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"format"),(0,r.yg)("td",{parentName:"tr",align:null},"(none)"),(0,r.yg)("td",{parentName:"tr",align:null},"yes"),(0,r.yg)("td",{parentName:"tr",align:null},"Specify what format to use, here should be 'debezium_json'.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"debezium-json.ignore-parse-errors"),(0,r.yg)("td",{parentName:"tr",align:null},"false"),(0,r.yg)("td",{parentName:"tr",align:null},"no"),(0,r.yg)("td",{parentName:"tr",align:null},"Skip fields and rows with parse errors instead of failing. Fields are set to null in case of errors.")))),(0,r.yg)("h1",{id:"how-to-use"},"How To Use"),(0,r.yg)("h2",{id:"kafka-uses-example"},"Kafka Uses example"),(0,r.yg)("p",null,"Debezium provides a unified format for changelog, here is a simple example for an update operation captured from a MySQL products table:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},'{\n    "before": {\n        "id": 111,\n        "name": "scooter",\n        "description": "Big 2-wheel scooter ",\n        "weight": 5.18\n    },\n    "after": {\n        "id": 111,\n        "name": "scooter",\n        "description": "Big 2-wheel scooter ",\n        "weight": 5.17\n    },\n    "source": {\n        "version": "1.1.1.Final",\n        "connector": "mysql",\n        "name": "dbserver1",\n        "ts_ms": 1589362330000,\n        "snapshot": "false",\n        "db": "inventory",\n        "table": "products",\n        "server_id": 223344,\n        "gtid": null,\n        "file": "mysql-bin.000003",\n        "pos": 2090,\n        "row": 0,\n        "thread": 2,\n        "query": null\n    },\n    "op": "u",\n    "ts_ms": 1589362330904,\n    "transaction": null\n}\n')),(0,r.yg)("p",null,"Note: please refer to ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/debezium/debezium/blob/v1.9.8.Final/documentation/modules/ROOT/pages/connectors/mysql.adoc#data-change-events"},"Debezium documentation")," about the meaning of each fields."),(0,r.yg)("p",null,"The MySQL products table has 4 columns (id, name, description and weight).\nThe above JSON message is an update change event on the products table where the weight value of the row with id = 111 is changed from 5.18 to 5.17.\nAssuming the messages have been synchronized to Kafka topic products_binlog, then we can use the following Seatunnel conf to consume this topic and interpret the change events by Debezium format."),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"In this config, you must specify the ",(0,r.yg)("inlineCode",{parentName:"strong"},"schema")," and ",(0,r.yg)("inlineCode",{parentName:"strong"},"debezium_record_include_schema")," options ")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"schema")," should same with your table format"),(0,r.yg)("li",{parentName:"ul"},"if your json data contains ",(0,r.yg)("inlineCode",{parentName:"li"},"schema")," field, ",(0,r.yg)("inlineCode",{parentName:"li"},"debezium_record_include_schema")," should be true, and if your json data doesn't contains ",(0,r.yg)("inlineCode",{parentName:"li"},"schema")," field, ",(0,r.yg)("inlineCode",{parentName:"li"},"debezium_record_include_schema")," should be false"),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},'{"schema" : {}, "payload": { "before" : {}, "after": {} ... } }')," --\x3e ",(0,r.yg)("inlineCode",{parentName:"li"},"true")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},'{"before" : {}, "after": {} ... }')," --\x3e ",(0,r.yg)("inlineCode",{parentName:"li"},"false"))),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},'env {\n    parallelism = 1\n    job.mode = "BATCH"\n}\n\nsource {\n  Kafka {\n    bootstrap.servers = "kafkaCluster:9092"\n    topic = "products_binlog"\n    result_table_name = "kafka_name"\n    start_mode = earliest\n    schema = {\n      fields {\n           id = "int"\n           name = "string"\n           description = "string"\n           weight = "string"\n      }\n    }\n    debezium_record_include_schema = false\n    format = debezium_json\n  }\n\n}\n\ntransform {\n}\n\nsink {\n  Kafka {\n    bootstrap.servers = "kafkaCluster:9092"\n    topic = "consume-binlog"\n    format = debezium_json\n  }\n}\n')))}p.isMDXComponent=!0}}]);