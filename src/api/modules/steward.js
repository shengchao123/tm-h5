import request from '../request'
import { urls } from '../urls'

export function getJourneyHelperProjectShowPage (params) { // 社区项目分页
  return request({
    url: urls.getJourneyHelperProjectShowPage,
    needlessToken: true,
    data: {
      ...params
    }
  })
}

export function findCommunityOrganizationTree (params) { // 获取街道社区组织树
  return request({
    url: urls.findCommunityOrganizationTree,
    needlessToken: true,
    data: {
      ...params
    }
  })
}