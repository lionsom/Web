* [从零开始撸一个Vue2.0组件库-并上传到NPM上](https://blog.csdn.net/weixin_42950333/article/details/120415621)

* [Vue2封装一个全局通知组件并发布到NPM](https://blog.csdn.net/m0_53321320/article/details/131259961)
* [Vue封装组件并发布到npm仓库](https://zhuanlan.zhihu.com/p/459284053)

https://juejin.cn/post/7105696184375164935



https://www.npmjs.com



对应Demo：



# 一、创建项目

> **npm init** 用来初始化生成package.json，它是 NodeJS 约定的用来存放项目的信息和配置等信息的文件。

```sh
# 创建package.json
$ npm init 

# 自动构建
$ npm init -y
```

package.json

```json
{
  "name": "lx-utils-only-js",
  "version": "1.0.0",
  "description": "只有js的工具库",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "",
  "license": "ISC"
}
```



# 二、发布npm

登录 [npm官网](https://www.npmjs.com/)

## 1. npm使用官方源

```shell
# 查看 npm 配置
$ npm config list

# 查看源
$ npm config get registry

# 临时修改
$ npm --registry https://registry.npmmirror.com install any-touch

# 持久修改
$ npm config set registry https://registry.npmmirror.com

# 还原 - 官方源
$ npm config set registry https://registry.npmjs.org

# 删除
$ npm config rm registry
```

![](images/publish001.png)



## 2. 登录npm

```sh
# 终端登录
$ npm login

# 查看当前用户
$ npm whoami
```

![](images/publish002.png)



## 3. 修改版本

```sh
$ npm version patch  # 补丁版本，最后一位+1

$ npm version minor  # 增加新功能，中间一位+1

$ npm version major  # 大版本，第一位+1
```



## 4. 发布

```sh
# 发布
$ npm publish
```

![](images/publish003.png)



## 4. 安装、验证





# 三、安装测试









# 四、卸载已发布的包

```sh
$ npm unpublish --force
```























