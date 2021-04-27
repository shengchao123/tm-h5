<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>

export default {
  name: 'App',
  data () {
    return {
      isShowBack: false
    }
  },
  methods: {
    closeBack () {
      this.isShowBack = true
      localStorage.setItem('isShowBack', false)
    }
  },
  watch: {
    isShowBack: {
      handler () {
        setTimeout(() => {
          this.isShowBack = localStorage.getItem('isShowBack')
        }, 300)
      },
      immediate: true
    }
  },
  created () {
  }
}
</script>

<style lang="scss">
@import "./styles/init.scss";

@import "./styles/atom.scss";
@import "./styles/flex.scss";
@import "./styles/global.scss";
</style>
