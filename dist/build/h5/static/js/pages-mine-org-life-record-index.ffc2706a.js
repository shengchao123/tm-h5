(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-mine-org-life-record-index"],{"23c8":function(t,e,a){"use strict";var n=a("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=n(a("5530")),i=n(a("3a9a")),r=n(a("0894")),c={components:{UploadImages:i.default,LineClock:r.default},name:"index",methods:{changeInput:function(){var t=this.formData,e=t.shouldNumber,a=t.actualNumber,n=t.activityExperience,o=t.attachmentList;this.$isEmpty(e)||this.$isEmpty(a)||this.$isEmpty(n)||this.$isEmpty(o)?this.btnDisabled=!0:this.btnDisabled=!1},onSave:function(){var t=(0,o.default)((0,o.default)({},this.formData),{},{journeyItineraryId:this.lineData.journeyItineraryId});"edit"===this.pageType?this.modifyJourneyLifeDocumentary(t):this.createJourneyLifeDocumentary(t)},createJourneyLifeDocumentary:function(t){var e=this;this.$api.createJourneyLifeDocumentary(t).then((function(t){if(t.isError)return e.$msg(t.message);e.successTip()}))},modifyJourneyLifeDocumentary:function(t){var e=this;this.$api.modifyJourneyLifeDocumentary(t).then((function(t){if(t.isError)return e.$msg(t.message);e.successTip()}))},successTip:function(){this.$msg("信息提交成功"),setTimeout((function(){uni.navigateBack()}),500)},getJourneyLifeDocumentaryByItineraryId:function(t){var e=this;this.$api.getJourneyLifeDocumentaryByItineraryId({journeyItineraryId:t}).then((function(t){if(t.isError)return e.$msg(t.message);e.formData=t.content}))}},data:function(){return{formData:{shouldNumber:"",actualNumber:"",activityExperience:"",attachmentList:[],isShowSignIn:!0},lineData:{},btnDisabled:!0,pageType:"add"}},computed:{labelStyle:function(){var t={fontSize:"28rpx",color:"#333",fontWeight:"bold"};return t},customInputStyle:function(){var t={fontSize:"28rpx",color:"#333"};return t},btnStyle:function(){var t=this.btnDisabled?"#ccc":"#E32417",e={fontSize:"30rpx",color:"#fff",width:"690rpx",height:"88rpx",borderRadius:"44rpx",fontWeight:"bold",background:t};return e}},onLoad:function(t){var e=t.pageType,a=t.name,n=t.id;this.lineData={journeyItineraryName:a,journeyItineraryId:n},this.pageType=e,"edit"===e&&this.getJourneyLifeDocumentaryByItineraryId(n)},watch:{"formData.attachmentList":{handler:function(t){this.changeInput()},immediate:!0}}};e.default=c},6318:function(t,e,a){var n=a("d356");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var o=a("4f06").default;o("051b25b7",n,!0,{sourceMap:!1,shadowMode:!1})},b756:function(t,e,a){"use strict";a.r(e);var n=a("f5b5"),o=a("d031");for(var i in o)["default"].indexOf(i)<0&&function(t){a.d(e,t,(function(){return o[t]}))}(i);a("c607");var r,c=a("f0c5"),u=Object(c["a"])(o["default"],n["b"],n["c"],!1,null,"cf7c2050",null,!1,n["a"],r);e["default"]=u.exports},c607:function(t,e,a){"use strict";var n=a("6318"),o=a.n(n);o.a},d031:function(t,e,a){"use strict";a.r(e);var n=a("23c8"),o=a.n(n);for(var i in n)["default"].indexOf(i)<0&&function(t){a.d(e,t,(function(){return n[t]}))}(i);e["default"]=o.a},d356:function(t,e,a){var n=a("24fb");e=n(!1),e.push([t.i,'@charset "UTF-8";\n/* uni.scss */\n/* 页面左右间距 */\n/* 文字尺寸 */\n/*文字颜色*/\n/* 图片加载中颜色 */\n/* 行为相关颜色 */\n/* 边框颜色 */.color-333[data-v-cf7c2050]{color:#333}.color-666[data-v-cf7c2050]{color:#666}.color-999[data-v-cf7c2050]{color:#999}.bg-color[data-v-cf7c2050]{background-color:#f7f7f7}.bg-white[data-v-cf7c2050]{background-color:#fff}.white-color[data-v-cf7c2050]{color:#fff}.primary-color[data-v-cf7c2050]{color:#f54400}.success-color[data-v-cf7c2050]{color:#0e130f}.warning-color[data-v-cf7c2050]{color:#f0ad4e}.error-color[data-v-cf7c2050]{color:#dd524d}.primary-text[data-v-cf7c2050]{color:#333}.secondary-text[data-v-cf7c2050]{color:#666}.tip-text[data-v-cf7c2050]{color:#999}.color-e32417[data-v-cf7c2050]{color:#e32417}uni-page-body[data-v-cf7c2050]{background:#f7f7f7;height:100%}.p10-0[data-v-cf7c2050]{padding:%?10?% 0}.life-wrap[data-v-cf7c2050]{margin-bottom:%?152?%;overflow:auto}.content-textarea[data-v-cf7c2050]{overflow:hidden;height:%?400?%;width:100%}.content-textarea[data-v-cf7c2050] uni-textarea{height:%?360?%!important;padding:0!important;width:100%;font-size:%?28?%;overflow-y:scroll}.content-textarea .experience-count[data-v-cf7c2050]{height:%?22?%;line-height:%?22?%;float:right}.save-btn[data-v-cf7c2050]{height:%?120?%;position:fixed;bottom:0}body.?%PAGE?%[data-v-cf7c2050]{background:#f7f7f7}',""]),t.exports=e},f5b5:function(t,e,a){"use strict";a.d(e,"b",(function(){return o})),a.d(e,"c",(function(){return i})),a.d(e,"a",(function(){return n}));var n={uForm:a("aa8f").default,uFormItem:a("e0a3").default,uInput:a("d5da").default,uButton:a("d9ad").default},o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{staticClass:"life-wrap"},[a("v-uni-view",{staticClass:"tb pl30 pr30 bg-white"},[a("u-form",{ref:"uForm",attrs:{model:t.formData,"label-style":t.labelStyle}},[a("u-form-item",{staticClass:"p10-0",attrs:{label:"对应行程","label-width":"144rpx"}},[a("v-uni-text",[t._v(t._s(t.lineData.journeyItineraryName))])],1),a("u-form-item",{staticClass:"p10-0",attrs:{label:"应到人数","label-width":"144rpx"}},[a("u-input",{attrs:{placeholder:"输入应到人数",clearable:!1,"placeholder-style":"color:#999","custom-style":t.customInputStyle},on:{input:function(e){arguments[0]=e=t.$handleEvent(e),t.changeInput.apply(void 0,arguments)}},model:{value:t.formData.shouldNumber,callback:function(e){t.$set(t.formData,"shouldNumber",e)},expression:"formData.shouldNumber"}})],1),a("u-form-item",{staticClass:"p10-0",attrs:{label:"实到人数","label-width":"144rpx"}},[a("u-input",{attrs:{placeholder:"输入实到人数",clearable:!1,"placeholder-style":"color:#999","custom-style":t.customInputStyle},on:{input:function(e){arguments[0]=e=t.$handleEvent(e),t.changeInput.apply(void 0,arguments)}},model:{value:t.formData.actualNumber,callback:function(e){t.$set(t.formData,"actualNumber",e)},expression:"formData.actualNumber"}})],1),a("u-form-item",{staticClass:"p10-0",attrs:{label:"活动心得","label-position":"top","border-bottom":!1,"label-width":"144rpx"}},[a("v-uni-view",{staticClass:"content-textarea"},[a("v-uni-textarea",{attrs:{placeholder:"记录您的活动心得",maxlength:1e3,"placeholder-style":"color:#999",enableNative:!1},on:{input:function(e){arguments[0]=e=t.$handleEvent(e),t.changeInput.apply(void 0,arguments)}},model:{value:t.formData.activityExperience,callback:function(e){t.$set(t.formData,"activityExperience",e)},expression:"formData.activityExperience"}}),a("v-uni-view",{staticClass:"color-999 ft22 experience-count mt8"},[t._v(t._s(t.formData.activityExperience.length)+"/1000")])],1)],1)],1),a("v-uni-view",{staticClass:"mt24 flex pb8"},[a("upload-images",{attrs:{count:9,length:9,imageTypeName:"sourceType",imageData:t.formData.attachmentList},on:{"update:imageData":function(e){arguments[0]=e=t.$handleEvent(e),t.$set(t.formData,"attachmentList",e)},"update:image-data":function(e){arguments[0]=e=t.$handleEvent(e),t.$set(t.formData,"attachmentList",e)}}})],1)],1),a("line-clock",{attrs:{isShowSignIn:t.formData.isShowSignIn,journeyItineraryId:t.lineData.journeyItineraryId},on:{"update:isShowSignIn":function(e){arguments[0]=e=t.$handleEvent(e),t.$set(t.formData,"isShowSignIn",e)},"update:is-show-sign-in":function(e){arguments[0]=e=t.$handleEvent(e),t.$set(t.formData,"isShowSignIn",e)}}}),a("v-uni-view",{staticClass:"center-align bg-white pl30 pr30 save-btn tb"},[a("u-button",{attrs:{disabled:t.btnDisabled,"custom-style":t.btnStyle},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.onSave.apply(void 0,arguments)}}},[t._v(t._s("edit"===t.pageType?"保存":"确定"))])],1)],1)},i=[]}}]);