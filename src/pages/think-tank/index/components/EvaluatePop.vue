<template>
  <div :class="isDetail?'':'evaluate-pop'">
    <u-popup v-model="showPop"
             closeable
             :mask-close-able="false"
             mode="bottom">
      <view class="tc">
        <view class="title">评价</view>
        <view class="rate">
          <u-rate :current="5"
                  size="56"
                  v-model="comment.score"
                  active-color="#F74B0A"></u-rate>
        </view>
        <view class="rate-cont">
          真实有效的评价可以鼓励专家老师提供更好的服务
          您也可以获得<text class="f74">10个</text>红心值
        </view>
        <view class="evaluate-input">
          <textarea v-model="comment.content"
                    placeholder="输入您对专家老师的评语"
                    class="text-width"
                    maxlength="200"></textarea>
          <view class="text-sum ft24 color-999">{{comment.content.length || 0}}/200</view>
        </view>
        <view :class="['submit',comment.score > 0 ?'has':'no-data']"
              @click="submit">提交</view>
      </view>
    </u-popup>
  </div>
</template>
<script>
export default {
  name: 'EvaluatePop',
  methods: {
  },
  data () {
    return {
      showPop: false,
      comment: {
        content: '',
        score: 0
      }
    }
  },
  props: {
    isDetail: {
      type: Boolean,
      default: (() => {
        return false
      })
    }
  },
  methods: {
    show (id) {
      this.journeyTalentsId = id
      this.showPop = true
    },
    submit () {
      if (this.comment.score === 0) return
      const params = {
        ...this.comment,
        journeyTalentsId: this.journeyTalentsId
      }
      this.$api.evaluateJourneyTalents(params).then(res => {
        if (res.isError) {
          this.$msg(res.message)
          return
        } uni.showToast({
          title: '评价成功',
          mask: true
        })
        this.comment = {
          content: '',
          score: 0
        }
        this.showPop = false
        this.$emit('resetCommemtStatus')
      })
    }
  }
}
</script>
<style lang="scss" scoped>
.title {
  font-size: 34rpx;
  color: #000000;
  font-weight: bold;
  margin-top: 26rpx;
}
.rate {
  margin-top: 72rpx;
}
.rate-cont {
  width: 528rpx;
  margin: 0 auto;
  margin-top: 31rpx;
}
.evaluate-input {
  width: 686rpx;
  height: 240rpx;
  margin: 0 auto;
  background: #f8f8f9;
  border-radius: 6rpx;
  font-size: 28rpx;
  color: #999999;
  text-align: left;
  position: relative;
  margin-top: 48rpx;
  .text-width {
    width: 686rpx;
    height: 220rpx;
    padding: 16rpx 24rpx;
  }
  .text-sum {
    position: absolute;
    right: 16rpx;
    bottom: 24rpx;
    z-index: 9;
  }
}
.submit {
  width: 670rpx;
  height: 88rpx;
  line-height: 88rpx;
  margin: 0 auto;
  border-radius: 53.13rpx;
  font-size: 34rpx;
  margin-top: 32rpx;
  color: #ffffff;
}
.no-data {
  background: #cccccc;
}
.has {
  background: #f54400;
}
.f74 {
  color: #f74b0a;
}
.evaluate-pop {
  /deep/ .u-drawer-bottom {
    bottom: 94rpx !important;
  }
}
</style>
