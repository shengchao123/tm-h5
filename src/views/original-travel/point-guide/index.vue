<template>
  <div class='point-guide-wrap'>
    <div id="map"></div>
    <PoiKeywords class="poi-keywords"></PoiKeywords>
  </div>
</template>

<script>
import mapMixin from '@/mixins/map.js'
import PoiKeywords from '@/views/original-travel/components/PoiKeywords'
import AMap from 'AMap'

const poiSearchType = '停车场|公共厕所|餐饮美食'

export default {
  name: 'index',
  methods: {
    getPoisWithLngLat (point) {
      const that = this
      AMap.plugin('AMap.PlaceSearch', function () {
        var autoOptions = {
          city: '杭州市',
          citylimit: true, // 是否强制限制在设置的城市内搜索
          map: that.$amap,
          autoFitView: true, // 是否自动调整地图视野使绘制的 Marker点都处于视口的可见范围 // 结果列表将在此容器中进行展示。
          type: poiSearchType
        }
        var placeSearch = new AMap.PlaceSearch(autoOptions)
        placeSearch.searchNearBy('', point, 5000, function (status, result) {
          console.log(result.poiList.pois)
          // 搜索成功时，result即是对应的匹配数据
        })
      })
    }
  },
  components: { PoiKeywords },
  data () {
    return {
      mapInitObj: Object.freeze({
        resizeEnable: true,
        zoom: 12, // 级别
        center: [119.365056, 30.204302]
      })
    }
  },
  mixins: [mapMixin]
}
</script>

<style lang='scss' scoped>
.point-guide-wrap {
  position: relative;

  #map {
    width: 375px;
    height: 500px;
  }

  .poi-keywords {
    position: absolute;
    z-index: 999;
    left: 12px;
    top: 12px;
  }
}
</style>
