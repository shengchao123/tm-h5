
export const fileHost = 'https://hzslzx.oss-cn-hangzhou.aliyuncs.com/' // 文件显示地址
export const imgHost = 'https://hzslzx.oss-cn-hangzhou.aliyuncs.com/system/h5-mall/images/' // 图片路径


export const urls = {
  redirectToOAuth: '/third/authorization/redirectToOAuth', // 获取授权 url
  getUserInfoAndToken: '/third/authorization/getUserInfoAndToken', // 接受微信公众号授权后的code获取thirdUserId及登陆
  getMemberLoginInfo: '/crm/member/getMemberLoginInfo', // 获取三方用户信息
  bindPhone: '/crm/member/bindPhone', // 获取三方用户信息

  // 初心之旅
  getRecommendJourneyLineList: '/linanJourney/journeyLine/getRecommendJourneyLineList', // 推荐路线
  getJourneyPointListByJourneyId: '/linanJourney/journeyLine/getJourneyPointListByJourneyId', // 路线点位信息
  getJourneyPointListByRegionsCode: '/linanJourney/journeyPoint/getJourneyPointListByRegionsCode', // 获取点位列表

  sendVerificationCode: '/crm/member/sendVerificationCode', // 发送验证码
  getJourneyRegionsList: '/linanJourney/journeyRegions/getJourneyRegionsList', //
  createJourneyItinerary: '/linanJourney/journeyItinerary/createJourneyItinerary', // 创建行程单
  getJourneyItineraryById: '/linanJourney/journeyItinerary/getJourneyItineraryById', // 根据id获取行程单

  // 评价详情
  getItineraryEvaluationInfoById:'/linanJourney/journeyItineraryEvaluation/getItineraryEvaluationInfoById', // 根据笔记id查询行程评价详细信息

  // 活动
  getJourneyActivityPage:'/linanJourney/journeyActivity/getJourneyActivityPage', // 获取活动分页
  getJourneyActivityDetail:'/linanJourney/journeyActivity/getJourneyActivityDetail', // 获取活动详情
  signUpJourneyActivity:'/linanJourney/journeyActivity/signUpJourneyActivity', // 报名活动
  cancelSignUpJourneyActivity:'/linanJourney/journeyActivity/cancelSignUpJourneyActivity', // 取消报名活动
  publishJourneyActivityStyle:'/linanJourney/journeyActivity/publishJourneyActivityStyle', // 发布活动风采
  getJourneyActivityList:'/linanJourney/journeyActivity/getJourneyActivityList', // 获取活动列表

  // 我的页面
  getMemberPersonalInfo: '/crm/member/getMemberPersonalInfo', // 我的信息获取
  getMyJourneyItineraryPage: '/linanJourney/journeyItinerary/getMyJourneyItineraryPage', // 我的行程单

  // 我的红心
  getMyRedHeart: '/linanJourney/journeyMemberRedHeartRecordManagement/getMyRedHeart', // 获取我的红心值
  getMyRedHeartRecordPage: '/linanJourney/journeyMemberRedHeartRecordManagement/getMyRedHeartRecordPage', // 获取我的红心值记录分页

}
