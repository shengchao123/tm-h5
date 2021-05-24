<template>
  <view class="evaluate-detail-wrap">
    <!-- 轮播图 -->
    <carousel :imgList="detailInfo.attachments"
              :indicatorDots="true">
    </carousel>
    <!-- 用户信息 -->
    <view class="user between-row pl30 pr30 pt24 pb24">
      <view class="center-align">
        <image @click="onToPersonalCenter"
               class="user-avatar"
               :src="$avatarUrl(detailInfo.avatar)">
        </image>
        <view class="ml16 column">
          <text class="ft28 medium">{{detailInfo.nick}}</text>
          <text class="ft22 color-999">{{detailInfo.time}}</text>
        </view>
      </view>
    </view>
    <!-- 笔记内容 -->
    <view class="pt8 ml30 mr30 note-content">
      <view class="pb32 column">
        <text class="ft36 bold pb16">{{detailInfo.title}}</text>
        <text class="content ft30">{{detailInfo.content}}</text>
      </view>
    </view>
    <view class="footer center-align ft30 color-999 between-row bg-white">
      <view class="flex">
        <view @click="onShowShareDialog">
          <svg-icon icon="icon_zhuanfa"></svg-icon>
        </view>
        <text class="pl20">{{detailInfo.shareQuantity}}</text>
      </view>
      <view class="">
        <svg-icon :icon="detailInfo.isLike ? 'icon_shoucang primary-color' : 'icon_weishoucang'"></svg-icon>
        <text class="pl20">{{detailInfo.likeQuantity}}</text>
      </view>
    </view>
    <!-- 分享弹窗 -->
    <share-dialog ref="shareDialog"
                  posterType="note"
                  shareBtns="wx moments poster"
                  sharePath="pages/home/evaluate-detail/index"
                  :posterData="posterData"
                  :shareParams="shareParams"
                  :shareData="shareData">
    </share-dialog>
  </view>
</template>
<script>
import ShareDialog from '@/pages/components/ShareDialog.vue';
import Carousel from '@/pages/components/Carousel.vue'
export default {
  name: 'index',
  methods: {
    onShowShareDialog () {
      this.$refs.shareDialog.show()
    },
    getItineraryEvaluationInfoById () {
      const params = {
        communityNoteId: this.communityNoteId
      }
      this.$api.getItineraryEvaluationInfoById(params).then(res => {
        if (res.isError) {
          this.$msg(res.message)
          return
        }
        this.detailInfo = res.content
      })
    }
  },
  data () {
    return {
      communityNoteId: '',
      detailInfo: ''
    }
  },
  created () {
    this.getItineraryEvaluationInfoById()
  },
  onLoad ({ communityNoteId }) {
    this.communityNoteId = communityNoteId
  },
  components: {
    Carousel,
    ShareDialog
  }
}
</script>
<style lang='scss' scoped>
.evaluate-detail-wrap {
  padding-bottom: 98rpx;
  .user {
    .user-avatar {
      width: 80rpx;
      height: 80rpx;
      border-radius: 50%;
    }
  }
  .note-content {
    .content {
      line-height: 1.6;
    }
  }
  .footer {
    width: 100%;
    position: fixed;
    bottom: 0;
    border-top: 1rpx solid #eaeaea;
    padding: 0 102rpx;
    height: 98rpx;
  }
}
</style>