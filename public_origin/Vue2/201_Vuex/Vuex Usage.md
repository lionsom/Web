# Vue2 中 Vuex 的核心知识点与示例

Vuex 是 Vue.js 的**状态管理模式**，专为 Vue.js 应用程序开发的**集中式存储管理**工具。

## 一、Vuex 核心概念

### 1. State - 单一状态树
存储应用状态的单一对象，是唯一数据源

```javascript
// store/index.js
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count: 0,
    user: {
      name: '张三',
      age: 25
    },
    todos: [
      { id: 1, text: '学习Vuex', done: true },
      { id: 2, text: '写项目', done: false }
    ]
  }
})
```

### 2. Getters - 派生状态
从 store 的 state 中派生出一些状态，类似计算属性

```javascript
export default new Vuex.Store({
  // ...state
  getters: {
    doneTodos: state => {
      return state.todos.filter(todo => todo.done)
    },
    getTodoById: (state) => (id) => {
      return state.todos.find(todo => todo.id === id)
    },
    // 使用其他getter
    doneTodosCount: (state, getters) => {
      return getters.doneTodos.length
    }
  }
})
```

### 3. Mutations - 同步修改状态
更改 Vuex store 中状态的唯一方法是提交 mutation

```javascript
export default new Vuex.Store({
  // ...state, getters
  mutations: {
    increment(state) {
      state.count++
    },
    incrementBy(state, payload) {
      state.count += payload.amount
    },
    updateUser(state, newUser) {
      state.user = { ...state.user, ...newUser }
    }
  }
})
```

### 4. Actions - 异步操作
Action 提交的是 mutation，而不是直接变更状态，可以包含任意异步操作

```javascript
export default new Vuex.Store({
  // ...state, getters, mutations
  actions: {
    incrementAsync({ commit }) {
      setTimeout(() => {
        commit('increment')
      }, 1000)
    },
    fetchUser({ commit }, userId) {
      return new Promise((resolve) => {
        setTimeout(() => {
          commit('updateUser', { name: '李四', age: 30 })
          resolve()
        }, 1500)
      })
    }
  }
})
```

### 5. Modules - 模块化
将 store 分割成模块，每个模块拥有自己的 state、mutations、actions、getters

```javascript
const moduleA = {
  state: () => ({
    countA: 1
  }),
  mutations: {
    incrementA(state) {
      state.countA++
    }
  }
}

const moduleB = {
  namespaced: true, // 带命名空间
  state: () => ({
    countB: 2
  }),
  mutations: {
    incrementB(state) {
      state.countB++
    }
  },
  actions: {
    incrementBAsync({ commit }) {
      setTimeout(() => {
        commit('incrementB')
      }, 1000)
    }
  }
}

export default new Vuex.Store({
  modules: {
    a: moduleA,
    b: moduleB
  }
})
```

## 二、Vuex 使用示例

### 1. 基本使用示例

```vue
<template>
  <div>
    <p>Count: {{ count }}</p>
    <p>Done Todos: {{ doneTodosCount }}</p>
    <p>User: {{ user.name }} - {{ user.age }}岁</p>
    
    <button @click="increment">+1</button>
    <button @click="incrementBy(5)">+5</button>
    <button @click="incrementAsync">Async +1 (1秒后)</button>
    <button @click="updateUser">更新用户</button>
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions } from 'vuex'

export default {
  computed: {
    // 使用辅助函数映射
    ...mapState(['count', 'user']),
    ...mapGetters(['doneTodosCount'])
    
    // 也可以直接访问
    // count() {
    //   return this.$store.state.count
    // }
  },
  methods: {
    ...mapMutations(['increment', 'incrementBy']),
    ...mapActions(['incrementAsync', 'fetchUser']),
    
    updateUser() {
      this.fetchUser().then(() => {
        console.log('用户更新完成')
      })
    }
  }
}
</script>
```

### 2. 模块化使用示例

```vue
<template>
  <div>
    <p>Module A Count: {{ countA }}</p>
    <p>Module B Count: {{ countB }}</p>
    
    <button @click="incrementA">A +1</button>
    <button @click="incrementB">B +1</button>
    <button @click="incrementBAsync">B Async +1</button>
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions } from 'vuex'

export default {
  computed: {
    ...mapState({
      countA: state => state.a.countA,
      countB: state => state.b.countB
    })
  },
  methods: {
    ...mapMutations({
      incrementA: 'a/incrementA',
      incrementB: 'b/incrementB'
    }),
    ...mapActions({
      incrementBAsync: 'b/incrementBAsync'
    })
  }
}
</script>
```

## 三、Vuex 高级用法

### 1. 插件开发
Vuex store 接受 `plugins` 选项，可以在插件中监听 mutation

```javascript
const myPlugin = store => {
  // 当 store 初始化后调用
  store.subscribe((mutation, state) => {
    // 每次 mutation 之后调用
    console.log(mutation.type)
    console.log(mutation.payload)
  })
}

export default new Vuex.Store({
  // ...
  plugins: [myPlugin]
})
```

### 2. 严格模式
在严格模式下，无论何时发生了状态变更且不是由 mutation 函数引起的，将会抛出错误

```javascript
export default new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production' // 开发环境开启
})
```

### 3. 表单处理
在严格模式下，v-model 绑定 Vuex state 需要处理

```vue
<template>
  <input v-model="message">
</template>

<script>
export default {
  computed: {
    message: {
      get() {
        return this.$store.state.message
      },
      set(value) {
        this.$store.commit('updateMessage', value)
      }
    }
  }
}
</script>
```

## 四、Vuex 项目结构推荐

```
store/
├── index.js          # 组装模块并导出 store 的地方
├── actions.js        # 根级别的 action
├── mutations.js      # 根级别的 mutation
├── modules/          # 模块文件夹
│   ├── cart.js       # 购物车模块
│   └── products.js   # 产品模块
```

## 五、Vuex 替代方案

虽然 Vuex 是官方推荐的状态管理方案，但在小型项目中可以考虑：

1. **Event Bus**：简单的全局事件系统
2. **provide/inject**：Vue 的依赖注入
3. **简单 store 模式**：共享一个全局对象

```javascript
// 简单 store 模式示例
export const store = {
  state: {
    count: 0
  },
  increment() {
    this.state.count++
  }
}
```

## 六、Vuex 最佳实践

1. **避免直接修改 state**：始终通过 mutations 修改状态
2. **合理使用模块**：大型项目一定要使用模块化
3. **命名规范**：
   - mutation 类型使用常量：`SOME_MUTATION`
   - 命名风格保持一致（如驼峰或下划线）
4. **异步操作放在 actions**：保持 mutations 的同步性
5. **合理使用 getters**：避免重复计算和冗余数据

Vuex 为 Vue 应用提供了强大的状态管理能力，合理使用可以大大提高大型应用的开发效率和可维护性。