<template>
  <div class='urban-rural-wrap'>
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
        uni.navigateTo({ url: '/pages/urban-rural/optimization/Detail' })
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
        require('@/static/test/03.png'),
        require('@/static/test/04.png'),
        require('@/static/test/05.png'),
        require('@/static/test/07.png'),
      ]),
      tab: {
        list: [{
          name: '联盟优选'
        }, {
          name: '特色活动'
        }, {
          name: '定制体验',
        }, {
          name: '资源共享'
        }]
      },
    }
  }
}
</script>

<style lang='scss' scoped>
.urban-rural-wrap {
  padding-top: 30rpx;
  padding-bottom: 50px;
  img {
    width: 100vw;
  }
}
</style>
