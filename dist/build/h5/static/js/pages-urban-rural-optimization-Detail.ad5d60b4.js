(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-urban-rural-optimization-Detail"],{1153:function(t,e,i){"use strict";i.r(e);var r=i("5ca4"),o=i("2ea2");for(var n in o)["default"].indexOf(n)<0&&function(t){i.d(e,t,(function(){return o[t]}))}(n);i("f5cc");var a,s=i("f0c5"),c=Object(s["a"])(o["default"],r["b"],r["c"],!1,null,"71f0b7e9",null,!1,r["a"],a);e["default"]=c.exports},"11c2":function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,i("d81d"),i("dca8");var r={name:"Detail",methods:{onCallPhone:function(){uni.makePhoneCall({phoneNumber:this.detailInfo.contactPhone,success:function(t){},fail:function(t){}})},getJourneyProductInfoById:function(t){var e=this,i={journeyProductId:t};this.$api.getJourneyProductInfoById(i).then((function(t){t.isError||(e.detailInfo=t.content,e.images=t.content.images.map((function(t){return{image:e.$fileHost+t.url}})))}))}},computed:{linkUrl:function(){var t=this.detailInfo,e=t.secondStoreUrl,i=t.firstStoreUrl;if(!e)return i;uni.getSystemInfoSync().platform;var r=i;return r}},data:function(){return{infoItems:Object.freeze([{icon:"icon_rongyu",title:"荣誉：",key:"honor"},{icon:"icon_pinpai",title:"品牌：",key:"brand"},{icon:"icon_chandi",title:"产地：",key:"origin"},{icon:"icon_dianpu",title:"店铺：",key:"storeName",url:"storeUrl"}]),detailInfo:{},images:[]}},onLoad:function(t){this.getJourneyProductInfoById(t.id)}};e.default=r},"1a87":function(t,e,i){"use strict";var r=i("68bf"),o=i.n(r);o.a},"1adc":function(t,e,i){"use strict";i.d(e,"b",(function(){return o})),i.d(e,"c",(function(){return n})),i.d(e,"a",(function(){return r}));var r={uSwiper:i("1153").default,uniLink:i("e433").default,uDivider:i("4a16").default,uParse:i("98ef").default},o=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"detail-wrap"},[i("u-swiper",{attrs:{list:t.images,height:"562"}}),i("div",{staticClass:"info"},[i("div",{staticClass:"name ft40 bold"},[t._v(t._s(t.detailInfo.name))]),t._l(t.infoItems,(function(e){return[t.detailInfo[e.key]?i("div",{key:e.title,staticClass:"center-align mt16"},[i("SvgIcon",{staticClass:"ft26 color-999",attrs:{icon:e.icon}}),i("v-uni-text",{staticClass:"ml16 ft26 color-999"},[t._v(t._s(e.title))]),!e.url&&t.detailInfo[e.key]?i("v-uni-text",{staticClass:"ft26"},[t._v(t._s(t.detailInfo[e.key]))]):t._e(),e.url?i("uni-link",{attrs:{href:t.linkUrl,fontSize:"26",color:"#518cfc",showUnderLine:!1,text:t.detailInfo[e.key]}}):t._e()],1):t._e()]})),i("div",{staticClass:"contact b mt16"},[i("div",{staticClass:"color-999 ft26"},[t._v("联系人")]),i("div",{staticClass:"ft28 mt28 between-row"},[i("div",[t._v(t._s(t.detailInfo.contactPerson)+"："+t._s(t.detailInfo.contactPhone))]),i("div",{on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.onCallPhone.apply(void 0,arguments)}}},[i("SvgIcon",{staticStyle:{color:"#518CFC","font-size":"32rpx"},attrs:{icon:"icon_dianhua"}})],1)])]),i("div",{staticClass:"mt16 mb16"},[i("u-divider",{attrs:{color:"#999999","half-width":"280","border-color":"#eaeaea"}},[t._v("商品详情")])],1),i("u-parse",{attrs:{html:t.detailInfo.content}})],2)],1)},n=[]},"2b21":function(t,e,i){"use strict";i.r(e);var r=i("8800"),o=i.n(r);for(var n in r)["default"].indexOf(n)<0&&function(t){i.d(e,t,(function(){return r[t]}))}(n);e["default"]=o.a},"2def":function(t,e,i){"use strict";var r;i.d(e,"b",(function(){return o})),i.d(e,"c",(function(){return n})),i.d(e,"a",(function(){return r}));var o=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",[t.nodes.length?t._e():t._t("default"),i("v-uni-view",{style:t.showAm+(t.selectable?";user-select:text;-webkit-user-select:text":""),attrs:{id:"_top"}},[i("div",{attrs:{id:"rtf"+t.uid}})])],2)},n=[]},"2ea2":function(t,e,i){"use strict";i.r(e);var r=i("ca01"),o=i.n(r);for(var n in r)["default"].indexOf(n)<0&&function(t){i.d(e,t,(function(){return r[t]}))}(n);e["default"]=o.a},3050:function(t,e,i){"use strict";i.r(e);var r=i("11c2"),o=i.n(r);for(var n in r)["default"].indexOf(n)<0&&function(t){i.d(e,t,(function(){return r[t]}))}(n);e["default"]=o.a},"351f":function(t,e,i){"use strict";i.r(e);var r=i("7029"),o=i.n(r);for(var n in r)["default"].indexOf(n)<0&&function(t){i.d(e,t,(function(){return r[t]}))}(n);e["default"]=o.a},"390b":function(t,e,i){var r=i("4bad");e=r(!1),e.push([t.i,"@-webkit-keyframes _show-data-v-c95c97b2{0%{opacity:0}100%{opacity:1}}@keyframes _show-data-v-c95c97b2{0%{opacity:0}100%{opacity:1}}\n\n\n\n",""]),t.exports=e},"4a16":function(t,e,i){"use strict";i.r(e);var r=i("6a00"),o=i("351f");for(var n in o)["default"].indexOf(n)<0&&function(t){i.d(e,t,(function(){return o[t]}))}(n);i("b773");var a,s=i("f0c5"),c=Object(s["a"])(o["default"],r["b"],r["c"],!1,null,"6d4d1256",null,!1,r["a"],a);e["default"]=c.exports},"4c48":function(t,e){var i={errorImg:null,filter:null,highlight:null,onText:null,entities:{quot:'"',apos:"'",semi:";",nbsp:" ",ensp:" ",emsp:" ",ndash:"–",mdash:"—",middot:"·",lsquo:"‘",rsquo:"’",ldquo:"“",rdquo:"”",bull:"•",hellip:"…"},blankChar:r(" , ,\t,\r,\n,\f"),boolAttrs:r("allowfullscreen,autoplay,autostart,controls,ignore,loop,muted"),blockTags:r("address,article,aside,body,caption,center,cite,footer,header,html,nav,pre,section"),ignoreTags:r("area,base,canvas,frame,iframe,input,link,map,meta,param,script,source,style,svg,textarea,title,track,wbr"),richOnlyTags:r("a,colgroup,fieldset,legend"),selfClosingTags:r("area,base,br,col,circle,ellipse,embed,frame,hr,img,input,line,link,meta,param,path,polygon,rect,source,track,use,wbr"),trustTags:r("a,abbr,ad,audio,b,blockquote,br,code,col,colgroup,dd,del,dl,dt,div,em,fieldset,h1,h2,h3,h4,h5,h6,hr,i,img,ins,label,legend,li,ol,p,q,source,span,strong,sub,sup,table,tbody,td,tfoot,th,thead,tr,title,ul,video"),userAgentStyles:{address:"font-style:italic",big:"display:inline;font-size:1.2em",blockquote:"background-color:#f6f6f6;border-left:3px solid #dbdbdb;color:#6c6c6c;padding:5px 0 5px 10px",caption:"display:table-caption;text-align:center",center:"text-align:center",cite:"font-style:italic",dd:"margin-left:40px",mark:"background-color:yellow",pre:"font-family:monospace;white-space:pre;overflow:scroll",s:"text-decoration:line-through",small:"display:inline;font-size:0.8em",u:"text-decoration:underline"}};function r(t){for(var e=Object.create(null),i=t.split(","),r=i.length;r--;)e[i[r]]=!0;return e}wx.canIUse("editor")&&(i.blockTags.pre=void 0,i.ignoreTags.rp=!0,Object.assign(i.richOnlyTags,r("bdi,bdo,caption,rt,ruby")),Object.assign(i.trustTags,r("bdi,bdo,caption,pre,rt,ruby"))),i.ignoreTags.iframe=void 0,Object.assign(i.trustTags,r("embed,iframe")),t.exports=i},"59b0":function(t,e,i){"use strict";var r=i("9d96"),o=i.n(r);o.a},"5b46":function(t,e,i){var r=i("4bad");e=r(!1),e.push([t.i,'@charset "UTF-8";\n/* uni.scss */\n/* 页面左右间距 */\n/* 文字尺寸 */\n/*文字颜色*/\n/* 图片加载中颜色 */\n/* 行为相关颜色 */\n/* 边框颜色 */.color-primary[data-v-3494710b]{color:#3049c0}.color-333[data-v-3494710b]{color:#333}.color-666[data-v-3494710b]{color:#666}.color-999[data-v-3494710b]{color:#999}.bg-color[data-v-3494710b]{background-color:#f7f7f7}.bg-white[data-v-3494710b]{background-color:#fff}.white-color[data-v-3494710b]{color:#fff}.primary-color[data-v-3494710b]{color:#f54400}.success-color[data-v-3494710b]{color:#0e130f}.warning-color[data-v-3494710b]{color:#f0ad4e}.error-color[data-v-3494710b]{color:#dd524d}.primary-text[data-v-3494710b]{color:#333}.secondary-text[data-v-3494710b]{color:#666}.tip-text[data-v-3494710b]{color:#999}.color-e32417[data-v-3494710b]{color:#e32417}.detail-wrap .info[data-v-3494710b]{padding:%?30?%;background:#fff}.detail-wrap .contact[data-v-3494710b]{padding:%?36?% %?24?%}',""]),t.exports=e},"5ca4":function(t,e,i){"use strict";var r;i.d(e,"b",(function(){return o})),i.d(e,"c",(function(){return n})),i.d(e,"a",(function(){return r}));var o=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"u-swiper-wrap",style:{borderRadius:t.borderRadius+"rpx"}},[i("v-uni-swiper",{style:{height:t.height+"rpx",backgroundColor:t.bgColor},attrs:{current:t.elCurrent,interval:t.interval,circular:t.circular,duration:t.duration,autoplay:t.autoplay,"previous-margin":t.effect3d?t.effect3dPreviousMargin+"rpx":"0","next-margin":t.effect3d?t.effect3dPreviousMargin+"rpx":"0"},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.change.apply(void 0,arguments)},animationfinish:function(e){arguments[0]=e=t.$handleEvent(e),t.animationfinish.apply(void 0,arguments)}}},t._l(t.list,(function(e,r){return i("v-uni-swiper-item",{key:r,staticClass:"u-swiper-item"},[i("v-uni-view",{staticClass:"u-list-image-wrap",class:[t.uCurrent!=r?"u-list-scale":""],style:{borderRadius:t.borderRadius+"rpx",transform:t.effect3d&&t.uCurrent!=r?"scaleY(0.9)":"scaleY(1)",margin:t.effect3d&&t.uCurrent!=r?"0 20rpx":0},on:{click:function(e){e.stopPropagation(),e.preventDefault(),arguments[0]=e=t.$handleEvent(e),t.listClick(r)}}},[i("v-uni-image",{staticClass:"u-swiper-image",attrs:{src:e[t.name]||e,mode:t.imgMode}}),t.title&&e.title?i("v-uni-view",{staticClass:"u-swiper-title u-line-1",style:[{"padding-bottom":t.titlePaddingBottom},t.titleStyle]},[t._v(t._s(e.title))]):t._e()],1)],1)})),1),i("v-uni-view",{staticClass:"u-swiper-indicator",style:{top:"topLeft"==t.indicatorPos||"topCenter"==t.indicatorPos||"topRight"==t.indicatorPos?"12rpx":"auto",bottom:"bottomLeft"==t.indicatorPos||"bottomCenter"==t.indicatorPos||"bottomRight"==t.indicatorPos?"12rpx":"auto",justifyContent:t.justifyContent,padding:"0 "+(t.effect3d?"74rpx":"24rpx")}},["rect"==t.mode?t._l(t.list,(function(e,r){return i("v-uni-view",{key:r,staticClass:"u-indicator-item-rect",class:{"u-indicator-item-rect-active":r==t.uCurrent}})})):t._e(),"dot"==t.mode?t._l(t.list,(function(e,r){return i("v-uni-view",{key:r,staticClass:"u-indicator-item-dot",class:{"u-indicator-item-dot-active":r==t.uCurrent}})})):t._e(),"round"==t.mode?t._l(t.list,(function(e,r){return i("v-uni-view",{key:r,staticClass:"u-indicator-item-round",class:{"u-indicator-item-round-active":r==t.uCurrent}})})):t._e(),"number"==t.mode?[i("v-uni-view",{staticClass:"u-indicator-item-number"},[t._v(t._s(t.uCurrent+1)+"/"+t._s(t.list.length))])]:t._e()],2)],1)},n=[]},"68bf":function(t,e,i){var r=i("390b");"string"===typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);var o=i("4f06").default;o("70cf65e8",r,!0,{sourceMap:!1,shadowMode:!1})},"6a00":function(t,e,i){"use strict";var r;i.d(e,"b",(function(){return o})),i.d(e,"c",(function(){return n})),i.d(e,"a",(function(){return r}));var o=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"u-divider",style:{height:"auto"==t.height?"auto":t.height+"rpx",backgroundColor:t.bgColor,marginBottom:t.marginBottom+"rpx",marginTop:t.marginTop+"rpx"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.click.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"u-divider-line",class:[t.type?"u-divider-line--bordercolor--"+t.type:""],style:[t.lineStyle]}),t.useSlot?i("v-uni-view",{staticClass:"u-divider-text",style:{color:t.color,fontSize:t.fontSize+"rpx"}},[t._t("default")],2):t._e(),i("v-uni-view",{staticClass:"u-divider-line",class:[t.type?"u-divider-line--bordercolor--"+t.type:""],style:[t.lineStyle]})],1)},n=[]},7029:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,i("a9e3"),i("c975");var r={name:"u-divider",props:{halfWidth:{type:[Number,String],default:150},borderColor:{type:String,default:"#dcdfe6"},type:{type:String,default:"primary"},color:{type:String,default:"#909399"},fontSize:{type:[Number,String],default:26},bgColor:{type:String,default:"#ffffff"},height:{type:[Number,String],default:"auto"},marginTop:{type:[String,Number],default:0},marginBottom:{type:[String,Number],default:0},useSlot:{type:Boolean,default:!0}},computed:{lineStyle:function(){var t={};return-1!=String(this.halfWidth).indexOf("%")?t.width=this.halfWidth:t.width=this.halfWidth+"rpx",this.borderColor&&(t.borderColor=this.borderColor),t}},methods:{click:function(){this.$emit("click")}}};e.default=r},"7efc":function(t,e,i){"use strict";i.r(e);var r=i("1adc"),o=i("3050");for(var n in o)["default"].indexOf(n)<0&&function(t){i.d(e,t,(function(){return o[t]}))}(n);i("59b0");var a,s=i("f0c5"),c=Object(s["a"])(o["default"],r["b"],r["c"],!1,null,"3494710b",null,!1,r["a"],a);e["default"]=c.exports},"823f":function(t,e,i){var r=i("4bad");e=r(!1),e.push([t.i,'@charset "UTF-8";\n/* uni.scss */\n/* 页面左右间距 */\n/* 文字尺寸 */\n/*文字颜色*/\n/* 图片加载中颜色 */\n/* 行为相关颜色 */\n/* 边框颜色 */.color-primary[data-v-71f0b7e9]{color:#3049c0}.color-333[data-v-71f0b7e9]{color:#333}.color-666[data-v-71f0b7e9]{color:#666}.color-999[data-v-71f0b7e9]{color:#999}.bg-color[data-v-71f0b7e9]{background-color:#f7f7f7}.bg-white[data-v-71f0b7e9]{background-color:#fff}.white-color[data-v-71f0b7e9]{color:#fff}.primary-color[data-v-71f0b7e9]{color:#f54400}.success-color[data-v-71f0b7e9]{color:#0e130f}.warning-color[data-v-71f0b7e9]{color:#f0ad4e}.error-color[data-v-71f0b7e9]{color:#dd524d}.primary-text[data-v-71f0b7e9]{color:#333}.secondary-text[data-v-71f0b7e9]{color:#666}.tip-text[data-v-71f0b7e9]{color:#999}.color-e32417[data-v-71f0b7e9]{color:#e32417}.u-swiper-wrap[data-v-71f0b7e9]{position:relative;overflow:hidden;-webkit-transform:translateY(0);transform:translateY(0)}.u-swiper-image[data-v-71f0b7e9]{width:100%;will-change:transform;height:100%;display:block;pointer-events:none}.u-swiper-indicator[data-v-71f0b7e9]{padding:0 %?24?%;position:absolute;\ndisplay:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;\nwidth:100%;z-index:1}.u-indicator-item-rect[data-v-71f0b7e9]{width:%?26?%;height:%?8?%;margin:0 %?6?%;-webkit-transition:all .5s;transition:all .5s;background-color:rgba(0,0,0,.3)}.u-indicator-item-rect-active[data-v-71f0b7e9]{background-color:hsla(0,0%,100%,.8)}.u-indicator-item-dot[data-v-71f0b7e9]{width:%?14?%;height:%?14?%;margin:0 %?6?%;border-radius:%?20?%;-webkit-transition:all .5s;transition:all .5s;background-color:rgba(0,0,0,.3)}.u-indicator-item-dot-active[data-v-71f0b7e9]{background-color:hsla(0,0%,100%,.8)}.u-indicator-item-round[data-v-71f0b7e9]{width:%?14?%;height:%?14?%;margin:0 %?6?%;border-radius:%?20?%;-webkit-transition:all .5s;transition:all .5s;background-color:rgba(0,0,0,.3)}.u-indicator-item-round-active[data-v-71f0b7e9]{width:%?34?%;background-color:hsla(0,0%,100%,.8)}.u-indicator-item-number[data-v-71f0b7e9]{padding:%?6?% %?16?%;line-height:1;background-color:rgba(0,0,0,.3);border-radius:%?100?%;font-size:%?26?%;color:hsla(0,0%,100%,.8)}.u-list-scale[data-v-71f0b7e9]{-webkit-transform-origin:center center;transform-origin:center center}.u-list-image-wrap[data-v-71f0b7e9]{width:100%;height:100%;-webkit-box-flex:1;-webkit-flex:1;flex:1;-webkit-transition:all .5s;transition:all .5s;overflow:hidden;box-sizing:initial;position:relative}.u-swiper-title[data-v-71f0b7e9]{position:absolute;background-color:rgba(0,0,0,.3);bottom:0;left:0;width:100%;font-size:%?28?%;padding:%?12?% %?24?%;color:hsla(0,0%,100%,.9)}.u-swiper-item[data-v-71f0b7e9]{\ndisplay:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;\noverflow:hidden;-webkit-box-align:center;-webkit-align-items:center;align-items:center}',""]),t.exports=e},8800:function(t,e,i){"use strict";var r=i("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o,n=r(i("b85c"));i("c975"),i("caad"),i("2532"),i("ac1f"),i("1276"),i("466d"),i("841c"),i("5319"),i("e25e"),i("99af"),i("acd8");var a=uni.getSystemInfoSync(),s=a.windowWidth,c=(a.platform,i("4c48")),l={name:"parser",data:function(){return{uid:this._uid,showAm:"",nodes:[]}},props:{html:String,autopause:{type:Boolean,default:!0},autoscroll:Boolean,autosetTitle:{type:Boolean,default:!0},domain:String,lazyLoad:Boolean,selectable:Boolean,tagStyle:Object,showWithAnimation:Boolean,useAnchor:Boolean},watch:{html:function(t){this.setContent(t)}},created:function(){this.imgList=[],this.imgList.each=function(t){for(var e=0,i=this.length;e<i;e++)this.setItem(e,t(this[e],e,this))},this.imgList.setItem=function(t,e){if(void 0!=t&&e){if(0==e.indexOf("http")&&this.includes(e)){for(var i,r=e.split("://")[0],o=r.length;i=e[o];o++){if("/"==i&&"/"!=e[o-1]&&"/"!=e[o+1])break;r+=Math.random()>.5?i.toUpperCase():i}return r+=e.substr(o),this[t]=r}if(this[t]=e,e.includes("data:image")){var n=e.match(/data:image\/(\S+?);(\S+?),(.+)/);if(!n)return}}}},mounted:function(){var t=this;this.document=document.getElementById("rtf"+this._uid),o&&(this.search=function(e){return o(t,e)}),this.html&&this.setContent(this.html)},beforeDestroy:function(){this._observer&&this._observer.disconnect(),this.imgList.each((function(t){})),clearInterval(this._timer)},methods:{setContent:function(t,e){var i=this;if(t){var r=document.createElement("div");e?this.rtf?this.rtf.appendChild(r):this.rtf=r:(this.rtf&&this.rtf.parentNode.removeChild(this.rtf),this.rtf=r),r.innerHTML=this._handleHtml(t,e);for(var o,a=this.rtf.getElementsByTagName("style"),l=0;o=a[l++];)o.innerHTML=o.innerHTML.replace(/body/g,"#rtf"+this._uid),o.setAttribute("scoped","true");!this._observer&&this.lazyLoad&&IntersectionObserver&&(this._observer=new IntersectionObserver((function(t){for(var e,r=0;e=t[r++];)e.isIntersecting&&(e.target.src=e.target.getAttribute("data-src"),e.target.removeAttribute("data-src"),i._observer.unobserve(e.target))}),{rootMargin:"500px 0px 500px 0px"}));var d=this,u=this.rtf.getElementsByTagName("title");u.length&&this.autosetTitle&&uni.setNavigationBarTitle({title:u[0].innerText});var f=function(t){var e=t.getAttribute("src");i.domain&&e&&("/"==e[0]?"/"==e[1]?t.src=(i.domain.includes("://")?i.domain.split("://")[0]:"")+":"+e:t.src=i.domain+e:e.includes("://")||0==e.indexOf("data:")||(t.src=i.domain+"/"+e))};this.imgList.length=0;for(var h,b=this.rtf.getElementsByTagName("img"),v=0,p=0;h=b[v];v++)parseInt(h.style.width||h.getAttribute("width"))>s&&(h.style.height="auto"),f(h),h.hasAttribute("ignore")||"A"==h.parentElement.nodeName||(h.i=p++,d.imgList.push(h.getAttribute("original-src")||h.src||h.getAttribute("data-src")),h.onclick=function(t){t.stopPropagation();var e=!0;this.ignore=function(){return e=!1},d.$emit("imgtap",this),e&&uni.previewImage({current:this.i,urls:d.imgList})}),h.onerror=function(){c.errorImg&&(d.imgList[this.i]=this.src=c.errorImg),d.$emit("error",{source:"img",target:this})},d.lazyLoad&&this._observer&&h.src&&0!=h.i&&(h.setAttribute("data-src",h.src),h.removeAttribute("src"),this._observer.observe(h));var g,m=this.rtf.getElementsByTagName("a"),y=(0,n.default)(m);try{for(y.s();!(g=y.n()).done;){var w=g.value;w.onclick=function(t){t.stopPropagation();var e=!0,i=this.getAttribute("href");if(d.$emit("linkpress",{href:i,ignore:function(){return e=!1}}),e&&i)if("#"==i[0])d.useAnchor&&d.navigateTo({id:i.substr(1)});else{if(0==i.indexOf("http")||0==i.indexOf("//"))return!0;uni.navigateTo({url:i})}return!1}}}catch(j){y.e(j)}finally{y.f()}var x=this.rtf.getElementsByTagName("video");d.videoContexts=x;for(var k,_=0;k=x[_++];)f(k),k.style.maxWidth="100%",k.onerror=function(){d.$emit("error",{source:"video",target:this})},k.onplay=function(){if(d.autopause)for(var t,e=0;t=d.videoContexts[e++];)t!=this&&t.pause()};var C,S,T=this.rtf.getElementsByTagName("audio"),I=(0,n.default)(T);try{for(I.s();!(C=I.n()).done;){var P=C.value;f(P),P.onerror=function(){d.$emit("error",{source:"audio",target:this})}}}catch(j){I.e(j)}finally{I.f()}if(this.autoscroll){var O,B=this.rtf.getElementsByTagName("table"),A=(0,n.default)(B);try{for(A.s();!(O=A.n()).done;){var N=O.value,L=document.createElement("div");L.style.overflow="scroll",N.parentNode.replaceChild(L,N),L.appendChild(N)}}catch(j){A.e(j)}finally{A.f()}}e||this.document.appendChild(this.rtf),this.$nextTick((function(){i.nodes=[1],i.$emit("load")})),setTimeout((function(){return i.showAm=""}),500),clearInterval(this._timer),this._timer=setInterval((function(){i.rect=i.rtf.getBoundingClientRect(),i.rect.height==S&&(i.$emit("ready",i.rect),clearInterval(i._timer)),S=i.rect.height}),350),this.showWithAnimation&&!e&&(this.showAm="animation:_show .5s")}else this.rtf&&!e&&this.rtf.parentNode.removeChild(this.rtf)},getText:function(){arguments.length>0&&void 0!==arguments[0]||this.nodes;var t="";return t=this.rtf.innerText,t},in:function(t){t.page&&t.selector&&t.scrollTop&&(this._in=t)},navigateTo:function(t){var e=this;if(!this.useAnchor)return t.fail&&t.fail("Anchor is disabled");var i=" ",r=uni.createSelectorQuery().in(this._in?this._in.page:this).select((this._in?this._in.selector:"#_top")+(t.id?"".concat(i,"#").concat(t.id,",").concat(this._in?this._in.selector:"#_top").concat(i,".").concat(t.id):"")).boundingClientRect();this._in?r.select(this._in.selector).scrollOffset().select(this._in.selector).boundingClientRect():r.selectViewport().scrollOffset(),r.exec((function(i){if(!i[0])return t.fail&&t.fail("Label not found");var r=i[1].scrollTop+i[0].top-(i[2]?i[2].top:0)+(t.offset||0);e._in?e._in.page[e._in.scrollTop]=r:uni.pageScrollTo({scrollTop:r,duration:300}),t.success&&t.success()}))},getVideoContext:function(t){if(!t)return this.videoContexts;for(var e=this.videoContexts.length;e--;)if(this.videoContexts[e].id==t)return this.videoContexts[e]},_handleHtml:function(t,e){if(!e){var i="<style scoped>@keyframes _show{0%{opacity:0}100%{opacity:1}}img{max-width:100%}";for(var r in c.userAgentStyles)i+="".concat(r,"{").concat(c.userAgentStyles[r],"}");for(r in this.tagStyle)i+="".concat(r,"{").concat(this.tagStyle[r],"}");i+="</style>",t=i+t}return t.includes("rpx")&&(t=t.replace(/[0-9.]+\s*rpx/g,(function(t){return parseFloat(t)*s/750+"px"}))),t}}};e.default=l},"98ef":function(t,e,i){"use strict";i.r(e);var r=i("2def"),o=i("2b21");for(var n in o)["default"].indexOf(n)<0&&function(t){i.d(e,t,(function(){return o[t]}))}(n);i("1a87");var a,s=i("f0c5"),c=Object(s["a"])(o["default"],r["b"],r["c"],!1,null,"c95c97b2",null,!1,r["a"],a);e["default"]=c.exports},"9d96":function(t,e,i){var r=i("5b46");"string"===typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);var o=i("4f06").default;o("8ebba048",r,!0,{sourceMap:!1,shadowMode:!1})},abff:function(t,e,i){var r=i("f545");"string"===typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);var o=i("4f06").default;o("05b325cc",r,!0,{sourceMap:!1,shadowMode:!1})},b4e5:function(t,e,i){var r=i("823f");"string"===typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);var o=i("4f06").default;o("44dcac74",r,!0,{sourceMap:!1,shadowMode:!1})},b773:function(t,e,i){"use strict";var r=i("abff"),o=i.n(r);o.a},ca01:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,i("a9e3"),i("c975");var r={name:"u-swiper",props:{list:{type:Array,default:function(){return[]}},title:{type:Boolean,default:!1},indicator:{type:Object,default:function(){return{}}},borderRadius:{type:[Number,String],default:8},interval:{type:[String,Number],default:3e3},mode:{type:String,default:"round"},height:{type:[Number,String],default:250},indicatorPos:{type:String,default:"bottomCenter"},effect3d:{type:Boolean,default:!1},effect3dPreviousMargin:{type:[Number,String],default:50},autoplay:{type:Boolean,default:!0},duration:{type:[Number,String],default:500},circular:{type:Boolean,default:!0},imgMode:{type:String,default:"aspectFill"},name:{type:String,default:"image"},bgColor:{type:String,default:"#f3f4f6"},current:{type:[Number,String],default:0},titleStyle:{type:Object,default:function(){return{}}}},watch:{list:function(t,e){t.length!==e.length&&(this.uCurrent=0)},current:function(t){this.uCurrent=t}},data:function(){return{uCurrent:this.current}},computed:{justifyContent:function(){return"topLeft"==this.indicatorPos||"bottomLeft"==this.indicatorPos?"flex-start":"topCenter"==this.indicatorPos||"bottomCenter"==this.indicatorPos?"center":"topRight"==this.indicatorPos||"bottomRight"==this.indicatorPos?"flex-end":void 0},titlePaddingBottom:function(){var t=0;return"none"==this.mode?"12rpx":(t=["bottomLeft","bottomCenter","bottomRight"].indexOf(this.indicatorPos)>=0&&"number"==this.mode?"60rpx":["bottomLeft","bottomCenter","bottomRight"].indexOf(this.indicatorPos)>=0&&"number"!=this.mode?"40rpx":"12rpx",t)},elCurrent:function(){return Number(this.current)}},methods:{listClick:function(t){this.$emit("click",t)},change:function(t){var e=t.detail.current;this.uCurrent=e,this.$emit("change",e)},animationfinish:function(t){}}};e.default=r},f545:function(t,e,i){var r=i("4bad");e=r(!1),e.push([t.i,'@charset "UTF-8";\n/* uni.scss */\n/* 页面左右间距 */\n/* 文字尺寸 */\n/*文字颜色*/\n/* 图片加载中颜色 */\n/* 行为相关颜色 */\n/* 边框颜色 */.color-primary[data-v-6d4d1256]{color:#3049c0}.color-333[data-v-6d4d1256]{color:#333}.color-666[data-v-6d4d1256]{color:#666}.color-999[data-v-6d4d1256]{color:#999}.bg-color[data-v-6d4d1256]{background-color:#f7f7f7}.bg-white[data-v-6d4d1256]{background-color:#fff}.white-color[data-v-6d4d1256]{color:#fff}.primary-color[data-v-6d4d1256]{color:#f54400}.success-color[data-v-6d4d1256]{color:#0e130f}.warning-color[data-v-6d4d1256]{color:#f0ad4e}.error-color[data-v-6d4d1256]{color:#dd524d}.primary-text[data-v-6d4d1256]{color:#333}.secondary-text[data-v-6d4d1256]{color:#666}.tip-text[data-v-6d4d1256]{color:#999}.color-e32417[data-v-6d4d1256]{color:#e32417}.u-divider[data-v-6d4d1256]{width:100%;position:relative;text-align:center;\ndisplay:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;\n-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;overflow:hidden;flex-direction:row}.u-divider-line[data-v-6d4d1256]{border-bottom:1px solid #e4e7ed;-webkit-transform:scaleY(.5);transform:scaleY(.5);-webkit-transform-origin:center;transform-origin:center}.u-divider-line--bordercolor--primary[data-v-6d4d1256]{border-color:#2979ff}.u-divider-line--bordercolor--success[data-v-6d4d1256]{border-color:#19be6b}.u-divider-line--bordercolor--error[data-v-6d4d1256]{border-color:#2979ff}.u-divider-line--bordercolor--info[data-v-6d4d1256]{border-color:#909399}.u-divider-line--bordercolor--warning[data-v-6d4d1256]{border-color:#f90}.u-divider-text[data-v-6d4d1256]{white-space:nowrap;padding:0 %?16?%;display:-webkit-inline-box;display:-webkit-inline-flex;display:inline-flex}',""]),t.exports=e},f5cc:function(t,e,i){"use strict";var r=i("b4e5"),o=i.n(r);o.a}}]);