(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-think-tank-countryside-attachmentPage"],{"08d9":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,n("caad");var i=["pdf"],r=["xls","xlsx","doc","docx"],f={data:function(){return{file:"",fileType:""}},computed:{fileUrl:function(){var e=this.file,t=this.fileType,n=this.$fileHost;return i.includes(t)?n+e:r.includes(t)?"https://view.officeapps.live.com/op/view.aspx?src="+n+e:void 0}},onLoad:function(e){this.file=e.url||"",this.fileType=e.fileType||""}};t.default=f},"31e8":function(e,t,n){"use strict";var i;n.d(t,"b",(function(){return r})),n.d(t,"c",(function(){return f})),n.d(t,"a",(function(){return i}));var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[e.file?n("iframe",{attrs:{src:e.fileUrl,width:"100%",height:"800px",frameborder:"no"}}):n("div",{staticClass:"center mt32 bold"},[e._v("文件不存在")])])},f=[]},"76da":function(e,t,n){"use strict";n.r(t);var i=n("31e8"),r=n("95ce");for(var f in r)["default"].indexOf(f)<0&&function(e){n.d(t,e,(function(){return r[e]}))}(f);var u,c=n("f0c5"),a=Object(c["a"])(r["default"],i["b"],i["c"],!1,null,null,null,!1,i["a"],u);t["default"]=a.exports},"95ce":function(e,t,n){"use strict";n.r(t);var i=n("08d9"),r=n.n(i);for(var f in i)["default"].indexOf(f)<0&&function(e){n.d(t,e,(function(){return i[e]}))}(f);t["default"]=r.a}}]);