"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[73241],{3905:function(t,e,n){n.d(e,{Zo:function(){return u},kt:function(){return d}});var r=n(67294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},l=Object.keys(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var s=r.createContext({}),m=function(t){var e=r.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},u=function(t){var e=m(t.components);return r.createElement(s.Provider,{value:e},t.children)},c={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},p=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,l=t.originalType,s=t.parentName,u=o(t,["components","mdxType","originalType","parentName"]),p=m(n),d=a,g=p["".concat(s,".").concat(d)]||p[d]||c[d]||l;return n?r.createElement(g,i(i({ref:e},u),{},{components:n})):r.createElement(g,i({ref:e},u))}));function d(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var l=n.length,i=new Array(l);i[0]=p;var o={};for(var s in e)hasOwnProperty.call(e,s)&&(o[s]=e[s]);o.originalType=t,o.mdxType="string"==typeof t?t:a,i[1]=o;for(var m=2;m<l;m++)i[m]=n[m];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},16509:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return o},contentTitle:function(){return s},metadata:function(){return m},assets:function(){return u},toc:function(){return c},default:function(){return d}});var r=n(87462),a=n(63366),l=(n(67294),n(3905)),i=["components"],o={},s="Email",m={unversionedId:"connector-v2/source/Email",id:"connector-v2/source/Email",title:"Email",description:"Email source connector",source:"@site/docs/connector-v2/source/Email.md",sourceDirName:"connector-v2/source",slug:"/connector-v2/source/Email",permalink:"/docs/connector-v2/source/Email",editUrl:"https://github.com/apache/incubator-seatunnel-website/edit/main/docs/connector-v2/source/Email.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Clickhouse",permalink:"/docs/connector-v2/source/Clickhouse"},next:{title:"Http",permalink:"/docs/connector-v2/source/Http"}},u={},c=[{value:"Description",id:"description",level:2},{value:"Options",id:"options",level:2},{value:"email_from_address string",id:"email_from_address-string",level:3},{value:"email_to_address string",id:"email_to_address-string",level:3},{value:"email_host string",id:"email_host-string",level:3},{value:"email_transport_protocol string",id:"email_transport_protocol-string",level:3},{value:"email_smtp_auth string",id:"email_smtp_auth-string",level:3},{value:"email_authorization_code string",id:"email_authorization_code-string",level:3},{value:"email_message_headline string",id:"email_message_headline-string",level:3},{value:"email_message_content string",id:"email_message_content-string",level:3},{value:"Example",id:"example",level:2}],p={toc:c};function d(t){var e=t.components,n=(0,a.Z)(t,i);return(0,l.kt)("wrapper",(0,r.Z)({},p,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"email"},"Email"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Email source connector")),(0,l.kt)("h2",{id:"description"},"Description"),(0,l.kt)("p",null,"Send the data as a file to email."),(0,l.kt)("p",null," The tested email version is 1.5.6."),(0,l.kt)("h2",{id:"options"},"Options"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"name"),(0,l.kt)("th",{parentName:"tr",align:null},"type"),(0,l.kt)("th",{parentName:"tr",align:null},"required"),(0,l.kt)("th",{parentName:"tr",align:null},"default value"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"email_from_address"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"yes"),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"email_to_address"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"yes"),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"email_host"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"yes"),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"email_transport_protocol"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"yes"),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"email_smtp_auth"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"yes"),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"email_authorization_code"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"yes"),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"email_message_headline"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"yes"),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"email_message_content"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"yes"),(0,l.kt)("td",{parentName:"tr",align:null},"-")))),(0,l.kt)("h3",{id:"email_from_address-string"},"email_from_address ","[string]"),(0,l.kt)("p",null,"Sender Email Address ."),(0,l.kt)("h3",{id:"email_to_address-string"},"email_to_address ","[string]"),(0,l.kt)("p",null,"Address to receive mail."),(0,l.kt)("h3",{id:"email_host-string"},"email_host ","[string]"),(0,l.kt)("p",null,"SMTP server to connect to."),(0,l.kt)("h3",{id:"email_transport_protocol-string"},"email_transport_protocol ","[string]"),(0,l.kt)("p",null,"The protocol to load the session ."),(0,l.kt)("h3",{id:"email_smtp_auth-string"},"email_smtp_auth ","[string]"),(0,l.kt)("p",null,"Whether to authenticate the customer."),(0,l.kt)("h3",{id:"email_authorization_code-string"},"email_authorization_code ","[string]"),(0,l.kt)("p",null,"authorization code,You can obtain the authorization code from the mailbox Settings."),(0,l.kt)("h3",{id:"email_message_headline-string"},"email_message_headline ","[string]"),(0,l.kt)("p",null,"The subject line of the entire message."),(0,l.kt)("h3",{id:"email_message_content-string"},"email_message_content ","[string]"),(0,l.kt)("p",null,"The body of the entire message."),(0,l.kt)("h2",{id:"example"},"Example"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'\n EmailSink {\n      email_from_address = "xxxxxx@qq.com"\n      email_to_address = "xxxxxx@163.com"\n      email_host="smtp.qq.com"\n      email_transport_protocol="smtp"\n      email_smtp_auth="true"\n      email_authorization_code=""\n      email_message_headline=""\n      email_message_content=""\n   }\n\n')))}d.isMDXComponent=!0}}]);