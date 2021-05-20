<template>
  <div class="my-radio-box"
       :class="boxClass">
    <div v-for="(item, index) in options"
         :key="index"
         class="center-align mr32"
         :style="{marginRight: ' ' + spacing + 'rpx'}"
         @click="onSelect(item.id)">
      <my-radio :selected="value === item.id">
        <span class="ft30 ml16"
              slot="text">{{item.name}}</span>
      </my-radio>
    </div>
  </div>
</template>
<script>
import MyRadio from './MyRadio'

export default {
  methods: {
    onSelect (id) {
      this.$emit('update:value', id)
    }
  },
  props: {
    boxClass: {
      type: String,
      default: 'flex1 flex'
    },
    spacing: {
      type: [String, Number],
      default: '32'
    },
    value: [String, Number, Boolean],
    options: {
      type: Array,
      default: () => []
    }
  },
  data () {
    return {}
  },
  components: {
    MyRadio
  }
}
</script>
<style lang='scss' scoped>
.my-radio-box {
  flex-wrap: wrap;
}
</style>