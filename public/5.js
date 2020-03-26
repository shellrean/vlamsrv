(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[5],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/siswa/UjianKonfirm.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/siswa/UjianKonfirm.vue?vue&type=script&lang=js& ***!
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



/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'KonfirmUjian',
  components: {
    Loading: vue_loading_overlay__WEBPACK_IMPORTED_MODULE_0___default.a
  },
  data: function data() {
    return {
      token_ujian: '',
      timeout: 0
    };
  },
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_2__["mapGetters"])(['isAuth', 'isLoading']), {}, Object(vuex__WEBPACK_IMPORTED_MODULE_2__["mapState"])('siswa_jadwal', {
    jadwal: function jadwal(state) {
      return state.banksoalAktif.data;
    }
  }), {}, Object(vuex__WEBPACK_IMPORTED_MODULE_2__["mapState"])('siswa_user', {
    peserta: function peserta(state) {
      return state.pesertaDetail;
    }
  }), {}, Object(vuex__WEBPACK_IMPORTED_MODULE_2__["mapState"])('siswa_ujian', {
    ujian: function ujian(state) {
      return state.dataUjian.data;
    },
    invalidToken: function invalidToken(state) {
      return state.invalidToken;
    }
  })),
  methods: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_2__["mapActions"])('siswa_ujian', ['getPesertaDataUjian', 'tokenChecker']), {
    cekToken: function cekToken() {
      var _this = this;

      this.tokenChecker({
        token: this.token_ujian
      }).then(function () {
        _this.$router.push({
          name: 'ujian.prepare'
        });
      })["catch"](function () {});
    },
    dataUjianPeserta: function dataUjianPeserta() {
      this.getPesertaDataUjian({
        jadwal_id: this.jadwal.jadwal.id,
        peserta_id: this.peserta.id,
        lama: this.jadwal.jadwal.lama
      });
    }
  })
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/siswa/UjianKonfirm.vue?vue&type=template&id=3d154058&":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/siswa/UjianKonfirm.vue?vue&type=template&id=3d154058& ***!
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
  return _c("div", { staticClass: "container" }, [
    _c(
      "div",
      { staticClass: "card card-bg", staticStyle: { "max-width": "600px" } },
      [
        _c("div", { staticClass: "card-body" }, [
          _c("h4", [_vm._v("Konfirmasi Data Peserta")]),
          _vm._v(" "),
          _c(
            "form",
            {
              staticClass: "form-custom form-ajax",
              attrs: { id: "fmToken", name: "fmToken" },
              on: {
                submit: function($event) {
                  $event.preventDefault()
                  return _vm.cekToken($event)
                }
              }
            },
            [
              _c("div", { staticClass: "form-group" }, [
                _c("label", { attrs: { for: "nisn" } }, [_vm._v("NO UJIAN")]),
                _vm._v(" "),
                _c("p", {
                  staticClass: "form-control-static",
                  domProps: { textContent: _vm._s(_vm.peserta.no_ujian) }
                })
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "form-group" }, [
                _c("label", { attrs: { for: "nama" } }, [
                  _vm._v("Nama Peserta")
                ]),
                _vm._v(" "),
                _c("p", {
                  staticClass: "form-control-static",
                  domProps: { textContent: _vm._s(_vm.peserta.nama) }
                })
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "form-group" }, [
                _c("label", { attrs: { for: "nm_uji" } }, [
                  _vm._v("Mata Ujian")
                ]),
                _vm._v(" "),
                _vm.jadwal && _vm.ujian
                  ? _c("p", {
                      staticClass: "form-control-static",
                      domProps: { textContent: _vm._s(_vm.jadwal.matpel) }
                    })
                  : _vm._e(),
                _vm._v(" "),
                !_vm.ujian
                  ? _c("p", { staticClass: "form-control-static" }, [
                      _vm._v("Tidak ada jadwal ujian pada hari ini")
                    ])
                  : _vm._e(),
                _vm._v(" "),
                _c("span", { staticClass: "line" })
              ]),
              _vm._v(" "),
              _vm.jadwal && _vm.ujian && _vm.ujian.status_ujian != "1"
                ? _c("div", { staticClass: "form-group" }, [
                    _c("label", { attrs: { for: "token" } }, [_vm._v("Token")]),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.token_ujian,
                          expression: "token_ujian"
                        }
                      ],
                      staticClass: "form-control",
                      attrs: {
                        type: "text",
                        autofocus: "",
                        placeholder: "Masukkan token"
                      },
                      domProps: { value: _vm.token_ujian },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.token_ujian = $event.target.value
                        }
                      }
                    }),
                    _vm._v(" "),
                    _c("span", { staticClass: "line" }),
                    _vm._v(" "),
                    _vm.invalidToken.token
                      ? _c("small", { staticClass: "text-danger" }, [
                          _vm._v("Token tidak sesuai dengan pusat")
                        ])
                      : _vm._e(),
                    _vm._v(" "),
                    _vm.invalidToken.release
                      ? _c("small", { staticClass: "text-danger" }, [
                          _vm._v("Status token belum dirilis")
                        ])
                      : _vm._e()
                  ])
                : _vm._e(),
              _vm._v(" "),
              _vm.jadwal && _vm.ujian && _vm.ujian.status_ujian != "1"
                ? _c("div", { staticClass: "form-group" }, [
                    _c(
                      "button",
                      {
                        staticClass: "btn btn-primary w-100 btn-form-ajax",
                        attrs: { type: "submit", disabled: _vm.isLoading }
                      },
                      [
                        _c("b-spinner", {
                          directives: [
                            {
                              name: "show",
                              rawName: "v-show",
                              value: _vm.isLoading,
                              expression: "isLoading"
                            }
                          ],
                          attrs: { small: "", type: "grow" }
                        }),
                        _vm._v("Mulai\n\t\t\t\t\t")
                      ],
                      1
                    )
                  ])
                : _vm._e()
            ]
          )
        ])
      ]
    )
  ])
}
var staticRenderFns = []
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

