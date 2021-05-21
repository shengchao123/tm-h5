<template>
  <div class='activity-wrap'>
    <div class="box">
      <u-tabs :list="tab.list"
              :is-scroll="false"
              height="100"
              font-size="28"
              :current="tab.current"
              :bar-style="{width: '32rpx', height:'4rpx', bottom: '16rpx'}"
              active-color="#E32417"
              inactive-color="#666666"
              @change="tabChange"></u-tabs>
    </div>
    <view class="mt20">
      <view v-for="(item,index) in dataList"
            :key="index"
            @click="onToDetail(item)">
        <item :item="item"></item>
      </view>
    </view>
  </div>
</template>
<script>
import Item from './components/Item.vue'
export default {
  name: 'Activity',
  methods: {
    onToDetail (item) {
      uni.navigateTo({
        url: `/pages/league-interact/detail/index?id=${item.id}`
      })
    },
    // 获取活动分页
    getJourneyActivityPage () {
      const params = {
        status: this.tab.current !== 0 ? "0" + this.tab.current : '',
        ...this.search
      }
      this.$api.getJourneyActivityPage(params).then(res => {
        if (res.isError) {
          this.$msg(res.message)
          return
        }
        const { items, count } = res.content
        this.dataList = items
      })
    },
    tabChange (index) {
      this.tab.current = index;
      this.getJourneyActivityPage()
    }
  },
  data () {
    return {
      dataList: [],
      search: {
        pageNumber: 1,
        pageSize: 10
      },
      tab: {
        list: [{
          name: '全部'
        }, {
          name: '报名中'
        }, {
          name: '进行中',
        }, {
          name: '已结束'
        }],
        current: 0
      }
    }
  },
  created () {
    this.getJourneyActivityPage()
  },
  components: {
    Item
  }
}
</script>

<style lang='scss' scoped>
.activity-wrap {
  margin-top: -30rpx;
  // .scroll-Y {
  //   background: #f7f7f7;
  // }
}
</style>
