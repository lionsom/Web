[控制编译代码的兼容性](https://vue3.chengpeiquan.com/guide.html#控制编译代码的兼容性)



# 如何查询代码在不同浏览器上的兼容性

## [Can I use](https://caniuse.com/)



#[babel](https://github.com/babel/babel)





# babel使用

安装以下几个 Babel 依赖：

```shell
$ npm i -D @babel/core @babel/cli @babel/preset-env
```

此时在 package.json 的 `devDependencies` 可以看到有了如下三个依赖：

```json
{
  "devDependencies": {
    "@babel/cli": "^7.21.0",
    "@babel/core": "^7.21.4",
    "@babel/preset-env": "^7.21.4"
  }
}
```

|       依赖        | 作用                                               |                          文档                          |
| :---------------: | :------------------------------------------------- | :----------------------------------------------------: |
|    @babel/cli     | 安装后可以从命令行使用 Babel 编译文件              |    [查看文档](https://babel.dev/docs/en/babel-cli)     |
|    @babel/core    | Babel 的核心功能包                                 |    [查看文档](https://babel.dev/docs/en/babel-core)    |
| @babel/preset-env | 智能预设，可以通过它的选项控制代码要转换的支持版本 | [查看文档](https://babel.dev/docs/en/babel-preset-env) |

> TIP
>
> 在使用 Babel 时，建议在项目下进行本地安装，尽量不选择全局安装，这是因为不同项目可能依赖于不同版本的 Babel ，全局依赖和可能会出现使用上的异常。



















