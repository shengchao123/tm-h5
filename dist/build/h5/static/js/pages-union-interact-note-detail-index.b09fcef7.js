(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-union-interact-note-detail-index"],{"0f35":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={data:function(){return{showHomeBtn:!1,isShareIn:!1}},methods:{onPage:function(){this.isShareIn&&(this.showHomeBtn=!this.showHomeBtn)},scrollToTop:function(){document.documentElement.scrollTop=0,document.body.scrollTop=0}},onLoad:function(t){t.masterOrgId&&(this.showHomeBtn=!0,this.isShareIn=!0,uni.setStorageSync("masterOrgId",t.masterOrgId),uni.setStorageSync("orgId",t.masterOrgId))}},o=i;e.default=o},"16c7":function(t,e,a){"use strict";var i;a.d(e,"b",(function(){return o})),a.d(e,"c",(function(){return n})),a.d(e,"a",(function(){return i}));var o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",[t._l(t.commentChildren,(function(e,i){return a("v-uni-view",{key:i,staticClass:"flex mt24"},[a("v-uni-image",{staticClass:"mr16 user-img",attrs:{src:t.avatarUrl(e.avatar),mode:"scaleToFill"},on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.onPersonalCenter(e)}}}),a("v-uni-view",{staticClass:"w91"},[a("v-uni-view",{staticClass:"between-row mt12"},[a("v-uni-view",[a("v-uni-view",{staticClass:"color-999 ft24"},[t._v(t._s(e.nick)),e.isAuthor?a("span",{staticClass:"author ft20 color-666 ml8"},[t._v("作者")]):t._e()]),a("v-uni-view",{staticClass:"center-align mt20 w520"},[a("v-uni-view",{staticClass:"ft26"},[t._v(t._s(e.content))])],1)],1),a("v-uni-view",{staticClass:"tc relative"},[a("v-uni-view",{class:["ft32 color-999",e.isLike?"icon_zan primary-color":"icon_zankong"],on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.onLike(e,i)}}}),a("v-uni-view",{staticClass:"mt20 ft22"},[t._v(t._s(e.likeCount))])],1)],1)],1)],1)})),t.showMore?a("v-uni-view",t._l(t.commentList[t.index].otherChildren,(function(e,i){return a("v-uni-view",{key:i,staticClass:"flex mt24"},[a("v-uni-image",{staticClass:"mr16 user-img",attrs:{src:t.avatarUrl(e.avatar),mode:"scaleToFill"}}),a("v-uni-view",{staticClass:"between-row mt12 w91"},[a("v-uni-view",[a("v-uni-view",{staticClass:"color-999 ft24"},[t._v(t._s(e.nick)),e.isAuthor?a("span",{staticClass:"author ft20 color-666 ml8"},[t._v("作者")]):t._e()]),a("v-uni-view",{staticClass:"center-align mt20 w520"},[a("v-uni-view",{staticClass:"ft26"},[t._v(t._s(e.content))])],1)],1),a("v-uni-view",{staticClass:"tc relative"},[a("v-uni-view",{class:["ft32",e.isLike?"icon_zan primary-color":"icon_zankong"],on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.onLike(e,i,2)}}}),a("v-uni-view",{staticClass:"mt20 ft22"},[t._v(t._s(e.likeCount))])],1)],1)],1)})),1):t._e(),t.commentList[t.index].otherChildren.length?a("v-uni-view",{staticClass:"f518 ft24 ml64 mt32",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.lookMore()}}},[t._v(t._s(t.showMore?"收起":"展开")+t._s(t.commentList[t.index].otherChildren.length)+"条评论")]):t._e()],2)},n=[]},2219:function(t,e,a){var i=a("f718");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var o=a("4f06").default;o("97f01cce",i,!0,{sourceMap:!1,shadowMode:!1})},2909:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=c;var i=s(a("6005")),o=s(a("db90")),n=s(a("06c5")),r=s(a("3427"));function s(t){return t&&t.__esModule?t:{default:t}}function c(t){return(0,i.default)(t)||(0,o.default)(t)||(0,n.default)(t)||(0,r.default)()}},"2d21":function(t,e,a){"use strict";var i=a("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,a("d81d");var o=i(a("2909")),n=i(a("6155")),r=a("b893"),s={methods:{onLike:function(t){if(this.$notMember())return this.$goLogin();this.dealLike(t)},dealLike:function(t){var e=this,a={communityNoteCommentId:t.id},i="";i=t.isLike?"cancelCommunityLikeNoteComment":"communityLikeNoteComment",this.$api[i](a).then((function(a){if(a.isError)return e.$msg(a.message);e.$msg(t.isLike?"取消点赞":"点赞成功"),t.isLike?t.likeCount=t.likeCount-1:t.likeCount=t.likeCount+1,t.isLike=!t.isLike}))},getCommentsStatus:function(t){this.commentList=(0,o.default)(t)},toPerson:function(t){uni.navigateTo({url:"/pagesDiscover/personalCenter/index?id=".concat(t.communityMemberId)})},avatarUrl:r.avatarUrl},computed:{comments:function(){return this.commentList.map((function(t){t.showMore=!1})),this.commentList}},props:{commentList:{type:Array,default:function(){return[]}}},components:{RecursiveComments:n.default}};e.default=s},3427:function(t,e,a){"use strict";function i(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}Object.defineProperty(e,"__esModule",{value:!0}),e.default=i},3583:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={data:function(){return{commentList:[],communityNoteId:void 0}},methods:{getNoteCommentDetailPage:function(){var t=this,e={communityNoteId:this.communityNoteId};this.$api.getNoteCommentDetailPage(e).then((function(e){e.isError&&t.$msg(e.message);var a=e.content.items;t.commentList=a}))}}},o=i;e.default=o},"49af":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,a("a9e3");var i=a("b893"),o={name:"recursive",data:function(){return{showMore:!1}},methods:{onPersonalCenter:function(t){uni.navigateTo({url:"/pagesDiscover/personalCenter/index?id=".concat(t.id)})},onLike:function(t,e,a){var i=this;if(this.$notMember())return this.$goLogin();var o="",n={communityNoteId:t.communityNoteId};o=t.isLike?"cancelCommunityLikeNoteComment":"communityLikeNoteComment";var r=2===a?"otherChildren":"children";this.$api[o](n).then((function(a){if(a.isError)return i.$msg(a.message);i.$msg(t.isLike?"取消点赞":"点赞成功");var o=i.commentList[i.index][r][e];t.isLike?o.likeCount=o.likeCount-1:o.likeCount=o.likeCount+1,o.isLike=!o.isLike,i.$emit("getCommentsStatus",i.commentList)}))},lookMore:function(){this.showMore=!this.showMore},avatarUrl:i.avatarUrl},props:{commentChildren:{type:Array,default:function(){return[]}},commentList:{type:Array,default:function(){return[]}},index:{type:Number,default:function(){return""}}}};e.default=o},"4c12":function(t,e,a){var i=a("78ab");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var o=a("4f06").default;o("0e9dc9de",i,!0,{sourceMap:!1,shadowMode:!1})},"4cac":function(t,e,a){"use strict";a.r(e);var i=a("7ae1"),o=a("fc80");for(var n in o)["default"].indexOf(n)<0&&function(t){a.d(e,t,(function(){return o[t]}))}(n);a("7317");var r,s=a("f0c5"),c=Object(s["a"])(o["default"],i["b"],i["c"],!1,null,"e1ee8134",null,!1,i["a"],r);e["default"]=c.exports},"4ec9":function(t,e,a){"use strict";var i=a("6d61"),o=a("6566");t.exports=i("Map",(function(t){return function(){return t(this,arguments.length?arguments[0]:void 0)}}),o)},"5a65":function(t,e,a){"use strict";var i;a.d(e,"b",(function(){return o})),a.d(e,"c",(function(){return n})),a.d(e,"a",(function(){return i}));var o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{staticClass:"carousel-wrap bg-white",style:{height:t.firstImgHeight+"px"}},[a("v-uni-swiper",{staticClass:"swiper-box",attrs:{"indicator-dots":!1,autoplay:t.autoplay,interval:t.interval,duration:t.duration},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.changeSwiper.apply(void 0,arguments)}}},[t._l(t.imgList,(function(e,i){return[a("v-uni-swiper-item",[a("v-uni-view",{staticClass:"swiper-item"},[a("v-uni-image",{staticClass:"swiper-item-img",attrs:{mode:"widthFix",src:t.$sourceUrl(e)}})],1)],1)]}))],2),t.imgList.length>1?a("v-uni-view",{staticClass:"swiper-dots pl20 pr20 center-align white-color ft24"},[a("v-uni-text",[t._v(t._s(t.currentIndex+1))]),t._v("/"),a("v-uni-text",[t._v(t._s(t.imgList.length))])],1):t._e()],1)},n=[]},6005:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=n;var i=o(a("6b75"));function o(t){return t&&t.__esModule?t:{default:t}}function n(t){if(Array.isArray(t))return(0,i.default)(t)}},6060:function(t,e,a){"use strict";var i=a("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,a("dca8"),a("4ec9"),a("d3b7"),a("3ca3"),a("ddb0");var o=i(a("b29c")),n=i(a("7501")),r=i(a("6550")),s=i(a("3583")),c=a("b893"),l=i(a("0f35")),u={methods:{avatarUrl:c.avatarUrl,onShowShareDialog:function(){if(this.$notMember())return this.$goLogin();1!==this.detailInfo.status&&this.$refs.shareDialog.show()},onBlur:function(){this.isFocus=!1},onFocus:function(){if(this.$notMember())return this.$goLogin();1!==this.detailInfo.status&&(this.memberPersonalInfo.isRealName||(this.isFocus=!1,uni.hideKeyboard(),uni.showModal({title:"请先实名认证",content:"认证后，即可发布帖子，评论",cancelText:"取消",confirmText:"实名认证",confirmColor:"#E32417",success:function(t){t.confirm&&uni.navigateTo({url:"/pages/mine/real-name/index"})}})))},onConfirm:function(){var t=this,e=this.content;if(this.$isEmpty(e))this.$msg("请先填写评论");else{var a=this.detailInfo.communityNoteId,i={communityNoteId:a,content:e};this.$api.createCommunityNoteComment(i).then((function(e){if(e.isError)return t.$msg(e.message);t.$msg("评论已发布"),t.content="",t.getNoteCommentDetailPage()}))}},changeStatus:function(t){var e=this;if(this.$notMember())return this.$goLogin();if(1!==this.detailInfo.status){var a=this.detailInfo,i=a.communityMemberId,o=a.communityNoteId,n=this.statusMap.get(t).get(this.detailInfo[t]),r=n.apiName,s=n.msg,c=n.countKey,l=n.count,u={communityMemberId:i,communityNoteId:o};this.$api[r](u).then((function(a){if(a.isError)e.$msg(a.message);else{if(e.$msg(s),"isAttention"!==t){var i=e.detailInfo[c];e.detailInfo[c]=i+l}e.detailInfo[t]=!e.detailInfo[t]}}))}},onGoTopicDetail:function(t){uni.navigateTo({url:"/pagesDiscover/topic-detail/index?communityTopicId=".concat(t.communityTopicId)})},shareCommunityNote:function(){var t=this,e=this.communityNoteId,a=this.shareId,i={};this.$isEmpty(a)?i.sourceId=e:i.shareId=a,this.$api.shareCommunityNote(i).then((function(e){e.isError?t.$msg(e.message):t.shareId=e.content.shareId}))},getNoteDetailInfo:function(){var t=this,e=this.$isEmpty(this.shareId)?{communityNoteId:this.communityNoteId}:{shareId:this.shareId},a=this.$isEmpty(this.shareId)?"getCommunityNoteInfoById":"getCommunityNoteInfoByShareId";this.$api[a](e).then((function(e){e.isError?t.$msg(e.message):t.detailInfo=e.content||{}}))},setOption:function(t){var e=t.communityNoteId,a=t.shareId;this.communityNoteId=e,this.shareId=a,this.shareCommunityNote(),this.getNoteCommentDetailPage(),this.getNoteDetailInfo()}},data:function(){return{communityNoteId:"",shareId:"",isShare:!1,content:"",isFocus:!1,detailInfo:{},statusMap:Object.freeze(new Map([["isAttention",new Map([[!0,{apiName:"cancelAttentionUser",msg:"取消关注"}],[!1,{apiName:"attentionUser",msg:"已关注"}]])],["isLike",new Map([[!0,{apiName:"cancelCommunityLikeNote",msg:"取消点赞",countKey:"likeQuantity",count:-1}],[!1,{apiName:"communityLikeNote",msg:"点赞成功",countKey:"likeQuantity",count:1}]])],["isFavorites",new Map([[!0,{apiName:"cancelCommunityFavoritesNote",msg:"取消收藏",countKey:"favoritesQuantity",count:-1}],[!1,{apiName:"communityFavoritesNote",msg:"收藏成功",countKey:"favoritesQuantity",count:1}]])]]))}},computed:{memberPersonalInfo:function(){return this.$store.state.user.memberPersonalInfo},shareData:function(){var t=this.detailInfo,e=t.title,a=t.content,i=t.attachments;return{title:e,desc:a,link:window.location.href,imgUrl:this.$isEmpty(i)?"":this.$sourceUrl(i[0])}},followStatus:function(){var t=this.detailInfo,e=t.isAttention,a=t.isFans;return e?a?"互相关注":"已关注":"关注"}},mixins:[s.default,l.default],components:{Carousel:o.default,Comments:n.default,ShareDialog:r.default},onLoad:function(t){this.setOption(t)},onPullDownRefresh:function(){uni.stopPullDownRefresh()}};e.default=u},6155:function(t,e,a){"use strict";a.r(e);var i=a("16c7"),o=a("a51f");for(var n in o)["default"].indexOf(n)<0&&function(t){a.d(e,t,(function(){return o[t]}))}(n);a("b44a");var r,s=a("f0c5"),c=Object(s["a"])(o["default"],i["b"],i["c"],!1,null,"c44758e8",null,!1,i["a"],r);e["default"]=c.exports},6566:function(t,e,a){"use strict";var i=a("9bf2").f,o=a("7c73"),n=a("e2cc"),r=a("0366"),s=a("19aa"),c=a("2266"),l=a("7dd0"),u=a("2626"),d=a("83ab"),f=a("f183").fastKey,v=a("69f3"),m=v.set,h=v.getterFor;t.exports={getConstructor:function(t,e,a,l){var u=t((function(t,i){s(t,u,e),m(t,{type:e,index:o(null),first:void 0,last:void 0,size:0}),d||(t.size=0),void 0!=i&&c(i,t[l],{that:t,AS_ENTRIES:a})})),v=h(e),p=function(t,e,a){var i,o,n=v(t),r=g(t,e);return r?r.value=a:(n.last=r={index:o=f(e,!0),key:e,value:a,previous:i=n.last,next:void 0,removed:!1},n.first||(n.first=r),i&&(i.next=r),d?n.size++:t.size++,"F"!==o&&(n.index[o]=r)),t},g=function(t,e){var a,i=v(t),o=f(e);if("F"!==o)return i.index[o];for(a=i.first;a;a=a.next)if(a.key==e)return a};return n(u.prototype,{clear:function(){var t=this,e=v(t),a=e.index,i=e.first;while(i)i.removed=!0,i.previous&&(i.previous=i.previous.next=void 0),delete a[i.index],i=i.next;e.first=e.last=void 0,d?e.size=0:t.size=0},delete:function(t){var e=this,a=v(e),i=g(e,t);if(i){var o=i.next,n=i.previous;delete a.index[i.index],i.removed=!0,n&&(n.next=o),o&&(o.previous=n),a.first==i&&(a.first=o),a.last==i&&(a.last=n),d?a.size--:e.size--}return!!i},forEach:function(t){var e,a=v(this),i=r(t,arguments.length>1?arguments[1]:void 0,3);while(e=e?e.next:a.first){i(e.value,e.key,this);while(e&&e.removed)e=e.previous}},has:function(t){return!!g(this,t)}}),n(u.prototype,a?{get:function(t){var e=g(this,t);return e&&e.value},set:function(t,e){return p(this,0===t?0:t,e)}}:{add:function(t){return p(this,t=0===t?0:t,t)}}),d&&i(u.prototype,"size",{get:function(){return v(this).size}}),u},setStrong:function(t,e,a){var i=e+" Iterator",o=h(e),n=h(i);l(t,e,(function(t,e){m(this,{type:i,target:t,state:o(t),kind:e,last:void 0})}),(function(){var t=n(this),e=t.kind,a=t.last;while(a&&a.removed)a=a.previous;return t.target&&(t.last=a=a?a.next:t.state.first)?"keys"==e?{value:a.key,done:!1}:"values"==e?{value:a.value,done:!1}:{value:[a.key,a.value],done:!1}:(t.target=void 0,{value:void 0,done:!0})}),a?"entries":"values",!a,!0),u(e)}}},7317:function(t,e,a){"use strict";var i=a("83f5"),o=a.n(i);o.a},7346:function(t,e,a){var i=a("4bad");e=i(!1),e.push([t.i,'@charset "UTF-8";\n/* uni.scss */\n/* 页面左右间距 */\n/* 文字尺寸 */\n/*文字颜色*/\n/* 图片加载中颜色 */\n/* 行为相关颜色 */\n/* 边框颜色 */.color-primary[data-v-e1ee8134]{color:#3049c0}.color-333[data-v-e1ee8134]{color:#333}.color-666[data-v-e1ee8134]{color:#666}.color-999[data-v-e1ee8134]{color:#999}.bg-color[data-v-e1ee8134]{background-color:#f7f7f7}.bg-white[data-v-e1ee8134]{background-color:#fff}.white-color[data-v-e1ee8134]{color:#fff}.primary-color[data-v-e1ee8134]{color:#f54400}.success-color[data-v-e1ee8134]{color:#0e130f}.warning-color[data-v-e1ee8134]{color:#f0ad4e}.error-color[data-v-e1ee8134]{color:#dd524d}.primary-text[data-v-e1ee8134]{color:#333}.secondary-text[data-v-e1ee8134]{color:#666}.tip-text[data-v-e1ee8134]{color:#999}.color-e32417[data-v-e1ee8134]{color:#e32417}.w30[data-v-e1ee8134]{display:inline-block;width:%?30?%}.note-detail-wrap .user .user-avatar[data-v-e1ee8134]{width:%?80?%;height:%?80?%;border-radius:50%}.note-detail-wrap .user .community-title[data-v-e1ee8134]{width:%?120?%;height:%?36?%;border:%?1?% solid #ff9708;border-radius:%?18?%;color:#ff9708}.note-detail-wrap .user .follow[data-v-e1ee8134],\n.note-detail-wrap .user .have-follow[data-v-e1ee8134]{padding:0 %?20?%;height:%?48?%;background:#f54400;border-radius:%?24?%;color:#fff;border:1px solid #f54400}.note-detail-wrap .user .have-follow[data-v-e1ee8134]{background:#fff;color:#333;border-color:#d1d1d1}.note-detail-wrap .user .share-icon[data-v-e1ee8134]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:start;-webkit-align-items:flex-start;align-items:flex-start;padding-top:%?18?%}.note-detail-wrap .user .share-icon uni-text[data-v-e1ee8134]{display:inline-block;border-radius:50%}.note-detail-wrap .user .share-icon uni-text + uni-text[data-v-e1ee8134]{margin-left:%?6?%}.note-detail-wrap .user .share-icon .normal[data-v-e1ee8134]{width:%?6?%;height:%?6?%;background:#d8d8d8}.note-detail-wrap .user .share-icon .middle[data-v-e1ee8134]{width:%?8?%;height:%?8?%;background:#666}.note-detail-wrap .note-content[data-v-e1ee8134]{border-bottom:%?1?% solid #eaeaea}.note-detail-wrap .note-content .content[data-v-e1ee8134]{line-height:1.6}.note-detail-wrap .note-content .label-list .label-list-item + .label-list-item[data-v-e1ee8134]{margin-left:%?8?%}.note-detail-wrap .note-content .label-list .label-list-item[data-v-e1ee8134]{height:%?48?%;background:#f3f8ff;border-radius:%?24?%;color:#518cfc}.note-detail-wrap .note-content .label-list .label-list-item .icon[data-v-e1ee8134]{width:%?28?%;height:%?28?%;background:#518cfc;border-radius:50%}.note-detail-wrap .comment-list[data-v-e1ee8134]{padding-bottom:%?98?%}.note-detail-wrap .add-comment[data-v-e1ee8134]{position:fixed;bottom:0;width:100%;height:%?98?%;border-top:%?1?% solid #eaeaea}.note-detail-wrap .add-comment .input[data-v-e1ee8134]{width:%?330?%;height:%?64?%;background:#f4f4f4;border-radius:%?49?%}.note-detail-wrap .add-comment .icon-item[data-v-e1ee8134]{margin-left:%?64?%}',""]),t.exports=e},7501:function(t,e,a){"use strict";a.r(e);var i=a("945d"),o=a("cacb");for(var n in o)["default"].indexOf(n)<0&&function(t){a.d(e,t,(function(){return o[t]}))}(n);a("b84b");var r,s=a("f0c5"),c=Object(s["a"])(o["default"],i["b"],i["c"],!1,null,"7f20ea0b",null,!1,i["a"],r);e["default"]=c.exports},7622:function(t,e,a){"use strict";var i=a("2219"),o=a.n(i);o.a},"776c":function(t,e,a){var i=a("9196");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var o=a("4f06").default;o("27c143da",i,!0,{sourceMap:!1,shadowMode:!1})},"78ab":function(t,e,a){var i=a("4bad");e=i(!1),e.push([t.i,'@charset "UTF-8";\n/* uni.scss */\n/* 页面左右间距 */\n/* 文字尺寸 */\n/*文字颜色*/\n/* 图片加载中颜色 */\n/* 行为相关颜色 */\n/* 边框颜色 */.color-primary[data-v-c44758e8]{color:#3049c0}.color-333[data-v-c44758e8]{color:#333}.color-666[data-v-c44758e8]{color:#666}.color-999[data-v-c44758e8]{color:#999}.bg-color[data-v-c44758e8]{background-color:#f7f7f7}.bg-white[data-v-c44758e8]{background-color:#fff}.white-color[data-v-c44758e8]{color:#fff}.primary-color[data-v-c44758e8]{color:#f54400}.success-color[data-v-c44758e8]{color:#0e130f}.warning-color[data-v-c44758e8]{color:#f0ad4e}.error-color[data-v-c44758e8]{color:#dd524d}.primary-text[data-v-c44758e8]{color:#333}.secondary-text[data-v-c44758e8]{color:#666}.tip-text[data-v-c44758e8]{color:#999}.color-e32417[data-v-c44758e8]{color:#e32417}.user-img[data-v-c44758e8]{width:%?48?%;height:%?48?%;border-radius:50%}.w91[data-v-c44758e8]{width:91%}.author[data-v-c44758e8]{padding:%?8?% %?20?%;background:#eee;border-radius:%?20?%}.w520[data-v-c44758e8]{width:%?520?%;white-space:pre-wrap}.f518[data-v-c44758e8]{color:#518cfc}.ml64[data-v-c44758e8]{margin-left:%?64?%}',""]),t.exports=e},"7ae1":function(t,e,a){"use strict";var i;a.d(e,"b",(function(){return o})),a.d(e,"c",(function(){return n})),a.d(e,"a",(function(){return i}));var o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{staticClass:"note-detail-wrap bg-white",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.onPage.apply(void 0,arguments)}}},[a("carousel",{attrs:{imgList:t.detailInfo.attachments,indicatorDots:!0}}),a("v-uni-view",{staticClass:"user between-row pl30 pr30 pt24 pb24"},[a("v-uni-view",{staticClass:"center-align"},[a("img",{staticClass:"user-avatar",attrs:{src:t.avatarUrl(t.detailInfo.avatar),alt:""}}),a("v-uni-view",{staticClass:"ml16"},[a("v-uni-view",{staticClass:"flex"},[a("v-uni-text",{staticClass:"ft28"},[t._v(t._s(t.detailInfo.nick))])],1),a("v-uni-view",{staticClass:"ft22 color-999"},[t.detailInfo.orgName?a("v-uni-text",{staticClass:"mr40"},[t._v(t._s(t.detailInfo.orgName))]):t._e(),a("v-uni-text",[t._v(t._s(t.detailInfo.time))])],1)],1)],1)],1),a("v-uni-view",{staticClass:"pt8 ml30 mr30 note-content"},[a("v-uni-view",{staticClass:"pb32 column"},[a("v-uni-text",{staticClass:"ft36 bold pb16"},[t._v(t._s(t.detailInfo.title))]),a("v-uni-text",{staticClass:"content ft30"},[t._v(t._s(t.detailInfo.content))])],1)],1),a("v-uni-view",{staticClass:"comment-list pt24"},[a("v-uni-view",{staticClass:"pl30 pb24 ft26"},[t._v("共"+t._s(t.commentList.length||0)+"条评论")]),a("comments",{attrs:{commentList:t.commentList}})],1),a("v-uni-view",{staticClass:"add-comment center-align pl30 pr30 bg-white between-row"},[a("v-uni-input",{ref:"input",staticClass:"input ft28 pl20",attrs:{placeholder:"随便说点什么～",focus:t.isFocus,"adjust-position":!0,"cursor-spacing":15,"confirm-type":"send","auto-blur":!0,type:"text"},on:{blur:function(e){arguments[0]=e=t.$handleEvent(e),t.onBlur.apply(void 0,arguments)},focus:function(e){arguments[0]=e=t.$handleEvent(e),t.onFocus.apply(void 0,arguments)},confirm:function(e){arguments[0]=e=t.$handleEvent(e),t.onConfirm.apply(void 0,arguments)}},model:{value:t.content,callback:function(e){t.content=e},expression:"content"}}),a("v-uni-view",{staticClass:"tip-text ft30 flex"},[a("v-uni-view",{staticClass:"icon-item"},[a("v-uni-view",{on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.onShowShareDialog.apply(void 0,arguments)}}},[a("svg-icon",{attrs:{icon:"icon_zhuanfa"}}),a("v-uni-text",{staticClass:"ft26 pl8 color-666"},[t._v(t._s(t.detailInfo.shareQuantity))])],1)],1),a("v-uni-view",{staticClass:"icon-item relative",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.changeStatus("isLike")}}},[a("svg-icon",{class:["ft32",t.detailInfo.isLike?"primary-color":"color-999"],attrs:{icon:t.detailInfo.isLike?"icon_shoucang":"icon_weishoucang"}}),a("v-uni-text",{staticClass:"ft26 pl8 w30 color-666"},[t._v(t._s(t.detailInfo.likeQuantity))])],1)],1)],1),a("share-dialog",{ref:"shareDialog",attrs:{showHomeBtn:t.showHomeBtn,shareData:t.shareData}})],1)},n=[]},"83f5":function(t,e,a){var i=a("7346");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var o=a("4f06").default;o("12fe4ed2",i,!0,{sourceMap:!1,shadowMode:!1})},8863:function(t,e,a){"use strict";a.r(e);var i=a("b209"),o=a.n(i);for(var n in i)["default"].indexOf(n)<0&&function(t){a.d(e,t,(function(){return i[t]}))}(n);e["default"]=o.a},9196:function(t,e,a){var i=a("4bad");e=i(!1),e.push([t.i,'@charset "UTF-8";\n/* uni.scss */\n/* 页面左右间距 */\n/* 文字尺寸 */\n/*文字颜色*/\n/* 图片加载中颜色 */\n/* 行为相关颜色 */\n/* 边框颜色 */.color-primary[data-v-7f20ea0b]{color:#3049c0}.color-333[data-v-7f20ea0b]{color:#333}.color-666[data-v-7f20ea0b]{color:#666}.color-999[data-v-7f20ea0b]{color:#999}.bg-color[data-v-7f20ea0b]{background-color:#f7f7f7}.bg-white[data-v-7f20ea0b]{background-color:#fff}.white-color[data-v-7f20ea0b]{color:#fff}.primary-color[data-v-7f20ea0b]{color:#f54400}.success-color[data-v-7f20ea0b]{color:#0e130f}.warning-color[data-v-7f20ea0b]{color:#f0ad4e}.error-color[data-v-7f20ea0b]{color:#dd524d}.primary-text[data-v-7f20ea0b]{color:#333}.secondary-text[data-v-7f20ea0b]{color:#666}.tip-text[data-v-7f20ea0b]{color:#999}.color-e32417[data-v-7f20ea0b]{color:#e32417}.bt[data-v-7f20ea0b]{border-bottom:%?1?% solid #eaeaea}.user-img[data-v-7f20ea0b]{width:%?48?%;height:%?48?%;border-radius:50%}.w91[data-v-7f20ea0b]{width:91%}.author[data-v-7f20ea0b]{width:%?80?%;height:%?36?%;line-height:%?36?%;background:#eee;border-radius:%?20?%}.w520[data-v-7f20ea0b]{width:%?520?%;white-space:pre-wrap}.f518[data-v-7f20ea0b]{color:#518cfc}.ml64[data-v-7f20ea0b]{margin-left:%?64?%}.no-wrap[data-v-7f20ea0b]{white-space:nowrap}',""]),t.exports=e},"945d":function(t,e,a){"use strict";var i;a.d(e,"b",(function(){return o})),a.d(e,"c",(function(){return n})),a.d(e,"a",(function(){return i}));var o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{staticClass:"pl30 pr30"},t._l(t.comments,(function(e,i){return a("v-uni-view",{key:i,staticClass:"bt pb32 mb32"},[a("v-uni-view",{staticClass:"flex"},[a("v-uni-image",{staticClass:"mr16 user-img",attrs:{src:t.avatarUrl(e.avatar),alt:""},on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.toPerson(e)}}}),a("v-uni-view",{staticClass:"w91"},[a("v-uni-view",{staticClass:"between-row mt12"},[a("v-uni-view",[a("v-uni-view",{staticClass:"color-999 ft24 flex"},[t._v(t._s(e.nick)),e.isAuthor?a("v-uni-view",{staticClass:"author ft20 color-666 ml8 tc"},[t._v("作者")]):t._e()],1),a("v-uni-view",{staticClass:"center-align mt20"},[a("v-uni-view",{staticClass:"ft26"},[t._v(t._s(e.content))]),a("v-uni-view",{staticClass:"ml12 color-999 ft22 mr24 no-wrap"},[t._v(t._s(e.commentTime))])],1)],1),a("v-uni-view",{staticClass:"tc relative"},[a("v-uni-view",{on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.onLike(e)}}},[a("svg-icon",{class:["ft32",e.isLike?"primary-color":"color-999"],attrs:{icon:e.isLike?"icon_shoucang":"icon_weishoucang"}})],1),a("v-uni-view",{staticClass:"mt20 ft22"},[t._v(t._s(e.likeCount))])],1)],1),e.children?a("recursive-comments",{attrs:{commentChildren:e.children,commentList:t.comments,index:i},on:{getCommentsStatus:function(e){arguments[0]=e=t.$handleEvent(e),t.getCommentsStatus.apply(void 0,arguments)}}}):t._e()],1)],1)],1)})),1)},n=[]},a51f:function(t,e,a){"use strict";a.r(e);var i=a("49af"),o=a.n(i);for(var n in i)["default"].indexOf(n)<0&&function(t){a.d(e,t,(function(){return i[t]}))}(n);e["default"]=o.a},b209:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={methods:{getImgInfo:function(){var t=this;uni.getImageInfo({src:this.$sourceUrl(this.imgList[0]),success:function(e){var a=e.width,i=e.height,o=i/(a/t.$windowWidth);t.firstImgHeight=Math.round(o)}})},changeSwiper:function(t){this.currentIndex=t.detail.current}},props:["imgList","indicatorDots"],watch:{imgList:{handler:function(t){var e=this;this.$isEmpty(t)||this.$nextTick((function(){e.getImgInfo()}))},immediate:!0}},data:function(){return{firstImgHeight:0,currentIndex:0,carouselList:[],autoplay:!1,interval:2e3,duration:500}}};e.default=i},b29c:function(t,e,a){"use strict";a.r(e);var i=a("5a65"),o=a("8863");for(var n in o)["default"].indexOf(n)<0&&function(t){a.d(e,t,(function(){return o[t]}))}(n);a("7622");var r,s=a("f0c5"),c=Object(s["a"])(o["default"],i["b"],i["c"],!1,null,"272abf8a",null,!1,i["a"],r);e["default"]=c.exports},b44a:function(t,e,a){"use strict";var i=a("4c12"),o=a.n(i);o.a},b84b:function(t,e,a){"use strict";var i=a("776c"),o=a.n(i);o.a},cacb:function(t,e,a){"use strict";a.r(e);var i=a("2d21"),o=a.n(i);for(var n in i)["default"].indexOf(n)<0&&function(t){a.d(e,t,(function(){return i[t]}))}(n);e["default"]=o.a},db90:function(t,e,a){"use strict";function i(t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}Object.defineProperty(e,"__esModule",{value:!0}),e.default=i,a("a4d3"),a("e01a"),a("d3b7"),a("d28b"),a("3ca3"),a("ddb0"),a("a630")},f718:function(t,e,a){var i=a("4bad");e=i(!1),e.push([t.i,'@charset "UTF-8";\n/* uni.scss */\n/* 页面左右间距 */\n/* 文字尺寸 */\n/*文字颜色*/\n/* 图片加载中颜色 */\n/* 行为相关颜色 */\n/* 边框颜色 */.color-primary[data-v-272abf8a]{color:#3049c0}.color-333[data-v-272abf8a]{color:#333}.color-666[data-v-272abf8a]{color:#666}.color-999[data-v-272abf8a]{color:#999}.bg-color[data-v-272abf8a]{background-color:#f7f7f7}.bg-white[data-v-272abf8a]{background-color:#fff}.white-color[data-v-272abf8a]{color:#fff}.primary-color[data-v-272abf8a]{color:#f54400}.success-color[data-v-272abf8a]{color:#0e130f}.warning-color[data-v-272abf8a]{color:#f0ad4e}.error-color[data-v-272abf8a]{color:#dd524d}.primary-text[data-v-272abf8a]{color:#333}.secondary-text[data-v-272abf8a]{color:#666}.tip-text[data-v-272abf8a]{color:#999}.color-e32417[data-v-272abf8a]{color:#e32417}.carousel-wrap[data-v-272abf8a]{width:100%;min-height:%?400?%;max-height:%?920?%;position:relative}.carousel-wrap .swiper-box[data-v-272abf8a],\n.carousel-wrap .swiper-item[data-v-272abf8a],\n.carousel-wrap .swiper-item-img[data-v-272abf8a]{width:100%;height:100%}.carousel-wrap .swiper-dots[data-v-272abf8a]{width:%?80?%;position:absolute;bottom:%?16?%;right:%?24?%;height:%?36?%;border-radius:%?18?%;background:rgba(0,0,0,.8)}',""]),t.exports=e},fc80:function(t,e,a){"use strict";a.r(e);var i=a("6060"),o=a.n(i);for(var n in i)["default"].indexOf(n)<0&&function(t){a.d(e,t,(function(){return i[t]}))}(n);e["default"]=o.a}}]);