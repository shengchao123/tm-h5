<template>
  <div class='poi-keywords-wrap'>
    <template v-for="(item, index) in keywords">
      <div :key="item.name"
           @click="onSelectKeyword(item, index)"
           class="item column center-align"
           :style="{color: selectedIndex === index ? '#F13042' : '#9D767A'}"
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
      selectedIndex: 2,
      keywords: Object.freeze([
        {
          icon: 'icon_dibiao',
          marker: 'guide_mark_1.png',
          type: '01',
          name: '红色地标'
        },
        {
          icon: 'icon_nongchanpin',
          marker: 'guide_mark_6.png',
          type: '03',
          name: '农产品'
        },
        {
          icon: 'icon_jingdian',
          marker: 'guide_mark_2.png',
          name: '风景'
        },
        {
          icon: 'icon_tingchechang',
          marker: 'guide_mark_3.png',
          name: '停车场'
        },
        {
          icon: 'icon_gonggongcesuo',
          marker: 'guide_mark_4.png',
          name: '公共厕所'
        },
        {
          icon: 'icon_meishi',
          marker: 'guide_mark_5.png',
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
