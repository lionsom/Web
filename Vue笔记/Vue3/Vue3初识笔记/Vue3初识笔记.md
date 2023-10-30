# Vue3优势

![](images/01.png)



# 脚手架

* Vue2  -> [Vue CLI](https://cli.vuejs.org/zh/#%E8%B5%B7%E6%AD%A5) -> Webpack
* Vue3 -> [create-vue](https://cn.vuejs.org/guide/scaling-up/tooling.html#project-scaffolding)  -> Vite



# Vue2 / 3 项目差异

![](images/03.png)

## 1. vite.config.js 配置文件

* vue.config.js

* vite.config.js

![](images/02.png)



## 2. Package.json 依赖变化

![](images/04.png)



## 3. Main.js

**Vue2**

```js
import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
```

**Vue3**

```js
import { createApp } from 'vue'
import App from './App.vue'

createApp(App).mount('#app')
```



## 4. App.vue

app.vue - 根组件 SFC单文件组件 script - template - style 

* 变化一：脚本script和模板template顺序调整 

* 变化二：模板template不再要求唯一根元素 

* 变化三：脚本script添加setup标识支持组合式API 



## 5. index.html

微调













