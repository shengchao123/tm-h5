import request from '../request'
import { urls } from '../urls'
// 获取活动分页
export function getJourneyActivityPage (params) {
  return request({
    url: urls.getJourneyActivityPage,
    data: {
      ...params
    }
  })
}
// 获取活动详情
export function getJourneyActivityDetail (params) {
  return request({
    url: urls.getJourneyActivityDetail,
    data: {
      ...params
    }
  })
}
// 报名活动
export function signUpJourneyActivity (params) {
  return request({
    url: urls.signUpJourneyActivity,
    data: {
      ...params
    }
  })
}
// 取消报名活动
export function cancelSignUpJourneyActivity (params) {
  return request({
    url: urls.cancelSignUpJourneyActivity,
    data: {
      ...params
    }
  })
}
// 发布活动风采
export function publishJourneyActivityStyle (params) {
  return request({
    url: urls.publishJourneyActivityStyle,
    data: {
      ...params
    }
  })
}
// 获取活动列表
export function getJourneyActivityList (params) {
  return request({
    url: urls.getJourneyActivityList,
    data: {
      ...params
    }
  })
}


