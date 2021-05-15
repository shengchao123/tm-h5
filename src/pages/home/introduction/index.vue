<template>
  <div class='introduction-wrap'>
    <head-swiper></head-swiper>
    <div class="title">
      <div class="between-row">
        <span class="ft40 bold flex1 color-333">新四军历史纪念馆</span>
        <div class="ml24 center-align"
             style="color: #F87F00"
             @click="onPeriphery">
          <svg-icon icon="icon_dingwei"
                    class="ft24 mb4"></svg-icon>
          <span class="ft24 ml8">周边</span>
        </div>
      </div>
      <div class="between-row mt24">
        <span class="ft28 color-999 flex1">临安区高虹镇龙上村龙上自然村72号</span>
        <div class="ml24 center-align"
             style="color: #0084F6"
             @click="onNavigation">
          <svg-icon icon="icon_ditu"
                    class="ft24 mb4"></svg-icon>
          <span class="ft24 ml8">导航</span>
        </div>
      </div>
    </div>
    <div style="margin: 0 30rpx">
      <audio-module></audio-module>
    </div>
    <div class="color-333"
         style="padding: 30rpx">
      <p class="medium ft32 mb24">简介</p>
      <div class="ft28"
           style="line-height: 42rpx">
        1945年3月起，新四军苏浙军区第一支队刘别生部队与国民党108师在天目山交战获取胜利，新四军在此休整近2月，村里大多数人家都驻有新四军，四军在此休整近2月，村里大多数人家都驻有新四军，新四军四军在此休整近2月，村里大多数人家都驻有新四军，新四军四军在此休整近2月，村里大多数人家都驻有新四军，新四军四军在此休整近2月，村里大多数人家都驻有新四军，新四军四军在此休整近2月，村里大多数人家都驻有新四军，新四军新四军在村里加工粮食、被服，救治伤员。新四军驻军旧址是现存最完好的一幢民居。此外，村里还存有新四军48团（“老虎团”）团长刘别生和爱人苏迪1945年3月—5月在驻地修整时居住的旧址遗迹。
      </div>
    </div>
  </div>
</template>
<script>
import AudioModule from './components/AudioModule.vue'
import HeadSwiper from './components/HeadSwiper.vue'

export default {
  name: 'introduction',
  methods: {
    onPeriphery () {

    },
    onNavigation () {

    }
  },
  data () {
    return {}
  },
  components: { HeadSwiper, AudioModule }
}
</script>
<style lang='scss' scoped>
.introduction-wrap {
  .title {
    padding: 30rpx;
  }
  .mb2 {
    margin-bottom: 4rpx;
  }
}
</style>
