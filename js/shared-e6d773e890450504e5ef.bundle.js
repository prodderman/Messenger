webpackJsonp([3],{

/***/ "/1sd":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export default */
function makeResetStateReducer(type, initialState) {
    return function (state, action) { return action.type === type ? initialState : state; };
}


/***/ }),

/***/ "0PKu":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("lcwS")();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/***/ }),

/***/ "20xw":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export default */
function initField(value, error) {
    if (error === void 0) { error = ''; }
    return { value: value, error: error };
}


/***/ }),

/***/ "2gPX":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export multiReducer */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__("vCxL");

function multiReducer(reducer) {
    return function (state, action) {
        if (state === void 0) { state = {}; }
        var _instanceKey = action._instanceKey;
        if (!_instanceKey || !state[_instanceKey]) {
            return state;
        }
        var nextInstanceState = reducer(state[_instanceKey], action);
        return __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __assign */]({}, state, (_a = {}, _a[_instanceKey] = nextInstanceState, _a));
        var _a;
    };
}


/***/ }),

/***/ "4Gek":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = reducer;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__("vCxL");

function insertStateByKeyPath(state, keyPath, instanceKey, instanceState) {
    var keyPathToState = keyPath.slice();
    var key = keyPathToState.shift();
    if (!(state instanceof Object)) {
        return state;
    }
    if (key === undefined) {
        return __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __assign */]({}, state, (_a = {}, _a[instanceKey] = instanceState, _a));
    }
    return __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __assign */]({}, state, (_b = {}, _b[key] = insertStateByKeyPath(state[key], keyPathToState, instanceKey, instanceState), _b));
    var _a, _b;
}
function reducer(state, action) {
    switch (action.type) {
        case '@@MULTI_CONNECT:ADD_INSTANCE': {
            var _a = action.payload, initialState = _a.initialState, instanceKey = _a.instanceKey, keyPathToState = _a.keyPathToState;
            if (keyPathToState.reduce(function (prev, cur) { return prev[cur]; }, state)[instanceKey]) {
                return state;
            }
            return insertStateByKeyPath(state, keyPathToState, instanceKey, initialState);
        }
        case '@@MULTI_CONNECT:REMOVE_INSTANCE': {
            var _b = action.payload, instanceKey = _b.instanceKey, keyPathToState = _b.keyPathToState;
            return insertStateByKeyPath(state, keyPathToState, instanceKey, undefined);
        }
        default: return state;
    }
}


/***/ }),

/***/ "8fBH":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * @summary
 * Checks error, caught in try/catch block and returns correct error representation of that
 */
function getErrorMsg(error) {
    if (error instanceof Error) {
        return error.message;
    }
    return String(error);
}
/* harmony default export */ __webpack_exports__["a"] = (getErrorMsg);


/***/ }),

/***/ "BNaW":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export initialCommunicationField */
/* unused harmony export initCommunicationFields */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__("vCxL");

var initialCommunicationField = { isRequesting: false, error: '' };
function initCommunicationFields(fieldNames) {
    return fieldNames.reduce(function (communicationFields, fieldName) {
        return (__WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __assign */]({}, communicationFields, (_a = {}, _a[fieldName] = initialCommunicationField, _a)));
        var _a;
    }, {});
}


/***/ }),

/***/ "Bso0":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return mockUsers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return tokens; });
var mockUsers = [
    {
        "uid": 0,
        "username": "Ivan Ivanov",
        "email": "Ivan@mail.com",
        "password": "Ivan123",
        "tokens": null
    },
    {
        "uid": 1,
        "username": "Petr Petrov",
        "email": "Petr@mail.com",
        "password": "Petr123",
        "tokens": null
    }
];
var tokens = [{
        accessToken: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiIxIiwidXNlcm5hbWUiOiJJdmFuIEl2YW5vdiIsImVtYWlsIjoiSXZhbkBtYWlsLmNvbSJ9._TacXcZwNVqMjUl7C8kSAhVih2ZOaJJnBmvTP_3MHC0",
        refreshToken: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiIxIiwidXNlcm5hbWUiOiJJdmFuIEl2YW5vdiIsImVtYWlsIjoiSXZhbkBtYWlsLmNvbSJ9.jNgVxjM86vKK8djrZwt9t4rNdqusysYc0CYRnuQOAqs",
        timestamp: timestamp(1 / 48),
    }, {
        accessToken: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOjIsInVzZXJuYW1lIjoiUGV0ciBQZXRyb3YiLCJlbWFpbCI6IlBldHJAbWFpbC5jb20ifQ.2prUy3XtPLiASrrCTLBdql0XW5Q9-p0dnolG1l2ivSQ",
        refreshToken: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOjIsInVzZXJuYW1lIjoiUGV0ciBQZXRyb3YiLCJlbWFpbCI6IlBldHJAbWFpbC5jb20ifQ.9Kh4mLxQfaiKFT-SULn7Bob8meAYcXbVDLDTKRW1ayA",
        timestamp: timestamp(1 / 48),
    }];
