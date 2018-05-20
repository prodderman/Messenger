webpackJsonp([2],{

/***/ "/vIc":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__AuthWrapper_AuthWrapper__ = __webpack_require__("Svzd");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__AuthWrapper_AuthWrapper__["a"]; });



/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("gp7H");


/***/ }),

/***/ "1IjZ":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__namespace__ = __webpack_require__("91Cc");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__namespace___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__namespace__);
/* unused harmony reexport namespace */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__loader__ = __webpack_require__("b6AD");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__loader__["a"]; });





/***/ }),

/***/ "4E1E":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux__ = __webpack_require__("fpuT");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_shared_helpers_redux__ = __webpack_require__("CmXq");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__initial__ = __webpack_require__("iATe");



/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_0_redux__["combineReducers"])({
    authorization: Object(__WEBPACK_IMPORTED_MODULE_1_shared_helpers_redux__["c" /* makeCommunicationReducer */])('AUTH_WRAPPER:AUTHORIZATION', 'AUTH_WRAPPER:AUTHORIZATION_SUCCESS', 'AUTH_WRAPPER:AUTHORIZATION_FAIL', __WEBPACK_IMPORTED_MODULE_2__initial__["a" /* default */].communication.authorization),
}));


/***/ }),

/***/ "58KZ":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__("vCxL");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("1n8/");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_decko__ = __webpack_require__("4eBB");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_decko___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_decko__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_inversify__ = __webpack_require__("PR7M");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_inversify___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_inversify__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__configureIoc__ = __webpack_require__("9Kgn");





function featureConnect(loaders, preloader) {
    return function (WrappedComponent) {
        var FeatureConnector = /** @class */ (function (_super) {
            __WEBPACK_IMPORTED_MODULE_0_tslib__["d" /* __extends */](FeatureConnector, _super);
            function FeatureConnector() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.state = { bundles: {} };
                _this.saveBundleToState = function (bundle, key) {
                    _this.setState(function (state) {
                        return (__WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __assign */]({}, state, { bundles: __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __assign */]({}, state.bundles, (_a = {}, _a[key] = bundle, _a)) }));
                        var _a;
                    });
                };
                return _this;
            }
            FeatureConnector.prototype.componentWillMount = function () {
                this.load();
            };
            FeatureConnector.prototype.componentWillUnmount = function () {
                this.saveBundleToState = null;
            };
            FeatureConnector.prototype.render = function () {
                if (!this.isAllBundlesLoaded()) {
                    return preloader || null;
                }
                else {
                    return __WEBPACK_IMPORTED_MODULE_1_react__["createElement"](WrappedComponent, __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __assign */]({}, this.state.bundles, this.props));
                }
            };
            FeatureConnector.prototype.load = function () {
                var _this = this;
                var keys = Object.keys(loaders);
                keys.forEach(function (key) {
                    loaders[key]().then(function (bundle) {
                        _this.connectFeatureToStore(bundle);
                        if (_this.saveBundleToState) {
                            _this.saveBundleToState(bundle, key);
                        }
                    });
                });
            };
            FeatureConnector.prototype.isAllBundlesLoaded = function () {
                var _this = this;
                return Object.keys(loaders).every(function (key) { return Boolean(_this.state.bundles[key]); });
            };
            __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __decorate */]([
                Object(__WEBPACK_IMPORTED_MODULE_4__configureIoc__["c" /* inject */])(__WEBPACK_IMPORTED_MODULE_4__configureIoc__["a" /* TYPES */].connectEntryToStore)
            ], FeatureConnector.prototype, "connectFeatureToStore", void 0);
            __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __decorate */]([
                __WEBPACK_IMPORTED_MODULE_2_decko__["bind"]
            ], FeatureConnector.prototype, "load", null);
            __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __decorate */]([
                __WEBPACK_IMPORTED_MODULE_2_decko__["bind"]
            ], FeatureConnector.prototype, "isAllBundlesLoaded", null);
            FeatureConnector = __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __decorate */]([
                Object(__WEBPACK_IMPORTED_MODULE_3_inversify__["injectable"])()
            ], FeatureConnector);
            return FeatureConnector;
        }(__WEBPACK_IMPORTED_MODULE_1_react__["PureComponent"]));
        return FeatureConnector;
    };
}
/* harmony default export */ __webpack_exports__["a"] = (featureConnect);


/***/ }),

