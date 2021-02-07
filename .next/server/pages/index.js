module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/index.tsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/container.tsx":
/*!**********************************!*\
  !*** ./components/container.tsx ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n\nvar _jsxFileName = \"/Users/xuzhiyi/Desktop/next/NextTest/components/container.tsx\";\n\nconst Container = ({\n  children\n}) => {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    className: \"container mx-auto px-5\",\n    children: children\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 8,\n    columnNumber: 12\n  }, undefined);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Container);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2NvbnRhaW5lci50c3g/YTQ5YSJdLCJuYW1lcyI6WyJDb250YWluZXIiLCJjaGlsZHJlbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBTUEsTUFBTUEsU0FBNEIsR0FBRyxDQUFDO0FBQUVDO0FBQUYsQ0FBRCxLQUF5QjtBQUMxRCxzQkFBTztBQUFLLGFBQVMsRUFBQyx3QkFBZjtBQUFBLGNBQXlDQTtBQUF6QztBQUFBO0FBQUE7QUFBQTtBQUFBLGVBQVA7QUFDSCxDQUZEOztBQUllRCx3RUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvY29udGFpbmVyLnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFJlYWN0Tm9kZSwgRnVuY3Rpb25Db21wb25lbnQgfSBmcm9tICdyZWFjdCdcblxudHlwZSBQcm9wcyA9IHtcbiAgICBjaGlsZHJlbj86IFJlYWN0Tm9kZVxufVxuXG5jb25zdCBDb250YWluZXI6IEZ1bmN0aW9uQ29tcG9uZW50ID0gKHsgY2hpbGRyZW4gfTogUHJvcHMpID0+IHtcbiAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgbXgtYXV0byBweC01XCI+e2NoaWxkcmVufTwvZGl2PlxufVxuXG5leHBvcnQgZGVmYXVsdCBDb250YWluZXI7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/container.tsx\n");

/***/ }),

