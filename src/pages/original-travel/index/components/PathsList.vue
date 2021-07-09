<template>
  <div class='paths-list-wrap'>
    <div class="title ft17 bold">路线推荐</div>
    <div class="path-container mt32">
      <div v-for="(item, index) in paths"
           @click="onSelectPath(item, index)"
           :ref="'item' + index"
           class="path-item mr32"
           :class="+currentIndex === +index ? 'item-active' : 'item-normal'"
           :key="index">
        <div class="bold ft32 tc mt16 text-hidden pl8">{{item.regionsName}}</div>
        <div class="ft22 mt8 tc">{{item.scenicSpotQuantity}}个红色地标 {{item.playTimeName}}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PathsList',
  methods: {
    scroll () {
      if (this.currentIndex === 0) return
      const _scrollItem = this.$refs['item' + this.currentIndex][0]
      _scrollItem.scrollIntoView({ block: 'center', inline: 'start' })
    },
    onSelectPath (item, index) {
      this.$emit('onSelectPath', item)

      const _scrollItem = this.$refs['item' + index][0]
      _scrollItem.scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'start' })

      this.currentIndex = index
    },
    // 根据 orgId 获取路线
    getRecommendJourneyLineList () {
      this.$api.getRecommendJourneyLineList().then(res => {
        if (res.isError) return
        this.paths = res.content
        if (res.content && res.content.length > 0 && !this.$route.query.journeyLineId) {
          this.$emit('onSelectPath', res.content[0])
          return
        }
        this.handleJourneyLine()
      })
    },
    handleJourneyLine () {
      const { journeyLineId } = this.$route.query
      if (!journeyLineId) return
      for (const i in this.paths) {
        const _item = this.paths[i]
        if (_item.journeyLineId === journeyLineId) {
          this.currentIndex = i
          this.$emit('onSelectPath', _item)
          this.$nextTick(() => {
            this.scroll()
          })
          break
        }
      }
    }
  },
  created () {
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
  padding: 0rpx 32rpx 0 32rpx;
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
