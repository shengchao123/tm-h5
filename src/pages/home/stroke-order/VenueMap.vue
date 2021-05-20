
<template>
  <div class='venue-map-wrap'>
    <div id="map"></div>
  </div>
</template>

<script>

import AMap from 'AMap'
import Vue from 'vue'
export default {
  name: 'VenueMap',
  methods: {
    markDragend (e) {
      const that = this
      AMap.plugin('AMap.Geocoder', function () {
        var geocoder = new AMap.Geocoder({})
        geocoder.getAddress(e.lnglat, function (status, result) {
          if (status === 'complete' && result.regeocode) {
            var address = result.regeocode.formattedAddress;
            console.log(address)
            that.showInfoWindow(address)
          } else {
            log.error('根据经纬度查询地址失败')
          }
        })
      })
    },
    showInfoWindow (address) {
      const windowPosition = { ...this.$marker.getPosition() }
      const windowOffset = { ...this.$marker.getOffset() }

      windowOffset.y -= 10
      windowOffset.x = 9

      var _this = this
      var MyComponent = Vue.extend({
        template: `<div class='map-address-content'>${address || ''}</div>`,
        methods: {
          onOpenGuide () {
            _this.showGuideActionSheet(_point)
          }
        }
      })
      // 将新创建的子组件进行挂载
      var component = new MyComponent().$mount()
      // 将窗体内容添加到infoWindow中
      var infoWindow = new AMap.InfoWindow({
        isCustom: true, // 使用自定义窗体
        content: component.$el, // 传入 dom 对象，或者 html 字符串
        offset: windowOffset,
        autoMove: false
      })
      // 打开窗体
      infoWindow.open(this.$amap, windowPosition)
    },

    // 绘制 marker
    drawMarkder () {
      const marker = new AMap.Marker({
        position: this.$amap.getCenter(),
        map: this.$amap,
        draggable: true,
        icon: this.getMarkderIcon(),
        touchZoom: false
      })
      marker.on('dragend', this.markDragend)
      return marker
    },
    // 绘制坐标 icon
    getMarkderIcon () {
      return new AMap.Icon({
        size: new AMap.Size(31, 31),
        image: require('@/static/map/location_select.png'),
        imageSize: new AMap.Size(31, 31)
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
      zoom: 10, // 级别
      center: [119.365056, 30.034302]
    })
    this.$amap = new AMap.Map('map', mapInitObj)
    this.$marker = this.drawMarkder()
  }
}
</script>

<style lang='scss' scoped>
.venue-map-wrap {
  #map {
    width: 100vw;
    height: 100vh;
  }
}
</style>
