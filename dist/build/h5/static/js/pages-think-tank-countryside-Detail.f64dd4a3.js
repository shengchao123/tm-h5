(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-think-tank-countryside-Detail"],{5173:function(t,e,a){"use strict";a.r(e);var i=a("fe21"),c=a("df65");for(var n in c)["default"].indexOf(n)<0&&function(t){a.d(e,t,(function(){return c[t]}))}(n);a("6c2c");var r,o=a("f0c5"),l=Object(o["a"])(c["default"],i["b"],i["c"],!1,null,"61e1c835",null,!1,i["a"],r);e["default"]=l.exports},"57c5":function(t,e,a){var i=a("8683");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var c=a("4f06").default;c("bd163168",i,!0,{sourceMap:!1,shadowMode:!1})},"6c2c":function(t,e,a){"use strict";var i=a("57c5"),c=a.n(i);c.a},8683:function(t,e,a){var i=a("4bad");e=i(!1),e.push([t.i,'@charset "UTF-8";\n/* uni.scss */\n/* 页面左右间距 */\n/* 文字尺寸 */\n/*文字颜色*/\n/* 图片加载中颜色 */\n/* 行为相关颜色 */\n/* 边框颜色 */.color-primary[data-v-61e1c835]{color:#3049c0}.color-333[data-v-61e1c835]{color:#333}.color-666[data-v-61e1c835]{color:#666}.color-999[data-v-61e1c835]{color:#999}.bg-color[data-v-61e1c835]{background-color:#f7f7f7}.bg-white[data-v-61e1c835]{background-color:#fff}.white-color[data-v-61e1c835]{color:#fff}.primary-color[data-v-61e1c835]{color:#f54400}.success-color[data-v-61e1c835]{color:#0e130f}.warning-color[data-v-61e1c835]{color:#f0ad4e}.error-color[data-v-61e1c835]{color:#dd524d}.primary-text[data-v-61e1c835]{color:#333}.secondary-text[data-v-61e1c835]{color:#666}.tip-text[data-v-61e1c835]{color:#999}.color-e32417[data-v-61e1c835]{color:#e32417}.detail-wrap[data-v-61e1c835]{padding:%?24?% %?30?%}.detail-wrap .img[data-v-61e1c835]{width:%?214?%;height:%?214?%;border-radius:%?8?%}.detail-wrap .attachment[data-v-61e1c835]{width:%?686?%;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;color:#518cfc}',""]),t.exports=e},"91bc":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,a("baa5"),a("99af");var i={name:"Detail",data:function(){return{inductiveDetail:{}}},methods:{getAgricultureDetail:function(t){var e=this,a={id:t};this.$api.getAgricultureDetail(a).then((function(t){if(t.isError)return e.$msg(t.message);e.inductiveDetail=t.content}))},dowmload:function(t){var e=t.url.substring(t.url.lastIndexOf(".")+1);uni.navigateTo({url:"/pages/think-tank/countryside/attachmentPage?url=".concat(t.url,"&fileType=").concat(e)})}},onLoad:function(t){t.id&&this.getAgricultureDetail(t.id)}};e.default=i},baa5:function(t,e,a){var i=a("23e7"),c=a("e58c");i({target:"Array",proto:!0,forced:c!==[].lastIndexOf},{lastIndexOf:c})},df65:function(t,e,a){"use strict";a.r(e);var i=a("91bc"),c=a.n(i);for(var n in i)["default"].indexOf(n)<0&&function(t){a.d(e,t,(function(){return i[t]}))}(n);e["default"]=c.a},fe21:function(t,e,a){"use strict";var i;a.d(e,"b",(function(){return c})),a.d(e,"c",(function(){return n})),a.d(e,"a",(function(){return i}));var c=function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.inductiveDetail.title?a("div",{staticClass:"detail-wrap"},[a("div",{staticClass:"ft40 bold mb24"},[t._v(t._s(t.inductiveDetail.title))]),a("div",{staticClass:"center-align ft26 color-666 mb24"},[a("div",{staticClass:"mr48"},[t._v(t._s(t.$moment(t.inductiveDetail.createTime).format("YYYY年MM月DD日")))]),a("div",[t._v(t._s(t.inductiveDetail.publishingDepartment))])]),a("div",{domProps:{innerHTML:t._s(t.inductiveDetail.content)}}),t.inductiveDetail.picList.length>0?a("div",{staticClass:"flex-wrap mt30"},t._l(t.inductiveDetail.picList,(function(e,i){return a("div",{key:i},[a("img",{class:(i+1)%3===0?"img":"img mr24",attrs:{src:t.$fileHost+e.url,alt:""}})])})),0):t._e(),t.inductiveDetail.attachmentList.length>0?a("div",[a("div",{staticClass:"bold ft28 mb24 mt48"},[t._v("附件")]),t._l(t.inductiveDetail.attachmentList,(function(e,i){return a("div",{key:i,staticClass:"ft24 attachment mb16",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.dowmload(e)}}},[a("span",[t._v(t._s(i+1)+".")]),a("span",[t._v(t._s(e.name))])])}))],2):t._e()]):t._e()},n=[]}}]);