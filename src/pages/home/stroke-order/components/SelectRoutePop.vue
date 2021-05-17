<template>
  <u-popup v-model="isShow"
           radius="15"
           height="280"
           type="bottom">
    <view class="popup">
      <view class="tc title">
        <text class="ft34 medium">选择行程线路</text>
        <view class="iconfont icon_cha color-999 close"
              @click="hide"></view>
      </view>
      <view class="list">
        <view v-for="(item, index) in list"
              :key="index"
              class="item between-row center-align pl30 pr30"
              :class="item.storeId === selectedStoreId && 'selected'"
              @click="onItem(item)">
          <text class="ft28">{{item.storeName}}</text>
          <span v-if="item.storeId === selectedStoreId"
                class="iconfont icon_duihao ft24 mt4"></span>
        </view>
      </view>
    </view>
  </u-popup>
</template>
<script>

export default {
  methods: {
    show () {
      this.isShow = true
    },
    hide () {
      this.$refs.storePopup.close()
      this.isShow = false
    },
    onItem (item) {
      this.$emit('update:selectedStoreId', item.storeId)
      this.$emit('onStoreItem', item)
      this.hide()
    },
  },
  props: {
    selectedStoreId: String,
  },
  data () {
    return {
      list: []
    }
  },
}
</script>
<style lang='scss' scoped>
.popup {
  .title {
    position: relative;
    line-height: 84rpx;
    .close {
      width: 40rpx;
      height: 40rpx;
      position: absolute;
      top: 0rpx;
      right: 32rpx;
      color: #c7c7c7;
    }
  }
  .list {
    max-height: 680rpx;
    .item {
      height: 99rpx;
      border-bottom: solid 1px #eaeaea;
    }
    .selected {
      color: #e32417;
    }
  }
}
</style>