# 学习资源

学习路径

* [2022年web前端开发学习路线图 - 黑马程序员](https://www.bilibili.com/read/cv10431130)



学习网站

* [MDN](https://developer.mozilla.org/zh-CN/docs/Learn)
* [w3school](https://www.w3school.com.cn/)
* [2020年Web前端最新导航（常见前端框架、前端大牛）](https://www.cnblogs.com/qianguyihao/p/10701923.html)
* [千古前端图文教程 - Github](https://github.com/qianguyihao/Web)
    * [Document](https://web.qianguyihao.com/)



书籍

* [Vue3 入门指南与实战案例](https://vue3.chengpeiquan.com/)



引用&参考

* https://github.com/JERRY-Z-J-R/I-love-you-3-thousand





# 前端名词解释



## HTML

HTML 指超文本标签语言。



## XHTML

XHTML 是更严谨更纯净的 HTML 版本。



## HTML 5

HTML 5 是下一代的 HTML。



## HTML DOM（文档对象模型）

当网页被加载时，浏览器会创建页面的文档对象模型（*D*ocument *O*bject *M*odel）。



## CSS

CSS 指层叠样式表（Cascading Style Sheets）。



## CSS3

CSS3 是最新的 CSS 标准。



## CSS预编译器

* [Sass](https://sass-lang.com/)
    * [Sass中文官网](https://www.sasscss.com/)
    * [Sass香港](https://www.sass.hk/)
    * [Sass练习测试](https://www.sassmeister.com/)
* [Less](https://lesscss.org/)
    * [Less中文官网](https://less.devjs.cn/)
* [Stylus](http://www.stylus.org/)
    * [Stylus中文官网](https://www.stylus-lang.cn/)
    * [stylus中文版参考文档](https://www.zhangxinxu.com/jq/stylus/)



## JavaScript

JavaScript 是世界上最流行的脚本语言。



## jQuery 

jQuery 是一个 JavaScript 库。



## AJAX

AJAX = *A*synchronous *J*avaScript *A*nd *X*ML.

AJAX 并非编程语言。

AJAX 仅仅组合了：

- 浏览器内建的 XMLHttpRequest 对象（从 web 服务器请求数据）
- JavaScript 和 HTML DOM（显示或使用数据）

Ajax 是一个令人误导的名称。Ajax 应用程序可能使用 XML 来传输数据，但将数据作为纯文本或 JSON 文本传输也同样常见。

Ajax 允许通过与场景后面的 Web 服务器交换数据来异步更新网页。这意味着可以更新网页的部分，而不需要重新加载整个页面。



## Bootstrap 5

Bootstrap 是最流行的 HTML、CSS 和 JavaScript 框架，用于创建响应式、移动优先的网站。

Bootstrap 5 是 Bootstrap 的最新版本。



## Node.js

* [Node.js 官网](https://nodejs.org)

> Node.js是一个开源、跨平台的 JavaScript 运行时环境。



## NVM

* [NVM](https://github.com/nvm-sh/nvm)

> nvm全名node.js version management，顾名思义是一个nodejs的版本管理工具。通过它可以安装和切换不同版本的nodejs。



## NPM

* [npm官方文档](https://docs.npmjs.com/)

* [npm库网站](https://www.npmjs.com/)

> NPM是随同NodeJS一起安装的包管理工具，能解决NodeJS代码部署上的很多问题，常见的使用场景有以下几种：
>
> - 允许用户从NPM服务器下载别人编写的第三方包到本地使用。
> - 允许用户从NPM服务器下载并安装别人编写的命令行程序到本地使用。
> - 允许用户将自己编写的包或命令行程序上传到NPM服务器供别人使用。
>
> 由于新版的nodejs已经集成了npm，所以之前npm也一并安装好了。同样可以通过输入 **"npm -v"** 来测试是否成功安装。



## PNPM

* [pnpm官网](https://pnpm.io/)
    * [Installation](https://pnpm.io/installation)
    * [Uninstalling pnpm](https://pnpm.io/uninstall)

> pnpm: performant npm，是node.js的包管理工具。

```shell
# 安装，需要Node.js才能运行。
$ npm install -g pnpm

# or
$ brew install pnpm

# 验证
$ pnpm --version
6.35.1

$ which pnpm
/Users/qiyeyun/.nvm/versions/node/v18.16.0/bin/pnpm
```



## Vue-cli & Vite

[2.x Vue CLI](https://cli.vuejs.org/zh/)

[3.x Vite](https://vitejs.dev/)





构建工具： Webpack / Vite / Guip

主流框架：Vue / React / Angular

TypeScript

微信小程序开发，熟悉 Taro 框架或 uni-app 框架优先

服务器开发：nodejs、java

工程化、模块化、组件化

ES6



`.vue` 文件， Vue 专属的文件扩展名，官方名称是 Single-File Component ，简称 SFC ，也就是单文件组件。

|     `.vue` 文件     |  `.html` 文件   |
| :-----------------: | :-------------: |
| `<template />` 部分 |    HTML 代码    |
|  `<style />` 部分   |    CSS 代码     |
|  `<script />` 部分  | JavaScript 代码 |



| 名词 |          全称           |    中文    |
| :--: | :---------------------: | :--------: |
| MPA  | Multi-Page Application  | 多页面应用 |
| SPA  | Single-Page Application | 单页面应用 |



网页的 TKD 三要素是指一个网页的三个关键信息，含义如下：

T ，指 Title ，网站的标题，即网页的 `<title>网站的标题</title>` 标签。

K ，指 Keywords ，网站的关键词，即网页的 `<meta name="Keywords" content="关键词1,关键词2,关键词3" />` 标签。

D ，指 Description ，网站的描述，即网页的 `<meta name="description" content="网站的描述" />` 标签。

这三个要素标签都位于 HTML 文件的 `<head />` 标签内。



SEO

**SEO 的英文全稱為 Search Engine Optimization，中文稱作為【搜尋引擎最佳化】或者是【搜尋引擎優化】**



AJAX 技术（ Asynchronous JavaScript and XML ）是指在不离开页面的情况下，通过 JavaScript 发出 HTTP 请求，让网页通过增量更新的方式呈现给用户界面，而不需要刷新整个页面来重新加载，是一种 “无刷体验” 。



| 名词 |         全称          |    中文    |
| :--: | :-------------------: | :--------: |
| CSR  | Client-Side Rendering | 客户端渲染 |
| SSR  | Server-Side Rendering | 服务端渲染 |



Vue 的 SSR 支持非常好， Vue 官方不仅提供了一个 [Vue.js 服务器端渲染指南](https://cn.vuejs.org/guide/scaling-up/ssr.html) 介绍了基于 Vue 的 SSR 入门实践，还有基于 Vue 的 [Nuxt.js](https://github.com/nuxt/framework) 、 [Quasar](https://github.com/quasarframework/quasar) 框架帮助开发者更简单的落地 SSR 开发，构建工具 Vite 也有内置的 [Vue SSR](https://cn.vitejs.dev/guide/ssr.html) 支持。



Node  与  Node.js



|     名词      |          全称          |     中文     |
| :-----------: | :--------------------: | :----------: |
| Pre-Rendering |     Pre-Rendering      |    预渲染    |
|      SSG      | Static-Site Generation | 静态站点生成 |

无头浏览器（ Headless Browser ），指没有 GUI 界面的浏览器，使用代码通过编程接口来控制浏览器的行为，常用于网络爬虫、自动化测试等场景，预渲染也使用它来完成页面的渲染，以获取渲染后的代码来填充 HTML 文件。



常见的 SSG 静态站点生成器有：基于 Vue 技术的 [VuePress](https://github.com/vuejs/vuepress) 和 [VitePress](https://github.com/vuejs/vitepress) ，自带了 Vue 组件的支持，还有基于 React 的 [Docusaurus](https://github.com/facebook/docusaurus) ，以及很多各有特色的生成器，例如 [Jekyll](https://github.com/jekyll/jekyll) 、 [Hugo](https://github.com/gohugoio/hugo) 等等。



| 名词 |               全称               |       中文       |
| :--: | :------------------------------: | :--------------: |
| ISR  |    Incremental Site Rendering    | 增量式的网站渲染 |
| DPR  | Distributed Persistent Rendering | 分布式的持续渲染 |



Node.js

以 [Express](https://github.com/expressjs/express) 、 [Koa](https://github.com/koajs/koa) 、 [Fastify](https://github.com/fastify/fastify) 为代表的轻量级服务端框架，

又诞生了以 [Nest](https://github.com/nestjs/nest) （底层基于 Express ，可切换为 Fastify ）、 [Egg](https://github.com/eggjs/egg) （基于 Koa ）为代表的基于 MVC 架构的企业级服务端框架



Hybrid App

基于 Vue 的 [uni-app](https://github.com/dcloudio/uni-app) 、基于 React 的 [React Native](https://github.com/facebook/react-native) 



基于 Vue 3 的项目，最主流的工程化组合拳有以下两种：

| 常用方案 | Runtime | 构建工具 | 前端框架 |
| :------: | :-----: | :------: | :------: |
|  方案一  |  Node   | Webpack  |   Vue    |
|  方案二  |  Node   |   Vite   |   Vue    |



### [什么是 Node.js](https://vue3.chengpeiquan.com/engineering.html#什么是-node-js)

Node.js （简称 Node ） 是一个基于 Chrome V8 引擎构建的 JS 运行时（ JavaScript Runtime ）。

它让 JavaScript 代码不再局限于网页上，还可以跑在客户端、服务端等场景，极大的推动了前端开发的发展，现代的前端开发几乎都离不开 Node 。





构建工具，例如： [Grunt](https://github.com/gruntjs/grunt) 、 [Gulp](https://github.com/gulpjs/gulp) 、 [Webpack](https://github.com/webpack/webpack) 、 [Snowpack](https://github.com/FredKSchott/snowpack) 、 [Parcel](https://github.com/parcel-bundler/parcel) 、 [Rollup](https://github.com/rollup/rollup) 、 [Vite](https://github.com/vitejs/vite) … 



 JavaScript 原生方法非常多，不可能手动去维护每一个方法的兼容性，所以这部分工作，通常会让构建工具来自动化完成，常见的方案就有 [Babel](https://github.com/babel/babel) 。



两个流行且强相关的构建工具： [Webpack](https://vue3.chengpeiquan.com/engineering.html#webpack) 和 [Vite](https://vue3.chengpeiquan.com/engineering.html#vite)

点击访问：[Webpack 官网](https://webpack.js.org/)

点击访问：[Vite 官网](https://cn.vitejs.dev/)



|  工具   | 文档                                                         |
| :-----: | :----------------------------------------------------------- |
| Webpack | [模式](https://www.webpackjs.com/concepts/mode/)             |
|  Vite   | [环境变量和模式](https://cn.vitejs.dev/guide/env-and-mode.html) |

