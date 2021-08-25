<template>
  <div class='activity-wrap'>
    <SubTabs :tabs="subTabs"
             @change="changeSubTab"></SubTabs>
    <mescroll-uni ref="mescrollRef"
                  top="640rpx"
                  @init="mescrollInit"
                  @down="downCallback"
                  :up="upOption"
                  @up="upCallback">
      <empty v-if="$isEmpty(this.dataList)"></empty>
      <view class="pt20"
            v-else>
        <view v-for="(item,index) in dataList"
              :key="index"
              @click="onToDetail(item)">
          <ActivityItem :item="item"></ActivityItem>
        </view>
      </view>
    </mescroll-uni>
  </div>
</template>
<script>
import MescrollMixin from "@/components/mescroll-uni/mescroll-mixins.js";
import MescrollUni from "@/components/mescroll-uni/mescroll-uni.vue";
import pageEmpty from 'pages/components/PageEmpty'
import SubTabs from '@/pages/urban-rural/components/SubTabs'
import ActivityItem from './ActivityItem.vue'
export default {
  name: 'Activity',
  methods: {
    changeSubTab (e) {
      this.currentSubTab = e.id
      this.getListData()
    },
    upCallback (page) {
      this.getListData(page)
    },
    // 下拉刷新
    downCallback () {
      this.mescroll.resetUpScroll(); // 重置列表为第一页
    },
    onToDetail (item) {
      uni.navigateTo({
        url: `/pages/union/interact/detail/index?id=${item.id}`
      })
    },
    getListData (page) {
      const params = {
        status: this.currentSubTab,
        pageNumber: page && page.num || 1,
        pageSize: page && page.size || 10,
        type: '03'
      }
      this.$api.getJourneyActivityPage(params).then(res => {
        if (res.isError || !res.content) {
          this.mescroll.endBySize(0, 0)
          this.dataList = []
          return
        }
        const { items, count } = res.content
        this.mescroll.endBySize(items.length, count)
        if (params.pageNumber === 1) this.dataList = []
        this.dataList = this.dataList.concat(items)
      })
    },
    onToDetail (item) {
      uni.navigateTo({
        url: `/pages/union/interact/detail/index?id=${item.id}`
      })
    },
    tabChange (index) {
      this.$emit('update:current', index)
      this.$emit('getListData')
    }
  },
  data () {
    return {
      dataList: Array,
      upOption: {
        empty: {
          use: false
        },
        textNoMore: "没有更多数据",
        noMoreSize: 10, // 配置列表的总数量要大于等于10条才显示'-- END --'的提示
      },
      subTabs: [
        {
          id: '',
          text: '全部'
        },
        {
          id: '01',
          text: '报名中'
        },
        {
          id: '02',
          text: '进行中'
        },
        {
          id: '03',
          text: '已结束'
        },
      ],
    }
  },
  components: {
    ActivityItem,
    pageEmpty,
    SubTabs,
    MescrollUni
  },
  mixins: [MescrollMixin],
}
</script>
<style lang="scss" scoped>
.activity-wrap {
}
</style>