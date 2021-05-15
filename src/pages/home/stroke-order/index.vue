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
      <Map :mapInitObj="mapInitObj"
           mapClass="mapH400"
           :points="points"></Map>
      <div class="pt20 pb20 ft26 color-666">石门老街 - 新四军历史纪念馆 - 攀岩小镇 - 党史学习体验</div>
      <u-form :model="form.data">
        <u-form-item label="预估时长"
                     label-width="144">
          <my-radio-box :options="playTimeOptions"
                        :value.sync="form.data.playTime"></my-radio-box>
        </u-form-item>
        <u-form-item label="活动类型"
                     label-width="144">
          <my-radio-box :options="activityTypeOptions"
                        :value.sync="form.data.activityType"></my-radio-box>
        </u-form-item>
        <u-form-item label="组织生活记录"
                     label-width="204">
          <my-radio-box :options="needLifeDocumentaryOptions"
                        :value.sync="form.data.needLifeDocumentary"></my-radio-box>
        </u-form-item>
      </u-form>
    </div>
  </div>
</template>
<script>
import { playTimeOptions, activityTypeOptions, needLifeDocumentaryOptions } from '@/utils/enum'
import MyRadio from './components/MyRadio'
import MyRadioBox from './components/MyRadioBox.vue'
import Map from '@/pages/components/Map.vue'
export default {
  methods: {
    onShowRouteSelect () {

    },
    onSelectPlayTime (id) {
      this.fromData.playTime = id
    }
  },
  components: { Map },
  data () {
    return {
      form: {
        data: {
          playTime: '01',
          activityType: '01',
          needLifeDocumentary: true
        },
        rules: {}
      },
      playTimeOptions,
      activityTypeOptions,
      needLifeDocumentaryOptions,
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
      ],
      mapInitObj: Object.freeze({
        resizeEnable: true,
        zoom: 9, // 级别
        center: [119.365056, 30.194302]
      })
    }
  },
  components: { MyRadio, MyRadioBox }
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