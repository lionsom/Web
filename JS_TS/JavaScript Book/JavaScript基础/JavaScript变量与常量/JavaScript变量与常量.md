# 引言：let 和 const (ES6)

<font color='red' size=5>ES2015(ES6) 新增加了两个重要的 JavaScript 关键字: **let** 和 **const**。</font>

在 2015 年以前，我们使用 var 关键字来声明 JavaScript 变量。

在 2015 后的 JavaScript 版本 (ES6) 允许我们使用 const 关键字来定义一个常量，使用 let 关键字定义的限定范围内作用域的变量。





# JavaScript 变量

* [ECMAScript 6 入门 - let](https://es6.ruanyifeng.com/#docs/let)



## 一、var 与 let 对比

在 JavaScript 中，`let` 和 `var` 都是用于声明变量的关键字，它们之间有几个重要的区别：

1. **作用域：**
    * 使用 `var` 声明的变量具有函数作用域；
    * 而使用 `let` 声明的变量具有块级作用域。块级作用域意味着变量只在声明它的块（如 `{ }`）内部可见，而函数作用域则意味着变量在整个函数内都可见。
2. **变量提升：**
    * 使用 `var` 声明的变量会存在变量提升，即变量可以在其声明之前使用，但是其值为 `undefined`。
    * 而使用 `let` 声明的变量不存在变量提升，试图在声明之前使用 `let` 声明的变量会导致错误。
3. **重复声明：**
    * 使用 `var` 可以重复声明同名变量；
    * 而使用 `let` 在同一作用域内重复声明同名变量会导致错误。
4. **全局对象属性：**
    - 用 `var` 声明的全局变量会成为全局对象的属性（在浏览器环境中是 `window` 对象的属性）。
    - 用 `let` 声明的全局变量不会成为全局对象的属性。
5. **临时死区（Temporal Dead Zone，TDZ）：**
    - 使用 `let` 声明的变量存在临时死区（TDZ），在变量声明之前访问该变量会导致 ReferenceError 错误。

总的来说，`let` 更加安全和可控，因为它避免了变量提升和重复声明，同时提供了更细粒度的作用域控制。因此，在现代 JavaScript 开发中，推荐优先使用 `let` 而不是 `var`。



### 代码示例

**优化一：var可以先使用，后声明（不合理）；let没有变量提升**

```js
// 描述：此时num先使用，后声明。
num = 10;
console.log(num);
var num;
// 10


// 描述：let解决了此问题
num = 10;
console.log(num);
let num;
// Uncaught ReferenceError: Cannot access 'num' before initialization
```



**优化二：var可以重复声明同名变量（不合理）；let变量不能重复声明**

```js
// 描述：var重复声明变量，取最后一个。
var num = 10
var num = 20
console.log(num)
// 20


// 描述：let不支持重复声明同名变量
let num = 10
let num = 20
console.log(num)
// Uncaught SyntaxError: Identifier 'num' has already been declared
```



**优化三：var没有块级作用域；let定义块级作用域变量**

在ES6之前，我们都是用var来声明变量，而且JS只有 **函数作用域** 和 **全局作用域**，没有 **块级作用域**，所以`{}`限定不了var声明变量的访问范围。

在代码块内，使用let命令声明变量之前，该变量都是不可用的。这在语法上，称为 **“暂时性死区”**（temporal dead zone，简称 TDZ）。

```js
// 描述：var没有块级作用域
{
		var i = 9;
}
console.log(i);
// 9


// 描述：let有块级作用域
{
		let i = 9;  // i变量只在 花括号内有效！！！
}
console.log(i);
// Uncaught ReferenceError: i is not defined
```



## 二、变量提升 

> 声明提升（hoisting）：函数声明和变量声明总是会被解释器悄悄地被"提升"到方法体的最顶部。

### a. 声明提升，初始化不会提升

[runoob - JavaScript 声明提升](https://www.runoob.com/js/js-hoisting.html)

**声明提升**

```js
// 声明提升
x = 5; // 变量 x 设置为 5
console.log(a);
var x; // 声明 x

// 输出
5
```

**初始化提升（不支持）**

```js
 // 初始化提升，失败
var x = 5; // 初始化 x
console.log(x);
console.log(y);
var y = 7; // 初始化 y

// 输出
5
undefined
```

```js
var x = 5; // 初始化 x
var y;     // 声明 y
console.log(x);
console.log(y);
y = 7;    // 设置 y 为 7

// 输出
5
undefined
```



### b. 面试题

在ES6之前，我们都是用var来声明变量，而且JS只有 **函数作用域** 和 **全局作用域**。

```js
// 常见面试题目1：
var a = 99;            // 全局变量a
f();                   // f是函数，虽然定义在调用的后面，但是函数声明会提升到作用域的顶部。 
console.log(a);        // a=>99,  此时是全局变量的a
function f() {
  console.log(a);      // 当前的a变量是下面变量a声明提升后，默认值undefined
  var a = 10;
  console.log(a);      // a => 10
}

// 输出结果：
undefined
10
99
```



## 三、let 配合for循环的独特应用

`let` 非常适合用于 `for` 循环内部的块级作用域。JS中的for循环体比较特殊，每次执行都是一个全新的独立的块作用域，用let声明的变量传入到 for 循环体的作用域后，不会发生改变，不受外界的影响。看一个常见的面试题目：

```js
for (var i = 0; i <10; i++) {  
  	setTimeout(function() {  // 同步注册回调函数到 异步的 宏任务队列。
    		console.log(i);      // 执行此代码时，同步代码for循环已经执行完成
  	}, 0);
}
// 输出结果
10 10 10 10 10 10 10 10 10 10
// 这里面的知识点： JS的事件循环机制，setTimeout的机制等
```

如果把 `var` 改成 `let` 声明：

```js
// i虽然在全局作用域声明，但是在for循环体局部作用域中使用的时候，变量会被固定，不受外界干扰。
for (let i = 0; i < 10; i++) { 
  setTimeout(function() {
    console.log(i);    //  i 是循环体内局部作用域，不受外界影响。
  }, 0);
}
// 输出结果：
0  1  2  3  4  5  6  7  8  9
```



### a. 循环作用域

使用 var 关键字：

```js
var i = 5;
for (var i = 0; i < 10; i++) {
    // 一些代码...
}
console.log(i); // 这里输出 i 为 10
```

使用 let 关键字：

```js
var i = 5;
for (let i = 0; i < 10; i++) {
    // 一些代码...
}
console.log(i); // 这里输出 i 为 5
```

> 在第一个实例中，使用了 **var** 关键字，它声明的变量是全局的，包括循环体内与循环体外。
>
> 在第二个实例中，使用 **let** 关键字， 它声明的变量作用域只在循环体内，循环体外的变量不受影响。



## 四、变量作用域

### 1. ES6 之前

<font color='red' size=5>在 ES6 之前，JavaScript 只有两种作用域： **全局变量** 与 **函数内的局部变量**。</font>

```js
/*
 * 作用域
 * 	- 作用域指一个变量的作用的范围
 * 	- 在JS中一共有两种作用域：
 * 		1.全局作用域
 * 			- 直接编写在script标签中的JS代码，都在全局作用域
 * 			- 全局作用域在页面打开时创建，在页面关闭时销毁
 * 			- 在全局作用域中有一个全局对象window，
 * 				它代表的是一个浏览器的窗口，它由浏览器创建我们可以直接使用
 * 			- 在全局作用域中：
 * 				创建的变量都会作为window对象的属性保存
 * 				创建的函数都会作为window对象的方法保存
 * 			- 全局作用域中的变量都是全局变量，
 * 				在页面的任意的部分都可以访问的到
 * 
 * 		2.函数作用域
 * 
 */

var a = "hello";
console.log(window.a);

// hello
```



#### a. 全局作用域 - 全局变量

在函数外声明的变量作用域是全局的：

```js
var carName = "Volvo";
 
// 这里可以使用 carName 变量
 
function myFunction() {
    // 这里也可以使用 carName 变量
}
```



#### b. 函数作用域 - 局部变量

在函数内声明的变量作用域是局部的（函数内）：

```js
// 这里不能使用 carName 变量

function myFunction() {
    var carName = "Volvo";
    // 这里可以使用 carName 变量
}
 
// 这里不能使用 carName 变量
```



### 2. ES6之后

#### a. 块级作用域（Block Scope）

使用 var 关键字声明的变量不具备块级作用域的特性，它在 {} 外依然能被访问到。

```js
{ 
    var x = 2; 
}
// 这里可以使用 x 变量
```

在 ES6 之前，是没有块级作用域的概念的。

ES6 可以使用 let 关键字来实现块级作用域。

let 声明的变量只在 let 命令所在的代码块 **{}** 内有效，在 **{}** 之外不能访问。

```js
{ 
    let x = 2;
}
// 这里不能使用 x 变量
```



## 五、HTML 代码中使用全局变量

在 JavaScript 中, 全局作用域是针对 JavaScript 环境。

在 HTML 中, 全局作用域是针对 window 对象。

使用 **var** 关键字声明的全局作用域变量属于 window 对象:

```js
var carName = "Volvo";
// 可以使用 window.carName 访问变量
```

使用 **let** 关键字声明的全局作用域变量不属于 window 对象:

```js
let carName = "Volvo";
// 不能使用 window.carName 访问变量
```







# JavaScript 常量

## 一、常量（const）

**概念：**使用 const 声明的变量称为“常量”。 **声明时必须进行初始化，且初始化后值不可再修改。**

**使用场景：**当某个变量永远 **不会改变** 的时候，就可以使用 const 来声明，而不是let。 

**命名规范：**和变量一致 

```javascript
/*
 * 声明一个常量π
 */
const PI = 3.1415926;  

PI = 2.111; // ERROR: 1.常量不允许更改值

const PI1; // ERROR: 2.常量声明的时候必须赋值
```



### 1. `const`定义常量与使用`let` 定义的变量相似

- 二者都是块级作用域
- 都不能和它所在作用域内的其他变量或函数拥有相同的名称

两者还有以下两点区别：

- `const`声明的常量必须初始化，而 `let` 声明的变量不用
- `const` 定义常量的值不能通过再赋值修改，也不能再次声明。而 `let` 定义的变量值可以修改。

```js
var x = 10;
// 这里输出 x 为 10
{ 
    const x = 2;
    // 这里输出 x 为 2
}
// 这里输出 x 为 10
```



### 2. const 声明的常量必须初始化

```js
// 错误写法
const PI;
PI = 3.14159265359;

// 正确写法
const PI = 3.14159265359;
```



## 二、常量对象

使用 const 定义的对象或者数组，其实是可变的。下面的代码并不会报错：

```js
// 创建常量对象
const car = {type:"Fiat", model:"500", color:"white"};
 
// 修改属性:
car.color = "red";	// OK
 
// 添加属性
car.owner = "Johnson";	// OK
```

但是我们不能对常量对象重新赋值：

```js
const car = {type:"Fiat", model:"500", color:"white"};

car = {type:"Volvo", model:"EX60", color:"red"};    // ERROR
```



## 三、常量数组

```js
// 创建常量数组
const cars = ["Saab", "Volvo", "BMW"];
 
// 修改元素
cars[0] = "Toyota";		// OK
 
// 添加元素
cars.push("Audi");		// OK
```

但是我们不能对常量数组重新赋值：

```js
const cars = ["Saab", "Volvo", "BMW"];

cars = ["Toyota", "Volvo", "Audi"];    // ERROR
```















