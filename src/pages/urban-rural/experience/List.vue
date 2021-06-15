<template>
  <div class="wrap column">

    <SubTabs @change="changeSubTab"
             :tabs="subTabs"></SubTabs>

    <mescroll-uni ref="mescrollRef"
                  :top="mescrollTop"
                  :bottom="mescrollBottom"
                  @scroll="scroll"
                  @init="mescrollInit"
                  :up="upOption"
                  @down="downCallback"
                  @up="upCallback">
      <div class="content"
           v-if="!$isEmpty(dataList)">
        <div v-for="item in dataList"
             :key="item.id">
          <ExperienceItem :item="item"
                          :isScroll="isScroll"></ExperienceItem>
        </div>
      </div>
      <empty v-else></empty>
    </mescroll-uni>

    <PublishBtn @onPublish="onPublish"
                :isScroll="isScroll"></PublishBtn>
  </div>
</template>

<script>
import SubTabs from '@/pages/urban-rural/components/SubTabs'
import ExperienceItem from '@/pages/urban-rural/components/ExperienceItem'
import PublishBtn from '@/pages/urban-rural/components/PublishBtn'
import listMixins from '../mixins'
import MescrollMixin from "@/components/mescroll-uni/mescroll-mixins.js";
export default {
  name: 'List',
  methods: {
    onPublish () {
      uni.navigateTo({
        url: '/pages/urban-rural/experience/AddMerchantBooth'
      })
    },
    changeSubTab (item) {
      if (this.search.status === item.status) return
      if (item.disabled) return this.$msg('功能开发中')
      this.search.status = item.status
      this.search.pageNumber = 1
      this.getDataList()
    },
    scroll () {
      this.isScroll = true
      if (this.timer) {
        this.timer = null
        clearTimeout(this.timer)
      }
      this.timer = setTimeout(() => {
        this.isScroll = false
      }, 500)
    },
    // 获取商品列表
    getDataList () {
      const params = {
        ...this.search
      }
      this.$api.getJourneyMerchantBoothInfoPage(params).then(res => {
        if (res.isError) return

        let { items, count } = res.content

        items = items.map(item => {
          const _appropriateCrowdFormat = item.appropriateCrowd.map(item1 => item1.typeName)
          const _serviceContentFormat = item.serviceContent.map(item1 => item1.typeName)
          item.appropriateCrowdFormat = _appropriateCrowdFormat.join(' ')
          item.serviceContentFormat = _serviceContentFormat.join(' ')
          item.images = item.images.map(item1 => item1.url)
          return item
        })

        this.mescroll.endBySize(items.length, count)
        this.dataList = params.pageNumber === 1 ? items : this.dataList.concat(items)
      })
    }
  },
  created () {
    this.getDataList()
  },
  mixins: [listMixins, MescrollMixin],
  components: { SubTabs, ExperienceItem, PublishBtn },
  data () {
    return {
      isScroll: false,
      mescrollTop: '120rpx',
      upOption: {
        onScroll: true
      },
      subTabs: [
        {
          status: '',
          text: '实时推荐'
        },
        {
          status: '01',
          text: '我要定制',
          disabled: true
        },
        {
          status: '02',
          text: '我要接单',
          disabled: true
        }
      ]
    }
  }
}
</script>

<style lang='scss' scoped>
.wrap {
  height: 100%;
  .content {
    justify-content: space-between;
    flex-wrap: wrap;
  }
}
</style>
