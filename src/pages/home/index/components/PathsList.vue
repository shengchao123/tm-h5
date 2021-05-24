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
        <div class="bold ft32 tc mt16 ellipsis tc">{{item.name}}</div>
        <div class="ft22 mt8 tc">{{item.scenicSpotQuantity}}个红色地标 {{item.playTimeName}}</div>
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
    getRecommendJourneyLineList () {
      this.$api.getRecommendJourneyLineList().then(res => {
        if (res.isError) return
        this.paths = res.content
        if (res.content && res.content.length > 0) {
          this.$emit('onSelectPath', res.content[0].journeyLineId)
        }
      })
    }
  },
  created () {
    uni.$on('initJourneyLineId', (id) => {
      this.$emit('onSelectPath', id)
    })
    this.getRecommendJourneyLineList()
  },
  data () {
    return {
      currentIndex: 0,
      paths: []
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
  .ellipsis {
    width: 100%;
    display: inline-block;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  .path-item {
    border-radius: 8rpx;
    height: 124rpx;
    width: 272rpx;
    display: inline-block;
  }
}
</style>
