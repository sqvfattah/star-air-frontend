exports.ids = [31];
exports.modules = {

/***/ 104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Select.vue?vue&type=template&id=09995e40&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"h-full px-3 py-2",class:[_vm.border, _vm.customClass]},[_vm._ssrNode("<div class=\"mb-1 text-xs text-grayscale-400\">"+_vm._ssrEscape(_vm._s(_vm.label))+"</div> <select class=\"w-full border-none outline-none\">"+(_vm._ssrList((_vm.data),function(option,index){return ("<option"+(_vm._ssrAttr("value",option))+">"+_vm._ssrEscape("\n      "+_vm._s(option)+"\n    ")+"</option>")}))+"</select>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/Select.vue?vue&type=template&id=09995e40&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Select.vue?vue&type=script&lang=js&
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
/* harmony default export */ var Selectvue_type_script_lang_js_ = ({
  name: "Select",
  props: {
    data: {
      type: Array,
      required: false,
      default: []
    },
    selectedData: {
      type: String,
      required: false
    },
    label: {
      type: String,
      required: true
    },
    placeholder: {
      type: String,
      required: false,
      default: ""
    },
    border: {
      type: String,
      required: false,
      default: "rounded-lg border"
    },
    customClass: {
      type: String,
      required: false
    }
  }
});
// CONCATENATED MODULE: ./components/Select.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Selectvue_type_script_lang_js_ = (Selectvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/Select.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_Selectvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "43a07669"
  
)

/* harmony default export */ var Select = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {Select: __webpack_require__(104).default})


/***/ })

};;
//# sourceMappingURL=select.js.map