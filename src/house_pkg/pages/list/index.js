Page({
  data: {
  },

  deleteHouse (ev) {
    const { position, instance } = ev.detail

    if (position === 'right') {
      // 显示 Dialog 对话框

      // swiper-cell 滑块关闭
      instance.close()
    }
  },

  goDetail () {
    wx.navigateTo({
      url: '/house_pkg/pages/detail/index',
    })
  },

  addHouse () {
    wx.navigateTo({
      url: '/house_pkg/pages/locate/index',
    })
  },
})
