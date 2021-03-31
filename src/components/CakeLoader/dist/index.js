"use strict";
exports.__esModule = true;
var react_1 = require("react");
var style_module_scss_1 = require("./style.module.scss");
var react_lottie_1 = require("react-lottie");
var cakeload_json_1 = require("../../assets/animation/cakeload.json");
var CakeLoader = function () {
    return (react_1["default"].createElement("div", { className: style_module_scss_1["default"]['container'] },
        react_1["default"].createElement(react_lottie_1["default"], { height: 200, options: {
                animationData: cakeload_json_1["default"],
                autoplay: true,
                loop: true
            } })));
};
exports["default"] = CakeLoader;
