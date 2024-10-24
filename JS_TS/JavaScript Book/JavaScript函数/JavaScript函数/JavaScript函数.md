# 函数 - function

函数 function

* 函数也是一个对象
* 使用 `typeof` 检查一个函数对象时，会返回 `'function'`
* JavaScript 使用关键字 **function** 定义函数。



# 1. 函数定义

## a. 函数声明

```js
function fun1() {
    console.log("这是我的第二个函数~~~");
}
```



## b. 函数构造器 - `Function()`

函数同样可以通过内置的 JavaScript 函数构造器 `Function()`定义。

```js
var fun2 = new Function("console.log('Hello 这是我的第一个函数');");
var x = fun2();

// or
var myFunction = new Function("a", "b", "return a * b");
var x = myFunction(4, 3);
```



## c. 函数表达式

函数表达式是将声明的函数赋值给一个变量，通过变量完成函数的调用和参数的传递。

```js
var fun3 = function() {
	console.log("我是匿名函数中封装的代码");
};
var aaa = fun3();

// or
var x = function (a, b) {return a * b};
var z = x(4, 3);
```



# 2. 函数的参数

<font color='red' size=5>JavaScript 函数对参数的值没有进行任何的检查。</font>



## a. 显式参数(Parameters)与隐式参数(Arguments)

> 函数显式参数在函数定义时列出。
>
> 函数隐式参数在函数调用时传递给函数真正的值。



## b. 参数规则

* JavaScript 函数定义显式参数时没有指定数据类型。
* JavaScript 函数对隐式参数没有进行类型检测。
* JavaScript 函数对隐式参数的个数没有进行检测。

```js
function sum(a,b) {
    console.log(a+b);
}

/*
 * 调用函数时解析器不会检查实参的类型,
 * 	所以要注意，是否有可能会接收到非法的参数，如果有可能则需要对参数进行类型的检查
 *  函数的实参可以是任意的数据类型
 */
sum(123,"hello");
sum(true , false);

/*
 * 调用函数时，解析器也不会检查实参的数量
 * 	多余实参不会被赋值
 *  如果实参的数量少于形参的数量，则没有对应实参的形参将是undefined
 * 
 */
sum(123,456,"hello",true,null);
sum(123);
```



## c. ES6 函数可以自带参数

```js
function myFunction(x, y = 10) {
    // y is 10 if not passed or undefined
    return x + y;
}
 
myFunction(0, 2) // 输出 2
myFunction(5); // 输出 15, y 参数的默认值
```





## d. 函数内置对象 - this

```js
/*
 * 解析器在调用函数每次都会向函数内部传递进一个隐含的参数,
 * 	这个隐含的参数就是this，this指向的是一个对象，
 * 	这个对象我们称为函数执行的 上下文对象，
 * 	根据函数的调用方式的不同，this会指向不同的对象
 * 		1.以函数的形式调用时，this永远都是window
 * 		2.以方法的形式调用时，this就是调用方法的那个对象
 */

function fun(){
    // 表明：this = window，
    //		this.name = window.name
    console.log(this.name);
}

var name = "全局的name属性";
fun(); 

// 全局的name属性             
```



## e. 函数内置对象 - arguments

```js
/*
 * 在调用函数时，浏览器每次都会传递进两个隐含的参数：
 * 	1.函数的上下文对象 this
 * 	2.封装实参的对象 arguments
 * 		- arguments是一个类数组对象,它也可以通过索引来操作数据，也可以获取长度
 * 		- 在调用函数时，我们所传递的实参都会在arguments中保存
 * 		- arguments.length可以用来获取实参的长度
 * 		- 我们即使不定义形参，也可以通过arguments来使用实参，
 * 			只不过比较麻烦
 * 			arguments[0] 表示第一个实参
 * 			arguments[1] 表示第二个实参 。。。
 *		- 它里边有一个属性叫做callee，
 * 			这个属性对应一个函数对象，就是当前正在指向的函数的对象
 * 		
 */

function fun(a,b){
    console.log(arguments instanceof Array);  
    console.log(Array.isArray(arguments));
    console.log(arguments[1]);
    console.log(arguments.length);
    console.log(arguments.callee == fun);
}

fun("hello",true);

// false  false  true  2  true
```



## f. 剩余参数

* [剩余参数 - MDN](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Functions/rest_parameters)

