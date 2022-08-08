"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[54046],{3905:function(n,e,t){t.d(e,{Zo:function(){return p},kt:function(){return d}});var o=t(67294);function a(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function r(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,o)}return t}function s(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?r(Object(t),!0).forEach((function(e){a(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function l(n,e){if(null==n)return{};var t,o,a=function(n,e){if(null==n)return{};var t,o,a={},r=Object.keys(n);for(o=0;o<r.length;o++)t=r[o],e.indexOf(t)>=0||(a[t]=n[t]);return a}(n,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);for(o=0;o<r.length;o++)t=r[o],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(a[t]=n[t])}return a}var i=o.createContext({}),c=function(n){var e=o.useContext(i),t=e;return n&&(t="function"==typeof n?n(e):s(s({},e),n)),t},p=function(n){var e=c(n.components);return o.createElement(i.Provider,{value:e},n.children)},u={inlineCode:"code",wrapper:function(n){var e=n.children;return o.createElement(o.Fragment,{},e)}},m=o.forwardRef((function(n,e){var t=n.components,a=n.mdxType,r=n.originalType,i=n.parentName,p=l(n,["components","mdxType","originalType","parentName"]),m=c(t),d=a,f=m["".concat(i,".").concat(d)]||m[d]||u[d]||r;return t?o.createElement(f,s(s({ref:e},p),{},{components:t})):o.createElement(f,s({ref:e},p))}));function d(n,e){var t=arguments,a=e&&e.mdxType;if("string"==typeof n||a){var r=t.length,s=new Array(r);s[0]=m;var l={};for(var i in e)hasOwnProperty.call(e,i)&&(l[i]=e[i]);l.originalType=n,l.mdxType="string"==typeof n?n:a,s[1]=l;for(var c=2;c<r;c++)s[c]=t[c];return o.createElement.apply(null,s)}return o.createElement.apply(null,t)}m.displayName="MDXCreateElement"},22495:function(n,e,t){t.r(e),t.d(e,{frontMatter:function(){return l},contentTitle:function(){return i},metadata:function(){return c},assets:function(){return p},toc:function(){return u},default:function(){return d}});var o=t(87462),a=t(63366),r=(t(67294),t(3905)),s=["components"],l={},i="How to use flink sql module",c={unversionedId:"connector/flink-sql/usage",id:"connector/flink-sql/usage",title:"How to use flink sql module",description:"Tutorial of flink sql module",source:"@site/docs/connector/flink-sql/usage.md",sourceDirName:"connector/flink-sql",slug:"/connector/flink-sql/usage",permalink:"/docs/connector/flink-sql/usage",editUrl:"https://github.com/apache/incubator-seatunnel-website/edit/main/docs/connector/flink-sql/usage.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Flink SQL Kafka Connector",permalink:"/docs/connector/flink-sql/Kafka"},next:{title:"Transform",permalink:"/docs/category/transform"}},p={},u=[{value:"Usage",id:"usage",level:2},{value:"1. Command Entrypoint",id:"1-command-entrypoint",level:3},{value:"2. seatunnel config",id:"2-seatunnel-config",level:3},{value:"3. run job",id:"3-run-job",level:3},{value:"Standalone Cluster",id:"standalone-cluster",level:4},{value:"Yarn Cluster",id:"yarn-cluster",level:4},{value:"Other Options",id:"other-options",level:4},{value:"Example",id:"example",level:2},{value:"First , Need create mysql table in mysql database",id:"first--need-create-mysql-table-in-mysql-database",level:5}],m={toc:u};function d(n){var e=n.components,t=(0,a.Z)(n,s);return(0,r.kt)("wrapper",(0,o.Z)({},m,t,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"how-to-use-flink-sql-module"},"How to use flink sql module"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Tutorial of flink sql module")),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)("h3",{id:"1-command-entrypoint"},"1. Command Entrypoint"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"bin/start-seatunnel-sql.sh\n")),(0,r.kt)("h3",{id:"2-seatunnel-config"},"2. seatunnel config"),(0,r.kt)("p",null,"Change the file flink.sql.conf.template in the config/ directory to flink.sql.conf"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"mv flink.sql.conf.template flink.sql.conf\n")),(0,r.kt)("p",null,"Prepare a seatunnel config file with the following content:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"SET table.dml-sync = true;\n\nCREATE TABLE events (\n  f_type INT,\n  f_uid INT,\n  ts AS localtimestamp,\n  WATERMARK FOR ts AS ts\n) WITH (\n  'connector' = 'datagen',\n  'rows-per-second'='5',\n  'fields.f_type.min'='1',\n  'fields.f_type.max'='5',\n  'fields.f_uid.min'='1',\n  'fields.f_uid.max'='1000'\n);\n\nCREATE TABLE print_table (\n  type INT,\n  uid INT,\n  lstmt TIMESTAMP\n) WITH (\n  'connector' = 'print',\n  'sink.parallelism' = '1'\n);\n\nINSERT INTO print_table SELECT * FROM events where f_type = 1;\n")),(0,r.kt)("h3",{id:"3-run-job"},"3. run job"),(0,r.kt)("h4",{id:"standalone-cluster"},"Standalone Cluster"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"bin/start-seatunnel-sql.sh --config config/flink.sql.conf\n\n# -p 2 specifies that the parallelism of flink job is 2. You can also specify more parameters, use flink run -h to view\nbin/start-seatunnel-flink.sh \\\n-p 2 \\\n--config config/flink.sql.conf\n")),(0,r.kt)("h4",{id:"yarn-cluster"},"Yarn Cluster"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"bin/start-seatunnel-sql.sh -m yarn-cluster --config config/flink.sql.conf\n\nbin/start-seatunnel-sql.sh -t yarn-per-job --config config/flink.sql.conf\n\n# -p 2 specifies that the parallelism of flink job is 2. You can also specify more parameters, use flink run -h to view\nbin/start-seatunnel-flink.sh \\\n-p 2 \\\n-m yarn-cluster \\\n--config config/flink.sql.conf\n")),(0,r.kt)("h4",{id:"other-options"},"Other Options"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"-p 2")," specifies that the job parallelism is ",(0,r.kt)("inlineCode",{parentName:"li"},"2"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"bin/start-seatunnel-sql.sh -p 2 --config config/flink.sql.conf\n")),(0,r.kt)("h2",{id:"example"},"Example"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"How to implement flink sql interval join with seatunnel flink-sql module")),(0,r.kt)("p",null,"intervaljoin.sql.conf"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-hocon"},"CREATE TABLE basic (\n  `id` BIGINT,\n  `name` STRING,\n   `ts`  STRING\n) WITH (\n  'connector' = 'kafka',\n  'topic' = 'basic',\n  'properties.bootstrap.servers' = 'XX.XX.XX.XX:9092',\n  'properties.group.id' = 'testGroup',\n  'scan.startup.mode' = 'latest-offset',\n  'format' = 'json'\n);\n\nCREATE TABLE infos (\n  `id` BIGINT,\n  `age` BIGINT,\n   `ts`  STRING\n) WITH (\n  'connector' = 'kafka',\n  'topic' = 'info',\n  'properties.bootstrap.servers' = 'XX.XX.XX.XX:9092',\n  'properties.group.id' = 'testGroup',\n  'scan.startup.mode' = 'latest-offset',\n  'format' = 'json'\n);\n\nCREATE TABLE stream2_join_result (\n  id BIGINT , \n  name STRING,\n  age BIGINT,\n  ts1 STRING , \n  ts2 STRING,\n  PRIMARY KEY(id) NOT ENFORCED\n) WITH (\n  'connector' = 'jdbc',\n  'url' = 'jdbc:mysql://XX.XX.XX.XX:3306/testDB',\n  'username' = 'root',\n  'password' = 'taia@2021',\n  'table-name' = 'stream2_join_result'\n);\n\ninsert into  stream2_join_result select basic.id, basic.name, infos.age,basic.ts,infos.ts \nfrom basic join infos on (basic.id = infos.id) where  TO_TIMESTAMP(basic.ts,'yyyy-MM-dd HH:mm:ss') \nBETWEEN   TO_TIMESTAMP(infos.ts,'yyyy-MM-dd HH:mm:ss')  - INTERVAL '10' SECOND AND  TO_TIMESTAMP(infos.ts,'yyyy-MM-dd HH:mm:ss') + INTERVAL '10' SECOND;\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"bin/start-seatunnel-sql.sh -m yarn-cluster --config config/intervaljoin.sql.conf\n")),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"How to implement flink sql dim join (using mysql) with seatunnel flink-sql module")),(0,r.kt)("p",null,"dimjoin.sql.conf"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-hocon"},"CREATE TABLE code_set_street (\n  area_code STRING,\n  area_name STRING,\n  town_code STRING ,\n  town_name STRING ,\n  PRIMARY KEY(town_code) NOT ENFORCED\n) WITH (\n  'connector' = 'jdbc',\n  'url' = 'jdbc:mysql://XX.XX.XX.XX:3306/testDB',\n  'username' = 'root',\n  'password' = '2021',\n  'table-name' = 'code_set_street',\n  'lookup.cache.max-rows' = '5000' ,\n  'lookup.cache.ttl' = '5min'\n);\n\nCREATE TABLE people (\n  `id` STRING,\n  `name` STRING,\n  `ts`  TimeStamp(3) ,\n  proctime AS PROCTIME() \n) WITH (\n  'connector' = 'kafka',\n  'topic' = 'people',\n  'properties.bootstrap.servers' = 'XX.XX.XX.XX:9092',\n  'properties.group.id' = 'testGroup',\n  'scan.startup.mode' = 'latest-offset',\n  'format' = 'json'\n);\n\nCREATE TABLE mysql_dim_join_result (\n  id STRING , \n  name STRING,\n  area_name STRING,\n  town_code STRING , \n  town_name STRING,\n  ts TimeStamp ,\n  PRIMARY KEY(id,town_code) NOT ENFORCED\n) WITH (\n  'connector' = 'jdbc',\n  'url' = 'jdbc:mysql://XX.XX.XX.XX:3306/testDB',\n  'username' = 'root',\n  'password' = '2021',\n  'table-name' = 'mysql_dim_join_result'\n);\n\ninsert into mysql_dim_join_result\nselect people.id , people.name ,code_set_street.area_name ,code_set_street.town_code, code_set_street.town_name , people.ts  \nfrom people inner join code_set_street FOR SYSTEM_TIME AS OF  people.proctime  \non (people.id = code_set_street.town_code);\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"bin/start-seatunnel-sql.sh -m yarn-cluster --config config/dimjoin.sql.conf\n")),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},"How to implement flink SQL cdc dim join (using mysql-cdc) with seatunnel flink-sql module")),(0,r.kt)("h5",{id:"first--need-create-mysql-table-in-mysql-database"},"First , Need create mysql table in mysql database"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"CREATE TABLE `dim_cdc_join_result` (\n    `id` varchar(255) NOT NULL,\n    `name` varchar(255) DEFAULT NULL,\n    `area_name` varchar(255) NOT NULL,\n    `town_code` varchar(255) NOT NULL,\n    `town_name` varchar(255) DEFAULT NULL,\n    `ts` varchar(255) DEFAULT NULL,\n    PRIMARY KEY (`id`,`town_code`,`ts`) USING BTREE\n) ENGINE=InnoDB DEFAULT CHARSET=utf8 ROW_FORMAT=COMPACT;\n")),(0,r.kt)("p",null,"cdcjoin.sql.conf"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-hocon"},"CREATE TABLE code_set_street_cdc (\n  area_code STRING,\n  area_name STRING,\n  town_code STRING ,\n  town_name STRING ,\n  PRIMARY KEY(town_code) NOT ENFORCED\n) WITH (\n  'connector' = 'mysql-cdc',\n  'hostname' = 'XX.XX.XX.XX',\n  'port' = '3306',\n  'username' = 'root',\n  'password' = '2021',\n  'database-name' = 'flink',\n  'table-name' = 'code_set_street'\n);\n     \nCREATE TABLE people (\n  `id` STRING,\n  `name` STRING,\n  `ts`  STRING\n) WITH (\n  'connector' = 'kafka',\n  'topic' = 'people',\n  'properties.bootstrap.servers' = 'XX.XX.XX.XX:9092',\n  'properties.group.id' = 'testGroup',\n  'scan.startup.mode' = 'latest-offset',\n  'format' = 'json'\n);\n\n# create mysql sink table in flink\nCREATE TABLE dim_cdc_join_result (\n  id STRING , \n  name STRING,\n  area_name STRING,\n  town_code STRING , \n  town_name STRING,\n  ts STRING ,\n  PRIMARY KEY(id,town_code) NOT ENFORCED\n) WITH (\n  'connector' = 'jdbc',\n  'url' = 'jdbc:mysql://XX.XX.XX.XX:3306/flink',\n  'username' = 'root',\n  'password' = '2021',\n  'table-name' = 'dim_cdc_join_result'\n);\n \ninsert into dim_cdc_join_result\nselect a.id , a.name ,b.area_name ,b.town_code, b.town_name , a.ts  \nfrom people a inner join code_set_street_cdc b  on (a.id = b.town_code);\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"bin/start-seatunnel-sql.sh -m yarn-cluster --config config/cdcjoin.sql.conf\n")))}d.isMDXComponent=!0}}]);