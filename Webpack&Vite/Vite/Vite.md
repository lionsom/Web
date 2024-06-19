视频

* [前端构建工具（webpack&vite）教程 李立超](https://www.bilibili.com/video/BV1Kd4y147gg?p=11&vd_source=dc55c355e9f5b6174832aacfb5d8b6aa)





# 一、Vite vs Webpack

## 1. Webpack

**Webpack** 是一个模块打包工具，可以处理各种静态资源（JavaScript、CSS、图片等）并将其打包成一个或多个文件。它功能强大，适用于大型项目和复杂的配置需求。



## 2. Vite

**Vite** 是由 Vue.js 作者尤雨溪开发的新一代前端构建工具，专注于提升开发体验和构建速度。Vite 利用浏览器 **原生 ES 模块加载**，在开发阶段提供极快的冷启动时间。



## 3. Webpack 与 Vite 的对比

| 特性              | Webpack                    | Vite                                    |
| ----------------- | -------------------------- | --------------------------------------- |
| 启动速度          | 慢（依赖解析时间长）       | 快（基于 ES 模块的即时服务）            |
| 构建速度          | 较慢（需要多次打包优化）   | 快（生产模式下使用 Rollup 打包）        |
| 配置复杂度        | 高（灵活但复杂）           | 低（默认配置开箱即用）                  |
| 热模块替换（HMR） | 有（但速度较慢）           | 快速（基于 ES 模块）                    |
| 插件生态          | 丰富（大量插件和加载器）   | 增长中（已有许多常用插件）              |
| 使用场景          | 适用于大型和复杂项目       | 适用于快速开发和中小型项目              |
| 框架支持          | 通用（需配置对应框架插件） | 多框架开箱即用（Vue、React、Svelte 等） |
| 文档和社区支持    | 成熟且丰富                 | 新兴但快速增长                          |



# 二、创建Vite项目

## 1. 手动创建vite项目

> Demo: my-code-demo/01-base-by-hand-demo



### a. 初始化项目

```sh
$ npm init -y
```

安装vite

```sh
$ npm install vite -D
$ pnpm add vite -D
```



### b. 新增测试代码

* index.html

> **type="module"：采用的是ES模块化规范。**

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
  <script type="module" src="./main.js"></script>
</body>
</html>
```

* main.js

```js
document.body.insertAdjacentHTML('beforeend', '<h1>你好 Vite！！</h1>')
```



### c. 新增代码路径

#### Ⅰ. 可直接放在根目录下

![](images/001.png)

运行：`$ pnpm vite`

直接打开：http://localhost:5173/ ，默认根目录下的index.html

![](images/002.png)



### Ⅱ. 放到src目录下

![](images/003.png)

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
  <script type="module" src="./src/main.js"></script>
  <script type="module" src="./src/main02.js"></script>
</body>
</html>
```

运行：`$ pnpm vite`

![](images/004.png)



## 2. 自动创建vite项目

> Demo: my-code-demo/01-base-by-vite-demo



```sh
$ npm create vite@latest

$ pnpm create vite
```





## 3. vite打包、预览

`pnpm vite build`：打包项目

![](images/005.png)



**【问题】：打出来的文件无法访问，需要放到服务器上，才能正常打开！！！**



`pnpm vite preview`：开启一个服务器，预览打包好的项目

**前提：必须先打包好，才能预览，否则报错！**



## 4. vite命令总结

```json
// package.json
{
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview"
  },
}
```

* `pnpm vite` : 启动一个开发的服务器，不会做任何打包操作
    * vite的源码目录，就是项目的根目录

* `pnpm vite build`：打包项目
* `pnpm vite preview`：开启一个服务器，预览打包好的项目

