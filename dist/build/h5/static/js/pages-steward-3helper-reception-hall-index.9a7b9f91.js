(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-steward-3helper-reception-hall-index"],{"02e3":function(e,t,a){"use strict";var o=a("90b0"),n=a.n(o);n.a},"32b9":function(e,t,a){"use strict";var o=a("d740"),n=a.n(o);n.a},"5aed":function(e,t,a){"use strict";a.r(t);var o=a("cd16"),n=a("95bf");for(var r in n)["default"].indexOf(r)<0&&function(e){a.d(t,e,(function(){return n[e]}))}(r);a("02e3"),a("32b9");var i,c=a("f0c5"),l=Object(c["a"])(n["default"],o["b"],o["c"],!1,null,"479a4881",null,!1,o["a"],i);t["default"]=l.exports},"90b0":function(e,t,a){var o=a("f60bd");"string"===typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);var n=a("4f06").default;n("dc333bc4",o,!0,{sourceMap:!1,shadowMode:!1})},"93f1":function(e,t,a){var o=a("4bad"),n=a("ffbf"),r=a("9421");t=o(!1);var i=n(r);t.push([e.i,'@charset "UTF-8";\n/* uni.scss */\n/* 页面左右间距 */\n/* 文字尺寸 */\n/*文字颜色*/\n/* 图片加载中颜色 */\n/* 行为相关颜色 */\n/* 边框颜色 */.color-primary[data-v-479a4881]{color:#3049c0}.color-333[data-v-479a4881]{color:#333}.color-666[data-v-479a4881]{color:#666}.color-999[data-v-479a4881]{color:#999}.bg-color[data-v-479a4881]{background-color:#f7f7f7}.bg-white[data-v-479a4881]{background-color:#fff}.white-color[data-v-479a4881]{color:#fff}.primary-color[data-v-479a4881]{color:#f54400}.success-color[data-v-479a4881]{color:#0e130f}.warning-color[data-v-479a4881]{color:#f0ad4e}.error-color[data-v-479a4881]{color:#dd524d}.primary-text[data-v-479a4881]{color:#333}.secondary-text[data-v-479a4881]{color:#666}.tip-text[data-v-479a4881]{color:#999}.color-e32417[data-v-479a4881]{color:#e32417}.reception-hall-wrap[data-v-479a4881] .mescroll-wxs-content{height:100%}.reception-hall-wrap .box-bg[data-v-479a4881]{height:%?182?%;position:fixed;top:0;text-align:justify;text-align-last:left;padding:%?32?%;background:url('+i+") no-repeat 0 0;background-size:100% 100%}.reception-hall-wrap .community-select[data-v-479a4881]{width:100%;height:%?88?%}.reception-hall-wrap .hall-container[data-v-479a4881]{height:100%}",""]),e.exports=t},9421:function(e,t,a){e.exports=a.p+"static/img/bg-hall-text.5d15448a.png"},"95bf":function(e,t,a){"use strict";a.r(t);var o=a("fd54"),n=a.n(o);for(var r in o)["default"].indexOf(r)<0&&function(e){a.d(t,e,(function(){return o[e]}))}(r);t["default"]=n.a},cd16:function(e,t,a){"use strict";a.d(t,"b",(function(){return n})),a.d(t,"c",(function(){return r})),a.d(t,"a",(function(){return o}));var o={mescrollUni:a("f05e").default,empty:a("b800").default},n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-uni-view",{staticClass:"reception-hall-wrap flex1 flex"},[a("v-uni-view",{staticClass:"box-bg"},[a("v-uni-text",{staticClass:"ft28 white-color"},[e._v("社区发布的项目若一定时间内无共建单位认领会流转到领办大厅，此时将允许所有单位认领，原共建单位认领不享受分数加成，其余单位享受。办结后进行分数结算")])],1),a("mescroll-uni",{ref:"mescrollRef",staticClass:"mescroll-wrap flex1",attrs:{up:e.upOption,top:"182rpx"},on:{init:function(t){arguments[0]=t=e.$handleEvent(t),e.mescrollInit.apply(void 0,arguments)},down:function(t){arguments[0]=t=e.$handleEvent(t),e.downCallback.apply(void 0,arguments)},up:function(t){arguments[0]=t=e.$handleEvent(t),e.upCallback.apply(void 0,arguments)}}},[[a("v-uni-view",{staticClass:"hall-container flex column"},[e.$isEmpty(e.listData)?a("empty",{staticClass:"bg-white flex1"}):a("v-uni-view",e._l(e.listData,(function(t,o){return a("project-item",{key:o,staticClass:"mt24 project-item",attrs:{"project-item":t,"show-border":!1,isUnitUser:e.isUnitUser},on:{onReceive:function(t){arguments[0]=t=e.$handleEvent(t),e.onReceive.apply(void 0,arguments)}}})})),1)],1)]],2),a("receive-pop",{ref:"receivePop",attrs:{isHall:!0},on:{receiveSuccess:function(t){arguments[0]=t=e.$handleEvent(t),e.receiveSuccess.apply(void 0,arguments)}}})],1)},r=[]},d740:function(e,t,a){var o=a("93f1");"string"===typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);var n=a("4f06").default;n("064af055",o,!0,{sourceMap:!1,shadowMode:!1})},f60bd:function(e,t,a){var o=a("4bad");t=o(!1),t.push([e.i,"uni-page-body[data-v-479a4881]{width:100%;min-height:100%;background:#f7f7ff;display:-webkit-box;display:-webkit-flex;display:flex}body.?%PAGE?%[data-v-479a4881]{background:#f7f7ff}",""]),e.exports=t},fd54:function(e,t,a){"use strict";var o=a("4ea4");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("99af");var n=o(a("f14a")),r=o(a("7ea6")),i=o(a("f05e")),c=o(a("9d2a")),l=o(a("e8ef")),s={name:"ReceptionHall",methods:{onReceive:function(e){if(this.$notMember())return this.$goLogin();this.$refs.receivePop.show({projectId:e})},receiveSuccess:function(){this.downCallback()},getJourneyHelperProjectShowPage:function(e){var t=this,a={pageNumber:e&&e.num||1,pageSize:e&&e.size||10,type:1};this.$api.getJourneyHelperProjectShowPage(a).then((function(e){if(e.isError)return t.mescroll.endErr();var o=e.content,n=o.items,r=o.count;t.mescroll.endBySize(n.length,r),t.listData=1===a.pageNumber?n:t.listData.concat(n)}))},upCallback:function(e){this.getJourneyHelperProjectShowPage(e)},downCallback:function(){this.mescroll.resetUpScroll()}},data:function(){return{upOption:{empty:{use:!1},toTop:{bottom:120},textNoMore:""},listData:[]}},computed:{memberPersonalInfo:function(){return this.$store.state.user.memberPersonalInfo},isUnitUser:function(){return this.memberPersonalInfo.isUnitUser}},created:function(){},mixins:[r.default],components:{ProjectItem:n.default,MescrollUni:i.default,ReceivePop:c.default,SelectionCommunit:l.default}};t.default=s}}]);