webpackJsonp([0],{

/***/ "09fv":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("lcwS")();
// imports


// module
exports.push([module.i, ".login-form {\n  padding: 1rem 1.5rem;\n  background-color: white; }\n  .login-form__title {\n    margin: 0;\n    margin-bottom: 1rem; }\n  .login-form__row {\n    text-align: center; }\n  .login-form__footer {\n    margin: 1rem 0;\n    text-align: center; }\n", ""]);

// exports


/***/ }),

/***/ "2pZJ":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("lcwS")();
// imports


// module
exports.push([module.i, ".signinup-form {\n  position: relative;\n  display: block;\n  overflow: hidden;\n  width: 100%;\n  min-width: 20rem;\n  max-width: 25rem;\n  border-radius: 2px;\n  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.24), 0 1px 2px 0 rgba(0, 0, 0, 0.12); }\n  .signinup-form__tabs {\n    position: relative;\n    display: -ms-flexbox;\n    display: flex;\n    margin: 0;\n    padding: 0;\n    list-style: none;\n    -ms-flex-pack: justify;\n        justify-content: space-between; }\n  .signinup-form__tab {\n    -ms-flex-positive: 1;\n        flex-grow: 1;\n    width: 15%;\n    height: 3rem;\n    text-align: center;\n    text-transform: uppercase;\n    text-overflow: ellipsis;\n    line-height: 3rem; }\n  .signinup-form__tab-title {\n    display: block;\n    overflow: hidden;\n    width: 100%;\n    height: 100%;\n    cursor: pointer;\n    color: white;\n    background-color: #2196f3; }\n  .signinup-form__loading {\n    position: absolute;\n    z-index: 1;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0;\n    background-color: white; }\n", ""]);

// exports


/***/ }),

/***/ "3tRS":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__("vCxL");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("1n8/");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_bem_cn__ = __webpack_require__("6QlO");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_bem_cn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_bem_cn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_decko__ = __webpack_require__("4eBB");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_decko___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_decko__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_redux__ = __webpack_require__("jYI/");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_redux__ = __webpack_require__("fpuT");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react_router_dom__ = __webpack_require__("obMO");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__redux__ = __webpack_require__("JV30");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__LoginForm_LoginForm__ = __webpack_require__("CxRX");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__SignInUpForm_scss__ = __webpack_require__("JEaY");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__SignInUpForm_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9__SignInUpForm_scss__);










