<template>
  <view class="my-customization-wrap">
    <mescroll-uni ref="mescrollRef"
                  :top="mescrollTop"
                  :bottom="mescrollBottom"
                  @init="mescrollInit"
                  :up="upOption"
                  @up="upCallback"
                  @down="downCallback">
      <div v-if="!$isEmpty(dataList)">
        <ResourceItem :resourceItem="{item, index}"
                      v-for="(item, index) in dataList"
                      :key="item.id"></ResourceItem>
      </div>
      <empty v-else></empty>
    </mescroll-uni>
  </view>
</template>
<script>
import listMixins from '../mixins'
import ResourceItem from '@/pages/components/CustomizationItem.vue'

export default {
  name: 'List',
  methods: {
    getDataList () {
      const params = {
        ...this.search
      }
      this.$api.getMyJourneyPlayCustomizationInfoPage(params).then(res => {
        if (res.isError) return
        let { items, count } = res.content
        this.dataList = params.pageNumber === 1 ? items : this.dataList.concat(items)
        this.mescroll.endBySize(items.length, count)
      })
    }
  },
  data () {
    return {
      mescrollTop: '120rpx',
      mescrollBottom: '20rpx',
    }
  },
  created () { },
  mixins: [listMixins],
  components: {
    ResourceItem
  }

}
</script>
<style lang='scss' scoped>
</style>