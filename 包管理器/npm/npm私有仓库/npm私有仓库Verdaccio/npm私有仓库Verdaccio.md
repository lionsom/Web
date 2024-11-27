# Verdaccio

* [Verdaccio 官网](https://verdaccio.org/)

* [【前端工程化】使用verdaccio搭建公司npm私有库完整流程和踩坑记录](https://juejin.cn/post/7096701542408912933)

https://blog.csdn.net/ITyiy/article/details/132445854



# 一、安装

## 1. 使用**npm**全局安装**verdaccio**

```sh
$ npm i verdaccio -g
```



## 2. 直接运行

```sh
$ verdaccio
```

![](images/001.png)



## 3. 关键信息

出现上图后，代表已经启动成功了，可以看到一些关键信息

1. **配置文件的目录**：`/Users/qiyeyun/.config/verdaccio/config.yaml`
2. **服务所在的地址**：http://localhost:4873/



## 4. 打开 http://localhost:4873/

打开[http://localhost:4873/](https://link.juejin.cn/?target=http%3A%2F%2Flocalhost%3A4873%2F)，可以看到私服已经启动好了。

![](images/002.png)



## 5. 全局访问配置

可以看到 **verdaccio** 默认地址是 http://localhost:4873，只能本机访问到，要想在其他电脑上访问到，需要调整一下服务的地址。

打开 `/Users/qiyeyun/.config/verdaccio/config.yaml` 配置：

![](images/003.png)

根据注释可以看到 **listen** 的值默认为 **localhost:4873** ，如果项所有地址都可以访问到，需要修改成 **0.0.0.0:4873**，注意缩进，**listen** 前面不需要有缩进。

![](images/004.png)

我在手机上访问：`192.168.1.102:4873`  成功！！！





# 二、发布测试包

## 1. 创建verdaccio用户

```sh
$ npm adduser --registry http://localhost:4873/

npm notice Log in on http://localhost:4873/
Username: linx01
Password: 123456
Email: (this IS public) 1@qq.com
Logged in on http://localhost:4873/.
```



这样可以在 `http://localhost:4873/` 网页上直接登录！！

或者

```sh
$ npm login --registry=http://0.0.0.0:4873/
npm notice Log in on http://0.0.0.0:4873/
Username: linx01
Password:
Logged in on http://0.0.0.0:4873/.

# 查看当前登录人
$ npm whoami --registry=http://0.0.0.0:4873/

# 退出
$ npm logout --registry=http://0.0.0.0:4873/
```



### a. 删除用户 + 用户信息路径

既然有注册用户，不可避免的需求是在一些场景下，我们需要删除某个用户来禁止其登陆私有 npm 库。

前面也提及了 Verdaccio 默认使用的是 `htpasswd` 来实现鉴权。相应地，注册的用户信息会存储在 `~/.config/verdaccio/htpasswd` 文件中：

```
linx01:iAATKIGipNVLs:autocreated 2024-11-27T02:51:36.081Z
```

这里一条记录对应一个用户，也就是如果这条记录被删除了，那么该用户就不能登陆了，即删除了该用户。

![](images/015.png)



## 2. 创建库

```sh
$ mkdir verdaccio-demo

$ npm init -y
```

![](images/005.png)



## 3. 发布本地私有库

### a. 若未登录用户，发布失败

![](images/019.png)



### b. 若已登录用户

```sh
$ npm publish --registry http://localhost:4873/
```

![](images/006.png)

![](images/007.png)



## 4. 优化包发布

刚才发布包时需要在在**npm publish**后面添加--registry http://localhost:4873/，每次都添加比较麻烦，可以在包项目根目录添加 **.npmrc**文件，添加以下配置

```json
registry=http://localhost:4873/
```

这样再发布包时直接**npm publish**就可以了,会自动提交到对应地址的私有服上面，添加后修改**package.json**的版本**version**字段把**1.0.0**修改为**1.0.1**，再次执行**npm publish**测试，会发现发布成功，并且在可视化界面可以看到版本变化了。

![](images/008.png)

![](images/009.png)



# 三、使用测试包

## 1. 创建新工程并安装

![](images/009.png)

```sh
$ npm install verdaccio-demo-source@0.0.4 -S
```

![](images/010.png)



## 2. 调用

![](images/011.png)



## 3. 运行

```sh
$ npm run start
```

```json
{
  "name": "verdaccio-demo-usage",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "node index.js"    // 运行
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "dependencies": {
    "lodash": "^4.17.21",
    "verdaccio-demo-source": "^0.0.4"
  }
}
```



## 4. 测试安装不在verdaccio私有库的包

```sh
$ npm i lodash
```

![](images/012.png)

### a. 原因

前往配置中，查看：

![](images/017.png)



## 5. 执行npm时的路径

设置后，再执行npm时的路径：

* npm install -> Verdaccio -> npmjs

Verdaccio会根据本地缓存情况，自动从官方源下载未缓存的包，提供给用户使用。

![](images/018.png)



## 6. 若未设置 register 如何安装测试包

若没有设置 `registry=http://localhost:4873/` ：

![](images/013.png)



### a. 安装失败

```sh
$ npm install verdaccio-demo-source

$ npm install verdaccio-demo-source --registry=https://open-npm.qpaas.com/
```

![](images/014.png)



### 原因

报错**code**是**404**，是因为默认情况下会从**npm**公共仓库下载包，而不是从我们私有仓库下载包，依然需要在项目根目录添加 **.npmrc**文件，添加配置

```
registry=http://localhost:4873/
```



# 四、从仓库卸载包

```sh
# 删除版本
$ npm unpublish [packageName] --registry http://localhost:4873 --force 
```



# 五、`nrm` 添加、切换源

## 1. 查看源列表、添加源

```sh
$ npm i -g nrm

$ nrm ls

# 这里的 lxlx 代表你这个源的简称，你可以因自己的喜好来命名。
$ nrm add lxlx http://localhostm:4873/
```

```sh
$ nrm ls
* npm ---------- https://registry.npmjs.org/
  yarn --------- https://registry.yarnpkg.com/
  tencent ------ https://mirrors.cloud.tencent.com/npm/
  cnpm --------- https://r.cnpmjs.org/
  taobao ------- https://registry.npmmirror.com/
  npmMirror ---- https://skimdb.npmjs.com/registry/

$ nrm add lxlx http://localhostm:4873/

 SUCCESS  Add registry lxlx success, run nrm use lxlx command to use lxlx registry.
 
$ nrm ls
* npm ---------- https://registry.npmjs.org/
  yarn --------- https://registry.yarnpkg.com/
  tencent ------ https://mirrors.cloud.tencent.com/npm/
  cnpm --------- https://r.cnpmjs.org/
  taobao ------- https://registry.npmmirror.com/
  npmMirror ---- https://skimdb.npmjs.com/registry/
  lxlx --------- http://localhostm:4873/
```



## 2. 切换源的三种方式

### a. nrm

```sh
$ nrm use lxlx
```

切换到我们的私有npm源上， 切换好源后，我们之后的 `$ npm i` 就会 **先去私有库查找包**，如果不存在则会去 https://registry.npmmirror.com/（因为上面配置了 proxy）查找包。



### b. `npm set register` 命令

这里需要将Verdaccio设为npm的registry：

```sh
$ npm set registry http://localhost:4873/
```



### c. 直接修改 `.npmrc` 文件





# 六、发布带"命名空间"的包







