import request from '../request'
import { urls } from '../urls'

export function getJourneyRegionsList () { // 获取行政区域列表 '/linanJourney/journeyLine/getJourneyRegionsList'
  return request({
    url: urls.getJourneyRegionsList,
    data: {
    }
  })
}

export function getJourneyPointListByRegionsCode (params) { // 获取点位列表 '/linanJourney/journeyLine/getJourneyPointListByRegionsCode'
  return request({
    url: urls.getJourneyPointListByRegionsCode,
    data: {
      ...params
    }
  })
}

export function getRecommendJourneyLineList () { // 推荐路线 '/linanJourney/journeyLine/getRecommendJourneyLineList'
  return request({
    url: urls.getRecommendJourneyLineList,
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

export function getJourneyItineraryById (params) { // 根据id获取行程单
  return request({
    url: urls.getJourneyItineraryById,
    data: {
      orgId: localStorage.getItem('orgId'),
      ...params
    }
  })
}

export function removeJourneyItinerary (params) { // 删除行程单
  return request({
    url: urls.removeJourneyItinerary,
    data: {
      orgId: localStorage.getItem('orgId'),
      ...params
    }
  })
}

export function signUpJourneyItinerary (params) { // 报名行程单
  return request({
    url: urls.signUpJourneyItinerary,
    data: {
      orgId: localStorage.getItem('orgId'),
      ...params
    }
  })
}

export function cancelSignUpJourneyItinerary (params) { // 取消报名行程单
  return request({
    url: urls.cancelSignUpJourneyItinerary,
    data: {
      orgId: localStorage.getItem('orgId'),
      ...params
    }
  })
}