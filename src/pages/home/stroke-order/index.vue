<template>
  <div class='stroke-order-wrap'>
    <head-map :journeyLineId.sync="form.data.journeyLineId"
              :journeyLineName="journeyLineName"
              :journeyPointList="journeyPointList"></head-map>
    <u-form ref="form"
            :model="form.data"
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
                     label-width="204"
                     :border-bottom="false">
          <my-radio-box :options="needLifeDocumentaryOptions"
                        :value.sync="form.data.needLifeDocumentary"></my-radio-box>
        </u-form-item>
      </div>
      <div class="line-bold"></div>
      <div class="pl30 pr30">
        <u-form-item label="名称"
                     label-width="144"
                     prop="name">
          <u-input v-model="form.data.name"
                   maxlength="15"
                   placeholder="命名你的行程，如临安红色一日游" />
          <input-length-word :modelData="form.data.name"
                             maxLength="15"></input-length-word>
        </u-form-item>
        <u-form-item label="组织员"
                     label-width="144"
                     prop="organizer">
          <u-input v-model="form.data.organizer"
                   maxlength="10"
                   placeholder="输入组织员姓名" />
          <input-length-word :modelData="form.data.organizer"
                             maxLength="10"></input-length-word>
        </u-form-item>
        <u-form-item label="手机号"
                     label-width="144"
                     prop="contactDetails">
          <u-input v-model="form.data.contactDetails"
                   type="number"
                   placeholder="输入组织员手机号" />
        </u-form-item>
        <u-form-item label="集合地点"
                     label-width="144"
                     prop="meetingPlace">
          <div class="center-align flex1"
               @click="onVenueMap">
            <span class="flex1"
                  :class="form.data.meetingPlace ? 'color-333' : 'color-placeholder'">{{meetingPlaceText}}</span>
            <input-length-word :modelData="form.data.meetingPlace"
                               maxLength="30"></input-length-word>
            <svg-icon icon="icon_dingwei"
                      class="ft30 ml16"
                      style="color: #518CFC"></svg-icon>
          </div>
        </u-form-item>
        <u-form-item label="出发日期"
                     label-width="144"
                     prop="setOutTime">
          <div class="center-align flex1"
               @click="onShowDateSelect">
            <span class="flex1"
                  :class="form.data.setOutTime ? 'color-333' : 'color-placeholder'">{{setOutTimeText}}</span>
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
                     label-width="144"
                     :border-bottom="false">
          <u-input v-model="form.data.precautions"
                   placeholder="输入其他注意事项（选填）" />
        </u-form-item>
      </div>
    </u-form>
    <div class="footer pl30 pr30 center-align">
      <div class="confirm-btn ft32 tc"
           @click="onConfirm">确定</div>
    </div>
    <u-picker v-model="showDateSelect"
              mode="time"
              title="日期"
              confirm-color="#E32417"
              :params="timePickerConfig.params"
              :start-year="timePickerConfig.startYear"
              :end-year="timePickerConfig.endYear"
              :default-time="timePickerConfig.defaultTime"
              @confirm="confirmDateSelect"></u-picker>
  </div>
</template>
<script>
import { playTimeOptions, activityTypeOptions, needLifeDocumentaryOptions, transportationOptions } from '@/utils/enum'
import MyRadio from './components/MyRadio'
import MyRadioBox from './components/MyRadioBox.vue'
import HeadMap from './components/HeadMap.vue'
import InputLengthWord from './components/InputLengthWord.vue'

