(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-mine-personal-settings-index"],{"0d21":function(t,a,o){"use strict";o.d(a,"b",(function(){return n})),o.d(a,"c",(function(){return r})),o.d(a,"a",(function(){return e}));var e={uMask:o("a0c4").default},n=function(){var t=this,a=t.$createElement,o=t._self._c||a;return o("v-uni-view",{staticClass:"tb"},[o("v-uni-view",{staticClass:"pl30 pr30 bg-white ft30"},[o("v-uni-view",{staticClass:"between-row h100 bb center-align"},[o("v-uni-text",{staticClass:"flex1 h100 center-align bold"},[t._v("头像")]),o("v-uni-view",{staticClass:"center-align color-999"},[o("img",{staticClass:"member-avator",attrs:{src:t.avatarUrl(t.formData.avatar),mode:"scaleToFill"},on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.onBigAvatar.apply(void 0,arguments)}}}),o("avatar",{ref:"avatar",staticStyle:{width:"0",height:"0"},on:{upload:function(a){arguments[0]=a=t.$handleEvent(a),t.myUpload.apply(void 0,arguments)}}}),o("v-uni-view",{on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.changeAvatar.apply(void 0,arguments)}}},[o("svg-icon",{staticClass:"ft20 ml8",attrs:{icon:"icon_xiangyoujiantou"}})],1)],1)],1),t._l(t.infoProps,(function(a,e){return[t.isInfoShow(a.prop)?o("v-uni-view",{key:e,staticClass:"between-row h100 center-align",class:3!==e&&"bb"},[o("v-uni-text",{staticClass:"flex1 bold"},[t._v(t._s(a.name))]),o("v-uni-view",{staticClass:"center-align color-999",on:{click:function(o){arguments[0]=o=t.$handleEvent(o),t.onInfoItem(a.prop)}}},[o("v-uni-text",[t._v(t._s(t.infoText(a.prop)))]),t.isClickShow(a.prop)?o("svg-icon",{staticClass:"ft20 ml8 mt4",attrs:{icon:"icon_xiangyoujiantou"}}):t._e()],1)],1):t._e()]})),o("v-uni-view",{staticClass:"pt12 pb32 color-999 ft26"},[t.$isEmpty(t.formData.orgName)?o("v-uni-text",[t._v("认证后可在论坛发布帖子，可报名参加联盟活动")]):t._l(t.realNameProp,(function(a,e){return o("v-uni-view",{key:e,class:0===e&&"mb20"},[o("v-uni-text",[t._v(t._s(a.name)+"：")]),o("v-uni-text",{staticClass:"color-333"},[t._v(t._s(t.formData[a.prop]))])],1)}))],2)],2),o("u-mask",{attrs:{show:t.isShowBigAvatar,"custom-style":t.maskCustomStyle},on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.onBigAvatar.apply(void 0,arguments)}}},[o("v-uni-view",{staticClass:"center-align",staticStyle:{height:"100%"}},[o("img",{staticClass:"member-big-avator",attrs:{src:t.avatarUrl(t.formData.avatar),mode:"widthFix"}})])],1)],1)},r=[]},"22d2":function(t,a,o){"use strict";o.r(a);var e=o("c80a"),n=o.n(e);for(var r in e)["default"].indexOf(r)<0&&function(t){o.d(a,t,(function(){return e[t]}))}(r);a["default"]=n.a},"26da":function(t,a,o){var e=o("96ef");"string"===typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);var n=o("4f06").default;n("adaf2848",e,!0,{sourceMap:!1,shadowMode:!1})},4945:function(t,a,o){var e=o("24fb");a=e(!1),a.push([t.i,'@charset "UTF-8";\n/* uni.scss */\n/* 页面左右间距 */\n/* 文字尺寸 */\n/*文字颜色*/\n/* 图片加载中颜色 */\n/* 行为相关颜色 */\n/* 边框颜色 */.color-333[data-v-ff9dd99c]{color:#333}.color-666[data-v-ff9dd99c]{color:#666}.color-999[data-v-ff9dd99c]{color:#999}.bg-color[data-v-ff9dd99c]{background-color:#f7f7f7}.bg-white[data-v-ff9dd99c]{background-color:#fff}.white-color[data-v-ff9dd99c]{color:#fff}.primary-color[data-v-ff9dd99c]{color:#f54400}.success-color[data-v-ff9dd99c]{color:#0e130f}.warning-color[data-v-ff9dd99c]{color:#f0ad4e}.error-color[data-v-ff9dd99c]{color:#dd524d}.primary-text[data-v-ff9dd99c]{color:#333}.secondary-text[data-v-ff9dd99c]{color:#666}.tip-text[data-v-ff9dd99c]{color:#999}.color-e32417[data-v-ff9dd99c]{color:#e32417}.u-mask[data-v-ff9dd99c]{position:fixed;top:0;left:0;right:0;bottom:0;opacity:0;-webkit-transition:-webkit-transform .3s;transition:-webkit-transform .3s;transition:transform .3s;transition:transform .3s,-webkit-transform .3s}.u-mask-show[data-v-ff9dd99c]{opacity:1}.u-mask-zoom[data-v-ff9dd99c]{-webkit-transform:scale(1.2);transform:scale(1.2)}',""]),t.exports=a},"68de":function(t,a,o){"use strict";var e=o("4ea4");Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var n=e(o("5530"));o("a9e3"),o("b64b");var r={name:"u-mask",props:{show:{type:Boolean,default:!1},zIndex:{type:[Number,String],default:""},customStyle:{type:Object,default:function(){return{}}},zoom:{type:Boolean,default:!0},duration:{type:[Number,String],default:300},maskClickAble:{type:Boolean,default:!0}},data:function(){return{zoomStyle:{transform:""},scale:"scale(1.2, 1.2)"}},watch:{show:function(t){t&&this.zoom?this.zoomStyle.transform="scale(1, 1)":!t&&this.zoom&&(this.zoomStyle.transform=this.scale)}},computed:{maskStyle:function(){var t={backgroundColor:"rgba(0, 0, 0, 0.6)"};return this.show?t.zIndex=this.zIndex?this.zIndex:this.$u.zIndex.mask:t.zIndex=-1,t.transition="all ".concat(this.duration/1e3,"s ease-in-out"),Object.keys(this.customStyle).length&&(t=(0,n.default)((0,n.default)({},t),this.customStyle)),t}},methods:{click:function(){this.maskClickAble&&this.$emit("click")}}};a.default=r},"8c4e":function(t,a,o){"use strict";o.r(a);var e=o("0d21"),n=o("22d2");for(var r in n)["default"].indexOf(r)<0&&function(t){o.d(a,t,(function(){return n[t]}))}(r);o("d24d");var i,c=o("f0c5"),s=Object(c["a"])(n["default"],e["b"],e["c"],!1,null,"69cc6ad0",null,!1,e["a"],i);a["default"]=s.exports},"96ef":function(t,a,o){var e=o("24fb");a=e(!1),a.push([t.i,'@charset "UTF-8";\n/* uni.scss */\n/* 页面左右间距 */\n/* 文字尺寸 */\n/*文字颜色*/\n/* 图片加载中颜色 */\n/* 行为相关颜色 */\n/* 边框颜色 */.color-333[data-v-69cc6ad0]{color:#333}.color-666[data-v-69cc6ad0]{color:#666}.color-999[data-v-69cc6ad0]{color:#999}.bg-color[data-v-69cc6ad0]{background-color:#f7f7f7}.bg-white[data-v-69cc6ad0]{background-color:#fff}.white-color[data-v-69cc6ad0]{color:#fff}.primary-color[data-v-69cc6ad0]{color:#f54400}.success-color[data-v-69cc6ad0]{color:#0e130f}.warning-color[data-v-69cc6ad0]{color:#f0ad4e}.error-color[data-v-69cc6ad0]{color:#dd524d}.primary-text[data-v-69cc6ad0]{color:#333}.secondary-text[data-v-69cc6ad0]{color:#666}.tip-text[data-v-69cc6ad0]{color:#999}.color-e32417[data-v-69cc6ad0]{color:#e32417}uni-page-body[data-v-69cc6ad0]{background:#f7f7f7;height:100%}.h100[data-v-69cc6ad0]{height:%?100?%}.member-avator[data-v-69cc6ad0]{width:%?68?%;height:%?68?%;border-radius:%?68?%}.member-big-avator[data-v-69cc6ad0]{width:100%}body.?%PAGE?%[data-v-69cc6ad0]{background:#f7f7f7}',""]),t.exports=a},a0c4:function(t,a,o){"use strict";o.r(a);var e=o("b0e1"),n=o("d429");for(var r in n)["default"].indexOf(r)<0&&function(t){o.d(a,t,(function(){return n[t]}))}(r);o("f3fb");var i,c=o("f0c5"),s=Object(c["a"])(n["default"],e["b"],e["c"],!1,null,"ff9dd99c",null,!1,e["a"],i);a["default"]=s.exports},b0e1:function(t,a,o){"use strict";var e;o.d(a,"b",(function(){return n})),o.d(a,"c",(function(){return r})),o.d(a,"a",(function(){return e}));var n=function(){var t=this,a=t.$createElement,o=t._self._c||a;return o("v-uni-view",{staticClass:"u-mask",class:{"u-mask-zoom":t.zoom,"u-mask-show":t.show},style:[t.maskStyle,t.zoomStyle],attrs:{"hover-stop-propagation":!0},on:{touchmove:function(a){a.stopPropagation(),a.preventDefault(),arguments[0]=a=t.$handleEvent(a),function(){}.apply(void 0,arguments)},click:function(a){arguments[0]=a=t.$handleEvent(a),t.click.apply(void 0,arguments)}}},[t._t("default")],2)},r=[]},c80a:function(t,a,o){"use strict";var e=o("4ea4");Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0,o("dca8"),o("a15b"),o("a434");var n=o("b893"),r=e(o("c230")),i={name:"index",methods:{onInfoItem:function(t){var a="nick"===t?"/pages/mine/personal-settings/EditNick?nick=".concat(this.formData.nick):"/pages/mine/real-name/index";uni.navigateTo({url:a})},myUpload:function(t){var a=t.path;this.uploadAvatar(a)},uploadAvatar:function(t){var a=this;this.$api.uploadAvatar(t).then((function(t){var o={avatar:t.filePaths[0]};a.modifyMemberPersonalInfo(o)}))},changeAvatar:function(){var t=this;t.$refs.avatar.fChooseImg({selWidth:"500rpx",selHeight:"500rpx",expWidth:"2000rpx",expHeight:"2000rpx",canRotate:!1,quality:1})},onBigAvatar:function(){this.isShowBigAvatar=!this.isShowBigAvatar},modifyMemberPersonalInfo:function(t){var a=this;this.$api.modifyMemberPersonalInfo(t).then((function(t){if(t.isError)return a.$msg(t.message);a.getMemberPersonalInfo()}))},getMemberPersonalInfo:function(){var t=this;this.$api.getMemberPersonalInfo().then((function(a){var o;if(a.isError)return t.$msg(a.message);t.formData=null!==(o=null===a||void 0===a?void 0:a.content)&&void 0!==o?o:{}}))}},data:function(){return{formData:{},isShowBigAvatar:!1,infoProps:Object.freeze([{name:"昵称",prop:"nick"},{name:"身份",prop:"labelList"},{name:"绑定手机",prop:"phone"},{name:"实名认证",prop:"orgName"}]),realNameProp:Object.freeze([{name:"姓名",prop:"name"},{name:"党建联盟",prop:"orgName"}]),avatarUrl:n.avatarUrl}},computed:{maskCustomStyle:function(){var t={background:"rgba(0, 0, 0, 0.4)"};return t},isInfoShow:function(){var t=this;return function(a){return"labelList"!==a||!t.$isEmpty(t.formData.labelList)}},isClickShow:function(){var t=this;return function(a){return"nick"===a||"orgName"===a&&t.$isEmpty(t.formData.orgName)}},infoText:function(){var t=this;return function(a){var o=t.formData,e=o.orgName,n=o.labelList;return"orgName"===a?t.$isEmpty(e)?"未认证":"已认证":("labelList"===a&&n.splice(0,2).join("、"),t.formData[a])}}},components:{avatar:r.default},onShow:function(){this.getMemberPersonalInfo()}};a.default=i},d24d:function(t,a,o){"use strict";var e=o("26da"),n=o.n(e);n.a},d429:function(t,a,o){"use strict";o.r(a);var e=o("68de"),n=o.n(e);for(var r in e)["default"].indexOf(r)<0&&function(t){o.d(a,t,(function(){return e[t]}))}(r);a["default"]=n.a},da22:function(t,a,o){var e=o("4945");"string"===typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);var n=o("4f06").default;n("c8572494",e,!0,{sourceMap:!1,shadowMode:!1})},dca8:function(t,a,o){var e=o("23e7"),n=o("bb2f"),r=o("d039"),i=o("861d"),c=o("f183").onFreeze,s=Object.freeze,f=r((function(){s(1)}));e({target:"Object",stat:!0,forced:f,sham:!n},{freeze:function(t){return s&&i(t)?s(c(t)):t}})},f3fb:function(t,a,o){"use strict";var e=o("da22"),n=o.n(e);n.a}}]);