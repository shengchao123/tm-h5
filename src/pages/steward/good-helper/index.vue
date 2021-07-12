<template>
  <div class='good-helper-wrap'>
    <mescroll-uni ref="mescrollRef"
                  class="mescroll-wrap"
                  :up="upOption"
                  @init="mescrollInit"
                  @down="downCallback"
                  @up="upCallback">
      <template>
        <div class="between-row bg-white header pl16 pr16 pb16 pt28">
          <div class="link center-justify link-jointly column"
               @click="onContactList">
            <span class="ft30 white-color pl16">共建单位联系表</span>
            <span class="ft26 pt16 pl16 pb8"
                  style="color: #C8E5FF">临安区社区</span>
          </div>
          <div class="link center-justify link-hall column"
               @click="onReceptionHall">
            <span class="ft30 white-color pl16">领办大厅</span>
            <span class="ft26 pt16 pl16 pb8"
                  style="color: #FDD3C5">{{isUnitUser ? '领办项目享积分加成' : '项目供更多单位认领'}}</span>
          </div>
        </div>
        <div class="bg-white pl32 pr32 pb16">
          <div class="address pl24 pr24 center-align"
               @click="onSelectCommunit">
            <span class="ft28 color-666">{{communityText}}</span>
            <svg-icon icon="icon_xiangxia"
                      class="ft16 ml8"></svg-icon>
          </div>
          <div class="tr pt16">
            <span class="ft22 color-999">共建单位：{{unitNameText}}</span>
          </div>
        </div>
        <div class="mt24">
          <status-tabs ref="statusTabs"
                       :communityOrgId="communityOrgId"
                       @changeCurrent="changeCurrent"></status-tabs>
          <div v-show="listData.length > 0"
               class="list">
            <project-item v-for="(item, index) in listData"
                          :project-item="item"
                          :key="index"
                          :show-border="index < listData.length - 1"
                          :isHome="true"
                          :isUnitUser="isUnitUser"
                          @onReceive="onReceive"></project-item>
          </div>
          <empty v-show="listData.length === 0"></empty>
        </div>
      </template>
    </mescroll-uni>
    <selection-communit v-if="!isUnitUser && !isFirstLoading"
                        ref="selectionCommunit"
                        @onConfirm="onConfirmCommunit"></selection-communit>
    <receive-pop ref="receivePop"></receive-pop>
  </div>
</template>
<script>
import MescrollMixin from "@/components/mescroll-uni/mescroll-mixins.js";
import MescrollUni from "@/components/mescroll-uni/mescroll-uni.vue";
import StatusTabs from './components/StatusTabs.vue'
import ProjectItem from './components/ProjectItem.vue';
import SelectionCommunit from './components/SelectionCommunit.vue';
import ReceivePop from './components/ReceivePop.vue';
export default {
  mixins: [MescrollMixin],
  components: { StatusTabs, ProjectItem, SelectionCommunit, ReceivePop, MescrollUni },
  methods: {
    onConfirmCommunit (item) {
      this.communityInfo = item.communityInfo
      this.streetInfo = item.streetInfo
      this.communityOrgId = item.communityInfo.id
      this.$nextTick(() => {
        !this.isFirstLoading && this.updateTabsCount()
      })
    },
    onReceive (projectId) {
      if (this.$notMember()) return this.$goLogin();
      this.$refs.receivePop.show({
        projectId,
        unitIds: this.unitIds
      })
    },
    changeCurrent (index, type) {
      this.projectType = type
      this.downCallback()
    },
    onSelectCommunit () {
      if (this.isUnitUser) return
      this.$refs.selectionCommunit.show()
    },
    // 共建单位联系表
    onContactList () {
      uni.navigateTo({
        url: '/pages/steward/good-helper/contact-list/index'
      })
    },
    // 领办大厅
    onReceptionHall () {
      uni.navigateTo({
        url: '/pages/steward/good-helper/reception-hall/index'
      })
    },
    updateTabsCount () {
      const statusTabsEl = this.$refs.statusTabs
      if (statusTabsEl) {
        statusTabsEl.getJourneyHelperProjectCount()
      }
    },
    upCallback (page) {
      this.getJourneyHelperProjectShowPage(page)
      this.mescroll.endErr()
    },
    downCallback () {
      this.mescroll.resetUpScroll(); // 重置列表为第一页
      this.updateTabsCount()
    },
    getJourneyHelperProjectShowPage (page) {
      if (!this.communityOrgId) return
      const params = {
        pageNumber: page && page.num || 1,
        pageSize: page && page.size || 10,
        communityOrgId: this.communityOrgId,
        type: this.projectType
      }
      this.$api.getJourneyHelperProjectShowPage(params).then(res => {
        this.isFirstLoading = false
        if (res.isError) return this.mescroll.endErr()
        const { items, count } = res.content
        this.mescroll.endBySize(items.length, count)
        this.listData = params.pageNumber === 1 ? items : this.listData.concat(items)
      })
    },
    getUnitListByCommunity () {
      const params = {
        communityOrgId: this.communityOrgId
      }
      this.$api.getUnitListByCommunity(params).then(res => {
        if (res.isError) return this.$msg(res.message)
        this.unitIds = res.content || []
      })
    },
  },
  data () {
    return {
      isFirstLoading: true,
      communityInfo: {},
      streetInfo: {},
      upOption: {
        empty: {
          use: false, // 是否显示空布局
        },
      },
      communityOrgId: null,
      projectType: 2,
      unitIds: [],
      listData: []
    }
  },
  watch: {
    communityOrgId: {
      handler: function (val) {
        if (val && val !== '0') {
          this.getUnitListByCommunity()
          this.getJourneyHelperProjectShowPage()
        }
      },
      immediate: true
    },
    memberPersonalInfo: {
      handler: function (val) {
        if (val.communityOrgId && val.communityOrgId !== '0') {
          this.communityOrgId = this.memberPersonalInfo.communityOrgId
        }
      },
      immediate: true
    }
  },
  computed: {
    memberPersonalInfo () {
      return this.$store.state.user.memberPersonalInfo
    },
    // 是否共建单位用户
    isUnitUser () {
      return this.memberPersonalInfo.isUnitUser
    },
    communityText () {
      if (this.isUnitUser) {
        const { parentCommunityOrgName, communityOrgName } = this.memberPersonalInfo
        return parentCommunityOrgName + communityOrgName
      }
      const { streetInfo, communityInfo } = this
      if (!communityInfo) return ''
      return streetInfo.name + communityInfo.name
    },
    unitNameText () {
      const unitNames = this.unitIds.map(el => el.name)
      return unitNames.join(' ')
    }
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
.good-helper-wrap {
  .header {
    .link {
      width: 331rpx;
      height: 180rpx;
      border-radius: 16rpx;
      box-sizing: border-box;
      padding: 26rpx;
    }
    .link-jointly {
      background: url("@/static/steward/bg-jointly.png") no-repeat 0 0;
      background-size: 100% 100%;
    }
    .link-hall {
      background: url("@/static/steward/bg-hall.png") no-repeat 0 0;
      background-size: 100% 100%;
    }
  }
  .address {
    height: 79rpx;
    border-radius: 16rpx;
    background: #e8f0ff;
  }
}
</style>