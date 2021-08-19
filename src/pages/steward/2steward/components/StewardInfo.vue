<template>
  <div class='steward-wrap'>
    <div class="tc ft32 bold">{{detail.title}}</div>

    <div class="tc mt32 ft28 bold">人物介绍</div>
    <div class="content ft28 mt16">{{detail.introduce}}</div>

    <div class="tc mt32 ft28 bold">主要贡献</div>
    <div class="content ft28 mt16">{{detail.contribution}}</div>

    <div class="tc mt32 ft28 bold">主要评价</div>
    <div class="content ft28 mt16">
      {{detail.evaluate}}
    </div>

    <div class="imgs mt16 between-row">
      <!-- <img src=""  v-for="item in list"> -->
    </div>
  </div>
</template>

<script>
export default {
  name: 'StewardInfo',
  data () {
    return {

    }
  },
  props: {
    detail: Object
  }
}
</script>

<style lang='scss' scoped>
.steward-wrap {
  height: calc(100vh - 194rpx);
  margin-top: 32rpx;
  overflow-y: scroll;
  padding: 40rpx 32rpx;
  background-color: #fff;
  .content {
    line-height: 48rpx;
  }
  img {
    width: 214rpx;
    height: 214rpx;
  }
}
</style>
