(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-home-stroke-order-CustomPath"],{"0db5":function(t,a,e){"use strict";e.r(a);var n=e("0f68"),o=e("3935");for(var r in o)["default"].indexOf(r)<0&&function(t){e.d(a,t,(function(){return o[t]}))}(r);e("bd02");var i,c=e("f0c5"),d=Object(c["a"])(o["default"],n["b"],n["c"],!1,null,"71833736",null,!1,n["a"],i);a["default"]=d.exports},"0e54":function(t,a,e){"use strict";var n=e("f14f"),o=e.n(n);o.a},"0f68":function(t,a,e){"use strict";var n;e.d(a,"b",(function(){return o})),e.d(a,"c",(function(){return r})),e.d(a,"a",(function(){return n}));var o=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"num-list-wrap center-align between-row"},[e("div",{staticClass:"flex1 center-align"},[e("div",{staticClass:"column center-align"},[e("div",{staticClass:"line",class:0===t.currentIndex&&"hideLine"}),e("div",{staticClass:"circle center ft22"},[t._v(t._s(t.pointData.index+1))]),e("div",{staticClass:"line",class:t.currentIndex===t.lastIndex&&"hideLine"})]),e("div",{staticClass:"ft32 ml16 flex1"},[t._v(t._s(t.pointData.item.name))])]),e("div",{staticClass:"center-align"},[t._l(t.btns,(function(a,n){return["up"===a.type&&0===t.currentIndex||"down"===a.type&&t.currentIndex===t.lastIndex?t._e():e("div",{key:n,staticClass:"btn center ml16",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.onBtn(a.type)}}},[e("div",{staticClass:"ml8 color-666"},[t._v(t._s(a.text))])])]}))],2)])},r=[]},"15e8":function(t,a,e){"use strict";e.r(a);var n=e("40da"),o=e("9518");for(var r in o)["default"].indexOf(r)<0&&function(t){e.d(a,t,(function(){return o[t]}))}(r);e("c5ea");var i,c=e("f0c5"),d=Object(c["a"])(o["default"],n["b"],n["c"],!1,null,"480a559e",null,!1,n["a"],i);a["default"]=d.exports},1989:function(t,a,e){var n=e("4bad");a=n(!1),a.push([t.i,'@charset "UTF-8";\n/* uni.scss */\n/* 页面左右间距 */\n/* 文字尺寸 */\n/*文字颜色*/\n/* 图片加载中颜色 */\n/* 行为相关颜色 */\n/* 边框颜色 */.color-333[data-v-71833736]{color:#333}.color-666[data-v-71833736]{color:#666}.color-999[data-v-71833736]{color:#999}.bg-color[data-v-71833736]{background-color:#f7f7f7}.bg-white[data-v-71833736]{background-color:#fff}.white-color[data-v-71833736]{color:#fff}.primary-color[data-v-71833736]{color:#f54400}.success-color[data-v-71833736]{color:#0e130f}.warning-color[data-v-71833736]{color:#f0ad4e}.error-color[data-v-71833736]{color:#dd524d}.primary-text[data-v-71833736]{color:#333}.secondary-text[data-v-71833736]{color:#666}.tip-text[data-v-71833736]{color:#999}.color-e32417[data-v-71833736]{color:#e32417}.num-list-wrap[data-v-71833736]{padding:0 %?32?%}.num-list-wrap .line[data-v-71833736]{border-left:1px solid #ffd53d;width:1px;height:%?40?%}.num-list-wrap .hideLine[data-v-71833736]{border-color:transparent}.num-list-wrap .circle[data-v-71833736]{background:#feffff;border:1px solid #e1b406;height:%?40?%;width:%?40?%;border-radius:%?22?%;color:#e1b406}.num-list-wrap .btn[data-v-71833736]{border:1px solid #dcdcdc;border-radius:%?28?%;width:%?100?%;height:%?56?%;font-size:%?26?%}',""]),t.exports=a},"34fc":function(t,a,e){"use strict";e.r(a);var n=e("cf6c"),o=e.n(n);for(var r in n)["default"].indexOf(r)<0&&function(t){e.d(a,t,(function(){return n[t]}))}(r);a["default"]=o.a},3935:function(t,a,e){"use strict";e.r(a);var n=e("b0d3"),o=e.n(n);for(var r in n)["default"].indexOf(r)<0&&function(t){e.d(a,t,(function(){return n[t]}))}(r);a["default"]=o.a},"3ad2":function(t,a,e){"use strict";var n=e("4ea4");Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0,e("4160"),e("159b"),e("a434");var o=n(e("548c")),r=n(e("0db5")),i=e("b893"),c={name:"CustomPath",methods:{onConfirmCreateCustomPath:function(){uni.$emit("setJourneyPointListEvent",this.points);var t=getCurrentPages();t.forEach((function(t,a){"pages/home/stroke-order/index"===t.route&&uni.navigateBack({delta:a})}))},onHandlePoints:function(t,a){if("del"===t)return this.points.splice(a,1),void this.$store.commit("travel/CUSTOM_PATH_POINTS",this.points);var e="up"===t?a-1:a+1;this.points=(0,i.swapArr)(this.points,a,e),this.$store.commit("travel/CUSTOM_PATH_POINTS",this.points)},onAddRedPoints:function(){uni.navigateTo({url:"/pages/home/stroke-order/GetRedPoints"})}},watch:{"$store.state.travel.customPathPoints":{handler:function(t,a){console.log(t,a),t&&(this.points=JSON.parse(JSON.stringify(t)))},immediate:!0}},data:function(){return{points:[],mapInitObj:{resizeEnable:!0,zooms:[9,19],zoom:9,center:[119.365056,30.134302]}}},components:{Map:o.default,NumList:r.default}};a.default=c},"40da":function(t,a,e){"use strict";var n;e.d(a,"b",(function(){return o})),e.d(a,"c",(function(){return r})),e.d(a,"a",(function(){return n}));var o=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"custom-path-wrap relative"},[e("Map",{attrs:{mapInitObj:t.mapInitObj,mapClass:"mapVH50",points:t.points}}),e("div",{staticClass:"content"},[t._l(t.points,(function(a,n){return e("NumList",{key:n,attrs:{currentIndex:n,lastIndex:t.points.length-1,pointData:{item:a,index:n}},on:{onHandlePoints:function(a){arguments[0]=a=t.$handleEvent(a),t.onHandlePoints.apply(void 0,arguments)}}})})),e("div",{staticClass:"add-point-btn center",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.onAddRedPoints.apply(void 0,arguments)}}},[t._v("+添加红色地标")])],2),e("div",{staticClass:"btn-wrap bt center"},[e("div",{staticClass:"btn center bold",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.onConfirmCreateCustomPath.apply(void 0,arguments)}}},[t._v("确定")])])],1)},r=[]},4345:function(t,a,e){var n=e("1989");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var o=e("4f06").default;o("015b42ce",n,!0,{sourceMap:!1,shadowMode:!1})},"548c":function(t,a,e){"use strict";e.r(a);var n=e("6b8b"),o=e("34fc");for(var r in o)["default"].indexOf(r)<0&&function(t){e.d(a,t,(function(){return o[t]}))}(r);e("0e54");var i,c=e("f0c5"),d=Object(c["a"])(o["default"],n["b"],n["c"],!1,null,"3260f192",null,!1,n["a"],i);a["default"]=d.exports},"65de":function(t,a,e){var n=e("4bad");a=n(!1),a.push([t.i,'@charset "UTF-8";\n/* uni.scss */\n/* 页面左右间距 */\n/* 文字尺寸 */\n/*文字颜色*/\n/* 图片加载中颜色 */\n/* 行为相关颜色 */\n/* 边框颜色 */.color-333[data-v-480a559e]{color:#333}.color-666[data-v-480a559e]{color:#666}.color-999[data-v-480a559e]{color:#999}.bg-color[data-v-480a559e]{background-color:#f7f7f7}.bg-white[data-v-480a559e]{background-color:#fff}.white-color[data-v-480a559e]{color:#fff}.primary-color[data-v-480a559e]{color:#f54400}.success-color[data-v-480a559e]{color:#0e130f}.warning-color[data-v-480a559e]{color:#f0ad4e}.error-color[data-v-480a559e]{color:#dd524d}.primary-text[data-v-480a559e]{color:#333}.secondary-text[data-v-480a559e]{color:#666}.tip-text[data-v-480a559e]{color:#999}.color-e32417[data-v-480a559e]{color:#e32417}.custom-path-wrap[data-v-480a559e]{height:calc(100vh)}.custom-path-wrap .content[data-v-480a559e]{padding:%?20?% 0;overflow:scroll;position:absolute;left:0;right:0;bottom:%?121?%;height:42vh;background:#fff;box-shadow:0 %?-6?% %?17?% 0 rgba(0,0,0,.1);border-radius:%?30?% %?30?% 0 0;z-index:99}.custom-path-wrap .content .add-point-btn[data-v-480a559e]{color:#e32417;border:1px solid #e32417;border-radius:%?28?%;height:%?56?%;width:%?208?%;margin-left:%?90?%;margin-top:%?20?%}.custom-path-wrap .btn-wrap[data-v-480a559e]{position:absolute;left:0;right:0;bottom:0;height:%?120?%}.custom-path-wrap .btn-wrap .btn[data-v-480a559e]{font-size:%?32?%;background:#e32417;height:%?88?%;width:%?690?%;border-radius:49px;color:#fff}',""]),t.exports=a},"6b8b":function(t,a,e){"use strict";var n;e.d(a,"b",(function(){return o})),e.d(a,"c",(function(){return r})),e.d(a,"a",(function(){return n}));var o=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"map-wrap"},[e("div",{class:t.mapClass,attrs:{id:"map"}})])},r=[]},"8a96":function(t,a,e){var n=e("4bad");a=n(!1),a.push([t.i,'@charset "UTF-8";\n/* uni.scss */\n/* 页面左右间距 */\n/* 文字尺寸 */\n/*文字颜色*/\n/* 图片加载中颜色 */\n/* 行为相关颜色 */\n/* 边框颜色 */.color-333[data-v-3260f192]{color:#333}.color-666[data-v-3260f192]{color:#666}.color-999[data-v-3260f192]{color:#999}.bg-color[data-v-3260f192]{background-color:#f7f7f7}.bg-white[data-v-3260f192]{background-color:#fff}.white-color[data-v-3260f192]{color:#fff}.primary-color[data-v-3260f192]{color:#f54400}.success-color[data-v-3260f192]{color:#0e130f}.warning-color[data-v-3260f192]{color:#f0ad4e}.error-color[data-v-3260f192]{color:#dd524d}.primary-text[data-v-3260f192]{color:#333}.secondary-text[data-v-3260f192]{color:#666}.tip-text[data-v-3260f192]{color:#999}.color-e32417[data-v-3260f192]{color:#e32417}.map-wrap[data-v-3260f192]{position:relative}.map-wrap .mapVH60[data-v-3260f192]{width:100vw;height:60vh}.map-wrap .mapH400[data-v-3260f192]{width:92vw;height:%?400?%}.map-wrap .mapVH50[data-v-3260f192]{width:100vw;height:50vh}',""]),t.exports=a},9518:function(t,a,e){"use strict";e.r(a);var n=e("3ad2"),o=e.n(n);for(var r in n)["default"].indexOf(r)<0&&function(t){e.d(a,t,(function(){return n[t]}))}(r);a["default"]=o.a},aa2a:function(t,a,e){"use strict";var n=e("4ea4");Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0,e("ac1f"),e("841c");var o=n(e("024c")),r={data:function(){return{$amap:null}},methods:{drawDistrict:function(){var t=this;o.default.plugin("AMap.DistrictSearch",(function(){new o.default.DistrictSearch({extensions:"all",subdistrict:0}).search("临安区",(function(a,e){var n=[new o.default.LngLat(-360,90,!0),new o.default.LngLat(-360,-90,!0),new o.default.LngLat(360,-90,!0),new o.default.LngLat(360,90,!0)],r=e.districtList[0].boundaries,i=[n];i.push.apply(i,r);var c=new o.default.Polygon({pathL:i,strokeColor:"#FD9124",strokeWeight:1.5,fillColor:"rgba(10,133,238,0.28)"});c.setPath(i),t.$amap.add(c)}))}))}},mounted:function(){this.$amap=new o.default.Map("map",this.mapInitObj)}},i=r;a.default=i},b0d3:function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0,e("a9e3");var n={name:"NumList",methods:{onBtn:function(t){this.$emit("onHandlePoints",t,this.currentIndex)}},data:function(){return{btns:[{text:"上移",type:"up"},{text:"下移",type:"down"},{text:"删除",type:"del"}]}},props:{pointData:Object,currentIndex:[String,Number],lastIndex:[String,Number]}};a.default=n},bd02:function(t,a,e){"use strict";var n=e("4345"),o=e.n(n);o.a},c306:function(t,a,e){var n=e("65de");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var o=e("4f06").default;o("2dccd51f",n,!0,{sourceMap:!1,shadowMode:!1})},c5ea:function(t,a,e){"use strict";var n=e("c306"),o=e.n(n);o.a},cf6c:function(t,a,e){"use strict";var n=e("4ea4");Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0,e("26e9"),e("4160"),e("159b"),e("d81d");var o=n(e("aa2a")),r=n(e("024c")),i=null,c={name:"index",methods:{drawMarker:function(){var t=this,a=new r.default.Icon({size:new r.default.Size(23,38),image:e("f023"),imageSize:new r.default.Size(23,38)}),n=JSON.parse(JSON.stringify(this.points));n.reverse(),i=new r.default.OverlayGroup,n.forEach((function(e,o){var c=new r.default.Marker({position:new r.default.LngLat(e.lng,e.lat),map:t.$amap,animation:"AMAP_ANIMATION_DROP",icon:a,touchZoom:!1}),d='<div style="color:#ffffff;width:22px;text-align:center;margin-top:2px;font-size:11px">'.concat(n.length-o,"</div>");new r.default.Marker({position:new r.default.LngLat(e.lng,e.lat),map:t.$amap,animation:"AMAP_ANIMATION_DROP",content:d,touchZoom:!1}),i.addOverlay(c),c.setExtData(e),c.on("click",t.markerClick)}))},markerClick:function(t){if(this.needClick){var a=t.target.getExtData();uni.navigateTo({url:"/pages/home/introduction/index?journeyPointId=".concat(a.journeyPointId)})}},drawPath:function(){var t=this.points.map((function(t){return new r.default.LngLat(t.lng,t.lat)})),a=new r.default.Polyline({path:t,showDir:!0,strokeWeight:5,strokeColor:"#FC5E51",lineJoin:"round",map:this.$amap});i.addOverlay(a),this.$amap.add(a)}},watch:{points:function(){i&&(i.hide(),i.clearOverlays()),this.drawMarker(),this.drawPath()}},props:{points:Array,needClick:{type:[Boolean,String],default:!1},mapClass:{type:String},mapInitObj:{type:Object}},mounted:function(){this.drawDistrict()},mixins:[o.default]};a.default=c},f023:function(t,a,e){t.exports=e.p+"static/img/travel_mark.ec7b4603.png"},f14f:function(t,a,e){var n=e("8a96");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var o=e("4f06").default;o("63e0ad92",n,!0,{sourceMap:!1,shadowMode:!1})}}]);