[JavaScript中构造函数与类的区别](https://juejin.cn/post/6868970658840182797)

[JavaScript构造函数和类的区别](https://blog.csdn.net/zdn135860_/article/details/132184045)

[Object() 构造函数](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/Object)

[构造函数和类的区别 - 黑马](https://book.itheima.net/course/1258676978588860418/1277481554465005570/1277497920576299010)





在JavaScript中，构造函数和类都是用来创建对象的，但它们在语法和一些细节上存在区别。以下是它们的主要不同点：

## 1. **定义方式**
   - **构造函数**：构造函数是一个普通的函数，用于初始化对象。用构造函数创建对象时，通常使用`new`关键字来实例化。
     ```javascript
     function Person(name, age) {
         this.name = name;
         this.age = age;
     }
     let person1 = new Person("Alice", 10);
     ```
   - **类（class）**：类是ES6引入的新语法，用来声明对象的“模板”。类的定义更简洁、更符合面向对象编程的规范。
     ```javascript
     class Person {
         constructor(name, age) {
             this.name = name;
             this.age = age;
         }
     }
     let person1 = new Person("Alice", 10);
     ```

## 2. **原型继承**
   - **构造函数**：通过手动向`prototype`添加方法来实现继承。
     ```javascript
     function Person(name, age) {
         this.name = name;
         this.age = age;
     }
     Person.prototype.sayHello = function() {
         console.log(`Hello, my name is ${this.name}`);
     };
     ```
   - **类**：类中的方法默认定义在原型上，不需要手动修改`prototype`。
     ```javascript
     class Person {
         constructor(name, age) {
             this.name = name;
             this.age = age;
         }
         sayHello() {
             console.log(`Hello, my name is ${this.name}`);
         }
     }
     ```

## 3. **继承**
   - **构造函数**：通过`call`、`apply`或`Object.create()`方法来继承。
     ```javascript
     function Animal(name) {
         this.name = name;
     }
     function Dog(name, breed) {
         Animal.call(this, name); // 调用父构造函数
         this.breed = breed;
     }
     Dog.prototype = Object.create(Animal.prototype);
     Dog.prototype.constructor = Dog;
     ```
   - **类**：使用`extends`和`super`关键字，可以直接实现继承。
     ```javascript
     class Animal {
         constructor(name) {
             this.name = name;
         }
     }
     class Dog extends Animal {
         constructor(name, breed) {
             super(name); // 调用父类构造函数
             this.breed = breed;
         }
     }
     ```

## 4. **语法规范和使用限制**
   - **构造函数**：构造函数可以在声明前调用，因为函数声明会提升。
   - **类**：类声明不会提升，必须在声明后使用；否则会报错。
     
     ```javascript
     let cat = new Cat(); // Error: Cat is not defined
     class Cat {
         constructor(name) {
             this.name = name;
         }
     }
     ```

## 5. **在严格模式下运行**
   - **构造函数**：可以在非严格模式下运行。
   - **类**：类和类的方法总是在严格模式下运行，即便没有显式声明`'use strict'`。

## 6. 总结
- 构造函数是早期实现面向对象编程的方式，语法相对自由，功能可以通过`prototype`扩展。
- 类引入了更简洁和面向对象编程的语法，使代码更加模块化、可读性更高，并且带有内置的严格模式。