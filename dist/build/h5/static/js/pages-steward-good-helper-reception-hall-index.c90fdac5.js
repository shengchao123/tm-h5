(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-steward-good-helper-reception-hall-index"],{"0010":function(e,t,a){var o=a("be15");"string"===typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);var n=a("4f06").default;n("1a89f73c",o,!0,{sourceMap:!1,shadowMode:!1})},"00a0":function(e,t,a){"use strict";a.r(t);var o=a("3221"),n=a("c0ca");for(var i in n)["default"].indexOf(i)<0&&function(e){a.d(t,e,(function(){return n[e]}))}(i);a("b7bb"),a("962e");var r,c=a("f0c5"),l=Object(c["a"])(n["default"],o["b"],o["c"],!1,null,"47aed78a",null,!1,o["a"],r);t["default"]=l.exports},3221:function(e,t,a){"use strict";a.d(t,"b",(function(){return n})),a.d(t,"c",(function(){return i})),a.d(t,"a",(function(){return o}));var o={mescrollUni:a("f05e").default},n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-uni-view",{staticClass:"reception-hall-wrap flex1"},[a("mescroll-uni",{ref:"mescrollRef",staticClass:"mescroll-wrap",attrs:{up:e.upOption},on:{init:function(t){arguments[0]=t=e.$handleEvent(t),e.mescrollInit.apply(void 0,arguments)},down:function(t){arguments[0]=t=e.$handleEvent(t),e.downCallback.apply(void 0,arguments)},up:function(t){arguments[0]=t=e.$handleEvent(t),e.upCallback.apply(void 0,arguments)}}},[[a("v-uni-view",{staticClass:"hall-container"},[a("v-uni-view",{staticClass:"box-bg"},[a("v-uni-text",{staticClass:"ft28 white-color"},[e._v("社区发布的项目若一定时间内无共建单位认领会流转到领办大厅，此时将允许所有单位认领，原共建单位认领不享受分数加成，其余单位享受。办结后进行分数结算")])],1),a("v-uni-view",{staticClass:"community-select bg-white center-align pl32",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.$refs.selectionCommunit.show()}}},[a("v-uni-text",{staticClass:"ft28 color-666"},[e._v(e._s(e.communityText))]),a("svg-icon",{staticClass:"ft18 ml16 color-999",attrs:{icon:"icon_xiangxia"}})],1),a("v-uni-view",e._l(e.listData,(function(t,o){return a("project-item",{key:o,staticClass:"mt24 project-item",attrs:{"project-item":t,"show-border":!1,isUnitUser:e.isUnitUser},on:{onReceive:function(t){arguments[0]=t=e.$handleEvent(t),e.onReceive.apply(void 0,arguments)}}})})),1)],1)]],2),a("selection-communit",{ref:"selectionCommunit",on:{onConfirm:function(t){arguments[0]=t=e.$handleEvent(t),e.onConfirmCommunit.apply(void 0,arguments)}}}),a("receive-pop",{ref:"receivePop",attrs:{isHall:!0}})],1)},i=[]},9421:function(e,t,a){e.exports=a.p+"static/img/bg-hall-text.5d15448a.png"},"962e":function(e,t,a){"use strict";var o=a("b8ca"),n=a.n(o);n.a},b7bb:function(e,t,a){"use strict";var o=a("0010"),n=a.n(o);n.a},b8ca:function(e,t,a){var o=a("c2da");"string"===typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);var n=a("4f06").default;n("bb764fc6",o,!0,{sourceMap:!1,shadowMode:!1})},bd12:function(e,t,a){"use strict";var o=a("4ea4");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("99af");var n=o(a("131e")),i=o(a("7ea6")),r=o(a("f05e")),c=o(a("1728")),l=o(a("3244")),s={name:"ReceptionHall",methods:{onConfirmCommunit:function(e){var t=this;this.streetInfo=e.streetInfo,this.communityInfo=e.communityInfo,this.communityOrgId=e.communityInfo.id,this.$nextTick((function(){t.getJourneyHelperProjectShowPage()}))},onReceive:function(e){if(this.$notMember())return this.$goLogin();this.$refs.receivePop.show({projectId:e,communityOrgId:this.communityOrgId})},getJourneyHelperProjectShowPage:function(e){var t=this;if(this.communityOrgId){var a={pageNumber:e&&e.num||1,pageSize:e&&e.size||10,communityOrgId:this.communityOrgId,type:1};this.$api.getJourneyHelperProjectShowPage(a).then((function(e){if(e.isError)return t.mescroll.endErr();var o=e.content,n=o.items,i=o.count;t.mescroll.endBySize(n.length,i),t.listData=1===a.pageNumber?n:t.listData.concat(n)}))}},upCallback:function(e){this.getJourneyHelperProjectShowPage(e),this.mescroll.endErr()},downCallback:function(){this.mescroll.resetUpScroll()}},data:function(){return{upOption:{empty:{use:!1}},streetInfo:{},communityInfo:{},communityOrgId:null,listData:[]}},computed:{communityText:function(){var e=this.streetInfo,t=this.communityInfo;return e.name+t.name},memberPersonalInfo:function(){return this.$store.state.user.memberPersonalInfo},isUnitUser:function(){return this.memberPersonalInfo.isUnitUser}},created:function(){},mixins:[i.default],components:{ProjectItem:n.default,MescrollUni:r.default,ReceivePop:c.default,SelectionCommunit:l.default}};t.default=s},be15:function(e,t,a){var o=a("4bad");t=o(!1),t.push([e.i,"uni-page-body[data-v-47aed78a]{width:100%;min-height:100%;background:#f7f7ff;display:-webkit-box;display:-webkit-flex;display:flex}body.?%PAGE?%[data-v-47aed78a]{background:#f7f7ff}",""]),e.exports=t},c0ca:function(e,t,a){"use strict";a.r(t);var o=a("bd12"),n=a.n(o);for(var i in o)["default"].indexOf(i)<0&&function(e){a.d(t,e,(function(){return o[e]}))}(i);t["default"]=n.a},c2da:function(e,t,a){var o=a("4bad"),n=a("ffbf"),i=a("9421");t=o(!1);var r=n(i);t.push([e.i,'@charset "UTF-8";\n/* uni.scss */\n/* 页面左右间距 */\n/* 文字尺寸 */\n/*文字颜色*/\n/* 图片加载中颜色 */\n/* 行为相关颜色 */\n/* 边框颜色 */.color-primary[data-v-47aed78a]{color:#3049c0}.color-333[data-v-47aed78a]{color:#333}.color-666[data-v-47aed78a]{color:#666}.color-999[data-v-47aed78a]{color:#999}.bg-color[data-v-47aed78a]{background-color:#f7f7f7}.bg-white[data-v-47aed78a]{background-color:#fff}.white-color[data-v-47aed78a]{color:#fff}.primary-color[data-v-47aed78a]{color:#f54400}.success-color[data-v-47aed78a]{color:#0e130f}.warning-color[data-v-47aed78a]{color:#f0ad4e}.error-color[data-v-47aed78a]{color:#dd524d}.primary-text[data-v-47aed78a]{color:#333}.secondary-text[data-v-47aed78a]{color:#666}.tip-text[data-v-47aed78a]{color:#999}.color-e32417[data-v-47aed78a]{color:#e32417}.reception-hall-wrap .hall-container[data-v-47aed78a]{height:%?182?%;box-sizing:border-box;background:url('+r+") no-repeat 0 0;background-size:100% 100%}.reception-hall-wrap .hall-container .box-bg[data-v-47aed78a]{text-align:justify;text-align-last:left;padding:%?32?%}.reception-hall-wrap .hall-container .community-select[data-v-47aed78a]{width:100%;height:%?88?%}",""]),e.exports=t}}]);