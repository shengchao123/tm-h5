(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-urban-rural-resource-AddResource"],{"0f29":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,a("a9e3");var o={name:"u-action-sheet",props:{maskCloseAble:{type:Boolean,default:!0},list:{type:Array,default:function(){return[]}},tips:{type:Object,default:function(){return{text:"",color:"",fontSize:"26"}}},cancelBtn:{type:Boolean,default:!0},safeAreaInsetBottom:{type:Boolean,default:!1},value:{type:Boolean,default:!1},borderRadius:{type:[String,Number],default:0},zIndex:{type:[String,Number],default:0},cancelText:{type:String,default:"取消"}},computed:{tipsStyle:function(){var t={};return this.tips.color&&(t.color=this.tips.color),this.tips.fontSize&&(t.fontSize=this.tips.fontSize+"rpx"),t},itemStyle:function(){var t=this;return function(e){var a={};return t.list[e].color&&(a.color=t.list[e].color),t.list[e].fontSize&&(a.fontSize=t.list[e].fontSize+"rpx"),t.list[e].disabled&&(a.color="#c0c4cc"),a}},uZIndex:function(){return this.zIndex?this.zIndex:this.$u.zIndex.popup}},methods:{close:function(){this.popupClose(),this.$emit("close")},popupClose:function(){this.$emit("input",!1)},itemClick:function(t){this.list[t].disabled||(this.$emit("click",t),this.$emit("input",!1))}}};e.default=o},"232c":function(t,e,a){"use strict";a.r(e);var o=a("0f29"),r=a.n(o);for(var n in o)["default"].indexOf(n)<0&&function(t){a.d(e,t,(function(){return o[t]}))}(n);e["default"]=r.a},"266b":function(t,e,a){"use strict";a.r(e);var o=a("8cfa"),r=a.n(o);for(var n in o)["default"].indexOf(n)<0&&function(t){a.d(e,t,(function(){return o[t]}))}(n);e["default"]=r.a},"26d8":function(t,e,a){"use strict";a.d(e,"b",(function(){return r})),a.d(e,"c",(function(){return n})),a.d(e,"a",(function(){return o}));var o={uInput:a("d5da").default,uForm:a("aa8f").default,uFormItem:a("e0a3").default,uPopup:a("df25").default,uActionSheet:a("99aa").default},r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"wrap pb120"},[a("div",{staticClass:" form-box"},[a("v-uni-input",{staticClass:"ft32 title-style",attrs:{type:"text",placeholder:"标题","placeholder-class":"place-class"},model:{value:t.form.title,callback:function(e){t.$set(t.form,"title",e)},expression:"form.title"}}),a("u-input",{staticClass:"text-area mt36 ft30",attrs:{type:"textarea",maxlength:"500","placeholder-style":"color:#999",placeholder:"做个介绍吧"},model:{value:t.form.content,callback:function(e){t.$set(t.form,"content",e)},expression:"form.content"}}),a("div",{staticClass:"color-999 tr mt8 ft24"},[t._v(t._s(t.form.introduction?t.form.introduction.length:0)+" / 500")]),a("div",{staticClass:"mt24 flex pb8"},[a("upload-images",{attrs:{count:9,length:9,imageData:t.form.attachmentDTOList},on:{"update:imageData":function(e){arguments[0]=e=t.$handleEvent(e),t.$set(t.form,"attachmentDTOList",e)},"update:image-data":function(e){arguments[0]=e=t.$handleEvent(e),t.$set(t.form,"attachmentDTOList",e)}}})],1)],1),a("u-form",{ref:"uForm",staticClass:"form ft26",attrs:{model:t.form,"label-width":"180"}},[a("u-form-item",{attrs:{label:"资源类型"}},[a("div",{staticClass:"flex1 tr mr16 text-hidden",style:{color:"未选择"===t.resourceType?"#999999":"#333333"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.showActionSheet=!0}}},[t._v(t._s(t.resourceType))]),a("SvgIcon",{staticStyle:{color:"#c4c4c4"},attrs:{icon:"icon_xiangyoujiantou"}})],1),a("u-form-item",{attrs:{label:"联系人",prop:"contactPerson"}},[a("u-input",{staticClass:"tr",attrs:{"placeholder-style":"color: #999999",placeholder:"输入联系人姓名"},model:{value:t.form.contactPerson,callback:function(e){t.$set(t.form,"contactPerson",e)},expression:"form.contactPerson"}})],1),a("u-form-item",{attrs:{label:"联系电话",prop:"contactPhone"}},[a("u-input",{staticClass:"tr",attrs:{"placeholder-style":"color: #999999",placeholder:"输入联系电话"},model:{value:t.form.contactPhone,callback:function(e){t.$set(t.form,"contactPhone",e)},expression:"form.contactPhone"}})],1),a("u-form-item",{attrs:{label:"微信号(选填)",prop:"weChatNumber"}},[a("u-input",{staticClass:"tr",attrs:{"placeholder-style":"color: #999999",placeholder:"输入内容"},model:{value:t.form.weChatNumber,callback:function(e){t.$set(t.form,"weChatNumber",e)},expression:"form.weChatNumber"}})],1)],1),a("div",{staticClass:"bt"},[a("v-uni-button",{staticClass:"submit tc ft32 bold",class:t.isSubmit,on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.submit.apply(void 0,arguments)}}},[t._v("提交")])],1),a("u-popup",{attrs:{mode:"center","mask-close-able":!1,"border-radius":"24"},model:{value:t.show,callback:function(e){t.show=e},expression:"show"}},[a("div",{staticClass:"tc pop-box"},[a("svg-icon",{staticClass:"ft88 mt64 icon-style",attrs:{icon:"icon_chenggongFill"}}),a("div",{staticClass:"ft32 bold mt32"},[t._v("提交成功，等待审核")]),a("div",{staticClass:"ft26 color-999 mt16"},[t._v("审核后帖子内容将显示在资源共享页面")]),a("div",{staticClass:"know-btn ft28 color-666",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.onKnow.apply(void 0,arguments)}}},[t._v("我知道啦")])],1)]),a("u-action-sheet",{attrs:{list:t.actions},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.onSelectResourceType.apply(void 0,arguments)}},model:{value:t.showActionSheet,callback:function(e){t.showActionSheet=e},expression:"showActionSheet"}})],1)},n=[]},7129:function(t,e,a){var o=a("4bad");e=o(!1),e.push([t.i,'@charset "UTF-8";\n/* uni.scss */\n/* 页面左右间距 */\n/* 文字尺寸 */\n/*文字颜色*/\n/* 图片加载中颜色 */\n/* 行为相关颜色 */\n/* 边框颜色 */.color-primary[data-v-b3fe924a]{color:#3049c0}.color-333[data-v-b3fe924a]{color:#333}.color-666[data-v-b3fe924a]{color:#666}.color-999[data-v-b3fe924a]{color:#999}.bg-color[data-v-b3fe924a]{background-color:#f7f7f7}.bg-white[data-v-b3fe924a]{background-color:#fff}.white-color[data-v-b3fe924a]{color:#fff}.primary-color[data-v-b3fe924a]{color:#f54400}.success-color[data-v-b3fe924a]{color:#0e130f}.warning-color[data-v-b3fe924a]{color:#f0ad4e}.error-color[data-v-b3fe924a]{color:#dd524d}.primary-text[data-v-b3fe924a]{color:#333}.secondary-text[data-v-b3fe924a]{color:#666}.tip-text[data-v-b3fe924a]{color:#999}.color-e32417[data-v-b3fe924a]{color:#e32417}.wrap .popup[data-v-b3fe924a]{padding:%?24?% %?30?%}.wrap .popup .title[data-v-b3fe924a]{font-size:%?34?%;color:#000;text-align:center;margin-bottom:%?64?%}.wrap .popup .tags[data-v-b3fe924a]{-webkit-flex-wrap:wrap;flex-wrap:wrap;width:calc(100vw - %?60?%)}.wrap .popup .tag[data-v-b3fe924a]{width:%?159?%;height:%?66?%;line-height:%?66?%;background:#f7f7f7;border-radius:33px;border:1px solid transparent}.wrap .popup .active[data-v-b3fe924a]{border-color:#fa9a75;background:#fff1eb;color:#e32417}.wrap .popup .btn[data-v-b3fe924a]{margin-top:%?80?%;background:#e32417;font-size:%?34?%;color:#fff;border-radius:%?49?%;height:%?98?%;line-height:%?98?%}.wrap .tr[data-v-b3fe924a]{text-align:right!important}.wrap[data-v-b3fe924a] .u-input__right-icon{display:none}.wrap[data-v-b3fe924a] .u-form-item--left{font-weight:400!important}.wrap .form[data-v-b3fe924a]{padding:%?20?% %?30?%}.form-box[data-v-b3fe924a]{padding:0 %?30?%}.form-box .title-style[data-v-b3fe924a]{height:%?100?%;border-bottom:%?1?% solid #eaeaea}.form-box .text-area[data-v-b3fe924a]{height:%?360?%!important;padding:0!important;width:100%;font-size:%?28?%;overflow-y:scroll}.form-box .trips[data-v-b3fe924a]{height:%?100?%;border-top:%?1?% solid #eaeaea}.pb120[data-v-b3fe924a]{padding-bottom:%?120?%}.back[data-v-b3fe924a]{background:#e32417!important}.bt[data-v-b3fe924a]{width:100%;position:fixed;bottom:0;border-top:%?1?% solid #eaeaea;padding:%?16?% 0;background:#fff;z-index:99}.bt .submit[data-v-b3fe924a]{width:%?690?%;height:%?88?%;line-height:%?88?%;border-radius:%?49?%;color:#fff;background:#ccc}.ft88[data-v-b3fe924a]{font-size:%?88?%}.ft26[data-v-b3fe924a]{font-size:%?26?%}.know-btn[data-v-b3fe924a]{width:%?240?%;height:%?70?%;line-height:%?70?%;border-radius:%?49?%;border:%?1?% solid #d2d2d2;margin:0 auto;margin-top:%?32?%}.pop-box[data-v-b3fe924a]{width:%?540?%;height:%?416?%}.pop-box .icon-style[data-v-b3fe924a]{color:#67c23a}.mt64[data-v-b3fe924a]{margin-top:%?64?%}',""]),t.exports=e},"8cfa":function(t,e,a){"use strict";var o=a("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,a("dca8");var r=o(a("5530")),n=o(a("3a9a")),i=a("b893"),c={methods:{onSelectResourceType:function(t){var e=this.actions[t],a=e.type,o=e.text;this.form.resourceType=a,this.resourceType=o},submit:function(){var t=this;if(console.log(!this.validateForm()),this.validateForm()){var e=(0,r.default)({},this.form);this.$api.createJourneyResourceSharing(e).then((function(e){if(e.isError)return t.$msg(e.message);t.show=!0}))}},validateForm:function(){var t=this.form,e=t.title,a=t.content,o=t.attachmentDTOList,r=t.resourceType;return e?a?this.$isEmpty(o)?(this.$msg("请至少上传一张照片"),!1):!this.$isEmpty(r)&&"未选择"!==r||(this.$msg("请选择资源类型"),!1):(this.$msg("请输入正文内容"),!1):(this.$msg("请输入标题"),!1)},onKnow:function(){this.show=!1,uni.navigateBack({delta:1})}},data:function(){return{actions:Object.freeze([{text:"房产商铺",type:"01"},{text:"土地林地",type:"02"},{text:"农产品",type:"03"},{text:"其他",type:"04"}]),resourceType:"未选择",showActionSheet:!1,form:{resourceType:"未选择",title:"",attachmentDTOList:[]},show:!1}},computed:{appropriateCrowdNames:function(){var t=(0,i.subStringWithStrlen)(this.form.appropriateCrowd,34);return t||"未选择"},serviceContentNames:function(){var t=(0,i.subStringWithStrlen)(this.form.serviceContent,34);return t||"未选择"},isSubmit:function(){var t=this.form,e=t.title,a=t.content,o=t.attachmentDTOList,r=t.resourceType;return e&&a&&!this.$isEmpty(o)&&r&&"未选择"!==r?"back":""}},components:{UploadImages:n.default}};e.default=c},"99aa":function(t,e,a){"use strict";a.r(e);var o=a("a679"),r=a("232c");for(var n in r)["default"].indexOf(n)<0&&function(t){a.d(e,t,(function(){return r[t]}))}(n);a("de3b");var i,c=a("f0c5"),s=Object(c["a"])(r["default"],o["b"],o["c"],!1,null,"296c3d34",null,!1,o["a"],i);e["default"]=s.exports},a46e:function(t,e,a){var o=a("7129");"string"===typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);var r=a("4f06").default;r("0e8cd7af",o,!0,{sourceMap:!1,shadowMode:!1})},a679:function(t,e,a){"use strict";a.d(e,"b",(function(){return r})),a.d(e,"c",(function(){return n})),a.d(e,"a",(function(){return o}));var o={uPopup:a("df25").default},r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("u-popup",{attrs:{mode:"bottom","border-radius":t.borderRadius,popup:!1,maskCloseAble:t.maskCloseAble,length:"auto",safeAreaInsetBottom:t.safeAreaInsetBottom,"z-index":t.uZIndex},on:{close:function(e){arguments[0]=e=t.$handleEvent(e),t.popupClose.apply(void 0,arguments)}},model:{value:t.value,callback:function(e){t.value=e},expression:"value"}},[t.tips.text?a("v-uni-view",{staticClass:"u-tips u-border-bottom",style:[t.tipsStyle]},[t._v(t._s(t.tips.text))]):t._e(),t._l(t.list,(function(e,o){return[a("v-uni-view",{key:o+"_0",staticClass:"u-action-sheet-item u-line-1",class:[o<t.list.length-1?"u-border-bottom":""],style:[t.itemStyle(o)],attrs:{"hover-stay-time":150},on:{touchmove:function(e){e.stopPropagation(),e.preventDefault(),arguments[0]=e=t.$handleEvent(e)},click:function(e){arguments[0]=e=t.$handleEvent(e),t.itemClick(o)}}},[a("v-uni-text",[t._v(t._s(e.text))]),e.subText?a("v-uni-text",{staticClass:"u-action-sheet-item__subtext u-line-1"},[t._v(t._s(e.subText))]):t._e()],1)]})),t.cancelBtn?a("v-uni-view",{staticClass:"u-gab"}):t._e(),t.cancelBtn?a("v-uni-view",{staticClass:"u-actionsheet-cancel u-action-sheet-item",attrs:{"hover-class":"u-hover-class","hover-stay-time":150},on:{touchmove:function(e){e.stopPropagation(),e.preventDefault(),arguments[0]=e=t.$handleEvent(e)},click:function(e){arguments[0]=e=t.$handleEvent(e),t.close.apply(void 0,arguments)}}},[t._v(t._s(t.cancelText))]):t._e()],2)},n=[]},aa77:function(t,e,a){"use strict";var o=a("a46e"),r=a.n(o);r.a},ac17:function(t,e,a){"use strict";a.r(e);var o=a("26d8"),r=a("266b");for(var n in r)["default"].indexOf(n)<0&&function(t){a.d(e,t,(function(){return r[t]}))}(n);a("aa77");var i,c=a("f0c5"),s=Object(c["a"])(r["default"],o["b"],o["c"],!1,null,"b3fe924a",null,!1,o["a"],i);e["default"]=s.exports},bcd2:function(t,e,a){var o=a("4bad");e=o(!1),e.push([t.i,'@charset "UTF-8";\n/* uni.scss */\n/* 页面左右间距 */\n/* 文字尺寸 */\n/*文字颜色*/\n/* 图片加载中颜色 */\n/* 行为相关颜色 */\n/* 边框颜色 */.color-primary[data-v-296c3d34]{color:#3049c0}.color-333[data-v-296c3d34]{color:#333}.color-666[data-v-296c3d34]{color:#666}.color-999[data-v-296c3d34]{color:#999}.bg-color[data-v-296c3d34]{background-color:#f7f7f7}.bg-white[data-v-296c3d34]{background-color:#fff}.white-color[data-v-296c3d34]{color:#fff}.primary-color[data-v-296c3d34]{color:#f54400}.success-color[data-v-296c3d34]{color:#0e130f}.warning-color[data-v-296c3d34]{color:#f0ad4e}.error-color[data-v-296c3d34]{color:#dd524d}.primary-text[data-v-296c3d34]{color:#333}.secondary-text[data-v-296c3d34]{color:#666}.tip-text[data-v-296c3d34]{color:#999}.color-e32417[data-v-296c3d34]{color:#e32417}.u-tips[data-v-296c3d34]{font-size:%?26?%;text-align:center;padding:%?34?% 0;line-height:1;color:#909399}.u-action-sheet-item[data-v-296c3d34]{\ndisplay:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;\nline-height:1;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;font-size:%?32?%;padding:%?34?% 0;-webkit-flex-direction:column;flex-direction:column}.u-action-sheet-item__subtext[data-v-296c3d34]{font-size:%?24?%;color:#909399;margin-top:%?20?%}.u-gab[data-v-296c3d34]{height:%?12?%;background-color:#eaeaec}.u-actionsheet-cancel[data-v-296c3d34]{color:#303133}',""]),t.exports=e},daef:function(t,e,a){var o=a("bcd2");"string"===typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);var r=a("4f06").default;r("77411eab",o,!0,{sourceMap:!1,shadowMode:!1})},de3b:function(t,e,a){"use strict";var o=a("daef"),r=a.n(o);r.a}}]);