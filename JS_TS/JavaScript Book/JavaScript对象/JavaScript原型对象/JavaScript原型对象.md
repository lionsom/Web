* [JavaScript prototype（原型对象） - 菜鸟](https://www.runoob.com/js/js-object-prototype.html)

* [原型对象 - 黑马](https://book.itheima.net/course/1258676978588860418/1277481554465005570/1277497920576299011)



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