/***/ "6Wpl":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = getSaga;
/* unused harmony export executeAuthorization */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__("vCxL");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_redux_saga_effects__ = __webpack_require__("91fl");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_shared_helpers_getErrorMsg__ = __webpack_require__("8fBH");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__actions__ = __webpack_require__("a6NI");




var authorizationType = 'AUTH_WRAPPER:AUTHORIZATION';
function getSaga(deps) {
    return function saga() {
        return __WEBPACK_IMPORTED_MODULE_0_tslib__["e" /* __generator */](this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, Object(__WEBPACK_IMPORTED_MODULE_1_redux_saga_effects__["c" /* takeLatest */])(authorizationType, executeAuthorization, deps)];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    };
}
function executeAuthorization(_a) {
    var storage = _a.storage, api = _a.api;
    var response, access, error_1, message;
    return __WEBPACK_IMPORTED_MODULE_0_tslib__["e" /* __generator */](this, function (_b) {
        switch (_b.label) {
            case 0: return [4 /*yield*/, Object(__WEBPACK_IMPORTED_MODULE_1_redux_saga_effects__["a" /* call */])(storage.loadAccessInfo)];
            case 1:
                response = _b.sent();
                if (!!response) return [3 /*break*/, 3];
                return [4 /*yield*/, Object(__WEBPACK_IMPORTED_MODULE_1_redux_saga_effects__["b" /* put */])(__WEBPACK_IMPORTED_MODULE_3__actions__["authorizationFail"]('access info not found', false))];
            case 2:
                _b.sent();
                return [2 /*return*/];
            case 3:
                _b.trys.push([3, 9, , 11]);
                return [4 /*yield*/, Object(__WEBPACK_IMPORTED_MODULE_1_redux_saga_effects__["a" /* call */])(api.authorization, response)];
            case 4:
                access = _b.sent();
                if (!access) return [3 /*break*/, 6];
                return [4 /*yield*/, Object(__WEBPACK_IMPORTED_MODULE_1_redux_saga_effects__["b" /* put */])(__WEBPACK_IMPORTED_MODULE_3__actions__["authorizationSuccess"](access))];
            case 5:
                _b.sent();
                return [2 /*return*/];
            case 6: return [4 /*yield*/, Object(__WEBPACK_IMPORTED_MODULE_1_redux_saga_effects__["b" /* put */])(__WEBPACK_IMPORTED_MODULE_3__actions__["authorizationFail"]('', access))];
            case 7:
                _b.sent();
                _b.label = 8;
            case 8: return [3 /*break*/, 11];
            case 9:
                error_1 = _b.sent();
                message = Object(__WEBPACK_IMPORTED_MODULE_2_shared_helpers_getErrorMsg__["a" /* default */])(error_1);
                return [4 /*yield*/, Object(__WEBPACK_IMPORTED_MODULE_1_redux_saga_effects__["b" /* put */])(__WEBPACK_IMPORTED_MODULE_3__actions__["authorizationFail"](message, false))];
            case 10:
                _b.sent();
                return [3 /*break*/, 11];
            case 11: return [2 /*return*/];
        }
    });
}


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
    __WEBPACK_IMPORTED_MODULE_0_tslib__["d" /* __extends */](MessengerLayout, _super);
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
    __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __decorate */]([
        __WEBPACK_IMPORTED_MODULE_3_decko__["bind"]
    ], MessengerLayout.prototype, "startDragging", null);
    __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __decorate */]([
        __WEBPACK_IMPORTED_MODULE_3_decko__["bind"]
    ], MessengerLayout.prototype, "stopDragging", null);
    __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __decorate */]([
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_constants__ = __webpack_require__("akHQ");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_services_PrivateRoute__ = __webpack_require__("dZ+l");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__view_Layout_Layout__ = __webpack_require__("886V");






var MessengerModule = /** @class */ (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["d" /* __extends */](MessengerModule, _super);
    function MessengerModule() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MessengerModule.prototype.getRoutes = function () {
        return (__WEBPACK_IMPORTED_MODULE_1_react__["createElement"](__WEBPACK_IMPORTED_MODULE_4_services_PrivateRoute__["a" /* PrivateRoute */], { exact: true, key: "messenger", path: __WEBPACK_IMPORTED_MODULE_3_core_constants__["a" /* ROUTES_PREFIX */] + "/messenger", redirectPath: __WEBPACK_IMPORTED_MODULE_3_core_constants__["a" /* ROUTES_PREFIX */] + "/authentication/:tab", component: __WEBPACK_IMPORTED_MODULE_5__view_Layout_Layout__["a" /* default */] }));
    };
    return MessengerModule;
}(__WEBPACK_IMPORTED_MODULE_2_shared_types_app__["a" /* Module */]));
/* harmony default export */ __webpack_exports__["a"] = (MessengerModule);


/***/ }),

