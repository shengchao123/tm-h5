<template>
  <div class='branch-wrap'>
    <BlockItem title="好邻里"
               :list="list"
               @onBlockItem="onBlockItem"
               type="4"
               bgClass="block4"></BlockItem>
    <StreetTabs type="4"
                @onThirdItem="onThirdItem"></StreetTabs>
  </div>
</template>

<script>
import BlockItem from '../components/BlockItem'
import StreetTabs from '@/pages/steward/components/StreetTabs'
export default {
  name: 'index',
  methods: {
    onBlockItem ({ plotOrgId, communityOrgId }) {
      this.navigateTo(plotOrgId, communityOrgId)
    },
    onThirdItem ({ plotOrgId }, communityOrgId) {
      this.navigateTo(plotOrgId, communityOrgId)
    },
    navigateTo (plotOrgId, communityOrgId) {
      uni.navigateTo({ url: '/pages/steward/4neighbours/List?id=' + plotOrgId + '&communityOrgId=' + communityOrgId })
    },
    getList () {
      this.$api.findJourneyGoodCommunityNeighborhoodList().then(res => {
        if (res.isError) {
          this.$message.error(res.message)
          return
        }
        this.list = res.content.map(item => {
          return {
            tip: item.streetOrgName,
            ...item
          }
        })
      })
    }
  },
  data () {
    return {
      list: []
    }
  },
  onLoad () {
    this.getList()
  },
  components: { BlockItem, StreetTabs },
}
</script>

<style lang='scss' scoped>
.branch-wrap {
}
</style>
