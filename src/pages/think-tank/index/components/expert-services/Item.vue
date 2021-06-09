<template>
  <view class="item-wrap bg-white relative">
    <view class="center-align">
      <image :src="avatarUrl(item.photo)"
             alt=""
             class="mr16 user-img">
      </image>
      <view class="ml16 column">
        <text class="ft28 color-333 medium">{{item.name}}</text>
        <text class="ft22 color-999 pt12 skilled">{{item.titleList.join('、')}}</text>
      </view>
    </view>
    <view class="ft26">
      <view class="mt24 flex">
        <text class="color-999">擅长：</text>
        <text class="color-999 flex1">{{item.specialty}}</text>
      </view>
      <view class="mt24">
        <text class="color-999">服务：</text>
        <text class="color-999">{{item.serviceTypeName}}</text>
      </view>
    </view>
    <view @click="show = true"
          class="contact-btn center">
      <text class="ft24 color-666">联系TA</text>
    </view>
    <view class="label center">
      <text class="ft22">{{item.typeName}}</text>
    </view>
    <u-popup class="contact-dialog tc"
             v-model="show"
             mode="center"
             border-radius="24"
             width="540">
      <view class="container column">
        <text class="color-999 ft28 line1">即将拨打专家电话</text>
        <text class="color-333 ft34 medium line1 mt36">{{item.contactPhone}}</text>
        <!-- 专家 -->
        <view v-if="isTalents"
              class="expert flex">
          <view class="color-333 ft32 center"
                @click="show = false">
            取消
          </view>
          <view class="center primary-color"
                @click="onCall">
            拨通电话
          </view>
        </view>
        <!-- 普通用户 -->
        <view v-else
              class="member">
          <view v-for="(item,index) in btns"
                :key="index"
                class="btn-item center ft34 color-333"
                @click="onAction(index)">
            <text>{{item}}</text>
          </view>
        </view>
      </view>
    </u-popup>
  </view>
</template>
<script>
import { avatarUrl } from '@/utils/tools'
export default {
  name: 'Item',
  methods: {
    onAction (index) {
      this.show = false
      if (index === 0) {
        this.onCall()
        return
      }
      if (index === 1) {
        uni.navigateTo({
          url: '/pages/think-tank/message/index'
        })
      }
    },
    // 打电话
    onCall () {
      this.show = false
      uni.makePhoneCall({
        phoneNumber: this.item.contactPhone
      })
    },
    avatarUrl,
  },
  props: {
    itemInfo: Object
  },
  watch: {
    itemInfo: {
      handler: function (val) {
        const { isLeaveComments, isVisit, isTelephoneCommunication } = val
        const serviceType = []
        if (isLeaveComments) {
          serviceType.push('留言回复')
        }
        if (isVisit) {
          serviceType.push('实地走访')
        }
        if (isTelephoneCommunication) {
          serviceType.push('电话沟通')
        }
        this.item = {
          ...val,
          serviceType,
          serviceTypeName: serviceType.join('、'),
        }
      },
      immediate: true
    }
  },
  data () {
    return {
      btns: ['拨通电话', '留言', '取消'],
      isTalents: uni.getStorageSync('isTalents'),
      show: false,
      item: {},
      formList: []
    }
  },
}
</script>
<style lang='scss' scoped>
.line1 {
  line-height: 1;
}
.item-wrap {
  width: 100%;
  padding: 24rpx;
  box-shadow: 3rpx 2rpx 12rpx 8rpx rgba(17, 17, 17, 0.03);
  border-radius: 8rpx;
  .user-img {
    width: 80rpx;
    height: 80rpx;
    border-radius: 50%;
  }
  .skilled {
    width: 500rpx;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .contact-btn {
    right: 24rpx;
    bottom: 24rpx;
    position: absolute;
    border: 2rpx solid #dedede;
    border-radius: 26rpx;
    width: 128rpx;
    height: 52rpx;
  }
  .label {
    right: 0;
    top: 20rpx;
    position: absolute;
    width: 108rpx;
    height: 40rpx;
    border-radius: 6rpx;
    background: #ddf9d7;
    color: #51ac3d;
  }
  .contact-dialog {
    .container {
      padding-top: 58rpx;
      .expert {
        margin-top: 50rpx;
        border-top: 2rpx solid #eaeaea;
        height: 88rpx;
        view {
          width: 50%;
          &:last-child {
            color: #e32417;
            border-left: 2rpx solid #eaeaea;
          }
        }
      }
      .member {
        margin-top: 36rpx;
        .btn-item {
          height: 88rpx;
          border-top: 2rpx solid #eaeaea;
          &:first-child {
            color: #e32417;
          }
        }
      }
    }
  }
}
</style>