<template>
  <div class='introduction-wrap'
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
        <div class="join-user relative mr16 center-align">
          <div v-for="(item, index) in users"
               :key="index"
               class="user-img relative">
            <img :src="item" />
          </div>
        </div>
        <span class="ft24">1356人已访问</span>
      </div>
      <div class="center-align">
        <svg-icon icon="icon_dakaline"
                  class="ft24"></svg-icon>
        <span class="ft24">1356人已打卡</span>
      </div>
    </div>
    <div class="pl30 pr30">
      <audio-module ref='audioModule'></audio-module>
    </div>
    <div class="color-333 pr30 pl30 mt24">
      <p class="medium ft32 mb24">简介</p>
      <div class="ft28 content">{{baseInfo.introduction}}</div>
    </div>
  </div>
</template>
<script>
import AudioModule from './components/AudioModule.vue'
import HeadSwiper from './components/HeadSwiper.vue'

export default {
  name: 'introduction',
  methods: {
    onPeriphery () {

    },
    onNavigation () {

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
        this.vrLink = journeyScenicSpotAttachmentVR.url
        this.videoList = journeyScenicSpotAttachmentVideo
        this.imagesList = journeyScenicSpotAttachmentImagesList
        // 初始化音频
        this.$refs.audioModule.initAudio(journeyScenicSpotAttachmentVoice.url)
      })
    }
  },
  data () {
    return {
      baseInfo: {},
      vrLink: '',
      imagesList: [],
      videoList: [],
      users: [
        'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fpic4.zhimg.com%2F50%2Fv2-70443a5d7df7eae0c7e25dacc6e983fb_hd.jpg&refer=http%3A%2F%2Fpic4.zhimg.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1624071402&t=1cb4f4fd6c0e1fd28d0636e24f5220c9',
        'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fi0.hdslb.com%2Fbfs%2Farticle%2F878a6c57bed136d9d176a6eb8289a04787b126bf.jpg&refer=http%3A%2F%2Fi0.hdslb.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1624071427&t=de472274e77488dc548dd63a22679f62',
        'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fhbimg.b0.upaiyun.com%2Ff331c6a4056b8fc7766941647aa3534927ce0005c5c5-b9WRQf_fw658&refer=http%3A%2F%2Fhbimg.b0.upaiyun.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1624071446&t=0116493d4d4ba2663d0bc69081f25152'
      ]
    }
  },
  onLoad (option) {
    const journeyPointId = option.id
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
