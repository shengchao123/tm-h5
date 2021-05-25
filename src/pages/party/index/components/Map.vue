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
    drawMarker () {
      const _temPoints = JSON.parse(JSON.stringify(this.points))

      const _currentPoint = _temPoints.splice(this.currentIndex, 1)[0]
      _temPoints.push(_currentPoint)

      const _last = _temPoints.length - 1
      // 绘制图标
      _temPoints.forEach((item, index) => {

        const _img = index === _last ? 'party_l.gif' : 'party.png'
        const _WH = index === _last ? LWH : MWH

        const Icon = new AMap.Icon({
          size: new AMap.Size(_WH.W, _WH.H),
          image: require(`@/static/map/${_img}`),
          imageSize: new AMap.Size(_WH.W, _WH.H)
        })

        // 绘制标记气球
        const marker = new AMap.Marker({
          position: new AMap.LngLat(item.lng, item.lat),
          map: this.$amap,
          offset: new AMap.Pixel(-_WH.W / 2, -_WH.H),
          icon: Icon,
          touchZoom: false
        })
        // 设置 marker 绑定的数据
        marker.setExtData(index)
        // 点击方法绑定
        marker.on('click', this.markerClick)
      })
    },

    markerClick (e) {


      const index = e.target.getExtData()

      if (this.currentIndex === index) return

      this.$emit('changeIndex', index)

      this.$nextTick(() => {
        this.$amap.clearMap()
        this.drawDistrict()
        this.drawMarker()
      })
    },
  },
  watch: {
    points () {
      this.$amap.clearMap()
      this.drawMarker()
    }
  },
  props: {
    points: Array,
    currentIndex: [Number, String]
  },
  data () {
    return {
      mapInitObj: Object.freeze({
        dragEnable: false,
        zoomEnable: false,
        resizeEnable: true,
        zoom: 9, // 级别
        zooms: [9, 19],
        center: [119.365056, 30.204302]
      })
    }
  },
  mounted () {
    this.drawMarker()
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
