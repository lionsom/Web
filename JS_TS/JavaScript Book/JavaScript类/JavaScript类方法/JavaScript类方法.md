# 类方法

## 1. 实例方法

实例方法是定义在类中的方法，可以通过实例化类来访问。

```js
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  // 实例方法
  greet() {
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
  }
}

const john = new Person('John', 30);
john.greet(); // 输出: Hello, my name is John and I am 30 years old.
```



## 2. 静态方法

静态方法是属于类本身的，而不是类的实例。静态方法通常用于创建实用函数，或者在类层面上执行的操作。

```js
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  // 实例方法
  greet() {
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
  }

  // 静态方法
  static species() {
    return 'Homo sapiens';
  }
}

const john = new Person('John', 30);
john.greet(); // 输出: Hello, my name is John and I am 30 years old.

console.log(Person.species()); // 输出: Homo sapiens
```

在这个例子中，`greet()` 是一个实例方法，`species()` 是一个静态方法。`species()` 方法不能通过实例 `john` 调用，而必须通过类 `Person` 调用。



## 3. 访问器方法（Getters 和 Setters）

类中还可以使用 `get` 和 `set` 关键字定义访问器方法，用来处理对象属性的读取和赋值操作。

```js
class Circle {
  constructor(radius) {
    this.radius = radius;
  }

  // getter 方法
  get diameter() {
    return this.radius * 2;
  }

  // setter 方法
  set diameter(value) {
    this.radius = value / 2;
  }
}

const circle = new Circle(5);
console.log(circle.diameter); // 输出: 10

circle.diameter = 20;
console.log(circle.radius); // 输出: 10
```

在这个例子中，`diameter` 既可以作为属性访问，也可以通过赋值改变 `radius` 的值。



## 4. 总结

- **实例方法**：通过类的实例来调用，操作实例的属性或执行操作。
- **静态方法**：通过类本身调用，通常用来创建工具函数或与实例无关的操作。
- **访问器方法（Getters / Setters）**：定义类中属性的访问和修改逻辑。

通过 `class` 语法可以清晰地定义 JavaScript 类及其方法，使代码更具结构性和可读性。