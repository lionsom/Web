[npx 使用教程](https://www.ruanyifeng.com/blog/2019/02/npx.html)



# 一、npx介绍

npm 从5.2版开始，增加了 npx 命令。

* Node 包括

    * npm（Node 程序包管理器）

    * npx（Node 程序包运行器）

Node 自带 npm 模块，所以可以直接使用 npx 命令。万一不能用，就要手动安装一下。

```sh
$ npm install -g npx
```



## GPT

**`npx` 是 npm 5.2.0 版本引入的一个命令行工具，它用于在不安装全局包的情况下运行 Node.js 包。`npx` 的作用是临时安装和运行包，而不会将包安装到全局环境中。这样可以避免全局安装一些只需要偶尔使用的工具，同时也能确保使用的是最新版本。**

使用 `npx` 的主要优点包括：

1. **临时安装**：`npx` 可以临时安装需要的包，而不会将其安装到全局环境中，避免了全局污染。
2. **自动查找**：`npx` 会自动查找本地项目中安装的可执行文件，如果找不到，则会从 npm 仓库中下载最新版本。

使用 `npx` 的基本语法如下：

```sh
$ npx <command>
```

例如，要运行 `create-react-app` 这个包，而不需要全局安装它，可以使用以下命令：

```sh
$ npx create-react-app my-react-app
```

这将临时安装 `create-react-app` 包，并使用它创建一个名为 `my-react-app` 的新 React 应用程序。

除了直接运行包，`npx` 还可以执行本地安装的命令，比如：

```sh
$ npx jest
```

这将在项目中查找并运行本地安装的 Jest 测试运行器。

总的来说，`npx` 是一个方便的工具，可以帮助你在不安装全局包的情况下运行 Node.js 包和命令。



# 二、npx使用场景

## 场景一：临时使用包

﻿﻿临时安装软件包执行后删除软件包
有些提供命令的软件包使用的频率并不高，比如 create-react-app 脚手架工具，我能不能临时下载使用，然后再删掉它。

```sh
$ npx create-react-app react-test
```



## 场景二：执行本地安装的软件包

全局 `ts-node` 无

本地 `ts-node` 有

`$ ts-node test.ts` 失败

`$ npx ts-node test.ts` 成功









