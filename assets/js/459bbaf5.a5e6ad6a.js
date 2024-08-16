"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[38895],{15680:(e,t,n)=>{n.d(t,{xA:()=>d,yg:()=>m});var a=n(96540);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),g=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=g(e.components);return a.createElement(o.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},y=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=g(n),y=r,m=p["".concat(o,".").concat(y)]||p[y]||u[y]||l;return n?a.createElement(m,i(i({ref:t},d),{},{components:n})):a.createElement(m,i({ref:t},d))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=y;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s[p]="string"==typeof e?e:r,i[1]=s;for(var g=2;g<l;g++)i[g]=n[g];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}y.displayName="MDXCreateElement"},32703:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>s,toc:()=>g});var a=n(58168),r=(n(96540),n(15680));const l={},i="Redis",s={unversionedId:"connector/sink/Redis",id:"version-2.3.0-beta/connector/sink/Redis",title:"Redis",description:"Redis sink connector",source:"@site/versioned_docs/version-2.3.0-beta/connector/sink/Redis.md",sourceDirName:"connector/sink",slug:"/connector/sink/Redis",permalink:"/docs/2.3.0-beta/connector/sink/Redis",draft:!1,editUrl:"https://github.com/apache/incubator-seatunnel-website/edit/main/versioned_docs/version-2.3.0-beta/connector/sink/Redis.md",tags:[],version:"2.3.0-beta",frontMatter:{},sidebar:"docs",previous:{title:"Phoenix",permalink:"/docs/2.3.0-beta/connector/sink/Phoenix"},next:{title:"TiDB",permalink:"/docs/2.3.0-beta/connector/sink/Tidb"}},o={},g=[{value:"Description",id:"description",level:2},{value:"Options",id:"options",level:2},{value:"host string",id:"host-string",level:3},{value:"port int",id:"port-int",level:3},{value:"auth string",id:"auth-string",level:3},{value:"db_num int",id:"db_num-int",level:3},{value:"redis_timeout int",id:"redis_timeout-int",level:3},{value:"data_type string",id:"data_type-string",level:3},{value:"hash_name string",id:"hash_name-string",level:3},{value:"list_name string",id:"list_name-string",level:3},{value:"zset_name string",id:"zset_name-string",level:3},{value:"set_name string",id:"set_name-string",level:3},{value:"ttl int",id:"ttl-int",level:3},{value:"is_self_achieved boolean",id:"is_self_achieved-boolean",level:3},{value:"Examples",id:"examples",level:2}],d={toc:g},p="wrapper";function u(e){let{components:t,...n}=e;return(0,r.yg)(p,(0,a.A)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"redis"},"Redis"),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"Redis sink connector")),(0,r.yg)("h2",{id:"description"},"Description"),(0,r.yg)("p",null,"Write Rows to a Redis."),(0,r.yg)("admonition",{type:"tip"},(0,r.yg)("p",{parentName:"admonition"},"Engine Supported and plugin name"),(0,r.yg)("ul",{parentName:"admonition",className:"contains-task-list"},(0,r.yg)("li",{parentName:"ul",className:"task-list-item"},(0,r.yg)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","Spark: Redis"),(0,r.yg)("li",{parentName:"ul",className:"task-list-item"},(0,r.yg)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Flink"))),(0,r.yg)("h2",{id:"options"},"Options"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"name"),(0,r.yg)("th",{parentName:"tr",align:null},"type"),(0,r.yg)("th",{parentName:"tr",align:null},"required"),(0,r.yg)("th",{parentName:"tr",align:null},"default value"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"host"),(0,r.yg)("td",{parentName:"tr",align:null},"string"),(0,r.yg)("td",{parentName:"tr",align:null},"no"),(0,r.yg)("td",{parentName:"tr",align:null},'"localhost"')),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"port"),(0,r.yg)("td",{parentName:"tr",align:null},"int"),(0,r.yg)("td",{parentName:"tr",align:null},"no"),(0,r.yg)("td",{parentName:"tr",align:null},"6379")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"auth"),(0,r.yg)("td",{parentName:"tr",align:null},"string"),(0,r.yg)("td",{parentName:"tr",align:null},"no"),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"db_num"),(0,r.yg)("td",{parentName:"tr",align:null},"int"),(0,r.yg)("td",{parentName:"tr",align:null},"no"),(0,r.yg)("td",{parentName:"tr",align:null},"0")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"data_type"),(0,r.yg)("td",{parentName:"tr",align:null},"string"),(0,r.yg)("td",{parentName:"tr",align:null},"no"),(0,r.yg)("td",{parentName:"tr",align:null},'"KV"')),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"hash_name"),(0,r.yg)("td",{parentName:"tr",align:null},"string"),(0,r.yg)("td",{parentName:"tr",align:null},"no"),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"list_name"),(0,r.yg)("td",{parentName:"tr",align:null},"string"),(0,r.yg)("td",{parentName:"tr",align:null},"no"),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"set_name"),(0,r.yg)("td",{parentName:"tr",align:null},"string"),(0,r.yg)("td",{parentName:"tr",align:null},"no"),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"zset_name"),(0,r.yg)("td",{parentName:"tr",align:null},"string"),(0,r.yg)("td",{parentName:"tr",align:null},"no"),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"timeout"),(0,r.yg)("td",{parentName:"tr",align:null},"int"),(0,r.yg)("td",{parentName:"tr",align:null},"no"),(0,r.yg)("td",{parentName:"tr",align:null},"2000")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"ttl"),(0,r.yg)("td",{parentName:"tr",align:null},"int"),(0,r.yg)("td",{parentName:"tr",align:null},"no"),(0,r.yg)("td",{parentName:"tr",align:null},"0")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"is_self_achieved"),(0,r.yg)("td",{parentName:"tr",align:null},"boolean"),(0,r.yg)("td",{parentName:"tr",align:null},"no"),(0,r.yg)("td",{parentName:"tr",align:null},"false")))),(0,r.yg)("h3",{id:"host-string"},"host ","[string]"),(0,r.yg)("p",null,"Redis server address, default ",(0,r.yg)("inlineCode",{parentName:"p"},'"localhost"')),(0,r.yg)("h3",{id:"port-int"},"port ","[int]"),(0,r.yg)("p",null,"Redis service port, default ",(0,r.yg)("inlineCode",{parentName:"p"},"6379")),(0,r.yg)("h3",{id:"auth-string"},"auth ","[string]"),(0,r.yg)("p",null,"Redis authentication password"),(0,r.yg)("h3",{id:"db_num-int"},"db_num ","[int]"),(0,r.yg)("p",null,"Redis database index ID. It is connected to db ",(0,r.yg)("inlineCode",{parentName:"p"},"0")," by default"),(0,r.yg)("h3",{id:"redis_timeout-int"},"redis_timeout ","[int]"),(0,r.yg)("p",null,"Redis timeout"),(0,r.yg)("h3",{id:"data_type-string"},"data_type ","[string]"),(0,r.yg)("p",null,"Redis data type eg: ",(0,r.yg)("inlineCode",{parentName:"p"},"KV HASH LIST SET ZSET")),(0,r.yg)("h3",{id:"hash_name-string"},"hash_name ","[string]"),(0,r.yg)("p",null,"if redis data type is HASH must config hash name "),(0,r.yg)("h3",{id:"list_name-string"},"list_name ","[string]"),(0,r.yg)("p",null,"if redis data type is LIST must config list name"),(0,r.yg)("h3",{id:"zset_name-string"},"zset_name ","[string]"),(0,r.yg)("p",null,"if redis data type is ZSET must config zset name"),(0,r.yg)("h3",{id:"set_name-string"},"set_name ","[string]"),(0,r.yg)("p",null,"if redis data type is SET must config set name"),(0,r.yg)("h3",{id:"ttl-int"},"ttl ","[int]"),(0,r.yg)("p",null,"redis data expiration ttl, 0 means no expiration."),(0,r.yg)("h3",{id:"is_self_achieved-boolean"},"is_self_achieved ","[boolean]"),(0,r.yg)("p",null,'If a redis access by a self-achieved redis proxy, which is not support redis function of "info Replication"'),(0,r.yg)("h2",{id:"examples"},"Examples"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},'redis {\n  host = "localhost"\n  port = 6379\n  auth = "myPassword"\n  db_num = 1\n  data_type = "HASH"\n  hash_name = "test"\n  is_self_achieved = false\n}\n')))}u.isMDXComponent=!0}}]);