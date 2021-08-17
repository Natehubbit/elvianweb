"use strict";
exports.__esModule = true;
exports.INITIAL_ORDER_VALUES = exports.ORDER_FORM = void 0;
exports.ORDER_FORM = {
    name: 'Name',
    contact: 'Contact',
    ocassion: 'Occasion',
    email: 'Email',
    description: 'Description',
    image: function (_a) {
        var onUpload = _a.onUpload;
        return React.createElement("p", null,
            "Have an image that describes your cake? ",
            React.createElement("span", { className: 'link', onClick: onUpload }, "Click"),
            " or drag and drop to ",
            '\t',
            React.createElement("span", { className: 'link', onClick: onUpload }, "upload image"));
    }
};
exports.INITIAL_ORDER_VALUES = {
    name: '',
    contact: '',
    description: '',
    email: '',
    ocassion: '',
    uri: ''
};
