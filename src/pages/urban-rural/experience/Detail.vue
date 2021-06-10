<template>
  <div>
    <empty v-if="$isEmpty(detailInfo)"></empty>
    <div v-else
         class='detail-wrap'>
      <u-swiper :list="images"
                height="562"></u-swiper>

      <ExperienceItem :showImgs="false"
                      style="margin-bottom:0"
                      :item="detailInfo"></ExperienceItem>

      <div class="content">
        <div class="ft32 bold">展位介绍</div>
        <div class="ft28 mt24">{{detailInfo.introduction}}</div>
      </div>
    </div>
  </div>

</template>

<script>
import ExperienceItem from '@/pages/urban-rural/components/ExperienceItem'
export default {
  name: 'Detail',
  methods: {
    // 获取详情
    getJourneyMerchantBoothInfoById (id) {
      const params = {
        journeyMerchantBoothId: id
      }
      this.$api.getJourneyMerchantBoothInfoById(params).then(res => {
        if (res.isError) return
        const temContent = res.content
        if (!temContent) return this.detailInfo = {}
        const _appropriateCrowdFormat = temContent.appropriateCrowd.map(item => item.typeName)
        const _serviceContentFormat = temContent.serviceContent.map(item => item.typeName)
        temContent.appropriateCrowdFormat = _appropriateCrowdFormat.join(' ')
        temContent.serviceContentFormat = _serviceContentFormat.join(' ')
        this.detailInfo = temContent
        this.images = temContent.images.map(item => {
          return {
            image: this.$fileHost + item.url
          }
        })
      })
    }
  },
  components: { ExperienceItem },
  data () {
    return {
      detailInfo: {},
      images: [],
    }
  },
  onLoad (options) {
    this.getJourneyMerchantBoothInfoById(options.id)
  }
}
</script>

<style lang='scss' scoped>
.detail-wrap {
  .content {
    border-top: 20rpx solid $bgColor;
    padding: 36rpx 30rpx;
  }
}
</style>
