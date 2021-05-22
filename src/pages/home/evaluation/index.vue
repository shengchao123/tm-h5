<template>
  <view class="evaluate-box">
    <view class="pb120">
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
        maxlength="-1"
        class="text-area mt36 ft30"
      >
      </textarea>
      <view class="mt24 flex pb8">
        <upload-images
          :count="9"
          :length="9"
          :imageData.sync="evaluate.imageList"
        ></upload-images>
      </view>
      <view class="trips between-row">
        <view class="center-align">
          <svg-icon icon="icon_didian" class="ft30 mr16"></svg-icon>
          <view>选择行程</view>
        </view>
        <view class="center-align">
          <svg-icon icon="icon_xiangyoujiantou" class="ft20"></svg-icon>
        </view>
      </view>
    </view>
    <button class="submit tc ft32 bold" :class="isSubmit" @click="submit">
      提交
    </button>
  </view>
</template>
<script>
import UploadImages from "@/components/upload-images";

export default {
  data() {
    return {
      evaluate: {
        title: "",
        content: "",
        imageList: [],
      },
    };
  },
  methods: {
    // 提交按钮
    submit() {
      const { title, content, imageList } = this.evaluate;
      if (title && content && imageList.length > 0) {
        return;
      }
    },
  },
  computed: {
    isSubmit() {
      const { title, content, imageList } = this.evaluate;
      if (title && content && imageList.length > 0) {
        return "back";
      }
      return "";
    },
  },
  components: { UploadImages },
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
    border-bottom: 1rpx solid #eaeaea;
  }
  .submit {
    position: fixed;
    bottom: 16rpx;
    width: 690rpx;
    height: 88rpx;
    line-height: 88rpx;
    border-radius: 49rpx;
    color: #ffffff;
    background: #cccccc;
  }
}
.pb120 {
  padding-bottom: 120rpx;
}
.back {
  background: #e32417 !important;
}
</style>
