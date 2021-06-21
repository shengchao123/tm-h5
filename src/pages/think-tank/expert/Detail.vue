<template>
  <div class='detail-wrap pt20 flex1 column'>
    <expert-services-item :itemInfo="detailInfo"
                          :isDetail="true"></expert-services-item>
    <view class="mt20 bg-white pl30 pr30 column flex1">
      <text class="title ft32 color-333 medium">个人介绍</text>
      <text class="line1 mt24 introduction pb20">{{detailInfo.introduction}}</text>
    </view>
  </div>
</template>
<script>
import ExpertServicesItem from '@/pages/think-tank/index/components/ExpertServicesItem'
export default {
  name: 'Detail',
  methods: {
    getDetail () {
      const params = {
        id: this.id
      }
      this.$api.getShowJourneyTalentsDetail(params).then(res => {
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
  onLoad ({ id }) {
    this.id = id
  },
  created () {
    this.getDetail()
  },
  components: {
    ExpertServicesItem
  }
}
</script>
<style>
page {
  background: #f7f7f7;
  display: flex;
  height: 100%;
}
</style>
<style lang='scss' scoped>
.line1 {
  line-height: 1;
}
.detail-wrap {
  box-sizing: border-box;
  .title {
    padding-top: 34rpx;
  }
  .introduction {
    text-align: justify;
    text-align-last: left;
    line-height: 1.5;
  }
}
</style>