function timestamp(time) {
    var today = new Date(Date.now());
    return today.setDate(today.getDate() + time);
}


/***/ }),

/***/ "BxZK":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export default */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__("vCxL");

function makeEditFieldReducer(type, initial, validator) {
    return function (state, action) {
        if (state === void 0) { state = initial; }
        if (type === action.type) {
            var _a = action.payload, error = _a.error, value = _a.value;
            // error from payload is more important, then error from passed validator
            var resError = validator && !error ? validator(action.payload, state) : error;
            return __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __assign */]({}, state, { value: value, error: resError });
        }
        else {
            return state;
        }
    };
}


/***/ }),

/***/ "ChIl":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export default */
function isSuccessedByState(prev, next) {
    return prev.isRequesting && !next.isRequesting && !next.error;
}


/***/ }),

/***/ "Cjn5":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("lcwS")();
// imports


// module
exports.push([module.i, ".preloader {\n  display: -ms-flexbox;\n  display: flex;\n  width: 100%;\n  height: 100%;\n  -ms-flex-pack: center;\n      justify-content: center;\n  -ms-flex-align: center;\n      align-items: center; }\n  .preloader__view {\n    animation: rotate 2.5s linear infinite; }\n  .preloader__circle {\n    transform-origin: center;\n    animation: dash 2.5s ease-in-out infinite;\n    stroke: #2196f3;\n    stroke-dasharray: 187;\n    stroke-dashoffset: 186; }\n  .preloader_alt-color .preloader__circle {\n    stroke: #fff; }\n\n@keyframes rotate {\n  0% {\n    transform: rotate(0deg); }\n  100% {\n    transform: rotate(360deg); } }\n\n@keyframes dash {\n  0% {\n    stroke-dashoffset: 186; }\n  50% {\n    transform: rotate(0deg);\n    stroke-dashoffset: 46.75; }\n  100% {\n    transform: rotate(360deg);\n    stroke-dashoffset: 186; } }\n", ""]);

// exports


/***/ }),

/***/ "CmXq":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__multiConnect__ = __webpack_require__("TRx0");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__communication__ = __webpack_require__("GCM4");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__communication__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_1__communication__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__field__ = __webpack_require__("Ftt2");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__composeReducers__ = __webpack_require__("mQLl");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_3__composeReducers__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__makeIdentityReducer__ = __webpack_require__("Qp0Z");
/* unused harmony reexport makeIdentityReducer */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__makeResetStateReducer__ = __webpack_require__("/1sd");
/* unused harmony reexport makeResetStateReducer */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__validateFields__ = __webpack_require__("Cqbo");
/* unused harmony reexport validateFields */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__isSuccessedByState__ = __webpack_require__("ChIl");
/* unused harmony reexport isSuccessedByState */










/***/ }),

/***/ "Cqbo":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export default */
function validateFields() {
    var fields = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        fields[_i] = arguments[_i];
    }
    return fields.every(function (field) { return !field.error; });
}


/***/ }),

/***/ "DOg2":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export multiConnect */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__("vCxL");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("1n8/");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types__ = __webpack_require__("5D9O");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_uuid__ = __webpack_require__("qQO4");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_uuid___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_uuid__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_decko__ = __webpack_require__("4eBB");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_decko___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_decko__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_redux__ = __webpack_require__("fpuT");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react_redux__ = __webpack_require__("jYI/");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__actions__ = __webpack_require__("F+K/");








