<template>
  <div></div>
</template>
<script>
export default {
  methods: {
    // ------------------------ H5登录相关
    h5Login () {
      // 微信授权登录
      if (this.$route.query.code) {
        this.getLoginParams()
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
    getLoginParams () {
      const { code, appid } = this.$route.query
      const params = {
        code,
        appid
      }
      this.$api.getUserInfo(params).then(res => {
        if (res.isError) return
        const { openId, thirdUserId, authToken } = res.content
        localStorage.setItem('openId', openId)
        localStorage.setItem('authToken', authToken)
        localStorage.setItem('thirdUserId', thirdUserId)
      })
    }
  },
  created () {
    // #ifdef H5
    this.h5Login()
    // #endif
  }
}
</script>

<style></style>