/***/ "./resources/js/pages/siswa/UjianKonfirm.vue":
/*!***************************************************!*\
  !*** ./resources/js/pages/siswa/UjianKonfirm.vue ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _UjianKonfirm_vue_vue_type_template_id_3d154058___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UjianKonfirm.vue?vue&type=template&id=3d154058& */ "./resources/js/pages/siswa/UjianKonfirm.vue?vue&type=template&id=3d154058&");
/* harmony import */ var _UjianKonfirm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UjianKonfirm.vue?vue&type=script&lang=js& */ "./resources/js/pages/siswa/UjianKonfirm.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _UjianKonfirm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _UjianKonfirm_vue_vue_type_template_id_3d154058___WEBPACK_IMPORTED_MODULE_0__["render"],
  _UjianKonfirm_vue_vue_type_template_id_3d154058___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/siswa/UjianKonfirm.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/pages/siswa/UjianKonfirm.vue?vue&type=script&lang=js&":
/*!****************************************************************************!*\
  !*** ./resources/js/pages/siswa/UjianKonfirm.vue?vue&type=script&lang=js& ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UjianKonfirm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./UjianKonfirm.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/siswa/UjianKonfirm.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UjianKonfirm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/siswa/UjianKonfirm.vue?vue&type=template&id=3d154058&":
/*!**********************************************************************************!*\
  !*** ./resources/js/pages/siswa/UjianKonfirm.vue?vue&type=template&id=3d154058& ***!
  \**********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UjianKonfirm_vue_vue_type_template_id_3d154058___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./UjianKonfirm.vue?vue&type=template&id=3d154058& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/siswa/UjianKonfirm.vue?vue&type=template&id=3d154058&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UjianKonfirm_vue_vue_type_template_id_3d154058___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UjianKonfirm_vue_vue_type_template_id_3d154058___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);