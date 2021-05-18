import request from '../request'
import { urls } from '../urls'
import { getAppid } from '@/utils/tools.js'

// 通过 code 获取顶级组织，三方用户 id
// /third/authorization/getThirdUserIdByMiniProgram

/* #ifdef MP-WEIXIN */
const sourceType = '01'
/* #endif */

/* #ifdef MP-ALIPAY */
const sourceType = '02'
/* #endif */

export function getThirdUserIdByMiniProgram (params) {
  return request({
    url: urls.getThirdUserIdByMiniProgram,
    needlessToken: true,
    data: {
      appId: getAppid(),
      sourceType,
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
      appId: getAppid(),
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

