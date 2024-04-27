* 官方
    * [Docker 官网](https://www.docker.com/)
    * [Docker 官方文档](https://docs.docker.com/)
        * [Install Docker Desktop on Mac](https://docs.docker.com/desktop/install/mac-install/)
        * [Docker Desktop release notes](https://docs.docker.com/desktop/release-notes/)
    * [Docker Hub官网（安装docker镜像的仓库）](https://hub.docker.com)

* 视频
    * [哔哩哔哩 - 尚硅谷Docker实战教程（docker教程天花板）](https://www.bilibili.com/video/BV1gr4y1U7CY?p=1&vd_source=dc55c355e9f5b6174832aacfb5d8b6aa)
    * [哔哩哔哩-黑马Docker快速入门](https://www.bilibili.com/video/BV1HP4118797/?spm_id_from=333.337.search-card.all.click&vd_source=dc55c355e9f5b6174832aacfb5d8b6aa)

* 教程

    * [菜鸟教程 - MacOS Docker 安装](https://www.runoob.com/docker/macos-docker-install.html)

    * [Docker — 从入门到实践](https://yeasy.gitbook.io/docker_practice)
        * [macOS](https://yeasy.gitbook.io/docker_practice/install/mac)



# 一、Mac安装Docker Desktop

## 1. 安装文档

看隔壁文档《Docker Desktop》



## 2. 查看基本信息

```sh
# 查看docker安装路径
$ whick docker
/usr/local/bin/docker
# or
$ where docker
/usr/local/bin/docker

# 查看docker版本
$ docker --version
Docker version 26.0.0, build 2ae903e

# 查看docker详情
$ docker info
```



## 3. 镜像操作命令

```sh
# 搜索某个镜像
$ docker search nginx
```

```sh
# 拉取某个镜像
$ docker pull nginx
```

```sh
# 查看本地所有的镜像
$ docker image ls
$ docker images   # [缩写]
REPOSITORY                     TAG       IMAGE ID       CREATED         SIZE
multi-container-app-todo-app   latest    d02a2230eecb   2 days ago      224MB
welcome-to-docker111           latest    499823d5df3d   2 days ago      223MB
welcome-to-docker              latest    3dcfde2d2b73   2 days ago      223MB
mongo                          6         462e60a3a0cd   9 days ago      660MB
nginx                          latest    a6ac09e4d8a9   11 days ago     193MB
docker/welcome-to-docker       latest    648f93a1ba7d   5 months ago    19MB
docker/getting-started         latest    289dc403af49   16 months ago   46.5MB
```

```sh
# 删除某个镜像
$ docker image rm welcome-to-docker111:latest
# or
$ docker rmi welcome-to-docker111:latest
Untagged: welcome-to-docker111:latest
Deleted: sha256:499823d5df3d2cd5aea643fed88f6a9024104afccc6f09f6366d6fc4c596190b 

#【注意】：若存在容器使用的镜像，无法删除
$ docker image rm welcome-to-docker111:latest
Error response from daemon: conflict: unable to remove repository reference "welcome-to-docker111:latest" (must force) - container 7f4576c676bb is using its referenced image 499823d5df3d
```



## 4. 容器操作命令

```sh
# 查看目前运行的容器
$ docker ps
CONTAINER ID   IMAGE          COMMAND                   CREATED      STATUS         PORTS                  NAMES
7665ea9790bb   nginx:latest   "/docker-entrypoint.…"   2 days ago   Up 3 seconds   0.0.0.0:3355->80/tcp   my-nginx
```

```sh
# 查看所有容器
$ docker ps -a
....
```

```sh
# 创建一个新的容器
$ docker run --name mynginx -d nginx:latest
503d71e77a7a6dc60018ddeb9fd683bda39245bf4195663ec63eb65ef6fe1c1a
```

```sh
# 删除容器，-f 强制删除正在运行的容器
$ docker rm -f my-nginx-2
```





# 参考：Docker 命令大全

## 容器生命周期管理

- [run](https://www.runoob.com/docker/docker-run-command.html)
- [start/stop/restart](https://www.runoob.com/docker/docker-start-stop-restart-command.html)
- [kill](https://www.runoob.com/docker/docker-kill-command.html)
- [rm](https://www.runoob.com/docker/docker-rm-command.html)
- [pause/unpause](https://www.runoob.com/docker/docker-pause-unpause-command.html)
- [create](https://www.runoob.com/docker/docker-create-command.html)
- [exec](https://www.runoob.com/docker/docker-exec-command.html)

## 容器操作

- [ps](https://www.runoob.com/docker/docker-ps-command.html)
- [inspect](https://www.runoob.com/docker/docker-inspect-command.html)
- [top](https://www.runoob.com/docker/docker-top-command.html)
- [attach](https://www.runoob.com/docker/docker-attach-command.html)
- [events](https://www.runoob.com/docker/docker-events-command.html)
- [logs](https://www.runoob.com/docker/docker-logs-command.html)
- [wait](https://www.runoob.com/docker/docker-wait-command.html)
- [export](https://www.runoob.com/docker/docker-export-command.html)
- [port](https://www.runoob.com/docker/docker-port-command.html)
- [stats](https://www.runoob.com/docker/docker-stats-command.html)

## 容器rootfs命令

- [commit](https://www.runoob.com/docker/docker-commit-command.html)
- [cp](https://www.runoob.com/docker/docker-cp-command.html)
- [diff](https://www.runoob.com/docker/docker-diff-command.html)

## 镜像仓库

- [login](https://www.runoob.com/docker/docker-login-command.html)
- [pull](https://www.runoob.com/docker/docker-pull-command.html)
- [push](https://www.runoob.com/docker/docker-push-command.html)
- [search](https://www.runoob.com/docker/docker-search-command.html)

## 本地镜像管理

- [images](https://www.runoob.com/docker/docker-images-command.html)
- [rmi](https://www.runoob.com/docker/docker-rmi-command.html)
- [tag](https://www.runoob.com/docker/docker-tag-command.html)
- [build](https://www.runoob.com/docker/docker-build-command.html)
- [history](https://www.runoob.com/docker/docker-history-command.html)
- [save](https://www.runoob.com/docker/docker-save-command.html)
- [load](https://www.runoob.com/docker/docker-load-command.html)
- [import](https://www.runoob.com/docker/docker-import-command.html)

## info|version

- [info](https://www.runoob.com/docker/docker-info-command.html)
- [version](https://www.runoob.com/docker/docker-version-command.html)



