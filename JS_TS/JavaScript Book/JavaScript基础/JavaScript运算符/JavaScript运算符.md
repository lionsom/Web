# JavaScript运算符

## 递增`++`和递减`--`运算符

```js
var a = 1, b = 1;

// ++在前，先++，再计算
console.log(++a);  // 输出结果：2（前置递增）
console.log(a);   // 输出结果：2

// ++在后，先算计，再++
console.log(b++);  // 输出结果：1（后置递增）
console.log(b);   // 输出结果：2
```



## 逻辑运算符

| **运算符** | **运算** | **示例** | **结果**                                          |
| ---------- | -------- | -------- | ------------------------------------------------- |
| &&         | 与       | a && b   | a和b都为true，结果为true，否则为false             |
| \|\|       | 或       | a \|\| b | a和b中至少有一个为true，则结果为true，否则为false |
| !          | 非       | !a       | 若a为false，结果为true，否则相反                  |



## 比较运算符

```js
// 比较运算符有隐式转换 把'2' 转换为 2  双等号 只判断值
console.log(2 == '2')  // true
console.log(undefined === null) // false
// === 全等 判断 值 和 数据类型都一样才行
// 以后判断是否相等 请用 ===  
console.log(2 === '2')
console.log(NaN === NaN) // NaN 不等于任何人，包括他自己
console.log(2 !== '2')  // true  
console.log(2 != '2') // false 
console.log('-------------------------')
console.log('a' < 'b') // true
console.log('aa' < 'ab') // true
console.log('aa' < 'aac') // true
console.log('-------------------------')
```





## JavaScript 中 `??` 与 `||` 的区别

* 空值合并运算符 ??

* 逻辑或运算符 ||

### 相同点

用法相同，都是前后是值，中间用符号连接。根据前面的值来**判断**最终返回前面的值还是后面的值。
`值1 ?? 值2`
`值1 || 值2`

### 不同点

判断方式不同：
使用 `??` 时，只有当 **值1** 为 `null` 或 `undefined` 时才返回**值2**；
使用 `||` 时，**值1**会转换为布尔值判断，为`true`返回**值1**，`false` 返回**值2**

### 示例

```js
// ??
undefined ?? 2	// 2
null ?? 2		// 2
0 ?? 2			// 0
"" ?? 2			// ""
true ?? 2		// true
false ?? 2		// false
NaN ?? 2 		// NaN

// ||
undefined || 2	// 2
null || 2		// 2
0 || 2			// 2
"" || 2			// 2
true || 2		// true
false || 2		// 2
NaN || 2		// 2 
```

