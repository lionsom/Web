# JavaScript 类 class

<font color='red' size=5>类是用于创建对象的模板。</font>

* 类方法

| 方法                                                         | 描述                         |
| :----------------------------------------------------------- | :--------------------------- |
| [constructor()](https://www.runoob.com/js/jsref-constructor-class.html) | 构造函数，用于创建和初始化类 |

* 类关键字

| 关键字                                                       | 描述                   |
| :----------------------------------------------------------- | :--------------------- |
| [extends](https://www.runoob.com/js/jsref-class-extends.html) | 继承一个类             |
| [static](https://www.runoob.com/js/jsref-class-static.html)  | 在类中定义一个静态方法 |
| [super](https://www.runoob.com/js/jsref-class-super.html)    | 调用父类的构造方法     |



## 类的构造函数 - `constructor()`

ES 6增加了 `class` 关键字，用来定义一个类，在类中可以定义 `constructor()` 构造方法，用来初始化对象的成员。下面我们通过代码演示类的定义和使用。

每个类中包含了一个特殊的方法 `constructor()`，它是类的构造函数，这种方法用于创建和初始化一个由 **class** 创建的对象。

```js
/*
 * 以下创建了一个类，名为 "Runoob"。
 * 类中初始化了两个属性： "name" 和 "url"。
 */
class Runoob {
  constructor(name, url) {
    this.name = name;
    this.url = url;
  }
}
```

构造方法是一种特殊的方法：

- 构造方法名为 `constructor()`。
- 构造方法在创建新对象时会自动执行。
- 构造方法用于初始化对象属性。
- 如果不定义构造方法，JavaScript 会自动添加一个空的构造方法。



## 创建类的语法格式

### 最常见

```js
class Runoob {
  constructor(name, url) {
    this.name = name;
    this.url = url;
  }
}
```

### 类表达式

* [类表达式 - MDN](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/class)

* 未命名 / 匿名类

```js
// 未命名/匿名类
let Runoob = class {
  constructor(name, url) {
    this.name = name;
    this.url = url;
  }
};

// 创建对象
const run = new Runoob('A', 'http://www.baidu.com');
console.log(run.name);
// output: "A"

console.log(Runoob.name);
// output: "Runoob"
```

* 命名类

```js
// 命名类
let Runoob = class Runoob2 {
  constructor(name, url) {
    this.name = name;
    this.url = url;
  }
};

console.log(Runoob.name);
// 输出: "Runoob2"
```



## ES6之前的面向对象表示

### 1. 类的定义
(1) 构造器和类在一起定义
(2) 方法定义在类的外面，使用prototype定义类的方法
在之前，利用function来定义一个类：

```js
function User(name, pass){
  this.name = name;
  this.pass = pass;
}

User.prototype.showName = function(){
  console.log(this.name);
}

User.prototype.showPass = function(){
  console.log(this.pass);
}

var user = new User('Tom', '1234');
user.showName();
user.showPass();
```

### 2. 类的继承
使用call关键字来继承父类的变量:

```js
function vipUser(name, pass, level){
  User.call(this, name, pass);
  this.level = level;
}

vipUser.prototype = new User;
vipUser.prototype.constructor = vipUser;
vipUser.prototype.showLevel = function(){
  console.log(this.level);
}
```



## ES6中面向对象表示 — class

### 1. 类的定义
(1) 构造器和类分开了
(2) class里面直接加方法

```js
class User{
    // 构造器
    constructor(name, pass){
    	this.name = name;
    	this.pass = pass;
    }
    
    // 函数也直接在类中声明
    showName(){
    	console.log(this.name);
    }
    
    showPass(){
    	console.log(this.pass);
    }
}
```

### 2. 类的继承
(1) 使用super关键词继承父类的属性
(2) 父类的方法直接就继承了

```js
//类的继承
class VipUser extends User {
  //父类中的属性还是要有滴
  constructor(name, pass, level){
    // super是超类，也就是父类，利用这个关键词继承父类的属性
    super(name, pass);
    this.level = level;
  }

  //函数也直接在类里面声明即可
  showLevel(){
    console.log(this.level)
  }
}
```



















