<template>
  <div class='home-wrap'>
    <Map :paths="paths"></Map>
  </div>
</template>

<script>
import Map from './map/index.vue'

export default {
  name: 'index',
  methods: {

  },
  data () {
    return {
      paths: [
        [119.005056, 30.224302],
        [119.165056, 30.124302],
        [119.365056, 30.224302],
        [119.505056, 30.204302],
        [119.765056, 30.274302]
      ]
    }
  },
  components: {
    Map
  },
  mounted () {

  }
}
</script>

<style lang='scss' scoped>
</style>
