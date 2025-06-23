# 一. this.$router 是什么？为什么可以直接调用

在Vue2组件中，无需任何导入，可以直接调用：

```js
this.$router.push('/demos');
```

为什么？



## 原因

在 Vue 2 中，`this.$router` 是 Vue Router 在全局（根实例）中注入的一个全局属性，它代表当前路由实例。也就是说，当您在 Vue 的入口文件（例如 `main.js`）中通过 `Vue.use(Router)` 注册 Vue Router 后，Vue Router 会自动在全局（根实例）中注入一个名为 `$router` 的属性，这样在任意组件中，您就可以通过 `this.$router` 来访问路由实例，从而进行路由跳转（例如调用 `this.$router.push(...)`）等操作。

简单来说，`this.$router` 是 Vue Router 在全局（根实例）中注入的一个全局属性，因此您可以在任意组件中直接调用它。



## 组件中的this是指什么？

在 Vue 组件中，`this` 通常指向当前组件的实例。也就是说，在 `goToRouter` 方法中，`this` 就是当前 `header.vue` 组件的实例。因此，`this.$router` 实际上就是访问当前组件实例上的全局属性 `$router`，也就是 Vue Router 在全局（根实例）中注入的路由实例。





# 二. 组件为什么可以直接访问到路由全局属性

在 Vue 2 中，组件可以通过 `this.$router` 访问路由实例，这背后是 Vue 的 **全局属性注入机制** 和 **插件系统** 共同作用的结果。以下是详细原理：

---

## 1. **Vue 插件安装机制**
当使用 `Vue.use(VueRouter)` 时，会调用 VueRouter 的 `install` 方法：
```javascript
// VueRouter 源码片段
function install(Vue) {
  // 防止重复安装
  if (install.installed && _Vue === Vue) return;
  install.installed = true;
  
  _Vue = Vue;
  
  // 通过全局混入注入路由逻辑
  Vue.mixin({
    beforeCreate() {
      // 判断是否是根组件
      if (this.$options.router) {
        this._routerRoot = this;
        this._router = this.$options.router;
        this._router.init(this); // 初始化路由
        // 设置响应式路由对象
        Vue.util.defineReactive(this, '_route', this._router.history.current);
      } else {
        // 子组件继承父组件的路由上下文
        this._routerRoot = (this.$parent && this.$parent._routerRoot) || this;
      }
    }
  });
  
  // 定义 $router 和 $route 属性
  Object.defineProperty(Vue.prototype, '$router', {
    get() { return this._routerRoot._router }
  });
  
  Object.defineProperty(Vue.prototype, '$route', {
    get() { return this._routerRoot._route }
  });
}
```

---

## 2. **核心实现步骤**
### (1) **全局混入 (Mixin)**
- 通过 `Vue.mixin` 在所有组件 `beforeCreate` 生命周期注入路由逻辑
- **根组件**：直接从 `new Vue({ router })` 的配置中获取 router 实例
- **子组件**：通过原型链访问父组件的 `_routerRoot`

### (2) **原型属性定义**
```javascript
Object.defineProperty(Vue.prototype, '$router', {
  get() { return this._routerRoot._router }
});
```
- 将 `$router` 定义为 Vue 原型上的访问器属性
- 访问时实际获取的是当前组件树的根组件上的 `_router` 实例

### (3) **上下文传递**
```
根组件 (this._routerRoot)
  └─ 父组件
      └─ 当前组件 (this.$router 向上查找到根组件的 _router)
```

---

## 3. **为什么能直接访问？**
- **原型链继承**：所有 Vue 组件实例都继承自 `Vue.prototype`
- **上下文传递**：通过组件树层级关系向上查找根组件的路由实例
- **响应式访问**：使用 `Object.defineProperty` 确保每次访问都是最新值

---

## 4. **手动实现简化版**
```javascript
// 模拟插件安装
const MyRouter = {
  install(Vue) {
    Vue.mixin({
      beforeCreate() {
        if (this.$options.router) {
          this._routerRoot = this;
          this._router = this.$options.router;
        } else {
          this._routerRoot = this.$parent?._routerRoot || this;
        }
      }
    });
    
    Object.defineProperty(Vue.prototype, '$myRouter', {
      get() { return this._routerRoot._router }
    });
  }
};

// 使用插件
Vue.use(MyRouter);

// 根实例
new Vue({
  router: new Router({ /* 配置 */ }),
  render: h => h(App)
});

// 任意组件内
export default {
  mounted() {
    console.log(this.$myRouter); // 访问路由实例
  }
}
```

---

## 5. **对比其他全局属性**
| 属性            | 注入方式                 | 访问原理              |
| --------------- | ------------------------ | --------------------- |
| `this.$router`  | VueRouter 插件           | 原型链 + 组件树上下文 |
| `this.$store`   | Vuex 插件                | 同上                  |
| `this.$http`    | 手动挂载到 Vue.prototype | 直接原型继承          |
| `this.$message` | UI 库组件挂载            | 原型方法              |

---

## 6. **注意事项**
1. **必须在根实例配置 router**：
   ```javascript
   new Vue({
     router, // 必须传入
     store,
     render: h => h(App)
   }).$mount('#app')
   ```

2. **异步组件问题**：
   - 在异步组件的 `setup` 或 `beforeCreate` 中访问 `this.$router` 可能为 `undefined`
   - 解决方案：使用 `import { useRouter } from 'vue-router'` (Vue 3) 或确保在 `mounted` 后访问

3. **TS 类型支持**：
   ```typescript
   // vue-router.d.ts
   declare module 'vue/types/vue' {
     interface Vue {
       $router: VueRouter;
       $route: Route;
     }
   }
   ```

---

## 7. 总结
Vue 2 中 `this.$router` 的访问能力是通过：
1. 路由插件在 `install` 阶段全局混入初始化逻辑
2. 在 Vue 原型上定义访问器属性
3. 利用组件树上下文传递根组件路由实例
实现的典型 **插件注入模式**，体现了 Vue "约定优于配置"的设计哲学。