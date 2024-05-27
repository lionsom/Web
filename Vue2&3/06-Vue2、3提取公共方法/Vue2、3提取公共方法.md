## Vue2 

在 Vue 2 中，可以通过几种方式提取和复用公共方法。这些方法包括使用混入（Mixins）、插件、自定义指令和全局方法。以下是几种常见的方式：

### 1. 使用混入（Mixins）

混入是 Vue 提供的一种将可复用功能分发到组件中的方式。混入对象可以包含任意组件选项，当组件使用混入对象时，所有混入对象的选项将被混入该组件本身的选项。

#### 示例：

创建一个混入对象：

```javascript
// mixins/commonMethods.js
export const commonMethods = {
  methods: {
    commonMethod() {
      console.log('This is a common method');
    }
  }
};
```

在组件中使用混入：

```javascript
// components/MyComponent.vue
<template>
  <div @click="commonMethod">Click me</div>
</template>

<script>
import { commonMethods } from '../mixins/commonMethods';

export default {
  mixins: [commonMethods],
};
</script>
```

### 2. 使用插件（Plugins）

插件通常用于添加全局功能到 Vue 实例。你可以通过插件将方法添加到 Vue 的原型上，从而在每个组件实例中都能访问这些方法。

#### 示例：

创建一个插件：

```javascript
// plugins/commonMethods.js
export default {
  install(Vue) {
    Vue.prototype.$commonMethod = function() {
      console.log('This is a common method');
    };
  }
};
```

在 Vue 实例中使用插件：

```javascript
// main.js
import Vue from 'vue';
import App from './App.vue';
import commonMethods from './plugins/commonMethods';

Vue.use(commonMethods);

new Vue({
  render: h => h(App),
}).$mount('#app');
```

在组件中使用插件方法：

```javascript
// components/MyComponent.vue
<template>
  <div @click="$commonMethod">Click me</div>
</template>

<script>
export default {
  // 无需额外配置，直接使用 $commonMethod
};
</script>
```

### 3. 使用全局方法

你可以直接在 Vue 的原型上定义全局方法，从而在每个组件实例中都能访问这些方法。

#### 示例：

在 `main.js` 中定义全局方法：

```javascript
// main.js
import Vue from 'vue';
import App from './App.vue';

Vue.prototype.$commonMethod = function() {
  console.log('This is a common method');
};

new Vue({
  render: h => h(App),
}).$mount('#app');
```

在组件中使用全局方法：

```javascript
// components/MyComponent.vue
<template>
  <div @click="$commonMethod">Click me</div>
</template>

<script>
export default {
  // 无需额外配置，直接使用 $commonMethod
};
</script>
```

### 4. 使用自定义指令

如果你的公共方法与 DOM 操作相关，你可以使用自定义指令。

#### 示例：

创建一个自定义指令：

```javascript
// directives/commonDirective.js
export default {
  bind(el, binding) {
    el.addEventListener('click', () => {
      console.log('This is a common directive method', binding.value);
    });
  },
  unbind(el) {
    el.removeEventListener('click');
  }
};
```

在 `main.js` 中注册指令：

```javascript
// main.js
import Vue from 'vue';
import App from './App.vue';
import commonDirective from './directives/commonDirective';

Vue.directive('common', commonDirective);

new Vue({
  render: h => h(App),
}).$mount('#app');
```

在组件中使用指令：

```javascript
// components/MyComponent.vue
<template>
  <div v-common="someValue">Click me</div>
</template>

<script>
export default {
  data() {
    return {
      someValue: 'Hello, Directive!'
    };
  }
};
</script>
```

通过上述方法，可以在 Vue 2 中有效地提取和复用公共方法，从而使代码更加模块化和可维护。













