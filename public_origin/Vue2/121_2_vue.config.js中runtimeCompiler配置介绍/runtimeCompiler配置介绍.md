* [VueCLI官网 - runtimecompiler](https://cli.vuejs.org/zh/config/#runtimecompiler)

# runtimeCompiler配置项

`runtimeCompiler: true` 这个配置项的作用是**启用 Vue 的运行时模板编译器**。

详细解释如下：

1. **默认情况下**，Vue CLI 构建出来的包使用的是运行时版本（runtime-only），它**不包含模板编译器**。也就是说，组件中的 template 选项会在构建时被预编译成 render 函数，运行时只负责渲染。

2. **当你需要在运行时动态编译模板**（比如：你在代码里用 `new Vue({ template: '<div>{{ msg }}</div>' })`，或者用 `component :is="xxx"` 加载字符串模板），就需要用到带编译器的版本（runtime + compiler）。

3. **设置 `runtimeCompiler: true` 后**，Vue CLI 会自动将 `vue$` 的别名指向 `vue/dist/vue.esm.js`（即包含编译器的版本），这样你就可以在运行时动态编译模板了。

4. **缺点**：启用后，打包体积会变大，因为多引入了编译器相关的代码。

**总结：**
- `runtimeCompiler: true` 让你可以在运行时编译模板字符串。
- 适用于需要动态模板的场景。
- 会增加最终包的体积，建议只在确实需要时开启。

如果你只用 `.vue` 文件和单文件组件（SFC），一般不需要开启这个选项。





## 等价于 configureWebpack配置

```javascript
const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  
  // 
  runtimeCompiler: true, // 启用模板编译器（会增加包体积）
  
  // 等价于
  configureWebpack: {
    resolve: {
      alias: {
        vue$: 'vue/dist/vue.esm.js'
      }
    }
  },
})
```



## 遇到的实际问题 Vue.extend 无法渲染 template 

* 具体请查看：109_Vue2中Vue.extend介绍