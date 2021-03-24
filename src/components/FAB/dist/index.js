"use strict";
exports.__esModule = true;
var react_1 = require("react");
var style_module_scss_1 = require("./style.module.scss");
var framer_motion_1 = require("framer-motion");
var FAB = function (_a) {
    var icon = _a.icon;
    return (react_1["default"].createElement(framer_motion_1.motion.button, { initial: {
            opacity: 0
        }, animate: {
            opacity: 1
        }, whileHover: { scale: 1.05 }, className: style_module_scss_1["default"]['container'] }, icon));
};
exports["default"] = FAB;
