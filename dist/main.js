/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ (() => {

eval("(function () {\n    var openBtn = document.querySelector('.openBtn');\n    var closersBtn = document.querySelectorAll('.js-btn-close');\n    var modalWrapper = document.querySelector('.modal-section');\n    var modalContent = document.querySelector('.modal-content');\n    var ValidClass = {\n        isInValid: \"js-isInValid\",\n    };\n    var init = false;\n    var updateState = function (params) {\n        params.element.classList.toggle(params.validClass, params.state);\n    };\n    var showModalProps = {\n        element: modalWrapper,\n        validClass: ValidClass.isInValid,\n        state: init\n    };\n    var closeModalProps = {\n        element: modalWrapper,\n        validClass: ValidClass.isInValid,\n        state: !init\n    };\n    modalContent.onclick = function (event) {\n        event.stopPropagation();\n    };\n    openBtn.addEventListener('click', function () {\n        updateState(showModalProps);\n    });\n    closersBtn.forEach(function (closeBtn) {\n        closeBtn.addEventListener('click', function () {\n            updateState(closeModalProps);\n        });\n    });\n})();\n\n\n//# sourceURL=webpack://ts-modify-modal/./src/index.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.ts"]();
/******/ 	
/******/ })()
;