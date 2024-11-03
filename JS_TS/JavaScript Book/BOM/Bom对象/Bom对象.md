* [Window 对象属性 - 菜鸟](https://www.runoob.com/jsref/obj-window.html)

* [Window 对象方法 - 菜鸟](https://www.runoob.com/jsref/obj-window.html)



# 一、window介绍

所有浏览器都支持 window 对象。它表示浏览器窗口。

所有 JavaScript 全局对象、函数以及变量均自动成为 window 对象的成员。

全局变量是 window 对象的属性。

全局函数是 window 对象的方法。

甚至 HTML DOM 的 document 也是 window 对象的属性之一。

```js
window.document.getElementById("header");
// 等价
document.getElementById("header");
```

  

window 对象是浏览器的顶级对象，它具有双重角色。

* 它是 JS 访问浏览器窗口的一个接口。
* 它是一个全局对象。定义在全局作用域中的变量、函数都会变成 window 对象的属性和方法。

在调用的时候可以省略 window，前面学习的对话框都属于 window 对象方法，如 alert()、prompt() 等。注意：window下的一个特殊属性 window.name。



# 二、窗口加载事件 

[窗口加载事件 - 黑马](https://book.itheima.net/course/1258676978588860418/1277481554465005570/1277496819265314817)

## 1. window.onload

​		`window.onload` 是窗口（页面）加载事件，当文档内容（包括图像、脚本文件、CSS文件等）完全加载完成会触发该事件，调用该事件对应的事件处理函数。

​		JavaScript代码是从上往下依次执行的，如果要在页面加载完成后执行某些代码，又想要把这些代码写到页面任意的地方，可以把代码写到window.onload事件处理函数中。因为onload事件是等页面内容全部加载完毕再去执行处理函数的。

​		需要注意的是，`window.onload` 注册事件的方式只能写一次，如果有多个，会以最后一个window.onload为准。如果使用addEventListener则没有限制。

```js
// 方式1
window.onload = function () {};

// 方式2
window.addEventListener('load', function () {});
```



## 2. window.DOMContentLoaded

​		`document.DOMContentLoaded` 加载事件会在DOM加载完成时触发，这里所说的加载不包括CSS样式表、图片和flash动画等额外内容的加载，因此，该事件的优点在于执行的时机更快，适用于页面中图片很多的情况。

​		当页面图片很多时，从用户访问到onload事件触发可能需要较长的时间，交互效果就不能实现，这样会影响到用户的体验效果，在这时使用document.DOMContentLoaded事件更为合适，只要DOM元素加载完即可执行。需要注意的是，该事件有兼容性问题，IE 9以上才支持。



# 三、window.onresize - 调整窗口大小事件 

[调整窗口大小事件 - 黑马](https://book.itheima.net/course/1258676978588860418/1277481554465005570/1277496819265314818)

当调整window窗口大小的时候，就会触发window.onresize事件，调用事件处理函数。该事件有两种注册方式，如下所示。

```js
// 方式1
window.onresize = function () {};

// 方式2
window.addEventListener('resize', function () {});
```



# 四、Screen对象

window.screen 对象包含有关用户屏幕的信息。

**window.screen**对象在编写时可以不使用 window 这个前缀。

- `screen.availWidth` - 可用的屏幕宽度，以像素计，减去界面特性，比如窗口任务栏。
- `screen.availHeight` - 可用的屏幕高度，以像素计，减去界面特性，比如窗口任务栏。

```html
<script>
document.write("可用宽度: " + screen.availWidth);
document.write("可用高度: " + screen.availHeight);
</script>
```



## 1. Screen 对象属性

| 属性                                                         | 说明                                     |
| :----------------------------------------------------------- | :--------------------------------------- |
| [availHeight](https://www.runoob.com/jsref/prop-screen-availheight.html) | 返回屏幕的高度（不包括Windows任务栏）    |
| [availWidth](https://www.runoob.com/jsref/prop-screen-availwidth.html) | 返回屏幕的宽度（不包括Windows任务栏）    |
| [colorDepth](https://www.runoob.com/jsref/prop-screen-colordepth.html) | 返回目标设备或缓冲器上的调色板的比特深度 |
| [height](https://www.runoob.com/jsref/prop-screen-height.html) | 返回屏幕的总高度                         |
| [pixelDepth](https://www.runoob.com/jsref/prop-screen-pixeldepth.html) | 返回屏幕的颜色分辨率（每象素的位数）     |
| [width](https://www.runoob.com/jsref/prop-screen-width.html) | 返回屏幕的总宽度                         |



# 五、location对象

Location 对象包含有关当前 URL 的信息。

Location 对象是 window 对象的一部分，可通过 **window.location.xxx** 格式的相关属性对其进行访问。

![Note](https://www.runoob.com/images/lamp.gif)**注意：** 没有应用于Location对象的公开标准，不过所有浏览器都支持该对象。



## 1. Location 对象属性

| 属性                                                         | 描述                          |
| :----------------------------------------------------------- | :---------------------------- |
| [hash](https://www.runoob.com/jsref/prop-loc-hash.html)      | 返回一个URL的锚部分           |
| [host](https://www.runoob.com/jsref/prop-loc-host.html)      | 返回一个URL的主机名和端口     |
| [hostname](https://www.runoob.com/jsref/prop-loc-hostname.html) | 返回URL的主机名               |
| [href](https://www.runoob.com/jsref/prop-loc-href.html)      | 返回完整的URL                 |
| [pathname](https://www.runoob.com/jsref/prop-loc-pathname.html) | 返回的URL路径名。             |
| [port](https://www.runoob.com/jsref/prop-loc-port.html)      | 返回一个URL服务器使用的端口号 |
| [protocol](https://www.runoob.com/jsref/prop-loc-protocol.html) | 返回一个URL协议               |
| [search](https://www.runoob.com/jsref/prop-loc-search.html)  | 返回一个URL的查询部分         |

```js
// 创建 a 标签并设置 href 属性
var url = document.createElement('a');
url.href = 'https://www.runoob.com/?s=python#test';
console.log(url.href);      // https://www.runoob.com/?s=python
console.log(url.protocol);  // https:
console.log(url.host);      // www.runoob.com
console.log(url.hostname);  // www.runoob.com
console.log(url.port);      // (输出为空 - https 默认端口为 443)
console.log(url.pathname);  // /
console.log(url.search);    // en-US/search
console.log(url.hash);      // #test
console.log(url.origin);    // https://www.runoob.com
```



## 2. Location 对象方法

| 方法                                                         | 说明                   |
| :----------------------------------------------------------- | :--------------------- |
| [assign()](https://www.runoob.com/jsref/met-loc-assign.html) | 载入一个新的文档       |
| [reload()](https://www.runoob.com/jsref/met-loc-reload.html) | 重新载入当前文档       |
| [replace()](https://www.runoob.com/jsref/met-loc-replace.html) | 用新的文档替换当前文档 |

### a. assig() vs replace()

* `window.location.assign(url) `： 加载 URL 指定的新的 HTML 文档。就相当于一个链接，跳转到指定的url，当前页面会转为新页面内容，可以点击后退返回上一个页面。

* `window.location.replace(url) `： 通过加载 URL 指定的文档来替换当前文档，这个方法是替换当前窗口页面，前后两个页面共用一个窗口，所以是没有后退返回上一页的



# 六、Navigator 对象

Navigator 对象包含有关浏览器的信息。

![Note](https://www.runoob.com/images/lamp.gif)**注意：** 没有应用于 navigator 对象的公开标准，不过所有浏览器都支持该对象。



最常用的属性是 `window.navigator.userAgent` 返回不同客户端发送到服务器的User-Agent头部的值，以Chrome、Firefox、IE浏览器为例，输入结果如下。

* Chrome

    Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/77.0.3865.75 Safari/537.36

* Firefox

    Mozilla/5.0 (Windows NT 6.1; Win64; x64; rv:69.0) Gecko/20100101 Firefox/69.0

* IE

    Mozilla/5.0 (compatible; MSIE 9.0; Windows NT 6.1; WOW64; Trident/7.0; SLCC2; .NET CLR 2.0.50727; .NET CLR 3.5.30729; .NET CLR 3.0.30729; Media Center PC 6.0; .NET4.0C; .NET4.0E; InfoPath.3)



## 1. Navigator 对象属性

| 属性                                                         | 说明                                              |
| :----------------------------------------------------------- | :------------------------------------------------ |
| [appCodeName](https://www.runoob.com/jsref/prop-nav-appcodename.html) | 返回浏览器的代码名                                |
| [appName](https://www.runoob.com/jsref/prop-nav-appname.html) | 返回浏览器的名称                                  |
| [appVersion](https://www.runoob.com/jsref/prop-nav-appversion.html) | 返回浏览器的平台和版本信息                        |
| [cookieEnabled](https://www.runoob.com/jsref/prop-nav-cookieenabled.html) | 返回指明浏览器中是否启用 cookie 的布尔值          |
| [platform](https://www.runoob.com/jsref/prop-nav-platform.html) | 返回运行浏览器的操作系统平台                      |
| [userAgent](https://www.runoob.com/jsref/prop-nav-useragent.html) | 返回由客户机发送服务器的user-agent 头部的值       |
| [geolocation](https://www.runoob.com/jsref/prop-nav-geolocation.html) | 返回浏览器的地理位置信息                          |
| [language](https://www.runoob.com/jsref/prop-nav-language.html) | 返回浏览器使用的语言                              |
| [onLine](https://www.runoob.com/jsref/prop-nav-online.html)  | 返回浏览器是否在线，在线返回 ture，否则返回 false |
| [product](https://www.runoob.com/jsref/prop-nav-product.html) | 返回浏览器使用的引擎（产品）                      |

## 2. Navigator 对象方法

| 方法                                                         | 描述                                      |
| :----------------------------------------------------------- | :---------------------------------------- |
| [javaEnabled()](https://www.runoob.com/jsref/met-nav-javaenabled.html) | 指定是否在浏览器中启用Java                |
| [taintEnabled()](https://www.runoob.com/jsref/met-nav-taintenabled.html) | 规定浏览器是否启用数据污点(data tainting) |



# 七、History对象

History 对象包含用户（在浏览器窗口中）访问过的 URL。

History 对象是 window 对象的一部分，可通过 window.history 属性对其进行访问。

![Note](https://www.runoob.com/images/lamp.gif)**注意：** 没有应用于History对象的公开标准，不过所有浏览器都支持该对象。

## 1. History 对象属性

| 属性                                                        | 说明                   |
| :---------------------------------------------------------- | :--------------------- |
| [length](https://www.runoob.com/jsref/prop-his-length.html) | 返回历史列表中的网址数 |

## 2. History 对象方法

| 方法                                                         | 说明                              |
| :----------------------------------------------------------- | :-------------------------------- |
| [back()](https://www.runoob.com/jsref/met-his-back.html)     | 加载 history 列表中的前一个 URL   |
| [forward()](https://www.runoob.com/jsref/met-his-forward.html) | 加载 history 列表中的下一个 URL   |
| [go()](https://www.runoob.com/jsref/met-his-go.html)         | 加载 history 列表中的某个具体页面 |



# 八、定时器

| **方法**        | **说明**                                           |
| --------------- | -------------------------------------------------- |
| setTimeout()    | 在指定的毫秒数后调用函数或执行一段代码             |
| setInterval()   | 按照指定的周期（以毫秒计）来调用函数或执行一段代码 |
| clearTimeout()  | 取消由setTimeout()方法设置的定时器                 |
| clearInterval() | 取消由setInterval()设置的定时器                    |

参数形式

```js
// 参数形式1：用字符串表示一段代码
setTimeout('alert("JavaScript");', 3000); 

// 参数形式2：传入一个匿名函数
setTimeout(function () {
alert('JavaScript');
}, 3000);

// 参数形式3：传入函数名
setTimeout(fn, 3000);
function fn() {
 console.log('JavaScript');
}
```

取消

```js
// 在设置定时器时，保存定时器的唯一标识
var timer = setTimeout(fn, 3000);
// 如果要取消定时器，将唯一标识传递给clearTimeout()方法
clearTimeout(timer);
```







# 九、window属性

## 1. Window innerWidth 和 innerHeight 属性

[Window innerWidth 和 innerHeight 属性 - 菜鸟](https://www.runoob.com/jsref/prop-win-innerheight-innerwidth.html)

* innerHeight 返回窗口的文档显示区的高度，如果有垂直滚动条，也包括滚动条高度。
* innerWidth 返回窗口的文档显示区的宽度，如果有水平滚动条，也包括滚动条高度。
* innerWidth 和 innerHeight 是只读属性。

**注意：**使用 [outerWidth 和 outerHeight](https://www.runoob.com/jsref/prop-win-outerheight.html) 属性获取浏览器窗口的宽度与高度。

```html
var txt = "";
txt += "<p>innerWidth: " + window.innerWidth + "</p>";
txt += "<p>innerHeight: " + window.innerHeight + "</p>";
txt += "<p>outerWidth: " + window.outerWidth + "</p>";
txt += "<p>outerHeight: " + window.outerHeight + "</p>";
```

实用的 JavaScript 方案（涵盖所有浏览器，包含 IE8 及以下版本的浏览器）：

```js
var w = window.innerWidth
				|| document.documentElement.clientWidth
				|| document.body.clientWidth;
 
var h = window.innerHeight
				|| document.documentElement.clientHeight
				|| document.body.clientHeight;
```



# 十、[获取屏幕宽高度与可视区域宽高度（availWidth、clientWidth、width、innerWidth）](https://www.cnblogs.com/jf-67/p/7615946.html)

* screen.availHeight、screen.availWidth；
* screen.height、screen.width；
* document.documentElement.clientWidth、document.documentElement.clientHeight；
* window.innerWidth、window.innerHeight。









