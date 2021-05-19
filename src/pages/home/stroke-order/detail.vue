<template>
  <div class='detail-wrap'>
    <head-map :journeyPointList="journeyPointList"
              :isDetail="true"></head-map>
    <div class="mb20">
      <detail-info :list="topList"></detail-info>
    </div>
    <detail-info :list="bottomList"></detail-info>
    <div class="mt20  pb40  bg-white">
      <div class="between-row cenetr-align pt18 pb40 pl30 pr30">
        <div class="ft28">参与人员</div>
        <div class="center-align">
          <div class="ft22 color-666">20人</div>
          <svg-icon icon="icon_xiangyoujiantou"
                    class="ft20 color-999 ml8"></svg-icon>
        </div>
      </div>
      <div v-if="participants.length > 0"
           class="center-align pr30">
        <div class="participants">
          <div v-for="(item, index) in participants"
               :key="index"
               class="head-img ml32">
            <img class="img"
                 :src="item" />
          </div>
        </div>
        <div v-if="participants.length > 6"
             class="mb12 ft26 color-666">···</div>
      </div>
      <div v-else
           class="ft26 color-999 pl30">暂时还没有人报名参加该行程～</div>
    </div>
    <div class="footer pl30 pr30 between-row center-align">
      <div class="center-align left-btns between-row flex1">
        <div v-if="baseInfo.isSelf"
             class="icon-btn center-align column"
             @click="onEdit">
          <svg-icon icon="icon_bianji"
                    class="ft34"></svg-icon>
          <div class="ft20 color-666 mt14">编辑</div>
        </div>
        <div v-if="baseInfo.isSelf"
             class="icon-btn center-align column"
             @click="onDelete">
          <svg-icon icon="icon_shanchu"
                    class="ft34"></svg-icon>
          <div class="ft20 color-666 mt14">删除</div>
        </div>
        <div class="icon-btn center-align column"
             @click="onShare">
          <svg-icon icon="icon_zhuanfa"
                    class="ft34"></svg-icon>
          <div class="ft20 color-666 mt14">分享</div>
        </div>
      </div>
      <div v-if="isShowJoinBtn">
        <div class="ft28 tc medium"
             :class="baseInfo.isAlreadyJoin ? 'border-btn w272' : 'confirm-btn'"
             @click="onConfirm">{{baseInfo.isAlreadyJoin ? '取消报名' : '我要报名'}}</div>
      </div>
      <div v-else
           class="center-align">
        <div class="border-btn ft28 tc mr24 medium"
             @click="onComment">评价</div>
        <div v-if="baseInfo.needLifeDocumentary"
             class="ft28 tc medium"
             :class="baseInfo.isHaveLifeDocumentary ? 'border-btn w272' : 'confirm-btn'"
             @click="onLifeDocumentary">{{baseInfo.isHaveLifeDocumentary ? '查看' : '填写'}}组织生活记录</div>
      </div>
    </div>
    <u-modal v-model="showDeleteTip"
             border-radius="24"
             width="540"
             title="要删除该行程单？"
             content="删除后不可恢复"
             :title-style="{fontSize: '32rpx', color: '#333', fontWeight: 600}"
             :content-style="{fontSize: '26rpx', color: '#999'}"
             :show-cancel-button="true"
             confirm-text="删除"
             cancel-text="先留着"
             confirm-color="#F44000"
             cancel-color="#333333"></u-modal>
  </div>
</template>
<script>
import HeadMap from './components/HeadMap.vue'
import { playTimeNameMap, activityNameMap, transportationNameMap } from '@/utils/enum'
import moment from "moment"
import DetailInfo from './components/DetailInfo.vue'

