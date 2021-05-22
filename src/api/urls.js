
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
  modifyJourneyItinerary: '/linanJourney/journeyItinerary/modifyJourneyItinerary', // 修改行程单
  getJourneyItineraryById: '/linanJourney/journeyItinerary/getJourneyItineraryById', // 根据id获取行程单
  removeJourneyItinerary: '/linanJourney/journeyItinerary/removeJourneyItinerary', // 删除行程单
  signUpJourneyItinerary: '/linanJourney/journeyItinerary/signUpJourneyItinerary', // 报名行程单
  cancelSignUpJourneyItinerary: '/linanJourney/journeyItinerary/cancelSignUpJourneyItinerary', // 取消报名行程单

  // 党建联盟
  getJourneyAllianceInfoList: '/linanJourney/journeyAlliance/getJourneyAllianceInfoList', // 获取联盟列表
  getJourneyAllianceDetailList: '/linanJourney/journeyAlliance/getJourneyAllianceDetailList', // 获取联盟及详情列表
  getGraphicInfoPage: '/partyWebsite/partyGraphic/getGraphicInfoPage', // 分页获取风采图文信息
  getGraphicInfoById: '/partyWebsite/partyGraphic/getGraphicInfoById', // 获取风采图文详情

  // 我的页面
  getMemberPersonalInfo: '/crm/member/getMemberPersonalInfo', // 我的信息获取
  getMyJourneyItineraryPage: '/linanJourney/journeyItinerary/getMyJourneyItineraryPage', // 我的行程单

  // 实名认证
  findOrgList: '/organization/orgConsumer/findOrgList', // 获取联盟组织列表
  verifiedRealName: '/crm/member/verifiedRealName', // 实名认证

  // 我的红心
  getMyRedHeart: '/linanJourney/journeyMemberRedHeartRecordManagement/getMyRedHeart', // 获取我的红心值
  getMyRedHeartRecordPage: '/linanJourney/journeyMemberRedHeartRecordManagement/getMyRedHeartRecordPage', // 获取我的红心值记录分页

  // 个人信息
  uploadAvatar: '/file/fileUpload/uploadAvatar', //  上传头像
  getMemberPersonalInfo: '/crm/member/getMemberPersonalInfo', //  获取会员个人信息
  modifyMemberPersonalInfo: '/crm/member/modifyMemberPersonalInfo', //  编辑会员个人信息

}