* [深度解析:在vue3中使用自定义Hooks](https://cloud.tencent.com/developer/article/2340523)

* [Vue3 Hooks函数使用及封装思想](https://blog.csdn.net/m0_46846526/article/details/131252270)

* [Vue3必学技巧-自定义Hooks-让写Vue3更畅快](https://juejin.cn/post/7083401842733875208)
* [vue3中当子组件使用defineProps时，如何使用hook函数进行拆分整理代码？](https://blog.csdn.net/Nonametoreurn/article/details/128420687)



## Vue3

在 Vue 3 中，提取和复用公共方法的方式与 Vue 2 有些相似，但也有一些新的方法和最佳实践。以下是几种常见的方式：

### 1. 使用组合式 API（Composition API）- Hooks

组合式 API 是 Vue 3 中的新特性，它使得代码组织更加灵活，可以更容易地提取和复用逻辑。

#### 示例：

创建一个组合函数：

```javascript
// composables/useCommonMethod.js
import { ref } from 'vue';

export function useCommonMethod() {
  const count = ref(0);

  function commonMethod() {
    console.log('This is a common method');
    count.value++;
  }

  return {
    count,
    commonMethod
  };
}
```

在组件中使用组合函数：

```vue
<!-- components/MyComponent.vue -->
<template>
  <div>
    <p>{{ count }}</p>
    <button @click="commonMethod">Click me</button>
  </div>
</template>

<script setup>
import { useCommonMethod } from '../composables/useCommonMethod';

const { count, commonMethod } = useCommonMethod();
</script>
```

### 2. 使用全局方法

你可以在 `app.config.globalProperties` 上定义全局方法，使其在每个组件实例中都能访问。

#### 示例：

在 `main.js` 中定义全局方法：

```javascript
// main.js
import { createApp } from 'vue';
import App from './App.vue';

const app = createApp(App);

app.config.globalProperties.$commonMethod = function() {
  console.log('This is a common method');
};

app.mount('#app');
```

在组件中使用全局方法：

```vue
<!-- components/MyComponent.vue -->
<template>
  <div @click="$commonMethod">Click me</div>
</template>

<script setup>
</script>
```

### 3. 使用自定义指令

如果你的公共方法与 DOM 操作相关，你可以使用自定义指令。

#### 示例：

创建一个自定义指令：

```javascript
// directives/commonDirective.js
export default {
  beforeMount(el, binding) {
    el.addEventListener('click', () => {
      console.log('This is a common directive method', binding.value);
    });
  },
  unmounted(el) {
    el.removeEventListener('click');
  }
};
```

在 `main.js` 中注册指令：

```javascript
// main.js
import { createApp } from 'vue';
import App from './App.vue';
import commonDirective from './directives/commonDirective';

const app = createApp(App);
app.directive('common', commonDirective);
app.mount('#app');
```

在组件中使用指令：

```vue
<!-- components/MyComponent.vue -->
<template>
  <div v-common="someValue">Click me</div>
</template>

<script setup>
const someValue = 'Hello, Directive!';
</script>
```

### 4. 使用插件

插件通常用于添加全局功能到 Vue 实例。你可以通过插件将方法添加到 Vue 的全局属性上，从而在每个组件实例中都能访问这些方法。

#### 示例：

创建一个插件：

```javascript
// plugins/commonMethods.js
export default {
  install(app) {
    app.config.globalProperties.$commonMethod = function() {
      console.log('This is a common method from plugin');
    };
  }
};
```

在 `main.js` 中使用插件：

```javascript
// main.js
import { createApp } from 'vue';
import App from './App.vue';
import commonMethods from './plugins/commonMethods';

const app = createApp(App);
app.use(commonMethods);
app.mount('#app');
```

在组件中使用插件方法：

```vue
<!-- components/MyComponent.vue -->
<template>
  <div @click="$commonMethod">Click me</div>
</template>

<script setup>
</script>
```

通过上述方法，可以在 Vue 3 中有效地提取和复用公共方法，从而使代码更加模块化和可维护。组合式 API 尤其强大，因为它允许你以非常灵活的方式组织和共享逻辑。