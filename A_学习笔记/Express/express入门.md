## express入门

### 简介

作为前端开发，Nodejs已经成了很多公司对我们这一岗位的硬性要求，而 Express 框架则是其中知名度最高、也是最受欢迎的Nodejs开发框架，它帮助我们封装了Nodejs底层的API，屏蔽了大量的繁琐的细节，让我们只需要关注业务开发就行了，极大的降低了学习的成本。今天这个课程就是教大家去掌握如何使用express去搭建一个简易的后端服务，我们主要围绕以下几个部分：

- 路由
- 中间件
- 静态文件服务
- 模板引擎

### 环境准备

- 电脑 - mac

- Node - 16.14.2
- Npm - 8.5.0
- Express - 4.x

### 第一个demo

##### 使用Nodejs内置的http模块搭建服务

为了便于大家去理解express对nodejs做了哪些封装，在使用express之前，我们先来看下使用nodejs内置的http模块是怎么搭建node服务的。

首先创建一个`express-demo`的文件夹并进入

```bash
mkdir express-demo && cd express-demo
```

创建`server.js`，并添加如下代码：

```js
const http = require('http')

const server = http.createServer((req, res) => {
  res.statusCode = 200
  res.setHeader('Content-Type', 'text/html')
  res.end('hello world')
})

server.listen(3000, () => {
  console.log('服务已启动...');
})
```

然后在控制台中运行：

```bash
node server.js
```

##### 使用express搭建服务

接下来，我们再用express搭建服务。

在 `express-demo` 文件夹下执行 `npm init` 命令，然后一路回车，就会帮我们创建一个 `package.json` 文件，然后再执行 `npm install express `来安装express模块，然后改写 `server.js` 。

```js
const express = require('express')

const app = express()

app.get('/', (req, res) => {
  res.send('hello world')
})

app.listen(3000, () => {
  console.log('服务已启动...');
})
```

##### Request和Response对象

- Request对象是请求对象，就是回调函数中的`req`参数，主要是网络请求中带的一些属性，比如参数, cookie等等。。。

- Response对象是响应对象，就是回调函数中的`res`参数，可以执行一系列的响应操作，比如给客户端响应内容和状态等等。。。

