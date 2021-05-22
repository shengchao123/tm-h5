<template>
  <view>
    <view class="pb120 evaluate-box">
      <input
        type="text"
        v-model="evaluate.title"
        placeholder="有标题可以获得更多赞哦～"
        placeholder-class="place-class"
        class="ft32 bold title-style"
      />
      <textarea
        placeholder="添加正文"
        v-model="evaluate.content"
        placeholder-style="color:#999"
        maxlength="-1"
        class="text-area mt36 ft30"
      >
      </textarea>
      <view class="mt24 flex pb8">
        <upload-images
          :count="9"
          :length="9"
          :imageData.sync="evaluate.attachmentDTOList"
        ></upload-images>
      </view>
      <view class="trips between-row" @click="changeEvaluate">
        <view class="center-align">
          <svg-icon icon="icon_didian" class="ft30 mr16 color-666"></svg-icon>
          <view class="ft28">选择行程</view>
        </view>
        <view class="center-align">
          <view class="ft24 mr8 color-999">{{
            evaluateData.name ? evaluateData.name : "未选择"
          }}</view>
          <svg-icon icon="icon_xiangyoujiantou" class="ft20"></svg-icon>
        </view>
      </view>
      <select-evaluate-pop
        ref="selectRoutePop"
        :selectedId.sync="evaluate.journeyItineraryId"
        @onEvaluateItem="getEvaluateItem"
      ></select-evaluate-pop>
    </view>
    <view class="bt">
      <button class="submit tc ft32 bold" :class="isSubmit" @click="submit">
        提交
      </button>
    </view>
  </view>
</template>
<script>
import UploadImages from "@/components/upload-images";
import SelectEvaluatePop from "./components/SelectEvaluatePop.vue";

export default {
  data() {
    return {
      evaluate: {
        title: "",
        content: "",
        attachmentDTOList: [],
        journeyItineraryId: "",
      },
      evaluateData: {
        id: "",
        name: "",
      },
      communityNoteId:''
    };
  },
  methods: {
    // 提交按钮
    submit() {
      const {
        title,
        content,
        attachmentDTOList,
        journeyItineraryId,
      } = this.evaluate;
      if (
        !title ||
        !content ||
        !attachmentDTOList.length === 0 ||
        !journeyItineraryId
      ) {
        return this.$msg("请填写完整信息");
      }
      const params = {
        ...this.evaluate,
      };
      let apiName = 'createItineraryEvaluation'
      if(this.communityNoteId){
        apiName = 'modifyItineraryEvaluation'
      }
      this.$api[apiName](params).then((res) => {
        if (res.isError) return this.$msg(res.message);
        this.$msg("发布成功");
        uni.navigateBack({ delta: 1 });
      });
    },
    // 选择行程
    changeEvaluate() {
      this.$refs.selectRoutePop.show();
    },
    // 获取评价详情数据
    getEvaluateData(id) {
      const params = {
        communityNoteId: id,
      };
      this.$api.getItineraryEvaluationInfoById(params).then((res) => {
        if (res.isError) return this.$msg(res.message);
        this.evaluate = { ...res.content };
        this.evaluateData.name = res.content.journeyItineraryName
      });
    },
    // 获取选择行程数据
    getEvaluateItem(val) {
      this.evaluate.journeyItineraryId = val.id
      this.evaluateData = val;
    },
  },
  computed: {
    isSubmit() {
      const { title, content, attachmentDTOList,journeyItineraryId } = this.evaluate;
      if (title && content && attachmentDTOList.length > 0 && journeyItineraryId) {
        return "back";
      }
      return "";
    },
  },
  onLoad(option) {
    if (option.id) {
      this.communityNoteId = option.id
      this.getEvaluateData(option.id);
    }
  },
  components: { UploadImages, SelectEvaluatePop },
};
</script>
<style lang="scss" scoped>
.evaluate-box {
  padding: 0 30rpx;
  .place-class {
    font-weight: 100;
  }
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
  .submit {
    width: 690rpx;
    height: 88rpx;
    line-height: 88rpx;
    border-radius: 49rpx;
    color: #ffffff;
    background: #cccccc;
  }
}
</style>
