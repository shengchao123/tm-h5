import request from '../request'
import { urls } from '../urls'
export function getShowJourneyPolicyPage (params) { // 政策分页
  return request({
    url: urls.getShowJourneyPolicyPage,
    needlessToken: true,
    data: {
      ...params
    }
  })
}
export function getShowJourneyPolicyDetail (params) { // 政策详情
  return request({
    url: urls.getShowJourneyPolicyDetail,
    needlessToken: true,
    data: {
      ...params
    }
  })
}

export function getShowJourneyTalentsPage (params) { // 人才分页
  return request({
    url: urls.getShowJourneyTalentsPage,
    needlessToken: true,
    data: {
      ...params
    }
  })
}
export function getShowJourneyTalentsDetail (params) { // 人才详情
  return request({
    url: urls.getShowJourneyTalentsDetail,
    needlessToken: true,
    data: {
      ...params
    }
  })
}