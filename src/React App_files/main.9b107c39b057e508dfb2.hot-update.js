webpackHotUpdate("main",{

/***/ "./src/components/thumbnail.js":
/*!*************************************!*\
  !*** ./src/components/thumbnail.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _thumbnail_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./thumbnail.css */ "./src/components/thumbnail.css");
/* harmony import */ var _thumbnail_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_thumbnail_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _assets_download_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/download.png */ "./src/assets/download.png");
/* harmony import */ var _assets_download_png__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_assets_download_png__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils_fileUtils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/fileUtils */ "./src/utils/fileUtils.js");
var _jsxFileName = "/Users/shubhamu/Desktop/graphics library/graphics_library/src/components/thumbnail.js";





class Thubmnail extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  render() {
    const _this$props = this.props,
          element = _this$props.element,
          index = _this$props.index;
    const name = element.file.substr(element.file.lastIndexOf("/") + 1);
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      id: "thumbnail" + index,
      className: "thumbnail",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      className: "thumbicon",
      src: element.thumbnail,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "downloadicon",
      onClick: () => Object(_utils_fileUtils__WEBPACK_IMPORTED_MODULE_3__["downloadFile"])(element.file, name, () => {
        console.log('ssss');
      }),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      src: _assets_download_png__WEBPACK_IMPORTED_MODULE_2___default.a,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "cover",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      href: "https://www.w3schools.com/images/myw3schoolsimage.jpg",
      download: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14
      },
      __self: this
    }, "doddwnload"));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Thubmnail);

/***/ })

})
//# sourceMappingURL=main.9b107c39b057e508dfb2.hot-update.js.map