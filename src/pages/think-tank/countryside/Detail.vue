<template>
  <div class='detail-wrap'
       v-if="inductiveDetail.title">
    <!-- <img src="@/static/test/13.png"> -->
    <div class="ft40 bold mb24">{{inductiveDetail.title}}</div>
    <div class="center-align ft26 color-666 mb24">
      <div class="mr48">{{$moment(inductiveDetail.createTime).format('YYYY年MM月DD日')}}</div>
      <div>{{inductiveDetail.publishingDepartment}}</div>
    </div>
    <div v-html="inductiveDetail.content"></div>
    <div class="flex-wrap mt30"
         v-if="inductiveDetail.picList.length > 0">
      <div v-for="(img,index) in inductiveDetail.picList"
           :key="index">
        <img :src="$fileHost + img.url"
             alt=""
             :class="(index + 1) % 3 === 0?'img':'img mr24'">
      </div>
    </div>
    <div v-if="inductiveDetail.attachmentList.length > 0">
      <div class="bold ft28 mb24 mt48">附件</div>
      <div v-for="(item,index) in inductiveDetail.attachmentList"
           :key="index"
           class="ft24 attachment mb16"
           @click="dowmload(item)">
        <span>{{index + 1}}.</span>
        <span>{{item.name}}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Detail',
  data () {
    return {
      inductiveDetail: {}
    }
  },
  methods: {
    getAgricultureDetail (id) {
      const params = {
        id
      }
      this.$api.getAgricultureDetail(params).then(res => {
        if (res.isError) return this.$msg(res.message)
        this.inductiveDetail = res.content
      })
    },
    // 跳转预览文件页面
    dowmload (row) {
      const fileType = row.url.substring(row.url.lastIndexOf('.') + 1)
      uni.navigateTo({ url: `/pages/think-tank/countryside/attachmentPage?url=${row.url}&fileType=${fileType}` })
    }
  },
  onLoad (option) {
    option.id && this.getAgricultureDetail(option.id)
  }
}
</script>

<style lang='scss' scoped>
.detail-wrap {
  padding: 24rpx 30rpx;
  .img {
    width: 214rpx;
    height: 214rpx;
    border-radius: 8rpx;
  }
  .attachment {
    width: 686rpx;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    color: #518cfc;
  }
}
</style>
