/**
 * 构造函数和类
 */
class Person {
  sing() {
    console.log('hello');
  }
}

var p1 = new Person();
var p2 = new Person();

console.log(p1.sing === p2.sing);  // 输出结果：true



function Student() {
  this.sing = function () {
    console.log('hello');
  };
}

var s1 = new Student();
var s2 = new Student();

console.log(s1.sing === s2.sing);  // 输出结果：false
