<template>
  <div class='resource-item-wrap mb20'
       @click="onNoteDetail">
    <div class="wrap">
      <div class="info clearfix">
        <img :src="fileHost + resourceItem.item.avatar"
             class="avatar mr16 fl">
        <div class="name fl">
          <div class="ft28 medium">{{resourceItem.item.nick}}</div>
          <div class="ft22 color-999 mt8">{{resourceItem.item.time}}</div>
        </div>
        <slot></slot>
        <div class="tag fr ft22 color-999">房产商铺</div>
      </div>
      <div class="content">
        <div class="bold ft34 mt24">{{resourceItem.item.title}}</div>

        <div class="relative"
             @click.stop>
          <u-read-more close-text="...展开"
                       @open="open"
                       font-size="24"
                       color="#E32417 "
                       text-indent="0"
                       :shadow-style="{backgroundImage: 'none'}"
                       show-height="80">
            <rich-text :nodes="resourceItem.item.content"></rich-text>
          </u-read-more>
        </div>
      </div>

      <div class="contact center-align ft26">
        <template v-for="obj in contactItems">
          <div class="mt16 item center-align"
               :key="obj.key"
               v-if="resourceItem.item[obj.key]">
            <div class="color-999">{{obj.label}}</div>
            <div>{{resourceItem.item[obj.key]}}</div>
          </div>
        </template>
      </div>
    </div>

    <view class="pl30 pr30 mb20">
      <ImgGroup :imgList="resourceItem.item.attachments"></ImgGroup>
    </view>

    <!-- 底部 点赞 分享 -->
    <view class="pl30 pr30">
      <ItemFooter :notesItem="resourceItem.item"
                  :notesIndex="resourceItem.index"
                  @setNotesItem="setNotesItem"></ItemFooter>
    </view>

    <ShareDialog ref="shareDialog"
                 :shareData="shareData"></ShareDialog>
    <SendCommentPopup ref="sendCommentPopup"></SendCommentPopup>
    <CommentListPopup ref="commentListPopup"></CommentListPopup>
  </div>
</template>

<script>
import ImgGroup from '@/pages/union/interact/components/ImgGroup'
import ItemFooter from '@/pages/union/interact/components/ItemFooter'
import ShareDialog from '@/pages/components/ShareDialog'
import SendCommentPopup from '@/pages/union/interact/components/SendCommentPopup'
import CommentListPopup from '@/pages/union/interact/components/CommentListPopup'
import { dateForHowLongBefore } from '@u/date.js'

export default {
  name: 'ResourceItem',
  methods: {
    onNoteDetail () {
      const { communityNoteId } = this.resourceItem.item
      uni.navigateTo({
        url: `/pages/union/interact/note-detail/index?communityNoteId=${communityNoteId}`
      })
    },
    setNotesItem (item, index) {
      this.$emit('setNotesItem', item, index)
    },
    setShareData (shareData) {
      this.shareData = JSON.parse(JSON.stringify(shareData))
      this.$refs.shareDialog.show()
    },
    onShowCommentListPopup (communityNoteId) {
      this.$refs.commentListPopup.show(communityNoteId)
    },
    onShowSendCommentPopup (communityNoteId) {
      this.$refs.sendCommentPopup.show(communityNoteId)
    }
  },
  components: { ImgGroup, ItemFooter, ShareDialog, SendCommentPopup, CommentListPopup },
  provide () {
    return {
      setShareData: this.setShareData,
      onShowCommentListPopup: this.onShowCommentListPopup,
      onShowSendCommentPopup: this.onShowSendCommentPopup
    }
  },
  data () {
    return {
      shareData: {},
      contactItems: Object.freeze([
        {
          key: 'contactPerson',
          label: '联系人：'
        },
        {
          key: 'contactPhone',
          label: '电话：'
        },
        {
          key: 'weChatNumber',
          label: '微信：'
        }
      ])
    }
  },
  props: {
    resourceItem: Object
  },
  computed: {
    time () {
      return dateForHowLongBefore(this.resourceItem.item.time)
    },
    fileHost () {
      return this.$fileHost
    }
  }
}
</script>

<style lang='scss' scoped>
.resource-item-wrap {
  .wrap {
    padding: 30rpx;
  }
  background: #ffffff;
  .info {
    .avatar {
      width: 80rpx;
      height: 80rpx;
      border-radius: 50rpx;
    }
  }
  .contact {
    flex-wrap: wrap;
    .item {
      width: 50%;
    }
  }
  /deep/ .u-content {
    color: #333333;
    font-size: 26rpx;
  }
  /deep/ .u-content__showmore-wrap {
    position: absolute;
    right: 0;
    top: 56rpx;
    background: #ffffff;
    width: 104rpx;
  }
}
</style>
