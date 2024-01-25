# 学习资源

[Webpack4实战教程](https://mouday.github.io/coding-tree/#/blog/webpack/index?id=webpack4实战教程)

尚硅谷新版Webpack4实战教程(从入门到精通) https://www.bilibili.com/video/BV1e7411j7T5

尚硅谷前端Webpack4教程（高级进阶篇） https://www.bilibili.com/video/BV1cv411C74F

笔记分享: https://lab.puji.design/webpack-getting-started-manual/

课件地址webpack从入门到精通

- 下载地址：https://pan.baidu.com/s/1JxvXF8EyG9TSNLqkc98YzQ 提取码：i5qc
- 备用地址：https://pan.baidu.com/s/1T2g37SpIQRjF6fjFDl_YwA 密码:uw5q



[尚硅谷前端技术之webpack从入门到精通(上).pdf](./尚硅谷资料-Webpack4-1基础/课件/尚硅谷前端技术之webpack从入门到精通(上).pdf)



# 一、Webpack简介

[Webpack五个核心概念](https://mouday.github.io/coding-tree/#/blog/webpack/index?id=_22、webpack五个核心概念)

1. entry: 入口
2. output： 输出
3. loader：处理非js文件，翻译工作
4. plugins 插件，执行范围更广的任务，打包优化，压缩，定义环境中的变量等
5. mode 模式

 

# 二、Webpack初体验

```sh
$ mkdir webpack-demo
$ cd webpack-demo

# 初始化项目目录
$ npm init -y

# 安装webpack
$ npm i webpack webpack-cli -D
# 指定版本
$ npm i webpack@4 webpack-cli@3 -D

```

安装指定版本的webpack

| 依赖               | 版本 | 新版本 |
| ------------------ | ---- | ------ |
| webpack            | 4    | 5      |
| webpack-cli        | 3    | 4      |
| webpack-dev-server | 3    | 3      |
