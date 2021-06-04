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
          <HomeItem :item="item"
                    :style="item.style"
                    @click="onItem(item)"
                    :key="index"></HomeItem>
        </template>
      </div>
    </div>

  </div>
</template>

<script>
import HomeItem from '@/pages/home/components/HomeItem'
export default {
  name: 'index',
  methods: {
    onItem (item) {
      uni.navigateTo({ url: item.url })
    },
  },
  components: { HomeItem },
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
          img: require('@/static/home/02.png'),
          text: '初心之旅——张图',
          imgW: 45,
          style: { left: '30rpx', top: '205rpx' },
          url: '/pages/original-travel/index/index'
        },
        {
          img: require('@/static/home/05.png'),
          text: '组团发展——联盟',
          imgW: 50,
          style: { left: '172rpx', top: '285rpx' },
          url: '/pages/union/index/index'
        },
        {
          img: require('@/static/home/01.png'),
          text: '城乡融合——社区',
          imgW: 50,
          style: { left: '312rpx', top: '365rpx' },
          url: '/pages/urban-rural/index/index'
        },
        {
          img: require('@/static/home/04.png'),
          text: '乡村人才——智库',
          imgW: 60,
          style: { right: '172rpx', top: '285rpx' },
          url: '/pages/think-tank/index/index'
        },
        {
          img: require('@/static/home/03.png'),
          text: '基层治理——管家',
          imgW: 50,
          style: { right: '30rpx', top: '205rpx' },
          url: '/pages/steward/index/index'
        },
      ])
    }
  },
  onLoad (option) {
    if (option.masterOrgId) {
      uni.setStorageSync('masterOrgId', option.masterOrgId)
      uni.setStorageSync('orgId', option.masterOrgId)
    }
  },
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
      margin-top: 50rpx;
    }
    .card {
      position: absolute;
      width: 128rpx;
    }
  }
}
</style>
