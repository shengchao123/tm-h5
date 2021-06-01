<template>
  <div class='think-tank-wrap'>
    <u-tabs :list="tab.list"
            :is-scroll="false"
            font-size="28"
            :current="current"
            :bar-style="{width: '32rpx', height:'4rpx', bottom: '10rpx'}"
            active-color="#E32417"
            inactive-color="#666666"
            @change="tabChange"></u-tabs>

    <img :src="imgs[current]"
         @click="onImage">

    <custom-tabbar></custom-tabbar>
  </div>
</template>

<script>
export default {
  name: 'index',
  methods: {
    onImage () {
      if (this.current === 0) {
        uni.navigateTo({ url: '/pages/think-tank/policy/Detail' })
      }
    },
    tabChange (index) {
      this.current = index
    },
  },
  data () {
    return {
      current: 0,
      imgs: Object.freeze([
        require('@/static/test/08.png'),
        require('@/static/test/09.png'),
      ]),
      tab: {
        list: [{
          name: '政策信息'
        }, {
          name: '专家服务'
        }]
      }
    }
  }
}
</script>

<style lang='scss' scoped>
.think-tank-wrap {
  padding-top: 30rpx;
  padding-bottom: 50px;
  img {
    width: 100vw;
  }
}
</style>
