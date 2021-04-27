<template>
  <div class='map-wrap'>
    <div id="map"></div>
  </div>
</template>

<script>
import AMap from 'AMap'

const poiSearchType = '餐饮服务|购物服务|生活服务|体育休闲服务|医疗保健服务|住宿服务|风景名胜|公共设施'
const mapInitObj = {
  resizeEnable: true,
  zoom: 9, // 级别
  labelzIndex: 110,
  center: [119.365056, 30.234302]
}

export default {
  name: 'index',
  methods: {
    // 绘制图中标记点
    drawMarker () {
      this.paths.forEach((item, index) => {
        const marker = new AMap.Marker({
          position: new AMap.LngLat(item[0], item[1]),
          title: '标题' + index,
          map: this.$amap
        })
        // 设置 marker 绑定的数据
        marker.setExtData(item)
        marker.on('click', this.markerClick)
      })
    },
    markerClick (e) {
      const point = e.target.getExtData()
      this.getPoisWithLngLat(point)
    },
    getPoisWithLngLat (point) {
      const that = this
      AMap.plugin('AMap.PlaceSearch', function () {
        var autoOptions = {
          city: '杭州市',
          citylimit: true, // 是否强制限制在设置的城市内搜索
          map: that.$amap,
          autoFitView: true, // 是否自动调整地图视野使绘制的 Marker点都处于视口的可见范围 // 结果列表将在此容器中进行展示。
          type: poiSearchType
        }
        var placeSearch = new AMap.PlaceSearch(autoOptions)
        placeSearch.searchNearBy('', point, 1000, function (status, result) {
          console.log(result.poiList.pois)
          // 搜索成功时，result即是对应的匹配数据
        })
      })
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
    },
    // 绘制主要区域以外覆盖
    drawDistrict () {
      const that = this
      AMap.plugin('AMap.DistrictSearch', function () {
        new AMap.DistrictSearch({
          extensions: 'all',
          subdistrict: 0
        }).search('临安区', function (status, result) {
          // 外多边形坐标数组和内多边形坐标数组
          var outer = [
            new AMap.LngLat(-360, 90, true),
            new AMap.LngLat(-360, -90, true),
            new AMap.LngLat(360, -90, true),
            new AMap.LngLat(360, 90, true)
          ]
          var holes = result.districtList[0].boundaries
          var pathArray = [
            outer
          ]
          pathArray.push.apply(pathArray, holes)
          var polygon = new AMap.Polygon({
            pathL: pathArray,
            strokeColor: 'rgb(20,164,173)',
            strokeWeight: 4,
            strokeOpacity: 0.5,
            fillColor: 'rgba(2,2,2)',
            fillOpacity: 0.8,
            strokeStyle: 'dashed',
            strokeDasharray: [10, 2, 10]
          })
          polygon.setPath(pathArray)
          that.$amap.add(polygon)
        })
      })
    }
  },
  beforeDestory () {
    this.$amap && this.$amap.destory()
  },
  data () {
    return {
      $amap: null
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
  mounted () {
    this.$amap = new AMap.Map('map', mapInitObj)
    this.drawDistrict()
    this.drawPath()
    this.drawMarker()
  }
}
</script>

<style lang='scss' scoped>
.map-wrap {
  #map {
    width: 375px;
    height: 600px;
  }
}
</style>
