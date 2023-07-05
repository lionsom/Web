//1. 导入 http 模块
const http = require("http");

//2. 创建服务对象 create 创建 server 服务
// request 意为请求. 是对请求报文的封装对象, 通过 request 对象可以获得请求报文的数据
// response 意为响应. 是对响应报文的封装对象, 通过 response 对象可以设置响应报文
const server = http.createServer((request, response) => {
  response.end("Hello HTTP server");
});

//3. 监听端口, 启动服务
server.listen(9000, () => {
  console.log("服务已经启动, 端口 9000 监听中...");
});
