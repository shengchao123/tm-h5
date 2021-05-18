
export const fileHost = 'https://hzslzx.oss-cn-hangzhou.aliyuncs.com/' // 文件显示地址
export const imgHost = 'https://hzslzx.oss-cn-hangzhou.aliyuncs.com/system/h5-mall/images/' // 图片路径


export const urls = {
  redirectToOAuth: '/third/authorization/redirectToOAuth', // 获取授权 url
  getUserInfo: '/third/authorization/getUserInfoAndToken', // 获取三方用户信息

  // 初心之旅
  getJourneyLineListByOrgId: '/linanJourney/journeyLine/getJourneyLineListByOrgId', // 推荐路线
  getJourneyPointListByJourneyId: '/linanJourney/journeyLine/getJourneyPointListByJourneyId', // 路线点位信息
  getJourneyPointListByOrgId: '/linanJourney/journeyPoint/getJourneyPointListByOrgId', // 获取点位列表

  sendVerificationCode: '/crm/member/sendVerificationCode', // 发送验证码
  getJourneyPointListByRegionsCode: '/linanJourney/journeyPoint/getJourneyPointListByRegionsCode', // 获取点位列表
  getJourneyRegionsList: '/linanJourney/journeyRegionsManagement/getJourneyRegionsList', //   
  createJourneyItinerary: '/linanJourney/journeyItinerary/createJourneyItinerary', // 创建行程单

}
