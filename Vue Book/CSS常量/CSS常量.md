# 一、CSS中的常量

## 方式一：

1. 首页在css中写入base.css：

```css
/* 
root选择器用匹配文档的根元素。
在HTML中根元素始终是HTML元素。
在根元素下自定义一些变量的样式 */

:root{
    border:1px solid blue;/* 设置样式 */
	--bg-color:red;/* 设置自定义的样式 */
    --font-size:30px;
  	--height-min:100px;
}
```

2. 在最外层的组件入口引入即可:

```css
@import './assets/css/base.css';

.demoColor{
    background:var(--bg-color);/*此时的背景色就是base.css中定义的 */
    width:100px;
    height: 100px;
}
```



## 方式二：

* 普通的CSS不行
* Less、Scss可以

下面是一个Less CSS的例子：

```less
@color: #4D926F;

// 导入头文件
@import '@/assets/css/constant/color.less';

#header {
  color: @color;
}

h2 {
  color: @color;
}
```



## 方式三：

```html
.darkBackground {
   background: #123456;
}

.smallText {
   font-size: 8pt;
}

<div id="myDiv1" class="darkBackground smallText"></div>
<div id="myDiv2" class="darkBackground bigText"></div>
```