查看Request和Response对象的[所有API](https://www.expressjs.com.cn/4x/api.html#req)

##### 路由机制

思考：我们在向后端发请求时通过什么去区分接口的？

答：请求方式+接口url

我们在express中，定义路由的方式是：

```js
app.METHOD(URL, CALLBACK)
```

这种方式就可以通过请求方式和URL来帮我们区分不同的请求，从而去执行不同的响应。

##### nodemon

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
    "start": "nodemon server.js"
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

### 核心概念

#### 路由

在浏览器中我们想要访问百度，只需要知道百度的地址就行了，路由也是类似的概念，我们想要知道客户端调用的是哪个接口，就是通过路由来判断的。

##### 路由方法

Express 支持对应于 HTTP 方法的以下路由方法：`get`、`post`、`put`、`delete`等等。使用方法为：

```js
app.METHOD(URL, CALLBACK)
```

示例：

```js
const express = require('express')

const app = express()

app.get('/', (req, res) => {
  res.send('hello world')
})

app.post('/about', (req, res) => {
  res.send({ name: '小明', age: 18 })
})
```

有一种特殊路由方法：`app.all()`，该方法用于在所有请求方法的路径中装入中间件函数。

```js
app.all('/about', function(req, res) {
  res.send({
    name: 'jackie',
    age: 18
  })
})
```

这个示例中不管是`get`, `post`方式去请求`/about`路径的接口，都会经过这个回调函数然后返回对应的数据。

##### 路由路径

路由路径可以是字符串、字符串模式或正则表达式。字符串类型的就是我们之前举的那些例子，我们再来看下字符串模式和正则表达式这两种。

以下是基于字符串模式的路由路径的一些示例。

此路由路径将匹配 `acd` 和 `abcd`。

```javascript
app.get('/ab?cd', function(req, res) {
  res.send('ab?cd');
});
```

此路由路径将匹配 `abcd`、`abbcd`、`abbbcd` 等。

```js
app.get('/ab+cd', function(req, res) {
  res.send('ab+cd');
});
```

此路由路径将匹配 `abcd`、`abxcd`、`abRABDOMcd`、`ab123cd` 等。

```javascript
app.get('/ab*cd', function(req, res) {
  res.send('ab*cd');
});
```

基于正则表达式的路由路径的示例：

此路由路径将匹配名称中具有“a”的所有路由。

```js
app.get(/a/, function(req, res) {
  res.send('/a/');
});
```

此路由路径将匹配 `butterfly` 和 `dragonfly`，但是不匹配 `butterflyman`、`dragonfly man` 等。

```js
app.get(/.*fly$/, function(req, res) {
  res.send('/.*fly$/');
});
```

##### 路由拆分

当我们的路由越来越复杂，比如有用户相关的路径，有系统相关的路径，不统一管理的话会显得特别乱，这个时候，对路由进行拆分是个不错的选择。

- 拆分前

  ```js
  const express = require('express');
  const app = express();
  
  app.get('/user/list', function(req, res, next){
  	res.send('/list');
  });
  
  app.get('/user/detail', function(req, res, next){
  	res.send('/detail');
  });
  
  app.listen(3000);
  ```

- 拆分后

  ```js
  const express = require('express');
  const app = express();
  
  const user = express.Router();
  
  user.get('/list', function(req, res, next){
  	res.send('/list');
  });
  
  user.get('/detail', function(req, res, next){
  	res.send('/detail');
  });
  
  app.use('/user', user); // 注册user子路由
  
  app.listen(3000);
  ```

#### 中间件

一般学习js的时候，我们都会听到一句话：一切皆函数。而在学习express的过程中，很深的一个感受就是：一切皆中间件。比如常见的请求参数解析、cookie解析、日志打印等，都可以通过中间件来完成。

在 Express 中，中间件就是一个函数：

```js
function someMiddleware(req, res, next) {
  // 自定义逻辑
  next();
}
```

三个参数中，`req` 和 `res` 就是前面提到的 Request 请求对象和 Response 响应对象；而 `next` 函数则用来触发下一个中间件的执行。

在 Express 使用中间件有两种方式：**全局中间件**和**路由中间件**。

##### 全局中间件

通过 `app.use` 函数就可以注册中间件，并且此中间件会在用户发起**任何请求**都可能会执行，例如：

```js
app.use(someMiddleware)
```

##### 路由中间件

通过在路由定义时注册中间件，此中间件只会在用户访问该路由时执行，例如：

```js
app.get('/middleware', someMiddleware, (req, res) => {
  res.send('Hello World');
});
```

##### 编写一个日志中间件

1. 新建一个logger.js，并写入以下函数

```js
function logger(req, res, next) {
  const time = new Date();
  console.log(`[${time.toLocaleString()}] ${req.method} ${req.url}`);
  next();
}

module.exports = logger;
```

2. 在server.js引入logger函数并且全局注册

```js
const logger = require('./logger')
...
...
app.use(logger)
...
...
```

这样我们在访问路由后，每次都会在控制台打印一行日志，如下：

```
[2023/2/27 15:54:29] GET /
[2023/2/27 15:54:47] POST /about
```

> **注意**：如果忘记在中间件中调用 `next` 函数，并且又不直接返回响应时，服务器会直接卡在这个中间件不会继续执行下去哦！

#### 模版引擎

模版引擎可以简单的理解为升级版的`html`文档，express可以用模版引擎来渲染前端页面，模版引擎有很多种，包括`jade`, `ejs`, `nunjunks`, `Handlebars`等等，express对每一种都提供了很好的支持，只需要几行代码就可以使用。我们今天来学习下`Handlebars`。

首先，第一步是安装对应的模版引擎：

```bash
npm install hbs
```

然后创建views文件夹，并且新建一个index.hbs的文件，添加如下内容：

```html
<h1>express入门课程</h1>
<p>作为前端开发，Nodejs已经成了很多公司对我们这一岗位的硬性要求，而 Express 框架则是其中知名度最高、也是最受欢迎的Nodejs开发框架。。。</p>
<a href="/about">关于我们</a>
```

然后再添加一个about.hbs的文件，并添加如下内容：

```html
<h1>黑马前端</h1>
<p>学前端，来黑马</p>
```

最后便是在 server.js 中配置和使用模板。配置模板的代码非常简单：

```js
// 指定模板存放目录
app.set('views', 'views');

// 指定模板引擎为 Handlebars
app.set('view engine', 'hbs');
```

在使用模板时，只需在路由回调函数中调用 `res.render` 方法即可：

```js
// ...
const app = express();

app.set('views', 'views');
app.set('view engine', 'hbs');

app.get('/', (req, res) => {
  // 渲染index.hbs模版
  res.render('index');
});

app.get('/about', (req, res) => {
  // 渲染about.hbs模版
  res.render('about');
})

// ...
```

当我们访问`localhost:3000`时就会加载对应的index.hbs这个模版，当我们访问`localhost:3000/about`时就会加载对应的about.hbs这个模版

我们还可以给模版引擎中传一些动态参数，这样就会渲染出来不同的内容，将about.hbs改成如下内容：

```html
<h1>黑马前端</h1>
<p>学前端，来黑马</p>
<p>讲师：{{ name }}</p>
<p>年龄：{{ age }}</p>
```

然后在渲染该模版时加上第二个参数:

```js
app.get('/about', (req, res) => {
  // 渲染about.hbs模版
  res.render('about', { name: 'jackie', age: 18 });
})
```

这样当渲染出来的时候就会根据我们传进去的参数动态渲染前端页面了

#### 静态文件服务

客户端一般需要访问一些图片视频等静态资源文件，那么这些文件如何发送给客户端呢，就需要用到静态文件服务了，而 Express 已经自带了静态文件服务中间件 `express.static`，使用起来非常方便。

假设我们的静态资源在public下面：

```
public
├── css
│   └── style.css
└── img
    └── logo.png
```

然后我们只需要在server.js中添加一行代码：

```js
app.use(express.static('public'));
```

然后我们就可以通过下面的路径访问到这些资源了：

```
http://localhost:3000/css/style.css
http://localhost:3000/img/logo.png
```

在模板引擎中放入这些资源的引入，我们就可以模板中使用了：

```html
<link rel="stylesheet" href="/css/style.css" />

<h1>express入门课程</h1>
<p>作为前端开发，Nodejs已经成了很多公司对我们这一岗位的硬性要求，而 Express 框架则是其中知名度最高、也是最受欢迎的Nodejs开发框架。。。</p>
<a href="/about">关于我们</a>
```

再次运行服务器，并访问我们的网站时，就发现样式加到了我们的前端页面上了。

#### 处理404和服务器错误

我们在访问一些路由时有可能这个路由没有定义，这个时候就会返回404的状态码，或者有时候服务器内部代码出错了，就会返回500的错误码，这些情况是在开发中经常碰到的，那么服务端应该如何处理这些异常的情况呢？

- 对于 404，只需在所有路由之后再加一个中间件，用来接收所有路由均匹配失败的请求

- 对于错误处理，前面所有中间件抛出异常时都会进入错误处理函数，可以使用 Express 自带的，也可以自定义。

##### 处理404

只需在server.js中添加如下代码：

```js
app.use('*', (req, res) => {
  res.status(404).render('404', { url: req.originalUrl });
});
```

然后在views下面新建一个404.hbs的模版文件：

```html
<h1>找不到你要的页面了！</h1>
<p>你所访问的路径 {{ url }} 不存在</p>
```

`*` 表示匹配任何路径。将此中间件放在所有路由后面，即可捕获所有访问路径均匹配失败的请求，然后渲染404的那个模版引擎就可以了。

**注意**：一定是放在所有路由的后面，只有前面的路由都匹配不上才会匹配到`*`的这个路由

##### 处理内部错误

在server.js中添加如下代码：

```js
app.use((err, req, res, next) => {
  res.status(500).render('500');
});
```

然后在views下面新建一个500.hbs的模版文件：

```html
<h1>服务器好像开小差了</h1>
<p>过一会儿再试试看吧！See your later~</p>
```

**注意**：在server.js中添加的代码也必须要添加到所有路由的后面，不然不能处理全部的错误

我们在某个路由中手动抛出一个错误后，客户端就会渲染500.hbs这个模版文件。

### 总结

至此express基础内容就讲解完了，这些都是express的核心知识点，后续还会有express的进阶课程，到时候会涉及到用express操作数据库和实战的内容，感兴趣的话可以关注我们的b站动态，及时跟进课程。
