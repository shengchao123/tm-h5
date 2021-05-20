import request from '../request'
import { urls } from '../urls'

export function getMemberPersonalInfo () { // 我的信息获取 '/crm/member/getMemberPersonalInfo'
  return request({
    url: urls.getMemberPersonalInfo,
    data: {}
  })
}

export function getMyJourneyItineraryPage (params) { // 我的信息获取 '/linanJourney/journeyItinerary/getMyJourneyItineraryPage'
  return request({
    url: urls.getMyJourneyItineraryPage,
    data: {
      pageSize: 100,
      pageNumber: 1,
      ...params
    }
  })
}

export function findOrgList (params) { // 获取联盟组织列表 '/organization/orgConsumer/findOrgList'
  return request({
    url: urls.findOrgList,
    data: {
      ...params
    }
  })
}
export function verifiedRealName (params) { // 实名认证 '/crm/member/verifiedRealName'
  return request({
    url: urls.verifiedRealName,
    data: {
      ...params
    }
  })
}