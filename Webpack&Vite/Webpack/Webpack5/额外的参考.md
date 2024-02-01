# [webpack](https://mouday.github.io/coding-tree/#/doc/webpack?id=webpack)

学习笔记

- [Webpack4实战教程](https://mouday.github.io/coding-tree/#/blog/webpack/index)
- [Webpack5实战教程](https://mouday.github.io/coding-tree/#/blog/webpack/webpack5)
- [webpack-loader](https://mouday.github.io/coding-tree/#/blog/webpack/webpack-loader)
- [webpack-plugin](https://mouday.github.io/coding-tree/#/blog/webpack/webpack-plugin)

中文文档：

- [https://webpack.docschina.org](https://webpack.docschina.org/)

| 插件                         | github                                                       | 描述                                                         |
| ---------------------------- | ------------------------------------------------------------ | ------------------------------------------------------------ |
| webpack-manifest-plugin      | [github](https://github.com/shellscape/webpack-manifest-plugin) | 将 manifest 数据提取为一个 json 文件以供使用                 |
| html-webpack-plugin          | [github](https://github.com/jantimon/html-webpack-plugin)    | 生成HTML文件                                                 |
| mini-css-extract-plugin      | [github](https://github.com/webpack-contrib/mini-css-extract-plugin) | 用于将 CSS 从主应用程序中分离                                |
| webpack-bundle-analyzer      | [github](https://github.com/webpack-contrib/webpack-bundle-analyzer) | 它将 bundle 内容展示为一个便捷的、交互式、可缩放的树状图形式。 |
| webpack-dev-server           | [github](https://github.com/webpack/webpack-dev-server)      | 提供 live reloading 模式的开发服务器                         |
| terser-webpack-plugin        | [github](https://github.com/webpack-contrib/terser-webpack-plugin) | 使用 terser 来压缩 JavaScript                                |
| css-minimizer-webpack-plugin | [github](https://github.com/webpack-contrib/css-minimizer-webpack-plugin) | 使用 cssnano 优化和压缩 CSS                                  |

polyfill Promises

- https://github.com/stefanpenner/es6-promise
- https://github.com/taylorhakes/promise-polyfill

```html
<script>
    async function sleep(time) {
        return new Promise(resolve => {
            setTimeout(() => {
                resolve();
            }, time);
        });
    }

    (async () => {
        // 延时3秒
        await sleep(3 * 1000);
        console.log('1s');
    })();
</script>Copy to clipboardErrorCopied
```
