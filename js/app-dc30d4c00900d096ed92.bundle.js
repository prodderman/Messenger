webpackJsonp([1],{

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("gp7H");


/***/ }),

/***/ "275T":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("lcwS")();
// imports


// module
exports.push([module.i, ".authorization {\n  display: -ms-flexbox;\n  display: flex;\n  width: 100%;\n  height: 100%;\n  background-color: #eee5df;\n  -ms-flex-pack: center;\n      justify-content: center;\n  -ms-flex-align: center;\n      align-items: center; }\n", ""]);

// exports


/***/ }),

/***/ "6n15":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__view_App__ = __webpack_require__("b9RH");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__view_App__["a"]; });



/***/ }),

/***/ "886V":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__("vCxL");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("1n8/");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_bem_cn__ = __webpack_require__("6QlO");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_bem_cn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_bem_cn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_decko__ = __webpack_require__("4eBB");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_decko___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_decko__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Layout_scss__ = __webpack_require__("wFit");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Layout_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__Layout_scss__);





var MessengerLayout = /** @class */ (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __extends */](MessengerLayout, _super);
    function MessengerLayout(props) {
        var _this = _super.call(this, props) || this;
        _this.b = __WEBPACK_IMPORTED_MODULE_2_bem_cn___default()('messenger');
        _this.resizableContainer = null;
        _this.splitter = null;
        _this.parentContainer = null;
        _this.state = {
            width: props.startWidth !== undefined ? props.startWidth : '25%',
            isPressed: false,
        };
        return _this;
    }
    MessengerLayout.prototype.render = function () {
        var _this = this;
        var b = this.b;
        var width = this.state.width;
        return (__WEBPACK_IMPORTED_MODULE_1_react__["createElement"]("div", { className: b(), ref: function (parentContainer) { _this.parentContainer = parentContainer; } },
            __WEBPACK_IMPORTED_MODULE_1_react__["createElement"]("div", { className: b('users-list')(), style: { width: "" + width }, ref: function (resizableContainer) { _this.resizableContainer = resizableContainer; } }, "users"),
            __WEBPACK_IMPORTED_MODULE_1_react__["createElement"]("div", { onMouseDown: this.startDragging, className: b('splitter')(), ref: function (splitter) { _this.splitter = splitter; } }),
            __WEBPACK_IMPORTED_MODULE_1_react__["createElement"]("div", { className: b('messages')() }, "messages")));
    };
    MessengerLayout.prototype.startDragging = function () {
        document.addEventListener('mouseup', this.stopDragging);
        document.addEventListener('mousemove', this.handleDragging);
        this.setState({ isPressed: true });
    };
    MessengerLayout.prototype.stopDragging = function (event) {
        this.setState({ isPressed: false });
        document.removeEventListener('mouseup', this.stopDragging);
        document.removeEventListener('mousemove', this.handleDragging);
    };
    MessengerLayout.prototype.handleDragging = function (event) {
        if (this.state.isPressed) {
            var parentContainerWidth = this.parentContainer.clientWidth;
            console.log(this.resizableContainer, this.splitter);
            if (event instanceof MouseEvent) {
                var offset = event.clientX * 100 / parentContainerWidth;
                this.setState({ width: offset + "%" });
            }
        }
    };
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __decorate */]([
        __WEBPACK_IMPORTED_MODULE_3_decko__["bind"]
    ], MessengerLayout.prototype, "startDragging", null);
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __decorate */]([
        __WEBPACK_IMPORTED_MODULE_3_decko__["bind"]
    ], MessengerLayout.prototype, "stopDragging", null);
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __decorate */]([
        __WEBPACK_IMPORTED_MODULE_3_decko__["bind"]
    ], MessengerLayout.prototype, "handleDragging", null);
    return MessengerLayout;
}(__WEBPACK_IMPORTED_MODULE_1_react__["PureComponent"]));
/* harmony default export */ __webpack_exports__["a"] = (MessengerLayout);


/***/ }),

/***/ "8aIC":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("lcwS")();
// imports


// module
exports.push([module.i, ".application {\n  height: 100%; }\n", ""]);

// exports


/***/ }),

/***/ "8hhN":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__("vCxL");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("1n8/");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_shared_types_app__ = __webpack_require__("zGGS");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_router_dom__ = __webpack_require__("obMO");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__view_Layout_Layout__ = __webpack_require__("886V");





