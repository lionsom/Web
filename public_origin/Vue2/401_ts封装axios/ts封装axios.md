# 在项目中用ts封装axios，一次封装整个团队受益

> 来自：掘金，作者：一碗周
>
> **链接：https://juejin.cn/post/7071518211392405541**

## 写在前面

虽然说Fetch API已经使用率已经非常的高了，但是在一些老的浏览器还是不支持的，而且axios仍然每周都保持2000多万的下载量，这就说明了axios仍然存在不可撼动的地位，接下来我们就一步一步的去封装，实现一个灵活、可复用的一个请求请发。

这篇文章封装的axios已经满足如下功能：

- 无处不在的代码提示；
- 灵活的拦截器；
- 可以创建多个实例，灵活根据项目进行调整；
- 每个实例，或者说每个接口都可以灵活配置请求头、超时时间等；
- 取消请求（可以根据url取消单个请求也可以取消全部请求）。

## 基础封装

首先我们实现一个最基本的版本，实例代码如下：

```js
// index.ts
import axios from 'axios'
import type { AxiosInstance, AxiosRequestConfig } from 'axios'

class Request {
  // axios 实例
  instance: AxiosInstance

  constructor(config: AxiosRequestConfig) {
    this.instance = axios.create(config)
  }
  request(config: AxiosRequestConfig) {
    return this.instance.request(config)
  }
}

export default Request
```

这里将其封装为一个类，而不是一个函数的原因是因为类可以创建多个实例，适用范围更广，封装性更强一些。

## 拦截器封装

首先我们封装一下拦截器，这个拦截器分为三种：

- 类拦截器
- 实例拦截器
- 接口拦截器

接下来我们就分别实现这三个拦截器。

### 类拦截器

类拦截器比较容易实现，只需要在类中对`axios.create()`创建的实例调用`interceptors`下的两个拦截器即可，实例代码如下：

```js
// index.ts
constructor(config: AxiosRequestConfig) {
  this.instance = axios.create(config)
  
  this.instance.interceptors.request.use(
    (res: AxiosRequestConfig) => {
      console.log('全局请求拦截器')
      return res
    },
    (err: any) => err,
  )
  this.instance.interceptors.response.use(
    // 因为我们接口的数据都在res.data下，所以我们直接返回res.data
    (res: AxiosResponse) => {
      console.log('全局响应拦截器')
      return res.data
    },
    (err: any) => err,
  )
}
```

我们在这里对响应拦截器做了一个简单的处理，就是将请求结果中的`.data`进行返回，因为我们对接口请求的数据主要是存在在`.data`中，跟`data`同级的属性我们基本是不需要的。

### 实例拦截器

实例拦截器是为了保证封装的灵活性，因为每一个实例中的拦截后处理的操作可能是不一样的，所以在定义实例时，允许我们传入拦截器。

首先我们定义一下interface，方便类型提示，代码如下：

```js
// types.ts
import type { AxiosRequestConfig, AxiosResponse } from 'axios'
export interface RequestInterceptors {
  // 请求拦截
  requestInterceptors?: (config: AxiosRequestConfig) => AxiosRequestConfig
  requestInterceptorsCatch?: (err: any) => any
  // 响应拦截
  responseInterceptors?: (config: AxiosResponse) => AxiosResponse
  responseInterceptorsCatch?: (err: any) => any
}
// 自定义传入的参数
export interface RequestConfig extends AxiosRequestConfig {
  interceptors?: RequestInterceptors
}
```

定义好基础的拦截器后，我们需要改造我们传入的参数的类型，因为axios提供的`AxiosRequestConfig`是不允许我们传入拦截器的，所以说我们自定义了`RequestConfig`，让其继承与`AxiosRequestConfig` 。

剩余部分的代码也比较简单，如下所示：

