# 一、源操作的三种方式

## 1. npm 命令行

```bash
# 查看 npm 配置
$ npm config list
# 显示全部配置
$ npm config ls -l

# 其他查看配置的方式
$ npm config get globalconfig


# 查看当前镜像
$ npm config get registry

# 临时修改
$ npm --registry https://registry.npmmirror.com install any-touch

# 持久修改
$ npm config set registry https://registry.npmmirror.com

# 还原
$ npm config set registry https://registry.npmjs.org

# 删除npm镜像
# 如果需要删除自己配置的镜像源，可以输入以下命令进行移除，移除后会恢复默认设置：
$ npm config rm registry
```



## 2. 修改配置文件 `.npmrc`

找到并打开配置文件：`~/.npmrc`

写入配置：`registry=https://registry.npmmirror.com`



## 3. NRM - 镜像源管理器

详情，看下面





# 二、pnpm

```bash
# 查看源
$ pnpm get registry
$ pnpm config get registry

# 临时修改
$ pnpm --registry https://registry.npmmirror.com install any-touch

# 永久修改
$ pnpm config set registry https://registry.npmmirror.com

# 还原
$ pnpm config set registry https://registry.npmjs.org
```



# 三、yarn

```bash
# 查看源
$ yarn config get registry

# 临时修改
$ yarn add any-touch@latest --registry=https://registry.npmjs.org/

# 持久修改
$ yarn config set registry https://registry.npm.taobao.org/
```



# 四、拓展 - 镜像源管理器

## NRM - npm

```bash
# 安装 nrm
$ npm install -g nrm

# 当前镜像
$ nrm current

# 列出当前可用的所有镜像源
$ nrm ls

# 使用淘宝镜像源
$ nrm use taobao

# 测试访问速度
$ nrm test taobao

# 新增
$ nrm add lxnpm http://localhost:4873/

# 删除
$ nrm del lxnpm
```



## YRM - yarm

```bash
# 安装 yrm
$ npm install -g yrm

# 列出当前可用的所有镜像源
$ yrm ls

# 使用淘宝镜像源
$ yrm use taobao

# 测试访问速度
$ yrm test taobao
```
