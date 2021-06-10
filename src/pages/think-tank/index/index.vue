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
                    bottom="166"
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
            <expert-services-item :itemInfo="item"></expert-services-item>
          </view>
        </view>
      </mescroll-uni>
    </div>
    <img v-else
         :src="imgs[current]"
         @click="onToDetail">
    <custom-tabbar></custom-tabbar>
  </div>
</template>
<script>
import MescrollMixin from "@/components/mescroll-uni/mescroll-mixins.js";
import MescrollUni from "@/components/mescroll-uni/mescroll-uni.vue";
import PolicyInfoItem from './components/PolicyInfoItem.vue'
import ExpertServicesItem from './components/ExpertServicesItem.vue'
export default {
  name: 'index',
  methods: {
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
            name: '涉农项目'
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
    MescrollUni
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
  padding-top: 100rpx;
  .tab {
    position: fixed;
    top: 0;
    width: 100%;
    height: 88rpx;
    box-sizing: border-box;
    padding-top: 16rpx;
    background: #fff;
  }
  img {
    margin-top: -10rpx;
    width: 100vw;
  }
}
</style>
