// 社区相关接口
/**
 * 社区列表
 */
export const getCommunityList = (params) => {
  return wx.http({
    url: '/announcement',
    method: 'get',
    params
 })
}

/**
 *  公告详情
 */
export const  announcementDetails = (params) => {
  return wx.http({
    url: `/announcement/${params}`,
    method: 'get',
 })
}