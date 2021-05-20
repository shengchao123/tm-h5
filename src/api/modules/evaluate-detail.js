import request from '../request'
import { urls } from '../urls'

export function getItineraryEvaluationInfoById (params) {
  return request({
    url: urls.getItineraryEvaluationInfoById,
    needlessToken: true,
    data: {
      ...params
    }
  })
}


