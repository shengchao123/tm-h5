(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-public-Bind"],{"105e":function(t,e,a){"use strict";var i=a("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=i(a("5530")),o=a("61f7"),r=a("231d"),c={name:"Login",methods:{onJump:function(){uni.switchTab({url:"/pages/home/index/index"})},onGetVerifyCode:function(){this.timer||((0,o.checkInput)(this.submitData.phone,"phone")?(this.countdown(),this.sendVerificationCode()):this.$msg("请输入正确手机号"))},verifySubmitData:function(){(0,o.checkInput)(this.submitData.phone,"phone")?this.$isEmpty(this.submitData.verifyCode)?this.$msg("请输入验证码"):this.bindPhone():this.$msg("请输入正确手机号")},bindPhone:function(){var t=this,e=(0,n.default)((0,n.default)({},this.submitData),{},{thirdUserId:uni.getStorageSync("thirdUserId")});this.$api.bindPhone(e).then((function(e){e.isError?"ERROR"===e.subCode&&t.$msg("验证码不正确"):((0,r.saveLoginInfo)(e.content),uni.setStorageSync("status",3),t.$msg("登录成功"),setTimeout((function(){(0,r.slzxNavigateBack)()}),900))}))},sendVerificationCode:function(){var t={phone:this.submitData.phone};this.$api.sendVerificationCode(t)},countdown:function(){var t=this;if(0===this.time)return this.resetCoundown();this.timer=setTimeout((function(){t.time--,t.codeText="验证码(".concat(t.time,"s)"),t.countdown()}),1e3)},resetCoundown:function(){this.time=60,this.timer=null,this.codeText="获取验证码"}},computed:{isVerified:function(){var t=this.submitData,e=t.phone,a=t.verifyCode;return(0,o.checkInput)(e,"phone")&&6===a.length}},data:function(){return this.time=60,this.timer=null,{codeText:"获取验证码",submitData:{phone:"",verifyCode:""}}}};e.default=c},"25e8e":function(t,e,a){"use strict";var i=a("87a7"),n=a.n(i);n.a},"49ba":function(t,e,a){var i=a("d25c");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var n=a("4f06").default;n("513fa42a",i,!0,{sourceMap:!1,shadowMode:!1})},"4fff":function(t,e,a){"use strict";function i(t,e,a){this.$children.map(n=>{t===n.$options.name?n.$emit.apply(n,[e].concat(a)):i.apply(n,[t,e].concat(a))})}a.r(e),e["default"]={methods:{dispatch(t,e,a){let i=this.$parent||this.$root,n=i.$options.name;while(i&&(!n||n!==t))i=i.$parent,i&&(n=i.$options.name);i&&i.$emit.apply(i,[e].concat(a))},broadcast(t,e,a){i.call(this,t,e,a)}}}},"50ec":function(t,e,a){"use strict";var i=a("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,a("a9e3"),a("498a");var n=i(a("4fff")),o={name:"u-input",mixins:[n.default],props:{value:{type:[String,Number],default:""},type:{type:String,default:"text"},inputAlign:{type:String,default:"left"},placeholder:{type:String,default:"请输入内容"},disabled:{type:Boolean,default:!1},maxlength:{type:[Number,String],default:140},placeholderStyle:{type:String,default:"color: #c0c4cc;"},confirmType:{type:String,default:"done"},customStyle:{type:Object,default:function(){return{}}},fixed:{type:Boolean,default:!1},focus:{type:Boolean,default:!1},passwordIcon:{type:Boolean,default:!0},border:{type:Boolean,default:!1},borderColor:{type:String,default:"#dcdfe6"},autoHeight:{type:Boolean,default:!0},selectOpen:{type:Boolean,default:!1},height:{type:[Number,String],default:""},clearable:{type:Boolean,default:!0},cursorSpacing:{type:[Number,String],default:0},selectionStart:{type:[Number,String],default:-1},selectionEnd:{type:[Number,String],default:-1},trim:{type:Boolean,default:!0},showConfirmbar:{type:Boolean,default:!0}},data:function(){return{defaultValue:this.value,inputHeight:70,textareaHeight:100,validateState:!1,focused:!1,showPassword:!1,lastValue:""}},watch:{value:function(t,e){this.defaultValue=t,t!=e&&"select"==this.type&&this.handleInput({detail:{value:t}})}},computed:{inputMaxlength:function(){return Number(this.maxlength)},getStyle:function(){var t={};return t.minHeight=this.height?this.height+"rpx":"textarea"==this.type?this.textareaHeight+"rpx":this.inputHeight+"rpx",t=Object.assign(t,this.customStyle),t},getCursorSpacing:function(){return Number(this.cursorSpacing)},uSelectionStart:function(){return String(this.selectionStart)},uSelectionEnd:function(){return String(this.selectionEnd)}},created:function(){this.$on("on-form-item-error",this.onFormItemError)},methods:{handleInput:function(t){var e=this,a=t.detail.value;this.trim&&(a=this.$u.trim(a)),this.$emit("input",a),this.defaultValue=a,setTimeout((function(){e.dispatch("u-form-item","on-form-change",a)}),40)},handleBlur:function(t){var e=this;setTimeout((function(){e.focused=!1}),100),this.$emit("blur",t.detail.value),setTimeout((function(){e.dispatch("u-form-item","on-form-blur",t.detail.value)}),40)},onFormItemError:function(t){this.validateState=t},onFocus:function(t){this.focused=!0,this.$emit("focus")},onConfirm:function(t){this.$emit("confirm",t.detail.value)},onClear:function(t){this.$emit("input","")},inputClick:function(){this.$emit("click")}}};e.default=o},"6ede":function(t,e,a){"use strict";a.d(e,"b",(function(){return n})),a.d(e,"c",(function(){return o})),a.d(e,"a",(function(){return i}));var i={uInput:a("d5da").default},n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"login-wrap relative"},[a("div",{staticClass:"skip-btn ft26",staticStyle:{color:"#FF8E00"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.onJump.apply(void 0,arguments)}}},[t._v("跳过")]),a("div",{staticClass:"content"},[t._m(0),a("div",{staticClass:"box bb center-align mt54"},[a("div",{staticClass:"mr48"},[t._v("手机号")]),a("u-input",{attrs:{placeholder:"请输入手机号",maxlength:"11",focus:!0,trim:!0,type:"number"},model:{value:t.submitData.phone,callback:function(e){t.$set(t.submitData,"phone",e)},expression:"submitData.phone"}})],1),a("div",{staticClass:"box bb center-align"},[a("div",{staticClass:"mr48"},[t._v("验证码")]),a("u-input",{staticClass:"mr32",attrs:{placeholder:"请输入验证码",maxlength:"6",focus:!0,trim:!0,type:"number"},model:{value:t.submitData.verifyCode,callback:function(e){t.$set(t.submitData,"verifyCode",e)},expression:"submitData.verifyCode"}}),a("div",{staticClass:"lb pl24",staticStyle:{color:"#518CFC"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.onGetVerifyCode.apply(void 0,arguments)}}},[t._v(t._s(t.codeText))])],1),a("div",{staticClass:"color-999 ft24 mt16 center-align"},[a("SvgIcon",{attrs:{icon:"icon_tishi"}}),a("div",{staticClass:"ml8"},[t._v("未注册的手机号验证后自动注册")])],1),a("div",{staticClass:"login-btn ft32 bold center ",class:t.isVerified?"active":"disabled",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.verifySubmitData.apply(void 0,arguments)}}},[t._v("登录")]),t._m(1)])])},o=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"ft48 bold"},[t._v("注册登录")]),a("div",{staticClass:"ft26 color-999 mt8"},[t._v("请填写以下注册信息")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"center agreement ft22"},[a("div",{staticClass:"color-999"},[t._v("登录即同意")]),a("div",{staticStyle:{color:"#518CFC"}},[t._v("《用户注册协议》")])])}]},"87a7":function(t,e,a){var i=a("ec49");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var n=a("4f06").default;n("e30a176c",i,!0,{sourceMap:!1,shadowMode:!1})},a40b:function(t,e,a){"use strict";a.d(e,"b",(function(){return n})),a.d(e,"c",(function(){return o})),a.d(e,"a",(function(){return i}));var i={uIcon:a("f86b").default},n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{staticClass:"u-input",class:{"u-input--border":t.border,"u-input--error":t.validateState},style:{padding:"0 "+(t.border?20:0)+"rpx",borderColor:t.borderColor,textAlign:t.inputAlign},on:{click:function(e){e.stopPropagation(),arguments[0]=e=t.$handleEvent(e),t.inputClick.apply(void 0,arguments)}}},["textarea"==t.type?a("v-uni-textarea",{staticClass:"u-input__input u-input__textarea",style:[t.getStyle],attrs:{value:t.defaultValue,placeholder:t.placeholder,placeholderStyle:t.placeholderStyle,disabled:t.disabled,maxlength:t.inputMaxlength,fixed:t.fixed,focus:t.focus,autoHeight:t.autoHeight,"selection-end":t.uSelectionEnd,"selection-start":t.uSelectionStart,"cursor-spacing":t.getCursorSpacing,"show-confirm-bar":t.showConfirmbar},on:{input:function(e){arguments[0]=e=t.$handleEvent(e),t.handleInput.apply(void 0,arguments)},blur:function(e){arguments[0]=e=t.$handleEvent(e),t.handleBlur.apply(void 0,arguments)},focus:function(e){arguments[0]=e=t.$handleEvent(e),t.onFocus.apply(void 0,arguments)},confirm:function(e){arguments[0]=e=t.$handleEvent(e),t.onConfirm.apply(void 0,arguments)}}}):a("v-uni-input",{staticClass:"u-input__input",style:[t.getStyle],attrs:{type:"password"==t.type?"text":t.type,value:t.defaultValue,password:"password"==t.type&&!t.showPassword,placeholder:t.placeholder,placeholderStyle:t.placeholderStyle,disabled:t.disabled||"select"===t.type,maxlength:t.inputMaxlength,focus:t.focus,confirmType:t.confirmType,"cursor-spacing":t.getCursorSpacing,"selection-end":t.uSelectionEnd,"selection-start":t.uSelectionStart,"show-confirm-bar":t.showConfirmbar},on:{focus:function(e){arguments[0]=e=t.$handleEvent(e),t.onFocus.apply(void 0,arguments)},blur:function(e){arguments[0]=e=t.$handleEvent(e),t.handleBlur.apply(void 0,arguments)},input:function(e){arguments[0]=e=t.$handleEvent(e),t.handleInput.apply(void 0,arguments)},confirm:function(e){arguments[0]=e=t.$handleEvent(e),t.onConfirm.apply(void 0,arguments)}}}),a("v-uni-view",{staticClass:"u-input__right-icon u-flex"},[t.clearable&&""!=t.value&&t.focused?a("v-uni-view",{staticClass:"u-input__right-icon__clear u-input__right-icon__item",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.onClear.apply(void 0,arguments)}}},[a("u-icon",{attrs:{size:"32",name:"close-circle-fill",color:"#c0c4cc"}})],1):t._e(),t.passwordIcon&&"password"==t.type?a("v-uni-view",{staticClass:"u-input__right-icon__clear u-input__right-icon__item"},[a("u-icon",{attrs:{size:"32",name:t.showPassword?"eye-fill":"eye",color:"#c0c4cc"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.showPassword=!t.showPassword}}})],1):t._e(),"select"==t.type?a("v-uni-view",{staticClass:"u-input__right-icon--select u-input__right-icon__item",class:{"u-input__right-icon--select--reverse":t.selectOpen}},[a("u-icon",{attrs:{name:"arrow-down-fill",size:"26",color:"#c0c4cc"}})],1):t._e()],1)],1)},o=[]},acf9:function(t,e,a){"use strict";var i=a("49ba"),n=a.n(i);n.a},d25c:function(t,e,a){var i=a("4bad");e=i(!1),e.push([t.i,'@charset "UTF-8";\n/* uni.scss */\n/* 页面左右间距 */\n/* 文字尺寸 */\n/*文字颜色*/\n/* 图片加载中颜色 */\n/* 行为相关颜色 */\n/* 边框颜色 */.color-333[data-v-553578a2]{color:#333}.color-666[data-v-553578a2]{color:#666}.color-999[data-v-553578a2]{color:#999}.bg-color[data-v-553578a2]{background-color:#f7f7f7}.bg-white[data-v-553578a2]{background-color:#fff}.white-color[data-v-553578a2]{color:#fff}.primary-color[data-v-553578a2]{color:#f54400}.success-color[data-v-553578a2]{color:#0e130f}.warning-color[data-v-553578a2]{color:#f0ad4e}.error-color[data-v-553578a2]{color:#dd524d}.primary-text[data-v-553578a2]{color:#333}.secondary-text[data-v-553578a2]{color:#666}.tip-text[data-v-553578a2]{color:#999}.color-e32417[data-v-553578a2]{color:#e32417}.u-input[data-v-553578a2]{position:relative;-webkit-box-flex:1;-webkit-flex:1;flex:1;\ndisplay:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row\n}.u-input__input[data-v-553578a2]{font-size:%?28?%;color:#303133;-webkit-box-flex:1;-webkit-flex:1;flex:1}.u-input__textarea[data-v-553578a2]{width:auto;font-size:%?28?%;color:#303133;padding:%?10?% 0;line-height:normal;-webkit-box-flex:1;-webkit-flex:1;flex:1}.u-input--border[data-v-553578a2]{border-radius:%?6?%;border-radius:4px;border:1px solid #dcdfe6}.u-input--error[data-v-553578a2]{border-color:#fa3534!important}.u-input__right-icon__item[data-v-553578a2]{margin-left:%?10?%}.u-input__right-icon--select[data-v-553578a2]{-webkit-transition:-webkit-transform .4s;transition:-webkit-transform .4s;transition:transform .4s;transition:transform .4s,-webkit-transform .4s}.u-input__right-icon--select--reverse[data-v-553578a2]{-webkit-transform:rotate(-180deg);transform:rotate(-180deg)}',""]),t.exports=e},d5da:function(t,e,a){"use strict";a.r(e);var i=a("a40b"),n=a("daa9");for(var o in n)["default"].indexOf(o)<0&&function(t){a.d(e,t,(function(){return n[t]}))}(o);a("acf9");var r,c=a("f0c5"),l=Object(c["a"])(n["default"],i["b"],i["c"],!1,null,"553578a2",null,!1,i["a"],r);e["default"]=l.exports},daa9:function(t,e,a){"use strict";a.r(e);var i=a("50ec"),n=a.n(i);for(var o in i)["default"].indexOf(o)<0&&function(t){a.d(e,t,(function(){return i[t]}))}(o);e["default"]=n.a},e158:function(t,e,a){"use strict";a.r(e);var i=a("6ede"),n=a("f39a");for(var o in n)["default"].indexOf(o)<0&&function(t){a.d(e,t,(function(){return n[t]}))}(o);a("25e8e");var r,c=a("f0c5"),l=Object(c["a"])(n["default"],i["b"],i["c"],!1,null,"1fe0a7c2",null,!1,i["a"],r);e["default"]=l.exports},ec49:function(t,e,a){var i=a("4bad");e=i(!1),e.push([t.i,'@charset "UTF-8";\n/* uni.scss */\n/* 页面左右间距 */\n/* 文字尺寸 */\n/*文字颜色*/\n/* 图片加载中颜色 */\n/* 行为相关颜色 */\n/* 边框颜色 */.color-333[data-v-1fe0a7c2]{color:#333}.color-666[data-v-1fe0a7c2]{color:#666}.color-999[data-v-1fe0a7c2]{color:#999}.bg-color[data-v-1fe0a7c2]{background-color:#f7f7f7}.bg-white[data-v-1fe0a7c2]{background-color:#fff}.white-color[data-v-1fe0a7c2]{color:#fff}.primary-color[data-v-1fe0a7c2]{color:#f54400}.success-color[data-v-1fe0a7c2]{color:#0e130f}.warning-color[data-v-1fe0a7c2]{color:#f0ad4e}.error-color[data-v-1fe0a7c2]{color:#dd524d}.primary-text[data-v-1fe0a7c2]{color:#333}.secondary-text[data-v-1fe0a7c2]{color:#666}.tip-text[data-v-1fe0a7c2]{color:#999}.color-e32417[data-v-1fe0a7c2]{color:#e32417}.mt54[data-v-1fe0a7c2]{margin-top:%?54?%}.login-wrap[data-v-1fe0a7c2]{padding-top:%?120?%}.login-wrap .skip-btn[data-v-1fe0a7c2]{position:absolute;right:%?32?%;top:%?32?%}.login-wrap .content[data-v-1fe0a7c2]{padding:0 %?32?%}.login-wrap .content .box[data-v-1fe0a7c2]{font-size:%?30?%;padding:%?30?% 0}.login-wrap .login-btn[data-v-1fe0a7c2]{margin-top:%?120?%;height:%?88?%;border-radius:%?44?%;color:#fff}.login-wrap .active[data-v-1fe0a7c2]{background:#e32417}.login-wrap .disabled[data-v-1fe0a7c2]{background:#ccc}.login-wrap .agreement[data-v-1fe0a7c2]{position:fixed;left:0;right:0;bottom:%?60?%}',""]),t.exports=e},f39a:function(t,e,a){"use strict";a.r(e);var i=a("105e"),n=a.n(i);for(var o in i)["default"].indexOf(o)<0&&function(t){a.d(e,t,(function(){return i[t]}))}(o);e["default"]=n.a}}]);