<template>
  <div class='detail-wrap pt20 flex1 column'>
    <expert-services-item :itemInfo="detailInfo"></expert-services-item>
    <view class="mt20 bg-white pl30 pr30 column flex1">
      <text class="mt34 ft32 color-333 medium">个人介绍</text>
      <text
            class="line1 mt24 introduction pb20">{{detailInfo.introduction}}早在30年前，林莉文的家里就种植着芦笋，当时芦笋引进的是国外淘汰的老品种、用的是陈旧的管理技术，芦笋的产量一直不高。“当时看着父老乡亲那么辛苦，产量却很低，就想用自己在农校学到的技术，培育出更高产的种子、找到更高产的种植方法，帮助村民解决产量问题。”林莉文告诉记者。从那以后，林莉文认准了芦笋科研这条路，一走就是20年，从一个门外汉变成了国内屈指可数的芦笋专家。他培育的芦笋新品种“2000-3F1”“盛丰F1”，比国外进口品种产量提高40%以上。
        在培育成功新品种之后，林莉文结合曹县农业局、科技局、科协等农业机构，先后在县城、乡镇、村队、以及田间地头，以多种形式培训指导200多场次，培训群众4万多人次，并自费向群众赠送种植书籍资料10万多元。</text>
    </view>
  </div>
</template>
<script>
import ExpertServicesItem from '@/pages/think-tank/index/components/ExpertServicesItem'
export default {
  name: 'Detail',
  methods: {
    getDetail () {
      const params = {
        id: this.id
      }
      this.$api.getShowJourneyTalentsDetail(params).then(res => {
        if (res.isError) {
          this.$msg(res.message)
          return
        }
        this.detailInfo = res.content
      })
    }
  },
  data () {
    return {
      detailInfo: {}
    }
  },
  onLoad ({ id }) {
    this.id = id
  },
  created () {
    this.getDetail()
  },
  components: {
    ExpertServicesItem
  }
}
</script>
<style>
page {
  background: #f7f7f7;
  display: flex;
  height: 100%;
}
</style>
<style lang='scss' scoped>
.line1 {
  line-height: 1;
}
.detail-wrap {
  box-sizing: border-box;
  .introduction {
    text-align: justify;
    text-align-last: left;
  }
  // img {
  //   width: 100vw;
  // }
}
</style>
