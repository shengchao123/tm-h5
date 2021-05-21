<template>
  <div class='party-wrap'>
    <div class="map">

    </div>
    <div class="pt24 pl30 pr30 bg-white pb20">
      <div class="title center-align">
        <div class="ft34 bold">{{baseInfo.name}}</div>
        <div class="tip ft20 ml16">{{baseInfo.regionsName}}</div>
      </div>
      <div class="ft30 mt8"
           style="line-height: 42rpx">{{baseInfo.introduction}}</div>
    </div>
    <div class="mb20 bg-white pb32">
      <org-tree></org-tree>
      <div class="center">
        <div class="graphic-btn tc"
             @click="onGraphic">风采展示</div>
      </div>
    </div>
    <div class="bg-white pl30 pr30 mb20 pt24 pb30"
         @click="onJourney">
      <div class="center-align">
        <svg-icon icon="icon_shifandai"
                  class="ft32"
                  style="color: #BF2B19"></svg-icon>
        <span class="ft32 medium ml8">示范带</span>
      </div>
      <div class="between-row center-align pt28 pb24 pl40">
        <span class="ft30 medium">{{baseInfo.journeyLineName}}</span>
        <svg-icon icon="icon_xiangyoujiantou"
                  class="ft20 color-999"></svg-icon>
      </div>
      <div class="flex"
           style="color: #518CFC">
        <svg-icon icon="icon_didian"
                  class="ft24 mr14"></svg-icon>
        <div class="flex1">{{pointsName}}</div>
      </div>
    </div>
    <div class="bg-white pl30 pr30 mb20 pt24 pb30 pb48"
         @click="onJourney">
      <div class="center-align">
        <svg-icon icon="icon_zhongdiangongzuo"
                  class="ft32"
                  style="color: #BF2B19"></svg-icon>
        <span class="ft32 medium ml8">年度重点工作</span>
      </div>
      <div class="work-list">
        <div v-for="(item, index) in baseInfo.keyWorkDTOList"
             :key="index"
             class="work-item">
          <div class="icon-box mr14">
            <svg-icon :icon="workStatusIcon(item).icon"
                      class="ft24"
                      :class="workStatusIcon(item).className"></svg-icon>
          </div>
          <div class="flex1">
            <p class="ft30 mb16">{{item.content}}</p>
            <p class="ft24 color-999">{{item.content}}</p>
          </div>
        </div>
      </div>
    </div>
    <contact-person :list="baseInfo.addressBookList"></contact-person>
  </div>
</template>

<script>
import ContactPerson from '../components/ContactPerson.vue'
import OrgTree from './components/OrgTree.vue'
export default {
  methods: {
    onGraphic () {
      uni.navigateTo({
        url: '/pages/party/graphic/index'
      })
    },
    onJourney () {
      uni.$emit('initJourneyLineId', this.baseInfo.journeyLineId)
      uni.switchTab({
        url: '/pages/home/index/index'
      })
    },
    findOrgTreeByOrgId () {
      const params = {
        orgId: this.baseInfo.orgId
      }
      this.$api.findOrgTreeByOrgId(params).then(res => {
        if (res.isError) return this.$msg(res.message)
        this.orgTree = res.content
      })
    },
    getJourneyAllianceDetailList () {
      this.$api.getJourneyAllianceDetailList().then(res => {
        if (res.isError) return this.$msg(res.message)
      })
    }
  },
  data () {

    return {
      selectPoint: 0,
      partyList: [
        {
          "addressBookList": [
            {
              "contactPerson": "大撒大撒",
              "orgName": "阿大撒发",
              "tel": "21312412451"
            }
          ],
          "id": 0,
          "introduction": "建立“1+3+X”组织框架，由镇党建办牵头，“龙门秘境”村落景区区域内3个村级党组织及景区运营商、村集体经济发展有限公司、中国美院等成员单位联合组建，整合基层党建资源，组建“五彩党建管家”。",
          "journeyLineId": 0,
          "journeyLineName": "发哈算法国际爱护发时间按时间发",
          "keyWorkDTOList": [
            {
              "content": "xxx西安市擦拭擦拭的暗时大",
              "endDate": 12412341243154,
              "startDate": 5134134141233412,
              "workStatus": 1,
              "year": 2
            },
            {
              "content": "xxx西安市擦拭擦拭的暗时大",
              "endDate": 12412341243154,
              "startDate": 5134134141233412,
              "workStatus": 2,
              "year": 2
            },
            {
              "content": "xxx西安市擦拭擦拭的暗时大",
              "endDate": 12412341243154,
              "startDate": 5134134141233412,
              "workStatus": 3,
              "year": 2
            }
          ],
          "lat": 0,
          "lng": 0,
          "name": "发的回复哈",
          "pointNameList": ['石门老街', '新四军纪念馆', '攀岩小镇（龙上村）', '党史学'],
          "regionsCode": "",
          "regionsName": "大撒大"
        }
      ],
      orgTree: [],
      workStatusMap: ''
    }
  },
  computed: {
    baseInfo () {
      return this.partyList[this.selectPoint] || {}
    },
    pointsName () {
      return this.baseInfo.pointNameList.join('→')
    },
    workStatusIcon () {
      return (item) => {
        const { workStatus } = item
        if (workStatus === 1) return {
          className: 'color-999',
          icon: 'icon_weikaishi'
        }
        if (workStatus === 2) return {
          className: 'color-ffddb0',
          icon: 'icon_jinhangzhong'
        }
        if (workStatus === 3) return {
          className: 'color-green',
          icon: 'icon_yiwancheng'
        }
      }
    }
  },
  onLoad () {
    this.getJourneyAllianceDetailList()
  },
  components: { ContactPerson, OrgTree }
}
</script>
<style>
page {
  height: 100%;
  background: #f7f7f7;
}
</style>
<style lang='scss' scoped>
.party-wrap {
  color: #333;
  .map {
    width: 100%;
    height: 560rpx;
  }
  .title {
    .tip {
      height: 32rpx;
      padding: 0 12rpx;
      background-image: linear-gradient(98deg, #ffddb0 3%, #ffe6b0 72%);
      border-radius: 20rpx 0 20rpx 0;
      color: #bf2b19;
    }
  }
  .graphic-btn {
    width: 224rpx;
    height: 56rpx;
    line-height: 56rpx;
    border-radius: 28rpx;
    border: 1px solid #f54400;
    color: #f54400;
  }
  .work-list {
    .work-item {
      .icon-box {
        width: 24rpx;
        height: 24rpx;
        background: #fff;
        .color-ffddb0 {
          color: #ffddb0;
        }
        .color-green {
          color: green;
        }
      }
    }
  }
}
</style>
