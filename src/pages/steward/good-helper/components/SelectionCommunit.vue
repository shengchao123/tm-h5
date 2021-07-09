<template>
  <u-popup v-model="isShow"
           mode="bottom"
           height="760"
           border-radius="30">
    <!-- <view class="popup-wrap">
      <view class="relative h84">
        <view class="ft34 popup-title bold">选择街道社区</view>
        <view class="close-btn"
              @click="isOrgShow = false">
          <text class="iconfont ft26 color-999 bold mt8 icon_cha"></text>
        </view>
      </view>
      <view class="pl30 pr30">
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
                <text class="iconfont ft36 icon_quan"
                      :class="orgInfo.id === item.id ? 'icon_chenggongFill primary-color':'icon_quan color-ae'"></text>
                <view class="ml16 ft30 color-333">{{item.name}}</view>
              </view>
              <view class="item-icon"
                    @click="onChildrenOrg(item)"
                    v-if="item.child">
                <text class="iconfont ft20 color-c4 bold mt8 icon_xiangyoujiantou"></text>
              </view>
            </view>

          </view>
        </view>
        <u-button @click="onConfirm"
                  :custom-style="btnStyle">确定</u-button>
      </view>

    </view> -->
  </u-popup>
</template>
<script>
export default {
  methods: {
    findCommunityOrganizationTree () {
      this.$api.findCommunityOrganizationTree().then(res => {
        if (res.isError) return this.$msg(res.message)
        console.log(res)
      })
    }
  },
  data () {
    return {
      isShow: false
    }
  },
  created () {
    this.findCommunityOrganizationTree()
  }
}
</script>
<style lang='scss' scoped>
.-wrap {
}
</style>