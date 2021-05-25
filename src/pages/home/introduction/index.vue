<template>
  <div class='introduction-wrap pb30'
       v-if="baseInfo">
    <head-swiper :vrLink="vrLink"
                 :imagesList="imagesList"
                 :videoList="videoList"
                 @videoStartPlayEvent="videoStartPlayEvent"></head-swiper>
    <div class="title">
      <div class="between-row">
        <span class="ft40 bold flex1 color-333">{{baseInfo.name}}</span>
        <div class="ml24 center-align"
             style="color: #F87F00"
             @click="onPeriphery">
          <svg-icon icon="icon_dingwei"
                    class="ft24"></svg-icon>
          <span class="ft24 ml8">周边</span>
        </div>
      </div>
      <div class="between-row mt24">
        <span class="ft28 color-999 flex1">{{baseInfo.address}}</span>
        <div class="ml24 center-align"
             style="color: #0084F6"
             @click="onNavigation">
          <svg-icon icon="icon_ditu"
                    class="ft24"></svg-icon>
          <span class="ft24 ml8">导航</span>
        </div>
      </div>
      <div class="mt24 center-align">
        <span class="ft28 color-999">{{baseInfo.phone}}</span>
        <div class="ml8 center-align"
             style="color: #0084F6"
             @click="onCall">
          <svg-icon icon="icon_dianhua"
                    class="ft32"></svg-icon>
        </div>
      </div>
    </div>
    <div class="between-row mb30 pl30 pr30">
      <div class="center-align">
        <!-- <div class="join-user relative mr16 center-align">
          <div v-for="(item, index) in users"
               :key="index"
               class="user-img relative">
            <img :src="item" />
          </div>
        </div> -->
        <span class="ft24">{{baseInfo.accessCount}}人已访问</span>
      </div>
      <div class="center-align">
        <svg-icon icon="icon_dakaline"
                  class="ft24"></svg-icon>
        <span class="ft24">{{baseInfo.signCount}}人已打卡</span>
      </div>
    </div>
    <div class="pl30 pr30">
      <audio-module v-if="audio"
                    ref='audioModule'></audio-module>
    </div>
    <div class="color-333 pr30 pl30 mt24">
      <p class="medium ft32 mb24">简介</p>
      <div class="ft28 content">{{baseInfo.introduction}}</div>
    </div>
    <u-action-sheet :list="actions"
                    @click="onSelectGuide"
                    v-model="showGuide"></u-action-sheet>
  </div>
</template>
<script>
import AudioModule from './components/AudioModule.vue'
import HeadSwiper from './components/HeadSwiper.vue'
import { beginGuide } from '@/utils/map.js'
export default {
  name: 'introduction',
  methods: {
    onPeriphery () {
      uni.navigateTo({ url: '/pages/home/point-guide/index' })
    },
    onNavigation () {
      this.showGuide = true
    },
    // 选择地图导航回调
    onSelectGuide (act) {
      beginGuide(act, this.baseInfo)
    },
    onCall () {
      const { phone } = this.baseInfo
      uni.showModal({
        title: '即将拨打电话',
        content: phone,
        success: function (res) {
          if (res.confirm) {
            uni.makePhoneCall({
              phoneNumber: phone
            })
          }
        }
      })
    },
    // 视频开始播放事件
    videoStartPlayEvent () {
      // 暂停音频播放
      this.$refs.audioModule.pause()
    },
    getJourneyPointInfoById (journeyPointId) {
      const params = {
        journeyPointId,
      }
      this.$api.getJourneyPointInfoById(params).then(res => {
        if (res.isError) return this.$msg(res.message)
        this.baseInfo = res.content
        const { journeyScenicSpotAttachmentImagesList, journeyScenicSpotAttachmentVR, journeyScenicSpotAttachmentVideo, journeyScenicSpotAttachmentVoice } = res.content
        this.vrLink = journeyScenicSpotAttachmentVR ? journeyScenicSpotAttachmentVR.url : ''
        this.videoList = journeyScenicSpotAttachmentVideo || []
        this.imagesList = journeyScenicSpotAttachmentImagesList || []
        this.audio = journeyScenicSpotAttachmentVoice ? this.$sourceUrl(journeyScenicSpotAttachmentVoice.url) : null
        // 初始化音频
        this.$nextTick(() => {
          this.audio && this.$refs.audioModule.initAudio(this.audio)
        })
      })
    },
  },
  data () {
    return {
      journeyPointId: null,
      baseInfo: {},
      vrLink: '',
      imagesList: [],
      videoList: [],
      audio: null,
      users: [],
      showGuide: false,
      actions: Object.freeze([{ text: '高德地图' }, { text: '腾讯地图' }]),
    }
  },
  onLoad (option) {
    const journeyPointId = option.journeyPointId
    this.journeyPointId = journeyPointId
    this.getJourneyPointInfoById(journeyPointId)
  },
  components: { HeadSwiper, AudioModule }
}
</script>
<style lang='scss' scoped>
.introduction-wrap {
  color: #333;
  .join-user {
    .user-img {
      width: 32rpx;
      height: 32rpx;
      border-radius: 16rpx;
      border: solid 1rpx #fff;
      overflow: hidden;
      margin-left: -8rpx;
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
  .title {
    padding: 30rpx;
  }
  .content {
    line-height: 42rpx;
  }
}
</style>
