<template>
  <view class="item-wrap bg-white relative">
    <view class="center-align">
      <!-- <image :src="avatarUrl(item.photo)" -->
      <!-- <image :src="avatarUrl('image/logo/2021061514122745352115422332928.png')"
             alt=""
             mode="scaleToFill"
             class="mr16 user-img">
      </image> -->
      <view class="mr16 user-img"
            :style="{backgroundImage: `url(${avatarUrl(item.photo)})`}"></view>
      <view class="ml16 column">
        <text class="ft28 color-333 medium">{{item.name}}</text>
        <text class="ft22 color-999 pt12 skilled">{{titleList}}</text>
      </view>
    </view>
    <view class="ft26">
      <view class="mt24 flex line1">
        <text class="color-999">擅长：</text>
        <text class="color-333 flex1">{{item.specialty}}</text>
      </view>
      <view class="mt24 line1">
        <text class="color-999">服务：</text>
        <text class="color-333">{{item.serviceTypeName}}</text>
      </view>
    </view>
    <view @click.stop="onContact"
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
          <view v-for="(btnItem,index) in btns"
                :key="index"
                class="btn-item center ft34 color-333"
                @click="onAction(index)">
            <text>{{btnItem}}</text>
          </view>
        </view>
      </view>
    </u-popup>
    <u-popup class="contact-dialog tc"
             v-model="noTimeShow"
             mode="center"
             border-radius="24"
             width="540">
      <view class="container column">
        <view class="column center-align color-333 ft32 medium">
          <text class="line1">不在电话服务时间内</text>
          <text v-if="!isTalents">可进行问题留言</text>
        </view>
        <!-- 专家 -->
        <view v-if="isTalents"
              class="no-time pt16">
          <text class="line1 color-999 ft26">时间：{{noTimes}}</text>
          <view class="btn center"
                @click="noTimeShow = false">
            <text class="color-666 medium">我知道了</text>
          </view>
        </view>
        <!-- 普通用户 -->
        <view v-else
              class="expert flex">
          <view class="color-333 ft32 center"
                @click="noTimeShow = false">
            取消
          </view>
          <view class="center primary-color"
                @click="onMessage">
            留言
          </view>
        </view>
      </view>
    </u-popup>
  </view>
</template>
<script>
import { avatarUrl } from '@/utils/tools'
import { filterWeek } from './filter.js'
export default {
  name: 'Item',
  methods: {
    filterWeek,
    onContact () {
      // 判断是否登录逻辑
      if (this.$notMember()) return this.$goLogin();
      const { isTelephoneCommunication } = this.item
      if (isTelephoneCommunication) {
        this.show = true
        return
      }
      this.onMessage()
    },
    onAction (index) {
      this.show = false
      this.noTimeShow = false
      if (index === 0) {
        this.onCall()
        return
      }
      if (index === 1) {
        this.onMessage()
      }
    },
    // 将时间转成数字 与当前时间比较
    filterTimeToNumber (time) {
      return +(time.split(':').join(''))
    },
    // 判断当前时间是否在范围内
    isInTimes () {
      const { openDayList, startTime, endTime } = this.item
      const currentWeek = this.$moment().weekday() + 1
      const currentTime = this.$moment().format("HH:mm")
      const numStart = this.filterTimeToNumber(startTime)
      const numEnd = this.filterTimeToNumber(endTime)
      const numCurrent = this.filterTimeToNumber(currentTime)
      if (!openDayList.includes(currentWeek)) return false
      if (numCurrent < numStart) return false
      if (numCurrent > numEnd) return false
      return true
    },
    // 打电话
    onCall () {
      const { openDayList, startTime, endTime } = this.item
      this.show = false
      if (!this.isInTimes()) {
        this.noTimes = this.filterWeek(openDayList) + '，' + startTime + '～' + endTime
        this.$nextTick(() => {
          this.noTimeShow = true
        })
        return
      }
      uni.makePhoneCall({
        phoneNumber: this.item.contactPhone
      })
    },
    // 留言
    onMessage () {
      uni.navigateTo({
        url: `/pages/think-tank/message/index?id=${this.item.id}`
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
      noTimes: '',
      btns: ['拨通电话', '留言', '取消'],
      isTalents: JSON.parse(uni.getStorageSync('isTalents')),
      show: false,
      noTimeShow: false,
      item: {},
      formList: []
    }
  },
  computed: {
    titleList () {
      const { item } = this
      if (this.$isEmpty(item.titleList)) return ''
      return item.titleList.join('、')
    },
  }
}
</script>
<style lang='scss' scoped>
.line1 {
  line-height: 1;
}
.no-time {
  .btn {
    width: 240rpx;
    margin: 44rpx auto 32rpx;
    height: 70rpx;
    border: 1rpx solid #d2d2d2;
    border-radius: 49rpx;
  }
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
    background-size: cover;
    background-position: 50% 50%; /*图片上下左右居中*/
    background-repeat: no-repeat;
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
    border-radius: 6rpx 0 0 6rpx;
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