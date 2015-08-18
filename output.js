module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	var express = __webpack_require__(1);
	var bodyParser = __webpack_require__(2);
	var config = __webpack_require__(3);
	var component = __webpack_require__(4);

	var server = express();
	var port = 3000;

	server.set('env', 'development');
	server.enable('trust proxy');
	server.disable('x-powered-by');

	server.use(bodyParser.json());

	server.listen(port, function() {
	    console.info('Express server listening on port: ' + port);
	    console.log('whatsup', config.configuration);
	});



/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = require("express");

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = require("body-parser");

/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = require("./config/server-config");

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var React = __webpack_require__(5);

	var MyComponent = React.createClass({
	    displayName: 'MyComponent',

	    mixins: [React.addons.LinkedStateMixin],
	    render: function render() {
	        return React.createElement('div', null);
	    }

	});

	module.exports = MyComponent;

/***/ },
/* 5 */
/***/ function(module, exports) {

	module.exports = require("react/addons");

/***/ }
/******/ ]);