<template>
  <div class='porject-item-wrap bg-white pl32 pr32'>
    <div class="pt32 pb32"
         :class="showBorder && 'bb'">
      <div class="center-align">
        <div class="ft34 medium">吴越人家消防设施改造</div>
      </div>
      <div class="between-row center-align ft24 color-999 pt16 pb16">
        <div>
          <span class="mr48">2021-05-03 发布</span>
          <!-- <span class="ml48">杭州市临安区农业农村局</span> -->
        </div>
        <span>3天23小时后转入领办大厅</span>
      </div>
      <div class="content">
        <div ref="contentBox"
             class="content-box"
             :class="isHideContent && 'hide-content'">
          <span ref="contentText"
                class="ft26 content-text">{{'的撒旦发；噶沙发上放假，啊是发啊很少发生傅哈桑发生321纠纷给。谁打电话能否撒谎的法撒旦和发生大火发生大火发货都是发哈岁的发生大火发哈岁的发哈岁的发哈速；度法哈桑发哈萨维发货都是发哈岁的'}}</span>
        </div>
        <view v-if="isShowExpand"
              class="expand center-flex"
              @click.stop="onExpandContent">
          <text class="ft24 color-e32417">...展开</text>
        </view>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'projectItem',
  methods: {
    onExpandContent () {
      this.isShowExpand = false
      this.isHideContent = false
    },
    calculationHeight () {
      const boxHeight = this.$refs.contentBox.offsetHeight
      const textHeight = this.$refs.contentText.offsetHeight
      this.isShowExpand = textHeight > boxHeight
    },
  },
  props: {
    projectItem: Object,
    showBorder: Boolean
  },
  data () {
    return {
      isShowExpand: false,
      isHideContent: true
    }
  },
  created () {
    this.$nextTick(() => {
      this.calculationHeight()
    })
  }
}
</script>
<style lang='scss' scoped>
.porject-item-wrap {
  .content {
    position: relative;
    .content-box {
      width: 100%;
      .content-text {
        line-height: 38rpx;
      }
    }
    .hide-content {
      height: 80rpx;
      display: -webkit-box;
      -webkit-box-orient: vertical; // 点点点
      -webkit-line-clamp: 2;
      overflow: hidden;
    }
    .expand {
      position: absolute;
      right: -8rpx;
      bottom: 8rpx;
      width: 90rpx;
      height: 35rpx;
      background: rgba(255, 255, 255, 1);
      letter-spacing: 2rpx;
    }
  }
}
</style>