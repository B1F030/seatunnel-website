"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[26991],{3905:function(t,e,n){n.d(e,{Zo:function(){return s},kt:function(){return k}});var a=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},i=Object.keys(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var p=a.createContext({}),d=function(t){var e=a.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):l(l({},e),t)),n},s=function(t){var e=d(t.components);return a.createElement(p.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},u=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,i=t.originalType,p=t.parentName,s=o(t,["components","mdxType","originalType","parentName"]),u=d(n),k=r,f=u["".concat(p,".").concat(k)]||u[k]||m[k]||i;return n?a.createElement(f,l(l({ref:e},s),{},{components:n})):a.createElement(f,l({ref:e},s))}));function k(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var i=n.length,l=new Array(i);l[0]=u;var o={};for(var p in e)hasOwnProperty.call(e,p)&&(o[p]=e[p]);o.originalType=t,o.mdxType="string"==typeof t?t:r,l[1]=o;for(var d=2;d<i;d++)l[d]=n[d];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},54533:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return o},contentTitle:function(){return p},metadata:function(){return d},assets:function(){return s},toc:function(){return m},default:function(){return k}});var a=n(87462),r=n(63366),i=(n(67294),n(3905)),l=["components"],o={},p="FtpFile",d={unversionedId:"connector-v2/sink/FtpFile",id:"connector-v2/sink/FtpFile",title:"FtpFile",description:"Ftp file sink connector",source:"@site/docs/connector-v2/sink/FtpFile.md",sourceDirName:"connector-v2/sink",slug:"/connector-v2/sink/FtpFile",permalink:"/zh-CN/docs/connector-v2/sink/FtpFile",editUrl:"https://github.com/apache/incubator-seatunnel-website/edit/main/docs/connector-v2/sink/FtpFile.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Feishu",permalink:"/zh-CN/docs/connector-v2/sink/Feishu"},next:{title:"Greenplum",permalink:"/zh-CN/docs/connector-v2/sink/Greenplum"}},s={},m=[{value:"Description",id:"description",level:2},{value:"ftp_host string",id:"ftp_host-string",level:3},{value:"ftp_port int",id:"ftp_port-int",level:3},{value:"ftp_username string",id:"ftp_username-string",level:3},{value:"ftp_password string",id:"ftp_password-string",level:3},{value:"path string",id:"path-string",level:3},{value:"file_name_expression string",id:"file_name_expression-string",level:3},{value:"file_format string",id:"file_format-string",level:3},{value:"filename_time_format string",id:"filename_time_format-string",level:3},{value:"field_delimiter string",id:"field_delimiter-string",level:3},{value:"row_delimiter string",id:"row_delimiter-string",level:3},{value:"partition_by array",id:"partition_by-array",level:3},{value:"partition_dir_expression string",id:"partition_dir_expression-string",level:3},{value:"is_partition_field_write_in_file boolean",id:"is_partition_field_write_in_file-boolean",level:3},{value:"sink_columns array",id:"sink_columns-array",level:3},{value:"is_enable_transaction boolean",id:"is_enable_transaction-boolean",level:3},{value:"save_mode string",id:"save_mode-string",level:3},{value:"Example",id:"example",level:2}],u={toc:m};function k(t){var e=t.components,n=(0,r.Z)(t,l);return(0,i.kt)("wrapper",(0,a.Z)({},u,n,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"ftpfile"},"FtpFile"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Ftp file sink connector")),(0,i.kt)("h2",{id:"description"},"Description"),(0,i.kt)("p",null,"Output data to Ftp . "),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"name"),(0,i.kt)("th",{parentName:"tr",align:null},"type"),(0,i.kt)("th",{parentName:"tr",align:null},"required"),(0,i.kt)("th",{parentName:"tr",align:null},"default value"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"ftp_host"),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"yes"),(0,i.kt)("td",{parentName:"tr",align:null},"-")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"ftp_port"),(0,i.kt)("td",{parentName:"tr",align:null},"int"),(0,i.kt)("td",{parentName:"tr",align:null},"yes"),(0,i.kt)("td",{parentName:"tr",align:null},"-")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"ftp_username"),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"yes"),(0,i.kt)("td",{parentName:"tr",align:null},"-")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"ftp_password"),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"yes"),(0,i.kt)("td",{parentName:"tr",align:null},"-")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"path"),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"yes"),(0,i.kt)("td",{parentName:"tr",align:null},"-")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"file_name_expression"),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"no"),(0,i.kt)("td",{parentName:"tr",align:null},'"${transactionId}"')),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"file_format"),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"no"),(0,i.kt)("td",{parentName:"tr",align:null},'"text"')),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"filename_time_format"),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"no"),(0,i.kt)("td",{parentName:"tr",align:null},'"yyyy.MM.dd"')),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"field_delimiter"),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"no"),(0,i.kt)("td",{parentName:"tr",align:null},"'\\001'")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"row_delimiter"),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"no"),(0,i.kt)("td",{parentName:"tr",align:null},'"\\n"')),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"partition_by"),(0,i.kt)("td",{parentName:"tr",align:null},"array"),(0,i.kt)("td",{parentName:"tr",align:null},"no"),(0,i.kt)("td",{parentName:"tr",align:null},"-")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"partition_dir_expression"),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"no"),(0,i.kt)("td",{parentName:"tr",align:null},'"\\${k0}=\\${v0}\\/\\${k1}=\\${v1}\\/...\\/\\${kn}=\\${vn}\\/"')),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"is_partition_field_write_in_file"),(0,i.kt)("td",{parentName:"tr",align:null},"boolean"),(0,i.kt)("td",{parentName:"tr",align:null},"no"),(0,i.kt)("td",{parentName:"tr",align:null},"false")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"sink_columns"),(0,i.kt)("td",{parentName:"tr",align:null},"array"),(0,i.kt)("td",{parentName:"tr",align:null},"no"),(0,i.kt)("td",{parentName:"tr",align:null},"When this parameter is empty, all fields are sink columns")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"is_enable_transaction"),(0,i.kt)("td",{parentName:"tr",align:null},"boolean"),(0,i.kt)("td",{parentName:"tr",align:null},"no"),(0,i.kt)("td",{parentName:"tr",align:null},"true")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"save_mode"),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"no"),(0,i.kt)("td",{parentName:"tr",align:null},'"error"')))),(0,i.kt)("h3",{id:"ftp_host-string"},"ftp_host ","[string]"),(0,i.kt)("p",null,"The target ftp host is required"),(0,i.kt)("h3",{id:"ftp_port-int"},"ftp_port ","[int]"),(0,i.kt)("p",null,"The target ftp port is required"),(0,i.kt)("h3",{id:"ftp_username-string"},"ftp_username ","[string]"),(0,i.kt)("p",null,"The target ftp username is required"),(0,i.kt)("h3",{id:"ftp_password-string"},"ftp_password ","[string]"),(0,i.kt)("p",null,"The target ftp password is required"),(0,i.kt)("h3",{id:"path-string"},"path ","[string]"),(0,i.kt)("p",null,"The target dir path is required."),(0,i.kt)("h3",{id:"file_name_expression-string"},"file_name_expression ","[string]"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"file_name_expression")," describes the file expression which will be created into the ",(0,i.kt)("inlineCode",{parentName:"p"},"path"),". We can add the variable ",(0,i.kt)("inlineCode",{parentName:"p"},"${now}")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"${uuid}")," in the ",(0,i.kt)("inlineCode",{parentName:"p"},"file_name_expression"),", like ",(0,i.kt)("inlineCode",{parentName:"p"},"test_${uuid}_${now}"),",\n",(0,i.kt)("inlineCode",{parentName:"p"},"${now}")," represents the current time, and its format can be defined by specifying the option ",(0,i.kt)("inlineCode",{parentName:"p"},"filename_time_format"),"."),(0,i.kt)("p",null,"Please note that, If ",(0,i.kt)("inlineCode",{parentName:"p"},"is_enable_transaction")," is ",(0,i.kt)("inlineCode",{parentName:"p"},"true"),", we will auto add ",(0,i.kt)("inlineCode",{parentName:"p"},"${transactionId}_")," in the head of the file."),(0,i.kt)("h3",{id:"file_format-string"},"file_format ","[string]"),(0,i.kt)("p",null,"We supported as the following file types:"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"text")),(0,i.kt)("p",null,"Please note that, The final file name will ends with the file_format's suffix, the suffix of the text file is ",(0,i.kt)("inlineCode",{parentName:"p"},"txt"),"."),(0,i.kt)("h3",{id:"filename_time_format-string"},"filename_time_format ","[string]"),(0,i.kt)("p",null,"When the format in the ",(0,i.kt)("inlineCode",{parentName:"p"},"file_name_expression")," parameter is ",(0,i.kt)("inlineCode",{parentName:"p"},"xxxx-${now}")," , ",(0,i.kt)("inlineCode",{parentName:"p"},"filename_time_format")," can specify the time format of the path, and the default value is ",(0,i.kt)("inlineCode",{parentName:"p"},"yyyy.MM.dd")," . The commonly used time formats are listed as follows:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Symbol"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"y"),(0,i.kt)("td",{parentName:"tr",align:null},"Year")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"M"),(0,i.kt)("td",{parentName:"tr",align:null},"Month")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"d"),(0,i.kt)("td",{parentName:"tr",align:null},"Day of month")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"H"),(0,i.kt)("td",{parentName:"tr",align:null},"Hour in day (0-23)")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"m"),(0,i.kt)("td",{parentName:"tr",align:null},"Minute in hour")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"s"),(0,i.kt)("td",{parentName:"tr",align:null},"Second in minute")))),(0,i.kt)("h3",{id:"field_delimiter-string"},"field_delimiter ","[string]"),(0,i.kt)("p",null,"The separator between columns in a row of data. Only needed by ",(0,i.kt)("inlineCode",{parentName:"p"},"text")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"csv")," file format."),(0,i.kt)("h3",{id:"row_delimiter-string"},"row_delimiter ","[string]"),(0,i.kt)("p",null,"The separator between rows in a file. Only needed by ",(0,i.kt)("inlineCode",{parentName:"p"},"text")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"csv")," file format."),(0,i.kt)("h3",{id:"partition_by-array"},"partition_by ","[array]"),(0,i.kt)("p",null,"Partition data based on selected fields"),(0,i.kt)("h3",{id:"partition_dir_expression-string"},"partition_dir_expression ","[string]"),(0,i.kt)("p",null,"If the ",(0,i.kt)("inlineCode",{parentName:"p"},"partition_by")," is specified, we will generate the corresponding partition directory based on the partition information, and the final file will be placed in the partition directory."),(0,i.kt)("p",null,"Default ",(0,i.kt)("inlineCode",{parentName:"p"},"partition_dir_expression")," is ",(0,i.kt)("inlineCode",{parentName:"p"},"${k0}=${v0}/${k1}=${v1}/.../${kn}=${vn}/"),". ",(0,i.kt)("inlineCode",{parentName:"p"},"k0")," is the first partition field and ",(0,i.kt)("inlineCode",{parentName:"p"},"v0")," is the value of the first partition field."),(0,i.kt)("h3",{id:"is_partition_field_write_in_file-boolean"},"is_partition_field_write_in_file ","[boolean]"),(0,i.kt)("p",null,"If ",(0,i.kt)("inlineCode",{parentName:"p"},"is_partition_field_write_in_file")," is ",(0,i.kt)("inlineCode",{parentName:"p"},"true"),", the partition field and the value of it will be write into data file."),(0,i.kt)("p",null,"For example, if you want to write a Hive Data File, Its value should be ",(0,i.kt)("inlineCode",{parentName:"p"},"false"),"."),(0,i.kt)("h3",{id:"sink_columns-array"},"sink_columns ","[array]"),(0,i.kt)("p",null,"Which columns need be write to file, default value is all of the columns get from ",(0,i.kt)("inlineCode",{parentName:"p"},"Transform")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"Source"),".\nThe order of the fields determines the order in which the file is actually written."),(0,i.kt)("h3",{id:"is_enable_transaction-boolean"},"is_enable_transaction ","[boolean]"),(0,i.kt)("p",null,"If ",(0,i.kt)("inlineCode",{parentName:"p"},"is_enable_transaction")," is true, we will ensure that data will not be lost or duplicated when it is written to the target directory."),(0,i.kt)("p",null,"Please note that, If ",(0,i.kt)("inlineCode",{parentName:"p"},"is_enable_transaction")," is ",(0,i.kt)("inlineCode",{parentName:"p"},"true"),", we will auto add ",(0,i.kt)("inlineCode",{parentName:"p"},"${transactionId}_")," in the head of the file."),(0,i.kt)("p",null,"Only support ",(0,i.kt)("inlineCode",{parentName:"p"},"true")," now."),(0,i.kt)("h3",{id:"save_mode-string"},"save_mode ","[string]"),(0,i.kt)("p",null,"Storage mode, currently supports ",(0,i.kt)("inlineCode",{parentName:"p"},"overwrite"),". This means we will delete the old file when a new file have a same name with it."),(0,i.kt)("p",null,"If ",(0,i.kt)("inlineCode",{parentName:"p"},"is_enable_transaction")," is ",(0,i.kt)("inlineCode",{parentName:"p"},"true"),", Basically, we won't encounter the same file name. Because we will add the transaction id to file name."),(0,i.kt)("p",null,"For the specific meaning of each mode, see ",(0,i.kt)("a",{parentName:"p",href:"https://spark.apache.org/docs/latest/sql-programming-guide.html#save-modes"},"save-modes")),(0,i.kt)("h2",{id:"example"},"Example"),(0,i.kt)("p",null,"For text file format"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'\nFtpFile {\n    ftp_host="xxx.xxx.xxx.xxx"\n    ftp_port=21\n    ftp_username="username"\n    ftp_password="password"\n    path="/data/ftp"\n    field_delimiter="\\t"\n    row_delimiter="\\n"\n    partition_by=["age"]\n    partition_dir_expression="${k0}=${v0}"\n    is_partition_field_write_in_file=true\n    file_name_expression="${transactionId}_${now}"\n    file_format="text"\n    sink_columns=["name","age"]\n    filename_time_format="yyyy.MM.dd"\n    is_enable_transaction=true\n}\n\n')))}k.isMDXComponent=!0}}]);