在 Vue 2 中，`mixins` 和 `extends` 都是用于组件选项复用的机制，但它们在用法和功能上有明显区别：

---

### 1. **mixins（混入）**
- **作用**：将多个组件的**公共逻辑**抽离成独立模块，供多个组件复用。
- **特点**：
  - 支持**多个混入**（数组形式）
  - 合并策略：组件自身选项优先
  - 生命周期钩子：所有混入的钩子**先于**组件自身钩子执行
- **语法**：
  ```js
  const myMixin = { /* 选项对象 */ }
  export default {
    mixins: [myMixin, ...], // 可混入多个
    // 组件自身选项
  }
  ```
- **合并规则**：
  - `data`/`methods` 等对象：同名属性以**组件自身优先**
  - 生命周期钩子：混入的钩子先执行，组件自身后执行
  - 值为对象的选项（如 `components`）：递归合并

---

### 2. **extends（扩展）**
- **作用**：创建一个组件**继承**另一个组件（类似面向对象的继承）。
- **特点**：
  - **仅支持扩展一个组件**（对象或构造函数）
  - 合并策略：被扩展组件优先（父级优先）
  - 生命周期钩子：扩展组件的钩子**先于**当前组件执行
- **语法**：
  ```js
  const baseComponent = { /* 基础组件 */ }
  export default {
    extends: baseComponent, // 只能扩展一个
    // 组件自身选项
  }
  ```
- **合并规则**：
  - 同名属性以**被扩展组件（父级）优先**
  - 生命周期钩子：父级钩子先执行，当前组件后执行

---

### 关键区别总结
| 特性             | `mixins`                   | `extends`                      |
| ---------------- | -------------------------- | ------------------------------ |
| **复用目标**     | 合并**多个独立逻辑片段**   | 继承**单个基础组件**           |
| **数量限制**     | 支持多个（数组）           | 仅支持一个（对象或构造函数）   |
| **优先级**       | 当前组件选项优先           | 被扩展组件（父级）选项优先     |
| **生命周期顺序** | 混入钩子 → 当前组件钩子    | 被扩展组件钩子 → 当前组件钩子  |
| **设计思想**     | 组合式复用（类似功能聚合） | 继承式复用（类似父子组件继承） |

---

### 使用场景示例
#### 混入（mixins）
```js
// 日志混入
const loggerMixin = {
  created() {
    console.log('混入的created');
  }
}

export default {
  mixins: [loggerMixin],
  created() {
    console.log('组件自身的created');
  }
}
// 输出顺序：混入的created → 组件自身的created
```

#### 扩展（extends）
```js
// 基础组件
const baseComponent = {
  data: () => ({ msg: "Base Message" }),
  created() { console.log('基类created'); }
}

export default {
  extends: baseComponent,
  data: () => ({ msg: "Child Message" }),
  created() { 
    console.log('子组件created');
    console.log(this.msg); // 输出："Base Message"（父级优先）
  }
}
// 输出顺序：基类created → 子组件created
```

---

### 最佳实践建议
1. **逻辑复用首选 `mixins`**  
   适合抽离工具函数、通用逻辑（如日志、权限校验）。
2. **组件继承用 `extends`**  
   适合构建基础组件库（如所有表单组件继承自 `BaseForm`）。
3. **避免过度使用**  
   两者都可能导致代码耦合，Vue 3 推荐使用 **Composition API** 替代。

> 💡 **Vue 3 的演进**：  
> Vue 3 的 `setup` + 组合式函数（Composables）彻底解决了 `mixins/extends` 的命名冲突和来源不清晰问题，是更现代的复用方案。