<template>
  <div class="c-tabs center-align">
    <div class="tab-item center"
         :class="index === current && 'active'"
         v-for="(item, index) in tabs"
         @click="onTab(index, item)"
         :key="index">
      {{item.text}}
    </div>
  </div>
</template>

<script>
export default {
  name: 'SubTabs',
  methods: {
    onTab (index, item) {
      this.current = index
      this.$emit('change', item)
    },
  },
  data () {
    return {
      current: 0
    }
  },
  props: {
    tabs: Array
  }
}
</script>

<style lang='scss' scoped>
.c-tabs {
  height: 105rpx;
  padding: 0 16rpx;
  justify-content: space-around;
  .tab-item {
    height: 60rpx;
    width: 160rpx;
    font-size: 26rpx;
    border-radius: 28rpx;
    background: #a6a6a610;
    color: #666666;
  }
  .active {
    background: #f5440010;
    color: #e32417;
  }
}
</style>