/***/ "91Cc":
/***/ (function(module, exports) {



/***/ }),

/***/ "9Kgn":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return container; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return lazyInject; });
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_services_AuthWrapper__ = __webpack_require__("d0Hu");






function configureApp(data) {
    var modules = [
        new __WEBPACK_IMPORTED_MODULE_4_modules__["a" /* AuthenticationModule */](),
        new __WEBPACK_IMPORTED_MODULE_4_modules__["b" /* MessengerModule */](),
    ];
    if (data) {
        return __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __assign */]({}, data, { modules: modules });
    }
    var sharedReduxEntries = [
        __WEBPACK_IMPORTED_MODULE_5_services_AuthWrapper__["c" /* default */],
    ];
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

/***/ "GI4N":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__("vCxL");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("1n8/");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_shared_types_app__ = __webpack_require__("zGGS");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_constants__ = __webpack_require__("akHQ");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_services_PrivateRoute__ = __webpack_require__("dZ+l");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__view_Layout_Layout__ = __webpack_require__("PPO0");






var AuthenticationModule = /** @class */ (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["d" /* __extends */](AuthenticationModule, _super);
    function AuthenticationModule() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AuthenticationModule.prototype.getRoutes = function () {
        return (__WEBPACK_IMPORTED_MODULE_1_react__["createElement"](__WEBPACK_IMPORTED_MODULE_4_services_PrivateRoute__["a" /* PrivateRoute */], { key: "authentication", path: __WEBPACK_IMPORTED_MODULE_3_core_constants__["a" /* ROUTES_PREFIX */] + "/authentication/:tab", redirectPath: __WEBPACK_IMPORTED_MODULE_3_core_constants__["a" /* ROUTES_PREFIX */] + "/messenger", component: __WEBPACK_IMPORTED_MODULE_5__view_Layout_Layout__["a" /* default */], isLoginPage: true }));
    };
    return AuthenticationModule;
}(__WEBPACK_IMPORTED_MODULE_2_shared_types_app__["a" /* Module */]));
/* harmony default export */ __webpack_exports__["a"] = (AuthenticationModule);


/***/ }),

/***/ "MSQD":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__FeatureConnector__ = __webpack_require__("58KZ");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__FeatureConnector__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__configureIoc__ = __webpack_require__("9Kgn");
/* unused harmony reexport inject */
/* unused harmony reexport TYPES */




/***/ }),

/***/ "N3sO":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("1n8/");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux__ = __webpack_require__("jYI/");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_router_dom__ = __webpack_require__("obMO");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_services_AuthWrapper__ = __webpack_require__("d0Hu");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__routes__ = __webpack_require__("wtwB");





function App(_a) {
    var modules = _a.modules, store = _a.store;
    return (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1_react_redux__["a" /* Provider */], { store: store },
        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_3_services_AuthWrapper__["a" /* AuthWrapper */], null,
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_2_react_router_dom__["a" /* BrowserRouter */], null, Object(__WEBPACK_IMPORTED_MODULE_4__routes__["a" /* default */])(modules)))));
}
/* harmony default export */ __webpack_exports__["a"] = (App);


/***/ }),

/***/ "OAT2":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__("vCxL");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_decko__ = __webpack_require__("4eBB");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_decko___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_decko__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_shared_helpers_mocks__ = __webpack_require__("Bso0");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_redux_saga__ = __webpack_require__("pCRc");



// import HttpActions from './HttpActions';

