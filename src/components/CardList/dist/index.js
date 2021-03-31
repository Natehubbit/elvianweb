"use strict";
exports.__esModule = true;
var framer_motion_1 = require("framer-motion");
var react_1 = require("react");
var Card_1 = require("../Card");
var FAB_1 = require("../FAB");
var style_module_scss_1 = require("./style.module.scss");
var react_feather_1 = require("react-feather");
var bind_1 = require("classnames/bind");
var waves_svg_1 = require("../../assets/images/waves.svg");
var cn = bind_1["default"].bind(style_module_scss_1["default"]);
var ShowcaseInfo = function (_a) {
    var onClose = _a.onClose, data = _a.data;
    return (React.createElement(framer_motion_1.motion.div, { className: style_module_scss_1["default"]['showcaseInfo'] },
        React.createElement(FAB_1["default"], { onClick: onClose, icon: React.createElement(react_feather_1.X, null), className: style_module_scss_1["default"]['close'] }),
        React.createElement(framer_motion_1.motion.div, { initial: {
                opacity: 0
            }, animate: {
                opacity: 1
            }, transition: {
                duration: 1.2
            }, className: style_module_scss_1["default"]['showcaseContent'] },
            React.createElement("h1", { className: style_module_scss_1["default"]['header'] }, data.name),
            React.createElement("p", null, data === null || data === void 0 ? void 0 : data.description)),
        React.createElement("img", { className: style_module_scss_1["default"]['waves'], src: waves_svg_1["default"], alt: 'waves' })));
};
var CardList = function (_a) {
    var type = _a.type, data = _a.data;
    var _b = react_1.useState(null), activeData = _b[0], setActiveData = _b[1];
    var onClick = function (id) {
        var selected = data.find(function (d) { return d.id === id; });
        setActiveData(selected);
    };
    return (React.createElement(framer_motion_1.motion.div, { className: cn({
            container: true,
            all: type === 'vertical'
        }) },
        React.createElement(framer_motion_1.AnimateSharedLayout, { type: 'crossfade' },
            React.createElement(framer_motion_1.motion.div, { className: cn({
                    list: true,
                    all: type === 'vertical'
                }) }, data
                .map(function (d, i) {
                return React.createElement(framer_motion_1.motion.div, { layoutId: d.id },
                    React.createElement(Card_1["default"], { key: d.id, uri: d.image, label: d.name, price: "GHS" + d.price, onClick: function () { return onClick(d.id); } }));
            })),
            React.createElement(framer_motion_1.AnimatePresence, null, activeData && React.createElement(framer_motion_1.motion.div, { layoutId: activeData.id, className: style_module_scss_1["default"]['showcase'] },
                React.createElement(framer_motion_1.motion.div, { className: style_module_scss_1["default"]['showcaseImg'] },
                    React.createElement("img", { src: activeData.image, alt: activeData.name })),
                React.createElement(ShowcaseInfo, { data: activeData, onClose: function () { return onClick(null); } }))))));
};
exports["default"] = CardList;
