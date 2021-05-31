<template>
  <div class='map-wrap'>
    <div id="map"></div>
  </div>
</template>

<script>
import mapMixin from '@/mixins/map.js'
import AMap from 'AMap'

const LWH = { W: 80, H: 75 }
const MWH = { W: 20, H: 28 }

export default {
  name: 'index',
  methods: {
    // 绘制图中标记点
    drawMarkers () {
      const _temPoints = JSON.parse(JSON.stringify(this.points))
      // 绘制图标
      _temPoints.forEach((item, index) => {
        if (index !== this.currentIndex) {
          this.drawMarker('party.png', MWH, index, item)
        }
      })
      const _point = _temPoints[this.currentIndex]
      this.drawMarker('party_l.gif', LWH, this.currentIndex, _point)
    },

    drawMarker (_img, _WH, index, item) {
      const Icon = new AMap.Icon({
        size: new AMap.Size(_WH.W, _WH.H),
        image: require(`@/static/map/${_img}`),
        imageSize: new AMap.Size(_WH.W, _WH.H)
      })

      // 绘制标记气球
      const marker = new AMap.Marker({
        position: new AMap.LngLat(item.lng, item.lat),
        map: this.$amap,
        offset: new AMap.Pixel(-_WH.W / 2, -_WH.H / 2),
        icon: Icon,
        touchZoom: false
      })
      // 设置 marker 绑定的数据
      marker.setExtData(index)
      // 点击方法绑定
      marker.on('click', this.markerClick)
    },

    markerClick (e) {
      const index = e.target.getExtData()

      if (this.currentIndex === index) return

      this.$emit('changeIndex', index)

      this.$nextTick(() => {
        this.$amap.clearMap()
        this.drawDistrict()
        this.drawMarkers()
      })
    },
  },
  watch: {
    points () {
      this.$amap.clearMap()
      this.drawMarkers()
    }
  },
  props: {
    points: Array,
    currentIndex: [Number, String]
  },
  data () {
    return {
      mapInitObj: Object.freeze({
        resizeEnable: true,
        zoom: 9, // 级别
        zooms: [9, 19],
        center: [119.365056, 30.204302]
      })
    }
  },
  mounted () {
    this.drawDistrict()
    this.drawMarkers()
  },
  mixins: [mapMixin]
}
</script>

<style lang='scss' scoped>
.map-wrap {
  position: relative;
  #map {
    width: 100%;
    height: 560rpx;
  }
}
</style>
