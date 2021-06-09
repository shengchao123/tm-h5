<template>
  <div class='resource-item-wrap '>
    <div class="info clearfix">
      <img :src="fileHost + item.avatar"
           class="avatar mr16 fl">
      <div class="name fl">
        <div class="ft28 medium">{{item.nick}}</div>
        <div class="ft22 color-999 mt8">{{time}}</div>
      </div>
      <div class="tag fr ft22 color-999">房产商铺</div>
    </div>

    <div class="content">
      <div class="bold ft34 mt24">{{item.title}}</div>

      <u-read-more close-text="...展开"
                   font-size="24"
                   color="#E32417 "
                   :text-indent="0"
                   :shadow-style="{backgroundImage: 'none'}"
                   show-height="100">
        <rich-text :nodes="item.content"></rich-text>
      </u-read-more>
    </div>

  </div>
</template>

<script>
// {
//           "attachments": ['material/image/2021060718345744643854677149696.jpg', 'material/image/2021060718345744643854677149696.jpg'],
//           "avatar": "material/image/2021060718345744643854677149696.jpg",
//           "contactPerson": "挠挠",
//           "contactPhone": "1245234345",
//           "content": "圣诞节分离技术老地方见老师肯定积分啦是看见埃里克我就发了卡时间的浪费路上看到飞机为了看风景阿老师肯定积分了我就发了卡视角的反抗了所经历的看风景",
//           "nick": "我是昵称",
//           "resourceTypeName": "房产商铺",
//           "time": 1623204876804,
//           "title": "我是标题",
//           "weChatNumber": "微信小号"
//         }
import { dateForHowLongBefore } from '@u/date.js'

export default {
  name: 'ResourceItem',
  data () {
    return {

    }
  },
  props: {
    item: Object
  },
  computed: {
    time () {
      return dateForHowLongBefore(this.item.time)
    },
    fileHost () {
      return this.$fileHost
    }
  }
}
</script>

<style lang='scss' scoped>
.resource-item-wrap {
  padding: 30rpx;
  background: #ffffff;
  .info {
    .avatar {
      width: 80rpx;
      height: 80rpx;
      border-radius: 50rpx;
    }
  }
  /deep/ .u-content__showmore-wrap {
    position: absolute;
    right: 0;
    top: 60rpx;
    background: #ffffff;
    width: 120rpx;
  }
}
</style>
