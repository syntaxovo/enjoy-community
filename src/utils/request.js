//接口请求
import http from 'wechat-http'

// 接口基础地址
http.baseURL = 'https://live-api.itheima.net'

// 请求拦截器
http.intercept.http = (options) => {
  // 合并头信息
  // options.header = {
  //   // 权限认证
  //   Authorization: 'Bearer token'
  //   // 默认头信息
  //   ...options.header
  // }
  // 拦截器处理后的请求参数
  return options
}

// 响应拦截器
http.intercept.response = ({data}) => {
 
  // 拦截器处理后的响应结果
  if (data.code !== 1e4 ) {
    // 请求失败
    wx.utils.Toast({ titele: "请求失败", icon: 'error' })
    // 抛出异常
    return new Promise.reject(data)
  }
    // 请求失败
  wx.utils.Toast({ titele: "请求成功", icon: 'success' })
  return data.data
}

// 作为模块导出
export default http

// 也可挂载到 wx 全局命名空间
wx.http = http