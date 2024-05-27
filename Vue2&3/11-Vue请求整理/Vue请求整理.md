# 七、axios封装

axios安装

```bash
$ pnpm add axios
```

大致流程

```ts
import axios from 'axios'
import { useUserStore } from '@/stores'
import { ElMessage } from 'element-plus'

const baseURL = 'http://www.baidu.com'

const instance = axios.create({
  // 基础配置
  baseURL,
  timeout: 10000
})

// 请求拦截器
instance.interceptors.request.use(
  (config) => {
    // 发送请求之前做些什么
    const userStore = useUserStore()
    if (userStore.token) {
      config.headers.Authorization = `AAAAA ${userStore.token}`
    }
    return config
  },
  (error) => {
    // 请求错误处理
    return Promise.reject(error)
  }
)

// 响应拦截器
instance.interceptors.response.use(
  (response) => {
    // 对响应数据做些事
    if (response.data.code === 0) {
      return response
    }
    // 处理业务失败，给错误提示
    ElMessage.error(response.data.message || '服务异常')
    return Promise.reject(response.data)
  },
  (error) => {
    // 请求错误处理
    if (error.response.status === 401) {
      ElMessage.error('登录已过期，请重新登录')
    }
    ElMessage.error(error.response.data.message || '服务异常')
    return Promise.reject(error)
  }
)

export default instance
export { baseURL }
```

