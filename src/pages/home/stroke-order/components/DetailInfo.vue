<template>
  <div class="info pl30 pr30">
    <template v-for="(item, index) in list">
      <div v-if="item.content"
           :key="index"
           class="info-item pt24 pb24 flex"
           :class="index === (list.length - 1) && 'no-border'">
        <div class="label ft30 medium">{{item.label}}</div>
        <div class="content ft30 flex1">{{item.content}}</div>
      </div>
    </template>
  </div>
</template>
<script>
export default {
  name: 'name',
  props: {
    list: Array
  },
}
</script>
<style lang='scss' scoped>
.info {
  background: #fff;
  .info-item {
    border-bottom: solid 1rpx #eaeaea;
    .label {
      width: 220rpx;
    }
    .content {
    }
  }
  .no-border {
    border: none;
  }
}
</style>