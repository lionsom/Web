# nodemon

* [nodemon - npm](https://www.npmjs.com/package/nodemon)

nodemon能够检测工作区代码的变化，并自动重启。

执行 `npm install nodemon --save-dev` 安装nodemon，然后修改package.json文件中的start命令：

```json
{
  "name": "express-demo",
  "version": "1.0.0",
  "description": "",
  "main": "server.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "nodemon server.js"   // 使用nodemon代替node执行
  },
  "author": "",
  "license": "ISC",
  "dependencies": {
    "express": "^4.18.2"
  },
  "devDependencies": {
    "nodemon": "^2.0.20"
  }
}
```

再执行`npm start`启动服务，之后我们再修改代码就不需要手动的重启服务了。