```js
// index.ts
import axios, { AxiosResponse } from 'axios'
import type { AxiosInstance, AxiosRequestConfig } from 'axios'
import type { RequestConfig, RequestInterceptors } from './types'

class Request {
  // axios 实例
  instance: AxiosInstance
  // 拦截器对象
  interceptorsObj?: RequestInterceptors

  constructor(config: RequestConfig) {
    this.instance = axios.create(config)
    this.interceptorsObj = config.interceptors
    
    this.instance.interceptors.request.use(
      (res: AxiosRequestConfig) => {
        console.log('全局请求拦截器')
        return res
      },
      (err: any) => err,
    )

    // 使用实例拦截器
    this.instance.interceptors.request.use(
      this.interceptorsObj?.requestInterceptors,
      this.interceptorsObj?.requestInterceptorsCatch,
    )
    this.instance.interceptors.response.use(
      this.interceptorsObj?.responseInterceptors,
      this.interceptorsObj?.responseInterceptorsCatch,
    )
    // 全局响应拦截器保证最后执行
    this.instance.interceptors.response.use(
      // 因为我们接口的数据都在res.data下，所以我们直接返回res.data
      (res: AxiosResponse) => {
        console.log('全局响应拦截器')
        return res.data
      },
      (err: any) => err,
    )
  }
}
```

我们的**拦截器的执行顺序为实例请求→类请求→实例响应→类响应**；这样我们就可以在实例拦截上做出一些不同的拦截，

### 接口拦截

现在我们对单一接口进行拦截操作，首先我们将`AxiosRequestConfig`类型修改为`RequestConfig`允许传递拦截器；然后我们在类拦截器中将接口请求的数据进行了返回，也就是说在`request()`方法中得到的类型就不是`AxiosResponse`类型了。

我们查看axios的`index.d.ts`中，对`request()`方法的类型定义如下：

```js
// type.ts
request<T = any, R = AxiosResponse<T>, D = any>(config: AxiosRequestConfig<D>): Promise<R>;
```

也就是说它允许我们传递类型，从而改变`request()`方法的返回值类型，我们的代码如下：

```js
// index.ts
request<T>(config: RequestConfig): Promise<T> {
  return new Promise((resolve, reject) => {
    // 如果我们为单个请求设置拦截器，这里使用单个请求的拦截器
    if (config.interceptors?.requestInterceptors) {
      config = config.interceptors.requestInterceptors(config)
    }
    this.instance
      .request<any, T>(config)
      .then(res => {
        // 如果我们为单个响应设置拦截器，这里使用单个响应的拦截器
        if (config.interceptors?.responseInterceptors) {
          res = config.interceptors.responseInterceptors<T>(res)
        }

        resolve(res)
      })
      .catch((err: any) => {
        reject(err)
      })
  })
}
```

这里还存在一个细节，就是我们在拦截器接受的类型一直是`AxiosResponse`类型，而在类拦截器中已经将返回的类型改变，所以说我们需要为拦截器传递一个泛型，从而使用这种变化，修改`types.ts`中的代码，示例如下：

```js
// index.ts
export interface RequestInterceptors {
  // 请求拦截
  requestInterceptors?: (config: AxiosRequestConfig) => AxiosRequestConfig
  requestInterceptorsCatch?: (err: any) => any
  // 响应拦截
  responseInterceptors?: <T = AxiosResponse>(config: T) => T
  responseInterceptorsCatch?: (err: any) => any
}	
```

请求接口拦截是最前执行，而响应拦截是最后执行。

## 封装请求方法

现在我们就来封装一个请求方法，首先是类进行实例化示例代码如下：

```js
// index.ts
import Request from './request'

const request = new Request({
  baseURL: import.meta.env.BASE_URL,
  timeout: 1000 * 60 * 5,
  interceptors: {
    // 请求拦截器
    requestInterceptors: config => {
      console.log('实例请求拦截器')

      return config
    },
    // 响应拦截器
    responseInterceptors: result => {
      console.log('实例响应拦截器')
      return result
    },
  },
})
```

然后我们封装一个请求方法， 来发送网络请求，代码如下：

