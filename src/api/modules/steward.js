import request from '../request'
import { urls } from '../urls'
export function findJourneyGoodCommunityPartyList (params) { // 社区项目分页
  return request({
    url: urls.findJourneyGoodCommunityPartyList,
    needlessToken: true,
    data: {
      ...params
    }
  })
}
export function findJourneyCommunityPartyContactByPartyId (params) { // 社区项目分页
  return request({
    url: urls.findJourneyCommunityPartyContactByPartyId,
    needlessToken: true,
    data: {
      ...params
    }
  })
}
export function findJourneyCommunityPartyListByCommunityOrgId (params) { // 社区项目分页
  return request({
    url: urls.findJourneyCommunityPartyListByCommunityOrgId,
    needlessToken: true,
    data: {
      ...params
    }
  })
}

export function communityCertification (params) { // 社区项目分页
  return request({
    url: urls.communityCertification,
    data: {
      ...params
    }
  })
}

export function getJourneyHelperProjectShowPage (params) { // 社区项目分页
  return request({
    url: urls.getJourneyHelperProjectShowPage,
    needlessToken: true,
    data: {
      ...params
    }
  })
}

export function getJourneyHelperProjectCount (params) { // 社区项目数量
  return request({
    url: urls.getJourneyHelperProjectCount,
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

export function getJourneyHelperProjectDetail (params) { // 社区项目详情
  return request({
    url: urls.getJourneyHelperProjectDetail,
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

export function createJourneyHelperProjectSchedule (params) { // 新增社区项目进度
  return request({
    url: urls.createJourneyHelperProjectSchedule,
    data: {
      ...params
    }
  })
}

export function modifyJourneyHelperProjectSchedule (params) { // 修改社区项目进度
  return request({
    url: urls.modifyJourneyHelperProjectSchedule,
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
export function leadJourneyHelperProjectSchedule (params) { // 认领社区项目
  return request({
    url: urls.leadJourneyHelperProjectSchedule,
    data: {
      ...params
    }
  })
}