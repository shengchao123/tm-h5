(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-steward-good-helper-index"],{"095c":function(t,e,n){"use strict";var o=n("1952"),a=n.n(o);a.a},"0e4e":function(t,e,n){"use strict";var o;n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return i})),n.d(e,"a",(function(){return o}));var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"tabs-wrap relative row bb"},[t._l(t.tabs,(function(e,o){return n("div",{key:o,staticClass:"tab-item secondary-text",on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.tabClick(e.id,o)}}},[n("span",{staticClass:"ft28 color-666",class:t.current===o&&"color-e32417 medium"},[t._v(t._s(e.name)+t._s(e.count?"("+e.count+")":""))])])})),n("div",{staticClass:"line",style:t.lineStyle})],2)},i=[]},"12d9":function(t,e,n){"use strict";n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return i})),n.d(e,"a",(function(){return o}));var o={mescrollUni:n("f05e").default,empty:n("b800").default},a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"good-helper-wrap"},[n("mescroll-uni",{ref:"mescrollRef",staticClass:"mescroll-wrap",attrs:{up:t.upOption},on:{init:function(e){arguments[0]=e=t.$handleEvent(e),t.mescrollInit.apply(void 0,arguments)},down:function(e){arguments[0]=e=t.$handleEvent(e),t.downCallback.apply(void 0,arguments)},up:function(e){arguments[0]=e=t.$handleEvent(e),t.upCallback.apply(void 0,arguments)}}},[[n("div",{staticClass:"between-row bg-white header pl16 pr16 pb16 pt28"},[n("div",{staticClass:"link center-justify link-jointly column",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.onContactList.apply(void 0,arguments)}}},[n("span",{staticClass:"ft30 white-color pl16"},[t._v("共建单位联系表")]),n("span",{staticClass:"ft26 pt16 pl16 pb8",staticStyle:{color:"#C8E5FF"}},[t._v("临安区社区")])]),n("div",{staticClass:"link center-justify link-hall column",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.onReceptionHall.apply(void 0,arguments)}}},[n("span",{staticClass:"ft30 white-color pl16"},[t._v("领办大厅")]),n("span",{staticClass:"ft26 pt16 pl16 pb8",staticStyle:{color:"#FDD3C5"}},[t._v(t._s(t.isUnitUser?"领办项目享积分加成":"项目供更多单位认领"))])])]),n("div",{staticClass:"bg-white pl32 pr32 pb16"},[t.isShowSelectionCommunit?[n("div",{staticClass:"address pl24 pr24 center-align",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.onSelectCommunit.apply(void 0,arguments)}}},[n("span",{staticClass:"ft28 color-666"},[t._v(t._s(t.communityText))]),n("svg-icon",{staticClass:"ft16 ml8",attrs:{icon:"icon_xiangxia"}})],1),n("div",{staticClass:"tr pt16"},[n("span",{staticClass:"ft22 color-999"},[t._v("共建单位："+t._s(t.unitNameText))])])]:[n("div",{staticClass:"pl24 pr24 pt24 pb24",staticStyle:{"border-radius":"16rpx",background:"#f7f7f7"}},[n("div",[n("span",{staticClass:"ft28 color-666 mr16"},[t._v("当前单位:")]),n("span",{staticClass:"ft28"},[t._v(t._s(t.currentUnitName))])]),n("div",{staticClass:"pt16 pb16"},[n("span",{staticClass:"ft28 color-666 mr16"},[t._v("对口社区:")]),n("span",{staticClass:"ft28"},[t._v(t._s(t.communityText))])]),n("div",[n("span",{staticClass:"ft28 color-666 mr16"},[t._v("共建单位:")]),n("span",{staticClass:"ft28"},[t._v(t._s(t.unitNameText))])])])]],2),n("div",{staticClass:"mt24"},[n("status-tabs",{ref:"statusTabs",attrs:{communityOrgId:t.communityOrgId},on:{changeCurrent:function(e){arguments[0]=e=t.$handleEvent(e),t.changeCurrent.apply(void 0,arguments)}}}),n("div",{directives:[{name:"show",rawName:"v-show",value:t.listData.length>0,expression:"listData.length > 0"}],staticClass:"list"},t._l(t.listData,(function(e,o){return n("project-item",{key:o,attrs:{"project-item":e,"show-border":o<t.listData.length-1,isHome:!0,isUnitUser:t.isUnitUser},on:{onReceive:function(e){arguments[0]=e=t.$handleEvent(e),t.onReceive.apply(void 0,arguments)}}})})),1),n("empty",{directives:[{name:"show",rawName:"v-show",value:0===t.listData.length,expression:"listData.length === 0"}]})],1)]],2),t.isShowSelectionCommunit?n("selection-communit",{ref:"selectionCommunit",on:{onConfirm:function(e){arguments[0]=e=t.$handleEvent(e),t.onConfirmCommunit.apply(void 0,arguments)}}}):t._e(),n("receive-pop",{ref:"receivePop"})],1)},i=[]},1587:function(t,e,n){"use strict";var o=n("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,n("99af"),n("d81d"),n("a15b");var a=o(n("7ea6")),i=o(n("f05e")),r=o(n("e592")),c=o(n("131e")),s=o(n("3244")),l=o(n("1728")),u={mixins:[a.default],components:{StatusTabs:r.default,ProjectItem:c.default,SelectionCommunit:s.default,ReceivePop:l.default,MescrollUni:i.default},methods:{onConfirmCommunit:function(t){this.communityInfo=t.communityInfo,this.streetInfo=t.streetInfo,this.communityOrgId=t.communityInfo.id},onReceive:function(t){if(this.$notMember())return this.$goLogin();this.$refs.receivePop.show({projectId:t,unitIds:this.unitIds})},changeCurrent:function(t,e){this.projectType=e,this.downCallback()},onSelectCommunit:function(){this.isUnitUser||this.$refs.selectionCommunit.show()},onContactList:function(){uni.navigateTo({url:"/pages/steward/good-helper/contact-list/index"})},onReceptionHall:function(){uni.navigateTo({url:"/pages/steward/good-helper/reception-hall/index"})},updateTabsCount:function(){var t=this.$refs.statusTabs;this.$nextTick((function(){t&&t.getJourneyHelperProjectCount()}))},upCallback:function(t){this.getJourneyHelperProjectShowPage(t),this.mescroll.endErr()},downCallback:function(){this.mescroll.resetUpScroll(),this.updateTabsCount()},getJourneyHelperProjectShowPage:function(t){var e=this;if(this.communityOrgId){var n={pageNumber:t&&t.num||1,pageSize:t&&t.size||10,type:this.projectType};this.isUnitUser||(n.communityOrgId=this.communityOrgId),this.$api.getJourneyHelperProjectShowPage(n).then((function(t){if(t.isError)return e.mescroll.endErr();var o=t.content,a=o.items,i=o.count;e.mescroll.endBySize(a.length,i),e.listData=1===n.pageNumber?a:e.listData.concat(a)}))}},getUnitListByCommunity:function(){var t=this,e={communityOrgId:this.communityOrgId};this.$api.getUnitListByCommunity(e).then((function(e){if(e.isError)return t.$msg(e.message);t.unitIds=e.content||[]}))}},data:function(){return{communityInfo:{},streetInfo:{},upOption:{empty:{use:!1}},communityOrgId:null,projectType:2,unitIds:[],listData:[]}},watch:{communityOrgId:{handler:function(t){t&&"0"!==t&&this.getUnitListByCommunity(),this.isShowSelectionCommunit&&(this.updateTabsCount(),this.getJourneyHelperProjectShowPage())},immediate:!0},memberPersonalInfo:{handler:function(t){t.communityOrgId&&"0"!==t.communityOrgId&&(this.communityOrgId=this.memberPersonalInfo.communityOrgId)},immediate:!0}},computed:{memberPersonalInfo:function(){return this.$store.state.user.memberPersonalInfo},isUnitUser:function(){return this.memberPersonalInfo.isUnitUser},communityText:function(){if(this.isUnitUser){var t=this.memberPersonalInfo,e=t.parentCommunityOrgName,n=t.communityOrgName;return e+" "+n}var o=this.streetInfo,a=this.communityInfo;return a?o.name+" "+a.name:""},unitNameText:function(){var t=this.unitIds.map((function(t){return t.name}));return t.join(" ")},isShowSelectionCommunit:function(){var t=this.isUnitUser;return!t&&"undefined"!==typeof t},currentUnitName:function(){var t=this.unitIds;if(t.length<=0)return"";for(var e=0;e<t.length;e++)if(t[e].unitOrgId===this.memberPersonalInfo.unitOrgId)return t[e].name;return"--"}}};e.default=u},1952:function(t,e,n){var o=n("2b13");"string"===typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);var a=n("4f06").default;a("05988a6a",o,!0,{sourceMap:!1,shadowMode:!1})},"2b13":function(t,e,n){var o=n("4bad");e=o(!1),e.push([t.i,"uni-page-body[data-v-c71b5af0]{height:100%;background:#f7f7f7}body.?%PAGE?%[data-v-c71b5af0]{background:#f7f7f7}",""]),t.exports=e},4798:function(t,e,n){var o=n("4bad"),a=n("ffbf"),i=n("cc03"),r=n("a46a");e=o(!1);var c=a(i),s=a(r);e.push([t.i,'@charset "UTF-8";\n/* uni.scss */\n/* 页面左右间距 */\n/* 文字尺寸 */\n/*文字颜色*/\n/* 图片加载中颜色 */\n/* 行为相关颜色 */\n/* 边框颜色 */.color-primary[data-v-c71b5af0]{color:#3049c0}.color-333[data-v-c71b5af0]{color:#333}.color-666[data-v-c71b5af0]{color:#666}.color-999[data-v-c71b5af0]{color:#999}.bg-color[data-v-c71b5af0]{background-color:#f7f7f7}.bg-white[data-v-c71b5af0]{background-color:#fff}.white-color[data-v-c71b5af0]{color:#fff}.primary-color[data-v-c71b5af0]{color:#f54400}.success-color[data-v-c71b5af0]{color:#0e130f}.warning-color[data-v-c71b5af0]{color:#f0ad4e}.error-color[data-v-c71b5af0]{color:#dd524d}.primary-text[data-v-c71b5af0]{color:#333}.secondary-text[data-v-c71b5af0]{color:#666}.tip-text[data-v-c71b5af0]{color:#999}.color-e32417[data-v-c71b5af0]{color:#e32417}.good-helper-wrap .header .link[data-v-c71b5af0]{width:%?331?%;height:%?180?%;border-radius:%?16?%;box-sizing:border-box;padding:%?26?%}.good-helper-wrap .header .link-jointly[data-v-c71b5af0]{background:url('+c+") no-repeat 0 0;background-size:100% 100%}.good-helper-wrap .header .link-hall[data-v-c71b5af0]{background:url("+s+") no-repeat 0 0;background-size:100% 100%}.good-helper-wrap .address[data-v-c71b5af0]{height:%?79?%;border-radius:%?16?%;background:#e8f0ff}",""]),t.exports=e},"5e63":function(t,e,n){var o=n("4bad");e=o(!1),e.push([t.i,'@charset "UTF-8";\n/* uni.scss */\n/* 页面左右间距 */\n/* 文字尺寸 */\n/*文字颜色*/\n/* 图片加载中颜色 */\n/* 行为相关颜色 */\n/* 边框颜色 */.color-primary[data-v-22c6b3e5]{color:#3049c0}.color-333[data-v-22c6b3e5]{color:#333}.color-666[data-v-22c6b3e5]{color:#666}.color-999[data-v-22c6b3e5]{color:#999}.bg-color[data-v-22c6b3e5]{background-color:#f7f7f7}.bg-white[data-v-22c6b3e5]{background-color:#fff}.white-color[data-v-22c6b3e5]{color:#fff}.primary-color[data-v-22c6b3e5]{color:#f54400}.success-color[data-v-22c6b3e5]{color:#0e130f}.warning-color[data-v-22c6b3e5]{color:#f0ad4e}.error-color[data-v-22c6b3e5]{color:#dd524d}.primary-text[data-v-22c6b3e5]{color:#333}.secondary-text[data-v-22c6b3e5]{color:#666}.tip-text[data-v-22c6b3e5]{color:#999}.color-e32417[data-v-22c6b3e5]{color:#e32417}.tabs-wrap[data-v-22c6b3e5]{-webkit-justify-content:space-around;justify-content:space-around;background:#fff;height:%?88?%;line-height:%?88?%}.tabs-wrap .tab-item[data-v-22c6b3e5]{width:%?250?%;text-align:center}.tabs-wrap .line[data-v-22c6b3e5]{position:absolute;z-index:1;-webkit-transition:left .3s;transition:left .3s;bottom:%?12?%;left:%?60?%;width:%?32?%;height:%?4?%;border-radius:%?4?%;background:#f54400}',""]),t.exports=e},"65c1":function(t,e,n){"use strict";n.r(e);var o=n("7bfb"),a=n.n(o);for(var i in o)["default"].indexOf(i)<0&&function(t){n.d(e,t,(function(){return o[t]}))}(i);e["default"]=a.a},7526:function(t,e,n){"use strict";n.r(e);var o=n("1587"),a=n.n(o);for(var i in o)["default"].indexOf(i)<0&&function(t){n.d(e,t,(function(){return o[t]}))}(i);e["default"]=a.a},"7bfb":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,n("4160"),n("159b"),n("a9e3");var o={methods:{tabClick:function(t,e){this.current=e,this.$emit("changeCurrent",e,t)},getJourneyHelperProjectCount:function(){var t=this;if(this.communityOrgId){var e={communityOrgId:this.communityOrgId};this.$api.getJourneyHelperProjectCount(e).then((function(e){if(e.isError)return t.$msg(e.message);var n=t.tabs;e.content.forEach((function(t){var e=t.status,o=t.count;n[e-1].count=o})),t.tabs=n}))}}},props:{communityOrgId:[String,Number]},data:function(){return{current:0,tabs:[{id:2,name:"待认领",count:0},{id:3,name:"领办中",count:0},{id:4,name:"已办结",count:0}]}},computed:{lineStyle:function(){var t=32,e=250,n=(e-t)/2,o=this.current*e+n;return"left: ".concat(o,"rpx")}},created:function(){}};e.default=o},a46a:function(t,e,n){t.exports=n.p+"static/img/bg-hall.8f4e7924.png"},cc03:function(t,e,n){t.exports=n.p+"static/img/bg-jointly.97884a7d.png"},d435:function(t,e,n){"use strict";var o=n("deba"),a=n.n(o);a.a},deba:function(t,e,n){var o=n("5e63");"string"===typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);var a=n("4f06").default;a("0f1e5868",o,!0,{sourceMap:!1,shadowMode:!1})},e44d:function(t,e,n){"use strict";n.r(e);var o=n("12d9"),a=n("7526");for(var i in a)["default"].indexOf(i)<0&&function(t){n.d(e,t,(function(){return a[t]}))}(i);n("095c"),n("ef4d");var r,c=n("f0c5"),s=Object(c["a"])(a["default"],o["b"],o["c"],!1,null,"c71b5af0",null,!1,o["a"],r);e["default"]=s.exports},e518:function(t,e,n){var o=n("4798");"string"===typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);var a=n("4f06").default;a("799bdbf4",o,!0,{sourceMap:!1,shadowMode:!1})},e592:function(t,e,n){"use strict";n.r(e);var o=n("0e4e"),a=n("65c1");for(var i in a)["default"].indexOf(i)<0&&function(t){n.d(e,t,(function(){return a[t]}))}(i);n("d435");var r,c=n("f0c5"),s=Object(c["a"])(a["default"],o["b"],o["c"],!1,null,"22c6b3e5",null,!1,o["a"],r);e["default"]=s.exports},ef4d:function(t,e,n){"use strict";var o=n("e518"),a=n.n(o);a.a}}]);