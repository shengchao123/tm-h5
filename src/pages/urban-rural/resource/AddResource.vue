<template>
  <div class="wrap pb120">
    <div class=" form-box">
      <input type="text"
             v-model="form.title"
             placeholder="标题"
             placeholder-class="place-class"
             class="ft32 title-style" />
      <textarea placeholder="做个介绍吧"
                v-model="form.content"
                placeholder-style="color:#999"
                maxlength="-1"
                class="text-area mt36 ft30">
      </textarea>
      <div class="mt24 flex pb8">
        <upload-images :count="9"
                       :length="9"
                       :imageData.sync="form.attachmentDTOList"></upload-images>
      </div>
    </div>

    <u-form :model="form"
            class="form ft26"
            label-width="174"
            ref="uForm">
      <u-form-item label="资源类型">
        <div class="flex1 tr mr16 text-hidden"
             @click="showActionSheet = true"
             :style="{color: resourceType === '未选择' ? '#999999' : '#333333'}">
          {{resourceType}}</div>
        <SvgIcon icon="icon_xiangyoujiantou"
                 style="color:#c4c4c4"></SvgIcon>
      </u-form-item>
      <u-form-item label="联系人"
                   prop="contactPerson">
        <u-input v-model="form.contactPerson"
                 placeholder-style="color: #999999"
                 placeholder="输入联系人姓名"
                 class="tr" />
      </u-form-item>
      <u-form-item label="联系电话"
                   prop="contactPhone">
        <u-input v-model="form.contactPhone"
                 placeholder-style="color: #999999"
                 placeholder="输入联系电话"
                 class="tr" />
      </u-form-item>
      <u-form-item label="微信号(选填)"
                   prop="weChatNumber">
        <u-input v-model="form.weChatNumber"
                 placeholder-style="color: #999999"
                 placeholder="输入内容"
                 class="tr" />
      </u-form-item>
    </u-form>

    <div class="bt">
      <button class="submit tc ft32 bold"
              :class="isSubmit"
              @click="submit">
        提交
      </button>
    </div>
    <u-popup mode="center"
             v-model="show"
             :mask-close-able="false"
             border-radius="24">
      <div class="tc pop-box">
        <svg-icon icon="icon_chenggongFill"
                  class="ft88 mt64 icon-style"></svg-icon>
        <div class="ft32 bold mt32">提交成功，等待审核</div>
        <div class="ft26 color-999 mt16">审核后，展位内容将显示在定制体验列表</div>
        <div class="know-btn ft28 color-666"
             @click="onKnow">我知道啦</div>
      </div>
    </u-popup>

    <u-action-sheet :list="actions"
                    @click="onSelectResourceType"
                    v-model="showActionSheet"></u-action-sheet>
  </div>
</template>
<script>
import UploadImages from "@/components/upload-images";
import { subStringWithStrlen } from '@/utils/tools'

export default {

  methods: {
    onSelectResourceType (index) {
      const { type, text } = this.actions[index]
      this.form.resourceType = type
      this.resourceType = text
    },
    // 提交按钮
    submit () {
      if (!this.validateForm()) {
        return this.$msg("请填写完整信息");
      }
      const params = {
        ...this.form,
      }
      this.$api.createJourneyResourceSharing(params).then((res) => {
        if (res.isError) return this.$msg(res.message);
        this.show = true
      });
    },
    validateForm () {
      const { title, content, resourceType, contactPerson, contactPhone, weChatNumber, attachmentDTOList } = this.form;
      if (content && title && resourceType && attachmentDTOList.length > 0 && contactPerson && weChatNumber && contactPhone) {
        return true;
      } else {
        return false
      }
    },
    // 我知道了
    onKnow () {
      this.show = false;
      uni.navigateBack({ delta: 1 });
    }
  },
  data () {
    return {
      actions: Object.freeze([
        { text: '房产商铺', type: '01' },
        { text: '土地林地', type: '02' },
        { text: '农产品', type: '03' },
        { text: '其他', type: '04' }
      ]),
      resourceType: '未选择',
      showActionSheet: false,
      form: {
        resourceType: '未选择',
        title: "",
        attachmentDTOList: [],
      },
      show: false
    };
  },
  computed: {
    appropriateCrowdNames () {
      const _temStr = subStringWithStrlen(this.form.appropriateCrowd, 34)
      return _temStr || '未选择'
    },
    serviceContentNames () {
      const _temStr = subStringWithStrlen(this.form.serviceContent, 34)
      return _temStr || '未选择'
    },
    isSubmit () {
      return this.validateForm() ? 'back' : ''
    },
  },
  components: { UploadImages },
};
</script>
<style lang="scss" scoped>
.wrap {
  .popup {
    padding: 24rpx 30rpx;
    .title {
      font-size: 34rpx;
      color: #000000;
      text-align: center;
      margin-bottom: 64rpx;
    }
    .tags {
      flex-wrap: wrap;
      width: calc(100vw - 60rpx);
    }
    .tag {
      width: 159rpx;
      height: 66rpx;
      line-height: 66rpx;
      background: #f7f7f7;
      border-radius: 33px;
      border: 1px solid transparent;
    }
    .active {
      border-color: #fa9a75;
      background: #fff1eb;
      color: #e32417;
    }
    .btn {
      margin-top: 80rpx;
      background: #e32417;
      font-size: 34rpx;
      color: #ffffff;
      border-radius: 49rpx;
      height: 98rpx;
      line-height: 98rpx;
    }
  }
  .tr {
    text-align: right !important;
  }
  /deep/ .u-input__right-icon {
    display: none;
  }
  /deep/ .u-form-item--left {
    font-weight: 400 !important;
  }

  .form {
    padding: 20rpx 30rpx;
  }
}
.form-box {
  padding: 0 30rpx;

  .title-style {
    height: 100rpx;
    border-bottom: 1rpx solid #eaeaea;
  }
  .text-area {
    height: 360rpx !important;
    padding: 0 !important;
    width: 100%;
    font-size: 28rpx;
    overflow-y: scroll;
  }
  .trips {
    height: 100rpx;
    border-top: 1rpx solid #eaeaea;
  }
}
.pb120 {
  padding-bottom: 120rpx;
}
.back {
  background: #e32417 !important;
}
.bt {
  width: 100%;
  position: fixed;
  bottom: 16rpx;
  border-top: 1rpx solid #eaeaea;
  padding-top: 16rpx;
  background: #ffffff;
  z-index: 99;
  .submit {
    width: 690rpx;
    height: 88rpx;
    line-height: 88rpx;
    border-radius: 49rpx;
    color: #ffffff;
    background: #cccccc;
  }
}
.ft88 {
  font-size: 88rpx;
}
.ft26 {
  font-size: 26rpx;
}
.know-btn {
  width: 240rpx;
  height: 70rpx;
  line-height: 70rpx;
  border-radius: 49rpx;
  border: 1rpx solid #d2d2d2;
  margin: 0 auto;
  margin-top: 32rpx;
}
.pop-box {
  width: 540rpx;
  height: 416rpx;
  .icon-style {
    color: #67c23a;
  }
}
.mt64 {
  margin-top: 64rpx;
}
</style>
