<template>
  <div class='home-index-wrap relative'>

    <div class="content">
      <u-swiper :list="swiperList"
                height='388'
                class="swiper"></u-swiper>

      <div class="tc relative content-wrap">
        <img src="@/static/home/00.png"
             class="main-card">

        <template v-for="(item, index) in cardList">
          <div @click="onItem(item)"
               :key="index">
            <HomeItem :item="item"
                      :style="item.style"></HomeItem>
          </div>
        </template>

        <div class="center wrap">
          <div class="qr-code-wrap mt32 row">
            <img src="@/static/home/qrcode.jpeg"
                 alt="">
            <div class="right column ml16 ft26">
              <div>长按识别，关注「天目先锋」</div>
              <div class="mt16">“天目红盟”与您相约“云之家”</div>
            </div>
          </div>
        </div>
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
          image: require('@/static/home/banner.png'),
        }
      ]),
      cardList: Object.freeze([
        {
          img: require('@/static/home/02.png'),
          text1: '初心之旅',
          text2: '一张图',
          imgW: 45,
          style: { left: '30rpx', top: '173rpx' },
          url: '/pages/original-travel/index/index'
        },
        {
          img: require('@/static/home/05.png'),
          text1: '组团发展',
          text2: '一联盟',
          imgW: 50,
          style: { left: '172rpx', top: '253rpx' },
          url: '/pages/union/index/index'
        },
        {
          img: require('@/static/home/01.png'),
          text1: '城乡融合',
          text2: '一社区',
          imgW: 50,
          style: { left: '312rpx', top: '333rpx' },
          url: '/pages/urban-rural/index/index'
        },
        {
          img: require('@/static/home/04.png'),
          text1: '乡村人才',
          text2: '一智库',
          imgW: 60,
          style: { right: '172rpx', top: '253rpx' },
          url: '/pages/think-tank/index/index'
        },
        {
          img: require('@/static/home/03.png'),
          text1: '基层治理',
          text2: '一管家',
          imgW: 50,
          style: { right: '30rpx', top: '173rpx' },
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
      margin: 24rpx 30rpx 0;
    }
    .main-card {
      height: 334rpx;
      margin-top: 32rpx;
    }
    .card {
      position: absolute;
      width: 128rpx;
    }

    .content-wrap {
      height: 720rpx;
    }
    .wrap {
      position: absolute;
      left: 0;
      right: 0;
      bottom: 0;
      .qr-code-wrap {
        text-align: center;
        padding: 12rpx;
        background: #ffffff20;
        border-radius: 8px;
        color: #ffffff;
        img {
          width: 110rpx;
          height: 110rpx;
        }

        .right {
          justify-content: center;
        }
      }
    }
  }
}
</style>
