<template>
  <view class="life-wrap">
    <view class="tb pl30 pr30 bg-white">
      <u-form :model="formData"
              ref="uForm"
              :label-style="labelStyle">
        <u-form-item label="对应行程"
                     class="p10-0"
                     label-width="144rpx">
          <text>{{lineData.journeyItineraryName}}</text>
        </u-form-item>
        <u-form-item label="应到人数"
                     class="p10-0"
                     label-width="144rpx">
          <u-input v-model="formData.shouldNumber"
                   placeholder="输入应到人数"
                   :clearable="false"
                   @input="changeInput"
                   placeholder-style="color:#999"
                   :custom-style="customInputStyle" />
        </u-form-item>
        <u-form-item label="实到人数"
                     class="p10-0"
                     label-width="144rpx">
          <u-input v-model="formData.actualNumber"
                   placeholder="输入实到人数"
                   :clearable="false"
                   @input="changeInput"
                   placeholder-style="color:#999"
                   :custom-style="customInputStyle" />
        </u-form-item>
        <u-form-item label="活动心得"
                     label-position="top"
                     class="p10-0"
                     :border-bottom="false"
                     label-width="144rpx">
          <view class="content-textarea">
            <textarea placeholder="记录您的活动心得"
                      :maxlength="1000"
                      @input="changeInput"
                      v-model="formData.activityExperience"
                      :enableNative="false">
          </textarea>
            <view class="color-999 ft22 experience-count mt8">{{formData.activityExperience.length}}/1000</view>
          </view>
        </u-form-item>
      </u-form>
      <view class="mt24 flex pb8">
        <upload-images :count="9"
                       :length="9"
                       imageTypeName="sourceType"
                       :imageData.sync="formData.attachmentList"></upload-images>
      </view>
    </view>
    <line-clock :isShowSignIn.sync="formData.isShowSignIn"
                :journeyItineraryId="lineData.journeyItineraryId"></line-clock>
    <view class="center-align bg-white pl30 pr30 save-btn tb">
      <u-button @click="onSave"
                :disabled="btnDisabled"
                :custom-style="btnStyle">{{pageType === 'edit' ? '保存':'确定'}}</u-button>
    </view>
  </view>
</template>

<script>
import UploadImages from '@/components/upload-images'
import LineClock from './LineClock.vue'
export default {
  components: { UploadImages, LineClock },
  name: 'index',
  methods: {
    // 输入框有值时按钮可操作
    changeInput () {
      const { shouldNumber, actualNumber, activityExperience, attachmentList } = this.formData
      if (!this.$isEmpty(shouldNumber) && !this.$isEmpty(actualNumber) && !this.$isEmpty(activityExperience) && !this.$isEmpty(attachmentList)) {
        this.btnDisabled = false
      } else {
        this.btnDisabled = true
      }
    },
    // 确定
    onSave () {
      const params = {
        ...this.formData,
        journeyItineraryId: this.lineData.journeyItineraryId
      }
      pageType === 'edit' ? this.modifyJourneyLifeDocumentary(params) : this.createJourneyLifeDocumentary(params)
    },
    // 创建生活纪实
    createJourneyLifeDocumentary (params) {
      this.$api.createJourneyLifeDocumentary(params).then(res => {
        if (res.isError) return this.$msg(res.message)
        this.$msg('信息提交成功')
        uni.navigateBack()
      })
    },
    // 修改生活纪实
    modifyJourneyLifeDocumentary (params) {
      this.$api.modifyJourneyLifeDocumentary(params).then(res => {
        if (res.isError) return this.$msg(res.message)
        this.$msg('信息提交成功')
        uni.navigateBack()
      })
    },
    // 根据行程单id获取生活纪实
    getJourneyLifeDocumentaryByItineraryId (journeyItineraryId) {
      this.$api.getJourneyLifeDocumentaryByItineraryId({ journeyItineraryId }).then(res => {
        if (res.isError) return this.$msg(res.message)
        this.formData = res.content
      })
    },
  },
  data () {
    return {
      formData: {
        shouldNumber: '',
        actualNumber: '',
        activityExperience: '',
        attachmentList: [],
        isShowSignIn: true
      },
      lineData: {},
      btnDisabled: true,
      pageType: 'add'
    }
  },
  computed: {
    labelStyle () { // 自定义label样式
      const temStyle = {
        fontSize: '28rpx',
        color: '#333',
        fontWeight: 'bold',
      }
      return temStyle
    },
    customInputStyle () { // 自定义输入框样式
      const temStyle = {
        fontSize: '28rpx',
        color: '#333',
      }
      return temStyle
    },
    btnStyle () { // 自定义按钮样式
      const btnBgColor = this.btnDisabled ? '#ccc' : '#E32417'
      const temStyle = {
        fontSize: '30rpx',
        color: '#fff',
        width: '690rpx',
        height: '88rpx',
        borderRadius: '44rpx',
        fontWeight: 'bold',
        background: btnBgColor
      }
      return temStyle
    }
  },
  onLoad (option) {
    const { pageType, journeyItineraryName, journeyItineraryId } = option
    this.lineData = {
      journeyItineraryName,
      journeyItineraryId
    }
    this.pageType = pageType
    pageType === 'edit' && this.getJourneyLifeDocumentaryByItineraryId(journeyItineraryId)
  },
  watch: {
    'formData.attachmentList': {
      handler (val) {
        this.changeInput()
      },
      immediate: true
    }
  }
}
</script>

<style lang='scss' scoped>
page {
  background: #f7f7f7;
  height: 100%;
}
.p10-0 {
  padding: 10rpx 0;
}
.life-wrap {
  margin-bottom: 152rpx;
  overflow: auto;
}
.content-textarea {
  overflow: hidden;
  height: 400rpx;
  width: 100%;
  /deep/ textarea {
    height: 360rpx !important;
    padding: 0 !important;
    width: 100%;
    font-size: 28rpx;
    overflow-y: scroll;
  }
  .experience-count {
    height: 22rpx;
    line-height: 22rpx;
    float: right;
  }
}
.save-btn {
  height: 120rpx;
  position: fixed;
  bottom: 0;
}
</style>
