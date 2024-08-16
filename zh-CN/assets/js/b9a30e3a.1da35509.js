"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[46817],{15680:(e,t,n)=>{n.d(t,{xA:()=>s,yg:()=>d});var a=n(96540);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),c=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=c(e.components);return a.createElement(p.Provider,{value:t},e.children)},m="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),m=c(n),u=r,d=m["".concat(p,".").concat(u)]||m[u]||g[u]||o;return n?a.createElement(d,l(l({ref:t},s),{},{components:n})):a.createElement(d,l({ref:t},s))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=u;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[m]="string"==typeof e?e:r,l[1]=i;for(var c=2;c<o;c++)l[c]=n[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},56233:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>g,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var a=n(58168),r=(n(96540),n(15680));const o={},l="Kafka",i={unversionedId:"connector-v2/source/kafka",id:"version-2.3.0-beta/connector-v2/source/kafka",title:"Kafka",description:"Kafka source connector",source:"@site/versioned_docs/version-2.3.0-beta/connector-v2/source/kafka.md",sourceDirName:"connector-v2/source",slug:"/connector-v2/source/kafka",permalink:"/zh-CN/docs/2.3.0-beta/connector-v2/source/kafka",draft:!1,editUrl:"https://github.com/apache/incubator-seatunnel-website/edit/main/versioned_docs/version-2.3.0-beta/connector-v2/source/kafka.md",tags:[],version:"2.3.0-beta",frontMatter:{},sidebar:"docs",previous:{title:"Common Options",permalink:"/zh-CN/docs/2.3.0-beta/connector-v2/source/common-options"},next:{title:"Sink",permalink:"/zh-CN/docs/2.3.0-beta/category/sink-v2"}},p={},c=[{value:"Description",id:"description",level:2},{value:"Key features",id:"key-features",level:2},{value:"Options",id:"options",level:2},{value:"topic string",id:"topic-string",level:3},{value:"bootstrap.servers string",id:"bootstrapservers-string",level:3},{value:"pattern boolean",id:"pattern-boolean",level:3},{value:"consumer.group string",id:"consumergroup-string",level:3},{value:"commit_on_checkpoint boolean",id:"commit_on_checkpoint-boolean",level:3},{value:"kafka.* string",id:"kafka-string",level:3},{value:"common-options",id:"common-options",level:3},{value:"schema",id:"schema",level:3},{value:"format",id:"format",level:2},{value:"Example",id:"example",level:2},{value:"Simple",id:"simple",level:3},{value:"Regex Topic",id:"regex-topic",level:3},{value:"Changelog",id:"changelog",level:2},{value:"2.3.0-beta 2022-10-20",id:"230-beta-2022-10-20",level:3}],s={toc:c},m="wrapper";function g(e){let{components:t,...n}=e;return(0,r.yg)(m,(0,a.A)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"kafka"},"Kafka"),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"Kafka source connector")),(0,r.yg)("h2",{id:"description"},"Description"),(0,r.yg)("p",null,"Source connector for Apache Kafka."),(0,r.yg)("h2",{id:"key-features"},"Key features"),(0,r.yg)("ul",{className:"contains-task-list"},(0,r.yg)("li",{parentName:"ul",className:"task-list-item"},(0,r.yg)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ",(0,r.yg)("a",{parentName:"li",href:"/zh-CN/docs/2.3.0-beta/concept/connector-v2-features"},"batch")),(0,r.yg)("li",{parentName:"ul",className:"task-list-item"},(0,r.yg)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ",(0,r.yg)("a",{parentName:"li",href:"/zh-CN/docs/2.3.0-beta/concept/connector-v2-features"},"stream")),(0,r.yg)("li",{parentName:"ul",className:"task-list-item"},(0,r.yg)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ",(0,r.yg)("a",{parentName:"li",href:"/zh-CN/docs/2.3.0-beta/concept/connector-v2-features"},"exactly-once")),(0,r.yg)("li",{parentName:"ul",className:"task-list-item"},(0,r.yg)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ",(0,r.yg)("a",{parentName:"li",href:"/zh-CN/docs/2.3.0-beta/concept/connector-v2-features"},"schema projection")),(0,r.yg)("li",{parentName:"ul",className:"task-list-item"},(0,r.yg)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ",(0,r.yg)("a",{parentName:"li",href:"/zh-CN/docs/2.3.0-beta/concept/connector-v2-features"},"parallelism")),(0,r.yg)("li",{parentName:"ul",className:"task-list-item"},(0,r.yg)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ",(0,r.yg)("a",{parentName:"li",href:"/zh-CN/docs/2.3.0-beta/concept/connector-v2-features"},"support user-defined split"))),(0,r.yg)("h2",{id:"options"},"Options"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"name"),(0,r.yg)("th",{parentName:"tr",align:null},"type"),(0,r.yg)("th",{parentName:"tr",align:null},"required"),(0,r.yg)("th",{parentName:"tr",align:null},"default value"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"topic"),(0,r.yg)("td",{parentName:"tr",align:null},"String"),(0,r.yg)("td",{parentName:"tr",align:null},"yes"),(0,r.yg)("td",{parentName:"tr",align:null},"-")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"bootstrap.servers"),(0,r.yg)("td",{parentName:"tr",align:null},"String"),(0,r.yg)("td",{parentName:"tr",align:null},"yes"),(0,r.yg)("td",{parentName:"tr",align:null},"-")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"pattern"),(0,r.yg)("td",{parentName:"tr",align:null},"Boolean"),(0,r.yg)("td",{parentName:"tr",align:null},"no"),(0,r.yg)("td",{parentName:"tr",align:null},"false")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"consumer.group"),(0,r.yg)("td",{parentName:"tr",align:null},"String"),(0,r.yg)("td",{parentName:"tr",align:null},"no"),(0,r.yg)("td",{parentName:"tr",align:null},"SeaTunnel-Consumer-Group")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"commit_on_checkpoint"),(0,r.yg)("td",{parentName:"tr",align:null},"Boolean"),(0,r.yg)("td",{parentName:"tr",align:null},"no"),(0,r.yg)("td",{parentName:"tr",align:null},"true")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"kafka.*"),(0,r.yg)("td",{parentName:"tr",align:null},"String"),(0,r.yg)("td",{parentName:"tr",align:null},"no"),(0,r.yg)("td",{parentName:"tr",align:null},"-")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"common-options"),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},"no"),(0,r.yg)("td",{parentName:"tr",align:null},"-")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"schema"),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},"no"),(0,r.yg)("td",{parentName:"tr",align:null},"-")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"format"),(0,r.yg)("td",{parentName:"tr",align:null},"String"),(0,r.yg)("td",{parentName:"tr",align:null},"no"),(0,r.yg)("td",{parentName:"tr",align:null},"json")))),(0,r.yg)("h3",{id:"topic-string"},"topic ","[string]"),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"Kafka topic")," name. If there are multiple ",(0,r.yg)("inlineCode",{parentName:"p"},"topics"),", use ",(0,r.yg)("inlineCode",{parentName:"p"},",")," to split, for example: ",(0,r.yg)("inlineCode",{parentName:"p"},'"tpc1,tpc2"'),"."),(0,r.yg)("h3",{id:"bootstrapservers-string"},"bootstrap.servers ","[string]"),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"Kafka")," cluster address, separated by ",(0,r.yg)("inlineCode",{parentName:"p"},'","'),"."),(0,r.yg)("h3",{id:"pattern-boolean"},"pattern ","[boolean]"),(0,r.yg)("p",null,"If ",(0,r.yg)("inlineCode",{parentName:"p"},"pattern")," is set to ",(0,r.yg)("inlineCode",{parentName:"p"},"true"),",the regular expression for a pattern of topic names to read from. All topics in clients with names that match the specified regular expression will be subscribed by the consumer."),(0,r.yg)("h3",{id:"consumergroup-string"},"consumer.group ","[string]"),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"Kafka consumer group id"),", used to distinguish different consumer groups."),(0,r.yg)("h3",{id:"commit_on_checkpoint-boolean"},"commit_on_checkpoint ","[boolean]"),(0,r.yg)("p",null,"If true the consumer's offset will be periodically committed in the background."),(0,r.yg)("h3",{id:"kafka-string"},"kafka.* ","[string]"),(0,r.yg)("p",null,"In addition to the above necessary parameters that must be specified by the ",(0,r.yg)("inlineCode",{parentName:"p"},"Kafka consumer")," client, users can also specify multiple ",(0,r.yg)("inlineCode",{parentName:"p"},"consumer")," client non-mandatory parameters, covering ",(0,r.yg)("a",{parentName:"p",href:"https://kafka.apache.org/documentation.html#consumerconfigs"},"all consumer parameters specified in the official Kafka document"),"."),(0,r.yg)("p",null,"The way to specify parameters is to add the prefix ",(0,r.yg)("inlineCode",{parentName:"p"},"kafka.")," to the original parameter name. For example, the way to specify ",(0,r.yg)("inlineCode",{parentName:"p"},"auto.offset.reset")," is: ",(0,r.yg)("inlineCode",{parentName:"p"},"kafka.auto.offset.reset = latest")," . If these non-essential parameters are not specified, they will use the default values given in the official Kafka documentation."),(0,r.yg)("h3",{id:"common-options"},"common-options"),(0,r.yg)("p",null,"Source plugin common parameters, please refer to ",(0,r.yg)("a",{parentName:"p",href:"/zh-CN/docs/2.3.0-beta/connector-v2/source/common-options"},"Source Common Options")," for details."),(0,r.yg)("h3",{id:"schema"},"schema"),(0,r.yg)("p",null,"The structure of the data, including field names and field types."),(0,r.yg)("h2",{id:"format"},"format"),(0,r.yg)("p",null,'Data format. The default format is json. Optional text format. The default field separator is ", ".\nIf you customize the delimiter, add the "field_delimiter" option.'),(0,r.yg)("h2",{id:"example"},"Example"),(0,r.yg)("h3",{id:"simple"},"Simple"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-hocon"},'source {\n\n  Kafka {\n    result_table_name = "kafka_name"\n    schema = {\n      fields {\n        name = "string"\n        age = "int"\n      }\n    }\n    format = text\n    field_delimiter = "#\u201c\n    topic = "topic_1,topic_2,topic_3"\n    bootstrap.server = "localhost:9092"\n    kafka.max.poll.records = 500\n    kafka.client.id = client_1\n  }\n  \n}\n')),(0,r.yg)("h3",{id:"regex-topic"},"Regex Topic"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-hocon"},'source {\n\n    Kafka {\n          topic = ".*seatunnel*."\n          pattern = "true" \n          bootstrap.servers = "localhost:9092"\n          consumer.group = "seatunnel_group"\n    }\n\n}\n')),(0,r.yg)("h2",{id:"changelog"},"Changelog"),(0,r.yg)("h3",{id:"230-beta-2022-10-20"},"2.3.0-beta 2022-10-20"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Add Kafka Source Connector")))}g.isMDXComponent=!0}}]);