<template>
  <div class='experi-item-wrap mb20 relative'
       @click="onGoDetail">
    <div class="name ft40 bold mr16">{{item.title}}</div>

    <div v-for="subItem in infoItems"
         :key="subItem.title"
         class="center-align mt16">
      <div class="ft26 color-999"
           style="width:130rpx">{{subItem.title}}</div>
      <div class="ft26"
           v-if="subItem.key !== 'contactPhone'">{{item[subItem.key]}}</div>
      <div class="ft26 center-align"
           @click.stop="onCallPhone"
           v-else>
        <div>{{item[subItem.key]}}</div>
        <SvgIcon icon="icon_dianhua"
                 class="ft32 ml16"
                 style="color: #518CFC;"></SvgIcon>
      </div>
    </div>

    <div class="images row mt24"
         v-if="showImgs">
      <ImgGroup :imgList="item.images"></ImgGroup>
    </div>

    <div class="guide-btn center"
         @click.stop="onOpenGuide">
      <SvgIcon icon="icon_daohang"
               style="color:#518CFC "
               class="ft20 mr8"></SvgIcon>
      <span class="color-666 ft26">导航</span>
    </div>

    <u-action-sheet :list="actions"
                    @click="onSelectGuide"
                    v-model="showGuide"></u-action-sheet>

  </div>
</template>

<script>
import ImgGroup from '@/pages/union/interact/components/ImgGroup'
import { beginGuide } from '@/utils/map.js'
export default {
  name: 'experiItem',
  methods: {
    // 显示导航选择框
    onOpenGuide (item) {
      this.showGuide = true
    },
    onCallPhone () {
      uni.makePhoneCall({
        phoneNumber: this.item.contactPhone,
        success: (result) => { },
        fail: (error) => { }
      })
    },
    // 选择地图导航回调
    onSelectGuide (act) {
      const { lng, lat, address } = this.item
      beginGuide(act, {
        name: address,
        lng,
        lat
      })
    },
    onGoDetail () {
      uni.navigateTo({ url: '/pages/urban-rural/experience/Detail?id=' + this.item.journeyMerchantBoothId })
    },
  },
  data () {
    return {
      showGuide: false,
      actions: Object.freeze([{ text: '高德地图' }, { text: '腾讯地图' }]),
      infoItems: Object.freeze([
        {
          title: '适宜人群：',
          key: 'appropriateCrowdFormat'
        },
        {
          title: '服务内容：',
          key: 'serviceContentFormat'
        },
        {
          title: '地址：',
          key: 'address'
        },
        {
          title: '电话：',
          key: 'contactPhone',
        },
      ]),
    }
  },
  components: {
    ImgGroup
  },
  props: {
    item: Object,
    showImgs: {
      type: Boolean,
      default: true
    }
  },
  computed: {
    name () {
      return subStringWithStrlen(this.item.name, 60)
    },
    fileHost () {
      return this.$fileHost
    }
  }
}
</script>

<style lang='scss' scoped>
.experi-item-wrap {
  background: #ffffff;
  padding: 24rpx 30rpx 32rpx;
  .guide-btn {
    position: absolute;
    top: 184rpx;
    right: 30rpx;
    margin-left: 16rpx;
    height: 56rpx;
    width: 160rpx;
    line-height: 56rpx;
    text-align: center;
    border: 1px solid #dcdcdc;
    border-radius: 28rpx;
  }
  .images {
    img {
      width: 214rpx;
      height: 214rpx;
      border-radius: 6rpx;
      margin-right: 24rpx;
    }
  }
}
</style>
