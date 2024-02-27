// pages/notify/index.ts
// 引入详情接口
import {
  announcementDetails
} from '../../api/community/index'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 公告详情数据
    announcementDetails: []
  },

  /**
   * 生命周期函数--监听页面加载
   * parmas: 可以在 onLoad 的参数中获取打开当前页面路径中的参数
   */
  onLoad(parmas) {
    console.log(parmas, "parmas");
    this.announcementDetails(parmas)
  },

  // 获取详情
  async announcementDetails(parmas) {
    const data = await announcementDetails(parmas.id)
    this.setData({
      announcementDetails: data
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})