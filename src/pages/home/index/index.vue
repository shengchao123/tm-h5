<template>
  <div class="tabbar-home-wrap">
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
            <div class="pl30 pr30 mt20">
              <div class="center-align">
                <span class="ft32 color-333 mr8 bold">评价</span>
                <span v-if="evaluationCount > 0"
                      class="ft24 color-999">({{evaluationCount}})</span>
              </div>
              <div v-if="evaluationCount > 0"
                   class="evaluation-list between-row  mt40">
                <div v-for="(item, index) in evaluationList"
                     :key="index"
                     class="evaluation-item mb20">
                  <img class="attachment"
                       :src="$fileHost + item.attachment" />
                  <div class="pl12 pr12 pt4 pb18">
                    <div class="title ft28 color-333 medium mb4">{{item.title}}</div>
                    <div class="center-align between-row">
                      <div class="center-align">
                        <div class="avatar mr8">
                          <img :src="$avatarUrl(item.avatar)" />
                        </div>
                        <span class="ft24 color-999">{{item.nick}}</span>
                      </div>
                      <div class="trigger-area relative center-align pl32"
                           @click.stop="onLike(item, index)">
                        <text class="iconfont ft28  mr8"
                              :class="item.isLike ? 'icon_zan primary-color' : 'icon_zankong color-999'"></text>
                        <svg-icon :icon="item.isLike ? 'icon_shoucang' : 'icon_weishoucang'"
                                  class="ft28 color-999 mr8"
                                  :class="item.isLike ? 'primary-color' : 'color-999'"></svg-icon>
                        <text class="ft26"
                              :class="item.isLike ? 'primary-color' : 'color-666'">{{item.likeQuantity}}</text>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <page-empty v-else
                          :imgUrl="require('@/static/empty/no-activity.png')"
                          message="暂无评价"></page-empty>
            </div>
          </div>
        </template>
      </mescroll-uni>
    </DragPopover>

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
import PageEmpty from '../../components/PageEmpty.vue';
export default {
  name: "index",
  methods: {
    // 下拉刷新
    downCallback () {
      this.mescroll.resetUpScroll(); // 重置列表为第一页
    },
    // 加载更多
    upCallback (page) {
      this.getItineraryEvaluationPage(page);
    },
    resetGetList () {
      this.listData = [];
      this.mescroll.resetUpScroll();
    },

    getItineraryEvaluationPage (page) {
      const params = {
        pageNumber: page ? page.num : 1,
        pageSize: page ? page.size : 10,
      };
      this.$api.getItineraryEvaluationPage(params).then((res) => {
        if (res.isError) return this.mescroll.endErr();
        const { items, count } = res.content;
        this.mescroll.endBySize(items.length, count);
        const list = res.content.items;
        this.evaluationList = params.pageNumber === 1 ? list : this.evaluationList.concat(list);
        this.evaluationCount = count
      });
    },

    dragTopChange (top) {
      this.scrollTop = top * 2 + 32;
    },

    // 点赞
    onLike (item, index) {
      let { communityNoteId, isLike, likeQuantity } = item
      const evaluationList = this.evaluationList
      const params = {
        communityNoteId,
      }
      item.isLike = !isLike
      const apiName = isLike ? 'cancelCommunityLikeNote' : 'communityLikeNote'
      this.$api[apiName](params).then(res => {
        if (res.isError) return this.$msg(res.message)
        item.isLike = !isLike
        item.likeQuantity = isLike ? likeQuantity - 1 : likeQuantity + 1
        console.log(item.likeQuantity)
        evaluationList[index] = item
        this.evaluationList = [...evaluationList]
      })
    },
    onCreateTravel () {
      uni.navigateTo({ url: `/pages/home/stroke-order/index?journeyLineId=${this.selectJourneyLineId}` });
    },
    onSelectPath (journeyLineId) {
      this.$nextTick(() => {
        this.$refs.refScenicSpot.scrollTop = 0;
      });
      this.selectJourneyLineId = journeyLineId
      this.getJourneyPointListByJourneyId(journeyLineId);
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
      scrollTop: 630,
      selectJourneyLineId: '',
      evaluationList: [],
      evaluationCount: 0
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
    PageEmpty,
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
  .evaluation-list {
    flex-wrap: wrap;
    .evaluation-item {
      width: 335rpx;
      border-radius: 6rpx;
      overflow: hidden;
      background: #fff;
      box-shadow: 3rpx 2rpx 12rpx 8rpx rgba(17, 17, 17, 0.03);
      .trigger-area {
        height: 82rpx;
      }
      .attachment {
        width: 335rpx;
        height: 335rpx;
      }
      .title {
        overflow: hidden;
        text-overflow: ellipsis;
        display: box;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
      }
      .avatar {
        width: 32rpx;
        height: 32rpx;
        border-radius: 16rpx;
        overflow: hidden;
        img {
          width: 100%;
          height: 100%;
        }
      }
    }
  }
  .content {
    box-sizing: border-box;
    overflow: scroll;
    white-space: nowrap;
  }
}
</style>
