(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-mine-org-life-record-Detail"],{"05f3":function(t,e,n){var o=n("4502");"string"===typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);var a=n("4f06").default;a("7d199a80",o,!0,{sourceMap:!1,shadowMode:!1})},"078c":function(t,e,n){"use strict";n.r(e);var o=n("c1dd"),a=n("aab5");for(var i in a)["default"].indexOf(i)<0&&function(t){n.d(e,t,(function(){return a[t]}))}(i);n("2eab");var r,l=n("f0c5"),c=Object(l["a"])(a["default"],o["b"],o["c"],!1,null,"fad1e88e",null,!1,o["a"],r);e["default"]=c.exports},"0f35":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o={data:function(){return{showHomeBtn:!1,isShareIn:!1}},methods:{onPage:function(){this.isShareIn&&(this.showHomeBtn=!this.showHomeBtn)},scrollToTop:function(){document.documentElement.scrollTop=0,document.body.scrollTop=0}},onLoad:function(t){t.masterOrgId&&(this.showHomeBtn=!0,this.isShareIn=!0,uni.setStorageSync("masterOrgId",t.masterOrgId),uni.setStorageSync("orgId",t.masterOrgId))}},a=o;e.default=a},"109e":function(t,e,n){"use strict";var o=n("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,n("4160"),n("159b"),n("99af"),n("dca8");var a=o(n("6550")),i=o(n("0894")),r=o(n("0f35")),l={name:"Detail",methods:{previewImage:function(t){var e=this,n=[];this.lifeData.attachmentList.forEach((function(t){n.push(e.$sourceUrl(t.url))})),uni.previewImage({current:n[t],urls:n,indicator:"number"})},onShare:function(){this.$refs.shareDialog.show()},onJourneyItinerary:function(t){"journeyItineraryName"===t&&uni.navigateTo({url:"/pages/original-travel/stroke-order/detail?id=".concat(this.journeyItineraryId)})},onEdit:function(){var t="pageType=edit&id=".concat(this.journeyItineraryId,"&name=").concat(this.lifeData.journeyItineraryName);uni.navigateTo({url:"/pages/mine/org-life-record/index?".concat(t)})},onDelete:function(){var t=this,e={journeyItineraryId:this.journeyItineraryId};this.$api.removeJourneyLifeDocumentary(e).then((function(e){if(e.isError)return t.$msg(e.message);t.$msg("删除成功"),setTimeout((function(){uni.navigateBack()}),500)}))},getShareData:function(){var t=this.lifeData,e=t.journeyItineraryName,n=t.activityExperience;this.shareData={link:window.location.href,title:e,desc:n}},getJourneyLifeDocumentaryByItineraryId:function(){var t=this,e=this.journeyItineraryId;if(e){var n={journeyItineraryId:e};this.$api.getJourneyLifeDocumentaryByItineraryId(n).then((function(e){if(e.isError)return t.$msg(e.message);t.lifeData=e.content,t.getShareData()}))}}},data:function(){return{journeyItineraryId:null,lifeInfoProp:Object.freeze([{prop:"journeyItineraryName",name:"对应行程"},{prop:"shouldNumber",name:"应到人数"},{prop:"actualNumber",name:"实到人数"}]),lifeData:{},isDelShow:!1,shareData:{}}},onShow:function(){if(this.$notMember())return this.$goLogin();this.getJourneyLifeDocumentaryByItineraryId()},onLoad:function(t){this.journeyItineraryId=t.id},computed:{btnStyle:function(){var t=this.lifeData.isSelf?"330rpx":"690rpx",e={fontSize:"30rpx",color:"#E32417",width:t,height:"88rpx",borderRadius:"44rpx",fontWeight:"bold",border:"1rpx solid #E32417",background:"#fff"};return e},maskTitleStyle:function(){var t={fontSize:"32rpx",color:"#333",paddingTop:"58rpx",fontWeight:"bold"};return t},maskContentStyle:function(){var t={fontSize:"26rpx",color:"#999",padding:"28rpx 0 58rpx"};return t},maskCancelStyle:function(){var t={fontSize:"32rpx",borderRight:"1rpx solid #EAEAEA"};return t},maskConfirmStyle:function(){var t={fontSize:"32rpx",borderRadius:"24rpx"};return t}},mixins:[r.default],components:{LineClock:i.default,ShareDialog:a.default}};e.default=l},"2eab":function(t,e,n){"use strict";var o=n("05f3"),a=n.n(o);a.a},"33c0":function(t,e,n){"use strict";n.r(e);var o=n("109e"),a=n.n(o);for(var i in o)["default"].indexOf(i)<0&&function(t){n.d(e,t,(function(){return o[t]}))}(i);e["default"]=a.a},4465:function(t,e,n){"use strict";n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return i})),n.d(e,"a",(function(){return o}));var o={uButton:n("d9ad").default,uModal:n("078c").default},a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"life-wrap",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.onPage.apply(void 0,arguments)}}},[n("v-uni-view",{staticClass:"tb pl30 pr30 bg-white"},[t._l(t.lifeInfoProp,(function(e,o){return n("v-uni-view",{key:o,staticClass:"center-align h88 bb ft28 color-333"},[n("v-uni-text",{staticClass:"w144 bold"},[t._v(t._s(e.name))]),n("v-uni-text",{class:"journeyItineraryName"===e.prop&&"color-518cfc",on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.onJourneyItinerary(e.prop)}}},[t._v(t._s(t.lifeData[e.prop]))])],1)})),n("v-uni-view",[n("v-uni-view",{staticClass:"center-align h88 ft28 color-333"},[n("v-uni-text",{staticClass:"w144 bold"},[t._v("活动心得")])],1),n("v-uni-text",{staticClass:"mt-8"},[t._v(t._s(t.lifeData.activityExperience))])],1),n("v-uni-view",{staticClass:"mt24 flex pb8 flex-wrap life-image"},t._l(t.lifeData.attachmentList,(function(e,o){return n("v-uni-view",{key:o,staticClass:"life-item column center"},[n("v-uni-image",{staticClass:"life-img",attrs:{src:t.$sourceUrl(e.url),mode:"aspectFill"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.previewImage(o)}}})],1)})),1)],2),t.lifeData.isShowSignIn?n("line-clock",{attrs:{clockPageType:"detail",isShowSignIn:t.lifeData.isShowSignIn,journeyItineraryId:t.journeyItineraryId},on:{"update:isShowSignIn":function(e){arguments[0]=e=t.$handleEvent(e),t.$set(t.lifeData,"isShowSignIn",e)},"update:is-show-sign-in":function(e){arguments[0]=e=t.$handleEvent(e),t.$set(t.lifeData,"isShowSignIn",e)}}}):t._e(),n("v-uni-view",{staticClass:"center-align bg-white pl30 pr30 save-btn between-row tb"},[t.lifeData.isSelf?n("v-uni-view",{staticClass:"center-align ft20 color-666 flex1"},[n("v-uni-view",{staticClass:"column m-bianji",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.onEdit.apply(void 0,arguments)}}},[n("svg-icon",{staticClass:"ft36 mb12",attrs:{icon:"icon_bianji"}}),n("v-uni-text",[t._v("编辑")])],1),n("v-uni-view",{staticClass:"column",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.isDelShow=!0}}},[n("svg-icon",{staticClass:"ft36 mb12",attrs:{icon:"icon_shanchu"}}),n("v-uni-text",[t._v("删除")])],1)],1):t._e(),n("u-button",{attrs:{"custom-style":t.btnStyle},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.onShare.apply(void 0,arguments)}}},[t._v("分享")])],1),n("u-modal",{attrs:{width:"540",title:"要删除该组织生活记录？",content:"删除后不可恢复","border-radius":"24","show-cancel-button":!0,"confirm-text":"删除","cancel-text":"先留着","cancel-color":"#333","confirm-color":"#F44000","title-style":t.maskTitleStyle,"content-style":t.maskContentStyle,"cancel-style":t.maskCancelStyle,"confirm-style":t.maskConfirmStyle},on:{confirm:function(e){arguments[0]=e=t.$handleEvent(e),t.onDelete.apply(void 0,arguments)}},model:{value:t.isDelShow,callback:function(e){t.isDelShow=e},expression:"isDelShow"}}),n("share-dialog",{ref:"shareDialog",attrs:{showHomeBtn:t.showHomeBtn,shareData:t.shareData}})],1)},i=[]},4502:function(t,e,n){var o=n("4bad");e=o(!1),e.push([t.i,'@charset "UTF-8";\n/* uni.scss */\n/* 页面左右间距 */\n/* 文字尺寸 */\n/*文字颜色*/\n/* 图片加载中颜色 */\n/* 行为相关颜色 */\n/* 边框颜色 */.color-333[data-v-fad1e88e]{color:#333}.color-666[data-v-fad1e88e]{color:#666}.color-999[data-v-fad1e88e]{color:#999}.bg-color[data-v-fad1e88e]{background-color:#f7f7f7}.bg-white[data-v-fad1e88e]{background-color:#fff}.white-color[data-v-fad1e88e]{color:#fff}.primary-color[data-v-fad1e88e]{color:#f54400}.success-color[data-v-fad1e88e]{color:#0e130f}.warning-color[data-v-fad1e88e]{color:#f0ad4e}.error-color[data-v-fad1e88e]{color:#dd524d}.primary-text[data-v-fad1e88e]{color:#333}.secondary-text[data-v-fad1e88e]{color:#666}.tip-text[data-v-fad1e88e]{color:#999}.color-e32417[data-v-fad1e88e]{color:#e32417}.u-model[data-v-fad1e88e]{height:auto;overflow:hidden;font-size:%?32?%;background-color:#fff}.u-model__btn--hover[data-v-fad1e88e]{background-color:#e6e6e6}.u-model__title[data-v-fad1e88e]{padding-top:%?48?%;font-weight:500;text-align:center;color:#303133}.u-model__content__message[data-v-fad1e88e]{padding:%?48?%;font-size:%?30?%;text-align:center;color:#606266}.u-model__footer[data-v-fad1e88e]{\ndisplay:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row\n}.u-model__footer__button[data-v-fad1e88e]{-webkit-box-flex:1;-webkit-flex:1;flex:1;height:%?100?%;line-height:%?100?%;font-size:%?32?%;box-sizing:border-box;cursor:pointer;text-align:center;border-radius:%?4?%}',""]),t.exports=e},"4eca":function(t,e,n){var o=n("4bad");e=o(!1),e.push([t.i,'@charset "UTF-8";\n/* uni.scss */\n/* 页面左右间距 */\n/* 文字尺寸 */\n/*文字颜色*/\n/* 图片加载中颜色 */\n/* 行为相关颜色 */\n/* 边框颜色 */.color-333[data-v-35319fca]{color:#333}.color-666[data-v-35319fca]{color:#666}.color-999[data-v-35319fca]{color:#999}.bg-color[data-v-35319fca]{background-color:#f7f7f7}.bg-white[data-v-35319fca]{background-color:#fff}.white-color[data-v-35319fca]{color:#fff}.primary-color[data-v-35319fca]{color:#f54400}.success-color[data-v-35319fca]{color:#0e130f}.warning-color[data-v-35319fca]{color:#f0ad4e}.error-color[data-v-35319fca]{color:#dd524d}.primary-text[data-v-35319fca]{color:#333}.secondary-text[data-v-35319fca]{color:#666}.tip-text[data-v-35319fca]{color:#999}.color-e32417[data-v-35319fca]{color:#e32417}uni-page-body[data-v-35319fca]{background:#f7f7f7;height:100%}.color-518cfc[data-v-35319fca]{color:#518cfc}.w144[data-v-35319fca]{width:%?144?%}.h88[data-v-35319fca]{height:%?88?%}.mt-8[data-v-35319fca]{margin-top:%?-8?%}.m-bianji[data-v-35319fca]{margin:0 %?124?% 0 %?66?%}.flex-wrap[data-v-35319fca]{-webkit-box-flex:wrap;-webkit-flex:wrap;flex:wrap}.life-wrap[data-v-35319fca]{padding-bottom:%?152?%;overflow:auto}.life-wrap .life-item[data-v-35319fca]{position:relative;width:%?214?%;height:%?214?%;border-radius:%?10?%;margin-right:%?24?%;margin-bottom:%?24?%;box-sizing:border-box}.life-wrap .life-item .life-img[data-v-35319fca]{width:100%;height:100%;border-radius:%?10?%}.life-wrap .life-image .life-item[data-v-35319fca]:nth-of-type(3n){margin-right:0}.save-btn[data-v-35319fca]{height:%?120?%;position:fixed;bottom:0;width:100%}body.?%PAGE?%[data-v-35319fca]{background:#f7f7f7}',""]),t.exports=e},"99e3":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,n("a9e3");var o={name:"u-modal",props:{value:{type:Boolean,default:!1},zIndex:{type:[Number,String],default:""},title:{type:[String],default:"提示"},width:{type:[Number,String],default:600},content:{type:String,default:"内容"},showTitle:{type:Boolean,default:!0},showConfirmButton:{type:Boolean,default:!0},showCancelButton:{type:Boolean,default:!1},confirmText:{type:String,default:"确认"},cancelText:{type:String,default:"取消"},confirmColor:{type:String,default:"#2979ff"},cancelColor:{type:String,default:"#606266"},borderRadius:{type:[Number,String],default:16},titleStyle:{type:Object,default:function(){return{}}},contentStyle:{type:Object,default:function(){return{}}},cancelStyle:{type:Object,default:function(){return{}}},confirmStyle:{type:Object,default:function(){return{}}},zoom:{type:Boolean,default:!0},asyncClose:{type:Boolean,default:!1},maskCloseAble:{type:Boolean,default:!1},negativeTop:{type:[String,Number],default:0}},data:function(){return{loading:!1}},computed:{cancelBtnStyle:function(){return Object.assign({color:this.cancelColor},this.cancelStyle)},confirmBtnStyle:function(){return Object.assign({color:this.confirmColor},this.confirmStyle)},uZIndex:function(){return this.zIndex?this.zIndex:this.$u.zIndex.popup}},watch:{value:function(t){!0===t&&(this.loading=!1)}},methods:{confirm:function(){this.asyncClose?this.loading=!0:this.$emit("input",!1),this.$emit("confirm")},cancel:function(){var t=this;this.$emit("cancel"),this.$emit("input",!1),setTimeout((function(){t.loading=!1}),300)},popupClose:function(){this.$emit("input",!1)},clearLoading:function(){this.loading=!1}}};e.default=o},aab5:function(t,e,n){"use strict";n.r(e);var o=n("99e3"),a=n.n(o);for(var i in o)["default"].indexOf(i)<0&&function(t){n.d(e,t,(function(){return o[t]}))}(i);e["default"]=a.a},c1dd:function(t,e,n){"use strict";n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return i})),n.d(e,"a",(function(){return o}));var o={uPopup:n("df25").default,uLoading:n("1bfa").default},a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",[n("u-popup",{attrs:{zoom:t.zoom,mode:"center",popup:!1,"z-index":t.uZIndex,length:t.width,"mask-close-able":t.maskCloseAble,"border-radius":t.borderRadius,"negative-top":t.negativeTop},on:{close:function(e){arguments[0]=e=t.$handleEvent(e),t.popupClose.apply(void 0,arguments)}},model:{value:t.value,callback:function(e){t.value=e},expression:"value"}},[n("v-uni-view",{staticClass:"u-model"},[t.showTitle?n("v-uni-view",{staticClass:"u-model__title u-line-1",style:[t.titleStyle]},[t._v(t._s(t.title))]):t._e(),n("v-uni-view",{staticClass:"u-model__content"},[t.$slots.default||t.$slots.$default?n("v-uni-view",{style:[t.contentStyle]},[t._t("default")],2):n("v-uni-view",{staticClass:"u-model__content__message",style:[t.contentStyle]},[t._v(t._s(t.content))])],1),t.showCancelButton||t.showConfirmButton?n("v-uni-view",{staticClass:"u-model__footer u-border-top"},[t.showCancelButton?n("v-uni-view",{staticClass:"u-model__footer__button",style:[t.cancelBtnStyle],attrs:{"hover-stay-time":100,"hover-class":"u-model__btn--hover"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.cancel.apply(void 0,arguments)}}},[t._v(t._s(t.cancelText))]):t._e(),t.showConfirmButton||t.$slots["confirm-button"]?n("v-uni-view",{staticClass:"u-model__footer__button hairline-left",style:[t.confirmBtnStyle],attrs:{"hover-stay-time":100,"hover-class":t.asyncClose?"none":"u-model__btn--hover"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.confirm.apply(void 0,arguments)}}},[t.$slots["confirm-button"]?t._t("confirm-button"):[t.loading?n("u-loading",{attrs:{mode:"circle",color:t.confirmColor}}):[t._v(t._s(t.confirmText))]]],2):t._e()],1):t._e()],1)],1)],1)},i=[]},e472:function(t,e,n){"use strict";n.r(e);var o=n("4465"),a=n("33c0");for(var i in a)["default"].indexOf(i)<0&&function(t){n.d(e,t,(function(){return a[t]}))}(i);n("f1b2");var r,l=n("f0c5"),c=Object(l["a"])(a["default"],o["b"],o["c"],!1,null,"35319fca",null,!1,o["a"],r);e["default"]=c.exports},f1b2:function(t,e,n){"use strict";var o=n("f58e"),a=n.n(o);a.a},f58e:function(t,e,n){var o=n("4eca");"string"===typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);var a=n("4f06").default;a("56a7d3df",o,!0,{sourceMap:!1,shadowMode:!1})}}]);