```js
// src/server/index.ts
import Request from './request'

import type { RequestConfig } from './request/types'
interface YWZRequestConfig<T> extends RequestConfig {
  data?: T
}
interface YWZResponse<T> {
  code: number
  message: string
  data: T
}

/**
 * @description: 函数的描述
 * @interface D 请求参数的interface
 * @interface T 响应结构的intercept
 * @param {YWZRequestConfig} config 不管是GET还是POST请求都使用data
 * @returns {Promise}
 */
const ywzRequest = <D, T = any>(config: YWZRequestConfig<D>) => {
  const { method = 'GET' } = config
  if (method === 'get' || method === 'GET') {
    config.params = config.data
  }
  return request.request<YWZResponse<T>>(config)
}

export default ywzRequest
```

该请求方式默认为GET，且一直用`data`作为参数；

## 取消请求

应评论区`@Pic`、`@Michaelee`和`@Alone_Error`的建议，这里增加了一个取消请求；关于什么是取消请求可以参考**官方文档**[2]。

### 准备工作

我们需要将所有请求的取消方法保存到一个集合（这里我用的数组，也可以使用Map）中，然后根据具体需要去调用这个集合中的某个取消请求方法。

首先定义两个集合，示例代码如下：

```js
// index.ts
import type {
  RequestConfig,
  RequestInterceptors,
  CancelRequestSource,
} from './types'

class Request {
  /*
  存放取消方法的集合
  * 在创建请求后将取消请求方法 push 到该集合中
  * 封装一个方法，可以取消请求，传入 url: string|string[] 
  * 在请求之前判断同一URL是否存在，如果存在就取消请求
  */
  cancelRequestSourceList?: CancelRequestSource[]
  /*
  存放所有请求URL的集合
  * 请求之前需要将url push到该集合中
  * 请求完毕后将url从集合中删除
  * 添加在发送请求之前完成，删除在响应之后删除
  */
  requestUrlList?: string[]

  constructor(config: RequestConfig) {
    // 数据初始化
    this.requestUrlList = []
    this.cancelRequestSourceList = []
  }
}
```

这里用的`CancelRequestSource`接口，我们去定义一下：

```js
// type.ts
export interface CancelRequestSource {
  [index: string]: () => void
}
```

这里的`key`是不固定的，因为我们使用`url`做`key`，只有在使用的时候才知道`url`，所以这里使用这种语法。微信搜索公众号：Java项目精选，回复：java 领取资料 。

### 取消请求方法的添加与删除

首先我们改造一下`request()`方法，它需要完成两个工作，一个就是在请求之前将`url`和取消请求方法`push`到我们前面定义的两个属性中，然后在请求完毕后（不管是失败还是成功）都将其进行删除，实现代码如下：

```js
// index.ts
request<T>(config: RequestConfig): Promise<T> {
  return new Promise((resolve, reject) => {
    // 如果我们为单个请求设置拦截器，这里使用单个请求的拦截器
    if (config.interceptors?.requestInterceptors) {
      config = config.interceptors.requestInterceptors(config)
    }
    const url = config.url
    // url存在保存取消请求方法和当前请求url
    if (url) {
      this.requestUrlList?.push(url)
      config.cancelToken = new axios.CancelToken(c => {
        this.cancelRequestSourceList?.push({
          [url]: c,
        })
      })
    }
    this.instance
      .request<any, T>(config)
      .then(res => {
        // 如果我们为单个响应设置拦截器，这里使用单个响应的拦截器
        if (config.interceptors?.responseInterceptors) {
          res = config.interceptors.responseInterceptors<T>(res)
        }

        resolve(res)
      })
      .catch((err: any) => {
        reject(err)
      })
      .finally(() => {
        url && this.delUrl(url)
      })
  })
}
```

这里我们将删除操作进行了抽离，将其封装为一个私有方法，示例代码如下：

