<template>
  <view v-if="activityList.length > 0">
    <view class="line"></view>
    <view class="pt30">
      <view class="between-row pl30 pr30">
        <view class="bold ft32">活动提醒</view>
        <view v-if="activityList.length > 0"
              class="color-999 ft24">{{ current }}/{{ activityList.length }}</view>
      </view>
      <view>
        <swiper class="swiper mt24"
                :class="swiperClass"
                :duration="1000"
                :circular="true"
                @change="getSwiper">
          <swiper-item v-for="(item, index) in activityList"
                       :key="index"
                       class="swiper-item">
            <view class="activity-item mt16 ml30 mr30"
                  @click="onActivityDetail(item)">
              <view class="ft28 color-333 center-align">
                <div>{{ item.name }}</div>
                <svg-icon :icon="activityStatus(item.status)"
                          :class="activityClass(item.status)"
                          class="ml8 activity-status"></svg-icon>
              </view>
              <view class="between-row ft24 color-999 mt20">
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
const activityStatus = new Map([
  ['01', 'icon_baomingzhong'],
  ['02', 'icon_jinhangzhong1'],
  ['03', 'icon_yijieshu']
])
const activityClass = new Map([
  ['01', 'activity-ing'],
  ['02', 'activity-in'],
  ['03', 'activity-over']
])
export default {
  data () {
    return {
      activityList: [],
      current: 1
    };
  },
  methods: {
    getActivityList () {
      this.$api.getJourneyActivityList().then((res) => {
        if (res.isError) return this.$msg(res.message);
        const cont = res.content
        this.activityList = cont.length > 0 ? cont.slice(0, 5) : []
      });
    },
    getSwiper (e) {
      this.current = e.detail.current + 1;
    },
    // 跳转活动详情
    onActivityDetail (item) {
      uni.navigateTo({ url: `/pages/league-interact/detail/index?id=${item.id}` })
    }
  },
  computed: {
    // 活动状态
    activityStatus () {
      return (status) => {
        return activityStatus.get(status)
      }
    },
    // 活动样式
    activityClass () {
      return (status) => {
        return activityClass.get(status)
      }
    },
    // 轮播样式
    swiperClass () {
      if (this.activityList.length === 1) {
        return 'swiper-one'
      } else {
        return 'swipers'
      }
    }
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
  .activity-item {
    padding: 22rpx 24rpx;
    background: #ffffff;
    box-shadow: 3rpx 2rpx 12rpx 8rpx rgba(17, 17, 17, 0.03);
    border-radius: 6rpx;
    .activity-status {
      width: 88rpx;
      height: 32rpx;
    }
  }
}
.swiper-one {
  /deep/.uni-swiper-slide-frame {
    width: 100% !important;
  }
}
.swipers {
  /deep/.uni-swiper-slide-frame {
    width: 70% !important;
  }
  .activity-item {
    width: 490rpx;
  }
}
.activity-in {
  color: rgb(255, 179, 25);
}
.activity-ing {
  color: rgb(245, 64, 0);
}
.activity-over {
  color: rgb(153, 153, 153);
}
</style>
