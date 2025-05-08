* [阮一峰 - 打包工具 rollup.js 入门教程](https://www.ruanyifeng.com/blog/2022/05/rollup.html)
* [rollup.js 中文文档](https://www.rollupjs.com/)
    * [rollup 线上编码输出](https://rollupjs.org/repl)



# 介绍

Rollup 是一个用于 JavaScript 的模块打包工具，它将小的代码片段编译成更大、更复杂的代码，例如库或应用程序。它使用 JavaScript 的 ES6 版本中包含的新标准化代码模块格式，而不是以前的 CommonJS 和 AMD 等特殊解决方案。ES 模块允许你自由无缝地组合你最喜欢的库中最有用的个别函数。这在未来将在所有场景原生支持，但 Rollup 让你今天就可以开始这样做。

# 安装

```shell
$ npm install --global rollup
```

查看全局包

```sh
$ npm list -g                
/Users/qiyeyun/.nvm/versions/node/v18.16.0/lib
├── nrm@1.2.6
├── pnpm@9.9.0
├── rollup@4.40.2
├── sass@1.69.5
└── yarn@1.22.19
```



# 最简单的示例

下面，就用 rollup.js 打包两个简单的脚本：库文件 add.js 和入口脚本 main.js。

> ```javascript
> // add.js
> const PI = 3.14;
> const E = 2.718;
> 
> export function addPi(x) {
>   return x + PI;
> }
> 
> export function addE(x) {
>   return x + E; 
> }
> ```

上面代码中，模块 add.js 输出了两个工具函数`addPi()`和`addE()`。

> ```javascript
> // main.js
> import { addPi } from './add.js';
> 
> console.log(addPi(10));
> ```

上面代码中，入口脚本 main.js 加载了 add.js 里面的工具函数`addPi()`。

接着，就用 rollup.js 打包。

> ```bash
> $ rollup main.js
> ```

打包时只需给出入口脚本 main.js，rollup 会自动把依赖项打包进去。

打包结果默认输出到屏幕。

> ```javascript
> const PI = 3.14;
> 
> function addPi(x) {
>   return x + PI;
> }
> 
> console.log(addPi(10));
> ```

可以看到，`import`和`export`语句都没了，被换成了原始代码。

另外，函数`addE()`没有打包进去，因为没有用到它。这种特性叫做摇树（tree-shaking），即打包时自动删除没有用到的代码。

由于上面两点，rollup 输出的代码非常整洁，而且体积小于其他打包工具。

使用参数`--file [FILENAME]`，将打包结果保存到指定文件。

> ```bash
> $ rollup main.js --file dist/bundle.js
> ```

上面命令将打包结果保存到 bundle.js。



# 使用注意点

（1）如果有多个入口脚本，就依次填写它们的文件名，并使用参数`--dir`指定输出目录。

> ```bash
> $ rollup m1.js m2.js --dir dist
> ```

上面命令会在目录`dist`，打包生成多个文件：m1.js、m2.js、以及它们共同的依赖项（如果有的话）。

（2）参数`--format iife`，会把打包结果放在一个自动执行函数里面。

> ```bash
> $ rollup main.js --format iife
> ```

（3）如果希望打包后代码最小化，使用参数`--compact`。

> ```bash
> $ rollup main.js --compact
> ```

另一种方法是使用专门工具。

> ```bash
> $ rollup main.js | uglifyjs --output bundle.js
> ```

上面命令分成两步，第一步是 rollup 打包，第二步是 uglifyjs 进行代码最小化，最后写入 bundle.js。

（4）rollup 支持使用[配置文件](https://rollupjs.org/guide/en/#configuration-files)（rollup.config.js），把参数都写在里面，下面是一个例子。

> ```javascript
> // rollup.config.js
> export default {
>   input: 'main.js',
>   output: {
>     file: 'bundle.js',
>     format: 'es'
>   }
> };
> ```

参数`-c`启用配置文件。

> ```bash
> $ rollup -c
> ```

我不推荐使用配置文件，这样会增加额外的复杂性。默认场景下，命令行参数已经够用了，也更容易阅读。



##配置文件运行报错处理：

让我为您翻译这个错误信息：

```
(node:86005) Warning: To load an ES module, set "type": "module" in the package.json or use the .mjs extension.
```
警告：要加载 ES 模块，请在 package.json 中设置 "type": "module" 或使用 .mjs 扩展名。

```
[!] RollupError: Node tried to load your configuration file as CommonJS even though it is likely an ES module. To resolve this, change the extension of your configuration to ".mjs", set "type": "module" in your package.json file or pass the "--bundleConfigAsCjs" flag.
```
Rollup错误：Node 试图将您的配置文件作为 CommonJS 模块加载，但它实际上是一个 ES 模块。要解决这个问题，您可以：
1. 将配置文件的扩展名改为 ".mjs"
2. 在 package.json 文件中设置 "type": "module"
3. 使用 "--bundleConfigAsCjs" 标志运行

这个错误出现的原因是您的 `rollup.config.js` 文件使用了 ES 模块语法（`export default`），**但 Node.js 默认将其视为 CommonJS 模块。** 要解决这个问题，您可以选择上述三种方案中的任意一种。





# 转成 CommonJS 模块

最后，rollup 还支持 ES 模块转成 CommonJS 模块，使用参数`--format cjs`就可以了。

> ```bash
> $ rollup add.js --format cjs
> ```

转换后的 CommonJS 模块，代码如下。

> ```javascript
> 'use strict';
> 
> Object.defineProperty(exports, '__esModule', { value: true });
> 
> const PI = 3.14;
> const E = 2.718;
> 
> function addPi(x) {
>   return x + PI;
> }
> 
> function addE(x) {
>   return x + E; 
> }
> 
> exports.addE = addE;
> exports.addPi = addPi;
> ```
