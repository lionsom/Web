const worker = new Worker("worker.js");

worker.addEventListener("message", (event) => {
  const result = event.data;

  // 处理从 Web Worker 接收到的结果
});

worker.postMessage("数据");
