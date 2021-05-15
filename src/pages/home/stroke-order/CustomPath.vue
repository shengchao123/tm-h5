<template>
  <div class='custom-path-wrap'>
    <Map :mapInitObj="mapInitObj"
         mapClass="mapH400"
         :points="points"></Map>
  </div>
</template>

<script>
import Map from '@/pages/components/Map.vue'
export default {
  name: 'CustomPath',
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
      mapInitObj: {
        resizeEnable: true,
        zoom: 9, // 级别
        center: [119.365056, 30.034302]
      },
    }
  },
  components: { Map }
}
</script>

<style lang='scss' scoped>
.custom-path-wrap {
}
</style>
