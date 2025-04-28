* [执行 npm run serve 时发生了什么？](https://blog.csdn.net/why_1639946449/article/details/137555677)
* [vue项目中npm run dev和npm run serve的区别分析](https://www.cnblogs.com/amboke/p/16654813.html)









在[前端开发](https://so.csdn.net/so/search?q=前端开发&spm=1001.2101.3001.7020)中，`npm run serve` 是一个常见的命令，尤其是在使用 Vue CLI 构建项目时。但是为什么直接运行 `vue-cli-service serve` 会报错，但使用 `npm run serve` 却可以成功启动项目呢？

# npm scripts 的基本原理

先回顾一下 `npm` 命令的基本原理。在 `package.json` 文件中的 `"scripts"` 字段允许我们定义一组自定义的命令。例如：

```cobol
"scripts": {
  "start": "node index.js",
  "serve": "vue-cli-service serve",
  // 其他命令...
}
```

这里 `"serve"` 就是我们需要执行的命令，其对应的值是执行 `vue-cli-service serve`。运行 `npm run serve` 实际上是在执行 `vue-cli-service serve` 命令。

# 为什么直接运行 vue-cli-service serve 会报错？

直接运行 `vue-cli-service serve` 会导致错误的主要原因在于 `vue-cli-service` 不是一个全局可执行命令，而是作为项目依赖安装在项目的 `node_modules` 中。

运行 `vue-cli-service serve` 时，操作系统并不知道去哪里找这个命令。而通过 `npm run serve`，我们在 `package.json` 的 `"scripts"` 中定义了 `serve` 对应的命令是 `vue-cli-service serve`，这时 `npm` 根据查找规则就能够正确找到并执行这个命令。

# **npm run serve 查找规则**

`npm run serve` 的执行过程涉及以下步骤：

- **查找命令**：`npm` 首先在当前项目目录的 `node_modules/.bin` 目录下查找是否存在 `vue-cli-service` 可执行文件。
- **查找全局安装**：如果在项目的 `node_modules/.bin` 中没有找到 `vue-cli-service`，`npm` 会继续在全局 `node_modules/.bin` 目录下查找 `<script>` 对应的可执行文件。
- **执行命令**：找到 `vue-cli-service` 后，`npm` 将执行该命令

这个查找过程确保了我们可以在项目内部或全局的依赖中找到并执行指定的命令，相当于执行了 `./node_modules/.bin/vue-cli-service serve`

# **npm scripts 的命令注入机制**

在执行 `npm run serve` 时，npm 实际上会将项目的 `node_modules/.bin` 目录添加到系统的 PATH 中。这个目录包含了大部分通过 npm install 安装的可执行文件，其中也包括了 `vue-cli-service`。

这样一来，系统就能够在全局范围内找到 `vue-cli-service` 命令，不用在命令行中指定完整的路径。

# **全局安装**

当某个包被全局安装时，其可执行文件也会被放置在全局 `node_modules/.bin `目录中。如果全局的 `node_modules/.bin` 目录也被加入系统的 PATH 中，那么在全局范围内就可以运行该可执行文件。

这种机制使得一些工具和命令行程序能够在任何地方都能被直接调用，而无需指定完整路径。

# **vue-cli-service 来自哪里**

`vue-cli-service` 命令是 [Vue CLI](https://so.csdn.net/so/search?q=Vue CLI&spm=1001.2101.3001.7020) 提供的可执行文件，在项目初始化时会自动创建一个 `.bin` 目录，其中包含了一些项目本地的可执行文件。

当我们通过 Vue CLI 创建一个新的 Vue.js 项目时，它会在项目的 `node_modules/.bin` 目录下创建一个名为 `vue-cli-service`（或者是 `vue-cli-service.cmd`，这取决于你使用的是 Windows 还是其他系统）的可执行文件。

这个可执行文件实际上是指向项目安装的 `@vue/cli-service` 包中的 `bin/vue-cli-service.js` 文件的一个软链接，这个文件是 Vue CLI 提供的命令行工具的入口文件。

当我们在 `package.json` 文件的 `"scripts"` 字段中使用 `vue-cli-service` 命令时，实际上是在调用这个项目本地的可执行文件，而不是全局安装的 Vue CLI。

好处在于每个 Vue.js 项目都可以有自己的 `vue-cli-service` 可执行文件，这样可以确保在不同的项目中使用不同版本的 Vue CLI 而不会相互影响。

# **npm scripts 进阶用法**

除了简单的命令，`npm scripts` 还支持并行执行多个命令，以及通过插件实现更高级的功能。以下是一个使用 `npm-run-all` 插件实现并行执行命令的例子：

```csharp
"scripts": {
  "start": "npm-run-all --parallel task1 task2",
  "task1": "command1",
  "task2": "command2"
}
```

在这个例子中，`npm run start` 将同时执行 `task1` 和 `task2`。













