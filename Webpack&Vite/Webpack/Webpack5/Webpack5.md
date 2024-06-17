官网

* [webpack中文官网](https://webpack.docschina.org/)

* [官网文档 - webpack安装](https://webpack.docschina.org/guides/installation#local-installation)

* [webpack GitHub release](https://github.com/webpack/webpack/releases)

尚硅谷

* [尚硅谷2022版Webpack5入门到原理](https://www.bilibili.com/video/BV14T4y1z7sw)

在线笔记

- https://lionsom.github.io/webpack5-docs/
- https://yk2012.github.io/sgg_webpack5/
- http://xxpromise.gitee.io/webpack5-docs/

其他参考

* [30 分钟掌握 Webpack - 视频](https://www.bilibili.com/video/BV11g411y7Sd/?spm_id_from=333.337.search-card.all.click&vd_source=611f1c6701469d82272fd49ca9b9f7d2)

* [30 分钟掌握 Webpack - 笔记](https://www.yuque.com/zhangyuge-vkorl/nmt4ko/plsxw6irc06kwqqc)





# 一、部署尚硅谷文档

## 1. 运行文档项目

路径：尚硅谷Webpack5-课件 -> webpack_docs

```sh
# 项目使用VuePress进行文档预览

$ yarn install

$ yarn run start 
```



## 2. Github Pages 部署

* https://lionsom.github.io/webpack5-docs/

![](images/001.png)



# 二、尚硅谷 - 视频学习记录

前提依赖：NodeJs 16+

## 1. 为什么需要打包工具？

开发时，我们会使用框架（React、Vue），ES6 模块化语法，Less/Sass 等 css 预处理器等语法进行开发。

这样的代码要想在浏览器运行必须经过编译成浏览器能识别的 JS、Css 等语法，才能运行。

所以我们需要打包工具帮我们做完这些事。

一个个小工具编译成浏览器能够识别的代码；这些小工具的集合就是 **构建工具**，而 webpack 就是构建工具的一种。

除此之外，打包工具还能压缩代码、做兼容性处理、提升代码性能等。

**有哪些打包工具？**

- Grunt
- Gulp
- Parcel
- Webpack
- Rollup
- Vite



## 2. Webpack是什么

Webpack 是一个强大的 JavaScript 模块打包工具，它可以将各种资源（JavaScript、CSS、HTML、图片等）作为模块来处理，并最终打包成一个或多个优化后的输出文件（Bundle），用于在浏览器中加载。

> webpack 是一种前端资源 **构建工具**，一个 **静态资源打包工具**  (module bundler)。 

![](images/002.png)



## 3. Webpack功能介绍

> **Webpack 自 身 只 理 解 JavaScript**

Webpack 本身功能是有限的:

- 开发模式：仅能编译 JS 中的 `ES Module` 语法
- 生产模式：能编译 JS 中的 `ES Module` 语法，还能压缩 JS 代码



### a. 最基础的Webpack项目

- 初始化`package.json`

```text
npm init -y
```

此时会生成一个基础的 `package.json` 文件。

**需要注意的是 `package.json` 中 `name` 字段不能叫做 `webpack`, 否则下一步会报错**

- 下载依赖

```text
npm i webpack webpack-cli -D
```

* 安装指定版本的webpack

| 依赖               | 版本 | 新版本 |
| ------------------ | ---- | ------ |
| webpack            | 4    | 5      |
| webpack-cli        | 3    | 4      |
| webpack-dev-server | 3    | 3      |



启用 Webpack

- 开发模式

```text
npx webpack ./src/main.js --mode=development
```

- 生产模式

```text
npx webpack ./src/main.js --mode=production
```

`npx webpack`: 是用来运行本地安装 `Webpack` 包的。

`./src/main.js`: 指定 `Webpack` 从 `main.js` 文件开始打包，不但会打包 `main.js`，还会将其依赖也一起打包进来。

`--mode=xxx`：指定模式（环境）。





























