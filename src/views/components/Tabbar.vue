<template>
  <van-tabbar v-model="active"
              active-color="#30A3F8">
    <van-tabbar-item v-for="(item,index) in tabbars"
                     :key="index"
                     :to="(item.path)">
      <span>{{item.title}}</span>
      <img slot="icon"
           slot-scope="props"
           :src="props.active ? item.active : item.normal" />
    </van-tabbar-item>
  </van-tabbar>
</template>
<script>
export default {
  name: 'tabbar',
  data () {
    return {
      active: 0,
      tabbars: Object.freeze([
        {
          path: 'original-travel',
          title: '初心之旅',
          normal: require('@/assets/tabbar/home.png'),
          active: require('@/assets/tabbar/home_l.png')
        },
        {
          path: 'party-league',
          title: '党建联盟',
          normal: require('@/assets/tabbar/home.png'),
          active: require('@/assets/tabbar/home_l.png')
        },
        {
          path: 'mine',
          title: '我的',
          normal: require('@/assets/tabbar/home.png'),
          active: require('@/assets/tabbar/home_l.png')
        }
      ])
    }
  },
  // 通过路由跳转判断选中的样式
  created () {
    if (this.$route.path === '/original-travel') {
      this.active = 0
    } else if (this.$route.path === '/party-league') {
      this.active = 1
    } else if (this.$route.path === '/mine') {
      this.active = 2
    }
  }
}
</script>

<style lang="scss" scoped>
.van-tabbar {
  border-top: 1px solid #eee;
  height: 55px;
  .van-tabbar-item__icon img {
    width: 22px;
    height: 22px;
  }
}

.active_tab img {
  width: 22px;
  height: 22px;
}
</style>
