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
    <forum v-if="subsection.curNow === 0"></forum>
    <activity v-else
              class="activity-wrap"
              :dataList="dataList"
              :current.sync="current"
              :height="100"
              @getListData="getListData"></activity>
  </div>
</template>
<script>
import Activity from '@/pages/components/Activity.vue'
import Forum from '@/pages/league-interact/Forum'
export default {
  name: 'index',
  methods: {
    getListData () {
      const params = {
        status: this.current !== 0 ? "0" + this.current : '',
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
    subsectionChange (e) {
      this.subsection.curNow = e
    }
  },
  data () {
    return {
      dataList: [],
      search: {
        pageNumber: 1,
        pageSize: 10
      },
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
    height: 112rpx;
    .top-tabs {
      width: 272rpx;
    }
  }
  .activity-wrap {
    margin-top: -30rpx;
  }
}
</style>
