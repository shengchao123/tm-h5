(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-steward-5case-index"],{"0739":function(t,e,a){var o=a("be27");"string"===typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);var r=a("4f06").default;r("7c9cb9f7",o,!0,{sourceMap:!1,shadowMode:!1})},"16e0":function(t,e,a){"use strict";var o=a("253c"),r=a.n(o);r.a},"1a3f":function(t,e,a){"use strict";var o;a.d(e,"b",(function(){return r})),a.d(e,"c",(function(){return n})),a.d(e,"a",(function(){return o}));var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"porject-item-wrap bg-white pl32 pr32",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.onDetail.apply(void 0,arguments)}}},[a("div",{staticClass:"pt32 pb32",class:t.showBorder&&"bb"},[a("div",{staticClass:"center-align between-row"},[a("div",{staticClass:"center-align"},[1!==t.projectItem.status&&t.projectItem.isGrab&&this.isHome?a("div",{staticClass:"center mr8",staticStyle:{width:"40rpx",height:"40rpx",background:"#FA5A12","border-radius":"6rpx"}},[a("span",{staticClass:"ft24 white-color"},[t._v("抢")])]):t._e(),a("div",{staticClass:"ft34 medium name ellipsis"},[t._v(t._s(t.projectItem.name))]),1!==t.projectItem.status?a("div",{staticClass:"center",staticStyle:{height:"38rpx"}},[a("svg-icon",{staticClass:"ml16",staticStyle:{"font-size":"100rpx"},style:{color:t.statusIcon.color},attrs:{icon:t.statusIcon.icon}})],1):t._e()]),t.isShowReceiveBtn?a("div",{staticClass:"receive-btn tc ft24 color-e32417",on:{click:function(e){e.stopPropagation(),arguments[0]=e=t.$handleEvent(e),t.onReceive.apply(void 0,arguments)}}},[t._v("认领")]):t._e()]),a("div",{staticClass:"between-row center-align ft24 color-999 pt16 pb16"},[a("div",[a("span",{staticStyle:{"margin-right":"56rpx"}},[t._v(t._s(t.startTime))]),1!==t.projectItem.status?a("span",[t._v(t._s(t.projectLeadName))]):t.isHome?t._e():a("span",[t._v(t._s(t.projectReleaseName))])]),t.isHome&&t.isUnitUser&&1===t.projectItem.status?a("span",{staticClass:"ft20 color-999"},[t._v(t._s(t.endTime))]):t._e()]),a("div",{staticClass:"content"},[a("div",{ref:"contentBox",staticClass:"content-box",class:t.isHideContent&&"hide-content"},[a("span",{ref:"contentText",staticClass:"ft26 content-text"},[t._v(t._s(t.projectItem.description))])]),t.isShowExpand?a("v-uni-view",{staticClass:"expand center-flex",on:{click:function(e){e.stopPropagation(),arguments[0]=e=t.$handleEvent(e),t.onExpandContent.apply(void 0,arguments)}}},[a("v-uni-text",{staticClass:"ft24 color-e32417"},[t._v("...展开")])],1):t._e()],1)])])},n=[]},2144:function(t,e,a){var o=a("4bad");e=o(!1),e.push([t.i,'@charset "UTF-8";\n/* uni.scss */\n/* 页面左右间距 */\n/* 文字尺寸 */\n/*文字颜色*/\n/* 图片加载中颜色 */\n/* 行为相关颜色 */\n/* 边框颜色 */.color-primary[data-v-2418d184]{color:#3049c0}.color-333[data-v-2418d184]{color:#333}.color-666[data-v-2418d184]{color:#666}.color-999[data-v-2418d184]{color:#999}.bg-color[data-v-2418d184]{background-color:#f7f7f7}.bg-white[data-v-2418d184]{background-color:#fff}.white-color[data-v-2418d184]{color:#fff}.primary-color[data-v-2418d184]{color:#f54400}.success-color[data-v-2418d184]{color:#0e130f}.warning-color[data-v-2418d184]{color:#f0ad4e}.error-color[data-v-2418d184]{color:#dd524d}.primary-text[data-v-2418d184]{color:#333}.secondary-text[data-v-2418d184]{color:#666}.tip-text[data-v-2418d184]{color:#999}.color-e32417[data-v-2418d184]{color:#e32417}',""]),t.exports=e},2495:function(t,e,a){var o=a("74aa");"string"===typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);var r=a("4f06").default;r("735cf8d8",o,!0,{sourceMap:!1,shadowMode:!1})},"253c":function(t,e,a){var o=a("bffc");"string"===typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);var r=a("4f06").default;r("d5dac0fa",o,!0,{sourceMap:!1,shadowMode:!1})},"27f6":function(t,e,a){"use strict";var o=a("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=o(a("5530"));a("d81d");var n=o(a("824d")),i=o(a("9cce")),c={name:"index",methods:{onBlockItem:function(t){var e=t.plotOrgId,a=t.communityOrgId;this.navigateTo(e,a)},navigateTo:function(t,e){uni.navigateTo({url:"/pages/steward/4neighbours/List?id="+t+"&communityOrgId="+e})},handleListTop:function(){console.log(this.$refs.list.$el),this.listTop=this.$refs.list.$el.offsetTop+"px"},getList:function(){var t=this;this.$api.findJourneyGoodHelperProjectList().then((function(e){e.isError?t.$message.error(e.message):(e.content&&e.content[0]&&(t.list=e.content.map((function(t){return(0,r.default)({tip:t.streetOrgName},t)}))),t.$nextTick((function(){t.handleListTop()})))}))}},data:function(){return{listTop:"",list:[]}},onLoad:function(){this.getList()},components:{BlockItem:n.default,ProjectList:i.default}};e.default=c},2863:function(t,e,a){"use strict";a.r(e);var o=a("27f6"),r=a.n(o);for(var n in o)["default"].indexOf(n)<0&&function(t){a.d(e,t,(function(){return o[t]}))}(n);e["default"]=r.a},"2f27c":function(t,e,a){"use strict";a.d(e,"b",(function(){return r})),a.d(e,"c",(function(){return n})),a.d(e,"a",(function(){return o}));var o={mescrollUni:a("f05e").default,empty:a("b800").default},r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"good-helper-wrap"},[a("mescroll-uni",{ref:"mescrollRef",staticClass:"mescroll-wrap",attrs:{up:t.upOption,top:t.top},on:{init:function(e){arguments[0]=e=t.$handleEvent(e),t.mescrollInit.apply(void 0,arguments)},down:function(e){arguments[0]=e=t.$handleEvent(e),t.downCallback.apply(void 0,arguments)},up:function(e){arguments[0]=e=t.$handleEvent(e),t.upCallback.apply(void 0,arguments)}}},[[a("div",{directives:[{name:"show",rawName:"v-show",value:t.listData.length>0,expression:"listData.length > 0"}],staticClass:"list"},t._l(t.listData,(function(e,o){return a("project-item",{key:o,attrs:{"project-item":e,"show-border":o<t.listData.length-1,isHome:!0},on:{onReceive:function(e){arguments[0]=e=t.$handleEvent(e),t.onReceive.apply(void 0,arguments)}}})})),1),a("empty",{directives:[{name:"show",rawName:"v-show",value:0===t.listData.length,expression:"listData.length === 0"}]})]],2)],1)},n=[]},"4d37":function(t,e,a){var o=a("4bad");e=o(!1),e.push([t.i,'@charset "UTF-8";\n/* uni.scss */\n/* 页面左右间距 */\n/* 文字尺寸 */\n/*文字颜色*/\n/* 图片加载中颜色 */\n/* 行为相关颜色 */\n/* 边框颜色 */.color-primary[data-v-7b0bea7a]{color:#3049c0}.color-333[data-v-7b0bea7a]{color:#333}.color-666[data-v-7b0bea7a]{color:#666}.color-999[data-v-7b0bea7a]{color:#999}.bg-color[data-v-7b0bea7a]{background-color:#f7f7f7}.bg-white[data-v-7b0bea7a]{background-color:#fff}.white-color[data-v-7b0bea7a]{color:#fff}.primary-color[data-v-7b0bea7a]{color:#f54400}.success-color[data-v-7b0bea7a]{color:#0e130f}.warning-color[data-v-7b0bea7a]{color:#f0ad4e}.error-color[data-v-7b0bea7a]{color:#dd524d}.primary-text[data-v-7b0bea7a]{color:#333}.secondary-text[data-v-7b0bea7a]{color:#666}.tip-text[data-v-7b0bea7a]{color:#999}.color-e32417[data-v-7b0bea7a]{color:#e32417}.porject-item-wrap .receive-btn[data-v-7b0bea7a]{width:%?128?%;height:%?56?%;line-height:%?56?%;border-radius:%?30?%;border:solid 1px #e32417}.porject-item-wrap .name[data-v-7b0bea7a]{max-width:%?520?%}.porject-item-wrap .content[data-v-7b0bea7a]{position:relative}.porject-item-wrap .content .content-box[data-v-7b0bea7a]{width:100%}.porject-item-wrap .content .content-box .content-text[data-v-7b0bea7a]{line-height:%?38?%}.porject-item-wrap .content .hide-content[data-v-7b0bea7a]{max-height:%?80?%;display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:2;overflow:hidden}.porject-item-wrap .content .expand[data-v-7b0bea7a]{position:absolute;right:%?-8?%;bottom:%?4?%;width:%?90?%;height:%?35?%;background:#fff;letter-spacing:%?2?%}',""]),t.exports=e},"50e6":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,a("99af");var o={name:"projectItem",methods:{onDetail:function(){uni.navigateTo({url:"/pages/steward/3helper/project-detail/index?id=".concat(this.projectItem.id,"&entrance=helper")})},onReceive:function(){var t=this.projectItem.id;this.$emit("onReceive",t)},onExpandContent:function(){this.isShowExpand=!1,this.isHideContent=!1},calculationHeight:function(){var t=this.$refs.contentBox.offsetHeight,e=this.$refs.contentText.offsetHeight;this.isShowExpand=e>t}},props:{isHome:Boolean,isUnitUser:Boolean,projectItem:Object,showBorder:Boolean},data:function(){return{isShowExpand:!1,isHideContent:!0}},computed:{isShowReceiveBtn:function(){var t=this.projectItem.status;return this.isUnitUser&&1===t},projectLeadName:function(){var t=this.projectItem.journeyHelperProjectLeadRecordList;return t?t.length>1?"由共建单位联合领办":"由".concat(t[0].journeyCoConstructionUnitName,"领办"):""},projectReleaseName:function(){var t=this.projectItem,e=t.communityParentOrgName,a=t.communityOrgName;return"".concat(e).concat(a)},startTime:function(){var t=this.projectItem,e=t.status,a=t.createTime,o=t.leadTime,r=1===e?a:o,n=1===e?"发布":"领办";return this.$moment(r).format("YYYY-MM-DD")+n},endTime:function(){if(!this.isHome)return"";var t=this.projectItem.expiredTime,e=t-(new Date).getTime(),a=e%864e5,o=a%36e5,r=Math.floor(e/864e5),n=Math.floor(a/36e5),i=Math.floor(o/6e4),c="";return r&&(c+=r+"天"),n&&(c+=n+"小时"),r||(c+=i+"分"),c+"后转入领办大厅"},statusIcon:function(){return{icon:"icon_yibanjie",color:"#F54000"}}},mounted:function(){var t=this;this.$nextTick((function(){t.calculationHeight()}))},created:function(){}};e.default=o},"52b9":function(t,e,a){"use strict";var o=a("a5b4"),r=a.n(o);r.a},"627a":function(t,e,a){"use strict";var o=a("6de1"),r=a.n(o);r.a},"6de1":function(t,e,a){var o=a("2144");"string"===typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);var r=a("4f06").default;r("6f3b3931",o,!0,{sourceMap:!1,shadowMode:!1})},7337:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,a("a9e3");var o={name:"BlockItem",methods:{onItem:function(t){this.$emit("onBlockItem",t)}},props:{title:String,list:Array,bgClass:String,type:[String,Number]}};e.default=o},"74aa":function(t,e,a){var o=a("4bad"),r=a("ffbf"),n=a("cc03"),i=a("a46a");e=o(!1);var c=r(n),s=r(i);e.push([t.i,'@charset "UTF-8";\n/* uni.scss */\n/* 页面左右间距 */\n/* 文字尺寸 */\n/*文字颜色*/\n/* 图片加载中颜色 */\n/* 行为相关颜色 */\n/* 边框颜色 */.color-primary[data-v-13516480]{color:#3049c0}.color-333[data-v-13516480]{color:#333}.color-666[data-v-13516480]{color:#666}.color-999[data-v-13516480]{color:#999}.bg-color[data-v-13516480]{background-color:#f7f7f7}.bg-white[data-v-13516480]{background-color:#fff}.white-color[data-v-13516480]{color:#fff}.primary-color[data-v-13516480]{color:#f54400}.success-color[data-v-13516480]{color:#0e130f}.warning-color[data-v-13516480]{color:#f0ad4e}.error-color[data-v-13516480]{color:#dd524d}.primary-text[data-v-13516480]{color:#333}.secondary-text[data-v-13516480]{color:#666}.tip-text[data-v-13516480]{color:#999}.color-e32417[data-v-13516480]{color:#e32417}.good-helper-wrap .header .link[data-v-13516480]{width:%?331?%;height:%?180?%;border-radius:%?16?%;box-sizing:border-box;padding:%?26?%;box-shadow:0 %?5?% %?15?% 0 rgba(0,0,0,.1)}.good-helper-wrap .header .link-jointly[data-v-13516480]{background:url('+c+") no-repeat 0 0;background-size:100% 100%}.good-helper-wrap .header .link-hall[data-v-13516480]{background:url("+s+") no-repeat 0 0;background-size:100% 100%}.good-helper-wrap .address[data-v-13516480]{height:%?79?%;border-radius:%?16?%;background:#e8f0ff}",""]),t.exports=e},"7ea6":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o={data:function(){return{mescroll:null}},onPullDownRefresh:function(){this.mescroll&&this.mescroll.onPullDownRefresh()},onPageScroll:function(t){this.mescroll&&this.mescroll.onPageScroll(t)},onReachBottom:function(){this.mescroll&&this.mescroll.onReachBottom()},methods:{mescrollInit:function(t){this.mescroll=t,this.mescrollInitByRef()},mescrollInitByRef:function(){if(!this.mescroll||!this.mescroll.resetUpScroll){var t=this.$refs.mescrollRef;t&&(this.mescroll=t.mescroll)}},downCallback:function(){var t=this;this.mescroll.optUp.use?this.mescroll.resetUpScroll():setTimeout((function(){t.mescroll.endSuccess()}),500)},upCallback:function(){var t=this;setTimeout((function(){t.mescroll.endErr()}),500)}},mounted:function(){this.mescrollInitByRef()}},r=o;e.default=r},"7f5c":function(t,e,a){"use strict";a.r(e);var o=a("7337"),r=a.n(o);for(var n in o)["default"].indexOf(n)<0&&function(t){a.d(e,t,(function(){return o[t]}))}(n);e["default"]=r.a},"824a":function(t,e,a){"use strict";a.r(e);var o=a("50e6"),r=a.n(o);for(var n in o)["default"].indexOf(n)<0&&function(t){a.d(e,t,(function(){return o[t]}))}(n);e["default"]=r.a},"824d":function(t,e,a){"use strict";a.r(e);var o=a("cd59"),r=a("7f5c");for(var n in r)["default"].indexOf(n)<0&&function(t){a.d(e,t,(function(){return r[t]}))}(n);a("843c");var i,c=a("f0c5"),s=Object(c["a"])(r["default"],o["b"],o["c"],!1,null,"6a1a8136",null,!1,o["a"],i);e["default"]=s.exports},"843c":function(t,e,a){"use strict";var o=a("0739"),r=a.n(o);r.a},"8d97":function(t,e,a){"use strict";var o=a("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,a("99af");var r=o(a("7ea6")),n=o(a("f05e")),i=o(a("bb16")),c={mixins:[r.default],components:{ProjectItem:i.default,MescrollUni:n.default},methods:{onReceive:function(t){if(this.$notMember())return this.$goLogin();this.$refs.receivePop.show({projectId:t,unitIds:this.unitIds})},upCallback:function(t){this.getJourneyHelperProjectShowPage(t),this.mescroll.endErr()},downCallback:function(){this.mescroll.resetUpScroll()},getJourneyHelperProjectShowPage:function(t){var e=this,a={pageNumber:t&&t.num||1,pageSize:t&&t.size||10,type:4};this.$api.getJourneyHelperProjectShowPage(a).then((function(t){if(t.isError)return e.mescroll.endErr();var o=t.content,r=o.items,n=o.count;e.mescroll.endBySize(r.length,n),e.listData=1===a.pageNumber?r:e.listData.concat(r)}))}},props:{top:String},created:function(){this.getJourneyHelperProjectShowPage()},data:function(){return{upOption:{empty:{use:!1},textNoMore:""},listData:[]}}};e.default=c},"9cce":function(t,e,a){"use strict";a.r(e);var o=a("2f27c"),r=a("be5e");for(var n in r)["default"].indexOf(n)<0&&function(t){a.d(e,t,(function(){return r[t]}))}(n);a("16e0"),a("d77a");var i,c=a("f0c5"),s=Object(c["a"])(r["default"],o["b"],o["c"],!1,null,"13516480",null,!1,o["a"],i);e["default"]=s.exports},a46a:function(t,e,a){t.exports=a.p+"static/img/bg-hall.65abdb6a.png"},a5b4:function(t,e,a){var o=a("4d37");"string"===typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);var r=a("4f06").default;r("11510262",o,!0,{sourceMap:!1,shadowMode:!1})},bb16:function(t,e,a){"use strict";a.r(e);var o=a("1a3f"),r=a("824a");for(var n in r)["default"].indexOf(n)<0&&function(t){a.d(e,t,(function(){return r[t]}))}(n);a("52b9");var i,c=a("f0c5"),s=Object(c["a"])(r["default"],o["b"],o["c"],!1,null,"7b0bea7a",null,!1,o["a"],i);e["default"]=s.exports},be27:function(t,e,a){var o=a("4bad");e=o(!1),e.push([t.i,'@charset "UTF-8";\n/* uni.scss */\n/* 页面左右间距 */\n/* 文字尺寸 */\n/*文字颜色*/\n/* 图片加载中颜色 */\n/* 行为相关颜色 */\n/* 边框颜色 */.color-primary[data-v-6a1a8136]{color:#3049c0}.color-333[data-v-6a1a8136]{color:#333}.color-666[data-v-6a1a8136]{color:#666}.color-999[data-v-6a1a8136]{color:#999}.bg-color[data-v-6a1a8136]{background-color:#f7f7f7}.bg-white[data-v-6a1a8136]{background-color:#fff}.white-color[data-v-6a1a8136]{color:#fff}.primary-color[data-v-6a1a8136]{color:#f54400}.success-color[data-v-6a1a8136]{color:#0e130f}.warning-color[data-v-6a1a8136]{color:#f0ad4e}.error-color[data-v-6a1a8136]{color:#dd524d}.primary-text[data-v-6a1a8136]{color:#333}.secondary-text[data-v-6a1a8136]{color:#666}.tip-text[data-v-6a1a8136]{color:#999}.color-e32417[data-v-6a1a8136]{color:#e32417}div[data-v-6a1a8136]{box-sizing:border-box}.block-item-wrap[data-v-6a1a8136]{padding:%?30?%}.block-item-wrap .item-wrap[data-v-6a1a8136]{-webkit-flex-wrap:wrap;flex-wrap:wrap}.block-item-wrap .item-wrap .item[data-v-6a1a8136]{width:%?334?%;padding:%?24?%;border-radius:%?8?%}.block1[data-v-6a1a8136]{background-image:-webkit-linear-gradient(44deg,#ff7f2b,#ff721a 87%);background-image:linear-gradient(46deg,#ff7f2b,#ff721a 87%);color:#ffb88c}.block2[data-v-6a1a8136]{background-image:-webkit-linear-gradient(225deg,#0079ff,#2ea5ff 87%);background-image:linear-gradient(225deg,#0079ff,#2ea5ff 87%);color:#8dc9ff}.block4[data-v-6a1a8136]{background-image:-webkit-linear-gradient(308deg,#fbae29,#fca213);background-image:linear-gradient(142deg,#fbae29,#fca213);color:#fddba3}.block5[data-v-6a1a8136]{background-image:-webkit-linear-gradient(44deg,#fd6616,#f5450c);background-image:linear-gradient(46deg,#fd6616,#f5450c);color:#fba987}',""]),t.exports=e},be5e:function(t,e,a){"use strict";a.r(e);var o=a("8d97"),r=a.n(o);for(var n in o)["default"].indexOf(n)<0&&function(t){a.d(e,t,(function(){return o[t]}))}(n);e["default"]=r.a},bffc:function(t,e,a){var o=a("4bad");e=o(!1),e.push([t.i,"uni-page-body[data-v-13516480]{height:100%}",""]),t.exports=e},c442:function(t,e,a){"use strict";a.r(e);var o=a("ec5d"),r=a("2863");for(var n in r)["default"].indexOf(n)<0&&function(t){a.d(e,t,(function(){return r[t]}))}(n);a("627a");var i,c=a("f0c5"),s=Object(c["a"])(r["default"],o["b"],o["c"],!1,null,"2418d184",null,!1,o["a"],i);e["default"]=s.exports},cc03:function(t,e,a){t.exports=a.p+"static/img/bg-jointly.2723d081.png"},cd59:function(t,e,a){"use strict";var o;a.d(e,"b",(function(){return r})),a.d(e,"c",(function(){return n})),a.d(e,"a",(function(){return o}));var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"block-item-wrap"},[t.$isEmpty(t.list)?t._e():a("div",{staticClass:"ft32 bold mb24"},[t._v(t._s(t.title))]),a("div",{staticClass:"item-wrap between-row"},t._l(t.list,(function(e,o){return a("div",{key:o,staticClass:"item mb16",class:t.bgClass,on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.onItem(e)}}},[a("div",{staticClass:"center-align between-row"},[a("div",{staticClass:"ft28",staticStyle:{color:"#fff"}},[t._v(t._s(e.name))]),a("svg-icon",{staticClass:"ft20",attrs:{icon:"icon_xiangyoujiantou"}})],1),a("div",{staticClass:"address ft24 mt16"},[t._v(t._s(e.tip))])])})),0)])},n=[]},d77a:function(t,e,a){"use strict";var o=a("2495"),r=a.n(o);r.a},ec5d:function(t,e,a){"use strict";var o;a.d(e,"b",(function(){return r})),a.d(e,"c",(function(){return n})),a.d(e,"a",(function(){return o}));var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"branch-wrap"},[a("BlockItem",{attrs:{title:"好案例",list:t.list,type:"5",bgClass:"block5"},on:{onBlockItem:function(e){arguments[0]=e=t.$handleEvent(e),t.onBlockItem.apply(void 0,arguments)}}}),a("div",{staticClass:"ft32 bold pl32 pb28 bb"},[t._v("已办结项目")]),a("ProjectList",{ref:"list",attrs:{top:t.listTop}})],1)},n=[]},ffbf:function(t,e,a){"use strict";t.exports=function(t,e){return e||(e={}),t=t&&t.__esModule?t.default:t,"string"!==typeof t?t:(/^['"].*['"]$/.test(t)&&(t=t.slice(1,-1)),e.hash&&(t+=e.hash),/["'() \t\n]/.test(t)||e.needQuotes?'"'.concat(t.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):t)}}}]);