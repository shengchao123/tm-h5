<template>
  <view class="note-detail-wrap bg-white">
    <!-- 轮播图 -->
    <carousel :imgList="detailInfo.attachments"
              :indicatorDots="true">
    </carousel>
    <!-- 用户信息 -->
    <view class="user between-row pl30 pr30 pt24 pb24">
      <view class="center-align">
        <img class="user-avatar"
             :src="avatarUrl(detailInfo.avatar)"
             alt="">
        <view class="ml16">
          <view class="flex">
            <text class="ft28">{{detailInfo.nick}}</text>
            <!-- <view class="community-title center-flex ml16">
              <text class="ft22">{{detailInfo.communityTitle}}</text>
            </view> -->
          </view>
          <text class="ft22 tip-text">{{detailInfo.time}}</text>
        </view>
      </view>
      <!-- 不是自己的笔记才会显示关注按钮 -->
      <!-- <view v-if="!detailInfo.isAuthor"
            @click="changeStatus('isAttention')"
            class="relative"
            :class="['center-flex',detailInfo.isAttention ? 'have-follow' : 'follow']">
        <get-phone-button></get-phone-button>
        <text class="ft24">{{followStatus}}</text>
      </view>
      <view v-else
            class="share-icon center-align"
            @click="onShowShareDialog('edit')">
        <text class="normal"></text>
        <text class="middle"></text>
        <text class="normal"></text>
      </view> -->
    </view>
    <!-- 商品展示 -->
    <!-- <view class="pl30 pb24"
          v-if="!$isEmpty(detailInfo.communityNoteGoodsDTOList)">
      <goods-list-in-note :goodsList="detailInfo.communityNoteGoodsDTOList"></goods-list-in-note>
    </view> -->
    <!-- 笔记内容 -->
    <view class="pt8 ml30 mr30 note-content">
      <view class="pb32 column">
        <text class="ft36 bold pb16">{{detailInfo.title}}</text>
        <text class="content ft30">{{detailInfo.content}}</text>
      </view>
      <!-- 标签 -->
      <!-- <view v-if="!this.$isEmpty(detailInfo.communityTopicDTOList)"
            class="label-list flex-wrap pb32">
        <view class="label-list-item mb16 center-flex pl16 pr16"
              v-for="(item,index) in detailInfo.communityTopicDTOList"
              :key="index"
              @click="onGoTopicDetail(item)">
          <text class="icon center-flex white-color">#</text>
          <text class="pl8">{{item.communityTopicName}}</text>
        </view>
      </view> -->
    </view>
    <!-- 评论 -->
    <view class="comment-list pt24">
      <view class="pl30 pb24 ft26">共{{commentList.length || 0}}条评论</view>
      <comments :commentList="commentList"></comments>
    </view>
    <view class="add-comment center-align pl30 pr30 bg-white between-row">
      <input ref="input"
             class="input ft28 pl20"
             v-model="content"
             placeholder="写评论"
             :focus="isFocus"
             :adjust-position="true"
             :cursor-spacing="15"
             @blur="onBlur"
             @confirm="onConfirm"
             confirm-type="发送"
             type="text" />
      <view class="tip-text ft30 flex">
        <view class="icon-item">
          <text @click="onShowShareDialog"
                class="iconfont icon_zhuanfa"></text>
        </view>
        <view class="icon-item relative"
              @click="changeStatus('isLike')">
          <get-phone-button></get-phone-button>
          <text :class="['iconfont', detailInfo.isLike ? 'icon_zan primary-color' : 'icon_zankong']"></text>
          <text class="ft26 pl8 w30 color-666">{{detailInfo.likeQuantity}}</text>
        </view>
        <view class="icon-item relative"
              @click="changeStatus('isFavorites')">
          <get-phone-button></get-phone-button>
          <text
                :class="['iconfont', detailInfo.isFavorites ? 'icon_shoucang primary-color' : 'icon_weishoucang']"></text>
          <text class="ft26 pl8 w30 color-666">{{detailInfo.favoritesQuantity}}</text>
        </view>
      </view>
    </view>
    <!-- 商品列表弹窗 -->
    <!-- <goods-list-popup ref="goodsListPopup"></goods-list-popup> -->
    <!-- <specification-select ref="specificationSelect"></specification-select> -->
    <!-- 分享弹窗 -->
    <share-dialog ref="shareDialog"
                  posterType="note"
                  shareBtns="wx moments poster"
                  sharePath="pagesDiscover/note-detail/index"
                  :posterData="posterData"
                  :shareParams="shareParams"
                  :shareData="shareData">
    </share-dialog>
  </view>
