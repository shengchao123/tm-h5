<template>
  <div class='tabbar-mine column'>

    <div class="info-wrap">
      <div class="top-info between-row">
        <img src="">

        <div class="name-wrap ml20 column between-row flex1">
          <div class="center-align">
            <div class="ft32 bold">{{userInfo.name}}</div>
            <template v-for="(item, index) in userInfo.labelList">
              <div class="label ft22 center ml16"
                   v-if="index < 3"
                   :key="index">{{item}}</div>
            </template>
          </div>
          <div class="ft24 color-999">{{userInfo.orgName}}</div>
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
                   class="scroll-Y">
        <MyJourneyItem v-for="(item, index) in journeies"
                       :key="index"
                       :item="item"></MyJourneyItem>
      </scroll-view>

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
        this.journeies = res.content
      })
    }
  },
  components: { MyJourneyItem },
  data () {
    return {
      userInfo: {
        "activeQuantity": 200,
        "avatar": "",
        "labelList": ['天行者', '管理员'],
        "id": 0,
        "messageQuantity": 300,
        "name": "我是姓名",
        "nick": "",
        "orgName": "杭州商旅在线",
        "phone": "",
        "redHeartBalance": 1233
      },
      journeies: [
        {
          "hasLifeRecord": true,
          "id": 1,
          "isOrganizer": true,
          "name": "我的形成 1",
          "needLifeDocumentary": false,
          "pointQuantity": 4,
          "playTimeName": '1天',
          "setOutTime": 1621339394573,
          "setOutTimeString": ""
        },
        {
          "hasLifeRecord": false,
          "id": 1,
          "isOrganizer": false,
          "name": "我的形成 1",
          "pointQuantity": 2,
          "playTimeName": '2 天',
          "needLifeDocumentary": true,
          "setOutTime": 1621339394573,
          "setOutTimeString": ""
        },
        {
          "hasLifeRecord": false,
          "id": 1,
          "isOrganizer": false,
          "name": "我的形成23",
          "pointQuantity": 3,
          "playTimeName": '2 天',
          "needLifeDocumentary": false,
          "setOutTime": 1621339394573,
          "setOutTimeString": ""
        },
        {
          "hasLifeRecord": false,
          "id": 1,
          "isOrganizer": false,
          "name": "",
          "pointQuantity": 2,
          "needLifeDocumentary": false,
          "setOutTime": 1621339394573,
          "setOutTimeString": ""
        },
        {
          "hasLifeRecord": false,
          "id": 1,
          "isOrganizer": false,
          "name": "",
          "needLifeDocumentary": false,
          "setOutTime": 1621339394573,
          "setOutTimeString": ""
        },
      ]
    }
  },
  onShow () {
    console.log(22222)
  },
  created () {
    console.log(111)
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
    height: calc(100vh - 44px - 370rpx - 50px - 60rpx);
  }
}
</style>
