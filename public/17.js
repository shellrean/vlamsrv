(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[17],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/ujian/UjianStatus.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/ujian/UjianStatus.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_select__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-select */ "./node_modules/vue-select/dist/vue-select.js");
/* harmony import */ var vue_select__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_select__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vue_select_dist_vue_select_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-select/dist/vue-select.css */ "./node_modules/vue-select/dist/vue-select.css");
/* harmony import */ var vue_select_dist_vue_select_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vue_select_dist_vue_select_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
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
  name: 'UjianStatus',
  components: {
    vSelect: vue_select__WEBPACK_IMPORTED_MODULE_0___default.a
  },
  data: function data() {
    return {
      timeout: 0,
      dikerjakan: false,
      selesai: false,
      status: 1
    };
  },
  created: function created() {
    this.getUjianAktif();
    this.getUjians();
    this.getSesi();
  },
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_2__["mapGetters"])(['isLoading']), {}, Object(vuex__WEBPACK_IMPORTED_MODULE_2__["mapState"])(['error']), {}, Object(vuex__WEBPACK_IMPORTED_MODULE_2__["mapState"])('ujian', {
    aktif: function aktif(state) {
      return state.ujianAktif;
    },
    ujians: function ujians(state) {
      return state.ujians;
    },
    fulled: function fulled(state) {
      return state.aktif;
    },
    sesis: function sesis(state) {
      return state.sesis;
    }
  })),
  methods: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_2__["mapActions"])('ujian', ['getUjians', 'getSesi', 'addUjian', 'setStatus', 'changeToken', 'getUjianAktif', 'pilihKelompok', 'pilihTest', 'rilistToken', 'changeToken', 'simpanStatus']), {
    postStatus: function postStatus() {
      var _this = this;

      this.simpanStatus().then(function () {
        _this.$notify({
          group: 'foo',
          title: 'Sukses',
          type: 'success',
          text: 'Ujian aktif disimpan.'
        });
      })["catch"](function () {
        _this.$notify({
          group: 'foo',
          title: 'Error',
          type: 'error',
          text: 'Masih ada peserta yang berstatus online.'
        });
      });
    },
    ubahKelompok: function ubahKelompok() {
      var _this2 = this;

      this.pilihKelompok().then(function () {
        _this2.$notify({
          group: 'foo',
          title: 'Sukses',
          type: 'success',
          text: 'Sesi disimpan.'
        });
      })["catch"](function () {
        _this2.$notify({
          group: 'foo',
          title: 'Error',
          type: 'error',
          text: 'Masih ada peserta yang berstatus online.'
        });
      });
    },
    ubahTes: function ubahTes() {
      var _this3 = this;

      this.pilihTest().then(function () {
        _this3.$notify({
          group: 'foo',
          title: 'Sukses',
          type: 'success',
          text: 'Ujian disimpan.'
        });
      })["catch"](function () {
        _this3.$notify({
          group: 'foo',
          title: 'Error',
          type: 'error',
          text: 'Masih ada peserta yang berstatus online.'
        });
      });
    },
    ubahToken: function ubahToken() {
      var _this4 = this;

      this.rilistToken().then(function () {
        _this4.$notify({
          group: 'foo',
          title: 'Sukses',
          type: 'success',
          text: 'Token berhasil dirilis'
        });
      });
    }
  }),
  watch: {
    timeout: function timeout() {
      this.changeToken();
    }
  },
  mounted: function mounted() {
    var _this5 = this;

    setInterval(function () {
      _this5.timeout++;
    }, 15 * 60000);
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/ujian/UjianStatus.vue?vue&type=template&id=26dade68&":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/ujian/UjianStatus.vue?vue&type=template&id=26dade68& ***!
  \***************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "row" }, [
    _c("div", { staticClass: "col-lg-12" }, [
      _c("div", { staticClass: "card" }, [
        _c("div", { staticClass: "card-header" }, [
          _vm._v("\n\t\t\t\t\tStatus ujian\n\t\t\t\t")
        ]),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "card-body" },
          [
            _vm._m(0),
            _vm._v(" "),
            _c("br"),
            _vm._v(" "),
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
                  _vm._v(" Checking data ujian...\n\t\t                ")
                ],
                1
              )
            ],
            _vm._v(" "),
            [
              _c(
                "div",
                {
                  directives: [
                    {
                      name: "show",
                      rawName: "v-show",
                      value: !_vm.isLoading,
                      expression: "!isLoading"
                    }
                  ],
                  staticClass: "form-group"
                },
                [
                  _c("div", { staticClass: "row" }, [
                    _vm._m(1),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-6" }, [
                      _c(
                        "select",
                        {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.aktif.kelompok,
                              expression: "aktif.kelompok"
                            }
                          ],
                          staticClass: "form-control form-control-sm rounded-0",
                          on: {
                            change: function($event) {
                              var $$selectedVal = Array.prototype.filter
                                .call($event.target.options, function(o) {
                                  return o.selected
                                })
                                .map(function(o) {
                                  var val = "_value" in o ? o._value : o.value
                                  return val
                                })
                              _vm.$set(
                                _vm.aktif,
                                "kelompok",
                                $event.target.multiple
                                  ? $$selectedVal
                                  : $$selectedVal[0]
                              )
                            }
                          }
                        },
                        _vm._l(_vm.sesis.data, function(sesi) {
                          return _c(
                            "option",
                            { domProps: { value: sesi.sesi } },
                            [_vm._v(_vm._s(sesi.sesi))]
                          )
                        }),
                        0
                      )
                    ])
                  ])
                ]
              ),
              _vm._v(" "),
              _c(
                "div",
                {
                  directives: [
                    {
                      name: "show",
                      rawName: "v-show",
                      value: !_vm.isLoading,
                      expression: "!isLoading"
                    }
                  ],
                  staticClass: "form-group"
                },
                [
                  _c("div", { staticClass: "row" }, [
                    _vm._m(2),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-6" }, [
                      _c(
                        "select",
                        {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.aktif.jadwal,
                              expression: "aktif.jadwal"
                            }
                          ],
                          staticClass: "form-control form-control-sm rounded-0",
                          on: {
                            change: function($event) {
                              var $$selectedVal = Array.prototype.filter
                                .call($event.target.options, function(o) {
                                  return o.selected
                                })
                                .map(function(o) {
                                  var val = "_value" in o ? o._value : o.value
                                  return val
                                })
                              _vm.$set(
                                _vm.aktif,
                                "jadwal",
                                $event.target.multiple
                                  ? $$selectedVal
                                  : $$selectedVal[0]
                              )
                            }
                          }
                        },
                        [
                          _c("option", [_vm._v("Pilih")]),
                          _vm._v(" "),
                          _vm._l(_vm.ujians.data, function(ujian) {
                            return _c(
                              "option",
                              { domProps: { value: ujian.id } },
                              [
                                _vm._l(ujian.banksoal, function(
                                  banksol,
                                  index
                                ) {
                                  return !ujian.alias != ""
                                    ? _c("span", [
                                        _vm._v(
                                          _vm._s(
                                            " [ " +
                                              banksol.kode_banksoal +
                                              " ] "
                                          ) + " "
                                        )
                                      ])
                                    : _vm._e()
                                }),
                                _vm._v(" "),
                                ujian.alias != ""
                                  ? _c("span", [_vm._v(_vm._s(ujian.alias))])
                                  : _vm._e()
                              ],
                              2
                            )
                          })
                        ],
                        2
                      )
                    ])
                  ])
                ]
              ),
              _vm._v(" "),
              _c(
                "div",
                {
                  directives: [
                    {
                      name: "show",
                      rawName: "v-show",
                      value: !_vm.isLoading,
                      expression: "!isLoading"
                    }
                  ],
                  staticClass: "form-group"
                },
                [
                  _c("div", { staticClass: "row" }, [
                    _vm._m(3),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-6" }, [
                      _c("input", {
                        staticClass: "form-control form-control-sm rounded-0",
                        attrs: { type: "text", readonly: "", name: "" },
                        domProps: {
                          value:
                            (_vm.aktif.status_token == 1
                              ? _vm.aktif.token
                              : "-") +
                            " | 15 Menit | " +
                            (_vm.aktif.status_token == 0
                              ? "(Belum release)"
                              : "(Release)")
                        }
                      }),
                      _vm._v(" "),
                      _c("input", {
                        attrs: { type: "hidden" },
                        domProps: { value: _vm.aktif.token }
                      })
                    ]),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "col-3" },
                      [
                        _c(
                          "b-button",
                          {
                            directives: [
                              {
                                name: "show",
                                rawName: "v-show",
                                value: _vm.aktif.status_token == 0,
                                expression: "aktif.status_token == 0"
                              }
                            ],
                            attrs: { variant: "dark", size: "sm", squared: "" },
                            on: { click: _vm.ubahToken }
                          },
                          [_vm._v("Rilis token ")]
                        )
                      ],
                      1
                    )
                  ])
                ]
              ),
              _vm._v(" "),
              _c(
                "div",
                {
                  directives: [
                    {
                      name: "show",
                      rawName: "v-show",
                      value: !_vm.isLoading,
                      expression: "!isLoading"
                    }
                  ],
                  staticClass: "form-group"
                },
                [
                  _c(
                    "b-button",
                    {
                      attrs: { variant: "dark", size: "sm", squared: "" },
                      on: { click: _vm.postStatus }
                    },
                    [_vm._v(" Simpan semua")]
                  )
                ],
                1
              )
            ]
          ],
          2
        ),
        _vm._v(" "),
        _c("div", { staticClass: "card-footer" }, [
          _c(
            "h1",
            {
              directives: [
                {
                  name: "show",
                  rawName: "v-show",
                  value: _vm.aktif.status_token == 1,
                  expression: "aktif.status_token == 1"
                }
              ],
              staticClass: "bg-info",
              staticStyle: { "max-width": "220px", "text-align": "center" }
            },
            [_vm._v(_vm._s(_vm.aktif.token))]
          )
        ])
      ])
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "row" }, [
      _c("div", { staticClass: "col-sm-5" }, [
        _c("h4", { staticClass: "card-title mb-0", attrs: { id: "traffic" } }, [
          _vm._v("Status ujian")
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "small text-muted" }, [
          _vm._v(
            "Atur sesi dan banksoal aktif dan rilis token agar token dapat digunakan"
          )
        ])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-2" }, [
      _c("label", [_vm._v("Kelompok")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-2" }, [
      _c("label", [_vm._v("Daftar ujian")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-2" }, [_c("label", [_vm._v("Token")])])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/pages/ujian/UjianStatus.vue":
/*!**************************************************!*\
  !*** ./resources/js/pages/ujian/UjianStatus.vue ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _UjianStatus_vue_vue_type_template_id_26dade68___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UjianStatus.vue?vue&type=template&id=26dade68& */ "./resources/js/pages/ujian/UjianStatus.vue?vue&type=template&id=26dade68&");
/* harmony import */ var _UjianStatus_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UjianStatus.vue?vue&type=script&lang=js& */ "./resources/js/pages/ujian/UjianStatus.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _UjianStatus_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _UjianStatus_vue_vue_type_template_id_26dade68___WEBPACK_IMPORTED_MODULE_0__["render"],
  _UjianStatus_vue_vue_type_template_id_26dade68___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/ujian/UjianStatus.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/pages/ujian/UjianStatus.vue?vue&type=script&lang=js&":
/*!***************************************************************************!*\
  !*** ./resources/js/pages/ujian/UjianStatus.vue?vue&type=script&lang=js& ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UjianStatus_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./UjianStatus.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/ujian/UjianStatus.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UjianStatus_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/ujian/UjianStatus.vue?vue&type=template&id=26dade68&":
/*!*********************************************************************************!*\
  !*** ./resources/js/pages/ujian/UjianStatus.vue?vue&type=template&id=26dade68& ***!
  \*********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UjianStatus_vue_vue_type_template_id_26dade68___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./UjianStatus.vue?vue&type=template&id=26dade68& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/ujian/UjianStatus.vue?vue&type=template&id=26dade68&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UjianStatus_vue_vue_type_template_id_26dade68___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UjianStatus_vue_vue_type_template_id_26dade68___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);