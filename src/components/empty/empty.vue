<template>
  <div class='empty-wrap full center column'>
    <img src="@/static/empty/no_data.png">
    <div class="color-999 ft28 mt16">暂无内容</div>
  </div>
</template>

<script>
export default {
  name: 'empty',
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
