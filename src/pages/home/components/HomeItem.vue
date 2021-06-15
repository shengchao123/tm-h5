<template>
  <div class='item-wrap column center'>
    <img :src="item.img"
         :style="{width: item.imgW + 'rpx'}"
         object-fit="contain" />
    <div class="title mt16">{{item.text1}}</div>
    <div class="title">{{item.text2}}</div>
  </div>
</template>

<script>
export default {
  name: 'HomeItem',
  props: {
    item: Object
  }
}
</script>

<style lang='scss' scoped>
.item-wrap {
  position: absolute;
  background-image: linear-gradient(90deg, #ffdb5d 21%, #ffca00 96%);
  border-radius: 8px;
  width: 128rpx;
  height: 178rpx;
  .title {
    font-family: PingFangSC-Regular;
    font-size: 24rpx;
    color: #333333;
  }
}
</style>
