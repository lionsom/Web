# Vue.use()  VS  Vue.component()

## 使用

`Vue.use()`啥时候用？就我来说，经常是项目建好之后引入UI组件库，我最爱按需引入，所以会这时候就会搭配到`Vue.use()`。

```js
// main.js
import {Button } from 'Element-ui';

Vue.use(Button);
```

但是`Vue.component()`什么时候用呢？

```js
// main.js
import Loading from './loading.vue';

// 将loading注册为全局组件，在别的组件中通过<loading>标签使用Loading组件 
Vue.component('loading', Loading);
```

如上所示，都是在载入组件，但两者的区别挺大的。



## 区别

### 使用`Vue.use()`注册插件。

1. 这个方法接收一个参数。这个参数必须具有install方法。Vue.use函数内部会调用参数的install方法。
2. 如果插件没有被注册过，那么注册成功之后会给插件添加一个installed的属性值为true。Vue.use方法内部会检测插件的installed属性，从而避免重复注册插件。
3. 插件的install方法将接收两个参数，第一个是参数是Vue，第二个参数是配置项options。
4. 在install方法内部可以添加全局方法或者属性、全局指令、mixin混入、添加实例方法、使用Vue.component()注册组件等。



### 使用`Vue.component()`注册插件。

1. 使用`Vue.component()`方法注册全局组件。
2. 第一个参数是自定义元素名称，也就是将来在别的组件中使用这个组件的标签名称。
3. 第二个参数是将要注册的Vue组件。
