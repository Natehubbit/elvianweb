"use strict";
exports.__esModule = true;
var react_1 = require("react");
var style_module_scss_1 = require("./style.module.scss");
var logo_svg_1 = require("../../assets/images/logo.svg");
var Button_1 = require("../Button");
var react_feather_1 = require("react-feather");
var framer_motion_1 = require("framer-motion");
var Navbar = function () {
    return (react_1["default"].createElement("div", { className: style_module_scss_1["default"]['container'] },
        react_1["default"].createElement(framer_motion_1.motion.div, { initial: {
                translateY: -500,
                opacity: 0
            }, animate: {
                translateY: 0,
                opacity: 1
            } },
            react_1["default"].createElement("img", { src: logo_svg_1["default"], alt: 'logo' })),
        react_1["default"].createElement(framer_motion_1.motion.div, { initial: {
                translateY: -500,
                opacity: 0
            }, animate: {
                translateY: 0,
                opacity: 1,
                dur: 5000
            } },
            react_1["default"].createElement(Button_1["default"], { icon: react_1["default"].createElement(react_feather_1.ShoppingCart, { size: 15, style: { marginRight: 2 } }), type: 'outline', label: 'Custom Order' }))));
};
exports["default"] = Navbar;
