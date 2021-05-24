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
          </view>
          <view class="ft22 color-999">
            <text class="mr40">{{detailInfo.orgName}}</text>
            <text>{{detailInfo.time}}</text>
          </view>
        </view>
      </view>
    </view>
    <!-- 笔记内容 -->
    <view class="pt8 ml30 mr30 note-content">
      <view class="pb32 column">
        <text class="ft36 bold pb16">{{detailInfo.title}}</text>
        <text class="content ft30">{{detailInfo.content}}</text>
      </view>
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
             placeholder="随便说点什么～"
             :focus="isFocus"
             :adjust-position="true"
             :cursor-spacing="15"
             @blur="onBlur"
             @confirm="onConfirm"
             confirm-type="发送"
             type="text" />
      <view class="tip-text ft30 flex">
        <view class="icon-item">
          <view @click="onShowShareDialog">
            <svg-icon icon="icon_zhuanfa"></svg-icon>
            <text class="ft26 pl8 color-666">{{detailInfo.shareQuantity}}</text>
          </view>
        </view>
        <view class="icon-item relative"
              @click="changeStatus('isLike')">
          <svg-icon :icon="detailInfo.isLike ? 'icon_shoucang' : 'icon_weishoucang'"
                    :class="['iconfont ft32',detailInfo.isLike ? 'primary-color' : 'color-999']"></svg-icon>
          <text class="ft26 pl8 w30 color-666">{{detailInfo.likeQuantity}}</text>
        </view>
      </view>
    </view>
    <!-- 分享弹窗 -->
    <share-dialog ref="shareDialog"
                  :shareData="shareData">
    </share-dialog>
  </view>
</template>
<script>
import Carousel from '@/pages/components/Carousel.vue'
import Comments from '@/pages/components/Comments.vue'
import ShareDialog from '@/pages/components/ShareDialog.vue';
import commentMixins from '@/mixins/comment.js'
import { avatarUrl } from '@/utils/tools'
export default {
  methods: {
    avatarUrl,
    onShowShareDialog () {
      if (this.$notMember()) return this.$goLogin()
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
      if (this.$notMember()) return this.$goLogin();
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
    // 根据id查询笔记详细信息
    getNoteDetailInfo () {
      // 如果没有分享人id则根据笔记id获取详情
      const params = this.$isEmpty(this.shareId) ? { communityNoteId: this.communityNoteId } : { shareId: this.shareId }
      const apiName = this.$isEmpty(this.shareId) ? 'getCommunityNoteInfoById' : 'getCommunityNoteInfoByShareId'
      this.$api[apiName](params).then(res => {
        if (res.isError) {
          this.$msg(res.message)
          return
        }
        this.detailInfo = res.content || {}
      })
    },
    setOption (option) {
      const { communityNoteId, shareId } = option
      this.communityNoteId = communityNoteId
      this.shareId = shareId
      // 获取分享人的id
      this.shareCommunityNote()
      this.getNoteCommentDetailPage()
      this.getNoteDetailInfo()
    },
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
      const { title, content, attachments } = this.detailInfo
      return {
        title,
        desc: content,
        link: window.location.href,
        imgUrl: this.$isEmpty(attachments) ? '' : this.$sourceUrl(attachments[0]),
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
    Comments,
    ShareDialog
  },
  onShow () {
    this.shareCommunityNote()
    this.getNoteCommentDetailPage()
    this.getNoteDetailInfo()
  },
  // 页面周期函数--监听页面加载
  onLoad (option) {
    this.setOption(option)
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
