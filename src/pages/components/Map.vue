<template>
  <div class='map-wrap'>
    <div id="map"
         :class="mapClass"></div>
  </div>
</template>

<script>
import mapMixin from '@/mixins/map.js'
import AMap from 'AMap'

export default {
  name: 'index',
  methods: {
    // 绘制图中标记点
    drawMarker () {
      // 绘制图标
      const Icon = new AMap.Icon({
        size: new AMap.Size(23, 38),
        image: require('@/static/map/travel_mark.png'),
        imageSize: new AMap.Size(23, 38)
      })
      this.points.forEach((item, index) => {
        // 绘制标记气球
        const marker = new AMap.Marker({
          position: new AMap.LngLat(item.lng, item.lat),
          map: this.$amap,
          icon: Icon,
          touchZoom: false
        })
        // 绘制气球上数字文字
        const indexText = `<div style="color:#ffffff;width:22px;text-align:center;margin-top:4px;font-size:11px">${index + 1}</div>`
        // eslint-disable-next-line no-new
        new AMap.Marker({
          position: new AMap.LngLat(item.lng, item.lat),
          map: this.$amap,
          animation: 'AMAP_ANIMATION_DROP',
          content: indexText,
          touchZoom: false
        })
        // 设置 marker 绑定的数据
        marker.setExtData(item)
        // 点击方法绑定
        marker.on('click', this.markerClick)
        // AMap.event.addListener(marker, 'click', this.markerClick)
      })
    },

    markerClick (e) {
      if (!this.needClick) return
      const point = e.target.getExtData()
      sessionStorage.setItem('pointData', JSON.stringify(point))
      uni.navigateTo({ url: '/pages/home/point-guide/index' })
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
      // 将折线添加至地图实例
      this.$amap.add(polyline)
    }
  },
  watch: {
    points () {
      this.drawPath()
      this.drawMarker()
    }
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
    this.drawPath()
    this.drawMarker()
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
    height: 400rpx;
  }
}
</style>
