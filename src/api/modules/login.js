import request from '../request'
import { urls } from '../urls'

export function sendVerificationCode (params) {
  return request({
    url: urls.sendVerificationCode,
    needlessToken: true,
    data: {
      ...params
    }
  })
}


// 第一步：获取微信授权
export function redirectToOAuth (params) {
  return request({
    url: urls.redirectToOAuth,
    needlessToken: true,
    data: {
      scope: 'snsapi_userinfo'
    }
  })
}

// 第二步：接受微信公众号授权后的code获取thirdUserId及登陆
export function getUserInfoAndToken (params) {
  return request({
    url: urls.getUserInfoAndToken,
    needlessToken: true,
    data: {
      ...params
    }
  })
}


// 第三步：获取三方用户信息
export function getMemberLoginInfo () {
  return request({
    url: urls.getMemberLoginInfo,
    needlessToken: true,
    data: {
      thirdUserId: uni.getStorageSync('thirdUserId')
    }
  })
}


export function bindPhone (params) {
  return request({
    url: urls.bindPhone,
    data: {
      ...params
    }
  })
}

