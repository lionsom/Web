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

## a. 隐含的参数

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



# 4. 立即执行函数 / 自调用函数

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







# 5. this

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



# 6. 构造函数 - 自定义

```js
/*
 * 创建一个构造函数，专门用来创建Person对象的
 * 	构造函数就是一个普通的函数，创建方式和普通函数没有区别,
 * 	不同的是构造函数习惯上首字母大写
 * 
 * 构造函数和普通函数的区别就是调用方式的不同
 * 	普通函数是直接调用，而构造函数需要使用new关键字来调用
 * 
 * 构造函数的执行流程：
 * 	1.立刻创建一个新的对象
 * 	2.将新建的对象设置为函数中this,在构造函数中可以使用this来引用新建的对象
 * 	3.逐行执行函数中的代码
 * 	4.将新建的对象作为返回值返回
 * 
 * 使用同一个构造函数创建的对象，我们称为一类对象，也将一个构造函数称为一个类。
 * 	我们将通过一个构造函数创建的对象，称为是该类的实例
 * 
 * this的情况：
 * 	1.当以函数的形式调用时，this是window
 * 	2.当以方法的形式调用时，谁调用方法this就是谁
 * 	3.当以构造函数的形式调用时，this就是新创建的那个对象
 * 
 */
function Person(name , age , gender){
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.sayName = function(){
      	alert(this.name);
    };
}

var per = new Person("孙悟空",18,"男");
var per2 = new Person("玉兔精",16,"女");
var per3 = new Person("奔波霸",38,"男");
```



## a. instanceof

```js
/*
 * 使用instanceof可以检查一个对象是否是一个类的实例
 * 	语法：
 * 		对象 instanceof 构造函数
 * 如果是，则返回true，否则返回false
 */
console.log(per instanceof Person);
console.log(dog instanceof Person);

/*
 * 所有的对象都是Object的后代，
 * 	所以任何对象和Object左instanceof检查时都会返回true
 */
console.log(dog instanceof Object);
```



# 6. 箭头函数 - ES6新增

* 有的箭头函数都没有自己的 **this**。 不适合定义一个 **对象的方法**。
* 使用 **const** 比使用 **var** 更安全，因为函数表达式始终是一个常量。
* 箭头函数是不能提升的，所以需要在使用之前定义。
* **注意：**IE11 及更早 IE 版本不支持箭头函数。

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



# 7. 函数是对象

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