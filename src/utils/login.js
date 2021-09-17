import store from '@/store'
import { api } from '@/api/index.js'

// 保存登录信息
const needSaveKeys = ['avatar', 'memberId', 'phone', 'token', 'nick', 'status', 'isTalents', 'isAuthCommunity']
export const saveLoginInfo = function (res) {
  needSaveKeys.forEach(key => {
    if (res[key]) uni.setStorageSync(key, String(res[key]))
  })
}

export const goLogin = function () {
  uni.navigateTo({ url: '/pages/public/Login' })
}

export const notMember = function () {
  const status = +uni.getStorageSync('status')
  if (!status || status === 1 || status === 2) {
    return true
  }
  return false
}

// 基层治理需要社区认证
export const isAuthCommunity = !!uni.getStorageSync('isAuthCommunity')

export const slzxNavigateBack = function () {
  const pages = getCurrentPages()
  if (pages.length >= 2) {
    uni.navigateBack()
  } else {
    uni.switchTab({ url: '/pages/home/index/index' })
  }
}


export const thirdLogin = function ({ accessToken, masterOrgId }) {
  if (!accessToken) return
  api.getCityCenterUserInfo({ accessToken: accessToken }).then(res => {
    uni.setStorageSync('isThird', true)
    uni.setStorageSync('masterOrgId', masterOrgId)
    uni.setStorageSync('thirdUserId', res.content.thirdUserId)
    uni.navigateTo({ url: '/pages/public/Login' })
  })
}
