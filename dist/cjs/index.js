'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

var WidgetTest = function (_a) {
    var deckId = _a.deckId, delayTime = _a.delayTime, appearance = _a.appearance, iframeStyle = _a.iframeStyle, onFinished = _a.onFinished;
    var url = new URL("https://test.wordkito.com/decks/".concat(deckId, "/widgets/test"));
    if (appearance === null || appearance === void 0 ? void 0 : appearance.accentColor) {
        url.searchParams.append("accentColor", appearance.accentColor);
    }
    if (appearance === null || appearance === void 0 ? void 0 : appearance.accentContrastColor) {
        url.searchParams.append("accentContrastColor", appearance.accentContrastColor);
    }
    if (appearance === null || appearance === void 0 ? void 0 : appearance.backgroundColor) {
        url.searchParams.append("backgroundColor", appearance.backgroundColor);
    }
    if (appearance === null || appearance === void 0 ? void 0 : appearance.backgroundContrastColor) {
        url.searchParams.append("backgroundContrastColor", appearance.backgroundContrastColor);
    }
    if (delayTime) {
        url.searchParams.append("delayTime", delayTime.toString());
    }
    if (appearance === null || appearance === void 0 ? void 0 : appearance.themeCodeMode) {
        url.searchParams.append("themeCodeMode", appearance.themeCodeMode);
    }
    var fullUrl = url.origin + url.pathname + url.search;
    var onMessage = React.useCallback(function (_a) {
        var data = _a.data, origin = _a.origin;
        var origins = ["https://test.wordkito.com", "https://wordkito.com"];
        if (data.type === "result" && origins.includes(origin) && onFinished) {
            onFinished({ result: data.result });
        }
    }, [onFinished]);
    React.useEffect(function () {
        window.addEventListener("message", onMessage);
        return function () {
            window.removeEventListener("message", onMessage);
        };
    }, [onMessage]);
    return (React__default["default"].createElement("iframe", { title: "wordkito-widget-test", style: __assign({ border: "none", width: "100%", height: "500px" }, iframeStyle), src: fullUrl }));
};

exports.WidgetTest = WidgetTest;
//# sourceMappingURL=index.js.map
