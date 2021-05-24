<template>
  <div class='drag-popover-wrap'
       ref="wrap"
       :style="{top}">
    <div ref="targetEl"
         class="relative column"
         style="height:100%">
      <div class="location center color-333 ft48"
           @click="onLocation"
           v-if="showLocation">
        <SvgIcon icon='icon_suoding'></SvgIcon>
      </div>
      <div @touchmove.prevent="move"
           class="drag_control_wrap center pt12 pb12">
        <div class="drag_control"></div>
      </div>
      <div class="content flex1">
        <slot class="slot"></slot>
      </div>
    </div>
  </div>
</template>

<script>
import { calcPx2Vh } from '@/utils/tools'
const minTop = 10

export default {
  name: 'DragPopover',
  methods: {
    onLocation () {
      this.$emit('onLocation')
    },
    move (e) {
      const offsetHeight = this.$refs.targetEl.getBoundingClientRect().height
      const _touch = e.touches[0]
      const _clientY = calcPx2Vh(_touch.clientY)
      if (_clientY <= minTop || _clientY >= + this.maxTop) return
      this.getContentHeight()
      this.top = _clientY + 'vh'
      this.$emit('dragTopChange', offsetHeight)
    },
    getContentHeight () {
      const _rect = this.$refs.wrap.getBoundingClientRect()
    }
  },
  props: {
    showLocation: {
      type: [String, Boolean],
      default: false
    },
    maxTop: {
      type: [Number, String],
      default: 50
    }
  },
  mounted () {
    this.getContentHeight()
  },
  data () {
    return {
      slotHeight: 0,
      top: '50vh'
    }
  }
}
</script>

<style lang='scss' scoped>
.drag-popover-wrap {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  background: #ffffff;
  box-shadow: 0 -6rpx 17rpx 0 rgba(0, 0, 0, 0.1);
  border-radius: 30rpx 30rpx 0 0;
  z-index: 99;
  .location {
    position: absolute;
    top: -120rpx;
    right: 20rpx;
    border-radius: 20rpx;
    height: 88rpx;
    width: 88rpx;
    background: #ffffff;
    box-shadow: 0 -12rpx 34rpx 0 rgba(0, 0, 0, 0.1);
  }
  .drag_control_wrap {
    // position: absolute;
    // top: 0;
    // left: 0;
    // right: 0;
    height: 38rpx;
    .drag_control {
      background: #eaeaea;
      border-radius: 3rpx;
      height: 6rpx;
      width: 48rpx;
    }
  }

  .container {
    position: absolute;
    top: 40rpx;
  }
  .content {
    height: 50%;
    // position: absolute;
    // top: 40rpx;
    // left: 0;
    // right: 0;
    // bottom: 0;
  }
}
</style>
