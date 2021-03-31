"use strict";
exports.__esModule = true;
var react_1 = require("react");
var style_module_scss_1 = require("./style.module.scss");
var react_router_dom_1 = require("react-router-dom");
var logo_svg_1 = require("../../assets/images/logo.svg");
var Button_1 = require("../Button");
var react_feather_1 = require("react-feather");
var framer_motion_1 = require("framer-motion");
var Navbar = function () {
    var push = react_router_dom_1.useHistory().push;
    var pathname = react_router_dom_1.useLocation().pathname;
    var notHome = pathname !== '/';
    var isCustomOrder = pathname.includes('customOrder');
    var onCustomOrder = function () {
        push('customOrder');
    };
    return (react_1["default"].createElement(framer_motion_1.motion.div, { initial: !notHome && {
            translateY: -500,
            opacity: 0
        }, animate: !notHome && {
            translateY: 0,
            opacity: 1
        }, className: style_module_scss_1["default"]['container'] },
        react_1["default"].createElement("div", null,
            react_1["default"].createElement("a", { href: '/' },
                react_1["default"].createElement("img", { src: logo_svg_1["default"], alt: 'logo' }))),
        react_1["default"].createElement("div", null, !isCustomOrder && react_1["default"].createElement(Button_1["default"], { icon: react_1["default"].createElement(react_feather_1.ShoppingCart, { size: 15, style: { marginRight: 2 } }), mode: 'outline', label: 'Custom Order', onClick: onCustomOrder }))));
};
exports["default"] = Navbar;
