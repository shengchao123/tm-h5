(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-union-interact-note-detail-index"],{"0f35":function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={data:function(){return{showHomeBtn:!1,isShareIn:!1}},methods:{onPage:function(){this.isShareIn&&(this.showHomeBtn=!this.showHomeBtn)},scrollToTop:function(){document.documentElement.scrollTop=0,document.body.scrollTop=0}},onLoad:function(t){t.masterOrgId&&(this.showHomeBtn=!0,this.isShareIn=!0,uni.setStorageSync("masterOrgId",t.masterOrgId),uni.setStorageSync("orgId",t.masterOrgId))}},o=a;e.default=o},"109b":function(t,e,i){var a=i("4bad");e=a(!1),e.push([t.i,'@charset "UTF-8";\n/* uni.scss */\n/* 页面左右间距 */\n/* 文字尺寸 */\n/*文字颜色*/\n/* 图片加载中颜色 */\n/* 行为相关颜色 */\n/* 边框颜色 */.color-primary[data-v-53d1b0dc]{color:#3049c0}.color-333[data-v-53d1b0dc]{color:#333}.color-666[data-v-53d1b0dc]{color:#666}.color-999[data-v-53d1b0dc]{color:#999}.bg-color[data-v-53d1b0dc]{background-color:#f7f7f7}.bg-white[data-v-53d1b0dc]{background-color:#fff}.white-color[data-v-53d1b0dc]{color:#fff}.primary-color[data-v-53d1b0dc]{color:#f54400}.success-color[data-v-53d1b0dc]{color:#0e130f}.warning-color[data-v-53d1b0dc]{color:#f0ad4e}.error-color[data-v-53d1b0dc]{color:#dd524d}.primary-text[data-v-53d1b0dc]{color:#333}.secondary-text[data-v-53d1b0dc]{color:#666}.tip-text[data-v-53d1b0dc]{color:#999}.color-e32417[data-v-53d1b0dc]{color:#e32417}.user-img[data-v-53d1b0dc]{width:%?48?%;height:%?48?%;border-radius:50%}.w91[data-v-53d1b0dc]{width:91%}.author[data-v-53d1b0dc]{padding:%?8?% %?20?%;background:#eee;border-radius:%?20?%}.w520[data-v-53d1b0dc]{width:%?520?%;white-space:pre-wrap}.f518[data-v-53d1b0dc]{color:#518cfc}.ml64[data-v-53d1b0dc]{margin-left:%?64?%}',""]),t.exports=e},"11c5":function(t,e,i){"use strict";var a;i.d(e,"b",(function(){return o})),i.d(e,"c",(function(){return n})),i.d(e,"a",(function(){return a}));var o=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"pl30 pr30"},t._l(t.comments,(function(e,a){return i("v-uni-view",{key:a,staticClass:"bt pb32 mb32"},[i("v-uni-view",{staticClass:"flex"},[i("v-uni-image",{staticClass:"mr16 user-img",attrs:{src:t.avatarUrl(e.avatar),alt:""},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.toPerson(e)}}}),i("v-uni-view",{staticClass:"w91"},[i("v-uni-view",{staticClass:"between-row mt12"},[i("v-uni-view",[i("v-uni-view",{staticClass:"color-999 ft24 flex"},[t._v(t._s(e.nick)),e.isAuthor?i("v-uni-view",{staticClass:"author ft20 color-666 ml8 tc"},[t._v("作者")]):t._e()],1),i("v-uni-view",{staticClass:"center-align mt20"},[i("v-uni-view",{staticClass:"ft26"},[t._v(t._s(e.content))]),i("v-uni-view",{staticClass:"ml12 color-999 ft22 mr24 no-wrap"},[t._v(t._s(e.commentTime))])],1)],1),i("v-uni-view",{staticClass:"tc relative"},[i("v-uni-view",{on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.onLike(e)}}},[i("svg-icon",{class:["ft32",e.isLike?"primary-color":"color-999"],attrs:{icon:e.isLike?"icon_shoucang":"icon_weishoucang"}})],1),i("v-uni-view",{staticClass:"mt20 ft22"},[t._v(t._s(e.likeCount))])],1)],1),e.children?i("recursive-comments",{attrs:{commentChildren:e.children,commentList:t.comments,index:a},on:{getCommentsStatus:function(e){arguments[0]=e=t.$handleEvent(e),t.getCommentsStatus.apply(void 0,arguments)}}}):t._e()],1)],1)],1)})),1)},n=[]},2909:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=c;var a=s(i("6005")),o=s(i("db90")),n=s(i("06c5")),r=s(i("3427"));function s(t){return t&&t.__esModule?t:{default:t}}function c(t){return(0,a.default)(t)||(0,o.default)(t)||(0,n.default)(t)||(0,r.default)()}},"2d21":function(t,e,i){"use strict";var a=i("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,i("d81d");var o=a(i("2909")),n=a(i("6155")),r=i("b893"),s={methods:{onLike:function(t){if(this.$notMember())return this.$goLogin();this.dealLike(t)},dealLike:function(t){var e=this,i={communityNoteCommentId:t.id},a="";a=t.isLike?"cancelCommunityLikeNoteComment":"communityLikeNoteComment",this.$api[a](i).then((function(i){if(i.isError)return e.$msg(i.message);e.$msg(t.isLike?"取消点赞":"点赞成功"),t.isLike?t.likeCount=t.likeCount-1:t.likeCount=t.likeCount+1,t.isLike=!t.isLike}))},getCommentsStatus:function(t){this.commentList=(0,o.default)(t)},toPerson:function(t){uni.navigateTo({url:"/pagesDiscover/personalCenter/index?id=".concat(t.communityMemberId)})},avatarUrl:r.avatarUrl},computed:{comments:function(){return this.commentList.map((function(t){t.showMore=!1})),this.commentList}},props:{commentList:{type:Array,default:function(){return[]}}},components:{RecursiveComments:n.default}};e.default=s},"2ead":function(t,e,i){"use strict";var a=i("d4eb"),o=i.n(a);o.a},3427:function(t,e,i){"use strict";function a(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}Object.defineProperty(e,"__esModule",{value:!0}),e.default=a},3583:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={data:function(){return{commentList:[],communityNoteId:void 0}},methods:{getNoteCommentDetailPage:function(){var t=this,e={communityNoteId:this.communityNoteId};this.$api.getNoteCommentDetailPage(e).then((function(e){e.isError&&t.$msg(e.message);var i=e.content.items;t.commentList=i}))}}},o=a;e.default=o},"49af":function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,i("a9e3");var a=i("b893"),o={name:"recursive",data:function(){return{showMore:!1}},methods:{onPersonalCenter:function(t){uni.navigateTo({url:"/pagesDiscover/personalCenter/index?id=".concat(t.id)})},onLike:function(t,e,i){var a=this;if(this.$notMember())return this.$goLogin();var o="",n={communityNoteId:t.communityNoteId};o=t.isLike?"cancelCommunityLikeNoteComment":"communityLikeNoteComment";var r=2===i?"otherChildren":"children";this.$api[o](n).then((function(i){if(i.isError)return a.$msg(i.message);a.$msg(t.isLike?"取消点赞":"点赞成功");var o=a.commentList[a.index][r][e];t.isLike?o.likeCount=o.likeCount-1:o.likeCount=o.likeCount+1,o.isLike=!o.isLike,a.$emit("getCommentsStatus",a.commentList)}))},lookMore:function(){this.showMore=!this.showMore},avatarUrl:a.avatarUrl},props:{commentChildren:{type:Array,default:function(){return[]}},commentList:{type:Array,default:function(){return[]}},index:{type:Number,default:function(){return""}}}};e.default=o},"4cac":function(t,e,i){"use strict";i.r(e);var a=i("873b"),o=i("fc80");for(var n in o)["default"].indexOf(n)<0&&function(t){i.d(e,t,(function(){return o[t]}))}(n);i("dc5f");var r,s=i("f0c5"),c=Object(s["a"])(o["default"],a["b"],a["c"],!1,null,"e17b3c16",null,!1,a["a"],r);e["default"]=c.exports},"4ec9":function(t,e,i){"use strict";var a=i("6d61"),o=i("6566");t.exports=a("Map",(function(t){return function(){return t(this,arguments.length?arguments[0]:void 0)}}),o)},"57c5":function(t,e,i){var a=i("c790");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var o=i("4f06").default;o("4afb6c16",a,!0,{sourceMap:!1,shadowMode:!1})},6005:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=n;var a=o(i("6b75"));function o(t){return t&&t.__esModule?t:{default:t}}function n(t){if(Array.isArray(t))return(0,a.default)(t)}},6060:function(t,e,i){"use strict";var a=i("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,i("dca8"),i("4ec9"),i("d3b7"),i("3ca3"),i("ddb0");var o=a(i("b29c")),n=a(i("7501")),r=a(i("6550")),s=a(i("3583")),c=i("b893"),d=a(i("0f35")),l={methods:{avatarUrl:c.avatarUrl,onShowShareDialog:function(){if(this.$notMember())return this.$goLogin();1!==this.detailInfo.status&&this.$refs.shareDialog.show()},onBlur:function(){this.isFocus=!1},onFocus:function(){if(this.$notMember())return this.$goLogin();1!==this.detailInfo.status&&(this.memberPersonalInfo.isRealName||(this.isFocus=!1,uni.hideKeyboard(),uni.showModal({title:"请先实名认证",content:"认证后，即可发布帖子，评论",cancelText:"取消",confirmText:"实名认证",confirmColor:"#E32417",success:function(t){t.confirm&&uni.navigateTo({url:"/pages/mine/real-name/index"})}})))},onConfirm:function(){var t=this,e=this.content;if(this.$isEmpty(e))this.$msg("请先填写评论");else{var i=this.detailInfo.communityNoteId,a={communityNoteId:i,content:e};this.$api.createCommunityNoteComment(a).then((function(e){if(e.isError)return t.$msg(e.message);t.$msg("评论已发布"),t.content="",t.getNoteCommentDetailPage()}))}},changeStatus:function(t){var e=this;if(this.$notMember())return this.$goLogin();if(1!==this.detailInfo.status){var i=this.detailInfo,a=i.communityMemberId,o=i.communityNoteId,n=this.statusMap.get(t).get(this.detailInfo[t]),r=n.apiName,s=n.msg,c=n.countKey,d=n.count,l={communityMemberId:a,communityNoteId:o};this.$api[r](l).then((function(i){if(i.isError)e.$msg(i.message);else{if(e.$msg(s),"isAttention"!==t){var a=e.detailInfo[c];e.detailInfo[c]=a+d}e.detailInfo[t]=!e.detailInfo[t]}}))}},onGoTopicDetail:function(t){uni.navigateTo({url:"/pagesDiscover/topic-detail/index?communityTopicId=".concat(t.communityTopicId)})},shareCommunityNote:function(){var t=this,e=this.communityNoteId,i=this.shareId,a={};this.$isEmpty(i)?a.sourceId=e:a.shareId=i,this.$api.shareCommunityNote(a).then((function(e){e.isError?t.$msg(e.message):t.shareId=e.content.shareId}))},getNoteDetailInfo:function(){var t=this,e=this.$isEmpty(this.shareId)?{communityNoteId:this.communityNoteId}:{shareId:this.shareId},i=this.$isEmpty(this.shareId)?"getCommunityNoteInfoById":"getCommunityNoteInfoByShareId";this.$api[i](e).then((function(e){e.isError?t.$msg(e.message):t.detailInfo=e.content||{}}))},setOption:function(t){var e=t.communityNoteId,i=t.shareId;this.communityNoteId=e,this.shareId=i,this.shareCommunityNote(),this.getNoteCommentDetailPage(),this.getNoteDetailInfo()}},data:function(){return{communityNoteId:"",shareId:"",isShare:!1,content:"",isFocus:!1,detailInfo:{},statusMap:Object.freeze(new Map([["isAttention",new Map([[!0,{apiName:"cancelAttentionUser",msg:"取消关注"}],[!1,{apiName:"attentionUser",msg:"已关注"}]])],["isLike",new Map([[!0,{apiName:"cancelCommunityLikeNote",msg:"取消点赞",countKey:"likeQuantity",count:-1}],[!1,{apiName:"communityLikeNote",msg:"点赞成功",countKey:"likeQuantity",count:1}]])],["isFavorites",new Map([[!0,{apiName:"cancelCommunityFavoritesNote",msg:"取消收藏",countKey:"favoritesQuantity",count:-1}],[!1,{apiName:"communityFavoritesNote",msg:"收藏成功",countKey:"favoritesQuantity",count:1}]])]]))}},computed:{memberPersonalInfo:function(){return this.$store.state.user.memberPersonalInfo},shareData:function(){var t=this.detailInfo,e=t.title,i=t.content,a=t.attachments;return{title:e,desc:i,link:window.location.href,imgUrl:this.$isEmpty(a)?"":this.$sourceUrl(a[0])}},followStatus:function(){var t=this.detailInfo,e=t.isAttention,i=t.isFans;return e?i?"互相关注":"已关注":"关注"}},mixins:[s.default,d.default],components:{Carousel:o.default,Comments:n.default,ShareDialog:r.default},onLoad:function(t){this.setOption(t)},onPullDownRefresh:function(){uni.stopPullDownRefresh()}};e.default=l},6155:function(t,e,i){"use strict";i.r(e);var a=i("bf85"),o=i("a51f");for(var n in o)["default"].indexOf(n)<0&&function(t){i.d(e,t,(function(){return o[t]}))}(n);i("7deb");var r,s=i("f0c5"),c=Object(s["a"])(o["default"],a["b"],a["c"],!1,null,"53d1b0dc",null,!1,a["a"],r);e["default"]=c.exports},6566:function(t,e,i){"use strict";var a=i("9bf2").f,o=i("7c73"),n=i("e2cc"),r=i("0366"),s=i("19aa"),c=i("2266"),d=i("7dd0"),l=i("2626"),u=i("83ab"),f=i("f183").fastKey,v=i("69f3"),m=v.set,h=v.getterFor;t.exports={getConstructor:function(t,e,i,d){var l=t((function(t,a){s(t,l,e),m(t,{type:e,index:o(null),first:void 0,last:void 0,size:0}),u||(t.size=0),void 0!=a&&c(a,t[d],{that:t,AS_ENTRIES:i})})),v=h(e),p=function(t,e,i){var a,o,n=v(t),r=b(t,e);return r?r.value=i:(n.last=r={index:o=f(e,!0),key:e,value:i,previous:a=n.last,next:void 0,removed:!1},n.first||(n.first=r),a&&(a.next=r),u?n.size++:t.size++,"F"!==o&&(n.index[o]=r)),t},b=function(t,e){var i,a=v(t),o=f(e);if("F"!==o)return a.index[o];for(i=a.first;i;i=i.next)if(i.key==e)return i};return n(l.prototype,{clear:function(){var t=this,e=v(t),i=e.index,a=e.first;while(a)a.removed=!0,a.previous&&(a.previous=a.previous.next=void 0),delete i[a.index],a=a.next;e.first=e.last=void 0,u?e.size=0:t.size=0},delete:function(t){var e=this,i=v(e),a=b(e,t);if(a){var o=a.next,n=a.previous;delete i.index[a.index],a.removed=!0,n&&(n.next=o),o&&(o.previous=n),i.first==a&&(i.first=o),i.last==a&&(i.last=n),u?i.size--:e.size--}return!!a},forEach:function(t){var e,i=v(this),a=r(t,arguments.length>1?arguments[1]:void 0,3);while(e=e?e.next:i.first){a(e.value,e.key,this);while(e&&e.removed)e=e.previous}},has:function(t){return!!b(this,t)}}),n(l.prototype,i?{get:function(t){var e=b(this,t);return e&&e.value},set:function(t,e){return p(this,0===t?0:t,e)}}:{add:function(t){return p(this,t=0===t?0:t,t)}}),u&&a(l.prototype,"size",{get:function(){return v(this).size}}),l},setStrong:function(t,e,i){var a=e+" Iterator",o=h(e),n=h(a);d(t,e,(function(t,e){m(this,{type:a,target:t,state:o(t),kind:e,last:void 0})}),(function(){var t=n(this),e=t.kind,i=t.last;while(i&&i.removed)i=i.previous;return t.target&&(t.last=i=i?i.next:t.state.first)?"keys"==e?{value:i.key,done:!1}:"values"==e?{value:i.value,done:!1}:{value:[i.key,i.value],done:!1}:(t.target=void 0,{value:void 0,done:!0})}),i?"entries":"values",!i,!0),l(e)}}},"738f":function(t,e,i){var a=i("4bad");e=a(!1),e.push([t.i,'@charset "UTF-8";\n/* uni.scss */\n/* 页面左右间距 */\n/* 文字尺寸 */\n/*文字颜色*/\n/* 图片加载中颜色 */\n/* 行为相关颜色 */\n/* 边框颜色 */.color-primary[data-v-e17b3c16]{color:#3049c0}.color-333[data-v-e17b3c16]{color:#333}.color-666[data-v-e17b3c16]{color:#666}.color-999[data-v-e17b3c16]{color:#999}.bg-color[data-v-e17b3c16]{background-color:#f7f7f7}.bg-white[data-v-e17b3c16]{background-color:#fff}.white-color[data-v-e17b3c16]{color:#fff}.primary-color[data-v-e17b3c16]{color:#f54400}.success-color[data-v-e17b3c16]{color:#0e130f}.warning-color[data-v-e17b3c16]{color:#f0ad4e}.error-color[data-v-e17b3c16]{color:#dd524d}.primary-text[data-v-e17b3c16]{color:#333}.secondary-text[data-v-e17b3c16]{color:#666}.tip-text[data-v-e17b3c16]{color:#999}.color-e32417[data-v-e17b3c16]{color:#e32417}.w30[data-v-e17b3c16]{display:inline-block;width:%?30?%}.note-detail-wrap .user .user-avatar[data-v-e17b3c16]{width:%?80?%;height:%?80?%;border-radius:50%}.note-detail-wrap .user .community-title[data-v-e17b3c16]{width:%?120?%;height:%?36?%;border:%?1?% solid #ff9708;border-radius:%?18?%;color:#ff9708}.note-detail-wrap .user .follow[data-v-e17b3c16],\n.note-detail-wrap .user .have-follow[data-v-e17b3c16]{padding:0 %?20?%;height:%?48?%;background:#f54400;border-radius:%?24?%;color:#fff;border:1px solid #f54400}.note-detail-wrap .user .have-follow[data-v-e17b3c16]{background:#fff;color:#333;border-color:#d1d1d1}.note-detail-wrap .user .share-icon[data-v-e17b3c16]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:start;-webkit-align-items:flex-start;align-items:flex-start;padding-top:%?18?%}.note-detail-wrap .user .share-icon uni-text[data-v-e17b3c16]{display:inline-block;border-radius:50%}.note-detail-wrap .user .share-icon uni-text + uni-text[data-v-e17b3c16]{margin-left:%?6?%}.note-detail-wrap .user .share-icon .normal[data-v-e17b3c16]{width:%?6?%;height:%?6?%;background:#d8d8d8}.note-detail-wrap .user .share-icon .middle[data-v-e17b3c16]{width:%?8?%;height:%?8?%;background:#666}.note-detail-wrap .note-content[data-v-e17b3c16]{border-bottom:%?1?% solid #eaeaea}.note-detail-wrap .note-content .content[data-v-e17b3c16]{line-height:1.6}.note-detail-wrap .note-content .label-list .label-list-item + .label-list-item[data-v-e17b3c16]{margin-left:%?8?%}.note-detail-wrap .note-content .label-list .label-list-item[data-v-e17b3c16]{height:%?48?%;background:#f3f8ff;border-radius:%?24?%;color:#518cfc}.note-detail-wrap .note-content .label-list .label-list-item .icon[data-v-e17b3c16]{width:%?28?%;height:%?28?%;background:#518cfc;border-radius:50%}.note-detail-wrap .comment-list[data-v-e17b3c16]{padding-bottom:%?98?%}.note-detail-wrap .add-comment[data-v-e17b3c16]{position:fixed;bottom:0;width:100%;height:%?98?%;border-top:%?1?% solid #eaeaea}.note-detail-wrap .add-comment .input[data-v-e17b3c16]{width:%?330?%;height:%?64?%;background:#f4f4f4;border-radius:%?49?%}.note-detail-wrap .add-comment .icon-item[data-v-e17b3c16]{margin-left:%?64?%}',""]),t.exports=e},7501:function(t,e,i){"use strict";i.r(e);var a=i("11c5"),o=i("cacb");for(var n in o)["default"].indexOf(n)<0&&function(t){i.d(e,t,(function(){return o[t]}))}(n);i("f507");var r,s=i("f0c5"),c=Object(s["a"])(o["default"],a["b"],a["c"],!1,null,"e77df3a2",null,!1,a["a"],r);e["default"]=c.exports},7976:function(t,e,i){"use strict";var a;i.d(e,"b",(function(){return o})),i.d(e,"c",(function(){return n})),i.d(e,"a",(function(){return a}));var o=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"carousel-wrap bg-white",style:{height:t.firstImgHeight+"px"}},[i("v-uni-swiper",{staticClass:"swiper-box",attrs:{"indicator-dots":!1,autoplay:t.autoplay,interval:t.interval,duration:t.duration},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.changeSwiper.apply(void 0,arguments)}}},[t._l(t.imgList,(function(e,a){return[i("v-uni-swiper-item",[i("v-uni-view",{staticClass:"swiper-item"},[i("v-uni-image",{staticClass:"swiper-item-img",attrs:{mode:"widthFix",src:t.$sourceUrl(e)}})],1)],1)]}))],2),t.imgList.length>1?i("v-uni-view",{staticClass:"swiper-dots pl20 pr20 center-align white-color ft24"},[i("v-uni-text",[t._v(t._s(t.currentIndex+1))]),t._v("/"),i("v-uni-text",[t._v(t._s(t.imgList.length))])],1):t._e()],1)},n=[]},"7deb":function(t,e,i){"use strict";var a=i("e5cb"),o=i.n(a);o.a},"873b":function(t,e,i){"use strict";var a;i.d(e,"b",(function(){return o})),i.d(e,"c",(function(){return n})),i.d(e,"a",(function(){return a}));var o=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"note-detail-wrap bg-white",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.onPage.apply(void 0,arguments)}}},[i("carousel",{attrs:{imgList:t.detailInfo.attachments,indicatorDots:!0}}),i("v-uni-view",{staticClass:"user between-row pl30 pr30 pt24 pb24"},[i("v-uni-view",{staticClass:"center-align"},[i("img",{staticClass:"user-avatar",attrs:{src:t.avatarUrl(t.detailInfo.avatar),alt:""}}),i("v-uni-view",{staticClass:"ml16"},[i("v-uni-view",{staticClass:"flex"},[i("v-uni-text",{staticClass:"ft28"},[t._v(t._s(t.detailInfo.nick))])],1),i("v-uni-view",{staticClass:"ft22 color-999"},[t.detailInfo.orgName?i("v-uni-text",{staticClass:"mr40"},[t._v(t._s(t.detailInfo.orgName))]):t._e(),i("v-uni-text",[t._v(t._s(t.detailInfo.time))])],1)],1)],1)],1),i("v-uni-view",{staticClass:"pt8 ml30 mr30 note-content"},[i("v-uni-view",{staticClass:"pb32 column"},[i("v-uni-text",{staticClass:"ft36 bold pb16"},[t._v(t._s(t.detailInfo.title))]),i("v-uni-text",{staticClass:"content ft30"},[t._v(t._s(t.detailInfo.content))])],1)],1),i("v-uni-view",{staticClass:"comment-list pt24"},[i("v-uni-view",{staticClass:"pl30 pb24 ft26"},[t._v("共"+t._s(t.commentList.length||0)+"条评论")]),i("comments",{attrs:{commentList:t.commentList}})],1),i("v-uni-view",{staticClass:"add-comment center-align pl30 pr30 bg-white between-row"},[i("v-uni-input",{ref:"input",staticClass:"input ft28 pl20",attrs:{placeholder:"随便说点什么～",focus:t.isFocus,"adjust-position":!0,"cursor-spacing":15,"confirm-type":"send","auto-blur":!0,type:"text"},on:{blur:function(e){arguments[0]=e=t.$handleEvent(e),t.onBlur.apply(void 0,arguments)},focus:function(e){arguments[0]=e=t.$handleEvent(e),t.onFocus.apply(void 0,arguments)},confirm:function(e){arguments[0]=e=t.$handleEvent(e),t.onConfirm.apply(void 0,arguments)}},model:{value:t.content,callback:function(e){t.content=e},expression:"content"}}),i("v-uni-view",{staticClass:"tip-text ft30 flex"},[i("v-uni-view",{staticClass:"icon-item"},[i("v-uni-view",{on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.onShowShareDialog.apply(void 0,arguments)}}},[i("svg-icon",{attrs:{icon:"icon_zhuanfa"}}),i("v-uni-text",{staticClass:"ft26 pl8 color-666"},[t._v(t._s(t.detailInfo.shareQuantity))])],1)],1),i("v-uni-view",{staticClass:"icon-item relative",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.changeStatus("isLike")}}},[i("svg-icon",{class:["ft32",t.detailInfo.isLike?"primary-color":"color-999"],attrs:{icon:t.detailInfo.isLike?"icon_shoucang":"icon_weishoucang"}}),i("v-uni-text",{staticClass:"ft26 pl8 w30 color-666"},[t._v(t._s(t.detailInfo.likeQuantity))])],1)],1)],1),i("share-dialog",{ref:"shareDialog",attrs:{showHomeBtn:t.showHomeBtn,shareData:t.shareData}})],1)},n=[]},8863:function(t,e,i){"use strict";i.r(e);var a=i("b209"),o=i.n(a);for(var n in a)["default"].indexOf(n)<0&&function(t){i.d(e,t,(function(){return a[t]}))}(n);e["default"]=o.a},a51f:function(t,e,i){"use strict";i.r(e);var a=i("49af"),o=i.n(a);for(var n in a)["default"].indexOf(n)<0&&function(t){i.d(e,t,(function(){return a[t]}))}(n);e["default"]=o.a},ad07:function(t,e,i){var a=i("4bad");e=a(!1),e.push([t.i,'@charset "UTF-8";\n/* uni.scss */\n/* 页面左右间距 */\n/* 文字尺寸 */\n/*文字颜色*/\n/* 图片加载中颜色 */\n/* 行为相关颜色 */\n/* 边框颜色 */.color-primary[data-v-35dc7f48]{color:#3049c0}.color-333[data-v-35dc7f48]{color:#333}.color-666[data-v-35dc7f48]{color:#666}.color-999[data-v-35dc7f48]{color:#999}.bg-color[data-v-35dc7f48]{background-color:#f7f7f7}.bg-white[data-v-35dc7f48]{background-color:#fff}.white-color[data-v-35dc7f48]{color:#fff}.primary-color[data-v-35dc7f48]{color:#f54400}.success-color[data-v-35dc7f48]{color:#0e130f}.warning-color[data-v-35dc7f48]{color:#f0ad4e}.error-color[data-v-35dc7f48]{color:#dd524d}.primary-text[data-v-35dc7f48]{color:#333}.secondary-text[data-v-35dc7f48]{color:#666}.tip-text[data-v-35dc7f48]{color:#999}.color-e32417[data-v-35dc7f48]{color:#e32417}.carousel-wrap[data-v-35dc7f48]{width:100%;min-height:%?400?%;max-height:%?920?%;position:relative}.carousel-wrap .swiper-box[data-v-35dc7f48],\n.carousel-wrap .swiper-item[data-v-35dc7f48],\n.carousel-wrap .swiper-item-img[data-v-35dc7f48]{width:100%;height:100%}.carousel-wrap .swiper-dots[data-v-35dc7f48]{width:%?80?%;position:absolute;bottom:%?16?%;right:%?24?%;height:%?36?%;border-radius:%?18?%;background:rgba(0,0,0,.8)}',""]),t.exports=e},b209:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={methods:{getImgInfo:function(){var t=this;uni.getImageInfo({src:this.$sourceUrl(this.imgList[0]),success:function(e){var i=e.width,a=e.height,o=a/(i/t.$windowWidth);t.firstImgHeight=Math.round(o)}})},changeSwiper:function(t){this.currentIndex=t.detail.current}},props:["imgList","indicatorDots"],watch:{imgList:{handler:function(t){var e=this;this.$isEmpty(t)||this.$nextTick((function(){e.getImgInfo()}))},immediate:!0}},data:function(){return{firstImgHeight:0,currentIndex:0,carouselList:[],autoplay:!1,interval:2e3,duration:500}}};e.default=a},b29c:function(t,e,i){"use strict";i.r(e);var a=i("7976"),o=i("8863");for(var n in o)["default"].indexOf(n)<0&&function(t){i.d(e,t,(function(){return o[t]}))}(n);i("2ead");var r,s=i("f0c5"),c=Object(s["a"])(o["default"],a["b"],a["c"],!1,null,"35dc7f48",null,!1,a["a"],r);e["default"]=c.exports},bf85:function(t,e,i){"use strict";var a;i.d(e,"b",(function(){return o})),i.d(e,"c",(function(){return n})),i.d(e,"a",(function(){return a}));var o=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",[t._l(t.commentChildren,(function(e,a){return i("v-uni-view",{key:a,staticClass:"flex mt24"},[i("v-uni-image",{staticClass:"mr16 user-img",attrs:{src:t.avatarUrl(e.avatar),mode:"scaleToFill"},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.onPersonalCenter(e)}}}),i("v-uni-view",{staticClass:"w91"},[i("v-uni-view",{staticClass:"between-row mt12"},[i("v-uni-view",[i("v-uni-view",{staticClass:"color-999 ft24"},[t._v(t._s(e.nick)),e.isAuthor?i("span",{staticClass:"author ft20 color-666 ml8"},[t._v("作者")]):t._e()]),i("v-uni-view",{staticClass:"center-align mt20 w520"},[i("v-uni-view",{staticClass:"ft26"},[t._v(t._s(e.content))])],1)],1),i("v-uni-view",{staticClass:"tc relative"},[i("v-uni-view",{class:["ft32 color-999",e.isLike?"icon_zan primary-color":"icon_zankong"],on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.onLike(e,a)}}}),i("v-uni-view",{staticClass:"mt20 ft22"},[t._v(t._s(e.likeCount))])],1)],1)],1)],1)})),t.showMore?i("v-uni-view",t._l(t.commentList[t.index].otherChildren,(function(e,a){return i("v-uni-view",{key:a,staticClass:"flex mt24"},[i("v-uni-image",{staticClass:"mr16 user-img",attrs:{src:t.avatarUrl(e.avatar),mode:"scaleToFill"}}),i("v-uni-view",{staticClass:"between-row mt12 w91"},[i("v-uni-view",[i("v-uni-view",{staticClass:"color-999 ft24"},[t._v(t._s(e.nick)),e.isAuthor?i("span",{staticClass:"author ft20 color-666 ml8"},[t._v("作者")]):t._e()]),i("v-uni-view",{staticClass:"center-align mt20 w520"},[i("v-uni-view",{staticClass:"ft26"},[t._v(t._s(e.content))])],1)],1),i("v-uni-view",{staticClass:"tc relative"},[i("v-uni-view",{class:["ft32",e.isLike?"icon_zan primary-color":"icon_zankong"],on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.onLike(e,a,2)}}}),i("v-uni-view",{staticClass:"mt20 ft22"},[t._v(t._s(e.likeCount))])],1)],1)],1)})),1):t._e(),t.commentList[t.index].otherChildren.length?i("v-uni-view",{staticClass:"f518 ft24 ml64 mt32",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.lookMore()}}},[t._v(t._s(t.showMore?"收起":"展开")+t._s(t.commentList[t.index].otherChildren.length)+"条评论")]):t._e()],2)},n=[]},c790:function(t,e,i){var a=i("4bad");e=a(!1),e.push([t.i,'@charset "UTF-8";\n/* uni.scss */\n/* 页面左右间距 */\n/* 文字尺寸 */\n/*文字颜色*/\n/* 图片加载中颜色 */\n/* 行为相关颜色 */\n/* 边框颜色 */.color-primary[data-v-e77df3a2]{color:#3049c0}.color-333[data-v-e77df3a2]{color:#333}.color-666[data-v-e77df3a2]{color:#666}.color-999[data-v-e77df3a2]{color:#999}.bg-color[data-v-e77df3a2]{background-color:#f7f7f7}.bg-white[data-v-e77df3a2]{background-color:#fff}.white-color[data-v-e77df3a2]{color:#fff}.primary-color[data-v-e77df3a2]{color:#f54400}.success-color[data-v-e77df3a2]{color:#0e130f}.warning-color[data-v-e77df3a2]{color:#f0ad4e}.error-color[data-v-e77df3a2]{color:#dd524d}.primary-text[data-v-e77df3a2]{color:#333}.secondary-text[data-v-e77df3a2]{color:#666}.tip-text[data-v-e77df3a2]{color:#999}.color-e32417[data-v-e77df3a2]{color:#e32417}.bt[data-v-e77df3a2]{border-bottom:%?1?% solid #eaeaea}.user-img[data-v-e77df3a2]{width:%?48?%;height:%?48?%;border-radius:50%}.w91[data-v-e77df3a2]{width:91%}.author[data-v-e77df3a2]{width:%?80?%;height:%?36?%;line-height:%?36?%;background:#eee;border-radius:%?20?%}.w520[data-v-e77df3a2]{width:%?520?%;white-space:pre-wrap}.f518[data-v-e77df3a2]{color:#518cfc}.ml64[data-v-e77df3a2]{margin-left:%?64?%}.no-wrap[data-v-e77df3a2]{white-space:nowrap}',""]),t.exports=e},cacb:function(t,e,i){"use strict";i.r(e);var a=i("2d21"),o=i.n(a);for(var n in a)["default"].indexOf(n)<0&&function(t){i.d(e,t,(function(){return a[t]}))}(n);e["default"]=o.a},d4eb:function(t,e,i){var a=i("ad07");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var o=i("4f06").default;o("02f7fe6c",a,!0,{sourceMap:!1,shadowMode:!1})},db90:function(t,e,i){"use strict";function a(t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}Object.defineProperty(e,"__esModule",{value:!0}),e.default=a,i("a4d3"),i("e01a"),i("d3b7"),i("d28b"),i("3ca3"),i("ddb0"),i("a630")},dc5f:function(t,e,i){"use strict";var a=i("fd8d"),o=i.n(a);o.a},e5cb:function(t,e,i){var a=i("109b");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var o=i("4f06").default;o("294e3f70",a,!0,{sourceMap:!1,shadowMode:!1})},f507:function(t,e,i){"use strict";var a=i("57c5"),o=i.n(a);o.a},fc80:function(t,e,i){"use strict";i.r(e);var a=i("6060"),o=i.n(a);for(var n in a)["default"].indexOf(n)<0&&function(t){i.d(e,t,(function(){return a[t]}))}(n);e["default"]=o.a},fd8d:function(t,e,i){var a=i("738f");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var o=i("4f06").default;o("09e1b5d1",a,!0,{sourceMap:!1,shadowMode:!1})}}]);