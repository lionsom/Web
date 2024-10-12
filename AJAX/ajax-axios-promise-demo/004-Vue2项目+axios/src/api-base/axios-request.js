import axios from 'axios'
//
import { baseHost } from '@/api/base'
// 由于该页面不是Vue的页面，所以无法使用this.$notify，只能乖乖的导包调用
import { Message } from 'element-ui'

// -------------- 新建实例 -----------------

// 新建axios实例，将来对新建的实例进行自定义配置
// 好处：不会污染原始axios实例
const LXRequest = axios.create({
  baseURL: baseHost, // 配置请求基础路径  'http://cba.itlike.com/public/index.php?s=/api/',
  timeout: 5000 // 超时时间
})

// -------------- 自定义配置 - 请求、响应 拦截器 -----------------

// 添加请求拦截器
LXRequest.interceptors.request.use(function (config) {
  // 在发送请求之前做些什么
  console.log('请求host：' + baseHost)
  console.log('请求地址：' + config.url)
  return config
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error)
})

// 添加响应拦截器
LXRequest.interceptors.response.use(function (response) {
  // 2xx 范围内的状态码都会触发该函数。
  // 错误码统一拦截
  const res = response.data
  if (res.status === 200) {
    debugger
    // 对响应数据做点什么
    Message({ message: '成功', type: 'success' })
    return res
  } else {
    // 给提示
    Message(res.message)
    // 抛出一个错误的promise
    return Promise.reject(res.message)
  }
}, function (error) {
  // 超出 2xx 范围的状态码都会触发该函数。
  // 对响应错误做点什么
  Message({ message: error.message, type: 'error' })
  return Promise.reject(error)
})

export default LXRequest
