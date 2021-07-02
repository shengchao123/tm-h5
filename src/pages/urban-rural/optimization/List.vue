<template>
  <div class="wrap">

    <div class="search-wrap mt16"
         style="padding:20rpx;30rpx">
      <u-search placeholder="输入产品名称搜索"
                :show-action="false"
                @change="changeSearchKeyword"
                search-icon-color="#999999"
                placeholder-color="#999999"
                v-model="search.keyword"></u-search>
    </div>

    <mescroll-uni ref="mescrollRef"
                  top="440rpx"
                  @init="mescrollInit"
                  :up="upOption"
                  @down="downCallback"
                  @up="upCallback">
      <div class="content row"
           v-if="!$isEmpty(dataList)">
        <div v-for="item in dataList"
             :key="item.id">
          <ProductItem :item="item"></ProductItem>
        </div>
      </div>
      <empty v-else></empty>
    </mescroll-uni>

  </div>
</template>

<script>
import ProductItem from '@/pages/urban-rural/components/ProductItem'
import listMixins from '../mixins'
export default {
  name: 'List',
  methods: {
    changeSearchKeyword () {
      this.search.pageNumber = 1
      this.getDataList()
    },

    // 获取商品列表
    getDataList () {
      const params = {
        ...this.search,
        pageSize: 5
      }
      this.$api.getJourneyProductInfoPage(params).then(res => {
        if (res.isError) return
        const { items, count } = res.content
        this.mescroll.endBySize(items.length, count)
        this.dataList = params.pageNumber === 1 ? items : this.dataList.concat(items)
      })
    }
  },
  data () {
    return {
      upOption: {
        toTop: {
          bottom: 18
        }
      }
    }
  },
  mixins: [listMixins],
  components: { ProductItem },
}
</script>

<style lang='scss' scoped>
.wrap {
  height: calc(100vh - 80rpx - 50px - 200rpx);
  .search-wrap {
    background: #ffffff;
  }

  .content {
    padding: 0 30rpx;
    justify-content: space-between;
    flex-wrap: wrap;
  }
}
</style>
