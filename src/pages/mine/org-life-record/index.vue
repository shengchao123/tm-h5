<template>
  <view>
    <view class="tb pl30 pr30 bg-white">
      <u-form :model="formData"
              ref="uForm"
              :label-style="labelStyle">
        <u-form-item label="对应行程"
                     class="p10-0"
                     label-width="144rpx">
          <u-input v-model="formData.lineName"
                   :clearable="false"
                   placeholder-style="color:#999"
                   :custom-style="customInputStyle"
                   placeholder="输入对应行程" />
        </u-form-item>
        <u-form-item label="应到人数"
                     class="p10-0"
                     label-width="144rpx">
          <u-input v-model="formData.shouldNumber"
                   placeholder="输入应到人数"
                   :clearable="false"
                   placeholder-style="color:#999"
                   :custom-style="customInputStyle" />
        </u-form-item>
        <u-form-item label="实到人数"
                     class="p10-0"
                     label-width="144rpx">
          <u-input v-model="formData.actualNumber"
                   placeholder="输入实到人数"
                   :clearable="false"
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
                      v-model="formData.activityExperience"
                      @blur="changeContent"
                      :enableNative="false">
          </textarea>
            <view class="color-999 ft22 experience-count mt8">{{formData.activityExperience.length}}/1000</view>
          </view>
        </u-form-item>
      </u-form>
      <view class="mt24 flex pb8">
        <upload-images :count="9"
                       :length="9"
                       :imageData.sync="formData.imageList"></upload-images>
      </view>
    </view>
    <line-clock isShowSignIn.sync="formData.isShowSignIn"></line-clock>
  </view>
</template>

<script>
import UploadImages from '@/components/upload-images'
import LineClock from './LineClock.vue'
export default {
  components: { UploadImages, LineClock },
  name: 'index',
  data () {
    return {
      formData: {
        shouldNumber: '',
        actualNumber: '',
        activityExperience: '',
        imageList: []
      },

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
      const btnBgColor = this.btnDisabled ? '#ccc' : primaryColor
      const temStyle = {
        fontSize: '32rpx',
        color: '#fff',
        height: '98rpx',
        borderRadius: '8rpx',
        fontWeight: 'bold',
        background: btnBgColor,
        marginTop: '120rpx'
      }
      return temStyle
    },
    tipContentStyle () { // 自定义modal内容样式
      const temStyle = {
        fontSize: '32rpx',
        color: '#333333',
        padding: "82rpx 0 78rpx",
        fontWeight: 'bold',
        fontFamily: 'PingFangSC-Medium'
      }
      return temStyle
    },
    tipCancelStyle () { // 自定义modal取消按钮样式
      const temStyle = {
        borderRight: '1rpx solid #eee',
        borderRadius: '0',
        height: '86rpx',
        lineHeight: '86rpx',
        fontFamily: 'PingFangSC-Regular'
      }
      return temStyle
    }
  },
  onLoad (option) {
    this.formData.lineName = option.name

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
</style>
