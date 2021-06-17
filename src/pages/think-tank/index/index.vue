<template>
  <div class='think-tank-wrap'>
    <div class="tab">
      <u-tabs :list="tab.list"
              :is-scroll="false"
              bar-width="32"
              bar-height="4"
              height="60"
              font-size="28"
              :offset="[20, 0]"
              :current="current"
              active-color="#E32417"
              inactive-color="#666666"
              @change="tabChange"></u-tabs>
    </div>
    <div v-if="current !== 2">
      <empty v-if="isEmpty"></empty>
      <mescroll-uni v-else
                    ref="mescrollRef"
                    @init="mescrollInit"
                    @down="downCallback"
                    :up="upOption"
                    @up="upCallback"
                    bottom="100"
                    top="88">
        <view v-if="current === 0">
          <view v-for="(item,index) in policyDataList"
                :key="index"
                class="list-item mt20 pl30 pr30"
                @click="onToDetail(item.id)">
            <policy-info-item :itemInfo="item"></policy-info-item>
          </view>
        </view>
        <view v-else>
          <view v-for="(item,index) in expertDataList"
                :key="index"
                class="list-item mt20 pl30 pr30"
                @click="onToDetail(item.id)">
            <expert-services-item :itemInfo="item"
                                  :showContact.sync="showContact"
                                  :noTimeShow.sync="noTimeShow"
                                  :selectItem.sync="selectItem"
                                  @onContact="onContact(item)">
            </expert-services-item>
          </view>
        </view>
      </mescroll-uni>
    </div>
    <div v-else>
      <subsidies></subsidies>
    </div>
    <!-- <img v-else
         :src="imgs[current]"
         @click="onToDetail"> -->
    <u-popup class="contact-dialog tc"
             v-model="showContact"
             mode="center"
             border-radius="24"
             width="540">
      <view class="container column">
        <text class="color-999 ft28 line1">即将拨打专家电话</text>
        <text class="color-333 ft34 medium line1 mt36">{{selectItem.contactPhone}}</text>
        <!-- 专家 -->
        <view v-if="isTalents === 'true'"
              class="expert flex">
          <view class="color-333 ft32 center"
                @click="showContact = false">
            取消
          </view>
          <view class="center primary-color"
                @click="onCall">
            拨通电话
          </view>
        </view>
        <!-- 普通用户 -->
        <view v-else
              class="member">
          <view v-for="(btnItem,index) in btns"
                :key="index"
                class="btn-item center ft34 color-333"
                @click="onAction(index)">
            <text>{{btnItem}}</text>
          </view>
        </view>
      </view>
    </u-popup>
    <u-popup class="contact-dialog tc"
             v-model="noTimeShow"
             mode="center"
             border-radius="24"
             width="540">
      <view class="container column">
        <view class="column center-align color-333 ft32 medium">
          <text class="line1">不在电话服务时间内</text>
          <text v-if="!isTalents === 'true'">可进行问题留言</text>
        </view>
        <!-- 专家 -->
        <view v-if="isTalents === 'true'"
              class="no-time pt16">
          <text class="line1 color-999 ft26">时间：{{noTimes}}</text>
          <view class="btn center"
                @click="noTimeShow = false">
            <text class="color-666 medium">我知道了</text>
          </view>
        </view>
        <!-- 普通用户 -->
        <view v-else
              class="expert flex">
          <view class="color-333 ft32 center"
                @click="noTimeShow = false">
            取消
          </view>
          <view class="center primary-color"
                @click="onMessage">
            留言
          </view>
        </view>
      </view>
    </u-popup>
    <custom-tabbar></custom-tabbar>
  </div>
