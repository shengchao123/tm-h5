<template>
  <view class="evaluate-detail-wrap">
    <!-- 轮播图 -->
    <carousel :imgList="detailInfo.attachments"
              :indicatorDots="true">
    </carousel>
    <!-- 用户信息 -->
    <view class="user between-row pl30 pr30 pt24 pb24">
      <view class="center-align">
        <img @click="onToPersonalCenter"
             class="user-avatar"
             :src="avatarUrl(detailInfo.avatar)"
             alt="">
        <view class="ml16">
          <view class="flex">
            <text class="ft28">{{detailInfo.nick}}</text>
            <view class="community-title center-flex ml16">
              <text class="ft22">{{detailInfo.communityTitle}}</text>
            </view>
          </view>
          <text class="ft22 tip-text">{{detailInfo.time}}</text>
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
    <view class="footer">
      
    </view>
  </view>
</template>
<script>
export default {
name: 'index',
methods: {
  getItineraryEvaluationInfoById(){
    const params = {}
    this.$api.getItineraryEvaluationInfoById(prams).then(res => {
      if (res.isError){
    this.$msg(res.message)
    return
    }
      console.log(res)
    })
  }
},
data () {
return {}
},
created () {},
}
</script>
<style lang='scss' scoped>
</style>