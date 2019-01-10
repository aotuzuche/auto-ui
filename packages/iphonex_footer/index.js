"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var classnames_1 = __importDefault(require("classnames"));
var react_1 = __importDefault(require("react"));
exports.IphoneXFooter = function (props) {
    var className = props.className;
    var composeClassName = classnames_1.default('iphonex-footer', className);
    return react_1.default.createElement("div", { className: composeClassName });
};
