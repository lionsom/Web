// new Vue() 创建一个应用实例 => createApp()
// createRouter() createStore() 
// 将创建实例进行了封装，保证每个实例的独立封闭性

import { createApp } from 'vue'
import App from './App.vue'

// mount 设置挂载点 #app (id为app的盒子)
createApp(App).mount('#app')
