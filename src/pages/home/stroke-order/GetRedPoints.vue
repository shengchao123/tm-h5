<template>
  <div class='get-red-wrap'>
    <!-- 搜索框 -->
    <div class="search-wrap">
      <div class="search center-align color-999 ft26">
        <SvgIcon icon="icon_hanhan-01-01"></SvgIcon>
        <div>输入红色地标名称搜索</div>
      </div>
    </div>

    <div class="content row">
      <div class="left-nav-wrap">

      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'GetRedPoints',
  data () {
    return {

    }
  }
}
</script>

<style lang='scss' scoped>
.get-red-wrap {
  .search-wrap {
    padding: 24rpx 30rpx;
    .search {
      height: 66rpx;
      padding: 0 20rpx;
      border-radius: 33rpx;
      background: #f4f5f7;
    }
  }

  .left-nav-wrap {
    width: 180rpx;
  }
}
</style>
