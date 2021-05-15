<template>
  <div class='scenic-spot-wrap pl12 mt16 flex1'>

    <u-steps :list="numList"
             :current="1"></u-steps>

    <!-- <div slot="finish-icon"
         class="finsih-icon bold center">{{index}}</div>
    <div class="pb16 center-align">
      <div class="ft18 bold flex1">{{item.name}}</div>

      <div class="btn center ml8"
           :style="{borderColor: item.isPlayed ? '#FF9204' : '#dcdcdc'}"
           @click="onPlayer(item, index)">
        <SvgIcon :icon="item.isPlayed ? 'icon_zanting': 'icon_bofang'"
                 :style="{color: '#FF9204'}"
                 class="icon"></SvgIcon>
        <span class="ml4 ft16 color-666">语音</span>
      </div>

      <div class="btn center ml8"
           @click="onGuideVisit">
        <SvgIcon icon="icon_daolan"
                 style="color: #4CBF00"
                 class="icon"></SvgIcon>
        <span class="ml4 ft16 color-666">导览</span>
      </div>

      <div class="btn center ml8"
           @click="onGuide">
        <SvgIcon icon="icon_daohang"
                 style="color: #518CFC "
                 class="icon"></SvgIcon>
        <span class="ml4 ft16 color-666">导航</span>
      </div> 
   </div> -->
  </div>
</template>

<script>
export default {
  name: 'ScenicSpot',
  methods: {
    onPlayer (item, index) {
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
    },
    onGuideVisit () {

    },
    onGuide () {

    }

  },
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
  overflow: scroll;
  .finsih-icon {
    background: #feffff;
    border: 1px solid #e1b406;
    height: 20rpx;
    width: 20rpx;
    border-radius: 12rpx;
    font-size: 12rpx;
    color: #e1b406;
  }
  .btn {
    border: 1px solid #dcdcdc;
    border-radius: 28rpx;
    width: 60rpx;
    height: 28rpx;
    font-size: 16rpx;
    .icon {
      font-size: 8rpx;
    }
  }
}
</style>