</template>
<script>
import MescrollMixin from "@/components/mescroll-uni/mescroll-mixins.js";
import MescrollUni from "@/components/mescroll-uni/mescroll-uni.vue";
import PolicyInfoItem from './components/PolicyInfoItem.vue'
import ExpertServicesItem from './components/ExpertServicesItem.vue'
import Subsidies from './components/Subsidies.vue'
import { filterWeek } from './components/filter.js'
export default {
  name: 'index',
  methods: {
    filterWeek,
    onContact (item) {
      // 判断是否登录逻辑
      if (this.$notMember()) return this.$goLogin();
      this.selectItem = item
      const { isTelephoneCommunication } = this.selectItem
      if (isTelephoneCommunication) {
        this.showContact = true
        return
      }
      this.onMessage()
    },
    // 将时间转成数字 与当前时间比较
    filterTimeToNumber (time) {
      return +(time.split(':').join(''))
    },
    // 判断当前时间是否在范围内
    isInTimes () {
      const { openDayList, startTime, endTime } = this.selectItem
      const currentWeek = this.$moment().weekday() + 1
      const currentTime = this.$moment().format("HH:mm")
      const numStart = this.filterTimeToNumber(startTime)
      const numEnd = this.filterTimeToNumber(endTime)
      const numCurrent = this.filterTimeToNumber(currentTime)
      if (!openDayList.includes(currentWeek)) return false
      if (numCurrent < numStart) return false
      if (numCurrent > numEnd) return false
      return true
    },
    // 留言
    onMessage () {
      uni.navigateTo({
        url: `/pages/think-tank/message/index?id=${this.selectItem.id}`
      })
    },
    // 打电话
    onCall () {
      const { openDayList, startTime, endTime } = this.selectItem
      this.showContact = false
      if (!this.isInTimes()) {
        this.noTimes = this.filterWeek(openDayList) + '，' + startTime + '～' + endTime
        this.$nextTick(() => {
          this.noTimeShow = true
        })
        return
      }
      uni.makePhoneCall({
        phoneNumber: this.selectItem.contactPhone
      })
    },
    onAction (index) {
      this.showContact = false
      this.noTimeShow = false
      if (index === 0) {
        this.onCall()
        return
      }
      if (index === 1) {
        this.onMessage()
      }
    },
    upCallback (page) {
      this.getListData(page)
    },
    // 下拉刷新
    downCallback () {
      this.mescroll.resetUpScroll(); // 重置列表为第一页
    },
    getListData (page) {
      const params = {
        pageNumber: page && page.num || 1,
        pageSize: page && page.size || 10
      }
      const apiName = this.current === 0 ? 'getShowJourneyPolicyPage' : 'getShowJourneyTalentsPage'
      this.$api[apiName](params).then(res => {
        if (res.isError) {
          this.mescroll.endBySize(0, 0)
          this.isEmpty = true
          this.$msg(res.message)
          return
        }
        const { items, count } = res.content
        this.mescroll.endBySize(items.length, count)
        const dataList = this.current === 0 ? 'policyDataList' : 'expertDataList'
        if (params.pageNumber === 1) this[dataList] = []
        this[dataList] = this[dataList].concat(items)
        this.isEmpty = this.$isEmpty(this[dataList])
      })
    },
    onToDetail (id) {
      if (this.current === 0) {
        uni.navigateTo({ url: `/pages/think-tank/policy/Detail?id=${id}` })
      }
      if (this.current === 1) {
        uni.navigateTo({ url: `/pages/think-tank/expert/Detail?id=${id}` })
      }
      if (this.current === 2) {
        uni.navigateTo({ url: '/pages/think-tank/countryside/Detail' })
      }
    },
    tabChange (index) {
      this.current = index
      this.getListData()
    },
  },
  data () {
    return {
      noTimes: '',
      btns: ['拨通电话', '留言', '取消'],
      isTalents: uni.getStorageSync('isTalents'),
      selectItem: {},
      showContact: false,
      noTimeShow: false,
      policyDataList: [],
      expertDataList: [],
      isEmpty: false,
      upOption: {
        empty: {
          use: false
        },
        textNoMore: "没有更多数据",
        noMoreSize: 10, // 配置列表的总数量要大于等于10条才显示'-- END --'的提示
      },
      current: 0,
      imgs: Object.freeze([
        require('@/static/test/081.png'),
        require('@/static/test/082.png'),
        require('@/static/test/083.png'),
      ]),
      tab: {
        list: [
          {
            name: '政策信息'
          },
          {
            name: '专家服务'
          },
          {
            name: '无感直补'
          },
        ]
      }
    }
  },
  onLoad ({ current }) {
    if (!current) return
    this.current = +current
  },
  mixins: [MescrollMixin],
  components: {
    PolicyInfoItem,
    ExpertServicesItem,
    MescrollUni,
    Subsidies
  }
}
</script>
<style>
page {
  height: 100%;
  background: #f7f7f7;
}
</style>
<style lang='scss' scoped>
.think-tank-wrap {
  padding-bottom: 50px;
  // padding-top: 100rpx;
  .tab {
    position: fixed;
    top: 0;
    width: 100%;
    height: 88rpx;
    box-sizing: border-box;
    padding-top: 16rpx;
    background: #fff;
    z-index: 1;
  }
  img {
    margin-top: -10rpx;
    width: 100vw;
  }
  .contact-dialog {
    .container {
      padding-top: 58rpx;
      .expert {
        margin-top: 50rpx;
        border-top: 2rpx solid #eaeaea;
        height: 88rpx;
        view {
          width: 50%;
          &:last-child {
            color: #e32417;
            border-left: 2rpx solid #eaeaea;
          }
        }
      }
      .member {
        margin-top: 36rpx;
        .btn-item {
          height: 88rpx;
          border-top: 2rpx solid #eaeaea;
          &:first-child {
            color: #e32417;
          }
        }
      }
    }
  }
}
</style>
