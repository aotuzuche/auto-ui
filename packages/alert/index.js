"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var classnames_1 = __importDefault(require("classnames"));
var react_1 = __importDefault(require("react"));
var react_dom_1 = require("react-dom");
var a_1 = require("../a");
var AlertCom = /** @class */ (function (_super) {
    __extends(AlertCom, _super);
    function AlertCom() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AlertCom.prototype.render = function () {
        var _a = this.props, title = _a.title, desc = _a.desc, btns = _a.btns, onClose = _a.onClose, otherProps = __rest(_a, ["title", "desc", "btns", "onClose"]);
        return (react_1.default.createElement("div", __assign({ className: "x-alert__inner" }, otherProps),
            react_1.default.createElement("div", { className: "x-alert__body" },
                !!title && react_1.default.createElement("h1", null, title),
                react_1.default.createElement("p", { className: title ? '' : 'no-title' }, desc)),
            react_1.default.createElement("div", { className: "x-alert__btns" }, !!btns &&
                btns.map(function (btn, index) {
                    var name = btn.name, className = btn.className, onClick = btn.onClick, otherProps = __rest(btn, ["name", "className", "onClick"]);
                    var composeClassName;
                    if (index === 0) {
                        composeClassName = classnames_1.default('x-alert__btn-y', className);
                    }
                    else if (index === 1) {
                        composeClassName = classnames_1.default('x-alert__btn-n', className);
                    }
                    else {
                        composeClassName = classnames_1.default('x-alert__btn-y', className);
                    }
                    return (react_1.default.createElement(a_1.A, __assign({ className: composeClassName }, otherProps, { onClick: function (e) {
                            onClick && onClick(e);
                            onClose && onClose(e);
                        }, key: index }), name));
                }))));
    };
    return AlertCom;
}(react_1.default.Component));
function Alert(params, callback) {
    var composeParams = params;
    if (typeof params === 'string') {
        composeParams = {
            title: params
        };
    }
    var className = composeParams.className, btns = composeParams.btns;
    var div = document.createElement('div');
    div.classList.add('x-alert', 'x-alert--show');
    className && div.classList.add(className);
    document.body.appendChild(div);
    function close() {
        div.classList.remove('x-alert--show');
        div.classList.add('x-alert--hide');
        var timeNumber = 200;
        setTimeout(function () {
            react_dom_1.unmountComponentAtNode(div);
            if (div && div.parentNode) {
                div.parentNode.removeChild(div);
            }
            callback && callback();
        }, timeNumber);
    }
    btns = btns ? btns : [{ name: '确定' }];
    react_dom_1.render(react_dom_1.createPortal(react_1.default.createElement(AlertCom, __assign({ btns: btns }, composeParams, { onClose: close })), div), div);
    return {
        close: close
    };
}
exports.Alert = Alert;
