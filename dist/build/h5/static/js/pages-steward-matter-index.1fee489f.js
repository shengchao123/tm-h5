(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-steward-matter-index"],{"2cf1":function(t,a,e){var c=e("4bad");a=c(!1),a.push([t.i,'@charset "UTF-8";\n/* uni.scss */\n/* 页面左右间距 */\n/* 文字尺寸 */\n/*文字颜色*/\n/* 图片加载中颜色 */\n/* 行为相关颜色 */\n/* 边框颜色 */.color-primary[data-v-cf03edcc]{color:#3049c0}.color-333[data-v-cf03edcc]{color:#333}.color-666[data-v-cf03edcc]{color:#666}.color-999[data-v-cf03edcc]{color:#999}.bg-color[data-v-cf03edcc]{background-color:#f7f7f7}.bg-white[data-v-cf03edcc]{background-color:#fff}.white-color[data-v-cf03edcc]{color:#fff}.primary-color[data-v-cf03edcc]{color:#f54400}.success-color[data-v-cf03edcc]{color:#0e130f}.warning-color[data-v-cf03edcc]{color:#f0ad4e}.error-color[data-v-cf03edcc]{color:#dd524d}.primary-text[data-v-cf03edcc]{color:#333}.secondary-text[data-v-cf03edcc]{color:#666}.tip-text[data-v-cf03edcc]{color:#999}.color-e32417[data-v-cf03edcc]{color:#e32417}.matter-wrap img[data-v-cf03edcc]{width:100%}.evaluate-box[data-v-cf03edcc]{padding:0 %?30?%}.evaluate-box .text-area[data-v-cf03edcc]{height:%?360?%!important;padding:0!important;width:100%;font-size:%?28?%;overflow-y:scroll}.evaluate-box .trips[data-v-cf03edcc]{height:%?100?%;border-top:%?1?% solid #eaeaea}.form[data-v-cf03edcc]{box-shadow:3px 2px 12px 8px rgba(17,17,17,.03);border-radius:%?8?%;position:absolute;top:%?210?%;left:%?30?%;right:%?30?%;background-color:#fff}.form-item[data-v-cf03edcc]{padding:%?30?%;border-bottom:%?1?% solid #eaeaea}.form-item .w120[data-v-cf03edcc]{width:%?160?%}.pb120[data-v-cf03edcc]{padding-bottom:%?120?%}.back[data-v-cf03edcc]{background:#e32417!important}.bt[data-v-cf03edcc]{left:0;right:0;background-color:#fff;position:fixed;bottom:0;padding-bottom:%?16?%;border-top:%?1?% solid #eaeaea;padding-top:%?16?%}.bt .submit[data-v-cf03edcc]{width:%?690?%;height:%?88?%;line-height:%?88?%;border-radius:%?49?%;color:#fff;background:#ccc}.ft88[data-v-cf03edcc]{font-size:%?88?%}.ft26[data-v-cf03edcc]{font-size:%?26?%}.mt64[data-v-cf03edcc]{margin-top:%?64?%}',""]),t.exports=a},"5b33":function(t,a,e){"use strict";e.r(a);var c=e("d8b8"),o=e("c303");for(var n in o)["default"].indexOf(n)<0&&function(t){e.d(a,t,(function(){return o[t]}))}(n);e("c112");var r,i=e("f0c5"),d=Object(i["a"])(o["default"],c["b"],c["c"],!1,null,"cf03edcc",null,!1,c["a"],r);a["default"]=d.exports},7828:function(t,a,e){var c=e("2cf1");"string"===typeof c&&(c=[[t.i,c,""]]),c.locals&&(t.exports=c.locals);var o=e("4f06").default;o("72bb0f90",c,!0,{sourceMap:!1,shadowMode:!1})},a57b:function(t,a,e){t.exports=e.p+"static/img/matter.163cf0f2.png"},c112:function(t,a,e){"use strict";var c=e("7828"),o=e.n(c);o.a},c303:function(t,a,e){"use strict";e.r(a);var c=e("eefc"),o=e.n(c);for(var n in c)["default"].indexOf(n)<0&&function(t){e.d(a,t,(function(){return c[t]}))}(n);a["default"]=o.a},d8b8:function(t,a,e){"use strict";var c;e.d(a,"b",(function(){return o})),e.d(a,"c",(function(){return n})),e.d(a,"a",(function(){return c}));var o=function(){var t=this,a=t.$createElement,c=t._self._c||a;return c("div",{staticClass:"matter-wrap"},[c("img",{attrs:{src:e("a57b")}}),c("div",{staticClass:"form"},[c("div",{staticClass:"form-item p30 ft30 center-align"},[c("v-uni-text",{staticClass:"w120 medium"},[t._v("姓名")]),c("v-uni-text",[t._v(t._s(t.userInfo.name))])],1),c("div",{staticClass:"form-item p30 ft30 center-align"},[c("v-uni-text",{staticClass:"w120 medium"},[t._v("联系电话")]),c("v-uni-text",[t._v(t._s(t.userInfo.phone))])],1),c("div",{staticClass:"form-item p30 ft30 center-align"},[c("v-uni-text",{staticClass:"w120 medium"},[t._v("身份证号")]),c("v-uni-text",[t._v(t._s(t.userInfo.idCardNo))])],1),c("div",{staticClass:"form-item p30 ft30"},[c("v-uni-text",{staticClass:"w120 medium"},[t._v("问题描述")]),c("div",[c("v-uni-textarea",{staticClass:"text-area mt36 ft30",attrs:{placeholder:"添加正文","placeholder-style":"color:#999",maxlength:"500"},model:{value:t.evaluate.problemDesc,callback:function(a){t.$set(t.evaluate,"problemDesc",a)},expression:"evaluate.problemDesc"}})],1)],1),c("div",[c("v-uni-view",{staticClass:"pb120 evaluate-box"},[c("v-uni-view",{staticClass:"mt24 flex pb8"},[c("upload-images",{attrs:{count:9,length:9,imageData:t.evaluate.attachments},on:{"update:imageData":function(a){arguments[0]=a=t.$handleEvent(a),t.$set(t.evaluate,"attachments",a)},"update:image-data":function(a){arguments[0]=a=t.$handleEvent(a),t.$set(t.evaluate,"attachments",a)}}})],1)],1),c("v-uni-view",{staticClass:"bt"},[c("v-uni-button",{staticClass:"submit tc ft32 bold back",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.submit.apply(void 0,arguments)}}},[t._v("提交")])],1)],1)])])},n=[]},eefc:function(t,a,e){"use strict";var c=e("4ea4");Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var o=c(e("5530")),n=c(e("3a9a")),r={name:"index",methods:{submit:function(){var t=this;this.show=!0;var a=this.evaluate,e=a.problemDesc,c=a.attachments;if(!e||0===!c.length)return this.$msg("请填写完整信息");var n=(0,o.default)({},this.evaluate);this.$api.submitProblem(n).then((function(a){if(a.isError)return t.$msg(a.message);t.evaluate={},uni.navigateTo({url:"/pages/steward/matter/Success"})}))},getMemberPersonalInfo:function(){var t=this;this.$api.getMemberPersonalInfo().then((function(a){a.isError||(uni.setStorageSync("isAuthCommunity",a.content.isAuthCommunity),t.userInfo=a.content)}))}},data:function(){return{userInfo:{},evaluate:{problemDesc:"",attachments:[]}}},onLoad:function(){uni.setNavigationBarColor({frontColor:"#ffffff",backgroundColor:"#0066ED",animation:{duration:400,timingFunc:"easeIn"}}),this.getMemberPersonalInfo()},components:{UploadImages:n.default}};a.default=r}}]);