(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-union-graphic-detail"],{"21eb":function(t,a,e){var o=e("4bad");a=o(!1),a.push([t.i,"uni-page-body[data-v-0752b0f8]{height:100%;background:#fff}body.?%PAGE?%[data-v-0752b0f8]{background:#fff}",""]),t.exports=a},2481:function(t,a,e){var o=e("6452");"string"===typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);var i=e("4f06").default;i("2101e3d2",o,!0,{sourceMap:!1,shadowMode:!1})},6452:function(t,a,e){var o=e("4bad");a=o(!1),a.push([t.i,'@charset "UTF-8";\n/* uni.scss */\n/* 页面左右间距 */\n/* 文字尺寸 */\n/*文字颜色*/\n/* 图片加载中颜色 */\n/* 行为相关颜色 */\n/* 边框颜色 */.color-333[data-v-0752b0f8]{color:#333}.color-666[data-v-0752b0f8]{color:#666}.color-999[data-v-0752b0f8]{color:#999}.bg-color[data-v-0752b0f8]{background-color:#f7f7f7}.bg-white[data-v-0752b0f8]{background-color:#fff}.white-color[data-v-0752b0f8]{color:#fff}.primary-color[data-v-0752b0f8]{color:#f54400}.success-color[data-v-0752b0f8]{color:#0e130f}.warning-color[data-v-0752b0f8]{color:#f0ad4e}.error-color[data-v-0752b0f8]{color:#dd524d}.primary-text[data-v-0752b0f8]{color:#333}.secondary-text[data-v-0752b0f8]{color:#666}.tip-text[data-v-0752b0f8]{color:#999}.color-e32417[data-v-0752b0f8]{color:#e32417}.detail-wrap[data-v-0752b0f8]{color:#333}.detail-wrap .video[data-v-0752b0f8]{width:100%;height:%?560?%}.detail-wrap .type-01 img[data-v-0752b0f8]{width:100%;height:100%}.detail-wrap .type-03 .img-list[data-v-0752b0f8]{-webkit-flex-wrap:wrap;flex-wrap:wrap}.detail-wrap .type-03 .img-list .img-item[data-v-0752b0f8]{width:%?336?%;height:%?336?%;border-radius:%?8?%}',""]),t.exports=a},"80e8":function(t,a,e){var o=e("21eb");"string"===typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);var i=e("4f06").default;i("017f7e16",o,!0,{sourceMap:!1,shadowMode:!1})},8188:function(t,a,e){"use strict";var o=e("2481"),i=e.n(o);i.a},8659:function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0,e("d81d");var o={name:"name",methods:{onShowBigImgView:function(t){var a=this,e=this.baseInfo.photoWallList.map((function(t){return a.$fileHost+t.imageUrl}));uni.previewImage({urls:e,current:t})},getGraphicInfoById:function(){var t=this,a={id:this.id};this.$api.getGraphicInfoById(a).then((function(a){if(a.isError)return t.$msg(a.message);t.baseInfo=a.content}))}},data:function(){return{baseInfo:{}}},onLoad:function(t){this.id=t.id,this.getGraphicInfoById()}};a.default=o},a3d7:function(t,a,e){"use strict";var o;e.d(a,"b",(function(){return i})),e.d(a,"c",(function(){return n})),e.d(a,"a",(function(){return o}));var i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return t.baseInfo.orgId?e("div",{staticClass:"detail-wrap"},["04"===t.baseInfo.contentType?e("v-uni-video",{staticClass:"video",attrs:{id:"video",src:t.baseInfo.videoLinkUrl,"enable-progress-gesture":!0,"auto-pause-if-navigate":!0,"page-gesture":!0,controls:!0}}):t._e(),e("div",{staticClass:"title pt28 pl30 pr30"},[e("div",{staticClass:"ft36 mb20 bold"},[t._v(t._s(t.baseInfo.title))]),e("div",{staticClass:"ft26 color-666"},[e("span",{staticClass:"mr40"},[t._v(t._s(t.$moment(t.baseInfo.createTime).format("YYYY-MM-DD")))]),e("span",[t._v(t._s(t.baseInfo.orgName))])])]),e("div",{staticClass:"content mt30 pl30 pr30 pb30"},["03"===t.baseInfo.contentType||"04"===t.baseInfo.contentType?e("div",{staticClass:"ft30 mb20"},[t._v(t._s(t.baseInfo.digest))]):t._e(),"01"===t.baseInfo.contentType?e("div",{staticClass:"type-01",domProps:{innerHTML:t._s(t.baseInfo.content)}}):t._e(),"03"===t.baseInfo.contentType?e("div",{staticClass:"type-03"},[e("div",{staticClass:"img-list between-row"},t._l(t.baseInfo.photoWallList,(function(a,o){return e("div",{key:o,staticClass:"mb20",on:{click:function(a){a.stopPropagation(),arguments[0]=a=t.$handleEvent(a),t.onShowBigImgView(o)}}},[e("v-uni-image",{staticClass:"img-item",attrs:{mode:"aspectFill",src:t.$fileHost+a.imageUrl}})],1)})),0)]):t._e()])],1):t._e()},n=[]},ce0a:function(t,a,e){"use strict";var o=e("80e8"),i=e.n(o);i.a},f60b:function(t,a,e){"use strict";e.r(a);var o=e("8659"),i=e.n(o);for(var n in o)["default"].indexOf(n)<0&&function(t){e.d(a,t,(function(){return o[t]}))}(n);a["default"]=i.a},f9e1:function(t,a,e){"use strict";e.r(a);var o=e("a3d7"),i=e("f60b");for(var n in i)["default"].indexOf(n)<0&&function(t){e.d(a,t,(function(){return i[t]}))}(n);e("ce0a"),e("8188");var r,s=e("f0c5"),f=Object(s["a"])(i["default"],o["b"],o["c"],!1,null,"0752b0f8",null,!1,o["a"],r);a["default"]=f.exports}}]);