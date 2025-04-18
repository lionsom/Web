# 简介

> JS ESM模块化方案。

# esm设置

在 `package.json` 中添加 `type: "module"`，就可以不用写 `.mjs` 后缀了。

# 测试代码

```
// 正确代码
import mmm from './index.js'
console.log('test01 = ', mmm.BaseMethods.getTypeOf('123'));
console.log('test02 = ', mmm.Validate.mobileCheck('123'));

```


```
// 错误代码，ESM默认导出，不支持解构
import { BaseMethods, Validate } from './index.js';
console.log('test01 = ', Validate('123'));
console.log('test02 = ', BaseMethods('123'));
```