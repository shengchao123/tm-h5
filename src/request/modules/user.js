import request from '../index'
import { urls } from '../urls'

export function redirectToOAuth (params) { // 获取授权 url
  return request({
    url: urls.redirectToOAuth,
    needlessToken: true,
    data: {
      orgId: localStorage.getItem('orgId'),
      scope: 'snsapi_userinfo'
    }
  })
}
export function getUserInfo (params) { // 获取第三方用户 id
  return request({
    url: urls.getUserInfo,
    needlessToken: true,
    data: {
      orgId: localStorage.getItem('orgId'),
      ...params
    }
  })
}

export function login () { // 获取 token
  return request({
    url: urls.login,
    needlessToken: true,
    formData: true,
    data: {
      loginName: localStorage.getItem('thirdUserId'),
      orgId: localStorage.getItem('orgId'),
      grant_type: 'password',
      appid: 'mobileWCOA'
    }
  })
}

export function findUserInfoById (params) { // 获取用户信息
  return request({
    url: '/user/user/findUserInfoById',
    method: 'post',
    data: params
  })
}
