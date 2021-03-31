"use strict";
exports.__esModule = true;
var react_1 = require("react");
var Navbar_1 = require("../../components/Navbar");
var style_module_scss_1 = require("./style.module.scss");
var blob_svg_1 = require("../../assets/images/blob.svg");
var sideBack_svg_1 = require("../../assets/images/sideBack.svg");
var Input_1 = require("../../components/Input");
var constants_1 = require("../../common/constants");
var Button_1 = require("../../components/Button");
var uuid_1 = require("uuid");
var Textarea_1 = require("../../components/Textarea");
var UploadImage_1 = require("../../components/UploadImage");
var CustomOrder = function () {
    return (react_1["default"].createElement("div", { className: style_module_scss_1["default"]['container'] },
        react_1["default"].createElement("div", { className: style_module_scss_1["default"]['content'] },
            react_1["default"].createElement(Navbar_1["default"], null),
            react_1["default"].createElement("div", { className: style_module_scss_1["default"]['form'] },
                react_1["default"].createElement("img", { className: style_module_scss_1["default"]['blob'], alt: 'blob', src: blob_svg_1["default"] }),
                react_1["default"].createElement("div", { className: style_module_scss_1["default"]['formInputs'] },
                    react_1["default"].createElement("h1", null, "Custom Order"),
                    react_1["default"].createElement(react_1["default"].Fragment, null, Object
                        .keys(constants_1.ORDER_FORM)
                        .map(function (k) {
                        if (k === 'description') {
                            return react_1["default"].createElement(Textarea_1["default"], { placeholder: constants_1.ORDER_FORM[k] });
                        }
                        if (k === 'image') {
                            return react_1["default"].createElement(UploadImage_1["default"], { placeholder: constants_1.ORDER_FORM[k] });
                        }
                        return react_1["default"].createElement(Input_1["default"], { key: uuid_1.v4(), placeholder: constants_1.ORDER_FORM[k] });
                    })),
                    react_1["default"].createElement("div", null,
                        react_1["default"].createElement(Button_1["default"], { label: 'Delivery Mode' }))))),
        react_1["default"].createElement("div", { className: style_module_scss_1["default"]['side'] },
            react_1["default"].createElement("img", { className: style_module_scss_1["default"]['sideBack'], alt: 'side-background', src: sideBack_svg_1["default"] }))));
};
exports["default"] = CustomOrder;
