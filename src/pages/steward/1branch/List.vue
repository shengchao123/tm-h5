<template>
  <div class='list-wrap'>
    <div class="top bg-white">
      <u-tabs ref="uTabs"
              :list="tabs"
              :current="currentTab"
              class="tabs"
              @change="tabsChange"
              :is-scroll="tabs.length > 4"
              bar-width="32"
              bar-height="4"
              font-size="28"
              active-color="#E32417"
              inactive-color="#666666"></u-tabs>

      <SubTabs :tabs="subTabs"
               @change="e => currentSubTab = e.id"></SubTabs>
    </div>

    <div class="list">
      <List1 v-if="currentSubTab === 0"
             :communityOrgId="communityOrgId"></List1>
      <List2 v-if="currentSubTab === 1"
             :communityOrgId="communityOrgId"></List2>
    </div>
  </div>
</template>

<script>
import SubTabs from '@/pages/urban-rural/components/SubTabs'
import List1 from './components/List1.vue'
import List2 from './components/List2.vue'

export default {
  name: 'list',
  methods: {
    tabsChange (index) {
      this.currentTab = index;
    },
    getTabs (communityOrgId, id) {
      const params = {
        communityOrgId
      }
      this.$api.findJourneyCommunityPartyListByCommunityOrgId(params).then(res => {
        if (res.isError) {
          this.$message.error(res.message)
          return
        }
        this.tabs = res.content
        const temIds = res.content.map(item => item.id)
        this.currentTab = temIds.indexOf(id)
      })
    },
  },
  onLoad ({ communityOrgId, id }) {
    this.getTabs(communityOrgId, id)
  },
  computed: {
    communityOrgId () {
      if (this.$isEmpty(this.tabs)) return ''
      return this.tabs[this.currentTab].id
    }
  },
  components: { SubTabs, List1, List2 },
  data () {
    return {
      tabs: [],
      currentSubTab: 0,
      currentTab: 0,
      subTabs: [
        {
          id: 0,
          text: '党组织架构'
        },
        // {
        //   id: 1,
        //   text: '支部风采'
        // }
      ]
    }
  }
}
</script>

<style lang='scss' scoped>
</style>
