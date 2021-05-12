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
    <div v-show="moduleType === '01'"
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
    </div>
    <!-- VR -->
    <div v-show="moduleType === '02'"
         class="vr relative">
      <img :src=" $fileHost + carouselList[1].mediaUrl" />
      <div class="center vr-icon">
        <svg-icon icon="icon_VR"
                  class="ft24"></svg-icon>
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
    initSwiper () {
      const _this = this
      const mySwiper = new this.$swiper('.swiper-container', {
        on: {
          slideChangeTransitionStart: function () {
            _this.activeIndex = this.activeIndex
          }
        }
      })
      return mySwiper
    }
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
    this.initSwiper()
  },
  created () {
  }
}
</script>
<style lang='scss' scoped>
.swiper-wrap {
  width: 100%;
  height: 280px;
  .swiper-container {
    height: 100%;
    .swiper-wrapper {
      height: 100%;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .pagination {
      position: absolute;
      right: 12px;
      bottom: 10px;
      background: rgba(0, 0, 0, 0.3);
      height: 18px;
      border-radius: 9px;
      z-index: 1;
      padding: 0 10px;
      .bullet {
        width: 6px;
        height: 6px;
        border-radius: 6px;
        background: #b2b2b2;
      }
      .bullet-active {
        background: #fff;
      }
    }
  }
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
      width: 56px;
      height: 56px;
      border-radius: 28px;
      background: rgba(0, 0, 0, 0.5);
      color: #fff;
    }
  }
  .module-switch {
    position: absolute;
    z-index: 2;
    left: 12px;
    bottom: 8px;
    width: 84px;
    height: 22px;
    border-radius: 11px;
    background: rgba(255, 255, 255, 0.5);
    padding: 2px 0 2px 2px;
    box-sizing: border-box;
    .slider {
      width: 40px;
      height: 18px;
      line-height: 18px;
      margin-right: 2px;
      font-size: 10px;
      color: #333;
      z-index: 1;
      transition: all 0.4s;
    }
    .slider-active {
      color: #fff;
    }
    .slider-bg {
      position: absolute;
      top: 2px;
      left: 2px;
      width: 40px;
      height: 18px;
      border-radius: 9px;
      background: #e32417;
      transition: all 0.4s;
    }
    .slider-bg-right {
      left: 42px;
    }
  }
  .ml0 {
    margin-left: 0;
  }
}
</style>
