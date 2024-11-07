# 一、`defineProps` 定义一个指定对象类型的数组

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

#### a. 问题分析：

```typescript
import { PropType, defineProps, defineEmits } from 'vue';

// ERROR
'PropType' is a type and must be imported using a type-only import when 'verbatimModuleSyntax' is enabled.
```

#### b. 解决方案：

需要使用类型导入语法来导入 `PropType`。
可以通过在 `import` 语句前添加 `type` [关键字](https://so.csdn.net/so/search?q=关键字&spm=1001.2101.3001.7020)来实现。

```typescript
import { defineProps, defineEmits } from 'vue';
import type { PropType } from 'vue';
```

这样，`PropType` 将作为一个类型导入，而不是一个普通的导入。





# 二、defineProps 泛型 + 默认值

在 `<script setup>` 中必须使用 defineProps 和 defineEmits API 来声明 props 和 emits

```typescript
<script setup>
const props = defineProps({
  foo: String
})
//使用的时候用props.foo
const emit = defineEmits(['change', 'delete'])
// setup code
</script>
```

在Typescript中的用法（泛型）：

```typescript
const props = defineProps<{
  foo: string
  bar?: number //非必传
}>()

const emit = defineEmits<{
  (e: 'change', id: number): void
  (e: 'update', value: string): void
}>()
```

设置默认值（**withDefaults**）

```typescript
interface Props {
  msg?: string
  labels?: string[]
}
const props = withDefaults(defineProps<Props>(), {
  msg: 'hello',
  labels: () => ['one', 'two']
})
```