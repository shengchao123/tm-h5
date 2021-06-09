<template>
  <div class="wrap">

    <SubTabs @change="changeSubTab"
             :tabs="subTabs"></SubTabs>
    <scroll-view scroll-y
                 class="scroll relative mt30"
                 @scrolltolower="onreachBottom">
      <div class="content"
           v-if="!$isEmpty(dataList)">
        <div v-for="item in dataList"
             :key="item.id">
          <ExperienceItem :item="item"></ExperienceItem>
        </div>
      </div>

      <empty v-else></empty>
    </scroll-view>

    <view class="add white-color bold center tc"
          @click="onAdd">
      <svg-icon icon="icon_fabu"
                class="ft32"></svg-icon>
    </view>
  </div>
</template>

<script>
import SubTabs from '@/pages/urban-rural/components/SubTabs'
import ExperienceItem from '@/pages/urban-rural/components/ExperienceItem'

export default {
  name: 'List',
  methods: {
    onAdd () {
      // 判断是否登录逻辑
      // if (this.$notMember()) return this.$goLogin();
      uni.navigateTo({
        url: '/pages/urban-rural/experience/AddMerchantBooth'
      });
    },
    changeSubTab (item) {
      if (this.search.status === item.status) return
      // this.search.status = item.status
      // this.search.pageNumber = 1
      // this.getJourneyActivityPage()
    },
    onreachBottom () {
      this.search.pageNumber++
    },
    // 获取商品列表
    getJourneyMerchantBoothInfoPage () {
      const params = {
        ...this.search
      }
      this.$api.getJourneyMerchantBoothInfoPage(params).then(res => {
        if (res.isError) return
        this.dataList = res?.content?.items.map(item => {
          const _appropriateCrowdFormat = item.appropriateCrowd.map(item => item.typeName)
          const _serviceContentFormat = item.serviceContent.map(item => item.typeName)
          item.appropriateCrowdFormat = _appropriateCrowdFormat.join(' ')
          item.serviceContentFormat = _serviceContentFormat.join(' ')
          return item
        })
      })
    }
  },
  created () {
    this.getJourneyMerchantBoothInfoPage()
  },
  components: { SubTabs, ExperienceItem },
  data () {
    return {
      search: {
        pageNumber: 1,
      },
      subTabs: [
        {
          status: '',
          text: '实时推荐'
        },
        {
          status: '01',
          text: '我要定制'
        },
        {
          status: '02',
          text: '我要接单'
        }
      ],
      dataList: [
        {
          "address": "",
          "code": "",
          "endTime": "",
          "id": 0,
          "introduction": "",
          "isBelong": false,
          "isSignUp": false,
          "lat": 0,
          "lng": 0,
          "masterOrgId": 0,
          "name": "",
          "numberLimit": 0,
          "orgId": 0,
          "orgName": "",
          "phone": "",
          "signUpQuantity": 0,
          "startTime": "",
          "status": "",
          "statusName": "",
          "styleDescription": "",
          "type": ""
        }
      ]
    }
  }
}
</script>

<style lang='scss' scoped>
.wrap {
  height: 100%;
  .scroll {
    height: calc(100% - 104rpx);
    .content {
      justify-content: space-between;
      flex-wrap: wrap;
    }
  }
  .add {
    position: fixed;
    right: 32rpx;
    bottom: 90rpx;
    width: 98rpx;
    height: 98rpx;
    border-radius: 50%;
    box-shadow: 4rpx 6rpx 8rpx 0 rgba(14, 2, 2, 0.25);
    z-index: 100;
    background: #e32417;
    font-size: 56rpx;
  }
}
</style>
