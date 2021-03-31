"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_router_dom_1 = require("react-router-dom");
var Cakes_1 = require("../containers/Cakes");
var CustomOrder_1 = require("../containers/CustomOrder");
var Home_1 = require("../containers/Home");
require("./style.scss");
var App = function () {
    return (react_1["default"].createElement(react_router_dom_1.BrowserRouter, null,
        react_1["default"].createElement(react_router_dom_1.Switch, null,
            react_1["default"].createElement(react_router_dom_1.Route, { exact: true, path: '/', component: Home_1["default"] }),
            react_1["default"].createElement(react_router_dom_1.Route, { exact: true, path: '/all', component: Cakes_1["default"] }),
            react_1["default"].createElement(react_router_dom_1.Route, { exact: true, path: '/customOrder', component: CustomOrder_1["default"] }))));
};
exports["default"] = App;