function mapState(state) {
    return {
        communication: __WEBPACK_IMPORTED_MODULE_7__redux__["b" /* selectors */].getCommunicationsState(state),
        authData: __WEBPACK_IMPORTED_MODULE_7__redux__["b" /* selectors */].getDataState(state),
    };
}
function mapDispatch(dispatch) {
    return Object(__WEBPACK_IMPORTED_MODULE_5_redux__["bindActionCreators"])({}, dispatch);
}
var b = __WEBPACK_IMPORTED_MODULE_2_bem_cn__('signinup-form');
var SignInUpForm = /** @class */ (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["d" /* __extends */](SignInUpForm, _super);
    function SignInUpForm() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SignInUpForm.prototype.componentWillReceiveProps = function (nextProps) {
        if (nextProps.authData.hasAccess !== this.props.authData.hasAccess) {
            this.props.onAccessChange(nextProps.authData.hasAccess);
        }
    };
    SignInUpForm.prototype.render = function () {
        var match = this.props.routeProps.match;
        var currentPath = this.props.routeProps.match.url;
        var pathname = currentPath.substring(0, currentPath.lastIndexOf('/'));
        return (__WEBPACK_IMPORTED_MODULE_1_react__["createElement"]("div", { className: b() },
            __WEBPACK_IMPORTED_MODULE_1_react__["createElement"]("ul", { className: b('tabs')() },
                __WEBPACK_IMPORTED_MODULE_1_react__["createElement"]("li", { className: b('tab')() },
                    __WEBPACK_IMPORTED_MODULE_1_react__["createElement"]("a", { href: "login", className: b('tab-title', { active: match.params.tab === 'login' ? true : false })(), onClick: this.swapForm }, "Log In")),
                __WEBPACK_IMPORTED_MODULE_1_react__["createElement"]("li", { className: b('tab')() },
                    __WEBPACK_IMPORTED_MODULE_1_react__["createElement"]("a", { href: "register", className: b('tab-title', { active: match.params.tab === 'register' ? true : false })(), onClick: this.swapForm }, "Sign Up")),
                __WEBPACK_IMPORTED_MODULE_1_react__["createElement"]("div", { className: b('indicator')() })),
            __WEBPACK_IMPORTED_MODULE_1_react__["createElement"](__WEBPACK_IMPORTED_MODULE_6_react_router_dom__["d" /* Switch */], null,
                __WEBPACK_IMPORTED_MODULE_1_react__["createElement"](__WEBPACK_IMPORTED_MODULE_6_react_router_dom__["c" /* Route */], { path: pathname + "/login" },
                    __WEBPACK_IMPORTED_MODULE_1_react__["createElement"](__WEBPACK_IMPORTED_MODULE_8__LoginForm_LoginForm__["a" /* default */], null)),
                __WEBPACK_IMPORTED_MODULE_1_react__["createElement"](__WEBPACK_IMPORTED_MODULE_6_react_router_dom__["c" /* Route */], { path: pathname + "/register", render: this.registerForm }),
                __WEBPACK_IMPORTED_MODULE_1_react__["createElement"](__WEBPACK_IMPORTED_MODULE_6_react_router_dom__["b" /* Redirect */], { from: "" + pathname, to: pathname + "/login" }))));
    };
    SignInUpForm.prototype.registerForm = function () {
        return (__WEBPACK_IMPORTED_MODULE_1_react__["createElement"]("div", { className: b('signup')() },
            __WEBPACK_IMPORTED_MODULE_1_react__["createElement"]("form", { action: "", method: "post" }, "reg")));
    };
    SignInUpForm.prototype.swapForm = function (event) {
        event.preventDefault();
        this.props.routeProps.history.replace("./" + event.currentTarget.getAttribute('href'));
    };
    __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __decorate */]([
        __WEBPACK_IMPORTED_MODULE_3_decko__["bind"]
    ], SignInUpForm.prototype, "registerForm", null);
    __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __decorate */]([
        __WEBPACK_IMPORTED_MODULE_3_decko__["bind"]
    ], SignInUpForm.prototype, "swapForm", null);
    return SignInUpForm;
}(__WEBPACK_IMPORTED_MODULE_1_react__["PureComponent"]));
/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_4_react_redux__["b" /* connect */])(mapState, {})(SignInUpForm));


/***/ }),

/***/ "9npF":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux__ = __webpack_require__("fpuT");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_shared_helpers_redux__ = __webpack_require__("CmXq");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__initial__ = __webpack_require__("lyPj");



/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_0_redux__["combineReducers"])({
    authentication: Object(__WEBPACK_IMPORTED_MODULE_1_shared_helpers_redux__["c" /* makeCommunicationReducer */])('SIGN_IN_UP_FORM:AUTHENTICATION', 'SIGN_IN_UP_FORM:AUTHENTICATION_SUCCESS', 'SIGN_IN_UP_FORM:AUTHENTICATION_FAIL', __WEBPACK_IMPORTED_MODULE_2__initial__["a" /* default */].communications.authentication),
}));


/***/ }),

