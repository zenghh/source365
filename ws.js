function __getOwnPropertyDescriptor(e, t) {
    try {
        return Object.getOwnPropertyDescriptor(e, t)
    } catch (n) {
        return {
            configurable: !1,
            enumerable: !0,
            value: e[t],
            writable: !0
        }
    }
}
function __defineProperty(e, t, n) {
    try {
        Object.defineProperty(e, t, n)
    } catch (i) {}
}
function override(e, t, n) {}
function final(e, t) {}
function GetCompiledAsset(e) {
    return ErrorReporter.Trace(null, "GetCompiledAsset call outside of module definition."),
    ""
}
function RegisterCompiledAsset(e, t) {}
function Harness(e) {
    return null
}
function JasmineSpec(e) {
    return null
}
function lazyStaticInit(e) {
    return function(t) {
        var n = !0
          , i = function() {
            var i = t.apply(this, arguments);
            return n && (n = !1,
            e()),
            i
        };
        return i.prototype = t.prototype,
        i
    }
}
function $timestamp(e) {
    "console"in window && "timeStamp"in console && "object" != typeof console.timeStamp && -1 == console.timeStamp.toString().indexOf("__BROWSERTOOLS_CONSOLE_SAFEFUNC") && console.timeStamp(e)
}
function $logFmt(e, t) {}
function $warn(e) {}
function $time(e) {}
function $timeEnd(e) {}
function $ots() {
    "console"in window && console.log(Locator.otsReport.generate())
}
function $dir(e) {}
function $now() {
    return null
}
function $stem(e) {
    var t = Locator.treeLookup.getReference(e);
    return "dir"in console && console.dir(t),
    t
}
function cycleid() {
    return "Locator"in window && Locator.validationManager ? Locator.validationManager.cyclecount : 0
}
function LongClick(e, t, n) {
    "use strict";
    var i = this;
    if (this.trackingClick = !1,
    this.trackingClickStart = 0,
    this.targetElement = null,
    this.touchStartX = 0,
    this.touchStartY = 0,
    this.touchBoundary = 10,
    this.time = t,
    this.handler = n,
    this.timer = null,
    this.layer = e,
    !e || !e.nodeType)
        throw new TypeError("Layer must be a document node");
    this.onTouchStart = function() {
        return LongClick.prototype.onTouchStart.apply(i, arguments)
    }
    ,
    this.onTouchMove = function() {
        return LongClick.prototype.onTouchMove.apply(i, arguments)
    }
    ,
    this.onTouchEnd = function() {
        return LongClick.prototype.onTouchEnd.apply(i, arguments)
    }
    ,
    this.onTouchCancel = function() {
        return LongClick.prototype.onTouchCancel.apply(i, arguments)
    }
    ,
    window.navigator.msPointerEnabled ? (this.startEventName = "MSPointerDown",
    this.moveEventName = "MSPointerMove",
    this.endEventName = "MSPointerUp",
    this.cancelEventName = "MSPointerCancel") : (this.startEventName = "touchstart",
    this.moveEventName = "touchmove",
    this.endEventName = "touchend",
    this.cancelEventName = "touchcancel"),
    e.addEventListener(this.startEventName, this.onTouchStart, !1),
    e.addEventListener(this.moveEventName, this.onTouchMove, !1),
    e.addEventListener(this.endEventName, this.onTouchEnd, !1),
    e.addEventListener(this.cancelEventName, this.onTouchCancel, !1)
}
var ns_test, ns_gen5_util, ErrorReporter, __decorate, __param, __extends, extend, ANIMATION_END, TRANSITION_END, $log_log, $log, $logTest, $break_on_assert, $assert, FastClick, ns_gen5_ml, ns_gen5_util_user, ns_gen5_events, ns_gen5_net, ns_gen5_util_logging, ns_gen5_validation, ns_gen5_language, ns_gen5_data, ns_gen5_ui, ns_gen5_config, ns_gen5_ui_managers, ns_gen5_ui_controls, ns_gen5_animation_easing, ns_gen5_animation, readit, ns_betslip, Locator, SITE_ROOT_PATH = "sports";
!(function(e) {
    var t, n, i = (function() {
        function e() {}
        return e.prototype.runSpec = function() {
            throw new Error("Method should be overriten")
        }
        ,
        e
    }
    )();
    e.B365JasmineSpec = i,
    t = window,
    n = t.JasmineSpecLookup = {},
    t.addJasmineSpec = function(e, t, i) {
        var o = n[e] || (n[e] = []);
        o.push([t, i])
    }
}
)(ns_test || (ns_test = {})),
(function(e) {
    var t = (function() {
        function e() {}
        return e.encrypt = function(t) {
            var n, i = "", o = t.length, r = 0, s = 0;
            for (r = 0; o > r; r++) {
                for (n = t.substr(r, 1),
                s = 0; s < e.MAP_LEN; s++)
                    if (n == e.charMap[s][0]) {
                        n = e.charMap[s][1];
                        break
                    }
                i += n
            }
            return i
        }
        ,
        e.decrypt = function(t) {
            var n, i = "", o = t.length, r = 0, s = 0;
            for (r = 0; o > r; r++) {
                for (n = t.substr(r, 1),
                s = 0; s < e.MAP_LEN; s++) {
                    if (":" == n && ":|~" == t.substr(r, 3)) {
                        n = "\n",
                        r += 2;
                        break
                    }
                    if (n == e.charMap[s][1]) {
                        n = e.charMap[s][0];
                        break
                    }
                }
                i += n
            }
            return i
        }
        ,
        e.MAP_LEN = 64,
        e.charMap = [["A", "d"], ["B", "e"], ["C", "f"], ["D", "g"], ["E", "h"], ["F", "i"], ["G", "j"], ["H", "k"], ["I", "l"], ["J", "m"], ["K", "n"], ["L", "o"], ["M", "p"], ["N", "q"], ["O", "r"], ["P", "s"], ["Q", "t"], ["R", "u"], ["S", "v"], ["T", "w"], ["U", "x"], ["V", "y"], ["W", "z"], ["X", "a"], ["Y", "b"], ["Z", "c"], ["a", "Q"], ["b", "R"], ["c", "S"], ["d", "T"], ["e", "U"], ["f", "V"], ["g", "W"], ["h", "X"], ["i", "Y"], ["j", "Z"], ["k", "A"], ["l", "B"], ["m", "C"], ["n", "D"], ["o", "E"], ["p", "F"], ["q", "0"], ["r", "1"], ["s", "2"], ["t", "3"], ["u", "4"], ["v", "5"], ["w", "6"], ["x", "7"], ["y", "8"], ["z", "9"], ["0", "G"], ["1", "H"], ["2", "I"], ["3", "J"], ["4", "K"], ["5", "L"], ["6", "M"], ["7", "N"], ["8", "O"], ["9", "P"], ["\n", ":|~"], ["\r", ""]],
        e
    }
    )();
    e.B365SimpleEncrypt = t
}
)(ns_gen5_util || (ns_gen5_util = {})),
(function(e) {
    var t, n;
    !(function(e) {
        e.CONNECTION_ENTRY = "CONNECTION_ENTRY",
        e.PUSH_MESSAGE_CONNECTION_ENTRY = "PUSH_MESSAGE_CONNECTION_ENTRY",
        e.PULL_DATA_ENTRY = "PULL_DATA_ENTRY",
        e.MODULE_LOAD_ENTRY = "MODULE_LOAD_ENTRY",
        e.NAVIGATION_ENTRY = "NAVIGATION_ENTRY",
        e.VIDEO_ENTRY = "VIDEO_ENTRY",
        e.COUPON_STREAMING_ENTRY = "COUPON_STREAMING_ENTRY",
        e.BET_SLIP_ENTRY = "BET_SLIP_ENTRY",
        e.GLOBAL_CONFIG_ENTRY = "GLOBAL_CONFIG_ENTRY",
        e.PLAYTECH_INSTANT_GAMES_ENTRY = "PLAYTECH_INSTANT_GAMES_ENTRY",
        e.FLASH_MODULE_ENTRY = "FLASH_MODULE_ENTRY",
        e.EMPTY_TOPIC_ENTRY = "EMPTY_TOPIC_ENTRY",
        e.FINANCIALS_TOPIC_ENTRY = "FINANCIALS_TOPIC_ENTRY",
        e.FILTERING_ENTRY = "FILTERING_ENTRY",
        e.BLOB_ENTRY = "BLOB_ENTRY",
        e.EDIT_BETS_ENTRY = "EDIT_BETS",
        e.MATCH_ALERTS_SERVICE_WORKER_ENTRY = "MATCH_ALERTS_SERVICE_WORKER_ENTRY",
        e.MATCH_ALERTS_ENTRY = "MATCH_ALERTS_ENTRY",
        e.QUICK_BET_ENTRY = "QUICK_BET_ENTRY",
        e.GENERAL_ENTRY = "GENERAL_ENTRY",
        e.DEPRECATION_WARNING_ENTRY = "DEPRECATION_WARNING_ENTRY",
        e.MOS_ENTRY = "MOS_ENTRY",
        e.GEO_COMPLY_ENTRY = "GEO_COMPLY_ENTRY",
        e.LOGIN_ENTRY = "LOGIN_ENTRY",
        e.MEMBERS_ENTRY = "MEMBERS_ENTRY"
    }
    )(t = e.InfoReporterGroups || (e.InfoReporterGroups = {})),
    n = (function() {
        function e() {}
        return e.getLog = function() {
            return e.InfoLog
        }
        ,
        e.Trace = function(t, n) {
            var i, o;
            e.InfoLog[t] || (e.InfoLog[t] = []),
            i = new Date,
            o = i.getHours() + ":" + i.getMinutes() + ":" + i.getSeconds(),
            n = o + " " + n,
            e.InfoLog[t].push(n)
        }
        ,
        e.InfoLog = {},
        e
    }
    )(),
    e.InfoReporter = n
}
)(ns_gen5_util || (ns_gen5_util = {})),
ErrorReporter = (function() {
    function e() {}
    return e.Trace = function(t, n, i) {
        var o, r, s;
        try {
            o = n.stack || n.message || n,
            r = "" + t,
            $log(r, o),
            this.ErrorLog.length >= e.MAXIMUM_LOG_SIZE && (s = this.ErrorLog.length - e.MAXIMUM_LOG_SIZE + 1,
            e.ErrorLog.splice(0, s)),
            this.ErrorLog.push(new Date + " " + r + " " + n),
            ns_gen5_util_logging.ClientErrorLogger.QueueError(t, n, i)
        } catch (n) {
            ns_gen5_util.InfoReporter.Trace(ns_gen5_util.InfoReporterGroups.GENERAL_ENTRY, "Problem happened during logging error")
        }
    }
    ,
    e.MAXIMUM_LOG_SIZE = 100,
    e.ErrorLog = [],
    e.GetLog = function() {
        return e.ErrorLog
    }
    ,
    e
}
)(),
__decorate = this && this.__decorate || function(e, t, n, i) {
    var o, r, s = arguments.length, a = 3 > s ? t : null === i ? i = __getOwnPropertyDescriptor(t, n) : i;
    if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
        a = Reflect.decorate(e, t, n, i);
    else
        for (r = e.length - 1; r >= 0; r--)
            (o = e[r]) && (a = (3 > s ? o(a) : s > 3 ? o(t, n, a) : o(t, n)) || a);
    return s > 3 && a && __defineProperty(t, n, a),
    a
}
,
__param = this.__param || function(e, t) {
    return function(n, i) {
        t(n, i, e)
    }
}
,
__extends = this && this.__extends || function(e, t) {
    var n, i;
    for (n in t)
        t.hasOwnProperty(n) && (e[n] = t[n]);
    i = function() {
        this.constructor = e
    }
    ,
    e.prototype = null === t ? Object.create(t) : (i.prototype = t.prototype,
    new i)
}
,
extend = function(e, t) {
    return __extends(t, e),
    e
}
,
(function() {
    var e, t, n, i, o = document.createElement("div"), r = o.style;
    for ("" === r.animation ? ANIMATION_END = "animationend" : "" === r.webkitAnimation ? ANIMATION_END = "webkitAnimationEnd" : "" === r.mozAnimation ? ANIMATION_END = "mozAnimationEnd" : "" === r.msAnimation && (ANIMATION_END = "msAnimationEnd"),
    "" === r.transition ? TRANSITION_END = "transitionend" : "" === r.webkitTransition && (TRANSITION_END = "webkitTransitionEnd"),
    e = 0,
    t = ["webkit", "moz"],
    n = window,
    i = 0; i < t.length && !window.requestAnimationFrame; ++i)
        n.requestAnimationFrame = n[t[i] + "RequestAnimationFrame"],
        n.cancelAnimationFrame = n[t[i] + "CancelAnimationFrame"] || n[t[i] + "CancelRequestAnimationFrame"];
    window.requestAnimationFrame || (window.requestAnimationFrame = function(t) {
        var n = (new Date).getTime()
          , i = Math.max(0, 16 - (n - e))
          , o = window.setTimeout((function() {
            t(n + i)
        }
        ), i);
        return e = n + i,
        o
    }
    ),
    window.cancelAnimationFrame || (window.cancelAnimationFrame = function(e) {
        clearTimeout(e)
    }
    )
}
)(),
(function() {
    Array.prototype.indexOf || (Array.prototype.indexOf = function(e, t) {
        var n, i;
        for (t || (t = 0),
        n = this.length,
        i = t; n > i; i++)
            if (this[i] === e)
                return i;
        return -1
    }
    )
}
)(),
$log_log = "",
$log = function() {}
,
$logTest = function() {}
,
(function() {
    window.safeSessionStorage || (window.safeSessionStorage = (function() {
        function e() {}
        function t() {
            this._store = {}
        }
        var n = "test-string"
          , i = (function() {
            try {
                if (window.sessionStorage)
                    return window.sessionStorage.setItem(n, n),
                    window.sessionStorage.removeItem(n),
                    !0
            } catch (e) {
                ErrorReporter.Trace(null, e)
            }
            return !1
        }
        )();
        return e.prototype.setItem = function(e, t) {
            try {
                window.sessionStorage && window.sessionStorage.setItem(e, t)
            } catch (n) {}
        }
        ,
        e.prototype.getItem = function(e) {
            try {
                if (window.sessionStorage)
                    return window.sessionStorage.getItem(e)
            } catch (t) {}
            return null
        }
        ,
        e.prototype.removeItem = function(e) {
            try {
                window.sessionStorage && window.sessionStorage.removeItem(e)
            } catch (t) {}
        }
        ,
        t.prototype.setItem = function(e, t) {
            this._store[e] = t
        }
        ,
        t.prototype.getItem = function(e) {
            return this._store[e]
        }
        ,
        t.prototype.removeItem = function(e) {
            delete this._store[e]
        }
        ,
        i ? new e : new t
    }
    )())
}
)(),
(function(e, t, n) {
    function i(e) {
        var n = t[e];
        t[e] = function(e) {
            return o(n(e))
        }
    }
    function o(e) {
        var t = e.length;
        if (t)
            for (; t--; )
                e[t].addEventListener = c,
                e[t].removeEventListener = l;
        else
            e.addEventListener = c,
            e.removeEventListener = l;
        return e
    }
    var r, s, a, c, l, u;
    e.addEventListener && e.removeEventListener || !e.attachEvent || !e.detachEvent || (r = function(e) {
        return "function" == typeof e
    }
    ,
    s = function(e, t) {
        var i, o, r = t[n];
        if (r)
            for (i = void 0,
            o = r.length; o--; )
                if (i = r[o],
                i[0] === e)
                    return i[1]
    }
    ,
    a = function(e, t, i) {
        var o = t[n] || (t[n] = []);
        return s(e, t) || (o[o.length] = [e, i],
        i)
    }
    ,
    c = function(n, i, o) {
        if (r(i)) {
            var s = this;
            s.attachEvent("on" + n, a(s, i, (function(n) {
                n = n || e.event,
                n.preventDefault = n.preventDefault || function() {
                    n.returnValue = !1
                }
                ,
                n.stopPropagation = n.stopPropagation || function() {
                    n.cancelBubble = !0
                }
                ,
                n.target = n.target || n.srcElement || t.documentElement,
                n.currentTarget = n.currentTarget || s,
                n.timeStamp = n.timeStamp || (new Date).getTime(),
                i.call(s, n)
            }
            )))
        }
    }
    ,
    l = function(e, t, n) {
        var i, o;
        r(t) && (i = this,
        o = s(i, t),
        o && i.detachEvent("on" + e, o))
    }
    ,
    o([t, e]),
    "Element"in e ? (u = e.Element,
    u.prototype.addEventListener = c,
    u.prototype.removeEventListener = l) : (t.attachEvent("onreadystatechange", (function() {
        o(t.all)
    }
    )),
    i("getElementsByTagName"),
    i("getElementById"),
    i("createElement"),
    o(t.all)))
}
)(window, document, "x-ms-event-listeners"),
(function() {
    function e(e) {
        var t, n, i = this, o = i, r = o.length >>> 0;
        if ("function" != typeof e)
            throw new TypeError("Array.prototype.reduceRight callback must be a function");
        if (0 === r && 1 === arguments.length)
            throw new TypeError("reduceRight of empty array with no initial value");
        if (n = r - 1,
        arguments.length >= 2)
            t = arguments[1];
        else
            for (; ; ) {
                if (n in o) {
                    t = o[n--];
                    break
                }
                if (--n < 0)
                    throw new TypeError("reduceRight of empty array with no initial value")
            }
        if (0 > n)
            return t;
        do
            n in o && (t = e(t, o[n], n, i));
        while (n--);return t
    }
    Array.prototype.reduceRight || (Array.prototype.reduceRight = e)
}
)(),
(function(e) {
    function t(e, n, i) {
        var o, r = e.document && e.currentStyle[n].match(/([\d\.]+)(%|cm|em|in|mm|pc|pt|)/) || [0, 0, ""], s = r[1], a = r[2];
        return i = i ? /%|em/.test(a) && e.parentElement ? t(e.parentElement, "fontSize", null) : 16 : i,
        o = "fontSize" == n ? i : /width/i.test(n) ? e.clientWidth : e.clientHeight,
        "%" == a ? s / 100 * o : "cm" == a ? .3937 * s * 96 : "em" == a ? s * i : "in" == a ? 96 * s : "mm" == a ? .3937 * s * 96 / 10 : "pc" == a ? 12 * s * 96 / 72 : "pt" == a ? 96 * s / 72 : s
    }
    function n(e, t) {
        var n = "border" == t ? "Width" : ""
          , i = t + "Top" + n
          , o = t + "Right" + n
          , r = t + "Bottom" + n
          , s = t + "Left" + n;
        e[t] = (e[i] == e[o] && e[i] == e[r] && e[i] == e[s] ? [e[i]] : e[i] == e[r] && e[s] == e[o] ? [e[i], e[o]] : e[s] == e[o] ? [e[i], e[o], e[r]] : [e[i], e[o], e[r], e[s]]).join(" ")
    }
    function i(e) {
        var i, o = this, r = e.currentStyle, s = t(e, "fontSize"), a = function(e) {
            return "-" + e.toLowerCase()
        };
        for (i in r)
            if (Array.prototype.push.call(o, "styleFloat" == i ? "float" : i.replace(/[A-Z]/, a)),
            "width" == i)
                o[i] = e.offsetWidth + "px";
            else if ("height" == i)
                o[i] = e.offsetHeight + "px";
            else if ("styleFloat" == i)
                o["float"] = r[i];
            else if (/margin.|padding.|border.+W/.test(i) && "auto" != o[i])
                o[i] = Math.round(t(e, i, s)) + "px";
            else if (/^outline/.test(i))
                try {
                    o[i] = r[i]
                } catch (c) {
                    o.outlineColor = r.color,
                    o.outlineStyle = o.outlineStyle || "none",
                    o.outlineWidth = o.outlineWidth || "0px",
                    o.outline = [o.outlineColor, o.outlineWidth, o.outlineStyle].join(" ")
                }
            else
                o[i] = r[i];
        n(o, "margin"),
        n(o, "padding"),
        n(o, "border"),
        o.fontSize = Math.round(s) + "px"
    }
    e.getComputedStyle || (i.prototype = {
        constructor: i,
        getPropertyPriority: function() {
            $assert && $assert(!1, "NotSupportedError: DOM Exception 9")
        },
        getPropertyValue: function(e) {
            return this[e.replace(/-\w/g, (function(e) {
                return e[1].toUpperCase()
            }
            ))]
        },
        item: function(e) {
            return this[e]
        },
        removeProperty: function() {
            $assert && $assert(!1, "NoModificationAllowedError: DOM Exception 7")
        },
        setProperty: function() {
            $assert && $assert(!1, "NoModificationAllowedError: DOM Exception 7")
        },
        getPropertyCSSValue: function() {
            $assert && $assert(!1, "NotSupportedError: DOM Exception 9")
        }
    },
    e.getComputedStyle = function(e) {
        return new i(e)
    }
    )
}
)(this),
FastClick = (function() {
    "use strict";
    function e(t, n) {
        function i(e, t) {
            return function() {
                return e.apply(t, arguments)
            }
        }
        var o, r, s, a, c, l, u;
        if (n = n || {},
        this.trackingClick = !1,
        this.trackingClickStart = 0,
        this.targetElement = null,
        this.touchStartX = 0,
        this.touchStartY = 0,
        this.lastTouchIdentifier = 0,
        this.touchBoundary = n.touchBoundary || 10,
        this.layer = t,
        this.tapDelay = n.tapDelay || 20,
        this.tapTimeout = n.tapTimeout || 700,
        r = this.deviceIsWindowsPhone = navigator.userAgent.indexOf("Windows Phone") >= 0,
        s = this.deviceIsAndroid = navigator.userAgent.indexOf("Android") > 0 && !r,
        this.deviceIsIOS = /iP(ad|hone|od)/.test(navigator.userAgent) && !r,
        this.deviceIsIOS4 = this.deviceIsIOS && /OS 4_\d(_\d)?/.test(navigator.userAgent),
        this.deviceIsIOSWithBadTarget = this.deviceIsIOS && /OS [6-7]_\d/.test(navigator.userAgent),
        this.deviceIsBlackBerry10 = navigator.userAgent.indexOf("BB10") > 0,
        !e.notNeeded(t)) {
            for (a = ["onMouse", "onClick", "onTouchStart", "onTouchMove", "onTouchEnd", "onTouchCancel"],
            c = this,
            l = a.length,
            u = 0; l > u; u++)
                c[a[u]] = i(c[a[u]], c);
            s && (t.addEventListener("mouseover", this.onMouse, !0),
            t.addEventListener("mousedown", this.onMouse, !0),
            t.addEventListener("mouseup", this.onMouse, !0)),
            t.addEventListener("click", this.onClick, !0),
            t.addEventListener("touchstart", this.onTouchStart, !1),
            t.addEventListener("touchmove", this.onTouchMove, !1),
            t.addEventListener("touchend", this.onTouchEnd, !1),
            t.addEventListener("touchcancel", this.onTouchCancel, !1),
            Event.prototype.stopImmediatePropagation || (t.removeEventListener = function(e, n, i) {
                var o = Node.prototype.removeEventListener;
                "click" === e ? o.call(t, e, n.hijacked || n, i) : o.call(t, e, n, i)
            }
            ,
            t.addEventListener = function(e, n, i) {
                var o = Node.prototype.addEventListener;
                "click" === e ? o.call(t, e, n.hijacked || (n.hijacked = function(e) {
                    e.propagationStopped || n(e)
                }
                ), i) : o.call(t, e, n, i)
            }
            ),
            "function" == typeof t.onclick && (o = t.onclick,
            t.addEventListener("click", (function(e) {
                o(e)
            }
            ), !1),
            t.onclick = null)
        }
    }
    return e.prototype.needsClick = function(e) {
        var t, n;
        switch (e.nodeName.toLowerCase()) {
        case "button":
        case "select":
        case "textarea":
            if (e.disabled)
                return !0;
            break;
        case "input":
            if (this.deviceIsIOS && "file" === e.type || e.disabled)
                return !0;
            break;
        case "label":
        case "iframe":
        case "video":
            return !0
        }
        for (t = !1,
        n = e; n && n !== document && !t; )
            t = /\bneedsclick\b/.test(n.className),
            n = n.parentNode;
        return t
    }
    ,
    e.prototype.needsFocus = function(e) {
        if (/\bforcenofocus\b/.test(e.className))
            return !1;
        switch (e.nodeName.toLowerCase()) {
        case "textarea":
            return !0;
        case "select":
            return !this.deviceIsAndroid;
        case "input":
            switch (e.type) {
            case "button":
            case "checkbox":
            case "file":
            case "image":
            case "radio":
            case "submit":
                return !1
            }
            return !e.disabled && !e.readOnly;
        default:
            return /\bneedsfocus\b/.test(e.className)
        }
    }
    ,
    e.prototype.sendClick = function(e, t) {
        var n, i;
        document.activeElement && document.activeElement !== e && document.activeElement.blur(),
        i = t.changedTouches[0],
        n = document.createEvent("MouseEvents"),
        n.initMouseEvent(this.determineEventType(e), !0, !0, window, 1, i.screenX, i.screenY, i.clientX, i.clientY, !1, !1, !1, !1, 0, null),
        n.forwardedTouchEvent = !0,
        e.dispatchEvent(n)
    }
    ,
    e.prototype.determineEventType = function(e) {
        return this.deviceIsAndroid && "select" === e.tagName.toLowerCase() ? "mousedown" : "click"
    }
    ,
    e.prototype.focus = function(e) {
        var t;
        this.deviceIsIOS && e.setSelectionRange && -1 !== e.type.indexOf("date") && "time" !== e.type && "month" !== e.type ? (t = e.value.length,
        e.setSelectionRange(t, t)) : e.focus()
    }
    ,
    e.prototype.updateScrollParent = function(e) {
        var t, n = e.fastClickScrollParent;
        if (!n || !n.contains(e)) {
            t = e;
            do {
                if (t.scrollHeight > t.offsetHeight) {
                    n = t,
                    e.fastClickScrollParent = t;
                    break
                }
                t = t.parentElement
            } while (t)
        }
        n && (n.fastClickLastScrollTop = n.scrollTop,
        n.fastClickLastScrollLeft = n.scrollLeft)
    }
    ,
    e.prototype.getTargetElementFromEventTarget = function(e) {
        return e.nodeType === Node.TEXT_NODE ? e.parentNode : e
    }
    ,
    e.prototype.onTouchStart = function(e) {
        var t, n, i;
        if (e.targetTouches.length > 1)
            return !0;
        if (t = this.getTargetElementFromEventTarget(e.target),
        n = e.targetTouches[0],
        this.deviceIsIOS) {
            if (i = window.getSelection(),
            i.rangeCount && !i.isCollapsed)
                return !0;
            if (!this.deviceIsIOS4) {
                if (n.identifier && n.identifier === this.lastTouchIdentifier)
                    return e.preventDefault(),
                    !1;
                this.lastTouchIdentifier = n.identifier,
                this.updateScrollParent(t)
            }
        }
        return this.trackingClick = !0,
        this.trackingClickStart = (new Date).getTime(),
        this.targetElement = t,
        this.touchStartX = n.pageX,
        this.touchStartY = n.pageY,
        this.trackingClickStart - this.lastClickTime < this.tapDelay && e.preventDefault(),
        !0
    }
    ,
    e.prototype.touchHasMoved = function(e) {
        var t = e.changedTouches[0]
          , n = this.touchBoundary;
        return Math.abs(t.pageX - this.touchStartX) > n || Math.abs(t.pageY - this.touchStartY) > n
    }
    ,
    e.prototype.onTouchMove = function(e) {
        return this.trackingClick ? ((this.targetElement !== this.getTargetElementFromEventTarget(e.target) || this.touchHasMoved(e)) && (this.trackingClick = !1,
        this.targetElement = null),
        !0) : !0
    }
    ,
    e.prototype.findControl = function(e) {
        return void 0 !== e.control ? e.control : e.htmlFor ? document.getElementById(e.htmlFor) : e.querySelector("button, input:not([type=hidden]), keygen, meter, output, progress, select, textarea")
    }
    ,
    e.prototype.onTouchEnd = function(e) {
        var t, n, i, o, r, s, a = this.targetElement;
        if ((this.targetElement !== this.getTargetElementFromEventTarget(e.target) || this.touchHasMoved(e)) && (this.trackingClick = !1,
        this.targetElement = null),
        !this.trackingClick)
            return !0;
        if (s = (new Date).getTime(),
        s - this.lastClickTime < this.tapDelay)
            return this.cancelNextClick = !0,
            !0;
        if (s - this.trackingClickStart > this.tapTimeout)
            return !0;
        if (this.cancelNextClick = !1,
        this.lastClickTime = s,
        n = this.trackingClickStart,
        this.trackingClick = !1,
        this.trackingClickStart = 0,
        this.deviceIsIOSWithBadTarget && (r = e.changedTouches[0],
        a = document.elementFromPoint(r.pageX - window.pageXOffset, r.pageY - window.pageYOffset) || a,
        a.fastClickScrollParent = this.targetElement.fastClickScrollParent),
        i = a.tagName.toLowerCase(),
        "label" === i) {
            if (t = this.findControl(a)) {
                if (this.focus(a),
                this.deviceIsAndroid)
                    return !1;
                a = t
            }
        } else if (this.needsFocus(a))
            return s - n > 100 || this.deviceIsIOS && window.top !== window && "input" === i ? (this.targetElement = null,
            !1) : (this.focus(a),
            this.sendClick(a, e),
            this.deviceIsIOS && "select" === i || (this.targetElement = null,
            e.preventDefault()),
            !1);
        return !this.deviceIsIOS || this.deviceIsIOS4 || (o = a.fastClickScrollParent,
        !o || o.fastClickLastScrollTop === o.scrollTop && o.fastClickLastScrollLeft === o.scrollLeft) ? (this.needsClick(a) || (e.preventDefault(),
        this.sendClick(a, e)),
        !1) : !0
    }
    ,
    e.prototype.onTouchCancel = function() {
        this.trackingClick = !1,
        this.targetElement = null
    }
    ,
    e.prototype.onMouse = function(e) {
        return this.targetElement ? e.forwardedTouchEvent ? !0 : e.cancelable && (!this.needsClick(this.targetElement) || this.cancelNextClick) ? (e.stopImmediatePropagation ? e.stopImmediatePropagation() : e.propagationStopped = !0,
        e.stopPropagation(),
        e.preventDefault(),
        !1) : !0 : !0
    }
    ,
    e.prototype.onClick = function(e) {
        var t;
        return this.trackingClick ? (this.targetElement = null,
        this.trackingClick = !1,
        !0) : "submit" === e.target.type && 0 === e.detail ? !0 : (t = this.onMouse(e),
        t || (this.targetElement = null),
        t)
    }
    ,
    e.prototype.destroy = function() {
        var e = this.layer;
        this.deviceIsAndroid && (e.removeEventListener("mouseover", this.onMouse, !0),
        e.removeEventListener("mousedown", this.onMouse, !0),
        e.removeEventListener("mouseup", this.onMouse, !0)),
        e.removeEventListener("click", this.onClick, !0),
        e.removeEventListener("touchstart", this.onTouchStart, !1),
        e.removeEventListener("touchmove", this.onTouchMove, !1),
        e.removeEventListener("touchend", this.onTouchEnd, !1),
        e.removeEventListener("touchcancel", this.onTouchCancel, !1)
    }
    ,
    e.notNeeded = function(e) {
        var t, n, i, o;
        if ("undefined" == typeof window.ontouchstart)
            return !0;
        if (n = +(/Chrome\/([0-9]+)/.exec(navigator.userAgent) || [, 0])[1]) {
            if (!this.deviceIsAndroid)
                return !0;
            if (t = document.querySelector("meta[name=viewport]")) {
                if (-1 !== t.content.indexOf("user-scalable=no"))
                    return !0;
                if (n > 31 && document.documentElement.scrollWidth <= window.outerWidth)
                    return !0
            }
        }
        if (this.deviceIsBlackBerry10 && (i = navigator.userAgent.match(/Version\/([0-9]*)\.([0-9]*)/),
        i[1] >= 10 && i[2] >= 3 && (t = document.querySelector("meta[name=viewport]")))) {
            if (-1 !== t.content.indexOf("user-scalable=no"))
                return !0;
            if (document.documentElement.scrollWidth <= window.outerWidth)
                return !0
        }
        return "none" === e.style.msTouchAction || "manipulation" === e.style.touchAction ? !0 : (o = +(/Firefox\/([0-9]+)/.exec(navigator.userAgent) || [, 0])[1],
        o >= 27 && (t = document.querySelector("meta[name=viewport]"),
        t && (-1 !== t.content.indexOf("user-scalable=no") || document.documentElement.scrollWidth <= window.outerWidth)) ? !0 : "none" === e.style.touchAction || "manipulation" === e.style.touchAction)
    }
    ,
    e.attach = function(t, n) {
        return new e(t,n)
    }
    ,
    e
}
)(),
window.FastClick = FastClick,
LongClick.prototype.onTouchStart = function(e) {
    "use strict";
    var t, n;
    if (e.targetTouches && 1 === e.targetTouches.length)
        n = e.targetTouches[0];
    else {
        if (!e.clientX || !e.clientY)
            return !0;
        n = e
    }
    return t = e.target,
    this.trackingClick = !0,
    this.trackingClickStart = e.timeStamp,
    this.targetElement = t,
    this.touchStartX = n.clientX,
    this.touchStartY = n.clientY,
    this.timer = window.setTimeout(this.handler, this.time),
    !0
}
,
LongClick.prototype.touchHasMoved = function(e) {
    "use strict";
    var t, n = this.touchBoundary;
    return t = e.changedTouches ? e.changedTouches[0] : e,
    Math.abs(t.clientX - this.touchStartX) > n || Math.abs(t.clientY - this.touchStartY) > n
}
,
LongClick.prototype.onTouchMove = function(e) {
    "use strict";
    return this.trackingClick ? ((this.targetElement !== e.target || this.touchHasMoved(e)) && this.reset(),
    !0) : !0
}
,
LongClick.prototype.onTouchEnd = function(e) {
    "use strict";
    return this.trackingClick ? e.timeStamp - this.trackingClickStart < this.time ? (this.reset(),
    !0) : !1 : !0
}
,
LongClick.prototype.reset = function() {
    "use strict";
    this.timer && window.clearTimeout(this.timer),
    this.trackingClick = !1,
    this.trackingClickStart = null,
    this.targetElement = null
}
,
LongClick.prototype.onTouchCancel = function() {
    "use strict";
    this.reset()
}
,
LongClick.prototype.destroy = function() {
    "use strict";
    var e = this.layer;
    e.removeEventListener(this.startEventName, this.onTouchStart, !1),
    e.removeEventListener(this.moveEventName, this.onTouchMove, !1),
    e.removeEventListener(this.endEventName, this.onTouchEnd, !1),
    e.removeEventListener(this.cancelEventName, this.onTouchCancel, !1)
}
,
LongClick.attach = function(e, t, n) {
    "use strict";
    return new LongClick(e,t,n)
}
,
(function(e) {
    var t = (function() {
        function e(e, t, n, i, o, r, s) {
            this.languageId = e,
            this.cultureCode = t,
            this.cultureCode2 = n,
            this.languageCode = i,
            this.supportsEmbeddedFonts = o,
            this.isAsianRegion = r,
            this.allowCapitalisation = s
        }
        return e
    }
    )();
    e.LanguageProfile = t
}
)(ns_gen5_ml || (ns_gen5_ml = {})),
(function(e) {
    var t = e.LanguageProfile
      , n = (function() {
        function e() {}
        return e.SelectLanguageProfile = function(t) {
            0 == t && (t = 1),
            e.SelectedProfile = e.LanguageProfiles[t]
        }
        ,
        e.getRegionIsAsian = function() {
            return e.SelectedProfile.isAsianRegion
        }
        ,
        e.getLanguageId = function() {
            return e.SelectedProfile.languageId
        }
        ,
        e.allowCapitalisation = function() {
            return e.SelectedProfile.allowCapitalisation
        }
        ,
        e.getLanguageCode = function() {
            return this.SelectedProfile.languageCode
        }
        ,
        e.getCultureCode = function() {
            return this.SelectedProfile.cultureCode
        }
        ,
        e.getCultureCode2 = function() {
            return this.SelectedProfile.cultureCode2
        }
        ,
        e.init = function() {
            e.LanguageProfiles = {
                1: new t(1,"en","en","en-GB",!0,!1,!0),
                2: new t(2,"zht","zh-cht","ch",!1,!0,!1),
                3: new t(3,"es","es","es",!0,!1,!0),
                4: new t(4,"fr","fr","fr",!0,!1,!0),
                5: new t(5,"de","de","de",!0,!1,!0),
                6: new t(6,"it","it","it",!0,!1,!0),
                7: new t(7,"da","da","da",!0,!1,!0),
                8: new t(8,"sv","sv","sv",!0,!1,!0),
                9: new t(9,"nn","nn","no",!0,!1,!0),
                10: new t(10,"zh","zh-chs","zh-cn",!1,!0,!1),
                19: new t(19,"bg","bg","bg",!0,!1,!0),
                20: new t(20,"el","el","el",!0,!1,!1),
                21: new t(21,"pl","pl","pl",!0,!1,!0),
                22: new t(22,"pt","pt","pt",!0,!1,!0),
                23: new t(23,"ro","ro","ro",!0,!1,!0),
                24: new t(24,"cs","cs","cs",!0,!1,!0),
                25: new t(25,"hu","hu","hu",!0,!1,!0),
                26: new t(26,"sk","sk","sk",!0,!1,!0),
                28: new t(28,"nl","nl","nl-nl",!0,!1,!0),
                29: new t(29,"et","et","et-EE",!0,!1,!0),
                30: new t(30,"au","au","en-AU",!0,!1,!0),
                31: new t(31,"ru","ru","ru",!0,!1,!0),
                32: new t(32,"us","us","en-US",!0,!1,!0),
                33: new t(33,"br","br","br",!0,!1,!0)
            }
        }
        ,
        e
    }
    )();
    e.LanguageSettings = n,
    n.init()
}
)(ns_gen5_ml || (ns_gen5_ml = {})),
(function(e) {
    var t = e.LanguageSettings
      , n = (function() {
        function e() {}
        return e.GetMonthName = function(n) {
            return e._mylanguage || (e._mylanguage = e.ALL_MONTHS[t.getLanguageId()]),
            t.getRegionIsAsian() ? (n + 1 + e.CMC).toString() : e._mylanguage[n].toString()
        }
        ,
        e.CMC = "月",
        e.CDC = "日",
        e.ALL_MONTHS = {
            1: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
            2: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"],
            3: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"],
            5: ["Januar ", "Februar ", "März", "April ", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Dezember"],
            6: ["Gennaio", "Febbraio", "Marzo", "Aprile", "Maggio", "Giugno", "Luglio", "Agosto", "Settembre", "Ottobre", "Novembre", "Dicembre"],
            7: ["Januar", "Februar", "Marts", "April", "Maj", "Juni", "Juli", "August", "September", "Oktober ", "November", "December"],
            8: ["Januari", "Februari", "Mars", "April", "Maj", "Juni", "Juli", "Augusti", "September", "Oktober", "November", "December"],
            9: ["Januar", "Februar", "Mars", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Desember"],
            10: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"],
            19: ["Януари", "Февруари", "Март", "Април", "Май", "Юни", "Юли", "Август", "Септември", "Октомври", "Ноември", "Декември"],
            20: ["Ιανουαρίου", "Φεβρουαρίου", "Μαρτίου", "Απριλίου", "Μαϊου", "Ιουνίου", "Ιουλίου", "Αυγούστου", "Σεπτεμβρίου", "Οκτωβρίου", "Νοεμβρίου", "Δεκεμβρίου"],
            21: ["stycznia", "lutego", "marca", "kwietnia", "maja", "czerwca", "lipca", "sierpnia", "września", "października", "listopada", "grudnia"],
            22: ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"],
            23: ["Ian", "Feb", "Mar", "Apr", "Mai", "Iun", "Iul", "Aug", "Sep", "Oct", "Nov", "Dec"],
            24: ["ledna", "února", "března", "dubna", "května", "června", "července", "srpna", "září", "října", "listopadu", "prosince"],
            25: ["Január", "Február", "Március", "Április", "Május", "Június", "Július", "Augusztus", "Szeptember", "Október", "November", "December"],
            26: ["januára", "februára", "marca", "apríla", "mája", "júna", "júla", "augusta", "septembra", "októbra", "novembra", "decembra"],
            28: ["januari", "februari", "maart", "april", "mei", "juni", "juli", "augustus", "september", "oktober", "november", "december"],
            29: ["jaanuar", "veebruar", "märts", "aprill", "mai", "juuni", "juuli", "august", "september", "oktoober", "november", "detsember"],
            30: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
            31: ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"],
            32: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
            33: ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"]
        },
        e
    }
    )();
    e.LongMonthNames = n
}
)(ns_gen5_ml || (ns_gen5_ml = {})),
(function(e) {
    var t = e.LanguageSettings
      , n = (function() {
        function e() {}
        return e.GetDay = function(n) {
            return e._mylanguage || (e._mylanguage = e.ALL_DAYS[t.getLanguageId()]),
            e._mylanguage[n].toString()
        }
        ,
        e.ALL_DAYS = {
            1: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            2: ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"],
            3: ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"],
            5: ["Sonntag", "Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag", "Samstag"],
            6: ["Domenica", "Lunedì", "Martedì", "Mercoledì", "Giovedì", "Venerdì", "Sabato"],
            7: ["Søndag", "Mandag", "Tirsdag", "Onsdag", "Torsdag", "Fredag", "Lørdag"],
            8: ["Söndag", "Mandag", "Tisdag", "Onsdag", "Torsdag", "Fredag", "Lördag"],
            9: ["Søndag", "Mandag", "Tirsdag", "Onsdag", "Torsdag", "Fredag", "Lørdag"],
            10: ["星期天", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"],
            19: ["Неделя", "Понеделник", "Вторник", "Сряда", "Четвъртък", "Петък", "Събота"],
            20: ["Κυριακή", "Δευτέρα", "Τρίτη", "Τετάρτη", "Πέμπτη", "Παρασκευή", "Σάββατο"],
            21: ["Niedziela", "Poniedziałek", "Wtorek", "Środa", "Czwartek", "Piątek", "Sobota"],
            22: ["Domingo", "Segunda-Feira", "Terça-Feira", "Quarta-Feira", "Quinta-Feira", "Sexta-Feira", "Sábado"],
            23: ["Duminica", "Luni", "Marti", "Miercuri", "Joi", "Vineri", "Sambata"],
            24: ["Neděle", "Pondělí", "Úterý", "Středa", "Čtvrtek", "Pátek", "Sobota"],
            25: ["Vasárnap", "Hétfő", "Kedd", "Szerda", " Csütörtök", "Péntek", "Szombat"],
            26: ["Nedeľa", "Pondelok", "Utorok", "Streda", "Štvrtok", "Piatok", "Sobota"],
            28: ["Zondag", "Maandag", "Dinsdag", "Woensdag", "Donderdag", "Vrijdag", "Zaterdag"],
            29: ["pühapäev", "esmaspäev", "teisipäev", "kolmapäev", "neljapäev", "reede", "laupäev"],
            30: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            31: ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"],
            32: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            33: ["Domingo", "Segunda-Feira", "Terça-Feira", "Quarta-Feira", "Quinta-Feira", "Sexta-Feira", "Sábado"]
        },
        e
    }
    )();
    e.LongDayNames = n
}
)(ns_gen5_ml || (ns_gen5_ml = {})),
(function(e) {
    var t = e.LanguageSettings
      , n = (function() {
        function e() {}
        return e.GetMonthName = function(n) {
            return e._mylanguage || (e._mylanguage = e.ALL_MONTHS[t.getLanguageId()]),
            t.getRegionIsAsian() ? String(n + 1) + this.CMC : e._mylanguage[n]
        }
        ,
        e.CYC = "年",
        e.CMC = "月",
        e.CDC = "日",
        e.ALL_MONTHS = {
            1: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
            2: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
            3: ["Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul", "Ago", "Sep", "Oct", "Nov", "Dic"],
            4: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
            5: ["Jan", "Feb", "Mär", "Apr", "Mai", "Jun", "Jul", "Aug", "Sep", "Okt", "Nov", "Dez"],
            6: ["Gen", "Feb", "Mar", "Apr", "Mag", "Giu", "Lug", "Ago", "Set", "Ott", "Nov", "Dic"],
            7: ["jan", "feb", "mar", "apr", "maj", "jun", "jul", "aug", "sep", "okt", "nov", "dec"],
            8: ["jan", "feb", "mar", "apr", "maj", "jun", "jul", "aug", "sep", "okt", "nov", "dec"],
            9: ["jan", "feb", "mar", "apr", "mai", "jun", "jul", "aug", "sep", "okt", "nov", "des"],
            10: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
            14: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
            19: ["яну", "фев", "мар", "апр", "май", "юни", "юли", "авг", "сеп", "окт", "ное", "дек"],
            20: ["Ιαν", "Φεβ", "Μαρ", "Απρ", "Μαΐου", "Ιουν", "Ιουλ", "Αυγ", "Σεπ", "Οκτ", "Νοε", "Δεκ"],
            21: ["Sty", "Lut", "Mar", "Kwi", "Maj", "Cze", "Lip", "Sie", "Wrz", "Paź", "Lis", "Gru"],
            22: ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Sep", "Out", "Nov", "Dez"],
            23: ["Ian", "Feb", "Mar", "Apr", "Mai", "Iun", "Iul", "Aug", "Sep", "Oct", "Nov", "Dec"],
            24: ["led", "úno", "bře", "dub", "kvě", "čer", "čvc", "srp", "zář", "říj", "lis", "pro"],
            25: ["Jan", "Feb", "Már", "Ápr", "Máj", "Jún", "Júl", "Aug", "Szep", "Okt", "Nov", "Dec"],
            26: ["jan", "feb", "mar", "apr", "máj", "jún", "júl", "aug", "sep", "okt", "nov", "dec"],
            28: ["jan", "feb", "mrt", "apr", "mei", "jun", "jul", "aug", "sep", "okt", "nov", "dec"],
            29: ["jan", "veb", "mär", "apr", "mai", "jun", "jul", "aug", "sep", "okt", "nov", "det"],
            30: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
            31: ["Янв", "Фев", "Мар", "Апр", "Май", "Июн", "Июл", "Авг", "Сен", "Окт", "Нбр", "Дек"],
            32: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
            33: ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Sep", "Out", "Nov", "Dez"]
        },
        e
    }
    )();
    e.ShortMonthNames = n
}
)(ns_gen5_ml || (ns_gen5_ml = {})),
(function(e) {
    var t = e.LanguageSettings
      , n = (function() {
        function e() {}
        return e.GetDay = function(n) {
            return e._mylanguage || (e._mylanguage = e.ALL_DAYS[t.getLanguageId()]),
            e._mylanguage[n]
        }
        ,
        e.ALL_DAYS = {
            1: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
            2: ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"],
            3: ["Dom", "Lun", "Mar", "Mié", "Jue", "Vie", "Sáb"],
            5: ["So", "Mo", "Di", "Mi", "Do", "Fr", "Sa"],
            6: ["Dom", "Lun", "Mar", "Mer", "Giov", "Ven", "Sab"],
            7: ["Søn", "Man", "Tir", "Ons", "Tor", "Fre", " Lør"],
            8: ["Sön", "Mån", "Tis", "Ons", "Tor", "Fre", "Lör"],
            9: ["Søn", "Man", "Tirs", "Ons", "Tors", "Fre", "Lør"],
            10: ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"],
            19: ["Нед", "Пон", "Вт", "Ср", "Чет", "Пет", "Съб"],
            20: ["Κυρ", "Δευ", "Τρι", "Τετ", "Πεμ", "Παρ", "Σαβ"],
            21: ["N", "Pn", "Wt", "Śr", "Cz", "Pt", "So"],
            22: ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sab"],
            23: ["D", "L", "Ma", "Mi", "J", "V", "S"],
            24: ["Ne", "Po", "Út", "St", "Čt", "Pá", "So"],
            25: ["Vas", "Hét", "Kedd", "Sze", " Csüt", "Pén", "Szo"],
            26: ["Ned", "Pon", "Ut", "Str", "Štv", "Pia", "Sob"],
            28: ["zo", "ma", "di", "wo", "do", "vr", "za"],
            29: ["P", "E", "T", "K", "N", "R", "L"],
            30: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
            31: ["Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"],
            32: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
            33: ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sab"]
        },
        e
    }
    )();
    e.ShortDayNames = n
}
)(ns_gen5_ml || (ns_gen5_ml = {})),
(function(e) {
    var t = e.LanguageSettings
      , n = e.ShortMonthNames
      , i = e.LongMonthNames
      , o = e.ShortDayNames
      , r = e.LongDayNames
      , s = (function() {
        function e() {}
        return e.FormatDate = function(e, t, n, i) {
            var o, r;
            switch (0 != i && (r = t.getMinutes(),
            r += i,
            t.setMinutes(r)),
            e) {
            case this.BOOK_CLOSE:
                o = this.bookClose(t);
                break;
            case this.DAY_DATE_LONGMONTH:
                o = this.dayDateLongMonth(t);
                break;
            case this.DAY_SUFFIX_DATE_MONTH_TIME:
                o = this.daySuffixDateMonthTime(t);
                break;
            case this.DAY_DATE_MONTH_YEAR_TIME:
                o = this.dayDateMonthYearTime(t);
                break;
            case this.DAY_SUFFIX_TIME:
                o = this.daySuffixTime(t);
                break;
            case this.HH_MM_SS:
                o = this.hhmmss(t);
                break;
            case this.HH_MM:
                o = this.hhmm(t);
                break;
            case this.DAY_DATE:
                o = this.dayDate(t);
                break;
            case this.DAY_DATE_LONG:
                o = this.dayDateLong(t);
                break;
            case this.DAY_ONLY:
                o = this.day(t);
                break;
            case this.DATE_MONTH_YEAR:
                o = this.dateMonthYear(t);
                break;
            case this.DAY_DATE_MONTH_YEAR_TIME_SECONDS:
                o = this.dayDateMonthYearTimeSeconds(t);
                break;
            case this.DAY_DATE_MONTH_TIME:
                o = this.dayDateMonthTime(t);
                break;
            case this.DATE_MONTHNAME_YEAR:
                o = this.dateMonthNameYear(t);
                break;
            case this.LONGDAY_DATE_MONTH_TIME:
                o = this.longDayDateMonthTime(t)
            }
            return o
        }
        ,
        e.FormatStringToDate = function(e) {
            var t = e.split(" ")
              , n = t[0]
              , i = n.split("/")
              , o = t[1]
              , r = o.split(":")
              , s = new Date;
            return s.setDate(parseInt(i[0])),
            s.setMonth(parseInt(i[1]) - 1),
            s.setFullYear(parseInt(i[2])),
            s.setHours(parseInt(r[0])),
            s.setMinutes(parseInt(r[1])),
            s.setSeconds(parseInt(r[2])),
            s
        }
        ,
        e.bookClose = function(i) {
            var o, r = i.getDate().toString(), s = n.GetMonthName(i.getMonth()), a = i.getMinutes().toString(), c = i.getHours().toString(), l = (c.length > 1 ? c : "0" + c) + this.TIME_SEPERATOR + (a.length > 1 ? a : "0" + a);
            return t.getRegionIsAsian() ? (r += n.CDC,
            o = s + r + " " + l) : o = e.RequiresUSStyleFormatting ? s + " " + r + " " + l : 25 == t.getLanguageId() ? s + " " + r + " " + l : r + " " + s + " " + l,
            o
        }
        ,
        e.dayDateLong = function(e) {
            var t = e.getDay();
            return o.GetDay(t) + " " + this.dayDate(e)
        }
        ,
        e.dateMonthNameYear = function(e) {
            return this.dayDate(e) + " " + e.getFullYear().toString().substr(-2)
        }
        ,
        e.dayDate = function(i) {
            var o, r = i.getDate(), s = 10 > r ? "0" + r.toString() : r.toString(), a = n.GetMonthName(i.getMonth());
            return t.getRegionIsAsian() ? (s += n.CDC,
            o = a + s) : o = e.RequiresUSStyleFormatting ? a + " " + s : 25 == t.getLanguageId() ? a + " " + s : s + " " + a,
            o
        }
        ,
        e.day = function(e) {
            var t = e.getDay();
            return r.GetDay(t)
        }
        ,
        e.hhmmss = function(e) {
            var t = e.getHours().toString()
              , n = e.getMinutes().toString()
              , i = e.getSeconds().toString();
            return t.length < 2 && (t = "0" + t),
            n.length < 2 && (n = "0" + n),
            i.length < 2 && (i = "0" + i),
            t + ":" + n + ":" + i
        }
        ,
        e.hhmm = function(e) {
            var t = e.getHours().toString()
              , n = e.getMinutes().toString();
            return t.length < 2 && (t = "0" + t),
            n.length < 2 && (n = "0" + n),
            t + ":" + n
        }
        ,
        e.dayDateLongMonth = function(n) {
            var o, r = n.toString(), s = i.GetMonthName(n.getMonth()).toString(), a = this.GetSuffix(n.getDay()), c = t.getLanguageId();
            switch (c) {
            case 1:
            case 6:
            case 9:
            case 19:
            case 20:
            case 21:
            case 24:
            case 26:
            case 28:
            case 31:
            case 32:
                o = e.RequiresUSStyleFormatting ? s + " " + r + a : r + a + " " + s;
                break;
            case 2:
            case 10:
                r += i.CDC,
                o = s + " " + r;
                break;
            case 3:
                o = r + a + " de " + s;
                break;
            case 5:
                o = ", den " + r + a + " " + s;
                break;
            case 7:
            case 8:
                o = "den " + r + a + " " + s;
                break;
            case 23:
                o = ", " + r + a + " " + s;
                break;
            case 25:
                o = s + " " + r + a;
                break;
            default:
                o = r + " " + s
            }
            return o
        }
        ,
        e.dayDateMonthYearTime = function(i) {
            var r, s, a = n.GetMonthName(i.getMonth()), c = o.GetDay(i.getDay()), l = i.getMinutes().toString(), u = t.getLanguageId();
            switch (s = 0 == i.getHours() ? "00" : i.getHours() < 10 ? "0" + i.getHours().toString() : i.getHours().toString(),
            l = 0 == i.getMinutes() ? "00" : i.getMinutes() < 10 ? "0" + i.getMinutes().toString() : i.getMinutes().toString(),
            u) {
            case 2:
            case 10:
                r = c + " " + i.getFullYear() + n.CYC + a + i.getDate() + n.CDC + ", " + s + ":" + l;
                break;
            case 23:
                r = c + ", " + i.getDate() + " " + a + " " + i.getFullYear() + ", " + s + ":" + l;
                break;
            case 25:
                r = c + " " + i.getFullYear() + " " + a + " " + i.getDate() + " " + s + ":" + l;
                break;
            default:
                r = e.RequiresUSStyleFormatting ? c + " " + a + " " + i.getDate() + " " + i.getFullYear() + ", " + s + ":" + l : c + " " + i.getDate() + " " + a + " " + i.getFullYear() + ", " + s + ":" + l
            }
            return r
        }
        ,
        e.daySuffixDateMonthTime = function(t) {
            var i, r = n.GetMonthName(t.getMonth()), s = o.GetDay(t.getDay()), a = t.getMinutes(), c = a.toString(), l = t.getDate(), u = this.GetSuffix(l), d = Number(Locator.user.languageId), h = t.getHours(), p = ("00" + h.toString()).slice(-2);
            switch (c = ("00" + a.toString()).slice(-2),
            d) {
            case 2:
            case 10:
                i = s + " " + r + l + u + ", " + p + ":" + c;
                break;
            case 23:
                i = s + ", " + l + u + " " + r + ", " + p + ":" + c;
                break;
            case 25:
                i = s + " " + r + " " + l + u + " " + p + ":" + c;
                break;
            case 3:
            case 6:
            case 28:
                i = s + " " + l + " " + r + " " + p + ":" + c;
                break;
            default:
                i = e.RequiresUSStyleFormatting ? s + " " + r + " " + l + u + " " + p + ":" + c : s + " " + l + u + " " + r + " " + p + ":" + c
            }
            return i
        }
        ,
        e.daySuffixTime = function(e) {
            var t, n = o.GetDay(e.getDay()), i = e.getMinutes(), r = i.toString(), s = e.getHours(), a = ("00" + s.toString()).slice(-2);
            return r = ("00" + i.toString()).slice(-2),
            t = n + " " + a + ":" + r
        }
        ,
        e.dayDateMonthYearTimeSeconds = function(e) {
            var t = this.dayDateMonthYearTime(e)
              , n = e.getSeconds().toString();
            return n.length < 2 && (n = "0" + n),
            t += ":" + n
        }
        ,
        e.dateMonthYear = function(e) {
            var t = (e.getDay() < 10 ? "0" + e.getDay() : e.getDay()).toString()
              , n = ((e.getMonth() < 9 ? "0" : "") + (e.getMonth() + 1)).toString()
              , i = e.getFullYear().toString()
              , o = t + "." + n + "." + i;
            return o
        }
        ,
        e.dayDateMonthTime = function(t) {
            var i, r = n.GetMonthName(t.getMonth()), s = o.GetDay(t.getDay()), a = t.getMinutes().toString();
            return i = 0 == t.getHours() ? "00" : t.getHours() < 10 ? "0" + t.getHours().toString() : t.getHours().toString(),
            a = 0 == t.getMinutes() ? "00" : t.getMinutes() < 10 ? "0" + t.getMinutes().toString() : t.getMinutes().toString(),
            e.RequiresUSStyleFormatting ? s + " " + r + " " + t.getDate() + " " + i + ":" + a : s + " " + t.getDate() + " " + r + " " + i + ":" + a
        }
        ,
        e.longDayDateMonthTime = function(t) {
            var i, o = n.GetMonthName(t.getMonth()), s = r.GetDay(t.getDay()), a = t.getMinutes().toString();
            return i = 0 == t.getHours() ? "00" : t.getHours() < 10 ? "0" + t.getHours().toString() : t.getHours().toString(),
            a = 0 == t.getMinutes() ? "00" : t.getMinutes() < 10 ? "0" + t.getMinutes().toString() : t.getMinutes().toString(),
            e.RequiresUSStyleFormatting ? s + " " + o + " " + t.getDate() + " " + i + ":" + a : s + " " + t.getDate() + " " + o + " " + i + ":" + a
        }
        ,
        e.GetSuffix = function(e) {
            var n, i, o = t.getLanguageId(), r = [];
            switch (e %= 100,
            e > 19 && (i = e.toString(),
            e = parseInt(this.charAt(i, i.length - 1))),
            o) {
            case 1:
                r = ["th", "st", "nd", "rd", "th", "th", "th", "th", "th", "th", "th", "th", "th", "th", "th", "th", "th", "th", "th", "th"];
                break;
            case 6:
                n = 1 == e ? "°" : "";
                break;
            case 3:
                n = "°";
                break;
            case 5:
            case 7:
            case 9:
            case 21:
            case 24:
            case 25:
            case 26:
                n = ".";
                break;
            case 19:
            case 20:
            case 22:
            case 23:
                n = "";
                break;
            case 8:
                r = ["e:", ":a", ":a", ":e", ":e", ":e", ":e", ":e", ":e", ":e", ":e", ":e", ":e", ":e", ":e", ":e", ":e", ":e", ":e", ":e"];
                break;
            case 28:
                r = ["e", "e", "e", "e", "e", "e", "e", "e", "e", "e", "e", "e", "e", "e", "e", "e", "e", "e", "e", "e"];
                break;
            default:
                n = ""
            }
            return null != n ? n : r[e]
        }
        ,
        e.charAt = function(e, t) {
            var n = e.charAt(t);
            return n
        }
        ,
        e.BOOK_CLOSE = "bookClose",
        e.HH_MM_SS = "hhmmss",
        e.HH_MM = "hhmm",
        e.DAY_SUFFIX_DATE_MONTH_TIME = "daySuffixDateMonthTime",
        e.DAY_DATE_MONTH_YEAR_TIME = "dayDateMonthYearTime",
        e.DAY_SUFFIX_TIME = "daySuffixTime",
        e.DAY_DATE_LONGMONTH = "dayDateLongMonth",
        e.DAY_ONLY = "day",
        e.DAY_DATE = "dayDate",
        e.DAY_DATE_LONG = "dayDateLong",
        e.DATE_MONTH_YEAR = "dateMonthYear",
        e.DAY_DATE_MONTH_TIME = "dayDateMonthTime",
        e.DAY_DATE_MONTH_YEAR_TIME_SECONDS = "dayDateMonthYearTimeSeconds",
        e.DATE_MONTHNAME_YEAR = "dateMonthNameYear",
        e.LONGDAY_DATE_MONTH_TIME = "longdayDateMonthTime",
        e.TIME_SEPERATOR = ":",
        e.RequiresUSStyleFormatting = !1,
        e
    }
    )();
    e.MLDateFormatter = s
}
)(ns_gen5_ml || (ns_gen5_ml = {})),
(function(e) {
    var t = (function() {
        function e() {}
        return e.Init = function() {
            var t = Locator.user.countryId
              , n = window.location.hostname.toLowerCase().split(".");
            e.IsSpanish = t === e.Spain,
            e.IsDanish = t === e.Denmark,
            e.IsGreek = t === e.Greece,
            e.IsCypriot = t === e.Cyprus,
            e.IsItalyDomain = t === e.Italy,
            e.IsBulgarian = t === e.Bulgaria,
            e.IsSpainDomain = "es" == n[n.length - 1],
            e.IsAusDomain = t === e.Australia,
            e.IsCzechRepublic = t === e.CzechRepublic,
            e.IsIndia = t === e.India,
            e.IsEstonia = t === e.Estonia,
            e.IsEstoniaRestricted = e.IsEstonia && Locator.user.restrictedBettingEnabled,
            e.IsMexico = t === e.Mexico,
            e.IsMexicoDomain = "mx" == n[n.length - 1],
            e.SupportEmail = e.IsMexicoDomain ? "SupportEmailMX" : "SupportEmail",
            e.IsUnitedStatesOfAmerica = t === e.UnitedStatesOfAmerica,
            e.IsSwedish = t === e.Sweden,
            e.IsDkDomain = "dk" == n[n.length - 1],
            e.IsCanadian = t === e.Canada,
            e.IsAusDomainAndCustomer = e.IsAusDomain && (Locator.user.isLoggedIn || !Locator.user.isLoggedIn && "AU" === Locator.user.countryCode)
        }
        ,
        e.Denmark = "54",
        e.Spain = "171",
        e.Greenland = "218",
        e.Australia = "13",
        e.Germany = "75",
        e.Greece = "78",
        e.Cyprus = "51",
        e.Italy = "97",
        e.Bulgaria = "31",
        e.CzechRepublic = "52",
        e.India = "91",
        e.Estonia = "64",
        e.Mexico = "126",
        e.UnitedStatesOfAmerica = "198",
        e.Sweden = "181",
        e.Canada = "36",
        e
    }
    )();
    e.RegisteredCountry = t
}
)(ns_gen5_util_user || (ns_gen5_util_user = {})),
(function(e) {
    var t = (function() {
        function e() {}
        return e.HexStringToNumber = function(e) {
            return Number("0x" + e.slice(1))
        }
        ,
        e.NumberToHexString = function(e) {
            var t = (16777215 & e).toString(16);
            return "#" + "00000".substring(0, 6 - t.length) + t
        }
        ,
        e.AdjustColourBrightness = function(e, t) {
            return e = ((16711680 & e) >> 16) * t << 16 | ((65280 & e) >> 8) * t << 8 | (255 & e) * t,
            e > 16777215 ? 16777215 : e
        }
        ,
        e.AdjustHexBrightness = function(e, t) {
            return this.NumberToHexString(this.AdjustColourBrightness(this.HexStringToNumber(e), t))
        }
        ,
        e.Blend = function(e, t, n) {
            var i = (((16711680 & e) >> 16) * (1 - n) << 16 | ((65280 & e) >> 8) * (1 - n) << 8 | (255 & e) * (1 - n)) + (((16711680 & t) >> 16) * n << 16 | ((65280 & t) >> 8) * n << 8 | (255 & t) * n);
            return i
        }
        ,
        e
    }
    )();
    e.ColourUtil = t
}
)(ns_gen5_util || (ns_gen5_util = {})),
(function(e) {
    var t;
    !(function(e) {
        function t(e) {
            return e - 0
        }
        function n(e) {
            return ~~e
        }
        function i(e) {
            return e - e % 1
        }
        function o(e) {
            var t, n, i, o, r = atob(e), s = r.length, a = new Uint8Array(new ArrayBuffer(s));
            for (t = 0; s > t; t++)
                a[t] = r.charCodeAt(t);
            for (n = new ArrayBuffer(a.length),
            i = new DataView(n),
            t = 0,
            o = a.length; o > t; t++)
                i.setUint8(a.length - 1 - t, a[t]);
            return i.getUint32(0)
        }
        e.StringToNumber = t,
        e.StringToInteger = n,
        e.Truncate = i,
        e.ConvertBase64ToNumber = o
    }
    )(t = e.MathUtil || (e.MathUtil = {}))
}
)(ns_gen5_util || (ns_gen5_util = {})),
(function(e) {
    var t = (function() {
        function e() {}
        return e.prototype.setConfigJSON = function(e) {
            this.rawJSON = e,
            this.configJSON = this.rawJSON.config
        }
        ,
        e.prototype.getItem = function(e) {
            return this.configJSON[e]
        }
        ,
        e.prototype.getRawJson = function() {
            return this.rawJSON
        }
        ,
        e
    }
    )();
    e.Config = t
}
)(ns_gen5_util || (ns_gen5_util = {})),
(function(e) {
    var t = (function() {
        function e(e) {
            this.message = e,
            this.timestamp = new Date
        }
        return e.prototype.toString = function() {
            return "[" + this.timestamp + "] - " + this.message
        }
        ,
        e
    }
    )();
    e.LogEntry = t
}
)(ns_gen5_util || (ns_gen5_util = {})),
(function(e) {
    e.AjaxLoader = (function() {
        "use strict";
        function t(e, t) {
            var i, o, r, s, a, c, l = [];
            if (l.splice(0, 0, document.getElementsByTagName("script")),
            c = !1,
            e.src)
                for (s = 0,
                a = l.length; a > s; s++)
                    if (l[s].src && l[s].src.split("?")[0] == e.src.split("?")[0]) {
                        c = !0;
                        break
                    }
            if (c)
                t && t();
            else {
                if (o = document.head || document.getElementsByTagName("head")[0],
                r = document.createElement("script"),
                r.type = "text/javascript",
                e.src)
                    r.src = e.src,
                    r.onerror = r.onload = t;
                else {
                    for (i = n(e),
                    s = 0,
                    a = l.length; a > s; s++)
                        n(l[s]) == i && l[s].parentNode.removeChild(l[s]);
                    r.appendChild(document.createTextNode(i)),
                    t && t()
                }
                o.appendChild(r, o.firstChild),
                e.parentNode && e.parentNode.removeChild(e)
            }
        }
        function n(e) {
            return e.text || e.textContent || e.innerHTML || ""
        }
        function i(e, n, o) {
            n < e.length ? t(e[n], (function() {
                i(e, ++n, o)
            }
            )) : o && o()
        }
        return {
            load: function(e, t, n) {
                var i = new XMLHttpRequest;
                i.onreadystatechange = function() {
                    4 == i.readyState && (200 == i.status ? (t.innerHTML = i.responseText,
                    n && n()) : $log("MatchLive markup request failed, status: " + i.status),
                    i.onreadystatechange = null)
                }
                ,
                i.open("GET", e, !0),
                i.send("")
            },
            loadAndExecute: function(t, n, i) {
                e.AjaxLoader.load(t, n, (function() {
                    e.AjaxLoader.processScripts(n, i)
                }
                ))
            },
            processScripts: function(e, t) {
                var n, o = [], r = e.getElementsByTagName("script");
                for (n = r.length; n--; )
                    r[0].type && "text/javascript" !== r[0].type.toLowerCase() || o.push(r[0].parentNode ? r[0].parentNode.removeChild(r[0]) : r[0]);
                i(o, 0, t)
            }
        }
    }
    )()
}
)(ns_gen5_util || (ns_gen5_util = {})),
(function(e) {
    e.EventTrigger = (function() {
        "use strict";
        return {
            triggerEventOnElement: function(e, t, n) {
                var i;
                document.createEvent ? (i = document.createEvent("HTMLEvents"),
                i.initEvent(t, !0, !0)) : (i = document.createEventObject(),
                i.eventType = t),
                i.eventName = t,
                i.data = n || {},
                document.createEvent ? document.dispatchEvent(i) : document.fireEvent("on" + i.eventType, i)
            }
        }
    }
    )()
}
)(ns_gen5_util || (ns_gen5_util = {})),
(function(e) {
    var t = (function() {
        function e(e, t) {
            this.scope = e,
            this.method = t
        }
        return e.prototype.toString = function() {
            return "[Delegate scope=" + this.scope + "]"
        }
        ,
        e
    }
    )();
    e.Delegate = t,
    e.EventListener = t
}
)(ns_gen5_util || (ns_gen5_util = {})),
(function(e) {
    var t;
    !(function(e) {
        e[e.DEFAULT = 1] = "DEFAULT",
        e[e.FRACTIONAL = 1] = "FRACTIONAL",
        e[e.DECIMAL = 2] = "DECIMAL",
        e[e.AMERICAN = 3] = "AMERICAN",
        e[e.AMERICANFRACTIONAL = 4] = "AMERICANFRACTIONAL"
    }
    )(t = e.OddsType || (e.OddsType = {}))
}
)(ns_gen5_util || (ns_gen5_util = {})),
(function(e) {
    var t = (function() {
        function e() {}
        return e.NOT_SUSPENDED = "0",
        e.SUSPEND_AND_SHOW = "1",
        e.OFF_THE_BOARD = "2",
        e.IPPG_SUSPEND_AND_HIDE = "3",
        e
    }
    )();
    e.SuspendType = t
}
)(ns_gen5_util || (ns_gen5_util = {})),
(function(e) {
    var t, n, i = {}, o = {};
    !(function(e) {
        e[e.AVAILABLE = 0] = "AVAILABLE",
        e[e.BELOW_MINIMUM = 1] = "BELOW_MINIMUM",
        e[e.NOT_OFFERED = 2] = "NOT_OFFERED"
    }
    )(t = e.OddsAvailable || (e.OddsAvailable = {})),
    n = (function() {
        function e() {}
        return e.ConvertOddsDecimal = function(t, n, o) {
            var r, s, a, c, l, u, d, h;
            if (n || 0 == n || (n = 2),
            o || 0 == o || (o = !0),
            r = t + n,
            o && (i[r] || !t))
                return i[r];
            if (a = t.indexOf("/", 1),
            a > -1)
                if (s = [t.slice(0, a), t.slice(++a)],
                c = Number(Number(s[0]) / Number(s[1]) + (o ? 1 : 0)).toFixed(4),
                Number(c) < 1.1 && c.split(".")[1].length > 2 && 0 == e.MinOdds && "0" !== c.charAt(c.length - 2) && (n = 3),
                l = 0,
                u = c.indexOf(".", 1),
                0 == n)
                    c = c.slice(0, u > -1 ? u : 2147483647);
                else if (u > -1)
                    if (l = n - (c.length - ++u),
                    l > 0)
                        for (d = 0; l > d; d++)
                            c += "0";
                    else
                        0 > l && (c = c.slice(0, c.length + l));
                else
                    for (c += ".",
                    h = 0; n > h; h++)
                        c += "0";
            return o && (i[r] = c),
            c
        }
        ,
        e.ConvertOddsUS = function(e) {
            var t, n, i, r, s, a;
            return o[e] || !e ? o[e] : (i = e.indexOf("/", 1),
            i > -1 && (n = [e.slice(0, i), e.slice(++i)],
            r = Number(n[0]),
            s = Number(n[1]),
            a = r / s,
            t = a > .999999 ? "+" + String(100 * a + 1e-6 | 0) : "-" + String(s / r * 100 + .999999 | 0)),
            o[e] = t,
            t)
        }
        ,
        e.AreOddsBelowMinimum = function(t) {
            if (e.MinOdds <= 1)
                return !1;
            var n = e.ConvertOddsDecimal(t, 4);
            return isNaN(n) ? !1 : n - 0 < e.MinOdds
        }
        ,
        e.AreOddsRestricted = function(e) {
            var t, n, i = e.data.PX, o = !1;
            if (i) {
                t = -1,
                n = Locator.user.countryCode64;
                do
                    t = i.indexOf(n, ++t);
                while (-1 != t && t % 2);o = t > -1
            }
            return o
        }
        ,
        e.ConvertDecimalOddsToFractional = function(t) {
            var n, i, o, r = String(t), s = Math.pow(r.length, 10), a = (t - 1) * s, c = e.FactorOdds(a, s);
            return c ? (i = a / c,
            o = s / c) : (i = a,
            o = s),
            n = String(i) + "/" + String(o)
        }
        ,
        e.FactorOdds = function(t, n) {
            var i;
            return i = e.HCF(t, n),
            Math.floor(i)
        }
        ,
        e.HCF = function(t, n) {
            var i;
            return i = 0 == t ? n : 0 == n ? t : e.HCF(n, t % n),
            Math.floor(i)
        }
        ,
        e.AreOddsAvailable = function(e) {
            return this.AreOddsBelowMinimum(e.data.OD) ? t.BELOW_MINIMUM : this.AreOddsRestricted(e) ? t.NOT_OFFERED : t.AVAILABLE
        }
        ,
        e.MinOdds = 0,
        e.NOT_OFFERED = "N / O",
        e
    }
    )(),
    e.OddsConverter = n
}
)(ns_gen5_util || (ns_gen5_util = {})),
(function(e) {
    var t = (function() {
        function e(e, t) {
            this.min = e,
            this.max = t
        }
        return e.prototype.getLength = function() {
            return this.max - this.min
        }
        ,
        e
    }
    )();
    e.Range = t
}
)(ns_gen5_util || (ns_gen5_util = {})),
(function(e) {
    var t = (function() {
        function e(e) {
            this.type = e,
            $assert && $assert(e, '"type" has not been defined on ' + this)
        }
        return e.prototype.toString = function() {
            return "[Event365 type=" + this.type + "]"
        }
        ,
        e.SInit = (function() {
            e.prototype.stopPropagation = !1,
            e.prototype.target = null,
            e.prototype.currentTarget = null
        }
        )(),
        e
    }
    )();
    e.Event365 = t
}
)(ns_gen5_events || (ns_gen5_events = {})),
(function(e) {
    var t = (function(e) {
        function t(t, n) {
            var i = e.call(this, t) || this;
            return i.type = t,
            i.data = n,
            i
        }
        return __extends(t, e),
        t.prototype.toString = function() {
            return "[Event365 type=" + this.type + ", data = " + this.data + "]"
        }
        ,
        t.DATA = "data",
        t
    }
    )(e.Event365);
    e.DataEvent = t
}
)(ns_gen5_events || (ns_gen5_events = {})),
(function(e) {
    var t = (function() {
        function e() {}
        return e.prototype.toString = function() {
            return "[EventDispatcher]"
        }
        ,
        e.prototype.addEventListener = function(e, t) {
            $assert && $assert(t, "handlerDelegate must be defined."),
            this._eRegister || (this._eRegister = {},
            this._touchlist = {});
            var n = this._eRegister[e];
            n ? n[n.length] = t : this._eRegister[e] = [t]
        }
        ,
        e.prototype.dispatchEvent = function(e) {
            var t, n, i, o;
            if (e.target ? e.currentTarget = this : e.target = e.currentTarget = this,
            this._eRegister && (t = e.type,
            n = this._eRegister[t]))
                for (this._touchlist[t] && this.cleanRegister(t),
                o = 0; o < n.length; o++) {
                    i = n[o];
                    try {
                        i && i.method.call(i.scope, e)
                    } catch (r) {
                        ErrorReporter.Trace(i.scope, r)
                    }
                }
        }
        ,
        e.prototype.bubbleEvent = function(e) {
            if (this.dispatchEvent(e),
            !e.stopPropagation)
                for (var t = this.parent; t; ) {
                    if (t.bubbleEvent) {
                        t.bubbleEvent(e);
                        break
                    }
                    t = t.parent
                }
        }
        ,
        e.prototype.removeEventListener = function(e, t) {
            var n, i;
            return this._eRegister ? (n = this._eRegister[e],
            void (n && (i = n.indexOf(t)) > -1 ? (n[i] = void 0,
            this._touchlist[e] = !0) : $assert && $assert(!1, "removeEventListener call failed because the delegate didn't exist."))) : void ($assert && $assert(!1, "removeEventListener call failed because the eRegister doesn't exist."))
        }
        ,
        e.prototype.hasEventListener = function(e) {
            if (!this._eRegister)
                return !1;
            this._touchlist[e] && this.cleanRegister(e);
            var t = this._eRegister[e];
            return t && t.length > 0
        }
        ,
        e.prototype.hasEventListenerWithDelegate = function(e, t) {
            if (!this._eRegister)
                return !1;
            this._touchlist[e] && this.cleanRegister(e);
            var n = this._eRegister[e];
            return !!(n && n.indexOf(t) > -1)
        }
        ,
        e.prototype.cleanRegister = function(e) {
            var t, n, i, o, r;
            for (this._touchlist[e] = !1,
            t = this._eRegister[e],
            n = [],
            i = 0,
            o = t; i < o.length; i++)
                r = o[i],
                r && (n[n.length] = r);
            this._eRegister[e] = n
        }
        ,
        e.SInit = (function() {
            e.prototype._eRegister = null,
            e.prototype._touchlist = null
        }
        )(),
        e
    }
    )();
    e.EventDispatcher = t
}
)(ns_gen5_events || (ns_gen5_events = {})),
(function(e) {
    var t = (function(e) {
        function t(t, n) {
            void 0 === n && (n = NaN);
            var i = e.call(this, t) || this;
            return i.width = n,
            i
        }
        return __extends(t, e),
        t.prototype.toString = function() {
            return "[ApplicationEvent]"
        }
        ,
        t.LOADING = "loading",
        t.LOADING_COMPLETE = "loadingComplete",
        t.LOADING_TIMEOUT = "loadingTimeout",
        t.UNLOADING = "unloading",
        t.WIDTH_STATE_CHANGED = "widthStateChanged",
        t.VIEW_STATE_CHANGED = "viewStateChanged",
        t.HEIGHT_CHANGED = "heightChanged",
        t.WIDTH_CHANGED = "widthChanged",
        t.FOCUS_IN = "focusIn",
        t.FOCUS_OUT = "focusOut",
        t
    }
    )(e.Event365);
    e.ApplicationEvent = t
}
)(ns_gen5_events || (ns_gen5_events = {})),
(function(e) {
    var t = (function(e) {
        function t() {
            return null !== e && e.apply(this, arguments) || this
        }
        return __extends(t, e),
        t.ODDS_TYPE_CHANGED = "oddsChanged",
        t.LANGUAGE_CHANGED = "languageChanged",
        t
    }
    )(e.Event365);
    e.UserEvent = t
}
)(ns_gen5_events || (ns_gen5_events = {})),
(function(e) {
    var t = (function(e) {
        function t() {
            return null !== e && e.apply(this, arguments) || this
        }
        return __extends(t, e),
        t.MODULE_READY = "moduleReady",
        t
    }
    )(e.Event365);
    e.ModuleEvent = t
}
)(ns_gen5_events || (ns_gen5_events = {})),
(function(e) {
    var t = e.Event365
      , n = (function(e) {
        function t(t) {
            return e.call(this, t) || this
        }
        return __extends(t, e),
        t.BALANCEMODEL_UPDATE_EVENT = "balanceModelUpdated",
        t
    }
    )(t);
    e.BalanceModelEvent = n
}
)(ns_gen5_events || (ns_gen5_events = {})),
(function(e) {
    var t = (function(e) {
        function t(t, n) {
            var i = e.call(this, t) || this;
            return i.modal = n,
            i
        }
        return __extends(t, e),
        t.MODAL_CHANGE = "modalChange",
        t
    }
    )(e.Event365);
    e.ModalEvent = t
}
)(ns_gen5_events || (ns_gen5_events = {})),
(function(e) {
    var t = ns_gen5_events.EventDispatcher
      , n = (function(e) {
        function t(t) {
            var n = e.call(this) || this;
            return n.preformattedXML = t,
            n
        }
        return __extends(t, e),
        t.prototype.setPreformattedXML = function(e) {
            this.preformattedXML !== e && (this.preformattedXML = e)
        }
        ,
        t.prototype.parse = function(e) {
            var t, n, i;
            if (e && this.setPreformattedXML(e),
            window.DOMParser && DOMParser.prototype.parseFromString)
                n = new DOMParser,
                t = n.parseFromString(this.preformattedXML, "text/xml");
            else {
                if (n = new ActiveXObject("Microsoft.XMLDOM"),
                n.aSync && (n.aSync = !1),
                i = n.loadXML(this.preformattedXML),
                !i)
                    return ErrorReporter.Trace(this, "Unable to parse XML"),
                    null;
                t = n
            }
            return t
        }
        ,
        t
    }
    )(t);
    e.XMLParser = n
}
)(ns_gen5_util || (ns_gen5_util = {})),
(function(e) {
    var t = (function() {
        function e() {
            this.manifest = window.websiteManifest
        }
        return e.prototype.getBuildVersion = function(e) {
            return e ? this.manifest.modulesInformation[e].version : this.manifest.version
        }
        ,
        e.prototype.getDefaultTopic = function(e) {
            return this.manifest.modulesInformation[e].defaultTopic
        }
        ,
        e.prototype.getDefaultApiLocation = function(e) {
            return this.manifest.modulesInformation[e].defaultApiLocation
        }
        ,
        e.prototype.getLocaleNames = function(e) {
            return this.manifest.modulesInformation[e].localeNames
        }
        ,
        e.prototype.resolveResourcePath = function(e, t) {
            return ""
        }
        ,
        e.prototype.getDependencyLookup = function() {
            return this.manifest.modulesInformation
        }
        ,
        e.prototype.getApp = function(e) {
            return this.manifest.modulesInformation[e].app
        }
        ,
        e
    }
    )();
    e.ManifestManager = t
}
)(ns_gen5_util || (ns_gen5_util = {})),
(function(e) {
    var t = (function(e) {
        function t(t) {
            return e.call(this, t) || this
        }
        return __extends(t, e),
        t.COMPLETE = "complete",
        t.TICK = "tick",
        t
    }
    )(ns_gen5_events.Event365);
    e.TimerEvent = t
}
)(ns_gen5_util || (ns_gen5_util = {})),
(function(e) {
    var t = e.TimerEvent
      , n = (function(e) {
        function n(t, n) {
            var i = e.call(this) || this;
            return i.time = t,
            i.timeStarted = null,
            i.timerid = -1,
            i.timeRemaining = 0,
            i.repeats = n || 0,
            i.ticks = 0,
            i.callback_tickHandler = function() {
                return i.tickHandler()
            }
            ,
            i
        }
        return __extends(n, e),
        n.prototype.start = function() {
            var e = this.timeRemaining || this.time;
            this.timeRemaining = 0,
            this.timeStarted = new Date,
            this.timerid = setTimeout(this.callback_tickHandler, e),
            this.active = !0
        }
        ,
        n.prototype.reset = function() {
            this.timerid > -1 && (clearTimeout(this.timerid),
            this.timerid = -1,
            this.ticks = 0,
            this.timeRemaining = 0,
            this.active = !1)
        }
        ,
        n.prototype.stop = function() {
            this.timerid > -1 && (this.timeRemaining = this.time - ((new Date).getTime() - this.timeStarted.getTime()),
            clearTimeout(this.timerid),
            this.timerid = -1,
            this.active = !1)
        }
        ,
        n.prototype.tickHandler = function() {
            this.repeats > -1 && ++this.ticks >= this.repeats ? (this.dispatchEvent(new t(t.COMPLETE)),
            this.completeDelegate && this.completeDelegate(),
            this.active = !1) : (this.dispatchEvent(new t(t.TICK)),
            this.tickDelegate && this.tickDelegate(),
            this.start())
        }
        ,
        n
    }
    )(ns_gen5_events.EventDispatcher);
    e.Timer = n
}
)(ns_gen5_util || (ns_gen5_util = {})),
(function(e) {
    var t = (function(e) {
        function t(t, n, i) {
            var o = e.call(this, t) || this;
            return o.date = n,
            o.dateZoneAdjusted = i,
            o
        }
        return __extends(t, e),
        t.prototype.toString = function() {
            return "[TimeManagerEvent type=" + this.type + "]"
        }
        ,
        t.TICK = "tick",
        t
    }
    )(ns_gen5_events.Event365);
    e.TimeManagerEvent = t
}
)(ns_gen5_util || (ns_gen5_util = {})),
(function(e) {
    var t = e.TimeManagerEvent
      , n = (function(e) {
        function n() {
            var t = e.call(this) || this;
            return t._callback_serverTime_tick = function() {
                t._serverTime_tick()
            }
            ,
            t
        }
        return __extends(n, e),
        n.prototype.toString = function() {
            return "[TimeManager]"
        }
        ,
        n.prototype.getTime = function() {
            return this._serverDate ? new Date(this._serverDate.getTime()) : null
        }
        ,
        n.prototype.getTimeInDateFormat = function() {
            var e = n.ParseDate(this._serverTime);
            return e
        }
        ,
        n.prototype.getTimeZoneAdjustedDate = function() {
            var e = this._serverDateZoneAdjusted ? this._serverDateZoneAdjusted : this._serverDate;
            return e ? new Date(e.getTime()) : null
        }
        ,
        n.ParseDate = function(e) {
            var t = new Date(Number(e.slice(0, 4)),Number(e.slice(4, 6)) - 1,Number(e.slice(6, 8)),Number(e.slice(8, 10)),Number(e.slice(10, 12)),Number(e.slice(12, 14)));
            return t
        }
        ,
        n.ParseZoneDate = function(e) {
            var t = n.ParseDate(e);
            return t.setTime(t.getTime() + 60 * Locator.user.timeZoneAdjustment * 1e3),
            t
        }
        ,
        n.ParseEpochDate = function(e, t) {
            t && (e += "000");
            var n = new Date(1e3 * Number(e));
            return n
        }
        ,
        n.ParseEpochZoneDate = function(e, t) {
            var i = n.ParseEpochDate(e, t);
            return i.setTime(i.getTime() + 60 * Locator.user.timeZoneAdjustment * 1e3),
            i
        }
        ,
        n.StripNonNumericChars = function(e) {
            var t = /[^0-9]/g
              , n = e.replace(t, "");
            return n
        }
        ,
        n.getTimeString = function(e, t) {
            void 0 === t && (t = !0);
            var n = e.toTimeString();
            return n = n.substr(0, n.indexOf(" ")),
            t ? n : n = n.substr(0, n.lastIndexOf(this.TIME_SEPERATOR))
        }
        ,
        n.prototype.setServerTime = function(e) {
            var t, i;
            this._serverTime || (Locator.validationManager.callLater(this._callback_serverTime_tick),
            this._lastUpdatedMS = (new Date).getTime()),
            this._serverTime = e,
            this._serverDate = n.ParseDate(e),
            this._lastUpdatedMS = (new Date).getTime(),
            t = Locator.user.timeZoneAdjustment,
            0 != t && (this._serverDateZoneAdjusted = n.ParseDate(e),
            i = this._serverDate.getMinutes() + t,
            this._serverDateZoneAdjusted.setMinutes(i))
        }
        ,
        n.prototype._serverTime_tick = function() {
            var e, n, i, o;
            this._serverDate && (n = (new Date).getTime(),
            i = n - this._lastUpdatedMS,
            this._lastUpdatedMS = n,
            o = this._serverDate.getTime() + i,
            this._serverDate.setTime(o),
            this._serverDateZoneAdjusted ? (o = this._serverDateZoneAdjusted.getTime() + i,
            this._serverDateZoneAdjusted.setTime(o),
            e = this._serverDateZoneAdjusted) : e = this._serverDate,
            this.dispatchEvent(new t(t.TICK,this._serverDate,e)),
            setTimeout(this._callback_serverTime_tick, 1e3))
        }
        ,
        n.DATE_SEPERATOR = "/",
        n.TIME_SEPERATOR = ":",
        n
    }
    )(ns_gen5_events.EventDispatcher);
    e.TimeManager = n
}
)(ns_gen5_util || (ns_gen5_util = {})),
(function(e) {
    e.PrintDump = (function() {
        "use strict";
        function e(n, i) {
            var o, r, s, a, c, l;
            for (i || (i = 0),
            o = t(n),
            r = "",
            a = "",
            c = 0; i > c; c++)
                a += "  ";
            switch (o) {
            case "string":
                return '"' + n + '"';
            case "number":
                return n.toString();
            case "boolean":
                return n ? "true" : "false";
            case "date":
                return "Date: " + n.toLocaleString();
            case "array":
                for (r += "List ( \n",
                s = 0; s < n.length; s++)
                    r += a + "  " + s + " => " + e(n[s], i + 1) + "\n";
                r += a + ")";
                break;
            case "object":
                r += "\n";
                for (l in n)
                    n.hasOwnProperty(l) && (r += a + "  " + l + ": " + e(n[l], i + 1) + "\n");
                break;
            default:
                r += "N/A: " + o
            }
            return r
        }
        function t(e) {
            var t = typeof e;
            if ("object" !== t)
                return t;
            switch (e) {
            case null:
                return "null"
            }
            switch (e.constructor) {
            case Array:
                return "array";
            case Boolean:
                return "boolean";
            case Date:
                return "date";
            case Number:
                return "number";
            case Object:
                return "object"
            }
            return "Unknown"
        }
        function n(t) {
            return e(t)
        }
        return n
    }
    )()
}
)(ns_gen5_util || (ns_gen5_util = {})),
(function(e) {
    var t = "\r\n"
      , n = " -------------------- "
      , i = (function() {
        function i() {}
        return i.prototype.buildHeader = function(e) {
            return "*" + n + e + n + "*" + t
        }
        ,
        i.prototype.generate = function() {
            var e = [this._appendSummary()];
            return e.push(this._appendNavigationHistory()),
            e.push(this._appendManifest()),
            e.push(this._appendSiteProps()),
            e.push(this._appendSettings()),
            e.push(this._pushedConfig()),
            e.push(this._appendNavigator()),
            e.push(this._appendReadIt()),
            e.push(this._appendSportSubscriptions()),
            e.push(this._appendPrivateSubscriptions()),
            e.push(this._appendErrorLog()),
            e.push(this._appendTraceLog()),
            e.push(this._appendOpenBetsLog()),
            e.push(this._appendAAATCookie()),
            e.push(this._appendSiteDataLocal()),
            e
        }
        ,
        i.prototype.send = function() {
            var e = new XMLHttpRequest;
            e.open("POST", "/api/1/clienterrors/ots", !0),
            e.send(this.generate())
        }
        ,
        i.prototype._appendSiteProps = function() {
            return ""
        }
        ,
        i.prototype._appendAAATCookie = function() {
            var t = e.CookieManager.GetCookieValue("aaat");
            return t ? this.buildHeader("Alternative Auth Token Cookie") + t : ""
        }
        ,
        i.prototype._appendSiteDataLocal = function() {
            if ("siteDataLocal"in window) {
                var t = window.siteDataLocal.siteData;
                return t.constructor = Object,
                this.buildHeader("Site Data Local") + e.PrintDump(t)
            }
            return ""
        }
        ,
        i.prototype._appendManifest = function() {
            var e, n, i = this.buildHeader("Manifest");
            i = i.concat("MasterVersion:" + Locator.manifestManager.getBuildVersion() + t),
            e = Locator.manifestManager.getDependencyLookup();
            for (n in e)
                e.hasOwnProperty(n) && (i = i.concat(n + ":" + t),
                i = i.concat("  version:" + e[n].version + t),
                i = i.concat(t));
            return i
        }
        ,
        i.prototype._appendSettings = function() {
            var n, i, o = Locator.user, r = this.buildHeader("User");
            r = r.concat("sessionId: " + e.CookieManager.GetSessionId() + t);
            for (n in o)
                if (o.hasOwnProperty(n)) {
                    if (i = o[n],
                    "object" == typeof i)
                        try {
                            i = JSON.stringify(i)
                        } catch (s) {
                            i = ""
                        }
                    i && (r = r.concat(n + ":" + i + t))
                }
            return r
        }
        ,
        i.prototype._pushedConfig = function() {
            var e, n = "", i = Locator.pushedConfig, o = this.buildHeader("pushedConfig");
            for (n in i)
                if (i.hasOwnProperty(n)) {
                    if (e = i[n],
                    "object" == typeof e)
                        try {
                            e = JSON.stringify(e)
                        } catch (r) {
                            e = ""
                        }
                    e && (o = o.concat(n + ":" + e + t))
                }
            return o
        }
        ,
        i.prototype._appendSummary = function() {
            var e = "";
            return e = e.concat("Current Url:" + window.location.href + t),
            e = e.concat("Current time:" + new Date + t)
        }
        ,
        i.prototype._appendNavigator = function() {
            var e = window.navigator
              , n = this.buildHeader("Navigator");
            return n = n.concat("UserAgent:" + e.userAgent + t),
            n = n.concat("Language:" + (e.language || e.userLanguage) + t),
            n = n.concat("Vendor:" + e.vendor + t),
            n = n.concat("Platform:" + e.platform + t)
        }
        ,
        i.prototype._appendNavigationHistory = function() {
            return ""
        }
        ,
        i.prototype._appendReadIt = function() {
            var e, n = readit.ReadItLog.getLog(), i = this.buildHeader("ReadIt");
            for (e = 0; e < n.length; e++)
                i = i.concat(n[e].toString() + t);
            return i
        }
        ,
        i.prototype._appendSportSubscriptions = function() {
            return this.buildHeader("SubscriptionManager - Sports") + Locator.subscriptionManager._OtsReport()
        }
        ,
        i.prototype._appendPrivateSubscriptions = function() {
            return this.buildHeader("PrivateSubscriptionManager") + Locator.privateSubscriptionManager._OtsReport()
        }
        ,
        i.prototype._appendErrorLog = function() {
            var e, n = ErrorReporter.GetLog(), i = this.buildHeader("Error Reporter");
            for (e = 0; e < n.length; e++)
                i = i.concat(n[e] + t);
            return i
        }
        ,
        i.prototype._appendTraceLog = function() {
            var i, o, r, s, a = e.InfoReporter.getLog(), c = this.buildHeader("Trace Log");
            for (i in a)
                for (c = c.concat(n + i + n + t),
                o = 0,
                r = a[i]; o < r.length; o++)
                    s = r[o],
                    c = c.concat(s + t);
            return c = c.concat(n + t)
        }
        ,
        i.prototype._appendOpenBetsLog = function() {
            var e, n, i = "";
            try {
                if (n = Locator.treeLookup.getReference("OPENBETS"))
                    for (i = this.buildHeader("Open Bets"),
                    e = 0; e < n.getChildren().length; e++)
                        i = i.concat(n.getChildren()[e].data.IT + t)
            } catch (o) {
                i = ""
            }
            return i
        }
        ,
        i
    }
    )();
    e.OTSReport = i
}
)(ns_gen5_util || (ns_gen5_util = {})),
(function(e) {
    var t = ns_gen5_ml.LanguageSettings
      , n = (function() {
        function e() {}
        return e.Format = function(e) {
            var t, n, i, o = [];
            for (t = 1; t < arguments.length; t++)
                o[t - 1] = arguments[t];
            if (!e)
                return null;
            for (n = o.length,
            i = 0; n > i; i++)
                e = e.split("{" + i + "}").join(o[i]);
            return e
        }
        ,
        e.Uppercase = function(e) {
            return e ? t.allowCapitalisation() ? e.toUpperCase() : e : ""
        }
        ,
        e.Trim = function(e) {
            return e.replace(/^\s+|\s+$/g, "")
        }
        ,
        e.DecodeHtmlEntity = function(e) {
            return e ? e.replace(this.HTML_ENTITY_REGEX, (function(e, t) {
                return String.fromCharCode(t)
            }
            )) : ""
        }
        ,
        e.HTML_ENTITY_REGEX = /&#(\d+);/g,
        e
    }
    )();
    e.StringUtil = n
}
)(ns_gen5_util || (ns_gen5_util = {})),
(function(e) {
    var t = (function() {
        function e() {}
        return e.prototype.endPageRender = function() {}
        ,
        e
    }
    )();
    e.PageRender = t
}
)(ns_gen5_util || (ns_gen5_util = {})),
(function(e) {
    var t = (function() {
        function e() {}
        return e.getUnloadedDependencies = function(e) {
            var t, n, i, o;
            if (!this.Lookup)
                return null;
            for (t = [],
            n = 0,
            i = this.Lookup[e].deps; n < i.length; n++)
                o = i[n],
                this.LoadedDependenciesLookup[o] || t.push(o);
            return t.length ? t : null
        }
        ,
        e.setLookup = function(e) {
            this.Lookup = e
        }
        ,
        e.setLoaded = function(e) {
            this.LoadedDependenciesLookup[e] = !0
        }
        ,
        e.IsLoaded = function(e) {
            return e in this.LoadedDependenciesLookup
        }
        ,
        e.LoadedDependenciesLookup = {},
        e
    }
    )();
    e.DependencyManager = t
}
)(ns_gen5_net || (ns_gen5_net = {})),
(function(e) {
    var t, n, i = ns_gen5_util.Timer, o = ns_gen5_util.TimerEvent, r = (function() {
        function e(e) {
            this.keys = [],
            e && this.deSerialize(e)
        }
        return e.prototype.addPair = function(e, t) {
            this.keys[this.keys.length] = [e, t]
        }
        ,
        e.prototype.getPairWithKey = function(e) {
            var t, n, i;
            for (t = 0,
            n = this.keys; t < n.length; t++)
                if (i = n[t],
                i[0] == e)
                    return i[1];
            return null
        }
        ,
        e.prototype.getKeys = function() {
            return this.keys
        }
        ,
        e.prototype.serialize = function() {
            var e, t, n, i = "";
            for (e = 0,
            t = this.keys; e < t.length; e++)
                n = t[e],
                i += n[0] + "=" + encodeURIComponent(n[1]) + "&";
            return i.length ? i.slice(0, i.length - 1) : i
        }
        ,
        e.prototype.deSerialize = function(e) {
            var t, n, i, o, r = e.split("&");
            for (t = 0,
            n = r; t < n.length; t++)
                i = n[t],
                o = i.indexOf("="),
                o > -1 && this.addPair(i.substring(0, o), i.substring(o + 1))
        }
        ,
        e
    }
    )();
    e.URLVariables = r,
    t = (function(e) {
        function t() {
            return null !== e && e.apply(this, arguments) || this
        }
        return __extends(t, e),
        t.COMPLETE = "complete",
        t.ERROR = "error",
        t.TIMEOUT = "timeout",
        t
    }
    )(ns_gen5_events.Event365),
    e.LoaderEvent = t,
    n = (function(e) {
        function n() {
            return null !== e && e.apply(this, arguments) || this
        }
        return __extends(n, e),
        n.prototype.load = function(e, r) {
            var s, a, c = this, l = this.isExternalDomain(e);
            this.url = e,
            s = this.xhr = l ? readit.XDomainXMLHttpRequest.TryCreate(new XMLHttpRequest) : new XMLHttpRequest,
            a = !1,
            s.onreadystatechange = function(e) {
                var n, i;
                4 != s.readyState || a || (a = !0,
                s.onreadystatechange = null,
                c.xhr = null,
                200 == s.status ? (c.completeHandler && Locator.validationManager.callNewContext((function() {
                    return c.completeHandler(s.responseText, s.status)
                }
                )),
                c.hasEventListener(t.COMPLETE) && (n = new t(t.COMPLETE),
                n.status = 200,
                n.data = s.responseText,
                Locator.validationManager.callNewContext((function() {
                    return c.dispatchEvent(n)
                }
                )))) : (c.errorHandler && Locator.validationManager.callNewContext((function() {
                    return c.errorHandler(s.status, s.responseText)
                }
                )),
                c.hasEventListener(t.ERROR) && (i = new t(t.ERROR),
                i.status = s.status,
                i.data = s.responseText,
                Locator.validationManager.callNewContext((function() {
                    return c.dispatchEvent(i)
                }
                )))),
                c.disposeTimer())
            }
            ,
            s.open(r && r.method || "GET", e + (r && r.method != n.POST && r.urlVariables && "?" + r.urlVariables.serialize() || ""), !0),
            r && r.contentType && s.setRequestHeader("Content-type", r.contentType),
            s.withCredentials = r && r.withCredentials || !1,
            r && r.timeout && (this.timer = new i(r.timeout,1),
            this.timer.addEventListener(o.COMPLETE, this.delegate_timeHandler = new ns_gen5_util.Delegate(this,function() {
                c.abort(),
                c.timeoutHandler && Locator.validationManager.callNewContext((function() {
                    return c.timeoutHandler()
                }
                )),
                c.hasEventListener(t.TIMEOUT) && Locator.validationManager.callNewContext((function() {
                    return c.dispatchEvent(new t(t.TIMEOUT))
                }
                ))
            }
            )),
            this.timer.start()),
            s.send((r && r.method == n.POST ? r.urlVariables && r.urlVariables.serialize() : null) || r && r.data || "")
        }
        ,
        n.prototype.abort = function() {
            try {
                this.xhr && (this.xhr.abort(),
                this.xhr.onreadystatechange = null,
                this.xhr = null)
            } catch (e) {}
            this.disposeTimer()
        }
        ,
        n.prototype.getURL = function() {
            return this.url
        }
        ,
        n.prototype.isExternalDomain = function(e) {
            var t = function(e) {
                return 0 === e.indexOf("//") && (e = location.protocol + e),
                e.toLowerCase().replace(/([a-z])?:\/\//, "$1").split("/")[0]
            };
            return (e.indexOf(":") > -1 || e.indexOf("//") > -1) && t(location.href) !== t(e)
        }
        ,
        n.prototype.disposeTimer = function() {
            this.timer && (this.timer.removeEventListener(o.COMPLETE, this.delegate_timeHandler),
            this.timer.stop(),
            this.timer = null)
        }
        ,
        n.GET = "GET",
        n.POST = "POST",
        n
    }
    )(ns_gen5_events.EventDispatcher),
    e.Loader = n
}
)(ns_gen5_net || (ns_gen5_net = {})),
(function(e) {
    var t, n = ns_gen5_util.StringUtil, i = "/SportsUI/{0}/min/{1}/{0}", o = "/SportsUI/{0}/locale/{1}/min/{2}/{0}-{1}";
    window.LazyLoad || (window.LazyLoad = {
        css: function(e, t, n) {
            var i, o, r, s, a;
            for (e = [e],
            i = document.head || document.getElementsByTagName("head")[0],
            r = e.length,
            s = 0; r > s; s++)
                o = e[s],
                a = document.createElement("link"),
                a.href = o,
                a.rel = "stylesheet",
                a.onload = function() {
                    t(n)
                }
                ,
                a.onerror = function() {
                    ErrorReporter.Trace("LazyLoader", "Module CSS Failed to Load: " + o)
                }
                ,
                i.appendChild(a)
        },
        js: function(e, t, n) {
            var i, o;
            for (e = [e],
            i = e.length,
            o = 0; i > o; o++)
                !(function(e) {
                    var i, o, r;
                    i = document.createElement("script"),
                    i.setAttribute("charset", "UTF-8"),
                    o = document.head || document.getElementsByTagName("head")[0],
                    i.onload = i.onreadystatechange = function() {
                        r || i.readyState && "loaded" !== i.readyState && "complete" !== i.readyState || (r = !0,
                        t(n),
                        i.onload = i.onreadystatechange = null,
                        o && i.parentNode && o.removeChild(i))
                    }
                    ,
                    i.onerror = function() {
                        ErrorReporter.Trace("LazyLoader", " Failed to Load: " + e)
                    }
                    ,
                    i.src = e,
                    o.appendChild(i)
                }
                )(e[o])
        }
    }),
    t = (function() {
        function t() {}
        return t.SetModulePath = function(e) {
            $assert && $assert(e.indexOf("{0}") > -1 && e.indexOf("{1}") > -1, "Path must contain {0} AND {1} tokens for module name and version respectively."),
            i = e
        }
        ,
        t.SetLocalePath = function(e) {
            $assert && $assert(e.indexOf("{0}") > -1 && e.indexOf("{1}") > -1 && e.indexOf("{0}") > -1, "Path must contain {0}, {1} AND {2} tokens for module name, locale name and version respectively."),
            o = e
        }
        ,
        t.prototype.loadModule = function(r, s, a, c) {
            var l, u, d, h, p, _ = this, g = Locator.manifestManager.getBuildVersion(r), f = n.Format(i, r, g), E = r.indexOf("-");
            -1 !== E && (l = r.substring(0, E),
            u = r.substring(E + 1),
            f = n.Format(o, l, u, g)),
            c = c || function() {
                s.resourcesLoaded++,
                a()
            }
            ,
            d = function() {
                var e, i, o, l = t.ModuleResourceLookup[r], u = window.LazyLoad;
                l && (l.loadCSS && s.resourcesNeeded++,
                l.loadLanguage && s.resourcesNeeded++,
                l.loadConfig && s.resourcesNeeded++,
                l.loadCSS && u.css(f + ".css", c),
                l.loadLanguage && u.js(f.slice(0, f.lastIndexOf("/") + 1) + Locator.user.languageId + ".js", a),
                l.loadConfig && (e = window.location.host.indexOf(":3000") > -1 ? "http://www414.b365dev.com" : "http://" + window.location.host,
                i = e + "/sports/" + r + "/config.asp?lang={0}&cid={1}&zid={2}&cg={3}",
                o = Locator.user,
                i = n.Format(i, o.languageId, o.countryId, o.zoneId, o.countryGroupId),
                u.js(i, c))),
                u.js(f + ".min.js", a)
            }
            ,
            null != (h = e.DependencyManager.getUnloadedDependencies(r)) ? (p = function() {
                var t, n, i;
                h.length ? (t = h.shift(),
                e.DependencyManager.setLoaded(t),
                n = new ns_gen5_ui.ModuleResourcePackage,
                i = function() {
                    n.resourcesLoaded++,
                    n.isFullyLoaded() && p()
                }
                ,
                _.loadModule(t, n, i, i)) : d()
            }
            )() : d()
        }
        ,
        t
    }
    )(),
    e.ModuleLoaderDefault = t
}
)(ns_gen5_net || (ns_gen5_net = {})),
(function(e) {
    var t = (function() {
        function t() {}
        return t.prototype.loadModule = function(t, n, i) {
            function o() {
                n.resourcesLoaded = n.resourcesNeeded,
                i()
            }
            var r, s, a, c, l;
            if (!e.DependencyManager.IsLoaded(t)) {
                if (r = e.DependencyManager.getUnloadedDependencies(t))
                    for (s = 0,
                    a = r; s < a.length; s++)
                        c = a[s],
                        this.loadModule(c, new ns_gen5_ui.ModuleResourcePackage, (function() {}
                        ));
                l = boot.loadModule(t, o),
                e.DependencyManager.setLoaded(t),
                l & boot.LoadingFlags.CSS && n.resourcesNeeded++,
                l & boot.LoadingFlags.LANGUAGE && n.resourcesNeeded++
            }
        }
        ,
        t
    }
    )();
    e.ModuleLoaderBlob = t
}
)(ns_gen5_net || (ns_gen5_net = {})),
(function(e) {
    var t = (function() {
        function e() {
            this.manifest = _websiteManifest
        }
        return e.prototype.getBuildVersion = function(e) {
            return e ? this.manifest.modulesInformation[e].version : this.manifest.version
        }
        ,
        e.prototype.getDefaultTopic = function(e) {
            return this.manifest.modulesInformation[e].defaultTopic
        }
        ,
        e.prototype.getDependencyLookup = function() {
            return this.manifest.modulesInformation
        }
        ,
        e.prototype.getDefaultApiLocation = function(e) {
            return this.manifest.modulesInformation[e].defaultApiLocation
        }
        ,
        e.prototype.getLocaleNames = function(e) {
            return this.manifest.modulesInformation[e].localeNames
        }
        ,
        e.prototype.getApp = function(e) {
            return this.manifest.modulesInformation[e].app
        }
        ,
        e
    }
    )();
    e.WebsiteManifest = t
}
)(ns_gen5_util || (ns_gen5_util = {})),
(function(e) {
    var t = (function(e) {
        function t(t, n) {
            var i = e.call(this) || this;
            return i._url = t,
            i._options = n,
            i
        }
        return __extends(t, e),
        t.prototype.load = function() {
            e.prototype.load.call(this, this._url, this._options)
        }
        ,
        t
    }
    )(ns_gen5_net.Loader)
      , n = (function() {
        function e() {}
        return e.QueueForLogSubmission = function(e, n) {
            $assert && $assert(e, "URL isn't defined."),
            this.LoggingQueue[this.LoggingQueue.length] = new t(e,n)
        }
        ,
        e.ProcessQueue = function() {
            var e, t, n, i = this.LoggingQueue;
            for (this.LoggingQueue = [],
            e = i.length,
            t = 0; e > t; t++)
                try {
                    n = i[t],
                    n.load()
                } catch (o) {
                    ErrorReporter.Trace(this, o)
                }
        }
        ,
        e.LoggingQueue = [],
        e
    }
    )();
    e.ServerLogger = n
}
)(ns_gen5_util_logging || (ns_gen5_util_logging = {})),
(function(e) {
    var t = e.ServerLogger
      , n = (function() {
        function e() {}
        return e.QueueError = function(e, n, i) {
            var o, r, s, a, c, l, u, d;
            try {
                if (!Locator.pushedConfig.getArePropertiesInitialised())
                    return;
                if (o = ns_gen5_util.MathUtil.StringToNumber(Locator.pushedConfig.getAttributeValue("WL")) || 0,
                !(o > 0))
                    return;
                if (1e4 * Math.random() > o)
                    return;
                if (r = n.stack || n.message,
                s = r && r.split("\n"),
                a = void 0,
                c = void 0,
                l = void 0,
                "string" == typeof e)
                    a = e;
                else if (a = e.moduleName || "",
                a || (u = ns_gen5_ui.Module.getRoot(e),
                u && (a = u.parent.moduleName || "")),
                e._styleList)
                    for (d in e._styleList)
                        a = a + " " + d;
                s && s[1] ? (s[0].indexOf(n.message) > -1 ? (c = s[1].match(/\.([<>\w\d]+)\s/i),
                c = c ? c[1] : "Window") : c = s[0].split("@")[0],
                l = n.message) : l = n + "",
                t.QueueForLogSubmission("/api/1/clienterrors", {
                    method: "POST",
                    data: JSON.stringify({
                        summary: (a || c || "Unknown") + ": " + c + " encountered an error with the message " + l,
                        filename: a || "Unknown",
                        funcname: c || "Unknown",
                        main: e + "",
                        message: l || "Unknown",
                        stack: r || "Unknown",
                        url: location.href,
                        history: (ns_gen5_util.InfoReporter.getLog()[ns_gen5_util.InfoReporterGroups.NAVIGATION_ENTRY] || []).join("\n"),
                        zone: Locator.user.zoneId,
                        language: Locator.user.languageId,
                        manifestversion: Locator.manifestManager.getBuildVersion(),
                        betstring: window.safeSessionStorage.getItem("betstring") || "Unknown",
                        metadata: i || ""
                    })
                })
            } catch (h) {
                ns_gen5_util.InfoReporter.Trace(ns_gen5_util.InfoReporterGroups.GENERAL_ENTRY, "MobileServerLogger failed to submit to the server.")
            }
        }
        ,
        e
    }
    )();
    e.ClientErrorLogger = n
}
)(ns_gen5_util_logging || (ns_gen5_util_logging = {})),
(function(e) {
    var t = e.ServerLogger
      , n = ns_gen5_net.URLVariables
      , i = (function() {
        function e() {}
        return e.QueueCounter = function(t, n) {
            try {
                e.CounterLookup[t] ? e.CounterLookup[t] += n : e.CounterLookup[t] = n,
                e.FlushTimer || (e.FlushTimer = setTimeout((function() {
                    e.FlushCounters()
                }
                ), 1e4))
            } catch (i) {
                ns_gen5_util.InfoReporter.Trace(ns_gen5_util.InfoReporterGroups.GENERAL_ENTRY, "CounterLogger failed to submit to the server.")
            }
        }
        ,
        e.ForceCounterFlush = function() {
            e.FlushCounters(),
            t.ProcessQueue()
        }
        ,
        e.FlushCounters = function() {
            var i, o;
            if ("1" === Locator.pushedConfig.getAttributeValue("EC")) {
                i = new n;
                for (o in e.CounterLookup)
                    i.addPair(o, e.CounterLookup[o] + "");
                t.QueueForLogSubmission("/uicountersapi/increment", {
                    method: "GET",
                    urlVariables: i
                }),
                e.CounterLookup = {}
            }
        }
        ,
        e.CounterLookup = {},
        e
    }
    )();
    e.CounterLogger = i
}
)(ns_gen5_util_logging || (ns_gen5_util_logging = {})),
(function(e) {
    var t, n = ns_gen5_net.Loader, i = ns_gen5_net.LoaderEvent, o = ns_gen5_net.URLVariables, r = (function() {
        function e() {
            this.data = {}
        }
        return e.UserPreferencesGUID = "ns_gen5_util.UserPreferenceData",
        e
    }
    )();
    e.UserPreferenceData = r,
    t = (function() {
        function t() {
            this._preferences = new r,
            this._preferencesInitialised = !1,
            this._pendingRequest = null,
            this._saveToServerCompleteHandlerDelegate = new e.Delegate(this,this._saveToServerCompleteHandler),
            this._saveToServerErrorHandlerDelegate = new e.Delegate(this,this._saveToServerErrorHandler)
        }
        return t.prototype.setUserPreferenceServiceUrl = function(e) {
            $assert && $assert(!this._userPreferenceServiceUrl, "setUserPreferenceServiceUrl: value already set."),
            this._userPreferenceServiceUrl = e
        }
        ,
        t.prototype.loadInitialPreferenceData = function(e) {
            $assert && $assert(!this._preferencesInitialised, "UserPreferencesAPI already initialised!"),
            this._preferencesInitialised || (this._preferencesInitialised = !0,
            e && (this._preferences.data[t.TEAM_PREFERENCE] = e.teamPreference,
            this._preferences.data[t.MARKET_GROUP_PREFERENCE] = e.marketGroupPreference,
            this._preferences.data[t.LEAGUE_TABLE_PREFERENCE] = e.leagueTablePreference,
            this._preferences.data[t.OVERVIEW_DEFAULT_MARKET] = e.overviewDefaultMarketPreference,
            this._preferences.data[t.PREGAME_CLASSIFICATION_MENU_FAVOURITES] = e.prematchClassificationsPreference,
            this._preferences.data[t.INPLAY_FAVOURITE_MARKETS] = e.inplayFavouriteMarkets))
        }
        ,
        t.prototype.getSerializationData = function() {
            return this._preferences
        }
        ,
        t.prototype.setSerializationData = function(e) {
            this._preferences = e
        }
        ,
        t.prototype.addValues = function(e, t) {
            var n, i, o, r;
            for (this._preferences.data[e] || (this._preferences.data[e] = []),
            n = this._preferences.data[e],
            i = 0,
            o = t; i < o.length; i++)
                r = o[i],
                -1 === n.indexOf(r) && n.push(r);
            this.save(e)
        }
        ,
        t.prototype.removeValues = function(e, t) {
            var n, i, o = this._preferences.data[e];
            for (n = 0; n < o.length; ++n)
                for (i = 0; i < t.length; ++i)
                    o[n] === t[i] && o.splice(n--, 1);
            this._preferences.data[e] = o,
            this.save(e)
        }
        ,
        t.prototype.setValues = function(e, t) {
            this._preferences.data[e] = t,
            this.save(e)
        }
        ,
        t.prototype.getValues = function(e) {
            return this._preferences.data[e]
        }
        ,
        t.prototype.save = function(e) {
            this.saveToServer(e)
        }
        ,
        t.prototype.saveToServer = function(e) {
            var t, r, s;
            if (Locator.user.isLoggedIn) {
                if (this._clearPendingRequest(),
                t = new o,
                e)
                    t.addPair(e, this._preferences.data[e].join(","));
                else
                    for (r in this._preferences.data)
                        t.addPair(r, this._preferences.data[r].join(","));
                s = this._pendingRequest = new n,
                s.addEventListener(i.COMPLETE, this._saveToServerCompleteHandlerDelegate),
                s.addEventListener(i.ERROR, this._saveToServerErrorHandlerDelegate),
                s.load(this._userPreferenceServiceUrl, {
                    method: n.POST,
                    urlVariables: t,
                    contentType: "application/x-www-form-urlencoded"
                })
            }
        }
        ,
        t.prototype._saveToServerCompleteHandler = function() {
            $log(this, "Save To Server OK"),
            this._clearPendingRequest()
        }
        ,
        t.prototype._saveToServerErrorHandler = function(e) {
            ErrorReporter.Trace(this, "Save To Server : " + e.data),
            this._clearPendingRequest()
        }
        ,
        t.prototype._clearPendingRequest = function() {
            this._pendingRequest && (this._pendingRequest.removeEventListener(i.COMPLETE, this._saveToServerCompleteHandlerDelegate),
            this._pendingRequest.removeEventListener(i.ERROR, this._saveToServerErrorHandlerDelegate),
            this._pendingRequest.abort(),
            this._pendingRequest = null)
        }
        ,
        t.TEAM_PREFERENCE = "te",
        t.MARKET_GROUP_PREFERENCE = "lg",
        t.LEAGUE_TABLE_PREFERENCE = "lt",
        t.OVERVIEW_DEFAULT_MARKET = "odm",
        t.PREGAME_CLASSIFICATION_MENU_FAVOURITES = "lhsf",
        t.INPLAY_FAVOURITE_MARKETS = "ipf",
        t
    }
    )(),
    e.UserPreferenceAPI = t
}
)(ns_gen5_util || (ns_gen5_util = {})),
(function(e) {
    var t = (function() {
        function e() {
            this._interface = null
        }
        return e.prototype.setUserPreferenceInterface = function(e) {
            this._interface = e
        }
        ,
        e.prototype.get3wayPreference = function(e) {
            try {
                if (this._interface && this._interface.get3wayPreference)
                    return this._interface.get3wayPreference(e)
            } catch (t) {
                ErrorReporter.Trace(this, t)
            }
            return !1
        }
        ,
        e.prototype.set3wayPreference = function(e, t) {
            try {
                this._interface && this._interface.set3wayPreference && this._interface.set3wayPreference(e, t)
            } catch (n) {
                ErrorReporter.Trace(this, n)
            }
        }
        ,
        e.prototype.setTeamPreference = function(e, t) {
            try {
                if (this._interface && this._interface.setTeamPreference)
                    return this._interface.setTeamPreference(e, t)
            } catch (n) {
                ErrorReporter.Trace(this, n)
            }
            return !1
        }
        ,
        e.prototype.getTeamPreference = function(e) {
            try {
                if (this._interface && this._interface.getTeamPreference)
                    return this._interface.getTeamPreference(e)
            } catch (t) {
                ErrorReporter.Trace(this, t)
            }
            return !1
        }
        ,
        e.prototype.getPreferredTeams = function() {
            try {
                if (this._interface && this._interface.getPreferredTeams)
                    return this._interface.getPreferredTeams()
            } catch (e) {
                ErrorReporter.Trace(this, e)
            }
            return []
        }
        ,
        e.prototype.getPreferredTeamIds = function() {
            try {
                if (this._interface && this._interface.getPreferredTeamIds)
                    return this._interface.getPreferredTeamIds()
            } catch (e) {
                ErrorReporter.Trace(this, e)
            }
            return []
        }
        ,
        e.prototype.setLeagueTableLiveUpdates = function(e) {
            try {
                if (this._interface && this._interface.setLeagueTableLiveUpdates)
                    return this._interface.setLeagueTableLiveUpdates(e)
            } catch (t) {
                ErrorReporter.Trace(this, t)
            }
        }
        ,
        e.prototype.getLeagueTableLiveUpdates = function() {
            try {
                if (this._interface && this._interface.getLeagueTableLiveUpdates)
                    return this._interface.getLeagueTableLiveUpdates()
            } catch (e) {
                ErrorReporter.Trace(this, e)
            }
            return ""
        }
        ,
        e.prototype.setClassificationMenuFavourites = function(e) {
            try {
                if (this._interface && this._interface.setClassificationMenuFavourites)
                    return this._interface.setClassificationMenuFavourites(e)
            } catch (t) {
                ErrorReporter.Trace(this, t)
            }
        }
        ,
        e.prototype.getClassificationMenuFavourites = function() {
            try {
                if (this._interface && this._interface.getClassificationMenuFavourites)
                    return this._interface.getClassificationMenuFavourites()
            } catch (e) {
                ErrorReporter.Trace(this, e)
            }
            return []
        }
        ,
        e.prototype.setOverviewDefaultMarkets = function(e) {
            try {
                if (this._interface && this._interface.setOverviewDefaultMarkets)
                    return this._interface.setOverviewDefaultMarkets(e)
            } catch (t) {
                ErrorReporter.Trace(this, t)
            }
        }
        ,
        e.prototype.getOverviewDefaultMarkets = function() {
            try {
                if (this._interface && this._interface.getOverviewDefaultMarkets)
                    return this._interface.getOverviewDefaultMarkets()
            } catch (e) {
                ErrorReporter.Trace(this, e)
            }
            return []
        }
        ,
        e.prototype.addInPlayFavouriteMarket = function(e) {
            try {
                if (this._interface && this._interface.addInPlayFavouriteMarket)
                    return this._interface.addInPlayFavouriteMarket(e)
            } catch (t) {
                ErrorReporter.Trace(this, t)
            }
            return !1
        }
        ,
        e.prototype.removeInPlayFavouriteMarket = function(e) {
            try {
                if (this._interface && this._interface.removeInPlayFavouriteMarket)
                    return this._interface.removeInPlayFavouriteMarket(e)
            } catch (t) {
                ErrorReporter.Trace(this, t)
            }
            return !1
        }
        ,
        e.prototype.getInPlayFavouriteMarkets = function() {
            try {
                if (this._interface && this._interface.getOverviewDefaultMarkets)
                    return this._interface.getInPlayFavouriteMarkets()
            } catch (e) {
                ErrorReporter.Trace(this, e)
            }
            return []
        }
        ,
        e
    }
    )();
    e.ServerPreferenceManager = t
}
)(ns_gen5_util || (ns_gen5_util = {})),
(function(e) {
    var t = (function() {
        function t() {}
        return t.FilterStemChildren = function(e) {
            var t, n;
            for (n = 0; n < e.getChildren().length; n++)
                (t = e.getChildren()[n]) && this.IsExcludedFromPromotion(t.data.EF) && (t.remove(),
                n--);
            return e.parent && "XL" !== e.parent.nodeName && 0 === e.getChildren().length && Locator.validationManager.callPostValidation((function() {
                return e.parent.remove()
            }
            )),
            e.getChildren().length > 0
        }
        ,
        t.IsExcludedFromPromotion = function(n) {
            return 1 == Locator.user.customerType && e.MathUtil.StringToNumber(n) & t.NSW_EXCLUSION_FLAG ? !0 : !!(e.MathUtil.StringToNumber(n) & Locator.user.offerType)
        }
        ,
        t.NSW_EXCLUSION_FLAG = 4,
        t
    }
    )();
    e.PromotionalFilter = t
}
)(ns_gen5_util || (ns_gen5_util = {})),
(function(e) {}
)(ns_gen5_validation || (ns_gen5_validation = {})),
(function(e) {
    var t = ns_gen5_util_logging.ServerLogger
      , n = (function(e) {
        function n() {
            var t = null !== e && e.apply(this, arguments) || this;
            return t.callLaterQueue = [],
            t.priorityQueue = [],
            t.postValidationQueue = [],
            t.canCreateNewContext = !0,
            t.nextCallLaterQueue = [],
            t.cycleID = -1,
            t.callback_cycleHandler = function() {
                return t.cycleHandler()
            }
            ,
            t.cyclecount = 0,
            t
        }
        return __extends(n, e),
        n.prototype.toString = function() {
            return "[ValidationManager]"
        }
        ,
        n.prototype.callLater = function(e) {
            $assert && $assert(e, "Callback isn't defined."),
            this.callLaterQueue[this.callLaterQueue.length] = e,
            -1 == this.cycleID && this.cycle()
        }
        ,
        n.prototype.callNewContext = function(e) {
            var t = this;
            $assert && $assert(e, "Callback isn't defined."),
            this.nextCallLaterQueue[this.nextCallLaterQueue.length] = e,
            this.canCreateNewContext && (this.canCreateNewContext = !1,
            setTimeout((function() {
                document.body.clientWidth,
                t.canCreateNewContext = !0,
                t.callLaterQueue = t.nextCallLaterQueue.concat(t.callLaterQueue),
                t.nextCallLaterQueue.length = 0,
                t.processValidationCycleNow()
            }
            ), 0))
        }
        ,
        n.prototype.queueForValidation = function(e) {
            var t, n;
            1 != e.validationState && (e.validationState = 1,
            t = e.nestLevel || 0,
            n = this.priorityQueue[t],
            n || (n = this.priorityQueue[t] = []),
            n[n.length] = e,
            -1 == this.cycleID && this.cycle())
        }
        ,
        n.prototype.callPostValidation = function(e) {
            $assert && $assert(e, "Callback isnt defined."),
            this.postValidationQueue[this.postValidationQueue.length] = e,
            -1 == this.cycleID && this.cycle()
        }
        ,
        n.prototype.processValidationCycleNow = function() {
            -1 != this.cycleID && clearTimeout(this.cycleID),
            this.cycleHandler()
        }
        ,
        n.prototype.processCallLaterQueue = function() {
            var e, t, n = this.callLaterQueue;
            for (this.callLaterQueue = [],
            e = n.length,
            t = 0; e > t; t++)
                try {
                    n[t]()
                } catch (i) {
                    ErrorReporter.Trace(this, i)
                }
        }
        ,
        n.prototype.processValidationQueue = function() {
            var e, t, n, i, o, r, s = this.priorityQueue;
            for (this.priorityQueue = [],
            o = s.length,
            r = 0; o > r; r++)
                if (n = s[r])
                    for (e = 0,
                    t = n.length; t > e; e++)
                        if ((i = n[e]) && 1 == i.validationState)
                            try {
                                i.validationState = 2,
                                i.validateNow(!1),
                                i.validationState = 0
                            } catch (a) {
                                ErrorReporter.Trace(i, a)
                            }
        }
        ,
        n.prototype.processPostValidationQueue = function() {
            var e, t, n = this.postValidationQueue;
            for (this.postValidationQueue = [],
            e = n.length,
            t = 0; e > t; t++)
                try {
                    n[t]()
                } catch (i) {
                    ErrorReporter.Trace(this, i)
                }
        }
        ,
        n.prototype.cycle = function(e) {
            this.cycleID = setTimeout(this.callback_cycleHandler, e || 50)
        }
        ,
        n.prototype.cycleHandler = function() {
            for (this.cyclecount++,
            $timestamp("Start Frame"),
            this.callLaterQueue.length > 0 && this.processCallLaterQueue(); this.priorityQueue.length > 0; )
                this.processValidationQueue();
            this.postValidationQueue.length > 0 && this.processPostValidationQueue(),
            this.callLaterQueue.length > 0 || this.priorityQueue.length > 0 || this.postValidationQueue.length > 0 ? ($timestamp("Recursive Start Frame"),
            this.cycleHandler()) : (Math.random() < .05 && t.ProcessQueue(),
            this.cycleID = -1)
        }
        ,
        n
    }
    )(ns_gen5_events.EventDispatcher);
    e.ValidationManager = n
}
)(ns_gen5_validation || (ns_gen5_validation = {})),
(function(e) {
    var t = ns_gen5_util.InfoReporterGroups
      , n = ns_gen5_util.InfoReporter
      , i = (function() {
        function e() {
            this.mlJson = {}
        }
        return e.prototype.toString = function() {
            return "[Resource]"
        }
        ,
        e.prototype.getValue = function(e, i) {
            return this.mlJson[e] || n.Trace(t.DEPRECATION_WARNING_ENTRY, "Missing language asset " + e),
            this.mlJson[e] || i
        }
        ,
        e
    }
    )();
    e.Resource = i
}
)(ns_gen5_language || (ns_gen5_language = {})),
(function(e) {
    var t, n = (function() {
        function e(e, t, n, i, o) {
            this.topic = e,
            this.type = t,
            this.item = n,
            this.nodeType = i,
            this.info = o
        }
        return e.prototype.toString = function() {
            return "[DataMessage type=" + this.type + " item=" + this.item + " nodeType=" + this.nodeType + " info=" + this.info + "]"
        }
        ,
        e
    }
    )();
    e.DataMessage = n,
    t = (function() {
        function e() {}
        return e.SNAPSHOT = "F",
        e.UPDATE = "U",
        e.INSERT = "I",
        e.DELETE = "D",
        e
    }
    )(),
    e.DataMessageType = t
}
)(ns_gen5_data || (ns_gen5_data = {})),
(function(e) {
    var t = (function(e) {
        function t(t, n) {
            var i = e.call(this, t) || this;
            return i.data = n,
            i
        }
        return __extends(t, e),
        t.prototype.toString = function() {
            return "[StemEvent type=" + this.type + "]"
        }
        ,
        t.UPDATE = "update",
        t.INSERT = "insert",
        t.DELETE = "delete",
        t.CHILD_DELETE = "childDelete",
        t
    }
    )(ns_gen5_events.Event365);
    e.StemEvent = t
}
)(ns_gen5_data || (ns_gen5_data = {})),
(function(e) {
    var t = e.StemEvent
      , n = e.DataMessage
      , i = (function(e) {
        function i() {
            var t = e.call(this) || this;
            return t._delegateList = [],
            t._actualChildren = [],
            t
        }
        return __extends(i, e),
        i.prototype.toString = function() {
            return "[Stem]"
        }
        ,
        i.prototype.update = function(e) {
            var n, o, r, s, a, c, l, u, d, h;
            if (e) {
                for (s in e)
                    this.data[s] = e[s];
                if (this.parent)
                    if (a = "OR"in e,
                    a && (c = Number(e.OR),
                    l = this.parent._actualChildren,
                    l.splice(l.indexOf(this), 1),
                    l.splice(c, 0, this)),
                    "FF"in e) {
                        for (u = !1,
                        d = e.FF,
                        h = null,
                        i.FilterToken.lastIndex = 0; !u && null !== (h = i.FilterToken.exec(d)); )
                            u = !(1 & h.index),
                            i.FilterToken.lastIndex--;
                        if (this.filtered != (this.filtered = u)) {
                            if (this.parent._filterInvalidated = !0,
                            this.filtered) {
                                if (this.readonly_length--,
                                this._hasDelegates)
                                    for (n = 0,
                                    o = this._delegateList.length; o > n; n++)
                                        if (r = this._delegateList[n])
                                            try {
                                                r.stemDeleteHandler(this)
                                            } catch (p) {
                                                ErrorReporter.Trace(this, p)
                                            }
                                this._hasListeners && this.dispatchEvent(new t(t.DELETE))
                            } else {
                                if (this.parent.getChildren(),
                                this.parent._hasDelegates)
                                    for (n = 0,
                                    o = this.parent._delegateList.length; o > n; n++)
                                        if (r = this.parent._delegateList[n])
                                            try {
                                                r.stemInsertHandler(this.parent, this)
                                            } catch (p) {
                                                ErrorReporter.Trace(this, p)
                                            }
                                this.parent._hasListeners && this.parent.dispatchEvent(new t(t.INSERT,this)),
                                this._filterInvalidated = !0
                            }
                            return
                        }
                    } else
                        a && !this.filtered && this.parent._children && (this.parent._filterInvalidated = !0);
                if (!this.filtered) {
                    if (this._hasDelegates)
                        for (n = 0,
                        o = this._delegateList.length; o > n; n++)
                            if (r = this._delegateList[n])
                                try {
                                    r.stemUpdateHandler(this, e)
                                } catch (p) {
                                    ErrorReporter.Trace(this, p)
                                }
                    this._hasListeners && this.dispatchEvent(new t(t.UPDATE,e))
                }
            }
        }
        ,
        i.prototype.insert = function(e, o) {
            var r, s, a, c, l, u;
            if (o = o || i,
            e instanceof n ? (s = e,
            r = new o,
            r.set_data(s.item),
            r.nodeName = s.nodeType) : e instanceof i ? r = e : (r = new o,
            r.set_data(e)),
            r.parent = this,
            a = r.data.OR,
            a ? this._actualChildren.splice(Number(a), 0, r) : this._actualChildren[this._actualChildren.length] = r,
            r.filtered)
                this._filterInvalidated = !0;
            else {
                if (this._children ? (this._filterInvalidated = !0,
                this.getChildren()) : this.readonly_length++,
                this._hasDelegates)
                    for (c = void 0,
                    l = this._delegateList.length,
                    u = 0; l > u; u++)
                        if (c = this._delegateList[u])
                            try {
                                c.stemInsertHandler(this, r)
                            } catch (d) {
                                ErrorReporter.Trace(this, d)
                            }
                this._hasListeners && this.dispatchEvent(new t(t.INSERT,r))
            }
        }
        ,
        i.prototype.remove = function() {
            var e, n, i, o, r, s, a, c;
            if (this._hasDelegates)
                for (e = void 0,
                n = this._delegateList.length,
                i = 0; n > i; i++)
                    if (e = this._delegateList[i])
                        try {
                            e.stemDeleteHandler(this)
                        } catch (l) {
                            ErrorReporter.Trace(this, l)
                        }
            for (this._hasListeners && this.dispatchEvent(new t(t.DELETE)),
            r = this._actualChildren.length,
            s = 0; r > s; s++)
                o = this._actualChildren[s],
                o && (o.parent = null,
                o.remove(),
                delete this._actualChildren[s]);
            if (this.hasLookupReference && Locator.treeLookup.removeReference(this.data.IT),
            this.shadow && (this.shadow.remove(),
            this.shadow = null),
            null != this.parent) {
                for (this.filtered || this.parent.readonly_length--,
                a = this.parent._actualChildren,
                c = a.length,
                this.parent._children && (this.parent._filterInvalidated = !0),
                i = 0; c > i; i++)
                    if (a[i] == this) {
                        a.splice(i, 1);
                        break
                    }
                this.parent._hasListeners && this.parent.hasEventListener(t.CHILD_DELETE) && this.parent.dispatchEvent(new t(t.CHILD_DELETE,this)),
                this.parent = null
            }
        }
        ,
        i.prototype.removeChildStem = function(e) {
            if (e.parent == this) {
                e.filtered || this.readonly_length--,
                this._children && (this._filterInvalidated = !0);
                var t = this._actualChildren.indexOf(e);
                t > -1 && this._actualChildren.splice(t, 1),
                e.parent = null
            }
        }
        ,
        i.prototype.adoptStem = function(e, t) {
            var n, i, o, r;
            if (null != e.parent) {
                for (n = e.parent,
                i = n._actualChildren,
                o = i.length,
                e.filtered || (n.readonly_length--,
                this.readonly_length++),
                n._children && (n._filterInvalidated = !0),
                r = 0; o > r; r++)
                    if (i[r] == e) {
                        i.splice(r, 1);
                        break
                    }
                e.parent = this,
                (void 0 == t || t > this._actualChildren.length) && (t = this._actualChildren.length),
                this._actualChildren[t] = e,
                this._children && (this._filterInvalidated = !0)
            }
        }
        ,
        i.prototype.set_data = function(e) {
            var n, o, r, s, a, c;
            if (this.data = e,
            this.hasLookupReference || Locator.treeLookup.addReference(this),
            e.FF) {
                for (n = !1,
                o = e.FF,
                r = null,
                i.FilterToken.lastIndex = 0; !n && null !== (r = i.FilterToken.exec(o)); )
                    n = !(1 & r.index),
                    i.FilterToken.lastIndex--;
                n ? (this.filtered = !0,
                this.parent && (this.parent._filterInvalidated = !0)) : this.parent && this.parent.readonly_length++
            } else
                this.parent && this.parent.readonly_length++;
            if (this._hasDelegates)
                for (s = void 0,
                a = this._delegateList.length,
                c = 0; a > c; c++)
                    if (s = this._delegateList[c])
                        try {
                            s.stemUpdateHandler(this, e)
                        } catch (l) {
                            ErrorReporter.Trace(this, l)
                        }
            this._hasListeners && this.dispatchEvent(new t(t.UPDATE,e))
        }
        ,
        i.prototype.getChildren = function() {
            var e, t, n, i, o;
            if (this._filterInvalidated) {
                for (this._filterInvalidated = !1,
                this._children ? this._children.length = 0 : this._children = [],
                e = void 0,
                t = this._actualChildren,
                n = void 0,
                i = t.length,
                o = 0; i > o; o++)
                    e = t[o],
                    e && !e.filtered && (n = this._children.length,
                    e.data.OR = String(n),
                    this._children[n] = e);
                this.readonly_length = this._children.length
            }
            return this._children || this._actualChildren
        }
        ,
        i.prototype.shed = function() {
            var e, n, i, o, r = this;
            if (this._hasDelegates)
                for (i = void 0,
                e = 0,
                n = this._delegateList.length; n > e; e++)
                    if (i = this._delegateList[e])
                        try {
                            i.stemDeleteHandler(this)
                        } catch (s) {
                            ErrorReporter.Trace(this, s)
                        }
            for (this._hasListeners && this.dispatchEvent(new t(t.DELETE)),
            $assert && (this.hasClearedDown() || Locator.validationManager.callPostValidation((function() {
                return $assert && $assert(r.hasClearedDown(), "`shed` has been called on this stem, but delegates/listeners still exist.")
            }
            ))),
            o = this._actualChildren,
            e = 0,
            n = o.length; n > e; e++)
                o[e].shed();
            this.shadow && this.shadow.shed()
        }
        ,
        i.prototype.hasClearedDown = function() {
            var e, t, n;
            for (e = 0,
            t = this._delegateList; e < t.length; e++)
                if (n = t[e])
                    return !1;
            return !this._hasListeners
        }
        ,
        i.prototype.addDelegate = function(e) {
            this._delegateList[this._delegateList.length] = e,
            this._hasDelegates = !0
        }
        ,
        i.prototype.removeDelegate = function(e) {
            var t = this._delegateList.indexOf(e);
            t > -1 && (this._delegateList[t] = void 0)
        }
        ,
        i.prototype.addEventListener = function(t, n) {
            this._numListeners++,
            this._hasListeners = !0,
            e.prototype.addEventListener.call(this, t, n)
        }
        ,
        i.prototype.removeEventListener = function(t, n) {
            this._numListeners--,
            this._hasListeners = this._numListeners > 0,
            e.prototype.removeEventListener.call(this, t, n)
        }
        ,
        i.SInit = (function() {
            i.prototype._actualChildren = null,
            i.prototype._children = null,
            i.prototype._numListeners = 0,
            i.prototype._hasListeners = !1,
            i.prototype._filterInvalidated = !1,
            i.prototype.data = null,
            i.prototype.parent = null,
            i.prototype.filtered = !1,
            i.prototype.readonly_length = 0,
            i.prototype.nodeName = null,
            i.prototype.hasLookupReference = !1
        }
        )(),
        i.FilterToken = /\^\^\^/,
        i
    }
    )(ns_gen5_events.EventDispatcher);
    e.Stem = i
}
)(ns_gen5_data || (ns_gen5_data = {})),
(function(e) {}
)(ns_gen5_data || (ns_gen5_data = {})),
(function(e) {
    var t = e.Stem
      , n = e.StemEvent
      , i = e.DataMessage
      , o = (function(e) {
        function o() {
            var t = e.call(this) || this;
            return t.statGroups = [],
            t.teamGroups = [],
            t.additionalScores = [],
            t
        }
        return __extends(o, e),
        o.prototype.toString = function() {
            return "[FixtureStem]"
        }
        ,
        o.prototype.insert = function(e, o) {
            var r, s, a, c, l, u;
            if (o = o || t,
            e instanceof i ? (s = e,
            r = new o,
            r.set_data(s.item),
            r.nodeName = s.nodeType) : e instanceof t ? r = e : (r = new o,
            r.set_data(e)),
            r.parent = this,
            "ES" == r.nodeName ? this.additionalScores[this.additionalScores.length] = r : "TG" == r.nodeName ? this.teamGroups[this.teamGroups.length] = r : "SG" == r.nodeName ? this.statGroups[this.statGroups.length] = r : (a = r.data.OR,
            a ? this._actualChildren.splice(Number(a), 0, r) : this._actualChildren[this._actualChildren.length] = r,
            r.filtered || (this._children ? (this._filterInvalidated = !0,
            this.getChildren()) : this.readonly_length++)),
            r.filtered)
                this._filterInvalidated = !0;
            else {
                if (this._hasDelegates)
                    for (c = void 0,
                    l = this._delegateList.length,
                    u = 0; l > u; u++)
                        (c = this._delegateList[u]) && c.stemInsertHandler(this, r);
                this._hasListeners && this.dispatchEvent(new n(n.INSERT,r))
            }
        }
        ,
        o.prototype.remove = function() {
            var t, n, i;
            for (e.prototype.remove.call(this),
            n = this.statGroups.length,
            i = 0; n > i; i++)
                t = this.statGroups[i],
                t && (t.parent = null,
                t.remove(),
                delete this.statGroups[i]);
            for (n = this.teamGroups.length,
            i = 0; n > i; i++)
                t = this.teamGroups[i],
                t && (t.parent = null,
                t.remove(),
                delete this.teamGroups[i]);
            for (n = this.additionalScores.length,
            i = 0; n > i; i++)
                t = this.additionalScores[i],
                t && (t.parent = null,
                t.remove(),
                delete this.additionalScores[i])
        }
        ,
        o.prototype.shed = function() {
            var t, n, i, o, r, s, a;
            for (e.prototype.shed.call(this),
            t = 0,
            n = this.additionalScores; t < n.length; t++)
                i = n[t],
                i.shed();
            for (o = 0,
            r = this.teamGroups; o < r.length; o++)
                i = r[o],
                i.shed();
            for (s = 0,
            a = this.statGroups; s < a.length; s++)
                i = a[s],
                i.shed()
        }
        ,
        o.prototype.getLegacyID = function() {
            return this.data.C1 + this.data.T1 + this.data.C2 + this.data.T2 + "-" + ((this.parent && this.parent.data ? this.parent.data.ID : null) || this.data.CL)
        }
        ,
        o.prototype.getLegacyIDraw = function() {
            return this.data.C1 + this.data.T1 + this.data.C2 + this.data.T2 + ((this.parent && this.parent.data ? this.parent.data.ID : null) || this.data.CL)
        }
        ,
        o
    }
    )(e.Stem);
    e.FixtureStem = o
}
)(ns_gen5_data || (ns_gen5_data = {})),
(function(e) {
    var t = (function() {
        function e() {
            this._table = {}
        }
        return e.prototype.toString = function() {
            return "[TreeLookup]"
        }
        ,
        e.prototype.addReference = function(e, t) {
            var n = e.data[t || "IT"];
            n && (this._table[n] = e,
            e.hasLookupReference = !0)
        }
        ,
        e.prototype.getReference = function(e) {
            return this._table[e]
        }
        ,
        e.prototype.removeReference = function(e) {
            var t = this._table[e];
            t && (delete this._table[e],
            t.hasLookupReference = !1)
        }
        ,
        e
    }
    )();
    e.TreeLookup = t
}
)(ns_gen5_data || (ns_gen5_data = {})),
(function(e) {
    var t = (function(e) {
        function t(t, n) {
            var i = e.call(this, t) || this;
            return i.data = n,
            i
        }
        return __extends(t, e),
        t.INFO_UPDATED = "infoUpdated",
        t.SNAPSHOT_EMPTY = "snapshotEmpty",
        t.SERVER_RECONNECT = "serverReconnect",
        t.CONNECTION_FAILED = "connectionFailed",
        t.RECONNECT_FAILED = "reconnectFailed",
        t.CONNECTED = "connected",
        t.PULL_DATA_RECEIVED = "pullDataReceived",
        t.PULL_REQUEST_FAILED = "pullRequestFailed",
        t.CONNECTION_FAILED_INVALID_SESSION = "connectionFailedInvalidSession",
        t
    }
    )(ns_gen5_events.Event365);
    e.StreamDataProcessorEvent = t
}
)(ns_gen5_data || (ns_gen5_data = {})),
(function(e) {
    var t = (function(e) {
        function t(t, n) {
            var i = e.call(this, t) || this;
            return i.message = n,
            i
        }
        return __extends(t, e),
        t.BALANCE_RECEIVED = "balanceReceived",
        t.PUSH_MESSAGE_RECEIVED = "pushMessageReceived",
        t.D23_MESSAGE_RECEIVED = "d23Received",
        t
    }
    )(ns_gen5_events.Event365);
    e.PrivateStreamDataProcessorEvent = t
}
)(ns_gen5_data || (ns_gen5_data = {})),
(function(e) {
    e.SubscriptionManagerFlags = {
        SUPPRESS_SERVER_MESSAGE: 1,
        BATCH: 2,
        SUPPRESS_FULL_HIERARCHY: 4,
        NO_GRACE_PERIOD: 16,
        DONT_BATCH: 32,
        USE_CUSTOM_PARAMS: 64,
        SUPPRESS_STANDARD_QS_PARAMS: 128
    }
}
)(ns_gen5_data || (ns_gen5_data = {})),
(function(e) {
    var t = (function(e) {
        function t(t, n) {
            var i = e.call(this, t) || this;
            return i.data = n,
            i
        }
        return __extends(t, e),
        t.RENEW_SUBSCRIPTION = "renewSubscription",
        t.CONNECTION_FAILED = "connectionFailed",
        t.CONNECTED = "connected",
        t.ERROR = "error",
        t
    }
    )(ns_gen5_events.Event365);
    e.SubscriptionManagerEvent = t
}
)(ns_gen5_data || (ns_gen5_data = {})),
(function(e) {
    var t = (function(e) {
        function t(t, n, i) {
            var o = e.call(this, t) || this;
            return o.topic = n,
            o.message = i,
            o
        }
        return __extends(t, e),
        t.BALANCE_RECEIVED = "balanceReceived",
        t.PUSH_MESSAGE_RECEIVED = "pushMessageReceived",
        t.D23_MESSAGE_RECEIVED = "d23Received",
        t
    }
    )(ns_gen5_events.Event365);
    e.PrivateSubscriptionManagerEvent = t
}
)(ns_gen5_data || (ns_gen5_data = {})),
(function(e) {
    function t(e) {
        e.VI = "0",
        e.VS = "0",
        e.MS = "0"
    }
    var n = e.Stem
      , i = e.DataMessage
      , o = e.DataMessageType
      , r = e.FixtureStem
      , s = o.SNAPSHOT
      , a = "PH"
      , c = 0
      , l = (function() {
        function l() {
            this.toString = function() {
                return "[DataUtil]"
            }
        }
        return l.ProcessStemChanges = function(e, t, n, i, s) {
            var a, c, l, u, d, h = e.type, p = e.item;
            h == o.SNAPSHOT ? s(t) : h == o.UPDATE ? (a = Locator.treeLookup.getReference(t),
            a && a.update(p)) : h == o.INSERT ? (c = i ? t : n,
            l = c.lastIndexOf("/"),
            u = c.lastIndexOf("/", l - 1) + 1,
            d = c.slice(u, l),
            a = Locator.treeLookup.getReference(d),
            a && a.insert(e, "EV" == e.nodeType ? r : null)) : h == o.DELETE && (a = Locator.treeLookup.getReference(t),
            a && a.remove())
        }
        ,
        l.ParseMessage = function(e, l) {
            for (var u, d, h, p, _, g, f, E, m, v, S, C, y, T, b, L, D, I, A, M, N, R, P, O, w, k, H, B, F, x, U, G, V, Y, W, z, Q, q, j, $, J = Locator.treeLookup, X = e.charAt(0), K = X == o.SNAPSHOT || X == o.INSERT, Z = new n, ee = e.indexOf("|", 1), te = ee, ne = (d = X != s) ? 0 : 1, ie = Locator.user.countryCode, oe = Locator.user.countryCode64, re = Locator.user.phoneOnlyEnabled; -1 != te; ) {
                for (ee = e.indexOf("|", ++te),
                _ = e.slice(te, ee).split(";"),
                p = _.length - 1,
                te = ee,
                g = {},
                m = _[0],
                u = ne; p > u; u++)
                    E = _[u],
                    g[E.charAt(0) + E.charAt(1)] = E.substr(3);
                if (K && !g.IT && (g.IT = "_i" + c++),
                ie && "CB"in g) {
                    z = g.CB || "",
                    Q = -1;
                    do
                        Q = z.indexOf(ie, ++Q);
                    while (-1 != Q && 1 == (1 & Q));-1 != Q && t(g)
                } else
                    !ie && "CB"in g && "" != g.CB && t(g);
                if ("Modernizr"in window && !Modernizr.embeddedstreaming && "1" == g.ES && (g._V = g.VI,
                t(g)),
                re && "TO"in g) {
                    z = g.TO,
                    Q = -1;
                    do
                        Q = z.indexOf(oe, ++Q);
                    while (-1 != Q && 1 == (1 & Q));-1 != Q && (g[a] = "1")
                }
                if ("FI"in g && (S = g.FI),
                "TK"in g && (q = g.TK,
                v = String.fromCharCode(q.charCodeAt(0) ^ q.charCodeAt(1))),
                d && "IN" != m)
                    return X === o.INSERT && "PA" === m ? g.ZW = S + "-" + g.ID : X === o.UPDATE && g.ID && (j = Locator.treeLookup.getReference(l),
                    j && "PA" === j.nodeName && (S || (S = j.data.FI),
                    g.ZW = S + "-" + g.ID)),
                    [new i(l,X,g,m,h)];
                switch (m) {
                case "PA":
                    f = new n,
                    Y = N || M || G || V || Z,
                    S && (g.ZW = S + "-" + g.ID),
                    v && (g._T = v),
                    f.parent = Y,
                    R = Y._actualChildren[Y._actualChildren.length] = f;
                    break;
                case "CO":
                    f = new n,
                    f.parent = M,
                    N = M._actualChildren[M._actualChildren.length] = f;
                    break;
                case "MA":
                    N = null,
                    M = f = new n,
                    W = I || D || V || Z,
                    f.parent = W,
                    W._actualChildren[W._actualChildren.length] = f;
                    break;
                case "MG":
                    N = null,
                    I = f = new n,
                    f.parent = D,
                    D._actualChildren[D._actualChildren.length] = f;
                    break;
                case "CT":
                    A = f = new n,
                    f.parent = L,
                    L._actualChildren[L._actualChildren.length] = f;
                    break;
                case "EV":
                    f = new r,
                    null == L && (L = T || V || Z),
                    W = A || L,
                    f.parent = W,
                    D = f,
                    W._actualChildren[W._actualChildren.length] = f;
                    break;
                case "CL":
                    L = f = new n,
                    A = null,
                    f.parent = b || V || Z,
                    f.parent._actualChildren[f.parent._actualChildren.length] = f;
                    break;
                case "CS":
                    b = f = new n,
                    f.parent = Z,
                    Z._actualChildren[Z._actualChildren.length] = f;
                    break;
                case "TG":
                    P = f = new n,
                    f.parent = D,
                    D.teamGroups[D.teamGroups.length] = f;
                    break;
                case "TE":
                    f = new n,
                    f.parent = P,
                    P._actualChildren[P._actualChildren.length] = f;
                    break;
                case "SG":
                    O = f = new n,
                    f.parent = D,
                    D.statGroups[D.statGroups.length] = f;
                    break;
                case "ST":
                    f = new n,
                    f.parent = O,
                    O._actualChildren[O._actualChildren.length] = f;
                    break;
                case "ES":
                    w = f = new n,
                    f.parent = D,
                    D.additionalScores[D.additionalScores.length] = f;
                    break;
                case "SC":
                    k = f = new n,
                    f.parent = w,
                    w._actualChildren[w._actualChildren.length] = f;
                    break;
                case "SL":
                    f = new n,
                    f.parent = k,
                    k._actualChildren[k._actualChildren.length] = f;
                    break;
                case "AS":
                    H = f = new n,
                    f.parent = D,
                    D._actualChildren[D._actualChildren.length] = f;
                    break;
                case "AP":
                    B = f = new n,
                    f.parent = H,
                    H._actualChildren[H._actualChildren.length] = f;
                    break;
                case "AT":
                    F = f = new n,
                    f.parent = B,
                    B._actualChildren[B._actualChildren.length] = f;
                    break;
                case "AC":
                    x = f = new n,
                    f.parent = F,
                    F._actualChildren[F._actualChildren.length] = f;
                    break;
                case "AE":
                    f = new n,
                    f.parent = x,
                    x._actualChildren[x._actualChildren.length] = f;
                    break;
                case "SP":
                    f = new n,
                    f.parent = R,
                    R._actualChildren[R._actualChildren.length] = f;
                    break;
                case "IN":
                    h = g;
                    break;
                case "PD":
                    T = f = new n,
                    null == y && (y = C || V || Z),
                    f.parent = y,
                    y._actualChildren[y._actualChildren.length] = f;
                    break;
                case "PS":
                    y = f = new n,
                    null == C && (C = Z),
                    f.parent = C,
                    C._actualChildren[C._actualChildren.length] = f;
                    break;
                case "XL":
                    C = f = new n,
                    Z._actualChildren[Z._actualChildren.length] = C;
                    break;
                case "LG":
                    f.parent = D,
                    D._actualChildren[D._actualChildren.length] = f;
                    break;
                case "XI":
                    Z = f = new n;
                    break;
                case "CG":
                    Z = f = new n;
                    break;
                case "OP":
                    U = f = new n;
                    break;
                case "CF":
                    U = f = new n;
                    break;
                case "BE":
                    G = f = new n,
                    f.parent = U,
                    U._actualChildren[U._actualChildren.length] = f;
                    break;
                case "SH":
                    V = f = new n,
                    b = null,
                    D = null,
                    I = null,
                    M = null,
                    N = null;
                    break;
                default:
                    f = null
                }
                f && (f.nodeName = m,
                f.set_data(g))
            }
            return 1 == Z._actualChildren.length && "PA" == Z._actualChildren[0].nodeName ? Z = Z._actualChildren[0] : J.getReference(l) || Z.set_data({
                IT: l
            }),
            V && (Z.shadow = V),
            $ = new i(l,X,Z,m,h),
            [$]
        }
        ,
        l.ParseMergeMessage = function(n, r) {
            var c, u, d, h, p, _, g, f, E, m, v, S, C, y, T, b, L, D, I, A, M, N, R, P, O, w, k, H, B, F, x, U, G, V, Y, W, z, Q, q, j, $, J, X, K, Z, ee, te, ne, ie, oe, re, se, ae, ce = Locator.treeLookup, le = n.indexOf("|", 1), ue = le, de = Locator.user.phoneOnlyEnabled, he = n.charAt(0), pe = Locator.user.countryCode64, _e = Locator.user.countryCode, ge = (u = he != s) ? 0 : 1, fe = {}, Ee = [], me = [], ve = [], Se = [Ee, me, ve], Ce = [];
            for (fe[r] = !0,
            r.lastIndexOf("/") >= 0 && (Q = r.substring(r.lastIndexOf("/") + 1, r.length),
            fe[Q] = !0); -1 != ue; )
                try {
                    if (le = n.indexOf("|", ++ue),
                    p = n.slice(ue, le).split(";"),
                    h = p.length - 1,
                    ue = le,
                    -1 === ue && 0 === h)
                        break;
                    for (_ = {},
                    m = p[0],
                    c = ge; h > c; c++)
                        E = p[c],
                        _[E.substr(0, 2)] = E.substr(3);
                    if (_e && "CB"in _) {
                        W = _.CB || "",
                        z = -1;
                        do
                            z = W.indexOf(_e, ++z);
                        while (-1 != z && 1 == (1 & z));-1 != z && t(_)
                    } else
                        !_e && "CB"in _ && "" != _.CB && t(_);
                    if ("Modernizr"in window && !Modernizr.embeddedstreaming && "1" == _.ES && t(_),
                    de && "TO"in _) {
                        W = _.TO,
                        z = -1;
                        do
                            z = W.indexOf(pe, ++z);
                        while (-1 != z && 1 == (1 & z));-1 != z && (_[a] = "1")
                    }
                    switch ("FI"in _ && (v = _.FI),
                    m) {
                    case "PA":
                        G = _.IT,
                        V = M || A || x || U || r,
                        v && (_.ZW = v + "-" + _.ID),
                        f = V;
                        break;
                    case "CO":
                        M = _.IT,
                        f = A;
                        break;
                    case "MA":
                        M = null,
                        A = _.IT,
                        Y = D || L || U || r,
                        f = Y;
                        break;
                    case "MG":
                        M = null,
                        D = _.IT,
                        f = L;
                        break;
                    case "CT":
                        I = _.IT,
                        f = b;
                        break;
                    case "EV":
                        null == b && (b = y || r),
                        Y = I || b || U,
                        f = Y,
                        L = _.IT;
                        break;
                    case "CL":
                        b = _.IT,
                        I = null,
                        f = T || U || _.IT;
                        break;
                    case "CS":
                        T = _.IT,
                        f = _.IT;
                        break;
                    case "TG":
                        N = _.IT,
                        f = L;
                        break;
                    case "TE":
                        f = N;
                        break;
                    case "SG":
                        R = _.IT,
                        f = L;
                        break;
                    case "ST":
                        f = R;
                        break;
                    case "ES":
                        P = _.IT,
                        f = L;
                        break;
                    case "SC":
                        O = _.IT,
                        f = P;
                        break;
                    case "SL":
                        f = O;
                        break;
                    case "AS":
                        w = _.IT,
                        f = L;
                        break;
                    case "AP":
                        k = _.IT,
                        f = w;
                        break;
                    case "AT":
                        H = _.IT,
                        f = k;
                        break;
                    case "AC":
                        B = _.IT,
                        f = H;
                        break;
                    case "AE":
                        f = B;
                        break;
                    case "IN":
                        d = _;
                        break;
                    case "PD":
                        y = _.IT,
                        null == C && (C = S || U || r),
                        f = C;
                        break;
                    case "PS":
                        C = _.IT,
                        null == S && (S = r),
                        f = S;
                        break;
                    case "XL":
                        S = _.IT;
                        break;
                    case "LG":
                        f = L;
                        break;
                    case "OP":
                        F = _.IT;
                        break;
                    case "CF":
                        F = _.IT,
                        f = F;
                        break;
                    case "BE":
                        x = _.IT,
                        f = F;
                        break;
                    case "CG":
                        f = _.IT;
                        break;
                    case "SH":
                        U = f = _.IT,
                        T = null,
                        L = null,
                        D = null,
                        A = null,
                        M = null;
                        break;
                    case "SP":
                        f = G
                    }
                    if (g = _.IT,
                    fe[g] = !0,
                    q = ce.getReference(g),
                    q && (g === f || q.parent && q.parent.data && q.parent.data.IT === f)) {
                        j = q.data,
                        $ = {},
                        J = !1;
                        for (X in _)
                            j[X] != _[X] && (J = !0,
                            $[X] = _[X]);
                        J && ($.IT = g,
                        ve[ve.length] = {
                            topic: g,
                            msgType: o.UPDATE,
                            data: $,
                            nodeType: m,
                            info: d
                        })
                    } else
                        g !== f ? me.push({
                            topic: f + "/" + g,
                            msgType: o.INSERT,
                            data: _,
                            nodeType: m,
                            info: d
                        }) : "EMPTY" === r && "undefined" != typeof d && me.push({
                            topic: r,
                            msgType: o.SNAPSHOT,
                            data: _,
                            nodeType: "",
                            info: d
                        })
                } catch (ye) {
                    ErrorReporter.Trace(l, ye)
                }
            for (K = ce.getReference(r),
            K && (ee = function(e) {
                var t, n = e.length;
                for (t = 0; n > t; t++)
                    Z(e[t], e)
            }
            ,
            (Z = function(t, n) {
                var i, r;
                if (t) {
                    if (!fe[t.data.IT] && (Ee.push({
                        topic: t.data.IT,
                        msgType: o.DELETE,
                        data: t.data,
                        nodeType: t.nodeName
                    }),
                    n && t.parent instanceof e.FixtureStem && (n === t.parent.statGroups || n === t.parent.teamGroups || n === t.parent.additionalScores)))
                        for (i = n.length,
                        r = 0; i > r; r++)
                            n[r] === t && n.splice(r, 1);
                    ee(t.getChildren()),
                    t instanceof e.FixtureStem && (ee(t.statGroups),
                    ee(t.teamGroups),
                    ee(t.additionalScores))
                }
            }
            )(K)),
            te = Se.length,
            ne = 0; te > ne; ne++)
                if (ie = Se[ne])
                    for (oe = ie.length,
                    re = 0; oe > re; re++)
                        se = ie[re],
                        se && (ae = new i(se.topic,se.msgType,se.data,se.nodeType,se.info),
                        Ce.push(ae));
            return Ce
        }
        ,
        l
    }
    )();
    e.DataUtil = l
}
)(ns_gen5_data || (ns_gen5_data = {})),
(function(e) {
    var t, n, i = e.Stem, o = ns_gen5_events.UserEvent, r = "GD,GG,GI,GJ";
    !(function(e) {
        e[e.Desktop = 1] = "Desktop",
        e[e.Mobile = 2] = "Mobile",
        e[e.IosApp = 3] = "IosApp",
        e[e.AndroidApp = 4] = "AndroidApp"
    }
    )(t = e.Platforms || (e.Platforms = {})),
    n = (function(e) {
        function t() {
            var t = null !== e && e.apply(this, arguments) || this;
            return t.username = null,
            t.geoComplyUserId = null,
            t.migratedSession = !1,
            t.oddsTypeId = null,
            t.languageId = null,
            t.zoneId = null,
            t.timeZoneId = null,
            t.timeZoneAdjustment = null,
            t.timeZoneInitials = null,
            t.wizeGuy = !1,
            t.displayGroupId = null,
            t.offerType = 1,
            t.countryId = null,
            t.countryStateId = null,
            t.countryGroupId = null,
            t.countryCode = null,
            t.countryCode64 = "",
            t.countryState64 = "",
            t.countryGroup64 = "",
            t.filterMode = null,
            t.phoneOnlyEnabled = !1,
            t.isLoggedIn = !1,
            t.lastLoginTime = null,
            t.telephoneAccountNumber = null,
            t.codiceFiscale = null,
            t.impersonatedUsername = null,
            t.currencyCode = null,
            t.currencyRate = null,
            t.currencyDecimalSeparator = null,
            t.restrictedBettingEnabled = !1,
            t._balance = null,
            t.cookieSecurityLevel = "",
            t
        }
        return __extends(t, e),
        t.prototype.toString = function() {
            return "[User]"
        }
        ,
        t.prototype.getBalance = function() {
            return this._balance || (this._balance = ns_gen5_util.Singleton.getInstance(ns_gen5_util.BalanceModel))
        }
        ,
        t.prototype.setSiteConfig = function(e, t, n, i) {
            this.countryId = t,
            this.countryStateId = n,
            this.countryGroupId = i,
            this.filterMode = e,
            this._setStemFilterMode()
        }
        ,
        t.prototype.setOddsTypeId = function(e) {
            this.oddsTypeId != e && (this.oddsTypeId = e,
            this.dispatchEvent(new o(o.ODDS_TYPE_CHANGED)))
        }
        ,
        t.prototype.setLanguageId = function(e) {
            this.languageId != e && (this.languageId = e,
            this.dispatchEvent(new o(o.LANGUAGE_CHANGED)))
        }
        ,
        t.prototype.getFilterToken = function() {
            return new RegExp("(" + this.countryCode64.replace("+", "\\+") + "|" + this.countryState64.replace("+", "\\+") + "|" + this.countryGroup64.replace("+", "\\+") + ")","g")
        }
        ,
        t.prototype._setStemFilterMode = function() {
            for (var e, t = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "+", "/"], n = [], o = 0, s = 0, a = 0; 4096 > a; )
                e = t[o] + t[s],
                (a + 1) % 64 == 0 && (o++,
                s = -1),
                n[a] = e,
                s++,
                a++;
            this.countryCode64 = n[1024 + Number(this.countryId)],
            this.countryState64 = n[2048 + Number(this.countryStateId)],
            this.countryGroup64 = n[Number(this.countryGroupId)],
            this.phoneOnlyEnabled = r.split(",").indexOf(this.countryCode64) > -1,
            i.FilterToken = this.getFilterToken()
        }
        ,
        t.FILTER_MODE_COUNTRY_GROUP = "1",
        t.FILTER_MODE_COUNTRY = "2",
        t.FILTER_MODE_COUNTRY_STATE = "3",
        t
    }
    )(ns_gen5_events.EventDispatcher),
    e.User = n
}
)(ns_gen5_data || (ns_gen5_data = {})),
(function(e) {
    var t = ns_gen5_events.Event365
      , n = e.DataUtil
      , i = e.SubscriptionManagerEvent
      , o = e.User
      , r = ns_gen5_net.Loader
      , s = ns_gen5_net.LoaderEvent
      , a = ns_gen5_util.Delegate
      , c = ns_gen5_util.InfoReporter
      , l = ns_gen5_util.InfoReporterGroups
      , u = (function(e) {
        function t() {
            return null !== e && e.apply(this, arguments) || this
        }
        return __extends(t, e),
        t
    }
    )(r)
      , d = (function(r) {
        function d() {
            var e = r.call(this) || this;
            return e._dataInclusionExclusionLevel = "",
            e._customDataInclusionExclusionLevel = "",
            e._topicRequestLookup = null,
            e._initialised = !1,
            e.canDebouncePVCN = !0,
            e._topicRequestLookup = {},
            e
        }
        return __extends(d, r),
        d.prototype.toString = function() {
            return "[PullDataProcessor]"
        }
        ,
        d.prototype.loadPageData = function(t, n, i, o) {
            var r, c, l, d, h, p;
            if (this._initialised || this._initialise(),
            r = Locator.config,
            c = Locator.user,
            l = r.apiLocation,
            d = this._dataInclusionExclusionLevel,
            i && (l = i,
            o & e.SubscriptionManagerFlags.USE_CUSTOM_PARAMS && (d = this._customDataInclusionExclusionLevel)),
            -1 == l.indexOf("?") && (l += "?"),
            o & e.SubscriptionManagerFlags.SUPPRESS_STANDARD_QS_PARAMS || (l += "lid=" + c.languageId + "&zid=" + c.zoneId + "&pd=" + escape(t) + "&cid=" + c.countryId),
            l += d,
            null != n)
                for (h in n)
                    l += "&" + h + "=" + n[h];
            p = new u,
            p.pageTopic = t,
            p.addEventListener(s.COMPLETE, new a(this,this._pageDataCompleteHandler)),
            p.addEventListener(s.ERROR, new a(this,this._pageDataErrorHandler)),
            p.load(l),
            this._topicRequestLookup[t] = p
        }
        ,
        d.prototype.cancelPageDataLoad = function(e) {
            var t = this._topicRequestLookup[e];
            if (t)
                try {
                    t.abort(),
                    delete this._topicRequestLookup[e]
                } catch (n) {
                    ErrorReporter.Trace(this, n)
                }
        }
        ,
        d.prototype._initialise = function() {
            var e = Locator.user;
            if (this._initialised = !0,
            e.countryGroupId && (this._dataInclusionExclusionLevel = "&cg=" + e.countryGroupId),
            e.filterMode) {
                if ("-1" != e.filterMode)
                    switch (e.filterMode) {
                    case o.FILTER_MODE_COUNTRY_GROUP:
                        this._dataInclusionExclusionLevel = "&cgid=" + e.countryGroupId;
                        break;
                    case o.FILTER_MODE_COUNTRY:
                        this._dataInclusionExclusionLevel = "&ctid=" + e.countryId;
                        break;
                    case o.FILTER_MODE_COUNTRY_STATE:
                        this._dataInclusionExclusionLevel = "&csid=" + e.countryStateId
                    }
                this._customDataInclusionExclusionLevel = "&csid=" + e.countryStateId + "&ctid=" + e.countryId + "&cgid=" + e.countryGroupId
            }
        }
        ,
        d.prototype._pageDataCompleteHandler = function(e) {
            var i, o, r, s, a, c, l = this, u = e.target, d = u.pageTopic, h = e.data;
            for (delete this._topicRequestLookup[d],
            i = h.split("\b"),
            a = i.length,
            c = 0; a > c; c++)
                o = i[c],
                s = o.indexOf("IT="),
                r = 1 == a ? d : o.slice(s + 3, o.indexOf(";", s)),
                n.ParseMessage(o, r);
            Locator.validationManager.callLater((function() {
                l.dispatchEvent(new t(d))
            }
            )),
            this.canDebouncePVCN && (this.canDebouncePVCN = !1,
            setTimeout((function() {
                l.canDebouncePVCN = !0,
                Locator.validationManager.processValidationCycleNow()
            }
            ), 0))
        }
        ,
        d.prototype._pageDataErrorHandler = function(e) {
            var t = e.target
              , n = t.pageTopic
              , o = e.status
              , r = Locator.subscriptionManager;
            n && (r.dispatchEvent(new i(i.ERROR + n)),
            c.Trace(l.PULL_DATA_ENTRY, "Pull API IO Error on pageData: " + n + " - " + o),
            r.unsubscribe(n),
            delete this._topicRequestLookup[n])
        }
        ,
        d
    }
    )(ns_gen5_events.EventDispatcher);
    e.PullDataProcessor = d
}
)(ns_gen5_data || (ns_gen5_data = {})),
(function(e) {}
)(ns_gen5_ui || (ns_gen5_ui = {})),
(function(e) {
    function t() {
        return i.length ? i.pop() : document.createComment("")
    }
    function n(e) {
        i[i.length] = e
    }
    var i = []
      , o = (function(e) {
        function i(t) {
            var n = e.call(this) || this;
            return n._element = n._active_element = n.createElement ? n.createElement(t || "div") : document.createElement(t || "div"),
            n._element.wrapper = n,
            n
        }
        return __extends(i, e),
        i.prototype.toString = function() {
            return "[DomElement]"
        }
        ,
        i.prototype.initialize = function() {
            this.initialized = !0
        }
        ,
        i.prototype.appendChild = function(e) {
            var t = e;
            return e.parent = this,
            !t.initialized && t.initialize && (t.nestLevel = this.nestLevel + 1,
            t.initialize()),
            $assert && $assert("initialized"in e && t.initialized || !("initialized"in e), "Child - " + e + " - is not initialized."),
            this._element.appendChild(t._active_element),
            e
        }
        ,
        i.prototype.insertBefore = function(e, t) {
            $assert && $assert(t, "before is null or undefined!!!");
            var n = e;
            return e.parent = this,
            !n.initialized && n.initialize && (n.nestLevel = this.nestLevel + 1,
            n.initialize()),
            this._element.insertBefore(n._active_element, t._active_element ? t._active_element : t),
            e
        }
        ,
        i.prototype.insertAfter = function(e, t) {
            var n, i;
            return $assert && $assert(t, "after is null or undefined!!!"),
            n = e,
            e.parent = this,
            !n.initialized && n.initialize && (n.nestLevel = this.nestLevel + 1,
            n.initialize()),
            i = t._active_element ? t._active_element : t,
            i.nextSibling ? this._element.insertBefore(n._active_element, i.nextSibling) : this._element.appendChild(n._active_element),
            e
        }
        ,
        i.prototype.appendChildAt = function(e, t) {
            var n, i = e;
            return e.parent = this,
            !i.initialized && i.initialize && (i.nestLevel = this.nestLevel + 1,
            i.initialize()),
            n = this._element.children.length > t ? this._element.children[t] : null,
            this._element.insertBefore(i._active_element, n),
            e
        }
        ,
        i.prototype.removeChild = function(e) {
            var t, n, i, o = e;
            if (e.parent == this) {
                e.parent = null;
                try {
                    this._element.removeChild(o._active_element)
                } catch (r) {
                    t = e.getElement(),
                    n = t.parentNode && t.parentNode.className || "",
                    this._element.className || t.className || n ? (i = this._element.className + " " + t.className + " " + n,
                    ErrorReporter.Trace(i, r)) : $assert && $assert(!1, "Remove child has no parent when being called")
                }
            }
            return e
        }
        ,
        i.prototype.replaceChild = function(e, t) {
            if (t.parent == this) {
                t.parent = null;
                var n = e;
                e.parent = this,
                !n.initialized && n.initialize && (n.nestLevel = this.nestLevel + 1,
                n.initialize()),
                this._element.replaceChild(n._active_element, t._active_element)
            }
            return e
        }
        ,
        i.prototype.removeAllChildren = function() {
            for (var e, t = this._element.firstChild; t; )
                e = t.wrapper,
                t = t.nextSibling,
                e && this.removeChild(e);
            return this
        }
        ,
        i.prototype.suspendElementFromDom = function() {
            var e, n;
            this._suspended_markerNode || (e = this._active_element = this._suspended_markerNode = t(),
            e.wrapper = this,
            this.parent && this._element.parentNode && (n = this.parent._element,
            n.replaceChild(e, this._element)))
        }
        ,
        i.prototype.unsuspendElementFromDom = function() {
            var e, t;
            this._suspended_markerNode && (e = this._suspended_markerNode,
            e.wrapper = null,
            this._suspended_markerNode = null,
            this._active_element = this._element,
            n(e),
            this.parent && e.parentNode && (t = this.parent._element,
            t.replaceChild(this._element, e)))
        }
        ,
        i.prototype.setAttribute = function(e, t) {
            return this._element.setAttribute(e, t),
            this
        }
        ,
        i.prototype.removeAttribute = function(e) {
            return this._element.removeAttribute(e),
            this
        }
        ,
        i.prototype.getAttribute = function(e) {
            return this._element.getAttribute(e)
        }
        ,
        i.prototype.getElement = function() {
            return this._element
        }
        ,
        i.prototype.getElementChildren = function() {
            return this._element.children
        }
        ,
        i.prototype.getFirstChild = function() {
            return this._element.firstChild
        }
        ,
        i.prototype.getLastChild = function() {
            return this._element.lastChild
        }
        ,
        i.prototype.getPreviousSibling = function() {
            return this._active_element.previousSibling
        }
        ,
        i.prototype.getNextSibling = function() {
            return this._active_element.nextSibling
        }
        ,
        i.prototype.getInlineStyle = function() {
            return this._element.style
        }
        ,
        i.prototype.getTooltip = function() {
            return this.tooltip
        }
        ,
        i.SInit = (function() {
            i.prototype._element = null,
            i.prototype._active_element = null,
            i.prototype.parent = null,
            i.prototype.initialized = !1,
            i.prototype.nestLevel = 0,
            i.prototype._suspended_markerNode = null,
            i.prototype.tooltip = null,
            i.prototype.alwaysShowTooltip = !1
        }
        )(),
        i
    }
    )(ns_gen5_events.EventDispatcher);
    e.DomElement = o
}
)(ns_gen5_ui || (ns_gen5_ui = {})),
(function(e) {
    var t = (function(e) {
        function t(t) {
            var n = e.call(this, t) || this;
            return n._styleList = {},
            n
        }
        return __extends(t, e),
        t.prototype.toString = function() {
            return "[Component]"
        }
        ,
        t.prototype.initialize = function() {
            1 != this._stopInitInvalidation && (Locator.validationManager.queueForValidation(this),
            this._propertiesInvalidated = !0),
            this.createChildren(),
            this.initialized = !0
        }
        ,
        t.prototype.setAttribute = function(t, n) {
            return $assert && $assert("class" != t, "It's not safe to use 'setAttribute(\"class\",' with a Component instance. Use 'addStyle' instead."),
            e.prototype.setAttribute.call(this, t, n)
        }
        ,
        t.prototype.createChildren = function() {}
        ,
        t.prototype.commitProperties = function() {}
        ,
        t.prototype.commitStyles = function() {
            var e, t = "";
            for (e in this._styleList)
                t += e + " ";
            this._element.className = t
        }
        ,
        t.prototype.hasStyle = function(e) {
            return !!this._styleList[e]
        }
        ,
        t.prototype.addStyle = function(e) {
            return this._styleList[e] = !0,
            this._stylesInvalidated || this.invalidateStyles(),
            this
        }
        ,
        t.prototype.removeStyle = function(e) {
            return delete this._styleList[e],
            this._stylesInvalidated || this.invalidateStyles(),
            this
        }
        ,
        t.prototype.overwriteStyle = function(e, t) {
            return delete this._styleList[e],
            this._styleList[t] = !0,
            this.invalidateStyles(),
            this
        }
        ,
        t.prototype.setVisible = function(e) {
            return e != this._visible && (this._visible = e,
            e ? this.removeStyle("Hidden") : this.addStyle("Hidden")),
            this
        }
        ,
        t.prototype.getVisible = function() {
            return this._visible
        }
        ,
        t.prototype.invalidateProperties = function() {
            return this._propertiesInvalidated = !0,
            1 != this.validationState && this.parent && Locator.validationManager.queueForValidation(this),
            this
        }
        ,
        t.prototype.invalidateStyles = function() {
            return this._stylesInvalidated = !0,
            0 == this.validationState && this.parent && Locator.validationManager.queueForValidation(this),
            this
        }
        ,
        t.prototype.validateNow = function(e) {
            this._propertiesInvalidated && (this._propertiesInvalidated = !1,
            this.commitProperties()),
            this._stylesInvalidated && (this._stylesInvalidated = !1,
            this.commitStyles()),
            0 != e && (this.validationState = 0)
        }
        ,
        t.Wrapper = function(e) {
            var t, n, i, o, r;
            for (ns_gen5_events.EventDispatcher.call(this),
            this.parent = !0,
            this._element = e,
            e.wrapper = this,
            t = this._element.getAttribute("class"),
            n = {},
            i = t ? t.split(" ") : [],
            o = i.length,
            r = 0; o > r; r++)
                n[i[r]] = !0;
            this._styleList = n
        }
        ,
        t.SInit = (function() {
            t.prototype._styleList = null,
            t.prototype._propertiesInvalidated = !1,
            t.prototype._stylesInvalidated = !1,
            t.prototype._visible = !0,
            t.prototype._stopInitInvalidation = !1,
            t.prototype.validationState = 0,
            t.Wrapper.prototype = new t
        }
        )(),
        t
    }
    )(e.DomElement);
    e.Component = t
}
)(ns_gen5_ui || (ns_gen5_ui = {})),
(function(e) {
    var t = e.DomElement
      , n = 0
      , i = (function(i) {
        function o(e) {
            var o = i.call(this, e) || this;
            return o.root = new t,
            o.uid = ++n,
            o
        }
        return __extends(o, i),
        o.prototype.toString = function() {
            return "[Module]"
        }
        ,
        o.getRoot = function(e) {
            for (; e; ) {
                if (e instanceof o)
                    return e;
                e = e.parent
            }
            return null
        }
        ,
        o.prototype.initialize = function() {
            i.prototype.initialize.call(this),
            ns_gen5_util.Singleton.RegisterModule(this),
            this.parent && this.parent.parent || this.parent instanceof e.ModuleContainer || (this.parent = this.root,
            this.moduleReady())
        }
        ,
        o.prototype.moduleReady = function() {
            this.ready = !0
        }
        ,
        o.prototype.dispose = function() {
            var e = this;
            this.disposed = !0,
            Locator.validationManager.callNewContext((function() {
                ns_gen5_util.Singleton.RemoveScope(e)
            }
            ))
        }
        ,
        o
    }
    )(e.Component);
    e.Module = i
}
)(ns_gen5_ui || (ns_gen5_ui = {})),
(function(e) {
    var t, n, i = e.SubscriptionManagerEvent, o = ns_gen5_util.Delegate, r = ns_gen5_util_logging.CounterLogger, s = 15e3, a = "SPTBK", c = (function(c) {
        function l() {
            var e = c.call(this) || this;
            return e.pushConnected = !1,
            e.topicCountLookup = {},
            e.hasLoggedCounter = !1,
            e.unsubscribeDeferralPeriodMS = s,
            e._subscribedTopics = {},
            e.unsubscribeGraceLookup = {},
            e.batchSubscribe = "",
            e.batchUnsubscribe = "",
            e._streamDataProcessor = null,
            e.pullDataProcessor = null,
            e.delegatesnapshotRecievedHandler = new o(e,e.snapshotRecievedHandler),
            e.delegatepushConnectedHandler = new o(e,e.pushConnectedHandler),
            e.delegatepushReConnectedHandler = new o(e,e.pushReConnectedHandler),
            e.delegatepushConnectFailedHandler = new o(e,e.pushConnectFailedHandler),
            e.callback_submitBatch = function() {
                return e.submitBatch()
            }
            ,
            e
        }
        return __extends(l, c),
        l.prototype.toString = function() {
            return "[SubscriptionManager]"
        }
        ,
        l.prototype.connect = function() {
            this._streamDataProcessor.connect(t, n)
        }
        ,
        l.prototype.subscribe = function(t, n, o, r) {
            var s, a, c, u, d, h;
            return "boolean" == typeof o && (s = arguments[2],
            a = arguments[3],
            c = arguments[4],
            u = arguments[5],
            o = 0,
            s || (o |= e.SubscriptionManagerFlags.SUPPRESS_SERVER_MESSAGE),
            a || (o |= e.SubscriptionManagerFlags.SUPPRESS_FULL_HIERARCHY),
            c && (r = c),
            u && (o |= e.SubscriptionManagerFlags.BATCH)),
            t ? (l.DevicePrefix && t.indexOf("X^{0}") > -1 && (t = t.replace("{0}", l.DevicePrefix)),
            d = Locator.treeLookup.getReference(t),
            h = this.unsubscribeGraceLookup[t],
            h && (clearTimeout(h),
            !d && this._subscribedTopics[t] && delete this._subscribedTopics[t],
            delete this.unsubscribeGraceLookup[t]),
            d ? Locator.validationManager.callLater((function() {
                return n.method.call(n.scope, new i(t))
            }
            )) : (this.addEventListener(t, n),
            this._subscribedTopics[t] ? this._subscribedTopics[t].push(n) : (this._subscribedTopics[t] = [n],
            "#" == t.charAt(0) ? (o & e.SubscriptionManagerFlags.SUPPRESS_SERVER_MESSAGE || this.pullDataProcessor.loadPageData(t, null, r, o),
            this.pullDataProcessor.addEventListener(t, this.delegatesnapshotRecievedHandler)) : (o & e.SubscriptionManagerFlags.SUPPRESS_SERVER_MESSAGE || (o & e.SubscriptionManagerFlags.DONT_BATCH ? this._streamDataProcessor.subscribe(t) : this._addToSubscribeBuffer(t)),
            this._streamDataProcessor.addEventListener(t, this.delegatesnapshotRecievedHandler)))),
            t) : null
        }
        ,
        l.prototype.sharedSubscribe = function(e, t, n, i) {
            return this.topicCountLookup[e] = this.topicCountLookup[e] ? this.topicCountLookup[e] + 1 : 1,
            this.subscribe(e, t, n, i)
        }
        ,
        l.prototype.sharedUnsubscribe = function(e, t) {
            this.topicCountLookup[e] = this.topicCountLookup[e] - 1,
            this.topicCountLookup[e] < 1 && (delete this.topicCountLookup[e],
            this.unsubscribe(e, t))
        }
        ,
        l.prototype.unsubscribe = function(t, n) {
            var i, o, r, s = this;
            t && (l.DevicePrefix && t.indexOf("X^{0}") > -1 && (t = t.replace("{0}", l.DevicePrefix)),
            i = Locator.treeLookup.getReference(t),
            i && i.shed(),
            "#" != t.charAt(0) ? n & e.SubscriptionManagerFlags.SUPPRESS_SERVER_MESSAGE || (i || this._streamDataProcessor.hasEventListener(t) && this._streamDataProcessor.removeEventListener(t, this.delegatesnapshotRecievedHandler),
            (!this.unsubscribeGraceLookup[t] || n & e.SubscriptionManagerFlags.NO_GRACE_PERIOD) && (o = function() {
                n & e.SubscriptionManagerFlags.DONT_BATCH ? s._streamDataProcessor.unsubscribe(t) : s.addToUnsubscribeBuffer(t),
                s.clearDownTopic(t, i);
                var o = s.unsubscribeGraceLookup[t];
                o && (clearTimeout(o),
                delete s.unsubscribeGraceLookup[t])
            }
            ,
            n & e.SubscriptionManagerFlags.NO_GRACE_PERIOD || this.unsubscribeDeferralPeriodMS <= 0 ? o() : (r = setTimeout(o, this.unsubscribeDeferralPeriodMS),
            this.unsubscribeGraceLookup[t] = r))) : (!this.unsubscribeGraceLookup[t] || n & e.SubscriptionManagerFlags.NO_GRACE_PERIOD) && (o = function() {
                s.pullDataProcessor.cancelPageDataLoad(t),
                s.clearDownTopic(t, i);
                var e = s.unsubscribeGraceLookup[t];
                e && (clearTimeout(e),
                delete s.unsubscribeGraceLookup[t])
            }
            ,
            n & e.SubscriptionManagerFlags.NO_GRACE_PERIOD || !i ? o() : (r = setTimeout(o, this.unsubscribeDeferralPeriodMS),
            this.unsubscribeGraceLookup[t] = r)))
        }
        ,
        l.prototype.clearDownTopic = function(e, t) {
            this.removeListenersForTopic(e),
            delete this._subscribedTopics[e],
            t && t.remove()
        }
        ,
        l.prototype.send = function(e, t) {
            this._streamDataProcessor.send(e, t)
        }
        ,
        l.prototype.resubscribePush = function(e) {
            for (var t in e)
                "#" != t.charAt(0) && this._addToSubscribeBuffer(t)
        }
        ,
        l.prototype.getSubscribedPushTopics = function() {
            var e, t = [];
            for (e in this._subscribedTopics)
                "#" != e.charAt(0) && (t[t.length] = e);
            return t
        }
        ,
        l.prototype.setStreamDataProcessor = function(t) {
            var n = this;
            this._streamDataProcessor && (this._streamDataProcessor.removeEventListener(e.StreamDataProcessorEvent.CONNECTED, this.delegatepushConnectedHandler),
            this._streamDataProcessor.removeEventListener(e.StreamDataProcessorEvent.CONNECTION_FAILED, this.delegatepushConnectFailedHandler),
            this._streamDataProcessor.removeEventListener(e.StreamDataProcessorEvent.RECONNECT_FAILED, this.delegatepushConnectFailedHandler),
            this._streamDataProcessor.removeEventListener(e.StreamDataProcessorEvent.SERVER_RECONNECT, this.delegatepushReConnectedHandler)),
            this._streamDataProcessor = t,
            this._streamDataProcessor.getCurrentTopics = function() {
                return n.getSubscribedPushTopics()
            }
            ,
            this._streamDataProcessor.addEventListener(e.StreamDataProcessorEvent.CONNECTED, this.delegatepushConnectedHandler),
            this._streamDataProcessor.addEventListener(e.StreamDataProcessorEvent.CONNECTION_FAILED, this.delegatepushConnectFailedHandler),
            this._streamDataProcessor.addEventListener(e.StreamDataProcessorEvent.RECONNECT_FAILED, this.delegatepushConnectFailedHandler),
            this._streamDataProcessor.addEventListener(e.StreamDataProcessorEvent.SERVER_RECONNECT, this.delegatepushReConnectedHandler)
        }
        ,
        l.prototype.setNST = function(e, i) {
            t = e,
            n = i,
            this._streamDataProcessor.setNst(e, i)
        }
        ,
        l.prototype.sendNSTToken = function(e, i) {
            var o, s, c;
            return t = e,
            n = i,
            this._streamDataProcessor.setNst(e, i),
            o = n && n(),
            o && Date.now() / 1e3 > o ? (this.hasLoggedCounter || (this.hasLoggedCounter = !0,
            r.QueueCounter("nst_timestamp_1", 1),
            r.ForceCounterFlush()),
            void Locator.validationManager.callNewContext((function() {
                location.reload()
            }
            ))) : (s = e(),
            c = "nst" + readit.StandardProtocolConstants.RECORD_DELIM + s + readit.StandardProtocolConstants.FIELD_DELIM + a,
            void this.send("command", c))
        }
        ,
        l.prototype.setPullDataProcessor = function(e) {
            this.pullDataProcessor = e
        }
        ,
        l.prototype.close = function() {
            this._streamDataProcessor.close(readit.ReaditFlags.SEND_CLOSE)
        }
        ,
        l.prototype._addToSubscribeBuffer = function(e) {
            0 == this.batchSubscribe.length && 0 == this.batchUnsubscribe.length ? Locator.validationManager.callLater(this.callback_submitBatch) : this.batchSubscribe && (this.batchSubscribe += ","),
            this.batchSubscribe += e
        }
        ,
        l.prototype.addToUnsubscribeBuffer = function(e) {
            0 == this.batchSubscribe.length && 0 == this.batchUnsubscribe.length ? Locator.validationManager.callLater(this.callback_submitBatch) : this.batchUnsubscribe && (this.batchUnsubscribe += ","),
            this.batchUnsubscribe += e
        }
        ,
        l.prototype.submitBatch = function() {
            this.batchSubscribe && this.batchUnsubscribe ? this._streamDataProcessor.swapSubscriptions(this.batchSubscribe, this.batchUnsubscribe) : (this.batchSubscribe && this._streamDataProcessor.subscribe(this.batchSubscribe),
            this.batchUnsubscribe && this._streamDataProcessor.unsubscribe(this.batchUnsubscribe)),
            this.batchSubscribe = "",
            this.batchUnsubscribe = ""
        }
        ,
        l.prototype.removeListenersForTopic = function(e) {
            var t, n, i = this._subscribedTopics[e];
            if (i) {
                for (t = i.length,
                n = 0; t > n; n++)
                    this.removeEventListener(e, i[n]);
                i.length = 0
            }
        }
        ,
        l.prototype._OtsReport = function() {
            var e, t = "";
            for (e in this._subscribedTopics)
                t += e + "	\r\n";
            return t
        }
        ,
        l.prototype.snapshotRecievedHandler = function(e) {
            e.target.removeEventListener(e.type, this.delegatesnapshotRecievedHandler);
            try {
                this.dispatchEvent(new i(e.type)),
                this.removeListenersForTopic(e.type)
            } catch (t) {
                ErrorReporter.Trace(this, t)
            }
        }
        ,
        l.prototype.pushReConnectedHandler = function() {
            t && this.sendNSTToken(t, n)
        }
        ,
        l.prototype.pushConnectedHandler = function() {
            this.pushConnected || this.dispatchEvent(new i(i.CONNECTED)),
            this.pushConnected = !0,
            this.unsubscribeDeferralPeriodMS = s
        }
        ,
        l.prototype.pushConnectFailedHandler = function() {
            this.pushConnected && this.dispatchEvent(new i(i.CONNECTION_FAILED)),
            this.pushConnected = !1,
            this.unsubscribeDeferralPeriodMS = 0
        }
        ,
        l.TOPIC_FALLBACK_INDICATOR = "*",
        l
    }
    )(ns_gen5_events.EventDispatcher);
    e.SubscriptionManager = c
}
)(ns_gen5_data || (ns_gen5_data = {})),
(function(e) {
    var t = ns_gen5_util.Delegate
      , n = (function(n) {
        function i() {
            return n.call(this) || this
        }
        return __extends(i, n),
        i.prototype.setStreamDataProcessor = function(i) {
            this._streamDataProcessor ? (this._streamDataProcessor.removeEventListener(e.PrivateStreamDataProcessorEvent.BALANCE_RECEIVED, this.delegate_balanceReceivedHandler),
            this._streamDataProcessor.removeEventListener(e.PrivateStreamDataProcessorEvent.PUSH_MESSAGE_RECEIVED, this.delegate_pushMessageReceivedHandler),
            this._streamDataProcessor.removeEventListener(e.PrivateStreamDataProcessorEvent.D23_MESSAGE_RECEIVED, this.delegate_d23MessageReceivedHandler)) : (this.delegate_balanceReceivedHandler = new t(this,this.balanceReceivedHandler),
            this.delegate_pushMessageReceivedHandler = new t(this,this.pushMessageReceivedHandler),
            this.delegate_d23MessageReceivedHandler = new t(this,this.d23MessageReceivedHandler)),
            n.prototype.setStreamDataProcessor.call(this, i),
            this._streamDataProcessor.addEventListener(e.PrivateStreamDataProcessorEvent.BALANCE_RECEIVED, this.delegate_balanceReceivedHandler),
            this._streamDataProcessor.addEventListener(e.PrivateStreamDataProcessorEvent.PUSH_MESSAGE_RECEIVED, this.delegate_pushMessageReceivedHandler),
            this._streamDataProcessor.addEventListener(e.PrivateStreamDataProcessorEvent.D23_MESSAGE_RECEIVED, this.delegate_d23MessageReceivedHandler)
        }
        ,
        i.prototype.balanceReceivedHandler = function(t) {
            this.dispatchEvent(new e.PrivateSubscriptionManagerEvent(e.PrivateSubscriptionManagerEvent.BALANCE_RECEIVED,t.message.topic,t.message.message))
        }
        ,
        i.prototype.pushMessageReceivedHandler = function(t) {
            this.dispatchEvent(new e.PrivateSubscriptionManagerEvent(e.PrivateSubscriptionManagerEvent.PUSH_MESSAGE_RECEIVED,t.message.topic,t.message.message))
        }
        ,
        i.prototype.d23MessageReceivedHandler = function(t) {
            this.dispatchEvent(new e.PrivateSubscriptionManagerEvent(e.PrivateSubscriptionManagerEvent.D23_MESSAGE_RECEIVED,t.message.topic,t.message.message))
        }
        ,
        i.prototype.getSubscribedPushTopics = function() {
            return []
        }
        ,
        i.prototype.pushReConnectedHandler = function() {
            n.prototype.resubscribePush.call(this, this._subscribedTopics)
        }
        ,
        i
    }
    )(e.SubscriptionManager);
    e.PrivateSubscriptionManager = n
}
)(ns_gen5_data || (ns_gen5_data = {})),
(function(e) {
    var t = e.DataUtil
      , n = ns_gen5_net.Loader
      , i = (function() {
        function i(e, t, n) {
            void 0 === n && (n = !1),
            this.initialSnapshotHandler = function(e) {}
            ,
            this.url = e,
            this.topic = t,
            n && this.buildInclusionExclusionData()
        }
        return i.prototype.poll = function() {
            var e, t = this;
            this.dataInclusionExclusionLevel && (this.url = -1 === this.url.indexOf("?") ? this.url + "?" : this.url + "&",
            this.url += "pd=" + encodeURIComponent(this.topic),
            this.url += "&" + this.dataInclusionExclusionLevel,
            this.dataInclusionExclusionLevel = null),
            e = new n,
            e.completeHandler = function(e, n) {
                200 === n && t.handleResponse(e)
            }
            ,
            e.load(this.url)
        }
        ,
        i.prototype.handleResponse = function(e) {
            var n, i, o, r = this, s = this.topic, a = !!Locator.treeLookup.getReference(s), c = a ? t.ParseMergeMessage(e, s) : t.ParseMessage(e, s);
            for (n = 0,
            i = c; n < i.length; n++)
                o = i[n],
                a && (s = o.topic),
                t.ProcessStemChanges(o, s, this.topic, a, (function(e) {
                    return r.initialSnapshotHandler(e)
                }
                ));
            this.pollCompleteHandler && this.pollCompleteHandler()
        }
        ,
        i.prototype.buildInclusionExclusionData = function() {
            var t = Locator.user;
            if (this.dataInclusionExclusionLevel = "cid=" + t.countryId + "&cg=" + t.countryGroupId + "&lid=" + t.languageId + "&zid=" + t.zoneId,
            t.filterMode && "-1" != t.filterMode)
                switch (t.filterMode) {
                case e.User.FILTER_MODE_COUNTRY_GROUP:
                    this.dataInclusionExclusionLevel += "&cgid=" + t.countryGroupId;
                    break;
                case e.User.FILTER_MODE_COUNTRY:
                    this.dataInclusionExclusionLevel += "&ctid=" + t.countryId;
                    break;
                case e.User.FILTER_MODE_COUNTRY_STATE:
                    this.dataInclusionExclusionLevel += "&csid=" + t.countryStateId
                }
        }
        ,
        i
    }
    )();
    e.PollDataProcessor = i
}
)(ns_gen5_data || (ns_gen5_data = {})),
(function(e) {
    var t = (function(e) {
        function t(t) {
            return e.call(this, t) || this
        }
        return __extends(t, e),
        t.prototype.toString = function() {
            return "[PushedConfigPropertyChangeEvent type=" + this.type + "]"
        }
        ,
        t.PROPERTIES_INITIALISED = "PUSH_CONFIG_PROPERTIES_INITIALISED",
        t.IS_INPLAY_AVAILABLE = "IS_INPLAY_AVAILABLE",
        t.INPLAY_LAUNCHER_DISPLAY_MODE = "INPLAY_LAUNCHER_CONTENT_TYPE",
        t.INPLAY_RHS_LAUNCHER_DISPLAY_MODE = "INPLAY_RHS_LAUNCHER_CONTENT_TYPE",
        t.IS_MYBETS_SYSTEM_ENABLED = "IS_MYBETS_SYSTEM_ENABLED",
        t.IS_OPEN_BETS_PULL_DELIVERY_AVAILABLE = "IS_OPEN_BETS_PULL_DELIVERY_AVAILABLE",
        t.IS_CLOSE_BETS_PULL_DELIVERY_AVAILABLE = "IS_CLOSE_BETS_PULL_DELIVERY_AVAILABLE",
        t.IS_MYBETS_SITE_FEATURE_AVAILABLE = "IS_MYBETS_SITE_FEATURE_AVAILABLE",
        t.IS_CLICK_TO_CALL_SITE_FEATURE_AVAILABLE = "IS_CLICK_TO_CALL_SITE_FEATURE_AVAILABLE",
        t.IS_BET_CALL_AVAILABLE = "IS_BET_CALL_AVAILABLE",
        t.IS_BET_CALL_TWILIO_AVAILABLE = "IS_BET_CALL_TWILIO_AVAILABLE",
        t.IS_CUSTOMER_TO_CUSTOMER_CALLING_FEATURE_AVAILABLE = "IS_CUSTOMER_TO_CUSTOMER_CALLING_FEATURE_AVAILABLE",
        t.IS_CUSTOMER_TO_REPRESENTATIVE_CALLING_FEATURE_AVAILABLE = "IS_CUSTOMER_TO_REPRESENTATIVE_CALLING_FEATURE_AVAILABLE",
        t.PUSH_BALANCE_ENABLED_AVAILABLE = "PUSH_BALANCE_ENABLED_AVAIBLE",
        t.IS_SETTLED_BETS_FEATURE_AVAILABLE = "IS_SETTLED_BETS_FEATURE_AVAILABLE",
        t.IS_EDIT_BETS_FEATURE_AVAILABLE = "IS_EDIT_BETS_FEATURE_AVAILABLE",
        t.IS_EDIT_BETS_COMPLEX_MULTIPLES_FEATURE_AVAILABLE = "IS_EDIT_BETS_COMPLEX_MULTIPLE_FEATURE_AVAILABLE",
        t.IS_AUS_MULTIPLES_AVAILABLE = "IS_AUS_MULTIPLES_AVAILABLE",
        t.FREE_BET_COUNTRIES_UPDATED = "FREE_BET_COUNTRIES_UPDATED",
        t.PSQFV4_AVAILABLE = "PSQFV4_AVAILABLE",
        t
    }
    )(ns_gen5_events.Event365);
    e.PushedConfigPropertyChangeEvent = t
}
)(ns_gen5_config || (ns_gen5_config = {})),
(function(e) {
    function t(e) {
        e && e.length > 0 && (e = ns_gen5_util.B365SimpleEncrypt.decrypt(e),
        Locator.subscriptionManager.subscribe(e, new l(this,function(e) {}
        )))
    }
    var n, i, o = ns_gen5_util.OddsConverter, r = ns_gen5_events.EventDispatcher, s = ns_gen5_events.Event365, a = ns_gen5_data.SubscriptionManagerEvent, c = ns_gen5_data.StemEvent, l = ns_gen5_util.Delegate;
    !(function(e) {
        e[e.fixture = 0] = "fixture",
        e[e.classification = 1] = "classification"
    }
    )(n = e.InplayLauncherDisplayModeEnum || (e.InplayLauncherDisplayModeEnum = {})),
    i = (function(n) {
        function i() {
            var e = n.call(this) || this;
            return e._subscriptionTopic = null,
            e._subscriptionManager = null,
            e._configStem = null,
            e._configStemUpdateHandlerDelegate = null,
            e._configStemDeleteHandlerDelegate = null,
            e._pushConnectedHandlerDelegate = null,
            e._pushDisconnectedHandlerDelegate = null,
            e._isSubscriptionInitialised = !1,
            e._isDisposed = !1,
            e._pushConnected = !1,
            e._arePropertiesInitialised = !1,
            e._isInPlayDataAvailable = !1,
            e._isMyBetsSystemEnabled = !1,
            e._isOpenBetsPullDeliveryAvailable = !1,
            e._isMyBetsSiteFeatureAvailable = !1,
            e._isBetCallAvailable = !1,
            e._isAusMultiplesAvailable = !1,
            e._isBetCallTwilioAvailable = !1,
            e._isPushBalanceEnabled = !1,
            e._settledBetsEnabled = !1,
            e._isCloseBetPullPresentationEnabled = !0,
            e._isEditBetsEnabled = !1,
            e.psqfV4Enabled = !1,
            e.freeBetCountries = [],
            e.editBetsComplexMultiplesEnabled = !1,
            e.betCallDisabledAttribute = "MB",
            e.ausMultiplesDisabledAttribute = "AM",
            e.betCallTwilioDisabledAttribute = "MT",
            e.settledBetsDisabledAttribute = "SB",
            e.pushBalanceEnabledAttribute = "PB",
            e.complexMultiplesEnabledAttribute = "EM",
            e
        }
        return __extends(i, n),
        i.prototype.initialiseSubscription = function(e, t) {
            this._isSubscriptionInitialised || this._isDisposed || (this._pushConnectedHandlerDelegate = new l(this,this.pushConnectedHandler),
            this._pushDisconnectedHandlerDelegate = new l(this,this.pushDisconnectedHandler),
            Locator.privateSubscriptionManager.addEventListener(a.CONNECTED, this._pushConnectedHandlerDelegate),
            Locator.privateSubscriptionManager.addEventListener(a.CONNECTION_FAILED, this._pushDisconnectedHandlerDelegate),
            this._isSubscriptionInitialised = !0,
            this._subscriptionTopic = ns_gen5_util.StringUtil.Format(i.USER_CONFIG_SUBSCRIPTION_TOPIC, t.languageId, t.zoneId),
            this._subscriptionManager = e,
            e.subscribe(this._subscriptionTopic, new l(this,this.configTopicSubscriptionHandler)))
        }
        ,
        i.prototype.getArePropertiesInitialised = function() {
            return this._arePropertiesInitialised
        }
        ,
        i.prototype.getAttributeValue = function(e) {
            return this._configStem && this._configStem.data[e] || ""
        }
        ,
        i.prototype.getIsInPlayAvailable = function() {
            return this._isInPlayDataAvailable
        }
        ,
        i.prototype.getIsMyBetsSystemEnabled = function() {
            return this._isMyBetsSystemEnabled
        }
        ,
        i.prototype.getIsOpenBetsPullDeliveryAvailable = function() {
            return this._isOpenBetsPullDeliveryAvailable
        }
        ,
        i.prototype.getIsCloseBetPullPresentationEnabled = function() {
            return this._isCloseBetPullPresentationEnabled
        }
        ,
        i.prototype.getIsMyBetsSiteFeatureAvailable = function() {
            return this._isMyBetsSiteFeatureAvailable
        }
        ,
        i.prototype.getIsBetCallAvailable = function() {
            return this._isBetCallAvailable
        }
        ,
        i.prototype.getIsAusMultiplesAvailable = function() {
            return this._isAusMultiplesAvailable
        }
        ,
        i.prototype.getIsBetCallTwilioAvailable = function() {
            return this._isBetCallTwilioAvailable
        }
        ,
        i.prototype.getIsPushBalanceEnabled = function() {
            return this._isPushBalanceEnabled
        }
        ,
        i.prototype.getIsEditBetsEnabled = function() {
            return this._isEditBetsEnabled
        }
        ,
        i.prototype.getIsSettledBetsEnabled = function() {
            return this._settledBetsEnabled
        }
        ,
        i.prototype.getIsEditBetsComplexEnabled = function() {
            return this.editBetsComplexMultiplesEnabled
        }
        ,
        i.prototype.getIsPSQFV4Enabled = function() {
            return this.psqfV4Enabled
        }
        ,
        i.prototype.getIsFreeBetsAllowed = function(e) {
            return this.freeBetCountries.indexOf(e) > -1
        }
        ,
        i.prototype.dispose = function() {
            this._isDisposed || (this._isDisposed = !0,
            this._subscriptionTopic && (Locator.privateSubscriptionManager.removeEventListener(a.CONNECTED, this._pushConnectedHandlerDelegate),
            Locator.privateSubscriptionManager.removeEventListener(a.CONNECTION_FAILED, this._pushDisconnectedHandlerDelegate),
            this._subscriptionManager.unsubscribe(this._subscriptionTopic),
            this._subscriptionTopic = null,
            this._subscriptionManager = null),
            this.configStemDeleteHandler())
        }
        ,
        i.prototype.getIsDisposed = function() {
            return this._isDisposed
        }
        ,
        i.prototype.configTopicSubscriptionHandler = function(n) {
            var i = this
              , o = Locator.treeLookup;
            !this._configStem && o && (this._configStem = o.getReference(n.type),
            this._configStemUpdateHandlerDelegate = new l(this,this.configStemUpdateHandler),
            this._configStemDeleteHandlerDelegate = new l(this,this.configStemDeleteHandler),
            this._configStem.addEventListener(c.UPDATE, this._configStemUpdateHandlerDelegate),
            this._configStem.addEventListener(c.DELETE, this._configStemDeleteHandlerDelegate),
            this.configStemChanged(this._configStem.data),
            this._arePropertiesInitialised = !0,
            this.dispatchEvent(new e.PushedConfigPropertyChangeEvent(e.PushedConfigPropertyChangeEvent.PROPERTIES_INITIALISED)),
            this.addEventListener("AD", new l(this,function(e) {
                return t(i.getAttributeValue("AD"))
            }
            )),
            this.getAttributeValue("AD") && t(this.getAttributeValue("AD")))
        }
        ,
        i.prototype.updateProperties = function(t, n) {
            var i, r, s, a, c, l, u, d, h, p, _, g, f;
            "IF"in t && (i = "1" === this._configStem.data.IF,
            this._isInPlayDataAvailable !== i && (this._isInPlayDataAvailable = i,
            n && this.dispatchEvent(new e.PushedConfigPropertyChangeEvent(e.PushedConfigPropertyChangeEvent.IS_INPLAY_AVAILABLE)))),
            "CB"in t && (r = "0" === this._configStem.data.CB,
            this._isMyBetsSystemEnabled !== r && (this._isMyBetsSystemEnabled = r,
            n && this.dispatchEvent(new e.PushedConfigPropertyChangeEvent(e.PushedConfigPropertyChangeEvent.IS_MYBETS_SYSTEM_ENABLED)))),
            "CP"in t && (s = "0" === this._configStem.data.CP,
            this._isCloseBetPullPresentationEnabled !== s && (this._isCloseBetPullPresentationEnabled = s,
            this.dispatchEvent(new e.PushedConfigPropertyChangeEvent(e.PushedConfigPropertyChangeEvent.IS_CLOSE_BETS_PULL_DELIVERY_AVAILABLE)))),
            "OP"in t && (a = "0" === this._configStem.data.OP,
            this._isOpenBetsPullDeliveryAvailable !== a && (this._isOpenBetsPullDeliveryAvailable = a,
            n && this.dispatchEvent(new e.PushedConfigPropertyChangeEvent(e.PushedConfigPropertyChangeEvent.IS_OPEN_BETS_PULL_DELIVERY_AVAILABLE)))),
            "FC"in t && (this.freeBetCountries = this._configStem.data.FC.split(","),
            n && this.dispatchEvent(new e.PushedConfigPropertyChangeEvent(e.PushedConfigPropertyChangeEvent.FREE_BET_COUNTRIES_UPDATED))),
            c = this._isMyBetsSystemEnabled && this._isOpenBetsPullDeliveryAvailable,
            this._isMyBetsSiteFeatureAvailable !== c && (this._isMyBetsSiteFeatureAvailable = c,
            n && this.dispatchEvent(new e.PushedConfigPropertyChangeEvent(e.PushedConfigPropertyChangeEvent.IS_MYBETS_SITE_FEATURE_AVAILABLE))),
            this.betCallTwilioDisabledAttribute in t && (l = "1" != this._configStem.data[this.betCallTwilioDisabledAttribute],
            this._isBetCallTwilioAvailable !== l && (this._isBetCallTwilioAvailable = l,
            this.dispatchEvent(new e.PushedConfigPropertyChangeEvent(e.PushedConfigPropertyChangeEvent.IS_BET_CALL_TWILIO_AVAILABLE)))),
            this.betCallDisabledAttribute in t && (u = "1" != this._configStem.data[this.betCallDisabledAttribute],
            this._isBetCallAvailable !== u && (this._isBetCallAvailable = u,
            this.dispatchEvent(new e.PushedConfigPropertyChangeEvent(e.PushedConfigPropertyChangeEvent.IS_BET_CALL_AVAILABLE)))),
            this.ausMultiplesDisabledAttribute in t && (d = "1" != this._configStem.data[this.ausMultiplesDisabledAttribute],
            this._isAusMultiplesAvailable !== d && (this._isAusMultiplesAvailable = d,
            this.dispatchEvent(new e.PushedConfigPropertyChangeEvent(e.PushedConfigPropertyChangeEvent.IS_AUS_MULTIPLES_AVAILABLE)))),
            this.settledBetsDisabledAttribute in t && (h = "1" != this._configStem.data[this.settledBetsDisabledAttribute],
            this._settledBetsEnabled !== h && (this._settledBetsEnabled = h,
            this.dispatchEvent(new e.PushedConfigPropertyChangeEvent(e.PushedConfigPropertyChangeEvent.IS_SETTLED_BETS_FEATURE_AVAILABLE)))),
            this.pushBalanceEnabledAttribute in t && (p = "1" == this._configStem.data[this.pushBalanceEnabledAttribute] && this._pushConnected,
            this._isPushBalanceEnabled !== p && (this._isPushBalanceEnabled = p,
            n && this.dispatchEvent(new e.PushedConfigPropertyChangeEvent(e.PushedConfigPropertyChangeEvent.PUSH_BALANCE_ENABLED_AVAILABLE)))),
            "EE"in t && (_ = "1" !== this._configStem.data.EE,
            this._isEditBetsEnabled !== _ && (this._isEditBetsEnabled = _,
            this.dispatchEvent(new e.PushedConfigPropertyChangeEvent(e.PushedConfigPropertyChangeEvent.IS_EDIT_BETS_FEATURE_AVAILABLE)))),
            this.complexMultiplesEnabledAttribute in t && (g = t[this.complexMultiplesEnabledAttribute] && "1" !== t[this.complexMultiplesEnabledAttribute],
            this.editBetsComplexMultiplesEnabled !== g && (this.editBetsComplexMultiplesEnabled = g,
            this.dispatchEvent(new e.PushedConfigPropertyChangeEvent(e.PushedConfigPropertyChangeEvent.IS_EDIT_BETS_COMPLEX_MULTIPLES_FEATURE_AVAILABLE)))),
            "PF"in t && (f = "1" === this._configStem.data.PF,
            this.psqfV4Enabled !== f && (this.psqfV4Enabled = f,
            this.dispatchEvent(new e.PushedConfigPropertyChangeEvent(e.PushedConfigPropertyChangeEvent.PSQFV4_AVAILABLE)))),
            this.psqfV4Enabled && (o.MinOdds = 0)
        }
        ,
        i.prototype.configStemUpdateHandler = function(e) {
            this.configStemChanged(e.data)
        }
        ,
        i.prototype.configStemChanged = function(e) {
            this.updateProperties(e, !0);
            for (var t in e)
                this.dispatchEvent(new s(t))
        }
        ,
        i.prototype.configStemDeleteHandler = function() {
            this._configStem && (this._configStem.removeEventListener(c.UPDATE, this._configStemUpdateHandlerDelegate),
            this._configStem.removeEventListener(c.DELETE, this._configStemDeleteHandlerDelegate),
            this._configStem = null)
        }
        ,
        i.prototype.pushDisconnectedHandler = function() {
            if (this._pushConnected && (this._pushConnected = !1,
            this._configStem)) {
                var e = {};
                e[this.pushBalanceEnabledAttribute] = "0",
                this.updateProperties(e, !0)
            }
        }
        ,
        i.prototype.pushConnectedHandler = function() {
            if (!this._pushConnected && (this._pushConnected = !0,
            this._configStem)) {
                var e = {};
                e[this.pushBalanceEnabledAttribute] = "1",
                this.updateProperties(e, !0)
            }
        }
        ,
        i.USER_CONFIG_SUBSCRIPTION_TOPIC = "CONFIG_{0}_{1}",
        i
    }
    )(r),
    e.PushedConfigManager = i
}
)(ns_gen5_config || (ns_gen5_config = {})),
(function(e) {
    var t = (function() {
        function e() {}
        return e.prototype.setConnectionDetails = function(e) {
            this.connectionDetails = e
        }
        ,
        e.prototype.getConnectionDetails = function() {
            return this.connectionDetails
        }
        ,
        e.prototype.setPrivateConnectionDetails = function(e) {
            this.privateConnectionDetails = e
        }
        ,
        e.prototype.getPrivateConnectionDetails = function() {
            return this.privateConnectionDetails
        }
        ,
        e.prototype.fallbackConnectionEnabled = function() {
            return !1
        }
        ,
        e.prototype.hasSessionExpired = function() {
            return !1
        }
        ,
        e
    }
    )();
    e.ApplicationConfig = t
}
)(ns_gen5_config || (ns_gen5_config = {})),
(function(e) {}
)(ns_gen5_events || (ns_gen5_events = {})),
(function(e) {
    var t = (function() {
        function e(e) {
            this._element = this._active_element = document.createTextNode(e || ""),
            this._text = e || null
        }
        return e.prototype.toString = function() {
            return "[TextNode text=" + this._text + "]"
        }
        ,
        e.prototype.setText = function(e) {
            return this._text = this._element.data = e
        }
        ,
        e.prototype.getText = function() {
            return this._text
        }
        ,
        e.prototype.getElement = function() {
            return this._element
        }
        ,
        e.Wrapper = function(e) {
            this._element = e,
            this._text = this._element.data || null
        }
        ,
        e.SInit = (function() {
            e.prototype.parent = null,
            e.prototype._element = null,
            e.prototype._active_element = null,
            e.prototype._text = null,
            e.Wrapper.prototype = new e
        }
        )(),
        e
    }
    )();
    e.TextNode = t
}
)(ns_gen5_ui || (ns_gen5_ui = {})),
(function(e) {
    var t = (function() {
        function t(e, t) {
            var n = this;
            this.element = e,
            this.enableFastClick = t,
            this._callback_clickHandler = function(e) {
                return n._clickHandler(e)
            }
            ,
            this._callback_touchStartHandler = function(e) {
                return n._touchStartHandler(e)
            }
        }
        return t.prototype.activate = function() {
            var n = this.element instanceof e.DomElement ? this.element.getElement() : this.element;
            n.addEventListener("click", this._callback_clickHandler),
            t.IS_CHROME && n.addEventListener("touchstart", this._callback_touchStartHandler),
            this.enableFastClick && (this._fastClick = FastClick.attach(n))
        }
        ,
        t.prototype.release = function() {
            this._fastClick && (this._fastClick.destroy(),
            this._fastClick = null);
            var n = this.element instanceof e.DomElement ? this.element.getElement() : this.element;
            n.removeEventListener("click", this._callback_clickHandler),
            t.IS_CHROME && n.removeEventListener("touchstart", this._callback_touchStartHandler)
        }
        ,
        t.prototype._touchStartHandler = function(e) {
            e ? this._touchElement = e.target : this._touchElement = null
        }
        ,
        t.prototype._clickHandler = function(e) {
            var n, i = e || window.event;
            if (i.target) {
                for (n = i.target,
                this._touchElement && t.IS_CHROME && (n = this._touchElement,
                this._touchElement = null); n; ) {
                    if (n.wrapper && n.wrapper.clickHandler) {
                        try {
                            n.wrapper.clickHandler(i)
                        } catch (o) {
                            ErrorReporter.Trace(this, o)
                        }
                        break
                    }
                    n = n.parentNode
                }
                Locator.validationManager.processValidationCycleNow()
            }
        }
        ,
        t.IS_CHROME = !!/chrome/.exec(navigator.userAgent.toLowerCase()),
        t
    }
    )();
    e.PointerProcessor = t
}
)(ns_gen5_ui || (ns_gen5_ui = {})),
(function(e) {
    var t = (function(e) {
        function t() {
            return null !== e && e.apply(this, arguments) || this
        }
        return __extends(t, e),
        t.prototype.setSVGData = function(e) {
            t.RequiresAbsolutePaths && (e = e.replace(/url\(#/g, "url(" + window.location.href.replace(window.location.hash, "") + "#")),
            this._element.innerHTML = e
        }
        ,
        t.RequiresAbsolutePaths = !0,
        t
    }
    )(e.Component);
    e.SVGWrapperComponent = t
}
)(ns_gen5_ui || (ns_gen5_ui = {})),
(function(e) {
    var t = (function(e) {
        function t(t) {
            return e.call(this, t) || this
        }
        return __extends(t, e),
        t.prototype.commitStyles = function() {
            var e, t = "";
            for (e in this._styleList)
                t += e + " ";
            this._element.setAttribute("class", t)
        }
        ,
        t.prototype.createElement = function(e) {
            return document.createElementNS("http://www.w3.org/2000/svg", e)
        }
        ,
        t.prototype.setViewbox = function(e) {
            this._element.setAttribute("viewBox", e)
        }
        ,
        t.prototype.createSVGPoint = function() {
            return this._element.createSVGPoint()
        }
        ,
        t
    }
    )(e.Component);
    e.SVG = t
}
)(ns_gen5_ui || (ns_gen5_ui = {})),
(function(e) {
    var t = (function(e) {
        function t(t) {
            return e.call(this, t) || this
        }
        return __extends(t, e),
        t.prototype.addPoint = function(e) {
            var t = this.cordinateContext ? this.cordinateContext.createSVGPoint() : e;
            this.cordinateContext && (t.x = e.x,
            t.y = e.y),
            this._element.points.appendItem(t)
        }
        ,
        t.prototype.removePoint = function(e) {
            this._element.points.removeItem(e)
        }
        ,
        t.prototype.pointCount = function() {
            return this._element.points.numberOfItems
        }
        ,
        t.prototype.clearPoints = function() {
            this._element.points.clear()
        }
        ,
        t.prototype.setStroke = function(e) {
            this._element.setAttribute("stroke", e)
        }
        ,
        t.prototype.setStrokeWidth = function(e) {
            this._element.setAttribute("stroke-width", e)
        }
        ,
        t.prototype.setFill = function(e) {
            this._element.setAttribute("fill", e)
        }
        ,
        t.prototype.setFillOpacity = function(e) {
            this._element.setAttribute("fill-opacity", e)
        }
        ,
        t.SInit = (function() {
            t.prototype.cordinateContext = null
        }
        )(),
        t
    }
    )(e.SVG);
    e.SVGPoly = t
}
)(ns_gen5_ui || (ns_gen5_ui = {})),
(function(e) {
    var t = (function(e) {
        function t() {
            return e.call(this, "stop") || this
        }
        return __extends(t, e),
        t.prototype.setOffset = function(e) {
            this._element.setAttribute("offset", e)
        }
        ,
        t.prototype.setOpacity = function(e) {
            this._element.setAttribute("stop-opacity", e)
        }
        ,
        t.prototype.setColor = function(e) {
            this._element.setAttribute("stop-color", e)
        }
        ,
        t
    }
    )(e.SVG);
    e.SVGStop = t
}
)(ns_gen5_ui || (ns_gen5_ui = {})),
(function(e) {
    var t = (function(e) {
        function t(t) {
            var n = e.call(this, "linearGradient") || this;
            return n.id = t,
            n.svgId = t,
            n
        }
        return __extends(t, e),
        t.prototype.initialize = function() {
            this._element.setAttribute("id", this.id),
            e.prototype.initialize.call(this)
        }
        ,
        t.prototype.setX1 = function(e) {
            this._element.setAttribute("x1", e)
        }
        ,
        t.prototype.setX2 = function(e) {
            this._element.setAttribute("x2", e)
        }
        ,
        t.prototype.setY1 = function(e) {
            this._element.setAttribute("y1", e)
        }
        ,
        t.prototype.setY2 = function(e) {
            this._element.setAttribute("y2", e)
        }
        ,
        t.prototype.getUrl = function() {
            var e;
            return e = t.RequiresAbsolutePaths ? "url(" + window.location.href.replace(window.location.hash, "#") + this.svgId + ")" : "url(#" + this.svgId + ")"
        }
        ,
        t.RequiresAbsolutePaths = !0,
        t
    }
    )(e.SVG);
    e.SVGLinearGradient = t
}
)(ns_gen5_ui || (ns_gen5_ui = {})),
(function(e) {
    var t, n = (function(e) {
        function n(n, i) {
            var o = this;
            return t = i.getElement(),
            o = e.call(this, n) || this,
            t = null,
            1 != o._stopInitInvalidation && (Locator.validationManager.queueForValidation(o),
            o._propertiesInvalidated = !0),
            o
        }
        return __extends(n, e),
        n.prototype.createElement = function(e) {
            var n = t.querySelector("#" + e);
            return $assert && $assert(!n.wrapper, "The SVG element has already been wrapped."),
            n
        }
        ,
        n
    }
    )(e.SVG);
    e.SVGWrapper = n
}
)(ns_gen5_ui || (ns_gen5_ui = {})),
(function(e) {
    function t(e) {
        return function(t) {
            return e + "  " + (t.moduleName || "") + ":" + (t.elementName || "")
        }
    }
    function n(e) {
        var t = "Module Load Error " + e;
        ErrorReporter.Trace("ModuleContainer:::", t),
        $logFmt(t, "font-weight:bold; color:#FF0000;")
    }
    var i, o = t("0x01"), r = ns_gen5_util.Delegate, s = ns_gen5_util.Config, a = ns_gen5_events.ModuleEvent, c = ns_gen5_util.InfoReporter, l = ns_gen5_util.InfoReporterGroups, u = (function() {
        function e() {
            this.resourcesNeeded = 1,
            this.resourcesLoaded = 0
        }
        return e.prototype.isFullyLoaded = function() {
            return this.resourcesLoaded >= this.resourcesNeeded
        }
        ,
        e
    }
    )();
    e.ModuleResourcePackage = u,
    i = (function(t) {
        function i() {
            var e = t.call(this) || this;
            return e.invokeQueue = [],
            e
        }
        return __extends(i, t),
        i.LoadModule = function(e, t) {
            var n, o, r, s = i.ModuleCache[e];
            s && s.definition ? (n = s.isFullyLoaded(),
            Locator.validationManager.callLater((function() {
                t.moduleAvailableHandler(s),
                n && t.moduleReadyHandler(s)
            }
            ))) : s ? (o = i.PendingList[e],
            o[o.length] = t) : (s = i.ModuleCache[e] = new u,
            r = function() {
                var t, n, o, r;
                if (s.isFullyLoaded() && (t = i.PendingList[e])) {
                    for (n = 0,
                    o = t; n < o.length; n++)
                        r = o[n],
                        r.moduleReadyHandler(s);
                    delete i.PendingList[e]
                }
            }
            ,
            i.PendingList[e] = [t],
            i.ModuleLoader.loadModule(e, s, r))
        }
        ,
        i.RegisterModule = function(e, t) {
            var n, o, r, s, a = i.ModuleCache[e];
            if (a || (a = i.ModuleCache[e] = new u),
            a.resourcesLoaded++,
            $assert && $assert(!a.definition, "Duplicate module definition loaded - " + e),
            a.definition = t,
            n = i.PendingList[e])
                for (o = 0,
                r = n; o < r.length; o++)
                    s = r[o],
                    s.moduleAvailableHandler(a)
        }
        ,
        i.RegisterLanguage = function(e, t) {
            var n = i.ModuleCache[e];
            n.resourcesLoaded++,
            n.languageDefinition = t
        }
        ,
        i.RegisterConfig = function(e, t) {
            var n = i.ModuleCache[e];
            n.config = t
        }
        ,
        i.prototype.load = function(t) {
            var n, o, s, a;
            this.moduleName = t,
            n = Locator.manifestManager.getLocaleNames(t),
            n && n.length && (o = boot.getLocale(),
            -1 === n.indexOf(o) && (o = "Default"),
            this.localeModule = new e.ModuleContainer,
            this.localeModule.load(t + "-" + o)),
            Locator.manifestManager.getApp(t) && boot.isAppRequest && (this.appModule = new e.ModuleContainer,
            this.appModule.load(t + "-App")),
            i.LoadModule(t, this),
            this.defaultApiLocation = this.defaultApiLocation || Locator.manifestManager.getDefaultApiLocation(t),
            s = Locator.manifestManager.getDefaultTopic(t),
            null !== s && (s && (a = Locator.user,
            s = s.replace("{L}", a.languageId),
            s = s.replace("{Z}", a.zoneId),
            s = s.replace("{C}", "" + a.customerType),
            this.defaultTopic = s),
            this.defaultTopic && (this.defaultApiLocation ? Locator.subscriptionManager.subscribe(this.defaultTopic, new r(this,this.defaultTopicSubscriptionHandler), null, this.defaultApiLocation) : Locator.subscriptionManager.subscribe(this.defaultTopic, new r(this,this.defaultTopicSubscriptionHandler))))
        }
        ,
        i.prototype.defaultTopicSubscriptionHandler = function(e) {
            var t = Locator.treeLookup.getReference(e.type);
            this.defaultStem = t,
            this.storedResourcePackage && this.moduleReadyHandler(this.storedResourcePackage)
        }
        ,
        i.prototype.dispose = function() {
            if (this._module) {
                try {
                    this._module.dispose()
                } catch (e) {
                    ErrorReporter.Trace(this, e)
                }
                $assert && $assert(this._module.disposed, "dispose() has been called but module isn't reporting as being disposed - " + this._module),
                this._module.disposed || c.Trace(l.MODULE_LOAD_ENTRY, this._module + " did not dispose correctly"),
                this._module = null
            }
            this.disposed = !0
        }
        ,
        i.prototype.getModule = function() {
            return this._module
        }
        ,
        i.prototype.invoke = function(e) {
            var t = this;
            this.moduleReady ? Locator.validationManager.callLater((function() {
                return e(t._module)
            }
            )) : this.invokeQueue.push(e)
        }
        ,
        i.prototype.moduleAvailableHandler = function(t) {
            var n, i = this._module = new t.definition;
            i.initObject = this.initObject,
            e.MediaTypeIdLookup && (n = -1 === this.moduleName.indexOf("-") ? this.moduleName : this.moduleName.substring(0, this.moduleName.indexOf("-")),
            i.mediaTypeId = e.MediaTypeIdLookup[n],
            $assert && $assert(void 0 !== i.mediaTypeId, "moduleAvailableHandler() is looking for the media type of module '" + this.moduleName + "' which is not defined in MediaTypeIdLookup"));
            try {
                this.appendChild(i)
            } catch (o) {
                ErrorReporter.Trace(this, o)
            }
        }
        ,
        i.prototype.moduleReadyHandler = function(e) {
            var t, i, r, u;
            if (!this.disposed) {
                if (this.defaultTopic && !this.defaultStem)
                    return void (this.storedResourcePackage = e);
                if (this.defaultTopic && !this._module)
                    return void n(o(this));
                this.storedResourcePackage = null,
                t = this._module.languageDefinition = ns_gen5_util.Singleton.getInstance(ns_gen5_language.Resource, this._module),
                t.mlJson = e.languageDefinition,
                e.config && (this._module.config = new s,
                this._module.config.setConfigJSON(e.config)),
                this.defaultStem && (this._module.defaultStem = this.defaultStem),
                this.defaultApiLocation && (this._module.defaultApiLocation = this.defaultApiLocation);
                try {
                    this._module.moduleReady(),
                    this._module.bubbleEvent(new a(a.MODULE_READY)),
                    this.moduleReady = !0
                } catch (d) {
                    ErrorReporter.Trace(this, d)
                }
                for ($assert && $assert(this._module.ready, "moduleReady() has been called but module isn't reporting as ready - " + this._module),
                this._module.ready || c.Trace(l.MODULE_LOAD_ENTRY, this._module + " did not ready-up correctly"),
                i = 0,
                r = this.invokeQueue; i < r.length; i++) {
                    u = r[i];
                    try {
                        u(this._module)
                    } catch (d) {
                        ErrorReporter.Trace(this, d)
                    }
                }
                this.invokeQueue.length = 0
            }
        }
        ,
        i.ModuleCache = {},
        i.PendingList = {},
        i.ModuleLoader = new ns_gen5_net.ModuleLoaderDefault,
        i.SInit = (function() {
            i.prototype._module = null,
            i.prototype.defaultStem = null,
            i.prototype.moduleReady = !1,
            i.prototype.storedResourcePackage = null,
            i.prototype.disposed = !1,
            i.prototype.initObject = null,
            i.prototype.defaultTopic = null,
            i.prototype.elementName = null,
            i.prototype.moduleName = null,
            i.prototype.defaultApiLocation = null
        }
        )(),
        i
    }
    )(e.Component),
    e.ModuleContainerAs = i,
    e.ModuleContainer = i
}
)(ns_gen5_ui || (ns_gen5_ui = {})),
(function(e) {
    var t = e.DomElement
      , n = (function(e) {
        function n() {
            var t = null !== e && e.apply(this, arguments) || this;
            return t.spinnerStyle = "g5-Spinner_Image",
            t.defaultStyle = "g5-Spinner",
            t
        }
        return __extends(n, e),
        n.prototype.createChildren = function() {
            this.addStyle(this.defaultStyle),
            this.addStyle("g5-Spinner_FadeIn");
            var e = new t;
            e.setAttribute("class", this.spinnerStyle),
            this.appendChild(e),
            this.validateNow()
        }
        ,
        n.prototype.remove = function() {
            var e, t = this, n = this._element;
            this.removeStyle("g5-Spinner_FadeIn"),
            this.addStyle("g5-Spinner_FadeOut"),
            e = function() {
                t.removeStyle("g5-Spinner_FadeOut"),
                n.parentElement.removeChild(n),
                n.removeEventListener(ANIMATION_END, e)
            }
            ,
            this._element.addEventListener && this._element.addEventListener(ANIMATION_END, e, !1),
            this.validateNow()
        }
        ,
        n
    }
    )(e.Component);
    e.Spinner = n
}
)(ns_gen5_ui || (ns_gen5_ui = {})),
(function(e) {
    function t(e, t) {
        if (!t)
            return !1;
        for (; t.parent; ) {
            if (t.parent == e || t == e)
                return !0;
            t = t.parent
        }
        return !1
    }
    var n = ns_gen5_ui.Component
      , i = (function() {
        function e() {}
        return e.Register = function(t) {
            e.Root = t
        }
        ,
        e.AddPopup = function(t, n, i, o) {
            void 0 === n && (n = !0),
            void 0 === i && (i = e.Root),
            void 0 === o && (o = !0),
            $assert && $assert(e.Root, "Root is not specified"),
            n ? (e.PopupHasOverlay = !0,
            e.ShowOverlay(!0, e.Root)) : e.PopupHasOverlay && (e.PopupHasOverlay = !1,
            e.ShowOverlay(!1, e.Root)),
            e.PopupList.push(t),
            i.appendChildAt(t, 0),
            o && (e.SupressClickTarget = t)
        }
        ,
        e.RemovePopup = function(t) {
            $assert && $assert(e.PopupList.indexOf(t) > -1, "Popup does not exist in the manager");
            var n = e.PopupList.indexOf(t);
            n > -1 && (t.parent.removeChild(t),
            t.dispose(),
            e.PopupList.splice(n, 1),
            e.PopupHasOverlay && (e.PopupHasOverlay = !1,
            e.ShowOverlay(!1, e.Root)))
        }
        ,
        e.HasPopup = function() {
            return this.PopupList.length > 0
        }
        ,
        e.ContainsPopup = function(n) {
            return t(e.Root, n)
        }
        ,
        e.HandleHover = function(t) {
            for (var n = 0; n < e.RegisteredDelegates.length; n++)
                e.RegisteredDelegates[n].overlayHoverHandler && e.RegisteredDelegates[n].overlayHoverHandler(t)
        }
        ,
        e.HandleTouchMove = function(e) {
            e.preventDefault()
        }
        ,
        e.HandleClick = function(n) {
            var i, o;
            if (n = n || window.event,
            n.target) {
                for (o = 0; o < e.RegisteredDelegates.length; o++)
                    i = e.RegisteredDelegates[o],
                    t(i, n.target.wrapper) || i == e.SupressClickTarget || i.clickOutsideHandler(n);
                e.SupressClickTarget = null
            }
        }
        ,
        e.AddDelegate = function(t) {
            var n = e.RegisteredDelegates.indexOf(t);
            $assert && $assert(-1 === n, "The delegate has already been added."),
            -1 === n && e.RegisteredDelegates.push(t)
        }
        ,
        e.RemoveDelegate = function(t) {
            var n = e.RegisteredDelegates.indexOf(t);
            $assert && $assert(n > -1, "The delegate is not added."),
            n > -1 && e.RegisteredDelegates.splice(n, 1)
        }
        ,
        e.ShowOverlay = function(t, n) {
            var i, o;
            void 0 === n && (n = null),
            i = e.OverlayComponent,
            i.initialized || i.initialize(),
            t ? (e.OverlayCount > 0 && (e.RemoveOverlay(i),
            e.OverlayCount--),
            null != n ? n.appendChild(i) : (o = document.getElementsByTagName("body"),
            o && o[0].appendChild(i.getElement())),
            e.OverlayCount++) : e.OverlayCount > 0 && (e.RemoveOverlay(i),
            e.OverlayCount--),
            i.setVisible(e.OverlayCount > 0),
            Locator.validationManager.queueForValidation(i)
        }
        ,
        e.RemoveOverlay = function(e) {
            e.parent ? e.parent.removeChild(e) : e.getElement().parentElement.removeChild(e.getElement())
        }
        ,
        e.RegisteredDelegates = [],
        e.OverlayCount = 0,
        e.PopupList = [],
        e.CreateOverlay = (function() {
            var t, i, o = new n;
            o.addStyle("g5-PopupManager_ClickMask"),
            o.setVisible(!1),
            t = document.getElementsByTagName("body")[0],
            t && (t.appendChild(o.getElement()),
            t.addEventListener("click", e.HandleClick),
            t.addEventListener("touchend", e.HandleClick)),
            i = o.getElement(),
            i.addEventListener("mouseover", e.HandleHover),
            i.addEventListener("mousemove", e.HandleHover),
            i.addEventListener("touchmove", e.HandleTouchMove),
            e.OverlayComponent = o
        }
        )(),
        e
    }
    )();
    e.PopupManager = i
}
)(ns_gen5_ui_managers || (ns_gen5_ui_managers = {})),
(function(e) {
    function t() {
        var e, t;
        "undefined" != typeof l.currentApplication && (m = document.documentElement.clientWidth || window.innerWidth || document.body.clientWidth,
        v = document.documentElement.clientHeight || window.innerHeight || document.body.clientHeight,
        l.currentApplication.width = m,
        e = m < l.widthThreshold ? 0 : 1,
        e != l.currentApplication.widthState && (l.currentApplication.removeStyle(f + l.currentApplication.widthState),
        l.currentApplication.widthState = e,
        r.dispatchEvent(new u(u.WIDTH_STATE_CHANGED,m)),
        Locator.validationManager.processValidationCycleNow(),
        l.currentApplication.overwriteStyle(f + l.currentApplication.widthState, f + e)),
        e = m < l.viewWidthThreshold ? 0 : 1,
        e != l.currentApplication.viewState && (l.currentApplication.removeStyle(E + l.currentApplication.viewState),
        l.currentApplication.viewState = e,
        r.dispatchEvent(new u(u.VIEW_STATE_CHANGED)),
        Locator.validationManager.processValidationCycleNow(),
        l.currentApplication.overwriteStyle(E + l.currentApplication.viewState, E + e)),
        l.currentApplication.height !== v && (l.currentApplication.height = v,
        r.dispatchEvent(new u(u.HEIGHT_CHANGED))),
        l.currentApplication.dispatchEvent(new u(u.WIDTH_CHANGED,m)),
        t = v,
        t && (t -= l.heightOffset,
        l.currentApplication.getElement().style.minHeight = t + "px"))
    }
    function n(e) {
        window.removeEventListener("orientationchanged", n),
        window.removeEventListener("resize", n),
        window.addEventListener(e.type, t),
        t()
    }
    function i() {
        r && !r.preventUnloading && (r.preventUnloading = !1,
        r.dispatchEvent(new u(u.UNLOADING)))
    }
    function o(e) {
        r && (e = e || window.event,
        "focus" == e.type || "focusin" == e.type ? r.suspended = !1 : "blur" == e.type || "focusout" == e.type ? r.suspended = !0 : this[a] ? r.suspended = !0 : r.suspended = !1,
        r.suspended ? r.dispatchEvent(new u(u.FOCUS_OUT)) : r.dispatchEvent(new u(u.FOCUS_IN)))
    }
    var r, s, a, c, l, u = ns_gen5_events.ApplicationEvent, d = ns_gen5_util.Delegate, h = e.Spinner, p = ns_gen5_data.StreamDataProcessorEvent, _ = e.PointerProcessor, g = !1, f = "widthState", E = "viewState", m = 0, v = 0, S = 0, C = 0;
    window.addEventListener("orientationchanged", n),
    window.addEventListener("resize", n),
    window.addEventListener("beforeunload", i),
    a = "",
    c = {
        hidden: "visibilitychange",
        mozHidden: "mozvisibilitychange",
        webkitHidden: "webkitvisibilitychange",
        msHidden: "msvisibilitychange"
    };
    for (a in c)
        if (a in document) {
            s = c[a];
            break
        }
    s ? (document.removeEventListener(s, o),
    document.addEventListener(s, o)) : "onfocusin"in document ? document.onfocusin = document.onfocusout = o : window.onfocus = window.onblur = o,
    l = (function(n) {
        function i(o) {
            var s = n.call(this) || this;
            return s.applyPointerProcessor = !0,
            s._loadingTimer = null,
            s._spinner = null,
            s.height = 0,
            s.width = 0,
            s.widthState = -1,
            s.viewState = -1,
            s.suspended = !1,
            s.preventUnloading = !1,
            s.connected = !1,
            e.Component.Wrapper.call(s, o),
            s.addStyle("g5-Application"),
            s._delegate_loadingHandler = new d(s,s.loadingHandler),
            s._delegate_loadingCompleteHandler = new d(s,s.loadingCompleteHandler),
            s._delegate_showStreamingHandler = new d(s,s._showStreamingHandler),
            s._delegate_connectedHandler = new d(s,s._connectedHandler),
            s._delegate_connectionFailureHandler = new d(s,s._connectionFailedHandler),
            s._addSpinnerCallback = function() {
                return s.addSpinner()
            }
            ,
            Locator.subscriptionManager._streamDataProcessor.addEventListener(p.CONNECTED, s._delegate_connectedHandler),
            Locator.subscriptionManager._streamDataProcessor.addEventListener(p.CONNECTION_FAILED, s._delegate_connectionFailureHandler),
            r = i.currentApplication = s,
            m = window.innerWidth || document.body.clientWidth,
            v = window.innerHeight || document.body.clientHeight,
            "screen"in window && (S = window.screen.width,
            C = window.screen.height),
            s.width = m,
            t(),
            s
        }
        return __extends(i, n),
        i.prototype.toString = function() {
            return "[Application]"
        }
        ,
        i.prototype.enableUI = function() {
            g || (g = !0,
            this.applyPointerProcessor && (this.pointerProcessor = new _(this),
            this.pointerProcessor.activate()),
            this.addEventListener(u.LOADING, this._delegate_loadingHandler),
            this.addEventListener(u.LOADING_COMPLETE, this._delegate_loadingCompleteHandler),
            this.addEventListener("showStreaming", this._delegate_showStreamingHandler))
        }
        ,
        i.prototype.disableUI = function() {
            g && (g = !1,
            this._spinner && (this._spinner.remove(),
            this._spinner = null),
            this.removeEventListener(u.LOADING, this._delegate_loadingHandler),
            this.removeEventListener(u.LOADING_COMPLETE, this._delegate_loadingCompleteHandler),
            this.removeEventListener("showStreaming", this._delegate_showStreamingHandler),
            this.pointerProcessor && (this.pointerProcessor.release(),
            this.pointerProcessor = null))
        }
        ,
        i.prototype.loadingHandler = function() {
            g && !this._loadingTimer && (this._loadingTimer = setTimeout(this._addSpinnerCallback, i.loadingTimeout))
        }
        ,
        i.prototype.addSpinner = function() {
            this._spinner = new h;
            var e = this.getElement();
            e.appendChild(this._spinner.getElement()),
            this._spinner.initialize()
        }
        ,
        i.prototype.loadingCompleteHandler = function() {
            this._loadingTimer && (clearTimeout(this._loadingTimer),
            this._loadingTimer = null),
            this._spinner && (this._spinner.remove(),
            this._spinner = null)
        }
        ,
        i.prototype._showStreamingHandler = function() {
            this.preventUnloading = !0
        }
        ,
        i.prototype._connectedHandler = function() {
            this.connected = !0
        }
        ,
        i.prototype._connectionFailedHandler = function() {
            this.connected = !1
        }
        ,
        i.prototype.getDeviceWidth = function() {
            return m
        }
        ,
        i.prototype.getDeviceHeight = function() {
            return v
        }
        ,
        i.prototype.getScreenWidth = function() {
            return S
        }
        ,
        i.prototype.getScreenHeight = function() {
            return C
        }
        ,
        i.loadingTimeout = 200,
        i.overflowLayout = !1,
        i.widthThreshold = 550,
        i.viewWidthThreshold = 950,
        i.heightOffset = 89,
        i
    }
    )(e.Component),
    e.Application = l
}
)(ns_gen5_ui || (ns_gen5_ui = {})),
(function(e) {
    var t = e.Component
      , n = (function(e) {
        function n(t) {
            return e.call(this, t) || this
        }
        return __extends(n, e),
        n.prototype.toString = function() {
            return "[ClosableContainer]"
        }
        ,
        n.prototype.createChildren = function() {
            this._button = new this._buttonClass(this._buttonTag),
            this._initAppendChildButton && this.appendChild(this._button),
            this._open && this.initializeContainer()
        }
        ,
        n.prototype.initializeContainer = function() {
            this._container || (this._container = new this._containerClass(this._containerTag),
            this._initAppendChildContainer && this.appendChild(this._container))
        }
        ,
        n.prototype.setOpen = function(e) {
            e != this._open && (this._open = e,
            this._container ? this._container.setVisible(this._open) : this.initializeContainer())
        }
        ,
        n.prototype.getOpen = function() {
            return this._open
        }
        ,
        n.prototype.clickHandler = function(e) {
            this.setOpen(!this._open)
        }
        ,
        n.SInit = (function() {
            n.prototype._button = null,
            n.prototype._buttonClass = t,
            n.prototype._container = null,
            n.prototype._containerClass = t,
            n.prototype._open = !1,
            n.prototype._initAppendChildButton = !0,
            n.prototype._initAppendChildContainer = !0,
            n.prototype._buttonTag = null,
            n.prototype._containerTag = null
        }
        )(),
        n
    }
    )(e.Component);
    e.ClosableContainer = n
}
)(ns_gen5_ui || (ns_gen5_ui = {})),
(function(e) {
    e.StemBaseMixin = (function() {
        function e() {
            this.stem && this.stem.addDelegate(this),
            this.___initialize && this.___initialize()
        }
        function t(e) {
            var n, i, o = e || this;
            if (o.detatchStem && o.detatchStem(),
            o.getFirstChild)
                for (n = o.getFirstChild(),
                i = void 0; n; )
                    i = n.wrapper,
                    n = n.nextSibling,
                    i && (i.recursiveDetatchStem ? i.recursiveDetatchStem() : t(i))
        }
        function n() {
            this.stem && (this.stem.removeDelegate(this),
            this.stem = null,
            this.validationState = 0,
            this.parent && this._active_element.parentNode && this.parent.removeChild(this))
        }
        function i(e, t) {}
        function o(e, t) {}
        function r(e) {
            this.detatchStem()
        }
        return function() {
            this.stem = null,
            this.___initialize = this.initialize,
            this.initialize = e,
            this.stemUpdateHandler = i,
            this.stemDeleteHandler = r,
            this.stemInsertHandler = o,
            this.detatchStem = n,
            this.recursiveDetatchStem = t
        }
    }
    )()
}
)(ns_gen5_ui || (ns_gen5_ui = {})),
(function(e) {}
)(ns_gen5_ui || (ns_gen5_ui = {})),
(function(e) {
    var t = (function(e) {
        function t(t) {
            return e.call(this, t) || this
        }
        return __extends(t, e),
        t.prototype.toString = function() {
            return "[ComponentStemBase]"
        }
        ,
        t.prototype.stemUpdateHandler = function(e, t) {}
        ,
        t.prototype.stemDeleteHandler = function(e) {}
        ,
        t.prototype.stemInsertHandler = function(e, t) {}
        ,
        t.prototype.detatchStem = function() {}
        ,
        t.prototype.recursiveDetatchStem = function() {}
        ,
        t
    }
    )(e.Component);
    e.ComponentStemBase = t,
    e.StemBaseMixin.call(t.prototype)
}
)(ns_gen5_ui || (ns_gen5_ui = {})),
(function(e) {
    var t = (function(e) {
        function t(t) {
            return e.call(this, t) || this
        }
        return __extends(t, e),
        t.prototype.toString = function() {
            return "[ClosableContainerStemBase]"
        }
        ,
        t.prototype.createChildren = function() {
            this._button = new this._buttonClass(this._buttonTag),
            this.buttonAcceptsStem && (this._button.stem = this.stem),
            this._initAppendChildButton && this.appendChild(this._button),
            this._open && this.initializeContainer()
        }
        ,
        t.prototype.initializeContainer = function() {
            this._container = new this._containerClass,
            this._container.stem = this.stem,
            this._initAppendChildContainer && this.appendChild(this._container)
        }
        ,
        t.prototype.stemUpdateHandler = function(e, t) {}
        ,
        t.prototype.stemDeleteHandler = function(e) {}
        ,
        t.prototype.stemInsertHandler = function(e, t) {}
        ,
        t.prototype.detatchStem = function() {}
        ,
        t.prototype.recursiveDetatchStem = function() {}
        ,
        t.SInit = (function() {
            t.prototype.buttonAcceptsStem = !1
        }
        )(),
        t
    }
    )(e.ClosableContainer);
    e.ClosableContainerStemBase = t,
    e.StemBaseMixin.call(t.prototype)
}
)(ns_gen5_ui || (ns_gen5_ui = {})),
(function(e) {
    function t(e) {
        return !!e.createChildInstance
    }
    var n = e.ComponentStemBase
      , i = (function(e) {
        function i(t) {
            return e.call(this, t) || this
        }
        return __extends(i, e),
        i.prototype.toString = function() {
            return "[GenericStemRenderer]"
        }
        ,
        i.prototype.createChildren = function() {
            var e, n, i, o, r, s, a, c, l;
            if (this.stem)
                if (e = this,
                n = this.stem.getChildren(),
                i = this.childType,
                t(e))
                    for (o = 0,
                    r = n; o < r.length; o++)
                        s = r[o],
                        a = e.createChildInstance(s),
                        a.stem = s,
                        this.appendChild(a);
                else
                    for (c = 0,
                    l = n; c < l.length; c++)
                        s = l[c],
                        a = new i,
                        a.stem = s,
                        this.appendChild(a)
        }
        ,
        i.prototype.appendChildAt = function(t, n) {
            return e.prototype.appendChildAt.call(this, t, n + this.baseIndex)
        }
        ,
        i.prototype.stemInsertHandler = function(e, n) {
            var i, o = n.data.OR, r = this, s = t(r) ? r.createChildInstance(n) : new this.childType;
            if (s.stem = n,
            o)
                try {
                    i = this._element.children[Number(o) + this.baseIndex],
                    i ? this.insertBefore(s, i) : this.appendChild(s)
                } catch (a) {
                    ErrorReporter.Trace(this, a),
                    this.appendChild(s)
                }
            else
                this.appendChild(s)
        }
        ,
        i.prototype.setStem = function(e) {
            var t = this;
            this.stem && this.recursiveDetatchStem(),
            this.stem = e,
            this.parent && this.stem && (this.stem.addDelegate(this),
            Locator.validationManager.callLater((function() {
                t.suspendElementFromDom(),
                t.createChildren(),
                Locator.validationManager.callPostValidation((function() {
                    return t.unsuspendElementFromDom()
                }
                ))
            }
            )))
        }
        ,
        i.SInit = (function() {
            i.prototype.childType = n,
            i.prototype.baseIndex = 0
        }
        )(),
        i
    }
    )(e.ComponentStemBase);
    e.GenericStemRenderer = i
}
)(ns_gen5_ui || (ns_gen5_ui = {})),
(function(e) {
    var t = (function(e) {
        function t() {
            var t = e.call(this, "input") || this;
            return t.passwordDisplay = !1,
            t._rendered = !1,
            t
        }
        return __extends(t, e),
        t.prototype.createChildren = function() {
            if (this.defaultValue && this.setValue(this.defaultValue),
            this.maxLength > 0 && this.setAttribute("maxlength", this.maxLength + ""),
            this.passwordDisplay)
                this.setAttribute("type", "password");
            else if (this.setAttribute("type", "text"),
            this._initialValue && "" != this._initialValue) {
                var e = this.getElement();
                e.value = this._initialValue
            }
            this._rendered = !0
        }
        ,
        t.prototype.setValue = function(e) {
            return this._rendered ? this.getElement().value = e : this._initialValue = e,
            e
        }
        ,
        t.prototype.getValue = function() {
            var e;
            return e = this._rendered ? this.getElement().value : this._initialValue
        }
        ,
        t
    }
    )(e.Component);
    e.TextInput = t
}
)(ns_gen5_ui || (ns_gen5_ui = {})),
(function(e) {
    var t = ns_gen5_ui.DomElement
      , n = ns_gen5_ui.Module
      , i = (function() {
        function e() {}
        return e.getInstance = function(i, o) {
            var r, s, a;
            if (e.ClassMap || (e.ClassMap = new Map,
            e.ModuleBank = new Map),
            o) {
                if (a = o instanceof t ? n.getRoot(o) : e.ModuleIDLookup[o],
                !a)
                    return null;
                r = e.ModuleBank.get(a),
                r || (r = new Map,
                e.ModuleBank.set(a, r))
            } else
                r = e.ClassMap;
            return s = r.get(i),
            s || (s = new i,
            r.set(i, s)),
            s
        }
        ,
        e.RemoveInstance = function(t) {
            e.ClassMap["delete"](t)
        }
        ,
        e.RemoveScope = function(t) {
            t instanceof n && delete e.ModuleIDLookup[t.uid],
            e.ModuleBank["delete"](t)
        }
        ,
        e.RegisterModule = function(t) {
            e.ModuleIDLookup[t.uid] || (e.ModuleIDLookup[t.uid] = t)
        }
        ,
        e.ModuleIDLookup = [],
        e
    }
    )();
    e.Singleton = i
}
)(ns_gen5_util || (ns_gen5_util = {})),
(function(e) {
    var t = (function(e) {
        function t(t) {
            return e.call(this, t) || this
        }
        return __extends(t, e),
        t.prototype.toString = function() {
            return "[WidthStateWatcherEvent]"
        }
        ,
        t.WIDTH_STATE_CHANGED = "widthStateChanged",
        t
    }
    )(ns_gen5_events.Event365);
    e.WidthStateWatcherEvent = t
}
)(ns_gen5_util || (ns_gen5_util = {})),
(function(e) {
    var t = ns_gen5_ui.Application
      , n = ns_gen5_events.ApplicationEvent
      , i = e.Delegate
      , o = e.WidthStateWatcherEvent
      , r = (function(e) {
        function r() {
            return e.call(this) || this
        }
        return __extends(r, e),
        r.prototype.toString = function() {
            return "[WidthStateWatcher]"
        }
        ,
        r.prototype.initialize = function() {
            var e, o, r, s, a;
            if (this._delegate_applicationWidthChangedHandler = new i(this,this._applicationWidthChangedHandler),
            this._applicationWidthChangedHandler(new n(n.WIDTH_CHANGED,t.currentApplication.width)),
            t.currentApplication.addEventListener(n.WIDTH_CHANGED, this._delegate_applicationWidthChangedHandler),
            $assert)
                for ($assert(this.thresholds, "Thresholds have not been set on this instance of " + this),
                e = this.thresholds,
                o = -1,
                r = e.length,
                s = 0; r > s; s++)
                    a = e[s],
                    $assert(a > o, "The thresholds list provided to this instance of " + this + " is not sequential."),
                    o = a;
            this.initialized = !0
        }
        ,
        r.prototype.dispose = function() {
            this._registeredDisplayElements = null,
            t.currentApplication.removeEventListener(n.WIDTH_CHANGED, this._delegate_applicationWidthChangedHandler)
        }
        ,
        r.prototype.registerElement = function(e) {
            this._registeredDisplayElements || (this._registeredDisplayElements = []),
            this._registeredDisplayElements[this._registeredDisplayElements.length] = e,
            this.initialized && e.addStyle(this.classPrefix + this.state)
        }
        ,
        r.prototype.unregisterElement = function(e) {
            this._registeredDisplayElements.splice(this._registeredDisplayElements.indexOf(e), 1)
        }
        ,
        r.prototype._applicationWidthChangedHandler = function(e) {
            var t, n, i, r, s = this.thresholds, a = e.width, c = -1, l = s.length;
            for (n = 0; l > n; n++)
                if (t = s[n],
                t > a) {
                    c = n;
                    break
                }
            if (-1 == c && (c = s.length),
            this.state != c && (i = this.state,
            this.state = c,
            this.hasEventListener(o.WIDTH_STATE_CHANGED) && this.dispatchEvent(new o(o.WIDTH_STATE_CHANGED)),
            r = this._registeredDisplayElements,
            r && (l = r.length)))
                if (-1 == i)
                    for (n = 0; l > n; n++)
                        r[n].addStyle(this.classPrefix + c);
                else
                    for (n = 0; l > n; n++)
                        r[n].overwriteStyle(this.classPrefix + i, this.classPrefix + c)
        }
        ,
        r.SInit = (function() {
            r.prototype._delegate_applicationWidthChangedHandler = null,
            r.prototype._registeredDisplayElements = null,
            r.prototype.initialized = !1,
            r.prototype.state = -1,
            r.prototype.thresholds = null,
            r.prototype.classPrefix = "g5-WidthStateWatcher_CurrentSize-"
        }
        )(),
        r
    }
    )(ns_gen5_events.EventDispatcher);
    e.WidthStateWatcher = r
}
)(ns_gen5_util || (ns_gen5_util = {})),
(function(e) {
    var t, n = (function(e) {
        function t() {
            return e.call(this) || this
        }
        return __extends(t, e),
        t.prototype.initialize = function() {}
        ,
        t.prototype.stemUpdateHandler = function(e, t) {}
        ,
        t.prototype.stemInsertHandler = function(e, t) {}
        ,
        t.prototype.stemDeleteHandler = function(e) {}
        ,
        t.prototype.detatchStem = function() {}
        ,
        t.prototype.recursiveDetatchStem = function() {}
        ,
        t.SInit = (function() {
            ns_gen5_ui.StemBaseMixin.call(t.prototype)
        }
        )(),
        t
    }
    )(ns_gen5_events.EventDispatcher);
    e.StemMergeProcessor_PrivateBase = n,
    t = (function(e) {
        function t(t, n) {
            var i = e.call(this) || this;
            return i.toStem = null,
            i._excludeMap = null,
            i.stem = t,
            i.toStem = n,
            "_T"in n.data && delete n.data._T,
            i._excludeMap = {},
            i._excludeMap.IT = 1,
            i
        }
        return __extends(t, e),
        t.prototype.toString = function() {
            return "[StemMergeProcessor]"
        }
        ,
        t.prototype.excludeAttributes = function() {
            var e, t, n, i = [];
            for (e = 0; e < arguments.length; e++)
                i[e] = arguments[e];
            for (t = arguments.length,
            n = 0; t > n; n++)
                this._excludeMap[arguments[n]] = 1
        }
        ,
        t.prototype.initialize = function() {
            e.prototype.initialize.call(this),
            this.takeAll()
        }
        ,
        t.prototype.takeAll = function() {
            var e, t = this.stem.data, n = this.toStem.data;
            for (e in t)
                e in this._excludeMap || (n[e] = t[e]);
            return n
        }
        ,
        t.prototype.detatchStem = function() {
            this.toStem = null,
            e.prototype.detatchStem.call(this)
        }
        ,
        t.prototype.stemUpdateHandler = function(e, t) {
            var n, i = {};
            for (n in t)
                n in this._excludeMap || (i[n] = t[n]);
            this.toStem.update(i)
        }
        ,
        t
    }
    )(n),
    e.StemMergeProcessor = t
}
)(ns_gen5_util || (ns_gen5_util = {})),
(function(e) {
    var t = (function() {
        function e() {}
        return e.GetCookieValue = function(e) {
            return this.GetCookieAttributeValue(e)
        }
        ,
        e.GetCookieAttributeValue = function(e, t) {
            var n, i, o, r, s, a, c = document.cookie.split(";"), l = null, u = c.length;
            for (r = 0; u > r; r++)
                if (o = c[r],
                i = o.indexOf("="),
                n = o.substr(0, i),
                n = n.replace(/^\s+|\s+$/g, ""),
                n == e) {
                    if (l = o.substr(i + 1),
                    t)
                        for (s = l.split("&"),
                        l = null,
                        a = 0; a < s.length; a++)
                            if (t == s[a].split("=")[0]) {
                                l = s[a].split("=")[1];
                                break
                            }
                    break
                }
            return l ? unescape(l) : l
        }
        ,
        e.SetCookieValue = function(e, t, n, i, o) {
            var r, s, a, c, l = document.cookie.split(";"), u = [], d = !1, h = "";
            if (i && (h = ";domain=" + i),
            t && 0 != t.length) {
                for (s = 0; s < l.length; s++)
                    if (l[s] = l[s].replace(/^\s+|\s+$/g, ""),
                    e == l[s].split("=")[0])
                        for (a = l[s].substring(l[s].indexOf("=") + 1, l[s].length),
                        u = a.split("&"),
                        c = 0; c < u.length; c++)
                            t == u[c].split("=")[0] && (u[c] = t + "=" + escape(n).replace(/\+/g, "%2b"),
                            d = !0);
                d || (u.length++,
                u[u.length - 1] = t + "=" + escape(n).replace(/\+/g, "%2b")),
                document.cookie = e + "=; expires=Thu, 01-Jan-70 00:00:01 GMT;path=/",
                document.cookie = e + "=" + u.join("&") + (o ? h : "") + ";path=/" + Locator.user.cookieSecurityLevel
            } else
                r = new Date,
                r.setDate(r.getDate() + 90),
                document.cookie = e + "=" + n + h + ";path=/" + Locator.user.cookieSecurityLevel
        }
        ,
        e.GetSessionId = function() {
            var t;
            try {
                t = e.GetCookieValue("pstk"),
                /[A-F0-9]{38}/i.test(t) || (t = null)
            } catch (n) {
                t = null,
                ErrorReporter.Trace(this, n)
            }
            return t
        }
        ,
        e.SetSessionId = function(t, n) {
            e.SetCookieValue("pstk", "", t, n)
        }
        ,
        e.SetLoginSuccess = function(t) {
            var n = 1 == t ? "1" : "0";
            e.SetCookieValue("session", "lgs", n)
        }
        ,
        e.SetKYCPage = function(t) {
            e.SetCookieValue("session", "kpd", t)
        }
        ,
        e
    }
    )();
    e.CookieManager = t
}
)(ns_gen5_util || (ns_gen5_util = {})),
(function(e) {
    var t = e.TextNode
      , n = (function(e) {
        function n(t) {
            return e.call(this, t) || this
        }
        return __extends(n, e),
        n.prototype.toString = function() {
            return "[Label]"
        }
        ,
        n.prototype.createChildren = function() {
            this._textNode = new t(this._text),
            this.appendChild(this._textNode)
        }
        ,
        n.prototype.commitProperties = function() {
            this._textChanged && (this._textChanged = !1,
            this._textNode.setText(this._text))
        }
        ,
        n.prototype.setText = function(e) {
            e != this._text && (this._text = e,
            this._textChanged = !0,
            this.invalidateProperties())
        }
        ,
        n.prototype.getText = function() {
            return this._text
        }
        ,
        n.prototype.getTooltip = function() {
            return this._text
        }
        ,
        n.prototype.commitText = function(e) {
            this._textNode.setText(e)
        }
        ,
        n.SInit = (function() {
            n.prototype._text = null,
            n.prototype._textChanged = !1,
            n.prototype._textNode = null
        }
        )(),
        n
    }
    )(e.Component);
    e.Label = n
}
)(ns_gen5_ui || (ns_gen5_ui = {})),
(function(e) {
    var t, n = (function(e) {
        function t() {
            return null !== e && e.apply(this, arguments) || this
        }
        return __extends(t, e),
        t.prototype.stemUpdateHandler = function(e, t) {}
        ,
        t.prototype.stemDeleteHandler = function(e) {}
        ,
        t.prototype.stemInsertHandler = function(e, t) {}
        ,
        t.prototype.detatchStem = function() {}
        ,
        t.prototype.recursiveDetatchStem = function() {}
        ,
        t
    }
    )(e.Label);
    e.LabelStemBase_Mixin = n,
    e.StemBaseMixin.call(n.prototype),
    t = (function(e) {
        function t(t) {
            var n = e.call(this, t) || this;
            return n._textChanged = !0,
            n
        }
        return __extends(t, e),
        t.prototype.toString = function() {
            return "[LabelStemBase]"
        }
        ,
        t.prototype.commitProperties = function() {
            this._textChanged && (this._text = this.stem.data[this.stemAttributeName] || "",
            e.prototype.commitProperties.call(this))
        }
        ,
        t.prototype.stemUpdateHandler = function(e, t) {
            this.stemAttributeName in t && (this._textChanged = !0,
            this.invalidateProperties())
        }
        ,
        t.prototype.setStem = function(e) {
            this.stem && this.stem.removeDelegate(this),
            this.stem = e,
            e && (e.addDelegate(this),
            this._textChanged = !0,
            this.invalidateProperties())
        }
        ,
        t.SInit = (function() {
            t.prototype.stemAttributeName = "NA"
        }
        )(),
        t
    }
    )(n),
    e.LabelStemBase = t
}
)(ns_gen5_ui || (ns_gen5_ui = {})),
(function(e) {
    var t = (function(e) {
        function t() {
            var t = e.call(this, "iframe") || this;
            return t.scrolling = !1,
            t.onloadHandler = function() {
                return t.onLoad()
            }
            ,
            t
        }
        return __extends(t, e),
        t.prototype.createChildren = function() {
            var e = this
              , t = this.getElement();
            t.src = this.src,
            t.name = this.name,
            t.scrolling = this.scrolling ? "yes" : "no",
            t.setAttribute("allowtransparency", this.allowTransparency ? "true" : "false"),
            this.setVisible(!1),
            t.addEventListener("load", this.onloadHandler),
            t.addEventListener("unload", (function() {
                return e.executeUnload()
            }
            ))
        }
        ,
        t.prototype.executeUnload = function() {}
        ,
        t.prototype.onLoad = function() {
            var e = this.getElement();
            e.removeEventListener("load", this.onloadHandler),
            this.setVisible(!0)
        }
        ,
        t
    }
    )(e.Component);
    e.InlineFrame = t
}
)(ns_gen5_ui || (ns_gen5_ui = {})),
(function(e) {
    function t(t) {
        return (function(e) {
            function n() {
                var n = e.call(this) || this;
                return n.load(t),
                n
            }
            return __extends(n, e),
            n
        }
        )(e.ModuleContainer)
    }
    e.SingletonModule = t
}
)(ns_gen5_ui || (ns_gen5_ui = {})),
(function(e) {
    var t = (function(e) {
        function t() {
            var t = e.call(this) || this;
            return t.direction = null,
            t
        }
        return __extends(t, e),
        t.prototype.toString = function() {
            return "[ArrowButton]"
        }
        ,
        t.prototype.createChildren = function() {
            this.addStyle("g5-ArrowButton"),
            this.direction && this.addStyle(this.direction)
        }
        ,
        t.LEFT = "g5-ArrowButton_Left",
        t.RIGHT = "g5-ArrowButton_Right",
        t.UP = "g5-ArrowButton_Up",
        t.DOWN = "g5-ArrowButton_Down",
        t
    }
    )(ns_gen5_ui.Component);
    e.ArrowButton = t
}
)(ns_gen5_ui_controls || (ns_gen5_ui_controls = {})),
(function(e) {
    var t = ns_gen5_ui.Component
      , n = e.ArrowButton
      , i = -1
      , o = 1
      , r = (function(e) {
        function r() {
            var t = e.call(this) || this;
            return t.scrollAmmountModifier = 1,
            t.ignoreButtonsForTravel = !1,
            t.fixedWidthScroll = !1,
            t._scrollContent = null,
            t._leftButton = null,
            t._rightButton = null,
            t
        }
        return __extends(r, e),
        r.prototype.toString = function() {
            return "[HorizontalScroller]"
        }
        ,
        r.prototype.createChildren = function() {
            var e, n, r, s = this;
            this.addStyle(this.baseStyle),
            e = this._leftButton = new this.arrowButtonType,
            e.direction = this.directions.LEFT,
            e.clickHandler = function() {
                return s._travel(o)
            }
            ,
            e.addStyle(this.baseStyle + "_Dis"),
            n = this._rightButton = new this.arrowButtonType,
            n.direction = this.directions.RIGHT,
            n.clickHandler = function() {
                return s._travel(i)
            }
            ,
            r = new t,
            r.addStyle(this.baseStyle + "_HScroll"),
            this.appendChild(r),
            this.appendChild(e),
            this.appendChild(r),
            r.appendChild(this._scrollContent),
            this.appendChild(n)
        }
        ,
        r.prototype._travel = function(e, t) {
            var n, i, o, r;
            this._rightButton.removeStyle(this.baseStyle + "_Dis"),
            this._leftButton.removeStyle(this.baseStyle + "_Dis"),
            this.buttonWidth || (this.buttonWidth = this._rightButton.getElement().clientWidth),
            this.ignoreButtonsForTravel && (this.buttonWidth = 0),
            n = this._scrollContent.getElement(),
            i = n.clientWidth - 2 * this.buttonWidth,
            this.totalWidth || (this.totalWidth = n.scrollWidth),
            this.max_x_pos = i - this.totalWidth,
            this.max_x_pos > 0 && (this.max_x_pos = 0),
            o = n.style.left || "0px",
            o = o.slice(0, -2),
            r = t || n.scrollWidth / n.children.length * this.scrollAmmountModifier,
            this.endPos = Number(o) + r * e,
            this.endPos - this.graceSpace < this.max_x_pos && (this.endPos = this.max_x_pos,
            this._rightButton.addStyle(this.baseStyle + "_Dis")),
            this.endPos + this.graceSpace > 0 && (this.endPos = 0,
            this._leftButton.addStyle(this.baseStyle + "_Dis")),
            n.style.left = this.endPos + "px"
        }
        ,
        r.prototype.setScrollContent = function(e) {
            this._scrollContent = e,
            this._scrollContent.addStyle(this.baseStyle + "_ScrollContent")
        }
        ,
        r.SInit = (function() {
            r.prototype.directions = n,
            r.prototype.arrowButtonType = n,
            r.prototype.baseStyle = "g5-HorizontalScroller",
            r.prototype.graceSpace = 60
        }
        )(),
        r
    }
    )(ns_gen5_ui.Component);
    e.HorizontalScroller = r
}
)(ns_gen5_ui_controls || (ns_gen5_ui_controls = {})),
(function(e) {
    var t, n, i = ns_gen5_ui.Component, o = ns_gen5_events.EventDispatcher, r = ns_gen5_events.ModalEvent;
    !(function(e) {
        e[e.Low = 1] = "Low",
        e[e.Normal = 2] = "Normal",
        e[e.High = 3] = "High",
        e[e.Urgent = 4] = "Urgent",
        e[e.AboveAllElse = 5] = "AboveAllElse"
    }
    )(t = e.ModalPriority || (e.ModalPriority = {})),
    n = (function(e) {
        function n() {
            var t = null !== e && e.apply(this, arguments) || this;
            return t.modalQueue = [],
            t
        }
        return __extends(n, e),
        n.prototype.addModal = function(e, n) {
            this.root || (this.root = this.getModalRoot()),
            n || (n = t.Normal),
            this.displayingModal ? n > this.displayingModal.priority ? (this.modalQueue.push(this.displayingModal),
            this.modalQueue.push({
                modalComponent: e,
                priority: n
            }),
            this.removeModal(this.displayingModal.modalComponent)) : this.modalQueue.push({
                modalComponent: e,
                priority: n
            }) : (this.displayingModal = {
                modalComponent: e,
                priority: n
            },
            this.showDarkWash(),
            this.root.appendChild(e)),
            this.dispatchEvent(new r(r.MODAL_CHANGE,!0))
        }
        ,
        n.prototype.removeModal = function(e) {
            if (this.displayingModal = null,
            this.darkWash.suspendElementFromDom(),
            this.root.removeChild(e),
            this.modalQueue.length > 0) {
                this.modalQueue.sort((function(e, t) {
                    return t.priority - e.priority
                }
                ));
                var t = this.modalQueue.splice(0, 1)[0];
                this.addModal(t.modalComponent, t.priority)
            } else
                this.dispatchEvent(new r(r.MODAL_CHANGE,!1))
        }
        ,
        n.prototype.contains = function(e) {
            if (this.displayingModal && this.displayingModal.modalComponent == e)
                return !0;
            if (this.modalQueue && this.modalQueue.length > 0)
                for (var t = 0; t < this.modalQueue.length; t++)
                    if (this.modalQueue[t].modalComponent == e)
                        return !0;
            return !1
        }
        ,
        n.prototype.showDarkWash = function() {
            this.darkWash ? this.darkWash.unsuspendElementFromDom() : (this.darkWash = new i,
            this.darkWash.addStyle(this.getWashStyle()),
            this.root.appendChild(this.darkWash))
        }
        ,
        n
    }
    )(o),
    e.ModalManagerBase = n
}
)(ns_gen5_util || (ns_gen5_util = {})),
(function(e) {
    var t = 1.70158
      , n = (function() {
        function e() {}
        return e.EaseIn = function(e) {
            return e * e * ((t + 1) * e - t)
        }
        ,
        e.EaseOut = function(e) {
            return (e -= 1) * e * ((t + 1) * e + t) + 1
        }
        ,
        e.EaseInOut = function(e) {
            return (e *= 2) < 1 ? .5 * (e * e * ((1.525 * t + 1) * e - 1.525 * t)) : .5 * ((e -= 2) * e * ((1.525 * t + 1) * e + 1.525 * t) + 2)
        }
        ,
        e
    }
    )();
    e.Back = n
}
)(ns_gen5_animation_easing || (ns_gen5_animation_easing = {})),
(function(e) {
    var t = (function() {
        function e() {}
        return e.EaseIn = function(t) {
            return 1 - e.EaseOut(1 - t)
        }
        ,
        e.EaseOut = function(e) {
            return 1 / 2.75 > e ? 7.5625 * e * e : 2 / 2.75 > e ? 7.5625 * (e -= 1.5 / 2.75) * e + .75 : 2.5 / 2.75 > e ? 7.5625 * (e -= 2.25 / 2.75) * e + .9375 : 7.5625 * (e -= 2.625 / 2.75) * e + .984375
        }
        ,
        e.EaseInOut = function(t) {
            return (t *= 2) < 1 ? .5 * e.EaseIn(t) : .5 * e.EaseOut(t - 1) + .5
        }
        ,
        e
    }
    )();
    e.Bounce = t
}
)(ns_gen5_animation_easing || (ns_gen5_animation_easing = {})),
(function(e) {
    var t = 1
      , n = .3
      , i = n / 4
      , o = (function() {
        function e() {}
        return e.EaseIn = function(e) {
            return 0 == e || 1 == e ? e : -(t * Math.pow(2, 10 * (e -= 1)) * Math.sin((e - i) * (2 * Math.PI) / n))
        }
        ,
        e.EaseOut = function(e) {
            return 0 == e || 1 == e ? e : t * Math.pow(2, -10 * e) * Math.sin((e - i) * (2 * Math.PI) / n) + 1
        }
        ,
        e.EaseInOut = function(e) {
            return 0 == e || 1 == e ? e : (e = 2 * e - 1,
            0 > e ? -.5 * (t * Math.pow(2, 10 * e) * Math.sin((e - 1.5 * i) * (2 * Math.PI) / (1.5 * n))) : .5 * t * Math.pow(2, -10 * e) * Math.sin((e - 1.5 * i) * (2 * Math.PI) / (1.5 * n)) + 1)
        }
        ,
        e
    }
    )();
    e.Elastic = o
}
)(ns_gen5_animation_easing || (ns_gen5_animation_easing = {})),
(function(e) {
    var t = (function() {
        function e() {}
        return e.EaseIn = function(e) {
            return 0 == e ? 0 : Math.pow(2, 10 * (e - 1))
        }
        ,
        e.EaseOut = function(e) {
            return 1 == e ? 1 : 1 - Math.pow(2, -10 * e)
        }
        ,
        e.EaseInOut = function(e) {
            return 0 == e || 1 == e ? e : 0 > (e = 2 * e - 1) ? .5 * Math.pow(2, 10 * e) : 1 - .5 * Math.pow(2, -10 * e)
        }
        ,
        e
    }
    )();
    e.Exponential = t
}
)(ns_gen5_animation_easing || (ns_gen5_animation_easing = {})),
(function(e) {
    var t = (function() {
        function e() {}
        return e.EaseNone = function(e) {
            return e
        }
        ,
        e
    }
    )();
    e.Linear = t
}
)(ns_gen5_animation_easing || (ns_gen5_animation_easing = {})),
(function(e) {
    var t = (function() {
        function e() {}
        return e.EaseIn = function(e) {
            return e * e * e * e
        }
        ,
        e.EaseOut = function(e) {
            return 1 - (e -= 1) * e * e * e
        }
        ,
        e.EaseInOut = function(e) {
            return .5 > e ? 8 * e * e * e * e : -8 * (e -= 1) * e * e * e + 1
        }
        ,
        e
    }
    )();
    e.Quartic = t
}
)(ns_gen5_animation_easing || (ns_gen5_animation_easing = {})),
(function(e) {
    var t = (function() {
        function e() {}
        return e.EaseIn = function(e) {
            return e * e
        }
        ,
        e.EaseOut = function(e) {
            return -e * (e - 2)
        }
        ,
        e.EaseInOut = function(e) {
            return .5 > e ? 2 * e * e : -2 * e * (e - 2) - 1
        }
        ,
        e
    }
    )();
    e.Quadratic = t
}
)(ns_gen5_animation_easing || (ns_gen5_animation_easing = {})),
(function(e) {
    function t() {
        var e, n, o;
        for (r = +new Date,
        e = 0,
        n = a.slice(); e < n.length; e++)
            o = n[e],
            o.update(r),
            o.getPlaying() || i(o);
        Locator.validationManager.processValidationCycleNow(),
        a.length && requestAnimationFrame(t)
    }
    function n(e) {
        a[a.length] = e,
        1 == a.length && (requestAnimationFrame(t),
        r = +new Date),
        c && (c = !1,
        Locator.validationManager.callPostValidation((function() {
            c = !0,
            t()
        }
        )))
    }
    function i(e) {
        var t = a.indexOf(e);
        t > -1 && a.splice(t, 1)
    }
    function o(e, t) {
        var n, i, o, r, s, a, c, l = e.from;
        return e.to instanceof Array ? (r = e.to,
        n = r[0],
        s = r[1],
        "string" == typeof s ? i = s : o = s) : (n = e.to,
        i = ""),
        a = l + t * (n - l),
        e.internal_different = a !== e.internal_previous_raw,
        e.internal_previous_raw = a,
        e.internal_different ? o ? (c = o(n + l === 1 ? a : Math.round(a)),
        e.internal_different = c !== e.internal_previous_calc,
        e.internal_previous_calc = c,
        c) : i ? (c = (n + l === 1 ? a : Math.round(a)) + i,
        e.internal_different = c !== e.internal_previous_calc,
        e.internal_previous_calc = c,
        c) : a : -0
    }
    var r, s = ns_gen5_animation_easing.Linear, a = [], c = !0, l = (function() {
        function e(t, n, i, o) {
            var r = this;
            this.element = t,
            this.time = n,
            this.params = i,
            this.flags = o,
            Locator.validationManager.callLater((function() {
                r.flags & e.AUTO_START_OFF || r.start()
            }
            ))
        }
        return e.prototype.start = function() {
            this.playing || (this.playing = !0,
            n(this),
            this.startTime = r)
        }
        ,
        e.prototype.pause = function() {
            this.playing ? (this.playing = !1,
            i(this)) : this.flags |= e.AUTO_START_OFF
        }
        ,
        e.prototype.end = function() {
            this.playing && (this.playing = !1,
            this.update(this.startTime + this.time + 1),
            i(this))
        }
        ,
        e.prototype.getPlaying = function() {
            return this.playing
        }
        ,
        e.prototype.getElement = function() {
            return this.element
        }
        ,
        e.prototype.then = function(t) {
            return t.flags = (t.flags || 0) | e.AUTO_START_OFF,
            this.next = t
        }
        ,
        e.prototype.onBegin = function(e) {
            return this.beginCallback = e,
            this
        }
        ,
        e.prototype.onChange = function(e) {
            return this.changeCallback = e,
            this
        }
        ,
        e.prototype.onComplete = function(e) {
            return this.completeCallback = e,
            this
        }
        ,
        e.prototype.executeVoidCallback = function(e) {
            try {
                e()
            } catch (t) {
                ErrorReporter.Trace(this, t)
            }
        }
        ,
        e.prototype.executeChangeCallback = function(e) {
            try {
                this.changeCallback(e)
            } catch (t) {
                ErrorReporter.Trace(this, t)
            }
        }
        ,
        e.prototype.update = function(t) {
            var n, i, r, a, c, l, u = (t - (this.startTime + (this.params.delay || 0))) / (this.time * e.DurationModifier) || (0 === this.time ? 1 : 0);
            if (u >= 1)
                this.playing = !1,
                u = 1;
            else if (0 > u)
                return void (u = 0);
            if (!this.moving && this.playing && (this.moving = !0,
            this.beginCallback && this.executeVoidCallback(this.beginCallback)),
            n = (this.params.ease || s.EaseNone)(u),
            i = this.params,
            i.attribute)
                for (r in i.attribute)
                    a = i.attribute[r],
                    c = o(a, n) + "",
                    a.internal_different && this.element.setAttribute(r, c);
            if (i.style) {
                l = this.element.getElement().style;
                for (r in i.style)
                    a = i.style[r],
                    c = o(a, n) + "",
                    a.internal_different && (l[r] = c)
            }
            if (i.property)
                for (r in i.property)
                    a = i.property[r],
                    c = o(a, n),
                    a.internal_different && ("function" == typeof this.element[r] ? this.element[r](c) : this.element[r] = c);
            this.changeCallback && this.executeChangeCallback(n),
            this.playing || (this.completeCallback && this.executeVoidCallback(this.completeCallback),
            this.next && (this.next.start(),
            this.next = null))
        }
        ,
        e.DurationModifier = 1,
        e.AUTO_START_OFF = 1,
        e.SInit = (function() {
            e.prototype.playing = !1,
            e.prototype.moving = !1,
            e.prototype.startTime = 0,
            e.prototype.next = null,
            e.prototype.element = null,
            e.prototype.time = 0,
            e.prototype.params = null,
            e.prototype.flags = 0,
            e.prototype.beginCallback = null,
            e.prototype.changeCallback = null,
            e.prototype.completeCallback = null
        }
        )(),
        e
    }
    )();
    e.Tween = l
}
)(ns_gen5_animation || (ns_gen5_animation = {})),
(function(e) {
    var t = (function(e) {
        function t(t) {
            return e.call(this, t) || this
        }
        return __extends(t, e),
        t.CONNECTED = "connected",
        t.DISCONNECTED = "disconnected",
        t.CONNECTION_FAILED = "connectionFailed",
        t.CONNECTION_FAILED_INVALID_SESSION = "connectionFailedInvalidSession",
        t
    }
    )(ns_gen5_events.Event365);
    e.ReaditConnectionEvent = t
}
)(readit || (readit = {})),
(function(e) {}
)(readit || (readit = {})),
(function(e) {
    var t = (function(e) {
        function t(t) {
            return e.call(this, t) || this
        }
        return __extends(t, e),
        t.CONNECTED = "connected",
        t.DISCONNECTED = "disconnected",
        t.CONNECTION_FAILED = "connectionFailed",
        t.PULL_ENABLED = "pullEnabled",
        t.PULL_DISABLED = "pullDisabled",
        t.PULL_DATA_RECEIVED = "pullDataReceived",
        t.PULL_REQUEST_FAILED = "pullRequestFailed",
        t.CONNECTION_FAILED_INVALID_SESSION = "connectionFailedInvalidSession",
        t
    }
    )(ns_gen5_events.Event365);
    e.TransportConnectionEvent = t
}
)(readit || (readit = {})),
(function(e) {
    var t = (function(e) {
        function t(t, n) {
            var i = e.call(this, t) || this;
            return i.message = n,
            i
        }
        return __extends(t, e),
        t.prototype.toString = function() {
            return "[ReaditMessageEvent type=" + this.type + " message=" + this.message + "]"
        }
        ,
        t.MESSAGE_RECEIVED = "messageReceived",
        t
    }
    )(ns_gen5_events.Event365);
    e.ReaditMessageEvent = t
}
)(readit || (readit = {})),
(function(e) {
    var t = (function() {
        function t(e, t, n, i) {
            this.messageType = e,
            this.topic = t,
            this.message = n,
            this.userHeaders = i
        }
        return t.prototype.toString = function() {
            return "[ReaditMessage messageType=" + this.messageType + " message=" + this.message + " topic=" + this.topic + "]"
        }
        ,
        t.prototype.getMessage = function() {
            return this.message
        }
        ,
        t.prototype.getTopic = function() {
            return this.topic
        }
        ,
        t.prototype.getBaseTopic = function() {
            return this.topic.substr(this.topic.lastIndexOf("/") + 1, this.topic.length)
        }
        ,
        t.prototype.getUserHeaders = function() {
            return this.userHeaders
        }
        ,
        t.prototype.isInitialTopicLoad = function() {
            return this.messageType === e.StandardProtocolConstants.INITIAL_TOPIC_LOAD
        }
        ,
        t
    }
    )();
    e.ReaditMessage = t
}
)(readit || (readit = {})),
(function(e) {
    var t;
    !(function(e) {
        e[e.DISCONNECTED = 0] = "DISCONNECTED",
        e[e.PENDING = 1] = "PENDING",
        e[e.CONNECTED = 2] = "CONNECTED"
    }
    )(t = e.ReaditConnectionStatus || (e.ReaditConnectionStatus = {})),
    e.StandardProtocolConstants = {
        RECORD_DELIM: "",
        FIELD_DELIM: "",
        HANDSHAKE_MESSAGE_DELIM: "",
        MESSAGE_DELIM: "\b",
        CLIENT_CONNECT: 0,
        CLIENT_POLL: 1,
        CLIENT_SEND: 2,
        CLIENT_CONNECT_FAST: 3,
        INITIAL_TOPIC_LOAD: 20,
        DELTA: 21,
        CLIENT_SUBSCRIBE: 22,
        CLIENT_UNSUBSCRIBE: 23,
        CLIENT_SWAP_SUBSCRIPTIONS: 26,
        NONE_ENCODING: 0,
        ENCRYPTED_ENCODING: 17,
        COMPRESSED_ENCODING: 18,
        BASE64_ENCODING: 19,
        SERVER_PING: 24,
        CLIENT_PING: 25,
        CLIENT_ABORT: 28,
        CLIENT_CLOSE: 29,
        ACK_ITL: 30,
        ACK_DELTA: 31,
        ACK_RESPONSE: 32
    }
}
)(readit || (readit = {})),
(function(e) {
    var t, n, i, o = ns_gen5_util.Delegate, r = e.TransportConnectionEvent, s = e.ReaditConnectionEvent, a = e.ReaditConnectionStatus;
    e.ReadItLog = new function() {
        var e = ns_gen5_util.LogEntry;
        this._enabled = !0,
        this._log = [],
        this.getLog = function() {
            return this._log
        }
        ,
        this.Log = function(t) {
            if (this._log.push(new e(t)),
            this._enabled)
                try {
                    var n = new Date;
                    $log(n.getHours() + ":" + n.getMinutes() + ":" + n.getSeconds() + "." + n.getMilliseconds() + " -> " + t)
                } catch (i) {}
        }
        ,
        this.SetEnabled = function(e) {
            this._enabled = e
        }
    }
    ,
    e.pushConnectionStatusEnum = {
        ATTEMPTINGCONNECTION: 1,
        CONNECTED: 2,
        FIRSTATTEMPTFAILED: 3,
        ALLRETRYSFAILED: 4,
        DISCONNECTED: 5,
        DELTA: 6,
        PULL_FALLBACK_ENABLED: 7,
        PULL_FALLBACK_DISABLED: 8,
        PULL_FALLBACK_DATA_RECEIVED: 9,
        PULL_FALLBACK_REQUEST_FAILED: 10
    },
    e.ReaditFlags = {
        SEND_CLOSE: 1
    },
    i = (function(i) {
        function c() {
            var e = i.call(this) || this;
            return e._connectionListStart = null,
            e._connectionListEnd = null,
            e._currentConnectionDetails = null,
            e._currentTransportMethod = null,
            e._connectionStatus = a.DISCONNECTED,
            e._connectionCycleAttempts = 0,
            e.connectionListCycles = 0,
            e.pushStatusHandler = null,
            e.storageId = null,
            e.delegate_transportConnectedHandler = new o(e,e.transportConnectedHandler),
            e.delegate_transportConnectionFailedHandler = new o(e,e.transportConnectionFailedHandler),
            e.delegate_transportDisconnectedHandler = new o(e,e.transportDisconnectedHandler),
            e.delegate_transportConnectionFailedInvalidSessionHandler = new o(e,e.transportConnectionFailedInvalidSessionHandler),
            e
        }
        return __extends(c, i),
        c.prototype.toString = function() {
            return "[ReaditClient]"
        }
        ,
        c.prototype.addConnectionAttempt = function(e) {
            this._connectionListStart ? (this._connectionListEnd.next = e,
            this._connectionListEnd = e) : this._connectionListStart = this._connectionListEnd = e
        }
        ,
        c.prototype.connect = function(e, i) {
            t = e,
            n = i,
            this._connectionStatus == a.DISCONNECTED && (this._connectionStatus = a.PENDING,
            this._connectionCycleAttempts = 0,
            this._currentConnectionDetails = this._connectionListEnd,
            this.connectToNext())
        }
        ,
        c.prototype.close = function(e) {
            if (this._currentTransportMethod) {
                var t = this._currentTransportMethod;
                this.disposeCurrentTransportMethod(),
                t.close(e)
            }
            this._connectionStatus = a.DISCONNECTED
        }
        ,
        c.prototype.connectToNext = function() {
            if (!Locator.config.hasSessionExpired()) {
                if (!this._currentConnectionDetails || !(this._currentConnectionDetails = this._currentConnectionDetails.next)) {
                    if (this.connectionListCycles > 0 && this._connectionCycleAttempts++ == this.connectionListCycles)
                        return e.ReadItLog.Log("Transport connection cycles completed, connection failed"),
                        this.close(),
                        void this.dispatchEvent(new s(e.ReaditConnectionEvent.CONNECTION_FAILED));
                    this._currentConnectionDetails = this._connectionListStart
                }
                this.disposeCurrentTransportMethod(),
                this._currentTransportMethod = new this._currentConnectionDetails.transportMethod,
                this._currentTransportMethod.addEventListener(r.CONNECTED, this.delegate_transportConnectedHandler),
                this._currentTransportMethod.addEventListener(r.CONNECTION_FAILED, this.delegate_transportConnectionFailedHandler),
                this._currentTransportMethod.addEventListener(r.DISCONNECTED, this.delegate_transportDisconnectedHandler),
                this._currentTransportMethod.addEventListener(r.CONNECTION_FAILED_INVALID_SESSION, this.delegate_transportConnectionFailedInvalidSessionHandler),
                this._currentTransportMethod.setConnectionDetails(this._currentConnectionDetails),
                this._currentTransportMethod.setMessageDispatcher(this),
                this.logPushStatus(String(e.pushConnectionStatusEnum.ATTEMPTINGCONNECTION), this.getCurrentConnectionHost()),
                this._currentTransportMethod.storageId = this.storageId,
                this._currentTransportMethod.tokenValidation = this.tokenValidation,
                this._currentTransportMethod.connect(t, n)
            }
        }
        ,
        c.prototype.disposeCurrentTransportMethod = function() {
            this._currentTransportMethod && (this._currentTransportMethod.removeEventListener(r.CONNECTED, this.delegate_transportConnectedHandler),
            this._currentTransportMethod.removeEventListener(r.CONNECTION_FAILED, this.delegate_transportConnectionFailedHandler),
            this._currentTransportMethod.removeEventListener(r.DISCONNECTED, this.delegate_transportDisconnectedHandler),
            this._currentTransportMethod.removeEventListener(r.CONNECTION_FAILED_INVALID_SESSION, this.delegate_transportConnectionFailedInvalidSessionHandler),
            this._currentTransportMethod = null)
        }
        ,
        c.prototype.subscribe = function(e) {
            if (this._connectionStatus == a.CONNECTED)
                try {
                    this._currentTransportMethod.subscribe(e)
                } catch (t) {
                    ErrorReporter.Trace(this, t)
                }
        }
        ,
        c.prototype.unsubscribe = function(e) {
            if (this._connectionStatus == a.CONNECTED)
                try {
                    this._currentTransportMethod.unsubscribe(e)
                } catch (t) {
                    ErrorReporter.Trace(this, t)
                }
        }
        ,
        c.prototype.send = function(e, t) {
            this._connectionStatus == a.CONNECTED && this._currentTransportMethod.send(e, t)
        }
        ,
        c.prototype.swapSubscription = function(e, t) {
            if (this._connectionStatus == a.CONNECTED)
                try {
                    this._currentTransportMethod.swapSubscription(e, t)
                } catch (n) {
                    ErrorReporter.Trace(this, n)
                }
        }
        ,
        c.prototype.getConnectionID = function() {
            return this._connectionStatus == a.CONNECTED ? this._currentTransportMethod.getConnectionId() : null
        }
        ,
        c.prototype.getConnected = function() {
            return this._connectionStatus == a.CONNECTED
        }
        ,
        c.prototype.getConnectionStatus = function() {
            return this._connectionStatus
        }
        ,
        c.prototype.getTransportSuspended = function() {
            return this._currentTransportMethod && this._currentTransportMethod.suspended
        }
        ,
        c.prototype.getCurrentConnectionHost = function() {
            return this._currentConnectionDetails ? this._currentConnectionDetails.host : this._connectionListEnd.host
        }
        ,
        c.prototype.getCurrentConnectionDetails = function() {
            return this._currentTransportMethod.getConnectionDetails()
        }
        ,
        c.prototype.logPushStatus = function(e, t) {
            try {
                this.pushStatusHandler && this.pushStatusHandler.log(e, 0, t)
            } catch (n) {}
        }
        ,
        c.prototype.transportConnectedHandler = function() {
            this._connectionStatus = a.CONNECTED,
            this.logPushStatus(String(e.pushConnectionStatusEnum.CONNECTED), this.getCurrentConnectionHost()),
            this.dispatchEvent(new s(e.ReaditConnectionEvent.CONNECTED))
        }
        ,
        c.prototype.transportConnectionFailedHandler = function() {
            this.logPushStatus(String(e.pushConnectionStatusEnum.DISCONNECTED), this.getCurrentConnectionHost()),
            this.connectToNext()
        }
        ,
        c.prototype.transportDisconnectedHandler = function() {
            this.close(),
            this.logPushStatus(String(e.pushConnectionStatusEnum.DISCONNECTED), this.getCurrentConnectionHost()),
            this.dispatchEvent(new s(e.ReaditConnectionEvent.DISCONNECTED))
        }
        ,
        c.prototype.transportConnectionFailedInvalidSessionHandler = function() {
            this.close(),
            this.dispatchEvent(new s(e.ReaditConnectionEvent.CONNECTION_FAILED_INVALID_SESSION))
        }
        ,
        c
    }
    )(ns_gen5_events.EventDispatcher),
    e.ReaditClient = i
}
)(readit || (readit = {})),
(function(e) {
    var t = (function() {
        function e(e, t, n, i, o) {
            this.host = e,
            this.port = t,
            this.transportMethodId = n,
            this.defaultTopic = i,
            this.uid = o,
            this.next = null
        }
        return e.prototype.clone = function() {
            return new e(this.host,this.port,this.transportMethodId,this.defaultTopic,this.uid)
        }
        ,
        e.prototype.toString = function() {
            return "[host:" + this.host + ", port:" + this.port + ", topic:" + this.defaultTopic + "]"
        }
        ,
        e
    }
    )();
    e.ReaditConnectionDetails = t
}
)(readit || (readit = {})),
(function(e) {
    "use strict";
    var t = 0
      , n = 1
      , i = 3
      , o = 4
      , r = (function() {
        function e() {
            var e = this;
            this.xdr = new XDomainRequest,
            this.xdr.timeout = 6e4,
            this.status = 0,
            this.readyState = t,
            this.responseText = null,
            this.contentType = null,
            this.onreadystatechange = null,
            this.progress_delegate = function() {
                return e._progress()
            }
            ,
            this.onload_delegate = function() {
                return e._onload()
            }
            ,
            this.onerror_delegate = function() {
                return e._onerror()
            }
            ,
            this.ontimeout_delegate = function() {
                return e._timeout()
            }
        }
        return e.TryCreate = function(t) {
            return "withCredentials"in t || !XDomainRequest ? t : new e
        }
        ,
        e.prototype._progress = function() {
            this.readyState = i,
            this.onreadystatechange && this.onreadystatechange.call(this)
        }
        ,
        e.prototype._timeout = function() {
            this.readyState = o,
            this.status = 0,
            this.responseText = null,
            this.contentType = null,
            this.xdr.onload = this.xdr.onerror = this.xdr.ontimeout = function() {}
            ,
            this.xdr = void 0,
            this.onreadystatechange && this.onreadystatechange.call(this)
        }
        ,
        e.prototype._onerror = function() {
            this.readyState = o,
            this.status = 0,
            this.responseText = null,
            this.contentType = null,
            this.xdr.onload = this.xdr.onerror = this.xdr.ontimeout = function() {}
            ,
            this.xdr = void 0,
            this.onreadystatechange && this.onreadystatechange.call(this)
        }
        ,
        e.prototype._onload = function() {
            this.readyState = o,
            this.status = 200,
            this.responseText = this.xdr.responseText,
            this.contentType = this.xdr.contentType,
            this.xdr.onload = this.xdr.onerror = this.xdr.ontimeout = function() {}
            ,
            this.xdr = void 0,
            this.onreadystatechange && this.onreadystatechange.call(this)
        }
        ,
        e.prototype.open = function(e, t) {
            var i = null;
            try {
                i = this.xdr.open(e, t)
            } catch (o) {
                throw {
                    name: o.name,
                    message: o.message,
                    number: o.number
                }
            }
            return this.xdr.onprogress = this.progress_delegate,
            this.xdr.ontimeout = this.ontimeout_delegate,
            this.xdr.onerror = this.onerror_delegate,
            this.xdr.onload = this.onload_delegate,
            this.readyState = n,
            this.onreadystatechange && this.onreadystatechange.call(this),
            i
        }
        ,
        e.prototype.send = function(e) {
            this.xdr.send(e)
        }
        ,
        e.prototype.abort = function() {
            return this.readyState = t,
            this.onreadystatechange = null,
            this.xdr.abort()
        }
        ,
        e
    }
    )();
    e.XDomainXMLHttpRequest = r
}
)(readit || (readit = {})),
(function(e) {
    var t, n, i = ns_gen5_ui.Application, o = ns_gen5_events.ApplicationEvent, r = ns_gen5_util.Delegate, s = ns_gen5_util.CookieManager, a = ns_gen5_util_logging.CounterLogger, c = {
        L: "1",
        M: "2",
        I: "3"
    }, l = (function(l) {
        function u() {
            var e = l.call(this) || this;
            return e._poller = null,
            e._messageDispatcher = null,
            e._connectionTimeout = 0,
            e._url = "",
            e._requestActive = !1,
            e._requestQueue = [],
            e._connectionID = "",
            e._sID = "",
            e._sequence = 0,
            e._connected = !1,
            e._hasNativeXmlHttp = !1,
            e._transportIsSupported = e.checkXmlHttpAvailable(),
            e._activeXVersion = null,
            e.instanceid = u.count++,
            e.hasLoggedCounter = !1,
            e.suspended = !1,
            e.storageId = null,
            e.tokenValidation = !1,
            e.TRAILING = "/pow2/",
            e.CONNECTION_TIMEOUT_LIMIT = 15e3,
            e.PUBLISHER_SESSION_TIMEOUT = 9e4,
            e.TRANSPORT_TIMEOUT = 20,
            e._delegate_resume = new r(e,e._resume),
            e
        }
        return __extends(u, l),
        u.prototype.toString = function() {
            return "[HttpTransportMethod]"
        }
        ,
        u.prototype.connect = function(i, o) {
            var r, c, l, u, d, h, p, _ = this;
            if (t = i,
            n = o,
            this._transportIsSupported) {
                this._connectionTimeout = setTimeout((function() {
                    _.connectionFailed("timeout after " + _.CONNECTION_TIMEOUT_LIMIT + "ms")
                }
                ), this.CONNECTION_TIMEOUT_LIMIT);
                try {
                    p = this.retrieve(),
                    this._connectionID = p[0],
                    this._connectionTimeStamp = p[1],
                    this._url = this._connectionDetails.host + ":" + this._connectionDetails.port + this.TRAILING,
                    this.log("Attempting connection to " + this._url),
                    r = s.GetSessionId(),
                    c = t && t(),
                    l = n && n(),
                    null == r ? this.dispatchEvent(new e.TransportConnectionEvent(e.TransportConnectionEvent.CONNECTION_FAILED_INVALID_SESSION)) : (u = function() {
                        var t, n;
                        return l && Date.now() / 1e3 > l ? (_.hasLoggedCounter || (_.hasLoggedCounter = !0,
                        a.QueueCounter("nst_timestamp_2", 1),
                        a.ForceCounterFlush()),
                        void Locator.validationManager.callNewContext((function() {
                            location.reload()
                        }
                        ))) : (t = {
                            method: e.StandardProtocolConstants.CLIENT_CONNECT,
                            transporttimeout: _.TRANSPORT_TIMEOUT,
                            type: "F",
                            topic: _._connectionDetails.defaultTopic + ",S_" + r
                        },
                        _.tokenValidation && c && (t.topic += ",D_" + c),
                        n = _.getRequest(t),
                        _.log("Connecting with:" + n),
                        n.onreadystatechange = function() {
                            var t, i, o, r;
                            4 == n.readyState && (clearTimeout(_._connectionTimeout),
                            200 == n.status ? (t = n.responseText.split(e.StandardProtocolConstants.HANDSHAKE_MESSAGE_DELIM),
                            i = t[0],
                            o = i.split(""),
                            "100" == o[0] && (_.handshakeHandler(o[1]),
                            r = t[1],
                            r && _.processMessage(r)),
                            "111" == o[0] && _.connectionFailed("connection rejected 111")) : _.connectionFailed("Connection Rejected - Invalid response status:" + n.status),
                            n.onreadystatechange = null)
                        }
                        ,
                        void n.send(n.params || ""))
                    }
                    ,
                    !this.storageId || !this._connectionID || !this._connectionTimeStamp || (new Date).getTime() - this._connectionTimeStamp > this.PUBLISHER_SESSION_TIMEOUT ? u() : (this.clear(),
                    d = !1,
                    h = this.getRequest({
                        method: e.StandardProtocolConstants.CLIENT_CLOSE,
                        s: this._sequence++
                    }),
                    h.onreadystatechange = function() {
                        d || 4 !== h.readyState || (d = !0,
                        h.onreadystatechange = null,
                        u())
                    }
                    ,
                    h.send("")))
                } catch (g) {
                    clearTimeout(this._connectionTimeout),
                    this.connectionFailed("Unable to open Socket.")
                }
            } else
                this.connectionFailed("XML Http Transport not supported.")
        }
        ,
        u.prototype.subscribe = function(t) {
            this.put(this.getRequest({
                method: e.StandardProtocolConstants.CLIENT_SUBSCRIBE,
                topic: t,
                s: this._sequence++
            }))
        }
        ,
        u.prototype.unsubscribe = function(t) {
            this.put(this.getRequest({
                method: e.StandardProtocolConstants.CLIENT_UNSUBSCRIBE,
                topic: t,
                s: this._sequence++
            }))
        }
        ,
        u.prototype.send = function(t, n) {
            this.put(this.getRequest({
                method: e.StandardProtocolConstants.CLIENT_SEND,
                data: encodeURIComponent(n),
                topic: t,
                s: this._sequence++
            }))
        }
        ,
        u.prototype.swapSubscription = function(t, n) {
            this.put(this.getRequest({
                method: e.StandardProtocolConstants.CLIENT_SWAP_SUBSCRIPTIONS,
                subs: t,
                unsubs: n,
                s: this._sequence++
            }))
        }
        ,
        u.prototype.close = function(t) {
            t & e.ReaditFlags.SEND_CLOSE && (this.put(this.getRequest({
                method: e.StandardProtocolConstants.CLIENT_CLOSE,
                s: this._sequence++
            })),
            this.clear()),
            this.dispose(),
            this.dispatchEvent(new e.TransportConnectionEvent(e.TransportConnectionEvent.DISCONNECTED))
        }
        ,
        u.prototype.setMessageDispatcher = function(e) {
            this._messageDispatcher = e
        }
        ,
        u.prototype.getConnectionDetails = function() {
            return this._connectionDetails
        }
        ,
        u.prototype.setConnectionDetails = function(e) {
            this._connectionDetails = e
        }
        ,
        u.prototype.getConnected = function() {
            return this._connected
        }
        ,
        u.prototype.connectionFailed = function(t) {
            this.log("http connection (" + this.instanceid + ", " + this._connectionDetails + ") failed - " + t);
            var n = this._connected;
            this.dispose(),
            n ? this.dispatchEvent(new e.TransportConnectionEvent(e.TransportConnectionEvent.DISCONNECTED)) : this.dispatchEvent(new e.TransportConnectionEvent(e.TransportConnectionEvent.CONNECTION_FAILED))
        }
        ,
        u.prototype.getRequest = function(t) {
            var n, i, o;
            n = this._hasNativeXmlHttp ? e.XDomainXMLHttpRequest.TryCreate(new XMLHttpRequest) : new ActiveXObject(this._activeXVersion);
            try {
                n.open("POST", this._url + (this._connectionID ? "?id=" + this._connectionID : "")),
                this._connectionID && (t.clientid = this._connectionID),
                i = "",
                n.setRequestHeader && n.setRequestHeader("Content-Type", "text/plain");
                for (o in t)
                    i += (i.length > 0 ? "&" : "") + o + "=" + encodeURIComponent(t[o]);
                return n.params = i,
                n
            } catch (r) {
                ErrorReporter.Trace(this, r)
            }
            return null
        }
        ,
        u.prototype.put = function(e) {
            var t, n = this;
            null !== e && this._requestQueue.push(e),
            this._requestActive || this.suspended || "" === this._connectionID || this._requestQueue.length > 0 && (t = this._requestQueue.shift(),
            this._requestActive = !0,
            t.onreadystatechange = function() {
                4 == t.readyState && (200 == t.status && t.responseText ? n.processMessage(t.responseText) : 200 != t.status && n.connectionFailed("Connection lost during put."),
                n.queuedRequestCompleteHandler(),
                t.onreadystatechange = null)
            }
            ,
            "params"in t ? t.send(t.params || "") : t.send(""))
        }
        ,
        u.prototype.poll = function() {
            var t = this;
            this._connected && (u.SuspendOnFocusLost && i.currentApplication && i.currentApplication.suspended ? this.suspended || ($log("suspend"),
            this.suspended = !0,
            i.currentApplication.addEventListener(o.FOCUS_IN, this._delegate_resume)) : (this._poller = this.getRequest({
                method: e.StandardProtocolConstants.CLIENT_POLL,
                s: this._sequence++,
                topic: ""
            }),
            this._poller.complete = !1,
            this._poller.onreadystatechange = function() {
                4 != t._poller.readyState || t._poller.complete || (t._poller.complete = !0,
                t._poller.onreadystatechange = null,
                200 == t._poller.status ? t.pollerCompleteHandler(t._poller.responseText) : t._connected && t.connectionFailed('Connection lost during poll statusCode:"' + t._poller.status + '" statusText:"' + t._poller.statusText + '"'))
            }
            ,
            "params"in this._poller ? this._poller.send(this._poller.params || "") : this._poller.send("")))
        }
        ,
        u.prototype.save = function() {
            this.storageId && this._connectionID && window.safeSessionStorage.setItem(this.storageId, this._connectionID + "|" + (this._connectionTimeStamp = (new Date).getTime()))
        }
        ,
        u.prototype.clear = function() {
            this.storageId && window.safeSessionStorage.setItem(this.storageId, "")
        }
        ,
        u.prototype.retrieve = function() {
            var e, t, n, i;
            return this.storageId && (e = window.safeSessionStorage.getItem(this.storageId)) ? (t = e.split("|"),
            n = t[0],
            i = t[1],
            [n, Number(i)]) : [null, null]
        }
        ,
        u.prototype._resume = function() {
            $log("resume"),
            i.currentApplication.removeEventListener(o.FOCUS_IN, this._delegate_resume),
            this.suspended = !1,
            this.poll(),
            this._requestQueue.length > 0 && this.put(null)
        }
        ,
        u.prototype.dispose = function() {
            if (this._connected = !1,
            this._connectionTimeStamp = null,
            this._connectionID = null,
            this._poller) {
                try {
                    this._poller.abort()
                } catch (e) {}
                this._poller.onreadystatechange = null,
                this._poller = null
            }
            this._messageDispatcher = null,
            clearTimeout(this._connectionTimeout)
        }
        ,
        u.prototype.checkXmlHttpAvailable = function() {
            try {
                return new XMLHttpRequest,
                this._hasNativeXmlHttp = !0,
                !0
            } catch (e) {}
            return !1
        }
        ,
        u.prototype.getConnectionId = function() {
            return this._connected ? this._connectionID : ""
        }
        ,
        u.prototype.log = function(t) {
            e.ReadItLog.Log(this + " -> " + t)
        }
        ,
        u.prototype.handshakeHandler = function(t) {
            this._requestActive = !1,
            this._connectionID = t,
            this._connectionDetails.connectionID = t,
            this.save(),
            t ? this._sID = c[t.charAt(0).toUpperCase()] || "0" : this._sID = "0",
            this._connected = !0,
            this.log(this.instanceid + " connected as " + this._connectionID + ". " + this._connectionDetails),
            this.poll(),
            this.dispatchEvent(new e.TransportConnectionEvent(e.TransportConnectionEvent.CONNECTED))
        }
        ,
        u.prototype.processMessage = function(t) {
            var n, i, o, r, s, a, c, l;
            if (this.save(),
            t) {
                n = t.split(e.StandardProtocolConstants.MESSAGE_DELIM);
                do
                    switch (i = n.shift(),
                    o = i.charCodeAt(0)) {
                    case e.StandardProtocolConstants.INITIAL_TOPIC_LOAD:
                    case e.StandardProtocolConstants.DELTA:
                        r = i.split(e.StandardProtocolConstants.RECORD_DELIM),
                        s = r[0].split(e.StandardProtocolConstants.FIELD_DELIM),
                        a = s.shift(),
                        c = a.substr(1, a.length),
                        l = i.substr(r[0].length + 1),
                        null !== this._messageDispatcher && this._messageDispatcher.dispatchEvent(new e.ReaditMessageEvent(e.ReaditMessageEvent.MESSAGE_RECEIVED,new e.ReaditMessage(String(o),c,l,s)));
                        break;
                    case e.StandardProtocolConstants.CLIENT_ABORT:
                    case e.StandardProtocolConstants.CLIENT_CLOSE:
                        this.connectionFailed("Connection close/abort during poll.")
                    }
                while (n.length)
            }
        }
        ,
        u.prototype.pollerCompleteHandler = function(e) {
            var t = this;
            this.processMessage(e),
            this._connected && setTimeout((function() {
                t.poll()
            }
            ), u.pollDelay)
        }
        ,
        u.prototype.queuedRequestCompleteHandler = function() {
            this._requestActive = !1,
            this._requestQueue.length && this.put(null)
        }
        ,
        u.prototype.getTransportSuspended = function() {
            return this.suspended
        }
        ,
        u.SuspendOnFocusLost = !0,
        u.pollDelay = 10,
        u.count = 0,
        u
    }
    )(ns_gen5_events.EventDispatcher);
    e.HttpTransportMethod = l
}
)(readit || (readit = {})),
(function(e) {
    var t, n, i = ns_gen5_util_logging.CounterLogger, o = (function(o) {
        function r() {
            var e = o.call(this) || this;
            return e._messageDispatcher = null,
            e._connectionID = "",
            e._connectionTimeout = 0,
            e._url = "",
            e._transportIsSupported = e.checkWebsocketAvailable(),
            e._socket = null,
            e._socketReadyState = null,
            e._connected = !1,
            e.suspended = !1,
            e.storageId = null,
            e.tokenValidation = !1,
            e.hasLoggedCounter = !1,
            e.socketOpenHandler = function(t) {
                e.log("Websocket: onopen: " + t.type),
                e.socketConnectCallback()
            }
            ,
            e.socketErrorHandler = function(t) {
                e.connectionFailed("connection error: " + t.type)
            }
            ,
            e.socketCloseHandler = function(t) {
                e._connected ? e.connectionClosed("Websocket: onclosed: " + t.reason) : e.connectionFailed("connection error: " + t.type + " (unable to connect error)")
            }
            ,
            e.socketMessageHandshakeHandler = function(t) {
                e.handshakeCallback(t.data)
            }
            ,
            e.socketMessageDataHandler = function(t) {
                e.socketDataCallback(t.data)
            }
            ,
            e
        }
        return __extends(r, o),
        r.prototype.toString = function() {
            return "[WebsocketTransportMethod]"
        }
        ,
        r.prototype.close = function() {
            if (this.getSocketConnected()) {
                var t = "";
                t += String.fromCharCode(e.StandardProtocolConstants.CLIENT_CLOSE),
                t += String.fromCharCode(0),
                this.put(t),
                this._socket.close()
            }
        }
        ,
        r.prototype.getConnected = function() {
            return this.getSocketConnected() && this._connected
        }
        ,
        r.prototype.getSocketConnected = function() {
            return this._transportIsSupported && this._socketReadyState == WebSocket.OPEN
        }
        ,
        r.prototype.setSocketReadyState = function() {
            this._socketReadyState = this._socket && this._socket.readyState ? this._socket.readyState : null,
            this._connected && this._socketReadyState !== WebSocket.OPEN && (this._connected = !1)
        }
        ,
        r.prototype.connect = function(e, i) {
            var o = this;
            if (t = e,
            n = i,
            this._transportIsSupported || this.connectionFailed("Websocket Transport not supported."),
            null == this._socket) {
                this._connectionTimeout = setTimeout((function() {
                    o.connectionFailed("timeout after " + r.CONNECTION_TIMEOUT_LIMIT + "ms")
                }
                ), r.CONNECTION_TIMEOUT_LIMIT);
                try {
                    this._url = this._connectionDetails.host + ":" + this._connectionDetails.port + r.TRAILING + "?uid=" + this._connectionDetails.uid,
                    this._socket = new WebSocket(this._url,"zap-protocol-v1"),
                    this._socket.addEventListener("open", this.socketOpenHandler),
                    this._socket.addEventListener("error", this.socketErrorHandler),
                    this._socket.addEventListener("close", this.socketCloseHandler)
                } catch (s) {
                    this.connectionFailed("Unable to open Socket. Error: " + s)
                }
            }
        }
        ,
        r.prototype.socketConnectCallback = function() {
            var e, t = this;
            this.clearConnectionTimeout(),
            this.setSocketReadyState(),
            this.getSocketConnected() ? (this._socket.addEventListener("message", this.socketMessageHandshakeHandler),
            e = this.getHandshakeData(),
            e ? (this._socket.send(e),
            this._connectionTimeout = setTimeout((function() {
                t.connectionFailed("timeout after " + r.HANDSHAKE_TIMEOUT_LIMIT + "ms")
            }
            ), r.HANDSHAKE_TIMEOUT_LIMIT)) : this.close()) : this.connectionFailed("not connected")
        }
        ,
        r.prototype.handshakeCallback = function(t) {
            var n = t.split(e.StandardProtocolConstants.HANDSHAKE_MESSAGE_DELIM)
              , i = n[0]
              , o = i.split(e.StandardProtocolConstants.FIELD_DELIM);
            return this._socket.removeEventListener("message", this.socketMessageHandshakeHandler),
            this.clearConnectionTimeout(),
            o[0] != r.HANDSHAKE_STATUS_CONNECTED ? o[0] == r.HANDSHAKE_STATUS_REJECTED ? void this.connectionFailed("connection rejected " + r.HANDSHAKE_STATUS_REJECTED) : void this.connectionFailed("connection rejected - unrecognised response") : (this.setSocketReadyState(),
            this._connected = !0,
            this._connectionID = o[1],
            this.dispatchEvent(new e.TransportConnectionEvent(e.TransportConnectionEvent.CONNECTED)),
            this.log("Websocket connected as " + this._connectionID + ". " + this._connectionDetails),
            void this._socket.addEventListener("message", this.socketMessageDataHandler))
        }
        ,
        r.prototype.socketDataCallback = function(t) {
            var n, i, o, r, s, a, c, l;
            try {
                if (t) {
                    n = t.split(e.StandardProtocolConstants.MESSAGE_DELIM);
                    do
                        switch (i = n.shift(),
                        o = i.charCodeAt(0)) {
                        case e.StandardProtocolConstants.INITIAL_TOPIC_LOAD:
                        case e.StandardProtocolConstants.DELTA:
                            r = i.split(e.StandardProtocolConstants.RECORD_DELIM),
                            s = r[0].split(e.StandardProtocolConstants.FIELD_DELIM),
                            a = s.shift(),
                            c = a.substr(1, a.length),
                            l = i.substr(r[0].length + 1),
                            null !== this._messageDispatcher && this._messageDispatcher.dispatchEvent(new e.ReaditMessageEvent(e.ReaditMessageEvent.MESSAGE_RECEIVED,new e.ReaditMessage(String(o),c,l,s)));
                            break;
                        case e.StandardProtocolConstants.CLIENT_ABORT:
                        case e.StandardProtocolConstants.CLIENT_CLOSE:
                            this.connectionFailed("Connection close/abort message type sent from publisher. Message type: " + o);
                            break;
                        default:
                            this.log("Unrecognised message type sent from publisher: " + o)
                        }
                    while (n.length)
                }
            } catch (u) {
                this.log(u.toString())
            }
        }
        ,
        r.prototype.subscribe = function(t) {
            var n = "";
            n += String.fromCharCode(e.StandardProtocolConstants.CLIENT_SUBSCRIBE),
            n += String.fromCharCode(e.StandardProtocolConstants.NONE_ENCODING),
            n += t,
            n += e.StandardProtocolConstants.RECORD_DELIM,
            this.put(n)
        }
        ,
        r.prototype.unsubscribe = function(t) {
            var n = "";
            n += String.fromCharCode(e.StandardProtocolConstants.CLIENT_UNSUBSCRIBE),
            n += String.fromCharCode(e.StandardProtocolConstants.NONE_ENCODING),
            n += t,
            n += e.StandardProtocolConstants.RECORD_DELIM,
            this.put(n)
        }
        ,
        r.prototype.swapSubscription = function(e, t) {
            this.unsubscribe(t),
            this.subscribe(e)
        }
        ,
        r.prototype.send = function(t, n) {
            var i = "";
            i += String.fromCharCode(e.StandardProtocolConstants.CLIENT_SEND),
            i += String.fromCharCode(e.StandardProtocolConstants.NONE_ENCODING),
            i += t,
            i += e.StandardProtocolConstants.RECORD_DELIM,
            i += n,
            this.put(i)
        }
        ,
        r.prototype.put = function(e) {
            try {
                if (!this.getSocketConnected())
                    throw new Error("socket not connected");
                this._socket.send(e)
            } catch (t) {
                this.connectionFailed("WebSocket: put:" + t)
            }
        }
        ,
        r.prototype.getHandshakeData = function() {
            var o, s, a = "";
            if (a += String.fromCharCode(r.HANDSHAKE_PROTOCOL),
            a += String.fromCharCode(r.HANDSHAKE_VERSION),
            a += String.fromCharCode(r.HANDSHAKE_CONNECTION_TYPE),
            a += String.fromCharCode(r.HANDSHAKE_CAPABILITIES_FLAG),
            null != this._connectionDetails.defaultTopic && (a += this._connectionDetails.defaultTopic + ","),
            o = ns_gen5_util.CookieManager.GetSessionId(),
            null == o)
                return this.dispatchEvent(new e.TransportConnectionEvent(e.TransportConnectionEvent.CONNECTION_FAILED_INVALID_SESSION)),
                null;
            if (a += "S_" + o,
            this.tokenValidation) {
                if (n && Date.now() / 1e3 > n())
                    return this.hasLoggedCounter || (this.hasLoggedCounter = !0,
                    i.QueueCounter("nst_timestamp_3_count", 1),
                    i.ForceCounterFlush()),
                    Locator.validationManager.callNewContext((function() {
                        location.reload()
                    }
                    )),
                    null;
                s = t && t(),
                s && (a += ",D_" + s)
            }
            return a += String.fromCharCode(0)
        }
        ,
        r.prototype.checkWebsocketAvailable = function() {
            return "WebSocket"in window
        }
        ,
        r.prototype.getConnectionId = function() {
            return this._connectionID
        }
        ,
        r.prototype.getConnectionDetails = function() {
            return this._connectionDetails
        }
        ,
        r.prototype.setConnectionDetails = function(e) {
            this._connectionDetails = e
        }
        ,
        r.prototype.setMessageDispatcher = function(e) {
            this._messageDispatcher = e
        }
        ,
        r.prototype.log = function(t) {
            e.ReadItLog.Log(this + " -> " + t)
        }
        ,
        r.prototype.clearConnectionTimeout = function() {
            this._connectionTimeout && (clearTimeout(this._connectionTimeout),
            this._connectionTimeout = null)
        }
        ,
        r.prototype.connectionFailed = function(t) {
            return this.log("Websocket connection (" + this._connectionDetails + ") failed - " + t),
            this.clearConnectionTimeout(),
            this.getConnected() ? void this.connectionClosed("connection failed") : (this.setSocketReadyState(),
            this.dispose(),
            void this.dispatchEvent(new e.TransportConnectionEvent(e.TransportConnectionEvent.CONNECTION_FAILED)))
        }
        ,
        r.prototype.connectionClosed = function(t) {
            this.log("Websocket connection (" + this._connectionDetails + ") closed - " + t),
            this.clearConnectionTimeout(),
            this.setSocketReadyState(),
            this.dispose(),
            this.dispatchEvent(new e.TransportConnectionEvent(e.TransportConnectionEvent.DISCONNECTED))
        }
        ,
        r.prototype.dispose = function() {
            this.close(),
            this._socket && (this._socket.removeEventListener("open", this.socketOpenHandler),
            this._socket.removeEventListener("close", this.socketCloseHandler),
            this._socket.removeEventListener("error", this.socketErrorHandler),
            this._socket.removeEventListener("message", this.socketMessageDataHandler),
            this._socket.removeEventListener("message", this.socketMessageHandshakeHandler),
            this._socket = null)
        }
        ,
        r.TRAILING = "/zap/",
        r.CONNECTION_TIMEOUT_LIMIT = 15e3,
        r.HANDSHAKE_TIMEOUT_LIMIT = 15e3,
        r.HANDSHAKE_PROTOCOL = 35,
        r.HANDSHAKE_VERSION = 3,
        r.HANDSHAKE_CONNECTION_TYPE = 80,
        r.HANDSHAKE_CAPABILITIES_FLAG = 1,
        r.HANDSHAKE_STATUS_CONNECTED = "100",
        r.HANDSHAKE_STATUS_REJECTED = "111",
        r
    }
    )(ns_gen5_events.EventDispatcher);
    e.WebsocketTransportMethod = o
}
)(readit || (readit = {})),
(function(e) {
    var t, n, i = ns_gen5_events.EventDispatcher, o = ns_gen5_ui.SingletonModule, r = ns_gen5_util.Singleton;
    !(function(e) {
        e.Private = "private",
        e.Public = "public"
    }
    )(t = e.ConnectionTypes || (e.ConnectionTypes = {})),
    n = (function(n) {
        function i() {
            var e = n.call(this) || this;
            return e._messageDispatcher = null,
            e._connectionID = "",
            e._connectionTimeout = 0,
            e._connected = !1,
            e.suspended = !1,
            e.storageId = null,
            e.tokenValidation = !1,
            i.AppCommsModuleContainer || (i.AppCommsModuleContainer = r.getInstance(i.AppApiModuleContainer)),
            e
        }
        return __extends(i, n),
        i.prototype.toString = function() {
            return "[NativeAppTransportMethod]"
        }
        ,
        i.prototype.close = function(e) {
            this._connectionID = ""
        }
        ,
        i.prototype.getConnected = function() {
            return this._connected
        }
        ,
        i.prototype.connect = function() {
            this._connected = !0,
            this._connectionID = "NativeApp-Transport",
            this.dispatchEvent(new e.TransportConnectionEvent(e.TransportConnectionEvent.CONNECTED))
        }
        ,
        i.prototype.subscribe = function(e) {
            var n = this;
            i.AppCommsModuleContainer.invoke((function(i) {
                n.connectionHost == t.Private ? i.privateDataHandlers.private_subscribe(e, (function(e) {
                    return n.appDataCallback(e)
                }
                )) : i.publicDataHandlers.public_subscribe(e, (function(e) {
                    return n.appDataCallback(e)
                }
                ))
            }
            ))
        }
        ,
        i.prototype.unsubscribe = function(e) {
            var n = this;
            i.AppCommsModuleContainer.invoke((function(i) {
                n.connectionHost == t.Private ? i.privateDataHandlers.private_unsubscribe(e) : i.publicDataHandlers.public_unsubscribe(e)
            }
            ))
        }
        ,
        i.prototype.swapSubscription = function(e, n) {
            var o = this;
            i.AppCommsModuleContainer.invoke((function(i) {
                o.connectionHost == t.Private ? i.privateDataHandlers.private_swapSubscription(e, n, (function(e) {
                    return o.appDataCallback(e)
                }
                )) : i.publicDataHandlers.public_swapSubscription(e, n, (function(e) {
                    return o.appDataCallback(e)
                }
                ))
            }
            ))
        }
        ,
        i.prototype.send = function(e, n) {
            var o = this;
            i.AppCommsModuleContainer.invoke((function(i) {
                o.connectionHost == t.Private ? i.privateDataHandlers.private_send(e, n, (function(e) {
                    return o.appDataCallback(e)
                }
                )) : i.publicDataHandlers.public_send(e, n, (function(e) {
                    return o.appDataCallback(e)
                }
                ))
            }
            ))
        }
        ,
        i.prototype.getConnectionId = function() {
            return this._connectionID
        }
        ,
        i.prototype.getConnectionDetails = function() {
            return this._connectionDetails
        }
        ,
        i.prototype.setConnectionDetails = function(e) {
            this._connectionDetails = e,
            this.connectionHost = e.host + "_"
        }
        ,
        i.prototype.setMessageDispatcher = function(e) {
            this._messageDispatcher = e
        }
        ,
        i.prototype.appDataCallback = function(t) {
            var n, i, o, r, s, a, c, l;
            try {
                if (t) {
                    n = t.split(e.StandardProtocolConstants.MESSAGE_DELIM);
                    do
                        switch (i = n.shift(),
                        o = i.charCodeAt(0)) {
                        case e.StandardProtocolConstants.INITIAL_TOPIC_LOAD:
                        case e.StandardProtocolConstants.DELTA:
                            r = i.split(e.StandardProtocolConstants.RECORD_DELIM),
                            s = r[0].split(e.StandardProtocolConstants.FIELD_DELIM),
                            a = s.shift(),
                            c = a.substr(1, a.length),
                            l = i.substr(r[0].length + 1),
                            null !== this._messageDispatcher && this._messageDispatcher.dispatchEvent(new e.ReaditMessageEvent(e.ReaditMessageEvent.MESSAGE_RECEIVED,new e.ReaditMessage(String(o),c,l,s)));
                            break;
                        case e.StandardProtocolConstants.CLIENT_ABORT:
                        case e.StandardProtocolConstants.CLIENT_CLOSE:
                            this.connectionFailed("Connection close/abort message type sent from publisher. Message type: " + o);
                            break;
                        default:
                            this.log("Unrecognised message type sent from publisher: " + o)
                        }
                    while (n.length)
                }
            } catch (u) {
                this.log(u.toString())
            }
        }
        ,
        i.prototype.log = function(t) {
            e.ReadItLog.Log(this + " -> " + t)
        }
        ,
        i.prototype.connectionFailed = function(e) {
            this.log("native app push connection (" + this._connectionDetails + ") failed - " + e)
        }
        ,
        i.prototype.dispose = function() {
            this.close()
        }
        ,
        i.AppApiModuleContainer = o("AppApiModule"),
        i
    }
    )(i),
    e.NativeAppTransportMethod = n
}
)(readit || (readit = {})),
(function(e) {
    var t = (function() {
        function e() {
            this.showUserBalance = !0
        }
        return e.SessionPreferencesGUID = "BalancePreferences",
        e
    }
    )();
    e.BalancePreferences = t
}
)(ns_gen5_util || (ns_gen5_util = {})),
(function(e) {
    var t = readit.StandardProtocolConstants
      , n = ns_gen5_events.BalanceModelEvent
      , i = ns_gen5_config.PushedConfigPropertyChangeEvent
      , o = ns_gen5_data.PrivateSubscriptionManagerEvent
      , r = ns_gen5_events.EventDispatcher
      , s = e.MathUtil
      , a = ns_gen5_net.Loader
      , c = ns_gen5_net.LoaderEvent
      , l = ns_gen5_events.Event365
      , u = ns_gen5_net.URLVariables
      , d = e.InfoReporter
      , h = "SPTBK"
      , p = "rn"
      , _ = "/balancedataapi/pullbalance"
      , g = (function(r) {
        function g() {
            var t = r.call(this) || this;
            return t._subscriptionsInitializedDelegate = null,
            t._pushBalanceFlagChangeDelegate = null,
            t._pushBalanceReceivedDelegate = null,
            t._pullBalanceReceivedDelegate = null,
            t._pullBalanceErrorDelegate = null,
            t.balanceModelDelegates = [],
            t._subscriptionsInitializedDelegate = new e.Delegate(t,t.loadBalance),
            t._pushBalanceFlagChangeDelegate = new e.Delegate(t,t.pushBalanceFlagChangeHandler),
            t._pushBalanceReceivedDelegate = new e.Delegate(t,t.pushBalanceReceivedHandler),
            t._pullBalanceReceivedDelegate = new e.Delegate(t,t.pullBalanceReceivedHandler),
            t._pullBalanceErrorDelegate = new e.Delegate(t,t.pullBalanceErrorHandler),
            t.isItalianDomain = ns_gen5_util_user.RegisteredCountry.IsItalyDomain,
            t
        }
        return __extends(g, r),
        g.prototype.load = function(e) {
            this._sessionToken = e,
            Locator.pushedConfig.getArePropertiesInitialised() ? this.loadBalance() : Locator.pushedConfig.addEventListener(i.PROPERTIES_INITIALISED, this._subscriptionsInitializedDelegate)
        }
        ,
        g.prototype.loadBalance = function() {
            this.pushBalanceEnabled = Locator.pushedConfig.getIsPushBalanceEnabled(),
            this.isItalianDomain && this.loadPullBalance(),
            this.loadPushBalance(),
            Locator.pushedConfig.addEventListener(i.PUSH_BALANCE_ENABLED_AVAILABLE, this._pushBalanceFlagChangeDelegate)
        }
        ,
        g.prototype.refreshBalance = function() {
            this._sessionToken && (this.pushBalanceEnabled && !this.isItalianDomain || this.loadPullBalance(),
            this.pushBalanceEnabled && this.refreshPushBalance())
        }
        ,
        g.prototype.calculateTotalBalance = function(e, t) {
            void 0 === t && (t = !1),
            this.pushBalanceEnabled || t || (this.totalBalance = (s.StringToNumber(this.totalBalance) - this.formatCurrencyNoCulture(e.toString())).toFixed(2),
            this.dispatchEvent(new l(n.BALANCEMODEL_UPDATE_EVENT)))
        }
        ,
        g.prototype.updateWithdrawableBalance = function(e, t) {
            if (void 0 === t && (t = !1),
            !this.pushBalanceEnabled && !t) {
                var i = s.StringToNumber(this.withdrableBalance) - this.formatCurrencyNoCulture(e.toString());
                0 > i && s.StringToNumber(this.bonusBalance) > 0 ? (this.withdrableBalance = "0.00",
                this.updateBonusBalance((-1 * i).toFixed(2))) : this.withdrableBalance = i.toFixed(2),
                this.dispatchEvent(new l(n.BALANCEMODEL_UPDATE_EVENT))
            }
        }
        ,
        g.prototype.updateBonusBalance = function(e) {
            this.pushBalanceEnabled || (this.bonusBalance = (s.StringToNumber(this.bonusBalance) - this.formatCurrencyNoCulture(e.toString())).toFixed(2),
            this.dispatchEvent(new l(n.BALANCEMODEL_UPDATE_EVENT)))
        }
        ,
        g.prototype.formatCurrencyNoCulture = function(e) {
            return e ? s.StringToNumber(e.split(Locator.user.currencyDecimalSeparator).join(".")) : 0
        }
        ,
        g.prototype.pushBalanceFlagChangeHandler = function() {
            this.pushBalanceEnabled = Locator.pushedConfig.getIsPushBalanceEnabled(),
            this.pushBalanceEnabled ? this.loadPushBalance() : (Locator.privateSubscriptionManager.removeEventListener(o.BALANCE_RECEIVED, this._pushBalanceReceivedDelegate),
            this._balanceListenerAdded = !1)
        }
        ,
        g.prototype.pushBalanceReceivedHandler = function(t) {
            d.Trace(e.InfoReporterGroups.PUSH_MESSAGE_CONNECTION_ENTRY, "Push balance received: " + t.message),
            "D" == t.message.charAt(0) ? this.loadPushBalance() : this.pushBalanceEnabled = this.updateBalanceInfo(t.message)
        }
        ,
        g.prototype.pullBalanceReceivedHandler = function(t) {
            d.Trace(e.InfoReporterGroups.PUSH_MESSAGE_CONNECTION_ENTRY, "Pull balance received: " + t.data),
            this._urlLoader.removeEventListener(c.COMPLETE, this._pullBalanceReceivedDelegate),
            this._urlLoader.removeEventListener(c.ERROR, this._pullBalanceErrorDelegate),
            this.updateBalanceInfo(t.data)
        }
        ,
        g.prototype.pullBalanceErrorHandler = function() {
            this._urlLoader.removeEventListener(c.COMPLETE, this._pullBalanceReceivedDelegate),
            this._urlLoader.removeEventListener(c.ERROR, this._pullBalanceErrorDelegate)
        }
        ,
        g.prototype.loadPushBalance = function() {
            if (this.pushBalanceEnabled) {
                this._balanceListenerAdded || (Locator.privateSubscriptionManager.addEventListener(o.BALANCE_RECEIVED, this._pushBalanceReceivedDelegate),
                this._balanceListenerAdded = !0);
                var e = "getBalance" + t.RECORD_DELIM + this._sessionToken + t.FIELD_DELIM + h;
                Locator.privateSubscriptionManager.send("command", e)
            }
        }
        ,
        g.prototype.loadPullBalance = function() {
            this._urlLoader || (this._urlLoader = new a);
            var t = new u;
            t.addPair(p, (new Date).getTime() + ""),
            t.addPair("y", e.B365SimpleEncrypt.encrypt(s.StringToNumber(Locator.manifestManager.getBuildVersion()).toString(16))),
            this._urlLoader.addEventListener(c.COMPLETE, this._pullBalanceReceivedDelegate),
            this._urlLoader.addEventListener(c.ERROR, this._pullBalanceErrorDelegate),
            this._urlLoader.load(_, {
                method: a.GET,
                urlVariables: t
            })
        }
        ,
        g.prototype.refreshPushBalance = function() {
            if (this.pushBalanceEnabled) {
                this.loadPushBalance();
                var e = "refresh" + t.RECORD_DELIM + this._sessionToken + t.FIELD_DELIM + h;
                Locator.privateSubscriptionManager.send("command", e)
            }
        }
        ,
        g.prototype.updateBalanceInfo = function(e) {
            var t = e.split("$")
              , i = !1
              , o = t.length;
            return o > 1 && t[1].length > 0 ? (this.totalBalance = s.StringToNumber(t[1]).toFixed(2),
            this.withdrableBalance = s.StringToNumber(t[2]).toFixed(2),
            this.bonusBalance = s.StringToNumber(t[3]).toFixed(2),
            this.stakeRollover = s.StringToNumber(t[4]).toFixed(2),
            this.stakeRolloverRequirement = s.StringToNumber(t[5]).toFixed(2),
            this.depositRollover = s.StringToNumber(t[6]).toFixed(2),
            this.depositRolloverRequirement = s.StringToNumber(t[7]).toFixed(2),
            this.italianSportsWithdrableBalance = s.StringToNumber(t[8]).toFixed(2),
            this.italianSportsNonWithdrableBalance = s.StringToNumber(t[9]).toFixed(2),
            11 == o && (this.gamingBalance = s.StringToNumber(t[10]).toFixed(2)),
            this.isItalianDomain && o > 11 && "1" === t[11] && this.refreshBalance(),
            this.dispatchEvent(new l(n.BALANCEMODEL_UPDATE_EVENT)),
            i = !0) : this.pushBalanceEnabled = !1,
            i
        }
        ,
        g.prototype.registerBalanceItem = function(e) {
            this.balanceModelDelegates.push(e)
        }
        ,
        g.prototype.unregisterBalanceItem = function(e) {
            var t = this.balanceModelDelegates.indexOf(e);
            t > -1 && this.balanceModelDelegates.splice(t, 1)
        }
        ,
        g.prototype.updateBalanceItemsVisibility = function(e) {
            var t, n, i, o, r;
            if (e)
                for (t = 0,
                n = this.balanceModelDelegates; t < n.length; t++)
                    i = n[t],
                    i.hideBalanceItem();
            else
                for (o = 0,
                r = this.balanceModelDelegates; o < r.length; o++)
                    i = r[o],
                    i.showBalanceItem()
        }
        ,
        g
    }
    )(r);
    e.BalanceModel = g
}
)(ns_gen5_util || (ns_gen5_util = {})),
(function(e) {
    var t = (function() {
        function e() {
            this.betQueue = []
        }
        return e.prototype.restoreSlip = function() {
            this.betslipWebDelegate.restoreSlip && this.betslipWebDelegate.restoreSlip()
        }
        ,
        e.prototype.setSlipBoundingClientRect = function(e) {
            this.clientRect = e
        }
        ,
        e.prototype.getSlipBoundingClientRect = function() {
            return this.clientRect
        }
        ,
        e.prototype.getRegisteredBetslip = function() {
            return this.betslipWebDelegate
        }
        ,
        e.prototype.registerBetslip = function(e, t) {
            if (this.betslipWebDelegate = e,
            this.betslipUI = t,
            this.betslipWebModule && this.betslipWebDelegate.setWebModuleDelegate && (this.betslipWebDelegate.setWebModuleDelegate(this.betslipWebModule),
            this.betslipWebModule = null),
            this.betQueue.length > 0) {
                for (var n = 0, i = this.betQueue.length; i > n; n++)
                    this.betslipWebDelegate.addBet(this.betQueue[n]);
                this.betQueue = []
            }
        }
        ,
        e.prototype.registerBetslipWebModule = function(e) {
            this.betslipWebDelegate && this.betslipWebDelegate.setWebModuleDelegate ? this.betslipWebDelegate.setWebModuleDelegate(e) : this.betslipWebModule || (this.betslipWebModule = e)
        }
        ,
        e.prototype.addBet = function(e, t) {
            var n, i, o, r, s;
            $assert && $assert(e, "No bet item provided to betslip"),
            e && (Locator.user.isLoggedIn && this.editBetController && this.editBetController.addSelectionsEnabled && !this.isBetslipOnRHS() ? (n = t.stem,
            i = this.editBetController.editBetModel,
            o = n.data,
            r = "BS" + this.getFixtureId(n) + "-" + o.ID,
            i.canAddSelection(e.uid) && i.addBet({
                item: e,
                Target: t
            }, r)) : (s = {
                item: e,
                Target: t
            },
            this.betslipWebDelegate ? this.betslipWebDelegate.addBet(s) : this.betQueue.push(s)))
        }
        ,
        e.prototype.deleteBet = function(e) {
            if ($assert && $assert(e, "No bet item provided to betslip"),
            e)
                if (Locator.user.isLoggedIn && this.editBetController && this.editBetController.addSelectionsEnabled && !this.isBetslipOnRHS()) {
                    var t = this.editBetController.editBetModel;
                    t.removeBet(e.uid)
                } else
                    this.betslipWebDelegate.deleteBet({
                        betItem: e
                    })
        }
        ,
        e.prototype.deleteAllBets = function() {
            this.betslipWebDelegate.deleteAllBets()
        }
        ,
        e.prototype.betCountChanged = function() {
            this.betslipWebDelegate && this.betslipWebDelegate.betCountChanged()
        }
        ,
        e.prototype.isSelected = function(e) {
            return $assert && $assert(e, "No id provided for bet check"),
            this.editBetController && this.editBetController.addSelectionsEnabled && !this.isBetslipOnRHS() ? this.editBetController.editBetModel.addState.itemAdded(e) : this.betslipWebDelegate ? this.betslipWebDelegate.isSelected({
                Id: e
            }) : !1
        }
        ,
        e.prototype.betslipModuleSupported = function() {
            return this.betslipWebDelegate.allBetsSupported ? this.betslipWebDelegate.allBetsSupported() : !1
        }
        ,
        e.prototype.getBetCount = function() {
            return this.betslipWebDelegate.getBetCount()
        }
        ,
        e.prototype.setBetguid = function(e) {
            this.betslipWebDelegate.setBetguid(e)
        }
        ,
        e.prototype.getBetguid = function() {
            return this.betslipWebDelegate.getBetguid()
        }
        ,
        e.prototype.showMyBets = function() {
            return this.betslipUI.showMyBets()
        }
        ,
        e.prototype.showBetslip = function() {
            return this.betslipUI.showBetslip()
        }
        ,
        e.prototype.isBetslipOnRHS = function() {
            return !1
        }
        ,
        e.prototype.setBetslipModuleActive = function() {
            this.betslipModuleActive = !0
        }
        ,
        e.prototype.setBetslipModuleInactive = function() {
            this.betslipModuleActive = !1
        }
        ,
        e.prototype.getBetslipModuleActive = function() {
            return this.betslipModuleActive
        }
        ,
        e.prototype.cancelEditBet = function() {
            this.myBetsManager.cancelEditBet()
        }
        ,
        e.prototype.isSelectedEditBet = function(e) {
            if ($assert && $assert(e, "No id provided for edit bet check"),
            e) {
                if (this.editBetController && !this.isBetslipOnRHS())
                    return this.editBetController.isSelectedEditBet(e);
                if (this.betslipWebDelegate)
                    return this.betslipWebDelegate.isSelectedEditBet({
                        Id: e
                    })
            }
            return !1
        }
        ,
        e.prototype.getTaxConfig = function() {
            return this.betslipWebDelegate ? this.betslipWebDelegate.getTaxConfig() : ""
        }
        ,
        e.prototype.sabswaOnBetRemoved = function() {
            this.betslipWebDelegate && this.betslipWebDelegate.sabswaOnBetRemoved && this.betslipWebDelegate.sabswaOnBetRemoved()
        }
        ,
        e.prototype.getFixtureId = function(e) {
            var t;
            do {
                if (t = e.data.FI)
                    break;
                e = e.parent
            } while (e && e.data);return t
        }
        ,
        e
    }
    )();
    e.BetSlipManager = t
}
)(ns_betslip || (ns_betslip = {})),
(function(e) {
    var t = (function() {
        function e() {}
        return e.SetConstructOnBetItem = function(e) {
            var t, n = "#", i = "x", o = "|", r = "pt=", s = "o=", a = "f=", c = "fp=", l = "so=", u = "c=", d = "ln=", h = "mt=", p = "atc=", _ = "TP=", g = "Inc=", f = "BOdds=", E = "oto=", m = "pom=Y", v = r + e.partType + n;
            return v += s + (e.baseOdds && e.baseOdds.length > 0 ? e.baseOdds : e.odds) + n,
            v += a + e.fixtureID + n,
            v += c + e.participantID + n,
            v += l + "" + n,
            v += u + e.classificationID + n,
            v += e.handicap.length > 0 ? d + (e.baseHandicap && e.baseHandicap.length > 0 ? e.baseHandicap : e.handicap) + n : "",
            v += e.baseHandicap && e.baseHandicap.length > 0 ? g + e.handicap + n : "",
            v += e.baseHandicap && e.baseHandicap.length > 0 ? f + e.odds + n : "",
            e.betsource && (v += h + e.betsource + n),
            v += "id=" + e.uid + (e.subscribe ? "Y" : "N") + n,
            e.oddsTypeOverride && (v += E + e.oddsTypeOverride.toString() + n),
            t = e.oddsTypeOverride ? i + e.oddsTypeOverride.toString() + i + e.decimalPlaces : "",
            e.subscribe && (v += "" + o + _ + "BS" + e.fixtureID + "-" + e.participantID + t + n),
            e.pom && "1" === e.pom && (v += e.subscribe ? m + n : o + m + n),
            "S" == e.partType && (v += "pid=" + e.playerID + n + "mid=" + e.matchId + n),
            v += e.toteCombination ? p + e.toteCombination + n : "",
            e.constructString = v,
            e
        }
        ,
        e
    }
    )();
    e.BetConstructor = t
}
)(ns_betslip || (ns_betslip = {})),
(function(e) {
    var t = (function(e) {
        function t(t) {
            return e.call(this, t) || this
        }
        return __extends(t, e),
        t.prototype.toString = function() {
            return "[BetSlipEvent type=" + this.type + "]"
        }
        ,
        t.PARTICIPANT_REMOVED_FROM_BETSLIP = "participantRemovedFromBetSlip",
        t.PARTICIPANT_ADDED_TO_BETSLIP = "participantAddedToBetslip",
        t.TOTE_COMBINATION_CHANGED = "totecombinationchanged",
        t.BETCALL_CONNECTED = "betCallConnected",
        t
    }
    )(ns_gen5_events.Event365);
    e.BetSlipEvent = t
}
)(ns_betslip || (ns_betslip = {})),
(function(e) {
    var t, n, i = ns_gen5_events.Event365, o = ns_gen5_util.Delegate, r = readit.ReaditClient, s = readit.HttpTransportMethod, a = readit.WebsocketTransportMethod, c = readit.NativeAppTransportMethod, l = readit.ReaditConnectionEvent, u = readit.ReaditMessageEvent, d = e.DataUtil, h = e.StreamDataProcessorEvent, p = ns_gen5_util.Timer, _ = ns_gen5_util.TimerEvent, g = ns_gen5_events.ApplicationEvent, f = ns_gen5_ui.Application, E = ns_gen5_util.InfoReporter, m = ns_gen5_util.InfoReporterGroups, v = {
        0: null,
        2: s,
        3: a,
        4: c
    }, S = 1e4, C = 9900, y = (function(e) {
        function a() {
            var t = e.call(this) || this;
            return t._retryInterval = 0,
            t._connectedPublisher = null,
            t._reconnected = !1,
            t._idleTime = 8e4,
            t._idleTimerID = -1,
            t._reConnectTimer = null,
            t._connectionAttempts = 0,
            t._applicaitonUnloading = !1,
            t._subscriptionTimeoutTimer = null,
            t.canDebouncePVCN = !0,
            t.tokenValidation = !0,
            t.storageId = null,
            t._serverConnection = null,
            t._pendingConnect = !1,
            t._initialized = !1,
            t._subscriptionTimeoutTopic = null,
            t._subscriptionQueue = [],
            t._sendQueue = [],
            t.delegate_serverConnectHandler = new o(t,t._serverConnectHandler),
            t.delegate_serverDataHandler = new o(t,t._serverDataHandler),
            t.delegate_applicationUnloadingHandler = new o(t,t._applicationUnloadingHandler),
            t.delegate_connectionFailedInvalidSessionHandler = new o(t,t._connectionFailedInvalidSessionHandler),
            t.callback_idleTimerHandler = function() {
                return t._idleTimerHandler()
            }
            ,
            t
        }
        return __extends(a, e),
        a.prototype.getConnectionDetails = function() {
            return Locator.config.getConnectionDetails()
        }
        ,
        a.prototype.setNst = function(e, i) {
            t = e,
            n = i
        }
        ,
        a.prototype.connect = function(e, i) {
            var o, a, c, l, u, d;
            if (t = e,
            n = i,
            this._initialized || this._initialize(),
            !this._pendingConnect) {
                for (this.closeConnection(this._serverConnection),
                this._pendingConnect = !0,
                o = this._serverConnection = new r,
                o.storageId = this.storageId,
                o.tokenValidation = this.tokenValidation,
                o.connectionListCycles = 1,
                a = (this.getCurrentTopics && this.getCurrentTopics() || []).join(","),
                c = 0,
                l = this.getConnectionDetails(); c < l.length; c++)
                    u = l[c],
                    d = u.clone(),
                    d.transportMethod = v[d.transportMethodId] || s,
                    d.defaultTopic += 0 === a.length ? "" : "," + a,
                    o.addConnectionAttempt(d);
                this.openConnection(o)
            }
        }
        ,
        a.prototype.close = function(e) {
            this.closeConnection(this._serverConnection, e)
        }
        ,
        a.prototype.openConnection = function(e) {
            e && (e.addEventListener(l.CONNECTED, this.delegate_serverConnectHandler),
            e.addEventListener(l.DISCONNECTED, this.delegate_serverConnectHandler),
            e.addEventListener(l.CONNECTION_FAILED, this.delegate_serverConnectHandler),
            e.addEventListener(l.CONNECTION_FAILED_INVALID_SESSION, this.delegate_connectionFailedInvalidSessionHandler),
            e.addEventListener(u.MESSAGE_RECEIVED, this.delegate_serverDataHandler),
            e.connect(t, n))
        }
        ,
        a.prototype.closeConnection = function(e, t) {
            if (e) {
                e.hasEventListener(l.CONNECTED) && (e.removeEventListener(l.CONNECTED, this.delegate_serverConnectHandler),
                e.removeEventListener(l.DISCONNECTED, this.delegate_serverConnectHandler),
                e.removeEventListener(l.CONNECTION_FAILED, this.delegate_serverConnectHandler),
                e.removeEventListener(l.CONNECTION_FAILED_INVALID_SESSION, this.delegate_connectionFailedInvalidSessionHandler),
                e.removeEventListener(u.MESSAGE_RECEIVED, this.delegate_serverDataHandler));
                try {
                    e.close(t)
                } catch (n) {}
            }
        }
        ,
        a.prototype.subscribe = function(e) {
            var i, r;
            this._reConnectTimer && this._reConnectTimer.active && (this._reConnectTimer.stop(),
            this.connect(t, n)),
            this._serverConnection && this._serverConnection.getConnected() ? e && (e.length > C ? (i = e.indexOf(",", e.length / 2),
            this.subscribe(e.slice(0, i)),
            this.subscribe(e.slice(i + 1))) : (this._serverConnection.subscribe(e),
            this._subscriptionTimeoutTimer || (r = e.split(",")[0],
            this._subscriptionTimeoutTimer = new p(S),
            this._subscriptionTimeoutTimer.addEventListener(_.COMPLETE, new o(this,this._subscriptionTimeoutHandler)),
            this._subscriptionTimeoutTimer.start(),
            this._subscriptionTimeoutTopic = r))) : this._subscriptionQueue.push(e)
        }
        ,
        a.prototype.unsubscribe = function(e) {
            var t, n = this._subscriptionQueue;
            n.length && (t = n.indexOf(e)) > -1 && n.splice(t, 1),
            this._serverConnection && this._serverConnection.getConnected() && this._serverConnection.unsubscribe(e)
        }
        ,
        a.prototype.send = function(e, t) {
            this._serverConnection && this._serverConnection.getConnected() ? this._serverConnection.send(e, t) : this._sendQueue.push({
                topic: e,
                message: t
            })
        }
        ,
        a.prototype.swapSubscriptions = function(e, t) {
            if (this._serverConnection.getConnected()) {
                if (this._serverConnection.swapSubscription(e, t),
                !this._subscriptionTimeoutTimer && e) {
                    var n = e.split(",")[0];
                    this._subscriptionTimeoutTimer = new p(S),
                    this._subscriptionTimeoutTimer.addEventListener(_.COMPLETE, new o(this,this._subscriptionTimeoutHandler)),
                    this._subscriptionTimeoutTimer.start(),
                    this._subscriptionTimeoutTopic = n
                }
            } else
                this._subscriptionQueue.push(e)
        }
        ,
        a.prototype._initialize = function() {
            f.currentApplication.addEventListener(g.UNLOADING, this.delegate_applicationUnloadingHandler),
            this._initialized = !0
        }
        ,
        a.prototype._resetIdleTimer = function() {
            clearTimeout(this._idleTimerID),
            this._idleTimerID = setTimeout(this.callback_idleTimerHandler, this._idleTime)
        }
        ,
        a.prototype._processSubscriptionQueue = function() {
            if (this._subscriptionQueue.length > 0)
                try {
                    this._serverConnection.subscribe(this._subscriptionQueue.join(",")),
                    this._subscriptionQueue.length = 0
                } catch (e) {
                    ErrorReporter.Trace(this, e)
                }
            for (; this._sendQueue.length > 0; )
                this.send(this._sendQueue[0].topic, this._sendQueue.shift().message)
        }
        ,
        a.prototype._connectionFailedInvalidSessionHandler = function() {
            E.Trace(m.PUSH_MESSAGE_CONNECTION_ENTRY, "Failed on invalid session"),
            this.close(),
            this.dispatchEvent(new h(h.CONNECTION_FAILED_INVALID_SESSION))
        }
        ,
        a.prototype._serverConnectHandler = function(e) {
            var t, n, i, r, s, c, l, u, d;
            if (this._pendingConnect = !1,
            this._serverConnection.getConnected()) {
                if (this._retryInterval = 0,
                this._connectedPublisher = this._serverConnection.getConnectionID(),
                this._connectedPublisher = this._connectedPublisher.substring(0, this._connectedPublisher.indexOf("-")),
                t = this._serverConnection.getCurrentConnectionDetails(),
                this.dispatchEvent(new h(h.CONNECTED,t)),
                this._reconnected ? (this._subscriptionQueue.length = 0,
                this.dispatchEvent(new h(h.SERVER_RECONNECT))) : this._reconnected = !0,
                this._resetIdleTimer(),
                this._processSubscriptionQueue(),
                !a.WebsocketConnectionEstablished && 3 === t.transportMethodId) {
                    for (a.WebsocketConnectionEstablished = !0,
                    n = Locator.config.getConnectionDetails(),
                    i = 0,
                    r = n; i < r.length; i++)
                        s = r[i],
                        3 === s.transportMethodId && Locator.config.setConnectionDetails([s]);
                    for (c = Locator.config.getPrivateConnectionDetails(),
                    l = 0,
                    u = c; l < u.length; l++)
                        s = u[l],
                        3 === s.transportMethodId && Locator.config.setPrivateConnectionDetails([s])
                }
            } else
                this._connectedPublisher = "not connected.",
                this._serverConnection.logPushStatus(readit.pushConnectionStatusEnum.ALLRETRYSFAILED, this._serverConnection.getCurrentConnectionHost()),
                d = void 0,
                this._reconnected ? this.dispatchEvent(new h(h.RECONNECT_FAILED,this._connectionAttempts)) : (d = new h(h.CONNECTION_FAILED,this._connectionAttempts),
                this.dispatchEvent(d),
                d.retry = !0,
                d.retry || (this._subscriptionQueue.length = 0)),
                (this._reconnected || d && d.retry) && (this._applicaitonUnloading || (this._retryInterval = 5e3 + 1e4 * Math.random() | 0,
                this._reConnectTimer ? this._reConnectTimer.time = this._retryInterval : (this._reConnectTimer = new p(this._retryInterval),
                this._reConnectTimer.addEventListener(_.COMPLETE, new o(this,this._reConnectHandler))),
                this._reConnectTimer.reset(),
                this._reConnectTimer.start()),
                this._idleTimerID > -1 && clearTimeout(this._idleTimerID)),
                this._connectionAttempts++
        }
        ,
        a.prototype._applicationUnloadingHandler = function() {
            this._applicaitonUnloading = !0
        }
        ,
        a.prototype._serverDataHandler = function(e) {
            var t = this;
            Locator.validationManager.callLater((function() {
                return t._serverDataHandler_later(e)
            }
            )),
            Number(e.message.messageType) == readit.StandardProtocolConstants.INITIAL_TOPIC_LOAD && this.canDebouncePVCN && (this.canDebouncePVCN = !1,
            setTimeout((function() {
                t.canDebouncePVCN = !0,
                Locator.validationManager.processValidationCycleNow()
            }
            ), 0))
        }
        ,
        a.prototype._serverDataHandler_later = function(e) {
            var t, n, o, r, s, a, c, l, u, p, _, g, f, v = this;
            for (this._resetIdleTimer(),
            t = e.message,
            n = t.getMessage(),
            Number(t.messageType) == readit.StandardProtocolConstants.INITIAL_TOPIC_LOAD ? (o = t.getTopic(),
            e.currentTarget === this._serverConnection && this._subscriptionTimeoutTopic === o && this._resetSubscriptionTimeoutTimer()) : (o = t.getBaseTopic(),
            this._serverConnection.logPushStatus(readit.pushConnectionStatusEnum.DELTA, this._serverConnection.getCurrentConnectionHost())),
            r = !!Locator.treeLookup.getReference(o),
            s = Number(t.messageType) == readit.StandardProtocolConstants.INITIAL_TOPIC_LOAD && r,
            a = s ? d.ParseMergeMessage(n, o) : d.ParseMessage(n, o),
            c = a.length,
            l = 0; c > l; l++)
                u = a[l],
                s && (o = u.topic),
                p = void 0,
                u.info && (_ = u.info,
                g = _.TI,
                g && Locator.timeManager.setServerTime(g),
                _ && o && (f = Locator.treeLookup.getReference(o),
                f && f.dispatchEvent(new h(h.INFO_UPDATED,_))),
                "EMPTY" == o && _.TO && (E.Trace(m.EMPTY_TOPIC_ENTRY, "Empty topic " + _.TO),
                o = _.TO,
                this._subscriptionTimeoutTopic && (this._subscriptionTimeoutTopic === o || this._subscriptionTimeoutTopic.lastIndexOf("/") > -1 && this._subscriptionTimeoutTopic.substring(this._subscriptionTimeoutTopic.lastIndexOf("/") + 1) == o) && this._resetSubscriptionTimeoutTimer(),
                p = Locator.treeLookup.getReference(o),
                p && p.remove()),
                this.dispatchEvent(new h(h.INFO_UPDATED,_))),
                d.ProcessStemChanges(u, o, t.getTopic(), s, (function(e) {
                    return v.dispatchEvent(new i(e))
                }
                ))
        }
        ,
        a.prototype._resetSubscriptionTimeoutTimer = function() {
            this._subscriptionTimeoutTimer.stop(),
            this._subscriptionTimeoutTimer = null,
            this._subscriptionTimeoutTopic = null
        }
        ,
        a.prototype._idleTimerHandler = function() {
            this._serverConnection.getTransportSuspended() || (this.close(),
            this.connect(t, n))
        }
        ,
        a.prototype._reConnectHandler = function() {
            this.connect(t, n)
        }
        ,
        a.prototype._subscriptionTimeoutHandler = function() {
            this.closeConnection(this._serverConnection),
            this.connect(t, n)
        }
        ,
        a.WebsocketConnectionEstablished = !1,
        a
    }
    )(ns_gen5_events.EventDispatcher);
    e.StreamDataProcessor = y
}
)(ns_gen5_data || (ns_gen5_data = {})),
(function(e) {
    var t = e.StreamDataProcessor
      , n = e.PrivateStreamDataProcessorEvent
      , i = (function(e) {
        function t() {
            var t = e.call(this) || this;
            return t.storageId = "PrivateConnectionDetails",
            t
        }
        return __extends(t, e),
        t.prototype.getConnectionDetails = function() {
            return Locator.config.getPrivateConnectionDetails()
        }
        ,
        t.prototype._serverDataHandler_later = function(t) {
            var i = t.message.topic
              , o = i.substr(i.lastIndexOf("_") + 1);
            switch (o) {
            case "BAL":
                this.dispatchEvent(new n(n.BALANCE_RECEIVED,t.message));
                break;
            case "MSG":
                this.dispatchEvent(new n(n.PUSH_MESSAGE_RECEIVED,t.message));
                break;
            case "D23":
                this.dispatchEvent(new n(n.D23_MESSAGE_RECEIVED,t.message));
                break;
            default:
                e.prototype._serverDataHandler_later.call(this, t)
            }
        }
        ,
        t
    }
    )(t);
    e.PrivateStreamDataProcessor = i
}
)(ns_gen5_data || (ns_gen5_data = {})),
Locator = (function() {
    function e() {}
    return e.treeLookup = new ns_gen5_data.TreeLookup,
    e.subscriptionManager = (function() {
        var e = new ns_gen5_data.SubscriptionManager;
        return e.setStreamDataProcessor(new ns_gen5_data.StreamDataProcessor),
        e.setPullDataProcessor(new ns_gen5_data.PullDataProcessor),
        e
    }
    )(),
    e.privateSubscriptionManager = (function() {
        var e = new ns_gen5_data.PrivateSubscriptionManager;
        return e.setStreamDataProcessor(new ns_gen5_data.PrivateStreamDataProcessor),
        e
    }
    )(),
    e.validationManager = new ns_gen5_validation.ValidationManager,
    e.betSlipManager = new ns_betslip.BetSlipManager,
    e.timeManager = new ns_gen5_util.TimeManager,
    e.manifestManager = new ns_gen5_util.ManifestManager,
    e.user = new ns_gen5_data.User,
    e.languageResource = new ns_gen5_language.Resource,
    e.pushedConfig = new ns_gen5_config.PushedConfigManager,
    e.inplayEvents = new ns_gen5_events.EventDispatcher,
    e.participantEvents = new ns_gen5_events.EventDispatcher,
    e.otsReport = new ns_gen5_util.OTSReport,
    e.serverPreferenceManager = new ns_gen5_util.ServerPreferenceManager,
    e.pageRender = new ns_gen5_util.PageRender,
    e
}
)(),
(function(e) {
    var t = (function() {
        function e() {}
        return e.ApplyCurrencyDelimiter = function(e, t) {
            var n, i, o;
            return t ? "s" == t ? t : (n = new RegExp("\\" + ("." === e ? "," : "."),"g"),
            i = t.replace(n, e),
            -1 == i.indexOf(e) ? i += e + "00" : (o = i.indexOf(e),
            o == i.length - 2 ? i += "0" : o == i.length - 1 && (i += "00")),
            i) : ""
        }
        ,
        e.ApplyGroupSeparator = function(t) {
            if (!t)
                return "";
            if (!e.GroupSeparator)
                return t;
            var n = +e.ApplyCurrencyDelimiter(".", t);
            return Math.abs(n) < e.MinSepValue ? t : (e.REMOVE_GROUP_SEPARATOR_REGEX = e.REMOVE_GROUP_SEPARATOR_REGEX || new RegExp("\\" + e.GroupSeparator,"g"),
            t = t.replace(e.REMOVE_GROUP_SEPARATOR_REGEX, ""),
            t = t.replace(e.GROUP_SEPARATOR_REGEX, "$1" + e.GroupSeparator))
        }
        ,
        e.ApplyDelimiterAndGroupSeparator = function(t) {
            var n = e.ApplyCurrencyDelimiter(Locator.user.currencyDecimalSeparator, t);
            return e.ApplyGroupSeparator(n)
        }
        ,
        e.ApplyCurrencySymbol = function(t) {
            var n = e.GetCurrencySymbol(t)
              , i = e.SpaceRequired ? e.WHITE_SPACE : "";
            return e.PrefixSymbol ? n + i + t : t + i + n
        }
        ,
        e.GetFormatRules = function(t) {
            var n, i;
            return void 0 === t && (t = ""),
            n = e.GetCurrencySymbol(t),
            i = e.SpaceRequired ? e.WHITE_SPACE : "",
            t = e.PrefixSymbol ? i + t : t + i,
            {
                formattedValue: t,
                currencySymbol: n,
                prefixSymbol: e.PrefixSymbol,
                spaceRequired: e.SpaceRequired,
                featureAvailable: !0
            }
        }
        ,
        e.ForceCorrectDecimalSeparator = function(e) {
            return e && -1 !== e.indexOf(".") ? e = e.split(".").join(Locator.user.currencyDecimalSeparator) : e
        }
        ,
        e.GetCurrencySymbol = function(t) {
            var n, i, o = e.Symbol;
            return e.PluralSymbol && (n = t,
            e.GroupSeparator && (e.REMOVE_GROUP_SEPARATOR_REGEX = e.REMOVE_GROUP_SEPARATOR_REGEX || new RegExp("\\" + e.GroupSeparator,"g"),
            n = t.replace(e.REMOVE_GROUP_SEPARATOR_REGEX, "")),
            i = +e.ApplyCurrencyDelimiter(".", n),
            1 != i && (o = e.PluralSymbol)),
            o
        }
        ,
        e.UnformatCurrencyValue = function(e) {
            var t, n, i;
            return e ? (n = e.indexOf("-") >= 0,
            i = Locator.user.currencyDecimalSeparator,
            e = e.replace(/[^\d,.]/g, ""),
            e[e.length - 3] === i ? (t = e.substring(e.length - 2),
            e = e.substring(0, e.length - 3)) : e[e.length - 2] === i && (t = e.substring(e.length - 1),
            e = e.substring(0, e.length - 2)),
            e = e.replace(/[,.]/g, ""),
            t && (e += "." + t),
            (n ? "-" : "") + e) : e
        }
        ,
        e.GROUP_SEPARATOR_REGEX = /(-?\d)(?=(\d{3})+(?!\d))/g,
        e.WHITE_SPACE = " ",
        e
    }
    )();
    e.CurrencyFormatter = t
}
)(ns_gen5_util || (ns_gen5_util = {})),
(function(e) {
    var t = (function() {
        function t() {
            this.stype = "",
            this.cmask = "",
            this.ctype = "",
            this.ttype = "",
            this.quickBetApplicable = !0
        }
        return t.prototype.updateItem = function() {
            e.BetConstructor.SetConstructOnBetItem(this)
        }
        ,
        t.prototype.getCastCode = function() {
            return "" + this.stype + this.cmask + this.ctype
        }
        ,
        t.prototype.key = function() {
            return this.uid ? this.uid.replace("Y", "").replace("N", "") : ""
        }
        ,
        t.prototype.toString = function() {
            return "[BetItem]"
        }
        ,
        t
    }
    )();
    e.BetItem = t
}
)(ns_betslip || (ns_betslip = {})),
ns_gen5_net.ModuleLoaderDefault.ModuleResourceLookup = window._websiteManifest ? window._websiteManifest.modulesInformation : {};
var RegisterCompiledAsset, GetCompiledAsset;
var cache = cache || {};
(function() {
    RegisterCompiledAsset = function(id, value) {
        id = id.toLowerCase();
        cache[id] = value;
    }
    ;
    GetCompiledAsset = function(id) {
        id = id.toLowerCase();
        return cache[id];
    }
    ;
}
)();
!function(e) {
    "use strict";
    function t(e, t) {
        function i(e) {
            return this && this.constructor === i ? (this._keys = [],
            this._values = [],
            this._itp = [],
            this.objectOnly = t,
            void (e && n.call(this, e))) : new i(e)
        }
        return e.constructor = i,
        i.prototype = e,
        i
    }
    function n(e) {
        this.add ? e.forEach(this.add, this) : e.forEach(function(e) {
            this.set(e[0], e[1])
        }, this)
    }
    function i(e) {
        if (this.has(e)) {
            this._keys.splice(y, 1),
            this._values.splice(y, 1);
            for (var t = 0, n = this._itp.length; n > t; t++) {
                var i = this._itp[t];
                y < i[0] && i[0]--
            }
        }
        return y > -1
    }
    function s(e) {
        return this.has(e) ? this._values[y] : void 0
    }
    function u(e, t) {
        if (this.objectOnly && t !== Object(t))
            throw new TypeError("Invalid value used as weak collection key");
        if (t != t || 0 === t)
            for (y = e.length; y-- && !k(e[y], t); )
                ;
        else
            y = e.indexOf(t);
        return y > -1
    }
    function a(e) {
        return u.call(this, this._values, e)
    }
    function h(e) {
        return u.call(this, this._keys, e)
    }
    function r(e, t) {
        return this.has(e) ? this._values[y] = t : this._values[this._keys.push(e) - 1] = t,
        this
    }
    function o(e) {
        return this.has(e) || this._values.push(e),
        this
    }
    function l() {
        (this._keys || 0).length = this._values.length = 0
    }
    function f() {
        return v(this._itp, this._keys)
    }
    function c() {
        return v(this._itp, this._values)
    }
    function d() {
        return v(this._itp, this._keys, this._values)
    }
    function p() {
        return v(this._itp, this._values, this._values)
    }
    function v(e, t, n) {
        var i = [0]
          , s = !1;
        return e.push(i),
        {
            next: function() {
                var u, a = i[0];
                return !s && a < t.length ? (u = n ? [t[a], n[a]] : t[a],
                i[0]++) : (s = !0,
                e.splice(e.indexOf(i), 1)),
                {
                    done: s,
                    value: u
                }
            }
        }
    }
    function _(e, t) {
        for (var n = this.entries(); ; ) {
            var i = n.next();
            if (i.done)
                break;
            e.call(t, i.value[1], i.value[0], this)
        }
    }
    var y, k = (Object.defineProperty,
    function(e, t) {
        return isNaN(e) ? isNaN(t) : e === t
    }
    );
    "undefined" == typeof WeakMap && (e.WeakMap = t({
        "delete": i,
        clear: l,
        get: s,
        has: h,
        set: r
    }, !0)),
    "undefined" != typeof Map && "function" == typeof (new Map).values && (new Map).values().next || (e.Map = t({
        "delete": i,
        has: h,
        get: s,
        set: r,
        keys: f,
        values: c,
        entries: d,
        forEach: _,
        clear: l
    })),
    "undefined" != typeof Set && "function" == typeof (new Set).values && (new Set).values().next || (e.Set = t({
        has: a,
        add: o,
        "delete": i,
        clear: l,
        keys: c,
        values: c,
        entries: p,
        forEach: _
    })),
    "undefined" == typeof WeakSet && (e.WeakSet = t({
        "delete": i,
        add: o,
        clear: l,
        has: a
    }, !0))
}("undefined" != typeof exports && "undefined" != typeof global ? global : window);
