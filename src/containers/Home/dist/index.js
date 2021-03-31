"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var react_1 = require("react");
var react_router_dom_1 = require("react-router-dom");
var Button_1 = require("../../components/Button");
// import FAB from '../../components/FAB'
var style_module_scss_1 = require("./style.module.scss");
// import { ArrowRight } from 'react-feather'
// import cx from 'classnames/bind'
var framer_motion_1 = require("framer-motion");
var Navbar_1 = require("../../components/Navbar");
var CardList_1 = require("../../components/CardList");
var ProductService_1 = require("../../service/ProductService");
var CakeLoader_1 = require("../../components/CakeLoader");
// const cn = cx.bind(styles)
var Home = function () {
    var push = react_router_dom_1.useHistory().push;
    var _a = react_1.useState(true), loading = _a[0], setLoading = _a[1];
    var _b = react_1.useState([]), products = _b[0], setProducts = _b[1];
    var hasProducts = products.length > 0;
    var _c = react_1.useState(''), info = _c[0], setInfo = _c[1];
    react_1.useEffect(function () {
        getProducts();
    }, []);
    var getProducts = function () { return __awaiter(void 0, void 0, void 0, function () {
        var res;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, ProductService_1["default"].getCakes()];
                case 1:
                    res = _a.sent();
                    if (res) {
                        setProducts(res);
                    }
                    else {
                        setInfo('No data found');
                    }
                    setLoading(false);
                    return [2 /*return*/];
            }
        });
    }); };
    return (react_1["default"].createElement("div", { className: style_module_scss_1["default"]['container'] },
        react_1["default"].createElement(Navbar_1["default"], null),
        info,
        loading && react_1["default"].createElement(CakeLoader_1["default"], null),
        hasProducts &&
            react_1["default"].createElement(react_1["default"].Fragment, null,
                react_1["default"].createElement(framer_motion_1.motion.div, { initial: { opacity: 0 }, animate: { opacity: 1 }, transition: { duration: 1 }, className: style_module_scss_1["default"]['intro'] },
                    react_1["default"].createElement("header", { className: style_module_scss_1["default"]['head'] }, "Want a cake?"),
                    react_1["default"].createElement("span", { className: style_module_scss_1["default"]['tag'] }, "Choose your pick")),
                react_1["default"].createElement(framer_motion_1.motion.div, { initial: {
                        translateX: -1000
                    }, animate: {
                        translateX: 0
                    }, className: style_module_scss_1["default"]['cakes'] },
                    react_1["default"].createElement(CardList_1["default"], { data: products, type: 'horizontal' }))),
        react_1["default"].createElement("div", { className: style_module_scss_1["default"]['foot'] },
            react_1["default"].createElement(Button_1["default"], { onClick: function () { return push('/all'); }, label: 'See all cakes' }))));
};
exports["default"] = Home;
