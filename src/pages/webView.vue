<template>
  <web-view :src="webUrl"></web-view>
</template>
<script>
export default {
  name: 'name',
  data () {
    return {
      webUrl: ''
    }
  },
  onLoad ({ webUrl }) {
    this.webUrl = webUrl
  },
}
</script>
<style lang='scss' scoped>
.web-view-wrap {
}
</style>