/***/ "CxRX":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__("vCxL");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("1n8/");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_bem_cn__ = __webpack_require__("6QlO");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_bem_cn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_bem_cn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_decko__ = __webpack_require__("4eBB");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_decko___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_decko__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_redux__ = __webpack_require__("jYI/");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_redux__ = __webpack_require__("fpuT");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__redux__ = __webpack_require__("JV30");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__LoginForm_scss__ = __webpack_require__("kWgS");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__LoginForm_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__LoginForm_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_shared_view_elements_input__ = __webpack_require__("n0hT");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_shared_view_elements_button__ = __webpack_require__("vMyL");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_shared_view_elements_preloader__ = __webpack_require__("ytdM");











function mapState(state) {
    return {
        loginFormData: __WEBPACK_IMPORTED_MODULE_6__redux__["b" /* selectors */].getLoginData(state),
        communication: __WEBPACK_IMPORTED_MODULE_6__redux__["b" /* selectors */].getCommunicationsState(state),
    };
}
function mapDispatch(dispatch) {
    return Object(__WEBPACK_IMPORTED_MODULE_5_redux__["bindActionCreators"])({
        authentication: __WEBPACK_IMPORTED_MODULE_6__redux__["a" /* actions */].authentication,
        changeLoginEmail: __WEBPACK_IMPORTED_MODULE_6__redux__["a" /* actions */].changeLoginEmail,
        changeLoginPassword: __WEBPACK_IMPORTED_MODULE_6__redux__["a" /* actions */].changeLoginPassword,
    }, dispatch);
}
var LoginForm = /** @class */ (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["d" /* __extends */](LoginForm, _super);
    function LoginForm() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    LoginForm.prototype.render = function () {
        var b = __WEBPACK_IMPORTED_MODULE_2_bem_cn___default()('login-form');
        var authStatus = this.props.communication.authentication;
        return (__WEBPACK_IMPORTED_MODULE_1_react__["createElement"]("div", { className: b() },
            __WEBPACK_IMPORTED_MODULE_1_react__["createElement"]("form", { action: "", method: "post", onSubmit: this.onSubmit },
                __WEBPACK_IMPORTED_MODULE_1_react__["createElement"]("h2", { className: b('title')() }, "Log In"),
                __WEBPACK_IMPORTED_MODULE_1_react__["createElement"]("div", { className: b('row')() },
                    __WEBPACK_IMPORTED_MODULE_1_react__["createElement"](__WEBPACK_IMPORTED_MODULE_8_shared_view_elements_input__["a" /* default */], { type: "email", name: "email", placeholder: "Email", onChange: this.changeLoginEmail, disabled: authStatus.isRequesting, required: true })),
                __WEBPACK_IMPORTED_MODULE_1_react__["createElement"]("div", { className: b('row')() },
                    __WEBPACK_IMPORTED_MODULE_1_react__["createElement"](__WEBPACK_IMPORTED_MODULE_8_shared_view_elements_input__["a" /* default */], { type: "password", name: "password", placeholder: "Password", onChange: this.changeLoginPassword, disabled: authStatus.isRequesting, required: true })),
                __WEBPACK_IMPORTED_MODULE_1_react__["createElement"]("div", { className: b('footer')() },
                    __WEBPACK_IMPORTED_MODULE_1_react__["createElement"](__WEBPACK_IMPORTED_MODULE_9_shared_view_elements_button__["a" /* default */], { type: "submit" }, authStatus.isRequesting ? __WEBPACK_IMPORTED_MODULE_1_react__["createElement"](__WEBPACK_IMPORTED_MODULE_10_shared_view_elements_preloader__["a" /* default */], { size: "20", altColor: true }) : 'Submit')))));
    };
    LoginForm.prototype.onSubmit = function (event) {
        event.preventDefault();
        this.props.authentication(this.props.loginFormData);
    };
    LoginForm.prototype.changeLoginEmail = function (event) {
        this.props.changeLoginEmail(event.currentTarget.value);
    };
    LoginForm.prototype.changeLoginPassword = function (event) {
        this.props.changeLoginPassword(event.currentTarget.value);
    };
    __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __decorate */]([
        __WEBPACK_IMPORTED_MODULE_3_decko__["bind"]
    ], LoginForm.prototype, "onSubmit", null);
    __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __decorate */]([
        __WEBPACK_IMPORTED_MODULE_3_decko__["bind"]
    ], LoginForm.prototype, "changeLoginEmail", null);
    __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __decorate */]([
        __WEBPACK_IMPORTED_MODULE_3_decko__["bind"]
    ], LoginForm.prototype, "changeLoginPassword", null);
    return LoginForm;
}(__WEBPACK_IMPORTED_MODULE_1_react__["Component"]));
/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_4_react_redux__["b" /* connect */])(mapState, mapDispatch)(LoginForm));


