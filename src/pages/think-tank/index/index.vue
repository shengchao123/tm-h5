<template>
  <div class='think-tank-wrap'>
    <div class="tab">
      <u-tabs :list="tab.list"
              :is-scroll="false"
              bar-width="32"
              bar-height="4"
              height="60"
              font-size="28"
              :offset="[20, 0]"
              :current="current"
              active-color="#E32417"
              inactive-color="#666666"
              @change="tabChange"></u-tabs>
    </div>
    <policy-info v-if="current === 0"></policy-info>
    <expert-services v-if="current===1"></expert-services>
    <img v-if="current===2"
         :src="imgs[current]"
         @click="onImage">
    <custom-tabbar></custom-tabbar>
  </div>
</template>

<script>
import PolicyInfo from './components/policy-info';
import ExpertServices from './components/expert-services';
export default {
  name: 'index',
  methods: {
    onImage () {
      if (this.current === 0) {
        uni.navigateTo({ url: '/pages/think-tank/policy/Detail' })
      }
      if (this.current === 2) {
        uni.navigateTo({ url: '/pages/think-tank/countryside/Detail' })
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
        require('@/static/test/081.png'),
        require('@/static/test/082.png'),
        require('@/static/test/083.png'),
      ]),
      tab: {
        list: [
          {
            name: '政策信息'
          },
          {
            name: '专家服务'
          },
          {
            name: '涉农项目'
          },
        ]
      }
    }
  },
  components: {
    PolicyInfo,
    ExpertServices
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
.think-tank-wrap {
  padding-bottom: 50px;
  padding-top: 100rpx;
  .tab {
    position: fixed;
    top: 0;
    width: 100%;
    height: 88rpx;
    box-sizing: border-box;
    padding-top: 16rpx;
    background: #fff;
  }
  img {
    width: 100vw;
  }
}
</style>
