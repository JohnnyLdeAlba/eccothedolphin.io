"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/ecco-text-generator",{

/***/ "./src/com/Menu/Toolbar.tsx":
/*!**********************************!*\
  !*** ./src/com/Menu/Toolbar.tsx ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Toolbar\": function() { return /* binding */ Toolbar; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _mui_icons_material_ArrowBack__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/icons-material/ArrowBack */ \"./node_modules/@mui/icons-material/ArrowBack.js\");\n/* harmony import */ var _mui_icons_material_Undo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/icons-material/Undo */ \"./node_modules/@mui/icons-material/Undo.js\");\n/* harmony import */ var _mui_icons_material_RemoveCircle__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/icons-material/RemoveCircle */ \"./node_modules/@mui/icons-material/RemoveCircle.js\");\n/* harmony import */ var _mui_icons_material_ArtTrack__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/icons-material/ArtTrack */ \"./node_modules/@mui/icons-material/ArtTrack.js\");\n/* harmony import */ var _mui_icons_material_VisibilityOff__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui/icons-material/VisibilityOff */ \"./node_modules/@mui/icons-material/VisibilityOff.js\");\n/* harmony import */ var _mui_icons_material_ArrowLeft__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @mui/icons-material/ArrowLeft */ \"./node_modules/@mui/icons-material/ArrowLeft.js\");\n/* harmony import */ var _mui_icons_material_ArrowRight__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @mui/icons-material/ArrowRight */ \"./node_modules/@mui/icons-material/ArrowRight.js\");\n/* harmony import */ var _MicroButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../MicroButton */ \"./src/com/MicroButton.tsx\");\n/* harmony import */ var _theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../theme */ \"./src/com/theme.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\nconst Toolbar = (param)=>{\n    let { page =0 , showDetailsClosed =false , onGoBack , onUnselect , onRemoveSelected , onShowDetails , onToggleHidden , onNextPage , onPrevPage  } = param;\n    _s();\n    const theme = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_theme__WEBPACK_IMPORTED_MODULE_3__.ThemeContext);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"\\n      flex flex-row px-4 py-2\\n    \",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_MicroButton__WEBPACK_IMPORTED_MODULE_2__.MicroTipButton, {\n                disabled: onGoBack ? false : true,\n                tip: onGoBack ? \"Go Back\" : \"\",\n                icon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: !onUnselect && !onRemoveSelected && !onShowDetails && !onToggleHidden ? \"\" : \"ml-1\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_icons_material_ArrowBack__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                        fontSize: \"small\"\n                    }, void 0, false, void 0, void 0)\n                }, void 0, false, void 0, void 0),\n                rounded: !onUnselect && !onRemoveSelected && !onShowDetails && !onToggleHidden ? \"full\" : \"left\",\n                onClick: onGoBack\n            }, void 0, false, {\n                fileName: \"/var/www/eccothedolphin.io/src/com/Menu/Toolbar.tsx\",\n                lineNumber: 35,\n                columnNumber: 7\n            }, undefined),\n            onUnselect ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_MicroButton__WEBPACK_IMPORTED_MODULE_2__.MicroTipButton, {\n                icon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"mr-2\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_icons_material_Undo__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                        fontSize: \"small\"\n                    }, void 0, false, void 0, void 0)\n                }, void 0, false, void 0, void 0),\n                title: \"Unselect\",\n                tip: \"Unselect Items\",\n                onClick: onUnselect\n            }, void 0, false, {\n                fileName: \"/var/www/eccothedolphin.io/src/com/Menu/Toolbar.tsx\",\n                lineNumber: 42,\n                columnNumber: 22\n            }, undefined) : null,\n            onRemoveSelected ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_MicroButton__WEBPACK_IMPORTED_MODULE_2__.MicroTipButton, {\n                icon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"mr-2\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_icons_material_RemoveCircle__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                        fontSize: \"small\"\n                    }, void 0, false, void 0, void 0)\n                }, void 0, false, void 0, void 0),\n                title: \"Remove\",\n                tip: \"Remove Selected Items\",\n                onClick: onRemoveSelected\n            }, void 0, false, {\n                fileName: \"/var/www/eccothedolphin.io/src/com/Menu/Toolbar.tsx\",\n                lineNumber: 48,\n                columnNumber: 28\n            }, undefined) : null,\n            onShowDetails ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_MicroButton__WEBPACK_IMPORTED_MODULE_2__.MicroTipButton, {\n                icon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"\".concat(onToggleHidden ? \"\" : \"mr-1\"),\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_icons_material_ArtTrack__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                        fontSize: \"small\"\n                    }, void 0, false, void 0, void 0)\n                }, void 0, false, void 0, void 0),\n                tip: \"Show Details\",\n                rounded: onToggleHidden ? \"\" : \"right\",\n                closed: showDetailsClosed,\n                onClick: onShowDetails\n            }, void 0, false, {\n                fileName: \"/var/www/eccothedolphin.io/src/com/Menu/Toolbar.tsx\",\n                lineNumber: 53,\n                columnNumber: 25\n            }, undefined) : null,\n            onToggleHidden ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_MicroButton__WEBPACK_IMPORTED_MODULE_2__.MicroTipButton, {\n                icon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"mr-2\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_icons_material_VisibilityOff__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                        fontSize: \"small\"\n                    }, void 0, false, void 0, void 0)\n                }, void 0, false, void 0, void 0),\n                rounded: \"right\",\n                tip: \"Toggle Hidden\",\n                onClick: onToggleHidden\n            }, void 0, false, {\n                fileName: \"/var/www/eccothedolphin.io/src/com/Menu/Toolbar.tsx\",\n                lineNumber: 60,\n                columnNumber: 26\n            }, undefined) : null,\n            page > 0 ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex-1 flex flex-row justify-end\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_MicroButton__WEBPACK_IMPORTED_MODULE_2__.MicroTipButton, {\n                        disabled: onPrevPage ? false : true,\n                        tip: onPrevPage ? \"Previous Page\" : \"\",\n                        icon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"ml-1\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_icons_material_ArrowLeft__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n                                fontSize: \"small\"\n                            }, void 0, false, void 0, void 0)\n                        }, void 0, false, void 0, void 0),\n                        rounded: \"left\",\n                        onClick: onPrevPage\n                    }, void 0, false, {\n                        fileName: \"/var/www/eccothedolphin.io/src/com/Menu/Toolbar.tsx\",\n                        lineNumber: 68,\n                        columnNumber: 11\n                    }, undefined),\n                    page == -1 ? null : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_MicroButton__WEBPACK_IMPORTED_MODULE_2__.MicroButton, {\n                        title: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"px-2\",\n                            children: page\n                        }, void 0, false, void 0, void 0)\n                    }, void 0, false, {\n                        fileName: \"/var/www/eccothedolphin.io/src/com/Menu/Toolbar.tsx\",\n                        lineNumber: 75,\n                        columnNumber: 33\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_MicroButton__WEBPACK_IMPORTED_MODULE_2__.MicroTipButton, {\n                        disabled: onNextPage ? false : true,\n                        tip: onNextPage ? \"Next Page\" : \"\",\n                        icon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"mr-1\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_icons_material_ArrowRight__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n                                fontSize: \"small\"\n                            }, void 0, false, void 0, void 0)\n                        }, void 0, false, void 0, void 0),\n                        rounded: \"right\",\n                        onClick: onNextPage\n                    }, void 0, false, {\n                        fileName: \"/var/www/eccothedolphin.io/src/com/Menu/Toolbar.tsx\",\n                        lineNumber: 77,\n                        columnNumber: 11\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/var/www/eccothedolphin.io/src/com/Menu/Toolbar.tsx\",\n                lineNumber: 66,\n                columnNumber: 9\n            }, undefined) : null\n        ]\n    }, void 0, true, {\n        fileName: \"/var/www/eccothedolphin.io/src/com/Menu/Toolbar.tsx\",\n        lineNumber: 31,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Toolbar, \"+C1P7ukOg/azcV4AZ819oyezFOE=\");\n_c = Toolbar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Toolbar);\nvar _c;\n$RefreshReg$(_c, \"Toolbar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFTOzs7d0JBQ3hEQyxTQUFRO3dCQUNSQyxTQUFVVjs7Ozs7Ozs7Ozs7NEJBRUwsSUFBSTs7Ozs7OztBQUlyQixFQUFDO0dBeEVZUjtLQUFBQTtBQTBFYiwrREFBZUEsT0FBT0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tL01lbnUvVG9vbGJhci50c3g/MGZhYiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VDb250ZXh0IH0gZnJvbSBcInJlYWN0XCI7XG5cbmltcG9ydCBBcnJvd0JhY2tJY29uIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvQXJyb3dCYWNrJztcbmltcG9ydCBVbmRvSWNvbiBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL1VuZG8nO1xuaW1wb3J0IFJlbW92ZUNpcmNsZUljb24gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9SZW1vdmVDaXJjbGUnO1xuaW1wb3J0IEFydFRyYWNrSWNvbiBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL0FydFRyYWNrJztcbmltcG9ydCBWaXNpYmlsaXR5T2ZmSWNvbiBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL1Zpc2liaWxpdHlPZmYnO1xuaW1wb3J0IEFycm93TGVmdEljb24gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9BcnJvd0xlZnQnO1xuaW1wb3J0IEFycm93UmlnaHRJY29uIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvQXJyb3dSaWdodCc7XG5cbmltcG9ydCBUb29sdGlwIGZyb20gJ0BtdWkvbWF0ZXJpYWwvVG9vbHRpcCc7XG5cbmltcG9ydCB7IE1pY3JvQnV0dG9uLCBNaWNyb1RpcEJ1dHRvbiB9IGZyb20gXCIuLi9NaWNyb0J1dHRvblwiOyBcbmltcG9ydCB7IFRoZW1lQ29udGV4dCB9IGZyb20gXCIuLi90aGVtZVwiO1xuXG5leHBvcnQgY29uc3QgVG9vbGJhciA9ICh7XG4gIHBhZ2UgPSAwLFxuICBzaG93RGV0YWlsc0Nsb3NlZCA9IGZhbHNlLFxuICBvbkdvQmFjayxcbiAgb25VbnNlbGVjdCxcbiAgb25SZW1vdmVTZWxlY3RlZCxcbiAgb25TaG93RGV0YWlscyxcbiAgb25Ub2dnbGVIaWRkZW4sXG4gIG9uTmV4dFBhZ2UsXG4gIG9uUHJldlBhZ2Vcbn0pID0+IHtcblxuICBjb25zdCB0aGVtZSA9IHVzZUNvbnRleHQoVGhlbWVDb250ZXh0KTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtgXG4gICAgICBmbGV4IGZsZXgtcm93IHB4LTQgcHktMlxuICAgIGB9PlxuXG4gICAgICA8TWljcm9UaXBCdXR0b25cbiAgICAgICAgZGlzYWJsZWQ9eyBvbkdvQmFjayA/IGZhbHNlIDogdHJ1ZSB9XG4gICAgICAgIHRpcD17IG9uR29CYWNrID8gXCJHbyBCYWNrXCIgOiAnJyB9XG4gICAgICAgIGljb249eyA8ZGl2IGNsYXNzTmFtZT17ICFvblVuc2VsZWN0ICYmICFvblJlbW92ZVNlbGVjdGVkICYmICFvblNob3dEZXRhaWxzICYmICFvblRvZ2dsZUhpZGRlbiA/ICcnIDogXCJtbC0xXCIgfT48QXJyb3dCYWNrSWNvbiBmb250U2l6ZT1cInNtYWxsXCIgLz48L2Rpdj4gfVxuICAgICAgICByb3VuZGVkPXsgIW9uVW5zZWxlY3QgJiYgIW9uUmVtb3ZlU2VsZWN0ZWQgJiYgIW9uU2hvd0RldGFpbHMgJiYgIW9uVG9nZ2xlSGlkZGVuID8gXCJmdWxsXCIgOiBcImxlZnRcIiB9XG4gICAgICAgIG9uQ2xpY2s9eyBvbkdvQmFjayB9IC8+XG5cbiAgICAgIHsgb25VbnNlbGVjdCA/IDxNaWNyb1RpcEJ1dHRvblxuICAgICAgICBpY29uPXsgPGRpdiBjbGFzc05hbWU9e2Btci0yYH0+PFVuZG9JY29uIGZvbnRTaXplPVwic21hbGxcIiAvPjwvZGl2PiB9XG4gICAgICAgIHRpdGxlPVwiVW5zZWxlY3RcIlxuICAgICAgICB0aXA9XCJVbnNlbGVjdCBJdGVtc1wiXG4gICAgICAgIG9uQ2xpY2s9eyBvblVuc2VsZWN0IH0gLz4gOiBudWxsIH1cblxuICAgICAgeyBvblJlbW92ZVNlbGVjdGVkID8gPE1pY3JvVGlwQnV0dG9uXG4gICAgICAgIGljb249eyA8ZGl2IGNsYXNzTmFtZT17YG1yLTJgfT48UmVtb3ZlQ2lyY2xlSWNvbiBmb250U2l6ZT1cInNtYWxsXCIgLz48L2Rpdj4gfVxuICAgICAgICB0aXRsZT1cIlJlbW92ZVwiIHRpcD1cIlJlbW92ZSBTZWxlY3RlZCBJdGVtc1wiXG4gICAgICAgIG9uQ2xpY2s9eyBvblJlbW92ZVNlbGVjdGVkIH0gLz4gOiBudWxsIH1cblxuICAgICAgeyBvblNob3dEZXRhaWxzID8gPE1pY3JvVGlwQnV0dG9uXG4gICAgICAgIGljb249eyA8ZGl2IGNsYXNzTmFtZT17YCR7IG9uVG9nZ2xlSGlkZGVuID8gJycgOiBcIm1yLTFcIiB9YH0+PEFydFRyYWNrSWNvbiBmb250U2l6ZT1cInNtYWxsXCIgLz48L2Rpdj4gfVxuICAgICAgICB0aXA9XCJTaG93IERldGFpbHNcIlxuICAgICAgICByb3VuZGVkPXsgb25Ub2dnbGVIaWRkZW4gPyAnJyA6IFwicmlnaHRcIiB9XG4gICAgICAgIGNsb3NlZD17IHNob3dEZXRhaWxzQ2xvc2VkIH1cbiAgICAgICAgb25DbGljaz17IG9uU2hvd0RldGFpbHMgfSAvPiA6IG51bGwgfVxuXG4gICAgICB7IG9uVG9nZ2xlSGlkZGVuID8gPE1pY3JvVGlwQnV0dG9uXG4gICAgICAgIGljb249eyA8ZGl2IGNsYXNzTmFtZT17YG1yLTJgfT48VmlzaWJpbGl0eU9mZkljb24gZm9udFNpemU9XCJzbWFsbFwiIC8+PC9kaXY+IH1cbiAgICAgICAgcm91bmRlZD1cInJpZ2h0XCIgdGlwPVwiVG9nZ2xlIEhpZGRlblwiXG4gICAgICAgIG9uQ2xpY2s9eyBvblRvZ2dsZUhpZGRlbiB9IC8+IDogbnVsbCB9XG5cbiAgICAgIHsgcGFnZSA+IDAgPyBcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2BmbGV4LTEgZmxleCBmbGV4LXJvdyBqdXN0aWZ5LWVuZGB9PlxuXG4gICAgICAgICAgPE1pY3JvVGlwQnV0dG9uXG4gICAgICAgICAgICBkaXNhYmxlZD17IG9uUHJldlBhZ2UgPyBmYWxzZSA6IHRydWUgfVxuICAgICAgICAgICAgdGlwPXsgb25QcmV2UGFnZSA/IFwiUHJldmlvdXMgUGFnZVwiIDogJycgfVxuICAgICAgICAgICAgaWNvbj17IDxkaXYgY2xhc3NOYW1lPXtgbWwtMWB9PjxBcnJvd0xlZnRJY29uIGZvbnRTaXplPVwic21hbGxcIiAvPjwvZGl2PiB9XG4gICAgICAgICAgICByb3VuZGVkPVwibGVmdFwiIFxuICAgICAgICAgICAgb25DbGljaz17IG9uUHJldlBhZ2UgfSAvPiBcblxuICAgICAgICAgIHsgcGFnZSA9PSAtMSA/IG51bGwgOiA8TWljcm9CdXR0b24gdGl0bGU9eyA8ZGl2IGNsYXNzTmFtZT17YHB4LTJgfT57IHBhZ2UgfTwvZGl2PiB9IC8+IH1cblxuICAgICAgICAgIDxNaWNyb1RpcEJ1dHRvblxuICAgICAgICAgICAgZGlzYWJsZWQ9eyBvbk5leHRQYWdlID8gZmFsc2UgOiB0cnVlIH1cbiAgICAgICAgICAgIHRpcD17IG9uTmV4dFBhZ2UgPyBcIk5leHQgUGFnZVwiIDogJycgfVxuICAgICAgICAgICAgaWNvbj17IDxkaXYgY2xhc3NOYW1lPXtgbXItMWB9PjxBcnJvd1JpZ2h0SWNvbiBmb250U2l6ZT1cInNtYWxsXCIgLz48L2Rpdj4gfVxuICAgICAgICAgICAgcm91bmRlZD1cInJpZ2h0XCIgXG4gICAgICAgICAgICBvbkNsaWNrPXsgb25OZXh0UGFnZSB9IC8+XG5cbiAgICAgICAgPC9kaXY+IDogbnVsbFxuICAgICAgfVxuICAgIDwvZGl2PlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBUb29sYmFyO1xuIl0sIm5hbWVzIjpbInVzZUNvbnRleHQiLCJBcnJvd0JhY2tJY29uIiwiVW5kb0ljb24iLCJSZW1vdmVDaXJjbGVJY29uIiwiQXJ0VHJhY2tJY29uIiwiVmlzaWJpbGl0eU9mZkljb24iLCJBcnJvd0xlZnRJY29uIiwiQXJyb3dSaWdodEljb24iLCJNaWNyb0J1dHRvbiIsIk1pY3JvVGlwQnV0dG9uIiwiVGhlbWVDb250ZXh0IiwiVG9vbGJhciIsInBhZ2UiLCJzaG93RGV0YWlsc0Nsb3NlZCIsIm9uR29CYWNrIiwib25VbnNlbGVjdCIsIm9uUmVtb3ZlU2VsZWN0ZWQiLCJvblNob3dEZXRhaWxzIiwib25Ub2dnbGVIaWRkZW4iLCJvbk5leHRQYWdlIiwib25QcmV2UGFnZSIsInRoZW1lIiwiZGl2IiwiY2xhc3NOYW1lIiwiZGlzYWJsZWQiLCJ0aXAiLCJpY29uIiwiZm9udFNpemUiLCJyb3VuZGVkIiwib25DbGljayIsInRpdGxlIiwiY2xvc2VkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/com/Menu/Toolbar.tsx\n"));

/***/ })

});