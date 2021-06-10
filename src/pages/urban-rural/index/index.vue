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
      <swiper-item>
        <List1></List1>
      </swiper-item>
      <swiper-item>
        <List2></List2>
      </swiper-item>
      <swiper-item>
        <List3></List3>
      </swiper-item>
      <swiper-item>
        <List4></List4>
      </swiper-item>
    </swiper>

    <custom-tabbar></custom-tabbar>
  </div>
</template>

<script>
import List1 from '../optimization/List.vue'
import List2 from '../activity/List.vue'
import List3 from '../experience/List.vue'
import List4 from '../resource/List.vue'
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
  components: { List1, List2, List3, List4 },
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
      ]
    }
  }
}
</script>

<style lang='scss' scoped>
.urban-rural-wrap {
  height: 100%;
  background: #f7f7f7;
  padding-bottom: 50px;
  height: calc(100vh - 50px);
  .swiper {
    height: calc(100vh - 80rpx - 50px);
  }
}
</style>
