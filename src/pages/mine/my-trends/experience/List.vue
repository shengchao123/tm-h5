<template>
  <div class="wrap">
    <mescroll-uni ref="mescrollRef"
                  :top="mescrollTop"
                  :bottom="mescrollBottom"
                  @scroll="scroll"
                  @init="mescrollInit"
                  :up="upOption"
                  @down="downCallback"
                  @up="upCallback">
      <div class="content"
           v-if="!$isEmpty(dataList)">
        <div v-for="(item,index) in dataList"
             :key="index"
             class="relative">
          <!-- 审核状态 (1:已发布; 2:待审核) -->
          <view v-if="item.status === 2"
                class="wait-check white-color tc ft22">
            待审核
          </view>
          <experience-item :item="item"
                           :isScroll="isScroll"></experience-item>
        </div>
      </div>
      <empty v-else></empty>
    </mescroll-uni>
    <!-- <PublishBtn @onPublish="onPublish"
                :isScroll="isScroll"></PublishBtn> -->
  </div>
</template>
<script>
import ExperienceItem from '@/pages/urban-rural/components/ExperienceItem'
// import PublishBtn from '@/pages/urban-rural/components/PublishBtn'
import listMixins from '../mixins'
import MescrollMixin from "@/components/mescroll-uni/mescroll-mixins.js";
export default {
  name: 'List',
  methods: {
    // onPublish () {
    //   uni.navigateTo({
    //     url: '/pages/urban-rural/experience/AddMerchantBooth'
    //   })
    // },
    scroll () {
      this.isScroll = true
      if (this.timer) {
        this.timer = null
        clearTimeout(this.timer)
      }
      this.timer = setTimeout(() => {
        this.isScroll = false
      }, 500)
    },
    // 获取商品列表
    getDataList () {
      console.log(111);
      const params = {
        ...this.search
      }
      this.$api.getMyJourneyMerchantBoothInfoPage(params).then(res => {
        if (res.isError) return
        let { items, count } = res.content
        items = items.map(item => {
          const _appropriateCrowdFormat = item.appropriateCrowd.map(item1 => item1.typeName)
          const _serviceContentFormat = item.serviceContent.map(item1 => item1.typeName)
          item.appropriateCrowdFormat = _appropriateCrowdFormat.join(' ')
          item.serviceContentFormat = _serviceContentFormat.join(' ')
          item.images = item.images.map(item1 => item1.url)
          return item
        })
        this.mescroll.endBySize(items.length, count)
        this.dataList = params.pageNumber === 1 ? items : this.dataList.concat(items)
        console.log(this.dataList);
      })
    }
  },
  mixins: [listMixins, MescrollMixin],
  components: { ExperienceItem, },
  data () {
    return {
      isScroll: false,
      mescrollTop: '20rpx',
      mescrollBottom: '0rpx',
      upOption: {
        onScroll: true
      },
    }
  },
  created () {
    // this.getDataList()
  }
}
</script>

<style lang='scss' scoped>
.wrap {
  height: 100%;
  .content {
    justify-content: space-between;
    flex-wrap: wrap;
  }
  .wait-check {
    position: absolute;
    right: 0rpx;
    top: 32rpx;
    width: 96rpx;
    height: 42rpx;
    line-height: 42rpx;
    background: #ff8800;
    border-radius: 6rpx 0 0 6rpx;
    z-index: 9;
  }
}
</style>
