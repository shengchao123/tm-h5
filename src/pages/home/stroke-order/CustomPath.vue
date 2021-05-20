<template>
  <div class='custom-path-wrap relative'>
    <Map :mapInitObj="mapInitObj"
         mapClass="mapVH50"
         :points="points"></Map>

    <div class='content'>
      <NumList v-for="(item, index) in points"
               :currentIndex="index"
               :lastIndex="points.length-1"
               :pointData="{item, index}"
               @onHandlePoints="onHandlePoints"
               :key="index"></NumList>

      <div class="add-point-btn center"
           @click="onAddRedPoints">+添加红色地标</div>
    </div>

    <div class="btn-wrap bt center">
      <div class="btn center bold">确定</div>
    </div>

  </div>
</template>

<script>

import Map from '@/pages/components/Map.vue'
import NumList from './components/NumList'
import { swapArr } from '@/utils/tools.js'

export default {
  name: 'CustomPath',
  methods: {
    onHandlePoints (type, index) {
      if (type === 'del') {
        this.points.splice(index, 1)
        this.$store.commit('travel/CUSTOM_PATH_POINTS', this.points)
        return
      }

      const _targetIndex = type === 'up' ? index - 1 : index + 1
      this.points = swapArr(this.points, index, _targetIndex)

      this.$store.commit('travel/CUSTOM_PATH_POINTS', this.points)
    },
    onAddRedPoints () {
      uni.navigateTo({ url: '/pages/home/stroke-order/GetRedPoints' })
    }
  },
  watch: {
    '$store.state.travel.customPathPoints': {
      handler: function (n, o) {
        console.log(n, o)
        if (n) {
          this.points = JSON.parse(JSON.stringify(n))
        }
      },
      immediate: true
    }
  },
  data () {
    return {
      points: [],
      mapInitObj: {
        resizeEnable: true,
        zoom: 9, // 级别
        center: [119.365056, 30.134302]
      },
    }
  },
  components: { Map, NumList }
}
</script>

<style lang='scss' scoped>
.custom-path-wrap {
  height: calc(100vh - 44px);
  .content {
    padding: 20rpx 0;
    overflow: scroll;
    position: absolute;
    left: 0;
    right: 0;
    bottom: 121rpx;
    height: 42vh;
    background: #ffffff;
    box-shadow: 0 -6rpx 17rpx 0 rgba(0, 0, 0, 0.1);
    border-radius: 30rpx 30rpx 0 0;
    z-index: 99;
    .add-point-btn {
      color: #e32417;
      border: 1px solid #e32417;
      border-radius: 28rpx;
      height: 56rpx;
      width: 208rpx;
      margin-left: 90rpx;
      margin-top: 20rpx;
    }
  }

  .btn-wrap {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    height: 120rpx;
    .btn {
      font-size: 32rpx;
      background: #e32417;
      height: 88rpx;
      width: 690rpx;
      border-radius: 49px;
      color: #ffffff;
    }
  }
}
</style>
