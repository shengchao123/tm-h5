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
                  class="center column"
                  @click="onWeixin">
              <!-- <button open-type="share"
                      class="share-btn">
                <image :src="imgHost + 'pull-new/invite_icon01.png'" />
              </button> -->
              <image :src="imgHost + 'pull-new/invite_icon01.png'" />
              <text class="mt8 ft24">微信</text>
            </view>
            <view v-if="shareBtns.includes('moments')"
                  @click="guideShareType"
                  class="center column">
              <image :src="imgHost + 'pull-new/invite_icon02.png'" />
              <text class="mt8 ft24">朋友圈</text>
            </view>
            <!-- <view @click="copyLink"
                  v-if="!savePoster"
                  class="center column">
              <image :src="imgHost + 'pull-new/invite_icon03.png'" />
              <text class="mt8 ft24">复制链接</text>
            </view> -->
            <view v-clipboard:copy="shareData.link"
                  v-clipboard:success="(type) => onCopyResult('success')"
                  v-clipboard:error="(type) => onCopyResult('error')"
                  class="center column">
              <image :src="imgHost + 'pull-new/invite_icon03.png'" />
              <text class="mt8 ft24">复制链接</text>
            </view>
            <!-- TODO: 钉钉图标、钉钉配置-->
            <!-- <view @click="onDingDing"
                  class="center column">
              <image :src="imgHost + 'pull-new/invite_icon03.png'" />
              <text class="mt8 ft24">钉钉</text>
            </view> -->
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
                class="cancel_btn center">
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
import VueClipboard from 'vue-clipboard2'
import wx from 'weixin-js-sdk'			//微信sdk依赖
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
      this.$refs.sharePopup.show()
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
    onWeixin () {
      this.getConfig()
    },
    // 获取微信分享配置
    getConfig () {
      const url = this.shareData.link && this.shareData.link.split("#")[0] // 获取的是当前分享的页面
      const params = {
        url
      }
      this.$api.getJSConfig(params).then(res => {
        if (res.isError) {
          this.$msg(res.message)
          return
        }
        if (!this.$isEmpty(res.content)) {
          this.wxShare(res.content)
        }
      })
    },
    wxShare ({ appId, timestamp, nonceStr, signature }) {
      const { title, desc, link, imgUrl } = this.shareData
      wx.config({
        debug: true, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
        appId, // 必填，公众号的唯一标识
        timestamp, // 必填，生成签名的时间戳
        nonceStr, // 必填，生成签名的随机串
        signature, // 必填，签名
        jsApiList: [ //需要调用的JS接口列表
          // 'updateAppMessageShareData', //自定义“分享给朋友”及“分享到QQ”按钮的分享内容（1.4.0） 新接口
          // 'updateTimelineShareData', //自定义“分享到朋友圈”及“分享到QQ空间”按钮的分享内容（1.4.0） 老接口
          'onMenuShareTimeline', //分享到朋友圈 老接口
          'onMenuShareAppMessage',//分享给盆友 老接口
          // 'getLocation'  //获取定位
        ]
      })
      // const that = this
      wx.ready(function () {
        // wx.checkJsApi({
        //   jsApiList: ['onMenuShareTimeline', 'onMenuShareAppMessage'], // 需要检测的JS接口列表，所有JS接口列表见附录2,
        //   success: function (res) {
        //     // alert(JSON.stringify(res))
        //     // 以键值对的形式返回，可用的api值true，不可用为false
        //     // 如：{"checkResult":{"chooseImage":true},"errMsg":"checkJsApi:ok"}
        //   }
        // })
        wx.onMenuShareAppMessage({
          title, // 分享标题
          desc, // 分享描述
          link, // 分享链接
          imgUrl, // 分享图标
          type: 'link', // 分享类型,music、video或link，不填默认为link
          success: function () {
            // 用户确认分享后执行的回调函数
            alert('111已分享');

          },
          cancel: function () {
            // 用户取消分享后执行的回调函数
            alert('111已取消');
          }
        });
        wx.onMenuShareTimeline({
          title, // 分享标题
          desc, // 分享描述
          link, // 分享链接
          imgUrl, // 分享图标
          type: 'link', // 分享类型,music、video或link，不填默认为link
          success: function () {
            // 用户确认分享后执行的回调函数
            alert('222已分享');
          },
          cancel: function () {
            // 用户取消分享后执行的回调函数
            alert('222已取消');
          }
        });

      })
      wx.error(function (result) {
        // alert(JSON.stringify(result) + "微信验证失败");
        this.getConfig()
      });
    },
    // 引导分享
    guideShareType () {
      this.hide()
      this.guideShare = true
    },
    // 复制结果
    onCopyResult (type) {
      if (type === 'success') {
        this.$msg('复制成功')
      } else {
        this.$msg('复制失败')
      }
    },
    onDingDing () {
      const { title, content, image, url } = this.shareData
      dd.ready(() => {
        dd.biz.navigation.setRight({
          show: true,//控制按钮显示， true 显示， false 隐藏， 默认true
          control: true,//是否控制点击事件，true 控制，false 不控制， 默认false
          text: '...',//控制显示文本，空字符串表示显示默认文本
          onSuccess: function (result) {
            console.log(666, result)
            //如果control为true，则onSuccess将在发生按钮点击事件被回调
            dd.biz.util.share({
              type: 0, //分享类型，0:全部组件 默认； 1:只能分享到钉钉；2:不能分享，只有刷新按钮
              url,
              content,
              title,
              image,
              onSuccess: function () {
                //onSuccess将在分享完成之后回调
                /**/
              },
              onFail: function (err) { }
            })
          },
          onFail: function (err) { }
        });
      })

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
      type: [String, Object],
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
  watch: {
    shareData: {
      handler (val) {
        !this.$isEmpty(val) && this.getConfig()
      },
      immediate: true
    }
  },
  components: { Popup }
}
</script>
<style lang="scss" scoped>
page {
  width: 100%;
}
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
  margin-bottom: 50rpx;
  padding: 0 60rpx;
  justify-content: space-between;
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
