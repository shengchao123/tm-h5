<template>
  <div class='home-wrap'>
    <Map :paths="paths"></Map>
    <button @click="beginGuide">导航</button>
    <Tabbar></Tabbar>
  </div>
</template>

<script>
import Map from './map/index.vue'
import Tabbar from '@/views/components/Tabbar'

export default {
  name: 'index',
  methods: {
    // 开始导航
    beginGuide () {
      switch (this.type) {
        case '百度地图':
          window.location.href = `http://api.map.baidu.com/direction?origin=latlng:${this.curP[1]},${this.curP[0]}|name:我的位置&destination=${this.bdPosition[1]},${this.bdPosition[0]}&mode=driving&region=上海&output=html`
          break
        case '腾讯地图':
          window.location.href = `https://apis.map.qq.com/uri/v1/routeplan?type=bus&to=终点&tocoord=${this.position[1]},${this.position[0]}&referer=PGCBZ-7XVC3-XKO36-3CEGN-B2L63-XYBHT`
          break
        case '高德地图':
          window.location.href = `http://uri.amap.com/marker?position=${this.position[0]},${this.position[1]}&coordinate=gaode&callnative=1`
          break
      }
    }
  },
  data () {
    return {
      paths: [
        [119.005056, 30.224302],
        [119.165056, 30.124302],
        [119.365056, 30.224302],
        [119.505056, 30.204302],
        [119.765056, 30.274302]
      ]
    }
  },
  components: {
    Map,
    Tabbar
  },
  mounted () {

  }
}
</script>

<style lang='scss' scoped>
</style>
