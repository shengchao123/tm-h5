<template>
  <div class='detail-wrap'>
    <img src="">
    <div class="info">
      <div class="name ft40 bold">{{detailInfo.name}}</div>
      <div v-for="item in infoItems"
           :key="item.title"
           class="center-align mt16">
        <SvgIcon :icon="item.icon"
                 class="ft26 color-999"></SvgIcon>
        <text class="ml16 ft26 color-999">{{item.title}}</text>
        <text class="ft26"
              @click="onItemStore(item)"
              v-if="!item.url">{{detailInfo[item.key]}}</text>
        <uni-link :href="item.url"
                  v-else
                  fontSize="26"
                  color="#518cfc"
                  :showUnderLine="false"
                  :text="detailInfo[item.key]"></uni-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Detail',
  methods: {

  },
  data () {
    return {
      infoItems: [
        {
          icon: 'icon_rongyu',
          title: '时间：',
          key1: 'startTime',
          key2: 'endTime'
        },
        {
          icon: 'icon_pinpai',
          title: '品牌：',
          key: 'address'
        },
        {
          icon: 'icon_chandi',
          title: '产地：',
          key: 'origin'
        },
        {
          icon: 'icon_dianpu',
          title: '店铺：',
          key: 'storeName',
          url: 'storeUrl'
        },
      ],
      detailInfo: {},
      images: [],
    }
  },
  onLoad (options) {
    this.getJourneyProductInfoById(options.id)
  }
}
</script>

<style lang='scss' scoped>
.detail-wrap {
  .info {
    padding: 30rpx;
    background: #ffffff;
  }
  .contact {
    padding: 36rpx 24rpx;
  }
}
</style>
