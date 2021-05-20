
<template>
  <div class='login-wrap'>

  </div>
</template>

<script>
import { saveLoginInfo } from '@/utils/login'

export default {
  name: 'Login',
  methods: {
    h5Login (option) {
      // 本地登录可以直接调用登录
      if (uni.getStorageSync('env') === 'test') {
        this.getMemberLoginInfo()
        return
      }
      // 微信授权登录
      if (option.code) {
        // let temState = decodeURIComponent(option.state)
        // let state = JSON.parse(temState)
        // uni.setStorageSync('orgId', state.orgId)
        // uni.setStorageSync('masterOrgId', state.masterOrgId)
        // uni.setStorageSync('memberLevelOrgId', state.orgId)
        this.getUserInfoAndToken(option)
      } else {
        this.redirectToOAuth()
      }
    },
    // 第一步：获取微信授权地址
    redirectToOAuth () {
      this.$api.redirectToOAuth().then(res => {
        if (res.isError) return
        location.replace(res.content.redirectUrl)
      })
    },
    // 第二步：使用微信返回 code 换取登录所需信息
    getUserInfoAndToken (option) {
      let params = {
        code: option.code,
        appid: option.appid
      }
      this.$api.getUserInfo(params).then(res => {
        if (res.isError) return
        const { openId, thirdUserId } = res.content
        uni.setStorageSync('openId', openId)
        uni.setStorageSync('thirdUserId', thirdUserId)
      })
    },

    // 第三部获取用户信息
    getMemberLoginInfo () {
      this.$api.getMemberLoginInfo().then(res => {
        if (res.isError) return
        saveLoginInfo(res.content)
      })
    }
  },
  onLoad (option) {
    this.h5Login(option)
  },
}
</script>

<style lang='scss' scoped>
.login-wrap {
}
</style>
