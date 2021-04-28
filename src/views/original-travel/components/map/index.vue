<template>
  <div class='map-wrap'>
    <div id="map"></div>
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
      this.paths.forEach((item, index) => {
        const marker = new AMap.Marker({
          position: new AMap.LngLat(item[0], item[1]),
          map: this.$amap,
          touchZoom: false
        })
        // 设置 marker 绑定的数据
        marker.setExtData(item)
        // 点击方法绑定
        marker.on('click', this.markerClick)
      })
    },
    markerClick (e) {
      const point = e.target.getExtData()
      sessionStorage.setItem('pointData', JSON.stringify(point))
      this.$router.push('/point-guide')
    },

    // 绘制折线图
    drawPath () {
      // 折线的节点坐标数组，每个元素为 AMap.LngLat 对象
      const path = this.paths.map(item => new AMap.LngLat(item[0], item[1]))
      // 创建折线实例
      const polyline = new AMap.Polyline({
        path: path,
        borderWeight: 2, // 线条宽度，默认为 1
        strokeColor: 'red', // 线条颜色
        lineJoin: 'round', // 折线拐点连接处样式
        map: this.$amap
      })
      // 将折线添加至地图实例
      this.$amap.add(polyline)
    }

  },
  data () {
    return {

    }
  },
  watch: {
    paths: {
      handler (n, o) {
        if (n) {
          this.drawPath()
        }
      }
    }
  },
  props: {
    paths: Array
  },
  mixins: [mapMixin],
  mounted () {
    this.drawPath()
    this.drawMarker()
  }
}
</script>

<style lang='scss' scoped>
.map-wrap {
  position: relative;
  #map {
    width: 100vw;
    height: 262px;
  }
}
</style>
