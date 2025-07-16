在 Vue 2 中，`this.$options.filters` 是访问当前组件实例注册的**局部过滤器**的途径。以下是关键点解析：

### 1. 过滤器的作用
过滤器（Filters）是 Vue 2 特有的功能，用于文本格式化：
```vue
<template>
  {{ message | capitalize }} <!-- 使用过滤器 -->
</template>
```

### 2. `this.$options.filters` 的特性

* 疑问：

    ```js
    // 可以通过 this.$options.filters.capitalize 访问到 全局注册的capitalize 过滤器
    console.log(this.$options.filters.capitalize); 
    
    // 打印不出来全局注册的过滤器
    console.log(this.$options.filters); 
    // {}
    ```

- **访问局部过滤器**：  
  包含当前组件通过 `filters` 选项注册的所有过滤器函数
  ```javascript
  export default {
    filters: {
      reverse(val) { // 局部过滤器
        return val.split('').reverse().join('');
      }
    },
    methods: {
      checkFilters() {
        console.log(this.$options.filters); 
        // 输出: { reverse: [Function: reverse] }
        
        // 直接调用过滤器函数
        const result = this.$options.filters.reverse('hello');
        console.log(result); // => "olleh"
      }
    }
  }
  ```

- **不包含全局过滤器**：  
  全局注册的过滤器（通过 `Vue.filter()`）不会出现在这里

- **只读属性**：  
  不能在运行时动态添加/删除过滤器，仅反映组件初始化时的配置

### 3. 与全局过滤器的区别
| 类型       | 注册方式                 | 访问方式                | 作用域   |
| ---------- | ------------------------ | ----------------------- | -------- |
| 局部过滤器 | 组件选项 `filters`       | `this.$options.filters` | 当前组件 |
| 全局过滤器 | `Vue.filter('name', fn)` | 模板中直接使用 `|`      | 所有组件 |

### 4. 实际应用场景
```javascript
export default {
  filters: {
    currency: function (value) {
      return '¥' + value.toFixed(2)
    }
  },
  methods: {
    exportData() {
      // 在JS中复用过滤器逻辑
      const formatter = this.$options.filters.currency;
      const formattedPrice = formatter(this.product.price);
      
      // 发送处理后的数据
      api.export({ price: formattedPrice });
    }
  }
}
```

### 5. Vue 3 的变化
注意：**Vue 3 已移除过滤器**，官方推荐：
```vue
<!-- 替代方案 -->
<template>
  {{ formatCurrency(price) }} <!-- 使用方法代替 -->
</template>

<script>
export default {
  methods: {
    formatCurrency(value) {
      return '¥' + value.toFixed(2)
    }
  }
}
</script>
```

### 总结
`this.$options.filters` 在 Vue 2 中是一个：
- 访问**当前组件局部过滤器**的只读对象
- 键为过滤器名，值为处理函数
- 适用于在 JavaScript 代码中复用过滤逻辑
- 不包含全局过滤器
- Vue 3 中已被废弃（改用方法或计算属性）