(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-urban-rural-experience-Detail"],{"0b66":function(t,e,i){var r=i("4bad");e=r(!1),e.push([t.i,'@charset "UTF-8";\n/* uni.scss */\n/* 页面左右间距 */\n/* 文字尺寸 */\n/*文字颜色*/\n/* 图片加载中颜色 */\n/* 行为相关颜色 */\n/* 边框颜色 */.color-333[data-v-0ac23044]{color:#333}.color-666[data-v-0ac23044]{color:#666}.color-999[data-v-0ac23044]{color:#999}.bg-color[data-v-0ac23044]{background-color:#f7f7f7}.bg-white[data-v-0ac23044]{background-color:#fff}.white-color[data-v-0ac23044]{color:#fff}.primary-color[data-v-0ac23044]{color:#f54400}.success-color[data-v-0ac23044]{color:#0e130f}.warning-color[data-v-0ac23044]{color:#f0ad4e}.error-color[data-v-0ac23044]{color:#dd524d}.primary-text[data-v-0ac23044]{color:#333}.secondary-text[data-v-0ac23044]{color:#666}.tip-text[data-v-0ac23044]{color:#999}.color-e32417[data-v-0ac23044]{color:#e32417}.detail-wrap .content[data-v-0ac23044]{border-top:%?20?% solid #f7f7f7;padding:%?36?% %?30?%}',""]),t.exports=e},1153:function(t,e,i){"use strict";i.r(e);var r=i("5ca4"),o=i("2ea2");for(var a in o)["default"].indexOf(a)<0&&function(t){i.d(e,t,(function(){return o[t]}))}(a);i("f5cc");var n,c=i("f0c5"),d=Object(c["a"])(o["default"],r["b"],r["c"],!1,null,"71f0b7e9",null,!1,r["a"],n);e["default"]=d.exports},"2b6a":function(t,e,i){"use strict";i.d(e,"b",(function(){return o})),i.d(e,"c",(function(){return a})),i.d(e,"a",(function(){return r}));var r={uSwiper:i("1153").default},o=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"detail-wrap"},[i("u-swiper",{attrs:{list:t.images,height:"562"}}),i("ExperienceItem",{staticStyle:{"margin-bottom":"0"},attrs:{showImgs:!1,item:t.detailInfo}}),i("div",{staticClass:"content"},[i("div",{staticClass:"ft32 bold"},[t._v("展位介绍")]),i("div",{staticClass:"ft28 mt24"},[t._v(t._s(t.detailInfo.introduction))])])],1)},a=[]},"2ea2":function(t,e,i){"use strict";i.r(e);var r=i("ca01"),o=i.n(r);for(var a in r)["default"].indexOf(a)<0&&function(t){i.d(e,t,(function(){return r[t]}))}(a);e["default"]=o.a},"40f7":function(t,e,i){var r=i("0b66");"string"===typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);var o=i("4f06").default;o("3d9b2eb4",r,!0,{sourceMap:!1,shadowMode:!1})},"5ca4":function(t,e,i){"use strict";var r;i.d(e,"b",(function(){return o})),i.d(e,"c",(function(){return a})),i.d(e,"a",(function(){return r}));var o=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"u-swiper-wrap",style:{borderRadius:t.borderRadius+"rpx"}},[i("v-uni-swiper",{style:{height:t.height+"rpx",backgroundColor:t.bgColor},attrs:{current:t.elCurrent,interval:t.interval,circular:t.circular,duration:t.duration,autoplay:t.autoplay,"previous-margin":t.effect3d?t.effect3dPreviousMargin+"rpx":"0","next-margin":t.effect3d?t.effect3dPreviousMargin+"rpx":"0"},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.change.apply(void 0,arguments)},animationfinish:function(e){arguments[0]=e=t.$handleEvent(e),t.animationfinish.apply(void 0,arguments)}}},t._l(t.list,(function(e,r){return i("v-uni-swiper-item",{key:r,staticClass:"u-swiper-item"},[i("v-uni-view",{staticClass:"u-list-image-wrap",class:[t.uCurrent!=r?"u-list-scale":""],style:{borderRadius:t.borderRadius+"rpx",transform:t.effect3d&&t.uCurrent!=r?"scaleY(0.9)":"scaleY(1)",margin:t.effect3d&&t.uCurrent!=r?"0 20rpx":0},on:{click:function(e){e.stopPropagation(),e.preventDefault(),arguments[0]=e=t.$handleEvent(e),t.listClick(r)}}},[i("v-uni-image",{staticClass:"u-swiper-image",attrs:{src:e[t.name]||e,mode:t.imgMode}}),t.title&&e.title?i("v-uni-view",{staticClass:"u-swiper-title u-line-1",style:[{"padding-bottom":t.titlePaddingBottom},t.titleStyle]},[t._v(t._s(e.title))]):t._e()],1)],1)})),1),i("v-uni-view",{staticClass:"u-swiper-indicator",style:{top:"topLeft"==t.indicatorPos||"topCenter"==t.indicatorPos||"topRight"==t.indicatorPos?"12rpx":"auto",bottom:"bottomLeft"==t.indicatorPos||"bottomCenter"==t.indicatorPos||"bottomRight"==t.indicatorPos?"12rpx":"auto",justifyContent:t.justifyContent,padding:"0 "+(t.effect3d?"74rpx":"24rpx")}},["rect"==t.mode?t._l(t.list,(function(e,r){return i("v-uni-view",{key:r,staticClass:"u-indicator-item-rect",class:{"u-indicator-item-rect-active":r==t.uCurrent}})})):t._e(),"dot"==t.mode?t._l(t.list,(function(e,r){return i("v-uni-view",{key:r,staticClass:"u-indicator-item-dot",class:{"u-indicator-item-dot-active":r==t.uCurrent}})})):t._e(),"round"==t.mode?t._l(t.list,(function(e,r){return i("v-uni-view",{key:r,staticClass:"u-indicator-item-round",class:{"u-indicator-item-round-active":r==t.uCurrent}})})):t._e(),"number"==t.mode?[i("v-uni-view",{staticClass:"u-indicator-item-number"},[t._v(t._s(t.uCurrent+1)+"/"+t._s(t.list.length))])]:t._e()],2)],1)},a=[]},"6fa0":function(t,e,i){"use strict";var r=i("40f7"),o=i.n(r);o.a},"823f":function(t,e,i){var r=i("4bad");e=r(!1),e.push([t.i,'@charset "UTF-8";\n/* uni.scss */\n/* 页面左右间距 */\n/* 文字尺寸 */\n/*文字颜色*/\n/* 图片加载中颜色 */\n/* 行为相关颜色 */\n/* 边框颜色 */.color-333[data-v-71f0b7e9]{color:#333}.color-666[data-v-71f0b7e9]{color:#666}.color-999[data-v-71f0b7e9]{color:#999}.bg-color[data-v-71f0b7e9]{background-color:#f7f7f7}.bg-white[data-v-71f0b7e9]{background-color:#fff}.white-color[data-v-71f0b7e9]{color:#fff}.primary-color[data-v-71f0b7e9]{color:#f54400}.success-color[data-v-71f0b7e9]{color:#0e130f}.warning-color[data-v-71f0b7e9]{color:#f0ad4e}.error-color[data-v-71f0b7e9]{color:#dd524d}.primary-text[data-v-71f0b7e9]{color:#333}.secondary-text[data-v-71f0b7e9]{color:#666}.tip-text[data-v-71f0b7e9]{color:#999}.color-e32417[data-v-71f0b7e9]{color:#e32417}.u-swiper-wrap[data-v-71f0b7e9]{position:relative;overflow:hidden;-webkit-transform:translateY(0);transform:translateY(0)}.u-swiper-image[data-v-71f0b7e9]{width:100%;will-change:transform;height:100%;display:block;pointer-events:none}.u-swiper-indicator[data-v-71f0b7e9]{padding:0 %?24?%;position:absolute;\ndisplay:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;\nwidth:100%;z-index:1}.u-indicator-item-rect[data-v-71f0b7e9]{width:%?26?%;height:%?8?%;margin:0 %?6?%;-webkit-transition:all .5s;transition:all .5s;background-color:rgba(0,0,0,.3)}.u-indicator-item-rect-active[data-v-71f0b7e9]{background-color:hsla(0,0%,100%,.8)}.u-indicator-item-dot[data-v-71f0b7e9]{width:%?14?%;height:%?14?%;margin:0 %?6?%;border-radius:%?20?%;-webkit-transition:all .5s;transition:all .5s;background-color:rgba(0,0,0,.3)}.u-indicator-item-dot-active[data-v-71f0b7e9]{background-color:hsla(0,0%,100%,.8)}.u-indicator-item-round[data-v-71f0b7e9]{width:%?14?%;height:%?14?%;margin:0 %?6?%;border-radius:%?20?%;-webkit-transition:all .5s;transition:all .5s;background-color:rgba(0,0,0,.3)}.u-indicator-item-round-active[data-v-71f0b7e9]{width:%?34?%;background-color:hsla(0,0%,100%,.8)}.u-indicator-item-number[data-v-71f0b7e9]{padding:%?6?% %?16?%;line-height:1;background-color:rgba(0,0,0,.3);border-radius:%?100?%;font-size:%?26?%;color:hsla(0,0%,100%,.8)}.u-list-scale[data-v-71f0b7e9]{-webkit-transform-origin:center center;transform-origin:center center}.u-list-image-wrap[data-v-71f0b7e9]{width:100%;height:100%;-webkit-box-flex:1;-webkit-flex:1;flex:1;-webkit-transition:all .5s;transition:all .5s;overflow:hidden;box-sizing:initial;position:relative}.u-swiper-title[data-v-71f0b7e9]{position:absolute;background-color:rgba(0,0,0,.3);bottom:0;left:0;width:100%;font-size:%?28?%;padding:%?12?% %?24?%;color:hsla(0,0%,100%,.9)}.u-swiper-item[data-v-71f0b7e9]{\ndisplay:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;\noverflow:hidden;-webkit-box-align:center;-webkit-align-items:center;align-items:center}',""]),t.exports=e},9050:function(t,e,i){"use strict";var r=i("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,i("d81d"),i("a15b");var o=r(i("95e9")),a={name:"Detail",methods:{getJourneyMerchantBoothInfoById:function(t){var e=this,i={journeyMerchantBoothId:t};this.$api.getJourneyMerchantBoothInfoById(i).then((function(t){if(!t.isError){var i=t.content,r=i.appropriateCrowd.map((function(t){return t.typeName})),o=i.serviceContent.map((function(t){return t.typeName}));i.appropriateCrowdFormat=r.join(" "),i.serviceContentFormat=o.join(" "),e.detailInfo=i,e.images=i.images.map((function(t){return{image:e.$fileHost+t.url}}))}}))}},components:{ExperienceItem:o.default},data:function(){return{detailInfo:{},images:[]}},onLoad:function(t){this.getJourneyMerchantBoothInfoById(t.id)}};e.default=a},9581:function(t,e,i){"use strict";i.r(e);var r=i("2b6a"),o=i("e2ec");for(var a in o)["default"].indexOf(a)<0&&function(t){i.d(e,t,(function(){return o[t]}))}(a);i("6fa0");var n,c=i("f0c5"),d=Object(c["a"])(o["default"],r["b"],r["c"],!1,null,"0ac23044",null,!1,r["a"],n);e["default"]=d.exports},b4e5:function(t,e,i){var r=i("823f");"string"===typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);var o=i("4f06").default;o("44dcac74",r,!0,{sourceMap:!1,shadowMode:!1})},ca01:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,i("a9e3"),i("c975");var r={name:"u-swiper",props:{list:{type:Array,default:function(){return[]}},title:{type:Boolean,default:!1},indicator:{type:Object,default:function(){return{}}},borderRadius:{type:[Number,String],default:8},interval:{type:[String,Number],default:3e3},mode:{type:String,default:"round"},height:{type:[Number,String],default:250},indicatorPos:{type:String,default:"bottomCenter"},effect3d:{type:Boolean,default:!1},effect3dPreviousMargin:{type:[Number,String],default:50},autoplay:{type:Boolean,default:!0},duration:{type:[Number,String],default:500},circular:{type:Boolean,default:!0},imgMode:{type:String,default:"aspectFill"},name:{type:String,default:"image"},bgColor:{type:String,default:"#f3f4f6"},current:{type:[Number,String],default:0},titleStyle:{type:Object,default:function(){return{}}}},watch:{list:function(t,e){t.length!==e.length&&(this.uCurrent=0)},current:function(t){this.uCurrent=t}},data:function(){return{uCurrent:this.current}},computed:{justifyContent:function(){return"topLeft"==this.indicatorPos||"bottomLeft"==this.indicatorPos?"flex-start":"topCenter"==this.indicatorPos||"bottomCenter"==this.indicatorPos?"center":"topRight"==this.indicatorPos||"bottomRight"==this.indicatorPos?"flex-end":void 0},titlePaddingBottom:function(){var t=0;return"none"==this.mode?"12rpx":(t=["bottomLeft","bottomCenter","bottomRight"].indexOf(this.indicatorPos)>=0&&"number"==this.mode?"60rpx":["bottomLeft","bottomCenter","bottomRight"].indexOf(this.indicatorPos)>=0&&"number"!=this.mode?"40rpx":"12rpx",t)},elCurrent:function(){return Number(this.current)}},methods:{listClick:function(t){this.$emit("click",t)},change:function(t){var e=t.detail.current;this.uCurrent=e,this.$emit("change",e)},animationfinish:function(t){}}};e.default=r},e2ec:function(t,e,i){"use strict";i.r(e);var r=i("9050"),o=i.n(r);for(var a in r)["default"].indexOf(a)<0&&function(t){i.d(e,t,(function(){return r[t]}))}(a);e["default"]=o.a},f5cc:function(t,e,i){"use strict";var r=i("b4e5"),o=i.n(r);o.a}}]);