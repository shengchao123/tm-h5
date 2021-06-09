<template>
  <div class='custom-tabbar-wrap tb row center-align'>
    <div v-for="item in tabbars"
         :key="item.text"
         class="column center item"
         @click="onTabbar(item)">
      <img :src="item.iconPath">
      <div style="font-size: 12px;margin-top:3px"
           class="color-666">{{item.text}}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'custom-tabbar',
  methods: {
    onTabbar (item) {
      uni.switchTab({ url: item.pagePath })
    }
  },
  data () {
    return {
      tabbars: Object.freeze([
        {
          "pagePath": "/pages/home/index/index",
          "iconPath": require("@/static/tabbar/home.png"),
          "text": "首页"
        },
        {
          "pagePath": "/pages/mine/index/index",
          "iconPath": require("@/static/tabbar/mine.png"),
          "text": "我的"
        }
      ])
    }
  }
}
</script>

<style lang='scss' scoped>
.custom-tabbar-wrap {
  height: 50px;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background: #ffffff;
  z-index: 999;
  .item {
    width: 50%;
    padding-top: 5px;
    img {
      width: 20px;
      height: 20px;
    }
  }
}
</style>
