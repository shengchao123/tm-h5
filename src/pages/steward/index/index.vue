<template>
  <div class='steward-wrap relative'>
    <!-- 头部标题logo -->
    <div class="top column center-align">
      <img src="@/static/steward/top_logo.png"
           class="logo">
      <img src="@/static/steward/top_title.png"
           class="title-img">
    </div>

    <!-- 内容 -->
    <div class="content">
      <!-- 跳转icons -->
      <div class="between-row icons">
        <div class="icon column center-align"
             @click="onJump(item)"
             v-for="(item, index) in iconsOptions"
             :key="index">
          <img :src="item.imgUrl">
          <div class="icon-title ft24 medium">{{item.label}}</div>
        </div>
      </div>
      <!-- 三块 -->
      <div class="part between-row ft24">
        <div class="part1"
             @click="onAuthPart(1)">
          <div class="ft30 medium">服务站</div>
          <div class="color-999 mt16">社区服务、物业服务、家政服务，社保补贴、就业服务等</div>
        </div>

        <div class="right">
          <div class="part2"
               @click="onAuthPart(2)">
            <div class="ft30 medium">议事厅</div>
            <div class="color-999 mt16">问题反馈与解决</div>
          </div>
          <div class="part3 mt20"
               @click="onAuthPart(3)">
            <div class="ft30 medium">志愿汇</div>
            <div class="color-999 mt16">献爱心、志愿服务</div>
          </div>
        </div>
      </div>

      <swiper class="swiper"
              :indicator-dots="false"
              :autoplay="true"
              :interval="2000"
              next-margin="30rpx"
              :duration="500">
        <swiper-item>
          <div class="swiper-item">
            <img src="">
            <div class="title ft32 bold">我是标题</div>
          </div>
        </swiper-item>
      </swiper>

    </div>

    <!-- 底部导航 -->
    <custom-tabbar></custom-tabbar>
  </div>
</template>

<script>
export default {
  methods: {
    // 跳转
    onJump (item) {
      uni.navigateTo({
        url: item.page
      })
    },
    onAuthPart (type) {
      console.log(this.$isCommunityAuth)
      if (this.$notMember()) return this.$goLogin();
      if (!this.$isCommunityAuth) return uni.navigateTo({ url: '/pages/steward/auth/index' })

    }
  },
  data () {
    return {
      iconsOptions: Object.freeze([
        {
          imgUrl: require('@/static/steward/icon1.png'),
          label: '好支部',
          page: '/pages/steward/1branch/index'
        },
        {
          imgUrl: require('@/static/steward/icon2.png'),
          label: '好管家',
          page: '/pages/steward/2steward/index'
        },
        {
          imgUrl: require('@/static/steward/icon3.png'),
          label: '好帮手',
          page: '/pages/steward/3helper/index'
        },
        {
          imgUrl: require('@/static/steward/icon4.png'),
          label: '好邻里',
          page: '/pages/steward/4neighbours/index'
        },
        {
          imgUrl: require('@/static/steward/icon5.png'),
          label: '好案例',
          page: '/pages/steward/5case/index'
        },
      ])
    }
  }
}
</script>

<style lang='scss' scoped>
div {
  box-sizing: border-box;
}
.steward-wrap {
  .top {
    background-image: url("@/static/steward/top_bg.png");
    background-size: 100% 100%;
    padding: 40rpx 40rpx 80rpx;
    .logo {
      width: 150rpx;
      height: 150rpx;
      margin-bottom: 20rpx;
    }
    .title-img {
      width: 206rpx;
      height: 45rpx;
    }
    .title {
      font-family: FZCQJW--GB1-0;
      font-size: 40rpx;
      color: #fff;
    }
  }
  .content {
    background: #fff;
    overflow-y: scroll;
    border-radius: 40rpx 40rpx 0 0;
    position: fixed;
    top: 300rpx;
    left: 0;
    right: 0;
    bottom: 50px;
    .icons {
      padding: 32rpx;
    }
    .icon {
      img {
        width: 134rpx;
        height: 114rpx;
      }
    }
    .part {
      padding: 0 32rpx 32rpx;
      .common {
        padding: 32rpx;
        background-size: 100% 100%;
        width: calc(50vw - 32rpx - 9rpx);
      }
      .part1 {
        background-image: url("@/static/steward/bg1.png");
        height: 282rpx;
        line-height: 1.5;
        @extend .common;
      }
      .part2 {
        background-image: url("@/static/steward/bg2.png");
        height: 131rpx;
        line-height: 1;
        @extend .common;
      }
      .part3 {
        background-image: url("@/static/steward/bg3.png");
        height: 131rpx;
        line-height: 1;
        @extend .common;
      }
    }
  }
  .swiper {
    height: 390rpx;
  }
  .swiper-item {
    margin-right: 32rpx;
    margin-left: 32rpx;
    border-radius: 8rpx;
    box-shadow: 3px 2px 12px 8px rgba(17, 17, 17, 0.03);
    img {
      width: 654rpx;
      height: 240rpx;
    }
    .title {
      padding: 32rpx;
    }
  }
}
</style>
