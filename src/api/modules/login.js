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

export function getMinDecryptionData (params) { // 获取授权 url
  return request({
    url: urls.getMinDecryptionData,
    needlessToken: true,
    data: {
      ...params,
      thirdUserId: uni.getStorageSync('thirdUserId'),
      sourceType,
    }
  })
}

export function redirectToOAuth (params) { // 获取授权 url
  return request({
    url: urls.redirectToOAuth,
    needlessToken: true,
    data: {
      orgId: uni.getStorageSync('orgId'),
      scope: 'snsapi_userinfo'
    }
  })
}

export function getUserInfo (params) { // 获取第三方用户 id
  return request({
    url: urls.getUserInfo,
    needlessToken: true,
    data: {
      orgId: uni.getStorageSync('orgId'),
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
      'loginName': uni.getStorageSync('thirdUserId'),
      'orgId': uni.getStorageSync('orgId'),
      'grant_type': 'password',
      'appid': 'mobileWCOA',
    }
  })
}

export function bindPhone (params) { // 绑定手机号
  return request({
    url: urls.bindPhone,
    data: {
      ...params,
      orgId: uni.getStorageSync('orgId')
    }
  })
}

