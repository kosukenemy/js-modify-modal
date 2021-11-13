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

eval("(function () {\n    var openButton = document.querySelector('.openButton');\n    var closeButtons = document.querySelectorAll('.js-btn-close');\n    var modalWrapper = document.querySelector('.modal-section');\n    var modalContent = document.querySelector('.modal-content');\n    var initState = false;\n    var props = {\n        modalWrapper: modalWrapper,\n        validClass: \"js-isInValid\",\n        modal: modalContent,\n        fadeInClass: \"js-fadeIn\",\n        state: initState\n    };\n    var updateToggleClass = function (params) {\n        params.modalWrapper.classList.toggle(params.validClass, params.state);\n        params.modal.classList.toggle(params.fadeInClass, params.state);\n    };\n    modalContent.addEventListener('click', function (event) { return event.stopPropagation(); });\n    openButton.addEventListener('click', function () {\n        props.state = true;\n        updateToggleClass(props);\n    });\n    closeButtons.forEach(function (closeButton) {\n        closeButton.addEventListener('click', function () {\n            props.state = false;\n            updateToggleClass(props);\n        });\n    });\n})();\n\n\n//# sourceURL=webpack://ts-modify-modal/./src/index.ts?");

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