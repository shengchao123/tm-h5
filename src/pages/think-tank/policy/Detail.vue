<template>
  <div class='detail-wrap'>
    <!-- <img src="@/static/test/10.png"> -->
    <!-- 轮播图 -->
    <carousel v-if="!$isEmpty(imgList)"
              :imgList="imgList"
              :indicatorDots="true">
    </carousel>
    <view class="mt20 bg-white pt24 pl30 pr30 pb30">
      <text class="ft40 color-333 bold">{{detailInfo.title}}</text>
      <view class="color-666 ft26 mt24 line1">
        <text>{{$moment(detailInfo.createTime).format('YYYY年M月DD日')}}</text>
        <text class="ml48">{{detailInfo.publishingDepartment}}</text>
      </view>
      <view class="mt12">
        <text>{{detailInfo.content}}</text>
      </view>
    </view>
  </div>
</template>
<script>
import Carousel from '@/pages/components/Carousel.vue'
export default {
  name: 'Detail',
  methods: {
    getDetail () {
      const params = {
        id: this.id
      }
      this.$api.getShowJourneyPolicyDetail(params).then(res => {
        if (res.isError) {
          this.$msg(res.message)
          return
        }
        this.detailInfo = res.content
      })
    }
  },
  data () {
    return {
      detailInfo: {}
    }
  },
  computed: {
    imgList () {
      const { attachmentList } = this.detailInfo
      if (this.$isEmpty(attachmentList)) return []
      const list = attachmentList.filter(item => item.sourceType === '01')
      if (this.$isEmpty(list)) return []
      return list.map(item => item.url)
    }
  },
  onLoad ({ id }) {
    this.id = id
  },
  created () {
    this.getDetail()
  },
  components: {
    Carousel
  }
}
</script>
<style>
page {
  background: #f7f7f7;
}
</style>
<style lang='scss' scoped>
.line1 {
  line-height: 1;
}
.detail-wrap {
  // img {
  //   width: 100vw;
  // }
}
</style>