var Api = /** @class */ (function () {
    // private actions: HttpActions;
    function Api(baseUrl, version) {
        if (version === void 0) { version = 'v1'; }
        this.baseUrl = baseUrl;
        this.version = version;
        //
    }
    Api.prototype.authentication = function (loginData) {
        return __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __awaiter */](this, void 0, void 0, function () {
            var user;
            return __WEBPACK_IMPORTED_MODULE_0_tslib__["e" /* __generator */](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, Object(__WEBPACK_IMPORTED_MODULE_3_redux_saga__["b" /* delay */])(1000)];
                    case 1:
                        _a.sent();
                        user = this.findUser(loginData);
                        return [2 /*return*/, user ? __WEBPACK_IMPORTED_MODULE_2_shared_helpers_mocks__["b" /* tokens */][user.uid] : null];
                }
            });
        });
    };
    Api.prototype.authorization = function (accessInfo) {
        return __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __awaiter */](this, void 0, void 0, function () {
            return __WEBPACK_IMPORTED_MODULE_0_tslib__["e" /* __generator */](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, Object(__WEBPACK_IMPORTED_MODULE_3_redux_saga__["b" /* delay */])(1000)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, true];
                }
            });
        });
    };
    Api.prototype.validateLoginData = function (users, loginData) {
        return users.some(function (user) {
            if (user.email === loginData.email &&
                user.password === loginData.password) {
                return true;
            }
            return false;
        });
    };
    Api.prototype.findUser = function (loginData) {
        return __WEBPACK_IMPORTED_MODULE_2_shared_helpers_mocks__["a" /* mockUsers */].find(function (user) {
            if (user.email === loginData.email &&
                user.password === loginData.password) {
                return true;
            }
            return false;
        });
    };
    __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __decorate */]([
        __WEBPACK_IMPORTED_MODULE_1_decko__["bind"]
    ], Api.prototype, "authentication", null);
    __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __decorate */]([
        __WEBPACK_IMPORTED_MODULE_1_decko__["bind"]
    ], Api.prototype, "authorization", null);
    __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __decorate */]([
        __WEBPACK_IMPORTED_MODULE_1_decko__["bind"]
    ], Api.prototype, "validateLoginData", null);
    __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __decorate */]([
        __WEBPACK_IMPORTED_MODULE_1_decko__["bind"]
    ], Api.prototype, "findUser", null);
    return Api;
}());
/* harmony default export */ __webpack_exports__["a"] = (Api);


/***/ }),

/***/ "OFRG":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__("vCxL");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_decko__ = __webpack_require__("4eBB");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_decko___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_decko__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_redux_saga__ = __webpack_require__("pCRc");



var Storage = /** @class */ (function () {
    function Storage() {
        //
    }
    Storage.prototype.loadAccessInfo = function () {
        return __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __awaiter */](this, void 0, void 0, function () {
            return __WEBPACK_IMPORTED_MODULE_0_tslib__["e" /* __generator */](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, Object(__WEBPACK_IMPORTED_MODULE_2_redux_saga__["b" /* delay */])(1000)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, JSON.parse(localStorage.getItem('user'))];
                }
            });
        });
    };
    Storage.prototype.writeAccessInfo = function (accessInfo) {
        return __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __awaiter */](this, void 0, void 0, function () {
            return __WEBPACK_IMPORTED_MODULE_0_tslib__["e" /* __generator */](this, function (_a) {
                localStorage.removeItem('user');
                localStorage.setItem('user', JSON.stringify(accessInfo));
                return [2 /*return*/];
            });
        });
    };
    Storage.prototype.isUndefined = function (value) {
        return typeof value === undefined ? true : false;
    };
    __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __decorate */]([
        __WEBPACK_IMPORTED_MODULE_1_decko__["bind"]
    ], Storage.prototype, "loadAccessInfo", null);
    __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __decorate */]([
        __WEBPACK_IMPORTED_MODULE_1_decko__["bind"]
    ], Storage.prototype, "writeAccessInfo", null);
    __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __decorate */]([
        __WEBPACK_IMPORTED_MODULE_1_decko__["bind"]
    ], Storage.prototype, "isUndefined", null);
    return Storage;
}());
/* harmony default export */ __webpack_exports__["a"] = (Storage);


/***/ }),

/***/ "PPO0":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__("vCxL");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("1n8/");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_bem_cn__ = __webpack_require__("6QlO");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_bem_cn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_bem_cn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_decko__ = __webpack_require__("4eBB");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_decko___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_decko__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core__ = __webpack_require__("MSQD");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_shared_view_elements_preloader__ = __webpack_require__("ytdM");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_redux__ = __webpack_require__("fpuT");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_features_signInUpForm__ = __webpack_require__("1IjZ");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_services_AuthWrapper__ = __webpack_require__("d0Hu");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__Layout_scss__ = __webpack_require__("uHT9");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__Layout_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9__Layout_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_react_redux__ = __webpack_require__("jYI/");