var mountedContainersForInstance = {};
var multiConnect = function (keyPathToState, initialState, mapStateToProps, mapDispatchToProps) {
    // tslint:disable-next-line:max-line-length
    return function HOC(WrappedComponent) {
        var MultiConnector = /** @class */ (function (_super) {
            __WEBPACK_IMPORTED_MODULE_0_tslib__["d" /* __extends */](MultiConnector, _super);
            function MultiConnector(props, context) {
                var _this = _super.call(this, props, context) || this;
                _this.displayName = "(MultiConnect) " + WrappedComponent.displayName;
                _this.instanceKey = _this.props.instanceKey || __WEBPACK_IMPORTED_MODULE_3_uuid__();
                var mountedContainers = mountedContainersForInstance[_this.instanceKey] || 0;
                mountedContainersForInstance[_this.instanceKey] = mountedContainers + 1;
                _this.context.store.dispatch(Object(__WEBPACK_IMPORTED_MODULE_7__actions__["a" /* addInstance */])(_this.instanceKey, initialState, keyPathToState));
                _this.ConnectedComponent = Object(__WEBPACK_IMPORTED_MODULE_6_react_redux__["b" /* connect */])(_this.mapStateToProps, mapDispatchToProps ? _this.mapDispatchToProps : null)(WrappedComponent);
                return _this;
            }
            MultiConnector.prototype.componentWillUnmount = function () {
                var mountedContainers = mountedContainersForInstance[this.instanceKey] || 1;
                mountedContainersForInstance[this.instanceKey] = mountedContainers - 1;
                if (mountedContainers === 1) {
                    this.context.store.dispatch(Object(__WEBPACK_IMPORTED_MODULE_7__actions__["b" /* removeInstance */])(this.instanceKey, keyPathToState));
                }
            };
            MultiConnector.prototype.render = function () {
                var ConnectedComponent = this.ConnectedComponent;
                return __WEBPACK_IMPORTED_MODULE_1_react__["createElement"](ConnectedComponent, __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __assign */]({ instanceKey: this.instanceKey }, this.props));
            };
            MultiConnector.prototype.mapStateToProps = function (appState, ownProps) {
                var state = keyPathToState.reduce(function (prev, cur) { return prev ? prev[cur] : prev; }, appState);
                var instanceState = state ? state[this.instanceKey] : {};
                return mapStateToProps(instanceState, appState, ownProps);
            };
            MultiConnector.prototype.mapDispatchToProps = function (dispatch, ownProps) {
                if (!mapDispatchToProps) {
                    return {};
                }
                var actions = mapDispatchToProps(this.actionDecorator, ownProps);
                return Object(__WEBPACK_IMPORTED_MODULE_5_redux__["bindActionCreators"])(actions, dispatch);
            };
            MultiConnector.prototype.actionDecorator = function (action) {
                action._instanceKey = this.instanceKey;
                return action;
            };
            MultiConnector.contextTypes = {
                store: __WEBPACK_IMPORTED_MODULE_2_prop_types__["object"],
            };
            __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __decorate */]([
                __WEBPACK_IMPORTED_MODULE_4_decko__["bind"]
            ], MultiConnector.prototype, "mapStateToProps", null);
            __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __decorate */]([
                __WEBPACK_IMPORTED_MODULE_4_decko__["bind"]
            ], MultiConnector.prototype, "mapDispatchToProps", null);
            __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __decorate */]([
                __WEBPACK_IMPORTED_MODULE_4_decko__["bind"]
            ], MultiConnector.prototype, "actionDecorator", null);
            return MultiConnector;
        }(__WEBPACK_IMPORTED_MODULE_1_react__["PureComponent"]));
        return MultiConnector;
    };
};



/***/ }),

/***/ "F+K/":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = addInstance;
/* harmony export (immutable) */ __webpack_exports__["b"] = removeInstance;
function addInstance(instanceKey, initialState, keyPathToState) {
    return {
        type: '@@MULTI_CONNECT:ADD_INSTANCE',
        payload: { initialState: initialState, instanceKey: instanceKey, keyPathToState: keyPathToState },
    };
}
function removeInstance(instanceKey, keyPathToState) {
    return {
        type: '@@MULTI_CONNECT:REMOVE_INSTANCE',
        payload: { instanceKey: instanceKey, keyPathToState: keyPathToState },
    };
}


