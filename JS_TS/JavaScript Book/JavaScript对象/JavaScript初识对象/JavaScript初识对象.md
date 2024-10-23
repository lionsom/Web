[MDN - JavaScript 标准内置对象](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects)





# 对象 - Object

### a. 对象分类 + 新增、修改、删除属性

```js
/*
 * 对象的分类：
 * 	1.内建对象
 * 		- 由ES标准中定义的对象，在任何的ES的实现中都可以使用
 * 		- 比如：Math String Number Boolean Function Object....
 * 
 * 	2.宿主对象
 * 		- 由JS的运行环境提供的对象，目前来讲主要指由浏览器提供的对象
 * 		- 比如 BOM DOM
 * 
 * 	3.自定义对象
 * 		- 由开发人员自己创建的对象
 */
 
 
// 创建对象
/*
 * 使用new关键字调用的函数，是构造函数constructor
 * 	构造函数是专门用来创建对象的函数
 * 使用typeof检查一个对象时，会返回object
 */
var obj = new Object();

/*
 * 在对象中保存的值称为属性
 * 向对象添加属性
 * 	语法：对象.属性名 = 属性值;
 */

//向obj中添加一个name属性
obj.name = "孙悟空";
//向obj中添加一个gender属性
obj.gender = "男";
//向obj中添加一个age属性
obj.age = 18;

/*
 * 读取对象中的属性
 * 	语法：对象.属性名
 * 
 * 如果读取对象中没有的属性，不会报错而是会返回undefined
 */

console.log(obj.gender);
console.log(obj.hello);

/*
 * 修改对象的属性值
 * 	语法：对象.属性名 = 新值
 */
obj.name = "tom";

/*
 * 删除对象的属性
 * 	语法：delete 对象.属性名
 */
delete obj.name;
```



### b. 属性名 + 属性值

```js
/*
 * 向对象中添加属性
 * 属性名：
 * 	- 对象的属性名不强制要求遵守标识符的规范
 * 		什么乱七八糟的名字都可以使用
 * 	- 但是我们使用是还是尽量按照标识符的规范去做
 * 
 */
obj.name = "孙悟空";

//obj.var = "hello";

/*
 * 如果要使用特殊的属性名，不能采用.的方式来操作
 * 	需要使用另一种方式：
 * 		语法：对象["属性名"] = 属性值
 * 	读取时也需要采用这种方式
 * 
 * 使用[]这种形式去操作属性，更加的灵活，
 * 	在[]中可以直接传递一个变量，这样变量值是多少就会读取那个属性
 * 
 */
obj["123"] = 789;
obj["nihao"] = "你好";
var n = "nihao";
console.log(obj["123"]);

/*
 * 属性值
 * 	JS对象的属性值，可以是任意的数据类型
 * 		甚至也可以是一个对象
 */

obj.test = true;
obj.test = null;
obj.test = undefined;

//创建一个对象
var obj2 = new Object();
obj2.name = "猪八戒";

//将obj2设置为obj的属性
obj.test = obj2;
```



### c. 检查一个对象中是否含有指定的属性

#### 方式一：in 运算符

```js
/*
 * in 运算符
 * 	- 通过该运算符可以检查一个对象中是否含有指定的属性
 * 		如果有则返回true，没有则返回false
 *  - 语法：
 * 		"属性名" in 对象
 */
//检查obj中是否含有test2属性
console.log("test2" in obj);
console.log("test" in obj);
console.log("name" in obj);
```



#### 方式二：hasOwnProperty()

```js
//可以使用对象的hasOwnProperty()来检查对象自身中是否含有该属性
//使用该方法只有当对象自身中含有属性时，才会返回true
console.log(mc.hasOwnProperty("age"));
```



### d. 对象字面量

```js
/*
 * 使用对象字面量，可以在创建对象时，直接指定对象中的属性
 * 语法：{属性名:属性值,属性名:属性值....}
 * 	对象字面量的属性名可以加引号也可以不加，建议不加,
 * 	如果要使用一些特殊的名字，则必须加引号
 * 
 * 属性名和属性值是一组一组的名值对结构，
 * 	名和值之间使用:连接，多个名值对之间使用,隔开
 * 	如果一个属性之后没有其他的属性了，就不要写,
 */
var obj2 = {

    name:"猪八戒",
    age:13,
    gender:"男",
    test:{name:"沙僧"}

};
```



### e. 对象属性是个函数

```js
/*
 * 创建一个对象
 */
var obj = new Object();

//向对象中添加属性
obj.name = "孙悟空";
obj.age = 18;

//对象的属性值可以是任何的数据类型，也可以是个函数
obj.sayName = function(){
    console.log(obj.name);
};

//console.log(obj.sayName);
//调方法
obj.sayName();



//对象字面量
var obj2 = {
    name:"猪八戒",
    age:18, // 属性
    sayName:function(){  // 方法
        console.log(obj2.name);
    }
};

obj2.sayName();
```



### f. 遍历属性

```js
var obj = {
    name:"孙悟空",
    age:18,
    gender:"男",
    address:"花果山"
 };

//枚举对象中的属性
//使用for ... in 语句
/*
* 语法：
* 	for(var 变量 in 对象){
* 	
*   }
* 
* for...in语句 对象中有几个属性，循环体就会执行几次
* 	每次执行时，会将对象中的一个属性的名字赋值给变量
*/

for(var n in obj){
    console.log("属性名:" + n);
    console.log("属性值:" + obj[n]);
}
```



### g. 创建对象

#### 方式一：对象字面量

```js
var obj2 = {
    name:"猪八戒",
    age:13,
    gender:"男",
    test:{name:"沙僧"}
};
```

#### 方式二：工厂方法

```js
/*
 * 使用工厂方法创建对象
 * 	通过该方法可以大批量的创建对象
 */
function createPerson(name , age ,gender){
    //创建一个新的对象 
    var obj = new Object();
    //向对象中添加属性
    obj.name = name;
    obj.age = age;
    obj.gender = gender;
    obj.sayName = function(){
      alert(this.name);
    };
    //将新的对象返回
  	return obj;
}

var obj2 = createPerson("猪八戒",28,"男");
var obj3 = createPerson("白骨精",16,"女");
var obj4 = createPerson("蜘蛛精",18,"女");
```

**工厂方法的弊端**

```js
/*
 * 用来创建狗的对象
 */
function createDog(name , age){
    var obj = new Object();
    obj.name = name;
    obj.age = age;
    obj.sayHello = function(){
      	alert("汪汪~~");
    };
    return obj;
}
/*
 * 使用工厂方法创建的对象，使用的构造函数都是Object
 * 	所以创建的对象都是Object这个类型，
 * 	就导致我们无法区分出多种不同类型的对象
 */
//创建一个狗的对象
var dog = createDog("旺财",3);

console.log(dog);
console.log(obj4);
```



#### 方式三：构造方法

* 十四、函数
    * 6. 构造函数

