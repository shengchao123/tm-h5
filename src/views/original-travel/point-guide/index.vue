<template>
  <div class='point-guide-wrap relative'>
    <div id="map"></div>
    <PoiKeywords class="poi-keywords"
                 @changePois="changePois"></PoiKeywords>
    <DragPopover>
      <div>
        <PointGuideItem v-for="(item, index) in pois"
                        @onGuide="showGuideActionSheet"
                        :key="index"
                        :info="item"
                        :main="index === 0"></PointGuideItem>
      </div>
    </DragPopover>

    <van-action-sheet v-model="showGuide"
                      @select="onSelect"
                      :actions="actions"
                      cancel-text="取消"
                      close-on-click-action />
    <!-- 开启底部安全区适配 -->
    <van-number-keyboard safe-area-inset-bottom />
  </div>
</template>

<script>
import mapMixin from '@/mixins/map.js'
import PoiKeywords from '@/views/original-travel/components/PoiKeywords'
import AMap from 'AMap'
import DragPopover from '@/components/DragPopover'
import { subStringWithStrlen } from '@/utils/tool.js'
import Vue from 'vue'
import PointGuideItem from '@/views/original-travel/components/PointGuideItem'

// 兴趣搜索点关键词
let poiSearchType = ''
// 地图中心点上下纬度偏移量
const centerLngOffset = 0.04
// 主要地标点
const point = JSON.parse(sessionStorage.getItem('pointData'))
// 地图中心点
const center = [point.lat, point.lng - centerLngOffset]
// 经纬度转换地图需要对象
const location = new AMap.LngLat(point.lat, point.lng)

