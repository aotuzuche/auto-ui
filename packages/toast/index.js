"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var react_dom_1 = require("react-dom");
var timer;
var DefaultTime = 500;
var minTimeNum = 200;
// const DefaultTimeNum = 1500
function Toast(text, timeout) {
    var composeTimeout = timeout || DefaultTime;
    if (timeout < minTimeNum) {
        composeTimeout = DefaultTime;
    }
    var oldDiv = document.getElementById('j-x-toast');
    console.log('oldDiv', oldDiv);
    oldDiv && oldDiv.parentNode && oldDiv.parentNode.removeChild(oldDiv);
    timer && clearTimeout(timer);
    var div = document.createElement('div');
    div.classList.add('x-toast', 'x-toast--show');
    div.id = 'j-x-toast';
    document.body.appendChild(div);
    react_dom_1.render(react_dom_1.createPortal(react_1.default.createElement("div", { className: "x-toast__inner" },
        react_1.default.createElement("p", null, text)), div), div);
    timer = setTimeout(function () {
        close();
    }, composeTimeout);
    function close() {
        div.classList.remove('x-toast--show');
        div.classList.add('x-toast--hide');
        // clearTimeout(timer)
        setTimeout(function () {
            react_dom_1.unmountComponentAtNode(div);
            if (div && div.parentNode) {
                div.parentNode.removeChild(div);
            }
        }, minTimeNum);
    }
    return {
        close: close
    };
}
exports.Toast = Toast;