export default {
  methods: {
    onShowDateSelect () {
      this.showDateSelect = true
    },
    // 选择集合点
    onVenueMap () {
      uni.navigateTo({
        url: '/pages/home/stroke-order/VenueMap'
      })
    },
    confirmDateSelect (params) {
      const { timestamp } = params
      const setOutTime = timestamp * 1000
      this.form.data.setOutTime = setOutTime
      this.setTimePickerDefaultValue(setOutTime)
    },
    onConfirm () {
      this.$refs.form.validate(valid => {
        if (valid) {
          this.createJourneyItinerary()
        } else {
          this.$msg('还有信息未填写')
        }
      })
      console.log(this.form.data)
    },
    createJourneyItinerary () {
      const {
        name, playTime, activityType,
        needLifeDocumentary, organizer, contactDetails,
        meetingPlace, meetingPlaceLat, meetingPlaceLng,
        setOutTime, transportation, journeyLineId,
        precautions
      } = this.form.data
      const params = {
        activityType,
        contactDetails,
        meetingPlace,
        meetingPlaceLat,
        meetingPlaceLng,
        name,
        needLifeDocumentary,
        organizer,
        playTime,
        precautions,
        setOutTime,
        transportation,
        type: journeyLineId ? '01' : '02' // 是否自定义路线
      }
      if (journeyLineId) {
        params.journeyLineId = journeyLineId
      } else {
        params.journeyPointIds = this.journeyPointList.map(el => el.id)
      }
      this.$api.createJourneyItinerary(params).then(res => {
        if (res.isError) return this.$msg(res.message)
        uni.redirectTo({
          url: `/pages/home/stroke-order/createSuccess?id=${res.content.id}`
        })
      })
    },
    getJourneyItineraryById (id) {
      const params = { id }
      this.$api.getJourneyItineraryById(params).then(res => {
        if (res.isError) return this.$msg(res.message)
        const {
          journeyLineName, journeyPointList, name, playTime, activityType,
          needLifeDocumentary, organizer, contactDetails,
          meetingPlace, meetingPlaceLat, meetingPlaceLng,
          setOutTime, transportation, journeyLineId, type,
          precautions,
        } = res.content
        this.journeyLineName = journeyLineName
        this.journeyPointList = journeyPointList
        this.form.data = { ...res.content }
        // {
        //   name,
        //   playTime,
        //   activityType,
        //   needLifeDocumentary,
        //   organizer,
        //   contactDetails,
        //   meetingPlace,
        //   meetingPlaceLat,
        //   meetingPlaceLng,
        //   setOutTime,
        //   transportation,
        //   precautions,
        //   journeyLineId,
        //   type,
        // }
        this.setTimePickerDefaultValue(setOutTime)
      })
    },
    // 编辑设置
    setEditConfig (id) {
      uni.setNavigationBarTitle({
        title: '编辑行程单'
      })
      this.getJourneyItineraryById(id)
    },
    setTimePickerDefaultValue (setOutTime) {
      this.timePickerConfig.defaultTime = this.$moment(setOutTime).format('YYYY-MM-DD HH:mm')
    },
    setTimePickeConfig () {
      const nowDate = new Date()
      const nowYear = nowDate.getFullYear()
      this.timePickerConfig = {
        ...this.timePickerConfig,
        startYear: nowYear,
        endYear: nowYear + 4,
      }
    },
    setEvent () {
      uni.$on('setJourneyPointListEvent', (list) => {
        this.journeyPointList = [...list]
      })
      uni.$on('setMeetingPlaceEvent', (data) => {
        const { meetingPlace, meetingPlaceLat, meetingPlaceLng } = data
        const formData = this.form.data
        this.form.data = {
          ...formData,
          meetingPlace,
          meetingPlaceLat,
          meetingPlaceLng
        }
      })
    },
    clearEvent () {
      uni.$off('setJourneyPointListEvent')
      uni.$off('setMeetingPlaceEvent')
    }
  },
  data () {
    const contactDetailsVal = (rule, value, callback) => {
      if (!value) return callback(new Error('输入组织员手机号'))
      if (!this.$u.test.mobile(value)) return callback(new Error('手机号不正确'))
      callback()
    }
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
          meetingPlace: '浙江省杭州市桐庐县合村乡寺家境',
          eetingPlaceLat: 119.365056,
          meetingPlaceLng: 30.194302,
          setOutTime: '',
          transportation: '01',
          precautions: '',
          journeyLineId: null
        },
        rules: {
          name: [{ required: true, message: '输入行程名称', trigger: ['change', 'blur'] }],
          organizer: [{ required: true, message: '输入组织员姓名', trigger: ['change', 'blur'] }],
          contactDetails: [{ required: true, trigger: ['change', 'blur'], validator: contactDetailsVal }],
          meetingPlace: [{ required: true, message: '输入集合地点', trigger: ['change', 'blur'] }],
          setOutTime: [{ required: true, message: '选择出发时间', trigger: ['change', 'blur'] }],
        }
      },
      timePickerConfig: {
        params: {
          year: true,
          month: true,
          day: true,
          hour: true,
          minute: true,
          timestamp: true,
        },
        startYear: '',
        endYear: '',
        defaultTime: '',
      },
      journeyLineName: '',
      journeyPointList: [],
      playTimeOptions,
      activityTypeOptions,
      needLifeDocumentaryOptions,
      transportationOptions,
    }
  },
  computed: {
    setOutTimeText () {
      const setOutTime = this.form.data.setOutTime
      if (!setOutTime) return '选择时间'
      return this.$moment(setOutTime).format('YYYY-MM-DD HH:mm')
    },
    meetingPlaceText () {
      const meetingPlace = this.form.data.meetingPlace
      if (!meetingPlace) return '选择集合点'
      return meetingPlace
    }
  },
  destroyed () {
    this.clearEvent()
  },
  onReady () {
    this.$refs.form.setRules(this.form.rules);
  },
  onLoad (option) {
    const { isEdit, id, journeyLineId } = option
    this.form.data.journeyLineId = journeyLineId
    if (isEdit) this.setEditConfig(id)
    this.setTimePickeConfig()
    this.setEvent()
  },
  components: { MyRadio, MyRadioBox, HeadMap, InputLengthWord }
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
  .color-placeholder {
    color: rgb(192, 196, 204);
  }
  /deep/.u-form-item--left {
    align-items: flex-start;
  }
  /deep/.u-datetime-picker {
    border-radius: 30rpx 30rpx 0 0;
    overflow: hidden;
  }
}
</style>