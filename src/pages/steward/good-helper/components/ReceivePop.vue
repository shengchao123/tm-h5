<template>
  <u-popup v-model="isShow"
           class="contact-dialog tc"
           mode="center"
           border-radius="24"
           width="540"
           :mask-close-able="false">
    <view class="pl32 pr32">
    </view>
  </u-popup>
</template>
<script>
export default {
  name: 'ReceivePop',
  methods: {
    // 打电话
    show () {
      this.isShow = true
    },
    hide () {
      this.isShow = false
    },
  },
  data () {
    return {
      isShow: false,
    }
  },
  props: {
    itemConfig: Object,
    showContact: {
      type: Boolean,
      default: () => {
        return false
      }
    }
  },
  created () { },
}
</script>
<style lang='scss' scoped>
.call-box {
}
</style>