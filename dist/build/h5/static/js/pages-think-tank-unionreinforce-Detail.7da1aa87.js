(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-think-tank-unionreinforce-Detail"],{2365:function(a,t,i){var n=i("4bad");t=n(!1),t.push([a.i,'@charset "UTF-8";\n/* uni.scss */\n/* 页面左右间距 */\n/* 文字尺寸 */\n/*文字颜色*/\n/* 图片加载中颜色 */\n/* 行为相关颜色 */\n/* 边框颜色 */.color-primary[data-v-1b91cdb2]{color:#3049c0}.color-333[data-v-1b91cdb2]{color:#333}.color-666[data-v-1b91cdb2]{color:#666}.color-999[data-v-1b91cdb2]{color:#999}.bg-color[data-v-1b91cdb2]{background-color:#f7f7f7}.bg-white[data-v-1b91cdb2]{background-color:#fff}.white-color[data-v-1b91cdb2]{color:#fff}.primary-color[data-v-1b91cdb2]{color:#f54400}.success-color[data-v-1b91cdb2]{color:#0e130f}.warning-color[data-v-1b91cdb2]{color:#f0ad4e}.error-color[data-v-1b91cdb2]{color:#dd524d}.primary-text[data-v-1b91cdb2]{color:#333}.secondary-text[data-v-1b91cdb2]{color:#666}.tip-text[data-v-1b91cdb2]{color:#999}.color-e32417[data-v-1b91cdb2]{color:#e32417}.ask-style[data-v-1b91cdb2]{padding:0 %?16?%;height:%?48?%;line-height:%?48?%;background:#f0f0f0;border-radius:%?6?%}.line[data-v-1b91cdb2]{width:100%;height:%?32?%;background:#f7f7f7}.p32[data-v-1b91cdb2]{padding:%?32?%}.w112[data-v-1b91cdb2]{width:%?112?%;color:#999}.cont[data-v-1b91cdb2]{padding-bottom:%?120?%}.btns[data-v-1b91cdb2]{width:100%;height:%?120?%;position:fixed;bottom:0;border-top:1px solid #eaeaea;background:#fff}.btns .pop-btn[data-v-1b91cdb2]{width:%?331?%;height:%?88?%;text-align:center;line-height:%?88?%;border-radius:%?49?%;border:%?2?% solid #e32417;color:#e32417;font-size:%?32?%;font-weight:600}.pre-line[data-v-1b91cdb2]{white-space:pre-line}',""]),a.exports=t},"2b7d":function(a,t,i){var n=i("2365");"string"===typeof n&&(n=[[a.i,n,""]]),n.locals&&(a.exports=n.locals);var o=i("4f06").default;o("4b831bf7",n,!0,{sourceMap:!1,shadowMode:!1})},"346d":function(a,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n={data:function(){return{unionData:{}}},methods:{getUnionDetailData:function(a){var t=this,i={id:a};this.$api.getJourneyPostDetail(i).then((function(a){if(a.isError)return t.$msg(a.message);t.unionData=a.content}))},copyEmail:function(a){"success"===a?this.$msg("复制成功"):this.$msg("复制失败")},callPhone:function(a){uni.makePhoneCall({phoneNumber:a})}},onLoad:function(a){a.id&&this.getUnionDetailData(a.id)}};t.default=n},"55e1":function(a,t,i){"use strict";i.r(t);var n=i("a0dc"),o=i("abaf");for(var s in o)["default"].indexOf(s)<0&&function(a){i.d(t,a,(function(){return o[a]}))}(s);i("9d55");var c,e=i("f0c5"),r=Object(e["a"])(o["default"],n["b"],n["c"],!1,null,"1b91cdb2",null,!1,n["a"],c);t["default"]=r.exports},"9d55":function(a,t,i){"use strict";var n=i("2b7d"),o=i.n(n);o.a},a0dc:function(a,t,i){"use strict";var n;i.d(t,"b",(function(){return o})),i.d(t,"c",(function(){return s})),i.d(t,"a",(function(){return n}));var o=function(){var a=this,t=a.$createElement,i=a._self._c||t;return i("div",[i("div",{staticClass:"p32"},[i("div",{staticClass:"ft40 bold"},[a._v(a._s(a.unionData.name))]),i("div",{staticClass:"flex-wrap ft24"},[i("div",{staticClass:"ask-style mr16 mt24 color-666"},[a._v("经验:"+a._s(a.unionData.workExperienceName))]),i("div",{staticClass:"ask-style mr16 mt24 color-666"},[a._v("学历:"+a._s(a.unionData.educationName))]),i("div",{staticClass:"ask-style mr16 mt24 color-666"},[a._v("待遇:"+a._s(a.unionData.isNegotiableSalary?"面议薪资":a.unionData.annualSalary+"万/年"))])]),i("div",{staticClass:"center-align color-999 mt24"},[i("div",{staticClass:"mr48"},[a._v(a._s(a.$moment(a.unionData.createTime).format("YYYY-MM-DD"))+"发布")]),i("div",[a._v(a._s(a.unionData.publishingDepartment))])])]),i("div",{staticClass:"line"}),i("div",{staticClass:"p32 cont"},[i("div",{staticClass:"pb32 bb"},[i("div",{staticClass:"ft30 bold mb8"},[a._v(a._s(a.unionData.companyName))]),i("div",[i("div",{staticClass:"ft28 center-align mt24"},[i("div",{staticClass:"w112"},[a._v("地址:")]),i("div",[a._v(a._s(a.unionData.workAddress||"--"))])]),i("div",{staticClass:"ft28 center-align mt24"},[i("div",{staticClass:"w112"},[a._v("联系人:")]),i("div",[a._v(a._s(a.unionData.contactPerson||"--"))])]),i("div",{staticClass:"ft28 center-align mt24"},[i("div",{staticClass:"w112"},[a._v("电话:")]),i("div",[a._v(a._s(a.unionData.contactPhone||"--"))])]),i("div",{staticClass:"ft28 center-align mt24"},[i("div",{staticClass:"w112"},[a._v("邮箱:")]),i("div",[a._v(a._s(a.unionData.contactEmail||"--"))])])])]),a.unionData.responsibilities?i("div",{staticClass:"pb32 bb"},[i("div",{staticClass:"ft30 bold mt32"},[a._v("岗位职责")]),i("div",{staticClass:"mt24 ft28"},[i("div",{staticClass:"pre-line",domProps:{innerHTML:a._s(a.unionData.responsibilities)}})])]):a._e(),a.unionData.qualifications?i("div",{staticClass:"pb32"},[i("div",{staticClass:"ft30 bold mt32"},[a._v("任职资格")]),i("div",{staticClass:"mt24 ft28"},[i("div",{staticClass:"pre-line",domProps:{innerHTML:a._s(a.unionData.qualifications)}})])]):a._e()]),i("div",{staticClass:"center btns"},[i("div",{directives:[{name:"clipboard",rawName:"v-clipboard:copy",value:a.unionData.contactEmail,expression:"unionData.contactEmail",arg:"copy"},{name:"clipboard",rawName:"v-clipboard:success",value:function(t){return a.copyEmail("success")},expression:"(type) => copyEmail('success')",arg:"success"},{name:"clipboard",rawName:"v-clipboard:error",value:function(t){return a.copyEmail("error")},expression:"(type) => copyEmail('error')",arg:"error"}],staticClass:"pop-btn mr24"},[a._v("复制邮箱")]),i("div",{staticClass:"pop-btn",on:{click:function(t){arguments[0]=t=a.$handleEvent(t),a.callPhone(a.unionData.contactPhone)}}},[a._v("拨打电话")])])])},s=[]},abaf:function(a,t,i){"use strict";i.r(t);var n=i("346d"),o=i.n(n);for(var s in n)["default"].indexOf(s)<0&&function(a){i.d(t,a,(function(){return n[a]}))}(s);t["default"]=o.a}}]);