function mapState(state) {
    return {};
}
function mapDispatch(dispatch) {
    return Object(__WEBPACK_IMPORTED_MODULE_6_redux__["bindActionCreators"])({
        changeAccess: __WEBPACK_IMPORTED_MODULE_8_services_AuthWrapper__["b" /* actions */].changeAccess,
    }, dispatch);
}
var b = __WEBPACK_IMPORTED_MODULE_2_bem_cn___default()('authentication');
var AuthenticationLayout = /** @class */ (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["d" /* __extends */](AuthenticationLayout, _super);
    function AuthenticationLayout(props) {
        return _super.call(this, props) || this;
    }
    AuthenticationLayout.prototype.render = function () {
        var SignInUpForm = this.props.signInUpFormEntry.containers.SignInUpForm;
        var routeProps = {
            history: this.props.history,
            location: this.props.location,
            match: this.props.match,
        };
        return (__WEBPACK_IMPORTED_MODULE_1_react__["createElement"]("div", { className: b() },
            __WEBPACK_IMPORTED_MODULE_1_react__["createElement"](SignInUpForm, { onAccessChange: this.onAccessChange, routeProps: routeProps })));
    };
    AuthenticationLayout.prototype.onAccessChange = function (hasAccess) {
        this.props.changeAccess(hasAccess);
    };
    __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __decorate */]([
        __WEBPACK_IMPORTED_MODULE_3_decko__["bind"]
    ], AuthenticationLayout.prototype, "onAccessChange", null);
    return AuthenticationLayout;
}(__WEBPACK_IMPORTED_MODULE_1_react__["PureComponent"]));
/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_4_core__["a" /* featureConnect */])({ signInUpFormEntry: __WEBPACK_IMPORTED_MODULE_7_features_signInUpForm__["a" /* loadEntry */] }, __WEBPACK_IMPORTED_MODULE_1_react__["createElement"](__WEBPACK_IMPORTED_MODULE_5_shared_view_elements_preloader__["a" /* default */], null))(Object(__WEBPACK_IMPORTED_MODULE_10_react_redux__["b" /* connect */])(mapState, mapDispatch)(AuthenticationLayout)));


/***/ }),

/***/ "QDQS":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("lcwS")();
// imports


// module
exports.push([module.i, ".messenger {\n  display: -ms-flexbox;\n  display: flex;\n  height: 100%;\n  -ms-flex-align: stretch;\n      align-items: stretch; }\n  .messenger__users-list {\n    min-width: 17.5rem;\n    padding: 0.4rem; }\n  .messenger__splitter {\n    z-index: 1;\n    width: 0.3rem;\n    box-shadow: 2px 0 2px 0 #bebebe; }\n  .messenger__messages {\n    -ms-flex-positive: 1;\n        flex-grow: 1;\n    min-width: 25.5rem;\n    padding: 0.4rem;\n    background-color: #ebebeb; }\n", ""]);

// exports


/***/ }),

/***/ "R7Uq":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Messenger_Messenger__ = __webpack_require__("8hhN");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Authentication_Authentication__ = __webpack_require__("GI4N");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Page404_Page404__ = __webpack_require__("kGNo");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__Messenger_Messenger__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__Authentication_Authentication__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_2__Page404_Page404__["a"]; });






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

/***/ "Svzd":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export AuthWrapper */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__("vCxL");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("1n8/");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_redux__ = __webpack_require__("jYI/");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_redux__ = __webpack_require__("fpuT");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__redux__ = __webpack_require__("z+Lz");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_shared_view_elements_preloader__ = __webpack_require__("ytdM");






function mapState(state) {
    var hasAccess = __WEBPACK_IMPORTED_MODULE_4__redux__["d" /* selectors */].selectAccess(state.authWrapper);
    return {
        hasAccess: hasAccess,
    };
}
function mapDispatch(dispatch) {
    return Object(__WEBPACK_IMPORTED_MODULE_3_redux__["bindActionCreators"])({
        authorization: __WEBPACK_IMPORTED_MODULE_4__redux__["a" /* actions */].authorization,
    }, dispatch);
}
var AuthWrapper = /** @class */ (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["d" /* __extends */](AuthWrapper, _super);
    function AuthWrapper() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AuthWrapper.prototype.componentWillMount = function () {
        if (this.props.hasAccess === null) {
            this.props.authorization();
        }
    };
    AuthWrapper.prototype.render = function () {
        var children = this.props.children;
        var hasAccess = this.props.hasAccess;
        if (hasAccess !== null) {
            return children;
        }
        else {
            return __WEBPACK_IMPORTED_MODULE_1_react__["createElement"](__WEBPACK_IMPORTED_MODULE_5_shared_view_elements_preloader__["a" /* default */], null);
        }
    };
    return AuthWrapper;
}(__WEBPACK_IMPORTED_MODULE_1_react__["PureComponent"]));

