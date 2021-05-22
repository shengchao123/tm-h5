<template>
  <div class='activity-wrap'>
    <div class="box">
      <u-tabs :list="tab.list"
              :is-scroll="false"
              :height="height"
              font-size="28"
              :current="current"
              :bar-style="{width: '32rpx', height:'4rpx', bottom: '16rpx'}"
              active-color="#E32417"
              inactive-color="#666666"
              @change="tabChange"></u-tabs>
    </div>
    <view v-if="isEmpty"
          class="bg-white">
      <page-empty :imgUrl="require('@/static/empty/no-activity.png')"
                  message="暂无内容"></page-empty>
    </view>
    <view v-else
          class="mt20">
      <view v-for="(item,index) in dataList"
            :key="index"
            @click="onToDetail(item)">
        <item :item="item"></item>
      </view>
    </view>
  </div>
</template>
<script>
import pageEmpty from 'pages/components/PageEmpty'
import Item from './Item.vue'
export default {
  name: 'Activity',
  methods: {
    onToDetail (item) {
      uni.navigateTo({
        url: `/pages/league-interact/detail/index?id=${item.id}`
      })
    },
    tabChange (index) {
      this.$emit('update:current', index)
      this.$emit('getListData')
    }
  },
  props: {
    isEmpty: Boolean,
    dataList: Array,
    current: {
      type: Number,
      default: (() => {
        return 0
      })
    },
    height: {
      type: Number,
      default: (() => {
        return 88
      })
    }
  },
  data () {
    return {
      tab: {
        list: [{
          name: '全部'
        }, {
          name: '报名中'
        }, {
          name: '进行中',
        }, {
          name: '已结束'
        }]
      },
    }
  },
  components: {
    Item,
    pageEmpty,
    // MescrollUni,
  },
  // mixins: [MescrollMixin],
}
</script>
