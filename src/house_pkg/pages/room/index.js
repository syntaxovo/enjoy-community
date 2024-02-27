// house_pkg/pages/room/index.ts
Page({
  data: {
    point: '', // 小区名
    building: '', // 楼号
    rooms: [] // 房间列表（模拟）
  },
  onLoad ({ point, building }) {
    // 伪造房间数据
    this.fake(point, building)
  },

  fake (point, building) {
    // 伪造房间号数据（仅用于授课）
    const size = Math.floor(Math.random() * 5) + 4
    const rooms = []

    // 随生生成若干个房间号
    for (let i = 0; i < size; i++) {
      rooms.push(Math.floor(Math.random() * 900 + 100))
    }
    // 更新数据，重新渲染
    this.setData({ rooms, point, building })
  },
  goForm (ev) {
    // 获取小区和楼栋信息
    const { point, building } = this.data
    wx.navigateTo({
      url: `/house_pkg/pages/form/index?point=${point}&building=${building}&room=${ev.mark.room}`,
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage () {

  }
})