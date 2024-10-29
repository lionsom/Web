// function Person() {}          // 定义函数

// console.log(Person.prototype);     // 输出结果：{constructor: ƒ}

// console.log(typeof Person.prototype);  // 输出结果：object







function Person(name) {
  this.name = name;
}

console.log(Person.prototype);
console.log(typeof Person.prototype);

Person.prototype.greet = function() {
  console.log(`Hello, my name is ${this.name}`);
};


const alice = new Person('Alice');
alice.greet(); // "Hello, my name is Alice"


// alice.__proto__ 指向 Person.prototype
console.log(alice.__proto__ === Person.prototype); // true

// undefined，不存在 alice.prototype
console.log(alice.prototype);