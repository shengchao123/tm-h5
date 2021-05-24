<template>
  <view class="life-wrap">
    <view class="tb pl30 pr30 bg-white">
      <view class="center-align h88 bb ft28 color-333"
            v-for="(item,index) in lifeInfoProp"
            :key="index">
        <text class="w144 bold">{{item.name}}</text>
        <text :class="item.prop === 'journeyItineraryName' && 'color-518cfc'"
              @click="onJourneyItinerary(item.prop)">{{lifeData[item.prop]}}</text>
      </view>
      <view>
        <view class="center-align h88 ft28 color-333">
          <text class="w144 bold">活动心得</text>
        </view>
        <text class="mt-8">{{lifeData.activityExperience}}</text>
      </view>
      <view class="mt24 flex pb8 flex-wrap life-image">
        <view v-for="(item, index) in lifeData.attachmentList"
              :key="index"
              class="life-item column center">
          <image class="life-img"
                 :src="$sourceUrl(item.url)"
                 mode="aspectFill"
                 @click="previewImage(index)"></image>
        </view>
      </view>
    </view>
    <line-clock v-if="lifeData.isShowSignIn"
                clockPageType="detail"
                :isShowSignIn.sync="lifeData.isShowSignIn"
                :journeyItineraryId="journeyItineraryId"></line-clock>
    <view class="center-align bg-white pl30 pr30 save-btn between-row tb">
      <view class="center-align ft20 color-666 flex1"
            v-if="lifeData.isSelf">
        <view class="column m-bianji"
              @click="onEdit">
          <svg-icon icon="icon_bianji"
                    class="ft36 mb12"></svg-icon>
          <text>编辑</text>
        </view>
        <view class="column"
              @click="isDelShow = true">
          <svg-icon icon="icon_shanchu"
                    class="ft36 mb12"></svg-icon>
          <text>删除</text>
        </view>
      </view>
      <u-button @click="onShare"
                :custom-style="btnStyle">分享</u-button>
    </view>
    <u-modal v-model="isDelShow"
             width="540"
             title="要删除该组织生活记录？"
             content="删除后不可恢复"
             border-radius="24"
             :show-cancel-button="true"
             confirm-text="删除"
             cancel-text="先留着"
             cancel-color="#333"
             confirm-color="#F44000"
             :title-style="maskTitleStyle"
             :content-style="maskContentStyle"
             :cancel-style="maskCancelStyle"
             :confirm-style="maskConfirmStyle"
             @confirm="onDelete"></u-modal>
    <share-dialog ref="shareDialog"
                  :shareData="shareData"></share-dialog>
  </view>
</template>

<script>
import ShareDialog from '../../components/ShareDialog.vue'
import LineClock from './LineClock.vue'
export default {
  name: 'Detail',
  methods: {
    // 分享
    onShare () {
      this.$refs.shareDialog.show()
    },
    // 行程名称跳转
    onJourneyItinerary (type) {
      if (type !== 'journeyItineraryName') return
      uni.navigateTo({
        url: `/pages/home/stroke-order/detail?id=${this.journeyItineraryId}`
      })
    },
    // 编辑
    onEdit () {
      const pageParams = `pageType=edit&id=${this.journeyItineraryId}&name=${this.lifeData.journeyItineraryName}`
      uni.navigateTo({ url: `/pages/mine/org-life-record/index?${pageParams}` })
    },
    // 删除
    onDelete () {
      const params = {
        journeyItineraryId: this.journeyItineraryId
      }
      this.$api.removeJourneyLifeDocumentary(params).then(res => {
        if (res.isError) return this.$msg(res.message)
        this.$msg('删除成功')
        setTimeout(() => {
          uni.navigateBack()
        }, 500)
      })
    },
    getShareData () {
      const { journeyItineraryName, activityExperience } = this.lifeData
      this.shareData = {
        link: window.location.href,
        title: journeyItineraryName,
        desc: activityExperience,
      }
    },
    // 根据行程单id获取生活纪实
    getJourneyLifeDocumentaryByItineraryId () {
      const id = this.journeyItineraryId
      if (!id) return
      const params = {
        journeyItineraryId: id
      }
      this.$api.getJourneyLifeDocumentaryByItineraryId(params).then(res => {
        if (res.isError) return this.$msg(res.message)
        this.lifeData = res.content
        this.getShareData()
      })
    }
  },
  data () {
    return {
      journeyItineraryId: null,
      lifeInfoProp: Object.freeze([
        {
          prop: 'journeyItineraryName',
          name: '对应行程'
        },
        {
          prop: 'shouldNumber',
          name: '应到人数'
        },
        {
          prop: 'actualNumber',
          name: '实到人数'
        }
      ]),
      lifeData: {},
      isDelShow: false,
      shareData: {}
    }
  },
  onShow () {
    if (this.$notMember()) return this.$goLogin()
    this.getJourneyLifeDocumentaryByItineraryId()
  },
  onLoad (option) {
    this.journeyItineraryId = option.id
  },
  computed: {
    btnStyle () { // 自定义按钮样式
      const temWidth = this.lifeData.isSelf ? '330rpx' : '690rpx'
      const temStyle = {
        fontSize: '30rpx',
        color: '#E32417',
        width: temWidth,
        height: '88rpx',
        borderRadius: '44rpx',
        fontWeight: 'bold',
        border: '1rpx solid #E32417',
        background: '#fff'
      }
      return temStyle
    },
    maskTitleStyle () { // 自定义modal-title样式
      const temStyle = {
        fontSize: '32rpx',
        color: '#333',
        paddingTop: '58rpx',
        fontWeight: 'bold',
      }
      return temStyle
    },
    maskContentStyle () { // 自定义modal-content样式
      const temStyle = {
        fontSize: '26rpx',
        color: '#999',
        padding: '28rpx 0 58rpx'
      }
      return temStyle
    },
    maskCancelStyle () { // 自定义modal-cancel样式
      const temStyle = {
        fontSize: '32rpx',
        borderRight: '1rpx solid #EAEAEA'
      }
      return temStyle
    },
    maskConfirmStyle () { // 自定义modal-confirm样式
      const temStyle = {
        fontSize: '32rpx',
        borderRadius: '24rpx'
      }
      return temStyle
    }
  },
  components: { LineClock, ShareDialog },
}
</script>


<style lang='scss' scoped>
page {
  background: #f7f7f7;
  height: 100%;
}
.color-518cfc {
  color: #518cfc;
}
.w144 {
  width: 144rpx;
}
.h88 {
  height: 88rpx;
}
.mt-8 {
  margin-top: -8rpx;
}
.m-bianji {
  margin: 0 124rpx 0 66rpx;
}
.flex-wrap {
  flex: wrap;
}
.life-wrap {
  padding-bottom: 152rpx;
  overflow: auto;
  .life-item {
    position: relative;
    width: 214rpx;
    height: 214rpx;
    border-radius: 10rpx;
    margin-right: 24rpx;
    margin-bottom: 24rpx;
    box-sizing: border-box;
    .life-img {
      width: 100%;
      height: 100%;
      border-radius: 10rpx;
    }
  }
  .life-image .life-item:nth-of-type(3n) {
    margin-right: 0;
  }
}
.save-btn {
  height: 120rpx;
  position: fixed;
  bottom: 0;
  width: 100%;
}
</style>
