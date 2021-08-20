<template>
  <div class='branch-wrap'>
    <BlockItem title="好案例"
               :list="list"
               @onBlockItem="onBlockItem"
               type="5"
               bgClass="block5"></BlockItem>

    <div class="ft32 bold pl32 pb28 bb">已办结项目</div>
    <ProjectList :top="listTop"
                 ref="list"></ProjectList>
  </div>
</template>

<script>
import BlockItem from '../components/BlockItem'
import ProjectList from '@/pages/steward/5case/ProjectList'

export default {
  name: 'index',
  methods: {
    onBlockItem ({ plotOrgId, communityOrgId }) {
      this.navigateTo(plotOrgId, communityOrgId)
    },
    navigateTo (plotOrgId, communityOrgId) {
      uni.navigateTo({ url: '/pages/steward/4neighbours/List?id=' + plotOrgId + '&communityOrgId=' + communityOrgId })
    },
    handleListTop () {
      this.listTop = this.$refs.list.$el.offsetTop + 'px'
    },
    getList () {
      this.$api.findJourneyGoodHelperProjectList().then(res => {
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
        this.$nextTick(() => {
          this.handleListTop()
        })
      })
    }
  },
  data () {
    return {
      listTop: '',
      list: []
    }
  },
  onLoad () {
    this.getList()
  },
  components: { BlockItem, ProjectList },
}
</script>

<style lang='scss' scoped>
.branch-wrap {
}
</style>
