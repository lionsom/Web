* [JavaScript prototype（原型对象） - 菜鸟](https://www.runoob.com/js/js-object-prototype.html)

    

# JavaScript中原型与原型链

原型 - prototype

原型链 - Prototype Chain

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

**验证是否添加成功**

同 『检查一个对象中是否含有指定的属性』

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









在 JavaScript 中，原型（prototype）是一个非常重要的概念，它为对象提供了继承和共享属性的机制。每个 JavaScript 对象都有一个与之关联的原型对象，通过原型对象，可以实现属性和方法的共享，从而减少内存占用。

所有的 JavaScript 对象都会从一个 prototype（原型对象）中继承属性和方法。

- **原型**是一个对象，它是其他对象的模板或蓝图。
- 当一个对象试图访问一个属性或方法时，如果在该对象自身没有找到，JavaScript 会沿着原型链向上查找，直到找到对应的属性或方法，或者达到原型链的顶端 `null` 为止。





# GPT

在 JavaScript 中，原型（prototype）是每个对象都拥有的一个内部属性，它用于继承和共享属性及方法。通过原型机制，JavaScript 实现了函数、对象等之间的继承关系。

### 什么是原型对象？

1. **构造函数的 `prototype` 属性**：每个函数在定义时，都会自动获得一个 `prototype` 属性，这个属性指向一个对象，称为原型对象。所有通过这个构造函数创建的实例对象，都会共享该原型对象的属性和方法。

2. **实例的 `__proto__` 属性**：每个实例对象内部都有一个 `__proto__` 属性（非标准属性），它指向创建该对象的构造函数的原型对象。`__proto__` 其实是实现原型链的关键。

### 构造函数与原型对象的关系

```javascript
function Person(name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype.greet = function() {
  console.log(`Hello, my name is ${this.name}`);
};

const john = new Person('John', 30);
const jane = new Person('Jane', 25);

john.greet(); // 输出: Hello, my name is John
jane.greet(); // 输出: Hello, my name is Jane
```

在这个例子中：

- `Person` 是构造函数。
- `Person.prototype` 是构造函数的原型对象。
- `greet` 方法定义在 `Person.prototype` 上，因此 `john` 和 `jane` 实例都可以访问并共享这个方法。

### 原型链

JavaScript 的继承机制是基于原型链的。当你访问一个对象的属性或方法时，JavaScript 引擎会先检查该对象本身是否有该属性，如果没有，会沿着对象的 `__proto__` （即原型）向上查找，直到找到该属性或到达原型链的顶端（`null`）。

```javascript
console.log(john.__proto__ === Person.prototype); // 输出: true
console.log(Person.prototype.__proto__ === Object.prototype); // 输出: true
console.log(Object.prototype.__proto__ === null); // 输出: true
```

原型链的查找顺序：

- 首先查找实例对象的自身属性；
- 如果没有找到，则查找该对象的原型对象（即 `__proto__`）；
- 如果在原型对象中也没有找到，则继续查找原型的原型，直到顶端 `Object.prototype`；
- 如果仍未找到，则返回 `undefined`。

### 修改原型对象

你可以直接给构造函数的 `prototype` 对象添加属性或方法，这样所有该构造函数的实例都可以共享这些方法。

```javascript
Person.prototype.sayAge = function() {
  console.log(`I am ${this.age} years old.`);
};

john.sayAge(); // 输出: I am 30 years old.
jane.sayAge(); // 输出: I am 25 years old.
```

### `constructor` 属性

原型对象有一个默认的 `constructor` 属性，指向关联的构造函数：

```javascript
console.log(Person.prototype.constructor === Person); // 输出: true
console.log(john.constructor === Person); // 输出: true
```

### 原型继承

通过原型，你可以实现对象之间的继承。在 JavaScript 中，类的继承实际上是基于原型的继承实现的。

```javascript
function Animal(name) {
  this.name = name;
}

Animal.prototype.speak = function() {
  console.log(`${this.name} makes a sound.`);
};

function Dog(name, breed) {
  Animal.call(this, name); // 调用父类构造函数
  this.breed = breed;
}

// 设置 Dog 的原型为 Animal 的实例
Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;

Dog.prototype.speak = function() {
  console.log(`${this.name} barks.`);
};

const dog = new Dog('Buddy', 'Golden Retriever');
dog.speak(); // 输出: Buddy barks
```

在这个例子中，`Dog` 继承了 `Animal`，并重写了 `speak` 方法。通过 `Object.create`，我们可以设置 `Dog.prototype` 的原型链指向 `Animal.prototype`，从而实现继承。

### 总结

- 每个对象都有一个原型，实例对象的原型是构造函数的 `prototype` 对象。
- 原型机制允许对象继承属性和方法，多个对象实例可以共享同一个原型对象中的属性和方法。
- 原型链用于在继承关系中查找属性或方法，直到到达 `Object.prototype`。
- 通过 `Object.create` 或手动设置原型链，可以实现对象之间的继承。







# 分割线



在 JavaScript 中，**原型**和**原型链**是构成其对象模型和继承机制的核心概念。通过原型和原型链，JavaScript 实现了基于对象的继承，使得对象可以共享属性和方法。以下是对这两个概念的详细介绍：

### **1. 原型（Prototype）**

在 JavaScript 中，每一个对象都有一个**原型对象**，该对象被称为 **prototype**。一个对象可以从其原型对象继承属性和方法。

#### 具体说明：

- 每个 JavaScript 对象都有一个隐藏的内部属性 `[[Prototype]]`，可以通过 `__proto__` 属性访问（非标准，但常用）。
- 构造函数的 `prototype` 属性指向其实例对象的原型对象。

例如，当你创建一个对象时，该对象会**自动引用**其构造函数的 `prototype`，从而继承它的属性和方法。

#### 示例：

```javascript
function Person(name) {
  this.name = name;
}

Person.prototype.greet = function() {
  console.log(`Hello, my name is ${this.name}`);
};

const alice = new Person('Alice');
alice.greet(); // "Hello, my name is Alice"

// alice.__proto__ 指向 Person.prototype
console.log(alice.__proto__ === Person.prototype); // true
```

在这个例子中：

- `Person` 是一个构造函数，`Person.prototype` 包含了 `greet` 方法。
- `alice` 是 `Person` 的一个实例对象，它继承了 `Person.prototype` 中的 `greet` 方法。

### **2. 原型链（Prototype Chain）**

**原型链**是指多个对象通过原型相互关联形成的一条链。JavaScript 对象通过这条链来实现属性的查找和继承机制。

- 当我们访问一个对象的属性或方法时，JavaScript 引擎首先在该对象本身上查找。
- 如果找不到该属性或方法，JavaScript 会沿着原型链向上查找该对象的原型对象。
- 这个查找过程会一直沿着原型链向上，直到找到目标属性/方法，或者直到到达 `null`（表示原型链的顶端）。

#### 示例：

```javascript
function Animal() {
  this.species = 'animal';
}

Animal.prototype.saySpecies = function() {
  console.log(this.species);
};

const dog = new Animal();

console.log(dog.species);  // 'animal'，从自身找到
dog.saySpecies();           // 'animal'，从原型链上找到

// 查看原型链
console.log(dog.__proto__);  // Animal.prototype
console.log(dog.__proto__.__proto__);  // Object.prototype
console.log(dog.__proto__.__proto__.__proto__);  // null
```

在这个例子中，`dog` 对象的 `saySpecies` 方法存在于其原型 `Animal.prototype` 中，而 `Animal.prototype` 自身也是一个对象，因此它也有原型 `Object.prototype`。当继续向上查找时，`Object.prototype` 的原型为 `null`，这标志着原型链的终点。

### **3. 构造函数、原型和实例之间的关系**

- **构造函数**：如 `Person`，它是一个函数，用来创建新的对象实例。
- **原型对象**：如 `Person.prototype`，它是构造函数的 `prototype` 属性。所有通过该构造函数创建的实例对象都共享这个原型对象。
- **实例对象**：如 `alice`，它是由构造函数创建的一个具体对象，拥有对原型对象的引用，并可以访问原型链上的属性和方法。

#### 示例：

```javascript
function Car(brand) {
  this.brand = brand;
}

Car.prototype.drive = function() {
  console.log(`Driving a ${this.brand}`);
};

const myCar = new Car('Toyota');

// 构造函数、原型对象和实例对象的关系
console.log(myCar.__proto__ === Car.prototype);  // true
console.log(Car.prototype.constructor === Car);  // true
console.log(Car.prototype.__proto__ === Object.prototype);  // true

myCar.drive();  // Driving a Toyota
```

在这个例子中：

- `Car` 是构造函数。
- `Car.prototype` 是原型对象，它包含 `drive` 方法。
- `myCar` 是通过 `new Car('Toyota')` 创建的实例对象，继承了 `Car.prototype` 的属性和方法。

### **4. Object.prototype 与原型链顶端**

所有的 JavaScript 对象最终都继承自 `Object.prototype`，这意味着原型链的最顶端是 `Object.prototype`，它的原型是 `null`。这也解释了为什么所有对象都可以使用 `Object.prototype` 上的方法（如 `toString()`、`hasOwnProperty()` 等）。

#### 示例：

```javascript
const obj = {};
console.log(obj.toString());  // [object Object]

// obj.__proto__ 是 Object.prototype
console.log(obj.__proto__ === Object.prototype);  // true

// Object.prototype.__proto__ 是 null，表示原型链的顶端
console.log(Object.prototype.__proto__);  // null
```

### **5. 原型链的查找过程**

当你试图访问对象的属性时，JavaScript 会按照以下顺序查找：

1. 首先检查对象自身是否有这个属性。
2. 如果对象自身没有这个属性，沿着对象的 `__proto__`（也就是原型）查找。
3. 如果原型对象中没有，继续沿着原型链向上查找。
4. 如果原型链的顶端 `Object.prototype` 也没有，返回 `undefined`。

#### 示例：

```javascript
function Person(name) {
  this.name = name;
}

Person.prototype.greet = function() {
  console.log(`Hello, I am ${this.name}`);
};

const alice = new Person('Alice');

// 查找过程：alice.name 是实例属性，直接返回
console.log(alice.name);  // Alice

// 查找过程：alice.greet 在原型链上找到
alice.greet();  // Hello, I am Alice

// 查找过程：alice.toString() 是从 Object.prototype 继承的
console.log(alice.toString());  // [object Object]
```

### **6. `hasOwnProperty()` 与原型链**

`hasOwnProperty()` 是 `Object.prototype` 上的一个方法，用于检查对象自身是否拥有某个属性，而不会查找原型链。

#### 示例：

```javascript
function Dog(name) {
  this.name = name;
}

Dog.prototype.bark = function() {
  console.log('Woof!');
};

const myDog = new Dog('Rex');

console.log(myDog.hasOwnProperty('name'));  // true
console.log(myDog.hasOwnProperty('bark'));  // false，bark 是从原型继承的
```

### **7. 原型链的继承**

通过原型链，可以实现对象的继承。子类对象可以从父类对象继承属性和方法。

#### 示例：

```javascript
function Animal() {
  this.type = 'Animal';
}

Animal.prototype.eat = function() {
  console.log('Eating...');
};

function Dog(name) {
  this.name = name;
}

// 让 Dog 继承 Animal
Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;

Dog.prototype.bark = function() {
  console.log('Woof!');
};

const myDog = new Dog('Rex');

console.log(myDog.type);  // Animal，继承自 Animal
myDog.eat();              // Eating...，继承自 Animal
myDog.bark();             // Woof!
```

在这个例子中，`Dog` 继承了 `Animal`，从而可以访问 `Animal.prototype` 中的 `eat` 方法。

### **总结**

- **原型**：每个对象都有一个原型，原型对象上可以定义共享的属性和方法，实例对象可以通过原型继承这些属性和方法。
- **原型链**：对象通过其原型对象相互关联，形成一个链条。属性和方法的查找会沿着原型链向上进行，直到找到或到达链的顶端（`null`）。
- **Object.prototype**：这是所有对象原型链的顶端，继承自 `Object.prototype` 的方法和属性对所有对象可用。

通过原型和原型链，JavaScript 实现了灵活的对象继承机制，使得代码能够通过共享原型对象来减少冗余、实现代码复用。







# 分割











**JavaScript 原型（Prototype）** 和 **原型链（Prototype Chain）** 是 JavaScript 面向对象编程的核心概念。它们帮助 JavaScript 实现继承和属性共享机制，尽管 JavaScript 本身并不像类（class）为基础的语言那样工作。

### **1. 原型（Prototype）**

在 JavaScript 中，每个函数（包括构造函数）都有一个特殊的属性叫做 `prototype`，用于存储所有实例共享的属性和方法。所有通过构造函数创建的对象实例都可以访问构造函数的 `prototype` 上的属性和方法。

#### 示例：

```javascript
function Person(name) {
  this.name = name;
}

// 向构造函数的原型对象添加方法
Person.prototype.sayHello = function() {
  console.log('Hello, my name is ' + this.name);
};

const person1 = new Person('Alice');
const person2 = new Person('Bob');

person1.sayHello(); // 输出：Hello, my name is Alice
person2.sayHello(); // 输出：Hello, my name is Bob
```

在这个例子中，`Person` 构造函数的原型对象（`Person.prototype`）上定义了 `sayHello` 方法。所有通过 `Person` 构造函数创建的实例（如 `person1` 和 `person2`）都可以访问并共享这个方法。

#### 每个对象都有一个内部属性 `[[Prototype]]`：

当通过构造函数创建对象时，JavaScript 引擎会将构造函数的 `prototype` 对象赋值给该实例对象的内部属性 `[[Prototype]]`。在现代 JavaScript 中，可以通过 `Object.getPrototypeOf(obj)` 或 `__proto__` 访问这个内部属性。

```javascript
console.log(person1.__proto__ === Person.prototype); // true
console.log(Object.getPrototypeOf(person1) === Person.prototype); // true
```

### **2. 原型链（Prototype Chain）**

JavaScript 通过 **原型链** 来实现继承。当访问一个对象的属性或方法时，如果该对象本身没有这个属性或方法，JavaScript 引擎会沿着原型链向上查找，直到找到为止。如果最后查找到 `null` 仍未找到，则返回 `undefined`。

#### 原型链查找过程：

1. 当访问对象的属性时，首先检查该对象自身是否有这个属性。
2. 如果没有，检查该对象的 `[[Prototype]]`（即其构造函数的 `prototype` 对象）。
3. 如果 `[[Prototype]]` 中也没有，继续沿着 `[[Prototype]]` 向上查找，直到找到 `null`（即原型链的终点）。

#### 示例：

```javascript
function Animal() {
  this.type = 'Animal';
}

Animal.prototype.walk = function() {
  console.log('Walking...');
};

function Dog(name) {
  this.name = name;
}

Dog.prototype = new Animal(); // Dog 继承自 Animal
Dog.prototype.constructor = Dog; // 修正 constructor 指向

const myDog = new Dog('Buddy');

console.log(myDog.name); // 'Buddy'，来自 Dog 自身
console.log(myDog.type); // 'Animal'，来自 Animal 的原型
myDog.walk(); // 'Walking...'，来自 Animal 的原型
```

在这个例子中，`Dog` 通过原型继承了 `Animal` 的属性和方法。当访问 `myDog.walk()` 时，JavaScript 引擎会沿着原型链查找，最终找到 `Animal.prototype` 上的 `walk` 方法并执行。

#### 原型链的结构图：

```
myDog → Dog.prototype → Animal.prototype → Object.prototype → null
```

- `myDog` 实例首先查找自身是否有 `walk` 方法。
- `Dog.prototype` 没有定义 `walk`，因此会继续查找 `Animal.prototype`，在这里找到了 `walk`。
- 如果 `Animal.prototype` 也没有定义 `walk`，它会继续向上查找 `Object.prototype`。
- 最终如果在整个原型链上都找不到，会返回 `undefined`。

### **3. 构造函数与原型链**

每个 JavaScript 对象都有一个 `prototype`（如果是函数）或 `[[Prototype]]`（如果是普通对象），这些原型之间通过链式引用形成了原型链。

#### 对象的构造函数：

每个对象都有一个 `constructor` 属性，它指向创建该对象的构造函数。例如，`myDog.constructor` 指向 `Dog`。

```javascript
console.log(myDog.constructor === Dog); // true
```

如果通过继承改变了原型对象，需要手动将 `constructor` 修正回来：

```javascript
Dog.prototype.constructor = Dog;
```

### **4. Object.prototype 是原型链的顶端**

所有对象最终都继承自 `Object.prototype`，这是原型链的顶端。如果查找到 `Object.prototype` 仍然找不到想要的属性或方法，最终会返回 `undefined`。

#### 示例：

```javascript
console.log(Object.prototype); // {}
console.log(myDog.toString()); // [object Object]
```

在这个例子中，`myDog` 没有 `toString` 方法，`Dog.prototype` 和 `Animal.prototype` 也没有，最终在 `Object.prototype` 上找到了 `toString` 方法。

### **5. 原型与原型链的作用**

- **继承**：通过原型链，JavaScript 可以实现简单的继承机制。子类可以继承父类的属性和方法。
- **共享方法**：原型上的方法可以被多个实例共享，不需要每个实例都创建一份，节省了内存。
- **动态扩展**：你可以随时给原型对象添加新的方法，所有实例都能立即访问到这些方法。

#### 示例：动态扩展

```javascript
Dog.prototype.bark = function() {
  console.log('Woof!');
};

myDog.bark(); // 输出：'Woof!'
```

即使在 `myDog` 实例创建之后，给 `Dog.prototype` 添加方法，实例仍然可以访问这个方法。

### **6. 原型链的缺点**

- **继承链过长会影响性能**：如果原型链层级过深，每次访问属性时都需要经过多次查找，可能会影响性能。
- **所有实例共享同一个原型**：如果某个实例修改了原型上的属性或方法，其他实例也会受到影响。为避免这种情况，应该在构造函数中定义实例的私有属性，在原型中定义共享的方法。

### **总结**

- **原型（Prototype）**：每个函数都有一个 `prototype` 对象，所有通过该函数创建的实例共享这个 `prototype` 上的属性和方法。
- **原型链（Prototype Chain）**：对象通过 `[[Prototype]]` 属性（或 `__proto__`）与其构造函数的 `prototype` 相连，形成一条查找链。当访问某个属性时，JavaScript 会沿着这条链逐层查找，直到找到该属性或到达原型链的顶端 `Object.prototype`。
- **继承与共享**：通过原型链实现属性和方法的继承，实例对象可以共享构造函数原型上的方法。

掌握原型和原型链是理解 JavaScript 继承、面向对象编程以及底层机制的重要一步。
