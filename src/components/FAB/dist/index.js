"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
exports.__esModule = true;
var react_1 = require("react");
var style_module_scss_1 = require("./style.module.scss");
var framer_motion_1 = require("framer-motion");
var classnames_1 = require("classnames");
var FAB = function (_a) {
    var icon = _a.icon, className = _a.className, props = __rest(_a, ["icon", "className"]);
    return (react_1["default"].createElement(framer_motion_1.motion.button, __assign({}, props, { initial: {
            opacity: 0
        }, animate: {
            opacity: 1
        }, whileHover: { scale: 1.05 }, className: classnames_1["default"](style_module_scss_1["default"]['container'], className) }), icon));
};
exports["default"] = FAB;
