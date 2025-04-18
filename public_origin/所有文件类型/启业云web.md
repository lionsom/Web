# 启业云web应用

### 项目名称：qycloud-main

web 端项目主工程

- 更新仓库依赖：`npm install`

- 运行项目：`npm run serve`

- 选择代理方式：

  > > - 新模式(将提供预制环境选择或者自定义输入环境地址,访问时通过localhost访问即可)
  > >
  > > - 直接启动, 我已输入过账号密码了!(只适用于新模式)
  > > - 原有模式

# 

### 项目名称：qpaas-app-framework 

应用设计工程，需要先跑qycloud-main工程，根据qycloud-main工程中代理的环境来修改`vue.config.js`文件中的`devServer.https`属性，代理的端口以qycloud-main为准。

- 更新仓库依赖：`yarn install`
- 运行项目：`yarn serve`