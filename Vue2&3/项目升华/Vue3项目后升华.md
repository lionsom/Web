# 1. ref reactive 使用场景对比



# 2. 声明ref对象

```typescript
const numbers = ref<number[]>([]); // 定义一个 number 类型的数组

interface Item {
  name: string;
}
const items = ref<Item[]>([]); // 定义一个 { name: string } 类型的数组
```



# 3. `$patch` 是 Vuex 4 的一个方法

在 Vue 3 中，`$patch` 是 Vuex 4 的一个方法，用于在 store 中批量更新状态。它允许你以更简洁的方式更新多个状态属性，而无需手动调用每个状态的 mutation。

### 使用 `$patch` 的步骤

1. **安装 Vuex**: 首先确保你已经安装了 Vuex。

   ```bash
   npm install vuex@next
   ```

2. **创建 Store**: 在创建 Vuex store 时，你可以使用 `$patch` 方法。

```javascript
import { createStore } from 'vuex';

const store = createStore({
  state() {
    return {
      count: 0,
      name: '',
    };
  },
  mutations: {
    increment(state) {
      state.count++;
    },
    setName(state, name) {
      state.name = name;
    },
  },
});
```

3. **使用 `$patch`**: 你可以在组件中使用 `$patch` 来更新状态。

```vue
<template>
  <div>
    <p>Count: {{ count }}</p>
    <p>Name: {{ name }}</p>
    <button @click="updateState">Update State</button>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { useStore } from 'vuex';

const store = useStore();

const count = computed(() => store.state.count);
const name = computed(() => store.state.name);

const updateState = () => {
  store.$patch({
    count: count.value + 1,
    name: 'New Name',
  });
};
</script>
```

### 注意事项

- `$patch` 可以用于替代多个 mutation 调用，让代码更简洁。
- 它会直接更新状态，所以在使用时要确保新的状态是合适的。

### 总结

使用 `$patch` 可以使状态更新更加灵活和高效，特别是在需要同时更新多个状态属性时非常有用。













4. `defineProps` 定义一个指定对象类型的数组

在 Vue 3 中，使用 `defineProps` 定义一个指定对象类型的数组可以通过 TypeScript 或 PropTypes 来实现。下面是两种方法的示例：

### 1. 使用 TypeScript

如果你使用 TypeScript，你可以这样定义一个对象类型的数组：

```vue
<script setup lang="ts">
import { defineProps } from 'vue';

interface MyObject {
  id: number;
  name: string;
}

const props = defineProps<{
  items: MyObject[];
}>();
</script>

<template>
  <div>
    <ul>
      <li v-for="item in props.items" :key="item.id">{{ item.name }}</li>
    </ul>
  </div>
</template>
```

### 2. 使用 PropTypes + 不使用 TypeScript

如果不使用 TypeScript，你可以使用 PropTypes 进行类型验证：

```vue
<script setup>
import { defineProps } from 'vue';
import { PropType } from 'vue';

const props = defineProps({
  items: {
    type: Array as PropType<{ id: number; name: string }[]>,
    required: true,
  },
});
</script>
```

这两种方法都可以有效地指定一个包含特定对象类型的数组作为组件的 props。根据你使用的工具和习惯选择适合的方法即可。



### 3. 使用 PropTypes + 使用 TypeScript

```typescript
import type { PropType } from 'vue';

// props
const props = defineProps({
  options: {
    type: Array as PropType<{ id: number; name: string }[]>,
    default: [{ id: 0, name: 'Option 0' }, { id: 0, name: 'Option 1' }, { id: 0, name: 'Option 2' }]
  }
});
```



#### 问题分析：

```typescript
import { PropType, defineProps, defineEmits } from 'vue';

// ERROR
'PropType' is a type and must be imported using a type-only import when 'verbatimModuleSyntax' is enabled.
```

#### 解决方案：

