(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[7],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Home.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/Home.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
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
  created: function created() {
    this.getServerIdentify();
    this.getServerConnect();
  },
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])(['isAuth', 'isLoading']), {}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapState"])('pusat', {
    identify: function identify(state) {
      return state.identify.data;
    },
    status: function status(state) {
      return state.status.data;
    }
  })),
  methods: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapActions"])('pusat', ['getServerIdentify', 'getServerConnect'])),
  data: function data() {
    return {};
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Home.vue?vue&type=template&id=b3c5cf30&":
/*!**************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/Home.vue?vue&type=template&id=b3c5cf30& ***!
  \**************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "c-body" }, [
    _c("main", { staticClass: "c-main" }, [
      _c("div", { staticClass: "container-fluid" }, [
        _c("div", { staticClass: "fade-in" }, [
          _c("div", { staticClass: "card" }, [
            _c(
              "div",
              { staticClass: "card-body" },
              [
                [
                  _c(
                    "div",
                    {
                      directives: [
                        {
                          name: "show",
                          rawName: "v-show",
                          value: _vm.isLoading,
                          expression: "isLoading"
                        }
                      ],
                      staticClass: "text-center text-light my-2"
                    },
                    [
                      _c("b-spinner", { attrs: { small: "", type: "grow" } }),
                      _vm._v(
                        " Refresh status koneksi ke server pusat...\n\t\t\t                "
                      )
                    ],
                    1
                  )
                ],
                _vm._v(" "),
                [
                  _vm.status
                    ? _c("div", { staticClass: "row" }, [
                        _vm.status.status == 1
                          ? _c(
                              "div",
                              { staticClass: "col-sm-6 col-md-4" },
                              [
                                _c("h5", { staticClass: "text-info" }, [
                                  _vm._v("AKTIF")
                                ]),
                                _vm._v(" "),
                                _c(
                                  "div",
                                  { staticClass: "alert alert-info rounded-0" },
                                  [_vm._v("CBTsync siap digunakan")]
                                ),
                                _vm._v(" "),
                                _c(
                                  "b-alert",
                                  {
                                    attrs: {
                                      show: "",
                                      squared: "",
                                      variant: "secondary"
                                    }
                                  },
                                  [
                                    _vm._v("SERVER-ID  "),
                                    _c(
                                      "span",
                                      {
                                        staticClass:
                                          "badge badge-info py-2 rounded-0"
                                      },
                                      [
                                        _vm._v(
                                          _vm._s(_vm.identify.kode_server) + " "
                                        )
                                      ]
                                    )
                                  ]
                                )
                              ],
                              1
                            )
                          : _vm._e(),
                        _vm._v(" "),
                        _vm.status == "unregistered"
                          ? _c(
                              "div",
                              { staticClass: "col-sm-6 col-md-4" },
                              [
                                _c("h5", { staticClass: "text-warning" }, [
                                  _vm._v("STAND BY")
                                ]),
                                _vm._v(" "),
                                _c(
                                  "b-alert",
                                  {
                                    attrs: {
                                      show: "",
                                      squared: "",
                                      variant: "warning"
                                    }
                                  },
                                  [
                                    _vm._v(
                                      "ID Server tidak sesuai dengan data server pusat"
                                    )
                                  ]
                                ),
                                _vm._v(" "),
                                _c(
                                  "b-alert",
                                  {
                                    attrs: {
                                      show: "",
                                      squared: "",
                                      variant: "secondary"
                                    }
                                  },
                                  [
                                    _vm._v("SERVER-ID  "),
                                    _c(
                                      "span",
                                      {
                                        staticClass:
                                          "badge badge-warning py-2 rounded-0"
                                      },
                                      [_vm._v(_vm._s(_vm.identify.kode_server))]
                                    )
                                  ]
                                )
                              ],
                              1
                            )
                          : _vm._e(),
                        _vm._v(" "),
                        _vm.status == "block"
                          ? _c(
                              "div",
                              { staticClass: "col-sm-6 col-md-4" },
                              [
                                _c("h5", { staticClass: "text-primary" }, [
                                  _vm._v("STAND BY")
                                ]),
                                _vm._v(" "),
                                _c(
                                  "b-alert",
                                  {
                                    attrs: {
                                      show: "",
                                      squared: "",
                                      variant: "primary"
                                    }
                                  },
                                  [_vm._v("SN sudah terdaftar di server pusat")]
                                ),
                                _vm._v(" "),
                                _c(
                                  "b-alert",
                                  {
                                    attrs: {
                                      show: "",
                                      squared: "",
                                      variant: "secondary"
                                    }
                                  },
                                  [
                                    _vm._v("SERVER-ID  "),
                                    _c(
                                      "span",
                                      {
                                        staticClass:
                                          "badge badge-primary py-2 rounded-0"
                                      },
                                      [_vm._v(_vm._s(_vm.identify.kode_server))]
                                    )
                                  ]
                                )
                              ],
                              1
                            )
                          : _vm._e(),
                        _vm._v(" "),
                        _vm.status == "unconnect"
                          ? _c(
                              "div",
                              { staticClass: "col-sm-6 col-md-4" },
                              [
                                _c("h5", { staticClass: "text-danger" }, [
                                  _vm._v("OFFLINE")
                                ]),
                                _vm._v(" "),
                                _c(
                                  "b-alert",
                                  {
                                    attrs: {
                                      show: "",
                                      squared: "",
                                      variant: "danger"
                                    }
                                  },
                                  [
                                    _vm._v(
                                      "CBTsync tidak terkoneksi ke server pusat"
                                    )
                                  ]
                                ),
                                _vm._v(" "),
                                _c(
                                  "b-alert",
                                  {
                                    attrs: {
                                      show: "",
                                      squared: "",
                                      variant: "secondary"
                                    }
                                  },
                                  [
                                    _vm._v("SERVER-ID  "),
                                    _c(
                                      "span",
                                      {
                                        staticClass:
                                          "badge badge-danger py-2 rounded-0"
                                      },
                                      [_vm._v(_vm._s(_vm.identify.kode_server))]
                                    )
                                  ]
                                )
                              ],
                              1
                            )
                          : _vm._e(),
                        _vm._v(" "),
                        _vm.status.status == 0
                          ? _c(
                              "div",
                              { staticClass: "col-sm-6 col-md-4" },
                              [
                                _c("h5", { staticClass: "text-danger" }, [
                                  _vm._v("OFFLINE")
                                ]),
                                _vm._v(" "),
                                _c(
                                  "b-alert",
                                  {
                                    attrs: {
                                      show: "",
                                      squared: "",
                                      variant: "danger"
                                    }
                                  },
                                  [_vm._v("Server Non-Aktif pada server pusat")]
                                ),
                                _vm._v(" "),
                                _c(
                                  "b-alert",
                                  {
                                    attrs: {
                                      show: "",
                                      squared: "",
                                      variant: "secondary"
                                    }
                                  },
                                  [
                                    _vm._v("SERVER-ID  "),
                                    _c(
                                      "span",
                                      {
                                        staticClass:
                                          "badge badge-danger py-2 rounded-0"
                                      },
                                      [_vm._v(_vm._s(_vm.identify.kode_server))]
                                    )
                                  ]
                                )
                              ],
                              1
                            )
                          : _vm._e()
                      ])
                    : _vm._e()
                ]
              ],
              2
            )
          ])
        ])
      ])
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js":
/*!********************************************************************!*\
  !*** ./node_modules/vue-loader/lib/runtime/componentNormalizer.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),

/***/ "./resources/js/pages/Home.vue":
/*!*************************************!*\
  !*** ./resources/js/pages/Home.vue ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Home_vue_vue_type_template_id_b3c5cf30___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Home.vue?vue&type=template&id=b3c5cf30& */ "./resources/js/pages/Home.vue?vue&type=template&id=b3c5cf30&");
/* harmony import */ var _Home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Home.vue?vue&type=script&lang=js& */ "./resources/js/pages/Home.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Home_vue_vue_type_template_id_b3c5cf30___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Home_vue_vue_type_template_id_b3c5cf30___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/Home.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/pages/Home.vue?vue&type=script&lang=js&":
/*!**************************************************************!*\
  !*** ./resources/js/pages/Home.vue?vue&type=script&lang=js& ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Home.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Home.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/Home.vue?vue&type=template&id=b3c5cf30&":
/*!********************************************************************!*\
  !*** ./resources/js/pages/Home.vue?vue&type=template&id=b3c5cf30& ***!
  \********************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_template_id_b3c5cf30___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Home.vue?vue&type=template&id=b3c5cf30& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Home.vue?vue&type=template&id=b3c5cf30&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_template_id_b3c5cf30___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_template_id_b3c5cf30___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);