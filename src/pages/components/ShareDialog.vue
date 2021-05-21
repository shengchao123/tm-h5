<template>
  <view>
    <popup ref="sharePopup"
           height="324"
           radius="15"
           type="bottom">
      <view class="share_dialog flex column">
        <view class="flex1">
          <view class="imgs flex">
            <view v-if="shareBtns.includes('wx')"
                  class="center-flex column mr87">
              <button open-type="share"
                      class="share-btn">
                <image :src="imgHost + 'pull-new/invite_icon01.png'" />
              </button>
              <text class="mt4">微信</text>
            </view>
            <view v-if="shareBtns.includes('moments')"
                  @click="shareType"
                  class="center-flex column mr87">
              <image :src="imgHost + 'pull-new/invite_icon02.png'" />
              <text class="mt4">朋友圈</text>
            </view>
            <view @click="copyLink"
                  v-if="!savePoster"
                  class="center-flex column">S
              <image :src="imgHost + 'pull-new/invite_icon03.png'" />
              <text class="mt4">复制链接</text>
            </view>
          </view>
          <view class="flex operate"
                v-if="isOperate">
            <view @click="editNote()"
                  class="tc mr87"
                  style="width: 94rpx">
              <text class="iconfont icon_bianji center-flex icon-operate ft32"></text>
              <p class="mt4">编辑</p>
            </view>
            <view @click="deleteNote()"
                  class="tc"
                  style="width: 94rpx">
              <text class="iconfont icon_shanchu center-flex icon-operate ft32"></text>
              <p class="mt4">删除</p>
            </view>
          </view>
          <view @click="hide"
                class="cancel_btn center-flex ">
            <text class="medium ft28 secondary-text">取消</text>
          </view>
        </view>
      </view>
    </popup>
    <view @click="closeMask"
          v-if="guideShare"
          class="guide_share">
      <image :src="imgHost + 'pull-new/guide_share_bg.png'"
             alt="">
    </view>
  </view>
</template>
<script>
import Popup from '@/components/slzx-popup/slzx-popup.vue'
export default {
  data () {
    return {
      guideShare: false,
      showPoster: false,
      savePoster: false
    }
  },
  methods: {
    show () {
      /* #ifdef MP-WEIXIN */
      this.$refs.sharePopup.show()
      /* #endif */
      /* #ifdef MP-ALIPAY */
      this.createPoster()
      /* #endif */
    },
    // 关闭分享弹窗
    hide () {
      this.$refs.sharePopup.close()
    },
    // 编辑按钮
    editNote () {
      this.$emit('editNote')
    },
    // 删除按钮
    deleteNote () {
      this.$emit('deleteNote')
    },
    // 关闭分享弹窗
    cancelShare () {
      this.$emit('closeShare', false)
    },
    // 关闭引导分享
    closeMask () {
      this.guideShare = false
    },
    // 复制链接
    copyLink () {
      // TODO: 复制链接有待更改
      const url = ''
      const that = this
      uni.setClipboardData({
        data: url + (this.shareData.path || '/pagesDiscover/note-detail/index.vue?communityNoteId=' + this.shareData.communityNoteId),
        success: function () {
          that.$msg('复制成功')
        }
      })
    },
    // 引导分享
    shareType () {
      this.guideShare = true
    },
    // 保存海报
    saveCanvas () {
      this.$refs.activityPoster.savePoster()
    },
    // 生成海报
    createPoster () {
      this.showPoster = true
      this.savePoster = true
    },
    // 关闭海报
    closePoster (val) {
      if (val === 'ALIPAY') {
        this.$refs.sharePopup.show()
        this.savePoster = true
      } else {
        this.showPoster = val
        /* #ifdef MP-ALIPAY */
        this.$refs.sharePopup.hide()
        /* #endif */
        /* #ifdef MP-WEIXIN */
        this.savePoster = false
        /* #endif */
      }
    }
  },
  props: {
    posterType: {
      type: String,
      default: 'group'
    },
    shareData: {
      type: Object,
      default: () => { }
    },
    shareBtns: {
      type: String,
      default: 'wx moments'
    },
    isOperate: {
      type: Boolean,
      default: false
    },
    sharePath: {//分享的当前页面地址
      type: String,
      default: ''
    },
    shareParams: {//分享请求参数
      type: String,
      default: ''
    },
    posterData: {//开团海报数据
      type: Object,
      default: () => { }
    }
  },
  computed: {
    imgHost () {
      return this.$imgHost
    }
  },
  components: { Popup }
}
</script>
<style lang="scss" scoped>
.share-btn {
  width: 95rpx;
  height: 95rpx;
  background: transparent;
  margin: 0 !important;
  padding: 0 !important;
}

.share_dialog {
  border-radius: 30rpx 30rpx 0rpx 0rpx;
  background: #f2f2f2;
  padding-top: 50rpx;
  z-index: 50;
}
.zinde17 {
  z-index: 10075;
}
.imgs {
  margin-bottom: 45rpx;
  padding-left: 45rpx;
  image {
    width: 88rpx;
    height: 88rpx;
  }
}
.cancel_btn {
  height: 94rpx;
  background: #fff;
}

.icon-operate {
  width: 88rpx;
  height: 88rpx;
  border-radius: 50%;
  background: #ffffff;
}
.guide_share {
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background: rgba($color: #000000, $alpha: 0.75);
  z-index: 10001;
  image {
    position: absolute;
    right: 100rpx;
    top: 28rpx;
    width: 618rpx;
    height: 272rpx;
  }
}
.operate {
  padding: 0 45rpx 50rpx;
}
.mr87 {
  margin-right: 87rpx;
}
.ft46 {
  font-size: 46rpx;
}
.save-img {
  width: 88rpx;
  height: 88rpx;
  line-height: 88rpx;
  text-align: center;
  background: #ffffff;
  border-radius: 50%;
}
</style>
