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
          <div class="link ft30 white-color center-align link-jointly">临安区社区共建单位联系表</div>
          <div class="link ft30 white-color center-align link-hall"
               style="padding-left: 54rpx">领办大厅</div>
        </div>
        <div class="bg-white mt24">对口社区</div>
        <div class="bg-white mt24">领办大厅</div>
        <div class="tb">
          <status-tabs @changeCurrent="changeCurrent"></status-tabs>
          <div class="list">
            <project-item v-for="(item, index) in listData"
                          :project-item="item"
                          :key="index"></project-item>
          </div>
        </div>
      </template>
    </mescroll-uni>
  </div>
</template>
<script>
import MescrollMixin from "@/components/mescroll-uni/mescroll-mixins.js";
import MescrollUni from "@/components/mescroll-uni/mescroll-uni.vue";

import StatusTabs from './components/StatusTabs.vue'
import ProjectItem from './components/ProjectItem.vue';
export default {
  mixins: [MescrollMixin],
  components: { StatusTabs, ProjectItem },
  methods: {
    changeCurrent (index, status) {
      console.log(index, status)
    },
    upCallback (page) {
      // this.getListData(page)
      this.mescroll.endErr()
    },
    downCallback () {
      this.mescroll.resetUpScroll(); // 重置列表为第一页
    },
    getListData (page) {
      const params = {
        pageNumber: page && page.num || 1,
        pageSize: page && page.size || 10
      }
      this.$api.xxxxxxxxxxxxxxxxxxxxxxx(params).then(res => {
        if (res.isError) return this.mescroll.endErr()
        const { items, count } = res.content
        this.mescroll.endBySize(items.length, count)
        this.listData = params.pageNumber === 1 ? items : this.listData.concat(items)
      })
    },
  },
  data () {
    return {
      upOption: {
        empty: {
          use: false, // 是否显示空布局
        },
      },
      listData: [{}, {}, {}]
    }
  },
  computed: {

  },
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
}
</style>