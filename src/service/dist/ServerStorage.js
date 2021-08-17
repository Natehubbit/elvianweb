"use strict";
exports.__esModule = true;
var firebase_1 = require("../config/firebase");
var uuid_1 = require("uuid");
var ImageRef = firebase_1.storage
    .ref('images')
    .child('description');
var ServerStorage = /** @class */ (function () {
    function ServerStorage() {
    }
    ServerStorage.createUpload = function (file) {
        try {
            var task = ImageRef
                .child(uuid_1.v4())
                .put(file);
            return task;
        }
        catch (e) {
            console.log(e.message);
            return null;
        }
    };
    return ServerStorage;
}());
exports["default"] = ServerStorage;
