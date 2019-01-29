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
require("./style.css");
var NavBar = /** @class */ (function (_super) {
    __extends(NavBar, _super);
    function NavBar() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.leftClick = function (e) {
            window.history.go(-1);
        };
        _this.rightClick = function (e) {
            window.location.href = window.location.origin + '/m/index';
        };
        return _this;
    }
    NavBar.prototype.render = function () {
        var _a = this.props, title = _a.title, className = _a.className, leftBtn = _a.leftBtn, rightBtn = _a.rightBtn, leftClick = _a.leftClick, rightClick = _a.rightClick, dark = _a.dark, transparent = _a.transparent, otherProps = __rest(_a, ["title", "className", "leftBtn", "rightBtn", "leftClick", "rightClick", "dark", "transparent"]);
        var composeClass = classnames_1.default('auto-ui_navbar', {
            'auto-ui_navbar-dark': dark,
            'auto-ui_navbar-transparent': transparent
        }, className);
        return (react_1.default.createElement("div", __assign({}, otherProps, { className: composeClass }),
            leftBtn && (react_1.default.createElement("div", { className: "auto-ui_navbar-leftbtn", onClick: leftClick || this.leftClick }, leftBtn === true ? (react_1.default.createElement("i", { className: "auto-ui_navbar-icon auto-ui_navbar-leftbtn-icon" })) : (leftBtn))),
            react_1.default.createElement("div", { className: "auto-ui_navbar-title" }, title),
            rightBtn && (react_1.default.createElement("div", { className: "auto-ui_navbar-rightbtn", onClick: rightClick || this.rightClick }, rightBtn === true ? (react_1.default.createElement("i", { className: "auto-ui_navbar-icon auto-ui_navbar-rightbtn-icon" })) : (rightBtn)))));
    };
    return NavBar;
}(react_1.default.Component));
exports.default = NavBar;
