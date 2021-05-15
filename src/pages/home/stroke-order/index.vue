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

      <Map :points="points"></Map>

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
import Map from '@/pages/home/stroke-order/components/Map'
export default {
  methods: {
    onShowRouteSelect () {

    }
  },
  components: { Map },
  data () {
    return {
      points: [
        {
          code: '',
          journeyPointId: 0,
          lat: 30.224302,
          lng: 119.005056,
          name: '第一个',
          regionsCode: '',
          regionsName: '临安区喜欢睡了看都就方老师',
          type: '01',
          typeName: '景区',
          url: 'http://downsc.chinaz.net/Files/DownLoad/sound1/201906/11582.mp3'
        },
        {
          code: '',
          journeyPointId: 0,
          lat: 30.124302,
          lng: 119.165056,
          name: '第2个',
          regionsCode: '',
          regionsName: '',
          type: '',
          typeName: '',
          url: 'http://downsc.chinaz.net/Files/DownLoad/sound1/201906/11582.mp3'
        },
        {
          code: '',
          journeyPointId: 0,
          lat: 30.224302,
          lng: 119.365056,
          name: '第3个',
          regionsCode: '',
          regionsName: '',
          type: '',
          typeName: '',
          url: 'http://downsc.chinaz.net/Files/DownLoad/sound1/201906/11582.mp3'
        },
        {
          code: '',
          journeyPointId: 0,
          lat: 30.274302,
          lng: 119.765056,
          name: '第4个',
          regionsCode: '',
          regionsName: '',
          type: '',
          typeName: '',
          url: 'http://downsc.chinaz.net/Files/DownLoad/sound1/201906/11582.mp3'
        }
      ]
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