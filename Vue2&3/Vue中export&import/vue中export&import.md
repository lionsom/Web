在使用vue导出时会有一个default关键字，下面举例说明下在导出时使用export和export default的对应的import写法的区别

# 一、部分导出 - 部分导入

部分导出和部分导入的优势，当资源比较大时建使用部分导出，这样一来使用者可以使用部分导入来减少资源体积，比如element-ui官方的就推荐使用部分导入来减少项目体积，因为element-ui是一个十分庞大的框架，如果我们只用到其中的一部分组件， 那么只将用到的组件导入就可以了。

## 1.1 部分导出

```js
export function helloWorld(){
    conselo.log("Hello World");
}

export function test(){
    conselo.log("this's test function");
}
```

另一种写法，这种方法比较不推荐，因为看起来会比较乱。

```js
var helloWorld = function(){
    conselo.log("Hello World");
}
var test = function(){
    conselo.log("this's test function");
}

export helloWorld
export test
```



## 1.2 部分导入

只导入需要的资源

```js
import { helloWorld } from "./utils.js" 	// 只导入utils.js中的helloWorld方法

helloWorld(); 	// 执行utils.js中的helloWorld方法
```



# 二、部分导出 - 全部导入

如果我们需要utils.js中的全部资源则可以全部导入

```js
import * as utils from "./utils.js"		// 导入全部的资源，utils为别名，在调用时使用

utils.helloWorld(); 	// 执行utils.js中的helloWorld方法
utils.test(); 	// 执行utils.js中的test方法
```



# 三、全部导出 - 全部导入

如果使用全部导出，那么使用者在导入时则必须全部导入，推荐在写方法库时使用部分导出，从而将全部导入或者部分导入的权力留给使用者。

## 3.1 全部导出

**需要注意的是:一个js文件中可以有多个export，但只能有一个export default**

```JS
var helloWorld=function(){
    conselo.log("Hello World");
}
var test=function(){
    conselo.log("this's test function");
}

export default{
    helloWorld,
    test
} 
```



## 3.2 全部导入

```js
import utils from "./utils.js"

utils.helloWorld();
utils.test();
```



# 四、局部使用 + 全局使用

## 4.1 局部使用

在上面的例子中，都是在当前页面调用，直接http.get或http.post就行，在此不再赘述

## 4.2 全局变量

更多的是全局变量，比如封装的get或post请求方法等

```js
import http from './utils/http';
// 挂载至全局
Vue.prototype.http = http
```

引入之后，借助Vue的prototype属性将变量挂载到全局中，这样在任何.vue页面中，直接用this.http.get或this.http.post即可，别忘了this，注意this作用域。



# 五、备注

* 当import 引入依赖包的时候，不需要相对路径，直接引入包名即可，形如：`import axios from ‘axios’;`

* 一个js文件中可以有多个export，但只能有一个 `export default`













