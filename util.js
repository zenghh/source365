var tokens = get_tokens();
console.log(tokens)

function get_tokens() {
    var boot = {},
        ne = [],
        te = [];
    boot.ef = (function () {
        var e = 0,
            t = 0,
            n = 0;
        return function (o) {
            e % 2 != 0 && (2 > t ? te[t++] = o : 3 > n && (ne[n++] = o)), e++;
        };
    })();
    ! function () {
        var _, H = {};
        H["tgORWkJ" + "NxR=="] = "j/TT3yN" + "nyix/28m3SoctsxxYziRC=", H["gMmyJo1" + "cQ4="] = "" + ([] + {})[(((+(!![]))) + []) + (+!(!!![]) + [])] + ((((((+!!!(![])))))) + []) + (+{} + [] + [] + {})[((((((((!+([]) + !!!![] + !+[] + (!!!![])))))))) + [])] + (![] + [])[(((!+([]) + !!([]) + (!+[]))) + [])] + "", H["r6zyb" + "kN1ne"] = "5TDoE" + "Uk3B/dz=", H["lYoRX" + "N5dIH"] = "2hZD" + "wkkELEsj", H["kNLDD" +
            "HpKto=="] = "LB1q" + "dUhi0AjN", H["KX02" + "oLkW4C="] = "tXbYSEv8ZbglIC4ebO=", H["B1fXVH" +
            "eQuD="] = "7Pw" + "", H["7xY" + "hBLihbG"] = "a" + "n", H["gljbf" + "RCR55=="] = "LPCq", H["ZJeyt9" + "VwVy="] = "eNLGB5ujoT/R", H["zVuyEq" + "holO"] = "aW==", H["w1OQ" + "GEmZEZ"] = "" + (+(((+!+[]) + []) + (![] + [])[((((((((!+([]) + !!!![] + (!![]) + (!![])))))))) + [])] + ((((((((+!!!![]))))))) + []) + (+([]) + []) + (((+(!!![]))) + []) + (((((((((+![]) + (+![])))))))) + [])) + [])[((((!+[] + !!!(![]) + !(![]) + !(![])))) + [])] + (+(((+!+[]) + []) + (![] + [])[((((((((!+([]) + !!!![] + (!![]) + (!![])))))))) + [])] + ((((((((+!!!![]))))))) + []) + (+([]) + []) + (((+(!!![]))) + []) + (((((((((+![]) + (+![])))))))) + [])) + [])[((((((!+[]) + !!!![] + (!+[]))))) + [])] + (![] + [])[(((((+(!+[]))))) + [])] + (+{} + [] + !![] + [])[((!+([]) + !(!!![]) + !(+[]) + !(+[])) + [])] + "", H["LLUJ" + "weIqWD=="] = "9fLQXnkGS8CIgBoq6mVkq", L = ["7xY" + "hBLihbG",
            "gljbf" + "RCR55==", "ZJeyt9" + "VwVy=", "zVuyEq" + "holO", "w1OQ" + "GEmZEZ", "LLUJ" + "weIqWD==",
            "tgORWkJ" + "NxR==", "gMmyJo1" + "cQ4=", "r6zyb" + "kN1ne", "KX02" + "oLkW4C=", "B1fXVH" + "eQuD=",
            "lYoRX" + "N5dIH", "kNLDD" + "HpKto=="
        ], J = (_ = 0, function () {
            return H[L[_++]];
        });
        ! function () {
            if (boot && boot.ef)
                for (var _ = 0; _ < L.length; _++)
                    boot.ef(J());
        }();
    }();
    return te.join('') + '.' + ne.join('');
}


var t = crypt();
console.log(t.encrypt('wkGLXg==.iWJjSwIFIEW0miGQN3QryUP6ZUBhnHyEjtGWcrd8Fzw='))

