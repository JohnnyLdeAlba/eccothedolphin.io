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

/***/ "./src/com/Menu/DialogMenu.tsx":
/*!*************************************!*\
  !*** ./src/com/Menu/DialogMenu.tsx ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"DialogMenu\": function() { return /* binding */ DialogMenu; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _com_Menu_Menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../com/Menu/Menu */ \"./src/com/Menu/Menu.tsx\");\n/* harmony import */ var _com_Backdrop__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../com/Backdrop */ \"./src/com/Backdrop.tsx\");\n/* harmony import */ var _com_Card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../com/Card */ \"./src/com/Card.tsx\");\n/* harmony import */ var _com_Request_RequestStatic__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../com/Request/RequestStatic */ \"./src/com/Request/RequestStatic.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nconst DialogMenu = (param)=>{\n    let { show , onClose  } = param;\n    _s();\n    const request = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_com_Request_RequestStatic__WEBPACK_IMPORTED_MODULE_5__.RequestStaticContext);\n    const _onClose = ()=>{\n        request.setParentHash(\"home\");\n        onClose();\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_com_Backdrop__WEBPACK_IMPORTED_MODULE_3__.Backdrop, {\n        show: show,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"\\n        mx-0 my-0 sm:mx-auto sm:my-8\\n        w-full sm:w-[500px]\\n        flex-1 flex flex-col\\n        overflow-y-auto\\n        h-full\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_com_Card__WEBPACK_IMPORTED_MODULE_4__.Card, {\n                title: request.parentNode.name,\n                onClose: _onClose,\n                color: \"solid\",\n                className: \"h-full\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_com_Menu_Menu__WEBPACK_IMPORTED_MODULE_2__.Menu, {\n                    toolbarPosition: \"top\",\n                    forceDetailsVisible: true,\n                    page: request.page == -1 ? -1 : request.page + 1,\n                    onPrevPage: request.page > 0 ? ()=>request.onPrevPage() : null,\n                    onNextPage: request.nextPage ? ()=>request.onNextPage() : null,\n                    galleryItems: request.getGalleryItems(),\n                    onGoBack: request.parentNode.parentId > 0 ? ()=>request.onGoBack() : null,\n                    onClose: _onClose\n                }, void 0, false, {\n                    fileName: \"/var/www/eccothedolphin.io/src/com/Menu/DialogMenu.tsx\",\n                    lineNumber: 33,\n                    columnNumber: 7\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/var/www/eccothedolphin.io/src/com/Menu/DialogMenu.tsx\",\n                lineNumber: 28,\n                columnNumber: 7\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"/var/www/eccothedolphin.io/src/com/Menu/DialogMenu.tsx\",\n            lineNumber: 22,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/var/www/eccothedolphin.io/src/com/Menu/DialogMenu.tsx\",\n        lineNumber: 21,\n        columnNumber: 5\n    }, undefined);\n};\n_s(DialogMenu, \"7tYY6qtRf6CRBenkxaLK8MSObzE=\");\n_c = DialogMenu;\n/* harmony default export */ __webpack_exports__[\"default\"] = (DialogMenu);\nvar _c;\n$RefreshReg$(_c, \"DialogMenu\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tL01lbnUvRGlhbG9nTWVudS50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBNkM7QUFFRjtBQUNHO0FBQ1I7QUFFZ0M7QUFHL0QsTUFBTUssYUFBYSxTQUF1QjtRQUF0QixFQUFFQyxLQUFJLEVBQUVDLFFBQU8sRUFBRTs7SUFFMUMsTUFBTUMsVUFBVVIsaURBQVVBLENBQUNJLDRFQUFvQkE7SUFFL0MsTUFBTUssV0FBVyxJQUFNO1FBRXJCRCxRQUFRRSxhQUFhLENBQUM7UUFDdEJIO0lBQ0Y7SUFFQSxxQkFDRSw4REFBQ0wsbURBQVFBO1FBQUNJLE1BQU9BO2tCQUNmLDRFQUFDSztZQUFJQyxXQUFZO3NCQU1qQiw0RUFBQ1QsMkNBQUlBO2dCQUNIVSxPQUFRTCxRQUFRTSxVQUFVLENBQUNDLElBQUk7Z0JBQy9CUixTQUFVRTtnQkFDVk8sT0FBTTtnQkFDTkosV0FBWTswQkFDZCw0RUFBQ1gsZ0RBQUlBO29CQUNIZ0IsaUJBQWdCO29CQUNoQkMscUJBQXNCLElBQUk7b0JBQzFCQyxNQUFPWCxRQUFRVyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSVgsUUFBUVcsSUFBSSxHQUFHLENBQUM7b0JBRWpEQyxZQUFhWixRQUFRVyxJQUFJLEdBQUcsSUFBSSxJQUFNWCxRQUFRWSxVQUFVLEtBQUssSUFBSTtvQkFDakVDLFlBQWFiLFFBQVFjLFFBQVEsR0FBRyxJQUFNZCxRQUFRYSxVQUFVLEtBQUssSUFBSTtvQkFFakVFLGNBQWVmLFFBQVFnQixlQUFlO29CQUN0Q0MsVUFBV2pCLFFBQVFNLFVBQVUsQ0FBQ1ksUUFBUSxHQUFHLElBQUksSUFBTWxCLFFBQVFpQixRQUFRLEtBQUssSUFBSTtvQkFDNUVsQixTQUFVRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTWxCLEVBQUM7R0F2Q1lKO0tBQUFBO0FBeUNiLCtEQUFlQSxVQUFVQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb20vTWVudS9EaWFsb2dNZW51LnRzeD9lODY1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUNvbnRleHQsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5cbmltcG9ydCB7IE1lbnUgfSBmcm9tIFwiLi4vLi4vY29tL01lbnUvTWVudVwiO1xuaW1wb3J0IHsgQmFja2Ryb3AgfSBmcm9tIFwiLi4vLi4vY29tL0JhY2tkcm9wXCI7XG5pbXBvcnQgeyBDYXJkIH0gZnJvbSBcIi4uLy4uL2NvbS9DYXJkXCI7XG5cbmltcG9ydCB7IFJlcXVlc3RTdGF0aWNDb250ZXh0IH0gZnJvbSBcIi4uLy4uL2NvbS9SZXF1ZXN0L1JlcXVlc3RTdGF0aWNcIlxuaW1wb3J0IHsgVGhlbWVDb250ZXh0IH0gZnJvbSBcIi4uLy4uL2NvbS90aGVtZVwiO1xuXG5leHBvcnQgY29uc3QgRGlhbG9nTWVudSA9ICh7IHNob3csIG9uQ2xvc2UgfSkgPT4ge1xuXG4gIGNvbnN0IHJlcXVlc3QgPSB1c2VDb250ZXh0KFJlcXVlc3RTdGF0aWNDb250ZXh0KTtcblxuICBjb25zdCBfb25DbG9zZSA9ICgpID0+IHtcblxuICAgIHJlcXVlc3Quc2V0UGFyZW50SGFzaChcImhvbWVcIik7XG4gICAgb25DbG9zZSgpO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8QmFja2Ryb3Agc2hvdz17IHNob3cgfT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtgXG4gICAgICAgIG14LTAgbXktMCBzbTpteC1hdXRvIHNtOm15LThcbiAgICAgICAgdy1mdWxsIHNtOnctWzUwMHB4XVxuICAgICAgICBmbGV4LTEgZmxleCBmbGV4LWNvbFxuICAgICAgICBvdmVyZmxvdy15LWF1dG9cbiAgICAgICAgaC1mdWxsYH0+XG4gICAgICA8Q2FyZFxuICAgICAgICB0aXRsZT17IHJlcXVlc3QucGFyZW50Tm9kZS5uYW1lIH1cbiAgICAgICAgb25DbG9zZT17IF9vbkNsb3NlIH1cbiAgICAgICAgY29sb3I9XCJzb2xpZFwiXG4gICAgICAgIGNsYXNzTmFtZT17YGgtZnVsbGB9PlxuICAgICAgPE1lbnVcbiAgICAgICAgdG9vbGJhclBvc2l0aW9uPVwidG9wXCJcbiAgICAgICAgZm9yY2VEZXRhaWxzVmlzaWJsZT17IHRydWUgfVxuICAgICAgICBwYWdlPXsgcmVxdWVzdC5wYWdlID09IC0xID8gLTEgOiByZXF1ZXN0LnBhZ2UgKyAxIH1cblxuICAgICAgICBvblByZXZQYWdlPXsgcmVxdWVzdC5wYWdlID4gMCA/ICgpID0+IHJlcXVlc3Qub25QcmV2UGFnZSgpIDogbnVsbCB9XG4gICAgICAgIG9uTmV4dFBhZ2U9eyByZXF1ZXN0Lm5leHRQYWdlID8gKCkgPT4gcmVxdWVzdC5vbk5leHRQYWdlKCkgOiBudWxsIH1cblxuICAgICAgICBnYWxsZXJ5SXRlbXM9eyByZXF1ZXN0LmdldEdhbGxlcnlJdGVtcygpIH1cbiAgICAgICAgb25Hb0JhY2s9eyByZXF1ZXN0LnBhcmVudE5vZGUucGFyZW50SWQgPiAwID8gKCkgPT4gcmVxdWVzdC5vbkdvQmFjaygpIDogbnVsbCB9XG4gICAgICAgIG9uQ2xvc2U9eyBfb25DbG9zZSB9XG4gICAgICAvPlxuICAgICAgPC9DYXJkPlxuICAgICAgPC9kaXY+XG4gICAgPC9CYWNrZHJvcD5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgRGlhbG9nTWVudTtcbiJdLCJuYW1lcyI6WyJ1c2VDb250ZXh0IiwiTWVudSIsIkJhY2tkcm9wIiwiQ2FyZCIsIlJlcXVlc3RTdGF0aWNDb250ZXh0IiwiRGlhbG9nTWVudSIsInNob3ciLCJvbkNsb3NlIiwicmVxdWVzdCIsIl9vbkNsb3NlIiwic2V0UGFyZW50SGFzaCIsImRpdiIsImNsYXNzTmFtZSIsInRpdGxlIiwicGFyZW50Tm9kZSIsIm5hbWUiLCJjb2xvciIsInRvb2xiYXJQb3NpdGlvbiIsImZvcmNlRGV0YWlsc1Zpc2libGUiLCJwYWdlIiwib25QcmV2UGFnZSIsIm9uTmV4dFBhZ2UiLCJuZXh0UGFnZSIsImdhbGxlcnlJdGVtcyIsImdldEdhbGxlcnlJdGVtcyIsIm9uR29CYWNrIiwicGFyZW50SWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/com/Menu/DialogMenu.tsx\n"));

/***/ })

});