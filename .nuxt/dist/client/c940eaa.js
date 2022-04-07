(window.webpackJsonp=window.webpackJsonp||[]).push([[19,13,20],{171:function(t,e,r){"use strict";r.r(e);var l={name:"Input",props:{label:{type:String,required:!0},value:{type:String,required:!1,default:""},placeholder:{type:String,required:!1,default:""},border:{type:String,required:!1,default:"rounded-lg border"},customClass:{type:String,required:!1}}},n=r(28),component=Object(n.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"px-3 py-2",class:[t.border,t.customClass]},[r("div",{staticClass:"mb-1 text-xs text-grayscale-400"},[t._v(t._s(t.label))]),t._v(" "),r("input",{staticClass:"w-full border-none outline-none",attrs:{type:"text",placeholder:t.placeholder},domProps:{value:t.value}})])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Input:r(171).default})},172:function(t,e,r){"use strict";r.r(e);var l={name:"Button",props:{value:{type:String,required:!0},color:{type:String,required:!1,default:"text-white"},background:{type:String,required:!1,default:"bg-primary-600"},border:{type:String,required:!1,default:"border-2 border-primary-600"},customClass:{type:String,required:!1,default:"w-full"}}},n=r(28),component=Object(n.a)(l,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{staticClass:"px-6 py-4 font-medium text-center rounded-lg cursor-pointer",class:[t.color,t.background,t.border,t.customClass]},[t._v("\n  "+t._s(t.value)+"\n")])}),[],!1,null,null,null);e.default=component.exports},214:function(t,e,r){"use strict";r.r(e);var l={name:"HomepageTabMyTrip"},n=r(28),component=Object(n.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"px-6 pb-6 md:px-0 md:pb-0"},[r("div",{staticClass:"mt-8 text-2xl font-semibold text-grayscale-900 font-noto-sans"},[t._v("\n    Manage your upcoming trip\n  ")]),t._v(" "),r("div",{staticClass:"mt-2 text-grayscale-500"},[t._v("\n    Please review this terms & conditions of My Trip sections\n  ")]),t._v(" "),r("div",{staticClass:"mt-6 md:flex gap-x-4"},[r("div",{staticClass:"flex-1"},[r("Input",{attrs:{label:"Book Reference",value:"1233444554"}})],1),t._v(" "),r("div",{staticClass:"flex-1 mt-6 md:mt-0"},[r("Input",{attrs:{label:"Last Name",value:"Gauri"}})],1)]),t._v(" "),r("div",{staticClass:"mt-8 md:inline-block md:float-right md:mb-0"},[r("NuxtLink",{attrs:{to:"/my-trip"}},[r("Button",{attrs:{value:"Search Flights",customClass:"px-6"}})],1)],1)])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Input:r(171).default,Button:r(172).default})}}]);