function crypt() {
    return (function () {
        function e() { }
        return e.encrypt = function (t) {
            var n, i = "", o = t.length, r = 0, s = 0;
            for (r = 0; o > r; r++) {
                for (n = t.substr(r, 1),
                    s = 0; s < e.MAP_LEN; s++)
                    if (n == e.charMap[s][0]) {
                        n = e.charMap[s][1];
                        break;
                    }
                i += n;
            }
            return i;
        },
            e.decrypt = function (t) {
                var n, i = "", o = t.length, r = 0, s = 0;
                for (r = 0; o > r; r++) {
                    for (n = t.substr(r, 1),
                        s = 0; s < e.MAP_LEN; s++) {
                        if (":" == n && ":|~" == t.substr(r, 3)) {
                            n = "\n",
                                r += 2;
                            break;
                        }
                        if (n == e.charMap[s][1]) {
                            n = e.charMap[s][0];
                            break;
                        }
                    }
                    i += n;
                }
                return i;
            },
            e.MAP_LEN = 64,
            e.charMap = [
                ["A", "d"],
                ["B", "e"],
                ["C", "f"],
                ["D", "g"],
                ["E", "h"],
                ["F", "i"],
                ["G", "j"],
                ["H", "k"],
                ["I", "l"],
                ["J", "m"],
                ["K", "n"],
                ["L", "o"],
                ["M", "p"],
                ["N", "q"],
                ["O", "r"],
                ["P", "s"],
                ["Q", "t"],
                ["R", "u"],
                ["S", "v"],
                ["T", "w"],
                ["U", "x"],
                ["V", "y"],
                ["W", "z"],
                ["X", "a"],
                ["Y", "b"],
                ["Z", "c"],
                ["a", "Q"],
                ["b", "R"],
                ["c", "S"],
                ["d", "T"],
                ["e", "U"],
                ["f", "V"],
                ["g", "W"],
                ["h", "X"],
                ["i", "Y"],
                ["j", "Z"],
                ["k", "A"],
                ["l", "B"],
                ["m", "C"],
                ["n", "D"],
                ["o", "E"],
                ["p", "F"],
                ["q", "0"],
                ["r", "1"],
                ["s", "2"],
                ["t", "3"],
                ["u", "4"],
                ["v", "5"],
                ["w", "6"],
                ["x", "7"],
                ["y", "8"],
                ["z", "9"],
                ["0", "G"],
                ["1", "H"],
                ["2", "I"],
                ["3", "J"],
                ["4", "K"],
                ["5", "L"],
                ["6", "M"],
                ["7", "N"],
                ["8", "O"],
                ["9", "P"],
                ["\n", ":|~"],
                ["\r", ""]
            ],
            e;
    })();
}


var boot = {},
Z = [],
z = [];
boot.ef = (function () {
    var e = 0,
        t = 0,
        n = 0;
    return function (o) {
        e % 2 != 0 && (2 > t ? Z[t++] = o : 3 > n && (z[n++] = o)), e++
    }
})(), boot.gh = (function () {
    var e = 0,
        t = 0,
        n = 0;
    return function (o) {
        e > 0 && e % 2 == 0 && (2 > t ? Z[t++] = o : 3 > n && (z[n++] = o)), e++
    }
})();

