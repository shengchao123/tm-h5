<template>
  <view class="mt20 bg-white pl30 pr30">
    <view class="between-row center-align">
      <text class="ft32 bold color-333">线路打卡</text>
      <text class="ft28 color-518cfc">{{设为隐藏}}</text>
    </view>
  </view>
</template>

<script>
export default {
  name: 'LineClock',
  data () {
    return {

    }
  },
  props: {
    isShowSignIn: Boolean
  }
}
</script>

<style lang='scss' scoped>
.color-518cfc {
  color: #518cfc;
}
</style>
