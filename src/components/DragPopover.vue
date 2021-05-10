<template>
  <div class='drag-popover-wrap'
       :style="style">
    <div class="drag_control"
         v-pressMove="{methods: pressMove }"></div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'DragPopover',
  methods: {
    pressMove (e) {
      const touch = e.changedTouches[0]
      const clientY = touch.clientY
      if (clientY <= 300 || clientY >= 600) return
      this.style = `top:${clientY}px`
    }
  },
  data () {
    return {
      style: 'top:400px'
    }
  }
}
</script>

<style lang='scss' scoped>
.drag-popover-wrap {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: rebeccapurple;
  z-index: 9999;
  .drag_control {
    background: #666666;
    height: 10px;
    width: 100px;
    margin: 10px auto 0;
  }
}
</style>
