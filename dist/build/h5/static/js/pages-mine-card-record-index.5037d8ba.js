(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-mine-card-record-index"],{"0394":function(t,i,a){"use strict";a.r(i);var e=a("2ce6"),n=a("883f");for(var r in n)["default"].indexOf(r)<0&&function(t){a.d(i,t,(function(){return n[t]}))}(r);a("7234");var o,c=a("f0c5"),d=Object(c["a"])(n["default"],e["b"],e["c"],!1,null,"1409a9b1",null,!1,e["a"],o);i["default"]=d.exports},"0416":function(t,i,a){"use strict";Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0,a("a9e3");var e={name:"u-loading",props:{mode:{type:String,default:"circle"},color:{type:String,default:"#c7c7c7"},size:{type:[String,Number],default:"34"},show:{type:Boolean,default:!0}},computed:{cricleStyle:function(){var t={};return t.width=this.size+"rpx",t.height=this.size+"rpx","circle"==this.mode&&(t.borderColor="#e4e4e4 #e4e4e4 #e4e4e4 ".concat(this.color?this.color:"#c7c7c7")),t}}};i.default=e},"1bfa":function(t,i,a){"use strict";a.r(i);var e=a("bf40"),n=a("6ef1");for(var r in n)["default"].indexOf(r)<0&&function(t){a.d(i,t,(function(){return n[t]}))}(r);a("8ae2");var o,c=a("f0c5"),d=Object(c["a"])(n["default"],e["b"],e["c"],!1,null,"636b7930",null,!1,e["a"],o);i["default"]=d.exports},"205d":function(t,i,a){var e=a("4bad");i=e(!1),i.push([t.i,'@charset "UTF-8";\n/* uni.scss */\n/* 页面左右间距 */\n/* 文字尺寸 */\n/*文字颜色*/\n/* 图片加载中颜色 */\n/* 行为相关颜色 */\n/* 边框颜色 */.color-333[data-v-1409a9b1]{color:#333}.color-666[data-v-1409a9b1]{color:#666}.color-999[data-v-1409a9b1]{color:#999}.bg-color[data-v-1409a9b1]{background-color:#f7f7f7}.bg-white[data-v-1409a9b1]{background-color:#fff}.white-color[data-v-1409a9b1]{color:#fff}.primary-color[data-v-1409a9b1]{color:#f54400}.success-color[data-v-1409a9b1]{color:#0e130f}.warning-color[data-v-1409a9b1]{color:#f0ad4e}.error-color[data-v-1409a9b1]{color:#dd524d}.primary-text[data-v-1409a9b1]{color:#333}.secondary-text[data-v-1409a9b1]{color:#666}.tip-text[data-v-1409a9b1]{color:#999}.color-e32417[data-v-1409a9b1]{color:#e32417}.card-record-wrap[data-v-1409a9b1]{color:#333}.card-record-wrap .head[data-v-1409a9b1]{width:100%;height:%?162?%;background-image:-webkit-linear-gradient(left,#ffdb5d 21%,#ffca00 96%);background-image:linear-gradient(90deg,#ffdb5d 21%,#ffca00 96%);-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center}.card-record-wrap .list[data-v-1409a9b1]{height:100%}.card-record-wrap .list .item[data-v-1409a9b1]{background:#fff;box-shadow:%?3?% %?2?% %?12?% %?8?% rgba(17,17,17,.03);border-radius:%?6?%}.card-record-wrap .list .item .num[data-v-1409a9b1]{width:%?48?%;height:%?48?%;line-height:%?48?%;border-radius:%?26?%;border:solid %?1?% #e1b406;color:#e1b406}.card-record-wrap .list .item .card-btn[data-v-1409a9b1]{min-width:%?160?%;height:100%;padding:0 %?8?%;border-left:solid %?1?% #eaeaea}.card-record-wrap .list .item .color-E32417[data-v-1409a9b1]{color:#e32417}',""]),t.exports=i},2909:function(t,i,a){"use strict";Object.defineProperty(i,"__esModule",{value:!0}),i.default=d;var e=c(a("6005")),n=c(a("db90")),r=c(a("06c5")),o=c(a("3427"));function c(t){return t&&t.__esModule?t:{default:t}}function d(t){return(0,e.default)(t)||(0,n.default)(t)||(0,r.default)(t)||(0,o.default)()}},"2ce6":function(t,i,a){"use strict";a.d(i,"b",(function(){return n})),a.d(i,"c",(function(){return r})),a.d(i,"a",(function(){return e}));var e={uLoading:a("1bfa").default},n=function(){var t=this,i=t.$createElement,a=t._self._c||i;return a("div",{staticClass:"card-record-wrap"},[a("div",{staticClass:"head column pl30 pr30",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.onStrokeOrder.apply(void 0,arguments)}}},[a("div",{staticClass:"mb20 medium center-align"},[a("span",{staticClass:"ft32"},[t._v("对应行程："+t._s(t.journeyItineraryName))]),a("svg-icon",{staticClass:"ft20 ml8 bold",attrs:{icon:"icon_xiangyoujiantou"}})],1),a("div",{staticClass:"ft24",staticStyle:{opacity:"0.6"}},[t._v("行程参与人数："+t._s(t.signUpQuantity)+"人")])]),t.myPoint?a("v-uni-scroll-view",{attrs:{"scroll-y":!0}},[a("div",{staticClass:"list pb48"},t._l(t.pointSignInList,(function(i,e){return a("div",{key:e,staticClass:"item mt20 ml30 mr30 pt24 pl24 pb24 center-align"},[a("div",{staticClass:"flex flex1"},[a("div",{staticClass:"num tc ft24 mr20"},[t._v(t._s(e+1))]),a("div",[a("div",{staticClass:"ft32 bold mb14"},[t._v(t._s(i.name))]),a("div",{staticClass:"ft24 mb8"},[t._v(t._s(i.address))]),a("div",{staticClass:"center-align color-999",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.onPersonnelCard(i)}}},[a("span",{staticClass:"ft24"},[t._v(t._s(i.signInQuantity)+"人已打卡，"+t._s(t.signUpQuantity-i.signInQuantity)+"人未打卡")]),a("svg-icon",{staticClass:"ft24 ml8",attrs:{icon:"icon_xiangxia"}})],1)])]),a("div",{staticClass:"card-btn center column",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.onCard(i)}}},[a("svg-icon",{class:t.cardBtnIcon(i).className,staticStyle:{"font-size":"48rpx"},attrs:{icon:t.cardBtnIcon(i).icon}}),a("div",{staticClass:"ft22 tc",class:t.cardBtnText(i).className},[t._v(t._s(t.cardBtnText(i).text))]),a("div",{staticClass:"ft20 color-999 tc"},[t._v("距你"+t._s(t.distanceText(i)||"--"))])],1)])})),0)]):a("div",{staticClass:"pt48"},[a("div",{staticClass:"center"},[a("u-loading",{attrs:{mode:"circle"}}),a("div",{staticClass:"ft28 color-999 ml16"},[t._v("正在获取位置信息...")])],1)])],1)},r=[]},3427:function(t,i,a){"use strict";function e(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}Object.defineProperty(i,"__esModule",{value:!0}),i.default=e},5809:function(t,i,a){var e=a("205d");"string"===typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);var n=a("4f06").default;n("948591e8",e,!0,{sourceMap:!1,shadowMode:!1})},"5f7a":function(t,i,a){var e=a("e96f");"string"===typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);var n=a("4f06").default;n("38adad2d",e,!0,{sourceMap:!1,shadowMode:!1})},6005:function(t,i,a){"use strict";Object.defineProperty(i,"__esModule",{value:!0}),i.default=r;var e=n(a("6b75"));function n(t){return t&&t.__esModule?t:{default:t}}function r(t){if(Array.isArray(t))return(0,e.default)(t)}},"67a5":function(t,i,a){"use strict";var e=a("4ea4");Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var n=e(a("2909")),r=e(a("5530"));a("99af"),a("d81d");var o=e(a("024c")),c=null,d={methods:{onStrokeOrder:function(){uni.navigateTo({url:"/pages/home/stroke-order/detail?id=".concat(this.id)})},onPersonnelCard:function(t){if(!(this.signUpQuantity<=0)){var i=t.id;uni.navigateTo({url:"/pages/mine/card-record/personnelCard?id=".concat(this.id,"&journeyPointId=").concat(i)})}},onCard:function(){var t=this,i=item,a=i.journeyPointId,e=i.distance;if(!(e>500)){var n={id:this.id,journeyPointId:a};this.$api.journeyItineraryPointSignIn(n).then((function(i){if(i.isError)return t.$msg(i.message);t.$msg("打卡成功"),t.getJourneyItinerarySignInById()}))}},getJourneyItinerarySignInById:function(t){var i=this,a={id:t};this.$api.getJourneyItinerarySignInById(a).then((function(t){if(t.isError)return i.$msg(t.message);var a=t.content,e=a.journeyItineraryName,n=a.signUpQuantity,r=a.pointSignInList;i.journeyItineraryName=e,i.signUpQuantity=n,i.pointSignInList=r||[]}))},initMyPoint:function(){var t=this;o.default.plugin("AMap.Geolocation",(function(){var i=new o.default.Geolocation({enableHighAccuracy:!0,timeout:1e4,buttonPosition:"RB"});i.getCurrentPosition((function(i,a){if(setTimeout(t.initMyPoint,6e4),"complete"==i){var e=a.position,n=e.lng,r=e.lat;t.myPoint=[n,r]}}))}))},setPointDistance:function(){var t=this,i=this.pointSignInList.map((function(i){var a=i.lng,e=i.lat,n=new o.default.LngLat(a,e,!0),c=Math.round(n.distance(t.myPoint))+"";return(0,r.default)((0,r.default)({},i),{},{distance:c})}));this.pointSignInList=(0,n.default)(i)}},data:function(){return{journeyItineraryName:"",signUpQuantity:0,pointSignInList:[],myPoint:null}},computed:{cardBtnIcon:function(){return function(t){var i=t.isSignIn,a=t.distance,e="icon_dakaline",n="color-E32417";return i&&(e="icon_daka"),(!a||a>500)&&(n="color-999"),{icon:e,className:n}}},cardBtnText:function(){return function(t){var i=t.isSignIn,a=t.distance,e="color-333",n="打卡";return i&&(n="已打卡",e="color-E32417"),(!a||a>500)&&(e="color-999"),{className:e,text:n}}},distanceText:function(){return function(t){var i=t.distance;return i>1e7?"还很远":i>1e3?Math.round(i/1e3)+"km":i+"m"}}},watch:{myPoint:{deep:!0,handler:function(){this.setPointDistance()}}},destroyed:function(){c&&clearTimeout(c)},onLoad:function(t){this.initMyPoint(),this.id=t.id,this.getJourneyItinerarySignInById(this.id)}};i.default=d},"6ef1":function(t,i,a){"use strict";a.r(i);var e=a("0416"),n=a.n(e);for(var r in e)["default"].indexOf(r)<0&&function(t){a.d(i,t,(function(){return e[t]}))}(r);i["default"]=n.a},7234:function(t,i,a){"use strict";var e=a("5809"),n=a.n(e);n.a},"883f":function(t,i,a){"use strict";a.r(i);var e=a("67a5"),n=a.n(e);for(var r in e)["default"].indexOf(r)<0&&function(t){a.d(i,t,(function(){return e[t]}))}(r);i["default"]=n.a},"8ae2":function(t,i,a){"use strict";var e=a("5f7a"),n=a.n(e);n.a},bf40:function(t,i,a){"use strict";var e;a.d(i,"b",(function(){return n})),a.d(i,"c",(function(){return r})),a.d(i,"a",(function(){return e}));var n=function(){var t=this,i=t.$createElement,a=t._self._c||i;return t.show?a("v-uni-view",{staticClass:"u-loading",class:"circle"==t.mode?"u-loading-circle":"u-loading-flower",style:[t.cricleStyle]}):t._e()},r=[]},db90:function(t,i,a){"use strict";function e(t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}Object.defineProperty(i,"__esModule",{value:!0}),i.default=e,a("a4d3"),a("e01a"),a("d3b7"),a("d28b"),a("3ca3"),a("ddb0"),a("a630")},e96f:function(t,i,a){var e=a("4bad");i=e(!1),i.push([t.i,'@charset "UTF-8";\n/* uni.scss */\n/* 页面左右间距 */\n/* 文字尺寸 */\n/*文字颜色*/\n/* 图片加载中颜色 */\n/* 行为相关颜色 */\n/* 边框颜色 */.color-333[data-v-636b7930]{color:#333}.color-666[data-v-636b7930]{color:#666}.color-999[data-v-636b7930]{color:#999}.bg-color[data-v-636b7930]{background-color:#f7f7f7}.bg-white[data-v-636b7930]{background-color:#fff}.white-color[data-v-636b7930]{color:#fff}.primary-color[data-v-636b7930]{color:#f54400}.success-color[data-v-636b7930]{color:#0e130f}.warning-color[data-v-636b7930]{color:#f0ad4e}.error-color[data-v-636b7930]{color:#dd524d}.primary-text[data-v-636b7930]{color:#333}.secondary-text[data-v-636b7930]{color:#666}.tip-text[data-v-636b7930]{color:#999}.color-e32417[data-v-636b7930]{color:#e32417}.u-loading-circle[data-v-636b7930]{display:-webkit-inline-box;display:-webkit-inline-flex;display:inline-flex;vertical-align:middle;width:%?28?%;height:%?28?%;background:0 0;border-radius:50%;border:2px solid;border-color:#e5e5e5 #e5e5e5 #e5e5e5 #8f8d8e;-webkit-animation:u-circle-data-v-636b7930 1s linear infinite;animation:u-circle-data-v-636b7930 1s linear infinite}.u-loading-flower[data-v-636b7930]{width:20px;height:20px;display:inline-block;vertical-align:middle;-webkit-animation:a 1s steps(12) infinite;animation:u-flower-data-v-636b7930 1s steps(12) infinite;background:transparent url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjAiIGhlaWdodD0iMTIwIiB2aWV3Qm94PSIwIDAgMTAwIDEwMCI+PHBhdGggZmlsbD0ibm9uZSIgZD0iTTAgMGgxMDB2MTAwSDB6Ii8+PHJlY3Qgd2lkdGg9IjciIGhlaWdodD0iMjAiIHg9IjQ2LjUiIHk9IjQwIiBmaWxsPSIjRTlFOUU5IiByeD0iNSIgcnk9IjUiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAgLTMwKSIvPjxyZWN0IHdpZHRoPSI3IiBoZWlnaHQ9IjIwIiB4PSI0Ni41IiB5PSI0MCIgZmlsbD0iIzk4OTY5NyIgcng9IjUiIHJ5PSI1IiB0cmFuc2Zvcm09InJvdGF0ZSgzMCAxMDUuOTggNjUpIi8+PHJlY3Qgd2lkdGg9IjciIGhlaWdodD0iMjAiIHg9IjQ2LjUiIHk9IjQwIiBmaWxsPSIjOUI5OTlBIiByeD0iNSIgcnk9IjUiIHRyYW5zZm9ybT0icm90YXRlKDYwIDc1Ljk4IDY1KSIvPjxyZWN0IHdpZHRoPSI3IiBoZWlnaHQ9IjIwIiB4PSI0Ni41IiB5PSI0MCIgZmlsbD0iI0EzQTFBMiIgcng9IjUiIHJ5PSI1IiB0cmFuc2Zvcm09InJvdGF0ZSg5MCA2NSA2NSkiLz48cmVjdCB3aWR0aD0iNyIgaGVpZ2h0PSIyMCIgeD0iNDYuNSIgeT0iNDAiIGZpbGw9IiNBQkE5QUEiIHJ4PSI1IiByeT0iNSIgdHJhbnNmb3JtPSJyb3RhdGUoMTIwIDU4LjY2IDY1KSIvPjxyZWN0IHdpZHRoPSI3IiBoZWlnaHQ9IjIwIiB4PSI0Ni41IiB5PSI0MCIgZmlsbD0iI0IyQjJCMiIgcng9IjUiIHJ5PSI1IiB0cmFuc2Zvcm09InJvdGF0ZSgxNTAgNTQuMDIgNjUpIi8+PHJlY3Qgd2lkdGg9IjciIGhlaWdodD0iMjAiIHg9IjQ2LjUiIHk9IjQwIiBmaWxsPSIjQkFCOEI5IiByeD0iNSIgcnk9IjUiIHRyYW5zZm9ybT0icm90YXRlKDE4MCA1MCA2NSkiLz48cmVjdCB3aWR0aD0iNyIgaGVpZ2h0PSIyMCIgeD0iNDYuNSIgeT0iNDAiIGZpbGw9IiNDMkMwQzEiIHJ4PSI1IiByeT0iNSIgdHJhbnNmb3JtPSJyb3RhdGUoLTE1MCA0NS45OCA2NSkiLz48cmVjdCB3aWR0aD0iNyIgaGVpZ2h0PSIyMCIgeD0iNDYuNSIgeT0iNDAiIGZpbGw9IiNDQkNCQ0IiIHJ4PSI1IiByeT0iNSIgdHJhbnNmb3JtPSJyb3RhdGUoLTEyMCA0MS4zNCA2NSkiLz48cmVjdCB3aWR0aD0iNyIgaGVpZ2h0PSIyMCIgeD0iNDYuNSIgeT0iNDAiIGZpbGw9IiNEMkQyRDIiIHJ4PSI1IiByeT0iNSIgdHJhbnNmb3JtPSJyb3RhdGUoLTkwIDM1IDY1KSIvPjxyZWN0IHdpZHRoPSI3IiBoZWlnaHQ9IjIwIiB4PSI0Ni41IiB5PSI0MCIgZmlsbD0iI0RBREFEQSIgcng9IjUiIHJ5PSI1IiB0cmFuc2Zvcm09InJvdGF0ZSgtNjAgMjQuMDIgNjUpIi8+PHJlY3Qgd2lkdGg9IjciIGhlaWdodD0iMjAiIHg9IjQ2LjUiIHk9IjQwIiBmaWxsPSIjRTJFMkUyIiByeD0iNSIgcnk9IjUiIHRyYW5zZm9ybT0icm90YXRlKC0zMCAtNS45OCA2NSkiLz48L3N2Zz4=) no-repeat;background-size:100%}@-webkit-keyframes u-flower-data-v-636b7930{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@keyframes u-flower-data-v-636b7930{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@-webkit-keyframes u-circle-data-v-636b7930{0%{-webkit-transform:rotate(0);transform:rotate(0)}100%{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}',""]),t.exports=i}}]);