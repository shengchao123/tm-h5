<template>
  <div class='steward-wrap relative'>
    <img src="@/static/test/11.png"
         @click.self="onMessage">
    <div class="help"
         @click="onGoodHelper"></div>
    <custom-tabbar></custom-tabbar>
  </div>
</template>

<script>
export default {
  methods: {
    onGoodHelper () {
      uni.navigateTo({
        url: '/pages/steward/good-helper/index'
      })
    },
    onMessage () {
      this.$msg('功能开发中')
    }
  }
}
</script>

<style lang='scss' scoped>
.steward-wrap {
  padding-bottom: 100rpx;
  .help {
    position: absolute;
    top: -920rpx;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    width: 100rpx;
    height: 150rpx;
    z-index: 1;
  }
  img {
    width: 100vw;
  }
}
</style>
