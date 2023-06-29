* [Sass](https://sass-lang.com/)
    * [Sass中文官网](https://www.sasscss.com/)
    * [Sass香港](https://www.sass.hk/)
    * [Sass练习测试](https://www.sassmeister.com/)
* [Less](https://lesscss.org/)
    * [Less中文官网](https://less.devjs.cn/)
* [Stylus](http://www.stylus.org/)
    * [Stylus中文官网](https://www.stylus-lang.cn/)
    * [stylus中文版参考文档](https://www.zhangxinxu.com/jq/stylus/)



# 一、CSS预编译器

## 1-1. 什么是CSS预处理器

> - CSS预处理器定义了一种新的语言，其基本思想是，用一种专门的编程语言，为 CSS 增加了一些编程的特性，将 CSS作为目标生成文件，然后开发者就只要使用这种语言进行编码工作。
> - 通俗的说，“CSS 预处理器用一种专门的编程语言，进行 Web 页面样式设计，然后再编译成正常的 CSS 文件，以供项目使用。CSS 预处理器为 CSS 增加一些编程的特性，无需考虑浏览器的兼容性问题”，例如你可以在 CSS 中使用变量、简单的逻辑程序、函数（如右侧代码编辑器中就使用了变量$color）等等在编程语言中的一些基本特性，可以让你的 CSS 更加简洁、适应性更强、可读性更佳，更易于代码的维护等诸多好处。

## 1-2. CSS预处理器的特点

> - 基于CSS的另一种语言
> - 通过工具编译成CSS
> - 添加了很多CSS不具备的特性
> - 能提升CSS文件的组织

## 1-3. CSS预处理器的作用

> - 帮助更好地组织CSS代码
> - 提高代码复用率
> - 提升可维护性

## 1-4. CSS预处理器的优缺点

> - 优点：提高代码复用率和可维护性
> - 缺点：需要引入编译过程 有学习成本



# 二、Less

* [Less官网](https://less.devjs.cn/)
* Less相关教程
    * https://blog.dselegent.icu/front_end/css_advanced/less/01.html

**用node运行Less**

1. 安装 node.js，我实用nvm管理Node.js
2. 检查是否安装成功，使用 cmd 命令输入 `node -v` 查看版本即可
3. 基于 node.js 在线安装 Less，使用 cmd 命令输入 `npm install -g less` 即可
4. 检查是否安装成功，使用 cmd 命令 `lessc -v` 查看版本即可

```bash
$ npm install -g less   # 全局安装
```

**全局安装的安装路径**

> .nvm -> versions -> node -> v18.16.0 -> lib -> node_modules -> less

![](images/less全局安装路径.png)





# 三、Sass (推荐)

[Sass](https://sass-lang.com/)

* [Sass中文官网](https://www.sasscss.com/)
* [Sass香港](https://www.sass.hk/)
* [Sass练习测试](https://www.sassmeister.com/)



## 3.1 安装Sass

* [Sass中文官网 - 安装 Sass](https://www.sasscss.com/install)





## 3.2 Sass基础

* [Sass中文官网 - Sass Basics](https://www.sasscss.com/guide)

`sass` 基于 `Ruby`语言开发而成，因此安装 `sass` 前需要[安装Ruby](http://rubyinstaller.org/downloads)。

### 1. 安装ruby

省略

### 2. 安装Sass & compass

```shell
$ gem install sass

$ sass -v
Ruby Sass 3.7.4

$ where sass
/Users/qiyeyun/.rbenv/shims/sass


$ gem install compass

$ compass -v
Compass 1.0.3 (Polaris)
Copyright (c) 2008-2023 Chris Eppstein
Released under the MIT License.
Compass is charityware.
Please make a tax deductable donation for a worthy cause: http://umdf.org/compass

$ where compass
/Users/qiyeyun/.rbenv/shims/compass
```



### 3. 其他命令

```sh
//更新sass
$ gem update sass

//查看sass版本
$ sass -v

//查看sass帮助
$ sass -h
```



### 4. compass

**Compass是什么？**

简单说，Compass是Sass的工具库（toolkit）。

Sass本身只是一个编译器，Compass在它的基础上，封装了一系列有用的模块和模板，补充Sass的功能。它们之间的关系，有点像Javascript和jQuery、Ruby和Rails、python和Django的关系。



## 3.3 编译sass的几种方式

### 方式一：命令行编译

```shell
//单文件转换命令
$ sass input.scss output.css

//单文件监听命令
$ sass --watch input.scss:output.css

//如果你有很多的sass文件的目录，你也可以告诉sass监听整个目录：
$ sass --watch app/sass:public/stylesheets
```

### 方式二：软件方式编译

推荐 [koala](http://koala-app.com/index-zh.html)，koala是一个国产免费前端预处理器语言图形编译工具，支持Less、Sass、Compass、CoffeeScript，帮助web开发者更高效地使用它们进行开发。跨平台运行，完美兼容windows、linux、mac。

* [koala官网](http://koala-app.com/index-zh.html)
* [LESS/Sass 编译工具Koala介绍](https://www.sass.hk/skill/koala-app.html)

### 方式三：VSCode扩展 - Live Sass编译器

* [Visual Studio Code插件Live Sass Compiler可将Sass或Scss实时编译为CSS](https://www.sass.hk/skill/sass154.html)



##  3.4 Sass基本使用

SASS文件就是普通的文本文件。

[【Sass初级】开始使用Sass和Compass](https://www.sass.hk/skill/sass71.html)

