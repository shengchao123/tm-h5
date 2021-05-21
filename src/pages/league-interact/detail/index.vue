<template>
  <view class="detail-wrap mt20 flex1">
    <view class="pl30 pr30 bg-white">
      <!-- 标题 -->
      <span class="title pt28 pb28 inline-block">
        <text class="ft32 color-333 medium mr20">{{detailInfo.name}}</text>
        <svg-icon v-if="detailInfo"
                  :icon="getStatusInfo.iconClass || ''"
                  :style="{color: getStatusInfo.color || ''}"
                  class="status-icon"></svg-icon>
      </span>
      <!-- 表单列表 -->
      <view class="form-list">
        <view v-for="(item,index) in formList"
              :key="index"
              class="ft30 form-item center-align pt28 pb28">
          <text class="color-333 medium">{{item.name}}</text>
          <view class="pl32 flex1">
            <text v-if="item.keyName === 'activityTime'">{{getTime}}</text>
            <text
                  v-else-if="item.keyName === 'startTime'">{{moment(detailInfo.startTime).format('YYYY-MM-DD HH:mm')}}</text>
            <view v-else-if="item.keyName ==='address'"
                  class="between-row">
              <text class="color-666">{{detailInfo[item.keyName]}}</text>
              <view @click="onToMap">
                <svg-icon class="ding-wei"
                          icon="icon_dingwei"></svg-icon>
              </view>
            </view>
            <text v-else
                  class="color-666">{{detailInfo[item.keyName]}}</text>
          </view>

        </view>
      </view>
    </view>
    <!-- 活动风采 -->
    <!-- 活动已结束才有活动风采 -->
    <view v-if="detailInfo && detailInfo.status === '03'"
          class="activity-style pt32 pb24 pl30 pr30 bg-white ft30 color-333 column mt20 mb32">
      <text class="bold">活动风采</text>
      <text class="pt20">{{detailInfo.styleDescription}}</text>
      <view class="flex mt16">
        <image v-for="(item,index) in imgList"
               :key="index"
               class="img"
               :src="$imgUrlDeal(item.url)"></image>
      </view>
    </view>
    <view v-if="detailInfo && detailInfo.status !== '02'"
          class="footer bg-white center">
      <!-- <text class="btn center ft32 medium"
            :style="{background: detailInfo.status === '01' ? '#E32417':'#fff',color:detailInfo.status === '01' ? '#fff':'#E32417'}"
            @click="onToRoute">{{detailInfo.status === '03' && !$isEmpty(detailInfo.styleDescription) ?  '编辑活动风采': getStatusInfo.btnText}}</text> -->
      <text v-if="detailInfo.status === '01'"
            class="btn center ft32 medium"
            :style="{background: detailInfo.status === '01' ? '#E32417':'#fff',color:detailInfo.status === '01' ? '#fff':'#E32417'}"
            @click="onToRoute">我要报名</text>
    </view>
  </view>
</template>
<script>
import moment from "moment"
import { statusMap } from '@/utils/enum.js'
export default {
  name: 'Detail',
  methods: {
    moment,
    // TODO: 调用第三方地图
    onToMap () {
      uni.getLocation({
        type: 'gcj02', //返回可以用于uni.openLocation的经纬度
        success: function (res) {
          console.log(res);
          const latitude = res.latitude;
          const longitude = res.longitude;
          uni.openLocation({
            latitude: latitude,
            longitude: longitude,
            success: function () {
              console.log('success');
            }
          });
        }
      });
    },
    onToRoute () {
      const { status, id } = this.detailInfo
      const url = status === '01' ? `/pages/home/stroke-order/signUp?id=${id}&type=activity` : ''
      uni.navigateTo({
        url
      })
    },
    getJourneyActivityDetail () {
      const params = {
        id: this.id
      }
      this.$api.getJourneyActivityDetail(params).then(res => {
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
      formList: Object.freeze([
        {
          name: '组织单位',
          keyName: 'orgName'
        },
        {
          name: '联系方式',
          keyName: 'phone'
        },
        {
          name: '活动时间',
          keyName: 'activityTime'
        },
        {
          name: '报名截止',
          keyName: 'startTime'
        },
        {
          name: '活动地点',
          keyName: 'address'
        },
        {
          name: '活动人数',
          keyName: 'numberLimit'
        },
        {
          name: '报名人数',
          keyName: ''
        },
        {
          name: '活动介绍',
          keyName: 'introduction'
        },
      ]),
      id: '',
      statusMap,
      detailInfo: ''
    }
  },
  computed: {
    imgList () {
      if (this.$isEmpty(this.detailInfo)) return
      return this.detailInfo.attachmentList.filter(item => item.sourceType === '01')
    },
    getTime () {
      const { startTime, endTime } = this.detailInfo
      const sDay = moment(startTime).format('YYYY-MM-DD')
      const eDay = moment(endTime).format('YYYY-MM-DD')
      const eTime = moment(endTime).format('HH:mm')
      const newStartTime = moment(startTime).format('YYYY-MM-DD HH:mm')
      const newEndTime = moment(endTime).format('YYYY-MM-DD HH:mm')
      if (sDay === eDay) {
        return newStartTime + '~' + eTime
      }
      return newStartTime + '~' + newEndTime
    },
    getStatusInfo () {
      return this.statusMap.get(this.detailInfo.status)
    }
  },
  onLoad ({ id }) {
    this.id = id
  },
  created () {
    this.getJourneyActivityDetail()
  },
}
</script>
<style>
page {
  background: #f7f7f7;
  display: flex;
}
</style>
<style lang='scss' scoped>
.detail-wrap {
  padding-bottom: 120rpx;
  .title {
    .status-icon {
      font-size: 88rpx;
      height: 44rpx;
    }
  }
  .form-list {
    .form-item {
      border-top: 1rpx solid #eaeaea;
      .ding-wei {
        color: #0084f6;
      }
    }
  }
  .activity-style {
    .img + .img {
      margin-left: 18rpx;
    }
    .img {
      width: 218rpx;
      height: 218rpx;
    }
  }
  .footer {
    width: 100%;
    height: 120rpx;
    position: absolute;
    bottom: 0;
    .btn {
      width: calc(100% - 60rpx);
      height: 88rpx;
      border: 1rpx solid #e32417;
      border-radius: 49rpx;
      color: #e32417;
    }
  }
}
</style>