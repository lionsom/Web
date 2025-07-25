# 一、Vue2 监听系统暗黑模式变化并跟随系统

在 Vue2 中监听系统暗黑模式变化并自动跟随系统设置，可以通过以下方式实现：

## 基本实现方案

### 1. 创建全局混入 (推荐)

```javascript
// 在 src/mixins/darkMode.js
export default {
  data() {
    return {
      isSystemDarkMode: false
    }
  },
  created() {
    this.initDarkModeListener()
  },
  beforeDestroy() {
    this.removeDarkModeListener()
  },
  methods: {
    initDarkModeListener() {
      const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
      
      // 设置初始状态
      this.isSystemDarkMode = darkModeMediaQuery.matches
      this.updateDarkModeClass()
      
      // 添加监听器
      this.darkModeListener = (e) => {
        this.isSystemDarkMode = e.matches
        this.updateDarkModeClass()
      }
      darkModeMediaQuery.addListener(this.darkModeListener)
    },
    removeDarkModeListener() {
      if (this.darkModeListener) {
        window.matchMedia('(prefers-color-scheme: dark)')
          .removeListener(this.darkModeListener)
      }
    },
    updateDarkModeClass() {
      if (this.isSystemDarkMode) {
        document.documentElement.classList.add('dark')
      } else {
        document.documentElement.classList.remove('dark')
      }
    }
  }
}
```

### 2. 在 main.js 中全局注册

```javascript
import Vue from 'vue'
import DarkModeMixin from './mixins/darkMode'

Vue.mixin(DarkModeMixin)
```

## 替代方案：使用 Vue 插件

### 1. 创建插件

```javascript
// src/plugins/darkMode.js
const DarkModePlugin = {
  install(Vue) {
    Vue.prototype.$darkMode = {
      isActive: false,
      init() {
        const mq = window.matchMedia('(prefers-color-scheme: dark)')
        this.isActive = mq.matches
        this.updateClass()
        
        mq.addListener((e) => {
          this.isActive = e.matches
          this.updateClass()
          Vue.prototype.$emit('dark-mode-changed', this.isActive)
        })
      },
      updateClass() {
        if (this.isActive) {
          document.documentElement.classList.add('dark')
        } else {
          document.documentElement.classList.remove('dark')
        }
      }
    }
  }
}

export default DarkModePlugin
```

### 2. 注册插件

```javascript
// main.js
import Vue from 'vue'
import DarkModePlugin from './plugins/darkMode'

Vue.use(DarkModePlugin)

new Vue({
  created() {
    this.$darkMode.init()
  },
  // ...其他配置
}).$mount('#app')
```

## 在组件中使用

```vue
<template>
  <div :class="{ 'dark-theme': isDarkMode }">
    <!-- 内容 -->
    <p>当前模式: {{ isDarkMode ? '暗黑' : '明亮' }}</p>
  </div>
</template>

<script>
export default {
  computed: {
    isDarkMode() {
      return this.isSystemDarkMode // 如果使用混入方案
      // 或者 return this.$darkMode.isActive // 如果使用插件方案
    }
  }
}
</script>

<style>
.dark-theme {
  background-color: #1a1a1a;
  color: #ffffff;
}
</style>
```

## 结合 Tailwind CSS 使用

如果你使用 Tailwind CSS，可以这样配置：

```javascript
// tailwind.config.js
module.exports = {
  darkMode: 'media', // 使用系统偏好设置
  // 或者 'class' 如果你想通过类名控制
  // ...
}
```

然后在你的组件中：

```vue
<template>
  <div class="bg-white dark:bg-gray-800 text-gray-900 dark:text-white">
    <!-- 内容 -->
  </div>
</template>
```

## 注意事项

1. **浏览器兼容性**：
   - `matchMedia` 和 `prefers-color-scheme` 在现代浏览器中都支持良好
   - 对于旧浏览器，需要添加 polyfill 或降级处理

2. **服务器端渲染 (SSR)**：
   - 在 SSR 环境下，`window` 对象不存在，需要做判断：
     ```javascript
     if (typeof window !== 'undefined') {
       // 你的暗黑模式代码
     }
     ```

3. **与用户偏好结合**：
   - 可以结合 localStorage 保存用户选择的模式
   - 当用户手动选择时，优先使用用户选择而非系统设置

