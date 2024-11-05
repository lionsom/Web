* [Sass Guide](https://www.sass.hk/guide/)



# 一、Vue3 安装 Sass

## 1、安装依赖

**请使用以下命令安装`sass`和`sass-loader`包：**

```sh
$ pnpm install sass sass-loader --save-dev
```

## 2、使用 lang="scss"

```js
<style scoped lang="scss">
div{
  h1 {
    // 样式代码
  }
}
</style>
```

## 3、添加全局样式

在src/styles目录下创建一个index.scss文件。

## 4、设置清除默认样式

* [npm - scss-reset](https://www.npmjs.com/package/scss-reset)

项目中需要用到清除默认样式。

1、在 `src/styles` 目录下创建一个 `reset.scss` 文件；

2、进入npm官网，搜索 `reset.scss`，拷贝对应的代码到 `src/styles/reset.scss` 文件中；

3、`index.scss` 引入 `reset.scss`；

```js
// 引入清除默认样式
@import 'reset.scss' ;
```

## 5、sass 全局配置

1、在 `main.ts` 入口文件引入

```js
//引入模板的全局的样式
import '@/styles/index.scss'
```



# 二、基本使用

* [SASS用法指南 - 阮一峰](https://www.ruanyifeng.com/blog/2012/06/sass.html)

## 1、变量

1、SASS允许使用变量，所有变量以$开头。

```scss
$blue : #1875e7;　

div {
	color : $blue;
}
```

如果变量需要镶嵌在字符串之中，就必须需要写在#{}之中。

```scss
$side : left;

.rounded {
	border-#{$side}-radius: 5px;
}
```

2、vite.config.ts文件配置

但是你会发现在 `src/styles/index.scss` 全局样式文件中没有办法使用$变量.因此需要给项目中引入全局变量：

```js
$
```

在 `style/variable.scss` 创建一个 `variable.scss` 文件！

```js
//项目提供scss全局变量
//定义项目主题颜色

$color: red;
```

在vite.config.ts文件配置如下:

```js
export default defineConfig({
  // scss 全局变量的配置
  css: {
    preprocessorOptions: {
      scss: {
        javascriptEnabled: true,
        additionalData: '@import "./src/styles/variable.scss";',
      },
    },
  },
})
```

配置完毕scss提供这些全局变量可以在组件样式中使用了！！！

```scss
<style scoped lang="scss">
div {
  h1 {
    color: $color;
  }
}
</style>
```

## 1、拓 - [自定义属性](https://developer.mozilla.org/zh-CN/docs/Web/CSS/--*)

```scss
:root {
  --main-bg-color: pink;
}


border-color: var(--main-bg-color);
```

## 2、计算功能

SASS允许在代码中使用算式：

```scss
body {
    margin: (14px / 2);
    top: 50px + 100px;
    right: $var * 10%;
}
```

## 3、嵌套

```scss
div {
    hi {
    	color:red;
    }
}
```

```scss
a {
	&:hover { 
        color: #ffb3ff; 
    }
}
```

# 三、代码的重用

## 1、继承 - `@extend`

SASS允许一个选择器，继承另一个选择器。比如，现有class1：

```scss
.class1 {
	border: 1px solid #ddd;
}

.class2 {
	@extend .class1;
	font-size:120%;
}
```

## 2、Mixin

Mixin有点像C语言的宏（macro），是可以重用的代码块。

使用@mixin命令，定义一个代码块。

```scss
@mixin left {
	float: left;
	margin-left: 10px;
}
```

使用@include命令，调用这个mixin。

```scss
div {
　　@include left;
}
```

mixin的强大之处，在于可以指定参数和缺省值。

```scss
@mixin left($value: 10px) {
	float: left;
	margin-right: $value;
}
```

使用的时候，根据需要加入参数：

```scss
div {
	@include left(20px);
}
```

下面是一个mixin的实例，用来生成浏览器前缀。

```scss
@mixin rounded($vert, $horz, $radius: 10px) {
	border-#{$vert}-#{$horz}-radius: $radius;
	-moz-border-radius-#{$vert}#{$horz}: $radius;
	-webkit-border-#{$vert}-#{$horz}-radius: $radius;
}
```

使用的时候，可以像下面这样调用：

```scss
#navbar li { 
    @include rounded(top, left); 
}

#footer { 
    @include rounded(top, left, 5px); 
}
```

## 3、颜色函数

SASS提供了一些内置的颜色函数，以便生成系列颜色。

```scss
lighten(#cc3, 10%) // #d6d65c
darken(#cc3, 10%) // #a3a329
grayscale(#cc3) // #808080
complement(#cc3) // #33c
```

## 4、插入文件

@import命令，用来插入外部文件。

```scss
@import "path/filename.scss";
```

如果插入的是.css文件，则等同于css的import命令。

```scss
@import "foo.css";
```



## 【拓】 `@import` -> `@use`

```scss
@use './reset.scss' as *;

@use './variable.scss' as ABC;
@use './variable';
```







## 警告：The legacy JS API is deprecated

```js
Deprecation Warning: The legacy JS API is deprecated and will be removed in Dart Sass 2.0.0.

More info: https://sass-lang.com/d/legacy-js-api
```

解决

```js
// https://vitejs.dev/config/
export default defineConfig({
  // scss 全局变量的配置
  css: {
    preprocessorOptions: {
      scss: {
        javascriptEnabled: true,
        silenceDeprecations: ["legacy-js-api"], // 忽略警告
        additionalData: '@use "./src/styles/constant.scss" as *;',
      },
    },
  },
})

```

