/***/ }),

/***/ "Ftt2":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__init__ = __webpack_require__("20xw");
/* unused harmony reexport initField */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__makeEditArrayFieldReducer__ = __webpack_require__("cgDV");
/* unused harmony reexport makeEditArrayFieldReducer */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__makeEditFieldReducer__ = __webpack_require__("BxZK");
/* unused harmony reexport makeEditFieldReducer */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__makeEditFieldsReducer__ = __webpack_require__("ISpN");
/* unused harmony reexport makeEditFieldsReducer */






/***/ }),

/***/ "GCM4":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__makeCommunicationActionCreators__ = __webpack_require__("GSjr");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__makeCommunicationActionCreators__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__makeCommunicationReducer__ = __webpack_require__("Uv3U");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__makeCommunicationReducer__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__init__ = __webpack_require__("BNaW");
/* unused harmony namespace reexport */





/***/ }),

/***/ "GSjr":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
function makeCommunicationActionCreators(executeType, completeType, failType) {
    return {
        execute: function (payload) {
            return { type: executeType, payload: payload };
        },
        completed: function (payload) {
            return { type: completeType, payload: payload };
        },
        failed: function (error, payload) {
            return { type: failType, payload: payload, error: error };
        },
    };
}
/* harmony default export */ __webpack_exports__["a"] = (makeCommunicationActionCreators);


/***/ }),

/***/ "IBqD":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("lcwS")();
// imports


// module
exports.push([module.i, "html {\n  color: #272727;\n  background: #f5f5f5;\n  font-family: Arial, sans-serif;\n  font-size: 16px; }\n\nbody {\n  margin: 0;\n  padding: 0;\n  font-size: 1rem; }\n\na {\n  text-decoration: none;\n  color: #272727; }\n  a:hover {\n    text-decoration: none;\n    color: black; }\n  a:focus {\n    text-decoration: none;\n    color: #272727; }\n\nhtml,\nbody,\n#root {\n  height: 100%; }\n", ""]);

// exports


/***/ }),

/***/ "ISpN":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__("vCxL");

function makeEditFieldsReducer(actionType) {
    return function (initialState, validators) {
        return (function (state, action) {
            if (state === void 0) { state = initialState; }
            switch (action.type) {
                case actionType: {
                    var _a = action.payload, error_1 = _a.error, field_1 = _a.field, value_1 = _a.value;
                    var resError = (function () {
                        if (error_1) {
                            return error_1;
                        }
                        else {
                            var validator = validators ? validators[field_1] : void 0;
                            return validator ? validator(__WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __assign */]({}, state[field_1], { value: value_1 }), state[field_1]) : '';
                        }
                    })();
                    return __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __assign */]({}, state[field_1], { value: value_1, error: resError });
                }
                default: {
                    return state;
                }
            }
        });
    };
}
/* unused harmony default export */ var _unused_webpack_default_export = (makeEditFieldsReducer);


/***/ }),

/***/ "Qp0Z":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export default */
function makeIdentityReducer(initial) {
    return function (state) {
        if (state === void 0) { state = initial; }
        return state;
    };
}


/***/ }),

/***/ "TRx0":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__reducer__ = __webpack_require__("4Gek");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__multiConnect__ = __webpack_require__("DOg2");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__multiReducer__ = __webpack_require__("2gPX");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__reducer__["a"]; });
/* unused harmony reexport multiConnect */
/* unused harmony reexport multiReducer */






/***/ }),

/***/ "Uv3U":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = makeCommunicationReducer;
function makeCommunicationReducer(executeType, completedType, failedType, initial) {
    return function (state, action) {
        if (state === void 0) { state = initial; }
        switch (action.type) {
            case executeType: return { error: '', isRequesting: true };
            case completedType: return { error: '', isRequesting: false };
            case failedType: return { error: action.error, isRequesting: false };
            default: return state;
        }
    };
}


/***/ }),

/***/ "bnui":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("Cjn5");
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

/***/ "cgDV":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export default */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__("vCxL");

