<template>
  <div class="wrap">

    <div class="search-wrap"
         style="padding:20rpx;30rpx">
      <u-search placeholder="输入产品名称搜索"
                :show-action="false"
                @change="changeSearchKeyword"
                search-icon-color="#999999"
                placeholder-color="#999999"
                v-model="keyword"></u-search>
    </div>

    <scroll-view scroll-y
                 class="scroll relative"
                 @scrolltolower="onreachBottom">
      <div class="content row"
           v-if="!$isEmpty(dataList)">
        <div v-for="item in dataList"
             :key="item.id">
          <ProductItem :item="item"></ProductItem>
        </div>
      </div>

      <empty v-else></empty>
    </scroll-view>

  </div>
</template>

<script>
import ProductItem from '@/pages/urban-rural/components/ProductItem'

export default {
  name: 'List',
  methods: {
    changeSearchKeyword () {
      this.getJourneyProductInfoPage()
    },
    // scroll-view到底部加载更多
    onreachBottom () {
      console.log(1)
    },
    // 获取商品列表
    getJourneyProductInfoPage () {
      const params = {
        keyword: this.keyword
      }
      this.$api.getJourneyProductInfoPage(params).then(res => {
        if (res.isError) return
        this.dataList = res?.content?.items ?? []
      })
    }
  },
  created () {
    this.getJourneyProductInfoPage()
  },
  components: { ProductItem },
  data () {
    return {
      keyword: '',
      dataList: []
    }
  }
}
</script>

<style lang='scss' scoped>
.wrap {
  background: #ffffff;
  height: 100%;
  .scroll {
    height: calc(100% - 104rpx);
    padding: 0 30rpx;
    .content {
      justify-content: space-between;
      flex-wrap: wrap;
    }
  }
}
</style>
