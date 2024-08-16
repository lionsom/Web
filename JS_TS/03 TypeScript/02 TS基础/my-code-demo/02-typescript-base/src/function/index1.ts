// 注意：这是 JavaScript 代码

// 写法一：函数声明
function sum1(x: any, y: any) {
  return x + y
}

// 写法二：函数表达式
const sum2 = function (x: any, y: any) {
  return x + y
}

// 写法三：箭头函数
const sum3 = (x: any, y: any) => x + y

// 写法四：对象上的方法
const obj = {
  sum4(x: any, y: any) {
    return x + y
  },
}