# 基本概念

##React 和 React Native 对比 - GPT

React 和 React Native 之间有着密切的关系，同时也存在一些区别。

关系：

- React 是一个用于构建用户界面的 JavaScript 库，它的核心概念是组件化。开发者可以使用 React 来构建 Web 应用程序的用户界面。
- React Native 是建立在 React 基础之上的框架，它允许开发者使用 React 的组件模型来构建原生移动应用。开发者可以使用 React Native 来编写一套代码，然后在 iOS 和 Android 平台上都能够运行。

区别：

1. 平台差异：React 主要用于构建 Web 应用程序，而 React Native 则专注于构建原生移动应用。
2. 渲染机制：在 Web 应用中，React 使用浏览器的 DOM 进行渲染，而 React Native 使用原生的 UI 组件进行渲染。
3. API 差异：React 提供了一些用于处理 Web 应用的特定 API，而 React Native 则提供了一套用于处理移动应用的 API，如处理原生控件、访问设备功能等。

总之，React 是用于构建 Web 应用程序的用户界面的 JavaScript 库，而 React Native 是建立在 React 基础之上的框架，专注于构建原生移动应用。它们的核心思想都是组件化，但在目标平台、渲染机制和提供的 API 等方面存在一些差异。



## Vue 与 React 区别

* [知乎 - 谁能大致说下vue和react的最大区别之处？](https://www.zhihu.com/question/309891718)
* [Vue vs React：你需要知道的一切 ](https://www.cnblogs.com/chuckQu/p/17692452.html)
* [个人理解Vue和React区别](https://lq782655835.github.io/blogs/vue/diff-vue-vs-react.html)
* [vue和react区别](https://worktile.com/kb/ask/19606.html)
* [带你了解React框架，介绍，入门，以及React的开发依赖介绍](https://juejin.cn/post/7242007082920132664)



## JS框架 vs JS库 - GPT

JavaScript框架（Framework）和JavaScript库（Library）之间的区别在于它们在代码组织和控制流方面的不同。

1. **框架（Framework）**：
    - 一个框架是一个完整的解决方案，它提供了一整套工具、规范和结构，用于帮助开发人员构建应用程序。
    - 框架通常具有一定的约定和规则，开发者需要按照框架提供的方式来组织代码和实现功能。
    - 框架通常控制应用程序的整个生命周期，包括数据流、路由管理、状态管理等方面。
    - 一些流行的JavaScript框架包括Angular、React（虽然React更像是一个库，但通常与其他库结合使用形成框架）、Vue等。
2. **库（Library）**：
    - 一个库是一组函数和工具的集合，用于执行特定的任务或提供特定的功能。
    - 库通常是可选的，开发者可以根据需要选择性地使用库中的功能，而不需要遵循严格的约定。
    - 库通常不控制应用程序的整体结构，开发者可以自由地选择如何使用库。
    - 一些流行的JavaScript库包括jQuery、Lodash、Moment.js等。

总的来说，框架更像是一个完整的建筑蓝图，提供了一整套解决方案和工具，而库更像是工具箱，提供了各种工具供开发者选择和使用。开发者可以根据项目的需求和个人偏好选择使用框架或库。

### Vue框架???

```
Vue（Vue.js）是一个JavaScript框架，专注于构建用户界面。它是一个开源的、渐进式的框架，由尤雨溪（Evan You）创建并维护。Vue被设计为易于上手，同时也能支持构建复杂的单页面应用（SPA）。

Vue提供了一套响应式的数据绑定和组件化的系统，使开发者能够更轻松地构建交互性强、易于维护的前端应用。Vue的核心库只关注视图层，因此它可以轻松地与其他库或项目整合。

总的来说，Vue是一个前端框架，它提供了一系列工具和功能，帮助开发者更高效地构建现代化的Web应用程序。
```

### React库???

```
React 是一个用于构建用户界面的JavaScript库，而不是一个完整的框架。React由Facebook开发并维护，它专注于构建可重用的UI组件，使得构建大型、高性能的Web应用变得更加简单。

与传统的框架（如Angular）不同，React只关注视图层，它提供了一种声明式的方式来描述用户界面，并通过虚拟DOM技术实现高效的UI更新。React并没有提供像路由管理、状态管理等完整的解决方案，而是鼓励开发者结合其他库来构建完整的应用程序。

虽然React本身只是一个库，但是由于其强大的生态系统和社区支持，开发者可以轻松地整合其他库和工具来构建复杂的前端应用。因此，尽管React不是一个框架，但它在构建现代Web应用方面具有非常强大的能力。
```



# React

* [MDN - React入门](https://developer.mozilla.org/zh-CN/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_getting_started)

## React是什么

[React](https://reactjs.org/) 是一个用于构建用户界面的库。React 不是一个框架——它的应用甚至不局限于 Web 开发，它可以与其他库一起使用以渲染到特定环境。例如，[React Native](https://reactnative.dev/) 可用于构建移动应用程序；[React 360](https://facebook.github.io/react-360/) 可用于构建虚拟现实应用程序……



##  JSX 

JSX 代表 `JavaScript XML`。JSX 允许我们在 React 中编写 HTML。JSX 使在 React 中编写和添加 HTML 变得更加容易。

浏览器是无法读取直接解析 JSX 的。我们的 header 表达式经过（ [Babel](https://babeljs.io/) 或 [Parcel](https://parceljs.org/) 之类的工具）编译。

* [MDN - React 如何使用 JavaScript?](https://developer.mozilla.org/zh-CN/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_getting_started#react_如何使用_javascript)

* [JSX In Depth](https://reactjs.org/docs/jsx-in-depth.html)







