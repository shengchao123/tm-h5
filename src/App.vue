<template>
  <div id="app">
    <keep-alive>
      <router-view :key="key"
                   v-if="keepAlive" />
    </keep-alive>
    <router-view :key="key"
                 v-if="!keepAlive" />
  </div>
</template>

<script>

export default {
  name: 'App',
  computed: {
    key () {
      return this.$route.path
    },
    keepAlive () {
      return this.$route.meta.keepAlive
    }
  },
  created () {
    if (!localStorage.getItem('access_token')) {
      // this.$router.push('/login')
    }
  }
}
</script>

<style lang="scss">
@import "./styles/init.scss";

@import "./styles/atom.scss";
@import "./styles/flex.scss";
@import "./styles/global.scss";
</style>
