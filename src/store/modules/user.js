import { api } from '@/api/index.js'
const state = {
  memberPersonalInfo: {}
}

const mutations = {
  SET_MEMBER_PERSONAL_INFO: (state, params) => {
    state.memberPersonalInfo = params
    uni.setStorageSync('memberInfo', params)
  },
}

const actions = {
  /// 获取会员个人信息
  setMemberPersonalInfo ({ commit }) {
    api.getMemberPersonalInfo().then(res => {
      if (res.isError) return
      commit('SET_MEMBER_PERSONAL_INFO', res.content)
    })
  },
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
