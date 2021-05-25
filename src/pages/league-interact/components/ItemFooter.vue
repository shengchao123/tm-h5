<template>
  <view class='item-footer-wrap'>
    <view class="between-row">
      <view class="pt12 center-align"
            style="width: 80rpx; height: 72rpx"
            @click.stop="onShare">
        <svg-icon icon="icon_zhuanfa"
                  class="ft28 color-999"></svg-icon>
        <text class="ft26 color-333 ml8">{{notesItem.shareQuantity}}</text>
      </view>
      <view class="center-align pg12">
        <view class="trigger-area relative center-align pl32"
              @click.stop="onLike">
          <text class="ft28  mr8"
                :class="notesItem.isLike ? 'icon_zan primary-color' : 'icon_zankong color-999'"></text>
          <svg-icon :icon="notesItem.isLike ? 'icon_shoucang' : 'icon_weishoucang'"
                    class="ft28 color-999 mr8"
                    :class="notesItem.isLike ? 'primary-color' : 'color-999'"></svg-icon>
          <text class="ft26"
                :class="notesItem.isLike ? 'primary-color' : 'color-666'">{{notesItem.likeQuantity}}</text>
        </view>
        <view class="trigger-area relative center-align pl32"
              @click.stop="onComment">
          <svg-icon icon="icon_pinglun"
                    class="ft28 color-999 mr8"></svg-icon>
          <text class="ft26 color-666">{{notesItem.commentQuantity}}</text>
        </view>
      </view>
    </view>
    <view class="pb30"
          v-if="commentList.length > 0">
      <view class="comment-list"
            @click.stop="onShowCommentList">
        <view v-for="(item, index) in commentList || []"
              :key="index"
              class="comment-item">
          <text class="ft24 medium">{{item.nick}}：</text>
          <text class="ft24">{{item.comment}}</text>
        </view>
      </view>
    </view>
  </view>
</template>
<script>
export default {
  methods: {
    // 点赞
    onLike () {
      if (this.$notMember()) return this.$goLogin()
      const notesItem = this.notesItem
      let { communityNoteId, isLike, likeQuantity } = notesItem
      const params = {
        communityNoteId,
      }
      notesItem.isLike = !isLike
      const apiName = isLike ? 'cancelCommunityLikeNote' : 'communityLikeNote'
      this.$api[apiName](params).then(res => {
        if (res.isError) return this.$msg(res.message)
        notesItem.isLike = !isLike
        notesItem.likeQuantity = isLike ? likeQuantity - 1 : likeQuantity + 1
        this.$emit('setNotesItem', notesItem, this.notesIndex)
      })
    },
    // 评论
    onComment () {
      if (this.$notMember()) return this.$goLogin()
      if (!this.memberPersonalInfo.isRealName) {
        uni.showModal({
          title: '请先实名认证',
          content: '认证后，即可发布帖子，评论',
          cancelText: "取消",
          confirmText: "实名认证",
          confirmColor: '#E32417',
          success: function (res) {
            if (res.confirm) {
              uni.navigateTo({
                url: '/pages/mine/real-name/index'
              })
            }
          }
        })
        return
      }
      this.onShowSendCommentPopup(this.notesItem.communityNoteId)
    },
    // 分享
    onShare () {
      if (this.$notMember()) return this.$goLogin()
      const { title, content, communityNoteId } = this.notesItem
      const params = {
        sourceId: communityNoteId
      }
      this.$api.shareCommunityNote(params).then(res => {
        if (res.isError) return this.$msg(res.message)
        const { shareId } = res.content
        const link = window.location.href.split('/pages')[0] + `/pages/league-interact/note-detail/index?communityNoteId=${communityNoteId}&shareId=${shareId}`
        const shareData = {
          link,
          title,
          desc: content,
        }
        console.log(shareData)
        this.setShareData(shareData)
      })

    },
    // 查看评论列表
    onShowCommentList () {
      // this.onShowCommentListPopup(this.notesItem.communityNoteId)
    }
  },
  inject: ['setShareData', 'onShowCommentListPopup', 'onShowSendCommentPopup'],
  props: {
    notesItem: {
      type: Object,
      default: () => ({})
    },
    notesIndex: Number,
  },
  data () {
    return {
      showCommentBox: false,
      content: '',
    }
  },
  computed: {
    memberPersonalInfo () {
      return this.$store.state.user.memberPersonalInfo
    },
    commentList () {
      const { communityNoteCommentList } = this.notesItem
      if (!communityNoteCommentList) return []
      if (communityNoteCommentList.length > 3) {
        communityNoteCommentList.length = 3
      }
      return communityNoteCommentList
    }
  }
}
</script>
<style lang='scss' scoped>
.item-footer-wrap {
  color: #333;
  .trigger-area {
    height: 72rpx;
  }
  .comment-list {
    background: #f2f2f2;
    border-radius: 10rpx;
    padding: 20rpx 24rpx;
  }
  .comment-box {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    top: 0;
    z-index: 6;
    .mask {
      position: absolute;
      top: 0;
      right: 0;
      left: 0;
      bottom: 0;
      background: rgba(0, 0, 0, 0.3);
    }
    .input-box {
      position: absolute;
      bottom: 0rpx;
      left: 0rpx;
      right: 0rpx;
      height: 98rpx;
      box-sizing: border-box;
      background: #fff;
      .input {
        width: 100%;
        height: 98rpx;
        padding: 30rpx;
        box-sizing: border-box;
      }
    }
  }
}
</style>
