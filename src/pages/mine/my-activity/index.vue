<template>
  <view>
    <activity :dataList="dataList"
              :current.sync="current"
              @getListData="getListData"
              :isMay="true"></activity>
  </view>
</template>
<script>
import Activity from '@/pages/components/Activity.vue'
export default {
  name: 'MyActivity',
  methods: {
    getListData () {
      const params = {
        status: this.current !== 0 ? "0" + this.current : '',
        ...this.search
      }
      this.$api.getJourneyActivityList(params).then(res => {
        if (res.isError) {
          this.$msg(res.message)
          return
        }
        this.dataList = res.content
      })
    },
  },
  data () {
    return {
      dataList: [],
      search: {
        pageNumber: 1,
        pageSize: 10
      },
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