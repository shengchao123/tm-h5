<template>
  <div class='-wrap'>
  </div>
</template>
<script>
export default {
  methods: {
    findCommunityOrganizationTree () {
      this.$api.findCommunityOrganizationTree().then(res => {
        if (res.isError) return this.$msg(res.message)
        console.log(res)
      })
    }
  },
  data () {
    return {

    }
  },
  created () {
    this.findCommunityOrganizationTree()
  }
}
</script>
<style lang='scss' scoped>
.-wrap {
}
</style>