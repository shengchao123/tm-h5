<template>
  <div class='poi-keywords-wrap'>
    <template v-for="(item, index) in keywords">
      <div :key="item.name"
           class="item column center-align"
           :class="index !== 0 && 'tb'">
        <SvgIcon :icon="item.icon"
                 class="ft20"></SvgIcon>
        <div class="ft12 mt4">{{item.name}}</div>
      </div>
    </template>
  </div>
</template>

<script>
export default {
  name: 'PoiKeywords',
  data () {
    return {
      keywords: [
        {
          icon: 'icon_fangkeshu',
          name: '红色地标'
        },
        {
          icon: 'icon_fangkeshu',
          name: '党群服务'
        },
        {
          icon: 'icon_fangkeshu',
          name: '停车场'
        },
        {
          icon: 'icon_fangkeshu',
          name: '公共厕所'
        },
        {
          icon: 'icon_fangkeshu',
          name: '餐饮美食'
        }
      ]
    }
  }
}
</script>

<style lang='scss' scoped>
.poi-keywords-wrap {
  background: #ffffff;
  box-shadow: 0 -6px 17px 0 rgba(0, 0, 0, 0.1);
  border-radius: 20px;
  border-radius: 20px;

  .item {
    padding: 4px 6px;
  }
}
</style>
