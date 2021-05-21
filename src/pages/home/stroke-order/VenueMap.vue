
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
import Vue from 'vue/dist/vue.esm.js'
export default {
  name: 'VenueMap',
  methods: {
    mapDragging (e) {
      const _lnglat = this.$amap.getCenter()
      this.$marker.setPosition(_lnglat)
    },
    mapMoveend (e) {
      const _lnglat = this.$amap.getCenter()
      this.$amap.clearMap()
      this.$marker = this.drawMarkder()

      AMap.plugin('AMap.Geocoder', function () {
        var geocoder = new AMap.Geocoder({})
        geocoder.getAddress(_lnglat, function (status, result) {
          if (status === 'complete' && result.regeocode) {
            var address = result.regeocode.formattedAddress
          }
        })
      })
    },
    // 绘制 marker
    drawMarkder () {
      const marker = new AMap.Marker({
        position: this.$amap.getCenter(),
        map: this.$amap,
        animation: 'AMAP_ANIMATION_DROP',
        offset: new AMap.Pixel(-26 / 2, -31),
        icon: this.getMarkderIcon(),
        touchZoom: false
      })
      marker.on('dragend', this.markDragend)
      return marker
    },
    // 绘制坐标 icon
    getMarkderIcon () {
      return new AMap.Icon({
        size: new AMap.Size(40, 67),
        image: require('@/static/map/drag_location.png'),
        imageSize: new AMap.Size(40, 67)
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
      zoom: 10,
      center: [119.365056, 30.034302]
    })
    this.$amap = new AMap.Map('map', mapInitObj)
    this.$amap.on('dragging', this.mapDragging)
    this.$amap.on('moveend', this.mapMoveend)
    this.$marker = this.drawMarkder()
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
