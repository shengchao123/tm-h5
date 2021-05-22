<template>
  <view class='list-item-wrap between-row center-align pt28 pb28'>
    <view class="flex flex1 mr24">
      <view class="head-img mr24 mt4"
            @click="onPersonalCenter">
        <image style="width: 100%; height: 100%"
               :src="avatarUrl(itemData.avatar)"></image>
      </view>
      <view @click="onNoteDetail">
        <view>
          <text class="ft28 mr24 medium">{{itemData.nick}}</text>
          <text v-if="type === '03'"
                class="ft26 color-999">评论了你</text>
        </view>
        <view v-if="type === '03'"
              class="ft26 column">
          <text class="mt8 mb8">{{itemData.desc}}</text>
          <text class="color-999">{{itemData.time}}</text>
        </view>
        <view v-else
              class="ft26 color-999 mt12"
              :class="type === '03' && 'color-333 column'">
          <text class="mr24">{{itemData.desc}}</text>
          <text class="color-999">{{itemData.time}}</text>
        </view>
      </view>
    </view>
    <view v-if="type === '01' || type === '03'"
          class="cover-img"
          @click="onNoteDetail">
      <image mode="aspectFill"
             style="width: 100%; height: 100%"
             :src="$imgUrlDeal(itemData.firstUrl)"></image>
    </view>
    <view v-if="type === '02'"
          class="follow-btn">
      <view v-if="itemData.isAttention"
            class="cancel-btn center-flex"
            @click="cancelAttentionUser">
        <text class="ft24">相互关注</text>
      </view>
      <view v-else
            class="primary-btn center-flex"
            @click="attentionUser">
        <text class="ft24 white-color">关注</text>
      </view>
    </view>
  </view>
</template>
<script>
import { avatarUrl } from '@/utils/tools'

export default {
  methods: {
    onNoteDetail () {
      const { communityNoteId } = this.itemData
      uni.navigateTo({
        url: `/pagesDiscover/note-detail/index?communityNoteId=${communityNoteId}`
      })
    },
    onPersonalCenter () {
      const { communityMemberId } = this.itemData
      uni.navigateTo({
        url: `/pagesDiscover/personalCenter/index?id=${communityMemberId}`
      })
    },
    attentionUser () {
      const { communityMemberId } = this.itemData
      const params = {
        communityMemberId: communityMemberId
      }
      this.$api.attentionUser(params).then(res => {
        if (res.isError) return this.$msg(res.message)
        const itemData = this.itemData
        const itemIndex = this.itemIndex
        itemData[this.itemIndex].isAttention = true
        this.$emit('updateListData', itemIndex, itemData)
      })
    },
    cancelAttentionUser () {
      const { communityMemberId } = this.itemData
      const params = {
        communityMemberId: communityMemberId
      }
      this.$api.cancelAttentionUser(params).then(res => {
        if (res.isError) return this.$msg(res.message)
        const itemData = this.itemData
        const itemIndex = this.itemIndex
        itemData[this.itemIndex].isAttention = false
        this.$emit('updateListData', itemIndex, itemData)
      })
    },
    avatarUrl
  },
  props: {
    type: String,
    itemData: {
      type: Object,
      default: () => ({})
    },
    itemIndex: Number
  }
}
</script>
<style lang='scss' scoped>
.list-item-wrap {
  width: 100%;
  border-bottom: solid 1px #f0eff0;
  color: #333;
  .head-img {
    width: 80rpx;
    height: 80rpx;
    border-radius: 40rpx;
    overflow: hidden;
  }
  .cover-img {
    width: 80rpx;
    height: 80rpx;
    border-radius: 8rpx;
    overflow: hidden;
  }
  .follow-btn {
    .primary-btn {
      width: 112rpx;
      height: 48rpx;
      line-height: 48rpx;
      border-radius: 24rpx;
      background: $uni-color-primary;
    }
    .cancel-btn {
      width: 140rpx;
      height: 48rpx;
      line-height: 48rpx;
      border-radius: 24rpx;
      border: 1px solid #d1d1d1;
    }
  }
}
</style>