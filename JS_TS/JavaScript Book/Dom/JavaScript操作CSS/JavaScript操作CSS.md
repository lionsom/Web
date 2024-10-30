https://www.cnblogs.com/LiuWeiLong/p/6058059.html



# 1、操作元素样式

* [操作元素样式 - 黑马](https://book.itheima.net/course/1258676978588860418/1277481554465005570/1277491444881301506)

操作元素样式有两种方式，一种是操作style属性，一种是操作className属性，下面我们分别进行讲解。

## 1. 操作style属性

除了前面讲解的元素内容和属性外，对于元素对象的样式，可以直接通过 **“元素对象.style.样式属性名”** 的方式操作。样式属性名对应CSS样式名，但需要去掉CSS样式名里的半字线“-”，并将半字线后面的英文的首字母大写。例如，设置字体大小的样式名font-size，对应的样式属性名为fontSize。

为了便于读者的学习使用，下面我们通过表1列出常用style属性中CSS样式名称的书写及说明。

```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>

<body>
  <div id="box"></div>

  <script>
    var ele = document.querySelector('#box'); // 获取元素对象
    ele.style.backgroundColor = 'red';
    ele.style.width = '100px';
    ele.style.height = '100px';
    ele.style.transform = 'rotate(7deg)';
  </script>
</body
</html>
```

![](images/003.png)

| **名称**                                                     | **说明**                                 |
| ------------------------------------------------------------ | ---------------------------------------- |
| [background](http://www.runoob.com/jsref/prop-style-background.html) | 设置或返回元素的背景属性                 |
| [backgroundColor](http://www.runoob.com/jsref/prop-style-backgroundcolor.html) | 设置或返回元素的背景色                   |
| [display](http://www.runoob.com/jsref/prop-style-display.html) | 设置或返回元素的显示类型                 |
| fontSize                                                     | 设置或返回元素的字体大小                 |
| [height](http://www.runoob.com/jsref/prop-style-height.html) | 设置或返回元素的高度                     |
| [left](http://www.runoob.com/jsref/prop-style-left.html)     | 设置或返回定位元素的左部位置             |
| [listStyleType](http://www.runoob.com/jsref/prop-style-liststyletype.html) | 设置或返回列表项标记的类型               |
| [overflow](http://www.runoob.com/jsref/prop-style-overflow.html) | 设置或返回如何处理呈现在元素框外面的内容 |
| [textAlign](http://www.runoob.com/jsref/prop-style-textalign.html) | 设置或返回文本的水平对齐方式             |
| [textDecoration](http://www.runoob.com/jsref/prop-style-textdecoration.html) | 设置或返回文本的修饰                     |
| [textIndent](http://www.runoob.com/jsref/prop-style-textindent.html) | 设置或返回文本第一行的缩进               |
| [transform](http://www.runoob.com/jsref/prop-style-transform.html) | 向元素应用2D或3D转换                     |



## 2. 操作className属性

在开发中，如果样式修改较多，可以采取操作类名的方式更改元素样式，语法为“元素对象.className”。访问className属性的值表示获取元素的类名，为className属性赋值表示更改元素类名。如果元素有多个类名，在className中以空格分隔。

接下来，通过代码演示如何使用className更改元素的样式。

```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>

  <style>
    div {
      width: 100px;
      height: 100px;
      background-color: pink;
    }

    .change {
      background-color: purple;
      color: #fff;
      font-size: 25px;
      margin-top: 100px;
    }
  </style>
</head>

<body>
  <div class="first">文本</div>

  <script>
    var test = document.querySelector('div');
    test.onclick = function () {
      this.className = 'change';
    };
  </script>
</body>

</html>
```



# 2. **获取计算样式**

- `window.getComputedStyle(element)`：获取元素的所有计算样式。

```js
const styles = window.getComputedStyle(element);
console.log(styles.backgroundColor);
```



# 3. **添加和删除 CSS 类**

- `element.classList.add(className)`：添加 CSS 类。
- `element.classList.remove(className)`：删除 CSS 类。
- `element.classList.toggle(className)`：切换 CSS 类的存在状态。
- `element.classList.contains(className)`：检查元素是否包含某个类。

```js
element.classList.add('active');
element.classList.toggle('highlight');
```













