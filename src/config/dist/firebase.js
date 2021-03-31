"use strict";
exports.__esModule = true;
exports.auth = exports.db = void 0;
var app_1 = require("firebase/app");
require("firebase/analytics");
require("firebase/auth");
require("firebase/firestore");
var config = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    projectId: "elviancakes",
    databaseURL: "DATABASE_URL",
    authDomain: "elviancakes.firebaseapp.com",
    appId: "1:123430889580:web:d4976b93c4aac40d895049",
    storageBucket: "elviancakes.appspot.com",
    messagingSenderId: "123430889580"
};
app_1["default"].initializeApp(config);
app_1["default"].analytics();
exports.db = app_1["default"].firestore();
exports.auth = app_1["default"].auth();
