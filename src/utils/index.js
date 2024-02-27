/**
 * 封装全局服用工具类
 * 1工具函数封装多少
 * 2 封装之后怎样方便使用
 *  1导出=>页面导出使用
 *  2追加到小程序全局对象中wx=>页面通过wx.方法名进行使用
 */
// 引入时间格式化工具
import dayjs from 'dayjs'
// 引入加密、解密方法
import {
  encrypt,
  decrypt
} from './encry.js'
// 定义全局工具对象
const utils = {
  // 1封装微信显示消息提示框组件
  Toast(OBj) {
    wx.showToast({
      title: OBj.title,
      icon: OBj.icon,
      duration: 1500
    })
  },
  formateTime(time, type) {
    return dayjs(time).format(type)
  },
  // 加密存储
  setItem(name, token) {
    console.log(name, 'name');
    console.log(encrypt(token), 'token');
    wx.setStorageSync(name, encrypt(token));
  },
  // 解密获取
  getItem(name) {
    console.log(name, 'name');
    wx.getStorage({
      key: name,
      success: (name) => {
        console.log(name, 'name111');
        let value = decrypt(name.data)
        return value
      },
      fail: () => {
        return
      },
    });
  },
  //  清空
  removeItem() {
    wx.clearStorage()
  }
}
//  挂载到wx全局中
wx.utils = utils
export default utils