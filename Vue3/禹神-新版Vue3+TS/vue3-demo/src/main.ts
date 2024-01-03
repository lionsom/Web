import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
// 引入路由器
import router from '@/router-demo/router'

// 创建一个应用
const app = createApp(App)
// 使用路由器
app.use(router)
// 挂载整个应用到app容器中
app.mount('#app')