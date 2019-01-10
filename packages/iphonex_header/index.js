"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var classnames_1 = __importDefault(require("classnames"));
var react_1 = __importDefault(require("react"));
var utils_1 = require("../utils");
exports.IphoneXHeader = function (props) {
    var className = props.className;
    var composeClassName = classnames_1.default(className, {
        isAtzucheiOSNotiPhoneX: utils_1.Reg.isAtzuche() && utils_1.Reg.isiOS() && !utils_1.Reg.isiPhoneX(),
        'iphonex-header': utils_1.Reg.isAtzuche() && utils_1.Reg.isiPhoneX()
    });
    return react_1.default.createElement("div", { className: composeClassName });
};
