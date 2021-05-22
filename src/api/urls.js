
export const fileHost = 'https://hzslzx.oss-cn-hangzhou.aliyuncs.com/' // 文件显示地址
export const imgHost = 'https://hzslzx.oss-cn-hangzhou.aliyuncs.com/system/h5-mall/images/' // 图片路径


export const urls = {
  redirectToOAuth: '/third/authorization/redirectToOAuth', // 获取授权 url
  getUserInfoAndToken: '/third/authorization/getUserInfoAndToken', // 接受微信公众号授权后的code获取thirdUserId及登陆
  getMemberLoginInfo: '/crm/member/getMemberLoginInfo', // 获取三方用户信息
  bindPhone: '/crm/member/bindPhone', // 获取三方用户信息
  getJSConfig: '/third/authorization/getJSConfig',

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

  // 评价详情
  getItineraryEvaluationInfoById:'/linanJourney/journeyItineraryEvaluation/getItineraryEvaluationInfoById', // 根据笔记id查询行程评价详细信息

  // 活动
  getJourneyActivityPage:'/linanJourney/journeyActivity/getJourneyActivityPage', // 获取活动分页
  getJourneyActivityDetail:'/linanJourney/journeyActivity/getJourneyActivityDetail', // 获取活动详情
  signUpJourneyActivity:'/linanJourney/journeyActivity/signUpJourneyActivity', // 报名活动
  cancelSignUpJourneyActivity:'/linanJourney/journeyActivity/cancelSignUpJourneyActivity', // 取消报名活动
  publishJourneyActivityStyle:'/linanJourney/journeyActivity/publishJourneyActivityStyle', // 发布活动风采
  getJourneyActivityList:'/linanJourney/journeyActivity/getJourneyActivityList', // 获取活动列表
  getMyJourneyActivityPage:'/linanJourney/journeyActivity/getMyJourneyActivityPage', // 获取我的活动分页
  // 党建联盟
  getJourneyAllianceInfoList: '/linanJourney/journeyAlliance/getJourneyAllianceInfoList', // 获取联盟列表
  getJourneyAllianceDetailList: '/linanJourney/journeyAlliance/getJourneyAllianceDetailList', // 获取联盟及详情列表
  getGraphicInfoPage: '/partyWebsite/partyGraphic/getGraphicInfoPage', // 分页获取风采图文信息
  getGraphicInfoById: '/partyWebsite/partyGraphic/getGraphicInfoById', // 获取风采图文详情

  // 我的页面
  getMemberPersonalInfo: '/crm/member/getMemberPersonalInfo', // 我的信息获取
  getMyJourneyItineraryPage: '/linanJourney/journeyItinerary/getMyJourneyItineraryPage', // 我的行程单
  getCommunityNoteCommentIsNewMassage: '/community/communityNoteComment/getCommunityNoteCommentIsNewMassage', // 未读评论消息提醒
  getCommunityLikeIsNewMassage: '/community/communityLike/getCommunityLikeIsNewMassage', // 获取未读点赞点赞
  getMyJourneyAnnouncementPage: '/linanJourney/journeyAnnouncement/getMyJourneyAnnouncementPage', // 获取我的公告分页
  getJourneyAnnouncementDetail: '/linanJourney/journeyAnnouncement/getJourneyAnnouncementDetail', // 获取公告详情

  // 实名认证
  findOrgList: '/organization/orgConsumer/findOrgList', // 获取联盟组织列表
  verifiedRealName: '/crm/member/verifiedRealName', // 实名认证

  // 我的红心
  getMyRedHeart: '/linanJourney/journeyMemberRedHeartRecordManagement/getMyRedHeart', // 获取我的红心值
  getMyRedHeartRecordPage: '/linanJourney/journeyMemberRedHeartRecordManagement/getMyRedHeartRecordPage', // 获取我的红心值记录分页

  // 帖子详情
  getCommunityNoteInfoById:'/community/communityNote/getCommunityNoteInfoById', // 根据笔记id查询笔记详细信息
  getCommunityNoteInfoByShareId:'/community/communityNote/getCommunityNoteInfoByShareId', // 根据分享id查询笔记详细信息
  createCommunityNoteComment: '/community/communityNoteComment/createCommunityNoteComment', // 新增社区笔记评论
  communityLikeNote: '/community/communityLike/communityLikeNote', // 点赞笔记
  cancelCommunityLikeNote: '/community/communityLike/cancelCommunityLikeNote', // 取消点赞笔记
  communityLikeNoteComment: '/community/communityLike/communityLikeNoteComment', //点赞评论
  cancelCommunityLikeNoteComment: '/community/communityLike/cancelCommunityLikeNoteComment', //取消点赞评论
  shareCommunityNote: '/community/communityShare/shareCommunityNote', // 分享笔记
  getNoteCommentDetailPage: '/community/communityNoteComment/getNoteCommentDetailPage', // 分页获取笔记评论详情

  // 个人信息
  uploadFile: '/file/fileUpload/uploadMaterial', //  上传文件
  uploadAvatar: '/file/fileUpload/uploadAvatar', //  上传头像
  getMemberPersonalInfo: '/crm/member/getMemberPersonalInfo', //  获取会员个人信息
  modifyMemberPersonalInfo: '/crm/member/modifyMemberPersonalInfo', //  编辑会员个人信息

  // 组织生活记录
  getJourneyItinerarySignInById: '/linanJourney/journeySignInRecord/getJourneyItinerarySignInById', // 根据行程单id获取行程单打卡信息
  createJourneyLifeDocumentary: '/linanJourney/journeyLifeDocumentary/createJourneyLifeDocumentary', // 创建生活纪实
  getJourneyLifeDocumentaryByItineraryId: '/linanJourney/journeyLifeDocumentary/getJourneyLifeDocumentaryByItineraryId', // 根据行程单id获取生活纪实
  modifyJourneyLifeDocumentary: '/linanJourney/journeyLifeDocumentary/modifyJourneyLifeDocumentary', // 修改生活纪实
  removeJourneyLifeDocumentary: '/linanJourney/journeyLifeDocumentary/removeJourneyLifeDocumentary', // 删除生活纪实


}
