(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-steward-good-helper-index"],{"0dd5":function(t,e,n){var a=n("4bad");e=a(!1),e.push([t.i,'@charset "UTF-8";\n/* uni.scss */\n/* 页面左右间距 */\n/* 文字尺寸 */\n/*文字颜色*/\n/* 图片加载中颜色 */\n/* 行为相关颜色 */\n/* 边框颜色 */.color-primary[data-v-40d7a453]{color:#3049c0}.color-333[data-v-40d7a453]{color:#333}.color-666[data-v-40d7a453]{color:#666}.color-999[data-v-40d7a453]{color:#999}.bg-color[data-v-40d7a453]{background-color:#f7f7f7}.bg-white[data-v-40d7a453]{background-color:#fff}.white-color[data-v-40d7a453]{color:#fff}.primary-color[data-v-40d7a453]{color:#f54400}.success-color[data-v-40d7a453]{color:#0e130f}.warning-color[data-v-40d7a453]{color:#f0ad4e}.error-color[data-v-40d7a453]{color:#dd524d}.primary-text[data-v-40d7a453]{color:#333}.secondary-text[data-v-40d7a453]{color:#666}.tip-text[data-v-40d7a453]{color:#999}.color-e32417[data-v-40d7a453]{color:#e32417}.tabs-wrap[data-v-40d7a453]{-webkit-justify-content:space-around;justify-content:space-around;background:#fff;height:%?88?%;line-height:%?88?%}.tabs-wrap .tab-item[data-v-40d7a453]{width:%?250?%;text-align:center}.tabs-wrap .line[data-v-40d7a453]{position:absolute;z-index:1;-webkit-transition:left .3s;transition:left .3s;bottom:%?12?%;left:%?60?%;width:%?32?%;height:%?4?%;border-radius:%?4?%;background:#f54400}',""]),t.exports=e},1587:function(t,e,n){"use strict";var a=n("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,n("99af"),n("d81d"),n("a15b");var o=a(n("7ea6")),r=a(n("f05e")),i=a(n("e592")),c=a(n("131e")),s=a(n("3244")),d=a(n("1728")),l={mixins:[o.default],components:{StatusTabs:i.default,ProjectItem:c.default,SelectionCommunit:s.default,ReceivePop:d.default,MescrollUni:r.default},methods:{onConfirmCommunit:function(t){var e=this;this.communityInfo=t.communityInfo,this.streetInfo=t.streetInfo,this.communityOrgId=t.communityInfo.id,this.$nextTick((function(){!e.isFirstLoading&&e.updateTabsCount()}))},onReceive:function(t){if(this.$notMember())return this.$goLogin();this.$refs.receivePop.show({projectId:t,unitIds:this.unitIds})},changeCurrent:function(t,e){this.projectType=e,this.downCallback()},onSelectCommunit:function(){this.isUnitUser||this.$refs.selectionCommunit.show()},onContactList:function(){uni.navigateTo({url:"/pages/steward/good-helper/contact-list/index"})},onReceptionHall:function(){uni.navigateTo({url:"/pages/steward/good-helper/reception-hall/index"})},updateTabsCount:function(){var t=this.$refs.statusTabs;t&&t.getJourneyHelperProjectCount()},upCallback:function(t){this.getJourneyHelperProjectShowPage(t),this.mescroll.endErr()},downCallback:function(){this.mescroll.resetUpScroll(),this.updateTabsCount()},getJourneyHelperProjectShowPage:function(t){var e=this;if(this.communityOrgId){var n={pageNumber:t&&t.num||1,pageSize:t&&t.size||10,communityOrgId:this.communityOrgId,type:this.projectType};this.$api.getJourneyHelperProjectShowPage(n).then((function(t){if(e.isFirstLoading=!1,t.isError)return e.mescroll.endErr();var a=t.content,o=a.items,r=a.count;e.mescroll.endBySize(o.length,r),e.listData=1===n.pageNumber?o:e.listData.concat(o)}))}},getUnitListByCommunity:function(){var t=this,e={communityOrgId:this.communityOrgId};this.$api.getUnitListByCommunity(e).then((function(e){if(e.isError)return t.$msg(e.message);t.unitIds=e.content||[]}))}},data:function(){return{isFirstLoading:!0,communityInfo:{},streetInfo:{},upOption:{empty:{use:!1}},communityOrgId:null,projectType:2,unitIds:[],listData:[]}},watch:{communityOrgId:{handler:function(t){t&&"0"!==t&&(this.getUnitListByCommunity(),this.getJourneyHelperProjectShowPage())},immediate:!0},memberPersonalInfo:{handler:function(t){t.communityOrgId&&"0"!==t.communityOrgId&&(this.communityOrgId=this.memberPersonalInfo.communityOrgId)},immediate:!0}},computed:{memberPersonalInfo:function(){return this.$store.state.user.memberPersonalInfo},isUnitUser:function(){return this.memberPersonalInfo.isUnitUser},communityText:function(){if(this.isUnitUser){var t=this.memberPersonalInfo,e=t.parentCommunityOrgName,n=t.communityOrgName;return e+n}var a=this.streetInfo,o=this.communityInfo;return o?a.name+o.name:""},unitNameText:function(){var t=this.unitIds.map((function(t){return t.name}));return t.join(" ")}}};e.default=l},3526:function(t,e,n){var a=n("4bad"),o=n("ffbf"),r=n("cc03"),i=n("a46a");e=a(!1);var c=o(r),s=o(i);e.push([t.i,'@charset "UTF-8";\n/* uni.scss */\n/* 页面左右间距 */\n/* 文字尺寸 */\n/*文字颜色*/\n/* 图片加载中颜色 */\n/* 行为相关颜色 */\n/* 边框颜色 */.color-primary[data-v-d0a28c5e]{color:#3049c0}.color-333[data-v-d0a28c5e]{color:#333}.color-666[data-v-d0a28c5e]{color:#666}.color-999[data-v-d0a28c5e]{color:#999}.bg-color[data-v-d0a28c5e]{background-color:#f7f7f7}.bg-white[data-v-d0a28c5e]{background-color:#fff}.white-color[data-v-d0a28c5e]{color:#fff}.primary-color[data-v-d0a28c5e]{color:#f54400}.success-color[data-v-d0a28c5e]{color:#0e130f}.warning-color[data-v-d0a28c5e]{color:#f0ad4e}.error-color[data-v-d0a28c5e]{color:#dd524d}.primary-text[data-v-d0a28c5e]{color:#333}.secondary-text[data-v-d0a28c5e]{color:#666}.tip-text[data-v-d0a28c5e]{color:#999}.color-e32417[data-v-d0a28c5e]{color:#e32417}.good-helper-wrap .header .link[data-v-d0a28c5e]{width:%?331?%;height:%?180?%;border-radius:%?16?%;box-sizing:border-box;padding:%?26?%}.good-helper-wrap .header .link-jointly[data-v-d0a28c5e]{background:url('+c+") no-repeat 0 0;background-size:100% 100%}.good-helper-wrap .header .link-hall[data-v-d0a28c5e]{background:url("+s+") no-repeat 0 0;background-size:100% 100%}.good-helper-wrap .address[data-v-d0a28c5e]{height:%?79?%;border-radius:%?16?%;background:#e8f0ff}",""]),t.exports=e},5059:function(t,e,n){"use strict";var a=n("e2df"),o=n.n(a);o.a},5663:function(t,e,n){var a=n("f002");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var o=n("4f06").default;o("e2423164",a,!0,{sourceMap:!1,shadowMode:!1})},"656a":function(t,e,n){"use strict";var a=n("5663"),o=n.n(a);o.a},"65c1":function(t,e,n){"use strict";n.r(e);var a=n("7bfb"),o=n.n(a);for(var r in a)["default"].indexOf(r)<0&&function(t){n.d(e,t,(function(){return a[t]}))}(r);e["default"]=o.a},7526:function(t,e,n){"use strict";n.r(e);var a=n("1587"),o=n.n(a);for(var r in a)["default"].indexOf(r)<0&&function(t){n.d(e,t,(function(){return a[t]}))}(r);e["default"]=o.a},"7bfb":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,n("4160"),n("159b"),n("a9e3");var a={methods:{tabClick:function(t,e){this.current=e,this.$emit("changeCurrent",e,t)},getJourneyHelperProjectCount:function(){var t=this,e={communityOrgId:this.communityOrgId};this.$api.getJourneyHelperProjectCount(e).then((function(e){if(e.isError)return t.$msg(e.message);var n=t.tabs;e.content.forEach((function(t){var e=t.status,a=t.count;n[e-1].count=a})),t.tabs=n}))}},props:{communityOrgId:[String,Number]},data:function(){return{current:0,tabs:[{id:2,name:"待认领",count:0},{id:3,name:"领办中",count:0},{id:4,name:"已办结",count:0}]}},computed:{lineStyle:function(){var t=32,e=250,n=(e-t)/2,a=this.current*e+n;return"left: ".concat(a,"rpx")}},created:function(){}};e.default=a},9369:function(t,e,n){"use strict";n.d(e,"b",(function(){return o})),n.d(e,"c",(function(){return r})),n.d(e,"a",(function(){return a}));var a={mescrollUni:n("f05e").default,empty:n("b800").default},o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"good-helper-wrap"},[n("mescroll-uni",{ref:"mescrollRef",staticClass:"mescroll-wrap",attrs:{up:t.upOption},on:{init:function(e){arguments[0]=e=t.$handleEvent(e),t.mescrollInit.apply(void 0,arguments)},down:function(e){arguments[0]=e=t.$handleEvent(e),t.downCallback.apply(void 0,arguments)},up:function(e){arguments[0]=e=t.$handleEvent(e),t.upCallback.apply(void 0,arguments)}}},[[n("div",{staticClass:"between-row bg-white header pl16 pr16 pb16 pt28"},[n("div",{staticClass:"link center-justify link-jointly column",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.onContactList.apply(void 0,arguments)}}},[n("span",{staticClass:"ft30 white-color pl16"},[t._v("共建单位联系表")]),n("span",{staticClass:"ft26 pt16 pl16 pb8",staticStyle:{color:"#C8E5FF"}},[t._v("临安区社区")])]),n("div",{staticClass:"link center-justify link-hall column",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.onReceptionHall.apply(void 0,arguments)}}},[n("span",{staticClass:"ft30 white-color pl16"},[t._v("领办大厅")]),n("span",{staticClass:"ft26 pt16 pl16 pb8",staticStyle:{color:"#FDD3C5"}},[t._v(t._s(t.isUnitUser?"领办项目享积分加成":"项目供更多单位认领"))])])]),n("div",{staticClass:"bg-white pl32 pr32 pb16"},[n("div",{staticClass:"address pl24 pr24 center-align",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.onSelectCommunit.apply(void 0,arguments)}}},[n("span",{staticClass:"ft28 color-666"},[t._v(t._s(t.communityText))]),n("svg-icon",{staticClass:"ft16 ml8",attrs:{icon:"icon_xiangxia"}})],1),n("div",{staticClass:"tr pt16"},[n("span",{staticClass:"ft22 color-999"},[t._v("共建单位："+t._s(t.unitNameText))])])]),n("div",{staticClass:"mt24"},[n("status-tabs",{ref:"statusTabs",attrs:{communityOrgId:t.communityOrgId},on:{changeCurrent:function(e){arguments[0]=e=t.$handleEvent(e),t.changeCurrent.apply(void 0,arguments)}}}),n("div",{directives:[{name:"show",rawName:"v-show",value:t.listData.length>0,expression:"listData.length > 0"}],staticClass:"list"},t._l(t.listData,(function(e,a){return n("project-item",{key:a,attrs:{"project-item":e,"show-border":a<t.listData.length-1,isHome:!0,isUnitUser:t.isUnitUser},on:{onReceive:function(e){arguments[0]=e=t.$handleEvent(e),t.onReceive.apply(void 0,arguments)}}})})),1),n("empty",{directives:[{name:"show",rawName:"v-show",value:0===t.listData.length,expression:"listData.length === 0"}]})],1)]],2),t.isUnitUser||t.isFirstLoading?t._e():n("selection-communit",{ref:"selectionCommunit",on:{onConfirm:function(e){arguments[0]=e=t.$handleEvent(e),t.onConfirmCommunit.apply(void 0,arguments)}}}),n("receive-pop",{ref:"receivePop"})],1)},r=[]},a46a:function(t,e,n){t.exports=n.p+"static/img/bg-hall.8f4e7924.png"},b176:function(t,e,n){"use strict";var a=n("f2f7"),o=n.n(a);o.a},cc03:function(t,e,n){t.exports=n.p+"static/img/bg-jointly.97884a7d.png"},e2df:function(t,e,n){var a=n("3526");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var o=n("4f06").default;o("1d563fd1",a,!0,{sourceMap:!1,shadowMode:!1})},e44d:function(t,e,n){"use strict";n.r(e);var a=n("9369"),o=n("7526");for(var r in o)["default"].indexOf(r)<0&&function(t){n.d(e,t,(function(){return o[t]}))}(r);n("656a"),n("5059");var i,c=n("f0c5"),s=Object(c["a"])(o["default"],a["b"],a["c"],!1,null,"d0a28c5e",null,!1,a["a"],i);e["default"]=s.exports},e592:function(t,e,n){"use strict";n.r(e);var a=n("eae4"),o=n("65c1");for(var r in o)["default"].indexOf(r)<0&&function(t){n.d(e,t,(function(){return o[t]}))}(r);n("b176");var i,c=n("f0c5"),s=Object(c["a"])(o["default"],a["b"],a["c"],!1,null,"40d7a453",null,!1,a["a"],i);e["default"]=s.exports},eae4:function(t,e,n){"use strict";var a;n.d(e,"b",(function(){return o})),n.d(e,"c",(function(){return r})),n.d(e,"a",(function(){return a}));var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"tabs-wrap relative row"},[t._l(t.tabs,(function(e,a){return n("div",{key:a,staticClass:"tab-item secondary-text",on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.tabClick(e.id,a)}}},[n("span",{staticClass:"ft28 color-666",class:t.current===a&&"color-e32417 medium"},[t._v(t._s(e.name)+t._s(e.count?"("+e.count+")":""))])])})),n("div",{staticClass:"line",style:t.lineStyle})],2)},r=[]},f002:function(t,e,n){var a=n("4bad");e=a(!1),e.push([t.i,"uni-page-body[data-v-d0a28c5e]{height:100%;background:#f7f7f7}body.?%PAGE?%[data-v-d0a28c5e]{background:#f7f7f7}",""]),t.exports=e},f2f7:function(t,e,n){var a=n("0dd5");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var o=n("4f06").default;o("a3f92890",a,!0,{sourceMap:!1,shadowMode:!1})}}]);