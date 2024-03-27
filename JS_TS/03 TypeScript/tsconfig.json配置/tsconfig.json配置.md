* [官网 - tsconfig.json](https://www.tslang.cn/docs/handbook/tsconfig-json.html)
    * 完整的选项： [tsconfig - typescriptlang](https://www.typescriptlang.org/tsconfig/)

* [Vue3 入门指南与实战案例](https://vue3.chengpeiquan.com/)
    * [了解 tsconfig.json](https://vue3.chengpeiquan.com/typescript.html#%E4%BA%86%E8%A7%A3-tsconfig-json)
* [tsconfig.json 详解与常用配置（笔记）](https://juejin.cn/post/7153615781321703438)
* [ Typescript tsconfig.json全解析](https://lq782655835.github.io/blogs/project/ts-tsconfig.html)
* [Typescript的tsconfig.json配置及相关原理](https://blog.csdn.net/Aria_Miazzy/article/details/131639072)
* [typeScript tsconfig配置详解](https://juejin.cn/post/6844904093568221191)
* [tsconfig.json文件各字段吐血整理](https://juejin.cn/post/6999153827668557837)



# 一、tsconfig.json入门

TypeScript 项目一般都会有一个 tsconfig.json 文件，放置于项目的根目录下，这个文件的作用是用来管理 TypeScript 在编译过程中的一些选项配置。

在开始之前，需要全局安装一下 TypeScript ：

```sh
$ npm install -g typescript
```

这样就可以使用 TypeScript 提供的全局功能，可以直接在命令行里使用 `tsc` 命令了。



##1. `tsc --init`

在命令行输入 `tsc --init` ，这是 TypeScript 提供的初始化功能，会生成一个默认的 tsconfig.json 文件。

```sh
$ tsc --init

Created a new tsconfig.json with:
                                                                             TS
  target: es2016
  module: commonjs
  strict: true
  esModuleInterop: true
  skipLibCheck: true
  forceConsistentCasingInFileNames: true


You can learn more at https://aka.ms/tsconfig
```



每一个 `tsc` 的命令行的选项，都可以作为这个 JSON 的一个字段来管理，例如刚才的 `--outDir` 和 `--target` 选项，在这个 JSON 文件里对应的就是：

```json
// tsconfig.json
{
  "compilerOptions": {
    "target": "es6",
    "module": "es6",
    "outDir": "./dist"
  }
}
```

可以直接在生成的 tsconfig.json 上面修改。

来试试效果，这一次不需要用到 package.json 里的 build script 了，直接在命令行运行 `tsc` ，它现在会根据配置的 tsconfig.json 文件，按照的要求来编译。

可以看到它依然按照要求在 dist 目录下生成编译后的 JS 文件，而且这一次的编译结果，和在 build script 里使用的 `tsc src/ts/index.ts --outDir dist --target es6` 这一长串命令是一样的。

正常工作中，都是使用 tsconfig.json 来管理 TypeScript 的配置的。

* 完整的选项可以查看 TypeScript 官网： [tsconfig - typescriptlang](https://www.typescriptlang.org/tsconfig/)













