<template>
  <u-popup v-model="isShow"
           border-radius="30"
           height="834"
           mode="bottom">
    <view class="popup">
      <view class="tc title">
        <text class="ft34 medium">选择行程线路</text>
        <svg-icon icon="icon_cha"
                  class="color-999 ft24 close"
                  @click="hide"></svg-icon>
      </view>
      <scroll-view class="list pl30 pr30"
                   scroll-y>
        <view v-for="(item, index) in list"
              :key="index"
              class="item between-row center-align"
              :class="item.journeyLineId === selectedId && 'selected'"
              @click="onItem(item)">
          <text class="ft28">{{item.name}}</text>
          <svg-icon v-if="item.journeyLineId === selectedId"
                    icon="icon_duihao"
                    class="ft28 mt4"></svg-icon>
        </view>
      </scroll-view>
    </view>
  </u-popup>
</template>
<script>

export default {
  methods: {
    show () {
      this.isShow = true
    },
    hide () {
      this.isShow = false
    },
    onItem (item) {
      this.$emit('update:selectedId', item.journeyLineId)
      this.$emit('onRouteItem', item)
      this.hide()
    },
    getJourneyLineListByOrgId () {
      this.$api.getJourneyLineListByOrgId().then(res => {
        if (res.isError) return this.$msg(res.message)
        const list = res.content
        if (this.needCustomize) {
          list.push({
            journeyLineId: null,
            playTime: '01',
            name: '自定义',
          })
        }
        this.list = list
      })
    }
  },
  props: {
    selectedId: String,
    needCustomize: Boolean
  },
  data () {
    return {
      isShow: false,
      list: [
        {
          "journeyLineId": '23',
          "name": "星创党建示范带",
          "playTime": "01",
        },
        {
          "journeyLineId": '123',
          "name": "“龙门秘境”乡村振兴之路",
          "playTime": "01",
        },
        {
          "journeyLineId": '4321',
          "name": "乡村蝶变·振兴之旅",
          "playTime": "01",
        },
        {
          "journeyLineId": '43210',
          "name": "党建引领农村产业融合发展",
          "playTime": "01",
        },
        {
          "journeyLineId": '413210',
          "name": "共同富裕践行区党建示范带",
          "playTime": "01",
        },
        {
          "journeyLineId": '62340',
          "name": "“琴山蓝湾”党建联盟",
          "playTime": "01",
        }
      ]
    }
  },
  created () {
    this.getJourneyLineListByOrgId()
  }
}
</script>
<style lang='scss' scoped>
.popup {
  .title {
    position: relative;
    line-height: 84rpx;
    border-bottom: solid 1rpx #ddd;
    .close {
      position: absolute;
      top: 32rpx;
      right: 32rpx;
      color: #c7c7c7;
    }
  }
  .list {
    max-height: 680rpx;
    overflow: scroll;
    .item {
      height: 99rpx;
      border-bottom: solid 3rpx #eaeaea;
    }
    .selected {
      color: #e32417;
    }
  }
}
</style>