/***/ "./components/header.tsx":
/*!*******************************!*\
  !*** ./components/header.tsx ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var rc_banner_anim__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rc-banner-anim */ \"rc-banner-anim\");\n/* harmony import */ var rc_banner_anim__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rc_banner_anim__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var rc_tween_one__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rc-tween-one */ \"rc-tween-one\");\n/* harmony import */ var rc_tween_one__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(rc_tween_one__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var rc_banner_anim_assets_index_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rc-banner-anim/assets/index.css */ \"./node_modules/rc-banner-anim/assets/index.css\");\n/* harmony import */ var rc_banner_anim_assets_index_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(rc_banner_anim_assets_index_css__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _jsxFileName = \"/Users/xuzhiyi/Desktop/next/NextTest/components/header.tsx\";\n\n\n\nconst BgElement = rc_banner_anim__WEBPACK_IMPORTED_MODULE_1__[\"Element\"].BgElement;\n\nconst Header = () => {\n  return (\n    /*#__PURE__*/\n    // <h2 classNameName=\"text-2xl md:text-4xl font-bold tracking-tight md:tracking-tighter leading-tight mb-20 mt-8\">\n    //     <Link href='/'>\n    //         <a classNameName='hover:underline'>Zachary</a>\n    //     </Link>\n    // </h2>\n    Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"header\", {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: \"container\",\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          className: \"blog-header\",\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n            className: \"search-form-col\",\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n              className: \"search-form\",\n              href: \"contact\",\n              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n                className: \"input-group\",\n                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n                  className: \"input-group-addon\",\n                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n                    src: \"/image/mail-icon-white.png\",\n                    alt: \"\"\n                  }, void 0, false, {\n                    fileName: _jsxFileName,\n                    lineNumber: 18,\n                    columnNumber: 69\n                  }, undefined)\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 18,\n                  columnNumber: 33\n                }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n                  className: \"form-control\",\n                  children: \"\\u7559\\u8A00\"\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 19,\n                  columnNumber: 33\n                }, undefined)]\n              }, void 0, true, {\n                fileName: _jsxFileName,\n                lineNumber: 17,\n                columnNumber: 29\n              }, undefined)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 16,\n              columnNumber: 25\n            }, undefined)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 15,\n            columnNumber: 21\n          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n            className: \"logo-col text-center\",\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n              href: \"/\",\n              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n                src: \"/image/2.png\",\n                width: \"200\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 24,\n                columnNumber: 37\n              }, undefined)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 24,\n              columnNumber: 25\n            }, undefined)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 23,\n            columnNumber: 21\n          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n            className: \"menu-trigger-col\",\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n              className: \"menu-trigger pull-right\",\n              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n                className: \"active-page\",\n                children: \"\\u83DC\\u5355\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 28,\n                columnNumber: 29\n              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n                src: \"/image/menu-align-white.png\",\n                alt: \"\",\n                className: \"icon-burger\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 29,\n                columnNumber: 29\n              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n                src: \"/image/menu-close-white.png\",\n                alt: \"\",\n                className: \"icon-cross\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 30,\n                columnNumber: 29\n              }, undefined)]\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 27,\n              columnNumber: 25\n            }, undefined)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 26,\n            columnNumber: 21\n          }, undefined)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 14,\n          columnNumber: 17\n        }, undefined)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 13,\n        columnNumber: 13\n      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(rc_banner_anim__WEBPACK_IMPORTED_MODULE_1___default.a, {\n        prefixCls: \"banner-user\",\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(rc_banner_anim__WEBPACK_IMPORTED_MODULE_1__[\"Element\"], {\n          prefixCls: \"banner-user-elem\",\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(BgElement, {\n            className: \"bg\",\n            style: {\n              background: '#364D79'\n            }\n          }, \"bg\", false, {\n            fileName: _jsxFileName,\n            lineNumber: 37,\n            columnNumber: 21\n          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(rc_tween_one__WEBPACK_IMPORTED_MODULE_2___default.a, {\n            className: \"banner-user-title\",\n            animation: {\n              y: 30,\n              opacity: 0,\n              type: 'from'\n            },\n            children: \"Ant Motion Banner\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 38,\n            columnNumber: 21\n          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(rc_tween_one__WEBPACK_IMPORTED_MODULE_2___default.a, {\n            className: \"banner-user-text\",\n            animation: {\n              y: 30,\n              opacity: 0,\n              type: 'from',\n              delay: 100\n            },\n            children: \"The Fast Way Use Animation In React\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 41,\n            columnNumber: 21\n          }, undefined)]\n        }, \"0\", true, {\n          fileName: _jsxFileName,\n          lineNumber: 36,\n          columnNumber: 17\n        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(rc_banner_anim__WEBPACK_IMPORTED_MODULE_1__[\"Element\"], {\n          prefixCls: \"banner-user-elem\",\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(BgElement, {\n            className: \"bg\",\n            style: {\n              background: '#64CBCC'\n            }\n          }, \"bg\", false, {\n            fileName: _jsxFileName,\n            lineNumber: 46,\n            columnNumber: 21\n          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(rc_tween_one__WEBPACK_IMPORTED_MODULE_2___default.a, {\n            className: \"banner-user-title\",\n            animation: {\n              y: 30,\n              opacity: 0,\n              type: 'from'\n            },\n            children: \"Ant Motion Banner\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 47,\n            columnNumber: 21\n          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(rc_tween_one__WEBPACK_IMPORTED_MODULE_2___default.a, {\n            className: \"banner-user-text\",\n            animation: {\n              y: 30,\n              opacity: 0,\n              type: 'from',\n              delay: 100\n            },\n            children: \"The Fast Way Use Animation In React\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 50,\n            columnNumber: 21\n          }, undefined)]\n        }, \"1\", true, {\n          fileName: _jsxFileName,\n          lineNumber: 45,\n          columnNumber: 17\n        }, undefined)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 35,\n        columnNumber: 13\n      }, undefined)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 12,\n      columnNumber: 9\n    }, undefined)\n  );\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Header);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2hlYWRlci50c3g/NzUxYSJdLCJuYW1lcyI6WyJCZ0VsZW1lbnQiLCJFbGVtZW50IiwiSGVhZGVyIiwiYmFja2dyb3VuZCIsInkiLCJvcGFjaXR5IiwidHlwZSIsImRlbGF5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBLE1BQU1BLFNBQVMsR0FBR0Msc0RBQU8sQ0FBQ0QsU0FBMUI7O0FBQ0EsTUFBTUUsTUFBTSxHQUFHLE1BQU07QUFDakI7QUFBQTtBQUNJO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBLDhCQUNJO0FBQUssaUJBQVMsRUFBQyxXQUFmO0FBQUEsK0JBQ0k7QUFBSyxtQkFBUyxFQUFDLGFBQWY7QUFBQSxrQ0FDSTtBQUFLLHFCQUFTLEVBQUMsaUJBQWY7QUFBQSxtQ0FDSTtBQUFHLHVCQUFTLEVBQUMsYUFBYjtBQUEyQixrQkFBSSxFQUFDLFNBQWhDO0FBQUEscUNBQ0k7QUFBSyx5QkFBUyxFQUFDLGFBQWY7QUFBQSx3Q0FDSTtBQUFNLDJCQUFTLEVBQUMsbUJBQWhCO0FBQUEseUNBQW9DO0FBQUssdUJBQUcsRUFBQyw0QkFBVDtBQUFzQyx1QkFBRyxFQUFDO0FBQTFDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBcEM7QUFBQTtBQUFBO0FBQUE7QUFBQSw2QkFESixlQUVJO0FBQU0sMkJBQVMsRUFBQyxjQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw2QkFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFESixlQVNJO0FBQUsscUJBQVMsRUFBQyxzQkFBZjtBQUFBLG1DQUNJO0FBQUcsa0JBQUksRUFBQyxHQUFSO0FBQUEscUNBQVk7QUFBSyxtQkFBRyxFQUFDLGNBQVQ7QUFBd0IscUJBQUssRUFBQztBQUE5QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBVEosZUFZSTtBQUFLLHFCQUFTLEVBQUMsa0JBQWY7QUFBQSxtQ0FDSTtBQUFRLHVCQUFTLEVBQUMseUJBQWxCO0FBQUEsc0NBQ0k7QUFBTSx5QkFBUyxFQUFDLGFBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDJCQURKLGVBRUk7QUFBSyxtQkFBRyxFQUFDLDZCQUFUO0FBQXVDLG1CQUFHLEVBQUMsRUFBM0M7QUFBOEMseUJBQVMsRUFBQztBQUF4RDtBQUFBO0FBQUE7QUFBQTtBQUFBLDJCQUZKLGVBR0k7QUFBSyxtQkFBRyxFQUFDLDZCQUFUO0FBQXVDLG1CQUFHLEVBQUMsRUFBM0M7QUFBOEMseUJBQVMsRUFBQztBQUF4RDtBQUFBO0FBQUE7QUFBQTtBQUFBLDJCQUhKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBWko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFESixlQXVCSSxxRUFBQyxxREFBRDtBQUFZLGlCQUFTLEVBQUMsYUFBdEI7QUFBQSxnQ0FDSSxxRUFBQyxzREFBRDtBQUFTLG1CQUFTLEVBQUMsa0JBQW5CO0FBQUEsa0NBQ0kscUVBQUMsU0FBRDtBQUFvQixxQkFBUyxFQUFDLElBQTlCO0FBQW1DLGlCQUFLLEVBQUU7QUFBRUMsd0JBQVUsRUFBRTtBQUFkO0FBQTFDLGFBQWUsSUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQURKLGVBRUkscUVBQUMsbURBQUQ7QUFBVSxxQkFBUyxFQUFDLG1CQUFwQjtBQUF3QyxxQkFBUyxFQUFFO0FBQUVDLGVBQUMsRUFBRSxFQUFMO0FBQVNDLHFCQUFPLEVBQUUsQ0FBbEI7QUFBcUJDLGtCQUFJLEVBQUU7QUFBM0IsYUFBbkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBRkosZUFLSSxxRUFBQyxtREFBRDtBQUFVLHFCQUFTLEVBQUMsa0JBQXBCO0FBQXVDLHFCQUFTLEVBQUU7QUFBRUYsZUFBQyxFQUFFLEVBQUw7QUFBU0MscUJBQU8sRUFBRSxDQUFsQjtBQUFxQkMsa0JBQUksRUFBRSxNQUEzQjtBQUFtQ0MsbUJBQUssRUFBRTtBQUExQyxhQUFsRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFMSjtBQUFBLFdBQTBDLEdBQTFDO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBREosZUFVSSxxRUFBQyxzREFBRDtBQUFTLG1CQUFTLEVBQUMsa0JBQW5CO0FBQUEsa0NBQ0kscUVBQUMsU0FBRDtBQUFvQixxQkFBUyxFQUFDLElBQTlCO0FBQW1DLGlCQUFLLEVBQUU7QUFBRUosd0JBQVUsRUFBRTtBQUFkO0FBQTFDLGFBQWUsSUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQURKLGVBRUkscUVBQUMsbURBQUQ7QUFBVSxxQkFBUyxFQUFDLG1CQUFwQjtBQUF3QyxxQkFBUyxFQUFFO0FBQUVDLGVBQUMsRUFBRSxFQUFMO0FBQVNDLHFCQUFPLEVBQUUsQ0FBbEI7QUFBcUJDLGtCQUFJLEVBQUU7QUFBM0IsYUFBbkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBRkosZUFLSSxxRUFBQyxtREFBRDtBQUFVLHFCQUFTLEVBQUMsa0JBQXBCO0FBQXVDLHFCQUFTLEVBQUU7QUFBRUYsZUFBQyxFQUFFLEVBQUw7QUFBU0MscUJBQU8sRUFBRSxDQUFsQjtBQUFxQkMsa0JBQUksRUFBRSxNQUEzQjtBQUFtQ0MsbUJBQUssRUFBRTtBQUExQyxhQUFsRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFMSjtBQUFBLFdBQTBDLEdBQTFDO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBVko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQXZCSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFOSjtBQW1ESCxDQXBERDs7QUFzRGVMLHFFQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9oZWFkZXIudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEJhbm5lckFuaW0sIHsgRWxlbWVudCB9IGZyb20gJ3JjLWJhbm5lci1hbmltJztcbmltcG9ydCBUd2Vlbk9uZSBmcm9tICdyYy10d2Vlbi1vbmUnO1xuaW1wb3J0ICdyYy1iYW5uZXItYW5pbS9hc3NldHMvaW5kZXguY3NzJztcbmNvbnN0IEJnRWxlbWVudCA9IEVsZW1lbnQuQmdFbGVtZW50O1xuY29uc3QgSGVhZGVyID0gKCkgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICAgIC8vIDxoMiBjbGFzc05hbWVOYW1lPVwidGV4dC0yeGwgbWQ6dGV4dC00eGwgZm9udC1ib2xkIHRyYWNraW5nLXRpZ2h0IG1kOnRyYWNraW5nLXRpZ2h0ZXIgbGVhZGluZy10aWdodCBtYi0yMCBtdC04XCI+XG4gICAgICAgIC8vICAgICA8TGluayBocmVmPScvJz5cbiAgICAgICAgLy8gICAgICAgICA8YSBjbGFzc05hbWVOYW1lPSdob3Zlcjp1bmRlcmxpbmUnPlphY2hhcnk8L2E+XG4gICAgICAgIC8vICAgICA8L0xpbms+XG4gICAgICAgIC8vIDwvaDI+XG4gICAgICAgIDxoZWFkZXI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmxvZy1oZWFkZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZWFyY2gtZm9ybS1jb2xcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cInNlYXJjaC1mb3JtXCIgaHJlZj1cImNvbnRhY3RcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWdyb3VwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImlucHV0LWdyb3VwLWFkZG9uXCI+PGltZyBzcmM9XCIvaW1hZ2UvbWFpbC1pY29uLXdoaXRlLnBuZ1wiIGFsdD1cIlwiIC8+PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIj7nlZnoqIA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxvZ28tY29sIHRleHQtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiL1wiPjxpbWcgc3JjPVwiL2ltYWdlLzIucG5nXCIgd2lkdGg9XCIyMDBcIiAvPjwvYT5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWVudS10cmlnZ2VyLWNvbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJtZW51LXRyaWdnZXIgcHVsbC1yaWdodFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImFjdGl2ZS1wYWdlXCI+6I+c5Y2VPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL2ltYWdlL21lbnUtYWxpZ24td2hpdGUucG5nXCIgYWx0PVwiXCIgY2xhc3NOYW1lPVwiaWNvbi1idXJnZXJcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL2ltYWdlL21lbnUtY2xvc2Utd2hpdGUucG5nXCIgYWx0PVwiXCIgY2xhc3NOYW1lPVwiaWNvbi1jcm9zc1wiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxCYW5uZXJBbmltIHByZWZpeENscz1cImJhbm5lci11c2VyXCI+XG4gICAgICAgICAgICAgICAgPEVsZW1lbnQgcHJlZml4Q2xzPVwiYmFubmVyLXVzZXItZWxlbVwiIGtleT1cIjBcIj5cbiAgICAgICAgICAgICAgICAgICAgPEJnRWxlbWVudCBrZXk9XCJiZ1wiIGNsYXNzTmFtZT1cImJnXCIgc3R5bGU9e3sgYmFja2dyb3VuZDogJyMzNjRENzknfX0gLz5cbiAgICAgICAgICAgICAgICAgICAgPFR3ZWVuT25lIGNsYXNzTmFtZT1cImJhbm5lci11c2VyLXRpdGxlXCIgYW5pbWF0aW9uPXt7IHk6IDMwLCBvcGFjaXR5OiAwLCB0eXBlOiAnZnJvbScgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICBBbnQgTW90aW9uIEJhbm5lclxuICAgICAgICAgICAgICAgICAgICA8L1R3ZWVuT25lPlxuICAgICAgICAgICAgICAgICAgICA8VHdlZW5PbmUgY2xhc3NOYW1lPVwiYmFubmVyLXVzZXItdGV4dFwiIGFuaW1hdGlvbj17eyB5OiAzMCwgb3BhY2l0eTogMCwgdHlwZTogJ2Zyb20nLCBkZWxheTogMTAwIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgVGhlIEZhc3QgV2F5IFVzZSBBbmltYXRpb24gSW4gUmVhY3RcbiAgICAgICAgICAgICAgICAgICAgPC9Ud2Vlbk9uZT5cbiAgICAgICAgICAgICAgICA8L0VsZW1lbnQ+XG4gICAgICAgICAgICAgICAgPEVsZW1lbnQgcHJlZml4Q2xzPVwiYmFubmVyLXVzZXItZWxlbVwiIGtleT1cIjFcIj5cbiAgICAgICAgICAgICAgICAgICAgPEJnRWxlbWVudCBrZXk9XCJiZ1wiIGNsYXNzTmFtZT1cImJnXCIgc3R5bGU9e3sgYmFja2dyb3VuZDogJyM2NENCQ0MnfX0gLz5cbiAgICAgICAgICAgICAgICAgICAgPFR3ZWVuT25lIGNsYXNzTmFtZT1cImJhbm5lci11c2VyLXRpdGxlXCIgYW5pbWF0aW9uPXt7IHk6IDMwLCBvcGFjaXR5OiAwLCB0eXBlOiAnZnJvbScgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICBBbnQgTW90aW9uIEJhbm5lclxuICAgICAgICAgICAgICAgICAgICA8L1R3ZWVuT25lPlxuICAgICAgICAgICAgICAgICAgICA8VHdlZW5PbmUgY2xhc3NOYW1lPVwiYmFubmVyLXVzZXItdGV4dFwiIGFuaW1hdGlvbj17eyB5OiAzMCwgb3BhY2l0eTogMCwgdHlwZTogJ2Zyb20nLCBkZWxheTogMTAwIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgVGhlIEZhc3QgV2F5IFVzZSBBbmltYXRpb24gSW4gUmVhY3RcbiAgICAgICAgICAgICAgICAgICAgPC9Ud2Vlbk9uZT5cbiAgICAgICAgICAgICAgICA8L0VsZW1lbnQ+XG4gICAgICAgICAgICA8L0Jhbm5lckFuaW0+XG4gICAgICAgIDwvaGVhZGVyPlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/header.tsx\n");

