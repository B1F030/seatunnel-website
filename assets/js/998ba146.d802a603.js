"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[97695],{15680:(e,n,t)=>{t.d(n,{xA:()=>u,yg:()=>f});var r=t(96540);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=r.createContext({}),c=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=c(e.components);return r.createElement(l.Provider,{value:n},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(t),d=o,f=p["".concat(l,".").concat(d)]||p[d]||m[d]||a;return t?r.createElement(f,i(i({ref:n},u),{},{components:t})):r.createElement(f,i({ref:n},u))}));function f(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=d;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s[p]="string"==typeof e?e:o,i[1]=s;for(var c=2;c<a;c++)i[c]=t[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},22804:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var r=t(58168),o=(t(96540),t(15680));const a={sidebar_position:10},i=void 0,s={unversionedId:"seatunnel-engine/tcp",id:"version-2.3.7/seatunnel-engine/tcp",title:"tcp",description:"-----------------",source:"@site/versioned_docs/version-2.3.7/seatunnel-engine/tcp.md",sourceDirName:"seatunnel-engine",slug:"/seatunnel-engine/tcp",permalink:"/docs/2.3.7/seatunnel-engine/tcp",draft:!1,editUrl:"https://github.com/apache/incubator-seatunnel-website/edit/main/versioned_docs/version-2.3.7/seatunnel-engine/tcp.md",tags:[],version:"2.3.7",sidebarPosition:10,frontMatter:{sidebar_position:10},sidebar:"docs",previous:{title:"engine-jar-storage-mode",permalink:"/docs/2.3.7/seatunnel-engine/engine-jar-storage-mode"},next:{title:"resource-isolation",permalink:"/docs/2.3.7/seatunnel-engine/resource-isolation"}},l={},c=[],u={toc:c},p="wrapper";function m(e){let{components:n,...t}=e;return(0,o.yg)(p,(0,r.A)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,o.yg)("hr",null),(0,o.yg)("h1",{id:"tcp-network"},"TCP Network"),(0,o.yg)("p",null,"If multicast is not the preferred way of discovery for your environment, then you can configure SeaTunnel Engine to be a full TCP/IP cluster. When you configure SeaTunnel Engine to discover members by TCP/IP, you must list all or a subset of the members' host names and/or IP addresses as cluster members. You do not have to list all of these cluster members, but at least one of the listed members has to be active in the cluster when a new member joins."),(0,o.yg)("p",null,"To configure your Hazelcast to be a full TCP/IP cluster, set the following configuration elements. See the tcp-ip element section for the full descriptions of the TCP/IP discovery configuration elements."),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"Set the enabled attribute of the tcp-ip element to true."),(0,o.yg)("li",{parentName:"ul"},"Provide your member elements within the tcp-ip element.")),(0,o.yg)("p",null,"The following is an example declarative configuration."),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-yaml"},"hazelcast:\n  network:\n    join:\n      tcp-ip:\n        enabled: true\n        member-list:\n          - machine1\n          - machine2\n          - machine3:5799\n          - 192.168.1.0-7\n          - 192.168.1.21\n")),(0,o.yg)("p",null,"As shown above, you can provide IP addresses or host names for member elements. You can also give a range of IP addresses, such as ",(0,o.yg)("inlineCode",{parentName:"p"},"192.168.1.0-7"),"."),(0,o.yg)("p",null,"Instead of providing members line-by-line as shown above, you also have the option to use the members element and write comma-separated IP addresses, as shown below."),(0,o.yg)("p",null,(0,o.yg)("inlineCode",{parentName:"p"},"<members>192.168.1.0-7,192.168.1.21</members>")),(0,o.yg)("p",null,"If you do not provide ports for the members, Hazelcast automatically tries the ports ",(0,o.yg)("inlineCode",{parentName:"p"},"5701"),", ",(0,o.yg)("inlineCode",{parentName:"p"},"5702")," and so on."))}m.isMDXComponent=!0}}]);