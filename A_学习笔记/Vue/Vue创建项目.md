# 尚品汇项目笔记


# 一、安装Vue-cli并创建项目

[2.x Vue CLI](https://cli.vuejs.org/zh/)

[3.x Vite](https://vitejs.dev/)


安装：

```shell
npm install -g @vue/cli
# OR
yarn global add @vue/cli
```

是否安装正确

```bash
vue --version 
vue -V
```

升级：如需升级全局的 Vue CLI 包，请运行：

```bash
npm update -g @vue/cli

# 或者
yarn global upgrade --latest @vue/cli
```

创建一个项目：

```shell
vue create my-project
# OR
vue ui
```

**具体操作**

```bash
$ vue create sph

# 选择Vue2的版本

# 运行
$ cd sph
$ npm run serve

 DONE  Compiled successfully in 9510ms

  App running at:
  - Local:   http://localhost:8080/
  - Network: http://192.168.2.102:8080/

  Note that the development build is not optimized.
  To create a production build, run npm run build.
```

运行失败 <font color=red>`vue-cli-service: command not found`</font> ：

```bash
$ npm run serve

> sph@0.1.0 serve
> vue-cli-service serve --open

sh: vue-cli-service: command not found
```

* 解决方案：
    * cd到项目目录
    * 执行命令`sudo rm -rf node_modules package-lock.json && npm install`
    * 输入密码，安装完成就可以正常运行了



# 二、项目结构

* node_modules文件夹：项目依赖文件夹
* public文件夹：一般放置一些静态资源（图片），需要注意，放在public文件夹中的静态资源会原封不动的打包到dist文件夹中
* src文件夹：程序员源代码文件夹
    * assets文件夹：一般也是放置静态资源（一般放置多个组件共用的静态资源），需要注意，放置在assets内的静态资源，webpack会把静态资源当做一个模块，打包js文件里面。
    * components文件夹：一般放置的是非路由组件（全局组件）
    * App.vue：唯一的根组件，Vue当中的组件
    * main.js：程序入口文件，也是整个程序中最先执行的文件
* babel.config.js：配置文件（babel相关）
* package.js：项目信息，类似podspec文件
* package-lock.json：缓存性文件
* README.md：说明文件
* vue.config.js：vue相关配置，例如：关闭eslint校验



# 三、其他配置

1. 项目运行起来自动打开游览器的设置

```bash
打开package.json
    "serve": "vue-cli-service serve --open",
    
命令最后加上 --open 打开
```

2. eslint校验功能关闭

```bash
在根目录下，创建 vue.config.js 文件

const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  // 关闭eslint
  lintOnSave: false, 
})
```

3. src文件夹配置别名

```bash
打开jsconfig.json配置别名@提示
{
  "compilerOptions": {
    "baseUrl": "./",
    "paths": {
      "@/*": [
        "src/*"
      ]
    },
  "exclude": ["node_modules", "dist"]
}

```



# 四、开发项目流程

1. 书写静态页面（HTML+CSS）
2. 拆分组件
3. 获取服务器数据动态展示
4. 完成相应的动态业务逻辑



**创建组件**

组件结构 + 组件样式 + 图片资源







































