<template>
  <view class='fans-wrap'>
    <scroll-view v-if="listData.length > 0"
                 :scroll-y="true"
                 class="list">
      <list-item v-for="(item, index) in listData"
                 :key="index"
                 type="02"
                 :itemIndex="index"
                 :itemData="item"
                 @updateListData="updateListData"></list-item>
    </scroll-view>
    <view v-else
          class="empty-page center-align column">
      <image style="width: 332rpx; height: 256rpx"
             :src="imgHost + 'user/msg-info/fans_empty.png'"></image>
      <text class="ft28 color-999 mt20">暂无新关注的人</text>
      <text class="ft28 color-999">快去发篇笔记增加曝光度吧</text>
      <view class="publish-btn center-flex mt24"
            @click="onPublish">
        <text class="ft28 white-color">去发布</text>
      </view>
    </view>
  </view>
</template>
<script>
import ListItem from './ListItem.vue'
import listMixins from '../mixins/list'
export default {
  methods: {
    updateListData (index, item) {
      const listData = this.listData
      listData[index] = { ...item }
      this.listData = listData
    },
    onPublish () {
      uni.navigateTo({
        url: '/pagesDiscover/publish/index'
      })
    }
  },
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
  mixins: [listMixins('getCommunityAttentionIsNewMassage')],
  components: { ListItem }
}
</script>
<style lang='scss' scoped>
.fans-wrap {
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
    .publish-btn {
      width: 180rpx;
      height: 70rpx;
      border-radius: 35px;
      background-image: linear-gradient(98deg, #f54400 0%, #ff6630 72%);
    }
  }
}
</style>