function makeArrayFieldReducer(addType, removeType, updateType, initial, validator) {
    return function arrayFieldReducer(state, action) {
        if (state === void 0) { state = initial; }
        switch (action.type) {
            case addType: {
                var nextValue = state.value.concat([action.payload]);
                var error = validator ? validator(nextValue, state.value) : '';
                return __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __assign */]({}, state, { error: error, value: nextValue });
            }
            case removeType: {
                var payload = action.payload;
                var nextValue = state.value.slice(0, payload).concat(state.value.slice(payload + 1));
                var error = validator ? validator(nextValue, state.value) : '';
                return __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __assign */]({}, state, { error: error, value: nextValue });
            }
            case updateType: {
                var _a = action.payload, index = _a.index, item = _a.item;
                var nextValue = state.value.slice(0, index).concat([item], state.value.slice(index + 1));
                var error = validator ? validator(nextValue, state.value) : '';
                return __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __assign */]({}, state, { value: nextValue, error: error });
            }
            default: return state;
        }
    };
}


/***/ }),

/***/ "hhkA":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("IBqD");
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__("b3GF")(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../../../node_modules/css-loader/index.js?importLoaders=1!../../../../node_modules/postcss-loader/index.js??ref--4-2!../../../../node_modules/sass-loader/lib/loader.js!../../../../node_modules/postcss-loader/index.js??ref--4-4!./base.scss", function() {
			var newContent = require("!!../../../../node_modules/css-loader/index.js?importLoaders=1!../../../../node_modules/postcss-loader/index.js??ref--4-2!../../../../node_modules/sass-loader/lib/loader.js!../../../../node_modules/postcss-loader/index.js??ref--4-4!./base.scss");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "mQLl":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = composeReducers;
function composeReducers(reducers) {
    return function (state, action) {
        return reducers
            .reverse()
            .reduce(function (_state, reducer) { return reducer(_state, action); }, state);
    };
}


/***/ }),

/***/ "o185":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("0PKu");
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__("b3GF")(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../../../node_modules/css-loader/index.js?importLoaders=1!../../../../node_modules/postcss-loader/index.js??ref--4-2!../../../../node_modules/sass-loader/lib/loader.js!../../../../node_modules/postcss-loader/index.js??ref--4-4!./constants.scss", function() {
			var newContent = require("!!../../../../node_modules/css-loader/index.js?importLoaders=1!../../../../node_modules/postcss-loader/index.js??ref--4-2!../../../../node_modules/sass-loader/lib/loader.js!../../../../node_modules/postcss-loader/index.js??ref--4-4!./constants.scss");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "ytdM":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("1n8/");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_bem_cn__ = __webpack_require__("6QlO");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_bem_cn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_bem_cn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__index_scss__ = __webpack_require__("bnui");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__index_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__index_scss__);



var b = __WEBPACK_IMPORTED_MODULE_1_bem_cn___default()('preloader');
var Preloader = function (_a) {
    var _b = _a.size, size = _b === void 0 ? '65px' : _b, _c = _a.altColor, altColor = _c === void 0 ? false : _c;
    return (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: b((_d = {}, _d['alt-color'] = altColor, _d))() },
        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("svg", { className: b('view')(), width: "" + size, height: "" + size, viewBox: "0 0 66 66", xmlns: "http://www.w3.org/2000/svg" },
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("circle", { className: b('circle')(), fill: "none", strokeWidth: "6", strokeLinecap: "round", cx: "33", cy: "33", r: "30" }))));
    var _d;
};
/* harmony default export */ __webpack_exports__["a"] = (Preloader);


/***/ }),

/***/ "zGGS":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Module; });
var Module = /** @class */ (function () {
    function Module() {
        this._store = null;
        this._deps = null;
    }
    Object.defineProperty(Module.prototype, "store", {
        set: function (store) {
            this._store = store;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Module.prototype, "dependencies", {
        set: function (value) {
            this._deps = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Module.prototype, "deps", {
        get: function () {
            return this._deps || null;
        },
        enumerable: true,
        configurable: true
    });
    Module.prototype.setExtraComponent = function (key, component) {
        if (this.extraComponents) {
            this.extraComponents[key] = component;
        }
        else {
            throw new Error('Cannot set module extra component: no requirements found for extra component');
        }
    };
    return Module;
}());



/***/ })

});
//# sourceMappingURL=shared-e6d773e890450504e5ef.bundle.js.map