<template>
  <div class='league-interact-wrap'>
    <div class="center mt32">
      <div style="width:272rpx">
        <u-subsection :list="subsection.list"
                      height="56"
                      mode="subsection"
                      active-color="#E32417"
                      :current="subsection.curNow"
                      @change="subsectionChange"></u-subsection>
      </div>
    </div>
    <Activity v-show="subsection.curNow === 1"></Activity>
  </div>
</template>

<script>
import Activity from '@/pages/league-interact/Activity'
export default {
  name: 'index',
  methods: {
    subsectionChange () {

    }
  },
  components: { Activity },
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
  }
}
</script>

<style lang='scss' scoped>
.league-interact-wrap {
}
</style>
