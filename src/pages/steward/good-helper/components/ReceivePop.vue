<template>
  <u-popup v-model="isShow"
           class="contact-dialog tc"
           mode="center"
           border-radius="24"
           width="540"
           :mask-close-able="false">
    <view class="pl32 pr32 pb32">
      <div class="title ft30 tc">认领</div>
      <div class="close-btn"
           @click="hide">
        <svg-icon class="ft24 color-999 bold mt8"
                  icon="icon_cha"></svg-icon>
      </div>
      <div v-for="(item, index) in selectList"
           :key="index"
           class="option mb24 pl24 center-justify column"
           :class="item.type === selectedType ? 'option-selected' : ''"
           @click="onSelect(item)">
        <div class="center-align mb8">
          <div class="mr16 radio center">
            <svg-icon v-if="item.type === selectedType"
                      icon="icon_duihao"
                      class="ft20 white-color"></svg-icon>
          </div>
          <span class="ft32 name">{{item.name}}</span>
        </div>
        <span class="ft24 description">{{item.description}}</span>
      </div>
      <div class="confirm-btn white-color ft30 tc mt32"
           @click="onConfirm">确定</div>
    </view>
  </u-popup>
</template>
<script>
export default {
  name: 'ReceivePop',
  methods: {
    // 打电话
    show ({ projectId, communityOrgId }) {
      this.isShow = true
      this.projectId = projectId
      this.communityOrgId = communityOrgId
    },
    hide () {
      this.isShow = false
    },
    onSelect (item) {
      this.selectedType = item.type
      this.projectId = null
      this.communityOrgId = null
    },
    onConfirm () {
      this.hide()
    }
  },
  data () {
    return {
      isShow: false,
      projectId: null,  // 项目id
      communityOrgId: null, //  社区id
      selectedType: 1,
      selectList: [
        {
          name: '联合领办',
          type: 1,
          description: '视为共建单位联合领办，分数平分'
        },
        {
          name: '单独领办',
          type: 2,
          description: '视为单独领办，享受分数加成'
        }
      ]
    }
  },
  props: {
    itemConfig: Object,
    showContact: {
      type: Boolean,
      default: () => {
        return false
      }
    }
  },
  created () { },
}
</script>
<style lang='scss' scoped>
.title {
  height: 90rpx;
  line-height: 90rpx;
}
.close-btn {
  position: absolute;
  right: 24rpx;
  top: 12rpx;
}
.option {
  width: 100%;
  height: 144rpx;
  background: #f3f3f3;
  border-radius: 8rpx;
  box-sizing: border-box;
  text-align: left;
  .radio {
    width: 32rpx;
    height: 32rpx;
    border-radius: 50%;
    border: solid 1px #999;
    box-sizing: border-box;
  }
  .description {
    color: #999;
  }
}
.option-selected {
  background: #fce9e7;
  .radio {
    border: none;
    background: #e32417;
  }
  .name {
    color: #e32417;
  }
  .description {
    color: #ef867f;
  }
}
.confirm-btn {
  height: 80rpx;
  line-height: 80rpx;
  background: #e32417;
  border-radius: 40rpx;
}
</style>