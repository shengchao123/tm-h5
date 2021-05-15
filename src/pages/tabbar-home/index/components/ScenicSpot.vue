<template>
  <div class='scenic-spot-wrap flex1'>
    <NumList v-for="(item, index) in pagePoints"
             :config="{item, index}"
             :key="index"></NumList>
  </div>
</template>

<script>
import NumList from '@/pages/tabbar-home/index/components/NumList'
export default {
  name: 'ScenicSpot',
  methods: {


  },
  components: { NumList },
  data () {
    return {
      pagePoints: []
    }
  },
  created () {

  },
  watch: {
    points: {
      handler: function (n) {
        if (n) this.pagePoints = n
      },
      immediate: true
    }
  },
  props: {
    points: Array
  }
}
</script>

<style lang='scss' scoped>
.scenic-spot-wrap {
  position: absolute;
  top: 264rpx;
  bottom: 144rpx;
  left: 0;
  right: 0;
  overflow: scroll;
  box-sizing: border-box;
  overflow: scroll;
  white-space: nowrap;
}
</style>
