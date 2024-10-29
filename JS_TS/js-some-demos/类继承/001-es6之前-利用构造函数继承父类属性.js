function Father(uname, age) {    // Father构造函数是父类
  this.uname = uname;
  this.age = age;
}

function Son(uname, age, score) {  // Son构造函数是子类
  Father.call(this, uname, age); // 子类继承父类的属性
  this.score = score;        // 子类可以拥有自己的特有属性
}

var son = new Son('张三', 18, 100);

console.log(son);  // 输出结果：Son {uname: "张三", age: 18, score: 100}
