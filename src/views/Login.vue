<template>
  <div></div>
</template>
<script>
export default {
  methods: {
    // ------------------------ H5登录相关
    h5Login (option) {
      // 微信授权登录
      if (option.code) {
        // const temState = decodeURIComponent(option.state)
        // const state = JSON.parse(temState)
        this.getLoginParams(option)
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
    getLoginParams (option) {
      const params = {
        code: option.code,
        appid: option.appid
      }
      this.$api.getUserInfo(params).then(res => {
        if (res.isError) return
        const { openId, thirdUserId } = res.content
        localStorage.setItem('openId', openId)
        localStorage.setItem('thirdUserId', thirdUserId)
        this.getUserInfo()
      })
    },

    // ---------------------------- 统一处理
    getUserInfo () {
      this.$api.login().then(res => {
        if (res.isError) return
        // 保存登录后的信息
      })
    }
  },
  onLoad (option) {
    // #ifdef H5
    this.h5Login(option)
    // #endif
  }
}
</script>

<style></style>
