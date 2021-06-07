import request from '../request'
import { urls } from '../urls'

export function getJourneyProductInfoPage (params) { // '/linanJourney/journeyProduct/getJourneyProductInfoPage', // 城乡产品列表
  return request({
    url: urls.getJourneyProductInfoPage,
    needlessToken: true,
    data: { ...params }
  })
}

export function getJourneyProductInfoById (params) { // '/linanJourney/journeyProduct/getJourneyProductInfoById', // 城乡产品详情
  return request({
    url: urls.getJourneyProductInfoById,
    needlessToken: true,
    data: { ...params }
  })
}

/**
 * @param {type} 活动类型 (01:联盟活动; 02:特色活动)
 * @param {status} 状态 (01:报名中; 02:进行中; 03:已结束)
 */
export function getJourneyActivityPage (params) { // '/linanJourney/journeyActivity/getJourneyActivityPage', // 特色活动分页
  return request({
    url: urls.getJourneyActivityPage,
    needlessToken: true,
    data: { ...params, type: '02' }
  })
}