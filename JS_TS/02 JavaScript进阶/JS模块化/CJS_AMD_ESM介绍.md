* [阮一峰 - Javascript模块化编程（一）：模块的写法](https://www.ruanyifeng.com/blog/2012/10/javascript_module.html)

* [阮一峰 - Javascript模块化编程（二）：AMD规范](https://www.ruanyifeng.com/blog/2012/10/asynchronous_module_definition.html)

* [阮一峰 - Javascript模块化编程（三）：require.js的用法](https://www.ruanyifeng.com/blog/2012/11/require_js.html)



[《Vue3入门指南与实战案例》- 学习模块化设计](https://vue3.chengpeiquan.com/guide.html#%E5%AD%A6%E4%B9%A0%E6%A8%A1%E5%9D%97%E5%8C%96%E8%AE%BE%E8%AE%A1)





# 一、CJS 与 AMD 的由来

之前Javascript模块还没有官方规范，这一点就更重要了。通行的Javascript模块规范共有两种：[CommonJS](http://wiki.commonjs.org/wiki/Modules/1.1)和[AMD](https://github.com/amdjs/amdjs-api/wiki/AMD)。

## 1. 服务器端模块

2009年，美国程序员Ryan Dahl创造了[node.js](http://nodejs.org/)项目，将javascript语言用于服务器端编程。

这标志"Javascript模块化编程"正式诞生。因为老实说，在浏览器环境下，没有模块也不是特别大的问题，毕竟网页程序的复杂性有限；但是在服务器端，一定要有模块，与操作系统和其他应用程序互动，否则根本没法编程。



node.js的[模块系统](http://nodejs.org/docs/latest/api/modules.html)，就是参照[CommonJS](http://wiki.commonjs.org/wiki/Modules/1.1)规范实现的。在CommonJS中，有一个全局性方法require()，用于加载模块。假定有一个数学模块math.js，就可以像下面这样加载。

```
var math = require('math');
```

然后，就可以调用模块提供的方法：

```
var math = require('math');

math.add(2,3); // 5　
```

因为这个系列主要针对浏览器编程，不涉及node.js，所以对CommonJS就不多做介绍了。我们在这里只要知道，require()用于加载模块就行了。



## 2. 客户端(浏览器)模块

有了服务器端模块以后，很自然地，大家就想要客户端模块。而且最好两者能够兼容，一个模块不用修改，在服务器和浏览器都可以运行。

但是，由于一个重大的局限，使得CommonJS规范不适用于浏览器环境。还是上一节的代码，如果在浏览器中运行，会有一个很大的问题，你能看出来吗？

> 　　var math = require('math');
>
> 　　math.add(2, 3);

第二行math.add(2, 3)，在第一行require('math')之后运行，因此必须等math.js加载完成。也就是说，如果加载时间很长，整个应用就会停在那里等。

这对服务器端不是一个问题，因为所有的模块都存放在本地硬盘，可以同步加载完成，等待时间就是硬盘的读取时间。但是，对于浏览器，这却是一个大问题，因为模块都放在服务器端，等待时间取决于网速的快慢，可能要等很长时间，浏览器处于"假死"状态。

因此，浏览器端的模块，不能采用"同步加载"（synchronous），只能采用"异步加载"（asynchronous）。这就是AMD规范诞生的背景。

所以引出了AMD模块化方案。

> [AMD](https://github.com/amdjs/amdjs-api/wiki/AMD)是"Asynchronous Module Definition"的缩写，意思就是"异步模块定义"。它采用异步方式加载模块，模块的加载不影响它后面语句的运行。所有依赖这个模块的语句，都定义在一个回调函数中，等到加载完成之后，这个回调函数才会运行。



# 二、模块化方案一览

在前端工程的发展过程中，不同时期诞生了很多不同的模块化机制，最为主流的有以下几种：

| 模块化方案 |            全称             |    适用范围     |
| :--------: | :-------------------------: | :-------------: |
|    CJS     |          CommonJS           |     Node 端     |
|    AMD     |   Async Module Definition   |     浏览器      |
|    CMD     |  Common Module Definition   |     浏览器      |
|    UMD     | Universal Module Definition | Node 端和浏览器 |
|    ESM     |          ES Module          | Node 端和浏览器 |

其中 AMD 、CMD 、 UMD 都已经属于偏过去式的模块化方案，在新的业务里，结合各种编译工具，可以直接用最新的 ESM 方案来实现模块化，所以可以在后续有接触的时候再了解。



# 三、CJS 与 ESM

ESM （ ES Module ） 是 JavaScript 在 ES6（ ECMAScript 2015 ）版本推出的模块化标准，旨在成为浏览器和服务端通用的模块解决方案。

CJS （ CommonJS ） 原本是服务端的模块化标准（设计之初也叫 ServerJS ），是为 JavaScript 设计的用于浏览器之外的一个模块化方案， Node 默认支持了该规范，在 Node 12 之前也只支持 CJS ，但从 Node 12 开始，已经同时支持 ES Module 的使用。

至此，不论是 Node 端还是浏览器端， ES Module 是统一的模块化标准了！

但由于历史原因， CJS 在 Node 端依然是非常主流的模块化写法，所以还是值得进行了解，因此下面的内容将主要介绍 CJS 和 ESM 这两种模块化规范是如何实际运用。



> **在 CJS 和 ESM ，一个独立的文件就是一个模块，该文件内部的变量必须通过导出才能被外部访问到，而外部文件想访问这些变量，需要导入对应的模块才能生效。**



### 【注】不想写.cjs .mjs后缀

> 在 `package.json` 中增加 `"type":  "module"` or `"type":  "commonjs"` 后，新建的文件直接写 `.js` 即可。



## 1. CJS规范 - 实操

> 请注意这里使用了 `.cjs` 文件扩展名，其实它也是 JS 文件，但这个扩展名是 Node 专门为 CommonJS 规范设计的。

[demo](https://github.com/lionsom/Vue_Projects/tree/main/01-%E3%80%8AVue3%20%E5%85%A5%E9%97%A8%E6%8C%87%E5%8D%97%E4%B8%8E%E5%AE%9E%E6%88%98%E6%A1%88%E4%BE%8B%E3%80%8B/03_CommonJS)

```bash
hello-node
│ # 源码文件夹
├─src
│ │ # 业务文件夹
│ └─cjs
│   │ # 入口文件
│   ├─index.cjs
│   │ # 模块文件
│   └─module.cjs
│ # 项目清单
└─package.json
```

package.json

```json
{
  "scripts": {
    "dev:cjs": "node src/cjs/index.cjs"
  }
}
```



### a. 默认导出 - 字符串

```js
// src/cjs/module.cjs
module.exports = 'Hello World'
```

```js
// src/cjs/index.cjs
const m = require('./module.cjs')
console.log(m)
```

```sh
$ npm run dev:cjs

demo@1.0.0 dev:cjs
node src/cjs/index.cjs

Hello World
```



### b. 默认导出 - 函数

```js
// src/cjs/module.cjs
module.exports = function foo() {
  console.log('Hello World')
}
```

```js
// src/cjs/index.cjs
const m = require('./module.cjs')
m()
```

```sh
$ npm run dev:cjs

demo@1.0.0 dev:cjs
node src/cjs/index.cjs

Hello World
```



### c. 命名导出 - 多个数据

```js
// src/cjs/module.cjs
function foo() {
  console.log('Hello World from foo.')
}

const bar = 'Hello World from bar.'

module.exports = {
  foo,
  bar,
}
```

```js
// src/cjs/index.cjs
const m = require('./module.cjs')
console.log(m)


// 此时可以用一种更方便的方式，利用 ES6 的对象解构来直接拿到变量：

// src/cjs/index.cjs
const { foo, bar } = require('./module.cjs')
foo()
console.log(bar)
```

```sh
$ npm run dev:cjs

demo@1.0.0 dev:cjs
node src/cjs/index.cjs

{ foo: [Function: foo], bar: 'Hello World from bar.' }
```



### d. 命名导入 - 重命名

> 这是利用了 ES6 解构对象的 [给新的变量名赋值](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment#给新的变量名赋值) 技巧。

```js
// src/cjs/module.cjs
function foo() {
  console.log('Hello World from foo.')
}

const bar = 'Hello World from bar.'

module.exports = {
  foo,
  bar,
}
```

```js
// src/cjs/index.cjs
const {
  foo: foo2,  // 这里进行了重命名
  bar,
} = require('./module.cjs')

// 就不会造成变量冲突
const foo = 1
console.log(foo)

// 用新的命名来调用模块里的方法
foo2()

// 这个不冲突就可以不必处理
console.log(bar)
```

```sh
$ npm run dev:cjs

demo@1.0.0 dev:cjs
node src/cjs/index.cjs

1
Hello World from foo.
Hello World from bar.
```



## 2. ESM规范 - 实操

[demo](https://github.com/lionsom/Vue_Projects/tree/main/01-%E3%80%8AVue3%20%E5%85%A5%E9%97%A8%E6%8C%87%E5%8D%97%E4%B8%8E%E5%AE%9E%E6%88%98%E6%A1%88%E4%BE%8B%E3%80%8B/04_ES_Module)

ES Module 是新一代的模块化标准，它是在 ES6（ ECMAScript 2015 ）版本推出的，是原生 JavaScript 的一部分。

不过因为历史原因，如果要直接在浏览器里使用该方案，在不同的浏览器里会有一定的兼容问题，需要通过 Babel 等方案进行代码的版本转换（可在 [控制编译代码的兼容性](https://vue3.chengpeiquan.com/guide.html#控制编译代码的兼容性) 一节了解如何使用 Babel ）。

> 注意这里使用了 `.mjs` 文件扩展名，因为默认情况下， Node 需要使用该扩展名才会支持 ES Module 规范。
>
> 注意， script 里的 `.mjs` 扩展名不能省略。
>
> 另外，在实际项目中，可能不需要做这些处理，因为很多工作脚手架已经帮处理过了，比如的 Vue3 项目。
>

```sh
hello-node
│ # 源码文件夹
├─src
│ │ 
│ └─esm
│   │ # 入口文件
│   ├─index.mjs
│   │ # 模块文件
│   └─module.mjs
│
│ # 项目清单
└─package.json
```

package.json

```json
{
  "scripts": {
    "dev:cjs": "node src/cjs/index.cjs",
    "dev:esm": "node src/esm/index.mjs"
  }
}
```



>  		ESM 使用 `export default` （默认导出）和 `export` （命名导出）这两个语法导出模块，和 CJS 一样， ESM 也可以导出任意合法的 JavaScript 类型，例如：字符串、布尔值、对象、数组、函数等等。
>
> ​		使用 import ... from ... 导入模块，在导入的时候，如果文件扩展名是 .js 则可以省略文件名后缀，否则需要把扩展名也完整写出来。



### a. 默认导出 - 字符串

```js
// src/esm/module.mjs
export default 'Hello World'
```

```js
// src/esm/index.mjs
import m from './module.mjs'
console.log(m)
```

```sh
$ npm run dev:esm

demo@1.0.0 dev:esm
node src/esm/index.mjs

Hello World
```



### b. 默认导出 - 函数

```js
// src/esm/module.mjs
export default function foo() {
  console.log('Hello World')
}
```

```js
// src/esm/index.mjs
import m from './module.mjs'
m()
```

```sh
$ npm run dev:esm

demo@1.0.0 dev:esm
node src/esm/index.mjs

Hello World
```



### c. 命名导出

```js
// src/esm/module.mjs
export function foo() {
  console.log('Hello World from foo.')
}

export const bar = 'Hello World from bar.'
```

```js
// src/esm/index.mjs
import { foo, bar } from './module.mjs'

foo()
console.log(bar)
```

```sh
$ npm run dev:esm

demo@1.0.0 dev:esm
node src/esm/index.mjs

Hello World from foo.
Hello World from bar.
```



#### 补充：ESM命名导出 与 CJS命名导出区别

虽然默认导出的时候， CJS 和 ESM 的写法非常相似，但命名导出却完全不同！

在 CJS 里，使用命名导出后的模块数据默认是一个对象，可以导入模块后通过 `m.foo` 这样的方式去调用对象的属性，或者在导入的时候直接解构拿到对象上的某个属性：

```js
// CJS 支持导入的时候直接解构
const { foo } = require('./module.cjs')
```

但 ES Module 的默认导出不能这样做，例如下面这个例子，虽然默认导出了一个对象：

```js
// 在 ESM ，通过这样导出的数据也是属于默认导出
export default {
  foo: 1,
}
```

但是无法和 CJS 一样通过大括号的方式导入其中的某个属性：

```js
// ESM 无法通过这种方式对默认导出的数据进行 “解构”
import { foo } from './module.mjs'
```

这样操作在运行过程中，控制台会抛出错误信息：

```sh
import { foo } from './module.mjs'
         ^^^
SyntaxError:
The requested module './module.mjs' does not provide an export named 'foo'
```



### d. 命名导入 - 重命名

```js
// src/esm/module.mjs
export function foo() {
  console.log('Hello World from foo.')
}

export const bar = 'Hello World from bar.'
```

```js
// src/esm/index.mjs
import {
  foo as foo2,  // 这里进行了重命名
  bar
} from './module.mjs'

// 就不会造成变量冲突
const foo = 1
console.log(foo)

// 用新的命名来调用模块里的方法
foo2()

// 这个不冲突就可以不必处理
console.log(bar)
```

```sh
$ npm run dev:esm

demo@1.0.0 dev:esm
node src/esm/index.mjs

1
Hello World from foo.
Hello World from bar.
```



## 3. ESM与CJS的一些区别

```js
// 区别一
// ESM 支持异步导入，不需要async
const { foo } = await import('./foo.js')
foo()

// 区别二
// 这些关键字是cjs中的，esm中已经没有了
console.log(require)
console.log(module.exports)
console.log(exports)
console.log(__dirname)
console.log(__filename)

// esm中显示文件信息
console.log(import.meta)
```



















