<template>
  <div class='orders-item-wrap pl32 pr32 pt32 pb32 mb24'>
    <div class="between-row">
      <div class="user center-align">
        <div class="user-head mr16">
          <img :src="$avatarUrl('')">
        </div>
        <div class="center-align column">
          <p class="ft28 mb8">谈钱花</p>
          <p class="ft22 color-999">1小时前</p>
        </div>
      </div>
      <div class="take-info center-align">
        <div class="ft22 color-999 mr24">5人已接单</div>
        <!-- <div class="take-btn tc color-e32417 ft24">我要接单</div> -->
        <div class="taked pl24 ft24 color-666">我已接单</div>
      </div>
    </div>
    <div class="center-align mt32 mb24">
      <div style="width: 250rpx">
        <span class="ft26 color-999">人数：</span>
        <span class="ft26">4人</span>
      </div>
      <div>
        <span class="ft26 color-999">游玩天数：</span>
        <span class="ft26">5天</span>
      </div>
    </div>
    <div class="center-align mb24">
      <span class="ft26 color-999">电话：</span>
      <span class="ft26">15788889966</span>
      <div class="ml16"
           @click="onCall(15788889966)">
        <svg-icon icon="icon_dianhua"
                  class="ft32"
                  style="color: #518CFC"></svg-icon>
      </div>
    </div>
    <!-- 内容 -->
    <div class="content">
      <div ref="contentBox"
           class="content-box"
           :class="isHideContent && 'hide-content'">
        <span ref="contentText"
              class="ft26 content-text">{{item.content}}</span>
      </div>
      <view v-if="isShowExpand"
            class="expand center-flex"
            @click.stop="onExpandContent">
        <text class="ft24 primary-color">...展开</text>
      </view>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    onCall (phone) {
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
    onExpandContent () {
      this.isShowExpand = false
      this.isHideContent = false
    },
    calculationHeight () {
      console.log(this.$refs)
      // const boxHeight = this.$refs.contentBox.offsetHeight
      // const textHeight = this.$refs.contentText.offsetHeight
      // this.isShowExpand = textHeight > boxHeight
    },
  },
  props: {
    item: Object,
  },
  data () {
    return {
      isShowExpand: false,
      isHideContent: true
    }
  },
  watch: {
    item: {
      handler: function () {
        this.$nextTick(() => {
          this.calculationHeight()
        })
      },
      immediate: true,
    }
  },
}
</script>
<style lang='scss' scoped>
.orders-item-wrap {
  background: #fff;
  .user-head {
    width: 80rpx;
    height: 80rpx;
    border-radius: 50%;
    overflow: hidden;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .take-info {
    height: 60rpx;
    justify-content: flex-end;
    .take-btn {
      width: 144rpx;
      height: 56rpx;
      line-height: 56rpx;
      border-radius: 30rpx;
      border: solid 1rpx #e32417;
    }
    .taked {
      border-left: solid 1rpx #d2d2d2;
      line-height: 24rpx;
    }
  }
  .content {
    position: relative;
    .content-box {
      width: 100%;
      .content-text {
        line-height: 38rpx;
      }
    }
    .hide-content {
      height: 80rpx;
      display: -webkit-box;
      -webkit-box-orient: vertical; // 点点点
      -webkit-line-clamp: 2;
      overflow: hidden;
    }
    .expand {
      position: absolute;
      right: 0;
      bottom: 8rpx;
      width: 90rpx;
      height: 35rpx;
      background: rgba(255, 255, 255, 1);
      letter-spacing: 2rpx;
    }
  }
}
</style>