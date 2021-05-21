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
      // 绘制图标
      this.points.forEach((item, index) => {

        const _img = index === this.currentIndex ? 'party_l.gif' : 'party.png'
        const _WH = index === this.currentIndex ? LWH : MWH

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
        resizeEnable: true,
        zoom: 9, // 级别
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
