<template>
  <div class='poi-keywords-wrap'>
    <template v-for="(item, index) in keywords">
      <div :key="item.name"
           @click="onSelectKeyword(item, index)"
           class="item column center-align"
           :style="{color: selectedIndex === index ? '#F13042' : '#666666'}"
           :class="index !== 0 && 'tb'">
        <SvgIcon :icon="item.icon"
                 class="ft32"></SvgIcon>
        <div class="ft20 mt8">{{item.name}}</div>
      </div>
    </template>
  </div>
</template>

<script>

export default {
  name: 'PoiKeywords',
  methods: {
    onSelectKeyword (item, index) {
      this.selectedIndex = index
      this.$emit('changePois', item)
    }
  },
  data () {
    return {
      selectedIndex: 0,
      keywords: Object.freeze([
        {
          icon: 'icon_dibiao',
          marker: 'guide_mark_1',
          type: '01',
          name: '红色地标'
        },
        {
          icon: 'icon_dangjianlianmeng_mian',
          marker: 'guide_mark_2',
          type: '02',
          name: '党群服务'
        },
        {
          icon: 'icon_tingchechang',
          marker: 'guide_mark_3',
          name: '停车场'
        },
        {
          icon: 'icon_gonggongcesuo',
          marker: 'guide_mark_4',
          name: '公共厕所'
        },
        {
          icon: 'icon_meishi',
          marker: 'guide_mark_5',
          name: '餐饮美食'
        }
      ])
    }
  }
}
</script>

<style lang='scss' scoped>
.poi-keywords-wrap {
  background: #ffffff;
  box-shadow: 0 -6rpx 17rpx 0 rgba(0, 0, 0, 0.1);
  border-radius: 40rpx;

  .item {
    padding: 16rpx 8rpx;
  }
}
</style>
