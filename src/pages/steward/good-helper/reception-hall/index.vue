<template>
  <view class="reception-hall-wrap flex1">
    <mescroll-uni ref="mescrollRef"
                  class="mescroll-wrap"
                  :up="upOption"
                  @init="mescrollInit"
                  @down="downCallback"
                  @up="upCallback">
      <template>
        <view class="hall-container">
          <view class="box-bg">
            <text class="ft28 white-color">
              社区发布的项目若一定时间内无共建单位认领会流转到领办大厅，此时将允许所有单位认领，原共建单位认领不享受分数加成，其余单位享受。办结后进行分数结算
            </text>
          </view>
          <view class="community-select bg-white center-align pl32"
                @click="$refs.selectionCommunit.show()">
            <text class="ft28 color-666">{{communityText}}</text>
            <svg-icon icon="icon_xiangxia"
                      class="ft18 ml16 color-999"></svg-icon>
          </view>
          <view>
            <project-item class="mt24 project-item"
                          v-for="(item, index) in listData"
                          :project-item="item"
                          :key="index"
                          :show-border="false"
                          :isUnitUser="isUnitUser"
                          @onReceive="onReceive">
            </project-item>
          </view>
        </view>
      </template>
    </mescroll-uni>
    <selection-communit ref="selectionCommunit"
                        @onConfirm="onConfirmCommunit"></selection-communit>
    <receive-pop ref="receivePop"
                 :isHall="true"></receive-pop>
  </view>
</template>
<script>
import ProjectItem from '../components/ProjectItem.vue';
import MescrollMixin from "@/components/mescroll-uni/mescroll-mixins.js";
import MescrollUni from "@/components/mescroll-uni/mescroll-uni.vue";
import ReceivePop from '../components/ReceivePop.vue';
import SelectionCommunit from '../components/SelectionCommunit.vue';
export default {
  name: 'ReceptionHall',
  methods: {
    onConfirmCommunit (item) {
      this.streetInfo = item.streetInfo
      this.communityInfo = item.communityInfo
      this.communityOrgId = item.communityInfo.id
      this.$nextTick(() => {
        this.getJourneyHelperProjectShowPage()
      })
    },
    onReceive (projectId) {
      if (this.$notMember()) return this.$goLogin();
      this.$refs.receivePop.show({
        projectId,
        communityOrgId: this.communityOrgId,
      })
    },
    getJourneyHelperProjectShowPage (page) {
      const params = {
        pageNumber: page && page.num || 1,
        pageSize: page && page.size || 10,
        communityOrgId: this.communityOrgId,
        type: 1
      }
      this.$api.getJourneyHelperProjectShowPage(params).then(res => {
        if (res.isError) return this.mescroll.endErr()
        const { items, count } = res.content
        this.mescroll.endBySize(items.length, count)
        this.listData = params.pageNumber === 1 ? items : this.listData.concat(items)
      })
    },
    upCallback (page) {
      this.getJourneyHelperProjectShowPage(page)
      this.mescroll.endErr()
    },
    downCallback () {
      this.mescroll.resetUpScroll(); // 重置列表为第一页
    },
  },
  data () {
    return {
      upOption: {
        empty: {
          use: false, // 是否显示空布局
        },
      },
      streetInfo: {},
      communityInfo: {},
      communityOrgId: null,
      listData: []
    }
  },
  computed: {
    communityText () {
      const { streetInfo, communityInfo } = this
      return streetInfo.name + communityInfo.name
    },
    memberPersonalInfo () {
      return this.$store.state.user.memberPersonalInfo
    },
    // 是否共建单位用户
    isUnitUser () {
      return this.memberPersonalInfo.isUnitUser
    }
  },
  created () { },
  mixins: [MescrollMixin],
  components: { ProjectItem, MescrollUni, ReceivePop, SelectionCommunit },
}
</script>
<style scoped>
page {
  width: 100%;
  min-height: 100%;
  background: #f7f7ff;
  display: flex;
}
</style>
<style lang='scss' scoped>
.reception-hall-wrap {
  .hall-container {
    height: 182rpx;
    box-sizing: border-box;
    background: url("@/static/steward/bg-hall-text.png") no-repeat 0 0;
    background-size: 100% 100%;
    .box-bg {
      text-align: justify;
      text-align-last: left;
      padding: 32rpx;
    }
    .community-select {
      width: 100%;
      height: 88rpx;
    }
  }
}
</style>