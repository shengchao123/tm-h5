import request from '../index'

export function findUserInfoById (params) { // 获取用户信息
  return request({
    url: '/user/user/findUserInfoById',
    method: 'post',
    data: params
  })
}
