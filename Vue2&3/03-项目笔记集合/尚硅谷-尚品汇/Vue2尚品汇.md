# 尚品汇项目笔记


# 一、安装Vue-cli并创建项目

[2.x Vue CLI](https://cli.vuejs.org/zh/)

[3.x Vite](https://vitejs.dev/)


安装：

```shell
npm install -g @vue/cli
# OR
yarn global add @vue/cli
```

是否安装正确

```bash
$ vue --version 
$ vue -V
  
@vue/cli 5.0.8
```

升级：如需升级全局的 Vue CLI 包，请运行：

```bash
$ npm update -g @vue/cli

# 或者
$ yarn global upgrade --latest @vue/cli
```

创建一个项目：

```shell
$ vue create my-project
# OR
$ vue ui
```

**具体操作**

```bash
# 用vue-cli脚手架初始化项目
$ vue create sph

# 选择Vue2的版本

# 安装完成，运行
$ cd sph
$ npm run serve

 DONE  Compiled successfully in 9510ms

  App running at:
  - Local:   http://localhost:8080/
  - Network: http://192.168.2.102:8080/

  Note that the development build is not optimized.
  To create a production build, run npm run build.
```

运行失败 <font color=red>`vue-cli-service: command not found`</font> ：

```bash
$ npm run serve

> sph@0.1.0 serve
> vue-cli-service serve --open

sh: vue-cli-service: command not found
```

* 解决方案：
    * cd到项目目录
    * 执行命令`sudo rm -rf node_modules package-lock.json && npm install`
    * 输入密码，安装完成就可以正常运行了



# 二、项目结构

* node_modules文件夹：项目依赖文件夹
* public文件夹：一般放置一些静态资源（图片），需要注意，放在public文件夹中的静态资源会原封不动的打包到dist文件夹中
* src文件夹：程序员源代码文件夹
    * assets文件夹：一般也是放置静态资源（一般放置多个组件共用的静态资源），需要注意，放置在assets内的静态资源，webpack会把静态资源当做一个模块，打包js文件里面。
    * components文件夹：一般放置的是非路由组件（共用的全局组件）
    * pages | views文件夹：经常放置路由组件
    * router文件夹：配置路由的地方
    * App.vue：唯一的根组件，Vue当中的组件
    * main.js：程序入口文件，也是整个程序中 **最先执行的文件**
* babel.config.js：配置文件（babel相关）
* Jsconfig.json：JS相关的配置，例如：src文件夹配置别名
* package.js：项目信息，类似podspec文件
* package-lock.json：缓存性文件
* README.md：说明文件
* vue.config.js：vue相关配置，例如：关闭eslint校验



# 三、其他配置

## 1. 浏览器自动打开

```json
// 在package.json文件中
"scripts": {
	"serve": "vue-cli-service serve --open",  // 命令最后加上 --open 打开
  	"build": "vue-cli-service build",
  	"lint": "vue-cli-service lint"
},
```

## 2. eslint校验功能关闭

```json
// 在根目录下，创建 vue.config.js 文件，需要对外暴露
const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  // 关闭eslint
  lintOnSave: false, 
})
```

## 3. src文件夹配置别名

因为项目大的时候src（源代码文件夹）：里面目录会很多，找文件不方便，设置src文件夹的别名的好处，找文件会方便一些

```json
// 打开jsconfig.json配置别名@提示
{
  "compilerOptions": {
    "baseUrl": "./",
    "paths": {
      "@/*": [
        "src/*"
      ]
    },
  "exclude": ["node_modules", "dist"]
}
```



# 四、非路由组件

在开发项目的时候：

1. 书写静态页面（HTML + CSS）；
2. 拆分组件；
3. 获取服务器的数据动态展示；
4. 完成相应的动态业务漏记。



注意一：创建组件的时候，组件结构 + 组件样式 +图片资源

注意二：项目采用less样式，浏览器不识别，需要通过less、less-router转为css样式

注意三：想让组件识别less样式，需要在style标签加上 lang=less



**非路由组件使用分为几步:**
第一步：定义，也就是书写HTML+CSS

第二步：引入，在App.vue根文件中引入

```js
import Header from './components/Header'
```

第三步：注册，在引入后，需要注册相关非路由组件

```js
export default {
  name: '',
  components: {
    Header
  }
}
```

第四步：使用，在也没中使用非路由组件标签

```html
<div>
  我是根组件
  <Header></Header>			 <!-- 这就是我们自定义的非路由组件 -->
</div>
```



# 五、路由组件 

* components文件夹：一般放置的是非路由组件（共用的全局组件）
* pages | views文件夹：经常放置路由组件

* router文件夹：配置路由的地方



## 1. 安装vue-router

```sh
$ pnpm install -S vue-router@3

# 这边指定了版本，因为项目是vue2
# 添加 `--save` 或者 `-S` 选项可以将依赖安装到本地，并列为生产依赖。
# `--save` 或者 `-S` 选项在实际使用的时候可以省略，因为它是默认选项。
```



## 2. 配置路由

* router文件夹：配置路由的地方

```js
// index.js

// 配置路由的地方
import Vue from "vue";
import VueRouter from "vue-router";

// 使用插件
Vue.use(VueRouter);

// 引入路由组件
import Login from "@/pages/Login";
import Register from "@/pages/Register";
import Search from "@/pages/Search";

// 配置路由
export default new VueRouter({
  routes: [
    {
      path: "/login",
      component: Login,
    },
    {
      path: "/register",
      component: Register,
    },
    {
      path: "/search",
      component: Search,
    },
    // 重定向，在项目跑起来的时候，访问/时，立刻让他指向首页
    {
        path: '*',
        redirect: '/login'
    }
  ],
});
```



### a. 重定向

```js
// 重定向，在项目跑起来的时候，访问/时，立刻让他指向首页
{
    path: '*',
    redirect: '/login'
}
```





## 3. 在程序入口 - 注册路由

```js
// main.js

import Vue from "vue";
import App from "./App.vue";

// 引入路由
import router from "@/router";

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),

  // 注册路由：底下的写法KV，一般省略V【router小写】
  // 注册路由信息：当这里书写router的时候，组件身上都拥有 $route 和 $router 属性。
  router,
}).$mount("#app");
```



## 4. 路由出口 - 展示

```vue
<div>
  <Header>我是Header非路由组件</Header>

  <!-- 路由组件的调用出口 -->
  <router-view></router-view>

  <Footer> 我是Footer非路由组件 </Footer>
</div>
```



## 5. 对比总结

### a. 路由组件与非路由组件的区别？

1. 路由组件一般放置在 pages | views 文件夹中；非路由组件一般放置在 components 文件夹中。
2. 路由组件一般需要在 router 文件夹中进行注册（使用的即为组件的名字）；非路由组件在使用的时候，一般都是以标签的形式使用。
3. 注册完路由，不管是路由组件，还是非路由组件，它们身上都有 $route、$router 属性



### b. `$route` & `$router`

* $route ：一般获取路由信息，如：路径、query、params等等
* $router ：一般进行编程式导航进行路由跳转【push | replace】



## 6. 路由的两种跳转形式

### a. 声明式导航

替换 `<a>` 标签，点击跳转到指定页面 

```vue
<!-- 
	声明式导航：务必要有to属性
-->
<router-link class="" to="/register">注册</router-link>
```

### b. 编程式导航（推荐）

```vue
<template>
  <!-- 
    编程式导航
   -->
  <button class="sui-btn btn-xlarge btn-danger" type="button" @click="goSearch">
    搜索
  </button>
</template>


<script>
  export default {
    name: "",
    methods: {
      // 搜索按钮的回调函数，需要向search路由进行跳转
      goSearch() {
        this.$router.push('/search')
      }
    },
  };
</script>
```



### c. 对比

* 相同点：
    * 声明式导航`router-link` 与 编程式导航 都可以进行路由跳转

* 不同点：
    * 声明式导航能做的，编程式导航都能做；
    * 编程式导航除了进行路由跳转，还可以做一些其他业务逻辑。





# 六、Footer非路由组件隐藏与显示

## 1. v-if

我们可以通过组件身上的 `$route` 获取当前的 **路由信息**，通过 **路由路径** 判断Footer组件是否显示与隐藏。

```vue
<!-- 在login页隐藏footer组件，其他页面显示 -->
<Footer v-show="$route.path=='/login'||$route.path=='/home'"> 我是Footer非路由组件 </Footer>
```

## 2. v-show

配置路由的时候，可以给路由添加 **路由元信息【meta】**，路由需要匹配对象，所以不能乱写。

* [vue router官网 - 路由元信息](https://router.vuejs.org/zh/guide/advanced/meta.html)

```js
// 配置路由
export default new VueRouter({
  routes: [
    {
      path: "/register",
      component: Register,
      // 路由元信息
      meta: {
        showFooter: true,
      },
    },
  ],
});


// 使用组件
<Footer v-show="$route.meta.showFooter"> 我是Footer非路由组件2222 </Footer>
```



## 3. v-show 与 v-if 区别？（面试题）

* v-show：通过样式display控制
* v-if：通过元素上树与下树进行操作



补充面试题：开发项目的时候，优化手段有哪些?

1. v-show|v-if
2. 按需加载



# 七、路由传参

## 1. 路由跳转有哪几种方式？

* 声明式导航：`router-link`（务必要有to属性），可以实现路由的跳转。
* 编程式导航：利用的是组件实例的 `$router.push | replace` 方法，可以实现路由的跳转，同时可以书写自己的业务。



## 2. 路由传参，参数有几种写法？

[vue路由传参的三种基本方式](https://segmentfault.com/a/1190000012393587)

* params参数：属于路径的一部分，需要注意，在配置路由的时候，需要占位。
* query参数：不属于路径的一部分，类似于ajax中的queryString，/home?k1=v1&k2=v2，不需要占位。



```js
// 第一步：需要对应路由配置如下：
{
  	path: "/search/:key",    // 方式一、方式二必备
  	component: Search,
    name: "name_search",	// 命名，方式三必备
},
    
    
// 第二步：触发路由跳转
goSearch1() {
	// 路由传参
	// 方式一：字符串
	this.$router.push(
		"/search" + "/" + this.searchKey + "?kk=" + this.searchKey.toUpperCase()
	);
    
    // 方式二：模板字符串
    this.$router.push(
    	`/search/${this.searchKey}?kk=${this.searchKey.toUpperCase()}`
    );

    // 方式三：对象 (常用)
    this.$router.push({
   	 	name: "name_search",
   	 	params: { key: this.searchKey },
    	query: { kk: this.searchKey.toUpperCase() },
    );
},
    
    
// 第三步：获取传递过来的参数
<h1>params参数：=== {{ $route.params.key }}</h1>
<h1>query参数：=== {{ $route.query.kk }}</h1>
```











9）路由传参
params参数：路由需要占位，程序就崩了，属于URL当中一部分
query参数：路由不需要占位，写法类似于ajax当中query参数
路由传递参数先关面试题
     1:路由传递参数（对象写法）path是否可以结合params参数一起使用?
     不可以：不能这样书写，程序会崩掉
     2:如何指定params参数可传可不传? 
     3:params参数可以传递也可以不传递，但是如果传递是空串，如何解决？
     4:如果指定name与params配置, 但params中数据是一个"", 无法跳转，路径会出问题
     5: 路由组件能不能传递props数据?
     











