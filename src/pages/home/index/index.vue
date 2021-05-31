<template>
  <div class='home-index-wrap relative'>

    <div class="content">
      <u-swiper :list="swiperList"
                height='388'
                class="swiper"></u-swiper>

      <div class="tc relative">
        <img src="@/static/home/00.png"
             class="main-card">

        <template v-for="(item, index) in cardList">
          <img :key="index"
               :src="item.img"
               class="card"
               :style="item.style"
               @click="onCard(item)">
        </template>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'index',
  methods: {
    onCard (item) {
      uni.navigateTo({ url: item.url })
    },
  },
  data () {
    return {
      swiperList: Object.freeze([
        {
          image: require('@/static/test/banner.png'),
        },
        {
          image: require('@/static/test/banner2.png'),
        }
      ]),
      cardList: Object.freeze([
        {
          img: require('@/static/home/01.png'),
          style: { left: '30rpx', top: '255rpx' },
          url: '/pages/original-travel/index/index'
        },
        {
          img: require('@/static/home/02.png'),
          style: { left: '172rpx', top: '335rpx' },
          url: '/pages/union/index/index'
        },
        {
          img: require('@/static/home/03.png'),
          style: { left: '312rpx', top: '415rpx' },
          url: '/pages/urban-rural/index/index'
        },
        {
          img: require('@/static/home/04.png'),
          style: { right: '172rpx', top: '335rpx' },
          url: '/pages/think-tank/index/index'
        },
        {
          img: require('@/static/home/05.png'),
          style: { right: '30rpx', top: '255rpx' },
          url: '/pages/steward/index/index'
        },
      ])
    }
  }
}
</script>

<style lang='scss' scoped>
.home-index-wrap {
  .content {
    background: url("@/static/home/bg.jpg") no-repeat 0 0;
    background-size: 100% 100%;
    position: absolute;
    width: 100vw;
    height: 100vh;
    top: 0;
    bottom: 0;
    overflow: hidden;
    .swiper {
      margin: 50rpx 30rpx 0;
    }
    .main-card {
      height: 334rpx;
      margin-top: 100rpx;
    }
    .card {
      position: absolute;
      width: 128rpx;
    }
  }
}
</style>
