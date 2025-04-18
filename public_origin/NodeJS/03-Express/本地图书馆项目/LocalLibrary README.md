* [MDN - Express 教程 2：创建站点框架](https://developer.mozilla.org/zh-CN/docs/Learn/Server-side/Express_Nodejs/skeleton_website)



# 一、创建Express项目

我们为本地图书馆应用创建一个名为 express-locallibrary-tutorial 的项目，使用 Pug 模板库，不使用 CSS 引擎。

首先，进入准备放置项目的目录，然后在命令提示符运行 Express 应用生成器，生成器将创建（并列出）项目的文件：

本项目选用 [Pug](https://pugjs.org/api/getting-started.html) 模板引擎（Jade 是它不久前的曾用名），它是最流行的 Express / JavaScript 模板语言之一，且对 Express 生成器 [开箱即用](https://github.com/expressjs/express/wiki#template-engines)。

```sh
$ express --view=pug

   create : public/
   create : public/javascripts/
   create : public/images/
   create : public/stylesheets/
   create : public/stylesheets/style.css
   create : routes/
   create : routes/index.js
   create : routes/users.js
   create : views/
   create : views/error.pug
   create : views/index.pug
   create : views/layout.pug
   create : app.js
   create : package.json
   create : bin/
   create : bin/www

   install dependencies:
     $ npm install

   run the app:
     $ DEBUG=express-locallibrary-tutorial:* npm start
```



## 1. 运行

1. 首先，安装依赖项（install命令将获取项目的package.json文件中列出的所有依赖项包）。

    ```sh
    $ npm install
    ```

2. 然后运行该应用。

    ```sh
    $ npm start
    
    # 指定 DEBUG 变量可启用控制台日志记录/调试。例如，当你访问上面的页面时，你会看到调试输出
    $ DEBUG=express-locallibrary-tutorial:* npm start
    ```

3. 最后在浏览器中导航至 http://localhost:3000/ ，就可以访问该应用。你应该可以看到：

![](LocalLibrary-images/001.png)



## 2. 使用nodemon，不用重启

```sh
$ npm install -g nodemon

$ npm install --save-dev nodemon
```

Package.json

```js
 "scripts": {
    "start": "node ./bin/www",
    "devstart": "nodemon ./bin/www"
  },
```

运行

```sh
$ DEBUG=express-locallibrary-tutorial:* npm run devstart
```



## 3. 项目目录结构介绍

* [MDN - 目录结构](https://developer.mozilla.org/zh-CN/docs/Learn/Server-side/Express_Nodejs/skeleton_website#目录结构)

**package.json** 文件定义依赖项和其他信息，以及一个调用应用入口（**/bin/www**，一个 JavaScript 文件）的启动脚本，脚本中还设置了一些应用的错误处理，加载 **app.js** 来完成其余工作。**/routes** 目录中用不同模块保存应用路由。/**views** 目录保存模板。



- [cookie-parser](https://www.npmjs.com/package/cookie-parser)：用于解析 cookie 头来填充 `req.cookies`（提供了访问 cookie 信息的便捷方法）。
- [debug](https://www.npmjs.com/package/debug)：一个小型 node 调试程序，仿照 node 核心的调试技术建立。
- [http-errors](https://www.npmjs.com/package/http-errors)：处理错误中间件。
- [morgan](https://www.npmjs.com/package/morgan)：node 专用 HTTP 请求记录器中间件。



文件 **/bin/www** 是应用入口！它做的第一件事是 `require()` “真实”的应用入口（即项目根目录中的 **app.js** ），**app.js** 会设置并返回 [`express()`](http://expressjs.com/en/api.html)应用对象。



## 4. 将模板引擎用于 Express

* [Express官方文档 - 将模板引擎用于 Express](https://expressjs.com/zh-cn/guide/using-template-engines.html)

在 Express 可以呈现模板文件之前，必须设置以下应用程序设置：

- `views`：模板文件所在目录。例如：`app.set('views', './views')`
- `view engine`：要使用的模板引擎。例如：`app.set('view engine', 'pug')`

然后安装对应的模板引擎 npm 包：

```console
$ npm install pug --save
```

与 Express 兼容的模板引擎（例如 Pug）导出名为 `__express(filePath, options, callback)` 的函数，该函数由 `res.render()` 函数调用以呈现模板代码。 某些模板引擎并不遵循此约定。[Consolidate.js](https://www.npmjs.org/package/consolidate) 库通过映射所有流行的 Node.js 模板引擎来遵循此约定，因此可以在 Express 内无缝工作。

在设置视图引擎之后，不必指定该引擎或者在应用程序中装入模板引擎模块；Express 在内部装入此模块，如下所示（针对以上示例）。

```javascript
app.set('view engine', 'pug');
```

在 `views` 目录中创建名为 `index.pug` 的 Pug 模板文件，其中包含以下内容：

```javascript
html
  head
    title= title
  body
    h1= message
```

随后创建路由以呈现 `index.pug` 文件。如果未设置 `view engine` 属性，必须指定 `view` 文件的扩展名。否则，可以将其忽略。

```javascript
app.get('/', function (req, res) {
  res.render('index', { title: 'Hey', message: 'Hello there!'});
});
```

向主页发出请求时，`index.pug` 文件将呈现为 HTML。



## 5. 项目中的[视图（模板）](https://developer.mozilla.org/zh-CN/docs/Learn/Server-side/Express_Nodejs/skeleton_website#视图（模板）)

视图（模板）存保存在 **/views** 目录中（ **app.js** 中指定），使用 **.pug** 扩展名。 [`Response.render()`](http://expressjs.com/en/4x/api.html#res.render) 方法用某对象的某个变量值一同来渲染一个特定的模板，然后将结果作为响应发送。在 **/routes/index.js** 中可以看到，该路由使用 '`index`' 模板和一个模板变量 `title` 来渲染响应。

```js
/* GET home page. */
router.get("/", function (req, res) {
  res.render("index", { title: "Express" });
});
```



# 二、数据库



