(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-steward-good-helper-reception-hall-index"],{"00a0":function(t,e,o){"use strict";o.r(e);var a=o("57af"),n=o("c0ca");for(var i in n)["default"].indexOf(i)<0&&function(t){o.d(e,t,(function(){return n[t]}))}(i);o("b71b"),o("9f27");var r,c=o("f0c5"),l=Object(c["a"])(n["default"],a["b"],a["c"],!1,null,"3a83a8c2",null,!1,a["a"],r);e["default"]=l.exports},"46fe":function(t,e,o){var a=o("4bad"),n=o("ffbf"),i=o("9421");e=a(!1);var r=n(i);e.push([t.i,'@charset "UTF-8";\n/* uni.scss */\n/* 页面左右间距 */\n/* 文字尺寸 */\n/*文字颜色*/\n/* 图片加载中颜色 */\n/* 行为相关颜色 */\n/* 边框颜色 */.color-primary[data-v-3a83a8c2]{color:#3049c0}.color-333[data-v-3a83a8c2]{color:#333}.color-666[data-v-3a83a8c2]{color:#666}.color-999[data-v-3a83a8c2]{color:#999}.bg-color[data-v-3a83a8c2]{background-color:#f7f7f7}.bg-white[data-v-3a83a8c2]{background-color:#fff}.white-color[data-v-3a83a8c2]{color:#fff}.primary-color[data-v-3a83a8c2]{color:#f54400}.success-color[data-v-3a83a8c2]{color:#0e130f}.warning-color[data-v-3a83a8c2]{color:#f0ad4e}.error-color[data-v-3a83a8c2]{color:#dd524d}.primary-text[data-v-3a83a8c2]{color:#333}.secondary-text[data-v-3a83a8c2]{color:#666}.tip-text[data-v-3a83a8c2]{color:#999}.color-e32417[data-v-3a83a8c2]{color:#e32417}.reception-hall-wrap .hall-container[data-v-3a83a8c2]{height:%?182?%;box-sizing:border-box;background:url('+r+") no-repeat 0 0;background-size:100% 100%}.reception-hall-wrap .hall-container .box-bg[data-v-3a83a8c2]{text-align:justify;text-align-last:left;padding:%?32?%}.reception-hall-wrap .hall-container .community-select[data-v-3a83a8c2]{width:100%;height:%?88?%}",""]),t.exports=e},"57af":function(t,e,o){"use strict";o.d(e,"b",(function(){return n})),o.d(e,"c",(function(){return i})),o.d(e,"a",(function(){return a}));var a={mescrollUni:o("f05e").default},n=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-uni-view",{staticClass:"reception-hall-wrap flex1"},[o("mescroll-uni",{ref:"mescrollRef",staticClass:"mescroll-wrap",attrs:{up:t.upOption},on:{init:function(e){arguments[0]=e=t.$handleEvent(e),t.mescrollInit.apply(void 0,arguments)},down:function(e){arguments[0]=e=t.$handleEvent(e),t.downCallback.apply(void 0,arguments)},up:function(e){arguments[0]=e=t.$handleEvent(e),t.upCallback.apply(void 0,arguments)}}},[[o("v-uni-view",{staticClass:"hall-container"},[o("v-uni-view",{staticClass:"box-bg"},[o("v-uni-text",{staticClass:"ft28 white-color"},[t._v("社区发布的项目若一定时间内无共建单位认领会流转到领办大厅，此时将允许所有单位认领，原共建单位认领不享受分数加成，其余单位享受。办结后进行分数结算")])],1),o("v-uni-view",{staticClass:"community-select bg-white center-align pl32",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.$refs.selectionCommunit.show()}}},[o("v-uni-text",{staticClass:"ft28 color-666"},[t._v(t._s(t.communityText))]),o("svg-icon",{staticClass:"ft18 ml16 color-999",attrs:{icon:"icon_xiangxia"}})],1),o("v-uni-view",t._l(t.listData,(function(e,a){return o("project-item",{key:a,staticClass:"mt24 project-item",attrs:{"project-item":e,"show-border":!1,isUnitUser:t.isUnitUser},on:{onReceive:function(e){arguments[0]=e=t.$handleEvent(e),t.onReceive.apply(void 0,arguments)}}})})),1)],1)]],2),o("selection-communit",{ref:"selectionCommunit",on:{onConfirm:function(e){arguments[0]=e=t.$handleEvent(e),t.onConfirmCommunit.apply(void 0,arguments)}}}),o("receive-pop",{ref:"receivePop",attrs:{isHall:!0}})],1)},i=[]},"6c2c":function(t,e,o){var a=o("4bad");e=a(!1),e.push([t.i,"uni-page-body[data-v-3a83a8c2]{width:100%;min-height:100%;background:#f7f7ff;display:-webkit-box;display:-webkit-flex;display:flex}body.?%PAGE?%[data-v-3a83a8c2]{background:#f7f7ff}",""]),t.exports=e},9360:function(t,e,o){var a=o("6c2c");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=o("4f06").default;n("75c29c08",a,!0,{sourceMap:!1,shadowMode:!1})},9421:function(t,e,o){t.exports=o.p+"static/img/bg-hall-text.5d15448a.png"},"9f27":function(t,e,o){"use strict";var a=o("ed5d"),n=o.n(a);n.a},b71b:function(t,e,o){"use strict";var a=o("9360"),n=o.n(a);n.a},bd12:function(t,e,o){"use strict";var a=o("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,o("99af");var n=a(o("131e")),i=a(o("7ea6")),r=a(o("f05e")),c=a(o("1728")),l=a(o("3244")),s={name:"ReceptionHall",methods:{onConfirmCommunit:function(t){var e=this;this.streetInfo=t.streetInfo,this.communityInfo=t.communityInfo,this.communityOrgId=t.communityInfo.id,this.$nextTick((function(){e.getJourneyHelperProjectShowPage()}))},onReceive:function(t){if(this.$notMember())return this.$goLogin();this.$refs.receivePop.show({projectId:t,communityOrgId:this.communityOrgId})},getJourneyHelperProjectShowPage:function(t){var e=this,o=this.memberPersonalInfo.communityOrgId,a={pageNumber:t&&t.num||1,pageSize:t&&t.size||10,communityOrgId:o||this.communityOrgId,type:1};this.$api.getJourneyHelperProjectShowPage(a).then((function(t){if(t.isError)return e.mescroll.endErr();var o=t.content,n=o.items,i=o.count;e.mescroll.endBySize(n.length,i),e.listData=1===a.pageNumber?n:e.listData.concat(n)}))},upCallback:function(t){this.getJourneyHelperProjectShowPage(t),this.mescroll.endErr()},downCallback:function(){this.mescroll.resetUpScroll()}},data:function(){return{upOption:{empty:{use:!1}},streetInfo:{},communityInfo:{},communityOrgId:null,listData:[]}},computed:{communityText:function(){var t=this.streetInfo,e=this.communityInfo;return t.name+e.name},memberPersonalInfo:function(){return this.$store.state.user.memberPersonalInfo},isUnitUser:function(){return this.memberPersonalInfo.isUnitUser}},created:function(){},mixins:[i.default],components:{ProjectItem:n.default,MescrollUni:r.default,ReceivePop:c.default,SelectionCommunit:l.default}};e.default=s},c0ca:function(t,e,o){"use strict";o.r(e);var a=o("bd12"),n=o.n(a);for(var i in a)["default"].indexOf(i)<0&&function(t){o.d(e,t,(function(){return a[t]}))}(i);e["default"]=n.a},ed5d:function(t,e,o){var a=o("46fe");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=o("4f06").default;n("a3be665e",a,!0,{sourceMap:!1,shadowMode:!1})}}]);