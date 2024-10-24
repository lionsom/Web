[箭头函数 - 《ECMAScript6入门》 - 阮一峰](https://es6.ruanyifeng.com/#docs/function#%E7%AE%AD%E5%A4%B4%E5%87%BD%E6%95%B0)

[箭头函数表达式 - MDN](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Functions/Arrow_functions)





# 箭头函数 - ES6新增

* 箭头函数（Arrow Function）是 ES6 引入的一种简洁的函数表达式语法。
* 传统的 `function` 关键字定义的函数相比，在处理 `this` 上有不同的行为。
* 使用 **const** 比使用 **var** 更安全，因为函数表达式始终是一个常量。
* 箭头函数是不能提升的，所以需要在使用之前定义。
* **注意：**IE11 及更早 IE 版本不支持箭头函数。

* 总结：

    箭头函数提供了简洁的语法，并且与传统函数相比，它的 `this` 绑定方式更加灵活，非常适合用于回调函数和对象方法中。但需要注意的是，它不能用于构造函数，且没有 `arguments` 对象。

```js
// ES5
var x = function(x, y) {
     return x * y;
}
 
// ES6
const x = (x, y) => { return x * y };
// 更精简
const x = (x, y) => x * y;
```



## 一、简洁的语法

- 如果函数体只有一行表达式，并且要返回该值，可以省略 `{}` 和 `return` 关键字。
- 如果只有一个参数，可以省略圆括号 `()`。

```js
const square = x => x * x;
console.log(square(4)); // 输出: 16
```

如果没有参数或有多个参数，必须使用 `()`：

```js
const greet = () => console.log("Hello!");
greet(); // 输出: Hello!
```



## 二、`this` 绑定

- 箭头函数不会创建自己的 `this`，它会捕获上下文中最近的 `this` 值。对于回调函数非常有用，不必使用 `bind` 或 `self = this` 来手动绑定上下文。

例如，在对象方法中使用箭头函数：

```js
function Person() {
  this.age = 0;

  setInterval(() => {
    this.age++; // this 在箭头函数中指向外部的 Person 对象
    console.log(this.age);
  }, 1000);
}

const person = new Person(); // 每秒输出增加的年龄
```

如果使用传统的 `function`，则 `this` 在回调中指向 `window`（或 `undefined` 在严格模式下），因此必须手动绑定：

```js
function Person() {
  this.age = 0;

  setInterval(function() {
    this.age++; // 这里的 this 指向全局对象，需要手动绑定
    console.log(this.age);
  }.bind(this), 1000);
}
```



## 三、没有 `arguments` 对象

* [没有参数绑定 - MDN](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Functions/Arrow_functions#没有参数绑定)

箭头函数没有自己的 [`arguments`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Functions/arguments) 对象。因此，在本例中，`arguments` 是对外层作用域参数的引用：

```js
function foo(n) {
  const f = () => arguments[0] + n; // foo 的隐式参数绑定。arguments[0] 为 n
  return f();
}

foo(3); // 3 + 3 = 6
```

**备注：**在[严格模式](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Strict_mode#让_eval_和_arguments_变的简单)下不能声明名为 `arguments` 的变量，因此上面的代码会出现语法错误。这使得 `arguments` 的范围效应更容易理解。

在大多数情况下，使用[剩余参数](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Functions/rest_parameters)是比使用 `arguments` 对象更好的选择。

```js
function foo(n) {
  const f = (...args) => args[0] + n;
  return f(10);
}

foo(1); // 11
```



## 四、不能用作构造函数

- 箭头函数不能作为构造函数使用。如果你尝试使用 `new` 关键字调用箭头函数，将会抛出错误。

```javascript
const Person = (name) => {
  this.name = name;
};

const person = new Person('John'); // 会抛出错误：Person is not a constructor
```



## 五、不能用作方法

* [不能用作方法 - MDN](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Functions/Arrow_functions#不能用作方法)

箭头函数表达式只能用于非方法函数，因为它们没有自己的 `this`。让我们看看将它们用作方法时会发生什么：



##六、不能用作生成器

* [不能用作生成器 - MDN](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Functions/Arrow_functions#不能用作生成器)

箭头函数的主体中不能使用 [`yield`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/yield) 关键字（除非在箭头函数进一步嵌套的生成器函数中使用）。因此，箭头函数不能用作生成器。



## 七、使用场景

- **简化回调函数**： 使用箭头函数可以简化回调函数的书写，尤其是在处理异步代码时。

    ```javascript
    const numbers = [1, 2, 3];
    const doubled = numbers.map(n => n * 2);
    console.log(doubled); // 输出: [2, 4, 6]
    ```

- **解决 `this` 绑定问题**： 在需要手动绑定 `this` 的场景中，箭头函数能够避免繁琐的 `bind` 操作，尤其在类方法或者对象方法中很有用。









