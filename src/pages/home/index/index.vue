<template>
  <div class='tabbar-home-wrap'>
    <Map needClick
         :mapInitObj="mapInitObj"
         mapClass="mapVH60"
         :points="points"></Map>
    <DragPopover @dragTopChange="dragTopChange">
      <mescroll-uni ref="mescrollRef"
                    class="mescroll-wrap"
                    :top="scrollTop"
                    :up="upOption"
                    @init="mescrollInit"
                    @down="downCallback"
                    @up="upCallback">
        <template>
          <div class="box relative">
            <PathsList @onSelectPath="onSelectPath"></PathsList>
            <div class="content">
              <ScenicSpot :points="points"
                          ref="refScenicSpot"></ScenicSpot>
              <div class="center pb32 pt16 create-btn-wrap">
                <div class="create-btn center bold"
                     @click="onCreateTravel">创建我的行程</div>
              </div>
            </div>
            <activity-swiper></activity-swiper>
          </div>
        </template>
      </mescroll-uni>
    </DragPopover>

  <btn-dialog></btn-dialog>
  </div>
</template>

<script>
import Map from '@/pages/components/Map.vue'
import DragPopover from '@/components/DragPopover'
import PathsList from './components/PathsList'
import ScenicSpot from './components/ScenicSpot'
import BtnDialog from './components/BtnDialog'
import ActivitySwiper from './components/ActivitySwiper'
import MescrollMixin from "@/components/mescroll-uni/mescroll-mixins.js";
import MescrollUni from "@/components/mescroll-uni/mescroll-uni.vue";
export default {
  name: "index",
  methods: {
    // 下拉刷新
    downCallback () {
      this.mescroll.resetUpScroll(); // 重置列表为第一页
    },
    // 加载更多
    upCallback (page) {
      this.getItineraryEvaluationPage(page)
    },
    resetGetList () {
      this.listData = []
      this.mescroll.resetUpScroll()
    },

    getItineraryEvaluationPage (page) {
      const params = {
        pageNumber: page ? page.num : 1,
        pageSize: page ? page.size : 10
      }
      this.$api.getItineraryEvaluationPage(params).then(res => {
        if (res.isError) return this.mescroll.endErr()
        const { items, count } = res.content
        this.mescroll.endBySize(items.length, count)
        const list = res.content.items
        this.evaluationList = params.pageNumber === 1 ? list : this.evaluationList.concat(list)
      })
    },

    dragTopChange (top) {
      this.scrollTop = (top * 2) + 32
    },

    onCreateTravel () {
      uni.navigateTo({ url: '/pages/home/stroke-order/index' })
    },
    onSelectPath(journeyLineId) {
      this.$nextTick(() => {
        this.$refs.refScenicSpot.scrollTop = 0;
      });
      this.getJourneyPointListByJourneyId(journeyLineId);
    },

    // 根据路线 id 获取点位
    getJourneyPointListByJourneyId(journeyLineId) {
      const params = {
        journeyLineId,
      };
      this.$api.getJourneyPointListByJourneyId(params).then((res) => {
        if (res.isError) return;
        this.points = res.content;
      });
    }
  },
  data() {
    return {
      points: [],
      mapInitObj: Object.freeze({
        resizeEnable: true,
        zoom: 9, // 级别
        center: [119.365056, 30.034302]
      }),
      upOption: {
        empty: {
          use: false, // 是否显示空布局
        },
        textNoMore: "到底了~",
        noMoreSize: 8, // 配置列表的总数量要大于等于1条才显示'-- END --'的提示
      },
      scrollTop: 630,
      evaluationList: []
    }
  },
  components: {
    Map,
    DragPopover,
    PathsList,
    ScenicSpot,
    BtnDialog,
    ActivitySwiper,
    MescrollUni
  },
  onLoad (option) {
    if (option.masterOrgId) uni.setStorageSync('masterOrgId', option.masterOrgId)
  },
  mixins: [MescrollMixin],
}
</script>

<style lang="scss" scoped>
.tabbar-home-wrap {
  .box {
    height: 100%;
    position: relative;
    .create-btn-wrap {
      background: #ffffff;
      .create-btn {
        width: 480rpx;
        height: 80rpx;
        border-radius: 40rpx;
        border: 1px solid #e32417;
        font-size: 32rpx;
        color: #e32417;
      }
    }
  }
  .content {
    position: absolute;
    top: 240rpx;
    bottom: 24rpx;
    left: 0;
    right: 0;
    box-sizing: border-box;
    overflow: scroll;
    white-space: nowrap;
  }
}
</style>
