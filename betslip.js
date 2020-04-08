function BetSlipDelegates(n) {
    this._bsContext = n
}

function BetSlipController(n, t) {
    function u() {
        setTimeout(function () {
            r._betslipContentHeight = null
        }, 100)
    }
    var r = this,
        i;
    this._bsInst = n;
    this._dlg = null;
    this._bsContext = t;
    this._delegates = new BetSlipDelegates(t);
    this._noStakeCount = 0;
    this._enhancedBetSlipTypeSelector = null;
    this._enhancedBetSlipOddsSelector = null;
    this._enhancedBetSlipPitcherSelector = null;
    this._enhancedBetSlipToteSelector = null;
    this._enhancedBetSlipIfBetSelector = null;
    this._enhancedBetSlipTeaserTypeSelector = null;
    this._enhancedBetSlipAusRaceBetTypeSelector = null;
    this._ausToteToolTipHtmlBuilder = null;
    this._enhancedBetSlipEachWayExtraSelector = null;
    this._currencyDisplayHelper = null;
    this._removeClickHandler = null;
    this._eachWayClickHandler = null;
    this._autoVoidClickHandler = null;
    this._freeBetClickHandler = null;
    this._noReservesClickHandler = null;
    this._pushConfigInitialisedEvent = "PUSH_CONFIG_PROPERTIES_INITIALISED";
    this._ausMultiplesAvailabilityChangedEvent = "IS_AUS_MULTIPLES_AVAILABLE";
    this._isAusMultiplesAvailable = !1;
    this._betslipContentHeight = null;
    this._prefixStyle = {};
    this._swipeDeleteController = null;
    this._isAustralianDomain = window.location.host.split(".").pop() == "au";
    this._enhancedBetSlipAnimations = new b365.Ui.Betslip.EnhancedBetSlipAnimations(this);
    this._stakeEntryTypes = {
        stakePad: 1,
        deviceKeyBoard: 2
    };
    this._stakeEntryType = null;
    this.complexMultiplesInfo = [];
    this.complexMultiplesNeedsRefresh = !0;
    this.complexMultiplesCombinationsInit = !0;
    this.totalsCalculator;
    this._multiplesCombinationLimit = 9;
    this._suspendSelections = function () {
        $(".bsSusp").parents(".bs-item-container").addClass("bsSusp").find(".bsSusp").removeClass("bsSusp")
    };
    this._instanceEventAttacher = new b365.Ui.Betslip.InstanceEventAttacher(this._bsInst, r);
    r._instanceEventAttacher.attach();
    new b365.Ui.Betslip.RestoreStateHandler(this._bsInst).handle();
    this._bsContext.SetupTruncated2dpPriceForReturnsCalc();
    this._isItalianDomain = window.location.host.split(".").pop() == "it";
    this._isItalyVirtuals = !!(window.sProps && window.sProps.v6 && window.sProps.v6.virtualSports);
    this._isAusDomain = window.location.host.split(".").pop() == "au";
    this._wrappingLength = this._isAusDomain ? 4 : 10;
    this._pushMarketsEnabled = !1;
    window.addEventListener("resize", u, !1);
    i = document.createElement("div");
    i.className = "bs-ContentOverlay";
    document.getElementById("betslipContainer").appendChild(i);
    i.addEventListener("touchstart", function (n) {
        n.preventDefault();
        n.stopPropagation()
    });
    i.addEventListener("touchmove", function (n) {
        n.preventDefault();
        n.stopPropagation()
    });
    i.addEventListener("touchend", function (n) {
        n.preventDefault();
        n.stopPropagation()
    });
    i.addEventListener("click", function (n) {
        n.preventDefault();
        n.stopPropagation()
    })
}

function clientViewport(n) {
    var t = window,
        i = document,
        r = i.documentElement,
        u = i.getElementsByTagName("body")[0],
        f = t.innerWidth || r.clientWidth || u.clientWidth,
        e = (n ? t.top.innerHeight : t.nnerHeight) || r.clientHeight || u.clientHeight;
    return {
        width: f,
        height: e
    }
}

function getBetslipWebModule() {
    return window.top.getBetslipFrame ? window.top.getBetslipFrame() : null
}

function initBetslip() {
    appLoadStatus = {
        premiumLoaded: !1,
        betslipAppLoaded: !1
    };
    window.bsApp = new BetslipApp;
    window.bsApp.init()
}
var _volatileElements, $get, $getElementsByClassName, __extends, bs, BetSlipShowConfirmationHandler, BetSlipPopupOverlay;
Sys = {};
_volatileElements = {};
Function.createDelegate = function (n, t) {
    return function () {
        return !t || typeof t != "function" ? null : t.apply(n, arguments)
    }
};
Type = {};
Type.registerNamespace = function (n) {
        for (var r = window, f = n.split("."), u, i, t = 0; t < f.length; t++) u = f[t], i = r[u], i || (i = r[u] = {}), r = i
    },
    function () {
        Type.registerNamespace("Debug");
        var n = {
            log: function () {},
            warn: function () {},
            error: function () {},
            info: function () {}
        };
        window.Debug.console || (window.Debug.console = window.console ? window.console || n : n)
    }();
String.prototype.startsWith = function (n) {
    return this.substr(0, n.length) === n
};
String.prototype.endsWith = function (n) {
    var t = this.length - n.length;
    return t >= 0 && this.lastIndexOf(n) === t
};
String.prototype.trim = function () {
    return this.replace(/^\s+|\s+$/g, "")
};
String.prototype.escapeSelector = function () {
    return this.replace(/([$%&()*+,./:;<=>?@\[\\\]^\{|}~])/g, "\\$1")
};
Array.add = function (n, t) {
    n[n.length] = t
};
Array.clone = function (n) {
    return n.length === 1 ? [n[0]] : Array.apply(null, n)
};
Array.remove = function (n, t) {
    var i = n.indexOf(t);
    return i >= 0 && n.splice(i, 1), i >= 0
};
Array.contains = function (n, t) {
    for (var i = n.length; i--;)
        if (n[i] === t) return !0;
    return !1
};
Sys.Browser = {};
Sys.Platform = {};
Sys.Browser.InternetExplorer = {};
Sys.Browser.Firefox = {};
Sys.Browser.Safari = {};
Sys.Browser.Opera = {};
Sys.Browser.Chrome = {};
Sys.Platform.Windows = {};
Sys.Platform.Mac = {};
Sys.Platform.iphone = {};
Sys.Browser.agent = null;
Sys.Browser.name = navigator.appName;
Sys.Platform.name = null;
Sys.Browser.version = parseFloat(navigator.appVersion);
Sys.Browser.documentMode = 0;
navigator.userAgent.indexOf(" MSIE ") > -1 ? (Sys.Browser.agent = Sys.Browser.InternetExplorer, Sys.Browser.version = parseFloat(navigator.userAgent.match(/MSIE (\d+\.\d+)/)[1]), Sys.Browser.version >= 8 && document.documentMode >= 7 && (Sys.Browser.documentMode = document.documentMode)) : navigator.userAgent.indexOf(" Firefox/") > -1 ? (Sys.Browser.agent = Sys.Browser.Firefox, Sys.Browser.name = "Firefox", Sys.Browser.version = parseFloat(navigator.userAgent.match(/ Firefox\/(\d+\.\d+)/)[1])) : navigator.userAgent.indexOf(" AppleWebKit/") > -1 ? (Sys.Browser.agent = Sys.Browser.Safari, Sys.Browser.version = parseFloat(navigator.userAgent.match(/ AppleWebKit\/(\d+(\.\d+)?)/)[1]), Sys.Browser.name = "Safari") : navigator.userAgent.indexOf(" Chrome/") > -1 ? (Sys.Browser.agent = Sys.Browser.Chrome, Sys.Browser.version = parseFloat(navigator.userAgent.match(/ Chrome\/(\d+\.\d+)/)[1]), Sys.Browser.name = "Chrome") : navigator.userAgent.indexOf("Opera/") > -1 && (Sys.Browser.agent = Sys.Browser.Opera, Sys.Browser.name = "Opera");
navigator.platform.indexOf("Mac") > -1 ? Sys.Platform.name = Sys.Platform.Mac : navigator.platform.indexOf("Win") > -1 && (Sys.Platform.name = Sys.Platform.Windows);
Sys.UI = {};
Sys.UI.DomEvent = function (n) {
    var t = n;
    this.type = t.type.toLowerCase();
    this.rawEvent = t;
    this.altKey = t.altKey;
    this.clientX = t.clientX;
    this.clientY = t.clientY;
    this.ctrlKey = t.ctrlKey;
    this.target = t.target ? t.target : t.srcElement;
    this.screenX = t.screenX;
    this.screenY = t.screenY;
    this.shiftKey = t.shiftKey
};
Sys.UI.DomEvent.prototype = {
    preventDefault: function () {
        this.rawEvent.preventDefault ? this.rawEvent.preventDefault() : window.event && (this.rawEvent.returnValue = !1)
    },
    stopPropagation: function () {
        this.rawEvent.stopPropagation ? this.rawEvent.stopPropagation() : window.event && (this.rawEvent.cancelBubble = !0)
    },
    _disposeHandlers: function () {
        Sys.UI.DomEvent._clearHandlers(this, !0);
        var n = this._chainDispose,
            t = typeof n;
        t !== "undefined" && (this.dispose = n, this._chainDispose = null, t === "function" && this.dispose())
    }
};
var $manageVolatileHandlers = Sys.UI.DomEvent._manageVolatileHandlers = function () {
        var u, t, n, i, f = 0,
            r;
        if (_volatileElements)
            for (u in _volatileElements)
                if (t = _volatileElements[u], t && t.length > 0)
                    for (i = t.length - 1; i >= 0; i -= 1)
                        if (n = t[i], n) {
                            for (r = !0; r === !0 && n.nodeType && n.nodeType !== 2 && n.nodeType < 9;) n = n.parentNode, r = !!n;
                            r === !1 && (t.splice(i, 1), f += 1)
                        } return f
    },
    $clearHandlers = Sys.UI.DomEvent._clearHandlers = function (n, t) {
        var r, u, f, i, e;
        if (n._events) {
            r = n._events;
            for (u in r)
                for (f = r[u], i = f.length - 1; i >= 0; i--) e = f[i], (!t || e.autoRemove) && $removeHandler(n, u, e.handler);
            n._events = null
        }
    },
    $addHandler = Sys.UI.DomEvent.addHandler = function (n, t, i, r, u, f) {
        var o, e, s, h;
        n != null && (n._events || (n._events = {}), o = n._events[t], o || (n._events[t] = o = []), e = null, n.addEventListener ? (e = function (t) {
            return i.call(n, new Sys.UI.DomEvent(t))
        }, n.addEventListener(t, e, !1)) : n.attachEvent && (e = function () {
            var t = {};
            try {
                t = Sys.UI.DomElement._getWindow(n).event
            } catch (r) {}
            return i.call(n, new Sys.UI.DomEvent(t))
        }, n.attachEvent("on" + t, e)), o[o.length] = {
            handler: i,
            browserHandler: e,
            autoRemove: r
        }, u && (s = _volatileElements[f], s || (_volatileElements[f] = s = []), s.push(n)), r && (h = n.dispose, h !== Sys.UI.DomEvent._disposeHandlers && (n.dispose = Sys.UI.DomEvent._disposeHandlers, typeof h != "undefined" && (n._chainDispose = h))))
    },
    $removeHandler = Sys.UI.DomEvent.removeHandler = function (n, t, i) {
        var f = null,
            r, u, e;
        if (n && n._events && (r = n._events[t], r)) {
            for (u = 0, e = r.length; u < e; u++)
                if (r[u].handler === i) {
                    f = r[u].browserHandler;
                    break
                } n.removeEventListener ? n.removeEventListener(t, f, !1) : n.detachEvent && n.detachEvent("on" + t, f);
            r.splice(u, 1)
        }
    },
    $removeVolatileHandlers = Sys.UI.DomEvent.removeVolatile = function (n) {
        var t, i, r;
        if (_volatileElements) {
            if (t = _volatileElements[n], t && t.length > 0)
                for (i = t.length; i > 0; i--) r = t[i - 1], $clearHandlers(r, !1);
            _volatileElements[n] = null
        }
    },
    $raiseEvent = Sys.UI.DomEvent.raiseEvent = function (n, t, i) {
        var r, u, e, f;
        if (n && n._events && (r = n._events[t], r))
            for (u = 0, e = r.length; u < e; u++)
                if (f = r[u].handler, f) {
                    f(this, i);
                    break
                }
    };
Sys.UI.DomElement = {};
Sys.UI.DomElement._getWindow = function (n) {
    var t = n.ownerDocument || n.document || n;
    return t.defaultView || t.parentWindow
};
String.prototype.escapeSelector = function () {
    return this.replace(/([!"#$%&'()*+,./:;<=>?@\[\\\]^`{|}~])/g, "\\$1")
};
$get = Sys.UI.DomElement.getElementById = function (n, t) {
    var i = t ? t : document,
        r = "#" + n.escapeSelector();
    return $(i).find(r)[0]
};
$getElementsByClassName = Sys.UI.DomElement.getElementsByClassName = function (n, t, i) {
    var r, u = [],
        f = t ? t : document;
    return i || (i = "*"), r = $(f).find("." + n).filter(i), $.map(r, function (n) {
        u.push(n)
    }), u
};
Sys.EventHandlerList = function () {
    this._list = {}
};
Sys.EventHandlerList.prototype = {
    addHandler: function (n, t) {
        Array.add(this._getEvent(n, !0), t)
    },
    removeHandler: function (n, t) {
        var i = this._getEvent(n);
        i && Array.remove(i, t)
    },
    getHandler: function (n) {
        var t = this._getEvent(n);
        return !t || t.length === 0 ? null : (t = Array.clone(t), function (n, i) {
            for (var r = 0, u = t.length; r < u; r++) t[r] && t[r](n, i)
        })
    },
    _getEvent: function (n, t) {
        if (!this._list[n]) {
            if (!t) return null;
            this._list[n] = []
        }
        return this._list[n]
    }
};
Sys._Application = function () {
    this._domReady();
    this._unloadHandlerDelegate = Function.createDelegate(this, this._unloadHandler);
    Sys.UI.DomEvent.addHandler(window, "unload", this._unloadHandlerDelegate)
};
Sys._Application.prototype = {
    _initialized: !1,
    _disposing: !1,
    _enableHistory: !1,
    _historyInitialized: !1,
    _ignoreIFrame: !1,
    _state: {},
    _historyPointIsNew: !1,
    _currentEntry: "",
    _historyFrame: null,
    _timerHandler: null,
    add_init: function (n) {
        this._initialized ? n(this, null) : this.get_events().addHandler("init", n)
    },
    add_load: function (n) {
        this.get_events().addHandler("load", n)
    },
    remove_load: function (n) {
        this.get_events().removeHandler("load", n)
    },
    add_unload: function (n) {
        this.get_events().addHandler("unload", n)
    },
    get_events: function () {
        return this._events || (this._events = new Sys.EventHandlerList), this._events
    },
    dispose: function () {
        if (!this._disposing) {
            this._disposing = !0;
            window.pageUnload && window.pageUnload(this, null);
            var n = this.get_events().getHandler("unload");
            n && n(this, null);
            Sys.UI.DomEvent.removeHandler(window, "unload", this._unloadHandlerDelegate)
        }
    },
    _domReady: function () {
        function i() {
            u.initialize()
        }
        var t, u = this,
            n = document,
            f, r;
        if (n.addEventListener) try {
            n.addEventListener("DOMContentLoaded", t = function () {
                n.removeEventListener("DOMContentLoaded", t, !1);
                i()
            }, !1)
        } catch (e) {} else n.attachEvent && (window == window.top && n.documentElement.doScroll ? (r = n.createElement("div"), t = function () {
            try {
                r.doScroll("left")
            } catch (n) {
                f = window.setTimeout(t, 0);
                return
            }
            r = null;
            i()
        }, t()) : n.attachEvent("onreadystatechange", t = function () {
            n.readyState === "complete" && (n.detachEvent("onreadystatechange", t), i())
        }))
    },
    _unloadHandler: function () {
        this.dispose()
    },
    _raiseInit: function () {
        var n = this.get_events().getHandler("init");
        n && n(this, null)
    },
    initialize: function () {
        if (!this._initialized && !this._disposing) {
            if (this._initialized = !0, this._raiseInit(), this.get_stateString) {
                var n = this.get_stateString();
                n !== this._currentEntry ? this._navigate(n) : this._ensureHistory()
            }
            this.raiseLoad()
        }
    },
    raiseLoad: function () {
        var n = this.get_events().getHandler("load");
        this._loaded = !0;
        n && n(this, null);
        window.pageLoad && window.pageLoad(this, null)
    }
};
Sys.HistoryEventArgs = function (n) {
    this._state = n;
    this.get_state = function () {
        return this._state
    }
};
Sys._Application.prototype.add_navigate = function (n) {
    this.get_events().addHandler("navigate", n)
};
Sys._Application.prototype._onIFrameLoad = function (n) {
    this._ensureHistory();
    this._ignoreIFrame || (this._historyPointIsNew = !1, this._navigate(n));
    this._ignoreIFrame = !1
};
Sys._Application.prototype.set_enableHistory = function (n) {
    this._enableHistory = n
};
Sys._Application.prototype.addHistoryPoint = function (n, t) {
    if (!this._enableHistory) throw "History disabled";
    this._ensureHistory();
    var i = n;
    this._historyPointIsNew = !0;
    this._setState(i, t);
    this._raiseNavigate()
};
Sys._Application.prototype._ensureHistory = function () {
    if (!this._historyInitialized && this._enableHistory) {
        try {
            this._initialState = this.get_stateString()
        } catch (n) {}
        this._historyInitialized = !0
    }
};
Sys._Application.prototype._navigate = function (n) {
    this._ensureHistory();
    var t = n;
    this._setState(n);
    this._state = t;
    this._raiseNavigate()
};
Sys._Application.prototype._setState = function (n, t) {
    var i, u, r, f;
    this._enableHistory && (n = n || "", n !== this._currentEntry && (window.theForm && (i = window.theForm.action, u = i.indexOf("#"), window.theForm.action = (u !== -1 ? i.substring(0, u) : i) + "#" + n), this._historyFrame && this._historyPointIsNew && (n = unescape(n), this._ignoreIFrame = !0, r = this._historyFrame.contentWindow.document, r.open("javascript:'<html><\/html>'"), r.write("<html><head><title>" + (t || document.title) + '<\/title><script type="text/javascript">parent.Sys.Application._onIFrameLoad( \'' + escape(n) + "' );<\/script><\/head><body><\/body><\/html>"), r.close()), this._ignoreTimer = !1, this._currentEntry = n, (this._historyFrame || this._historyPointIsNew) && (f = this.get_stateString(), n !== f && (window.location.hash = n, this._currentEntry = this.get_stateString(), typeof t != "undefined" && t !== null && document.title == "" && (document.title = t))), this._historyPointIsNew = !1))
};
Sys._Application.prototype.get_stateString = function () {
    var n, t, i;
    return Sys.Browser.agent === Sys.Browser.Firefox ? (t = window.location.href, i = t.indexOf("#"), i !== -1 ? t.substring(i + 1) : "") : (n = window.location.hash, n.length > 0 && n.charAt(0) === "#" && (n = n.substring(1)), n)
};
Sys._Application.prototype._raiseNavigate = function () {
    var t = this._historyPointIsNew,
        n = this.get_events().getHandler("navigate"),
        i = this._state,
        r = new Sys.HistoryEventArgs(i);
    if (n && n(this, r), !t) try {
        Sys.Browser.agent === Sys.Browser.Firefox && window.location.hash && (!window.frameElement || window.top.location.hash) && (Sys.Browser.version < 3.5 ? window.history.go(0) : location.hash = this.get_stateString())
    } catch (u) {}
};
Sys.Application = new Sys._Application;
Type.registerNamespace("b365");
b365.Sys = function () {
    this._eleList = [];
    this._eleList.A = 0;
    this._eleList.INPUT = 1;
    this._eleList.SELECT = 2;
    this._filter = function (n, t, i, r) {
        var u = n ? n : 0;
        return u = r ? t && u < t ? t : u : t && u > t || !u ? t : u, r ? i && u < i ? i : u : i && u > i || !u ? i : u
    }
};
b365.Sys.prototype = {
    getEleSib: function (n, t, i) {
        for (var r = t == "n" ? n.nextSibling : n.previousSibling; r != null && (r.nodeType != 1 || i && !$hasCls(r, i));) r = t == "n" ? r.nextSibling : r.previousSibling;
        return r != null && r.nodeType != 1 && (r = null), r
    },
    getPTag: function (n, t, i, r) {
        if (r = typeof r == "undefined" || r == null ? 0 : r + 1, !n) return null;
        if (t == null || n.tagName == t)
            if (i) {
                if (n.className != null && n.className.indexOf(i) >= 0) return n
            } else return n;
        return r > 10 ? null : this.getPTag(n.parentNode, t, i, r)
    },
    getCTag: function (n, t, i) {
        for (var r, u; n && n.nodeType === 3;) n = n.nextSibling;
        return !n || n.tagName == t && (!i || n.className.indexOf(i) >= 0) ? n : (r = this.getCTag(n.firstChild, t, i), r && r.tagName == t && (!i || r.className.indexOf(i) >= 0)) ? r : (u = this.getCTag(n.nextSibling, t, i), u && u.tagName == t && (!i || u.className.indexOf(i) >= 0)) ? u : null
    },
    getParIDTag: function (n, t, i) {
        var r, u, f;
        if (n && t && i && (r = t.getElementsByTagName(i), r && r.length > 0))
            for (u = 0; u < r.length; u++)
                if (f = r[u].getAttribute("id"), f && f.startsWith(n)) return r[u];
        return undefined
    },
    getParIDPTag: function (n, t, i) {
        if (typeof n != "undefined") {
            while (n != null) {
                if (n.id && (i && n.tagName == i && n.id.startsWith(t) || n.id.startsWith(t))) break;
                n = n.parentNode
            }
            return n
        }
        return undefined
    },
    getMediaType: function (n) {
        var t = this.getPTag(n, null, "MTsrc", null),
            i = "";
        return t && t.getAttribute("data-mt") && (i = t.getAttribute("data-mt")), i
    },
    getItemIdSuffix: function (n, t, i) {
        return n = this.getParIDPTag(n, t, i), n ? n.id.substring(t.length) : -1
    },
    firstChild: function (n, t, i) {
        var r = $(n).find("*").not("[type=text]");
        return typeof t != "undefined" && t !== "" && (r = r.filter(t)), typeof i != "undefined" && i !== "" && (r = r.filter("." + i)), r.first()[0]
    },
    parentNode: function (n) {
        for (n = n.parentNode; n != null && n.nodeType === 3;) n = n.parentNode;
        return n
    },
    toggleElement: function (n) {
        typeof n != "undefined" && n != null && (n.className.indexOf("hidden", 0) == -1 ? (n.className = n.className.length > 0 ? n.className + " hidden" : "hidden", n.disabled = !0) : this.showElement(n))
    },
    addClass: function (n, t) {
        typeof n != "undefined" && n !== null && (RegExp("\\b" + t + "\\b", "ig").test(n.className) || (n.className += n.className.length > 0 ? " " + t : t))
    },
    removeClass: function (n, t) {
        typeof n != "undefined" && n !== null && (n.className = n.className.replace(RegExp("\\b" + t + "\\b", "ig"), "").trim())
    },
    swapClass: function (n, t, i) {
        this.removeClass(n, t);
        this.addClass(n, i)
    },
    getOffSets: function (n) {
        var i, r, t;
        try {
            if (i = n.offsetLeft, r = n.offsetTop, n.offsetParent)
                for (t = "static", window.getComputedStyle ? t = window.getComputedStyle(n.offsetParent, null).getPropertyValue("position") : n.currentStyle && (t = n.currentStyle.position); n.offsetParent && t != "fixed" && t != "absolute";) n = n.offsetParent, n && (i += n.offsetLeft, r += n.offsetTop);
            return [i, r]
        } catch (u) {
            return null
        }
    },
    hitTest: function (n, t, i) {
        var r = this.getOffSets(n);
        return r ? t >= r[0] && t <= r[0] + n.clientWidth && i >= r[1] && i <= r[1] + n.clientHeight : !1
    },
    getEleW: function (n, t) {
        return this._filter(n.innerWidth ? n.innerWidth : 0, n.clientWidth ? n.clientWidth : 0, n.scrollWidth ? n.scrollWidth : 0, t)
    },
    getEleH: function (n, t) {
        return this._filter(n.innerHeight ? n.innerHeight : 0, n.clientHeight ? n.clientHeight : 0, n.scrollHeight ? n.scrollHeight : 0, t)
    },
    getWH: function () {
        return this._filter(window.innerHeight ? window.innerHeight : 0, document.documentElement ? document.documentElement.clientHeight : 0, document.body ? document.body.clientHeight : 0)
    },
    getWSL: function () {
        return this._filter(window.pageXOffset ? window.pageXOffset : 0, document.documentElement ? document.documentElement.scrollLeft : 0, document.body ? document.body.scrollLeft : 0)
    },
    getWST: function () {
        return this._filter(window.pageYOffset ? window.pageYOffset : 0, document.documentElement ? document.documentElement.scrollTop : 0, document.body ? document.body.scrollTop : 0)
    },
    mouseX: function (n) {
        var t = null;
        return n.pageX ? t = n.pageX : n.clientX && (t = n.clientX + (document.documentElement.scrollLeft ? document.documentElement.scrollLeft : document.body.scrollLeft)), t
    },
    mouseY: function (n) {
        var t = null;
        return n.pageY ? t = n.pageY : n.clientY && (t = n.clientY + (document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop)), t
    },
    showElement: function (n) {
        return n != null ? (n.className.indexOf("hidden", 0) != -1 && (n.className = n.className.replace(/hidden/i, ""), n.className = n.className.trim()), n.disabled = !1, n.removeAttribute("disabled"), !0) : !1
    },
    hideElement: function (n) {
        return n != null ? (n.className.indexOf("hidden", 0) == -1 && (n.className += " hidden"), n.setAttribute("disabled", "true"), n.disabled = !0, !0) : !1
    },
    setValueInCookie: function (n, t, i) {
        var f = arguments.length == 3 || arguments.length == 4 && arguments[3] == !0 ? !0 : !1,
            o = this.getValueFromCookie(n, "", ""),
            e, u, r;
        if (i = unescape(i), o != "") {
            if (t != "") {
                for (e = !1, u = o.split("&"), r = 0; r < u.length; r++)
                    if (u[r].startsWith(t + "=")) {
                        u[r] = t + "=" + escape(i) + (!f || i.endsWith("||") ? "" : "||");
                        e = !0;
                        break
                    } for (e || i == "" || u.push(t + "=" + escape(i) + (!f || i.endsWith("||") ? "" : "||")), i = "", r = 0; r < u.length; r++) i += u[r] == "" ? "" : u[r] + "&"
            }
        } else t != "" && (i = t + "=" + escape(i) + (!f || i.endsWith("||") ? "" : "||"));
        document.cookie = n + "=" + i.replace(/\$amp\$/g, "&amp;").replace(/\$quot\$/g, "&quot;").replace(/\$lt\$/g, "&lt;").replace(/\$gt\$/g, "&gt;") + ";path=/"
    },
    setValueInCookieOnlyIfNotEmpty: function (n, t, i) {
        n != "" && i != "" && this.setValueInCookie(n, t, i, !1)
    },
    getValueFromCookie: function (n, t, i) {
        for (var f = typeof i != "undefined" ? i : "", u = unescape(document.cookie).split(";"), o = typeof i != "undefined" ? i : "", h = !1, s, c, e, r = 0; r < u.length; r++)
            if (s = u[r].indexOf("=") == -1 ? u[r].length - 1 : u[r].indexOf("="), c = u[r].substr(0, s).replace(/^\s+|\s+$/g, ""), c == n) {
                h = !0;
                f = u[r].substr(s + 1).replace(/^\s+|\s+$/g, "");
                break
            } if (f = String(f).replace(/&amp;/g, "$amp$").replace(/&quot;/g, "$quot$").replace(/&lt;/g, "$lt$").replace(/&gt;/g, "$gt$"), h)
            if (t.length > 0) {
                for (e = f.split("&"), r = 0; r < e.length; r++)
                    if (e[r].startsWith(t + "=")) {
                        o = e[r].substring(t.length + 1);
                        break
                    }
            } else o = f;
        return String(o).replace(/\$amp\$/g, "&amp;").replace(/\$quot\$/g, "&quot;").replace(/\$lt\$/g, "&lt;").replace(/\$gt\$/g, "&gt;")
    },
    readCookie: function (n) {
        for (var r = n + "=", u = document.cookie.split(";"), t, i = 0; i < u.length; i++) {
            for (t = u[i]; t.charAt(0) == " ";) t = t.substring(1, t.length);
            if (t.indexOf(r) == 0) return t.substring(r.length, t.length)
        }
        return null
    },
    setCookieValue: function (n, t) {
        document.cookie = n + "=" + t.replace(/\$amp\$/g, "&amp;").replace(/\$quot\$/g, "&quot;").replace(/\$lt\$/g, "&lt;").replace(/\$gt\$/g, "&gt;") + ";path=/"
    },
    disableElement: function (n) {
        n.getAttribute("_disabled") === null && n.setAttribute("_disabled", n.disabled ? String(n.disabled) : "false");
        var t = n.getAttribute("href");
        t && (n.setAttribute("_href", t), n.removeAttribute("href"));
        n.disabled || n.getAttribute("_tab") !== null || (n.setAttribute("_tab", n.tabIndex), n.setAttribute("tabIndex", "-1"));
        n.tagName == "A" || n.id.indexOf("UName") != -1 || n.id.indexOf("PWord") != -1 || $(n).hasClass("lotto") || (n.disabled = !0, n.setAttribute("disabled", "disabled"))
    },
    enableElement: function (n) {
        var t = n.getAttribute("_disabled");
        t && t === "false" && (n.disabled = !1, n.removeAttribute("disabled"), n.removeAttribute("_disabled"), n.getAttribute("_href") && (n.setAttribute("href", n.getAttribute("_href")), n.removeAttribute("_href")), n.getAttribute("_tab") !== null && (n.tabIndex = n.getAttribute("_tab"), n.removeAttribute("_tab")))
    },
    disableGroup: function (n) {
        var i, t;
        if (this._eleList && this._eleList.length > 0) {
            for (i = n.getElementsByTagName("*"), t = 0; t < i.length; t++) typeof this._eleList[i[t].tagName] != "undefined" && this.disableElement(i[t]);
            typeof this._eleList[n.tagName] != "undefined" && this.disableElement(n)
        }
    },
    enableGroup: function (n) {
        var i, t;
        if (this._eleList && this._eleList.length > 0) {
            for (i = n.getElementsByTagName("*"), t = 0; t < i.length; t++) typeof this._eleList[i[t].tagName] != "undefined" && this.enableElement(i[t]);
            typeof this._eleList[n.tagName] != "undefined" && this.enableElement(n)
        }
    },
    hasCls: function (n, t) {
        return n && n.className.length > 0 && n.className.indexOf(t) > -1
    },
    deepCopy: function (n) {
        var i, r;
        if (Object.prototype.toString.call(n) === "[object Array]" || Object.prototype.toString.call(n) === "[object Arguments]") {
            for (var u = [], t = 0, f = n.length; t < f; t++) u[t] = this.deepCopy(n[t]);
            return u
        }
        if (typeof n == "object") {
            i = {};
            for (r in n) i[r] = this.deepCopy(n[r]);
            return i
        }
        return n
    },
    getZIdx: function (n) {
        return parseInt($(n).css("z-index")) || 0
    }
};
var $bSys = new b365.Sys,
    $getNES = function (n, t) {
        return $bSys.getEleSib(n, "n", t)
    },
    $getPES = function (n, t) {
        return $bSys.getEleSib(n, "p", t)
    },
    $getPTag = function (n, t, i) {
        return $bSys.getPTag(n, t, i)
    },
    $getCTag = function (n, t, i) {
        return $bSys.getCTag(n, t, i)
    },
    $getParIDTag = function (n, t, i) {
        return $bSys.getParIDTag(n, t, i)
    },
    $getParIDPTag = function (n, t, i) {
        return $bSys.getParIDPTag(n, t, i)
    },
    $getMT = function (n) {
        return $bSys.getMediaType(n)
    },
    $getItemIdSuffix = function (n, t, i) {
        return $bSys.getItemIdSuffix(n, t, i)
    },
    $firstChild = function (n, t, i) {
        return $bSys.firstChild(n, t, i)
    },
    $parentNode = function (n) {
        return $bSys.parentNode(n)
    },
    $tglEle = function (n) {
        return $bSys.toggleElement(n)
    },
    $showEle = function (n) {
        return $bSys.showElement(n)
    },
    $addCls = function (n, t) {
        return $bSys.addClass(n, t)
    },
    $remCls = function (n, t) {
        return $bSys.removeClass(n, t)
    },
    $swpCls = function (n, t, i) {
        return $bSys.swapClass(n, t, i)
    },
    $hideEle = function (n) {
        return $bSys.hideElement(n)
    },
    $hasCls = function (n, t) {
        return $bSys.hasCls(n, t)
    },
    $deepCopy = function (n) {
        return $bSys.deepCopy(n)
    },
    $getZIndex = function (n) {
        return $bSys.getZIdx(n)
    },
    $removeEvilTwin = function (n) {
        var i, t, r, o;
        n = n.toLowerCase();
        var u = "/liquid_style.css",
            f = "/style.css",
            s = "matchlive/liquid_basic.css",
            e = "matchlive/basic.css";
        if (n.indexOf(s) != -1 || n.indexOf(e) != -1 || n.indexOf(u) != -1 || n.indexOf(f) != -1) {
            if (i = e, n.indexOf(e) != -1 && (i = s), n.indexOf(u) != -1 && (i = u), n.indexOf(f) != -1 && (i = f), t = document.getElementsByTagName("link"), t && t.length > 0)
                for (r = 0; r < t.length; r++) t[r].href.toString().indexOf(i) != -1 && (o = t[r], o.parentNode.removeChild(o));
            return
        }
    },
    $loadCSS = function (n, t) {
        var e, r, u, i, f, o;
        if ($removeEvilTwin(n), e = document.getElementsByTagName("head")[0], r = document.getElementsByTagName("link"), r && r.length > 0)
            for (u = 0; u < r.length; u++)
                if (r[u].href.indexOf(n) >= 0) {
                    t && t();
                    return
                } i = document.createElement("link");
        i.setAttribute("href", n);
        i.setAttribute("rel", "stylesheet");
        i.setAttribute("type", "text/css");
        "sheet" in i ? (f = "sheet", o = "cssRules") : (f = "styleSheet", o = "rules");
        var c = navigator.userAgent.lastIndexOf("Safari/") > 0,
            l = document.styleSheets.length,
            s = setInterval(function () {
                try {
                    (i[f] && i[f][o].length || c && document.styleSheets.length > l) && (clearInterval(s), clearTimeout(h), t && t())
                } catch (n) {}
            }, 200),
            h = setTimeout(function () {
                clearInterval(s);
                clearTimeout(h);
                e.removeChild(i);
                throw "Script load failed";
            }, 1e4);
        e.appendChild(i)
    },
    $loadScript = function (n, t, i) {
        var f, r;
        t = t.trim();
        for (var o = t, e = function (n) {
                var t = $getFN(o) + "_loaded";
                typeof window[t] == "function" && window[t](n);
                i && i()
            }, s = document.getElementsByTagName("head")[0], u = 0; u < 2; u++)
            if (f = u == 0 ? s.getElementsByTagName("script") : document.getElementsByTagName("script"), f && f.length > 0)
                for (u = 0; u < f.length; u++)
                    if (f[u].src.indexOf(t.startsWith(".") ? t.substring(1) : t) >= 0) {
                        e(n);
                        return
                    } r = document.createElement("script");
        r.setAttribute("language", "javascript");
        r.setAttribute("type", "text/javascript");
        r.setAttribute("src", o);
        r.addEventListener ? r.onload = function () {
            e(n)
        } : r.readyState && (r.onreadystatechange = function () {
            (r.readyState == "loaded" || r.readyState == "complete") && e(n)
        });
        s.appendChild(r)
    },
    $setGlobal = function (n, t, i) {
        if (typeof window[n] != "function" && typeof t == "string") try {
            window[n] = JSON.parse(t);
            i && i()
        } catch (r) {
            window[n] = null;
            i && i()
        }
    },
    cacheTokens = [],
    $setCachePolicy = function (n, t) {
        var u, i, e, f = n.split(","),
            r;
        if (f)
            for (r = 0; r < f.length; r++) u = f[r].split("="), i = u[0].split("."), e = u[1], cacheTokens[i[0]] || (cacheTokens[i[0]] = []), cacheTokens[i[0]][i[1]] = e;
        t && t()
    },
    $getFN = function (n) {
        var t = n.match(/(.*)[\/\\](\w+)/);
        return t && t.length >= 3 ? t[2] : ""
    },
    $setTitleText = function (n, t) {
        document.title = n;
        t && t()
    },
    $formatDatePart = function (n) {
        return n < 10 ? "0" + n : n
    },
    $getTimeAsHHMMSS = function (n) {
        var t = $formatDatePart(n.getHours()),
            i = $formatDatePart(n.getMinutes()),
            r = $formatDatePart(n.getSeconds());
        return t + ":" + i + ":" + r
    },
    $getComputedPadding = function (n) {
        var t, i = $getAppliedStyle(n);
        return t = parseInt(i.paddingRight.replace("px", "")) + parseInt(i.paddingLeft.replace("px", "")), isNaN(t) ? 0 : t
    },
    $getAppliedStyle = function (n) {
        return typeof n.currentStyle != "undefined" ? n.currentStyle : document.defaultView.getComputedStyle(n, null)
    },
    $getLen = function (n, t) {
        var i = 0;
        return t && (i = n.style.width.replace("px", ""), i = isNaN(parseInt(i)) ? 0 : i, i && i != 0 || (i = $getAppliedStyle(n), i = i.width.replace("px", ""), i = isNaN(parseInt(i)) ? 0 : i)), i && i != 0 || (i = n.clientWidth), i && i != 0 || (i = n.innerWidth), i && i != 0 || (i = n.scrollWidth), i
    };
Type.registerNamespace("b365.Ui"),
    function (n) {
        n.fn.disableElement = function () {
            return this.each(function () {
                n(this).attr("_disabled") === undefined && n(this).attr("_disabled", n(this).prop("disabled") ? n(this).prop("disabled") : "false");
                n(this).prop("href") && (n(this).attr("_href", n(this).prop("href")), n(this).removeProp("href"));
                n(this).prop("disabled") || n(this).attr("_tab") || (n(this).attr("_tab", n(this).prop("tabIndex")), n(this).prop("tabIndex", "-1"));
                n(this).prop("disabled", !0).addClass("disabled")
            })
        };
        n.fn.enableElement = function () {
            return this.each(function () {
                if (n(this).removeProp("disabled").removeAttr("disabled").removeAttr("_disabled").removeClass("disabled"), n(this).attr("_href")) {
                    var t = n(this).html();
                    n(this).prop("href", n(this).attr("_href"));
                    n(this).removeAttr("_href");
                    n(this).html(t)
                }
                n(this).attr("_tab") && (n(this).prop("tabIndex", n(this).attr("_tab")), n(this).removeAttr("_tab"))
            })
        }
    }(jQuery),
    function (n, t) {
        function i(n, t, i, r, u, f, e) {
            this._dataUrl = n;
            this._dataEvent = t;
            this._errorEvent = i;
            this._arguments = arguments;
            this._timeOut = r;
            this._timeOutEvent = u;
            this._cacheRequest = !0;
            typeof f != "undefined" && f !== null && (this._cacheRequest = !f);
            this._reqInstanceId = e;
            this._ajaxObject = null
        }

        function r(n) {
            return n.status == 200 && (n.statusText == "OK" || n.statusText == "200 OK")
        }
        i.prototype.Load = function (n) {
            var i = this;
            n || (n = "GET");
            i._ajaxObject = t.ajax({
                type: n,
                url: i._dataUrl,
                cache: i._cacheRequest,
                timeout: this._timeOut,
                async: !0,
                beforeSend: function (n) {
                    n.overrideMimeType("text/plain")
                },
                error: function (n, t) {
                    t === "timeout" && typeof i._timeOutEvent != "undefined" && i._timeOutEvent !== null ? i._timeOutEvent(i._reqInstanceId) : (t === "error" || n.status != 0) && typeof i._errorEvent != "undefined" && i._errorEvent !== null && i._errorEvent(n.status, n.statusText, i._reqInstanceId)
                },
                complete: function (n) {
                    r(n) && i.OnData(i, n.responseText)
                }
            })
        };
        i.prototype.Post = function (n) {
            var i = this;
            i._ajaxObject = t.ajax({
                type: "POST",
                url: this._dataUrl,
                cache: i._cacheRequest,
                timeout: this._timeOut,
                data: n,
                beforeSend: function (n) {
                    n.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
                    n.overrideMimeType("text/plain")
                },
                error: function (n, t) {
                    t === "timeout" && typeof i._timeOutEvent != "undefined" && i._timeOutEvent !== null ? i._timeOutEvent(i._reqInstanceId) : n.status != 0 && typeof i._errorEvent != "undefined" && i._errorEvent !== null && i._errorEvent(n.status, n.statusText, i._reqInstanceId)
                },
                complete: function (n) {
                    r(n) && i.OnData(i, n.responseText)
                }
            })
        };
        i.prototype.LoadSynchronous = function () {
            var n = this;
            n._ajaxObject = t.ajax({
                type: "GET",
                url: this._dataUrl,
                async: !1,
                timeout: this._timeOut,
                cache: n._cacheRequest,
                beforeSend: function (n) {
                    n.overrideMimeType("text/plain")
                },
                error: function (t, i) {
                    i === "timeout" && typeof n._timeOutEvent != "undefined" && n._timeOutEvent !== null ? n._timeOutEvent(n._reqInstanceId) : t.status != 0 && typeof n._errorEvent != "undefined" && n._errorEvent !== null && n._errorEvent(t.status, t.statusText, n._reqInstanceId)
                },
                complete: function (t) {
                    r(t) && n.OnData(n, t.responseText)
                }
            });
            return
        };
        i.prototype.OnData = function (n, t) {
            t.search(/SERVER_ERROR/) > -1 && (n._arguments[7][n._arguments[7].length] = n._arguments[7][0], n._arguments[7].length++, n._arguments[7][0] = 99, t = t.replace(/SERVER_ERROR/, ""));
            typeof n._dataEvent != "undefined" && n._dataEvent !== null && n._dataEvent(t, n._arguments)
        };
        i.prototype.Abort = function () {
            var n = this;
            typeof n._ajaxObject != "undefined" && n._ajaxObject != null && (n._ajaxObject.abort(), n._ajaxObject = null)
        };
        n.b365BsAJAX = i
    }(window, jQuery);
b365.Ui.BetSlipLib = function () {
    this._alwaysInclude = "*~"
};
b365.Ui.BetSlipLib.prototype = {
    calcTotalStake: function (n, t) {
        var e = 0,
            r = 0,
            u, f;
        for (t = t ? t : "st", i = 0; i < n.length; i++) r = Number(n[i].getStItem(t) ? n[i].getStItem(t) : ""), u = n[i].getStItem("ew") == "1", isNaN(r) === !1 && (r = r * 100, f = Number(n[i].getCnItem("bc") ? n[i].getCnItem("bc") : n[i].getStItem("bc") ? n[i].getStItem("bc") : "1"), e += f > 1 || u ? Number(String(r * (u ? 2 : 1) * f)) : r);
        return this.pad2DP(String(e / 100))
    },
    isDuplicate: function (n, t) {
        var r = !1,
            f = t.getCnItem("pt"),
            u = function (n, t) {
                return n.getCnItem("spt") === t.getCnItem("spt") && n.getCnItem("cm") === t.getCnItem("cm") && n.getCnItem("ct") === t.getCnItem("ct") && n.getCnItem("f") === t.getCnItem("f") && n.getCnItem("fp") === t.getCnItem("fp")
            };
        for (i = 0; !r && i < n.length; i++) switch (f) {
            case "S":
                r = n[i].getCnItem("pid") === t.getCnItem("pid") && n[i].getCnItem("mid") === t.getCnItem("mid");
                break;
            case "CB":
                r = u(t, n[i]);
                break;
            case "TB":
                switch (t.type) {
                    case bs.betTypeToteCast:
                    case bs.betTypeUsToteCast:
                    case bs.betTypeEToteCast:
                    case bs.betTypeToteNonCast:
                    case bs.betTypeUsToteNonCast:
                    case bs.betTypeEToteNonCast:
                        r = u(t, n[i])
                }
                break;
            default:
                n[i].getCnItem("fp") === t.getCnItem("fp") && n[i].getCnItem("f") == t.getCnItem("f") && (r = n[i].getCnItem("Inc") == t.getCnItem("Inc") ? !0 : !1)
        }
        return r
    },
    getItemOdds: function (n, t) {
        var r, i;
        switch (n) {
            case bs.betTypeCast:
            case bs.itemTypeCast:
            case bs.betTypeBetBuilder:
            case bs.itemTypeBetBuilder:
                r = t.getStItem;
                break;
            default:
                r = t.getCnItem
        }
        return i = r("BOdds"), i || (i = r("o")), i || (i = ""), i
    },
    to2DP: function (n, t) {
        var r, i;
        return t = t || ".", r = t === "." ? "," : ".", n = n.replace(new RegExp("\\" + r, "g"), t), i = n.indexOf(t), i != -1 && n.length - i > 3 && (n = n.substr(0, i + 3)), n
    },
    pad2DP: function (n, t) {
        var u, i, r;
        return t = t || ".", u = t === "." ? "," : ".", n = n.replace(new RegExp("\\" + u, "g"), t), n = n.trim(), n === t || n === "" ? n = "0" + t + "00" : (n = this.to2DP(n, t), i = n.indexOf(t), i == -1 ? n += t + "00" : (r = n.length - (i + 1), r == 0 ? n += "00" : r == 1 && (n += "0"))), n
    },
    roundDecimal: function (n, t) {
        var u, i, r;
        return t = t || ".", u = t === "." ? "," : ".", n = n.replace(new RegExp("\\" + u, "g"), t), n = n.trim(), n === t || n === "" ? n = "0" + t + "00" : (n = this.roundValue(n, t), i = n.indexOf(t), i == -1 ? n += t + "00" : (r = n.length - (i + 1), r == 0 ? n += "00" : r == 1 && (n += "0"))), n
    },
    roundValue: function (n, t) {
        var s, f, e, i, r, u, o;
        if (t = t || ".", s = t === "." ? "," : ".", n = n.trim(), f = "0", n != "NaN" && n.indexOf(t) >= 0) {
            if (e = n.split(t), i = e[0], r = e[1], r.trim().length == 0) return n;
            r = r.length > 4 ? r.substring(0, 3) : r;
            u = r.substring(2, 3);
            Number(u) >= 5 ? (u = r.substring(1, 2), Number(u) == 9 ? (o = r.substring(0, 1), Number(o) == 9 ? (i = Number(i) + 1, f = String(i)) : (u = Number(o) + 1, i = i + t + u, f = String(i))) : (u = Number(u) + 1, u = String(r.substring(0, 1)) + String(u), i = i + t + u, f = i)) : r.length == 1 ? (i = i + t + r, f = i) : (i = i + t + r.substring(0, 2), f = i)
        } else f = n === "" || n == "NaN" ? "" : isNaN(n) ? n : n;
        return f
    },
    riskToWin: function (n, t, i, r, u, f) {
        var e = Function.createDelegate(this, f || f == undefined ? this.pad2DP : this.roundDecimal),
            o = isNaN(n) ? 0 : n * 1,
            s = eval(t),
            h;
        return (u = u || isNaN(s), !u) ? r ? e(String(o * 2)) : (h = o * s / 1, e(String(h))) : ""
    },
    winToRisk: function (n, t, i, r) {
        var u = 0;
        if (r) u = Math.round(n * 50) / 100;
        else {
            u = isNaN(n) ? 0 : n / eval(t);
            u = Number(this.roundValue(String(u)));
            for (var f = u * 1, e = 1 + eval(t), o = Math.round(f * (e - 1) * 100) / 100; o < n;) u = u + .01, f = u * 1, e = 1 + eval(t), o = Math.round(f * (e - 1) * 100) / 100
        }
        return this.roundValue(String(u))
    },
    isDecimal: function (n) {
        return (n.indexOf(",") !== -1 && (n = n.replace(/,/g, ".")), String(n).trim() === "0." || String(n).trim() === "." || n === "") ? !0 : isNaN(Number(n)) == !0 ? !1 : !0
    },
    getMaxStake: function () {
        return 999999999
    },
    getMaxToWin: function () {
        var n = $get("bs", $get("bsDiv")),
            t = 99999999;
        return n && n.getAttribute("data-mtwin") && Number(n.getAttribute("data-mtwin")) > 0 && (t = Number(n.getAttribute("data-mtwin"))), t
    },
    doBetMax: function (n, t, i, r, u) {
        return lgh.isAuthenticated() ? (u.req(bs.reqTypeMaxBet, "key=" + n + "-" + String(t) + "-" + i + "-" + r), !0) : !1
    },
    alwaysShowToolTipItem: function (n) {
        return n.startsWith(this._alwaysInclude)
    },
    formatAlwaysShowToolTip: function (n) {
        return n.replace(this._alwaysInclude, "")
    },
    numDecPlcs: function (n) {
        var t = String(n),
            i = ".";
        return t.indexOf(i) > -1 ? t.length - t.indexOf(i) - 1 : 0
    },
    getBetItemIndex: function (n, t) {
        var f = -1,
            r = new b365.Ui.BetDTO,
            u, i, e, o;
        for (r.parse(n), u = t.getBetItems(), i = 0, e = u.length; i < e; i++)
            if (r.getCnItem("mid") && r.getCnItem("pid")) {
                if (u[i].getCnItem("f") == r.getCnItem("f") && u[i].getCnItem("mid") == r.getCnItem("mid") && u[i].getCnItem("pid") == r.getCnItem("pid")) {
                    f = i;
                    break
                }
            } else if (u[i].getCnItem("fp") === r.getCnItem("fp") && u[i].getCnItem("f") == r.getCnItem("f") && (r.getCnItem("Inc") ? r.getCnItem("Inc") === u[i].getCnItem("Inc") : !0) && (u[i].getCnItem("pt") === "S" ? r.getCnItem("pt") === u[i].getCnItem("pt") : !0)) {
            f = i;
            break
        } else if (u[i].getCnItem("id") && u[i].getCnItem("id") === r.getCnItem("id")) {
            f = i;
            break
        } else if (o = u[i].getStItem("pp") || u[i].getCnItem("pp") || "", (u[i].getCnItem("fp") === r.getCnItem("fp") || o === r.getCnItem("fp")) && u[i].getCnItem("f") == r.getCnItem("f") && (r.getCnItem("Inc") ? r.getCnItem("Inc") === u[i].getCnItem("Inc") : !0)) {
            f = i;
            break
        }
        return f
    }
};
$blib = new b365.Ui.BetSlipLib;
b365.Ui.BBItem = function () {
    var n = {};
    this.parse = function (t) {
        var i = t.split("#"),
            r;
        for (subItem in i) i[subItem].length > 0 && (r = i[subItem].split("="), n[r[0]] = r[1])
    };
    this.getValue = function (t) {
        return n[t]
    };
    this.setValue = function (t, i) {
        n[t] = i
    };
    this.toString = function () {
        var i = "",
            t;
        for (t in n) i += t + "=" + n[t] + "#";
        return i
    }
};
b365.Ui.BetDTO = function (n) {
    this.type = n;
    var r = [],
        t = [],
        u, f, e, o = [],
        s = function (n, t) {
            u = t.split("#");
            for (f in u) u[f].length > 0 && (e = u[f].split("="), n[e[0]] = e[1])
        },
        h = function (n, t) {
            var e, r = "il",
                h, u, i, f;
            if (t && t.indexOf(r + "=") > -1) {
                e = t.split(r + "=");
                i = e[1];
                h = i.charAt(i.length - 1) === "#";
                n[r] = h ? i.substr(0, i.length - 1) : i;
                u = i.split("^");
                for (i in u) f = new b365.Ui.BBItem, f.parse(u[i]), o.push(f)
            } else s(n, t)
        };
    this.parse = function (n) {
        var e = n.indexOf("il=") > -1 ? h : s,
            u = n.split("|"),
            f, i;
        for (t = {}, r = {}, f = r, i = 0; i < u.length; i++) u[i].length > 0 && e(f, u[i]), f = t
    };
    this.toString = function () {
        var i = "",
            f = "",
            n, u, r;
        if (this.type === bs.betTypeBetBuilder)
            for (i = "il=", u = this.getBBItems(), r = 0; r < u.length; r++) i += u[r].toString(), i += r < u.length - 1 ? "^" : "";
        else i = this.getCn();
        for (n in t) n == "st" && (t[n] = t[n] !== "" ? t[n].toString().replace(",", ".") : ""), f += n + "=" + t[n] + "#";
        return i + (f === "" ? "" : "|") + f
    };
    this.getBBItems = function () {
        return o
    };
    this.getCn = function () {
        var n = "",
            t;
        for (t in r) n = n + t + "=" + r[t] + "#";
        return n
    };
    this.getCnItem = function (n) {
        return r[n]
    };
    this.setCnItem = function (n, t) {
        r[n] = t
    };
    this.removeCnItem = function (n) {
        delete r[n]
    };
    this.getStItem = function (n) {
        return t[n]
    };
    this.setStItem = function (n, i) {
        t[n] = i
    };
    this.removeStItem = function (n) {
        delete t[n]
    };
    this.parseCookieString = function (n, t) {
        var r = n.split("||"),
            f = [],
            u, i;
        if (n.length > 0)
            for (u in r) r[u].length > 0 && (i = new b365.Ui.BetDTO(t), i.parse(r[u]), t != bs.betTypeMultiple && t != bs.betTypeBetBuilder && (i.setStItem("es", 1), i.setStItem("FO", "False")), Array.add(f, i));
        return f
    };
    this.serialize = function (n) {
        var t = "";
        for (i = 0; i < n.length; i++) t += n[i].toString() + "||";
        return t
    };
    this.getTopic = function () {
        return this.getTopicItem(0)
    };
    this.getOddsOverride = function () {
        return this.getTopicItem(1)
    };
    this.getDecimalPlaces = function () {
        return this.getTopicItem(2)
    };
    this.getTopicItem = function (n) {
        var t = (this.getStItem("TP") || "").split("x");
        return t.length > n ? t[n] : ""
    }
};
$bto = new b365.Ui.BetDTO;
__extends = this && this.__extends || function (n, t) {
    var i, r;
    for (i in t) t.hasOwnProperty(i) && (n[i] = t[i]);
    r = function () {
        this.constructor = n
    };
    n.prototype = t === null ? Object.create(t) : (r.prototype = t.prototype, new r)
};
extend = function (n, t) {
    return __extends(t, n), n
};
b365.Ui.BetSlipAPI = function (n) {
    this._events = new Sys.EventHandlerList;
    this._b365BsAJAX = null;
    this._lock = !1;
    this._betSlipCookieKey = n;
    this._betSlipCookieBackup = null;
    this._pushBetSlipCookieBackup = null;
    this._betItems = [];
    this._betMltItems = [];
    this._betCastItems = [];
    this._betBuilderItems = [];
    this._clearOnAdd = !1;
    this._controller = null;
    this._clickToCallHandler = null;
    this._pollTime = null;
    this._pollInterval = null;
    this._pollForceStop = !1;
    this._pollReference = null;
    this._pollRequestParams = null;
    this._pollCount = 0;
    this._pollReqType = 0;
    this._pollInProcess = !1;
    this._betSlipModeBetSlip = 1;
    this._betSlipModeConfirm = 2;
    this._betSlipModeReceipt = 3;
    this._dialogModeConfirmation = 1;
    this._dialogModeDialog = 2;
    this.betTypeAll = -1;
    this.betTypeNormal = 0;
    this.betTypeMultiple = 1;
    this.betTypeLotto = 2;
    this.betTypeCast = 3;
    this.betTypeToteCast = 4;
    this.betTypeToteNonCast = 5;
    this.betTypeToteAll = 6;
    this.betTypeUsToteCast = 7;
    this.betTypeUsToteNonCast = 8;
    this.betTypeUsToteAll = 9;
    this.betTypeAllAccept = 11;
    this.betTypeEToteCast = 12;
    this.betTypeEToteNonCast = 13;
    this.betTypeTotePot = 14;
    this.betTypeUsTotePot = 15;
    this.betTypeETotePot = 16;
    this.betTypeFrgnToteCast = 17;
    this.betTypeFrgnToteNonCast = 18;
    this.betTypeFrgnTotePot = 19;
    this.betTypeTotePotAus = 20;
    this.betTypeLottoFrame = 21;
    this.betTypeBetBuilder = 22;
    this.reqTypeRefreshSlip = 0;
    this.reqTypeAddItems = 1;
    this.reqTypePlaceBet = 2;
    this.reqTypeDeleteItem = 3;
    this.reqTypeRefreshLottoSlip = 3;
    this.reqTypePlaceLottoBet = 4;
    this.reqTypeMaxBet = 5;
    this.reqTypeBetBrk = 7;
    this.reqTypePitcher = 8;
    this.reqTypeRefreshAccept = 9;
    this.reqTypeReferBet = 10;
    this.reqTypePollReferredBet = 11;
    this.reqTypeConfirmBet = 13;
    this.reqTypeConstructAndAddItems = 15;
    this.reqTypePhoneBet = 17;
    this.reqTypeLoadMobileLottoBetslip = 18;
    this.reqTypePlaceMobileLottoBet = 19;
    this.reqTypePollTempBetReceipt = 20;
    this.reqTypeGetCTCBetDetails = 21;
    this.reqRefreshDuplicateBetGuid = 22;
    this.reqTypeItalySplitStakeConfirm = 25;
    this.reqTypeRefreshSlipWithoutUpdatingUserPrefs = 26;
    this.postPayload = "";
    this.slipStandard = "1";
    this.slipBanker = "2";
    this.slipIF = "3";
    this.slipReverseIF = "4";
    this.slipFixedTeaser = "5";
    this.slipNumbers = "7";
    this.slipUKTote = "8";
    this.slipUSTote = "9";
    this.slipETote = "10";
    this.slipFinancials = 100;
    this.slipFinancialsblank = 9997;
    this.toteTypeNotTote = "0";
    this.toteTypeUKTote = "1";
    this.toteTypeETote = "2";
    this.toteTypeUSTote = "3";
    this.toteTypeForeignTote = "4";
    this.toteTypeAustralianTote = "5";
    this.itemTypeSingle = "single";
    this.itemTypeToteSingle = "tote-single";
    this.itemTypeCast = "cast";
    this.itemTypeToteCast = "tote-cast";
    this.itemTypeTotePot = "tote-pot";
    this.itemTypeMultiple = "multiple";
    this.itemTypeBetBuilder = "betbuilder";
    this.itemTypeAll = "all";
    this.deviceType = "";
    this.betSource = "";
    this.showStreaming = !1;
    this.showFullTextMode = !1;
    this.showFixtureDate = !1;
    this.footerLinks = null;
    this.keyboardType = null;
    this.refreshUserBalance = !0;
    this.isoCode = "";
    this.useTruncated2dpPriceForReturnsCalc = !1;
    this.pushBetStatus = null;
    this.pendingPushBetElement = null;
    this.isSiteOverlaySpinnerShowing = !1;
    this.toggledBankerSelectionState = !1
};
b365.Ui.BetSlipAPI.prototype = {
    pageLoad: function () {
        var n = this.getHandler("onpageload");
        n && n(this)
    },
    addBet: function () {
        try {
            var n = this.getHandler("onaddbet");
            if (n && this._lock === !1) {
                try {
                    trk && trk.send(null, EnumRegionID.Right, -1, EnumEventsOrPageTypes.Click, EnumPodID.Coupon, -1, arguments[0])
                } catch (i) {}
                n(this, arguments)
            }
        } catch (t) {
            this.displayError(t.message)
        }
    },
    refresh: function (n, t, i) {
        try {
            if (this._lock === !1) switch (n) {
                case this.betTypeLottoFrame:
                    this.req(this.reqTypeRefreshLottoSlip, t);
                    break;
                case this.betTypeLotto:
                    this.req(this.reqTypeRefreshSlip, t);
                    break;
                case this.betTypeAllAccept:
                    this.req(this.reqTypeRefreshAccept, t);
                    break;
                case this.reqTypePhoneBet:
                    this.req(this.reqTypePhoneBet, t, "", i);
                    break;
                default:
                    this.req(this.reqTypeRefreshSlip, t)
            }
        } catch (r) {
            this.displayError(r.message)
        }
    },
    updateState: function () {
        var n = this.getHandler("onupdatestate");
        n && n(this)
    },
    onPBetError: function () {
        var n = this.getHandler("onpbeterror");
        n && n(this)
    },
    clearBets: function (n) {
        if (!this._pollInProcess) try {
            this.setValueInBSCookie("", "");
            this._betItems = [];
            this._betMltItems = [];
            this._betCastItems = [];
            this._betBuilderItems = [];
            n && this.req(this.reqTypeRefreshSlip)
        } catch (t) {
            this.displayError(t.message)
        }
    },
    confirmBets: function () {
        try {
            var n = this.getHandler("onconfirmbet");
            n && this._lock === !1 && n(this)
        } catch (t) {
            this.displayError(t.message)
        }
    },
    placeBets: function () {
        try {
            var n = this.getHandler("onplacebet");
            n && this._lock === !1 && (this.updateState(), n(this))
        } catch (t) {
            this.displayError(t.message)
        }
    },
    referBets: function () {
        try {
            this.resetPoll();
            var n = this.getHandler("onreferbet");
            n && this._lock === !1 && n(this)
        } catch (t) {
            this.displayError(t.message)
        }
    },
    pollBet: function (n, t, i, r, u) {
        this.setPollTimeSettings(i, r);
        this._pollCount < this._pollTime / this._pollInterval && !this._pollForceStop ? (this._pollReqType = n, this._pollReference = t, this._pollRequestParams = u, this._pollCount++, this._pollForceStop = !1, setTimeout(Function.createDelegate(this, this.execPoll), this._pollInterval * 1e3)) : this.execPollExpired()
    },
    execPoll: function () {
        var t, n;
        try {
            t = this.getHandler("onpoll");
            t && this._lock === !1 && (n = [], Array.add(n, this._pollReqType), Array.add(n, this._pollReference), Array.add(n, this._pollRequestParams), t(this, n))
        } catch (i) {
            this.resetPoll();
            this.displayError(i.message)
        }
    },
    execPollExpired: function () {
        var t, n;
        try {
            t = this.getHandler("onpollexpired");
            t && this._lock === !1 && (n = [], Array.add(n, this._pollReqType), Array.add(n, this._pollForceStop), t(this, n))
        } catch (i) {
            this.displayError(i.message)
        }
    },
    pollInProgress: function () {
        return this._pollReference !== null || this._pollRequestParams !== null
    },
    resetPoll: function () {
        this._pollReqType = 0;
        this._pollReference = null;
        this._pollRequestParams = null;
        this._pollCount = 0;
        this._pollForceStop = !1
    },
    setPollTimeSettings: function (n, t) {
        n && t && (this._pollTime = n, this._pollInterval = t)
    },
    deleteItem: function () {
        try {
            var n = this.getHandler("ondeleteitem");
            n && this._lock === !1 && n(this, arguments)
        } catch (t) {
            this.displayError(t.message)
        }
    },
    getBetItems: function (n) {
        switch (n) {
            case this.betTypeCast:
            case this.betTypeToteCast:
            case this.betTypeUsToteCast:
            case this.betTypeTotePot:
            case this.betTypeUsTotePot:
            case this.betTypeEToteCast:
            case this.betTypeETotePot:
            case this.betTypeFrgnToteCast:
            case this.betTypeFrgnTotePot:
            case this.betTypeTotePotAus:
            case this.itemTypeCast:
            case this.itemTypeTotePot:
            case this.itemTypeToteCast:
                return this._betCastItems;
            case this.betTypeMultiple:
            case this.itemTypeMultiple:
                return this._betMltItems;
            case this.betTypeAll:
            case this.itemTypeAll:
                return this._betItems.concat(this._betCastItems).concat(this._betMltItems);
            default:
                return this._betItems
        }
    },
    containsPhoneOnlyBet: function () {
        for (var t = this.getBetItems(), i = !1, n = 0; n < t.length; n++)
            if (t[n].getStItem("pom") == "Y") {
                i = !0;
                break
            } return i
    },
    getBetItemById: function (n, t) {
        var r;
        switch (n) {
            case this.betTypeToteNonCast:
            case this.betTypeEToteNonCast:
            case this.betTypeUsToteNonCast:
            case this.betTypeFrgnToteNonCast:
            case this.betTypeNormal:
            case this.itemTypeSingle:
            case this.itemTypeToteSingle:
            case this.betTypeBetBuilder:
            case this.itemTypeBetBuilder:
                r = this._betItems[t];
                break;
            case this.betTypeCast:
            case this.betTypeToteCast:
            case this.betTypeUsToteCast:
            case this.betTypeTotePot:
            case this.betTypeUsTotePot:
            case this.betTypeEToteCast:
            case this.betTypeETotePot:
            case this.betTypeFrgnToteCast:
            case this.betTypeFrgnTotePot:
            case this.betTypeTotePotAus:
            case this.itemTypeCast:
            case this.itemTypeTotePot:
            case this.itemTypeToteCast:
                r = this._betCastItems[t];
                break;
            default:
                for (i = 0; i < this._betMltItems.length; i++)
                    if (this._betMltItems[i].getCnItem("id") == String(t)) {
                        r = this._betMltItems[i];
                        break
                    }
        }
        return r
    },
    getBetItemByCn: function (n, t, i) {
        for (var f, u = this.getBetItems(n), r = 0; r < u.length; r++)
            if (u[r].getCnItem(t) == i) {
                f = u[r];
                break
            } return f
    },
    getBetItemByFixtureParticipant: function (n, t, i, r) {
        for (var e, f = this.getBetItems(n), u = 0; u < f.length; u++)
            if ((f[u].getCnItem("f") == t || f[u].getStItem("f") == t) && (f[u].getCnItem(r) == i || f[u].getStItem(r) == i)) {
                e = f[u];
                break
            } return e
    },
    getBetItemBySt: function (n, t, i) {
        for (var f, u = this.getBetItems(n), r = 0; r < u.length; r++)
            if (u[r].getStItem(t) == i) {
                f = u[r];
                break
            } return f
    },
    setBetItems: function (n, t) {
        switch (t) {
            case this.betTypeCast:
            case this.betTypeToteCast:
            case this.betTypeUsToteCast:
            case this.betTypeTotePot:
            case this.betTypeUsTotePot:
            case this.betTypeEToteCast:
            case this.betTypeETotePot:
            case this.betTypeFrgnToteCast:
            case this.betTypeFrgnTotePot:
            case this.betTypeTotePotAus:
                this._betCastItems = n;
                break;
            case this.betTypeMultiple:
                this._betMltItems = n;
                break;
            default:
                this._betItems = n
        }
    },
    getSlipType: function () {
        return this.getValueFromBSCookie("bt").replace(/\|/g, "")
    },
    isFull: function () {
        return this._betItems.length + this._betCastItems.length >= 14 ? !0 : !1
    },
    okToAdd: function (n) {
        return this.numMLExotics() < 10 && this._betItems.length + this._betCastItems.length + n <= 14 ? !0 : !1
    },
    numMLExotics: function () {
        for (var t = 0, i = ["2", "3", "4", "6", "U", "P", "J"], n = this._betCastItems.length - 1; n >= 0; n--) this._betCastItems[n].getCnItem("pt") == "TB" && i.indexOf(this._betCastItems[n].getCnItem("cm")) > -1 && t++;
        return t
    },
    numItems: function (n) {
        return n === undefined && (n = !0), this._betItems.length + this._betCastItems.length + (n === !1 ? 0 : this._betMltItems.length) + this._betBuilderItems.length
    },
    isEmpty: function () {
        return this._betItems.length + this._betCastItems.length + this._betMltItems.length + this._betBuilderItems.length === 0
    },
    setClearOnAdd: function (n) {
        this._clearOnAdd = n
    },
    getClearOnAdd: function () {
        return this._clearOnAdd
    },
    addOnAddBet: function (n) {
        this._events.addHandler("onaddbet", n)
    },
    addOnReqComplete: function (n) {
        this._events.addHandler("onreqcomplete", n)
    },
    addOnDeleteItem: function (n) {
        this._events.addHandler("ondeleteitem", n)
    },
    addOnHandleInProg: function (n) {
        this._events.addHandler("oninprogress", n)
    },
    addOnContentChangedOnClient: function (n) {
        this._events.addHandler("oncontentchangedclient", n)
    },
    addOnContentLoaded: function (n) {
        this._events.addHandler("oncontentloaded", n)
    },
    addOnLock: function (n) {
        this._events.addHandler("onlockunlock", n)
    },
    addOnPageLoad: function (n) {
        this._events.addHandler("onpageload", n)
    },
    addOnConfirmBet: function (n) {
        this._events.addHandler("onconfirmbet", n)
    },
    addOnPlaceBet: function (n) {
        this._events.addHandler("onplacebet", n)
    },
    addOnReferBet: function (n) {
        this._events.addHandler("onreferbet", n)
    },
    addOnPoll: function (n) {
        this._events.addHandler("onpoll", n)
    },
    addOnPollExpired: function (n) {
        this._events.addHandler("onpollexpired", n)
    },
    addOnRestoreState: function (n) {
        this._events.addHandler("onreststate", n)
    },
    addOnUpdateState: function (n) {
        this._events.addHandler("onupdatestate", n)
    },
    addOnPBetError: function (n) {
        this._events.addHandler("onpbeterror", n)
    },
    addScrollToTop: function (n) {
        this._events.addHandler("onscrolltotop", n)
    },
    addOnBetAdded: function (n) {
        this._events.addHandler("onbetadded", n)
    },
    addOnEditBet: function (n) {
        this._events.addHandler("oneditbet", n)
    },
    addOnBetAddedReqComplete: function (n) {
        this._events.addHandler("onbetaddedreqcomplete", n)
    },
    addOnRefreshReqComplete: function (n) {
        this._events.addHandler("onrefreshreqcomplete", n)
    },
    addOnBetSlipItemsChanged: function (n) {
        this._events.addHandler("onbetslipitemschanged", n)
    },
    addOnAcceptChanges: function (n) {
        this._events.addHandler("onacceptchanges", n)
    },
    addOnBetSlipLoaded: function (n) {
        this._events.addHandler("onbetsliploaded", n)
    },
    addOnMaxSelections: function (n) {
        this._events.addHandler("onmaxselections", n)
    },
    addOnBetslipDisplayed: function (n) {
        this._events.addHandler("onbetslipdisplayed", n)
    },
    addOnPlaceBetSuccess: function (n) {
        this._events.addHandler("onplacebetsuccess", n)
    },
    addOnPlaceBetFailure: function (n) {
        this._events.addHandler("onplacebetfailure", n)
    },
    addOnAddBetslipFooterLinks: function (n) {
        this._events.addHandler("onaddbetslipfooterlinks", n)
    },
    addOnAddReceiptFooterLinks: function (n) {
        this._events.addHandler("onaddreceiptfooterlinks", n)
    },
    addOnAddReceiptHeaderLinks: function (n) {
        this._events.addHandler("onaddreceiptheaderlinks", n)
    },
    addOnAddReceiptLiveAlertSignUp: function (n) {
        this._events.addHandler("onaddreceiptlivealertsignup", n)
    },
    addOnBetslipError: function (n) {
        this._events.addHandler("onbetsliperror", n)
    },
    addOnShowBetSlip: function (n) {
        this._events.addHandler("onshowbetslip", n)
    },
    addOnHideBetSlip: function (n) {
        this._events.addHandler("onhidebetslip", n)
    },
    addOnChangeBetslipHeight: function (n) {
        this._events.addHandler("onchangebetslipheight", n)
    },
    addOnPopupShow: function (n) {
        this._events.addHandler("onpopupshow", n)
    },
    addOnPopupHide: function (n) {
        this._events.addHandler("onpopuphide", n)
    },
    addOnSessionExpired: function (n) {
        this._events.addHandler("onsessionexpired", n)
    },
    addOnHandleBetGuidChange: function (n) {
        this._events.addHandler("betguidchange", n)
    },
    raiseBetGuidChangeEvent: function (n) {
        try {
            var t = this.getHandler("betguidchange");
            t && t(n)
        } catch (i) {}
    },
    removeOnBetSlipLoaded: function (n) {
        this._events.removeHandler("onbetsliploaded", n)
    },
    addOnDeleteBetReqComplete: function (n) {
        this._events.addHandler("deletebetreqcomplete", n)
    },
    addOnAddBetFailed: function (n) {
        this._events.addHandler("onaddbetfailed", n)
    },
    ScrollToTop: function () {
        var n = this.getHandler("onscrolltotop");
        n && n(this)
    },
    betAdded: function (n) {
        var t = this.getHandler("onbetadded");
        t && t(this, n[0].getCnItem("f") + "-" + n[0].getCnItem("fp"))
    },
    betAddedReqComplete: function () {
        var n = this.getHandler("onbetaddedreqcomplete");
        n && n(this)
    },
    editBet: function () {
        var n = this.getHandler("oneditbet");
        n && n(this)
    },
    refreshReqComplete: function () {
        var n = this.getHandler("onrefreshreqcomplete");
        n && n(this)
    },
    betSlipItemsChanged: function () {
        var n = this.getHandler("onbetslipitemschanged");
        n && n(this)
    },
    acceptChanges: function () {
        var n = this.getHandler("onacceptchanges");
        n && n(this)
    },
    betSlipLoaded: function () {
        var n = this.getHandler("onbetsliploaded");
        n && n(this)
    },
    maxSelections: function () {
        var n = this.getHandler("onmaxselections");
        n && n(this)
    },
    betSlipDisplayed: function () {
        var n = this.getHandler("onbetslipdisplayed");
        n && n(this)
    },
    placeBetSuccess: function () {
        var n = this.getHandler("onplacebetsuccess");
        n && n(this)
    },
    placeBetFailure: function () {
        var n = this.getHandler("onplacebetfailure");
        n && n(this)
    },
    addBetslipFooterLinks: function () {
        var n = this.getHandler("onaddbetslipfooterlinks");
        n && n(this)
    },
    addReceiptFooterLinks: function () {
        var n = this.getHandler("onaddreceiptfooterlinks");
        n && n(this)
    },
    addReceiptHeaderLinks: function () {
        var n = this.getHandler("onaddreceiptheaderlinks");
        n && n(this)
    },
    addReceiptLiveAlertSignUp: function () {
        var n = this.getHandler("onaddreceiptlivealertsignup");
        n && n(this)
    },
    betslipError: function () {
        var n = this.getHandler("onbetsliperror");
        n && n(this)
    },
    showBetSlip: function () {
        var n = this.getHandler("onshowbetslip");
        n && n(this)
    },
    hideBetSlip: function () {
        var n = this.getHandler("onhidebetslip");
        n && n(this)
    },
    changeBetslipHeight: function () {
        var n = this.getHandler("onchangebetslipheight");
        n && n(this)
    },
    popupShow: function (n) {
        var t = this.getHandler("onpopupshow");
        t && t(this, n)
    },
    popupHide: function () {
        var n = this.getHandler("onpopuphide");
        n && n(this)
    },
    sessionExpired: function () {
        var n = this.getHandler("onsessionexpired");
        n && n(this)
    },
    restoreState: function () {
        var n = this.getHandler("onreststate");
        n && n(this)
    },
    deleteBetReqComplete: function () {
        var n = this.getHandler("deletebetreqcomplete");
        n && n(this)
    },
    addBetFailed: function () {
        var n = this.getHandler("onaddbetfailed");
        n && n(this)
    },
    lock: function (n) {
        this._lock = !0;
        n && this.lockEvent()
    },
    unlock: function (n) {
        this._lock = !1;
        n && this.lockEvent()
    },
    locked: function () {
        return this._lock
    },
    lockEvent: function () {
        var n = this.getHandler("onlockunlock");
        n && n(this, this._lock)
    },
    req: function (n, t, i, r, u, f) {
        var h = !0,
            c, o, s, v, e, y;
        if (r && (this._controller = r), i = i && i != "" ? i : "#bsDiv>ul", this._lock === !1) {
            this.lock(n !== this.reqTypeRefreshSlip && n !== this.reqTypeDeleteItem);
            this._b365BsAJAX !== null && (this._b365BsAJAX = null);
            var p = n == this.reqTypePlaceBet && document.getElementsByClassName("betCallCode").length > 0 || n !== this.reqTypePlaceBet && n != this.reqTypeConfirmBet && n != this.reqTypeReferBet,
                w = this.deviceType.length > 0 ? "&devicetype=" + this.deviceType : "",
                b = this.betSource.length > 0 ? "&betsource=" + this.betSource : "",
                k = "&streaming=" + Number(this.showStreaming),
                d = "&fulltext=" + Number(this.showFullTextMode),
                g = "&refreshbal=" + Number(this.refreshUserBalance),
                nt = "&isocode=" + this.isoCode,
                l = "",
                a = p && window.location.host.indexOf("com.au") > -1,
                tt = a ? "&bc=y" : "",
                it = n !== this.reqTypePollTempBetReceipt,
                rt = n !== this.reqTypePollTempBetReceipt && n !== this.reqTypeRefreshSlip && n !== this.reqTypeDeleteItem && n !== this.reqTypeRefreshSlipWithoutUpdatingUserPrefs;
            typeof Locator != "undefined" && window.top.Locator.pushedConfig && window.top.Locator.pushedConfig.getIsPushBalanceEnabled() && (l = "&pb=y");
            s = "";
            (n == this.reqTypePlaceBet || n == this.reqTypePlaceMobileLottoBet) && (s += "&betguid=" + $(i).attr("data-betguid"));
            r && r.clientEnhancedMode() && (o = $("#bsDiv"), $("li", o).hasClass("disabledBetSlip") || (c = $('li[data-item-type$="multiple"], li[data-item-type$="single"], li[data-item-type$="cast"], li[data-item-type$="tote-single"], li[data-item-type$="tote-cast"], li[data-item-type$="tote-pot"], li[data-item-type$="tote-pot-leg"]', "#bsDiv"), r._enhancedBetSlipAnimations.disableBetSlip(c, o)));
            v = "../?op=" + n + "&ck=" + this._betSlipCookieKey + (t && t.length > 0 ? "&" + t : "") + b + k + d + s + g + nt + tt + w + l + "&qb=0";
            this._ajaxInstId = (new Date).getTime();
            r && r.clientActionInProgress(!0);
            this._b365BsAJAX = new b365BsAJAX(v, Function.createDelegate(this, function (n, t) {
                f && f();
                this.reqComplete(n, t)
            }), Function.createDelegate(this, this.reqError), 3e4, Function.createDelegate(this, this.reqTimeout), !0, this._ajaxInstId, arguments);
            a || this.handleInProg("show", null, null, rt, it);
            e = window.top.safeSessionStorage.getItem("betstring");
            this.postPayload ? (y = e ? this.postPayload + "&" + e : this.postPayload, this._b365BsAJAX.Post(y)) : e ? this._b365BsAJAX.Post(e) : this._b365BsAJAX.Load("POST")
        } else h = !1;
        return h
    },
    reqComplete: function (n) {
        var t, i;
        this.unlock(!0);
        delete this._b365BsAJAX;
        n.indexOf("sabswabs") > -1 && (t = n.substring(n.indexOf("{bss}") + 5, n.indexOf("{bse}")), t && window.top.safeSessionStorage.setItem("betstring", decodeURIComponent(t)));
        this._b365BsAJAX = null;
        this.restoreState();
        i = this.getHandler("onreqcomplete");
        i && i(this, arguments)
    },
    reqTimeout: function (n) {
        this.isSiteOverlaySpinnerShowing && (this.isSiteOverlaySpinnerShowing = !this._controller.hideSiteOverlaySpinner());
        this.displayError(betSlipML.timeout, n);
        this._controller && this._controller.clientEnhancedMode() && $("#bsDiv").find(".disableBetSlip, .disabledBetSlip").removeClass("disableBetSlip").removeClass("disabledBetSlip")
    },
    reqError: function (n, t, i) {
        this.isSiteOverlaySpinnerShowing && (this.isSiteOverlaySpinnerShowing = !this._controller.hideSiteOverlaySpinner());
        this.displayError(betSlipML.error, i, "error");
        this._controller._stakeEntryHander && this._controller._stakeEntryHander.init();
        this._controller && this._controller.clientEnhancedMode() && $("#bsDiv").find(".disableBetSlip, .disabledBetSlip").removeClass("disableBetSlip").removeClass("disabledBetSlip")
    },
    displayError: function (n, t, i) {
        this._ajaxInstId == t && (this.setClearOnAdd(!1), this.resetPoll(), this.unlock(), this.handleInProg("hide", n, typeof i != "undefined" ? i : "alert"), this._b365BsAJAX = null)
    },
    handleInProg: function (n, t, i, r, u) {
        var e = this.getHandler("oninprogress"),
            f = -1;
        this._b365BsAJAX && this._b365BsAJAX._arguments.length > 7 && (f = this._b365BsAJAX._arguments[7][0]);
        ((f == this.reqTypePlaceBet || f == this.reqTypeConfirmBet) && t || t == betSlipML.pleasecheckmembers) && (t = betSlipML.pleasecheckmembers, this.onPBetError());
        e && e(this, [n, t, f, typeof i != "undefined" ? i : "alert", r, u])
    },
    contentChangedOnClient: function () {
        var n = this.getHandler("oncontentchangedclient");
        n && n(this)
    },
    contentLoaded: function () {
        var n = this.getHandler("oncontentloaded");
        n && n(this)
    },
    getHandler: function (n) {
        return this._events.getHandler(n)
    },
    setValueInBSCookie: function (n, t) {
        var i, r, u, f, e;
        if ($bSys.getValueFromCookie(this._betSlipCookieKey, "", "") && $bSys.getValueFromCookie(this._betSlipCookieKey, "", "") != "" && !window.top.safeSessionStorage.getItem("betstring")) $bSys.setValueInCookie(this._betSlipCookieKey, n, t, !0);
        else if (n) {
            if (i = window.top.safeSessionStorage.getItem("betstring"), i || (i = "bs=&"), i.indexOf(n + "=") > -1) {
                for (r = i.split("&"), u = 0, f = r.length; u < f; u++) r[u].startsWith(n + "=") && (r[u] = n + "=" + t + ((t + "").endsWith("||") ? "" : "||"));
                i = r.join("&");
                (i + "").endsWith("&") && (i = i.slice(0, -1))
            } else e = i && (i + "").endsWith("&") ? "" : "&", i = i + e + n + "=" + t + "&";
            window.top.safeSessionStorage.setItem("betstring", i)
        } else window.top.safeSessionStorage.setItem("betstring", t)
    },
    getValueFromBSCookie: function (n, t) {
        var i, f = window.top.safeSessionStorage.getItem("betstring"),
            u, r, e;
        if (f && n.length > 0) {
            for (u = f.split("&"), r = 0, e = u.length; r < e; r++)
                if (u[r].startsWith(n + "=")) {
                    i = u[r].substring(n.length + 1);
                    break
                }
        } else i = f;
        return i || (i = $bSys.getValueFromCookie(this._betSlipCookieKey, n, t)), i
    },
    readBSCookieValue: function (n) {
        return window.top.safeSessionStorage.getItem("betstring") || $bSys.readCookie(n)
    },
    backupBSCookieValue: function (n) {
        this._betSlipCookieBackup = this.readBSCookieValue(n);
        window.top.safeSessionStorage.setItem("betstringbackup", this._betSlipCookieBackup)
    },
    restoreBSCookieValueFromBackup: function () {
        window.top.safeSessionStorage.setItem("betstring", this._betSlipCookieBackup);
        window.top.safeSessionStorage.setItem("betstringbackup", "")
    },
    restoreBSCookieValue: function (n, t) {
        window.top.safeSessionStorage.setItem("betstring", t)
    },
    backupPushBetPreSplitBSCookieValue: function (n) {
        this._pushBetSlipCookieBackup = this.readBSCookieValue(n)
    },
    setPendingPushBet: function (n, t) {
        this.pushBetStatus = n;
        this.pendingPushBetElement = t
    },
    getPendingPushBetStatus: function () {
        return this.pushBetStatus
    },
    getPendingPushBetElement: function () {
        return this.pendingPushBetElement
    },
    getController: function () {
        return this._controller
    },
    getClickToCallHandler: function () {
        return this._clickToCallHandler
    },
    setClickToCallHandler: function (n) {
        this._clickToCallHandler = n
    }
};
bs = new b365.Ui.BetSlipAPI("bs");
Sys.Application.add_load(Function.createDelegate(bs, bs.pageLoad));
Type.registerNamespace("b365.Ui.Betslip");
b365.Ui.Betslip.SwipeDeleteController = function () {
    function t(n, t) {
        this._bsInst = n;
        this._bsController = t;
        this._transform = this._bsController.prefixStyle("transform")
    }
    var n = {};
    return t.prototype.touchStartHandler = function (t) {
        var i = $(t.target).closest("[data-item-type]")[0];
        n[i] || (n[i] = {});
        $(i).addClass("moving");
        n[i].startX = t.originalEvent.touches[0].clientX;
        n[i].startY = t.originalEvent.touches[0].clientY;
        n[i].translateX || (n[i].translateX = 0);
        n[i].ignore = $(i).hasClass("keypad") ? !0 : !1
    }, t.prototype.touchMoveHandler = function (t) {
        var i = $(t.target).closest("[data-item-type]")[0],
            f;
        if ((!n[i] || !n[i].ignore) && (f = $(i).find(".deleteItem")[0], n[i])) {
            var e = t.originalEvent.changedTouches[0].clientX,
                o = t.originalEvent.changedTouches[0].clientY,
                s = n[i].startX,
                h = n[i].startY,
                r = s - e,
                u = h - o;
            u = u < 0 ? u * -1 : u;
            r > 0 && u < 50 && r > u ? (t.preventDefault(), t.stopPropagation(), r += n[i].translateX, i.style[this._transform] = "translateX(" + -r + "px)", r > 100 && (f.style.width = r + "px"), r > 200 ? $(i).addClass("removing") : $(i).removeClass("removing")) : n[i].ignore = !0
        }
    }, t.prototype.touchEndHandler = function (t) {
        var i = $(t.target).closest("[data-item-type]")[0],
            o;
        if ($(i).removeClass("moving"), n[i]) {
            if (n[i].ignore) {
                i.style[this._transform] = "";
                n[i].translateX = 0;
                $(i).removeClass("removing");
                return
            }
            var u = t.originalEvent.changedTouches[0].clientX,
                f = n[i].startX,
                e = $(i).find(".deleteItem")[0],
                r = f - u;
            r < 5 ? (i.style[this._transform] = "", n[i].translateX = 0) : (r += n[i].translateX, r > 50 & r < 200 ? (n[i].translateX = 100, i.style[this._transform] = "translateX(-100px)", e.style.width = "100px") : r > 200 ? (o = $(i).find("a.remove"), n[i].translateX = 0, new b365.Ui.Betslip.ItemDeleteExecutor(this._bsInst, this._bsController, $(i).attr("data-item-id"), $(i).attr("data-item-type")).execute()) : (i.style[this._transform] = "", n[i].translateX = 0))
        }
    }, t.prototype.reset = function (t) {
        var i = $(t).closest("[data-item-type]")[0];
        n[i] && (i.style[this._transform] = "", n[i].translateX = 0)
    }, t.prototype.attach = function () {
        var i = document.getElementById("bsDiv"),
            n = $("li[data-item-type]", i).not('li[data-item-type="multiple"]'),
            t = this;
        n.on("touchstart", function (n) {
            t.touchStartHandler(n)
        });
        n.on("touchmove", function (n) {
            t.touchMoveHandler(n)
        });
        n.on("touchend", function (n) {
            t.touchEndHandler(n)
        })
    }, t.prototype.detach = function () {}, t
}();
Type.registerNamespace("b365.Ui.Betslip");
b365.Ui.Betslip.InputFocusClassHelper = function () {
    this._focusClassName = "focus"
};
b365.Ui.Betslip.InputFocusClassHelper.prototype.addFocusClassToElement = function (n, t) {
    if (!n.hasClass(this._focusClassName) && (n.addClass(this._focusClassName), t)) {
        var i = n[0].value;
        i && window.parseFloat(i) !== 0 ? i.indexOf(".") > -1 && i.split(".")[1] == "00" && n.val(i.split(".")[0]) : n.val("")
    }
};
b365.Ui.Betslip.InputFocusClassHelper.prototype.removeFocusClassFromElement = function (n, t) {
    n.hasClass(this._focusClassName) && n.removeClass(this._focusClassName);
    t && n.blur()
};
b365.Ui.Betslip.InputFocusClassHelper.prototype.addFocusClassToAllStakeFields = function () {};
b365.Ui.Betslip.InputFocusClassHelper.prototype.removeFocusClassFromAllStakeFields = function (n) {
    var t = $('input[class*=" focus"]', n ? ".betslip" : "#bsDiv");
    t.length > 0 && t.removeClass("focus");
    n && t.blur()
};
Type.registerNamespace("b365.Ui.Betslip");
b365.Ui.Betslip.StakePadController = function () {
    function u(n, t, i, r) {
        var u = '<div id="stakePadToolTips" class="stakePadToolTips">';
        return u += '<div id="stakePadToolTip" class="stakePadToolTip"><\/div>', u += "<\/div>", u += r ? '<div id="stakePad" data-item="' + n + '" data-type="' + t + '" style="display:block" class="stakePadOpen">' : '<div id="stakePad" data-item="' + n + '" data-type="' + t + '">', u += '<div id="betSlipStakePadArrow" class="betSlipStakePadArrow"><\/div>', u += '<div class="betSlipStakePadKeys">', u += '<div class="betSlipStakePadFirstCol">', u += '<div class="colContainer">', u += '<button id="spKey1" class="itemKey"><span>1<\/span><\/button>', u += '<button id="spKey2" class="itemKey"><span>2<\/span><\/button>', u += '<button id="spKey3" class="itemKey"><span>3<\/span><\/button>', u += '<button id="betSlipStakePadDecimalPoint" class="itemKeyDeci"><span>' + i._decimalSeperator + "<\/span><\/button>", u += "<\/div><\/div>", u += '<div class="betSlipStakePadSecondCol">', u += '<div class="colContainer">', u += '<button id="spKey4" class="itemKey"><span>4<\/span><\/button>', u += '<button id="spKey5" class="itemKey"><span>5<\/span><\/button>', u += '<button id="spKey6" class="itemKey"><span>6<\/span><\/button>', u += '<button id="betSlipStakePadBackspace" class="itemKeyDel"><span>x<\/span><\/button>', u += "<\/div><\/div>", u += '<div class="betSlipStakePadThirdCol">', u += '<div class="colContainer">', u += '<button id="spKey7" class="itemKey"><span>7<\/span><\/button>', u += '<button id="spKey8" class="itemKey"><span>8<\/span><\/button>', u += '<button id="spKey9" class="itemKey"><span>9<\/span><\/button>', u += '<button id="spKey0" class="itemKey nrb"><span>0<\/span><\/button>', u += '<button id="betSlipStakePadOkWrapper" class="itemKeyOk nrb"><span>' + window.betSlipML.done + "<\/span><\/button>", u += "<\/div><\/div>", u + "<\/div><\/div>"
    }

    function f(n, t, i, f, e) {
        var o = t,
            p = f ? $(f) : $(n.target),
            l = p.closest(o._isLotto ? ".stake" : "li"),
            w, b, h, k = o._betSlipController.prefixStyle("transform"),
            a, c;
        p.hasClass("disabled") || (l.length > 0 && (n && n.stopPropagation(), v(o), w = l[0].getAttribute("data-item-id"), b = l[0].getAttribute("data-item-type"), e && (e.style.display = "none"), o._isLotto ? l.after(u(w, b, o, !1)) : l.append(u(w, b, o, !1)), h = $(':input[type="text"]', l), h.length == 0 && (h = $(':input[type="number"]', l)), c = document.getElementById("stakePad"), a = c.getElementsByClassName("betSlipStakePadArrow"), c && a && $(a).removeClass("hidden"), p.hasClass("flexistk") && (h = p, c = document.getElementById("stakePad"), c && a && $(a).addClass("hidden"), h.hasClass("active") || h.addClass("active")), h.length > 0 && (h.removeClass("hidden"), o._inputFocusClassHelper.addFocusClassToElement(h, o._isLotto), r(h[0].value, o, s(h[0]))), o.detach(o), c = $("#stakePad"), c = document.getElementById("stakePad"), c.style.height = "118px", y(c, h[0], l, o, e)), l = null)
    }

    function h() {
        var n = this;
        n._isShowing = !0;
        l(n);
        n.init(n._context);
        n._betSlipController._bsInst.changeBetslipHeight()
    }

    function y(n, i, r, u, f) {
        var s = document.getElementById("betslipContent"),
            e, y, w;
        s || (s = document.getElementsByClassName("betslip")[0]);
        var c = document.getElementById("betslipContentContainer"),
            p = n.getBoundingClientRect(),
            v = s.getBoundingClientRect(),
            o = u._betSlipController.prefixStyle("transition"),
            l = u._betSlipController.prefixStyle("transform"),
            a;
        f && (a = u._isLotto ? $(f).siblings(".stake.keypad") : $(f).closest("li"), a.hasClass("keypad") && a.removeClass("keypad"));
        r.hasClass("keypad") || r.addClass("keypad");
        e = v.bottom - p.bottom + 1;
        e >= 0 && (y = i.getBoundingClientRect(), e = v.top - y.top, e < 0 && (e = 0));
        e != 0 ? (w = e < 0 ? e * -1 : e, f && (f.style.display = "block"), n.style.height = "0px", setTimeout(function () {
            u.postShowTransition = function () {
                s.scrollTop -= e;
                n.style[o] = "";
                c.style[o] = "";
                c.style[l] = "";
                h.apply(u, n, i);
                n.removeEventListener(window.top.TRANSITION_END, u.postShowTransition)
            };
            n.addEventListener(window.top.TRANSITION_END, u.postShowTransition);
            c.style[o] = l + " .2s";
            n.style[o] = "height .2s";
            n.style.height = "118px";
            c.style[l] = "translateY(" + e + "px)";
            f && t(u, "stakePadOld", !0)
        }, 20)) : (f && (f.style.display = "block"), n.style.height = "0px", setTimeout(function () {
            u.postShowTransition = function () {
                n.style[o] = "";
                n.removeEventListener(window.top.TRANSITION_END, u.postShowTransition);
                h.apply(u, n, i)
            };
            n.addEventListener(window.top.TRANSITION_END, u.postShowTransition);
            n.style[o] = "height .2s";
            n.style.height = "118px";
            f && t(u, "stakePadOld", !0)
        }, 20));
        u._betSlipController.resetSwipeForSelection(r)
    }

    function t(n, t, i, r) {
        var f = null,
            u, s, e;
        t || (t = "stakePad");
        typeof i == "undefined" && (i = !1);
        f = $("#" + t)[0];
        f || (t = "stakePadOld", f = $("#stakePadOld")[0]);
        i || o(n);
        n._isLotto ? (u = $(f.previousSibling), u.hasClass("stake") || (u = $(u[0].previousSibling))) : u = f ? $(f.parentNode) : null;
        s = n._betSlipController.prefixStyle("transition");
        u && (n._isLotto ? $(f.previousSibling)[0].id == "stakePadToolTips" && $(f.previousSibling).remove() : $("#stakePadToolTips", u).remove(), $(".flexistk.active", u).removeClass("active"), $("#stakePad", u).find("button").removeClass("stakePadKeyDown"), n._isLotto && (e = $(':input[type="text"]', u), e.length == 0 && (e = $(':input[type="number"]', u)), n._inputFocusClassHelper.removeFocusClassFromElement(e, n._isLotto)));
        n._isLotto || n._inputFocusClassHelper.removeFocusClassFromAllStakeFields(n._isLotto);
        !n._betSlipController.clientEnhancedMode() || n._disableAnimation || r ? (n._hasKeyboardIssues || n._disableAnimation || r) && (f = document.getElementById(t), f && (f.style.height = "", c.apply(n, [t, i]), u && u.hasClass("keypad") && u.removeClass("keypad"))) : (n.postHideTransition = function () {
            c.apply(n, [t, i]);
            u && u.hasClass("keypad") && u.removeClass("keypad");
            f.removeEventListener(window.top.TRANSITION_END, n.postHideTransition);
            n.postHideTransition = null
        }, f && (f.addEventListener(window.top.TRANSITION_END, n.postHideTransition), f.style[s] = "height .2s", f.style.height = "0px"))
    }

    function c() {
        var n = document.getElementById(arguments[0]);
        n && this._isShowing && (n.parentNode.removeChild(n), this._isShowing = arguments[1]);
        n = null;
        this._stakeHandlers.length == 0 && this.init()
    }

    function p(n, t) {
        var i = n;
        $(".flexistk.active").removeClass("active");
        i._inputFocusClassHelper.removeFocusClassFromAllStakeFields(i._isLotto);
        i._inputFocusClassHelper.addFocusClassToElement(t);
        t.addClass("active");
        r(t[0].value, i, s(t[0]))
    }

    function e(n, i, r) {
        var u = i,
            c = n,
            s, h, e;
        o(u);
        u._inputFocusClassHelper.removeFocusClassFromAllStakeFields(u._isLotto);
        $(".flexistk.active").removeClass("active");
        s = document.getElementById("stakePad");
        s && (h = u._isLotto ? $(s).siblings(".stake.keypad") : $("#stakePadToolTips")[0] ? $($("#stakePadToolTips")[0].parentNode) : null, h && h.hasClass("keypad") && h.removeClass("keypad"), $("#stakePadToolTips").remove(), $("#stakePad").find("button").removeClass("stakePadKeyDown"), e = document.getElementById("stakePadOld"), e && e.parentNode && e.parentNode.removeChild(e), s.setAttribute("id", "stakePadOld"), e = $("#stakePadOld"), u._betSlipController.clientEnhancedMode() ? f(c, u, !0, r, e[0]) : u._hasKeyboardIssues && (t(u, "stakePadOld", !0), f(c, u, !0, r)))
    }

    function l(n) {
        var t = n,
            r = $(document.getElementById("stakePad")).find("button"),
            i, u;
        if (r.length > 0)
            for (t._keyHandlers.length > 0 && o(t), i = 0, u = r.length; i < u; i++) t._isLotto ? t._keyHandlers.push(new window.ResponsiveClickHandler(r[i], $.proxy(t.handleStakePadClick, t), !1, $.proxy(t.showKeyToolTip, t), $.proxy(t.hideKeyToolTip, t), $.proxy(t.hideKeyToolTip, t))) : t._keyHandlers.push(new b365.Ui.Betslip.ResponsiveClickHandler(r[i], $.proxy(t.handleStakePadClick, t), !1, $.proxy(t.showKeyToolTip, t), $.proxy(t.hideKeyToolTip, t), $.proxy(t.hideKeyToolTip, t), $.proxy(t.touchHoldHandler, t)))
    }

    function o(n) {
        var t, i;
        if (n._keyHandlers && n._keyHandlers.length > 0) {
            for (t = 0, i = n._keyHandlers.length; t < i; t++) n._keyHandlers[t]._element && n._keyHandlers[t].destroy();
            n._keyHandlers = []
        }
        n._siteClickHandler && n._siteClickHandler._element && n._siteClickHandler.destroy();
        n._siteClickHandler = null
    }

    function a(n, i) {
        var o = i._isLotto ? $("#stakePad").siblings(".stake.keypad") : $("#stakePad").closest("li"),
            u, h = n.target.nodeName === "SPAN" ? $(n.target.parentNode) : $(n.target),
            e, f;
        if (v(i), h.hasClass("betSlipStakePadDisabledKey")) return !0;
        if (o.length > 0 && (u = $(':input[type="text"]', o), u.length == 0 && (u = $(':input[type="number"]', o)), i._isLotto && u.val() == "0.00" && u.val(""), u.hasClass("flexistk") && (u = u.closest(".active")), $("#stakePad").find("button").removeClass("stakePadKeyDown"), u.length > 0 && !u.hasClass("disabled"))) {
            if (h[0].id == "betSlipStakePadOkWrapper") return t(i), o = null, u = null, !0;
            h.text() == "x" ? (f = u[0].value, e = u[0].selectionStart != u[0].selectionEnd ? f.slice(0, u[0].selectionStart) + f.slice(u[0].selectionEnd, f.length) : f.substring(0, f.length - 1), u[0].value = " ", u[0].value = e) : (f = u[0].value, e = u[0].selectionStart != u[0].selectionEnd ? f.slice(0, u[0].selectionStart) + f.slice(u[0].selectionEnd, f.length) : f + h.text(), e == i._decimalSeperator && (e = "0" + i._decimalSeperator), u[0].value = " ", u[0].value = e);
            i._bsKeyProcessor && i._bsKeyProcessor(u[0]);
            r(u[0].value, i, s(u[0]));
            typeof i._stakeEntryRule == "function" && i._stakeEntryRule(u[0])
        }
        o = null;
        u = null
    }

    function s(n) {
        return n.className.indexOf("bs-FlexiPercentage_TextBox") > -1
    }

    function r(n, t, i) {
        var u = n.indexOf(t._decimalSeperator),
            r = u > -1,
            f = $("#stakePadToolTip"),
            e = r && n.length - u >= 3;
        f.length > 0 && f.removeClass("stakePadToolTipShow");
        $("#betSlipStakePadBackspace", "#stakePad").removeClass("stakePadBackSpaceKeyDown");
        e ? ($("#spKey1, #spKey2, #spKey3, #spKey4, #spKey5, #spKey6, #spKey7, #spKey8, #spKey9, #spKey0", "#stakePad").addClass("betSlipStakePadDisabledKey").removeClass("stakePadKeyDown"), r && $("#betSlipStakePadDecimalPoint", "#stakePad").addClass("betSlipStakePadDisabledKey").removeClass("stakePadKeyDown")) : r || i ? ($("#stakePad").find("button").removeClass("betSlipStakePadDisabledKey"), $("#betSlipStakePadDecimalPoint", "#stakePad").addClass("betSlipStakePadDisabledKey").removeClass("stakePadKeyDown").removeClass("stakePadBackSpaceKeyDown")) : $("#stakePad").find("button").removeClass("betSlipStakePadDisabledKey").removeClass("stakePadKeyDown").removeClass("stakePadBackSpaceKeyDown")
    }

    function v(n) {
        n._betSlipController._enhancedBetSlipTypeSelector && n._betSlipController._enhancedBetSlipTypeSelector._isShowing && n._betSlipController._enhancedBetSlipTypeSelector.hidePopUpMenu(n._betSlipController._enhancedBetSlipTypeSelector);
        n._betSlipController._enhancedBetSlipOddsSelector && n._betSlipController._enhancedBetSlipOddsSelector._isShowing && n._betSlipController._enhancedBetSlipOddsSelector.hidePopUpMenu(n._betSlipController._enhancedBetSlipOddsSelector);
        n._betSlipController._enhancedBetSlipPitcherSelector && n._betSlipController._enhancedBetSlipPitcherSelector._isShowing && n._betSlipController._enhancedBetSlipPitcherSelector.hidePopUpMenu(n._betSlipController._enhancedBetSlipPitcherSelector);
        n._betSlipController._enhancedBetSlipToteSelector && n._betSlipController._enhancedBetSlipToteSelector._isShowing && n._betSlipController._enhancedBetSlipToteSelector.hidePopUpMenu(n._betSlipController._enhancedBetSlipToteSelector);
        n._betSlipController._enhancedBetSlipIfBetSelector && n._betSlipController._enhancedBetSlipIfBetSelector._isShowing && n._betSlipController._enhancedBetSlipIfBetSelector.hidePopUpMenu(n._betSlipController._enhancedBetSlipIfBetSelector);
        n._betSlipController._enhancedBetSlipTeaserTypeSelector && n._betSlipController._enhancedBetSlipTeaserTypeSelector._isShowing && n._betSlipController._enhancedBetSlipTeaserTypeSelector.hidePopUpMenu(n._betSlipController._enhancedBetSlipTeaserTypeSelector);
        n._betSlipController._enhancedBetSlipAusRaceBetTypeSelector && n._betSlipController._enhancedBetSlipAusRaceBetTypeSelector._isShowing && n._betSlipController._enhancedBetSlipAusRaceBetTypeSelector.hidePopUpMenu(n._betSlipController._enhancedBetSlipAusRaceBetTypeSelector);
        n._betSlipController._enhancedBetSlipEachWayExtraSelector && n._betSlipController._enhancedBetSlipEachWayExtraSelector._isShowing && n._betSlipController._enhancedBetSlipEachWayExtraSelector.hidePopUpMenu(n._betSlipController._enhancedBetSlipEachWayExtraSelector);
        n._betSlipController._ausToteToolTipHtmlBuilder && n._betSlipController._ausToteToolTipHtmlBuilder._activePopup && n._betSlipController._ausToteToolTipHtmlBuilder.hidePopUpMenu(n._betSlipController._ausToteToolTipHtmlBuilder)
    }

    function n(n, t, i, r, u, f, e, o, s, h) {
        var c = this;
        n.indexOf("#") != 0 && (n = "#" + n);
        c._hasKeyboardIssues = s;
        c._betSlipController = i;
        c._bsContainerElement = $(n);
        c._bsItemIdFunction = $.proxy(r, t);
        c._bsKeyProcessor = $.proxy(u, t);
        c._bsShowValidator = $.proxy(f, t);
        c._bsDisableDecimalPoint = $.proxy(e, t);
        c._isShowing = !1;
        c._stakeEntryRule = c._betSlipController.stakeEntryRule();
        c._disableAnimation = !1;
        c._showToolTips = typeof o != "undefined" ? o : !0;
        c._isLotto = !!h
    }
    return n.prototype._isShowing = !1, n.prototype._betSlipController = null, n.prototype._decimalSeperator = ".", n.prototype._bsContainerElement = null, n.prototype._bsItemIdFunction = null, n.prototype._bsKeyProcessor = null, n.prototype._bsShowValidator = null, n.prototype._bsDisableDecimalPoint = null, n.prototype._inputFocusClassHelper = new b365.Ui.Betslip.InputFocusClassHelper, n.prototype._keyHandlers = [], n.prototype._stakeHandlers = [], n.prototype._siteClickHandler = null, n.prototype._showToolTips = !0, n.prototype._hasKeyboardIssues = !1, n.prototype._disableAnimation = !1, n.prototype._context = null, n.prototype._isLotto = !1, n.prototype.show = function (n, r) {
        var u = this,
            o = u._isLotto ? $("#stakePad").siblings(".stake.keypad") : $("#stakePad").closest("li"),
            c = r ? $(r) : $(n.target),
            h = c.closest(u._isLotto ? ".stake" : "li"),
            s, a;
        if (u._betSlipController && u._betSlipController._currencyDisplayHelper && (u._decimalSeperator = u._betSlipController._currencyDisplayHelper.getDecimalSeperator()), u._isShowing)
            if (o.length > 0 && h.length > 0)
                if (s = $(':input[type="text"]', o), newTargetStakeElement = $(':input[type="text"]', h), s.length == 0 && (s = $(':input[type="number"]', o)), s.length == 0) e(n, u, r);
                else {
                    var l = c.hasClass("flexistk"),
                        y = document.getElementById("flexiBet"),
                        v = !1;
                    if (y)
                        for (i = 0, len = s.length; i < len; i++)
                            if (l && $(s[i]).hasClass("focus")) {
                                v = !0;
                                break
                            } a = u._isLotto ? o[0].id === h[0].id : o.attr("data-item-id") === h.attr("data-item-id") && o.attr("data-item-type") === h.attr("data-item-type");
                    !l && a || l && c.hasClass("focus") ? t(u) : v && a ? p(u, c) : e(n, u, r)
                }
        else e(n, u);
        else f(n, u, !1, r);
        o = null
    }, n.prototype.handleStakePadClick = function (n) {
        a(n, this)
    }, n.prototype.handleStakePadClickWithScope = function (n, t) {
        a(n, t)
    }, n.prototype.hide = function (n) {
        t(this, null, null, n)
    }, n.prototype.init = function (n) {
        n && (this._context = n);
        var t = this,
            r = $(':input[type="text"], :input[type="number"]', (this._context || this)._bsContainerElement),
            i, u;
        if (this.detach(), r.length > 0)
            for (t._stakeHandlers = [], i = 0, u = r.length; i < u; i++) $(r[i]).hasClass("stk") && (r[i].setAttribute("readonly", "readonly"), t._isLotto ? t._stakeHandlers.push(new window.ResponsiveClickHandler(r[i], $.proxy(t.show, t), !1)) : t._stakeHandlers.push(new b365.Ui.Betslip.ResponsiveClickHandler(r[i], $.proxy(t.show, t), !1)));
        t._isShowing && !n && (document.getElementById("stakePad") || (t._isShowing = !1))
    }, n.prototype.detach = function (n) {
        var t = n || this,
            i, r;
        if (t._stakeHandlers && t._stakeHandlers.length > 0) {
            for (i = 0, r = t._stakeHandlers.length; i < r; i++) t._stakeHandlers[i].destroy();
            t._stakeHandlers = []
        }
    }, n.prototype.reenable = function (n) {
        l(n);
        n.init()
    }, n.prototype.getStakePadMarkUp = function (n, t) {
        return u(n, t, this, !0)
    }, n.prototype.enableOrDisableKeys = function (n) {
        var i, t;
        n && n.length > 0 && (r(n[0].value, this), i = scope._isLotto ? $("#stakePad").siblings(".stake.keypad") : $("#stakePad").closest("li"), t = $(':input[type="text"]', i), t.length == 0 && (t = $(':input[type="number"]', i)), t.length > 0 && t.addClass("focus"))
    }, n.prototype.showKeyToolTip = function (n) {
        var u = this,
            t, f, e, i, r;
        if (u._showToolTips !== !1) {
            if (t = n.target.nodeName === "SPAN" ? $(n.target.parentNode) : $(n.target), i = $("#stakePadToolTip"), r = t.text(), t.hasClass("betSlipStakePadDisabledKey") || t[0].id == "betSlipStakePadOkWrapper" || r == "x" || r == u._decimalSeperator) {
                i.length > 0 && (t.removeClass("stakePadKeyDown"), i.removeClass("stakePadToolTipShow"));
                r == "x" && t.addClass("stakePadBackSpaceKeyDown");
                r == u._decimalSeperator && t.addClass("stakePadKeyDown");
                return
            }
            i.length > 0 && (f = t[0].getBoundingClientRect().width, e = t.position().left - 1, i.css("width", f + "px").css("left", e + "px"), i[0].innerHTML = r, t.addClass("stakePadKeyDown"), i.addClass("stakePadToolTipShow"))
        }
    }, n.prototype.hideKeyToolTip = function (n) {
        var u = this,
            t = n.target.nodeName === "SPAN" ? $(n.target.parentNode) : $(n.target),
            i = $("#stakePadToolTip"),
            r = t.text();
        if (t[0].nodeName.toLowerCase() != "button" || !t.hasClass("stakePadKeyDown") || t[0].id == "betSlipStakePadOkWrapper" || t.hasClass("betSlipStakePadDisabledKey") || r == "x" || r == u._decimalSeperator) {
            i.length > 0 && (t.removeClass("stakePadKeyDown"), t.removeClass("stakePadBackSpaceKeyDown"), i.removeClass("stakePadToolTipShow"));
            return
        }
        i.length > 0 && (t.removeClass("stakePadKeyDown"), i.removeClass("stakePadToolTipShow"))
    }, n.prototype.touchHoldHandler = function (n) {
        var i = scope._isLotto ? $("#stakePad").siblings(".stake.keypad") : $("#stakePad").closest("li"),
            t, u = n.target.nodeName === "SPAN" ? $(n.target.parentNode) : $(n.target),
            r;
        i.length > 0 && (t = $(':input[type="text"]', i), t.length == 0 && (t = $(':input[type="number"]', i)), t.hasClass("flexistk") && (t = t.closest(".active")), $("#stakePad").find("button").removeClass("stakePadKeyDown"), t.length > 0 && !t.hasClass("disabled") && u.text() == "x" && (r = window.setInterval(this.handleStakePadClickWithScope, 50, n, this), window.setTimeout(window.clearInterval, t[0].value.length * 50, r)))
    }, n
}();
Type.registerNamespace("b365.Ui.Betslip");
b365.Ui.Betslip.StakeEntryKeyboard = function (n, t) {
    this._bsInst = n;
    this._bsController = t;
    this._isValid = function () {
        return typeof this._bsInst != "undefined"
    };
    this._validTarget = function (n) {
        return n.target.tagName == "INPUT" && (n.target.type == "text" || n.target.type == "number" || n.target.type == "tel")
    };
    this._stakeEntryRule = this._bsController.stakeEntryRule()
};
b365.Ui.Betslip.StakeEntryKeyboard.prototype = {
    init: function () {
        var n = this;
        if (n._isValid()) {
            if (navigator.userAgent.toLowerCase().indexOf("blackberry") >= 0 && navigator.userAgent.toLowerCase().indexOf("webkit") >= 0 || navigator.userAgent.toLowerCase().search("(bb)([1-9][0-9]).*(mobile)") > -1) $("#bsDiv").off("keydown").on("keydown", function (t) {
                var u = t.keyCode ? t.keyCode : t.charCode,
                    i, r;
                n._validTarget(t) && (u == 13 && t.preventDefault(), i = t.target.value, i = i.replace(",", "."), i = i.replace("..", "."), i && (r = new b365.Ui.Formatter, $blib.isDecimal(i) && (t.target.value = r.roundValue(i))), window.setTimeout(function () {
                    new b365.Ui.Betslip.StakeChangedHandler(n._bsInst, n._bsController).handle(t.target)
                }, 0));
                t.stopPropagation()
            });
            $("#bsDiv").off("keyup").on("keyup", function (t) {
                var i = t.keyCode ? t.keyCode : t.charCode;
                n._validTarget(t) && (i == 13 && ((navigator.userAgent.toLowerCase().indexOf("blackberry") >= 0 && navigator.userAgent.toLowerCase().indexOf("webkit") >= 0 || navigator.userAgent.toLowerCase().search("(bb)([1-9][0-9]).*(mobile)") > -1) && $("#bsDiv").off("keydown"), document.activeElement.blur(), t.preventDefault()), typeof n._stakeEntryRule == "function" && (i == 110 || i == 188 || i == 190) && n._stakeEntryRule(t.target));
                t.stopPropagation()
            });
            $("#bsDiv input").on("input", function (t) {
                var i, r;
                n._validTarget(t) && (i = t.target.value, i = i.replace(",", "."), i = i.replace("..", "."), i && (r = new b365.Ui.Formatter, $blib.isDecimal(i) && typeof n._stakeEntryRule == "function" && n._stakeEntryRule(t.target)), new b365.Ui.Betslip.StakeChangedHandler(n._bsInst, n._bsController).handle(t.target));
                t.stopPropagation();
                t.preventDefault()
            })
        }
    },
    detach: function () {
        this._isValid()
    }
};
Type.registerNamespace("b365.Ui.Betslip");
b365.Ui.Betslip.CurrencyDisplayHelper = function (n, t) {
    this._betSlipController = n;
    this._decimalSeperator = t.decimalSeparator;
    this._thousandsSeperator = t.thousandsSeparator;
    this._pluralSymbol = window.top.ns_gen5_util.CurrencyFormatter.PluralSymbol;
    this._symbol = window.top.ns_gen5_util.CurrencyFormatter.Symbol;
    this._isoCode = t.isoCode
};
b365.Ui.Betslip.CurrencyDisplayHelper.prototype.getDecimalSeperator = function () {
    return this._decimalSeperator
};
b365.Ui.Betslip.CurrencyDisplayHelper.prototype.formatCurrency = function (n) {
    var t = n.toString().split(".");
    return isNaN(n) || t.length != 2 ? n : t[0].replace(/\B(?=(\d{3})+(?=$))/g, "") + (t[1] ? this._decimalSeperator + t[1] : "")
};
b365.Ui.Betslip.CurrencyDisplayHelper.prototype.unformatCurrency = function (n) {
    var t;
    if (isNaN(n)) {
        if (t = window.top.ns_gen5_util.CurrencyFormatter, t) {
            const i = t.UnformatCurrencyValue(n);
            return isNaN(i) ? "0" : i
        }
        return "0"
    }
    return n
};
Type.registerNamespace("b365.Ui.Betslip");
b365.Ui.Betslip.EnhancedBetSlipAnimations = function (n) {
    this._betSlipController = n;
    this._animationEndEvents = "animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd";
    this._disableBetSlip = {
        animationClass: "disableBetSlip",
        animationEndName: "Disabled",
        disabledClass: "disabledBetSlip"
    };
    this._enableBetSlip = {
        animationClass: "enableBetSlip",
        animationEndName: "Enabled"
    };
    this._shakeStakeFields = {
        animationClass: "shakeStakeField",
        animationEndName: "Shake",
        focusClass: "focus"
    }
};
b365.Ui.Betslip.EnhancedBetSlipAnimations.prototype.removeAllBets = function (n, t, i, r, u, f) {
    var e = this,
        o = $("#bsDiv"),
        s = n.length;
    this._betSlipController._stakeEntryHander.detach();
    e.doCallBack(r, u, f)
};
b365.Ui.Betslip.EnhancedBetSlipAnimations.prototype.shakeStakeFields = function (n, t, i, r, u) {
    var f = this,
        s = n.length,
        e = 0,
        o = i,
        h = r,
        c = u,
        l = t,
        a = n;
    t.on(this._animationEndEvents, function (n) {
        n.originalEvent.animationName && n.originalEvent.animationName == f._shakeStakeFields.animationEndName && (e += 1, e >= s && (a.removeClass(f._shakeStakeFields.animationClass), l.off(f._animationEndEvents), o && f.doCallBack(o, h, c)))
    });
    n.removeClass(f._shakeStakeFields.focusClass).removeClass(f._shakeStakeFields.animationClass).addClass(f._shakeStakeFields.focusClass).addClass(f._shakeStakeFields.animationClass)
};
b365.Ui.Betslip.EnhancedBetSlipAnimations.prototype.hideStakePad = function () {};
b365.Ui.Betslip.EnhancedBetSlipAnimations.prototype.showStakePad = function () {};
b365.Ui.Betslip.EnhancedBetSlipAnimations.prototype.disableBetSlip = function () {};
b365.Ui.Betslip.EnhancedBetSlipAnimations.prototype.enableBetSlip = function () {};
b365.Ui.Betslip.EnhancedBetSlipAnimations.prototype.doCallBack = function (n, t, i) {
    t ? i ? n.apply(i, t) : n.apply(null, t) : n()
};
Type.registerNamespace("b365.Ui.Betslip");
b365.Ui.Betslip.SelectorHelper = function (n) {
    this._overlay = null;
    this._betSlipWrapper = $("#bsDiv");
    this._delegate = n;
    this._cloneDropdown = null;
    this._clickHandler = null
};
b365.Ui.Betslip.SelectorHelper.prototype.getClonedAndPositionedSelector = function (n, t, i) {
    var l = 5,
        p = window.clientViewport().height,
        u = n,
        w = this,
        f = i ? i : 0,
        s, a, e, y;
    this._cloneDropdown = t.cloneNode(!0);
    this._betSlipWrapper[0].appendChild(this._cloneDropdown);
    s = new window.top.ns_gen5_ui.Component;
    s._element = this._cloneDropdown;
    typeof ns_scrollerlib_util != "undefined" && (a = new ns_scrollerlib_util.ScrollHelper(window.top.ns_gen5_ui.Application.currentApplication), a.enableScrollableSection(s));
    $(this._cloneDropdown).addClass("active");
    e = this._cloneDropdown.getBoundingClientRect().height;
    $(this._cloneDropdown).removeClass("active");
    w.addHandlers();
    this.setOverlay();
    var o = this._betSlipWrapper[0].getBoundingClientRect().top,
        h = u.getBoundingClientRect().top + getBetslipWebModule().bsFrame.getElement().getBoundingClientRect().top - l,
        c = p - u.getBoundingClientRect().bottom,
        b = u.getBoundingClientRect().bottom,
        v = -1,
        r = 0;
    return c > e || sProps.instantBet ? (r = u.getBoundingClientRect().bottom - o, r -= f, sProps.instantBet && (y = document.getElementsByClassName("ib-BsHeader")[0], r += y.getBoundingClientRect().height)) : h > e ? r = u.getBoundingClientRect().top - o - e + f : h > c ? (v = h, r = -(o - l) + f) : (v = c - 5, r = b - o - f), this._cloneDropdown.style.top = r + "px", $(this._cloneDropdown)
};
b365.Ui.Betslip.SelectorHelper.prototype.setOverlay = function () {
    var n = this,
        t = document.getElementById("bsDiv");
    sProps.instantBet ? n._clickHandler = new b365.Ui.Betslip.ResponsiveClickHandler(t, $.proxy(n.hideOverlay, n), !1) : (this._overlay = document.createElement("div"), this._overlay.setAttribute("class", "popupOverlay"), this._betSlipWrapper[0].appendChild(this._overlay), this._overlay.addEventListener("click", function () {
        n.hideOverlay()
    }), this._overlay.addEventListener("touchmove", function (n) {
        n.preventDefault()
    }, !0))
};
b365.Ui.Betslip.SelectorHelper.prototype.hideOverlay = function () {
    var n = this;
    this._overlay && (this._overlay.removeEventListener("touchend", n.hideOverlay, !1), this._overlay.removeEventListener("touchmove", function () {}, !1), this._betSlipWrapper[0].removeChild(this._overlay), this._overlay = null, n._delegate.hidePopUpMenu());
    n._clickHandler && (n._clickHandler.destroy(), n._clickHandler = null, n._delegate.hidePopUpMenu())
};
b365.Ui.Betslip.SelectorHelper.prototype.addHandlers = function () {
    var n = $(this._cloneDropdown).find("li"),
        t, r, i = this,
        u;
    if (n.length == 0 && i._delegate.getMenuSelector && (n = $(this._cloneDropdown).find(i._delegate.getMenuSelector())), n.length > 0)
        for (t = 0, r = n.length; t < r; t++) u = new b365.Ui.Betslip.ResponsiveClickHandler(n[t], $.proxy(i.itemSelect, i), !1, null, null, null, null, !1)
};
b365.Ui.Betslip.SelectorHelper.prototype.itemSelect = function (n) {
    var t = this;
    t._delegate.handleSelection(n);
    t.hideOverlay()
};
Type.registerNamespace("b365.Ui.Betslip");
b365.Ui.Betslip.EnhancedBetSlipTypeSelector = function (n) {
    this._betSlipController = n;
    this._selectClickHandler = null;
    this._isShowing = !1;
    this._enabled = !1;
    this._currentMenu = null;
    this._betSlipWrapper = $("#bsDiv");
    this._selectHelper = null
};
b365.Ui.Betslip.EnhancedBetSlipTypeSelector.prototype.showPopUpMenu = function () {
    var n = this,
        i, r, t;
    if (n._enabled && !$("#bsDiv .betslip-select select").hasClass("disabled")) {
        if (n._betSlipController.hidePopups(n), n._isShowing && n._currentMenu != null) {
            n.hidePopUpMenu();
            return
        }
        r = document.getElementById("BetSlipTypeSelectorWrapper");
        i = document.getElementById("BetSlipTypesWrapper");
        this._selectHelper = new b365.Ui.Betslip.SelectorHelper(n);
        t = this._selectHelper.getClonedAndPositionedSelector(r, i, 5);
        n._currentMenu = t;
        t.length > 0 && !t.hasClass("showing") ? (n._currentMenu = t, n._currentMenu.addClass("showing"), n._isShowing = !0, n._betSlipController._bsInst.changeBetslipHeight()) : (n._isShowing = !1, n.hidePopUpMenu())
    }
};
b365.Ui.Betslip.EnhancedBetSlipTypeSelector.prototype.hidePopUpMenu = function () {
    var n = this;
    n._isShowing && n._currentMenu != null && (n._currentMenu.removeClass("showing"), this._betSlipWrapper[0].removeChild(n._currentMenu[0]), n._currentMenu = null, n._currentSelector = null, n._currentSelect = null, n._isShowing = !1, n._betSlipController._bsInst.changeBetslipHeight(), n._selectHelper && (n._selectHelper.hideOverlay(), n._selectHelper = null))
};
b365.Ui.Betslip.EnhancedBetSlipTypeSelector.prototype.handleSelection = function (n) {
    var i = this,
        r = document.getElementById("BetSlipTypeSelector"),
        u = n.target.getAttribute("data-item"),
        t = n.target.innerHTML;
    n.stopPropagation();
    t !== "" && t.indexOf("<span") == -1 && (r.innerHTML = t, this._isShowing = !1, $("#bsDiv .betslip-select select").val(u).change(), i._currentMenu.removeClass("showing"))
};
b365.Ui.Betslip.EnhancedBetSlipTypeSelector.prototype.disablePopUp = function () {
    var n = this;
    n.hidePopUpMenu();
    n._selectClickHandler !== null && n._selectClickHandler._element && n._selectClickHandler.destroy();
    n._selectClickHandler = null;
    n._enabled = !1
};
b365.Ui.Betslip.EnhancedBetSlipTypeSelector.prototype.enablePopUp = function () {
    var n = this,
        t = document.getElementById("BetSlipTypeSelectorWrapper");
    if (n._selectClickHandler !== null && n._selectClickHandler._element) {
        n._enabled = !0;
        return
    }
    if (!t) {
        n._enabled = !1;
        n._isShowing = !1;
        return
    }
    n._selectClickHandler = new b365.Ui.Betslip.ResponsiveClickHandler(t, $.proxy(n.showPopUpMenu, n), !1);
    n._enabled = !0;
    t = null
};
Type.registerNamespace("b365.Ui.Betslip");
b365.Ui.Betslip.EnhancedBetSlipOddsSelector = function (n) {
    this._betSlipController = n;
    this._siteClickHandlers = [];
    this._selectClickHandlers = [];
    this._betSlipWrapper = $("#bsDiv");
    this._currentMenu = null;
    this._currentSelector = null;
    this._currentSelect = null;
    this._isShowing = !1;
    this._enabled = !1;
    this._dropDown = null;
    this._selectHelper = null
};
b365.Ui.Betslip.EnhancedBetSlipOddsSelector.prototype.showPopUpMenu = function (n) {
    var t = this;
    t._betSlipController.hidePopups(t);
    $("#bsDiv li.keypad").length > 0 ? setTimeout(function () {
        t.displayPopUpMenu(n)
    }, 250) : t.displayPopUpMenu(n)
};
b365.Ui.Betslip.EnhancedBetSlipOddsSelector.prototype.displayPopUpMenu = function (n) {
    var t = this,
        r = $(n.target),
        i = r.parent().find(".EnhancedOddsWrapper"),
        u = r.parent().find("select.odds"),
        o = r.parent(),
        f, e;
    if (t._dropDown = i, t._isShowing && t._currentMenu != null) {
        t.hidePopUpMenu();
        return
    }(t._selectHelper = new b365.Ui.Betslip.SelectorHelper(t), i = t._selectHelper.getClonedAndPositionedSelector(r[0], i[0]), n.stopPropagation(), t._enabled && !u.hasClass("disabled")) && (i.length > 0 && !i.hasClass("showing") ? (t._currentMenu = i, t._currentMenu.addClass("showing"), f = $("#betslipContainer")[0].getBoundingClientRect().left, e = o[0].getBoundingClientRect().left - f, i[0].style.left = e - 2 + "px", t._currentSelector = r, t._currentSelect = u, t._isShowing = !0) : t.hidePopUpMenu())
};
b365.Ui.Betslip.EnhancedBetSlipOddsSelector.prototype.hidePopUpMenu = function () {
    var n = this;
    n._isShowing && n._currentMenu != null && (n._currentMenu.removeClass("showing"), n.removeHandlers(n), this._betSlipWrapper[0].removeChild(n._currentMenu[0]), n._currentMenu = null, n._currentSelector = null, n._currentSelect = null, n._isShowing = !1, n._selectHelper && (n._selectHelper.hideOverlay(), n._selectHelper = null))
};
b365.Ui.Betslip.EnhancedBetSlipOddsSelector.prototype.addSelectHandlers = function (n, t) {
    var i, r;
    if (t.length == 0 && (t = $(".EnhancedOddsSelection", n._betSlipWrapper)), t != 0)
        for (n._selectClickHandlers = [], i = 0, r = t.length; i < r; i++) n._selectClickHandlers.push(new b365.Ui.Betslip.ResponsiveClickHandler(t[i], $.proxy(n.showPopUpMenu, n), !1))
};
b365.Ui.Betslip.EnhancedBetSlipOddsSelector.prototype.removeSelectHandlers = function (n) {
    var t, i;
    if (n._selectClickHandlers.length > 0) {
        for (t = 0, i = n._selectClickHandlers.length; t < i; t++) n._selectClickHandlers[t]._element && n._selectClickHandlers[t].destroy();
        n._selectClickHandlers = []
    }
};
b365.Ui.Betslip.EnhancedBetSlipOddsSelector.prototype.removeHandlers = function (n) {
    var t, i;
    if (n._siteClickHandlers.length > 0) {
        for (t = 0, i = n._siteClickHandlers.length; t < i; t++) n._siteClickHandlers[t]._element && n._siteClickHandlers[t].destroy();
        n._siteClickHandlers = []
    }
};
b365.Ui.Betslip.EnhancedBetSlipOddsSelector.prototype.handleSelection = function (n) {
    var i = this,
        o = n.target.getAttribute("data-item"),
        u = n.target.innerHTML,
        r = i._currentMenu.find("li"),
        f = "EnhancedOddsItem-selected",
        t, e;
    if (n.stopPropagation(), u !== "" && u.indexOf("<span") == -1) {
        for (i._currentSelector[0].innerHTML = u, t = 0, e = r.length; t < e; t++) r[t].className = r[t].className.replace(new RegExp("(^| )" + f + "( |$)"), ""), r[t].innerHTML = r[t].innerHTML.replace('<span class="selected"><\/span>', "");
        i._currentSelect.val(o).change();
        n.target && (n.target.className && n.target.className.indexOf(f) === -1 && (n.target.className += n.target.className.length > 0 ? " " + f : f), n.target.innerHTML = u + '<span class="selected"><\/span>')
    }
    this._dropDown[0].innerHTML = i._currentMenu[0].innerHTML;
    i.hidePopUpMenu(i)
};
b365.Ui.Betslip.EnhancedBetSlipOddsSelector.prototype.disablePopUps = function () {
    var n = this;
    n.hidePopUpMenu();
    n.removeSelectHandlers(n);
    n._enabled = !1
};
b365.Ui.Betslip.EnhancedBetSlipOddsSelector.prototype.enablePopUps = function () {
    var n = this,
        t = $(".EnhancedOddsSelection", n._betSlipWrapper);
    if (n.removeHandlers(n), n.removeSelectHandlers(n), t.length == 0) {
        n._enabled = !1;
        n._isShowing = !1;
        return
    }
    n.addSelectHandlers(n, t);
    n._enabled = !0
};
Type.registerNamespace("b365.Ui.Betslip");
b365.Ui.Betslip.EnhancedBetSlipPitcherSelector = function (n) {
    this._betSlipController = n;
    this._siteClickHandlers = [];
    this._selectClickHandlers = [];
    this._betSlipWrapper = $("#bsDiv");
    this._currentMenu = null;
    this._currentSelector = null;
    this._currentSelect = null;
    this._isShowing = !1;
    this._enabled = !1;
    this._screenHeight = window.screen.height;
    this._selectHelper = null
};
b365.Ui.Betslip.EnhancedBetSlipPitcherSelector.prototype.showPopUpMenu = function (n) {
    var t = this;
    t._betSlipController.hidePopups(t);
    $("#bsDiv li.keypad").length > 0 ? setTimeout(function () {
        t.displayPopUpMenu(n)
    }, 250) : t.displayPopUpMenu(n)
};
b365.Ui.Betslip.EnhancedBetSlipPitcherSelector.prototype.displayPopUpMenu = function (n) {
    var t = this,
        i, r, u;
    if (i = $(n.target), i.hasClass("EnhancedPitcherSelection") && (i = i.parent()), r = i.parent().find(".EnhancedPitcherWrapper"), u = i.parent().find("select.pitcher-sel"), t._isShowing && t._currentMenu != null) {
        t.hidePopUpMenu();
        return
    }
    if (t._selectHelper = new b365.Ui.Betslip.SelectorHelper(t), r = t._selectHelper.getClonedAndPositionedSelector(i[0], r[0]), n.stopPropagation(), t._enabled && !u.hasClass("disabled"))
        if (r.length > 0 && !r.hasClass("showing")) {
            t._currentMenu = r;
            t._currentMenu.addClass("showing");
            var e = $("#betslipContainer")[0].getBoundingClientRect().left,
                o = t._betSlipWrapper.width(),
                f = i[0].getBoundingClientRect().left - e,
                s = o - f;
            r.width() > s ? r[0].style.right = "10px" : r[0].style.left = f - 11 + "px";
            t._currentSelector = i;
            t._currentSelect = u;
            t._isShowing = !0;
            t._betSlipController._bsInst.changeBetslipHeight()
        } else t.hidePopUpMenu()
};
b365.Ui.Betslip.EnhancedBetSlipPitcherSelector.prototype.hidePopUpMenu = function () {
    var n = this;
    n._isShowing && n._currentMenu != null && (n._currentMenu.removeClass("showing"), n.removeHandlers(n), this._betSlipWrapper[0].removeChild(n._currentMenu[0]), n._currentMenu = null, n._currentSelector = null, n._currentSelect = null, n._isShowing = !1, n._betSlipController._bsInst.changeBetslipHeight(), n._selectHelper && (n._selectHelper.hideOverlay(), n._selectHelper = null))
};
b365.Ui.Betslip.EnhancedBetSlipPitcherSelector.prototype.addSelectHandlers = function (n, t) {
    var i, r;
    if (t.length == 0 && (t = $(".EnhancedPitcherSelectionWrapper", n._betSlipWrapper)), t != 0)
        for (n._selectClickHandlers = [], i = 0, r = t.length; i < r; i++) n._selectClickHandlers.push(new b365.Ui.Betslip.ResponsiveClickHandler(t[i], $.proxy(n.showPopUpMenu, n), !1))
};
b365.Ui.Betslip.EnhancedBetSlipPitcherSelector.prototype.removeSelectHandlers = function (n) {
    var t, i;
    if (n._selectClickHandlers.length > 0) {
        for (t = 0, i = n._selectClickHandlers.length; t < i; t++) n._selectClickHandlers[t]._element && n._selectClickHandlers[t].destroy();
        n._selectClickHandlers = []
    }
};
b365.Ui.Betslip.EnhancedBetSlipPitcherSelector.prototype.removeHandlers = function (n) {
    var t, i;
    if (n._siteClickHandlers.length > 0) {
        for (t = 0, i = n._siteClickHandlers.length; t < i; t++) n._siteClickHandlers[t]._element && n._siteClickHandlers[t].destroy();
        n._siteClickHandlers = []
    }
};
b365.Ui.Betslip.EnhancedBetSlipPitcherSelector.prototype.handleSelection = function (n) {
    var t = this,
        e = n.target.getAttribute("data-item"),
        r = n.target.innerHTML,
        u = t._currentMenu.find("li"),
        i, f;
    if (n.stopPropagation(), r !== "" && r.indexOf("<span") == -1) {
        for (t._currentSelector.hasClass("EnhancedPitcherSelection") || (t._currentSelector = t._currentSelector.find(".EnhancedPitcherSelection")), t._currentSelector[0].innerHTML = r, i = 0, f = u.length; i < f; i++) u[i].innerHTML = u[i].innerHTML.replace('<span class="selected"><\/span>', "");
        t._currentSelect.val(e).change();
        n.target.innerHTML = r + '<span class="selected"><\/span>'
    }
    t._betSlipController.refreshBetslip();
    t.hidePopUpMenu()
};
b365.Ui.Betslip.EnhancedBetSlipPitcherSelector.prototype.disablePopUps = function () {
    var n = this;
    n.hidePopUpMenu();
    n.removeSelectHandlers(n);
    n._enabled = !1
};
b365.Ui.Betslip.EnhancedBetSlipPitcherSelector.prototype.enablePopUps = function () {
    var n = this,
        t = $(".EnhancedPitcherSelectionWrapper", n._betSlipWrapper);
    if (n.removeHandlers(n), n.removeSelectHandlers(n), t.length == 0) {
        n._enabled = !1;
        n._isShowing = !1;
        return
    }
    n.addSelectHandlers(n, t);
    n._enabled = !0
};
Type.registerNamespace("b365.Ui.Betslip");
b365.Ui.Betslip.EnhancedBetSlipToteSelector = function (n) {
    this._betSlipController = n;
    this._siteClickHandlers = [];
    this._selectClickHandlers = [];
    this._betSlipWrapper = $("#bsDiv");
    this._currentMenu = null;
    this._currentSelector = null;
    this._currentSelect = null;
    this._isShowing = !1;
    this._enabled = !1;
    this._dropDown = null;
    this._selectHelper = null
};
b365.Ui.Betslip.EnhancedBetSlipToteSelector.prototype.showPopUpMenu = function (n) {
    var t = this;
    t._betSlipController.hidePopups(t);
    $("#bsDiv li.keypad").length > 0 ? setTimeout(function () {
        t.displayPopUpMenu(n)
    }, 250) : t.displayPopUpMenu(n)
};
b365.Ui.Betslip.EnhancedBetSlipToteSelector.prototype.displayPopUpMenu = function (n) {
    var t = this,
        r = $(n.target),
        i = r.parent().find(".EnhancedToteWrapper"),
        u = r.parent().find("select.aus-tote");
    if (n.stopPropagation(), t._enabled && !u.hasClass("disabled")) {
        if (t._isShowing && t._currentMenu != null) {
            t.hidePopUpMenu();
            return
        }
        t._dropDown = i;
        t._selectHelper = new b365.Ui.Betslip.SelectorHelper(t);
        i = t._selectHelper.getClonedAndPositionedSelector(r[0], i[0]);
        i.length > 0 && !i.hasClass("showing") ? (t._currentMenu = i, t._currentMenu.addClass("showing"), t._currentSelector = r, t._currentSelect = u, t._isShowing = !0, t._betSlipController._bsInst.changeBetslipHeight()) : t.hidePopUpMenu()
    }
};
b365.Ui.Betslip.EnhancedBetSlipToteSelector.prototype.hidePopUpMenu = function () {
    var n = this;
    n._isShowing && n._currentMenu != null && (n._currentMenu.removeClass("showing"), n.removeHandlers(n), this._betSlipWrapper[0].removeChild(n._currentMenu[0]), n._currentMenu = null, n._currentSelector = null, n._currentSelect = null, n._isShowing = !1, n._betSlipController._bsInst.changeBetslipHeight(), n._selectHelper && (n._selectHelper.hideOverlay(), n._selectHelper = null))
};
b365.Ui.Betslip.EnhancedBetSlipToteSelector.prototype.addSelectHandlers = function (n, t) {
    var i, r;
    if (t.length == 0 && (t = $(".EnhancedToteSelection", n._betSlipWrapper)), t != 0)
        for (n._selectClickHandlers = [], i = 0, r = t.length; i < r; i++) n._selectClickHandlers.push(new b365.Ui.Betslip.ResponsiveClickHandler(t[i], $.proxy(n.showPopUpMenu, n), !1))
};
b365.Ui.Betslip.EnhancedBetSlipToteSelector.prototype.removeSelectHandlers = function (n) {
    var t, i;
    if (n._selectClickHandlers.length > 0) {
        for (t = 0, i = n._selectClickHandlers.length; t < i; t++) n._selectClickHandlers[t]._element && n._selectClickHandlers[t].destroy();
        n._selectClickHandlers = []
    }
};
b365.Ui.Betslip.EnhancedBetSlipToteSelector.prototype.removeHandlers = function (n) {
    var t, i;
    if (n._siteClickHandlers.length > 0) {
        for (t = 0, i = n._siteClickHandlers.length; t < i; t++) n._siteClickHandlers[t]._element && n._siteClickHandlers[t].destroy();
        n._siteClickHandlers = []
    }
};
b365.Ui.Betslip.EnhancedBetSlipToteSelector.prototype.handleSelection = function (n) {
    var t = this,
        e = n.target.getAttribute("data-item"),
        r = n.target.innerHTML,
        u = t._currentMenu.find("li"),
        i, f;
    if (n.stopPropagation(), r !== "" && r.indexOf("<span") == -1) {
        for (t._currentSelector[0].innerHTML = r, i = 0, f = u.length; i < f; i++) u[i].innerHTML = u[i].innerHTML.replace('<span class="selected"><\/span>', "");
        t._currentSelect.val(e).change();
        n.target.innerHTML = r + '<span class="selected"><\/span>'
    }
    this._dropDown[0].innerHTML = t._currentMenu[0].innerHTML;
    t.hidePopUpMenu()
};
b365.Ui.Betslip.EnhancedBetSlipToteSelector.prototype.disablePopUps = function () {
    var n = this;
    n.hidePopUpMenu();
    n.removeSelectHandlers(n);
    n._enabled = !1
};
b365.Ui.Betslip.EnhancedBetSlipToteSelector.prototype.enablePopUps = function () {
    var n = this,
        t = $(".EnhancedToteSelection", n._betSlipWrapper);
    if (n.removeHandlers(n), n.removeSelectHandlers(n), t.length == 0) {
        n._enabled = !1;
        n._isShowing = !1;
        return
    }
    n.addSelectHandlers(n, t);
    n._enabled = !0
};
Type.registerNamespace("b365.Ui.Betslip");
b365.Ui.Betslip.EnhancedBetSlipIfBetSelector = function (n) {
    this._betSlipController = n;
    this._clickHandlers = [];
    this._siteClickHandlers = [];
    this._selectClickHandlers = [];
    this._betSlipWrapper = $("#bsDiv");
    this._currentMenu = null;
    this._currentSelector = null;
    this._currentSelect = null;
    this._isShowing = !1;
    this._enabled = !1;
    this._dropDown = null;
    this._selectHelper = null
};
b365.Ui.Betslip.EnhancedBetSlipIfBetSelector.prototype.showPopUpMenu = function (n) {
    var t = this;
    t._betSlipController.hidePopups(t);
    $("#bsDiv li.keypad").length > 0 ? setTimeout(function () {
        t.displayPopUpMenu(n)
    }, 250) : t.displayPopUpMenu(n)
};
b365.Ui.Betslip.EnhancedBetSlipIfBetSelector.prototype.displayPopUpMenu = function (n) {
    var t = this,
        r = $(n.target),
        i = r.parent().find(".EnhancedIfBetWrapper"),
        u = r.parent().find("select.ifbetaction"),
        f;
    if (n.stopPropagation(), t._isShowing && t._currentMenu != null) {
        t.hidePopUpMenu();
        return
    }
    t._enabled && !u.hasClass("disabled") && (t._dropDown = i, t._selectHelper = new b365.Ui.Betslip.SelectorHelper(t), i = t._selectHelper.getClonedAndPositionedSelector(r[0], i[0]), i.length > 0 && !i.hasClass("showing") ? (t._currentMenu = i, t._currentMenu.addClass("showing"), f = $("#betslipContainer")[0].getBoundingClientRect().left, i[0].style.left = r[0].getBoundingClientRect().left - f + "px", t._currentSelector = r, t._currentSelect = u, t._isShowing = !0) : t.hidePopUpMenu())
};
b365.Ui.Betslip.EnhancedBetSlipIfBetSelector.prototype.hidePopUpMenu = function () {
    var n = this;
    n._isShowing && n._currentMenu != null && (n._currentMenu.removeClass("showing"), n.removeHandlers(n), this._betSlipWrapper[0].removeChild(n._currentMenu[0]), n._currentMenu = null, n._currentSelector = null, n._currentSelect = null, n._isShowing = !1, n._selectHelper && (n._selectHelper.hideOverlay(), n._selectHelper = null))
};
b365.Ui.Betslip.EnhancedBetSlipIfBetSelector.prototype.addSelectHandlers = function (n, t) {
    var i, r;
    if (t.length == 0 && (t = $(".EnhancedIfBetSelection", n._betSlipWrapper)), t != 0)
        for (n._selectClickHandlers = [], i = 0, r = t.length; i < r; i++) n._selectClickHandlers.push(new b365.Ui.Betslip.ResponsiveClickHandler(t[i], $.proxy(n.showPopUpMenu, n), !1))
};
b365.Ui.Betslip.EnhancedBetSlipIfBetSelector.prototype.removeSelectHandlers = function (n) {
    var t, i;
    if (n._selectClickHandlers.length > 0) {
        for (t = 0, i = n._selectClickHandlers.length; t < i; t++) n._selectClickHandlers[t]._element && n._selectClickHandlers[t].destroy();
        n._selectClickHandlers = []
    }
};
b365.Ui.Betslip.EnhancedBetSlipIfBetSelector.prototype.addHandlers = function (n) {
    var i = document.getElementById("BetSlipDialogueHeader"),
        r = n._currentMenu.find("li"),
        t, u;
    if (n.removeHandlers(n), r.length > 0)
        for (t = 0, u = r.length; t < u; t++) n._clickHandlers.push(new b365.Ui.Betslip.ResponsiveClickHandler(r[t], $.proxy(n.handleSelection, n), !1));
    i && n._siteClickHandlers.push(new b365.Ui.Betslip.ResponsiveClickHandler(i, $.proxy(n.hidePopUpMenu, n), !1));
    n._siteClickHandlers.push(new b365.Ui.Betslip.ResponsiveClickHandler(n._betSlipWrapper[0], $.proxy(n.hidePopUpMenu, n), !1));
    i = null
};
b365.Ui.Betslip.EnhancedBetSlipIfBetSelector.prototype.removeHandlers = function (n) {
    var t, i;
    if (n._clickHandlers.length > 0) {
        for (t = 0, i = n._clickHandlers.length; t < i; t++) n._clickHandlers[t]._element && n._clickHandlers[t].destroy();
        n._clickHandlers = []
    }
    if (n._siteClickHandlers.length > 0) {
        for (t = 0, i = n._siteClickHandlers.length; t < i; t++) n._siteClickHandlers[t]._element && n._siteClickHandlers[t].destroy();
        n._siteClickHandlers = []
    }
};
b365.Ui.Betslip.EnhancedBetSlipIfBetSelector.prototype.handleSelection = function (n) {
    var f = this,
        l = n.target.getAttribute("data-item"),
        e = n.target.innerHTML,
        s = f._currentMenu.find("li"),
        o, r, c, t, h, i, a, u;
    if (n.stopPropagation(), e !== "" && e.indexOf("<span") == -1 && (o = document.getElementsByClassName("ifBetSelectorRow"), u = "EnhancedIfBet-selected", o.length > 0))
        if (f._currentSelector[0] == o[0].getElementsByClassName("EnhancedIfBetSelection")[0])
            for (t = 0, h = o.length; t < h; t++) {
                for (o[t].getElementsByClassName("EnhancedIfBetSelection")[0].innerHTML = e, r = o[t].getElementsByTagName("li"), i = 0, a = r.length; i < a; i++) r[i].innerText == e ? (r[i].className.indexOf(u) === -1 && (r[i].className += r[i].className.length > 0 ? " " + u : u), r[i].innerHTML = e + '<span class="selected"><\/span>') : (r[i].className = r[i].className.replace(new RegExp("(^| )" + u + "( |$)"), ""), r[i].innerHTML = r[i].innerHTML.replace('<span class="selected"><\/span>', ""));
                c = o[t].getElementsByTagName("select")[0];
                c.value = l;
                $(c).change()
            } else {
                for (f._currentSelector[0].innerHTML = e, t = 0, h = s.length; t < h; t++) s[t].className = s[t].className.replace(new RegExp("(^| )" + u + "( |$)"), ""), s[t].innerHTML = s[t].innerHTML.replace('<span class="selected"><\/span>', "");
                f._currentSelect.val(l).change();
                n.target && (n.target.className && n.target.className.indexOf(u) === -1 && (n.target.className += n.target.className.length > 0 ? " " + u : u), n.target.innerHTML = e + '<span class="selected"><\/span>');
                this._dropDown[0].innerHTML = f._currentMenu[0].innerHTML
            }
    f.hidePopUpMenu(f)
};
b365.Ui.Betslip.EnhancedBetSlipIfBetSelector.prototype.disablePopUps = function () {
    var n = this;
    n.hidePopUpMenu();
    n.removeSelectHandlers(n);
    n._enabled = !1
};
b365.Ui.Betslip.EnhancedBetSlipIfBetSelector.prototype.enablePopUps = function () {
    var n = this,
        t = $(".EnhancedIfBetSelection", n._betSlipWrapper);
    if (n.removeHandlers(n), n.removeSelectHandlers(n), t.length == 0) {
        n._enabled = !1;
        n._isShowing = !1;
        return
    }
    n.addSelectHandlers(n, t);
    n._enabled = !0
};
Type.registerNamespace("b365.Ui.Betslip");
b365.Ui.Betslip.EnhancedBetSlipTeaserTypeSelector = function (n) {
    this._betSlipController = n;
    this._siteClickHandlers = [];
    this._selectClickHandlers = [];
    this._betSlipWrapper = $("#bsDiv");
    this._currentMenu = null;
    this._currentSelector = null;
    this._currentSelect = null;
    this._isShowing = !1;
    this._enabled = !1;
    this._selectHelper = null
};
b365.Ui.Betslip.EnhancedBetSlipTeaserTypeSelector.prototype.showPopUpMenu = function (n) {
    var t = this;
    t._betSlipController.hidePopups(t);
    $("#bsDiv li.keypad").length > 0 ? setTimeout(function () {
        t.displayPopUpMenu(n)
    }, 250) : t.displayPopUpMenu(n)
};
b365.Ui.Betslip.EnhancedBetSlipTeaserTypeSelector.prototype.displayPopUpMenu = function (n) {
    var t = this,
        i, r, u;
    if (i = $(n.target), i.hasClass("EnhancedTeaserSelection") && (i = i.parent()), r = i.parent().find(".EnhancedTeaserWrapper"), u = i.parent().find("select.teaserSel"), n.stopPropagation(), t._enabled && !u.hasClass("disabled")) {
        if (t._isShowing && t._currentMenu != null) {
            t.hidePopUpMenu();
            return
        }
        if (t._selectHelper = new b365.Ui.Betslip.SelectorHelper(t), r = t._selectHelper.getClonedAndPositionedSelector(i[0], r[0]), r.length > 0 && !r.hasClass("showing")) {
            t._currentMenu = r;
            t._currentMenu.addClass("showing");
            var e = $("#betslipContainer")[0].getBoundingClientRect().left,
                o = this._betSlipWrapper.width(),
                f = i[0].getBoundingClientRect().left - e,
                s = o - f;
            r.width() > s ? r[0].style.right = "10px" : r[0].style.left = f - 11 + "px";
            t._currentSelector = i;
            t._currentSelect = u;
            t._isShowing = !0;
            t._betSlipController._bsInst.changeBetslipHeight()
        } else t.hidePopUpMenu()
    }
};
b365.Ui.Betslip.EnhancedBetSlipTeaserTypeSelector.prototype.hidePopUpMenu = function () {
    var n = this;
    n._isShowing && n._currentMenu != null && (n._currentMenu.removeClass("showing"), n.removeHandlers(n), this._betSlipWrapper[0].removeChild(n._currentMenu[0]), n._currentMenu = null, n._currentSelector = null, n._currentSelect = null, n._isShowing = !1, n._betSlipController._bsInst.changeBetslipHeight(), n._selectHelper && (n._selectHelper.hideOverlay(), n._selectHelper = null))
};
b365.Ui.Betslip.EnhancedBetSlipTeaserTypeSelector.prototype.addSelectHandlers = function (n, t) {
    var i, r;
    if (t.length == 0 && (t = $(".EnhancedTeaserSelectionWrapper", n._betSlipWrapper)), t != 0)
        for (n._selectClickHandlers = [], i = 0, r = t.length; i < r; i++) n._selectClickHandlers.push(new b365.Ui.Betslip.ResponsiveClickHandler(t[i], $.proxy(n.showPopUpMenu, n), !1))
};
b365.Ui.Betslip.EnhancedBetSlipTeaserTypeSelector.prototype.removeSelectHandlers = function (n) {
    var t, i;
    if (n._selectClickHandlers.length > 0) {
        for (t = 0, i = n._selectClickHandlers.length; t < i; t++) n._selectClickHandlers[t]._element && n._selectClickHandlers[t].destroy();
        n._selectClickHandlers = []
    }
};
b365.Ui.Betslip.EnhancedBetSlipTeaserTypeSelector.prototype.removeHandlers = function (n) {
    var t, i;
    if (n._siteClickHandlers.length > 0) {
        for (t = 0, i = n._siteClickHandlers.length; t < i; t++) n._siteClickHandlers[t]._element && n._siteClickHandlers[t].destroy();
        n._siteClickHandlers = []
    }
};
b365.Ui.Betslip.EnhancedBetSlipTeaserTypeSelector.prototype.handleSelection = function (n) {
    var t = this,
        e = n.target.getAttribute("data-item"),
        r = n.target.innerHTML,
        u = t._currentMenu.find("li"),
        i, f;
    if (n.stopPropagation(), r !== "" && r.indexOf("<span") == -1) {
        for (t._currentSelector.find(".EnhancedTeaserSelection").text(r), i = 0, f = u.length; i < f; i++) u[i].innerHTML = u[i].innerHTML.replace('<span class="selected"><\/span>', "");
        t._currentSelect.val(e).change();
        n.target.innerHTML = r + '<span class="selected"><\/span>'
    }
    t.hidePopUpMenu(t)
};
b365.Ui.Betslip.EnhancedBetSlipTeaserTypeSelector.prototype.disablePopUps = function () {
    var n = this;
    n.hidePopUpMenu();
    n.removeSelectHandlers(n);
    n._enabled = !1
};
b365.Ui.Betslip.EnhancedBetSlipTeaserTypeSelector.prototype.enablePopUps = function () {
    var n = this,
        t = $(".EnhancedTeaserSelectionWrapper", n._betSlipWrapper);
    if (n.removeHandlers(n), n.removeSelectHandlers(n), t.length == 0) {
        n._enabled = !1;
        n._isShowing = !1;
        return
    }
    n.addSelectHandlers(n, t);
    n._enabled = !0
};
Type.registerNamespace("b365.Ui.Betslip");
b365.Ui.Betslip.EnhancedBetSlipEachWayExtraSelector = function (n) {
    this._betSlipController = n;
    this._clickHandlers = [];
    this._siteClickHandlers = [];
    this._selectClickHandlers = [];
    this._betSlipWrapper = $("#bsDiv");
    this._currentMenu = null;
    this._currentSelector = null;
    this._isShowing = !1;
    this._enabled = !1;
    this._dropDown = null;
    this._selectHelper = null;
    this._formatOdds = function (n) {
        var i = window.top.Locator.user.oddsTypeId,
            t = n;
        return n == "0/0" ? t = "SP" : i == window.top.ns_gen5_util.OddsType.DECIMAL ? t = window.top.ns_gen5_util.OddsConverter.ConvertOddsDecimal(n, this.decimalPlaces) : i == window.top.ns_gen5_util.OddsType.AMERICAN && (t = window.top.ns_gen5_util.OddsConverter.ConvertOddsUS(n)), t
    }
};
b365.Ui.Betslip.EnhancedBetSlipEachWayExtraSelector.prototype.showPopUpMenu = function (n) {
    var t = this;
    t._betSlipController.hidePopups(t);
    $("#bsDiv li.keypad").length > 0 ? setTimeout(function () {
        t.displayPopUpMenu(n)
    }, 250) : t.displayPopUpMenu(n)
};
b365.Ui.Betslip.EnhancedBetSlipEachWayExtraSelector.prototype.displayPopUpMenu = function (n) {
    var t = this,
        r, i, f, u, o, s, e, h, c;
    if (r = $(n.target), i = r.parent().parent().find(".bs-EachWayExtraBetType_Wrapper"), t._enabled && !i.parent().hasClass("disabled")) {
        if (n.stopPropagation(), t._isShowing && t._currentMenu != null) {
            t.hidePopUpMenu();
            return
        }
        if (t._dropDown = i, t._selectHelper = new b365.Ui.Betslip.SelectorHelper(t), i = t._selectHelper.getClonedAndPositionedSelector(r[0], i[0]), i.length > 0 && !i.hasClass("showing")) {
            if (t._currentMenu = i, t._currentMenu.addClass("showing"), h = i[0].getBoundingClientRect().height - i[0].getBoundingClientRect().top, bsApp.popupShow(h), c = $("#betslipContainer")[0].getBoundingClientRect().left, i[0].style.left = Math.floor(r[0].getBoundingClientRect().left - c) + "px", t.addHandlers(t), r[0].className.indexOf("bs-EachWayExtraBetType_SelectionWrapper") > -1 && (r = r[0].getElementsByClassName("bs-EachWayExtraBetType_Selection")), t._currentSelector = r, f = i[0].getElementsByClassName("bs-EachWayExtraBetType_Menu")[0], f)
                for (s = f.children.length, e = 0; e < s; e++)(u = f.children[e], u.className.indexOf("selected") > -1) || (o = t._betSlipController._bsInst.getBetItemByFixtureParticipant(t._betSlipController._bsInst.betTypeNormal, u.getAttribute("data-fixtureid"), u.getAttribute("data-participantid"), "fp"), o ? $(u).addClass("disabled") : $(u).removeClass("disabled"));
            t._isShowing = !0
        } else t.hidePopUpMenu()
    }
};
b365.Ui.Betslip.EnhancedBetSlipEachWayExtraSelector.prototype.hidePopUpMenu = function () {
    var n = this;
    n._isShowing && n._currentMenu != null && (n._currentMenu.removeClass("showing"), n.removeHandlers(n), this._betSlipWrapper[0].removeChild(n._currentMenu[0]), n._currentMenu = null, n._currentSelector = null, n._isShowing = !1, n._betSlipController._bsInst.changeBetslipHeight(), n._selectHelper && (n._selectHelper.hideOverlay(), n._selectHelper = null), bsApp.popupHide())
};
b365.Ui.Betslip.EnhancedBetSlipEachWayExtraSelector.prototype.addSelectHandlers = function (n, t) {
    var i, r;
    for (n._selectClickHandlers = [], i = 0, r = t.length; i < r; i++) n._selectClickHandlers.push(new b365.Ui.Betslip.ResponsiveClickHandler(t[i], $.proxy(n.showPopUpMenu, n), !1))
};
b365.Ui.Betslip.EnhancedBetSlipEachWayExtraSelector.prototype.removeSelectHandlers = function (n) {
    var t, i;
    if (n._selectClickHandlers.length > 0) {
        for (t = 0, i = n._selectClickHandlers.length; t < i; t++) n._selectClickHandlers[t]._element && n._selectClickHandlers[t].destroy();
        n._selectClickHandlers = []
    }
};
b365.Ui.Betslip.EnhancedBetSlipEachWayExtraSelector.prototype.addHandlers = function (n) {
    var i = document.getElementById("BetSlipDialogueHeader"),
        r = n._currentMenu.find(".bs-EachWayExtraBetType_MenuItemWrapper"),
        t, u;
    if (n.removeHandlers(n), r.length > 0)
        for (t = 0, u = r.length; t < u; t++) n._clickHandlers.push(new b365.Ui.Betslip.ResponsiveClickHandler(r[t], $.proxy(n.handleSelection, n), !1));
    i && n._siteClickHandlers.push(new b365.Ui.Betslip.ResponsiveClickHandler(i, $.proxy(n.hidePopUpMenu, n), !1));
    n._siteClickHandlers.push(new b365.Ui.Betslip.ResponsiveClickHandler(n._betSlipWrapper[0], $.proxy(n.hidePopUpMenu, n), !1));
    i = null
};
b365.Ui.Betslip.EnhancedBetSlipEachWayExtraSelector.prototype.getMenuSelector = function () {
    return ".bs-EachWayExtraBetType_MenuItemWrapper"
};
b365.Ui.Betslip.EnhancedBetSlipEachWayExtraSelector.prototype.removeHandlers = function (n) {
    var t, i;
    if (n._clickHandlers.length > 0) {
        for (t = 0, i = n._clickHandlers.length; t < i; t++) n._clickHandlers[t]._element && n._clickHandlers[t].destroy();
        n._clickHandlers = []
    }
    if (n._siteClickHandlers.length > 0) {
        for (t = 0, i = n._siteClickHandlers.length; t < i; t++) n._siteClickHandlers[t]._element && n._siteClickHandlers[t].destroy();
        n._siteClickHandlers = []
    }
};
b365.Ui.Betslip.EnhancedBetSlipEachWayExtraSelector.prototype.handleSelection = function (n) {
    var i = n.target,
        u, o, w, s, b, h, l;
    if (i.className.indexOf("bs-EachWayExtraBetType_MenuItemWrapper") == -1 && (i = n.target.parentElement), !$(i).hasClass("selected") && !$(i).hasClass("disabled") && !$(i).hasClass("suspended")) {
        var r = this,
            k = r._currentMenu[0].getAttribute("data-index"),
            d = new b365.Ui.Betslip.ItemInformation(this._dropDown),
            a = d.itemIndexAndType(),
            c, v = i.getAttribute("data-participantid"),
            g = i.getAttribute("data-topic"),
            t = r._betSlipController.eachWayExtraInfo[k],
            nt = i.getElementsByClassName("bs-EachWayExtraBetType_MenuItemName")[0].innerHTML,
            y = r._currentMenu.find(".bs-EachWayExtraBetType_MenuItemWrapper"),
            e, p;
        for (n.stopPropagation(), t.menuButtonEle.innerHTML = nt, e = 0, p = y.length; e < p; e++) $(y[e]).removeClass("selected");
        $(t.selectedMenuItemEle).removeClass("selected");
        t.selectedMenuItemEle = i;
        $(i).addClass("selected");
        u = i.getAttribute("data-odds");
        u = r._formatOdds(u);
        t.oddsEle.innerHTML = u;
        t.marketDescEle && (t.marketDescEle.innerHTML = i.getAttribute("data-plbtdescription"));
        t.animationTimer && (clearTimeout(t.animationTimer), t.oddsHighlightEle.className = t.oddsHighlightEle.className.replace(" oddsChangeHighlightAnim", ""));
        t.oddsHighlightEle.innerHTML = u;
        t.oddsHighlightEle.style.visibility = "visible";
        t.oddsHighlightEle.className = t.oddsHighlightEle.className + " oddsChangeHighlightAnim";
        t.animationTimer = setTimeout(function () {
            t.oddsHighlightEle.className = t.oddsHighlightEle.className.replace(" oddsChangeHighlightAnim", "");
            t.oddsHighlightEle.style.visibility = "hidden";
            t.animationTimer = null
        }, 1500);
        betItem = r._betSlipController._bsInst.getBetItemById(a[1], a[0]);
        c = betItem.getCnItem("f") + "-" + i.getAttribute("data-participantid");
        t.betItemEle.setAttribute("data-item-fpid", v);
        r._betSlipController.itemsRemoved(betItem.getCnItem("f") + "-" + betItem.getCnItem("fp"));
        betItem.setCnItem("fp", v);
        betItem.setCnItem("id", c);
        o = window.top.Locator.treeLookup.getReference(g);
        o && o.data.SA && betItem.setCnItem("sa", o.data.SA);
        betItem.setCnItem("o", i.getAttribute("data-odds"));
        var tt = i.getAttribute("data-disabled"),
            it = i.getAttribute("data-showdropdown"),
            f = t.eachWayExtraCheckbox;
        tt == "True" ? (f.className.indexOf("disabled") < 0 && (f.className = f.className + " disabled"), t.oddsHighlightEle.className = t.oddsHighlightEle.className.replace(" enhancedDropDown", "")) : (f.className = f.className.replace("disabled", ""), t.enhancedDropdownMarkup && it == "True" ? (t.oddsEle.innerHTML = t.enhancedDropdownMarkup, this._betSlipController._enhancedBetSlipOddsSelector.enablePopUps(), w = t.betItemEle.querySelector(".odds-selection"), w.setAttribute("data-text", i.getAttribute("data-odds")), s = t.betItemEle.querySelector(".EnhancedOddsItem-selected"), s.setAttribute("data-item", i.getAttribute("data-odds")), s.replaceChild(document.createTextNode(u), s.childNodes[0]), b = t.betItemEle.querySelector(".EnhancedOddsSelection"), b.innerHTML = u, t.oddsHighlightEle.className = t.oddsHighlightEle.className + " enhancedDropDown") : t.oddsHighlightEle.className = t.oddsHighlightEle.className.replace(" enhancedDropDown", ""));
        this._dropDown[0].innerHTML = r._currentMenu[0].innerHTML;
        h = !1;
        for (l in r._betSlipController.eachWayExtraInfo)
            if (!h && r._betSlipController.eachWayExtraInfo[l].selectedMenuItemEle && r._betSlipController.eachWayExtraInfo[l].selectedMenuItemEle.getAttribute("data-isewex") == "1") {
                h = !0;
                break
            } this.showHideMultiples(h);
        bsApp.addOnRefreshReqComplete();
        r._betSlipController.highlightSelectedBets();
        r._betSlipController._bsInst.updateState();
        bsApp.addOnRefreshReqComplete();
        r._betSlipController.addToBetsBank(c);
        r._betSlipController._freeBetClickHandler.update($(t.betItemEle).context);
        r.hidePopUpMenu()
    }
};
b365.Ui.Betslip.EnhancedBetSlipEachWayExtraSelector.prototype.disablePopUps = function () {
    var n = this;
    n.hidePopUpMenu();
    n.removeSelectHandlers(n);
    n.addDeletingClass();
    n._enabled = !1
};
b365.Ui.Betslip.EnhancedBetSlipEachWayExtraSelector.prototype.enablePopUps = function () {
    var n = this,
        t = $(".bs-EachWayExtraBetType_SelectionWrapper", n._betSlipWrapper);
    if (n.removeHandlers(n), n.removeSelectHandlers(n), t.length == 0) {
        n._enabled = !1;
        n._isShowing = !1;
        return
    }
    n.addSelectHandlers(n, t);
    n._enabled = !0;
    n.createEachWayExtraInfo()
};
b365.Ui.Betslip.EnhancedBetSlipEachWayExtraSelector.prototype.createEachWayExtraInfo = function () {
    for (var u = this, l = this._betSlipWrapper[0].getElementsByClassName("bs-EachWayExtraBetType_Menu"), y = l.length, n, i, f, t, o, s, a, h = !1, v = {}, r, c, e = 0; e < y; e++) t = l[e], o = new b365.Ui.Betslip.ItemInformation(t), n = o.itemElement()[0], i = n.getElementsByClassName("odds")[0], f = t.getElementsByClassName("bs-EachWayExtraMainMarket")[0], r = {
        betItemEle: n,
        oddsEle: i,
        oddsHighlightEle: n.getElementsByClassName("oddsChangeHighlightWrapper")[0],
        menuButtonEle: n.getElementsByClassName("bs-EachWayExtraBetType_SelectionWrapper")[0],
        marketDescEle: n.getElementsByClassName("fullSlipMode")[0],
        eachWayExtraEle: n.getElementsByClassName("bs-EachWayExtraBetType")[0],
        dropdownEle: n.getElementsByClassName("bs-EachWayExtraBetType_Dropdown")[0],
        eachWaySelectionWrapper: n.getElementsByClassName("bs-EachWayExtraBetType_SelectionWrapper")[0],
        eachWayExtraWrapperEle: n.getElementsByClassName("bs-EachWayExtraBetType_Wrapper")[0],
        selectedMenuItemEle: t.getElementsByClassName("selected")[0],
        eachWayExtraDefaultMarketEle: t.getElementsByClassName("bs-EachWayExtraDefaultMarket")[0],
        eachWayExtraMainMarketEle: f,
        mainMarketPlaceCount: f ? f.getAttribute("data-placecount") : "",
        eachWayExtraCheckbox: n.getElementsByClassName("js-EachWayExtra")[0],
        menuItems: t.getElementsByClassName("bs-EachWayExtraBetType_MenuItemWrapper"),
        enhancedDropdownMarkup: n.getElementsByClassName("EnhancedOddsSelection").length > 0 && i ? i.innerHTML : ""
    }, v[n.getAttribute("data-item-id")] = r, !h && r.selectedMenuItemEle && r.selectedMenuItemEle.getAttribute("data-isewex") == "1" && (h = !0), $(r.selectedMenuItemEle).hasClass("bs-EachWayExtraMainMarket") || (s = o.itemIndexAndType(), a = u._betSlipController._bsInst.getBetItemById(s[1], s[0]), a.setStItem("ew", "1"), u._betSlipController._bsInst.updateState()), c = t.querySelector('.selected[data-showdropdown="False"]'), c && (i.innerHTML = u._formatOdds(c.getAttribute("data-odds")));
    this.showHideMultiples(h);
    u._betSlipController.eachWayExtraInfo = v
};
b365.Ui.Betslip.EnhancedBetSlipEachWayExtraSelector.prototype.showHideMultiples = function (n) {
    var i, t, u, r;
    if (n) {
        for ($(".multipleBets").hide(), i = this._betSlipController._bsInst.getBetItems(this._betSlipController._bsInst.betTypeMultiple), t = 0; t < i.length; t++) i[t].setStItem("st", ""), i[t].setStItem("ust", "");
        for (u = $("input[data-inp-type='mltstk']"), r = 0; r < u.length; r++) u[r].value = ""
    } else $(".multipleBets").show()
};
b365.Ui.Betslip.EnhancedBetSlipEachWayExtraSelector.prototype.addDeletingClass = function () {
    for (var t = document.querySelectorAll("li[data-item-type=single]"), n = 0; n < t.length; n++) t[n].classList.add("deleting")
};
Type.registerNamespace("b365.Ui.Betslip");
b365.Ui.Betslip.EnhancedBetSlipAusRaceBetTypeSelector = function (n) {
    this._betSlipController = n;
    this._siteClickHandlers = [];
    this._selectClickHandlers = [];
    this._allMenus = [];
    this._menuStateObjects = [];
    this._betSlipWrapper = $("#bsDiv");
    this._currentMenu = null;
    this._currentSelector = null;
    this._currentSelect = null;
    this._isShowing = !1;
    this._enabled = !1;
    this._dropDown = null;
    this._selectHelper = null;
    this._TOTE_TOOLTIP_PREFIX_RESOURCE_KEY = "ausRacingToteTooltip";
    this._AUS365_BEST = "1";
    this._AUS365_TOTE_BEST_OF_1 = "4";
    this._AUS365_TOTE_BEST_OF_2 = "2";
    this._AUS365_MID_PLUS = "8";
    this._AUS365_INTERNATIONAL = "16";
    this._HORSE_RACING_AUS_365_WIN = "20205";
    this._GREYHOUNDS_AUS_365_WIN = "40234";
    this._TROTTING_AUS_365_WIN = "880205";
    this._HORSE_RACING_AUS_365_WIN_INPLAY = "20212";
    this._GREYHOUNDS_RACING_AUS_365_WIN_INPLAY = "40212";
    this._TROTTING_AUS_365_WIN_INPLAY = "880209";
    this._HORSE_RACING_AUS_365_PLACE = "20206";
    this._GREYHOUNDS_AUS_365_PLACE = "40235";
    this._TROTTING_AUS_365_PLACE = "880206";
    this._HORSE_RACING_AUS_365_PLACE_INPLAY = "20213";
    this._GREYHOUNDS_RACING_AUS_365_PLACE_INPLAY = "40213";
    this._TROTTING_AUS_365_PLACE_INPLAY = "880210";
    this._FIXED_WIN = "FixedWin";
    this._FIXED_PLACE = "FixedPlace";
    this._FIXED_EACH_WAY = "FixedEachWay";
    this._TOTE_WIN = "ToteWin";
    this._TOTE_PLACE = "TotePlace";
    this._TOTE_EACH_WAY = "ToteEachWay"
};
b365.Ui.Betslip.EnhancedBetSlipAusRaceBetTypeSelector.prototype.showPopUpMenu = function (n) {
    var t = this;
    t._betSlipController.hidePopups(t);
    $("#bsDiv li.keypad").length > 0 ? setTimeout(function () {
        t.displayPopUpMenu(n)
    }, 250) : t.displayPopUpMenu(n)
};
b365.Ui.Betslip.EnhancedBetSlipAusRaceBetTypeSelector.prototype.displayPopUpMenu = function (n) {
    var t = this,
        u, i, c, s, l, f, h, v, a, y, e, o, r;
    if (u = $(n.target), u.hasClass("bs-AusRaceBetType_Selection") && (u = u.parent()), i = u.parent().find(".bs-AusRaceBetType_Wrapper"), c = u.parent().find("select.ausracebettype-sel"), n.stopPropagation(), t._enabled && !c.hasClass("disabled")) {
        if (t._isShowing && t._currentMenu != null) {
            if (t._currentMenu[0].parentNode) {
                t.hidePopUpMenu();
                return
            }
            t._isShowing = !1
        }
        if (t._dropDown = i, t._selectHelper = new b365.Ui.Betslip.SelectorHelper(t), i = t._selectHelper.getClonedAndPositionedSelector(u[0], i[0]), i.length > 0 && !i.hasClass("showing")) {
            for (t._currentMenu = i, t._currentMenu.addClass("showing"), t._currentSelector = u, v = i[0].getBoundingClientRect().height - i[0].getBoundingClientRect().top, bsApp.popupShow(v), t._currentSelect = c, t._isShowing = !0, t._betSlipController._bsInst.changeBetslipHeight(), a = n.target.getAttribute("data-participantid"), l = t._currentMenu.find(".bs-AusRaceBetType_MenuItem"), f = 0, h = l.length; f < h; f++) $(l[f]).removeClass("disabled");
            for (f = 0, h = t._menuStateObjects.length; f < h; f++)
                if ((s = t._menuStateObjects[f], a != s.menuId) && (y = s.pIds.indexOf(a), y > -1)) {
                    switch (s.selectedBetType) {
                        case t._FIXED_WIN:
                            e = t._currentMenu.find("." + t._FIXED_WIN);
                            r = t._currentMenu.find("." + t._FIXED_EACH_WAY);
                            break;
                        case t._FIXED_PLACE:
                            o = t._currentMenu.find("." + t._FIXED_PLACE);
                            r = t._currentMenu.find("." + t._FIXED_EACH_WAY);
                            break;
                        case t._FIXED_EACH_WAY:
                            e = t._currentMenu.find("." + t._FIXED_WIN);
                            o = t._currentMenu.find("." + t._FIXED_PLACE);
                            r = t._currentMenu.find("." + t._FIXED_EACH_WAY);
                            break;
                        case t._TOTE_WIN:
                            e = t._currentMenu.find("." + t._TOTE_WIN);
                            r = t._currentMenu.find("." + t._TOTE_EACH_WAY);
                            break;
                        case t._TOTE_PLACE:
                            o = t._currentMenu.find("." + t._TOTE_PLACE);
                            r = t._currentMenu.find("." + t._TOTE_EACH_WAY);
                            break;
                        case t._TOTE_EACH_WAY:
                            e = t._currentMenu.find("." + t._TOTE_WIN);
                            o = t._currentMenu.find("." + t._TOTE_PLACE);
                            r = t._currentMenu.find("." + t._TOTE_EACH_WAY)
                    }
                    e && !e.hasClass("selected") && e.addClass("disabled");
                    o && !o.hasClass("selected") && o.addClass("disabled");
                    r && !r.hasClass("selected") && r.addClass("disabled")
                }
        } else t.hidePopUpMenu()
    }
};
b365.Ui.Betslip.EnhancedBetSlipAusRaceBetTypeSelector.prototype.hidePopUpMenu = function () {
    var n = this;
    n._isShowing && n._currentMenu != null && n._currentMenu[0].parentNode && (n._currentMenu.removeClass("showing"), n.removeHandlers(n), this._betSlipWrapper[0].removeChild(n._currentMenu[0]), n._currentMenu = null, n._currentSelector = null, n._currentSelect = null, n._isShowing = !1, n._betSlipController._bsInst.changeBetslipHeight(), n._selectHelper && (n._selectHelper.hideOverlay(), n._selectHelper = null), bsApp.popupHide())
};
b365.Ui.Betslip.EnhancedBetSlipAusRaceBetTypeSelector.prototype.addSelectHandlers = function (n, t) {
    var i, r;
    if (t.length == 0 && (t = $(".bs-AusRaceBetType_SelectionWrapper", n._betSlipWrapper)), t != 0)
        for (n._selectClickHandlers = [], i = 0, r = t.length; i < r; i++) n._selectClickHandlers.push(new b365.Ui.Betslip.ResponsiveClickHandler(t[i], $.proxy(n.showPopUpMenu, n), !1))
};
b365.Ui.Betslip.EnhancedBetSlipAusRaceBetTypeSelector.prototype.removeSelectHandlers = function (n) {
    var t, i;
    if (n._selectClickHandlers.length > 0) {
        for (t = 0, i = n._selectClickHandlers.length; t < i; t++) n._selectClickHandlers[t]._element && n._selectClickHandlers[t].destroy();
        n._selectClickHandlers = []
    }
};
b365.Ui.Betslip.EnhancedBetSlipAusRaceBetTypeSelector.prototype.getMenuSelector = function () {
    return ".bs-AusRaceBetType_MenuItem"
};
b365.Ui.Betslip.EnhancedBetSlipAusRaceBetTypeSelector.prototype.removeHandlers = function (n) {
    var t, i;
    if (n._siteClickHandlers.length > 0) {
        for (t = 0, i = n._siteClickHandlers.length; t < i; t++) n._siteClickHandlers[t]._element && n._siteClickHandlers[t].destroy();
        n._siteClickHandlers = []
    }
};
b365.Ui.Betslip.EnhancedBetSlipAusRaceBetTypeSelector.prototype.handleSelection = function (n) {
    var l, a, i, y;
    if (!$(n.target).hasClass("disabled") && !$(n.target).hasClass("suspend")) {
        var t = this,
            p = n.target.getAttribute("data-item"),
            o = n.target.innerHTML,
            u = t._currentMenu.find(".bs-AusRaceBetType_MenuItem"),
            s = "",
            r, f, h, c;
        if (n.stopPropagation(), o !== "") {
            for (t._currentSelector[0].innerHTML = o, r = 0, h = u.length; r < h; r++) $(u[r]).hasClass("selected") && (s = u[r].getAttribute("data-item")), $(u[r]).removeClass("selected");
            for ($(n.target).addClass("selected"), l = n.target.parentElement.getAttribute("data-participantid"), f = 0, c = t._menuStateObjects.length; f < c; f++)
                if (i = t._menuStateObjects[f], i.menuId == l) {
                    var w = n.target.getAttribute("data-bettype"),
                        b = n.target.getAttribute("data-topic"),
                        e = window.top.Locator.treeLookup.getReference(b);
                    if (e && e.data.SA) {
                        var k = new b365.Ui.Betslip.ItemInformation(this._dropDown),
                            v = k.itemIndexAndType(),
                            d = t._betSlipController._bsInst.getBetItemById(v[1], v[0]);
                        d.setCnItem("sa", e.data.SA)
                    }
                    i.selectedBetType = w;
                    i.oddsElement.length > 0 && (i.oddsElement[0].innerHTML = n.target.getAttribute("data-odds"));
                    i.stakeInputElement.length > 0 && (y = i.selectedBetType == t._FIXED_EACH_WAY || i.selectedBetType == t._TOTE_EACH_WAY, i.stakeInputElement.prop("placeholder", y ? betSlipML.unitstake : betSlipML.stake));
                    t.updateHelpIcon(n.target, i.helpIconElement, i.helpIconSpan);
                    a = i.menuElement.context;
                    break
                } this._dropDown[0].innerHTML = t._currentMenu[0].innerHTML;
            t._currentSelect[0].parentElement.setAttribute("data-previousid", s);
            t._currentSelect.val(p).change();
            t._betSlipController._freeBetClickHandler.update(a)
        }
        t.hidePopUpMenu()
    }
};
b365.Ui.Betslip.EnhancedBetSlipAusRaceBetTypeSelector.prototype.disablePopUps = function () {
    var n = this;
    n.hidePopUpMenu();
    n.removeSelectHandlers(n);
    n.addDeletingClass();
    n._enabled = !1
};
b365.Ui.Betslip.EnhancedBetSlipAusRaceBetTypeSelector.prototype.enablePopUps = function () {
    var n = this,
        t = $(".bs-AusRaceBetType_SelectionWrapper", n._betSlipWrapper);
    if (n.removeHandlers(n), n.removeSelectHandlers(n), t.length == 0) {
        n._enabled = !1;
        n._isShowing = !1;
        return
    }
    n.addSelectHandlers(n, t);
    n._enabled = !0;
    n.updateMenuItems()
};
b365.Ui.Betslip.EnhancedBetSlipAusRaceBetTypeSelector.prototype.updateMenuItems = function () {
    var n = this,
        y, u, f, e, d = document.getElementById("bsDiv"),
        p, o, s, h, i, a, b, v, k;
    for (n._allMenus = d.getElementsByClassName("bs-AusRaceBetType_Menu"), n._menuStateObjects = [], f = 0, len = n._allMenus.length; f < len; f++) {
        h = [];
        u = n._allMenus[f];
        y = u.getAttribute("data-participantid");
        s = u.children;
        var t = u.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement,
            c = $(t).find('input[class~="stk"]'),
            r = $(t).find(".EnhancedOddsSelection"),
            l = $(t).find(".bs-AusRaceBetType_HelpIcon"),
            w = l[0].children[0],
            g = $(t).find(".bs-AusRaceBetType"),
            nt = $(t).find(".stakeToReturn");
        for (nt.addClass("bs-AusRaceBetType_ToReturn"), r.length == 0 && (r = $(t).find(".odds")), e = 0, itemLen = s.length; e < itemLen; e++) i = s[e], a = i.getAttribute("data-item"), a.indexOf("~") == -1 && (b = a.split("#"), v = b[0], h.push(v.substr(2, v.length))), i.className.indexOf("selected") > -1 && (o = i.getAttribute("data-bettype"), r.length > 0 && (r[0].innerHTML = i.getAttribute("data-odds")), k = o == n._FIXED_EACH_WAY || o == n._TOTE_EACH_WAY, c.length > 0 && c.prop("placeholder", k ? betSlipML.unitstake : betSlipML.stake), n.updateHelpIcon(i, l, w));
        p = {
            pIds: h,
            menuId: y,
            selectedBetType: o,
            oddsElement: r,
            stakeInputElement: c,
            helpIconElement: l,
            helpIconSpan: w,
            menuElement: g
        };
        n._menuStateObjects.push(p)
    }
};
b365.Ui.Betslip.EnhancedBetSlipAusRaceBetTypeSelector.prototype.isInBreachOfNSWRegulations = function () {
    var t = window.top.Locator.user.isLoggedIn,
        i = getBetslipWebModule().getUserCountryID() === "13",
        n = window.top.Locator.user.countryStateId;
    return t ? !1 : i ? n !== "0" && n !== "93" ? !1 : !0 : !1
};
b365.Ui.Betslip.EnhancedBetSlipAusRaceBetTypeSelector.prototype.updateHelpIcon = function (n, t) {
    var i = this,
        u, e, r, f, o, s;
    if (n) {
        if (u = n.getAttribute("data-toteid"), e = n.getAttribute("data-plbtid"), e.length > 1) {
            r = "";
            switch (u) {
                case i._AUS365_BEST:
                    r = betSlipML.ausRacingTopTotePlus;
                    break;
                case i._AUS365_TOTE_BEST_OF_1:
                case i._AUS365_TOTE_BEST_OF_2:
                    r = betSlipML.ausRacingTote;
                    break;
                case i._AUS365_MID_PLUS:
                    r = betSlipML.ausRacingMidPlus;
                    break;
                case i._AUS365_INTERNATIONAL:
                    r = betSlipML.ausRacingInternational
            }
            if (r == "" ? t.addClass("hidden") : t.removeClass("hidden"), f = i._TOTE_TOOLTIP_PREFIX_RESOURCE_KEY, o = n.getAttribute("data-bettype"), o == i._TOTE_EACH_WAY) f += i._TOTE_EACH_WAY + u;
            else switch (e) {
                case i._HORSE_RACING_AUS_365_WIN:
                case i._GREYHOUNDS_AUS_365_WIN:
                case i._TROTTING_AUS_365_WIN:
                case i._HORSE_RACING_AUS_365_WIN_INPLAY:
                case i._GREYHOUNDS_RACING_AUS_365_WIN_INPLAY:
                case i._TROTTING_AUS_365_WIN_INPLAY:
                    f += "ToteWin" + u;
                    break;
                case i._HORSE_RACING_AUS_365_PLACE:
                case i._GREYHOUNDS_AUS_365_PLACE:
                case i._TROTTING_AUS_365_PLACE:
                case i._HORSE_RACING_AUS_365_PLACE_INPLAY:
                case i._GREYHOUNDS_RACING_AUS_365_PLACE_INPLAY:
                case i._TROTTING_AUS_365_PLACE_INPLAY:
                    s = window.parent.ns_weblib_util.WebsiteConfig.AUS_RACING_PRODUCT_AUG_2019 && u === "2" ? "TotePlaceAug2019" : "TotePlace";
                    f += s + u
            }
            i.isInBreachOfNSWRegulations() || (r += "<div class='ausHelp'><\/div><div class='bs-Tote_Popup'><div class='bs-Tote_Nib'><\/div>" + betSlipML[f] + "<div>");
            t[0].innerHTML = r
        } else t.addClass("hidden");
        this._betSlipController._ausToteToolTipHtmlBuilder.destroy();
        this._betSlipController._ausToteToolTipHtmlBuilder.attachHandlers()
    }
};
b365.Ui.Betslip.EnhancedBetSlipAusRaceBetTypeSelector.prototype.addDeletingClass = function () {
    for (var t = document.querySelectorAll("li[data-item-type=single]"), n = 0; n < t.length; n++) t[n].classList.add("deleting")
};
Type.registerNamespace("b365.Ui.Betslip");
b365.Ui.Betslip.ItemToReturnDisplayHelper = function (n) {
    this._bsWrapper = $("#bsDiv");
    this._betSlipController = n
};
b365.Ui.Betslip.ItemToReturnDisplayHelper.prototype.setReturnValue = function (n, t, i) {
    var r = $('li[data-item-id="' + n + '"][data-item-type="' + t + '"]', this._bsWrapper).find(".stakeToReturn > .stakeToReturn_Value"),
        u;
    r.length == 0 && (r = $('li[data-item-id="' + n + '"][data-item-type="' + t + '"]', this._bsWrapper).find(".return > .stakeToReturn_Value"));
    r.length > 0 && (this._betSlipController ? (u = window.top.ns_gen5_util.CurrencyFormatter.ApplyDelimiterAndGroupSeparator(i), u = u.length >= this._betSlipController._wrappingLength ? "<br />" + u : "&nbsp;" + u, r[0].innerHTML = u) : (i.length >= this._betSlipController._wrappingLength && (i = "<br />" + i), r[0].innerHTML = i), +this._betSlipController._currencyDisplayHelper.unformatCurrency(i) > 0 ? r[0].parentElement.className = r[0].parentElement.className.replace("hidden", "") : r[0].parentElement.className.indexOf("hidden") == -1 && (r[0].parentElement.className += " hidden"))
};
b365.Ui.Betslip.ItemToReturnDisplayHelper.prototype.setMultipleReturnValue = function (n, t, i) {
    var u = $('li[data-item-id="' + n + '"][data-item-type="' + t + '"]', this._bsWrapper).find(".bs-StandardMultipleStake_ToReturn > .bs-StandardMultipleStake_ToReturnValue"),
        r;
    u.length > 0 && (this._betSlipController ? (r = window.top.ns_gen5_util.CurrencyFormatter.ApplyDelimiterAndGroupSeparator(i), r = r.length >= this._betSlipController._wrappingLength ? "<br />" + r : "&nbsp;" + r, u[0].innerHTML = r) : (i.length >= this._betSlipController._wrappingLength && (i = "<br />" + i), u[0].innerHTML = i), $(u[0].parentElement).removeClass("hidden"))
};
b365.Ui.Betslip.ItemToReturnDisplayHelper.prototype.setVisibility = function (n, t, i) {
    var u = $('li[data-item-id="' + n + '"][data-item-type="' + t + '"]', this._bsWrapper),
        r = u.find(".stakeToReturn");
    r.length > 0 && (i ? (r[0].hasAttribute("style") && r[0].removeAttribute("style"), u.addClass("hasodds")) : (r[0].setAttribute("style", "display:none;"), u.removeClass("hasodds")))
};
Type.registerNamespace("b365.Ui.Betslip");
b365.Ui.Betslip.ModeResolver = function (n) {
    this._bsInst = n;
    this._isValid = function () {
        return typeof this._bsInst != "undefined"
    }
};
b365.Ui.Betslip.ModeResolver.prototype = {
    resolve: function () {
        if (this._isValid()) {
            var n = this,
                t = n._bsInst._betSlipModeBetSlip;
            return $("#bsDiv>ul:first").hasClass("betReceipt") && (t = n._bsInst._betSlipModeReceipt), t
        }
    }
};
Type.registerNamespace("b365.Ui.Betslip");
b365.Ui.Betslip.ItemDeleteExecutor = function (n, t, i, r) {
    this._bsInst = n;
    this._bsController = t;
    this._itemIndex = i;
    this._itemType = r;
    this._isValid = function () {
        return typeof this._bsInst != "undefined" && typeof this._itemIndex != "undefined" && typeof this._itemType != "undefined"
    };
    this._deleteItem = function (n) {
        var s, e, f, o, t, h, r;
        if (this._itemType === "betbuilder")
            for (s = this._bsInst.getBetItems(this._bsInst.betTypeBetBuilder)[this._itemIndex], e = s.getBBItems(), f = 0; f < e.length; f++) r = e[f].getValue("TP"), r && window.top.Locator.subscriptionManager.unsubscribe(r, window.top.ns_gen5_data.SubscriptionManagerFlags.BATCH, !0, !0);
        o = this._bsInst.getBetItems(this._itemType);
        t = o[parseInt(this._itemIndex)];
        t && (t.getCnItem("id") ? this._bsController.itemsRemoved(t.getCnItem("id").replace("Y", "").replace("N", "")) : t.getCnItem("mid") && t.getCnItem("pid") ? this._bsController.itemsRemoved(t.getCnItem("pid") + ":" + t.getCnItem("mid")) : t.getCnItem("Inc") ? this._bsController.itemsRemoved(t.getCnItem("fp") + "~inc" + t.getCnItem("Inc")) : this._bsController.itemsRemoved(t.getCnItem("fp")), o.splice(parseInt(this._itemIndex), 1), this._bsInst.updateState(), this._bsInst.getBetItems(this._bsInst.betTypeAll).length === 0 && this._bsInst.deleteBetReqComplete());
        var u = this,
            i = $("[data-item-type='" + this._itemType + "']", ".betslipWrapper")[+this._itemIndex],
            c = u._bsController.prefixStyle("transition");
        if (i && !sProps.instantBet) {
            if (window.bsApp && window.bsApp.getBetCount(window.bs) === 0) return setTimeout(function () {
                $(".betSlipCountText", ".betslipWrapper").text("0");
                n(u)
            }, 0), this._bsInst.betSlipItemsChanged(), t;
            h = i.getBoundingClientRect().height;
            i.style.maxHeight = h + "px";
            setTimeout(function () {
                postTransition = function () {
                    $(".betSlipCountText", ".betslipWrapper").text(u._bsInst.numItems(!1));
                    n(u)
                };
                i.style.overflow = "hidden";
                i.style[c] = "max-height 0.2s";
                i.style["max-height"] = "0px";
                setTimeout(postTransition, 200)
            }, 0)
        } else setTimeout(function () {
            n(u)
        }, 0);
        return r = t.getTopic(), r && $("#bsDiv").trigger(r), this._bsInst.betSlipItemsChanged(), t
    }
};
b365.Ui.Betslip.ItemDeleteExecutor.prototype = {
    execute: function () {
        var t;
        if (this._isValid()) {
            if (!this._bsController.isReqOnBetDeletedEnabled() || !this._bsInst.locked()) var i = this._bsInst.getBetItems(this._itemType),
                n = i[parseInt(this._itemIndex)],
                r = function (t) {
                    var u = n.getTopic(),
                        r, i;
                    u && window.top.Locator.subscriptionManager.unsubscribe(u, window.top.ns_gen5_data.SubscriptionManagerFlags.BATCH, !0, !0);
                    (!t._bsController.isReqOnBetDeletedEnabled() || t._bsInst.getBetItems(t._bsInst.betTypeAll).length === 0 || t._bsInst.req(t._bsInst.reqTypeDeleteItem, "", null, null, "getMultipleCombinations")) && (t._bsInst.getBetItems(t._bsInst.betTypeAll).length === 0 && t._bsController.hideBetslip(), sProps.instantBet && (window.bsApp.getBetCount(window.bs) === 0 && ($(".single-section,.multiple-section,.totals,.bsError,#pro").addClass("hidden"), $(".emptyBetslip").removeClass("hidden"), $(".placeBet").addClass("disabled")), new b365.Ui.Betslip.TotalsCalculator(t._bsInst, t._bsController).calculate()), r = n.getCnItem("f"), n.getCnItem("id") ? (t._bsController.itemsRemoved(n.getCnItem("id").replace(/[N|Y]$/im, "")), i = n.getCnItem("pp") || n.getStItem("pp"), i && i.length > 0 && t._bsController.itemsRemoved(r + "-" + i)) : n.getCnItem("mid") && n.getCnItem("pid") ? t._bsController.itemsRemoved(r + ":" + n.getCnItem("pid") + ":" + n.getCnItem("mid")) : n.getCnItem("Inc") ? t._bsController.itemsRemoved(r + "-" + n.getCnItem("fp") + "~inc" + n.getCnItem("Inc")) : (t._bsController.itemsRemoved(r + "-" + n.getCnItem("fp")), i = n.getCnItem("pp") || n.getStItem("pp"), i && i.length > 0 && t._bsController.itemsRemoved(r + "-" + i)))
                },
                n = this._deleteItem(r);
            this._bsInst.getBetItems(this._bsInst.betTypeAll).length === this._bsInst.getBetItems(this._bsInst.betTypeMultiple).length && this._bsInst.clearBets();
            this._bsInst.getBetItems(this._bsInst.betTypeAll).length === 0 && (t = this._bsController._bsInst.getClickToCallHandler(), t && (ctcTokenData = t.dispose()))
        }
    }
};
Type.registerNamespace("b365.Ui.Betslip");
b365.Ui.Betslip.ItemInformation = function (n, t) {
    this._ele = n;
    this._useElement = t;
    this._isValid = function () {
        return typeof this._ele != "undefined"
    };
    this._isValid() && (this._useElement && this._useElement === !0 ? (this._ele = $(this._ele), this._itemType = [this._ele.attr("data-item-id"), this._ele.attr("data-item-type")]) : (this._parent = $(this._ele).parents("li[data-item-id]:first"), this._itemType = [this._parent.attr("data-item-id"), this._parent.attr("data-item-type")]))
};
b365.Ui.Betslip.ItemInformation.prototype = {
    itemIndexAndType: function () {
        return this._isValid() ? this._itemType : null
    },
    itemIndex: function () {
        return this._isValid() ? this._itemType[0] : null
    },
    itemType: function () {
        return this._isValid() ? this._itemType[1] : null
    },
    itemElement: function () {
        return $(this._ele).parents("li[data-item-id]:first")
    }
};
Type.registerNamespace("b365.Ui.Betslip");
b365.Ui.Betslip.ToggleMultiples = function (n, t) {
    var i, f, r, u;
    if (this._bsInst = n, this._bsController = t, this._showingVal = "1", this._showingCSS = "open", this._hidingVal = "0", this._hidingCSS = "closed", this._multiplesStateCookieKey = "mo", this._cookieValSeparator = "||", this._multiplesHdr = $("#bsDiv ul:not(.betReceipt) li.multiple-section ul:first-child"), this._isValid = function () {
            return typeof this._bsInst != "undefined"
        }, this._isValid() && (this._isCurrentlyShowing = this._bsInst.getValueFromBSCookie(this._multiplesStateCookieKey).replace(this._cookieValSeparator, "") == this._showingVal), this._setTriggerClass = function (n) {
            var i = "show-mrc",
                t = $("#bsDiv>ul:first-child"),
                r = "bs-NoMultiples";
            $("#bsDiv .betReceipt").length == 0 && n ? t.addClass(i) : t.removeClass(i);
            $("#bsDiv .betReceipt").length == 0 && this._multiplesHdr[0] && !this._bsInst.containsPhoneOnlyBet() ? t.removeClass(r) : t.addClass(r)
        }, i = $('.multiple-section div[data-inp-type="ewcb"]', "#bsDiv"), i && i.length > 0)
        for (f = i.length, r = 0; r < f; r++) u = i[r], t.ausMultiplesEnabled() ? u.setAttribute("style", "display:none;") : u.setAttribute("style", "display:block;")
};
b365.Ui.Betslip.ToggleMultiples.prototype = {
    toggle: function () {
        var n, c, i;
        if (this._isValid() && $("#bsDiv .betReceipt").length == 0) {
            n = this;
            n._multiplesHdr = $("#bsDiv ul:not(.betReceipt) li.multiple-section ul:first-child");
            var t = this._multiplesHdr[0],
                r = 0,
                u = document.getElementById("betslipContent"),
                f = document.getElementById("betslipContentContainer"),
                l = u.getBoundingClientRect(),
                e = n._bsController.prefixStyle("transition"),
                s = n._bsController.prefixStyle("transform"),
                o = t.getBoundingClientRect(),
                a = o.height,
                h = 0;
            if (this._isCurrentlyShowing ? (h = u.scrollTop, r = 0, n._multiplesHdr.removeClass(n._showingCSS).addClass(n._hidingCSS)) : (r = 1, n._multiplesHdr.removeClass(n._hidingCSS).addClass(n._showingCSS)), n._bsInst.setValueInBSCookie(n._multiplesStateCookieKey, r), sProps.instantBet) return;
            o = t.getBoundingClientRect();
            c = o.height;
            this._isCurrentlyShowing && (n._multiplesHdr.removeClass(n._hidingCSS).addClass(n._showingCSS), u.scrollTop = h);
            t.style["max-height"] = a + "px";
            i = o.bottom - l.bottom;
            window.requestAnimationFrame(function () {
                t.style.overflow = "hidden";
                t.style[e] = "max-height 0.2s";
                t.style["max-height"] = c + "px";
                i !== 0 && (f.style[e] = s + " 0.2s", f.style[s] = "translateY(-" + i + "px)");
                n.postTransition = function () {
                    t.removeEventListener(window.top.TRANSITION_END, n.postTransition);
                    n._isCurrentlyShowing && n._multiplesHdr.removeClass(n._showingCSS).addClass(n._hidingCSS);
                    var o = document.getElementById("mlthdr");
                    o.innerHTML = r === 1 ? o.getAttribute("data-htext") : o.getAttribute("data-stext");
                    t.style["max-height"] = "";
                    t.style.overflow = "";
                    t.style[e] = "";
                    i !== 0 && (f.style[e] = "", f.style[s] = "", u.scrollTop += i)
                };
                t.addEventListener(window.top.TRANSITION_END, n.postTransition)
            });
            this._setTriggerClass(!this._isCurrentlyShowing);
            this._bsInst.changeBetslipHeight();
            this._bsController.ausMultiplesEnabled() && !this._isCurrentlyShowing && this._bsController.complexMultiplesNeedsRefresh && (this._bsController.complexMultiplesNeedsRefresh = !1, this._bsController.getMultipleInfo(!0));
            $(document).trigger("mbsmultopenclose")
        }
    },
    reset: function () {
        this._isCurrentlyShowing || this._bsController.hasMultipleStakeEntries() ? this._multiplesHdr.removeClass(this._hidingCSS).addClass(this._showingCSS) : this._multiplesHdr.removeClass(this._showingCSS).addClass(this._hidingCSS);
        this._setTriggerClass(this._isCurrentlyShowing)
    }
};
Type.registerNamespace("b365.Ui.Betslip");
b365.Ui.Betslip.AutoVoidClickProcessor = function (n, t, i, r) {
    this._bsInst = n;
    this._bsController = t;
    this._itemIndex = i;
    this._itemType = r;
    this._autoVoidCookieKey = "av";
    this._multiplesHeaderClass = "multiplesWrapper";
    this._multiplesHeaderIdAutoVoid = " bs-MultipleBets_Header-autovoid";
    this._multiplesHeaderDisclaimerId = "bs-MultipleBets_AutoVoidDisclaimer";
    this._multiplesHeaderDisclaimerHiddenClass = " bs-MultipleBets_AutoVoidDisclaimer-hidden";
    this._isValid = function () {
        return typeof this._bsInst != "undefined" && typeof this._itemIndex != "undefined" && typeof this._itemType != "undefined"
    }
};
b365.Ui.Betslip.AutoVoidClickProcessor.prototype = {
    handle: function (n) {
        var u = this._bsInst.getBetItemById(this._itemType, this._itemIndex),
            f, e = !1,
            i = document.getElementsByClassName(this._multiplesHeaderClass),
            t, r;
        if (u && (n ? u.setStItem(this._autoVoidCookieKey, "1") : u.removeStItem(this._autoVoidCookieKey), this._bsInst.updateState()), i.length > 0) {
            for (f = this._bsInst.getBetItems(this._bsInst.betTypeNormal), t = document.getElementById(this._multiplesHeaderDisclaimerId), r = 0; r < f.length; r++)
                if (f[r].getStItem(this._autoVoidCookieKey) == "1") {
                    e = !0;
                    break
                } e ? (i[0].className += this._multiplesHeaderIdAutoVoid, t.className = t.className.replace(this._multiplesHeaderDisclaimerHiddenClass, "")) : (i[0].className = i[0].className.replace(this._multiplesHeaderIdAutoVoid, ""), t.className.indexOf(this._multiplesHeaderDisclaimerHiddenClass) === -1 && (t.className += this._multiplesHeaderDisclaimerHiddenClass))
        }
    }
};
Type.registerNamespace("b365.Ui.Betslip");
b365.Ui.Betslip.EachWayClickProcessor = function (n, t, i, r, u) {
    this._bsInst = n;
    this._bsController = t;
    this._itemIndex = i;
    this._itemType = r;
    this._itemElement = u;
    this._eachWayCookieKey = "ew";
    this._showLinesLabel = $("#bsDiv>ul").attr("data-tcm") == "2";
    this._isValid = function () {
        return typeof this._bsInst != "undefined" && typeof this._itemIndex != "undefined" && typeof this._itemType != "undefined" && typeof this._itemElement != "undefined"
    };
    this._updateStakeLabel = function (n) {
        var t, i;
        this._showLinesLabel || (i = $(this._itemElement)[0].className.indexOf("bs-MultipleBets_HighestAccumulator") > 1, t = i ? betSlipML.unitstake : n ? betSlipML.unitstake : betSlipML.stake, $(this._itemElement).find('input[class~="stk"]').prop("placeholder", t))
    }
};
b365.Ui.Betslip.EachWayClickProcessor.prototype = {
    handle: function (n) {
        var i = this._bsInst.getBetItemById(this._itemType, this._itemIndex),
            t;
        i && (i.setStItem(this._eachWayCookieKey, n ? "1" : "0"), this._bsController.updateMultiplesEachWayFlag(), this._bsInst.updateState(), this._updateStakeLabel(n), new b365.Ui.Betslip.TotalsCalculator(this._bsInst, this._bsController).calculate(), this._bsController.ausMultiplesEnabled() && this._bsController.getMultipleInfo());
        this._itemElement && this._itemElement.length > 0 && (t = $('input[data-inp-type="sngstk"]', this._itemElement[0]), t && t.length > 0 && this._bsController.OnItemStakeChanged(t[0]))
    }
};
Type.registerNamespace("b365.Ui.Betslip");
b365.Ui.Betslip.EachWayExtraClickProcessor = function (n, t, i, r, u) {
    this._bsInst = n;
    this._bsController = t;
    this._itemIndex = i;
    this._itemType = r;
    this._itemElement = u;
    this._eachWayCookieKey = "ew";
    this._showLinesLabel = $("#bsDiv>ul").attr("data-tcm") == "2";
    this._isValid = function () {
        return typeof this._bsInst != "undefined" && typeof this._itemIndex != "undefined" && typeof this._itemType != "undefined" && typeof this._itemElement != "undefined"
    };
    this._updateStakeLabel = function (n) {
        var t, i;
        this._showLinesLabel || (i = $(this._itemElement)[0].className.indexOf("bs-MultipleBets_HighestAccumulator") > 1, t = i ? betSlipML.unitstake : n ? betSlipML.unitstake : betSlipML.stake, $(this._itemElement).find('input[class~="stk"]').prop("placeholder", t))
    }
};
b365.Ui.Betslip.EachWayExtraClickProcessor.prototype = {
    handle: function (n) {
        var i = this._bsInst.getBetItemById(this._itemType, this._itemIndex),
            t, r, f, e, u;
        i && (t = this._bsController.eachWayExtraInfo[this._itemIndex], t && (r && (t.oddsEle && (t.oddsEle.innerHTML = r.getAttribute("data-odds")), t.menuButtonEle && (f = r.getElementsByClassName("bs-EachWayExtraBetType_MenuItemName")[0], f && (t.menuButtonEle.innerHTML = f.innerHTML)), e = r.getAttribute("data-participantid"), t.betItemEle && t.betItemEle.setAttribute("data-item-fpid", e), this._bsController.itemsRemoved(i.getCnItem("f") + "-" + i.getCnItem("fp")), i.setStItem(this._eachWayCookieKey, n ? "1" : "0"), i.setCnItem("fp", e), i.setCnItem("o", r.getAttribute("data-odds")), this._bsController.highlightSelectedBets(), this._bsController.updateMultiplesEachWayFlag(), this._bsInst.updateState(), this._updateStakeLabel(n), new b365.Ui.Betslip.TotalsCalculator(this._bsInst, this._bsController).calculate(), this._bsController.ausMultiplesEnabled() && this._bsController.getMultipleInfo(), u = $('input[data-inp-type="sngstk"]', this._itemElement[0]), u && u.length > 0 && this._bsController.OnItemStakeChanged(u[0])), t.dropdownEle && (t.dropdownEle.className.indexOf("disabled") > -1 ? ($(t.dropdownEle).removeClass("disabled"), $(t.eachWaySelectionWrapper).removeClass("disabled")) : ($(t.dropdownEle).addClass("disabled"), $(t.eachWaySelectionWrapper).addClass("disabled"), t.eachWayExtraWrapperEle && $(t.eachWayExtraWrapperEle).removeClass("showing")))))
    }
};
Type.registerNamespace("b365.Ui.Betslip");
b365.Ui.Betslip.FreeBetClickProcessor = function (n, t) {
    this._bsInst = n;
    this._bsController = t;
    this._isValid = function () {
        return typeof this._bsInst != "undefined" && typeof this._itemIndex != "undefined" && typeof this._itemType != "undefined" && typeof this._itemElement != "undefined"
    };
    this._handleUpdates = function (n) {
        if (this._stakeTextBoxes = this._itemElement.querySelectorAll('input[class~="stk"]'), this._stakeTextBox = this._getStakeInputForBetType(), this._stakeTextBox) {
            if (this._betCount = +this._bsInst.getBetItemById(this._itemType, this._itemIndex).getStItem("bc") || 1, n ? (this._itemElement.className.indexOf("errStk") > -1 && (this._itemElement.className = this._itemElement.className.replace("errStk", ""), document.getElementsByClassName("errStk").length === 0 && new b365.Ui.Betslip.AcceptChangesRequestDespatcher(this._bsInst, this._bsController).despatch(null)), this._itemElement.className.indexOf("bs-FreeBet-selected") === -1 && (this._itemElement.className = this._itemElement.className + " bs-FreeBet-selected"), this._insertFreeBetStakeForBetItem(), this._disableStakeInputs(), this._bsController && this._bsController.clientEnhancedMode() && this._bsController._stakeEntryHander.hide()) : (this._itemElement.className = this._itemElement.className.replace(" bs-FreeBet-selected", ""), this._enableStakeInputs(), this._clearFreeBetStakeFromBetItem(), this._resetStakeValue()), this._singlesMultiplier && this._itemType === "single") {
                var t = this._singlesMultiplier.innerText.replace(/[^0-9]/g, "");
                n ? t -= 1 : t += 1;
                this._singlesMultiplier.innerText = t + " x"
            }
            new b365.Ui.Betslip.StakeChangedHandler(this._bsInst, this._bsController).handle(this._stakeTextBox);
            new b365.Ui.Betslip.BetCreditsCalculator(this._bsInst, this._bsController, n).calculate()
        }
    }
};
b365.Ui.Betslip.FreeBetClickProcessor.prototype = {
    init: function (n) {
        var t = new b365.Ui.Betslip.ItemInformation(n),
            i = t.itemIndexAndType(),
            r = t.itemElement();
        return this._itemIndex = i[0], this._itemType = i[1], this._itemElement = r[0], this._element = n, this._freeBetIdCookieKey = "ft", this._freeBetValueCookieKey = "fbv", this._eachWayCookieKey = "ew", this._multiplesStakeBox = document.getElementById("mltsngstk"), this._singlesMultiplier = document.querySelector('li[data-item-id="-1"] .multiplesBetCount'), this._freeBetContainer = this._itemElement.getElementsByClassName("bs-UseFreeBetContainer")[0], this._freeBetStake = this._itemElement.getElementsByClassName("bs-FreeBetStake")[0], this
    },
    handle: function (n) {
        var t = this._bsInst.getBetItemById(this._itemType, this._itemIndex);
        this._isValid && t && (t.setStItem(this._freeBetIdCookieKey, n ? this._freeBetContainer.getAttribute("data-item-fbt") : ""), t.setStItem(this._freeBetValueCookieKey, n ? this._freeBetContainer.getAttribute("data-item-fbv") : ""), this._bsInst.updateState(), this._isEachWay = t.getStItem(this._eachWayCookieKey) == 1, this._handleUpdates(n))
    },
    _getStakeInputForBetType: function () {
        var n = "bs-Stake_TextBox";
        switch (this._itemType) {
            case "single":
            case "betbuilder":
                n = ".stk";
                break;
            case "cast":
                n = this._stakeTextBoxes[0].className.indexOf("Flexi") >= 0 ? ".bs-FlexiUnitStake_TextBox" : ".stk"
        }
        return this._itemElement.querySelector(n)
    },
    _insertFreeBetStakeForBetItem: function () {
        var n = this._freeBetContainer.getAttribute("data-item-fbv"),
            t;
        this._bsController.clientEnhancedMode() || (this._stakeTextBox.type = "text");
        this._isEachWay ? (n = window.top.ns_betcalculationslib_rounding.RoundingHelper.RoundUp(n / 2), t = this._bsController._currencyDisplayHelper.getDecimalSeperator(), this._freeBetStake.childNodes[0].data = $blib.pad2DP(String(n * 2), t)) : this._itemType !== "single" ? (n = window.top.ns_betcalculationslib_calculations.StakeCalculations.CalculateUnitStake(n, this._betCount).toFixed(2), this._resetStakeValue()) : this._resetStakeValue();
        this._stakeTextBox.value = n
    },
    _clearFreeBetStakeFromBetItem: function () {
        this._bsController.clientEnhancedMode() || (this._stakeTextBox.type = "number");
        this._stakeTextBox.value = this._itemType === "single" && this._multiplesStakeBox && this._multiplesStakeBox.value != "" ? this._multiplesStakeBox.value : ""
    },
    _toggleDisclaimerSection: function (n) {
        var t = document.getElementsByClassName("bs-FreeBetDisclaimer")[0];
        n && t.className.indexOf(" hidden") > -1 ? t.className = t.className.replace(" hidden", "") : t.className.indexOf(" hidden") === -1 && (t.className += " hidden")
    },
    _enableStakeInputs: function () {
        for (var t, n = 0; n < this._stakeTextBoxes.length; n++) this._stakeTextBoxes[n].removeAttribute("disabled"), this._stakeTextBoxes[n].style.pointerEvents = "", this._stakeTextBoxes[n].className = this._stakeTextBoxes[n].className.replace("bs-FreeBet-disabled", "");
        for (t = document.getElementsByClassName("bs-UseFreeBet-disabled"), n = t.length - 1; n >= 0; n--) t[n].className = t[n].className.replace(" bs-UseFreeBet-disabled", "")
    },
    _disableStakeInputs: function () {
        for (var t, n = 0; n < this._stakeTextBoxes.length; n++) this._stakeTextBoxes[n].setAttribute("disabled", "disabled"), this._stakeTextBoxes[n].style.pointerEvents = "none", this._stakeTextBoxes[n].className = this._stakeTextBoxes[n].className + " bs-FreeBet-disabled";
        for (t = document.getElementsByClassName("bs-UseFreeBet"), n = 0; n < t.length; n++) t[n] !== this._element.parentNode.parentNode && (t[n].className = t[n].className + " bs-UseFreeBet-disabled")
    },
    _resetStakeValue: function () {
        this._freeBetStake.childNodes[0].data = this._freeBetContainer.getAttribute("data-item-fbv")
    }
};
Type.registerNamespace("b365.Ui.Betslip");
b365.Ui.Betslip.AutoVoidClickHandler = function (n, t) {
    this._bsInst = n;
    this._bsController = t;
    this._enabled = !1;
    this._autoVoidClickHandlers = [];
    this._isValid = function () {
        return typeof this._bsInst != "undefined"
    }
};
b365.Ui.Betslip.AutoVoidClickHandler.prototype = {
    handle: function (n) {
        var i = this,
            t, u, f, e, r;
        typeof n != "undefined" && n && (i.removeHandlers(), t = n.target, t.getAttribute("disabled") || t.parentNode.getAttribute("disabled") || (t.className.indexOf("bs-AutoVoidCheckbox") == -1 && (t = t.parentNode.getElementsByClassName("bs-AutoVoidCheckbox")[0]), i._bsInst._pollReqType === i._bsInst.reqTypePollTempBetReceipt && i._bsInst.resetPoll(), u = new b365.Ui.Betslip.ItemInformation(t), f = u.itemIndexAndType(), e = u.itemElement()[0], e.className.indexOf("suspended") == -1 && (r = t.className.indexOf("checked") > -1, r ? (t.className = t.className.replace(" checked", ""), r = !1) : (t.className += " checked", r = !0), new b365.Ui.Betslip.AutoVoidClickProcessor(this._bsInst, this._bsController, f[0], f[1]).handle(r)), i.attachHandlers()), n.stopPropagation(), n.preventDefault())
    },
    attachHandlers: function () {
        var n = this,
            i = document.querySelectorAll(".bs-AutoVoidCheckbox, .bs-AutoVoid_Text, .bs-AutoVoid"),
            t, r;
        if (n.removeHandlers(n), i.length == 0) {
            n._enabled = !1;
            return
        }
        for (t = 0, r = i.length; t < r; t++) n._autoVoidClickHandlers.push(new b365.Ui.Betslip.ResponsiveClickHandler(i[t], $.proxy(n.handle, n), !1));
        n._enabled = !0
    },
    removeHandlers: function () {
        var n = this,
            t, i;
        if (n._autoVoidClickHandlers.length > 0) {
            for (t = 0, i = n._autoVoidClickHandlers.length; t < i; t++) n._autoVoidClickHandlers[t]._element && n._autoVoidClickHandlers[t].destroy();
            n._autoVoidClickHandlers = []
        }
        n._enabled = !1
    }
};
Type.registerNamespace("b365.Ui.Betslip");
b365.Ui.Betslip.RemoveClickHandler = function (n, t) {
    this._bsInst = n;
    this._bsController = t;
    this._enabled = !1;
    this._removeClickHandlers = [];
    this._isValid = function () {
        return typeof this._bsInst != "undefined"
    };
    this._reorderChildElements = function (n) {
        var t, r, i = 0;
        if (n.children.length != 0)
            for (t = 0, r = n.children.length; t < r; t++) n.children[t].hasAttribute("data-item-id") && (n.children[t].setAttribute("data-item-id", i), i = i + 1)
    }
};
b365.Ui.Betslip.RemoveClickHandler.prototype = {
    handle: function (n) {
        var t = this,
            r, y = !1,
            o, h, c, l, a, u, s, v, p, w, e, i, f;
        typeof n != "undefined" && n && (t.removeHandlers(), r = n.target, o = $(r), o.prop("disabled") || o.parents().prop("disabled") || !o.hasClass("remove") ? y = !0 : (o.hasClass("restrictedMultiple") && (o = $(r).parent().find("a.remove"), r = o[0]), t._bsInst._pollReqType === t._bsInst.reqTypePollTempBetReceipt && t._bsInst.resetPoll(), e = new b365.Ui.Betslip.ItemInformation(r), i = e.itemIndexAndType(), f = e.itemElement(), u = $(r.parentNode).next()[0], i[1] != "tote-pot-leg" && (i[1] != "tote-pot" || o.parent().hasClass("ToteRemoveAll")) ? i[1] == "cast" && u && u.hasAttribute("data-item-type") && u.getAttribute("data-item-type") ? (r = u, e = new b365.Ui.Betslip.ItemInformation(r, !0), i = e.itemIndexAndType(), f = e.itemElement(), new b365.Ui.Betslip.TotePotLegDeleteExecutor(t._bsInst, r, i[0], i[1]).execute(), t.attachHandlers()) : t._bsController.clientEnhancedMode() ? (h = t._bsInst, c = t._bsController, l = i[0], a = i[1], u = f[0].parentElement, t._bsController._stakeEntryType == t._bsController._stakeEntryTypes.stakePad ? (s = $("#stakePad", f), s.length > 0 && !s.hasClass("hideStakePad") ? t.removeBetItemCallBack(u, f[0], h, c, l, a) : (s = $("#stakePad"), s.length > 0 ? (v = s[0].getAttribute("data-item"), p = s[0].getAttribute("data-type"), w = f[0].getAttribute("data-item-id"), p != "multiple" && w < v && (v = v - 1, s[0].setAttribute("data-item", v)), t.removeBetItemCallBack(u, f[0], h, c, l, a)) : t.removeBetItemCallBack(u, f[0], h, c, l, a))) : t.removeBetItemCallBack(u, f[0], h, c, l, a)) : new b365.Ui.Betslip.ItemDeleteExecutor(t._bsInst, t._bsController, i[0], i[1]).execute() : (r = u, e = new b365.Ui.Betslip.ItemInformation(r, !0), i = e.itemIndexAndType(), f = e.itemElement(), new b365.Ui.Betslip.TotePotLegDeleteExecutor(t._bsInst, r, i[0], i[1]).execute(), t.attachHandlers()), y = !0), y ? (n.stopPropagation(), n.preventDefault()) : t._bsController._stakeEntryType != t._bsController._stakeEntryTypes.deviceKeyBoard && t._bsController._stakeEntryHander._isShowing && (t._bsController._stakeEntryHander.hide(), n.stopPropagation(), n.preventDefault()), t.attachHandlers())
    },
    removeBetItemCallBack: function () {
        var n = arguments[0],
            f = arguments[1],
            t = arguments[2],
            i = arguments[3],
            r = arguments[4],
            u = arguments[5];
        new b365.Ui.Betslip.ItemDeleteExecutor(t, i, r, u).execute();
        this._reorderChildElements(n);
        this.attachHandlers()
    },
    attachHandlers: function () {
        var n = this,
            i = $(".remove", n._betSlipWrapper),
            t, r;
        if (n.removeHandlers(n), i.length == 0) {
            n._enabled = !1;
            return
        }
        for (t = 0, r = i.length; t < r; t++) n._removeClickHandlers.push(new b365.Ui.Betslip.ResponsiveClickHandler(i[t], $.proxy(n.handle, n), !1));
        n._enabled = !0
    },
    removeHandlers: function () {
        var n = this,
            t, i;
        if (n._removeClickHandlers.length > 0) {
            for (t = 0, i = n._removeClickHandlers.length; t < i; t++) n._removeClickHandlers[t]._element && n._removeClickHandlers[t].destroy();
            n._removeClickHandlers = []
        }
        n._enabled = !1
    }
};
Type.registerNamespace("b365.Ui.Betslip");
b365.Ui.Betslip.EachWayClickHandler = function (n, t) {
    this._bsInst = n;
    this._bsController = t;
    this._enabled = !1;
    this._eachWayClickHandlers = [];
    this._isValid = function () {
        return typeof this._bsInst != "undefined"
    }
};
b365.Ui.Betslip.EachWayClickHandler.prototype = {
    handle: function (n) {
        var f = this,
            t, i, o, e, r, u;
        if (typeof n != "undefined" && n) {
            f.removeHandlers();
            t = n.target;
            i = $(t);
            switch (t.nodeName.toLowerCase()) {
                case "div":
                    i = $(t).find('span.checkbox[data-inp-type="ewcb"]');
                    t = i[0];
                    break;
                default:
                    i = $(t).parent().find('span.checkbox[data-inp-type="ewcb"]');
                    t = i[0]
            }
            i.prop("disabled") || i.parents().prop("disabled") || i.hasClass("disabled") || (f._bsInst._pollReqType === f._bsInst.reqTypePollTempBetReceipt && f._bsInst.resetPoll(), o = new b365.Ui.Betslip.ItemInformation(t), e = o.itemIndexAndType(), r = o.itemElement(), $(r).hasClass("suspended") || (u = $(t).hasClass("checked"), !1 || (u ? ($(t).removeClass("checked"), u = !1) : ($(t).addClass("checked"), u = !0)), t.className.indexOf("js-EachWayExtra") > -1 && t.className.indexOf(" disabled") == -1 && new b365.Ui.Betslip.EachWayExtraClickProcessor(this._bsInst, this._bsController, e[0], e[1], r).handle(u), new b365.Ui.Betslip.EachWayClickProcessor(this._bsInst, this._bsController, e[0], e[1], r).handle(u), $(r).hasClass("bs-FreeBet-selected") && this._freeBetTokenAdjustment(r)));
            f.attachHandlers();
            n.stopPropagation();
            n.preventDefault()
        }
    },
    attachHandlers: function () {
        var n = this,
            i = $('div[data-inp-type="ewcb"], span[data-inp-type="ewcb"]', "#bsDiv"),
            t, r;
        if (n.removeHandlers(n), i.length == 0) {
            n._enabled = !1;
            return
        }
        for (t = 0, r = i.length; t < r; t++) n._eachWayClickHandlers.push(new b365.Ui.Betslip.ResponsiveClickHandler(i[t], $.proxy(n.handle, n), !1));
        n._enabled = !0
    },
    removeHandlers: function () {
        var n = this,
            t, i;
        if (n._eachWayClickHandlers.length > 0) {
            for (t = 0, i = n._eachWayClickHandlers.length; t < i; t++) n._eachWayClickHandlers[t]._element && n._eachWayClickHandlers[t].destroy();
            n._eachWayClickHandlers = []
        }
        n._enabled = !1
    },
    _freeBetTokenAdjustment: function (n) {
        var t = n[0].querySelector('div[data-inp-type="fbcb"]'),
            i = !1;
        t && t.parentNode.className.indexOf("bs-UseFreeBet-disabled") == -1 && t.parentNode.className.indexOf("bs-UseFreeBet-error") == -1 && (i = t.className.indexOf("bs-FreeBetCheckBox-selected") > -1);
        i && new b365.Ui.Betslip.FreeBetClickProcessor(this._bsInst, this._bsController).init(t).handle(i)
    }
};
Type.registerNamespace("b365.Ui.Betslip");
b365.Ui.Betslip.FreeBetClickHandler = function (n, t) {
    this._bsInst = n;
    this._bsController = t;
    this._enabled = !1;
    this._freeBetClickHandlers = [];
    this._isValid = function () {
        return typeof this._bsInst != "undefined"
    }
};
b365.Ui.Betslip.FreeBetClickHandler.prototype = {
    handle: function (n) {
        var i = this,
            t, f, u, r, e;
        i.removeHandlers();
        t = n.target;
        i._bsInst._pollReqType === i._bsInst.reqTypePollTempBetReceipt && i._bsInst.resetPoll();
        f = new b365.Ui.Betslip.ItemInformation(t);
        u = f.itemElement()[0];
        t = u.querySelector(".bs-FreeBetCheckBox");
        u.className.indexOf("suspended") == -1 && t.parentNode.className.indexOf("bs-UseFreeBet-disabled") == -1 && t.parentNode.className.indexOf("bs-UseFreeBet-error") == -1 && $("#bsDiv.bs-inprogress").length == 0 && (r = t.className.indexOf("bs-FreeBetCheckBox-selected") > -1, !1 || (r ? (t.className = t.className.replace("bs-FreeBetCheckBox-selected", ""), r = !1) : (this._bsInst.getValueFromBSCookie("fs") && this._bsInst.getValueFromBSCookie("fs").replace("||", "") === "1" && (e = this._bsInst.getBetItems(this._bsInst.itemTypeSingle).concat(this._bsInst.getBetItems(this._bsInst.itemTypeBetBuilder)), e.length === 1 && new b365.Ui.Betslip.ToggleBetCredits(this._bsInst, this._bsController).toggle()), t.className = t.className + " bs-FreeBetCheckBox-selected", r = !0), new b365.Ui.Betslip.FreeBetClickProcessor(this._bsInst, this._bsController).init(t).handle(r)));
        i.attachHandlers();
        n.stopPropagation();
        n.preventDefault()
    },
    toggle: function (n) {
        var t, u, r, i;
        u = new b365.Ui.Betslip.ItemInformation(n);
        r = u.itemElement()[0];
        t = r.querySelector(".bs-FreeBetCheckBox");
        r.className.indexOf("suspended") == -1 && t && t.parentNode.className.indexOf("bs-UseFreeBet-disabled") == -1 && t.parentNode.className.indexOf("bs-UseFreeBet-error") == -1 && (i = t.className.indexOf("bs-FreeBetCheckBox-selected") > -1, !1 || (i ? (t.className = t.className.replace("bs-FreeBetCheckBox-selected", ""), i = !1) : (t.className = t.className + " bs-FreeBetCheckBox-selected", i = !0), new b365.Ui.Betslip.FreeBetClickProcessor(this._bsInst, this._bsController).init(t).handle(i)));
        this.attachHandlers()
    },
    update: function (n) {
        var i, t;
        n && (checkBox = n.querySelector('div[data-inp-type="fbcb"]'), i = checkBox && checkBox.className.indexOf("bs-FreeBetCheckBox-selected") > -1, n.className.indexOf("suspended") == -1 && i && checkBox.parentNode.className.indexOf("bs-UseFreeBet-disabled") == -1 && checkBox.parentNode.className.indexOf("bs-UseFreeBet-error") == -1 ? new b365.Ui.Betslip.FreeBetClickProcessor(this._bsInst, this._bsController).init(checkBox).handle(i) : (t = $('input[data-inp-type="sngstk"]', n), t && t.length > 0 && this._bsController.OnItemStakeChanged(t[0])))
    },
    attachHandlers: function () {
        for (var t = this, i = [], u, r = document.getElementsByClassName("bs-UseFreeBet"), n = 0; n < r.length; n++) r[n].className.indexOf("bs-UseFreeBet-error") == -1 && r[n].className.indexOf("bs-UseFreeBet-disabled") == -1 && i.push(r[n].parentNode);
        if (t.removeHandlers(t), i.length == 0) {
            t._enabled = !1;
            return
        }
        for (n = 0, u = i.length; n < u; n++) t._freeBetClickHandlers.push(new b365.Ui.Betslip.ResponsiveClickHandler(i[n], $.proxy(t.handle, t), !1));
        t._enabled = !0
    },
    removeHandlers: function () {
        var n = this,
            t, i;
        if (n._freeBetClickHandlers.length > 0) {
            for (t = 0, i = n._freeBetClickHandlers.length; t < i; t++) n._freeBetClickHandlers[t]._element && n._freeBetClickHandlers[t].destroy();
            n._freeBetClickHandlers = []
        }
        n._enabled = !1
    }
};
Type.registerNamespace("b365.Ui.Betslip");
b365.Ui.Betslip.BetslipClickHandler = function (n, t) {
    this._bsInst = n;
    this._bsController = t;
    this._isValid = function () {
        return typeof this._bsInst != "undefined"
    };
    this._reorderChildElements = function (n) {
        var t, r, i = 0;
        if (n.children.length != 0)
            for (t = 0, r = n.children.length; t < r; t++) n.children[t].hasAttribute("data-item-id") && (n.children[t].setAttribute("data-item-id", i), i = i + 1)
    }
};
b365.Ui.Betslip.BetslipClickHandler.prototype = {
    handle: function (n) {
        var i = this,
            u, r = !1,
            t, e, s, h, o, c, l, f, a, v;
        if (typeof n != "undefined" && n) {
            if (u = n.target, t = $(u), u.id === "BetSlipTypeSelector" || u.id == "BetSlipTypeSelectorWrapper") {
                this._bsController._stakeEntryType != this._bsController._stakeEntryTypes.deviceKeyBoard && this._bsController._stakeEntryHander._isShowing && this._bsController._stakeEntryHander.hide();
                i._bsController._enhancedBetSlipTypeSelector ? i._bsController._enhancedBetSlipTypeSelector._enabled && i._bsController._enhancedBetSlipTypeSelector.showPopUpMenu() : (i._bsController._enhancedBetSlipTypeSelector = new b365.Ui.Betslip.EnhancedBetSlipTypeSelector(i._bsController), i._bsController._enhancedBetSlipTypeSelector.enablePopUp(), i._bsController._enhancedBetSlipTypeSelector.showPopUpMenu());
                n.stopPropagation();
                n.preventDefault();
                return
            }
            if (t.hasClass(".bs-AusRaceBetType_Selection")) {
                this._bsController._stakeEntryType != this._bsController._stakeEntryTypes.deviceKeyBoard && this._bsController._stakeEntryHander._is && this._bsController._stakeEntryHander.hide();
                i._bsController._enhancedBetSlipAusRaceBetTypeSelector ? i._bsController._enhancedBetSlipAusRaceBetTypeSelector._enabled && i._bsController._enhancedBetSlipAusRaceBetTypeSelector.showPopUpMenu(n) : (i._bsController._enhancedBetSlipAusRaceBetTypeSelector = new b365.Ui.Betslip.EnhancedBetSlipAusRaceBetTypeSelector(i._bsController), i._bsController._enhancedBetSlipAusRaceBetTypeSelector.enablePopUps(), i._bsController._enhancedBetSlipAusRaceBetTypeSelector.showPopUpMenu(n));
                n.stopPropagation();
                n.preventDefault();
                return
            }
            if (t.hasClass(".bs-EachWayExtraBetType_Selection")) {
                this._bsController._stakeEntryType != this._bsController._stakeEntryTypes.deviceKeyBoard && this._bsController._stakeEntryHander._is && this._bsController._stakeEntryHander.hide();
                i._bsController._enhancedBetSlipEachWayExtraSelector ? i._bsController._enhancedBetSlipEachWayExtraSelector._enabled && i._bsController._enhancedBetSlipEachWayExtraSelector.showPopUpMenu(n) : (i._bsController._enhancedBetSlipEachWayExtraSelector = new b365.Ui.Betslip.EnhancedBetSlipEachWayExtraSelector(i._bsController), i._bsController._enhancedBetSlipEachWayExtraSelector.enablePopUps(), i._bsController._enhancedBetSlipEachWayExtraSelector.showPopUpMenu(n));
                n.stopPropagation();
                n.preventDefault();
                return
            }
            if (t.hasClass("telBreakout")) return;
            if (t.hasClass(".EnhancedOddsSelection")) {
                this._bsController._stakeEntryType != this._bsController._stakeEntryTypes.deviceKeyBoard && this._bsController._stakeEntryHander._isShowing && this._bsController._stakeEntryHander.hide();
                i._bsController._enhancedBetSlipOddsSelector ? i._bsController._enhancedBetSlipOddsSelector._enabled && i._bsController._enhancedBetSlipOddsSelector.showPopUpMenu(n) : (i._bsController._enhancedBetSlipOddsSelector = new b365.Ui.Betslip.EnhancedBetSlipOddsSelector(i._bsController), i._bsController._enhancedBetSlipOddsSelector.enablePopUps(), i._bsController._enhancedBetSlipOddsSelector.showPopUpMenu(n));
                n.stopPropagation();
                n.preventDefault();
                return
            }
            if (t.hasClass(".EnhancedPitcherSelection")) {
                this._bsController._stakeEntryType != this._bsController._stakeEntryTypes.deviceKeyBoard && this._bsController._stakeEntryHander._isShowing && this._bsController._stakeEntryHander.hide();
                i._bsController._enhancedBetSlipPitcherSelector ? i._bsController._enhancedBetSlipPitcherSelector._enabled && i._bsController._enhancedBetSlipPitcherSelector.showPopUpMenu(n) : (i._bsController._enhancedBetSlipPitcherSelector = new b365.Ui.Betslip.EnhancedBetSlipPitcherSelector(i._bsController), i._bsController._enhancedBetSlipPitcherSelector.enablePopUps(), i._bsController._enhancedBetSlipPitcherSelector.showPopUpMenu(n));
                n.stopPropagation();
                n.preventDefault();
                return
            }
            if (t.hasClass("betSlipCloseIcon")) {
                i._bsController.hideBetslip();
                n.stopPropagation();
                n.preventDefault();
                return
            }
            if (t.hasClass("betSlipReferralCloseIcon")) {
                i._bsInst.refresh();
                n.stopPropagation();
                n.preventDefault();
                return
            }
            if (t.hasClass("betSlipLogin")) {
                i._bsController.clientLoginDelegate();
                n.stopPropagation();
                n.preventDefault();
                return
            }
            if (t.hasClass(".EnhancedToteSelection")) {
                this._bsController._stakeEntryType != this._bsController._stakeEntryTypes.deviceKeyBoard && this._bsController._stakeEntryHander._isShowing && this._bsController._stakeEntryHander.hide();
                i._bsController._enhancedBetSlipToteSelector ? i._bsController._enhancedBetSlipToteSelector._enabled && i._bsController._enhancedBetSlipToteSelector.showPopUpMenu(n) : (i._bsController._enhancedBetSlipToteSelector = new b365.Ui.Betslip.EnhancedBetSlipToteSelector(i._bsController), i._bsController._enhancedBetSlipToteSelector.enablePopUps(), i._bsController._enhancedBetSlipToteSelector.showPopUpMenu(n));
                n.stopPropagation();
                n.preventDefault();
                return
            }
            if (t.hasClass(".EnhancedIfBetSelection")) {
                this._bsController._stakeEntryType != this._bsController._stakeEntryTypes.deviceKeyBoard && this._bsController._stakeEntryHander._isShowing && this._bsController._stakeEntryHander.hide();
                i._bsController._enhancedIfBetSelector ? i._bsController._enhancedIfBetSelector._enabled && i._bsController._enhancedIfBetSelector.showPopUpMenu(n) : (i._bsController._enhancedIfBetSelector = new b365.Ui.Betslip.EnhancedBetSlipIfBetSelector(i._bsController), i._bsController._enhancedIfBetSelector.enablePopUps(), i._bsController._enhancedIfBetSelector.showPopUpMenu(n));
                n.stopPropagation();
                n.preventDefault();
                return
            }
            if (t.hasClass(".EnhancedTeaserSelection")) {
                this._bsController._stakeEntryType != this._bsController._stakeEntryTypes.deviceKeyBoard && this._bsController._stakeEntryHander._isShowing && this._bsController._stakeEntryHander.hide();
                i._bsController._enhancedTeaserSelector ? i._bsController._enhancedTeaserSelector._enabled && i._bsController._enhancedTeaserSelector.showPopUpMenu(n) : (i._bsController._enhancedTeaserSelector = new b365.Ui.Betslip.EnhancedBetSlipTeaserSelector(i._bsController), i._bsController._enhancedTeaserSelector.enablePopUps(), i._bsController._enhancedTeaserSelector.showPopUpMenu(n));
                n.stopPropagation();
                n.preventDefault();
                return
            }
            if (t.hasClass("bs-HelpIcon")) {
                window.open(t.parent().attr("href"), "help");
                n.stopPropagation();
                n.preventDefault();
                return
            }
            t.prop("disabled") || t.parents().prop("disabled") ? r = !0 : ((this._bsInst._pollReqType === this._bsInst.reqTypePollTempBetReceipt && !i._bsController.IsItalianDomain || i._bsController.IsItalianDomain && this._bsInst._pollReqType === this._bsInst.reqTypePollReferredBet) && this._bsInst.resetPoll(), h = new b365.Ui.Betslip.ItemInformation(u), o = h.itemIndexAndType(), c = h.itemElement(), $(c).hasClass("suspended") && !t.hasClass("remove") ? r = !0 : t.hasClass("removeAll") || t.parents().hasClass("removeAll") ? (t.parents().hasClass("removeAll") && (u = t[0].parentNode), this._bsController.clientEnhancedMode() ? (s = $("#stakePad"), e = $('li[class*="multiple-section"], li[class*="single-section"], li[class*="cast-section"]', "#bsDiv"), e = e.filter(function () {
                return this.style.display !== "none"
            }), e.length > 0 ? s.length > 0 ? (this._bsController._enhancedBetSlipAnimations.removeAllBets(e, !0, s, this.removeAllBetsCallBack, [u], this), r = !0) : (this._bsController._enhancedBetSlipAnimations.removeAllBets(e, !1, null, this.removeAllBetsCallBack, [u], this), r = !0) : (new b365.Ui.Betslip.RemoveAllItemsRequestDespatcher(i._bsInst, i._bsController).despatch(u), r = !0)) : (new b365.Ui.Betslip.RemoveAllItemsRequestDespatcher(i._bsInst, i._bsController).despatch(u), r = !0)) : t.hasClass("receiptDone") || t.hasClass("abetslipRecBtn") || t.parent().hasClass("abetslipRecBtn") || t.hasClass("betConfirmCloseIcon") || t.parent().hasClass("betConfirmCloseIcon") ? (this._bsInst.clearBets(!1), r = !0, this._bsController.itemsRemoved(), this._bsInst.hideBetSlip()) : t.hasClass("rctrs") ? (i._bsInst.signupModel && i._bsInst.signupModel.subscribe(), new b365.Ui.Betslip.RetainSelectionsRequestDespatcher(this._bsInst, i._bsController).despatch(u), r = !0) : t.hasClass("ebet") ? (new b365.Ui.Betslip.EditSelectionsRequestDespatcher(this._bsInst).despatch(u), r = !0) : t.hasClass("acceptChanges") || t.parent().hasClass("acceptChanges") ? (f = t.hasClass("acceptChanges") ? t : t.parent(), f.hasClass("bbPricefetch") ? ($(".updatingOdds", "#bsDiv").removeClass("hidden"), f.addClass("hidden"), r = !0) : (new b365.Ui.Betslip.AcceptChangesRequestDespatcher(this._bsInst, this._bsController).despatch(u), r = !0)) : t.hasClass("mlthd") || t.hasClass("mbHeader") || (t.hasClass("bs-BetNameNoBreakdown") || t.hasClass("multiplesLabel")) && t.closest("[data-item-type]").hasClass("bs-MultipleBets_HighestAccumulator") && !t.hasClass("banker") ? (new b365.Ui.Betslip.ToggleMultiples(this._bsInst, this._bsController).toggle(), r = !0) : t.hasClass("deleteItem") || t.hasClass("deleteItem") ? (l = $(n.target).closest("[data-item-type]"), new b365.Ui.Betslip.ItemDeleteExecutor(i._bsInst, i._bsController, l.attr("data-item-id"), l.attr("data-item-type")).execute(), r = !0) : t.hasClass("ctcMessageContainer") || t.hasClass("ctcMessage") || t.hasClass("ctcQuestionmark") ? ($(".ctcMessageDetails").toggle(), r = !0) : t.hasClass("placeBet") || t.parent().hasClass("placeBet") || t.parent().parent().hasClass("placeBet") ? (u = t.hasClass("placeBet") ? u : t.parent().parent().hasClass("placeBet") ? t.parent().parent()[0] : t.parent()[0], f = $(u), f.hasClass("bbPricefetch") ? ($(".updatingOdds", "#bsDiv").removeClass("hidden"), f.addClass("hidden"), r = !0) : (i._bsController._stakeEntryType == i._bsController._stakeEntryTypes.deviceKeyBoard && document.activeElement.blur(), new b365.Ui.Betslip.PlaceBetClickHandler(this._bsInst, this._bsController).handle(u), r = !0)) : t.hasClass("referBet") || t.parent().hasClass("referBet") || t.parent().parent().hasClass("referBet") ? (u = t.hasClass("referBet") ? u : t.parent().parent().hasClass("referBet") ? t.parent().parent()[0] : t.parent()[0], $(u).addClass("processing"), new b365.Ui.Betslip.ReferBetRequestDespatcher(this._bsInst, this._bsController).despatch()) : t.hasClass("btnSpeaker") || t.parent().hasClass("btnSpeaker") || t.parent().parent().hasClass("btnSpeaker") ? (u = t.hasClass("placeBet") ? u : t.parent().parent().hasClass("placeBet") ? t.parent().parent()[0] : t.parent()[0], a = this._bsInst.getClickToCallHandler(), a && a.toggleSpeakerPhone(u), r = !0) : t.hasClass("placeCTCBet") || t.parent().hasClass("placeCTCBet") || t.parent().parent().hasClass("placeCTCBet") ? (v = t.parent() && t.parent().attr("data-atype") || t.parent() && t.parent().parent() && t.parent().parent().attr("data-atype"), u = document.getElementById("bc-CallBtn"), this._bsController.betCallHandler && this._bsController.betCallHandler.handle(v, u), r = !0) : t.hasClass("rptStake") ? (new b365.Ui.Betslip.RepeatStakeClickHandler(this._bsInst, this._bsController, o[0], o[1], c).handle(n), r = !0) : t.hasClass("sngbrk") || t.parents().hasClass("sngbrk") ? (new b365.Ui.Betslip.SingleBreakdownRequestDespatcher(this._bsInst, this._bsController).despatch(o[0]), r = !0) : t.hasClass("mltbrk") || t.parents().hasClass("mltbrk") ? (new b365.Ui.Betslip.MultiBreakdownRequestDespatcher(this._bsInst, this._bsController).despatch(o[0]), r = !0) : t.hasClass("cstBrkDwn") || t.parents().hasClass("mltbrk") ? (new b365.Ui.Betslip.CastBreakdownRequestDespatcher(this._bsInst, this._bsController).despatch(o[0]), r = !0) : t.hasClass("banker") && u.tagName.toLowerCase() == "button" || t.hasClass("bankerIndicatorWrapper") ? $("#bsDiv").hasClass("receipt") || (new b365.Ui.Betslip.BankerToggleRequestDespatcher(this._bsInst, this._bsController).despatch(n), r = !0) : t.hasClass("sngPD") ? (new b365.Ui.Betslip.PitcherDetailsRequestDespatcher(this._bsInst).despatch(n), r = !0) : t.attr("id") == "bsjn" ? (this._bsController.joinNow(), r = !0) : t.hasClass("minusIcon") || t.hasClass("plusIcon") ? (new b365.Ui.Betslip.StakeChangedHandler(this._bsInst).handle(t.siblings(".stk").get(0)), r = !0) : t.hasClass("bs-CheckBoxFreeBet") || t.hasClass("bs-CheckBoxFreeBetWrapper") || t.hasClass("bs-useFreeBetAmount") ? (new b365.Ui.Betslip.ToggleBetCredits(this._bsInst, this._bsController).toggle(), r = !0) : (t.hasClass("gotomybets") || t.parent().hasClass("gotomybets") || t.parent().parent().hasClass("gotomybets")) && (i._bsController.hideBetslip(), n.stopPropagation(), n.preventDefault(), window.top.ns_navlib_util && window.top.ns_navlib_util.WebsiteNavigationManager && window.top.ns_navlib_util.WebsiteNavigationManager.NavigateTo("#MB#"), r = !0));
            r ? (n.preventDefault(), n.stopPropagation()) : this._bsController._stakeEntryType == this._bsController._stakeEntryTypes.stakePad && this._bsController._stakeEntryHander._isShowing && (n.target.parentNode.id.toLowerCase().indexOf("stakepad") == -1 && this._bsController._stakeEntryHander.hide(), n.stopPropagation(), n.preventDefault())
        }
    },
    removeAllBetsCallBack: function () {
        var t = arguments[0],
            n = this;
        new b365.Ui.Betslip.RemoveAllItemsRequestDespatcher(n._bsInst, n._bsController).despatch(t)
    }
};
Type.registerNamespace("b365.Ui.Betslip");
b365.Ui.Betslip.BetslipChangeHandler = function (n, t) {
    this._bsInst = n;
    this._controller = t;
    this._isValid = function () {
        return typeof this._bsInst != "undefined" && typeof this._controller != "undefined"
    }
};
b365.Ui.Betslip.BetslipChangeHandler.prototype = {
    handle: function (n) {
        var i, t, u, r;
        typeof n != "undefined" && n && (i = !1, t = $(n.target), t.prop("disabled") || t.parents().prop("disabled") || t.parents().attr("suspended") ? i = !0 : (u = new b365.Ui.Betslip.ItemInformation(n.target), r = u.itemIndexAndType(), t.hasClass("bet-slip-type") ? (new b365.Ui.Betslip.BetslipTypeChangeHandler(this._bsInst, this._controller).handle(n.target), i = !0) : t.hasClass("mlthd") || t.hasClass("mbHeader") ? (new b365.Ui.Betslip.ToggleMultiples(this._bsInst, this._controller).toggle(), i = !0) : t.hasClass("teaserSel") ? (new b365.Ui.Betslip.TeaserChangeHandler(this._bsInst).handle(n), i = !0) : t.hasClass("ausracebettype-sel") ? (new b365.Ui.Betslip.AusRaceBetTypeChangeHandler(this._bsInst, this._controller).handle(n), i = !0) : t.hasClass("pitcher-sel") ? (new b365.Ui.Betslip.PitcherChangeHandler(this._bsInst).handle(n), i = !0) : t.hasClass("ifbetaction") ? (new b365.Ui.Betslip.IfBetActionChangeHandler(this._bsInst).handle(r[0], n.target), i = !0) : t.hasClass("odds") ? (new b365.Ui.Betslip.OddsChangeHandler(this._bsInst, this._controller).handle(n, r[0]), i = !0) : t.hasClass("aus-tote") && (new b365.Ui.Betslip.AusToteChangeHandler(this._bsInst).handle(n, r[0], r[1]), i = !0)), i && n.preventDefault())
    }
};
Type.registerNamespace("b365.Ui.Betslip");
b365.Ui.Betslip.ResponsiveClickHandler = function (n, t, i) {
    this._events = [];
    this._touchEvents = [];
    this._element = n;
    this._handler = t;
    this._useCapture = i;
    this._startX = null;
    this._startY = null;
    this._events.push(this.addListener(n, "click", this, this._useCapture))
};
b365.Ui.Betslip.ResponsiveClickHandler.prototype.destroy = function () {
    for (var n = this._events.length - 1; n >= 0; n -= 1) this._events[n].destroy();
    this._events = this._touchEvents = this._element = this._handler = this.ResponsiveClickHandler = null
};
b365.Ui.Betslip.ResponsiveClickHandler.prototype.reset = function () {
    if (this._touchEvents)
        for (var n = this._touchEvents.length - 1; n >= 0; n -= 1) this._touchEvents[n].destroy();
    this._touchEvents = []
};
b365.Ui.Betslip.ResponsiveClickHandler.prototype.addListener = function (n, t, i, r) {
    if (n.addEventListener) return n.addEventListener(t, i, r), {
        destroy: function () {
            n.removeEventListener(t, i, r)
        }
    };
    var u = function () {
        i.handleEvent(window.event, i)
    };
    return n.attachEvent("on" + t, u), {
        destroy: function () {
            n.detachEvent("on" + t, u)
        }
    }
};
b365.Ui.Betslip.ResponsiveClickHandler.prototype.handleEvent = function (n) {
    this.onClick(n)
};
b365.Ui.Betslip.ResponsiveClickHandler.prototype.onClick = function (n) {
    var t;
    return !this._handler && n.type == this._touchEndEvent ? (n.target.removeEventListener(this._touchEndEvent, this.handleEvent, this._useCapture), !1) : (t = this._handler.call(this._element, n), n.target.tagName === "A" && n.target.target && n.target.target === "_blank" || (n.stopPropagation ? n.stopPropagation() : n.cancelBubble = !0, this.reset(), window.touchBuster && n.type == this._touchEndEvent && window.touchBuster.preventGhostTouch(this._startX, this._startY)), t)
};
Type.registerNamespace("b365.Ui.Betslip");
b365.Ui.Betslip.BetslipTypeChangeHandler = function (n, t) {
    this._bsInst = n;
    this._bsController = t;
    this._isValid = function () {
        return typeof this._bsInst != "undefined"
    };
    this._clearCasts = function (n) {
        (n == this._bsInst.slipIF || n == this._bsInst.slipReverseIF || n == this._bsInst.slipFixedTeaser || n == this._bsInst.slipBanker) && this._bsInst.setBetItems([], this._bsInst.betTypeCast)
    };
    this._resetStakesAndEW = function (n) {
        var i, t;
        if (n == this._bsInst.slipIF || n == this._bsInst.slipReverseIF || n == this._bsInst.slipBanker || n == this._bsInst.slipFixedTeaser || n == this._bsInst.slipStandard) {
            for (i = this._bsInst.getBetItems(this._bsInst.betTypeNormal), t = 0; t < i.length; t++) i[t].setStItem("ust", "0"), i[t].setStItem("st", "0"), i[t].setStItem("tr", "0"), i[t].setStItem("ust", "0"), i[t].setStItem("ac", ""), n == this._bsInst.slipBanker || i[t].getCnItem("po") || i[t].setStItem("ew", "0");
            if (n != this._bsInst.slipBanker)
                for (i = this._bsInst.getBetItems(this._bsInst.betTypeMultiple), t = 0; t < i.length; t++) i[t].setStItem("ew", "0")
        }
    };
    this._setSlipType = function (n) {
        this._bsInst.setValueInBSCookie("bt", n);
        this._clearCasts(n);
        this._resetStakesAndEW(n);
        this._bsInst.updateState();
        (n === this._bsInst.slipStandard || n === this._bsInst.slipBanker) && (this._bsController.complexMultiplesCombinationsInit = !0);
        this._bsInst.refresh(this.betTypeAll)
    }
};
b365.Ui.Betslip.BetslipTypeChangeHandler.prototype = {
    handle: function (n) {
        typeof n != "undefined" && n && this._setSlipType(n.value)
    }
};
Type.registerNamespace("b365.Ui.Betslip");
b365.Ui.Betslip.AusRaceBetTypeChangeHandler = function (n, t) {
    this._bsInst = n;
    this._bsController = t;
    this._isValid = function () {
        return typeof this._bsInst != "undefined"
    }
};
b365.Ui.Betslip.AusRaceBetTypeChangeHandler.prototype = {
    handle: function (n) {
        var w = n.target,
            nt = new b365.Ui.Betslip.ItemInformation(w),
            b = nt.itemIndexAndType(),
            t = this._bsInst.getBetItemById(b[1], b[0]),
            l, a, o, s, g, y, r, p;
        if (t) {
            var h = w.value.split("~"),
                i = "",
                f = "",
                e = "",
                k = "",
                c = "",
                u;
            for (r = 0; r < h.length; r++) i = h[r], (i.indexOf("FW") > -1 || i.indexOf("TW") > -1) && (l = i.split("#"), u = l[0].substr(2, i.length), f = u.split("-")[1], k = l[1]), (i.indexOf("FP") > -1 || i.indexOf("TP") > -1) && (a = i.split("#"), u = a[0].substr(2, i.length), e = u.split("-")[1], c = a[1]);
            o = f && e ? "1" : "";
            s = u.split("-")[0];
            o ? (t.setStItem("ew", o), t.setCnItem("pp", e), t.setCnItem("po", c)) : (t.getStItem("ew") && t.removeStItem("ew"), t.getCnItem("pp") && (t.removeCnItem("pp"), t.removeCnItem("po")));
            var tt = $("#bsDiv"),
                v = $('li[data-item-fpid="' + t.getCnItem("fp") + '"]', tt),
                d = f || e;
            for (v && v.length > 0 && v[0].setAttribute("data-item-fpid", d), t.setCnItem("fp", d), o ? t.setCnItem("id", s + "-" + f) : t.setCnItem("id", u), t.setCnItem("o", k || c), i = h[0], t.setCnItem("pt", i.indexOf("TW") > -1 || i.indexOf("TP") > -1 ? "A" : "N"), g = n.target.parentElement.getAttribute("data-previousid"), y = g.split("~"), r = 0; r < y.length; r++) p = y[r], previousParticipantId = p.substring(2, p.indexOf("#")), this._bsController.itemsRemoved(previousParticipantId);
            this._bsController.highlightSelectedBets();
            this._bsController.updateMultiplesEachWayFlag();
            this._bsInst.updateState();
            this._bsController.getMultipleInfo();
            bsApp.addOnRefreshReqComplete();
            o ? (this._bsController.addToBetsBank(s + "-" + f), this._bsController.addToBetsBank(s + "-" + e)) : this._bsController.addToBetsBank(u)
        }
    }
};
Type.registerNamespace("b365.Ui.Betslip");
b365.Ui.Betslip.PitcherChangeHandler = function (n) {
    this._bsInst = n;
    this._baseBallFixtureParticipantCookieKey = "bbfp";
    this._isValid = function () {
        return typeof this._bsInst != "undefined"
    };
    this._updateCustomDropdownAttribute = function (n) {
        $(n).parent(".betslip-select").attr("data-text", $(n).find("option:selected").text())
    }
};
b365.Ui.Betslip.PitcherChangeHandler.prototype = {
    handle: function (n) {
        var t = n.target,
            u = new b365.Ui.Betslip.ItemInformation(t),
            i = u.itemIndexAndType(),
            r = this._bsInst.getBetItemById(i[1], i[0]);
        r && (r.setStItem(this._baseBallFixtureParticipantCookieKey, t.value), this._updateCustomDropdownAttribute(t), this._bsInst.updateState())
    }
};
Type.registerNamespace("b365.Ui.Betslip");
b365.Ui.Betslip.TotalsCalculator = function (n, t) {
    this._bsInst = n;
    this._betSlipController = t;
    this._freeBetHelper = new b365.Ui.Betslip.BetCreditsCalculator(n, t);
    this._itemToReturnDisplayHelper = new b365.Ui.Betslip.ItemToReturnDisplayHelper(t);
    this._ttTotalsEle = $("#bsDiv .totals");
    this._ttStkEle = $("#bsDiv .totals .totalStake .total, #bsDiv .placeBet .totalStake, #bsDiv .bs-totalsFooter .totalStake .total");
    this._totalStakeElement = $("#totalStake", "#bsDiv");
    this._ttTrWrapperEle = $("#bsDiv .totals");
    this._ttTrCntEle = $("#bsDiv .totals .totalReturn, #bsDiv .bs-totalsFooter .bs-TotalToReturnReceipt_Wrapper");
    this._taxWarnEle = $("#bsDiv .totals .tax-warning");
    this._taxHeader = $("#taxWarningHeader");
    this._formatter = new b365.Ui.Formatter;
    this._currencyFormatter = window.top.ns_gen5_util.CurrencyFormatter;
    this._isValid = function () {
        return typeof this._bsInst != "undefined"
    };
    this._calcTotalStake = function (n, t, i) {
        var s = this._bsInst.getSlipType() == this._bsInst.slipBanker,
            h = this._betSlipController.ausMultiplesEnabled() && !s,
            e = 0,
            u, r, f, o;
        for (t = t ? t : "st", r = 0; r < n.length; r++) u = n[r].getStItem(t), u = u && Number(u) || "", f = n[r].getStItem("ew") == "1", isNaN(u) === !1 && (u = Math.round(u * 100), o = Number(n[r].getCnItem("bc") ? n[r].getCnItem("bc") : n[r].getStItem("bc") ? n[r].getStItem("bc") : "1"), o > 1 || f ? (h && this._bsInst.getSlipType() == this._bsInst.slipStandard && n[r].getCnItem("pt") == undefined && (f = !1), e += Number(String(u * (f ? 2 : 1) * o))) : e += u);
        return $blib.pad2DP(String(e / 100), i)
    };
    this._updateIfReverseIfTotals = function () {
        var t = bs.getBetItems(bs.betTypeNormal),
            i = t[0].getStItem("st"),
            r = 0,
            n = 0;
        t.length > 0 && typeof i != "undefined" && (r = $blib.roundDecimal(String(Number(i) * (bs.getSlipType() == bs.slipReverseIF ? 2 : 1))));
        (bs.getSlipType() == bs.slipIF || bs.getSlipType() == bs.slipReverseIF) && this._setTotalToWin();
        n = this._currencyFormatter.ApplyDelimiterAndGroupSeparator(String(r));
        n = this._currencyFormatter.ApplyCurrencySymbol(n);
        this._ttStkEle.text(n);
        this._totalStakeElement.text(n)
    };
    this._hideTaxHeader = function () {
        this._taxHeader.addClass("hidden")
    };
    this._showTaxHeader = function () {
        this._taxHeader.removeClass("hidden")
    };
    this._setTotalToWin = function () {
        var f = this._bsInst.getSlipType() == this._bsInst.slipIF,
            r = this._bsInst.getSlipType() == this._bsInst.slipReverseIF,
            i = new b365.Ui.Betslip.TaxCalculator(this._bsInst),
            n = {},
            t, u;
        this._initParams(n);
        this._totalSingleItems(n);
        this._totalBetBuilderItems(n);
        n.someSp || this._totalCastItems(n);
        !(n.numStakes > 0) || n.someSp || n.someEW || n.someRelated && n.numStakes > 1 ? (this._ttTrWrapperEle.removeClass("ifBet"), this._ttTrWrapperEle.removeClass("reverseIfBet"), this._ttTrWrapperEle.addClass("hidden"), this._hideTaxHeader()) : (t = n.totTw, !i.isUSNJBet() && r && (t = n.totTw * 2), !i.isUSNJBet() && i.isMaxLiabilityExceeded(t) && (u = this._formatter.roundFixed(r ? Number(n.totStk) * 2 : Number(n.totStk), 2), t = this._formatter.roundDecimal(i.getMaxReturn() + (i.isGermanTaxApplied() ? 0 : Number(u)))), t = parseFloat(Math.floor(t * 100 + 1e-6) / 100), this._ttTrCntEle && t > 0 && (r || f) && $(".betslipReferralHeader").length == 0 && (t = this._formatter.roundDecimal(String(t)), t = this._currencyFormatter.ApplyDelimiterAndGroupSeparator(t), this._ttTrCntEle.find(".total").html(t), this._ttTrCntEle.removeClass("hidden"), this._ttTrCntEle.addClass("visible"), this._ttTrWrapperEle.removeClass("hidden"), r ? (this._ttTrWrapperEle.removeClass("ifBet"), this._ttTrWrapperEle.addClass("reverseIfBet")) : (this._ttTrWrapperEle.addClass("ifBet"), this._ttTrWrapperEle.removeClass("reverseIfBet")), this._ttTrWrapperEle.removeClass("hidden")), this._showTaxHeader());
        this._hasMultiplesWithStake() && this._showTaxHeader()
    };
    this._setTotalToReturn = function () {
        var e = $(".bsPotentialReturns", "#bsDiv"),
            n, r, t, u, i, o, f;
        if (e.length != 0 && (n = {}, this._initParams(n), r = this._bsInst.getSlipType() == this._bsInst.slipBanker, n.ausMultiplesEnabled = this._betSlipController.ausMultiplesEnabled() && !r, r && e.addClass("hidden"), this._totalSingleItems(n), this._totalBetBuilderItems(n), n.someSp || this._totalCastItems(n), (!n.ausMultiplesEnabled || n.ausMultiplesInvalid || n.someRelated) && (t = $('#bsDiv .multiple-section [data-item-type="multiple"]'), u = 0, t && t.length > 0)))
            for (u = t.length, i = r ? 0 : 1, i; i < u; i++) o = $(t[i]).find(".stk")[0], f = $(t[i]).find(".bs-StandardMultipleStake_ToReturn")[0], f && f.setAttribute("style", "display:none;")
    };
    this._initParams = function (n) {
        n.numStakes = 0;
        n.totTw = 0;
        n.totalToReturn = 0;
        n.someSp = !1;
        n.someEW = !1;
        n.someRelated = !1;
        n.totStk = isNaN(this._ttStkEle.text()) ? 0 : Number(this._ttStkEle.text());
        n.eachWayArray = [];
        n.ausMultiplesEnabled = !1;
        n.ausMultiplesInvalid = !1;
        n.singlesCount = 0
    };
    this._totalSingleItems = function (n) {
        var g = this._bsInst.getSlipType() == this._bsInst.slipBanker,
            k, v, s, d;
        n.ausMultiplesEnabled = this._betSlipController.ausMultiplesEnabled() && !g;
        for (var u = new b365.Ui.Betslip.TaxCalculator(this._bsInst), f = 0, r = this._bsInst.getBetItems(this._bsInst.betTypeNormal), c, i, y, l, a, h, p, t = 0, e = r.length; t < e; t++) {
            if (c = $blib.getItemOdds(this._bsInst.ItemTypeNormal, r[t]), a = this._betHasSP(r[t], this._bsInst.ItemTypeNormal), a && (n.hasSp = !0, n.ausMultiplesInvalid = !0), h = r[t].getStItem("ew") == "1", p = r[t].getCnItem("po") != undefined, n.singlesCount++, (h || p) && (n.singlesCount++, n.eachWayArray.push([(t + 1).toString()])), i = r[t].getStItem("st"), y = r[t].getStItem("to"), i && parseFloat(i) != NaN && parseFloat(i) > 0 && (l = a, n.someSp = n.someSp || l, n.someEW = n.someEW || h, n.numStakes++, (this._bsInst.getSlipType() == this._bsInst.slipIF || this._bsInst.getSlipType() == this._bsInst.slipReverseIF) && n.numStakes == 1 && (n.totStk = Number(i))), n.someRelated || (n.someRelated = $('#bsDiv li[data-item-id="' + t + '"][data-item-type="single"]').hasClass("restrictedCong")), !l && (!h || n.ausMultiplesEnabled)) {
                i = $.isNumeric(i) ? Number(i) : 0;
                u._isFreeBet = r[t].getStItem("ft");
                f = this._totalSlipItem(u, t, i, c, y);
                var w = this._bsInst.getSlipType() == this._bsInst.slipIF,
                    o = this._bsInst.getSlipType() == this._bsInst.slipReverseIF,
                    b = !1;
                getBetslipWebModule().getUserCountryID() != "198" && u.isMaxLiabilityExceeded(f) && (f = u.getMaxReturn() + (u.isGermanTaxApplied() ? 0 : Number(i)), b = !0);
                k = $blib.pad2DP(String(f));
                n.ausMultiplesEnabled || w || o || (this._itemToReturnDisplayHelper.setReturnValue(t, "single", k), this._itemToReturnDisplayHelper.setVisibility(t, "single", !0));
                w || o ? (t === 0 || b || (f = f - i), u.isUSNJBet() ? (n.totTw = this._totalUSNJIfSlip(u, +n.totTw, i, c, r[0].getStItem("st"), t == e - 1), this._itemToReturnDisplayHelper.setReturnValue(t, "single", $blib.pad2DP(String(n.totTw))), this._itemToReturnDisplayHelper.setVisibility(t, "single", !0)) : (n.totTw += Number(f), this._itemToReturnDisplayHelper.setReturnValue(t, "single", $blib.pad2DP(String(n.totTw * (o ? 2 : 1)))), this._itemToReturnDisplayHelper.setVisibility(t, "single", !0))) : (n.totTw += Number(f), v = !1, s = s = $blib.pad2DP(String(n.totTw * (o ? 2 : 1))), getBetslipWebModule().getUserCountryID() != "198" && u.isMaxLiabilityExceeded(s) && (v = !0, n.totTw = $blib.pad2DP(String(u.getMaxReturn() + (u.isGermanTaxApplied() ? 0 : Number(o ? i * 2 : i))))), v && (s = n.totTw), this._itemToReturnDisplayHelper.setReturnValue(t, "single", s), this._itemToReturnDisplayHelper.setVisibility(t, "single", !0))
            }
            n.totalToReturn = n.totTw
        }
        for (t = 0, e = r.length; t < e; t++) d = this._betHasSP(r[t], this._bsInst.ItemTypeNormal), d ? this._itemToReturnDisplayHelper.setVisibility(t, "single", !1) : this._itemToReturnDisplayHelper.setVisibility(t, "single", !0)
    };
    this._totalUSNJIfSlip = function (n, t, i, r, u, f) {
        var o = this._bsInst.getSlipType() == this._bsInst.slipReverseIF,
            e;
        return u || (u = 0), o && (i = this._formatter.roundFixed(u * 2, 2)), t += Number(n.calculateUntaxedWinnings(i, r, !0)), f && (e = o ? i : u, t = n.isMaxLiabilityExceeded(t) ? n._maxLiabilityForUser : t, t = this._formatter.roundDown(n.applyUSNJTaxToTotalWinnings(t, e), 2), t = Number(t) + Number(e)), t
    };
    this._totalBetBuilderItems = function (n) {
        for (var o = this._bsInst.getBetItems(this._bsInst.itemTypeSingle), u = [], e, c, l, i, t, a, r, s, v, h, f = 0; f < o.length; f++) o[f].toString().indexOf("il=") > -1 && u.push(o[f]);
        if (u && u.length)
            for (t = new b365.Ui.Betslip.TaxCalculator(this._bsInst), e = 0, c = u.length; e < c; e++) r = u[e], l = $blib.getItemOdds(this._bsInst.itemTypeBetBuilder, r), i = r.getStItem("st"), i = i && parseFloat(i) || null, a = r.getStItem("ft"), v = r.getStItem("to"), t._isFreeBet = a, s = this._totalSlipItem(t, e, i, l, v), !t.isUSNJBet() && t.isMaxLiabilityExceeded(s) && (s = this._formatter.roundDecimal(Number(t.getMaxReturn()) + (t.isGermanTaxApplied() ? 0 : i))), h = $blib.pad2DP(String(s)), this._itemToReturnDisplayHelper.setReturnValue(o.indexOf(r), "betbuilder", h), n.totTw += Number(h)
    };
    this._totalSlipItem = function (n, t, i, r, u) {
        var f;
        switch (this._bsInst.getSlipType()) {
            case this._bsInst.slipReverseIF:
            case this._bsInst.slipIF:
                f = n.calcReturnsByLine(i, r, u, !0);
                break;
            default:
                f = n.calcReturnsByLine(i, r, u)
        }
        return f
    };
    this._totalCastItems = function (n) {
        for (var r = new b365.Ui.Betslip.TaxCalculator(this._bsInst), i = this._bsInst.getBetItems(this._bsInst.betTypeCast), u, o, f, t = 0, e = i.length; t < e; t++) r._isFreeBet = i[t].getStItem("ft"), o = i[t].getStItem("to"), u = i[t].getStItem("st"), u && parseFloat(u) != NaN && parseFloat(u) > 0 && (n.numStakes++, n.someSp = this._betHasSP(i[t], this._bsInst.betTypeCast), n.someRelated || (n.someRelated = $('#bsDiv li[data-item-id="' + t + '"][data-item-type="cast"]').hasClass("restrictedCong"))), n.someSp || (f = r.calcReturnsByLine(u, $blib.getItemOdds(this._bsInst.betTypeCast, i[t]), o), !r.isUSNJBet() && r.isMaxLiabilityExceeded(f) && (f = this._formatter.roundDecimal(Number(r.getMaxReturn()) + (r.isGermanTaxApplied() ? 0 : Number(u)))), this._itemToReturnDisplayHelper.setReturnValue(t, "cast", $blib.pad2DP(String(f))), n.totTw += f, n.totalToReturn += Number(f));
        for (t = 0, e = i.length; t < e; t++) n.someSp = this._betHasSP(i[t], this._bsInst.betTypeCast), n.someSp ? this._itemToReturnDisplayHelper.setVisibility(t, "cast", !1) : this._itemToReturnDisplayHelper.setVisibility(t, "cast", !0)
    };
    this._betHasSP = function (n, t) {
        var i = $blib.getItemOdds(t, n);
        return i == "" && n.getBBItems().length == 0 || i == "0" || i == "0/0" || n.getStItem("sp") == "1"
    };
    this._hasMultiplesWithStake = function () {
        for (var r = this._bsInst.getBetItems(this._bsInst.itemTypeMultiple), i = !1, t, n = 0; n < r.length && !i; n++) t = r[n].getStItem("st"), t && parseFloat(t) != NaN && parseFloat(t) > 0 && (i = !0);
        return i
    }
};
b365.Ui.Betslip.TotalsCalculator.prototype = {
    calculate: function () {
        var t, n, u, f;
        if (this._isValid()) {
            t = this._betSlipController.getCurrencyObject().decimalSeparator || this._ttStkEle.parents(".betReceipt:first").data("num-dec-sep");
            n = 0;
            switch (this._bsInst.getSlipType()) {
                case this._bsInst.slipReverseIF:
                case this._bsInst.slipIF:
                    this._updateIfReverseIfTotals();
                    break;
                case this._bsInst.slipBanker:
                    n = this._calcTotalStake(this._bsInst.getBetItems(this._bsInst.betTypeMultiple), undefined, t);
                    n = this._currencyFormatter.ApplyDelimiterAndGroupSeparator(n);
                    n = this._currencyFormatter.ApplyCurrencySymbol(n);
                    this._ttStkEle.text(n);
                    this._totalStakeElement.text(n);
                    this._setTotalToReturn();
                    break;
                default:
                    if (betItems = this._bsInst.getBetItems(this._bsInst.betTypeAll), betItems && betItems.length) u = this._calcTotalStake(betItems), n = this._currencyFormatter.ApplyDelimiterAndGroupSeparator(u), n = this._currencyFormatter.ApplyCurrencySymbol(n), this._ttStkEle.text(n), this._totalStakeElement.text(n);
                    else {
                        var r = $(".tempbetstatus_title.accepted"),
                            e = r.parents("li[data-item-type='single']").find(".stake>span:nth-child(2)"),
                            o = r.parents("li[data-item-type='cast']").find(".stake>span:nth-child(1)"),
                            s = r.parents("li[data-item-type='multiple']").find(".stake"),
                            i = 0;
                        e.each(function (n, r) {
                            i += +$(r).text().replace(t, ".")
                        });
                        o.each(function (n, r) {
                            i += +$(r).text().replace(t, ".")
                        });
                        s.each(function (n, r) {
                            i += +$(r).text().replace(/\w*/, "").replace(t, ".")
                        });
                        n = i.toFixed(2).replace(".", t);
                        n = this._currencyFormatter.ApplyCurrencySymbol(n);
                        this._ttStkEle.text(n);
                        this._totalStakeElement.text(n)
                    }
                    this._setTotalToWin();
                    f = this._bsInst.getSlipType() == this._bsInst.slipBanker;
                    (this._bsInst.getValueFromBSCookie("fs").replace("||", "") == 1 || document.getElementsByClassName("bs-FreeBetCheckBox-selected").length > 0 || document.getElementsByClassName("br-UsingFreeBet").length > 0 || document.getElementsByClassName("fbt-FreeBetToken_Redeemed").length > 0 || document.getElementsByClassName("bs-MultipleBets_HighestAccumulator").length > 0 || document.getElementsByClassName("bs-EachWayCheckbox").length > 0 || this._betSlipController.ausMultiplesEnabled() && !f && this._bsInst.getSlipType() != this._bsInst.slipFixedTeaser) && (this._freeBetHelper.calculate(), n = this._calcTotalStake(this._bsInst.getBetItems(this._bsInst.betTypeAll), undefined, t), n = this._currencyFormatter.ApplyDelimiterAndGroupSeparator(n), n = this._currencyFormatter.ApplyCurrencySymbol(n), document.getElementById("bstsx") && (document.getElementById("bstsx").innerHTML = n), this._ttStkEle.text(n), this._totalStakeElement.text(n));
                    this._setTotalToReturn()
            }
            this._bsInst.contentChangedOnClient()
        }
    },
    getFreeBetItem: function () {
        for (var t = this._bsInst.getBetItems() || [], n = 0, i = t.length; n < i; n++)
            if (t[n].getStItem("ft")) return t[n];
        return null
    }
};
Type.registerNamespace("b365.Ui.Betslip");
b365.Ui.Betslip.MultipleStakeChangedHandler = function (n, t) {
    this._bsInst = n;
    this._bsController = t;
    this._isValid = function () {
        return typeof this._bsInst != "undefined"
    }
};
b365.Ui.Betslip.MultipleStakeChangedHandler.prototype = {
    handle: function (n, t) {
        var i, r;
        n >= 0 && (i = this._bsInst.getBetItemById(this._bsInst.itemTypeMultiple, n), i && ($blib.isDecimal(t.value) == !0 ? (r = $blib.to2DP(t.value), Number(r) > $blib.getMaxStake() && (t.value = String($blib.getMaxStake()))) : t.value = "", i.setStItem("st", t.value), i.setStItem("ust", t.value), this._bsController.updateMultiplesEachWayFlag(), this._bsInst.updateState()))
    }
};
Type.registerNamespace("b365.Ui.Betslip");
b365.Ui.Betslip.SingleStakeChangedHandler = function (n, t) {
    this._bsInst = n;
    this._bsController = t;
    this._isValid = function () {
        return typeof this._bsInst != "undefined"
    }
};
b365.Ui.Betslip.SingleStakeChangedHandler.prototype = {
    updateAllStakes: function (n, t) {
        var f = n,
            r = $("#bsDiv .single-section li .stake .stk"),
            u = "",
            o = new b365.Ui.Betslip.ToReturnCalculator(this._bsInst),
            i, e;
        for (this._bsController && this._bsController._currencyDisplayHelper && (f = this._bsController._currencyDisplayHelper.unformatCurrency(n)), n != "" && (u = $blib.pad2DP(String(f)), this._bsController.IsItalianDomain() && (u = Math.floor(Number(f))), this._bsController._currencyDisplayHelper && (u = this._bsController._currencyDisplayHelper.formatCurrency(u))), i = t, e = r.length; i < e; i++) r[i].className.indexOf("bs-FreeBet-disabled") > -1 || ($(r[i]).val(u), this._bsInst.getBetItems(this._bsInst.itemTypeSingle)[i].setStItem("st", f), o.calculate(i, this._bsInst.itemTypeSingle, r[i]), this._bsController.getPushMarketsEnabled() && new b365.Ui.Betslip.StakeEntryRules(this._bsController).PushBetDisplayUpdate(i, this._bsInst.itemTypeSingle, r[i]))
    },
    handle: function (n, t, i) {
        var a = document.getElementById("bsDiv"),
            e, o, r, u, h, c, s, f, l;
        if (this._isValid()) {
            $("#mltsngstk").val("");
            switch (this._bsInst.getSlipType()) {
                case this._bsInst.slipIF:
                    new b365.Ui.Betslip.IFBetStakeChangedHandler(this._bsInst, this._bsController).handle(n, i);
                    break;
                case this._bsInst.slipReverseIF:
                    new b365.Ui.Betslip.ReverseIfBetStakeChangedHandler(this._bsInst, this._bsController).handle(n, i);
                    break;
                default:
                    new b365.Ui.Betslip.ToReturnCalculator(this._bsInst).calculate(n, t, i);
                    this._bsController.getPushMarketsEnabled() && new b365.Ui.Betslip.StakeEntryRules(this._bsController).PushBetDisplayUpdate(n, t, i)
            }
            if (this._bsController.getPushMarketsEnabled() && (e = a.getElementsByClassName("single-section"), e.length > 0))
                for (o = e[0].getElementsByTagName("li"), f = 0, l = o.length; f < l; f++) r = o[f], h = r.getAttribute("data-item-push"), h > 0 && (c = r.getAttribute("data-item-id"), u = r.getElementsByClassName("stk")[0], u.length > 0 && (s = u.value), !isNaN(s) && s > 0 && new b365.Ui.Betslip.StakeEntryRules(scope._bsController).PushBetDisplayUpdate(c, scope._bsInst.itemTypeSingle, u));
            new b365.Ui.Betslip.RepeatStakeVisibilitySetter(this._bsInst).set(n, i)
        }
    }
};
Type.registerNamespace("b365.Ui.Betslip");
b365.Ui.Betslip.CastStakeChangedHandler = function (n) {
    this._bsInst = n;
    this._isValid = function () {
        return typeof this._bsInst != "undefined"
    }
};
b365.Ui.Betslip.CastStakeChangedHandler.prototype = {
    handle: function (n, t, i) {
        var f, r, u, e;
        this._isValid() && (f = new b365.Ui.Formatter, r = this._bsInst.getBetItemById(t, n), i.value = $blib.isDecimal(i.value) ? f.roundValue(i.value) : "", r.setStItem("st", i.value), u = parseInt(r.getStItem("bc"), 10), !isNaN(u) && u > 1 && (e = new b365.Ui.Betslip.ItemInformation(i).itemElement, $(".totestkbc", e).text(f.roundDecimal(Number(i.value) * u)), r.setStItem("gst", i.value), r.setStItem("gust", i.value)), this._bsInst.updateState());
        new b365.Ui.Betslip.ToReturnCalculator(this._bsInst).calculate(n, t, i);
        new b365.Ui.Betslip.RepeatStakeVisibilitySetter(this._bsInst).set(n, i)
    }
};
Type.registerNamespace("b365.Ui.Betslip");
b365.Ui.Betslip.CastFlexiChangedHandler = function (n) {
    this._bsInst = n;
    this._isValid = function () {
        return typeof this._bsInst != "undefined"
    }
};
b365.Ui.Betslip.CastFlexiChangedHandler.prototype = {
    handle: function (n, t, i) {
        var l, f, h, u, r;
        if (this._isValid()) {
            if (l = new b365.Ui.Formatter, f = this._bsInst.getBetItemById(t, n), i.value = $blib.isDecimal(i.value) ? l.roundValue(i.value) : "", h = i.parentNode.parentNode.parentNode.getElementsByClassName("bs-FlexiUnitStake_TextBox")[0], u = parseInt(f.getStItem("bc"), 10), !isNaN(u) && u > 1) {
                var e, o = i.parentNode.parentNode.parentNode.getElementsByClassName("bs-FlexiUnitStake_TextBox")[0],
                    s = i.parentNode.parentNode.parentNode.getElementsByClassName("bs-FlexiPercentage_TextBox")[0],
                    c = i.parentNode.parentNode.parentNode.getElementsByClassName("bs-FlexiTotalStake_TextBox")[0];
                i.className.indexOf("UnitStake") > -1 ? (r = window.top.ns_betcalculationslib_calculations_cast.BetSlipFlexiCast.GetFlexiValuesFromUnitStake(o.value, u), c.value = r.totalStake, s.value = r.flexiPercentage) : i.className.indexOf("Percentage") > -1 ? (r = window.top.ns_betcalculationslib_calculations_cast.BetSlipFlexiCast.GetFlexiValuesFromPercentage(s.value, u), o.value = r.unitStake, s.value = r.flexiPercentage, c.value = r.totalStake) : (r = window.top.ns_betcalculationslib_calculations_cast.BetSlipFlexiCast.GetFlexiValuesFromTotalStake(c.value, u), o.value = r.unitStake, s.value = r.flexiPercentage);
                e = o;
                f.setStItem("st", e.value);
                f.setStItem("gst", e.value);
                f.setStItem("gust", e.value)
            }
            this._bsInst.updateState()
        }
        new b365.Ui.Betslip.ToReturnCalculator(this._bsInst).calculate(n, t, h);
        new b365.Ui.Betslip.RepeatStakeVisibilitySetter(this._bsInst).set(n, h)
    }
};
Type.registerNamespace("b365.Ui.Betslip");
b365.Ui.Betslip.IFBetStakeChangedHandler = function (n, t) {
    this._bsInst = n;
    this._bsController = t;
    this._isValid = function () {
        return typeof this._bsInst != "undefined"
    };
    this._setMaxStake = function (n, t) {
        if (t > 0) {
            var i = this._bsInst.getBetItemById(this._bsInst.itemTypeSingle, t - 1),
                r = i.getStItem("st") ? $blib.roundValue(i.getStItem("st")) : 0;
            if (Number(r) < Number(n)) return r
        }
        return n
    }
};
b365.Ui.Betslip.IFBetStakeChangedHandler.prototype = {
    handle: function (n, t) {
        var f, i, r, u, e;
        this._isValid() && (f = this._bsInst.getBetItemById(this._bsInst.itemTypeSingle, n), i = t.value, this._bsController && this._bsController._currencyDisplayHelper && i && i != "" && (i = this._bsController._currencyDisplayHelper.unformatCurrency(i)), $blib.isDecimal(i) == !1 && (t.value = "", i = ""), r = $blib.roundValue(i), u = this._setMaxStake(r, n), Number(u) < Number(r) && (t.value = this._bsController._currencyDisplayHelper ? this._bsController._currencyDisplayHelper.formatCurrency(u) : u, r = u), new b365.Ui.Betslip.ToReturnCalculator(this._bsInst).calculate(n, this._bsInst.itemTypeSingle, t), e = r ? $blib.pad2DP(r, this._bsController.getCurrencyObject().decimalSeparator) : r, f.setStItem("st", e), f.setStItem("ust", e), new b365.Ui.Betslip.SingleStakeChangedHandler(this._bsInst, this._bsController).updateAllStakes("", Number(n) + 1), this._bsInst.updateState())
    }
};
Type.registerNamespace("b365.Ui.Betslip");
b365.Ui.Betslip.ReverseIfBetStakeChangedHandler = function (n, t) {
    this._bsInst = n;
    this._bsController = t;
    this._isValid = function () {
        return typeof this._bsInst != "undefined"
    };
    this._setMaxStake = function (n, t) {
        if (t > 0) {
            var i = this._bsInst.getBetItemById(this._bsInst.itemTypeSingle, t - 1),
                r = i.getStItem("st") ? $blib.roundValue(i.getStItem("st")) : 0;
            return r < n ? r : n
        }
    }
};
b365.Ui.Betslip.ReverseIfBetStakeChangedHandler.prototype = {
    handle: function (n, t) {
        var i, u, r;
        if (this._isValid()) {
            for (i = t.value, this._bsController._currencyDisplayHelper && i && i != "" && (i = this._bsController._currencyDisplayHelper.unformatCurrency(i)), $blib.isDecimal(i) == !1 && (t.value = "", i = ""), u = this._bsInst.getBetItems(this._bsInst.itemTypeSingle), r = 0; r < u.length; r++) u[r].setStItem("st", i), u[r].setStItem("ust", i);
            this._bsInst.updateState()
        }
    }
};
Type.registerNamespace("b365.Ui.Betslip");
b365.Ui.Betslip.StakeChangedHandler = function (n, t) {
    this._bsInst = n;
    this._bsController = t;
    this._isValid = function () {
        return typeof this._bsInst != "undefined"
    }
};
b365.Ui.Betslip.StakeChangedHandler.prototype = {
    handle: function (n) {
        if (this._isValid()) {
            var i = new b365.Ui.Betslip.ItemInformation(n),
                t = i.itemIndexAndType(),
                o = i.itemElement(),
                r;
            if (i._parent[0].className.indexOf("suspended") > -1) return;
            var u = /(\d{0,8})?([.|,]{1}(\d{0,2}))?/,
                f = this._bsController.getCurrencyObject().decimalSeparator,
                e = f == "." ? "," : ".";
            (n.value != n.value.match(u)[0] || n.value.indexOf(e) > -1) && (n.value = n.value.match(u)[0].replace(e, f));
            switch (t[1]) {
                case "single":
                    new b365.Ui.Betslip.SingleStakeChangedHandler(this._bsInst, this._bsController).handle(t[0], t[1], n);
                    break;
                case "tote-single":
                case "tote-cast":
                case "tote-pot":
                    new b365.Ui.Betslip.ToteStakeChangedHandler(this._bsInst).handle(n);
                    break;
                case "cast":
                    n.className.indexOf("flexi") > -1 ? new b365.Ui.Betslip.CastFlexiChangedHandler(this._bsInst).handle(t[0], t[1], n) : new b365.Ui.Betslip.CastStakeChangedHandler(this._bsInst).handle(t[0], t[1], n);
                    break;
                case "multiple":
                    t[0] != "-1" ? new b365.Ui.Betslip.MultipleStakeChangedHandler(this._bsInst, this._bsController).handle(t[0], n) : new b365.Ui.Betslip.SingleStakeChangedHandler(this._bsInst, this._bsController).updateAllStakes(n.value, 0);
                    break;
                case "betbuilder":
                    new b365.Ui.Betslip.ToReturnCalculator(this._bsInst).calculate(t[0], this._bsInst.betTypeBetBuilder, n)
            }
            new b365.Ui.Betslip.TotalsCalculator(this._bsInst, this._bsController).calculate();
            this._bsInst.placebetBtnDisabledForSpanishStakeLimit && (r = $(".placeBet.abetslipBtn", "#bsDiv"), r && r.removeClass("disabled abetslipgreyBtn"), this._bsInst.placebetBtnDisabledForSpanishStakeLimit = !1)
        }
    }
};
Type.registerNamespace("b365.Ui.Betslip");
b365.Ui.Betslip.ToReturnCalculator = function (n) {
    this._bsInst = n;
    this._eachWayCookieKey = "ew";
    this._taxRates = $("#bsDiv>ul").attr("data-txr");
    this._taxCalculationMethod = $("#bsDiv>ul").attr("data-tcm");
    this._WinRateIndex = 3;
    this._ReturnRateIndex = 4;
    this._isValid = function () {
        return typeof this._bsInst != "undefined"
    }
};
b365.Ui.Betslip.ToReturnCalculator.prototype = {
    calculate: function (n, t, i, r, u) {
        var k, f, e, p, o, l, a, b;
        if (n >= 0) {
            if (k = new b365.Ui.Formatter, f = this._bsInst.getBetItems(t)[n], !f) return;
            var d = f.getStItem(this._eachWayCookieKey) == "1" ? !0 : !1,
                g = $blib.getMaxToWin(),
                s = $blib.getItemOdds(t, f),
                nt = s == "" || s == "0/0" || s == "0.0" || s == "0" || f.getStItem("sp") == "1",
                y = i ? i.value : r;
            if ($blib.isDecimal(y) == !0) {
                e = $blib.to2DP(y);
                p = $blib.to2DP(u || "");
                Number(e) > $blib.getMaxStake() && (e = String($blib.getMaxStake()));
                f.setStItem("st", e);
                f.setStItem("ust", e);
                f.setStItem("fb", p);
                o = new b365.Ui.Betslip.TaxCalculator(this._bsInst);
                o._isFreeBet = f.getStItem("ft");
                var w = f.getStItem("to"),
                    h = o.calcReturnsByLine(Number(e), s, w),
                    v, c = f.getCnItem("po");
                c && c.length ? v = !0 : f.getStItem("ew") == "1" && (l = $('li[data-item-id="' + n + '"]').find(".placedivider"), l && l.length && (a = Number(l[0].getAttribute("data-place-divider")), a && a > 0 && (c = window.top.ns_betcalculationslib_util.OddsFormatter.GetFractionalPlaceOdds(s, a), v = !0)));
                v && (b = o.calcReturnsByLine(Number(e), c, w), h = (Number(h) + Number(b)).toString());
                o.isMaxLiabilityExceeded(h) && (h = o.getMaxReturn() + (o.isGermanTaxApplied() ? 0 : Number(e)));
                f.setStItem("tr", h)
            } else i && (i.value = ""), f.setStItem("st", ""), f.setStItem("tr", "");
            this._bsInst.updateState()
        }
    }
};
Type.registerNamespace("b365.Ui.Betslip");
b365.Ui.Betslip.stakeLimitChangedHandler = function (n) {
    this._bsInst = n;
    this._isValid = function () {
        return typeof this._bsInst != "undefined"
    }
};
b365.Ui.Betslip.stakeLimitChangedHandler.prototype = {
    addStakeLimit: function (n, t, i) {
        if (n >= 0) {
            var r = this._bsInst.getBetItems(t)[n];
            i && $blib.isDecimal(i) === !0 ? r.setStItem("sl", $blib.to2DP(i)) : r.setStItem("sl", "");
            this._bsInst.updateState()
        }
    }
};
Type.registerNamespace("b365.Ui.Betslip");
b365.Ui.Betslip.ToolTipHtmlBuilder = function (n) {
    this._ele = n;
    this._isValid = function () {
        return typeof this._ele != "undefined"
    }
};
b365.Ui.Betslip.ToolTipHtmlBuilder.prototype = {
    getHtml: function () {
        var t = "",
            i = $(this._ele).parents("[data-tooltip]:first"),
            n, r, u;
        if (i.length == 1)
            if (i = $(i[0]), n = i.attr("data-tooltip").split("|"), $(this._ele).hasClass("ausHelp")) t = (new b365.Ui.Betslip.AusToteToolTipHtmlBuilder).getHtml(n[0]);
            else {
                r = i.parents("[data-item-id]:first");
                u = r.attr("data-item-type");
                switch (u) {
                    case "single":
                        t = (new b365.Ui.Betslip.SingleToolTipHtmlBuilder).getHtml(r, n);
                        break;
                    case "tote-single":
                        t = (new b365.Ui.Betslip.ToteSingleToolTipHtmlBuilder).getHtml(n);
                        break;
                    case "tote-cast":
                        t = (new b365.Ui.Betslip.ToteCastToolTipHtmlBuilder).getHtml(this._ele, n);
                        break;
                    case "tote-pot":
                        t = (new b365.Ui.Betslip.TotePotToolTipHtmlBuilder).getHtml(n);
                        break;
                    case "cast":
                        t = $(this._ele).parents().hasClass("toteLeg") ? (new b365.Ui.Betslip.TotePotToolTipHtmlBuilder).getHtml(n) : (new b365.Ui.Betslip.CastToolTipHtmlBuilder).getHtml(r, n)
                }
            } return t
    }
};
Type.registerNamespace("b365.Ui.Betslip");
b365.Ui.Betslip.StakeToolTipHtmlBuilder = function (n) {
    this._ele = n;
    this._isValid = function () {
        return typeof this._ele != "undefined"
    }
};
b365.Ui.Betslip.StakeToolTipHtmlBuilder.prototype = {
    getStakeHtml: function (n, t) {
        var r = "",
            i = $(this._ele).parents("[data-tooltip]:first"),
            t;
        return i.length == 1 && (i = $(i[0]), t = i.attr("data-tooltip"), r = "<label class='ttHead'>" + t + "<\/label><br />"), r
    }
};
Type.registerNamespace("b365.Ui.Betslip");
b365.Ui.Betslip.PlaceBetClickHandler = function (n, t) {
    this._bsInst = n;
    this._bsController = t;
    this._isValid = function () {
        return typeof this._bsInst != "undefined"
    }
};
b365.Ui.Betslip.PlaceBetClickHandler.prototype = {
    handle: function (n) {
        var o, s, t, f, h, r, e, u, i;
        if (this._isValid() && (o = new b365.Ui.Betslip.Validation.PlaceBetValidator(this._bsInst, this._bsController), $ele = $(n), window.device && window.device.isWindowsPhone && this._bsController._stakeEntryHander && (this._bsController._stakeEntryHander._disableAnimation = !0, this._bsController._stakeEntryHander.hide(), this._bsController._stakeEntryHander._disableAnimation = !1), !($ele.hasClass("disabled") || $ele.hasClass("failed-min-odds"))))
            if (r = $ele.attr("data-atype"), r == "cnf") typeof window.MyBetsController != "undefined" && window.MyBetsController.isInitialised() && window.MyBetsController.disableButtonEvents(), this.updateStakes(), this._bsInst.confirmBets();
            else if (r == "cnf-ref") typeof window.MyBetsController != "undefined" && window.MyBetsController.isInitialised() && window.MyBetsController.disableButtonEvents(), this.updateStakes(), this._bsInst.referBets();
        else if (r == "clr") this._bsInst.refresh();
        else {
            if (typeof window.MyBetsController != "undefined" && window.MyBetsController.isInitialised() && window.MyBetsController.disableButtonEvents(), this.updateStakes(), h = $ele.hasClass("placeCTCBet"), e = [], h) {
                for (u = this._bsInst.getBetItems("single"), i = 0; i < u.length; i++) u[i].getStItem("pom") == "Y" && e.push(i);
                if (e.length == u.length) return
            }
            f = o.validate();
            n.length > 0 && (t = $(n[0].parentNode).find("#buttonContent"), t.length == 0 && (t = n.find("button"), t.length > 0 && (s = t[0].innerHTML, t = document.createElement("div"), t.setAttribute("id", "buttonContent"), t.setAttribute("style", "display:none;"), t.innerHTML = s, n[0].parentNode.appendChild(t), t = null)), f && (n[0].innerHTML = '<button><span class="buttonSpinner"><\/span><\/button>'));
            f && (this._bsController.getPushMarketsEnabled() && this._bsInst.backupPushBetPreSplitBSCookieValue(this._bsInst._betSlipCookieKey), this._bsInst.placeBets())
        }
    },
    updateStakes: function () {
        var t = $(".betslipWrapper input.stk"),
            n, r, i, u;
        if (this._bsInst.getSlipType() != this._bsInst.slipIF && t.length > 0)
            for (n = 0, r = t.length; n < r; n++) t[n].id != "mltsngstk" && t[n].tagName == "INPUT" && (t[n].type == "text" || t[n].type == "number" || t[n].type == "tel") && (i = t[n].value ? $blib.pad2DP(t[n].value, this._bsController.getCurrencyObject().decimalSeparator) : t[n].value, i = i.replace(",", "."), i = i.replace("..", "."), i && (u = new b365.Ui.Formatter, $blib.isDecimal(i) && (t[n].value = u.roundValue(i))), new b365.Ui.Betslip.StakeChangedHandler(this._bsInst, this._bsController).handle(t[n]))
    }
};
Type.registerNamespace("b365.Ui.Betslip.Validation");
b365.Ui.Betslip.Validation.PlaceBetValidator = function (n, t) {
    this._bsInst = n;
    this._bsController = t;
    this._noStakeCssClass = "errStk";
    this._isValid = function () {
        return typeof this._bsInst != "undefined"
    };
    this._defaultValidator = function (n) {
        var r = "",
            s = this,
            t = $("#bsDiv"),
            f, o, e, i = 0,
            u;
        return n = n ? n : $(".placeCTCBet", t).length > 0, this._bsController._delegates.isAuthenticated() ? n ? this._bsController.betCallEnabled() || (r = "INTERNAL MESSAGE: CTC DISABLED") : (u = $(".footer #totalStake", t), u.length == 0 && (u = $(".footer .totalStake", t)), u.length > 0 && (i = $(u[0]).text()), this._bsController && this._bsController._currencyDisplayHelper && (i = this._bsController._currencyDisplayHelper.unformatCurrency(i)), i = Number(i), isNaN(i) || i == 0 ? (this._bsController._noStakeCount = this._bsController._noStakeCount + 1, f = $('li[class$="multiple-section multipleBets"]'), f.length > 0 ? (o = $("ul:first-child", f), e = o.hasClass("open") ? $('input[class*="stk"]', t) : $('input[class*="stk"][id!="mltsngstk"]').filter('[data-inp-type!="mltstk"],[class*="mltdftstk"]', t)) : e = $('input[class*="stk"]', t), this._bsController._enhancedBetSlipAnimations.shakeStakeFields(e, t, null, [], null), this._bsController._noStakeCount > 3 ? (r = betSlipML.pleaseenterstake, $("input:text[data-inp-type]", t).each(function () {
            var n = new b365.Ui.Betslip.ItemInformation($(this)).itemElement();
            n.addClass(s._noStakeCssClass)
        })) : r = "INTERNAL MESSAGE: NO STAKE") : this._bsController._noStakeCount = 0) : (r = "INTERNAL MESSAGE: NOT LOGGED IN", this._bsController._noStakeCount = 0), r
    }
};
b365.Ui.Betslip.Validation.PlaceBetValidator.prototype = {
    validate: function (n) {
        var t = this._defaultValidator(n);
        if (t == "") switch (this._bsInst.getSlipType()) {
            case this._bsInst.slipIF:
                t = new b365.Ui.Betslip.Validation.IfPlaceBetValidator(this._bsInst).validate();
                break;
            case this._bsInst.slipUSTote:
                t = new b365.Ui.Betslip.Validation.UsTotePlaceBetValidator(this._bsInst).validate();
                break;
            case this._bsInst.slipUKTote:
                t = new b365.Ui.Betslip.Validation.UkTotePlaceBetValidator(this._bsInst).validate();
                break;
            case this._bsInst.slipETote:
                t = new b365.Ui.Betslip.Validation.ETotePlaceBetValidator(this._bsInst).validate()
        }
        if (window.pushedConfig.getIsPSQFV4Enabled() || t != "INTERNAL MESSAGE: NOT VALIDATED" && t != "" || window.location.host.split(".").pop() != "it" || (t = new b365.Ui.Betslip.Validation.ItalyBetValidator(this._bsInst).validate()), t != "") {
            this.resetStakes();
            switch (t) {
                case "INTERNAL MESSAGE: NOT VALIDATED":
                case "INTERNAL MESSAGE: NO STAKE":
                    break;
                case "INTERNAL MESSAGE: CTC DISABLED":
                    new b365.Ui.Betslip.MessageDisplayHandler(this._bsInst, this._bsController).showMsg(betSlipML.callUnsuccessful);
                    break;
                case "INTERNAL MESSAGE: NOT LOGGED IN":
                    this._bsController.clientLoginDelegate();
                    break;
                default:
                    new b365.Ui.Betslip.MessageDisplayHandler(this._bsInst, this._bsController).showMsg(t);
                    this._bsInst.changeBetslipHeight()
            }
        }
        return t == ""
    },
    resetStakes: function () {
        var f = document.getElementById("bsDiv"),
            t = f.getElementsByClassName("stk"),
            i, r, n, u;
        if (this._bsController && this._bsController._currencyDisplayHelper && t.length > 0)
            for (n = 0, u = t.length; n < u; n++) i = t[n].value, i.toString().indexOf(".") > -1 && (r = i.toString().split("."), t[n].value = r[1] == "00" ? r[0] : this._bsController._currencyDisplayHelper.formatCurrency(i))
    }
};
Type.registerNamespace("b365.Ui.Betslip.Validation");
b365.Ui.Betslip.Validation.ETotePlaceBetValidator = function (n) {
    this._bsInst = n;
    this._isValid = function () {
        return typeof this._bsInst != "undefined"
    }
};
b365.Ui.Betslip.Validation.ETotePlaceBetValidator.prototype = {
    validate: function () {
        var f = "",
            n, i, s, r;
        if (this._isValid()) {
            var t = !0,
                e = this._bsInst._betItems,
                u = e.length - 1,
                o = betSlipML.etoteinvalidstake;
            for (n = u; n > -1 && t; n--) i = e[n].getStItem("gst"), isNaN(i) || i == "" || (t = Number(i) > 0 ? /^([1]\d+|[1-9]\d*)(\.[0-9]{1,2}?)?$/.test(i) : !1);
            if (t) {
                for (u = this._bsInst._betCastItems.length - 1, s = this._bsInst._betCastItems, n = u; n > -1 && t; n--) r = Number(s[n].getStItem("gst")), !isNaN(r) && Number(r) > 0 && (t = /^([1]\d+|[1-9]\d*)(\.[0-9]{1,2}?)?$/.test(r));
                t || (o = betSlipML.exactainvalidstake)
            }
            t || (f = o)
        }
        return f
    }
};
Type.registerNamespace("b365.Ui.Betslip.Validation");
b365.Ui.Betslip.Validation.IfPlaceBetValidator = function (n) {
    this._bsInst = n;
    this._isValid = function () {
        return typeof this._bsInst != "undefined"
    }
};
b365.Ui.Betslip.Validation.IfPlaceBetValidator.prototype = {
    validate: function () {
        var i = "",
            t, n, r;
        if (this._isValid())
            if (t = this._bsInst.getBetItems(this._bsInst.itemTypeSingle), t.length < 2) i = betSlipML.ifbetminselections;
            else
                for (n = 1; n < t.length; n++) r = t[n].getStItem("st"), (isNaN(r) || Number(r) == 0) && (i = betSlipML.pleaseenterstakeorrisk, $('#bsDiv li[data-item-id="' + n + '"] input:text[data-inp-type]').addClass(this._noStakeCssClass));
        return i
    }
};
Type.registerNamespace("b365.Ui.Betslip.Validation");
b365.Ui.Betslip.Validation.UkTotePlaceBetValidator = function (n) {
    this._bsInst = n;
    this._isValid = function () {
        return typeof this._bsInst != "undefined"
    }
};
b365.Ui.Betslip.Validation.UkTotePlaceBetValidator.prototype = {
    validate: function () {
        var t = "",
            i, e, o, l, s, r, u, f;
        if (this._isValid()) {
            var n = !0,
                c = this._bsInst._betItems,
                h = c.length - 1;
            for (i = h; i > -1 && n; i--) e = c[i].getStItem("gst"), isNaN(e) || e == "" || (o = Number(e), o >= 2 ? (l = (o - Math.floor(o)).toFixed(2) * 100, l % 10 != 0 && (n = !1)) : n = !1);
            if (n) {
                for (h = this._bsInst._betCastItems.length - 1, s = this._bsInst._betCastItems, i = h; i > -1 && n; i--)
                    if (r = Number(s[i].getStItem("gst")), !isNaN(r) && Number(r) > 0) {
                        u = Number(s[i].getStItem("bc"));
                        u = isNaN(u) ? 1 : u;
                        f = $blib.roundDecimal(String(r * u));
                        switch (s[i].getCnItem("cm")) {
                            case "6":
                                n = /^2(\.00?)?$/.test(r);
                                t = n ? t : betSlipML.toteperunitstake;
                                break;
                            case "7":
                                n = /^[0-9]\d*(\.(([1-9]{1}0?)|00))?$/.test(r);
                                n && (n = /^([1]\d+|[2-9])\d*(\.[0-9]{1}0?)?$/.test(f));
                                t = n ? t : betSlipML.totesuper7perunitstake;
                                break;
                            case "U":
                            case "P":
                                n = /^[0-9]\d*(\.[0-9]{1}0?)?$/.test($blib.roundDecimal(String(r))) && /^[1-9]\d*(\.[0-9]{1}0?)?$/.test(f);
                                t = n ? t : betSlipML.toteinvalidstake;
                                break;
                            case "J":
                                n = /^[1-9]\d*(\.[05]{1}0?)?$/.test(f);
                                t = n ? t : betSlipML.totejackpotinvalidstake;
                                break;
                            default:
                                n = /^[0-9]\d*(\.(([1-9]{1}0?)|00))?$/.test(r);
                                n && (n = /^([1]\d+|[2-9])\d*(\.[0-9]{1}0?)?$/.test(f));
                                t = n ? t : betSlipML.minstaketote
                        }
                    }
            } else t = betSlipML.minstaketote
        }
        return t
    }
};
Type.registerNamespace("b365.Ui.Betslip.Validation");
b365.Ui.Betslip.Validation.UsTotePlaceBetValidator = function (n) {
    this._bsInst = n;
    this._isValid = function () {
        return typeof this._bsInst != "undefined"
    }
};
b365.Ui.Betslip.Validation.UsTotePlaceBetValidator.prototype = {
    validate: function () {
        var r = "",
            n, u, o, e;
        if (this._isValid()) {
            var t = !0,
                i = this._bsInst._betItems,
                f = i.length - 1;
            for (n = f; n > -1 && t; n--) u = i[n].getStItem("gst"), isNaN(u) || u == "" || (t = this.checkstake(u));
            if (t)
                for (i = this._bsInst._betCastItems, f = i.length - 1, n = f; n > -1 && t; n--) o = i[n], e = i[n].getStItem("gust"), isNaN(e) || (t = this.checkstake(e), r = t ? "" : r = betSlipML.ustotecastsinvalid);
            else r = betSlipML.ustotesinglesinvalid
        }
        return r
    },
    checkstake: function (n) {
        var t = parseFloat(n);
        return t < 2 ? !1 : t % parseInt(n) == 0
    }
};
Type.registerNamespace("b365.Ui.Betslip.Validation");
b365.Ui.Betslip.Validation.ItalyBetValidator = function (n) {
    this._bsInst = n;
    this._isValid = function () {
        return typeof this._bsInst != "undefined"
    };
    this._createExoticValidationPropsKey = function (n, t) {
        return typeof n == "undefined" || typeof t == "undefined" ? null : n + t
    };
    this._exoticValidationProps = {
        I0: {
            minUnitStake: 1,
            minTotalStake: 2
        },
        I1: {
            minUnitStake: 1,
            minTotalStake: 2
        },
        I2: {
            minUnitStake: 1,
            minTotalStake: 2
        },
        I3: {
            hasProtocolLookup: !0,
            "89": {
                minUnitStake: 1,
                minTotalStake: 2
            },
            "90": {
                minUnitStake: .5,
                minTotalStake: 1
            }
        },
        I4: {
            minUnitStake: .25,
            minTotalStake: .5
        },
        I5: {
            minUnitStake: .25,
            minTotalStake: .5
        }
    }
};
b365.Ui.Betslip.Validation.ItalyBetValidator.prototype = {
    validate: function () {
        var s = "",
            i, n, v, it, c, h, rt, t, f, y, l, ut, ft, p, w, d, g, et, a, nt, e = !1,
            b = !1,
            r, k = !1,
            o, ot, st = null,
            u = null,
            ht = !1,
            tt = 0;
        if (this._isValid()) {
            for (l = /^([1]\d+|[2-9]\d*)(\.00?)?$/, ft = /^(\d+?)(\.(25|50?|75|00?))?$/, ut = /^(\d+?)(\.(50?|00?))?$/, p = /^(\d+?)(\.(05?|10?|15|20?|25|30?|35|40?|45|50?|55|60?|65|70?|75|80?|85|90?|95|00?))?$/, i = !0, v = this._bsInst._betItems, it = v.length - 1, d = this._bsInst.getSlipType() == this._bsInst.slipBanker, t = it; t > -1 && i; t--) {
                n = v[t].getStItem("st");
                e = !1;
                b = !1;
                k = !1;
                ot = v[t].getStItem("_tp");
                switch (ot) {
                    case "v":
                        e = !0;
                        break;
                    case "f":
                        b = !0;
                        break;
                    case "t":
                        k = !0
                }
                if (typeof n != "undefined" && n != "" && (n = n.replace(",", "."), n = n.replace("..", "."), e ? (r = 1, c = ut) : b ? (r = 3, c = l) : k ? (r = 2, c = l) : window.pushedConfig.getIsPSQFV4Enabled() ? (r = 1, c = p) : (r = 2, c = l), !isNaN(n) && n != "" && n != "0" && n != "0.00"))
                    if (Number(n) >= r) i = c.test(Number(n));
                    else {
                        i = !1;
                        break
                    }
            }
            for (g = this._bsInst._betCastItems, et = g.length - 1, t = et; t > -1 && i; t--)
                if ((o = g[t], n = o.getStItem("st"), e = o.getStItem("_tp") === "v", e || (u = this._exoticValidationProps[this._createExoticValidationPropsKey(o.getCnItem("spt"), o.getCnItem("cm"))]), u && u.hasProtocolLookup && (st = o.getCnItem("pr") ? o.getCnItem("pr") : null, u = u[st] || {
                        minUnitStake: 0,
                        minTotalStake: 0
                    }), typeof n != "undefined" && n != "") && (n = n.replace(",", "."), n = n.replace("..", "."), f = Number(o.getCnItem("bc") || o.getStItem("bc") || "1"), f > 0 && !d && e ? (a = Number(String(n * f)), nt = ft) : u ? a = n * f : (a = Number(n), nt = l), !isNaN(n) && n != "" && n != "0" && n != "0.00")) {
                    if (u) {
                        if (tt = Math.max(u.minTotalStake, u.minUnitStake * f), i = n % u.minUnitStake == 0 && a >= tt, i) continue;
                        ht = !0;
                        break
                    }
                    if (Number(n) >= .25 && Number(a) >= 1) i = nt.test(Number(n));
                    else {
                        i = !1;
                        break
                    }
                } for (h = this._bsInst._betMltItems, rt = h.length - 1, t = rt; t > -1 && i; t--)
                if ((n = h[t].getStItem("st"), typeof n != "undefined" && n != "") && (n = n.replace(",", "."), n = n.replace("..", "."), f = Number(h[t].getCnItem("bc") ? h[t].getCnItem("bc") : h[t].getStItem("bc") ? h[t].getStItem("bc") : "1"), f > 1 || f > 0 && !d && e ? (y = Number(String(n * f)), w = p, r = 1) : (y = Number(n), window.pushedConfig.getIsPSQFV4Enabled() ? (r = 1, w = p) : (r = 2, w = l)), !isNaN(n) && n != "" && n != "0" && n != "0.00"))
                    if (Number(n) >= .05 && (Number(y) >= r || e && Number(y) >= r)) i = w.test(Number(n));
                    else {
                        i = !1;
                        break
                    } i || (k ? s = betSlipML.minstakeitalyracingpools : b ? s = betSlipML.minstakeitalyracing : e ? s = betSlipML.minstakeitalyvirtuals : ht ? (s = betSlipML.minstakeitalyracingexotics.replace("{0}", String(tt).replace(".", ",")), s = s.replace("{1}", String(u.minUnitStake).replace(".", ","))) : s = window.pushedConfig.getIsPSQFV4Enabled() ? betSlipML.minstakeitalyv4 : betSlipML.minstakeitaly)
        }
        return s
    }
};
Type.registerNamespace("b365.Ui.Betslip");
b365.Ui.Betslip.MessageDisplayHandler = function (n, t) {
    this._bsInst = n;
    this._bsController = t;
    this._isValid = function () {
        return typeof this._bsInst != "undefined"
    }
};
b365.Ui.Betslip.MessageDisplayHandler.prototype = {
    showMsg: function (n, t) {
        var r, i, u = this,
            f = u._bsController.prefixStyle("transition"),
            e = document.getElementById("betslipContent");
        if (this._isValid()) {
            if (typeof t == "undefined" && (t = "alert"), r = $(".bsError"), i = r[0], r.removeClass("error").addClass(t), n === betSlipML.pleasecheckmembers ? ($("#bsDiv ul").addClass("timeout"), this._bsInst.clearBets(!1), this._bsInst.betSlipItemsChanged(), r.html('<div class="content timeout"><div class="text">' + n + "<\/div><\/div>"), $("a.acceptChanges", this._bsWrapper).addClass("hidden"), $("a.placeBet", this._bsWrapper).addClass("hidden"), $("a.gotomybets", this._bsWrapper).removeClass("hidden")) : r.html('<div class="content"><div class="text">' + n + "<\/div><\/div>"), r.hasClass("hidden")) {
                r.removeClass("hidden");
                var o = i.getBoundingClientRect(),
                    s = o.height,
                    h = u._bsController.getScrollHeight();
                i.style["max-height"] = "0px";
                i.style[f] = "max-height .2s";
                e.style[f] = "max-height .2s";
                setTimeout(function () {
                    i.style["max-height"] = s + "px";
                    sProps.instantBet || (e.style["max-height"] = h + "px");
                    u.postTransition = function () {
                        i.removeEventListener(window.top.TRANSITION_END, u.postTransition);
                        i.style["max-height"] = "";
                        i.style[f] = "";
                        e.style[f] = "";
                        $(document).trigger("bsInfoMessage", n)
                    };
                    i.addEventListener(window.top.TRANSITION_END, u.postTransition)
                }, 0)
            }
            this._bsInst.contentChangedOnClient()
        }
    },
    hideMsg: function () {
        var i;
        if (this._isValid()) {
            if (i = $(".bsError"), i.hasClass("hidden")) return;
            var n = i[0],
                t = this,
                o = n.getBoundingClientRect(),
                f = o.height,
                r = t._bsController.prefixStyle("transition"),
                u = document.getElementById("betslipContent"),
                e = t._bsController.getScrollHeight();
            e += f;
            n.style["max-height"] = f + "px";
            u.style[r] = "max-height .2s";
            n.style[r] = "max-height .2s";
            setTimeout(function () {
                sProps.instantBet || (u.style["max-height"] = e + "px");
                n.style["max-height"] = "0px";
                t.postTransition = function () {
                    n.removeEventListener(window.top.TRANSITION_END, t.postTransition);
                    t._bsController.setScrollHeight();
                    n.style["max-height"] = "";
                    n.style[r] = "";
                    u.style[r] = "";
                    i.addClass("hidden").removeClass("alert")
                };
                n.addEventListener(window.top.TRANSITION_END, t.postTransition);
                t._bsInst.contentChangedOnClient()
            }, 0)
        }
    }
};
Type.registerNamespace("b365.Ui.Betslip");
b365.Ui.Betslip.PlaceBetRequestDespatcher = function (n, t) {
    this._bsInst = n;
    this._bsController = t;
    this._isValid = function () {
        return typeof this._bsInst != "undefined"
    }
};
b365.Ui.Betslip.PlaceBetRequestDespatcher.prototype = {
    despatch: function () {
        this._isValid() && new b365.Ui.Betslip.Validation.PlaceBetValidator(this._bsInst, this._bsController).validate() && this._bsInst.req(this._bsInst.reqTypePlaceBet, "", "", this._bsController, "getMultipleOdds")
    }
};
Type.registerNamespace("b365.Ui.Betslip");
b365.Ui.Betslip.ReferBetRequestDespatcher = function (n, t) {
    this._bsInst = n;
    this._bsController = t;
    this._isValid = function () {
        return typeof this._bsInst != "undefined"
    }
};
b365.Ui.Betslip.ReferBetRequestDespatcher.prototype = {
    despatch: function () {
        if (this._isValid() && new b365.Ui.Betslip.Validation.PlaceBetValidator(this._bsInst, this._bsController).validate()) {
            var t = "",
                n = document.getElementById("referralContainer");
            n || (n = document.getElementById("refCode"));
            n && (t = "refCode=" + n.getAttribute("data-refCode") + "&reftime=" + n.getAttribute("data-refTime"));
            this._bsInst.postPayload = t;
            this._bsInst.req(this._bsInst.reqTypeReferBet);
            this._bsInst.postPayload = ""
        }
    }
};
Type.registerNamespace("b365.Ui.Betslip");
b365.Ui.Betslip.MaxBetReqCompleteHandler = function (n, t) {
    this._bsInst = n;
    this._bsController = t;
    this._serverErrorReqType = 99;
    this._isValid = function () {
        return typeof this._bsInst != "undefined"
    }
};
b365.Ui.Betslip.MaxBetReqCompleteHandler.prototype = {
    handle: function (n) {
        var r;
        if (this._isValid()) {
            var u = n[0],
                i = n[1][7][1].split("=")[1].split("-"),
                t = u.split("|");
            if (t[1] != "" && t[0] != "E" && new b365.Ui.Betslip.MessageDisplayHandler(this._bsInst, this._bsController).showMsg(t[1]), t[0] != "E" && t[0] != "L") {
                r = $blib.pad2DP(t[0]);
                switch (i[0]) {
                    case "M":
                        new b365.Ui.Betslip.MultiplesMaxBetReqCompleteHandler(this._bsInst).handle(i[1], r);
                        break;
                    case "N":
                        $("#mltsngstk").val("");
                        new b365.Ui.Betslip.SinglesMaxBetReqCompleteHandler(this._bsInst).handle(i[1], r);
                        break;
                    case "C":
                        new b365.Ui.Betslip.CastMaxBetReqCompleteHandler(this._bsInst).handle(i[1], r);
                        break;
                    case "B":
                        new b365.Ui.Betslip.BetBuilderMaxBetReqCompleteHandler(this._bsInst, this._bsController).handle(i[1], r)
                }
            } else t[0] == "E" && new b365.Ui.Betslip.MessageDisplayHandler(this._bsInst, this._bsController).showMsg(betSlipML.pleaselogin);
            new b365.Ui.Betslip.TotalsCalculator(this._bsInst, this._bsController).calculate()
        }
    }
};
Type.registerNamespace("b365.Ui.Betslip");
b365.Ui.Betslip.MultiplesMaxBetReqCompleteHandler = function (n) {
    this._bsInst = n;
    this._serverErrorReqType = 99;
    this._isValid = function () {
        return typeof this._bsInst != "undefined"
    }
};
b365.Ui.Betslip.MultiplesMaxBetReqCompleteHandler.prototype = {
    handle: function (n, t) {
        if (this._isValid()) {
            var i = $("li[data-item-type='multiple'][data-item-id='" + n + "'] input[data-inp-type='mltstk']");
            i.length > 0 && (i[0].value = t, this._bsInst.getBetItemById(this._bsInst.itemTypeMultiple, n).setStItem("st", t), this._bsInst.updateState())
        }
    }
};
Type.registerNamespace("b365.Ui.Betslip");
b365.Ui.Betslip.SinglesMaxBetReqCompleteHandler = function (n) {
    this._bsInst = n;
    this._isValid = function () {
        return typeof this._bsInst != "undefined"
    }
};
b365.Ui.Betslip.SinglesMaxBetReqCompleteHandler.prototype = {
    handle: function (n, t) {
        if (this._isValid()) {
            var i = $("li[data-item-type='single'][data-item-id='" + n + "'] input[data-inp-type='sngstk']");
            i.length > 0 && (i[0].value = t, this._bsInst.getBetItemById(this._bsInst.itemTypeSingle, n).setStItem("st", t), new b365.Ui.Betslip.StakeChangedHandler(this._bsInst).handle(i[0]), this._bsInst.updateState())
        }
    }
};
Type.registerNamespace("b365.Ui.Betslip");
b365.Ui.Betslip.CastMaxBetReqCompleteHandler = function (n) {
    this._bsInst = n;
    this._serverErrorReqType = 99;
    this._isValid = function () {
        return typeof this._bsInst != "undefined"
    }
};
b365.Ui.Betslip.CastMaxBetReqCompleteHandler.prototype = {
    handle: function (n, t) {
        if (this._isValid()) {
            var i = $("li[data-item-type='cast'][data-item-id='" + n + "'] input[data-inp-type='cststk']");
            i.length > 0 && (i[0].value = t, this._bsInst.getBetItemById(this._bsInst.itemTypeCast, n).setStItem("st", t), this._bsInst.updateState())
        }
    }
};
Type.registerNamespace("b365.Ui.Betslip");
b365.Ui.Betslip.InstanceEventAttacher = function (n, t) {
    this._bsInst = n;
    this._controller = t;
    this._betSlipResponsiveClickHandler = null;
    this._betSlipClickHandler = new b365.Ui.Betslip.BetslipClickHandler(this._bsInst, this._controller);
    this._isValid = function () {
        return typeof this._bsInst != "undefined" && typeof this._controller != "undefined"
    }
};
b365.Ui.Betslip.InstanceEventAttacher.prototype = {
    attach: function () {
        if (this._isValid()) {
            var n = this,
                t = $("#bsDiv");
            t.change(function (t) {
                new b365.Ui.Betslip.BetslipChangeHandler(n._bsInst, n._controller).handle(t)
            });
            n._betSlipResponsiveClickHandler === null && (n._betSlipResponsiveClickHandler = new b365.Ui.Betslip.ResponsiveClickHandler(t[0], $.proxy(n._betSlipClickHandler.handle, n._betSlipClickHandler), !1));
            this._bsInst.addOnHandleInProg(function (t, i) {
                new b365.Ui.Betslip.InProgressDisplayHandler(t, n._controller).handle(i)
            });
            this._bsInst.addOnPBetError(function (t) {
                new b365.Ui.Betslip.PlaceBetErrorHandler(t, n._controller).handle()
            });
            this._bsInst.addOnAddBet(function (t, i) {
                new b365.Ui.Betslip.AddBetHandler(t, n._controller).handle(i)
            });
            this._bsInst.addOnPlaceBet(function (t, i) {
                new b365.Ui.Betslip.PlaceBetRequestDespatcher(t, n._controller).despatch(i)
            });
            this._bsInst.addOnLock(function (t, i) {
                new b365.Ui.Betslip.LockUnlockHandler(t, n._controller).handle(i)
            });
            this._bsInst.addOnReqComplete(function (t, i) {
                new b365.Ui.Betslip.ReqCompleteHandler(t, n._controller).handle(i, n._controller)
            });
            this._bsInst.addOnConfirmBet(function (t) {
                new b365.Ui.Betslip.ConfirmBetRequestDespatcher(t, n._controller).despatch()
            });
            this._bsInst.addOnContentLoaded(function (t, i) {
                n._controller.OnBetslipContentLoaded(i)
            });
            this._bsInst.addOnUpdateState(function (n, t) {
                new b365.Ui.Betslip.UpdateStateHandler(n).handle(t)
            });
            this._bsInst.addOnRestoreState(function (n, t) {
                new b365.Ui.Betslip.RestoreStateHandler(n).handle(t)
            });
            $("#bsDlg").on("click", function (t) {
                new b365.Ui.Betslip.DialogClickHandler(n._bsInst, n._controller).handle(t)
            });
            $("#bsCD").on("click", function (t) {
                new b365.Ui.Betslip.ConfirmationDialog(n._bsInst, n._controller).handleClick(t)
            });
            this._bsInst.addOnPoll(function (t, i) {
                new b365.Ui.Betslip.PollBetRequestDespatcher(t, n._controller).despatch(i)
            });
            this._bsInst.addOnPollExpired(function (t, i) {
                new b365.Ui.Betslip.PollingExpiredHandler(t, n._controller).handle(i)
            });
            this._bsInst.addOnReferBet(function (t, i) {
                new b365.Ui.Betslip.ReferBetRequestDespatcher(t, n._controller).despatch(i)
            });
            $("#BetSlipForm").submit(function (t) {
                var i = t.keyCode ? t.keyCode : t.charCode;
                i == 13 ? (t.preventDefault(), t.stopPropagation(), n._controller.placeBet()) : (t.preventDefault(), t.stopPropagation(), t.returnValue = !1)
            })
        }
    },
    addOnBetAdded: function (n) {
        this._bsInst.addOnBetAdded(function (t, i) {
            n(t, i)
        })
    },
    addOnBetAddedReqComplete: function (n) {
        this._bsInst.addOnBetAddedReqComplete(function (t) {
            n(t)
        })
    },
    addOnEditBet: function (n) {
        this._bsInst.addOnEditBet(function (t) {
            n(t)
        })
    },
    addOnRefreshReqComplete: function (n) {
        this._bsInst.addOnRefreshReqComplete(function (t) {
            n(t)
        })
    },
    addOnBetSlipItemsChanged: function (n) {
        this._bsInst.addOnBetSlipItemsChanged(function (t) {
            n(t)
        })
    },
    addOnAcceptChanges: function (n) {
        this._bsInst.addOnAcceptChanges(function (t) {
            n(t)
        })
    },
    addOnBetSlipLoaded: function (n) {
        this._bsInst.addOnBetSlipLoaded(function (t) {
            n(t)
        })
    },
    addOnMaxSelections: function (n) {
        this._bsInst.addOnMaxSelections(function (t) {
            n(t)
        })
    },
    addOnBetslipDisplayed: function (n) {
        this._bsInst.addOnBetslipDisplayed(function (t) {
            n(t)
        })
    },
    addOnPlaceBet: function (n) {
        this._bsInst.addOnPlaceBet(function (t) {
            n(t)
        })
    },
    addOnPlaceBetSuccess: function (n) {
        this._bsInst.addOnPlaceBetSuccess(function (t) {
            n(t)
        })
    },
    addOnPlaceBetFailure: function (n) {
        this._bsInst.addOnPlaceBetFailure(function (t) {
            n(t)
        })
    },
    addOnAddBetslipFooterLinks: function (n) {
        this._bsInst.addOnAddBetslipFooterLinks(function (t) {
            n(t)
        })
    },
    addOnAddReceiptHeaderLinks: function (n) {
        this._bsInst.addOnAddReceiptHeaderLinks(function (t) {
            n(t)
        })
    },
    addOnAddReceiptFooterLinks: function (n) {
        this._bsInst.addOnAddReceiptFooterLinks(function (t) {
            n(t)
        })
    },
    addOnAddReceiptLiveAlertSignUp: function (n) {
        this._bsInst.addOnAddReceiptLiveAlertSignUp(function (t) {
            n(t)
        })
    },
    addOnBetslipError: function (n) {
        this._bsInst.addOnBetslipError(function (t) {
            n(t)
        })
    },
    addOnShowBetSlip: function (n) {
        this._bsInst.addOnShowBetSlip(function (t) {
            n(t)
        })
    },
    addOnHideBetSlip: function (n) {
        this._bsInst.addOnHideBetSlip(function (t) {
            n(t)
        })
    },
    addOnChangeBetslipHeight: function (n) {
        this._bsInst.addOnChangeBetslipHeight(function (t) {
            n(t)
        })
    },
    addOnPopupShow: function (n) {
        this._bsInst.addOnPopupShow(function (t, i) {
            n(t, i)
        })
    },
    addOnPopupHide: function (n) {
        this._bsInst.addOnPopupHide(function (t) {
            n(t)
        })
    },
    addOnHideBetSlip: function (n) {
        this._bsInst.addOnHideBetSlip(function (t, i) {
            n(t, i)
        })
    },
    addOnSessionExpired: function (n) {
        this._bsInst.addOnSessionExpired(function (t, i) {
            n(t, i)
        })
    },
    addOnContentChangedOnClient: function (n) {
        this._bsInst.addOnContentChangedOnClient(function (t) {
            n(t)
        })
    },
    addOnHandleBetGuidChange: function (n) {
        this._bsInst.addOnHandleBetGuidChange(n)
    },
    addOnDeleteBetReqComplete: function (n) {
        this._bsInst.addOnDeleteBetReqComplete(function (t) {
            n(t)
        })
    },
    addOnAddBetFailed: function (n) {
        this._bsInst.addOnAddBetFailed(function () {
            n()
        })
    }
};
Type.registerNamespace("b365.Ui.Betslip");
b365.Ui.Betslip.ReqCompleteHandler = function (n, t) {
    this._bsInst = n;
    this._bsController = t;
    this._serverErrorReqType = 99;
    this._betSlipDialogIndicator = "BET_SLIP_DIALOG";
    this._showDlg = !1;
    this._resetButtonState = !0;
    this._hideInProg = !0;
    this._dlg = null;
    this._isValid = function () {
        return typeof this._bsInst != "undefined"
    };
    this._handleServerError = function (n) {
        $("#bsDiv").html(n[0])
    };
    this._handleDialogReqComplete = function (n) {
        n[0] = n[0].replace(this._betSlipDialogIndicator, "");
        this._showDlg = !0;
        this._dlg = new b365.Ui.Betslip.DialogReqCompleteHandler(this._bsInst, this._bsController).handle(n)
    };
    this._pollingContinuesHandler = function (n, t, i) {
        this._resetButtonState = !1;
        var r = new b365.Ui.Betslip.PollingContinuesReqCompleteHandler(this._bsInst, this._bsController).handle(n, t);
        r && (this._hideInProg = r.pollStatus !== b365.Ui.BetslipAPI.Polling.PollStatusEnum.StartOrContinue, this._bsInst._pollInProcess = !0, r.pollStatus === b365.Ui.BetslipAPI.Polling.PollStatusEnum.Succeeded && i && (this._addFooterLinks(i), this._bsInst._pollInProcess = !1, this._bsController.liveAlertsEnabled() && this._betslipHasValidLiveAlertsBets() && this._addLiveAlertSignUpButtons()))
    };
    this._showPushDialog = function (n) {
        var t, f, e, u, i, r;
        if (n)
            for (t = 0, f = n.length; t < f; t++) e = this._bsInst._betItems[n[t].getAttribute("data-item-id")], u = n[t].getAttribute("data-fixtureid") + "-" + n[t].getAttribute("data-item-fpid"), this._bsController.getPushPopupStatus(u) && (i = parseInt(n[t].getAttribute("data-item-push"), 10), i > 0 && (r = new b365.Ui.Betslip.PushBetDialog(this._bsInst, this._bsController, e.getCn(), i, n[t].getAttribute("data-item-id"), n[t].getAttribute("data-item-type"), u), this._bsController.showPushbetDialog(r, r._proceedAction, r._cancelAction, i)))
    };
    this._defaultHandler = function (n, t, i, r) {
        var u = this,
            c, a, v, y, f, p, o, w, s, e = n[0],
            h = $(e),
            l, b = window.top.ns_gen5_util.CurrencyFormatter,
            k;
        if (u._receiptContext || (h.find(".betSlipCountText").text(this._bsInst.numItems(!1)), $(".multiplesWrapper").hasClass("open") && h.find(".multiplesWrapper").removeClass("closed").addClass("open"), h.find(".betSlipCountText").text(this._bsInst.numItems(!1)), window.top.Locator.user.getBalance().pushBalanceEnabled && !!window.top.Locator.user.getBalance().totalBalance && (l = b.ApplyDelimiterAndGroupSeparator(window.top.Locator.user.getBalance().totalBalance), l = b.ApplyCurrencySymbol(l), h.find(".balance").html(l)), e = h[0].outerHTML), u._bsController.clientEnhancedMode() && u._bsController.clientBetSlipShowing())
            if (u._bsController._stakeEntryType == u._bsController._stakeEntryTypes.stakePad)
                if (c = $("#stakePad"), c.length > 0) {
                    if (a = c[0].getAttribute("data-item"), v = c[0].getAttribute("data-type"), y = document.createElement("div"), y.innerHTML = e, s = y.getElementsByTagName("li"), s.length > 0)
                        for (o = 0, w = s.length; o < w; o++)
                            if (s[o].getAttribute("data-item-id") == a && s[o].getAttribute("data-item-type") == v) {
                                f = s[o];
                                break
                            } f ? (f.innerHTML = f.innerHTML + u._bsController._stakeEntryHander.getStakePadMarkUp(a, v, !0), k = (f.getAttribute("class") ? f.getAttribute("class") : "") + " keypad", f.setAttribute("class", k), p = $("input", f), u._animatedDOMUpdate(e, t, n, i, r), u._bsController._stakeEntryHander.enableOrDisableKeys(p)) : u._animatedDOMUpdate(e, t, n, i, r)
                } else u._animatedDOMUpdate(e, t, n, i, r);
        else u._animatedDOMUpdate(e, t, n, i, r);
        else u._animatedDOMUpdate(e, t, n, i, r)
    };
    this._animatedDOMUpdate = function (n, t, i, r, u) {
        var f = this,
            e = document.getElementById("betslipContainer"),
            s = document.getElementById("bsDiv"),
            o, l, a, c = f._bsController.prefixStyle("transition"),
            h = f._bsController.prefixStyle("transform");
        if (sProps.instantBet || (t == f._bsInst.reqTypeRefreshSlip || t == f._bsInst.reqTypeAddItems || t == f._bsInst.reqTypeRefreshSlipWithoutUpdatingUserPrefs || t == f._bsInst.reqTypeDeleteItem) && s && s.className.indexOf("receipt") == -1 && $(".referralContainer", $(s)).length == 0 || t == f._bsInst.reqTypeRefreshAccept || t == f._bsInst.reqTypePlaceBet && n.indexOf("betReceipt") == -1 && n.indexOf("BetSlip_Referral") == -1) {
            t == f._bsInst.reqTypeDeleteItem && f._bsInst.deleteBetReqComplete();
            f._doStandardDOMUpdate(n, !1, t);
            f._processResponse(t, i, r, u);
            return
        }
        o = document.createElement("div");
        o.id = "betslipContainerClone";
        o.className = "mobile";
        o.innerHTML = e.innerHTML;
        l = e.getBoundingClientRect().top;
        s.innerHTML = n;
        a = e.getBoundingClientRect().top;
        e.style[c] = "none";
        e.style[h] = "translate3d(0, 100%, 0)";
        f._receiptContext && $("#bsDiv").removeClass("confirmCurve");
        f._processResponse(t, i, r, u);
        f._bsController.setScrollHeight();
        e.parentNode.insertBefore(o, e);
        setTimeout(function () {
            e.style[c] = h + " .5s";
            o.style[c] = h + " .5s";
            e.style[h] = "translate3d(0, 0, 0)";
            a - l >= -100 && (o.style[h] = "translate3d(0, " + (a - l + 100) + "px, 0)");
            f.postTransition = function () {
                var n, i, r;
                e.removeEventListener(window.top.TRANSITION_END, f.postTransition);
                o.parentNode.removeChild(o);
                e.style[h] = "";
                e.style[c] = "";
                f._receiptContext || sProps.instantBet || f._bsController.enableSwipeDelete();
                (t == f._bsInst.reqTypePlaceBet || t == f._bsInst.reqTypeConfirmBet || t == f._bsInst.reqTypeGetCTCBetDetails || t == f._bsInst.reqTypeItalySplitStakeConfirm || t == f._bsInst.reqTypePollReferredBet) && (f._betPlacementAttempt(f._receiptContext), f._bsController.betPlacementNotification(f._receiptContext), (t == f._bsInst.reqTypePlaceBet || t == f._bsInst.reqTypeItalySplitStakeConfirm) && (placebetButtonContainer = $(s).find(".placeBet.abetslipBtn"), f._bsInst.placebetBtnDisabledForSpanishStakeLimit = !!placebetButtonContainer.attr("data-lineitemsabovebetlimits")), n = $("li.betslipContent", s), n.length > 0 && (i = new window.top.ns_gen5_ui.Component, i._element = n[0], typeof ns_scrollerlib_util != "undefined" && (r = new ns_scrollerlib_util.ScrollHelper(window.top.ns_gen5_ui.Application.currentApplication), r.enableScrollableSection(i))))
            };
            e.addEventListener(window.top.TRANSITION_END, f.postTransition)
        }, 0)
    };
    this._doStandardDOMUpdate = function (n, t, i) {
        var r = this,
            e = document.getElementById("bsDiv"),
            f, o, s, c, u, h, y = document.getElementById("betslipContent"),
            l, a, v, p;
        if (scrollPosition = y ? y.scrollTop : 0, e.innerHTML = n, r._bsController.setScrollHeight(), document.getElementById("betslipContent").scrollTop = scrollPosition, f = e.getElementsByClassName("stk"), r._bsController && r._bsInst && r._bsController._stakeEntryType == r._bsController._stakeEntryTypes.deviceKeyBoard && f.length > 0)
            for (u = 0, h = f.length; u < h; u++) o = f[u].cloneNode(!0), o.setAttribute("type", r._bsInst.keyboardType), f[u].parentNode.replaceChild(o, f[u]), o = null;
        if (r._bsController && r._bsController._currencyDisplayHelper && f.length > 0)
            for (u = 0, h = f.length; u < h; u++) s = f[u].value, s.toString().indexOf(".") > -1 && (c = s.toString().split("."), f[u].value = c[1] == "00" ? c[0] : r._bsController._currencyDisplayHelper.formatCurrency(s));
        t && (r._bsController._stakeEntryHander.reenable(r._bsController._stakeEntryHander), r._bsController._stakeEntryHander._isShowing = !0);
        r._resetButtonState = !1;
        r._checkLoginStatus();
        l = $("li.footer", e);
        a = $("li.betslipContent", e);
        l.length > 0 && l[0].addEventListener("touchmove", function (n) {
            n.preventDefault()
        }, !0);
        !sProps.instantBet && a.length > 0 && (v = new window.top.ns_gen5_ui.Component, v._element = a[0], typeof ns_scrollerlib_util != "undefined" && (p = new ns_scrollerlib_util.ScrollHelper(window.top.ns_gen5_ui.Application.currentApplication), p.enableScrollableSection(v)));
        r._receiptContext || sProps.instantBet || r._bsController.enableSwipeDelete();
        (i == r._bsInst.reqTypePlaceBet || i == r._bsInst.reqTypeConfirmBet || i == r._bsInst.reqTypeGetCTCBetDetails || i == r._bsInst.reqTypeItalySplitStakeConfirm || i == r._bsInst.reqTypePollReferredBet) && (r._betPlacementAttempt(r._receiptContext), r._bsController.betPlacementNotification(r._receiptContext), (i == r._bsInst.reqTypePlaceBet || i == r._bsInst.reqTypeItalySplitStakeConfirm) && (placebetButtonContainer = $(e).find(".placeBet.abetslipBtn"), r._bsInst.placebetBtnDisabledForSpanishStakeLimit = !!placebetButtonContainer.attr("data-lineitemsabovebetlimits")))
    };
    this._createAndDisplayBetSlipContainerClone = function (n) {
        var i = document.getElementById("bsDiv"),
            t = i.cloneNode(!0),
            r;
        t.setAttribute("id", "bsDivClone");
        n && (r = t.innerHTML, r = r.replace('id="stakePad"', 'id="stakePadClone"'), t.innerHTML = r);
        i.parentNode.appendChild(t);
        i.setAttribute("style", "display:none;");
        i = null;
        t = null
    };
    this._removeCloneAndShowLiveBetSlipContainer = function () {
        var n = document.getElementById("bsDiv"),
            t = document.getElementById("bsDivClone");
        n.parentNode.removeChild(t);
        n.removeAttribute("style");
        n = null;
        t = null
    };
    this._customerDialogHandler = function (n) {
        this._resetButtonState = !0;
        new b365.Ui.Betslip.CustomerReqCompleteHandler(this._bsInst, this._bsController).handle(n)
    };
    this._checkLoginStatus = function () {
        var n = $("#bsDiv>ul:first").attr("data-bsuis");
        this._bsController._delegates.isAuthenticated() && n == "0" && this._bsInst.sessionExpired()
    };
    this._betPlacementAttempt = function (n) {
        if (n) {
            this._bsInst.backupBSCookieValue(this._bsInst._betSlipCookieKey);
            this._bsInst.setValueInBSCookie(null, "");
            var t = window.location.host.split(".").pop() === "it";
            new b365.Ui.Betslip.RestoreStateHandler(this._bsInst).handle();
            t || this._bsInst.placeBetSuccess()
        } else t || this._bsInst.placeBetFailure()
    };
    this._addFooterLinks = function (n) {
        n ? (this._bsInst.addReceiptFooterLinks(), new b365.Ui.Betslip.FooterLinksReceiptRender(this._bsInst).render()) : (this._bsInst.betSlipDisplayed(), this._bsInst.addBetslipFooterLinks(), new b365.Ui.Betslip.FooterLinksSlipRender(this._bsInst, $(".footer")).render())
    };
    this._addLiveAlertSignUpButtons = function () {
        this._bsInst.addReceiptLiveAlertSignUp();
        this._bsInst._matchAlertsReceipt = new b365.Ui.Betslip.FooterLiveAlertsReceipt(this._bsInst, this._bsController);
        this._bsInst._matchAlertsReceipt.render()
    };
    this._betslipHasValidLiveAlertsBets = function () {
        return !0
    };
    this._processResponse = function (n, t, i, r) {
        var u = this,
            h = Number($("#bsDiv>ul:first-child").attr("data-xrte")),
            c, e, l, f, o;
        if (!isNaN(h) && h > 0 && u._bsController.updateCurrenyRate(h), u._bsInst && (c = u._bsInst.getSlipType(), c !== u._bsInst.slipIF))
            for (e = document.getElementsByClassName("stk"), l = new b365.Ui.Betslip.StakeChangedHandler(u._bsInst, u._bsController), f = 0; f < e.length; f++) e[f].value > 0 && l.handle(e[f]);
        if (new b365.Ui.Betslip.EnhancedElementsLockUnlockHandler(this._bsInst, this._bsController).unlock(), new b365.Ui.Betslip.TotalsCalculator(u._bsInst, u._bsController).calculate(), new b365.Ui.Betslip.LockUnlockHandler(u._bsInst, u._bsController).handle(!1, u._resetButtonState, n === u._bsInst.reqTypeBetBrk), o = document.getElementsByClassName("bs-FreeBetError"), o.length > 0) {
            var v = new b365.Ui.Betslip.ItemInformation(o[0]),
                a = v.itemIndexAndType(),
                s = this._bsInst.getBetItemById(a[1], a[0]);
            s.setStItem("ft", "");
            s.setStItem("fbv", "");
            s.setStItem("st", "");
            s.setStItem("ust", "");
            u._bsInst.updateState();
            new b365.Ui.Betslip.FreeBetClickProcessor(this._bsInst, this._bsController).init(o[0]).handle(!1)
        }
        if (u._hideInProg && u._bsInst.handleInProg("hide", ""), t.length > 0 && n != this._bsInst.reqTypeBetBrk && t[0].indexOf("DepositMessage") == -1 && u._bsInst.contentLoaded(), i && new b365.Ui.Betslip.ItemSubscriptionManager(u._bsInst).attach(u._bsController), (u._receiptContext || r) && u._bsInst.ScrollToTop(), typeof window.MyBetsController != "undefined" && window.MyBetsController.isInitialised() && window.MyBetsController.bindButtonEvents(), u._bsController && u._bsController.clientActionInProgress(!1), u._bsInst.toggledBankerSelectionState && (u._bsController.ausMultiplesEnabled() && (u._bsController.complexMultiplesNeedsRefresh = !1, u._bsController.getMultipleInfo(!0)), u._bsInst.toggledBankerSelectionState = !1), window.top.ns_gen5_util.CurrencyFormatter.GetFormatRules().featureAvailable) switch (n) {
            case u._bsInst.reqTypePlaceBet:
                if (this._processPlaceBetResponseReferralStakes(window.top.ns_gen5_util.CurrencyFormatter)) break;
            case u._bsInst.reqTypePollReferredBet:
                if (this._processReceiptResponseBankerBetStakeAndReturns(window.top.ns_gen5_util.CurrencyFormatter)) break;
                this._processReceiptResponseFCTCStakes(window.top.ns_gen5_util.CurrencyFormatter);
                this._processReceiptResponseUnitCurrencies(window.top.ns_gen5_util.CurrencyFormatter);
                this._processReceiptResponseTaxedReturns(window.top.ns_gen5_util.CurrencyFormatter);
                this._processReceiptResponseMultiplesStakesAndReturns(window.top.ns_gen5_util.CurrencyFormatter);
                this._processReceiptResponseFooterReturns(window.top.ns_gen5_util.CurrencyFormatter)
        }
        u._bsController.setScrollHeight()
    };
    this._processReceiptResponseUnitCurrencies = function (n) {
        this._processCurrencies(n, {
            wrapper: "br-UnitCurrency",
            value: "br-UnitCurrency_Value",
            currency: "br-UnitCurrency_Code"
        })
    };
    this._processReceiptResponseMultiplesStakesAndReturns = function (n) {
        this._processCurrencyValues(n, {
            wrapper: "multipleBets",
            values: ["br-UnitStake_Value", "br-stakeValue", "br-Return_Value", "br-UnitCurrency_Value"]
        })
    };
    this._processReceiptResponseFooterReturns = function (n) {
        this._processCurrencyValues(n, {
            wrapper: "bs-TotalToReturnReceipt_Wrapper",
            value: "bs-TotalToReturnReceipt_TextValue"
        })
    };
    this._processPlaceBetResponseReferralStakes = function (n) {
        return this._processCurrencyValuesWithOutUnformatting(n, {
            wrapper: "referralContainer",
            value: "referValue"
        })
    };
    this._processReceiptResponseFCTCStakes = function (n) {
        this._processCurrencyValues(n, {
            wrapper: "castBet",
            value: "br-stakeValue"
        })
    };
    this._processCurrencyValues = function (n, t) {
        var o = document.getElementsByClassName(t.wrapper),
            s, r, i, u, f, e;
        if (o.length === 0) return !1;
        if (t.value) i = "." + t.value;
        else
            for (i = "", u = 0; u < t.values.length; u++) i.length > 0 && (i += ","), i += "." + t.values[u];
        for (f = 0; f < o.length; f++)
            if (s = $(o[f]), r = s.find(i), r.length !== 0)
                for (e = 0; e < r.length; e++) this._formatCurrencyValueElementText(n, r[e]);
        return !0
    };
    this._processCurrencyValuesWithOutUnformatting = function (n, t) {
        var o = document.getElementsByClassName(t.wrapper),
            s, r, i, u, f, e;
        if (o.length === 0) return !1;
        if (t.value) i = "." + t.value;
        else
            for (i = "", u = 0; u < t.values.length; u++) i.length > 0 && (i += ","), i += "." + t.values[u];
        for (f = 0; f < o.length; f++)
            if (s = $(o[f]), r = s.find(i), r.length !== 0)
                for (e = 0; e < r.length; e++) this._formatCurrencyValueElementTextWithoutFormating(n, r[e]);
        return !0
    };
    this._processCurrencies = function (n, t) {
        for (var o = document.getElementsByClassName(t.wrapper), f, r, e, i, s, u = 0, h = o.length; u < h; u++)(f = $(o[u]), r = f.find("." + t.value), r.length !== 0) && (i = f.find("." + t.currency), i.length > 0 && i.remove(), e = this._formatCurrencyValueElementText(n, r), i.length !== 0) && (s = n.GetCurrencySymbol(e.length > 0 ? e : "100.00"), i.text(s), n.SpaceRequired && i.addClass(t.currency + "_space"), n.PrefixSymbol ? (i.insertBefore(r), i.addClass(t.currency + "_prefix")) : (i.insertAfter(r), i.addClass(t.currency + "_postfix")))
    };
    this._processReceiptResponseTaxedReturns = function (n) {
        for (var u = {
                wrapper: "return",
                stake: "br-Return_Value",
                taxindicator: "tax-indicator"
            }, f = document.getElementsByClassName(u.wrapper), e, t, i, r = 0, o = f.length; r < o; r++)(e = $(f[r]), t = e.find("." + u.stake), t.length !== 0) && (i = t.find("." + u.taxindicator), i.length > 0 && i.remove(), this._formatCurrencyValueElementText(n, t), i.length > 0 && t.append(i))
    };
    this._processReceiptResponseBankerBetStakeAndReturns = function (n) {
        var i = {
                receipt: "bankersReceipt",
                stakesAndReturns: ".br-stakeValue, .br-Return_Value, .br-UnitCurrency_Value",
                totalReturns: "bs-TotalToReturnReceipt_TextValue"
            },
            f = document.getElementsByClassName(i.receipt),
            e, r, t, o, u;
        if (f.length === 0) return !1;
        for (e = $(f[0]), r = $(i.stakesAndReturns, e), t = 0, o = r.length; t < o; t++) this._formatCurrencyValueElementText(n, r[t]);
        return u = document.getElementsByClassName(i.totalReturns), u.length > 0 && this._formatCurrencyValueElementText(n, u[0]), !0
    };
    this._formatCurrencyValueElementText = function (n, t) {
        var r = $(t),
            i = r.text().trim();
        return i && i.length && (i = n.UnformatCurrencyValue(i), i = n.ApplyDelimiterAndGroupSeparator(i), r.text(i)), i
    };
    this._formatCurrencyValueElementTextWithoutFormating = function (n, t) {
        var r = $(t),
            i = r.text().trim();
        return i && i.length && (i = n.ApplyDelimiterAndGroupSeparator(i), r.text(i)), i
    }
};
b365.Ui.Betslip.Request = {
    getTypeId: function (n) {
        return n[1][7][0]
    },
    getResponse: function (n) {
        return n[0]
    }
};
b365.Ui.Betslip.ReqCompleteHandler.prototype = {
    handle: function (n) {
        function ot(n, t, i) {
            var r = n;
            return n && i > 0 && t >= 0 && (r = n.substr(0, t) + n.substr(t + i)), r
        }
        var t = this,
            nt, e, y, h, c, p, l, w, a, tt, s, b, k, d, f, it, rt, g;
        if (t._bsController._noStakeCount = 0, t._isValid()) {
            f = !1;
            t._resetButtonState = !0;
            t._hideInProg = !0;
            var i = b365.Ui.Betslip.Request.getTypeId(n),
                r = b365.Ui.Betslip.Request.getResponse(n),
                u = i == bs.reqTypePlaceBet && window.location.hostname.split(".").pop().toLowerCase() === "au",
                ut = r.indexOf("TELEBET_WRITE") > -1;
            this._receiptContext = !u && r.indexOf("betReceipt") > -1;
            t._bsController.ausMultiplesEnabled() && (n[1][7][4] == "getMultipleCombinations" || t._bsController.complexMultiplesCombinationsInit ? (t._bsController.complexMultiplesCombinationsInit = !1, t._bsController.complexMultiplesNeedsRefresh = !0, it = t._bsInst.getBetItems(t._bsInst.betTypeMultiple).length > 0, (it || t._bsController.hasMultipleStakeEntries()) && t._bsController.getMultipleInfo(!0)) : n[1][7][4] == "getMultipleOdds" && new b365.Ui.Betslip.TotalsCalculator(t._bsInst, t._bsController).calculate());
            t._bsController.clientEnhancedMode() && !b365.Ui.BetslipAPI.Polling.isPollingRequestType(i) && (e = $("#bsDiv"), ($("li", e).hasClass("disableBetSlip") || $("li", e).hasClass("disabledBetSlip")) && (nt = $('li[data-item-type$="multiple"], li[data-item-type$="single"], li[data-item-type$="cast"], li[data-item-type$="tote-single"], li[data-item-type$="tote-cast"], li[data-item-type$="tote-pot"], li[data-item-type$="tote-pot-leg"]', e), t._bsController._enhancedBetSlipAnimations.enableBetSlip(nt, e)));
            var ft = t._bsInst.getValueFromBSCookie("processed").replace("||", ""),
                et = r.indexOf("DepositMessage") > -1 || r.indexOf("CustomerMessage") > -1,
                v = b365.Ui.BetslipAPI.Polling.getInstructionSubStringInfo(r),
                o = null;
            if (v && (o = v.content, t._receiptContext && (r = ot(r, v.sourceStartIndex, v.length), n[0] = r)), o || (this._bsInst._pollInProcess = !1), r.indexOf("data-betguid") > -1 && (d = $(r).attr("data-betguid"), d && t._bsInst.raiseBetGuidChangeEvent(d)), i == t._serverErrorReqType) t._handleServerError(n), t._processResponse(i, n, f, u);
            else if (i == t._bsInst.reqTypeMaxBet) new b365.Ui.Betslip.MaxBetReqCompleteHandler(t._bsInst, t._bsController).handle(n), t._processResponse(i, n, f, u);
            else if (i == t._bsInst.reqTypeBetBrk || i == t._bsInst.reqTypePitcher || r.indexOf(t._betSlipDialogIndicator) != -1) t._processResponse(i, n, f, u), t._handleDialogReqComplete(n);
            else if (r.indexOf("DUPLICATE_BET") > -1 || r.indexOf("CHECK_MEMBERS") > -1) new b365.Ui.Betslip.DuplicateBetHandler(t._bsInst, t._bsController).handle(), t._hideInProg = !0, t._processResponse(i, n, f, u);
            else if (r.indexOf("LIFETIME_DEPOSIT_ACKNOWLEDGEMENT_REQUIRED") > -1) t._processResponse(i, n, f, u), t._bsController._bsContext.HideBetslipDelegate(), rt = "https://" + window.location.hostname + "/members/services/notifications/process/?NotificationSequence=LifetimeDeposits", lifetimeDepositPopup = new ns_pushmessagelib_ui.UserNotificationsPopup("messageWindow", rt), lifetimeDepositPopup.setupPopup(), lifetimeDepositPopup.appendMessageWindow();
            else if (r.indexOf("LOCKED") > -1) t._bsInst.handleInProg("hide", ""), e = $("#bsDiv"), e.find(".footer").removeClass("hidden"), y = e.find(".placeBet button"), y.length > 0 && (h = e.find("#buttonContent"), h.length > 0 && (h = h[0].innerHTML, y[0].innerHTML = h)), t._processResponse(i, n, f, u);
            else {
                if (i == t._bsInst.reqTypePhoneBet) {
                    new b365.Ui.Betslip.PhoneBetHandler(t._bsInst, t._bsController).displayPopup(r);
                    return
                }
                if (o && !t._receiptContext) t._pollingContinuesHandler(i, o, !0), t._processResponse(i, n, f, u), $(".betslipHeaderTempReceiptComplete").length == 0 && (t._bsController.clientActionInProgress(!0), new b365.Ui.Betslip.LockUnlockHandler(t._bsInst, t._bsController).handle(!0));
                else if (b365.Ui.BetslipAPI.Polling.isPollingRequestType(i)) i !== t._bsInst.reqTypePollTempBetReceipt && (t._receiptContext = r.indexOf("betReceipt") > -1, t._defaultHandler(n, i, f, u)), o && t._pollingContinuesHandler(i, o, t._receiptContext), t._processResponse(i, n, f, u);
                else if (et) t._customerDialogHandler(n), t._processResponse(i, n, f, u);
                else {
                    if (ut) return;
                    new b365.Ui.Betslip.ItemSubscriptionManager(this._bsInst).unsubscribe();
                    f = !0;
                    this._bsController.getPushMarketsEnabled() && i == this._bsInst.reqTypeRefreshAccept && (s = $(".hcapChange", e)[0]);
                    t._defaultHandler(n, i, f, u);
                    this._receiptContext || u || ft != "true" ? i == t._bsInst.reqTypeRefreshSlip ? (t._bsInst.betAddedReqComplete(), t._bsInst.refreshReqComplete(), addedItems = $('li[data-item-type="single"]'), t._showPushDialog(addedItems, i)) : i == t._bsInst.reqTypeAddItems || i == t._bsInst.reqTypeConstructAndAddItems ? (t._bsInst.betAddedReqComplete(), t._showPushDialog(addedItems, i), $(document).trigger("bsInfoMessage", n[0].toUpperCase().indexOf("ALREADY ADDED") > -1 ? window.betSlipML.duplicateselection : window.betSlipML.addedtobetslip), c = $("#BetSlipDialogueAddToBetslip"), c.length > 0 && (p = n[0].match(/class=\"[\w\s]*acceptChanges[\w\s]*\"/i), p.length > 0 && n[0].indexOf("oddsChange") < 0 && n[0].indexOf("hcapChange") < 0 && (p[0].toLowerCase().indexOf("hidden") < 0 ? $("a", c).addClass("disabled").attr("data-nav", "") : $("a", c).removeClass("disabled").attr("data-nav", "AddToBetSlip")))) : i == t._bsInst.reqTypeRefreshAccept && (e = $("#bsDiv"), e.trigger("b365.Ui.Betslip.acceptingchanges"), t._bsInst.acceptChanges(), s != undefined && (g = parseInt(s.getAttribute("data-item-push"), 10), tt = this._bsInst._betItems[s.getAttribute("data-item-id")], g > 0 && (b = new b365.Ui.Betslip.PushBetDialog(this._bsInst, this._bsController, tt.getCn(), g, s.getAttribute("data-item-id"), s.getAttribute("data-item-type")), k = b.buildPushBetMessage(), k != "" && this._bsController.showDialog(b, k, !0)))) : new b365.Ui.Betslip.ViewResetter(t._bsInst, t._bsController).reset();
                    o ? t._pollingContinuesHandler(i, o, !1) : (this._receiptContext && this._bsController.liveAlertsEnabled() && this._betslipHasValidLiveAlertsBets() && this._addLiveAlertSignUpButtons(), this._addFooterLinks(this._receiptContext || u));
                    this._bsController && this._bsController._dlg && (l = $("#okButton"), l.length > 0 && (w = l[0].getAttribute("data-action"), w && w === "refer" && (a = $("#bsCD"), a.length > 0 && a[0].hasAttribute("style") && a.css("display") != "none" && this._bsController._dlg.hideDialog(), l.removeClass("disabled"), $("#closeButton").removeClass("disabled"))))
                }
            }
        }
    }
};
Type.registerNamespace("b365.Ui.Betslip");
b365.Ui.Betslip.CustomerReqCompleteHandler = function (n, t) {
    this._bsInst = n;
    this._bsController = t;
    this._isValid = function () {
        return typeof this._bsInst != "undefined"
    }
};
b365.Ui.Betslip.CustomerReqCompleteHandler.prototype = {
    handle: function (n) {
        var i = this,
            r, t = n[0].split("|");
        t.splice(0, 1);
        r = {
            userBalance: t[0],
            totalStake: t[1],
            is3dSecure: t[2],
            isQuickDeposit: t[3],
            QuickDepositRemainingStake: t[4]
        };
        $("#betslipContainer").find(".footer").removeClass("hidden");
        i._bsController.deposit(r);
        r.isQuickDeposit === "1" && new b365.Ui.Betslip.MessageDisplayHandler(i._bsInst, i._bsController).showMsg(betSlipML.insufficientfunds);
        new b365.Ui.Betslip.LockUnlockHandler(i._bsInst, i._bsController).handle(!1, !0)
    }
};
Type.registerNamespace("b365.Ui.Betslip");
b365.Ui.Betslip.DialogReqCompleteHandler = function (n, t) {
    this._bsInst = n;
    this._bsController = t;
    this._titleMarker = "|title";
    this._messageMarker = "|message";
    this._isValid = function () {
        return typeof this._bsInst != "undefined"
    }
};
b365.Ui.Betslip.DialogReqCompleteHandler.prototype = {
    handle: function (n) {
        if (this._isValid()) {
            var i = this,
                u = n[0],
                f, r, e, o, s, h, c, t, l;
            u.length > 0 && (t = $(u), l = t.attr("data-renderstyle") === "confirmation", f = t.attr("class"), r = t.children("#title").html(), e = t.children("#message").html(), o = t.children("#button1Text").html(), s = t.children("#button2Text").html(), h = t.children("#button1Action").html(), c = t.children("#button2Action").html(), r || l ? i._bsController.showConfirmation(i, r, e, o, h, s, c, f) : i._bsController.showDialog(i, t))
        }
    },
    setDialog: function (n) {
        var t = this;
        t._bsController.SetCurrentDialogRef(n)
    }
};
Type.registerNamespace("b365.Ui.Betslip");
b365.Ui.Betslip.LockUnlockHandler = function (n, t) {
    this._bsInst = n;
    this._bsController = t;
    this._isValid = function () {
        return typeof this._bsInst != "undefined"
    }
};
b365.Ui.Betslip.LockUnlockHandler.prototype = {
    handle: function (n) {
        if (this._isValid()) {
            var t = $("#betslipContainer");
            n == !0 ? t.addClass("locked") : t.removeClass("locked")
        }
    }
};
Type.registerNamespace("b365.Ui.Betslip");
b365.Ui.Betslip.EnhancedElementsLockUnlockHandler = function (n, t) {
    this._bsInst = n;
    this._bsController = t;
    this._isValid = function () {
        return typeof this._bsInst != "undefined"
    }
};
b365.Ui.Betslip.EnhancedElementsLockUnlockHandler.prototype.lock = function () {
    this._bsController._enhancedBetSlipTypeSelector && this._bsController._enhancedBetSlipTypeSelector.disablePopUp();
    this._bsController._enhancedBetSlipOddsSelector && this._bsController._enhancedBetSlipOddsSelector.disablePopUps();
    this._bsController._enhancedBetSlipPitcherSelector && this._bsController._enhancedBetSlipPitcherSelector.disablePopUps();
    this._bsController._enhancedBetSlipToteSelector && this._bsController._enhancedBetSlipToteSelector.disablePopUps();
    this._bsController._enhancedIfBetSelector && this._bsController._enhancedIfBetSelector.disablePopUps();
    this._bsController._enhancedTeaserSelector && this._bsController._enhancedTeaserSelector.disablePopUps();
    this._bsController._enhancedBetSlipEachWayExtraSelector && this._bsController._enhancedBetSlipEachWayExtraSelector.disablePopUps();
    this._bsController._enhancedBetSlipAusRaceBetTypeSelector && this._bsController._enhancedBetSlipAusRaceBetTypeSelector.disablePopUps();
    this._bsController._removeClickHandler && this._bsController._removeClickHandler.removeHandlers();
    this._bsController._eachWayClickHandler && this._bsController._eachWayClickHandler.removeHandlers();
    this._bsController._autoVoidClickHandler && this._bsController._autoVoidClickHandler.removeHandlers();
    this._bsController._noReservesClickHandler && this._bsController._noReservesClickHandler.removeHandlers();
    this._bsController._stakeEntryType == this._bsController._stakeEntryTypes.stakePad && this._bsController._stakeEntryHander && this._bsController._stakeEntryHander._isShowing && this._bsController._stakeEntryHander.detach()
};
b365.Ui.Betslip.EnhancedElementsLockUnlockHandler.prototype.unlock = function () {
    var n = this;
    this._bsController._enhancedBetSlipTypeSelector && this._bsController._enhancedBetSlipTypeSelector.enablePopUp();
    this._bsController._enhancedBetSlipOddsSelector && this._bsController._enhancedBetSlipOddsSelector.enablePopUps();
    this._bsController._enhancedBetSlipPitcherSelector && this._bsController._enhancedBetSlipPitcherSelector.enablePopUps();
    this._bsController._enhancedBetSlipToteSelector && this._bsController._enhancedBetSlipToteSelector.enablePopUps();
    this._bsController._enhancedIfBetSelector && this._bsController._enhancedIfBetSelector.enablePopUps();
    this._bsController._enhancedTeaserSelector && this._bsController._enhancedTeaserSelector.enablePopUps();
    this._bsController._enhancedBetSlipEachWayExtraSelector && this._bsController._enhancedBetSlipEachWayExtraSelector.enablePopUps();
    this._bsController._enhancedBetSlipAusRaceBetTypeSelector && this._bsController._enhancedBetSlipAusRaceBetTypeSelector.enablePopUps();
    this._bsController._removeClickHandler ? this._bsController._removeClickHandler.attachHandlers() : (this._bsController._removeClickHandler = new b365.Ui.Betslip.RemoveClickHandler(n._bsInst, n._bsController), this._bsController._removeClickHandler.attachHandlers());
    this._bsController._eachWayClickHandler ? this._bsController._eachWayClickHandler.attachHandlers() : b365.Ui.Betslip.EachWayClickHandler && (this._bsController._eachWayClickHandler = new b365.Ui.Betslip.EachWayClickHandler(n._bsInst, n._bsController), this._bsController._eachWayClickHandler.attachHandlers());
    this._bsController._autoVoidClickHandler ? this._bsController._autoVoidClickHandler.attachHandlers() : b365.Ui.Betslip.EachWayClickHandler && (this._bsController._autoVoidClickHandler = new b365.Ui.Betslip.AutoVoidClickHandler(n._bsInst, n._bsController), this._bsController._autoVoidClickHandler.attachHandlers());
    this._bsController._freeBetClickHandler ? this._bsController._freeBetClickHandler.attachHandlers() : b365.Ui.Betslip.FreeBetClickHandler && (this._bsController._freeBetClickHandler = new b365.Ui.Betslip.FreeBetClickHandler(n._bsInst, n._bsController), this._bsController._freeBetClickHandler.attachHandlers());
    this._bsController._noReservesClickHandler ? this._bsController._noReservesClickHandler.attachHandlers() : b365.Ui.Betslip.NoReservesClickHandler && (this._bsController._noReservesClickHandler = new b365.Ui.Betslip.NoReservesClickHandler(n._bsInst, n._bsController), this._bsController._noReservesClickHandler.attachHandlers());
    this._bsController._stakeEntryType == this._bsController._stakeEntryTypes.stakePad && this._bsController._stakeEntryHander && this._bsController._stakeEntryHander._isShowing && this._bsController._stakeEntryHander.init()
};
Type.registerNamespace("b365.Ui.BetslipAPI"),
    function (n) {
        var i = "BET_POLL",
            t = "ENDPOLLDATA",
            r = "PS=",
            u = "RDAT=",
            f = "NPRP=";
        n.PollStatusEnum = {
            StartOrContinue: 0,
            Succeeded: 1,
            Failed: 2
        };
        n.getInstructionSubStringInfo = function (n) {
            var u, r = n.indexOf(i),
                f;
            return r < 0 ? null : (f = n.indexOf(t, r + i.length), u = f > -1 ? n.substring(r, f + t.length) : n.substring(r), {
                content: u,
                sourceStartIndex: r,
                length: u.length
            })
        };
        n.boundedSubString = function (n, t, i) {
            var r, u;
            return !n || !t || !i || n.length < t.length + i.length ? null : (r = n.indexOf(t), r <= -1) ? null : (r += t.length, u = n.indexOf(i, r), u < r) ? null : n.substring(r, u)
        };
        n.parsePollInfo = function (e) {
            var s = n.boundedSubString(e, i, t),
                o, h = null;
            return s && (o = s.split("|"), h = {
                reqType: o.length > 1 ? Number(o[1]) : null,
                referenceId: o.length > 2 ? o[2] : "",
                time: o.length > 3 ? o[3] : null,
                interval: o.length > 4 ? o[4] : null,
                pollStatus: n.PollStatusEnum.StartOrContinue,
                nextPollRequestParams: null,
                responseData: null
            }, s.indexOf(r) > 0 && (h.pollStatus = Number(n.boundedSubString(s, r, f)), h.nextPollRequestParams = n.boundedSubString(s, f, u), h.responseData = n.boundedSubString(e, u, t))), h
        };
        n.isPollingRequestType = function (n) {
            return n === bs.reqTypePollReferredBet || n === bs.reqTypePollTempBetReceipt
        }
    }(window.b365.Ui.BetslipAPI.Polling = window.b365.Ui.BetslipAPI.Polling || {});
Type.registerNamespace("b365.Ui.Betslip");
b365.Ui.Betslip.PollingContinuesReqCompleteHandler = function (n, t) {
    this._bsInst = n;
    this._bsController = t;
    this._isValid = function () {
        return this._bsInst !== undefined
    }
};
b365.Ui.Betslip.PollingContinuesReqCompleteHandler.prototype = {
    EnableGuiControlsForTempReceipt: function (n) {
        var i = $("#bsDiv"),
            t = i.find(".abetslipRecBtn button"),
            r = t && n !== t.prop("disabled");
        r || (i.find(".rctrs").prop("disabled", !n), t.prop("disabled", !n), n ? t.parent().removeClass("disabled") : t.parent().addClass("disabled"))
    },
    handle: function (n, t) {
        var i = null;
        if (this._isValid()) {
            if ((i = b365.Ui.BetslipAPI.Polling.parsePollInfo(t), !i || !i.referenceId && !i.nextPollRequestParams && !i.responseData) || (n = Number(n), b365.Ui.BetslipAPI.Polling.isPollingRequestType(n) === i.reqType && this._bsInst._pollReqType === 0)) return null;
            n === this._bsInst.reqTypePollTempBetReceipt && this.handleTempReceiptData(i);
            i.pollStatus === b365.Ui.BetslipAPI.Polling.PollStatusEnum.StartOrContinue && this._bsInst.pollBet(i.reqType, i.referenceId, i.time, i.interval, i.nextPollRequestParams);
            i.reqType === this._bsInst.reqTypePollTempBetReceipt && this.EnableGuiControlsForTempReceipt(i.pollStatus !== b365.Ui.BetslipAPI.Polling.PollStatusEnum.StartOrContinue)
        }
        return i
    },
    handleTempReceiptData: function (n) {
        var i = n.responseData,
            s = 2,
            h = 3,
            r, c, t, u = null,
            l, a, o = null,
            v, f = this,
            e;
        if (n.pollStatus !== b365.Ui.BetslipAPI.Polling.PollStatusEnum.Failed && i && i.length !== 0 && (i = JSON.parse(i), i)) {
            for (c = i.BetList.length, r = 0; r < c; r += 1) {
                t = i.BetList[r];
                switch (t.Status) {
                    case -1:
                        u = "timedout";
                        break;
                    case s:
                        u = "accepted";
                        o = t.PSQFReference;
                        $("#tempbetstatus_reference_" + t.TempBettingSlipId).text(t.BetReference).prev().show();
                        break;
                    case h:
                        u = "rejected";
                        o = betSlipML.aamsrejected
                }
                a = $("#tempbetstatus_title_" + t.TempBettingSlipId + " .bs-tempbetstatus_titleText");
                (t.Status === s || t.Status === h) && (a.text(o), $("#tempbetstatus_desc_" + t.TempBettingSlipId).hide());
                l = $("#tempbetstatus_title_" + t.TempBettingSlipId);
                v = t.Status === 0 || t.Status === 1;
                v === !1 && l.removeClass("pending").addClass(u)
            }
            n.pollStatus === b365.Ui.BetslipAPI.Polling.PollStatusEnum.Succeeded && i.UserBalanceDisplayValue.length > 0 && ($("#bsDiv > ul:first-child").attr("data-ub", i.UserBalanceDisplayValue), e = $("#bsDiv > ul:first-child .betslipHeaderTempReceipt"), e && e[0] && (e.addClass("betslipHeaderTempReceiptComplete"), f._bsController.clientActionInProgress(!1), f._bsController.setScrollHeight(), new b365.Ui.Betslip.LockUnlockHandler(f._bsInst, f._bsController).handle(!1)), this._bsInst.placeBetSuccess())
        }
    }
};
Type.registerNamespace("b365.Ui.Betslip");
b365.Ui.Betslip.PollingFinishedReqCompleteHandler = function (n, t) {
    this._bsInst = n;
    this._bsController = t;
    this._isValid = function () {
        return typeof this._bsInst != "undefined"
    }
};
b365.Ui.Betslip.PollingFinishedReqCompleteHandler.prototype = {
    handle: function (n) {
        if (this._isValid()) {
            this._bsInst.resetPoll();
            var t = n[0].indexOf("DepositMessage") > -1 || n[0].indexOf("CustomerMessage") > -1;
            t ? (this._bsController._dlg && this._bsController._dlg.hideDialog(), new b365.Ui.Betslip.CustomerReqCompleteHandler(this._bsInst, this._bsController).handle(n)) : (this._bsController._dlg && this._bsController._dlg.hideDialog(), $("#bsDiv").html(n[0]))
        }
    }
};
Type.registerNamespace("b365.Ui.Betslip");
b365.Ui.Betslip.MultiBreakdownRequestDespatcher = function (n, t) {
    this._bsController = t;
    this._bsInst = n;
    this._isValid = function () {
        return typeof this._bsInst != "undefined"
    }
};
b365.Ui.Betslip.MultiBreakdownRequestDespatcher.prototype = {
    despatch: function (n) {
        if (this._isValid()) {
            var t = new b365.Ui.Betslip.BetBreakdownKeyGenerator(this._bsInst, this._bsInst.getBetItemById(this._bsInst.itemTypeMultiple, n), this._bsInst.itemTypeMultiple, n).generate();
            this._bsController.showBetslipBreakdownDialog(t)
        }
    }
};
Type.registerNamespace("b365.Ui.Betslip");
b365.Ui.Betslip.RemoveAllItemsRequestDespatcher = function (n, t) {
    this._bsInst = n;
    this._bsController = t;
    this._isValid = function () {
        return typeof this._bsInst != "undefined"
    };
    this._closeBetSlip = function () {
        var n = this;
        n._bsInst.hideBetSlip()
    }
};
b365.Ui.Betslip.RemoveAllItemsRequestDespatcher.prototype = {
    despatch: function (n) {
        var t, i;
        this._isValid() && !$(n).hasClass("disabled") && (this._closeBetSlip(), this._bsInst.clearBets(!1), this._bsInst.betSlipItemsChanged(), this._bsController.itemsRemoved(), $("#bsDiv").trigger("b365.Ui.Betslip.removingall"), sProps.instantBet && (new b365.Ui.Betslip.TotalsCalculator(this._bsInst, this._bsController).calculate(), $(".single-section,.multiple-section,.totals,.bsError,#pro,.error,.teaserHeader ").addClass("hidden"), $(".emptyBetslip").removeClass("hidden"), $(".betslipHeader").addClass("hidden"), $(".bs-useFreeBet").addClass("hidden"), $(".placeBet").addClass("hidden"), $(".placeBet").addClass("disabled"), $(".placeCTCBet").addClass("hidden"), $(".abetslipBtn").text(betSlipML.AddSelections), t = document.getElementById("ib-betcount"), t && (t.innerHTML = "")));
        i = this._bsController._bsInst.getClickToCallHandler();
        i && (ctcTokenData = i.dispose())
    }
};
Type.registerNamespace("b365.Ui.Betslip");
b365.Ui.Betslip.EditSelectionsRequestDespatcher = function (n) {
    this._bsInst = n;
    this._isValid = function () {
        return typeof this._bsInst != "undefined"
    }
};
b365.Ui.Betslip.EditSelectionsRequestDespatcher.prototype = {
    despatch: function () {
        this._isValid() && (this._bsInst.editBet(), this._bsInst.setClearOnAdd(!1), this._bsInst.refresh(this._bsInst.betTypeNormal))
    }
};
Type.registerNamespace("b365.Ui.Betslip");
b365.Ui.Betslip.DialogClickHandler = function (n, t) {
    this._bsInst = n;
    this._controller = t;
    this._closeAction = "close";
    this._referAction = "refer";
    this._italyPushProceed = "ipProceed";
    this._italyPushCancel = "ipCancel";
    this._pdProceed = "pdProceed";
    this._pdHelp = "pdHelp";
    this._hrefClick = "href";
    this._isValid = function () {
        return typeof this._bsInst != "undefined" && typeof this._controller.GetCurrentDialogRef() != "undefined"
    };
    this._handleRefer = function () {
        new b365.Ui.Betslip.ReferBetRequestDespatcher(this._bsInst, this._controller).despatch()
    }
};
b365.Ui.Betslip.DialogClickHandler.prototype = {
    handle: function (n) {
        var i = $(n.target),
            r = i.attr("data-action"),
            t;
        if (this._isValid()) {
            if (r !== this._hrefClick && (n.preventDefault(), n.stopPropagation()), i.hasClass("disabled")) return;
            switch (r) {
                case this._closeAction:
                    $("#closeButton").removeClass("disabled");
                    $("#okButton").removeClass("disabled");
                    this.hideDialog();
                    break;
                case this._referAction:
                    $("#closeButton").addClass("disabled");
                    t = $("#okButton");
                    t.addClass("disabled");
                    t[0].innerHTML = window.betSlipML.referringBet + '<span class="buttonSpinner"><\/span>';
                    this._handleRefer();
                    break;
                case this._italyPushProceed:
                case this._italyPushCancel:
                case this._pdProceed:
                case this._pdHelp:
                    this._controller._dlg.controller.handleClick(n)
            }
        }
    }
};
b365.Ui.Betslip.DialogClickHandler.prototype.hideDialog = function () {
    this._controller._dlg && this._controller._dlg.hideDialog()
};
Type.registerNamespace("b365.Ui.Betslip");
b365.Ui.Betslip.DialogCloser = function (n, t) {
    this._controller = n;
    this._dialogContainer = $(t);
    this._isValid = function () {
        return typeof this._controller != "undefined" && typeof this._dialogContainer != "undefined"
    }
};
b365.Ui.Betslip.DialogCloser.prototype = {
    closeDialog: function () {
        this._isValid() && (this._dialogContainer.addClass("hidden"), $(".centergreyout").remove())
    }
};
Type.registerNamespace("b365.Ui.Betslip");
b365.Ui.Betslip.RetainSelectionsRequestDespatcher = function (n, t) {
    this._bsInst = n;
    this._controller = t;
    this._isValid = function () {
        return typeof this._bsInst != "undefined"
    }
};
b365.Ui.Betslip.RetainSelectionsRequestDespatcher.prototype = {
    despatch: function (n) {
        var i, t;
        if (this._isValid() && !$(n).hasClass("disabled")) {
            for (this._controller.getPushMarketsEnabled() ? this._bsInst.restoreBSCookieValue("bs", this._bsInst._pushBetSlipCookieBackup) : this._bsInst.restoreBSCookieValue("bs", this._bsInst._betSlipCookieBackup), this._bsInst.setValueInBSCookie("processed", "false"), this._bsInst.restoreBSCookieValueFromBackup(), new b365.Ui.Betslip.RestoreStateHandler(this._bsInst).handle(), this._bsInst.setClearOnAdd(!1), new b365.Ui.Betslip.UpdateStateHandler(this._bsInst).handle(), i = this._bsInst.getBetItems(this._bsInst.itemTypeAll), t = 0; t < i.length; t++) i[t].setStItem("st", ""), i[t].setStItem("ust", ""), i[t].setStItem("gust", ""), i[t].setStItem("gst", ""), i[t].setStItem("tr", ""), i[t].setStItem("fbv", ""), i[t].setStItem("ft", ""), i[t].setStItem("rfs", "");
            this._bsInst.updateState();
            this._bsInst.refresh(this._bsInst.betTypeNormal);
            this._controller.retainSelectionsDelegate();
            bsApp.reuseSelections()
        }
    }
};
Type.registerNamespace("b365.Ui.Betslip");
b365.Ui.Betslip.SingleBreakdownRequestDespatcher = function (n, t) {
    this._bsController = t;
    this._bsInst = n;
    this._isValid = function () {
        return typeof this._bsInst != "undefined"
    }
};
b365.Ui.Betslip.SingleBreakdownRequestDespatcher.prototype = {
    despatch: function (n) {
        this._isValid() && this._bsInst.req(this._bsInst.reqTypeBetBrk, new b365.Ui.Betslip.BetBreakdownKeyGenerator(this._bsInst, this._bsInst.getBetItemById(this._bsInst.itemTypeSingle, n), this._bsInst.itemTypeSingle, n).generate(), undefined, this._bsController)
    }
};
Type.registerNamespace("b365.Ui.Betslip");
b365.Ui.Betslip.RepeatStakeClickHandler = function (n, t, i, r, u) {
    this._bsInst = n;
    this._bsController = t;
    this._itemIndex = i;
    this._itemType = r;
    this._itemElement = u;
    this._isItalianDomain = window.location.host.split(".").pop() == "it";
    this._isValid = function () {
        return typeof this._bsInst != "undefined" && typeof this._itemIndex != "undefined" && typeof this._itemType != "undefined" && typeof this._itemElement != "undefined"
    };
    this._isValidRepeatStake = function (n) {
        return n != "" && Number(n) > 0
    };
    this._repeatStake = function (n, t, i) {
        var f, e, r, u;
        if (this._isValid()) {
            for (f = this._bsInst.getBetItems(t), e = new b365.Ui.Betslip.StakeChangedHandler(this._bsInst), r = i; r < f.length; r++) u = $("#bsDiv " + (t == this._bsInst.itemTypeSingle ? ".single-section" : ".cast-section") + " li[data-item-id='" + r + "']:not(.suspended) .stk"), u.length > 0 && u[0].className.indexOf("bs-FreeBet-disabled") == -1 && (f[r].setStItem("st", n), u[0].value = n, e.handle(u[0]));
            this._bsInst.updateState()
        }
    }
};
b365.Ui.Betslip.RepeatStakeClickHandler.prototype = {
    handle: function (n) {
        if (typeof n != "undefined" && n && this._isValid()) {
            var r = n.target,
                i = $(this._itemElement).find(".stk:first"),
                t = (new b365.Ui.Formatter).padStringTo2DP(i[0].value);
            this._isItalianDomain && (t = Math.floor(Number(t)));
            i[0].value = t;
            this._isValidRepeatStake(t) && (this._itemType == this._bsInst.itemTypeSingle ? (this._repeatStake(t, this._bsInst.itemTypeSingle, Number(this._itemIndex) + 1), this._repeatStake(t, this._bsInst.itemTypeCast, 0)) : this._itemType == this._bsInst.itemTypeCast && this._repeatStake(t, this._bsInst.itemTypeCast, Number(this._itemIndex) + 1), new b365.Ui.Betslip.TotalsCalculator(this._bsInst, this._bsController).calculate())
        }
    }
};
Type.registerNamespace("b365.Ui.Betslip");
b365.Ui.Betslip.RepeatStakeVisibilitySetter = function (n) {
    this._bsInst = n;
    this._isValid = function () {
        return typeof this._bsInst != "undefined"
    }
};
b365.Ui.Betslip.RepeatStakeVisibilitySetter.prototype = {
    set: function (n, t) {
        this._isValid() && n == 0 && $blib.isDecimal(t.value) === !0 && $(".rptStake").removeClass("hidden")
    }
};
Type.registerNamespace("b365.Ui.Betslip");
b365.Ui.Betslip.NoReservesClickHandler = function (n, t) {
    this._bsInst = n;
    this._bsController = t;
    this._enabled = !1;
    this._noReservesClickHandlers = [];
    this._isValid = function () {
        return typeof this._bsInst != "undefined"
    }
};
b365.Ui.Betslip.NoReservesClickHandler.prototype = {
    handle: function (n) {
        var r = this,
            t, i, f, e, o, u;
        if (typeof n != "undefined" && n) {
            if (r.removeHandlers(), t = n.target, i = $(t), !i.prop("disabled") && !i.parents().prop("disabled")) {
                switch (t.nodeName.toLowerCase()) {
                    case "div":
                        i = $(t).find('span.checkbox[data-inp-type="nrcb"]');
                        t = i[0];
                        break;
                    default:
                        i = $(t).parent().find('span.checkbox[data-inp-type="nrcb"]');
                        t = i[0]
                }
                r._bsInst._pollReqType === r._bsInst.reqTypePollTempBetReceipt && r._bsInst.resetPoll();
                f = new b365.Ui.Betslip.ItemInformation(t);
                e = f.itemIndexAndType();
                o = f.itemElement();
                $(o).hasClass("suspended") || (u = $(t).hasClass("checked"), !1 || (u ? ($(t).removeClass("checked"), u = !1) : ($(t).addClass("checked"), u = !0)), new b365.Ui.Betslip.NoReservesClickProcessor(this._bsInst, e[0], e[1], o).handle(u, n));
                r.attachHandlers()
            }
            n.stopPropagation();
            n.preventDefault()
        }
    },
    attachHandlers: function () {
        var n = this,
            i = $('div[data-inp-type="nrcb"], span[data-inp-type="nrcb"]', "#bsDiv"),
            t, r;
        if (n.removeHandlers(n), i.length == 0) {
            n._enabled = !1;
            return
        }
        for (t = 0, r = i.length; t < r; t++) n._noReservesClickHandlers.push(new b365.Ui.Betslip.ResponsiveClickHandler(i[t], $.proxy(n.handle, n), !1));
        n._enabled = !0
    },
    removeHandlers: function () {
        var n = this,
            t, i;
        if (n._noReservesClickHandlers.length > 0) {
            for (t = 0, i = n._noReservesClickHandlers.length; t < i; t++) n._noReservesClickHandlers[t]._element && n._noReservesClickHandlers[t].destroy();
            n._noReservesClickHandlers = []
        }
        n._enabled = !1
    }
};
Type.registerNamespace("b365.Ui.Betslip");
b365.Ui.Betslip.NoReservesClickProcessor = function (n, t, i, r) {
    this._bsInst = n;
    this._itemIndex = t;
    this._itemType = i;
    this._itemElement = r;
    this._noReservesCookieKey = "nr";
    this._isValid = function () {
        return typeof this._bsInst != "undefined" && typeof this._itemIndex != "undefined" && typeof this._itemType != "undefined" && typeof this._itemElement != "undefined"
    };
    this._updateSelectionLabel = function (n) {
        var t = $(this._itemElement).find(".no-reserves-hidden").text().split("|");
        $(this._itemElement).find(".selectionDescription").text(n ? t[1] : t[0])
    }
};
b365.Ui.Betslip.NoReservesClickProcessor.prototype = {
    handle: function (n, t) {
        if (typeof t != "undefined" && t && this._isValid()) {
            var i = this._bsInst.getBetItemById(this._itemType, this._itemIndex);
            i && (i.setStItem(this._noReservesCookieKey, n ? "1" : "0"), this._bsInst.updateState(), this._updateSelectionLabel(n))
        }
    }
};
b365.Ui.Formatter = function () {
    this._to2DP = function (n) {
        n = n.replace(",", ".");
        var t = n.indexOf(".");
        return t != -1 && n.length - t > 3 && (n = n.substr(0, t + 3)), n
    }
};
b365.Ui.Formatter.prototype = {
    padStringTo2DP: function (n) {
        var t, i;
        return typeof n != "string" && (n = String(n)), n = n.replace(/,/g, "."), n = n.trim(), n === "." || n === "" ? n = "0.00" : (n = this._to2DP(n), t = n.indexOf("."), t == -1 ? n += ".00" : (i = n.length - (t + 1), i == 0 ? n += "00" : i == 1 && (n += "0"))), n
    },
    numDecPlcs: function (n) {
        typeof n != "string" && (n = String(n));
        var t = ".";
        return n.indexOf(t) > -1 ? n.length - n.indexOf(t) - 1 : 0
    },
    roundValue: function (n) {
        var u, f, t, i, r, e;
        if (typeof n != "string" && (n = String(n)), n = n.trim(), n != "NaN" && n.indexOf(".") >= 0) {
            if (f = n.split("."), t = f[0], i = f[1], i.trim().length == 0) return n;
            i = i.length > 4 ? i.substring(0, 3) : i;
            r = i.substring(2, 3);
            Number(r) >= 5 ? (r = i.substring(1, 2), Number(r) == 9 ? (e = i.substring(0, 1), Number(e) == 9 ? (t = Number(t) + 1, u = t) : (r = Number(e) + 1, t = t + "." + r, u = t)) : (r = Number(r) + 1, r = String(i.substring(0, 1)) + String(r), t = t + "." + r, u = t)) : i.length == 1 ? (t = t + "." + i, u = t) : (t = t + "." + i.substring(0, 2), u = t)
        } else u = n === "" || n == "NaN" ? "" : isNaN(n) ? n : n;
        return u
    },
    roundDecimal: function (n) {
        return typeof n != "string" && (n = String(n)), n = n.replace(/,/g, "."), n = n.trim(), n === "." || n === "" ? "0.00" : this.padStringTo2DP(this.roundValue(n))
    },
    round: function (n, t) {
        return Math.round(parseFloat(n) * Math.pow(10, t)) / Math.pow(10, t)
    },
    roundFixed: function (n, t) {
        return this.round(n, t).toFixed(t)
    },
    roundDown: function (n, t, i) {
        if (i) return t = t || 0, (Math.floor(n * Math.pow(10, t)) / Math.pow(10, t)).toFixed(t);
        var r = n.toString(),
            u = r.indexOf(".");
        return r = u > -1 ? r.slice(0, u + 3) : r, (+r).toFixed(t)
    }
};
Type.registerNamespace("b365.Ui.Betslip");
b365.Ui.Betslip.AcceptChangesRequestDespatcher = function (n, t) {
    this._bsInst = n;
    this._bsController = t;
    this._isValid = function () {
        return typeof this._bsInst != "undefined"
    }
};
b365.Ui.Betslip.AcceptChangesRequestDespatcher.prototype = {
    despatch: function () {
        var r, f, y, e = 0,
            o, a, s = !1,
            v = -1,
            n, t, u, k, p, w, b, h, i, c, l;
        if (this._isValid()) {
            if (window.location.host.split(".").pop() == "au" && (r = $(".betCallDisabled"), r.length > 0))
                if (r.length > 1) new b365.Ui.Betslip.RemoveAllItemsRequestDespatcher(this._bsInst, this._bsController).despatch(null);
                else
                    for (f = 0, y = r.length; f < y; f++) new b365.Ui.Betslip.ItemDeleteExecutor(this._bsInst, this._bsController, r[f].getAttribute("data-item-id"), r[f].getAttribute("data-item-type")).execute();
            for (n = this._bsInst.getBetItems(this._bsInst.betTypeAll), l = -1, t = 0; t < n.length; t++) o = n[t].getStItem("olc"), h = n[t].getCnItem("id"), n[t].type == this._bsInst.betTypeNormal && n[t].toString().indexOf("il=") == -1 ? (h = n[t].getCnItem("fp"), i = $('li[data-item-fpid="' + h + '"]', this._bsWrapper)) : n[t].type == this._bsInst.betTypeMultiple ? i = $('li[data-item-id="' + h + '"][data-item-type="multiple"]', this._bsWrapper) : n[t].type == this._bsInst.betTypeCast ? (l += 1, i = $('li[data-item-id="' + l + '"][data-item-type="cast"]', this._bsWrapper), i.length == 0 && (i = $('li[data-item-id="' + l + '"][data-item-type="tote-cast"]', this._bsWrapper))) : n[t].toString().indexOf("il=") > -1 && (v++, i = $('li[data-item-id="' + v + '"][data-item-type="betbuilder"]', this._bsWrapper)), n[t].getStItem("ft") && n[t].getStItem("fbv") && n[t].setStItem("rs", n[t].getStItem("fbv")), n[t].getStItem("rs") && n[t].getStItem("rs").length > 0 && (u = n[t].getStItem("rs"), n[t].setStItem("st", u), n[t].setStItem("rs", ""), n[t].getStItem("ust") && n[t].setStItem("ust", u), c = $('input[class*="stk"]', i), c.length > 0 && (c[0].value = u, new b365.Ui.Betslip.StakeChangedHandler(this._bsInst, this._bsController).handle(c[0]))), a = i.attr("data-item-push"), a && a != "" && (o == "2" || o == "3") && (s = !0), o && (n[t].setStItem("olc", "0"), s = !0), u = n[t].getStItem("st"), k = n[t].getStItem("ew"), p = $blib.getItemOdds(bs.betTypeNormal, n[t]) || $blib.getItemOdds(bs.betTypeBetBuilder, n[t]), w = new b365.Ui.Betslip.TaxCalculator(this._bsInst), b = w.calcReturnsByLine(u, p), n[t].setStItem("tr", b), n[t].getCnItem("fp") && n[t].getStItem("_s") !== undefined && n[t].getStItem("_s") == "1" && (this._bsController.itemsRemoved(n[t].getCnItem("f") + "-" + n[t].getCnItem("fp"), !0), e++), n[t].toString().indexOf("il=") > -1 && n[t].getStItem("_s") === "1" && (new b365.Ui.Betslip.ItemDeleteExecutor(this._bsInst, this._bsController, v, i.attr("data-item-type")).execute(), e++);
            this._bsInst.updateState();
            this._bsInst.betSlipItemsChanged();
            e > 0 && (e != n.length ? s = !0 : (new b365.Ui.Betslip.RemoveAllItemsRequestDespatcher(this._bsInst, this._bsController).despatch(null), new b365.Ui.Betslip.ItemSubscriptionManager(this._bsInst).unsubscribe()));
            s ? (this._bsInst.refresh(this._bsInst.betTypeAllAccept), new b365.Ui.Betslip.ItemSubscriptionManager(this._bsInst).unsubscribe()) : ($(".acceptChanges", this._bsWrapper).addClass("hidden"), $("a.placeBet", this._bsWrapper).removeClass("hidden"), $(".oddsChange", this._bsWrapper).removeClass("oddsChange"), $(".hcapChange", this._bsWrapper).removeClass("hcapChange"), $(".errStk", this._bsWrapper).removeClass("errStk"), new b365.Ui.Betslip.MessageDisplayHandler(this._bsInst, this._bsController).hideMsg())
        }
    }
};
Type.registerNamespace("b365.Ui.Betslip");
b365.Ui.Betslip.AddBetConstructDecoder = function (n, t) {
    this._bsInst = n;
    this._construct = t;
    this._isValid = function () {
        return typeof this._bsInst != "undefined" && typeof this._construct != "undefined"
    };
    this._getSpecificType = function (n, t) {
        switch (n) {
            case this._bsInst.toteTypeUKTote:
                return t == this._bsInst.betTypeToteNonCast ? this._bsInst.betTypeToteNonCast : t == this._bsInst.betTypeTotePot ? this._bsInst.betTypeTotePot : this._bsInst.betTypeToteCast;
            case this._bsInst.toteTypeETote:
                return t == this._bsInst.betTypeToteNonCast ? this._bsInst.betTypeEToteNonCast : t == this._bsInst.betTypeTotePot ? this._bsInst.betTypeETotePot : this._bsInst.betTypeEToteCast;
            case this._bsInst.toteTypeUSTote:
                return t == this._bsInst.betTypeToteNonCast ? this._bsInst.betTypeUsToteNonCast : t == this._bsInst.betTypeTotePot ? this._bsInst.betTypeUsTotePot : this._bsInst.betTypeUsToteCast;
            default:
                return t == this._bsInst.betTypeToteNonCast ? this._bsInst.betTypeFrgnToteNonCast : t == this._bsInst.betTypeTotePot ? this._bsInst.betTypeFrgnTotePot : this._bsInst.betTypeFrgnToteCast
        }
    }
};
b365.Ui.Betslip.AddBetConstructDecoder.prototype = {
        betType: function () {
            var n = bs.betTypeNormal,
                i, r, t;
            if (this._isValid())
                if ($.isArray(this._construct)) {
                    if (this._construct[0].stype && this._construct[0].cmask) {
                        i = this._construct[0].stype;
                        r = this._construct[0].ttype;
                        switch (i) {
                            case "N":
                            case "I":
                                n = this._bsInst.betTypeCast;
                                break;
                            case "A":
                            case "O":
                                t = new b365.Ui.Betslip.CastMaskInfo(this._construct[0].cmask);
                                n = t.isToteCast(i) ? this._bsInst.betTypeCast : t.isTotePot() ? this._bsInst.betTypeTotePotAus : this._bsInst.betTypeCast;
                                break;
                            case "T":
                            case "R":
                            case "J":
                            case "E":
                                t = new b365.Ui.Betslip.CastMaskInfo(this._construct[0].cmask);
                                n = t.isToteCast(i) ? this._getSpecificType(r, this._bsInst.betTypeToteCast) : t.isTotePot() ? this._getSpecificType(r, this._bsInst.betTypeTotePot) : this._getSpecificType(r, this._bsInst.betTypeToteNonCast)
                        }
                    }
                } else this._construct.indexOf("bc=") > -1 ? n = bs.betTypeMultiple : this._construct.indexOf("il=") > -1 && (n = bs.betTypeBetBuilder);
            return n
        }
    },
    function () {
        Type.registerNamespace("b365.Ui.Betslip");
        b365.Ui.Betslip.AddBetHandler = function (n, t) {
            typeof $displayHelper != "undefined" && (n._betItems.length == 0 && $displayHelper.isPortraitMode() && $displayHelper.isPrematch() && window.MyBetsController.isInitialised() ? window.MyBetsController.showBetSlip() : $displayHelper.isPortraitMode() && !$displayHelper.isPrematch() && window.MyBetsController.isInitialised() ? window.MyBetsController.showBetSlip() : !$displayHelper.isPortraitMode() && window.MyBetsController.isInitialised() && window.MyBetsController.showBetSlip());
            this._bsInst = n;
            this._controller = t;
            this.totePotBetTypes = [this._bsInst.betTypeTotePot, this._bsInst.betTypeTotePotAus, this._bsInst.betTypeETotePot, this._bsInst.betTypeUsTotePot];
            this.MAX_POT_BET_COMBINATIONS = 1500;
            this._isValid = function () {
                return typeof this._bsInst != "undefined" && typeof this._controller != "undefined"
            };
            this._getConstruct = function (n) {
                var t = n;
                return typeof n == "string" || $.isArray(n) || (t = Array.prototype.slice.call(n)[0]), t || (t = n.ConstructString), t
            };
            this._failedToAddBet = function (n, t) {
                t === this._bsInst.betTypeNormal && n.length > 0 && $("#bsDiv").trigger("b365.Ui.Betslip.failedtoaddbet", n[0])
            };
            this._duplicateCheck = function (n) {
                for (var r = new b365.Ui.Betslip.DuplicateItemValidator(this._bsInst), i = !1, t = 0; t < n.length && !i; t++) i = r.isDuplicate(n[t]);
                return i
            }
        };
        b365.Ui.Betslip.AddBetHandler.prototype = {
            handle: function (n, t, i) {
                var k, v, p, w, b, l;
                if (this._isValid()) {
                    var r = [],
                        e = [],
                        a, u = this._getConstruct(n),
                        d = new b365.Ui.Betslip.AddBetConstructDecoder(this._bsInst, u),
                        o, s, h, f = !0;
                    if (betType = d.betType(), this._bsInst.getPendingPushBetStatus() > 0) {
                        k = new b365.Ui.Betslip.PushBetDialog(this._bsInst, this._controller, u, this._bsInst.getPendingPushBetStatus());
                        return
                    }
                    if (v = $("#bsDiv .betReceipt"), this._bsInst.setClearOnAdd(t === !0 || v.length > 0 && v.is(".visible")), o = this._bsInst.getClearOnAdd(), p = new b365.Ui.Betslip.AddBetTypeValidator(this._bsInst, this._controller).validate(betType, u), o || p) {
                        if (betType == bs.betTypeBetBuilder && (w = new b365.Ui.Betslip.AddBetBuilderValidator(this._bsInst).validate(this._bsInst, u), !w)) return;
                        if (this._bsInst._pollReqType === this._bsInst.reqTypePollTempBetReceipt && this._bsInst.resetPoll(), betType === this._bsInst.betTypeFrgnToteCast && (u = new b365.Ui.Betslip.ForeignToteConstructCorrector(this._bsInst, u).GetCorrectedConstruct()), this.totePotBetTypes.indexOf(betType) > -1 && (b = new b365.Ui.Betslip.CastBetItemsBuilder(this._bsInst, u)._getCombinations("", u[0].valuelist), b.length > this.MAX_POT_BET_COMBINATIONS && (a = !0, this._bsInst.maxSelections())), r = new b365.Ui.Betslip.AddBetItemsBuilder(this._bsInst, u).betItems(betType), r.length > 14 && (r = r.slice(0, 14), this._bsInst.maxSelections()), o || (s = this._bsInst.okToAdd(r.length) && !a)) {
                            if (h = o, o) {
                                for (var c = 0, y = this._bsInst.getBetItems(betType), g = y.length; c < g; c++) this._controller.itemsRemoved(y[c].getCnItem("f") + "-" + y[c].getCnItem("fp"));
                                this._bsInst.clearBets(!1);
                                s = this._bsInst.okToAdd(r.length)
                            } else e = this._bsInst.getBetItems(betType), h = !this._duplicateCheck(r);
                            h && s ? (e.length === 0 && (new b365.Ui.Betslip.DefaultSlipTypeSetter(this._bsInst).setSlipType(betType), this._bsInst.showBetSlip()), this._controller.isReqOnBetAddedEnabled() && this._bsInst.locked() || (e = e.concat(r), this._bsInst.setBetItems(e, betType), this._bsInst.updateState(), this._bsInst.betAdded(r), this._bsInst.betSlipItemsChanged()), this._controller.isReqOnBetAddedEnabled() && (this._bsInst.req(this._bsInst.reqTypeAddItems) || (this._failedToAddBet(r, betType), f = !1))) : h || (this._bsInst.unlock(), f = !1)
                        }
                        if ((!s || a) && (this._bsInst.unlock(), this._bsInst.maxSelections(), this._duplicateCheck(r) || (this._failedToAddBet(r, betType), f = !1)), f || this._controller.itemsRemoved(r[0].getCnItem("f") + "-" + r[0].getCnItem("fp")), f) {
                            var nt = this._controller && this._controller.betCallEnabled(),
                                tt = this._controller && this._controller.betCallTwilioEnabled(),
                                it = this._bsInst.containsPhoneOnlyBet(),
                                rt = this._controller._delegates.isAuthenticated();
                            it && (rt ? (l = this._bsInst.getClickToCallHandler(), l || (nt && (l = new b365.Ui.Betslip.BetCallHandler(this._bsInst, this._controller, tt)), this._bsInst.setClickToCallHandler(l))) : this._controller.betCallLoginPopupDisplayed || (this._controller.betCallLoginPopupDisplayed = !0, this._controller.clientLoginDelegate()));
                            this._controller.complexMultiplesCombinationsInit = !0
                        }
                        f && i && typeof i == "function" && i.call(this, r[0].getCnItem("id") || r[0].getCnItem("fp"))
                    } else betType == bs.betTypeBetBuilder && window.top.Locator.participantEvents.dispatchEvent({
                        type: "bb_incompatible"
                    }), new b365.Ui.Betslip.ConfirmationDialog(this._bsInst, this._controller).showIncompatibleSelectionsDialog(u)
                }
            }
        }
    }(),
    function () {
        Type.registerNamespace("b365.Ui.Betslip");
        b365.Ui.Betslip.DeleteBetHandler = function (n, t) {
            this._bsInst = n;
            this._controller = t;
            this._isValid = function () {
                return typeof this._bsInst != "undefined" && typeof this._controller != "undefined"
            }
        };
        b365.Ui.Betslip.DeleteBetHandler.prototype = {
            handle: function (n) {
                if (this._isValid()) {
                    var t = $blib.getBetItemIndex(n, this._bsInst);
                    t != -1 && new b365.Ui.Betslip.ItemDeleteExecutor(this._bsInst, this._controller, t, this._bsInst.betTypeNormal).execute()
                }
            }
        }
    }();
Type.registerNamespace("b365.Ui.Betslip");
b365.Ui.Betslip.AddBetItemsBuilder = function (n, t) {
    this._bsInst = n;
    this._construct = t;
    this._isValid = function () {
        return typeof this._bsInst != "undefined" && typeof this._construct != "undefined"
    }
};
b365.Ui.Betslip.AddBetItemsBuilder.prototype = {
    betItems: function (n) {
        var t = [];
        if (this._isValid()) switch (n) {
            case this._bsInst.betTypeCast:
            case this._bsInst.betTypeToteCast:
            case this._bsInst.betTypeUsToteCast:
            case this._bsInst.betTypeEToteCast:
            case this._bsInst.betTypeFrgnToteCast:
                t = new b365.Ui.Betslip.CastBetItemsBuilder(this._bsInst, this._construct).betItems();
                break;
            case this._bsInst.betTypeToteNonCast:
            case this._bsInst.betTypeUsToteNonCast:
            case this._bsInst.betTypeEToteNonCast:
            case this._bsInst.betTypeTotePot:
            case this._bsInst.betTypeUsTotePot:
            case this._bsInst.betTypeETotePot:
            case this._bsInst.betTypeFrgnToteNonCast:
            case this._bsInst.betTypeFrgnTotePot:
            case this._bsInst.betTypeTotePotAus:
                t = new b365.Ui.Betslip.ToteBetItemsBuilder(this._bsInst, this._construct).betItems();
                break;
            case this._bsInst.betTypeNormal:
            case this._bsInst.betTypeBetBuilder:
                t.push(new b365.Ui.BetDTO(n));
                t[0].parse(this._construct)
        }
        return t
    }
};
Type.registerNamespace("b365.Ui.Betslip");
b365.Ui.Betslip.AddBetTypeEToteValidator = function (n) {
    this._bsInst = n;
    this._isValid = function () {
        return typeof this._bsInst != "undefined"
    }
};
b365.Ui.Betslip.AddBetTypeEToteValidator.prototype = {
    validate: function (n) {
        var t = !1;
        return this._isValid() && (t = n == this._bsInst.betTypeEToteCast || n == this._bsInst.betTypeEToteNonCast || n == this._bsInst.betTypeETotePot), t
    }
};
Type.registerNamespace("b365.Ui.Betslip");
b365.Ui.Betslip.AddBetTypeIfRevIfBankerTeaserValidator = function (n, t) {
    this._bsInst = n;
    this._construct = t;
    this._isValid = function () {
        return typeof this._bsInst != "undefined"
    }
};
b365.Ui.Betslip.AddBetTypeIfRevIfBankerTeaserValidator.prototype = {
    validate: function (n) {
        var t = !1;
        return this._isValid() && (t = n == this._bsInst.betTypeNormal, this._construct && typeof this._construct == "string" && (this._construct.indexOf("c=2110") > -1 || this._construct.indexOf("c=2111") > -1)) ? !1 : t
    }
};
Type.registerNamespace("b365.Ui.Betslip");
b365.Ui.Betslip.AddBetTypeStandardValidator = function (n) {
    this._bsInst = n;
    this._isValid = function () {
        return typeof this._bsInst != "undefined"
    }
};
b365.Ui.Betslip.AddBetTypeStandardValidator.prototype = {
    validate: function (n) {
        var i = !0,
            t = this._bsInst.getBetItems(this._bsInst.betTypeTotePotAus);
        return n == this._bsInst.betTypeTotePotAus ? i = t.length > 0 && (t[0].getCnItem("spt") == "A" || t[0].getCnItem("spt") == "O") && new b365.Ui.Betslip.CastMaskInfo(t[0].getCnItem("cm")).isTotePot() : (i = !(t.length > 0 && (t[0].getCnItem("spt") == "A" || t[0].getCnItem("spt") == "O") && new b365.Ui.Betslip.CastMaskInfo(t[0].getCnItem("cm")).isTotePot()), i && (i = n == this._bsInst.betTypeNormal || n == this._bsInst.betTypeCast || n == bs.betTypeFrgnToteCast || n == bs.betTypeFrgnToteNonCast || n == bs.betTypeFrgnTotePot || n == this._bsInst.betTypeBetBuilder)), i
    }
};
Type.registerNamespace("b365.Ui.Betslip");
b365.Ui.Betslip.AddBetBuilderValidator = function (n) {
    this._bsInst = n;
    this._isValid = function () {
        return typeof this._bsInst != "undefined"
    }
};
b365.Ui.Betslip.AddBetBuilderValidator.prototype = {
    validate: function (n, t) {
        function s() {
            for (var r, t, n = 0; n < i.length; n++)
                if ((r = i[n].getStItem("f"), t = f(i[n].getCn("il"), "fp").sort(), t.length === i[n].getBBItems().length) && e === JSON.stringify(t) && r === o[0]) return !0;
            return !1
        }

        function f(n, t) {
            for (var u = new RegExp("(?:" + t + "=)([0-9]+[^#])", "gi"), i = [], r;
                (r = u.exec(n)) != null;) i.push(r[1]);
            return i
        }
        for (var u = this._bsInst.getBetItems(this._bsInst.itemTypeSingle), i = [], r = 0; r < u.length; r++) u[r].toString().indexOf("il=") > -1 && i.push(u[r]);
        var e = JSON.stringify(f(t, "fp").sort()),
            o = f(t, "f");
        return i.length >= 4 ? (bsApp.dispatchParticipantEvent({
            type: "bb_maxExceeded"
        }), bsApp.resetBetslipProgress(), !1) : i.length >= 1 && s(n) ? (bsApp.dispatchParticipantEvent({
            type: "bb_duplicate"
        }), bsApp.resetBetslipProgress(), !1) : !0
    }
};
Type.registerNamespace("b365.Ui.Betslip");
b365.Ui.Betslip.AddBetTypeUkToteValidator = function (n) {
    this._bsInst = n;
    this._isValid = function () {
        return typeof this._bsInst != "undefined"
    }
};
b365.Ui.Betslip.AddBetTypeUkToteValidator.prototype = {
    validate: function (n) {
        var t = !1;
        return this._isValid() && (t = n == this._bsInst.betTypeToteCast || n == this._bsInst.betTypeToteNonCast || n == this._bsInst.betTypeTotePot), t
    }
};
Type.registerNamespace("b365.Ui.Betslip");
b365.Ui.Betslip.AddBetTypeUsToteValidator = function (n) {
    this._bsInst = n;
    this._isValid = function () {
        return typeof this._bsInst != "undefined"
    }
};
b365.Ui.Betslip.AddBetTypeUsToteValidator.prototype = {
    validate: function (n) {
        var t = !1;
        return this._isValid() && (t = n == this._bsInst.betTypeUsToteCast || n == this._bsInst.betTypeUsToteNonCast || n == this._bsInst.betTypeUsTotePot), t
    }
};
Type.registerNamespace("b365.Ui.Betslip");
b365.Ui.Betslip.AddBetTypeValidator = function (n, t) {
    this._bsInst = n;
    this._controller = t;
    this._isValid = function () {
        return typeof this._bsInst != "undefined" && typeof this._controller != "undefined"
    }
};
b365.Ui.Betslip.AddBetTypeValidator.prototype = {
    validate: function (n, t) {
        var i = !0;
        if (this._bsInst.numItems() > 0) switch (this._bsInst.getSlipType()) {
            case this._bsInst.slipStandard:
                i = new b365.Ui.Betslip.AddBetTypeStandardValidator(this._bsInst).validate(n);
                break;
            case this._bsInst.slipBanker:
            case this._bsInst.slipIF:
            case this._bsInst.slipReverseIF:
            case this._bsInst.slipFixedTeaser:
                i = new b365.Ui.Betslip.AddBetTypeIfRevIfBankerTeaserValidator(this._bsInst, t).validate(n);
                n == this._bsInst.slipFixedTeaser || i || n != this._bsInst.betTypeCast || (this._bsInst.setValueInBSCookie("bt", this._bsInst.slipStandard), i = !0);
                break;
            case this._bsInst.slipUKTote:
                i = new b365.Ui.Betslip.AddBetTypeUkToteValidator(this._bsInst).validate(n);
                break;
            case this._bsInst.slipUSTote:
                i = new b365.Ui.Betslip.AddBetTypeUsToteValidator(this._bsInst).validate(n);
                break;
            case this._bsInst.slipETote:
                i = new b365.Ui.Betslip.AddBetTypeEToteValidator(this._bsInst).validate(n)
        }
        return i
    }
};
Type.registerNamespace("b365.Ui.Betslip");
b365.Ui.Betslip.CastMaskInfo = function (n) {
    this._castmask = n;
    this._isValid = function () {
        return typeof this._castmask != "undefined"
    }
};
b365.Ui.Betslip.CastMaskInfo.prototype = {
    isToteCast: function (n) {
        return n == "J" && this._castmask != "D" ? !0 : this._castmask == "E" || this._castmask == "T" || this._castmask == "W" || this._castmask == "S" || this._castmask == "Q"
    },
    isTotePot: function () {
        return this._castmask == "P" || this._castmask == "U" || this._castmask == "J" || this._castmask == "6" || this._castmask == "7" || this._castmask == "2" || this._castmask == "3" || this._castmask == "4"
    }
};
Type.registerNamespace("b365.Ui.Betslip");
b365.Ui.Betslip.CastBetItemsBuilder = function (n, t) {
    this._bsInst = n;
    this._construct = t;
    this._isValid = function () {
        return typeof this._bsInst != "undefined" && typeof this._construct != "undefined"
    };
    this._getTotePotItemConstructs = function (n, t) {
        for (var f = [], e = "#fp=", u, r, i = 0; i < t.valuelist.length; i++)
            for (u = 0; u < t.valuelist[i].length; u++) r = t.valuelist[i][u].split(":"), i === 0 && u === 0 && (n += "#cm=" + r[2] + "#tmn=" + r[4] + "#tmi=" + r[3]), e += r[5] + ":" + r[0] + ":" + r[6] + ":" + r[1] + (i == t.valuelist.length - 1 && u == t.valuelist[i].length - 1 ? "" : ",");
        return f.push(n + e + (t.mediaType !== "" ? "|#mt=" + t.mediaType + "#" : "")), f
    };
    this._getCombinations = function (n, t) {
        for (var r = [], u = t[0], f, i = 0; i < u.length; i++) n.indexOf(u[i]) == -1 && (f = n + (n === "" ? "" : ",") + u[i], t.length > 1 && t[1] ? r = r.concat(this._getCombinations(f, t.slice(1))) : r.push(f));
        return r
    };
    this._getNoneTotePotItemConstructs = function (n, t) {
        var u = [],
            r = "#fp=",
            f, i;
        if (t.ctype == "C" || t.cmask == "Q") {
            for (i = 0; i < t.valuelist[0].length; i++) r += t.valuelist[0][i] + (i == t.valuelist[0].length - 1 ? "" : ",");
            u.push(n + r)
        } else if (t.ctype == "B") {
            for (r += t.valuelist[0], i = 1; i < t.valuelist.length; i++) t.valuelist[i] && (r += "," + t.valuelist[i].toString());
            u.push(n + r + (t.mediaType !== "" ? "|#mt=" + t.mediaType + "#" : ""))
        } else
            for (f = this._getCombinations("", t.valuelist), i = 0; i < f.length; i++) u.push(n + r + f[i] + (t.mediaType !== "" ? "|#mt=" + t.mediaType + "#" : ""));
        return u
    };
    this._getCastItemConstructs = function (n, t) {
        for (var u = [], r = "#fp=", i = 0; i < t.valuelist.length; i++) t.valuelist[i] && (r += t.valuelist[i].join(",")), i != t.valuelist.length - 1 && t.valuelist[i + 1] && (r += "~");
        return u.push(n + r + "|#atc=" + t.atcValue + "#" + (t.mediaType !== "" ? "mt=" + t.mediaType + "#" : "")), u
    };
    this._isItalyExotics = function (n) {
        if (n.stype !== "I") return !1;
        var t = this._italianExoticsCastMaskLookup[n.cmask];
        return !!t && !!t[n.ctype]
    };
    this._getItalyExoticsNXP1CastItemConstructs = function (n, t) {
        var e = [],
            i, r, u, f;
        return t.valuelist[0] && !t.valuelist[1] ? i = t.valuelist[0] : t.valuelist[0] && t.valuelist[1] && !t.valuelist[2] ? (r = t.valuelist[0], u = t.valuelist[1]) : t.valuelist[0] && t.valuelist[1] && t.valuelist[2] && (i = t.valuelist[0], r = t.valuelist[1], u = t.valuelist[2]), i && (f = "#fp=" + i.join(","), e.push(n + f + "|" + (t.mediaType !== "" ? "mt=" + t.mediaType + "#" : ""))), r && u && (f = "#fp=" + r.join(",") + "~" + u.join(","), n = n.replace("ct=N", "ct=O"), e.push(n + f + "|" + (t.mediaType !== "" ? "mt=" + t.mediaType + "#" : ""))), e
    };
    this._getItalyExoticsCastItemConstructs = function (n, t) {
        for (var u = [], r = "#fp=", i = 0; i < t.valuelist.length; i++) t.valuelist[i] && (r += t.valuelist[i].join(",")), i != t.valuelist.length - 1 && t.valuelist[i + 1] && (r += "~");
        return u.push(n + r + "|" + (t.mediaType !== "" ? "mt=" + t.mediaType + "#" : "")), u
    }
};
b365.Ui.Betslip.CastBetItemsBuilder.prototype = {
    betItems: function () {
        for (var o = [], t = "", n, i, r, f, e, u = 0; u < this._construct.length; u++) {
            if (n = this._construct[u], t === "") switch (n.ttype) {
                case this._bsInst.toteTypeUKTote:
                    t = this._bsInst.betTypeToteCast;
                    break;
                case this._bsInst.toteTypeETote:
                    t = this._bsInst.betTypeEToteCast;
                    break;
                case this._bsInst.toteTypeUSTote:
                    t = this._bsInst.betTypeUsToteCast;
                    break;
                case this._bsInst.toteTypeForeignTote:
                    t = this._bsInst.toteTypeForeignTote;
                    break;
                default:
                    t = this._bsInst.betTypeCast
            }
            if (i = "pt=" + (t == this._bsInst.betTypeCast ? "C" : "T") + "B#spt=" + n.stype + (n.cmask == "P" ? "" : "#cm=" + n.cmask) + "#ct=" + n.ctype + (n.c2ID ? "#c2=" + n.c2ID : "#f=" + n.fixid) + (n.classificationId ? "#c=" + n.classificationId : ""), n.cmask == "P") r = this._getTotePotItemConstructs(i, n);
            else if (this._isItalyExotics(n)) r = n.cmask == "0" || n.cmask == "1" ? this._getItalyExoticsNXP1CastItemConstructs(i, n) : this._getItalyExoticsCastItemConstructs(i, n);
            else switch (n.stype) {
                case "A":
                case "O":
                case "N":
                    r = this._getCastItemConstructs(i, n);
                    break;
                default:
                    r = this._getNoneTotePotItemConstructs(i, n)
            }
            for (f = 0; f < r.length; f++) e = new b365.Ui.BetDTO(t), e.parse(r[f]), o.push(e)
        }
        return o
    },
    _italianExoticsCastMaskLookup: {
        "0": {
            N: !0,
            O: !0
        },
        "1": {
            N: !0,
            O: !0
        },
        "2": {
            N: !0,
            O: !0,
            T: !0,
            U: !0
        },
        "3": {
            N: !0,
            O: !0,
            Z: !0,
            T: !0,
            U: !0,
            V: !0
        },
        "4": {
            N: !0,
            O: !0,
            Z: !0,
            Q: !0,
            T: !0,
            U: !0,
            V: !0,
            W: !0
        },
        "5": {
            N: !0,
            O: !0,
            Z: !0,
            Q: !0,
            R: !0,
            T: !0,
            U: !0,
            V: !0,
            W: !0,
            X: !0
        }
    }
};
Type.registerNamespace("b365.Ui.Betslip");
b365.Ui.Betslip.ToteBetItemsBuilder = function (n, t) {
    this._bsInst = n;
    this._construct = t;
    this._isValid = function () {
        return typeof this._bsInst != "undefined" && typeof this._construct != "undefined"
    };
    this._addWinEwPlBet = function (n, t, i) {
        var u, r;
        n += "#f=" + t.fixid;
        n += t.stype == "J" ? "#o=0/0" : "";
        n += t.id ? "#id=" + t.id : "";
        var f = t.ctype == "E" || t.ctype == "H",
            o = f ? ":" : ",",
            e = "#fp=";
        if (f)
            for (r = 0; r < t.valuelist[0].length; r++) i.push(n + e + t.valuelist[0][r]);
        else
            for (u = t.valuelist[0].slice(o), r = 0; r < u.length; r++) i.push(n + e + u[r])
    };
    this._addPotBet = function (n, t, i, r) {
        n += "#tmn=" + t.totemn + "#tmi=" + t.totemi + "#c2=" + t.c2ID;
        i.push(n + this._getTotePotFid(t) + this._getTotePotFp(t) + (r == bs.betTypeTotePotAus ? "|#atc=" + t.atcValue : ""))
    };
    this._getTotePotFp = function (n) {
        for (var t = "#fp=", r, i = 0; i < n.valuelist.length; i++) {
            for (r = 0; r < n.valuelist[i].length; r++) t += n.valuelist[i][r] + "-";
            t.endsWith("-") && (t = t.substring(0, t.lastIndexOf("-")));
            t += ","
        }
        return t.endsWith(",") && (t = t.substring(0, t.lastIndexOf(","))), t
    };
    this._getTotePotFid = function (n) {
        return n.fixid && n.fixid != "" ? "#f=" + n.fixid : ""
    }
};
b365.Ui.Betslip.ToteBetItemsBuilder.prototype = {
    betItems: function (n) {
        var o = [],
            r, t, u, i, f, e;
        if (this._isValid())
            for (r = 0; r < this._construct.length; r++) {
                t = this._construct[r];
                t.stype != "T" && t.stype != "E" && t.ctype == "E" && (t.ctype = "H");
                u = "pt=TB#spt=" + t.stype + "#cm=" + t.cmask;
                i = [];
                switch (t.cmask) {
                    case "D":
                        u += "#ct=" + t.ctype;
                        this._addWinEwPlBet(u, t, i);
                        break;
                    default:
                        this._addPotBet(u, t, i, n)
                }
                for (f = 0; f < i.length; f++) e = new b365.Ui.BetDTO(n), e.parse(i[f]), o.push(e)
            }
        return o
    }
};
Type.registerNamespace("b365.Ui.Betslip");
b365.Ui.Betslip.DefaultSlipTypeSetter = function (n) {
    this._bsInst = n;
    this._isValid = function () {
        return typeof this._bsInst != "undefined"
    }
};
b365.Ui.Betslip.DefaultSlipTypeSetter.prototype = {
    setSlipType: function (n) {
        if (this._isValid()) {
            var t = this._bsInst.slipStandard;
            switch (n) {
                case this._bsInst.betTypeToteCast:
                case this._bsInst.betTypeToteNonCast:
                case this._bsInst.betTypeTotePot:
                    t = this._bsInst.slipUKTote;
                    break;
                case this._bsInst.betTypeUsToteCast:
                case this._bsInst.betTypeUsToteNonCast:
                case this._bsInst.betTypeUsTotePot:
                    t = this._bsInst.slipUSTote;
                    break;
                case this._bsInst.betTypeEToteCast:
                case this._bsInst.betTypeEToteNonCast:
                case this._bsInst.betTypeETotePot:
                    t = this._bsInst.slipETote
            }
            this._bsInst.setValueInBSCookie("bt", t)
        }
    }
};
Type.registerNamespace("b365.Ui.Betslip");
b365.Ui.Betslip.DuplicateItemValidator = function (n) {
    this._bsInst = n;
    this._isValid = function () {
        return typeof this._bsInst != "undefined"
    }
};
b365.Ui.Betslip.DuplicateItemValidator.prototype = {
        isDuplicate: function (n) {
            var r = !1,
                t;
            if (this._isValid()) {
                if (n.type == bs.betTypeBetBuilder) return !1;
                var i = this._bsInst.getBetItems(n.type),
                    f = n.getCnItem("pt"),
                    u = function (n, t) {
                        return n.getCnItem("spt") === t.getCnItem("spt") && n.getCnItem("cm") === t.getCnItem("cm") && n.getCnItem("ct") === t.getCnItem("ct") && n.getCnItem("f") === t.getCnItem("f") && n.getCnItem("fp") === t.getCnItem("fp")
                    };
                for (t = 0; !r && t < i.length; t++) switch (f) {
                    case "S":
                        r = i[t].getCnItem("pid") === n.getCnItem("pid") && i[t].getCnItem("mid") === n.getCnItem("mid");
                        break;
                    case "CB":
                        r = u(n, i[t]);
                        break;
                    case "TB":
                        switch (n.type) {
                            case bs.betTypeToteCast:
                            case bs.betTypeUsToteCast:
                            case bs.betTypeEToteCast:
                            case bs.betTypeToteNonCast:
                            case bs.betTypeUsToteNonCast:
                            case bs.betTypeEToteNonCast:
                                r = u(n, i[t])
                        }
                        break;
                    default:
                        i[t].getCnItem("fp") === n.getCnItem("fp") && i[t].getCnItem("f") == n.getCnItem("f") && i[t].getCnItem("pt") !== "S" && (r = i[t].getCnItem("Inc") == n.getCnItem("Inc") ? !0 : !1)
                }
            }
            return r
        }
    },
    function () {
        Type.registerNamespace("b365.Ui.Betslip");
        b365.Ui.Betslip.InProgressDisplayHandler = function (n, t) {
            this._bsInst = n;
            this._bsController = t;
            this._isValid = function () {
                return typeof this._bsInst != "undefined"
            };
            this._setText = function (n) {
                $("#bsDiv #pro>ul>li .progressMsg").html(n)
            }
        };
        b365.Ui.Betslip.InProgressDisplayHandler.prototype = {
            handle: function (n) {
                var s = n[0],
                    u = n[1],
                    h = n.length > 3 ? n[3] : "alert",
                    c = n.length > 4 && n[4] !== "undefined" ? n[4] : !0,
                    l = n.length > 5 && n[5] !== "undefined" ? n[5] : !0,
                    f, t, r, e, o, i;
                this._isValid() && (r = n[2], s == "show" ? (e = r == this._bsInst.reqTypeBetBrk, i = $("#bsDiv"), c && (r == this._bsInst.reqTypeReferBet || r == this._bsInst.reqTypePollReferredBet ? this._setText(betSlipML.processingbet + "<br/><br/>" + betSlipML.additionalstakereferred) : r == this._bsInst.reqTypePollTempBetReceipt && this._setText(betSlipML.processingbet), i.find(".bsError").addClass("hidden"), e ? this._bsInst.isSiteOverlaySpinnerShowing = this._bsController.showSiteOverlaySpinner() : (i.find("#pro").removeClass("hidden"), i.hasClass("receipt") || i.find(".footer").addClass("hidden"))), this._bsController.clientActionInProgress(!0), this._bsController && this._bsController.clientEnhancedMode() && l && (i.find("li").hasClass("disabledBetSlip") || (o = $('li[data-item-type$="multiple"], li[data-item-type$="single"], li[data-item-type$="cast"], li[data-item-type$="tote-single"], li[data-item-type$="tote-cast"], li[data-item-type$="tote-pot"], li[data-item-type$="tote-pot-leg"]', "#bsDiv"), this._bsController._enhancedBetSlipAnimations.disableBetSlip(o, i))), new b365.Ui.Betslip.EnhancedElementsLockUnlockHandler(this._bsInst, this._bsController).lock()) : (this._bsInst.isSiteOverlaySpinnerShowing && (this._bsInst.isSiteOverlaySpinnerShowing = !this._bsController.hideSiteOverlaySpinner()), t = $("#bsDiv"), $("#bsDiv #pro").addClass("hidden"), t.hasClass("receipt") && t.find(".footer").removeClass("hidden"), this._bsController.clientActionInProgress(!1), u && new b365.Ui.Betslip.MessageDisplayHandler(this._bsInst, this._bsController).showMsg(u, h), this._bsController && this._bsController.clientEnhancedMode() && $("li", t).hasClass("disabledBetSlip") && ($("li", t).hasClass("disableBetSlip") || $("li", t).hasClass("disabledBetSlip")) && (f = $('li[data-item-type$="multiple"], li[data-item-type$="single"], li[data-item-type$="cast"], li[data-item-type$="tote-single"], li[data-item-type$="tote-cast"], li[data-item-type$="tote-pot"], li[data-item-type$="tote-pot-leg"]', t), this._bsController._enhancedBetSlipAnimations.enableBetSlip(f, t)), new b365.Ui.Betslip.EnhancedElementsLockUnlockHandler(this._bsInst, this._bsController).unlock()), this._bsInst.contentChangedOnClient())
            }
        }
    }(),
    function () {
        Type.registerNamespace("b365.Ui.Betslip");
        var n;
        b365.Ui.Betslip.ConfirmationDialog = function (t, i) {
            this._bsInst = t;
            this._controller = i;
            this._closeAction = "close";
            this._referAction = "refer";
            this._italyConfirmStakes = "icStakes";
            this._clearAndAddAction = "clearAndAdd";
            this._isValid = function () {
                return typeof this._bsInst != "undefined"
            };
            this._clearDialogAndConstruct = function () {
                n = null;
                this._controller.ClearCurrentDialogRef()
            };
            this._handleCancel = function () {
                this.hideDialog();
                this._clearDialogAndConstruct();
                $("#bsDiv").find(".footer").removeClass("hidden")
            };
            this._handleClearAndAdd = function () {
                function r(n) {
                    this._controller.addToBetsBank(n)
                }
                var t = this,
                    i = n;
                this.hideDialog();
                this._clearDialogAndConstruct();
                window.bsApp.removeBets();
                new b365.Ui.Betslip.AddBetHandler(this._bsInst, this._controller).handle(i, !0, r);
                t._controller.refreshBetslip()
            };
            this._handleRefer = function () {
                new b365.Ui.Betslip.ReferBetRequestDespatcher(this._bsInst, this._controller).despatch()
            }
        };
        b365.Ui.Betslip.ConfirmationDialog.prototype = {
            showIncompatibleSelectionsDialog: function (t) {
                var r = this,
                    i = !1;
                typeof t != "undefined" && t && (n = t, t.indexOf("pom") > -1 ? i = !0 : (items = this._bsInst.getBetItems(), i = items.length > 0 && items[0].getStItem("pom") == "Y"), r._controller.showSiteConfirmation(r, "", i ? betSlipML.incompatiblectcselectionsclear : betSlipML.incompatibleselectionsclear, i ? betSlipML.ok : betSlipML.cont, this._clearAndAddAction, betSlipML.cancel, this._closeAction, "incompDialogue", !0))
            },
            handleClick: function (n) {
                var i = $(n.target),
                    r = i.attr("data-action"),
                    t;
                if (n.preventDefault(), n.stopPropagation(), !i.hasClass("disabled")) switch (r) {
                    case this._closeAction:
                        $("#closeButton").removeClass("disabled");
                        $("#okButton").removeClass("disabled");
                        this._handleCancel();
                        break;
                    case this._clearAndAddAction:
                        $("#closeButton").removeClass("disabled");
                        $("#okButton").removeClass("disabled");
                        this._handleClearAndAdd();
                        break;
                    case this._referAction:
                        $("#closeButton").addClass("disabled");
                        document.getElementById("closeButton").innerText = "";
                        t = $("#okButton");
                        t.addClass("disabled");
                        t[0].innerHTML = window.betSlipML.referringBet + '<span class="buttonSpinner"><\/span>';
                        this._handleRefer();
                        break;
                    case this._italyConfirmStakes:
                        this._bsInst.req(this._bsInst.reqTypeItalySplitStakeConfirm);
                        this.hideDialog()
                }
            },
            setDialog: function (n) {
                this._controller.SetCurrentDialogRef(n)
            }
        };
        b365.Ui.Betslip.ConfirmationDialog.prototype.hideDialog = function () {
            this._controller._dlg && this._controller._dlg.hideDialog()
        }
    }(),
    function () {
        Type.registerNamespace("b365.Ui.Betslip");
        var n = {
            None: 0,
            SystemDrawNoBet: 5,
            SystemHandicap: 6,
            SystemTotals: 7,
            AsianHcapQtrPointAboveInt: 8,
            AsianHcapQtrPointBelowInt: 9,
            GoalLineQtrPointAboveIntUnderOrBelowIntOver: 10,
            GoalLineQtrPointBelowIntUnderOrAboveIntOver: 11,
            AsianHcapInPlayWholePoint: 12,
            AsianHcapInPlayHalfPoint: 13,
            AsianHcapInPlayQtrPointAboveInt: 14,
            AsianHcapInPlayQtrPointBelowInt: 15,
            GoalLineHalfPoint: 16,
            GoalLineWholePoint: 17
        };
        b365.Ui.Betslip.PushBetDialog = function (n, t, i, r, u, f, e) {
            this._bsInst = n;
            this._controller = t;
            this._construct = i;
            this._pushStatus = r;
            this._betItemId = u;
            this._betItemType = f;
            this._betId = e;
            this._proceedAction = "ipProceed";
            this._cancelAction = "ipCancel";
            this._clearDialogAndConstruct = function () {
                this._construct = null;
                this._controller.ClearCurrentDialogRef()
            };
            this._handleCancel = function () {
                this._betItemId && this._betItemType && new b365.Ui.Betslip.ItemDeleteExecutor(this._bsInst, this._controller, this._betItemId, "single").execute();
                this.hideDialog();
                this._clearDialogAndConstruct()
            };
            this._handleProceed = function () {
                this._controller.highlightSelectedBets();
                this._controller.pushBetPopupAcceptedHandler(this._betId);
                this.hideDialog();
                this._clearDialogAndConstruct()
            };
            window.pushedConfig.getIsPSQFV4Enabled() ? this.checkIfRequired() : this._controller.showDialog(this, this.buildPushBetMessage(), !0)
        };
        b365.Ui.Betslip.PushBetDialog.prototype = {
            checkIfRequired: function () {
                var n = new window.top.ns_gen5_net.Loader,
                    t = this;
                n.completeHandler = function (i, r) {
                    t.checkIfRequiredComplete(i, r);
                    n = null
                };
                n.errorHandler = function (i) {
                    t.checkIfRequiredFailed(i);
                    n = null
                };
                n.load("/betSlip/quickbet.ashx?op=26&_" + (new Date).getTime(), {
                    method: "POST",
                    urlVariables: new window.top.ns_gen5_net.URLVariables("ns=" + this._construct),
                    contentType: "application/x-www-form-urlencoded",
                    withCredentials: !0
                })
            },
            checkIfRequiredComplete: function (n) {
                JSON.parse(n).message ? this._controller.showDialog(this, this.buildPushBetMessage(), !0) : (this._controller._bsInst.setPendingPushBet(0), this._controller.addBet(this._construct), this._controller.highlightSelectedBets())
            },
            checkIfRequiredFailed: function () {
                this._controller.showDialog(this, this.buildPushBetMessage(), !0)
            },
            buildPushBetMessage: function () {
                var t = "",
                    h, c, i, o, e, s, r, u, f, l;
                if ((this._pushStatus === "undefined" || this._pushStatus === null) && (h = $("li[data-item-id]", "#bsDiv"), c = h[h.length - 1], this._pushStatus = parseInt(c.getAttribute("data-item-push"))), this._pushStatus === n.None || this._pushStatus === n.AsianHcapInPlayHalfPoint || this._pushStatus === n.GoalLineHalfPoint) return "";
                switch (this._pushStatus) {
                    case n.SystemDrawNoBet:
                        t = window.betSlipML.pushDrawNoBetBody;
                        break;
                    case n.SystemHandicap:
                        t = window.betSlipML.pushHandicapBody;
                        break;
                    case n.SystemTotals:
                    case n.GoalLineWholePoint:
                        t = window.betSlipML.pushTotalBody;
                        break;
                    case n.AsianHcapQtrPointAboveInt:
                    case n.AsianHcapInPlayQtrPointAboveInt:
                        t = window.betSlipML.pushAsianHandicapHalfWinningBody;
                        break;
                    case n.AsianHcapQtrPointBelowInt:
                    case n.AsianHcapInPlayQtrPointBelowInt:
                        t = window.betSlipML.pushAsianHandicapHalfLosingBody;
                        break;
                    case n.GoalLineQtrPointAboveIntUnderOrBelowIntOver:
                        t = window.betSlipML.pushGoalLineHalfWinningBody;
                        break;
                    case n.GoalLineQtrPointBelowIntUnderOrAboveIntOver:
                        t = window.betSlipML.pushGoalLineHalfLosingBody;
                        break;
                    case n.AsianHcapInPlayWholePoint:
                        t = window.betSlipML.pushAsianHandicapInPlayWholePoint;
                        break;
                    default:
                        return ""
                }
                return f = document.createElement("a"), f.textContent = window.betSlipML.pushLinkText, f.setAttribute("data-action", "href"), l = "http://" + window.location.hostname.replace("mobile", "help") + this._controller.pushBetRulesLink(), f.setAttribute("href", l), f.setAttribute("target", "_blank"), i = document.createElement("div"), i.setAttribute("id", "italy-push-message"), i.setAttribute("class", "mobile"), o = document.createElement("span"), o.setAttribute("id", "italy-push-message-title"), o.innerText = window.betSlipML.pushMessageTitle, i.appendChild(o), e = document.createElement("div"), e.setAttribute("id", "italy-push-message-body"), e.innerHTML = t, i.appendChild(e), s = document.createElement("p"), s.setAttribute("id", "italy-push-message-more-info-link"), s.innerHTML = f.outerHTML, e.appendChild(s), r = document.createElement("a"), r.setAttribute("class", "italy-push-message-button"), r.setAttribute("id", "okButton"), r.setAttribute("data-action", "ipProceed"), r.innerText = window.betSlipML.ok, i.appendChild(r), sProps.instantBet || (u = document.createElement("a"), u.setAttribute("class", "italy-push-message-button"), u.setAttribute("id", "closeButton"), u.setAttribute("data-action", "ipCancel"), u.innerText = window.betSlipML.pushMarketCancel, i.appendChild(u)), this._controller._bsInst.setPendingPushBet(0), i
            },
            handleClick: function (n) {
                var t = $(n.target),
                    i = t.attr("data-action");
                if (n.preventDefault(), n.stopPropagation(), !t.hasClass("disabled")) switch (i) {
                    case this._cancelAction:
                        this._handleCancel();
                        break;
                    case this._proceedAction:
                        this._handleProceed()
                }
            },
            setDialog: function (n) {
                this._controller.SetCurrentDialogRef(n)
            }
        };
        b365.Ui.Betslip.PushBetDialog.prototype.hideDialog = function () {
            this._controller._dlg && this._controller._dlg.hideDialog()
        }
    }();
Type.registerNamespace("b365.Ui.Betslip");
b365.Ui.Betslip.BetMaxRequestDespatcher = function (n, t) {
    this._bsInst = n;
    this._bsController = t;
    this._maxBetKeySingles = "N";
    this._maxBetKeyCasts = "C";
    this._maxBetKeyMultiples = "M";
    this._maxBetKeyBetBuilder = "B";
    this._maxBetItemTypeSingle = "1";
    this._maxBetItemTypeBetBuilder = "22";
    this._maxBetItemTypeCast = "50";
    this._getKey = function (n) {
        return n == this._bsInst.itemTypeSingle ? this._maxBetKeySingles : n == this._bsInst.itemTypeCast ? this._maxBetKeyCasts : n == this._bsInst.itemTypeBetBuilder ? this._maxBetKeyBetBuilder : this._maxBetKeyMultiples
    };
    this._getMaxBetItemType = function (n, t) {
        return n == this._bsInst.itemTypeSingle ? this._maxBetItemTypeSingle : n === this._bsInst.itemTypeBetBuilder ? this._maxBetItemTypeSingle : n == this._bsInst.itemTypeCast ? this._maxBetItemTypeCast : this._bsInst.getBetItemById(this._bsInst.itemTypeMultiple, t).getCnItem("id")
    }
};
this._isValid = function () {
    return typeof this._bsInst != "undefined"
};
this._getMaxBetType = function (n) {
    return n == this._bsInst.itemTypeSingle ? this._bsInst.betTypeNormal : n == this._bsInst.itemTypeCast ? this._bsInst.betTypeCast : n == this._bsInst.itemTypeBetBuilder ? this._maxBetItemTypeBetBuilder : this._bsInst.betTypeMultiple
};
b365.Ui.Betslip.BetMaxRequestDespatcher.prototype = {
    despatch: function (n) {
        if (this._isValid())
            if (this._bsController._delegates.isAuthenticated()) {
                var i = new b365.Ui.Betslip.ItemInformation(n),
                    t = i.itemIndexAndType();
                this._bsInst.req(this._bsInst.reqTypeMaxBet, "key=" + this._getKey(t[1]) + "-" + t[0] + "-" + this._getMaxBetItemType(t[1], t[0]) + "-" + this._getMaxBetType(t[1]))
            } else new b365.Ui.Betslip.MessageDisplayHandler(this._bsInst, this._bsController).showMsg(betSlipML.pleaselogin)
    }
};
Type.registerNamespace("b365.Ui.Betslip");
b365.Ui.Betslip.IfBetActionChangeHandler = function (n) {
    this._bsInst = n;
    this._isValid = function () {
        return typeof this._bsInst != "undefined"
    }
};
b365.Ui.Betslip.IfBetActionChangeHandler.prototype = {
    handle: function (n, t) {
        var u, i;
        if (n > 0) u = this._bsInst.getBetItemById(this._bsInst.betTypeNormal, n), u.setStItem("ac", t.value);
        else {
            var f = this._bsInst.getBetItems(this._bsInst.betTypeNormal),
                r = $("#bsDiv .ifbetaction"),
                e = $(t).find("option:selected").text();
            for (i = 0; i < f.length; i++) f[i].setStItem("ac", t.value), r[i].selectedIndex = t.value == r[i].options[0].value ? 0 : 1, $(r[i]).parent(".betslip-select").attr("data-text", e)
        }
        this._bsInst.updateState()
    }
};
Type.registerNamespace("b365.Ui.Betslip");
b365.Ui.Betslip.BankerToggleRequestDespatcher = function (n, t) {
    this._bsInst = n;
    this._bsController = t;
    this._isValid = function () {
        return typeof this._bsInst != "undefined"
    }
};
b365.Ui.Betslip.BankerToggleRequestDespatcher.prototype = {
    despatch: function (n) {
        var t = $(n.target),
            i = n.target,
            r, u, f;
        this._isValid() && (t.hasClass("bankerIndicatorWrapper") && (t = t.find("button"), i = t[0]), i.tagName.toLowerCase() == "button" && (r = new b365.Ui.Betslip.ItemInformation(i), u = r.itemIndexAndType(), f = this._bsInst.getBetItemById(this._bsInst.betTypeNormal, u[0]), f.setStItem("bk", t.hasClass("selected") ? "0" : "1"), this._bsInst.toggledBankerSelectionState = !0, this._bsInst.updateState(), this._bsInst.refresh(this._bsInst.betTypeAll)))
    }
};
Type.registerNamespace("b365.Ui.Betslip");
b365.Ui.Betslip.OddsChangeHandler = function (n, t) {
    this._bsInst = n;
    this._bsController = t;
    this._serverErrorReqType = 99;
    this._isValid = function () {
        return typeof this._bsInst != "undefined"
    }
};
b365.Ui.Betslip.OddsChangeHandler.prototype = {
    handle: function (n, t) {
        if (this._isValid()) {
            var i = n.target,
                r = this._bsInst.getBetItemById(this._bsInst.betTypeNormal, t);
            i.value == "SP" ? (r.setStItem("sp", "1"), r.setStItem("tr", "")) : r.setStItem("sp", "0");
            $(i).parent(".betslip-select").attr("data-text", $(i).find("option:selected").text());
            this._bsInst.updateState();
            new b365.Ui.Betslip.TotalsCalculator(this._bsInst, this._bsController).calculate()
        }
    }
};
Type.registerNamespace("b365.Ui.Betslip");
b365.Ui.Betslip.OddsLineChangedHandler = function (n, t) {
    this._bsInst = n;
    this._bsController = t;
    this._bsWrapper = $("#bsDiv");
    this._isValid = function () {
        return typeof this._bsInst != "undefined"
    };
    this._roundDown = function (n, t) {
        return t = t || 0, Math.floor(n * Math.pow(10, t)) / Math.pow(10, t)
    }
};
b365.Ui.Betslip.OddsLineChangedHandler.prototype = {
    handle: function (n) {
        var t, s, e, r, y, u, i, h, v;
        if (this._isValid()) {
            var o = n || !1,
                c = this._bsInst.getBetItems(),
                f = "0",
                l = "0",
                a = this._bsInst.getBetItems(this._bsInst.betTypeBetBuilder);
            if (c.length === 0 && a.length === 0) return;
            if (s = [], e = 1, !o) {
                for (i = 0, h = c.length; i < h; i++) t = c[i], f = t.getStItem("olc"), t.getStItem("sp") === "1" && (y = !0), l = t.getStItem("_s"), (f && Number(f) > 0 || l && Number(l) > 0) && (o = !0), t.toString().indexOf("il=") > -1 ? (r = eval(t.getStItem("o")) + 1, s.push(t.getStItem("o"))) : (r = eval(t.getCnItem("o")) + 1, s.push(t.getCnItem("o"))), this._bsInst.useTruncated2dpPriceForReturnsCalc ? (r = Math.floor(r * 100 + 1e-6) / 100, e *= r) : window.location.host.split(".").pop() == "it" && window.pushedConfig.getIsPSQFV4Enabled() && (r = Math.floor(r * 1e3 + 1e-6) / 1e3, e *= r);
                u = document.getElementsByClassName("bs-multiple-default-odds");
                u && u.length > 0 && u[0] && (window.location.host.split(".").pop() == "it" ? (e = this._roundDown(e, 2), u[0].textContent = e) : u[0].textContent = y ? "" : window.top.ns_betcalculationslib_formatter.FormatMultipleOdds.Format(s, window.top.Locator.user.oddsTypeId), u[0].textContent.indexOf("e") > -1 && (u[0].textContent = ""))
            }
            if (s = null, !o)
                for (i = 0, h = a.length; i < h; i++)
                    if (t = a[i], f = t.getStItem("olc"), f && Number(f) > 0) {
                        o = !0;
                        break
                    } v = $("#BetSlipDialogueAddToBetslip");
            o ? ($(".acceptChanges", this._bsWrapper).removeClass("hidden"), $("a.placeBet", this._bsWrapper).addClass("hidden"), $("a", v).addClass("disabled").attr("data-nav", ""), new b365.Ui.Betslip.MessageDisplayHandler(this._bsInst, this._bsController).showMsg(betSlipML.oddsChanged)) : ($(".acceptChanges", this._bsWrapper).addClass("hidden"), $("a.placeBet", this._bsWrapper).removeClass("hidden"), $("a", v).removeClass("disabled").attr("data-nav", "AddToBetSlip"), new b365.Ui.Betslip.MessageDisplayHandler(this._bsInst, this._bsController).hideMsg());
            this._bsInst.changeBetslipHeight()
        }
    }
};
Type.registerNamespace("b365.Ui.Betslip");
b365.Ui.Betslip.UpdateStateHandler = function (n) {
    this._bsInst = n;
    this._isValid = function () {
        return typeof this._bsInst != "undefined"
    }
};
b365.Ui.Betslip.UpdateStateHandler.prototype = {
    handle: function () {
        this._isValid() && (this._bsInst.setValueInBSCookie("ns", $bto.serialize(this._bsInst.getBetItems(this._bsInst.betTypeNormal))), this._bsInst.setValueInBSCookie("ms", $bto.serialize(this._bsInst.getBetItems(this._bsInst.betTypeMultiple))), this._bsInst.setValueInBSCookie("cs", $bto.serialize(this._bsInst.getBetItems(this._bsInst.betTypeCast))))
    }
};
Type.registerNamespace("b365.Ui.Betslip");
b365.Ui.Betslip.RestoreStateHandler = function (n) {
    this._bsInst = n;
    this._isValid = function () {
        return typeof this._bsInst != "undefined"
    }
};
b365.Ui.Betslip.RestoreStateHandler.prototype = {
    handle: function () {
        this._isValid() && (this._bsInst.setBetItems($bto.parseCookieString(this._bsInst.getValueFromBSCookie("ns", ""), this._bsInst.betTypeNormal), this._bsInst.betTypeNormal), this._bsInst.setBetItems($bto.parseCookieString(this._bsInst.getValueFromBSCookie("ms", ""), this._bsInst.betTypeMultiple), this._bsInst.betTypeMultiple), this._bsInst.setBetItems($bto.parseCookieString(this._bsInst.getValueFromBSCookie("cs", ""), this._bsInst.betTypeCast), this._bsInst.betTypeCast), this._bsInst.betSlipItemsChanged())
    }
};
Type.registerNamespace("b365.Ui.Betslip");
b365.Ui.Betslip.PlaceBetErrorHandler = function (n, t) {
    this._bsInst = n;
    this._bsController = t;
    this._isValid = function () {
        return typeof this._bsInst != "undefined"
    }
};
b365.Ui.Betslip.PlaceBetErrorHandler.prototype = {
    handle: function () {
        if (this._isValid()) {
            var n = $("#bsDiv");
            $(".emptyBetslip").hide();
            n.removeClass("editMode");
            $("a.acceptChanges", n).addClass("hidden");
            $("a.placeBet", n).addClass("hidden");
            $("a.gotomybets", n).removeClass("hidden");
            this._bsInst.betslipError();
            new b365.Ui.Betslip.ViewResetter(this._bsInst, this._bsController).reset();
            this._bsInst.addReceiptFooterLinks();
            new b365.Ui.Betslip.FooterLinksSlipRender(this._bsInst, $(".footer")).render();
            new b365.Ui.Betslip.RemoveAllItemsRequestDespatcher(this._bsInst, this._bsController).despatch(null);
            $("#pro", n).addClass("hidden");
            n.hasClass("receipt") || $(".footer", n).removeClass("hidden")
        }
    }
};
Type.registerNamespace("b365.Ui.Betslip");
b365.Ui.Betslip.CastBreakdownRequestDespatcher = function (n, t) {
    this._bsInst = n;
    this._bsController = t;
    this._isValid = function () {
        return typeof this._bsInst != "undefined"
    }
};
b365.Ui.Betslip.CastBreakdownRequestDespatcher.prototype = {
    despatch: function (n) {
        var t, i, r;
        if (this._isValid()) {
            if (t = this._bsInst.readBSCookieValue(), i = !1, t || !window.top.safeSessionStorage.getItem("betstringbackup") || (this._bsInst.restoreBSCookieValueFromBackup(), t = this._bsInst.readBSCookieValue(), t && (i = !0, this._bsInst.restoreState())), !t) return;
            r = new b365.Ui.Betslip.BetBreakdownKeyGenerator(this._bsInst, this._bsInst.getBetItemById(this._bsInst.itemTypeCast, n), this._bsInst.itemTypeCast, n).generate();
            this._bsController.showBetslipBreakdownDialog(r);
            i && (this._bsInst.backupBSCookieValue(this._bsInst._betSlipCookieKey), this._bsInst.setValueInBSCookie(null, ""), this._bsInst.restoreState())
        }
    }
};
Type.registerNamespace("b365.Ui.Betslip");
b365.Ui.Betslip.AusToteToolTipHtmlBuilder = function (n) {
    this._bsController = n;
    this._activePopup = null;
    this._ausPopUp = null;
    this._siteClickHandlers = [];
    this._betSlipWrapper = $("#bsDiv");
    this._overlay = null;
    this._events = []
};
b365.Ui.Betslip.AusToteToolTipHtmlBuilder.prototype = {
    getHtml: function (n) {
        return "<span>" + n + "<\/span>"
    },
    attachHandlers: function () {
        var n = $(".ausHelp");
        for (i = 0, il = n.length; i < il; i++) this._events.push(this.addListener(n[i], "mouseover", this, this._useCapture)), this._events.push(this.addListener(n[i], "mouseout", this, this._useCapture))
    },
    handleEvent: function (n) {
        n.type === "mouseover" && n.target === n.currentTarget ? this.showInfo(n.target) : (mouseOutTarget = n.relatedTarget || n.fromElement, n.type === "mouseout" && mouseOutTarget.parentElement !== n.currentTarget && this.hidePopUpMenu())
    },
    destroy: function () {
        for (var n = this._events.length - 1; n >= 0; n -= 1) this._events[n].destroy();
        this._events = []
    },
    addListener: function (n, t, i, r) {
        if (n.addEventListener) return n.addEventListener(t, i, r), {
            destroy: function () {
                n.removeEventListener(t, i, r)
            }
        };
        var u = function () {
            i.handleEvent(window.event, i)
        };
        return n.attachEvent("on" + t, u), {
            destroy: function () {
                n.detachEvent("on" + t, u)
            }
        }
    },
    showInfo: function (n) {
        var t = n.parentElement,
            i;
        t.className.indexOf("show") < 0 ? (this.hidePopUpMenu(), i = this, $("#bsDiv li.keypad").length > 0 ? setTimeout(function () {
            i.displayInfo(n, t)
        }, 250) : i.displayInfo(n, t)) : (this._ausPopUp && ($(this._ausPopUp).removeClass("show"), $(this._activePopup).removeClass("show"), $(this._activePopup)[0].appendChild(this._ausPopUp)), this.setOverlay(), this._activePopup = null, this._ausPopUp = null)
    },
    displayInfo: function (n, t) {
        var i = this,
            c = t.getElementsByClassName("bs-Tote_Popup")[0],
            s, h, r;
        if (i._ausPopUp = c.cloneNode(!0), i._ausPopUp) {
            var l = $("#betslipContainer")[0].getBoundingClientRect().left,
                f = n.getBoundingClientRect().left - l,
                o = n.getBoundingClientRect().top - i._betSlipWrapper[0].getBoundingClientRect().top;
            sProps.instantBet && (s = document.getElementsByClassName("ib-BsHeader")[0], o += s.getBoundingClientRect().height);
            h = this._betSlipWrapper[0].getBoundingClientRect().bottom - n.getBoundingClientRect().bottom;
            r = 0;
            i._betSlipWrapper[0].appendChild(this._ausPopUp);
            $(i._ausPopUp).addClass("show");
            f - 90 > 10 ? (r = f - 90, i._ausPopUp.style.left = f - 90 + "px") : r = 30;
            i._ausPopUp.style.left = r + "px";
            var e = i._ausPopUp.getBoundingClientRect().height,
                a = n.getBoundingClientRect().top,
                v = n.getBoundingClientRect().bottom,
                u = i._ausPopUp.getElementsByClassName("bs-Tote_Nib")[0];
            h >= e || e > a ? (i._ausPopUp.style.top = o + 20 + "px", u.className = u.className.replace(" bottom", ""), u.style.left = f - r + "px") : (i._ausPopUp.style.top = o - (e + 10) + "px", u.className += " bottom", u.style.top = e - 2 + "px", u.style.left = f - r + "px")
        }
        i._activePopup && (i._activePopup.className = i._activePopup.className.replace(" show", ""));
        i._activePopup = t
    },
    setOverlay: function () {
        var n = this;
        this._overlay = document.createElement("div");
        this._overlay.setAttribute("class", "popupOverlay");
        this._betSlipWrapper[0].appendChild(this._overlay);
        this._overlay.addEventListener("touchend", function (t) {
            n.hideOverlay();
            t.preventDefault()
        });
        this._overlay.addEventListener("touchmove", function (n) {
            n.preventDefault()
        }, !0)
    },
    hideOverlay: function () {
        var n = this;
        this._overlay && (event && event.stopPropagation(), this.hidePopUpMenu(), this._overlay.removeEventListener("touchend", n.hideOverlay, !1), this._overlay.removeEventListener("touchmove", function () {}, !1), this._betSlipWrapper[0].removeChild(this._overlay), this._overlay = null)
    },
    hidePopUpMenu: function () {
        for (var t = document.getElementsByClassName("bs-Tote_Popup"), n = 0; n < t.length; n++) t[n].className.indexOf("show") > -1 && (t[n].className = t[n].className.replace(" show", ""), t[n].parentNode.removeChild(t[n]));
        if (this._ausPopUp && ($(this._ausPopUp).removeClass("show"), $(this._activePopup).removeClass("show")), this._activePopup = null, this._ausPopUp = null, this._siteClickHandlers.length > 0) {
            for (n = 0, il = this._siteClickHandlers.length; n < il; n++) this._siteClickHandlers[n]._element && this._siteClickHandlers[n].destroy();
            this._siteClickHandlers = []
        }
    }
};
Type.registerNamespace("b365.Ui.Betslip");
b365.Ui.Betslip.SingleToolTipHtmlBuilder = function () {
    this._alwaysInclude = "*~"
};
b365.Ui.Betslip.SingleToolTipHtmlBuilder.prototype = {
    getHtml: function (n, t) {
        var r = n.find("input[data-inp-type='ewcb']").length > 0 || t.length >= 3 && t[2].startsWith(this._alwaysInclude),
            u, i;
        return r && (t[2] = t[2].replace(this._alwaysInclude, "")), u = n.hasClass("hdCap"), i = "<label class='ttHead'>" + t[0] + "<\/label><br />", i += t[1] && t[1].length > 0 ? "<label>" + t[1] + "<\/label><br />" : "", i += "<label>", i += $("#bsDiv .betReceipt").length == 0 && n.children("div.pitcher").length > 0 ? n.find("div.pitcher").find(".pitcher-sel")[0].options[0].selected ? t[3] : "(" + n.find("div.pitcher .pitcher-sel>option:selected").text() + ")" : t[3] && t[3].length > 0 ? t[3] : "", i += (u ? " " + n.find(".hdCapDisplay").text() : "") + "<\/label><br/>", t.length == 5 && t[4] != "" && (i += "<label>" + t[4] + "<\/label><br />"), r && (i += t[2]), i
    }
};
Type.registerNamespace("b365.Ui.Betslip");
b365.Ui.Betslip.ToteSingleToolTipHtmlBuilder = function () {};
b365.Ui.Betslip.ToteSingleToolTipHtmlBuilder.prototype = {
    getHtml: function (n) {
        var t = "",
            r;
        return n.length > 2 && n[2].length > 0 && n[2].indexOf("#") > -1 && (r = n[i].split("#"), t += "<br /><label>" + r[0] + " (" + r[1] + ")<\/label>"), t += "<br /><label>" + n[3] + "<\/label>", "<label class='ttHead'>" + n[0] + "<\/label><br /><label>" + n[1] + "<\/label>" + t
    }
};
Type.registerNamespace("b365.Ui.Betslip");
b365.Ui.Betslip.UKToteBetStakeChangedHandler = function (n) {
    this._bsInst = n;
    this._stakeCookieKey = "st";
    this._eachWayCookieKey = "ew";
    this._betCountCookieKey = "bc";
    this._isValid = function () {
        return typeof this._bsInst != "undefined"
    }
};
b365.Ui.Betslip.UKToteBetStakeChangedHandler.prototype = {
    handle: function (n) {
        var s, o;
        if (this._isValid()) {
            var b = $(n),
                h = new b365.Ui.Betslip.ItemInformation(n),
                c = h.itemIndexAndType(),
                l = h.itemElement();
            $blib.isDecimal(n.value) == !1 && (n.value = "");
            var w = n.getAttribute("data-no-convert") ? !0 : !1,
                t = new b365.Ui.Formatter,
                i = Number($("#bsDiv>ul:first-child").attr("data-xrte"));
            (i == 0 || w == !0) && (i = 1);
            var a = Math.pow(10, t.numDecPlcs(i)),
                r = this._bsInst.getBetItemById(c[1], c[0]),
                u = r.getStItem(this._betCountCookieKey);
            typeof u == "undefined" && (u = 1);
            r.getStItem(this._eachWayCookieKey) == "1" && (u = u * 2);
            var f = t.roundValue(n.value),
                v = Math.pow(10, t.numDecPlcs(f)),
                y = t.roundDecimal(String(u * f)),
                e = $(".totestkbc", l),
                p = $(".totestkuc", l);
            e.length > 0 || p.length > 0 ? (s = i == 0 ? 0 : t.roundDecimal(String(Number(f) * v * i * a / a / v)), o = i == 0 ? 0 : t.roundDecimal(String(s * u)), p.text(o == "0" ? "" : o), +o > 0 ? (e.text(o), e.show()) : (e.text(""), e.hide()), r.setStItem("st", s), e.text(y == "0" ? "" : y)) : r.setStItem("st", f);
            r.setStItem("gust", f);
            r.setStItem("gst", f)
        }
    }
};
Type.registerNamespace("b365.Ui.Betslip");
b365.Ui.Betslip.USToteBetStakeChangedHandler = function (n) {
    this._bsInst = n;
    this._stakeCookieKey = "st";
    this._eachWayCookieKey = "ew";
    this._betCountCookieKey = "bc";
    this._isValid = function () {
        return typeof this._bsInst != "undefined"
    }
};
b365.Ui.Betslip.USToteBetStakeChangedHandler.prototype = {
    handle: function (n) {
        var o, e, s, h;
        if (this._isValid()) {
            var d = $(n),
                c = new b365.Ui.Betslip.ItemInformation(n),
                l = c.itemIndexAndType(),
                a = c.itemElement();
            $blib.isDecimal(n.value) == !1 && (n.value = "");
            var v = n.getAttribute("data-no-convert") ? !0 : !1,
                t = new b365.Ui.Formatter,
                i = Number($("#bsDiv>ul:first-child").attr("data-xrte"));
            (i == 0 || v == !0) && (i = 1);
            o = Math.pow(10, t.numDecPlcs(i));
            e = Number($("#bsDiv>ul:first-child").attr("data-xrte-us"));
            (e == 0 || v == !0) && (e = 1);
            var y = Math.pow(10, t.numDecPlcs(e)),
                r = this._bsInst.getBetItemById(l[1], l[0]),
                u = r.getStItem(this._betCountCookieKey);
            typeof u == "undefined" && (u = 1);
            r.getStItem(this._eachWayCookieKey) == "1" && (u = u * 2);
            var f = t.roundValue(n.value),
                p = Math.pow(10, t.numDecPlcs(f)),
                w = t.roundDecimal(String(u * f)),
                b = $(".totestkbc", a),
                k = $(".totestkuc", a);
            b.length > 0 || k.length > 0 ? (s = i == 0 ? 0 : t.roundDecimal(String(Number(f) * p * e * y / y / p * i * o / o)), h = i == 0 ? 0 : t.roundDecimal(String(s * u)), k.text(h == "0" ? "" : window.top.ns_gen5_util.CurrencyFormatter.ApplyDelimiterAndGroupSeparator(h)), r.setStItem("st", s), b.text(w == "0" ? "" : w)) : r.setStItem("st", f);
            r.setStItem("gust", f);
            r.setStItem("gst", f)
        }
    }
};
Type.registerNamespace("b365.Ui.Betslip");
b365.Ui.Betslip.ToteStakeChangedHandler = function (n) {
    this._bsInst = n;
    this._isValid = function () {
        return typeof this._bsInst != "undefined"
    }
};
b365.Ui.Betslip.ToteStakeChangedHandler.prototype = {
    handle: function (n) {
        if (this._isValid()) {
            switch (this._bsInst.getSlipType()) {
                case this._bsInst.slipUKTote:
                    new b365.Ui.Betslip.UKToteBetStakeChangedHandler(this._bsInst).handle(n);
                    break;
                case this._bsInst.slipUSTote:
                    new b365.Ui.Betslip.USToteBetStakeChangedHandler(this._bsInst).handle(n);
                    break;
                default:
                    new b365.Ui.Betslip.UKToteBetStakeChangedHandler(this._bsInst).handle(n)
            }
            this._bsInst.updateState()
        }
    }
};
Type.registerNamespace("b365.Ui.Betslip");
b365.Ui.Betslip.ToteCastToolTipHtmlBuilder = function () {};
b365.Ui.Betslip.ToteCastToolTipHtmlBuilder.prototype = {
    getHtml: function (n, t) {
        return "<label class='ttHead'>" + t[0] + "<\/label><br /><label>" + t[1] + "<\/label><br/>" + $(n).closest(".bs-tt").html()
    }
};
Type.registerNamespace("b365.Ui.Betslip");
b365.Ui.Betslip.TotePotToolTipHtmlBuilder = function () {};
b365.Ui.Betslip.TotePotToolTipHtmlBuilder.prototype = {
    getHtml: function (n) {
        return "<label class='ttHead'>" + n[0] + "<\/label><br /><label>" + n[1] + "<\/label><br /><label>" + n[2] + "<\/label>"
    }
};
Type.registerNamespace("b365.Ui.Betslip");
b365.Ui.Betslip.TotePotLegDeleteExecutor = function (n, t, i, r) {
    this._bsInst = n;
    this._legIndex = i;
    this._legType = r;
    this._legEle = t;
    this._isValid = function () {
        return typeof this._bsInst != "undefined" && typeof this._legIndex != "undefined" && typeof this._legType != "undefined" && typeof this._legEle != "undefined"
    }
};
b365.Ui.Betslip.TotePotLegDeleteExecutor.prototype = {
    execute: function () {
        var n, r, i, u;
        if (this._isValid()) {
            var c = new b365.Ui.Betslip.ItemInformation(this._legEle),
                s = c.itemIndexAndType(),
                h = this._bsInst.getBetItemById(s[1], s[0]),
                f = this._legIndex.split(":"),
                e = h.getCnItem("fp").split(","),
                t = e[f[0] - 1].split("-"),
                l = t.length,
                o = -1;
            for (n = l - 1; o < 0; n--) o = t[n].startsWith(f[1]) ? n : -1;
            for (t.splice(o, 1), r = "", n = 0; n < e.length; n++) {
                if (i = e[n], n == f[0] - 1)
                    for (i = "", u = 0; u < t.length; u++) i += (i.length > 0 ? "-" : "") + t[u];
                r += (r.length > 0 ? "," : "") + i
            }
            h.setCnItem("fp", r);
            this._bsInst.updateState();
            this._bsInst.req(this._bsInst.reqTypeRefreshSlip)
        }
    }
};
Type.registerNamespace("b365.Ui.Betslip");
b365.Ui.Betslip.ConfirmBetRequestDespatcher = function (n, t) {
    this._bsInst = n;
    this._bsController = t;
    this._isValid = function () {
        return typeof this._bsInst != "undefined"
    }
};
b365.Ui.Betslip.ConfirmBetRequestDespatcher.prototype = {
    despatch: function () {
        this._isValid() && this._bsInst.req(this._bsInst.reqTypeConfirmBet)
    }
};
Type.registerNamespace("b365.Ui.Betslip");
b365.Ui.Betslip.PitcherDetailsRequestDespatcher = function (n) {
    this._bsInst = n;
    this._isValid = function () {
        return typeof this._bsInst != "undefined"
    }
};
b365.Ui.Betslip.PitcherDetailsRequestDespatcher.prototype = {
    despatch: function (n) {
        if (this._isValid()) {
            var t = n.target;
            t.tagName == "A" && this._bsInst.req(this._bsInst.reqTypePitcher, "key=B-" + t.href.split("_")[1])
        }
    }
};
Type.registerNamespace("b365.Ui.Betslip");
b365.Ui.Betslip.CastToolTipHtmlBuilder = function () {};
b365.Ui.Betslip.CastToolTipHtmlBuilder.prototype = {
    getHtml: function (n, t) {
        return "<label class='ttHead'>" + t[0] + "<\/label><br /><label>" + t[1] + "<\/label><br />" + $(n).find(".bs-tt").html()
    }
};
Type.registerNamespace("b365.Ui.Betslip");
b365.Ui.Betslip.TeaserChangeHandler = function (n) {
    this._bsInst = n;
    this._teaserItemCookieKey = "ti";
    this._isValid = function () {
        return typeof this._bsInst != "undefined"
    }
};
b365.Ui.Betslip.TeaserChangeHandler.prototype = {
    handle: function (n) {
        if (this._isValid()) {
            var t = n.target;
            t.selectedIndex > -1 && (this._bsInst.setValueInBSCookie("ti", t.options[t.selectedIndex].value), this._bsInst.updateState(), this._bsInst.refresh(this._bsInst.betTypeAll))
        }
    }
};
Type.registerNamespace("b365.Ui.Betslip");
b365.Ui.Betslip.AusToteChangeHandler = function (n) {
    this._bsInst = n;
    this._isValid = function () {
        return typeof this._bsInst != "undefined"
    }
};
b365.Ui.Betslip.AusToteChangeHandler.prototype = {
    handle: function (n, t, i) {
        if (this._isValid()) {
            var r = $(n.target),
                f = this._bsInst.getBetItemById(i, t),
                u = $(r).find("option:selected");
            f.setStItem("atc", u.val());
            $(r).parent(".betslip-select").attr("data-text", u.text());
            this._bsInst.updateState()
        }
    }
};
Type.registerNamespace("b365.Ui.Betslip");
b365.Ui.Betslip.ForeignToteConstructCorrector = function (n, t) {
    this._bsInst = n;
    this._construct = t;
    this._isValid = function () {
        return typeof this._bsInst != "undefined" && typeof this._construct != "undefined"
    }
};
b365.Ui.Betslip.ForeignToteConstructCorrector.prototype = {
    GetCorrectedConstruct: function () {
        if ($.isArray(this._construct))
            for (var n = 0; n < this._construct.length; n++)(this._construct[n].cmask == "1" || this._construct[n].cmask == "2" || this._construct[n].cmask == "3" || this._construct[n].cmask == "4") && (this._construct[n].ctype = "C");
        return this._construct
    }
};
Type.registerNamespace("b365.Ui.Betslip");
b365.Ui.Betslip.PollingExpiredHandler = function (n, t) {
    this._bsInst = n;
    this._bsController = t;
    this._isValid = function () {
        return typeof this._bsInst != "undefined"
    }
};
b365.Ui.Betslip.PollingExpiredHandler.prototype = {
    handle: function (n) {
        if (this._isValid() && (n[0] === this._bsInst.reqTypePollTempBetReceipt && $("#bsDiv").find("[id^=tempbetstatus_title_].pending").removeClass("pending").addClass("timedout"), this._bsInst.resetPoll(), new b365.Ui.Betslip.LockUnlockHandler(this._bsInst, this._bsController).handle(!1, !1), new b365.Ui.Betslip.InProgressDisplayHandler(this._bsInst, this._bsController).handle(["hide", betSlipML.pleasecheckmembers]), n[0] === this._bsInst.reqTypePollReferredBet)) {
            var t = this._bsController.GetCurrentDialogRef();
            t && t.hideDialog()
        }
    }
};
Type.registerNamespace("b365.Ui.Betslip");
b365.Ui.Betslip.PollBetRequestDespatcher = function (n, t) {
    this._bsInst = n;
    this._bsController = t;
    this._isValid = function () {
        return typeof this._bsInst != "undefined"
    }
};
b365.Ui.Betslip.PollBetRequestDespatcher.prototype = {
    despatch: function (n) {
        var i, t;
        this._isValid() && (t = "", n[1] && n[1].length > 0 && (t = "br=" + n[1]), n.length > 2 && n[2] && n[2].length > 0 && (t.length > 0 && (t += "&"), t += n[2]), this._bsController.clientEnhancedMode() && (i = $("#bsDiv"), i.find("ul:first-child").hasClass("betReceipt") && i.find("li").removeClass("disableBetSlip").removeClass("enableBetSlip").removeClass("disabledBetSlip")), this._bsInst.req(n[0], t))
    }
};
Type.registerNamespace("b365.Ui.Betslip");
b365.Ui.Betslip.BetBreakdownKeyGenerator = function (n, t, i, r) {
    this._bsInst = n;
    this._item = t;
    this._itemType = i;
    this._itemIndex = r;
    this._betTypeIDCookieKey = "id";
    this._eachWayCookieKey = "ew";
    this._fixtureCookieKey = "f";
    this._fixtureParticipantCookieKey = "fp";
    this._stakeCookieKey = "st";
    this._isValid = function () {
        return typeof this._bsInst != "undefined" && typeof this._item != "undefined" && typeof this._itemType != "undefined" && typeof this._itemIndex != "undefined"
    };
    this._getStake = function () {
        return this._item.getStItem(this._stakeCookieKey) === undefined ? "0" : String(parseInt(this._item.getStItem(this._stakeCookieKey) * 100))
    };
    this._isEachWay = function () {
        return this._item.getStItem(this._eachWayCookieKey) && this._item.getStItem(this._eachWayCookieKey) == "1" ? !0 : !1
    };
    this._getCastKey = function () {
        return "key=C-" + (this._getStake(this._item) + "-" + String(Number(this._itemIndex) + 1) + "-0")
    };
    this._getMultiplesKey = function () {
        return "key=M-" + (this._getStake(this._item) + "-" + this._item.getCnItem(this._betTypeIDCookieKey) + "-" + (this._isEachWay() ? "1" : "0"))
    };
    this._getSingleKey = function () {
        return "key=N-" + (this._getStake(this._item) + "-" + this._item.getCnItem(this._fixtureCookieKey) + "-" + this._item.getCnItem(this._fixtureParticipantCookieKey) + "-" + (this._isEachWay() ? "1" : "0"))
    }
};
b365.Ui.Betslip.BetBreakdownKeyGenerator.prototype = {
    generate: function () {
        var n = null;
        if (this._isValid()) switch (this._itemType) {
            case this._bsInst.itemTypeMultiple:
                n = this._getMultiplesKey();
                break;
            case this._bsInst.itemTypeCast:
                n = this._getCastKey();
                break;
            default:
                n = this._getSingleKey()
        }
        return n
    }
};
Type.registerNamespace("b365.Ui.Betslip");
b365.Ui.Betslip.BetSlipPopUpMessageController = function (n) {
    this._bsContext = n;
    this._messageTimeout = function () {
        window.clearTimeout(this._autoCloseTimer);
        this.HideMessage()
    };
    this._clearPopUpShowingClass = function () {
        $(".showing-fade-popup").removeClass("showing-fade-popup")
    };
    this._eventTargetElement = $(".betSlipPopupHeader>a>span:first-child");
    $(document).on("bsInfoMessage", $.proxy(this.ShowMessage, this));
    $(document).on("HideBsInfoMessage", $.proxy(this.HideMessage, this))
};
b365.Ui.Betslip.BetSlipPopUpMessageController.prototype = {
    ShowMessage: function (n, t, i) {
        var r = this,
            u, s, h;
        if (r._bsContext.IsPortraitMode() && r._bsContext.IsPrematch() && !$("#bsDiv").is(":visible")) {
            r._eventTargetElement = typeof window.MyBetsController != "undefined" && window.MyBetsController.isInitialised() ? $("#myBetsHeader>ul>li:first-child") : $(".betSlipPopupHeader>a>span:first-child");
            u = $("#ttDivFade");
            u.removeClass("ttHidden");
            r._autoCloseTimer != -1 && r._messageTimeout();
            r._clearPopUpShowingClass();
            r._eventTargetElement.addClass("showing-fade-popup");
            i || (i = 140);
            $.isNumeric(i) || (i = parseInt(i.replace(/px/g, "").replace(/;/g, "")));
            u.find(".cnt").html(t).css("max-width", i).css("width", i);
            var f = 10,
                e = r._eventTargetElement.offset(),
                o = r._eventTargetElement.outerHeight(!0);
            o && (f = o);
            s = e.top + f + 4;
            h = e.left + r._eventTargetElement.outerWidth(!0) / 2 - i / 2;
            u.css("top", s).css("left", h).css("max-width", i + "px").css("width", i + "px");
            u.fadeIn();
            this._autoCloseTimer = window.setTimeout(Function.createDelegate(r, r._messageTimeout), 3500)
        }
        n.stopPropagation()
    },
    HideMessage: function () {
        this._clearPopUpShowingClass();
        $("#ttDivFade").fadeOut().addClass("ttHidden")
    }
};
Type.registerNamespace("b365.Ui.Betslip");
b365.Ui.Betslip.TaxCalculator = function (n) {
    this._bsInst = n;
    this._taxRates = 0;
    this._taxCalculationMethod = "";
    this._isFreeBet = !1;
    var t = $("#bsDiv>ul").attr("data-txr"),
        i = $("#bsDiv>ul").attr("data-tcm"),
        r = Number($("#bsDiv>ul:first-child").attr("data-xrte")),
        u = r ? r : 1;
    this._maxLiabilityForUser = {
        "198": 5e6
    } [getBetslipWebModule().getUserCountryID()] || u * 2e6;
    typeof t != "undefined" && (this._taxRates = t);
    typeof i != "undefined" && (this._taxCalculationMethod = i);
    this._isValid = function () {
        return typeof this._bsInst != "undefined"
    }
};
b365.Ui.Betslip.TaxCalculator.prototype = {
    isMaxLiabilityExceeded: function (n) {
        return n > this._maxLiabilityForUser
    },
    getMaxReturn: function () {
        return this._maxLiabilityForUser
    },
    isUSNJBet: function () {
        return this._taxCalculationMethod == "3"
    },
    isGermanTaxApplied: function () {
        return this._taxCalculationMethod == "1"
    },
    getstakeToTax: function (n, t, i) {
        return t == -1 ? i - n : i <= t ? i - n : t - n
    },
    parseTaxRateForStakeAndCalculateTotalReturns: function (n, t) {
        for (var p = new b365.Ui.Formatter, r = 0, u = 0, s = 0, w = this._taxRates.toString(), e = w.split("#"), b = Number(p.roundValue(String(n))), l = t * b, a = Number(0), v = Number(0), i, f, o, y, h, c, r = 0; r < e.length; r++) i = e[r].split(","), i.length > 4 && (f = Number(i[0]), o = Number(i[1]), y = Number(i[2]), h = Number(i[3]), c = Number(i[4]), l > f && (a = this.getstakeToTax(f, o, l), u = u + a * h));
        for (this._isFreeBet || (u = u + n), r = 0; r < e.length; r++) i = e[r].split(","), i.length > 4 && (f = Number(i[0]), o = Number(i[1]), y = Number(i[2]), h = Number(i[3]), c = Number(i[4]), u > f && (v = this.getstakeToTax(f, o, u), s = s + v * c));
        return s
    },
    calculateReturnsForUSBet: function (n, t) {
        var u = new b365.Ui.Formatter,
            r = Number(u.roundValue(String(n))),
            i = t * r;
        return (this.isMaxLiabilityExceeded(i) && (i = this.getMaxReturn()), t >= 300 && (i = this.applyUSNJTax(i)), this._isFreeBet) ? i : i + r
    },
    applyUSNJTax: function (n) {
        for (var e = this._taxRates.toString(), r = e.split("#"), t = 0, u = r.length; t < u; t++) {
            var i = r[t].split(","),
                o = i[0],
                f = i[1],
                s = i[4],
                h = n > o,
                c = n <= f,
                l = f == -1;
            if (h && (c || l)) {
                n = n * s;
                break
            }
        }
        return n
    },
    applyUSNJTaxToTotalWinnings: function (n, t) {
        return n / t >= 300 ? this.applyUSNJTax(n) : n
    },
    calculateUntaxedReturns: function (n, t, i) {
        var u = this.calculateUntaxedWinnings(n, t, i);
        if (u == 0) return 0;
        var f = new b365.Ui.Formatter,
            e = Number(f.roundValue(String(n))),
            r = u + e;
        return r = parseFloat(r.toPrecision(12)), i ? r : this.floorTo2dp(r)
    },
    calculateUntaxedWinnings: function (n, t) {
        var i, r, u, f;
        n = isNaN(n) ? 0 : Number(n);
        try {
            r = eval(t)
        } catch (e) {
            return 0
        }
        if (isNaN(r)) return 0;
        u = new b365.Ui.Formatter;
        f = Number(u.roundValue(String(n)));
        i = r * f;
        return this.isMaxLiabilityExceeded(i) && getBetslipWebModule().getUserCountryID() == "198" && (i = this.getMaxReturn()), i = parseFloat(i.toPrecision(12)), i ? i : this.floorTo2dp(i)
    },
    calcReturnsByLine: function (n, t, i, r) {
        n = isNaN(n) ? 0 : Number(n);
        var f = 0,
            u, e;
        try {
            u = eval(t)
        } catch (o) {
            return 0
        }
        if (isNaN(u)) return 0;
        if (this._bsInst.useTruncated2dpPriceForReturnsCalc ? u = Math.floor(u * 100 + 1e-6) / 100 : window.location.host.split(".").pop() == "it" && window.pushedConfig.getIsPSQFV4Enabled() && (u = Math.floor(u * 1e3 + 1e-6) / 1e3), this._taxCalculationMethod == 2) e = n * 100 % 100, e > 0 && (e = e / 100, f = this.parseTaxRateForStakeAndCalculateTotalReturns(e, u)), n = Math.floor(n), f = f + n * this.parseTaxRateForStakeAndCalculateTotalReturns(1, u);
        else {
            if (i == 4) return this.calculateUntaxedReturns(n, u);
            f = this._taxCalculationMethod == 3 ? this.calculateReturnsForUSBet(n, u) : this.parseTaxRateForStakeAndCalculateTotalReturns(n, u)
        }
        return f = parseFloat(f.toPrecision(12)), r || (f = this.floorTo2dp(f)), f
    },
    floorTo2dp: function (n) {
        var t, i;
        return t = n.toString(), i = t.indexOf("."), i > -1 ? t = t.substr(0, i + 3) : t += ".00", parseFloat(t).toFixed(2)
    }
};
BetSlipDelegates.prototype.isPortraitMode = function () {
    var n = this;
    return n._bsContext && n._bsContext.IsPortraitMode ? n._bsContext.IsPortraitMode() : !1
};
BetSlipDelegates.prototype.isPrematch = function () {
    var n = this;
    return n._bsContext && n._bsContext.IsPrematch ? n._bsContext.IsPrematch() : !1
};
BetSlipDelegates.prototype.isAuthenticated = function () {
    var n = this;
    return n._bsContext && n._bsContext.IsAuthenticated ? n._bsContext.IsAuthenticated() : !1
};
BetSlipDelegates.prototype.updateBalance = function () {
    var n = this;
    n._bsContext && n._bsContext.UpdateBalance && n._bsContext.UpdateBalance()
};
BetSlipDelegates.prototype.showOverlay = function () {
    var n = this;
    n._bsContext && n._bsContext.ShowPleaseWaitSpinner && n._bsContext.ShowPleaseWaitSpinner()
};
BetSlipDelegates.prototype.hideOverlay = function () {
    var n = this;
    n._bsContext && n._bsContext.HidePleaseWaitSpinner && n._bsContext.HidePleaseWaitSpinner()
};
BetSlipDelegates.prototype.showTooltip = function (n) {
    var t = this;
    t._bsContext && t._bsContext.ShowTooltip && t._bsContext.ShowTooltip(n)
};
BetSlipDelegates.prototype.hideTooltip = function () {
    var n = this;
    n._bsContext && n._bsContext.HideTooltip && n._bsContext.HideTooltip()
};
BetSlipDelegates.prototype.showLoginPage = function () {
    var n = this;
    n._bsContext && n._bsContext.ShowLoginPage && n._bsContext.ShowLoginPage()
};
Type.registerNamespace("b365.Ui.Betslip");
b365.Ui.Betslip.StakeEntryRules = function () {
    function n(n) {
        this._bsController = n
    }
    return n.prototype.ItalianStakeEntryRulesForKeyboardEntry = function (n) {
        var i = this,
            t = n.value,
            r;
        t = t.replace("..", ".");
        t = t.replace(",,", ",");
        t = i._bsController._currencyDisplayHelper && t != "" ? i._bsController._currencyDisplayHelper.unformatCurrency(t) : t.replace(",", ".");
        typeof n.attributes["data-system"] != "undefined" && n.attributes["data-system"].value == "true" || (r = t ? Math.floor(Number(t)) : "", n.value = r === "" ? "" : r, new b365.Ui.Betslip.StakeChangedHandler(i._bsController._bsInst, i._bsController).handle(n))
    }, n.prototype.ItalianStakeEntryRulesForStakePadEntry = function (n) {
        var i = this,
            r, t = n.value;
        t = t.replace("..", ".");
        t = t.replace(",,", ",");
        t = i._bsController._currencyDisplayHelper && t != "" ? i._bsController._currencyDisplayHelper.unformatCurrency(t) : t.replace(",", ".");
        typeof n.attributes["data-system"] != "undefined" && n.attributes["data-system"].value == "true" || (t.toString().indexOf(".") > -1 && (n.value = t.substring(0, t.toString().indexOf("."))), r = $("#betSlipStakePadDecimalPoint", "#stakePad").find("button"), r.hasClass("betSlipStakePadDisabledKey") || $("#betSlipStakePadDecimalPoint", "#stakePad").find("button").addClass("betSlipStakePadDisabledKey").removeClass("stakePadKeyDown"))
    }, n.prototype.PushBetDisplayUpdate = function (n, t, i) {
        var e = $('#bsDiv li[data-item-id="' + n + '"]'),
            o = e.attr("data-item-push"),
            s = $blib.to2DP(i.value),
            f = this._bsController._bsInst.getBetItems(t)[n],
            h = f.getStItem("to"),
            c = new b365.Ui.Betslip.TaxCalculator(this._bsController._bsInst),
            w = $blib.getItemOdds(t, f),
            u, r, l, a, v, y, p;
        this._bsController.getPushMarketsEnabled() && o > 0 && o < 5 && (r = e.children(".italy-push-text"), s > 0 ? (u = $blib.pad2DP(String(s / 2)), l = r.find(".italy-push-stake"), y = r.find(".italy-push-win-return"), p = r.find(".italy-push-draw-return"), l.text(u + " " + betSlipML.towin + " "), a = $blib.pad2DP(String(c.calcReturnsByLine(Number(u), w, h) * 2)), v = $blib.pad2DP(String(c.calcReturnsByLine(Number(u), "1/1", h))), y.text(this._bsController._currencyDisplayHelper.formatCurrency(a)), p.text(this._bsController._currencyDisplayHelper.formatCurrency(v)), r.removeClass("no-stake")) : r.addClass("no-stake"), f.setCnItem("ipms", 1))
    }, n
}();
BetSlipController.betCallLoginPopupDisplayed = !1;
BetSlipController.prototype.GetBetSlipMode = function () {
    var n = this;
    return new b365.Ui.Betslip.ModeResolver(n._bsInst).resolve()
};
BetSlipController.prototype.SetBetSlipTextBoxMinValues = function () {
    this._setTextBoxesMinNumeric()
};
BetSlipController.prototype.OnItemBetMax = function (n) {
    new b365.Ui.Betslip.BetMaxRequestDespatcher(this._bsInst, this).despatch(n)
};
BetSlipController.prototype.OnItemStakeChanged = function (n) {
    new b365.Ui.Betslip.StakeChangedHandler(this._bsInst, this).handle(n)
};
BetSlipController.prototype.SetCurrentDialogRef = function (n) {
    this._dlg = n
};
BetSlipController.prototype.GetCurrentDialogRef = function () {
    return this._dlg
};
BetSlipController.prototype.ClearCurrentDialogRef = function () {
    this._dlg = null
};
BetSlipController.prototype.CloseCurrentDialogClearRef = function () {
    if (this._dlg !== null) {
        try {
            this._dlg.hideDialog()
        } catch (n) {}
        this._dlg = null
    }
};
BetSlipController.prototype.OnBetslipContentLoaded = function () {
    var n = this,
        t, i;
    bsApp.setTaxConfig();
    new b365.Ui.Betslip.RestoreStateHandler(n._bsInst).handle();
    b365.Ui.Betslip.ToggleMultiples && new b365.Ui.Betslip.ToggleMultiples(n._bsInst, n).reset();
    n._suspendSelections();
    b365.Ui.Betslip.ToggleBetCredits && document.getElementsByClassName("bs-useFreeBet")[0] && n._currencyDisplayHelper && new b365.Ui.Betslip.ToggleBetCredits(n._bsInst, n).reset();
    typeof n._stakeEntryHander != "undefined" && n._stakeEntryHander.init();
    t = $("#bsDiv");
    $(".betslip-select select", t).on("click change customselect", function () {
        $(this).parent().attr("data-text", $(this).find(":selected").text())
    }).trigger("customselect");
    n._enhancedBetSlipTypeSelector ? n._enhancedBetSlipTypeSelector.enablePopUp() : n._enhancedBetSlipTypeSelector = new b365.Ui.Betslip.EnhancedBetSlipTypeSelector(n);
    n._enhancedBetSlipOddsSelector ? n._enhancedBetSlipOddsSelector.enablePopUps() : n._enhancedBetSlipOddsSelector = new b365.Ui.Betslip.EnhancedBetSlipOddsSelector(n);
    n._enhancedBetSlipPitcherSelector ? n._enhancedBetSlipPitcherSelector.enablePopUps() : n._enhancedBetSlipPitcherSelector = new b365.Ui.Betslip.EnhancedBetSlipPitcherSelector(n);
    n._enhancedBetSlipToteSelector ? n._enhancedBetSlipToteSelector.enablePopUps() : n._enhancedBetSlipToteSelector = new b365.Ui.Betslip.EnhancedBetSlipToteSelector(n);
    n._enhancedBetSlipIfBetSelector ? n._enhancedBetSlipIfBetSelector.enablePopUps() : n._enhancedBetSlipIfBetSelector = new b365.Ui.Betslip.EnhancedBetSlipIfBetSelector(n);
    n._enhancedBetSlipTeaserTypeSelector ? n._enhancedBetSlipTeaserTypeSelector.enablePopUps() : n._enhancedBetSlipTeaserTypeSelector = new b365.Ui.Betslip.EnhancedBetSlipTeaserTypeSelector(n);
    n._enhancedBetSlipAusRaceBetTypeSelector ? n._enhancedBetSlipAusRaceBetTypeSelector.enablePopUps() : n._enhancedBetSlipAusRaceBetTypeSelector = new b365.Ui.Betslip.EnhancedBetSlipAusRaceBetTypeSelector(n);
    n._enhancedBetSlipEachWayExtraSelector ? n._enhancedBetSlipEachWayExtraSelector.enablePopUps() : n._enhancedBetSlipEachWayExtraSelector = new b365.Ui.Betslip.EnhancedBetSlipEachWayExtraSelector(n);
    n._ausToteToolTipHtmlBuilder || (n._ausToteToolTipHtmlBuilder = new b365.Ui.Betslip.AusToteToolTipHtmlBuilder(n));
    n._ausToteToolTipHtmlBuilder.destroy();
    n._ausToteToolTipHtmlBuilder.attachHandlers();
    n._removeClickHandler || (n._removeClickHandler = new b365.Ui.Betslip.RemoveClickHandler(n._bsInst, n));
    !n._eachWayClickHandler && b365.Ui.Betslip.EachWayClickHandler && (n._eachWayClickHandler = new b365.Ui.Betslip.EachWayClickHandler(n._bsInst, n));
    !n._autoVoidClickHandler && b365.Ui.Betslip.AutoVoidClickHandler && (n._autoVoidClickHandler = new b365.Ui.Betslip.AutoVoidClickHandler(n._bsInst, n));
    !n._freeBetClickHandler && b365.Ui.Betslip.FreeBetClickHandler && (n._freeBetClickHandler = new b365.Ui.Betslip.FreeBetClickHandler(n._bsInst, n));
    !n._noReservesClickHandler && b365.Ui.Betslip.NoReservesClickHandler && (n._noReservesClickHandler = new b365.Ui.Betslip.NoReservesClickHandler(n._bsInst, n));
    n._currencyDisplayHelper || (n._currencyDisplayHelper = new b365.Ui.Betslip.CurrencyDisplayHelper(n, n.getCurrencyObject()));
    i = document.getElementsByClassName("bs-FreeBetCheckBox-selected");
    i.length > 0 && (new b365.Ui.Betslip.FreeBetClickProcessor(this._bsInst, this).init(i[0]).handle(!0), n._freeBetClickHandler.attachHandlers());
    this._isAustralianDomain && b365.Ui.Betslip.BetCallHandler && (n.betCallHandler && n._bsController || (n.betCallHandler = new b365.Ui.Betslip.BetCallHandler(n._bsInst, n)), window.pushedConfig && window.pushedConfig.getIsBetCallAvailable && n.betCallHandler.init(), n._bsInst.setClickToCallHandler(n.betCallHandler));
    n._delegates.updateBalance();
    t.trigger("b365.Ui.Betslip.contentloaded");
    n.quickBetContext = {
        navigationChanged: function (t) {
            n._quickBet && n._quickBet.isQuickBetLoaded() && n._quickBet.navigationChanged && n._quickBet.navigationChanged(t)
        },
        canHandleBets: function () {
            var t = !1;
            return n._quickBet && n._quickBet.isQuickBetLoaded() && n._quickBet.canHandleBets && (t = n._quickBet.canHandleBets()), t
        }
    };
    n._bsInst.betSlipLoaded()
};
BetSlipController.prototype.initialiseWithParticipantInformation = function (n) {
    var i = this,
        t = "";
    t += "participantid=" + (n.id ? n.id : "") + "&";
    t += "pcode=" + (n.code ? n.code : "") + "&";
    t += "ptype=" + (n.type ? n.type : "") + "&";
    t += "odds=" + (n.odds ? n.odds : "") + "&";
    t += "fid=" + (n.fid ? n.fid : "") + "&";
    t += "acode=" + (n.acode ? n.acode : "") + "&";
    i.initialise();
    i._bsInst.req(i._bsInst.reqTypeConstructAndAddItems, t)
};
BetSlipController.prototype.initialise = function () {
    var n = this,
        t;
    n.initialiseStakeEntry();
    n._bsInst.betSource = n.betSource();
    n._bsInst.deviceType = n.deviceType();
    n._bsInst.showStreaming = n.showStreaming();
    n._bsInst.isV6Mode = n._bsContext.IsV6Mode || function () {
        return !1
    };
    n._bsInst.showFullTextMode = n.showFullTextMode();
    n._bsInst.showFixtureDate = n.showFixtureDate();
    n._bsInst.keyboardType = n.getKeyboardType();
    n._bsInst.refreshUserBalance = n.getRefreshUserBalance();
    n._bsInst.isoCode = n.getIsoCode();
    t = n._bsInst.getValueFromBSCookie("processed").replace("||", "");
    t == "true" && new b365.Ui.Betslip.ViewResetter(n._bsInst, n).reset();
    n._isAusDomain && (n._isAusMultiplesAvailable = !0, n._pushConfigInitialisedDelegate = {
        scope: this,
        method: n.pushConfigInitialised
    }, n._ausMultiplesAvailabilityChangedDelegate = {
        scope: this,
        method: n.ausMultiplesAvailabilityChanged
    }, window.top.Locator.pushedConfig.getArePropertiesInitialised() ? (n._isAusMultiplesAvailable = window.top.Locator.pushedConfig.getIsAusMultiplesAvailable(), window.top.Locator.pushedConfig.addEventListener(n._ausMultiplesAvailabilityChangedEvent, n._ausMultiplesAvailabilityChangedDelegate)) : window.top.Locator.pushedConfig.addEventListener(n._pushConfigInitialisedEvent, n._pushConfigInitialisedDelegate))
};
BetSlipController.prototype.initialiseStakeEntry = function () {
    var n = this;
    typeof n._stakeEntryHander != "undefined" && n._stakeEntryHander.detach();
    n.clientEnhancedMode() ? (n._stakeEntryHander = new b365.Ui.Betslip.StakePadController("#bsDiv", n, n, function (n) {
        return new b365.Ui.Betslip.ItemInformation(n).itemIndex()[0]
    }, n.OnItemStakeChanged, function (n) {
        return $(n).prop("disabled") || $(n).parents().hasClass("suspended") ? !1 : !0
    }, null, n.showStakePadToolTips(), hasKeyboardIssues), n._stakeEntryType = n._stakeEntryTypes.stakePad) : (n._stakeEntryType = n._stakeEntryTypes.deviceKeyBoard, n._stakeEntryHander = new b365.Ui.Betslip.StakeEntryKeyboard(n._bsInst, n))
};
BetSlipController.prototype.addBet = function (n, t, i) {
    function u(n) {
        i && i();
        r.addToBetsBank(n)
    }
    var r = this;
    new b365.Ui.Betslip.AddBetHandler(this._bsInst, this).handle(n, t, u)
};
BetSlipController.prototype.addToBetsBank = function (n) {
    typeof n == "string" && window.Locator && window.window.top.Locator.betSlipManager && window.window.top.Locator.betSlipManager.addBetToBank(n)
};
BetSlipController.prototype.betExists = function (n) {
    return $blib.getBetItemIndex(n, this._bsInst) != -1
};
BetSlipController.prototype.deleteBet = function (n) {
    new b365.Ui.Betslip.DeleteBetHandler(this._bsInst, this).handle(n)
};
BetSlipController.prototype.placeBet = function () {
    var n = this;
    n._bsInst.req(n._bsInst.reqTypePlaceBet, undefined, undefined, this)
};
BetSlipController.prototype.confirmBet = function () {
    var n = this;
    n._bsInst.req(n._bsInst.reqTypeConfirmBet, undefined, undefined, this)
};
BetSlipController.prototype.removeBets = function () {
    var n = this;
    new b365.Ui.Betslip.RemoveAllItemsRequestDespatcher(n._bsInst, n).despatch(null)
};
BetSlipController.prototype.loadAddedItems = function () {
    var n = this;
    n._bsInst.req(n._bsInst.reqTypeAddItems)
};
BetSlipController.prototype.refreshBetslip = function (n, t) {
    if (!(document.getElementsByClassName("betReceipt").length > 0 || document.getElementsByClassName("bs-BetSlip_Referral").length > 0) || n !== 26) {
        var i = this,
            r;
        i._betslipContentHeight = null;
        i._bsInst.req(n ? n : i._bsInst.reqTypeRefreshSlip, "", null, i, r, t)
    }
};
BetSlipController.prototype.resizeHandler = function () {
    var t = this,
        f = 330,
        i, r = " expanded",
        n = document.body.clientWidth,
        u;
    n || (u = getBetslipWebModule(), u && (n = u.getElement().clientWidth));
    i = document.body.className.indexOf(r) > -1;
    n > f && !i ? (document.body.className += r, t._bsContext.repositionPopup()) : n <= f && i && (document.body.className = document.body.className.replace(r, ""), t._bsContext.repositionPopup());
    t._bsContext.resizeBetslip()
};
BetSlipController.prototype.initiatePhoneBetRequest = function (n) {
    new b365.Ui.Betslip.PhoneBetHandler(this._bsInst, this).initiate(n)
};
BetSlipController.prototype.IsItalianDomain = function () {
    return this._isItalianDomain
};
BetSlipController.prototype.getPushMarketsEnabled = function () {
    return this._pushMarketsEnabled
};
BetSlipController.prototype.setPushMarketsEnabled = function (n) {
    this._pushMarketsEnabled = n
};
BetSlipController.prototype.retainSelectionsDelegate = function () {
    var n = this;
    n._bsContext && n._bsContext.RetainSelectionsDelegate && n._bsContext.RetainSelectionsDelegate()
};
BetSlipController.prototype.clientLoginDelegate = function () {
    var n = this;
    n._bsContext && n._bsContext.ClientLoginDelegate && n._bsContext.ClientLoginDelegate()
};
BetSlipController.prototype.clientContinueDelegate = function () {
    var n = this;
    return n._bsContext && n._bsContext.ClientContinueDelegate ? (n._bsContext.ClientContinueDelegate(), !0) : !1
};
BetSlipController.prototype.showBetslipBreakdownDialog = function (n) {
    var t = this;
    return t._bsContext && t._bsContext.ShowBetslipBreakdownDialog ? (t._bsContext.ShowBetslipBreakdownDialog(n), !0) : !1
};
BetSlipController.prototype.clientActionInProgress = function (n) {
    var t = this;
    t._bsContext && t._bsContext.ClientActionInProgress && t._bsContext.ClientActionInProgress(n)
};
BetSlipController.prototype.updateFreeBetBar = function (n) {
    var t = document.getElementsByClassName("bs-useBetCredit")[0],
        i = document.getElementsByClassName("br-Receipt")[0] || document.getElementsByClassName("bs-Confirm")[0];
    if (t)
        if (n > 0 && window.pushedConfig.getIsFreeBetsAllowed(getBetslipWebModule().getUserCountryID()) && this._bsInst.getBetItems(this._bsInst.betTypeAll).length > 0 && !this._bsInst.containsPhoneOnlyBet() && this._bsInst.getSlipType() === this._bsInst.slipStandard) {
            t.setAttribute("data-bb", n);
            var r = t.getElementsByClassName("bs-useBetCreditAmount")[0],
                u = (new b365.Ui.Formatter).padStringTo2DP(n),
                f = new b365.Ui.Betslip.CurrencyDisplayHelper(this, this.getCurrencyObject()).formatCurrency(u);
            r.innerHTML = r.innerHTML.replace("{0}", f);
            t.className = t.className.replace(" hidden", "")
        } else t.className.indexOf(" hidden") === -1 && (this._bsInst.setValueInBSCookie("fs", "0"), t.className = t.className + " hidden");
    else i && n > 0 && this._bsInst.getBetItems(this._bsInst.betTypeAll).length > 0 && i.setAttribute("data-bb", n)
};
BetSlipController.prototype.getCurrencyObject = function () {
    var n = this;
    return n._bsContext && n._bsContext.GetCurrencyObject ? n._bsContext.GetCurrencyObject() : {
        decimalSeparator: ".",
        thousandsSeparator: ","
    }
};
BetSlipController.prototype.setMicrophoneAvailable = function (n) {
    var t = this;
    t._bsContext && t._bsContext.setMicrophoneAvailable && t._bsContext.setMicrophoneAvailable(n);
    t.betCallHandler && t.betCallHandler.microphoneAvailabilityChanged && t.betCallHandler.microphoneAvailabilityChanged()
};
BetSlipController.prototype.clientEnhancedMode = function () {
    var n = this;
    return n._bsContext && n._bsContext.ClientEnhancedMode ? n._bsContext.ClientEnhancedMode() : !1
};
BetSlipController.prototype.showStakePadToolTips = function () {
    var n = this;
    return n._bsContext && n._bsContext.ShowStakePadToolTips ? n._bsContext.ShowStakePadToolTips() : !0
};
BetSlipController.prototype.liveAlertsEnabled = function () {
    var n = this;
    return n._bsContext && n._bsContext.IsMatchAlertsEnabled ? n._bsContext.IsMatchAlertsEnabled() : !1
};
BetSlipController.prototype.populateMatchAlerts = function (n) {
    this._bsContext.populateMatchAlerts(n)
};
BetSlipController.prototype.setMatchAlertSubscriptionState = function (n) {
    this._bsContext.setMatchAlertSubscriptionState(n)
};
BetSlipController.prototype.setBetReceiptMatchAlertsState = function (n) {
    this._bsInst._matchAlertsReceipt.setBetReceiptMatchAlertsState(n)
};
BetSlipController.prototype.betCallEnabled = function () {
    var n = this;
    return typeof window.top.Locator != "undefined" && window.top.Locator.pushedConfig.getIsBetCallAvailable() && window.location.host.indexOf(".au") > -1 ? !0 : !1
};
BetSlipController.prototype.betCallTwilioEnabled = function () {
    var n = this;
    return typeof window.top.Locator != "undefined" && window.top.Locator.pushedConfig.getIsBetCallTwilioAvailable() && window.location.host.indexOf(".au") > -1 ? !0 : !1
};
BetSlipController.prototype.restrictMultiplesForClickToCall = function () {
    return typeof window.top.Locator != "undefined" && window.top.Locator.pushedConfig && !window.top.Locator.pushedConfig.getIsMultiplesEnabledForClickToCall()
};
BetSlipController.prototype.appType = function () {
    var n = this;
    return n._bsContext && n._bsContext.AppType ? n._bsContext.AppType() : ""
};
BetSlipController.prototype.appVersion = function () {
    var n = this;
    return n._bsContext && n._bsContext.AppVersion ? n._bsContext.AppVersion() : ""
};
BetSlipController.prototype.clientBetSlipShowing = function () {
    var n = this;
    return n._bsContext && n._bsContext.ClientBetSlipShowing ? n._bsContext.ClientBetSlipShowing() : !1
};
BetSlipController.prototype.clientUsesSelect = function () {
    var n = this;
    return n._bsContext && n._bsContext.ClientUsesSelect ? n._bsContext.ClientUsesSelect() : !0
};
BetSlipController.prototype.stakeEntryRule = function () {
    var n = this;
    return n._bsContext && n._bsContext.StakeEntryRule ? n._bsContext.StakeEntryRule() : null
};
BetSlipController.prototype.joinNow = function () {
    var n = this;
    n._bsContext && n._bsContext.JoinNow && n._bsContext.JoinNow()
};
BetSlipController.prototype.deposit = function (n) {
    var t = this;
    t._bsContext && t._bsContext.Deposit && t._bsContext.Deposit(n)
};
BetSlipController.prototype.isReqOnBetAddedEnabled = function () {
    var n = this;
    return n._bsContext && n._bsContext.IsReqOnBetAddedEnabled ? n._bsContext.IsReqOnBetAddedEnabled() : !0
};
BetSlipController.prototype.isReqOnBetDeletedEnabled = function () {
    var n = this;
    return n._bsContext && n._bsContext.IsReqOnBetDeletedEnabled ? n._bsContext.IsReqOnBetDeletedEnabled() : !0
};
BetSlipController.prototype.showConfirmation = function (n, t, i, r, u, f, e, o, s) {
    var c = {
            Controller: n,
            Title: t,
            Msg: i,
            Button1Text: r,
            Button1Action: u,
            Button2Text: f,
            Button2Action: e,
            additionalClass: o
        },
        h;
    s && (c.OutofContextDialogue = !0);
    h = this;
    h._bsContext && h._bsContext.ShowConfirmation && h._bsContext.ShowConfirmation(this._bsInst, c)
};
BetSlipController.prototype.showSiteConfirmation = function (n, t, i, r, u, f, e, o, s) {
    var c = {
            Controller: n,
            Title: t,
            Msg: i,
            Button1Text: r,
            Button1Action: u,
            Button2Text: f,
            Button2Action: e,
            additionalClass: o
        },
        h;
    s && (c.OutofContextDialogue = !0);
    h = this;
    h._bsContext && h._bsContext.showSiteConfirmation && h._bsContext.showSiteConfirmation(c)
};
BetSlipController.prototype.getPushPopupStatus = function (n) {
    var t = this,
        i = !1;
    return t._bsContext && t._bsContext.getPushPopupStatus && (i = t._bsContext.getPushPopupStatus(n)), i
};
BetSlipController.prototype.showPushbetDialog = function (n, t, i, r, u) {
    var e = {
            Controller: n,
            OkAction: t,
            CancelAction: i,
            PushBetId: r,
            FixtureParticipantId: u
        },
        f = this;
    f._bsContext && f._bsContext.showPushbetDialog && f._bsContext.showPushbetDialog(e)
};
BetSlipController.prototype.showDialog = function (n, t, i) {
    var u = {
            Controller: n,
            MarkUp: t,
            Modal: i
        },
        r = this;
    r._bsContext && r._bsContext.ShowDialog && r._bsContext.ShowDialog(u)
};
BetSlipController.prototype.betSource = function () {
    var n = this;
    return n._bsContext && n._bsContext.BetSource ? n._bsContext.BetSource() : ""
};
BetSlipController.prototype.deviceType = function () {
    var n = this;
    return n._bsContext && n._bsContext.DeviceType ? n._bsContext.DeviceType() : ""
};
BetSlipController.prototype.showFullTextMode = function () {
    var n = this;
    return n._bsContext && n._bsContext.ShowFullTextMode ? n._bsContext.ShowFullTextMode() : !1
};
BetSlipController.prototype.showFixtureDate = function () {
    var n = this;
    return n._bsContext && n._bsContext.ShowFixtureDate ? n._bsContext.ShowFixtureDate() : !1
};
BetSlipController.prototype.showStreaming = function () {
    var n = this;
    return n._bsContext && n._bsContext.ShowStreaming ? n._bsContext.ShowStreaming() : !1
};
BetSlipController.prototype.getRefreshUserBalance = function () {
    var n = this;
    return n._bsContext && n._bsContext.RefreshUserBalance ? n._bsContext.RefreshUserBalance() : !0
};
BetSlipController.prototype.getIsoCode = function () {
    var n = this;
    return n._bsContext && n._bsContext.IsoCode ? n._bsContext.IsoCode() : ""
};
BetSlipController.prototype.getKeyboardType = function () {
    var n = this;
    return n._bsContext && n._bsContext.KeyboardType ? n._bsContext.KeyboardType() : ""
};
BetSlipController.prototype.itemsRemoved = function (n, t) {
    var r = {
            Id: n ? n : null,
            CheckSuspended: t ? t : null
        },
        i = this;
    i._bsContext && i._bsContext.ItemsRemoved && i._bsContext.ItemsRemoved(r);
    window.Locator && window.window.top.Locator.betSlipManager && window.window.top.Locator.betSlipManager.deselectBet(n);
    this.complexMultiplesCombinationsInit = !0
};
BetSlipController.prototype.resetBetCount = function () {
    this._bsContext.resetBetCount(0)
};
BetSlipController.prototype.pushBetRulesLink = function () {
    var n = this;
    return n._bsContext && n._bsContext.PushBetRulesUrl ? n._bsContext.PushBetRulesUrl() : ""
};
BetSlipController.prototype.highlightSelectedBets = function () {
    var n = this;
    return n._bsContext && n._bsContext.HighlightSelectedBets ? n._bsContext.HighlightSelectedBets() : ""
};
BetSlipController.prototype.pushBetPopupAcceptedHandler = function (n) {
    var t = this;
    return t._bsContext && t._bsContext.PushBetPopupAcceptedHandler && t._bsContext.PushBetPopupAcceptedHandler(n), ""
};
BetSlipController.prototype.showEnableMicrophoneMessage = function () {
    var n = new b365.Ui.Betslip.PermissionsDialog(this);
    this.showDialog(n, n.buildMarkup(), !1)
};
BetSlipController.prototype.addOnBetSlipLoaded = function (n) {
    var t = this;
    t._instanceEventAttacher.addOnBetSlipLoaded(n)
};
BetSlipController.prototype.addOnBetAdded = function (n) {
    var t = this;
    t._instanceEventAttacher.addOnBetAdded(n)
};
BetSlipController.prototype.addOnBetAddedReqComplete = function (n) {
    var t = this;
    t._instanceEventAttacher.addOnBetAddedReqComplete(n)
};
BetSlipController.prototype.addOnEditBet = function (n) {
    var t = this;
    t._instanceEventAttacher.addOnEditBet(n)
};
BetSlipController.prototype.addOnRefreshReqComplete = function (n) {
    var t = this;
    t._instanceEventAttacher.addOnRefreshReqComplete(n)
};
BetSlipController.prototype.addOnBetSlipItemsChanged = function (n) {
    var t = this;
    t._instanceEventAttacher.addOnBetSlipItemsChanged(n)
};
BetSlipController.prototype.addOnAcceptChanges = function (n) {
    var t = this;
    t._instanceEventAttacher.addOnAcceptChanges(n)
};
BetSlipController.prototype.addOnMaxSelections = function (n) {
    var t = this;
    t._instanceEventAttacher.addOnMaxSelections(n)
};
BetSlipController.prototype.addOnBetslipDisplayed = function (n) {
    var t = this;
    t._instanceEventAttacher.addOnBetslipDisplayed(n)
};
BetSlipController.prototype.addOnPlaceBet = function (n) {
    var t = this;
    t._instanceEventAttacher.addOnPlaceBet(n)
};
BetSlipController.prototype.addOnPlaceBetSuccess = function (n) {
    var t = this;
    t._instanceEventAttacher.addOnPlaceBetSuccess(n)
};
BetSlipController.prototype.addOnPlaceBetFailure = function (n) {
    var t = this;
    t._instanceEventAttacher.addOnPlaceBetFailure(n)
};
BetSlipController.prototype.addOnAddBetslipFooterLinks = function (n) {
    var t = this;
    t._instanceEventAttacher.addOnAddBetslipFooterLinks(n)
};
BetSlipController.prototype.addOnAddReceiptHeaderLinks = function (n) {
    var t = this;
    t._instanceEventAttacher.addOnAddReceiptHeaderLinks(n)
};
BetSlipController.prototype.addOnAddReceiptFooterLinks = function (n) {
    var t = this;
    t._instanceEventAttacher.addOnAddReceiptFooterLinks(n)
};
BetSlipController.prototype.addOnAddReceiptLiveAlertSignUp = function (n) {
    var t = this;
    t._instanceEventAttacher.addOnAddReceiptLiveAlertSignUp(n)
};
BetSlipController.prototype.addOnBetslipError = function (n) {
    var t = this;
    t._instanceEventAttacher.addOnBetslipError(n)
};
BetSlipController.prototype.addOnShowBetSlip = function (n) {
    var t = this;
    t._instanceEventAttacher.addOnShowBetSlip(n)
};
BetSlipController.prototype.addOnHideBetSlip = function (n) {
    var t = this;
    t._instanceEventAttacher.addOnHideBetSlip(n)
};
BetSlipController.prototype.addOnChangeBetslipHeight = function (n) {
    var t = this;
    t._instanceEventAttacher.addOnChangeBetslipHeight(n)
};
BetSlipController.prototype.addOnPopupShow = function (n) {
    var t = this;
    t._instanceEventAttacher.addOnPopupShow(n)
};
BetSlipController.prototype.addOnPopupHide = function (n) {
    var t = this;
    t._instanceEventAttacher.addOnPopupHide(n)
};
BetSlipController.prototype.addOnSessionExpired = function (n) {
    var t = this;
    t._instanceEventAttacher.addOnSessionExpired(n)
};
BetSlipController.prototype.addOnContentChangedOnClient = function (n) {
    var t = this;
    t._instanceEventAttacher.addOnContentChangedOnClient(n)
};
BetSlipController.prototype.showSiteOverlaySpinner = function () {
    var n = this;
    return n._bsContext && n._bsContext.ShowSiteOverlaySpinner ? (n._bsContext.ShowSiteOverlaySpinner(), !0) : !1
};
BetSlipController.prototype.hideSiteOverlaySpinner = function () {
    var n = this;
    return n._bsContext && n._bsContext.HideSiteOverlaySpinner ? (n._bsContext.HideSiteOverlaySpinner(), !0) : !1
};
BetSlipController.prototype.addOnHandleBetGuidChange = function (n) {
    var t = this;
    t._instanceEventAttacher.addOnHandleBetGuidChange(n)
};
BetSlipController.prototype.showSiteOverlaySpinner = function () {
    var n = this;
    return n._bsContext && n._bsContext.ShowSiteOverlaySpinner ? (n._bsContext.ShowSiteOverlaySpinner(), !0) : !1
};
BetSlipController.prototype.hideBetslip = function () {
    var n = this;
    n._bsContext && n._bsContext.HideBetslip && n._bsContext.HideBetslip()
};
BetSlipController.prototype.hideSiteOverlaySpinner = function () {
    var n = this;
    return n._bsContext && n._bsContext.HideSiteOverlaySpinner ? (n._bsContext.HideSiteOverlaySpinner(), !0) : !1
};
BetSlipController.prototype.betSlipTypeChanged = function (n, t) {
    var i = this;
    i._bsContext && i._bsContext.BetSlipTypeChanged && i._bsContext.BetSlipTypeChanged(n, t)
};
BetSlipController.prototype.betCallConnected = function () {
    var n = this;
    n._bsContext && n._bsContext.betCallConnectedDelegate && n._bsContext.betCallConnectedDelegate()
};
BetSlipController.prototype.betCallDisconnected = function () {
    var n = this;
    n._bsContext && n._bsContext.betCallDisconnectedDelegate && n._bsContext.betCallDisconnectedDelegate()
};
BetSlipController.prototype.addOnDeleteBetReqComplete = function (n) {
    var t = this;
    t._instanceEventAttacher.addOnDeleteBetReqComplete(n)
};
BetSlipController.prototype.addOnAddBetFailed = function (n) {
    var t = this;
    t._instanceEventAttacher.addOnAddBetFailed(n)
};
BetSlipController.prototype.getMultipleInfo = function () {
    var n = this;
    n.ausMultiplesEnabled() && this.getMultipleCombinations()
};
BetSlipController.prototype.getMultipleCombinations = function () {
    var n = this;
    n.ausMultiplesEnabled() && $.ajax({
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
            "Cache-Control": "no-cache",
            Pragma: "no-cache"
        },
        type: "POST",
        url: "/betslip/Core/MultiplesCombinations.ashx",
        data: window.top.safeSessionStorage.getItem("betstring"),
        cache: !1
    }).done(function (t) {
        n.initialiseMultiplesData(t)
    }).fail(function () {})
};
BetSlipController.prototype.hasMultipleStakeEntries = function () {
    var t = this,
        n = t._bsInst.getBetItems(this._bsInst.betTypeMultiple);
    for (i = 0; i < n.length; i++)
        if (n[i].getStItem("st")) return !0;
    return !1
};
BetSlipController.prototype.initialiseMultiplesData = function (n) {
    var e = this,
        t, i, r, u, f;
    if (e.ausMultiplesEnabled() && (this.complexMultiplesInfo = [], n.multiples)) {
        for (this.totalsCalculator || (this.totalsCalculator = new b365.Ui.Betslip.TotalsCalculator(this._bsInst, this)), this.complexMultiplesInfo = n.multiples, t = 0; t < this.complexMultiplesInfo.length; t++)
            if (r = [], this.complexMultiplesInfo[t].D1) {
                for (u = this.complexMultiplesInfo[t].D1.split(","), i = 0; i < u.length; i++) f = u[i].split("#"), r.push(f);
                this.complexMultiplesInfo[t].combinations = r
            } else this.complexMultiplesInfo[t].combinations = null;
        this.totalsCalculator.calculate()
    }
};
BetSlipController.prototype.pushConfigInitialised = function () {
    var n = this;
    window.top.Locator.pushedConfig.removeEventListener(n._pushConfigInitialisedEvent, n._pushConfigInitialisedDelegate);
    window.top.Locator.pushedConfig.addEventListener(n._ausMultiplesAvailabilityChangedEvent, n._ausMultiplesAvailabilityChangedDelegate);
    this.ausMultiplesAvailabilityChanged()
};
BetSlipController.prototype.ausMultiplesAvailabilityChanged = function () {
    var n = this,
        t = n._isAusDomain && window.top.Locator.pushedConfig.getIsAusMultiplesAvailable();
    n._isAusMultiplesAvailable !== t && (n._isAusMultiplesAvailable = !0, n.refreshBetslip())
};
BetSlipController.prototype.ausMultiplesEnabled = function () {
    var n = this;
    return n._isAusMultiplesAvailable
};
BetSlipController.prototype.ausMultiplesEnabled = function () {
    var n = this;
    return n._isAusMultiplesAvailable
};
BetSlipController.prototype.updateMultiplesEachWayFlag = function () {
    var s = this,
        r, o, n;
    if (s.ausMultiplesEnabled()) {
        var u = "ew",
            t = this._bsInst.getBetItems(this._bsInst.betTypeMultiple),
            i = this._bsInst.getBetItems(this._bsInst.betTypeNormal);
        if (i && i.length > 0 && t && t.length > 0) {
            var h = i.length,
                f = t.length,
                e = !1;
            for (r = 0; r < h; r++)
                if (o = i[r].getStItem(u), o == "1") {
                    for (e = !0, n = 0; n < f; n++) t[n].setStItem(u, "1");
                    break
                } if (!e)
                for (n = 0; n < f; n++) t[n].setStItem(u, "0")
        }
    }
};
BetSlipController.prototype.enableSwipeDelete = function () {
    this._swipeDeleteController = new b365.Ui.Betslip.SwipeDeleteController(this._bsInst, this);
    this._swipeDeleteController.attach()
};
BetSlipController.prototype.resetSwipeForSelection = function (n) {
    this._swipeDeleteController && this._swipeDeleteController.reset(n)
};
BetSlipController.prototype.hidePopups = function (n) {
    var t = this;
    n != t._enhancedBetSlipTypeSelector && t._enhancedBetSlipTypeSelector && t._enhancedBetSlipTypeSelector._isShowing && t._enhancedBetSlipTypeSelector.hidePopUpMenu(t._enhancedBetSlipTypeSelector);
    n != t._enhancedBetSlipOddsSelector && t._enhancedBetSlipOddsSelector && t._enhancedBetSlipOddsSelector._isShowing && t._enhancedBetSlipOddsSelector.hidePopUpMenu(t._enhancedBetSlipOddsSelector);
    n != t._enhancedBetSlipToteSelector && t._enhancedBetSlipToteSelector && t._enhancedBetSlipToteSelector._isShowing && t._enhancedBetSlipToteSelector.hidePopUpMenu(t._enhancedBetSlipToteSelector);
    n != t._enhancedBetSlipIfBetSelector && t._enhancedBetSlipIfBetSelector && t._enhancedBetSlipIfBetSelector._isShowing && t._enhancedBetSlipIfBetSelector.hidePopUpMenu(t._enhancedBetSlipIfBetSelector);
    n != t._enhancedBetSlipTeaserTypeSelector && t._enhancedBetSlipTeaserTypeSelector && t._enhancedBetSlipTeaserTypeSelector._isShowing && t._enhancedBetSlipTeaserTypeSelector.hidePopUpMenu(t._enhancedBetSlipTeaserTypeSelector);
    n != t._enhancedBetSlipAusRaceBetTypeSelector && t._enhancedBetSlipAusRaceBetTypeSelector && t._enhancedBetSlipAusRaceBetTypeSelector._isShowing && t._enhancedBetSlipAusRaceBetTypeSelector.hidePopUpMenu(t._enhancedBetSlipAusRaceBetTypeSelector);
    n != t._enhancedBetSlipEachWayExtraSelector && t._enhancedBetSlipEachWayExtraSelector && t._enhancedBetSlipEachWayExtraSelector._isShowing && t._enhancedBetSlipEachWayExtraSelector.hidePopUpMenu(t._enhancedBetSlipEachWayExtraSelector);
    n != t._enhancedBetSlipPitcherSelector && t._enhancedBetSlipPitcherSelector && t._enhancedBetSlipPitcherSelector._isShowing && t._enhancedBetSlipPitcherSelector.hidePopUpMenu(t._enhancedBetSlipPitcherSelector);
    t._ausToteToolTipHtmlBuilder && t._ausToteToolTipHtmlBuilder.hideOverlay();
    t._stakeEntryType != t._stakeEntryTypes.deviceKeyBoard && t._stakeEntryHander._isShowing && t._stakeEntryHander.hide()
};
BetSlipController.prototype.betslipContentHeight = function () {
    return this._betslipContentHeight || (this._betslipContentHeight = window.clientViewport(!0).height - 135), this._betslipContentHeight
};
BetSlipController.prototype.prefixStyle = function (n) {
    return this._prefixStyle[n] || (this._prefixStyle[n] = window.top.ns_webconsolelib_util.Browser.getPrefixedStyleName(n)), this._prefixStyle[n]
};
BetSlipController.prototype.setScrollHeight = function () {
    if (!sProps.instantBet) {
        var t = $("#betslipFooter", "#bsDiv")[0],
            i = $(".betslipRetainSelections", "#bsDiv")[0],
            n = this.betslipContentHeight();
        i && (n -= i.getBoundingClientRect().height);
        t && (n -= t.getBoundingClientRect().height);
        $("li.betslipContent", "#bsDiv").css("max-Height", n + "px")
    }
};
BetSlipController.prototype.getScrollHeight = function () {
    var t = $("#betslipFooter", "#bsDiv")[0],
        i = $(".betslipRetainSelections", "#bsDiv")[0],
        n = this.betslipContentHeight();
    return i && (n -= i.getBoundingClientRect().height), t && (n -= t.getBoundingClientRect().height), n
};
BetSlipController.prototype.initialiseMicrophone = function () {
    sProps.clickToCall.enabled && (this._microphoneController || (this._microphoneController = new b365.Ui.Betslip.MicrophoneController(this._bsInst, this)), this._microphoneController.initMicrophoneChecks())
};
BetSlipController.prototype.updateCurrenyRate = function (n) {
    var t = this;
    return t._bsContext && t._bsContext.updateCurrenyRate ? (t._bsContext.updateCurrenyRate(n), !0) : !1
};
BetSlipController.prototype.clientActionInProgress = function (n) {
    var t = this;
    t._bsContext && t._bsContext.ClientActionInProgress && t._bsContext.ClientActionInProgress(n)
};
BetSlipController.prototype.betPlacementNotification = function (n) {
    var t = this;
    t._bsContext && t._bsContext.BetPlacementNotification && t._bsContext.BetPlacementNotification(n)
};
Type.registerNamespace("b365.Ui.Betslip");
b365.Ui.Betslip.FooterLinksReceiptRender = function (n) {
    this._bsInst = n;
    this._isValid = function () {
        return typeof this._bsInst != "undefined"
    };
    this._footerLinks = this._bsInst.footerLinks
};
b365.Ui.Betslip.FooterLinksReceiptRender.prototype = {
    render: function () {}
};
Type.registerNamespace("b365.Ui.Betslip");
b365.Ui.Betslip.FooterLinksSlipRender = function (n, t) {
    this._bsInst = n;
    this._isValid = function () {
        return typeof this._bsInst != "undefined"
    };
    this._footerLinks = this._bsInst.footerLinks;
    this._targetElem = t
};
b365.Ui.Betslip.FooterLinksSlipRender.prototype = {
    render: function () {
        var t, n, i;
        if (this._isValid && this._footerLinks && this._footerLinks.length > 0 && sProps.instantBet)
            for (t = 0; t < this._footerLinks.length; t++) n = this._footerLinks[t], i = $("<a/>", {
                "class": n.cssClass,
                html: n.text
            }), n.handler && i.click(n.handler), i.appendTo(this._targetElem);
        this._bsInst.footerLinks = null
    }
};
Type.registerNamespace("b365.Ui.Betslip");
b365.Ui.Betslip.FooterLiveAlertsReceipt = function () {
    function n(n, t) {
        this._bsInst = n;
        this._bsController = t;
        this._matchAlertFixtures = [];
        this._numberOfFixtures = 0;
        this._numberOfSubscriptions = 0;
        this._matchAlertsContainer = null
    }
    return n.HEADER_LINK = "BetSlipLiveAlert-Header__Link", n.HEADER_INNERTEXT = "BetSlipLiveAlert-Header__InnerText", n.HEADER_BUTTON = "BetSlipLiveAlert-Header__Button", n.HEADER_BUTTON_ACTIVE = "BetSlipLiveAlert-Header__Button--Active", n.ROW_CONTAINER = "BetSlipLiveAlert-RowContainer", n.ROW = "BetSlipLiveAlertRow", n.ROW_BUTTON = "BetSlipLiveAlertRow__Button", n.ROW_TEXT = "BetSlipLiveAlertRow__Text", n.ROW_BUTTON_ACTIVE = "BetSlipLiveAlertRow__Button--Active", n.prototype.render = function () {
        var t = this,
            u, f, e, i, r, o, s;
        if ((t._matchAlertsContainer = document.getElementById("betSlipLiveAlertButtons"), t._matchAlertsContainer) && (t._numberOfFixtures = parseInt(t._matchAlertsContainer.getAttribute("data-n"), 10), !(t._numberOfFixtures < 1)) && (u = document.getElementsByClassName(n.ROW_CONTAINER)[0], u) && (f = u.getElementsByClassName(n.ROW), f)) {
            for (e = 0; e < f.length; e++)(i = f[e], i) && (new b365.Ui.Betslip.ResponsiveClickHandler(i, t._ItemClickHandler.bind(t, i), !1), r = {}, r.fixtureId = parseInt(i.getAttribute("data-fixtureid")), r.classificationId = parseInt(i.getAttribute("data-classification")), r.alertKey = i.getAttribute("data-alertkey"), r.team1Id = parseInt(i.getAttribute("data-team1id")), r.team2Id = parseInt(i.getAttribute("data-team2id")), r.subscribed = null, t._matchAlertFixtures.push(r));
            t._matchAlertFixtures != 0 && (t._matchAlertsContainer.className = t._matchAlertsContainer.className.replace(" hidden", ""), o = document.getElementsByClassName(n.HEADER_LINK), o && o.length > 0 && new b365.Ui.Betslip.ResponsiveClickHandler(o[0], t._ExpandClickHandler.bind(t), !1), s = document.getElementsByClassName(n.HEADER_BUTTON), s && s.length > 0 && new b365.Ui.Betslip.ResponsiveClickHandler(s[0], t._HeaderClickHandler.bind(t), !1), t._matchAlertFixtures.length > 1 && (u.className += " hidden"), t._bsController.populateMatchAlerts(t._matchAlertFixtures))
        }
    }, n.prototype.setBetReceiptMatchAlertsState = function (t) {
        var u = this,
            e = document.getElementsByClassName(n.ROW_CONTAINER)[0],
            r, o, i, f, s;
        if (e) {
            for (r = 0, o = t.length; r < o; r++)(i = u.getFixtureByFixtureId(t[r].fixtureId), f = e.querySelectorAll("div." + n.ROW + "[data-fixtureid='" + i.fixtureId + "']")[0], f && i) && (s = f.getElementsByClassName(n.ROW_BUTTON)[0], u.toggleClass(s, n.ROW_BUTTON_ACTIVE, i.subscribed), i.subscribed && u._numberOfSubscriptions++);
            this._SetHeaderButtonState()
        }
    }, n.prototype._HeaderClickHandler = function () {
        var i = this,
            u = document.getElementsByClassName(n.HEADER_BUTTON)[0],
            o = document.getElementsByClassName("BetSlipLiveAlert-Header")[0],
            t, f, e, r, s, h;
        if (u && (t = u.className.indexOf(n.HEADER_BUTTON_ACTIVE) === -1, i.toggleClass(u, n.HEADER_BUTTON_ACTIVE, t), i.toggleClass(o, "BetSlipLiveAlert-Header--Active", t), i.toggleClass(o, "BetSlipLiveAlert-Header--SingleActive", t), i.toggleAllFixtures(t), f = document.getElementsByClassName(n.ROW_CONTAINER)[0], f))
            for (e = f.getElementsByClassName(n.ROW), r = 0, s = e.length; r < s; r++) h = e[r].getElementsByClassName(n.ROW_BUTTON)[0], i.toggleClass(h, n.ROW_BUTTON_ACTIVE, t)
    }, n.prototype._ExpandClickHandler = function () {
        var t = document.getElementsByClassName(n.ROW_CONTAINER)[0],
            i = this;
        transition = i._bsController.prefixStyle("transition");
        transform = i._bsController.prefixStyle("transform");
        visible = t.className.indexOf("hidden") == -1;
        elePosition = t.getBoundingClientRect();
        curHeight = elePosition.height;
        newHeight = 0;
        visible ? (t.style.maxHeight = curHeight + "px", newHeight = 0) : (i.toggleClass(t, "hidden"), elePosition = t.getBoundingClientRect(), newHeight = elePosition.height, t.style["max-height"] = curHeight + "px");
        requestAnimationFrame(function () {
            t.style[transition] = "max-height 0.2s";
            t.style["max-height"] = newHeight + "px";
            i.postTransition = function () {
                t.removeEventListener(window.top.TRANSITION_END, i.postTransition);
                t.style[transition] = "";
                t.style["max-height"] = "";
                newHeight == 0 && i.toggleClass(t, "hidden")
            };
            t.addEventListener(window.top.TRANSITION_END, i.postTransition)
        })
    }, n.prototype._ItemClickHandler = function (t) {
        var i = this,
            r = t.getElementsByClassName(n.ROW_BUTTON)[0],
            u, f;
        r && (u = parseInt(t.getAttribute("data-fixtureid"), 10), f = i.toggleFixtureSubscription(u, null), i.toggleClass(r, n.ROW_BUTTON_ACTIVE, f), i._SetHeaderButtonState())
    }, n.prototype.toggleFixtureSubscription = function (n, t) {
        var u = this,
            i = u.getFixtureByFixtureId(n),
            r;
        return i ? (r = t != null ? t : !i.subscribed, i.subscribed = r, this._bsController.setMatchAlertSubscriptionState([i]), r ? u._numberOfSubscriptions++ : u._numberOfSubscriptions--, r) : !1
    }, n.prototype.toggleAllFixtures = function (n) {
        for (var t = this, i = 0; i < t._matchAlertFixtures.length; i++) t._matchAlertFixtures[i].subscribed = n;
        this._bsController.setMatchAlertSubscriptionState(t._matchAlertFixtures);
        t._numberOfSubscriptions = n ? t._numberOfFixtures : 0
    }, n.prototype._SetHeaderButtonState = function () {
        var t = this,
            r = document.getElementsByClassName(n.HEADER_BUTTON)[0],
            i = document.getElementsByClassName("BetSlipLiveAlert-Header")[0];
        t.toggleClass(r, n.HEADER_BUTTON_ACTIVE, t._numberOfSubscriptions == t._numberOfFixtures);
        t.toggleClass(i, "BetSlipLiveAlert-Header--Active", t._numberOfSubscriptions == t._numberOfFixtures);
        t.toggleClass(i, "BetSlipLiveAlert-Header--SingleActive", t._numberOfSubscriptions > 0)
    }, n.prototype.getFixtureByFixtureId = function (n) {
        for (var i = this, t = 0, r = i._matchAlertFixtures.length; t < r; t++)
            if (n == i._matchAlertFixtures[t].fixtureId) return i._matchAlertFixtures[t];
        return null
    }, n.prototype.toggleClass = function (n, t, i) {
        if (n) {
            var r = n.className.indexOf(t);
            r === -1 ? (i === !0 || i == null) && (n.className += " " + t) : (i === !1 || i == null) && (n.className = n.className.replace(" " + t, ""))
        }
    }, n
}();
Type.registerNamespace("b365.Ui.Betslip");
b365.Ui.Betslip.DuplicateBetHandler = function (n, t) {
    this._bsInst = n;
    this._bsController = t;
    this._isValid = function () {
        return typeof this._bsInst != "undefined"
    }
};
b365.Ui.Betslip.DuplicateBetHandler.prototype = {
    handle: function () {
        this._isValid() && new b365.Ui.Betslip.ViewResetter(this._bsInst, this._bsController).reset()
    }
};
Type.registerNamespace("b365.Ui.Betslip");
b365.Ui.Betslip.ViewResetter = function (n, t) {
    this._bsInst = n;
    this._bsController = t;
    this._bsWrapper = $("#bsDiv");
    this._isValid = function () {
        return typeof this._bsInst != "undefined"
    }
};
b365.Ui.Betslip.ViewResetter.prototype = {
    reset: function () {
        this._isValid() && (this._bsInst.clearBets(!1), new b365.Ui.Betslip.UpdateStateHandler(this._bsInst).handle(), new b365.Ui.Betslip.LockUnlockHandler(this._bsInst, this._bsController).handle(!1, !1), $(".single-section, .multiple-section, .cast-section", this._bsWrapper).remove(), $("a.placeBet", this._bsWrapper).disableElement("disabled"), $("select.bet-slip-type", this._bsWrapper).disableElement(), $("#BetSlipTypeSelector", this._bsWrapper).disableElement(), $(".totals", this._bsWrapper).hide(), $("#taxWarningHeader").addClass("hidden"), new b365.Ui.Betslip.MessageDisplayHandler(this._bsInst, this._bsController).showMsg(betSlipML.pleasecheckmembers), $(".footer").removeClass("hidden"))
    }
};
Type.registerNamespace("b365.Ui.Betslip");
b365.Ui.Betslip.PhoneBetHandler = function (n, t) {
    this._bsInst = n;
    this._controller = t;
    this._popup = null;
    this._isValid = function () {
        return typeof this._bsInst != "undefined" && typeof this._controller != "undefined"
    }
};
b365.Ui.Betslip.PhoneBetHandler.prototype = {
    initiate: function (n) {
        $("#phoneBetOverlay").length == 0 && (this.addOverlay(), this._bsInst.refresh(this._bsInst.reqTypePhoneBet, "cs=" + encodeURIComponent(n), this._controller))
    },
    displayPopup: function (n) {
        n && this.addPopup(n)
    },
    addPopup: function (n) {
        this._popup = $(n);
        this._popup.css({
            top: this.getPopupTopPosition()
        });
        this.addPopupListeners();
        $("body").append(this._popup)
    },
    addPopupListeners: function () {
        $("#closeIcon", this._popup).on("click", $.proxy(function () {
            this.removePopup();
            this.removeOverlay()
        }, this));
        $("#phoneBetOverlay").on("click", $.proxy(function () {
            this.removePopup();
            this.removeOverlay()
        }, this));
        var n = this;
        $(window).off("resize.phonepopup").on("resize.phonepopup", function () {
            n._popup.css({
                top: n.getPopupTopPosition(0)
            })
        })
    },
    addOverlay: function () {
        var n = $("<div/>", {
            id: "phoneBetOverlay",
            css: {
                height: document.body.scrollHeight
            }
        });
        $("body").append(n);
        $("html").addClass("overlay-on")
    },
    removePopup: function () {
        this._popup.remove()
    },
    removeOverlay: function () {
        $("#phoneBetOverlay").remove();
        $("html").removeClass("overlay-on")
    },
    getPopupTopPosition: function (n) {
        var t = typeof n != "undefined" ? n : $(window).scrollTop();
        return Math.round($(window).height() * .15) + t
    }
};
Type.registerNamespace("b365.Ui.Betslip");
b365.Ui.Betslip.MaintenanceMessageHandler = function () {
    this._popup = null;
    this._isValid = function () {
        return !0
    }
};
b365.Ui.Betslip.MaintenanceMessageHandler.prototype = {
        displayPopup: function (n) {
            n && (this.addOverlay(), this.addPopup(n))
        },
        addPopup: function (n) {
            var t = '<div class="popupContainer maintenanceMessage"><div class="popupHeader"><\/div><div class="popupText"><div>' + n + '<\/div><div class="greenButton" id="okButton">OK<\/div><\/div><\/div>';
            this._popup = $(t);
            this._popup.css({
                top: this.getPopupTopPosition()
            });
            this.addPopupListeners();
            $("body").append(this._popup)
        },
        addPopupListeners: function () {
            $("#okButton", this._popup).on("click", $.proxy(function () {
                this.removePopup();
                this.removeOverlay()
            }, this));
            var n = this;
            $(window).off("resize.maintenancepopup").on("resize.maintenancepopup", function () {
                n._popup.css({
                    top: n.getPopupTopPosition(0)
                })
            })
        },
        addOverlay: function () {
            var n = $("<div/>", {
                id: "maintenanceMessageOverlay",
                css: {
                    height: document.body.scrollHeight
                }
            });
            $("body").append(n)
        },
        removePopup: function () {
            this._popup.remove()
        },
        removeOverlay: function () {
            $("#maintenanceMessageOverlay").remove()
        },
        getPopupTopPosition: function (n) {
            var t = typeof n != "undefined" ? n : $(window).scrollTop();
            return Math.round($(window).height() * .15) + t
        }
    },
    function () {
        Type.registerNamespace("b365.Ui.Betslip");
        b365.Ui.Betslip.ItemSubscriptionManager = function (n) {
            this._bsInst = n;
            this._bsController = null;
            this._bsWrapper = $("#bsDiv");
            this._subscriptions = [];
            this._bbSubscriptions = {};
            this._isValid = function () {
                return typeof this._bsInst != "undefined" && typeof window.top.ns_gen5_util != "undefined"
            }
        };
        b365.Ui.Betslip.ItemSubscriptionManager.prototype = {
            attach: function (n) {
                this.subscribe(n)
            },
            detach: function () {
                this._isValid() && ($('li[data-item-type="single"]', this._bsWrapper).each(function () {
                    var n = $(this).get(0),
                        t;
                    n && n.wrapper && (t = n.wrapper, t.detatchStem(), window.top.Locator.subscriptionManager.unsubscribe(t._topic, window.top.ns_gen5_data.SubscriptionManagerFlags.BATCH, !0, !0))
                }), window.top.Locator.validationManager.processValidationCycleNow())
            },
            subscribe: function (n) {
                var f, h, v, c, e, u, y, o, l, i, a, s, r, t;
                if (this._isValid() && this._bsWrapper.find(".betReceipt").length <= 0) {
                    for (this._bsController = n, f = this._bsInst.getBetItems(this._bsInst.betTypeNormal), i = 0; i < f.length; i++)
                        if (h = f[i].getCnItem("fp"), v = f[i].getCnItem("f"), c = $('li[data-item-fpid="' + h + '"][data-fixtureid="' + v + '"]', this._bsWrapper), e, c && (e = c.find(".js-RelatedMarketMenu")), e.length > 0)
                            for (u = e[0].children, y = u.length, r = 0; r < y; r++) t = u[r].getAttribute("data-topic"), t ? (o = u[r].getAttribute("data-item"), o && (h = o.substring(2, o.indexOf("#"))), this._subscriptions[t] || (this._subscriptions[t] = []), this._subscriptions[t].push(i)) : u[r].className.indexOf("bs-EachWayExtraBetType_MenuItemWrapper") > -1 && (t = u[r].getAttribute("data-topic"), this._subscriptions[t] || (this._subscriptions[t] = []), this._subscriptions[t].push(i)), window.top.Locator.subscriptionManager.subscribe(t, new window.top.ns_gen5_util.Delegate(this, this._snapshotRelatedMarketHandler), !0, !0, null, !0);
                        else t = f[i].getTopic(), t && (this._subscriptions[t] = i, window.top.Locator.subscriptionManager.subscribe(t, new window.top.ns_gen5_util.Delegate(this, this._snapshotHandler), !0, !0, null, !0));
                    for (l = this._bsInst.getBetItems(this._bsInst.betTypeBetBuilder), i = 0; i < l.length; i++)
                        for (a = l[i], s = a.getBBItems(), r = 0; r < s.length; r++) t = s[r].getValue("TP"), t && (this._bbSubscriptions[t] || (this._bbSubscriptions[t] = [], window.top.Locator.subscriptionManager.subscribe(t, new window.top.ns_gen5_util.Delegate(this, this._betBuilderSnapshotHandler), !0, !0, null, !0)), this._bbSubscriptions[t].push({
                            index: i,
                            betItem: a,
                            subItem: s[r]
                        }))
                }
            },
            unsubscribe: function () {
                var u, o, l, t, r, a, s, i;
                if (this._isValid()) {
                    var e = this._bsInst.getBetItems(),
                        h = this._bsInst.getBetItems(this._bsInst.betTypeBetBuilder),
                        f, n, c = [];
                    for (t = 0, r = e.length; t < r; t++)
                        if (u = $('li[data-item-id="' + t + '"][data-item-type="single"]', this._bsWrapper).get(0), u && (f = $(u).find(".js-RelatedMarketMenu"), u.wrapper && u.wrapper.detatchStem()), f && f.length > 0)
                            for (o = f[0].children, l = o.length, i = 0; i < l; i++) n = o[i].getAttribute("data-topic"), n && c.indexOf(n) == -1 && (c.push(n), window.top.Locator.subscriptionManager.unsubscribe(n, window.top.ns_gen5_data.SubscriptionManagerFlags.BATCH, !0, !0));
                        else e[t] && (n = e[t].getTopic()), n && window.top.Locator.subscriptionManager.unsubscribe(n, window.top.ns_gen5_data.SubscriptionManagerFlags.BATCH, !0, !0);
                    for (t = 0, r = h.length; t < r; t++)
                        for (a = h[t], s = a.getBBItems(), i = 0; i < s.length; i++) n = s[i].getValue("TP"), n && window.top.Locator.subscriptionManager.unsubscribe(n, window.top.ns_gen5_data.SubscriptionManagerFlags.BATCH, !0, !0);
                    window.top.Locator.validationManager.processValidationCycleNow()
                }
            },
            _betBuilderSnapshotHandler: function (n) {
                for (var f = window.top.Locator.treeLookup.getReference(n.type), i = this._bbSubscriptions[n.type], r, u, t = 0; t < i.length; t++) r = $('li[data-item-id="' + i[t].index + '"][data-item-type="betbuilder"]', this._bsWrapper).get(0), r && (u = new b365.Ui.Betslip.ItemDisplayBetBuilder(r, this._bsInst, this._bsController, n.type, i[t].index, i[t].betItem, i[t].subItem), u.stem = f, u.initialize())
            },
            _snapshotHandler: function (n) {
                var t = window.top.Locator.treeLookup.getReference(n.type),
                    u, i, r;
                t && (u = this._subscriptions[t.data.IT], i = $('li[data-item-id="' + u + '"][data-item-type="single"]', this._bsWrapper).get(0), i && (r = new b365.Ui.Betslip.ItemDisplay(i, this._bsInst, this._bsController, n.type), r.stem = t, r.initialize()))
            },
            _snapshotRelatedMarketHandler: function (n) {
                var f = window.top.Locator.treeLookup.getReference(n.type),
                    i, e, r, u, o, t;
                if (f && (o = this._subscriptions[f.data.IT].shift(), t = $('li[data-item-id="' + o + '"][data-item-type="single"]', this._bsWrapper).get(0), t)) {
                    if (this._bsController && this._bsController._dlg && (i = $("#okButton"), i.length > 0 && (e = i[0].getAttribute("data-action"), e && e === "refer" && (r = $("#bsCD"), r.length > 0 && r[0].hasAttribute("style") && r.css("display") != "none" && this._bsController._dlg.hideDialog(), i.removeClass("disabled"), $("#closeButton").removeClass("disabled")))), t.getElementsByClassName("bs-AusRaceBetType").length > 0) u = new b365.Ui.Betslip.ItemDisplayAusRacing(t, this._bsInst, this._bsController, n.type);
                    else if (t.getElementsByClassName("bs-EachWayExtraBetType").length > 0) u = new b365.Ui.Betslip.ItemDisplayEachWayExtra(t, this._bsInst, this._bsController, n.type);
                    else return;
                    u.stem = f;
                    u.initialize()
                }
            }
        }
    }();
Type.registerNamespace("b365.Ui.Betslip");
typeof window.top.ns_gen5_ui != "undefined" && (b365.Ui.Betslip.ItemDisplay = function () {
    function n(n, t, i, r) {
        s.Wrapper.call(this, n);
        this._delegate_renewSubscriptionHandler = new e(this, this._renewSubscriptionHandler);
        this._bsInst = t;
        this._bsController = i;
        this._topic = r;
        this._ausRacingPlbtidLookup = ["20203", "20204", "40232", "40233", "880203", "880204"];
        this._isValid = function () {
            return typeof this._bsInst != "undefined" && !$(".betReceipt", "#betslipContainer").length > 0 && this.stem && !this._bsInst._lock
        };
        $("#bsDiv").on(this._topic, $.proxy(this.RemoveStemDelegates, this))
    }
    var l = extend(window.top.ns_gen5_ui.ComponentStemBase, n),
        r = window.top.ns_gen5_ui.TextNode,
        s = window.top.ns_gen5_ui.Component,
        t = window.top.ns_gen5_util.OddsConverter,
        u = window.top.ns_gen5_util.OddsType,
        a = window.top.ns_gen5_data.StemEvent,
        f = window.top.ns_gen5_data.SubscriptionManagerEvent,
        e = window.top.ns_gen5_util.Delegate,
        i = "suspended",
        h = "hcapChange",
        c = "oddsChange",
        o;
    return n.prototype._topic = null, n.prototype._oddsTypeOverride = 0, n.prototype.decimalPlaces = 2, n.prototype._hasNormalOdds = !1, n._betSlipWrapper = null, n.prototype.betSlipWrapper = function () {
        return this._betSlipWrapper || (this._betSlipWrapper = $("#bsDiv")), this._betSlipWrapper
    }, n.prototype.RemoveStemDelegates = function () {
        this.detatchStem()
    }, n.prototype.createChildren = function () {
        var o, u;
        if (this._isValid()) {
            var n = this.stem.data,
                e = this._getElementByClassName("hdCapDisplay"),
                t = this._getElementByClassName("odds");
            this._hasNormalOdds = this._bsInst.getSlipType() !== this._bsInst.slipFixedTeaser;
            t && (t.tagName.toLowerCase() === "select" && (t = t.children[0]), t.firstChild ? this._oddsText = new r.Wrapper(t.firstChild) : (this._oddsText = new r, t.appendChild(this._oddsText._element)));
            e && (this._handicapText = new r.Wrapper(e.firstChild));
            n && (this._betItem = this._bsInst.getBetItemByFixtureParticipant(this._bsInst.betTypeNormal, n.FI, n.ID, "fp"));
            this._betItem && (this._oddsTypeOverride = this._betItem.getOddsOverride() || this._oddsTypeOverride, this.decimalPlaces = this._betItem.getDecimalPlaces() || this.decimalPlaces, o = this._element.className.indexOf(i) > -1, this._oddsChanged = "OD" in n && this._betItem.getCnItem("o") !== n.OD && this._hasNormalOdds, this._handicapChanged = "HA" in n && this._betItem.getCnItem("ln") && parseFloat(this._betItem.getCnItem("ln")) !== parseFloat(n.HA), u = this._element.getAttribute("data-item-plbtid"), this._suspendedChanged = "SU" in n && n.SU === "1" || this._hasNormalOdds && u && this._ausRacingPlbtidLookup && this._ausRacingPlbtidLookup.indexOf(u) > -1 && this._betItem.getCnItem("o") && (this._betItem.getCnItem("o") === "SP" || this._betItem.getCnItem("o") === "0/0"), this._topic && window.top.Locator.subscriptionManager.addEventListener(f.RENEW_SUBSCRIPTION, this._delegate_renewSubscriptionHandler), n.SA && this._betItem.setCnItem("sa", n.SA))
        }
    }, n.prototype.commitProperties = function () {
        var r, o, p, w, s, f, l;
        if (this._isValid()) {
            r = this.stem.data;
            this._betItem = this._bsInst.getBetItemByFixtureParticipant(this._bsInst.betTypeNormal, r.FI, r.ID, "fp");
            var a = this._oddsChanged || this._handicapChanged,
                v = this._suspendedChanged,
                e = 0;
            if (this._oddsChanged && this._handicapChanged ? e = 3 : this._handicapChanged ? e = 2 : this._oddsChanged && (e = 1), this._betItem && e > 0 && this._betItem.setStItem("olc", String(e)), this._betItem && (this._oddsChanged || this._handicapChanged) && "SA" in r && this._betItem.setCnItem("sa", r.SA), o = !1, this._oddsChanged && this._oddsText) {
                var n = r.OD,
                    y = window.top.Locator.user.oddsTypeId,
                    b = this._oddsTypeOverride == 4 || this._oddsTypeOverride == 2,
                    k = this._oddsTypeOverride == 1;
                o = t.AreOddsBelowMinimum(n);
                o ? n = t.NOT_OFFERED : n == "0/0" ? n = "SP" : y == u.DECIMAL || b ? n = t.ConvertOddsDecimal(n, this.decimalPlaces) : y != u.AMERICAN && (y != u.AMERICANFRACTIONAL || k) || (n = t.ConvertOddsUS(n));
                this._oddsText.setText(n || "");
                this._bsController._enhancedBetSlipOddsSelector && this._bsController._enhancedBetSlipOddsSelector.hidePopUpMenu();
                p = this._getElementByClassName("EnhancedOddsSelection");
                p && (p.innerHTML = n, w = this._getElementByClassName("EnhancedOdds"), w && (s = w.firstElementChild, s && (s.innerText = n, s.setAttribute("data-item", n))));
                this.addStyle(c);
                this._betItem.setCnItem("o", r.OD)
            }
            this._handicapChanged && this._handicapText && (f = r.HA || "", f = f.length > 0 && f.indexOf(".") == -1 ? Number(f).toFixed(1) : f, this._bsInst.getSlipType() === this._bsInst.slipFixedTeaser && (f = f.replace("+", "")), this._handicapText.setText(f), this.addStyle(h), this._betItem.setCnItem("ln", r.HA));
            l = !1;
            this._suspendedChanged && (this._suspendedChanged = !1, r.SU === "1" ? (this._betItem.setStItem("_s", "1"), l = !0) : this._betItem.setStItem("_s", "0"));
            (v || this._oddsChanged) && (l || o ? this.addStyle(i) : this.removeStyle(i));
            (a || v) && this._bsInst.updateState();
            a && new b365.Ui.Betslip.TotalsCalculator(this._bsInst, this._bsController).calculate();
            (a || v) && new b365.Ui.Betslip.OddsLineChangedHandler(this._bsInst, this._bsController).handle(l)
        }
    }, n.prototype.suspend = function () {
        this._betItem && this._betItem.setStItem("_s", "1");
        this.addStyle(i);
        this._bsInst && this._bsController && new b365.Ui.Betslip.OddsLineChangedHandler(this._bsInst, this._bsController).handle(!0)
    }, n.prototype.stemUpdateHandler = function (n, t) {
        this._oddsChanged = this._oddsChanged || "OD" in t && t.OD !== this._oddsText.getText() && this._hasNormalOdds;
        this._handicapChanged = this._handicapChanged || "HA" in t && this._betItem.getCnItem("ln") && parseFloat(this._betItem.getCnItem("ln")) !== parseFloat(t.HA);
        this._suspendedChanged = "SU" in t;
        this.invalidateProperties()
    }, o = n.prototype.stemDeleteHandler, n.prototype.stemDeleteHandler = function (n) {
        this._isValid() && this.suspend();
        o.call(this, n)
    }, n.prototype.detatchStem = function () {
        window.top.Locator.subscriptionManager.hasEventListenerWithDelegate(f.RENEW_SUBSCRIPTION, this._delegate_renewSubscriptionHandler) && window.top.Locator.subscriptionManager.removeEventListener(f.RENEW_SUBSCRIPTION, this._delegate_renewSubscriptionHandler);
        this.stem && (this.stem.removeDelegate(this), this.stem = null)
    }, n.prototype._renewSubscriptionHandler = function () {
        var n = this;
        this.detatchStem();
        window.top.Locator.validationManager.callLater(function () {
            window.top.Locator.subscriptionManager.subscribe(n._topic, new e(n, n._snapshotHandler), !0, !0, null, !0)
        })
    }, n.prototype._snapshotHandler = function () {
        var n = this;
        window.top.Locator.validationManager.callLater(function () {
            n._reInitialise()
        })
    }, n.prototype._reInitialise = function () {
        var n = window.top.Locator.treeLookup.getReference(this._topic);
        n && (this.stem = n, this.initialize())
    }, n.prototype._getElementByClassName = function (n) {
        var t = this._element.getElementsByClassName(n);
        return t.length > 0 ? t[0] : null
    }, n
}());
Type.registerNamespace("b365.Ui.Betslip");
typeof window.top.ns_gen5_ui != "undefined" && (b365.Ui.Betslip.ItemDisplayAusRacing = function () {
    function n(n, t, i, r) {
        o.Wrapper.call(this, n);
        this._delegate_renewSubscriptionHandler = new f(this, this._renewSubscriptionHandler);
        this._ausRacingPlbtidLookup = ["20203", "20204", "40232", "40233", "880203", "880204"];
        this._bsInst = t;
        this._bsController = i;
        this._topic = r;
        this._isValid = function () {
            return typeof this._bsInst != "undefined" && !$(".betReceipt", this._bsWrapper).length > 0 && this.stem && !this._bsInst._lock
        }
    }
    var h = extend(window.top.ns_gen5_ui.ComponentStemBase, n),
        c = window.top.ns_gen5_ui.TextNode,
        o = window.top.ns_gen5_ui.Component,
        t = window.top.ns_gen5_util.OddsConverter,
        r = window.top.ns_gen5_util.OddsType,
        l = window.top.ns_gen5_data.StemEvent,
        u = window.top.ns_gen5_data.SubscriptionManagerEvent,
        f = window.top.ns_gen5_util.Delegate,
        i = "suspended",
        s = "oddsChange",
        e;
    return n.prototype._topic = null, n.prototype._oddsTypeOverride = 2, n.prototype.decimalPlaces = 2, n.prototype._hasNormalOdds = !1, n._betSlipWrapper = null, n.prototype.betSlipWrapper = function () {
        return this._betSlipWrapper || (this._betSlipWrapper = $("#bsDiv")), this._betSlipWrapper
    }, n.prototype.createChildren = function () {
        var n, r, t;
        this._isValid() && (n = this.stem.data, this._hasNormalOdds = this._bsInst.getSlipType() !== this._bsInst.slipFixedTeaser, n && (this._betItem = this._bsInst.getBetItemByFixtureParticipant(this._bsInst.betTypeNormal, n.FI, n.ID, "fp")), this._betItem && (this.decimalPlaces = this._betItem.getDecimalPlaces() || this.decimalPlaces, r = this._element.className.indexOf(i) > -1, this._oddsChanged = "OD" in n && this._betItem.getCnItem("o") !== n.OD && this._hasNormalOdds, t = this._element.getAttribute("data-item-plbtid"), this._suspendedChanged = "SU" in n && n.SU === "1" || this._hasNormalOdds && t && this._ausRacingPlbtidLookup.indexOf(t) > -1 && this._betItem.getCnItem("o") && (this._betItem.getCnItem("o") === "SP" || this._betItem.getCnItem("o") === "0/0"), this._topic && window.top.Locator.subscriptionManager.addEventListener(u.RENEW_SUBSCRIPTION, this._delegate_renewSubscriptionHandler)))
    }, n.prototype.commitProperties = function () {
        var t, w, o, ct, f, l, v, b, lt, y, k, it, rt, d, at;
        if (this._isValid()) {
            t = this.stem.data;
            this._betItem = this._bsInst.getBetItemByFixtureParticipant(this._bsInst.betTypeNormal, t.FI, t.ID, "fp");
            var g = this._getElementByClassName("bs-AusRaceBetType_Menu"),
                vt = g.parentElement.parentElement.getElementsByClassName("ausracebettype-sel")[0],
                nt = g.children,
                yt = vt.children,
                ut = nt.length,
                a, ft, v, et, ot, tt, r, e = null,
                n, u, h, st = $("#bsDiv > div.bs-AusRaceBetType_Wrapper > div.bs-AusRaceBetType_Menu[data-participantid='" + g.getAttribute("data-participantid") + "']")[0],
                p = st ? st.children : null;
            if (this._oddsChanged) {
                for (u = 0; u < ut; u++) {
                    n = nt[u];
                    r = p ? p[u] : null;
                    var pt = yt[u],
                        c = n.getAttribute("data-item"),
                        ht = c.indexOf("FW") > -1 && c.indexOf("FP") > -1;
                    if (n.getAttribute("data-bettype") == "FixedEachWay" ? (tt = n, e = r, ft = n.className.indexOf("selected") > -1) : n.getAttribute("data-bettype") == "FixedWin" ? et = n : n.getAttribute("data-bettype") == "FixedPlace" && (ot = n), c.indexOf("FW") > -1 || c.indexOf("FP") > -1) {
                        for (w = c.split("~"), o = "", h = 0; h < w.length; h++) f = w[h].split("#"), l = f[0], f.push(l.substr(0, 2)), l = f[0] = l.substring(2, l.length), o += f[2] + f[0] + "#", t.ID == l ? (o += t.OD, f[1] = t.OD) : o += f[1], c.indexOf(t.ID) > -1 && (ht || (a = this.getOdds(t.OD), n.setAttribute("data-odds", a), r && r.setAttribute("data-odds", a)), n.className.indexOf("selected") > -1 && (ht && h == 0 && (this._betItem = this._bsInst.getBetItemByFixtureParticipant(this._bsInst.betTypeNormal, t.FI, f[0], "fp")), this._betItem && (ct = !0, h == 0 ? this._betItem.setCnItem("o", f[1]) : this._betItem.setCnItem("po", f[1])))), w.length == 2 && h == 0 && (o += "~");
                        pt.value = o;
                        n.setAttribute("data-item", o);
                        r && r.setAttribute("data-item", o)
                    }
                }
                tt && (v = et.getAttribute("data-odds") + ", " + ot.getAttribute("data-odds"), tt.setAttribute("data-odds", v), e && e.setAttribute("data-odds", v), ft && (a = v));
                ct && this._betItem && (this._betItem.setStItem("olc", "1"), "SA" in t && this._betItem.setCnItem("sa", t.SA), b = this._getElementByClassName("odds"), b && (b.innerHTML = b.innerHTML = a, this.addStyle(s), this._betItem.setCnItem("o", t.OD)), y = !1, this._suspendedChanged && (this._suspendedChanged = !1, t.SU === "1" ? (this._betItem.setStItem("_s", "1"), y = !0) : this._betItem.setStItem("_s", "0")), lt = !1, (this._suspendedChanged || this._oddsChanged) && (y || lt ? this.addStyle(i) : this.removeStyle(i)), (this._oddsChanged || this._suspendedChanged) && this._bsInst.updateState(), this._oddsChanged && new b365.Ui.Betslip.TotalsCalculator(this._bsInst, this._bsController).calculate(), (this._oddsChanged || this._suspendedChanged) && new b365.Ui.Betslip.OddsLineChangedHandler(this._bsInst, this._bsController).handle(y))
            }
            for (e = null, u = 0; u < ut; u++) n = nt[u], d = n.getAttribute("data-bettype"), r = p ? p[u] : null, e = null, d == "FixedEachWay" ? (k = n, e = r) : d == "FixedWin" ? it = n : d == "FixedPlace" && (rt = n), at = n.getAttribute("data-topic"), at == t.IT && (t.SU == "1" ? (y = !0, $(n).addClass("suspend"), r && $(r).addClass("suspend")) : ($(n).removeClass("suspend"), r && $(r).removeClass("suspend")));
            k && (it && $(it).hasClass("suspend") || rt && $(rt).hasClass("suspend") ? ($(k).addClass("suspend"), e && $(e).addClass("suspend")) : ($(k).removeClass("suspend"), e && $(e).removeClass("suspend")))
        }
    }, n.prototype.getOdds = function (n) {
        var i = n,
            u = this._oddsTypeOverride || window.top.Locator.user.oddsTypeId;
        return areOddsBelowAllowedMinimum = t.AreOddsBelowMinimum(i), areOddsBelowAllowedMinimum ? i = t.NOT_OFFERED : i == "0/0" ? i = "SP" : u == r.DECIMAL ? i = t.ConvertOddsDecimal(i, this.decimalPlaces) : u == r.AMERICAN && (i = t.ConvertOddsUS(i)), i
    }, n.prototype.suspend = function () {
        this._betItem && this._betItem.setStItem("_s", "1");
        this.addStyle(i);
        this._bsInst && this._bsController && new b365.Ui.Betslip.OddsLineChangedHandler(this._bsInst, this._bsController).handle(!0)
    }, n.prototype.stemUpdateHandler = function (n) {
        var t = n.data;
        this._oddsChanged = this._oddsChanged || "OD" in t && this._hasNormalOdds;
        this._suspendedChanged = "SU" in t;
        this.invalidateProperties()
    }, e = n.prototype.stemDeleteHandler, n.prototype.stemDeleteHandler = function (n) {
        this._isValid() && this.suspend();
        e.call(this, n)
    }, n.prototype.detatchStem = function () {
        this.stem && this._betItem && this._topic && window.top.Locator.subscriptionManager.removeEventListener(u.RENEW_SUBSCRIPTION, this._delegate_renewSubscriptionHandler);
        this.stem && (this.stem.removeDelegate(this), this.stem = null)
    }, n.prototype._renewSubscriptionHandler = function () {
        var n = this;
        this.detatchStem();
        window.top.Locator.validationManager.callLater(function () {
            window.top.Locator.subscriptionManager.subscribe(n._topic, new f(n, n._snapshotHandler), !0, !0, null, !0)
        })
    }, n.prototype._snapshotHandler = function () {
        var n = this;
        window.top.Locator.validationManager.callLater(function () {
            n._reInitialise()
        })
    }, n.prototype._reInitialise = function () {
        var n = window.top.Locator.treeLookup.getReference(this._topic);
        n && (this.stem = n, this.initialize())
    }, n.prototype._getElementByClassName = function (n) {
        var t = this._element.getElementsByClassName(n);
        return t.length > 0 ? t[0] : null
    }, n
}());
Type.registerNamespace("b365.Ui.Betslip");
typeof window.top.ns_gen5_ui != "undefined" && (b365.Ui.Betslip.ItemDisplayEachWayExtra = function () {
    function t(n, t, i, r) {
        f.Wrapper.call(this, n);
        this._delegate_renewSubscriptionHandler = new e(this, this._renewSubscriptionHandler);
        this._bsInst = t;
        this._bsController = i;
        this._topic = r;
        this._ausRacingPlbtidLookup = ["20203", "20204", "40232", "40233", "880203", "880204"];
        this._isValid = function () {
            return typeof this._bsInst != "undefined" && !$(".betReceipt", "#betslipContainer").length > 0 && this.stem && !this._bsInst._lock
        }
    }
    var h = extend(b365.Ui.Betslip.ItemDisplay, t),
        c = window.top.ns_gen5_ui.TextNode,
        f = window.top.ns_gen5_ui.Component,
        n = window.top.ns_gen5_util.OddsConverter,
        r = window.top.ns_gen5_util.OddsType,
        l = window.top.ns_gen5_data.StemEvent,
        a = window.top.ns_gen5_data.SubscriptionManagerEvent,
        e = window.top.ns_gen5_util.Delegate,
        o = document.getElementById("bsDiv"),
        i = "suspended",
        s = "oddsChange",
        u;
    return t.prototype.stemUpdateHandler = function (n) {
        var t = n.data;
        this._betItem = this._bsInst.getBetItemByFixtureParticipant(this._bsInst.betTypeNormal, t.FI, t.ID, "fp");
        this._suspendedChanged = "SU" in t;
        this._betItem ? (this._oddsChanged = this._oddsChanged || "OD" in t && this._hasNormalOdds && this._betItem.getCnItem("o") !== t.OD, (this._oddsChanged || this._suspendedChanged) && this.invalidateProperties()) : (this._oddsChanged = this._oddsChanged || "OD" in t && this._hasNormalOdds, this.updateRelatedItems())
    }, u = t.prototype.stemDeleteHandler, t.prototype.stemDeleteHandler = function (n) {
        this._suspendedChanged = !0;
        this._deleted = !0;
        this.invalidateProperties();
        u.call(this, n)
    }, t.prototype.commitProperties = function () {
        var u, t, a, v, y, o;
        if (this._isValid()) {
            u = this.stem.data;
            this._betItem = this._bsInst.getBetItemByFixtureParticipant(this._bsInst.betTypeNormal, u.FI, u.ID, "fp");
            var p = this._element.getAttribute("data-item-fpid") == u.ID,
                f = this._oddsChanged && p,
                h = this._suspendedChanged && p,
                c = 0;
            f && (c = 1);
            c > 0 && this._betItem && this._betItem.setStItem("olc", String(c));
            f && "SA" in u && this._betItem && this._betItem.setCnItem("sa", u.SA);
            var l = !1,
                w = this._getElementByClassName("odds"),
                e = this._deleted || u.SU == "1";
            f && w && (t = u.OD, a = this._oddsTypeOverride || window.top.Locator.user.oddsTypeId, l = n.AreOddsBelowMinimum(t), l ? t = n.NOT_OFFERED : t == "0/0" ? t = "SP" : a == r.DECIMAL ? t = n.ConvertOddsDecimal(t, this.decimalPlaces) : a == r.AMERICAN && (t = n.ConvertOddsUS(t)), this._betItem && (w.innerHTML = t || "", this._bsController._enhancedBetSlipOddsSelector && this._bsController._enhancedBetSlipOddsSelector.hidePopUpMenu(), v = this._getElementByClassName("EnhancedOddsSelection"), v && (v.innerHTML = t, y = this._getElementByClassName("EnhancedOdds"), y && (o = y.firstElementChild, o && (o.innerText = t, o.setAttribute("data-item", t)))), this.addStyle(s), this._betItem.setCnItem("o", u.OD), this._bsInst.updateState(), f && new b365.Ui.Betslip.TotalsCalculator(this._bsInst, this._bsController).calculate(), (f || h) && new b365.Ui.Betslip.OddsLineChangedHandler(this._bsInst, this._bsController).handle(e)));
            this._suspendedChanged && this._betItem && (h && (e ? this._betItem.setStItem("_s", "1") : this._betItem.setStItem("_s", "0")), (h || f) && (e || l ? this.addStyle(i) : this.removeStyle(i)), this._bsInst.updateState(), new b365.Ui.Betslip.OddsLineChangedHandler(this._bsInst, this._bsController).handle(e));
            this.updateRelatedItems();
            this._oddsChanged = !1;
            this._suspendedChanged = !1
        }
    }, t.prototype.updateRelatedItems = function () {
        var e = this.stem.data,
            a = e.OD,
            s = !1,
            u, f, l, t, h, c;
        if ((this._oddsChanged || this._suspendedChanged) && (u = o.querySelectorAll(".bs-EachWayExtraBetType_MenuItemWrapper[data-participantid='" + e.ID + "']"), u))
            for (f = 0, l = u.length; f < l; f++) t = e.OD, u[f].setAttribute("data-odds", t), h = this._oddsTypeOverride || window.top.Locator.user.oddsTypeId, s = n.AreOddsBelowMinimum(t), s ? t = n.NOT_OFFERED : t == "0/0" ? t = "SP" : h == r.DECIMAL ? t = n.ConvertOddsDecimal(t, this.decimalPlaces) : h == r.AMERICAN && (t = n.ConvertOddsUS(t)), u[f].querySelector(".bs-EachWayExtraBetType_MenuItemOdds").innerText = t, c = this._deleted || e.SU == "1", c && u[f].className.indexOf(i) == -1 || s ? u[f].className = u[f].className + " " + i : c || (u[f].className = u[f].className.replace(" " + i, ""))
    }, t._betSlipWrapper = null, t
}());
Type.registerNamespace("b365.Ui.Betslip");
b365.Ui.Betslip.BetBuilderPriceCalc = function () {
    function t() {}
    var n = {},
        i = 0,
        r = function (t, r, f) {
            for (var c = r.getBBItems(), l = "f=" + r.getStItem("f") + "&l=" + window.top.Locator.user.languageId + "&p=", o = "", e, h, s = 0; s < c.length; s++) o.length && (o += "|"), o += c[s].getValue("fp");
            l += encodeURIComponent(o);
            e = new XMLHttpRequest;
            h = !1;
            e.onreadystatechange = function () {
                if (e.readyState == 4 && !h) {
                    if (h = !0, e.onreadystatechange = null, !n[t]) return;
                    delete n[t];
                    i--;
                    e.status == 200 ? u(r, e.responseText, f) : f.updateOdds(null)
                }
            };
            e.open("POST", "/betbuilderapi/priceip", !0);
            e.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
            e.withCredentials = !1;
            e.send(l)
        },
        u = function (n, t, i) {
            var o = n.getBBItems(),
                u = "bbprice",
                r, f, e;
            window.top.ns_gen5_data.DataUtil.ParseMessage(t, u);
            r = window.top.Locator.treeLookup.getReference(u);
            r ? (f = r.data.OD, e = r.data.PO || r.data.OD, i.updateOdds(f, e)) : i.updateOdds(null)
        };
    return t.PendingRequests = function () {
        return i > 0
    }, t.FetchPrice = function (t, u, f) {
        if (!n[t]) {
            var e = setTimeout(function () {
                r(t, u, f)
            }, Math.floor(Math.random() * 5e3));
            i++;
            n[t] = e
        }
    }, t.CancelPriceFetch = function (t) {
        var r = n[t];
        return r ? !0 : !1
    }, t
}();
Type.registerNamespace("b365.Ui.Betslip");
b365.Ui.Betslip.ItemDisplayBetBuilder = function () {
    function n(n, t, r, u, e, o, s) {
        f.Wrapper.call(this, n);
        this._bsInst = t;
        this._bsController = r;
        this._topic = u;
        this._index = e;
        this._betItem = o;
        this._subItem = s;
        this._bsWrapper = $("#bsDiv");
        this.requestPriceOnUnsuspend = !1;
        this.jQueryEle = $(n);
        this._isValid = function () {
            return typeof this._bsInst != "undefined" && !$(".betReceipt", this._bsWrapper).length > 0 && this.stem && !this._bsInst._lock
        };
        this.suspend = function (n) {
            var r, t;
            if (n) this._betItem.setStItem("_s", "1"), this._subItem.setValue("_s", "1"), this.jQueryEle.addClass(i), $("a.placeBet", this._bsWrapper).removeClass("bbPricefetch"), $("a.acceptChanges", this._bsWrapper).removeClass("bbPricefetch"), b365.Ui.Betslip.BetBuilderPriceCalc.CancelPriceFetch(this._index) && (this.requestPriceOnUnsuspend = !0);
            else {
                for (this._subItem.setValue("_s", "0"), r = this._betItem.getBBItems(), t = 0; t < r.length; t++)
                    if (r[t].getValue("_s") === "1") {
                        n = !0;
                        break
                    } n || (this._betItem.setStItem("_s", "0"), this.jQueryEle.removeClass(i), this.requestPriceOnUnsuspend && (this.requestPriceOnUnsuspend = !1, this.fetchPrice()))
            }
            new b365.Ui.Betslip.OddsLineChangedHandler(this._bsInst, this._bsController).handle(n);
            this._bsInst.updateState()
        };
        this.fetchPrice = function () {
            b365.Ui.Betslip.BetBuilderPriceCalc.FetchPrice(this._index, this._betItem, this);
            $("a.placeBet", this._bsWrapper).addClass("bbPricefetch");
            $("a.acceptChanges", this._bsWrapper).addClass("bbPricefetch")
        }
    }
    var o = extend(window.top.ns_gen5_ui.ComponentStemBase, n),
        f = window.top.ns_gen5_ui.Component,
        t = window.top.ns_gen5_util.OddsConverter,
        r = window.top.ns_gen5_util.OddsType,
        s = window.top.ns_gen5_data.StemEvent,
        i = "suspended",
        e = "oddsChange",
        u = "deleted";
    return n.prototype._oddsTypeOverride = 0, n.prototype.decimalPlaces = 2, n.prototype._hasNormalOdds = !1, n._betSlipWrapper = null, n.prototype.betSlipWrapper = function () {
        return this._betSlipWrapper || (this._betSlipWrapper = $("#bsDiv")), this._betSlipWrapper
    }, n.prototype.createChildren = function () {
        var n, t, r;
        this._isValid() && (this._hasNormalOdds = this._bsInst.getSlipType() !== this._bsInst.slipFixedTeaser, n = this.stem.data, this._oddsElement = this._getElementByClassName("odds bs-BetBuilderSelection_Odds"), this._betItem && (this._oddsTypeOverride = this._betItem.getOddsOverride() || this._oddsTypeOverride, this.decimalPlaces = 2, t = this._element.className.indexOf(i) > -1, this._oddsChanged = "OD" in n && this._subItem.getValue("o") !== n.OD && this._hasNormalOdds, this._suspendedChanged = "SU" in n && n.SU === "1" !== t, r = "HA" in n && this._subItem.getValue("ln") && parseFloat(this._subItem.getValue("ln")) !== parseFloat(n.HA), r && this.stemDeleteHandler()))
    }, n.prototype.updateOdds = function (n, i) {
        var f, o, u;
        if (b365.Ui.Betslip.BetBuilderPriceCalc.PendingRequests() || ($("a.placeBet", this._bsWrapper).removeClass("bbPricefetch"), $("a.acceptChanges", this._bsWrapper).removeClass("bbPricefetch"), $("a.updatingOdds", this._bsWrapper).addClass("hidden")), !n) {
            this.suspend(!0);
            return
        }
        if (f = this.stem.data, this._subItem.setValue("o", f.OD), o = this._betItem.getStItem("o"), i == o && $("a.acceptChanges", this._bsWrapper).hasClass("hidden")) {
            $("a.placeBet", this._bsWrapper).removeClass("hidden");
            return
        }
        this._betItem.setStItem("olc", "1");
        this._betItem.setStItem("o", i);
        this._bsInst.updateState();
        this.jQueryEle.addClass(e);
        u = this._oddsTypeOverride || window.top.Locator.user.oddsTypeId;
        areOddsBelowAllowedMinimum = t.AreOddsBelowMinimum(i);
        areOddsBelowAllowedMinimum ? i = t.NOT_OFFERED : i == "0/0" ? i = "SP" : u == r.DECIMAL ? i = t.ConvertOddsDecimal(i, this.decimalPlaces) : u == r.AMERICAN && (i = t.ConvertOddsUS(i));
        this._oddsElement.innerHTML = "<span>" + n + "<\/span>";
        b365.Ui.Betslip.BetBuilderPriceCalc.PendingRequests() || (new b365.Ui.Betslip.OddsLineChangedHandler(this._bsInst, this._bsController).handle(!1), new b365.Ui.Betslip.TotalsCalculator(this._bsInst, this._bsController).calculate())
    }, n.prototype.commitProperties = function () {
        if (this._isValid()) {
            var n = this.stem.data,
                t = this._oddsChanged,
                r = this._suspendedChanged;
            this.jQueryEle.hasClass(u) || (this._suspendedChanged && this.suspend(n.SU === "1"), this._oddsChanged && (this.jQueryEle.hasClass(i) ? this.requestPriceOnUnsuspend = !0 : this.fetchPrice()), this._oddsChanged = !1, this._suspendedChanged = !1)
        }
    }, n.prototype.stemUpdateHandler = function (n, t) {
        this._oddsChanged = "OD" in t;
        this._suspendedChanged = "SU" in t;
        var i = "HA" in t && parseFloat(this._subItem.getValue("ln")) !== parseFloat(t.HA);
        i && this.stemDeleteHandler();
        (this._oddsChanged || this._suspendedChanged) && this.invalidateProperties()
    }, n.prototype.stemDeleteHandler = function () {
        this._isValid() && this.suspend(!0);
        this.stem && (this.stem.removeDelegate(this), this.stem = null);
        b365.Ui.Betslip.BetBuilderPriceCalc.CancelPriceFetch(this._index);
        this.jQueryEle.addClass(u)
    }, n.prototype.detatchStem = function () {
        this.stem && (this.stem.removeDelegate(this), this.stem = null)
    }, n.prototype._getElementByClassName = function (n) {
        var t = this._element.getElementsByClassName(n);
        return t.length > 0 ? t[0] : null
    }, n
}();
Type.registerNamespace("b365.Ui.Betslip");
b365.Ui.Betslip.BetCallHandler = function (n, t) {
    scope = this;
    this._betCallAvailabilityChangedEvent = "IS_BET_CALL_AVAILABLE";
    this._bsInst = n;
    this._bsController = t;
    this._bsApp = window.bsApp;
    this._isBetCallAvailable = !1;
    this._isBetCallReady = !1;
    this._betCallController = null;
    this._showLoginPrompt = null;
    this._betslipContainer = null;
    this._errorTransitionTimeout = null;
    this._enabled = !0;
    this._noMicrophone = null;
    this._micPreviouslyEnabled = null;
    this.StatusValues = {
        STATUS_DEFAULT: "0",
        STATUS_CONNECTING: "1",
        STATUS_CONNECTED: "2",
        STATUS_ERROR: "4"
    };
    this._status = this.StatusValues.STATUS_DEFAULT;
    this._betCallDelegates = {
        connected: scope._callConnectedDelegate,
        connectionFailed: scope._connectionFailedDelegate,
        callEnded: scope._callDisconnectedDelegate,
        onReady: scope._betCallReadyDelegate
    };
    this._betCallAvailabilityChangedDelegate = {
        scope: this,
        method: scope._betCallAvailabilityChanged
    }
};
b365.Ui.Betslip.BetCallHandler.prototype.init = function () {
    if (window.pushedConfig && window.pushedConfig.addEventListener && !window.pushedConfig.hasEventListenerWithDelegate(scope._betCallAvailabilityChangedEvent, scope._betCallAvailabilityChangedDelegate) && window.pushedConfig && window.pushedConfig.addEventListener(scope._betCallAvailabilityChangedEvent, scope._betCallAvailabilityChangedDelegate), scope._isTwilioAvailable = scope._bsController && scope._bsController.betCallTwilioEnabled(), this._noMicrophone == null && (this._noMicrophone = window.sessionStorage && window.sessionStorage.getItem("noMicrophone") === "true" ? !0 : !1), !scope._isTwilioAvailable || scope._noMicrophone) scope._twilioUnavailable();
    else if (window.sProps.microphoneAvailable) scope._loadBetCallModule(), scope._status = scope.StatusValues.STATUS_DEFAULT;
    else {
        if (!scope._noMicrophone) {
            var n = document.getElementById("bc-errorMsg");
            n && (window.sessionStorage && window.sessionStorage.setItem("noMicrophone", "true"), scope._noMicrophone = !0)
        }
        scope._errorHandler("Please Contact Us", scope._bsApp.bsContext.IsAuthenticated() ? "Call 1800 365 365 and quote" : "Call 1800 365 365 to place a bet")
    }
};
b365.Ui.Betslip.BetCallHandler.prototype.handle = function (n, t) {
    (n === "bc-removeSelections" && (scope._bsApp.removeBets(), scope._bsApp.bsContext.RefreshBalanceOnBetCallEnd()), scope._isBetCallReady) && (n === "bc-startcall" ? (scope._startCall(t), bsApp.placeBetInProgress(), scope._bsController.clientActionInProgress(!0)) : n === "bc-endcall" && (scope._bsController.clientActionInProgress(!1), scope._betCallController && scope._betCallController.endCall && scope._betCallController.endCall(), scope._bsApp.removeBets()))
};
b365.Ui.Betslip.BetCallHandler.prototype._startCall = function (n) {
    var i = scope._getBetSlipContainter(),
        r;
    if (i) {
        var t = $(".placeCTCBet"),
            f = $("#text", t),
            u = $("#icon", t);
        scope._addStyle(i, "bs-BetCall_Connecting");
        scope._addStyle(t[0], "calling");
        scope._addStyle(t[0], "calling");
        f.text("Calling An Advisor");
        scope._removeStyle(u[0], "callIcon");
        scope._addStyle(u[0], "progressIcon");
        r = scope._bsInst.getBetItems().length === scope._getPhoneOnlyParticipants().length;
        r || scope._bsInst.getBetItems().length && new b365.Ui.Betslip.PlaceBetClickHandler(scope._bsInst, scope._bsController).handle(n);
        scope._betCallController && scope._betCallController.initiateCall && scope._betCallController.initiateCall();
        scope._status = scope.StatusValues.STATUS_CONNECTING
    }
};
b365.Ui.Betslip.BetCallHandler.prototype._loadBetCallModule = function () {
    scope._isBetCallReady && scope._betCallController ? scope._betCallReadyDelegate() : scope._bsApp.bsContext.LoadBetCallModule(scope._betCallDelegates)
};
b365.Ui.Betslip.BetCallHandler.prototype._twilioUnavailable = function () {
    var n = scope._getBetSlipContainter(),
        t = document.getElementById("bc-WarnMsg"),
        i = document.getElementById("bc-Prompt"),
        r = $(".placeCTCBet");
    n && t && i && (scope._callDisconnectedDelegate(!0), scope._removeStyle(n, "bs-BetCall_Error"), scope._addStyle(n, "bs-BetCall_Unavailable"), t.innerText = "Please Contact Us", i.innerText = scope._bsApp.bsContext.IsAuthenticated() ? "Call 1800 365 365 and quote" : "Call 1800 365 365 to place a bet", scope._addStyle(r[0], "disabled"), scope._betCallController && scope._betCallController.unregisterDelegate(scope._betCallDelegates), scope._isBetCallReady = !1, scope._bsApp.bsContext && scope._bsApp.bsContext.resizeBetslip && scope._bsApp.bsContext.resizeBetslip())
};
b365.Ui.Betslip.BetCallHandler.prototype.filterPhoneOnlyBetsFromCookie = function () {
    for (var t = scope._bsInst.getBetItems(), n = 0; n < t.length; n++) t[n].getStItem("pom") === "Y" && (t.splice(n, 1), n--);
    scope._bsInst.updateState()
};
b365.Ui.Betslip.BetCallHandler.prototype._getPhoneOnlyParticipants = function () {
    for (var i = [], t = scope._bsInst.getBetItems(), n = 0; n < t.length; n++) t[n].getStItem("pom") == "Y" && i.push(t[n]);
    return i
};
b365.Ui.Betslip.BetCallHandler.prototype._betCallReadyDelegate = function () {
    var n = scope._getBetSlipContainter(),
        t = document.getElementById("bc-WarnMsg"),
        i = document.getElementById("bc-Prompt");
    !scope._isBetCallReady && n && t && i && (scope._removeStyle(n, "bs-BetCall_Unavailable"), scope._removeStyle(n, "bs-BetCall_Error"), t.innerText = scope._bsApp.bsContext.IsAuthenticated() ? "Call an advisor and quote: " : "", i.innerText = "", scope._isBetCallReady = !0, scope._betCallController = scope._bsApp.bsContext.GetBetCallController(), scope._bsApp.bsContext && scope._bsApp.bsContext.resizeBetslip && scope._bsApp.bsContext.resizeBetslip())
};
b365.Ui.Betslip.BetCallHandler.prototype._callConnectedDelegate = function () {
    var n = $(".placeCTCBet"),
        i = $("#text", n),
        r = $("#icon", n),
        t;
    (scope._status = scope.StatusValues.STATUS_CONNECTED, scope._bsController.clientActionInProgress(!0), t = scope._getBetSlipContainter(), t) && (scope._removeStyle(t, "bs-BetCall_Connecting"), scope._addStyle(t, "bs-BetCall_Connected"), scope._removeStyle(n[0], "calling"), scope._addStyle(n[0], "connected"), scope._removeStyle(r[0], "progressIcon"), i.text("End Call"), scope._addStyle(i[0], "endCall"), n.attr("data-atype", "bc-endcall"))
};
b365.Ui.Betslip.BetCallHandler.prototype._callDisconnectedDelegate = function (n) {
    scope._status = scope.StatusValues.STATUS_DEFAULT;
    var t = scope._getBetSlipContainter();
    t && (scope._bsController.clientActionInProgress(!1), scope._removeStyle(t, "bs-BetCall_Connected"), scope._removeStyle(t, "bs-BetCall_Connecting"), n || (scope._bsApp.bsContext.RefreshBalanceOnBetCallEnd(), scope._bsApp && scope._bsApp.removeBets && scope._bsApp.removeBets()))
};
b365.Ui.Betslip.BetCallHandler.prototype._connectionFailedDelegate = function () {
    scope._status = scope.StatusValues.STATUS_ERROR;
    scope._bsController.clientActionInProgress(!1);
    scope._callDisconnectedDelegate(!0);
    scope._errorHandler("Could not connect")
};
b365.Ui.Betslip.BetCallHandler.prototype._errorHandler = function (n, t) {
    var i = scope._getBetSlipContainter(),
        u = document.getElementById("bc-WarnMsg"),
        r = document.getElementById("bc-Prompt");
    i && r && (scope._removeStyle(i, "bs-BetCall_Unavailable"), scope._addStyle(i, "bs-BetCall_Error"), u.innerText = n || "", r.innerText = t || "Could not connect", scope._errorTransitionTimeout || (scope._errorTransitionTimeout = setTimeout(function () {
        scope._twilioUnavailable();
        window.clearTimeout(scope._errorTransitionTimeout);
        scope._errorTransitionTimeout = null
    }, 3e3)), scope._bsApp.bsContext && scope._bsApp.bsContext.resizeBetslip && scope._bsApp.bsContext.resizeBetslip())
};
b365.Ui.Betslip.BetCallHandler.prototype._betCallAvailabilityChanged = function () {
    var n = scope._bsController && scope._bsController.betCallEnabled();
    scope._isBetCallAvailable !== n && (n ? scope.init() : scope._twilioUnavailable(), scope._isBetCallAvailable = n)
};
b365.Ui.Betslip.BetCallHandler.prototype.showLoginPrompt = function () {
    return scope._showLoginPrompt !== null ? scope._showLoginPrompt : window.sessionStorage && window.sessionStorage.getItem("showBetCallLogin") ? (scope._showLoginPrompt = !1, !1) : scope._bsApp.bsContext.IsAuthenticated() ? (scope._showLoginPrompt = !1, !1) : scope._bsApp.hasPhoneOnlyItemOnSlip() ? (scope._showLoginPrompt = !1, window.sessionStorage && window.sessionStorage.setItem("showBetCallLogin", "false"), !0) : !1
};
b365.Ui.Betslip.BetCallHandler.prototype._getBetSlipContainter = function () {
    return scope._betslipContainer || (scope._betslipContainer = document.getElementById("betslipContainer")), scope._betslipContainer
};
b365.Ui.Betslip.BetCallHandler.prototype._addStyle = function (n, t) {
    n && t && n.className.indexOf(t) === -1 && (n.className += " " + t)
};
b365.Ui.Betslip.BetCallHandler.prototype._removeStyle = function (n, t) {
    n && t && n.className.indexOf(t) > -1 && (n.className = n.className.replace(t, ""))
};
b365.Ui.Betslip.BetCallHandler.prototype.microphoneAvailabilityChanged = function () {
    scope._bsController && scope._bsController.betCallTwilioEnabled() && (scope._status == scope.StatusValues.STATUS_CONNECTING || scope._status == scope.StatusValues.STATUS_CONNECTED) && scope._betCallController && scope._betCallController.endCall && scope._betCallController.endCall();
    !window.sProps.microphoneAvailable && scope._micPreviouslyEnabled && (scope._noMicrophone = null, scope._micPreviouslyEnabled = !1, window.sessionStorage && window.sessionStorage.setItem("noMicrophone", "false"));
    window.sProps.microphoneAvailable && (scope._micPreviouslyEnabled = !0)
};
b365.Ui.Betslip.BetCallHandler.prototype.dispose = function () {
    scope._betCallController && scope._betCallController.unregisterDelegate(scope._betCallDelegates)
};
Array.prototype.indexOf || (Array.prototype.indexOf = function (n, t) {
    t || (t = 0);
    for (var i = t; i < this.length; i++)
        if (this[i] === n) return i;
    return -1
});
Array.prototype.map || (Array.prototype.map = function (n, t) {
    var e, u, i, r, f, o, s;
    if (this == null) throw new TypeError(" this is null or not defined");
    if (r = Object(this), f = r.length >>> 0, typeof n != "function") throw new TypeError(n + " is not a function");
    for (arguments.length > 1 && (e = t), u = new Array(f), i = 0; i < f;) i in r && (o = r[i], s = n.call(e, o, i, r), u[i] = s), i++;
    return u
});
Array.prototype.filter || (Array.prototype.filter = function (n) {
    var i, f, r, e, t, u;
    if (this === void 0 || this === null) throw new TypeError(" this is null or not defined");
    if (i = Object(this), f = i.length >>> 0, typeof n != "function") throw new TypeError(n + " is not a function");
    for (r = [], e = arguments.length >= 2 ? arguments[1] : void 0, t = 0; t < f; t++) t in i && (u = i[t], n.call(e, u, t, i) && r.push(u));
    return r
});
Array.prototype.reduce || (Array.prototype.reduce = function (n) {
    if (typeof n != "function") throw new TypeError(n + " is not a function");
    var i = Object(this),
        u = i.length >>> 0,
        t = 0,
        r;
    if (arguments.length == 2) r = arguments[1];
    else {
        while (t < u && !(t in i)) t++;
        if (t >= u) throw new TypeError("Reduce of empty array with no initial value");
        r = i[t++]
    }
    for (; t < u; t++) t in i && (r = n(r, i[t], t, i));
    return r
});
Element.prototype.getElementsByClassName || (Element.prototype.getElementsByClassName = function (n) {
    var t = this;
    return t.querySelectorAll ? t.querySelectorAll("." + n) : []
});
document.getElementsByClassName || (document.getElementsByClassName = function (n) {
    var t = document;
    return t.querySelectorAll ? t.querySelectorAll("." + n) : []
});
window.addEventListener || function (n, t, i, r, u, f, e) {
    n[r] = t[r] = i[r] = function (n, t) {
        var i = this;
        e.unshift([i, n, t, function (n) {
            n.currentTarget = i;
            n.preventDefault = function () {
                n.returnValue = !1
            };
            n.stopPropagation = function () {
                n.cancelBubble = !0
            };
            n.target = n.srcElement || i;
            typeof t == "function" ? t.call(i, n) : t.handleEvent(n)
        }]);
        this.attachEvent("on" + n, e[0][3])
    };
    n[u] = t[u] = i[u] = function (n, t) {
        for (var r = 0, i; i = e[r]; ++r)
            if (i[0] == this && i[1] == n && i[2] == t) return this.detachEvent("on" + n, e.splice(r, 1)[0][3])
    };
    n[f] = t[f] = i[f] = function (n) {
        return this.fireEvent("on" + n.type, n)
    }
}(Window.prototype, HTMLDocument.prototype, Element.prototype, "addEventListener", "removeEventListener", "dispatchEvent", []);
window.location.pathname.indexOf("LottoInterface.aspx") <= 0 && (window.addEventListener ? window.addEventListener("load", initBetslip) : window.attachEvent("onload", initBetslip));
var $log = function () {
        if ("console" in window) {
            Array.prototype.splice.call(arguments, 0, 0, (new Date).getTime() + "  ");
            try {
                console.log.apply(console, arguments)
            } catch (n) {
                console.log(Array.prototype.join.call(arguments, "  "))
            }
        }
    },
    bsApp, BetslipApp = function () {
        var n = this,
            t;
        n.bsController = null;
        n.betslipWebModule = null;
        n.betCount = 0;
        n.subscriptionManager = null;
        n.confirmationManger = null;
        n.betslipHeight = 0;
        n.receiptAnimation = null;
        n.isIe = window.navigator.userAgent.indexOf("MSIE ") > 0 || !!navigator.userAgent.match(/Trident.*rv\:11\./);
        n.matchAlertsEnabled = null;
        n.overlay = null;
        n.domainId = 0;
        n.DomainIdEnum = {
            unknown: 0,
            it: 1,
            com: 2,
            es: 3,
            gr: 4,
            au: 5,
            dk: 6
        };
        n.deviceTagType = null;
        t = window.location.hostname.split(".").pop();
        window.location.hostname && n.DomainIdEnum.hasOwnProperty(t) && (n.domainId = n.DomainIdEnum[t]);
        n.bsContext = {
            LoadBetCallModule: function (t) {
                n.betslipWebModule && n.betslipWebModule.loadBetCallModule && n.betslipWebModule.loadBetCallModule(t)
            },
            GetBetCallController: function () {
                return n.betslipWebModule && n.betslipWebModule.getBetCallController ? n.betslipWebModule.getBetCallController() : null
            },
            RefreshBalanceOnBetCallEnd: function () {
                if (n.betslipWebModule && n.betslipWebModule.refreshUserBalance) return n.betslipWebModule.refreshUserBalance()
            },
            ClientEnhancedMode: function () {
                return !1
            },
            ShowStakePadToolTips: function () {
                return !1
            },
            ClientBetSlipShowing: function () {},
            ClientUsesSelect: function () {
                return !1
            },
            ClientActionInProgress: function (t) {
                n.betslipWebModule && n.betslipWebModule.clientActionInProgress && n.betslipWebModule.clientActionInProgress(t)
            },
            GetCurrencyObject: function () {
                return n.betslipWebModule && n.betslipWebModule.getCurrencyObject ? n.betslipWebModule.getCurrencyObject() : {
                    decimalSeparator: window.sProps.balance.currencyDecimalSeparator,
                    thousandsSeparator: window.sProps.balance.currencyGroupSeparator
                }
            },
            HideBetslip: function () {
                if (n.betslipWebModule && n.betslipWebModule.hideBetslip) return n.betslipWebModule.hideBetslip()
            },
            ClientLoginDelegate: function () {
                n.betslipWebModule && n.betslipWebModule.showBetslipLogin && n.betslipWebModule.showBetslipLogin()
            },
            ClientQuickBetLoginDelegate: function () {
                if (n.betslipWebModule && n.betslipWebModule.showBetslipLogin) n.betslipWebModule.showBetslipLogin(!0)
            },
            clientAddQuickBetToBetslip: function () {
                n.betslipWebModule && n.betslipWebModule.addQuickBetToBetslip && n.betslipWebModule.addQuickBetToBetslip()
            },
            ShowBetslipBreakdownDialog: function (t) {
                n.betslipWebModule && n.betslipWebModule.showBetslipBreakdownDialog && n.betslipWebModule.showBetslipBreakdownDialog(t)
            },
            ShowPitcherDetails: function (t) {
                n.betslipWebModule && n.betslipWebModule.showPitcherDetails && n.betslipWebModule.showPitcherDetails(t)
            },
            updateCurrenyRate: function (t) {
                n.betslipWebModule && n.betslipWebModule.updateCurrenyRate && n.betslipWebModule.updateCurrenyRate(t)
            },
            ClientContinueDelegate: function () {
                n.removeBets();
                n.refreshSlip()
            },
            Deposit: function (n) {
                n.origin === "lotto" ? (window.lottoInterface && window.lottoInterface.lottoWebModule && window.lottoInterface.lottoWebModule.launchDepositPopup(n), !0) : (window.bsApp.betslipWebModule.launchDepositPopup(n), !1)
            },
            IsReqOnBetAddedEnabled: function () {
                return !1
            },
            IsReqOnBetDeletedEnabled: function () {
                return !0
            },
            KeyboardType: function () {
                return ""
            },
            IsAuthenticated: function () {
                return n.betslipWebModule ? n.betslipWebModule.isAuthenticated() : !1
            },
            JoinNow: function () {
                return !0
            },
            MembersHistory: function () {
                n.betslipWebModule && n.betslipWebModule.launchMembersHistory && n.betslipWebModule.launchMembersHistory()
            },
            BetPlacementNotification: function (t) {
                n.betslipWebModule.betPlacementNotification(t)
            },
            lifetimeDepositNotification: function () {
                n.betslipWebModule.lifetimeDepositNotification()
            },
            BetSource: function () {
                return "FlashInPLay"
            },
            DeviceType: function () {
                if (n.deviceTagType !== null) return n.deviceTagType;
                if (n.domainId !== n.DomainIdEnum.it) return n.deviceTagType = "", n.deviceTagType;
                n.deviceTagType = "OtherDesktopApp";
                var t = navigator.userAgent.toLowerCase() || "",
                    u = navigator.platform.toUpperCase() || "",
                    o = typeof window.orientation != "undefined" ? !1 : !0,
                    v = u.indexOf("MAC") >= 0,
                    y = u.indexOf("WIN") >= 0,
                    p = u.indexOf("LINUX") >= 0,
                    f = t.indexOf("android") > -1,
                    r = !1,
                    s = !1,
                    i = !1,
                    c = u === "IPHONE" || t.indexOf("iphone") >= 0,
                    l = u === "IPAD" || t.indexOf("ipad") >= 0,
                    a = u === "IPOD" || t.indexOf("ipod") >= 0,
                    e = c || l || a,
                    h = t.indexOf("windows phone") > -1 || t.indexOf("microsoft build") > -1;
                return f && (r = t.indexOf("mobile") >= 0, r || (s = !0), i = t.indexOf("b365sports") > -1), e && (r = c || a, r || (s = !0), i = t.indexOf("bet365wrapper") > -1), h && (r = !0), e && i && (n.deviceTagType = "iOSMobileApp"), e && !i && (n.deviceTagType = "iOSMobileBrowser"), o && !i && v && (n.deviceTagType = "iOSDesktopBrowser"), l && i && (n.deviceTagType = "iOSTabletApp"), o && (f || p) && (n.deviceTagType = "AndroidDesktopBrowser"), r && f && i && (n.deviceTagType = "AndroidMobileApp"), r && f && !i && (n.deviceTagType = "AndroidMobileBrowser"), s && f && i && (n.deviceTagType = "AndroidTabletApp"), h && (n.deviceTagType = "WindowMobileBrowser"), h || !y || !o || f || e || (n.deviceTagType = "WindowsDesktopBrowser"), n.deviceTagType
            },
            ShowStreaming: function () {
                return !0
            },
            ShowFullTextMode: function () {
                return !0
            },
            OnStreamingClick: function () {},
            ShowConfirmation: function (t, i) {
                n.confirmationManger || (n.confirmationManger = new BetSlipShowConfirmationHandler(t));
                n.confirmationManger.handle(i)
            },
            showSiteConfirmation: function (t) {
                n.betslipWebModule.showBetslipSiteDialog(t)
            },
            showPushbetDialog: function (t) {
                n.betslipWebModule.showPushbetDialog(t)
            },
            getPushPopupStatus: function (t) {
                return n.betslipWebModule.currentPushBetPopupStatus(t)
            },
            repositionPopup: function () {
                n.betslipWebModule && (n.bsContext.additionalResizeRequired(), n.betslipWebModule.repositionPopup())
            },
            additionalResizeRequired: function () {
                n.betslipWebModule && n.betslipWebModule.setAdditionalResizeRequired && n.betslipWebModule.setAdditionalResizeRequired(!0)
            },
            ShowDialog: function () {},
            ShowTooltip: function () {},
            RefreshUserBalance: function () {
                return !1
            },
            ItemsRemoved: function (t) {
                n.itemsRemoved(t.Id)
            },
            SetupTruncated2dpPriceForReturnsCalc: function () {
                window.bs.useTruncated2dpPriceForReturnsCalc = n.domainId === n.DomainIdEnum.it ? !window.pushedConfig || !window.pushedConfig.getIsPSQFV4Enabled() : !1
            },
            StakeEntryRule: function () {
                return null
            },
            PushBetRulesUrl: function () {
                return ""
            },
            HighlightSelectedBets: function () {},
            PushBetPopupAcceptedHandler: function (t) {
                return n.betslipWebModule && n.betslipWebModule.pushBetPopupAcceptedHandler && n.betslipWebModule.pushBetPopupAcceptedHandler(t), null
            },
            IsMatchAlertsEnabled: function () {
                return n.matchAlertsEnabled != null ? n.matchAlertsEnabled : n.betslipWebModule && n.betslipWebModule.isMatchAlertsAvailiable ? (n.matchAlertsEnabled = n.betslipWebModule.isMatchAlertsAvailiable(), n.matchAlertsEnabled) : !1
            },
            ShowSiteOverlaySpinner: function () {},
            HideSiteOverlaySpinner: function () {},
            BetCallTwilioSupported: function () {
                return window.sProps && window.sProps.clickToCall && sProps.clickToCall.twiliosupported === !0
            },
            AppType: function () {
                return ""
            },
            AppVersion: function () {
                return ""
            },
            ToggleQuickBetHelpTooltip: function (t) {
                n.betslipWebModule && n.betslipWebModule.resetBetslipProgress && n.betslipWebModule.toggleQuickBetHelpTooltip(t)
            },
            betCallConnectedDelegate: function () {},
            betCallDisconnectedDelegate: function () {},
            subscribeItem: function (t) {
                n.betslipWebModule && !n.subscriptionManager && (n.subscriptionManager = n.betslipWebModule.getBetslipSubscriptionManager());
                n.betslipWebModule && n.subscriptionManager && n.subscriptionManager.subscribe(t)
            },
            unsubscribeItem: function (t) {
                n.betslipWebModule && !n.subscriptionManager && (n.subscriptionManager = n.betslipWebModule.getBetslipSubscriptionManager());
                n.betslipWebModule && n.subscriptionManager && n.subscriptionManager.unsubscribe(t)
            },
            getFormatedOdds: function (t, i, r) {
                return n.betslipWebModule && n.betslipWebModule.getFormatedOdds ? n.betslipWebModule.getFormatedOdds(t, i, r) : t
            },
            getUsersOddsType: function () {
                return n.betslipWebModule && n.betslipWebModule.getUsersOddsType ? n.betslipWebModule.getUsersOddsType() : 1
            },
            setBetguid: function (t) {
                n.betslipWebModule && n.betslipWebModule.setBetguid && n.betslipWebModule.setBetguid(t)
            },
            getBetguid: function () {
                return n.betslipWebModule && n.betslipWebModule.getBetguid ? n.betslipWebModule.getBetguid() : null
            },
            setTelebetBetslip: function (t) {
                if (n.betslipWebModule && n.betslipWebModule.setTelebetBetslip) return n.betslipWebModule.setTelebetBetslip(t)
            },
            setMicrophoneAvailable: function (t) {
                if (n.betslipWebModule && n.betslipWebModule.setMicrophoneAvailable) return n.betslipWebModule.setMicrophoneAvailable(t)
            },
            resizeBetslip: function () {
                n.resizeBetslip && n.resizeBetslip()
            },
            resyncBetBank: function (t) {
                n.betslipWebModule && n.betslipWebModule.resyncBetBank && n.betslipWebModule.resyncBetBank(t)
            },
            RetainSelectionsDelegate: function () {
                n.receiptAnimation && (n.receiptAnimation.animationRunning = !1)
            },
            setQuickBetTooltipDismissed: function (t) {
                n.betslipWebModule && n.betslipWebModule.setQuickBetTooltipDismissed && n.betslipWebModule.setQuickBetTooltipDismissed(t)
            },
            getQuickBetTooltipDismissed: function () {
                if (n.betslipWebModule && n.betslipWebModule.getQuickBetTooltipDismissed) return n.betslipWebModule.getQuickBetTooltipDismissed()
            },
            setQuickBetEnabled: function (t) {
                n.betslipWebModule && n.betslipWebModule.setQuickBetEnabled && n.betslipWebModule.setQuickBetEnabled(t)
            },
            getQuickBetEnabled: function () {
                if (n.betslipWebModule && n.betslipWebModule.getQuickBetEnabled) return n.betslipWebModule.getQuickBetEnabled()
            },
            setAusMultiplesAvailable: function (t) {
                n.betslipWebModule && n.betslipWebModule.setAusMultiplesAvailable && n.betslipWebModule.setAusMultiplesAvailable(t)
            },
            getAusMultiplesAvailable: function () {
                if (n.betslipWebModule && n.betslipWebModule.getAusMultiplesAvailable) return n.betslipWebModule.getAusMultiplesAvailable()
            },
            setMatchAlertSubscriptionState: function (t) {
                n.betslipWebModule && n.betslipWebModule.setMatchAlertSubscriptionState && n.betslipWebModule.setMatchAlertSubscriptionState(t)
            },
            populateMatchAlerts: function (t) {
                n.betslipWebModule && n.betslipWebModule.populateMatchAlerts && n.betslipWebModule.populateMatchAlerts(t)
            }
        };
        n.init = function () {
            n.bsController = new window.BetSlipController(window.bs, n.bsContext);
            n.bsController.initialise();
            n.betslipWebModule = getBetslipWebModule();
            n.betslipWebModule && (n.betslipWebModule.registerSABSWA(n), n.betslipWebModule.userPrefs && n.betslipWebModule.userPrefs.setTwilioSupported && n.betslipWebModule.userPrefs.setTwilioSupported(n.bsContext.BetCallTwilioSupported()));
            n.bsController.OnBetslipContentLoaded();
            n.bsController.setPushMarketsEnabled(n.domainId == 1);
            new BetslipEventAttacher(window.bs, n).attach();
            n.setupView();
            n.bsController.initialiseMicrophone();
            n.bsContext.SetupTruncated2dpPriceForReturnsCalc();
            n.subscriptionManager = n.betslipWebModule && n.betslipWebModule.getBetslipSubscriptionManager();
            n.betslipWebModule && n.betslipWebModule.refershBetslipCompleted && n.betslipWebModule.refershBetslipCompleted();
            $("#clickoverlay").on("click", function () {
                module = getBetslipWebModule();
                module.hideBetslip()
            })
        };
        n.register = function () {
            n.betslipWebModule = getBetslipWebModule();
            n.betslipWebModule && n.betslipWebModule.registerSABSWA ? n.betslipWebModule.registerSABSWA(n) : setTimeout(n.register, 1e3)
        };
        n.setupView = function () {
            window.addEventListener("resize", n.resizeHandler)
        };
        n.resizeHandler = function () {
            n.bsController.resizeHandler()
        };
        n.refreshSlip = function (t) {
            var i;
            i = $.proxy(function () {
                n.refreshSlipSuccessCallBack()
            }, this);
            n.bsController.refreshBetslip(t, i)
        };
        n.subscriptionHandler = function (t, i) {
            n.bsController.subscriptionHandler(t, i)
        };
        n.addBet = function (t) {
            var r, i = "";
            if (n.receiptAnimation && (n.receiptAnimation.animationRunning = !1), n.bsController._bsInst.locked && n.bsController._bsInst.locked()) {
                n.resetBetslipProgress();
                return
            }(i = typeof t == "string" ? t + n.getMediaType(t) : t.ConstructString ? t.ConstructString + n.getMediaType(t) : t, i) && (r = $.proxy(function () {
                n.addBetSuccessCallBack(t)
            }, this), n.bsController.addBet(i, !1, r))
        };
        n.getMediaType = function (n) {
            var t = document.getElementById("CpKey"),
                i;
            return t && t.value !== "" ? (i = new CouponKey(t.value), i.inplay ? n.indexOf("TP=") > -1 ? "mt=1" : "mt=14" : "") : ""
        };
        n.refreshSlipSuccessCallBack = function (t) {
            n.betslipWebModule && n.betslipWebModule.refreshSlipSuccess(t)
        };
        n.addBetSuccessCallBack = function (t) {
            n.betslipWebModule && (n.betslipWebModule.addBetSuccess(t), n.bsController.betCallHandler && n.bsController.betCallHandler.showLoginPrompt() && (n.bsController.setTelebetBetslip && n.bsController.setTelebetBetslip(n.hasPhoneOnlyItemOnSlip()), n.betslipWebModule.showBetslipLogin()))
        };
        n.deleteBet = function (t) {
            n.bsController.deleteBet(t)
        };
        n.deleteCastBet = function (t) {
            n.bsController.deleteCastBet(t)
        };
        n.phoneBet = function (t) {
            n.bsController.initiatePhoneBetRequest(t)
        };
        n.placeBet = function () {
            n.bsController.placeBet()
        };
        n.confirmBet = function () {
            n.bsController.confirmBet()
        };
        n.removeBets = function () {
            n.getBetCount(n.bsController._bsInst) > 0 ? n.bsController.removeBets() : n.bsController.itemsRemoved()
        };
        n.checkPlaceBetStatus = function () {
            n.placeBetAfterLogin() && (n.placeBet(), siteDataSession.setItem("loginPlaceBet", "false"))
        };
        n.placeBetAfterLogin = function () {
            return !!siteDataSession.getItem("loginPlaceBet") && (siteDataSession.getItem("loginPlaceBet") == "true" ? !0 : !1)
        };
        n.placeBetInProgress = function () {
            n.betslipWebModule && n.betslipWebModule.placeBetInProgress && n.betslipWebModule.placeBetInProgress()
        };
        n.placeBetSuccess = function () {
            n.betslipWebModule && n.betslipWebModule.placeBetSuccess && n.betslipWebModule.placeBetSuccess()
        };
        n.placeBetFailure = function () {
            n.betslipWebModule && n.betslipWebModule.placeBetFailure && n.betslipWebModule.placeBetFailure()
        };
        n.resetBetslipProgress = function () {
            n.betslipWebModule && n.betslipWebModule.resetBetslipProgress && n.betslipWebModule.resetBetslipProgress()
        };
        n.maxSelections = function () {
            n.betslipWebModule && n.betslipWebModule.showMaxSelections && n.betslipWebModule.showMaxSelections()
        };
        n.hasPhoneOnlyItemOnSlip = function () {
            var t, n, i;
            if (window.bs)
                for (t = window.bs.getBetItems(), n = 0, i = t.length; n < i; n++)
                    if (t[n].getStItem("pom") === "Y") return !0;
            return !1
        };
        n.showBetslip = function () {
            var t, c, i, f, e, r, u, o, s, l, h, a;
            $("#betslipContainer").show();
            $("#Site").attr("data-bsmode", "on");
            $("#Main").hide();
            $("#betslipBar").hide();
            viewLoaded();
            n.overlay && n.overlay.remove();
            Modernizr.inplaypush && (t = document.getElementById("betslipContainer"), c = document.getElementById("PageFooter"), i = c.parentNode, f = document.getElementById("betslipBar"), e = document.getElementById("NavBar"), r = document.getElementById("BackToTopBigBttn"), u = r ? r.childNodes[1] : null, o = e ? e.clientHeight : 0, s = f ? f.clientHeight : 0, l = i ? i.clientHeight : 0, h = clientViewport().height, a = h - l - o - s, t && (t.style.minHeight = a + "px", i && r && u && (h > t.clientHeight + o + s ? u.setAttribute("class", "hidden") : u.setAttribute("class", ""))))
        };
        n.updateBetslipBar = function () {};
        n.resizeBetslip = function () {
            var t, v = document.getElementsByClassName("betReceipt").length > 0,
                s = !1,
                f = document.documentElement.className.indexOf("ie-8") > -1,
                e = document.getElementById("betslipContainer"),
                o = document.getElementsByClassName("bs-dialogMessage"),
                h = document.querySelectorAll(".placeBet .bs-Btn"),
                u, r, c;
            if (n.betslipWebModule) {
                if (v && !f, o.length > 0 && o[0].className.indexOf("confirmDialogue") > -1 && (u = o[0].getBoundingClientRect(), r = u.top * 2 + (u.bottom - u.top), e && r > e.scrollHeight)) {
                    c = f || document.documentElement.className.indexOf("ie-9") > -1;
                    c && (document.getElementsByClassName("bs-dialogOverlay")[0].style.height = r);
                    n.betslipWebModule.resizeBetslip(t, {
                        runAnimation: s,
                        animStart: function () {
                            n.receiptAnimation && n.receiptAnimation.animate()
                        }
                    });
                    e.style.height = r + "px";
                    n.betslipHeight = r + "px";
                    return
                }
                if (t || (t = document.getElementById("betslipContainer").clientHeight), t += 100, !n.betslipWebModule.isPopupShown() || this.betslipWebModule.isAdditionalResizeRequired() ? (n.betslipWebModule.resizeBetslip(t, {
                        runAnimation: s,
                        animStart: function () {
                            n.receiptAnimation && n.receiptAnimation.animate()
                        }
                    }), this.betslipWebModule.isAdditionalResizeRequired() && this.betslipWebModule.setAdditionalResizeRequired(!1)) : n.betslipWebModule.isPopupShown() && n.betslipWebModule.resizeBetslip(t, null, !0), h[0]) {
                    var i = h[0],
                        l = i.offsetHeight,
                        a = f ? 32 : 31;
                    l > a && i.className.indexOf(" bs-Btn-wrapped") == -1 ? i.className = i.className + " bs-Btn-wrapped" : l <= a && (i.className = i.className.replace(" bs-Btn-wrapped", ""))
                }
                n.betslipHeight = t
            }
        };
        n.popupShow = function (t) {
            n.betslipWebModule && (t += 30, n.betslipWebModule.popupShow(t))
        };
        n.popupHide = function () {
            n.betslipWebModule && n.betslipWebModule.popupHide();
            n.bsController && n.bsController.webPopupManager && n.bsController.webPopupManager.popupHide()
        };
        n.getBetCount = function (t) {
            return t = t || n.bsController._bsInst, t.getValueFromBSCookie("processed").replace("||", "") == "true" ? 0 : t.numItems(!1)
        };
        n.setBetslipBarDisplay = function () {};
        n.addOnBetAddedReqComplete = function () {
            n.betslipWebModule && n.betslipWebModule.addBetCompleted && n.betslipWebModule.addBetCompleted()
        };
        n.addOnRefreshReqComplete = function () {
            n.betslipWebModule && n.betslipWebModule.refershBetslipCompleted && n.betslipWebModule.refershBetslipCompleted()
        };
        n.getBetslipItems = function () {
            for (var n = window.bs.getBetItems(), u = {}, f, e, h, o, r, i, s, t = 0; t < n.length; t++) f = n[t].getCnItem("id"), f && (e = n[t].getCnItem("pp"), h = n[t].getCnItem("f"), o = n[t].getCnItem("pt"), r = f.replace("Y", "").replace("N", ""), u[r] = e && (o === "N" || o === "A") ? {
                ConstructString: n[t].toString(),
                Uid: r,
                fixtureId: h,
                placeParticiant: e
            } : {
                ConstructString: n[t].toString(),
                Uid: r
            });
            for (n = window.bs.getBetItems(window.bs.itemTypeCast), i = 0; i < n.length; i++) n[i].getCnItem("fp") && (s = n[i].getCnItem("fp"), u[s] = {
                ConstructString: n[i].toString(),
                Uid: s
            });
            return u
        };
        n.getBalanceFromMarkup = function () {
            return ""
        };
        n.getStakeFromMarkup = function () {
            var n = $("ul", "#bsDiv").attr("data-st");
            return typeof n != "undefined" ? n : ""
        };
        n.isSelected = function (t) {
            var i = n.bsController._bsInst,
                r = t + "Y",
                u = t + "N";
            return n.betCount = n.getBetCount(i), n.betCount > 0 && (i.getBetItemByCn(i.betTypeNormal, "id", t) !== undefined || i.getBetItemByCn(i.betTypeNormal, "id", r) !== undefined || i.getBetItemByCn(i.betTypeNormal, "id", u) !== undefined)
        };
        n.itemsRemoved = function (t) {
            n.betslipWebModule && (n.betslipWebModule.deHighlightBet(t), n.betslipWebModule.removePushBetFromPrefs(t))
        };
        n.animateReceiptToMyBetsButton = function (n) {
            var u = n,
                t = $("#betslipContainer"),
                i = document.createElement("div"),
                r = document.body.clientWidth;
            i.id = "betslipContainerMyBetsClone";
            i.innerHTML = "<div class='content' style='height:' + $receiptElement.height() + 'px;width:' + $receiptElement.width() + 'px; '><\/div>";
            i.setAttribute("style", t[0].getAttribute("style") + " height:" + t.height() + "px; left:" + (r - t.width()) / 2 + "px;");
            t[0].parentNode.insertBefore(i, t[0])
        };
        n.setMyBetsCount = function () {};
        n.setOddsType = function (t) {
            document.getElementsByClassName("br-Receipt").length == 0 && n.bsController.setOddsType(t)
        };
        n.setQuickBetState = function (t) {
            n.bsController._quickBet && n.bsController._quickBet.setSwitchAndState && n.bsController._quickBet.setSwitchAndState(t)
        };
        n.toggleQuickBet = function () {
            n.bsController._bsContext && n.bsController._bsContext.ToggleQuickBet && n.bsController._bsContext.ToggleQuickBet()
        };
        n.registerBetslipWebModule = function (t, i) {
            n.betslipWebModule = t;
            window.pushedConfig = i
        };
        n.addOnDeleteBetReqComplete = function () {
            n.betslipWebModule && n.betslipWebModule.removeBetCompleted && n.betslipWebModule.removeBetCompleted()
        };
        n.addOnAddBetFailed = function () {
            n.betslipWebModule && n.betslipWebModule.resetBetslipProgress && n.betslipWebModule.resetBetslipProgress()
        };
        n.navigationChanged = function (t) {
            n.bsController.quickBetContext.navigationChanged(t);
            n.getBetCount() === 0 && n.resizeBetslip()
        };
        n.addOnBetSlipLoaded = function () {
            n.betslipWebModule && n.betslipWebModule.addOnBetSlipLoaded && (n.betslipWebModule.addOnBetSlipLoaded(), n.resizeBetslip())
        };
        n.hideBetslip = function () {
            n.bsContext.HideBetslip()
        };
        n.isQuickBetEnabled = function () {
            return !1
        };
        n.isLocked = function () {
            return n.bsController.isLocked()
        };
        n.setBetReceiptMatchAlertsState = function (t) {
            n.bsController.setBetReceiptMatchAlertsState(t)
        };
        n.getTaxConfig = function () {
            return $("#bsDiv > ul").attr("data-txr")
        };
        n.setTaxConfig = function () {
            var t = $("#bsDiv > ul").attr("data-txr");
            t && n.betslipWebModule && n.betslipWebModule.setTaxConfig && n.betslipWebModule.setTaxConfig(t)
        };
        n.reuseSelections = function () {
            n.betslipWebModule && n.betslipWebModule.reuseSelections && n.betslipWebModule.reuseSelections()
        };
        n.animateHide = function () {
            $("#betslipContainer").addClass("betslipContainer_Hide")
        };
        n.animateShow = function () {
            $("#betslipContainer").removeClass("betslipContainer_Hide")
        };
        n.updateBonusBalace = function (t) {
            n.bsController.updateFreeBetBar(t);
            n.bsController._bsInst.changeBetslipHeight()
        };
        n.dispatchParticipantEvent = function (t) {
            n.betslipWebModule && n.betslipWebModule.dispatchParticipantEvent && n.betslipWebModule.dispatchParticipantEvent(t)
        };
        n.restoreState = function () {
            new b365.Ui.Betslip.RestoreStateHandler(n.bsController._bsInst).handle()
        }
    },
    betslipDialogueHeaderLinksProvider = function () {
        function n(n) {
            var t = this;
            t._headerLinks = [];
            t._bsController = n;
            t._buttonCssClass = "br-Header_Done";
            n.IsItalianDomain() && (t._buttonCssClass += " br-Italy_Header_Disabled")
        }
        return n.prototype.provide = function () {
            var n = this;
            return n._headerLinks.push(n.getContinueLink()), n._headerLinks
        }, n.prototype.getContinueLink = function () {
            var n = this;
            return {
                text: window.betSlipML.done,
                cssClass: n._buttonCssClass,
                handler: null
            }
        }, n
    }(),
    BetslipEventAttacher = function (n, t) {
        this._bsInst = n;
        this._bsAppContext = t;
        this._bsController = t.bsController;
        this._bsBarHandler = null
    };
BetslipEventAttacher.prototype = {
    attach: function () {
        var n = this;
        n._bsController.addOnBetSlipLoaded(function () {
            n._bsAppContext.addOnBetSlipLoaded()
        });
        n._bsController.addOnBetSlipItemsChanged(function (t) {
            var i = n._bsAppContext.getBetCount(t);
            n._bsAppContext.updateBetslipBar(i)
        });
        n._bsController.addOnAcceptChanges(function () {});
        n._bsController.addOnBetAdded(function () {});
        n._bsController.addOnEditBet(function () {});
        n._bsController.addOnBetAddedReqComplete(function () {
            n._bsAppContext.addOnBetAddedReqComplete && n._bsAppContext.addOnBetAddedReqComplete()
        });
        n._bsController.addOnRefreshReqComplete(function () {
            n._bsAppContext.addOnRefreshReqComplete && n._bsAppContext.addOnRefreshReqComplete()
        });
        n._bsController.addOnAddReceiptHeaderLinks(function (t) {
            t.headerLinks = new betslipDialogueHeaderLinksProvider(n._bsController).provide()
        });
        n._bsController.addOnAddReceiptLiveAlertSignUp(function () {});
        n._bsController.addOnPlaceBet(function () {
            n._bsAppContext.placeBetInProgress()
        });
        n._bsController.addOnPlaceBetSuccess(function () {
            var t = $(".placeBet").attr("data-atype"),
                i;
            n._bsAppContext.placeBetSuccess();
            t != "cnf" && t != "cnf-ref" && (i = n._bsAppContext.getStakeFromMarkup(), $("#bsDiv").removeClass("confirmCurve"))
        });
        n._bsController.addOnPlaceBetFailure(function () {
            n._bsAppContext.placeBetFailure()
        });
        n._bsController.addOnMaxSelections(function () {
            n._bsAppContext.maxSelections();
            n._bsAppContext.resetBetslipProgress()
        });
        n._bsController.addOnChangeBetslipHeight(function () {
            n._bsAppContext.resizeBetslip()
        });
        n._bsController.addOnPopupShow(function (t, i) {
            n._bsAppContext.popupShow(i)
        });
        n._bsController.addOnPopupHide(function () {
            n._bsAppContext.popupHide()
        });
        n._bsController.addOnHideBetSlip(function () {
            n._bsAppContext && n._bsAppContext.hideBetslip && n._bsAppContext.hideBetslip()
        });
        n._bsController.addOnContentChangedOnClient(function () {
            n._bsAppContext.resizeBetslip()
        });
        n._bsController.addOnBetslipError(function () {});
        $("#bsDiv").off("b365.Ui.Betslip.failedtoaddbet").on("b365.Ui.Betslip.failedtoaddbet", function (t, i) {
            n._bsAppContext.betSelect && n._bsAppContext.betSelect.deselectBet(i)
        });
        n._bsController.addOnDeleteBetReqComplete(function () {
            n._bsAppContext.addOnDeleteBetReqComplete && n._bsAppContext.addOnDeleteBetReqComplete()
        });
        n._bsController.addOnAddBetFailed(function () {
            n._bsAppContext.addOnAddBetFailed && n._bsAppContext.addOnAddBetFailed()
        })
    },
    updateBalance: function () {}
};
BetSlipShowConfirmationHandler = function (n) {
    this._bsInst = n;
    this._overlay = new BetSlipPopupOverlay("bs-dialogOverlay", !1, 72, !1);
    this._element = $("#bsCD");
    this._confirmationObject = null;
    this._controller = null;
    this._title = null;
    this._message = null;
    this._additionalClass = null;
    this._showDialog = function () {
        this._overlay.add();
        $("#bsDiv").find(".footer").removeClass("hidden");
        this._completion()
    };
    this._completion = function () {
        var n, t, i;
        this._setMessageAttributes();
        n = document.getElementById("betslipContainer").getBoundingClientRect().height;
        this._element.fadeIn();
        t = this._element[0].getBoundingClientRect().height;
        i = n / 2 - t / 2;
        this._element.css("bottom", i + "px");
        this._additionalClass !== "" && this._element.addClass(this._additionalClass);
        this._bsInst.contentChangedOnClient();
        this._overlay.adjustHeight()
    };
    this._setMessageAttributes = function () {
        var n = $(".bs-dialogMessage_Title", this._element),
            t = $(".bs-dialogMessage_Content", this._element);
        n.html(this._title);
        t.html(this._message);
        this._setButtonAttributes()
    };
    this._setButtonAttributes = function () {
        $("#okButton", this._element).html(this._confirmationObject.Button1Text);
        $("#okButton", this._element).attr("data-action", this._confirmationObject.Button1Action);
        $("#closeButton", this._element).html(this._confirmationObject.Button2Text);
        $("#closeButton", this._element).attr("data-action", this._confirmationObject.Button2Action)
    }
};
BetSlipShowConfirmationHandler.prototype = {
    handle: function (n) {
        var t = this,
            i;
        this._element = $("#bsCD");
        this._confirmationObject = n;
        this._controller = n.Controller;
        this._title = n.Title;
        this._message = n.Msg;
        this._additionalClass = n.additionalClass;
        $("#closeButton, #okButton").removeClass("disabled");
        t._showDialog();
        i = {
            hideDialog: function () {
                var i = $("#bsDiv"),
                    u = i.find(".bs-Btn"),
                    n, r;
                t._element.hide();
                t._overlay.remove();
                t._additionalClass !== "" && t._element.removeClass(t._additionalClass);
                u.length > 0 && (n = i.find("#buttonContent"), n.length > 0 && (n = n[0].innerHTML, u[0].innerHTML = n));
                t._confirmationObject && t._confirmationObject.hasOwnProperty("OutofContextDialogue") || ($("#betslipContainer").show(), i.find(".bs-Footer").removeClass("hidden"));
                r = document.getElementById("betslipContainer");
                r && (r.style.height = "");
                t._bsInst.contentChangedOnClient()
            }
        };
        t._controller.setDialog(i)
    }
};
BetSlipPopupOverlay = function (n, t, i, r) {
    this._overlay_Z_Index = i;
    this._spinnerRequired = r;
    this._overlayclass = n;
    this._overlayElem = null;
    this._overlaySpinnerElem = null
};
BetSlipPopupOverlay.prototype = {
    add: function () {
        this._overlayElem || (this._overlayElem = $("<div/>", {
            "class": this._overlayclass ? this._overlayclass : "",
            css: {
                width: "100%",
                "z-index": this._overlay_Z_Index
            },
            click: function () {
                return !1
            }
        }), $(document.body).prepend(this._overlayElem), this._spinnerRequired && this.addSpinner(), $("html").addClass("overlay-on"), this.addResizeListener())
    },
    addSpinner: function () {
        this._overlaySpinnerElem = $("<div/>", {
            id: "spinnerBox",
            "class": "OverlaySpinnerBox"
        });
        this._overlaySpinnerElem.css("top", Math.round(clientViewport().height * .5) + $(window).scrollTop() + "px");
        this._overlayElem.append(this._overlaySpinnerElem)
    },
    addResizeListener: function () {
        var n = this;
        $(window).bind("resize.overlay", function () {
            setTimeout($.proxy(n.adjustHeight, n), 750)
        })
    },
    adjustHeight: function () {
        var n = document.getElementById("betslipContainer").getBoundingClientRect();
        this._overlayElem.css("height", n.height)
    },
    remove: function () {
        this._overlayElem && (this._overlayElem.remove(), this._overlayElem = null);
        $("html").removeClass("overlay-on");
        $(window).off("resize.overlay")
    },
    removeSpinner: function () {
        this._overlaySpinnerElem.remove()
    }
};
Type.registerNamespace("b365.Ui.Betslip");
b365.Ui.Betslip.BetCreditsCalculator = function (n, t) {
    this._bsInst = n;
    this._betSlipController = t;
    this._freeBetsStateCookieKey = "fs";
    this._cookieValSeparator = "||";
    this._isCurrentlySelected = this._bsInst.getValueFromBSCookie(this._freeBetsStateCookieKey).replace(this._cookieValSeparator, "") == 1;
    this._freeBetReceipt = document.getElementsByClassName("betReceipt")[0];
    this._selectedFreeBets = this._freeBetReceipt ? document.querySelectorAll(".fbt-FreeBetToken_Redeemed,.br-UsingFreeBet") : document.getElementsByClassName("bs-FreeBetCheckBox-selected");
    this._decimalSeperator = this._betSlipController.getCurrencyObject().decimalSeparator;
    var i = window.sProps.instantBet ? Number(document.getElementById("bsDiv").childNodes[0].getAttribute("data-abb")) : window.top.Locator.user.getBalance().bonusBalance;
    this._freebetAmount = this._isCurrentlySelected ? i : 0;
    this._itemToReturnDisplayHelper = new b365.Ui.Betslip.ItemToReturnDisplayHelper(t);
    this._formatter = new b365.Ui.Formatter;
    this._getFreeBetBetslip = function () {
        var k = this._bsInst.getBetItems(this._bsInst.itemTypeSingle),
            l = this._bsInst.getBetItems(this._bsInst.itemTypeMultiple),
            h = this._bsInst.getBetItems(this._bsInst.itemTypeCast),
            c, tt, f, it, r, rt, ut, ft, s, v = this._betSlipController.ausMultiplesEnabled(),
            a = [],
            ht = $("#bsDiv>ul").attr("data-equally-divided") == "True",
            p = !1,
            d = !1,
            g = !1,
            et = [],
            ot = [],
            st = this._freeBetReceipt ? !0 : !1,
            u = {},
            e, y, t, nt, b, o, n, w;
        for (this._isCurrentlySelected = this._bsInst.getValueFromBSCookie(this._freeBetsStateCookieKey).replace(this._cookieValSeparator, "") == 1, u.freeBetAmount = this._isCurrentlySelected ? Number(i) : 0, u.betslipType = this._bsInst.getSlipType(), u.betItems = [], c = 0, tt = k.length; c < tt; c++) e = k[c], e.toString().indexOf("il=") > -1 ? (y = e, s = {}, s.index = c, d = y.getStItem("_s") === "1", g = y.getStItem("sp") === "1", s.odds = [$blib.getItemOdds(this._bsInst.itemTypeBetBuilder, y)], ot.push(s.odds[0]), s.freeBetTokenSelected = !!y.getStItem("ft"), s.stake = y.getStItem("st") ? Number(y.getStItem("st")) : 0, s.oddsType = window.top.Locator.user.oddsTypeId, s.type = "betbuilder", s.betCount = 1, u.betItems.push(s)) : (t = {}, d = e.getStItem("_s") === "1", g = e.getStItem("sp") === "1", t.stake = !e.getStItem("st") ? 0 : Number(e.getStItem("st")), t.freeBetTokenSelected = e.getStItem("ft") ? !0 : !1, t.odds = g || d && !v ? ["0/0"] : [$blib.getItemOdds(this._bsInst.itemTypeSingle, e)], et.push(t.odds[0]), t.placeOdds = e.getCnItem("po"), t.ewSelected = e.getStItem("ew") == "1" ? !0 : !1, t.ausEWSelected = !!t.placeOdds, t.ausEWSelected ? (a.push([(c + 1).toString()]), a[a.length - 1].push(t.placeOdds)) : (!v || t.ewSelected) && (nt = $('li[data-item-id="' + c + '"]').find(".placedivider")[0], nt && (b = Number(nt.getAttribute("data-place-divider")), b && b > 0 && (t.placeOdds = window.top.ns_betcalculationslib_util.OddsFormatter.GetFractionalPlaceOdds(t.odds[0], b), a.push([(c + 1).toString()]), a[a.length - 1].push(t.placeOdds)))), t.betCount = 1, t.index = c, t.type = "single", t.combinations = [
            ["1"]
        ], u.betItems.push(t));
        for (r = 0, rt = h.length; r < rt; r++) ut = h[r].getCnItem("bc") ? Number(h[r].getCnItem("bc")) : h[r].getStItem("bc") ? Number(h[r].getStItem("bc")) : 1, ft = Number(h[r].getStItem("st")), o = {}, o.stake = ft, o.ewSelected = !1, o.freeBetTokenSelected = h[r].getStItem("ft") ? !0 : !1, o.odds = [$blib.getItemOdds(this._bsInst.betTypeCast, h[r])], o.betCount = ut, o.combinations = [
            ["1"]
        ], o.isVirtual = h[r].getStItem("to") == "4" ? !0 : !1, o.index = r, o.type = "cast", u.betItems.push(o);
        for (f = 0, it = l.length; f < it; f++) n = {}, w = v && this._betSlipController.complexMultiplesInfo && this._betSlipController.complexMultiplesInfo.length > 0 ? this._getComplexMultipleInfo(l[f].getCnItem("id")) : null, n.betCount = !st && w ? w.LC : l[f].getCnItem("bc"), n.betType = l[f].getCnItem("id"), p = n.betCount === "1" && ["54", "55"].indexOf(n.betType) === -1, n.stake = !l[f].getStItem("st") ? 0 : Number(l[f].getStItem("st")), n.ewSelected = l[f].getStItem("ew") == "1" || v && a.length > 0 ? !0 : !1, n.freeBetTokenSelected = !1, n.odds = et.concat(ot), n.combinations = w ? w.combinations : p ? window.top.ns_betcalculationslib_calculations_multiples.MultiplesCombinations.GetDefaultCombinations(k.length) : [
            ["1"]
        ], n.calculateBetCount = !st && v && !!n.combinations, n.calculateReturnValue = (v || p) && !!n.combinations, n.isStraightAccumulator = p, n.index = f, n.type = "multiple", n.calculateAccumulatedOdds = p, n.oddsType = window.top.Locator.user.oddsTypeId, n.oddsOverride = window.top.Locator.user.oddsTypeId === 4 ? parseInt(l[f].getCnItem("oto")) : "", u.betItems.push(n), u.calculateMultipleReturnValue = u.calculateMultipleReturnValue || n.calculateReturnValue || v;
        return u.equallyDivided = ht, u.eachWaySelections = a, u
    };
    this._getComplexMultipleInfo = function (n) {
        for (mi = 0; mi < this._betSlipController.complexMultiplesInfo.length; mi++)
            if (this._betSlipController.complexMultiplesInfo[mi].ID == n) return this._betSlipController.complexMultiplesInfo[mi];
        return null
    };
    this._getCookieBetItem = function (n, t) {
        var i;
        return n === "multiple" ? this._bsInst.getBetItems(this._bsInst.itemTypeMultiple)[t] : n === "cast" ? this._bsInst.getBetItems(this._bsInst.itemTypeCast)[t] : n === "betbuilder" ? (i = this._bsInst.getBetItems(this._bsInst.itemTypeBetBuilder)[t], i.toString().indexOf("il=") > -1 ? i : null) : (i = this._bsInst.getBetItems(this._bsInst.itemTypeSingle)[t], i.toString().indexOf("il=") == -1 ? i : null)
    };
    this._updateFreeBetStakesAndReturns = function (n) {
        var u, l, t, f, v, g = "",
            nt = !1,
            ht = $('li[data-item-id="-1"][data-item-type="multiple"]').length > 0,
            i, y = 0,
            tt = $("#bsDiv .bs-TotalToReturn_Wrapper")[0],
            it = $("#bsDiv .bsPotentialReturns")[0],
            p, e, w, o, rt, r, c, s, h, ft, et, a, k, d, ot, st;
        if (ausMultiplesEnabled = this._betSlipController.ausMultiplesEnabled(), someRelated = $('#bsDiv li[data-item-type="single"]').hasClass("restrictedCong"), this._freeBetReceipt)
            for (u = 0, l = n.betItems.length; u < l; u++)
                if (t = n.betItems[u], t.type === "multiple" && !isNaN(t.stake)) {
                    nt = !0;
                    break
                } for (p = !1, u = 0, l = n.betItems.length; u < l; u++)
            if (t = n.betItems[u], f = this._getCookieBetItem(t.type, t.index), f) {
                if (g !== t.type && (g = t.type, v = ht && t.type === "multiple" ? 1 : 0), this._freeBetReceipt)
                    if (t.type === "multiple" && (isNaN(t.stake) || t.stake == 0)) continue;
                    else if (t.type !== "multiple" && !nt && (isNaN(t.stake) || t.stake == 0)) continue;
                if (e = $(".bsError"), w = $(".placeBet.abetslipBtn"), t.type === "multiple" && !t.freeBetTokenSelected && isNaN(t.betItemBetCreditStake)) {
                    e.removeClass("hidden");
                    e.addClass("alert");
                    w.addClass("disabled");
                    this._betSlipController.clientActionInProgress(!0);
                    b365.Ui.Betslip.BetCreditsCalculator.prototype.previousErrorMessage || (b365.Ui.Betslip.BetCreditsCalculator.prototype.previousErrorMessage = document.querySelector(".bsError .text").innerText || "placeholder");
                    document.querySelector(".bsError .text").innerText = betSlipML.SplitError;
                    p = !0;
                    break
                } else p || b365.Ui.Betslip.BetCreditsCalculator.prototype.previousErrorMessage && (e.addClass("hidden"), e.removeClass("alert"), w.removeClass("disabled"), this._betSlipController.clientActionInProgress(!1), document.querySelector(".bsError .text").innerText = b365.Ui.Betslip.BetCreditsCalculator.prototype.previousErrorMessage, b365.Ui.Betslip.BetCreditsCalculator.prototype.previousErrorMessage = "");
                if (i = $('li[data-item-type="' + t.type + '"]')[v], t.type === "multiple" && (i = $('li[data-item-type="multiple"][data-item-id="' + t.betType + '"]')[0]), i)
                    if (o = i.getElementsByClassName("bs-BetCreditItem")[0], rt = i.getElementsByClassName("stk")[0], t.betItemBetCreditStake && (i.className.indexOf("freeBetStakeApplied") < 0 ? i.className += " freeBetStakeApplied" : i.className = i.className.replace(/(?:^|\s)freeBetStakeApplied(?!\S)/, "")), o || (o = i.getElementsByClassName("multiplesFreeStakeText")[0], rt = i.getElementsByClassName("stk")[0]), o && (f.removeStItem("fb"), t.betItemCookieFreeStake && f.setStItem("fb", t.betItemCookieFreeStake), this._updateItemFreeStakeUI(t, o)), t.type === "single" || t.type === "betbuilder")(t.type === "single" || i.parentNode.parentNode.className.indexOf("single-section") > -1) && y++, (t.ewSelected || t.ausEWSelected) && y++, r = i.getElementsByClassName("stakeToReturn")[0], r || (r = i.getElementsByClassName("return")[0]), r && (s = t.betItemReturnsValue >= 0 ? t.betItemReturns : $blib.roundDecimal(String(0), this._decimalSeperator), h = t.betItemBetCreditStake > 0 || t.betItemFreeStake > 0 ? betSlipML.netReturn : betSlipML.toreturn, r.innerHTML = h + '<span class="stakeToReturn_Value"><\/span>', t.betItemReturnsValue >= 0 && f.setStItem("tr", t.betItemReturnsValue), this._itemToReturnDisplayHelper.setReturnValue(t.index, t.type, s));
                    else if (t.type === "multiple" && this._bsInst.getSlipType() != this._bsInst.slipFixedTeaser && (ausMultiplesEnabled || t.calculateReturnValue)) {
                    f.setCnItem("bc", t.betCount.toString());
                    c = i.getElementsByClassName("multiplesBetCount")[0];
                    c && ($(i).hasClass("bs-MultipleBets_HighestAccumulator") ? (c.innerHTML = "", t.betCount > 1 && (c.innerHTML = t.betCount + " x ")) : c.innerHTML = t.betCount + "x");
                    var r = i.getElementsByClassName("bs-StandardMultipleStake_ToReturn")[0],
                        b = i.getElementsByClassName("bs-multiple-default-odds")[0],
                        ut = document.getElementsByClassName("restrictedCong").length > 0;
                    r && (s = t.betItemReturnsValue >= 0 ? t.betItemReturns : "0" + this._decimalSeperator + "00", h = t.betItemBetCreditStake > 0 || t.betItemFreeStake > 0 ? betSlipML.netReturn : betSlipML.toreturn, r.innerHTML = h + '<span class="bs-StandardMultipleStake_ToReturnValue"><\/span>', this._itemToReturnDisplayHelper.setMultipleReturnValue(t.betType, t.type, s), ft = isNaN(t.betItemReturnsValue) || ut ? !0 : !1, ft ? r.className += " hidden" : r.className.replace("hidden", ""), et = $.isArray(t.odds) && (t.odds.indexOf("") > -1 || t.odds.indexOf("0") > -1 || t.odds.indexOf("0/0") > -1) || t.odds == "" || t.odds == "0" || t.odds == "0/0", et ? $(i).removeClass("hasodds") : $(i).addClass("hasodds"), b && (style = !t.accumulatedOdds || t.accumulatedOdds.indexOf("e") > -1 || ut ? "display:none;" : "", b.innerHTML = t.accumulatedOdds || "", b.setAttribute("style", style)))
                }
                v++
            } this._updateTotalStakeUI(n);
        a = $('#bsDiv .multiple-section [data-item-id="-1"]');
        a && a.length > 0 && (k = $(a[0]).find(".multiplesBetCount")[0], k && (k.innerHTML = y + "x"));
        d = n.totalReturns;
        tt && ausMultiplesEnabled && (d == 0 || someRelated ? $(it).addClass("hidden") : ($(it).removeClass("hidden"), ot = Number(n.totalBetCreditStake) > 0 ? betSlipML.TotalNetReturn : betSlipML.TotalToReturn, st = "{0} <span class='bs-TotalToReturn_Span bs-TotalToReturn_TextValue'>{1}<\/span>".replace("{0}", ot).replace("{1}", $blib.roundDecimal(String(d), this._decimalSeperator)), tt.innerHTML = st));
        this._bsInst.updateState()
    };
    this._updateTotalStakeUI = function (n) {
        var t = document.getElementById("bcTotals"),
            u = $(".bs-useBetCreditInfoReturns"),
            r = this._freeBetReceipt ? !0 : !1,
            at = $("#betConfirmHeader").length > 0 ? !0 : !1,
            f = this._freeBetReceipt ? this._freeBetReceipt.getAttribute("data-tst") : "",
            s = this._freeBetReceipt ? this._freeBetReceipt.getAttribute("data-tbc") : "",
            h = this._freeBetReceipt ? this._freeBetReceipt.getAttribute("data-tfb") : "",
            p = this._freeBetReceipt ? this._freeBetReceipt.getAttribute("data-st") : "",
            e = this._betSlipController.prefixStyle("transition"),
            l = document.getElementById("betslipContent"),
            o = this,
            nt, tt, ot, c, v;
        if (t) {
            if (nt = t.getElementsByClassName("bs-BetCreditTotal")[0], tt = t.getElementsByClassName("bs-BetCreditTotalDetails")[0], tt) {
                var y = r ? "" : "Total",
                    it = "NetReturns",
                    rt = betSlipML.TotalStake,
                    w, st, ht = !1,
                    b = !1,
                    k = !1,
                    ct = !1,
                    d = Number(n.totalStake.replace(",", ".")),
                    ut = Number(n.totalFreeBetStake.replace(",", ".")),
                    ft = Number(n.totalBetCreditStake.replace(",", ".")),
                    et = r ? f.replace(",", ".") > 0 : d - ut - ft > 0,
                    g = window.top.ns_gen5_util.CurrencyFormatter;
                if (this._isCurrentlySelected && (k = !0, y += "BetCredits", it += "BetCredits"), this._selectedFreeBets.length > 0) {
                    for (b = !0, w = 0, st = this._selectedFreeBets.length; w < st; w++)
                        if (this._selectedFreeBets[w].getAttribute("data-inplay") === "1") {
                            ht = !1;
                            break
                        } y += "FreeBet";
                    it += "FreeBet";
                    ht && (y += "Inplay")
                }
                et && (ct = !0, y += "PlusStake");
                var i = betSlipML[y],
                    lt = betSlipML[it],
                    a = "";
                i && (f && f > 0 && (f = $blib.roundDecimal(f + "", this._decimalSeperator)), s && s > 0 && (s = $blib.roundDecimal(s + "", this._decimalSeperator)), h && h > 0 && (h = $blib.roundDecimal(h + "", this._decimalSeperator)), p && p > 0 && (p = $blib.roundDecimal(p + "", this._decimalSeperator)), k && b && ct ? (a = r ? f : $blib.roundDecimal(d - ut - ft + "", this._decimalSeperator), i = i.replace("{0}", r ? s : n.totalBetCreditStake), i = i.replace("{1}", g.ApplyCurrencySymbol(a)), i = i.replace(" {2}", ""), i = i.replace("{3}", r ? h : n.totalFreeBetStake)) : k && b ? (i = i.replace("{0}", r ? s : n.totalBetCreditStake), i = i.replace("{1}", r ? h : n.totalFreeBetStake)) : k ? (i = i.replace("{0}", r ? s : n.totalBetCreditStake), et && (a = r ? f : $blib.roundDecimal(d - ft + "", this._decimalSeperator), i = i.replace("{1}", g.ApplyCurrencySymbol(a)), i = i.replace(" {2}", ""))) : b && (i = i.replace("{0}", r ? h : n.totalFreeBetStake), et && (a = r ? f : $blib.roundDecimal(d - ut + "", this._decimalSeperator), i = i.replace("{1}", g.ApplyCurrencySymbol(a)), i = i.replace(" {2}", ""))), tt.innerHTML = i, r && nt && (rt = rt.replace("{0}", r ? "" : g.ApplyCurrencySymbol($blib.roundDecimal(n.totalStake + "", this._decimalSeperator))), nt.innerHTML = rt));
                r && !at && n.totalBetCreditStake && window.top.Locator.user.getBalance().updateBonusBalance(n.totalBetCreditStake);
                lt && u.length > 0 && u.text(lt)
            }
            if ((this._isCurrentlySelected || this._selectedFreeBets.length > 0) && !b365.Ui.Betslip.BetCreditsCalculator.prototype.previousErrorMessage) {
                if (ot = document.getElementsByClassName("totals")[0], ot && ot.setAttribute("style", "display: none!important"), $(t).hasClass("visible")) return;
                sProps.instantBet && $(t).removeClass("hidden").addClass("visible");
                $(t).removeClass("hidden").addClass("visible");
                u.length > 0 && u.removeClass("hidden");
                c = t.getBoundingClientRect().height;
                v = o._betSlipController.getScrollHeight();
                t.style["max-height"] = "0px";
                t.style[e] = "max-height .2s";
                l.style[e] = "max-height .2s";
                setTimeout(function () {
                    o.postTransition = function () {
                        t.removeEventListener(window.top.TRANSITION_END, o.postTransition);
                        t.style["max-height"] = "";
                        t.style[e] = "";
                        l.style[e] = ""
                    };
                    sProps.instantBet || (l.style["max-height"] = v + "px");
                    t.style["max-height"] = c + "px";
                    t.addEventListener(window.top.TRANSITION_END, o.postTransition)
                }, 0)
            } else {
                if (t.className.indexOf("hidden") > -1) return;
                if (sProps.instantBet && $(t).removeClass("visible").addClass("hidden"), c = t.getBoundingClientRect().height, c === 0) {
                    $(t).removeClass("visible").addClass("hidden");
                    u.length > 0 && u.addClass("hidden");
                    return
                }
                v = o._betSlipController.getScrollHeight();
                v += c;
                t.style["max-height"] = c + "px";
                t.style[e] = "max-height .2s";
                l.style[e] = "max-height .2s";
                setTimeout(function () {
                    sProps.instantBet || (l.style["max-height"] = v + "px");
                    t.style["max-height"] = "0px";
                    o.postTransition = function () {
                        t.removeEventListener(window.top.TRANSITION_END, o.postTransition);
                        $(t).removeClass("visible").addClass("hidden");
                        u.length > 0 && u.addClass("hidden");
                        t.style["max-height"] = "";
                        t.style[e] = "";
                        l.style[e] = ""
                    };
                    t.addEventListener(window.top.TRANSITION_END, o.postTransition)
                }, 0)
            }
        }
    };
    this._updateItemFreeStakeUI = function (n, t) {
        var o = "",
            h = t.getElementsByClassName("bs-BetCreditInfo")[0],
            i, s, c = window.top.ns_gen5_util.CurrencyFormatter,
            u, f, r, e;
        this._freeBetReceipt ? (s = t.getAttribute("data-freestake"), isFreeToken = t.getAttribute("data-isfreetoken"), i = isFreeToken === "0" ? Number(s) : null) : i = Number($blib.roundDecimal(n.betItemBetCreditStake + ""));
        i && (u = betSlipML.UsingBetCredits, this._freeBetReceipt && (u = betSlipML.UsedBetCredits), e = Number($blib.roundDecimal(n.stake * n.betCount * (n.ewSelected && !(getBetslipWebModule().getUserCountryID() === "13" && n.type == "multiple") ? 2 : 1) + "")), this._freeBetReceipt ? (f = $blib.pad2DP(this._formatter.roundDecimal(s), this._decimalSeperator), e > i && (r = e - i)) : (f = $blib.pad2DP(this._formatter.roundDecimal(i), this._decimalSeperator), r = n.betItemActualStake), r = $blib.pad2DP(this._formatter.roundDecimal(r), this._decimalSeperator), r = c.ApplyCurrencySymbol(r), o = i === e ? u.replace("[X]", f) : u.replace("[X]", f) + " + " + r);
        o ? (h.innerHTML = o, t.className.indexOf("visible") < 0 && (t.className += " visible")) : t.className = t.className.replace(/(?:^|\s)visible(?!\S)/g, "")
    };
    this._setBetslipFreeBarInfo = function () {
        var n = this._getFreeBetBetslip();
        window.top.ns_betcalculationslib_calculations_freebets && (window.top.ns_betcalculationslib_calculations_freebets.BetSlipFreebetStakes.CalculateFreebetStakeAndReturns(n), this._updateFreeBetStakesAndReturns(n))
    }
};
b365.Ui.Betslip.BetCreditsCalculator.prototype = {
    calculate: function () {
        this._setBetslipFreeBarInfo()
    },
    previousErrorMessage: ""
};
Type.registerNamespace("b365.Ui.Betslip");
b365.Ui.Betslip.ToggleBetCredits = function (n, t) {
    this._bsInst = n;
    this._bsController = t;
    this._selectedVal = "1";
    this._selectedCSS = "checked";
    this._unselectedVal = "0";
    this._freeBetsStateCookieKey = "fs";
    this._cookieValSeparator = "||";
    this._freeBetHdr = $("#bsDiv .bs-CheckBoxFreeBet");
    this._freeBetContainer = $("#bsDiv .bs-useFreeBet");
    this._freeBetAmt = document.querySelector("#bsDiv .bs-useFreeBetAmount");
    this._calc = new b365.Ui.Betslip.BetCreditsCalculator(this._bsInst, this._bsController);
    this._isCurrentlySelected = !1;
    this._taxTextNode = document.querySelector("#taxWarningHeader");
    b365.Ui.Betslip.ToggleBetCredits.taxText = this._taxTextNode && !b365.Ui.Betslip.ToggleBetCredits.taxText ? this._taxTextNode.innerText : b365.Ui.Betslip.ToggleBetCredits.taxText;
    this._taxText = b365.Ui.Betslip.ToggleBetCredits.taxText;
    this._netTaxText = betSlipML.NetReturnTax;
    this._isValid = function () {
        return typeof this._bsInst != "undefined"
    };
    this._isValid() && (this._isCurrentlySelected = this._bsInst.getValueFromBSCookie(this._freeBetsStateCookieKey).replace(this._cookieValSeparator, "") == this._selectedVal)
};
b365.Ui.Betslip.ToggleBetCredits.prototype = {
    taxText: "",
    toggle: function () {
        var n, t;
        this._isValid() && $("#bsDiv .betReceipt").length == 0 && $("#bsDiv.bs-inprogress").length == 0 && (this._isCurrentlySelected || (n = this._bsInst.getBetItems(this._bsInst.itemTypeSingle).concat(this._bsInst.getBetItems(this._bsInst.itemTypeBetBuilder)), n.length === 1 && n[0].getStItem("ft") && n[0].getStItem("ft").length > 0 && (t = document.getElementsByClassName("bs-FreeBetCheckBox-selected")[0], this._bsController._freeBetClickHandler.toggle(t))), this._isCurrentlySelected ? this._freeBetHdr.removeClass(this._selectedCSS) : this._freeBetHdr.addClass(this._selectedCSS), this._isCurrentlySelected ? this._freeBetContainer.removeClass(this._selectedCSS) : this._freeBetContainer.addClass(this._selectedCSS), this._taxTextNode && (this._taxTextNode.innerText = this._isCurrentlySelected ? this._taxText : this._netTaxText), this._bsInst.setValueInBSCookie(this._freeBetsStateCookieKey, this._isCurrentlySelected ? this._unselectedVal : this._selectedVal), this._calc.calculate(), this._bsInst.changeBetslipHeight())
    },
    reset: function () {
        var u = this._bsInst.getSlipType() !== this._bsInst.slipStandard,
            t = !1,
            n = "",
            r, i;
        window.sProps.instantBet ? (n = this._bsController._currencyDisplayHelper.formatCurrency(document.getElementById("bsDiv").childNodes[0].getAttribute("data-abb")), t = document.getElementById("bsDiv").childNodes[0].getAttribute("data-abc") === "1") : (n = window.top.Locator.user.getBalance().bonusBalance ? $blib.pad2DP(window.top.Locator.user.getBalance().bonusBalance, this._bsController.getCurrencyObject().decimalSeparator) : "", t = window.top.Locator.pushedConfig.getIsFreeBetsAllowed(getBetslipWebModule().getUserCountryID()));
        r = !!n && n !== "0,00" && n !== "0.00";
        i = t && r && !this._bsInst.containsPhoneOnlyBet() && !u;
        i ? this._freeBetContainer.removeClass("hidden") : this._freeBetContainer.addClass("hidden");
        this._isCurrentlySelected = this._bsInst.getValueFromBSCookie(this._freeBetsStateCookieKey).replace(this._cookieValSeparator, "") == this._selectedVal && i;
        this._isCurrentlySelected ? this._freeBetHdr.addClass(this._selectedCSS) : this._freeBetHdr.removeClass(this._selectedCSS);
        this._isCurrentlySelected ? this._freeBetContainer.addClass(this._selectedCSS) : this._freeBetContainer.removeClass(this._selectedCSS);
        this._taxTextNode && (this._taxTextNode.innerText = this._isCurrentlySelected ? this._netTaxText : this._taxText);
        this._freeBetAmt && (this._freeBetAmt.innerText = this._freeBetAmt.innerText.replace("{0}", window.top.ns_gen5_util.CurrencyFormatter.ApplyDelimiterAndGroupSeparator(n)));
        this._bsInst.setValueInBSCookie(this._freeBetsStateCookieKey, this._isCurrentlySelected ? this._selectedVal : this._unselectedVal);
        this._calc.calculate()
    }
}
/*
//@ sourceMappingURL=betslip.js.map
*/