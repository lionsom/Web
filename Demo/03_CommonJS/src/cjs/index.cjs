
/*
// 方式一
const m = require('./module.cjs')
console.log(m)
m.foo()
console.log(m.bar)

// 方式二
const { foo, bar } = require('./module.cjs')
foo()
console.log(bar)
*/


// 导入重命名，避免重名冲突
const {
    foo: foo_rename,  // 这里进行了重命名
    bar: bar_rename,
} = require('./module.cjs')

// 就不会造成变量冲突
const foo = 1
console.log(foo)

// 用新的命名来调用模块里的方法
foo_rename()

// 这个不冲突就可以不必处理
console.log(bar_rename)
