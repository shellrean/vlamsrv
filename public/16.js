(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[16],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/sinkron/Hapus.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/sinkron/Hapus.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_loading_overlay__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-loading-overlay */ "./node_modules/vue-loading-overlay/dist/vue-loading.min.js");
/* harmony import */ var vue_loading_overlay__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_loading_overlay__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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


/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'Hapus',
  components: {
    Loading: vue_loading_overlay__WEBPACK_IMPORTED_MODULE_0___default.a
  },
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_1__["mapGetters"])(['isLoading']), {}, Object(vuex__WEBPACK_IMPORTED_MODULE_1__["mapState"])('pusat', {
    hapus: function hapus(state) {
      return state.hapus;
    }
  })),
  methods: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_1__["mapActions"])('pusat', ['hapusDataLocal']), {
    hapusData: function hapusData() {
      var _this = this;

      this.$swal({
        title: 'Hapus data local',
        text: 'Hapus seluruh data local',
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#dcdcdc',
        confirmButtonText: 'Iya, Lanjutkan!'
      }).then(function (result) {
        if (result.value) {
          _this.hapusDataLocal().then(function () {
            _this.$notify({
              group: 'foo',
              title: 'Sukses',
              type: 'success',
              text: 'Data lokal berhasil dihapus.'
            });
          });
        }
      });
    }
  })
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/sinkron/Hapus.vue?vue&type=template&id=fea0186a&":
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/sinkron/Hapus.vue?vue&type=template&id=fea0186a& ***!
  \***********************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "c-body" },
    [
      _c("loading", {
        attrs: { active: _vm.isLoading, "is-full-page": true },
        on: {
          "update:active": function($event) {
            _vm.isLoading = $event
          }
        }
      }),
      _vm._v(" "),
      _c("main", { staticClass: "c-main" }, [
        _c("div", { staticClass: "container-fluid" }, [
          _c("div", { staticClass: "fade-in" }, [
            _c("div", { staticClass: "card" }, [
              _c("div", { staticClass: "card-header" }, [
                _vm._v(
                  "\n                        Hapus data lokal\n            \t\t"
                )
              ]),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "card-body" },
                [
                  _c(
                    "b-button",
                    {
                      attrs: { squared: "", size: "sm", variant: "info" },
                      on: { click: _vm.hapusData }
                    },
                    [_vm._v("Hapus")]
                  ),
                  _vm._v(" "),
                  _c("br"),
                  _vm._v(" "),
                  _c("b-progress", {
                    staticClass: "mt-2",
                    attrs: {
                      value: _vm.hapus,
                      variant: "info",
                      "show-progress": "",
                      animated: ""
                    }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c("div", { staticClass: "card-footer" })
            ])
          ])
        ])
      ])
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/pages/sinkron/Hapus.vue":
/*!**********************************************!*\
  !*** ./resources/js/pages/sinkron/Hapus.vue ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Hapus_vue_vue_type_template_id_fea0186a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Hapus.vue?vue&type=template&id=fea0186a& */ "./resources/js/pages/sinkron/Hapus.vue?vue&type=template&id=fea0186a&");
/* harmony import */ var _Hapus_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Hapus.vue?vue&type=script&lang=js& */ "./resources/js/pages/sinkron/Hapus.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Hapus_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Hapus_vue_vue_type_template_id_fea0186a___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Hapus_vue_vue_type_template_id_fea0186a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/sinkron/Hapus.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/pages/sinkron/Hapus.vue?vue&type=script&lang=js&":
/*!***********************************************************************!*\
  !*** ./resources/js/pages/sinkron/Hapus.vue?vue&type=script&lang=js& ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Hapus_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Hapus.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/sinkron/Hapus.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Hapus_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/sinkron/Hapus.vue?vue&type=template&id=fea0186a&":
/*!*****************************************************************************!*\
  !*** ./resources/js/pages/sinkron/Hapus.vue?vue&type=template&id=fea0186a& ***!
  \*****************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Hapus_vue_vue_type_template_id_fea0186a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Hapus.vue?vue&type=template&id=fea0186a& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/sinkron/Hapus.vue?vue&type=template&id=fea0186a&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Hapus_vue_vue_type_template_id_fea0186a___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Hapus_vue_vue_type_template_id_fea0186a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);