<template>
  <div class='drag-popover-wrap'
       ref="wrap"
       :style="{top: top + 'px', bottom: bottom + 'px'}">
    <div class="relative">
      <div class="location center"
           @click="onLocation"
           v-if="showLocation">
        <SvgIcon icon='icon_suoding'></SvgIcon>
      </div>
      <div class="drag_control"
           v-pressMove="{methods: pressMove }"></div>
      <div :style="{ height: slotHeight + 'px', 'overflow-y': 'scroll'}">
        <slot class="slot"></slot>
      </div>
    </div>
  </div>
</template>

<script>

const minTop = 100
const maxTop = 600

export default {
  name: 'DragPopover',
  methods: {
    onLocation () {
      this.$emit('onLocation')
    },
    pressMove (e) {
      const _touch = e.changedTouches[0]
      const _clientY = _touch.clientY
      if (_clientY <= minTop || _clientY >= maxTop) return
      this.getContentHeight()
      this.top = _clientY
    },
    getContentHeight () {
      const _rect = this.$refs.wrap.getBoundingClientRect()
      this.slotHeight = _rect.height - 15
    }
  },
  props: {
    bottom: {
      type: [String, Number],
      default: 0
    },
    showLocation: {
      type: [String, Boolean],
      default: false
    }
  },
  mounted () {
    this.getContentHeight()
  },
  data () {
    return {
      slotHeight: 0,
      top: 400
    }
  }
}
</script>

<style lang='scss' scoped>
.drag-popover-wrap {
  position: absolute;
  left: 0;
  right: 0;
  background: #ffffff;
  box-shadow: 0 -6px 17px 0 rgba(0, 0, 0, 0.1);
  border-radius: 15px 15px 0 0;
  z-index: 999;
  .location {
    position: absolute;
    top: -60px;
    right: 5px;
    border-radius: 5px;
    height: 44px;
    width: 44px;
    background: #ffffff;
    box-shadow: 0 -6px 17px 0 rgba(0, 0, 0, 0.1);
  }
  .drag_control {
    background: #eaeaea;
    border-radius: 1.5px;
    height: 3px;
    width: 24px;
    margin: 6px auto 0;
  }
  .container {
    position: absolute;
    top: 20px;
  }
}
</style>