! function () {
    var _, H = {};
    H["Y/HIM8N" + "B6w="] = "Vn0t", H["euEP4b" + "XTQT"] = "aW==", H["eNsO8e" + "PkPr=="] = "mpQUxcxWmpg7ehWF",
        H["8/S6C" + "P5Yct="] = "nnFRy6c3Ui" + "zD9CoLWomCTgf7fWKH6ktY=", H["mDgwQe" + "NNCP"] = "" + ([] + {})[
            (((!+([]) + !!!!([]))) + [])] + (+[] + []) + ([] + [][(![] + [])[((((((((!(+[]) + !+([]) + !!!
        ![]))))))) + [])] + ([] + {})[((+!!([])) + [])] + (!![] + [])[(+(!!!![]) + [])] + (!![] + [])[((
            ((((+!!![]))))) + [])]][([] + {})[((+!!([])) + []) + ((((!+[] + !!!![]))) + [])] + ([] + {})[((+
            !!([])) + [])] + (+(((((+!!!!([])))) + []) + (![] + [])[(((!(+[]) + !!!(![]) + !!([]) + !!(
        []))) + [])] + ((((+!!(!![])))) + []) + ((((+[]) + (+[]))) + []) + (+!!(![]) + []) + ((+
            !(!![])) + [])) + [])[(((((!+([]) + !+([]) + !(+[]) + !!(!![]))))) + [])] + (![] + [])[(((((
            (((!(+[]) + !+([]) + !!!![]))))))) + [])] + (!![] + [])[((((((+!!![]))))) + [])] + (!![] +
        [])[(+(!!!![]) + [])] + (!![] + [])[((!+([]) + !(!!![])) + [])] + ([] + {})[((+!!([])) + []) + (
            (((!+[] + !!!![]))) + [])] + (!![] + [])[((((((+!!![]))))) + [])] + (+{} + [] + [] + {})[(((
            !(+[]) + !+[] + !!(!![]) + !(![]))) + [])] + (+{} + [] + !![] + [])[(((((((!+[]) + !(![]) +
            (!![]) + !+([])))))) + [])]]((!![] + [])[(+(!!!![]) + [])] + ([][
            []
        ] + [])[(((((!+([]) + !!!(![]) + !!(!![]))))) + [])] + (+(((((+!!!!([])))) + []) + (![] + [])[((
            (!(+[]) + !!!(![]) + !!([]) + !!([]))) + [])] + ((((+!!(!![])))) + []) + ((((+[]) +
            (+[]))) + []) + (+!!(![]) + []) + ((+!(!![])) + [])) + [])[(((((((!+[] + !(!!![]) + !!!(
        ![]) + !+([]) + (!![]) + !!!!([]))))))) + [])] + ([][
            []
        ] + [])[(((((((+!([]))))))) + [])] + (+{} + [] + !![] + [])[(((((((!+[]) + !(![]) + (!![]) + !+(
            [])))))) + [])] + (+(((((+!!!!([])))) + []) + (![] + [])[(((!(+[]) + !!!(![]) + !!([]) + !!(
                []))) + [])] + ((((+!!(!![])))) + []) + ((((+[]) + (+[]))) + []) + (+!!(![]) + []) +
            ((+!(!![])) + [])) + [])[(((+!!(!![]))) + [])] + ([] + {})[(!+[] + !!([]) + !(+[]) + !!(!
        ![]) + !(![]) + (!![]) + !!([]) + [])] + (![] + [])[((((((!(+[]) + !!!(![])))))) + [])] + (+{} +
            [] + [] + {})[(((!(+[]) + !+[] + !!(!![]) + !(![]))) + [])] + ([] + {})[((+!!([])) + []) + (
            (((!+[] + !!!![]))) + [])] + (+{} + [])[(+!!([]) + [])] + (+(((((+!!!!([])))) + []) + (![] +
            [])[(((!(+[]) + !!!(![]) + !!([]) + !!([]))) + [])] + ((((+!!(!![])))) + []) + ((((
            +[]) + (+[]))) + []) + (+!!(![]) + []) + ((+!(!![])) + [])) + [])[(((((((!+[] + !(!!![]) + !
            !!(![]) + !+([]) + (!![]) + !!!!([]))))))) + [])] + ([][
            []
        ] + [])[((!+[]) + !(!!![]) + !!([]) + !!!(![]) + !(![]) + [])] + ([] + {})[((+!!([])) + [])] + (
            +(((((+!!!!([])))) + []) + (![] + [])[(((!(+[]) + !!!(![]) + !!([]) + !!([]))) + [])] + ((((
                +!!(!![])))) + []) + ((((+[]) + (+[]))) + []) + (+!!(![]) + []) + ((+!(!![])) + [])) +
            [])[(((+!!(!![]))) + [])])())[((((((!+[] + !!([]) + (!![]) + !!!!([]) + !+([]) + !+([])))))) +
    [])] + ((!(+[]) + !(![]) + (!+[]) + !!!(![]) + !!(!![]) + !+[] + (!+[])) + []) + "", H["GFxoep" +
        "4dZv=="] = "SXf45L" + "HeKq8D", H["rxGz" + "FGmaKF"] = "NN/rjFIm", H["kyo7qMQ" + "tuZ=="] = "" + (+((((
            (+!!!!([])))) + []) + (![] + [])[(((!(+[]) + !!!(![]) + !!([]) + !!([]))) + [])] + ((((+!!(!
            ![])))) + []) + ((((+[]) + (+[]))) + []) + (+!!(![]) + []) + ((+!(!![])) + [])) + [])[(((!(+[]) + !!
            (!![]) + !!!(![]) + !(![]) + !!([]) + !!([]) + (!![]))) + [])] + (!+[] + !![] + !![] + !![] + []) +
        (!+[] + !![] + !![] + !![] + !![] + !![] + !![] + []) + ([][
            []
        ] + [])[(((((!+([]) + !!!(![]) + !!(!![]))))) + [])] + "", H["tQW00" + "RSBV2="] = "cQuLxqOY" + "hyv/=",
        H["vQGk6K" + "aHvp="] = "tPwDhJtzKBr11guXffO1voh=", H["e5z" + "RDfZPtD"] = "FU" + "=", H["tQelYl7" +
            "r0C=="] = "5WUIb" + "hVN/l1X", H["iVH" + "7CYLacZ"] = "DC" + "", L = ["iVH" + "7CYLacZ", "GFxoep" +
            "4dZv==", "Y/HIM8N" + "B6w=", "rxGz" + "FGmaKF", "euEP4b" + "XTQT", "kyo7qMQ" + "tuZ==", "eNsO8e" +
            "PkPr==", "8/S6C" + "P5Yct=", "mDgwQe" + "NNCP", "tQW00" + "RSBV2=", "vQGk6K" + "aHvp=", "e5z" +
            "RDfZPtD", "tQelYl7" + "r0C=="
        ], J = (_ = 0, function () {
            return H[L[_++]]
        });
    ! function () {
        if (boot && boot.gh)
            for (var _ = 0; _ < L.length; _++) boot.gh(J())
    }()
}();
Z.join('') + '.' + z.join('')