# Web Worker

* [阮一峰 - Web Worker 使用教程](https://www.ruanyifeng.com/blog/2018/07/web-worker.html)
* [MDN - 使用 Web Workers](https://developer.mozilla.org/zh-CN/docs/Web/API/Web_Workers_API/Using_web_workers)
* [demo](https://stackblitz.com/edit/web-worker-demo-16?file=index.js)



**Web Worker** 可以算作 JavaScript 的异步编程方法之一，尽管它与其他异步机制（如 `Promise`、`async/await`、`setTimeout`）有些不同。**Web Worker** 主要用于在**单线程的 JavaScript 环境**中实现并行处理，从而避免阻塞主线程，提高页面的性能和响应速度。

### **Web Worker 简介**
JavaScript 是单线程的语言，即同一时间只能执行一个任务。然而，当处理一些计算密集型任务时（如图像处理、复杂计算），主线程可能会被阻塞，导致页面无法响应用户操作。**Web Worker** 通过创建独立的线程来执行任务，从而解决这个问题。

- **Web Worker** 运行在与主线程分离的后台线程中，不会影响页面的渲染或用户的交互。
- **主线程和 Web Worker 之间通过消息传递通信**，即通过 `postMessage` 发送消息，通过 `onmessage` 监听消息。

### **Web Worker 的异步特性**
- **独立线程**：Worker 运行在一个独立的线程中，异步地执行任务。主线程可以继续执行其他任务，而不需要等待 Worker 完成。
- **非阻塞**：由于 Worker 在线程中独立运行，它不会阻塞主线程的操作（如 UI 渲染和用户交互）。
- **消息驱动**：Web Worker 和主线程之间的通信是异步的，通过消息队列处理。

### **示例：使用 Web Worker 执行异步任务**

**主线程代码：**
```javascript
// 创建一个新的 Web Worker
const worker = new Worker('worker.js');

// 监听 Web Worker 发回的消息
worker.onmessage = function(event) {
  console.log('Received from worker:', event.data);
};

// 向 Worker 发送消息
worker.postMessage('Start the computation');
```

**worker.js 文件（Web Worker 的代码）：**
```javascript
// 监听主线程的消息
onmessage = function(event) {
  console.log('Message from main thread:', event.data);

  // 执行一些耗时任务
  let result = 0;
  for (let i = 0; i < 1e9; i++) {
    result += i;
  }

  // 将结果发回主线程
  postMessage(result);
};
```

在这个示例中：
- 主线程通过 `postMessage()` 向 Worker 发送消息，Worker 异步接收并处理该消息。
- Worker 在后台执行一个计算密集型任务（如大量的循环计算），然后通过 `postMessage()` 返回结果给主线程。
- 这个计算过程不会阻塞主线程的执行，因此主线程依旧可以响应用户操作。

### **Web Worker 的优点**
1. **避免阻塞主线程**：Web Worker 可以将计算密集型任务移到后台线程中执行，防止阻塞 UI 渲染和用户交互。
2. **并行处理**：Web Worker 实现了 JavaScript 中的伪多线程，可以同时处理多个任务，提升性能。
3. **异步特性**：主线程和 Worker 之间的通信是异步的，采用消息传递机制，任务执行不需要等待。

### **Web Worker 的缺点**
1. **通信开销**：主线程与 Worker 之间的通信是通过序列化（通常是 JSON 格式）来实现的，处理复杂数据时可能会有一定的性能开销。
2. **无法访问 DOM**：Worker 线程无法直接操作 DOM，因此如果需要更新 UI，需要通过主线程来完成。
3. **浏览器兼容性**：虽然大多数现代浏览器都支持 Web Worker，但在一些老旧浏览器上可能会有兼容性问题。

### **Web Worker 与其他异步编程方式的对比**

| 异步编程方法    | 执行方式           | 适用场景                                           | 是否阻塞主线程 |
| --------------- | ------------------ | -------------------------------------------------- | -------------- |
| **Callback**    | 异步回调           | 简单的异步操作，如 I/O、网络请求                   | 否             |
| **Promise**     | 异步回调，链式调用 | 复杂的异步操作，如多个请求的串联、错误处理         | 否             |
| **Async/Await** | `Promise` 语法糖   | 更简洁、同步风格的异步代码                         | 否             |
| **Web Worker**  | 多线程，消息驱动   | 计算密集型任务、长时间处理的任务，如加密、图像处理 | 否             |
| **setTimeout**  | 延时执行，消息队列 | 延迟任务、非紧急任务                               | 否             |

### **总结**
- **Web Worker 是 JavaScript 异步编程的一种方式**，但与 `Promise`、`async/await` 这种基于事件循环的异步方式不同，Web Worker 提供了真正的多线程环境来处理计算密集型任务。
- 在需要执行大量耗时操作的场景中，Web Worker 可以将任务移至后台线程中，避免阻塞主线程的执行，从而提高用户体验和性能。





# 另一个版本

`Web Worker` 是 HTML5 标准的一部分，这一规范定义了一套 API，允许我们在 js 主线程之外开辟新的 Worker 线程，并将一段 js 脚本运行其中，它赋予了开发者利用 js 操作多线程的能力。



HTML5中支持了 `Web Worker`，使得能够同时执行两段JS了，那是不是就是说JS实现了“多线程”了呢？我们来看看Web Worker的官方解释：

> 通过使用Web Workers，Web应用程序可以在独立于主线程的后台线程中，运行一个脚本操作。这样做的好处是可以在独立线程中执行费时的处理任务，从而允许主线程（通常是UI线程）不会因此被阻塞/放慢。

独立线程，看似像是实现了“多线程”，然而他是独立于主线程，也就是主线程依然是那个主线程没有变！虽然你大妈已经不是你大妈了，但是你大爷还是你大爷！JS单线程的本质依然没有变！

WebWorker是向浏览器申请一个子线程，该子线程服务于主线程，完全受主线程控制。

![](images/001.png)



```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Web Worker</title>
</head>
<body>
    <button onclick="startWorker()">开始</button>
    <button onclick="stopWorker()">停止</button>
    <button onclick="updateNum()">在运行时点击</button>
    <div id="output"></div>
    <div id="num"></div>

    <script id="worker" type="app/worker">
        function updateSync() {
            for (let i = 0; i < 10000000000; i++) {
                if (i % 100000 === 0) {
                    postMessage(i);
                }
            }
        }
        updateSync();
    </script>

    <script>
        let worker;
        function startWorker() {
            let blob = new Blob([document.querySelector('#worker').textContent]);
            let url = window.URL.createObjectURL(blob);
            console.log(url);
            worker = new Worker(url);

            worker.onmessage = function(e) {
                document.getElementById('output').innerHTML = e.data;
            }
        }

        function stopWorker() {
            if (worker) {
                worker.terminate();
            }
        }
        
        let num = 0;
        function updateNum() {
            num++;
            document.getElementById('num').innerHTML = num;
        }
    </script>
</body>
</html>
```















