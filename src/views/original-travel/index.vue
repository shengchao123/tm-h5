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
          regionsName: '临安区喜欢睡了看都就方老师',
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
