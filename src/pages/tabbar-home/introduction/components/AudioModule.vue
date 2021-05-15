<template>
  <div class='audio-wrap center-align'>
    <div class="play-btn center mr8"
         @click="onPlayBtn">
      <svg-icon :icon="isPlay ? 'icon_zanting' : 'icon_bofang'"
                class="ft12"></svg-icon>
    </div>
    <div class="flex1">
      <div class="between-row mb8">
        <span class="ft12 color-333">语音播报</span>
        <span class="ft10 color-999">{{audioTime}}</span>
      </div>
      <div class="progress-bar flex1">
        <div class="progress"
             :style="{width: progressWidth}"></div>
      </div>
    </div>
  </div>
</template>
<script>
let tiemr = null
export default {
  methods: {
    onPlayBtn () {
      if (this.isPlay) {
        this.audioPause()
      } else {
        this.audioPlay()
      }
      this.isPlay = !this.isPlay
    },
    audioPlay () {
      const audio = this.audio
      const { currentTime, duration } = audio
      this.currentTime = duration - currentTime
      const playPromise = audio.play()
      if (playPromise) {
        playPromise.then(() => {
          tiemr = setInterval(() => {
            const { currentTime, duration } = audio
            this.currentTime = duration - currentTime
            if (this.currentTime <= 0) {
              setTimeout(() => {
                this.onPlayEnd()
              }, 500)
              this.audioPause()
            }
          }, 1000)
        }).catch((e) => {
          console.error(e)
        })
      }
    },
    audioPause () {
      tiemr && clearInterval(tiemr)
      this.audio.pause()
    },
    onPlayEnd () {
      this.currentTime = this.duration
      this.isPlay = false
      this.audio.load()
    },
    initAudio () {
      this.audio = new Audio()
      this.audio.src = 'http://downsc.chinaz.net/Files/DownLoad/sound1/201906/11582.mp3'
      this.audio.addEventListener('loadeddata', () => {
        const { duration } = this.audio
        this.duration = duration
        this.currentTime = duration
      })
    }
  },
  data () {
    return {
      isPlay: false,
      audio: null,
      currentTime: 0,
      duration: 0
    }
  },
  computed: {
    audioTime () {
      const currentTime = this.currentTime
      let m = Math.floor(currentTime / 60)
      let s = Math.floor(currentTime % 60)
      if (m < 10) {
        m = '0' + m
      }
      if (s < 10) {
        s = '0' + s
      }
      return m + ':' + s
    },
    progressWidth () {
      const { duration, currentTime } = this
      if (duration === 0) return '0%'
      return Math.ceil((duration - currentTime) / duration * 100) + '%'
    }
  },
  created () {
    this.initAudio()
  }
}
</script>
<style lang='scss' scoped>
.audio-wrap {
  width: 100%;
  height: 49px;
  border-radius: 25px;
  background: #eee;
  padding: 10px 16px;
  box-sizing: border-box;
  .play-btn {
    width: 28px;
    height: 28px;
    border-radius: 14px;
    background: #ff9204;
    color: #fff;
  }
  .progress-bar {
    height: 2px;
    background: #dedede;
    border-radius: 3px;
    overflow: hidden;
    .progress {
      background: #ff9204;
      width: 10%;
      height: 2px;
      border-radius: 3px;
    }
  }
}
</style>
