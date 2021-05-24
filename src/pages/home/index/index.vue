<template>
  <div class="tabbar-home-wrap">
    <Map needClick
         :mapInitObj="mapInitObj"
         mapClass="mapVH60"
         :points="points"></Map>
    <DragPopover>

      <mescroll-uni ref="mescrollRef"
                    :height="dragPopHeight + 'px'"
                    :up="upOption"
                    @init="mescrollInit"
                    @down="downCallback"
                    @up="upCallback">
        <template>
          <div class="box relative">
            <PathsList @onSelectPath="onSelectPath"></PathsList>
            <div>
              <div class="content">
                <ScenicSpot :points="points"
                            ref="refScenicSpot"></ScenicSpot>
              </div>
              <div class="center pb32 pt16 create-btn-wrap">
                <div class="create-btn center bold"
                     @click="onCreateTravel">创建我的行程</div>
              </div>
            </div>
            <activity-swiper></activity-swiper>
            <evaluation-list ref="evaluationList"
                             @endBySize="endBySize"
                             @endErr="endErr"></evaluation-list>
          </div>
        </template>
      </mescroll-uni>
    </DragPopover>
    <u-action-sheet :list="actions"
                    @click="onSelectGuide"
                    v-model="showGuide"></u-action-sheet>
    <btn-dialog></btn-dialog>
  </div>
</template>

<script>
import Map from "@/pages/components/Map.vue";
import DragPopover from "@/components/DragPopover";
import PathsList from "./components/PathsList";
import ScenicSpot from "./components/ScenicSpot";
import BtnDialog from "./components/BtnDialog";
import ActivitySwiper from "./components/ActivitySwiper";
import MescrollMixin from "@/components/mescroll-uni/mescroll-mixins.js";
import MescrollUni from "@/components/mescroll-uni/mescroll-uni.vue";
import EvaluationList from './components/EvaluationList.vue';
import { beginGuide } from '@/utils/map.js'
export default {
  name: "index",
  methods: {
    // 下拉刷新
    downCallback () {
      console.log('下拉刷新')
      this.mescroll.resetUpScroll(); // 重置列表为第一页
    },
    // 加载更多
    upCallback (page) {
      console.log('加载更多')
      const evaluationList = this.$refs.evaluationList
      evaluationList && evaluationList.getItineraryEvaluationPage(page);
    },
    resetGetList () {
      this.listData = [];
      this.mescroll.resetUpScroll();
    },
    endBySize (items, count) {
      this.mescroll.endBySize(items.length, count);
    },
    endErr () {
      this.mescroll.endErr()
    },
    dragTopChange (offsetHeight) {
      this.dragPopHeight = offsetHeight
    },
    onCreateTravel () {
      if (this.$notMember()) return this.$goLogin()
      uni.navigateTo({ url: `/pages/home/stroke-order/index?journeyLineId=${this.selectJourneyLineId}` });
    },
    onSelectPath (journeyLineId) {
      this.$nextTick(() => {
        this.$refs.refScenicSpot.scrollTop = 0;
      });
      this.selectJourneyLineId = journeyLineId
      this.getJourneyPointListByJourneyId(journeyLineId);
    },
    // 地图跳转
    onShowNavigationSelect (pointData) {
      this.showGuide = true
      this.pointData = pointData
    },
    // 选择地图导航回调
    onSelectGuide (act) {
      beginGuide(act, this.pointData)
    },
    // 根据路线 id 获取点位
    getJourneyPointListByJourneyId (journeyLineId) {
      const params = {
        journeyLineId,
      };
      this.$api.getJourneyPointListByJourneyId(params).then((res) => {
        if (res.isError) return;
        this.points = res.content;
      });
    },
  },
  provide () {
    return {
      onShowNavigationSelect: this.onShowNavigationSelect
    }
  },
  data () {
    return {
      points: [],
      mapInitObj: Object.freeze({
        resizeEnable: true,
        zoom: 9, // 级别
        zooms: [9, 19],
        center: [119.365056, 30.034302],
      }),
      upOption: {
        empty: {
          use: false, // 是否显示空布局
        },
        textNoMore: "到底了~",
        noMoreSize: 8, // 配置列表的总数量要大于等于1条才显示'-- END --'的提示
      },
      // scrollTop: 645,
      dragPopHeight: '50%',
      selectJourneyLineId: '',
      showGuide: false,
      pointData: {},
      actions: Object.freeze([{ text: '高德地图' }, { text: '腾讯地图' }]),
    };
  },
  components: {
    Map,
    DragPopover,
    PathsList,
    ScenicSpot,
    BtnDialog,
    ActivitySwiper,
    MescrollUni,
    EvaluationList,
  },
  onLoad (option) {
    if (option.masterOrgId) {
      uni.setStorageSync('masterOrgId', option.masterOrgId)
      uni.setStorageSync('orgId', option.masterOrgId)
    }
  },
  mixins: [MescrollMixin],
};
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
    box-sizing: border-box;
    overflow: scroll;
    white-space: nowrap;
  }
  /deep/.mescroll-uni {
    // height: 100% !important;
  }
}
</style>
