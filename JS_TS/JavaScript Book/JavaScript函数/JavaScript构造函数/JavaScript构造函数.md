# 一、构造函数 - before

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

var per1 = new Person("孙悟空",18,"男");
var per2 = new Person("玉兔精",16,"女");
var per3 = new Person("奔波霸",38,"男");
```



## 1. instanceof

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



# 二、构造函数 - ES5

## 1. 什么是构造函数

在 JavaScript 中，**构造函数是一种用于创建对象的特殊函数**。通过构造函数，你可以为对象定义属性和方法，并通过 `new` 关键字实例化对象。

## 2. 构造函数的基本结构
构造函数通常以大写字母开头，这是为了与普通函数区分开来。在构造函数中，`this` 关键字指向新创建的对象。

以下是一个简单的构造函数示例：

```javascript
function Person(name, age) {
  // 定义属性
  this.name = name;
  this.age = age;

  // 定义方法
  this.greet = function() {
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
  };
}

// 通过构造函数创建对象实例
const john = new Person('John', 30);
const jane = new Person('Jane', 25);

john.greet(); // 输出: Hello, my name is John and I am 30 years old.
jane.greet(); // 输出: Hello, my name is Jane and I am 25 years old.
```

## 3. 构造函数工作原理

1. **新对象创建**：当使用 `new` 调用构造函数时，JavaScript 引擎会创建一个新的空对象。
2. **`this` 绑定**：构造函数中的 `this` 会被绑定到新创建的对象上。
3. **属性和方法**：通过 `this` 将属性和方法绑定到新对象上。
4. **隐式返回对象**：构造函数会自动返回新创建的对象，除非显式地返回另一个对象。

## 4. 构造函数的特点

1. **新建对象**：使用 `new` 关键字调用构造函数时，会创建一个新的对象，并将其赋值给 `this`。
2. **返回对象**：构造函数不需要显式地返回值。默认情况下，构造函数会返回新创建的对象（除非显式返回其他对象）。
3. **共享方法**：每次通过构造函数创建的新对象，都会有自己独立的属性和方法。为避免每个实例都重新创建相同的方法，可以将方法定义在原型上。

## 5. 使用 `prototype` 定义共享方法
在上面的示例中，每个 `Person` 实例都有自己独立的 `greet` 方法。如果有多个对象实例，使用这种方式会占用不必要的内存空间。为了优化，可以将方法放在构造函数的 `prototype` 上，这样所有实例都会共享同一个方法。

```javascript
function Person(name, age) {
  this.name = name;
  this.age = age;
}

// 将 greet 方法定义在原型上
Person.prototype.greet = function() {
  console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
};

const john = new Person('John', 30);
const jane = new Person('Jane', 25);

john.greet(); // 输出: Hello, my name is John and I am 30 years old.
jane.greet(); // 输出: Hello, my name is Jane and I am 25 years old.
```

## 6. 构造函数与普通函数的区别

### 角度一：

- **普通函数**：可以直接调用，不需要使用 `new` 关键字。
- **构造函数**：用于创建对象实例，必须与 `new` 一起使用。使用 `new` 调用时，构造函数内部会自动执行以下步骤：
  1. 创建一个新的空对象 `{}`。
  2. 将构造函数中的 `this` 绑定到新对象上。
  3. 执行构造函数的代码。
  4. 如果构造函数没有返回其他对象，则自动返回新对象。

如果忘记使用 `new`，则 `this` 不会指向新对象，而是会指向全局对象（在严格模式下为 `undefined`），这可能会导致错误。

### 角度二：

- **调用方式**：普通函数直接调用，构造函数需要使用 `new` 关键字调用。
- **`this` 指向**：在普通函数中，`this` 通常指向全局对象或当前作用域对象，而在构造函数中，`this` 指向新创建的对象。



## 7. 静态成员和实例成员

[静态成员和实例成员](https://book.itheima.net/course/1258676978588860418/1277481554465005570/1277497920576299012)

在面向对象中有静态成员和实例成员的概念，实例成员是指实例对象的成员，例如，上述代码中的p1.name就是实例成员，而静态成员是指通过类或构造函数访问的成员，不需要创建实例对象就能访问。下面我们来演示静态成员的添加和访问。

```js
function Person(uname) {
  this.uname = uname;
}

Person.school = 'X大学';      // 添加静态属性school

Person.sayHello = function () {   // 添加静态方法sayHello
  console.log('Hello');
};

console.log(Person.school);     // 访问静态属性，输出结果：X大学

Person.sayHello();         // 访问静态方法，输出结果：Hello
```

### a. 静态方法中的this

需要注意的是，在静态方法中不能使用this访问实例对象，因为静态方法与实例对象没有关联，在静态方法中如果使用this，访问到的是构造函数本身，即Person。



## 8. 总结

构造函数是 JavaScript 中用于创建对象的一种常用模式。

通过结合 `this` 和 `prototype`，你可以高效地创建多个共享同一逻辑的对象实例，同时节省内存。

- 构造函数用于创建多个相似对象。
- 构造函数中的 `this` 关键字指向新创建的对象。
- 通过 `prototype` 可以让所有对象实例共享方法，而不在每个对象上单独创建。

