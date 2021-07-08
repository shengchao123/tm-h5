<template>
  <div class='project-detail-wrap'
       @scroll="scroll">
    <div class="pt28 pb28 pl32 pr32 bg-white">
      <div class="ft40 bold">吴越人家地下车库改造</div>
      <div class="ft26 color-666 pt24 pb24">
        <span>2021年4月26日</span>
        <span class="ml48">杭州市临安区农业农村局</span>
      </div>
      <div class="ft30 content">
        锦北街道平山社区吴越人家小区是保障性住房，建成已10余年，当前的车位配比才1：0.35，停车难问题突出。地下车库也因年久失修，导致居民不愿意入库停车，小区内乱停车现象严重，居民因抢占车位引发矛盾的现象时有发生。
      </div>
    </div>
    <div class="line-block"></div>
    <div class="bg-white pt28">
      <div class="ft32 medium pl32 pr32">跟进记录</div>
      <div class="record pt32 pl40 pr48">
        <div v-for="(item, index) in recordList"
             :key="index"
             class="record-item flex">
          <div class="step relative center-justify mr16">
            <div v-if="index === 0"
                 class="step-first">
              <svg-icon :icon="item.status ? 'icon_yiwancheng' : 'icon_shijian'"
                        class="ft40"
                        :style="{color: item.status ? '#F58200' : '#999'}"></svg-icon>
            </div>
            <div v-else
                 class="step-point"></div>
            <div v-if="index < recordList.length - 1"
                 class="step-line"></div>
          </div>
          <div class="flex1">
            <div class="between-row">
              <div class="ft30 medium">跟进中</div>
              <div v-if="isUnitUser"
                   class="edit-btn"
                   @click="onEdit(item)">
                <svg-icon icon="icon_bianji"
                          class="ft28 color-666"></svg-icon>
              </div>
            </div>
            <div class="ft26 pt16 pb16">{{item.content}}</div>
            <div class="ft24 color-999 pb24">{{$moment(item.time).format('YYYY-MM-DD hh:mm:ss')}}</div>
            <div v-if="item.imgs && item.imgs.length > 0"
                 class="img-list flex pb28">
              <image v-for="(img, imgIndex) in item.imgs"
                     :key="imgIndex"
                     mode="aspectFill"
                     class="img-item mr20"
                     :src="$fileHost + img"></image>
            </div>
          </div>
        </div>
      </div>
    </div>
    <publish-btn v-if="isUnitUser"
                 text="添加记录"
                 :isScroll="isScroll"
                 right="14rpx"
                 bottom="134rpx"
                 @onPublish="onPublish"></publish-btn>
  </div>
</template>
<script>
import PublishBtn from '@/pages/urban-rural/components/PublishBtn.vue'
let timer = null
export default {
  components: { PublishBtn },
  methods: {
    onPublish () {
    },
    onEdit (item) {

    },
    scroll () {
      this.isScroll = true
      if (timer) {
        clearTimeout(timer)
        timer = null
      }
      timer = setTimeout(() => {
        this.isScroll = false
      }, 800)
    },
  },
  data () {
    return {
      isScroll: false,
      recordList: [
        {
          status: 1,
          content: "过改造的地下车库，地面平整、车位分布有序，还新",
          time: 12231254131,
          imgs: [
            'material/image/2021032121040637586675219770368.jpg',
            'material/image/2021032121040637586675219770368.jpg',
            'material/image/2021032121040637586675219770368.jpg'
          ]
        },
        {
          content: "过改造的地下车库，地面平整、车位分布有序，还新",
          time: 12231254131
        },
        {
          content: "过改造的地下车库，地面平整、车位分布有序，还新",
          time: 12231254131
        },
        {
          content: "过改造的地下车库，地面平整、车位分布有序，还新",
          time: 12231254131
        },
        {
          content: "过改造的地下车库，地面平整、车位分布有序，还新",
          time: 12231254131
        },
        {
          content: "过改造的地下车库，地面平整、车位分布有序，还新",
          time: 12231254131
        }
      ]
    }
  },
  computed: {
    memberPersonalInfo () {
      return this.$store.state.user.memberPersonalInfo
    },
    // 是否共建单位用户
    isUnitUser () {
      return this.memberPersonalInfo.isUnitUser
    }
  },
  destroyed () {
    window.removeEventListener('scroll', this.scroll)
  },
  created () {
    window.addEventListener('scroll', this.scroll)
  }
}
</script>
<style>
page {
  height: 100%;
}
</style>
<style lang='scss' scoped>
.project-detail-wrap {
  padding-bottom: 150rpx;
  .content {
    text-align: justify;
  }
  .line-block {
    width: 100%;
    height: 24rpx;
    background: #f7f7f7;
  }
  .record {
    .record-item {
      .step {
        width: 40rpx;
        .step-first {
          position: relative;
          z-index: 1;
          width: 40rpx;
          height: 40rpx;
          background: #fff;
        }
        .step-point {
          position: relative;
          z-index: 1;
          width: 14rpx;
          height: 14rpx;
          border-radius: 50%;
          background: #eaeaea;
          margin-top: 15rpx;
          box-shadow: 0 0 0 15rpx #fff;
        }
        .step-line {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          margin: auto;
          width: 1px;
          background: #eaeaea;
        }
      }
      .img-list {
        flex-wrap: nowrap;
        .img-item {
          width: 185rpx;
          height: 185rpx;
          border-radius: 8rpx;
        }
      }
    }
  }
}
</style>