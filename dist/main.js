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

eval("(function () {\n    var openBtn = document.querySelector('.openBtn');\n    var closesBtn = document.querySelectorAll('.js-btn-close');\n    var modalWrapper = document.querySelector('.modal-section');\n    var modalContent = document.querySelector('.modal-content');\n    var initState = false;\n    var props = {\n        modalWrapper: modalWrapper,\n        modal: modalContent,\n        validClass: \"js-isInValid\",\n        fadeInClass: \"js-fadeIn\"\n    };\n    var updateState = function (params) {\n        console.log(params.modal);\n        params.modalWrapper.classList.toggle(params.validClass, params.state);\n        params.modal.classList.toggle(params.fadeInClass, params.state);\n    };\n    modalContent.addEventListener('click', function (event) { return event.stopPropagation(); });\n    openBtn.addEventListener('click', function () { return updateState({\n        modalWrapper: props.modalWrapper,\n        validClass: props.validClass,\n        modal: props.modal,\n        fadeInClass: props.fadeInClass,\n        state: !initState,\n    }); });\n    closesBtn.forEach(function (closeBtn) {\n        closeBtn.addEventListener('click', function () { return updateState({\n            modalWrapper: props.modalWrapper,\n            validClass: props.validClass,\n            modal: props.modal,\n            fadeInClass: props.fadeInClass,\n            state: initState,\n        }); });\n    });\n})();\n\n\n//# sourceURL=webpack://ts-modify-modal/./src/index.ts?");

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