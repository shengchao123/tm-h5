(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-union-interact-detail-index"],{"08f3":function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.statusMap=e.transportationNameMap=e.activityNameMap=e.playTimeNameMap=e.serviceContentOptions=e.appropriateCrowdOptions=e.transportationOptions=e.needLifeDocumentaryOptions=e.activityTypeOptions=e.playTimeOptions=void 0,i("dca8"),i("4ec9"),i("d3b7"),i("3ca3"),i("ddb0");var a=Object.freeze([{id:"01",name:"半天"},{id:"02",name:"1天"},{id:"03",name:"2天"},{id:"04",name:"3天"}]);e.playTimeOptions=a;var n=Object.freeze([{id:"01",name:"党员活动"},{id:"02",name:"学习教育"},{id:"03",name:"观光游览"},{id:"04",name:"其他"}]);e.activityTypeOptions=n;var o=Object.freeze([{id:!0,name:"需要"},{id:!1,name:"不需要"}]);e.needLifeDocumentaryOptions=o;var r=Object.freeze([{id:"01",name:"包车"},{id:"02",name:"公共交通"},{id:"03",name:"自行前往"},{id:"04",name:"自驾"},{id:"05",name:"骑行"},{id:"06",name:"步行"}]);e.transportationOptions=r;var s=[{id:"01",name:"家庭游",isSelected:!1},{id:"02",name:"亲子游",isSelected:!1},{id:"03",name:"团建拓展",isSelected:!1},{id:"04",name:"朋友聚会",isSelected:!1},{id:"05",name:"情侣游",isSelected:!1},{id:"06",name:"夕阳红",isSelected:!1}];e.appropriateCrowdOptions=s;var d=[{id:"01",name:"吃饭",isSelected:!1},{id:"02",name:"住宿",isSelected:!1},{id:"03",name:"免费停车",isSelected:!1},{id:"04",name:"烧烤",isSelected:!1},{id:"05",name:"采摘",isSelected:!1},{id:"06",name:"钓鱼",isSelected:!1},{id:"07",name:"骑马",isSelected:!1},{id:"08",name:"戏水",isSelected:!1},{id:"09",name:"露营",isSelected:!1}];e.serviceContentOptions=d;var c=new Map([["01","半天"],["02","1天"],["03","2天"],["04","3天"]]);e.playTimeNameMap=c;var f=new Map([["01","党员活动"],["02","学习教育"],["03","观光游览"],["04","其他"]]);e.activityNameMap=f;var l=new Map([["01","包车"],["02","公共交通"],["03","自行前往"],["04","自驾"],["05","骑行"],["06","步行"]]);e.transportationNameMap=l;var u=Object.freeze(new Map([["01",{text:"报名中",color:"#F54000"}],["02",{text:"进行中",color:"#FFB319"}],["03",{text:"已结束",color:"#999999"}]]));e.statusMap=u},"11ca":function(t,e,i){var a=i("4bad");e=a(!1),e.push([t.i,'@charset "UTF-8";\n/* uni.scss */\n/* 页面左右间距 */\n/* 文字尺寸 */\n/*文字颜色*/\n/* 图片加载中颜色 */\n/* 行为相关颜色 */\n/* 边框颜色 */.color-primary[data-v-ff89d4e6]{color:#3049c0}.color-333[data-v-ff89d4e6]{color:#333}.color-666[data-v-ff89d4e6]{color:#666}.color-999[data-v-ff89d4e6]{color:#999}.bg-color[data-v-ff89d4e6]{background-color:#f7f7f7}.bg-white[data-v-ff89d4e6]{background-color:#fff}.white-color[data-v-ff89d4e6]{color:#fff}.primary-color[data-v-ff89d4e6]{color:#f54400}.success-color[data-v-ff89d4e6]{color:#0e130f}.warning-color[data-v-ff89d4e6]{color:#f0ad4e}.error-color[data-v-ff89d4e6]{color:#dd524d}.primary-text[data-v-ff89d4e6]{color:#333}.secondary-text[data-v-ff89d4e6]{color:#666}.tip-text[data-v-ff89d4e6]{color:#999}.color-e32417[data-v-ff89d4e6]{color:#e32417}.detail-wrap .title .status-info[data-v-ff89d4e6]{vertical-align:top;margin-top:%?6?%;border:1px solid transparent;border-radius:0 %?16?% 0 %?16?%;height:%?32?%;line-height:%?32?%;text-align:center;width:%?88?%}.detail-wrap .form-list .form-item[data-v-ff89d4e6]{border-top:%?1?% solid #eaeaea}.detail-wrap .form-list .form-item .ding-wei[data-v-ff89d4e6]{color:#0084f6}.detail-wrap .activity-style .imgs[data-v-ff89d4e6]{display:grid;grid-gap:%?18?%;grid-template-columns:1fr 1fr 1fr}.detail-wrap .activity-style .imgs .img[data-v-ff89d4e6]{width:%?218?%;height:%?218?%}.detail-wrap .footer[data-v-ff89d4e6]{width:100%;height:%?120?%;position:fixed;bottom:0}.detail-wrap .footer .btn[data-v-ff89d4e6]{width:calc(100% - %?60?%);height:%?88?%;border:%?1?% solid #e32417;border-radius:%?49?%;color:#e32417}',""]),t.exports=e},1826:function(t,e,i){"use strict";i.r(e);var a=i("4fa7"),n=i.n(a);for(var o in a)["default"].indexOf(o)<0&&function(t){i.d(e,t,(function(){return a[t]}))}(o);e["default"]=n.a},"4ec9":function(t,e,i){"use strict";var a=i("6d61"),n=i("6566");t.exports=a("Map",(function(t){return function(){return t(this,arguments.length?arguments[0]:void 0)}}),n)},"4fa7":function(t,e,i){"use strict";var a=i("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,i("d81d"),i("dca8"),i("4de4");var n=a(i("c32d")),o=i("08f3"),r={name:"Detail",methods:{moment:n.default,onShowBigImgView:function(t){var e=this,i=this.imgList.map((function(t){return e.$sourceUrl(t.url)}));uni.previewImage({urls:i,current:t,success:function(t){},fail:function(t){},complete:function(t){}})},onToMap:function(){uni.getLocation({type:"gcj02",success:function(t){console.log(t);var e=t.latitude,i=t.longitude;uni.openLocation({latitude:e,longitude:i,success:function(){console.log("success")}})}})},onAction:function(){var t=this,e=this.detailInfo,i=e.isSignUp,a=e.id,n=i?"cancelSignUpJourneyActivity":"signUpJourneyActivity",o=i?"取消报名":"报名",r={id:a,name:uni.getStorageSync("nick")||"",phone:uni.getStorageSync("phone")||""};this.$api[n](r).then((function(e){e.isError?t.$msg(e.message):(t.$msg(o+"成功"),t.getJourneyActivityDetail())}))},changeSignUpStatus:function(){var t=this;if(this.$notMember())return this.$goLogin();var e=this.detailInfo,i=e.isSignUp,a=e.id;i?uni.showModal({title:"要取消报名？",cancelText:"取消报名",confirmText:"不取消",confirmColor:"#E32417",success:function(e){e.confirm||t.onAction()}}):uni.navigateTo({url:"/pages/original-travel/stroke-order/signUp?id=".concat(a,"&type=activity")})},getJourneyActivityDetail:function(){var t=this,e={id:this.id};this.$api.getJourneyActivityDetail(e).then((function(e){e.isError?t.$msg(e.message):t.detailInfo=e.content}))}},data:function(){return{formList:Object.freeze([{name:"组织单位",keyName:"orgName"},{name:"联系方式",keyName:"phone"},{name:"活动时间",keyName:"activityTime"},{name:"报名截止",keyName:"startTime"},{name:"活动地点",keyName:"address"},{name:"活动人数",keyName:"numberLimit"},{name:"报名人数",keyName:"signUpQuantity"},{name:"活动介绍",keyName:"introduction"}]),id:"",statusMap:o.statusMap,detailInfo:""}},computed:{imgList:function(){if(!this.$isEmpty(this.detailInfo))return this.detailInfo.attachmentList.filter((function(t){return"01"===t.sourceType}))},getTime:function(){var t=this.detailInfo,e=t.startTime,i=t.endTime,a=(0,n.default)(e).format("YYYY-MM-DD"),o=(0,n.default)(i).format("YYYY-MM-DD"),r=(0,n.default)(i).format("HH:mm"),s=(0,n.default)(e).format("YYYY-MM-DD HH:mm"),d=(0,n.default)(i).format("YYYY-MM-DD HH:mm");return a===o?s+"~"+r:s+"~"+d},getStatusInfo:function(){return this.statusMap.get(this.detailInfo.status)}},onLoad:function(t){var e=t.id;this.id=e},created:function(){this.getJourneyActivityDetail()}};e.default=r},"56d8":function(t,e,i){"use strict";i.r(e);var a=i("9f74"),n=i("1826");for(var o in n)["default"].indexOf(o)<0&&function(t){i.d(e,t,(function(){return n[t]}))}(o);i("5e0f"),i("c43c");var r,s=i("f0c5"),d=Object(s["a"])(n["default"],a["b"],a["c"],!1,null,"ff89d4e6",null,!1,a["a"],r);e["default"]=d.exports},"5e0f":function(t,e,i){"use strict";var a=i("8959"),n=i.n(a);n.a},6566:function(t,e,i){"use strict";var a=i("9bf2").f,n=i("7c73"),o=i("e2cc"),r=i("0366"),s=i("19aa"),d=i("2266"),c=i("7dd0"),f=i("2626"),l=i("83ab"),u=i("f183").fastKey,v=i("69f3"),m=v.set,p=v.getterFor;t.exports={getConstructor:function(t,e,i,c){var f=t((function(t,a){s(t,f,e),m(t,{type:e,index:n(null),first:void 0,last:void 0,size:0}),l||(t.size=0),void 0!=a&&d(a,t[c],{that:t,AS_ENTRIES:i})})),v=p(e),g=function(t,e,i){var a,n,o=v(t),r=y(t,e);return r?r.value=i:(o.last=r={index:n=u(e,!0),key:e,value:i,previous:a=o.last,next:void 0,removed:!1},o.first||(o.first=r),a&&(a.next=r),l?o.size++:t.size++,"F"!==n&&(o.index[n]=r)),t},y=function(t,e){var i,a=v(t),n=u(e);if("F"!==n)return a.index[n];for(i=a.first;i;i=i.next)if(i.key==e)return i};return o(f.prototype,{clear:function(){var t=this,e=v(t),i=e.index,a=e.first;while(a)a.removed=!0,a.previous&&(a.previous=a.previous.next=void 0),delete i[a.index],a=a.next;e.first=e.last=void 0,l?e.size=0:t.size=0},delete:function(t){var e=this,i=v(e),a=y(e,t);if(a){var n=a.next,o=a.previous;delete i.index[a.index],a.removed=!0,o&&(o.next=n),n&&(n.previous=o),i.first==a&&(i.first=n),i.last==a&&(i.last=o),l?i.size--:e.size--}return!!a},forEach:function(t){var e,i=v(this),a=r(t,arguments.length>1?arguments[1]:void 0,3);while(e=e?e.next:i.first){a(e.value,e.key,this);while(e&&e.removed)e=e.previous}},has:function(t){return!!y(this,t)}}),o(f.prototype,i?{get:function(t){var e=y(this,t);return e&&e.value},set:function(t,e){return g(this,0===t?0:t,e)}}:{add:function(t){return g(this,t=0===t?0:t,t)}}),l&&a(f.prototype,"size",{get:function(){return v(this).size}}),f},setStrong:function(t,e,i){var a=e+" Iterator",n=p(e),o=p(a);c(t,e,(function(t,e){m(this,{type:a,target:t,state:n(t),kind:e,last:void 0})}),(function(){var t=o(this),e=t.kind,i=t.last;while(i&&i.removed)i=i.previous;return t.target&&(t.last=i=i?i.next:t.state.first)?"keys"==e?{value:i.key,done:!1}:"values"==e?{value:i.value,done:!1}:{value:[i.key,i.value],done:!1}:(t.target=void 0,{value:void 0,done:!0})}),i?"entries":"values",!i,!0),f(e)}}},8562:function(t,e,i){var a=i("4bad");e=a(!1),e.push([t.i,"uni-page-body[data-v-ff89d4e6]{background:#f7f7f7;display:-webkit-box;display:-webkit-flex;display:flex}body.?%PAGE?%[data-v-ff89d4e6]{background:#f7f7f7}",""]),t.exports=e},8959:function(t,e,i){var a=i("8562");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=i("4f06").default;n("3f3a0f08",a,!0,{sourceMap:!1,shadowMode:!1})},"9f74":function(t,e,i){"use strict";var a;i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return o})),i.d(e,"a",(function(){return a}));var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return t.detailInfo?i("v-uni-view",{staticClass:"detail-wrap mt20 flex1",style:{paddingBottom:t.detailInfo&&"01"===t.detailInfo.status?"120rpx":""}},[i("v-uni-view",{staticClass:"pl30 pr30 bg-white"},[i("span",{staticClass:"title pt28 pb28 inline-block"},[i("span",{staticClass:"ft32 color-333 medium mr20"},[t._v(t._s(t.detailInfo.name))]),i("span",{staticClass:"status-info ft20 inline-block",style:{color:t.getStatusInfo.color,borderColor:t.getStatusInfo.color}},[t._v(t._s(t.getStatusInfo.text))])]),i("v-uni-view",{staticClass:"form-list"},t._l(t.formList,(function(e,a){return i("v-uni-view",{key:a,staticClass:"ft30 form-item flex pt28 pb28"},[i("v-uni-text",{staticClass:"color-333 medium"},[t._v(t._s(e.name))]),i("v-uni-view",{staticClass:"pl32 flex1 color-666"},["activityTime"===e.keyName?i("v-uni-text",[t._v(t._s(t.getTime))]):"startTime"===e.keyName?i("v-uni-text",[t._v(t._s(t.moment(t.detailInfo.startTime).format("YYYY-MM-DD HH:mm")))]):"numberLimit"===e.keyName?i("v-uni-text",[t._v(t._s(-1===t.detailInfo.numberLimit?"不限制":t.detailInfo.numberLimit))]):i("v-uni-text",[t._v(t._s(t.detailInfo[e.keyName]))])],1)],1)})),1)],1),t.detailInfo&&"03"===t.detailInfo.status&&t.detailInfo.styleDescription?i("v-uni-view",{staticClass:"activity-style pt32 pb24 pl30 pr30 bg-white ft30 color-333 column mt20 mb32"},[i("v-uni-text",{staticClass:"bold"},[t._v("活动风采")]),i("v-uni-text",{staticClass:"pt20"},[t._v(t._s(t.detailInfo.styleDescription))]),i("v-uni-view",{staticClass:"mt16 imgs"},t._l(t.imgList,(function(e,a){return i("v-uni-image",{key:a,staticClass:"img",attrs:{mode:"aspectFill",src:t.$sourceUrl(e.url)},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.onShowBigImgView(a)}}})})),1)],1):t._e(),t.detailInfo&&"01"===t.detailInfo.status?i("v-uni-view",{staticClass:"footer bg-white center"},[i("v-uni-text",{staticClass:"btn center ft32 medium",style:{background:t.detailInfo.isSignUp?"#fff":"#E32417",color:t.detailInfo.isSignUp?"#E32417":"#fff"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.changeSignUpStatus.apply(void 0,arguments)}}},[t._v(t._s(t.detailInfo.isSignUp?"取消报名":"我要报名"))])],1):t._e()],1):t._e()},o=[]},a1eb:function(t,e,i){var a=i("11ca");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=i("4f06").default;n("03696f99",a,!0,{sourceMap:!1,shadowMode:!1})},c43c:function(t,e,i){"use strict";var a=i("a1eb"),n=i.n(a);n.a}}]);