var MessengerModule = /** @class */ (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __extends */](MessengerModule, _super);
    function MessengerModule() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MessengerModule.prototype.getRoutes = function () {
        return __WEBPACK_IMPORTED_MODULE_1_react__["createElement"](__WEBPACK_IMPORTED_MODULE_3_react_router_dom__["c" /* Route */], { key: "messenger", path: "/messenger", component: __WEBPACK_IMPORTED_MODULE_4__view_Layout_Layout__["a" /* default */] });
    };
    return MessengerModule;
}(__WEBPACK_IMPORTED_MODULE_2_shared_types_app__["a" /* Module */]));
/* harmony default export */ __webpack_exports__["a"] = (MessengerModule);


/***/ }),

/***/ "9Kgn":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return container; });
/* unused harmony export inject */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_inversify__ = __webpack_require__("PR7M");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_inversify___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_inversify__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_inversify_inject_decorators__ = __webpack_require__("zF2A");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_inversify_inject_decorators___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_inversify_inject_decorators__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__iocTypes__ = __webpack_require__("SYo8");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_2__iocTypes__["a"]; });



var container = new __WEBPACK_IMPORTED_MODULE_0_inversify__["Container"]();
var lazyInject = __WEBPACK_IMPORTED_MODULE_1_inversify_inject_decorators___default()(container).lazyInject;



/***/ }),

/***/ "BWJO":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__("vCxL");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__configureDeps__ = __webpack_require__("yMWN");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__configureIoc__ = __webpack_require__("9Kgn");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__configureStore__ = __webpack_require__("hvuP");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_modules__ = __webpack_require__("R7Uq");





function configureApp(data) {
    var modules = [new __WEBPACK_IMPORTED_MODULE_4_modules__["b" /* MessengerModule */](), new __WEBPACK_IMPORTED_MODULE_4_modules__["a" /* AuthorizationModule */]()];
    if (data) {
        return __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __assign */]({}, data, { modules: modules });
    }
    var sharedReduxEntries = [];
    var connectedSagas = [];
    var connectedReducers = {};
    var _a = Object(__WEBPACK_IMPORTED_MODULE_3__configureStore__["b" /* default */])(), runSaga = _a.runSaga, store = _a.store;
    __WEBPACK_IMPORTED_MODULE_2__configureIoc__["b" /* container */].bind(__WEBPACK_IMPORTED_MODULE_2__configureIoc__["a" /* TYPES */].connectEntryToStore).toConstantValue(connectEntryToStore);
    var dependencies = Object(__WEBPACK_IMPORTED_MODULE_1__configureDeps__["a" /* default */])(store);
    sharedReduxEntries.forEach(connectEntryToStore);
    modules.forEach(function (module) {
        module.dependencies = dependencies;
        module.store = store;
        if (module.getReduxEntry) {
            connectEntryToStore(module.getReduxEntry());
        }
    });
    function connectEntryToStore(_a) {
        var reducers = _a.reducers, sagas = _a.sagas;
        if (!store) {
            throw new Error('Cannot find store, while connecting module.');
        }
        if (reducers) {
            var keys = Object.keys(reducers);
            var isNeedReplace = keys.reduce(function (acc, key) {
                var featureReducer = reducers[key];
                if (!connectedReducers[key] && featureReducer) {
                    connectedReducers[key] = featureReducer;
                    return true;
                }
                return acc || false;
            }, false);
            if (isNeedReplace) {
                store.replaceReducer(Object(__WEBPACK_IMPORTED_MODULE_3__configureStore__["a" /* createReducer */])(connectedReducers));
            }
        }
        if (sagas) {
            sagas.forEach(function (saga) {
                if (!connectedSagas.includes(saga) && runSaga) {
                    runSaga(saga(dependencies));
                    connectedSagas.push(saga);
                }
            });
        }
    }
    return { modules: modules, store: store };
}
/* harmony default export */ __webpack_exports__["a"] = (configureApp);


/***/ }),

/***/ "GcBk":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("lcwS")();
// imports


