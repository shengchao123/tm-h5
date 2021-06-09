import store from '@/store'
import { api } from '@/api/index.js'

// 保存登录信息
const needSaveKeys = ['avatar', 'memberId', 'phone', 'token', 'nick', 'status']
export const saveLoginInfo = function (res) {
  needSaveKeys.forEach(key => {
    if (res[key]) uni.setStorageSync(key, String(res[key]) || '')
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

export const slzxNavigateBack = function () {
  const pages = getCurrentPages()
  if (pages.length >= 2) {
    uni.navigateBack()
  } else {
    uni.switchTab({ url: '/pages/home/index/index' })
  }
}