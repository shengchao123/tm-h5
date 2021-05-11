<template>
  <div class='drag-popover-wrap'
       :style="{top: top + 'px', bottom: bottom + 'px'}">
    <div class="drag_control"
         v-pressMove="{methods: pressMove }"></div>
    <slot></slot>
  </div>
</template>

<script>

const minTop = 100
const maxTop = 600

export default {
  name: 'DragPopover',
  methods: {
    pressMove (e) {
      const touch = e.changedTouches[0]
      const clientY = touch.clientY
      if (clientY <= minTop || clientY >= maxTop) return
      this.top = clientY
    }
  },
  props: {
    bottom: {
      type: [String, Number],
      default: 0
    }
  },
  data () {
    return {
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
  z-index: 9999;
  .drag_control {
    background: #eaeaea;
    border-radius: 1.5px;
    height: 3px;
    width: 24px;
    margin: 6px auto 0;
  }
}
</style>
