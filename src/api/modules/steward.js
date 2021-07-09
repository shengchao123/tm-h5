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

export function getJourneyCoConstructionUnitTablePage (params) { // 共建单位联系表
  return request({
    url: urls.getJourneyCoConstructionUnitTablePage,
    needlessToken: true,
    data: {
      ...params
    }
  })
}
export function getUnitListByCommunity (params) { // 根据社区id获取单位列表
  return request({
    url: urls.getUnitListByCommunity,
    needlessToken: true,
    data: {
      ...params
    }
  })
}
export function findUnitOrganizationList (params) { // 获取共建单位组织列表
  return request({
    url: urls.findUnitOrganizationList,
    needlessToken: true,
    data: {
      ...params
    }
  })
}