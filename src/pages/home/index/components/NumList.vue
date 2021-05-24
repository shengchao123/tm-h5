<template>
  <div class='num-list-wrap center-align between-row'>
    <div class="flex1 center-align">
      <div class="column center-align">
        <div class="line"></div>
        <div class="circle center ft22">{{pointData.index + 1}}</div>
        <div class="line"></div>
      </div>

      <div class="ft32 ml16 name">{{pointData.item.name}}</div>
    </div>

    <div class="center-align">
      <div class="btn center ml16"
           :style="{borderColor: pointData.item.isPlayed ? '#FF9204' : '#dcdcdc'}"
           @click="onPlayer">
        <SvgIcon :icon="pointData.item.isPlayed ? 'icon_zanting': 'icon_bofang'"
                 :style="{color: '#FF9204'}"
                 class="icon"></SvgIcon>
        <span class="ml8"
              :style="{color: pointData.item.isPlayed ? '#FF9204' : '#666666'}">语音</span>
      </div>

      <div class="
              btn
              center
              ml16"
           @click="onGuideVisit">
        <SvgIcon icon="icon_daolan"
                 style="color: #4CBF00"
                 class="icon"></SvgIcon>
        <span class="ml8 color-666">导览</span>
      </div>

      <div class="btn center ml16"
           @click="onGuide">
        <SvgIcon icon="icon_daohang"
                 style="color: #518CFC "
                 class="icon"></SvgIcon>
        <span class="ml8 color-666">导航</span>
      </div>
    </div>
    <u-action-sheet :list="actions"
                    @click="onSelectGuide"
                    v-model="showGuide"></u-action-sheet>
  </div>
</template>

<script>
import { beginGuide } from '@/utils/map.js'
export default {
  name: 'NumList',
  methods: {
    onPlayer () {
      this.$emit('onPlayer', this.pointData)
    },
    onGuideVisit () {
      sessionStorage.setItem('pointData', JSON.stringify(this.pointData.item))
      uni.navigateTo({ url: '/pages/home/point-guide/index' })
    },
    onGuide () {
      this.showGuide = true
    },
    // 选择地图导航回调
    onSelectGuide (act) {
      beginGuide(act, this.pointData)
    }
  },
  data () {
    return {
      showGuide: false,
      actions: Object.freeze([{ text: '高德地图' }, { text: '腾讯地图' }]),
    }
  },
  props: {
    pointData: Object
  }
}
</script>

<style lang='scss' scoped>
.num-list-wrap {
  padding: 0 32rpx;
  .line {
    border-left: 1px solid #ffd53d;
    width: 1px;
    height: 40rpx;
  }
  .name {
    width: 29vw;
    white-space: normal;
    word-break: break-all;
    word-wrap: break-word;
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
      font-size: 18rpx;
    }
  }
}
</style>