// module
exports.push([module.i, ".form {\n  width: 100%;\n  max-width: 30rem;\n  padding: 2rem;\n  border-radius: 0.5rem;\n  background: rgba(19, 35, 47, 0.9);\n  box-shadow: 0 4px 10px 4px rgba(19, 35, 47, 0.3); }\n  .form__tab-group {\n    display: -ms-flexbox;\n    display: flex;\n    margin: 0;\n    padding: 0;\n    list-style: none; }\n  .form__tab {\n    width: 50%;\n    padding: 1rem;\n    cursor: pointer;\n    transition: 0.5s ease;\n    text-align: center;\n    color: #a0a0a0;\n    background: rgba(160, 160, 160, 0.25);\n    font-size: 20px; }\n    .form__tab:hover {\n      color: #fff;\n      background: #1ab188; }\n    .form__tab_active {\n      color: #fff;\n      background: #1ab188; }\n", ""]);

// exports


/***/ }),

/***/ "Lorw":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("275T");
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__("b3GF")(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../../../../node_modules/css-loader/index.js?importLoaders=1!../../../../../node_modules/postcss-loader/index.js??ref--4-2!../../../../../node_modules/sass-loader/lib/loader.js!../../../../../node_modules/postcss-loader/index.js??ref--4-4!./Layout.scss", function() {
			var newContent = require("!!../../../../../node_modules/css-loader/index.js?importLoaders=1!../../../../../node_modules/postcss-loader/index.js??ref--4-2!../../../../../node_modules/sass-loader/lib/loader.js!../../../../../node_modules/postcss-loader/index.js??ref--4-4!./Layout.scss");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "N3sO":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("1n8/");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux__ = __webpack_require__("jYI/");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_router_dom__ = __webpack_require__("obMO");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__routes__ = __webpack_require__("wtwB");




function App(_a) {
    var modules = _a.modules, store = _a.store;
    return (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1_react_redux__["a" /* Provider */], { store: store },
        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_2_react_router_dom__["a" /* BrowserRouter */], null, Object(__WEBPACK_IMPORTED_MODULE_3__routes__["a" /* default */])(modules))));
}
/* harmony default export */ __webpack_exports__["a"] = (App);


/***/ }),

/***/ "OAT2":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var Api = /** @class */ (function () {
    // private actions: HttpActions;
    function Api(baseUrl, version) {
        if (version === void 0) { version = 'v1'; }
        this.baseUrl = baseUrl;
        this.version = version;
        // this.actions = new HttpActions(`${baseUrl}/${version}`);
    }
    return Api;
}());
/* harmony default export */ __webpack_exports__["a"] = (Api);


/***/ }),

/***/ "R7Uq":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Messenger_Messenger__ = __webpack_require__("8hhN");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Authorization_Authorization__ = __webpack_require__("iuxw");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__Messenger_Messenger__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__Authorization_Authorization__["a"]; });





/***/ }),

/***/ "SYo8":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var TYPES = {
    Store: Symbol('Store'),
    connectEntryToStore: Symbol('connectFeatureToStore'),
};
/* harmony default export */ __webpack_exports__["a"] = (TYPES);


/***/ }),

/***/ "TeG3":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("8aIC");
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__("b3GF")(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../../../node_modules/css-loader/index.js?importLoaders=1!../../../../node_modules/postcss-loader/index.js??ref--4-2!../../../../node_modules/sass-loader/lib/loader.js!../../../../node_modules/postcss-loader/index.js??ref--4-4!./styles.scss", function() {
			var newContent = require("!!../../../../node_modules/css-loader/index.js?importLoaders=1!../../../../node_modules/postcss-loader/index.js??ref--4-2!../../../../node_modules/sass-loader/lib/loader.js!../../../../node_modules/postcss-loader/index.js??ref--4-4!./styles.scss");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "V3UG":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__("vCxL");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("1n8/");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_bem_cn__ = __webpack_require__("6QlO");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_bem_cn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_bem_cn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_decko__ = __webpack_require__("4eBB");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_decko___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_decko__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Form_scss__ = __webpack_require__("fdKA");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Form_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__Form_scss__);





