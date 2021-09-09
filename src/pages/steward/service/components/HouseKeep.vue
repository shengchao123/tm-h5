<template>
  <div class='house-keep-wrap'>
    <div class="tip">
      <svg-icon icon='icon_tishi1'
                class="mr8"></svg-icon>
      本平台仅为家政公司推介，相关售后问题请直接联系店铺客服
    </div>

    <div style="padding: 30rpx;">
      <div class="item row mb16"
           @click="onItem(item)"
           v-for="(item, index) in list"
           :key="index">
        <img :src="item.img">
        <div class="column ml24 mt12">
          <div class="ft32 medium">{{item.name}}</div>
          <div class="mt24 ft26 color-666">{{item.text}}</div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import SvgIcon from '../../../../components/SvgIcon.vue'
export default {
  components: { SvgIcon },
  name: 'HouseKeep',
  methods: {
    onItem (item) {
      window.location.replace(item.link)
    }
  },
  data () {
    return {
      list: Object.freeze([
        {
          name: '依乐享管家',
          text: '匠心服务，乐享生活',
          img: require('@/static/steward/keep1.png'),
          link: 'http://shop10000264.daojiahulian.com/app/index.php?i=264&c=entry&m=ewei_shopv2&do=mobile&mid=167890&v=163039'
        },
        {
          name: '钱王易万家',
          text: '钱王易万家，服务好生活',
          img: require('@/static/steward/keep2.png'),
          link: 'http://life.wanjiakeji.net/life_life/life_jump.html'
        },
        {
          name: '千百匠',
          text: '一站式家居服务',
          img: require('@/static/steward/keep3.png'),
          link: 'http://m.fanjue99.com'
        },
      ])
    }
  }
}
</script>

<style lang='scss' scoped>
.house-keep-wrap {
  .item {
    box-shadow: 3rpx 2rpx 12rpx 8rpx rgba(17, 17, 17, 0.03);
    border-radius: 8rpx;
    background: #fff;
    padding: 30rpx 24rpx;
    img {
      height: 120rpx;
      width: 120rpx;
    }
  }
  .tip {
    padding: 16rpx 30rpx;
    background: rgba($color: #518cfc, $alpha: 0.2);
    font-size: 25rpx;
    color: #518cfc;
  }
}
</style>
