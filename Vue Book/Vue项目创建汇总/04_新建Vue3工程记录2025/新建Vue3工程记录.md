# 创建Vue3 + TS + Vite



















# 问题：

ES5 中的动态导入调用需要“Promise”构造函数。请确保对 “Promise” 构造函数进行了声明或在 “--lib” 选项中包含了 “ES2015”。

```
ts ES5 / ES3中的异步函数或方法需要’Promise’构造函数(ts An async function or method in ES5/ES3 requires the ‘Promise’ constructor)
```

**解决方法：
在tsconfig.json中配置lib**

```json
// tsconfig.json
{
  "compilerOptions": {
    "lib": [ "es2015" ]
  }
}
```