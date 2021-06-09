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
export function getJourneyMerchantBoothInfoPage (params) { // '/linanJourney/journeyMerchantBooth/getJourneyMerchantBoothInfoPage', // 分页获取商家展位
  return request({
    url: urls.getJourneyMerchantBoothInfoPage,
    needlessToken: true,
    data: { ...params }
  })
}
export function getJourneyMerchantBoothInfoById (params) { // '/linanJourney/journeyMerchantBooth/getJourneyMerchantBoothInfoById', // 商家展位详情
  return request({
    url: urls.getJourneyMerchantBoothInfoById,
    needlessToken: true,
    data: { ...params }
  })
}
export function createJourneyMerchantBooth (params) { // '/linanJourney/journeyMerchantBooth/createJourneyMerchantBooth', // 创建商家展位
  return request({
    url: urls.createJourneyMerchantBooth,
    data: { ...params }
  })
}
export function createJourneyResourceSharing (params) { //  '/linanJourney/journeyResourceSharing/createJourneyResourceSharing', // 新增资源共享
  return request({
    url: urls.createJourneyResourceSharing,
    data: { ...params }
  })
}
export function getJourneyResourceSharingPage (params) { // '/linanJourney/journeyResourceSharing/getJourneyResourceSharingPage', // 资源共享列表
  return request({
    url: urls.getJourneyResourceSharingPage,
    needlessToken: true,
    data: { ...params }
  })
}

export function getJourneyResourceSharingInfoById (params) { // ' /linanJourney/journeyResourceSharing/getJourneyResourceSharingInfoById', // 资源共享详情
  return request({
    url: urls.getJourneyResourceSharingInfoById,
    needlessToken: true,
    data: { ...params }
  })
}
