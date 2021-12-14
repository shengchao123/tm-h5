<template>
  <div class='clear-wrap'>

  </div>
</template>

<script>
export default {
  name: 'clear',
  onLoad () {
    uni.clearStorage({
      success: (result) => { },
      fail: (error) => { }
    })
  }
}
</script>

<style lang='scss' scoped>
.clear-wrap {
}
</style>
