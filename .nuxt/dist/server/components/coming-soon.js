exports.ids = [15,14];
exports.modules = {

/***/ 132:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/ComingSoon.vue?vue&type=template&id=2d52ee90&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._ssrNode("<div class=\"fixed inset-0 z-30 bg-black opacity-75\"></div> "),_vm._ssrNode("<div class=\"fixed inset-0 z-30 flex items-center\">","</div>",[_vm._ssrNode("<div class=\"mx-auto bg-white w-[600px] rounded-lg\">","</div>",[_vm._ssrNode("<div class=\"p-6 mx-auto text-center md:w-600\">","</div>",[_vm._ssrNode("<img"+(_vm._ssrAttr("src",__webpack_require__(66)))+" alt=\"success\" width=\"200\" class=\"mx-auto\"> "),_vm._ssrNode("<div class=\"inline-block mt-6 w-[200px]\">","</div>",[_c('Button',{attrs:{"value":"Close","background":"bg-white","border":"border-2 border-secondary-900","color":"text-secondary-900"},on:{"action":function($event){return _vm.$emit('close-popup')}}})],1)],2)])])],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/ComingSoon.vue?vue&type=template&id=2d52ee90&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/ComingSoon.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var ComingSoonvue_type_script_lang_js_ = ({
  name: "ComingSoon",
  props: {
    title: {
      type: String,
      required: true
    }
  },
  methods: {}
});
// CONCATENATED MODULE: ./components/ComingSoon.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_ComingSoonvue_type_script_lang_js_ = (ComingSoonvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/ComingSoon.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_ComingSoonvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "0609ba89"
  
)

/* harmony default export */ var ComingSoon = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {Button: __webpack_require__(36).default})


/***/ }),

/***/ 36:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Button.vue?vue&type=template&id=45e28faa&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"font-medium text-center rounded-lg ",class:[
    _vm.color, 
    _vm.enabled ? _vm.border : 'border-2 border-transparent', 
    _vm.padding, 
    _vm.customClass, 
    _vm.enabled ? _vm.background : 'bg-gray-300',
    _vm.enabled ? 'cursor-pointer' : 'cursor-not-allowed'
  ],on:{"click":function($event){return _vm.$emit('action')}}},[_vm._ssrNode(_vm._ssrEscape("\n  "+_vm._s(_vm.value)+"\n"))])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/Button.vue?vue&type=template&id=45e28faa&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Button.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var Buttonvue_type_script_lang_js_ = ({
  name: "Button",
  props: {
    value: {
      type: String,
      required: true
    },
    color: {
      type: String,
      required: false,
      default: "text-white"
    },
    background: {
      type: String,
      required: false,
      default: "bg-primary-600"
    },
    border: {
      type: String,
      required: false,
      default: "border-2 border-primary-600"
    },
    customClass: {
      type: String,
      required: false,
      default: "w-full"
    },
    padding: {
      type: String,
      required: false,
      default: "px-6 py-4"
    },
    enabled: {
      type: Boolean,
      required: false,
      default: true
    }
  }
});
// CONCATENATED MODULE: ./components/Button.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Buttonvue_type_script_lang_js_ = (Buttonvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/Button.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_Buttonvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "889944c2"
  
)

/* harmony default export */ var Button = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 66:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/coming-soon.8788624.jpg";

/***/ })

};;
//# sourceMappingURL=coming-soon.js.map