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
    <activity ref="activity"
              v-else></activity>
  </div>
</template>
<script>
import Activity from '@/pages/league-interact/Activity'
import Forum from '@/pages/league-interact/Forum'
export default {
  name: 'index',
  methods: {
    subsectionChange (e) {
      this.subsection.curNow = e
    }
  },
  data () {
    return {
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
    this.$refs.activity && this.$refs.activity.getJourneyActivityPage()
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
}
</style>
