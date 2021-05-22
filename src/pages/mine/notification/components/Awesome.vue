<template>
  <view class='awesome-and-collect-wrap'>
    <scroll-view v-if="listData.length > 0"
                 :scroll-y="true"
                 class="list">
      <list-item v-for="(item, index) in listData"
                 :key="index"
                 type="01"
                 :itemData="item"></list-item>
    </scroll-view>
    <view v-else
          class="empty-page center-align column">
      <image style="width: 332rpx; height: 256rpx"
             :src="imgHost + 'user/msg-info/awesome_collect_empty.png'"></image>
      <view class="mt20">
        <text class="ft28 color-999">暂无新的点赞和收藏</text>
      </view>
    </view>
  </view>
</template>
<script>
import ListItem from './ListItem.vue'
import listMixins from '../mixins/list'
export default {
  data () {
    return {
      listData: []
    }
  },
  computed: {
    imgHost () {
      return this.$imgHost
    },
  },
  created () {
    this.getListData()
  },
  mixins: [listMixins('getCommunityFavoritesIsNewMassage')],
  components: { ListItem }
}
</script>
<style lang='scss' scoped>
.awesome-and-collect-wrap {
  color: #333;
  height: 100%;
  .list {
    box-sizing: border-box;
    height: 100%;
    padding: 0 30rpx;
  }
  .empty-page {
    text-align: center;
    padding-top: 200rpx;
  }
}
</style>
