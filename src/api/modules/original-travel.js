import request from '../request'
import { urls } from '../urls'

export function getJourneyLineListByOrgId () { // 推荐路线 '/linanJourney/journeyLine/getJourneyLineListByOrgId'
  return request({
    url: urls.getJourneyLineListByOrgId,
    data: {
      orgId: localStorage.getItem('orgId')
    }
  })
}

export function getJourneyPointListByJourneyId (params) { // 路线获取点位 '/linanJourney/journeyLine/getJourneyPointListByJourneyId'
  return request({
    url: urls.getJourneyPointListByJourneyId,
    data: {
      ...params
    }
  })
}

export function getJourneyPointListByOrgId (params) { // 路线获取点位 '/linanJourney/journeyLine/getJourneyPointListByJourneyId'
  return request({
    url: urls.getJourneyPointListByOrgId,
    data: {
      orgId: localStorage.getItem('orgId'),
      ...params
    }
  })
}

export function createJourneyItinerary (params) { // 创建行程单
  return request({
    url: urls.createJourneyItinerary,
    data: {
      orgId: localStorage.getItem('orgId'),
      ...params
    }
  })
}