export default {
  methods: {
    // 编辑
    onEdit () {

    },
    // 删除
    onDelete () {
      this.showDeleteTip = true
    },
    // 分享
    onShare () {

    },
    // 去评价
    onComment () {

    },
    // 去填写组织生活记录
    onLifeDocumentary () {

    },
    getJourneyItineraryById () {
      const id = this.id
      if (!id) return
      const params = {
        id
      }
      this.$api.getJourneyItineraryById(params).then(res => {
        if (res.isError) return this.$msg(res.message)
        const { journeyPointList, participants } = res.content
        this.baseInfo = res.content
        this.journeyPointList = journeyPointList
        this.participants = participants
      })
    }
  },
  data () {
    return {
      id: null,
      showDeleteTip: false,
      baseInfo: {
        isSelf: true,
        isAlreadyJoin: true,
        isHaveLifeDocumentary: true,
        "activityType": "01",
        "contactDetails": "13506578597",
        "id": 3214123,
        "journeyLineId": 413123154,
        "journeyLineName": '“龙门秘境”乡村振兴之路',
        "journeyPointList": [],
        "meetingPlace": "浙江省 杭州市 大家安静的 就阿萨放大算法哈 安抚按军法啊安抚骄傲",
        "meetingPlaceLat": 0,
        "meetingPlaceLng": 0,
        "name": "杭州一日游",
        "needLifeDocumentary": true,
        "organizer": "某某某",
        "playTime": "04",
        "precautions": "注意喝水",
        "setOutTime": 2314122397412,
        "transportation": "01",
        "type": "01"
      },
      journeyPointList: null,
      participants: [
        'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fdpic.tiankong.com%2Fpc%2Fb5%2FQJ8448137459.jpg&refer=http%3A%2F%2Fdpic.tiankong.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1623998043&t=089fde2cd7716be76f55672efb3d3e38',
        'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fdpic.tiankong.com%2Fpc%2Fb5%2FQJ8448137459.jpg&refer=http%3A%2F%2Fdpic.tiankong.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1623998043&t=089fde2cd7716be76f55672efb3d3e38',
        'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fdpic.tiankong.com%2Fpc%2Fb5%2FQJ8448137459.jpg&refer=http%3A%2F%2Fdpic.tiankong.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1623998043&t=089fde2cd7716be76f55672efb3d3e38',
        'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fdpic.tiankong.com%2Fpc%2Fb5%2FQJ8448137459.jpg&refer=http%3A%2F%2Fdpic.tiankong.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1623998043&t=089fde2cd7716be76f55672efb3d3e38',
        'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fdpic.tiankong.com%2Fpc%2Fb5%2FQJ8448137459.jpg&refer=http%3A%2F%2Fdpic.tiankong.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1623998043&t=089fde2cd7716be76f55672efb3d3e38',
        'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fdpic.tiankong.com%2Fpc%2Fb5%2FQJ8448137459.jpg&refer=http%3A%2F%2Fdpic.tiankong.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1623998043&t=089fde2cd7716be76f55672efb3d3e38',
        'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fdpic.tiankong.com%2Fpc%2Fb5%2FQJ8448137459.jpg&refer=http%3A%2F%2Fdpic.tiankong.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1623998043&t=089fde2cd7716be76f55672efb3d3e38',
        'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fdpic.tiankong.com%2Fpc%2Fb5%2FQJ8448137459.jpg&refer=http%3A%2F%2Fdpic.tiankong.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1623998043&t=089fde2cd7716be76f55672efb3d3e38',
        'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fdpic.tiankong.com%2Fpc%2Fb5%2FQJ8448137459.jpg&refer=http%3A%2F%2Fdpic.tiankong.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1623998043&t=089fde2cd7716be76f55672efb3d3e38',
        'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fdpic.tiankong.com%2Fpc%2Fb5%2FQJ8448137459.jpg&refer=http%3A%2F%2Fdpic.tiankong.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1623998043&t=089fde2cd7716be76f55672efb3d3e38',
        'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fdpic.tiankong.com%2Fpc%2Fb5%2FQJ8448137459.jpg&refer=http%3A%2F%2Fdpic.tiankong.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1623998043&t=089fde2cd7716be76f55672efb3d3e38',

      ]
    }
  },
  computed: {
    isShowJoinBtn () {
      const { isSelf, setOutTime } = this.baseInfo
      const nowTime = new Date().getTime()
      const isAlreadyStarted = nowTime >= setOutTime
      if (isSelf || isAlreadyStarted) return false
      return true
    },
    topList () {
      const { playTime, activityType, needLifeDocumentary } = this.baseInfo
      return [
        { label: '预估时长', content: playTimeNameMap.get(playTime) },
        { label: '活动类型', content: activityNameMap.get(activityType) },
        { label: '组织生活记录', content: needLifeDocumentary ? '需要' : '不需要' },
      ]
    },
    bottomList () {
      const { name, organizer, contactDetails, meetingPlace, setOutTime, transportation, precautions } = this.baseInfo
      return [
        { label: '名称', content: name },
        { label: '组织员', content: organizer },
        { label: '联系方式', content: contactDetails },
        { label: '集合地点', content: meetingPlace },
        { label: '出发日期', content: moment(setOutTime).format('YYYY-MM-DD HH:mm:ss') },
        { label: '交通方式', content: transportationNameMap.get(transportation) },
        { label: '温馨提示', content: precautions || null },
      ]
    }
  },
  onLoad (option) {
    this.id = option.id
    this.getJourneyItineraryById()
  },
  components: { HeadMap, DetailInfo }
}
</script>
<style lang='scss' scoped>
.detail-wrap {
  color: #333;
  height: 100%;
  background: #f7f7f7;
  padding-bottom: 152rpx;
  .participants {
    height: 80rpx;
    overflow-y: hidden;
    .head-img {
      display: inline-block;
      width: 80rpx;
      height: 80rpx;
      border-radius: 40rpx;
      overflow: hidden;
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
  .footer {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    background: #fff;
    height: 112rpx;
    z-index: 2;
    border-top: solid 1rpx #eaeaea;
    .left-btns {
      max-width: 220rpx;
      .icon-btn {
        width: 50rpx;
      }
    }
    .border-btn {
      width: 112rpx;
      height: 80rpx;
      line-height: 80rpx;
      border-radius: 44rpx;
      border: solid 1rpx #e32417;
      color: #e32417;
    }
    .confirm-btn {
      width: 272rpx;
      height: 80rpx;
      line-height: 80rpx;
      background: #e32417;
      border-radius: 44rpx;
      color: #fff;
    }
  }
  .w272 {
    width: 272rpx !important;
  }
}
</style>