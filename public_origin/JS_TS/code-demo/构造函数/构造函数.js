function Person(uname) {
  this.uname = uname;
}

Person.school = 'X大学';      // 添加静态属性school

Person.sayHello = function () {   // 添加静态方法sayHello
  console.log('Hello');
};

console.log(Person.school);     // 访问静态属性，输出结果：X大学

Person.sayHello();         // 访问静态方法，输出结果：Hello