/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_2_react_redux__["b" /* connect */])(mapState, mapDispatch)(AuthWrapper));


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

/***/ "YNRd":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__("vCxL");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("1n8/");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_bem_cn__ = __webpack_require__("6QlO");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_bem_cn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_bem_cn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Layout_scss__ = __webpack_require__("eXty");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Layout_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__Layout_scss__);




var Page404Layout = /** @class */ (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["d" /* __extends */](Page404Layout, _super);
    function Page404Layout() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.b = __WEBPACK_IMPORTED_MODULE_2_bem_cn___default()('page404');
        return _this;
    }
    Page404Layout.prototype.render = function () {
        var b = this.b;
        return (__WEBPACK_IMPORTED_MODULE_1_react__["createElement"]("h1", null, "404"));
    };
    return Page404Layout;
}(__WEBPACK_IMPORTED_MODULE_1_react__["PureComponent"]));
/* harmony default export */ __webpack_exports__["a"] = (Page404Layout);


/***/ }),

/***/ "Yf/d":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = changeAccess;
function changeAccess(payload) {
    return {
        type: 'AUTH_WRAPPER:ACCESS_CHANGE',
        payload: payload,
    };
}


/***/ }),

/***/ "a6NI":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__communication__ = __webpack_require__("j/OK");
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "authorization", function() { return __WEBPACK_IMPORTED_MODULE_0__communication__["a"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "authorizationSuccess", function() { return __WEBPACK_IMPORTED_MODULE_0__communication__["c"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "authorizationFail", function() { return __WEBPACK_IMPORTED_MODULE_0__communication__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data__ = __webpack_require__("Yf/d");
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "changeAccess", function() { return __WEBPACK_IMPORTED_MODULE_1__data__["a"]; });




/***/ }),

/***/ "akHQ":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export GITHUB_PACKAGE_NAME */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ROUTES_PREFIX; });
var GITHUB_PACKAGE_NAME = 'Messenger';
var ROUTES_PREFIX =  true ? '/' + GITHUB_PACKAGE_NAME : '';


/***/ }),

/***/ "b6AD":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = loadEntry;
function loadEntry() {
    return __webpack_require__.e/* import() */(0).then(__webpack_require__.bind(null, "r++x")).then(function (feature) { return feature.entry; });
}


/***/ }),

/***/ "b9RH":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__("vCxL");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("1n8/");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_bem_cn__ = __webpack_require__("6QlO");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_bem_cn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_bem_cn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_shared_view_styles_constants_scss__ = __webpack_require__("o185");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_shared_view_styles_constants_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_shared_view_styles_constants_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_shared_view_styles_base_scss__ = __webpack_require__("hhkA");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_shared_view_styles_base_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_shared_view_styles_base_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__styles_scss__ = __webpack_require__("TeG3");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__styles_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__styles_scss__);






var App = /** @class */ (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["d" /* __extends */](App, _super);
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

/***/ "bUj9":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export PrivateRoute */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__("vCxL");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("1n8/");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_router_dom__ = __webpack_require__("obMO");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_redux__ = __webpack_require__("jYI/");




function mapState(state) {
    var hasAccess = state.authWrapper.data.hasAccess;
    return {
        hasAccess: hasAccess,
    };
}
var PrivateRoute = /** @class */ (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["d" /* __extends */](PrivateRoute, _super);
    function PrivateRoute() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PrivateRoute.prototype.render = function () {
        var props = this.props;
        var hasAccess = !!this.props.hasAccess;
        var isLoginPage = !!this.props.isLoginPage;
        var renderVar = hasAccess !== isLoginPage;
        return (renderVar ? (__WEBPACK_IMPORTED_MODULE_1_react__["createElement"](__WEBPACK_IMPORTED_MODULE_2_react_router_dom__["c" /* Route */], __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __assign */]({}, props))) : (__WEBPACK_IMPORTED_MODULE_1_react__["createElement"](__WEBPACK_IMPORTED_MODULE_2_react_router_dom__["b" /* Redirect */], { to: this.props.redirectPath })));
    };
    return PrivateRoute;
}(__WEBPACK_IMPORTED_MODULE_1_react__["Component"]));

/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_3_react_redux__["b" /* connect */])(mapState)(PrivateRoute));


/***/ }),

