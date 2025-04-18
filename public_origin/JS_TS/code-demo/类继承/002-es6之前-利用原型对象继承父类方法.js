function Father() { }

Father.prototype.money = function () {
  console.log(100000);
};

function Son() { }

Son.prototype = new Father();     // 将父类的实例对象作为子类的原型对象
Son.prototype.constructor = Son;   // 将原型对象的constructor属性指向子类

new Son().money();    // 调用父类money()方法，输出结果：100000

Son.prototype.exam = function () { }; // 为子类增加exam()方法

console.log(Father.prototype.exam); // 子类不影响父类，输出结果：undefined