需要使用类型导入语法来导入 `PropType`。
可以通过在 `import` 语句前添加 `type` [关键字](https://so.csdn.net/so/search?q=关键字&spm=1001.2101.3001.7020)来实现。

```typescript
import { defineProps, defineEmits } from 'vue';
import type { PropType } from 'vue';
```

这样，`PropType` 将作为一个类型导入，而不是一个普通的导入。





# 4. 图片懒加载

https://www.cnblogs.com/moxiaowohuwei/p/7908877.html



axios  promise





# 5. 动态修改div背景图

使用 Vue 的动态绑定，可以在任意块级元素中设置背景图像。

```vue
<template>
  <div :style="{ backgroundImage: `url(${imageUrl})` }" class="image-background"></div>
</template>

<script setup>
import { ref } from 'vue';

const imageUrl = ref('your-initial-image-url.jpg');
</script>

<style>
.image-background {
  background-size: cover;
  height: 300px; /* 根据需要设置高度 */
}
</style>
```





# 6. 跳转下载

https://segmentfault.com/q/1010000010493203

https://www.zhangxinxu.com/wordpress/2017/07/js-text-string-download-as-html-json-file/

- 张鑫旭-[JS前端创建html或json文件并浏览器导出下载](https://link.segmentfault.com/?enc=bDtl%2B6jmP8S7I78vLlCRiA%3D%3D.sgtUNh2Uthp9w3yGQh3FQ3bUAw3FD9omZWyEzNsxKXVl6t8HgShBP3Ba7JCFE0aNmE%2Bi04MjNd3KqUMIJ7TuuhXuA6xDl7GDib6%2F2%2BhQuR6Qb1ypCx2dTD%2BXTGdWocdU)
- yugasun-[前端js下载文件方案探索](https://yugasun.com/post/optimize-download-files-in-frontend.html)



https://blog.csdn.net/u012848304/article/details/135282481

https://blog.csdn.net/qq_47657875/article/details/130204023

https://blog.csdn.net/ZuoZuoDangerou/article/details/109801105

https://juejin.cn/post/7261788614744260669

# 7. vue3+vite用proxy解决跨域及proxy原理解析

[vue3+vite用proxy解决跨域及proxy原理解析](https://blog.csdn.net/Android_boom/article/details/125387464?spm=1001.2101.3001.6661.1&utm_medium=distribute.pc_relevant_t0.none-task-blog-2%7Edefault%7EOPENSEARCH%7EPaidSort-1-125387464-blog-130919316.235%5Ev43%5Epc_blog_bottom_relevance_base7&depth_1-utm_source=distribute.pc_relevant_t0.none-task-blog-2%7Edefault%7EOPENSEARCH%7EPaidSort-1-125387464-blog-130919316.235%5Ev43%5Epc_blog_bottom_relevance_base7&utm_relevant_index=1)

[Vite配置Proxy代理解决跨域问题](https://blog.csdn.net/weixin_43288600/article/details/130919316)





# 8、vite proxy 生产环境有用吗？？？

https://blog.csdn.net/imqdcn/article/details/133351735

### 接口在生产环境下，还能使用proxy代理地址吗？

请注意，这也是很多人会忽略的。只有在开发环境才会走`vue.config.js`里面的代码，`proxy`的代理才会生效。在生产环境下，因为前端代码已经被工程化构建化了（即`dist`目录下的文件），只有纯前端代码，他通常会部署到和后端服务一样的域名下，用的是相对地址，就不存在跨域了。`.env.production`中设置的变量也在构建过程中体现并分布到了各个接口中，



```tsx
export default defineConfig({
  // 解决在路径中用@代替src目录
  resolve: {
    alias: { "@": resolve("src") },
  },
  // 这个是新增的本地服务器与proxy代理设置
  server: {
  	....
  }
})
```



### 接口如何区分.env.development开发和.env.production生产环境

其实对应的就是如何使用`.env.development`和`.env.production`环境。

可以在`package.json`中看到`vite`的`script`：

```json
"scripts": {
    "dev": "vite --mode development",
    "start": "vite --host 192.168.8.87",
    "build": "vite build"
},
```

默认情况下，`'npm run dev'`即为开发环境，`npm run build`即为生产环境，不管在哪种环境下，你可以通过在代码中使用`import.meta.env.VITE_BASE_API`来调用两种开发环境的`env`文件下的`VITE_BASE_API`变量的值，如果是开发环境，就会读取`.env.development`中的值，生产环境，就会读取`.env.production`中的值。





# 9.Vite配置Proxy代理解决跨域问题

https://blog.csdn.net/weixin_43288600/article/details/130919316





# 10. CSS   positon





# 11. ts 判空

js可以直接使用？

在html中 不能使用？



# 12. JS - Web API

location.href

Window.open()



# 13. Js 操作

























