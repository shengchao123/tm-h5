(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-league-interact-note-detail-index"],{"0159":function(t,e,i){var a=i("02ea");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=i("4f06").default;n("b18bf32e",a,!0,{sourceMap:!1,shadowMode:!1})},"0234":function(t,e,i){"use strict";var a=i("0159"),n=i.n(a);n.a},"02ea":function(t,e,i){var a=i("4bad");e=a(!1),e.push([t.i,'@charset "UTF-8";\n/* uni.scss */\n/* 页面左右间距 */\n/* 文字尺寸 */\n/*文字颜色*/\n/* 图片加载中颜色 */\n/* 行为相关颜色 */\n/* 边框颜色 */.color-333[data-v-1e8b376c]{color:#333}.color-666[data-v-1e8b376c]{color:#666}.color-999[data-v-1e8b376c]{color:#999}.bg-color[data-v-1e8b376c]{background-color:#f7f7f7}.bg-white[data-v-1e8b376c]{background-color:#fff}.white-color[data-v-1e8b376c]{color:#fff}.primary-color[data-v-1e8b376c]{color:#f54400}.success-color[data-v-1e8b376c]{color:#0e130f}.warning-color[data-v-1e8b376c]{color:#f0ad4e}.error-color[data-v-1e8b376c]{color:#dd524d}.primary-text[data-v-1e8b376c]{color:#333}.secondary-text[data-v-1e8b376c]{color:#666}.tip-text[data-v-1e8b376c]{color:#999}.color-e32417[data-v-1e8b376c]{color:#e32417}.w30[data-v-1e8b376c]{display:inline-block;width:%?30?%}.note-detail-wrap .user .user-avatar[data-v-1e8b376c]{width:%?80?%;height:%?80?%;border-radius:50%}.note-detail-wrap .user .community-title[data-v-1e8b376c]{width:%?120?%;height:%?36?%;border:%?1?% solid #ff9708;border-radius:%?18?%;color:#ff9708}.note-detail-wrap .user .follow[data-v-1e8b376c],\n.note-detail-wrap .user .have-follow[data-v-1e8b376c]{padding:0 %?20?%;height:%?48?%;background:#f54400;border-radius:%?24?%;color:#fff;border:1px solid #f54400}.note-detail-wrap .user .have-follow[data-v-1e8b376c]{background:#fff;color:#333;border-color:#d1d1d1}.note-detail-wrap .user .share-icon[data-v-1e8b376c]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:start;-webkit-align-items:flex-start;align-items:flex-start;padding-top:%?18?%}.note-detail-wrap .user .share-icon uni-text[data-v-1e8b376c]{display:inline-block;border-radius:50%}.note-detail-wrap .user .share-icon uni-text + uni-text[data-v-1e8b376c]{margin-left:%?6?%}.note-detail-wrap .user .share-icon .normal[data-v-1e8b376c]{width:%?6?%;height:%?6?%;background:#d8d8d8}.note-detail-wrap .user .share-icon .middle[data-v-1e8b376c]{width:%?8?%;height:%?8?%;background:#666}.note-detail-wrap .note-content[data-v-1e8b376c]{border-bottom:%?1?% solid #eaeaea}.note-detail-wrap .note-content .content[data-v-1e8b376c]{line-height:1.6}.note-detail-wrap .note-content .label-list .label-list-item + .label-list-item[data-v-1e8b376c]{margin-left:%?8?%}.note-detail-wrap .note-content .label-list .label-list-item[data-v-1e8b376c]{height:%?48?%;background:#f3f8ff;border-radius:%?24?%;color:#518cfc}.note-detail-wrap .note-content .label-list .label-list-item .icon[data-v-1e8b376c]{width:%?28?%;height:%?28?%;background:#518cfc;border-radius:50%}.note-detail-wrap .comment-list[data-v-1e8b376c]{padding-bottom:%?98?%}.note-detail-wrap .add-comment[data-v-1e8b376c]{position:fixed;bottom:0;width:100%;height:%?98?%;border-top:%?1?% solid #eaeaea}.note-detail-wrap .add-comment .input[data-v-1e8b376c]{width:%?330?%;height:%?64?%;background:#f4f4f4;border-radius:%?49?%}.note-detail-wrap .add-comment .icon-item[data-v-1e8b376c]{margin-left:%?64?%}',""]),t.exports=e},1093:function(t,e,i){var a=i("2ef6");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=i("4f06").default;n("80da0468",a,!0,{sourceMap:!1,shadowMode:!1})},"16c7":function(t,e,i){"use strict";var a;i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return o})),i.d(e,"a",(function(){return a}));var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",[t._l(t.commentChildren,(function(e,a){return i("v-uni-view",{key:a,staticClass:"flex mt24"},[i("v-uni-image",{staticClass:"mr16 user-img",attrs:{src:t.avatarUrl(e.avatar),mode:"scaleToFill"},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.onPersonalCenter(e)}}}),i("v-uni-view",{staticClass:"w91"},[i("v-uni-view",{staticClass:"between-row mt12"},[i("v-uni-view",[i("v-uni-view",{staticClass:"color-999 ft24"},[t._v(t._s(e.nick)),e.isAuthor?i("span",{staticClass:"author ft20 color-666 ml8"},[t._v("作者")]):t._e()]),i("v-uni-view",{staticClass:"center-align mt20 w520"},[i("v-uni-view",{staticClass:"ft26"},[t._v(t._s(e.content))])],1)],1),i("v-uni-view",{staticClass:"tc relative"},[i("v-uni-view",{class:["ft32 color-999",e.isLike?"icon_zan primary-color":"icon_zankong"],on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.onLike(e,a)}}}),i("v-uni-view",{staticClass:"mt20 ft22"},[t._v(t._s(e.likeCount))])],1)],1)],1)],1)})),t.showMore?i("v-uni-view",t._l(t.commentList[t.index].otherChildren,(function(e,a){return i("v-uni-view",{key:a,staticClass:"flex mt24"},[i("v-uni-image",{staticClass:"mr16 user-img",attrs:{src:t.avatarUrl(e.avatar),mode:"scaleToFill"}}),i("v-uni-view",{staticClass:"between-row mt12 w91"},[i("v-uni-view",[i("v-uni-view",{staticClass:"color-999 ft24"},[t._v(t._s(e.nick)),e.isAuthor?i("span",{staticClass:"author ft20 color-666 ml8"},[t._v("作者")]):t._e()]),i("v-uni-view",{staticClass:"center-align mt20 w520"},[i("v-uni-view",{staticClass:"ft26"},[t._v(t._s(e.content))])],1)],1),i("v-uni-view",{staticClass:"tc relative"},[i("v-uni-view",{class:["ft32",e.isLike?"icon_zan primary-color":"icon_zankong"],on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.onLike(e,a,2)}}}),i("v-uni-view",{staticClass:"mt20 ft22"},[t._v(t._s(e.likeCount))])],1)],1)],1)})),1):t._e(),t.commentList[t.index].otherChildren.length?i("v-uni-view",{staticClass:"f518 ft24 ml64 mt32",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.lookMore()}}},[t._v(t._s(t.showMore?"收起":"展开")+t._s(t.commentList[t.index].otherChildren.length)+"条评论")]):t._e()],2)},o=[]},2909:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=c;var a=s(i("6005")),n=s(i("db90")),o=s(i("06c5")),r=s(i("3427"));function s(t){return t&&t.__esModule?t:{default:t}}function c(t){return(0,a.default)(t)||(0,n.default)(t)||(0,o.default)(t)||(0,r.default)()}},"2d21":function(t,e,i){"use strict";var a=i("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,i("d81d");var n=a(i("2909")),o=a(i("6155")),r=i("b893"),s={methods:{onLike:function(t){if(this.$notMember())return this.$goLogin();this.dealLike(t)},dealLike:function(t){var e=this,i={communityNoteCommentId:t.id},a="";a=t.isLike?"cancelCommunityLikeNoteComment":"communityLikeNoteComment",this.$api[a](i).then((function(i){if(i.isError)return e.$msg(i.message);e.$msg(t.isLike?"取消点赞":"点赞成功"),t.isLike?t.likeCount=t.likeCount-1:t.likeCount=t.likeCount+1,t.isLike=!t.isLike}))},getCommentsStatus:function(t){this.commentList=(0,n.default)(t)},toPerson:function(t){uni.navigateTo({url:"/pagesDiscover/personalCenter/index?id=".concat(t.communityMemberId)})},avatarUrl:r.avatarUrl},computed:{comments:function(){return this.commentList.map((function(t){t.showMore=!1})),this.commentList}},props:{commentList:{type:Array,default:function(){return[]}}},components:{RecursiveComments:o.default}};e.default=s},"2ef6":function(t,e,i){var a=i("4bad");e=a(!1),e.push([t.i,'@charset "UTF-8";\n/* uni.scss */\n/* 页面左右间距 */\n/* 文字尺寸 */\n/*文字颜色*/\n/* 图片加载中颜色 */\n/* 行为相关颜色 */\n/* 边框颜色 */.color-333[data-v-379c7629]{color:#333}.color-666[data-v-379c7629]{color:#666}.color-999[data-v-379c7629]{color:#999}.bg-color[data-v-379c7629]{background-color:#f7f7f7}.bg-white[data-v-379c7629]{background-color:#fff}.white-color[data-v-379c7629]{color:#fff}.primary-color[data-v-379c7629]{color:#f54400}.success-color[data-v-379c7629]{color:#0e130f}.warning-color[data-v-379c7629]{color:#f0ad4e}.error-color[data-v-379c7629]{color:#dd524d}.primary-text[data-v-379c7629]{color:#333}.secondary-text[data-v-379c7629]{color:#666}.tip-text[data-v-379c7629]{color:#999}.color-e32417[data-v-379c7629]{color:#e32417}.carousel-wrap[data-v-379c7629]{width:100%;min-height:%?400?%;max-height:%?920?%;position:relative}.carousel-wrap .swiper-box[data-v-379c7629],\n.carousel-wrap .swiper-item[data-v-379c7629],\n.carousel-wrap .swiper-item-img[data-v-379c7629]{width:100%;height:100%}.carousel-wrap .swiper-dots[data-v-379c7629]{width:%?80?%;position:absolute;bottom:%?16?%;right:%?24?%;height:%?36?%;border-radius:%?18?%;background:rgba(0,0,0,.8)}',""]),t.exports=e},3427:function(t,e,i){"use strict";function a(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}Object.defineProperty(e,"__esModule",{value:!0}),e.default=a},3583:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={data:function(){return{commentList:[],communityNoteId:void 0}},methods:{getNoteCommentDetailPage:function(){var t=this,e={communityNoteId:this.communityNoteId};this.$api.getNoteCommentDetailPage(e).then((function(e){e.isError&&t.$msg(e.message);var i=e.content.items;t.commentList=i}))}}},n=a;e.default=n},"49af":function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,i("a9e3");var a=i("b893"),n={name:"recursive",data:function(){return{showMore:!1}},methods:{onPersonalCenter:function(t){uni.navigateTo({url:"/pagesDiscover/personalCenter/index?id=".concat(t.id)})},onLike:function(t,e,i){var a=this;if(this.$notMember())return this.$goLogin();var n="",o={communityNoteId:t.communityNoteId};n=t.isLike?"cancelCommunityLikeNoteComment":"communityLikeNoteComment";var r=2===i?"otherChildren":"children";this.$api[n](o).then((function(i){if(i.isError)return a.$msg(i.message);a.$msg(t.isLike?"取消点赞":"点赞成功");var n=a.commentList[a.index][r][e];t.isLike?n.likeCount=n.likeCount-1:n.likeCount=n.likeCount+1,n.isLike=!n.isLike,a.$emit("getCommentsStatus",a.commentList)}))},lookMore:function(){this.showMore=!this.showMore},avatarUrl:a.avatarUrl},props:{commentChildren:{type:Array,default:function(){return[]}},commentList:{type:Array,default:function(){return[]}},index:{type:Number,default:function(){return""}}}};e.default=n},"4c12":function(t,e,i){var a=i("78ab");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=i("4f06").default;n("0e9dc9de",a,!0,{sourceMap:!1,shadowMode:!1})},"4ec9":function(t,e,i){"use strict";var a=i("6d61"),n=i("6566");t.exports=a("Map",(function(t){return function(){return t(this,arguments.length?arguments[0]:void 0)}}),n)},5514:function(t,e,i){"use strict";var a;i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return o})),i.d(e,"a",(function(){return a}));var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"note-detail-wrap bg-white"},[i("carousel",{attrs:{imgList:t.detailInfo.attachments,indicatorDots:!0}}),i("v-uni-view",{staticClass:"user between-row pl30 pr30 pt24 pb24"},[i("v-uni-view",{staticClass:"center-align"},[i("img",{staticClass:"user-avatar",attrs:{src:t.avatarUrl(t.detailInfo.avatar),alt:""}}),i("v-uni-view",{staticClass:"ml16"},[i("v-uni-view",{staticClass:"flex"},[i("v-uni-text",{staticClass:"ft28"},[t._v(t._s(t.detailInfo.nick))])],1),i("v-uni-view",{staticClass:"ft22 color-999"},[i("v-uni-text",{staticClass:"mr40"},[t._v(t._s(t.detailInfo.orgName))]),i("v-uni-text",[t._v(t._s(t.detailInfo.time))])],1)],1)],1)],1),i("v-uni-view",{staticClass:"pt8 ml30 mr30 note-content"},[i("v-uni-view",{staticClass:"pb32 column"},[i("v-uni-text",{staticClass:"ft36 bold pb16"},[t._v(t._s(t.detailInfo.title))]),i("v-uni-text",{staticClass:"content ft30"},[t._v(t._s(t.detailInfo.content))])],1)],1),i("v-uni-view",{staticClass:"comment-list pt24"},[i("v-uni-view",{staticClass:"pl30 pb24 ft26"},[t._v("共"+t._s(t.commentList.length||0)+"条评论")]),i("comments",{attrs:{commentList:t.commentList}})],1),i("v-uni-view",{staticClass:"add-comment center-align pl30 pr30 bg-white between-row"},[i("v-uni-input",{ref:"input",staticClass:"input ft28 pl20",attrs:{placeholder:"随便说点什么～",focus:t.isFocus,"adjust-position":!0,"cursor-spacing":15,"confirm-type":"send",type:"text"},on:{blur:function(e){arguments[0]=e=t.$handleEvent(e),t.onBlur.apply(void 0,arguments)},focus:function(e){arguments[0]=e=t.$handleEvent(e),t.onFocus.apply(void 0,arguments)},confirm:function(e){arguments[0]=e=t.$handleEvent(e),t.onConfirm.apply(void 0,arguments)}},model:{value:t.content,callback:function(e){t.content=e},expression:"content"}}),i("v-uni-view",{staticClass:"tip-text ft30 flex"},[i("v-uni-view",{staticClass:"icon-item"},[i("v-uni-view",{on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.onShowShareDialog.apply(void 0,arguments)}}},[i("svg-icon",{attrs:{icon:"icon_zhuanfa"}}),i("v-uni-text",{staticClass:"ft26 pl8 color-666"},[t._v(t._s(t.detailInfo.shareQuantity))])],1)],1),i("v-uni-view",{staticClass:"icon-item relative",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.changeStatus("isLike")}}},[i("svg-icon",{class:["ft32",t.detailInfo.isLike?"primary-color":"color-999"],attrs:{icon:t.detailInfo.isLike?"icon_shoucang":"icon_weishoucang"}}),i("v-uni-text",{staticClass:"ft26 pl8 w30 color-666"},[t._v(t._s(t.detailInfo.likeQuantity))])],1)],1)],1),i("share-dialog",{ref:"shareDialog",attrs:{shareData:t.shareData}})],1)},o=[]},6005:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=o;var a=n(i("6b75"));function n(t){return t&&t.__esModule?t:{default:t}}function o(t){if(Array.isArray(t))return(0,a.default)(t)}},6155:function(t,e,i){"use strict";i.r(e);var a=i("16c7"),n=i("a51f");for(var o in n)["default"].indexOf(o)<0&&function(t){i.d(e,t,(function(){return n[t]}))}(o);i("b44a");var r,s=i("f0c5"),c=Object(s["a"])(n["default"],a["b"],a["c"],!1,null,"c44758e8",null,!1,a["a"],r);e["default"]=c.exports},"63cf":function(t,e,i){"use strict";var a=i("1093"),n=i.n(a);n.a},6566:function(t,e,i){"use strict";var a=i("9bf2").f,n=i("7c73"),o=i("e2cc"),r=i("0366"),s=i("19aa"),c=i("2266"),u=i("7dd0"),l=i("2626"),d=i("83ab"),f=i("f183").fastKey,v=i("69f3"),m=v.set,h=v.getterFor;t.exports={getConstructor:function(t,e,i,u){var l=t((function(t,a){s(t,l,e),m(t,{type:e,index:n(null),first:void 0,last:void 0,size:0}),d||(t.size=0),void 0!=a&&c(a,t[u],{that:t,AS_ENTRIES:i})})),v=h(e),p=function(t,e,i){var a,n,o=v(t),r=b(t,e);return r?r.value=i:(o.last=r={index:n=f(e,!0),key:e,value:i,previous:a=o.last,next:void 0,removed:!1},o.first||(o.first=r),a&&(a.next=r),d?o.size++:t.size++,"F"!==n&&(o.index[n]=r)),t},b=function(t,e){var i,a=v(t),n=f(e);if("F"!==n)return a.index[n];for(i=a.first;i;i=i.next)if(i.key==e)return i};return o(l.prototype,{clear:function(){var t=this,e=v(t),i=e.index,a=e.first;while(a)a.removed=!0,a.previous&&(a.previous=a.previous.next=void 0),delete i[a.index],a=a.next;e.first=e.last=void 0,d?e.size=0:t.size=0},delete:function(t){var e=this,i=v(e),a=b(e,t);if(a){var n=a.next,o=a.previous;delete i.index[a.index],a.removed=!0,o&&(o.next=n),n&&(n.previous=o),i.first==a&&(i.first=n),i.last==a&&(i.last=o),d?i.size--:e.size--}return!!a},forEach:function(t){var e,i=v(this),a=r(t,arguments.length>1?arguments[1]:void 0,3);while(e=e?e.next:i.first){a(e.value,e.key,this);while(e&&e.removed)e=e.previous}},has:function(t){return!!b(this,t)}}),o(l.prototype,i?{get:function(t){var e=b(this,t);return e&&e.value},set:function(t,e){return p(this,0===t?0:t,e)}}:{add:function(t){return p(this,t=0===t?0:t,t)}}),d&&a(l.prototype,"size",{get:function(){return v(this).size}}),l},setStrong:function(t,e,i){var a=e+" Iterator",n=h(e),o=h(a);u(t,e,(function(t,e){m(this,{type:a,target:t,state:n(t),kind:e,last:void 0})}),(function(){var t=o(this),e=t.kind,i=t.last;while(i&&i.removed)i=i.previous;return t.target&&(t.last=i=i?i.next:t.state.first)?"keys"==e?{value:i.key,done:!1}:"values"==e?{value:i.value,done:!1}:{value:[i.key,i.value],done:!1}:(t.target=void 0,{value:void 0,done:!0})}),i?"entries":"values",!i,!0),l(e)}}},"6c15":function(t,e,i){"use strict";var a=i("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,i("dca8"),i("4ec9"),i("d3b7"),i("3ca3"),i("ddb0");var n=a(i("b29c")),o=a(i("7501")),r=a(i("6550")),s=a(i("3583")),c=i("b893"),u={methods:{avatarUrl:c.avatarUrl,onShowShareDialog:function(){if(this.$notMember())return this.$goLogin();this.$refs.shareDialog.show()},onBlur:function(){this.isFocus=!1},onFocus:function(){if(this.isFocus=!0,this.$notMember())return this.$goLogin();this.memberPersonalInfo.isRealName||(this.isFocus=!1,uni.showModal({title:"请先实名认证",content:"认证后，即可发布帖子，评论",cancelText:"取消",confirmText:"实名认证",confirmColor:"#E32417",success:function(t){t.confirm&&uni.navigateTo({url:"/pages/mine/real-name/index"})}}))},onConfirm:function(){var t=this,e=this.content;if(this.$isEmpty(e))this.$msg("请先填写评论");else{var i=this.detailInfo.communityNoteId,a={communityNoteId:i,content:e};this.$api.createCommunityNoteComment(a).then((function(e){if(e.isError)return t.$msg(e.message);t.$msg("评论已发布"),t.content="",t.getNoteCommentDetailPage()}))}},changeStatus:function(t){var e=this;if(this.$notMember())return this.$goLogin();var i=this.detailInfo,a=i.communityMemberId,n=i.communityNoteId,o=this.statusMap.get(t).get(this.detailInfo[t]),r=o.apiName,s=o.msg,c=o.countKey,u=o.count,l={communityMemberId:a,communityNoteId:n};this.$api[r](l).then((function(i){if(i.isError)e.$msg(i.message);else{if(e.$msg(s),"isAttention"!==t){var a=e.detailInfo[c];e.detailInfo[c]=a+u}e.detailInfo[t]=!e.detailInfo[t]}}))},onGoTopicDetail:function(t){uni.navigateTo({url:"/pagesDiscover/topic-detail/index?communityTopicId=".concat(t.communityTopicId)})},shareCommunityNote:function(){var t=this,e=this.communityNoteId,i=this.shareId,a={};this.$isEmpty(i)?a.sourceId=e:a.shareId=i,this.$api.shareCommunityNote(a).then((function(e){e.isError?t.$msg(e.message):t.shareId=e.content.shareId}))},getNoteDetailInfo:function(){var t=this,e=this.$isEmpty(this.shareId)?{communityNoteId:this.communityNoteId}:{shareId:this.shareId},i=this.$isEmpty(this.shareId)?"getCommunityNoteInfoById":"getCommunityNoteInfoByShareId";this.$api[i](e).then((function(e){e.isError?t.$msg(e.message):t.detailInfo=e.content||{}}))},setOption:function(t){var e=t.communityNoteId,i=t.shareId;this.communityNoteId=e,this.shareId=i,this.shareCommunityNote(),this.getNoteCommentDetailPage(),this.getNoteDetailInfo()}},data:function(){return{communityNoteId:"",shareId:"",isShare:!1,content:"",isFocus:!1,detailInfo:{},statusMap:Object.freeze(new Map([["isAttention",new Map([[!0,{apiName:"cancelAttentionUser",msg:"取消关注"}],[!1,{apiName:"attentionUser",msg:"已关注"}]])],["isLike",new Map([[!0,{apiName:"cancelCommunityLikeNote",msg:"取消点赞",countKey:"likeQuantity",count:-1}],[!1,{apiName:"communityLikeNote",msg:"点赞成功",countKey:"likeQuantity",count:1}]])],["isFavorites",new Map([[!0,{apiName:"cancelCommunityFavoritesNote",msg:"取消收藏",countKey:"favoritesQuantity",count:-1}],[!1,{apiName:"communityFavoritesNote",msg:"收藏成功",countKey:"favoritesQuantity",count:1}]])]]))}},computed:{memberPersonalInfo:function(){return this.$store.state.user.memberPersonalInfo},shareData:function(){var t=this.detailInfo,e=t.title,i=t.content,a=t.attachments;return{title:e,desc:i,link:window.location.href,imgUrl:this.$isEmpty(a)?"":this.$sourceUrl(a[0])}},followStatus:function(){var t=this.detailInfo,e=t.isAttention,i=t.isFans;return e?i?"互相关注":"已关注":"关注"}},mixins:[s.default],components:{Carousel:n.default,Comments:o.default,ShareDialog:r.default},onLoad:function(t){this.setOption(t)},onPullDownRefresh:function(){uni.stopPullDownRefresh()}};e.default=u},7501:function(t,e,i){"use strict";i.r(e);var a=i("945d"),n=i("cacb");for(var o in n)["default"].indexOf(o)<0&&function(t){i.d(e,t,(function(){return n[t]}))}(o);i("b84b");var r,s=i("f0c5"),c=Object(s["a"])(n["default"],a["b"],a["c"],!1,null,"7f20ea0b",null,!1,a["a"],r);e["default"]=c.exports},"776c":function(t,e,i){var a=i("9196");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=i("4f06").default;n("27c143da",a,!0,{sourceMap:!1,shadowMode:!1})},"78ab":function(t,e,i){var a=i("4bad");e=a(!1),e.push([t.i,'@charset "UTF-8";\n/* uni.scss */\n/* 页面左右间距 */\n/* 文字尺寸 */\n/*文字颜色*/\n/* 图片加载中颜色 */\n/* 行为相关颜色 */\n/* 边框颜色 */.color-333[data-v-c44758e8]{color:#333}.color-666[data-v-c44758e8]{color:#666}.color-999[data-v-c44758e8]{color:#999}.bg-color[data-v-c44758e8]{background-color:#f7f7f7}.bg-white[data-v-c44758e8]{background-color:#fff}.white-color[data-v-c44758e8]{color:#fff}.primary-color[data-v-c44758e8]{color:#f54400}.success-color[data-v-c44758e8]{color:#0e130f}.warning-color[data-v-c44758e8]{color:#f0ad4e}.error-color[data-v-c44758e8]{color:#dd524d}.primary-text[data-v-c44758e8]{color:#333}.secondary-text[data-v-c44758e8]{color:#666}.tip-text[data-v-c44758e8]{color:#999}.color-e32417[data-v-c44758e8]{color:#e32417}.user-img[data-v-c44758e8]{width:%?48?%;height:%?48?%;border-radius:50%}.w91[data-v-c44758e8]{width:91%}.author[data-v-c44758e8]{padding:%?8?% %?20?%;background:#eee;border-radius:%?20?%}.w520[data-v-c44758e8]{width:%?520?%;white-space:pre-wrap}.f518[data-v-c44758e8]{color:#518cfc}.ml64[data-v-c44758e8]{margin-left:%?64?%}',""]),t.exports=e},"7b7d":function(t,e,i){"use strict";i.r(e);var a=i("5514"),n=i("eb54");for(var o in n)["default"].indexOf(o)<0&&function(t){i.d(e,t,(function(){return n[t]}))}(o);i("0234");var r,s=i("f0c5"),c=Object(s["a"])(n["default"],a["b"],a["c"],!1,null,"1e8b376c",null,!1,a["a"],r);e["default"]=c.exports},8863:function(t,e,i){"use strict";i.r(e);var a=i("b209"),n=i.n(a);for(var o in a)["default"].indexOf(o)<0&&function(t){i.d(e,t,(function(){return a[t]}))}(o);e["default"]=n.a},9196:function(t,e,i){var a=i("4bad");e=a(!1),e.push([t.i,'@charset "UTF-8";\n/* uni.scss */\n/* 页面左右间距 */\n/* 文字尺寸 */\n/*文字颜色*/\n/* 图片加载中颜色 */\n/* 行为相关颜色 */\n/* 边框颜色 */.color-333[data-v-7f20ea0b]{color:#333}.color-666[data-v-7f20ea0b]{color:#666}.color-999[data-v-7f20ea0b]{color:#999}.bg-color[data-v-7f20ea0b]{background-color:#f7f7f7}.bg-white[data-v-7f20ea0b]{background-color:#fff}.white-color[data-v-7f20ea0b]{color:#fff}.primary-color[data-v-7f20ea0b]{color:#f54400}.success-color[data-v-7f20ea0b]{color:#0e130f}.warning-color[data-v-7f20ea0b]{color:#f0ad4e}.error-color[data-v-7f20ea0b]{color:#dd524d}.primary-text[data-v-7f20ea0b]{color:#333}.secondary-text[data-v-7f20ea0b]{color:#666}.tip-text[data-v-7f20ea0b]{color:#999}.color-e32417[data-v-7f20ea0b]{color:#e32417}.bt[data-v-7f20ea0b]{border-bottom:%?1?% solid #eaeaea}.user-img[data-v-7f20ea0b]{width:%?48?%;height:%?48?%;border-radius:50%}.w91[data-v-7f20ea0b]{width:91%}.author[data-v-7f20ea0b]{width:%?80?%;height:%?36?%;line-height:%?36?%;background:#eee;border-radius:%?20?%}.w520[data-v-7f20ea0b]{width:%?520?%;white-space:pre-wrap}.f518[data-v-7f20ea0b]{color:#518cfc}.ml64[data-v-7f20ea0b]{margin-left:%?64?%}.no-wrap[data-v-7f20ea0b]{white-space:nowrap}',""]),t.exports=e},"945d":function(t,e,i){"use strict";var a;i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return o})),i.d(e,"a",(function(){return a}));var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"pl30 pr30"},t._l(t.comments,(function(e,a){return i("v-uni-view",{key:a,staticClass:"bt pb32 mb32"},[i("v-uni-view",{staticClass:"flex"},[i("v-uni-image",{staticClass:"mr16 user-img",attrs:{src:t.avatarUrl(e.avatar),alt:""},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.toPerson(e)}}}),i("v-uni-view",{staticClass:"w91"},[i("v-uni-view",{staticClass:"between-row mt12"},[i("v-uni-view",[i("v-uni-view",{staticClass:"color-999 ft24 flex"},[t._v(t._s(e.nick)),e.isAuthor?i("v-uni-view",{staticClass:"author ft20 color-666 ml8 tc"},[t._v("作者")]):t._e()],1),i("v-uni-view",{staticClass:"center-align mt20"},[i("v-uni-view",{staticClass:"ft26"},[t._v(t._s(e.content))]),i("v-uni-view",{staticClass:"ml12 color-999 ft22 mr24 no-wrap"},[t._v(t._s(e.commentTime))])],1)],1),i("v-uni-view",{staticClass:"tc relative"},[i("v-uni-view",{on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.onLike(e)}}},[i("svg-icon",{class:["ft32",e.isLike?"primary-color":"color-999"],attrs:{icon:e.isLike?"icon_shoucang":"icon_weishoucang"}})],1),i("v-uni-view",{staticClass:"mt20 ft22"},[t._v(t._s(e.likeCount))])],1)],1),e.children?i("recursive-comments",{attrs:{commentChildren:e.children,commentList:t.comments,index:a},on:{getCommentsStatus:function(e){arguments[0]=e=t.$handleEvent(e),t.getCommentsStatus.apply(void 0,arguments)}}}):t._e()],1)],1)],1)})),1)},o=[]},a51f:function(t,e,i){"use strict";i.r(e);var a=i("49af"),n=i.n(a);for(var o in a)["default"].indexOf(o)<0&&function(t){i.d(e,t,(function(){return a[t]}))}(o);e["default"]=n.a},b209:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={methods:{getImgInfo:function(){var t=this;uni.getImageInfo({src:this.$sourceUrl(this.imgList[0]),success:function(e){var i=e.width,a=e.height,n=a/(i/t.$windowWidth);t.firstImgHeight=Math.round(n)}})},changeSwiper:function(t){this.currentIndex=t.detail.current}},props:["imgList","indicatorDots"],watch:{imgList:{handler:function(t){var e=this;this.$isEmpty(t)||this.$nextTick((function(){e.getImgInfo()}))},immediate:!0}},data:function(){return{firstImgHeight:0,currentIndex:0,carouselList:[],autoplay:!1,interval:2e3,duration:500}}};e.default=a},b29c:function(t,e,i){"use strict";i.r(e);var a=i("f87a"),n=i("8863");for(var o in n)["default"].indexOf(o)<0&&function(t){i.d(e,t,(function(){return n[t]}))}(o);i("63cf");var r,s=i("f0c5"),c=Object(s["a"])(n["default"],a["b"],a["c"],!1,null,"379c7629",null,!1,a["a"],r);e["default"]=c.exports},b44a:function(t,e,i){"use strict";var a=i("4c12"),n=i.n(a);n.a},b84b:function(t,e,i){"use strict";var a=i("776c"),n=i.n(a);n.a},cacb:function(t,e,i){"use strict";i.r(e);var a=i("2d21"),n=i.n(a);for(var o in a)["default"].indexOf(o)<0&&function(t){i.d(e,t,(function(){return a[t]}))}(o);e["default"]=n.a},db90:function(t,e,i){"use strict";function a(t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}Object.defineProperty(e,"__esModule",{value:!0}),e.default=a,i("a4d3"),i("e01a"),i("d3b7"),i("d28b"),i("3ca3"),i("ddb0"),i("a630")},dca8:function(t,e,i){var a=i("23e7"),n=i("bb2f"),o=i("d039"),r=i("861d"),s=i("f183").onFreeze,c=Object.freeze,u=o((function(){c(1)}));a({target:"Object",stat:!0,forced:u,sham:!n},{freeze:function(t){return c&&r(t)?c(s(t)):t}})},eb54:function(t,e,i){"use strict";i.r(e);var a=i("6c15"),n=i.n(a);for(var o in a)["default"].indexOf(o)<0&&function(t){i.d(e,t,(function(){return a[t]}))}(o);e["default"]=n.a},f87a:function(t,e,i){"use strict";var a;i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return o})),i.d(e,"a",(function(){return a}));var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"carousel-wrap",style:{height:t.firstImgHeight+"px"}},[i("v-uni-swiper",{staticClass:"swiper-box",attrs:{"indicator-dots":!1,autoplay:t.autoplay,interval:t.interval,duration:t.duration},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.changeSwiper.apply(void 0,arguments)}}},[t._l(t.imgList,(function(e,a){return[i("v-uni-swiper-item",[i("v-uni-view",{staticClass:"swiper-item"},[i("v-uni-image",{staticClass:"swiper-item-img",attrs:{mode:"aspectFit",src:t.$sourceUrl(e)}})],1)],1)]}))],2),t.imgList.length>1?i("v-uni-view",{staticClass:"swiper-dots pl20 pr20 center-align white-color ft24"},[i("v-uni-text",[t._v(t._s(t.currentIndex+1))]),t._v("/"),i("v-uni-text",[t._v(t._s(t.imgList.length))])],1):t._e()],1)},o=[]}}]);