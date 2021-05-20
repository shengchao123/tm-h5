<template>
  <view class="evaluate-detail-wrap">
    <!-- 轮播图 -->
    <carousel :imgList="detailInfo.attachments"
              :indicatorDots="true">
    </carousel>
    <!-- 用户信息 -->
    <view class="user between-row pl30 pr30 pt24 pb24">
      <view class="center-align">
        <image @click="onToPersonalCenter"
               class="user-avatar"
               :src="$avatarUrl(detailInfo.avatar)">
        </image>
        <view class="ml16 column">
          <text class="ft28 medium">{{detailInfo.nick}}</text>
          <text class="ft22 color-999">{{detailInfo.time}}</text>
        </view>
      </view>
    </view>
    <!-- 笔记内容 -->
    <view class="pt8 ml30 mr30 note-content">
      <view class="pb32 column">
        <text class="ft36 bold pb16">{{detailInfo.title}}</text>
        <text class="content ft30">{{detailInfo.content}}</text>
      </view>
    </view>
    <view class="footer center-align ft30 color-999 between-row bg-white">
      <view class="flex">
        <view @click="onShowShareDialog">
          <svg-icon icon="icon_zhuanfa"></svg-icon>
        </view>
        <text class="pl20">{{156}}</text>
      </view>
      <view class="">
        <svg-icon :icon="detailInfo.isLike ? 'icon_shoucang primary-color' : 'icon_weishoucang'"></svg-icon>
        <text class="pl20">{{detailInfo.likeQuantity}}</text>
      </view>
    </view>
    <!-- 分享弹窗 -->
    <!-- <share-dialog ref="shareDialog"
                  posterType="note"
                  shareBtns="wx moments poster"
                  sharePath="pagesDiscover/note-detail/index"
                  :posterData="posterData"
                  :shareParams="shareParams"
                  :shareData="shareData">
    </share-dialog> -->
  </view>
</template>
<script>
import Carousel from '@/pages/components/Carousel.vue'
export default {
  name: 'index',
  methods: {
    onShowShareDialog () {
      this.$refs.shareDialog.show()
    },
    getItineraryEvaluationInfoById () {
      const params = {
        communityNoteId: this.communityNoteId
        // communityNoteId: '42824378267797504'
      }
      this.$api.getItineraryEvaluationInfoById(params).then(res => {
        if (res.isError) {
          this.$msg(res.message)
          return
        }
        // const res = {
        //   "code": 10000,
        //   "content": {
        //     "attachmentDTOList": [
        //       {
        //         "communityNoteId": "39015313910466560",
        //         "type": "01",
        //         "url": "material/image/2021040615270739015024839306240.jpg"
        //       },
        //       {
        //         "communityNoteId": "39015313910466560",
        //         "type": "01",
        //         "url": "material/image/2021040615264739015003896097792.jpg"
        //       },
        //       {
        //         "communityNoteId": "39015313910466560",
        //         "type": "01",
        //         "url": "material/image/2021040615265339015010748541952.jpg"
        //       },
        //       {
        //         "communityNoteId": "39015313910466560",
        //         "type": "01",
        //         "url": "material/image/2021040615263339014990034971648.jpg"
        //       },
        //       {
        //         "communityNoteId": "39015313910466560",
        //         "type": "01",
        //         "url": "material/image/2021040615263639014992383781888.jpg"
        //       },
        //       {
        //         "communityNoteId": "39015313910466560",
        //         "type": "01",
        //         "url": "material/image/2021040615263939014995599764480.jpg"
        //       },
        //       {
        //         "communityNoteId": "39015313910466560",
        //         "type": "01",
        //         "url": "material/image/2021040615265839015016195894272.jpg"
        //       },
        //       {
        //         "communityNoteId": "39015313910466560",
        //         "type": "01",
        //         "url": "material/image/2021040615270339015020955380736.jpg"
        //       },
        //       {
        //         "communityNoteId": "39015313910466560",
        //         "type": "01",
        //         "url": "material/image/2021040615264239014998895438848.jpg"
        //       }
        //     ],
        //     "attachments": ["material/image/2021040615270339015020955380736.jpg", "material/image/2021040615270739015024839306240.jpg", "material/image/2021040615265339015010748541952.jpg", "material/image/2021040615263639014992383781888.jpg", "material/image/2021040615263939014995599764480.jpg", "material/image/2021040615263339014990034971648.jpg", "material/image/2021040615264239014998895438848.jpg", "material/image/2021040615264739015003896097792.jpg", "material/image/2021040615265839015016195894272.jpg"],
        //     "avatar": "image/avatar/2020092914455421889605577157632.png",
        //     "commentQuantity": 0,
        //     "communityNoteId": "42824378267797504",
        //     "content": "1945年3月起，新四军苏浙军区第一支队刘别生部队与国民党108师在天目山交战获取胜利，新四军在此休整近2月，村里大多数人家都驻有新四军，新四军在村里加工粮食、被服，救治伤员。新四军驻军旧址是现存最完好的一幢民居。此外，村里还存有新四军48团（“老虎团”）团长刘别生和爱人苏迪1945年3月—5月在驻地修整时居住的旧址遗迹。",
        //     "isAuthor": false,
        //     "isLike": false,
        //     "journeyItineraryId": "41102691154331648",
        //     "journeyItineraryName": "测试1",
        //     "likeQuantity": 0,
        //     "memberId": "14380290006910976",
        //     "nick": "慢慢@生活家",
        //     "time": "2天前",
        //     "title": "新四军历史纪念馆"
        //   },
        //   "message": "操作成功",
        //   "subCode": "SUCCESS",
        //   "success": true
        // }
        this.detailInfo = res.content
      })
    }
  },
  data () {
    return {
      communityNoteId: '',
      detailInfo: ''
    }
  },
  created () {
    this.getItineraryEvaluationInfoById()
  },
  onLoad ({ communityNoteId }) {
    this.communityNoteId = communityNoteId
  },
  components: {
    Carousel
  }
}
</script>
<style lang='scss' scoped>
.evaluate-detail-wrap {
  padding-bottom: 98rpx;
  .user {
    .user-avatar {
      width: 80rpx;
      height: 80rpx;
      border-radius: 50%;
    }
  }
  .note-content {
    .content {
      line-height: 1.6;
    }
  }
  .footer {
    width: 100%;
    position: fixed;
    bottom: 0;
    border-top: 1rpx solid #eaeaea;
    padding: 0 102rpx;
    height: 98rpx;
  }
}
</style>