<template>
  <view class="policy-wrap">
    <empty v-if="isEmpty"></empty>
    <mescroll-uni v-else
                  ref="mescrollRef"
                  @init="mescrollInit"
                  @down="downCallback"
                  :up="upOption"
                  @up="upCallback"
                  bottom="166"
                  top="88">
      <view class="">
        <view v-for="(item,index) in dataList"
              :key="index"
              class="list-item mt20 pl30 pr30">
          <item :itemInfo="item"></item>
        </view>
      </view>
    </mescroll-uni>
  </view>
</template>
<script>
import MescrollMixin from "@/components/mescroll-uni/mescroll-mixins.js";
import MescrollUni from "@/components/mescroll-uni/mescroll-uni.vue";
import Item from './Item.vue'
export default {
  name: 'Policy',
  methods: {
    upCallback (page) {
      this.getListData(page)
    },
    // 下拉刷新
    downCallback () {
      this.mescroll.resetUpScroll(); // 重置列表为第一页
    },
    getListData (page) {
      const params = {
        pageNumber: page && page.num || 1,
        pageSize: page && page.size || 10
      }
      this.$api.getShowJourneyPolicyPage(params).then(res => {
        if (res.isError) {
          this.mescroll.endBySize(0, 0)
          this.dataList = []
          this.isEmpty = true
          this.$msg(res.message)
          return
        }
        const { items, count } = res.content
        this.mescroll.endBySize(items.length, count)
        if (params.pageNumber === 1) this.dataList = []
        this.dataList = this.dataList.concat(items)
        this.isEmpty = this.$isEmpty(this.dataList)
      })
    }
  },
  data () {
    return {
      dataList: [],
      isEmpty: false,
      upOption: {
        empty: {
          use: false
        },
        textNoMore: "没有更多数据",
        noMoreSize: 10, // 配置列表的总数量要大于等于10条才显示'-- END --'的提示
      },
    }
  },
  mixins: [MescrollMixin],
  components: {
    MescrollUni,
    Item
  }
}
</script>