**剩余参数**语法允许我们将一个不定数量的参数表示为一个数组。

```js
function sum(...theArgs) {
  let total = 0;
  for (const arg of theArgs) {
    total += arg;
  }
  return total;
}

console.log(sum(1, 2, 3));
// Expected output: 6

console.log(sum(1, 2, 3, 4));
// Expected output: 10
```



### 1. 剩余参数和 `arguments`对象的区别

* [剩余参数和 `arguments`对象的区别](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Functions/rest_parameters#剩余参数和_arguments对象的区别)

剩余参数和 [`arguments`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Functions/arguments)对象之间的区别主要有三个：

- 剩余参数只包含那些没有对应形参的实参，而 `arguments` 对象包含了传给函数的所有实参。
- `arguments`对象不是一个真正的数组，而剩余参数是真正的 [`Array`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array)实例，也就是说你能够在它上面直接使用所有的数组方法，比如 [`sort`](https://developer.mozilla.org/zh-CN/docs/JavaScript/Reference/Global_Objects/Array/sort)，[`map`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/map)，[`forEach`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach)或[`pop`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/pop)。
- `arguments`对象还有一些附加的属性（如`callee`属性）。





# 3. 函数返回值

```js
/*
 * 	如果return语句后不跟任何值就相当于返回一个undefined，
 * 	如果函数中不写return，则也会返回undefined
 * 
 * 	return后可以跟任意类型的值
 */
function sum(a , b , c) {
    var d = a + b + c;
    return d;
}

//调用函数
//变量result的值就是函数的执行结果
//函数返回什么result的值就是什么
var result = sum(4,7,8);



/*
 * 返回值可以是任意的数据类型
 * 	也可以是一个对象，也可以是一个函数
 */
function fun2(){
    //返回一个对象
    return {name:"沙和尚"};
}

function fun3(){
    //在函数内部再声明一个函数
    function fun4(){
        alert("我是fun4");
    }
    
    //将fun4函数对象作为返回值返回
    return fun4;
}
```



# 4. 函数提升（Hoisting）

```js
myFunction(5);

function myFunction(y) {
    return y * y;
}
```

使用 **表达式定义函数** 时 **无法** 提升。



# 5. 立即执行函数 / 自调用函数

下面的函数实际上是一个 **匿名自我调用的函数 (没有函数名)**。

```js
// 函数对象()
/*
 * 立即执行函数
 * 	函数定义完，立即被调用，这种函数叫做立即执行函数
 * 	立即执行函数往往只会执行一次
 */
(function(){
    alert("我是一个匿名函数~~~");
})();

(function(a,b){
    console.log("a = "+a);
    console.log("b = "+b);
})(123,456);
```



# 6. 函数是对象

在 JavaScript 中使用 `typeof` 操作符判断函数类型将返回 `"function"`。

但是JavaScript 函数描述为一个对象更加准确。

JavaScript 函数有 **属性** 和 **方法**。

arguments.length 属性返回函数调用过程接收到的参数个数：

```js
function myFunction(a, b) {    
    return arguments.length;
}
```



# 7. 函数对象的方法

## a. call() 和 apply()

在JavaScript中，每个函数对象都带有call()和apply()方法，即Function.prototype.call()和Function.prototype.apply()，这两个方法都是挂载在原型上的。

```js
function fun(a, b) {
    console.log("a = "+a);
    console.log("b = "+b);
    //alert(this);
}

var obj = {
    name: "obj",
    sayName:function(){
        alert(this.name);
    }
};

/*
 * call()和apply()
 * 	- 这两个方法都是函数对象的方法，需要通过函数对象来调用
 * 	- 当对函数调用call()和apply()都会调用函数执行
 * 	- 在调用call()和apply()可以将一个对象指定为第一个参数
 * 		此时这个对象将会成为函数执行时的this
 * 	- call()方法可以将实参在对象之后依次传递
 * 	- apply()方法需要将实参封装到一个数组中统一传递
 * 
 * 	- this的情况：
 * 		1.以函数形式调用时，this永远都是window
 * 		2.以方法的形式调用时，this是调用方法的对象
 * 		3.以构造函数的形式调用时，this是新创建的那个对象
 * 		4.使用call和apply调用时，this是指定的那个对象
 */
fun.call(obj,2,3);
fun.apply(obj,[2,3]);
```



# 