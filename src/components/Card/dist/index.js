"use strict";
exports.__esModule = true;
var react_1 = require("react");
var style_module_scss_1 = require("./style.module.scss");
var Card = function (_a) {
    var uri = _a.uri, label = _a.label, price = _a.price, onClick = _a.onClick;
    return (react_1["default"].createElement("div", { className: style_module_scss_1["default"]['container'] },
        react_1["default"].createElement("div", { role: 'button', onClick: onClick, className: style_module_scss_1["default"]['image'], style: {
                background: "url(" + uri + ")"
            } }),
        react_1["default"].createElement("div", { className: style_module_scss_1["default"]['info'] },
            react_1["default"].createElement("header", { onClick: onClick, className: style_module_scss_1["default"]['label'] }, label),
            react_1["default"].createElement("span", { className: style_module_scss_1["default"]['price'] }, price))));
};
exports["default"] = Card;
