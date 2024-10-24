

# JavaScript 类继承

* [JavaScript 类继承 - 菜鸟教程](https://www.runoob.com/js/js-class-inheritance.html)

* [利用构造函数继承父类属性](https://book.itheima.net/course/1258676978588860418/1277481554465005570/1277498190332960770)
* [利用原型对象继承父类方法](https://book.itheima.net/course/1258676978588860418/1277481554465005570/1277498190332960769)



## 继承底层

JavaScript 并没有像其他编程语言一样具有传统的类，而是基于 **原型的继承模型**。

ES6 引入了类和 **class** 关键字，但底层机制仍然基于原型继承。



## 使用原型链继承 - ES6之前

在下面实例中，Animal 是一个基类，Dog 是一个继承自 Animal 的子类，`Dog.prototype` 使用 `Object.create(Animal.prototype)` 来创建一个新对象，它继承了 `Animal.prototype` 的方法和属性，通过将 `Dog.prototype.constructor` 设置为 Dog，确保继承链上的构造函数正确。

* 构造器和类在一起定义
* 方法定义在类的外面，使用prototype定义类的方法
* 使用call关键字来继承父类的变量

```js
function Animal(name) {
  this.name = name;
}
 
Animal.prototype.eat = function() {
  console.log(this.name + " is eating.");
};
 
function Dog(name, breed) {
  // 使用call关键字来继承父类的变量:
  Animal.call(this, name);
  this.breed = breed;
}
 
// 建立原型链，让 Dog 继承 Animal
Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;
 
Dog.prototype.bark = function() {
  console.log(this.name + " is barking.");
};
 
var dog = new Dog("Buddy", "Labrador");
dog.eat();  // 调用从 Animal 继承的方法
dog.bark(); // 调用 Dog 的方法


// console
> Buddy is eating.
> Buddy is barking.
```



## 使用 ES6 类继承

* ES6 引入了 `class` 关键字，使得定义类和继承更加清晰。

* `extends` 关键字用于建立继承关系，通过 `extends` 关键字可以让一个类继承另一个类，并且子类可以继承父类的属性和方法，还可以在子类中定义新的方法或重写父类的方法。

* `super` 关键字用于在子类构造函数中调用父类的构造函数。 

```js
class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(`${this.name} makes a sound.`);
  }
}

class Dog extends Animal {
  constructor(name, breed) {
    super(name); // 调用父类的构造方法
    this.breed = breed;
  }

  speak() {
    console.log(`${this.name} barks.`);
  }
}

const dog = new Dog('Buddy', 'Golden Retriever');
dog.speak(); // 输出: Buddy barks.
```

在这个例子中，`Dog` 类继承了 `Animal` 类，`Dog` 还重写了 `speak()` 方法。

