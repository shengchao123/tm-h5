<template>
  <div class='home-wrap'>
    <Map :points="points"></Map>
    <DragPopover bottom="62"></DragPopover>
    <Tabbar></Tabbar>
  </div>
</template>

<script>
import Map from './components/map/index.vue'
import Tabbar from '@/views/components/Tabbar'
import DragPopover from '@/components/DragPopover'

export default {
  name: 'index',
  methods: {

    // 根据 orgId 获取路线
    getJourneyLineListByOrgId () {
      this.$api.getJourneyLineListByOrgId().then(res => {
        if (res.isError) return
        this.paths = res.content
      })
    },
    // 根据路线 id 获取点位
    getJourneyPointListByJourneyId (journeyLineId) {
      const params = {
        journeyLineId: journeyLineId
      }
      this.$api.getJourneyPointListByJourneyId(params).then(res => {
        if (res.isError) return
        this.points = res.content
      })
    },
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
  created () {

  },
  data () {
    return {
      paths: [],
      points: [
        {
          code: '',
          journeyPointId: 0,
          lat: 119.005056,
          lng: 30.224302,
          name: '第一个',
          regionsCode: '',
          regionsName: '',
          type: '01',
          typeName: '景区',
          url: ''
        },
        {
          code: '',
          journeyPointId: 0,
          lat: 119.165056,
          lng: 30.124302,
          name: '第2个',
          regionsCode: '',
          regionsName: '',
          type: '',
          typeName: '',
          url: ''
        },
        {
          code: '',
          journeyPointId: 0,
          lat: 119.365056,
          lng: 30.224302,
          name: '第3个',
          regionsCode: '',
          regionsName: '',
          type: '',
          typeName: '',
          url: ''
        },
        {
          code: '',
          journeyPointId: 0,
          lat: 119.765056,
          lng: 30.274302,
          name: '第4个',
          regionsCode: '',
          regionsName: '',
          type: '',
          typeName: '',
          url: ''
        }
      ]
    }
  },
  components: {
    Map,
    Tabbar,
    DragPopover
  },
  mounted () {

  }
}
</script>

<style lang='scss' scoped>
</style>
