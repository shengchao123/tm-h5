<template>
  <view class="pt20">
    <view class="flex leave-msg">
      <view class="mr16 relative">
        <img :src="$fileHost + msgData.memberAvatar"
             alt=""
             class="head-img">
        <span class="msg-status ask-color">问</span>
      </view>
      <view class="msg-cont">
        <view class="between-row">
          <view>
            <view class="user-name">{{msgData.memberNick}}</view>
            <view class="user-time">{{$moment(msgData.contentTime).format('YYYY-MM-DD HH:mm:ss')}}</view>
          </view>
          <view class="replay"
                v-if="msgData.status === 1 && isTalents === 'true'"
                @click="replayMsg(msgData.id)">回复TA</view>
        </view>
        <view class="content">{{msgData.content}}</view>
      </view>
    </view>
    <view class="flex leave-msg"
          v-if="msgData.status !== 1">
      <view class="mr16 relative">
        <img :src="$fileHost + msgData.journeyTalentsPhoto"
             alt=""
             class="head-img">
        <span class="msg-status answer-color">答</span>
      </view>
      <view class="msg-cont">
        <view class="user-name">{{msgData.journeyTalentsName}}</view>
        <view class="user-time">{{$moment(msgData.replyTime).format('YYYY-MM-DD HH:mm:ss')}}</view>
        <view class="content">{{msgData.replyContent}}</view>
      </view>
    </view>
    <send-message ref="sendMessage"
                  @sendMsg="sendMsg"></send-message>
  </view>
</template>
<script>
import SendMessage from './SendMessage'
export default {
  methods: {
    replayMsg (id) {
      this.$refs.sendMessage.show(id)
    },
    sendMsg () {
      this.$emit('getMsgStatus')
    }
  },
  props: {
    msgData: {
      type: Object,
      default: {}
    }
  },
  computed: {
    // 文字颜色
    msgColor () {
      if (this.msgData.status === 1) return 'msg-status ask-color'
      return 'msg-status answer-color'
    },
    // 时间
    msgTime () {
      const msgData = this.msgData
      if (msgData.status === 1) return msgData.content
      return msgData.replyContent
    }
  },
  data () {
    return {
      isTalents: uni.getStorageSync('isTalents') //是否为专家身份
    }
  },
  components: { SendMessage },
}
</script>
<style lang='scss' scoped>
.leave-msg {
  background: #ffffff;
  padding: 32rpx 30rpx 0 30rpx;
}
.head-img {
  width: 80rpx;
  height: 80rpx;
  border-radius: 50%;
}
.msg-status {
  display: block;
  width: 56rpx;
  height: 26rpx;
  text-align: center;
  line-height: 26rpx;
  border-radius: 4rpx;
  font-size: 20rpx;
  color: #ffffff;
  position: absolute;
  top: 62rpx;
  left: 12rpx;
}
.ask-color {
  background: #74a3fd;
}
.answer-color {
  background: #63d35d;
}
.msg-cont {
  width: 100%;
  padding-bottom: 32rpx;
  border-bottom: 1rpx solid #e1e1e1;
  .replay {
    width: 128rpx;
    height: 52rpx;
    line-height: 52rpx;
    text-align: center;
    border: 1rpx solid #dedede;
    border-radius: 26rpx;
    font-size: 24rpx;
    color: #666666;
  }
  .user-name {
    font-size: 28rpx;
    font-weight: 600;
    color: #333333;
  }
  .user-time {
    font-size: 24rpx;
    color: #999999;
    margin-top: 12rpx;
  }
  .content {
    margin-top: 24rpx;
    font-size: 28rpx;
    font-weight: 550;
    color: #333333;
  }
}
</style>