(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-steward-good-helper-index~pages-steward-good-helper-reception-hall-index"],{"08f2":function(t,e,o){"use strict";var n=o("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=n(o("2909"));o("a434"),o("4de4"),o("d81d"),o("a15b");var a=n(o("87e7")),c=null,r={components:{JointUnitPop:a.default},name:"ReceivePop",methods:{show:function(t){var e=t.projectId,o=t.unitIds,n=t.communityOrgId;this.isShow=!0,this.projectId=e,this.unitIds=o||[],this.communityOrgId=n||null,o&&1===o.length&&(this.selectedType=2,this.selectList.splice(0,1))},hide:function(){this.isShow=!1,this.resetData()},resetData:function(){this.projectId=null,this.communityOrgId=null,this.unitIds=[],this.selectedType=1,this.selectList=(0,i.default)(c)},onSelect:function(t){this.selectedType=t.type},onJointUnitShow:function(){this.$refs.jointUnitPop.show(this.communityOrgId)},jointUnitConfirm:function(t){this.selectUnits=(0,i.default)(t)},onConfirm:function(){this.leadJourneyHelperProjectSchedule()},leadJourneyHelperProjectSchedule:function(){var t=this,e=this.selectedType;if(this.isHall&&1===e&&0===this.selectUnits.length)return this.$msg("请先选择联办单位");var o=this.memberPersonalInfo.unitOrgId,n=this.isHall?this.selectUnits:this.unitIds;n=n.filter((function(t){return t.id!==o}));var i={id:this.projectId};1===e&&(i.journeyCoConstructionUnitIds=n.map((function(t){return t.id}))),this.$api.leadJourneyHelperProjectSchedule(i).then((function(e){if(e.isError)return t.$msg(e.message);t.$msg("认领成功"),t.hide()}))}},data:function(){return{isShow:!1,projectId:null,communityOrgId:null,unitIds:[],selectUnits:[],selectedType:1,selectList:[{name:"联合领办",type:1,description:"视为共建单位联合领办，分数平分"},{name:"单独领办",type:2,description:"视为单独领办，享受分数加成"}]}},computed:{unitNameText:function(){var t=this.selectUnits;if(0===t.length)return"";var e=t.map((function(t){return t.name}));return"(已选：".concat(e.join("、"),")")},memberPersonalInfo:function(){return this.$store.state.user.memberPersonalInfo}},props:{isHall:Boolean,itemConfig:Object,showContact:{type:Boolean,default:function(){return!1}}},created:function(){c=(0,i.default)(this.selectList)}};e.default=r},"0904":function(t,e,o){"use strict";o.r(e);var n=o("1f48"),i=o.n(n);for(var a in n)["default"].indexOf(a)<0&&function(t){o.d(e,t,(function(){return n[t]}))}(a);e["default"]=i.a},"131e":function(t,e,o){"use strict";o.r(e);var n=o("734e"),i=o("0904");for(var a in i)["default"].indexOf(a)<0&&function(t){o.d(e,t,(function(){return i[t]}))}(a);o("f5ad");var c,r=o("f0c5"),s=Object(r["a"])(i["default"],n["b"],n["c"],!1,null,"6822c460",null,!1,n["a"],c);e["default"]=s.exports},1728:function(t,e,o){"use strict";o.r(e);var n=o("4c5b"),i=o("dca1");for(var a in i)["default"].indexOf(a)<0&&function(t){o.d(e,t,(function(){return i[t]}))}(a);o("1ab9");var c,r=o("f0c5"),s=Object(r["a"])(i["default"],n["b"],n["c"],!1,null,"cd391a62",null,!1,n["a"],c);e["default"]=s.exports},"1ab9":function(t,e,o){"use strict";var n=o("2abe"),i=o.n(n);i.a},"1f48":function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,o("99af");var n={name:"projectItem",methods:{onDetail:function(){var t=this.isHome?"helper":"hall";uni.navigateTo({url:"/pages/steward/good-helper/project-detail/index?id=".concat(this.projectItem.id,"&entrance=").concat(t)})},onReceive:function(){var t=this.projectItem.id;this.$emit("onReceive",t)},onExpandContent:function(){this.isShowExpand=!1,this.isHideContent=!1},calculationHeight:function(){var t=this.$refs.contentBox.offsetHeight,e=this.$refs.contentText.offsetHeight;this.isShowExpand=e>t}},props:{isHome:Boolean,isUnitUser:Boolean,projectItem:Object,showBorder:Boolean},data:function(){return{isShowExpand:!1,isHideContent:!0}},computed:{isShowReceiveBtn:function(){var t=this.projectItem.status;return this.isUnitUser&&1===t},projectLeadName:function(){var t=this.projectItem.journeyHelperProjectLeadRecordList;return t?t.length>1?"由共建单位联合领办":t[0].journeyCoConstructionUnitName:""},startTime:function(){var t=this.projectItem,e=t.status,o=t.createTime,n=t.leadTime,i=1===e?o:n,a=1===e?"发布":"领办";return this.$moment(i).format("YYYY-MM-DD")+a},endTime:function(){if(!this.isHome)return"";var t=this.projectItem.expiredTime,e=t-(new Date).getTime(),o=e%864e5,n=o%36e5,i=Math.floor(e/864e5),a=Math.floor(o/36e5),c=Math.floor(n/6e4),r="";return i&&(r+=i+"天"),a&&(r+=a+"小时"),i||(r+=c+"分"),r+"后转入领办大厅"},statusIcon:function(){var t=this.projectItem.journeyHelperProjectScheduleList;if(!t||0===t.length)return{icon:"icon_zanwujindu",color:"#999999"};var e=t[0].status;return 3===e?{icon:"icon_yibanjie",color:"#F54000"}:{icon:"icon_genjinzhong",color:"#FFB319"}}},mounted:function(){var t=this;this.$nextTick((function(){t.calculationHeight()}))},created:function(){}};e.default=n},2909:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=s;var n=r(o("6005")),i=r(o("db90")),a=r(o("06c5")),c=r(o("3427"));function r(t){return t&&t.__esModule?t:{default:t}}function s(t){return(0,n.default)(t)||(0,i.default)(t)||(0,a.default)(t)||(0,c.default)()}},"2abe":function(t,e,o){var n=o("b74e");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var i=o("4f06").default;i("4c6c8baa",n,!0,{sourceMap:!1,shadowMode:!1})},"2ed7":function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,o("a434"),o("4de4");var n={name:"JointUnitPop",methods:{show:function(t){this.isShow=!0,this.communityOrgId=t},hide:function(){this.isShow=!1},onSelect:function(t){var e=this.selectList,o=t.id,n=this.findTargetIndexOnObjectList(e,"id",o);if(null===n)return e.length>=2?this.$msg("最多选择2个"):void this.selectList.push(t);e.splice(n,1)},onConfirm:function(){this.$emit("onConfirm",this.selectList),this.hide()},findTargetIndexOnObjectList:function(t,e,o){for(var n=0;n<t.length;n++)if(t[n][e]===o)return n;return null},getUnitListByCommunity:function(){var t=this;this.$api.getUnitListByCommunity().then((function(e){if(e.isError)return t.$msg(e.message);var o=e.content||[],n=t.memberPersonalInfo.unitOrgId;t.unitList=o.filter((function(t){return t.id!==n}))}))}},data:function(){return{isShow:!1,communityOrgId:null,unitList:[],selectList:[]}},computed:{isSelected:function(){var t=this;return function(e){return null!==t.findTargetIndexOnObjectList(t.selectList,"id",e.id)}},memberPersonalInfo:function(){return this.$store.state.user.memberPersonalInfo}},watch:{communityOrgId:function(t){t&&this.getUnitListByCommunity()}}};e.default=n},3427:function(t,e,o){"use strict";function n(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}Object.defineProperty(e,"__esModule",{value:!0}),e.default=n},4125:function(t,e,o){var n=o("4bad");e=n(!1),e.push([t.i,'@charset "UTF-8";\n/* uni.scss */\n/* 页面左右间距 */\n/* 文字尺寸 */\n/*文字颜色*/\n/* 图片加载中颜色 */\n/* 行为相关颜色 */\n/* 边框颜色 */.color-primary[data-v-e47c6282]{color:#3049c0}.color-333[data-v-e47c6282]{color:#333}.color-666[data-v-e47c6282]{color:#666}.color-999[data-v-e47c6282]{color:#999}.bg-color[data-v-e47c6282]{background-color:#f7f7f7}.bg-white[data-v-e47c6282]{background-color:#fff}.white-color[data-v-e47c6282]{color:#fff}.primary-color[data-v-e47c6282]{color:#f54400}.success-color[data-v-e47c6282]{color:#0e130f}.warning-color[data-v-e47c6282]{color:#f0ad4e}.error-color[data-v-e47c6282]{color:#dd524d}.primary-text[data-v-e47c6282]{color:#333}.secondary-text[data-v-e47c6282]{color:#666}.tip-text[data-v-e47c6282]{color:#999}.color-e32417[data-v-e47c6282]{color:#e32417}.title[data-v-e47c6282]{height:%?74?%;line-height:%?74?%}.tip[data-v-e47c6282]{color:#ff9400}.list[data-v-e47c6282]{max-height:%?702?%;overflow:scroll}.list .item[data-v-e47c6282]{height:%?97?%;border-bottom:solid %?1?% #eaeaea}.list .selected[data-v-e47c6282]{color:#e32417}.close-btn[data-v-e47c6282]{position:absolute;right:%?24?%;top:%?12?%}.confirm-btn[data-v-e47c6282]{width:%?331?%;height:%?88?%;line-height:%?88?%;background:#e32417;border-radius:%?45?%}.other-btn[data-v-e47c6282]{width:%?331?%;height:%?88?%;line-height:%?88?%;border-radius:%?45?%;border:solid 1px #e32417;color:#e32417}',""]),t.exports=e},"4b63":function(t,e,o){var n=o("4bad");e=n(!1),e.push([t.i,'@charset "UTF-8";\n/* uni.scss */\n/* 页面左右间距 */\n/* 文字尺寸 */\n/*文字颜色*/\n/* 图片加载中颜色 */\n/* 行为相关颜色 */\n/* 边框颜色 */.color-primary[data-v-6822c460]{color:#3049c0}.color-333[data-v-6822c460]{color:#333}.color-666[data-v-6822c460]{color:#666}.color-999[data-v-6822c460]{color:#999}.bg-color[data-v-6822c460]{background-color:#f7f7f7}.bg-white[data-v-6822c460]{background-color:#fff}.white-color[data-v-6822c460]{color:#fff}.primary-color[data-v-6822c460]{color:#f54400}.success-color[data-v-6822c460]{color:#0e130f}.warning-color[data-v-6822c460]{color:#f0ad4e}.error-color[data-v-6822c460]{color:#dd524d}.primary-text[data-v-6822c460]{color:#333}.secondary-text[data-v-6822c460]{color:#666}.tip-text[data-v-6822c460]{color:#999}.color-e32417[data-v-6822c460]{color:#e32417}.porject-item-wrap .receive-btn[data-v-6822c460]{width:%?128?%;height:%?56?%;line-height:%?56?%;border-radius:%?30?%;border:solid 1px #e32417}.porject-item-wrap .content[data-v-6822c460]{position:relative}.porject-item-wrap .content .content-box[data-v-6822c460]{width:100%}.porject-item-wrap .content .content-box .content-text[data-v-6822c460]{line-height:%?38?%}.porject-item-wrap .content .hide-content[data-v-6822c460]{max-height:%?80?%;display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:2;overflow:hidden}.porject-item-wrap .content .expand[data-v-6822c460]{position:absolute;right:%?-8?%;bottom:%?4?%;width:%?90?%;height:%?35?%;background:#fff;letter-spacing:%?2?%}',""]),t.exports=e},"4c5b":function(t,e,o){"use strict";o.d(e,"b",(function(){return i})),o.d(e,"c",(function(){return a})),o.d(e,"a",(function(){return n}));var n={uPopup:o("df25").default},i=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("u-popup",{attrs:{mode:"bottom","border-radius":"30","mask-close-able":!1},model:{value:t.isShow,callback:function(e){t.isShow=e},expression:"isShow"}},[o("v-uni-view",{staticClass:"pl32 pr32 pb32"},[o("div",{staticClass:"title ft30 tc"},[t._v("认领")]),o("div",{staticClass:"close-btn",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.hide.apply(void 0,arguments)}}},[o("svg-icon",{staticClass:"ft24 color-999 bold mt8",attrs:{icon:"icon_cha"}})],1),t._l(t.selectList,(function(e,n){return o("div",{key:n,staticClass:"option mb24 pl24 pt32 pb32 center-justify column",class:e.type===t.selectedType?"option-selected":"",on:{click:function(o){arguments[0]=o=t.$handleEvent(o),t.onSelect(e)}}},[o("div",{staticClass:"center-align mb8"},[o("div",{staticClass:"mr16 radio center"},[e.type===t.selectedType?o("svg-icon",{staticClass:"ft20 white-color",attrs:{icon:"icon_duihao"}}):t._e()],1),o("span",{staticClass:"ft32 name"},[t._v(t._s(e.name))])]),o("span",{staticClass:"ft24 description"},[t._v(t._s(e.description))]),1===e.type&&t.isHall?o("div",{staticClass:"pt24"},[o("div",{staticClass:"select-btn ft24 tc",staticStyle:{color:"#E32417"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.onJointUnitShow.apply(void 0,arguments)}}},[t._v("选择联办单位")]),o("div",{staticClass:"ft24 color-999 pt16"},[t._v(t._s(t.unitNameText))])]):t._e()])})),o("div",{staticClass:"confirm-btn white-color ft30 tc mt32",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.onConfirm.apply(void 0,arguments)}}},[t._v("确定")])],2)],1),t.isHall?o("joint-unit-pop",{ref:"jointUnitPop",on:{onConfirm:function(e){arguments[0]=e=t.$handleEvent(e),t.jointUnitConfirm.apply(void 0,arguments)}}}):t._e()],1)},a=[]},6005:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=a;var n=i(o("6b75"));function i(t){return t&&t.__esModule?t:{default:t}}function a(t){if(Array.isArray(t))return(0,n.default)(t)}},6076:function(t,e,o){"use strict";o.d(e,"b",(function(){return i})),o.d(e,"c",(function(){return a})),o.d(e,"a",(function(){return n}));var n={uPopup:o("df25").default},i=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("u-popup",{attrs:{mode:"bottom","border-radius":"30","mask-close-able":!1},model:{value:t.isShow,callback:function(e){t.isShow=e},expression:"isShow"}},[o("v-uni-view",{staticClass:"pl32 pr32 pb32"},[o("div",{staticClass:"title ft30 tc"},[t._v("选择联办单位")]),o("div",{staticClass:"tip ft24 tc pt8 pb8"},[t._v("*最多选择2个联办单位")]),o("div",{staticClass:"close-btn",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.hide.apply(void 0,arguments)}}},[o("svg-icon",{staticClass:"ft24 color-999 bold mt8",attrs:{icon:"icon_cha"}})],1),o("v-uni-scroll-view",{staticClass:"list pl30 pr30",attrs:{"scroll-y":!0}},t._l(t.unitList,(function(e,n){return o("v-uni-view",{key:n,staticClass:"item between-row center-align",class:t.isSelected(e)&&"selected",on:{click:function(o){arguments[0]=o=t.$handleEvent(o),t.onSelect(e)}}},[o("v-uni-text",{staticClass:"ft28"},[t._v(t._s(e.name))]),t.isSelected(e)?o("svg-icon",{staticClass:"ft28 mt4",attrs:{icon:"icon_duihao"}}):t._e()],1)})),1),o("div",{staticClass:"pt8 between-row"},[o("div",{staticClass:"other-btn white-color ft30 tc",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.hide.apply(void 0,arguments)}}},[t._v("取消")]),o("div",{staticClass:"confirm-btn white-color ft30 tc ml24",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.onConfirm.apply(void 0,arguments)}}},[t._v("确定")])])],1)],1)},a=[]},"734e":function(t,e,o){"use strict";var n;o.d(e,"b",(function(){return i})),o.d(e,"c",(function(){return a})),o.d(e,"a",(function(){return n}));var i=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"porject-item-wrap bg-white pl32 pr32",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.onDetail.apply(void 0,arguments)}}},[o("div",{staticClass:"pt32 pb32",class:t.showBorder&&"bb"},[o("div",{staticClass:"center-align between-row"},[o("div",{staticClass:"center-align name"},[o("div",{staticClass:"ft34 medium"},[t._v(t._s(t.projectItem.name))]),1!==t.projectItem.status?o("div",{staticClass:"center",staticStyle:{height:"38rpx"}},[o("svg-icon",{staticClass:"ml16",staticStyle:{"font-size":"100rpx"},style:{color:t.statusIcon.color},attrs:{icon:t.statusIcon.icon}})],1):t._e()]),t.isShowReceiveBtn?o("div",{staticClass:"receive-btn tc ft24 color-e32417",on:{click:function(e){e.stopPropagation(),arguments[0]=e=t.$handleEvent(e),t.onReceive.apply(void 0,arguments)}}},[t._v("认领")]):t._e()]),o("div",{staticClass:"between-row center-align ft24 color-999 pt16 pb16"},[o("div",[o("span",{staticClass:"mr48"},[t._v(t._s(t.startTime))]),1!==t.projectItem.status?o("span",{staticClass:"ml48"},[t._v(t._s(t.projectLeadName))]):t._e()]),t.isHome&&t.isUnitUser?o("span",{staticClass:"ft20 color-999"},[t._v(t._s(t.endTime))]):t._e()]),o("div",{staticClass:"content"},[o("div",{ref:"contentBox",staticClass:"content-box",class:t.isHideContent&&"hide-content"},[o("span",{ref:"contentText",staticClass:"ft26 content-text"},[t._v(t._s(t.projectItem.description))])]),t.isShowExpand?o("v-uni-view",{staticClass:"expand center-flex",on:{click:function(e){e.stopPropagation(),arguments[0]=e=t.$handleEvent(e),t.onExpandContent.apply(void 0,arguments)}}},[o("v-uni-text",{staticClass:"ft24 color-e32417"},[t._v("...展开")])],1):t._e()],1)])])},a=[]},"86e6":function(t,e,o){var n=o("4b63");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var i=o("4f06").default;i("115e3407",n,!0,{sourceMap:!1,shadowMode:!1})},"87e7":function(t,e,o){"use strict";o.r(e);var n=o("6076"),i=o("e409");for(var a in i)["default"].indexOf(a)<0&&function(t){o.d(e,t,(function(){return i[t]}))}(a);o("fa56");var c,r=o("f0c5"),s=Object(r["a"])(i["default"],n["b"],n["c"],!1,null,"e47c6282",null,!1,n["a"],c);e["default"]=s.exports},"8f49":function(t,e,o){var n=o("4125");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var i=o("4f06").default;i("33f245ae",n,!0,{sourceMap:!1,shadowMode:!1})},b74e:function(t,e,o){var n=o("4bad");e=n(!1),e.push([t.i,'@charset "UTF-8";\n/* uni.scss */\n/* 页面左右间距 */\n/* 文字尺寸 */\n/*文字颜色*/\n/* 图片加载中颜色 */\n/* 行为相关颜色 */\n/* 边框颜色 */.color-primary[data-v-cd391a62]{color:#3049c0}.color-333[data-v-cd391a62]{color:#333}.color-666[data-v-cd391a62]{color:#666}.color-999[data-v-cd391a62]{color:#999}.bg-color[data-v-cd391a62]{background-color:#f7f7f7}.bg-white[data-v-cd391a62]{background-color:#fff}.white-color[data-v-cd391a62]{color:#fff}.primary-color[data-v-cd391a62]{color:#f54400}.success-color[data-v-cd391a62]{color:#0e130f}.warning-color[data-v-cd391a62]{color:#f0ad4e}.error-color[data-v-cd391a62]{color:#dd524d}.primary-text[data-v-cd391a62]{color:#333}.secondary-text[data-v-cd391a62]{color:#666}.tip-text[data-v-cd391a62]{color:#999}.color-e32417[data-v-cd391a62]{color:#e32417}.title[data-v-cd391a62]{height:%?90?%;line-height:%?90?%}.close-btn[data-v-cd391a62]{position:absolute;right:%?24?%;top:%?12?%}.option[data-v-cd391a62]{width:100%;background:#f3f3f3;border-radius:%?8?%;box-sizing:border-box}.option .radio[data-v-cd391a62]{width:%?32?%;height:%?32?%;border-radius:50%;border:solid 1px #999;box-sizing:border-box}.option .description[data-v-cd391a62]{color:#999}.option-selected[data-v-cd391a62]{background:#fce9e7}.option-selected .radio[data-v-cd391a62]{border:none;background:#e32417}.option-selected .name[data-v-cd391a62]{color:#e32417}.option-selected .description[data-v-cd391a62]{color:#ef867f}.confirm-btn[data-v-cd391a62]{height:%?80?%;line-height:%?80?%;background:#e32417;border-radius:%?40?%}.select-btn[data-v-cd391a62]{width:%?186?%;height:%?56?%;line-height:%?56?%;border:solid 1px #e32417;border-radius:%?30?%}',""]),t.exports=e},db90:function(t,e,o){"use strict";function n(t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}Object.defineProperty(e,"__esModule",{value:!0}),e.default=n,o("a4d3"),o("e01a"),o("d3b7"),o("d28b"),o("3ca3"),o("ddb0"),o("a630")},dca1:function(t,e,o){"use strict";o.r(e);var n=o("08f2"),i=o.n(n);for(var a in n)["default"].indexOf(a)<0&&function(t){o.d(e,t,(function(){return n[t]}))}(a);e["default"]=i.a},e409:function(t,e,o){"use strict";o.r(e);var n=o("2ed7"),i=o.n(n);for(var a in n)["default"].indexOf(a)<0&&function(t){o.d(e,t,(function(){return n[t]}))}(a);e["default"]=i.a},f5ad:function(t,e,o){"use strict";var n=o("86e6"),i=o.n(n);i.a},fa56:function(t,e,o){"use strict";var n=o("8f49"),i=o.n(n);i.a},ffbf:function(t,e,o){"use strict";t.exports=function(t,e){return e||(e={}),t=t&&t.__esModule?t.default:t,"string"!==typeof t?t:(/^['"].*['"]$/.test(t)&&(t=t.slice(1,-1)),e.hash&&(t+=e.hash),/["'() \t\n]/.test(t)||e.needQuotes?'"'.concat(t.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):t)}}}]);