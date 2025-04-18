[TOC]

# 参考文档

[Vue-Router官网](https://router.vuejs.org/zh/)



# 1. Vue-Router的使用过程

1. [创建路由器实例](https://router.vuejs.org/zh/guide/#创建路由器实例)

路由器实例是通过调用 `createRouter()` 函数创建的:

```js
import { createMemoryHistory, createRouter } from 'vue-router'

import HomeView from './HomeView.vue'
import AboutView from './AboutView.vue'

const routes = [
  { path: '/', component: HomeView },
  { path: '/about', component: AboutView },
]

const router = createRouter({
  history: createMemoryHistory(),
  routes,
})
```

2. [注册路由器插件](https://router.vuejs.org/zh/guide/#注册路由器插件)

一旦创建了我们的路由器实例，我们就需要将其注册为插件，这一步骤可以通过调用 `use()` 来完成。

```js
// 和大多数的 Vue 插件一样，use() 需要在 mount() 之前调用。

createApp(App)
  .use(router)
  .mount('#app')
```



# 2. Vue-Router的职责包括?

1. [全局注册](https://cn.vuejs.org/guide/components/registration.html#global-registration) `RouterView` 和 `RouterLink` 组件。
2. 添加全局 `$router` 和 `$route` 属性。
3. 启用 `useRouter()` 和 `useRoute()` 组合式函数。
4. 触发路由器解析初始路由。





# 3. `$router` 和 `$route` 区别？

在Vue.js中，`$router` 和 `$route` 都是Vue Router库中的属性，它们用于路由管理，但有不同的用途和功能。以下是它们的区别：

### `$router`

`$router` 是 Vue Router 实例，包含导航的方法和路由的配置。

- **导航方法**: 允许你在代码中进行编程式导航，比如使用 `push`、`replace` 等方法。
- **访问路由对象**: 你可以通过 `$router` 访问路由器的其他功能，比如获取当前的路由配置、添加导航守卫等。

示例：
```javascript
// 在组件方法中
this.$router.push('/new-route');

// 替换当前路由，不会记录到浏览器的历史记录中
this.$router.replace('/another-route');
```

### `$route`

`$route` 是当前激活的路由对象，包含了当前路由的信息，比如路径、参数、查询字符串等。

- **路径信息**: 获取当前路由的路径、名称等信息。
- **参数和查询**: 访问当前路由的参数（`params`）和查询字符串（`query`）。
- **路由元信息**: 访问路由定义中的元信息（`meta`）。

示例：
```javascript
// 获取当前路径
console.log(this.$route.path);

// 获取当前路由的参数
console.log(this.$route.params.id);

// 获取当前路由的查询字符串
console.log(this.$route.query.search);

// 访问路由的元信息
console.log(this.$route.meta.requiresAuth);
```

### 总结

- `$router`:
  - 是 Vue Router 实例。
  - 提供导航方法（如 `push`、`replace`）。
  - 允许访问和操作全局路由配置和导航守卫。

- `$route`:
  - 是当前激活的路由对象。
  - 提供当前路由的详细信息（如路径、参数、查询字符串）。
  - 包含路由的元信息。

在实际开发中，`$router` 通常用于编程式导航，而 `$route` 则用于获取和处理当前路由的信息。



## 对比

要知道可以通过 `useRouter()` 和 `useRoute()` 来访问路由器实例和当前路由。

```js
<script setup>
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const router = useRouter()
const route = useRoute()

const search = computed({
  get() {
    return route.query.search ?? ''
  },
  set(search) {
    router.replace({ query: { search } })
  }
})
</script>
```



# 4. 组合式 vs 选项式 中访问路由器实例

在组合式 API 中，它可以通过调用 `useRouter()` 来访问。在选项式 API 中，它可以通过 `this.$router` 来访问。



#[`RouterView` 和 `RouterLink`](https://router.vuejs.org/zh/guide/#RouterView-和-RouterLink)

组件 `RouterView` 和 `RouterLink` 都是[全局注册](https://cn.vuejs.org/guide/components/registration.html#global-registration)的，因此它们不需要在组件模板中导入。但你也可以通过局部导入它们，例如 `import { RouterLink } from 'vue-router'`。

















