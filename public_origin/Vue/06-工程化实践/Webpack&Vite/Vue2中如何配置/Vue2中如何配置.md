# vue2项目中配置webpack.config.js 还是配置 vue.config.js？

在 **Vue 2 项目** 中，配置 `webpack.config.js` 还是 `vue.config.js` 取决于你要做的配置内容和是否使用了 Vue CLI 来管理项目。下面是两者的对比及使用场景：

------

### **1. `vue.config.js` 配置**

`vue.config.js` 是 Vue CLI 提供的一个配置文件，专门用于对 Vue 项目的构建和开发进行定制化配置。**Vue CLI** 已经内置了 Webpack 配置，并且通过 `vue.config.js` 进行配置扩展。

#### **适用场景：**

- **Vue CLI 创建的项目**：大部分情况下，Vue CLI 项目通过 `vue.config.js` 来修改 Webpack 配置，尤其是当你只需要调整 Webpack 的一些简单配置时。

#### **常见配置**：

- **修改 Webpack 配置**： 你可以通过 `configureWebpack` 或 `chainWebpack` 来修改 Webpack 配置。

    ```js
    // vue.config.js
    module.exports = {
      configureWebpack: {
        // 修改或扩展 Webpack 配置
        output: {
          filename: '[name].[hash].js'
        }
      },
      chainWebpack: (config) => {
        config.plugin('html').tap(args => {
          args[0].title = 'My Vue App';  // 修改 HTML 模板的标题
          return args;
        });
      }
    };
    ```

- **其他常见配置**：

    - **代理 API 请求**：通过 `devServer.proxy` 配置跨域请求。
    - **修改 CSS 配置**：通过 `css` 配置项来调整 CSS 相关设置。

#### **优点**：

- 更加方便和简洁，适合大多数开发者。
- Vue CLI 会自动处理 Webpack 和其他构建工具的配置，通常只需要关心业务逻辑。

------

### **2. `webpack.config.js` 配置**

`webpack.config.js` 是 Webpack 的标准配置文件，通常用于更细粒度的构建自定义。**如果你是手动搭建的 Webpack 项目**，需要在 `webpack.config.js` 中配置所有 Webpack 相关的内容。

#### **适用场景：**

- **手动搭建的 Vue 2 项目**：如果你的 Vue 2 项目没有使用 Vue CLI，而是自己配置的 Webpack，那么你就需要修改 `webpack.config.js` 来配置构建流程。

#### **常见配置**：

```js
// webpack.config.js
const path = require('path');

module.exports = {
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.js$/,
        loader: 'babel-loader'
      }
    ]
  },
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm.js'
    }
  }
};
```

#### **优点**：

- 完全自定义构建流程，灵活性更高。
- 适合需要深入定制 Webpack 配置的项目，或者不使用 Vue CLI 的项目。

------

### **总结**

- **如果你使用 Vue CLI 创建的项目**，应该优先使用 `vue.config.js` 来配置项目的构建流程和 Webpack 设置。Vue CLI 会为你自动配置 Webpack，`vue.config.js` 主要用于扩展和修改现有配置。
- **如果你是手动搭建 Webpack 配置的 Vue 2 项目**，则应该直接修改 `webpack.config.js`。

大多数情况下，使用 Vue CLI 创建的项目通过 `vue.config.js` 来进行配置就足够了，除非你有特别复杂的需求需要直接调整 Webpack 配置。