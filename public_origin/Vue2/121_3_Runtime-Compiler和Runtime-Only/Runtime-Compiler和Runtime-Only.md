

# 一、**Runtime + Compiler** 和 **Runtime Only** 对比

在 Vue 2 中，**Runtime + Compiler** 和 **Runtime Only** 是两种不同的构建版本，主要区别在于 **模板编译的时机** 和 **打包体积**。以下是它们的核心区别和适用场景：

---

### **1. 核心区别**
| **特性**         | **Runtime + Compiler**                           | **Runtime Only**                           |
| ---------------- | ------------------------------------------------ | ------------------------------------------ |
| **模板编译时机** | 在浏览器运行时编译模板（动态编译）               | 在构建阶段预编译模板（静态编译）           |
| **打包体积**     | 较大（包含编译器代码）                           | 较小（减少约 30%）                         |
| **性能**         | 稍慢（需浏览器实时编译）                         | 更快（提前编译，直接渲染）                 |
| **使用场景**     | 需要动态编译模板（如从字符串或用户输入生成模板） | 推荐大多数项目（使用 `.vue` 文件或预编译） |

**更多细节：**

* runtime+compiler 和 runtime-only的区别：**只在main.js 不同**

* runtime+compiler：template --> ast(abstract syntax tree:抽象语法数) --> render函数 --> vdom(virtual 虚拟dom) -->UI

* runtime-only：render函数 --> vdom(virtual 虚拟dom) --> UI

---

### **2. 技术细节**
#### **(1) Runtime + Compiler**
- **工作原理**： 
  包含一个 **模板编译器**，可以将 `template` 字符串（如 `template: '<div>{{msg}}</div>'`）在浏览器中实时编译为渲染函数。
- **代码示例**：
  ```javascript
  new Vue({
    template: '<div>{{ message }}</div>',  // 浏览器中动态编译
    data: { message: 'Hello' }
  }).$mount('#app');
  ```
- **缺点**：  
  - 增加客户端负担（需下载并执行编译器代码）。  
  - 不支持 `template` 选项的 CSP（内容安全策略）限制环境。

#### **(2) Runtime Only**
- **工作原理**： 
  依赖构建工具（如 Webpack + `vue-loader`）在打包阶段将 `.vue` 文件的 `<template>` 块预编译为 **渲染函数**，浏览器直接执行渲染函数。
- **代码示例**：
  ```javascript
  new Vue({
    render: h => h(App)  // 直接使用预编译的渲染函数
  }).$mount('#app');
  ```
- **优点**：  
  - 更小的体积（移除编译器代码）。  
  - 更好的性能（跳过运行时编译）。  
  - 支持 CSP 环境。

---

### **3. 如何选择？**
- **使用 Runtime Compiler** 的场景：  
  - 需要动态生成模板（如从后端获取模板字符串）。  
  - 未使用构建工具（直接通过 CDN 引入 Vue，并在 HTML 中写模板）。

- **使用 Runtime Only** 的场景（推荐）：  
  - 使用 `.vue` 单文件组件（SFC）。  
  - 使用 Webpack、Vite 等构建工具（通过 `vue-loader` 或 `@vitejs/plugin-vue` 预编译模板）。  
  - 追求更小的打包体积和更好的性能。

---

### **4. 手动配置 Runtime + Compiler**
#### **(1) Vue CLI 项目**
默认生成的是 **Runtime Only** 版本。如果需要切换到 Runtime + Compiler，可以修改 `vue.config.js`：

a. 修改 `vue.config.js

```javascript
module.exports = {
  runtimeCompiler: true,  // 启用 Runtime + Compiler
};
```

b. 修改 `main.js`

```javascript
import Vue from 'vue/dist/vue.esm.js'  // 显式引入带编译器的 Vue 版本
new Vue({
  template: '<App/>',
  components: { App }
}).$mount('#app')
```

#### **(2) 直接引入 Vue**

通过 CDN 引入时，需明确选择版本：
```html
<!-- Runtime + Compiler -->
<script src="https://cdn.jsdelivr.net/npm/vue@2.6.14/dist/vue.js"></script>

<!-- Runtime Only -->
<script src="https://cdn.jsdelivr.net/npm/vue@2.6.14/dist/vue.runtime.min.js"></script>
```

---

### **5. 底层原理**
- **Compiler 的作用**：  
  将模板字符串（如 `<div>{{msg}}</div>`）转换为 JavaScript 渲染函数（`render()`）。
- **Runtime 的作用**：  
  执行渲染函数生成虚拟 DOM，并处理响应式数据、生命周期等核心功能。

---

### **6. 示例对比**
#### **Runtime + Compiler**
```javascript
// 需要编译器
new Vue({
  template: '<div>{{ message }}</div>',  // 动态编译
  data: { message: 'Hello' }
}).$mount('#app');
```

#### **Runtime Only**
```javascript
// 预编译为渲染函数，无需编译器
new Vue({
  render(h) {
    return h('div', this.message);  // 直接渲染
  },
  data: { message: 'Hello' }
}).$mount('#app');
```

---

### **总结**
- **推荐大多数项目使用 Runtime Only**：更小的体积、更好的性能。  
- **仅特殊场景使用 Runtime + Compiler**：如需要动态模板或未用构建工具。  
- **Vue 3 的改进**：Vue 3 已完全分离编译器，通过 `@vue/compiler-sfc` 独立处理模板编译。



