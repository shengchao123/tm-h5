<template>
  <div>
    <div class="head-map-from mt20 pl30 pr30">
      <div class="route-select between-row center-align"
           @click="onShowRouteSelect">
        <div class="flex1 center-align">
          <div class="ft30 mr24 medium">行程路线</div>
          <div class="flex1 color-666 ellipsis-text name">{{selectRouteItem.name}}</div>
        </div>
        <svg-icon v-if="!isDetail"
                  icon="icon_xiangyoujiantou"
                  class="ft20 ml16"
                  style="color:  #C4C4C4"></svg-icon>
      </div>
      <div class="map">
        <Map :mapInitObj="mapInitObj"
             mapClass="mapH400"
             :points="usePoints"></Map>
      </div>
      <div class="pt20 pb20 ft26 color-666 bb">{{pointsName}}</div>
    </div>
    <select-route-pop ref="selectRoutePop"
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
    onShowRouteSelect () {
      if (this.isDetail) return
      this.$refs.selectRoutePop.show()
    },
    onRouteItem (routeItem) {
      const { journeyLineId } = routeItem
      this.selectRouteItem = routeItem
      this.$emit('update:journeyLineId', journeyLineId)
      if (!routeItem.journeyLineId) {
        return uni.navigateTo({ // 去自定义线路
          url: ''
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
        this.points = res.content
      })
    },
  },
  props: {
    isDetail: Boolean,
    journeyLineId: [String, Number],
    journeyPointList: Array
  },
  data () {
    return {
      journeyLineIdCache: null,
      selectRouteItem: {},
      mapInitObj: Object.freeze({
        resizeEnable: true,
        zoom: 9, // 级别
        center: [119.365056, 30.194302]
      }),
      points: [
        {
          code: '',
          journeyPointId: 0,
          lat: 30.224302,
          lng: 119.005056,
          name: '第一个',
          regionsCode: '',
          regionsName: '临安区喜欢睡了看都就方老师',
          type: '01',
          typeName: '景区',
          url: 'http://downsc.chinaz.net/Files/DownLoad/sound1/201906/11582.mp3'
        },
        {
          code: '',
          journeyPointId: 0,
          lat: 30.124302,
          lng: 119.165056,
          name: '第2个',
          regionsCode: '',
          regionsName: '',
          type: '',
          typeName: '',
          url: 'http://downsc.chinaz.net/Files/DownLoad/sound1/201906/11582.mp3'
        },
        {
          code: '',
          journeyPointId: 0,
          lat: 30.224302,
          lng: 119.365056,
          name: '第3个',
          regionsCode: '',
          regionsName: '',
          type: '',
          typeName: '',
          url: 'http://downsc.chinaz.net/Files/DownLoad/sound1/201906/11582.mp3'
        },
        {
          code: '',
          journeyPointId: 0,
          lat: 30.274302,
          lng: 119.765056,
          name: '第4个',
          regionsCode: '',
          regionsName: '',
          type: '',
          typeName: '',
          url: 'http://downsc.chinaz.net/Files/DownLoad/sound1/201906/11582.mp3'
        }
      ]
    }
  },
  computed: {
    pointsName () {
      return this.points.map(el => el.name).join(' - ')
    },
    usePoints () {
      return this.journeyPointList || this.points
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
}
</style>