<template>
  <div class='urban-rural-wrap'>
    <img src="@/static/banner.png"
         style="width:100vw;height:200rpx"
         @click="onImg">
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
      <swiper-item class="bg-white">
        <List1 v-if="current === 0 || hasLoaded(0)"></List1>
      </swiper-item>
      <swiper-item>
        <List2 v-if="current === 1 || hasLoaded(1)"></List2>
      </swiper-item>
      <swiper-item>
        <List3 v-if="current === 2 || hasLoaded(2)"></List3>
      </swiper-item>
      <swiper-item>
        <List4 v-if="current === 3 || hasLoaded(3)"></List4>
      </swiper-item>
    </swiper>

    <custom-tabbar></custom-tabbar>

    <u-action-sheet :list="actions"
                    @click="onSelectGuide"
                    v-model="showGuide"></u-action-sheet>

    <ShareDialog ref="shareDialog"
                 shareBtns="copyLink"
                 :shareData="shareData"></ShareDialog>
  </div>
</template>

<script>
import List1 from '../optimization/List.vue'
import List2 from '../activity/List.vue'
import List3 from '../experience/List.vue'
import List4 from '../resource/List.vue'
import { beginGuide } from '@/utils/map.js'
import ShareDialog from '@/pages/components/ShareDialog'

export default {
  name: 'index',
  methods: {
    // 选择地图导航回调
    onSelectGuide (act) {
      const { lng, lat, address } = this.guideItem
      beginGuide(act, {
        name: address,
        lng,
        lat
      })
    },
    onImg () {
      window.location.href = 'https://loan.jztdata.com:18085/html/index.html'
    },
    setShareData (shareData) {
      this.shareData = JSON.parse(JSON.stringify(shareData))
      this.$refs.shareDialog.show()
    },
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
  created () {
    uni.$on('onOpenGuide', (data) => {
      this.showGuide = true
      this.guideItem = data
    })
  },
  components: { List1, List2, List3, List4, ShareDialog },
  provide () {
    return {
      setShareData: this.setShareData,
    }
  },
  data () {

    this.guideItem = {}
    return {
      shareData: {},
      current: 0,
      actions: Object.freeze([{ text: '高德地图' }, { text: '腾讯地图' }]),
      showGuide: false,
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
      cacheCurrent: [0]
    }
  },
  computed: {
    hasLoaded () {
      return (index) => {
        return this.cacheCurrent.includes(index)
      }
    },
  },
  watch: {
    current (val) {
      if (this.cacheCurrent.includes(val)) return
      this.cacheCurrent.push(val)
    }
  },
}
</script>

<style lang='scss' scoped>
.urban-rural-wrap {
  background: #f7f7f7;
  padding-bottom: 50px;
  height: calc(100vh - 50px);
  overflow-y: hidden;
  .swiper {
    height: calc(100vh - 80rpx - 50px - 200rpx);
  }
}
</style>
