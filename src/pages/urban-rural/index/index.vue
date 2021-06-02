<template>
  <div class='urban-rural-wrap'
       :style="{paddingTop: current === 3 ? '176rpx' : '88rpx'}">
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

      <div class="c-tabs center-align"
           v-if="current === 3">
        <div class="tab-item center"
             @click="changeCTab(index)"
             :class="index === currentTab && 'active'"
             v-for="(item, index) in ctabs"
             :key="index">
          {{item}}
        </div>
      </div>

    </div>

    <img :src="imgs[current]"
         @click="onImage">

    <custom-tabbar></custom-tabbar>
  </div>
</template>

<script>
export default {
  name: 'index',
  methods: {
    onImage () {
      if (this.current === 0) {
        uni.navigateTo({ url: '/pages/urban-rural/optimization/Detail' })
      }
    },
    tabChange (index) {
      this.current = index
    },
    changeCTab (index) {
      this.currentTab = index

    },
  },
  data () {
    return {
      current: 0,
      imgs: Object.freeze([
        require('@/static/test/03.png'),
        require('@/static/test/04.png'),
        require('@/static/test/05.png'),
        require('@/static/test/07.png'),
      ]),
      tab: {
        list: [{
          name: '联盟优选'
        }, {
          name: '特色活动'
        }, {
          name: '定制体验',
        }, {
          name: '资源共享'
        }]
      },
      currentTab: 0,
      ctabs: ['房产商铺', '土地林地', '农产品', '其它'],
      cimgs: Object.freeze([
        require('@/static/test/03.png'),
        require('@/static/test/04.png'),
        require('@/static/test/05.png'),
        require('@/static/test/07.png'),
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
  .tab {
    position: fixed;
    top: 0;
    width: 100%;
    min-height: 88rpx;
    box-sizing: border-box;
    padding-top: 16rpx;
    background: #fff;
    .c-tabs {
      height: 88rpx;
      justify-content: space-around;
      .tab-item {
        height: 60rpx;
        width: 140rpx;
        border-radius: 30rpx;
        background: #dedede;
        color: #666666;
      }
      .active {
        background: red;
        color: salmon;
      }
    }
  }
  img {
    width: 100vw;
  }
}
</style>
