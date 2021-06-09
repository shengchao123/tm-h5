
<template>
  <div class='venue-map-wrap'>
    <div id="map"></div>
    <DragPopover max-top="70"
                 showLocation="true"
                 @onLocation="onLocation">
      <div class="box relative column">
        <!-- 搜索框 -->
        <div class="search-wrap">
          <div class="search center-align color-999 ft26">
            <SvgIcon icon="icon_hanhan-01-01"
                     class="mr16"></SvgIcon>
            <u-input v-model="poi.keyword"
                     @input="poiSearch"
                     placeholder="搜索地点"
                     type="text" />
          </div>
        </div>

        <div class="list flex1"
             ref="list">
          <LocationItem v-for="(item, index) in poi.list"
                        :item="item"
                        @onSelectItem="onSelectLocation"
                        :isCurrent="selectPoi.id === item.id"
                        :key="index"></LocationItem>
        </div>
        <div style="height: 120rpx;"></div>
      </div>
      <div class="btn-wrap bt center">
        <div class="btn center bold"
             @click="onConfirmBtn">确定</div>
      </div>
    </DragPopover>
  </div>
</template>
<script>

import LocationItem from '@/pages/original-travel/stroke-order/components/LocationItem'
import AMap from 'AMap'

const MARKER_W_H = { W: 30, H: 50 }

export default {
  name: 'VenueMap',
  methods: {
    onConfirmBtn () {
      uni.navigateBack({ delta: 1 })
      const { address } = this.selectPoi
      const { lat, lng } = this.selectPoi.location
      uni.$emit('setMeetingPlaceEvent', {
        meetingPlace: address,
        meetingPlaceLat: lat,
        meetingPlaceLng: lng
      })
    },
    poiSearch () {
      this.getPoisBySearch()
    },
    onSelectLocation (e) {
      this.selectPoi = e
      this.$amap.setCenter(e.location)
      this.$marker.setPosition(e.location)
    },
    // 地图绘制
    drawMap () {
      const that = this

      uni.getLocation({
        type: 'gcj02',
        success: ({ longitude, latitude }) => {
          AMap.plugin('AMap.PlaceSearch', function () {
            var autoOptions = {
              city: '杭州市',
              pageSize: 50
            }
            var placeSearch = new AMap.PlaceSearch(autoOptions)
            placeSearch.searchNearBy('', [longitude, latitude], 5000, function (status, result) {
              if (!result || !result.poiList) return
              const _pois = result.poiList.pois

              that.poi.list = _pois
              that.selectPoi = _pois[0]
              that.locationResult = _pois[0]

              that.drawLocation()

              that.$amap.setCenter(_pois[0].location)
              that.$marker = that.drawLocationMarker()

              that.onEvent()
            })
          })
        }
      })
    },

    // 地图事件监听
    onEvent () {
      this.$amap.on('dragging', this.mapDragging)
      this.$amap.on('moveend', this.mapMoveend)
    },
    // 绘制进来定位点 marker
    drawLocationMarker () {
      const marker = new AMap.Marker({
        position: this.$amap.getCenter(),
        map: this.$amap,
        offset: new AMap.Pixel(-MARKER_W_H.W / 2, -MARKER_W_H.H),
        icon: this.getMarkderIcon('drag_location')
      })

      return marker
    },
    drawLocation () {
      const { position, location } = this.locationResult
      new AMap.Marker({
        position: position || location,
        map: this.$amap,
        offset: new AMap.Pixel(-30 / 2, -30 / 2),
        icon: new AMap.Icon({
          size: new AMap.Size(30, 30),
          image: require('@/static/map/location.png'),
          imageSize: new AMap.Size(30, 30)
        })
      })
    },

    // 根据选择点，搜索 poi 点
    getPoisBySearch () {
      const that = this
      AMap.plugin('AMap.Autocomplete', function () {
        var autoOptions = {
          city: '杭州市',
        }
        var placeSearch = new AMap.Autocomplete(autoOptions)
        placeSearch.search(that.poi.keyword, function (status, result) {
          if (result.info === 'OK') {
            that.poi.list = result.tips
            that.selectPoi = result.tips[0]
          }
        })
      })
    },

    // 地图拖动，定位点更换定位位置
    mapDragging (e) {
      const _lnglat = this.$amap.getCenter()
      this.$marker.setPosition(_lnglat)
    },
    // 地图拖动完成，重新绘制定位点
    mapMoveend (e) {
      const _position = this.$amap.getCenter()
      this.$marker.setPosition(_position)
    },
    // 根据选择点，搜索 poi 点
    getPoisByMoveend () {
      const that = this
      const lnglat = this.$amap.getCenter()
      AMap.plugin('AMap.PlaceSearch', function () {
        var autoOptions = {
          pageSize: 50,
        }
        var placeSearch = new AMap.PlaceSearch(autoOptions)
        placeSearch.searchNearBy('', lnglat, 5000, function (status, result) {
          if (!result || !result.poiList) return
          const _pois = result.poiList.pois
          that.poi.list = _pois
          that.selectPoi = _pois[0]
          that.$refs.list.scrollTop = 0
        })
      })
    },
    onLocation () {
      this.poi.keyword = ''
      this.drawMap()
    },
    // 绘制坐标 icon
    getMarkderIcon (img) {
      return new AMap.Icon({
        size: new AMap.Size(MARKER_W_H.W, MARKER_W_H.H),
        image: require(`@/static/map/${img}.png`),
        imageSize: new AMap.Size(MARKER_W_H.W, MARKER_W_H.H)
      })
    },
  },
  components: { LocationItem },
  data () {
    return {
      $amap: null,
      $marker: null,
      poi: {
        keyword: '',
        list: []
      },
      selectPoi: {}
    }
  },
  mounted () {
    const mapInitObj = Object.freeze({
      resizeEnable: true,
      zoom: 17,
      zooms: [9, 19],
    })
    this.$amap = new AMap.Map('map', mapInitObj)
    this.drawMap()
  }
}
</script>

<style lang='scss' scoped>
.venue-map-wrap {
  height: 100%;
  overflow: hidden;
  #map {
    width: 100vw;
    height: 70vh;
  }

  .box {
    height: 100%;
    position: relative;
    .search-wrap {
      padding: 0rpx 30rpx 2rpx;
      .search {
        height: 66rpx;
        padding: 0 20rpx;
        border-radius: 33rpx;
        background: #f4f5f7;
      }
    }
    .list {
      height: 100%;
      overflow: scroll;
    }
  }
  .btn-wrap {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    height: 120rpx;
    .btn {
      font-size: 32rpx;
      background: #e32417;
      height: 88rpx;
      width: 690rpx;
      border-radius: 49px;
      color: #ffffff;
    }
  }
}
</style>
