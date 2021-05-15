<template>
  <div class='swiper-wrap relative'>
    <div class="module-switch center-align">
      <div v-for="(item, index) in moduleList"
           :key="index"
           class="slider tc relative"
           :class="item.id === moduleType && 'slider-active'"
           @click="onModuleSwitch(item.id)">{{item.name}}</div>
      <div class="slider-bg"
           :class="moduleType === '02' && 'slider-bg-right'"></div>
    </div>
    <!-- 轮播图 -->
    <!-- <div v-show="moduleType === '01'"
         class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide"
             v-for="(item, index) in carouselList"
             :key="index">
          <img :src="item.mediaUrl ? $fileHost + item.mediaUrl : ''" />
        </div>
      </div>
      <div class="pagination center-align">
        <div v-for="(item, index) in carouselList"
             :key="index"
             class="bullet ml12"
             :class="paginationClass(index)"></div>
      </div>
    </div> -->
    <div class="swiper" v-show="moduleType === '01'">
      <swiper
        :style="{height: '560rpx'}"
        :indicator-dots="false"
        :autoplay="false"
        circular>
        <swiper-item  v-for="(item, index) in carouselList"
              :key="index">
          <div class="swiper-item">
            <img :src="item.mediaUrl ? $fileHost + item.mediaUrl : ''" />
          </div>
        </swiper-item>
      </swiper>
      <div class="pagination center-align">
        <div v-for="(item, index) in carouselList"
             :key="index"
             class="bullet ml24"
             :class="paginationClass(index)"></div>
      </div>
    </div>
    <!-- VR -->
    <div v-show="moduleType === '02'"
         class="vr relative">
      <img :src=" $fileHost + carouselList[1].mediaUrl" />
      <div class="center vr-icon">
        <svg-icon icon="icon_VR" class="ft24"></svg-icon>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    onModuleSwitch (id) {
      this.moduleType = id
    },
  },
  data () {
    return {
      activeIndex: 0,
      moduleType: '01',
      moduleList: [{ id: '01', name: '图片' }, { id: '02', name: 'VR' }],
      carouselList: [
        { mediaUrl: 'material/image/2021042811231940992819898428416.jpg' },
        { mediaUrl: 'material/image/2021042115395740374787088002048.jpg' },
        { mediaUrl: 'material/image/2021042115395740374787088002048.jpg' }
      ]
    }
  },
  computed: {
    // swiperHeight () {
    //   const winWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth
    //   return winWidth * 3 / 4
    // },
    fileHost () {

    },
    paginationClass () {
      return (index) => {
        let className = ''
        if (index === this.activeIndex) {
          className += 'bullet-active'
        }
        if (index === 0) {
          className += ' ml0'
        }
        return className
      }
    }
  },
  mounted () {
  },
  created () {
  }
}
</script>
<style lang='scss' scoped>
.swiper-wrap {
  width: 100%;
  height: 560rpx;
  .swiper {
    img {
      width: 100%;
      height: 100%;
    }
    .pagination {
      position: absolute;
      right: 24rpx;
      bottom: 20rpx;
      background: rgba(0, 0, 0, 0.3);
      height: 36rpx;
      border-radius: 18rpx;
      z-index: 1;
      padding: 0 20rpx;
      .bullet {
        width: 12rpx;
        height: 12rpx;
        border-radius: 12rpx;
        background: #b2b2b2;
      }
      .bullet-active {
        background: #fff;
      }
    }
  }
  // .swiper-container {
  //   height: 100%;
  //   .swiper-wrapper {
  //     height: 100%;
  //     img {
  //       width: 100%;
  //       height: 100%;
  //     }
  //   }
  //   .pagination {
  //     position: absolute;
  //     right: 12px;
  //     bottom: 10px;
  //     background: rgba(0, 0, 0, 0.3);
  //     height: 18px;
  //     border-radius: 9px;
  //     z-index: 1;
  //     padding: 0 10px;
  //     .bullet {
  //       width: 6px;
  //       height: 6px;
  //       border-radius: 6px;
  //       background: #b2b2b2;
  //     }
  //     .bullet-active {
  //       background: #fff;
  //     }
  //   }
  // }
  .vr {
    width: 100%;
    height: 100%;
    img {
      width: 100%;
      height: 100%;
    }
    .vr-icon {
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      margin: auto;
      width: 112rpx;
      height: 112rpx;
      border-radius: 56rpx;
      background: rgba(0, 0, 0, 0.5);
      color: #fff;
    }
  }
  .module-switch {
    position: absolute;
    z-index: 2;
    left: 24rpx;
    bottom: 16rpx;
    width: 168rpx;
    height: 44rpx;
    border-radius: 22rpx;
    background: rgba(255, 255, 255, 0.5);
    padding: 4rpx 0 4rpx 4rpx;
    box-sizing: border-box;
    .slider {
      width: 80rpx;
      height: 36rpx;
      line-height: 36rpx;
      margin-right: 4rpx;
      font-size: 20rpx;
      color: #333;
      z-index: 1;
      transition: all 0.4s;
    }
    .slider-active {
      color: #fff;
    }
    .slider-bg {
      position: absolute;
      top: 4rpx;
      left: 4rpx;
      width: 80rpx;
      height: 36rpx;
      border-radius: 18rpx;
      background: #e32417;
      transition: all 0.4s;
    }
    .slider-bg-right {
      left: 84rpx;
    }
  }
  .ml0 {
    margin-left: 0;
  }
}
</style>
