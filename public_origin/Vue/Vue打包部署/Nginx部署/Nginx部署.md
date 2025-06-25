* [【深入浅出Nginx系列】Nginx入门？看这一篇就够了（概念篇）](https://blog.csdn.net/weixin_47025166/article/details/126041580)
* [【深入浅出Nginx系列】Nginx入门？看这一篇就够了（实战篇）](https://blog.csdn.net/weixin_47025166/article/details/126047843?csdn_share_tail=%7B%22type%22%3A%22blog%22%2C%22rType%22%3A%22article%22%2C%22rId%22%3A%22126047843%22%2C%22source%22%3A%22weixin_47025166%22%7D&ctrtid=FklNh)



# 一、Mac安装Nginx

* [Homebrew官网](https://brew.sh/)



## 1. 检查电脑是否有nginx

```sh
$ brew search nginx
==> Formulae
nginx ✔              # 说明已经安装
```



## 2. brew安装nginx

```sh
# 安装
$ brew install nginx

# 重装
$ brew reinstall nginx
```



## 3. 查看nginx安装路径

```sh
$ ps -ef | grep nginx
  501 82140     1   0  9:37AM ??         0:00.01 nginx: master process /usr/local/opt/nginx/bin/nginx -g daemon off;
  501 82141 82140   0  9:37AM ??         0:00.00 nginx: worker process
  501 83450 19715   0  9:54AM ttys014    0:00.00 grep --color=auto --exclude-dir=.bzr --exclude-dir=CVS --exclude-dir=.git --exclude-dir=.hg --exclude-dir=.svn nginx
```



## 4. 查看nginx的信息

* `$ ngxin -v`：查看nginx版本
* `$ nginx -V`：查看nginx版本及安装的本地位置

* `$ brew info nginx`：查看nginx信息

```sh
# 查看nginx版本
$ nginx -v
nginx version: nginx/1.25.5


# 查看nginx版本及安装的本地位置
$ nginx -V
nginx version: nginx/1.27.0
built by clang 15.0.0 (clang-1500.1.0.2.5)
built with OpenSSL 3.3.0 9 Apr 2024 (running with OpenSSL 3.3.1 4 Jun 2024)
TLS SNI support enabled
configure arguments: --prefix=/usr/local/Cellar/nginx/1.27.0 --sbin-path=/usr/local/Cellar/nginx/1.27.0/bin/nginx --with-cc-opt='-I/usr/local/opt/pcre2/include -I/usr/local/opt/openssl@3/include' --with-ld-opt='-L/usr/local/opt/pcre2/lib -L/usr/local/opt/openssl@3/lib' --conf-path=/usr/local/etc/nginx/nginx.conf --pid-path=/usr/local/var/run/nginx.pid --lock-
......


# 查看nginx详细信息
$ brew info nginx
==> nginx: stable 1.25.5 (bottled), HEAD
HTTP(S) server and reverse proxy, and IMAP/POP3 proxy server
https://nginx.org/
Installed
/opt/homebrew/Cellar/nginx/1.25.5 (26 files, 2.4MB) *
......
```



## 5. 查看 `nginx.conf` 配置文件路径

```sh
# 测试配置文件的正确性
$ nginx -t
nginx: the configuration file /opt/homebrew/etc/nginx/nginx.conf syntax is ok
nginx: configuration file /opt/homebrew/etc/nginx/nginx.conf test is successful
```



## 6. 查看帮助 `$ nginx -h`

```sh
$ nginx -h
nginx version: nginx/1.27.0
Usage: nginx [-?hvVtTq] [-s signal] [-p prefix]
             [-e filename] [-c filename] [-g directives]

Options:
  -?,-h         : this help
  -v            : show version and exit
  -V            : show version and configure options then exit
  -t            : test configuration and exit
  -T            : test configuration, dump it and exit
  -q            : suppress non-error messages during configuration testing
  -s signal     : send signal to a master process: stop, quit, reopen, reload
  -p prefix     : set prefix path (default: /usr/local/Cellar/nginx/1.27.0/)
  -e filename   : set error log file (default: /usr/local/var/log/nginx/error.log)
  -c filename   : set configuration file (default: /usr/local/etc/nginx/nginx.conf)
  -g directives : set global directives out of configuration file
```



## 7. 服务器路径⭐️

### a. 安装完以后，可以在终端输出的信息里看到一些配置路径

* 文件根目录：`/usr/local/var/www`

* 配置文件路径：`/usr/local/etc/nginx/nginx.conf`

![](images/009.png)



### b. 通过查找原文件

```sh
# nginx路径
$ which nginx  
$ where nginx
/usr/local/bin/nginx
```

![](images/010.png)

![](images/011.png)

![](images/012.png)

![](images/013.png)



# 二、运行Nginx

```sh
# 启动
$ nginx

# 关闭
$ nginx -s stop

# 重新启动，热启动，修改配置重启不影响线上
$ nginx -s reload
```

**浏览器访问localhost:8080**：http://localhost:8080/

**如果页面出现---- Welcome to nginx! ------即代表成功**

【默认端口,如需更改请求配置文件conf更改】



## 1. 查看是否运行nginx

```sh
# 查看状态
$ ps -ef | grep nginx
```

![](images/006.png)



## 2. `brew services start nginx` 对比

* [MacOS - brew 里运行 nginx 和直接运行 nginx ，有什么区别吗？](https://v2ex.com/t/812279)

```sh
# 启动服务
$ brew services start nginx

# 关闭
$ brew services stop nginx

# 重启
$ brew services restart nginx
```

brew services 是托管给 launchd 的，相当于系统服务。



# 三、文件目录

Homebrew 默认安装路径如下：

- macOS ARM：`/opt/homebrew`
- macOS Intel： `/usr/local`

```sh
# 显示 Homebrew Cellar 路径
$ brew --cellar
/opt/homebrew/Cellar

# 显示 Homebrew Caskroom 路径
$ brew --caskroom
/opt/homebrew/Caskroom
```



```sh
# nginx路径
$ which nginx  
$ where nginx
/usr/local/bin/nginx

# 配置文件路径
$ nginx -t
nginx: the configuration file /opt/homebrew/etc/nginx/nginx.conf syntax is ok
nginx: configuration file /opt/homebrew/etc/nginx/nginx.conf test is successful

# 查看nginx详情，也可以看到路径
$ brew info nginx
```



# 四、修改index.html文件

nginx允许成功后，打开 http://localhost:8080/ ，说明成功了。

![](images/001.png)

a. 先找到nginx路径 `$ where nginx` ，找到 `/opt/homebrew/bin/nginx` :

![](images/002.png)

可以发现文件是快捷入库，需要找到源文件

![](images/003.png)

源文件地址：`/opt/homebrew/var/www`

![](images/004.png)

我们找到源文件，修改试试：

![](images/005.png)

# 五、配置文件设置

```sh
# 测试配置文件的正确性
$ nginx -t
nginx: the configuration file /opt/homebrew/etc/nginx/nginx.conf syntax is ok
nginx: configuration file /opt/homebrew/etc/nginx/nginx.conf test is successful
```

![](images/007.png)



大致内容

```nginx
http {
   server {
        # 监听的端口号
        listen       9200;

        # 服务名称 生产环境要修改成 公网ip 如 47.105.134.120
        server_name  localhost;

        # 配置根目录的地址是以 nginx 下的 html 文件夹为根目录来查找的
        root html;

        # 配置默认的主页显示 比如 47.105.134.120:8080 显示的 index 页面
        location / {
            try_files $uri $uri/ /index.html;	    
        }
        # 配置我们的 admin 的前台服务 比如 47.105.134.120:8080/admin/index.html
        location ^~ /admin {
            # 处理 Vue 单页面应用 路由模式为 history 模式刷新页面 404 的问题
            try_files $uri $uri/ /admin/index.html;
        }
        # 如果你想配置多个项目的话，可以复制上面的，修改一下就可以同时部署多个前端项目了
        # 比如
        # location ^~ /blog {
            # 处理 Vue 单页面应用 路由模式为 history 模式刷新页面 404 的问题
            # try_files $uri $uri/ /blog/index.html;
        # }
        #error_page  404              /404.html;

        # redirect server error pages to the static page /50x.html
        #
        error_page   500 502 503 504  /50x.html;
        location = /50x.html {
            root   html;
        }
    }

    include servers/*;
}
```





# 六、Vue项目部署到Nginx

https://juejin.cn/post/6844904096973979662



## 1. 打包Vue3 + Vite

最初是的项目，没有任何多余配置！！！

```sh
$ pnpm build
```

![](images/008.png)



## 2. 放到nginx服务器下

![](images/013.png)



## 3. 启动、运行

```sh
$ brew services restart nginx
```

![](images/014.png)



## 4. 问题：再次刷新 404

![](images/015.png)

### a. 原因

* 官网：https://cli.vuejs.org/zh/guide/deployment.html#docker-nginx

* 参考：https://blog.csdn.net/qq_55272229/article/details/131540101
* 参考：https://learnku.com/articles/34440

因为vue打包输出的是单页网页应用，只有一个index.html入口，其他路径是由前端路由去跳转的，服务器目录下没有对应物理路径，所以就会报404。



### b. 方法一：使用 `webHashHsitory`（未尝试）

修改`router` 文件夹下的`index` 配置文件，将`history` 方式改为`createWebHashHistory` ；因为hash方式的页面地址在刷新时只会刷新`#` 后面的内容，前面会保持不变。

```js
import { createRouter, createWebHistory, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  // 引入正式环境的打包路径
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
  ]
})

export default router
```



### c. 方案二：修改`nginx.conf` 配置

* [Vue CLI官网 - Docker (Nginx)](https://cli.vuejs.org/zh/guide/deployment.html#docker-nginx)

![](images/016.png)



## 5. 自定义包文件路径

目前包是放在根目录下，这样不规范，新建文件`xishan`，此刻链接就不对了！！！

![](images/013.png)



### a. vite配置：在 `vite.config.js` 中配置 `base` 的路径

* [Vue项目Nginx配置自定义路径别名](https://blog.csdn.net/m0_46219714/article/details/137603303)
* [Vite官网 - public base path](https://cn.vitejs.dev/guide/build.html#public-base-path)
* [Vite官网 - 配置选项 - base](https://cn.vitejs.dev/config/shared-options#base)

在打包项目之前需要在 `vite.config.js` 中配置 `base` 的路径，[路径名](https://so.csdn.net/so/search?q=路径名&spm=1001.2101.3001.7020)为服务器自定义的路由别名：

```json
import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

export default defineConfig({
  plugins: [vue()],
  server: {
    host: true,
  },
  
  base: "/xishan/", // 这个配置很重要，要和nginx配置的路径别名一致
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});
```



### b. `nginx.conf` 配置

新增location后，重启Nginx，在浏览器输入`http://服务器ip/xishan`访问即可

```nginx
# nginx.conf
....
# 新增location块，用于处理/xishan路径的请求
location ^~ /xishan {
    root   html;
    index  index.html index.htm;
    # 如果vue项目使用的是History模式，则必须配置！！！
    try_files $uri $uri/ /xishan/index.html;  
}
....
```

![](images/017.png)



## 6. 此刻正常打开页面

正常打开页面：`http://localhost:8099/xishan/`

![](images/018.png)



## 7. 正常路由跳转：`router.push('/demo')`

![](images/020.png)

![](images/021.png)

路由跳转：`router.push('/demo')`

![](images/022.png)

![](images/019.png)

## 8. 打开静态资源失败

打开本地资源

![](images/023.png)

发现没有配置二级路径 `/xishan/`

![](images/024.png)

### a. 方案一：增加 `.env` 文件

![](images/025.png)

![](images/026.png)

`import.meta.env` 值有哪些：

![](images/029.png)

带上前缀：`import.meta.env.VITE_BASE_API_URL`

![](images/028.png)

或者带上 `import.meta.env.BASE_URL`

![](images/030.png)



* 运行`development环境`：`pnpm dev`   
* 运行`production` 环境：`pnpm dev:production`   

```json
// package.json
......
  "scripts": {
    "dev": "vite --open",
    "dev:production": "vite --open --mode production",
  }
......
```



### b. 方案二：vite配置：在 `vite.config.js` 中配置 `base` 的路径

![](images/027.png)











