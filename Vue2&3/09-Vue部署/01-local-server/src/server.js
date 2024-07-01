// 0. 加载 Express
const express = require('express')

// 端口号
const PORT = 3002

// 1. 调用 express() 得到一个 app
//    类似于 http.createServer()
const app = express()

// 2. 设置请求对应的处理函数
//    当客户端以 GET 方法请求 / 的时候就会调用第二个参数：请求处理函数
app.get('/hello', (req, res) => {
  res.send('hello world')
})

// 3. 配置静态资源 /public/index.html
app.use('/', express.static('public'))

console.log('当前文件路径：', __dirname);

// 4. 监听端口号，启动 Web 服务
app.listen(PORT, () => console.log(`app listening on port : ${PORT}`))

