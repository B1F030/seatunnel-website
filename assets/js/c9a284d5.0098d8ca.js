"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[31655],{15680:(e,n,t)=>{t.d(n,{xA:()=>p,yg:()=>y});var o=t(96540);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,o,l=function(e,n){if(null==e)return{};var t,o,l={},i=Object.keys(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var g=o.createContext({}),s=function(e){var n=o.useContext(g),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},p=function(e){var n=s(e.components);return o.createElement(g.Provider,{value:n},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},d=o.forwardRef((function(e,n){var t=e.components,l=e.mdxType,i=e.originalType,g=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),u=s(t),d=l,y=u["".concat(g,".").concat(d)]||u[d]||c[d]||i;return t?o.createElement(y,r(r({ref:n},p),{},{components:t})):o.createElement(y,r({ref:n},p))}));function y(e,n){var t=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var i=t.length,r=new Array(i);r[0]=d;var a={};for(var g in n)hasOwnProperty.call(n,g)&&(a[g]=n[g]);a.originalType=e,a[u]="string"==typeof e?e:l,r[1]=a;for(var s=2;s<i;s++)r[s]=t[s];return o.createElement.apply(null,r)}return o.createElement.apply(null,t)}d.displayName="MDXCreateElement"},36212:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>g,contentTitle:()=>r,default:()=>c,frontMatter:()=>i,metadata:()=>a,toc:()=>s});var o=t(58168),l=(t(96540),t(15680));const i={sidebar_position:14},r="Logging",a={unversionedId:"seatunnel-engine/logging",id:"seatunnel-engine/logging",title:"Logging",description:"All SeaTunnel Engine processes create a log text file that contains messages for various events happening in that process. These logs provide deep insights into the inner workings of SeaTunnel Engine, and can be used to detect problems (in the form of WARN/ERROR messages) and can help in debugging them.",source:"@site/docs/seatunnel-engine/logging.md",sourceDirName:"seatunnel-engine",slug:"/seatunnel-engine/logging",permalink:"/docs/seatunnel-engine/logging",draft:!1,editUrl:"https://github.com/apache/seatunnel-website/edit/main/docs/seatunnel-engine/logging.md",tags:[],version:"current",sidebarPosition:14,frontMatter:{sidebar_position:14},sidebar:"docs",previous:{title:"Command Line Tool",permalink:"/docs/seatunnel-engine/user-command"},next:{title:"Telemetry",permalink:"/docs/seatunnel-engine/telemetry"}},g={},s=[{value:"Structured logging",id:"structured-logging",level:2},{value:"Configuring Log4j2",id:"configuring-log4j2",level:2},{value:"Configure to output separate log files for jobs",id:"configure-to-output-separate-log-files-for-jobs",level:3},{value:"Configuring output mixed logs",id:"configuring-output-mixed-logs",level:3},{value:"Compatibility with Log4j1/Logback",id:"compatibility-with-log4j1logback",level:3},{value:"Query Logs via REST API",id:"query-logs-via-rest-api",level:3},{value:"Best practices for developers",id:"best-practices-for-developers",level:2}],p={toc:s},u="wrapper";function c(e){let{components:n,...t}=e;return(0,l.yg)(u,(0,o.A)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,l.yg)("h1",{id:"logging"},"Logging"),(0,l.yg)("p",null,"All SeaTunnel Engine processes create a log text file that contains messages for various events happening in that process. These logs provide deep insights into the inner workings of SeaTunnel Engine, and can be used to detect problems (in the form of WARN/ERROR messages) and can help in debugging them."),(0,l.yg)("p",null,"The logging in SeaTunnel Engine uses the SLF4J logging interface. This allows you to use any logging framework that supports SLF4J, without having to modify the SeaTunnel Engine source code."),(0,l.yg)("p",null,"By default, Log4j 2 is used as the underlying logging framework."),(0,l.yg)("h2",{id:"structured-logging"},"Structured logging"),(0,l.yg)("p",null,"SeaTunnel Engine adds the following fields to MDC of most of the relevant log messages (experimental feature):"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},"Job ID",(0,l.yg)("ul",{parentName:"li"},(0,l.yg)("li",{parentName:"ul"},"key: ST-JID"),(0,l.yg)("li",{parentName:"ul"},"format: string")))),(0,l.yg)("p",null,"This is most useful in environments with structured logging and allows you to quickly filter the relevant logs."),(0,l.yg)("p",null,"The MDC is propagated by slf4j to the logging backend which usually adds it to the log records automatically (e.g. in log4j json layout). Alternatively, it can be configured explicitly - log4j pattern layout might look like this:"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-properties"},"[%X{ST-JID}] %c{0} %m%n.\n")),(0,l.yg)("h2",{id:"configuring-log4j2"},"Configuring Log4j2"),(0,l.yg)("p",null,"Log4j 2 is controlled using property files."),(0,l.yg)("p",null,"The SeaTunnel Engine distribution ships with the following log4j properties files in the ",(0,l.yg)("inlineCode",{parentName:"p"},"config")," directory, which are used automatically if Log4j 2 is enabled:"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("inlineCode",{parentName:"li"},"log4j2_client.properties"),": used by the command line client (e.g., ",(0,l.yg)("inlineCode",{parentName:"li"},"seatunnel.sh"),")"),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("inlineCode",{parentName:"li"},"log4j2.properties"),": used for SeaTunnel Engine server processes (e.g., ",(0,l.yg)("inlineCode",{parentName:"li"},"seatunnel-cluster.sh"),")")),(0,l.yg)("p",null,"By default, log files are output to the ",(0,l.yg)("inlineCode",{parentName:"p"},"logs")," directory."),(0,l.yg)("p",null,"Log4j periodically scans this file for changes and adjusts the logging behavior if necessary. By default this check happens every 60 seconds and is controlled by the monitorInterval setting in the Log4j properties files."),(0,l.yg)("h3",{id:"configure-to-output-separate-log-files-for-jobs"},"Configure to output separate log files for jobs"),(0,l.yg)("p",null,"To output separate log files for each job, you can update the following configuration in the ",(0,l.yg)("inlineCode",{parentName:"p"},"log4j2.properties")," file:"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-properties"},"...\nrootLogger.appenderRef.file.ref = routingAppender\n...\n\nappender.file.layout.pattern = %d{yyyy-MM-dd HH:mm:ss,SSS} %-5p [%-30.30c{1.}] [%t] - %m%n\n...\n")),(0,l.yg)("p",null,"This configuration generates separate log files for each job, for example:"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre"},"job-xxx1.log\njob-xxx2.log\njob-xxx3.log\n...\n")),(0,l.yg)("h3",{id:"configuring-output-mixed-logs"},"Configuring output mixed logs"),(0,l.yg)("p",null,(0,l.yg)("em",{parentName:"p"},"This configuration mode by default.")),(0,l.yg)("p",null,"To all job logs output into SeaTunnel Engine system log file, you can update the following configuration in the ",(0,l.yg)("inlineCode",{parentName:"p"},"log4j2.properties")," file:"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-properties"},"...\nrootLogger.appenderRef.file.ref = fileAppender\n...\n\nappender.file.layout.pattern = [%X{ST-JID}] %d{yyyy-MM-dd HH:mm:ss,SSS} %-5p [%-30.30c{1.}] [%t] - %m%n\n...\n")),(0,l.yg)("h3",{id:"compatibility-with-log4j1logback"},"Compatibility with Log4j1/Logback"),(0,l.yg)("p",null,"SeaTunnel Engine automatically integrates Log framework bridge, allowing existing applications that work against Log4j1/Logback classes to continue working."),(0,l.yg)("h3",{id:"query-logs-via-rest-api"},"Query Logs via REST API"),(0,l.yg)("p",null,"SeaTunnel provides an API for querying logs."),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},"Usage examples:")),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},"Retrieve logs for all nodes with ",(0,l.yg)("inlineCode",{parentName:"li"},"jobId")," of ",(0,l.yg)("inlineCode",{parentName:"li"},"733584788375666689"),": ",(0,l.yg)("inlineCode",{parentName:"li"},"http://localhost:8080/logs/733584788375666689")),(0,l.yg)("li",{parentName:"ul"},"Retrieve the log list for all nodes: ",(0,l.yg)("inlineCode",{parentName:"li"},"http://localhost:8080/logs")),(0,l.yg)("li",{parentName:"ul"},"Retrieve the log list for all nodes in JSON format: ",(0,l.yg)("inlineCode",{parentName:"li"},"http://localhost:8080/logs?format=json")),(0,l.yg)("li",{parentName:"ul"},"Retrieve log file content: ",(0,l.yg)("inlineCode",{parentName:"li"},"http://localhost:8080/logs/job-898380162133917698.log"))),(0,l.yg)("p",null,"For more details, please refer to the ",(0,l.yg)("a",{parentName:"p",href:"/docs/seatunnel-engine/rest-api-v2"},"REST-API"),"."),(0,l.yg)("h2",{id:"best-practices-for-developers"},"Best practices for developers"),(0,l.yg)("p",null,"You can create an SLF4J logger by calling ",(0,l.yg)("inlineCode",{parentName:"p"},"org.slf4j.LoggerFactory#LoggerFactory.getLogger")," with the Class of your class as an argument."),(0,l.yg)("p",null,"Of course, you can also use ",(0,l.yg)("inlineCode",{parentName:"p"},"lombok")," annotation ",(0,l.yg)("inlineCode",{parentName:"p"},"@Slf4j")," to achieve the same effect."),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-java"},'import org.slf4j.Logger;\nimport org.slf4j.LoggerFactory;\n\npublic class TestConnector {\n    private static final Logger LOG = LoggerFactory.getLogger(TestConnector.class);\n\n    public static void main(String[] args) {\n        LOG.info("Hello world!");\n    }\n}\n')),(0,l.yg)("p",null,"In order to benefit most from SLF4J, it is recommended to use its placeholder mechanism. Using placeholders allows avoiding unnecessary string constructions in case that the logging level is set so high that the message would not be logged."),(0,l.yg)("p",null,"The syntax of placeholders is the following:"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-java"},'LOG.info("This message contains {} placeholders. {}", 1, "key1");\n')),(0,l.yg)("p",null,"Placeholders can also be used in conjunction with exceptions which shall be logged."),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-java"},'try {\n    // some code\n} catch (Exception e) {\n    LOG.error("An {} occurred", "error", e);\n}\n')))}c.isMDXComponent=!0}}]);