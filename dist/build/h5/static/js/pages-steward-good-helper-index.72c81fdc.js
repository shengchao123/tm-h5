(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-steward-good-helper-index"],{"094d":function(t,n,e){var a=e("4bad");n=a(!1),n.push([t.i,'@charset "UTF-8";\n/* uni.scss */\n/* 页面左右间距 */\n/* 文字尺寸 */\n/*文字颜色*/\n/* 图片加载中颜色 */\n/* 行为相关颜色 */\n/* 边框颜色 */.color-primary[data-v-3ad14693]{color:#3049c0}.color-333[data-v-3ad14693]{color:#333}.color-666[data-v-3ad14693]{color:#666}.color-999[data-v-3ad14693]{color:#999}.bg-color[data-v-3ad14693]{background-color:#f7f7f7}.bg-white[data-v-3ad14693]{background-color:#fff}.white-color[data-v-3ad14693]{color:#fff}.primary-color[data-v-3ad14693]{color:#f54400}.success-color[data-v-3ad14693]{color:#0e130f}.warning-color[data-v-3ad14693]{color:#f0ad4e}.error-color[data-v-3ad14693]{color:#dd524d}.primary-text[data-v-3ad14693]{color:#333}.secondary-text[data-v-3ad14693]{color:#666}.tip-text[data-v-3ad14693]{color:#999}.color-e32417[data-v-3ad14693]{color:#e32417}.tabs-wrap[data-v-3ad14693]{-webkit-justify-content:space-around;justify-content:space-around;background:#fff;height:%?88?%;line-height:%?88?%}.tabs-wrap .tab-item[data-v-3ad14693]{width:%?250?%;text-align:center}.tabs-wrap .line[data-v-3ad14693]{position:absolute;z-index:1;-webkit-transition:left .3s;transition:left .3s;bottom:%?12?%;left:%?60?%;width:%?32?%;height:%?4?%;border-radius:%?4?%;background:#f54400}',""]),t.exports=n},1587:function(t,n,e){"use strict";var a=e("4ea4");Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0,e("99af"),e("d81d"),e("a15b");var o=a(e("7ea6")),i=a(e("f05e")),r=a(e("e592")),s=a(e("131e")),c=a(e("3244")),l=a(e("1728")),u={mixins:[o.default],components:{StatusTabs:r.default,ProjectItem:s.default,SelectionCommunit:c.default,ReceivePop:l.default,MescrollUni:i.default},methods:{onConfirmCommunit:function(t){this.communityInfo=t.communityInfo,this.streetInfo=t.streetInfo,this.communityOrgId=t.communityInfo.id},onReceive:function(t){if(this.$notMember())return this.$goLogin();this.$refs.receivePop.show({projectId:t,unitIds:this.unitIds})},changeCurrent:function(t,n){this.projectType=n,this.downCallback()},onSelectCommunit:function(){this.isUnitUser||this.$refs.selectionCommunit.show()},onContactList:function(){uni.navigateTo({url:"/pages/steward/good-helper/contact-list/index"})},onReceptionHall:function(){uni.navigateTo({url:"/pages/steward/good-helper/reception-hall/index"})},updateTabsCount:function(){var t=this.$refs.statusTabs;this.$nextTick((function(){t&&t.getJourneyHelperProjectCount()}))},upCallback:function(t){this.getJourneyHelperProjectShowPage(t),this.mescroll.endErr()},downCallback:function(){this.mescroll.resetUpScroll(),this.updateTabsCount()},getJourneyHelperProjectShowPage:function(t){var n=this;if(this.communityOrgId){var e={pageNumber:t&&t.num||1,pageSize:t&&t.size||10,communityOrgId:this.communityOrgId,type:this.projectType};this.$api.getJourneyHelperProjectShowPage(e).then((function(t){if(t.isError)return n.mescroll.endErr();var a=t.content,o=a.items,i=a.count;n.mescroll.endBySize(o.length,i),n.listData=1===e.pageNumber?o:n.listData.concat(o)}))}},getUnitListByCommunity:function(){var t=this,n={communityOrgId:this.communityOrgId};this.$api.getUnitListByCommunity(n).then((function(n){if(n.isError)return t.$msg(n.message);t.unitIds=n.content||[]}))}},data:function(){return{communityInfo:{},streetInfo:{},upOption:{empty:{use:!1}},communityOrgId:null,projectType:2,unitIds:[],listData:[]}},watch:{communityOrgId:{handler:function(t){t&&"0"!==t&&this.getUnitListByCommunity(),this.isShowSelectionCommunit&&(this.updateTabsCount(),this.getJourneyHelperProjectShowPage())},immediate:!0},memberPersonalInfo:{handler:function(t){t.communityOrgId&&"0"!==t.communityOrgId&&(this.communityOrgId=this.memberPersonalInfo.communityOrgId)},immediate:!0}},computed:{memberPersonalInfo:function(){return this.$store.state.user.memberPersonalInfo},isUnitUser:function(){return this.memberPersonalInfo.isUnitUser},communityText:function(){if(this.isUnitUser){var t=this.memberPersonalInfo,n=t.parentCommunityOrgName,e=t.communityOrgName;return n+" "+e}var a=this.streetInfo,o=this.communityInfo;return o?a.name+" "+o.name:""},unitNameText:function(){var t=this.unitIds.map((function(t){return t.name}));return t.join(" ")},isShowSelectionCommunit:function(){var t=this.isUnitUser;return!t&&"undefined"!==typeof t},currentUnitName:function(){var t=this.unitIds;if(t.length<=0)return"";for(var n=0;n<t.length;n++)if(t[n].unitOrgId===this.memberPersonalInfo.unitOrgId)return t[n].name;return"--"}}};n.default=u},"2c12":function(t,n,e){var a=e("fa75");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var o=e("4f06").default;o("18dd8602",a,!0,{sourceMap:!1,shadowMode:!1})},"3b91":function(t,n,e){"use strict";var a=e("6d86"),o=e.n(a);o.a},"42f3":function(t,n,e){"use strict";var a;e.d(n,"b",(function(){return o})),e.d(n,"c",(function(){return i})),e.d(n,"a",(function(){return a}));var o=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"tabs-wrap relative row bb"},[t._l(t.tabs,(function(n,a){return e("div",{key:a,staticClass:"tab-item secondary-text",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.tabClick(n.id,a)}}},[e("span",{staticClass:"ft28 color-666",class:t.current===a&&"color-e32417 medium"},[t._v(t._s(n.name)+t._s(n.count?"("+n.count+")":""))])])})),e("div",{staticClass:"line",style:t.lineStyle})],2)},i=[]},"593e":function(t,n,e){var a=e("4bad"),o=e("ffbf"),i=e("cc03"),r=e("a46a");n=a(!1);var s=o(i),c=o(r);n.push([t.i,'@charset "UTF-8";\n/* uni.scss */\n/* 页面左右间距 */\n/* 文字尺寸 */\n/*文字颜色*/\n/* 图片加载中颜色 */\n/* 行为相关颜色 */\n/* 边框颜色 */.color-primary[data-v-f5b0a9d6]{color:#3049c0}.color-333[data-v-f5b0a9d6]{color:#333}.color-666[data-v-f5b0a9d6]{color:#666}.color-999[data-v-f5b0a9d6]{color:#999}.bg-color[data-v-f5b0a9d6]{background-color:#f7f7f7}.bg-white[data-v-f5b0a9d6]{background-color:#fff}.white-color[data-v-f5b0a9d6]{color:#fff}.primary-color[data-v-f5b0a9d6]{color:#f54400}.success-color[data-v-f5b0a9d6]{color:#0e130f}.warning-color[data-v-f5b0a9d6]{color:#f0ad4e}.error-color[data-v-f5b0a9d6]{color:#dd524d}.primary-text[data-v-f5b0a9d6]{color:#333}.secondary-text[data-v-f5b0a9d6]{color:#666}.tip-text[data-v-f5b0a9d6]{color:#999}.color-e32417[data-v-f5b0a9d6]{color:#e32417}.good-helper-wrap .header .link[data-v-f5b0a9d6]{width:%?331?%;height:%?180?%;border-radius:%?16?%;box-sizing:border-box;padding:%?26?%}.good-helper-wrap .header .link-jointly[data-v-f5b0a9d6]{background:url('+s+") no-repeat 0 0;background-size:100% 100%}.good-helper-wrap .header .link-hall[data-v-f5b0a9d6]{background:url("+c+") no-repeat 0 0;background-size:100% 100%}.good-helper-wrap .address[data-v-f5b0a9d6]{height:%?79?%;border-radius:%?16?%;background:#e8f0ff}",""]),t.exports=n},"65c1":function(t,n,e){"use strict";e.r(n);var a=e("7bfb"),o=e.n(a);for(var i in a)["default"].indexOf(i)<0&&function(t){e.d(n,t,(function(){return a[t]}))}(i);n["default"]=o.a},"6d86":function(t,n,e){var a=e("094d");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var o=e("4f06").default;o("1696924f",a,!0,{sourceMap:!1,shadowMode:!1})},7526:function(t,n,e){"use strict";e.r(n);var a=e("1587"),o=e.n(a);for(var i in a)["default"].indexOf(i)<0&&function(t){e.d(n,t,(function(){return a[t]}))}(i);n["default"]=o.a},"7a2a":function(t,n,e){"use strict";var a=e("2c12"),o=e.n(a);o.a},"7bfb":function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0,e("4160"),e("159b"),e("a9e3");var a={methods:{tabClick:function(t,n){this.current=n,this.$emit("changeCurrent",n,t)},getJourneyHelperProjectCount:function(){var t=this;if(this.communityOrgId){var n={communityOrgId:this.communityOrgId};this.$api.getJourneyHelperProjectCount(n).then((function(n){if(n.isError)return t.$msg(n.message);var e=t.tabs;n.content.forEach((function(t){var n=t.status,a=t.count;e[n-1].count=a})),t.tabs=e}))}}},props:{communityOrgId:[String,Number]},data:function(){return{current:0,tabs:[{id:2,name:"待认领",count:0},{id:3,name:"领办中",count:0},{id:4,name:"已办结",count:0}]}},computed:{lineStyle:function(){var t=32,n=250,e=(n-t)/2,a=this.current*n+e;return"left: ".concat(a,"rpx")}},created:function(){}};n.default=a},"81a8":function(t,n,e){"use strict";var a=e("a88f"),o=e.n(a);o.a},"9aca":function(t,n,e){"use strict";e.d(n,"b",(function(){return o})),e.d(n,"c",(function(){return i})),e.d(n,"a",(function(){return a}));var a={mescrollUni:e("f05e").default,empty:e("b800").default},o=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"good-helper-wrap"},[e("mescroll-uni",{ref:"mescrollRef",staticClass:"mescroll-wrap",attrs:{up:t.upOption},on:{init:function(n){arguments[0]=n=t.$handleEvent(n),t.mescrollInit.apply(void 0,arguments)},down:function(n){arguments[0]=n=t.$handleEvent(n),t.downCallback.apply(void 0,arguments)},up:function(n){arguments[0]=n=t.$handleEvent(n),t.upCallback.apply(void 0,arguments)}}},[[e("div",{staticClass:"between-row bg-white header pl16 pr16 pb16 pt28"},[e("div",{staticClass:"link center-justify link-jointly column",on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.onContactList.apply(void 0,arguments)}}},[e("span",{staticClass:"ft30 white-color pl16"},[t._v("共建单位联系表")]),e("span",{staticClass:"ft26 pt16 pl16 pb8",staticStyle:{color:"#C8E5FF"}},[t._v("临安区社区")])]),e("div",{staticClass:"link center-justify link-hall column",on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.onReceptionHall.apply(void 0,arguments)}}},[e("span",{staticClass:"ft30 white-color pl16"},[t._v("领办大厅")]),e("span",{staticClass:"ft26 pt16 pl16 pb8",staticStyle:{color:"#FDD3C5"}},[t._v(t._s(t.isUnitUser?"领办项目享积分加成":"项目供更多单位认领"))])])]),e("div",{staticClass:"bg-white pl32 pr32 pb16"},[t.isShowSelectionCommunit?[e("div",{staticClass:"address pl24 pr24 center-align",on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.onSelectCommunit.apply(void 0,arguments)}}},[e("span",{staticClass:"ft28 color-666"},[t._v(t._s(t.communityText))]),e("svg-icon",{staticClass:"ft16 ml8",attrs:{icon:"icon_xiangxia"}})],1),e("div",{staticClass:"tr pt16"},[e("span",{staticClass:"ft22 color-999"},[t._v("共建单位："+t._s(t.unitNameText))])])]:[e("div",{staticClass:"pl24 pr24 pt24 pb24",staticStyle:{"border-radius":"16rpx",background:"#f7f7f7"}},[e("div",[e("span",{staticClass:"ft28 color-666 mr16"},[t._v("当前单位:")]),e("span",{staticClass:"ft28"},[t._v(t._s(t.currentUnitName))])]),e("div",{staticClass:"pt16 pb16"},[e("span",{staticClass:"ft28 color-666 mr16"},[t._v("对口社区:")]),e("span",{staticClass:"ft28"},[t._v(t._s(t.communityText))])]),e("div",[e("span",{staticClass:"ft28 color-666 mr16"},[t._v("共建单位:")]),e("span",{staticClass:"ft28"},[t._v(t._s(t.unitNameText))])])])]],2),e("div",{staticClass:"mt24"},[e("status-tabs",{ref:"statusTabs",attrs:{communityOrgId:t.communityOrgId},on:{changeCurrent:function(n){arguments[0]=n=t.$handleEvent(n),t.changeCurrent.apply(void 0,arguments)}}}),e("div",{directives:[{name:"show",rawName:"v-show",value:t.listData.length>0,expression:"listData.length > 0"}],staticClass:"list"},t._l(t.listData,(function(n,a){return e("project-item",{key:a,attrs:{"project-item":n,"show-border":a<t.listData.length-1,isHome:!0,isUnitUser:t.isUnitUser},on:{onReceive:function(n){arguments[0]=n=t.$handleEvent(n),t.onReceive.apply(void 0,arguments)}}})})),1),e("empty",{directives:[{name:"show",rawName:"v-show",value:0===t.listData.length,expression:"listData.length === 0"}]})],1)]],2),t.isShowSelectionCommunit?e("selection-communit",{ref:"selectionCommunit",on:{onConfirm:function(n){arguments[0]=n=t.$handleEvent(n),t.onConfirmCommunit.apply(void 0,arguments)}}}):t._e(),e("receive-pop",{ref:"receivePop"})],1)},i=[]},a46a:function(t,n,e){t.exports=e.p+"static/img/bg-hall.8f4e7924.png"},a88f:function(t,n,e){var a=e("593e");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var o=e("4f06").default;o("4eeea040",a,!0,{sourceMap:!1,shadowMode:!1})},cc03:function(t,n,e){t.exports=e.p+"static/img/bg-jointly.97884a7d.png"},e44d:function(t,n,e){"use strict";e.r(n);var a=e("9aca"),o=e("7526");for(var i in o)["default"].indexOf(i)<0&&function(t){e.d(n,t,(function(){return o[t]}))}(i);e("7a2a"),e("81a8");var r,s=e("f0c5"),c=Object(s["a"])(o["default"],a["b"],a["c"],!1,null,"f5b0a9d6",null,!1,a["a"],r);n["default"]=c.exports},e592:function(t,n,e){"use strict";e.r(n);var a=e("42f3"),o=e("65c1");for(var i in o)["default"].indexOf(i)<0&&function(t){e.d(n,t,(function(){return o[t]}))}(i);e("3b91");var r,s=e("f0c5"),c=Object(s["a"])(o["default"],a["b"],a["c"],!1,null,"3ad14693",null,!1,a["a"],r);n["default"]=c.exports},fa75:function(t,n,e){var a=e("4bad");n=a(!1),n.push([t.i,"uni-page-body[data-v-f5b0a9d6]{height:100%;background:#f7f7f7}body.?%PAGE?%[data-v-f5b0a9d6]{background:#f7f7f7}",""]),t.exports=n}}]);