
<template>
  <div class='venue-map-wrap'>
    <div id="map"></div>

    <DragPopover showLocation="true"
                 max-top="70"
                 @onLocation="onLocation">

    </DragPopover>
  </div>
</template>
<script>

import AMap from 'AMap'

const MARKER_W_H = { W: 30, H: 50 }

export default {
  name: 'VenueMap',
  methods: {

    // 地图绘制
    drawMap () {
      const that = this
      AMap.plugin('AMap.Geolocation', function () {
        var geolocation = new AMap.Geolocation({
          enableHighAccuracy: true,//是否使用高精度定位，默认:true
          timeout: 1000,          //超过10秒后停止定位，默认：5s
        });
        geolocation.getCurrentPosition(function (status, result) {
          if (status == 'complete') {
            that.$amap.setCenter(result.position)
            that.$marker = that.drawLocationMarkder()

            that.onEvent()
            that.drawLocation()
          }
        })
      })
    },

    // 地图事件监听
    onEvent () {
      this.$amap.on('dragging', this.mapDragging)
      this.$amap.on('moveend', this.mapMoveend)
    },
    // 绘制进来定位点 marker
    drawLocationMarkder () {
      const marker = new AMap.Marker({
        position: this.$amap.getCenter(),
        map: this.$amap,
        offset: new AMap.Pixel(-MARKER_W_H.W / 2, -MARKER_W_H.H),
        icon: this.getMarkderIcon('drag_location')
      })

      return marker
    },

    // 地图拖动，定位点更换定位位置
    mapDragging (e) {
      const _lnglat = this.$amap.getCenter()
      this.$marker.setPosition(_lnglat)
    },
    // 地图拖动完成，重新绘制定位点
    mapMoveend (e) {
      const _lnglat = this.$amap.getCenter()
      this.$amap.clearMap()
      this.$marker = this.drawLocationMarkder()

      AMap.plugin('AMap.Geocoder', function () {
        var geocoder = new AMap.Geocoder({})
        geocoder.getAddress(_lnglat, function (status, result) {
          if (status === 'complete' && result.regeocode) {
            var address = result.regeocode.formattedAddress
          }
        })
      })
    },

    drawLocation () { },

    // 绘制坐标 icon
    getMarkderIcon (img) {
      return new AMap.Icon({
        size: new AMap.Size(MARKER_W_H.W, MARKER_W_H.H),
        image: require(`@/static/map/${img}.png`),
        imageSize: new AMap.Size(MARKER_W_H.W, MARKER_W_H.H)
      })
    },
  },
  data () {
    return {
      $amap: null,
      $marker: null
    }
  },
  mounted () {
    const mapInitObj = Object.freeze({
      resizeEnable: true,
      zoom: 10
    })
    this.$amap = new AMap.Map('map', mapInitObj)
    this.drawMap()
  }
}
</script>

<style lang='scss' scoped>
.venue-map-wrap {
  #map {
    width: 100vw;
    height: 70vh;
  }
}
</style>
