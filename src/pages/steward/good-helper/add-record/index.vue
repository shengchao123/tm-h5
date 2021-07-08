<template>
  <div class='record-wrap'>
    <u-form ref="form"
            :model="form.data">
      <div class="pl32 pr32 bg-white">
        <u-form-item label="跟进状态"
                     label-width="192"
                     prop="peopleQuantity">

        </u-form-item>
        <u-form-item label="记录时间"
                     label-width="192"
                     prop="playDays">

        </u-form-item>
        <u-form-item label="记录内容"
                     label-position="top"
                     :border-bottom="false"
                     prop="demand">
          <div class="flex1">
            <u-input v-model="form.data.demand"
                     type="textarea"
                     height="160"
                     maxlength="200"
                     placeholder="输入内容，记录项目的服务进度" />
            <div class="ft22 color-999"
                 style="text-align: right; line-height: 24rpx">{{form.data.demand.length}}/200</div>
          </div>
        </u-form-item>

      </div>
      <div class="mt24 pl32 bg-white">
        <u-form-item label="图片上传（非必填）"
                     label-width="192"
                     label-position="top"
                     prop="playDays">
          <upload-images :count="3"
                         :length="3"
                         :imageData.sync="form.data.attachmentDTOList"></upload-images>
        </u-form-item>
      </div>
    </u-form>
    <div class="footer-btn pl32 pr32">
      <div class="submit tc mt16 ft32 medium"
           :class="isDisabled && 'disabled'"
           @click="onSubmit">提交</div>
    </div>
  </div>
</template>
<script>
import UploadImages from "@/components/upload-images";

export default {
  methods: {
    onSubmit () {
      this.$refs.form.validate(valid => {
        if (valid) {
          if (this.journeyPlayCustomizationId) {
            this.modifyJourneyPlayCustomizationInfoById()
          } else {
            this.createJourneyPlayCustomization()
          }
        }
      })
    },
    createJourneyPlayCustomization () {
      const params = {
        ...this.form.data
      }
      this.$api.createJourneyPlayCustomization(params).then(res => {
        if (res.isError) return this.$msg(res.message)
        this.$msg('定制发布成功')
        setTimeout(() => {
          uni.navigateBack()
        }, 500)
      })
    },
    modifyJourneyPlayCustomizationInfoById () {
      const params = {
        journeyPlayCustomizationId: this.journeyPlayCustomizationId,
        ...this.form.data
      }
      this.$api.modifyJourneyPlayCustomizationInfoById(params).then(res => {
        if (res.isError) return this.$msg(res.message)
        this.$msg('定制编辑成功')
        setTimeout(() => {
          uni.$emit('editCustomMadeOver')
          uni.navigateBack()
        }, 500)
      })
    },
    setFormData (formData) {
      const { contactPhone, demand, peopleQuantity, playDays } = formData
      this.form.data = {
        peopleQuantity: peopleQuantity + '',
        playDays: playDays + '',
        contactPhone: contactPhone + '',
        demand,
      }
    },
    getJourneyPlayCustomizationInfoById (id) {
      const params = {
        journeyPlayCustomizationId: id
      }
      this.$api.getJourneyPlayCustomizationInfoById(params).then(res => {
        if (res.isError) return this.$msg(res.message)
        this.setFormData(res.content)
      })
    }
  },
  data () {
    return {
      form: {
        data: {
          peopleQuantity: null,
          playDays: null,
          contactPhone: null,
          demand: '',
          attachmentDTOList: []
        },
        rules: {
          peopleQuantity: [{ required: true, message: '输入人数', trigger: ['change', 'blur'] }],
          playDays: [{ required: true, message: '输入游玩天数', trigger: ['change', 'blur'] }],
          contactPhone: [{ required: true, trigger: ['change', 'blur'] }],
          demand: [{ required: true, message: '输入定制需求', trigger: ['change', 'blur'] }],
        }
      }
    }
  },
  computed: {
    isDisabled () {
      const { peopleQuantity, playDays, contactPhone, demand } = this.form.data
      return !(peopleQuantity && playDays && contactPhone && demand)
    }
  },
  onReady () {
    this.$refs.form.setRules(this.form.rules);
  },
  onLoad ({ id }) {
    if (id) {
      uni.setNavigationBarTitle({
        title: '编辑记录'
      });
      this.journeyPlayCustomizationId = id
      this.getJourneyPlayCustomizationInfoById(id)
    }
  },
  components: { UploadImages }
}
</script>
<style>
page {
  height: 100%;
  background: #f7f7f7;
}
</style>
<style lang='scss' scoped>
.record-wrap {
  .footer-btn {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    height: 128rpx;
    background: #fff;
    .submit {
      width: 100%;
      height: 98rpx;
      line-height: 98rpx;
      border-radius: 50rpx;
      background: #e32417;
      color: #fff;
    }
    .disabled {
      background: #ccc;
    }
  }
}
</style>