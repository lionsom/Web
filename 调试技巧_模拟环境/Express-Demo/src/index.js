// 加载 Express
const express = require('express')
// 引入
const cors = require('cors')

// 1. 调用 express() 得到一个 app
//    类似于 http.createServer()
const app = express();

// 2. 设置请求对应的处理函数
app.use(express.static('public'))
// use
app.use(cors({
	orgigin: 'http://127.0.0.1:5501', // 允许的源
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'HEAD', 'OPTIONS'], // 运行的方法
    allowedHeaders: ['x_test'], // 允许的自定义头
    exposedHeaders: [], // 要暴露的响应头
}));

// 2. 设置请求对应的处理函数
//    当客户端以 GET 方法请求 / 的时候就会调用第二个参数：请求处理函数
app.get('/', (req, res) => {
  res.send('hello world')
})

app.post('/add', (req, res) => {
  let { a, b } = req.query
  a = parseInt(a)
  b = parseInt(b)
  res.send(`${a} + ${b} = ${a + b}`)
})


// 3. 监听端口号，启动 Web 服务
app.listen(8086, () => console.log('app listening on port 8086!'))
