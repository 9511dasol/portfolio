"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/(home)/page",{

/***/ "(app-pages-browser)/./components/basic-information.tsx":
/*!******************************************!*\
  !*** ./components/basic-information.tsx ***!
  \******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ BaInfo; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _styles_section_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/section.css */ \"(app-pages-browser)/./styles/section.css\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/dist/api/link.js\");\n/* harmony import */ var _ingredients_ingredients__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../ingredients/ingredients */ \"(app-pages-browser)/./ingredients/ingredients.ts\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nfunction BaInfo() {\n    _s();\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        const texts = [\n            \"FE Dev\",\n            \"BE Dev\",\n            \"FS Dev\"\n        ];\n        const speed = 100;\n        const textElements = document.querySelector(\".typewriter-text\");\n        let textIndex = 0;\n        let characterIndex = 0;\n        let typing = true;\n        function typeWriter() {\n            if (typing) {\n                if (characterIndex < texts[textIndex].length) {\n                    textElements.textContent = texts[textIndex].substring(0, characterIndex + 1);\n                    characterIndex++;\n                    setTimeout(typeWriter, speed);\n                } else {\n                    typing = false;\n                    setTimeout(eraseText, 1000);\n                }\n            }\n        }\n        function eraseText() {\n            if (!typing) {\n                if (characterIndex > 0) {\n                    textElements.textContent = texts[textIndex].substring(0, characterIndex - 1);\n                    characterIndex--;\n                    setTimeout(eraseText, speed);\n                } else {\n                    typing = true;\n                    textIndex = (textIndex + 1) % texts.length;\n                    setTimeout(typeWriter, speed);\n                }\n            }\n        }\n        // 초기 애니메이션 시작\n        typeWriter();\n    // 컴포넌트 언마운트 시 애니메이션 정지\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        className: \"home\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"home-img\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                    src: _ingredients_ingredients__WEBPACK_IMPORTED_MODULE_4__.myPicture.src,\n                    alt: \"\"\n                }, void 0, false, {\n                    fileName: \"D:\\\\Down\\\\react-app\\\\portfolio\\\\components\\\\basic-information.tsx\",\n                    lineNumber: 58,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"D:\\\\Down\\\\react-app\\\\portfolio\\\\components\\\\basic-information.tsx\",\n                lineNumber: 57,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"home-content\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        children: [\n                            \"안녕하세요 \",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                children: \"한다솔 입니다.\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\Down\\\\react-app\\\\portfolio\\\\components\\\\basic-information.tsx\",\n                                lineNumber: 62,\n                                columnNumber: 17\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\Down\\\\react-app\\\\portfolio\\\\components\\\\basic-information.tsx\",\n                        lineNumber: 61,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"typewriter\",\n                        children: [\n                            \"I'm a \",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"typewriter-text\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\Down\\\\react-app\\\\portfolio\\\\components\\\\basic-information.tsx\",\n                                lineNumber: 65,\n                                columnNumber: 17\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                htmlFor: \"\",\n                                children: \"|\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\Down\\\\react-app\\\\portfolio\\\\components\\\\basic-information.tsx\",\n                                lineNumber: 66,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: \"후회가 없도록 최선을 다하자\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\Down\\\\react-app\\\\portfolio\\\\components\\\\basic-information.tsx\",\n                                lineNumber: 67,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"social-icons\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                        href: \"https://velog.io/@9511dasol/posts\",\n                                        target: \"_blank\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"i\", {\n                                            className: \"bx bx-bold bx-sm\"\n                                        }, void 0, false, {\n                                            fileName: \"D:\\\\Down\\\\react-app\\\\portfolio\\\\components\\\\basic-information.tsx\",\n                                            lineNumber: 70,\n                                            columnNumber: 15\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\Down\\\\react-app\\\\portfolio\\\\components\\\\basic-information.tsx\",\n                                        lineNumber: 69,\n                                        columnNumber: 13\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                        href: \"https://github.com/9511dasol\",\n                                        target: \"_blank\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"i\", {\n                                            className: \"bx bxl-github\"\n                                        }, void 0, false, {\n                                            fileName: \"D:\\\\Down\\\\react-app\\\\portfolio\\\\components\\\\basic-information.tsx\",\n                                            lineNumber: 73,\n                                            columnNumber: 15\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\Down\\\\react-app\\\\portfolio\\\\components\\\\basic-information.tsx\",\n                                        lineNumber: 72,\n                                        columnNumber: 13\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                        href: \"https://www.instagram.com/lu_daso\",\n                                        target: \"_blank\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"i\", {\n                                            className: \"bx bxl-instagram\"\n                                        }, void 0, false, {\n                                            fileName: \"D:\\\\Down\\\\react-app\\\\portfolio\\\\components\\\\basic-information.tsx\",\n                                            lineNumber: 76,\n                                            columnNumber: 15\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\Down\\\\react-app\\\\portfolio\\\\components\\\\basic-information.tsx\",\n                                        lineNumber: 75,\n                                        columnNumber: 13\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"D:\\\\Down\\\\react-app\\\\portfolio\\\\components\\\\basic-information.tsx\",\n                                lineNumber: 68,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\Down\\\\react-app\\\\portfolio\\\\components\\\\basic-information.tsx\",\n                        lineNumber: 64,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\Down\\\\react-app\\\\portfolio\\\\components\\\\basic-information.tsx\",\n                lineNumber: 60,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\Down\\\\react-app\\\\portfolio\\\\components\\\\basic-information.tsx\",\n        lineNumber: 56,\n        columnNumber: 5\n    }, this);\n}\n_s(BaInfo, \"OD7bBpZva5O2jO+Puf00hKivP7c=\");\n_c = BaInfo;\nvar _c;\n$RefreshReg$(_c, \"BaInfo\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvYmFzaWMtaW5mb3JtYXRpb24udHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUErQjtBQUNHO0FBQ0w7QUFDMEI7QUFDeEMsU0FBU0c7O0lBQ3RCSCxnREFBU0EsQ0FBQztRQUNSLE1BQU1JLFFBQVE7WUFBQztZQUFVO1lBQVU7U0FBUztRQUM1QyxNQUFNQyxRQUFRO1FBQ2QsTUFBTUMsZUFBZUMsU0FBU0MsYUFBYSxDQUN6QztRQUdGLElBQUlDLFlBQVk7UUFDaEIsSUFBSUMsaUJBQWlCO1FBQ3JCLElBQUlDLFNBQVM7UUFFYixTQUFTQztZQUNQLElBQUlELFFBQVE7Z0JBQ1YsSUFBSUQsaUJBQWlCTixLQUFLLENBQUNLLFVBQVUsQ0FBQ0ksTUFBTSxFQUFFO29CQUM1Q1AsYUFBYVEsV0FBVyxHQUFHVixLQUFLLENBQUNLLFVBQVUsQ0FBQ00sU0FBUyxDQUNuRCxHQUNBTCxpQkFBaUI7b0JBRW5CQTtvQkFDQU0sV0FBV0osWUFBWVA7Z0JBQ3pCLE9BQU87b0JBQ0xNLFNBQVM7b0JBQ1RLLFdBQVdDLFdBQVc7Z0JBQ3hCO1lBQ0Y7UUFDRjtRQUVBLFNBQVNBO1lBQ1AsSUFBSSxDQUFDTixRQUFRO2dCQUNYLElBQUlELGlCQUFpQixHQUFHO29CQUN0QkosYUFBYVEsV0FBVyxHQUFHVixLQUFLLENBQUNLLFVBQVUsQ0FBQ00sU0FBUyxDQUNuRCxHQUNBTCxpQkFBaUI7b0JBRW5CQTtvQkFDQU0sV0FBV0MsV0FBV1o7Z0JBQ3hCLE9BQU87b0JBQ0xNLFNBQVM7b0JBQ1RGLFlBQVksQ0FBQ0EsWUFBWSxLQUFLTCxNQUFNUyxNQUFNO29CQUMxQ0csV0FBV0osWUFBWVA7Z0JBQ3pCO1lBQ0Y7UUFDRjtRQUVBLGNBQWM7UUFDZE87SUFFQSx1QkFBdUI7SUFDekIsR0FBRyxFQUFFO0lBQ0wscUJBQ0UsOERBQUNNO1FBQVFDLFdBQVU7OzBCQUNqQiw4REFBQ0M7Z0JBQUlELFdBQVU7MEJBQ2IsNEVBQUNFO29CQUFJQyxLQUFLcEIsK0RBQVNBLENBQUNvQixHQUFHO29CQUFFQyxLQUFJOzs7Ozs7Ozs7OzswQkFFL0IsOERBQUNIO2dCQUFJRCxXQUFVOztrQ0FDYiw4REFBQ0s7OzRCQUFHOzBDQUNJLDhEQUFDQzswQ0FBSzs7Ozs7Ozs7Ozs7O2tDQUVkLDhEQUFDTDt3QkFBSUQsV0FBVTs7NEJBQWE7MENBQ3BCLDhEQUFDTTtnQ0FBS04sV0FBVTs7Ozs7OzBDQUN0Qiw4REFBQ087Z0NBQU1DLFNBQVE7MENBQUc7Ozs7OzswQ0FDbEIsOERBQUNDOzBDQUFFOzs7Ozs7MENBQ0gsOERBQUNSO2dDQUFJRCxXQUFVOztrREFDYiw4REFBQ2xCLGlEQUFJQTt3Q0FBQzRCLE1BQUs7d0NBQW9DQyxRQUFPO2tEQUNwRCw0RUFBQ0M7NENBQUVaLFdBQVU7Ozs7Ozs7Ozs7O2tEQUVmLDhEQUFDbEIsaURBQUlBO3dDQUFDNEIsTUFBSzt3Q0FBK0JDLFFBQU87a0RBQy9DLDRFQUFDQzs0Q0FBRVosV0FBVTs7Ozs7Ozs7Ozs7a0RBRWYsOERBQUNsQixpREFBSUE7d0NBQUM0QixNQUFLO3dDQUFvQ0MsUUFBTztrREFDcEQsNEVBQUNDOzRDQUFFWixXQUFVOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVUzQjtHQWpGd0JoQjtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL2Jhc2ljLWluZm9ybWF0aW9uLnRzeD9hODgwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBcIi4uL3N0eWxlcy9zZWN0aW9uLmNzc1wiO1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQgeyBteVBpY3R1cmUgfSBmcm9tIFwiLi4vaW5ncmVkaWVudHMvaW5ncmVkaWVudHNcIjtcclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQmFJbmZvKCkge1xyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCB0ZXh0cyA9IFtcIkZFIERldlwiLCBcIkJFIERldlwiLCBcIkZTIERldlwiXTtcclxuICAgIGNvbnN0IHNwZWVkID0gMTAwO1xyXG4gICAgY29uc3QgdGV4dEVsZW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcclxuICAgICAgXCIudHlwZXdyaXRlci10ZXh0XCJcclxuICAgICkgYXMgSFRNTEVsZW1lbnQ7XHJcblxyXG4gICAgbGV0IHRleHRJbmRleCA9IDA7XHJcbiAgICBsZXQgY2hhcmFjdGVySW5kZXggPSAwO1xyXG4gICAgbGV0IHR5cGluZyA9IHRydWU7XHJcblxyXG4gICAgZnVuY3Rpb24gdHlwZVdyaXRlcigpIHtcclxuICAgICAgaWYgKHR5cGluZykge1xyXG4gICAgICAgIGlmIChjaGFyYWN0ZXJJbmRleCA8IHRleHRzW3RleHRJbmRleF0ubGVuZ3RoKSB7XHJcbiAgICAgICAgICB0ZXh0RWxlbWVudHMudGV4dENvbnRlbnQgPSB0ZXh0c1t0ZXh0SW5kZXhdLnN1YnN0cmluZyhcclxuICAgICAgICAgICAgMCxcclxuICAgICAgICAgICAgY2hhcmFjdGVySW5kZXggKyAxXHJcbiAgICAgICAgICApO1xyXG4gICAgICAgICAgY2hhcmFjdGVySW5kZXgrKztcclxuICAgICAgICAgIHNldFRpbWVvdXQodHlwZVdyaXRlciwgc3BlZWQpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICB0eXBpbmcgPSBmYWxzZTtcclxuICAgICAgICAgIHNldFRpbWVvdXQoZXJhc2VUZXh0LCAxMDAwKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBlcmFzZVRleHQoKSB7XHJcbiAgICAgIGlmICghdHlwaW5nKSB7XHJcbiAgICAgICAgaWYgKGNoYXJhY3RlckluZGV4ID4gMCkge1xyXG4gICAgICAgICAgdGV4dEVsZW1lbnRzLnRleHRDb250ZW50ID0gdGV4dHNbdGV4dEluZGV4XS5zdWJzdHJpbmcoXHJcbiAgICAgICAgICAgIDAsXHJcbiAgICAgICAgICAgIGNoYXJhY3RlckluZGV4IC0gMVxyXG4gICAgICAgICAgKTtcclxuICAgICAgICAgIGNoYXJhY3RlckluZGV4LS07XHJcbiAgICAgICAgICBzZXRUaW1lb3V0KGVyYXNlVGV4dCwgc3BlZWQpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICB0eXBpbmcgPSB0cnVlO1xyXG4gICAgICAgICAgdGV4dEluZGV4ID0gKHRleHRJbmRleCArIDEpICUgdGV4dHMubGVuZ3RoO1xyXG4gICAgICAgICAgc2V0VGltZW91dCh0eXBlV3JpdGVyLCBzcGVlZCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8g7LSI6riwIOyVoOuLiOuplOydtOyFmCDsi5zsnpFcclxuICAgIHR5cGVXcml0ZXIoKTtcclxuXHJcbiAgICAvLyDsu7Ttj6zrhIztirgg7Ja466eI7Jq07Yq4IOyLnCDslaDri4jrqZTsnbTshZgg7KCV7KeAXHJcbiAgfSwgW10pO1xyXG4gIHJldHVybiAoXHJcbiAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJob21lXCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaG9tZS1pbWdcIj5cclxuICAgICAgICA8aW1nIHNyYz17bXlQaWN0dXJlLnNyY30gYWx0PVwiXCIgLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaG9tZS1jb250ZW50XCI+XHJcbiAgICAgICAgPGgxPlxyXG4gICAgICAgICAg7JWI64WV7ZWY7IS47JqUIDxzcGFuPu2VnOuLpOyGlCDsnoXri4jri6QuPC9zcGFuPlxyXG4gICAgICAgIDwvaDE+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0eXBld3JpdGVyXCI+XHJcbiAgICAgICAgICBJJ20gYSA8c3BhbiBjbGFzc05hbWU9XCJ0eXBld3JpdGVyLXRleHRcIj48L3NwYW4+XHJcbiAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cIlwiPnw8L2xhYmVsPlxyXG4gICAgICAgICAgPHA+7ZuE7ZqM6rCAIOyXhuuPhOuhnSDstZzshKDsnYQg64uk7ZWY7J6QPC9wPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzb2NpYWwtaWNvbnNcIj5cclxuICAgICAgICAgICAgPExpbmsgaHJlZj1cImh0dHBzOi8vdmVsb2cuaW8vQDk1MTFkYXNvbC9wb3N0c1wiIHRhcmdldD1cIl9ibGFua1wiPlxyXG4gICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImJ4IGJ4LWJvbGQgYngtc21cIiAvPlxyXG4gICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgIDxMaW5rIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vOTUxMWRhc29sXCIgdGFyZ2V0PVwiX2JsYW5rXCI+XHJcbiAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiYnggYnhsLWdpdGh1YlwiIC8+XHJcbiAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgPExpbmsgaHJlZj1cImh0dHBzOi8vd3d3Lmluc3RhZ3JhbS5jb20vbHVfZGFzb1wiIHRhcmdldD1cIl9ibGFua1wiPlxyXG4gICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImJ4IGJ4bC1pbnN0YWdyYW1cIiAvPlxyXG4gICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIHsvKiA8TGluayBocmVmPVwiI1wiIGNsYXNzTmFtZT1cImJ0blwiPlxyXG4gICAgICAgICAgICBIaXJlIE1lXHJcbiAgICAgICAgICA8L0xpbms+ICovfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvc2VjdGlvbj5cclxuICApO1xyXG59XHJcbiJdLCJuYW1lcyI6WyJ1c2VFZmZlY3QiLCJMaW5rIiwibXlQaWN0dXJlIiwiQmFJbmZvIiwidGV4dHMiLCJzcGVlZCIsInRleHRFbGVtZW50cyIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsInRleHRJbmRleCIsImNoYXJhY3RlckluZGV4IiwidHlwaW5nIiwidHlwZVdyaXRlciIsImxlbmd0aCIsInRleHRDb250ZW50Iiwic3Vic3RyaW5nIiwic2V0VGltZW91dCIsImVyYXNlVGV4dCIsInNlY3Rpb24iLCJjbGFzc05hbWUiLCJkaXYiLCJpbWciLCJzcmMiLCJhbHQiLCJoMSIsInNwYW4iLCJsYWJlbCIsImh0bWxGb3IiLCJwIiwiaHJlZiIsInRhcmdldCIsImkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/basic-information.tsx\n"));

/***/ })

});