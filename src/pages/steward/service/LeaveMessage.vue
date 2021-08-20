<template>
  <div class='message-wrap'>
    <div class="content relative">
      <div>
        <textarea placeholder="请输入您的留言，留言回复后可以在“我的-服务记录”中查看"
                  v-model="form.content"
                  placeholder-style="color:#999"
                  maxlength="500"
                  class="text-area ft28">
            </textarea>
      </div>
      <div class="tr ft24 color-999 mt16">{{form.content.length || 0}}/500</div>
    </div>
    <u-button @click="onConfirm"
              class="ml32 mr32"
              :custom-style="btnStyle"
              :disabled="!form.content">确定</u-button>
  </div>
</template>

<script>
export default {
  name: 'LeaveMessage',
  methods: {
    onConfirm () {
      const params = {
        ...this.form
      }
      this.$api.leaveMessage(params).then(res => {
        if (res.isError) return this.$message.error(res.message)
        this.$message('提交成功')
        setTimeout(() => {
          uni.navigateBack({ delta: 1 })
        }, 1000);
      })
    }
  },
  data () {
    return {
      form: {
        content: ''
      }
    }
  },
  onLoad ({ communityOrgId }) {
    this.form.communityOrgId = communityOrgId
  },
  computed: {
    btnStyle () { // 自定义按钮样式
      const btnBgColor = !this.form.content ? '#ccc' : '#E32417'
      const temStyle = {
        fontSize: '32rpx',
        color: '#fff',
        height: '98rpx',
        borderRadius: '54rpx',
        fontWeight: 'bold',
        background: btnBgColor,
        marginTop: '66rpx'
      }
      return temStyle
    },
  }
}
</script>

<style lang='scss' scoped>
page {
  background: #f7f7f7;
}
.content {
  padding: 32rpx;
  background: #fff;
  .text-area {
    width: 100%;
  }
}
</style>
