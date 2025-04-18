- JavaScript 定时器教程: https://www.w3schools.com/js/js_timing.asp
- MDN Web Docs - setTimeout(): [https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/setTimeout](https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/setTimeout)
- MDN Web Docs - setInterval(): [https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/setInterval](https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/setInterval)





JavaScript 提供了两个内置的定时器函数：

- `setTimeout()`：在指定的延迟后执行一次代码。
- `setInterval()`：定期执行代码，直到它被清除。



# setTimeout() - 延迟执行

`setTimeout()` 函数用于指定某个函数或某段代码，在多少毫秒之后执行。它返回一个整数，表示定时器的编号，以后可以用来取消这个定时器。

```js
// 在 3 秒后弹出警报框
var timeoutBox = setTimeout(function() {
  alert("3秒后弹出警报框");
  clearTimeout(timeoutBox);// 清除当前timeout定时器，timeout定时器只运行一次代码，直接清掉它
}, 3000);

// 在 5 秒后将文本框的内容变为 "Hello World!"
setTimeout(function() {
  document.getElementById("text").value = "Hello World!";
}, 5000);
```

* clearTimeout() - 清除timeout定时器

```js
// 清除timeout定时器
clearTimeout(timeoutBox);
```



# setInterval() - 重复执行

`setInterval()` 函数用于按照指定的周期（以毫秒计）来调用函数或计算表达式。方法会不停地调用函数，直到 `clearInterval()` 被调用或窗口被关闭。

```js
// 每隔 1 秒钟输出当前时间
var intervalBox = setInterval(function() {
  var date = new Date();
  console.log(date.toLocaleString());
}, 1000);

// 5 秒后停止计时
setTimeout(function() {
  clearInterval(timer);
}, 5000);
```

* clearInterval() - 清除interval定时器

```js
// 清除interval定时器
clearInterval(intervalBox);
```



# 应用示例

## 1. 创建一个简单的倒计时

```js
var timeLeft = 10;

var interval = setInterval(function() {
  if (timeLeft <= 0) {
    clearInterval(interval);
    console.log("时间到！");
  } else {
    console.log("剩余时间：" + timeLeft + "秒");
    timeLeft--;
  }
}, 1000);
```

## 2. 创建一个轮播图

```js
var images = ["image1.jpg", "image2.jpg", "image3.jpg"];

var currentImage = 0;

var interval = setInterval(function() {
  currentImage++;
  if (currentImage >= images.length) {
    currentImage = 0;
  }

  var imageElement = document.getElementById("image");
  imageElement.src = images[currentImage];
}, 2000);
```

## 3. 模拟一个打字机效果

```js
var text = "This is a sample text.";

var currentChar = 0;

var interval = setInterval(function() {
  if (currentChar >= text.length) {
    clearInterval(interval);
  } else {
    var outputElement = document.getElementById("output");
    outputElement.innerHTML += text.charAt(currentChar);
    currentChar++;
  }
}, 100);
```



