4. **性能优化**：
   - 避免在监听器中执行重操作
   - 使用防抖处理频繁变化

这样实现后，你的 Vue2 应用就会自动跟随系统的暗黑模式设置变化了。

















# 二、Vue2 暗黑模式实现方案详解

在 Vue2 中实现暗黑模式有多种方案，下面我将介绍几种主流方法并提供完整示例。

## 方案一：CSS 变量 + 类名切换（推荐）

### 实现原理
通过切换根元素的类名和 CSS 变量来改变主题样式

### 示例代码

1. **定义 CSS 变量** (在全局 CSS 中)
```css
:root {
  --bg-color: #ffffff;
  --text-color: #333333;
  --primary-color: #409eff;
}

.dark {
  --bg-color: #1a1a1a;
  --text-color: #f0f0f0;
  --primary-color: #135a9a;
}

body {
  background-color: var(--bg-color);
  color: var(--text-color);
  transition: all 0.3s ease;
}
```

2. **创建 Vue 混入** (mixins/theme.js)
```javascript
export default {
  data() {
    return {
      isDark: false
    }
  },
  created() {
    // 初始化检查系统偏好
    this.checkSystemPreference()
    // 监听系统变化
    this.initSystemListener()
  },
  beforeDestroy() {
    this.removeSystemListener()
  },
  methods: {
    checkSystemPreference() {
      if (typeof window !== 'undefined' && window.matchMedia) {
        this.isDark = window.matchMedia('(prefers-color-scheme: dark)').matches
        this.applyTheme()
      }
    },
    initSystemListener() {
      if (typeof window !== 'undefined' && window.matchMedia) {
        this.systemThemeListener = (e) => {
          this.isDark = e.matches
          this.applyTheme()
        }
        window.matchMedia('(prefers-color-scheme: dark)')
          .addListener(this.systemThemeListener)
      }
    },
    removeSystemListener() {
      if (this.systemThemeListener) {
        window.matchMedia('(prefers-color-scheme: dark)')
          .removeListener(this.systemThemeListener)
      }
    },
    toggleTheme() {
      this.isDark = !this.isDark
      this.applyTheme()
      // 可选的：保存用户偏好到localStorage
      localStorage.setItem('darkMode', this.isDark)
    },
    applyTheme() {
      if (this.isDark) {
        document.documentElement.classList.add('dark')
      } else {
        document.documentElement.classList.remove('dark')
      }
    }
  }
}
```

3. **在组件中使用**
```vue
<template>
  <div class="app">
    <button @click="toggleTheme">
      切换主题 (当前: {{ isDark ? '暗黑' : '明亮' }})
    </button>
    <p>这是一个示例文本</p>
  </div>
</template>

<script>
import themeMixin from '@/mixins/theme'

export default {
  mixins: [themeMixin]
}
</script>

<style scoped>
.app {
  padding: 20px;
}

button {
  padding: 8px 16px;
  background-color: var(--primary-color);
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
</style>
```

## 方案二：使用 Vuex 管理主题状态

### 实现原理
通过 Vuex 集中管理主题状态，便于跨组件共享

### 示例代码

1. **Vuex 配置** (store/index.js)
```javascript
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isDark: false
  },
  mutations: {
    SET_THEME(state, isDark) {
      state.isDark = isDark
      // 应用到HTML元素
      if (isDark) {
        document.documentElement.classList.add('dark')
      } else {
        document.documentElement.classList.remove('dark')
      }
      // 保存到本地存储
      localStorage.setItem('darkMode', isDark)
    },
    INIT_THEME(state) {
      const savedPreference = localStorage.getItem('darkMode')
      if (savedPreference !== null) {
        state.isDark = savedPreference === 'true'
      } else if (window.matchMedia) {
        state.isDark = window.matchMedia('(prefers-color-scheme: dark)').matches
      }
      
      if (state.isDark) {
        document.documentElement.classList.add('dark')
      }
    }
  },
  actions: {
    toggleTheme({ commit, state }) {
      commit('SET_THEME', !state.isDark)
    },
    initTheme({ commit }) {
      commit('INIT_THEME')
    }
  }
})
```

