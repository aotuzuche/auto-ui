"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var react_dom_1 = require("react-dom");
var spin_1 = require("../spin");
var div;
function close() {
    if (!div)
        return;
    react_dom_1.unmountComponentAtNode(div);
    if (div && div.parentNode) {
        div.parentNode.removeChild(div);
    }
}
function Loading(text) {
    // 防止多次调用先 close 检查下
    close();
    div = document.createElement('div');
    div.classList.add('x-loading', 'x-loading--show');
    document.body.appendChild(div);
    react_dom_1.render(react_dom_1.createPortal(react_1.default.createElement("div", { className: "x-loading__inner" },
        react_1.default.createElement(spin_1.Spin, null),
        !!text && react_1.default.createElement("p", null, text)), div), div);
    return {
        close: close
    };
}
exports.Loading = Loading;
Loading.hide = close;
