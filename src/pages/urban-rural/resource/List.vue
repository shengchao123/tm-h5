<template>
  <div class="wrap">

    <SubTabs @change="changeSubTab"
             :tabs="subTabs"></SubTabs>

    <mescroll-uni ref="mescrollRef"
                  :top="mescrollTop"
                  :bottom="mescrollBottom"
                  @scroll="scroll"
                  @init="mescrollInit"
                  :up="upOption"
                  @up="onreachTop"
                  class="relative uni mt30">
      <div class="content"
           v-if="!$isEmpty(dataList)">
        <ResourceItem :resourceItem="{item, index}"
                      @click="setNotesItem"
                      v-for="(item, index) in dataList"
                      :key="item.id"></ResourceItem>
      </div>
      <empty v-else></empty>
    </mescroll-uni>

    <PublishBtn @onPublish="onPublish"
                :isScroll="isScroll"></PublishBtn>
  </div>
</template>

<script>
import SubTabs from '@/pages/urban-rural/components/SubTabs'
import ResourceItem from '@/pages/urban-rural/components/ResourceItem'
import PublishBtn from '@/pages/urban-rural/components/PublishBtn'
import listMixins from '../mixins'

export default {
  name: 'List',
  methods: {
    onPublish () {
      uni.navigateTo({
        url: '/pages/urban-rural/resource/AddResource'
      });
    },
    setNotesItem (item, index) {
      const noteList = this.noteList
      noteList[index] = item
      this.noteList = [...noteList]
    },
    changeSubTab (item) {
      this.search.resourceType = item.status
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
      this.$api.getJourneyResourceSharingPage(params).then(res => {
        if (res.isError) return
        let { items, count } = res.content
        console.log(this.dataList)
        this.dataList = params.pageNumber === 1 ? items : this.dataList.concat(items)
        this.mescroll.endBySize(items.length, count)
      })
    }
  },
  components: { SubTabs, ResourceItem, PublishBtn },
  mixins: [listMixins],
  data () {
    return {
      isScroll: false,
      upOption: {
        onScroll: true
      },
      mescrollTop: '120rpx',
      subTabs: [
        {
          status: '01',
          text: '房产商铺'
        },
        {
          status: '02',
          text: '土地林地'
        },
        {
          status: '03',
          text: '农产品'
        },
        {
          status: '04',
          text: '其它'
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
