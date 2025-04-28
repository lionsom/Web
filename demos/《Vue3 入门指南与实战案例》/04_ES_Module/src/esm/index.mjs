
import m from './module.mjs'
console.log(m)


// src/esm/index.mjs
import { foo, bar } from './module.mjs'

foo()

console.log(bar)


// 注意这里使用了另外一种方式，将所有的命名导出都挂在了 `m` 变量上
import * as mm from './module.mjs'

console.log(typeof mm)
console.log(Object.keys(mm))

mm.foo()
console.log(mm.bar)



// 导入时重命名
import {
    foo as foo2,  // 这里进行了重命名
    bar as bar2
  } from './module.mjs'

// 用新的命名来调用模块里的方法
foo2()

// 这个不冲突就可以不必处理
console.log(bar2)