var b = __WEBPACK_IMPORTED_MODULE_2_bem_cn___default()('form');
var Form = /** @class */ (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __extends */](Form, _super);
    function Form() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Form.prototype.render = function () {
        var match = this.props.match;
        return (__WEBPACK_IMPORTED_MODULE_1_react__["createElement"]("div", { className: b() },
            __WEBPACK_IMPORTED_MODULE_1_react__["createElement"]("ul", { className: b('tab-group')() },
                __WEBPACK_IMPORTED_MODULE_1_react__["createElement"]("li", { onClick: this.swapForm, className: b('tab')() + " " + (match.params.tab === 'login' ? b('tab')({ active: true }) : ''), "data-tab": "login" }, "Log In"),
                __WEBPACK_IMPORTED_MODULE_1_react__["createElement"]("li", { onClick: this.swapForm, className: b('tab')() + " " + (match.params.tab === 'register' ? b('tab')({ active: true }) : ''), "data-tab": "register" }, "Sing Up")),
            this.tabContent(match.params.tab)));
    };
    Form.prototype.swapForm = function (event) {
        this.props.history.replace("./" + event.currentTarget.getAttribute('data-tab'));
    };
    Form.prototype.tabContent = function (tab) {
        if (tab === 'login') {
            return (__WEBPACK_IMPORTED_MODULE_1_react__["createElement"]("div", { className: b('tab-content')() },
                __WEBPACK_IMPORTED_MODULE_1_react__["createElement"]("div", { className: b('login')() },
                    __WEBPACK_IMPORTED_MODULE_1_react__["createElement"]("h1", null, "Welcome Back!"),
                    __WEBPACK_IMPORTED_MODULE_1_react__["createElement"]("form", { action: "", method: "post" },
                        __WEBPACK_IMPORTED_MODULE_1_react__["createElement"]("fieldset", { className: b('fields')() },
                            __WEBPACK_IMPORTED_MODULE_1_react__["createElement"]("div", { className: b('field')() },
                                __WEBPACK_IMPORTED_MODULE_1_react__["createElement"]("label", { className: b('')() },
                                    "Email Address",
                                    __WEBPACK_IMPORTED_MODULE_1_react__["createElement"]("span", { className: b('require')() }, "*")),
                                __WEBPACK_IMPORTED_MODULE_1_react__["createElement"]("input", { type: "email", required: true })),
                            __WEBPACK_IMPORTED_MODULE_1_react__["createElement"]("div", { className: b('field')() },
                                __WEBPACK_IMPORTED_MODULE_1_react__["createElement"]("label", null,
                                    "Password",
                                    __WEBPACK_IMPORTED_MODULE_1_react__["createElement"]("span", { className: b('require')() }, "*")),
                                __WEBPACK_IMPORTED_MODULE_1_react__["createElement"]("input", { type: "password", required: true }))),
                        __WEBPACK_IMPORTED_MODULE_1_react__["createElement"]("button", { className: b('submit')() }, "Log In")))));
        }
        else if (tab === 'register') {
            return null;
        }
        return null;
    };
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __decorate */]([
        __WEBPACK_IMPORTED_MODULE_3_decko__["bind"]
    ], Form.prototype, "swapForm", null);
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __decorate */]([
        __WEBPACK_IMPORTED_MODULE_3_decko__["bind"]
    ], Form.prototype, "tabContent", null);
    return Form;
}(__WEBPACK_IMPORTED_MODULE_1_react__["PureComponent"]));
/* harmony default export */ __webpack_exports__["a"] = (Form);


/***/ }),

/***/ "akHQ":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export GITHUB_PACKAGE_NAME */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ROUTES_PREFIX; });
var GITHUB_PACKAGE_NAME = 'Messenger';
var ROUTES_PREFIX =  true ? '/' + GITHUB_PACKAGE_NAME : '';


/***/ }),

/***/ "b9RH":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__("vCxL");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("1n8/");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_bem_cn__ = __webpack_require__("6QlO");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_bem_cn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_bem_cn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_shared_view_styles_base_scss__ = __webpack_require__("hhkA");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_shared_view_styles_base_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_shared_view_styles_base_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__styles_scss__ = __webpack_require__("TeG3");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__styles_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__styles_scss__);





var App = /** @class */ (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __extends */](App, _super);
    function App() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    App.prototype.render = function () {
        var b = __WEBPACK_IMPORTED_MODULE_2_bem_cn___default()('application');
        var children = this.props.children;
        return (__WEBPACK_IMPORTED_MODULE_1_react__["createElement"]("div", { className: b() }, children));
    };
    return App;
}(__WEBPACK_IMPORTED_MODULE_1_react__["Component"]));
/* harmony default export */ __webpack_exports__["a"] = (App);


