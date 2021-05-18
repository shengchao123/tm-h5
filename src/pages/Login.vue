<template>
  <div class='login-wrap relative'>
    <div class="skip-btn">跳过</div>

    <div class="content">
      <div class="box bb">
        <div>手机号</div>
        <u-input v-model="submitData.phone"
                 placeholder="请输入手机号"
                 maxlength="11"
                 :focus="true"
                 :trim="true"
                 type="number" />
      </div>

      <div class="box bb">
        <div>验证码</div>
        <u-input v-model="submitData.code"
                 placeholder="请输入验证码"
                 maxlength="4"
                 :focus="true"
                 :trim="true"
                 type="number" />

        <text class="primary-color"
              @click="onGetVerifyCode">{{codeText}}</text>
      </div>

      <div class="tc color-999">未注册的手机号验证后自动注册</div>

      <div class="login-btn">登录</div>

      <div class="center">
        <div>登录即同意</div>
        <div>《用户注册协议》</div>
      </div>

    </div>
  </div>
</template>

<script>
import { checkInput } from '@/utils/validate.js'

export default {
  name: 'Login',
  methods: {
    onGetVerifyCode () {
      if (this.timer) return
      if (!checkInput(this.submitData.phone, 'phone')) {
        this.$msg('请输入正确手机号')
        return
      }
      this.countdown()
      this.sendVerificationCode()
    },
    // 验证提交信息
    verifySubmitData () {
      if (!this.$checkInput(this.submitData.phone, 'phone')) {
        this.$msg('请输入正确手机号')
        return
      }
      if (this.$isEmpty(this.submitData.verifyCode)) {
        this.$msg('请输入验证码')
        return
      }
      this.bindPhone()
    },
    // 绑定会员手机号
    bindPhone () {
      const params = {
        phone: this.submitData.phone,
        verifyCode: this.submitData.verifyCode,
        luckyAttendId: uni.getStorageSync('luckyAttendId')
      }
      this.$api.bindPhone(params).then(res => {
        if (res.isError) {
          if (res.subCode === 'ERROR') return this.$msg('验证码不正确')
          return
        }

      })
    },
    // 发送验证码
    sendVerificationCode () {
      const params = {
        phone: this.submitData.phone
      }
      this.$api.sendVerificationCode(params)
    },
    // 倒计时
    countdown () {
      if (this.time === 0) return this.resetCoundown()
      this.timer = setTimeout(() => {
        this.time--
        this.codeText = `验证码(${this.time}s)`
        this.countdown()
      }, 1000)
    },
    // 重置定时器
    resetCoundown () {
      this.time = 60
      this.timer = null
      this.codeText = '获取验证码'
    }
  },
  data () {
    this.time = 60
    this.timer = null
    return {
      codeText: '获取验证码',
      submitData: {
        phone: '',
        code: ''
      }
    }
  }
}
</script>

<style lang='scss' scoped>
.login-wrap {
  padding-top: 200rpx;
  .skip-btn {
    position: absolute;
    right: 32rpx;
    top: 32rpx;
  }
  .content {
    padding: 0 32rpx;
    .box {
      padding: 16rpx;
    }
  }
}
</style>
