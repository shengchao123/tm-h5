
export const fileHost = 'https://hzslzx.oss-cn-hangzhou.aliyuncs.com/' // 文件显示地址

export const urls = {
  redirectToOAuth: '/config/weChat/redirectToOAuth', // 获取授权 url
  getUserInfo: '/third/weChat/getUserInfo', // 获取三方用户信息
  getThirdUserIdByMiniProgram: '/third/authorization/getThirdUserIdByMiniProgram', // code 获取小程序三方 id
  login: '/auth/mobile/login', // 登录
  sendVerificationCode: '/crm/member/sendVerificationCode', // 发送验证码
  bindPhone: '/crm/member/bindPhone' // 发送验证码
}
