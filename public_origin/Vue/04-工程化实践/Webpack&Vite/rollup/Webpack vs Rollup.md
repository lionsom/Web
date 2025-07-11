# Webpack vs Rollup



Webpack 和 Rollup 都是 JavaScript 的模块打包工具（bundler），它们的主要作用是将项目中的各种资源（如 JS、CSS、图片等）打包成浏览器可以直接加载的文件。它们之间的关系和区别如下：

### 共同点
- **都是打包工具**：都可以将多个模块（ESM、CommonJS、AMD等）打包成一个或多个文件。
- **支持插件和扩展**：都可以通过插件系统扩展功能。
- **支持 Tree Shaking**：都能移除未使用的代码，减小打包体积。

### 区别
| 方面         | Webpack                         | Rollup                       |
| ------------ | ------------------------------- | ---------------------------- |
| 设计目标     | 面向应用（App）                 | 面向库（Library）            |
| 配置复杂度   | 配置较复杂，功能强大            | 配置简单，专注于打包 ES 模块 |
| 输出格式     | 支持多种格式（UMD、AMD、CJS等） | 主要支持 ES Module 和 CJS    |
| Tree Shaking | 支持，但效果不如 Rollup         | Tree Shaking 效果更好        |
| 生态         | 插件、Loader 丰富，社区庞大     | 插件较少，社区较小           |
| 性能         | 适合大型项目，支持代码分割      | 打包体积更小，适合打包库     |

### 关系
- **没有直接的依赖或包含关系**，但它们都属于前端构建工具生态，解决类似的问题。
- 有些项目会根据需求选择其中之一，甚至有些库会用 Rollup 打包核心代码，再用 Webpack 处理应用层代码。

### 总结
Webpack 更适合复杂的前端应用开发，Rollup 更适合打包 JavaScript 库。两者各有优势，选择时可根据项目需求决定。