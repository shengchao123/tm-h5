<template>
  <div class='urban-rural-wrap'>
    <div>
      <u-tabs-swiper ref="uTabs"
                     :list="list"
                     :current="current"
                     @change="tabsChange"
                     :is-scroll="false"
                     bar-width="32"
                     bar-height="4"
                     font-size="28"
                     active-color="#E32417"
                     inactive-color="#666666"
                     swiperWidth="750"></u-tabs-swiper>
    </div>
    <swiper :current="swiperCurrent"
            class="swiper"
            @transition="transition"
            @animationfinish="animationfinish">
      <swiper-item class="swiper-item">
        <List1></List1>
      </swiper-item>
    </swiper>

    <!-- <div class="c-tabs center-align"
         v-if="current === 3">
      <div class="tab-item center"
           @click="changeCTab(index)"
           :class="index === currentTab && 'active'"
           v-for="(item, index) in ctabs"
           :key="index">
        {{item}}
      </div>
    </div> -->

    <custom-tabbar></custom-tabbar>
  </div>
</template>

<script>
import List1 from '../optimization/List'
export default {
  name: 'index',
  methods: {
    // swiper-item左右移动，通知tabs的滑块跟随移动
    transition (e) {
      let dx = e.detail.dx;
      this.$refs.uTabs.setDx(dx);
    },
    // 由于swiper的内部机制问题，快速切换swiper不会触发dx的连续变化，需要在结束时重置状态
    // swiper滑动结束，分别设置tabs和swiper的状态
    animationfinish (e) {
      let current = e.detail.current;
      this.$refs.uTabs.setFinishCurrent(current);
      this.swiperCurrent = current;
      this.current = current;
    },
    tabsChange (index) {
      this.swiperCurrent = index;
    },
    changeCTab (index) {
      this.current = index
    },
  },
  components: { List1 },
  data () {
    return {
      current: 0,
      swiperCurrent: 0,
      list: [
        {
          name: '联盟优选'
        }, {
          name: '特色活动'
        }, {
          name: '定制体验',
        }, {
          name: '资源共享'
        }
      ],
      ctabs: ['房产商铺', '土地林地', '农产品', '其它'],
      cimgs: Object.freeze([
        require('@/static/test/21.png'),
        require('@/static/test/22.png'),
        require('@/static/test/23.png'),
        require('@/static/test/24.png'),
      ])
    }
  }
}
</script>
<style>
page {
  height: 100%;
  background: #f7f7f7;
}
</style>
<style lang='scss' scoped>
.urban-rural-wrap {
  padding-bottom: 50px;
  height: calc(100vh - 50px);
  .swiper {
    height: calc(100vh - 88rpx - 50px);
  }
  .tab {
    position: fixed;
    top: 0;
    width: 100%;
    min-height: 88rpx;
    box-sizing: border-box;
    padding-top: 16rpx;
    background: #fff;
    .c-tabs {
      height: 105rpx;
      padding: 0 16rpx;
      justify-content: space-around;
      .tab-item {
        height: 60rpx;
        width: 160rpx;
        font-size: 26rpx;
        border-radius: 28rpx;
        background: #a6a6a610;
        color: #666666;
      }
      .active {
        background: #f5440010;
        color: #e32417;
      }
    }
  }
  img {
    width: 100vw;
  }
}
</style>
