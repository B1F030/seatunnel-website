"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[79734],{15680:(e,a,t)=>{t.d(a,{xA:()=>c,yg:()=>g});var n=t(96540);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function l(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?l(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function i(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)t=l[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)t=l[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var u=n.createContext({}),s=function(e){var a=n.useContext(u),t=a;return e&&(t="function"==typeof e?e(a):o(o({},a),e)),t},c=function(e){var a=s(e.components);return n.createElement(u.Provider,{value:a},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},d=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,l=e.originalType,u=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=s(t),d=r,g=p["".concat(u,".").concat(d)]||p[d]||m[d]||l;return t?n.createElement(g,o(o({ref:a},c),{},{components:t})):n.createElement(g,o({ref:a},c))}));function g(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var l=t.length,o=new Array(l);o[0]=d;var i={};for(var u in a)hasOwnProperty.call(a,u)&&(i[u]=a[u]);i.originalType=e,i[p]="string"==typeof e?e:r,o[1]=i;for(var s=2;s<l;s++)o[s]=t[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},19365:(e,a,t)=>{t.d(a,{A:()=>o});var n=t(96540),r=t(20053);const l={tabItem:"tabItem_Ymn6"};function o(e){let{children:a,hidden:t,className:o}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.A)(l.tabItem,o),hidden:t},a)}},11470:(e,a,t)=>{t.d(a,{A:()=>k});var n=t(58168),r=t(96540),l=t(20053),o=t(23104),i=t(56347),u=t(57485),s=t(31682),c=t(89466);function p(e){return function(e){return r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:a}=e;return!!a&&"object"==typeof a&&"value"in a}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:a,label:t,attributes:n,default:r}}=e;return{value:a,label:t,attributes:n,default:r}}))}function m(e){const{values:a,children:t}=e;return(0,r.useMemo)((()=>{const e=a??p(t);return function(e){const a=(0,s.X)(e,((e,a)=>e.value===a.value));if(a.length>0)throw new Error(`Docusaurus error: Duplicate values "${a.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[a,t])}function d(e){let{value:a,tabValues:t}=e;return t.some((e=>e.value===a))}function g(e){let{queryString:a=!1,groupId:t}=e;const n=(0,i.W6)(),l=function(e){let{queryString:a=!1,groupId:t}=e;if("string"==typeof a)return a;if(!1===a)return null;if(!0===a&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:a,groupId:t});return[(0,u.aZ)(l),(0,r.useCallback)((e=>{if(!l)return;const a=new URLSearchParams(n.location.search);a.set(l,e),n.replace({...n.location,search:a.toString()})}),[l,n])]}function y(e){const{defaultValue:a,queryString:t=!1,groupId:n}=e,l=m(e),[o,i]=(0,r.useState)((()=>function(e){let{defaultValue:a,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(a){if(!d({value:a,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${a}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return a}const n=t.find((e=>e.default))??t[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:a,tabValues:l}))),[u,s]=g({queryString:t,groupId:n}),[p,y]=function(e){let{groupId:a}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(a),[n,l]=(0,c.Dv)(t);return[n,(0,r.useCallback)((e=>{t&&l.set(e)}),[t,l])]}({groupId:n}),f=(()=>{const e=u??p;return d({value:e,tabValues:l})?e:null})();(0,r.useLayoutEffect)((()=>{f&&i(f)}),[f]);return{selectedValue:o,selectValue:(0,r.useCallback)((e=>{if(!d({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);i(e),s(e),y(e)}),[s,y,l]),tabValues:l}}var f=t(92303);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function h(e){let{className:a,block:t,selectedValue:i,selectValue:u,tabValues:s}=e;const c=[],{blockElementScrollPositionUntilNextRender:p}=(0,o.a_)(),m=e=>{const a=e.currentTarget,t=c.indexOf(a),n=s[t].value;n!==i&&(p(a),u(n))},d=e=>{let a=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":{const t=c.indexOf(e.currentTarget)+1;a=c[t]??c[0];break}case"ArrowLeft":{const t=c.indexOf(e.currentTarget)-1;a=c[t]??c[c.length-1];break}}a?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.A)("tabs",{"tabs--block":t},a)},s.map((e=>{let{value:a,label:t,attributes:o}=e;return r.createElement("li",(0,n.A)({role:"tab",tabIndex:i===a?0:-1,"aria-selected":i===a,key:a,ref:e=>c.push(e),onKeyDown:d,onClick:m},o,{className:(0,l.A)("tabs__item",b.tabItem,o?.className,{"tabs__item--active":i===a})}),t??a)})))}function v(e){let{lazy:a,children:t,selectedValue:n}=e;const l=(Array.isArray(t)?t:[t]).filter(Boolean);if(a){const e=l.find((e=>e.props.value===n));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},l.map(((e,a)=>(0,r.cloneElement)(e,{key:a,hidden:e.props.value!==n}))))}function N(e){const a=y(e);return r.createElement("div",{className:(0,l.A)("tabs-container",b.tabList)},r.createElement(h,(0,n.A)({},e,a)),r.createElement(v,(0,n.A)({},e,a)))}function k(e){const a=(0,f.A)();return r.createElement(N,(0,n.A)({key:String(a)},e))}},93:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>c,contentTitle:()=>u,default:()=>g,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var n=t(58168),r=(t(96540),t(15680)),l=t(11470),o=t(19365);const i={},u="Fake",s={unversionedId:"connector/source/Fake",id:"version-2.1.1/connector/source/Fake",title:"Fake",description:"Description",source:"@site/versioned_docs/version-2.1.1/connector/source/Fake.mdx",sourceDirName:"connector/source",slug:"/connector/source/Fake",permalink:"/zh-CN/docs/2.1.1/connector/source/Fake",draft:!1,editUrl:"https://github.com/apache/incubator-seatunnel-website/edit/main/versioned_docs/version-2.1.1/connector/source/Fake.mdx",tags:[],version:"2.1.1",frontMatter:{},sidebar:"docs",previous:{title:"Elasticsearch",permalink:"/zh-CN/docs/2.1.1/connector/source/Elasticsearch"},next:{title:"Feishu Sheet",permalink:"/zh-CN/docs/2.1.1/connector/source/FeishuSheet"}},c={},p=[{value:"Description",id:"description",level:2},{value:"Options",id:"options",level:2},{value:"content array",id:"content-array",level:3},{value:"rate number",id:"rate-number",level:3},{value:"parallelism Int",id:"parallelism-int",level:3},{value:"common options string",id:"common-options-string",level:3},{value:"Examples",id:"examples",level:2},{value:"Fake",id:"fake-1",level:3},{value:"FakeStream",id:"fakestream",level:3},{value:"FakeSourceStream",id:"fakesourcestream",level:3},{value:"FakeSource",id:"fakesource",level:3}],m={toc:p},d="wrapper";function g(e){let{components:a,...t}=e;return(0,r.yg)(d,(0,n.A)({},m,t,{components:a,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"fake"},"Fake"),(0,r.yg)("h2",{id:"description"},"Description"),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"Fake")," is mainly used to conveniently generate user-specified data, which is used as input for functional verification, testing, and performance testing of seatunnel."),(0,r.yg)("admonition",{type:"note"},(0,r.yg)("p",{parentName:"admonition"},"Engine Supported and plugin name"),(0,r.yg)("ul",{parentName:"admonition",className:"contains-task-list"},(0,r.yg)("li",{parentName:"ul",className:"task-list-item"},(0,r.yg)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","Spark: Fake, FakeStream"),(0,r.yg)("li",{parentName:"ul",className:"task-list-item"},(0,r.yg)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","Flink: FakeSource, FakeSourceStream",(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},"Flink ",(0,r.yg)("inlineCode",{parentName:"li"},"Fake Source")," is mainly used to automatically generate data. The data has only two columns. The first column is of ",(0,r.yg)("inlineCode",{parentName:"li"},"String type")," and the content is a random one from ",(0,r.yg)("inlineCode",{parentName:"li"},'["Gary", "Ricky Huo", "Kid Xiong"]')," . The second column is of ",(0,r.yg)("inlineCode",{parentName:"li"},"Long type")," , which is The current 13-bit timestamp is used as input for functional verification and testing of ",(0,r.yg)("inlineCode",{parentName:"li"},"seatunnel")," ."))))),(0,r.yg)("h2",{id:"options"},"Options"),(0,r.yg)(l.A,{groupId:"engine-type",defaultValue:"spark",values:[{label:"Spark",value:"spark"},{label:"Flink",value:"flink"}],mdxType:"Tabs"},(0,r.yg)(o.A,{value:"spark",mdxType:"TabItem"},(0,r.yg)("admonition",{type:"note"},(0,r.yg)("p",{parentName:"admonition"},"These options is for Spark:",(0,r.yg)("inlineCode",{parentName:"p"},"FakeStream"),", and Spark:",(0,r.yg)("inlineCode",{parentName:"p"},"Fake")," do not have any options")),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"name"),(0,r.yg)("th",{parentName:"tr",align:null},"type"),(0,r.yg)("th",{parentName:"tr",align:null},"required"),(0,r.yg)("th",{parentName:"tr",align:null},"default value"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"content"),(0,r.yg)("td",{parentName:"tr",align:null},"array"),(0,r.yg)("td",{parentName:"tr",align:null},"no"),(0,r.yg)("td",{parentName:"tr",align:null},"-")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"rate"),(0,r.yg)("td",{parentName:"tr",align:null},"number"),(0,r.yg)("td",{parentName:"tr",align:null},"yes"),(0,r.yg)("td",{parentName:"tr",align:null},"-")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"common-options"),(0,r.yg)("td",{parentName:"tr",align:null},"string"),(0,r.yg)("td",{parentName:"tr",align:null},"yes"),(0,r.yg)("td",{parentName:"tr",align:null},"-")))),(0,r.yg)("h3",{id:"content-array"},"content ","[array]"),(0,r.yg)("p",null,"List of test data strings"),(0,r.yg)("h3",{id:"rate-number"},"rate ","[number]"),(0,r.yg)("p",null,"Number of test cases generated per second")),(0,r.yg)(o.A,{value:"flink",mdxType:"TabItem"},(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"name"),(0,r.yg)("th",{parentName:"tr",align:null},"type"),(0,r.yg)("th",{parentName:"tr",align:null},"required"),(0,r.yg)("th",{parentName:"tr",align:null},"default value"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"parallelism"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"Int")),(0,r.yg)("td",{parentName:"tr",align:null},"no"),(0,r.yg)("td",{parentName:"tr",align:null},"-")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"common-options"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"string")),(0,r.yg)("td",{parentName:"tr",align:null},"no"),(0,r.yg)("td",{parentName:"tr",align:null},"-")))),(0,r.yg)("h3",{id:"parallelism-int"},"parallelism ","[",(0,r.yg)("inlineCode",{parentName:"h3"},"Int"),"]"),(0,r.yg)("p",null,"The parallelism of an individual operator, for Fake Source Stream"))),(0,r.yg)("h3",{id:"common-options-string"},"common options ","[string]"),(0,r.yg)("p",null,"Source plugin common parameters, please refer to ",(0,r.yg)("a",{parentName:"p",href:"/zh-CN/docs/2.1.1/connector/source/common-options"},"Source Plugin")," for details"),(0,r.yg)("h2",{id:"examples"},"Examples"),(0,r.yg)(l.A,{groupId:"engine-type",defaultValue:"spark",values:[{label:"Spark",value:"spark"},{label:"Flink",value:"flink"}],mdxType:"Tabs"},(0,r.yg)(o.A,{value:"spark",mdxType:"TabItem"},(0,r.yg)("h3",{id:"fake-1"},"Fake"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},'Fake {\n    result_table_name = "my_dataset"\n}\n')),(0,r.yg)("h3",{id:"fakestream"},"FakeStream"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},'fakeStream {\n    content = ["name=ricky&age=23", "name=gary&age=28"]\n    rate = 5\n}\n')),(0,r.yg)("p",null,"The generated data is as follows, randomly extract the string from the ",(0,r.yg)("inlineCode",{parentName:"p"},"content")," list"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"+-----------------+\n|raw_message      |\n+-----------------+\n|name=gary&age=28 |\n|name=ricky&age=23|\n+-----------------+\n"))),(0,r.yg)(o.A,{value:"flink",mdxType:"TabItem"},(0,r.yg)("h3",{id:"fakesourcestream"},"FakeSourceStream"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},'source {\n    FakeSourceStream {\n        result_table_name = "fake"\n        field_name = "name,age"\n    }\n}\n')),(0,r.yg)("h3",{id:"fakesource"},"FakeSource"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},'source {\n    FakeSource {\n        result_table_name = "fake"\n        field_name = "name,age"\n    }\n}\n')))))}g.isMDXComponent=!0}}]);