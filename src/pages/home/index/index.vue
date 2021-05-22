<template>
  <div class="tabbar-home-wrap">
    <Map
      needClick
      :mapInitObj="mapInitObj"
      mapClass="mapVH60"
      :points="points"
    ></Map>
    <DragPopover>
      <div class="box relative">
        <PathsList @onSelectPath="onSelectPath"></PathsList>
        <div class="content">
          <ScenicSpot :points="points" ref="refScenicSpot"></ScenicSpot>
          <div class="center pb32 pt16 create-btn-wrap">
            <div class="create-btn center bold" @click="onCreateTravel">
              创建我的行程
            </div>
          </div>
          <activity-swiper></activity-swiper>
        </div>
      </div>
    </DragPopover>

  <btn-dialog></btn-dialog>
  </div>
</template>

<script>
import Map from "@/pages/components/Map.vue";
import DragPopover from "@/components/DragPopover";
import PathsList from "./components/PathsList";
import ScenicSpot from "./components/ScenicSpot";
import BtnDialog from './components/BtnDialog'
import ActivitySwiper from './components/ActivitySwiper'
export default {
  name: "index",
  methods: {
    onCreateTravel() {
      uni.navigateTo({ url: "/pages/home/stroke-order/index" });
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
        center: [119.365056, 30.034302],
      }),
    };
  },
  components: {
    Map,
    DragPopover,
    PathsList,
    ScenicSpot,
    BtnDialog,
    ActivitySwiper
  },
  onLoad(option) {
    if (option.masterOrgId)
      uni.setStorageSync("masterOrgId", option.masterOrgId);
  }
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
