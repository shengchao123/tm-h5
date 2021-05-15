<template>
  <div class='tabbar-home-wrap'>
    <Map needClick
         :mapInitObj="mapInitObj"
         mapClass="mapVH60"
         :points="points"></Map>
    <DragPopover>
      <div class="box relative">
        <PathsList @onSelectPath="getJourneyPointListByJourneyId"></PathsList>
        <ScenicSpot :points="points"></ScenicSpot>
        <div class="center pb32 pt16 create-btn-wrap">
          <div class="create-btn center bold"
               @click="onCreateTravel">创建我的行程</div>
        </div>
      </div>
    </DragPopover>
  </div>
</template>

<script>
import Map from '@/pages/components/Map.vue'
import DragPopover from '@/components/DragPopover'
import PathsList from './components/PathsList'
import ScenicSpot from './components/ScenicSpot'
export default {
  name: 'index',
  methods: {
    onCreateTravel () {
      uni.navigateTo({ url: '/pages/home/stroke-order/index' })
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
  data () {
    return {
      points: [
        {
          code: '',
          journeyPointId: 0,
          lat: 30.224302,
          lng: 119.005056,
          name: '第一个',
          regionsCode: '',
          regionsName: '临安区喜欢睡了看都就方老师',
          type: '01',
          typeName: '景区',
          url: 'http://downsc.chinaz.net/Files/DownLoad/sound1/201906/11582.mp3'
        },
        {
          code: '',
          journeyPointId: 0,
          lat: 30.124302,
          lng: 119.165056,
          name: '第2个',
          regionsCode: '',
          regionsName: '',
          type: '',
          typeName: '',
          url: 'http://downsc.chinaz.net/Files/DownLoad/sound1/201906/11582.mp3'
        },
        {
          code: '',
          journeyPointId: 0,
          lat: 30.224302,
          lng: 119.365056,
          name: '第3个',
          regionsCode: '',
          regionsName: '',
          type: '',
          typeName: '',
          url: 'http://downsc.chinaz.net/Files/DownLoad/sound1/201906/11582.mp3'
        },
        {
          code: '',
          journeyPointId: 0,
          lat: 30.274302,
          lng: 119.765056,
          name: '第4个',
          regionsCode: '',
          regionsName: '',
          type: '',
          typeName: '',
          url: 'http://downsc.chinaz.net/Files/DownLoad/sound1/201906/11582.mp3'
        }
      ],
      mapInitObj: Object.freeze({
        resizeEnable: true,
        zoom: 9, // 级别
        center: [119.365056, 30.034302]
      })
    }
  },
  components: {
    Map,
    DragPopover,
    PathsList,
    ScenicSpot
  },
}
</script>

<style lang='scss' scoped>
.tabbar-home-wrap {
  .box {
    height: 100%;
    position: relative;
    .create-btn-wrap {
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      background: #ffffff;
      .create-btn {
        width: 480rpx;
        height: 80rpx;
        border-radius: 40rpx;
        border: 1px solid #e32417;
        font-size: 32rpx;
        color: #e32417;
      }
    }
  }
}
</style>
