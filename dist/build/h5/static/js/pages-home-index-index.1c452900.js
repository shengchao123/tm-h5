(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-home-index-index"],{"09f0":function(t,e,i){t.exports=i.p+"static/img/05.0b823880.png"},"0f16":function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,i("dca8");var r={name:"index",methods:{onCard:function(t){uni.navigateTo({url:t.url})}},data:function(){return{swiperList:Object.freeze([{image:i("4e1e")},{image:i("143b")}]),cardList:Object.freeze([{img:i("fdd1"),style:{left:"30rpx",top:"205rpx"},url:"/pages/original-travel/index/index"},{img:i("3d79"),style:{left:"172rpx",top:"285rpx"},url:"/pages/union/index/index"},{img:i("45b7"),style:{left:"312rpx",top:"365rpx"},url:"/pages/urban-rural/index/index"},{img:i("dc29"),style:{right:"172rpx",top:"285rpx"},url:"/pages/think-tank/index/index"},{img:i("09f0"),style:{right:"30rpx",top:"205rpx"},url:"/pages/steward/index/index"}])}},onLoad:function(t){t.masterOrgId&&(uni.setStorageSync("masterOrgId",t.masterOrgId),uni.setStorageSync("orgId",t.masterOrgId))}};e.default=r},1153:function(t,e,i){"use strict";i.r(e);var r=i("5ca4"),a=i("2ea2");for(var n in a)["default"].indexOf(n)<0&&function(t){i.d(e,t,(function(){return a[t]}))}(n);i("f5cc");var o,c=i("f0c5"),d=Object(c["a"])(a["default"],r["b"],r["c"],!1,null,"71f0b7e9",null,!1,r["a"],o);e["default"]=d.exports},"143b":function(t,e,i){t.exports=i.p+"static/img/banner2.01b9d234.png"},"1a30":function(t,e,i){"use strict";i.r(e);var r=i("0f16"),a=i.n(r);for(var n in r)["default"].indexOf(n)<0&&function(t){i.d(e,t,(function(){return r[t]}))}(n);e["default"]=a.a},"2b9b":function(t,e,i){var r=i("3a03");"string"===typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);var a=i("4f06").default;a("0ca76d30",r,!0,{sourceMap:!1,shadowMode:!1})},"2ea2":function(t,e,i){"use strict";i.r(e);var r=i("ca01"),a=i.n(r);for(var n in r)["default"].indexOf(n)<0&&function(t){i.d(e,t,(function(){return r[t]}))}(n);e["default"]=a.a},"353d":function(t,e,i){"use strict";i.r(e);var r=i("66e1"),a=i("1a30");for(var n in a)["default"].indexOf(n)<0&&function(t){i.d(e,t,(function(){return a[t]}))}(n);i("3df8");var o,c=i("f0c5"),d=Object(c["a"])(a["default"],r["b"],r["c"],!1,null,"5fa57119",null,!1,r["a"],o);e["default"]=d.exports},"3a03":function(t,e,i){var r=i("4bad"),a=i("ffbf"),n=i("c702");e=r(!1);var o=a(n);e.push([t.i,'@charset "UTF-8";\n/* uni.scss */\n/* 页面左右间距 */\n/* 文字尺寸 */\n/*文字颜色*/\n/* 图片加载中颜色 */\n/* 行为相关颜色 */\n/* 边框颜色 */.color-333[data-v-5fa57119]{color:#333}.color-666[data-v-5fa57119]{color:#666}.color-999[data-v-5fa57119]{color:#999}.bg-color[data-v-5fa57119]{background-color:#f7f7f7}.bg-white[data-v-5fa57119]{background-color:#fff}.white-color[data-v-5fa57119]{color:#fff}.primary-color[data-v-5fa57119]{color:#f54400}.success-color[data-v-5fa57119]{color:#0e130f}.warning-color[data-v-5fa57119]{color:#f0ad4e}.error-color[data-v-5fa57119]{color:#dd524d}.primary-text[data-v-5fa57119]{color:#333}.secondary-text[data-v-5fa57119]{color:#666}.tip-text[data-v-5fa57119]{color:#999}.color-e32417[data-v-5fa57119]{color:#e32417}.home-index-wrap .content[data-v-5fa57119]{background:url('+o+") no-repeat 0 0;background-size:100% 100%;position:absolute;width:100vw;height:100vh;top:0;bottom:0;overflow:hidden}.home-index-wrap .content .swiper[data-v-5fa57119]{margin:%?50?% %?30?% 0}.home-index-wrap .content .main-card[data-v-5fa57119]{height:%?334?%;margin-top:%?50?%}.home-index-wrap .content .card[data-v-5fa57119]{position:absolute;width:%?128?%}",""]),t.exports=e},"3d79":function(t,e,i){t.exports=i.p+"static/img/02.fb82bf5f.png"},"3df8":function(t,e,i){"use strict";var r=i("2b9b"),a=i.n(r);a.a},"45b7":function(t,e,i){t.exports=i.p+"static/img/03.767334f3.png"},"4e1e":function(t,e,i){t.exports=i.p+"static/img/banner.5410f3cc.png"},"5a47":function(t,e,i){t.exports=i.p+"static/img/00.3bba04cc.png"},"5ca4":function(t,e,i){"use strict";var r;i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return n})),i.d(e,"a",(function(){return r}));var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"u-swiper-wrap",style:{borderRadius:t.borderRadius+"rpx"}},[i("v-uni-swiper",{style:{height:t.height+"rpx",backgroundColor:t.bgColor},attrs:{current:t.elCurrent,interval:t.interval,circular:t.circular,duration:t.duration,autoplay:t.autoplay,"previous-margin":t.effect3d?t.effect3dPreviousMargin+"rpx":"0","next-margin":t.effect3d?t.effect3dPreviousMargin+"rpx":"0"},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.change.apply(void 0,arguments)},animationfinish:function(e){arguments[0]=e=t.$handleEvent(e),t.animationfinish.apply(void 0,arguments)}}},t._l(t.list,(function(e,r){return i("v-uni-swiper-item",{key:r,staticClass:"u-swiper-item"},[i("v-uni-view",{staticClass:"u-list-image-wrap",class:[t.uCurrent!=r?"u-list-scale":""],style:{borderRadius:t.borderRadius+"rpx",transform:t.effect3d&&t.uCurrent!=r?"scaleY(0.9)":"scaleY(1)",margin:t.effect3d&&t.uCurrent!=r?"0 20rpx":0},on:{click:function(e){e.stopPropagation(),e.preventDefault(),arguments[0]=e=t.$handleEvent(e),t.listClick(r)}}},[i("v-uni-image",{staticClass:"u-swiper-image",attrs:{src:e[t.name]||e,mode:t.imgMode}}),t.title&&e.title?i("v-uni-view",{staticClass:"u-swiper-title u-line-1",style:[{"padding-bottom":t.titlePaddingBottom},t.titleStyle]},[t._v(t._s(e.title))]):t._e()],1)],1)})),1),i("v-uni-view",{staticClass:"u-swiper-indicator",style:{top:"topLeft"==t.indicatorPos||"topCenter"==t.indicatorPos||"topRight"==t.indicatorPos?"12rpx":"auto",bottom:"bottomLeft"==t.indicatorPos||"bottomCenter"==t.indicatorPos||"bottomRight"==t.indicatorPos?"12rpx":"auto",justifyContent:t.justifyContent,padding:"0 "+(t.effect3d?"74rpx":"24rpx")}},["rect"==t.mode?t._l(t.list,(function(e,r){return i("v-uni-view",{key:r,staticClass:"u-indicator-item-rect",class:{"u-indicator-item-rect-active":r==t.uCurrent}})})):t._e(),"dot"==t.mode?t._l(t.list,(function(e,r){return i("v-uni-view",{key:r,staticClass:"u-indicator-item-dot",class:{"u-indicator-item-dot-active":r==t.uCurrent}})})):t._e(),"round"==t.mode?t._l(t.list,(function(e,r){return i("v-uni-view",{key:r,staticClass:"u-indicator-item-round",class:{"u-indicator-item-round-active":r==t.uCurrent}})})):t._e(),"number"==t.mode?[i("v-uni-view",{staticClass:"u-indicator-item-number"},[t._v(t._s(t.uCurrent+1)+"/"+t._s(t.list.length))])]:t._e()],2)],1)},n=[]},"66e1":function(t,e,i){"use strict";i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return n})),i.d(e,"a",(function(){return r}));var r={uSwiper:i("1153").default},a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"home-index-wrap relative"},[r("div",{staticClass:"content"},[r("u-swiper",{staticClass:"swiper",attrs:{list:t.swiperList,height:"388"}}),r("div",{staticClass:"tc relative"},[r("img",{staticClass:"main-card",attrs:{src:i("5a47")}}),t._l(t.cardList,(function(e,i){return[r("img",{key:i,staticClass:"card",style:e.style,attrs:{src:e.img},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.onCard(e)}}})]}))],2)],1)])},n=[]},"823f":function(t,e,i){var r=i("4bad");e=r(!1),e.push([t.i,'@charset "UTF-8";\n/* uni.scss */\n/* 页面左右间距 */\n/* 文字尺寸 */\n/*文字颜色*/\n/* 图片加载中颜色 */\n/* 行为相关颜色 */\n/* 边框颜色 */.color-333[data-v-71f0b7e9]{color:#333}.color-666[data-v-71f0b7e9]{color:#666}.color-999[data-v-71f0b7e9]{color:#999}.bg-color[data-v-71f0b7e9]{background-color:#f7f7f7}.bg-white[data-v-71f0b7e9]{background-color:#fff}.white-color[data-v-71f0b7e9]{color:#fff}.primary-color[data-v-71f0b7e9]{color:#f54400}.success-color[data-v-71f0b7e9]{color:#0e130f}.warning-color[data-v-71f0b7e9]{color:#f0ad4e}.error-color[data-v-71f0b7e9]{color:#dd524d}.primary-text[data-v-71f0b7e9]{color:#333}.secondary-text[data-v-71f0b7e9]{color:#666}.tip-text[data-v-71f0b7e9]{color:#999}.color-e32417[data-v-71f0b7e9]{color:#e32417}.u-swiper-wrap[data-v-71f0b7e9]{position:relative;overflow:hidden;-webkit-transform:translateY(0);transform:translateY(0)}.u-swiper-image[data-v-71f0b7e9]{width:100%;will-change:transform;height:100%;display:block;pointer-events:none}.u-swiper-indicator[data-v-71f0b7e9]{padding:0 %?24?%;position:absolute;\ndisplay:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;\nwidth:100%;z-index:1}.u-indicator-item-rect[data-v-71f0b7e9]{width:%?26?%;height:%?8?%;margin:0 %?6?%;-webkit-transition:all .5s;transition:all .5s;background-color:rgba(0,0,0,.3)}.u-indicator-item-rect-active[data-v-71f0b7e9]{background-color:hsla(0,0%,100%,.8)}.u-indicator-item-dot[data-v-71f0b7e9]{width:%?14?%;height:%?14?%;margin:0 %?6?%;border-radius:%?20?%;-webkit-transition:all .5s;transition:all .5s;background-color:rgba(0,0,0,.3)}.u-indicator-item-dot-active[data-v-71f0b7e9]{background-color:hsla(0,0%,100%,.8)}.u-indicator-item-round[data-v-71f0b7e9]{width:%?14?%;height:%?14?%;margin:0 %?6?%;border-radius:%?20?%;-webkit-transition:all .5s;transition:all .5s;background-color:rgba(0,0,0,.3)}.u-indicator-item-round-active[data-v-71f0b7e9]{width:%?34?%;background-color:hsla(0,0%,100%,.8)}.u-indicator-item-number[data-v-71f0b7e9]{padding:%?6?% %?16?%;line-height:1;background-color:rgba(0,0,0,.3);border-radius:%?100?%;font-size:%?26?%;color:hsla(0,0%,100%,.8)}.u-list-scale[data-v-71f0b7e9]{-webkit-transform-origin:center center;transform-origin:center center}.u-list-image-wrap[data-v-71f0b7e9]{width:100%;height:100%;-webkit-box-flex:1;-webkit-flex:1;flex:1;-webkit-transition:all .5s;transition:all .5s;overflow:hidden;box-sizing:initial;position:relative}.u-swiper-title[data-v-71f0b7e9]{position:absolute;background-color:rgba(0,0,0,.3);bottom:0;left:0;width:100%;font-size:%?28?%;padding:%?12?% %?24?%;color:hsla(0,0%,100%,.9)}.u-swiper-item[data-v-71f0b7e9]{\ndisplay:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;\noverflow:hidden;-webkit-box-align:center;-webkit-align-items:center;align-items:center}',""]),t.exports=e},b4e5:function(t,e,i){var r=i("823f");"string"===typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);var a=i("4f06").default;a("44dcac74",r,!0,{sourceMap:!1,shadowMode:!1})},c702:function(t,e,i){t.exports=i.p+"static/img/bg.c66470fb.jpg"},ca01:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,i("a9e3"),i("c975");var r={name:"u-swiper",props:{list:{type:Array,default:function(){return[]}},title:{type:Boolean,default:!1},indicator:{type:Object,default:function(){return{}}},borderRadius:{type:[Number,String],default:8},interval:{type:[String,Number],default:3e3},mode:{type:String,default:"round"},height:{type:[Number,String],default:250},indicatorPos:{type:String,default:"bottomCenter"},effect3d:{type:Boolean,default:!1},effect3dPreviousMargin:{type:[Number,String],default:50},autoplay:{type:Boolean,default:!0},duration:{type:[Number,String],default:500},circular:{type:Boolean,default:!0},imgMode:{type:String,default:"aspectFill"},name:{type:String,default:"image"},bgColor:{type:String,default:"#f3f4f6"},current:{type:[Number,String],default:0},titleStyle:{type:Object,default:function(){return{}}}},watch:{list:function(t,e){t.length!==e.length&&(this.uCurrent=0)},current:function(t){this.uCurrent=t}},data:function(){return{uCurrent:this.current}},computed:{justifyContent:function(){return"topLeft"==this.indicatorPos||"bottomLeft"==this.indicatorPos?"flex-start":"topCenter"==this.indicatorPos||"bottomCenter"==this.indicatorPos?"center":"topRight"==this.indicatorPos||"bottomRight"==this.indicatorPos?"flex-end":void 0},titlePaddingBottom:function(){var t=0;return"none"==this.mode?"12rpx":(t=["bottomLeft","bottomCenter","bottomRight"].indexOf(this.indicatorPos)>=0&&"number"==this.mode?"60rpx":["bottomLeft","bottomCenter","bottomRight"].indexOf(this.indicatorPos)>=0&&"number"!=this.mode?"40rpx":"12rpx",t)},elCurrent:function(){return Number(this.current)}},methods:{listClick:function(t){this.$emit("click",t)},change:function(t){var e=t.detail.current;this.uCurrent=e,this.$emit("change",e)},animationfinish:function(t){}}};e.default=r},dc29:function(t,e,i){t.exports=i.p+"static/img/04.90b8d05d.png"},f5cc:function(t,e,i){"use strict";var r=i("b4e5"),a=i.n(r);a.a},fdd1:function(t,e,i){t.exports=i.p+"static/img/01.99730f8c.png"},ffbf:function(t,e,i){"use strict";t.exports=function(t,e){return e||(e={}),t=t&&t.__esModule?t.default:t,"string"!==typeof t?t:(/^['"].*['"]$/.test(t)&&(t=t.slice(1,-1)),e.hash&&(t+=e.hash),/["'() \t\n]/.test(t)||e.needQuotes?'"'.concat(t.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):t)}}}]);