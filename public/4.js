(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[4],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/sinkron/Sinkron.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/sinkron/Sinkron.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************/
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
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'Sinkron',
  created: function created() {
    this.connect();
    this.countData();
    this.getIdentify();
  },
  components: {
    Loading: vue_loading_overlay__WEBPACK_IMPORTED_MODULE_0___default.a
  },
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_2__["mapGetters"])(['isAuth', 'isLoading']), {}, Object(vuex__WEBPACK_IMPORTED_MODULE_2__["mapState"])('pusat', {
    center: function center(state) {
      return state.center.data;
    },
    peserta: function peserta(state) {
      return state.peserta;
    },
    matpel: function matpel(state) {
      return state.matpel;
    },
    banksoal: function banksoal(state) {
      return state.banksoal;
    },
    soal: function soal(state) {
      return state.soal;
    },
    jawaban: function jawaban(state) {
      return state.jawaban;
    },
    gambar: function gambar(state) {
      return state.gambar;
    },
    jadwal: function jadwal(state) {
      return state.jadwal;
    },
    count: function count(state) {
      return state.countData.data;
    },
    identify: function identify(state) {
      return state.identify.data;
    }
  })),
  data: function data() {
    return {
      animate: true,
      sinkron: {
        peserta: 0,
        matpel: 0,
        banksoal: 0,
        soal: 0,
        pilihan: 0,
        gambar: 0,
        sync: false
      },
      isSync: false,
      syinter: 0
    };
  },
  methods: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_2__["mapActions"])('pusat', ['getSinkronServer', 'testConnection', 'cbtSync', 'checkDataLocal', 'getServerIdentify']), {
    getIdentify: function getIdentify() {
      this.getServerIdentify();
    },
    countData: function countData() {
      this.checkDataLocal();
    },
    connect: function connect() {
      this.testConnection();
    },
    syncData: function syncData() {
      var _this = this;

      this.isSync = true;

      if (this.identify.peserta == 0) {
        this.cbtSync('peserta').then(function () {
          _this.syinter += 1;

          _this.checkSyinter();
        })["catch"](function () {
          _this.syinter += 1;

          _this.$notify({
            group: 'foo',
            title: 'Error',
            type: 'error',
            text: 'Error saat sinkron peserta.'
          });
        });
      }

      if (this.identify.matpel == 0) {
        this.cbtSync('matpel').then(function () {
          _this.syinter += 1;

          _this.checkSyinter();
        })["catch"](function () {
          _this.syinter += 1;

          _this.$notify({
            group: 'foo',
            title: 'Error',
            type: 'error',
            text: 'Error saat sinkron matpel.'
          });
        });
      }

      if (this.identify.banksoal == 0) {
        this.cbtSync('banksoal').then(function () {
          _this.syinter += 1;

          _this.checkSyinter();
        })["catch"](function () {
          _this.syinter += 1;

          _this.$notify({
            group: 'foo',
            title: 'Error',
            type: 'error',
            text: 'Error saat sinkron banksoal.'
          });
        });
      }

      if (this.identify.soal == 0) {
        this.cbtSync('soal').then(function () {
          _this.syinter += 1;

          _this.checkSyinter();
        })["catch"](function () {
          _this.syinter += 1;

          _this.$notify({
            group: 'foo',
            title: 'Error',
            type: 'error',
            text: 'Error saat sinkron soal.'
          });
        });
      }

      if (this.identify.pilihan_soal == 0) {
        this.cbtSync('jawaban_soal').then(function () {
          _this.syinter += 1;

          _this.checkSyinter();
        })["catch"](function () {
          _this.syinter += 1;

          _this.$notify({
            group: 'foo',
            title: 'Error',
            type: 'error',
            text: 'Error saat sinkron jawaban soal.'
          });
        });
      }

      if (this.identify.gambar == 0) {
        this.cbtSync('file').then(function () {
          _this.syinter += 1;

          _this.checkSyinter();
        })["catch"](function () {
          _this.syinter += 1;

          _this.$notify({
            group: 'foo',
            title: 'Error',
            type: 'error',
            text: 'Error saat sinkron file.'
          });
        });
      }

      if (this.identify.jadwal == 0) {
        this.cbtSync('jadwal').then(function () {
          _this.syinter += 1;

          _this.checkSyinter();
        })["catch"](function () {
          _this.$notify({
            group: 'foo',
            title: 'Error',
            type: 'error',
            text: 'Error saat sinkron jadwal.'
          });
        });
      }
    },
    checkSyinter: function checkSyinter() {
      if (this.syinter == 7) {
        this.isSync = false;
        this.$notify({
          group: 'foo',
          title: 'Sukses',
          type: 'success',
          text: 'Proses sync sukses.'
        });
        this.connect();
        this.countData();
        this.getIdentify();
      }
    },
    sinkronData: function sinkronData() {
      var _this2 = this;

      this.getSinkronServer({
        req: 'peserta'
      }).then(function () {
        _this2.sinkron.peserta = 100;
      }).then(function () {
        _this2.$notify({
          group: 'foo',
          title: 'Sukses',
          type: 'success',
          text: 'Data peserta berhasil didownload.'
        });
      });
      this.getSinkronServer({
        req: 'matpel'
      }).then(function () {
        _this2.sinkron.matpel = 100;
      }).then(function () {
        _this2.$notify({
          group: 'foo',
          title: 'Sukses',
          type: 'success',
          text: 'Data matpel berhasil didownload.'
        });
      });
      this.getSinkronServer({
        req: 'banksoal'
      }).then(function () {
        _this2.sinkron.banksoal = 100;
      }).then(function () {
        _this2.$notify({
          group: 'foo',
          title: 'Sukses',
          type: 'success',
          text: 'Data banksoal berhasil didownload.'
        });
      });
      this.getSinkronServer({
        req: 'soal'
      }).then(function () {
        _this2.sinkron.soal = 100;
      }).then(function () {
        _this2.$notify({
          group: 'foo',
          title: 'Sukses',
          type: 'success',
          text: 'Data soal berhasil didownload.'
        });
      });
      this.getSinkronServer({
        req: 'jawaban_soal'
      }).then(function () {
        _this2.sinkron.pilihan = 100;
      }).then(function () {
        _this2.$notify({
          group: 'foo',
          title: 'Sukses',
          type: 'success',
          text: 'Data pilihan berhasil didownload.'
        });
      });
      this.getSinkronServer({
        req: 'jadwal'
      });
      this.getSinkronServer({
        req: 'file'
      }).then(function () {
        _this2.sinkron.gambar = 100;
      }).then(function () {
        _this2.$notify({
          group: 'foo',
          title: 'Sukses',
          type: 'success',
          text: 'Data gambar berhasil didownload.'
        });
      });
      this.sync = true;
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/sinkron/Sinkron.vue?vue&type=template&id=1ec0d6b4&":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/sinkron/Sinkron.vue?vue&type=template&id=1ec0d6b4& ***!
  \*************************************************************************************************************************************************************************************************************/
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
        attrs: { active: _vm.isSync, "is-full-page": true },
        on: {
          "update:active": function($event) {
            _vm.isSync = $event
          }
        }
      }),
      _vm._v(" "),
      _c("main", { staticClass: "c-main" }, [
        _c("div", { staticClass: "container-fluid" }, [
          _c("div", { staticClass: "fade-in" }, [
            _c("div", { staticClass: "card" }, [
              _vm.identify
                ? _c(
                    "div",
                    { staticClass: "card-header" },
                    [
                      !_vm.identify.peserta ||
                      !_vm.identify.matpel ||
                      !_vm.identify.banksoal ||
                      !_vm.identify.soal ||
                      !_vm.identify.pilihan_soal ||
                      !_vm.identify.gambar ||
                      !_vm.identify.jadwal
                        ? _c(
                            "b-button",
                            {
                              attrs: {
                                size: "sm",
                                squared: "",
                                variant: "light"
                              },
                              on: { click: _vm.syncData }
                            },
                            [_vm._v("Mulai sync")]
                          )
                        : _vm._e(),
                      _vm._v(" "),
                      _c(
                        "b-button",
                        {
                          attrs: {
                            size: "sm",
                            squared: "",
                            variant: "primary"
                          },
                          on: {
                            click: function($event) {
                              return _vm.$bvModal.show("modal-selesai")
                            }
                          }
                        },
                        [_vm._v("Refresh status")]
                      )
                    ],
                    1
                  )
                : _vm._e(),
              _vm._v(" "),
              _vm.identify
                ? _c("div", { staticClass: "card-body" }, [
                    _c(
                      "div",
                      { staticClass: "form-group" },
                      [
                        _c("label", [_vm._v("Data 1")]),
                        _vm._v(" "),
                        _c("b-progress", {
                          staticClass: "mt-2",
                          attrs: {
                            value: _vm.identify.peserta
                              ? 100
                              : _vm.peserta.progress,
                            variant: "info",
                            animated: "",
                            "show-progress": ""
                          }
                        }),
                        _vm._v(" "),
                        _c(
                          "small",
                          {
                            directives: [
                              {
                                name: "show",
                                rawName: "v-show",
                                value: _vm.identify.peserta
                                  ? 0
                                  : _vm.peserta.step == 1,
                                expression:
                                  "identify.peserta ? 0 : peserta.step == 1"
                              }
                            ]
                          },
                          [_vm._v("Step 1 of 2- Download data dari pusat")]
                        ),
                        _vm._v(" "),
                        _c(
                          "small",
                          {
                            directives: [
                              {
                                name: "show",
                                rawName: "v-show",
                                value: _vm.identify.peserta
                                  ? 0
                                  : _vm.peserta.step == 2,
                                expression:
                                  "identify.peserta ? 0 : peserta.step == 2"
                              }
                            ]
                          },
                          [_vm._v("Step 2 of 2- Memasukkan adata ke database")]
                        ),
                        _vm._v(" "),
                        _c(
                          "small",
                          {
                            directives: [
                              {
                                name: "show",
                                rawName: "v-show",
                                value: _vm.identify.peserta
                                  ? 1
                                  : _vm.peserta.step == 3,
                                expression:
                                  "identify.peserta ? 1 : peserta.step == 3"
                              }
                            ]
                          },
                          [_vm._v("Complete")]
                        )
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "form-group" },
                      [
                        _c("label", [_vm._v("Data 2")]),
                        _vm._v(" "),
                        _c("b-progress", {
                          staticClass: "mt-2",
                          attrs: {
                            value: _vm.identify.matpel
                              ? 100
                              : _vm.matpel.progress,
                            variant: "info",
                            animated: "",
                            "show-progress": ""
                          }
                        }),
                        _vm._v(" "),
                        _c(
                          "small",
                          {
                            directives: [
                              {
                                name: "show",
                                rawName: "v-show",
                                value: _vm.identify.matpel
                                  ? 0
                                  : _vm.matpel.step == 1,
                                expression:
                                  "identify.matpel ? 0 : matpel.step == 1"
                              }
                            ]
                          },
                          [_vm._v("Step 1 of 2- Download data dari pusat")]
                        ),
                        _vm._v(" "),
                        _c(
                          "small",
                          {
                            directives: [
                              {
                                name: "show",
                                rawName: "v-show",
                                value: _vm.identify.matpel
                                  ? 0
                                  : _vm.matpel.step == 2,
                                expression:
                                  "identify.matpel ? 0 : matpel.step == 2"
                              }
                            ]
                          },
                          [_vm._v("Step 2 of 2- Memasukkan adata ke database")]
                        ),
                        _vm._v(" "),
                        _c(
                          "small",
                          {
                            directives: [
                              {
                                name: "show",
                                rawName: "v-show",
                                value: _vm.identify.matpel
                                  ? 1
                                  : _vm.matpel.step == 3,
                                expression:
                                  "identify.matpel ? 1 : matpel.step == 3"
                              }
                            ]
                          },
                          [_vm._v("Complete")]
                        )
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "form-group" },
                      [
                        _c("label", [_vm._v("Data 3")]),
                        _vm._v(" "),
                        _c("b-progress", {
                          staticClass: "mt-2",
                          attrs: {
                            value: _vm.identify.banksoal
                              ? 100
                              : _vm.banksoal.progress,
                            variant: "info",
                            animated: "",
                            "show-progress": ""
                          }
                        }),
                        _vm._v(" "),
                        _c(
                          "small",
                          {
                            directives: [
                              {
                                name: "show",
                                rawName: "v-show",
                                value: _vm.identify.banksoal
                                  ? 0
                                  : _vm.banksoal.step == 1,
                                expression:
                                  "identify.banksoal ? 0 : banksoal.step == 1"
                              }
                            ]
                          },
                          [_vm._v("Step 1 of 2- Download data dari pusat")]
                        ),
                        _vm._v(" "),
                        _c(
                          "small",
                          {
                            directives: [
                              {
                                name: "show",
                                rawName: "v-show",
                                value: _vm.identify.banksoal
                                  ? 0
                                  : _vm.banksoal.step == 2,
                                expression:
                                  "identify.banksoal ? 0 : banksoal.step == 2"
                              }
                            ]
                          },
                          [_vm._v("Step 2 of 2- Memasukkan adata ke database")]
                        ),
                        _vm._v(" "),
                        _c(
                          "small",
                          {
                            directives: [
                              {
                                name: "show",
                                rawName: "v-show",
                                value: _vm.identify.banksoal
                                  ? 1
                                  : _vm.banksoal.step == 3,
                                expression:
                                  "identify.banksoal ? 1 : banksoal.step == 3"
                              }
                            ]
                          },
                          [_vm._v("Complete")]
                        )
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "form-group" },
                      [
                        _c("label", [_vm._v("Data 4")]),
                        _vm._v(" "),
                        _c("b-progress", {
                          staticClass: "mt-2",
                          attrs: {
                            value: _vm.identify.soal ? 100 : _vm.soal.progress,
                            variant: "info",
                            animated: "",
                            "show-progress": ""
                          }
                        }),
                        _vm._v(" "),
                        _c(
                          "small",
                          {
                            directives: [
                              {
                                name: "show",
                                rawName: "v-show",
                                value: _vm.identify.soal
                                  ? 0
                                  : _vm.soal.step == 1,
                                expression: "identify.soal ? 0 : soal.step == 1"
                              }
                            ]
                          },
                          [_vm._v("Step 1 of 2- Download data dari pusat")]
                        ),
                        _vm._v(" "),
                        _c(
                          "small",
                          {
                            directives: [
                              {
                                name: "show",
                                rawName: "v-show",
                                value: _vm.identify.soal
                                  ? 0
                                  : _vm.soal.step == 2,
                                expression: "identify.soal ? 0 : soal.step == 2"
                              }
                            ]
                          },
                          [_vm._v("Step 2 of 2- Memasukkan data ke database")]
                        ),
                        _vm._v(" "),
                        _c(
                          "small",
                          {
                            directives: [
                              {
                                name: "show",
                                rawName: "v-show",
                                value: _vm.identify.soal
                                  ? 1
                                  : _vm.soal.step == 3,
                                expression: "identify.soal ? 1 : soal.step == 3"
                              }
                            ]
                          },
                          [_vm._v("Complete")]
                        )
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "form-group" },
                      [
                        _c("label", [_vm._v("Data 5")]),
                        _vm._v(" "),
                        _c("b-progress", {
                          staticClass: "mt-2",
                          attrs: {
                            value: _vm.identify.pilihan_soal
                              ? 100
                              : _vm.jawaban.progress,
                            variant: "info",
                            animated: "",
                            "show-progress": ""
                          }
                        }),
                        _vm._v(" "),
                        _c(
                          "small",
                          {
                            directives: [
                              {
                                name: "show",
                                rawName: "v-show",
                                value: _vm.identify.pilihan_soal
                                  ? 0
                                  : _vm.jawaban.step == 1,
                                expression:
                                  "identify.pilihan_soal ? 0 : jawaban.step == 1"
                              }
                            ]
                          },
                          [_vm._v("Step 1 of 2- Download data dari pusat")]
                        ),
                        _vm._v(" "),
                        _c(
                          "small",
                          {
                            directives: [
                              {
                                name: "show",
                                rawName: "v-show",
                                value: _vm.identify.pilihan_soal
                                  ? 0
                                  : _vm.jawaban.step == 2,
                                expression:
                                  "identify.pilihan_soal ? 0 : jawaban.step == 2"
                              }
                            ]
                          },
                          [_vm._v("Step 2 of 2- Memasukkan data ke database")]
                        ),
                        _vm._v(" "),
                        _c(
                          "small",
                          {
                            directives: [
                              {
                                name: "show",
                                rawName: "v-show",
                                value: _vm.identify.pilihan_soal
                                  ? 1
                                  : _vm.jawaban.step == 3,
                                expression:
                                  "identify.pilihan_soal ? 1 : jawaban.step == 3"
                              }
                            ]
                          },
                          [_vm._v("Complete")]
                        )
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "form-group" },
                      [
                        _c("label", [_vm._v("Data 6")]),
                        _vm._v(" "),
                        _c("b-progress", {
                          staticClass: "mt-2",
                          attrs: {
                            value: _vm.identify.gambar
                              ? 100
                              : _vm.gambar.progress,
                            variant: "info",
                            animated: "",
                            "show-progress": ""
                          }
                        }),
                        _vm._v(" "),
                        _c(
                          "small",
                          {
                            directives: [
                              {
                                name: "show",
                                rawName: "v-show",
                                value: _vm.identify.gambar
                                  ? 0
                                  : _vm.gambar.step == 1,
                                expression:
                                  "identify.gambar ? 0 : gambar.step == 1"
                              }
                            ]
                          },
                          [_vm._v("Step 1 of 2- Download data dari pusat")]
                        ),
                        _vm._v(" "),
                        _c(
                          "small",
                          {
                            directives: [
                              {
                                name: "show",
                                rawName: "v-show",
                                value: _vm.identify.gambar
                                  ? 0
                                  : _vm.gambar.step == 2,
                                expression:
                                  "identify.gambar ? 0 : gambar.step == 2"
                              }
                            ]
                          },
                          [
                            _vm._v(
                              "Step 2 of 2- Download file memasukkan data ke directory"
                            )
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "small",
                          {
                            directives: [
                              {
                                name: "show",
                                rawName: "v-show",
                                value: _vm.identify.gambar
                                  ? 1
                                  : _vm.gambar.step == 3,
                                expression:
                                  "identify.gambar ? 1 : gambar.step == 3"
                              }
                            ]
                          },
                          [_vm._v("Complete")]
                        )
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "form-group" },
                      [
                        _c("label", [_vm._v("Data 7")]),
                        _vm._v(" "),
                        _c("b-progress", {
                          staticClass: "mt-2",
                          attrs: {
                            value: _vm.identify.jadwal
                              ? 100
                              : _vm.jadwal.progress,
                            variant: "info",
                            animated: "",
                            "show-progress": ""
                          }
                        }),
                        _vm._v(" "),
                        _c(
                          "small",
                          {
                            directives: [
                              {
                                name: "show",
                                rawName: "v-show",
                                value: _vm.identify.jadwal
                                  ? 0
                                  : _vm.jadwal.step == 1,
                                expression:
                                  "identify.jadwal ? 0 : jadwal.step == 1"
                              }
                            ]
                          },
                          [_vm._v("Step 1 of 2- Download data dari pusat")]
                        ),
                        _vm._v(" "),
                        _c(
                          "small",
                          {
                            directives: [
                              {
                                name: "show",
                                rawName: "v-show",
                                value: _vm.identify.jadwal
                                  ? 0
                                  : _vm.jadwal.step == 2,
                                expression:
                                  "identify.jadwal ? 0 : jadwal.step == 2"
                              }
                            ]
                          },
                          [_vm._v("Step 2 of 2- Memasukkan data ke database")]
                        ),
                        _vm._v(" "),
                        _c(
                          "small",
                          {
                            directives: [
                              {
                                name: "show",
                                rawName: "v-show",
                                value: _vm.identify.jadwal
                                  ? 1
                                  : _vm.jadwal.step == 3,
                                expression:
                                  "identify.jadwal ? 1 : jadwal.step == 3"
                              }
                            ]
                          },
                          [_vm._v("Complete")]
                        )
                      ],
                      1
                    )
                  ])
                : _vm._e(),
              _vm._v(" "),
              _c("div", { staticClass: "card-footer" })
            ])
          ])
        ])
      ]),
      _vm._v(" "),
      _c("b-modal", {
        attrs: { id: "modal-selesai" },
        scopedSlots: _vm._u([
          {
            key: "modal-header",
            fn: function(ref) {
              var close = ref.close
              return [_c("h5", [_vm._v("Download status")])]
            }
          },
          {
            key: "default",
            fn: function(ref) {
              var hide = ref.hide
              return [
                _vm.center
                  ? _c("table", { staticClass: "table table-borderless" }, [
                      _c("tr", [
                        _c("td", [_c("b", [_vm._v("Data 1")])]),
                        _vm._v(" "),
                        _c("td", {
                          domProps: { textContent: _vm._s(_vm.center.peserta) }
                        }),
                        _vm._v(" "),
                        _c("td", [_vm._v("-")]),
                        _vm._v(" "),
                        _c("td", [
                          _vm._v(_vm._s(_vm.count ? _vm.count.peserta : 0))
                        ])
                      ]),
                      _vm._v(" "),
                      _c("tr", [
                        _c("td", [_c("b", [_vm._v("Data 2")])]),
                        _vm._v(" "),
                        _c("td", {
                          domProps: { textContent: _vm._s(_vm.center.matpel) }
                        }),
                        _vm._v(" "),
                        _c("td", [_vm._v("-")]),
                        _vm._v(" "),
                        _c("td", [
                          _vm._v(_vm._s(_vm.count ? _vm.count.matpel : 0))
                        ])
                      ]),
                      _vm._v(" "),
                      _c("tr", [
                        _c("td", [_c("b", [_vm._v("Data 3")])]),
                        _vm._v(" "),
                        _c("td", {
                          domProps: { textContent: _vm._s(_vm.center.banksoal) }
                        }),
                        _vm._v(" "),
                        _c("td", [_vm._v("-")]),
                        _vm._v(" "),
                        _c("td", [
                          _vm._v(_vm._s(_vm.count ? _vm.count.banksoal : 0))
                        ])
                      ]),
                      _vm._v(" "),
                      _c("tr", [
                        _c("td", [_c("b", [_vm._v("Data 4")])]),
                        _vm._v(" "),
                        _c("td", {
                          domProps: { textContent: _vm._s(_vm.center.soal) }
                        }),
                        _vm._v(" "),
                        _c("td", [_vm._v("-")]),
                        _vm._v(" "),
                        _c("td", [
                          _vm._v(_vm._s(_vm.count ? _vm.count.soal : 0))
                        ])
                      ]),
                      _vm._v(" "),
                      _c("tr", [
                        _c("td", [_c("b", [_vm._v("Data 5")])]),
                        _vm._v(" "),
                        _c("td", {
                          domProps: {
                            textContent: _vm._s(_vm.center.jawaban_soal)
                          }
                        }),
                        _vm._v(" "),
                        _c("td", [_vm._v("-")]),
                        _vm._v(" "),
                        _c("td", [
                          _vm._v(_vm._s(_vm.count ? _vm.count.jawaban_soal : 0))
                        ])
                      ]),
                      _vm._v(" "),
                      _c("tr", [
                        _c("td", [_c("b", [_vm._v("Data 6")])]),
                        _vm._v(" "),
                        _c("td", {
                          domProps: { textContent: _vm._s(_vm.center.gambar) }
                        }),
                        _vm._v(" "),
                        _c("td", [_vm._v("-")]),
                        _vm._v(" "),
                        _c("td", [
                          _vm._v(_vm._s(_vm.count ? _vm.count.gambar : 0))
                        ])
                      ]),
                      _vm._v(" "),
                      _c("tr", [
                        _c("td", [_c("b", [_vm._v("Data 7")])]),
                        _vm._v(" "),
                        _c("td", {
                          domProps: { textContent: _vm._s(_vm.center.jadwal) }
                        }),
                        _vm._v(" "),
                        _c("td", [_vm._v("-")]),
                        _vm._v(" "),
                        _c("td", [
                          _vm._v(_vm._s(_vm.count ? _vm.count.jadwal : 0))
                        ])
                      ])
                    ])
                  : _vm._e()
              ]
            }
          },
          {
            key: "modal-footer",
            fn: function(ref) {
              var cancel = ref.cancel
              return [
                _c(
                  "b-button",
                  {
                    attrs: { size: "sm", variant: "danger", squared: "" },
                    on: {
                      click: function($event) {
                        return cancel()
                      }
                    }
                  },
                  [_vm._v("\n\t\t        Tutup\n\t\t      ")]
                )
              ]
            }
          }
        ])
      })
    ],
    1
  )
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

