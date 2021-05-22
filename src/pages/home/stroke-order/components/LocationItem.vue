<template>
  <div class='location-item-wrap'>
    <div class="bb center-align between-row item pr24"
         @click="onSelect">
      <div class="flex1">
        <div class="bold ft36">{{item.name}}</div>
        <div class="ft26 color-666 address text-hidden"
             :class="item.address && 'mt16'">{{item.address}}</div>
      </div>

      <SvgIcon icon="icon_duihao"
               v-if="isCurrent"
               class="ft40 color-e32417 mr32"></SvgIcon>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LocationItem',
  methods: {
    onSelect () {
      this.$emit('onSelectItem', this.item)
    }
  },
  data () {
    return {

    }
  },
  props: ['isCurrent', 'item']
}
</script>

<style lang='scss' scoped>
.location-item-wrap {
  padding: 0 16px;
  .item {
    height: 148rpx;
  }
  .address {
    max-width: 75vw;
  }
}
</style>
