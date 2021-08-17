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
var firebase_1 = require("../config/firebase");
var ServerStorage_1 = require("../service/ServerStorage");
var useUploadHook = function () {
    var _a = react_1.useState(null), uploadHook = _a[0], setUploadHook = _a[1];
    var _b = react_1.useState(0), progress = _b[0], setProgress = _b[1];
    var _c = react_1.useState(false), showProgress = _c[0], setShowProgress = _c[1];
    var _d = react_1.useState(null), uploadUri = _d[0], setUploadUri = _d[1];
    var subscribe = react_1.useRef(null);
    react_1.useEffect(function () {
        console.log(progress);
    }, [progress]);
    react_1.useEffect(function () {
        startUpload();
        return function () { return subscribe.current
            && subscribe.current(); };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [uploadHook]);
    var startUpload = function () {
        if (uploadHook) {
            setShowProgress(true);
            subscribe.current = uploadHook.on(firebase_1.TaskEvent.STATE_CHANGED, onNext, onError, onComplete);
        }
    };
    var clearUpload = function () {
        setUploadHook(null);
        setProgress(0);
        setShowProgress(false);
        setUploadUri(null);
        subscribe.current = null;
    };
    var addUpload = function (file) {
        var hook = ServerStorage_1["default"].createUpload(file);
        setUploadHook(hook);
    };
    var onCancel = function () {
        if (uploadHook) {
            uploadHook.cancel();
        }
    };
    var onNext = function (snapshot) {
        var bytesTransferred = snapshot.bytesTransferred, totalBytes = snapshot.totalBytes;
        setProgress(Math.ceil(bytesTransferred / totalBytes * 100));
    };
    var onComplete = function (unsubscribe) { return __awaiter(void 0, void 0, void 0, function () {
        var uri, _a;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    subscribe.current &&
                        subscribe.current();
                    setShowProgress(false);
                    _a = uploadHook;
                    if (!_a) return [3 /*break*/, 2];
                    return [4 /*yield*/, uploadHook.snapshot.ref.getDownloadURL()];
                case 1:
                    _a = (_b.sent());
                    _b.label = 2;
                case 2:
                    uri = _a;
                    uri && setUploadUri(uri);
                    unsubscribe && unsubscribe();
                    return [2 /*return*/];
            }
        });
    }); };
    var onError = function (e) {
        var code = e.code;
        var cancelled = code.includes('cancel');
        !cancelled && alert('An Error Occured');
        subscribe.current &&
            subscribe.current();
        setShowProgress(false);
        setProgress(0);
    };
    return [
        addUpload,
        onCancel,
        clearUpload,
        progress,
        showProgress,
        uploadUri
    ];
};
exports["default"] = useUploadHook;
