<template>
  <div class='point-guide-item-wrap'>
    <div class="bb center-align between-row"
         style="height: 76px;">
      <div class="flex1"
           @click="onPoi">
        <div :class="main ? 'bold ft30' : 'ft26'">{{info.item.name}}</div>
        <div class="ft24 color-666"
             :class="info.item.address && 'mt8'">{{info.item.address}}</div>
      </div>

      <div class="btn center"
           @click="onGuide">
        <SvgIcon icon="icon_daohang"
                 style="color:#518CFC "
                 class="ft20"></SvgIcon>
        <span class="ft26 ml8 color-666">导航</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PointGuideItem',
  methods: {
    onPoi () {
      this.$emit('onPoi', this.info)
    },
    onGuide () {
      this.$emit('onGuide', this.info)
    }
  },
  props: {
    info: Object,
    main: [Boolean, String]
  }
}
</script>

<style lang='scss' scoped>
.point-guide-item-wrap {
  padding: 0 16px;

  .btn {
    height: 56rpx;
    width: 120rpx;
    border: 1px solid #dcdcdc;
    border-radius: 28rpx;
  }
}
</style>