/***/ "d0Hu":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__view_containers__ = __webpack_require__("/vIc");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__view_containers__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__namespace__ = __webpack_require__("ztwX");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__namespace___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__namespace__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__redux__ = __webpack_require__("z+Lz");
/* unused harmony reexport namespace */
/* unused harmony reexport selectors */
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_2__redux__["a"]; });
/* unused harmony reexport reducer */




/* harmony default export */ __webpack_exports__["c"] = ({
    reducers: { authWrapper: __WEBPACK_IMPORTED_MODULE_2__redux__["c" /* reducer */] },
    sagas: [__WEBPACK_IMPORTED_MODULE_2__redux__["b" /* getSaga */]],
});


/***/ }),

/***/ "dZ+l":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__view_PrivateRoute__ = __webpack_require__("bUj9");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__view_PrivateRoute__["a"]; });



/***/ }),

/***/ "e6Jj":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["selectAccess"] = selectAccess;
/* harmony export (immutable) */ __webpack_exports__["selectCommunication"] = selectCommunication;
function selectAccess(state) {
    return state.data.hasAccess;
}
function selectCommunication(state) {
    return state.communication;
}


/***/ }),

/***/ "eXty":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("QDQS");
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

/***/ "gp7H":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_reflect_metadata__ = __webpack_require__("npqE");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_reflect_metadata___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_reflect_metadata__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_polyfill__ = __webpack_require__("wllv");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_polyfill___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_polyfill__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react__ = __webpack_require__("1n8/");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_dom__ = __webpack_require__("NKHc");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_configureApp__ = __webpack_require__("BWJO");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_hot_loader__ = __webpack_require__("/aVi");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_hot_loader___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_react_hot_loader__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_App__ = __webpack_require__("N3sO");







var appData = Object(__WEBPACK_IMPORTED_MODULE_4_core_configureApp__["a" /* default */])();
var render = function (component) { return __WEBPACK_IMPORTED_MODULE_3_react_dom__["render"](__WEBPACK_IMPORTED_MODULE_2_react__["createElement"](__WEBPACK_IMPORTED_MODULE_5_react_hot_loader__["AppContainer"], null, component), document.getElementById('root')); };
render(__WEBPACK_IMPORTED_MODULE_2_react__["createElement"](__WEBPACK_IMPORTED_MODULE_6_core_App__["a" /* default */], { modules: appData.modules, store: appData.store }));
if (false) {
    module.hot.accept(['./core/App', './core/configureApp'], function () {
        var nextConfigureApp = require('./core/configureApp').default;
        var NextApp = require('./core/App').default;
        appData = nextConfigureApp(appData);
        render(React.createElement(NextApp, { modules: appData.modules, store: appData.store }));
    });
}


/***/ }),

/***/ "hmx9":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux__ = __webpack_require__("fpuT");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__initial__ = __webpack_require__("iATe");


function accessReducer(state, action) {
    if (state === void 0) { state = __WEBPACK_IMPORTED_MODULE_1__initial__["a" /* default */].data.hasAccess; }
    switch (action.type) {
        case 'AUTH_WRAPPER:AUTHORIZATION_SUCCESS':
        case 'AUTH_WRAPPER:AUTHORIZATION_FAIL':
        case 'AUTH_WRAPPER:ACCESS_CHANGE':
            return action.payload;
        default: return state;
    }
}
/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_0_redux__["combineReducers"])({
    hasAccess: accessReducer,
}));


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

/***/ "iATe":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var initialState = {
    data: {
        hasAccess: null,
    },
    communication: {
        authorization: {
            isRequesting: false,
            error: '',
        },
    },
};
/* harmony default export */ __webpack_exports__["a"] = (initialState);


/***/ }),

/***/ "j/OK":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return authorization; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return authorizationSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return authorizationFail; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_shared_helpers_redux__ = __webpack_require__("CmXq");

var authorization = (_a = Object(__WEBPACK_IMPORTED_MODULE_0_shared_helpers_redux__["b" /* makeCommunicationActionCreators */])('AUTH_WRAPPER:AUTHORIZATION', 'AUTH_WRAPPER:AUTHORIZATION_SUCCESS', 'AUTH_WRAPPER:AUTHORIZATION_FAIL'), _a.execute), authorizationSuccess = _a.completed, authorizationFail = _a.failed;
var _a;


/***/ }),

/***/ "jxxC":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("lcwS")();
// imports


// module
exports.push([module.i, ".authentication {\n  display: -ms-flexbox;\n  display: flex;\n  width: 100%;\n  height: 100%;\n  -ms-flex-pack: center;\n      justify-content: center;\n  -ms-flex-align: center;\n      align-items: center; }\n", ""]);

