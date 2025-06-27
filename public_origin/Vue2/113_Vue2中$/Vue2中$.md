# Vue2 中 $

在 Vue 2 中，**以 `$` 开头的属性**是 Vue 实例的内置属性/方法，它们提供对 Vue 核心功能的访问。这些属性是 Vue 自动添加到每个组件实例上的，开发者可以通过 `this.$xxx` 访问它们。

### 常见 `$` 属性详解

| 属性/方法          | 说明                                                         |
| ------------------ | ------------------------------------------------------------ |
| **`$data`**        | 组件 `data` 选项的原始对象（`this.message` 实际代理自 `this.$data.message`） |
| **`$props`**       | 组件接收的 props 对象                                        |
| **`$el`**          | 组件根 DOM 元素（需在挂载后使用，如 `mounted` 钩子）         |
| **`$options`**     | 组件的初始化选项（可访问自定义选项）                         |
| **`$parent`**      | 父组件实例                                                   |
| **`$root`**        | 根组件实例（当前组件树的顶级实例）                           |
| **`$children`**    | 子组件数组（不保证顺序，非响应式）                           |
| **`$refs`**        | 持有注册过 `ref` 属性的 DOM/组件引用                         |
| **`$slots`**       | 插槽分发的内容（用于访问插槽）                               |
| **`$scopedSlots`** | 作用域插槽（用于访问带数据的插槽）                           |
| **`$attrs`**       | 父组件传递的非 props 属性（如 `class`, `style`, 事件监听器等） |
| **`$listeners`**   | 父组件传递的事件监听器（Vue 2.4+）                           |

### 常见 `$` 方法详解

| 方法               | 说明                                              |
| ------------------ | ------------------------------------------------- |
| **`$set`**         | 响应式添加属性（解决 Vue 无法检测属性添加的问题） |
| **`$delete`**      | 响应式删除属性                                    |
| **`$watch`**       | 监听数据变化（编程式创建侦听器）                  |
| **`$on`**          | 监听自定义事件                                    |
| **`$once`**        | 监听一次性自定义事件                              |
| **`$off`**         | 取消事件监听                                      |
| **`$emit`**        | 触发自定义事件                                    |
| **`$nextTick`**    | DOM 更新后执行回调（解决异步更新后的操作问题）    |
| **`$forceUpdate`** | 强制组件重新渲染（慎用，通常应避免）              |

### 示例代码

```vue
<template>
  <div ref="myElement">{{ message }}</div>
</template>

<script>
export default {
  data() {
    return { message: "Hello Vue!" };
  },
  mounted() {
    // 访问 DOM 元素
    console.log(this.$refs.myElement); // <div>Hello Vue!</div>
    
    // 监听数据变化
    this.$watch('message', (newVal) => {
      console.log(`消息变为: ${newVal}`);
    });
    
    // 修改数据（Vue 代理了 $data，可直接用 this.message）
    setTimeout(() => {
      this.message = "Updated!";
    }, 1000);
  },
  methods: {
    handleClick() {
      // 触发自定义事件
      this.$emit('custom-event', 'data');
    }
  }
}
</script>
```

### 重要注意事项
1. **命名规范**：避免自定义以 `$` 开头的属性（如 `$myVar`），因为可能覆盖 Vue 内置属性。
2. **响应性限制**：直接修改 `$data` 或 `$props` 会破坏响应性，应使用 Vue 的数据变更方法。
3. **`$refs` 异步性**：`$refs` 在组件渲染完成后填充，避免在 `created` 中使用。
4. **替代方案**：部分功能（如 `$set`）在 Vue 3 中被新 API 取代（如 `reactive`）。

### 与用户自定义属性的区别
- 用户定义的 `data`/`props` 属性（如 `this.message`）**没有 `$` 前缀**。
- Vue 内置的属性和方法**有 `$` 前缀**（如 `this.$emit`）。

这些 `$` 属性/方法是 Vue 实例的核心接口，理解它们能更灵活地操作组件状态、DOM 和事件系统。