<template>
  <div class='empty-wrap full center'>
    <img src="@/static/empty/no_data.png">
  </div>
</template>

<script>
export default {
  name: 'empty',
  data () {
    return {

    }
  }
}
</script>

<style lang='scss' scoped>
.empty-wrap {
  img {
    width: 332rpx;
    height: 256rpx;
  }
}
</style>
