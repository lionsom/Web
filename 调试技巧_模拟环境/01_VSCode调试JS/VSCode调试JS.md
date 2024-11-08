* [VSCode官网 - Launch configurations](https://code.visualstudio.com/docs/editor/debugging#_launch-configurations)
* [官网 - Debugging Node.js](https://nodejs.org/en/learn/getting-started/debugging#debugging-nodejs)
* [Node.js 调试一路走来经历了什么](https://mp.weixin.qq.com/s/5d5yiDpQ_gUTWGyx2lcCYQ)
* [新手向：前端程序员必学基本技能——调试JS代码](https://mp.weixin.qq.com/s?__biz=MzA5MjQwMzQyNw==&mid=2650758814&idx=1&sn=3814b9c13cc14f33f6c73caff565ff96&chksm=88665d12bf11d404f93b9701dbe68ca80bf81ff6d630d0b378c58cb3b987b3fc4901a837dd25&cur_album_id=1342211915371675650&scene=21#wechat_redirect)

* [前端容易忽略的 debugger 调试技巧](https://mp.weixin.qq.com/s?__biz=MzA5MjQwMzQyNw==&mid=2650752621&idx=1&sn=a85474788f1013f14c7ebb38e300b529&scene=21#wechat_redirect)

* [《你不知道的 Chrome 调试技巧》](https://juejin.cn/book/6844733783166418958/section)
    * [FrontendWingman](https://github.com/dendoink/FrontendWingman)

* [慕课网调试课程](https://www.imooc.com/learn/1164)
* [慕课网 nodejs 调试入门](https://www.imooc.com/learn/1093)

* [Vuejs 官方文档调试](https://cn.vuejs.org/v2/cookbook/debugging-in-vscode.html)

* [Devtools 老师傅养成[1] - Chrome Devtools介绍](http://mp.weixin.qq.com/s?__biz=MzA5NjM5MjM1Nw==&mid=2650283991&idx=1&sn=fe705b94387e86f3d601231e613a8f08&chksm=88bc7a1dbfcbf30b98a7239ecd33596ce6b41f2bd6367e754b3569ec425703a471f4682d583c&scene=21#wechat_redirect)
* [Devtools 老师傅养成[2] - Elements 面板](http://mp.weixin.qq.com/s?__biz=MzA5NjM5MjM1Nw==&mid=2650283991&idx=2&sn=bc26537538c17ff5a4c5f4feebe889fb&chksm=88bc7a1dbfcbf30b82d976e29108656fba4cd68bfac1812b97e0361d359453a1bdb3a397e442&scene=21#wechat_redirect)
* [Devtools 老师傅养成[3] - Console 面板](http://mp.weixin.qq.com/s?__biz=MzA5NjM5MjM1Nw==&mid=2650284020&idx=1&sn=93087d5a03cc5d293a9fd8df3752252f&chksm=88bc7a3ebfcbf328aaa40fc2c2f6820ee2ea379b21d8a0f046ca7e8c8040d57d1f8b00919225&scene=21#wechat_redirect)
* [2022年了，该学会用VSCode debug了](https://juejin.cn/post/7080135520902184997)
* https://juejin.cn/post/6992976045213220878#heading-0





vscode有3种调试方式

**1. auto attach 自动附加**
**2. JavaScript debug terminal**
**3. launch.json配置方式**



[Node.js 调试服务](https://juejin.cn/post/6992976045213220878#heading-0)

* `chrome://inspect/#devices`

* `--inspect`
* `--inspect-brk`



- Node.js 和调试器基于 Inspector Protocol 实现调试，Node.js 提供调试服务，调试器通过 websocket 对接调试服务
- VSCode 提供了多种启动 Node.js 调试的方式
    - Auto Attach，针对在 VSCode 集成终端执行的脚本，自动启动调试
    - JavaScript Debug Terminal，为单个终端窗口提供 Auto Attach 功能
    - Attach to Node Process Action，调试运行中的 Node.js 进程
    - Launch Configuration，自定义配置







[Node.js 调试一路走来经历了什么](https://mp.weixin.qq.com/s/5d5yiDpQ_gUTWGyx2lcCYQ)

[VSCode 启动 Node.js 调试的几种方式](https://juejin.cn/post/6992976045213220878#heading-9)



# 一、Inspector Protocol

Node.js 提供 [Inspector Protocol](https://link.juejin.cn/?target=https%3A%2F%2Fchromedevtools.github.io%2Fdebugger-protocol-viewer%2Fv8%2F) 调试协议来支持调试。

简单来说，在运行 Node.js 程序时开启一个进程来监听调试请求，默认的监听端口是 **9229**。每个监听进程都被分配了唯一的 UUID，调试客户端通过 `ws://{host}:{port}/{UUID}` 和监听进程建立 websocket 通信。

Node.js 开启调试服务被动等待，调试客户端主动发起对接。

> *Inspector 更确切的称呼是 “检查器”，由于理解习惯，文章内将其称为 “调试器”*



## 1. 使用 Node.js 内置命令行调试器

1. **启动调试器**： 要启动 Node.js 的内置调试器，可以在运行应用程序时加上 `inspect` 标志：

    ```sh
    $ node inspect src/index.js
    ```

2. **调试器启动**： 使用上述命令启动后，Node.js 会在第一个可执行的代码行暂停，等待用户输入调试命令。你将看到一个交互式调试器提示符 `>`。

3. **常用调试命令**： 内置调试器提供了一些基本的调试命令来帮助你检查和控制代码执行流程。

    - **`c` 或 `cont`**：继续执行代码，直到遇到下一个断点或结束。
    - **`n` 或 `next`**：执行下一行代码。
    - **`s` 或 `step`**：单步进入函数调用。
    - **`o` 或 `out`**：跳出当前函数并停在调用此函数的下一行。
    - **`repl`**：进入 REPL 模式，你可以在该模式下运行 JavaScript 表达式并查看变量值。
    - **`bt`**：显示当前的调用堆栈。
    - **`watch(expr)`**：将表达式加入监视列表。
    - **`unwatch(expr)`**：将表达式从监视列表中移除。
    - **`list`**：列出当前正在执行的代码片段。

4. **退出调试器**： 输入 `Ctrl + C` 两次或使用 `quit` 命令可以退出调试器。



### a. Node.js REPL 调试模式

内置调试器还允许你在调试模式下进入 `REPL`，你可以实时执行表达式和查看变量的值。

- 输入 `repl` 进入 REPL 模式，在其中可以直接输入 JavaScript 表达式。
- 输入 `.exit` 退出 REPL 模式并返回到调试器。

**实用示例**

假设你有一个简单的 `app.js`：

```js
function add(a, b) {
  return a + b;
}

function main() {
  let result = add(2, 3);
  console.log('Result:', result);
}

main();
```

运行调试器：

```sh
$ node inspect app.js
```



## 2. ws调试服务

### a. `--inspect` 启用调试模式

#### Ⅰ.『启动时』开启调试服务

Node.js 调试服务默认关闭，需要通过 `--inspect` 或 `--inspect-brk` 标识符开启，服务的默认端口和地址也可通过 `node --inspect=[host:port]` 指定。

- `node --inspect index.js` 开启调试服务，端口为 9229
- `node --inspect=3003 index.js` 开启调试服务，端口为 3003
- `node --inspect=192.168.0.101` 开启调试服务，地址为 192.168.0.101:9229
- `node --inspect=192.168.0.101:3003` 开启调试服务，连接地址为 192.168.0.101:3003

那么，`--inspect` 和 `--inspect-brk` 有什么不同？

> `--inspect-brk` 会在代码执行前停住。

- `--inspect` 启动调试服务，跑完程序就退出。除非是有异步任务在，不然完全不给调试器对接的机会。
- `--inspect-brk` 启动完调试服务就停在开头，等着调试器接入，接入后断在第一行代码等待下一步操作。



#### Ⅱ.『运行时』开启调试服务

实际上，除了跟随程序启动，还可以在已运行的程序上开启调试服务

```bash
$ kill -s SIGUSR1 49026
```

上述命令的作用是给进程 id 是 49026 的进程发送 `SIGUSR1` 信号，当 Node.js 进程收到 `SIGUSR1` 时，将启动调试服务。



### b. 调试客户端 - 可视化调试器

Node 内置命令行调试器，通过 `node inspect` 命令执行，通过输入命令来描述行为不如可视化操作高效，可视化调试器必不可少。

目前主流的 IDE 几乎都已经内置 Node.js 调试客户端，例如前端领域最常用的 VSCode、WebStorm、Chrome DevTool。

Chrome DevTools 会根据地址列表自动检查调试服务启动情况，默认地址有本地的 9229 和 9222 端口。`chrome://inspect` 面板负责调试管理。

#### Ⅰ. Chrome DevTools

* [chrome://inspect/](chrome://inspect/)

![](images/001.png)

#### Ⅱ. VSCode











### c. 远程调试

Inspector 协议支持远程调试，允许开发者在不同设备或容器中调试 Node.js 应用程序。

如果你在服务器或容器中运行 Node.js 应用程序，并希望在本地调试，可以启用 `--inspect=0.0.0.0:9229` 来指定监听所有网络接口。

```sh
$ node --inspect=0.0.0.0:9229

$ node --inspect-brk=0.0.0.0:9229
```



### d. 实操

Demo地址：./debugger-demo

`package.json`

```json
"scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "dev": "node src/index.js",
    "dev:inspect": "node --inspect src/index.js",
    "dev:inspect-brk": "node --inspect-brk src/index.js"
  },
```

运行 `pnpm dev:inspect-brk`

![](images/002.png)









# Auto Attach

总要编辑 launch.json 多少有些麻烦，如果能在执行脚本时自动启动调试就好了。

这就是 Auto Attach 的作用，然而 Auto Attach 功能仅能作用于在 **VSCode 集成终端** 启动的进程。

Auto Attach 有四种可选模式，命令面板输入 `Toggle Auto Attach` 选择菜单中罗列几种模式：

- Always：在内置终端启动的所有进程都会自动接上调试器
- Smart：排除 node_modules 目录下的执行脚本（例如 `tsc build`）。排除范围可在 `debug.javascript.autoAttachSmartPattern` 指定
- Only With Flag：只会对带 `--inspect` 或 `--inspect-brk` 启动的进程有效果
- Disable：禁用自动对接功能

Auto Attach 依托于集成终端，因此每次切换后都需要 **重启终端** 才能生效。

在命令面板选择将直接作用于 VSCode 全局环境，如要为工作区定制，可以设置 `.vscode/settings.json`。

![](images/003.png)

![](images/004.png)

![](images/005.png)



# Attach to Node Process Action





# JavaScript Debug Terminal





# Launch Configuration















