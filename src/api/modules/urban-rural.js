import request from '../request'
import { urls } from '../urls'

export function getJourneyProductInfoPage (params) { // '/linanJourney/journeyProduct/getJourneyProductInfoPage', // 城乡产品列表
  return request({
    url: urls.getJourneyProductInfoPage,
    needlessToken: true,
    data: { ...params }
  })
}