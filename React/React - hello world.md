* [MDN - React入门](https://developer.mozilla.org/zh-CN/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_getting_started#%E8%AE%BE%E7%BD%AE%E4%BD%A0%E7%9A%84%E7%AC%AC%E4%B8%80%E4%B8%AA_react_%E5%BA%94%E7%94%A8)
* [FaceBook - create-react-app](https://create-react-app.dev/)
    * [Create React App 中文文档！](https://create-react-app.xiniushu.com/)
    * [Create React App 中文文档](https://create-react-app.bootcss.com/)




# Hello World - React Demo

## 一、create-react-app

`create-react-app` 是一个由 Facebook 团队提供的用于快速搭建 React 应用程序的官方脚手架工具。它可以帮助开发者快速创建一个新的 React 项目，同时配置好必要的开发环境，包括 Babel、Webpack、ESLint 等，让开发者可以专注于编写 React 组件和业务逻辑，而不必花费时间在配置环境上。

要使用 `create-react-app` 创建一个新的 React 项目，可以按照以下步骤进行：

1. **安装 Node.js**：首先确保你的计算机上已经安装了 Node.js，因为 `create-react-app` 是基于 Node.js 的工具。你可以在[Node.js 官网](https://nodejs.org/)上下载并安装最新版本的 Node.js。

2. **使用 `npx` 创建新的 React 项目**：在命令行中运行以下命令来创建一个新的 React 项目：

```sh
$ npx create-react-app my-react-app
```

这将在当前目录下创建一个名为 `my-react-app` 的新 React 项目。你也可以将 `my-react-app` 替换为你想要的项目名称。

3. **进入项目目录**：创建完成后，进入新创建的项目目录：

```bash
$ cd my-react-app
```

4. **启动开发服务器**：在项目目录中运行以下命令，启动开发服务器：

```bash
$ npm start
```

这将启动一个开发服务器，并在浏览器中打开你的 React 应用。你可以在代码编辑器中修改代码，并实时查看更改的效果。

通过以上步骤，你就可以快速创建一个新的 React 项目并开始开发。`create-react-app` 提供了一套默认的开发配置，同时也支持自定义配置，让开发者可以根据需要进行定制。



**环境要求**

* 你需要安装 [Node.js](https://nodejs.org/en/)。建议你使用长期支持（LTS）版本。
* Node 包括 
    * npm：Node 程序包管理器
    * npx：Node 程序包运行器



## 二、创建项目

```sh
$ npx create-react-app my-react-app
$ cd my-react-app
$ npm start
```

> **备注：** 如果你的电脑上安装了 yarn 的话，create-react-app 会默认使用 yarn 而非 npm。如果你同时安装了 yarn 和 npm，但你希望使用 npm 的话，在 create-react-app 的时候需要输入 `--use-npm` **:**
>
> ```sh
> $ npx create-react-app my-react-app --use-npm
> ```



## 三、目录结构

```js
my-react-app/
│
├── node_modules/         // 存放项目依赖的 Node 模块
│
├── public/               // 存放静态资源文件
│   ├── index.html        // 项目的主 HTML 文件
│   └── ...
│
├── src/                  // 存放项目的源代码
│   ├── components/       // 存放 React 组件
│   ├── App.js            // 主应用组件
│   ├── index.js          // 项目入口文件
│   └── ...
│
├── package.json          // 项目配置文件，包含项目的依赖、脚本等信息
├── package-lock.json     // 锁定安装时的依赖版本
├── README.md             // 项目说明文档
└── ...
```

这是一个简单的 React 项目的文件结构示例。下面是一些常见的目录和文件：

1. **`node_modules/`**：存放项目依赖的 Node 模块，通常由 npm 或 yarn 管理安装。
2. **`public/`**：存放静态资源文件，比如 HTML 文件、图片、字体等。`index.html` 是项目的主 HTML 文件，是 React 应用的入口。
3. **`src/`**：存放项目的源代码，包括 React 组件、样式文件、数据等。
    - **`components/`**：存放 React 组件，通常每个组件都会有一个独立的文件。
    - **`App.js`**：主应用组件，通常是整个应用的入口组件，负责渲染其他子组件。
    - **`index.js`**：项目的入口文件，通常用于将根组件渲染到页面上。
4. **`package.json`**：项目的配置文件，包含项目的依赖、脚本、版本等信息。在这里可以配置项目的启动命令、构建命令等。
5. **`package-lock.json`**：锁定安装时的依赖版本，确保在不同环境中安装的依赖版本一致。
6. **`README.md`**：项目的说明文档，通常包含项目的介绍、安装方法、使用说明等信息。

这只是一个简单的示例文件结构，实际项目中可能会根据项目规模、团队约定等有所不同。React 项目的文件结构可以根据个人或团队的喜好和需求进行调整和扩展。



### 1. index.js 介绍 - GPT

```react
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('myRoot'));
root.render(
  <React.StrictMode>
    <App subject="Clarice"/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
```

这段代码使用了 React 18 中的新特性之一——Concurrent Mode，其中使用了 `ReactDOM.createRoot` 方法来创建一个根 `Root` 对象。这个 `Root` 对象可以用来异步渲染 React 组件，实现更好的性能和用户体验。

下面是对代码中不同部分的说明：

1. **`const root = ReactDOM.createRoot(document.getElementById('myRoot'));`**：这行代码创建了一个根 `Root` 对象，并将其挂载到 id 为 `myRoot` 的 DOM 元素上。这意味着将使用 Concurrent Mode 异步渲染这个根 `Root` 对象中的 React 组件。
2. **`root.render( ... );`**：这行代码调用了 `root` 对象的 `render` 方法，用于渲染 React 组件到指定的根元素上。
3. **`<React.StrictMode>`**：这是一个 React 组件，用于在开发模式下进行严格模式检查。它可以帮助检测潜在的问题，并发出警告。在生产环境中，`React.StrictMode` 不会产生任何效果。
4. **`<App subject="Clarice"/>`**：这里渲染了一个名为 `App` 的组件，并传递了一个名为 `subject` 的 prop，其值为 `"Clarice"`。这样，在 `App` 组件内部就可以通过 `props.subject` 来访问这个 prop 的值。

总的来说，这段代码利用 React 18 的 Concurrent Mode 功能，通过 `ReactDOM.createRoot` 创建了一个根 `Root` 对象，并使用 `root.render` 方法将 `<App>` 组件渲染到指定的 DOM 元素上。同时，使用 `<React.StrictMode>` 组件可以帮助开发者在开发模式下发现潜在的问题。



#### a. `reportWebVitals()` - GPT

`reportWebVitals()` 函数是一个用于报告 Web Vitals 指标的函数，通常用于监测和报告关于网站性能的重要指标。这个函数通常在 React 项目中的 `index.js` 文件中被调用，用于捕获和报告关于网站性能的数据。

在一个典型的 React 项目中，你可能会在 `index.js` 文件中看到以下代码：

```react
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
```

在这段代码中，`reportWebVitals()` 函数被调用，以便在页面加载时开始捕获关于网站性能的数据。这些数据通常包括诸如页面加载时间、交互性能等指标，用于评估网站的整体性能表现。

`reportWebVitals()` 函数通常与一些工具（如Google的Web Vitals）一起使用，这些工具可以帮助开发者监测和改善网站性能，提供更好的用户体验。通过使用这些工具，开发者可以了解网站在不同方面的性能表现，并根据数据采取相应的优化措施。



### 2. App.js 介绍

* [探索第一个 React 组件 — `App`](https://developer.mozilla.org/zh-CN/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_getting_started#探索第一个_react_组件_—_app)

#### a. 精简版 - GPT

下面是一个简单的 React 应用中的 `App.js` 文件的示例代码，以及对代码中不同部分的说明：

```jsx
import React from 'react';

function App() {
  return (
    <div>
      <h1>Hello, React!</h1>
      <p>This is a simple React application.</p>
    </div>
  );
}

export default App;
```

在这段代码中，有几个重要的部分需要说明：

1. **`import React from 'react';`**：这行代码导入了 React 模块，因为在这个文件中我们使用了 JSX 语法，而 JSX 会被转译成 `React.createElement` 调用，所以需要导入 React 模块。

2. **`function App() { ... }`**：这是一个函数组件的定义，函数组件是一种无状态组件，它接收一个 `props` 对象作为参数，并返回一个 React 元素（通常是一个虚拟 DOM 结构）。

3. **`return ( ... );`**：函数组件的返回部分，这里返回了一个包含两个元素的 `<div>` 元素。在 React 中，组件的返回值通常是一个包含 JSX 元素的结构，用于描述组件的 UI。

4. **`<h1>Hello, React!</h1>`** 和 **`<p>This is a simple React application.</p>`**：这是两个 JSX 元素，分别表示一个标题和一个段落。在 JSX 中，使用类似 HTML 的语法来描述 UI 结构。

5. **`export default App;`**：最后一行导出了 `App` 组件，使其可以在其他文件中被引入和使用。通过 `export default`，我们可以在其他文件中直接导入 `App` 组件。

总的来说，`App.js` 文件通常是一个 React 应用的主入口文件，定义了应用的根组件，负责渲染应用的整体结构。在实际项目中，`App.js` 可能会包含更多复杂的逻辑和多个子组件，用于构建完整的 React 应用。



#### b. [import 语句](https://developer.mozilla.org/zh-CN/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_getting_started#import_语句)

```react
import React from "react";
import logo from "./logo.svg";
import "./App.css";
```

* 第一句代码引入了 React 库，这是为了将代码中的 JSX 语句转为`React.createElement()`，所有的 React 模块都应该引入 React 模块，否则会抛错。

* 第二句代码引入了 `'./logo.svg'`。注意文件路径以 `./` 开头、由 `.svg` 尾——表明这是一个本地文件，并且它不是 JavaScript 文件。

* 第三行引入了我们的组件所需的 CSS 文件。与上面两句不同，这里没有将引入的内容赋给任何变量、也没有用到 `from` 指令。请注意这种特殊的语法并非原生 JS 的语法——它源自前端资源打包工具 webpack，而 create-react-app 正是基于 webpack 配置而来的。
    * **备注：** 译者补充：webpack 可用于打包 JS 和非 JS 的内容 (当然，非 JS 的内容需要一些插件或加载器来处理)，但是 JavaScript 标准只有关于 JS 的内容，所以 webpack 社区使用这种特殊的 `import` 语句来声明对非 JS 内容的引用。



#### c. [`App` 组件](https://developer.mozilla.org/zh-CN/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_getting_started#app_组件)

**React 组件使用帕斯卡命名法，如“HelloWorld”，来帮助用户辨认一个 JSX 元素是 React 组件而非普通的 HTML 标签。**

**App 方法返回一个 JSX 表达式，这个表达式定义了浏览器最终要渲染的 DOM。**

```react
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer">
          Learn React
        </a>
      </header>
    </div>
  );
}
```

表达式中的元素就像以前写的 HTML 一样，都拥有属性，并且遵循 `attribute="value"` 的模式。在第三行，开始标签 [div](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/div) 有着 `className` 属性。这个属性与在 HTML 中的 [`class`](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Global_attributes/class) 属性相同，但是由于 JSX 就是 JavaScript, 我们不能使用 `class` 属性 - 这个是关键字，意味着 JavaScript 已经用它执行其他任务，使用 `class` 属性将会在我们的代码中产生冲突。由于同样的原因，一些其他的 HTML 属性在 JSX 中也有着不同的书写方式，当我们碰到它们时，我们将会详述。



#### d. [Export 语句](https://developer.mozilla.org/zh-CN/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_getting_started#export_语句)

**在 `App.js` 文件的最底部， `export default App` 语句使得 `App` 组件能被其他模块使用。**



### 3. Index 

现在让我们打开 `src/index.js`, 因为这也是 `App` 组件被用到的地方。这个文件是我们 app 的 **入口点**，在一开始它如下所示

```js
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('myRoot'));
root.render(
  <React.StrictMode>
    <App subject="Clarice 我是传参！"/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
```

#### a. import

就像 `App.js` 一样，这个文件一开始 import 了所有的 JS 模块和其他运行所需要的资源。

* `src/index.css`定义了运用于整个 app 的 global style。
* 我们可以看到我们的 `App` 组件也被 imported 了，这是在 `App.js` 底部的语句让 import `App` 变得可行。



#### b. ReactDom.render()

第七行调用 React 的 `ReactDOM.render()` 函数，并传入两个参数：

- 我们想要渲染的组件，在这个例子中是 `<App />` .
- 我们想要渲染组件所在的 DOM 元素，在这个例子中是带着 `root` 标签的元素。让我们看一下 `public/index.html` 的代码，可以看到这有一个 `<div>` 元素 在 `<body>` 里。

上述所有都告诉 React 我们想把 `App` 组件作为 root 或者第一个组件来渲染我们的 React App。



### 4. [Variables in JSX](https://developer.mozilla.org/zh-CN/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_getting_started#variables_in_jsx)

#### a. 变量

 `App.js`, 让我们看一下第 9 行：

```
<img src={logo} className="App-logo" alt="logo" />
```

可以看到，`<img />` 标签的 `src` 属性值是在大括号中的——`{logo}`。这是 JSX 识别变量的方式。React 将会识别 `{logo}`，知道你在我们 app 第二行引入的 logo，然后 React 会读取这个文件它并渲染。



#### b. 自己写一个变量

让我们试着设置一个我们自己的变量，在 `App` return 之前，添加 `const subject = 'React';`。你的代码现在应该如下所示：

```react
function App() {
  const subject = "React";
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello, World!</p>   	// 【注意】
      </header>
    </div>
  );
}
```

修改后：

```react
function App() {
  const subject = "React";
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello, {subject}!</p>      // 【注意】
      </header>
    </div>
  );
}
```



### 5. 传参

index.js

```react
ReactDOM.render(<App subject="Clarice" />, document.getElementById("root"));
```

App.js

```react
function App(props) {
  const subject = props.subject;
  console.log(props);
  return (
    // return statement
  );
}
```











