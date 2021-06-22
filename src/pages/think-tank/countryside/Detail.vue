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
           @touchstart="downLoad(item,index)"
           @touchend="onPreview(item)">
        <span>{{index + 1}}.</span>
        <span>{{item.name}}</span>
      </div>
    </div>
    <u-modal v-model="isDownload"
             width="540"
             title=""
             content="是否要下载当前文件"
             border-radius="24"
             :show-cancel-button="true"
             confirm-text="下载"
             cancel-text="取消"
             cancel-color="#333"
             @confirm="downloadFile"></u-modal>
  </div>
</template>

<script>
let allTime = null
export default {
  name: 'Detail',
  data () {
    return {
      inductiveDetail: {},
      timeOutEvent: 0,
      isDownload: false,
      downIndex: null
    }
  },
  methods: {
    getShowAgricultureRelatedProjectsDetail (id) {
      const params = {
        id
      }
      this.$api.getShowAgricultureRelatedProjectsDetail(params).then(res => {
        if (res.isError) return this.$msg(res.message)
        this.inductiveDetail = res.content
      })
    },
    // 跳转预览文件页面
    onPreview (row) {
      const fileType = row.url.substring(row.url.lastIndexOf('.') + 1)
      clearTimeout(allTime);
      if (this.timeOutEvent === 0) {
        uni.navigateTo({ url: `/pages/think-tank/countryside/attachmentPage?url=${row.url}&fileType=${fileType}` })
      }
    },
    // 长按下载
    downLoad (item, index) {
      this.timeOutEvent = 0;
      const that = this
      allTime = setTimeout(function () {
        that.timeOutEvent = allTime
        that.downIndex = index
        that.isDownload = true
      }, 1000);
    },
    downloadFile () {
      let url = this.$fileHost + this.inductiveDetail.attachmentList[this.downIndex].url
      let a = document.createElement('a');
      a.href = url;
      a.target = '_blank';
      a.click();
    }
  },
  onLoad (option) {
    option.id && this.getShowAgricultureRelatedProjectsDetail(option.id)
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