</template>
<script>
// import GoodsListInNote from '@/pages/discover/index/components/GoodsListInNote/index.vue'
// import GoodsListPopup from '@/pages/discover/index/components/GoodsListInNote/GoodsListPopup.vue';
// import SpecificationSelect from '@/pages/components/SpecificationSelect';
import Carousel from '@/pages/components/Carousel.vue'
import Comments from '@/pages/components/Comments.vue'
import ShareDialog from '@/pages/components/ShareDialog.vue';
import commentMixins from '@/mixins/comment.js'
import { avatarUrl } from '@/utils/tools'
export default {
  methods: {
    onShowShareDialog () {
      this.$refs.shareDialog.show()
    },
    onBlur () {
      this.isFocus = false
    },
    onConfirm () {
      const { content } = this
      if (this.$isEmpty(content)) {
        this.$msg('请先填写评论')
        return
      }
      const { communityNoteId } = this.detailInfo
      const params = {
        communityNoteId,
        content,
      }
      this.$api.createCommunityNoteComment(params).then(res => {
        if (res.isError) return this.$msg(res.message)
        this.$msg('评论已发布')
        this.content = ''
        this.getNoteCommentDetailPage()
      })
    },
    // 改变状态（关注，点赞，收藏）
    changeStatus (type) {
      const { communityMemberId, communityNoteId } = this.detailInfo
      const { apiName, msg, countKey, count } = this.statusMap.get(type).get(this.detailInfo[type])
      const params = {
        communityMemberId,
        communityNoteId
      }
      this.$api[apiName](params).then(res => {
        if (res.isError) {
          this.$msg(res.message)
          return
        }
        this.$msg(msg)
        // 除了关注，点赞和收藏都需要数量计算
        if (type !== 'isAttention') {
          const countNum = this.detailInfo[countKey]
          this.detailInfo[countKey] = countNum + count
        }
        this.detailInfo[type] = !this.detailInfo[type]
      })
    },
    // 跳转到话题详情
    onGoTopicDetail (item) {
      uni.navigateTo({
        url: `/pagesDiscover/topic-detail/index?communityTopicId=${item.communityTopicId}`
      });
    },
    // 分享笔记
    shareCommunityNote () {
      const { communityNoteId, shareId } = this
      let params = {}
      if (this.$isEmpty(shareId)) {
        params.sourceId = communityNoteId
      } else {
        params.shareId = shareId
      }
      this.$api.shareCommunityNote(params).then(res => {
        if (res.isError) {
          this.$msg(res.message)
          return
        }
        this.shareId = res.content.shareId
      })
    },
    // 根据分享id查询笔记详细信息
    getCommunityNoteInfoByShareId () {
      const params = {
        shareId: this.shareId
      }
      this.$api.getCommunityNoteInfoByShareId(params).then(res => {
        if (res.isError) {
          this.$msg(res.message)
          return
        }
        this.detailInfo = res.content || {}
      })
    },
    // 根据笔记id查询笔记详细信息
    getCommunityNoteInfoById () {
      const params = {
        communityNoteId: this.communityNoteId
      }
      this.$api.getCommunityNoteInfoById(params).then(res => {
        if (res.isError) {
          this.$msg(res.message)
          return
        }
        this.detailInfo = res.content || {}
      })
    },
    // getParamsInfo (scene) {
    //   const params = {
    //     code: scene
    //   }
    //   this.$api.getParamsInfo(params).then(res => {
    //     if (res.isError) return this.$msg(res.message)
    //     this.setOption(res.content)
    //   })
    // },
    setOption (option) {
      const { communityNoteId, shareId } = option
      this.communityNoteId = communityNoteId
      this.shareId = shareId
      // this.$login().then(() => {
      // 获取分享人的id
      this.shareCommunityNote()
      this.getNoteCommentDetailPage()
      // 如果没有分享人id则根据笔记id获取详情
      if (this.$isEmpty(this.shareId)) {
        this.getCommunityNoteInfoById()
        return
      }
      this.getCommunityNoteInfoByShareId()
      // })
    },
    avatarUrl
  },
  data () {
    return {
      communityNoteId: '',
      shareId: '',
      isShare: false,
      content: '',
      isFocus: false,
      detailInfo: {},
      statusMap: Object.freeze(
        new Map([
          ['isAttention', new Map([
            [true, { apiName: 'cancelAttentionUser', msg: '取消关注' }],
            [false, { apiName: 'attentionUser', msg: '已关注' }]])
          ],
          ['isLike', new Map([
            [true, { apiName: 'cancelCommunityLikeNote', msg: '取消点赞', countKey: 'likeQuantity', count: -1 }],
            [false, { apiName: 'communityLikeNote', msg: '点赞成功', countKey: 'likeQuantity', count: 1 }]])
          ],
          ['isFavorites', new Map([
            [true, { apiName: 'cancelCommunityFavoritesNote', msg: '取消收藏', countKey: 'favoritesQuantity', count: -1 }],
            [false, { apiName: 'communityFavoritesNote', msg: '收藏成功', countKey: 'favoritesQuantity', count: 1 }]])
          ],
        ])
      )
    }
  },
  computed: {
    shareData () {
      const { title, content, attachments, communityNoteId } = this.detailInfo
      return {
        title,
        desc: content,
        path: `/pagesDiscover/note-detail/index?communityNoteId=${communityNoteId}&shareId=${this.shareId}`,
        imageUrl: this.$isEmpty(attachments) ? '' : this.$imgUrlDeal(attachments[0]),
      }
    },
    posterData () {
      return {
        ...this.detailInfo
      }
    },
    shareParams () {
      return {
        communityNoteId: this.communityNoteId,
        shareId: this.shareId,
      }
    },
    followStatus () {
      const { isAttention, isFans } = this.detailInfo
      return !isAttention ? '关注' : isFans ? '互相关注' : '已关注'
    }
  },
  mixins: [commentMixins],
  components: {
    Carousel,
    // GoodsListPopup,
    // SpecificationSelect,
    // GoodsListInNote,
    Comments,
    ShareDialog
  },
  // 页面周期函数--监听页面加载
  onLoad (option) {
    // const scene = option.scene
    // if (scene) {
    //   this.getParamsInfo(scene)
    // } else {
    //   this.setOption(option)
    // }

    this.setOption(option)
  },
  //分享好友设置
  onShareAppMessage () {
    this.$refs.shareDialog.hide()
    const { title, desc, path, imageUrl } = this.shareData
    return {
      title,
      desc,
      path,
      imageUrl,
    }
  },
  //分享朋友圈设置
  onShareTimeline () {
    const { title, imageUrl, path } = this.shareData
    return {
      title,
      query: path.split('?')[1], // 页面传参
      imageUrl
    }
  },
  onPullDownRefresh () {
    uni.stopPullDownRefresh();
  },
};
</script>
<style lang='scss' scoped>
.w30 {
  display: inline-block;
  width: 30rpx;
}
.note-detail-wrap {
  .user {
    .user-avatar {
      width: 80rpx;
      height: 80rpx;
      border-radius: 50%;
    }
    .community-title {
      width: 120rpx;
      height: 36rpx;
      border: 1rpx solid #ff9708;
      border-radius: 18rpx;
      color: #ff9708;
    }
    .follow,
    .have-follow {
      padding: 0 20rpx;
      height: 48rpx;
      background: #f54400;
      border-radius: 24rpx;
      color: #fff;
      border: 1px solid #f54400;
    }
    .have-follow {
      background: #fff;
      color: #333;
      border-color: #d1d1d1;
    }
    .share-icon {
      display: flex;
      align-items: flex-start;
      padding-top: 18rpx;
      text {
        display: inline-block;
        border-radius: 50%;
      }
      text + text {
        margin-left: 6rpx;
      }
      .normal {
        width: 6rpx;
        height: 6rpx;
        background: #d8d8d8;
      }
      .middle {
        width: 8rpx;
        height: 8rpx;
        background: #666666;
      }
    }
  }
  .note-content {
    border-bottom: 1rpx solid #eaeaea;
    .content {
      line-height: 1.6;
    }
    .label-list {
      .label-list-item + .label-list-item {
        margin-left: 8rpx;
      }
      .label-list-item {
        height: 48rpx;
        background: #f3f8ff;
        border-radius: 24rpx;
        color: #518cfc;
        .icon {
          width: 28rpx;
          height: 28rpx;
          background: #518cfc;
          border-radius: 50%;
        }
      }
    }
  }
  .comment-list {
    padding-bottom: 98rpx;
  }
  .add-comment {
    position: fixed;
    bottom: 0;
    width: 100%;
    height: 98rpx;
    border-top: 1rpx solid #eaeaea;
    .input {
      width: 330rpx;
      height: 64rpx;
      background: #f4f4f4;
      border-radius: 49rpx;
    }
    .icon-item {
      margin-left: 64rpx;
    }
  }
}
</style>
