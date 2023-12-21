* [官网 - 模式和环境变量](https://cli.vuejs.org/zh/guide/mode-and-env.html)

* [vue中利用.env文件存储全局环境变量，以及配置vue启动和打包命令](https://blog.csdn.net/pdd11997110103/article/details/116002824)



## .env文件的作用

* .env 后缀的文件是全局默认配置文件，不论什么环境都会加载并合并。

* .env.development 是开发环境下的配置文件，仅在开发环境加载。

* .env.production 是生产环境下的配置文件（也就是正式环境），仅在生产环境加载。

以上三个命名不能变动，除此之外，可以另外自定义加上`.env.test`文件，也就是测试环境，或者`.env.beta`，也就是内部测试版，等等…



## 配置.env文件

------

变量命名必须以`VUE_APP_`开头，比如`VUE_APP_URL`，`VUE_APP_PWD`



## 配置启动命令

------

在vue项目根目录下，找到package.json文件，其中scripts对象是配置的vue启动命令，比如npm run dev，配置如下：

```javascript
  "scripts": {
    "serve": "vue-cli-service serve",
    "serve-test": "vue-cli-service serve --mode test",
    "build": "vue-cli-service build",
    "test": "vue-cli-service build --mode test",
    "all": "vue-cli-service build && vue-cli-service build --mode test"
  }
```

每一行说明如下：

1. npm run serve，启动项目，并且加载.env和.env.development文件
2. npm run serve-test，启动项目，并且加载.env和.env.test文件
3. npm run build，生产环境打包，其中.env和.env.production文件会加载
4. npm run test，测试环境打包，其中.env和.env.test文件会加载
5. npm run all，生产环境和测试环境同时打包，加载不同的.env文件



## 获取.env中的全局变量

------

比如，我在.env文件中设置了变量`VUE_APP_BASE_URL = 'https://www.baidu.com'`，在项目中我想获取，只需要使用`process.env.VUE_APP_BASE_URL`，就可以取到。



# Error

```bash
 warning  

DefinePlugin
Conflicting values for 'process.env.NODE_ENV'
```

1. 是因为package.json的scripts中，start和build命令都预设了NODE_ENV的值，不再支持修改

2. optimization.nodeEnv 在不设置时（一般都不会设置），默认读取mode的值（默认是production或development）,DefinePlugin重新设置时与mode不一致，导致冲突

总的来说，都是【有预设值，不再支持修改】







