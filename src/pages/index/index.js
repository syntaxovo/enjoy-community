//  引入工具类型函数
import {getCommunityList} from '../../api/community/index'
Page({
  data() {
    return {
      // 社区公告列表
      communityList:[]
    }
  },
  onLoad() {
    // 获取公告列表数据   
    this.getCommunityList()
  },
  /**
   * 接口请求测试
   */
  async getCommunityList() {
    const res = await getCommunityList()
    this.setData({
      communityList:res
    })
 }
})