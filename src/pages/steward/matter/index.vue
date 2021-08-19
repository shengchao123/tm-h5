<template>
  <div class='matter-wrap'>
    <img src="@/static/steward/matter.png">

    <div class="form">
      <div class="form-item p30 ft30 center-align">
        <text class="w120 medium">姓名</text>
        <input type="text"
               v-model="evaluate.title"
               class="flex1"
               placeholder="请输入姓名" />
      </div>

      <div class="form-item p30 ft30 center-align">
        <text class="w120 medium">联系电话</text>
        <input type="text"
               v-model="evaluate.title"
               class="flex1"
               placeholder="请输入联系电话" />
      </div>

      <div class="form-item p30 ft30 center-align">
        <text class="w120 medium">身份证号</text>
        <input type="text"
               v-model="evaluate.title"
               class="flex1"
               placeholder="请输入身份证号" />
      </div>

      <div class="form-item p30 ft30">
        <text class="w120 medium">问题描述</text>
        <div>
          <textarea placeholder="添加正文"
                    v-model="evaluate.content"
                    placeholder-style="color:#999"
                    maxlength="-1"
                    class="text-area mt36 ft30">
            </textarea>
        </div>
      </div>

      <div>
        <view class="pb120 evaluate-box">
          <view class="mt24 flex pb8">
            <upload-images :count="9"
                           :length="9"
                           :imageData.sync="evaluate.attachmentDTOList"></upload-images>
          </view>
        </view>
        <view class="bt">
          <button class="submit tc ft32 bold"
                  :class="isSubmit"
                  @click="submit">
            提交
          </button>
        </view>
      </div>
    </div>
  </div>
</template>

<script>
import UploadImages from "@/components/upload-images";

export default {
  name: 'index',
  methods: {
    // 提交按钮
    submit () {
      this.show = true;
      const { title, content, attachmentDTOList } = this.evaluate;
      if (!title || !content || !attachmentDTOList.length === 0) {
        return this.$msg("请填写完整信息");
      }
      const params = {
        ...this.evaluate,
      };
      let apiName = "createCommunityNote";
      if (this.communityNoteId) {
        apiName = "modifyCommunityNote";
      }
      this.$api[apiName](params).then((res) => {
        if (res.isError) return this.$msg(res.message);
        this.show = true
      });
    },
    // 获取帖子详情数据
    getEvaluateData (id) {
      const params = {
        communityNoteId: id,
      };
      this.$api.getCommunityNoteInfoById(params).then((res) => {
        if (res.isError) return this.$msg(res.message);
        this.evaluate = { ...res.content };
      });
    },
    // 我知道了
    onKnow () {
      this.show = false;
      uni.navigateBack({ delta: 1 });
    }
  },
  data () {
    return {
      evaluate: {
        title: "",
        content: "",
        attachmentDTOList: [],
      },
      communityNoteId: "",
      show: false
    };
  },
  computed: {
    isSubmit () {
      const { title, content, attachmentDTOList } = this.evaluate;
      if (title && content && attachmentDTOList.length > 0) {
        return "back";
      }
      return "";
    },
  },
  onLoad (option) {
    if (option.id) {
      this.communityNoteId = option.id;
      this.getEvaluateData(option.id);
    }
  },
  components: { UploadImages },
}
</script>

<style lang='scss' scoped>
.matter-wrap {
  img {
    width: 100%;
  }
}
.evaluate-box {
  padding: 0 30rpx;
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
.form {
  box-shadow: 3px 2px 12px 8px rgba(17, 17, 17, 0.03);
  border-radius: 8rpx;
  position: absolute;
  top: 210rpx;
  left: 30rpx;
  right: 30rpx;
  background-color: #ffffff;
}
.form-item {
  padding: 30rpx;
  border-bottom: 1rpx solid #eaeaea;
  .w120 {
    width: 160rpx;
  }
}
.pb120 {
  padding-bottom: 120rpx;
}
.back {
  background: #e32417 !important;
}
.bt {
  left: 0;
  right: 0;
  background-color: #ffffff;
  position: fixed;
  bottom: 0;
  padding-bottom: 16rpx;
  border-top: 1rpx solid #eaeaea;
  padding-top: 16rpx;
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

.mt64 {
  margin-top: 64rpx;
}
</style>
