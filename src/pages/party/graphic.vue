<template>
  <div class='graphic-wrap'>
    <div class="tab">
      <u-tabs :list="tabList"
              :current="current"
              active-color="#E32417"
              inactive-color="#666666"
              bar-width="32"
              bar-height="4"
              height="55"
              font-size="28"
              :offset="[20, 0]"
              @change="changeTab"></u-tabs>
    </div>
    <mescroll-uni v-if="tabList.length > 0"
                  ref="mescrollRef"
                  class="mescroll-wrap"
                  top="100"
                  :up="upOption"
                  @init="mescrollInit"
                  @down="downCallback"
                  @up="upCallback">
      <template>
        <div class="list pt12">
          <div v-for="(item, index) in listData"
               :key="index"
               class="item flex mb20 pt32 pb32 pl30 pr30">
            <img class="poster mr24"
                 :src="item.imageUrl" />
            <div class="flex1">
              <div class="ft32 medium mb16">{{item.title}}</div>
              <div class="content ft26 mb14">{{item.digest}}</div>
              <div class="ft24 color-999">
                <span class="mr40">{{$moment(item.createTime).format('YYYY-MM-DD')}}</span>
                <span>{{'大家萨达撒'}}</span>
              </div>
            </div>
          </div>
        </div>
        <contact-person :list="tabList[current].addressBookList"></contact-person>
      </template>
    </mescroll-uni>
  </div>
</template>
<script>
import MescrollMixin from "@/components/mescroll-uni/mescroll-mixins.js";
import MescrollUni from "@/components/mescroll-uni/mescroll-uni.vue";
import ContactPerson from './components/ContactPerson.vue';
export default {
  methods: {
    changeTab (index) {
      this.current = index
    },
    // 下拉刷新
    downCallback () {
      this.mescroll.resetUpScroll(); // 重置列表为第一页
    },
    // 加载更多
    upCallback (page) {
      this.getGraphicInfoPage(page)
    },
    resetGetList () {
      this.commentList = []
      this.mescroll.resetUpScroll()
    },
    getGraphicInfoPage (page) {
      const orgId = this.tabList[this.current].id
      const params = {
        orgId,
        pageNumber: page && page.num || 1,
        pageSize: page && page.size || 10,
      }
      this.$api.getGraphicInfoPage(params).then(res => {
        if (res.isError) return this.mescroll.endErr()
        const { items, count } = res.content
        this.mescroll.endBySize(items.length, count)
        this.count = count
        // this.listData = params.pageNumber === 1 ? items : this.listData.concat(items)
      })
    },
    getJourneyAllianceInfoList () {
      this.$api.getJourneyAllianceInfoList().then(res => {
        if (res.isError) return this.$msg(res.message)
        this.tabList = res.content || []
      })
    },
  },
  data () {
    return {
      tabList: [],
      current: 0,
      upOption: {
        empty: {
          use: false, // 是否显示空布局
          icon: this.$imgHost + "order/no-order.png",
          tip: '暂无数据' // 提示
        },
        textNoMore: "没有更多数据",
        noMoreSize: 1, // 配置列表的总数量要大于等于5条才显示'-- END --'的提示
      },
      listData: [
        {
          "contentType": "",
          "createTime": 12312312412,
          "digest": "发大水，发澳门反馈奥斯卡发放假啊是积分叫阿三的法撒旦噶士大夫结果大水噶地方河是德国地方公司大厦给v撒旦",
          "hyperlinksUrl": "",
          "id": 0,
          "imageUrl": "material/image/2021051819245642835059756182528.jpg",
          "title": "发噶十九分暗时你们发到付卡就发按实际发案件放假啊看",
          "videoLinkUrl": ""
        }
      ],
      count: 0,
    }
  },
  watch: {
    current () {
      this.resetGetList()
    }
  },
  onLoad () {
    this.getJourneyAllianceInfoList()
  },
  mixins: [MescrollMixin],
  components: { MescrollUni, ContactPerson }
}
</script>
<style>
page {
  height: 100%;
  background: #f7f7f7;
}
</style>
<style lang='scss' scoped>
.graphic-wrap {
  color: #333;
  .tab {
    width: 100%;
    height: 88rpx;
    box-sizing: border-box;
    padding-top: 16rpx;
    background: #fff;
  }
  .list {
    .item {
      background: #fff;
      .poster {
        width: 240rpx;
        height: 180rpx;
      }
      .content {
        text-overflow: -o-ellipsis-lastline;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        line-clamp: 2;
        -webkit-box-orient: vertical;
      }
    }
  }
}
</style>