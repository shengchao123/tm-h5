<template>
  <view class="selection-communit-wrap">
    <u-popup v-model="isOrgShow"
             mode="bottom"
             height="760"
             border-radius="30"
             :mask-custom-style="maskCustomStyle">
      <view class="popup-wrap">
        <view class="relative h84">
          <view class="ft34 popup-title bold">选择街道社区</view>
          <view class="close-btn"
                @click="isOrgShow = false">
            <svg-icon icon="icon_cha"
                      class="ft26 color-999 bold mt8"></svg-icon>
          </view>
        </view>
        <view class="pl30 pr30">
          <!-- TODO: tabs-bar未滑动 -->
          <view class="mt32 flex">
            <view v-for="(item,index) in tabsList"
                  :key="index"
                  @click="changeTabs(index)"
                  class="tabs-item mr48"
                  :class="tabsCurrent === index ?'primary-color bold':'color-666'">
              <view class="ft30">{{orgInfoText(item.name)}}</view>
              <view class="center-justify"
                    v-if="tabsCurrent === index">
                <view class="tabs-bar"></view>
              </view>
            </view>
          </view>
          <view class="mt24 h376">
            <view v-for="(item,index) in tabsList[tabsCurrent].list"
                  :key="index"
                  class="column b-border org-item center-justify">
              <view class="center-align between-row">
                <view class="flex flex1"
                      @click="changeTopOrg(item)">
                  <svg-icon :icon="selectIconStatus(item)"
                            class="ft36 "
                            :class="selectClassStatus(item)">
                  </svg-icon>
                  <view class="ml16 ft30 color-333">{{item.name}}</view>
                </view>
                <view class="item-icon"
                      @click="onChildrenOrg(item)"
                      v-if="item.child">
                  <svg-icon icon="icon_xiangyoujiantou"
                            class="ft20 color-c4 bold mt8 "></svg-icon>
                </view>
              </view>

            </view>
          </view>
          <u-button @click="onConfirm"
                    :custom-style="btnStyle">确定</u-button>
        </view>
      </view>
    </u-popup>
  </view>
</template>
<script>
export default {
  methods: {
    // 默认选中第一个街道第一个社区
    initData () {
      const firstList = this.tabsList[0].list[0]
      this.changeTopOrg(firstList)
      this.onChildrenOrg(firstList)
      this.$nextTick(() => {
        this.changeTopOrg(firstList.child[0])
        this.onConfirm()
      })
    },
    // 确定
    onConfirm () {
      const { streetInfo, communityInfo } = this
      const obj = {
        streetInfo, communityInfo
      }
      this.isOrgShow = false
      this.$emit('onConfirm', obj)
    },
    // 选择下一级
    onChildrenOrg (item) {
      this.setOrgInfo(item)
      const temItem = {
        name: '请选择',
        id: '',
        list: item.child
      }
      this.tabsCurrent += 1
      this.tabsList[this.tabsCurrent] = temItem
    },
    // 设置组织信息
    setOrgInfo (item) {
      const { name, id } = item
      let objKey = this.tabsCurrent === 0 ? 'streetInfo' : 'communityInfo'
      this[objKey] = { id, name }
      this.tabsList[this.tabsCurrent] = { ...this.tabsList[this.tabsCurrent], id, name }
      this.tabsCurrent === 0 && this.findCommunityOrganizationTree()
      this.tabsList = JSON.parse(JSON.stringify(this.tabsList))
    },
    // 选中某一组织
    changeTopOrg (item) {
      this.setOrgInfo(item)
    },
    // 切换tabs
    changeTabs (index) {
      if (this.tabsCurrent === index) return
      this.tabsCurrent = index
    },
    show () {
      this.isOrgShow = true
    },
    findCommunityOrganizationTree () {
      this.$api.findCommunityOrganizationTree().then(res => {
        if (res.isError) {
          this.isHaveTabsList = false
          return this.$msg(res.message)
        }
        if (!res && !res.content) {
          this.isHaveTabsList = false
          return
        }
        this.tabsList[0].list = res.content
        this.isHaveTabsList = true
      })
    },
  },
  watch: {
    isHaveTabsList: {
      handler: function (val) {
        if (!val) return
        this.initData()
      },
      immediate: true
    }
  },
  data () {
    return {
      isHaveTabsList: false,
      tabsCurrent: 0,
      navbarOrg: {}, // 导航栏数据
      streetInfo: {}, // 选中的街道数据
      communityInfo: {}, // 选中的社区数据
      isOrgShow: false,
      tabsList: [
        {
          name: '请选择',
          id: '',
          list: []
        },
      ],
    }
  },
  computed: {
    selectIconStatus () {
      return function (item) {
        if (this.tabsCurrent === 0) {
          return this.streetInfo.id === item.id ? 'icon_chenggongFill' : 'icon_quan'
        } else {
          return this.communityInfo.id === item.id ? 'icon_chenggongFill' : 'icon_quan'
        }
      }
    },
    selectClassStatus () {
      return function (item) {
        if (this.tabsCurrent === 0) {
          return this.streetInfo.id === item.id ? 'primary-color' : 'color-ae'
        } else {
          return this.communityInfo.id === item.id ? 'primary-color' : 'color-ae'
        }
      }
    },
    btnStyle () { // 自定义按钮样式
      const btnBgColor = this.$isEmpty(this.communityInfo) ? '#ccc' : '#E32417'
      const temStyle = {
        fontSize: '32rpx',
        color: '#fff',
        height: '98rpx',
        borderRadius: '49rpx',
        fontWeight: 'bold',
        background: btnBgColor,
        marginTop: '66rpx'
      }
      return temStyle
    },
    orgInfoText () {// 弹窗内组织名称
      return (name) => {
        return name && name.length > 7 ? name.substring(0, 6) + '...' : name
      }
    },
    maskCustomStyle () { // 遮罩层自定义样式
      const temStyle = {
        backgroundColor: 'rgba(0, 0, 0, 0.40)'
      }
      return temStyle
    },
  },
  created () {
    this.findCommunityOrganizationTree()
  }
}
</script>
<style lang='scss' scoped>
.selection-communit-wrap {
  .h84 {
    height: 84rpx;
    line-height: 84rpx;
  }
  .h376 {
    height: 376rpx;
    overflow: auto;
  }
  .color-c4 {
    color: #c4c4c4;
  }
  .color-ae {
    color: #aeaeae;
  }
  .w500 {
    width: 500rpx;
  }
  .popup-wrap {
    .popup-title {
      text-align: center;
      color: #000;
    }
    .close-btn {
      position: absolute;
      right: 30rpx;
      top: 0rpx;
    }
    .tabs-item {
      min-width: 90rpx;
      max-width: 210rpx;
      text-align: center;
      display: inline-block;
    }
    .tabs-bar {
      height: 4rpx;
      background: #e32417;
      margin-top: 6rpx;
      width: 32rpx;
    }
    .org-item {
      height: 100rpx;
    }
    .item-icon {
      height: 100rpx;
      width: 100rpx;
      text-align: right;
      line-height: 100rpx;
    }
  }
}
</style>