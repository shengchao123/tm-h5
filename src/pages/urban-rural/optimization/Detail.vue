<template>
  <div class='detail-wrap'>
    <u-swiper :list="images"
              height="562"></u-swiper>
    <div class="info">
      <div class="name ft40 bold">{{detailInfo.name}}</div>
      <template v-for="item in infoItems">
        <div v-if="detailInfo[item.key]"
             :key="item.title"
             class="center-align mt16">
          <SvgIcon :icon="item.icon"
                   class="ft26 color-999"></SvgIcon>
          <text class="ml16 ft26 color-999">{{item.title}}</text>
          <text class="ft26"
                v-if="!item.url && detailInfo[item.key]">{{detailInfo[item.key]}}</text>
          <uni-link :href="detailInfo[item.url]"
                    v-if="item.url"
                    fontSize="26"
                    color="#518cfc"
                    :showUnderLine="false"
                    :text="detailInfo[item.key]"></uni-link>
        </div>
      </template>

      <div class="contact b mt16">
        <div class="color-999 ft26"> 联系人</div>
        <div class="ft28 mt28 between-row">
          <div>{{detailInfo.contactPerson}}：{{detailInfo.contactPhone}}</div>
          <div @click="onCallPhone">
            <SvgIcon icon='icon_dianhua'
                     style="color:#518CFC;font-size:32rpx"></SvgIcon>
          </div>
        </div>
      </div>

      <div class="mt16 mb16">
        <u-divider color="#999999"
                   half-width="280"
                   border-color="#eaeaea">商品详情</u-divider>
      </div>

      <u-parse :html="detailInfo.content"></u-parse>

    </div>
  </div>
</template>

<script>
export default {
  name: 'Detail',
  methods: {
    onCallPhone () {
      uni.makePhoneCall({
        phoneNumber: this.detailInfo.contactPhone,
        success: (result) => { },
        fail: (error) => { }
      })
    },
    // 获取详情
    getJourneyProductInfoById (id) {
      const params = {
        journeyProductId: id
      }
      this.$api.getJourneyProductInfoById(params).then(res => {
        if (res.isError) return
        this.detailInfo = res.content
        this.images = res.content.images.map(item => {
          return {
            image: this.$fileHost + item.url
          }
        })
      })
    }
  },
  data () {
    return {
      infoItems: Object.freeze([
        {
          icon: 'icon_rongyu',
          title: '荣誉：',
          key: 'honor'
        },
        {
          icon: 'icon_pinpai',
          title: '品牌：',
          key: 'brand'
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
      ]),
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