/***/ }),

/***/ "ct4J":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__("vCxL");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("1n8/");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_bem_cn__ = __webpack_require__("6QlO");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_bem_cn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_bem_cn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Form_Form__ = __webpack_require__("V3UG");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Layout_scss__ = __webpack_require__("Lorw");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Layout_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__Layout_scss__);





var b = __WEBPACK_IMPORTED_MODULE_2_bem_cn___default()('authorization');
var AuthorizationLayout = /** @class */ (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __extends */](AuthorizationLayout, _super);
    function AuthorizationLayout() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AuthorizationLayout.prototype.render = function () {
        return (__WEBPACK_IMPORTED_MODULE_1_react__["createElement"]("div", { className: b() },
            __WEBPACK_IMPORTED_MODULE_1_react__["createElement"](__WEBPACK_IMPORTED_MODULE_3__Form_Form__["a" /* default */], __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __assign */]({}, this.props))));
    };
    return AuthorizationLayout;
}(__WEBPACK_IMPORTED_MODULE_1_react__["PureComponent"]));
/* harmony default export */ __webpack_exports__["a"] = (AuthorizationLayout);


/***/ }),

/***/ "fdKA":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("GcBk");
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__("b3GF")(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../../../../node_modules/css-loader/index.js?importLoaders=1!../../../../../node_modules/postcss-loader/index.js??ref--4-2!../../../../../node_modules/sass-loader/lib/loader.js!../../../../../node_modules/postcss-loader/index.js??ref--4-4!./Form.scss", function() {
			var newContent = require("!!../../../../../node_modules/css-loader/index.js?importLoaders=1!../../../../../node_modules/postcss-loader/index.js??ref--4-2!../../../../../node_modules/sass-loader/lib/loader.js!../../../../../node_modules/postcss-loader/index.js??ref--4-4!./Form.scss");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "gp7H":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("1n8/");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom__ = __webpack_require__("NKHc");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_configureApp__ = __webpack_require__("BWJO");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_hot_loader__ = __webpack_require__("/aVi");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_hot_loader___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react_hot_loader__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_App__ = __webpack_require__("N3sO");





var appData = Object(__WEBPACK_IMPORTED_MODULE_2_core_configureApp__["a" /* default */])();
var render = function (component) { return __WEBPACK_IMPORTED_MODULE_1_react_dom__["render"](__WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_3_react_hot_loader__["AppContainer"], null, component), document.getElementById('root')); };
render(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_4_core_App__["a" /* default */], { modules: appData.modules, store: appData.store }));
if (false) {
    module.hot.accept(['./core/App', './core/configureApp'], function () {
        var nextConfigureApp = require('./core/configureApp').default;
        var NextApp = require('./core/App').default;
        appData = nextConfigureApp(appData);
        render(React.createElement(NextApp, { modules: appData.modules, store: appData.store }));
    });
}


/***/ }),

/***/ "hvuP":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return createReducer; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux_devtools_extension__ = __webpack_require__("yP4S");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux_devtools_extension___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_redux_devtools_extension__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_redux_saga__ = __webpack_require__("pCRc");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_redux__ = __webpack_require__("fpuT");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_shared_helpers_redux_multiConnect__ = __webpack_require__("TRx0");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_shared_helpers_redux__ = __webpack_require__("CmXq");





function configureStore() {
    var sagaMiddleware = Object(__WEBPACK_IMPORTED_MODULE_1_redux_saga__["a" /* default */])();
    var middlewares = [sagaMiddleware];
    var composeEnhancers =  true ? Object(__WEBPACK_IMPORTED_MODULE_0_redux_devtools_extension__["composeWithDevTools"])({}) : compose;
    var store = Object(__WEBPACK_IMPORTED_MODULE_2_redux__["createStore"])(function (state) { return state; }, composeEnhancers(__WEBPACK_IMPORTED_MODULE_2_redux__["applyMiddleware"].apply(void 0, middlewares)));
    return {
        store: store,
        runSaga: sagaMiddleware.run,
    };
}
function createReducer(reducers) {
    return Object(__WEBPACK_IMPORTED_MODULE_4_shared_helpers_redux__["a" /* composeReducers */])([
        __WEBPACK_IMPORTED_MODULE_3_shared_helpers_redux_multiConnect__["a" /* reducer */],
        Object(__WEBPACK_IMPORTED_MODULE_2_redux__["combineReducers"])(reducers),
    ]);
}

