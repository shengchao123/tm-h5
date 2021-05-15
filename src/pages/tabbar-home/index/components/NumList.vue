<template>
  <div class='num-list-wrap center-align between-row'>
    <div class="flex1 center-align">
      <div class="column center-align">
        <div class="line"></div>
        <div class="circle"></div>
        <div class="line"></div>
      </div>

      <div class="ft32 ml16">{{config.item.name}}</div>
    </div>

    <div class="center-align">
      <div class="btn center ml8"
           :style="{borderColor: config.item.isPlayed ? '#FF9204' : '#dcdcdc'}"
           @click="onPlayer(config.item, index)">
        <SvgIcon :icon="config.item.isPlayed ? 'icon_zanting': 'icon_bofang'"
                 :style="{color: '#FF9204'}"
                 class="icon"></SvgIcon>
        <span class="ml4 color-666">语音</span>
      </div>

      <div class="btn center ml8"
           @click="onGuideVisit">
        <SvgIcon icon="icon_daolan"
                 style="color: #4CBF00"
                 class="icon"></SvgIcon>
        <span class="ml4 color-666">导览</span>
      </div>

      <div class="btn center ml8"
           @click="onGuide">
        <SvgIcon icon="icon_daohang"
                 style="color: #518CFC "
                 class="icon"></SvgIcon>
        <span class="ml4 color-666">导航</span>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'NumList',
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

    }
  },
  props: {
    config: Object
  }
}
</script>

<style lang='scss' scoped>
.num-list-wrap {
  padding: 0 32rpx;
  .line {
    border-left: 1px solid #ffd53d;
    width: 1px;
    height: 40px;
  }
  .circle {
    background: #feffff;
    border: 1px solid #e1b406;
    height: 40rpx;
    width: 40rpx;
    border-radius: 22rpx;
    color: #e1b406;
  }
  .btn {
    border: 1px solid #dcdcdc;
    border-radius: 28rpx;
    width: 120rpx;
    height: 56rpx;
    font-size: 26rpx;
    .icon {
      font-size: 16rpx;
    }
  }
}
</style>
