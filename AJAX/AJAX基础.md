[AJAX Tutorial: What AJAX Is and How to Use it](https://www.freecodecamp.org/news/ajax-tutorial/)



<font color='red' size=6>ajax-axios-demo：从各个项目中抽离总结的Axios例子！！！</font>



# 一、AJAX概念

* 定义：

    **AJAX 是异步的 JavaScript 和 XML （Asynchronous JavaScript And XML）。**简单点说，就是使用 ***XMLHttpRequest*** 对象与服务器通信。它可以使用 JSON、XML、HTML 和 text 文本等格式发送和接收数据。AJAX最吸引人的就是它的 **“异步“**特性，也就是说它可以在不重新刷新页面的情况下与服务器通信，交换数据，或更新页面。

* 概念：

    **AJAX 是浏览器与服务器进行数据通信的技术。**



它不是一种编程语言。它是一种基于 HTML、CSS、JavaScript 和 XML，让开发更好、更快和更有互动的 Web 应用的技术。

3. JavaScript：JavaScript 用于使网络应用程序互动、提供趣味和提高用户友好性。
4. XML：可扩展标记语言（XML）是一种用于存储和传输网络服务器数据的格式。



# 二、怎么用AJAX？

## 2.1. 先使用 axios [æk‘sioʊs] 库，与服务器进行数据通信

> axios 基于 XMLHttpRequest 封装。



## 2.2. 再学习 XMLHttpRequest 对象的使用，了解 AJAX 底层原理



# 三、AJAX 是如何工作的

AJAX 利用浏览器内置的 **XMLHttpRequest 对象** 从网络服务器请求数据，并利用 **HTML DOM** 显示或使用数据。

**XMLHttpRequest 对象**：它是一个对象形式的 API，其方法用于网络浏览器和网络服务器之间传输数据。

**HTML DOM**：当一个网页被加载时，浏览器会创建一个页面的文档对象模型。

**创建一个 XMLHttpRequest 对象：**

```javascript
var xhttp = new XMLHttpRequest();
```

**XMLHttpRequest 对象的属性：**

`readystate` 是 XMLHttpRequest 对象的一个属性，它是 XMLHttpRequest 的一种状态值。

- 0：请求未被初始化
- 1：服务器连接建立
- 2：收到请求
- 3：处理请求
- 4：请求完成，响应准备就绪

`onreadystatechange`是 XMLHttpRequest 对象的一个属性，它定义了一个当 readyState 属性改变时要调用的函数。

`status` 是 XMLHttpRequest 对象的一个属性，用于返回一个请求的状态值。

- 200："OK"
- 403："Forbidden"
- 404："Not Found"

**XMLHttpRequest对象方法：** 为了向 Web 服务器发送请求，我们使用 XMLHttpRequest 对象的 open() 和 send() 方法。

```javascript
xhttp.open('GET', 'content.txt', true);
xhttp.send();
```

**使用 JavaScript 创建一个函数 changeContent()：**

```javascript
function changeContent() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById('foo').innerHTML = this.responseText;
        }
    };
    xhttp.open('GET', 'content.txt', true);
    xhttp.send();
}
```

**改变网页内容的 AJAX 实例：**

```html
<!DOCTYPE html>
<html>
    <body>
        <div id="foo">
            <h2>The XMLHttpRequest Object</h2>
            <button type="button" onclick="changeContent()">
                Change Content
            </button>
        </div>
        <script>
            function changeContent() {
                var xhttp = new XMLHttpRequest();
                xhttp.onreadystatechange = function () {
                    if (this.readyState == 4 && this.status == 200) {
                        document.getElementById(
                            'foo'
                        ).innerHTML = this.responseText;
                    }
                };
                xhttp.open('GET', 'content.txt', true);
                xhttp.send();
            }
        </script>
    </body>
</html>
```

文件 `content.txt` 应该存在于Web应用程序的根目录中。





# axios 使用





# 认识 URL

