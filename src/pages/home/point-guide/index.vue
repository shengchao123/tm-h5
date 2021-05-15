<template>
  <div class='point-guide-wrap relative '>
    <div id="map"></div>
    <PoiKeywords class="poi-keywords"
                 @changePois="changePois"></PoiKeywords>
    <DragPopover showLocation="true"
                 @onLocation="onLocation">
      <div class="content-box">
        <PointGuideItem v-for="(item, index) in pois"
                        @onGuide="showGuideActionSheet"
                        @onPoi="onPoi"
                        :key="index"
                        :info="{item, index}"
                        :main="index === currentIndex"></PointGuideItem>
      </div>
    </DragPopover>

    <van-action-sheet v-model="showGuide"
                      @select="onSelectGuide"
                      :actions="actions"
                      cancel-text="取消"
                      close-on-click-action />
    <!-- 开启底部安全区适配 -->
    <van-number-keyboard safe-area-inset-bottom />
  </div>
</template>

<script>
import mapMixin from '@/mixins/map.js'
import PoiKeywords from './components/PoiKeywords'
import AMap from 'AMap'
import DragPopover from '@/components/DragPopover'
import { subStringWithStrlen } from '@/utils/tools.js'
import Vue from 'vue'
import PointGuideItem from './components/PointGuideItem'

import { getAMapLngLat, getLngLat, beginGuide } from '@/utils/map.js'

// 地图中心点上下纬度偏移量
const centerLngOffset = 0.04
// 主要地标点
let scenicSpot = null

const LWH = { w: 38, h: 47 }
const MWH = { w: 25, h: 31 }

export default {
  name: 'index',
  methods: {
    // 点击重新定位按钮
    onLocation () {
      this.setMapCenter(this.scenicSpot)
    },
    // 显示导航选择框
    showGuideActionSheet (item) {
      this.showGuide = true
      this.guidePoint = item
    },
    // 选择地图导航回调
    onSelectGuide (act, index) {
      beginGuide(act, this.guidePoint)
    },
    // 选择切换 poi 点
    onPoi (info) {
      if (this.currentIndex === info.index) return
      this.currentIndex = info.index
      this.resetDrawMarkders(info.item)
    },
    // 兴趣点名字
    changePois (poi) {
      this.currentIndex = 0
      this.pois = [{ address: scenicSpot.regionsName, ...scenicSpot }]
      this.$amap.clearMap()
      this.setMapCenter(scenicSpot)
      this.drawMarkder({ ...LWH }, scenicSpot)
      if (poi.type) return this.getJourneyPointListByOrgId(poi.type)
      this.getPoisWithLngLat(poi.name)
    },
    getJourneyPointListByOrgId (type) {
      const params = { type }
      this.$api.getJourneyPointListByOrgId(params).then(res => {
        if (res.isError) return
        const _pois = res.content.map(item => {
          item.address = item.regionsName
          return item
        })
        this.pois = [{ address: scenicSpot.regionsName, ...scenicSpot }].concat(_pois)
        _pois.forEach(poi => {
          this.drawMarkder({ ...MWH }, poi)
        })
      })
    },
    // 根据选择点，搜索 poi 点
    getPoisWithLngLat (poiSearchType) {
      const that = this
      AMap.plugin('AMap.PlaceSearch', function () {
        var autoOptions = {
          city: '杭州市',
          pageSize: 50,
          citylimit: true, // 是否强制限制在设置的城市内搜索
          autoFitView: true // 是否自动调整地图视野使绘制的 Marker点都处于视口的可见范围
        }
        var placeSearch = new AMap.PlaceSearch(autoOptions)
        placeSearch.searchNearBy(poiSearchType, getAMapLngLat(scenicSpot), 5000, function (status, result) {
          if (!result || !result.poiList) return
          const _pois = result.poiList.pois
          that.pois = [{ address: scenicSpot.regionsName, ...scenicSpot }].concat(_pois)
          _pois.forEach(poi => {
            that.drawMarkder({ ...MWH }, poi)
          })
        })
      })
    },
    // 点击显示信息框
    markerClick (e) {
      const _point = e.target.getExtData()
      this.pois.forEach((item, index) => {
        if (item.name === _point.name) this.currentIndex = index
      })
      this.resetDrawMarkders(_point)
      this.showInfoWindow(e)
    },
    // 信息窗体
    showInfoWindow (e) {
      const marker = e.target
      const _point = marker.getExtData()

      const windowPosition = { ...marker.getPosition() }
      const windowOffset = { ...marker.getOffset() }

      windowOffset.y -= 20 // 在 marker 基础上获取偏移量上调
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
        offset: windowOffset,
        autoMove: false
      })
      // 打开窗体
      infoWindow.open(this.$amap, windowPosition)
    },

    // 绘制 marker
    drawMarkder ({ w, h }, scenicSpot) {
      const marker = new AMap.Marker({
        position: getAMapLngLat(scenicSpot),
        map: this.$amap,
        // animation: 'AMAP_ANIMATION_DROP',
        offset: new AMap.Pixel(-w / 2, -h),
        icon: this.getMarkderIcon(w, h),
        touchZoom: false
      })

      marker.setExtData(scenicSpot)
      // 点击方法绑定
      marker.on('click', this.markerClick)

      return marker
    },

    // 绘制坐标 icon
    getMarkderIcon (w, h) {
      return new AMap.Icon({
        size: new AMap.Size(w, h),
        image: require('@/static/map/poi_mark.png'),
        imageSize: new AMap.Size(w, h)
      })
    },

    // 绘制地图中心点
    setMapCenter (_point) {
      const { lng, lat } = getLngLat(_point)
      const _lngLat = new AMap.LngLat(lng, lat - centerLngOffset)
      this.$amap.setCenter(_lngLat)
    },

    // 重新绘制主要点和其它点位
    resetDrawMarkders (_poi) {
      this.$amap.clearMap()

      this.setMapCenter(_poi)
      this.drawMarkder({ ...LWH }, _poi)

      let _pois = JSON.parse(JSON.stringify(this.pois))
      _pois = _pois.filter((item, index) => index !== this.currentIndex)
      _pois.forEach(poi => {
        this.drawMarkder({ ...MWH }, poi)
      })
    }
  },
  created () {
    // 主要地标点
    scenicSpot = JSON.parse(sessionStorage.getItem('pointData'))
    this.pois = [{ address: scenicSpot.regionsName, ...scenicSpot }]
  },
  mounted () {
    this.drawMarkder({ ...LWH }, scenicSpot)
    this.setMapCenter(scenicSpot)
  },
  components: { PoiKeywords, DragPopover, PointGuideItem },
  data () {
    return {
      currentIndex: 0,
      showGuide: false,
      guidePoint: {},
      actions: Object.freeze([{ name: '高德地图' }, { name: '腾讯地图' }]),
      pois: [],
      mapInitObj: Object.freeze({
        resizeEnable: true,
        zoom: 12, // 级别
        center: getLngLat(scenicSpot)
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
