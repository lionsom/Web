# ref vs reactive

在 Vue 3 中，`ref` 和 `reactive` 是两个用于创建响应式数据的核心 API。它们在不同场景下适用，主要区别在于它们处理的数据类型和方式不同。以下是它们的适用场景及对比。

### 1. 基本区别

- **`ref`**：用于处理**原始类型**的数据（如字符串、数字、布尔值），或**单个变量**。它返回一个带 `.value` 的响应式对象。
- **`reactive`**：用于处理**对象、数组**或**复杂数据结构**，返回一个响应式对象，可以直接访问和操作属性。

### 2. 使用场景

#### 场景一：单个基本数据类型（数字、字符串、布尔值）

当需要跟踪单个简单的数据，如计数器、布尔标志等，适合使用 `ref`。

```javascript
import { ref } from 'vue';

export default {
  setup() {
    const count = ref(0);      // 单个数字使用 ref
    const message = ref('Hi'); // 单个字符串使用 ref

    const increment = () => {
      count.value++;
    };

    return {
      count,
      message,
      increment
    };
  }
};
```

在模板中访问时，只需要直接使用 `count` 和 `message`，Vue 会自动解包 `.value` 属性。

#### 场景二：具有多个属性的对象

当需要跟踪一个**对象**，如包含多个属性的用户信息对象，适合使用 `reactive`，因为 `reactive` 可以对对象的所有属性进行响应式跟踪。

```javascript
import { reactive } from 'vue';

export default {
  setup() {
    const user = reactive({
      name: 'Alice',
      age: 25,
      isAdmin: false
    });

    const updateUser = () => {
      user.name = 'Bob';
      user.age = 30;
    };

    return {
      user,
      updateUser
    };
  }
};
```

在模板中可以直接访问 `user.name` 或 `user.age`，无需使用 `.value`。

#### 场景三：数组和复杂数据结构

当需要处理数组或复杂嵌套结构时，`reactive` 更适合，因为它会对数组元素的增删改查操作进行响应式跟踪。

```javascript
import { reactive } from 'vue';

export default {
  setup() {
    const items = reactive([
      { id: 1, text: 'Item 1' },
      { id: 2, text: 'Item 2' }
    ]);

    const addItem = () => {
      items.push({ id: items.length + 1, text: `Item ${items.length + 1}` });
    };

    return {
      items,
      addItem
    };
  }
};
```

在模板中可以直接使用 `items`，且 `reactive` 会对数组元素的变动（如 `push`、`pop`）进行响应式更新。

#### 场景四：组合对象和基本数据类型

如果有需要组合对象和基本数据类型的情况，可以混合使用 `ref` 和 `reactive`。

```javascript
import { ref, reactive } from 'vue';

export default {
  setup() {
    const isLoading = ref(false); // 单个布尔值
    const profile = reactive({
      name: 'John',
      details: {
        age: 30,
        email: 'john@example.com'
      }
    });

    const toggleLoading = () => {
      isLoading.value = !isLoading.value;
    };

    return {
      isLoading,
      profile,
      toggleLoading
    };
  }
};
```

这种混合使用方式可以更灵活地处理具有不同数据类型的响应式需求。

#### 场景五：单一 DOM 引用或组件实例引用

对于引用 DOM 元素或组件实例，应使用 `ref`。

```javascript
import { ref, onMounted } from 'vue';

export default {
  setup() {
    const buttonRef = ref(null);

    onMounted(() => {
      console.log(buttonRef.value); // 访问 DOM 元素
    });

    return {
      buttonRef
    };
  }
};
```

在模板中可以使用 `ref` 绑定到 DOM 元素上，`buttonRef.value` 将在挂载后引用该元素。

### 3. 总结对比

| 特性                     | `ref`                              | `reactive`                   |
| ------------------------ | ---------------------------------- | ---------------------------- |
| 适用数据类型             | 原始类型（数字、字符串、布尔值等） | 对象、数组、复杂数据结构     |
| 响应式访问方式           | 通过 `.value` 访问值               | 直接访问属性，无需 `.value`  |
| 对象和数组的嵌套结构处理 | 不适合复杂结构                     | 适合处理对象和数组的嵌套结构 |
| DOM 或组件实例引用       | 适合                               | 不适合                       |
| 响应式性能               | 适合单值响应                       | 适合多属性的复杂结构         |

### 4. 什么时候使用 `ref` 和 `reactive`

- **使用 `ref`**：简单的单一数据，或需要单独处理一个基本数据类型。
- **使用 `reactive`**：当数据结构是对象或数组时，或需要处理多属性的对象。