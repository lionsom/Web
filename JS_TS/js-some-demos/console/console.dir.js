function Person(uname) {
  this.uname = uname;
  this.age = 18;
}

Person.school = 'X大学';      // 添加静态属性school

Person.sayHello = function () {   // 添加静态方法sayHello
  console.log('Hello');
};


const p1 = new Person('小明');
console.log(p1);
console.dir(p1);