<template>
  <div class='paths-list-wrap'>
    <div class="title ft17 bold">路线推荐</div>
    <div class="path-container mt32">
      <div v-for="(item, index) in paths"
           @click="onSelectPath(item, index)"
           :ref="'item' + index"
           class="path-item mr32"
           :class="currentIndex === index ? 'item-active' : 'item-normal'"
           :key="index">
        <div class="bold ft32 tc mt16">{{item.name}}</div>
        <div class="ft22 mt8 tc">{{item.scenicSpotQuantity}}个红色地标 {{item.playTimeName}}天</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PathsList',
  methods: {
    onSelectPath (item, index) {
      this.$emit('onSelectPath', item.journeyLineId)

      const _scrollItem = this.$refs['item' + index][0]
      _scrollItem.scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'start' })

      this.currentIndex = index
    },
    // 根据 orgId 获取路线
    getJourneyLineListByOrgId () {
      this.$api.getJourneyLineListByOrgId().then(res => {
        if (res.isError) return
        this.paths = res.content
      })
    }
  },
  created () {
    this.getJourneyLineListByOrgId()
  },
  data () {
    return {
      currentIndex: 0,
      paths: [
        {
          journeyLineId: 1,
          name: '高虹镇',
          playTime: '',
          playTimeName: '1天',
          scenicSpotQuantity: 4
        },
        {
          journeyLineId: 2,
          name: '太原胡',
          playTime: '',
          playTimeName: '半天',
          scenicSpotQuantity: 3
        },
        {
          journeyLineId: 3,
          name: '天目山镇',
          playTime: '',
          playTimeName: ' 6',
          scenicSpotQuantity: 6
        },
        {
          journeyLineId: 4,
          name: '希望工程',
          playTime: '',
          playTimeName: '7',
          scenicSpotQuantity: 8
        }

      ]
    }
  }
}
</script>

<style lang='scss' scoped>
.paths-list-wrap {
  padding: 16rpx 32rpx 0 32rpx;
  overflow-x: hidden;
  .path-container {
    box-sizing: border-box;
    overflow: scroll;
    white-space: nowrap;
  }
  .path-container::-webkit-scrollbar {
    display: none;
  }

  .item-active {
    background-image: linear-gradient(90deg, #ffdb5d 21%, #ffca00 96%);
    color: #333333;
  }
  .item-normal {
    background: #eeeeee;
    color: #666666;
  }

  .path-item {
    border-radius: 8rpx;
    height: 124rpx;
    width: 272rpx;
    display: inline-block;
  }
}
</style>