// exports


/***/ }),

/***/ "kGNo":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__("vCxL");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("1n8/");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_shared_types_app__ = __webpack_require__("zGGS");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_router_dom__ = __webpack_require__("obMO");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__view_Layout_Layout__ = __webpack_require__("YNRd");





var Page404Module = /** @class */ (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["d" /* __extends */](Page404Module, _super);
    function Page404Module() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Page404Module.prototype.getRoutes = function () {
        return __WEBPACK_IMPORTED_MODULE_1_react__["createElement"](__WEBPACK_IMPORTED_MODULE_3_react_router_dom__["c" /* Route */], { key: "page404", component: __WEBPACK_IMPORTED_MODULE_4__view_Layout_Layout__["a" /* default */] });
    };
    return Page404Module;
}(__WEBPACK_IMPORTED_MODULE_2_shared_types_app__["a" /* Module */]));
/* harmony default export */ __webpack_exports__["a"] = (Page404Module);


/***/ }),

/***/ "mWM7":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux__ = __webpack_require__("fpuT");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__communication__ = __webpack_require__("4E1E");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__data__ = __webpack_require__("hmx9");



var reducer = Object(__WEBPACK_IMPORTED_MODULE_0_redux__["combineReducers"])({
    communication: __WEBPACK_IMPORTED_MODULE_1__communication__["a" /* default */],
    data: __WEBPACK_IMPORTED_MODULE_2__data__["a" /* default */],
});
/* harmony default export */ __webpack_exports__["a"] = (reducer);


/***/ }),

/***/ "t2rD":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("lcwS")();
// imports


// module
exports.push([module.i, ".messenger {\n  display: -ms-flexbox;\n  display: flex;\n  height: 100%;\n  -ms-flex-align: stretch;\n      align-items: stretch; }\n  .messenger__users-list {\n    min-width: 17.5rem;\n    padding: 0.4rem; }\n  .messenger__splitter {\n    z-index: 1;\n    width: 0.3rem;\n    box-shadow: 2px 0 2px 0 #bebebe; }\n  .messenger__messages {\n    -ms-flex-positive: 1;\n        flex-grow: 1;\n    min-width: 25.5rem;\n    padding: 0.4rem;\n    background-color: #ebebeb; }\n", ""]);

// exports


/***/ }),

/***/ "uHT9":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("jxxC");
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_modules__ = __webpack_require__("R7Uq");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_modules_App__ = __webpack_require__("6n15");





function getRoutes(modules) {
    return (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_2_react_router_dom__["c" /* Route */], { path: __WEBPACK_IMPORTED_MODULE_1_core_constants__["a" /* ROUTES_PREFIX */] },
        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_4_modules_App__["a" /* App */], null,
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_2_react_router_dom__["d" /* Switch */], null,
                modules.map(function (module) { return module.getRoutes ? module.getRoutes() : null; }),
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_2_react_router_dom__["b" /* Redirect */], { exact: true, from: __WEBPACK_IMPORTED_MODULE_1_core_constants__["a" /* ROUTES_PREFIX */], to: __WEBPACK_IMPORTED_MODULE_1_core_constants__["a" /* ROUTES_PREFIX */] + "/messenger" }),
                new __WEBPACK_IMPORTED_MODULE_3_modules__["c" /* Page404Module */]().getRoutes()))));
}
/* harmony default export */ __webpack_exports__["a"] = (getRoutes);


/***/ }),

/***/ "yMWN":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = configureDeps;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_services_api_Api__ = __webpack_require__("OAT2");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_services_storage_Storage__ = __webpack_require__("OFRG");


function configureDeps(store) {
    var api = new __WEBPACK_IMPORTED_MODULE_0_services_api_Api__["a" /* default */]('/api');
    var storage = new __WEBPACK_IMPORTED_MODULE_1_services_storage_Storage__["a" /* default */]();
    return { api: api, storage: storage };
}


/***/ }),

/***/ "z+Lz":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__actions__ = __webpack_require__("a6NI");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__selectors__ = __webpack_require__("e6Jj");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__reducers__ = __webpack_require__("mWM7");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__sagas__ = __webpack_require__("6Wpl");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_3__sagas__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_2__reducers__["a"]; });
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_1__selectors__; });
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__actions__; });







/***/ }),

/***/ "ztwX":
/***/ (function(module, exports) {



/***/ })

},[0]);
//# sourceMappingURL=app-c8dfaa0f603805226544.bundle.js.map