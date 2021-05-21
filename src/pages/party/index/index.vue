<template>
  <div class='party-wrap'>
    <div class="map">

    </div>
    <div class="pt24 pl30 pr30 bg-white pb20">
      <div class="title center-align">
        <div class="ft34 bold">{{baseInfo.name}}</div>
        <div class="tip ft20 ml16">{{baseInfo.regionsName}}</div>
      </div>
      <div class="ft30 mt8">{{baseInfo.introduction}}</div>
    </div>
    <org-tree class="mb20"></org-tree>
    <contact-person :list="baseInfo.addressBookList"></contact-person>
  </div>
</template>

<script>
import ContactPerson from '../components/ContactPerson.vue'
import OrgTree from './components/OrgTree.vue'
export default {
  methods: {
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
              "workStatus": 0,
              "year": 2
            }
          ],
          "lat": 0,
          "lng": 0,
          "name": "发的回复哈",
          "pointNameList": [],
          "regionsCode": "",
          "regionsName": "大撒大"
        }
      ],
      orgTree: []
    }
  },
  computed: {
    baseInfo () {
      return this.partyList[this.selectPoint] || {}
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
}
</style>