2. **在 main.js 中初始化**
```javascript
import Vue from 'vue'
import App from './App.vue'
import store from './store'

new Vue({
  store,
  created() {
    this.$store.dispatch('initTheme')
  },
  render: h => h(App)
}).$mount('#app')
```

3. **在组件中使用**
```vue
<template>
  <div>
    <button @click="toggleTheme">
      当前主题: {{ isDark ? '暗黑' : '明亮' }}
    </button>
    <div class="content">
      <!-- 内容会根据主题自动变化 -->
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    isDark() {
      return this.$store.state.isDark
    }
  },
  methods: {
    toggleTheme() {
      this.$store.dispatch('toggleTheme')
    }
  }
}
</script>

<style>
.content {
  background-color: var(--bg-color);
  color: var(--text-color);
  padding: 20px;
  margin-top: 10px;
}
</style>
```

## 方案三：使用第三方库（vue-dark-mode）

### 实现原理
利用现成的 Vue 插件快速实现暗黑模式

1. **安装插件**
```bash
npm install vue-dark-mode
```

2. **配置插件** (main.js)
```javascript
import Vue from 'vue'
import DarkMode from 'vue-dark-mode'
import 'vue-dark-mode/dist/vue-dark-mode.css'

Vue.use(DarkMode)
```

3. **在组件中使用**
```vue
<template>
  <div>
    <dark-mode-toggle class="dark-mode-toggle" />
    <div :class="$darkMode.on ? 'dark' : 'light'">
      <!-- 内容 -->
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    // 访问当前模式
    console.log(this.$darkMode.on)
  }
}
</script>

<style>
.dark {
  background-color: #1a1a1a;
  color: #f0f0f0;
}
.light {
  background-color: #ffffff;
  color: #333333;
}

.dark-mode-toggle {
  position: fixed;
  top: 20px;
  right: 20px;
  z-index: 9999;
}
</style>
```

## 方案四：Tailwind CSS 暗黑模式

如果你使用 Tailwind CSS，可以更简单地实现暗黑模式

1. **配置 tailwind.config.js**
```javascript
module.exports = {
  darkMode: 'class', // 或 'media' 跟随系统
  // ...
}
```

2. **在 Vue 组件中**
```vue
<template>
  <div class="bg-white dark:bg-gray-800 text-gray-900 dark:text-white">
    <button 
      @click="toggleDark"
      class="bg-blue-500 hover:bg-blue-600 dark:bg-blue-700 dark:hover:bg-blue-800 text-white px-4 py-2 rounded"
    >
      切换主题
    </button>
    <p>内容区域</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      darkMode: false
    }
  },
  created() {
    if (localStorage.getItem('darkMode') === 'true') {
      this.darkMode = true
      document.documentElement.classList.add('dark')
    } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      this.darkMode = true
      document.documentElement.classList.add('dark')
    }
  },
  methods: {
    toggleDark() {
      this.darkMode = !this.darkMode
      localStorage.setItem('darkMode', this.darkMode)
      if (this.darkMode) {
        document.documentElement.classList.add('dark')
      } else {
        document.documentElement.classList.remove('dark')
      }
    }
  }
}
</script>
```

## 方案对比

| 方案         | 优点               | 缺点             | 适用场景           |
| ------------ | ------------------ | ---------------- | ------------------ |
| CSS变量+类名 | 灵活、性能好       | 需要手动管理类名 | 大多数项目         |
| Vuex管理     | 状态集中管理       | 增加Vuex依赖     | 大型复杂项目       |
| 第三方库     | 快速实现           | 灵活性较低       | 快速开发           |
| Tailwind     | 与Tailwind完美集成 | 需要Tailwind     | 使用Tailwind的项目 |

## 最佳实践建议

1. **优先考虑系统偏好**：初始时检查 `prefers-color-scheme`
2. **尊重用户选择**：将用户选择保存到 localStorage
3. **平滑过渡**：添加 CSS transition 使主题切换更柔和
4. **全面测试**：在不同浏览器和设备上测试暗黑模式效果
5. **无障碍考虑**：确保暗黑模式下的对比度符合 WCAG 标准

以上方案可以根据项目需求选择或组合使用，方案一（CSS变量+类名）通常是最灵活和推荐的做法。