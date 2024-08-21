"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[94353],{15680:(e,n,t)=>{t.d(n,{xA:()=>c,yg:()=>k});var a=t(96540);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var u=a.createContext({}),i=function(e){var n=a.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},c=function(e){var n=i(e.components);return a.createElement(u.Provider,{value:n},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},g=a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,l=e.originalType,u=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=i(t),g=o,k=d["".concat(u,".").concat(g)]||d[g]||p[g]||l;return t?a.createElement(k,r(r({ref:n},c),{},{components:t})):a.createElement(k,r({ref:n},c))}));function k(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var l=t.length,r=new Array(l);r[0]=g;var s={};for(var u in n)hasOwnProperty.call(n,u)&&(s[u]=n[u]);s.originalType=e,s[d]="string"==typeof e?e:o,r[1]=s;for(var i=2;i<l;i++)r[i]=t[i];return a.createElement.apply(null,r)}return a.createElement.apply(null,t)}g.displayName="MDXCreateElement"},32535:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>r,default:()=>p,frontMatter:()=>l,metadata:()=>s,toc:()=>i});var a=t(58168),o=(t(96540),t(15680));const l={sidebar_position:2},r=void 0,s={unversionedId:"start-v2/locally/quick-start-seatunnel-engine",id:"version-2.3.7/start-v2/locally/quick-start-seatunnel-engine",title:"quick-start-seatunnel-engine",description:"----------------",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.3.7/start-v2/locally/quick-start-seatunnel-engine.md",sourceDirName:"start-v2/locally",slug:"/start-v2/locally/quick-start-seatunnel-engine",permalink:"/zh-CN/docs/2.3.7/start-v2/locally/quick-start-seatunnel-engine",draft:!1,editUrl:"https://github.com/apache/incubator-seatunnel-website/edit/main/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.3.7/start-v2/locally/quick-start-seatunnel-engine.md",tags:[],version:"2.3.7",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"docs",previous:{title:"deployment",permalink:"/zh-CN/docs/2.3.7/start-v2/locally/deployment"},next:{title:"quick-start-flink",permalink:"/zh-CN/docs/2.3.7/start-v2/locally/quick-start-flink"}},u={},i=[{value:"\u6b65\u9aa4 1: \u90e8\u7f72SeaTunnel\u53ca\u8fde\u63a5\u5668",id:"\u6b65\u9aa4-1-\u90e8\u7f72seatunnel\u53ca\u8fde\u63a5\u5668",level:2},{value:"\u6b65\u9aa4 2: \u6dfb\u52a0\u4f5c\u4e1a\u914d\u7f6e\u6587\u4ef6\u6765\u5b9a\u4e49\u4f5c\u4e1a",id:"\u6b65\u9aa4-2-\u6dfb\u52a0\u4f5c\u4e1a\u914d\u7f6e\u6587\u4ef6\u6765\u5b9a\u4e49\u4f5c\u4e1a",level:2},{value:"\u6b65\u9aa4 3: \u8fd0\u884cSeaTunnel\u5e94\u7528\u7a0b\u5e8f",id:"\u6b65\u9aa4-3-\u8fd0\u884cseatunnel\u5e94\u7528\u7a0b\u5e8f",level:2},{value:"\u6b64\u5916",id:"\u6b64\u5916",level:2}],c={toc:i},d="wrapper";function p(e){let{components:n,...t}=e;return(0,o.yg)(d,(0,a.A)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,o.yg)("hr",null),(0,o.yg)("h1",{id:"seatunnel-engine\u5feb\u901f\u5f00\u59cb"},"SeaTunnel Engine\u5feb\u901f\u5f00\u59cb"),(0,o.yg)("h2",{id:"\u6b65\u9aa4-1-\u90e8\u7f72seatunnel\u53ca\u8fde\u63a5\u5668"},"\u6b65\u9aa4 1: \u90e8\u7f72SeaTunnel\u53ca\u8fde\u63a5\u5668"),(0,o.yg)("p",null,"\u5728\u5f00\u59cb\u524d\uff0c\u8bf7\u786e\u4fdd\u60a8\u5df2\u7ecf\u6309\u7167",(0,o.yg)("a",{parentName:"p",href:"/zh-CN/docs/2.3.7/start-v2/locally/deployment"},"\u90e8\u7f72"),"\u4e2d\u7684\u63cf\u8ff0\u4e0b\u8f7d\u5e76\u90e8\u7f72\u4e86SeaTunnel\u3002"),(0,o.yg)("h2",{id:"\u6b65\u9aa4-2-\u6dfb\u52a0\u4f5c\u4e1a\u914d\u7f6e\u6587\u4ef6\u6765\u5b9a\u4e49\u4f5c\u4e1a"},"\u6b65\u9aa4 2: \u6dfb\u52a0\u4f5c\u4e1a\u914d\u7f6e\u6587\u4ef6\u6765\u5b9a\u4e49\u4f5c\u4e1a"),(0,o.yg)("p",null,"\u7f16\u8f91",(0,o.yg)("inlineCode",{parentName:"p"},"config/v2.batch.config.template"),"\uff0c\u5b83\u51b3\u5b9a\u4e86\u5f53seatunnel\u542f\u52a8\u540e\u6570\u636e\u8f93\u5165\u3001\u5904\u7406\u548c\u8f93\u51fa\u7684\u65b9\u5f0f\u53ca\u903b\u8f91\u3002\n\u4e0b\u9762\u662f\u914d\u7f6e\u6587\u4ef6\u7684\u793a\u4f8b\uff0c\u5b83\u4e0e\u4e0a\u9762\u63d0\u5230\u7684\u793a\u4f8b\u5e94\u7528\u7a0b\u5e8f\u76f8\u540c\u3002"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-hocon"},'env {\n  parallelism = 1\n  job.mode = "BATCH"\n}\n\nsource {\n  FakeSource {\n    result_table_name = "fake"\n    row.num = 16\n    schema = {\n      fields {\n        name = "string"\n        age = "int"\n      }\n    }\n  }\n}\n\ntransform {\n  FieldMapper {\n    source_table_name = "fake"\n    result_table_name = "fake1"\n    field_mapper = {\n      age = age\n      name = new_name\n    }\n  }\n}\n\nsink {\n  Console {\n    source_table_name = "fake1"\n  }\n}\n\n')),(0,o.yg)("p",null,"\u5173\u4e8e\u914d\u7f6e\u7684\u66f4\u591a\u4fe1\u606f\u8bf7\u67e5\u770b",(0,o.yg)("a",{parentName:"p",href:"/zh-CN/docs/2.3.7/concept/config"},"\u914d\u7f6e\u7684\u57fa\u672c\u6982\u5ff5")),(0,o.yg)("h2",{id:"\u6b65\u9aa4-3-\u8fd0\u884cseatunnel\u5e94\u7528\u7a0b\u5e8f"},"\u6b65\u9aa4 3: \u8fd0\u884cSeaTunnel\u5e94\u7528\u7a0b\u5e8f"),(0,o.yg)("p",null,"\u60a8\u53ef\u4ee5\u901a\u8fc7\u4ee5\u4e0b\u547d\u4ee4\u542f\u52a8\u5e94\u7528\u7a0b\u5e8f\uff1a"),(0,o.yg)("admonition",{type:"tip"},(0,o.yg)("p",{parentName:"admonition"},"\u4ece2.3.1\u7248\u672c\u5f00\u59cb\uff0cseatunnel.sh\u4e2d\u7684-e\u53c2\u6570\u88ab\u5e9f\u5f03\uff0c\u8bf7\u6539\u7528-m\u53c2\u6570\u3002")),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-shell"},'cd "apache-seatunnel-${version}"\n./bin/seatunnel.sh --config ./config/v2.batch.config.template -m local\n\n')),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},"\u67e5\u770b\u8f93\u51fa"),": \u5f53\u60a8\u8fd0\u884c\u8be5\u547d\u4ee4\u65f6\uff0c\u60a8\u53ef\u4ee5\u5728\u63a7\u5236\u53f0\u4e2d\u770b\u5230\u5b83\u7684\u8f93\u51fa\u3002\u60a8\u53ef\u4ee5\u8ba4\u4e3a\u8fd9\u662f\u547d\u4ee4\u8fd0\u884c\u6210\u529f\u6216\u5931\u8d25\u7684\u6807\u5fd7\u3002"),(0,o.yg)("p",null,"SeaTunnel\u63a7\u5236\u53f0\u5c06\u4f1a\u6253\u5370\u4e00\u4e9b\u5982\u4e0b\u65e5\u5fd7\u4fe1\u606f:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-shell"},"2022-12-19 11:01:45,417 INFO  org.apache.seatunnel.connectors.seatunnel.console.sink.ConsoleSinkWriter - output rowType: name<STRING>, age<INT>\n2022-12-19 11:01:46,489 INFO  org.apache.seatunnel.connectors.seatunnel.console.sink.ConsoleSinkWriter - subtaskIndex=0 rowIndex=1:  SeaTunnelRow#tableId=-1 SeaTunnelRow#kind=INSERT: CpiOd, 8520946\n2022-12-19 11:01:46,490 INFO  org.apache.seatunnel.connectors.seatunnel.console.sink.ConsoleSinkWriter - subtaskIndex=0 rowIndex=2: SeaTunnelRow#tableId=-1 SeaTunnelRow#kind=INSERT: eQqTs, 1256802974\n2022-12-19 11:01:46,490 INFO  org.apache.seatunnel.connectors.seatunnel.console.sink.ConsoleSinkWriter - subtaskIndex=0 rowIndex=3: SeaTunnelRow#tableId=-1 SeaTunnelRow#kind=INSERT: UsRgO, 2053193072\n2022-12-19 11:01:46,490 INFO  org.apache.seatunnel.connectors.seatunnel.console.sink.ConsoleSinkWriter - subtaskIndex=0 rowIndex=4: SeaTunnelRow#tableId=-1 SeaTunnelRow#kind=INSERT: jDQJj, 1993016602\n2022-12-19 11:01:46,490 INFO  org.apache.seatunnel.connectors.seatunnel.console.sink.ConsoleSinkWriter - subtaskIndex=0 rowIndex=5: SeaTunnelRow#tableId=-1 SeaTunnelRow#kind=INSERT: rqdKp, 1392682764\n2022-12-19 11:01:46,490 INFO  org.apache.seatunnel.connectors.seatunnel.console.sink.ConsoleSinkWriter - subtaskIndex=0 rowIndex=6: SeaTunnelRow#tableId=-1 SeaTunnelRow#kind=INSERT: wCoWN, 986999925\n2022-12-19 11:01:46,490 INFO  org.apache.seatunnel.connectors.seatunnel.console.sink.ConsoleSinkWriter - subtaskIndex=0 rowIndex=7: SeaTunnelRow#tableId=-1 SeaTunnelRow#kind=INSERT: qomTU, 72775247\n2022-12-19 11:01:46,490 INFO  org.apache.seatunnel.connectors.seatunnel.console.sink.ConsoleSinkWriter - subtaskIndex=0 rowIndex=8: SeaTunnelRow#tableId=-1 SeaTunnelRow#kind=INSERT: jcqXR, 1074529204\n2022-12-19 11:01:46,490 INFO  org.apache.seatunnel.connectors.seatunnel.console.sink.ConsoleSinkWriter - subtaskIndex=0 rowIndex=9: SeaTunnelRow#tableId=-1 SeaTunnelRow#kind=INSERT: AkWIO, 1961723427\n2022-12-19 11:01:46,490 INFO  org.apache.seatunnel.connectors.seatunnel.console.sink.ConsoleSinkWriter - subtaskIndex=0 rowIndex=10: SeaTunnelRow#tableId=-1 SeaTunnelRow#kind=INSERT: hBoib, 929089763\n2022-12-19 11:01:46,490 INFO  org.apache.seatunnel.connectors.seatunnel.console.sink.ConsoleSinkWriter - subtaskIndex=0 rowIndex=11: SeaTunnelRow#tableId=-1 SeaTunnelRow#kind=INSERT: GSvzm, 827085798\n2022-12-19 11:01:46,491 INFO  org.apache.seatunnel.connectors.seatunnel.console.sink.ConsoleSinkWriter - subtaskIndex=0 rowIndex=12: SeaTunnelRow#tableId=-1 SeaTunnelRow#kind=INSERT: NNAYI, 94307133\n2022-12-19 11:01:46,491 INFO  org.apache.seatunnel.connectors.seatunnel.console.sink.ConsoleSinkWriter - subtaskIndex=0 rowIndex=13: SeaTunnelRow#tableId=-1 SeaTunnelRow#kind=INSERT: EexFl, 1823689599\n2022-12-19 11:01:46,491 INFO  org.apache.seatunnel.connectors.seatunnel.console.sink.ConsoleSinkWriter - subtaskIndex=0 rowIndex=14: SeaTunnelRow#tableId=-1 SeaTunnelRow#kind=INSERT: CBXUb, 869582787\n2022-12-19 11:01:46,491 INFO  org.apache.seatunnel.connectors.seatunnel.console.sink.ConsoleSinkWriter - subtaskIndex=0 rowIndex=15: SeaTunnelRow#tableId=-1 SeaTunnelRow#kind=INSERT: Wbxtm, 1469371353\n2022-12-19 11:01:46,491 INFO  org.apache.seatunnel.connectors.seatunnel.console.sink.ConsoleSinkWriter - subtaskIndex=0 rowIndex=16: SeaTunnelRow#tableId=-1 SeaTunnelRow#kind=INSERT: mIJDt, 995616438\n")),(0,o.yg)("h2",{id:"\u6b64\u5916"},"\u6b64\u5916"),(0,o.yg)("p",null,"\u73b0\u5728,\u60a8\u5df2\u7ecf\u5feb\u901f\u6d4f\u89c8\u4e86SeaTunnel\uff0c\u53ef\u4ee5\u901a\u8fc7",(0,o.yg)("a",{parentName:"p",href:"../../../en/connector-v2/source/FakeSource.md"},"\u8fde\u63a5\u5668"),"\u6765\u627e\u5230SeaTunnel\u6240\u652f\u6301\u7684\u6240\u6709sources\u548csinks\u3002\n\u5982\u679c\u60a8\u60f3\u8981\u4e86\u89e3\u66f4\u591a\u5173\u4e8e\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605",(0,o.yg)("a",{parentName:"p",href:"/zh-CN/docs/2.3.7/seatunnel-engine/about"},"SeaTunnel\u5f15\u64ce"),". \u5728\u8fd9\u91cc\u4f60\u5c06\u4e86\u89e3\u5982\u4f55\u90e8\u7f72SeaTunnel Engine\u7684\u96c6\u7fa4\u6a21\u5f0f\u4ee5\u53ca\u5982\u4f55\u5728\u96c6\u7fa4\u6a21\u5f0f\u4e0b\u4f7f\u7528\u3002"))}p.isMDXComponent=!0}}]);