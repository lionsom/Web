* [Orbstack 官网](https://orbstack.dev/)

* [参考](https://www.yuque.com/u39265547/mmhy5y/iq0nrfdqqpmi57qg?singleDoc#%20%E3%80%8Amac%E7%94%A8docker%E9%83%A8%E7%BD%B2mysql%E5%92%8Credis%E3%80%8B)



https://www.bilibili.com/video/BV1yN41157GG/?spm_id_from=333.337.search-card.all.click&vd_source=dc55c355e9f5b6174832aacfb5d8b6aa



# 1. 安装Orbstack

https://orbstack.dev/

```sh
# 配置文件
$ cd ~/.orbstack/config/
```



# 2. docker常用命令



```sh
# 查找docker镜像
$ docker search [image-name]

# 查看所有的docker镜像
$ docker images

# 查看所有的容器
$ docker ps -a

# 删除docker镜像
$ docker rmi [image-name]

# 删除docker容器
$ docker rm [container-name]

# 启动/停止/重启容器
# 启动一个或多个已经被停止的容器
$ docker start [container-name]
# 停止一个运行中的容器
$ docker stop [container-name]
# 重启容器
$ docker restart [container-name]

# 在容器中开启一个交互模式的终端
$ docker exec -it [container-name] /bin/bash

# 跟踪日志输出
$ docker logs -f [container-name]

# 查看容器的信息
$ docker inspect [container-name]

# 查看所有的数据卷
$ docker volume ls

# 查看数据卷的信息
$ docker volume inspect [volume-name]

# 更新容器配置
$ docker update [options] [container-name]
```



# 3. 部署mysql

mysql配置文件

```tex
[mysqld]
character-set-server=utf8
max_connections=1000
[client]
default-character-set=utf8
[mysql]
default-character-set=utf8
```

启动mysql容器

```sh
docker run -p 3306:3306 \
 --name mysql \
 -v mysql_data:/var/lib/mysql \
 -v mysql_conf:/etc/mysql/conf.d \
 --privileged=true \
 -e MYSQL_ROOT_PASSWORD=123456 \
 -d arm64v8/mysql
```

















