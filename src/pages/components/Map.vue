<template>
  <div class='map-wrap'>
    <div id="map"
         :class="mapClass"></div>
  </div>
</template>

<script>
import mapMixin from '@/mixins/map.js'
import AMap from 'AMap'
let overlays = new AMap.OverlayGroup()
let productOverlays = new AMap.OverlayGroup()
export default {
  name: 'index',
  methods: {
    // 重置缩放及定位
    resetMap () {
      if (!this.$amap) return
      const { zoom, center } = this.mapInitObj
      this.$amap.setZoom(zoom)
      this.$amap.setCenter(center)
    },
    // 绘制图中标记点
    drawMarker () {
      // 绘制图标
      const Icon = new AMap.Icon({
        size: new AMap.Size(23, 38),
        image: require('@/static/map/travel_mark.png'),
        imageSize: new AMap.Size(23, 38)
      })

      const _temPoints = JSON.parse(JSON.stringify(this.points))
      _temPoints.reverse()

      _temPoints.forEach((item, index) => {
        // 绘制标记气球
        const marker = new AMap.Marker({
          position: new AMap.LngLat(item.lng, item.lat),
          map: this.$amap,
          icon: Icon,
          touchZoom: false
        })
        // 绘制气球上数字文字
        const indexText = `<div style="color:#ffffff;width:22px;text-align:center;margin-top:2px;font-size:11px">${_temPoints.length - index}</div>`
        // eslint-disable-next-line no-new
        new AMap.Marker({
          position: new AMap.LngLat(item.lng, item.lat),
          map: this.$amap,
          content: indexText,
          touchZoom: false
        })

        overlays.addOverlay(marker)

        // 设置 marker 绑定的数据
        marker.setExtData(item)
        // 点击方法绑定
        marker.on('click', this.markerClick)
      })
    },
    drawProductMarkers (points) {
      const size = new AMap.Size(20, 25)
      // 绘制图标
      const Icon = new AMap.Icon({
        size,
        image: require('@/static/map/guide_mark_6.png'),
        imageSize: size
      })

      points.forEach((item, index) => {
        // 绘制标记气球lat: 30.270003 lng: 119.606614

        const marker = new AMap.Marker({
          position: new AMap.LngLat(item.lng, item.lat),
          map: this.$amap,
          icon: Icon,
          label: item.journeyPointName,
          touchZoom: false,
          extData: item
        })

        productOverlays.addOverlay(marker)

        // 点击方法绑定
        // marker.on('click', this.productClick)
      })
    },

    productClick (e) {
      const point = e.target.getExtData()
      // 绘制气球上数字文字
      const indexText = `<div style="color:#333333;margin-top:2px;font-size:12px">${point.journeyPointName}</div>`
      // eslint-disable-next-line no-new
      const offsetW = point.journeyPointName.length * 12 / 2 - 2
      const marker = new AMap.Marker({
        position: new AMap.LngLat(point.lng, point.lat),
        map: this.$amap,
        content: indexText,
        offset: new AMap.Pixel(-offsetW, -3),
        touchZoom: false
      })
      productOverlays.addOverlay(marker)
    },

    markerClick (e) {
      if (!this.needClick) return
      const point = e.target.getExtData()
      uni.navigateTo({
        url: `/pages/original-travel/introduction/index?journeyPointId=${point.journeyPointId}`
      })
    },

    // 绘制折线图
    drawPath () {
      // 折线的节点坐标数组，每个元素为 AMap.LngLat 对象
      const path = this.points.map(item => new AMap.LngLat(item.lng, item.lat))
      // 创建折线实例
      const polyline = new AMap.Polyline({
        path: path,
        showDir: true,
        strokeWeight: 5,
        strokeColor: '#FC5E51', // 线条颜色
        lineJoin: 'round', // 折线拐点连接处样式
        map: this.$amap
      })
      overlays.addOverlay(polyline)
      // 将折线添加至地图实例
      this.$amap.add(polyline)
    }
  },
  watch: {
    points () {
      if (overlays) {
        overlays.hide()
        overlays.clearOverlays()
      }
      this.drawMarker()
      this.drawPath()
    }
  },
  created () {
    uni.$on('drawProductMarkers', (data) => {
      if (productOverlays) {
        productOverlays.hide()
        productOverlays.clearOverlays()
      }

      if (!this.$isEmpty(data)) {
        this.drawProductMarkers(data)
      }
    })
  },
  props: {
    points: Array,
    needClick: {
      type: [Boolean, String],
      default: false
    },
    mapClass: {
      type: String
    },
    mapInitObj: {
      type: Object
    }
  },
  mounted () {
    this.drawDistrict()
  },
  mixins: [mapMixin]
}

</script>

<style lang='scss' scoped>
.map-wrap {
  position: relative;
  .mapVH60 {
    width: 100vw;
    height: 60vh;
  }
  .mapH400 {
    width: 92vw;
    height: 400rpx;
  }
  .mapVH50 {
    width: 100vw;
    height: 50vh;
  }
}
</style>
