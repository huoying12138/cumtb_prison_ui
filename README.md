# cumtb-metro-test
<p>
    <p align="center">
	<a href="https://gitee.com/纸鸢/ cumtb_prison_ui/"><img src="https://img.shields.io/badge/cumtb_prison_ui-v1.0.0-brightgreen.svg"></a>
	<a href="https://gitee.com/纸鸢/ cumtb_prison_ui/blob/master/LICENSE"><img src="https://img.shields.io/github/license/mashape/apistatus.svg"></a>
</p>

## 项目简介

监所预警系统
* 前端采用Vue、Vuex、ElementUI、mock、axios。
* 后端采用Spring Boot、Mybatis-Plus、Mysql、Swagger。

##前端项目地址
[前端cumtb_prison_ui](https://gitee.com/wx_a512a2302d/cumtb_prison_ui)

[后端cumtb_prison_back_a](https://gitee.com/hzhrc6/cumtb_prison_back_a)
## 前端启动
```
npm install

npm run serve
```
配置vue.config.js的代理地址与后端地址及端口一致


##后端启动
配置application.yml文件mysql数据库，两种方式
* 本地启动：新建数据库prison_emergency，并导入运行sql文件
* 远程启动：默认方式
注意前端代理地址和端口需要和后端启动端口一致

### ps:yang-edited
See [Configuration Reference](https://cli.vuejs.org/config/).
