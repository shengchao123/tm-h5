<template>
  <div class='stroke-order-wrap'>
    <div class="head-map-from mt20 pl30 pr30">
      <div class="route-select between-row center-align"
           @click="onShowRouteSelect">
        <div class="flex1 center-align">
          <div class="ft30 mr24 medium">行程路线</div>
          <div class="flex1 color-666 ellipsis-text"
               style="width: 480rpx">“龙门秘境”乡村振兴之振兴之</div>
        </div>
        <svg-icon icon="icon_xiangyoujiantou"
                  class="ft20 ml16"
                  style="color:  #C4C4C4"></svg-icon>
      </div>
      <div style="width: 689rpx; height: 300rpx; background: red">地图组件</div>
      <div class="pt20 pb20 ft26 color-666">石门老街 - 新四军历史纪念馆 - 攀岩小镇 - 党史学习体验</div>
      <div class="tb pt30 pb30 center-align">
        <div class="ft30 mr24">预估时长</div>
        <div class="flex1">

        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    onShowRouteSelect () {

    }
  },
  data () {
    return {

    }
  }
}
</script>
<style>
page {
  height: 100%;
  background: #f7f7f5;
}
</style>
<style lang='scss' scoped>
.stroke-order-wrap {
  color: #333;
  .head-map-from {
    background: #fff;
    .route-select {
      height: 74rpx;
    }
  }
  .ellipsis-text {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
}
</style>