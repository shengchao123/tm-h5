<template>
  <view class="message-wrap">
    <view class="bg-white relative">
      <textarea focus
                v-model="content"
                class="input pt30"
                placeholder="请输入您的问题，专家收到后会及时回复，请到“我的-服务记录”中查看"
                :maxlength="500"
                @input="changeInput" />
      <text class="number ft24 color-999">{{content.split('').length}}/500</text>
    </view>
    <view class="btn pl30 pr30 white-color"
          @click="onMessage">
      <text class="btn-text center"
            :style="{background: $isEmpty(content) ? '#ccc' : '#E32417'}">确定</text>
    </view>
  </view>
</template>
<script>
export default {
  name: 'Message',
  methods: {
    onMessage () {
      const { id, content } = this
      const params = {
        id,
        content
      }
      this.$api.leaveMessage(params).then(res => {
        if (res.isError) {
          this.$msg(res.message)
          return
        }
        this.$msg('留言发送成功')
        setTimeout(() => {
          uni.redirectTo({
            url: `/pages/think-tank/index/index?current=1`
          })
        }, 1000)
      })
    },
    changeInput (e) {
      this.content = e.detail.value
    }
  },
  data () {
    return {
      content: '',
      id: ''
    }
  },
  onLoad ({ id }) {
    this.id = id
  }
}
</script>
<style>
page {
  background: #f7f7f7;
}
</style>
<style lang='scss' scoped>
.message-wrap {
  .input {
    width: 100%;
    height: 476rpx;
    padding-left: 24rpx;
    padding-right: 44rpx;
    padding-bottom: 60rpx;
  }
  .number {
    position: absolute;
    bottom: 30rpx;
    right: 30rpx;
    line-height: 1;
  }
  .btn {
    width: 100%;
    height: 98rpx;
    margin-top: 64rpx;
    .btn-text {
      width: 100%;
      height: 100%;
      border-radius: 49rpx;
    }
  }
}
</style>