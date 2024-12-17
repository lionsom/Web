// 引入express模块
const express = require('express')
// 创建express对象
const app = express()

// 监听连接请求并提供服务
app.listen(7788, () => {
  console.log('服务器正在监听端口7788')
})

// 定义一个路由，当访问根目录时触发
app.get('/', (req, res) => {
  // 发送带有情感的"Hello World!"消息作为响应
  res.send('Hello World!!!!!!!!!!')
})
