"use strict";
exports.__esModule = true;
var Navbar_1 = require("../../components/Navbar");
var style_module_scss_1 = require("./style.module.scss");
var blob_svg_1 = require("../../assets/images/blob.svg");
var sideBack_svg_1 = require("../../assets/images/sideBack.svg");
var Input_1 = require("../../components/Input");
var constants_1 = require("../../common/constants");
var Button_1 = require("../../components/Button");
var uuid_1 = require("uuid");
var formik_1 = require("formik");
var Textarea_1 = require("../../components/Textarea");
var UploadImage_1 = require("../../components/UploadImage");
var UtilService_1 = require("../../service/UtilService");
var CustomOrder = function () {
    var validateForm = function (values) {
        var errors = {};
    };
    return (React.createElement("div", { className: style_module_scss_1["default"]['container'] },
        React.createElement("div", { className: style_module_scss_1["default"]['content'] },
            React.createElement(Navbar_1["default"], null),
            React.createElement("div", { className: style_module_scss_1["default"]['form'] },
                React.createElement("img", { className: style_module_scss_1["default"]['blob'], alt: 'blob', src: blob_svg_1["default"] }),
                React.createElement("div", { className: style_module_scss_1["default"]['formInputs'] },
                    React.createElement("h1", null, "Custom Order"),
                    React.createElement(formik_1.Formik, { initialValues: constants_1.INITIAL_ORDER_VALUES, validate: UtilService_1["default"].orderFormValidate, onSubmit: function (values, _a) {
                            var setSubmitting = _a.setSubmitting;
                            setTimeout(function () {
                                alert(JSON.stringify(values, null, 2));
                                setSubmitting(false);
                            }, 400);
                        } }, function (_a) {
                        var values = _a.values, errors = _a.errors, touched = _a.touched, handleChange = _a.handleChange, handleBlur = _a.handleBlur, handleSubmit = _a.handleSubmit, isSubmitting = _a.isSubmitting;
                        return (React.createElement(React.Fragment, null, Object
                            .keys(constants_1.ORDER_FORM)
                            .map(function (k) {
                            if (k === 'description') {
                                return React.createElement(Textarea_1["default"], { key: uuid_1.v4(), placeholder: constants_1.ORDER_FORM[k] });
                            }
                            else if (k === 'image') {
                                return React.createElement(UploadImage_1["default"], { key: uuid_1.v4(), placeholder: constants_1.ORDER_FORM[k] });
                            }
                            else {
                                return React.createElement(Input_1["default"], { key: uuid_1.v4(), placeholder: constants_1.ORDER_FORM[k] });
                            }
                        })));
                    }),
                    React.createElement("div", null,
                        React.createElement(Button_1["default"], { label: 'Delivery Mode' }))))),
        React.createElement("div", { className: style_module_scss_1["default"]['side'] },
            React.createElement("img", { className: style_module_scss_1["default"]['sideBack'], alt: 'side-background', src: sideBack_svg_1["default"] }))));
};
exports["default"] = CustomOrder;
