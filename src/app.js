// 在全局入库文件中引入工具类函数
import './utils/index'
// 导入axios接口请求
import './utils/request'
// app.js
/**
 * 开发者可以添加任意的函数或数据变量到 Object 参数中
 * 用 this 可以访问
 */
App({
  // 小程序第一次启动时触发
  onLaunch() {
    this.setToken('assadadadasds')
  },
  globalData: {},
  // 定义全局参数 
  token: '',
  // 设置token,
  setToken(token) {
    this.token = `Bearer ${token}`
    wx.utils.setItem('toekn', this.token)
  },
  //获取token
  getToken() {
    this.token = wx.utils.getItem('token');
    console.log(this.token, " this.token");
  }
})