/***/ }),

/***/ "HXL3":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("lcwS")();
// imports


// module
exports.push([module.i, ".input-group {\n  clear: both;\n  overflow: hidden;\n  line-height: 1.6; }\n  .input-group__label {\n    position: relative;\n    display: block;\n    margin-top: 0.9rem;\n    margin-bottom: 0.9rem; }\n  .input-group__field {\n    box-sizing: content-box;\n    width: 100%;\n    height: 3rem;\n    margin: 0 0 0.4rem;\n    padding: 0;\n    transition: box-shadow 0.3s, border 0.3s;\n    border: none;\n    border-bottom: 1px solid #9e9e9e;\n    border-radius: 0;\n    outline: none;\n    background-color: transparent;\n    box-shadow: none;\n    font-size: 1rem; }\n    .input-group__field::after {\n      position: absolute;\n      display: block;\n      content: ''; }\n    .input-group__field:focus {\n      border-bottom: 1px solid #2196f3;\n      box-shadow: 0 1px 0 0 #2196f3; }\n  .input-group__placeholder {\n    position: absolute;\n    top: 0;\n    left: 0;\n    cursor: text;\n    transition: transform 0.2s ease-out, color 0.2s ease-out;\n    transform: translateY(12px);\n    transform-origin: 0 100%;\n    text-align: initial;\n    color: #9e9e9e;\n    font-size: 1rem; }\n    .input-group__placeholder_focus {\n      transform: translateY(-14px) scale(0.8);\n      transform-origin: 0 0; }\n  .input-group__field:focus + .input-group__placeholder {\n    color: #2196f3; }\n", ""]);

// exports


/***/ }),

/***/ "IDjt":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = changeLoginEmail;
/* harmony export (immutable) */ __webpack_exports__["b"] = changeLoginPassword;
function changeLoginEmail(payload) {
    return {
        type: 'SIGN_IN_UP_FORM:LOGIN_EMAIL_CHANGE',
        payload: payload,
    };
}
function changeLoginPassword(payload) {
    return {
        type: 'SIGN_IN_UP_FORM:LOGIN_PASSWORD_CHANGE',
        payload: payload,
    };
}


/***/ }),

/***/ "JEaY":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("2pZJ");
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__("b3GF")(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../../../../../node_modules/css-loader/index.js?importLoaders=1!../../../../../../node_modules/postcss-loader/index.js??ref--4-2!../../../../../../node_modules/sass-loader/lib/loader.js!../../../../../../node_modules/postcss-loader/index.js??ref--4-4!./SignInUpForm.scss", function() {
			var newContent = require("!!../../../../../../node_modules/css-loader/index.js?importLoaders=1!../../../../../../node_modules/postcss-loader/index.js??ref--4-2!../../../../../../node_modules/sass-loader/lib/loader.js!../../../../../../node_modules/postcss-loader/index.js??ref--4-4!./SignInUpForm.scss");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "JV30":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__reducers__ = __webpack_require__("n7YB");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__actions__ = __webpack_require__("Shh8");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__selectors__ = __webpack_require__("Yizm");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__sagas__ = __webpack_require__("XN9h");
/* unused harmony reexport reducer */
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_2__selectors__; });
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__actions__; });
/* unused harmony reexport getSaga */







/***/ }),

