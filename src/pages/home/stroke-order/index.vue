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
      <div class="map">
        <Map :mapInitObj="mapInitObj"
             mapClass="mapH400"
             :points="points"></Map>
      </div>
      <div class="pt20 pb20 ft26 color-666">石门老街 - 新四军历史纪念馆 - 攀岩小镇 - 党史学习体验</div>
    </div>
    <u-form :model="form.data"
            class="bg-white">
      <div class="pl30 pr30">
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
      </div>
      <div class="line-bold"></div>
      <div class="pl30 pr30">
        <u-form-item label="名称"
                     label-width="144">
          <u-input v-model="form.data.name"
                   placeholder="命名你的行程，如临安红色一日游" />
        </u-form-item>
        <u-form-item label="组织员"
                     label-width="144">
          <u-input v-model="form.data.organizer"
                   placeholder="输入组织员姓名" />
        </u-form-item>
        <u-form-item label="手机号"
                     label-width="144">
          <u-input v-model="form.data.contactDetails"
                   type="number"
                   placeholder="输入组织员手机号" />
        </u-form-item>
        <u-form-item label="集合地点"
                     label-width="144">
          <u-input v-model="form.data.meetingPlace"
                   class="flex1"
                   :disabled="true"
                   placeholder="输入集合地点" />
          <svg-icon icon="icon_dingwei"
                    class="ft30 ml16"
                    style="color: #518CFC"></svg-icon>
        </u-form-item>
        <u-form-item label="出发日期"
                     label-width="144">
          <div class="center-align flex1"
               @click="onShowDateSelect">
            <u-input v-model="form.data.setOutTime"
                     class="flex1"
                     :disabled="true"
                     @click="onShowDateSelect"
                     placeholder="选择时间" />
            <svg-icon icon="icon_riqi"
                      class="ft30 ml16"
                      style="color: #878787"></svg-icon>
          </div>
        </u-form-item>
        <u-form-item label="交通方式"
                     label-width="144">
          <my-radio-box :options="transportationOptions"
                        :value.sync="form.data.transportation"></my-radio-box>
        </u-form-item>
        <u-form-item label="温馨提示"
                     label-width="144">
          <u-input v-model="form.data.tip"
                   placeholder="输入其他注意事项（选填）" />
        </u-form-item>
      </div>
    </u-form>
    <u-select v-model="showDateSelect"
              mode="mutil-column-auto"
              :list="dateTimeOptions"
              :default-value="defaultValueOfDate"
              @confirm="confirmDateSelect"></u-select>
    <div class="footer pl30 pr30 center-align">
      <div class="confirm-btn ft32 tc"
           @click="onConfirm">确定</div>
    </div>
  </div>
</template>
<script>
import { playTimeOptions, activityTypeOptions, needLifeDocumentaryOptions, transportationOptions } from '@/utils/enum'
import MyRadio from './components/MyRadio'
import MyRadioBox from './components/MyRadioBox.vue'
import Map from '@/pages/components/Map.vue'
import { dateTimeOptions } from '@/utils/tools.js'
export default {
  methods: {
    onShowRouteSelect () {

    },
    onShowDateSelect () {
      this.showDateSelect = true
    },
    confirmDateSelect (params) {
      const Y = params[0].value
      const M = this.makeUpZero(params[1].value)
      const D = this.makeUpZero(params[2].value)
      const h = this.makeUpZero(params[3].value)
      const m = this.makeUpZero(params[4].value)
      this.form.data.setOutTime = `${Y}-${M}-${D} ${h}:${m}`
      this.setDefaultValueOfDate(params)
    },
    setDefaultValueOfDate (list) {
      const dateTimeOptions = this.dateTimeOptions
      const differentIndex = [1, 2] // 月，日value是从1开始的
      this.defaultValueOfDate = list.map(({ value }, index) => {
        if (index === 0) {
          for (let i = 0; i < dateTimeOptions.length; i++) {
            if (value === dateTimeOptions[i].value) {
              return i
            }
          }
        }
        if (differentIndex.includes(index)) {
          return value - 1
        }
        return value
      })
    },
    onConfirm () {
      // const params = {}
      // this.$api.createJourneyItinerary(params).then(res => {
      //   if (res.isError) return this.$msg(res.message)
      // })
    },
    makeUpZero (num) {
      if (+num < 10) {
        return '0' + num
      }
      return num
    }
  },
  components: { Map },
  data () {
    return {
      showDateSelect: false,
      form: {
        data: {
          name: '',
          playTime: '01',
          activityType: '01',
          needLifeDocumentary: true,
          organizer: '',
          contactDetails: '',
          meetingPlace: '',
          setOutTime: '',
          transportation: '01',
          tip: '',
        },
        rules: {}
      },
      defaultValueOfDate: [],
      playTimeOptions,
      activityTypeOptions,
      needLifeDocumentaryOptions,
      transportationOptions,
      dateTimeOptions: dateTimeOptions(),
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
  created () {
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
  padding-bottom: 152rpx;
  .map {
    width: 689rpx;
    height: 300rpx;
    border-radius: 4rpx;
    overflow: hidden;
  }
  .line-bold {
    width: 100%;
    height: 20rpx;
    background: #f7f7f7;
  }
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
  .footer {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    background: #fff;
    height: 120rpx;
    z-index: 2;
    .confirm-btn {
      width: 100%;
      height: 88rpx;
      line-height: 88rpx;
      background: #e32417;
      border-radius: 44rpx;
      color: #fff;
    }
  }
  /deep/.u-form-item--left {
    align-items: flex-start;
  }
}
</style>