// 接口统一管理
const baseApi = {
  // 账号
  login: '/login',
  logout: '/api/logout',
  // 首页数据
  totalInfo: '/totalInfo',
  data: '/api/home/data'
}

// 导出基本IP地址
export const baseIP = 'localhost'

// 导出基本端口号
export const basePort = '3000'

// 基于基本IP地址和端口号导出基本主机地址
export const baseHost = 'http://' + baseIP + ':' + basePort

//
export default baseApi
