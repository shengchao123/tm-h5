<template>
  <view class="subsidies-wrap">
    <SubTabs class="tabs"
             @change="changeSubTab"
             :tabs="subTabs"></SubTabs>
    <img class="img"
         :src="imgs[current]"
         @click="onToDetail">
    <view class="apply ft24 white-color center column"
          @click="$refs.selectPop.show()">
      <text class="line1">申请</text>
      <text class="line1"
            style="margin-top:6rpx">补贴</text>
    </view>
    <select-pop ref="selectPop"
                :selectedId.sync="selectedId"
                @onRouteItem="onRouteItem"></select-pop>
  </view>
</template>
<script>
import SubTabs from '@/pages/urban-rural/components/SubTabs'
import SelectPop from './SelectPop.vue'
export default {
  name: 'Subsidies',
  methods: {
    onRouteItem () {
      window.open('http://cdn.sy315.cn/html/%E6%97%A0%E6%84%9F%E8%A1%A5%E8%B4%B4/farmer/submit.html')
    },
    changeSubTab (item) {
      this.current = item.status
    },
    onToDetail (id) {
      uni.navigateTo({ url: '/pages/think-tank/countryside/Detail' })
    },
  },
  data () {
    return {
      selectedId: null,
      current: 0,
      imgs: Object.freeze([
        require('@/static/test/subsidies01.png'),
        require('@/static/test/subsidies02.png'),
        require('@/static/test/subsidies03.png'),
      ]),
      subTabs: [
        {
          status: 0,
          text: '规模种粮',
          width: 152
        },
        {
          status: 1,
          text: '种油补贴',
          width: 152
        },
        {
          status: 2,
          text: '农机购置补贴',
          width: 204
        }
      ]
    }
  },
  created () { },
  components: {
    SubTabs,
    SelectPop
  }
}
</script>
<style lang='scss' scoped>
.line1 {
  line-height: 1;
}
.subsidies-wrap {
  padding-top: 200rpx;
  .img {
    margin-top: -10rpx;
    width: 100vw;
  }
  .tabs {
    position: fixed;
    top: 88rpx;
    width: 100%;
    z-index: 1;
  }
  .apply {
    z-index: 9;
    position: fixed;
    right: 14rpx;
    bottom: 132rpx;
    width: 98rpx;
    height: 98rpx;
    background: #e32417;
    box-shadow: 4rpx 6rpx 8rpx 0 rgba(0, 0, 0, 0.25);
    border-radius: 50%;
  }
}
</style>