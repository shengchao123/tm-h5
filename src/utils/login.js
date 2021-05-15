import store from '@/store'
import { api } from '@/api/index.js'


export const memberLogin = (e, needBindInfo = false) => {

  const { encryptedData, iv } = e
  if (!encryptedData) return
  const params = {
    encryptedData
  }
  if (iv) params.iv = iv
  api.getMinDecryptionData(params).then(res => {
    if (res.isError) return
    let content = JSON.parse(res.content)
    // 绑定会员手机号
    const params = {
      phone: content.phoneNumber,
    }
    api.bindPhone(params).then(res => {
      if (res.memberId) uni.setStorageSync('memberId', res.memberId)
      if (needBindInfo) {
        uni.navigateTo({
          url: "/pages/public/bind-info/BindInfo"
        })
        return
      }
      uni.$emit('memberLogin')
    })
  })
}

export const notMember = () => {
  const res = uni.getStorageSync('memberId')
  return !res || res === '0'
}


export const login = () => {
  return new Promise((resolve, reject) => {
    if (uni.getStorageSync('access_token')) {
      resolve()
      return
    }
    uni.login({
      success: (res) => {
        api.getThirdUserIdByMiniProgram({ code: res.code }).then(res => {
          getThirdUserIdAndOpenId(res, resolve, reject)
        })
      },
      fail: (error) => {
        login(resolve, reject)
      }
    })
  })
}


// 小程序登录，没有信息
function getThirdUserIdAndOpenId (res, resolve, reject) {
  const { masterOrgId, thirdUserId, openId, appletType, orgId } = res.content
  uni.setStorageSync('masterOrgId', masterOrgId)
  uni.setStorageSync('memberLevelOrgId', orgId)
  uni.setStorageSync('thirdUserId', thirdUserId)
  uni.setStorageSync('openId', openId)
  // 01 定制小程序，02 全局小程序
  if (appletType === '01') {
    if (!uni.getStorageSync('fromChangeStore')) {
      uni.setStorageSync('orgId', orgId)
      uni.setStorageSync('memberLevelOrgId', orgId)
    }
    uni.removeStorageSync('fromChangeStore')

    getUserInfo(resolve, reject)
    return
  }
  getLocation(resolve, reject)
}


// 登录获取所有信息
function getUserInfo (resolve, reject) {
  api.login().then(res => {
    if (res.isError) {
      getUserInfo()
      return
    }
    // 保存登录后的信息
    saveLoginInfo(res.content)
    resolve(res.content)
  })
}

// 获取定位信息
function getLocation (resolve, reject) {
  uni.getLocation({
    type: 'wgs84',
    success: function (res) {
      findOrgInfoByOrgId(resolve, reject)
    }
  })
}
function findOrgInfoByOrgId (resolve, reject) {
  const { longitude, latitude } = store.state.app.coordinate
  const params = {
    longitude,
    latitude,
    appid: getAppid()
  }
  api.findOrgInfoByOrgId(params).then(res => {
    if (res.isError) return
    uni.setStorageSync('orgId', res.content.orgId)
    store.commit('home/COMMIT_STORE', res.content)
    getUserInfo(resolve, reject)
  })
}


// 保存登录信息
const needSaveKeys = ['memberId', 'access_token', 'masterOrgId']
export const saveLoginInfo = function (res) {
  needSaveKeys.forEach(key => {
    uni.setStorageSync(key, res[key] || '')
  })
}


