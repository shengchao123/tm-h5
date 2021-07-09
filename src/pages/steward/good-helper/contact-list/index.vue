<template>
  <view class="contact-list-wrap">
    <mescroll-uni ref="mescrollRef"
                  class="mescroll-wrap"
                  :up="upOption"
                  @init="mescrollInit"
                  @down="downCallback"
                  @up="upCallback">
      <template>
        <view class="filter-select center-align between-row pl32 pr32 color-666 ft28">
          <view @click="$refs.selectionCommunit.show()">
            <text>街道社区</text>
            <svg-icon icon="icon_xiangxia"
                      class="ft18 ml16 color-999"></svg-icon>
          </view>
          <view @click="$refs.selectPop.show()">
            <text>共建单位</text>
            <svg-icon icon="icon_xiangxia"
                      class="ft18 ml16 color-999"></svg-icon>
          </view>
          <view class="color-primary ft24 center-align"
                @click="onToRules">
            <svg-icon icon="icon_wenhao"></svg-icon>
            <text class="ml8">积分规则</text>
          </view>
        </view>
        <view class="title-list color-666 ft26 medium center-align pl32 pr32 ">
          <view v-for="(item,index) in titleList"
                :key="index"
                class="title-item">
            {{item}}
          </view>
        </view>
        <view class="content-list pl32 pr32">
          <item v-for="(item,index) in listData"
                :key="index"
                :itemInfo="{...item,index}">
          </item>
        </view>
        <select-pop ref="selectPop"
                    :selectedId.sync="selectedId"
                    :list="companyList"
                    title="选择共建单位"
                    @onRouteItem="(item)=>onRouteItem(item)"></select-pop>
        <selection-communit ref="selectionCommunit"
                            @onConfirm="onConfirm"></selection-communit>
      </template>
    </mescroll-uni>
  </view>
</template>
<script>
import MescrollMixin from "@/components/mescroll-uni/mescroll-mixins.js";
import MescrollUni from "@/components/mescroll-uni/mescroll-uni.vue";
import Item from './components/Item.vue';
import SelectPop from 'pages/components/SelectPop'
import SelectionCommunit from '../components/SelectionCommunit.vue'
export default {
  name: 'ContactList',
  methods: {
    onConfirm (info) {
      console.log(info);
    },
    // 根据社区id获取单位列表
    getUnitListByCommunity () {
      const userCommunityOrgId = this.memberPersonalInfo.communityOrgId
      const params = {
        communityOrgId: '47512535492954112', // TODO: 暂时调数据 记得改成下面
        // communityOrgId: userCommunityOrgId || this.communityOrgId,
      }
      this.$api.getUnitListByCommunity(params).then(res => {
        if (res.isError) {
          this.$msg(res.message)
          return
        }
        this.companyList = res.content
      })
    },
    onRouteItem (item) {

    },
    // closePop () {
    //   const { selectKey } = this
    //   this[`${selectKey}PopIsShow`] = false
    // },
    onToRules () {
      uni.navigateTo({
        url: '/pages/steward/good-helper/integral-rule/index'
      })
    },
    upCallback (page) {
      this.getJourneyCoConstructionUnitTablePage(page)
      this.mescroll.endErr()
    },
    downCallback () {
      this.mescroll.resetUpScroll(); // 重置列表为第一页
    },
    getJourneyCoConstructionUnitTablePage (page) {
      const userCommunityOrgId = this.memberPersonalInfo.communityOrgId
      const params = {
        pageNumber: page && page.num || 1,
        pageSize: page && page.size || 10,
        communityOrgId: '47511592656406528', // TODO: 暂时调数据 记得改成下面
        // communityOrgId: userCommunityOrgId || this.communityOrgId,
      }
      this.$api.getJourneyCoConstructionUnitTablePage(params).then(res => {
        if (res.isError) return this.mescroll.endErr()
        const { items, count } = res.content
        this.mescroll.endBySize(items.length, count)
        this.listData = params.pageNumber === 1 ? items : this.listData.concat(items)
      })
    }
  },
  data () {
    return {
      selectedId: '',
      companyList: [],
      upOption: {
        empty: {
          use: false, // 是否显示空布局
        },
      },
      communityOrgId: null,
      listData: [],
      titleList: ['街道社区/共建单位', '接单', '抢单', '办结率', '积分']
    }
  },
  computed: {
    memberPersonalInfo () {
      return this.$store.state.user.memberPersonalInfo
    },
    // 是否共建单位用户
    isUnitUser () {
      return this.memberPersonalInfo.isUnitUser
    }
  },
  created () {
    this.getUnitListByCommunity()
  },
  mixins: [MescrollMixin],
  components: {
    MescrollUni,
    Item,
    SelectPop,
    SelectionCommunit
  }
}
</script>
<style lang='scss' scoped>
.contact-list-wrap {
  .filter-select {
    height: 88rpx;
  }
  .title-list {
    height: 80rpx;
    background: #f3f3f3;
    .title-item {
      &:first-child {
        width: 248rpx;
      }
      &:nth-child(2) {
        width: 96rpx;
        margin-left: 40rpx;
      }
      &:nth-child(3) {
        width: 96rpx;
      }
      &:nth-child(4) {
        width: 128rpx;
      }
    }
  }
}
</style>