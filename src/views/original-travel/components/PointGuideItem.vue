<template>
  <div class='point-guide-item-wrap'>
    <div class="bb center-align between-row"
         style="height: 76px;">
      <div>
        <div class="ft15"
             :class="main && 'bold ft18'">{{info.name}}</div>
        <div class="ft12 color-666"
             :class="info.address &&'mt8'">{{info.address}}</div>
      </div>

      <div class="btn center"
           @click="onGuide">
        <SvgIcon icon="icon_daohang"
                 style="color:#518CFC "
                 class="ft10"></SvgIcon>
        <span class="ft13 ml4 color-666">导航</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PointGuideItem',
  methods: {
    onGuide () {
      this.$emit('onGuide', this.info)
    }
  },
  props: {
    info: Object,
    main: [Boolean, String]
  }
}
</script>

<style lang='scss' scoped>
.point-guide-item-wrap {
  padding: 0 16px;

  .btn {
    height: 28px;
    width: 60px;
    border: 1px solid #dcdcdc;
    border-radius: 14px;
  }
}
</style>
