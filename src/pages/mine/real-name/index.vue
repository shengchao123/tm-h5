<template>
  <view class="tb">
    <view class="bg-white pl30 pr30">
      <view class="bb h100 between-row center-align">
        <text class="ft30 bold mr32">姓名</text>
        <u-input
          v-model="form.name"
          :clearable="false"
          placeholder="输入姓名"
          input-align="right"
          placeholder-style="color:#999"
          :custom-style="inputCustomStyle" />
      </view>
      <view class="h100 between-row center-align">
        <text class="ft30 bold mr32">组织</text>
        <view class="ft30 center-align" :class="form.orgId ? 'color-333':'color-999'">
          <view class="mr8">{{orgNameText}}</view>
          <svg-icon icon="icon_xiangyoujiantou"
                  class="ft20 color-999 mt4"></svg-icon>
        </view>
      </view>
    </view>

    <view class="pl30 pr30 mt24">
      <view class="center-align">
        <view @click="form.check = !form.check">
          <svg-icon :icon="form.check ? 'icon_gouxuan':'icon_weixuanzhong'"
                    class="ft32" :class="form.check ? 'color-e32417':'color-ae'"></svg-icon>
        </view>
        <text class="color-999 ml8 ft26">勾选表示同意</text>
        <text style="color:#518CFC" class="ft26">《天目红盟论坛发表协议》</text>
      </view>
      <u-button @click="onConfirm"
                :custom-style="btnStyle" 
                :disabled="btnDisabled">确定</u-button>

    </view>

  </view>
</template>

<script>
export default {
  name: 'index',
  methods: {
    onConfirm() {
      
    }
  },
  data () {
    return {
      form:{
        name:'',
        orgId:'',
        check:false
      },
      orgName:'',
      btnDisabled:true
    }
  },
  computed: {
    inputCustomStyle(){
      const temStyle={
        fontSize: this.$calcRpx2px('30rpx'),
        color:'#333',
      }
      return temStyle
    },
    orgNameText(){
      return this.form.orgId ? orgName : '选择所属组织'
    },
    btnStyle () { // 自定义按钮样式
      const btnBgColor = this.btnDisabled ? '#ccc' : primaryColor
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
page{
  background: #f7f7f7;
}
.h100{
  height: 100rpx;
  line-height: 100rpx;
}
.color-ae{
  color:#aeaeae
}
.color-e32417{
  color:#E32417
}

</style>
