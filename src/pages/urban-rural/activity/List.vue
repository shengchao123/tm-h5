<template>
  <div class="wrap">

    <SubTabs @change="changeSubTab"
             :tabs="subTabs"></SubTabs>
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
import SubTabs from '@/pages/urban-rural/components/SubTabs'

export default {
  name: 'List',
  methods: {
    changeSubTab (item) {
      this.search.status = item.status
      this.search.pageNumber = 1
      this.getJourneyActivityPage()
    },
    onreachBottom () {
      this.search.pageNumber++
    },
    // 获取商品列表
    getJourneyActivityPage () {
      const params = {
        ...this.search
      }
      this.$api.getJourneyActivityPage(params).then(res => {
        if (res.isError) return
        this.dataList = res?.content?.items ?? []
      })
    }
  },
  created () {
    this.getJourneyActivityPage()
  },
  components: { ProductItem, SubTabs },
  data () {
    return {
      search: {
        pageNumber: 1,
      },
      subTabs: [
        {
          status: '',
          text: '全部'
        },
        {
          status: '01',
          text: '报名中'
        },
        {
          status: '02',
          text: '进行中'
        },
        {
          status: '03',
          text: '已结束'
        }
      ],
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
