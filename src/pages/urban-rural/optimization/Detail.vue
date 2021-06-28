<template>
  <div class='detail-wrap'>
    <u-swiper :list="images"
              height="562"></u-swiper>
    <div>
      <div class="content bg-white p32">
        <div class="name ft40 bold">{{detailInfo.name}}</div>
        <template v-for="item in infoItems">
          <div v-if="detailInfo[item.key] || detailInfo[item.key1]"
               :key="item.title"
               class="mt16 row">
            <SvgIcon :icon="item.icon"
                     class="ft26 color-999"></SvgIcon>
            <text class="ml16 ft26 color-999">{{item.title}}</text>

            <div v-if="item.key2"
                 class="center-align">
              <div>{{detailInfo[item.key1]}}，{{detailInfo[item.key2]}}</div>
              <div @click="onCallPhone"
                   class="ml16">
                <SvgIcon icon='icon_dianhua'
                         style="color:#518CFC;font-size:32rpx"></SvgIcon>
              </div>
            </div>

            <text class="ft26 max-width"
                  v-else-if="!item.url && detailInfo[item.key]">{{detailInfo[item.key]}}</text>

            <uni-link :href="linkUrl"
                      v-if="item.url"
                      fontSize="26"
                      color="#518cfc"
                      :showUnderLine="false"
                      :text="detailInfo[item.key]"></uni-link>
          </div>
        </template>
      </div>

      <div class="buy ft24 bg-white mt2 p32 mt16">
        <div class="bold ft28">购买须知</div>
        <div class="mt24 color-666">1、关于商品，本平台所有商品均来自临安优质农场基地</div>
        <div class="mt16 color-666">2、本平台仅为联盟优选产品进行推介。产品售后请直接联系微店</div>
      </div>

      <div class="mt16 ">
        <u-divider color="#999999"
                   half-width="280"
                   bg-color="transparent"
                   border-color="#eaeaea">商品详情</u-divider>
        <div class="p32 bg-white mt16">
          <u-parse :html="detailInfo.content"></u-parse>
        </div>
      </div>

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
  computed: {
    linkUrl () {
      const { secondStoreUrl, firstStoreUrl } = this.detailInfo
      if (!secondStoreUrl) return firstStoreUrl
      const _paltform = uni.getSystemInfoSync().platform
      const _temUrl = _paltform === 'ios' ? firstStoreUrl : firstStoreUrl
      return _temUrl
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
        {
          icon: 'icon_lianxiren',
          title: '联系人：',
          key1: 'contactPerson',
          key2: 'contactPhone'
        },
        {
          icon: 'icon_pingtaiyouhui',
          title: '平台优惠：',
          key: 'platformOffers'
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
.max-width {
  max-width: 500rpx;
}
.p32 {
  padding: 32rpx;
}
.detail-wrap {
  background: #f7f7f7;
  .content {
    padding: 32rpx;
  }
}
</style>
