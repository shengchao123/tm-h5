<template>
  <div class='tabbar-mine column'>

    <div class="info-wrap">
      <div class="top-info between-row">
        <img :src="$fileHost + userInfo.avatar"
             v-if="userInfo.avatar">

        <div class="name-wrap ml20 column between-row flex1">
          <div class="center-align">
            <div class="ft32 bold">{{userInfo.nick}}</div>
            <template v-for="(item, index) in userInfo.labelList">
              <div class="label ft22 center ml16"
                   v-if="index < 3"
                   :key="index">{{item}}</div>
            </template>
          </div>
          <div class="ft24 ">
            <div :class="userInfo.name ? '': 'color-999'">{{userInfo.name || '暂未实名'}}</div>
            <div class="color-999">{{userInfo.orgName}}</div>
          </div>
        </div>

        <div class="row color-666 ft40">
          <div class="relative badge ft22 mr48">
            <u-badge type="error"
                     :is-center="true"
                     size="mini"
                     :count="userInfo.messageQuantity"></u-badge>
            <SvgIcon icon="icon_dibudaohanglan-"
                     class="ft40"></SvgIcon>
          </div>
          <SvgIcon icon="icon_shezhi"></SvgIcon>
        </div>
      </div>

      <div class="count-wrap between-row">
        <div class="item center column">
          <div class="count ft34 bold">{{userInfo.redHeartBalance}}</div>
          <div class="count ft24 color-666 mt12">我的红心</div>
        </div>

        <div class="item center column">
          <div class="count ft34 bold">{{userInfo.activeQuantity}}</div>
          <div class="count ft24 color-666 mt12">我的活动</div>
        </div>
      </div>
    </div>

    <div class="my-journey flex1 column">
      <div class="ft28 bold mb24">我的行程</div>

      <scroll-view scroll-y="true"
                   v-if="journeies.length > 0"
                   class="scroll-Y">
        <MyJourneyItem v-for="(item, index) in journeies"
                       :key="index"
                       :item="item"></MyJourneyItem>
      </scroll-view>

      <u-empty v-else
               src="@/static/empty/no-journey.png"></u-empty>

    </div>

  </div>
</template>

<script>
import MyJourneyItem from '@/pages/mine/components/MyJourneyItem'
export default {
  name: 'index',
  methods: {
    // 获取用户信息
    getMemberPersonalInfo () {
      this.$api.getMemberPersonalInfo().then(res => {
        if (res.isError) return
        this.userInfo = res.content
      })
    },
    // 获取行程分页
    getMyJourneyItineraryPage () {
      this.$api.getMyJourneyItineraryPage().then(res => {
        if (res.isError) return
        this.journeies = res.content.items
      })
    }
  },
  components: { MyJourneyItem },
  data () {
    return {
      userInfo: {},
      journeies: []
    }
  },
  onShow () {
    if (this.$notMember()) return this.$goLogin()
    this.getMemberPersonalInfo()
    this.getMyJourneyItineraryPage()
  }
}
</script>

<style lang='scss' scoped>
.tabbar-mine {
  .info-wrap {
    border-bottom: 20rpx solid #eaeaea;
    padding: 40rpx 32rpx;
    .top-info {
      img {
        width: 100rpx;
        height: 100rpx;
        border-radius: 50rpx;
      }
    }
  }
  .count-wrap {
    padding: 42rpx 163rpx 0;
  }
  .my-journey {
    padding: 32rpx 32rpx 0;
  }

  .label {
    height: 36rpx;
    padding: 0 16rpx;
    border: 1px solid #518cfc;
    color: #518cfc;
    border-radius: 18rpx;
  }

  .scroll-Y {
    max-height: calc(100vh - 44px - 370rpx - 50px - 60rpx);
  }
}
</style>
