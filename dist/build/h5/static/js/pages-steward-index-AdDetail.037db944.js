(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-steward-index-AdDetail"],{3705:function(a,t,o){"use strict";var n=o("c44e"),e=o.n(n);e.a},5103:function(a,t,o){"use strict";var n;o.d(t,"b",(function(){return e})),o.d(t,"c",(function(){return c})),o.d(t,"a",(function(){return n}));var e=function(){var a=this,t=a.$createElement,o=a._self._c||t;return a.baseInfo?o("div",{staticClass:"announcement-detail-wrap"},[o("img",{attrs:{src:a.$fileHost+a.baseInfo.imgUrl}}),o("div",{staticClass:"pt28 pl30 pr30"},[o("div",{staticClass:"ft36 mb20 bold"},[a._v(a._s(a.baseInfo.title))]),o("div",{staticClass:"ft26 color-666"},[o("span",{staticClass:"mr40"},[a._v(a._s(a.$moment(a.baseInfo.createTime).format("YYYY-MM-DD")))]),o("span",[a._v(a._s(a.baseInfo.orgName))])])]),o("div",{staticClass:"content ft30 pl30 pr30 mt28"},[a._v(a._s(a.baseInfo.content))])]):a._e()},c=[]},"76a5":function(a,t,o){"use strict";o.r(t);var n=o("dcd9"),e=o.n(n);for(var c in n)["default"].indexOf(c)<0&&function(a){o.d(t,a,(function(){return n[a]}))}(c);t["default"]=e.a},"817b":function(a,t,o){"use strict";o.r(t);var n=o("5103"),e=o("76a5");for(var c in e)["default"].indexOf(c)<0&&function(a){o.d(t,a,(function(){return e[a]}))}(c);o("3705");var r,i=o("f0c5"),s=Object(i["a"])(e["default"],n["b"],n["c"],!1,null,"6aac7570",null,!1,n["a"],r);t["default"]=s.exports},"9e6b":function(a,t,o){var n=o("4bad");t=n(!1),t.push([a.i,'@charset "UTF-8";\n/* uni.scss */\n/* 页面左右间距 */\n/* 文字尺寸 */\n/*文字颜色*/\n/* 图片加载中颜色 */\n/* 行为相关颜色 */\n/* 边框颜色 */.color-primary[data-v-6aac7570]{color:#3049c0}.color-333[data-v-6aac7570]{color:#333}.color-666[data-v-6aac7570]{color:#666}.color-999[data-v-6aac7570]{color:#999}.bg-color[data-v-6aac7570]{background-color:#f7f7f7}.bg-white[data-v-6aac7570]{background-color:#fff}.white-color[data-v-6aac7570]{color:#fff}.primary-color[data-v-6aac7570]{color:#f54400}.success-color[data-v-6aac7570]{color:#0e130f}.warning-color[data-v-6aac7570]{color:#f0ad4e}.error-color[data-v-6aac7570]{color:#dd524d}.primary-text[data-v-6aac7570]{color:#333}.secondary-text[data-v-6aac7570]{color:#666}.tip-text[data-v-6aac7570]{color:#999}.color-e32417[data-v-6aac7570]{color:#e32417}.announcement-detail-wrap[data-v-6aac7570]{color:#333}.announcement-detail-wrap img[data-v-6aac7570]{width:100vw;height:%?370?%}.announcement-detail-wrap .content[data-v-6aac7570]{line-height:%?48?%}',""]),a.exports=t},c44e:function(a,t,o){var n=o("9e6b");"string"===typeof n&&(n=[[a.i,n,""]]),n.locals&&(a.exports=n.locals);var e=o("4f06").default;e("66aab644",n,!0,{sourceMap:!1,shadowMode:!1})},dcd9:function(a,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,o("d81d");var n={methods:{swiperChange:function(a){this.activeIndex=a.detail.current},onShowBigImgView:function(a){var t=this,o=this.baseInfo.attachmentList.map((function(a){var o=a.url;return t.$fileHost+o}));uni.previewImage({urls:o,current:a})}},data:function(){return{baseInfo:null,activeIndex:0}},onLoad:function(){this.baseInfo=JSON.parse(uni.getStorageSync("detail"))}};t.default=n}}]);