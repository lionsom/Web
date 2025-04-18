* [JavaScript Array - 菜鸟教程](https://www.runoob.com/jsref/jsref-obj-array.html)



# JavaScript数组

## 一、创建数组

<font color='red' size=5>在一个数组中你可以有不同的对象！！！</font>

```js
//创建数组对象
var arr = new Array();

//使用构造函数创建数组时，也可以同时添加元素，将要添加的元素作文构造函数的参数传递
//元素之间使用,隔开
var arr2 = new Array(10,20,30);

//创建一个长度为10的数组
var arr2 = new Array(10);

//使用字面量来创建数组
//语法:[]
var arr = [];

//数组中的元素可以是任意的数据类型
arr = ["hello",1,true,null,undefined];

//也可以是对象
var obj = {name:"孙悟空"};
arr = [obj,{name:"沙和尚"},{name:"猪八戒"}];

//也可以是一个函数
arr = [function(){alert(1)},function(){alert(2)}];

//二维数组
arr = [[1,2,3],[3,4,5],[5,6,7]];

//使用typeof检查一个数组时，会返回object
console.log(typeof arr);  // object
```



## 二、赋值、取值

```js
/*
 * 向数组中添加元素
 * 语法：数组[索引] = 值
 */
arr[0] = 10;
arr[1] = 33;
arr[2] = 22;
arr[3] = 44;
arr[10] = 31;



// 访问myCars数组的第一个值
var name = myCars[0];
```



## 三、数组属性

| 属性                                                         | 描述                             |
| :----------------------------------------------------------- | :------------------------------- |
| [constructor](https://www.runoob.com/jsref/jsref-constructor-array.html) | 返回创建数组对象的原型函数。     |
| [length](https://www.runoob.com/jsref/jsref-length-array.html) | 设置或返回数组元素的个数。       |
| [prototype](https://www.runoob.com/jsref/jsref-prototype-array.html) | 允许你向数组对象添加属性或方法。 |



## 四、Array对象方法

### a. length

```js
/*
 * 获取数组的长度
 * 可以使用length属性来获取数组的长度(元素的个数)
 * 	语法：数组.length
 * 
 * 对于连续的数组，使用length可以获取到数组的长度（元素的个数）
 * 对于非连续的数组，使用length会获取到数组的最大的索引+1
 * 		尽量不要创建非连续的数组
 */
console.log(arr.length);

/*
 * 修改length
 * 	如果修改的length大于原长度，则多出部分会空出来
 *  如果修改的length小于原长度，则多出的元素会被删除
 */
arr.length = 10;
```

### b. push()

```js
/*
 * push()
 * 	- 该方法可以向数组的末尾添加一个或多个元素，并返回数组的新的长度
 * 	- 可以将要添加的元素作为方法的参数传递，
 * 		这样这些元素将会自动添加到数组的末尾
 * 	- 该方法会将数组新的长度作为返回值返回
 */

var result = arr.push("唐僧","蜘蛛精","白骨精","玉兔精");
```

### c. pop()

```js
/*
 * pop()
 * 	- 该方法可以删除数组的最后一个元素,并将被删除的元素作为返回值返回
 */
result = arr.pop();
```

### d. unshift()

```js
/*
 * unshift()
 * 	- 向数组开头添加一个或多个元素，并返回新的数组长度
 * 	- 向前边插入元素以后，其他的元素索引会依次调整
 */
arr.unshift("牛魔王","二郎神");
```

### e. shift()

```js
/*
 * shift()
 * 	- 可以删除数组的第一个元素，并将被删除的元素作为返回值返回
 */
result = arr.shift();
```

### f. slice()

```js
/*
 * slice()
 * 	- 可以用来从数组提取指定元素
 * 	- 该方法不会改变元素数组，而是将截取到的元素封装到一个新数组中返回
 * 	- 参数：
 * 		1.截取开始的位置的索引,包含开始索引
 * 		2.截取结束的位置的索引,不包含结束索引
 * 			- 第二个参数可以省略不写,此时会截取从开始索引往后的所有元素
 * 		- 索引可以传递一个负值，如果传递一个负值，则从后往前计算
 * 			-1 倒数第一个
 * 			-2 倒数第二个
 */
var result = arr.slice(1,4);
result = arr.slice(3);
result = arr.slice(1,-2);
```

### h. splice()

```js
/*
 * splice()
 * 	- 可以用于删除数组中的指定元素
 * 	- 使用splice()会影响到原数组，会将指定元素从原数组中删除
 * 		并将被删除的元素作为返回值返回
 * 	- 参数：
 * 		第一个，表示开始位置的索引
 * 		第二个，表示删除的数量
 * 		第三个及以后。。
 * 			可以传递一些新的元素，这些元素将会自动插入到开始位置索引前边
 * 	
 */
arr = ["孙悟空","猪八戒","沙和尚","唐僧","白骨精"];
var result = arr.splice(3,0,"牛魔王","铁扇公主","红孩儿");
```

### i. concat()

```js
/*
 * concat()可以连接两个或多个数组，并将新的数组返回
 * 	- 该方法不会对原数组产生影响
 */
var result = arr.concat(arr2,arr3,"牛魔王","铁扇公主");
```

### j. join()

```js
/*
 * join()
 * 	- 该方法可以将数组转换为一个字符串
 * 	- 该方法不会对原数组产生影响，而是将转换后的字符串作为结果返回
 * 	- 在join()中可以指定一个字符串作为参数，这个字符串将会成为数组中元素的连接符
 * 		如果不指定连接符，则默认使用,作为连接符
 */
result = arr.join("@-@");
```

### k. reverse()

```js
/*
 * reverse()
 * 	- 该方法用来反转数组（前边的去后边，后边的去前边）
 * 	- 该方法会直接修改原数组
 */
arr.reverse();
```

### l. sort()

```js
/*
 * sort()
 * 	- 可以用来对数组中的元素进行排序
 * 	- 也会影响原数组，默认会按照Unicode编码进行排序
 */
arr.sort();

/*
 * 即使对于纯数字的数组，使用sort()排序时，也会按照Unicode编码来排序，
 * 	所以对数字进排序时，可能会得到错误的结果。
 */
arr = [2,5,7,11,22,333];
console.log(arr.sort())  //  [11, 2, 22, 333, 5, 7]  ERROR

/*
 * 我们可以自己来指定排序的规则
 * 	我们可以在sort()添加一个回调函数，来指定排序规则，
 * 		回调函数中需要定义两个形参,
 * 		浏览器将会分别使用数组中的元素作为实参去调用回调函数
 * 		使用哪个元素调用不确定，但是肯定的是在数组中a一定在b前边
 * 	- 浏览器会根据回调函数的返回值来决定元素的顺序，
 * 		如果返回一个大于0的值，则元素会交换位置
 * 		如果返回一个小于0的值，则元素位置不变
 * 		如果返回一个0，则认为两个元素相等，也不交换位置
 * 
 * 	- 如果需要升序排列，则返回 a-b
 * 		如果需要降序排列，则返回b-a
 */
arr = [5,4,2,1,3,6,8,7];

arr.sort(function(a,b){

    //前边的大
    /*if(a > b){
        return -1;
    }else if(a < b){
        return 1;
    }else{
        return 0;
    }*/

    //升序排列
    //return a - b;

    //降序排列
    return b - a;
});
```



## 五、遍历数组

### 1. **`for` 循环**
这是最基本的遍历方式，手动控制遍历的开始和结束条件。
```javascript
const arr = [1, 2, 3, 4, 5];
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}
```

### 2. **`for...of` 循环**
`for...of` 循环是 ES6 引入的，可以直接遍历数组的元素，更简洁。
```javascript
const arr = [1, 2, 3, 4, 5];
for (const value of arr) {
  console.log(value);
}
```

### 3. **`forEach`**
`forEach` 是数组对象自带的方法，用于遍历数组中的每个元素，适合做一些副作用操作。它不返回值。
```javascript
const arr = [1, 2, 3, 4, 5];
arr.forEach((value, index, array) => {
  console.log(value, index); // 输出值和索引
});
```

### 4. **`map`**
`map` 方法类似于 `forEach`，但它会返回一个新数组，每个元素都是由回调函数的返回值组成。
```javascript
const arr = [1, 2, 3, 4, 5];
const newArr = arr.map(value => value * 2); 
console.log(newArr); // 输出 [2, 4, 6, 8, 10]
```

### 5. **`filter`**
`filter` 方法用于过滤数组中的元素，它会根据回调函数的返回值 `true` 或 `false` 来决定是否保留该元素，并返回一个新的数组。
```javascript
const arr = [1, 2, 3, 4, 5];
const filteredArr = arr.filter(value => value > 2); 
console.log(filteredArr); // 输出 [3, 4, 5]
```

### 6. **`reduce`**
`reduce` 用于将数组中的值累积成一个单一的结果。它适合用来做汇总、累计操作。
```javascript
const arr = [1, 2, 3, 4, 5];
const sum = arr.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log(sum); // 输出 15
```

### 7. **`some`**
`some` 方法用于判断数组中是否至少有一个元素满足条件，如果有则返回 `true`，否则返回 `false`。
```javascript
const arr = [1, 2, 3, 4, 5];
const hasGreaterThanThree = arr.some(value => value > 3); 
console.log(hasGreaterThanThree); // 输出 true
```

### 8. **`every`**
`every` 方法用于判断数组中是否所有元素都满足条件，全部满足返回 `true`，否则返回 `false`。
```javascript
const arr = [1, 2, 3, 4, 5];
const allGreaterThanZero = arr.every(value => value > 0);
console.log(allGreaterThanZero); // 输出 true
```

### 9. **`find`**
`find` 方法用于返回数组中第一个满足条件的元素，如果没有找到则返回 `undefined`。
```javascript
const arr = [1, 2, 3, 4, 5];
const found = arr.find(value => value > 3);
console.log(found); // 输出 4
```

### 10. **`findIndex`**
`findIndex` 方法类似于 `find`，但是返回的是第一个满足条件的元素的索引，如果没有找到则返回 `-1`。
```javascript
const arr = [1, 2, 3, 4, 5];
const index = arr.findIndex(value => value > 3);
console.log(index); // 输出 3
```

### 11. **`entries`**
`entries` 方法返回一个包含数组键值对的迭代器，可以用 `for...of` 进行遍历。
```javascript
const arr = [1, 2, 3, 4, 5];
for (const [index, value] of arr.entries()) {
  console.log(index, value);
}
```

### 12. **`keys`**
`keys` 方法返回一个包含数组中每个索引的迭代器，可以使用 `for...of` 遍历。
```javascript
const arr = [1, 2, 3, 4, 5];
for (const key of arr.keys()) {
  console.log(key); // 输出 0, 1, 2, 3, 4
}
```

### 13. **`values`**
`values` 方法返回一个包含数组中每个元素的迭代器（与 `for...of` 类似）。
```javascript
const arr = [1, 2, 3, 4, 5];
for (const value of arr.values()) {
  console.log(value); // 输出 1, 2, 3, 4, 5
}
```

### 14. **`for...in`**
`for...in` 循环用于遍历对象的可枚举属性，在数组上使用时会遍历索引。
```javascript
const arr = [1, 2, 3, 4, 5];
for (const index in arr) {
  console.log(index); // 输出 0, 1, 2, 3, 4
}
```
> 注意：`for...in` 循环通常不推荐用于遍历数组，因为它会遍历对象继承的属性，并且返回的是数组的键（索引），而不是值。

### 总结
常用的数组遍历方法包括 `for`、`forEach`、`map`、`filter`、`reduce` 等，它们各有优劣，适合不同的场景。例如：
- **for**：最灵活，适用于复杂操作。
- **forEach**：用于遍历数组但不返回新数组。
- **map**：遍历数组并返回新数组。
- **filter**：返回满足条件的数组。
- **reduce**：将数组累积成一个值。