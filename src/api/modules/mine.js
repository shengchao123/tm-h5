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