/***/ }),

/***/ "./components/layout.tsx":
/*!*******************************!*\
  !*** ./components/layout.tsx ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n\n\nvar _jsxFileName = \"/Users/xuzhiyi/Desktop/next/NextTest/components/layout.tsx\";\n\nconst Layout = ({\n  children\n}) => {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: \"min-h-screen\",\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"main\", {\n        children: children\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 9,\n        columnNumber: 17\n      }, undefined)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 8,\n      columnNumber: 13\n    }, undefined)\n  }, void 0, false);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Layout);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2xheW91dC50c3g/ZTRjZSJdLCJuYW1lcyI6WyJMYXlvdXQiLCJjaGlsZHJlbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUlBLE1BQU1BLE1BQU0sR0FBRyxDQUFDO0FBQUVDO0FBQUYsQ0FBRCxLQUF5QjtBQUNwQyxzQkFDSTtBQUFBLDJCQUNJO0FBQUssZUFBUyxFQUFDLGNBQWY7QUFBQSw2QkFDSTtBQUFBLGtCQUFPQTtBQUFQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREosbUJBREo7QUFPSCxDQVJEOztBQVNlRCxxRUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvbGF5b3V0LnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbInR5cGUgUHJvcHMgPSB7XG4gICAgY2hpbGRyZW46IFJlYWN0LlJlYWN0Tm9kZVxufVxuXG5jb25zdCBMYXlvdXQgPSAoeyBjaGlsZHJlbiB9OiBQcm9wcykgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1pbi1oLXNjcmVlblwiPlxuICAgICAgICAgICAgICAgIDxtYWluPntjaGlsZHJlbn08L21haW4+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC8+XG4gICAgKVxufVxuZXhwb3J0IGRlZmF1bHQgTGF5b3V0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/layout.tsx\n");

/***/ }),

