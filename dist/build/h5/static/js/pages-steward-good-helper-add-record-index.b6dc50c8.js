(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-steward-good-helper-add-record-index"],{"13b4":function(e,t,a){"use strict";a.d(t,"b",(function(){return i})),a.d(t,"c",(function(){return n})),a.d(t,"a",(function(){return o}));var o={uPopup:a("df25").default},i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-uni-view",{staticClass:"u-select"},[a("u-popup",{attrs:{maskCloseAble:e.maskCloseAble,mode:"bottom",popup:!1,length:"auto",safeAreaInsetBottom:e.safeAreaInsetBottom,"z-index":e.uZIndex},on:{close:function(t){arguments[0]=t=e.$handleEvent(t),e.close.apply(void 0,arguments)}},model:{value:e.value,callback:function(t){e.value=t},expression:"value"}},[a("v-uni-view",{staticClass:"u-select"},[a("v-uni-view",{staticClass:"u-select__header",on:{touchmove:function(t){t.stopPropagation(),t.preventDefault(),arguments[0]=t=e.$handleEvent(t)}}},[a("v-uni-view",{staticClass:"u-select__header__cancel u-select__header__btn",style:{color:e.cancelColor},attrs:{"hover-class":"u-hover-class","hover-stay-time":150},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.getResult("cancel")}}},[e._v(e._s(e.cancelText))]),a("v-uni-view",{staticClass:"u-select__header__title"},[e._v(e._s(e.title))]),a("v-uni-view",{staticClass:"u-select__header__confirm u-select__header__btn",style:{color:e.moving?e.cancelColor:e.confirmColor},attrs:{"hover-class":"u-hover-class","hover-stay-time":150},on:{touchmove:function(t){t.stopPropagation(),arguments[0]=t=e.$handleEvent(t)},click:function(t){t.stopPropagation(),arguments[0]=t=e.$handleEvent(t),e.getResult("confirm")}}},[e._v(e._s(e.confirmText))])],1),a("v-uni-view",{staticClass:"u-select__body"},[a("v-uni-picker-view",{staticClass:"u-select__body__picker-view",attrs:{value:e.defaultSelector},on:{change:function(t){arguments[0]=t=e.$handleEvent(t),e.columnChange.apply(void 0,arguments)},pickstart:function(t){arguments[0]=t=e.$handleEvent(t),e.pickstart.apply(void 0,arguments)},pickend:function(t){arguments[0]=t=e.$handleEvent(t),e.pickend.apply(void 0,arguments)}}},e._l(e.columnData,(function(t,o){return a("v-uni-picker-view-column",{key:o},e._l(t,(function(t,o){return a("v-uni-view",{key:o,staticClass:"u-select__body__picker-view__item"},[a("v-uni-view",{staticClass:"u-line-1"},[e._v(e._s(t[e.labelName]))])],1)})),1)})),1)],1)],1)],1)],1)},n=[]},2590:function(e,t,a){"use strict";var o=a("4ea4");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("a4d3"),a("e01a");var i=o(a("5530")),n=o(a("3a9a")),r={methods:{onShowStatusSelect:function(){this.scheduleId||(this.showStatusSelected=!0)},onShowTimePicker:function(){this.showTimePicker=!0},onStatusSelect:function(e){var t=e[0],a=t.label,o=t.value;this.form.data.status=o,this.form.statusName=a},confirmTimePicker:function(e){var t=e.timestamp,a=1e3*t;this.form.data.recordTime=a,this.form.recordTimeName=this.$moment(a).format("YYYY-MM-DD HH:mm"),this.setTimePickerDefaultValue(a)},setTimePickerDefaultValue:function(e){this.timePickerConfig.defaultTime=this.$moment(e).format("YYYY-MM-DD HH:mm")},onSubmit:function(){this.isDisabled||(this.scheduleId?this.modifyJourneyHelperProjectSchedule():this.createJourneyHelperProjectSchedule())},createJourneyHelperProjectSchedule:function(){var e=this,t=(0,i.default)({id:this.projectId},this.form.data);this.$api.createJourneyHelperProjectSchedule(t).then((function(t){if(t.isError)return e.$msg(t.message);e.$msg("记录添加成功"),setTimeout((function(){uni.$emit("helperProjectOver"),uni.navigateBack()}),500)}))},modifyJourneyHelperProjectSchedule:function(){var e=this,t=(0,i.default)({scheduleId:this.scheduleId},this.form.data);this.$api.modifyJourneyHelperProjectSchedule(t).then((function(t){if(t.isError)return e.$msg(t.message);e.$msg("记录编辑成功"),setTimeout((function(){uni.$emit("helperProjectOver"),uni.navigateBack()}),500)}))},setFormData:function(e){var t=e.status,a=e.recordTime,o=e.description,i=e.attachmentDTOList;this.form.data={status:t,recordTime:a,description:o,attachmentList:i},this.form.statusName=2===t?"跟进中":"已办结",this.form.recordTimeName=this.$moment(a).format("YYYY-MM-DD HH:mm"),this.setTimePickerDefaultValue(a)}},data:function(){return{projectId:null,scheduleId:null,form:{statusName:"",recordTimeName:"",data:{status:null,recordTime:null,description:"",attachmentList:[]}},showStatusSelected:!1,statusList:[{label:"跟进中",value:2},{label:"已办结",value:3}],showTimePicker:!1,timePickerConfig:{params:{year:!0,month:!0,day:!0,hour:!0,minute:!0,timestamp:!0},defaultTime:""}}},computed:{isDisabled:function(){var e=this.form.data,t=e.status,a=e.recordTime,o=e.description;return!(t&&a&&o)}},destroyed:function(){uni.removeStorageSync("journeyHelperProjectSchedule")},onLoad:function(e){var t=e.projectId,a=e.scheduleId;if(this.projectId=t,a){uni.setNavigationBarTitle({title:"编辑记录"}),this.scheduleId=a;var o=JSON.parse(uni.getStorageSync("journeyHelperProjectSchedule"));this.setFormData(o)}},components:{UploadImages:n.default}};t.default=r},3491:function(e,t,a){"use strict";a.d(t,"b",(function(){return i})),a.d(t,"c",(function(){return n})),a.d(t,"a",(function(){return o}));var o={uForm:a("aa8f").default,uFormItem:a("e0a3").default,uInput:a("d5da").default,uSelect:a("4c05").default,uPicker:a("665d").default},i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"record-wrap"},[a("u-form",{ref:"form",attrs:{model:e.form.data}},[a("div",{staticClass:"pl32 pr32 bg-white"},[a("u-form-item",{attrs:{label:"跟进状态","label-width":"192",prop:"status"}},[a("div",{staticClass:"between-row center-align flex1 relative"},[a("u-input",{attrs:{disabled:!0,placeholder:"选择跟进状态"},model:{value:e.form.statusName,callback:function(t){e.$set(e.form,"statusName",t)},expression:"form.statusName"}}),a("svg-icon",{staticClass:"ft20 color-666",attrs:{icon:"icon_xiangyoujiantou"}}),a("div",{staticClass:"btn-area",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.onShowStatusSelect.apply(void 0,arguments)}}})],1)]),a("u-form-item",{attrs:{label:"记录时间","label-width":"192",prop:"recordTime"}},[a("div",{staticClass:"between-row center-align flex1 relative"},[a("u-input",{attrs:{disabled:!0,placeholder:"选择跟进状态"},model:{value:e.form.recordTimeName,callback:function(t){e.$set(e.form,"recordTimeName",t)},expression:"form.recordTimeName"}}),a("svg-icon",{staticClass:"ft28 color-666",attrs:{icon:"icon_riqi"}}),a("div",{staticClass:"btn-area",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.onShowTimePicker.apply(void 0,arguments)}}})],1)]),a("u-form-item",{attrs:{label:"记录内容","label-position":"top","border-bottom":!1,prop:"description"}},[a("div",{staticClass:"flex1"},[a("u-input",{attrs:{type:"textarea",height:"160",maxlength:"200",placeholder:"输入内容，记录项目的服务进度"},model:{value:e.form.data.description,callback:function(t){e.$set(e.form.data,"description",t)},expression:"form.data.description"}}),a("div",{staticClass:"ft22 color-999",staticStyle:{"text-align":"right","line-height":"24rpx"}},[e._v(e._s(e.form.data.description.length)+"/200")])],1)])],1),a("div",{staticClass:"mt24 pl32 bg-white"},[a("u-form-item",{attrs:{label:"图片上传（非必填）","label-width":"192","label-position":"top",prop:"playDays"}},[a("upload-images",{attrs:{count:3,length:3,imageTypeName:"sourceType",imageData:e.form.data.attachmentList},on:{"update:imageData":function(t){arguments[0]=t=e.$handleEvent(t),e.$set(e.form.data,"attachmentList",t)},"update:image-data":function(t){arguments[0]=t=e.$handleEvent(t),e.$set(e.form.data,"attachmentList",t)}}})],1)],1)]),a("div",{staticClass:"footer-btn pl32 pr32"},[a("div",{staticClass:"submit tc mt16 ft32 medium",class:e.isDisabled&&"disabled",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.onSubmit.apply(void 0,arguments)}}},[e._v(e._s(e.scheduleId?"保存":"提交"))])]),a("u-select",{attrs:{list:e.statusList,"confirm-color":"#E32417"},on:{confirm:function(t){arguments[0]=t=e.$handleEvent(t),e.onStatusSelect.apply(void 0,arguments)}},model:{value:e.showStatusSelected,callback:function(t){e.showStatusSelected=t},expression:"showStatusSelected"}}),a("u-picker",{attrs:{mode:"time",title:"日期","confirm-color":"#E32417",params:e.timePickerConfig.params,"start-year":e.timePickerConfig.startYear,"end-year":e.timePickerConfig.endYear,"default-time":e.timePickerConfig.defaultTime},on:{confirm:function(t){arguments[0]=t=e.$handleEvent(t),e.confirmTimePicker.apply(void 0,arguments)}},model:{value:e.showTimePicker,callback:function(t){e.showTimePicker=t},expression:"showTimePicker"}})],1)},n=[]},"4c05":function(e,t,a){"use strict";a.r(t);var o=a("13b4"),i=a("f039");for(var n in i)["default"].indexOf(n)<0&&function(e){a.d(t,e,(function(){return i[e]}))}(n);a("ff5a");var r,l=a("f0c5"),c=Object(l["a"])(i["default"],o["b"],o["c"],!1,null,"c980ebec",null,!1,o["a"],r);t["default"]=c.exports},"4e37":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("a9e3"),a("cb29"),a("d81d");var o={props:{list:{type:Array,default:function(){return[]}},border:{type:Boolean,default:!0},value:{type:Boolean,default:!1},cancelColor:{type:String,default:"#606266"},confirmColor:{type:String,default:"#2979ff"},zIndex:{type:[String,Number],default:0},safeAreaInsetBottom:{type:Boolean,default:!1},maskCloseAble:{type:Boolean,default:!0},defaultValue:{type:Array,default:function(){return[0]}},mode:{type:String,default:"single-column"},valueName:{type:String,default:"value"},labelName:{type:String,default:"label"},childName:{type:String,default:"children"},title:{type:String,default:""},cancelText:{type:String,default:"取消"},confirmText:{type:String,default:"确认"}},data:function(){return{defaultSelector:[0],columnData:[],selectValue:[],lastSelectIndex:[],columnNum:0,moving:!1}},watch:{value:{immediate:!0,handler:function(e){var t=this;e&&setTimeout((function(){return t.init()}),10)}}},computed:{uZIndex:function(){return this.zIndex?this.zIndex:this.$u.zIndex.popup}},methods:{pickstart:function(){},pickend:function(){},init:function(){this.setColumnNum(),this.setDefaultSelector(),this.setColumnData(),this.setSelectValue()},setDefaultSelector:function(){this.defaultSelector=this.defaultValue.length==this.columnNum?this.defaultValue:Array(this.columnNum).fill(0),this.lastSelectIndex=this.$u.deepClone(this.defaultSelector)},setColumnNum:function(){if("single-column"==this.mode)this.columnNum=1;else if("mutil-column"==this.mode)this.columnNum=this.list.length;else if("mutil-column-auto"==this.mode){var e=1,t=this.list;while(t[0][this.childName])t=t[0]?t[0][this.childName]:{},e++;this.columnNum=e}},setColumnData:function(){var e=[];if(this.selectValue=[],"mutil-column-auto"==this.mode)for(var t=this.list[this.defaultSelector.length?this.defaultSelector[0]:0],a=0;a<this.columnNum;a++)0==a?(e[a]=this.list,t=t[this.childName]):(e[a]=t,t=t[this.defaultSelector[a]][this.childName]);else"single-column"==this.mode?e[0]=this.list:e=this.list;this.columnData=e},setSelectValue:function(){for(var e=null,t=0;t<this.columnNum;t++){e=this.columnData[t][this.defaultSelector[t]];var a={value:e?e[this.valueName]:null,label:e?e[this.labelName]:null};e&&e.extra&&(a.extra=e.extra),this.selectValue.push(a)}},columnChange:function(e){var t=this,a=null,o=e.detail.value;if(this.selectValue=[],"mutil-column-auto"==this.mode){this.lastSelectIndex.map((function(e,t){e!=o[t]&&(a=t)})),this.defaultSelector=o;for(var i=a+1;i<this.columnNum;i++)this.columnData[i]=this.columnData[i-1][i-1==a?o[a]:0][this.childName],this.defaultSelector[i]=0;o.map((function(e,a){var i=t.columnData[a][o[a]],n={value:i?i[t.valueName]:null,label:i?i[t.labelName]:null};i&&void 0!==i.extra&&(n.extra=i.extra),t.selectValue.push(n)})),this.lastSelectIndex=o}else if("single-column"==this.mode){var n=this.columnData[0][o[0]],r={value:n?n[this.valueName]:null,label:n?n[this.labelName]:null};n&&void 0!==n.extra&&(r.extra=n.extra),this.selectValue.push(r)}else"mutil-column"==this.mode&&o.map((function(e,a){var i=t.columnData[a][o[a]],n={value:i?i[t.valueName]:null,label:i?i[t.labelName]:null};i&&void 0!==i.extra&&(n.extra=i.extra),t.selectValue.push(n)}))},close:function(){this.$emit("input",!1)},getResult:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;e&&this.$emit(e,this.selectValue),this.close()},selectHandler:function(){this.$emit("click")}}};t.default=o},"5a64":function(e,t,a){"use strict";var o=a("b6ca"),i=a.n(o);i.a},"6f18":function(e,t,a){var o=a("e55d");"string"===typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);var i=a("4f06").default;i("b7b50988",o,!0,{sourceMap:!1,shadowMode:!1})},"9f863":function(e,t,a){"use strict";var o=a("df66"),i=a.n(o);i.a},b6ca:function(e,t,a){var o=a("ebb6");"string"===typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);var i=a("4f06").default;i("f1a162d2",o,!0,{sourceMap:!1,shadowMode:!1})},cb29:function(e,t,a){var o=a("23e7"),i=a("81d5"),n=a("44d2");o({target:"Array",proto:!0},{fill:i}),n("fill")},df66:function(e,t,a){var o=a("f6007");"string"===typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);var i=a("4f06").default;i("14e383ee",o,!0,{sourceMap:!1,shadowMode:!1})},e55d:function(e,t,a){var o=a("4bad");t=o(!1),t.push([e.i,'@charset "UTF-8";\n/* uni.scss */\n/* 页面左右间距 */\n/* 文字尺寸 */\n/*文字颜色*/\n/* 图片加载中颜色 */\n/* 行为相关颜色 */\n/* 边框颜色 */.color-primary[data-v-c980ebec]{color:#3049c0}.color-333[data-v-c980ebec]{color:#333}.color-666[data-v-c980ebec]{color:#666}.color-999[data-v-c980ebec]{color:#999}.bg-color[data-v-c980ebec]{background-color:#f7f7f7}.bg-white[data-v-c980ebec]{background-color:#fff}.white-color[data-v-c980ebec]{color:#fff}.primary-color[data-v-c980ebec]{color:#f54400}.success-color[data-v-c980ebec]{color:#0e130f}.warning-color[data-v-c980ebec]{color:#f0ad4e}.error-color[data-v-c980ebec]{color:#dd524d}.primary-text[data-v-c980ebec]{color:#333}.secondary-text[data-v-c980ebec]{color:#666}.tip-text[data-v-c980ebec]{color:#999}.color-e32417[data-v-c980ebec]{color:#e32417}.u-select__action[data-v-c980ebec]{position:relative;line-height:%?70?%;height:%?70?%}.u-select__action__icon[data-v-c980ebec]{position:absolute;right:%?20?%;top:50%;-webkit-transition:-webkit-transform .4s;transition:-webkit-transform .4s;transition:transform .4s;transition:transform .4s,-webkit-transform .4s;-webkit-transform:translateY(-50%);transform:translateY(-50%);z-index:1}.u-select__action__icon--reverse[data-v-c980ebec]{-webkit-transform:rotate(-180deg) translateY(50%);transform:rotate(-180deg) translateY(50%)}.u-select__hader__title[data-v-c980ebec]{color:#606266}.u-select--border[data-v-c980ebec]{border-radius:%?6?%;border-radius:4px;border:1px solid #dcdfe6}.u-select__header[data-v-c980ebec]{\ndisplay:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;\n-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;height:%?80?%;padding:0 %?40?%}.u-select__body[data-v-c980ebec]{width:100%;height:%?500?%;overflow:hidden;background-color:#fff}.u-select__body__picker-view[data-v-c980ebec]{height:100%;box-sizing:border-box}.u-select__body__picker-view__item[data-v-c980ebec]{\ndisplay:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;\n-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;font-size:%?32?%;color:#303133;padding:0 %?8?%}',""]),e.exports=t},ebb6:function(e,t,a){var o=a("4bad");t=o(!1),t.push([e.i,"uni-page-body[data-v-854234ea]{height:100%;background:#f7f7f7}body.?%PAGE?%[data-v-854234ea]{background:#f7f7f7}",""]),e.exports=t},f039:function(e,t,a){"use strict";a.r(t);var o=a("4e37"),i=a.n(o);for(var n in o)["default"].indexOf(n)<0&&function(e){a.d(t,e,(function(){return o[e]}))}(n);t["default"]=i.a},f1a7:function(e,t,a){"use strict";a.r(t);var o=a("3491"),i=a("f89d");for(var n in i)["default"].indexOf(n)<0&&function(e){a.d(t,e,(function(){return i[e]}))}(n);a("5a64"),a("9f863");var r,l=a("f0c5"),c=Object(l["a"])(i["default"],o["b"],o["c"],!1,null,"854234ea",null,!1,o["a"],r);t["default"]=c.exports},f6007:function(e,t,a){var o=a("4bad");t=o(!1),t.push([e.i,'@charset "UTF-8";\n/* uni.scss */\n/* 页面左右间距 */\n/* 文字尺寸 */\n/*文字颜色*/\n/* 图片加载中颜色 */\n/* 行为相关颜色 */\n/* 边框颜色 */.color-primary[data-v-854234ea]{color:#3049c0}.color-333[data-v-854234ea]{color:#333}.color-666[data-v-854234ea]{color:#666}.color-999[data-v-854234ea]{color:#999}.bg-color[data-v-854234ea]{background-color:#f7f7f7}.bg-white[data-v-854234ea]{background-color:#fff}.white-color[data-v-854234ea]{color:#fff}.primary-color[data-v-854234ea]{color:#f54400}.success-color[data-v-854234ea]{color:#0e130f}.warning-color[data-v-854234ea]{color:#f0ad4e}.error-color[data-v-854234ea]{color:#dd524d}.primary-text[data-v-854234ea]{color:#333}.secondary-text[data-v-854234ea]{color:#666}.tip-text[data-v-854234ea]{color:#999}.color-e32417[data-v-854234ea]{color:#e32417}.record-wrap .footer-btn[data-v-854234ea]{position:fixed;bottom:0;left:0;right:0;height:%?128?%;background:#fff}.record-wrap .footer-btn .submit[data-v-854234ea]{width:100%;height:%?98?%;line-height:%?98?%;border-radius:%?50?%;background:#e32417;color:#fff}.record-wrap .footer-btn .disabled[data-v-854234ea]{background:#ccc}.record-wrap .btn-area[data-v-854234ea]{position:absolute;top:0;right:0;left:0;bottom:0}',""]),e.exports=t},f89d:function(e,t,a){"use strict";a.r(t);var o=a("2590"),i=a.n(o);for(var n in o)["default"].indexOf(n)<0&&function(e){a.d(t,e,(function(){return o[e]}))}(n);t["default"]=i.a},ff5a:function(e,t,a){"use strict";var o=a("6f18"),i=a.n(o);i.a}}]);