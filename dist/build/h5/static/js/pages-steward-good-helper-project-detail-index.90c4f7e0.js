(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-steward-good-helper-project-detail-index"],{"02a8":function(t,e,o){"use strict";var i=o("b6dc"),n=o.n(i);n.a},"087c":function(t,e,o){"use strict";var i;o.d(e,"b",(function(){return n})),o.d(e,"c",(function(){return a})),o.d(e,"a",(function(){return i}));var n=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"publish-btn-wrap white-color center tc",class:t.isScroll?"is-scroll":"",style:{right:t.right,bottom:t.bottom},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.onAdd.apply(void 0,arguments)}}},[t.text?o("div",{staticClass:"ft24 white-color center column"},[o("span",[t._v(t._s(t.text.slice(0,2)))]),o("span",[t._v(t._s(t.text.slice(2,4)))])]):o("svg-icon",{staticClass:"ft32 bold",attrs:{icon:"icon_fabu"}})],1)},a=[]},"0892":function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,o("a9e3");var i={name:"PublishBtn",methods:{onAdd:function(){this.$emit("onPublish")}},props:{text:String,isScroll:Boolean,right:{type:String,default:function(){return"32rpx"}},bottom:{type:[Number,String],default:function(){return"90rpx"}}}};e.default=i},"08f2":function(t,e,o){"use strict";var i=o("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=i(o("2909"));o("a434"),o("4de4"),o("d81d"),o("a15b");var a=i(o("87e7")),r=null,c={components:{JointUnitPop:a.default},name:"ReceivePop",methods:{show:function(t){var e=t.projectId,o=t.unitIds,i=t.communityOrgId;this.isShow=!0,this.projectId=e,this.unitIds=o||[],this.communityOrgId=i||null,o&&1===o.length&&(this.selectedType=2,this.selectList.splice(0,1))},hide:function(){this.isShow=!1,this.resetData()},resetData:function(){this.projectId=null,this.communityOrgId=null,this.unitIds=[],this.selectedType=1,this.selectList=(0,n.default)(r)},onSelect:function(t){this.selectedType=t.type},onJointUnitShow:function(){this.$refs.jointUnitPop.show(this.communityOrgId)},jointUnitConfirm:function(t){this.selectUnits=(0,n.default)(t)},onConfirm:function(){this.leadJourneyHelperProjectSchedule()},leadJourneyHelperProjectSchedule:function(){var t=this,e=this.selectedType;if(this.isHall&&1===e&&0===this.selectUnits.length)return this.$msg("请先选择联办单位");var o=this.memberPersonalInfo.unitOrgId,i=this.isHall?this.selectUnits:this.unitIds;i=i.filter((function(t){return t.id!==o}));var n={id:this.projectId};1===e&&(n.journeyCoConstructionUnitIds=i.map((function(t){return t.id}))),this.$api.leadJourneyHelperProjectSchedule(n).then((function(e){if(e.isError)return t.$msg(e.message);t.$msg("认领成功"),t.hide()}))}},data:function(){return{isShow:!1,projectId:null,communityOrgId:null,unitIds:[],selectUnits:[],selectedType:1,selectList:[{name:"联合领办",type:1,description:"视为共建单位联合领办，分数平分"},{name:"单独领办",type:2,description:"视为单独领办，享受分数加成"}]}},computed:{unitNameText:function(){var t=this.selectUnits;if(0===t.length)return"";var e=t.map((function(t){return t.name}));return"(已选：".concat(e.join("、"),")")},memberPersonalInfo:function(){return this.$store.state.user.memberPersonalInfo}},props:{isHall:Boolean,itemConfig:Object,showContact:{type:Boolean,default:function(){return!1}}},created:function(){r=(0,n.default)(this.selectList)}};e.default=c},1728:function(t,e,o){"use strict";o.r(e);var i=o("4c5b"),n=o("dca1");for(var a in n)["default"].indexOf(a)<0&&function(t){o.d(e,t,(function(){return n[t]}))}(a);o("1ab9");var r,c=o("f0c5"),s=Object(c["a"])(n["default"],i["b"],i["c"],!1,null,"cd391a62",null,!1,i["a"],r);e["default"]=s.exports},"1ab9":function(t,e,o){"use strict";var i=o("2abe"),n=o.n(i);n.a},2909:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=s;var i=c(o("6005")),n=c(o("db90")),a=c(o("06c5")),r=c(o("3427"));function c(t){return t&&t.__esModule?t:{default:t}}function s(t){return(0,i.default)(t)||(0,n.default)(t)||(0,a.default)(t)||(0,r.default)()}},"2abe":function(t,e,o){var i=o("b74e");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var n=o("4f06").default;n("4c6c8baa",i,!0,{sourceMap:!1,shadowMode:!1})},"2ed7":function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,o("a434"),o("4de4");var i={name:"JointUnitPop",methods:{show:function(t){this.isShow=!0,this.communityOrgId=t},hide:function(){this.isShow=!1},onSelect:function(t){var e=this.selectList,o=t.id,i=this.findTargetIndexOnObjectList(e,"id",o);if(null===i)return e.length>=2?this.$msg("最多选择2个"):void this.selectList.push(t);e.splice(i,1)},onConfirm:function(){this.$emit("onConfirm",this.selectList),this.hide()},findTargetIndexOnObjectList:function(t,e,o){for(var i=0;i<t.length;i++)if(t[i][e]===o)return i;return null},getUnitListByCommunity:function(){var t=this;this.$api.getUnitListByCommunity().then((function(e){if(e.isError)return t.$msg(e.message);var o=e.content||[],i=t.memberPersonalInfo.unitOrgId;t.unitList=o.filter((function(t){return t.id!==i}))}))}},data:function(){return{isShow:!1,communityOrgId:null,unitList:[],selectList:[]}},computed:{isSelected:function(){var t=this;return function(e){return null!==t.findTargetIndexOnObjectList(t.selectList,"id",e.id)}},memberPersonalInfo:function(){return this.$store.state.user.memberPersonalInfo}},watch:{communityOrgId:function(t){t&&this.getUnitListByCommunity()}}};e.default=i},3427:function(t,e,o){"use strict";function i(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}Object.defineProperty(e,"__esModule",{value:!0}),e.default=i},"343f":function(t,e,o){"use strict";o.r(e);var i=o("0892"),n=o.n(i);for(var a in i)["default"].indexOf(a)<0&&function(t){o.d(e,t,(function(){return i[t]}))}(a);e["default"]=n.a},"36ec":function(t,e,o){"use strict";var i=o("d301"),n=o.n(i);n.a},4125:function(t,e,o){var i=o("4bad");e=i(!1),e.push([t.i,'@charset "UTF-8";\n/* uni.scss */\n/* 页面左右间距 */\n/* 文字尺寸 */\n/*文字颜色*/\n/* 图片加载中颜色 */\n/* 行为相关颜色 */\n/* 边框颜色 */.color-primary[data-v-e47c6282]{color:#3049c0}.color-333[data-v-e47c6282]{color:#333}.color-666[data-v-e47c6282]{color:#666}.color-999[data-v-e47c6282]{color:#999}.bg-color[data-v-e47c6282]{background-color:#f7f7f7}.bg-white[data-v-e47c6282]{background-color:#fff}.white-color[data-v-e47c6282]{color:#fff}.primary-color[data-v-e47c6282]{color:#f54400}.success-color[data-v-e47c6282]{color:#0e130f}.warning-color[data-v-e47c6282]{color:#f0ad4e}.error-color[data-v-e47c6282]{color:#dd524d}.primary-text[data-v-e47c6282]{color:#333}.secondary-text[data-v-e47c6282]{color:#666}.tip-text[data-v-e47c6282]{color:#999}.color-e32417[data-v-e47c6282]{color:#e32417}.title[data-v-e47c6282]{height:%?74?%;line-height:%?74?%}.tip[data-v-e47c6282]{color:#ff9400}.list[data-v-e47c6282]{max-height:%?702?%;overflow:scroll}.list .item[data-v-e47c6282]{height:%?97?%;border-bottom:solid %?1?% #eaeaea}.list .selected[data-v-e47c6282]{color:#e32417}.close-btn[data-v-e47c6282]{position:absolute;right:%?24?%;top:%?12?%}.confirm-btn[data-v-e47c6282]{width:%?331?%;height:%?88?%;line-height:%?88?%;background:#e32417;border-radius:%?45?%}.other-btn[data-v-e47c6282]{width:%?331?%;height:%?88?%;line-height:%?88?%;border-radius:%?45?%;border:solid 1px #e32417;color:#e32417}',""]),t.exports=e},"446a":function(t,e,o){var i=o("eb84");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var n=o("4f06").default;n("0df7a47a",i,!0,{sourceMap:!1,shadowMode:!1})},"4c5b":function(t,e,o){"use strict";o.d(e,"b",(function(){return n})),o.d(e,"c",(function(){return a})),o.d(e,"a",(function(){return i}));var i={uPopup:o("df25").default},n=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("u-popup",{attrs:{mode:"bottom","border-radius":"30","mask-close-able":!1},model:{value:t.isShow,callback:function(e){t.isShow=e},expression:"isShow"}},[o("v-uni-view",{staticClass:"pl32 pr32 pb32"},[o("div",{staticClass:"title ft30 tc"},[t._v("认领")]),o("div",{staticClass:"close-btn",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.hide.apply(void 0,arguments)}}},[o("svg-icon",{staticClass:"ft24 color-999 bold mt8",attrs:{icon:"icon_cha"}})],1),t._l(t.selectList,(function(e,i){return o("div",{key:i,staticClass:"option mb24 pl24 pt32 pb32 center-justify column",class:e.type===t.selectedType?"option-selected":"",on:{click:function(o){arguments[0]=o=t.$handleEvent(o),t.onSelect(e)}}},[o("div",{staticClass:"center-align mb8"},[o("div",{staticClass:"mr16 radio center"},[e.type===t.selectedType?o("svg-icon",{staticClass:"ft20 white-color",attrs:{icon:"icon_duihao"}}):t._e()],1),o("span",{staticClass:"ft32 name"},[t._v(t._s(e.name))])]),o("span",{staticClass:"ft24 description"},[t._v(t._s(e.description))]),1===e.type&&t.isHall?o("div",{staticClass:"pt24"},[o("div",{staticClass:"select-btn ft24 tc",staticStyle:{color:"#E32417"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.onJointUnitShow.apply(void 0,arguments)}}},[t._v("选择联办单位")]),o("div",{staticClass:"ft24 color-999 pt16"},[t._v(t._s(t.unitNameText))])]):t._e()])})),o("div",{staticClass:"confirm-btn white-color ft30 tc mt32",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.onConfirm.apply(void 0,arguments)}}},[t._v("确定")])],2)],1),t.isHall?o("joint-unit-pop",{ref:"jointUnitPop",on:{onConfirm:function(e){arguments[0]=e=t.$handleEvent(e),t.jointUnitConfirm.apply(void 0,arguments)}}}):t._e()],1)},a=[]},"5be9":function(t,e,o){"use strict";o.r(e);var i=o("ff47"),n=o("8e95");for(var a in n)["default"].indexOf(a)<0&&function(t){o.d(e,t,(function(){return n[t]}))}(a);o("36ec"),o("e8f2");var r,c=o("f0c5"),s=Object(c["a"])(n["default"],i["b"],i["c"],!1,null,"eb89c220",null,!1,i["a"],r);e["default"]=s.exports},6005:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=a;var i=n(o("6b75"));function n(t){return t&&t.__esModule?t:{default:t}}function a(t){if(Array.isArray(t))return(0,i.default)(t)}},6076:function(t,e,o){"use strict";o.d(e,"b",(function(){return n})),o.d(e,"c",(function(){return a})),o.d(e,"a",(function(){return i}));var i={uPopup:o("df25").default},n=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("u-popup",{attrs:{mode:"bottom","border-radius":"30","mask-close-able":!1},model:{value:t.isShow,callback:function(e){t.isShow=e},expression:"isShow"}},[o("v-uni-view",{staticClass:"pl32 pr32 pb32"},[o("div",{staticClass:"title ft30 tc"},[t._v("选择联办单位")]),o("div",{staticClass:"tip ft24 tc pt8 pb8"},[t._v("*最多选择2个联办单位")]),o("div",{staticClass:"close-btn",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.hide.apply(void 0,arguments)}}},[o("svg-icon",{staticClass:"ft24 color-999 bold mt8",attrs:{icon:"icon_cha"}})],1),o("v-uni-scroll-view",{staticClass:"list pl30 pr30",attrs:{"scroll-y":!0}},t._l(t.unitList,(function(e,i){return o("v-uni-view",{key:i,staticClass:"item between-row center-align",class:t.isSelected(e)&&"selected",on:{click:function(o){arguments[0]=o=t.$handleEvent(o),t.onSelect(e)}}},[o("v-uni-text",{staticClass:"ft28"},[t._v(t._s(e.name))]),t.isSelected(e)?o("svg-icon",{staticClass:"ft28 mt4",attrs:{icon:"icon_duihao"}}):t._e()],1)})),1),o("div",{staticClass:"pt8 between-row"},[o("div",{staticClass:"other-btn white-color ft30 tc",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.hide.apply(void 0,arguments)}}},[t._v("取消")]),o("div",{staticClass:"confirm-btn white-color ft30 tc ml24",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.onConfirm.apply(void 0,arguments)}}},[t._v("确定")])])],1)],1)},a=[]},"737d":function(t,e,o){"use strict";o.r(e);var i=o("087c"),n=o("343f");for(var a in n)["default"].indexOf(a)<0&&function(t){o.d(e,t,(function(){return n[t]}))}(a);o("02a8");var r,c=o("f0c5"),s=Object(c["a"])(n["default"],i["b"],i["c"],!1,null,"71bd9794",null,!1,i["a"],r);e["default"]=s.exports},"746eb":function(t,e,o){var i=o("4bad");e=i(!1),e.push([t.i,"uni-page-body[data-v-eb89c220]{height:100%}",""]),t.exports=e},"87e7":function(t,e,o){"use strict";o.r(e);var i=o("6076"),n=o("e409");for(var a in n)["default"].indexOf(a)<0&&function(t){o.d(e,t,(function(){return n[t]}))}(a);o("fa56");var r,c=o("f0c5"),s=Object(c["a"])(n["default"],i["b"],i["c"],!1,null,"e47c6282",null,!1,i["a"],r);e["default"]=s.exports},"8e95":function(t,e,o){"use strict";o.r(e);var i=o("e018"),n=o.n(i);for(var a in i)["default"].indexOf(a)<0&&function(t){o.d(e,t,(function(){return i[t]}))}(a);e["default"]=n.a},"8f49":function(t,e,o){var i=o("4125");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var n=o("4f06").default;n("33f245ae",i,!0,{sourceMap:!1,shadowMode:!1})},b6dc:function(t,e,o){var i=o("ef2c");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var n=o("4f06").default;n("0be54aa0",i,!0,{sourceMap:!1,shadowMode:!1})},b74e:function(t,e,o){var i=o("4bad");e=i(!1),e.push([t.i,'@charset "UTF-8";\n/* uni.scss */\n/* 页面左右间距 */\n/* 文字尺寸 */\n/*文字颜色*/\n/* 图片加载中颜色 */\n/* 行为相关颜色 */\n/* 边框颜色 */.color-primary[data-v-cd391a62]{color:#3049c0}.color-333[data-v-cd391a62]{color:#333}.color-666[data-v-cd391a62]{color:#666}.color-999[data-v-cd391a62]{color:#999}.bg-color[data-v-cd391a62]{background-color:#f7f7f7}.bg-white[data-v-cd391a62]{background-color:#fff}.white-color[data-v-cd391a62]{color:#fff}.primary-color[data-v-cd391a62]{color:#f54400}.success-color[data-v-cd391a62]{color:#0e130f}.warning-color[data-v-cd391a62]{color:#f0ad4e}.error-color[data-v-cd391a62]{color:#dd524d}.primary-text[data-v-cd391a62]{color:#333}.secondary-text[data-v-cd391a62]{color:#666}.tip-text[data-v-cd391a62]{color:#999}.color-e32417[data-v-cd391a62]{color:#e32417}.title[data-v-cd391a62]{height:%?90?%;line-height:%?90?%}.close-btn[data-v-cd391a62]{position:absolute;right:%?24?%;top:%?12?%}.option[data-v-cd391a62]{width:100%;background:#f3f3f3;border-radius:%?8?%;box-sizing:border-box}.option .radio[data-v-cd391a62]{width:%?32?%;height:%?32?%;border-radius:50%;border:solid 1px #999;box-sizing:border-box}.option .description[data-v-cd391a62]{color:#999}.option-selected[data-v-cd391a62]{background:#fce9e7}.option-selected .radio[data-v-cd391a62]{border:none;background:#e32417}.option-selected .name[data-v-cd391a62]{color:#e32417}.option-selected .description[data-v-cd391a62]{color:#ef867f}.confirm-btn[data-v-cd391a62]{height:%?80?%;line-height:%?80?%;background:#e32417;border-radius:%?40?%}.select-btn[data-v-cd391a62]{width:%?186?%;height:%?56?%;line-height:%?56?%;border:solid 1px #e32417;border-radius:%?30?%}',""]),t.exports=e},d301:function(t,e,o){var i=o("746eb");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var n=o("4f06").default;n("8bcfb49c",i,!0,{sourceMap:!1,shadowMode:!1})},db90:function(t,e,o){"use strict";function i(t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}Object.defineProperty(e,"__esModule",{value:!0}),e.default=i,o("a4d3"),o("e01a"),o("d3b7"),o("d28b"),o("3ca3"),o("ddb0"),o("a630")},dca1:function(t,e,o){"use strict";o.r(e);var i=o("08f2"),n=o.n(i);for(var a in i)["default"].indexOf(a)<0&&function(t){o.d(e,t,(function(){return i[t]}))}(a);e["default"]=n.a},e018:function(t,e,o){"use strict";var i=o("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,o("99af");var n=i(o("737d")),a=i(o("1728")),r=null,c={methods:{onReceive:function(){if(this.$notMember())return this.$goLogin();var t=this.entrance;this.$refs.receivePop.show({projectId:this.baseInfo.id,communityOrgId:"helper"===t&&this.baseInfo.communityOrgId,unitIds:"hall"===t&&this.unitIds})},onPublish:function(){uni.navigateTo({url:"/pages/steward/good-helper/add-record/index?projectId=".concat(this.id)})},onEdit:function(t){uni.setStorageSync("journeyHelperProjectSchedule",JSON.stringify(t)),uni.navigateTo({url:"/pages/steward/good-helper/add-record/index?projectId=".concat(this.id,"&scheduleId=").concat(t.id)})},getJourneyHelperProjectDetail:function(){var t=this,e={id:this.id};this.$api.getJourneyHelperProjectDetail(e).then((function(e){if(e.isError)return t.$msg(e.message);t.baseInfo=e.content,t.recordList=t.baseInfo.journeyHelperProjectScheduleList||[],"helper"===t.entrance&&t.getUnitListByCommunity()}))},getUnitListByCommunity:function(){var t=this,e={communityOrgId:this.baseInfo.communityOrgId};this.$api.getUnitListByCommunity(e).then((function(e){if(e.isError)return t.$msg(e.message);t.unitIds=e.content||[]}))},setEvent:function(){var t=this;uni.$on("helperProjectOver",(function(){t.getJourneyHelperProjectDetail()}))},clearEvent:function(){uni.$off("helperProjectOver")},scroll:function(){var t=this;this.isScroll=!0,r&&(clearTimeout(r),r=null),r=setTimeout((function(){t.isScroll=!1}),800)}},data:function(){return{id:null,isScroll:!1,entrance:null,baseInfo:{},recordList:[]}},computed:{memberPersonalInfo:function(){return this.$store.state.user.memberPersonalInfo},isUnitUser:function(){return this.memberPersonalInfo.isUnitUser},startTime:function(){var t=this.baseInfo,e=t.status,o=t.createTime,i=t.leadTime,n=1===e?o:i,a=1===e?"发布":"领办";return this.$moment(n).format("YYYY年MM月DD日")+a},projectLeadName:function(){var t=this.baseInfo.journeyHelperProjectLeadRecordList;return t?t.length>1?"由共建单位联合领办":"由".concat(t[0].journeyCoConstructionUnitName,"领办"):""},isCanEdit:function(){return this.isUnitUser&&2===this.baseInfo.status}},destroyed:function(){this.clearEvent(),window.removeEventListener("scroll",this.scroll)},onLoad:function(t){var e=t.id,o=t.entrance;this.id=e,this.entrance=o,this.getJourneyHelperProjectDetail(),this.setEvent(),window.addEventListener("scroll",this.scroll)},components:{ReceivePop:a.default,PublishBtn:n.default}};e.default=c},e409:function(t,e,o){"use strict";o.r(e);var i=o("2ed7"),n=o.n(i);for(var a in i)["default"].indexOf(a)<0&&function(t){o.d(e,t,(function(){return i[t]}))}(a);e["default"]=n.a},e8f2:function(t,e,o){"use strict";var i=o("446a"),n=o.n(i);n.a},eb84:function(t,e,o){var i=o("4bad");e=i(!1),e.push([t.i,'@charset "UTF-8";\n/* uni.scss */\n/* 页面左右间距 */\n/* 文字尺寸 */\n/*文字颜色*/\n/* 图片加载中颜色 */\n/* 行为相关颜色 */\n/* 边框颜色 */.color-primary[data-v-eb89c220]{color:#3049c0}.color-333[data-v-eb89c220]{color:#333}.color-666[data-v-eb89c220]{color:#666}.color-999[data-v-eb89c220]{color:#999}.bg-color[data-v-eb89c220]{background-color:#f7f7f7}.bg-white[data-v-eb89c220]{background-color:#fff}.white-color[data-v-eb89c220]{color:#fff}.primary-color[data-v-eb89c220]{color:#f54400}.success-color[data-v-eb89c220]{color:#0e130f}.warning-color[data-v-eb89c220]{color:#f0ad4e}.error-color[data-v-eb89c220]{color:#dd524d}.primary-text[data-v-eb89c220]{color:#333}.secondary-text[data-v-eb89c220]{color:#666}.tip-text[data-v-eb89c220]{color:#999}.color-e32417[data-v-eb89c220]{color:#e32417}.project-detail-wrap[data-v-eb89c220]{padding-bottom:%?150?%}.project-detail-wrap .content[data-v-eb89c220]{text-align:justify}.project-detail-wrap .line-block[data-v-eb89c220]{width:100%;height:%?24?%;background:#f7f7f7}.project-detail-wrap .record .record-item .step[data-v-eb89c220]{width:%?40?%}.project-detail-wrap .record .record-item .step .step-first[data-v-eb89c220]{position:relative;z-index:1;width:%?40?%;height:%?40?%;background:#fff}.project-detail-wrap .record .record-item .step .step-point[data-v-eb89c220]{position:relative;z-index:1;width:%?14?%;height:%?14?%;border-radius:50%;background:#eaeaea;margin-top:%?15?%;box-shadow:0 0 0 %?15?% #fff}.project-detail-wrap .record .record-item .step .step-line[data-v-eb89c220]{position:absolute;top:0;left:0;right:0;bottom:0;margin:auto;width:1px;background:#eaeaea}.project-detail-wrap .record .record-item .img-list[data-v-eb89c220]{-webkit-flex-wrap:nowrap;flex-wrap:nowrap}.project-detail-wrap .record .record-item .img-list .img-item[data-v-eb89c220]{width:%?185?%;height:%?185?%;border-radius:%?8?%}.project-detail-wrap .footer-btn[data-v-eb89c220]{position:fixed;left:0;right:0;bottom:0;height:%?128?%;background:#fff}.project-detail-wrap .footer-btn .receive-btn[data-v-eb89c220]{height:%?98?%;line-height:%?98?%;background:#e32417;border-radius:%?50?%;color:#fff;width:100%}.project-detail-wrap .color-F58200[data-v-eb89c220]{color:#f58200}',""]),t.exports=e},ef2c:function(t,e,o){var i=o("4bad");e=i(!1),e.push([t.i,'@charset "UTF-8";\n/* uni.scss */\n/* 页面左右间距 */\n/* 文字尺寸 */\n/*文字颜色*/\n/* 图片加载中颜色 */\n/* 行为相关颜色 */\n/* 边框颜色 */.color-primary[data-v-71bd9794]{color:#3049c0}.color-333[data-v-71bd9794]{color:#333}.color-666[data-v-71bd9794]{color:#666}.color-999[data-v-71bd9794]{color:#999}.bg-color[data-v-71bd9794]{background-color:#f7f7f7}.bg-white[data-v-71bd9794]{background-color:#fff}.white-color[data-v-71bd9794]{color:#fff}.primary-color[data-v-71bd9794]{color:#f54400}.success-color[data-v-71bd9794]{color:#0e130f}.warning-color[data-v-71bd9794]{color:#f0ad4e}.error-color[data-v-71bd9794]{color:#dd524d}.primary-text[data-v-71bd9794]{color:#333}.secondary-text[data-v-71bd9794]{color:#666}.tip-text[data-v-71bd9794]{color:#999}.color-e32417[data-v-71bd9794]{color:#e32417}.publish-btn-wrap[data-v-71bd9794]{position:fixed;right:%?32?%;bottom:%?90?%;width:%?98?%;height:%?98?%;border-radius:50%;box-shadow:%?4?% %?6?% %?8?% 0 rgba(14,2,2,.25);z-index:100;background:#e32417;font-size:%?56?%;-webkit-transition:all .5s ease-in-out;transition:all .5s ease-in-out;opacity:1}.is-scroll[data-v-71bd9794]{-webkit-transition:all .5s ease-in-out;transition:all .5s ease-in-out;right:%?-80?%!important;opacity:.4!important}',""]),t.exports=e},fa56:function(t,e,o){"use strict";var i=o("8f49"),n=o.n(i);n.a},ff47:function(t,e,o){"use strict";var i;o.d(e,"b",(function(){return n})),o.d(e,"c",(function(){return a})),o.d(e,"a",(function(){return i}));var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"project-detail-wrap",on:{scroll:function(e){arguments[0]=e=t.$handleEvent(e),t.scroll.apply(void 0,arguments)}}},[i("div",{staticClass:"pt28 pb28 pl32 pr32 bg-white"},[i("div",[1!==t.baseInfo.status&&t.baseInfo.isGrab&&"helper"===t.entrance?i("svg-icon",{staticClass:"ft48 mr8",staticStyle:{color:"#FA5A12"},attrs:{icon:"icon_qiangdan"}}):t._e(),i("span",{staticClass:"flex1 ft40 bold"},[t._v(t._s(t.baseInfo.name))])],1),i("div",{staticClass:"ft26 color-666 pt24 pb24"},[i("div",{staticClass:"pb8"},[i("span",[t._v(t._s(t.baseInfo.createTime&&t.$moment(t.baseInfo.createTime).format("YYYY年MM月DD日"))+"发布")]),1!==t.baseInfo.status?i("span",{staticClass:"ml48"},[t._v(t._s(t.baseInfo.communityParentOrgName)+t._s(t.baseInfo.communityOrgName)+"发布")]):t._e()]),1!==t.baseInfo.status?i("div",[i("span",[t._v(t._s(t.baseInfo.leadTime&&t.$moment(t.baseInfo.leadTime).format("YYYY年MM月DD日"))+"领办")]),i("span",{staticClass:"ml48"},[t._v(t._s(t.projectLeadName))])]):t._e()]),i("div",{staticClass:"ft30 content"},[t._v(t._s(t.baseInfo.description))])]),1!==t.baseInfo.status?i("div",{staticClass:"line-block"}):t._e(),1!==t.baseInfo.status?i("div",{staticClass:"bg-white pt28"},[i("div",{staticClass:"ft32 medium pl32 pr32"},[t._v("跟进记录")]),t.recordList.length>0?i("div",{staticClass:"record pt32 pl40 pr48"},t._l(t.recordList,(function(e,o){return i("div",{key:o,staticClass:"record-item flex"},[i("div",{staticClass:"step relative center-justify mr16"},[0===o?i("div",{staticClass:"step-first"},[i("svg-icon",{staticClass:"ft40",class:3===e.status?"color-F58200":"color-999",attrs:{icon:3===e.status?"icon_yiwancheng":"icon_shijian"}})],1):i("div",{staticClass:"step-point"}),o<t.recordList.length-1?i("div",{staticClass:"step-line"}):t._e()]),i("div",{staticClass:"flex1"},[i("div",{staticClass:"between-row"},[i("div",{staticClass:"ft30 medium",class:3===e.status&&"color-F58200"},[t._v(t._s(3===e.status?"已办结":"跟进中"))]),t.isCanEdit?i("div",{staticClass:"edit-btn",on:{click:function(o){arguments[0]=o=t.$handleEvent(o),t.onEdit(e)}}},[i("svg-icon",{staticClass:"ft28 color-666",attrs:{icon:"icon_bianji"}})],1):t._e()]),i("div",{staticClass:"ft26 pt16 pb16"},[t._v(t._s(e.description))]),i("div",{staticClass:"ft24 color-999 pb24"},[t._v(t._s(t.$moment(e.recordTime).format("YYYY-MM-DD hh:mm:ss")))]),e.attachmentDTOList&&e.attachmentDTOList.length>0?i("div",{staticClass:"img-list flex pb28"},t._l(e.attachmentDTOList,(function(e,o){return i("v-uni-image",{key:o,staticClass:"img-item mr20",attrs:{mode:"aspectFill",src:t.$fileHost+e.url}})})),1):t._e()])])})),0):i("div",{staticClass:"center column",staticStyle:{"padding-top":"100rpx"}},[i("img",{staticStyle:{width:"332rpx",height:"256rpx"},attrs:{src:o("27de")}}),i("div",{staticClass:"color-999 ft28 mt16"},[t._v("暂无跟进记录")])])]):t._e(),t.isCanEdit?i("publish-btn",{attrs:{text:"添加记录",isScroll:t.isScroll,right:"14rpx",bottom:"134rpx"},on:{onPublish:function(e){arguments[0]=e=t.$handleEvent(e),t.onPublish.apply(void 0,arguments)}}}):t._e(),t.isUnitUser&&1===t.baseInfo.status?i("div",{staticClass:"footer-btn pl32 pr32 center"},[i("div",{staticClass:"receive-btn tc ft32",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.onReceive.apply(void 0,arguments)}}},[t._v("认领")])]):t._e(),t.isUnitUser&&1===t.baseInfo.status?i("receive-pop",{ref:"receivePop",attrs:{isHall:"hall"===t.entrance}}):t._e()],1)},a=[]}}]);