/***/ "OTgg":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("b1te");
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__("b3GF")(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../../../../node_modules/css-loader/index.js?importLoaders=1!../../../../../node_modules/postcss-loader/index.js??ref--4-2!../../../../../node_modules/sass-loader/lib/loader.js!../../../../../node_modules/postcss-loader/index.js??ref--4-4!./index.scss", function() {
			var newContent = require("!!../../../../../node_modules/css-loader/index.js?importLoaders=1!../../../../../node_modules/postcss-loader/index.js??ref--4-2!../../../../../node_modules/sass-loader/lib/loader.js!../../../../../node_modules/postcss-loader/index.js??ref--4-4!./index.scss");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "Shh8":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__communication__ = __webpack_require__("VlAp");
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "authentication", function() { return __WEBPACK_IMPORTED_MODULE_0__communication__["a"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "authenticationSuccess", function() { return __WEBPACK_IMPORTED_MODULE_0__communication__["c"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "authenticationFail", function() { return __WEBPACK_IMPORTED_MODULE_0__communication__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__edit__ = __webpack_require__("IDjt");
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "changeLoginEmail", function() { return __WEBPACK_IMPORTED_MODULE_1__edit__["a"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "changeLoginPassword", function() { return __WEBPACK_IMPORTED_MODULE_1__edit__["b"]; });


// export * from './ui';


/***/ }),

/***/ "VlAp":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return authentication; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return authenticationSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return authenticationFail; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_shared_helpers_redux__ = __webpack_require__("CmXq");

var authentication = (_a = Object(__WEBPACK_IMPORTED_MODULE_0_shared_helpers_redux__["b" /* makeCommunicationActionCreators */])('SIGN_IN_UP_FORM:AUTHENTICATION', 'SIGN_IN_UP_FORM:AUTHENTICATION_SUCCESS', 'SIGN_IN_UP_FORM:AUTHENTICATION_FAIL'), _a.execute), authenticationSuccess = _a.completed, authenticationFail = _a.failed;
var _a;


/***/ }),

/***/ "XN9h":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export authentication */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__("vCxL");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_redux_saga_effects__ = __webpack_require__("91fl");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_shared_helpers_getErrorMsg__ = __webpack_require__("8fBH");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__actions__ = __webpack_require__("Shh8");




var authenticationType = 'SIGN_IN_UP_FORM:AUTHENTICATION';
function getSaga(deps) {
    return function saga() {
        return __WEBPACK_IMPORTED_MODULE_0_tslib__["e" /* __generator */](this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, Object(__WEBPACK_IMPORTED_MODULE_1_redux_saga_effects__["c" /* takeLatest */])(authenticationType, authentication, deps)];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    };
}
function authentication(_a, action) {
    var api = _a.api, storage = _a.storage;
    var LoginData, accessInfo, message, error_1;
    return __WEBPACK_IMPORTED_MODULE_0_tslib__["e" /* __generator */](this, function (_b) {
        switch (_b.label) {
            case 0:
                LoginData = action.payload;
                _b.label = 1;
            case 1:
                _b.trys.push([1, 8, , 10]);
                return [4 /*yield*/, Object(__WEBPACK_IMPORTED_MODULE_1_redux_saga_effects__["a" /* call */])(api.authentication, LoginData)];
            case 2:
                accessInfo = _b.sent();
                if (!accessInfo) return [3 /*break*/, 5];
                return [4 /*yield*/, Object(__WEBPACK_IMPORTED_MODULE_1_redux_saga_effects__["a" /* call */])(storage.writeAccessInfo, accessInfo)];
            case 3:
                _b.sent();
                return [4 /*yield*/, Object(__WEBPACK_IMPORTED_MODULE_1_redux_saga_effects__["b" /* put */])(__WEBPACK_IMPORTED_MODULE_3__actions__["authenticationSuccess"]({ hasAccess: true }))];
            case 4:
                _b.sent();
                return [3 /*break*/, 7];
            case 5:
                message = 'Wrong Email or Password';
                return [4 /*yield*/, Object(__WEBPACK_IMPORTED_MODULE_1_redux_saga_effects__["b" /* put */])(__WEBPACK_IMPORTED_MODULE_3__actions__["authenticationFail"](Object(__WEBPACK_IMPORTED_MODULE_2_shared_helpers_getErrorMsg__["a" /* default */])(message), { hasAccess: false }))];
            case 6:
                _b.sent();
                return [2 /*return*/];
            case 7: return [3 /*break*/, 10];
            case 8:
                error_1 = _b.sent();
                return [4 /*yield*/, Object(__WEBPACK_IMPORTED_MODULE_1_redux_saga_effects__["b" /* put */])(__WEBPACK_IMPORTED_MODULE_3__actions__["authenticationFail"](Object(__WEBPACK_IMPORTED_MODULE_2_shared_helpers_getErrorMsg__["a" /* default */])(error_1), { hasAccess: false }))];
            case 9:
                _b.sent();
                return [3 /*break*/, 10];
            case 10: return [2 /*return*/];
        }
    });
}
/* harmony default export */ __webpack_exports__["a"] = (getSaga);


/***/ }),

/***/ "Yizm":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["getSignInUpFormState"] = getSignInUpFormState;
/* harmony export (immutable) */ __webpack_exports__["getLoginData"] = getLoginData;
/* harmony export (immutable) */ __webpack_exports__["getCommunicationsState"] = getCommunicationsState;
/* harmony export (immutable) */ __webpack_exports__["getDataState"] = getDataState;
function getSignInUpFormState(state) {
    return state.signInUpForm;
}
function getLoginData(state) {
    return getSignInUpFormState(state).edit.loginForm;
}
function getCommunicationsState(state) {
    return getSignInUpFormState(state).communications;
}
function getDataState(state) {
    return getSignInUpFormState(state).data;
}


/***/ }),

