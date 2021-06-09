<template>
  <div>
    <div class="head-map-from mt20 pl30 pr30">
      <div class="route-select between-row center-align mb4"
           @click="onShowRouteSelect">
        <div class="flex1 center-align">
          <div class="ft30 mr24 bold">行程路线</div>
        </div>
        <div v-if="!isDetail"
             class="center-align">
          <span class="ft24"
                style="color: #518CFC;">自定义行程</span>
          <svg-icon icon="icon_xiangyoujiantou"
                    class="ft20 ml8"
                    style="color:  #C4C4C4"></svg-icon>
        </div>
        <span v-else></span>
      </div>
      <div class="flex1 ft30 ellipsis-text name">{{selectRouteItem.name || journeyLineName}}</div>
      <div class="pt14 pb20 ft26 color-666 bb">{{pointsName}}</div>
      <div class="map relative">
        <Map ref="map"
             :mapInitObj="mapInitObj"
             mapClass="mapH400"
             :points="usePoints"></Map>
        <div class="reset-btn center"
             @click="resetMap">
          <span class="iconfont icon_suoding ft32 color-666"></span>
        </div>
      </div>
    </div>
    <select-route-pop ref="selectRoutePop"
                      :isDetail="isDetail"
                      :needCustomize="true"
                      :selectedId.sync="journeyLineIdCache"
                      @onRouteItem="onRouteItem"></select-route-pop>
  </div>
</template>
<script>
import Map from '@/pages/components/Map.vue'
import SelectRoutePop from './SelectRoutePop.vue'

export default {
  methods: {
    resetMap () {
      const mapEl = this.$refs.map
      mapEl && mapEl.resetMap()
    },
    onShowRouteSelect () {
      if (this.isDetail) return
      this.$refs.selectRoutePop.show()
    },
    onRouteItem (routeItem) {
      const { journeyLineId } = routeItem
      this.selectRouteItem = routeItem
      this.$emit('update:journeyLineId', journeyLineId)
      this.$emit('journeyLineChange', routeItem)
      if (!routeItem.journeyLineId) {
        this.points = []
        return uni.navigateTo({ // 去自定义线路
          url: '/pages/original-travel/stroke-order/GetRedPoints'
        })
      }
      this.getJourneyPointListByJourneyId(routeItem.journeyLineId)
    },
    getJourneyPointListByJourneyId (journeyLineId) {
      const params = {
        journeyLineId,
      }
      this.$api.getJourneyPointListByJourneyId(params).then(res => {
        if (res.isError) return this.$msg(res.message)
        this.points = res.content || []
      })
    },
  },
  props: {
    isDetail: Boolean,
    journeyLineName: String,
    journeyLineId: [String, Number],
    journeyPointList: {
      type: Array,
      default: () => []
    }
  },
  data () {
    return {
      journeyLineIdCache: this.journeyLineId,
      selectRouteItem: {},
      mapInitObj: Object.freeze({
        resizeEnable: true,
        zoom: 9, // 级别
        zooms: [9, 19],
        center: [119.365056, 30.194302]
      }),
      points: []
    }
  },
  computed: {
    pointsName () {
      return this.usePoints.map(el => el.name).join(' - ')
    },
    usePoints () {
      if (!this.$isEmpty(this.points)) return this.points
      return this.journeyPointList
    }
  },
  components: { Map, SelectRoutePop }
}
</script>
<style lang='scss' scoped>
.head-map-from {
  background: #fff;
  .route-select {
    height: 74rpx;
  }
  .name {
    width: 480rpx;
  }
  .map {
    .reset-btn {
      position: absolute;
      bottom: 15rpx;
      left: 15rpx;
      width: 64rpx;
      height: 64rpx;
      background: #ffffff;
      box-shadow: 0 -6rpx 17rpx 0 rgba(0, 0, 0, 0.1);
      border-radius: 12rpx;
    }
  }
}
</style>