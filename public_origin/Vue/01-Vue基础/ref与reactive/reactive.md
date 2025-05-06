在 Vue 3 中，`reactive` 创建的响应式对象或数组本质上是一个代理（Proxy），你不能直接通过赋值操作替换它。

当你执行以下代码时：

```javascript
let itemList = reactive<Item[]>([]);
itemList = [];
```

你试图用一个新的空数组替换 `itemList`，这实际上打破了响应式系统的绑定，因此不会触发视图更新。

------

### **正确的替代方法**

#### **1. 使用数组的方法修改内容**

你可以使用数组的方法（如 `splice`）清空或替换数组的内容，而无需直接替换整个数组。

```javascript
itemList.splice(0, itemList.length); // 清空数组
```

#### **替换整个数组的内容：**

```javascript
itemList.splice(0, itemList.length, ...newArray); // 用 newArray 替换内容
```

------

#### **2. 使用 `ref` 包裹数组**

如果确实需要支持直接赋值整个数组，建议使用 `ref` 包裹，而不是 `reactive`。

##### **示例：**

```javascript
import { ref } from 'vue';

let itemList = ref<Item[]>([]);

// 直接替换
itemList.value = []; // 生效
itemList.value = [...newArray]; // 生效
```

在模板中访问时需要使用 `.value`：

```html
<template>
  <ul>
    <li v-for="item in itemList" :key="item.id">{{ item.name }}</li>
  </ul>
</template>
```

------

### **总结**

1. 如果你使用 `reactive`，需要通过修改内容的方式（如 `splice`）更新数组。
2. 如果你需要支持直接赋值，改用 `ref` 包裹数组，并通过 `.value` 操作数组。
3. 选择合适的方式，基于需求和代码风格进行实现。