/***/ "b1te":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("lcwS")();
// imports


// module
exports.push([module.i, ".button {\n  position: relative;\n  z-index: 1;\n  display: inline-block;\n  overflow: hidden;\n  height: 2.5rem;\n  padding: 0 2rem;\n  cursor: pointer;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  transition: all 0.3s ease-out;\n  text-align: center;\n  vertical-align: middle;\n  text-decoration: none;\n  letter-spacing: 0.5px;\n  text-transform: uppercase;\n  color: #fff;\n  border: none;\n  border-radius: 2px;\n  outline: 0;\n  background-color: #2196f3;\n  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.12), 0 1px 5px 0 rgba(0, 0, 0, 0.2);\n  line-height: 2.5rem; }\n  .button:hover {\n    background-color: #43a6f5; }\n", ""]);

// exports


/***/ }),

/***/ "gQoG":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = dataReducer;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__initial__ = __webpack_require__("lyPj");

// tslint:disable-next-line:max-line-length
function dataReducer(state, action) {
    if (state === void 0) { state = __WEBPACK_IMPORTED_MODULE_0__initial__["a" /* default */].data; }
    switch (action.type) {
        case 'SIGN_IN_UP_FORM:AUTHENTICATION': {
            return state;
        }
        case 'SIGN_IN_UP_FORM:AUTHENTICATION_SUCCESS': {
            return {
                hasAccess: true,
                message: null,
            };
        }
        case 'SIGN_IN_UP_FORM:AUTHENTICATION_FAIL': {
            return {
                hasAccess: false,
                message: action.error,
            };
        }
        default: return state;
    }
}


/***/ }),

