
var self = this;

self.addEventListener("message", (event) => {
  const data = event.data;

  // 执行一些任务
  const result = processData(data);

  // 向主线程发送消息
  self.postMessage(result);
});
