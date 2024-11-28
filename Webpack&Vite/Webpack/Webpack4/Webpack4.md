# 学习资源

[Webpack4实战教程](https://mouday.github.io/coding-tree/#/blog/webpack/index?id=webpack4实战教程)

尚硅谷新版Webpack4实战教程(从入门到精通) https://www.bilibili.com/video/BV1e7411j7T5

尚硅谷前端Webpack4教程（高级进阶篇） https://www.bilibili.com/video/BV1cv411C74F

课件地址webpack从入门到精通

- 下载地址：https://pan.baidu.com/s/1JxvXF8EyG9TSNLqkc98YzQ 提取码：i5qc
- 备用地址：https://pan.baidu.com/s/1T2g37SpIQRjF6fjFDl_YwA 密码:uw5q

* PDF：[尚硅谷前端技术之webpack从入门到精通(上).pdf](./尚硅谷资料-Webpack4-1基础/课件/尚硅谷前端技术之webpack从入门到精通(上).pdf)



* [掌握Webpack4（实战篇一）](https://juejin.cn/post/6844903918275657735)

* [实例带你入门并掌握Webpack4（实战篇二）](https://juejin.cn/post/6844903918766391304)

* [实例带你入门并掌握Webpack4（实战篇三）](https://juejin.cn/post/6844903918778974215)



# 一、Webpack简介

## 1. 引入

* less编写css，在html中引入`'./com.less'`，浏览器无法识别，需要工具将 `.less -> .css` 文件；
* 用 ES6 高级语法编写 js 代码，浏览器也无法识别，需要工具编译成浏览器认识的语法；

### a. 什么是构建工具

* 等等等，一个个小工具编译成浏览器能够识别的代码；这些小工具的集合就是 **构建工具**，而 webpack 就是构建工具的一种。



## 2. 什么是webpack

> webpack 是一种前端资源 **构建工具**，一个 **静态模块打包器 (module bundler)**。 
>
> 在 webpack 看来, 前端的所有资源文件(js/json/css/img/less/...)都会作为 **模块** 处理。 
>
> 它将根据模块的依赖关系进行静态分析，打包生成对应的 **静态资源(bundle)**。

![](images/001.png)



### a. 过程概要

有一个项目，需要一个Entry，来告诉webpack入口，当遇到 less 文件，此时需要 Loader 将 Less 转为 CSS 文件，遇到 img 等文件，需要 Plugins 处理资源压缩等复杂功能，最后生成 Bundle 在 Output 出口 输出。

* Webpack 需要一个入口，这里入口就是 `index.js` 文件；
* `index.js` 文件中，又依赖了 `jQuery` 和 `index.less` 等其他文件；
* 这些文件形成 `chunk` （代码块），再对代码块进行处理，如：less -> css、js语法兼容等等；这些操作成为 **打包**。
* 打包完成后，输出的文件叫 `Bundle`。

![](images/002.png)



## 3. webpack 的 module、bundle、chunk 分别指的是什么？

### a. Module（模块）：

module指的是Webpack处理的代码的单个文件。这可以是JavaScript、CSS、图片或其他类型的文件。

在Webpack中，每个文件都被视为一个独立的模块，它们可以通过import、require等方式引入和导出。

模块可以包含代码、依赖关系]和其他相关资源，它们通常用于组织和管理应用程序的各个部分。

### b. Bundle（捆绑包）：

bundle是由Webpack根据模块之间的依赖关系生成的最终输出文件。它将多个模块打包成一个或多个捆绑包。

在开发过程中，Webpack会根据入口文件（entry）和模块之间的依赖关系，递归地构建一个或多个捆绑包。

捆绑包通常是用于在浏览器中加载和执行的最终文件，包含了应用程序所需的所有代码和资源。

### c. Chunk（代码块）：

chunk是Webpack在构建过程中生成的代码块，它是一种逻辑上的概念，表示一组相互依赖的模块。

当Webpack构建应用程序时，它会根据依赖关系将模块组织成不同的代码块，例如按需加载（懒加载）时生成的分割代码块。

默认情况下，Webpack会将所有入口点（entry point）及其依赖的模块打包到一个主要的初始代码块中。但是，通过使用代码分割（code splitting）技术，可以将应用程序拆分成多个代码块，以实现按需加载和优化性能。

**总结：**

module是Webpack处理的单个文件，代表了应用程序的组成部分。

bundle是由Webpack生成的最终输出文件，它包含了所有模块的代码和资源。

chunk是逻辑上的代码块，表示一组相互依赖的模块。它可以根据需要进行拆分和加载。



## 4. Webpack五个核心概念

1. Entry：入口(Entry)指示 webpack 以哪个文件为入口起点开始打包，分析构建内部依赖图。

2. Output：输出(Output)指示 webpack 打包后的资源 bundles 输出到哪里去，以及如何命名。

3. Loader ：处理非js文件，翻译工作

    Loader 让 webpack 能 够 去 处 理 那 些 非 JavaScript 文 件 ( **webpack 自 身 只 理 解 JavaScript** ) 

4. Plugins：插件，执行范围更广的任务，打包优化，压缩，定义环境中的变量等

    插件(Plugins)可以用于执行范围更广的任务。插件的范围包括，从打包优化和压缩，一直到重新定义环境中的变量等。

5. mode：指示 Webpack 使用相应模式的配置。

    - development 开发模式：会将 process.env.NODE_ENV 的值设为 development。启用 NameChunksPlugin 和 NameModulesPlugin。特点是能让代码本地调试运行的环境。
    - production 生产模式：会将 process.env.NODE_ENV 的值设为 production。启用 FlagDependencyUsagePlugin, FlagIncludedChunksPlugin, ModuleConcatenationPlugin, NoEmitOnErrorsPlugin, OccurrenceOrderPlugin, SideEffectsFlagPlugin 和 UglifyJsPlugin。特点是能让代码优化上线运行的环境。



## 5. webpack 的主要配置项有哪些

* [webpack 的主要配置项有哪些](https://github.com/pro-collection/interview-question/issues/752)

Webpack 是一个现代 JavaScript 应用程序的静态模块打包器。配置文件名通常为 `webpack.config.js`，它提供了一种配置 Webpack 的方式。下面是一些主要的 Webpack 配置选项：

1. **entry**: 入口起点(entry point)指示 webpack 应该使用哪个模块，来作为构建其内部依赖图的开始。可以指定一个或多个入口起点。
2. **output**: output 属性告诉 webpack 在哪里输出它所创建的 bundles，以及如何命名这些文件，默认值为 `./dist`。
3. **module**: module 属性用于决定如何处理项目中的不同类型的模块。
    - **rules**: 配置模块的读取和解析规则，通常用来配置 loader。
4. **resolve**: 配置模块如何解析。
    - **extensions**: 自动解析确定的扩展，此选项能够使用户在引入模块时不带扩展。
5. **plugins**: 插件是用来扩展 webpack 功能的。它们会在构建流程中的特定时机注入运行逻辑来改变构建结果或做你想要的事情。
6. **devServer**: 通过来自 `webpack-dev-server` 的这些选项能够对开发服务器的行为进行控制。
7. **devtool**: 此选项控制是否生成，以及如何生成 source map。
8. **mode**: 通过设置 `development` 或 `production` 之中的一个，来为流程提供相应模式下的内置优化。
9. **optimization**: 包含一组可用来调整构建输出的选项。
    - **splitChunks**: 配置模块的拆分，可以将公共的依赖模块提取到已有的入口 chunk 中，或者提取到一个新生成的 chunk。
    - **runtimeChunk**: 为每个 entry 创建一个运行时文件。
10. **performance**: 允许 webpack 根据某些参数，控制资产和入口起点的最大大小。
11. **externals**: 防止将某些 import 包(package)打包到 bundle 中，而是在运行时(runtime)再去从外部获取这些扩展依赖。

每个项目的具体需求不同，Webpack 的配置也会有所不同。这些选项提供了强大的配置能力和灵活性，可以用来定制 Webpack 的打包、加载和转换行为。



## 6. `webpack.config.js` 介绍

* `webpack.config.js`：webpack的配置文件
* 作用：指示 webpack 干哪些活（当你运行 webpack 指令时，会加载里面的配置）

* 所有构建工具都是基于nodejs平台运行的，模块化默认采用commonjs。
    * 区分：src中的代码，基于ES6与 `webpack.config.js` 不冲突！！！！
    * 导入：`require('path');`
    * 导出：`module.exports = {}`







# 二、Webpack-4 初体验

## 1. 项目创建

```sh
$ mkdir webpack-demo
$ cd webpack-demo

# 初始化项目目录
$ npm init -y

# 安装webpack
$ npm i webpack webpack-cli -D
# 指定版本
$ npm i webpack@4 webpack-cli@3 -D

# 更新
$ pnpm up weboack@4
```

安装指定版本的webpack

| 依赖               | 版本 | 新版本 |
| ------------------ | ---- | ------ |
| webpack            | 4    | 5      |
| webpack-cli        | 3    | 4      |
| webpack-dev-server | 3    | 3      |

## 2. 源码文件

```json
// ./src/data.json
{
  "name": "jack",
  "age": 18
}
```

```css
// ./src/index.css 
html,
body {
  height: 100%;
  background-color: pink;
}
```

```js
// ./src/index.js
/*
  index.js: webpack入口起点文件

  1. 运行指令：
    开发环境：webpack ./src/index.js -o ./build/built.js --mode=development
      webpack会以 ./src/index.js 为入口文件开始打包，打包后输出到 ./build/built.js
      整体打包环境，是开发环境
    生产环境：webpack ./src/index.js -o ./build/built.js --mode=production
      webpack会以 ./src/index.js 为入口文件开始打包，打包后输出到 ./build/built.js
      整体打包环境，是生产环境

   2. 结论：
    1. webpack能处理js/json资源，不能处理css/img等其他资源
    2. 生产环境和开发环境将ES6模块化编译成浏览器能识别的模块化~
    3. 生产环境比开发环境多一个压缩js代码。
*/

import './index.css';   // webpack无法处理css

import data from './data.json';
console.log(data);

function add(x, y) {
  return x + y;
}

console.log(add(1, 2));
```

## 3. 打包 - 命令行

```sh
# NodeJs版本：16
$ nvm use 16
```

```json
{
  "scripts": {
    // 源代码运行
    "dev": "node ./src/index.js",
    // webpack打包 dev模式
    "webpack:dev": "webpack ./src/index.js -o ./dist_dev/built_dev.js --mode=development",
    // webpack打包 pro模式
    "webpack:pro": "webpack ./src/index.js -o ./dist_pro/built_pro.js --mode=production",
    // 测试 dev输出代码
    "dist:dev": "node ./dist_dev/built_dev.js",
    // 测试 pro输出代码
    "dist:pro": "node ./dist_pro/built_pro.js",
  },

  "devDependencies": {
    "webpack": "^4.47.0",
    "webpack-cli": "^3.3.12"
  }
}
```



# 三、webpack4 - 打包样式文件

第一个工程中，webpack命令行，无法将css文件进行打包。

需要创建 配置文件 `webpack.config.js` 进行配置。

## 1. 项目创建

```sh
$ pnpm add webpack@4 webpack-cli@3 -D

$ pnpm add css-loader@3 -D
$ pnpm up css-loader@3 -D

$ pnpm add style-loader@1 -D
$ pnpm up style-loader@1 -D

$ pnpm add less-loader@5 -D
$ pnpm up less-loader@5 -D
```



## 2. webpack配置文件

### a. 具体介绍

#### Ⅰ. 模块化默认采用commonjs

* 所有构建工具都是基于nodejs平台运行的，模块化默认采用commonjs。
    * 区分：src中的代码，基于ES6与 `webpack.config.js` 不冲突！！！！
    * 导入：`require('path');`
    * 导出：`module.exports = {}`



#### Ⅱ. output

这里引入 nodejs的变量：`__dirname`， 表示当前文件的目录的绝对路径。

```js
output: {
    // 输出文件名
    filename: 'built.js',
    // 输出路径
    // __dirname nodejs的变量，代表当前文件的目录绝对路径
    path: resolve(__dirname, 'build')
},
```



#### Ⅲ. module（loader的配置）

* 不同文件必须配置不同loader处理，如：css与less需要不同的loader处理。
* `test` 字段：使用正则，匹配哪些文件；
* `use` 字段：使用哪些loader进行处理；
    * `use` 是数组
    * `use` 数组中loader执行顺序：从右到左，从下到上 依次执行；
* 

```js
  // loader的配置
  module: {
    rules: [
      // 详细loader配置
      // 不同文件必须配置不同loader处理
      {
        // 匹配哪些文件
        test: /\.css$/,
        // 使用哪些loader进行处理
        use: [
          // use数组中loader执行顺序：从右到左，从下到上 依次执行
          // 创建style标签，将js中的样式资源插入进行，添加到head中生效
          'style-loader',
          // 将css文件变成commonjs模块加载js中，里面内容是样式字符串
          'css-loader'
        ]
      },
      {
        test: /\.less$/,
        use: [
          'style-loader',
          'css-loader',
          // 将less文件编译成css文件
          // 需要下载 less-loader和less
          'less-loader'
        ]
      }
    ]
  },
```







### b. `webpack.config.js` 完整版

```js
// webpack.config.js
/*
  webpack.config.js  webpack的配置文件
    作用: 指示 webpack 干哪些活（当你运行 webpack 指令时，会加载里面的配置）

    所有构建工具都是基于nodejs平台运行的~模块化默认采用commonjs。
*/

// resolve用来拼接绝对路径的方法
const { resolve } = require('path');

module.exports = {
  // webpack配置
  // 入口起点
  entry: './src/index.js',
  // 输出
  output: {
    // 输出文件名
    filename: 'built.js',
    // 输出路径
    // __dirname nodejs的变量，代表当前文件的目录绝对路径
    path: resolve(__dirname, 'build')
  },
  // loader的配置
  module: {
    rules: [
      // 详细loader配置
      // 不同文件必须配置不同loader处理
      {
        // 匹配哪些文件
        test: /\.css$/,
        // 使用哪些loader进行处理
        use: [
          // use数组中loader执行顺序：从右到左，从下到上 依次执行
          // 创建style标签，将js中的样式资源插入进行，添加到head中生效
          'style-loader',
          // 将css文件变成commonjs模块加载js中，里面内容是样式字符串
          'css-loader'
        ]
      },
      {
        test: /\.less$/,
        use: [
          'style-loader',
          'css-loader',
          // 将less文件编译成css文件
          // 需要下载 less-loader和less
          'less-loader'
        ]
      }
    ]
  },
  // plugins的配置
  plugins: [
    // 详细plugins的配置
  ],
  // 模式
  mode: 'development', // 开发模式
  // mode: 'production', // 生产模式
}
```



## 3. 打包

```sh
# 全局安装webpack
$ webpack

# 局部安装webpack
$ npx webpack
Hash: ef117f32f8ff7181f27b
Version: webpack 4.47.0
Time: 272ms
Built at: 02/01/2024 2:31:52 PM
   Asset      Size  Chunks             Chunk Names
built.js  20.7 KiB    main  [emitted]  main
Entrypoint main = built.js
[./node_modules/.pnpm/css-loader@3.6.0_webpack@4.47.0/node_modules/css-loader/dist/cjs.js!./node_modules/.pnpm/less-loader@5.0.0_less@3.13.1_webpack@4.47.0/node_modules/less-loader/dist/cjs.js!./src/index.less] 312 bytes {main} [built]
[./node_modules/.pnpm/css-loader@3.6.0_webpack@4.47.0/node_modules/css-loader/dist/cjs.js!./src/index.css] 380 bytes {main} [built]
[./src/index.css] 623 bytes {main} [built]
[./src/index.js] 70 bytes {main} [built]
[./src/index.less] 728 bytes {main} [built]
    + 2 hidden modules
```









