<template>
  <div class='detail-wrap'>
    <div class="title pt28 pl30 pr30">
      <div class="ft36 mb20 bold">{{baseInfo.title}}</div>
      <div class="ft26 color-666">
        <span class="mr40">{{$moment(baseInfo.createTime).format('YYYY-MM-DD')}}</span>
        <span>{{baseInfo.orgName}}</span>
      </div>
    </div>
    <div class="content mt30 pl30 pr30 pb30">
      <div v-if="baseInfo.contentType === '03' || baseInfo.contentType === '04'"
           class="ft30 mb20">{{baseInfo.digest}}</div>
      <div v-if="baseInfo.contentType === '01'"
           class="type-01"
           v-html="baseInfo.content"></div>
      <div v-if="baseInfo.contentType === '03'"
           class="type-03">
        <div class="img-list between-row">
          <div v-for="(item, index) in baseInfo.photoWallList"
               :key="index"
               class="img-item mb20"
               @click.stop="onShowBigImgView(index)">
            <img :src="$fileHost + item.imageUrl">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'name',
  methods: {
    onShowBigImgView (index) {
      const urls = this.baseInfo.photoWallList.map(el => this.$fileHost + el.imageUrl)
      uni.previewImage({
        urls: urls,
        current: index,
      })
    },
    getGraphicInfoById () {
      const params = {
        id: this.id
      }
      this.$api.getGraphicInfoById(params).then(res => {
        if (res.isError) return this.$msg(res.message)
        this.baseInfo = res.content
      })
    }
  },
  data () {
    return {
      baseInfo: {
        "content": "<p>地方撒旦发生分解啊法慢法门寺法慢发</p>",
        "contentType": "03",
        "contentTypeName": "",
        orgName: '小阿三大苏打',
        "digest": "发短发撒发顺丰安抚啊发放安抚啊发放啊啊啊",
        "hyperlinksUrl": "",
        "imageUrl": "",
        "photoWallList": [
          {
            "description": "",
            "imageUrl": "material/image/2021051819245642835059756182528.jpg"
          },
          {
            "description": "",
            "imageUrl": "material/image/2021051819245642835059756182528.jpg"
          },
          {
            "description": "",
            "imageUrl": "material/image/2021051819245642835059756182528.jpg"
          },
          {
            "description": "",
            "imageUrl": "material/image/2021051819245642835059756182528.jpg"
          },
          {
            "description": "",
            "imageUrl": "material/image/2021051819245642835059756182528.jpg"
          }
        ],
        "title": "线上线下联动，学雷锋树新风",
        "videoLinkUrl": "",
        createTime: 1231414000000
      }
    }
  },
  onLoad (option) {
    this.id = option.id
    // this.getGraphicInfoById()
  }
}
</script>
<style>
page {
  height: 100%;
  background: #fff;
}
</style>
<style lang='scss' scoped>
.detail-wrap {
  color: #333;
  .type-01 {
    img {
      width: 100%;
      height: 100%;
    }
  }
  .type-03 {
    .img-list {
      flex-wrap: wrap;
      .img-item {
        width: 336rpx;
        height: 336rpx;
        border-radius: 8rpx;
        overflow: hidden;
      }
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
}
</style>