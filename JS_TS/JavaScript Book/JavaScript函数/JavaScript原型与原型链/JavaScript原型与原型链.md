

# JavaScript中原型与原型链

# 原型 - prototype

## a. 为什么引入原型？

> 解决多个对象公用一个方法，减少内存。
>
> 将对象中共有的内容，统一设置到原型对象中。

**原方案：在构造方法中增加方法 	**

```js
/*
 * 创建一个Person构造函数
 * 	- 在Person构造函数中，为每一个对象都添加了一个sayName方法，
 * 		目前我们的方法是在构造函数内部创建的，
 * 			也就是构造函数每执行一次就会创建一个新的sayName方法
 * 		也是所有实例的sayName都是唯一的。
 * 		这样就导致了构造函数执行一次就会创建一个新的方法，
 * 			执行10000次就会创建10000个新的方法，而10000个方法都是一摸一样的
 * 			这是完全没有必要，完全可以使所有的对象共享同一个方法
 */
function Person(name , age , gender){
  this.name = name;
  this.age = age;
  this.gender = gender;
  //向对象中添加一个方法
  this.sayName = fun;
}

//将sayName方法在全局作用域中定义
/*
 * 将函数定义在全局作用域，污染了全局作用域的命名空间
 * 	而且定义在全局作用域中也很不安全
 */
function fun(){
  alert("Hello大家好，我是:"+this.name);
};

var per = new Person("孙悟空",18,"男");   // 每个对象都有一个新方法sayName()
var per2 = new Person("玉兔精",16,"女");	// 每个对象都有一个新方法sayName()
var per3 = new Person("奔波霸",38,"男");  // 每个对象都有一个新方法sayName()
```

**新方案：原型**

```js
//向原型中添加sayName方法
Person.prototype.sayName = function(){
  	alert("Hello大家好，我是:"+this.name);
};

//创建一个Person的实例
var per = new Person("孙悟空",18,"男");
var per2 = new Person("猪八戒",28,"男");
per.sayName();
per2.sayName();
```



## b. 原型的基本原理

```js
/*
 * 原型 prototype
 * 
 * 	我们所创建的每一个函数，解析器都会向函数中添加一个属性prototype
 * 		这个属性对应着一个对象，这个对象就是我们所谓的原型对象
 * 	如果函数作为普通函数调用prototype没有任何作用
 * 	当函数以构造函数的形式调用时，它所创建的对象中都会有一个隐含的属性，
 * 		指向该构造函数的原型对象，我们可以通过__proto__来访问该属性
 * 
 * 	原型对象就相当于一个公共的区域，所有同一个类的实例都可以访问到这个原型对象，
 * 		我们可以将对象中共有的内容，统一设置到原型对象中。
 * 
 * 当我们访问对象的一个属性或方法时，它会先在对象自身中寻找，如果有则直接使用，
 * 	如果没有则会去原型对象中寻找，如果找到则直接使用
 * 
 * 以后我们创建构造函数时，可以将这些对象共有的属性和方法，统一添加到构造函数的原型对象中，
 * 	这样不用分别为每一个对象添加，也不会影响到全局作用域，就可以使每个对象都具有这些属性和方法了
 */

function MyClass(){

}

//向MyClass的原型中添加属性a
MyClass.prototype.a = 123;

//向MyClass的原型中添加一个方法
MyClass.prototype.sayHello = function(){
  alert("hello");
};

var mc = new MyClass();

var mc2 = new MyClass();

console.log(MyClass.prototype);
console.log(mc2.__proto__ == MyClass.prototype);

//向mc中添加a属性
mc.a = "我是mc中的a";

console.log(mc2.a);

mc.sayHello();
```



## c. 原型的原型

```js
/*
* 原型对象也是对象，所以它也有原型，
* 	当我们使用一个对象的属性或方法时，会现在自身中寻找，
*   原型的原型对象，我们可以通过__proto__来访问该属性，
* 		自身中如果有，则直接使用，
* 		如果没有则去原型对象中寻找，如果原型对象中有，则使用，
* 		如果没有则去原型的原型中寻找,直到找到Object对象的原型，
* 		Object对象的原型没有原型，如果在Object原型中依然没有找到，则返回undefined
*/

console.log(mc.__proto__.hasOwnProperty("hasOwnProperty"));	// false
	
console.log(mc.__proto__.__proto__.hasOwnProperty("hasOwnProperty")); 	// true

console.log(mc.__proto__.__proto__.__proto__);	// null

console.log(mc.hello);	// undefined

console.log(mc.__proto__.__proto__.__proto__);	// null
```



## d. 向原型中添加一个name属性

```js
/*
 * 创建一个构造函数
 */
function MyClass(){
	
}

//向MyClass的原型中添加一个name属性
MyClass.prototype.name = "我是原型中的名字";

var mc = new MyClass();
mc.age = 18;
console.log(mc.name);

// 我是原型中的名字
```

**验证是否添加成功 - 同八-6-c**

```js
//使用in检查对象中是否含有某个属性时，如果对象中没有但是原型中有，也会返回true
console.log("age" in mc);	// true
console.log("name" in mc);	// true
console.log("hasOwnProperty" in mc);	// true

//可以使用对象的hasOwnProperty()来检查对象自身中是否含有该属性
//使用该方法只有当对象自身中含有属性时，才会返回true
console.log(mc.hasOwnProperty("age")); 	// true
console.log(mc.hasOwnProperty("name"));	// false
console.log(mc.hasOwnProperty("hasOwnProperty")); 	// false
```



## e. 重写toString()

**默认的toString()**

```js
function Person(name , age , gender){
    this.name = name;
    this.age = age;
    this.gender = gender;
}

var per = new Person("孙悟空", 18, "男");
var result = per.toString();
console.log(result);    

// [object Object]
```



**重写的toString()**

```js
function Person(name, age, gender) {
	this.name = name;
	this.age = age;
	this.gender = gender;
}

//修改Person原型的toString
Person.prototype.toString = function(){
	return "Person[name="+this.name+",age="+this.age+",gender="+this.gender+"]";
};

//创建一个Person实例
var per = new Person("孙悟空", 18, "男");
var result = per.toString();
console.log(result);

// Person[name=孙悟空,age=18,gender=男]
```



## f. 垃圾回收 - GC

```js
/*
 * 垃圾回收（GC）
 * 	- 就像人生活的时间长了会产生垃圾一样，程序运行过程中也会产生垃圾
 * 		这些垃圾积攒过多以后，会导致程序运行的速度过慢，
 * 		所以我们需要一个垃圾回收的机制，来处理程序运行过程中产生垃圾
 *  - 当一个对象没有任何的变量或属性对它进行引用，此时我们将永远无法操作该对象，
 * 		此时这种对象就是一个垃圾，这种对象过多会占用大量的内存空间，导致程序运行变慢，
 * 		所以这种垃圾必须进行清理。
 * 	- 在JS中拥有自动的垃圾回收机制，会自动将这些垃圾对象从内存中销毁，
 * 		我们不需要也不能进行垃圾回收的操作
 * 	- 我们需要做的只是要将不再使用的对象设置null即可
 * 
 */
var obj = new Object();
// 对对象进行各种操作。。。。
obj = null;
```

