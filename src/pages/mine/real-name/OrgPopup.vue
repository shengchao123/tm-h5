<template>
  <u-popup v-model="isOrgShow"
           mode="bottom"
           height="770"
           border-radius="30"
           :mask-custom-style="maskCustomStyle">
    <view class="popup-wrap">
      <view class="relative h84 bb">
        <view class="ft34 popup-title">选择组织</view>
        <view class="close-btn"
              @click="isOrgShow = false">
          <svg-icon class="iconfont ft24 color-999 bold mt8"
                    icon="icon_cha"></svg-icon>
        </view>
      </view>
      <view class="popup-content pl30 pr30">
        <view v-for="(item,index) in orgData"
              :key="index"
              :class="selectedOrg.orgId === item.orgId ? 'selected-color' :'color-333'"
              class="center-align org-item bb between-row"
              @click="changeSelectedOrg(item)">
          <text>{{item.orgName}}</text>
          <svg-icon icon="icon_duihao"
                    v-if="selectedOrg.orgId === item.orgId"></svg-icon>
        </view>
      </view>
    </view>
  </u-popup>
</template>

<script>
export default {
  name: 'OrgPopup',
  methods: {
    show (org) {
      this.selectedOrg = org
      this.isOrgShow = true
    },
    // 获取联盟组织列表
    findOrgList () {
      const params = {
        hasMasterOrg: true
      }
      this.$api.findOrgList(params).then(res => {
        if (res.isError) return this.$msg(res.message)
        this.orgData = res?.content ?? []
      })
    },
    changeSelectedOrg (item) {
      this.$emit('selectedOrg', item)
      this.isOrgShow = false
    }
  },
  data () {
    return {
      isOrgShow: true,
      orgData: [],
      selectedOrg: {}
    }
  },
  computed: {
    maskCustomStyle () { // 遮罩层自定义样式
      const temStyle = {
        backgroundColor: 'rgba(0, 0, 0, 0.40)'
      }
      return temStyle
    },
  },
  created () {
    // this.findOrgList()
    this.orgData = [
      {
        "orgId": "31390996614154240",
        "orgName": "麻醉科"
      },
      {
        "orgId": "32033970406623232",
        "orgName": "麻醉一科"
      },
      {
        "orgId": "32041363639175168",
        "orgName": "麻醉二科"
      },
      {
        "orgId": "32114406147721216",
        "orgName": "麻醉--权限测试"
      },
      {
        "orgId": "32139754034923520",
        "orgName": "权限测试组织"
      },
      {
        "orgId": "35843881553332224",
        "orgName": "组织2"
      },
      {
        "orgId": "35844565546797056",
        "orgName": "组织3333"
      },
      {
        "orgId": "35847677267380224",
        "orgName": "组织444"
      },
      {
        "orgId": "35847753720104960",
        "orgName": "组织2432"
      },
      {
        "orgId": "35847768189405184",
        "orgName": "组织6546"
      },
      {
        "orgId": "35847784850229248",
        "orgName": "组织859385"
      },
      {
        "orgId": "36099507075385344",
        "orgName": "gfdgdg"
      }
    ]
  }
}
</script>

<style lang='scss' scoped>
.h84 {
  height: 84rpx;
  line-height: 84rpx;
}
.selected-color {
  color: #e32417;
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
  .popup-content {
    height: 686rpx;
    overflow: auto;
    .org-item {
      height: 100rpx;
      &:last-child {
        border-bottom: 0;
      }
    }
  }
}
</style>
