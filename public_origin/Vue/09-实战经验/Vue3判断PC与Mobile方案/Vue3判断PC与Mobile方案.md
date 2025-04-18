# 一、vue3检测是手机还是pc端，监测视图窗口变化

1. 超小屏幕（手机） 768px以下
2. 小屏设备（平板） 768px-992px
3. 中等屏幕（旧式电脑） 992px-1200px
4. 大屏设备（现代电脑） 1200px以上

```vue
<script setup name="welcome">
import { onMounted, ref } from 'vue'
 
const screenWidth = ref(document.documentElement.clientWidth)
const isPhone = ref(screenWidth.value < 993) // 小于993视为平板及手机
 
onMounted(() => {
  window.addEventListener('resize', () => {
    screenWidth.value = document.body.offsetWidth
    isPhone.value = document.body.offsetWidth < 993 // 小于993视为平板及手机
})

const nextHandle = () => {
    window.location.href = isPhone.value ? 
        					'https://www.baidu.com/' : 
    						'https://element-plus.gitee.io/zh-CN/component/'
}
</script>
```







1. 在router中配置两个不同的路由地址入口

```
import Vue from 'vue'
import Router from 'vue-router'
import Home from '../pages/home.vue'
import MHome from '../pages/mHome.vue'

Vue.use(Router)

export default new Router({
  mode:"history",
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/m',
      name: 'mHome',
      component: MHome
    }
  ]
})
```

2. 在 App.vue 的 mounted 方法中对设置进行判断

```kotlin
const router = useRouter()

onMounted(() => {  
  if (isMobile.value) {
    router.replace('/m');
  } else {
    router.replace('/p');
  }
})
```