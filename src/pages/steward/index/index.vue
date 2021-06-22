<template>
  <div class='steward-wrap'
       @click="onMessage">
    <img src="@/static/test/11.png">
    <custom-tabbar></custom-tabbar>
  </div>
</template>

<script>
export default {
  methods: {
    onMessage () {
      this.$msg('功能开发中')
    }
  }
}
</script>

<style lang='scss' scoped>
.steward-wrap {
  padding-bottom: 100rpx;
  img {
    width: 100vw;
  }
}
</style>
