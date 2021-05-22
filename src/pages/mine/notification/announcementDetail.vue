<template>
  <div class='announcement-detail-wrap'
       v-if="baseInfo">
    <div class="pt28 pl30 pr30">
      <div class="ft36 mb20 bold">{{baseInfo.title}}</div>
      <div class="ft26 color-666">
        <span class="mr40">{{$moment(baseInfo.createTime).format('YYYY-MM-DD')}}</span>
        <span>{{baseInfo.orgName}}</span>
      </div>
    </div>
    <div class="content ft30 pl30 pr30 mt28">{{baseInfo.content}}</div>
  </div>
</template>
<script>
export default {
  methods: {
    getJourneyAnnouncementDetail (id) {
      const params = {
        id
      }
      this.$api.getJourneyAnnouncementDetail(params).then(res => {
        if (res.isError) return this.$msg(res.message)
        this.baseInfo = res.content
      })
    }
  },
  data () {
    return {
      baseInfo: null
    }
  },
  onLoad (option) {
    this.getJourneyAnnouncementDetail(option.id)
  }
}
</script>
<style lang='scss' scoped>
.announcement-detail-wrap {
  color: #333;
  .content {
    line-height: 48rpx;
  }
}
</style>