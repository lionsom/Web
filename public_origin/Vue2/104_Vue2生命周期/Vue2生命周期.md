* [Vue2官方 - 生命周期图示](https://v2.cn.vuejs.org/v2/guide/instance.html#生命周期图示)



Vue 2 的生命周期钩子函数是 Vue 实例在不同阶段自动调用的函数，开发者可以在这些钩子中添加自定义逻辑。以下是 Vue 2 的完整生命周期图示和详细说明：

## 📊 Vue 2 生命周期图示
```
beforeCreate  →  created  →  beforeMount  →  mounted
       ↓              ↓             ↓            ↓
       │              │             │            │
       └── 数据观测/事件初始化     模板编译      挂载到DOM
                                
beforeUpdate  →  updated
       ↓             ↓
       │             │
       └── 数据变化时触发  DOM更新后

beforeDestroy →  destroyed
       ↓             ↓
       │             │
       └── 实例销毁前   实例销毁后
```

## 🔍 生命周期钩子详解
1. **beforeCreate**
   - **调用时机**：实例初始化后，数据观测/事件配置之前
   - **特点**：
     - 无法访问 `data` 和 `methods`
     - 常用于插件初始化
   ```javascript
   beforeCreate() {
     console.log('数据未初始化', this.message) // undefined
   }
   ```

2. **created**
   - **调用时机**：实例创建完成，数据观测/属性计算完成
   - **特点**：
     - 可访问 `data` 和 `methods`
     - 尚未挂载 DOM (`$el` 不可用)
     - **常用场景**：API 请求、初始化数据
   ```javascript
   created() {
     console.log('数据已初始化', this.message) // 可访问
     this.fetchData() // 发起异步请求
   }
   ```

3. **beforeMount**
   - **调用时机**：模板编译完成，挂载到 DOM 之前
   - **特点**：
     - 虚拟 DOM 已创建
     - 页面尚未渲染
   ```javascript
   beforeMount() {
     console.log(document.getElementById('app')) // null
   }
   ```

4. **mounted**
   - **调用时机**：实例挂载到 DOM 后
   - **特点**：
     - 可访问 DOM 元素
     - **常用场景**：DOM 操作、第三方库初始化
   ```javascript
   mounted() {
     console.log('DOM已挂载', this.$el)
     this.initChart() // 初始化ECharts等库
   }
   ```

5. **beforeUpdate**
   - **调用时机**：数据变化后，虚拟 DOM 重新渲染前
   - **特点**：
     - 可获取更新前的状态
     - 适合移除事件监听等操作
   ```javascript
   beforeUpdate() {
     console.log('数据即将更新', this.message)
   }
   ```

6. **updated**
   - **调用时机**：虚拟 DOM 重新渲染并应用更新后
   - **特点**：
     - 避免在此修改状态（可能导致无限循环）
     - **常用场景**：依赖 DOM 的操作
   ```javascript
   updated() {
     console.log('DOM已更新')
     this.adjustLayout() // 根据新DOM调整布局
   }
   ```

7. **beforeDestroy**
   - **调用时机**：实例销毁前
   - **特点**：
     - 实例仍完全可用
     - **必要操作**：清理定时器、解绑事件
   ```javascript
   beforeDestroy() {
     clearInterval(this.timer)
     window.removeEventListener('resize', this.handleResize)
   }
   ```

8. **destroyed**
   - **调用时机**：实例销毁后
   - **特点**：
     - 所有绑定和监听被移除
     - 子实例也被销毁
   ```javascript
   destroyed() {
     console.log('实例已销毁')
   }
   ```

## ⚠️ 特殊钩子（仅用于 keep-alive 组件）
9. **activated**
   - **调用时机**：被 keep-alive 缓存的组件激活时
   ```javascript
   activated() {
     this.startAutoRefresh() // 恢复后台任务
   }
   ```

10. **deactivated**
    - **调用时机**：被 keep-alive 缓存的组件停用时
    ```javascript
    deactivated() {
      this.pauseAutoRefresh() // 暂停后台任务
    }
    ```

## 💡 最佳实践
1. **异步请求**：优先使用 `created`（比 `mounted` 更早发起请求）
2. **DOM 操作**：必须在 `mounted` 后进行
3. **内存管理**：在 `beforeDestroy` 中清理资源
4. **状态更新**：避免在 `updated` 中修改数据
5. **性能优化**：使用 `v-if` 代替 `v-show` 触发完整生命周期

## 🌰 完整示例
```javascript
export default {
  data() {
    return { count: 0 }
  },
  beforeCreate() {
    console.log('1. beforeCreate')
  },
  created() {
    console.log('2. created', this.count)
  },
  beforeMount() {
    console.log('3. beforeMount')
  },
  mounted() {
    console.log('4. mounted', this.$el)
  },
  beforeUpdate() {
    console.log('5. beforeUpdate', this.count)
  },
  updated() {
    console.log('6. updated')
  },
  beforeDestroy() {
    console.log('7. beforeDestroy')
  },
  destroyed() {
    console.log('8. destroyed')
  },
  methods: {
    increment() {
      this.count++
    }
  }
}
```

> **关键记忆点**：  
> - 创建阶段：`beforeCreate` → `created` → `beforeMount` → `mounted`  
> - 更新阶段：`beforeUpdate` → `updated`  
> - 销毁阶段：`beforeDestroy` → `destroyed`  
> - 组件完全可用始于 `created`，DOM 可操作始于 `mounted`





# 官方图片

![](images/lifecycle.png)



# 父子组件生命周期顺序：

- **加载渲染过程**：
    - 父 beforeCreate → 父 created → 父 beforeMount → 子 beforeCreate → 子 created → 子 beforeMount → 子 mounted → 父 mounted

- **更新过程**：
    - 父 beforeUpdate → 子 beforeUpdate → 子 updated → 父 updated

- **销毁过程**：
    - 父 beforeDestroy → 子 beforeDestroy → 子 destroyed → 父 destroyed

理解生命周期钩子有助于在正确的时机执行代码，避免常见错误。