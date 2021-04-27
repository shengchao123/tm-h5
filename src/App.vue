<template>
  <div id="app">
    <router-view />
    <div class="sc-app-back"
         v-if="isShowBack === 'true'">
      <div class="sc-bounced-alert tc">
        <div class="sc-tip ft32 bold color-333">登录失效，请重新登录再扫码</div>
        <div class="sc-know color-666 ft28"
             @click="closeBack">我知道了</div>
      </div>
    </div>
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
