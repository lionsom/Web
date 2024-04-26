* [阮一峰 - SSH原理与运用（一）：远程登录](https://www.ruanyifeng.com/blog/2011/12/ssh_remote_login.html)
* [阮一峰 - SSH原理与运用（二）：远程操作与端口转发](https://www.ruanyifeng.com/blog/2011/12/ssh_port_forwarding.html)
* [阮一峰 -《SSH 入门教程》发布了](https://www.ruanyifeng.com/blog/2020/12/ssh-tutorial.html)
    * [SSH 教程](https://wangdoc.com/ssh/)
    * [github](https://github.com/wangdoc/ssh-tutorial)



# 一、什么是ssh

SSH是一种**加密网络协议**，用于在不安全的网络上提供安全的数据通信。它允许远程登录到服务器并执行命令，以及在两台计算机之间安全地传输文件。

SSH只是一种协议，存在多种实现。本文针对的实现是[OpenSSH](http://www.openssh.com/)。



## 常见的 SSH 客户端和服务器

- **SSH 客户端：**PuTTY、OpenSSH、Bitvise SSH Client
- **SSH 服务器：**OpenSSH、Dropbear、Tectia SSH



* Terminal

Terminal 是 Mac 附带一个应用程序，可访问和运行内置于其中的 SSH。

* [PuTTY](https://www.ssh.com/academy/ssh/putty/mac)

PuTTY 是一个 Windows 应用程序，用于连接到具有 Mac 端口的 SSH 服务器。

与基于 Unix 的 Mac 不同，Windows 没有内置终端。

PuTTY 填补了这一空白。 因此，PuTTY for Mac 并不是在 Mac 上建立 SSH 连接或运行命令行所必需的，但它确实具有使其可用作 Mac 上的 SSH 客户端的功能。

PuTTY for Mac 有一个图形用户界面 (GUI)，您可以使用它登录而不是使用终端窗口。



# 二、Mac上的ssh

## 1. Mac ssh 与 sshd 区别

**ssh** 和 **sshd** 是两个不同的命令，用于不同的目的：

- **ssh** 是一个客户端命令，用于连接到远程 SSH 服务器并执行命令。
- **sshd** 是一个服务器守护进程，用于在计算机上侦听 SSH 连接并管理 SSH 会话。

**主要区别**

| 特征     | ssh                   | sshd                         |
| -------- | --------------------- | ---------------------------- |
| 目的     | 连接到远程 SSH 服务器 | 侦听 SSH 连接并管理 SSH 会话 |
| 运行位置 | 客户端计算机          | 服务器计算机                 |
| 默认端口 | 22                    | 22                           |
| 配置文件 | ~/.ssh/config         | /etc/ssh/sshd_config         |

**何时使用**

- **ssh** 用于从本地计算机连接到远程 SSH 服务器。例如，你可以使用 ssh 命令远程管理服务器、传输文件或执行命令。
- **sshd** 在服务器计算机上运行，以允许远程计算机通过 SSH 连接到服务器。sshd 守护进程负责验证连接、管理 SSH 会话并提供加密通信。

**示例**

要从本地计算机连接到远程 SSH 服务器，你可以使用以下命令：

```sh
$ ssh username@remote_server_address
```

在远程服务器上启动 sshd 守护进程，你可以使用以下命令：

```sh
$ sudo systemctl start sshd
```

**注意：**在 macOS 上，sshd 守护进程默认处于活动状态。



## 2. MacOS上的SSH客户端

macOS 自带的 SSH 客户端和服务器是 **OpenSSH**。

**查看 OpenSSH 版本**

```sh
$ ssh -V
OpenSSH_9.0p1, LibreSSL 3.3.6
```

**查看 OpenSSH 配置**

```sh
# 查看SSH客户端配置
$ cat ~/.ssh/config

# 查看SSH服务端配置
$ cat /etc/ssh/sshd_config
```

**查看 SSH 密钥**

```sh
# 这将列出你SSH密钥目录中的所有文件，包括公钥和私钥。
$ ls -al ~/.ssh
```

**其他：查看特定配置选项的值**

- 查看 SSH 端口：

```sh
$ grep Port ~/.ssh/config
```

- 查看允许的登录方式：

```sh
$ grep LoginGraceTime ~/.ssh/config
```

- 查看密码认证是否启用：

```sh
$ grep PasswordAuthentication ~/.ssh/config
```

- 查看密钥认证是否启用：

```sh
$ grep PubkeyAuthentication ~/.ssh/config
```



## 3. [mac上开启ssh服务器配置](https://www.volcengine.com/theme/1458727-M-7-1)

在Mac中开启SSH服秀器非常简单，只需遵循以下步骤即可完成设置。首先我们要明确一点，SSH是一种安全协议，它通过加密的方式保护您的系统免逍黑容攻击。在某些情况下，可以使用SSH访问远程服為强、编辑文件和执行其他网絡任务。



### a. 使用图形界面开启SSH

打开**『Apple』->『系统配置』->『共享』->『远程登录』**



### b. 使用命令行开启SSH

**步骤一：**

确认您的Mac是否已安装OpenSSH软件包。在终端中输入以下命令：

```sh
$ which sshd
```

若系统己安装QRen SSH，终端输出了路径信息，就表示已安装。如果未安装QRRnSSH，可以使用以下命令进行安装。

```sh
$ brew install openssh
```

上述命令需要安装Homebrew来完成安装。如果您没有安装Homebrew，则可以通过以下命令进行安装：

```sh
$ /usr/bin/rubv -e ns (curl -fssL httos: //raw.aithubusercontent.com/Homebrewf install/master/instaly"
```

**步骤二：**

查看ssh服务状态

```sh
$ sudo systemsetup -getremotelogin
```

如果已经开启的话，指令会显示 “Remote Login: On” ，反之就会显示“Remote Login: Off”。



检查sshd服务是否启动

```sh
$ sudo launchctl list | grep ssh
# or
$ sudo launchctl list | grep sshd
```



**步骤三：**

启动SSH服务。当OpenSSH安 装成功后，我们需要在系统中启动SSH服务。在终端中输入以下命令：

```sh
$ sudo systemsetup -setremotelogin on

$ sudo systemsetup -setremotelogin off
```

此命令打开了0S x的 **"远程登录"** 功能，该功能使用SSH服务简单地实现。如果您在将来再次运行此命令，则将启用远程访问，否则将禁用远程访问。

**步骤四：**

配置SSH服务。对于先前安装OpenSSH的用户，则可以按照以下命令，以root身份编镇SSH服务的配置文件：

```sh
$ sudo vi /etc/ssh/sshd_config
```

这个文件包含sSH服务的各种配置信息，如端口号、远程访问规则、身份验证设置等。请注意，在修改之前，请备份文件，以防止误操作。

**步骤五：**

重启SSH服务。一旦SSH配置完成，我们需要重启SSH服务并应用更改。可以在终端中使用以下命令重启服务：

```sh
$ sudo launchctl stop com.openssh.sshd
$ sudo launchctl start com.openssh.sshd
```

或使用系统偏好设置。





























