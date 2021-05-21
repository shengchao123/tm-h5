import request from '../request'
import { urls } from '../urls'
// 获取活动分页
export function getJourneyActivityPage (params) {
  return request({
    url: urls.getJourneyActivityPage,
    needlessToken: true,
    data: {
      ...params
    }
  })
}
// 获取活动详情
export function getJourneyActivityDetail (params) {
  return request({
    url: urls.getJourneyActivityDetail,
    needlessToken: true,
    data: {
      ...params
    }
  })
}


