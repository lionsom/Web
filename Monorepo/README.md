# 参考文档

* [pnpm官网 - workspace](https://pnpm.io/zh/workspaces)

* [教程 - 使用 pnpm workspace 管理 monorepo](https://www.bilibili.com/video/BV1qg4y157dv/?spm_id_from=333.337.search-card.all.click&vd_source=dc55c355e9f5b6174832aacfb5d8b6aa)
* [教程 - Managing a full-stack, multipackage monorepo using pnpm](https://blog.logrocket.com/managing-full-stack-monorepo-pnpm/#layout-basic-monorepo)



* 本人的demo：./monorepo-demo





# pnpm创建Monorepo工程

1. 第一步：`pnpm`初始化工程，生成 `package.json`

```sh
$ pnpm init -y
```

![](images/001.png)

这里可以将 `package.json` 中的 name 属性删掉，并且添加一个 `"private": true` 属性，因为它是不需要发布的。



2. 第二步：配置 `pnpm` 的 `monorepo` 工作区

创建 `pnpm-workspace.yaml`

```yaml
packages:
  - packages/* # packages 目录下都是组件包
  - examples/* # 存放组件示例
  - docs # 存放组件文档
```



3. 第三步：在 `packages` 目录下创建多个项目

![](images/002.png)



4. 第四步：仓库项目内的包相互调用

 这几个包要互相进行调用呢，就需要把它们安装到仓库根目录下的 `node_modules` 目录中。然后我们在根目录下进行安装操作。

`-w` = `--workspace-root` 表示安装到共公模块的 packages.json 中，也就是**根目录**下的 packages.json。

```sh
$ pnpm install @lx-element/components -w
Already up to date

dependencies:
+ @lx-element/components 1.0.0 <- packages/components
```

安装后根目录下的 `package.json` 的内容为：

```json
{
  "dependencies": {
    "@lx-element/components": "workspace:^",
    "@lx-element/core": "workspace:^",
    "@lx-element/hooks": "workspace:^"
  }
}
```



5. 第五步：安装一些我们开发时所需要的依赖

```sh
$ pnpm install vue typescript @types/node -D -w
```

因为 `vue` 、 `typescript` 和 `@types/node` 只是开发环境需要的，所以安装的时候需要添加一个 `-D` 参数表示安装到开发环境，`-w` 表示安装到共公模块的 packages.json 中，也就是根目录下的 packages.json。



6. 第六步：TypeScript 初始化配置文件

生成 `tsconfig.json` 文件

因为我们使用了 TypeScript，这样我们想要去校验我们的代码，让我们代码有提示，并且可以按照一些规则来解析我们的语法，给我们更友好的提示，我们就需要去初始化一下这个 TypeScript 配置命令。 又因为我们安装了 typescript，所以在 `node_modules` 目录下 `bin` 目录里面就会存在一个 tsc 的命令，这个命令，就可以帮我们进行初始化，我们可以使用 `npm tsc --init` 来初始化，也可以使用 `pnpm tsc --init` 那么执行这个命令，它就会去 `node_modules` 目录下 `bin` 目录找这个 tsc 命令进行执行。







### 

`pnpm --filter` 是管理 monorepo 的强大工具，它允许你选择性地对特定包执行操作，从而提高效率和灵活性。在使用 `pnpm` 处理大型项目时，善用 `--filter` 选项可以显著简化你的工作流程。





# 常见问题

[bilibili - 使用 pnpm workspace 管理 monorepo](https://www.bilibili.com/video/BV1qg4y157dv/?spm_id_from=333.337.search-card.all.click&vd_source=dc55c355e9f5b6174832aacfb5d8b6aa)









































