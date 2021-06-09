<template>
  <div class="wrap">

    <SubTabs @change="changeSubTab"
             :tabs="subTabs"></SubTabs>

    <mescroll-uni ref="mescrollRef"
                  :top="mescrollTop"
                  :bottom="mescrollBottom"
                  @init="mescrollInit"
                  :up="upOption"
                  @up="onreachTop"
                  class="relative uni mt30">
      <div v-if="!$isEmpty(dataList)">
        <div v-for="item in dataList"
             :key="item.id">
          <ActiveItem :item="item"></ActiveItem>
        </div>
      </div>
      <empty v-else></empty>
    </mescroll-uni>

  </div>
</template>

<script>
import SubTabs from '@/pages/urban-rural/components/SubTabs'
import ActiveItem from '@/pages/urban-rural/components/ActiveItem'
import listMixins from '../mixins'
import MescrollMixin from "@/components/mescroll-uni/mescroll-mixins.js";
export default {
  name: 'List',
  methods: {
    changeSubTab (item) {
      if (this.search.status === item.status) return
      this.search.status = item.status
      this.search.pageNumber = 1
      this.getDataList()
    },
    // 获取商品列表
    getDataList () {
      const params = {
        ...this.search
      }
      this.$api.getJourneyActivityPage(params).then(res => {
        if (res.isError) return
        let { items, count } = res.content
        this.mescroll.endBySize(items.length, count)
        this.dataList = params.pageNumber === 1 ? items : this.dataList.concat(items)
      })
    }
  },
  mixins: [listMixins, MescrollMixin],
  components: { SubTabs, ActiveItem },
  data () {
    return {
      mescrollTop: '120rpx',
      subTabs: [
        {
          status: '',
          text: '全部'
        },
        {
          status: '01',
          text: '报名中'
        },
        {
          status: '02',
          text: '进行中'
        },
        {
          status: '03',
          text: '已结束'
        }
      ],
    }
  }
}
</script>

<style lang='scss' scoped>
.wrap {
  height: 100%;
}
</style>
