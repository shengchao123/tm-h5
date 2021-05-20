<template>
  <div class='stroke-order-wrap'>
    <head-map :journeyLineId.sync="form.data.journeyLineId"></head-map>
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
            <!-- <u-input v-model="form.data.setOutTime"
                     class="flex1"
                     :disabled="true"
                     @click="onShowDateSelect"
                     placeholder="选择时间" /> -->
            <span class="flex1"
                  :class="form.data.setOutTime ? 'color-333' : 'color-placeholder'">{{form.data.setOutTime || '选择时间'}}</span>
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
          <u-input v-model="form.data.tip"
                   placeholder="输入其他注意事项（选填）" />
        </u-form-item>
      </div>
    </u-form>
    <div class="footer pl30 pr30 center-align">
      <div class="confirm-btn ft32 tc"
           @click="onConfirm">确定</div>
    </div>
    <u-select v-model="showDateSelect"
              title="日期"
              mode="mutil-column-auto"
              :list="dateTimeOptions"
              :default-value="defaultValueOfDate"
              @confirm="confirmDateSelect"></u-select>
  </div>
</template>
<script>
import { playTimeOptions, activityTypeOptions, needLifeDocumentaryOptions, transportationOptions } from '@/utils/enum'
import MyRadio from './components/MyRadio'
import MyRadioBox from './components/MyRadioBox.vue'
import { dateTimeOptions } from '@/utils/tools.js'
import HeadMap from './components/HeadMap.vue'
export default {
  methods: {
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
      this.$refs.uForm.validate(valid => {
        if (valid) {
          this.createJourneyItinerary()
        } else {
          this.$msg('还有信息未填写')
        }
      });
      console.log(this.form.data)

    },
    createJourneyItinerary () {
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
    const contactDetailsVal = (rule, value, callback) => {
      if (!value) return callback(new Error('请输入组织员手机号'))
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
          meetingPlace: '',
          setOutTime: '',
          transportation: '01',
          tip: '',
          journeyLineId: null,
          type: '01'
        },
        rules: {
          name: [{ required: true, message: '请输入行程名称', trigger: ['change', 'blur'] }],
          organizer: [{ required: true, message: '请输入组织员姓名', trigger: ['change', 'blur'] }],
          contactDetails: [{ required: true, trigger: ['change', 'blur'], validator: contactDetailsVal }],
          meetingPlace: [{ required: true, message: '请输入集合地点', trigger: ['change', 'blur'] }],
          setOutTime: [{ required: true, message: '请选择出发时间', trigger: ['change', 'blur'] }],
        }
      },
      defaultValueOfDate: [],
      playTimeOptions,
      activityTypeOptions,
      needLifeDocumentaryOptions,
      transportationOptions,
      dateTimeOptions: dateTimeOptions(),
    }
  },

  onReady () {
    this.$refs.form.setRules(this.form.rules);
  },
  created () {
  },
  components: { MyRadio, MyRadioBox, HeadMap }
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
}
</style>