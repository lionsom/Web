[分析this指向 - 黑马](https://book.itheima.net/course/1258676978588860418/1277481554465005570/1277498068031250434)

[更改this指向 - 黑马](https://book.itheima.net/course/1258676978588860418/1277481554465005570/1277498068031250433)

[globalThis - MDN](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/globalThis)



# 一、this

## 1. 分析this指向

this的情况

1. 以函数形式调用时，this永远都是window

2. 以方法的形式调用时，this是调用方法的对象

3. 以构造函数的形式调用时，this是新创建的那个对象

4. 使用call和apply调用时，this是指定的那个对象

5. 静态方法中的this，在静态方法中不能使用this访问实例对象，因为静态方法与实例对象没有关联，在静态方法中如果使用this，访问到的是构造函数本身，即Person。

```js
function foo() {
  return this;
}

var o = { name: 'Jim', func: foo };

console.log(foo() === globalThis); // 对应第1种情况，输出结果：true

console.log(o.func() === o);  // 对应第2种情况，输出结果：true
```



## 2. 更改this指向

除了遵循默认的this指向规则，函数的调用者还可以利用JavaScript提供的两种方式手动控制this的指向。一种是通过的apply()方法，另一种是通过call()方法。

```js
function method() {
  console.log(this);
  console.log(this.name);
}

method.apply({ name: '张三' });  // 输出结果：张三

method.call({ name: '李四' });    // 输出结果：李四
```







# 二、globalThis 与 this

`globalThis` 是 JavaScript 中一种指向全局对象的标准化方式，它在不同的环境（浏览器、Node.js 等）中都可以用来访问全局对象。这个属性是随着 ES2020 标准引入的，目的是提供一个跨平台的统一方式来访问全局对象。

在不同的环境中，全局对象的引用方式有所不同：
- 在 **浏览器** 中，全局对象是 `window`。
- 在 **Node.js** 中，全局对象是 `global`。
- 在 **Web Workers** 中，全局对象是 `self`。



## 1. 为什么需要 `globalThis`

在不同环境中，全局对象名称不统一，`globalThis` 提供了一个一致的方式，避免了手动判断环境。例如：

```javascript
console.log(globalThis); // 在任何环境中都可以返回全局对象
```



## 2. 使用 `globalThis`

`globalThis` 可用于直接访问全局变量和函数。以下是一些常见用法：

1. **定义和访问全局变量**
   ```javascript
   globalThis.myGlobalVar = "Hello, world!";
   console.log(globalThis.myGlobalVar); // 输出: Hello, world!
   ```

2. **跨平台访问全局对象**
  
   ```javascript
   function checkEnvironment() {
       if (globalThis.window) {
           console.log("Running in a browser");
       } else if (globalThis.global) {
           console.log("Running in Node.js");
       } else if (globalThis.self) {
           console.log("Running in a Web Worker");
       }
   }
   checkEnvironment();
   ```



## 3. `globalThis` 和 `this` 的区别

- `globalThis` 始终指向全局对象。
- `this` 的值根据作用域和调用方式而改变。