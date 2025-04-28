
// CJS 使用 module.exports 语法导出模块，可以导出任意合法的 JavaScript 类型，例如：字符串、布尔值、对象、数组、函数等等。
module.exports = 'Hello World'


module.exports = function fooo() {
    console.log("我是函数哈哈哈")
}


// 默认导出的时候，一个模块只包含一个值
// 先声明多个变量，然后通过 {} 对象的形式导出。

function foo() {
    console.log('Hello World from foo.')
}

const bar = 'Hello World from bar.'

module.exports = {
    bar,
    foo,
}