```js
// index.ts
/**
 * @description: 获取指定 url 在 cancelRequestSourceList 中的索引
 * @param {string} url
 * @returns {number} 索引位置
 */
private getSourceIndex(url: string): number {
  return this.cancelRequestSourceList?.findIndex(
    (item: CancelRequestSource) => {
      return Object.keys(item)[0] === url
    },
  ) as number
}
/**
 * @description: 删除 requestUrlList 和 cancelRequestSourceList
 * @param {string} url
 * @returns {*}
 */
private delUrl(url: string) {
  const urlIndex = this.requestUrlList?.findIndex(u => u === url)
  const sourceIndex = this.getSourceIndex(url)
  // 删除url和cancel方法
  urlIndex !== -1 && this.requestUrlList?.splice(urlIndex as number, 1)
  sourceIndex !== -1 &&
    this.cancelRequestSourceList?.splice(sourceIndex as number, 1)
}
```

### 取消请求方法

现在我们就可以封装取消请求和取消全部请求了，我们先来封装一下取消全部请求吧，这个比较简单，只需要调用`this.cancelRequestSourceList`中的所有方法即可，实现代码如下：

```js
// index.ts
// 取消全部请求
cancelAllRequest() {
  this.cancelRequestSourceList?.forEach(source => {
    const key = Object.keys(source)[0]
    source[key]()
  })
}
```

现在我们封装一下取消请求，因为它可以取消一个和多个，那它的参数就是`url`，或者包含多个URL的数组，然后根据传值的不同去执行不同的操作，实现代码如下：

```js
// index.ts
// 取消请求
cancelRequest(url: string | string[]) {
  if (typeof url === 'string') {
    // 取消单个请求
    const sourceIndex = this.getSourceIndex(url)
    sourceIndex >= 0 && this.cancelRequestSourceList?.[sourceIndex][url]()
  } else {
    // 存在多个需要取消请求的地址
    url.forEach(u => {
      const sourceIndex = this.getSourceIndex(u)
      sourceIndex >= 0 && this.cancelRequestSourceList?.[sourceIndex][u]()
    })
  }
}
```

## 测试

### 测试请求方法

现在我们就来测试一下这个请求方法，这里我们使用**www.apishop.net/**[3]提供的免费API进行测试，测试代码如下：

```vue
<script setup lang="ts">
// app.vue
import request from './service'
import { onMounted } from 'vue'

interface Req {
  apiKey: string
  area?: string
  areaID?: string
}
interface Res {
  area: string
  areaCode: string
  areaid: string
  dayList: any[]
}
const get15DaysWeatherByArea = (data: Req) => {
  return request<Req, Res>({
    url: '/api/common/weather/get15DaysWeatherByArea',
    method: 'GET',
    data,
    interceptors: {
      requestInterceptors(res) {
        console.log('接口请求拦截')

        return res
      },
      responseInterceptors(result) {
        console.log('接口响应拦截')
        return result
      },
    },
  })
}
onMounted(async () => {
  const res = await get15DaysWeatherByArea({
    apiKey: import.meta.env.VITE_APP_KEY,
    area: '北京市',
  })
  console.log(res.result.dayList)
})
</script>
```

如果在实际开发中可以将这些代码分别抽离。

上面的代码在命令中输出

```sh
接口请求拦截
实例请求拦截器
全局请求拦截器
实例响应拦截器
全局响应拦截器
接口响应拦截
[{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}]
```

### 测试取消请求

首先我们在`.server/index.ts`中对取消请求方法进行导出，实现代码如下：

```js
// 取消请求
export const cancelRequest = (url: string | string[]) => {
  return request.cancelRequest(url)
}
// 取消全部请求
export const cancelAllRequest = () => {
  return request.cancelAllRequest()
}
```

然后我们在`app.vue`中对其进行引用，实现代码如下：

```vue
<template>
  <el-button
    @click="cancelRequest('/api/common/weather/get15DaysWeatherByArea')"
    >取消请求</el-button
  >
  <el-button @click="cancelAllRequest">取消全部请求</el-button>
  <router-view></router-view>
</template>
<script setup lang="ts">
import request, { cancelRequest, cancelAllRequest } from './service'
</script>
```

发送请求后，点击按钮即可实现对应的功能

## 写在最后

本篇文章到这里就结束了，如果文章对你有用，可以**三连**支持一下，如果文章中有错误或者说你有更好的见解，欢迎指正~

项目地址：**ywanzhou/vue3-template \(github.com\)

