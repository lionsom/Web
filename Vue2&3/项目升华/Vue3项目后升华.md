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

