(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-mine-personal-settings-index"],{"22d2":function(t,a,e){"use strict";e.r(a);var o=e("c80a"),n=e.n(o);for(var r in o)["default"].indexOf(r)<0&&function(t){e.d(a,t,(function(){return o[t]}))}(r);a["default"]=n.a},"2a624":function(t,a,e){var o=e("382c");"string"===typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);var n=e("4f06").default;n("395b706a",o,!0,{sourceMap:!1,shadowMode:!1})},"382c":function(t,a,e){var o=e("4bad");a=o(!1),a.push([t.i,'@charset "UTF-8";\n/* uni.scss */\n/* 页面左右间距 */\n/* 文字尺寸 */\n/*文字颜色*/\n/* 图片加载中颜色 */\n/* 行为相关颜色 */\n/* 边框颜色 */.color-333[data-v-ff9dd99c]{color:#333}.color-666[data-v-ff9dd99c]{color:#666}.color-999[data-v-ff9dd99c]{color:#999}.bg-color[data-v-ff9dd99c]{background-color:#f7f7f7}.bg-white[data-v-ff9dd99c]{background-color:#fff}.white-color[data-v-ff9dd99c]{color:#fff}.primary-color[data-v-ff9dd99c]{color:#f54400}.success-color[data-v-ff9dd99c]{color:#0e130f}.warning-color[data-v-ff9dd99c]{color:#f0ad4e}.error-color[data-v-ff9dd99c]{color:#dd524d}.primary-text[data-v-ff9dd99c]{color:#333}.secondary-text[data-v-ff9dd99c]{color:#666}.tip-text[data-v-ff9dd99c]{color:#999}.color-e32417[data-v-ff9dd99c]{color:#e32417}.u-mask[data-v-ff9dd99c]{position:fixed;top:0;left:0;right:0;bottom:0;opacity:0;-webkit-transition:-webkit-transform .3s;transition:-webkit-transform .3s;transition:transform .3s;transition:transform .3s,-webkit-transform .3s}.u-mask-show[data-v-ff9dd99c]{opacity:1}.u-mask-zoom[data-v-ff9dd99c]{-webkit-transform:scale(1.2);transform:scale(1.2)}',""]),t.exports=a},"68de":function(t,a,e){"use strict";var o=e("4ea4");Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var n=o(e("5530"));e("a9e3"),e("b64b");var r={name:"u-mask",props:{show:{type:Boolean,default:!1},zIndex:{type:[Number,String],default:""},customStyle:{type:Object,default:function(){return{}}},zoom:{type:Boolean,default:!0},duration:{type:[Number,String],default:300},maskClickAble:{type:Boolean,default:!0}},data:function(){return{zoomStyle:{transform:""},scale:"scale(1.2, 1.2)"}},watch:{show:function(t){t&&this.zoom?this.zoomStyle.transform="scale(1, 1)":!t&&this.zoom&&(this.zoomStyle.transform=this.scale)}},computed:{maskStyle:function(){var t={backgroundColor:"rgba(0, 0, 0, 0.6)"};return this.show?t.zIndex=this.zIndex?this.zIndex:this.$u.zIndex.mask:t.zIndex=-1,t.transition="all ".concat(this.duration/1e3,"s ease-in-out"),Object.keys(this.customStyle).length&&(t=(0,n.default)((0,n.default)({},t),this.customStyle)),t}},methods:{click:function(){this.maskClickAble&&this.$emit("click")}}};a.default=r},"861e":function(t,a,e){"use strict";var o=e("c5c8"),n=e.n(o);n.a},"8c4e":function(t,a,e){"use strict";e.r(a);var o=e("bd5e"),n=e("22d2");for(var r in n)["default"].indexOf(r)<0&&function(t){e.d(a,t,(function(){return n[t]}))}(r);e("861e");var i,c=e("f0c5"),s=Object(c["a"])(n["default"],o["b"],o["c"],!1,null,"c6eb142e",null,!1,o["a"],i);a["default"]=s.exports},a0c4:function(t,a,e){"use strict";e.r(a);var o=e("b0e1"),n=e("d429");for(var r in n)["default"].indexOf(r)<0&&function(t){e.d(a,t,(function(){return n[t]}))}(r);e("f3fb");var i,c=e("f0c5"),s=Object(c["a"])(n["default"],o["b"],o["c"],!1,null,"ff9dd99c",null,!1,o["a"],i);a["default"]=s.exports},b0e1:function(t,a,e){"use strict";var o;e.d(a,"b",(function(){return n})),e.d(a,"c",(function(){return r})),e.d(a,"a",(function(){return o}));var n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-uni-view",{staticClass:"u-mask",class:{"u-mask-zoom":t.zoom,"u-mask-show":t.show},style:[t.maskStyle,t.zoomStyle],attrs:{"hover-stop-propagation":!0},on:{touchmove:function(a){a.stopPropagation(),a.preventDefault(),arguments[0]=a=t.$handleEvent(a),function(){}.apply(void 0,arguments)},click:function(a){arguments[0]=a=t.$handleEvent(a),t.click.apply(void 0,arguments)}}},[t._t("default")],2)},r=[]},bd5e:function(t,a,e){"use strict";e.d(a,"b",(function(){return n})),e.d(a,"c",(function(){return r})),e.d(a,"a",(function(){return o}));var o={uMask:e("a0c4").default},n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-uni-view",{staticClass:"tb"},[e("v-uni-view",{staticClass:"pl30 pr30 bg-white ft30"},[e("v-uni-view",{staticClass:"between-row h100 bb center-align"},[e("v-uni-text",{staticClass:"flex1 h100 center-align bold"},[t._v("头像")]),e("v-uni-view",{staticClass:"center-align color-999 relative"},[e("img",{staticClass:"member-avator",attrs:{src:t.avatarUrl(t.formData.avatar),mode:"scaleToFill"},on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.onBigAvatar.apply(void 0,arguments)}}}),e("v-uni-view",{staticClass:"upload-icon",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.changeAvatar.apply(void 0,arguments)}}},[e("svg-icon",{staticClass:"ft20 ml8 relative",attrs:{icon:"icon_xiangyoujiantou"}})],1),e("avatar",{ref:"avatar",staticStyle:{width:"0",height:"0"},on:{upload:function(a){arguments[0]=a=t.$handleEvent(a),t.myUpload.apply(void 0,arguments)}}})],1)],1),t._l(t.infoProps,(function(a,o){return[t.isInfoShow(a.prop)?e("v-uni-view",{key:o,staticClass:"between-row h100 center-align",class:3!==o&&"bb"},[e("v-uni-text",{staticClass:"flex1 bold"},[t._v(t._s(a.name))]),e("v-uni-view",{staticClass:"center-align color-999",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.onInfoItem(a.prop)}}},[e("v-uni-text",[t._v(t._s(t.infoText(a.prop)))]),t.isClickShow(a.prop)?e("svg-icon",{staticClass:"ft20 ml8 mt4",attrs:{icon:"icon_xiangyoujiantou"}}):t._e()],1)],1):t._e()]})),e("v-uni-view",{staticClass:"pt12 pb32 color-999 ft26"},[t.formData.isRealName?t._l(t.realNameProp,(function(a,o){return e("v-uni-view",{key:o,class:0===o&&"mb20"},[e("v-uni-text",[t._v(t._s(a.name)+"：")]),e("v-uni-text",{staticClass:"color-333"},[t._v(t._s(t.formData[a.prop]))])],1)})):e("v-uni-text",[t._v("认证后可在论坛发布帖子，可报名参加联盟活动")])],2)],2),e("u-mask",{attrs:{show:t.isShowBigAvatar,"custom-style":t.maskCustomStyle},on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.onBigAvatar.apply(void 0,arguments)}}},[e("v-uni-view",{staticClass:"center-align",staticStyle:{height:"100%"}},[e("img",{staticClass:"member-big-avator",attrs:{src:t.avatarUrl(t.formData.avatar),mode:"widthFix"}})])],1)],1)},r=[]},c5c8:function(t,a,e){var o=e("f8da");"string"===typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);var n=e("4f06").default;n("a1a144ca",o,!0,{sourceMap:!1,shadowMode:!1})},c80a:function(t,a,e){"use strict";var o=e("4ea4");Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0,e("dca8"),e("a15b"),e("a434");var n=e("b893"),r=o(e("c230")),i={name:"index",methods:{onInfoItem:function(t){if("phone"!==t&&"labelList"!==t&&("orgName"!==t||!this.formData.isRealName)){var a="nick"===t?"/pages/mine/personal-settings/EditNick?nick=".concat(this.formData.nick):"/pages/mine/real-name/index";uni.navigateTo({url:a})}},myUpload:function(t){var a=t.path;this.uploadAvatar(a)},uploadAvatar:function(t){var a=this;this.$api.uploadAvatar(t).then((function(t){a.formData.avatar=t.filePaths[0];var e={avatar:t.filePaths[0]};a.modifyMemberPersonalInfo(e)}))},changeAvatar:function(){var t=this;t.$refs.avatar.fChooseImg({selWidth:"500rpx",selHeight:"500rpx",expWidth:"2000rpx",expHeight:"2000rpx",canRotate:!1,quality:1})},onBigAvatar:function(){this.isShowBigAvatar=!this.isShowBigAvatar},modifyMemberPersonalInfo:function(t){var a=this;this.$api.modifyMemberPersonalInfo(t).then((function(t){if(t.isError)return a.$msg(t.message);a.getMemberPersonalInfo()}))},getMemberPersonalInfo:function(){var t=this;this.$api.getMemberPersonalInfo().then((function(a){var e;if(a.isError)return t.$msg(a.message);t.formData=null!==(e=null===a||void 0===a?void 0:a.content)&&void 0!==e?e:{}}))}},data:function(){return{formData:{},isShowBigAvatar:!1,infoProps:Object.freeze([{name:"昵称",prop:"nick"},{name:"身份",prop:"labelList"},{name:"绑定手机",prop:"phone"},{name:"实名认证",prop:"orgName"}]),realNameProp:Object.freeze([{name:"姓名",prop:"name"},{name:"党建联盟",prop:"orgName"}]),avatarUrl:n.avatarUrl}},computed:{maskCustomStyle:function(){var t={background:"rgba(0, 0, 0, 0.4)"};return t},isInfoShow:function(){var t=this;return function(a){return"labelList"!==a||!t.$isEmpty(t.formData.labelList)}},isClickShow:function(){var t=this;return function(a){return"nick"===a||"orgName"===a&&!t.formData.isRealName}},infoText:function(){var t=this;return function(a){var e=t.formData,o=e.isRealName,n=e.labelList;return"orgName"===a?o?"已认证":"未认证":("labelList"===a&&n.splice(0,2).join("、"),t.formData[a])}}},components:{avatar:r.default},onShow:function(){this.getMemberPersonalInfo()}};a.default=i},d429:function(t,a,e){"use strict";e.r(a);var o=e("68de"),n=e.n(o);for(var r in o)["default"].indexOf(r)<0&&function(t){e.d(a,t,(function(){return o[t]}))}(r);a["default"]=n.a},f3fb:function(t,a,e){"use strict";var o=e("2a624"),n=e.n(o);n.a},f8da:function(t,a,e){var o=e("4bad");a=o(!1),a.push([t.i,'@charset "UTF-8";\n/* uni.scss */\n/* 页面左右间距 */\n/* 文字尺寸 */\n/*文字颜色*/\n/* 图片加载中颜色 */\n/* 行为相关颜色 */\n/* 边框颜色 */.color-333[data-v-c6eb142e]{color:#333}.color-666[data-v-c6eb142e]{color:#666}.color-999[data-v-c6eb142e]{color:#999}.bg-color[data-v-c6eb142e]{background-color:#f7f7f7}.bg-white[data-v-c6eb142e]{background-color:#fff}.white-color[data-v-c6eb142e]{color:#fff}.primary-color[data-v-c6eb142e]{color:#f54400}.success-color[data-v-c6eb142e]{color:#0e130f}.warning-color[data-v-c6eb142e]{color:#f0ad4e}.error-color[data-v-c6eb142e]{color:#dd524d}.primary-text[data-v-c6eb142e]{color:#333}.secondary-text[data-v-c6eb142e]{color:#666}.tip-text[data-v-c6eb142e]{color:#999}.color-e32417[data-v-c6eb142e]{color:#e32417}uni-page-body[data-v-c6eb142e]{background:#f7f7f7;height:100%}.h100[data-v-c6eb142e]{height:%?100?%}.upload-icon[data-v-c6eb142e]{width:%?100?%;height:%?88?%;line-height:%?88?%;position:absolute;right:%?-72?%}.member-avator[data-v-c6eb142e]{width:%?68?%;height:%?68?%;border-radius:%?68?%;margin-right:%?28?%}.member-big-avator[data-v-c6eb142e]{width:100%}body.?%PAGE?%[data-v-c6eb142e]{background:#f7f7f7}',""]),t.exports=a}}]);