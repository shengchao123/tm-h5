import store from '@/store'
import { api } from '@/api/index.js'

// 保存登录信息
const needSaveKeys = ['avatar', 'memberId', 'phone', 'token', 'nick']
export const saveLoginInfo = function (res) {
  needSaveKeys.forEach(key => {
    uni.setStorageSync(key, res[key] || '')
  })
}


