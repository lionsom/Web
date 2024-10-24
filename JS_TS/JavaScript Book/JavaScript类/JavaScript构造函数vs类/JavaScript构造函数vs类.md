[JavaScript中构造函数与类的区别](https://juejin.cn/post/6868970658840182797)

[JavaScript构造函数和类的区别](https://blog.csdn.net/zdn135860_/article/details/132184045)

[Object() 构造函数](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/Object)

[构造函数和类的区别 - 黑马](https://book.itheima.net/course/1258676978588860418/1277481554465005570/1277497920576299010)



```js
function Person(name,age,job){
  this.name = name;
  this.age = age;
  this.job = job
  this.sayName = function(){
    console.log(this.name)
  }
}
var person1 = new Person('张三','23',''teacher);
```







