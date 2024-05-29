// 调用 HTTP 模块
const http = require("http");

// 创建 HTTP 服务器并监听 8000 端口的所有请求
http
  .createServer((request, response) => {
    // 用 HTTP 状态码和内容类型来设定 HTTP 响应头
    response.writeHead(200, { "Content-Type": "text/plain" });

    // 发送响应体 "Hello World"
    response.end("Hello World\n");
  })
  .listen(8000);

// 在控制台打印访问服务器的 URL
console.log("服务器运行于 http://127.0.0.1:8000/");