/***/ "./node_modules/rc-banner-anim/assets/index.css":
/*!******************************************************!*\
  !*** ./node_modules/rc-banner-anim/assets/index.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuL25vZGVfbW9kdWxlcy9yYy1iYW5uZXItYW5pbS9hc3NldHMvaW5kZXguY3NzLmpzIiwic291cmNlc0NvbnRlbnQiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/rc-banner-anim/assets/index.css\n");

/***/ }),

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/layout */ \"./components/layout.tsx\");\n/* harmony import */ var _components_container__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/container */ \"./components/container.tsx\");\n/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/header */ \"./components/header.tsx\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_4__);\n\n\nvar _jsxFileName = \"/Users/xuzhiyi/Desktop/next/NextTest/pages/index.tsx\";\n\n\n\n\n\nconst Index = ({\n  allPosts\n}) => {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_layout__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_head__WEBPACK_IMPORTED_MODULE_4___default.a, {\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"title\", {\n          children: \"Zachary's blog\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 16,\n          columnNumber: 11\n        }, undefined)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 15,\n        columnNumber: 9\n      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_container__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_header__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 19,\n          columnNumber: 11\n        }, undefined)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 18,\n        columnNumber: 9\n      }, undefined)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 14,\n      columnNumber: 7\n    }, undefined)\n  }, void 0, false);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Index);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC50c3g/ZGI3NiJdLCJuYW1lcyI6WyJJbmRleCIsImFsbFBvc3RzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOztBQU9BLE1BQU1BLEtBQUssR0FBRyxDQUFDO0FBQUVDO0FBQUYsQ0FBRCxLQUF5QjtBQUNyQyxzQkFDRTtBQUFBLDJCQUNFLHFFQUFDLDBEQUFEO0FBQUEsOEJBQ0UscUVBQUMsZ0RBQUQ7QUFBQSwrQkFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREYsZUFJRSxxRUFBQyw2REFBRDtBQUFBLCtCQUNFLHFFQUFDLDBEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGLG1CQURGO0FBWUQsQ0FiRDs7QUFlZUQsb0VBQWYiLCJmaWxlIjoiLi9wYWdlcy9pbmRleC50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvbGF5b3V0J1xuaW1wb3J0IENvbnRhaW5lciBmcm9tICcuLi9jb21wb25lbnRzL2NvbnRhaW5lcidcbmltcG9ydCBIZWFkZXIgZnJvbSAnLi4vY29tcG9uZW50cy9oZWFkZXInXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG5pbXBvcnQgUG9zdCBmcm9tICcuLi90eXBlcy9wb3N0J1xuXG50eXBlIFByb3BzID0ge1xuICBhbGxQb3N0czogUG9zdFtdXG59XG5cbmNvbnN0IEluZGV4ID0gKHsgYWxsUG9zdHMgfTogUHJvcHMpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPExheW91dD5cbiAgICAgICAgPEhlYWQ+XG4gICAgICAgICAgPHRpdGxlPlphY2hhcnkncyBibG9nPC90aXRsZT5cbiAgICAgICAgPC9IZWFkPlxuICAgICAgICA8Q29udGFpbmVyPlxuICAgICAgICAgIDxIZWFkZXIgLz5cbiAgICAgICAgPC9Db250YWluZXI+XG4gICAgICA8L0xheW91dD5cbiAgICA8Lz5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBJbmRleCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.tsx\n");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next/head\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIj81ZWYyIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6Im5leHQvaGVhZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next/head\n");

/***/ }),

/***/ "rc-banner-anim":
/*!*********************************!*\
  !*** external "rc-banner-anim" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"rc-banner-anim\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyYy1iYW5uZXItYW5pbVwiPzJiOTciXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmMtYmFubmVyLWFuaW0uanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyYy1iYW5uZXItYW5pbVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///rc-banner-anim\n");

/***/ }),

/***/ "rc-tween-one":
/*!*******************************!*\
  !*** external "rc-tween-one" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"rc-tween-one\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyYy10d2Vlbi1vbmVcIj85MzExIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InJjLXR3ZWVuLW9uZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJjLXR3ZWVuLW9uZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///rc-tween-one\n");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react/jsx-dev-runtime\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIj9jZDkwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InJlYWN0L2pzeC1kZXYtcnVudGltZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react/jsx-dev-runtime\n");

/***/ })

/******/ });