/***/ "kWgS":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("09fv");
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__("b3GF")(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../../../../../node_modules/css-loader/index.js?importLoaders=1!../../../../../../node_modules/postcss-loader/index.js??ref--4-2!../../../../../../node_modules/sass-loader/lib/loader.js!../../../../../../node_modules/postcss-loader/index.js??ref--4-4!./LoginForm.scss", function() {
			var newContent = require("!!../../../../../../node_modules/css-loader/index.js?importLoaders=1!../../../../../../node_modules/postcss-loader/index.js??ref--4-2!../../../../../../node_modules/sass-loader/lib/loader.js!../../../../../../node_modules/postcss-loader/index.js??ref--4-4!./LoginForm.scss");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "lyPj":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var initialState = {
    communications: {
        authentication: {
            isRequesting: false,
            error: '',
        },
    },
    data: {
        hasAccess: null,
        message: null,
    },
    edit: {
        loginForm: {
            email: '',
            password: '',
        },
    },
    ui: {},
};
/* harmony default export */ __webpack_exports__["a"] = (initialState);


/***/ }),

/***/ "n0hT":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__("vCxL");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("1n8/");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_bem_cn__ = __webpack_require__("6QlO");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_bem_cn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_bem_cn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__index_scss__ = __webpack_require__("s2J5");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__index_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__index_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_decko__ = __webpack_require__("4eBB");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_decko___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_decko__);





var Input = /** @class */ (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["d" /* __extends */](Input, _super);
    function Input(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            focused: false,
            filled: false,
        };
        return _this;
    }
    Input.prototype.render = function () {
        var b = __WEBPACK_IMPORTED_MODULE_2_bem_cn___default()('input-group');
        var props = this.props;
        var state = this.state;
        return (__WEBPACK_IMPORTED_MODULE_1_react__["createElement"]("div", { className: b() },
            __WEBPACK_IMPORTED_MODULE_1_react__["createElement"]("label", { className: b('label')() },
                __WEBPACK_IMPORTED_MODULE_1_react__["createElement"]("input", { className: b('field')(), type: props.type, name: props.name, minLength: props.minLength, maxLength: props.maxLength, step: props.step, disabled: props.disabled, pattern: props.pattern, required: props.required, onFocus: this.onFocus, onBlur: this.onBlur, onChange: this.isFilled }),
                __WEBPACK_IMPORTED_MODULE_1_react__["createElement"]("span", { className: b('placeholder', { focus: state.focused || state.filled ? true : false })() }, props.placeholder))));
    };
    Input.prototype.onFocus = function (event) {
        this.setState({ focused: true });
    };
    Input.prototype.onBlur = function (event) {
        this.setState({ focused: false });
    };
    Input.prototype.isFilled = function (event) {
        this.setState({
            filled: event.target.value ? true : false,
        });
        if (this.props.onChange) {
            this.props.onChange(event);
        }
    };
    __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __decorate */]([
        __WEBPACK_IMPORTED_MODULE_4_decko__["bind"]
    ], Input.prototype, "onFocus", null);
    __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __decorate */]([
        __WEBPACK_IMPORTED_MODULE_4_decko__["bind"]
    ], Input.prototype, "onBlur", null);
    __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __decorate */]([
        __WEBPACK_IMPORTED_MODULE_4_decko__["bind"]
    ], Input.prototype, "isFilled", null);
    return Input;
}(__WEBPACK_IMPORTED_MODULE_1_react__["Component"]));
/* harmony default export */ __webpack_exports__["a"] = (Input);


/***/ }),

/***/ "n7YB":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux__ = __webpack_require__("fpuT");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__communication__ = __webpack_require__("9npF");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__data__ = __webpack_require__("gQoG");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__edit__ = __webpack_require__("qorj");




/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_0_redux__["combineReducers"])({
    communications: __WEBPACK_IMPORTED_MODULE_1__communication__["a" /* default */],
    data: __WEBPACK_IMPORTED_MODULE_2__data__["a" /* default */],
    edit: __WEBPACK_IMPORTED_MODULE_3__edit__["a" /* default */],
}));


/***/ }),

/***/ "op1A":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return makeFeatureEntry; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__("vCxL");