/* harmony default export */ __webpack_exports__["b"] = (configureStore);


/***/ }),

/***/ "iuxw":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__("vCxL");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("1n8/");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_shared_types_app__ = __webpack_require__("zGGS");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_constants__ = __webpack_require__("akHQ");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_router_dom__ = __webpack_require__("obMO");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__view_Layout_Layout__ = __webpack_require__("ct4J");






var AuthorizationModule = /** @class */ (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __extends */](AuthorizationModule, _super);
    function AuthorizationModule() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AuthorizationModule.prototype.getRoutes = function () {
        // tslint:disable-next-line:max-line-length
        return __WEBPACK_IMPORTED_MODULE_1_react__["createElement"](__WEBPACK_IMPORTED_MODULE_4_react_router_dom__["c" /* Route */], { key: "authorization", path: __WEBPACK_IMPORTED_MODULE_3_core_constants__["a" /* ROUTES_PREFIX */] + "/authorization/:tab(login|register)", component: __WEBPACK_IMPORTED_MODULE_5__view_Layout_Layout__["a" /* default */] });
    };
    return AuthorizationModule;
}(__WEBPACK_IMPORTED_MODULE_2_shared_types_app__["a" /* Module */]));
/* harmony default export */ __webpack_exports__["a"] = (AuthorizationModule);


/***/ }),

/***/ "t2rD":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("lcwS")();
// imports


// module
exports.push([module.i, ".messenger {\n  display: -ms-flexbox;\n  display: flex;\n  height: 100%;\n  -ms-flex-align: stretch;\n      align-items: stretch; }\n  .messenger__users-list {\n    min-width: 17.5rem;\n    padding: 0.4rem; }\n  .messenger__splitter {\n    z-index: 1;\n    width: 0.3rem;\n    box-shadow: 2px 0 2px 0 #bebebe; }\n  .messenger__messages {\n    -ms-flex-positive: 1;\n        flex-grow: 1;\n    min-width: 25.5rem;\n    padding: 0.4rem;\n    background-color: #ebebeb; }\n", ""]);

// exports


/***/ }),

/***/ "wFit":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("t2rD");
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__("b3GF")(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../../../../node_modules/css-loader/index.js?importLoaders=1!../../../../../node_modules/postcss-loader/index.js??ref--4-2!../../../../../node_modules/sass-loader/lib/loader.js!../../../../../node_modules/postcss-loader/index.js??ref--4-4!./Layout.scss", function() {
			var newContent = require("!!../../../../../node_modules/css-loader/index.js?importLoaders=1!../../../../../node_modules/postcss-loader/index.js??ref--4-2!../../../../../node_modules/sass-loader/lib/loader.js!../../../../../node_modules/postcss-loader/index.js??ref--4-4!./Layout.scss");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "wtwB":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("1n8/");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_constants__ = __webpack_require__("akHQ");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_router_dom__ = __webpack_require__("obMO");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_modules_App__ = __webpack_require__("6n15");




function getRoutes(modules) {
    return (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_2_react_router_dom__["c" /* Route */], { path: __WEBPACK_IMPORTED_MODULE_1_core_constants__["a" /* ROUTES_PREFIX */] },
        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_3_modules_App__["a" /* App */], null,
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_2_react_router_dom__["d" /* Switch */], null,
                modules.map(function (module) { return module.getRoutes ? module.getRoutes() : null; }),
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_2_react_router_dom__["b" /* Redirect */], { exact: true, from: __WEBPACK_IMPORTED_MODULE_1_core_constants__["a" /* ROUTES_PREFIX */], to: __WEBPACK_IMPORTED_MODULE_1_core_constants__["a" /* ROUTES_PREFIX */] + "/authorization/login" })))));
}
/* harmony default export */ __webpack_exports__["a"] = (getRoutes);


/***/ }),

/***/ "yMWN":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = configureDeps;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_services_api_Api__ = __webpack_require__("OAT2");

function configureDeps(store) {
    var api = new __WEBPACK_IMPORTED_MODULE_0_services_api_Api__["a" /* default */]('/api');
    return { api: api };
}


/***/ })

},[0]);
//# sourceMappingURL=app-dc30d4c00900d096ed92.bundle.js.map