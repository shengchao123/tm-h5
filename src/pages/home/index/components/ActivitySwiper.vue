<template>
  <view>
    <view class="line"></view>
    <view class="pt30">
      <view class="between-row pl30 pr30">
        <view class="bold ft32">活动提醒</view>
        <view v-if="ActivityList.length > 0">{{ current }}/{{ ActivityList.length }}</view>
      </view>
      <view>
        <swiper class="swiper mt24"
                :duration="2000"
                @change="getSwiper">
          <swiper-item v-for="(item, index) in ActivityList"
                       :key="index"
                       class="swiper-item">
            <view class="activity-item mt16 ml30 mr30">
              <view class="ft28 color-333">{{ item.name
                }}<span class="activity-status">{{
                  item.statusName
                }}</span></view>
              <view class="between-row ft24 color-999">
                <view>{{ item.orgName }}</view>
                <view>{{ $moment(item.endTime).format("YYYY-MM-DD") }}</view>
              </view>
            </view>
          </swiper-item>
        </swiper>
      </view>
    </view>
  </view>
</template>
<script>
export default {
  data () {
    return {
      ActivityList: {},
      current: 1,
    };
  },
  methods: {
    getActivityList () {
      this.$api.getJourneyActivityList().then((res) => {
        if (res.isError) return this.$msg(res.message);
        this.ActivityList = res.content.slice(0, 5);
      });
    },
    getSwiper (e) {
      this.current = e.detail.current + 1;
    },
  },
  created () {
    this.getActivityList();
  },
};
</script>
<style lang="scss" scoped>
.line {
  width: 100%;
  background: #f7f7f7;
  height: 20rpx;
}
.swiper {
  height: 150rpx !important;
  .swiper-item {
    height: 150rpx !important;
  }
}
.activity-item {
  padding: 22rpx 24rpx;
  background: #ffffff;
  box-shadow: 3rpx 2rpx 12rpx 8rpx rgba(17, 17, 17, 0.03);
  border-radius: 6rpx;
  .activity-status {
    width: 88rpx;
    height: 32rpx;
    line-height: 32rpx;
    text-align: center;
    border-radius: 0 8rpx 0 8rpx;
  }
}
.activity-in {
  color: #ff9204;
  border: 1rpx solid #ff9204;
}
.activity-ing {
  color: #e32417;
  border: 1rpx solid #e32417;
}
.activity-over {
  color: #999999;
  border: 1rpx solid #999999;
}
</style>
