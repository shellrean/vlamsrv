(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[6],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/ujian/UjianPeserta.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/ujian/UjianPeserta.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_loading_overlay__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-loading-overlay */ "./node_modules/vue-loading-overlay/dist/vue-loading.min.js");
/* harmony import */ var vue_loading_overlay__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_loading_overlay__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vue_loading_overlay_dist_vue_loading_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-loading-overlay/dist/vue-loading.css */ "./node_modules/vue-loading-overlay/dist/vue-loading.css");
/* harmony import */ var vue_loading_overlay_dist_vue_loading_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vue_loading_overlay_dist_vue_loading_css__WEBPACK_IMPORTED_MODULE_1__);
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



/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'PesertaUjian',
  created: function created() {
    this.getAllPeserta();
  },
  components: {
    Loading: vue_loading_overlay__WEBPACK_IMPORTED_MODULE_0___default.a
  },
  data: function data() {
    return {
      fields: [{
        key: 'upload',
        label: 'Upload'
      }, {
        key: 'peserta.no_ujian',
        label: 'No ujian'
      }, {
        key: 'peserta.nama',
        label: 'Nama peserta'
      }, {
        key: 'status',
        label: 'Status'
      }, {
        key: 'sisa',
        label: 'Sisa waktu'
      }],
      isBusy: true
    };
  },
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_2__["mapGetters"])(['isLoading']), {}, Object(vuex__WEBPACK_IMPORTED_MODULE_2__["mapState"])('ujian', {
    pesertas: function pesertas(state) {
      return state.pesertas;
    }
  })),
  methods: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_2__["mapActions"])('ujian', ['getAllPeserta', 'uploadNilai', 'selesaiUjianPeserta', 'resetUjianPeserta']), {
    resetPeserta: function resetPeserta(id) {
      var _this = this;

      this.resetUjianPeserta({
        peserta_id: id
      }).then(function () {
        _this.$notify({
          group: 'foo',
          title: 'Sukses',
          type: 'success',
          text: 'Peserta berhasil direset.'
        });
      });
    },
    refreshTable: function refreshTable() {
      this.isBusy = true;
      this.getAllPeserta().then(function () {
        isBusy = false;
      })["catch"](function () {
        isBusy = false;
      });
    },
    uploadHasil: function uploadHasil() {
      var _this2 = this;

      this.uploadNilai().then(function () {
        _this2.$notify({
          group: 'foo',
          title: 'Sukses',
          type: 'success',
          text: 'Hasil ujian berhasil diupload.'
        });
      })["catch"](function (err) {
        _this2.$notify({
          group: 'foo',
          title: 'Error',
          type: 'error',
          text: 'Gagal mengupload hasil ujian (Error: L.1).'
        });
      });
    },
    forceClose: function forceClose(id) {
      var _this3 = this;

      this.selesaiUjianPeserta({
        peserta_id: id
      }).then(function () {
        _this3.$notify({
          group: 'foo',
          title: 'Sukses',
          type: 'success',
          text: 'Force close berhasil.'
        });

        _this3.refreshTable();
      })["catch"](function () {
        _this3.$notify({
          group: 'foo',
          title: 'Error',
          type: 'error',
          text: 'Terjadi kesalahan (Error: F.1).'
        });
      });
    }
  }),
  watch: {
    pesertas: function pesertas() {
      this.isBusy = false;
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loading-overlay/dist/vue-loading.css":
/*!***********************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loading-overlay/dist/vue-loading.css ***!
  \***********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".vld-overlay {\n  bottom: 0;\n  left: 0;\n  position: absolute;\n  right: 0;\n  top: 0;\n  -webkit-box-align: center;\n          align-items: center;\n  display: none;\n  -webkit-box-pack: center;\n          justify-content: center;\n  overflow: hidden;\n  z-index: 1\n}\n\n.vld-overlay.is-active {\n  display: -webkit-box;\n  display: flex\n}\n\n.vld-overlay.is-full-page {\n  z-index: 999;\n  position: fixed\n}\n\n.vld-overlay .vld-background {\n  bottom: 0;\n  left: 0;\n  position: absolute;\n  right: 0;\n  top: 0;\n  background: #fff;\n  opacity: 0.5\n}\n\n.vld-overlay .vld-icon, .vld-parent {\n  position: relative\n}\n\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/ujian/UjianPeserta.vue?vue&type=template&id=53121d8e&":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/ujian/UjianPeserta.vue?vue&type=template&id=53121d8e& ***!
  \****************************************************************************************************************************************************************************************************************/
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
    { staticClass: "row" },
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
      _c("div", { staticClass: "col-lg-12" }, [
        _c("div", { staticClass: "card" }, [
          _c(
            "div",
            { staticClass: "card-header" },
            [
              _c(
                "b-button",
                {
                  attrs: { variant: "light", squared: "", size: "sm" },
                  on: { click: _vm.refreshTable }
                },
                [_vm._v("Refresh")]
              ),
              _vm._v(" "),
              _c(
                "b-button",
                {
                  attrs: { variant: "info", squared: "", size: "sm" },
                  on: { click: _vm.uploadHasil }
                },
                [_vm._v("Upload hasil")]
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "card-body" },
            [
              _vm._m(0),
              _vm._v(" "),
              _c("br"),
              _vm._v(" "),
              _c("b-table", {
                attrs: {
                  striped: "",
                  hover: "",
                  bordered: "",
                  busy: _vm.isBusy,
                  small: "",
                  fields: _vm.fields,
                  items: _vm.pesertas.data,
                  "show-empty": ""
                },
                scopedSlots: _vm._u([
                  {
                    key: "cell(upload)",
                    fn: function(row) {
                      return [
                        _c("font-awesome-icon", {
                          directives: [
                            {
                              name: "show",
                              rawName: "v-show",
                              value: row.item.uploaded == 0,
                              expression: "row.item.uploaded == 0"
                            }
                          ],
                          staticClass: "text-muted",
                          attrs: { icon: "hourglass" }
                        }),
                        _vm._v(" "),
                        _c("font-awesome-icon", {
                          directives: [
                            {
                              name: "show",
                              rawName: "v-show",
                              value: !row.item.uploaded == 0,
                              expression: "!row.item.uploaded == 0"
                            }
                          ],
                          staticClass: "text-success",
                          attrs: { icon: "clipboard-check" }
                        })
                      ]
                    }
                  },
                  {
                    key: "table-busy",
                    fn: function() {
                      return [
                        _c(
                          "div",
                          { staticClass: "text-center text-dark my-2" },
                          [
                            _c("b-spinner", {
                              attrs: { small: "", type: "grow" }
                            }),
                            _vm._v(" Loading...\n\t\t\t                ")
                          ],
                          1
                        )
                      ]
                    },
                    proxy: true
                  },
                  {
                    key: "cell(status)",
                    fn: function(row) {
                      return [
                        _vm._v(
                          "\n                            " +
                            _vm._s(row.item.status) +
                            "\n\t\t\t\t\t\t\t"
                        ),
                        _c(
                          "b-button",
                          {
                            directives: [
                              {
                                name: "show",
                                rawName: "v-show",
                                value:
                                  row.item.status_ujian != 1 &&
                                  row.item.status_ujian != 2,
                                expression:
                                  "row.item.status_ujian != 1 && row.item.status_ujian != 2"
                              }
                            ],
                            attrs: {
                              variant: "danger",
                              size: "sm",
                              squared: ""
                            },
                            on: {
                              click: function($event) {
                                return _vm.forceClose(row.item.peserta_id)
                              }
                            }
                          },
                          [_vm._v("Force close")]
                        ),
                        _vm._v(" "),
                        _c(
                          "b-button",
                          {
                            directives: [
                              {
                                name: "show",
                                rawName: "v-show",
                                value:
                                  row.item.status_ujian != 1 &&
                                  row.item.status_ujian != 2,
                                expression:
                                  "row.item.status_ujian != 1 && row.item.status_ujian != 2"
                              }
                            ],
                            attrs: {
                              variant: "outline-danger",
                              size: "sm",
                              squared: ""
                            },
                            on: {
                              click: function($event) {
                                return _vm.resetPeserta(row.item.peserta_id)
                              }
                            }
                          },
                          [_vm._v("Reset peserta")]
                        )
                      ]
                    }
                  },
                  {
                    key: "cell(sisa)",
                    fn: function(row) {
                      return [
                        _vm._v(
                          "\n                        \t" +
                            _vm._s(
                              Math.floor(row.item.sisa_waktu / 60) + " Menit"
                            ) +
                            "\n                        "
                        )
                      ]
                    }
                  }
                ])
              })
            ],
            1
          ),
          _vm._v(" "),
          _c("div", { staticClass: "card-footer" }, [
            _c(
              "small",
              [
                _c("font-awesome-icon", { attrs: { icon: "hourglass" } }),
                _vm._v("  Belum terupload ")
              ],
              1
            ),
            _vm._v(" "),
            _c("br"),
            _vm._v(" "),
            _c(
              "small",
              [
                _c("font-awesome-icon", {
                  staticClass: "text-success",
                  attrs: { icon: "clipboard-check" }
                }),
                _vm._v("  Sudah terupload ")
              ],
              1
            ),
            _vm._v(" "),
            _c("br"),
            _vm._v(" "),
            _c(
              "small",
              [
                _c("font-awesome-icon", {
                  staticClass: "text-info",
                  attrs: { icon: "info-circle" }
                }),
                _vm._v(
                  "  Hanya peserta yang berstatus selesai yang akan diupload "
                )
              ],
              1
            ),
            _vm._v(" "),
            _c("br")
          ])
        ])
      ])
    ],
    1
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "row" }, [
      _c("div", { staticClass: "col-sm-5" }, [
        _c("h4", { staticClass: "card-title mb-0", attrs: { id: "traffic" } }, [
          _vm._v("Status ujian peserta")
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "small text-muted" }, [
          _vm._v("Upload Reset dan force close ujian peserta")
        ])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loading-overlay/dist/vue-loading.css":
/*!***************************************************************!*\
  !*** ./node_modules/vue-loading-overlay/dist/vue-loading.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../css-loader??ref--6-1!../../postcss-loader/src??ref--6-2!./vue-loading.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loading-overlay/dist/vue-loading.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./resources/js/pages/ujian/UjianPeserta.vue":
/*!***************************************************!*\
  !*** ./resources/js/pages/ujian/UjianPeserta.vue ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _UjianPeserta_vue_vue_type_template_id_53121d8e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UjianPeserta.vue?vue&type=template&id=53121d8e& */ "./resources/js/pages/ujian/UjianPeserta.vue?vue&type=template&id=53121d8e&");
/* harmony import */ var _UjianPeserta_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UjianPeserta.vue?vue&type=script&lang=js& */ "./resources/js/pages/ujian/UjianPeserta.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _UjianPeserta_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _UjianPeserta_vue_vue_type_template_id_53121d8e___WEBPACK_IMPORTED_MODULE_0__["render"],
  _UjianPeserta_vue_vue_type_template_id_53121d8e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/ujian/UjianPeserta.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/pages/ujian/UjianPeserta.vue?vue&type=script&lang=js&":
/*!****************************************************************************!*\
  !*** ./resources/js/pages/ujian/UjianPeserta.vue?vue&type=script&lang=js& ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UjianPeserta_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./UjianPeserta.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/ujian/UjianPeserta.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UjianPeserta_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/ujian/UjianPeserta.vue?vue&type=template&id=53121d8e&":
/*!**********************************************************************************!*\
  !*** ./resources/js/pages/ujian/UjianPeserta.vue?vue&type=template&id=53121d8e& ***!
  \**********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UjianPeserta_vue_vue_type_template_id_53121d8e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./UjianPeserta.vue?vue&type=template&id=53121d8e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/ujian/UjianPeserta.vue?vue&type=template&id=53121d8e&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UjianPeserta_vue_vue_type_template_id_53121d8e___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UjianPeserta_vue_vue_type_template_id_53121d8e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);