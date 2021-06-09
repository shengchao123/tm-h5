<template>
  <div class="wrap">

    <SubTabs @change="changeSubTab"
             :tabs="subTabs"></SubTabs>
    <scroll-view scroll-y
                 class="scroll relative mt30"
                 @scrolltolower="onreachBottom">
      <div class="content"
           v-if="!$isEmpty(dataList)">
        <ResourceItem :item="item"
                      v-for="item in dataList"
                      :key="item.id"></ResourceItem>
      </div>

      <empty v-else></empty>
    </scroll-view>

  </div>
</template>

<script>
import SubTabs from '@/pages/urban-rural/components/SubTabs'
import ResourceItem from '@/pages/urban-rural/components/ResourceItem'

export default {
  name: 'List',
  methods: {
    changeSubTab (item) {
      if (this.search.resourceType === item.status) return
      this.search.resourceType = item.status
      this.search.pageNumber = 1
      this.getJourneyResourceSharingPage()
    },
    onreachBottom () {
      this.search.pageNumber++
    },
    // 获取商品列表
    getJourneyResourceSharingPage () {
      const params = {
        ...this.search
      }
      this.$api.getJourneyResourceSharingPage(params).then(res => {
        if (res.isError) return
        this.dataList = res?.content?.items ?? []
      })
    }
  },
  created () {
    // this.getJourneyResourceSharingPage()
  },
  components: { SubTabs, ResourceItem },
  data () {
    return {
      search: {
        pageNumber: 1,
      },
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
      ],
      dataList: [
        {
          "attachments": ['material/image/2021060718345744643854677149696.jpg', 'material/image/2021060718345744643854677149696.jpg'],
          "avatar": "material/image/2021060718345744643854677149696.jpg",
          "contactPerson": "挠挠",
          "contactPhone": "1245234345",
          "content": "圣诞节分离技术老地方见老师肯定积分啦是看见埃里克我就发了卡时间的浪费路上看到飞机为了看风景阿老师肯定积分了我就发了卡视角的反抗了所经历的看风景",
          "nick": "我是昵称",
          "resourceTypeName": "房产商铺",
          "time": 1623204876804,
          "title": "我是标题",
          "weChatNumber": "微信小号"
        }
      ]
    }
  }
}
</script>

<style lang='scss' scoped>
.wrap {
  height: 100%;
  .scroll {
    height: calc(100% - 104rpx);
    padding: 0 30rpx;
    .content {
      justify-content: space-between;
      flex-wrap: wrap;
    }
  }
}
</style>
