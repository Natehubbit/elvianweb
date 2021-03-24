"use strict";
exports.__esModule = true;
var react_1 = require("react");
var Button_1 = require("../../components/Button");
var Card_1 = require("../../components/Card");
var FAB_1 = require("../../components/FAB");
var style_module_scss_1 = require("./style.module.scss");
var react_feather_1 = require("react-feather");
var bind_1 = require("classnames/bind");
var framer_motion_1 = require("framer-motion");
var cn = bind_1["default"].bind(style_module_scss_1["default"]);
var URI = 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=980&q=80';
var Home = function () {
    return (react_1["default"].createElement("div", { className: style_module_scss_1["default"]['container'] },
        react_1["default"].createElement(framer_motion_1.motion.div, { initial: { opacity: 0 }, animate: { opacity: 1 }, transition: { duration: 1 }, className: style_module_scss_1["default"]['intro'] },
            react_1["default"].createElement("header", { className: style_module_scss_1["default"]['head'] }, "Want a cake?"),
            react_1["default"].createElement("span", { className: style_module_scss_1["default"]['tag'] }, "Choose your pick")),
        react_1["default"].createElement(framer_motion_1.motion.div, { initial: {
                translateX: -1000
            }, animate: {
                translateX: 0
            }, className: style_module_scss_1["default"]['cakes'] },
            react_1["default"].createElement("div", { className: style_module_scss_1["default"]['list'] }, [0, 0, 0, 0, 0, 0, 0]
                .map(function (d, i) {
                return react_1["default"].createElement(Card_1["default"], { key: i, uri: URI, label: 'Chocolate Cake', price: 'GHS200' });
            })),
            react_1["default"].createElement("div", { className: cn({
                    controlBtn: true,
                    right: true
                }) },
                react_1["default"].createElement(FAB_1["default"], { icon: react_1["default"].createElement(react_feather_1.ArrowRight, null) }))),
        react_1["default"].createElement("div", { className: style_module_scss_1["default"]['foot'] },
            react_1["default"].createElement(Button_1["default"], { label: 'See all cakes' }))));
};
exports["default"] = Home;
