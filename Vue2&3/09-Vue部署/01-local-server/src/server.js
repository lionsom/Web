// 0. 加载 Express
const express = require('express')
const history = require('connect-history-api-fallback');

// 端口号
const PORT = 3002

// 1. 调用 express() 得到一个 app
//    类似于 http.createServer()
const app = express()

app.use(history())

// 2. 设置请求对应的处理函数
//    当客户端以 GET 方法请求 / 的时候就会调用第二个参数：请求处理函数
app.get('/hello', (req, res) => {
  res.send('hello world')
})

// 3. 配置静态资源 /public/index.html
app.use('/', express.static('public'))

console.log('当前文件路径：', __dirname);

/* 这种方式太Low，推荐使用插件connect-history-api-fallback
// 3.1. 后端路由匹配不到，则需要重定向给 /public/index.html  -》 Vue  -》 JS -> 前端路由
app.get('*', (req, res) => {
  // 获取上级路径
  res.sendFile(path.resolve(__dirname, '..') + '/public/index.html')
})
 */

// 4. 监听端口号，启动 Web 服务
app.listen(PORT, () => console.log(`app listening on port : ${PORT}`))

