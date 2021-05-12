<template>
  <div class='poi-keywords-wrap'>
    <template v-for="(item, index) in keywords">
      <div :key="item.name"
           @click="onSelectKeyword(item, index)"
           class="item column center-align"
           :style="{color: selectedIndex === index ? '#F13042' : '#666666'}"
           :class="index !== 0 && 'tb'">
        <SvgIcon :icon="item.icon"
                 class="ft16"></SvgIcon>
        <div class="ft10 mt4">{{item.name}}</div>
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
          type: '01',
          name: '红色地标'
        },
        {
          icon: 'icon_dangjianlianmeng_mian',
          type: '02',
          name: '党群服务'
        },
        {
          icon: 'icon_tingchechang',
          name: '停车场'
        },
        {
          icon: 'icon_gonggongcesuo',
          name: '公共厕所'
        },
        {
          icon: 'icon_meishi',
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
  box-shadow: 0 -6px 17px 0 rgba(0, 0, 0, 0.1);
  border-radius: 20px;
  border-radius: 20px;

  .item {
    padding: 8px 4px;
  }
}
</style>
