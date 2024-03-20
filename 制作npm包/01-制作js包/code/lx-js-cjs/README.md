# 简介
> JS CJS模块化方案。

# cjs设置
在 `package.json` 中添加 `type: "commonjs"`，就可以不用写 `.cjs` 后缀了。

# 测试代码

```
const { BaseMethods, Validate } = require('./index')

console.log('test01 = ', BaseMethods.getTypeOf('123'));
console.log('test02 = ', Validate.mobileCheck('123'));

```