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



## 3. this - GPT

[JavaScript中的this](https://juejin.cn/post/6844903488304971789)

在 JavaScript 中，关键字 `this` 是一个非常重要的概念，它指向当前函数的执行上下文，具体的指向取决于函数调用的方式。以下是一些常见情况下 `this` 的指向：

1. **全局作用域下：**
    - 在全局作用域下，`this` 指向全局对象（在浏览器中通常是 `window` 对象）。
2. **函数中的 `this`：**
    - 在普通函数中，`this` 的指向取决于函数的调用方式。
    - 在函数内部，`this` 的值取决于函数的调用方式，可以是以下几种情况：
        - 在函数中，如果函数是作为对象的方法调用，`this` 指向调用该方法的对象。
        - 如果函数是作为普通函数调用，`this` 指向全局对象（在严格模式下是 `undefined`）。
        - 如果函数是作为构造函数使用，`this` 指向新创建的实例对象。
3. **箭头函数中的 `this`：**
    - 箭头函数没有自己的 `this`，它继承父作用域中的 `this` 值。
    - 在箭头函数中，`this` 的值由外层作用域决定。
4. **事件处理函数中的 `this`：**
    - 在事件处理函数中，`this` 通常指向触发事件的元素。
5. **使用 `call()`、`apply()`、`bind()` 显式绑定 `this`：**
    - 可以使用 `call()`、`apply()`、`bind()` 方法来显式绑定函数内部的 `this` 值。

理解 `this` 的指向是 JavaScript 中重要的概念，它影响函数内部的行为和属性访问。在编写 JavaScript 代码时，要注意不同情况下 `this` 的指向，以确保代码的正确性。希望这个解释对您有所帮助。如果您有任何其他问题，请随时告诉我。





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