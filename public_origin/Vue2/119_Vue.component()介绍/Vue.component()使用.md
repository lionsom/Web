在 Vue 2 中，组件是构建用户界面的核心模块，分为全局组件和局部组件两种注册方式。下面详细对比介绍两者：

---

## 一、**全局组件 (Global Components)**
**定义**：通过 `Vue.component()` 注册的组件，可在**整个应用**的所有组件模板中使用。

### **1. 注册方式**：
```javascript
// main.js 或全局入口文件
import Vue from 'vue';
import GlobalComponent from './components/GlobalComponent.vue';

// 注册全局组件
Vue.component('GlobalComponent', GlobalComponent);

new Vue({ /* ... */ }).$mount('#app');
```

### 2. **特点**：
1. **作用范围**：全局可用（所有 Vue 实例、子组件中直接使用）
2. **命名规范**：
   - 组件名推荐使用 **PascalCase**（大驼峰）或 **kebab-case**（连字符）
   - 模板中使用时自动转换：`<global-component>` 或 `<GlobalComponent>`
3. **使用场景**：
   - 通用基础组件（如 Button、Input）
   - 频繁复用的业务组件（如 Header、Footer）
4. **生命周期**：在应用初始化时注册，常驻内存

### 3. **使用示例**：
```vue
<!-- 任意组件模板中 -->
<template>
  <div>
    <global-component /> <!-- 无需导入 -->
  </div>
</template>
```

---

## 二、**局部组件 (Local Components)**
**定义**：在组件内部通过 `components` 选项注册，仅**当前组件及其子组件**可用。

### 1. **注册方式**：
```vue
<!-- ParentComponent.vue -->
<script>
import LocalComponent from './LocalComponent.vue';

export default {
  components: { // 局部注册
    LocalComponent,
    // 或自定义名称: 'MyLocalComponent': LocalComponent
  }
}
</script>
```

### b. **特点**：
1. **作用范围**：仅在注册该组件的父组件及其子组件中可用
2. **命名规范**：
   - 注册名支持 PascalCase 或 kebab-case
   - 模板中推荐使用 kebab-case：`<local-component>`
3. **使用场景**：
   - 特定页面/功能专用组件
   - 需要代码分割优化的组件
4. **内存管理**：随父组件销毁而释放，更利于性能优化

### **c. 使用示例**：
```vue
<template>
  <div>
    <local-component /> <!-- 仅在 ParentComponent 及其子组件可用 -->
  </div>
</template>
```

---

## 三、**核心对比**

| 特性             | 全局组件             | 局部组件                  |
| ---------------- | -------------------- | ------------------------- |
| **注册位置**     | `Vue.component()`    | 组件选项 `components: {}` |
| **作用域**       | 整个应用             | 当前组件及其子组件        |
| **内存占用**     | 常驻内存             | 随父组件销毁释放          |
| **使用场景**     | 通用高频组件         | 特定功能/私有组件         |
| **命名冲突风险** | 较高（全局命名空间） | 较低（局部作用域）        |
| **构建优化**     | 可能增加初始包体积   | 支持异步加载/代码分割     |
| **示例组件**     | 按钮、弹窗、输入框   | 订单卡片、用户详情页      |

---

## 四、**最佳实践**
1. **基础组件全局化**：
   ```javascript
   // 全局注册基础组件
   import BaseButton from './BaseButton.vue';
   Vue.component('BaseButton', BaseButton);
   ```

2. **业务组件局部化**：
   ```vue
   <!-- ProductPage.vue -->
   <script>
   import ProductGallery from './ProductGallery.vue';
   
   export default {
     components: { ProductGallery }
   }
   </script>
   ```

3. **异步组件优化**（局部组件特有）：
   ```javascript
   components: {
     HeavyComponent: () => import('./HeavyComponent.vue')
   }
   ```

4. **避免全局污染**：非通用组件切勿全局注册

---

## 五、**特殊场景处理**
### 1. **全局注册的局部覆盖**
局部注册的同名组件会覆盖全局组件：
```javascript
// 全局组件
Vue.component('MyComponent', { /* ... */ });

// 局部组件中
components: {
  MyComponent: { /* 不同实现, 覆盖全局组件 */ }
}
```

### 2. **动态组件中使用**
局部组件需在父组件注册后才能用于 `<component :is>`：
```vue
<template>
  <component :is="currentComponent"></component>
</template>

<script>
import DynamicComp from './DynamicComp.vue';

export default {
  components: { DynamicComp },
  data() {
    return { currentComponent: 'DynamicComp' }
  }
}
</script>
```

---

## 六、**总结建议**
| **注册方式** | **推荐场景**                             | **不适用场景**          |
| ------------ | ---------------------------------------- | ----------------------- |
| **全局组件** | UI 库组件、高频复用组件（>3个页面使用）  | 页面级专用组件          |
| **局部组件** | 路由页面组件、私有功能模块、大型异步组件 | 基础按钮/图标等通用组件 |

**项目规范**：  
- 80% 组件使用局部注册  
- 创建 `src/components/global` 目录存放全局组件  
- 使用 `webpack` 的 `require.context` 自动全局注册基础组件：
  ```javascript
  // 自动注册 global 目录下的组件
  const requireComponent = require.context(
    './global',
    false,
    /Base[A-Z]\w+\.(vue|js)$/
  );
  
  requireComponent.keys().forEach(fileName => {
    const compConfig = requireComponent(fileName);
    const compName = fileName.split('/').pop().replace(/\.\w+$/, '');
    Vue.component(compName, compConfig.default || compConfig);
  });
  ```