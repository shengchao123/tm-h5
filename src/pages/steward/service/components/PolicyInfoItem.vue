
<template>
  <view class="item-wrap bg-white pl30 pr30 pt24 pb32"
        @click="onPreview">
    <text class="ft34 medium color-333">{{item.name}}</text>
  </view>
</template>
<script>
export default {
  name: 'Item',
  methods: {
    // 跳转预览文件页面
    onPreview () {
      const fileType = this.item.url.substring(this.item.url.lastIndexOf('.') + 1)
      if (this.timeOutEvent === 0) {
        if (fileType === 'pdf') {
          uni.navigateTo({ url: `/pages/think-tank/countryside/attachmentPage?url=${this.item.url}&fileType=${fileType}` })
        } else {
          window.location.replace('https://view.officeapps.live.com/op/view.aspx?src=' + this.$fileHost + this.item.url)
        }
      }
    },
  },
  props: {
    item: Object
  },
  data () {
    return {}
  },
  created () { },
}
</script>
<style lang='scss' scoped>
.item-wrap {
  width: 100%;
  box-shadow: 3rpx 2rpx 12rpx 8rpx rgba(17, 17, 17, 0.03);
  border-radius: 8rpx;
  .time {
    margin-right: 56rpx;
  }
}
</style>