// function getFeatureEntry<C extends null, A extends null, S extends null>(
//   containers: C, actions: A, selectors: S, redux?: IReduxEntry): ResultEntry<{}, {}, {}>;
function makeFeatureEntry(containers, actions, selectors, redux) {
    return __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __assign */]({ actions: actions, selectors: selectors, containers: containers }, redux);
}



/***/ }),

/***/ "qorj":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__initial__ = __webpack_require__("lyPj");

// tslint:disable-next-line:max-line-length
function editReducer(state, action) {
    if (state === void 0) { state = __WEBPACK_IMPORTED_MODULE_0__initial__["a" /* default */].edit; }
    switch (action.type) {
        case 'SIGN_IN_UP_FORM:LOGIN_EMAIL_CHANGE':
            return {
                loginForm: {
                    email: action.payload,
                    password: state.loginForm.password,
                },
            };
        case 'SIGN_IN_UP_FORM:LOGIN_PASSWORD_CHANGE':
            return {
                loginForm: {
                    email: state.loginForm.email,
                    password: action.payload,
                },
            };
        default:
            return state;
    }
}
/* harmony default export */ __webpack_exports__["a"] = (editReducer);


/***/ }),

/***/ "r++x":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "entry", function() { return entry; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_shared_helpers_makeFeatureEntry__ = __webpack_require__("op1A");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__redux_reducers__ = __webpack_require__("n7YB");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__redux_sagas__ = __webpack_require__("XN9h");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__view_containers_SignInUpForm_SignInUpForm__ = __webpack_require__("3tRS");




var containers = { SignInUpForm: __WEBPACK_IMPORTED_MODULE_3__view_containers_SignInUpForm_SignInUpForm__["a" /* default */] };
var entry = Object(__WEBPACK_IMPORTED_MODULE_0_shared_helpers_makeFeatureEntry__["a" /* makeFeatureEntry */])(containers, null, null, {
    reducers: { signInUpForm: __WEBPACK_IMPORTED_MODULE_1__redux_reducers__["a" /* default */] },
    sagas: [__WEBPACK_IMPORTED_MODULE_2__redux_sagas__["a" /* default */]],
});



/***/ }),

/***/ "s2J5":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("HXL3");
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__("b3GF")(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../../../../node_modules/css-loader/index.js?importLoaders=1!../../../../../node_modules/postcss-loader/index.js??ref--4-2!../../../../../node_modules/sass-loader/lib/loader.js!../../../../../node_modules/postcss-loader/index.js??ref--4-4!./index.scss", function() {
			var newContent = require("!!../../../../../node_modules/css-loader/index.js?importLoaders=1!../../../../../node_modules/postcss-loader/index.js??ref--4-2!../../../../../node_modules/sass-loader/lib/loader.js!../../../../../node_modules/postcss-loader/index.js??ref--4-4!./index.scss");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "vMyL":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__("vCxL");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("1n8/");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_bem_cn__ = __webpack_require__("6QlO");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_bem_cn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_bem_cn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__index_scss__ = __webpack_require__("OTgg");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__index_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__index_scss__);




var Button = /** @class */ (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["d" /* __extends */](Button, _super);
    function Button() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Button.prototype.render = function () {
        var b = __WEBPACK_IMPORTED_MODULE_2_bem_cn___default()('button');
        var _a = this.props, _b = _a.type, type = _b === void 0 ? 'button' : _b, disabled = _a.disabled, onClick = _a.onClick, children = _a.children;
        return (__WEBPACK_IMPORTED_MODULE_1_react__["createElement"]("button", { className: b(), type: type, disabled: disabled, onClick: onClick }, children));
    };
    return Button;
}(__WEBPACK_IMPORTED_MODULE_1_react__["Component"]));
/* harmony default export */ __webpack_exports__["a"] = (Button);


/***/ })

});
//# sourceMappingURL=signInUpForm-93c42f06eff083ec8104.bundle.js.map