# [NVM](https://github.com/nvm-sh/nvm)

> nvm全名node.js version management，顾名思义是一个nodejs的版本管理工具。通过它可以安装和切换不同版本的nodejs。



**下载安装NVM**

```bash
$ curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.3/install.sh | bash

# ~/.zshrc
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # This loads nvm
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"  # This loads nvm bash_completion

# 验证
$ nvm --version
0.39.3
```



# NVM帮助

```shell
# 查看nvm的指令
$ nvm -h 
```



# 安装node

```bash
$ nvm install node # "node" is an alias for the latest version
$ nvm install 14.7.0 # or 16.3.0, 12.22.1, etc
$ nvm install 16 # 安装最新版的16.xx.xx
 
$ node -v # 查看是否安装成功

$ nvm ls # 安装了哪些版本
$ nvm ls-remote # 列出远程可用版本

# 使用已安装的node
$ nvm use node
$ nvm run node --version

# 获取安装位置的路径
$ nvm which 12.22
```



#  查看node版本

```shell
# 查看有哪些 node 版本　命令：
$ nvm ls-remote

# 查看本地node版本
$ nvm ls
$ nvm list
```



# 切换node

```bash
$ nvm use 16
Now using node v16.9.1 (npm v7.21.1)

$ node -v
v16.9.1

$ nvm use 14
Now using node v14.18.0 (npm v6.14.15)

$ node -v
v14.18.0

$ nvm install 12
Now using node v12.22.6 (npm v6.14.5)

$ node -v
v12.22.6
```



# 卸载

```shell
$ nvm uninstall 14.5.0
```



# 其他

```shell
$ nvm -h //查看nvm的指令
$ nvm list //查看本地已经安装的node版本列表
$ nvm list available //查看可以安装的node版本
$ nvm install latest //安装最新版本的node
$ nvm install [version][arch] //安装指定版本的node 例如：nvm install 10.16.3 安装node v10.16.3 arch表示电脑的位数 如果电脑需要安装32位的， 则运行：nvm install 10.16.3 32
$ nvm use [version] //使用node 例如：nvm use 10.16.3
$ nvm uninstall [version] //卸载node
```



# nvm ls-remote 异常

* [StackOverflow nvm ls-remote command results in "N/A"](https://stackoverflow.com/questions/26476744/nvm-ls-remote-command-results-in-n-a)

