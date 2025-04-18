
// 
const express = require('express');

const app = express();


// ----------- 引入外部中间件 -------------
const logger = require('./logger')
app.use(logger);


// ----------- 路由方法 + 路由路径 -------------

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.get('/about', (req, res) => {
  console.log("🚀 ~ app.get ~ app:", req.query)
  res.send('about');
})

app.post('/about', (req, res) => {
  console.log("🚀 ~ app.post ~ app:", req.body)
  res.send('post');
})

app.all('/about', (req, res) => {
  console.log("🚀 ~ app.all ~ app:", req.body)
  res.send('all');
})

// ----------- 路由拆分 -------------

const user = express.Router();

user.get('/list', (req, res) => {
  res.send('user list');
})

user.post('/add', (req, res) => {
  res.send('user add');
})

app.use('/user', user); // 注册user路由


// ----------- 中间件 -------------

// 这是一个全局中间件函数，用于在每次请求处理之前或之后执行一些通用的逻辑。在这个例子中，它只是简单地打印了一条日志信息"global middleware"，然后调用next()函数将请求传递给下一个中间件或处理程序。
function globalMiddleware(req, res, next) {
  console.log('global middleware');
  next();
}

app.use(globalMiddleware);  // 注册全局中间件，调用任何接口，都会执行这个中间件


// 调用 http://localhost:3000/all，会触发上面的全局中间件
app.all('/all', (req, res) => {
  res.send('user all');
})


// 这是路由局部中间件
function partMiddleWare(req, res, next) {
  console.log('middleWare....');
  next();
}

user.get('/partMiddleWare', partMiddleWare, (req, res) => {
  res.send('user partMiddleWare');
})


app.get('/logger', logger, (req, res) => {
  res.send('logger');
})


// ----------- 使用模板引擎 -------------

// 指定模板存放目录
app.set('views', 'views');

// 指定模板引擎为 Handlebars
app.set('view engine', 'hbs');


app.get('/index', (req, res) => {
  // 渲染index.hbs模版
  res.render('index');
});

app.get('/index/about', (req, res) => {
  // 渲染about.hbs模版
  res.render('about');
})



app.listen(3000, () => {
    console.log('Example app listening on port 3000!');
});
