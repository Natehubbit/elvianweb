"use strict";
exports.__esModule = true;
var react_1 = require("react");
var style_module_scss_1 = require("./style.module.scss");
var bind_1 = require("classnames/bind");
var framer_motion_1 = require("framer-motion");
var cn = bind_1["default"].bind(style_module_scss_1["default"]);
var Button = function (_a) {
    var label = _a.label, type = _a.type, icon = _a.icon;
    var isOutline = type === 'outline';
    return (react_1["default"].createElement(framer_motion_1.motion.button, { whileHover: { scale: 1.05 }, className: cn({
            container: true,
            outline: isOutline
        }) },
        icon && icon,
        label));
};
exports["default"] = Button;
