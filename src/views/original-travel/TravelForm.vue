<template>
  <div class='travel-form-wrap'>

    <van-form @submit="onSubmit">

      <van-field value="2021-3-8"
                 readonly
                 label-width="60"
                 label-class="color-333 bold"
                 label="日期" />

      <van-field value="18~25℃ 晴朗"
                 readonly
                 label-width="60"
                 label-class="color-333 bold"
                 label="天气" />

      <van-field v-model="form.username"
                 name="用户名"
                 label="用户名"
                 label-width="60"
                 label-class="color-333 bold"
                 placeholder="用户名"
                 :rules="[{ required: true, message: '请填写用户名' }]" />

      <van-field v-model="form.password"
                 type="password"
                 name="密码"
                 label="密码"
                 label-width="60"
                 label-class="color-333 bold"
                 placeholder="密码"
                 :rules="[{ required: true, message: '请填写密码' }]" />

      <van-field label="行程时长"
                 label-width="60"
                 label-class="color-333 bold">
        <template #input>
          <van-radio-group v-model="form.travelTime">
            <!-- 两端对齐 -->
            <van-row type="flex"
                     gutter="12"
                     justify="space-between">
              <van-col span="8"
                       v-for="(item, index) in travelTimeOptions"
                       :key="item.id">
                <van-radio :name="item.id"
                           :class="index !== 3 && 'mb16'">{{item.name}}</van-radio>
              </van-col>
            </van-row>
          </van-radio-group>
        </template>
      </van-field>

      <van-field label="行政类型"
                 label-width="60"
                 label-class="color-333 bold">
        <template #input>
          <van-radio-group v-model="form.administrativeType">
            <!-- 两端对齐 -->
            <van-row type="flex"
                     justify="space-between">
              <van-col span="8"
                       v-for="(item, index) in administrativeTypeOptions"
                       :key="item.id">
                <van-radio :name="item.id"
                           :class="index !== 3 && 'mb16'">{{item.name}}</van-radio>
              </van-col>
            </van-row>
          </van-radio-group>
        </template>
      </van-field>

      <van-field v-model="form.password"
                 name="密码"
                 label="组织员"
                 label-width="60"
                 label-class="color-333 bold"
                 placeholder="请输入组织员"
                 :rules="[{ required: true, message: '请填写密码' }]" />

      <van-field v-model="form.test"
                 name="密码"
                 label="联系方式"
                 label-width="60"
                 label-class="color-333 bold"
                 placeholder="请输入联系方式"
                 :rules="[{ required: true, message: '请填写密码' }]" />

      <van-field v-model="form.password"
                 name="密码"
                 label="参加人员"
                 label-width="60"
                 label-class="color-333 bold"
                 placeholder="请输入参加人员姓名"
                 :rules="[{ required: true, message: '请填写密码' }]" />

      <div style="margin: 16px;">
        <van-button round
                    block
                    type="info"
                    native-type="submit">提交</van-button>
      </div>
    </van-form>
  </div>
</template>

<script>
export default {
  name: 'TravelForm',
  methods: {
    onSubmit (values) {
      console.log('submit', this.form)
    }
  },
  data () {
    return {
      form: {},
      travelTimeOptions: Object.freeze([
        {
          id: '1',
          name: '半天'
        },
        {
          id: '2',
          name: '全天'
        },
        {
          id: '3',
          name: '两天'
        },
        {
          id: '4',
          name: '自定义'
        }
      ]),
      administrativeTypeOptions: Object.freeze([
        {
          id: '1',
          name: '党组班子会'
        },
        {
          id: '2',
          name: '党小组会'
        },
        {
          id: '3',
          name: '党员大会'
        },
        {
          id: '4',
          name: '党课'
        },
        {
          id: '5',
          name: '主题党课'
        },
        {
          id: '6',
          name: '其他'
        }
      ])
    }
  }
}
</script>

<style lang='scss' scoped>
.travel-form-wrap {
}
</style>