export default {
  name: 'index',
  methods: {
    onSelect (act, index) {
      this.beginGuide(act)
    },
    showGuideActionSheet (item) {
      this.showGuide = true
      this.guidePoint = item
    },
    // 开始导航
    beginGuide (act) {
      let _location = []
      const _guidePoint = this.guidePoint
      if (_guidePoint.lat) {
        const { lat, lng } = _guidePoint
        _location = [lat, lng]
      } else {
        const { lat, lng } = _guidePoint.location
        _location = [lat, lng]
      }

      switch (act.name) {
        case '百度地图':
          window.location.href = `http://api.map.baidu.com/direction?origin=latlng:${point.lng},${point.lat}|name:${point.name}&destination=name:${_guidePoint.name}|latlng:${_guidePoint.lng},${_guidePoint.lat}&output=html&mode=walking&region=杭州市`
          break
        case '腾讯地图':
          window.location.href = `https://apis.map.qq.com/uri/v1/routeplan?type=walk&to=${_guidePoint.name}&tocoord=${_location.lng},${_location.lat}&policy=1&coord_type=1&referer=OB4BZ-D4W3U-B7VVO-4PJWW-6TKDJ-WPB77`
          break
        case '高德地图':
          window.location.href = `http://uri.amap.com/navigation?to=${_location.lng},${_location.lat},${_guidePoint.name}&mode=walk&policy=1&callnative=1`
          break
      }
    },

    drawMainMarker () {
      this.$amap.clearMap()
      this.$amap.setCenter(new AMap.LngLat(center[0], center[1]))

      // 绘制主要地标点
      const marker = this.getMarkder({ location: location, w: 38, h: 47 })
      marker.setExtData(point)
      // 点击方法绑定
      marker.on('click', this.markerClick)
    },

    // 兴趣点名字
    changePois (poi) {
      this.drawMainMarker()

      if (poi.type === 'system') {
        return
      }
      poiSearchType = poi.name
      this.getPoisWithLngLat()
    },

    // 根据选择点，搜索 poi 点
    getPoisWithLngLat () {
      this.pois = [{ address: point.regionsName, ...point }]
      const that = this
      AMap.plugin('AMap.PlaceSearch', function () {
        var autoOptions = {
          city: '杭州市',
          pageSize: 50,
          citylimit: true, // 是否强制限制在设置的城市内搜索
          autoFitView: true // 是否自动调整地图视野使绘制的 Marker点都处于视口的可见范围
        }
        var placeSearch = new AMap.PlaceSearch(autoOptions)
        placeSearch.searchNearBy(poiSearchType, location, 5000, function (status, result) {
          if (!result || !result.poiList) return
          const _pois = result.poiList.pois
          that.pois = that.pois.concat(_pois)
          _pois.forEach(poi => {
            const marker = that.getMarkder({ location: poi.location, w: 25, h: 31 })
            // 设置 marker 绑定的数据
            marker.setExtData(poi)
            // 点击方法绑定
            marker.on('click', that.markerClick)
          })
        })
      })
    },

    markerClick (e) {
      this.showInfoWindow(e)
    },

    // 绘制坐标点
    getMarkder ({ location, w, h }) {
      return new AMap.Marker({
        position: location,
        map: this.$amap,
        animation: 'AMAP_ANIMATION_DROP',
        offset: new AMap.Pixel(-w / 2, -h),
        icon: this.getMarkderIcon(w, h),
        touchZoom: false
      })
    },

    // 绘制坐标 icon
    getMarkderIcon (w, h) {
      return new AMap.Icon({
        size: new AMap.Size(w, h),
        image: require('@/assets/map/poi_mark.png'),
        imageSize: new AMap.Size(w, h)
      })
    },

    // 信息窗体
    showInfoWindow (e) {
      const marker = e.target
      const _point = marker.getExtData()

      const windowPosition = { ...marker.getPosition() }
      const windowOffset = { ...marker.getOffset() }

      windowOffset.y -= 10 // 在 marker 基础上获取偏移量上调
      windowOffset.x = _point.address ? 3 : 5 // 根据是否有地址，判断是系统的 poi，还是地图搜索出来的，图标大小不同

      const title = subStringWithStrlen(_point.name, 18)
      const address = _point.address ? subStringWithStrlen(_point.address, 18) : _point.typeName

      var _this = this
      var MyComponent = Vue.extend({
        template: "<div class='map-info-wrap'>" +
          '<div>' +
          `<div class='title'>${title}</div>` +
          `<div class='address'>${address}</div>` +
          '</div>' +
          '<div class="guide-btn center" v-on:click="onOpenGuide">' +
          '<SvgIcon icon="icon_daohang" style="color:#518CFC "class="ft10 mr4"></SvgIcon>' +
          '<span>到这里去</span></div>' +
          '</div>',
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
        offset: windowOffset
      })
      // 打开窗体
      infoWindow.open(this.$amap, windowPosition)
    }
  },
  mounted () {
    this.drawMainMarker()
  },
  components: { PoiKeywords, DragPopover, PointGuideItem },
  data () {
    return {
      showGuide: false,
      guidePoint: {},
      actions: Object.freeze([{ name: '高德地图' }, { name: '腾讯地图' }]),
      pois: [{ address: point.regionsName, ...point }],
      mapInitObj: Object.freeze({
        resizeEnable: true,
        zoom: 12, // 级别
        center: center
      })
    }
  },
  mixins: [mapMixin]
}
</script>

<style lang="scss">
.map-info-wrap {
  position: relative;
  padding: 12px;
  background: #fff;
  box-shadow: 0px 10px 24px 0px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  display: flex;
  flex-direction: row;
  .title {
    font-family: PingFangSC-Medium;
    font-size: 14px;
    color: #333333;
  }
  .address {
    margin-top: 8px;
    margin-bottom: 8px;
    font-family: PingFangSC-Regular;
    font-size: 10px;
    color: #999999;
  }
  .guide-btn {
    margin-left: 8px;
    font-size: 12px;
    height: 28px;
    width: 80px;
    line-height: 28px;
    text-align: center;
    color: #518cfc;
    border: 1px solid #518cfc;
    border-radius: 14px;
  }
}
.map-info-wrap::after {
  content: "";
  position: absolute;
  bottom: -7px;
  right: calc(48%);
  display: block;
  width: 0;
  height: 0;
  border-radius: 4px;
  border: 8px solid transparent;
  border-right-color: #fff;
  border-bottom-color: #fff;
  transform: scaleX(0.8) rotate(45deg);
}
</style>

<style lang='scss' scoped>
.point-guide-wrap {
  height: 100vh;

  #map {
    width: 375px;
    height: 600px;
  }

  .poi-keywords {
    position: absolute;
    z-index: 999;
    left: 12px;
    top: 12px;
  }
}
</style>
