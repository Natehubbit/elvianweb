"use strict";
exports.__esModule = true;
var react_1 = require("react");
var style_module_scss_1 = require("./style.module.scss");
var bind_1 = require("classnames/bind");
var useUploadHook_1 = require("../../hooks/useUploadHook");
var Button_1 = require("../Button");
var LinkButton_1 = require("../LinkButton");
var cn = bind_1["default"].bind(style_module_scss_1["default"]);
var UploadImage = function (_a) {
    var Body = _a.placeholder;
    var _b = useUploadHook_1["default"](), addUpload = _b[0], onCancel = _b[1], clearUpload = _b[2], progress = _b[3], showProgress = _b[4], uri = _b[5];
    var _c = react_1.useState(false), dragOver = _c[0], setDraggedOver = _c[1];
    var fileRef = react_1.useRef(null);
    var onUploadFile = function () {
        fileRef.current &&
            fileRef.current.click();
    };
    var onDropFile = function (e) {
        var files = e.dataTransfer.files;
        e.preventDefault();
        setDraggedOver(false);
        addUpload(files[0]);
    };
    var onDragOver = function (e) {
        e.preventDefault();
        setDraggedOver(true);
    };
    var onDragExit = function (e) {
        e.preventDefault();
        setDraggedOver(false);
    };
    var onChange = function (e) {
        var files = e.target.files;
        files && addUpload(files[0]);
    };
    var onClear = function () {
        clearUpload();
    };
    return (react_1["default"].createElement("div", { className: cn({
            container: true,
            dragOver: dragOver
        }), onDrop: onDropFile, onDragOver: onDragOver, onDragLeave: onDragExit },
        react_1["default"].createElement("input", { onChange: onChange, ref: fileRef, type: 'file', className: style_module_scss_1["default"]['input'] }),
        !!!uri && react_1["default"].createElement(Body, { onUpload: onUploadFile }),
        !!uri && react_1["default"].createElement(react_1["default"].Fragment, null,
            react_1["default"].createElement("img", { src: uri, alt: 'uploaded', className: style_module_scss_1["default"]['img'] }),
            react_1["default"].createElement(LinkButton_1["default"], { onClick: onClear, label: 'clear' })),
        showProgress && react_1["default"].createElement("div", null,
            react_1["default"].createElement("p", null,
                progress,
                "%"),
            react_1["default"].createElement(Button_1["default"], { label: 'Cancel', mode: 'outline', onClick: onCancel }))));
};
exports["default"] = UploadImage;
