https://juejin.cn/post/7019305253321310238



## 1. Vue是怎么找到`main.js`这个文件并执行的呢？

每个使用`vue-cli`初始化的项目都有一个`src/main.js`，这个文件里引用了`vue`并且将其实例化。那我们运行项目，vue是怎么找到`main.js`这个文件并进行执行的呢，让我们一起扒开vue-cli的源码看一看其内部是如何实现的。

```js
import '@babel/polyfill'
import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
```

