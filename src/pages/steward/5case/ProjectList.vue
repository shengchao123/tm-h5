<template>
  <div class='good-helper-wrap'>
    <mescroll-uni ref="mescrollRef"
                  class="mescroll-wrap"
                  :up="upOption"
                  :top="top"
                  @init="mescrollInit"
                  @down="downCallback"
                  @up="upCallback">
      <template>
        <div v-show="listData.length > 0"
             class="list">
          <project-item v-for="(item, index) in listData"
                        :project-item="item"
                        :key="index"
                        :show-border="index < listData.length - 1"
                        :isHome="true"
                        @onReceive="onReceive"></project-item>
        </div>
        <empty v-show="listData.length === 0"></empty>
      </template>
    </mescroll-uni>
  </div>
</template>
<script>
import MescrollMixin from "@/components/mescroll-uni/mescroll-mixins.js";
import MescrollUni from "@/components/mescroll-uni/mescroll-uni.vue";

import ProjectItem from './ProjectItem.vue';

export default {
  mixins: [MescrollMixin],
  components: { ProjectItem, MescrollUni },
  methods: {
    onReceive (projectId) {
      if (this.$notMember()) return this.$goLogin();
      this.$refs.receivePop.show({
        projectId,
        unitIds: this.unitIds
      })
    },
    upCallback (page) {
      this.getJourneyHelperProjectShowPage(page)
      this.mescroll.endErr()
    },
    downCallback () {
      this.mescroll.resetUpScroll(); // 重置列表为第一页
    },
    getJourneyHelperProjectShowPage (page) {
      const params = {
        pageNumber: page && page.num || 1,
        pageSize: page && page.size || 10,
        type: 4
      }
      this.$api.getJourneyHelperProjectShowPage(params).then(res => {
        if (res.isError) return this.mescroll.endErr()
        const { items, count } = res.content
        this.mescroll.endBySize(items.length, count)
        this.listData = params.pageNumber === 1 ? items : this.listData.concat(items)
      })
    }
  },
  props: {
    top: String
  },
  created () {
    this.getJourneyHelperProjectShowPage()
  },
  data () {
    return {
      upOption: {
        empty: {
          use: false, // 是否显示空布局
        },
        textNoMore: '',
      },
      listData: []
    }
  }
}
</script>
<style>
page {
  height: 100%;
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
      box-shadow: 0 5rpx 15rpx 0 rgba(0, 0, 0, 0.1);
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