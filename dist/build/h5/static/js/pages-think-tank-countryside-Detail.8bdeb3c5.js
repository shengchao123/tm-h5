(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-think-tank-countryside-Detail"],{"099ac":function(t,a,e){var i=e("4bad");a=i(!1),a.push([t.i,'@charset "UTF-8";\n/* uni.scss */\n/* 页面左右间距 */\n/* 文字尺寸 */\n/*文字颜色*/\n/* 图片加载中颜色 */\n/* 行为相关颜色 */\n/* 边框颜色 */.color-primary[data-v-6b224a7a]{color:#3049c0}.color-333[data-v-6b224a7a]{color:#333}.color-666[data-v-6b224a7a]{color:#666}.color-999[data-v-6b224a7a]{color:#999}.bg-color[data-v-6b224a7a]{background-color:#f7f7f7}.bg-white[data-v-6b224a7a]{background-color:#fff}.white-color[data-v-6b224a7a]{color:#fff}.primary-color[data-v-6b224a7a]{color:#f54400}.success-color[data-v-6b224a7a]{color:#0e130f}.warning-color[data-v-6b224a7a]{color:#f0ad4e}.error-color[data-v-6b224a7a]{color:#dd524d}.primary-text[data-v-6b224a7a]{color:#333}.secondary-text[data-v-6b224a7a]{color:#666}.tip-text[data-v-6b224a7a]{color:#999}.color-e32417[data-v-6b224a7a]{color:#e32417}.detail-wrap[data-v-6b224a7a]{padding:%?24?% %?30?%}.detail-wrap .img[data-v-6b224a7a]{width:%?214?%;height:%?214?%;border-radius:%?8?%}.detail-wrap .attachment[data-v-6b224a7a]{width:%?686?%;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;color:#518cfc}',""]),t.exports=a},3796:function(t,a,e){"use strict";var i=e("7b28"),r=e.n(i);r.a},5173:function(t,a,e){"use strict";e.r(a);var i=e("e6df"),r=e("df65");for(var n in r)["default"].indexOf(n)<0&&function(t){e.d(a,t,(function(){return r[t]}))}(n);e("3796");var o,c=e("f0c5"),l=Object(c["a"])(r["default"],i["b"],i["c"],!1,null,"6b224a7a",null,!1,i["a"],o);a["default"]=l.exports},"7b28":function(t,a,e){var i=e("099ac");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var r=e("4f06").default;r("b047571e",i,!0,{sourceMap:!1,shadowMode:!1})},"91bc":function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0,e("baa5"),e("99af");var i={name:"Detail",data:function(){return{inductiveDetail:{}}},methods:{getShowAgricultureRelatedProjectsDetail:function(t){var a=this,e={id:t};this.$api.getShowAgricultureRelatedProjectsDetail(e).then((function(t){if(t.isError)return a.$msg(t.message);a.inductiveDetail=t.content}))},dowmload:function(t){var a=t.url.substring(t.url.lastIndexOf(".")+1);uni.navigateTo({url:"/pages/think-tank/countryside/attachmentPage?url=".concat(t.url,"&fileType=").concat(a)})}},onLoad:function(t){t.id&&this.getShowAgricultureRelatedProjectsDetail(t.id)}};a.default=i},baa5:function(t,a,e){var i=e("23e7"),r=e("e58c");i({target:"Array",proto:!0,forced:r!==[].lastIndexOf},{lastIndexOf:r})},df65:function(t,a,e){"use strict";e.r(a);var i=e("91bc"),r=e.n(i);for(var n in i)["default"].indexOf(n)<0&&function(t){e.d(a,t,(function(){return i[t]}))}(n);a["default"]=r.a},e6df:function(t,a,e){"use strict";var i;e.d(a,"b",(function(){return r})),e.d(a,"c",(function(){return n})),e.d(a,"a",(function(){return i}));var r=function(){var t=this,a=t.$createElement,e=t._self._c||a;return t.inductiveDetail.title?e("div",{staticClass:"detail-wrap"},[e("div",{staticClass:"ft40 bold mb24"},[t._v(t._s(t.inductiveDetail.title))]),e("div",{staticClass:"center-align ft26 color-666 mb24"},[e("div",{staticClass:"mr48"},[t._v(t._s(t.$moment(t.inductiveDetail.createTime).format("YYYY年MM月DD日")))]),e("div",[t._v(t._s(t.inductiveDetail.publishingDepartment))])]),e("div",{domProps:{innerHTML:t._s(t.inductiveDetail.content)}}),t.inductiveDetail.picList.length>0?e("div",{staticClass:"flex-wrap mt30"},t._l(t.inductiveDetail.picList,(function(a,i){return e("div",{key:i},[e("img",{class:(i+1)%3===0?"img":"img mr24",attrs:{src:t.$fileHost+a.url,alt:""}})])})),0):t._e(),t.inductiveDetail.attachmentList.length>0?e("div",[e("div",{staticClass:"bold ft28 mb24 mt48"},[t._v("附件")]),t._l(t.inductiveDetail.attachmentList,(function(a,i){return e("div",{key:i,staticClass:"ft24 attachment mb16",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.dowmload(a)}}},[e("span",[t._v(t._s(i+1)+".")]),e("span",[t._v(t._s(a.name))])])}))],2):t._e()]):t._e()},n=[]}}]);