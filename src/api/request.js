import store from '@/store'
import { getFullUrl } from '@/utils/tools.js'
const loginErrorSubCode = ['TOKEN_EXPIRED', 'TOKEN_NULL', 'SESSION_KEY_FAIL']
// 报错锁
export default function (obj) {
  return new Promise((resolve, reject) => {
    // 无效请求
    if (!obj.url) return reject('无效请求，没有 url')
    // 没有 token，并且不在白名单，不允许请求
    if (!uni.getStorageSync('access_token') && !obj.needlessToken) return

    let headers = {
      'authToken': uni.getStorageSync('access_token') || '',
      'masterOrgId': uni.getStorageSync('masterOrgId') || '',
      'memberId': uni.getStorageSync('memberId') || '',
    }
    if (obj.formData) {
      headers['Content-type'] = "application/x-www-form-urlencoded"
    }
    // 发起请求
    uni.request({
      url: getFullUrl(obj.url),
      data: obj.data,
      method: obj.method || 'POST',
      header: headers,
      success: (response) => {
        if (obj.method === 'GET') {
          resolve(response.data)
          return
        }

        const res = response.data
        if (res.code === 40004 && loginErrorSubCode.includes(res.subCode)) {
          const page = getCurrentPages()[0]
          uni.removeStorageSync('access_token')
          // login()
          return
        }

        if (res.code === 10000) {
          resolve(res)
        } else {
          resolve({
            isError: true,
            message: res.message,
            subCode: res.subCode
          })
        }
      },
      fail: (e) => {
        if (e.data && loginErrorSubCode.includes(e.data.subCode)) {
          uni.removeStorageSync('access_token')
          // login()
          return
        }
        console.log(" fail:" + JSON.stringify(e.data));
      },
      complete: () => { }
    })
  })
}
