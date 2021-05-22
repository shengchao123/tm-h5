<template>
  <div class='league-interact-wrap'>
    <div class="center tabs bg-white">
      <div class="top-tabs">
        <u-subsection :list="subsection.list"
                      :height="56"
                      mode="subsection"
                      active-color="#E32417"
                      :current="subsection.curNow"
                      @change="subsectionChange"></u-subsection>
      </div>
    </div>
    <view>
      <forum v-if="subsection.curNow === 0"></forum>
      <activity ref="activity"
                v-else
                class="activity-wrap"
                :isEmpty="isEmpty"
                :dataList="dataList"
                :current.sync="current"
                :height="100"
                @getListData="getListData"></activity>
    </view>
  </div>
</template>
<script>
import Activity from '@/pages/components/Activity.vue'
import Forum from '@/pages/league-interact/Forum'
export default {
  name: 'index',
  methods: {
    getListData (page) {
      const params = {
        status: this.current !== 0 ? "0" + this.current : '',
        pageNumber: page && page.num || 1,
        pageSize: page && page.size || 10
      }
      this.$api.getJourneyActivityPage(params).then(res => {
        if (res.isError || !res.content) {
          this.$refs.activity.mescroll.endBySize(0, 0)
          this.dataList = []
          this.isEmpty = true
          return
        }
        const { items, count } = res.content
        this.$refs.activity.mescroll.endBySize(items.length, count)
        if (params.pageNumber === 1) this.dataList = []
        this.dataList = this.dataList.concat(items)
        this.isEmpty = this.$isEmpty(this.dataList)
      })
    },
    subsectionChange (e) {
      this.subsection.curNow = e
    }
  },
  data () {
    return {
      upOption: {
        empty: {
          use: false
        },
        textNoMore: "没有更多数据",
        noMoreSize: 10, // 配置列表的总数量要大于等于10条才显示'-- END --'的提示
      },
      isEmpty: false,
      dataList: [],
      current: 0,
      subsection: {
        list: Object.freeze([
          {
            name: '论坛'
          },
          {
            name: '活动'
          }
        ]),
        curNow: 1
      }
    }
  },
  onShow () {
    this.getListData()
  },
  components: { Activity, Forum },
}
</script>
<style>
page {
  background: #f7f7f7;
}
</style>
<style lang='scss' scoped>
.league-interact-wrap {
  .tabs {
    width: 100%;
    position: fixed;
    z-index: 9;
    top: 0;
    height: 112rpx;
    .top-tabs {
      width: 272rpx;
    }
  }
}
</style>
