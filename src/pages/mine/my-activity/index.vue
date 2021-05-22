<template>
  <view>
    <activity ref="activity"
              :isEmpty="isEmpty"
              :dataList="dataList"
              :current.sync="current"
              @getListData="getListData"></activity>
  </view>
</template>
<script>
import Activity from '@/pages/components/Activity.vue'
export default {
  name: 'MyActivity',
  methods: {
    getListData (page) {
      const params = {
        status: this.current !== 0 ? "0" + this.current : '',
        pageNumber: page && page.num || 1,
        pageSize: page && page.size || 10
      }
      this.$api.getMyJourneyActivityPage(params).then(res => {
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
  },
  data () {
    return {
      isEmpty: false,
      dataList: [],
      current: 0,
    }
  },
  onShow () {
    this.getListData()
  },
  created () { },
  components: { Activity },
}
</script>
<style>
page {
  background: #f7f7f7;
}
</style>
<style lang='scss' scoped>
</style>