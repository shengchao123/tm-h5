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
                 class="scroll"
                 @scrolltolower="onreachBottom">
      <div class="content row">
        <div v-for="item in dataList"
             :key="item.id">
          <ProductItem :item="item"></ProductItem>
        </div>
      </div>
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
      dataList: [
        {
          "honor": "天目1",
          "image": "image/avatar/2021052413471143357392002320384.jpeg",
          "journeyProductId": 11,
          "name": "天目山镇笋干"
        },
        {
          "honor": "速度快放假",
          "image": "image/avatar/2021052413471143357392002320384.jpeg",
          "journeyProductId": 3,
          "name": "临安天目青顶茶"
        },
        {
          "honor": "是东方丽景可",
          "image": "image/avatar/2021052413471143357392002320384.jpeg",
          "journeyProductId": 234,
          "name": "临安板桥云彩土鸡"
        },
        {
          "honor": "说了大富科技额",
          "image": "image/avatar/2021052413471143357392002320384.jpeg",
          "journeyProductId": 5342,
          "name": "临安岛石镇特产农产品山核桃"
        },
        {
          "honor": "是东方丽景可",
          "image": "image/avatar/2021052413471143357392002320384.jpeg",
          "journeyProductId": 2341,
          "name": "临安板桥云彩土鸡"
        },
        {
          "honor": "说了大富科技额",
          "image": "image/avatar/2021052413471143357392002320384.jpeg",
          "journeyProductId": 5341,
          "name": "临安岛石镇特产农产品山核桃"
        }
      ]
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
