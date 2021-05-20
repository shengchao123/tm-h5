<template>
  <div class='scenic-spot-wrap flex1'>
    <NumList v-for="(item, index) in pagePoints"
             @onPlayer="onPlayer"
             :pointData="{item, index}"
             :key="index"></NumList>
  </div>
</template>

<script>
import NumList from '@/pages/home/index/components/NumList'
export default {
  name: 'ScenicSpot',
  methods: {
    onPlayer ({ item, index }) {
      const { isPlayed, mp3 } = item
      this.pagePoints.forEach(point => {
        point.isPlayed = false
        if (point.mp3) point.mp3.pause()
        return point
      })
      if (isPlayed && mp3) {
        item.mp3.pause()
        item.isPlayed = false
      } else {
        const mp3 = new Audio(item.url)
        mp3.play() // 播放 mp3这个音频对象
        item.isPlayed = true
        item.mp3 = mp3
      }

      const _points = [...this.pagePoints]
      _points[index] = item
      this.pagePoints = _points
    }

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
}
</style>
