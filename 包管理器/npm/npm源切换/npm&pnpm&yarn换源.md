# 一、npm配置镜像源

```bash
# 查看源
$ npm config get registry

# 临时修改
$ npm --registry https://registry.npmmirror.com install any-touch

# 持久修改
$ npm config set registry https://registry.npmmirror.com

# 还原
$ npm config set registry https://registry.npmjs.org

# 删除
$ npm config rm registry
```



## 查看 npm 配置

```bash
$ npm config list
# 显示全部配置
$ npm config ls -l

# 其他查看配置的方式
$ npm config get globalconfig
```



## 查看 npm 当前镜像

```shell
$ npm config get registry

https://registry.npmjs.org/
```



## 更换npm镜像 - 终端命令

更换 [npm Mirror 中国镜像站](https://npmmirror.com/)

```bash
$ npm config set registry https://registry.npmmirror.com
```

再次查看：

```bash
$ npm config get registry

https://registry.npmmirror.com/
```



## 更换npm镜像 - 文件修改

找到并打开配置文件：`~/.npmrc`
写入配置：`registry=https://registry.npmmirror.com`



## 临时更换npm镜像

```bash
# 临时修改
$ npm --registry https://registry.npmmirror.com install any-touch
```



## 删除npm镜像

如果需要删除自己配置的镜像源，可以输入以下命令进行移除，移除后会恢复默认设置：

```shell
$ npm config rm registry
```



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

# 列出当前可用的所有镜像源
$ nrm ls

# 使用淘宝镜像源
$ nrm use taobao

# 测试访问速度
$ nrm test taobao
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
