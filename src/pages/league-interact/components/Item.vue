<template>
  <view class="item-wrap bg-white relative">
    <view class="top center-align">
      <text class="title ft32 color-333 medium pr16">{{item.name}}</text>
      <svg-icon :icon="getStatusInfo.iconClass"
                :style="{color:getStatusInfo.color}"
                class="status-icon"></svg-icon>
    </view>
    <view class="form-list mt32">
      <view v-for="(formItem,index) in formList"
            :key="index"
            class="form-item ft26 center-align">
        <svg-icon :icon="formItem.icon"
                  class="ft24 color-999"></svg-icon>
        <text class="pl8 color-999">{{formItem.name}}</text>
        <view v-if="formItem.keyName === 'time'">
          <text>{{getTime}}</text>
        </view>
        <text v-else
              class="color-333">{{item[formItem.keyName]}}{{formItem.keyName === 'numberLimit' ? '人' : ''}}</text>
      </view>
    </view>
    <view class="btn center"
          v-if="item.status !== '02'"
          @click.stop="onToRoute(item)">
      {{getStatusInfo.btnText}}
    </view>
  </view>
</template>
<script>
import moment from "moment"
import { statusMap } from '@/utils/enum.js'
export default {
  name: 'item',
  methods: {
    onToRoute (item) {
      const url = item.status === '01' ? `/pages/home/stroke-order/signUp?id=${item.id}&type=activity` : ''
      uni.navigateTo({
        url
      })
    }
  },
  props: {
    item: Object
  },
  data () {
    return {
      formList: Object.freeze([
        {
          icon: 'icon_shijian',
          name: '时间：',
          keyName: 'time',
        },
        {
          icon: 'icon_lianmeng',
          name: '组织：',
          keyName: 'orgName'
        },
        {
          icon: 'icon_renshu',
          name: '报名：',
          keyName: 'numberLimit'
        }
      ]),
      // 状态 (01:报名中; 02:进行中; 03:已结束)
      statusMap
    }
  },
  computed: {
    getTime () {
      const { startTime, endTime } = this.item
      const sDay = moment(startTime).format('YYYY-MM-DD')
      const eDay = moment(endTime).format('YYYY-MM-DD')
      const eTime = moment(endTime).format('HH:mm')
      const newStartTime = moment(startTime).format('YYYY-MM-DD HH:mm')
      const newEndTime = moment(endTime).format('YYYY-MM-DD HH:mm')
      if (sDay === eDay) {
        return newStartTime + '~' + eTime
      }
      return newStartTime + '~' + newEndTime
    },
    getStatusInfo () {
      return this.statusMap.get(this.item.status)
    }
  },
  created () { },
}
</script>
<style lang='scss' scoped>
.item-wrap {
  width: calc(100% - 60rpx);
  margin: 0 auto 20rpx;
  box-shadow: 3rpx 2rpx 12rpx 8rpx rgba(17, 17, 17, 0.03);
  border-radius: 8rpx;
  padding: 30rpx;
  .top {
    height: 32rpx;
    line-height: 1.5;
    .title {
      width: calc(100% - 88rpx);
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    .status-icon {
      font-size: 88rpx;
    }
  }
  .form-list {
    line-height: 1;
    .form-item + .form-item {
      margin-top: 24rpx;
    }
  }
  .btn {
    position: absolute;
    right: 30rpx;
    bottom: 20rpx;
    padding: 0 24rpx;
    height: 56rpx;
    border: 1rpx solid #e32417;
    border-radius: 44rpx;
    color: #e32417;
    line-height: 56rpx;
  }
}
</style>