/***/ "./resources/js/pages/sinkron/Sinkron.vue":
/*!************************************************!*\
  !*** ./resources/js/pages/sinkron/Sinkron.vue ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Sinkron_vue_vue_type_template_id_1ec0d6b4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Sinkron.vue?vue&type=template&id=1ec0d6b4& */ "./resources/js/pages/sinkron/Sinkron.vue?vue&type=template&id=1ec0d6b4&");
/* harmony import */ var _Sinkron_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Sinkron.vue?vue&type=script&lang=js& */ "./resources/js/pages/sinkron/Sinkron.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Sinkron_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Sinkron_vue_vue_type_template_id_1ec0d6b4___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Sinkron_vue_vue_type_template_id_1ec0d6b4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/sinkron/Sinkron.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/pages/sinkron/Sinkron.vue?vue&type=script&lang=js&":
/*!*************************************************************************!*\
  !*** ./resources/js/pages/sinkron/Sinkron.vue?vue&type=script&lang=js& ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Sinkron_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Sinkron.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/sinkron/Sinkron.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Sinkron_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/sinkron/Sinkron.vue?vue&type=template&id=1ec0d6b4&":
/*!*******************************************************************************!*\
  !*** ./resources/js/pages/sinkron/Sinkron.vue?vue&type=template&id=1ec0d6b4& ***!
  \*******************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Sinkron_vue_vue_type_template_id_1ec0d6b4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Sinkron.vue?vue&type=template&id=1ec0d6b4& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/sinkron/Sinkron.vue?vue&type=template&id=1ec0d6b4&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Sinkron_vue_vue_type_template_id_1ec0d6b4___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Sinkron_vue_vue_type_template_id_1ec0d6b4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);