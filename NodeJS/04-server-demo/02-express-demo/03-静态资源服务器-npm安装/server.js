// 加载 Express
const express = require('express')

// 1. 调用 express() 得到一个 app
//    类似于 http.createServer()
const app = express();

// 2. 设置请求对应的处理函数
app.use(express.static('public'))

// 3. 监听端口号，启动 Web 服务
app.listen(3003, () => console.log('app listening on port 3003!'))
