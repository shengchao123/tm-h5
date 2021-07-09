<template>
  <div class='porject-item-wrap bg-white pl32 pr32'
       @click="onDetail">
    <div class="pt32 pb32"
         :class="showBorder && 'bb'">
      <div class="center-align between-row">
        <div class="center-align name">
          <div class="ft34 medium">{{projectItem.name}}</div>
          <div v-if="projectItem.status !== 1"
               class="center"
               style="height: 38rpx;">
            <svg-icon :icon="statusIcon.icon"
                      class="ml16"
                      style="font-size: 100rpx;"
                      :style="{color: statusIcon.color}"></svg-icon>
          </div>
        </div>
        <div v-if="isShowReceiveBtn"
             class="receive-btn tc ft24 color-e32417"
             @click.stop="onReceive">认领</div>
      </div>
      <div class="between-row center-align ft24 color-999 pt16 pb16">
        <div>
          <span class="mr48">{{startTime}}</span>
          <span v-if="projectItem.status !== 1"
                class="ml48">{{projectLeadName}}</span>
        </div>
        <span v-if="isHome && isUnitUser"
              class="ft20 color-999">{{endTime}}</span>
      </div>
      <div class="content">
        <div ref="contentBox"
             class="content-box"
             :class="isHideContent && 'hide-content'">
          <span ref="contentText"
                class="ft26 content-text">{{projectItem.description}}</span>
        </div>
        <view v-if="isShowExpand"
              class="expand center-flex"
              @click.stop="onExpandContent">
          <text class="ft24 color-e32417">...展开</text>
        </view>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'projectItem',
  methods: {
    onDetail () {
      uni.navigateTo({
        url: `/pages/steward/good-helper/project-detail/index?id=${this.projectItem.id}`
      })
    },
    onReceive () {
      const projectId = this.projectItem.id
      this.$emit('onReceive', projectId)
    },
    onExpandContent () {
      this.isShowExpand = false
      this.isHideContent = false
    },
    calculationHeight () {
      const boxHeight = this.$refs.contentBox.offsetHeight
      const textHeight = this.$refs.contentText.offsetHeight
      this.isShowExpand = textHeight > boxHeight
    },
  },
  props: {
    isHome: Boolean,
    isUnitUser: Boolean,
    projectItem: Object,
    showBorder: Boolean
  },
  data () {
    return {
      isShowExpand: false,
      isHideContent: true
    }
  },
  computed: {
    isShowReceiveBtn () {
      // 1:待认领; 2:领办中; 3:已办结
      const { status } = this.projectItem
      return this.isUnitUser && status === 1
    },
    projectLeadName () {
      const { journeyHelperProjectLeadRecordList } = this.projectItem
      if (!journeyHelperProjectLeadRecordList) return ''
      if (journeyHelperProjectLeadRecordList.length > 1) {
        return '由共建单位联合领办'
      }
      return journeyHelperProjectLeadRecordList[0].journeyCoConstructionUnitName
    },
    startTime () {
      const { status, createTime, leadTime } = this.projectItem
      let time = status === 1 ? createTime : leadTime
      let text = status === 1 ? '发布' : '领办'
      return this.$moment(time).format('YYYY-MM-DD') + text
    },
    endTime () {
      if (!this.isHome) return ''
      const { expiredTime } = this.projectItem
      const timeLeft = (expiredTime - new Date().getTime())
      const leave1 = timeLeft % (24 * 3600 * 1000)
      const leave2 = leave1 % (3600 * 1000)
      const day = Math.floor(timeLeft / (24 * 3600 * 1000))
      const hour = Math.floor(leave1 / (3600 * 1000))
      const minute = Math.floor(leave2 / (60 * 1000))
      let str = ''
      if (day) {
        str += day + '天'
      }
      if (hour) {
        str += hour + '小时'
      }
      if (!day) {
        str += minute + '分'
      }
      return str + '后转入领办大厅'
    },
    statusIcon () {
      const { journeyHelperProjectScheduleList } = this.projectItem
      if (!journeyHelperProjectScheduleList || journeyHelperProjectScheduleList.length === 0) return {
        icon: 'icon_zanwujindu',
        color: '#999999'
      }
      const { status } = journeyHelperProjectScheduleList[0]
      if (status === 3) {
        return {
          icon: 'icon_yibanjie',
          color: '#F54000'
        }
      }
      return {
        icon: 'icon_genjinzhong',
        color: '#FFB319'
      }
    }
  },
  mounted () {
    this.$nextTick(() => {
      this.calculationHeight()
    })
  },
  created () {

  }
}
</script>
<style lang='scss' scoped>
.porject-item-wrap {
  .receive-btn {
    width: 128rpx;
    height: 56rpx;
    line-height: 56rpx;
    border-radius: 30rpx;
    border: solid 1px #e32417;
  }
  .content {
    position: relative;
    .content-box {
      width: 100%;
      .content-text {
        line-height: 38rpx;
      }
    }
    .hide-content {
      max-height: 80rpx;
      display: -webkit-box;
      -webkit-box-orient: vertical; // 点点点
      -webkit-line-clamp: 2;
      overflow: hidden;
    }
    .expand {
      position: absolute;
      right: -8rpx;
      bottom: 4rpx;
      width: 90rpx;
      height: 35rpx;
      background: rgba(255, 255, 255, 1);
      letter-spacing: 2rpx;
    }
  }
}
</style>