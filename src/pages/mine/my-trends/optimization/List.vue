<template>
  <view class="find-wrap pl30">
    <view class="note-list">
      <Waterfall ref="waterfall"
                 :waterfallData="waterfallData"
                 top="20"
                 @getListData="getListData">
      </Waterfall>
    </view>
  </view>
</template>
<script>
import Waterfall from './slzx_waterfall/index'
export default {
  methods: {
    onScrollTop () {
      this.$refs.waterfall.onScrollTop(0, 100)
    },
    // 分页查询笔记信息(发现)
    getListData (page, callback) {
      const params = {
        pageNumber: page && page.num || 1,
        pageSize: page && page.size || 10,
      }
      this.$api.getMyItineraryEvaluationPage(params).then(res => {
        callback && callback()
        const { mescroll } = this.$refs.waterfall
        if (res.isError) return mescroll.endErr()
        const { items, count } = res.content
        if (this.$isEmpty(items)) {
          mescroll.endBySize(0, 0);
          this.waterfallData = []
          return
        }
        mescroll.endBySize(items.length, count);
        this.waterfallData = params.pageNumber === 1 ? items : this.waterfallData.concat(items)
      })
    },
  },
  data () {
    return {
      waterfallData: [],
    }
  },
  components: {
    Waterfall,
  },
  // 页面周期函数--监听页面初次渲染完成
  created () {
    this.getListData()
  }
};
</script>
<style lang='scss' scoped>
.find-wrap {
  height: 100%;
  .swiper-tab {
    height: 56rpx;
    .swiper-tab-item {
      width: 120rpx;
      height: 56rpx;
      border-radius: 33rpx;
      background: rgba($color: #a6a6a6, $alpha: 0.1);
    }
    .active {
      color: $uni-color-primary;
      background: rgba($color: $uni-color-primary, $alpha: 0.1);
    }
  }
  .note-list {
    width: 100%;
  }
}
</style>
