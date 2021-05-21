<template>
  <u-popup v-model="isRuleShow"
           mode="center"
           height="546"
           width="540"
           border-radius="6"
           :mask-custom-style="maskCustomStyle">
    <view class="popup-wrap">
      <view class="relative">
        <view class="ft30 popup-title bold pt40">红心获取规则</view>
        <view class="close-btn"
              @click="isRuleShow = false">
          <svg-icon icon="icon_cha"
                    class="ft24 color-999 bold"></svg-icon>
        </view>
      </view>
      <view class="pl32 pr32 pt8 h464">
        <view v-for="(item,index) in contentData"
              :key="index"
              class="between-row ft28 color-333 mt32">
          <text class="bold">{{item.name}}</text>
          <text>+{{item.point}}</text>
        </view>
      </view>
    </view>
  </u-popup>
</template>

<script>
export default {
  name: 'AccessRules',
  methods: {
    show () {
      this.isRuleShow = true
    }
  },
  data () {
    return {
      isRuleShow: false,
      contentData: Object.freeze([
        {
          name: '打卡',
          point: 2
        },
        {
          name: '分享',
          point: 5
        },
        {
          name: '评价',
          point: 10
        },
        {
          name: '参与行程',
          point: 5
        },
        {
          name: '点赞',
          point: 2
        },
        {
          name: '评论',
          point: 2
        }
      ])
    }
  },
  computed: {
    maskCustomStyle () { // 遮罩层自定义样式
      const temStyle = {
        backgroundColor: 'rgba(0, 0, 0, 0.40)'
      }
      return temStyle
    }
  }
}
</script>

<style lang='scss' scoped>
.h464 {
  height: 464rpx;
}
.popup-wrap {
  .popup-title {
    text-align: center;
    color: #000;
  }
  .close-btn {
    position: absolute;
    right: 20rpx;
    top: 12rpx;
  }
}
</style>
