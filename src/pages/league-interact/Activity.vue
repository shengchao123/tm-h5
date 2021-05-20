<template>
  <div class='activity-wrap'>
    <div class="mt24 ml24 mr24">
      <u-tabs :list="tab.list"
              :is-scroll="false"
              height="88"
              font-size="28"
              :current="tab.current"
              active-color="#E32417"
              @change="tabChange"></u-tabs>
    </div>

  </div>
</template>

<script>
export default {
  name: 'Activity',
  methods: {
    tabChange (index) {
      this.tab.current = index;
    }
  },
  data () {
    return {
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
  }
}
</script>

<style lang='scss' scoped>
.activity-wrap {
  .scroll-Y {
    background: #f7f7f7;
  }
}
</style>
