(window.webpackJsonp=window.webpackJsonp||[]).push([[27,17],{206:function(e,t,r){"use strict";r.r(t);var n={name:"Button",props:{value:{type:String,required:!0},color:{type:String,required:!1,default:"text-white"},background:{type:String,required:!1,default:"bg-primary-600"},border:{type:String,required:!1,default:"border-2 border-primary-600"},customClass:{type:String,required:!1,default:"w-full"},padding:{type:String,required:!1,default:"px-6 py-4"},enabled:{type:Boolean,required:!1,default:!0}}},o=r(34),component=Object(o.a)(n,(function(){var e=this,t=e.$createElement;return(e._self._c||t)("div",{staticClass:"font-medium text-center rounded-lg ",class:[e.color,e.enabled?e.border:"border-2 border-transparent",e.padding,e.customClass,e.enabled?e.background:"bg-gray-300",e.enabled?"cursor-pointer":"cursor-not-allowed"],on:{click:function(t){return e.$emit("action")}}},[e._v("\n  "+e._s(e.value)+"\n")])}),[],!1,null,null,null);t.default=component.exports},226:function(e,t,r){e.exports=r.p+"img/email-sent-success.d4c26fd.svg"},298:function(e,t,r){"use strict";r.r(t);var n={name:"PopupRegisterSuccess",props:{email:{type:String,required:!1}},methods:{closePopup:function(){this.$emit("close-popup")}}},o=r(34),component=Object(o.a)(n,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",{staticClass:"fixed inset-0 z-30 bg-black opacity-75"}),e._v(" "),n("div",{staticClass:"fixed inset-0 z-30 flex items-center"},[n("div",{staticClass:"mx-auto bg-white w-[600px] rounded-lg"},[n("div",{staticClass:"p-6 mx-auto text-center md:w-600"},[n("img",{staticClass:"inline-block",attrs:{src:r(226),alt:"Email sent success"}}),e._v(" "),n("div",{staticClass:"mt-8 text-lg font-semibold font-noto-sans"},[e._v("\n          Verify Your Email Address\n        ")]),e._v(" "),n("div",{staticClass:"mt-2 text-grayscale-500"},[e._v("\n          In order to complete your registration, please verifiy your email\n          address. We have sent an email with a link to "+e._s(e.email)+".\n        ")]),e._v(" "),n("div",{staticClass:"inline-block mt-6 w-[200px]"},[n("Button",{attrs:{value:"Close",background:"bg-white",border:"border-2 border-secondary-900",color:"text-secondary-900"},on:{action:function(t){return e.closePopup()}}})],1)])])])])}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{Button:r(206).default})}}]);