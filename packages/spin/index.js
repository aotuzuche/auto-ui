"use strict";
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
exports.Spin = function (props) {
    var className = props.className, text = props.text, otherProps = __rest(props, ["className", "text"]);
    var loadingSpin = (react_1.default.createElement("div", { className: "x-loading__spin" },
        react_1.default.createElement("svg", { className: "x-loading__spin_circular", viewBox: "25 25 50 50" },
            react_1.default.createElement("circle", { className: "x-loading__spin_path", cx: "50", cy: "50", r: "20", fill: "none", strokeWidth: "2", strokeMiterlimit: "10" }))));
    var composeClassName = classnames_1.default('x-spin', className);
    return (react_1.default.createElement("div", __assign({}, otherProps, { className: composeClassName }),
        loadingSpin,
        !!text && react_1.default.createElement("p", { className: "x-spin__text" }, text)));
};
