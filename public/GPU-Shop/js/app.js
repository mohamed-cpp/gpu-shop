function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/*! jQuery v1.12.0 | (c) jQuery Foundation | jquery.org/license */
!function (a, b) {
  "object" == (typeof module === "undefined" ? "undefined" : _typeof(module)) && "object" == _typeof(module.exports) ? module.exports = a.document ? b(a, !0) : function (a) {
    if (!a.document) throw new Error("jQuery requires a window with a document");
    return b(a);
  } : b(a);
}("undefined" != typeof window ? window : this, function (a, b) {
  var c = [],
      d = a.document,
      e = c.slice,
      f = c.concat,
      g = c.push,
      h = c.indexOf,
      i = {},
      j = i.toString,
      k = i.hasOwnProperty,
      l = {},
      m = "1.12.0",
      n = function n(a, b) {
    return new n.fn.init(a, b);
  },
      o = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
      p = /^-ms-/,
      q = /-([\da-z])/gi,
      r = function r(a, b) {
    return b.toUpperCase();
  };

  n.fn = n.prototype = {
    jquery: m,
    constructor: n,
    selector: "",
    length: 0,
    toArray: function toArray() {
      return e.call(this);
    },
    get: function get(a) {
      return null != a ? 0 > a ? this[a + this.length] : this[a] : e.call(this);
    },
    pushStack: function pushStack(a) {
      var b = n.merge(this.constructor(), a);
      return b.prevObject = this, b.context = this.context, b;
    },
    each: function each(a) {
      return n.each(this, a);
    },
    map: function map(a) {
      return this.pushStack(n.map(this, function (b, c) {
        return a.call(b, c, b);
      }));
    },
    slice: function slice() {
      return this.pushStack(e.apply(this, arguments));
    },
    first: function first() {
      return this.eq(0);
    },
    last: function last() {
      return this.eq(-1);
    },
    eq: function eq(a) {
      var b = this.length,
          c = +a + (0 > a ? b : 0);
      return this.pushStack(c >= 0 && b > c ? [this[c]] : []);
    },
    end: function end() {
      return this.prevObject || this.constructor();
    },
    push: g,
    sort: c.sort,
    splice: c.splice
  }, n.extend = n.fn.extend = function () {
    var a,
        b,
        c,
        d,
        e,
        f,
        g = arguments[0] || {},
        h = 1,
        i = arguments.length,
        j = !1;

    for ("boolean" == typeof g && (j = g, g = arguments[h] || {}, h++), "object" == _typeof(g) || n.isFunction(g) || (g = {}), h === i && (g = this, h--); i > h; h++) {
      if (null != (e = arguments[h])) for (d in e) {
        a = g[d], c = e[d], g !== c && (j && c && (n.isPlainObject(c) || (b = n.isArray(c))) ? (b ? (b = !1, f = a && n.isArray(a) ? a : []) : f = a && n.isPlainObject(a) ? a : {}, g[d] = n.extend(j, f, c)) : void 0 !== c && (g[d] = c));
      }
    }

    return g;
  }, n.extend({
    expando: "jQuery" + (m + Math.random()).replace(/\D/g, ""),
    isReady: !0,
    error: function error(a) {
      throw new Error(a);
    },
    noop: function noop() {},
    isFunction: function isFunction(a) {
      return "function" === n.type(a);
    },
    isArray: Array.isArray || function (a) {
      return "array" === n.type(a);
    },
    isWindow: function isWindow(a) {
      return null != a && a == a.window;
    },
    isNumeric: function isNumeric(a) {
      var b = a && a.toString();
      return !n.isArray(a) && b - parseFloat(b) + 1 >= 0;
    },
    isEmptyObject: function isEmptyObject(a) {
      var b;

      for (b in a) {
        return !1;
      }

      return !0;
    },
    isPlainObject: function isPlainObject(a) {
      var b;
      if (!a || "object" !== n.type(a) || a.nodeType || n.isWindow(a)) return !1;

      try {
        if (a.constructor && !k.call(a, "constructor") && !k.call(a.constructor.prototype, "isPrototypeOf")) return !1;
      } catch (c) {
        return !1;
      }

      if (!l.ownFirst) for (b in a) {
        return k.call(a, b);
      }

      for (b in a) {
        ;
      }

      return void 0 === b || k.call(a, b);
    },
    type: function type(a) {
      return null == a ? a + "" : "object" == _typeof(a) || "function" == typeof a ? i[j.call(a)] || "object" : _typeof(a);
    },
    globalEval: function globalEval(b) {
      b && n.trim(b) && (a.execScript || function (b) {
        a.eval.call(a, b);
      })(b);
    },
    camelCase: function camelCase(a) {
      return a.replace(p, "ms-").replace(q, r);
    },
    nodeName: function nodeName(a, b) {
      return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase();
    },
    each: function each(a, b) {
      var c,
          d = 0;

      if (s(a)) {
        for (c = a.length; c > d; d++) {
          if (b.call(a[d], d, a[d]) === !1) break;
        }
      } else for (d in a) {
        if (b.call(a[d], d, a[d]) === !1) break;
      }

      return a;
    },
    trim: function trim(a) {
      return null == a ? "" : (a + "").replace(o, "");
    },
    makeArray: function makeArray(a, b) {
      var c = b || [];
      return null != a && (s(Object(a)) ? n.merge(c, "string" == typeof a ? [a] : a) : g.call(c, a)), c;
    },
    inArray: function inArray(a, b, c) {
      var d;

      if (b) {
        if (h) return h.call(b, a, c);

        for (d = b.length, c = c ? 0 > c ? Math.max(0, d + c) : c : 0; d > c; c++) {
          if (c in b && b[c] === a) return c;
        }
      }

      return -1;
    },
    merge: function merge(a, b) {
      var c = +b.length,
          d = 0,
          e = a.length;

      while (c > d) {
        a[e++] = b[d++];
      }

      if (c !== c) while (void 0 !== b[d]) {
        a[e++] = b[d++];
      }
      return a.length = e, a;
    },
    grep: function grep(a, b, c) {
      for (var d, e = [], f = 0, g = a.length, h = !c; g > f; f++) {
        d = !b(a[f], f), d !== h && e.push(a[f]);
      }

      return e;
    },
    map: function map(a, b, c) {
      var d,
          e,
          g = 0,
          h = [];
      if (s(a)) for (d = a.length; d > g; g++) {
        e = b(a[g], g, c), null != e && h.push(e);
      } else for (g in a) {
        e = b(a[g], g, c), null != e && h.push(e);
      }
      return f.apply([], h);
    },
    guid: 1,
    proxy: function proxy(a, b) {
      var c, d, f;
      return "string" == typeof b && (f = a[b], b = a, a = f), n.isFunction(a) ? (c = e.call(arguments, 2), d = function d() {
        return a.apply(b || this, c.concat(e.call(arguments)));
      }, d.guid = a.guid = a.guid || n.guid++, d) : void 0;
    },
    now: function now() {
      return +new Date();
    },
    support: l
  }), "function" == typeof Symbol && (n.fn[Symbol.iterator] = c[Symbol.iterator]), n.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (a, b) {
    i["[object " + b + "]"] = b.toLowerCase();
  });

  function s(a) {
    var b = !!a && "length" in a && a.length,
        c = n.type(a);
    return "function" === c || n.isWindow(a) ? !1 : "array" === c || 0 === b || "number" == typeof b && b > 0 && b - 1 in a;
  }

  var t = function (a) {
    var b,
        c,
        d,
        e,
        f,
        g,
        h,
        i,
        j,
        k,
        l,
        m,
        n,
        o,
        p,
        q,
        r,
        s,
        t,
        u = "sizzle" + 1 * new Date(),
        v = a.document,
        w = 0,
        x = 0,
        y = ga(),
        z = ga(),
        A = ga(),
        B = function B(a, b) {
      return a === b && (l = !0), 0;
    },
        C = 1 << 31,
        D = {}.hasOwnProperty,
        E = [],
        F = E.pop,
        G = E.push,
        H = E.push,
        I = E.slice,
        J = function J(a, b) {
      for (var c = 0, d = a.length; d > c; c++) {
        if (a[c] === b) return c;
      }

      return -1;
    },
        K = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
        L = "[\\x20\\t\\r\\n\\f]",
        M = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
        N = "\\[" + L + "*(" + M + ")(?:" + L + "*([*^$|!~]?=)" + L + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + M + "))|)" + L + "*\\]",
        O = ":(" + M + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + N + ")*)|.*)\\)|)",
        P = new RegExp(L + "+", "g"),
        Q = new RegExp("^" + L + "+|((?:^|[^\\\\])(?:\\\\.)*)" + L + "+$", "g"),
        R = new RegExp("^" + L + "*," + L + "*"),
        S = new RegExp("^" + L + "*([>+~]|" + L + ")" + L + "*"),
        T = new RegExp("=" + L + "*([^\\]'\"]*?)" + L + "*\\]", "g"),
        U = new RegExp(O),
        V = new RegExp("^" + M + "$"),
        W = {
      ID: new RegExp("^#(" + M + ")"),
      CLASS: new RegExp("^\\.(" + M + ")"),
      TAG: new RegExp("^(" + M + "|[*])"),
      ATTR: new RegExp("^" + N),
      PSEUDO: new RegExp("^" + O),
      CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + L + "*(even|odd|(([+-]|)(\\d*)n|)" + L + "*(?:([+-]|)" + L + "*(\\d+)|))" + L + "*\\)|)", "i"),
      bool: new RegExp("^(?:" + K + ")$", "i"),
      needsContext: new RegExp("^" + L + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + L + "*((?:-\\d)?\\d*)" + L + "*\\)|)(?=[^-]|$)", "i")
    },
        X = /^(?:input|select|textarea|button)$/i,
        Y = /^h\d$/i,
        Z = /^[^{]+\{\s*\[native \w/,
        $ = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
        _ = /[+~]/,
        aa = /'|\\/g,
        ba = new RegExp("\\\\([\\da-f]{1,6}" + L + "?|(" + L + ")|.)", "ig"),
        ca = function ca(a, b, c) {
      var d = "0x" + b - 65536;
      return d !== d || c ? b : 0 > d ? String.fromCharCode(d + 65536) : String.fromCharCode(d >> 10 | 55296, 1023 & d | 56320);
    },
        da = function da() {
      m();
    };

    try {
      H.apply(E = I.call(v.childNodes), v.childNodes), E[v.childNodes.length].nodeType;
    } catch (ea) {
      H = {
        apply: E.length ? function (a, b) {
          G.apply(a, I.call(b));
        } : function (a, b) {
          var c = a.length,
              d = 0;

          while (a[c++] = b[d++]) {
            ;
          }

          a.length = c - 1;
        }
      };
    }

    function fa(a, b, d, e) {
      var f,
          h,
          j,
          k,
          l,
          o,
          r,
          s,
          w = b && b.ownerDocument,
          x = b ? b.nodeType : 9;
      if (d = d || [], "string" != typeof a || !a || 1 !== x && 9 !== x && 11 !== x) return d;

      if (!e && ((b ? b.ownerDocument || b : v) !== n && m(b), b = b || n, p)) {
        if (11 !== x && (o = $.exec(a))) if (f = o[1]) {
          if (9 === x) {
            if (!(j = b.getElementById(f))) return d;
            if (j.id === f) return d.push(j), d;
          } else if (w && (j = w.getElementById(f)) && t(b, j) && j.id === f) return d.push(j), d;
        } else {
          if (o[2]) return H.apply(d, b.getElementsByTagName(a)), d;
          if ((f = o[3]) && c.getElementsByClassName && b.getElementsByClassName) return H.apply(d, b.getElementsByClassName(f)), d;
        }

        if (c.qsa && !A[a + " "] && (!q || !q.test(a))) {
          if (1 !== x) w = b, s = a;else if ("object" !== b.nodeName.toLowerCase()) {
            (k = b.getAttribute("id")) ? k = k.replace(aa, "\\$&") : b.setAttribute("id", k = u), r = g(a), h = r.length, l = V.test(k) ? "#" + k : "[id='" + k + "']";

            while (h--) {
              r[h] = l + " " + qa(r[h]);
            }

            s = r.join(","), w = _.test(a) && oa(b.parentNode) || b;
          }
          if (s) try {
            return H.apply(d, w.querySelectorAll(s)), d;
          } catch (y) {} finally {
            k === u && b.removeAttribute("id");
          }
        }
      }

      return i(a.replace(Q, "$1"), b, d, e);
    }

    function ga() {
      var a = [];

      function b(c, e) {
        return a.push(c + " ") > d.cacheLength && delete b[a.shift()], b[c + " "] = e;
      }

      return b;
    }

    function ha(a) {
      return a[u] = !0, a;
    }

    function ia(a) {
      var b = n.createElement("div");

      try {
        return !!a(b);
      } catch (c) {
        return !1;
      } finally {
        b.parentNode && b.parentNode.removeChild(b), b = null;
      }
    }

    function ja(a, b) {
      var c = a.split("|"),
          e = c.length;

      while (e--) {
        d.attrHandle[c[e]] = b;
      }
    }

    function ka(a, b) {
      var c = b && a,
          d = c && 1 === a.nodeType && 1 === b.nodeType && (~b.sourceIndex || C) - (~a.sourceIndex || C);
      if (d) return d;
      if (c) while (c = c.nextSibling) {
        if (c === b) return -1;
      }
      return a ? 1 : -1;
    }

    function la(a) {
      return function (b) {
        var c = b.nodeName.toLowerCase();
        return "input" === c && b.type === a;
      };
    }

    function ma(a) {
      return function (b) {
        var c = b.nodeName.toLowerCase();
        return ("input" === c || "button" === c) && b.type === a;
      };
    }

    function na(a) {
      return ha(function (b) {
        return b = +b, ha(function (c, d) {
          var e,
              f = a([], c.length, b),
              g = f.length;

          while (g--) {
            c[e = f[g]] && (c[e] = !(d[e] = c[e]));
          }
        });
      });
    }

    function oa(a) {
      return a && "undefined" != typeof a.getElementsByTagName && a;
    }

    c = fa.support = {}, f = fa.isXML = function (a) {
      var b = a && (a.ownerDocument || a).documentElement;
      return b ? "HTML" !== b.nodeName : !1;
    }, m = fa.setDocument = function (a) {
      var b,
          e,
          g = a ? a.ownerDocument || a : v;
      return g !== n && 9 === g.nodeType && g.documentElement ? (n = g, o = n.documentElement, p = !f(n), (e = n.defaultView) && e.top !== e && (e.addEventListener ? e.addEventListener("unload", da, !1) : e.attachEvent && e.attachEvent("onunload", da)), c.attributes = ia(function (a) {
        return a.className = "i", !a.getAttribute("className");
      }), c.getElementsByTagName = ia(function (a) {
        return a.appendChild(n.createComment("")), !a.getElementsByTagName("*").length;
      }), c.getElementsByClassName = Z.test(n.getElementsByClassName), c.getById = ia(function (a) {
        return o.appendChild(a).id = u, !n.getElementsByName || !n.getElementsByName(u).length;
      }), c.getById ? (d.find.ID = function (a, b) {
        if ("undefined" != typeof b.getElementById && p) {
          var c = b.getElementById(a);
          return c ? [c] : [];
        }
      }, d.filter.ID = function (a) {
        var b = a.replace(ba, ca);
        return function (a) {
          return a.getAttribute("id") === b;
        };
      }) : (delete d.find.ID, d.filter.ID = function (a) {
        var b = a.replace(ba, ca);
        return function (a) {
          var c = "undefined" != typeof a.getAttributeNode && a.getAttributeNode("id");
          return c && c.value === b;
        };
      }), d.find.TAG = c.getElementsByTagName ? function (a, b) {
        return "undefined" != typeof b.getElementsByTagName ? b.getElementsByTagName(a) : c.qsa ? b.querySelectorAll(a) : void 0;
      } : function (a, b) {
        var c,
            d = [],
            e = 0,
            f = b.getElementsByTagName(a);

        if ("*" === a) {
          while (c = f[e++]) {
            1 === c.nodeType && d.push(c);
          }

          return d;
        }

        return f;
      }, d.find.CLASS = c.getElementsByClassName && function (a, b) {
        return "undefined" != typeof b.getElementsByClassName && p ? b.getElementsByClassName(a) : void 0;
      }, r = [], q = [], (c.qsa = Z.test(n.querySelectorAll)) && (ia(function (a) {
        o.appendChild(a).innerHTML = "<a id='" + u + "'></a><select id='" + u + "-\r\\' msallowcapture=''><option selected=''></option></select>", a.querySelectorAll("[msallowcapture^='']").length && q.push("[*^$]=" + L + "*(?:''|\"\")"), a.querySelectorAll("[selected]").length || q.push("\\[" + L + "*(?:value|" + K + ")"), a.querySelectorAll("[id~=" + u + "-]").length || q.push("~="), a.querySelectorAll(":checked").length || q.push(":checked"), a.querySelectorAll("a#" + u + "+*").length || q.push(".#.+[+~]");
      }), ia(function (a) {
        var b = n.createElement("input");
        b.setAttribute("type", "hidden"), a.appendChild(b).setAttribute("name", "D"), a.querySelectorAll("[name=d]").length && q.push("name" + L + "*[*^$|!~]?="), a.querySelectorAll(":enabled").length || q.push(":enabled", ":disabled"), a.querySelectorAll("*,:x"), q.push(",.*:");
      })), (c.matchesSelector = Z.test(s = o.matches || o.webkitMatchesSelector || o.mozMatchesSelector || o.oMatchesSelector || o.msMatchesSelector)) && ia(function (a) {
        c.disconnectedMatch = s.call(a, "div"), s.call(a, "[s!='']:x"), r.push("!=", O);
      }), q = q.length && new RegExp(q.join("|")), r = r.length && new RegExp(r.join("|")), b = Z.test(o.compareDocumentPosition), t = b || Z.test(o.contains) ? function (a, b) {
        var c = 9 === a.nodeType ? a.documentElement : a,
            d = b && b.parentNode;
        return a === d || !(!d || 1 !== d.nodeType || !(c.contains ? c.contains(d) : a.compareDocumentPosition && 16 & a.compareDocumentPosition(d)));
      } : function (a, b) {
        if (b) while (b = b.parentNode) {
          if (b === a) return !0;
        }
        return !1;
      }, B = b ? function (a, b) {
        if (a === b) return l = !0, 0;
        var d = !a.compareDocumentPosition - !b.compareDocumentPosition;
        return d ? d : (d = (a.ownerDocument || a) === (b.ownerDocument || b) ? a.compareDocumentPosition(b) : 1, 1 & d || !c.sortDetached && b.compareDocumentPosition(a) === d ? a === n || a.ownerDocument === v && t(v, a) ? -1 : b === n || b.ownerDocument === v && t(v, b) ? 1 : k ? J(k, a) - J(k, b) : 0 : 4 & d ? -1 : 1);
      } : function (a, b) {
        if (a === b) return l = !0, 0;
        var c,
            d = 0,
            e = a.parentNode,
            f = b.parentNode,
            g = [a],
            h = [b];
        if (!e || !f) return a === n ? -1 : b === n ? 1 : e ? -1 : f ? 1 : k ? J(k, a) - J(k, b) : 0;
        if (e === f) return ka(a, b);
        c = a;

        while (c = c.parentNode) {
          g.unshift(c);
        }

        c = b;

        while (c = c.parentNode) {
          h.unshift(c);
        }

        while (g[d] === h[d]) {
          d++;
        }

        return d ? ka(g[d], h[d]) : g[d] === v ? -1 : h[d] === v ? 1 : 0;
      }, n) : n;
    }, fa.matches = function (a, b) {
      return fa(a, null, null, b);
    }, fa.matchesSelector = function (a, b) {
      if ((a.ownerDocument || a) !== n && m(a), b = b.replace(T, "='$1']"), c.matchesSelector && p && !A[b + " "] && (!r || !r.test(b)) && (!q || !q.test(b))) try {
        var d = s.call(a, b);
        if (d || c.disconnectedMatch || a.document && 11 !== a.document.nodeType) return d;
      } catch (e) {}
      return fa(b, n, null, [a]).length > 0;
    }, fa.contains = function (a, b) {
      return (a.ownerDocument || a) !== n && m(a), t(a, b);
    }, fa.attr = function (a, b) {
      (a.ownerDocument || a) !== n && m(a);
      var e = d.attrHandle[b.toLowerCase()],
          f = e && D.call(d.attrHandle, b.toLowerCase()) ? e(a, b, !p) : void 0;
      return void 0 !== f ? f : c.attributes || !p ? a.getAttribute(b) : (f = a.getAttributeNode(b)) && f.specified ? f.value : null;
    }, fa.error = function (a) {
      throw new Error("Syntax error, unrecognized expression: " + a);
    }, fa.uniqueSort = function (a) {
      var b,
          d = [],
          e = 0,
          f = 0;

      if (l = !c.detectDuplicates, k = !c.sortStable && a.slice(0), a.sort(B), l) {
        while (b = a[f++]) {
          b === a[f] && (e = d.push(f));
        }

        while (e--) {
          a.splice(d[e], 1);
        }
      }

      return k = null, a;
    }, e = fa.getText = function (a) {
      var b,
          c = "",
          d = 0,
          f = a.nodeType;

      if (f) {
        if (1 === f || 9 === f || 11 === f) {
          if ("string" == typeof a.textContent) return a.textContent;

          for (a = a.firstChild; a; a = a.nextSibling) {
            c += e(a);
          }
        } else if (3 === f || 4 === f) return a.nodeValue;
      } else while (b = a[d++]) {
        c += e(b);
      }

      return c;
    }, d = fa.selectors = {
      cacheLength: 50,
      createPseudo: ha,
      match: W,
      attrHandle: {},
      find: {},
      relative: {
        ">": {
          dir: "parentNode",
          first: !0
        },
        " ": {
          dir: "parentNode"
        },
        "+": {
          dir: "previousSibling",
          first: !0
        },
        "~": {
          dir: "previousSibling"
        }
      },
      preFilter: {
        ATTR: function ATTR(a) {
          return a[1] = a[1].replace(ba, ca), a[3] = (a[3] || a[4] || a[5] || "").replace(ba, ca), "~=" === a[2] && (a[3] = " " + a[3] + " "), a.slice(0, 4);
        },
        CHILD: function CHILD(a) {
          return a[1] = a[1].toLowerCase(), "nth" === a[1].slice(0, 3) ? (a[3] || fa.error(a[0]), a[4] = +(a[4] ? a[5] + (a[6] || 1) : 2 * ("even" === a[3] || "odd" === a[3])), a[5] = +(a[7] + a[8] || "odd" === a[3])) : a[3] && fa.error(a[0]), a;
        },
        PSEUDO: function PSEUDO(a) {
          var b,
              c = !a[6] && a[2];
          return W.CHILD.test(a[0]) ? null : (a[3] ? a[2] = a[4] || a[5] || "" : c && U.test(c) && (b = g(c, !0)) && (b = c.indexOf(")", c.length - b) - c.length) && (a[0] = a[0].slice(0, b), a[2] = c.slice(0, b)), a.slice(0, 3));
        }
      },
      filter: {
        TAG: function TAG(a) {
          var b = a.replace(ba, ca).toLowerCase();
          return "*" === a ? function () {
            return !0;
          } : function (a) {
            return a.nodeName && a.nodeName.toLowerCase() === b;
          };
        },
        CLASS: function CLASS(a) {
          var b = y[a + " "];
          return b || (b = new RegExp("(^|" + L + ")" + a + "(" + L + "|$)")) && y(a, function (a) {
            return b.test("string" == typeof a.className && a.className || "undefined" != typeof a.getAttribute && a.getAttribute("class") || "");
          });
        },
        ATTR: function ATTR(a, b, c) {
          return function (d) {
            var e = fa.attr(d, a);
            return null == e ? "!=" === b : b ? (e += "", "=" === b ? e === c : "!=" === b ? e !== c : "^=" === b ? c && 0 === e.indexOf(c) : "*=" === b ? c && e.indexOf(c) > -1 : "$=" === b ? c && e.slice(-c.length) === c : "~=" === b ? (" " + e.replace(P, " ") + " ").indexOf(c) > -1 : "|=" === b ? e === c || e.slice(0, c.length + 1) === c + "-" : !1) : !0;
          };
        },
        CHILD: function CHILD(a, b, c, d, e) {
          var f = "nth" !== a.slice(0, 3),
              g = "last" !== a.slice(-4),
              h = "of-type" === b;
          return 1 === d && 0 === e ? function (a) {
            return !!a.parentNode;
          } : function (b, c, i) {
            var j,
                k,
                l,
                m,
                n,
                o,
                p = f !== g ? "nextSibling" : "previousSibling",
                q = b.parentNode,
                r = h && b.nodeName.toLowerCase(),
                s = !i && !h,
                t = !1;

            if (q) {
              if (f) {
                while (p) {
                  m = b;

                  while (m = m[p]) {
                    if (h ? m.nodeName.toLowerCase() === r : 1 === m.nodeType) return !1;
                  }

                  o = p = "only" === a && !o && "nextSibling";
                }

                return !0;
              }

              if (o = [g ? q.firstChild : q.lastChild], g && s) {
                m = q, l = m[u] || (m[u] = {}), k = l[m.uniqueID] || (l[m.uniqueID] = {}), j = k[a] || [], n = j[0] === w && j[1], t = n && j[2], m = n && q.childNodes[n];

                while (m = ++n && m && m[p] || (t = n = 0) || o.pop()) {
                  if (1 === m.nodeType && ++t && m === b) {
                    k[a] = [w, n, t];
                    break;
                  }
                }
              } else if (s && (m = b, l = m[u] || (m[u] = {}), k = l[m.uniqueID] || (l[m.uniqueID] = {}), j = k[a] || [], n = j[0] === w && j[1], t = n), t === !1) while (m = ++n && m && m[p] || (t = n = 0) || o.pop()) {
                if ((h ? m.nodeName.toLowerCase() === r : 1 === m.nodeType) && ++t && (s && (l = m[u] || (m[u] = {}), k = l[m.uniqueID] || (l[m.uniqueID] = {}), k[a] = [w, t]), m === b)) break;
              }

              return t -= e, t === d || t % d === 0 && t / d >= 0;
            }
          };
        },
        PSEUDO: function PSEUDO(a, b) {
          var c,
              e = d.pseudos[a] || d.setFilters[a.toLowerCase()] || fa.error("unsupported pseudo: " + a);
          return e[u] ? e(b) : e.length > 1 ? (c = [a, a, "", b], d.setFilters.hasOwnProperty(a.toLowerCase()) ? ha(function (a, c) {
            var d,
                f = e(a, b),
                g = f.length;

            while (g--) {
              d = J(a, f[g]), a[d] = !(c[d] = f[g]);
            }
          }) : function (a) {
            return e(a, 0, c);
          }) : e;
        }
      },
      pseudos: {
        not: ha(function (a) {
          var b = [],
              c = [],
              d = h(a.replace(Q, "$1"));
          return d[u] ? ha(function (a, b, c, e) {
            var f,
                g = d(a, null, e, []),
                h = a.length;

            while (h--) {
              (f = g[h]) && (a[h] = !(b[h] = f));
            }
          }) : function (a, e, f) {
            return b[0] = a, d(b, null, f, c), b[0] = null, !c.pop();
          };
        }),
        has: ha(function (a) {
          return function (b) {
            return fa(a, b).length > 0;
          };
        }),
        contains: ha(function (a) {
          return a = a.replace(ba, ca), function (b) {
            return (b.textContent || b.innerText || e(b)).indexOf(a) > -1;
          };
        }),
        lang: ha(function (a) {
          return V.test(a || "") || fa.error("unsupported lang: " + a), a = a.replace(ba, ca).toLowerCase(), function (b) {
            var c;

            do {
              if (c = p ? b.lang : b.getAttribute("xml:lang") || b.getAttribute("lang")) return c = c.toLowerCase(), c === a || 0 === c.indexOf(a + "-");
            } while ((b = b.parentNode) && 1 === b.nodeType);

            return !1;
          };
        }),
        target: function target(b) {
          var c = a.location && a.location.hash;
          return c && c.slice(1) === b.id;
        },
        root: function root(a) {
          return a === o;
        },
        focus: function focus(a) {
          return a === n.activeElement && (!n.hasFocus || n.hasFocus()) && !!(a.type || a.href || ~a.tabIndex);
        },
        enabled: function enabled(a) {
          return a.disabled === !1;
        },
        disabled: function disabled(a) {
          return a.disabled === !0;
        },
        checked: function checked(a) {
          var b = a.nodeName.toLowerCase();
          return "input" === b && !!a.checked || "option" === b && !!a.selected;
        },
        selected: function selected(a) {
          return a.parentNode && a.parentNode.selectedIndex, a.selected === !0;
        },
        empty: function empty(a) {
          for (a = a.firstChild; a; a = a.nextSibling) {
            if (a.nodeType < 6) return !1;
          }

          return !0;
        },
        parent: function parent(a) {
          return !d.pseudos.empty(a);
        },
        header: function header(a) {
          return Y.test(a.nodeName);
        },
        input: function input(a) {
          return X.test(a.nodeName);
        },
        button: function button(a) {
          var b = a.nodeName.toLowerCase();
          return "input" === b && "button" === a.type || "button" === b;
        },
        text: function text(a) {
          var b;
          return "input" === a.nodeName.toLowerCase() && "text" === a.type && (null == (b = a.getAttribute("type")) || "text" === b.toLowerCase());
        },
        first: na(function () {
          return [0];
        }),
        last: na(function (a, b) {
          return [b - 1];
        }),
        eq: na(function (a, b, c) {
          return [0 > c ? c + b : c];
        }),
        even: na(function (a, b) {
          for (var c = 0; b > c; c += 2) {
            a.push(c);
          }

          return a;
        }),
        odd: na(function (a, b) {
          for (var c = 1; b > c; c += 2) {
            a.push(c);
          }

          return a;
        }),
        lt: na(function (a, b, c) {
          for (var d = 0 > c ? c + b : c; --d >= 0;) {
            a.push(d);
          }

          return a;
        }),
        gt: na(function (a, b, c) {
          for (var d = 0 > c ? c + b : c; ++d < b;) {
            a.push(d);
          }

          return a;
        })
      }
    }, d.pseudos.nth = d.pseudos.eq;

    for (b in {
      radio: !0,
      checkbox: !0,
      file: !0,
      password: !0,
      image: !0
    }) {
      d.pseudos[b] = la(b);
    }

    for (b in {
      submit: !0,
      reset: !0
    }) {
      d.pseudos[b] = ma(b);
    }

    function pa() {}

    pa.prototype = d.filters = d.pseudos, d.setFilters = new pa(), g = fa.tokenize = function (a, b) {
      var c,
          e,
          f,
          g,
          h,
          i,
          j,
          k = z[a + " "];
      if (k) return b ? 0 : k.slice(0);
      h = a, i = [], j = d.preFilter;

      while (h) {
        (!c || (e = R.exec(h))) && (e && (h = h.slice(e[0].length) || h), i.push(f = [])), c = !1, (e = S.exec(h)) && (c = e.shift(), f.push({
          value: c,
          type: e[0].replace(Q, " ")
        }), h = h.slice(c.length));

        for (g in d.filter) {
          !(e = W[g].exec(h)) || j[g] && !(e = j[g](e)) || (c = e.shift(), f.push({
            value: c,
            type: g,
            matches: e
          }), h = h.slice(c.length));
        }

        if (!c) break;
      }

      return b ? h.length : h ? fa.error(a) : z(a, i).slice(0);
    };

    function qa(a) {
      for (var b = 0, c = a.length, d = ""; c > b; b++) {
        d += a[b].value;
      }

      return d;
    }

    function ra(a, b, c) {
      var d = b.dir,
          e = c && "parentNode" === d,
          f = x++;
      return b.first ? function (b, c, f) {
        while (b = b[d]) {
          if (1 === b.nodeType || e) return a(b, c, f);
        }
      } : function (b, c, g) {
        var h,
            i,
            j,
            k = [w, f];

        if (g) {
          while (b = b[d]) {
            if ((1 === b.nodeType || e) && a(b, c, g)) return !0;
          }
        } else while (b = b[d]) {
          if (1 === b.nodeType || e) {
            if (j = b[u] || (b[u] = {}), i = j[b.uniqueID] || (j[b.uniqueID] = {}), (h = i[d]) && h[0] === w && h[1] === f) return k[2] = h[2];
            if (i[d] = k, k[2] = a(b, c, g)) return !0;
          }
        }
      };
    }

    function sa(a) {
      return a.length > 1 ? function (b, c, d) {
        var e = a.length;

        while (e--) {
          if (!a[e](b, c, d)) return !1;
        }

        return !0;
      } : a[0];
    }

    function ta(a, b, c) {
      for (var d = 0, e = b.length; e > d; d++) {
        fa(a, b[d], c);
      }

      return c;
    }

    function ua(a, b, c, d, e) {
      for (var f, g = [], h = 0, i = a.length, j = null != b; i > h; h++) {
        (f = a[h]) && (!c || c(f, d, e)) && (g.push(f), j && b.push(h));
      }

      return g;
    }

    function va(a, b, c, d, e, f) {
      return d && !d[u] && (d = va(d)), e && !e[u] && (e = va(e, f)), ha(function (f, g, h, i) {
        var j,
            k,
            l,
            m = [],
            n = [],
            o = g.length,
            p = f || ta(b || "*", h.nodeType ? [h] : h, []),
            q = !a || !f && b ? p : ua(p, m, a, h, i),
            r = c ? e || (f ? a : o || d) ? [] : g : q;

        if (c && c(q, r, h, i), d) {
          j = ua(r, n), d(j, [], h, i), k = j.length;

          while (k--) {
            (l = j[k]) && (r[n[k]] = !(q[n[k]] = l));
          }
        }

        if (f) {
          if (e || a) {
            if (e) {
              j = [], k = r.length;

              while (k--) {
                (l = r[k]) && j.push(q[k] = l);
              }

              e(null, r = [], j, i);
            }

            k = r.length;

            while (k--) {
              (l = r[k]) && (j = e ? J(f, l) : m[k]) > -1 && (f[j] = !(g[j] = l));
            }
          }
        } else r = ua(r === g ? r.splice(o, r.length) : r), e ? e(null, g, r, i) : H.apply(g, r);
      });
    }

    function wa(a) {
      for (var b, c, e, f = a.length, g = d.relative[a[0].type], h = g || d.relative[" "], i = g ? 1 : 0, k = ra(function (a) {
        return a === b;
      }, h, !0), l = ra(function (a) {
        return J(b, a) > -1;
      }, h, !0), m = [function (a, c, d) {
        var e = !g && (d || c !== j) || ((b = c).nodeType ? k(a, c, d) : l(a, c, d));
        return b = null, e;
      }]; f > i; i++) {
        if (c = d.relative[a[i].type]) m = [ra(sa(m), c)];else {
          if (c = d.filter[a[i].type].apply(null, a[i].matches), c[u]) {
            for (e = ++i; f > e; e++) {
              if (d.relative[a[e].type]) break;
            }

            return va(i > 1 && sa(m), i > 1 && qa(a.slice(0, i - 1).concat({
              value: " " === a[i - 2].type ? "*" : ""
            })).replace(Q, "$1"), c, e > i && wa(a.slice(i, e)), f > e && wa(a = a.slice(e)), f > e && qa(a));
          }

          m.push(c);
        }
      }

      return sa(m);
    }

    function xa(a, b) {
      var c = b.length > 0,
          e = a.length > 0,
          f = function f(_f, g, h, i, k) {
        var l,
            o,
            q,
            r = 0,
            s = "0",
            t = _f && [],
            u = [],
            v = j,
            x = _f || e && d.find.TAG("*", k),
            y = w += null == v ? 1 : Math.random() || .1,
            z = x.length;

        for (k && (j = g === n || g || k); s !== z && null != (l = x[s]); s++) {
          if (e && l) {
            o = 0, g || l.ownerDocument === n || (m(l), h = !p);

            while (q = a[o++]) {
              if (q(l, g || n, h)) {
                i.push(l);
                break;
              }
            }

            k && (w = y);
          }

          c && ((l = !q && l) && r--, _f && t.push(l));
        }

        if (r += s, c && s !== r) {
          o = 0;

          while (q = b[o++]) {
            q(t, u, g, h);
          }

          if (_f) {
            if (r > 0) while (s--) {
              t[s] || u[s] || (u[s] = F.call(i));
            }
            u = ua(u);
          }

          H.apply(i, u), k && !_f && u.length > 0 && r + b.length > 1 && fa.uniqueSort(i);
        }

        return k && (w = y, j = v), t;
      };

      return c ? ha(f) : f;
    }

    return h = fa.compile = function (a, b) {
      var c,
          d = [],
          e = [],
          f = A[a + " "];

      if (!f) {
        b || (b = g(a)), c = b.length;

        while (c--) {
          f = wa(b[c]), f[u] ? d.push(f) : e.push(f);
        }

        f = A(a, xa(e, d)), f.selector = a;
      }

      return f;
    }, i = fa.select = function (a, b, e, f) {
      var i,
          j,
          k,
          l,
          m,
          n = "function" == typeof a && a,
          o = !f && g(a = n.selector || a);

      if (e = e || [], 1 === o.length) {
        if (j = o[0] = o[0].slice(0), j.length > 2 && "ID" === (k = j[0]).type && c.getById && 9 === b.nodeType && p && d.relative[j[1].type]) {
          if (b = (d.find.ID(k.matches[0].replace(ba, ca), b) || [])[0], !b) return e;
          n && (b = b.parentNode), a = a.slice(j.shift().value.length);
        }

        i = W.needsContext.test(a) ? 0 : j.length;

        while (i--) {
          if (k = j[i], d.relative[l = k.type]) break;

          if ((m = d.find[l]) && (f = m(k.matches[0].replace(ba, ca), _.test(j[0].type) && oa(b.parentNode) || b))) {
            if (j.splice(i, 1), a = f.length && qa(j), !a) return H.apply(e, f), e;
            break;
          }
        }
      }

      return (n || h(a, o))(f, b, !p, e, !b || _.test(a) && oa(b.parentNode) || b), e;
    }, c.sortStable = u.split("").sort(B).join("") === u, c.detectDuplicates = !!l, m(), c.sortDetached = ia(function (a) {
      return 1 & a.compareDocumentPosition(n.createElement("div"));
    }), ia(function (a) {
      return a.innerHTML = "<a href='#'></a>", "#" === a.firstChild.getAttribute("href");
    }) || ja("type|href|height|width", function (a, b, c) {
      return c ? void 0 : a.getAttribute(b, "type" === b.toLowerCase() ? 1 : 2);
    }), c.attributes && ia(function (a) {
      return a.innerHTML = "<input/>", a.firstChild.setAttribute("value", ""), "" === a.firstChild.getAttribute("value");
    }) || ja("value", function (a, b, c) {
      return c || "input" !== a.nodeName.toLowerCase() ? void 0 : a.defaultValue;
    }), ia(function (a) {
      return null == a.getAttribute("disabled");
    }) || ja(K, function (a, b, c) {
      var d;
      return c ? void 0 : a[b] === !0 ? b.toLowerCase() : (d = a.getAttributeNode(b)) && d.specified ? d.value : null;
    }), fa;
  }(a);

  n.find = t, n.expr = t.selectors, n.expr[":"] = n.expr.pseudos, n.uniqueSort = n.unique = t.uniqueSort, n.text = t.getText, n.isXMLDoc = t.isXML, n.contains = t.contains;

  var u = function u(a, b, c) {
    var d = [],
        e = void 0 !== c;

    while ((a = a[b]) && 9 !== a.nodeType) {
      if (1 === a.nodeType) {
        if (e && n(a).is(c)) break;
        d.push(a);
      }
    }

    return d;
  },
      v = function v(a, b) {
    for (var c = []; a; a = a.nextSibling) {
      1 === a.nodeType && a !== b && c.push(a);
    }

    return c;
  },
      w = n.expr.match.needsContext,
      x = /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,
      y = /^.[^:#\[\.,]*$/;

  function z(a, b, c) {
    if (n.isFunction(b)) return n.grep(a, function (a, d) {
      return !!b.call(a, d, a) !== c;
    });
    if (b.nodeType) return n.grep(a, function (a) {
      return a === b !== c;
    });

    if ("string" == typeof b) {
      if (y.test(b)) return n.filter(b, a, c);
      b = n.filter(b, a);
    }

    return n.grep(a, function (a) {
      return n.inArray(a, b) > -1 !== c;
    });
  }

  n.filter = function (a, b, c) {
    var d = b[0];
    return c && (a = ":not(" + a + ")"), 1 === b.length && 1 === d.nodeType ? n.find.matchesSelector(d, a) ? [d] : [] : n.find.matches(a, n.grep(b, function (a) {
      return 1 === a.nodeType;
    }));
  }, n.fn.extend({
    find: function find(a) {
      var b,
          c = [],
          d = this,
          e = d.length;
      if ("string" != typeof a) return this.pushStack(n(a).filter(function () {
        for (b = 0; e > b; b++) {
          if (n.contains(d[b], this)) return !0;
        }
      }));

      for (b = 0; e > b; b++) {
        n.find(a, d[b], c);
      }

      return c = this.pushStack(e > 1 ? n.unique(c) : c), c.selector = this.selector ? this.selector + " " + a : a, c;
    },
    filter: function filter(a) {
      return this.pushStack(z(this, a || [], !1));
    },
    not: function not(a) {
      return this.pushStack(z(this, a || [], !0));
    },
    is: function is(a) {
      return !!z(this, "string" == typeof a && w.test(a) ? n(a) : a || [], !1).length;
    }
  });

  var A,
      B = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
      C = n.fn.init = function (a, b, c) {
    var e, f;
    if (!a) return this;

    if (c = c || A, "string" == typeof a) {
      if (e = "<" === a.charAt(0) && ">" === a.charAt(a.length - 1) && a.length >= 3 ? [null, a, null] : B.exec(a), !e || !e[1] && b) return !b || b.jquery ? (b || c).find(a) : this.constructor(b).find(a);

      if (e[1]) {
        if (b = b instanceof n ? b[0] : b, n.merge(this, n.parseHTML(e[1], b && b.nodeType ? b.ownerDocument || b : d, !0)), x.test(e[1]) && n.isPlainObject(b)) for (e in b) {
          n.isFunction(this[e]) ? this[e](b[e]) : this.attr(e, b[e]);
        }
        return this;
      }

      if (f = d.getElementById(e[2]), f && f.parentNode) {
        if (f.id !== e[2]) return A.find(a);
        this.length = 1, this[0] = f;
      }

      return this.context = d, this.selector = a, this;
    }

    return a.nodeType ? (this.context = this[0] = a, this.length = 1, this) : n.isFunction(a) ? "undefined" != typeof c.ready ? c.ready(a) : a(n) : (void 0 !== a.selector && (this.selector = a.selector, this.context = a.context), n.makeArray(a, this));
  };

  C.prototype = n.fn, A = n(d);
  var D = /^(?:parents|prev(?:Until|All))/,
      E = {
    children: !0,
    contents: !0,
    next: !0,
    prev: !0
  };
  n.fn.extend({
    has: function has(a) {
      var b,
          c = n(a, this),
          d = c.length;
      return this.filter(function () {
        for (b = 0; d > b; b++) {
          if (n.contains(this, c[b])) return !0;
        }
      });
    },
    closest: function closest(a, b) {
      for (var c, d = 0, e = this.length, f = [], g = w.test(a) || "string" != typeof a ? n(a, b || this.context) : 0; e > d; d++) {
        for (c = this[d]; c && c !== b; c = c.parentNode) {
          if (c.nodeType < 11 && (g ? g.index(c) > -1 : 1 === c.nodeType && n.find.matchesSelector(c, a))) {
            f.push(c);
            break;
          }
        }
      }

      return this.pushStack(f.length > 1 ? n.uniqueSort(f) : f);
    },
    index: function index(a) {
      return a ? "string" == typeof a ? n.inArray(this[0], n(a)) : n.inArray(a.jquery ? a[0] : a, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
    },
    add: function add(a, b) {
      return this.pushStack(n.uniqueSort(n.merge(this.get(), n(a, b))));
    },
    addBack: function addBack(a) {
      return this.add(null == a ? this.prevObject : this.prevObject.filter(a));
    }
  });

  function F(a, b) {
    do {
      a = a[b];
    } while (a && 1 !== a.nodeType);

    return a;
  }

  n.each({
    parent: function parent(a) {
      var b = a.parentNode;
      return b && 11 !== b.nodeType ? b : null;
    },
    parents: function parents(a) {
      return u(a, "parentNode");
    },
    parentsUntil: function parentsUntil(a, b, c) {
      return u(a, "parentNode", c);
    },
    next: function next(a) {
      return F(a, "nextSibling");
    },
    prev: function prev(a) {
      return F(a, "previousSibling");
    },
    nextAll: function nextAll(a) {
      return u(a, "nextSibling");
    },
    prevAll: function prevAll(a) {
      return u(a, "previousSibling");
    },
    nextUntil: function nextUntil(a, b, c) {
      return u(a, "nextSibling", c);
    },
    prevUntil: function prevUntil(a, b, c) {
      return u(a, "previousSibling", c);
    },
    siblings: function siblings(a) {
      return v((a.parentNode || {}).firstChild, a);
    },
    children: function children(a) {
      return v(a.firstChild);
    },
    contents: function contents(a) {
      return n.nodeName(a, "iframe") ? a.contentDocument || a.contentWindow.document : n.merge([], a.childNodes);
    }
  }, function (a, b) {
    n.fn[a] = function (c, d) {
      var e = n.map(this, b, c);
      return "Until" !== a.slice(-5) && (d = c), d && "string" == typeof d && (e = n.filter(d, e)), this.length > 1 && (E[a] || (e = n.uniqueSort(e)), D.test(a) && (e = e.reverse())), this.pushStack(e);
    };
  });
  var G = /\S+/g;

  function H(a) {
    var b = {};
    return n.each(a.match(G) || [], function (a, c) {
      b[c] = !0;
    }), b;
  }

  n.Callbacks = function (a) {
    a = "string" == typeof a ? H(a) : n.extend({}, a);

    var b,
        c,
        d,
        e,
        f = [],
        g = [],
        h = -1,
        i = function i() {
      for (e = a.once, d = b = !0; g.length; h = -1) {
        c = g.shift();

        while (++h < f.length) {
          f[h].apply(c[0], c[1]) === !1 && a.stopOnFalse && (h = f.length, c = !1);
        }
      }

      a.memory || (c = !1), b = !1, e && (f = c ? [] : "");
    },
        j = {
      add: function add() {
        return f && (c && !b && (h = f.length - 1, g.push(c)), function d(b) {
          n.each(b, function (b, c) {
            n.isFunction(c) ? a.unique && j.has(c) || f.push(c) : c && c.length && "string" !== n.type(c) && d(c);
          });
        }(arguments), c && !b && i()), this;
      },
      remove: function remove() {
        return n.each(arguments, function (a, b) {
          var c;

          while ((c = n.inArray(b, f, c)) > -1) {
            f.splice(c, 1), h >= c && h--;
          }
        }), this;
      },
      has: function has(a) {
        return a ? n.inArray(a, f) > -1 : f.length > 0;
      },
      empty: function empty() {
        return f && (f = []), this;
      },
      disable: function disable() {
        return e = g = [], f = c = "", this;
      },
      disabled: function disabled() {
        return !f;
      },
      lock: function lock() {
        return e = !0, c || j.disable(), this;
      },
      locked: function locked() {
        return !!e;
      },
      fireWith: function fireWith(a, c) {
        return e || (c = c || [], c = [a, c.slice ? c.slice() : c], g.push(c), b || i()), this;
      },
      fire: function fire() {
        return j.fireWith(this, arguments), this;
      },
      fired: function fired() {
        return !!d;
      }
    };

    return j;
  }, n.extend({
    Deferred: function Deferred(a) {
      var b = [["resolve", "done", n.Callbacks("once memory"), "resolved"], ["reject", "fail", n.Callbacks("once memory"), "rejected"], ["notify", "progress", n.Callbacks("memory")]],
          c = "pending",
          d = {
        state: function state() {
          return c;
        },
        always: function always() {
          return e.done(arguments).fail(arguments), this;
        },
        then: function then() {
          var a = arguments;
          return n.Deferred(function (c) {
            n.each(b, function (b, f) {
              var g = n.isFunction(a[b]) && a[b];
              e[f[1]](function () {
                var a = g && g.apply(this, arguments);
                a && n.isFunction(a.promise) ? a.promise().progress(c.notify).done(c.resolve).fail(c.reject) : c[f[0] + "With"](this === d ? c.promise() : this, g ? [a] : arguments);
              });
            }), a = null;
          }).promise();
        },
        promise: function promise(a) {
          return null != a ? n.extend(a, d) : d;
        }
      },
          e = {};
      return d.pipe = d.then, n.each(b, function (a, f) {
        var g = f[2],
            h = f[3];
        d[f[1]] = g.add, h && g.add(function () {
          c = h;
        }, b[1 ^ a][2].disable, b[2][2].lock), e[f[0]] = function () {
          return e[f[0] + "With"](this === e ? d : this, arguments), this;
        }, e[f[0] + "With"] = g.fireWith;
      }), d.promise(e), a && a.call(e, e), e;
    },
    when: function when(a) {
      var b = 0,
          c = e.call(arguments),
          d = c.length,
          f = 1 !== d || a && n.isFunction(a.promise) ? d : 0,
          g = 1 === f ? a : n.Deferred(),
          h = function h(a, b, c) {
        return function (d) {
          b[a] = this, c[a] = arguments.length > 1 ? e.call(arguments) : d, c === i ? g.notifyWith(b, c) : --f || g.resolveWith(b, c);
        };
      },
          i,
          j,
          k;

      if (d > 1) for (i = new Array(d), j = new Array(d), k = new Array(d); d > b; b++) {
        c[b] && n.isFunction(c[b].promise) ? c[b].promise().progress(h(b, j, i)).done(h(b, k, c)).fail(g.reject) : --f;
      }
      return f || g.resolveWith(k, c), g.promise();
    }
  });
  var I;
  n.fn.ready = function (a) {
    return n.ready.promise().done(a), this;
  }, n.extend({
    isReady: !1,
    readyWait: 1,
    holdReady: function holdReady(a) {
      a ? n.readyWait++ : n.ready(!0);
    },
    ready: function ready(a) {
      (a === !0 ? --n.readyWait : n.isReady) || (n.isReady = !0, a !== !0 && --n.readyWait > 0 || (I.resolveWith(d, [n]), n.fn.triggerHandler && (n(d).triggerHandler("ready"), n(d).off("ready"))));
    }
  });

  function J() {
    d.addEventListener ? (d.removeEventListener("DOMContentLoaded", K), a.removeEventListener("load", K)) : (d.detachEvent("onreadystatechange", K), a.detachEvent("onload", K));
  }

  function K() {
    (d.addEventListener || "load" === a.event.type || "complete" === d.readyState) && (J(), n.ready());
  }

  n.ready.promise = function (b) {
    if (!I) if (I = n.Deferred(), "complete" === d.readyState) a.setTimeout(n.ready);else if (d.addEventListener) d.addEventListener("DOMContentLoaded", K), a.addEventListener("load", K);else {
      d.attachEvent("onreadystatechange", K), a.attachEvent("onload", K);
      var c = !1;

      try {
        c = null == a.frameElement && d.documentElement;
      } catch (e) {}

      c && c.doScroll && !function f() {
        if (!n.isReady) {
          try {
            c.doScroll("left");
          } catch (b) {
            return a.setTimeout(f, 50);
          }

          J(), n.ready();
        }
      }();
    }
    return I.promise(b);
  }, n.ready.promise();
  var L;

  for (L in n(l)) {
    break;
  }

  l.ownFirst = "0" === L, l.inlineBlockNeedsLayout = !1, n(function () {
    var a, b, c, e;
    c = d.getElementsByTagName("body")[0], c && c.style && (b = d.createElement("div"), e = d.createElement("div"), e.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", c.appendChild(e).appendChild(b), "undefined" != typeof b.style.zoom && (b.style.cssText = "display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1", l.inlineBlockNeedsLayout = a = 3 === b.offsetWidth, a && (c.style.zoom = 1)), c.removeChild(e));
  }), function () {
    var a = d.createElement("div");
    l.deleteExpando = !0;

    try {
      delete a.test;
    } catch (b) {
      l.deleteExpando = !1;
    }

    a = null;
  }();

  var M = function M(a) {
    var b = n.noData[(a.nodeName + " ").toLowerCase()],
        c = +a.nodeType || 1;
    return 1 !== c && 9 !== c ? !1 : !b || b !== !0 && a.getAttribute("classid") === b;
  },
      N = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
      O = /([A-Z])/g;

  function P(a, b, c) {
    if (void 0 === c && 1 === a.nodeType) {
      var d = "data-" + b.replace(O, "-$1").toLowerCase();

      if (c = a.getAttribute(d), "string" == typeof c) {
        try {
          c = "true" === c ? !0 : "false" === c ? !1 : "null" === c ? null : +c + "" === c ? +c : N.test(c) ? n.parseJSON(c) : c;
        } catch (e) {}

        n.data(a, b, c);
      } else c = void 0;
    }

    return c;
  }

  function Q(a) {
    var b;

    for (b in a) {
      if (("data" !== b || !n.isEmptyObject(a[b])) && "toJSON" !== b) return !1;
    }

    return !0;
  }

  function R(a, b, d, e) {
    if (M(a)) {
      var f,
          g,
          h = n.expando,
          i = a.nodeType,
          j = i ? n.cache : a,
          k = i ? a[h] : a[h] && h;
      if (k && j[k] && (e || j[k].data) || void 0 !== d || "string" != typeof b) return k || (k = i ? a[h] = c.pop() || n.guid++ : h), j[k] || (j[k] = i ? {} : {
        toJSON: n.noop
      }), ("object" == _typeof(b) || "function" == typeof b) && (e ? j[k] = n.extend(j[k], b) : j[k].data = n.extend(j[k].data, b)), g = j[k], e || (g.data || (g.data = {}), g = g.data), void 0 !== d && (g[n.camelCase(b)] = d), "string" == typeof b ? (f = g[b], null == f && (f = g[n.camelCase(b)])) : f = g, f;
    }
  }

  function S(a, b, c) {
    if (M(a)) {
      var d,
          e,
          f = a.nodeType,
          g = f ? n.cache : a,
          h = f ? a[n.expando] : n.expando;

      if (g[h]) {
        if (b && (d = c ? g[h] : g[h].data)) {
          n.isArray(b) ? b = b.concat(n.map(b, n.camelCase)) : b in d ? b = [b] : (b = n.camelCase(b), b = b in d ? [b] : b.split(" ")), e = b.length;

          while (e--) {
            delete d[b[e]];
          }

          if (c ? !Q(d) : !n.isEmptyObject(d)) return;
        }

        (c || (delete g[h].data, Q(g[h]))) && (f ? n.cleanData([a], !0) : l.deleteExpando || g != g.window ? delete g[h] : g[h] = void 0);
      }
    }
  }

  n.extend({
    cache: {},
    noData: {
      "applet ": !0,
      "embed ": !0,
      "object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
    },
    hasData: function hasData(a) {
      return a = a.nodeType ? n.cache[a[n.expando]] : a[n.expando], !!a && !Q(a);
    },
    data: function data(a, b, c) {
      return R(a, b, c);
    },
    removeData: function removeData(a, b) {
      return S(a, b);
    },
    _data: function _data(a, b, c) {
      return R(a, b, c, !0);
    },
    _removeData: function _removeData(a, b) {
      return S(a, b, !0);
    }
  }), n.fn.extend({
    data: function data(a, b) {
      var c,
          d,
          e,
          f = this[0],
          g = f && f.attributes;

      if (void 0 === a) {
        if (this.length && (e = n.data(f), 1 === f.nodeType && !n._data(f, "parsedAttrs"))) {
          c = g.length;

          while (c--) {
            g[c] && (d = g[c].name, 0 === d.indexOf("data-") && (d = n.camelCase(d.slice(5)), P(f, d, e[d])));
          }

          n._data(f, "parsedAttrs", !0);
        }

        return e;
      }

      return "object" == _typeof(a) ? this.each(function () {
        n.data(this, a);
      }) : arguments.length > 1 ? this.each(function () {
        n.data(this, a, b);
      }) : f ? P(f, a, n.data(f, a)) : void 0;
    },
    removeData: function removeData(a) {
      return this.each(function () {
        n.removeData(this, a);
      });
    }
  }), n.extend({
    queue: function queue(a, b, c) {
      var d;
      return a ? (b = (b || "fx") + "queue", d = n._data(a, b), c && (!d || n.isArray(c) ? d = n._data(a, b, n.makeArray(c)) : d.push(c)), d || []) : void 0;
    },
    dequeue: function dequeue(a, b) {
      b = b || "fx";

      var c = n.queue(a, b),
          d = c.length,
          e = c.shift(),
          f = n._queueHooks(a, b),
          g = function g() {
        n.dequeue(a, b);
      };

      "inprogress" === e && (e = c.shift(), d--), e && ("fx" === b && c.unshift("inprogress"), delete f.stop, e.call(a, g, f)), !d && f && f.empty.fire();
    },
    _queueHooks: function _queueHooks(a, b) {
      var c = b + "queueHooks";
      return n._data(a, c) || n._data(a, c, {
        empty: n.Callbacks("once memory").add(function () {
          n._removeData(a, b + "queue"), n._removeData(a, c);
        })
      });
    }
  }), n.fn.extend({
    queue: function queue(a, b) {
      var c = 2;
      return "string" != typeof a && (b = a, a = "fx", c--), arguments.length < c ? n.queue(this[0], a) : void 0 === b ? this : this.each(function () {
        var c = n.queue(this, a, b);
        n._queueHooks(this, a), "fx" === a && "inprogress" !== c[0] && n.dequeue(this, a);
      });
    },
    dequeue: function dequeue(a) {
      return this.each(function () {
        n.dequeue(this, a);
      });
    },
    clearQueue: function clearQueue(a) {
      return this.queue(a || "fx", []);
    },
    promise: function promise(a, b) {
      var c,
          d = 1,
          e = n.Deferred(),
          f = this,
          g = this.length,
          h = function h() {
        --d || e.resolveWith(f, [f]);
      };

      "string" != typeof a && (b = a, a = void 0), a = a || "fx";

      while (g--) {
        c = n._data(f[g], a + "queueHooks"), c && c.empty && (d++, c.empty.add(h));
      }

      return h(), e.promise(b);
    }
  }), function () {
    var a;

    l.shrinkWrapBlocks = function () {
      if (null != a) return a;
      a = !1;
      var b, c, e;
      return c = d.getElementsByTagName("body")[0], c && c.style ? (b = d.createElement("div"), e = d.createElement("div"), e.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", c.appendChild(e).appendChild(b), "undefined" != typeof b.style.zoom && (b.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1", b.appendChild(d.createElement("div")).style.width = "5px", a = 3 !== b.offsetWidth), c.removeChild(e), a) : void 0;
    };
  }();

  var T = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
      U = new RegExp("^(?:([+-])=|)(" + T + ")([a-z%]*)$", "i"),
      V = ["Top", "Right", "Bottom", "Left"],
      W = function W(a, b) {
    return a = b || a, "none" === n.css(a, "display") || !n.contains(a.ownerDocument, a);
  };

  function X(a, b, c, d) {
    var e,
        f = 1,
        g = 20,
        h = d ? function () {
      return d.cur();
    } : function () {
      return n.css(a, b, "");
    },
        i = h(),
        j = c && c[3] || (n.cssNumber[b] ? "" : "px"),
        k = (n.cssNumber[b] || "px" !== j && +i) && U.exec(n.css(a, b));

    if (k && k[3] !== j) {
      j = j || k[3], c = c || [], k = +i || 1;

      do {
        f = f || ".5", k /= f, n.style(a, b, k + j);
      } while (f !== (f = h() / i) && 1 !== f && --g);
    }

    return c && (k = +k || +i || 0, e = c[1] ? k + (c[1] + 1) * c[2] : +c[2], d && (d.unit = j, d.start = k, d.end = e)), e;
  }

  var Y = function Y(a, b, c, d, e, f, g) {
    var h = 0,
        i = a.length,
        j = null == c;

    if ("object" === n.type(c)) {
      e = !0;

      for (h in c) {
        Y(a, b, h, c[h], !0, f, g);
      }
    } else if (void 0 !== d && (e = !0, n.isFunction(d) || (g = !0), j && (g ? (b.call(a, d), b = null) : (j = b, b = function b(a, _b2, c) {
      return j.call(n(a), c);
    })), b)) for (; i > h; h++) {
      b(a[h], c, g ? d : d.call(a[h], h, b(a[h], c)));
    }

    return e ? a : j ? b.call(a) : i ? b(a[0], c) : f;
  },
      Z = /^(?:checkbox|radio)$/i,
      $ = /<([\w:-]+)/,
      _ = /^$|\/(?:java|ecma)script/i,
      aa = /^\s+/,
      ba = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|dialog|figcaption|figure|footer|header|hgroup|main|mark|meter|nav|output|picture|progress|section|summary|template|time|video";

  function ca(a) {
    var b = ba.split("|"),
        c = a.createDocumentFragment();
    if (c.createElement) while (b.length) {
      c.createElement(b.pop());
    }
    return c;
  }

  !function () {
    var a = d.createElement("div"),
        b = d.createDocumentFragment(),
        c = d.createElement("input");
    a.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", l.leadingWhitespace = 3 === a.firstChild.nodeType, l.tbody = !a.getElementsByTagName("tbody").length, l.htmlSerialize = !!a.getElementsByTagName("link").length, l.html5Clone = "<:nav></:nav>" !== d.createElement("nav").cloneNode(!0).outerHTML, c.type = "checkbox", c.checked = !0, b.appendChild(c), l.appendChecked = c.checked, a.innerHTML = "<textarea>x</textarea>", l.noCloneChecked = !!a.cloneNode(!0).lastChild.defaultValue, b.appendChild(a), c = d.createElement("input"), c.setAttribute("type", "radio"), c.setAttribute("checked", "checked"), c.setAttribute("name", "t"), a.appendChild(c), l.checkClone = a.cloneNode(!0).cloneNode(!0).lastChild.checked, l.noCloneEvent = !!a.addEventListener, a[n.expando] = 1, l.attributes = !a.getAttribute(n.expando);
  }();
  var da = {
    option: [1, "<select multiple='multiple'>", "</select>"],
    legend: [1, "<fieldset>", "</fieldset>"],
    area: [1, "<map>", "</map>"],
    param: [1, "<object>", "</object>"],
    thead: [1, "<table>", "</table>"],
    tr: [2, "<table><tbody>", "</tbody></table>"],
    col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
    td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
    _default: l.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
  };
  da.optgroup = da.option, da.tbody = da.tfoot = da.colgroup = da.caption = da.thead, da.th = da.td;

  function ea(a, b) {
    var c,
        d,
        e = 0,
        f = "undefined" != typeof a.getElementsByTagName ? a.getElementsByTagName(b || "*") : "undefined" != typeof a.querySelectorAll ? a.querySelectorAll(b || "*") : void 0;
    if (!f) for (f = [], c = a.childNodes || a; null != (d = c[e]); e++) {
      !b || n.nodeName(d, b) ? f.push(d) : n.merge(f, ea(d, b));
    }
    return void 0 === b || b && n.nodeName(a, b) ? n.merge([a], f) : f;
  }

  function fa(a, b) {
    for (var c, d = 0; null != (c = a[d]); d++) {
      n._data(c, "globalEval", !b || n._data(b[d], "globalEval"));
    }
  }

  var ga = /<|&#?\w+;/,
      ha = /<tbody/i;

  function ia(a) {
    Z.test(a.type) && (a.defaultChecked = a.checked);
  }

  function ja(a, b, c, d, e) {
    for (var f, g, h, i, j, k, m, o = a.length, p = ca(b), q = [], r = 0; o > r; r++) {
      if (g = a[r], g || 0 === g) if ("object" === n.type(g)) n.merge(q, g.nodeType ? [g] : g);else if (ga.test(g)) {
        i = i || p.appendChild(b.createElement("div")), j = ($.exec(g) || ["", ""])[1].toLowerCase(), m = da[j] || da._default, i.innerHTML = m[1] + n.htmlPrefilter(g) + m[2], f = m[0];

        while (f--) {
          i = i.lastChild;
        }

        if (!l.leadingWhitespace && aa.test(g) && q.push(b.createTextNode(aa.exec(g)[0])), !l.tbody) {
          g = "table" !== j || ha.test(g) ? "<table>" !== m[1] || ha.test(g) ? 0 : i : i.firstChild, f = g && g.childNodes.length;

          while (f--) {
            n.nodeName(k = g.childNodes[f], "tbody") && !k.childNodes.length && g.removeChild(k);
          }
        }

        n.merge(q, i.childNodes), i.textContent = "";

        while (i.firstChild) {
          i.removeChild(i.firstChild);
        }

        i = p.lastChild;
      } else q.push(b.createTextNode(g));
    }

    i && p.removeChild(i), l.appendChecked || n.grep(ea(q, "input"), ia), r = 0;

    while (g = q[r++]) {
      if (d && n.inArray(g, d) > -1) e && e.push(g);else if (h = n.contains(g.ownerDocument, g), i = ea(p.appendChild(g), "script"), h && fa(i), c) {
        f = 0;

        while (g = i[f++]) {
          _.test(g.type || "") && c.push(g);
        }
      }
    }

    return i = null, p;
  }

  !function () {
    var b,
        c,
        e = d.createElement("div");

    for (b in {
      submit: !0,
      change: !0,
      focusin: !0
    }) {
      c = "on" + b, (l[b] = c in a) || (e.setAttribute(c, "t"), l[b] = e.attributes[c].expando === !1);
    }

    e = null;
  }();
  var ka = /^(?:input|select|textarea)$/i,
      la = /^key/,
      ma = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
      na = /^(?:focusinfocus|focusoutblur)$/,
      oa = /^([^.]*)(?:\.(.+)|)/;

  function pa() {
    return !0;
  }

  function qa() {
    return !1;
  }

  function ra() {
    try {
      return d.activeElement;
    } catch (a) {}
  }

  function sa(a, b, c, d, e, f) {
    var g, h;

    if ("object" == _typeof(b)) {
      "string" != typeof c && (d = d || c, c = void 0);

      for (h in b) {
        sa(a, h, c, d, b[h], f);
      }

      return a;
    }

    if (null == d && null == e ? (e = c, d = c = void 0) : null == e && ("string" == typeof c ? (e = d, d = void 0) : (e = d, d = c, c = void 0)), e === !1) e = qa;else if (!e) return a;
    return 1 === f && (g = e, e = function e(a) {
      return n().off(a), g.apply(this, arguments);
    }, e.guid = g.guid || (g.guid = n.guid++)), a.each(function () {
      n.event.add(this, b, e, d, c);
    });
  }

  n.event = {
    global: {},
    add: function add(a, b, c, d, e) {
      var f,
          g,
          h,
          i,
          j,
          k,
          l,
          m,
          o,
          p,
          q,
          r = n._data(a);

      if (r) {
        c.handler && (i = c, c = i.handler, e = i.selector), c.guid || (c.guid = n.guid++), (g = r.events) || (g = r.events = {}), (k = r.handle) || (k = r.handle = function (a) {
          return "undefined" == typeof n || a && n.event.triggered === a.type ? void 0 : n.event.dispatch.apply(k.elem, arguments);
        }, k.elem = a), b = (b || "").match(G) || [""], h = b.length;

        while (h--) {
          f = oa.exec(b[h]) || [], o = q = f[1], p = (f[2] || "").split(".").sort(), o && (j = n.event.special[o] || {}, o = (e ? j.delegateType : j.bindType) || o, j = n.event.special[o] || {}, l = n.extend({
            type: o,
            origType: q,
            data: d,
            handler: c,
            guid: c.guid,
            selector: e,
            needsContext: e && n.expr.match.needsContext.test(e),
            namespace: p.join(".")
          }, i), (m = g[o]) || (m = g[o] = [], m.delegateCount = 0, j.setup && j.setup.call(a, d, p, k) !== !1 || (a.addEventListener ? a.addEventListener(o, k, !1) : a.attachEvent && a.attachEvent("on" + o, k))), j.add && (j.add.call(a, l), l.handler.guid || (l.handler.guid = c.guid)), e ? m.splice(m.delegateCount++, 0, l) : m.push(l), n.event.global[o] = !0);
        }

        a = null;
      }
    },
    remove: function remove(a, b, c, d, e) {
      var f,
          g,
          h,
          i,
          j,
          k,
          l,
          m,
          o,
          p,
          q,
          r = n.hasData(a) && n._data(a);

      if (r && (k = r.events)) {
        b = (b || "").match(G) || [""], j = b.length;

        while (j--) {
          if (h = oa.exec(b[j]) || [], o = q = h[1], p = (h[2] || "").split(".").sort(), o) {
            l = n.event.special[o] || {}, o = (d ? l.delegateType : l.bindType) || o, m = k[o] || [], h = h[2] && new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"), i = f = m.length;

            while (f--) {
              g = m[f], !e && q !== g.origType || c && c.guid !== g.guid || h && !h.test(g.namespace) || d && d !== g.selector && ("**" !== d || !g.selector) || (m.splice(f, 1), g.selector && m.delegateCount--, l.remove && l.remove.call(a, g));
            }

            i && !m.length && (l.teardown && l.teardown.call(a, p, r.handle) !== !1 || n.removeEvent(a, o, r.handle), delete k[o]);
          } else for (o in k) {
            n.event.remove(a, o + b[j], c, d, !0);
          }
        }

        n.isEmptyObject(k) && (delete r.handle, n._removeData(a, "events"));
      }
    },
    trigger: function trigger(b, c, e, f) {
      var g,
          h,
          i,
          j,
          l,
          m,
          o,
          p = [e || d],
          q = k.call(b, "type") ? b.type : b,
          r = k.call(b, "namespace") ? b.namespace.split(".") : [];

      if (i = m = e = e || d, 3 !== e.nodeType && 8 !== e.nodeType && !na.test(q + n.event.triggered) && (q.indexOf(".") > -1 && (r = q.split("."), q = r.shift(), r.sort()), h = q.indexOf(":") < 0 && "on" + q, b = b[n.expando] ? b : new n.Event(q, "object" == _typeof(b) && b), b.isTrigger = f ? 2 : 3, b.namespace = r.join("."), b.rnamespace = b.namespace ? new RegExp("(^|\\.)" + r.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, b.result = void 0, b.target || (b.target = e), c = null == c ? [b] : n.makeArray(c, [b]), l = n.event.special[q] || {}, f || !l.trigger || l.trigger.apply(e, c) !== !1)) {
        if (!f && !l.noBubble && !n.isWindow(e)) {
          for (j = l.delegateType || q, na.test(j + q) || (i = i.parentNode); i; i = i.parentNode) {
            p.push(i), m = i;
          }

          m === (e.ownerDocument || d) && p.push(m.defaultView || m.parentWindow || a);
        }

        o = 0;

        while ((i = p[o++]) && !b.isPropagationStopped()) {
          b.type = o > 1 ? j : l.bindType || q, g = (n._data(i, "events") || {})[b.type] && n._data(i, "handle"), g && g.apply(i, c), g = h && i[h], g && g.apply && M(i) && (b.result = g.apply(i, c), b.result === !1 && b.preventDefault());
        }

        if (b.type = q, !f && !b.isDefaultPrevented() && (!l._default || l._default.apply(p.pop(), c) === !1) && M(e) && h && e[q] && !n.isWindow(e)) {
          m = e[h], m && (e[h] = null), n.event.triggered = q;

          try {
            e[q]();
          } catch (s) {}

          n.event.triggered = void 0, m && (e[h] = m);
        }

        return b.result;
      }
    },
    dispatch: function dispatch(a) {
      a = n.event.fix(a);
      var b,
          c,
          d,
          f,
          g,
          h = [],
          i = e.call(arguments),
          j = (n._data(this, "events") || {})[a.type] || [],
          k = n.event.special[a.type] || {};

      if (i[0] = a, a.delegateTarget = this, !k.preDispatch || k.preDispatch.call(this, a) !== !1) {
        h = n.event.handlers.call(this, a, j), b = 0;

        while ((f = h[b++]) && !a.isPropagationStopped()) {
          a.currentTarget = f.elem, c = 0;

          while ((g = f.handlers[c++]) && !a.isImmediatePropagationStopped()) {
            (!a.rnamespace || a.rnamespace.test(g.namespace)) && (a.handleObj = g, a.data = g.data, d = ((n.event.special[g.origType] || {}).handle || g.handler).apply(f.elem, i), void 0 !== d && (a.result = d) === !1 && (a.preventDefault(), a.stopPropagation()));
          }
        }

        return k.postDispatch && k.postDispatch.call(this, a), a.result;
      }
    },
    handlers: function handlers(a, b) {
      var c,
          d,
          e,
          f,
          g = [],
          h = b.delegateCount,
          i = a.target;
      if (h && i.nodeType && ("click" !== a.type || isNaN(a.button) || a.button < 1)) for (; i != this; i = i.parentNode || this) {
        if (1 === i.nodeType && (i.disabled !== !0 || "click" !== a.type)) {
          for (d = [], c = 0; h > c; c++) {
            f = b[c], e = f.selector + " ", void 0 === d[e] && (d[e] = f.needsContext ? n(e, this).index(i) > -1 : n.find(e, this, null, [i]).length), d[e] && d.push(f);
          }

          d.length && g.push({
            elem: i,
            handlers: d
          });
        }
      }
      return h < b.length && g.push({
        elem: this,
        handlers: b.slice(h)
      }), g;
    },
    fix: function fix(a) {
      if (a[n.expando]) return a;
      var b,
          c,
          e,
          f = a.type,
          g = a,
          h = this.fixHooks[f];
      h || (this.fixHooks[f] = h = ma.test(f) ? this.mouseHooks : la.test(f) ? this.keyHooks : {}), e = h.props ? this.props.concat(h.props) : this.props, a = new n.Event(g), b = e.length;

      while (b--) {
        c = e[b], a[c] = g[c];
      }

      return a.target || (a.target = g.srcElement || d), 3 === a.target.nodeType && (a.target = a.target.parentNode), a.metaKey = !!a.metaKey, h.filter ? h.filter(a, g) : a;
    },
    props: "altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
    fixHooks: {},
    keyHooks: {
      props: "char charCode key keyCode".split(" "),
      filter: function filter(a, b) {
        return null == a.which && (a.which = null != b.charCode ? b.charCode : b.keyCode), a;
      }
    },
    mouseHooks: {
      props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
      filter: function filter(a, b) {
        var c,
            e,
            f,
            g = b.button,
            h = b.fromElement;
        return null == a.pageX && null != b.clientX && (e = a.target.ownerDocument || d, f = e.documentElement, c = e.body, a.pageX = b.clientX + (f && f.scrollLeft || c && c.scrollLeft || 0) - (f && f.clientLeft || c && c.clientLeft || 0), a.pageY = b.clientY + (f && f.scrollTop || c && c.scrollTop || 0) - (f && f.clientTop || c && c.clientTop || 0)), !a.relatedTarget && h && (a.relatedTarget = h === a.target ? b.toElement : h), a.which || void 0 === g || (a.which = 1 & g ? 1 : 2 & g ? 3 : 4 & g ? 2 : 0), a;
      }
    },
    special: {
      load: {
        noBubble: !0
      },
      focus: {
        trigger: function trigger() {
          if (this !== ra() && this.focus) try {
            return this.focus(), !1;
          } catch (a) {}
        },
        delegateType: "focusin"
      },
      blur: {
        trigger: function trigger() {
          return this === ra() && this.blur ? (this.blur(), !1) : void 0;
        },
        delegateType: "focusout"
      },
      click: {
        trigger: function trigger() {
          return n.nodeName(this, "input") && "checkbox" === this.type && this.click ? (this.click(), !1) : void 0;
        },
        _default: function _default(a) {
          return n.nodeName(a.target, "a");
        }
      },
      beforeunload: {
        postDispatch: function postDispatch(a) {
          void 0 !== a.result && a.originalEvent && (a.originalEvent.returnValue = a.result);
        }
      }
    },
    simulate: function simulate(a, b, c) {
      var d = n.extend(new n.Event(), c, {
        type: a,
        isSimulated: !0
      });
      n.event.trigger(d, null, b), d.isDefaultPrevented() && c.preventDefault();
    }
  }, n.removeEvent = d.removeEventListener ? function (a, b, c) {
    a.removeEventListener && a.removeEventListener(b, c);
  } : function (a, b, c) {
    var d = "on" + b;
    a.detachEvent && ("undefined" == typeof a[d] && (a[d] = null), a.detachEvent(d, c));
  }, n.Event = function (a, b) {
    return this instanceof n.Event ? (a && a.type ? (this.originalEvent = a, this.type = a.type, this.isDefaultPrevented = a.defaultPrevented || void 0 === a.defaultPrevented && a.returnValue === !1 ? pa : qa) : this.type = a, b && n.extend(this, b), this.timeStamp = a && a.timeStamp || n.now(), void (this[n.expando] = !0)) : new n.Event(a, b);
  }, n.Event.prototype = {
    constructor: n.Event,
    isDefaultPrevented: qa,
    isPropagationStopped: qa,
    isImmediatePropagationStopped: qa,
    preventDefault: function preventDefault() {
      var a = this.originalEvent;
      this.isDefaultPrevented = pa, a && (a.preventDefault ? a.preventDefault() : a.returnValue = !1);
    },
    stopPropagation: function stopPropagation() {
      var a = this.originalEvent;
      this.isPropagationStopped = pa, a && !this.isSimulated && (a.stopPropagation && a.stopPropagation(), a.cancelBubble = !0);
    },
    stopImmediatePropagation: function stopImmediatePropagation() {
      var a = this.originalEvent;
      this.isImmediatePropagationStopped = pa, a && a.stopImmediatePropagation && a.stopImmediatePropagation(), this.stopPropagation();
    }
  }, n.each({
    mouseenter: "mouseover",
    mouseleave: "mouseout",
    pointerenter: "pointerover",
    pointerleave: "pointerout"
  }, function (a, b) {
    n.event.special[a] = {
      delegateType: b,
      bindType: b,
      handle: function handle(a) {
        var c,
            d = this,
            e = a.relatedTarget,
            f = a.handleObj;
        return (!e || e !== d && !n.contains(d, e)) && (a.type = f.origType, c = f.handler.apply(this, arguments), a.type = b), c;
      }
    };
  }), l.submit || (n.event.special.submit = {
    setup: function setup() {
      return n.nodeName(this, "form") ? !1 : void n.event.add(this, "click._submit keypress._submit", function (a) {
        var b = a.target,
            c = n.nodeName(b, "input") || n.nodeName(b, "button") ? n.prop(b, "form") : void 0;
        c && !n._data(c, "submit") && (n.event.add(c, "submit._submit", function (a) {
          a._submitBubble = !0;
        }), n._data(c, "submit", !0));
      });
    },
    postDispatch: function postDispatch(a) {
      a._submitBubble && (delete a._submitBubble, this.parentNode && !a.isTrigger && n.event.simulate("submit", this.parentNode, a));
    },
    teardown: function teardown() {
      return n.nodeName(this, "form") ? !1 : void n.event.remove(this, "._submit");
    }
  }), l.change || (n.event.special.change = {
    setup: function setup() {
      return ka.test(this.nodeName) ? (("checkbox" === this.type || "radio" === this.type) && (n.event.add(this, "propertychange._change", function (a) {
        "checked" === a.originalEvent.propertyName && (this._justChanged = !0);
      }), n.event.add(this, "click._change", function (a) {
        this._justChanged && !a.isTrigger && (this._justChanged = !1), n.event.simulate("change", this, a);
      })), !1) : void n.event.add(this, "beforeactivate._change", function (a) {
        var b = a.target;
        ka.test(b.nodeName) && !n._data(b, "change") && (n.event.add(b, "change._change", function (a) {
          !this.parentNode || a.isSimulated || a.isTrigger || n.event.simulate("change", this.parentNode, a);
        }), n._data(b, "change", !0));
      });
    },
    handle: function handle(a) {
      var b = a.target;
      return this !== b || a.isSimulated || a.isTrigger || "radio" !== b.type && "checkbox" !== b.type ? a.handleObj.handler.apply(this, arguments) : void 0;
    },
    teardown: function teardown() {
      return n.event.remove(this, "._change"), !ka.test(this.nodeName);
    }
  }), l.focusin || n.each({
    focus: "focusin",
    blur: "focusout"
  }, function (a, b) {
    var c = function c(a) {
      n.event.simulate(b, a.target, n.event.fix(a));
    };

    n.event.special[b] = {
      setup: function setup() {
        var d = this.ownerDocument || this,
            e = n._data(d, b);

        e || d.addEventListener(a, c, !0), n._data(d, b, (e || 0) + 1);
      },
      teardown: function teardown() {
        var d = this.ownerDocument || this,
            e = n._data(d, b) - 1;
        e ? n._data(d, b, e) : (d.removeEventListener(a, c, !0), n._removeData(d, b));
      }
    };
  }), n.fn.extend({
    on: function on(a, b, c, d) {
      return sa(this, a, b, c, d);
    },
    one: function one(a, b, c, d) {
      return sa(this, a, b, c, d, 1);
    },
    off: function off(a, b, c) {
      var d, e;
      if (a && a.preventDefault && a.handleObj) return d = a.handleObj, n(a.delegateTarget).off(d.namespace ? d.origType + "." + d.namespace : d.origType, d.selector, d.handler), this;

      if ("object" == _typeof(a)) {
        for (e in a) {
          this.off(e, b, a[e]);
        }

        return this;
      }

      return (b === !1 || "function" == typeof b) && (c = b, b = void 0), c === !1 && (c = qa), this.each(function () {
        n.event.remove(this, a, c, b);
      });
    },
    trigger: function trigger(a, b) {
      return this.each(function () {
        n.event.trigger(a, b, this);
      });
    },
    triggerHandler: function triggerHandler(a, b) {
      var c = this[0];
      return c ? n.event.trigger(a, b, c, !0) : void 0;
    }
  });
  var ta = / jQuery\d+="(?:null|\d+)"/g,
      ua = new RegExp("<(?:" + ba + ")[\\s/>]", "i"),
      va = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,
      wa = /<script|<style|<link/i,
      xa = /checked\s*(?:[^=]|=\s*.checked.)/i,
      ya = /^true\/(.*)/,
      za = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
      Aa = ca(d),
      Ba = Aa.appendChild(d.createElement("div"));

  function Ca(a, b) {
    return n.nodeName(a, "table") && n.nodeName(11 !== b.nodeType ? b : b.firstChild, "tr") ? a.getElementsByTagName("tbody")[0] || a.appendChild(a.ownerDocument.createElement("tbody")) : a;
  }

  function Da(a) {
    return a.type = (null !== n.find.attr(a, "type")) + "/" + a.type, a;
  }

  function Ea(a) {
    var b = ya.exec(a.type);
    return b ? a.type = b[1] : a.removeAttribute("type"), a;
  }

  function Fa(a, b) {
    if (1 === b.nodeType && n.hasData(a)) {
      var c,
          d,
          e,
          f = n._data(a),
          g = n._data(b, f),
          h = f.events;

      if (h) {
        delete g.handle, g.events = {};

        for (c in h) {
          for (d = 0, e = h[c].length; e > d; d++) {
            n.event.add(b, c, h[c][d]);
          }
        }
      }

      g.data && (g.data = n.extend({}, g.data));
    }
  }

  function Ga(a, b) {
    var c, d, e;

    if (1 === b.nodeType) {
      if (c = b.nodeName.toLowerCase(), !l.noCloneEvent && b[n.expando]) {
        e = n._data(b);

        for (d in e.events) {
          n.removeEvent(b, d, e.handle);
        }

        b.removeAttribute(n.expando);
      }

      "script" === c && b.text !== a.text ? (Da(b).text = a.text, Ea(b)) : "object" === c ? (b.parentNode && (b.outerHTML = a.outerHTML), l.html5Clone && a.innerHTML && !n.trim(b.innerHTML) && (b.innerHTML = a.innerHTML)) : "input" === c && Z.test(a.type) ? (b.defaultChecked = b.checked = a.checked, b.value !== a.value && (b.value = a.value)) : "option" === c ? b.defaultSelected = b.selected = a.defaultSelected : ("input" === c || "textarea" === c) && (b.defaultValue = a.defaultValue);
    }
  }

  function Ha(a, b, c, d) {
    b = f.apply([], b);
    var e,
        g,
        h,
        i,
        j,
        k,
        m = 0,
        o = a.length,
        p = o - 1,
        q = b[0],
        r = n.isFunction(q);
    if (r || o > 1 && "string" == typeof q && !l.checkClone && xa.test(q)) return a.each(function (e) {
      var f = a.eq(e);
      r && (b[0] = q.call(this, e, f.html())), Ha(f, b, c, d);
    });

    if (o && (k = ja(b, a[0].ownerDocument, !1, a, d), e = k.firstChild, 1 === k.childNodes.length && (k = e), e || d)) {
      for (i = n.map(ea(k, "script"), Da), h = i.length; o > m; m++) {
        g = k, m !== p && (g = n.clone(g, !0, !0), h && n.merge(i, ea(g, "script"))), c.call(a[m], g, m);
      }

      if (h) for (j = i[i.length - 1].ownerDocument, n.map(i, Ea), m = 0; h > m; m++) {
        g = i[m], _.test(g.type || "") && !n._data(g, "globalEval") && n.contains(j, g) && (g.src ? n._evalUrl && n._evalUrl(g.src) : n.globalEval((g.text || g.textContent || g.innerHTML || "").replace(za, "")));
      }
      k = e = null;
    }

    return a;
  }

  function Ia(a, b, c) {
    for (var d, e = b ? n.filter(b, a) : a, f = 0; null != (d = e[f]); f++) {
      c || 1 !== d.nodeType || n.cleanData(ea(d)), d.parentNode && (c && n.contains(d.ownerDocument, d) && fa(ea(d, "script")), d.parentNode.removeChild(d));
    }

    return a;
  }

  n.extend({
    htmlPrefilter: function htmlPrefilter(a) {
      return a.replace(va, "<$1></$2>");
    },
    clone: function clone(a, b, c) {
      var d,
          e,
          f,
          g,
          h,
          i = n.contains(a.ownerDocument, a);
      if (l.html5Clone || n.isXMLDoc(a) || !ua.test("<" + a.nodeName + ">") ? f = a.cloneNode(!0) : (Ba.innerHTML = a.outerHTML, Ba.removeChild(f = Ba.firstChild)), !(l.noCloneEvent && l.noCloneChecked || 1 !== a.nodeType && 11 !== a.nodeType || n.isXMLDoc(a))) for (d = ea(f), h = ea(a), g = 0; null != (e = h[g]); ++g) {
        d[g] && Ga(e, d[g]);
      }
      if (b) if (c) for (h = h || ea(a), d = d || ea(f), g = 0; null != (e = h[g]); g++) {
        Fa(e, d[g]);
      } else Fa(a, f);
      return d = ea(f, "script"), d.length > 0 && fa(d, !i && ea(a, "script")), d = h = e = null, f;
    },
    cleanData: function cleanData(a, b) {
      for (var d, e, f, g, h = 0, i = n.expando, j = n.cache, k = l.attributes, m = n.event.special; null != (d = a[h]); h++) {
        if ((b || M(d)) && (f = d[i], g = f && j[f])) {
          if (g.events) for (e in g.events) {
            m[e] ? n.event.remove(d, e) : n.removeEvent(d, e, g.handle);
          }
          j[f] && (delete j[f], k || "undefined" == typeof d.removeAttribute ? d[i] = void 0 : d.removeAttribute(i), c.push(f));
        }
      }
    }
  }), n.fn.extend({
    domManip: Ha,
    detach: function detach(a) {
      return Ia(this, a, !0);
    },
    remove: function remove(a) {
      return Ia(this, a);
    },
    text: function text(a) {
      return Y(this, function (a) {
        return void 0 === a ? n.text(this) : this.empty().append((this[0] && this[0].ownerDocument || d).createTextNode(a));
      }, null, a, arguments.length);
    },
    append: function append() {
      return Ha(this, arguments, function (a) {
        if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
          var b = Ca(this, a);
          b.appendChild(a);
        }
      });
    },
    prepend: function prepend() {
      return Ha(this, arguments, function (a) {
        if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
          var b = Ca(this, a);
          b.insertBefore(a, b.firstChild);
        }
      });
    },
    before: function before() {
      return Ha(this, arguments, function (a) {
        this.parentNode && this.parentNode.insertBefore(a, this);
      });
    },
    after: function after() {
      return Ha(this, arguments, function (a) {
        this.parentNode && this.parentNode.insertBefore(a, this.nextSibling);
      });
    },
    empty: function empty() {
      for (var a, b = 0; null != (a = this[b]); b++) {
        1 === a.nodeType && n.cleanData(ea(a, !1));

        while (a.firstChild) {
          a.removeChild(a.firstChild);
        }

        a.options && n.nodeName(a, "select") && (a.options.length = 0);
      }

      return this;
    },
    clone: function clone(a, b) {
      return a = null == a ? !1 : a, b = null == b ? a : b, this.map(function () {
        return n.clone(this, a, b);
      });
    },
    html: function html(a) {
      return Y(this, function (a) {
        var b = this[0] || {},
            c = 0,
            d = this.length;
        if (void 0 === a) return 1 === b.nodeType ? b.innerHTML.replace(ta, "") : void 0;

        if ("string" == typeof a && !wa.test(a) && (l.htmlSerialize || !ua.test(a)) && (l.leadingWhitespace || !aa.test(a)) && !da[($.exec(a) || ["", ""])[1].toLowerCase()]) {
          a = n.htmlPrefilter(a);

          try {
            for (; d > c; c++) {
              b = this[c] || {}, 1 === b.nodeType && (n.cleanData(ea(b, !1)), b.innerHTML = a);
            }

            b = 0;
          } catch (e) {}
        }

        b && this.empty().append(a);
      }, null, a, arguments.length);
    },
    replaceWith: function replaceWith() {
      var a = [];
      return Ha(this, arguments, function (b) {
        var c = this.parentNode;
        n.inArray(this, a) < 0 && (n.cleanData(ea(this)), c && c.replaceChild(b, this));
      }, a);
    }
  }), n.each({
    appendTo: "append",
    prependTo: "prepend",
    insertBefore: "before",
    insertAfter: "after",
    replaceAll: "replaceWith"
  }, function (a, b) {
    n.fn[a] = function (a) {
      for (var c, d = 0, e = [], f = n(a), h = f.length - 1; h >= d; d++) {
        c = d === h ? this : this.clone(!0), n(f[d])[b](c), g.apply(e, c.get());
      }

      return this.pushStack(e);
    };
  });
  var Ja,
      Ka = {
    HTML: "block",
    BODY: "block"
  };

  function La(a, b) {
    var c = n(b.createElement(a)).appendTo(b.body),
        d = n.css(c[0], "display");
    return c.detach(), d;
  }

  function Ma(a) {
    var b = d,
        c = Ka[a];
    return c || (c = La(a, b), "none" !== c && c || (Ja = (Ja || n("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement), b = (Ja[0].contentWindow || Ja[0].contentDocument).document, b.write(), b.close(), c = La(a, b), Ja.detach()), Ka[a] = c), c;
  }

  var Na = /^margin/,
      Oa = new RegExp("^(" + T + ")(?!px)[a-z%]+$", "i"),
      Pa = function Pa(a, b, c, d) {
    var e,
        f,
        g = {};

    for (f in b) {
      g[f] = a.style[f], a.style[f] = b[f];
    }

    e = c.apply(a, d || []);

    for (f in b) {
      a.style[f] = g[f];
    }

    return e;
  },
      Qa = d.documentElement;

  !function () {
    var b,
        c,
        e,
        f,
        g,
        h,
        i = d.createElement("div"),
        j = d.createElement("div");

    if (j.style) {
      var _k = function _k() {
        var k,
            l,
            m = d.documentElement;
        m.appendChild(i), j.style.cssText = "-webkit-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%", b = e = h = !1, c = g = !0, a.getComputedStyle && (l = a.getComputedStyle(j), b = "1%" !== (l || {}).top, h = "2px" === (l || {}).marginLeft, e = "4px" === (l || {
          width: "4px"
        }).width, j.style.marginRight = "50%", c = "4px" === (l || {
          marginRight: "4px"
        }).marginRight, k = j.appendChild(d.createElement("div")), k.style.cssText = j.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", k.style.marginRight = k.style.width = "0", j.style.width = "1px", g = !parseFloat((a.getComputedStyle(k) || {}).marginRight), j.removeChild(k)), j.style.display = "none", f = 0 === j.getClientRects().length, f && (j.style.display = "", j.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", k = j.getElementsByTagName("td"), k[0].style.cssText = "margin:0;border:0;padding:0;display:none", f = 0 === k[0].offsetHeight, f && (k[0].style.display = "", k[1].style.display = "none", f = 0 === k[0].offsetHeight)), m.removeChild(i);
      };

      j.style.cssText = "float:left;opacity:.5", l.opacity = "0.5" === j.style.opacity, l.cssFloat = !!j.style.cssFloat, j.style.backgroundClip = "content-box", j.cloneNode(!0).style.backgroundClip = "", l.clearCloneStyle = "content-box" === j.style.backgroundClip, i = d.createElement("div"), i.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", j.innerHTML = "", i.appendChild(j), l.boxSizing = "" === j.style.boxSizing || "" === j.style.MozBoxSizing || "" === j.style.WebkitBoxSizing, n.extend(l, {
        reliableHiddenOffsets: function reliableHiddenOffsets() {
          return null == b && _k(), f;
        },
        boxSizingReliable: function boxSizingReliable() {
          return null == b && _k(), e;
        },
        pixelMarginRight: function pixelMarginRight() {
          return null == b && _k(), c;
        },
        pixelPosition: function pixelPosition() {
          return null == b && _k(), b;
        },
        reliableMarginRight: function reliableMarginRight() {
          return null == b && _k(), g;
        },
        reliableMarginLeft: function reliableMarginLeft() {
          return null == b && _k(), h;
        }
      });
    }
  }();
  var Ra,
      Sa,
      Ta = /^(top|right|bottom|left)$/;
  a.getComputedStyle ? (Ra = function Ra(b) {
    var c = b.ownerDocument.defaultView;
    return c.opener || (c = a), c.getComputedStyle(b);
  }, Sa = function Sa(a, b, c) {
    var d,
        e,
        f,
        g,
        h = a.style;
    return c = c || Ra(a), g = c ? c.getPropertyValue(b) || c[b] : void 0, c && ("" !== g || n.contains(a.ownerDocument, a) || (g = n.style(a, b)), !l.pixelMarginRight() && Oa.test(g) && Na.test(b) && (d = h.width, e = h.minWidth, f = h.maxWidth, h.minWidth = h.maxWidth = h.width = g, g = c.width, h.width = d, h.minWidth = e, h.maxWidth = f)), void 0 === g ? g : g + "";
  }) : Qa.currentStyle && (Ra = function Ra(a) {
    return a.currentStyle;
  }, Sa = function Sa(a, b, c) {
    var d,
        e,
        f,
        g,
        h = a.style;
    return c = c || Ra(a), g = c ? c[b] : void 0, null == g && h && h[b] && (g = h[b]), Oa.test(g) && !Ta.test(b) && (d = h.left, e = a.runtimeStyle, f = e && e.left, f && (e.left = a.currentStyle.left), h.left = "fontSize" === b ? "1em" : g, g = h.pixelLeft + "px", h.left = d, f && (e.left = f)), void 0 === g ? g : g + "" || "auto";
  });

  function Ua(a, b) {
    return {
      get: function get() {
        return a() ? void delete this.get : (this.get = b).apply(this, arguments);
      }
    };
  }

  var Va = /alpha\([^)]*\)/i,
      Wa = /opacity\s*=\s*([^)]*)/i,
      Xa = /^(none|table(?!-c[ea]).+)/,
      Ya = new RegExp("^(" + T + ")(.*)$", "i"),
      Za = {
    position: "absolute",
    visibility: "hidden",
    display: "block"
  },
      $a = {
    letterSpacing: "0",
    fontWeight: "400"
  },
      _a = ["Webkit", "O", "Moz", "ms"],
      ab = d.createElement("div").style;

  function bb(a) {
    if (a in ab) return a;
    var b = a.charAt(0).toUpperCase() + a.slice(1),
        c = _a.length;

    while (c--) {
      if (a = _a[c] + b, a in ab) return a;
    }
  }

  function cb(a, b) {
    for (var c, d, e, f = [], g = 0, h = a.length; h > g; g++) {
      d = a[g], d.style && (f[g] = n._data(d, "olddisplay"), c = d.style.display, b ? (f[g] || "none" !== c || (d.style.display = ""), "" === d.style.display && W(d) && (f[g] = n._data(d, "olddisplay", Ma(d.nodeName)))) : (e = W(d), (c && "none" !== c || !e) && n._data(d, "olddisplay", e ? c : n.css(d, "display"))));
    }

    for (g = 0; h > g; g++) {
      d = a[g], d.style && (b && "none" !== d.style.display && "" !== d.style.display || (d.style.display = b ? f[g] || "" : "none"));
    }

    return a;
  }

  function db(a, b, c) {
    var d = Ya.exec(b);
    return d ? Math.max(0, d[1] - (c || 0)) + (d[2] || "px") : b;
  }

  function eb(a, b, c, d, e) {
    for (var f = c === (d ? "border" : "content") ? 4 : "width" === b ? 1 : 0, g = 0; 4 > f; f += 2) {
      "margin" === c && (g += n.css(a, c + V[f], !0, e)), d ? ("content" === c && (g -= n.css(a, "padding" + V[f], !0, e)), "margin" !== c && (g -= n.css(a, "border" + V[f] + "Width", !0, e))) : (g += n.css(a, "padding" + V[f], !0, e), "padding" !== c && (g += n.css(a, "border" + V[f] + "Width", !0, e)));
    }

    return g;
  }

  function fb(b, c, e) {
    var f = !0,
        g = "width" === c ? b.offsetWidth : b.offsetHeight,
        h = Ra(b),
        i = l.boxSizing && "border-box" === n.css(b, "boxSizing", !1, h);

    if (d.msFullscreenElement && a.top !== a && b.getClientRects().length && (g = Math.round(100 * b.getBoundingClientRect()[c])), 0 >= g || null == g) {
      if (g = Sa(b, c, h), (0 > g || null == g) && (g = b.style[c]), Oa.test(g)) return g;
      f = i && (l.boxSizingReliable() || g === b.style[c]), g = parseFloat(g) || 0;
    }

    return g + eb(b, c, e || (i ? "border" : "content"), f, h) + "px";
  }

  n.extend({
    cssHooks: {
      opacity: {
        get: function get(a, b) {
          if (b) {
            var c = Sa(a, "opacity");
            return "" === c ? "1" : c;
          }
        }
      }
    },
    cssNumber: {
      animationIterationCount: !0,
      columnCount: !0,
      fillOpacity: !0,
      flexGrow: !0,
      flexShrink: !0,
      fontWeight: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0
    },
    cssProps: {
      "float": l.cssFloat ? "cssFloat" : "styleFloat"
    },
    style: function style(a, b, c, d) {
      if (a && 3 !== a.nodeType && 8 !== a.nodeType && a.style) {
        var e,
            f,
            g,
            h = n.camelCase(b),
            i = a.style;
        if (b = n.cssProps[h] || (n.cssProps[h] = bb(h) || h), g = n.cssHooks[b] || n.cssHooks[h], void 0 === c) return g && "get" in g && void 0 !== (e = g.get(a, !1, d)) ? e : i[b];
        if (f = _typeof(c), "string" === f && (e = U.exec(c)) && e[1] && (c = X(a, b, e), f = "number"), null != c && c === c && ("number" === f && (c += e && e[3] || (n.cssNumber[h] ? "" : "px")), l.clearCloneStyle || "" !== c || 0 !== b.indexOf("background") || (i[b] = "inherit"), !(g && "set" in g && void 0 === (c = g.set(a, c, d))))) try {
          i[b] = c;
        } catch (j) {}
      }
    },
    css: function css(a, b, c, d) {
      var e,
          f,
          g,
          h = n.camelCase(b);
      return b = n.cssProps[h] || (n.cssProps[h] = bb(h) || h), g = n.cssHooks[b] || n.cssHooks[h], g && "get" in g && (f = g.get(a, !0, c)), void 0 === f && (f = Sa(a, b, d)), "normal" === f && b in $a && (f = $a[b]), "" === c || c ? (e = parseFloat(f), c === !0 || isFinite(e) ? e || 0 : f) : f;
    }
  }), n.each(["height", "width"], function (a, b) {
    n.cssHooks[b] = {
      get: function get(a, c, d) {
        return c ? Xa.test(n.css(a, "display")) && 0 === a.offsetWidth ? Pa(a, Za, function () {
          return fb(a, b, d);
        }) : fb(a, b, d) : void 0;
      },
      set: function set(a, c, d) {
        var e = d && Ra(a);
        return db(a, c, d ? eb(a, b, d, l.boxSizing && "border-box" === n.css(a, "boxSizing", !1, e), e) : 0);
      }
    };
  }), l.opacity || (n.cssHooks.opacity = {
    get: function get(a, b) {
      return Wa.test((b && a.currentStyle ? a.currentStyle.filter : a.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : b ? "1" : "";
    },
    set: function set(a, b) {
      var c = a.style,
          d = a.currentStyle,
          e = n.isNumeric(b) ? "alpha(opacity=" + 100 * b + ")" : "",
          f = d && d.filter || c.filter || "";
      c.zoom = 1, (b >= 1 || "" === b) && "" === n.trim(f.replace(Va, "")) && c.removeAttribute && (c.removeAttribute("filter"), "" === b || d && !d.filter) || (c.filter = Va.test(f) ? f.replace(Va, e) : f + " " + e);
    }
  }), n.cssHooks.marginRight = Ua(l.reliableMarginRight, function (a, b) {
    return b ? Pa(a, {
      display: "inline-block"
    }, Sa, [a, "marginRight"]) : void 0;
  }), n.cssHooks.marginLeft = Ua(l.reliableMarginLeft, function (a, b) {
    return b ? (parseFloat(Sa(a, "marginLeft")) || (n.contains(a.ownerDocument, a) ? a.getBoundingClientRect().left - Pa(a, {
      marginLeft: 0
    }, function () {
      return a.getBoundingClientRect().left;
    }) : 0)) + "px" : void 0;
  }), n.each({
    margin: "",
    padding: "",
    border: "Width"
  }, function (a, b) {
    n.cssHooks[a + b] = {
      expand: function expand(c) {
        for (var d = 0, e = {}, f = "string" == typeof c ? c.split(" ") : [c]; 4 > d; d++) {
          e[a + V[d] + b] = f[d] || f[d - 2] || f[0];
        }

        return e;
      }
    }, Na.test(a) || (n.cssHooks[a + b].set = db);
  }), n.fn.extend({
    css: function css(a, b) {
      return Y(this, function (a, b, c) {
        var d,
            e,
            f = {},
            g = 0;

        if (n.isArray(b)) {
          for (d = Ra(a), e = b.length; e > g; g++) {
            f[b[g]] = n.css(a, b[g], !1, d);
          }

          return f;
        }

        return void 0 !== c ? n.style(a, b, c) : n.css(a, b);
      }, a, b, arguments.length > 1);
    },
    show: function show() {
      return cb(this, !0);
    },
    hide: function hide() {
      return cb(this);
    },
    toggle: function toggle(a) {
      return "boolean" == typeof a ? a ? this.show() : this.hide() : this.each(function () {
        W(this) ? n(this).show() : n(this).hide();
      });
    }
  });

  function gb(a, b, c, d, e) {
    return new gb.prototype.init(a, b, c, d, e);
  }

  n.Tween = gb, gb.prototype = {
    constructor: gb,
    init: function init(a, b, c, d, e, f) {
      this.elem = a, this.prop = c, this.easing = e || n.easing._default, this.options = b, this.start = this.now = this.cur(), this.end = d, this.unit = f || (n.cssNumber[c] ? "" : "px");
    },
    cur: function cur() {
      var a = gb.propHooks[this.prop];
      return a && a.get ? a.get(this) : gb.propHooks._default.get(this);
    },
    run: function run(a) {
      var b,
          c = gb.propHooks[this.prop];
      return this.options.duration ? this.pos = b = n.easing[this.easing](a, this.options.duration * a, 0, 1, this.options.duration) : this.pos = b = a, this.now = (this.end - this.start) * b + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), c && c.set ? c.set(this) : gb.propHooks._default.set(this), this;
    }
  }, gb.prototype.init.prototype = gb.prototype, gb.propHooks = {
    _default: {
      get: function get(a) {
        var b;
        return 1 !== a.elem.nodeType || null != a.elem[a.prop] && null == a.elem.style[a.prop] ? a.elem[a.prop] : (b = n.css(a.elem, a.prop, ""), b && "auto" !== b ? b : 0);
      },
      set: function set(a) {
        n.fx.step[a.prop] ? n.fx.step[a.prop](a) : 1 !== a.elem.nodeType || null == a.elem.style[n.cssProps[a.prop]] && !n.cssHooks[a.prop] ? a.elem[a.prop] = a.now : n.style(a.elem, a.prop, a.now + a.unit);
      }
    }
  }, gb.propHooks.scrollTop = gb.propHooks.scrollLeft = {
    set: function set(a) {
      a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = a.now);
    }
  }, n.easing = {
    linear: function linear(a) {
      return a;
    },
    swing: function swing(a) {
      return .5 - Math.cos(a * Math.PI) / 2;
    },
    _default: "swing"
  }, n.fx = gb.prototype.init, n.fx.step = {};
  var hb,
      ib,
      jb = /^(?:toggle|show|hide)$/,
      kb = /queueHooks$/;

  function lb() {
    return a.setTimeout(function () {
      hb = void 0;
    }), hb = n.now();
  }

  function mb(a, b) {
    var c,
        d = {
      height: a
    },
        e = 0;

    for (b = b ? 1 : 0; 4 > e; e += 2 - b) {
      c = V[e], d["margin" + c] = d["padding" + c] = a;
    }

    return b && (d.opacity = d.width = a), d;
  }

  function nb(a, b, c) {
    for (var d, e = (qb.tweeners[b] || []).concat(qb.tweeners["*"]), f = 0, g = e.length; g > f; f++) {
      if (d = e[f].call(c, b, a)) return d;
    }
  }

  function ob(a, b, c) {
    var d,
        e,
        f,
        g,
        h,
        i,
        j,
        k,
        m = this,
        o = {},
        p = a.style,
        q = a.nodeType && W(a),
        r = n._data(a, "fxshow");

    c.queue || (h = n._queueHooks(a, "fx"), null == h.unqueued && (h.unqueued = 0, i = h.empty.fire, h.empty.fire = function () {
      h.unqueued || i();
    }), h.unqueued++, m.always(function () {
      m.always(function () {
        h.unqueued--, n.queue(a, "fx").length || h.empty.fire();
      });
    })), 1 === a.nodeType && ("height" in b || "width" in b) && (c.overflow = [p.overflow, p.overflowX, p.overflowY], j = n.css(a, "display"), k = "none" === j ? n._data(a, "olddisplay") || Ma(a.nodeName) : j, "inline" === k && "none" === n.css(a, "float") && (l.inlineBlockNeedsLayout && "inline" !== Ma(a.nodeName) ? p.zoom = 1 : p.display = "inline-block")), c.overflow && (p.overflow = "hidden", l.shrinkWrapBlocks() || m.always(function () {
      p.overflow = c.overflow[0], p.overflowX = c.overflow[1], p.overflowY = c.overflow[2];
    }));

    for (d in b) {
      if (e = b[d], jb.exec(e)) {
        if (delete b[d], f = f || "toggle" === e, e === (q ? "hide" : "show")) {
          if ("show" !== e || !r || void 0 === r[d]) continue;
          q = !0;
        }

        o[d] = r && r[d] || n.style(a, d);
      } else j = void 0;
    }

    if (n.isEmptyObject(o)) "inline" === ("none" === j ? Ma(a.nodeName) : j) && (p.display = j);else {
      r ? "hidden" in r && (q = r.hidden) : r = n._data(a, "fxshow", {}), f && (r.hidden = !q), q ? n(a).show() : m.done(function () {
        n(a).hide();
      }), m.done(function () {
        var b;

        n._removeData(a, "fxshow");

        for (b in o) {
          n.style(a, b, o[b]);
        }
      });

      for (d in o) {
        g = nb(q ? r[d] : 0, d, m), d in r || (r[d] = g.start, q && (g.end = g.start, g.start = "width" === d || "height" === d ? 1 : 0));
      }
    }
  }

  function pb(a, b) {
    var c, d, e, f, g;

    for (c in a) {
      if (d = n.camelCase(c), e = b[d], f = a[c], n.isArray(f) && (e = f[1], f = a[c] = f[0]), c !== d && (a[d] = f, delete a[c]), g = n.cssHooks[d], g && "expand" in g) {
        f = g.expand(f), delete a[d];

        for (c in f) {
          c in a || (a[c] = f[c], b[c] = e);
        }
      } else b[d] = e;
    }
  }

  function qb(a, b, c) {
    var d,
        e,
        f = 0,
        g = qb.prefilters.length,
        h = n.Deferred().always(function () {
      delete i.elem;
    }),
        i = function i() {
      if (e) return !1;

      for (var b = hb || lb(), c = Math.max(0, j.startTime + j.duration - b), d = c / j.duration || 0, f = 1 - d, g = 0, i = j.tweens.length; i > g; g++) {
        j.tweens[g].run(f);
      }

      return h.notifyWith(a, [j, f, c]), 1 > f && i ? c : (h.resolveWith(a, [j]), !1);
    },
        j = h.promise({
      elem: a,
      props: n.extend({}, b),
      opts: n.extend(!0, {
        specialEasing: {},
        easing: n.easing._default
      }, c),
      originalProperties: b,
      originalOptions: c,
      startTime: hb || lb(),
      duration: c.duration,
      tweens: [],
      createTween: function createTween(b, c) {
        var d = n.Tween(a, j.opts, b, c, j.opts.specialEasing[b] || j.opts.easing);
        return j.tweens.push(d), d;
      },
      stop: function stop(b) {
        var c = 0,
            d = b ? j.tweens.length : 0;
        if (e) return this;

        for (e = !0; d > c; c++) {
          j.tweens[c].run(1);
        }

        return b ? (h.notifyWith(a, [j, 1, 0]), h.resolveWith(a, [j, b])) : h.rejectWith(a, [j, b]), this;
      }
    }),
        k = j.props;

    for (pb(k, j.opts.specialEasing); g > f; f++) {
      if (d = qb.prefilters[f].call(j, a, k, j.opts)) return n.isFunction(d.stop) && (n._queueHooks(j.elem, j.opts.queue).stop = n.proxy(d.stop, d)), d;
    }

    return n.map(k, nb, j), n.isFunction(j.opts.start) && j.opts.start.call(a, j), n.fx.timer(n.extend(i, {
      elem: a,
      anim: j,
      queue: j.opts.queue
    })), j.progress(j.opts.progress).done(j.opts.done, j.opts.complete).fail(j.opts.fail).always(j.opts.always);
  }

  n.Animation = n.extend(qb, {
    tweeners: {
      "*": [function (a, b) {
        var c = this.createTween(a, b);
        return X(c.elem, a, U.exec(b), c), c;
      }]
    },
    tweener: function tweener(a, b) {
      n.isFunction(a) ? (b = a, a = ["*"]) : a = a.match(G);

      for (var c, d = 0, e = a.length; e > d; d++) {
        c = a[d], qb.tweeners[c] = qb.tweeners[c] || [], qb.tweeners[c].unshift(b);
      }
    },
    prefilters: [ob],
    prefilter: function prefilter(a, b) {
      b ? qb.prefilters.unshift(a) : qb.prefilters.push(a);
    }
  }), n.speed = function (a, b, c) {
    var d = a && "object" == _typeof(a) ? n.extend({}, a) : {
      complete: c || !c && b || n.isFunction(a) && a,
      duration: a,
      easing: c && b || b && !n.isFunction(b) && b
    };
    return d.duration = n.fx.off ? 0 : "number" == typeof d.duration ? d.duration : d.duration in n.fx.speeds ? n.fx.speeds[d.duration] : n.fx.speeds._default, (null == d.queue || d.queue === !0) && (d.queue = "fx"), d.old = d.complete, d.complete = function () {
      n.isFunction(d.old) && d.old.call(this), d.queue && n.dequeue(this, d.queue);
    }, d;
  }, n.fn.extend({
    fadeTo: function fadeTo(a, b, c, d) {
      return this.filter(W).css("opacity", 0).show().end().animate({
        opacity: b
      }, a, c, d);
    },
    animate: function animate(a, b, c, d) {
      var e = n.isEmptyObject(a),
          f = n.speed(b, c, d),
          g = function g() {
        var b = qb(this, n.extend({}, a), f);
        (e || n._data(this, "finish")) && b.stop(!0);
      };

      return g.finish = g, e || f.queue === !1 ? this.each(g) : this.queue(f.queue, g);
    },
    stop: function stop(a, b, c) {
      var d = function d(a) {
        var b = a.stop;
        delete a.stop, b(c);
      };

      return "string" != typeof a && (c = b, b = a, a = void 0), b && a !== !1 && this.queue(a || "fx", []), this.each(function () {
        var b = !0,
            e = null != a && a + "queueHooks",
            f = n.timers,
            g = n._data(this);

        if (e) g[e] && g[e].stop && d(g[e]);else for (e in g) {
          g[e] && g[e].stop && kb.test(e) && d(g[e]);
        }

        for (e = f.length; e--;) {
          f[e].elem !== this || null != a && f[e].queue !== a || (f[e].anim.stop(c), b = !1, f.splice(e, 1));
        }

        (b || !c) && n.dequeue(this, a);
      });
    },
    finish: function finish(a) {
      return a !== !1 && (a = a || "fx"), this.each(function () {
        var b,
            c = n._data(this),
            d = c[a + "queue"],
            e = c[a + "queueHooks"],
            f = n.timers,
            g = d ? d.length : 0;

        for (c.finish = !0, n.queue(this, a, []), e && e.stop && e.stop.call(this, !0), b = f.length; b--;) {
          f[b].elem === this && f[b].queue === a && (f[b].anim.stop(!0), f.splice(b, 1));
        }

        for (b = 0; g > b; b++) {
          d[b] && d[b].finish && d[b].finish.call(this);
        }

        delete c.finish;
      });
    }
  }), n.each(["toggle", "show", "hide"], function (a, b) {
    var c = n.fn[b];

    n.fn[b] = function (a, d, e) {
      return null == a || "boolean" == typeof a ? c.apply(this, arguments) : this.animate(mb(b, !0), a, d, e);
    };
  }), n.each({
    slideDown: mb("show"),
    slideUp: mb("hide"),
    slideToggle: mb("toggle"),
    fadeIn: {
      opacity: "show"
    },
    fadeOut: {
      opacity: "hide"
    },
    fadeToggle: {
      opacity: "toggle"
    }
  }, function (a, b) {
    n.fn[a] = function (a, c, d) {
      return this.animate(b, a, c, d);
    };
  }), n.timers = [], n.fx.tick = function () {
    var a,
        b = n.timers,
        c = 0;

    for (hb = n.now(); c < b.length; c++) {
      a = b[c], a() || b[c] !== a || b.splice(c--, 1);
    }

    b.length || n.fx.stop(), hb = void 0;
  }, n.fx.timer = function (a) {
    n.timers.push(a), a() ? n.fx.start() : n.timers.pop();
  }, n.fx.interval = 13, n.fx.start = function () {
    ib || (ib = a.setInterval(n.fx.tick, n.fx.interval));
  }, n.fx.stop = function () {
    a.clearInterval(ib), ib = null;
  }, n.fx.speeds = {
    slow: 600,
    fast: 200,
    _default: 400
  }, n.fn.delay = function (b, c) {
    return b = n.fx ? n.fx.speeds[b] || b : b, c = c || "fx", this.queue(c, function (c, d) {
      var e = a.setTimeout(c, b);

      d.stop = function () {
        a.clearTimeout(e);
      };
    });
  }, function () {
    var a,
        b = d.createElement("input"),
        c = d.createElement("div"),
        e = d.createElement("select"),
        f = e.appendChild(d.createElement("option"));
    c = d.createElement("div"), c.setAttribute("className", "t"), c.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", a = c.getElementsByTagName("a")[0], b.setAttribute("type", "checkbox"), c.appendChild(b), a = c.getElementsByTagName("a")[0], a.style.cssText = "top:1px", l.getSetAttribute = "t" !== c.className, l.style = /top/.test(a.getAttribute("style")), l.hrefNormalized = "/a" === a.getAttribute("href"), l.checkOn = !!b.value, l.optSelected = f.selected, l.enctype = !!d.createElement("form").enctype, e.disabled = !0, l.optDisabled = !f.disabled, b = d.createElement("input"), b.setAttribute("value", ""), l.input = "" === b.getAttribute("value"), b.value = "t", b.setAttribute("type", "radio"), l.radioValue = "t" === b.value;
  }();
  var rb = /\r/g;
  n.fn.extend({
    val: function val(a) {
      var b,
          c,
          d,
          e = this[0];
      {
        if (arguments.length) return d = n.isFunction(a), this.each(function (c) {
          var e;
          1 === this.nodeType && (e = d ? a.call(this, c, n(this).val()) : a, null == e ? e = "" : "number" == typeof e ? e += "" : n.isArray(e) && (e = n.map(e, function (a) {
            return null == a ? "" : a + "";
          })), b = n.valHooks[this.type] || n.valHooks[this.nodeName.toLowerCase()], b && "set" in b && void 0 !== b.set(this, e, "value") || (this.value = e));
        });
        if (e) return b = n.valHooks[e.type] || n.valHooks[e.nodeName.toLowerCase()], b && "get" in b && void 0 !== (c = b.get(e, "value")) ? c : (c = e.value, "string" == typeof c ? c.replace(rb, "") : null == c ? "" : c);
      }
    }
  }), n.extend({
    valHooks: {
      option: {
        get: function get(a) {
          var b = n.find.attr(a, "value");
          return null != b ? b : n.trim(n.text(a));
        }
      },
      select: {
        get: function get(a) {
          for (var b, c, d = a.options, e = a.selectedIndex, f = "select-one" === a.type || 0 > e, g = f ? null : [], h = f ? e + 1 : d.length, i = 0 > e ? h : f ? e : 0; h > i; i++) {
            if (c = d[i], (c.selected || i === e) && (l.optDisabled ? !c.disabled : null === c.getAttribute("disabled")) && (!c.parentNode.disabled || !n.nodeName(c.parentNode, "optgroup"))) {
              if (b = n(c).val(), f) return b;
              g.push(b);
            }
          }

          return g;
        },
        set: function set(a, b) {
          var c,
              d,
              e = a.options,
              f = n.makeArray(b),
              g = e.length;

          while (g--) {
            if (d = e[g], n.inArray(n.valHooks.option.get(d), f) >= 0) try {
              d.selected = c = !0;
            } catch (h) {
              d.scrollHeight;
            } else d.selected = !1;
          }

          return c || (a.selectedIndex = -1), e;
        }
      }
    }
  }), n.each(["radio", "checkbox"], function () {
    n.valHooks[this] = {
      set: function set(a, b) {
        return n.isArray(b) ? a.checked = n.inArray(n(a).val(), b) > -1 : void 0;
      }
    }, l.checkOn || (n.valHooks[this].get = function (a) {
      return null === a.getAttribute("value") ? "on" : a.value;
    });
  });
  var sb,
      tb,
      ub = n.expr.attrHandle,
      vb = /^(?:checked|selected)$/i,
      wb = l.getSetAttribute,
      xb = l.input;
  n.fn.extend({
    attr: function attr(a, b) {
      return Y(this, n.attr, a, b, arguments.length > 1);
    },
    removeAttr: function removeAttr(a) {
      return this.each(function () {
        n.removeAttr(this, a);
      });
    }
  }), n.extend({
    attr: function attr(a, b, c) {
      var d,
          e,
          f = a.nodeType;
      if (3 !== f && 8 !== f && 2 !== f) return "undefined" == typeof a.getAttribute ? n.prop(a, b, c) : (1 === f && n.isXMLDoc(a) || (b = b.toLowerCase(), e = n.attrHooks[b] || (n.expr.match.bool.test(b) ? tb : sb)), void 0 !== c ? null === c ? void n.removeAttr(a, b) : e && "set" in e && void 0 !== (d = e.set(a, c, b)) ? d : (a.setAttribute(b, c + ""), c) : e && "get" in e && null !== (d = e.get(a, b)) ? d : (d = n.find.attr(a, b), null == d ? void 0 : d));
    },
    attrHooks: {
      type: {
        set: function set(a, b) {
          if (!l.radioValue && "radio" === b && n.nodeName(a, "input")) {
            var c = a.value;
            return a.setAttribute("type", b), c && (a.value = c), b;
          }
        }
      }
    },
    removeAttr: function removeAttr(a, b) {
      var c,
          d,
          e = 0,
          f = b && b.match(G);
      if (f && 1 === a.nodeType) while (c = f[e++]) {
        d = n.propFix[c] || c, n.expr.match.bool.test(c) ? xb && wb || !vb.test(c) ? a[d] = !1 : a[n.camelCase("default-" + c)] = a[d] = !1 : n.attr(a, c, ""), a.removeAttribute(wb ? c : d);
      }
    }
  }), tb = {
    set: function set(a, b, c) {
      return b === !1 ? n.removeAttr(a, c) : xb && wb || !vb.test(c) ? a.setAttribute(!wb && n.propFix[c] || c, c) : a[n.camelCase("default-" + c)] = a[c] = !0, c;
    }
  }, n.each(n.expr.match.bool.source.match(/\w+/g), function (a, b) {
    var c = ub[b] || n.find.attr;
    xb && wb || !vb.test(b) ? ub[b] = function (a, b, d) {
      var e, f;
      return d || (f = ub[b], ub[b] = e, e = null != c(a, b, d) ? b.toLowerCase() : null, ub[b] = f), e;
    } : ub[b] = function (a, b, c) {
      return c ? void 0 : a[n.camelCase("default-" + b)] ? b.toLowerCase() : null;
    };
  }), xb && wb || (n.attrHooks.value = {
    set: function set(a, b, c) {
      return n.nodeName(a, "input") ? void (a.defaultValue = b) : sb && sb.set(a, b, c);
    }
  }), wb || (sb = {
    set: function set(a, b, c) {
      var d = a.getAttributeNode(c);
      return d || a.setAttributeNode(d = a.ownerDocument.createAttribute(c)), d.value = b += "", "value" === c || b === a.getAttribute(c) ? b : void 0;
    }
  }, ub.id = ub.name = ub.coords = function (a, b, c) {
    var d;
    return c ? void 0 : (d = a.getAttributeNode(b)) && "" !== d.value ? d.value : null;
  }, n.valHooks.button = {
    get: function get(a, b) {
      var c = a.getAttributeNode(b);
      return c && c.specified ? c.value : void 0;
    },
    set: sb.set
  }, n.attrHooks.contenteditable = {
    set: function set(a, b, c) {
      sb.set(a, "" === b ? !1 : b, c);
    }
  }, n.each(["width", "height"], function (a, b) {
    n.attrHooks[b] = {
      set: function set(a, c) {
        return "" === c ? (a.setAttribute(b, "auto"), c) : void 0;
      }
    };
  })), l.style || (n.attrHooks.style = {
    get: function get(a) {
      return a.style.cssText || void 0;
    },
    set: function set(a, b) {
      return a.style.cssText = b + "";
    }
  });
  var yb = /^(?:input|select|textarea|button|object)$/i,
      zb = /^(?:a|area)$/i;
  n.fn.extend({
    prop: function prop(a, b) {
      return Y(this, n.prop, a, b, arguments.length > 1);
    },
    removeProp: function removeProp(a) {
      return a = n.propFix[a] || a, this.each(function () {
        try {
          this[a] = void 0, delete this[a];
        } catch (b) {}
      });
    }
  }), n.extend({
    prop: function prop(a, b, c) {
      var d,
          e,
          f = a.nodeType;
      if (3 !== f && 8 !== f && 2 !== f) return 1 === f && n.isXMLDoc(a) || (b = n.propFix[b] || b, e = n.propHooks[b]), void 0 !== c ? e && "set" in e && void 0 !== (d = e.set(a, c, b)) ? d : a[b] = c : e && "get" in e && null !== (d = e.get(a, b)) ? d : a[b];
    },
    propHooks: {
      tabIndex: {
        get: function get(a) {
          var b = n.find.attr(a, "tabindex");
          return b ? parseInt(b, 10) : yb.test(a.nodeName) || zb.test(a.nodeName) && a.href ? 0 : -1;
        }
      }
    },
    propFix: {
      "for": "htmlFor",
      "class": "className"
    }
  }), l.hrefNormalized || n.each(["href", "src"], function (a, b) {
    n.propHooks[b] = {
      get: function get(a) {
        return a.getAttribute(b, 4);
      }
    };
  }), l.optSelected || (n.propHooks.selected = {
    get: function get(a) {
      var b = a.parentNode;
      return b && (b.selectedIndex, b.parentNode && b.parentNode.selectedIndex), null;
    }
  }), n.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
    n.propFix[this.toLowerCase()] = this;
  }), l.enctype || (n.propFix.enctype = "encoding");
  var Ab = /[\t\r\n\f]/g;

  function Bb(a) {
    return n.attr(a, "class") || "";
  }

  n.fn.extend({
    addClass: function addClass(a) {
      var b,
          c,
          d,
          e,
          f,
          g,
          h,
          i = 0;
      if (n.isFunction(a)) return this.each(function (b) {
        n(this).addClass(a.call(this, b, Bb(this)));
      });

      if ("string" == typeof a && a) {
        b = a.match(G) || [];

        while (c = this[i++]) {
          if (e = Bb(c), d = 1 === c.nodeType && (" " + e + " ").replace(Ab, " ")) {
            g = 0;

            while (f = b[g++]) {
              d.indexOf(" " + f + " ") < 0 && (d += f + " ");
            }

            h = n.trim(d), e !== h && n.attr(c, "class", h);
          }
        }
      }

      return this;
    },
    removeClass: function removeClass(a) {
      var b,
          c,
          d,
          e,
          f,
          g,
          h,
          i = 0;
      if (n.isFunction(a)) return this.each(function (b) {
        n(this).removeClass(a.call(this, b, Bb(this)));
      });
      if (!arguments.length) return this.attr("class", "");

      if ("string" == typeof a && a) {
        b = a.match(G) || [];

        while (c = this[i++]) {
          if (e = Bb(c), d = 1 === c.nodeType && (" " + e + " ").replace(Ab, " ")) {
            g = 0;

            while (f = b[g++]) {
              while (d.indexOf(" " + f + " ") > -1) {
                d = d.replace(" " + f + " ", " ");
              }
            }

            h = n.trim(d), e !== h && n.attr(c, "class", h);
          }
        }
      }

      return this;
    },
    toggleClass: function toggleClass(a, b) {
      var c = _typeof(a);

      return "boolean" == typeof b && "string" === c ? b ? this.addClass(a) : this.removeClass(a) : n.isFunction(a) ? this.each(function (c) {
        n(this).toggleClass(a.call(this, c, Bb(this), b), b);
      }) : this.each(function () {
        var b, d, e, f;

        if ("string" === c) {
          d = 0, e = n(this), f = a.match(G) || [];

          while (b = f[d++]) {
            e.hasClass(b) ? e.removeClass(b) : e.addClass(b);
          }
        } else (void 0 === a || "boolean" === c) && (b = Bb(this), b && n._data(this, "__className__", b), n.attr(this, "class", b || a === !1 ? "" : n._data(this, "__className__") || ""));
      });
    },
    hasClass: function hasClass(a) {
      var b,
          c,
          d = 0;
      b = " " + a + " ";

      while (c = this[d++]) {
        if (1 === c.nodeType && (" " + Bb(c) + " ").replace(Ab, " ").indexOf(b) > -1) return !0;
      }

      return !1;
    }
  }), n.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function (a, b) {
    n.fn[b] = function (a, c) {
      return arguments.length > 0 ? this.on(b, null, a, c) : this.trigger(b);
    };
  }), n.fn.extend({
    hover: function hover(a, b) {
      return this.mouseenter(a).mouseleave(b || a);
    }
  });
  var Cb = a.location,
      Db = n.now(),
      Eb = /\?/,
      Fb = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
  n.parseJSON = function (b) {
    if (a.JSON && a.JSON.parse) return a.JSON.parse(b + "");
    var c,
        d = null,
        e = n.trim(b + "");
    return e && !n.trim(e.replace(Fb, function (a, b, e, f) {
      return c && b && (d = 0), 0 === d ? a : (c = e || b, d += !f - !e, "");
    })) ? Function("return " + e)() : n.error("Invalid JSON: " + b);
  }, n.parseXML = function (b) {
    var c, d;
    if (!b || "string" != typeof b) return null;

    try {
      a.DOMParser ? (d = new a.DOMParser(), c = d.parseFromString(b, "text/xml")) : (c = new a.ActiveXObject("Microsoft.XMLDOM"), c.async = "false", c.loadXML(b));
    } catch (e) {
      c = void 0;
    }

    return c && c.documentElement && !c.getElementsByTagName("parsererror").length || n.error("Invalid XML: " + b), c;
  };
  var Gb = /#.*$/,
      Hb = /([?&])_=[^&]*/,
      Ib = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
      Jb = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
      Kb = /^(?:GET|HEAD)$/,
      Lb = /^\/\//,
      Mb = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
      Nb = {},
      Ob = {},
      Pb = "*/".concat("*"),
      Qb = Cb.href,
      Rb = Mb.exec(Qb.toLowerCase()) || [];

  function Sb(a) {
    return function (b, c) {
      "string" != typeof b && (c = b, b = "*");
      var d,
          e = 0,
          f = b.toLowerCase().match(G) || [];
      if (n.isFunction(c)) while (d = f[e++]) {
        "+" === d.charAt(0) ? (d = d.slice(1) || "*", (a[d] = a[d] || []).unshift(c)) : (a[d] = a[d] || []).push(c);
      }
    };
  }

  function Tb(a, b, c, d) {
    var e = {},
        f = a === Ob;

    function g(h) {
      var i;
      return e[h] = !0, n.each(a[h] || [], function (a, h) {
        var j = h(b, c, d);
        return "string" != typeof j || f || e[j] ? f ? !(i = j) : void 0 : (b.dataTypes.unshift(j), g(j), !1);
      }), i;
    }

    return g(b.dataTypes[0]) || !e["*"] && g("*");
  }

  function Ub(a, b) {
    var c,
        d,
        e = n.ajaxSettings.flatOptions || {};

    for (d in b) {
      void 0 !== b[d] && ((e[d] ? a : c || (c = {}))[d] = b[d]);
    }

    return c && n.extend(!0, a, c), a;
  }

  function Vb(a, b, c) {
    var d,
        e,
        f,
        g,
        h = a.contents,
        i = a.dataTypes;

    while ("*" === i[0]) {
      i.shift(), void 0 === e && (e = a.mimeType || b.getResponseHeader("Content-Type"));
    }

    if (e) for (g in h) {
      if (h[g] && h[g].test(e)) {
        i.unshift(g);
        break;
      }
    }
    if (i[0] in c) f = i[0];else {
      for (g in c) {
        if (!i[0] || a.converters[g + " " + i[0]]) {
          f = g;
          break;
        }

        d || (d = g);
      }

      f = f || d;
    }
    return f ? (f !== i[0] && i.unshift(f), c[f]) : void 0;
  }

  function Wb(a, b, c, d) {
    var e,
        f,
        g,
        h,
        i,
        j = {},
        k = a.dataTypes.slice();
    if (k[1]) for (g in a.converters) {
      j[g.toLowerCase()] = a.converters[g];
    }
    f = k.shift();

    while (f) {
      if (a.responseFields[f] && (c[a.responseFields[f]] = b), !i && d && a.dataFilter && (b = a.dataFilter(b, a.dataType)), i = f, f = k.shift()) if ("*" === f) f = i;else if ("*" !== i && i !== f) {
        if (g = j[i + " " + f] || j["* " + f], !g) for (e in j) {
          if (h = e.split(" "), h[1] === f && (g = j[i + " " + h[0]] || j["* " + h[0]])) {
            g === !0 ? g = j[e] : j[e] !== !0 && (f = h[0], k.unshift(h[1]));
            break;
          }
        }
        if (g !== !0) if (g && a["throws"]) b = g(b);else try {
          b = g(b);
        } catch (l) {
          return {
            state: "parsererror",
            error: g ? l : "No conversion from " + i + " to " + f
          };
        }
      }
    }

    return {
      state: "success",
      data: b
    };
  }

  n.extend({
    active: 0,
    lastModified: {},
    etag: {},
    ajaxSettings: {
      url: Qb,
      type: "GET",
      isLocal: Jb.test(Rb[1]),
      global: !0,
      processData: !0,
      async: !0,
      contentType: "application/x-www-form-urlencoded; charset=UTF-8",
      accepts: {
        "*": Pb,
        text: "text/plain",
        html: "text/html",
        xml: "application/xml, text/xml",
        json: "application/json, text/javascript"
      },
      contents: {
        xml: /\bxml\b/,
        html: /\bhtml/,
        json: /\bjson\b/
      },
      responseFields: {
        xml: "responseXML",
        text: "responseText",
        json: "responseJSON"
      },
      converters: {
        "* text": String,
        "text html": !0,
        "text json": n.parseJSON,
        "text xml": n.parseXML
      },
      flatOptions: {
        url: !0,
        context: !0
      }
    },
    ajaxSetup: function ajaxSetup(a, b) {
      return b ? Ub(Ub(a, n.ajaxSettings), b) : Ub(n.ajaxSettings, a);
    },
    ajaxPrefilter: Sb(Nb),
    ajaxTransport: Sb(Ob),
    ajax: function ajax(b, c) {
      "object" == _typeof(b) && (c = b, b = void 0), c = c || {};
      var d,
          e,
          f,
          g,
          h,
          i,
          j,
          k,
          l = n.ajaxSetup({}, c),
          m = l.context || l,
          o = l.context && (m.nodeType || m.jquery) ? n(m) : n.event,
          p = n.Deferred(),
          q = n.Callbacks("once memory"),
          r = l.statusCode || {},
          s = {},
          t = {},
          u = 0,
          v = "canceled",
          w = {
        readyState: 0,
        getResponseHeader: function getResponseHeader(a) {
          var b;

          if (2 === u) {
            if (!k) {
              k = {};

              while (b = Ib.exec(g)) {
                k[b[1].toLowerCase()] = b[2];
              }
            }

            b = k[a.toLowerCase()];
          }

          return null == b ? null : b;
        },
        getAllResponseHeaders: function getAllResponseHeaders() {
          return 2 === u ? g : null;
        },
        setRequestHeader: function setRequestHeader(a, b) {
          var c = a.toLowerCase();
          return u || (a = t[c] = t[c] || a, s[a] = b), this;
        },
        overrideMimeType: function overrideMimeType(a) {
          return u || (l.mimeType = a), this;
        },
        statusCode: function statusCode(a) {
          var b;
          if (a) if (2 > u) for (b in a) {
            r[b] = [r[b], a[b]];
          } else w.always(a[w.status]);
          return this;
        },
        abort: function abort(a) {
          var b = a || v;
          return j && j.abort(b), y(0, b), this;
        }
      };
      if (p.promise(w).complete = q.add, w.success = w.done, w.error = w.fail, l.url = ((b || l.url || Qb) + "").replace(Gb, "").replace(Lb, Rb[1] + "//"), l.type = c.method || c.type || l.method || l.type, l.dataTypes = n.trim(l.dataType || "*").toLowerCase().match(G) || [""], null == l.crossDomain && (d = Mb.exec(l.url.toLowerCase()), l.crossDomain = !(!d || d[1] === Rb[1] && d[2] === Rb[2] && (d[3] || ("http:" === d[1] ? "80" : "443")) === (Rb[3] || ("http:" === Rb[1] ? "80" : "443")))), l.data && l.processData && "string" != typeof l.data && (l.data = n.param(l.data, l.traditional)), Tb(Nb, l, c, w), 2 === u) return w;
      i = n.event && l.global, i && 0 === n.active++ && n.event.trigger("ajaxStart"), l.type = l.type.toUpperCase(), l.hasContent = !Kb.test(l.type), f = l.url, l.hasContent || (l.data && (f = l.url += (Eb.test(f) ? "&" : "?") + l.data, delete l.data), l.cache === !1 && (l.url = Hb.test(f) ? f.replace(Hb, "$1_=" + Db++) : f + (Eb.test(f) ? "&" : "?") + "_=" + Db++)), l.ifModified && (n.lastModified[f] && w.setRequestHeader("If-Modified-Since", n.lastModified[f]), n.etag[f] && w.setRequestHeader("If-None-Match", n.etag[f])), (l.data && l.hasContent && l.contentType !== !1 || c.contentType) && w.setRequestHeader("Content-Type", l.contentType), w.setRequestHeader("Accept", l.dataTypes[0] && l.accepts[l.dataTypes[0]] ? l.accepts[l.dataTypes[0]] + ("*" !== l.dataTypes[0] ? ", " + Pb + "; q=0.01" : "") : l.accepts["*"]);

      for (e in l.headers) {
        w.setRequestHeader(e, l.headers[e]);
      }

      if (l.beforeSend && (l.beforeSend.call(m, w, l) === !1 || 2 === u)) return w.abort();
      v = "abort";

      for (e in {
        success: 1,
        error: 1,
        complete: 1
      }) {
        w[e](l[e]);
      }

      if (j = Tb(Ob, l, c, w)) {
        if (w.readyState = 1, i && o.trigger("ajaxSend", [w, l]), 2 === u) return w;
        l.async && l.timeout > 0 && (h = a.setTimeout(function () {
          w.abort("timeout");
        }, l.timeout));

        try {
          u = 1, j.send(s, y);
        } catch (x) {
          if (!(2 > u)) throw x;
          y(-1, x);
        }
      } else y(-1, "No Transport");

      function y(b, c, d, e) {
        var k,
            s,
            t,
            v,
            x,
            y = c;
        2 !== u && (u = 2, h && a.clearTimeout(h), j = void 0, g = e || "", w.readyState = b > 0 ? 4 : 0, k = b >= 200 && 300 > b || 304 === b, d && (v = Vb(l, w, d)), v = Wb(l, v, w, k), k ? (l.ifModified && (x = w.getResponseHeader("Last-Modified"), x && (n.lastModified[f] = x), x = w.getResponseHeader("etag"), x && (n.etag[f] = x)), 204 === b || "HEAD" === l.type ? y = "nocontent" : 304 === b ? y = "notmodified" : (y = v.state, s = v.data, t = v.error, k = !t)) : (t = y, (b || !y) && (y = "error", 0 > b && (b = 0))), w.status = b, w.statusText = (c || y) + "", k ? p.resolveWith(m, [s, y, w]) : p.rejectWith(m, [w, y, t]), w.statusCode(r), r = void 0, i && o.trigger(k ? "ajaxSuccess" : "ajaxError", [w, l, k ? s : t]), q.fireWith(m, [w, y]), i && (o.trigger("ajaxComplete", [w, l]), --n.active || n.event.trigger("ajaxStop")));
      }

      return w;
    },
    getJSON: function getJSON(a, b, c) {
      return n.get(a, b, c, "json");
    },
    getScript: function getScript(a, b) {
      return n.get(a, void 0, b, "script");
    }
  }), n.each(["get", "post"], function (a, b) {
    n[b] = function (a, c, d, e) {
      return n.isFunction(c) && (e = e || d, d = c, c = void 0), n.ajax(n.extend({
        url: a,
        type: b,
        dataType: e,
        data: c,
        success: d
      }, n.isPlainObject(a) && a));
    };
  }), n._evalUrl = function (a) {
    return n.ajax({
      url: a,
      type: "GET",
      dataType: "script",
      cache: !0,
      async: !1,
      global: !1,
      "throws": !0
    });
  }, n.fn.extend({
    wrapAll: function wrapAll(a) {
      if (n.isFunction(a)) return this.each(function (b) {
        n(this).wrapAll(a.call(this, b));
      });

      if (this[0]) {
        var b = n(a, this[0].ownerDocument).eq(0).clone(!0);
        this[0].parentNode && b.insertBefore(this[0]), b.map(function () {
          var a = this;

          while (a.firstChild && 1 === a.firstChild.nodeType) {
            a = a.firstChild;
          }

          return a;
        }).append(this);
      }

      return this;
    },
    wrapInner: function wrapInner(a) {
      return n.isFunction(a) ? this.each(function (b) {
        n(this).wrapInner(a.call(this, b));
      }) : this.each(function () {
        var b = n(this),
            c = b.contents();
        c.length ? c.wrapAll(a) : b.append(a);
      });
    },
    wrap: function wrap(a) {
      var b = n.isFunction(a);
      return this.each(function (c) {
        n(this).wrapAll(b ? a.call(this, c) : a);
      });
    },
    unwrap: function unwrap() {
      return this.parent().each(function () {
        n.nodeName(this, "body") || n(this).replaceWith(this.childNodes);
      }).end();
    }
  });

  function Xb(a) {
    return a.style && a.style.display || n.css(a, "display");
  }

  function Yb(a) {
    while (a && 1 === a.nodeType) {
      if ("none" === Xb(a) || "hidden" === a.type) return !0;
      a = a.parentNode;
    }

    return !1;
  }

  n.expr.filters.hidden = function (a) {
    return l.reliableHiddenOffsets() ? a.offsetWidth <= 0 && a.offsetHeight <= 0 && !a.getClientRects().length : Yb(a);
  }, n.expr.filters.visible = function (a) {
    return !n.expr.filters.hidden(a);
  };
  var Zb = /%20/g,
      $b = /\[\]$/,
      _b = /\r?\n/g,
      ac = /^(?:submit|button|image|reset|file)$/i,
      bc = /^(?:input|select|textarea|keygen)/i;

  function cc(a, b, c, d) {
    var e;
    if (n.isArray(b)) n.each(b, function (b, e) {
      c || $b.test(a) ? d(a, e) : cc(a + "[" + ("object" == _typeof(e) && null != e ? b : "") + "]", e, c, d);
    });else if (c || "object" !== n.type(b)) d(a, b);else for (e in b) {
      cc(a + "[" + e + "]", b[e], c, d);
    }
  }

  n.param = function (a, b) {
    var c,
        d = [],
        e = function e(a, b) {
      b = n.isFunction(b) ? b() : null == b ? "" : b, d[d.length] = encodeURIComponent(a) + "=" + encodeURIComponent(b);
    };

    if (void 0 === b && (b = n.ajaxSettings && n.ajaxSettings.traditional), n.isArray(a) || a.jquery && !n.isPlainObject(a)) n.each(a, function () {
      e(this.name, this.value);
    });else for (c in a) {
      cc(c, a[c], b, e);
    }
    return d.join("&").replace(Zb, "+");
  }, n.fn.extend({
    serialize: function serialize() {
      return n.param(this.serializeArray());
    },
    serializeArray: function serializeArray() {
      return this.map(function () {
        var a = n.prop(this, "elements");
        return a ? n.makeArray(a) : this;
      }).filter(function () {
        var a = this.type;
        return this.name && !n(this).is(":disabled") && bc.test(this.nodeName) && !ac.test(a) && (this.checked || !Z.test(a));
      }).map(function (a, b) {
        var c = n(this).val();
        return null == c ? null : n.isArray(c) ? n.map(c, function (a) {
          return {
            name: b.name,
            value: a.replace(_b, "\r\n")
          };
        }) : {
          name: b.name,
          value: c.replace(_b, "\r\n")
        };
      }).get();
    }
  }), n.ajaxSettings.xhr = void 0 !== a.ActiveXObject ? function () {
    return this.isLocal ? hc() : d.documentMode > 8 ? gc() : /^(get|post|head|put|delete|options)$/i.test(this.type) && gc() || hc();
  } : gc;
  var dc = 0,
      ec = {},
      fc = n.ajaxSettings.xhr();
  a.attachEvent && a.attachEvent("onunload", function () {
    for (var a in ec) {
      ec[a](void 0, !0);
    }
  }), l.cors = !!fc && "withCredentials" in fc, fc = l.ajax = !!fc, fc && n.ajaxTransport(function (b) {
    if (!b.crossDomain || l.cors) {
      var _c;

      return {
        send: function send(d, e) {
          var f,
              g = b.xhr(),
              h = ++dc;
          if (g.open(b.type, b.url, b.async, b.username, b.password), b.xhrFields) for (f in b.xhrFields) {
            g[f] = b.xhrFields[f];
          }
          b.mimeType && g.overrideMimeType && g.overrideMimeType(b.mimeType), b.crossDomain || d["X-Requested-With"] || (d["X-Requested-With"] = "XMLHttpRequest");

          for (f in d) {
            void 0 !== d[f] && g.setRequestHeader(f, d[f] + "");
          }

          g.send(b.hasContent && b.data || null), _c = function c(a, d) {
            var f, i, j;
            if (_c && (d || 4 === g.readyState)) if (delete ec[h], _c = void 0, g.onreadystatechange = n.noop, d) 4 !== g.readyState && g.abort();else {
              j = {}, f = g.status, "string" == typeof g.responseText && (j.text = g.responseText);

              try {
                i = g.statusText;
              } catch (k) {
                i = "";
              }

              f || !b.isLocal || b.crossDomain ? 1223 === f && (f = 204) : f = j.text ? 200 : 404;
            }
            j && e(f, i, j, g.getAllResponseHeaders());
          }, b.async ? 4 === g.readyState ? a.setTimeout(_c) : g.onreadystatechange = ec[h] = _c : _c();
        },
        abort: function abort() {
          _c && _c(void 0, !0);
        }
      };
    }
  });

  function gc() {
    try {
      return new a.XMLHttpRequest();
    } catch (b) {}
  }

  function hc() {
    try {
      return new a.ActiveXObject("Microsoft.XMLHTTP");
    } catch (b) {}
  }

  n.ajaxPrefilter(function (a) {
    a.crossDomain && (a.contents.script = !1);
  }), n.ajaxSetup({
    accepts: {
      script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
    },
    contents: {
      script: /\b(?:java|ecma)script\b/
    },
    converters: {
      "text script": function textScript(a) {
        return n.globalEval(a), a;
      }
    }
  }), n.ajaxPrefilter("script", function (a) {
    void 0 === a.cache && (a.cache = !1), a.crossDomain && (a.type = "GET", a.global = !1);
  }), n.ajaxTransport("script", function (a) {
    if (a.crossDomain) {
      var b,
          c = d.head || n("head")[0] || d.documentElement;
      return {
        send: function send(e, f) {
          b = d.createElement("script"), b.async = !0, a.scriptCharset && (b.charset = a.scriptCharset), b.src = a.url, b.onload = b.onreadystatechange = function (a, c) {
            (c || !b.readyState || /loaded|complete/.test(b.readyState)) && (b.onload = b.onreadystatechange = null, b.parentNode && b.parentNode.removeChild(b), b = null, c || f(200, "success"));
          }, c.insertBefore(b, c.firstChild);
        },
        abort: function abort() {
          b && b.onload(void 0, !0);
        }
      };
    }
  });
  var ic = [],
      jc = /(=)\?(?=&|$)|\?\?/;
  n.ajaxSetup({
    jsonp: "callback",
    jsonpCallback: function jsonpCallback() {
      var a = ic.pop() || n.expando + "_" + Db++;
      return this[a] = !0, a;
    }
  }), n.ajaxPrefilter("json jsonp", function (b, c, d) {
    var e,
        f,
        g,
        h = b.jsonp !== !1 && (jc.test(b.url) ? "url" : "string" == typeof b.data && 0 === (b.contentType || "").indexOf("application/x-www-form-urlencoded") && jc.test(b.data) && "data");
    return h || "jsonp" === b.dataTypes[0] ? (e = b.jsonpCallback = n.isFunction(b.jsonpCallback) ? b.jsonpCallback() : b.jsonpCallback, h ? b[h] = b[h].replace(jc, "$1" + e) : b.jsonp !== !1 && (b.url += (Eb.test(b.url) ? "&" : "?") + b.jsonp + "=" + e), b.converters["script json"] = function () {
      return g || n.error(e + " was not called"), g[0];
    }, b.dataTypes[0] = "json", f = a[e], a[e] = function () {
      g = arguments;
    }, d.always(function () {
      void 0 === f ? n(a).removeProp(e) : a[e] = f, b[e] && (b.jsonpCallback = c.jsonpCallback, ic.push(e)), g && n.isFunction(f) && f(g[0]), g = f = void 0;
    }), "script") : void 0;
  }), l.createHTMLDocument = function () {
    if (!d.implementation.createHTMLDocument) return !1;
    var a = d.implementation.createHTMLDocument("");
    return a.body.innerHTML = "<form></form><form></form>", 2 === a.body.childNodes.length;
  }(), n.parseHTML = function (a, b, c) {
    if (!a || "string" != typeof a) return null;
    "boolean" == typeof b && (c = b, b = !1), b = b || (l.createHTMLDocument ? d.implementation.createHTMLDocument("") : d);
    var e = x.exec(a),
        f = !c && [];
    return e ? [b.createElement(e[1])] : (e = ja([a], b, f), f && f.length && n(f).remove(), n.merge([], e.childNodes));
  };
  var kc = n.fn.load;
  n.fn.load = function (a, b, c) {
    if ("string" != typeof a && kc) return kc.apply(this, arguments);
    var d,
        e,
        f,
        g = this,
        h = a.indexOf(" ");
    return h > -1 && (d = n.trim(a.slice(h, a.length)), a = a.slice(0, h)), n.isFunction(b) ? (c = b, b = void 0) : b && "object" == _typeof(b) && (e = "POST"), g.length > 0 && n.ajax({
      url: a,
      type: e || "GET",
      dataType: "html",
      data: b
    }).done(function (a) {
      f = arguments, g.html(d ? n("<div>").append(n.parseHTML(a)).find(d) : a);
    }).always(c && function (a, b) {
      g.each(function () {
        c.apply(g, f || [a.responseText, b, a]);
      });
    }), this;
  }, n.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (a, b) {
    n.fn[b] = function (a) {
      return this.on(b, a);
    };
  }), n.expr.filters.animated = function (a) {
    return n.grep(n.timers, function (b) {
      return a === b.elem;
    }).length;
  };

  function lc(a) {
    return n.isWindow(a) ? a : 9 === a.nodeType ? a.defaultView || a.parentWindow : !1;
  }

  n.offset = {
    setOffset: function setOffset(a, b, c) {
      var d,
          e,
          f,
          g,
          h,
          i,
          j,
          k = n.css(a, "position"),
          l = n(a),
          m = {};
      "static" === k && (a.style.position = "relative"), h = l.offset(), f = n.css(a, "top"), i = n.css(a, "left"), j = ("absolute" === k || "fixed" === k) && n.inArray("auto", [f, i]) > -1, j ? (d = l.position(), g = d.top, e = d.left) : (g = parseFloat(f) || 0, e = parseFloat(i) || 0), n.isFunction(b) && (b = b.call(a, c, n.extend({}, h))), null != b.top && (m.top = b.top - h.top + g), null != b.left && (m.left = b.left - h.left + e), "using" in b ? b.using.call(a, m) : l.css(m);
    }
  }, n.fn.extend({
    offset: function offset(a) {
      if (arguments.length) return void 0 === a ? this : this.each(function (b) {
        n.offset.setOffset(this, a, b);
      });
      var b,
          c,
          d = {
        top: 0,
        left: 0
      },
          e = this[0],
          f = e && e.ownerDocument;
      if (f) return b = f.documentElement, n.contains(b, e) ? ("undefined" != typeof e.getBoundingClientRect && (d = e.getBoundingClientRect()), c = lc(f), {
        top: d.top + (c.pageYOffset || b.scrollTop) - (b.clientTop || 0),
        left: d.left + (c.pageXOffset || b.scrollLeft) - (b.clientLeft || 0)
      }) : d;
    },
    position: function position() {
      if (this[0]) {
        var a,
            b,
            c = {
          top: 0,
          left: 0
        },
            d = this[0];
        return "fixed" === n.css(d, "position") ? b = d.getBoundingClientRect() : (a = this.offsetParent(), b = this.offset(), n.nodeName(a[0], "html") || (c = a.offset()), c.top += n.css(a[0], "borderTopWidth", !0) - a.scrollTop(), c.left += n.css(a[0], "borderLeftWidth", !0) - a.scrollLeft()), {
          top: b.top - c.top - n.css(d, "marginTop", !0),
          left: b.left - c.left - n.css(d, "marginLeft", !0)
        };
      }
    },
    offsetParent: function offsetParent() {
      return this.map(function () {
        var a = this.offsetParent;

        while (a && !n.nodeName(a, "html") && "static" === n.css(a, "position")) {
          a = a.offsetParent;
        }

        return a || Qa;
      });
    }
  }), n.each({
    scrollLeft: "pageXOffset",
    scrollTop: "pageYOffset"
  }, function (a, b) {
    var c = /Y/.test(b);

    n.fn[a] = function (d) {
      return Y(this, function (a, d, e) {
        var f = lc(a);
        return void 0 === e ? f ? b in f ? f[b] : f.document.documentElement[d] : a[d] : void (f ? f.scrollTo(c ? n(f).scrollLeft() : e, c ? e : n(f).scrollTop()) : a[d] = e);
      }, a, d, arguments.length, null);
    };
  }), n.each(["top", "left"], function (a, b) {
    n.cssHooks[b] = Ua(l.pixelPosition, function (a, c) {
      return c ? (c = Sa(a, b), Oa.test(c) ? n(a).position()[b] + "px" : c) : void 0;
    });
  }), n.each({
    Height: "height",
    Width: "width"
  }, function (a, b) {
    n.each({
      padding: "inner" + a,
      content: b,
      "": "outer" + a
    }, function (c, d) {
      n.fn[d] = function (d, e) {
        var f = arguments.length && (c || "boolean" != typeof d),
            g = c || (d === !0 || e === !0 ? "margin" : "border");
        return Y(this, function (b, c, d) {
          var e;
          return n.isWindow(b) ? b.document.documentElement["client" + a] : 9 === b.nodeType ? (e = b.documentElement, Math.max(b.body["scroll" + a], e["scroll" + a], b.body["offset" + a], e["offset" + a], e["client" + a])) : void 0 === d ? n.css(b, c, g) : n.style(b, c, d, g);
        }, b, f ? d : void 0, f, null);
      };
    });
  }), n.fn.extend({
    bind: function bind(a, b, c) {
      return this.on(a, null, b, c);
    },
    unbind: function unbind(a, b) {
      return this.off(a, null, b);
    },
    delegate: function delegate(a, b, c, d) {
      return this.on(b, a, c, d);
    },
    undelegate: function undelegate(a, b, c) {
      return 1 === arguments.length ? this.off(a, "**") : this.off(b, a || "**", c);
    }
  }), n.fn.size = function () {
    return this.length;
  }, n.fn.andSelf = n.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function () {
    return n;
  });
  var mc = a.jQuery,
      nc = a.$;
  return n.noConflict = function (b) {
    return a.$ === n && (a.$ = nc), b && a.jQuery === n && (a.jQuery = mc), n;
  }, b || (a.jQuery = a.$ = n), n;
});
/*
 Copyright (C) Federico Zivolo 2017
 Distributed under the MIT License (license terms are at http://opensource.org/licenses/MIT).
 */

(function (e, t) {
  'object' == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) && 'undefined' != typeof module ? module.exports = t() : 'function' == typeof define && define.amd ? define(t) : e.Popper = t();
})(this, function () {
  'use strict';

  function e(e) {
    return e && '[object Function]' === {}.toString.call(e);
  }

  function t(e, t) {
    if (1 !== e.nodeType) return [];
    var o = window.getComputedStyle(e, null);
    return t ? o[t] : o;
  }

  function o(e) {
    return 'HTML' === e.nodeName ? e : e.parentNode || e.host;
  }

  function n(e) {
    if (!e || -1 !== ['HTML', 'BODY', '#document'].indexOf(e.nodeName)) return window.document.body;
    var i = t(e),
        r = i.overflow,
        p = i.overflowX,
        s = i.overflowY;
    return /(auto|scroll)/.test(r + s + p) ? e : n(o(e));
  }

  function r(e) {
    var o = e && e.offsetParent,
        i = o && o.nodeName;
    return i && 'BODY' !== i && 'HTML' !== i ? -1 !== ['TD', 'TABLE'].indexOf(o.nodeName) && 'static' === t(o, 'position') ? r(o) : o : window.document.documentElement;
  }

  function p(e) {
    var t = e.nodeName;
    return 'BODY' !== t && ('HTML' === t || r(e.firstElementChild) === e);
  }

  function s(e) {
    return null === e.parentNode ? e : s(e.parentNode);
  }

  function d(e, t) {
    if (!e || !e.nodeType || !t || !t.nodeType) return window.document.documentElement;
    var o = e.compareDocumentPosition(t) & Node.DOCUMENT_POSITION_FOLLOWING,
        i = o ? e : t,
        n = o ? t : e,
        a = document.createRange();
    a.setStart(i, 0), a.setEnd(n, 0);
    var f = a.commonAncestorContainer;
    if (e !== f && t !== f || i.contains(n)) return p(f) ? f : r(f);
    var l = s(e);
    return l.host ? d(l.host, t) : d(e, s(t).host);
  }

  function a(e) {
    var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : 'top',
        o = 'top' === t ? 'scrollTop' : 'scrollLeft',
        i = e.nodeName;

    if ('BODY' === i || 'HTML' === i) {
      var n = window.document.documentElement,
          r = window.document.scrollingElement || n;
      return r[o];
    }

    return e[o];
  }

  function f(e, t) {
    var o = 2 < arguments.length && void 0 !== arguments[2] && arguments[2],
        i = a(t, 'top'),
        n = a(t, 'left'),
        r = o ? -1 : 1;
    return e.top += i * r, e.bottom += i * r, e.left += n * r, e.right += n * r, e;
  }

  function l(e, t) {
    var o = 'x' === t ? 'Left' : 'Top',
        i = 'Left' == o ? 'Right' : 'Bottom';
    return +e['border' + o + 'Width'].split('px')[0] + +e['border' + i + 'Width'].split('px')[0];
  }

  function m(e, t, o, i) {
    return _(t['offset' + e], o['client' + e], o['offset' + e], ie() ? o['offset' + e] + i['margin' + ('Height' === e ? 'Top' : 'Left')] + i['margin' + ('Height' === e ? 'Bottom' : 'Right')] : 0);
  }

  function h() {
    var e = window.document.body,
        t = window.document.documentElement,
        o = ie() && window.getComputedStyle(t);
    return {
      height: m('Height', e, t, o),
      width: m('Width', e, t, o)
    };
  }

  function c(e) {
    return se({}, e, {
      right: e.left + e.width,
      bottom: e.top + e.height
    });
  }

  function g(e) {
    var o = {};
    if (ie()) try {
      o = e.getBoundingClientRect();
      var i = a(e, 'top'),
          n = a(e, 'left');
      o.top += i, o.left += n, o.bottom += i, o.right += n;
    } catch (e) {} else o = e.getBoundingClientRect();
    var r = {
      left: o.left,
      top: o.top,
      width: o.right - o.left,
      height: o.bottom - o.top
    },
        p = 'HTML' === e.nodeName ? h() : {},
        s = p.width || e.clientWidth || r.right - r.left,
        d = p.height || e.clientHeight || r.bottom - r.top,
        f = e.offsetWidth - s,
        m = e.offsetHeight - d;

    if (f || m) {
      var g = t(e);
      f -= l(g, 'x'), m -= l(g, 'y'), r.width -= f, r.height -= m;
    }

    return c(r);
  }

  function u(e, o) {
    var i = ie(),
        r = 'HTML' === o.nodeName,
        p = g(e),
        s = g(o),
        d = n(e),
        a = t(o),
        l = +a.borderTopWidth.split('px')[0],
        m = +a.borderLeftWidth.split('px')[0],
        h = c({
      top: p.top - s.top - l,
      left: p.left - s.left - m,
      width: p.width,
      height: p.height
    });

    if (h.marginTop = 0, h.marginLeft = 0, !i && r) {
      var u = +a.marginTop.split('px')[0],
          b = +a.marginLeft.split('px')[0];
      h.top -= l - u, h.bottom -= l - u, h.left -= m - b, h.right -= m - b, h.marginTop = u, h.marginLeft = b;
    }

    return (i ? o.contains(d) : o === d && 'BODY' !== d.nodeName) && (h = f(h, o)), h;
  }

  function b(e) {
    var t = window.document.documentElement,
        o = u(e, t),
        i = _(t.clientWidth, window.innerWidth || 0),
        n = _(t.clientHeight, window.innerHeight || 0),
        r = a(t),
        p = a(t, 'left'),
        s = {
      top: r - o.top + o.marginTop,
      left: p - o.left + o.marginLeft,
      width: i,
      height: n
    };

    return c(s);
  }

  function y(e) {
    var i = e.nodeName;
    return 'BODY' === i || 'HTML' === i ? !1 : 'fixed' === t(e, 'position') || y(o(e));
  }

  function w(e, t, i, r) {
    var p = {
      top: 0,
      left: 0
    },
        s = d(e, t);
    if ('viewport' === r) p = b(s);else {
      var a;
      'scrollParent' === r ? (a = n(o(e)), 'BODY' === a.nodeName && (a = window.document.documentElement)) : 'window' === r ? a = window.document.documentElement : a = r;
      var f = u(a, s);

      if ('HTML' === a.nodeName && !y(s)) {
        var l = h(),
            m = l.height,
            c = l.width;
        p.top += f.top - f.marginTop, p.bottom = m + f.top, p.left += f.left - f.marginLeft, p.right = c + f.left;
      } else p = f;
    }
    return p.left += i, p.top += i, p.right -= i, p.bottom -= i, p;
  }

  function v(e) {
    var t = e.width,
        o = e.height;
    return t * o;
  }

  function E(e, t, o, i, n) {
    var r = 5 < arguments.length && void 0 !== arguments[5] ? arguments[5] : 0;
    if (-1 === e.indexOf('auto')) return e;
    var p = w(o, i, r, n),
        s = {
      top: {
        width: p.width,
        height: t.top - p.top
      },
      right: {
        width: p.right - t.right,
        height: p.height
      },
      bottom: {
        width: p.width,
        height: p.bottom - t.bottom
      },
      left: {
        width: t.left - p.left,
        height: p.height
      }
    },
        d = Object.keys(s).map(function (e) {
      return se({
        key: e
      }, s[e], {
        area: v(s[e])
      });
    }).sort(function (e, t) {
      return t.area - e.area;
    }),
        a = d.filter(function (e) {
      var t = e.width,
          i = e.height;
      return t >= o.clientWidth && i >= o.clientHeight;
    }),
        f = 0 < a.length ? a[0].key : d[0].key,
        l = e.split('-')[1];
    return f + (l ? '-' + l : '');
  }

  function x(e, t, o) {
    var i = d(t, o);
    return u(o, i);
  }

  function O(e) {
    var t = window.getComputedStyle(e),
        o = parseFloat(t.marginTop) + parseFloat(t.marginBottom),
        i = parseFloat(t.marginLeft) + parseFloat(t.marginRight),
        n = {
      width: e.offsetWidth + i,
      height: e.offsetHeight + o
    };
    return n;
  }

  function L(e) {
    var t = {
      left: 'right',
      right: 'left',
      bottom: 'top',
      top: 'bottom'
    };
    return e.replace(/left|right|bottom|top/g, function (e) {
      return t[e];
    });
  }

  function S(e, t, o) {
    o = o.split('-')[0];
    var i = O(e),
        n = {
      width: i.width,
      height: i.height
    },
        r = -1 !== ['right', 'left'].indexOf(o),
        p = r ? 'top' : 'left',
        s = r ? 'left' : 'top',
        d = r ? 'height' : 'width',
        a = r ? 'width' : 'height';
    return n[p] = t[p] + t[d] / 2 - i[d] / 2, n[s] = o === s ? t[s] - i[a] : t[L(s)], n;
  }

  function T(e, t) {
    return Array.prototype.find ? e.find(t) : e.filter(t)[0];
  }

  function C(e, t, o) {
    if (Array.prototype.findIndex) return e.findIndex(function (e) {
      return e[t] === o;
    });
    var i = T(e, function (e) {
      return e[t] === o;
    });
    return e.indexOf(i);
  }

  function N(t, o, i) {
    var n = void 0 === i ? t : t.slice(0, C(t, 'name', i));
    return n.forEach(function (t) {
      t["function"] && console.warn('`modifier.function` is deprecated, use `modifier.fn`!');
      var i = t["function"] || t.fn;
      t.enabled && e(i) && (o.offsets.popper = c(o.offsets.popper), o.offsets.reference = c(o.offsets.reference), o = i(o, t));
    }), o;
  }

  function k() {
    if (!this.state.isDestroyed) {
      var e = {
        instance: this,
        styles: {},
        attributes: {},
        flipped: !1,
        offsets: {}
      };
      e.offsets.reference = x(this.state, this.popper, this.reference), e.placement = E(this.options.placement, e.offsets.reference, this.popper, this.reference, this.options.modifiers.flip.boundariesElement, this.options.modifiers.flip.padding), e.originalPlacement = e.placement, e.offsets.popper = S(this.popper, e.offsets.reference, e.placement), e.offsets.popper.position = 'absolute', e = N(this.modifiers, e), this.state.isCreated ? this.options.onUpdate(e) : (this.state.isCreated = !0, this.options.onCreate(e));
    }
  }

  function W(e, t) {
    return e.some(function (e) {
      var o = e.name,
          i = e.enabled;
      return i && o === t;
    });
  }

  function B(e) {
    for (var t = [!1, 'ms', 'Webkit', 'Moz', 'O'], o = e.charAt(0).toUpperCase() + e.slice(1), n = 0; n < t.length - 1; n++) {
      var i = t[n],
          r = i ? '' + i + o : e;
      if ('undefined' != typeof window.document.body.style[r]) return r;
    }

    return null;
  }

  function D() {
    return this.state.isDestroyed = !0, W(this.modifiers, 'applyStyle') && (this.popper.removeAttribute('x-placement'), this.popper.style.left = '', this.popper.style.position = '', this.popper.style.top = '', this.popper.style[B('transform')] = ''), this.disableEventListeners(), this.options.removeOnDestroy && this.popper.parentNode.removeChild(this.popper), this;
  }

  function H(e, t, o, i) {
    var r = 'BODY' === e.nodeName,
        p = r ? window : e;
    p.addEventListener(t, o, {
      passive: !0
    }), r || H(n(p.parentNode), t, o, i), i.push(p);
  }

  function P(e, t, o, i) {
    o.updateBound = i, window.addEventListener('resize', o.updateBound, {
      passive: !0
    });
    var r = n(e);
    return H(r, 'scroll', o.updateBound, o.scrollParents), o.scrollElement = r, o.eventsEnabled = !0, o;
  }

  function A() {
    this.state.eventsEnabled || (this.state = P(this.reference, this.options, this.state, this.scheduleUpdate));
  }

  function M(e, t) {
    return window.removeEventListener('resize', t.updateBound), t.scrollParents.forEach(function (e) {
      e.removeEventListener('scroll', t.updateBound);
    }), t.updateBound = null, t.scrollParents = [], t.scrollElement = null, t.eventsEnabled = !1, t;
  }

  function I() {
    this.state.eventsEnabled && (window.cancelAnimationFrame(this.scheduleUpdate), this.state = M(this.reference, this.state));
  }

  function R(e) {
    return '' !== e && !isNaN(parseFloat(e)) && isFinite(e);
  }

  function U(e, t) {
    Object.keys(t).forEach(function (o) {
      var i = '';
      -1 !== ['width', 'height', 'top', 'right', 'bottom', 'left'].indexOf(o) && R(t[o]) && (i = 'px'), e.style[o] = t[o] + i;
    });
  }

  function Y(e, t) {
    Object.keys(t).forEach(function (o) {
      var i = t[o];
      !1 === i ? e.removeAttribute(o) : e.setAttribute(o, t[o]);
    });
  }

  function F(e, t, o) {
    var i = T(e, function (e) {
      var o = e.name;
      return o === t;
    }),
        n = !!i && e.some(function (e) {
      return e.name === o && e.enabled && e.order < i.order;
    });

    if (!n) {
      var r = '`' + t + '`';
      console.warn('`' + o + '`' + ' modifier is required by ' + r + ' modifier in order to work, be sure to include it before ' + r + '!');
    }

    return n;
  }

  function j(e) {
    return 'end' === e ? 'start' : 'start' === e ? 'end' : e;
  }

  function K(e) {
    var t = 1 < arguments.length && void 0 !== arguments[1] && arguments[1],
        o = ae.indexOf(e),
        i = ae.slice(o + 1).concat(ae.slice(0, o));
    return t ? i.reverse() : i;
  }

  function q(e, t, o, i) {
    var n = e.match(/((?:\-|\+)?\d*\.?\d*)(.*)/),
        r = +n[1],
        p = n[2];
    if (!r) return e;

    if (0 === p.indexOf('%')) {
      var s;

      switch (p) {
        case '%p':
          s = o;
          break;

        case '%':
        case '%r':
        default:
          s = i;
      }

      var d = c(s);
      return d[t] / 100 * r;
    }

    if ('vh' === p || 'vw' === p) {
      var a;
      return a = 'vh' === p ? _(document.documentElement.clientHeight, window.innerHeight || 0) : _(document.documentElement.clientWidth, window.innerWidth || 0), a / 100 * r;
    }

    return r;
  }

  function G(e, t, o, i) {
    var n = [0, 0],
        r = -1 !== ['right', 'left'].indexOf(i),
        p = e.split(/(\+|\-)/).map(function (e) {
      return e.trim();
    }),
        s = p.indexOf(T(p, function (e) {
      return -1 !== e.search(/,|\s/);
    }));
    p[s] && -1 === p[s].indexOf(',') && console.warn('Offsets separated by white space(s) are deprecated, use a comma (,) instead.');
    var d = /\s*,\s*|\s+/,
        a = -1 === s ? [p] : [p.slice(0, s).concat([p[s].split(d)[0]]), [p[s].split(d)[1]].concat(p.slice(s + 1))];
    return a = a.map(function (e, i) {
      var n = (1 === i ? !r : r) ? 'height' : 'width',
          p = !1;
      return e.reduce(function (e, t) {
        return '' === e[e.length - 1] && -1 !== ['+', '-'].indexOf(t) ? (e[e.length - 1] = t, p = !0, e) : p ? (e[e.length - 1] += t, p = !1, e) : e.concat(t);
      }, []).map(function (e) {
        return q(e, n, t, o);
      });
    }), a.forEach(function (e, t) {
      e.forEach(function (o, i) {
        R(o) && (n[t] += o * ('-' === e[i - 1] ? -1 : 1));
      });
    }), n;
  }

  for (var z = Math.min, V = Math.floor, _ = Math.max, X = ['native code', '[object MutationObserverConstructor]'], Q = function Q(e) {
    return X.some(function (t) {
      return -1 < (e || '').toString().indexOf(t);
    });
  }, J = 'undefined' != typeof window, Z = ['Edge', 'Trident', 'Firefox'], $ = 0, ee = 0; ee < Z.length; ee += 1) {
    if (J && 0 <= navigator.userAgent.indexOf(Z[ee])) {
      $ = 1;
      break;
    }
  }

  var i,
      te = J && Q(window.MutationObserver),
      oe = te ? function (e) {
    var t = !1,
        o = 0,
        i = document.createElement('span'),
        n = new MutationObserver(function () {
      e(), t = !1;
    });
    return n.observe(i, {
      attributes: !0
    }), function () {
      t || (t = !0, i.setAttribute('x-index', o), ++o);
    };
  } : function (e) {
    var t = !1;
    return function () {
      t || (t = !0, setTimeout(function () {
        t = !1, e();
      }, $));
    };
  },
      ie = function ie() {
    return void 0 == i && (i = -1 !== navigator.appVersion.indexOf('MSIE 10')), i;
  },
      ne = function ne(e, t) {
    if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function');
  },
      re = function () {
    function e(e, t) {
      for (var o, n = 0; n < t.length; n++) {
        o = t[n], o.enumerable = o.enumerable || !1, o.configurable = !0, 'value' in o && (o.writable = !0), Object.defineProperty(e, o.key, o);
      }
    }

    return function (t, o, i) {
      return o && e(t.prototype, o), i && e(t, i), t;
    };
  }(),
      pe = function pe(e, t, o) {
    return t in e ? Object.defineProperty(e, t, {
      value: o,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : e[t] = o, e;
  },
      se = Object.assign || function (e) {
    for (var t, o = 1; o < arguments.length; o++) {
      for (var i in t = arguments[o], t) {
        Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
      }
    }

    return e;
  },
      de = ['auto-start', 'auto', 'auto-end', 'top-start', 'top', 'top-end', 'right-start', 'right', 'right-end', 'bottom-end', 'bottom', 'bottom-start', 'left-end', 'left', 'left-start'],
      ae = de.slice(3),
      fe = {
    FLIP: 'flip',
    CLOCKWISE: 'clockwise',
    COUNTERCLOCKWISE: 'counterclockwise'
  },
      le = function () {
    function t(o, i) {
      var n = this,
          r = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {};
      ne(this, t), this.scheduleUpdate = function () {
        return requestAnimationFrame(n.update);
      }, this.update = oe(this.update.bind(this)), this.options = se({}, t.Defaults, r), this.state = {
        isDestroyed: !1,
        isCreated: !1,
        scrollParents: []
      }, this.reference = o.jquery ? o[0] : o, this.popper = i.jquery ? i[0] : i, this.options.modifiers = {}, Object.keys(se({}, t.Defaults.modifiers, r.modifiers)).forEach(function (e) {
        n.options.modifiers[e] = se({}, t.Defaults.modifiers[e] || {}, r.modifiers ? r.modifiers[e] : {});
      }), this.modifiers = Object.keys(this.options.modifiers).map(function (e) {
        return se({
          name: e
        }, n.options.modifiers[e]);
      }).sort(function (e, t) {
        return e.order - t.order;
      }), this.modifiers.forEach(function (t) {
        t.enabled && e(t.onLoad) && t.onLoad(n.reference, n.popper, n.options, t, n.state);
      }), this.update();
      var p = this.options.eventsEnabled;
      p && this.enableEventListeners(), this.state.eventsEnabled = p;
    }

    return re(t, [{
      key: 'update',
      value: function value() {
        return k.call(this);
      }
    }, {
      key: 'destroy',
      value: function value() {
        return D.call(this);
      }
    }, {
      key: 'enableEventListeners',
      value: function value() {
        return A.call(this);
      }
    }, {
      key: 'disableEventListeners',
      value: function value() {
        return I.call(this);
      }
    }]), t;
  }();

  return le.Utils = ('undefined' == typeof window ? global : window).PopperUtils, le.placements = de, le.Defaults = {
    placement: 'bottom',
    eventsEnabled: !0,
    removeOnDestroy: !1,
    onCreate: function onCreate() {},
    onUpdate: function onUpdate() {},
    modifiers: {
      shift: {
        order: 100,
        enabled: !0,
        fn: function fn(e) {
          var t = e.placement,
              o = t.split('-')[0],
              i = t.split('-')[1];

          if (i) {
            var n = e.offsets,
                r = n.reference,
                p = n.popper,
                s = -1 !== ['bottom', 'top'].indexOf(o),
                d = s ? 'left' : 'top',
                a = s ? 'width' : 'height',
                f = {
              start: pe({}, d, r[d]),
              end: pe({}, d, r[d] + r[a] - p[a])
            };
            e.offsets.popper = se({}, p, f[i]);
          }

          return e;
        }
      },
      offset: {
        order: 200,
        enabled: !0,
        fn: function fn(e, t) {
          var o,
              i = t.offset,
              n = e.placement,
              r = e.offsets,
              p = r.popper,
              s = r.reference,
              d = n.split('-')[0];
          return o = R(+i) ? [+i, 0] : G(i, p, s, d), 'left' === d ? (p.top += o[0], p.left -= o[1]) : 'right' === d ? (p.top += o[0], p.left += o[1]) : 'top' === d ? (p.left += o[0], p.top -= o[1]) : 'bottom' === d && (p.left += o[0], p.top += o[1]), e.popper = p, e;
        },
        offset: 0
      },
      preventOverflow: {
        order: 300,
        enabled: !0,
        fn: function fn(e, t) {
          var o = t.boundariesElement || r(e.instance.popper);
          e.instance.reference === o && (o = r(o));
          var i = w(e.instance.popper, e.instance.reference, t.padding, o);
          t.boundaries = i;
          var n = t.priority,
              p = e.offsets.popper,
              s = {
            primary: function primary(e) {
              var o = p[e];
              return p[e] < i[e] && !t.escapeWithReference && (o = _(p[e], i[e])), pe({}, e, o);
            },
            secondary: function secondary(e) {
              var o = 'right' === e ? 'left' : 'top',
                  n = p[o];
              return p[e] > i[e] && !t.escapeWithReference && (n = z(p[o], i[e] - ('right' === e ? p.width : p.height))), pe({}, o, n);
            }
          };
          return n.forEach(function (e) {
            var t = -1 === ['left', 'top'].indexOf(e) ? 'secondary' : 'primary';
            p = se({}, p, s[t](e));
          }), e.offsets.popper = p, e;
        },
        priority: ['left', 'right', 'top', 'bottom'],
        padding: 5,
        boundariesElement: 'scrollParent'
      },
      keepTogether: {
        order: 400,
        enabled: !0,
        fn: function fn(e) {
          var t = e.offsets,
              o = t.popper,
              i = t.reference,
              n = e.placement.split('-')[0],
              r = V,
              p = -1 !== ['top', 'bottom'].indexOf(n),
              s = p ? 'right' : 'bottom',
              d = p ? 'left' : 'top',
              a = p ? 'width' : 'height';
          return o[s] < r(i[d]) && (e.offsets.popper[d] = r(i[d]) - o[a]), o[d] > r(i[s]) && (e.offsets.popper[d] = r(i[s])), e;
        }
      },
      arrow: {
        order: 500,
        enabled: !0,
        fn: function fn(e, t) {
          if (!F(e.instance.modifiers, 'arrow', 'keepTogether')) return e;
          var o = t.element;

          if ('string' == typeof o) {
            if (o = e.instance.popper.querySelector(o), !o) return e;
          } else if (!e.instance.popper.contains(o)) return console.warn('WARNING: `arrow.element` must be child of its popper element!'), e;

          var i = e.placement.split('-')[0],
              n = e.offsets,
              r = n.popper,
              p = n.reference,
              s = -1 !== ['left', 'right'].indexOf(i),
              d = s ? 'height' : 'width',
              a = s ? 'top' : 'left',
              f = s ? 'left' : 'top',
              l = s ? 'bottom' : 'right',
              m = O(o)[d];
          p[l] - m < r[a] && (e.offsets.popper[a] -= r[a] - (p[l] - m)), p[a] + m > r[l] && (e.offsets.popper[a] += p[a] + m - r[l]);
          var h = p[a] + p[d] / 2 - m / 2,
              g = h - c(e.offsets.popper)[a];
          return g = _(z(r[d] - m, g), 0), e.arrowElement = o, e.offsets.arrow = {}, e.offsets.arrow[a] = Math.round(g), e.offsets.arrow[f] = '', e;
        },
        element: '[x-arrow]'
      },
      flip: {
        order: 600,
        enabled: !0,
        fn: function fn(e, t) {
          if (W(e.instance.modifiers, 'inner')) return e;
          if (e.flipped && e.placement === e.originalPlacement) return e;
          var o = w(e.instance.popper, e.instance.reference, t.padding, t.boundariesElement),
              i = e.placement.split('-')[0],
              n = L(i),
              r = e.placement.split('-')[1] || '',
              p = [];

          switch (t.behavior) {
            case fe.FLIP:
              p = [i, n];
              break;

            case fe.CLOCKWISE:
              p = K(i);
              break;

            case fe.COUNTERCLOCKWISE:
              p = K(i, !0);
              break;

            default:
              p = t.behavior;
          }

          return p.forEach(function (s, d) {
            if (i !== s || p.length === d + 1) return e;
            i = e.placement.split('-')[0], n = L(i);
            var a = e.offsets.popper,
                f = e.offsets.reference,
                l = V,
                m = 'left' === i && l(a.right) > l(f.left) || 'right' === i && l(a.left) < l(f.right) || 'top' === i && l(a.bottom) > l(f.top) || 'bottom' === i && l(a.top) < l(f.bottom),
                h = l(a.left) < l(o.left),
                c = l(a.right) > l(o.right),
                g = l(a.top) < l(o.top),
                u = l(a.bottom) > l(o.bottom),
                b = 'left' === i && h || 'right' === i && c || 'top' === i && g || 'bottom' === i && u,
                y = -1 !== ['top', 'bottom'].indexOf(i),
                w = !!t.flipVariations && (y && 'start' === r && h || y && 'end' === r && c || !y && 'start' === r && g || !y && 'end' === r && u);
            (m || b || w) && (e.flipped = !0, (m || b) && (i = p[d + 1]), w && (r = j(r)), e.placement = i + (r ? '-' + r : ''), e.offsets.popper = se({}, e.offsets.popper, S(e.instance.popper, e.offsets.reference, e.placement)), e = N(e.instance.modifiers, e, 'flip'));
          }), e;
        },
        behavior: 'flip',
        padding: 5,
        boundariesElement: 'viewport'
      },
      inner: {
        order: 700,
        enabled: !1,
        fn: function fn(e) {
          var t = e.placement,
              o = t.split('-')[0],
              i = e.offsets,
              n = i.popper,
              r = i.reference,
              p = -1 !== ['left', 'right'].indexOf(o),
              s = -1 === ['top', 'left'].indexOf(o);
          return n[p ? 'left' : 'top'] = r[t] - (s ? n[p ? 'width' : 'height'] : 0), e.placement = L(t), e.offsets.popper = c(n), e;
        }
      },
      hide: {
        order: 800,
        enabled: !0,
        fn: function fn(e) {
          if (!F(e.instance.modifiers, 'hide', 'preventOverflow')) return e;
          var t = e.offsets.reference,
              o = T(e.instance.modifiers, function (e) {
            return 'preventOverflow' === e.name;
          }).boundaries;

          if (t.bottom < o.top || t.left > o.right || t.top > o.bottom || t.right < o.left) {
            if (!0 === e.hide) return e;
            e.hide = !0, e.attributes['x-out-of-boundaries'] = '';
          } else {
            if (!1 === e.hide) return e;
            e.hide = !1, e.attributes['x-out-of-boundaries'] = !1;
          }

          return e;
        }
      },
      computeStyle: {
        order: 850,
        enabled: !0,
        fn: function fn(e, t) {
          var o = t.x,
              i = t.y,
              n = e.offsets.popper,
              p = T(e.instance.modifiers, function (e) {
            return 'applyStyle' === e.name;
          }).gpuAcceleration;
          void 0 !== p && console.warn('WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!');
          var s,
              d,
              a = void 0 === p ? t.gpuAcceleration : p,
              f = r(e.instance.popper),
              l = g(f),
              m = {
            position: n.position
          },
              h = {
            left: V(n.left),
            top: V(n.top),
            bottom: V(n.bottom),
            right: V(n.right)
          },
              c = 'bottom' === o ? 'top' : 'bottom',
              u = 'right' === i ? 'left' : 'right',
              b = B('transform');
          if (d = 'bottom' == c ? -l.height + h.bottom : h.top, s = 'right' == u ? -l.width + h.right : h.left, a && b) m[b] = 'translate3d(' + s + 'px, ' + d + 'px, 0)', m[c] = 0, m[u] = 0, m.willChange = 'transform';else {
            var y = 'bottom' == c ? -1 : 1,
                w = 'right' == u ? -1 : 1;
            m[c] = d * y, m[u] = s * w, m.willChange = c + ', ' + u;
          }
          var v = {
            "x-placement": e.placement
          };
          return e.attributes = se({}, v, e.attributes), e.styles = se({}, m, e.styles), e;
        },
        gpuAcceleration: !0,
        x: 'bottom',
        y: 'right'
      },
      applyStyle: {
        order: 900,
        enabled: !0,
        fn: function fn(e) {
          return U(e.instance.popper, e.styles), Y(e.instance.popper, e.attributes), e.offsets.arrow && U(e.arrowElement, e.offsets.arrow), e;
        },
        onLoad: function onLoad(e, t, o, i, n) {
          var r = x(n, t, e),
              p = E(o.placement, r, t, e, o.modifiers.flip.boundariesElement, o.modifiers.flip.padding);
          return t.setAttribute('x-placement', p), U(t, {
            position: 'absolute'
          }), o;
        },
        gpuAcceleration: void 0
      }
    }
  }, le;
});
/*!
  * Bootstrap v4.0.0 (https://getbootstrap.com)
  * Copyright 2011-2018 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
  */


!function (t, e) {
  "object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) && "undefined" != typeof module ? e(exports, require("jquery"), require("popper.js")) : "function" == typeof define && define.amd ? define(["exports", "jquery", "popper.js"], e) : e(t.bootstrap = {}, t.jQuery, t.Popper);
}(this, function (t, e, n) {
  "use strict";

  function i(t, e) {
    for (var n = 0; n < e.length; n++) {
      var i = e[n];
      i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i);
    }
  }

  function s(t, e, n) {
    return e && i(t.prototype, e), n && i(t, n), t;
  }

  function r() {
    return (r = Object.assign || function (t) {
      for (var e = 1; e < arguments.length; e++) {
        var n = arguments[e];

        for (var i in n) {
          Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i]);
        }
      }

      return t;
    }).apply(this, arguments);
  }

  e = e && e.hasOwnProperty("default") ? e["default"] : e, n = n && n.hasOwnProperty("default") ? n["default"] : n;

  var o,
      a,
      l,
      h,
      c,
      u,
      f,
      d,
      _,
      g,
      p,
      m,
      v,
      E,
      T,
      y,
      C,
      I,
      A,
      b,
      D,
      S,
      w,
      N,
      O,
      k,
      P = function (t) {
    var e = !1;

    function n(e) {
      var n = this,
          s = !1;
      return t(this).one(i.TRANSITION_END, function () {
        s = !0;
      }), setTimeout(function () {
        s || i.triggerTransitionEnd(n);
      }, e), this;
    }

    var i = {
      TRANSITION_END: "bsTransitionEnd",
      getUID: function getUID(t) {
        do {
          t += ~~(1e6 * Math.random());
        } while (document.getElementById(t));

        return t;
      },
      getSelectorFromElement: function getSelectorFromElement(e) {
        var n,
            i = e.getAttribute("data-target");
        i && "#" !== i || (i = e.getAttribute("href") || ""), "#" === i.charAt(0) && (n = i, i = n = "function" == typeof t.escapeSelector ? t.escapeSelector(n).substr(1) : n.replace(/(:|\.|\[|\]|,|=|@)/g, "\\$1"));

        try {
          return t(document).find(i).length > 0 ? i : null;
        } catch (t) {
          return null;
        }
      },
      reflow: function reflow(t) {
        return t.offsetHeight;
      },
      triggerTransitionEnd: function triggerTransitionEnd(n) {
        t(n).trigger(e.end);
      },
      supportsTransitionEnd: function supportsTransitionEnd() {
        return Boolean(e);
      },
      isElement: function isElement(t) {
        return (t[0] || t).nodeType;
      },
      typeCheckConfig: function typeCheckConfig(t, e, n) {
        for (var s in n) {
          if (Object.prototype.hasOwnProperty.call(n, s)) {
            var r = n[s],
                o = e[s],
                a = o && i.isElement(o) ? "element" : (l = o, {}.toString.call(l).match(/\s([a-zA-Z]+)/)[1].toLowerCase());
            if (!new RegExp(r).test(a)) throw new Error(t.toUpperCase() + ': Option "' + s + '" provided type "' + a + '" but expected type "' + r + '".');
          }
        }

        var l;
      }
    };
    return e = ("undefined" == typeof window || !window.QUnit) && {
      end: "transitionend"
    }, t.fn.emulateTransitionEnd = n, i.supportsTransitionEnd() && (t.event.special[i.TRANSITION_END] = {
      bindType: e.end,
      delegateType: e.end,
      handle: function handle(e) {
        if (t(e.target).is(this)) return e.handleObj.handler.apply(this, arguments);
      }
    }), i;
  }(e),
      L = (a = "alert", h = "." + (l = "bs.alert"), c = (o = e).fn[a], u = {
    CLOSE: "close" + h,
    CLOSED: "closed" + h,
    CLICK_DATA_API: "click" + h + ".data-api"
  }, f = "alert", d = "fade", _ = "show", g = function () {
    function t(t) {
      this._element = t;
    }

    var e = t.prototype;
    return e.close = function (t) {
      t = t || this._element;

      var e = this._getRootElement(t);

      this._triggerCloseEvent(e).isDefaultPrevented() || this._removeElement(e);
    }, e.dispose = function () {
      o.removeData(this._element, l), this._element = null;
    }, e._getRootElement = function (t) {
      var e = P.getSelectorFromElement(t),
          n = !1;
      return e && (n = o(e)[0]), n || (n = o(t).closest("." + f)[0]), n;
    }, e._triggerCloseEvent = function (t) {
      var e = o.Event(u.CLOSE);
      return o(t).trigger(e), e;
    }, e._removeElement = function (t) {
      var e = this;
      o(t).removeClass(_), P.supportsTransitionEnd() && o(t).hasClass(d) ? o(t).one(P.TRANSITION_END, function (n) {
        return e._destroyElement(t, n);
      }).emulateTransitionEnd(150) : this._destroyElement(t);
    }, e._destroyElement = function (t) {
      o(t).detach().trigger(u.CLOSED).remove();
    }, t._jQueryInterface = function (e) {
      return this.each(function () {
        var n = o(this),
            i = n.data(l);
        i || (i = new t(this), n.data(l, i)), "close" === e && i[e](this);
      });
    }, t._handleDismiss = function (t) {
      return function (e) {
        e && e.preventDefault(), t.close(this);
      };
    }, s(t, null, [{
      key: "VERSION",
      get: function get() {
        return "4.0.0";
      }
    }]), t;
  }(), o(document).on(u.CLICK_DATA_API, '[data-dismiss="alert"]', g._handleDismiss(new g())), o.fn[a] = g._jQueryInterface, o.fn[a].Constructor = g, o.fn[a].noConflict = function () {
    return o.fn[a] = c, g._jQueryInterface;
  }, g),
      R = (m = "button", E = "." + (v = "bs.button"), T = ".data-api", y = (p = e).fn[m], C = "active", I = "btn", A = "focus", b = '[data-toggle^="button"]', D = '[data-toggle="buttons"]', S = "input", w = ".active", N = ".btn", O = {
    CLICK_DATA_API: "click" + E + T,
    FOCUS_BLUR_DATA_API: "focus" + E + T + " blur" + E + T
  }, k = function () {
    function t(t) {
      this._element = t;
    }

    var e = t.prototype;
    return e.toggle = function () {
      var t = !0,
          e = !0,
          n = p(this._element).closest(D)[0];

      if (n) {
        var i = p(this._element).find(S)[0];

        if (i) {
          if ("radio" === i.type) if (i.checked && p(this._element).hasClass(C)) t = !1;else {
            var s = p(n).find(w)[0];
            s && p(s).removeClass(C);
          }

          if (t) {
            if (i.hasAttribute("disabled") || n.hasAttribute("disabled") || i.classList.contains("disabled") || n.classList.contains("disabled")) return;
            i.checked = !p(this._element).hasClass(C), p(i).trigger("change");
          }

          i.focus(), e = !1;
        }
      }

      e && this._element.setAttribute("aria-pressed", !p(this._element).hasClass(C)), t && p(this._element).toggleClass(C);
    }, e.dispose = function () {
      p.removeData(this._element, v), this._element = null;
    }, t._jQueryInterface = function (e) {
      return this.each(function () {
        var n = p(this).data(v);
        n || (n = new t(this), p(this).data(v, n)), "toggle" === e && n[e]();
      });
    }, s(t, null, [{
      key: "VERSION",
      get: function get() {
        return "4.0.0";
      }
    }]), t;
  }(), p(document).on(O.CLICK_DATA_API, b, function (t) {
    t.preventDefault();
    var e = t.target;
    p(e).hasClass(I) || (e = p(e).closest(N)), k._jQueryInterface.call(p(e), "toggle");
  }).on(O.FOCUS_BLUR_DATA_API, b, function (t) {
    var e = p(t.target).closest(N)[0];
    p(e).toggleClass(A, /^focus(in)?$/.test(t.type));
  }), p.fn[m] = k._jQueryInterface, p.fn[m].Constructor = k, p.fn[m].noConflict = function () {
    return p.fn[m] = y, k._jQueryInterface;
  }, k),
      j = function (t) {
    var e = "carousel",
        n = "bs.carousel",
        i = "." + n,
        o = t.fn[e],
        a = {
      interval: 5e3,
      keyboard: !0,
      slide: !1,
      pause: "hover",
      wrap: !0
    },
        l = {
      interval: "(number|boolean)",
      keyboard: "boolean",
      slide: "(boolean|string)",
      pause: "(string|boolean)",
      wrap: "boolean"
    },
        h = "next",
        c = "prev",
        u = "left",
        f = "right",
        d = {
      SLIDE: "slide" + i,
      SLID: "slid" + i,
      KEYDOWN: "keydown" + i,
      MOUSEENTER: "mouseenter" + i,
      MOUSELEAVE: "mouseleave" + i,
      TOUCHEND: "touchend" + i,
      LOAD_DATA_API: "load" + i + ".data-api",
      CLICK_DATA_API: "click" + i + ".data-api"
    },
        _ = "carousel",
        g = "active",
        p = "slide",
        m = "carousel-item-right",
        v = "carousel-item-left",
        E = "carousel-item-next",
        T = "carousel-item-prev",
        y = {
      ACTIVE: ".active",
      ACTIVE_ITEM: ".active.carousel-item",
      ITEM: ".carousel-item",
      NEXT_PREV: ".carousel-item-next, .carousel-item-prev",
      INDICATORS: ".carousel-indicators",
      DATA_SLIDE: "[data-slide], [data-slide-to]",
      DATA_RIDE: '[data-ride="carousel"]'
    },
        C = function () {
      function o(e, n) {
        this._items = null, this._interval = null, this._activeElement = null, this._isPaused = !1, this._isSliding = !1, this.touchTimeout = null, this._config = this._getConfig(n), this._element = t(e)[0], this._indicatorsElement = t(this._element).find(y.INDICATORS)[0], this._addEventListeners();
      }

      var C = o.prototype;
      return C.next = function () {
        this._isSliding || this._slide(h);
      }, C.nextWhenVisible = function () {
        !document.hidden && t(this._element).is(":visible") && "hidden" !== t(this._element).css("visibility") && this.next();
      }, C.prev = function () {
        this._isSliding || this._slide(c);
      }, C.pause = function (e) {
        e || (this._isPaused = !0), t(this._element).find(y.NEXT_PREV)[0] && P.supportsTransitionEnd() && (P.triggerTransitionEnd(this._element), this.cycle(!0)), clearInterval(this._interval), this._interval = null;
      }, C.cycle = function (t) {
        t || (this._isPaused = !1), this._interval && (clearInterval(this._interval), this._interval = null), this._config.interval && !this._isPaused && (this._interval = setInterval((document.visibilityState ? this.nextWhenVisible : this.next).bind(this), this._config.interval));
      }, C.to = function (e) {
        var n = this;
        this._activeElement = t(this._element).find(y.ACTIVE_ITEM)[0];

        var i = this._getItemIndex(this._activeElement);

        if (!(e > this._items.length - 1 || e < 0)) if (this._isSliding) t(this._element).one(d.SLID, function () {
          return n.to(e);
        });else {
          if (i === e) return this.pause(), void this.cycle();
          var s = e > i ? h : c;

          this._slide(s, this._items[e]);
        }
      }, C.dispose = function () {
        t(this._element).off(i), t.removeData(this._element, n), this._items = null, this._config = null, this._element = null, this._interval = null, this._isPaused = null, this._isSliding = null, this._activeElement = null, this._indicatorsElement = null;
      }, C._getConfig = function (t) {
        return t = r({}, a, t), P.typeCheckConfig(e, t, l), t;
      }, C._addEventListeners = function () {
        var e = this;
        this._config.keyboard && t(this._element).on(d.KEYDOWN, function (t) {
          return e._keydown(t);
        }), "hover" === this._config.pause && (t(this._element).on(d.MOUSEENTER, function (t) {
          return e.pause(t);
        }).on(d.MOUSELEAVE, function (t) {
          return e.cycle(t);
        }), "ontouchstart" in document.documentElement && t(this._element).on(d.TOUCHEND, function () {
          e.pause(), e.touchTimeout && clearTimeout(e.touchTimeout), e.touchTimeout = setTimeout(function (t) {
            return e.cycle(t);
          }, 500 + e._config.interval);
        }));
      }, C._keydown = function (t) {
        if (!/input|textarea/i.test(t.target.tagName)) switch (t.which) {
          case 37:
            t.preventDefault(), this.prev();
            break;

          case 39:
            t.preventDefault(), this.next();
        }
      }, C._getItemIndex = function (e) {
        return this._items = t.makeArray(t(e).parent().find(y.ITEM)), this._items.indexOf(e);
      }, C._getItemByDirection = function (t, e) {
        var n = t === h,
            i = t === c,
            s = this._getItemIndex(e),
            r = this._items.length - 1;

        if ((i && 0 === s || n && s === r) && !this._config.wrap) return e;
        var o = (s + (t === c ? -1 : 1)) % this._items.length;
        return -1 === o ? this._items[this._items.length - 1] : this._items[o];
      }, C._triggerSlideEvent = function (e, n) {
        var i = this._getItemIndex(e),
            s = this._getItemIndex(t(this._element).find(y.ACTIVE_ITEM)[0]),
            r = t.Event(d.SLIDE, {
          relatedTarget: e,
          direction: n,
          from: s,
          to: i
        });

        return t(this._element).trigger(r), r;
      }, C._setActiveIndicatorElement = function (e) {
        if (this._indicatorsElement) {
          t(this._indicatorsElement).find(y.ACTIVE).removeClass(g);

          var n = this._indicatorsElement.children[this._getItemIndex(e)];

          n && t(n).addClass(g);
        }
      }, C._slide = function (e, n) {
        var i,
            s,
            r,
            o = this,
            a = t(this._element).find(y.ACTIVE_ITEM)[0],
            l = this._getItemIndex(a),
            c = n || a && this._getItemByDirection(e, a),
            _ = this._getItemIndex(c),
            C = Boolean(this._interval);

        if (e === h ? (i = v, s = E, r = u) : (i = m, s = T, r = f), c && t(c).hasClass(g)) this._isSliding = !1;else if (!this._triggerSlideEvent(c, r).isDefaultPrevented() && a && c) {
          this._isSliding = !0, C && this.pause(), this._setActiveIndicatorElement(c);
          var I = t.Event(d.SLID, {
            relatedTarget: c,
            direction: r,
            from: l,
            to: _
          });
          P.supportsTransitionEnd() && t(this._element).hasClass(p) ? (t(c).addClass(s), P.reflow(c), t(a).addClass(i), t(c).addClass(i), t(a).one(P.TRANSITION_END, function () {
            t(c).removeClass(i + " " + s).addClass(g), t(a).removeClass(g + " " + s + " " + i), o._isSliding = !1, setTimeout(function () {
              return t(o._element).trigger(I);
            }, 0);
          }).emulateTransitionEnd(600)) : (t(a).removeClass(g), t(c).addClass(g), this._isSliding = !1, t(this._element).trigger(I)), C && this.cycle();
        }
      }, o._jQueryInterface = function (e) {
        return this.each(function () {
          var i = t(this).data(n),
              s = r({}, a, t(this).data());
          "object" == _typeof(e) && (s = r({}, s, e));
          var l = "string" == typeof e ? e : s.slide;
          if (i || (i = new o(this, s), t(this).data(n, i)), "number" == typeof e) i.to(e);else if ("string" == typeof l) {
            if ("undefined" == typeof i[l]) throw new TypeError('No method named "' + l + '"');
            i[l]();
          } else s.interval && (i.pause(), i.cycle());
        });
      }, o._dataApiClickHandler = function (e) {
        var i = P.getSelectorFromElement(this);

        if (i) {
          var s = t(i)[0];

          if (s && t(s).hasClass(_)) {
            var a = r({}, t(s).data(), t(this).data()),
                l = this.getAttribute("data-slide-to");
            l && (a.interval = !1), o._jQueryInterface.call(t(s), a), l && t(s).data(n).to(l), e.preventDefault();
          }
        }
      }, s(o, null, [{
        key: "VERSION",
        get: function get() {
          return "4.0.0";
        }
      }, {
        key: "Default",
        get: function get() {
          return a;
        }
      }]), o;
    }();

    return t(document).on(d.CLICK_DATA_API, y.DATA_SLIDE, C._dataApiClickHandler), t(window).on(d.LOAD_DATA_API, function () {
      t(y.DATA_RIDE).each(function () {
        var e = t(this);

        C._jQueryInterface.call(e, e.data());
      });
    }), t.fn[e] = C._jQueryInterface, t.fn[e].Constructor = C, t.fn[e].noConflict = function () {
      return t.fn[e] = o, C._jQueryInterface;
    }, C;
  }(e),
      H = function (t) {
    var e = "collapse",
        n = "bs.collapse",
        i = "." + n,
        o = t.fn[e],
        a = {
      toggle: !0,
      parent: ""
    },
        l = {
      toggle: "boolean",
      parent: "(string|element)"
    },
        h = {
      SHOW: "show" + i,
      SHOWN: "shown" + i,
      HIDE: "hide" + i,
      HIDDEN: "hidden" + i,
      CLICK_DATA_API: "click" + i + ".data-api"
    },
        c = "show",
        u = "collapse",
        f = "collapsing",
        d = "collapsed",
        _ = "width",
        g = "height",
        p = {
      ACTIVES: ".show, .collapsing",
      DATA_TOGGLE: '[data-toggle="collapse"]'
    },
        m = function () {
      function i(e, n) {
        this._isTransitioning = !1, this._element = e, this._config = this._getConfig(n), this._triggerArray = t.makeArray(t('[data-toggle="collapse"][href="#' + e.id + '"],[data-toggle="collapse"][data-target="#' + e.id + '"]'));

        for (var i = t(p.DATA_TOGGLE), s = 0; s < i.length; s++) {
          var r = i[s],
              o = P.getSelectorFromElement(r);
          null !== o && t(o).filter(e).length > 0 && (this._selector = o, this._triggerArray.push(r));
        }

        this._parent = this._config.parent ? this._getParent() : null, this._config.parent || this._addAriaAndCollapsedClass(this._element, this._triggerArray), this._config.toggle && this.toggle();
      }

      var o = i.prototype;
      return o.toggle = function () {
        t(this._element).hasClass(c) ? this.hide() : this.show();
      }, o.show = function () {
        var e,
            s,
            r = this;

        if (!this._isTransitioning && !t(this._element).hasClass(c) && (this._parent && 0 === (e = t.makeArray(t(this._parent).find(p.ACTIVES).filter('[data-parent="' + this._config.parent + '"]'))).length && (e = null), !(e && (s = t(e).not(this._selector).data(n)) && s._isTransitioning))) {
          var o = t.Event(h.SHOW);

          if (t(this._element).trigger(o), !o.isDefaultPrevented()) {
            e && (i._jQueryInterface.call(t(e).not(this._selector), "hide"), s || t(e).data(n, null));

            var a = this._getDimension();

            t(this._element).removeClass(u).addClass(f), this._element.style[a] = 0, this._triggerArray.length > 0 && t(this._triggerArray).removeClass(d).attr("aria-expanded", !0), this.setTransitioning(!0);

            var l = function l() {
              t(r._element).removeClass(f).addClass(u).addClass(c), r._element.style[a] = "", r.setTransitioning(!1), t(r._element).trigger(h.SHOWN);
            };

            if (P.supportsTransitionEnd()) {
              var _ = "scroll" + (a[0].toUpperCase() + a.slice(1));

              t(this._element).one(P.TRANSITION_END, l).emulateTransitionEnd(600), this._element.style[a] = this._element[_] + "px";
            } else l();
          }
        }
      }, o.hide = function () {
        var e = this;

        if (!this._isTransitioning && t(this._element).hasClass(c)) {
          var n = t.Event(h.HIDE);

          if (t(this._element).trigger(n), !n.isDefaultPrevented()) {
            var i = this._getDimension();

            if (this._element.style[i] = this._element.getBoundingClientRect()[i] + "px", P.reflow(this._element), t(this._element).addClass(f).removeClass(u).removeClass(c), this._triggerArray.length > 0) for (var s = 0; s < this._triggerArray.length; s++) {
              var r = this._triggerArray[s],
                  o = P.getSelectorFromElement(r);
              if (null !== o) t(o).hasClass(c) || t(r).addClass(d).attr("aria-expanded", !1);
            }
            this.setTransitioning(!0);

            var a = function a() {
              e.setTransitioning(!1), t(e._element).removeClass(f).addClass(u).trigger(h.HIDDEN);
            };

            this._element.style[i] = "", P.supportsTransitionEnd() ? t(this._element).one(P.TRANSITION_END, a).emulateTransitionEnd(600) : a();
          }
        }
      }, o.setTransitioning = function (t) {
        this._isTransitioning = t;
      }, o.dispose = function () {
        t.removeData(this._element, n), this._config = null, this._parent = null, this._element = null, this._triggerArray = null, this._isTransitioning = null;
      }, o._getConfig = function (t) {
        return (t = r({}, a, t)).toggle = Boolean(t.toggle), P.typeCheckConfig(e, t, l), t;
      }, o._getDimension = function () {
        return t(this._element).hasClass(_) ? _ : g;
      }, o._getParent = function () {
        var e = this,
            n = null;
        P.isElement(this._config.parent) ? (n = this._config.parent, "undefined" != typeof this._config.parent.jquery && (n = this._config.parent[0])) : n = t(this._config.parent)[0];
        var s = '[data-toggle="collapse"][data-parent="' + this._config.parent + '"]';
        return t(n).find(s).each(function (t, n) {
          e._addAriaAndCollapsedClass(i._getTargetFromElement(n), [n]);
        }), n;
      }, o._addAriaAndCollapsedClass = function (e, n) {
        if (e) {
          var i = t(e).hasClass(c);
          n.length > 0 && t(n).toggleClass(d, !i).attr("aria-expanded", i);
        }
      }, i._getTargetFromElement = function (e) {
        var n = P.getSelectorFromElement(e);
        return n ? t(n)[0] : null;
      }, i._jQueryInterface = function (e) {
        return this.each(function () {
          var s = t(this),
              o = s.data(n),
              l = r({}, a, s.data(), "object" == _typeof(e) && e);

          if (!o && l.toggle && /show|hide/.test(e) && (l.toggle = !1), o || (o = new i(this, l), s.data(n, o)), "string" == typeof e) {
            if ("undefined" == typeof o[e]) throw new TypeError('No method named "' + e + '"');
            o[e]();
          }
        });
      }, s(i, null, [{
        key: "VERSION",
        get: function get() {
          return "4.0.0";
        }
      }, {
        key: "Default",
        get: function get() {
          return a;
        }
      }]), i;
    }();

    return t(document).on(h.CLICK_DATA_API, p.DATA_TOGGLE, function (e) {
      "A" === e.currentTarget.tagName && e.preventDefault();
      var i = t(this),
          s = P.getSelectorFromElement(this);
      t(s).each(function () {
        var e = t(this),
            s = e.data(n) ? "toggle" : i.data();

        m._jQueryInterface.call(e, s);
      });
    }), t.fn[e] = m._jQueryInterface, t.fn[e].Constructor = m, t.fn[e].noConflict = function () {
      return t.fn[e] = o, m._jQueryInterface;
    }, m;
  }(e),
      W = function (t) {
    var e = "dropdown",
        i = "bs.dropdown",
        o = "." + i,
        a = ".data-api",
        l = t.fn[e],
        h = new RegExp("38|40|27"),
        c = {
      HIDE: "hide" + o,
      HIDDEN: "hidden" + o,
      SHOW: "show" + o,
      SHOWN: "shown" + o,
      CLICK: "click" + o,
      CLICK_DATA_API: "click" + o + a,
      KEYDOWN_DATA_API: "keydown" + o + a,
      KEYUP_DATA_API: "keyup" + o + a
    },
        u = "disabled",
        f = "show",
        d = "dropup",
        _ = "dropright",
        g = "dropleft",
        p = "dropdown-menu-right",
        m = "dropdown-menu-left",
        v = "position-static",
        E = '[data-toggle="dropdown"]',
        T = ".dropdown form",
        y = ".dropdown-menu",
        C = ".navbar-nav",
        I = ".dropdown-menu .dropdown-item:not(.disabled)",
        A = "top-start",
        b = "top-end",
        D = "bottom-start",
        S = "bottom-end",
        w = "right-start",
        N = "left-start",
        O = {
      offset: 0,
      flip: !0,
      boundary: "scrollParent"
    },
        k = {
      offset: "(number|string|function)",
      flip: "boolean",
      boundary: "(string|element)"
    },
        L = function () {
      function a(t, e) {
        this._element = t, this._popper = null, this._config = this._getConfig(e), this._menu = this._getMenuElement(), this._inNavbar = this._detectNavbar(), this._addEventListeners();
      }

      var l = a.prototype;
      return l.toggle = function () {
        if (!this._element.disabled && !t(this._element).hasClass(u)) {
          var e = a._getParentFromElement(this._element),
              i = t(this._menu).hasClass(f);

          if (a._clearMenus(), !i) {
            var s = {
              relatedTarget: this._element
            },
                r = t.Event(c.SHOW, s);

            if (t(e).trigger(r), !r.isDefaultPrevented()) {
              if (!this._inNavbar) {
                if ("undefined" == typeof n) throw new TypeError("Bootstrap dropdown require Popper.js (https://popper.js.org)");
                var o = this._element;
                t(e).hasClass(d) && (t(this._menu).hasClass(m) || t(this._menu).hasClass(p)) && (o = e), "scrollParent" !== this._config.boundary && t(e).addClass(v), this._popper = new n(o, this._menu, this._getPopperConfig());
              }

              "ontouchstart" in document.documentElement && 0 === t(e).closest(C).length && t("body").children().on("mouseover", null, t.noop), this._element.focus(), this._element.setAttribute("aria-expanded", !0), t(this._menu).toggleClass(f), t(e).toggleClass(f).trigger(t.Event(c.SHOWN, s));
            }
          }
        }
      }, l.dispose = function () {
        t.removeData(this._element, i), t(this._element).off(o), this._element = null, this._menu = null, null !== this._popper && (this._popper.destroy(), this._popper = null);
      }, l.update = function () {
        this._inNavbar = this._detectNavbar(), null !== this._popper && this._popper.scheduleUpdate();
      }, l._addEventListeners = function () {
        var e = this;
        t(this._element).on(c.CLICK, function (t) {
          t.preventDefault(), t.stopPropagation(), e.toggle();
        });
      }, l._getConfig = function (n) {
        return n = r({}, this.constructor.Default, t(this._element).data(), n), P.typeCheckConfig(e, n, this.constructor.DefaultType), n;
      }, l._getMenuElement = function () {
        if (!this._menu) {
          var e = a._getParentFromElement(this._element);

          this._menu = t(e).find(y)[0];
        }

        return this._menu;
      }, l._getPlacement = function () {
        var e = t(this._element).parent(),
            n = D;
        return e.hasClass(d) ? (n = A, t(this._menu).hasClass(p) && (n = b)) : e.hasClass(_) ? n = w : e.hasClass(g) ? n = N : t(this._menu).hasClass(p) && (n = S), n;
      }, l._detectNavbar = function () {
        return t(this._element).closest(".navbar").length > 0;
      }, l._getPopperConfig = function () {
        var t = this,
            e = {};
        return "function" == typeof this._config.offset ? e.fn = function (e) {
          return e.offsets = r({}, e.offsets, t._config.offset(e.offsets) || {}), e;
        } : e.offset = this._config.offset, {
          placement: this._getPlacement(),
          modifiers: {
            offset: e,
            flip: {
              enabled: this._config.flip
            },
            preventOverflow: {
              boundariesElement: this._config.boundary
            }
          }
        };
      }, a._jQueryInterface = function (e) {
        return this.each(function () {
          var n = t(this).data(i);

          if (n || (n = new a(this, "object" == _typeof(e) ? e : null), t(this).data(i, n)), "string" == typeof e) {
            if ("undefined" == typeof n[e]) throw new TypeError('No method named "' + e + '"');
            n[e]();
          }
        });
      }, a._clearMenus = function (e) {
        if (!e || 3 !== e.which && ("keyup" !== e.type || 9 === e.which)) for (var n = t.makeArray(t(E)), s = 0; s < n.length; s++) {
          var r = a._getParentFromElement(n[s]),
              o = t(n[s]).data(i),
              l = {
            relatedTarget: n[s]
          };

          if (o) {
            var h = o._menu;

            if (t(r).hasClass(f) && !(e && ("click" === e.type && /input|textarea/i.test(e.target.tagName) || "keyup" === e.type && 9 === e.which) && t.contains(r, e.target))) {
              var u = t.Event(c.HIDE, l);
              t(r).trigger(u), u.isDefaultPrevented() || ("ontouchstart" in document.documentElement && t("body").children().off("mouseover", null, t.noop), n[s].setAttribute("aria-expanded", "false"), t(h).removeClass(f), t(r).removeClass(f).trigger(t.Event(c.HIDDEN, l)));
            }
          }
        }
      }, a._getParentFromElement = function (e) {
        var n,
            i = P.getSelectorFromElement(e);
        return i && (n = t(i)[0]), n || e.parentNode;
      }, a._dataApiKeydownHandler = function (e) {
        if ((/input|textarea/i.test(e.target.tagName) ? !(32 === e.which || 27 !== e.which && (40 !== e.which && 38 !== e.which || t(e.target).closest(y).length)) : h.test(e.which)) && (e.preventDefault(), e.stopPropagation(), !this.disabled && !t(this).hasClass(u))) {
          var n = a._getParentFromElement(this),
              i = t(n).hasClass(f);

          if ((i || 27 === e.which && 32 === e.which) && (!i || 27 !== e.which && 32 !== e.which)) {
            var s = t(n).find(I).get();

            if (0 !== s.length) {
              var r = s.indexOf(e.target);
              38 === e.which && r > 0 && r--, 40 === e.which && r < s.length - 1 && r++, r < 0 && (r = 0), s[r].focus();
            }
          } else {
            if (27 === e.which) {
              var o = t(n).find(E)[0];
              t(o).trigger("focus");
            }

            t(this).trigger("click");
          }
        }
      }, s(a, null, [{
        key: "VERSION",
        get: function get() {
          return "4.0.0";
        }
      }, {
        key: "Default",
        get: function get() {
          return O;
        }
      }, {
        key: "DefaultType",
        get: function get() {
          return k;
        }
      }]), a;
    }();

    return t(document).on(c.KEYDOWN_DATA_API, E, L._dataApiKeydownHandler).on(c.KEYDOWN_DATA_API, y, L._dataApiKeydownHandler).on(c.CLICK_DATA_API + " " + c.KEYUP_DATA_API, L._clearMenus).on(c.CLICK_DATA_API, E, function (e) {
      e.preventDefault(), e.stopPropagation(), L._jQueryInterface.call(t(this), "toggle");
    }).on(c.CLICK_DATA_API, T, function (t) {
      t.stopPropagation();
    }), t.fn[e] = L._jQueryInterface, t.fn[e].Constructor = L, t.fn[e].noConflict = function () {
      return t.fn[e] = l, L._jQueryInterface;
    }, L;
  }(e),
      M = function (t) {
    var e = "modal",
        n = "bs.modal",
        i = "." + n,
        o = t.fn.modal,
        a = {
      backdrop: !0,
      keyboard: !0,
      focus: !0,
      show: !0
    },
        l = {
      backdrop: "(boolean|string)",
      keyboard: "boolean",
      focus: "boolean",
      show: "boolean"
    },
        h = {
      HIDE: "hide" + i,
      HIDDEN: "hidden" + i,
      SHOW: "show" + i,
      SHOWN: "shown" + i,
      FOCUSIN: "focusin" + i,
      RESIZE: "resize" + i,
      CLICK_DISMISS: "click.dismiss" + i,
      KEYDOWN_DISMISS: "keydown.dismiss" + i,
      MOUSEUP_DISMISS: "mouseup.dismiss" + i,
      MOUSEDOWN_DISMISS: "mousedown.dismiss" + i,
      CLICK_DATA_API: "click" + i + ".data-api"
    },
        c = "modal-scrollbar-measure",
        u = "modal-backdrop",
        f = "modal-open",
        d = "fade",
        _ = "show",
        g = {
      DIALOG: ".modal-dialog",
      DATA_TOGGLE: '[data-toggle="modal"]',
      DATA_DISMISS: '[data-dismiss="modal"]',
      FIXED_CONTENT: ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",
      STICKY_CONTENT: ".sticky-top",
      NAVBAR_TOGGLER: ".navbar-toggler"
    },
        p = function () {
      function o(e, n) {
        this._config = this._getConfig(n), this._element = e, this._dialog = t(e).find(g.DIALOG)[0], this._backdrop = null, this._isShown = !1, this._isBodyOverflowing = !1, this._ignoreBackdropClick = !1, this._originalBodyPadding = 0, this._scrollbarWidth = 0;
      }

      var p = o.prototype;
      return p.toggle = function (t) {
        return this._isShown ? this.hide() : this.show(t);
      }, p.show = function (e) {
        var n = this;

        if (!this._isTransitioning && !this._isShown) {
          P.supportsTransitionEnd() && t(this._element).hasClass(d) && (this._isTransitioning = !0);
          var i = t.Event(h.SHOW, {
            relatedTarget: e
          });
          t(this._element).trigger(i), this._isShown || i.isDefaultPrevented() || (this._isShown = !0, this._checkScrollbar(), this._setScrollbar(), this._adjustDialog(), t(document.body).addClass(f), this._setEscapeEvent(), this._setResizeEvent(), t(this._element).on(h.CLICK_DISMISS, g.DATA_DISMISS, function (t) {
            return n.hide(t);
          }), t(this._dialog).on(h.MOUSEDOWN_DISMISS, function () {
            t(n._element).one(h.MOUSEUP_DISMISS, function (e) {
              t(e.target).is(n._element) && (n._ignoreBackdropClick = !0);
            });
          }), this._showBackdrop(function () {
            return n._showElement(e);
          }));
        }
      }, p.hide = function (e) {
        var n = this;

        if (e && e.preventDefault(), !this._isTransitioning && this._isShown) {
          var i = t.Event(h.HIDE);

          if (t(this._element).trigger(i), this._isShown && !i.isDefaultPrevented()) {
            this._isShown = !1;
            var s = P.supportsTransitionEnd() && t(this._element).hasClass(d);
            s && (this._isTransitioning = !0), this._setEscapeEvent(), this._setResizeEvent(), t(document).off(h.FOCUSIN), t(this._element).removeClass(_), t(this._element).off(h.CLICK_DISMISS), t(this._dialog).off(h.MOUSEDOWN_DISMISS), s ? t(this._element).one(P.TRANSITION_END, function (t) {
              return n._hideModal(t);
            }).emulateTransitionEnd(300) : this._hideModal();
          }
        }
      }, p.dispose = function () {
        t.removeData(this._element, n), t(window, document, this._element, this._backdrop).off(i), this._config = null, this._element = null, this._dialog = null, this._backdrop = null, this._isShown = null, this._isBodyOverflowing = null, this._ignoreBackdropClick = null, this._scrollbarWidth = null;
      }, p.handleUpdate = function () {
        this._adjustDialog();
      }, p._getConfig = function (t) {
        return t = r({}, a, t), P.typeCheckConfig(e, t, l), t;
      }, p._showElement = function (e) {
        var n = this,
            i = P.supportsTransitionEnd() && t(this._element).hasClass(d);
        this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE || document.body.appendChild(this._element), this._element.style.display = "block", this._element.removeAttribute("aria-hidden"), this._element.scrollTop = 0, i && P.reflow(this._element), t(this._element).addClass(_), this._config.focus && this._enforceFocus();

        var s = t.Event(h.SHOWN, {
          relatedTarget: e
        }),
            r = function r() {
          n._config.focus && n._element.focus(), n._isTransitioning = !1, t(n._element).trigger(s);
        };

        i ? t(this._dialog).one(P.TRANSITION_END, r).emulateTransitionEnd(300) : r();
      }, p._enforceFocus = function () {
        var e = this;
        t(document).off(h.FOCUSIN).on(h.FOCUSIN, function (n) {
          document !== n.target && e._element !== n.target && 0 === t(e._element).has(n.target).length && e._element.focus();
        });
      }, p._setEscapeEvent = function () {
        var e = this;
        this._isShown && this._config.keyboard ? t(this._element).on(h.KEYDOWN_DISMISS, function (t) {
          27 === t.which && (t.preventDefault(), e.hide());
        }) : this._isShown || t(this._element).off(h.KEYDOWN_DISMISS);
      }, p._setResizeEvent = function () {
        var e = this;
        this._isShown ? t(window).on(h.RESIZE, function (t) {
          return e.handleUpdate(t);
        }) : t(window).off(h.RESIZE);
      }, p._hideModal = function () {
        var e = this;
        this._element.style.display = "none", this._element.setAttribute("aria-hidden", !0), this._isTransitioning = !1, this._showBackdrop(function () {
          t(document.body).removeClass(f), e._resetAdjustments(), e._resetScrollbar(), t(e._element).trigger(h.HIDDEN);
        });
      }, p._removeBackdrop = function () {
        this._backdrop && (t(this._backdrop).remove(), this._backdrop = null);
      }, p._showBackdrop = function (e) {
        var n = this,
            i = t(this._element).hasClass(d) ? d : "";

        if (this._isShown && this._config.backdrop) {
          var s = P.supportsTransitionEnd() && i;
          if (this._backdrop = document.createElement("div"), this._backdrop.className = u, i && t(this._backdrop).addClass(i), t(this._backdrop).appendTo(document.body), t(this._element).on(h.CLICK_DISMISS, function (t) {
            n._ignoreBackdropClick ? n._ignoreBackdropClick = !1 : t.target === t.currentTarget && ("static" === n._config.backdrop ? n._element.focus() : n.hide());
          }), s && P.reflow(this._backdrop), t(this._backdrop).addClass(_), !e) return;
          if (!s) return void e();
          t(this._backdrop).one(P.TRANSITION_END, e).emulateTransitionEnd(150);
        } else if (!this._isShown && this._backdrop) {
          t(this._backdrop).removeClass(_);

          var r = function r() {
            n._removeBackdrop(), e && e();
          };

          P.supportsTransitionEnd() && t(this._element).hasClass(d) ? t(this._backdrop).one(P.TRANSITION_END, r).emulateTransitionEnd(150) : r();
        } else e && e();
      }, p._adjustDialog = function () {
        var t = this._element.scrollHeight > document.documentElement.clientHeight;
        !this._isBodyOverflowing && t && (this._element.style.paddingLeft = this._scrollbarWidth + "px"), this._isBodyOverflowing && !t && (this._element.style.paddingRight = this._scrollbarWidth + "px");
      }, p._resetAdjustments = function () {
        this._element.style.paddingLeft = "", this._element.style.paddingRight = "";
      }, p._checkScrollbar = function () {
        var t = document.body.getBoundingClientRect();
        this._isBodyOverflowing = t.left + t.right < window.innerWidth, this._scrollbarWidth = this._getScrollbarWidth();
      }, p._setScrollbar = function () {
        var e = this;

        if (this._isBodyOverflowing) {
          t(g.FIXED_CONTENT).each(function (n, i) {
            var s = t(i)[0].style.paddingRight,
                r = t(i).css("padding-right");
            t(i).data("padding-right", s).css("padding-right", parseFloat(r) + e._scrollbarWidth + "px");
          }), t(g.STICKY_CONTENT).each(function (n, i) {
            var s = t(i)[0].style.marginRight,
                r = t(i).css("margin-right");
            t(i).data("margin-right", s).css("margin-right", parseFloat(r) - e._scrollbarWidth + "px");
          }), t(g.NAVBAR_TOGGLER).each(function (n, i) {
            var s = t(i)[0].style.marginRight,
                r = t(i).css("margin-right");
            t(i).data("margin-right", s).css("margin-right", parseFloat(r) + e._scrollbarWidth + "px");
          });
          var n = document.body.style.paddingRight,
              i = t("body").css("padding-right");
          t("body").data("padding-right", n).css("padding-right", parseFloat(i) + this._scrollbarWidth + "px");
        }
      }, p._resetScrollbar = function () {
        t(g.FIXED_CONTENT).each(function (e, n) {
          var i = t(n).data("padding-right");
          "undefined" != typeof i && t(n).css("padding-right", i).removeData("padding-right");
        }), t(g.STICKY_CONTENT + ", " + g.NAVBAR_TOGGLER).each(function (e, n) {
          var i = t(n).data("margin-right");
          "undefined" != typeof i && t(n).css("margin-right", i).removeData("margin-right");
        });
        var e = t("body").data("padding-right");
        "undefined" != typeof e && t("body").css("padding-right", e).removeData("padding-right");
      }, p._getScrollbarWidth = function () {
        var t = document.createElement("div");
        t.className = c, document.body.appendChild(t);
        var e = t.getBoundingClientRect().width - t.clientWidth;
        return document.body.removeChild(t), e;
      }, o._jQueryInterface = function (e, i) {
        return this.each(function () {
          var s = t(this).data(n),
              a = r({}, o.Default, t(this).data(), "object" == _typeof(e) && e);

          if (s || (s = new o(this, a), t(this).data(n, s)), "string" == typeof e) {
            if ("undefined" == typeof s[e]) throw new TypeError('No method named "' + e + '"');
            s[e](i);
          } else a.show && s.show(i);
        });
      }, s(o, null, [{
        key: "VERSION",
        get: function get() {
          return "4.0.0";
        }
      }, {
        key: "Default",
        get: function get() {
          return a;
        }
      }]), o;
    }();

    return t(document).on(h.CLICK_DATA_API, g.DATA_TOGGLE, function (e) {
      var i,
          s = this,
          o = P.getSelectorFromElement(this);
      o && (i = t(o)[0]);
      var a = t(i).data(n) ? "toggle" : r({}, t(i).data(), t(this).data());
      "A" !== this.tagName && "AREA" !== this.tagName || e.preventDefault();
      var l = t(i).one(h.SHOW, function (e) {
        e.isDefaultPrevented() || l.one(h.HIDDEN, function () {
          t(s).is(":visible") && s.focus();
        });
      });

      p._jQueryInterface.call(t(i), a, this);
    }), t.fn.modal = p._jQueryInterface, t.fn.modal.Constructor = p, t.fn.modal.noConflict = function () {
      return t.fn.modal = o, p._jQueryInterface;
    }, p;
  }(e),
      U = function (t) {
    var e = "tooltip",
        i = "bs.tooltip",
        o = "." + i,
        a = t.fn[e],
        l = new RegExp("(^|\\s)bs-tooltip\\S+", "g"),
        h = {
      animation: "boolean",
      template: "string",
      title: "(string|element|function)",
      trigger: "string",
      delay: "(number|object)",
      html: "boolean",
      selector: "(string|boolean)",
      placement: "(string|function)",
      offset: "(number|string)",
      container: "(string|element|boolean)",
      fallbackPlacement: "(string|array)",
      boundary: "(string|element)"
    },
        c = {
      AUTO: "auto",
      TOP: "top",
      RIGHT: "right",
      BOTTOM: "bottom",
      LEFT: "left"
    },
        u = {
      animation: !0,
      template: '<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>',
      trigger: "hover focus",
      title: "",
      delay: 0,
      html: !1,
      selector: !1,
      placement: "top",
      offset: 0,
      container: !1,
      fallbackPlacement: "flip",
      boundary: "scrollParent"
    },
        f = "show",
        d = "out",
        _ = {
      HIDE: "hide" + o,
      HIDDEN: "hidden" + o,
      SHOW: "show" + o,
      SHOWN: "shown" + o,
      INSERTED: "inserted" + o,
      CLICK: "click" + o,
      FOCUSIN: "focusin" + o,
      FOCUSOUT: "focusout" + o,
      MOUSEENTER: "mouseenter" + o,
      MOUSELEAVE: "mouseleave" + o
    },
        g = "fade",
        p = "show",
        m = ".tooltip-inner",
        v = ".arrow",
        E = "hover",
        T = "focus",
        y = "click",
        C = "manual",
        I = function () {
      function a(t, e) {
        if ("undefined" == typeof n) throw new TypeError("Bootstrap tooltips require Popper.js (https://popper.js.org)");
        this._isEnabled = !0, this._timeout = 0, this._hoverState = "", this._activeTrigger = {}, this._popper = null, this.element = t, this.config = this._getConfig(e), this.tip = null, this._setListeners();
      }

      var I = a.prototype;
      return I.enable = function () {
        this._isEnabled = !0;
      }, I.disable = function () {
        this._isEnabled = !1;
      }, I.toggleEnabled = function () {
        this._isEnabled = !this._isEnabled;
      }, I.toggle = function (e) {
        if (this._isEnabled) if (e) {
          var n = this.constructor.DATA_KEY,
              i = t(e.currentTarget).data(n);
          i || (i = new this.constructor(e.currentTarget, this._getDelegateConfig()), t(e.currentTarget).data(n, i)), i._activeTrigger.click = !i._activeTrigger.click, i._isWithActiveTrigger() ? i._enter(null, i) : i._leave(null, i);
        } else {
          if (t(this.getTipElement()).hasClass(p)) return void this._leave(null, this);

          this._enter(null, this);
        }
      }, I.dispose = function () {
        clearTimeout(this._timeout), t.removeData(this.element, this.constructor.DATA_KEY), t(this.element).off(this.constructor.EVENT_KEY), t(this.element).closest(".modal").off("hide.bs.modal"), this.tip && t(this.tip).remove(), this._isEnabled = null, this._timeout = null, this._hoverState = null, this._activeTrigger = null, null !== this._popper && this._popper.destroy(), this._popper = null, this.element = null, this.config = null, this.tip = null;
      }, I.show = function () {
        var e = this;
        if ("none" === t(this.element).css("display")) throw new Error("Please use show on visible elements");
        var i = t.Event(this.constructor.Event.SHOW);

        if (this.isWithContent() && this._isEnabled) {
          t(this.element).trigger(i);
          var s = t.contains(this.element.ownerDocument.documentElement, this.element);
          if (i.isDefaultPrevented() || !s) return;
          var r = this.getTipElement(),
              o = P.getUID(this.constructor.NAME);
          r.setAttribute("id", o), this.element.setAttribute("aria-describedby", o), this.setContent(), this.config.animation && t(r).addClass(g);

          var l = "function" == typeof this.config.placement ? this.config.placement.call(this, r, this.element) : this.config.placement,
              h = this._getAttachment(l);

          this.addAttachmentClass(h);
          var c = !1 === this.config.container ? document.body : t(this.config.container);
          t(r).data(this.constructor.DATA_KEY, this), t.contains(this.element.ownerDocument.documentElement, this.tip) || t(r).appendTo(c), t(this.element).trigger(this.constructor.Event.INSERTED), this._popper = new n(this.element, r, {
            placement: h,
            modifiers: {
              offset: {
                offset: this.config.offset
              },
              flip: {
                behavior: this.config.fallbackPlacement
              },
              arrow: {
                element: v
              },
              preventOverflow: {
                boundariesElement: this.config.boundary
              }
            },
            onCreate: function onCreate(t) {
              t.originalPlacement !== t.placement && e._handlePopperPlacementChange(t);
            },
            onUpdate: function onUpdate(t) {
              e._handlePopperPlacementChange(t);
            }
          }), t(r).addClass(p), "ontouchstart" in document.documentElement && t("body").children().on("mouseover", null, t.noop);

          var u = function u() {
            e.config.animation && e._fixTransition();
            var n = e._hoverState;
            e._hoverState = null, t(e.element).trigger(e.constructor.Event.SHOWN), n === d && e._leave(null, e);
          };

          P.supportsTransitionEnd() && t(this.tip).hasClass(g) ? t(this.tip).one(P.TRANSITION_END, u).emulateTransitionEnd(a._TRANSITION_DURATION) : u();
        }
      }, I.hide = function (e) {
        var n = this,
            i = this.getTipElement(),
            s = t.Event(this.constructor.Event.HIDE),
            r = function r() {
          n._hoverState !== f && i.parentNode && i.parentNode.removeChild(i), n._cleanTipClass(), n.element.removeAttribute("aria-describedby"), t(n.element).trigger(n.constructor.Event.HIDDEN), null !== n._popper && n._popper.destroy(), e && e();
        };

        t(this.element).trigger(s), s.isDefaultPrevented() || (t(i).removeClass(p), "ontouchstart" in document.documentElement && t("body").children().off("mouseover", null, t.noop), this._activeTrigger[y] = !1, this._activeTrigger[T] = !1, this._activeTrigger[E] = !1, P.supportsTransitionEnd() && t(this.tip).hasClass(g) ? t(i).one(P.TRANSITION_END, r).emulateTransitionEnd(150) : r(), this._hoverState = "");
      }, I.update = function () {
        null !== this._popper && this._popper.scheduleUpdate();
      }, I.isWithContent = function () {
        return Boolean(this.getTitle());
      }, I.addAttachmentClass = function (e) {
        t(this.getTipElement()).addClass("bs-tooltip-" + e);
      }, I.getTipElement = function () {
        return this.tip = this.tip || t(this.config.template)[0], this.tip;
      }, I.setContent = function () {
        var e = t(this.getTipElement());
        this.setElementContent(e.find(m), this.getTitle()), e.removeClass(g + " " + p);
      }, I.setElementContent = function (e, n) {
        var i = this.config.html;
        "object" == _typeof(n) && (n.nodeType || n.jquery) ? i ? t(n).parent().is(e) || e.empty().append(n) : e.text(t(n).text()) : e[i ? "html" : "text"](n);
      }, I.getTitle = function () {
        var t = this.element.getAttribute("data-original-title");
        return t || (t = "function" == typeof this.config.title ? this.config.title.call(this.element) : this.config.title), t;
      }, I._getAttachment = function (t) {
        return c[t.toUpperCase()];
      }, I._setListeners = function () {
        var e = this;
        this.config.trigger.split(" ").forEach(function (n) {
          if ("click" === n) t(e.element).on(e.constructor.Event.CLICK, e.config.selector, function (t) {
            return e.toggle(t);
          });else if (n !== C) {
            var i = n === E ? e.constructor.Event.MOUSEENTER : e.constructor.Event.FOCUSIN,
                s = n === E ? e.constructor.Event.MOUSELEAVE : e.constructor.Event.FOCUSOUT;
            t(e.element).on(i, e.config.selector, function (t) {
              return e._enter(t);
            }).on(s, e.config.selector, function (t) {
              return e._leave(t);
            });
          }
          t(e.element).closest(".modal").on("hide.bs.modal", function () {
            return e.hide();
          });
        }), this.config.selector ? this.config = r({}, this.config, {
          trigger: "manual",
          selector: ""
        }) : this._fixTitle();
      }, I._fixTitle = function () {
        var t = _typeof(this.element.getAttribute("data-original-title"));

        (this.element.getAttribute("title") || "string" !== t) && (this.element.setAttribute("data-original-title", this.element.getAttribute("title") || ""), this.element.setAttribute("title", ""));
      }, I._enter = function (e, n) {
        var i = this.constructor.DATA_KEY;
        (n = n || t(e.currentTarget).data(i)) || (n = new this.constructor(e.currentTarget, this._getDelegateConfig()), t(e.currentTarget).data(i, n)), e && (n._activeTrigger["focusin" === e.type ? T : E] = !0), t(n.getTipElement()).hasClass(p) || n._hoverState === f ? n._hoverState = f : (clearTimeout(n._timeout), n._hoverState = f, n.config.delay && n.config.delay.show ? n._timeout = setTimeout(function () {
          n._hoverState === f && n.show();
        }, n.config.delay.show) : n.show());
      }, I._leave = function (e, n) {
        var i = this.constructor.DATA_KEY;
        (n = n || t(e.currentTarget).data(i)) || (n = new this.constructor(e.currentTarget, this._getDelegateConfig()), t(e.currentTarget).data(i, n)), e && (n._activeTrigger["focusout" === e.type ? T : E] = !1), n._isWithActiveTrigger() || (clearTimeout(n._timeout), n._hoverState = d, n.config.delay && n.config.delay.hide ? n._timeout = setTimeout(function () {
          n._hoverState === d && n.hide();
        }, n.config.delay.hide) : n.hide());
      }, I._isWithActiveTrigger = function () {
        for (var t in this._activeTrigger) {
          if (this._activeTrigger[t]) return !0;
        }

        return !1;
      }, I._getConfig = function (n) {
        return "number" == typeof (n = r({}, this.constructor.Default, t(this.element).data(), n)).delay && (n.delay = {
          show: n.delay,
          hide: n.delay
        }), "number" == typeof n.title && (n.title = n.title.toString()), "number" == typeof n.content && (n.content = n.content.toString()), P.typeCheckConfig(e, n, this.constructor.DefaultType), n;
      }, I._getDelegateConfig = function () {
        var t = {};
        if (this.config) for (var e in this.config) {
          this.constructor.Default[e] !== this.config[e] && (t[e] = this.config[e]);
        }
        return t;
      }, I._cleanTipClass = function () {
        var e = t(this.getTipElement()),
            n = e.attr("class").match(l);
        null !== n && n.length > 0 && e.removeClass(n.join(""));
      }, I._handlePopperPlacementChange = function (t) {
        this._cleanTipClass(), this.addAttachmentClass(this._getAttachment(t.placement));
      }, I._fixTransition = function () {
        var e = this.getTipElement(),
            n = this.config.animation;
        null === e.getAttribute("x-placement") && (t(e).removeClass(g), this.config.animation = !1, this.hide(), this.show(), this.config.animation = n);
      }, a._jQueryInterface = function (e) {
        return this.each(function () {
          var n = t(this).data(i),
              s = "object" == _typeof(e) && e;

          if ((n || !/dispose|hide/.test(e)) && (n || (n = new a(this, s), t(this).data(i, n)), "string" == typeof e)) {
            if ("undefined" == typeof n[e]) throw new TypeError('No method named "' + e + '"');
            n[e]();
          }
        });
      }, s(a, null, [{
        key: "VERSION",
        get: function get() {
          return "4.0.0";
        }
      }, {
        key: "Default",
        get: function get() {
          return u;
        }
      }, {
        key: "NAME",
        get: function get() {
          return e;
        }
      }, {
        key: "DATA_KEY",
        get: function get() {
          return i;
        }
      }, {
        key: "Event",
        get: function get() {
          return _;
        }
      }, {
        key: "EVENT_KEY",
        get: function get() {
          return o;
        }
      }, {
        key: "DefaultType",
        get: function get() {
          return h;
        }
      }]), a;
    }();

    return t.fn[e] = I._jQueryInterface, t.fn[e].Constructor = I, t.fn[e].noConflict = function () {
      return t.fn[e] = a, I._jQueryInterface;
    }, I;
  }(e),
      x = function (t) {
    var e = "popover",
        n = "bs.popover",
        i = "." + n,
        o = t.fn[e],
        a = new RegExp("(^|\\s)bs-popover\\S+", "g"),
        l = r({}, U.Default, {
      placement: "right",
      trigger: "click",
      content: "",
      template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'
    }),
        h = r({}, U.DefaultType, {
      content: "(string|element|function)"
    }),
        c = "fade",
        u = "show",
        f = ".popover-header",
        d = ".popover-body",
        _ = {
      HIDE: "hide" + i,
      HIDDEN: "hidden" + i,
      SHOW: "show" + i,
      SHOWN: "shown" + i,
      INSERTED: "inserted" + i,
      CLICK: "click" + i,
      FOCUSIN: "focusin" + i,
      FOCUSOUT: "focusout" + i,
      MOUSEENTER: "mouseenter" + i,
      MOUSELEAVE: "mouseleave" + i
    },
        g = function (r) {
      var o, g;

      function p() {
        return r.apply(this, arguments) || this;
      }

      g = r, (o = p).prototype = Object.create(g.prototype), o.prototype.constructor = o, o.__proto__ = g;
      var m = p.prototype;
      return m.isWithContent = function () {
        return this.getTitle() || this._getContent();
      }, m.addAttachmentClass = function (e) {
        t(this.getTipElement()).addClass("bs-popover-" + e);
      }, m.getTipElement = function () {
        return this.tip = this.tip || t(this.config.template)[0], this.tip;
      }, m.setContent = function () {
        var e = t(this.getTipElement());
        this.setElementContent(e.find(f), this.getTitle());

        var n = this._getContent();

        "function" == typeof n && (n = n.call(this.element)), this.setElementContent(e.find(d), n), e.removeClass(c + " " + u);
      }, m._getContent = function () {
        return this.element.getAttribute("data-content") || this.config.content;
      }, m._cleanTipClass = function () {
        var e = t(this.getTipElement()),
            n = e.attr("class").match(a);
        null !== n && n.length > 0 && e.removeClass(n.join(""));
      }, p._jQueryInterface = function (e) {
        return this.each(function () {
          var i = t(this).data(n),
              s = "object" == _typeof(e) ? e : null;

          if ((i || !/destroy|hide/.test(e)) && (i || (i = new p(this, s), t(this).data(n, i)), "string" == typeof e)) {
            if ("undefined" == typeof i[e]) throw new TypeError('No method named "' + e + '"');
            i[e]();
          }
        });
      }, s(p, null, [{
        key: "VERSION",
        get: function get() {
          return "4.0.0";
        }
      }, {
        key: "Default",
        get: function get() {
          return l;
        }
      }, {
        key: "NAME",
        get: function get() {
          return e;
        }
      }, {
        key: "DATA_KEY",
        get: function get() {
          return n;
        }
      }, {
        key: "Event",
        get: function get() {
          return _;
        }
      }, {
        key: "EVENT_KEY",
        get: function get() {
          return i;
        }
      }, {
        key: "DefaultType",
        get: function get() {
          return h;
        }
      }]), p;
    }(U);

    return t.fn[e] = g._jQueryInterface, t.fn[e].Constructor = g, t.fn[e].noConflict = function () {
      return t.fn[e] = o, g._jQueryInterface;
    }, g;
  }(e),
      K = function (t) {
    var e = "scrollspy",
        n = "bs.scrollspy",
        i = "." + n,
        o = t.fn[e],
        a = {
      offset: 10,
      method: "auto",
      target: ""
    },
        l = {
      offset: "number",
      method: "string",
      target: "(string|element)"
    },
        h = {
      ACTIVATE: "activate" + i,
      SCROLL: "scroll" + i,
      LOAD_DATA_API: "load" + i + ".data-api"
    },
        c = "dropdown-item",
        u = "active",
        f = {
      DATA_SPY: '[data-spy="scroll"]',
      ACTIVE: ".active",
      NAV_LIST_GROUP: ".nav, .list-group",
      NAV_LINKS: ".nav-link",
      NAV_ITEMS: ".nav-item",
      LIST_ITEMS: ".list-group-item",
      DROPDOWN: ".dropdown",
      DROPDOWN_ITEMS: ".dropdown-item",
      DROPDOWN_TOGGLE: ".dropdown-toggle"
    },
        d = "offset",
        _ = "position",
        g = function () {
      function o(e, n) {
        var i = this;
        this._element = e, this._scrollElement = "BODY" === e.tagName ? window : e, this._config = this._getConfig(n), this._selector = this._config.target + " " + f.NAV_LINKS + "," + this._config.target + " " + f.LIST_ITEMS + "," + this._config.target + " " + f.DROPDOWN_ITEMS, this._offsets = [], this._targets = [], this._activeTarget = null, this._scrollHeight = 0, t(this._scrollElement).on(h.SCROLL, function (t) {
          return i._process(t);
        }), this.refresh(), this._process();
      }

      var g = o.prototype;
      return g.refresh = function () {
        var e = this,
            n = this._scrollElement === this._scrollElement.window ? d : _,
            i = "auto" === this._config.method ? n : this._config.method,
            s = i === _ ? this._getScrollTop() : 0;
        this._offsets = [], this._targets = [], this._scrollHeight = this._getScrollHeight(), t.makeArray(t(this._selector)).map(function (e) {
          var n,
              r = P.getSelectorFromElement(e);

          if (r && (n = t(r)[0]), n) {
            var o = n.getBoundingClientRect();
            if (o.width || o.height) return [t(n)[i]().top + s, r];
          }

          return null;
        }).filter(function (t) {
          return t;
        }).sort(function (t, e) {
          return t[0] - e[0];
        }).forEach(function (t) {
          e._offsets.push(t[0]), e._targets.push(t[1]);
        });
      }, g.dispose = function () {
        t.removeData(this._element, n), t(this._scrollElement).off(i), this._element = null, this._scrollElement = null, this._config = null, this._selector = null, this._offsets = null, this._targets = null, this._activeTarget = null, this._scrollHeight = null;
      }, g._getConfig = function (n) {
        if ("string" != typeof (n = r({}, a, n)).target) {
          var i = t(n.target).attr("id");
          i || (i = P.getUID(e), t(n.target).attr("id", i)), n.target = "#" + i;
        }

        return P.typeCheckConfig(e, n, l), n;
      }, g._getScrollTop = function () {
        return this._scrollElement === window ? this._scrollElement.pageYOffset : this._scrollElement.scrollTop;
      }, g._getScrollHeight = function () {
        return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight);
      }, g._getOffsetHeight = function () {
        return this._scrollElement === window ? window.innerHeight : this._scrollElement.getBoundingClientRect().height;
      }, g._process = function () {
        var t = this._getScrollTop() + this._config.offset,
            e = this._getScrollHeight(),
            n = this._config.offset + e - this._getOffsetHeight();

        if (this._scrollHeight !== e && this.refresh(), t >= n) {
          var i = this._targets[this._targets.length - 1];
          this._activeTarget !== i && this._activate(i);
        } else {
          if (this._activeTarget && t < this._offsets[0] && this._offsets[0] > 0) return this._activeTarget = null, void this._clear();

          for (var s = this._offsets.length; s--;) {
            this._activeTarget !== this._targets[s] && t >= this._offsets[s] && ("undefined" == typeof this._offsets[s + 1] || t < this._offsets[s + 1]) && this._activate(this._targets[s]);
          }
        }
      }, g._activate = function (e) {
        this._activeTarget = e, this._clear();

        var n = this._selector.split(",");

        n = n.map(function (t) {
          return t + '[data-target="' + e + '"],' + t + '[href="' + e + '"]';
        });
        var i = t(n.join(","));
        i.hasClass(c) ? (i.closest(f.DROPDOWN).find(f.DROPDOWN_TOGGLE).addClass(u), i.addClass(u)) : (i.addClass(u), i.parents(f.NAV_LIST_GROUP).prev(f.NAV_LINKS + ", " + f.LIST_ITEMS).addClass(u), i.parents(f.NAV_LIST_GROUP).prev(f.NAV_ITEMS).children(f.NAV_LINKS).addClass(u)), t(this._scrollElement).trigger(h.ACTIVATE, {
          relatedTarget: e
        });
      }, g._clear = function () {
        t(this._selector).filter(f.ACTIVE).removeClass(u);
      }, o._jQueryInterface = function (e) {
        return this.each(function () {
          var i = t(this).data(n);

          if (i || (i = new o(this, "object" == _typeof(e) && e), t(this).data(n, i)), "string" == typeof e) {
            if ("undefined" == typeof i[e]) throw new TypeError('No method named "' + e + '"');
            i[e]();
          }
        });
      }, s(o, null, [{
        key: "VERSION",
        get: function get() {
          return "4.0.0";
        }
      }, {
        key: "Default",
        get: function get() {
          return a;
        }
      }]), o;
    }();

    return t(window).on(h.LOAD_DATA_API, function () {
      for (var e = t.makeArray(t(f.DATA_SPY)), n = e.length; n--;) {
        var i = t(e[n]);

        g._jQueryInterface.call(i, i.data());
      }
    }), t.fn[e] = g._jQueryInterface, t.fn[e].Constructor = g, t.fn[e].noConflict = function () {
      return t.fn[e] = o, g._jQueryInterface;
    }, g;
  }(e),
      V = function (t) {
    var e = "bs.tab",
        n = "." + e,
        i = t.fn.tab,
        r = {
      HIDE: "hide" + n,
      HIDDEN: "hidden" + n,
      SHOW: "show" + n,
      SHOWN: "shown" + n,
      CLICK_DATA_API: "click.bs.tab.data-api"
    },
        o = "dropdown-menu",
        a = "active",
        l = "disabled",
        h = "fade",
        c = "show",
        u = ".dropdown",
        f = ".nav, .list-group",
        d = ".active",
        _ = "> li > .active",
        g = '[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]',
        p = ".dropdown-toggle",
        m = "> .dropdown-menu .active",
        v = function () {
      function n(t) {
        this._element = t;
      }

      var i = n.prototype;
      return i.show = function () {
        var e = this;

        if (!(this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE && t(this._element).hasClass(a) || t(this._element).hasClass(l))) {
          var n,
              i,
              s = t(this._element).closest(f)[0],
              o = P.getSelectorFromElement(this._element);

          if (s) {
            var h = "UL" === s.nodeName ? _ : d;
            i = (i = t.makeArray(t(s).find(h)))[i.length - 1];
          }

          var c = t.Event(r.HIDE, {
            relatedTarget: this._element
          }),
              u = t.Event(r.SHOW, {
            relatedTarget: i
          });

          if (i && t(i).trigger(c), t(this._element).trigger(u), !u.isDefaultPrevented() && !c.isDefaultPrevented()) {
            o && (n = t(o)[0]), this._activate(this._element, s);

            var g = function g() {
              var n = t.Event(r.HIDDEN, {
                relatedTarget: e._element
              }),
                  s = t.Event(r.SHOWN, {
                relatedTarget: i
              });
              t(i).trigger(n), t(e._element).trigger(s);
            };

            n ? this._activate(n, n.parentNode, g) : g();
          }
        }
      }, i.dispose = function () {
        t.removeData(this._element, e), this._element = null;
      }, i._activate = function (e, n, i) {
        var s = this,
            r = ("UL" === n.nodeName ? t(n).find(_) : t(n).children(d))[0],
            o = i && P.supportsTransitionEnd() && r && t(r).hasClass(h),
            a = function a() {
          return s._transitionComplete(e, r, i);
        };

        r && o ? t(r).one(P.TRANSITION_END, a).emulateTransitionEnd(150) : a();
      }, i._transitionComplete = function (e, n, i) {
        if (n) {
          t(n).removeClass(c + " " + a);
          var s = t(n.parentNode).find(m)[0];
          s && t(s).removeClass(a), "tab" === n.getAttribute("role") && n.setAttribute("aria-selected", !1);
        }

        if (t(e).addClass(a), "tab" === e.getAttribute("role") && e.setAttribute("aria-selected", !0), P.reflow(e), t(e).addClass(c), e.parentNode && t(e.parentNode).hasClass(o)) {
          var r = t(e).closest(u)[0];
          r && t(r).find(p).addClass(a), e.setAttribute("aria-expanded", !0);
        }

        i && i();
      }, n._jQueryInterface = function (i) {
        return this.each(function () {
          var s = t(this),
              r = s.data(e);

          if (r || (r = new n(this), s.data(e, r)), "string" == typeof i) {
            if ("undefined" == typeof r[i]) throw new TypeError('No method named "' + i + '"');
            r[i]();
          }
        });
      }, s(n, null, [{
        key: "VERSION",
        get: function get() {
          return "4.0.0";
        }
      }]), n;
    }();

    return t(document).on(r.CLICK_DATA_API, g, function (e) {
      e.preventDefault(), v._jQueryInterface.call(t(this), "show");
    }), t.fn.tab = v._jQueryInterface, t.fn.tab.Constructor = v, t.fn.tab.noConflict = function () {
      return t.fn.tab = i, v._jQueryInterface;
    }, v;
  }(e);

  !function (t) {
    if ("undefined" == typeof t) throw new TypeError("Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript.");
    var e = t.fn.jquery.split(" ")[0].split(".");
    if (e[0] < 2 && e[1] < 9 || 1 === e[0] && 9 === e[1] && e[2] < 1 || e[0] >= 4) throw new Error("Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0");
  }(e), t.Util = P, t.Alert = L, t.Button = R, t.Carousel = j, t.Collapse = H, t.Dropdown = W, t.Modal = M, t.Popover = x, t.Scrollspy = K, t.Tab = V, t.Tooltip = U, Object.defineProperty(t, "__esModule", {
    value: !0
  });
});
/*! Magnific Popup - v1.1.0 - 2016-02-20
* http://dimsemenov.com/plugins/magnific-popup/
* Copyright (c) 2016 Dmitry Semenov; */

!function (a) {
  "function" == typeof define && define.amd ? define(["jquery"], a) : a("object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) ? require("jquery") : window.jQuery || window.Zepto);
}(function (a) {
  var b,
      c,
      d,
      e,
      f,
      g,
      h = "Close",
      i = "BeforeClose",
      j = "AfterClose",
      k = "BeforeAppend",
      l = "MarkupParse",
      m = "Open",
      n = "Change",
      o = "mfp",
      p = "." + o,
      q = "mfp-ready",
      r = "mfp-removing",
      s = "mfp-prevent-close",
      t = function t() {},
      u = !!window.jQuery,
      v = a(window),
      w = function w(a, c) {
    b.ev.on(o + a + p, c);
  },
      x = function x(b, c, d, e) {
    var f = document.createElement("div");
    return f.className = "mfp-" + b, d && (f.innerHTML = d), e ? c && c.appendChild(f) : (f = a(f), c && f.appendTo(c)), f;
  },
      y = function y(c, d) {
    b.ev.triggerHandler(o + c, d), b.st.callbacks && (c = c.charAt(0).toLowerCase() + c.slice(1), b.st.callbacks[c] && b.st.callbacks[c].apply(b, a.isArray(d) ? d : [d]));
  },
      z = function z(c) {
    return c === g && b.currTemplate.closeBtn || (b.currTemplate.closeBtn = a(b.st.closeMarkup.replace("%title%", b.st.tClose)), g = c), b.currTemplate.closeBtn;
  },
      A = function A() {
    a.magnificPopup.instance || (b = new t(), b.init(), a.magnificPopup.instance = b);
  },
      B = function B() {
    var a = document.createElement("p").style,
        b = ["ms", "O", "Moz", "Webkit"];
    if (void 0 !== a.transition) return !0;

    for (; b.length;) {
      if (b.pop() + "Transition" in a) return !0;
    }

    return !1;
  };

  t.prototype = {
    constructor: t,
    init: function init() {
      var c = navigator.appVersion;
      b.isLowIE = b.isIE8 = document.all && !document.addEventListener, b.isAndroid = /android/gi.test(c), b.isIOS = /iphone|ipad|ipod/gi.test(c), b.supportsTransition = B(), b.probablyMobile = b.isAndroid || b.isIOS || /(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(navigator.userAgent), d = a(document), b.popupsCache = {};
    },
    open: function open(c) {
      var e;

      if (c.isObj === !1) {
        b.items = c.items.toArray(), b.index = 0;
        var g,
            h = c.items;

        for (e = 0; e < h.length; e++) {
          if (g = h[e], g.parsed && (g = g.el[0]), g === c.el[0]) {
            b.index = e;
            break;
          }
        }
      } else b.items = a.isArray(c.items) ? c.items : [c.items], b.index = c.index || 0;

      if (b.isOpen) return void b.updateItemHTML();
      b.types = [], f = "", c.mainEl && c.mainEl.length ? b.ev = c.mainEl.eq(0) : b.ev = d, c.key ? (b.popupsCache[c.key] || (b.popupsCache[c.key] = {}), b.currTemplate = b.popupsCache[c.key]) : b.currTemplate = {}, b.st = a.extend(!0, {}, a.magnificPopup.defaults, c), b.fixedContentPos = "auto" === b.st.fixedContentPos ? !b.probablyMobile : b.st.fixedContentPos, b.st.modal && (b.st.closeOnContentClick = !1, b.st.closeOnBgClick = !1, b.st.showCloseBtn = !1, b.st.enableEscapeKey = !1), b.bgOverlay || (b.bgOverlay = x("bg").on("click" + p, function () {
        b.close();
      }), b.wrap = x("wrap").attr("tabindex", -1).on("click" + p, function (a) {
        b._checkIfClose(a.target) && b.close();
      }), b.container = x("container", b.wrap)), b.contentContainer = x("content"), b.st.preloader && (b.preloader = x("preloader", b.container, b.st.tLoading));
      var i = a.magnificPopup.modules;

      for (e = 0; e < i.length; e++) {
        var j = i[e];
        j = j.charAt(0).toUpperCase() + j.slice(1), b["init" + j].call(b);
      }

      y("BeforeOpen"), b.st.showCloseBtn && (b.st.closeBtnInside ? (w(l, function (a, b, c, d) {
        c.close_replaceWith = z(d.type);
      }), f += " mfp-close-btn-in") : b.wrap.append(z())), b.st.alignTop && (f += " mfp-align-top"), b.fixedContentPos ? b.wrap.css({
        overflow: b.st.overflowY,
        overflowX: "hidden",
        overflowY: b.st.overflowY
      }) : b.wrap.css({
        top: v.scrollTop(),
        position: "absolute"
      }), (b.st.fixedBgPos === !1 || "auto" === b.st.fixedBgPos && !b.fixedContentPos) && b.bgOverlay.css({
        height: d.height(),
        position: "absolute"
      }), b.st.enableEscapeKey && d.on("keyup" + p, function (a) {
        27 === a.keyCode && b.close();
      }), v.on("resize" + p, function () {
        b.updateSize();
      }), b.st.closeOnContentClick || (f += " mfp-auto-cursor"), f && b.wrap.addClass(f);
      var k = b.wH = v.height(),
          n = {};

      if (b.fixedContentPos && b._hasScrollBar(k)) {
        var o = b._getScrollbarSize();

        o && (n.marginRight = o);
      }

      b.fixedContentPos && (b.isIE7 ? a("body, html").css("overflow", "hidden") : n.overflow = "hidden");
      var r = b.st.mainClass;
      return b.isIE7 && (r += " mfp-ie7"), r && b._addClassToMFP(r), b.updateItemHTML(), y("BuildControls"), a("html").css(n), b.bgOverlay.add(b.wrap).prependTo(b.st.prependTo || a(document.body)), b._lastFocusedEl = document.activeElement, setTimeout(function () {
        b.content ? (b._addClassToMFP(q), b._setFocus()) : b.bgOverlay.addClass(q), d.on("focusin" + p, b._onFocusIn);
      }, 16), b.isOpen = !0, b.updateSize(k), y(m), c;
    },
    close: function close() {
      b.isOpen && (y(i), b.isOpen = !1, b.st.removalDelay && !b.isLowIE && b.supportsTransition ? (b._addClassToMFP(r), setTimeout(function () {
        b._close();
      }, b.st.removalDelay)) : b._close());
    },
    _close: function _close() {
      y(h);
      var c = r + " " + q + " ";

      if (b.bgOverlay.detach(), b.wrap.detach(), b.container.empty(), b.st.mainClass && (c += b.st.mainClass + " "), b._removeClassFromMFP(c), b.fixedContentPos) {
        var e = {
          marginRight: ""
        };
        b.isIE7 ? a("body, html").css("overflow", "") : e.overflow = "", a("html").css(e);
      }

      d.off("keyup" + p + " focusin" + p), b.ev.off(p), b.wrap.attr("class", "mfp-wrap").removeAttr("style"), b.bgOverlay.attr("class", "mfp-bg"), b.container.attr("class", "mfp-container"), !b.st.showCloseBtn || b.st.closeBtnInside && b.currTemplate[b.currItem.type] !== !0 || b.currTemplate.closeBtn && b.currTemplate.closeBtn.detach(), b.st.autoFocusLast && b._lastFocusedEl && a(b._lastFocusedEl).focus(), b.currItem = null, b.content = null, b.currTemplate = null, b.prevHeight = 0, y(j);
    },
    updateSize: function updateSize(a) {
      if (b.isIOS) {
        var c = document.documentElement.clientWidth / window.innerWidth,
            d = window.innerHeight * c;
        b.wrap.css("height", d), b.wH = d;
      } else b.wH = a || v.height();

      b.fixedContentPos || b.wrap.css("height", b.wH), y("Resize");
    },
    updateItemHTML: function updateItemHTML() {
      var c = b.items[b.index];
      b.contentContainer.detach(), b.content && b.content.detach(), c.parsed || (c = b.parseEl(b.index));
      var d = c.type;

      if (y("BeforeChange", [b.currItem ? b.currItem.type : "", d]), b.currItem = c, !b.currTemplate[d]) {
        var f = b.st[d] ? b.st[d].markup : !1;
        y("FirstMarkupParse", f), f ? b.currTemplate[d] = a(f) : b.currTemplate[d] = !0;
      }

      e && e !== c.type && b.container.removeClass("mfp-" + e + "-holder");
      var g = b["get" + d.charAt(0).toUpperCase() + d.slice(1)](c, b.currTemplate[d]);
      b.appendContent(g, d), c.preloaded = !0, y(n, c), e = c.type, b.container.prepend(b.contentContainer), y("AfterChange");
    },
    appendContent: function appendContent(a, c) {
      b.content = a, a ? b.st.showCloseBtn && b.st.closeBtnInside && b.currTemplate[c] === !0 ? b.content.find(".mfp-close").length || b.content.append(z()) : b.content = a : b.content = "", y(k), b.container.addClass("mfp-" + c + "-holder"), b.contentContainer.append(b.content);
    },
    parseEl: function parseEl(c) {
      var d,
          e = b.items[c];

      if (e.tagName ? e = {
        el: a(e)
      } : (d = e.type, e = {
        data: e,
        src: e.src
      }), e.el) {
        for (var f = b.types, g = 0; g < f.length; g++) {
          if (e.el.hasClass("mfp-" + f[g])) {
            d = f[g];
            break;
          }
        }

        e.src = e.el.attr("data-mfp-src"), e.src || (e.src = e.el.attr("href"));
      }

      return e.type = d || b.st.type || "inline", e.index = c, e.parsed = !0, b.items[c] = e, y("ElementParse", e), b.items[c];
    },
    addGroup: function addGroup(a, c) {
      var d = function d(_d) {
        _d.mfpEl = this, b._openClick(_d, a, c);
      };

      c || (c = {});
      var e = "click.magnificPopup";
      c.mainEl = a, c.items ? (c.isObj = !0, a.off(e).on(e, d)) : (c.isObj = !1, c.delegate ? a.off(e).on(e, c.delegate, d) : (c.items = a, a.off(e).on(e, d)));
    },
    _openClick: function _openClick(c, d, e) {
      var f = void 0 !== e.midClick ? e.midClick : a.magnificPopup.defaults.midClick;

      if (f || !(2 === c.which || c.ctrlKey || c.metaKey || c.altKey || c.shiftKey)) {
        var g = void 0 !== e.disableOn ? e.disableOn : a.magnificPopup.defaults.disableOn;
        if (g) if (a.isFunction(g)) {
          if (!g.call(b)) return !0;
        } else if (v.width() < g) return !0;
        c.type && (c.preventDefault(), b.isOpen && c.stopPropagation()), e.el = a(c.mfpEl), e.delegate && (e.items = d.find(e.delegate)), b.open(e);
      }
    },
    updateStatus: function updateStatus(a, d) {
      if (b.preloader) {
        c !== a && b.container.removeClass("mfp-s-" + c), d || "loading" !== a || (d = b.st.tLoading);
        var e = {
          status: a,
          text: d
        };
        y("UpdateStatus", e), a = e.status, d = e.text, b.preloader.html(d), b.preloader.find("a").on("click", function (a) {
          a.stopImmediatePropagation();
        }), b.container.addClass("mfp-s-" + a), c = a;
      }
    },
    _checkIfClose: function _checkIfClose(c) {
      if (!a(c).hasClass(s)) {
        var d = b.st.closeOnContentClick,
            e = b.st.closeOnBgClick;
        if (d && e) return !0;
        if (!b.content || a(c).hasClass("mfp-close") || b.preloader && c === b.preloader[0]) return !0;

        if (c === b.content[0] || a.contains(b.content[0], c)) {
          if (d) return !0;
        } else if (e && a.contains(document, c)) return !0;

        return !1;
      }
    },
    _addClassToMFP: function _addClassToMFP(a) {
      b.bgOverlay.addClass(a), b.wrap.addClass(a);
    },
    _removeClassFromMFP: function _removeClassFromMFP(a) {
      this.bgOverlay.removeClass(a), b.wrap.removeClass(a);
    },
    _hasScrollBar: function _hasScrollBar(a) {
      return (b.isIE7 ? d.height() : document.body.scrollHeight) > (a || v.height());
    },
    _setFocus: function _setFocus() {
      (b.st.focus ? b.content.find(b.st.focus).eq(0) : b.wrap).focus();
    },
    _onFocusIn: function _onFocusIn(c) {
      return c.target === b.wrap[0] || a.contains(b.wrap[0], c.target) ? void 0 : (b._setFocus(), !1);
    },
    _parseMarkup: function _parseMarkup(b, c, d) {
      var e;
      d.data && (c = a.extend(d.data, c)), y(l, [b, c, d]), a.each(c, function (c, d) {
        if (void 0 === d || d === !1) return !0;

        if (e = c.split("_"), e.length > 1) {
          var f = b.find(p + "-" + e[0]);

          if (f.length > 0) {
            var g = e[1];
            "replaceWith" === g ? f[0] !== d[0] && f.replaceWith(d) : "img" === g ? f.is("img") ? f.attr("src", d) : f.replaceWith(a("<img>").attr("src", d).attr("class", f.attr("class"))) : f.attr(e[1], d);
          }
        } else b.find(p + "-" + c).html(d);
      });
    },
    _getScrollbarSize: function _getScrollbarSize() {
      if (void 0 === b.scrollbarSize) {
        var a = document.createElement("div");
        a.style.cssText = "width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;", document.body.appendChild(a), b.scrollbarSize = a.offsetWidth - a.clientWidth, document.body.removeChild(a);
      }

      return b.scrollbarSize;
    }
  }, a.magnificPopup = {
    instance: null,
    proto: t.prototype,
    modules: [],
    open: function open(b, c) {
      return A(), b = b ? a.extend(!0, {}, b) : {}, b.isObj = !0, b.index = c || 0, this.instance.open(b);
    },
    close: function close() {
      return a.magnificPopup.instance && a.magnificPopup.instance.close();
    },
    registerModule: function registerModule(b, c) {
      c.options && (a.magnificPopup.defaults[b] = c.options), a.extend(this.proto, c.proto), this.modules.push(b);
    },
    defaults: {
      disableOn: 0,
      key: null,
      midClick: !1,
      mainClass: "",
      preloader: !0,
      focus: "",
      closeOnContentClick: !1,
      closeOnBgClick: !0,
      closeBtnInside: !0,
      showCloseBtn: !0,
      enableEscapeKey: !0,
      modal: !1,
      alignTop: !1,
      removalDelay: 0,
      prependTo: null,
      fixedContentPos: "auto",
      fixedBgPos: "auto",
      overflowY: "auto",
      closeMarkup: '<button title="%title%" type="button" class="mfp-close">&#215;</button>',
      tClose: "Close (Esc)",
      tLoading: "Loading...",
      autoFocusLast: !0
    }
  }, a.fn.magnificPopup = function (c) {
    A();
    var d = a(this);
    if ("string" == typeof c) {
      if ("open" === c) {
        var e,
            f = u ? d.data("magnificPopup") : d[0].magnificPopup,
            g = parseInt(arguments[1], 10) || 0;
        f.items ? e = f.items[g] : (e = d, f.delegate && (e = e.find(f.delegate)), e = e.eq(g)), b._openClick({
          mfpEl: e
        }, d, f);
      } else b.isOpen && b[c].apply(b, Array.prototype.slice.call(arguments, 1));
    } else c = a.extend(!0, {}, c), u ? d.data("magnificPopup", c) : d[0].magnificPopup = c, b.addGroup(d, c);
    return d;
  };

  var C,
      D,
      E,
      F = "inline",
      G = function G() {
    E && (D.after(E.addClass(C)).detach(), E = null);
  };

  a.magnificPopup.registerModule(F, {
    options: {
      hiddenClass: "hide",
      markup: "",
      tNotFound: "Content not found"
    },
    proto: {
      initInline: function initInline() {
        b.types.push(F), w(h + "." + F, function () {
          G();
        });
      },
      getInline: function getInline(c, d) {
        if (G(), c.src) {
          var e = b.st.inline,
              f = a(c.src);

          if (f.length) {
            var g = f[0].parentNode;
            g && g.tagName && (D || (C = e.hiddenClass, D = x(C), C = "mfp-" + C), E = f.after(D).detach().removeClass(C)), b.updateStatus("ready");
          } else b.updateStatus("error", e.tNotFound), f = a("<div>");

          return c.inlineElement = f, f;
        }

        return b.updateStatus("ready"), b._parseMarkup(d, {}, c), d;
      }
    }
  });

  var H,
      I = "ajax",
      J = function J() {
    H && a(document.body).removeClass(H);
  },
      K = function K() {
    J(), b.req && b.req.abort();
  };

  a.magnificPopup.registerModule(I, {
    options: {
      settings: null,
      cursor: "mfp-ajax-cur",
      tError: '<a href="%url%">The content</a> could not be loaded.'
    },
    proto: {
      initAjax: function initAjax() {
        b.types.push(I), H = b.st.ajax.cursor, w(h + "." + I, K), w("BeforeChange." + I, K);
      },
      getAjax: function getAjax(c) {
        H && a(document.body).addClass(H), b.updateStatus("loading");
        var d = a.extend({
          url: c.src,
          success: function success(d, e, f) {
            var g = {
              data: d,
              xhr: f
            };
            y("ParseAjax", g), b.appendContent(a(g.data), I), c.finished = !0, J(), b._setFocus(), setTimeout(function () {
              b.wrap.addClass(q);
            }, 16), b.updateStatus("ready"), y("AjaxContentAdded");
          },
          error: function error() {
            J(), c.finished = c.loadError = !0, b.updateStatus("error", b.st.ajax.tError.replace("%url%", c.src));
          }
        }, b.st.ajax.settings);
        return b.req = a.ajax(d), "";
      }
    }
  });

  var L,
      M = function M(c) {
    if (c.data && void 0 !== c.data.title) return c.data.title;
    var d = b.st.image.titleSrc;

    if (d) {
      if (a.isFunction(d)) return d.call(b, c);
      if (c.el) return c.el.attr(d) || "";
    }

    return "";
  };

  a.magnificPopup.registerModule("image", {
    options: {
      markup: '<div class="mfp-figure"><div class="mfp-close"></div><figure><div class="mfp-img"></div><figcaption><div class="mfp-bottom-bar"><div class="mfp-title"></div><div class="mfp-counter"></div></div></figcaption></figure></div>',
      cursor: "mfp-zoom-out-cur",
      titleSrc: "title",
      verticalFit: !0,
      tError: '<a href="%url%">The image</a> could not be loaded.'
    },
    proto: {
      initImage: function initImage() {
        var c = b.st.image,
            d = ".image";
        b.types.push("image"), w(m + d, function () {
          "image" === b.currItem.type && c.cursor && a(document.body).addClass(c.cursor);
        }), w(h + d, function () {
          c.cursor && a(document.body).removeClass(c.cursor), v.off("resize" + p);
        }), w("Resize" + d, b.resizeImage), b.isLowIE && w("AfterChange", b.resizeImage);
      },
      resizeImage: function resizeImage() {
        var a = b.currItem;

        if (a && a.img && b.st.image.verticalFit) {
          var c = 0;
          b.isLowIE && (c = parseInt(a.img.css("padding-top"), 10) + parseInt(a.img.css("padding-bottom"), 10)), a.img.css("max-height", b.wH - c);
        }
      },
      _onImageHasSize: function _onImageHasSize(a) {
        a.img && (a.hasSize = !0, L && clearInterval(L), a.isCheckingImgSize = !1, y("ImageHasSize", a), a.imgHidden && (b.content && b.content.removeClass("mfp-loading"), a.imgHidden = !1));
      },
      findImageSize: function findImageSize(a) {
        var c = 0,
            d = a.img[0],
            e = function e(f) {
          L && clearInterval(L), L = setInterval(function () {
            return d.naturalWidth > 0 ? void b._onImageHasSize(a) : (c > 200 && clearInterval(L), c++, void (3 === c ? e(10) : 40 === c ? e(50) : 100 === c && e(500)));
          }, f);
        };

        e(1);
      },
      getImage: function getImage(c, d) {
        var e = 0,
            f = function f() {
          c && (c.img[0].complete ? (c.img.off(".mfploader"), c === b.currItem && (b._onImageHasSize(c), b.updateStatus("ready")), c.hasSize = !0, c.loaded = !0, y("ImageLoadComplete")) : (e++, 200 > e ? setTimeout(f, 100) : g()));
        },
            g = function g() {
          c && (c.img.off(".mfploader"), c === b.currItem && (b._onImageHasSize(c), b.updateStatus("error", h.tError.replace("%url%", c.src))), c.hasSize = !0, c.loaded = !0, c.loadError = !0);
        },
            h = b.st.image,
            i = d.find(".mfp-img");

        if (i.length) {
          var j = document.createElement("img");
          j.className = "mfp-img", c.el && c.el.find("img").length && (j.alt = c.el.find("img").attr("alt")), c.img = a(j).on("load.mfploader", f).on("error.mfploader", g), j.src = c.src, i.is("img") && (c.img = c.img.clone()), j = c.img[0], j.naturalWidth > 0 ? c.hasSize = !0 : j.width || (c.hasSize = !1);
        }

        return b._parseMarkup(d, {
          title: M(c),
          img_replaceWith: c.img
        }, c), b.resizeImage(), c.hasSize ? (L && clearInterval(L), c.loadError ? (d.addClass("mfp-loading"), b.updateStatus("error", h.tError.replace("%url%", c.src))) : (d.removeClass("mfp-loading"), b.updateStatus("ready")), d) : (b.updateStatus("loading"), c.loading = !0, c.hasSize || (c.imgHidden = !0, d.addClass("mfp-loading"), b.findImageSize(c)), d);
      }
    }
  });

  var N,
      O = function O() {
    return void 0 === N && (N = void 0 !== document.createElement("p").style.MozTransform), N;
  };

  a.magnificPopup.registerModule("zoom", {
    options: {
      enabled: !1,
      easing: "ease-in-out",
      duration: 300,
      opener: function opener(a) {
        return a.is("img") ? a : a.find("img");
      }
    },
    proto: {
      initZoom: function initZoom() {
        var a,
            c = b.st.zoom,
            d = ".zoom";

        if (c.enabled && b.supportsTransition) {
          var e,
              f,
              g = c.duration,
              j = function j(a) {
            var b = a.clone().removeAttr("style").removeAttr("class").addClass("mfp-animated-image"),
                d = "all " + c.duration / 1e3 + "s " + c.easing,
                e = {
              position: "fixed",
              zIndex: 9999,
              left: 0,
              top: 0,
              "-webkit-backface-visibility": "hidden"
            },
                f = "transition";
            return e["-webkit-" + f] = e["-moz-" + f] = e["-o-" + f] = e[f] = d, b.css(e), b;
          },
              k = function k() {
            b.content.css("visibility", "visible");
          };

          w("BuildControls" + d, function () {
            if (b._allowZoom()) {
              if (clearTimeout(e), b.content.css("visibility", "hidden"), a = b._getItemToZoom(), !a) return void k();
              f = j(a), f.css(b._getOffset()), b.wrap.append(f), e = setTimeout(function () {
                f.css(b._getOffset(!0)), e = setTimeout(function () {
                  k(), setTimeout(function () {
                    f.remove(), a = f = null, y("ZoomAnimationEnded");
                  }, 16);
                }, g);
              }, 16);
            }
          }), w(i + d, function () {
            if (b._allowZoom()) {
              if (clearTimeout(e), b.st.removalDelay = g, !a) {
                if (a = b._getItemToZoom(), !a) return;
                f = j(a);
              }

              f.css(b._getOffset(!0)), b.wrap.append(f), b.content.css("visibility", "hidden"), setTimeout(function () {
                f.css(b._getOffset());
              }, 16);
            }
          }), w(h + d, function () {
            b._allowZoom() && (k(), f && f.remove(), a = null);
          });
        }
      },
      _allowZoom: function _allowZoom() {
        return "image" === b.currItem.type;
      },
      _getItemToZoom: function _getItemToZoom() {
        return b.currItem.hasSize ? b.currItem.img : !1;
      },
      _getOffset: function _getOffset(c) {
        var d;
        d = c ? b.currItem.img : b.st.zoom.opener(b.currItem.el || b.currItem);
        var e = d.offset(),
            f = parseInt(d.css("padding-top"), 10),
            g = parseInt(d.css("padding-bottom"), 10);
        e.top -= a(window).scrollTop() - f;
        var h = {
          width: d.width(),
          height: (u ? d.innerHeight() : d[0].offsetHeight) - g - f
        };
        return O() ? h["-moz-transform"] = h.transform = "translate(" + e.left + "px," + e.top + "px)" : (h.left = e.left, h.top = e.top), h;
      }
    }
  });

  var P = "iframe",
      Q = "//about:blank",
      R = function R(a) {
    if (b.currTemplate[P]) {
      var c = b.currTemplate[P].find("iframe");
      c.length && (a || (c[0].src = Q), b.isIE8 && c.css("display", a ? "block" : "none"));
    }
  };

  a.magnificPopup.registerModule(P, {
    options: {
      markup: '<div class="mfp-iframe-scaler"><div class="mfp-close"></div><iframe class="mfp-iframe" src="//about:blank" frameborder="0" allowfullscreen></iframe></div>',
      srcAction: "iframe_src",
      patterns: {
        youtube: {
          index: "youtube.com",
          id: "v=",
          src: "https://www.youtube.com/embed/%id%?autoplay=1"
        },
        vimeo: {
          index: "vimeo.com/",
          id: "/",
          src: "https://player.vimeo.com/video/%id%?autoplay=1"
        },
        gmaps: {
          index: "//maps.google.",
          src: "%id%&output=embed"
        }
      }
    },
    proto: {
      initIframe: function initIframe() {
        b.types.push(P), w("BeforeChange", function (a, b, c) {
          b !== c && (b === P ? R() : c === P && R(!0));
        }), w(h + "." + P, function () {
          R();
        });
      },
      getIframe: function getIframe(c, d) {
        var e = c.src,
            f = b.st.iframe;
        a.each(f.patterns, function () {
          return e.indexOf(this.index) > -1 ? (this.id && (e = "string" == typeof this.id ? e.substr(e.lastIndexOf(this.id) + this.id.length, e.length) : this.id.call(this, e)), e = this.src.replace("%id%", e), !1) : void 0;
        });
        var g = {};
        return f.srcAction && (g[f.srcAction] = e), b._parseMarkup(d, g, c), b.updateStatus("ready"), d;
      }
    }
  });

  var S = function S(a) {
    var c = b.items.length;
    return a > c - 1 ? a - c : 0 > a ? c + a : a;
  },
      T = function T(a, b, c) {
    return a.replace(/%curr%/gi, b + 1).replace(/%total%/gi, c);
  };

  a.magnificPopup.registerModule("gallery", {
    options: {
      enabled: !1,
      arrowMarkup: '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>',
      preload: [0, 2],
      navigateByImgClick: !0,
      arrows: !0,
      tPrev: "Previous (Left arrow key)",
      tNext: "Next (Right arrow key)",
      tCounter: "%curr% of %total%"
    },
    proto: {
      initGallery: function initGallery() {
        var c = b.st.gallery,
            e = ".mfp-gallery";
        return b.direction = !0, c && c.enabled ? (f += " mfp-gallery", w(m + e, function () {
          c.navigateByImgClick && b.wrap.on("click" + e, ".mfp-img", function () {
            return b.items.length > 1 ? (b.next(), !1) : void 0;
          }), d.on("keydown" + e, function (a) {
            37 === a.keyCode ? b.prev() : 39 === a.keyCode && b.next();
          });
        }), w("UpdateStatus" + e, function (a, c) {
          c.text && (c.text = T(c.text, b.currItem.index, b.items.length));
        }), w(l + e, function (a, d, e, f) {
          var g = b.items.length;
          e.counter = g > 1 ? T(c.tCounter, f.index, g) : "";
        }), w("BuildControls" + e, function () {
          if (b.items.length > 1 && c.arrows && !b.arrowLeft) {
            var d = c.arrowMarkup,
                e = b.arrowLeft = a(d.replace(/%title%/gi, c.tPrev).replace(/%dir%/gi, "left")).addClass(s),
                f = b.arrowRight = a(d.replace(/%title%/gi, c.tNext).replace(/%dir%/gi, "right")).addClass(s);
            e.click(function () {
              b.prev();
            }), f.click(function () {
              b.next();
            }), b.container.append(e.add(f));
          }
        }), w(n + e, function () {
          b._preloadTimeout && clearTimeout(b._preloadTimeout), b._preloadTimeout = setTimeout(function () {
            b.preloadNearbyImages(), b._preloadTimeout = null;
          }, 16);
        }), void w(h + e, function () {
          d.off(e), b.wrap.off("click" + e), b.arrowRight = b.arrowLeft = null;
        })) : !1;
      },
      next: function next() {
        b.direction = !0, b.index = S(b.index + 1), b.updateItemHTML();
      },
      prev: function prev() {
        b.direction = !1, b.index = S(b.index - 1), b.updateItemHTML();
      },
      goTo: function goTo(a) {
        b.direction = a >= b.index, b.index = a, b.updateItemHTML();
      },
      preloadNearbyImages: function preloadNearbyImages() {
        var a,
            c = b.st.gallery.preload,
            d = Math.min(c[0], b.items.length),
            e = Math.min(c[1], b.items.length);

        for (a = 1; a <= (b.direction ? e : d); a++) {
          b._preloadItem(b.index + a);
        }

        for (a = 1; a <= (b.direction ? d : e); a++) {
          b._preloadItem(b.index - a);
        }
      },
      _preloadItem: function _preloadItem(c) {
        if (c = S(c), !b.items[c].preloaded) {
          var d = b.items[c];
          d.parsed || (d = b.parseEl(c)), y("LazyLoad", d), "image" === d.type && (d.img = a('<img class="mfp-img" />').on("load.mfploader", function () {
            d.hasSize = !0;
          }).on("error.mfploader", function () {
            d.hasSize = !0, d.loadError = !0, y("LazyLoadError", d);
          }).attr("src", d.src)), d.preloaded = !0;
        }
      }
    }
  });
  var U = "retina";
  a.magnificPopup.registerModule(U, {
    options: {
      replaceSrc: function replaceSrc(a) {
        return a.src.replace(/\.\w+$/, function (a) {
          return "@2x" + a;
        });
      },
      ratio: 1
    },
    proto: {
      initRetina: function initRetina() {
        if (window.devicePixelRatio > 1) {
          var a = b.st.retina,
              c = a.ratio;
          c = isNaN(c) ? c() : c, c > 1 && (w("ImageHasSize." + U, function (a, b) {
            b.img.css({
              "max-width": b.img[0].naturalWidth / c,
              width: "100%"
            });
          }), w("ElementParse." + U, function (b, d) {
            d.src = a.replaceSrc(d, c);
          }));
        }
      }
    }
  }), A();
});
/*!
 * Isotope PACKAGED v3.0.3
 *
 * Licensed GPLv3 for open source use
 * or Isotope Commercial License for commercial use
 *
 * http://isotope.metafizzy.co
 * Copyright 2017 Metafizzy
 */

!function (t, e) {
  "function" == typeof define && define.amd ? define("jquery-bridget/jquery-bridget", ["jquery"], function (i) {
    return e(t, i);
  }) : "object" == (typeof module === "undefined" ? "undefined" : _typeof(module)) && module.exports ? module.exports = e(t, require("jquery")) : t.jQueryBridget = e(t, t.jQuery);
}(window, function (t, e) {
  "use strict";

  function i(i, s, a) {
    function u(t, e, n) {
      var o,
          s = "$()." + i + '("' + e + '")';
      return t.each(function (t, u) {
        var h = a.data(u, i);
        if (!h) return void r(i + " not initialized. Cannot call methods, i.e. " + s);
        var d = h[e];
        if (!d || "_" == e.charAt(0)) return void r(s + " is not a valid method");
        var l = d.apply(h, n);
        o = void 0 === o ? l : o;
      }), void 0 !== o ? o : t;
    }

    function h(t, e) {
      t.each(function (t, n) {
        var o = a.data(n, i);
        o ? (o.option(e), o._init()) : (o = new s(n, e), a.data(n, i, o));
      });
    }

    a = a || e || t.jQuery, a && (s.prototype.option || (s.prototype.option = function (t) {
      a.isPlainObject(t) && (this.options = a.extend(!0, this.options, t));
    }), a.fn[i] = function (t) {
      if ("string" == typeof t) {
        var e = o.call(arguments, 1);
        return u(this, t, e);
      }

      return h(this, t), this;
    }, n(a));
  }

  function n(t) {
    !t || t && t.bridget || (t.bridget = i);
  }

  var o = Array.prototype.slice,
      s = t.console,
      r = "undefined" == typeof s ? function () {} : function (t) {
    s.error(t);
  };
  return n(e || t.jQuery), i;
}), function (t, e) {
  "function" == typeof define && define.amd ? define("ev-emitter/ev-emitter", e) : "object" == (typeof module === "undefined" ? "undefined" : _typeof(module)) && module.exports ? module.exports = e() : t.EvEmitter = e();
}("undefined" != typeof window ? window : this, function () {
  function t() {}

  var e = t.prototype;
  return e.on = function (t, e) {
    if (t && e) {
      var i = this._events = this._events || {},
          n = i[t] = i[t] || [];
      return n.indexOf(e) == -1 && n.push(e), this;
    }
  }, e.once = function (t, e) {
    if (t && e) {
      this.on(t, e);
      var i = this._onceEvents = this._onceEvents || {},
          n = i[t] = i[t] || {};
      return n[e] = !0, this;
    }
  }, e.off = function (t, e) {
    var i = this._events && this._events[t];

    if (i && i.length) {
      var n = i.indexOf(e);
      return n != -1 && i.splice(n, 1), this;
    }
  }, e.emitEvent = function (t, e) {
    var i = this._events && this._events[t];

    if (i && i.length) {
      var n = 0,
          o = i[n];
      e = e || [];

      for (var s = this._onceEvents && this._onceEvents[t]; o;) {
        var r = s && s[o];
        r && (this.off(t, o), delete s[o]), o.apply(this, e), n += r ? 0 : 1, o = i[n];
      }

      return this;
    }
  }, t;
}), function (t, e) {
  "use strict";

  "function" == typeof define && define.amd ? define("get-size/get-size", [], function () {
    return e();
  }) : "object" == (typeof module === "undefined" ? "undefined" : _typeof(module)) && module.exports ? module.exports = e() : t.getSize = e();
}(window, function () {
  "use strict";

  function t(t) {
    var e = parseFloat(t),
        i = t.indexOf("%") == -1 && !isNaN(e);
    return i && e;
  }

  function e() {}

  function i() {
    for (var t = {
      width: 0,
      height: 0,
      innerWidth: 0,
      innerHeight: 0,
      outerWidth: 0,
      outerHeight: 0
    }, e = 0; e < h; e++) {
      var i = u[e];
      t[i] = 0;
    }

    return t;
  }

  function n(t) {
    var e = getComputedStyle(t);
    return e || a("Style returned " + e + ". Are you running this code in a hidden iframe on Firefox? See http://bit.ly/getsizebug1"), e;
  }

  function o() {
    if (!d) {
      d = !0;
      var e = document.createElement("div");
      e.style.width = "200px", e.style.padding = "1px 2px 3px 4px", e.style.borderStyle = "solid", e.style.borderWidth = "1px 2px 3px 4px", e.style.boxSizing = "border-box";
      var i = document.body || document.documentElement;
      i.appendChild(e);
      var o = n(e);
      s.isBoxSizeOuter = r = 200 == t(o.width), i.removeChild(e);
    }
  }

  function s(e) {
    if (o(), "string" == typeof e && (e = document.querySelector(e)), e && "object" == _typeof(e) && e.nodeType) {
      var s = n(e);
      if ("none" == s.display) return i();
      var a = {};
      a.width = e.offsetWidth, a.height = e.offsetHeight;

      for (var d = a.isBorderBox = "border-box" == s.boxSizing, l = 0; l < h; l++) {
        var f = u[l],
            m = s[f],
            c = parseFloat(m);
        a[f] = isNaN(c) ? 0 : c;
      }

      var p = a.paddingLeft + a.paddingRight,
          y = a.paddingTop + a.paddingBottom,
          g = a.marginLeft + a.marginRight,
          v = a.marginTop + a.marginBottom,
          _ = a.borderLeftWidth + a.borderRightWidth,
          I = a.borderTopWidth + a.borderBottomWidth,
          z = d && r,
          S = t(s.width);

      S !== !1 && (a.width = S + (z ? 0 : p + _));
      var x = t(s.height);
      return x !== !1 && (a.height = x + (z ? 0 : y + I)), a.innerWidth = a.width - (p + _), a.innerHeight = a.height - (y + I), a.outerWidth = a.width + g, a.outerHeight = a.height + v, a;
    }
  }

  var r,
      a = "undefined" == typeof console ? e : function (t) {
    console.error(t);
  },
      u = ["paddingLeft", "paddingRight", "paddingTop", "paddingBottom", "marginLeft", "marginRight", "marginTop", "marginBottom", "borderLeftWidth", "borderRightWidth", "borderTopWidth", "borderBottomWidth"],
      h = u.length,
      d = !1;
  return s;
}), function (t, e) {
  "use strict";

  "function" == typeof define && define.amd ? define("desandro-matches-selector/matches-selector", e) : "object" == (typeof module === "undefined" ? "undefined" : _typeof(module)) && module.exports ? module.exports = e() : t.matchesSelector = e();
}(window, function () {
  "use strict";

  var t = function () {
    var t = window.Element.prototype;
    if (t.matches) return "matches";
    if (t.matchesSelector) return "matchesSelector";

    for (var e = ["webkit", "moz", "ms", "o"], i = 0; i < e.length; i++) {
      var n = e[i],
          o = n + "MatchesSelector";
      if (t[o]) return o;
    }
  }();

  return function (e, i) {
    return e[t](i);
  };
}), function (t, e) {
  "function" == typeof define && define.amd ? define("fizzy-ui-utils/utils", ["desandro-matches-selector/matches-selector"], function (i) {
    return e(t, i);
  }) : "object" == (typeof module === "undefined" ? "undefined" : _typeof(module)) && module.exports ? module.exports = e(t, require("desandro-matches-selector")) : t.fizzyUIUtils = e(t, t.matchesSelector);
}(window, function (t, e) {
  var i = {};
  i.extend = function (t, e) {
    for (var i in e) {
      t[i] = e[i];
    }

    return t;
  }, i.modulo = function (t, e) {
    return (t % e + e) % e;
  }, i.makeArray = function (t) {
    var e = [];
    if (Array.isArray(t)) e = t;else if (t && "object" == _typeof(t) && "number" == typeof t.length) for (var i = 0; i < t.length; i++) {
      e.push(t[i]);
    } else e.push(t);
    return e;
  }, i.removeFrom = function (t, e) {
    var i = t.indexOf(e);
    i != -1 && t.splice(i, 1);
  }, i.getParent = function (t, i) {
    for (; t != document.body;) {
      if (t = t.parentNode, e(t, i)) return t;
    }
  }, i.getQueryElement = function (t) {
    return "string" == typeof t ? document.querySelector(t) : t;
  }, i.handleEvent = function (t) {
    var e = "on" + t.type;
    this[e] && this[e](t);
  }, i.filterFindElements = function (t, n) {
    t = i.makeArray(t);
    var o = [];
    return t.forEach(function (t) {
      if (t instanceof HTMLElement) {
        if (!n) return void o.push(t);
        e(t, n) && o.push(t);

        for (var i = t.querySelectorAll(n), s = 0; s < i.length; s++) {
          o.push(i[s]);
        }
      }
    }), o;
  }, i.debounceMethod = function (t, e, i) {
    var n = t.prototype[e],
        o = e + "Timeout";

    t.prototype[e] = function () {
      var t = this[o];
      t && clearTimeout(t);
      var e = arguments,
          s = this;
      this[o] = setTimeout(function () {
        n.apply(s, e), delete s[o];
      }, i || 100);
    };
  }, i.docReady = function (t) {
    var e = document.readyState;
    "complete" == e || "interactive" == e ? setTimeout(t) : document.addEventListener("DOMContentLoaded", t);
  }, i.toDashed = function (t) {
    return t.replace(/(.)([A-Z])/g, function (t, e, i) {
      return e + "-" + i;
    }).toLowerCase();
  };
  var n = t.console;
  return i.htmlInit = function (e, o) {
    i.docReady(function () {
      var s = i.toDashed(o),
          r = "data-" + s,
          a = document.querySelectorAll("[" + r + "]"),
          u = document.querySelectorAll(".js-" + s),
          h = i.makeArray(a).concat(i.makeArray(u)),
          d = r + "-options",
          l = t.jQuery;
      h.forEach(function (t) {
        var i,
            s = t.getAttribute(r) || t.getAttribute(d);

        try {
          i = s && JSON.parse(s);
        } catch (a) {
          return void (n && n.error("Error parsing " + r + " on " + t.className + ": " + a));
        }

        var u = new e(t, i);
        l && l.data(t, o, u);
      });
    });
  }, i;
}), function (t, e) {
  "function" == typeof define && define.amd ? define("outlayer/item", ["ev-emitter/ev-emitter", "get-size/get-size"], e) : "object" == (typeof module === "undefined" ? "undefined" : _typeof(module)) && module.exports ? module.exports = e(require("ev-emitter"), require("get-size")) : (t.Outlayer = {}, t.Outlayer.Item = e(t.EvEmitter, t.getSize));
}(window, function (t, e) {
  "use strict";

  function i(t) {
    for (var e in t) {
      return !1;
    }

    return e = null, !0;
  }

  function n(t, e) {
    t && (this.element = t, this.layout = e, this.position = {
      x: 0,
      y: 0
    }, this._create());
  }

  function o(t) {
    return t.replace(/([A-Z])/g, function (t) {
      return "-" + t.toLowerCase();
    });
  }

  var s = document.documentElement.style,
      r = "string" == typeof s.transition ? "transition" : "WebkitTransition",
      a = "string" == typeof s.transform ? "transform" : "WebkitTransform",
      u = {
    WebkitTransition: "webkitTransitionEnd",
    transition: "transitionend"
  }[r],
      h = {
    transform: a,
    transition: r,
    transitionDuration: r + "Duration",
    transitionProperty: r + "Property",
    transitionDelay: r + "Delay"
  },
      d = n.prototype = Object.create(t.prototype);
  d.constructor = n, d._create = function () {
    this._transn = {
      ingProperties: {},
      clean: {},
      onEnd: {}
    }, this.css({
      position: "absolute"
    });
  }, d.handleEvent = function (t) {
    var e = "on" + t.type;
    this[e] && this[e](t);
  }, d.getSize = function () {
    this.size = e(this.element);
  }, d.css = function (t) {
    var e = this.element.style;

    for (var i in t) {
      var n = h[i] || i;
      e[n] = t[i];
    }
  }, d.getPosition = function () {
    var t = getComputedStyle(this.element),
        e = this.layout._getOption("originLeft"),
        i = this.layout._getOption("originTop"),
        n = t[e ? "left" : "right"],
        o = t[i ? "top" : "bottom"],
        s = this.layout.size,
        r = n.indexOf("%") != -1 ? parseFloat(n) / 100 * s.width : parseInt(n, 10),
        a = o.indexOf("%") != -1 ? parseFloat(o) / 100 * s.height : parseInt(o, 10);

    r = isNaN(r) ? 0 : r, a = isNaN(a) ? 0 : a, r -= e ? s.paddingLeft : s.paddingRight, a -= i ? s.paddingTop : s.paddingBottom, this.position.x = r, this.position.y = a;
  }, d.layoutPosition = function () {
    var t = this.layout.size,
        e = {},
        i = this.layout._getOption("originLeft"),
        n = this.layout._getOption("originTop"),
        o = i ? "paddingLeft" : "paddingRight",
        s = i ? "left" : "right",
        r = i ? "right" : "left",
        a = this.position.x + t[o];

    e[s] = this.getXValue(a), e[r] = "";
    var u = n ? "paddingTop" : "paddingBottom",
        h = n ? "top" : "bottom",
        d = n ? "bottom" : "top",
        l = this.position.y + t[u];
    e[h] = this.getYValue(l), e[d] = "", this.css(e), this.emitEvent("layout", [this]);
  }, d.getXValue = function (t) {
    var e = this.layout._getOption("horizontal");

    return this.layout.options.percentPosition && !e ? t / this.layout.size.width * 100 + "%" : t + "px";
  }, d.getYValue = function (t) {
    var e = this.layout._getOption("horizontal");

    return this.layout.options.percentPosition && e ? t / this.layout.size.height * 100 + "%" : t + "px";
  }, d._transitionTo = function (t, e) {
    this.getPosition();
    var i = this.position.x,
        n = this.position.y,
        o = parseInt(t, 10),
        s = parseInt(e, 10),
        r = o === this.position.x && s === this.position.y;
    if (this.setPosition(t, e), r && !this.isTransitioning) return void this.layoutPosition();
    var a = t - i,
        u = e - n,
        h = {};
    h.transform = this.getTranslate(a, u), this.transition({
      to: h,
      onTransitionEnd: {
        transform: this.layoutPosition
      },
      isCleaning: !0
    });
  }, d.getTranslate = function (t, e) {
    var i = this.layout._getOption("originLeft"),
        n = this.layout._getOption("originTop");

    return t = i ? t : -t, e = n ? e : -e, "translate3d(" + t + "px, " + e + "px, 0)";
  }, d.goTo = function (t, e) {
    this.setPosition(t, e), this.layoutPosition();
  }, d.moveTo = d._transitionTo, d.setPosition = function (t, e) {
    this.position.x = parseInt(t, 10), this.position.y = parseInt(e, 10);
  }, d._nonTransition = function (t) {
    this.css(t.to), t.isCleaning && this._removeStyles(t.to);

    for (var e in t.onTransitionEnd) {
      t.onTransitionEnd[e].call(this);
    }
  }, d.transition = function (t) {
    if (!parseFloat(this.layout.options.transitionDuration)) return void this._nonTransition(t);
    var e = this._transn;

    for (var i in t.onTransitionEnd) {
      e.onEnd[i] = t.onTransitionEnd[i];
    }

    for (i in t.to) {
      e.ingProperties[i] = !0, t.isCleaning && (e.clean[i] = !0);
    }

    if (t.from) {
      this.css(t.from);
      var n = this.element.offsetHeight;
      n = null;
    }

    this.enableTransition(t.to), this.css(t.to), this.isTransitioning = !0;
  };
  var l = "opacity," + o(a);
  d.enableTransition = function () {
    if (!this.isTransitioning) {
      var t = this.layout.options.transitionDuration;
      t = "number" == typeof t ? t + "ms" : t, this.css({
        transitionProperty: l,
        transitionDuration: t,
        transitionDelay: this.staggerDelay || 0
      }), this.element.addEventListener(u, this, !1);
    }
  }, d.onwebkitTransitionEnd = function (t) {
    this.ontransitionend(t);
  }, d.onotransitionend = function (t) {
    this.ontransitionend(t);
  };
  var f = {
    "-webkit-transform": "transform"
  };
  d.ontransitionend = function (t) {
    if (t.target === this.element) {
      var e = this._transn,
          n = f[t.propertyName] || t.propertyName;

      if (delete e.ingProperties[n], i(e.ingProperties) && this.disableTransition(), n in e.clean && (this.element.style[t.propertyName] = "", delete e.clean[n]), n in e.onEnd) {
        var o = e.onEnd[n];
        o.call(this), delete e.onEnd[n];
      }

      this.emitEvent("transitionEnd", [this]);
    }
  }, d.disableTransition = function () {
    this.removeTransitionStyles(), this.element.removeEventListener(u, this, !1), this.isTransitioning = !1;
  }, d._removeStyles = function (t) {
    var e = {};

    for (var i in t) {
      e[i] = "";
    }

    this.css(e);
  };
  var m = {
    transitionProperty: "",
    transitionDuration: "",
    transitionDelay: ""
  };
  return d.removeTransitionStyles = function () {
    this.css(m);
  }, d.stagger = function (t) {
    t = isNaN(t) ? 0 : t, this.staggerDelay = t + "ms";
  }, d.removeElem = function () {
    this.element.parentNode.removeChild(this.element), this.css({
      display: ""
    }), this.emitEvent("remove", [this]);
  }, d.remove = function () {
    return r && parseFloat(this.layout.options.transitionDuration) ? (this.once("transitionEnd", function () {
      this.removeElem();
    }), void this.hide()) : void this.removeElem();
  }, d.reveal = function () {
    delete this.isHidden, this.css({
      display: ""
    });
    var t = this.layout.options,
        e = {},
        i = this.getHideRevealTransitionEndProperty("visibleStyle");
    e[i] = this.onRevealTransitionEnd, this.transition({
      from: t.hiddenStyle,
      to: t.visibleStyle,
      isCleaning: !0,
      onTransitionEnd: e
    });
  }, d.onRevealTransitionEnd = function () {
    this.isHidden || this.emitEvent("reveal");
  }, d.getHideRevealTransitionEndProperty = function (t) {
    var e = this.layout.options[t];
    if (e.opacity) return "opacity";

    for (var i in e) {
      return i;
    }
  }, d.hide = function () {
    this.isHidden = !0, this.css({
      display: ""
    });
    var t = this.layout.options,
        e = {},
        i = this.getHideRevealTransitionEndProperty("hiddenStyle");
    e[i] = this.onHideTransitionEnd, this.transition({
      from: t.visibleStyle,
      to: t.hiddenStyle,
      isCleaning: !0,
      onTransitionEnd: e
    });
  }, d.onHideTransitionEnd = function () {
    this.isHidden && (this.css({
      display: "none"
    }), this.emitEvent("hide"));
  }, d.destroy = function () {
    this.css({
      position: "",
      left: "",
      right: "",
      top: "",
      bottom: "",
      transition: "",
      transform: ""
    });
  }, n;
}), function (t, e) {
  "use strict";

  "function" == typeof define && define.amd ? define("outlayer/outlayer", ["ev-emitter/ev-emitter", "get-size/get-size", "fizzy-ui-utils/utils", "./item"], function (i, n, o, s) {
    return e(t, i, n, o, s);
  }) : "object" == (typeof module === "undefined" ? "undefined" : _typeof(module)) && module.exports ? module.exports = e(t, require("ev-emitter"), require("get-size"), require("fizzy-ui-utils"), require("./item")) : t.Outlayer = e(t, t.EvEmitter, t.getSize, t.fizzyUIUtils, t.Outlayer.Item);
}(window, function (t, e, i, n, o) {
  "use strict";

  function s(t, e) {
    var i = n.getQueryElement(t);
    if (!i) return void (u && u.error("Bad element for " + this.constructor.namespace + ": " + (i || t)));
    this.element = i, h && (this.$element = h(this.element)), this.options = n.extend({}, this.constructor.defaults), this.option(e);
    var o = ++l;
    this.element.outlayerGUID = o, f[o] = this, this._create();

    var s = this._getOption("initLayout");

    s && this.layout();
  }

  function r(t) {
    function e() {
      t.apply(this, arguments);
    }

    return e.prototype = Object.create(t.prototype), e.prototype.constructor = e, e;
  }

  function a(t) {
    if ("number" == typeof t) return t;
    var e = t.match(/(^\d*\.?\d*)(\w*)/),
        i = e && e[1],
        n = e && e[2];
    if (!i.length) return 0;
    i = parseFloat(i);
    var o = c[n] || 1;
    return i * o;
  }

  var u = t.console,
      h = t.jQuery,
      d = function d() {},
      l = 0,
      f = {};

  s.namespace = "outlayer", s.Item = o, s.defaults = {
    containerStyle: {
      position: "relative"
    },
    initLayout: !0,
    originLeft: !0,
    originTop: !0,
    resize: !0,
    resizeContainer: !0,
    transitionDuration: "0.4s",
    hiddenStyle: {
      opacity: 0,
      transform: "scale(0.001)"
    },
    visibleStyle: {
      opacity: 1,
      transform: "scale(1)"
    }
  };
  var m = s.prototype;
  n.extend(m, e.prototype), m.option = function (t) {
    n.extend(this.options, t);
  }, m._getOption = function (t) {
    var e = this.constructor.compatOptions[t];
    return e && void 0 !== this.options[e] ? this.options[e] : this.options[t];
  }, s.compatOptions = {
    initLayout: "isInitLayout",
    horizontal: "isHorizontal",
    layoutInstant: "isLayoutInstant",
    originLeft: "isOriginLeft",
    originTop: "isOriginTop",
    resize: "isResizeBound",
    resizeContainer: "isResizingContainer"
  }, m._create = function () {
    this.reloadItems(), this.stamps = [], this.stamp(this.options.stamp), n.extend(this.element.style, this.options.containerStyle);

    var t = this._getOption("resize");

    t && this.bindResize();
  }, m.reloadItems = function () {
    this.items = this._itemize(this.element.children);
  }, m._itemize = function (t) {
    for (var e = this._filterFindItemElements(t), i = this.constructor.Item, n = [], o = 0; o < e.length; o++) {
      var s = e[o],
          r = new i(s, this);
      n.push(r);
    }

    return n;
  }, m._filterFindItemElements = function (t) {
    return n.filterFindElements(t, this.options.itemSelector);
  }, m.getItemElements = function () {
    return this.items.map(function (t) {
      return t.element;
    });
  }, m.layout = function () {
    this._resetLayout(), this._manageStamps();

    var t = this._getOption("layoutInstant"),
        e = void 0 !== t ? t : !this._isLayoutInited;

    this.layoutItems(this.items, e), this._isLayoutInited = !0;
  }, m._init = m.layout, m._resetLayout = function () {
    this.getSize();
  }, m.getSize = function () {
    this.size = i(this.element);
  }, m._getMeasurement = function (t, e) {
    var n,
        o = this.options[t];
    o ? ("string" == typeof o ? n = this.element.querySelector(o) : o instanceof HTMLElement && (n = o), this[t] = n ? i(n)[e] : o) : this[t] = 0;
  }, m.layoutItems = function (t, e) {
    t = this._getItemsForLayout(t), this._layoutItems(t, e), this._postLayout();
  }, m._getItemsForLayout = function (t) {
    return t.filter(function (t) {
      return !t.isIgnored;
    });
  }, m._layoutItems = function (t, e) {
    if (this._emitCompleteOnItems("layout", t), t && t.length) {
      var i = [];
      t.forEach(function (t) {
        var n = this._getItemLayoutPosition(t);

        n.item = t, n.isInstant = e || t.isLayoutInstant, i.push(n);
      }, this), this._processLayoutQueue(i);
    }
  }, m._getItemLayoutPosition = function () {
    return {
      x: 0,
      y: 0
    };
  }, m._processLayoutQueue = function (t) {
    this.updateStagger(), t.forEach(function (t, e) {
      this._positionItem(t.item, t.x, t.y, t.isInstant, e);
    }, this);
  }, m.updateStagger = function () {
    var t = this.options.stagger;
    return null === t || void 0 === t ? void (this.stagger = 0) : (this.stagger = a(t), this.stagger);
  }, m._positionItem = function (t, e, i, n, o) {
    n ? t.goTo(e, i) : (t.stagger(o * this.stagger), t.moveTo(e, i));
  }, m._postLayout = function () {
    this.resizeContainer();
  }, m.resizeContainer = function () {
    var t = this._getOption("resizeContainer");

    if (t) {
      var e = this._getContainerSize();

      e && (this._setContainerMeasure(e.width, !0), this._setContainerMeasure(e.height, !1));
    }
  }, m._getContainerSize = d, m._setContainerMeasure = function (t, e) {
    if (void 0 !== t) {
      var i = this.size;
      i.isBorderBox && (t += e ? i.paddingLeft + i.paddingRight + i.borderLeftWidth + i.borderRightWidth : i.paddingBottom + i.paddingTop + i.borderTopWidth + i.borderBottomWidth), t = Math.max(t, 0), this.element.style[e ? "width" : "height"] = t + "px";
    }
  }, m._emitCompleteOnItems = function (t, e) {
    function i() {
      o.dispatchEvent(t + "Complete", null, [e]);
    }

    function n() {
      r++, r == s && i();
    }

    var o = this,
        s = e.length;
    if (!e || !s) return void i();
    var r = 0;
    e.forEach(function (e) {
      e.once(t, n);
    });
  }, m.dispatchEvent = function (t, e, i) {
    var n = e ? [e].concat(i) : i;
    if (this.emitEvent(t, n), h) if (this.$element = this.$element || h(this.element), e) {
      var o = h.Event(e);
      o.type = t, this.$element.trigger(o, i);
    } else this.$element.trigger(t, i);
  }, m.ignore = function (t) {
    var e = this.getItem(t);
    e && (e.isIgnored = !0);
  }, m.unignore = function (t) {
    var e = this.getItem(t);
    e && delete e.isIgnored;
  }, m.stamp = function (t) {
    t = this._find(t), t && (this.stamps = this.stamps.concat(t), t.forEach(this.ignore, this));
  }, m.unstamp = function (t) {
    t = this._find(t), t && t.forEach(function (t) {
      n.removeFrom(this.stamps, t), this.unignore(t);
    }, this);
  }, m._find = function (t) {
    if (t) return "string" == typeof t && (t = this.element.querySelectorAll(t)), t = n.makeArray(t);
  }, m._manageStamps = function () {
    this.stamps && this.stamps.length && (this._getBoundingRect(), this.stamps.forEach(this._manageStamp, this));
  }, m._getBoundingRect = function () {
    var t = this.element.getBoundingClientRect(),
        e = this.size;
    this._boundingRect = {
      left: t.left + e.paddingLeft + e.borderLeftWidth,
      top: t.top + e.paddingTop + e.borderTopWidth,
      right: t.right - (e.paddingRight + e.borderRightWidth),
      bottom: t.bottom - (e.paddingBottom + e.borderBottomWidth)
    };
  }, m._manageStamp = d, m._getElementOffset = function (t) {
    var e = t.getBoundingClientRect(),
        n = this._boundingRect,
        o = i(t),
        s = {
      left: e.left - n.left - o.marginLeft,
      top: e.top - n.top - o.marginTop,
      right: n.right - e.right - o.marginRight,
      bottom: n.bottom - e.bottom - o.marginBottom
    };
    return s;
  }, m.handleEvent = n.handleEvent, m.bindResize = function () {
    t.addEventListener("resize", this), this.isResizeBound = !0;
  }, m.unbindResize = function () {
    t.removeEventListener("resize", this), this.isResizeBound = !1;
  }, m.onresize = function () {
    this.resize();
  }, n.debounceMethod(s, "onresize", 100), m.resize = function () {
    this.isResizeBound && this.needsResizeLayout() && this.layout();
  }, m.needsResizeLayout = function () {
    var t = i(this.element),
        e = this.size && t;
    return e && t.innerWidth !== this.size.innerWidth;
  }, m.addItems = function (t) {
    var e = this._itemize(t);

    return e.length && (this.items = this.items.concat(e)), e;
  }, m.appended = function (t) {
    var e = this.addItems(t);
    e.length && (this.layoutItems(e, !0), this.reveal(e));
  }, m.prepended = function (t) {
    var e = this._itemize(t);

    if (e.length) {
      var i = this.items.slice(0);
      this.items = e.concat(i), this._resetLayout(), this._manageStamps(), this.layoutItems(e, !0), this.reveal(e), this.layoutItems(i);
    }
  }, m.reveal = function (t) {
    if (this._emitCompleteOnItems("reveal", t), t && t.length) {
      var e = this.updateStagger();
      t.forEach(function (t, i) {
        t.stagger(i * e), t.reveal();
      });
    }
  }, m.hide = function (t) {
    if (this._emitCompleteOnItems("hide", t), t && t.length) {
      var e = this.updateStagger();
      t.forEach(function (t, i) {
        t.stagger(i * e), t.hide();
      });
    }
  }, m.revealItemElements = function (t) {
    var e = this.getItems(t);
    this.reveal(e);
  }, m.hideItemElements = function (t) {
    var e = this.getItems(t);
    this.hide(e);
  }, m.getItem = function (t) {
    for (var e = 0; e < this.items.length; e++) {
      var i = this.items[e];
      if (i.element == t) return i;
    }
  }, m.getItems = function (t) {
    t = n.makeArray(t);
    var e = [];
    return t.forEach(function (t) {
      var i = this.getItem(t);
      i && e.push(i);
    }, this), e;
  }, m.remove = function (t) {
    var e = this.getItems(t);
    this._emitCompleteOnItems("remove", e), e && e.length && e.forEach(function (t) {
      t.remove(), n.removeFrom(this.items, t);
    }, this);
  }, m.destroy = function () {
    var t = this.element.style;
    t.height = "", t.position = "", t.width = "", this.items.forEach(function (t) {
      t.destroy();
    }), this.unbindResize();
    var e = this.element.outlayerGUID;
    delete f[e], delete this.element.outlayerGUID, h && h.removeData(this.element, this.constructor.namespace);
  }, s.data = function (t) {
    t = n.getQueryElement(t);
    var e = t && t.outlayerGUID;
    return e && f[e];
  }, s.create = function (t, e) {
    var i = r(s);
    return i.defaults = n.extend({}, s.defaults), n.extend(i.defaults, e), i.compatOptions = n.extend({}, s.compatOptions), i.namespace = t, i.data = s.data, i.Item = r(o), n.htmlInit(i, t), h && h.bridget && h.bridget(t, i), i;
  };
  var c = {
    ms: 1,
    s: 1e3
  };
  return s.Item = o, s;
}), function (t, e) {
  "function" == typeof define && define.amd ? define("isotope/js/item", ["outlayer/outlayer"], e) : "object" == (typeof module === "undefined" ? "undefined" : _typeof(module)) && module.exports ? module.exports = e(require("outlayer")) : (t.Isotope = t.Isotope || {}, t.Isotope.Item = e(t.Outlayer));
}(window, function (t) {
  "use strict";

  function e() {
    t.Item.apply(this, arguments);
  }

  var i = e.prototype = Object.create(t.Item.prototype),
      n = i._create;
  i._create = function () {
    this.id = this.layout.itemGUID++, n.call(this), this.sortData = {};
  }, i.updateSortData = function () {
    if (!this.isIgnored) {
      this.sortData.id = this.id, this.sortData["original-order"] = this.id, this.sortData.random = Math.random();
      var t = this.layout.options.getSortData,
          e = this.layout._sorters;

      for (var i in t) {
        var n = e[i];
        this.sortData[i] = n(this.element, this);
      }
    }
  };
  var o = i.destroy;
  return i.destroy = function () {
    o.apply(this, arguments), this.css({
      display: ""
    });
  }, e;
}), function (t, e) {
  "function" == typeof define && define.amd ? define("isotope/js/layout-mode", ["get-size/get-size", "outlayer/outlayer"], e) : "object" == (typeof module === "undefined" ? "undefined" : _typeof(module)) && module.exports ? module.exports = e(require("get-size"), require("outlayer")) : (t.Isotope = t.Isotope || {}, t.Isotope.LayoutMode = e(t.getSize, t.Outlayer));
}(window, function (t, e) {
  "use strict";

  function i(t) {
    this.isotope = t, t && (this.options = t.options[this.namespace], this.element = t.element, this.items = t.filteredItems, this.size = t.size);
  }

  var n = i.prototype,
      o = ["_resetLayout", "_getItemLayoutPosition", "_manageStamp", "_getContainerSize", "_getElementOffset", "needsResizeLayout", "_getOption"];
  return o.forEach(function (t) {
    n[t] = function () {
      return e.prototype[t].apply(this.isotope, arguments);
    };
  }), n.needsVerticalResizeLayout = function () {
    var e = t(this.isotope.element),
        i = this.isotope.size && e;
    return i && e.innerHeight != this.isotope.size.innerHeight;
  }, n._getMeasurement = function () {
    this.isotope._getMeasurement.apply(this, arguments);
  }, n.getColumnWidth = function () {
    this.getSegmentSize("column", "Width");
  }, n.getRowHeight = function () {
    this.getSegmentSize("row", "Height");
  }, n.getSegmentSize = function (t, e) {
    var i = t + e,
        n = "outer" + e;

    if (this._getMeasurement(i, n), !this[i]) {
      var o = this.getFirstItemSize();
      this[i] = o && o[n] || this.isotope.size["inner" + e];
    }
  }, n.getFirstItemSize = function () {
    var e = this.isotope.filteredItems[0];
    return e && e.element && t(e.element);
  }, n.layout = function () {
    this.isotope.layout.apply(this.isotope, arguments);
  }, n.getSize = function () {
    this.isotope.getSize(), this.size = this.isotope.size;
  }, i.modes = {}, i.create = function (t, e) {
    function o() {
      i.apply(this, arguments);
    }

    return o.prototype = Object.create(n), o.prototype.constructor = o, e && (o.options = e), o.prototype.namespace = t, i.modes[t] = o, o;
  }, i;
}), function (t, e) {
  "function" == typeof define && define.amd ? define("masonry/masonry", ["outlayer/outlayer", "get-size/get-size"], e) : "object" == (typeof module === "undefined" ? "undefined" : _typeof(module)) && module.exports ? module.exports = e(require("outlayer"), require("get-size")) : t.Masonry = e(t.Outlayer, t.getSize);
}(window, function (t, e) {
  var i = t.create("masonry");
  return i.compatOptions.fitWidth = "isFitWidth", i.prototype._resetLayout = function () {
    this.getSize(), this._getMeasurement("columnWidth", "outerWidth"), this._getMeasurement("gutter", "outerWidth"), this.measureColumns(), this.colYs = [];

    for (var t = 0; t < this.cols; t++) {
      this.colYs.push(0);
    }

    this.maxY = 0;
  }, i.prototype.measureColumns = function () {
    if (this.getContainerWidth(), !this.columnWidth) {
      var t = this.items[0],
          i = t && t.element;
      this.columnWidth = i && e(i).outerWidth || this.containerWidth;
    }

    var n = this.columnWidth += this.gutter,
        o = this.containerWidth + this.gutter,
        s = o / n,
        r = n - o % n,
        a = r && r < 1 ? "round" : "floor";
    s = Math[a](s), this.cols = Math.max(s, 1);
  }, i.prototype.getContainerWidth = function () {
    var t = this._getOption("fitWidth"),
        i = t ? this.element.parentNode : this.element,
        n = e(i);

    this.containerWidth = n && n.innerWidth;
  }, i.prototype._getItemLayoutPosition = function (t) {
    t.getSize();
    var e = t.size.outerWidth % this.columnWidth,
        i = e && e < 1 ? "round" : "ceil",
        n = Math[i](t.size.outerWidth / this.columnWidth);
    n = Math.min(n, this.cols);

    for (var o = this._getColGroup(n), s = Math.min.apply(Math, o), r = o.indexOf(s), a = {
      x: this.columnWidth * r,
      y: s
    }, u = s + t.size.outerHeight, h = this.cols + 1 - o.length, d = 0; d < h; d++) {
      this.colYs[r + d] = u;
    }

    return a;
  }, i.prototype._getColGroup = function (t) {
    if (t < 2) return this.colYs;

    for (var e = [], i = this.cols + 1 - t, n = 0; n < i; n++) {
      var o = this.colYs.slice(n, n + t);
      e[n] = Math.max.apply(Math, o);
    }

    return e;
  }, i.prototype._manageStamp = function (t) {
    var i = e(t),
        n = this._getElementOffset(t),
        o = this._getOption("originLeft"),
        s = o ? n.left : n.right,
        r = s + i.outerWidth,
        a = Math.floor(s / this.columnWidth);

    a = Math.max(0, a);
    var u = Math.floor(r / this.columnWidth);
    u -= r % this.columnWidth ? 0 : 1, u = Math.min(this.cols - 1, u);

    for (var h = this._getOption("originTop"), d = (h ? n.top : n.bottom) + i.outerHeight, l = a; l <= u; l++) {
      this.colYs[l] = Math.max(d, this.colYs[l]);
    }
  }, i.prototype._getContainerSize = function () {
    this.maxY = Math.max.apply(Math, this.colYs);
    var t = {
      height: this.maxY
    };
    return this._getOption("fitWidth") && (t.width = this._getContainerFitWidth()), t;
  }, i.prototype._getContainerFitWidth = function () {
    for (var t = 0, e = this.cols; --e && 0 === this.colYs[e];) {
      t++;
    }

    return (this.cols - t) * this.columnWidth - this.gutter;
  }, i.prototype.needsResizeLayout = function () {
    var t = this.containerWidth;
    return this.getContainerWidth(), t != this.containerWidth;
  }, i;
}), function (t, e) {
  "function" == typeof define && define.amd ? define("isotope/js/layout-modes/masonry", ["../layout-mode", "masonry/masonry"], e) : "object" == (typeof module === "undefined" ? "undefined" : _typeof(module)) && module.exports ? module.exports = e(require("../layout-mode"), require("masonry-layout")) : e(t.Isotope.LayoutMode, t.Masonry);
}(window, function (t, e) {
  "use strict";

  var i = t.create("masonry"),
      n = i.prototype,
      o = {
    _getElementOffset: !0,
    layout: !0,
    _getMeasurement: !0
  };

  for (var s in e.prototype) {
    o[s] || (n[s] = e.prototype[s]);
  }

  var r = n.measureColumns;

  n.measureColumns = function () {
    this.items = this.isotope.filteredItems, r.call(this);
  };

  var a = n._getOption;
  return n._getOption = function (t) {
    return "fitWidth" == t ? void 0 !== this.options.isFitWidth ? this.options.isFitWidth : this.options.fitWidth : a.apply(this.isotope, arguments);
  }, i;
}), function (t, e) {
  "function" == typeof define && define.amd ? define("isotope/js/layout-modes/fit-rows", ["../layout-mode"], e) : "object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) ? module.exports = e(require("../layout-mode")) : e(t.Isotope.LayoutMode);
}(window, function (t) {
  "use strict";

  var e = t.create("fitRows"),
      i = e.prototype;
  return i._resetLayout = function () {
    this.x = 0, this.y = 0, this.maxY = 0, this._getMeasurement("gutter", "outerWidth");
  }, i._getItemLayoutPosition = function (t) {
    t.getSize();
    var e = t.size.outerWidth + this.gutter,
        i = this.isotope.size.innerWidth + this.gutter;
    0 !== this.x && e + this.x > i && (this.x = 0, this.y = this.maxY);
    var n = {
      x: this.x,
      y: this.y
    };
    return this.maxY = Math.max(this.maxY, this.y + t.size.outerHeight), this.x += e, n;
  }, i._getContainerSize = function () {
    return {
      height: this.maxY
    };
  }, e;
}), function (t, e) {
  "function" == typeof define && define.amd ? define("isotope/js/layout-modes/vertical", ["../layout-mode"], e) : "object" == (typeof module === "undefined" ? "undefined" : _typeof(module)) && module.exports ? module.exports = e(require("../layout-mode")) : e(t.Isotope.LayoutMode);
}(window, function (t) {
  "use strict";

  var e = t.create("vertical", {
    horizontalAlignment: 0
  }),
      i = e.prototype;
  return i._resetLayout = function () {
    this.y = 0;
  }, i._getItemLayoutPosition = function (t) {
    t.getSize();
    var e = (this.isotope.size.innerWidth - t.size.outerWidth) * this.options.horizontalAlignment,
        i = this.y;
    return this.y += t.size.outerHeight, {
      x: e,
      y: i
    };
  }, i._getContainerSize = function () {
    return {
      height: this.y
    };
  }, e;
}), function (t, e) {
  "function" == typeof define && define.amd ? define(["outlayer/outlayer", "get-size/get-size", "desandro-matches-selector/matches-selector", "fizzy-ui-utils/utils", "isotope/js/item", "isotope/js/layout-mode", "isotope/js/layout-modes/masonry", "isotope/js/layout-modes/fit-rows", "isotope/js/layout-modes/vertical"], function (i, n, o, s, r, a) {
    return e(t, i, n, o, s, r, a);
  }) : "object" == (typeof module === "undefined" ? "undefined" : _typeof(module)) && module.exports ? module.exports = e(t, require("outlayer"), require("get-size"), require("desandro-matches-selector"), require("fizzy-ui-utils"), require("isotope/js/item"), require("isotope/js/layout-mode"), require("isotope/js/layout-modes/masonry"), require("isotope/js/layout-modes/fit-rows"), require("isotope/js/layout-modes/vertical")) : t.Isotope = e(t, t.Outlayer, t.getSize, t.matchesSelector, t.fizzyUIUtils, t.Isotope.Item, t.Isotope.LayoutMode);
}(window, function (t, e, i, n, o, s, r) {
  function a(t, e) {
    return function (i, n) {
      for (var o = 0; o < t.length; o++) {
        var s = t[o],
            r = i.sortData[s],
            a = n.sortData[s];

        if (r > a || r < a) {
          var u = void 0 !== e[s] ? e[s] : e,
              h = u ? 1 : -1;
          return (r > a ? 1 : -1) * h;
        }
      }

      return 0;
    };
  }

  var u = t.jQuery,
      h = String.prototype.trim ? function (t) {
    return t.trim();
  } : function (t) {
    return t.replace(/^\s+|\s+$/g, "");
  },
      d = e.create("isotope", {
    layoutMode: "masonry",
    isJQueryFiltering: !0,
    sortAscending: !0
  });
  d.Item = s, d.LayoutMode = r;
  var l = d.prototype;
  l._create = function () {
    this.itemGUID = 0, this._sorters = {}, this._getSorters(), e.prototype._create.call(this), this.modes = {}, this.filteredItems = this.items, this.sortHistory = ["original-order"];

    for (var t in r.modes) {
      this._initLayoutMode(t);
    }
  }, l.reloadItems = function () {
    this.itemGUID = 0, e.prototype.reloadItems.call(this);
  }, l._itemize = function () {
    for (var t = e.prototype._itemize.apply(this, arguments), i = 0; i < t.length; i++) {
      var n = t[i];
      n.id = this.itemGUID++;
    }

    return this._updateItemsSortData(t), t;
  }, l._initLayoutMode = function (t) {
    var e = r.modes[t],
        i = this.options[t] || {};
    this.options[t] = e.options ? o.extend(e.options, i) : i, this.modes[t] = new e(this);
  }, l.layout = function () {
    return !this._isLayoutInited && this._getOption("initLayout") ? void this.arrange() : void this._layout();
  }, l._layout = function () {
    var t = this._getIsInstant();

    this._resetLayout(), this._manageStamps(), this.layoutItems(this.filteredItems, t), this._isLayoutInited = !0;
  }, l.arrange = function (t) {
    this.option(t), this._getIsInstant();

    var e = this._filter(this.items);

    this.filteredItems = e.matches, this._bindArrangeComplete(), this._isInstant ? this._noTransition(this._hideReveal, [e]) : this._hideReveal(e), this._sort(), this._layout();
  }, l._init = l.arrange, l._hideReveal = function (t) {
    this.reveal(t.needReveal), this.hide(t.needHide);
  }, l._getIsInstant = function () {
    var t = this._getOption("layoutInstant"),
        e = void 0 !== t ? t : !this._isLayoutInited;

    return this._isInstant = e, e;
  }, l._bindArrangeComplete = function () {
    function t() {
      e && i && n && o.dispatchEvent("arrangeComplete", null, [o.filteredItems]);
    }

    var e,
        i,
        n,
        o = this;
    this.once("layoutComplete", function () {
      e = !0, t();
    }), this.once("hideComplete", function () {
      i = !0, t();
    }), this.once("revealComplete", function () {
      n = !0, t();
    });
  }, l._filter = function (t) {
    var e = this.options.filter;
    e = e || "*";

    for (var i = [], n = [], o = [], s = this._getFilterTest(e), r = 0; r < t.length; r++) {
      var a = t[r];

      if (!a.isIgnored) {
        var u = s(a);
        u && i.push(a), u && a.isHidden ? n.push(a) : u || a.isHidden || o.push(a);
      }
    }

    return {
      matches: i,
      needReveal: n,
      needHide: o
    };
  }, l._getFilterTest = function (t) {
    return u && this.options.isJQueryFiltering ? function (e) {
      return u(e.element).is(t);
    } : "function" == typeof t ? function (e) {
      return t(e.element);
    } : function (e) {
      return n(e.element, t);
    };
  }, l.updateSortData = function (t) {
    var e;
    t ? (t = o.makeArray(t), e = this.getItems(t)) : e = this.items, this._getSorters(), this._updateItemsSortData(e);
  }, l._getSorters = function () {
    var t = this.options.getSortData;

    for (var e in t) {
      var i = t[e];
      this._sorters[e] = f(i);
    }
  }, l._updateItemsSortData = function (t) {
    for (var e = t && t.length, i = 0; e && i < e; i++) {
      var n = t[i];
      n.updateSortData();
    }
  };

  var f = function () {
    function t(t) {
      if ("string" != typeof t) return t;
      var i = h(t).split(" "),
          n = i[0],
          o = n.match(/^\[(.+)\]$/),
          s = o && o[1],
          r = e(s, n),
          a = d.sortDataParsers[i[1]];
      return t = a ? function (t) {
        return t && a(r(t));
      } : function (t) {
        return t && r(t);
      };
    }

    function e(t, e) {
      return t ? function (e) {
        return e.getAttribute(t);
      } : function (t) {
        var i = t.querySelector(e);
        return i && i.textContent;
      };
    }

    return t;
  }();

  d.sortDataParsers = {
    parseInt: function (_parseInt) {
      function parseInt(_x) {
        return _parseInt.apply(this, arguments);
      }

      parseInt.toString = function () {
        return _parseInt.toString();
      };

      return parseInt;
    }(function (t) {
      return parseInt(t, 10);
    }),
    parseFloat: function (_parseFloat) {
      function parseFloat(_x2) {
        return _parseFloat.apply(this, arguments);
      }

      parseFloat.toString = function () {
        return _parseFloat.toString();
      };

      return parseFloat;
    }(function (t) {
      return parseFloat(t);
    })
  }, l._sort = function () {
    if (this.options.sortBy) {
      var t = o.makeArray(this.options.sortBy);
      this._getIsSameSortBy(t) || (this.sortHistory = t.concat(this.sortHistory));
      var e = a(this.sortHistory, this.options.sortAscending);
      this.filteredItems.sort(e);
    }
  }, l._getIsSameSortBy = function (t) {
    for (var e = 0; e < t.length; e++) {
      if (t[e] != this.sortHistory[e]) return !1;
    }

    return !0;
  }, l._mode = function () {
    var t = this.options.layoutMode,
        e = this.modes[t];
    if (!e) throw new Error("No layout mode: " + t);
    return e.options = this.options[t], e;
  }, l._resetLayout = function () {
    e.prototype._resetLayout.call(this), this._mode()._resetLayout();
  }, l._getItemLayoutPosition = function (t) {
    return this._mode()._getItemLayoutPosition(t);
  }, l._manageStamp = function (t) {
    this._mode()._manageStamp(t);
  }, l._getContainerSize = function () {
    return this._mode()._getContainerSize();
  }, l.needsResizeLayout = function () {
    return this._mode().needsResizeLayout();
  }, l.appended = function (t) {
    var e = this.addItems(t);

    if (e.length) {
      var i = this._filterRevealAdded(e);

      this.filteredItems = this.filteredItems.concat(i);
    }
  }, l.prepended = function (t) {
    var e = this._itemize(t);

    if (e.length) {
      this._resetLayout(), this._manageStamps();

      var i = this._filterRevealAdded(e);

      this.layoutItems(this.filteredItems), this.filteredItems = i.concat(this.filteredItems), this.items = e.concat(this.items);
    }
  }, l._filterRevealAdded = function (t) {
    var e = this._filter(t);

    return this.hide(e.needHide), this.reveal(e.matches), this.layoutItems(e.matches, !0), e.matches;
  }, l.insert = function (t) {
    var e = this.addItems(t);

    if (e.length) {
      var i,
          n,
          o = e.length;

      for (i = 0; i < o; i++) {
        n = e[i], this.element.appendChild(n.element);
      }

      var s = this._filter(e).matches;

      for (i = 0; i < o; i++) {
        e[i].isLayoutInstant = !0;
      }

      for (this.arrange(), i = 0; i < o; i++) {
        delete e[i].isLayoutInstant;
      }

      this.reveal(s);
    }
  };
  var m = l.remove;
  return l.remove = function (t) {
    t = o.makeArray(t);
    var e = this.getItems(t);
    m.call(this, t);

    for (var i = e && e.length, n = 0; i && n < i; n++) {
      var s = e[n];
      o.removeFrom(this.filteredItems, s);
    }
  }, l.shuffle = function () {
    for (var t = 0; t < this.items.length; t++) {
      var e = this.items[t];
      e.sortData.random = Math.random();
    }

    this.options.sortBy = "random", this._sort(), this._layout();
  }, l._noTransition = function (t, e) {
    var i = this.options.transitionDuration;
    this.options.transitionDuration = 0;
    var n = t.apply(this, e);
    return this.options.transitionDuration = i, n;
  }, l.getFilteredItemElements = function () {
    return this.filteredItems.map(function (t) {
      return t.element;
    });
  }, d;
});
/*!
 * imagesLoaded PACKAGED v4.1.1
 * JavaScript is all like "You images are done yet or what?"
 * MIT License
 */

!function (t, e) {
  "function" == typeof define && define.amd ? define("ev-emitter/ev-emitter", e) : "object" == (typeof module === "undefined" ? "undefined" : _typeof(module)) && module.exports ? module.exports = e() : t.EvEmitter = e();
}("undefined" != typeof window ? window : this, function () {
  function t() {}

  var e = t.prototype;
  return e.on = function (t, e) {
    if (t && e) {
      var i = this._events = this._events || {},
          n = i[t] = i[t] || [];
      return -1 == n.indexOf(e) && n.push(e), this;
    }
  }, e.once = function (t, e) {
    if (t && e) {
      this.on(t, e);
      var i = this._onceEvents = this._onceEvents || {},
          n = i[t] = i[t] || {};
      return n[e] = !0, this;
    }
  }, e.off = function (t, e) {
    var i = this._events && this._events[t];

    if (i && i.length) {
      var n = i.indexOf(e);
      return -1 != n && i.splice(n, 1), this;
    }
  }, e.emitEvent = function (t, e) {
    var i = this._events && this._events[t];

    if (i && i.length) {
      var n = 0,
          o = i[n];
      e = e || [];

      for (var r = this._onceEvents && this._onceEvents[t]; o;) {
        var s = r && r[o];
        s && (this.off(t, o), delete r[o]), o.apply(this, e), n += s ? 0 : 1, o = i[n];
      }

      return this;
    }
  }, t;
}), function (t, e) {
  "use strict";

  "function" == typeof define && define.amd ? define(["ev-emitter/ev-emitter"], function (i) {
    return e(t, i);
  }) : "object" == (typeof module === "undefined" ? "undefined" : _typeof(module)) && module.exports ? module.exports = e(t, require("ev-emitter")) : t.imagesLoaded = e(t, t.EvEmitter);
}(window, function (t, e) {
  function i(t, e) {
    for (var i in e) {
      t[i] = e[i];
    }

    return t;
  }

  function n(t) {
    var e = [];
    if (Array.isArray(t)) e = t;else if ("number" == typeof t.length) for (var i = 0; i < t.length; i++) {
      e.push(t[i]);
    } else e.push(t);
    return e;
  }

  function o(t, e, r) {
    return this instanceof o ? ("string" == typeof t && (t = document.querySelectorAll(t)), this.elements = n(t), this.options = i({}, this.options), "function" == typeof e ? r = e : i(this.options, e), r && this.on("always", r), this.getImages(), h && (this.jqDeferred = new h.Deferred()), void setTimeout(function () {
      this.check();
    }.bind(this))) : new o(t, e, r);
  }

  function r(t) {
    this.img = t;
  }

  function s(t, e) {
    this.url = t, this.element = e, this.img = new Image();
  }

  var h = t.jQuery,
      a = t.console;
  o.prototype = Object.create(e.prototype), o.prototype.options = {}, o.prototype.getImages = function () {
    this.images = [], this.elements.forEach(this.addElementImages, this);
  }, o.prototype.addElementImages = function (t) {
    "IMG" == t.nodeName && this.addImage(t), this.options.background === !0 && this.addElementBackgroundImages(t);
    var e = t.nodeType;

    if (e && d[e]) {
      for (var i = t.querySelectorAll("img"), n = 0; n < i.length; n++) {
        var o = i[n];
        this.addImage(o);
      }

      if ("string" == typeof this.options.background) {
        var r = t.querySelectorAll(this.options.background);

        for (n = 0; n < r.length; n++) {
          var s = r[n];
          this.addElementBackgroundImages(s);
        }
      }
    }
  };
  var d = {
    1: !0,
    9: !0,
    11: !0
  };
  return o.prototype.addElementBackgroundImages = function (t) {
    var e = getComputedStyle(t);
    if (e) for (var i = /url\((['"])?(.*?)\1\)/gi, n = i.exec(e.backgroundImage); null !== n;) {
      var o = n && n[2];
      o && this.addBackground(o, t), n = i.exec(e.backgroundImage);
    }
  }, o.prototype.addImage = function (t) {
    var e = new r(t);
    this.images.push(e);
  }, o.prototype.addBackground = function (t, e) {
    var i = new s(t, e);
    this.images.push(i);
  }, o.prototype.check = function () {
    function t(t, i, n) {
      setTimeout(function () {
        e.progress(t, i, n);
      });
    }

    var e = this;
    return this.progressedCount = 0, this.hasAnyBroken = !1, this.images.length ? void this.images.forEach(function (e) {
      e.once("progress", t), e.check();
    }) : void this.complete();
  }, o.prototype.progress = function (t, e, i) {
    this.progressedCount++, this.hasAnyBroken = this.hasAnyBroken || !t.isLoaded, this.emitEvent("progress", [this, t, e]), this.jqDeferred && this.jqDeferred.notify && this.jqDeferred.notify(this, t), this.progressedCount == this.images.length && this.complete(), this.options.debug && a && a.log("progress: " + i, t, e);
  }, o.prototype.complete = function () {
    var t = this.hasAnyBroken ? "fail" : "done";

    if (this.isComplete = !0, this.emitEvent(t, [this]), this.emitEvent("always", [this]), this.jqDeferred) {
      var e = this.hasAnyBroken ? "reject" : "resolve";
      this.jqDeferred[e](this);
    }
  }, r.prototype = Object.create(e.prototype), r.prototype.check = function () {
    var t = this.getIsImageComplete();
    return t ? void this.confirm(0 !== this.img.naturalWidth, "naturalWidth") : (this.proxyImage = new Image(), this.proxyImage.addEventListener("load", this), this.proxyImage.addEventListener("error", this), this.img.addEventListener("load", this), this.img.addEventListener("error", this), void (this.proxyImage.src = this.img.src));
  }, r.prototype.getIsImageComplete = function () {
    return this.img.complete && void 0 !== this.img.naturalWidth;
  }, r.prototype.confirm = function (t, e) {
    this.isLoaded = t, this.emitEvent("progress", [this, this.img, e]);
  }, r.prototype.handleEvent = function (t) {
    var e = "on" + t.type;
    this[e] && this[e](t);
  }, r.prototype.onload = function () {
    this.confirm(!0, "onload"), this.unbindEvents();
  }, r.prototype.onerror = function () {
    this.confirm(!1, "onerror"), this.unbindEvents();
  }, r.prototype.unbindEvents = function () {
    this.proxyImage.removeEventListener("load", this), this.proxyImage.removeEventListener("error", this), this.img.removeEventListener("load", this), this.img.removeEventListener("error", this);
  }, s.prototype = Object.create(r.prototype), s.prototype.check = function () {
    this.img.addEventListener("load", this), this.img.addEventListener("error", this), this.img.src = this.url;
    var t = this.getIsImageComplete();
    t && (this.confirm(0 !== this.img.naturalWidth, "naturalWidth"), this.unbindEvents());
  }, s.prototype.unbindEvents = function () {
    this.img.removeEventListener("load", this), this.img.removeEventListener("error", this);
  }, s.prototype.confirm = function (t, e) {
    this.isLoaded = t, this.emitEvent("progress", [this, this.element, e]);
  }, o.makeJQueryPlugin = function (e) {
    e = e || t.jQuery, e && (h = e, h.fn.imagesLoaded = function (t, e) {
      var i = new o(this, t, e);
      return i.jqDeferred.promise(h(this));
    });
  }, o.makeJQueryPlugin(), o;
});
/*!
* jquery.counterup.js 1.0
*
* Copyright 2013, Benjamin Intal http://gambit.ph @bfintal
* Released under the GPL v2 License
*
* Date: Nov 26, 2013
*/

(function (e) {
  "use strict";

  e.fn.counterUp = function (t) {
    var n = e.extend({
      time: 400,
      delay: 10
    }, t);
    return this.each(function () {
      var t = e(this),
          r = n,
          i = function i() {
        var e = [],
            n = r.time / r.delay,
            i = t.text(),
            s = /[0-9]+,[0-9]+/.test(i);
        i = i.replace(/,/g, "");
        var o = /^[0-9]+$/.test(i),
            u = /^[0-9]+\.[0-9]+$/.test(i),
            a = u ? (i.split(".")[1] || []).length : 0;

        for (var f = n; f >= 1; f--) {
          var l = parseInt(i / n * f);
          u && (l = parseFloat(i / n * f).toFixed(a));
          if (s) while (/(\d+)(\d{3})/.test(l.toString())) {
            l = l.toString().replace(/(\d+)(\d{3})/, "$1,$2");
          }
          e.unshift(l);
        }

        t.data("counterup-nums", e);
        t.text("0");

        var c = function c() {
          t.text(t.data("counterup-nums").shift());
          if (t.data("counterup-nums").length) setTimeout(t.data("counterup-func"), r.delay);else {
            delete t.data("counterup-nums");
            t.data("counterup-nums", null);
            t.data("counterup-func", null);
          }
        };

        t.data("counterup-func", c);
        setTimeout(t.data("counterup-func"), r.delay);
      };

      t.waypoint(i, {
        offset: "100%",
        triggerOnce: !0
      });
    });
  };
})(jQuery); // Generated by CoffeeScript 1.6.2

/*
jQuery Waypoints - v2.0.3
Copyright (c) 2011-2013 Caleb Troughton
Dual licensed under the MIT license and GPL license.
https://github.com/imakewebthings/jquery-waypoints/blob/master/licenses.txt
*/


(function () {
  var t = [].indexOf || function (t) {
    for (var e = 0, n = this.length; e < n; e++) {
      if (e in this && this[e] === t) return e;
    }

    return -1;
  },
      e = [].slice;

  (function (t, e) {
    if (typeof define === "function" && define.amd) {
      return define("waypoints", ["jquery"], function (n) {
        return e(n, t);
      });
    } else {
      return e(t.jQuery, t);
    }
  })(this, function (n, r) {
    var i, o, l, s, f, u, a, c, h, d, p, y, v, w, g, m;
    i = n(r);
    c = t.call(r, "ontouchstart") >= 0;
    s = {
      horizontal: {},
      vertical: {}
    };
    f = 1;
    a = {};
    u = "waypoints-context-id";
    p = "resize.waypoints";
    y = "scroll.waypoints";
    v = 1;
    w = "waypoints-waypoint-ids";
    g = "waypoint";
    m = "waypoints";

    o = function () {
      function t(t) {
        var e = this;
        this.$element = t;
        this.element = t[0];
        this.didResize = false;
        this.didScroll = false;
        this.id = "context" + f++;
        this.oldScroll = {
          x: t.scrollLeft(),
          y: t.scrollTop()
        };
        this.waypoints = {
          horizontal: {},
          vertical: {}
        };
        t.data(u, this.id);
        a[this.id] = this;
        t.bind(y, function () {
          var t;

          if (!(e.didScroll || c)) {
            e.didScroll = true;

            t = function t() {
              e.doScroll();
              return e.didScroll = false;
            };

            return r.setTimeout(t, n[m].settings.scrollThrottle);
          }
        });
        t.bind(p, function () {
          var t;

          if (!e.didResize) {
            e.didResize = true;

            t = function t() {
              n[m]("refresh");
              return e.didResize = false;
            };

            return r.setTimeout(t, n[m].settings.resizeThrottle);
          }
        });
      }

      t.prototype.doScroll = function () {
        var t,
            e = this;
        t = {
          horizontal: {
            newScroll: this.$element.scrollLeft(),
            oldScroll: this.oldScroll.x,
            forward: "right",
            backward: "left"
          },
          vertical: {
            newScroll: this.$element.scrollTop(),
            oldScroll: this.oldScroll.y,
            forward: "down",
            backward: "up"
          }
        };

        if (c && (!t.vertical.oldScroll || !t.vertical.newScroll)) {
          n[m]("refresh");
        }

        n.each(t, function (t, r) {
          var i, o, l;
          l = [];
          o = r.newScroll > r.oldScroll;
          i = o ? r.forward : r.backward;
          n.each(e.waypoints[t], function (t, e) {
            var n, i;

            if (r.oldScroll < (n = e.offset) && n <= r.newScroll) {
              return l.push(e);
            } else if (r.newScroll < (i = e.offset) && i <= r.oldScroll) {
              return l.push(e);
            }
          });
          l.sort(function (t, e) {
            return t.offset - e.offset;
          });

          if (!o) {
            l.reverse();
          }

          return n.each(l, function (t, e) {
            if (e.options.continuous || t === l.length - 1) {
              return e.trigger([i]);
            }
          });
        });
        return this.oldScroll = {
          x: t.horizontal.newScroll,
          y: t.vertical.newScroll
        };
      };

      t.prototype.refresh = function () {
        var t,
            e,
            r,
            i = this;
        r = n.isWindow(this.element);
        e = this.$element.offset();
        this.doScroll();
        t = {
          horizontal: {
            contextOffset: r ? 0 : e.left,
            contextScroll: r ? 0 : this.oldScroll.x,
            contextDimension: this.$element.width(),
            oldScroll: this.oldScroll.x,
            forward: "right",
            backward: "left",
            offsetProp: "left"
          },
          vertical: {
            contextOffset: r ? 0 : e.top,
            contextScroll: r ? 0 : this.oldScroll.y,
            contextDimension: r ? n[m]("viewportHeight") : this.$element.height(),
            oldScroll: this.oldScroll.y,
            forward: "down",
            backward: "up",
            offsetProp: "top"
          }
        };
        return n.each(t, function (t, e) {
          return n.each(i.waypoints[t], function (t, r) {
            var i, o, l, s, f;
            i = r.options.offset;
            l = r.offset;
            o = n.isWindow(r.element) ? 0 : r.$element.offset()[e.offsetProp];

            if (n.isFunction(i)) {
              i = i.apply(r.element);
            } else if (typeof i === "string") {
              i = parseFloat(i);

              if (r.options.offset.indexOf("%") > -1) {
                i = Math.ceil(e.contextDimension * i / 100);
              }
            }

            r.offset = o - e.contextOffset + e.contextScroll - i;

            if (r.options.onlyOnScroll && l != null || !r.enabled) {
              return;
            }

            if (l !== null && l < (s = e.oldScroll) && s <= r.offset) {
              return r.trigger([e.backward]);
            } else if (l !== null && l > (f = e.oldScroll) && f >= r.offset) {
              return r.trigger([e.forward]);
            } else if (l === null && e.oldScroll >= r.offset) {
              return r.trigger([e.forward]);
            }
          });
        });
      };

      t.prototype.checkEmpty = function () {
        if (n.isEmptyObject(this.waypoints.horizontal) && n.isEmptyObject(this.waypoints.vertical)) {
          this.$element.unbind([p, y].join(" "));
          return delete a[this.id];
        }
      };

      return t;
    }();

    l = function () {
      function t(t, e, r) {
        var i, o;
        r = n.extend({}, n.fn[g].defaults, r);

        if (r.offset === "bottom-in-view") {
          r.offset = function () {
            var t;
            t = n[m]("viewportHeight");

            if (!n.isWindow(e.element)) {
              t = e.$element.height();
            }

            return t - n(this).outerHeight();
          };
        }

        this.$element = t;
        this.element = t[0];
        this.axis = r.horizontal ? "horizontal" : "vertical";
        this.callback = r.handler;
        this.context = e;
        this.enabled = r.enabled;
        this.id = "waypoints" + v++;
        this.offset = null;
        this.options = r;
        e.waypoints[this.axis][this.id] = this;
        s[this.axis][this.id] = this;
        i = (o = t.data(w)) != null ? o : [];
        i.push(this.id);
        t.data(w, i);
      }

      t.prototype.trigger = function (t) {
        if (!this.enabled) {
          return;
        }

        if (this.callback != null) {
          this.callback.apply(this.element, t);
        }

        if (this.options.triggerOnce) {
          return this.destroy();
        }
      };

      t.prototype.disable = function () {
        return this.enabled = false;
      };

      t.prototype.enable = function () {
        this.context.refresh();
        return this.enabled = true;
      };

      t.prototype.destroy = function () {
        delete s[this.axis][this.id];
        delete this.context.waypoints[this.axis][this.id];
        return this.context.checkEmpty();
      };

      t.getWaypointsByElement = function (t) {
        var e, r;
        r = n(t).data(w);

        if (!r) {
          return [];
        }

        e = n.extend({}, s.horizontal, s.vertical);
        return n.map(r, function (t) {
          return e[t];
        });
      };

      return t;
    }();

    d = {
      init: function init(t, e) {
        var r;

        if (e == null) {
          e = {};
        }

        if ((r = e.handler) == null) {
          e.handler = t;
        }

        this.each(function () {
          var t, r, i, s;
          t = n(this);
          i = (s = e.context) != null ? s : n.fn[g].defaults.context;

          if (!n.isWindow(i)) {
            i = t.closest(i);
          }

          i = n(i);
          r = a[i.data(u)];

          if (!r) {
            r = new o(i);
          }

          return new l(t, r, e);
        });
        n[m]("refresh");
        return this;
      },
      disable: function disable() {
        return d._invoke(this, "disable");
      },
      enable: function enable() {
        return d._invoke(this, "enable");
      },
      destroy: function destroy() {
        return d._invoke(this, "destroy");
      },
      prev: function prev(t, e) {
        return d._traverse.call(this, t, e, function (t, e, n) {
          if (e > 0) {
            return t.push(n[e - 1]);
          }
        });
      },
      next: function next(t, e) {
        return d._traverse.call(this, t, e, function (t, e, n) {
          if (e < n.length - 1) {
            return t.push(n[e + 1]);
          }
        });
      },
      _traverse: function _traverse(t, e, i) {
        var o, l;

        if (t == null) {
          t = "vertical";
        }

        if (e == null) {
          e = r;
        }

        l = h.aggregate(e);
        o = [];
        this.each(function () {
          var e;
          e = n.inArray(this, l[t]);
          return i(o, e, l[t]);
        });
        return this.pushStack(o);
      },
      _invoke: function _invoke(t, e) {
        t.each(function () {
          var t;
          t = l.getWaypointsByElement(this);
          return n.each(t, function (t, n) {
            n[e]();
            return true;
          });
        });
        return this;
      }
    };

    n.fn[g] = function () {
      var t, r;
      r = arguments[0], t = 2 <= arguments.length ? e.call(arguments, 1) : [];

      if (d[r]) {
        return d[r].apply(this, t);
      } else if (n.isFunction(r)) {
        return d.init.apply(this, arguments);
      } else if (n.isPlainObject(r)) {
        return d.init.apply(this, [null, r]);
      } else if (!r) {
        return n.error("jQuery Waypoints needs a callback function or handler option.");
      } else {
        return n.error("The " + r + " method does not exist in jQuery Waypoints.");
      }
    };

    n.fn[g].defaults = {
      context: r,
      continuous: true,
      enabled: true,
      horizontal: false,
      offset: 0,
      triggerOnce: false
    };
    h = {
      refresh: function refresh() {
        return n.each(a, function (t, e) {
          return e.refresh();
        });
      },
      viewportHeight: function viewportHeight() {
        var t;
        return (t = r.innerHeight) != null ? t : i.height();
      },
      aggregate: function aggregate(t) {
        var e, r, i;
        e = s;

        if (t) {
          e = (i = a[n(t).data(u)]) != null ? i.waypoints : void 0;
        }

        if (!e) {
          return [];
        }

        r = {
          horizontal: [],
          vertical: []
        };
        n.each(r, function (t, i) {
          n.each(e[t], function (t, e) {
            return i.push(e);
          });
          i.sort(function (t, e) {
            return t.offset - e.offset;
          });
          r[t] = n.map(i, function (t) {
            return t.element;
          });
          return r[t] = n.unique(r[t]);
        });
        return r;
      },
      above: function above(t) {
        if (t == null) {
          t = r;
        }

        return h._filter(t, "vertical", function (t, e) {
          return e.offset <= t.oldScroll.y;
        });
      },
      below: function below(t) {
        if (t == null) {
          t = r;
        }

        return h._filter(t, "vertical", function (t, e) {
          return e.offset > t.oldScroll.y;
        });
      },
      left: function left(t) {
        if (t == null) {
          t = r;
        }

        return h._filter(t, "horizontal", function (t, e) {
          return e.offset <= t.oldScroll.x;
        });
      },
      right: function right(t) {
        if (t == null) {
          t = r;
        }

        return h._filter(t, "horizontal", function (t, e) {
          return e.offset > t.oldScroll.x;
        });
      },
      enable: function enable() {
        return h._invoke("enable");
      },
      disable: function disable() {
        return h._invoke("disable");
      },
      destroy: function destroy() {
        return h._invoke("destroy");
      },
      extendFn: function extendFn(t, e) {
        return d[t] = e;
      },
      _invoke: function _invoke(t) {
        var e;
        e = n.extend({}, s.vertical, s.horizontal);
        return n.each(e, function (e, n) {
          n[t]();
          return true;
        });
      },
      _filter: function _filter(t, e, r) {
        var i, o;
        i = a[n(t).data(u)];

        if (!i) {
          return [];
        }

        o = [];
        n.each(i.waypoints[e], function (t, e) {
          if (r(i, e)) {
            return o.push(e);
          }
        });
        o.sort(function (t, e) {
          return t.offset - e.offset;
        });
        return n.map(o, function (t) {
          return t.element;
        });
      }
    };

    n[m] = function () {
      var t, n;
      n = arguments[0], t = 2 <= arguments.length ? e.call(arguments, 1) : [];

      if (h[n]) {
        return h[n].apply(null, t);
      } else {
        return h.aggregate.call(null, n);
      }
    };

    n[m].settings = {
      resizeThrottle: 100,
      scrollThrottle: 30
    };
    return i.load(function () {
      return n[m]("refresh");
    });
  });
}).call(this);
"use strict";

function _classCallCheck(e, t) {
  if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
}

var _extends = Object.assign || function (e) {
  for (var t = 1; t < arguments.length; t++) {
    var i = arguments[t];

    for (var n in i) {
      Object.prototype.hasOwnProperty.call(i, n) && (e[n] = i[n]);
    }
  }

  return e;
},
    _createClass = function () {
  function e(e, t) {
    for (var i = 0; i < t.length; i++) {
      var n = t[i];
      n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
    }
  }

  return function (t, i, n) {
    return i && e(t.prototype, i), n && e(t, n), t;
  };
}(),
    Slinky = function () {
  function e(t) {
    var i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    _classCallCheck(this, e), this.settings = _extends({}, this.options, i), this._init(t);
  }

  return _createClass(e, [{
    key: "options",
    get: function get() {
      return {
        resize: !0,
        speed: 300,
        theme: "slinky-theme-default",
        title: !1
      };
    }
  }]), _createClass(e, [{
    key: "_init",
    value: function value(e) {
      this.menu = $(e), this.base = this.menu.children().first();
      this.base;
      var t = this.menu,
          i = this.settings;
      t.addClass("slinky-menu").addClass(i.theme), this._transition(i.speed), $("a + ul", t).prev().addClass("next"), $("li > a", t).wrapInner("<span>");
      var n = $("<li>").addClass("header");
      $("li > ul", t).prepend(n);
      var s = $("<a>").prop("href", "#").addClass("back");
      $(".header", t).prepend(s), i.title && $("li > ul", t).each(function (e, t) {
        var i = $(t).parent().find("a").first().text();

        if (i) {
          var n = $("<header>").addClass("title").text(i);
          $("> .header", t).append(n);
        }
      }), this._addListeners(), this._jumpToInitial();
    }
  }, {
    key: "_addListeners",
    value: function value() {
      var e = this,
          t = this.menu,
          i = this.settings;
      $("a", t).on("click", function (n) {
        if (e._clicked + i.speed > Date.now()) return !1;
        e._clicked = Date.now();
        var s = $(n.currentTarget);
        (0 === s.attr("href").indexOf("#") || s.hasClass("next") || s.hasClass("back")) && n.preventDefault(), s.hasClass("next") ? (t.find(".active").removeClass("active"), s.next().show().addClass("active"), e._move(1), i.resize && e._resize(s.next())) : s.hasClass("back") && (e._move(-1, function () {
          t.find(".active").removeClass("active"), s.parent().parent().hide().parentsUntil(t, "ul").first().addClass("active");
        }), i.resize && e._resize(s.parent().parent().parentsUntil(t, "ul")));
      });
    }
  }, {
    key: "_jumpToInitial",
    value: function value() {
      var e = this.menu.find(".active");
      e.length > 0 && (e.removeClass("active"), this.jump(e, !1));
    }
  }, {
    key: "_move",
    value: function value() {
      var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : function () {};

      if (0 !== e) {
        var i = this.settings,
            n = this.base,
            s = Math.round(parseInt(n.get(0).style.left)) || 0;
        n.css("left", s - 100 * e + "%"), "function" == typeof t && setTimeout(t, i.speed);
      }
    }
  }, {
    key: "_resize",
    value: function value(e) {
      this.menu.height(e.outerHeight());
    }
  }, {
    key: "_transition",
    value: function value() {
      var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 300,
          t = this.menu,
          i = this.base;
      t.css("transition-duration", e + "ms"), i.css("transition-duration", e + "ms");
    }
  }, {
    key: "jump",
    value: function value(e) {
      var t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];

      if (e) {
        var i = this.menu,
            n = this.settings,
            s = $(e),
            a = i.find(".active"),
            r = 0;
        a.length > 0 && (r = a.parentsUntil(i, "ul").length), i.find("ul").removeClass("active").hide();
        var l = s.parentsUntil(i, "ul");
        l.show(), s.show().addClass("active"), t || this._transition(0), this._move(l.length - r), n.resize && this._resize(s), t || this._transition(n.speed);
      }
    }
  }, {
    key: "home",
    value: function value() {
      var e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
          t = this.base,
          i = this.menu,
          n = this.settings;
      e || this._transition(0);
      var s = i.find(".active"),
          a = s.parentsUntil(i, "ul");
      this._move(-a.length, function () {
        s.removeClass("active").hide(), a.not(t).hide();
      }), n.resize && this._resize(t), !1 === e && this._transition(n.speed);
    }
  }, {
    key: "destroy",
    value: function value() {
      var e = this,
          t = this.base,
          i = this.menu;
      $(".header", i).remove(), $("a", i).removeClass("next").off("click"), i.css({
        height: "",
        "transition-duration": ""
      }), t.css({
        left: "",
        "transition-duration": ""
      }), $("li > a > span", i).contents().unwrap(), i.find(".active").removeClass("active"), i.attr("class").split(" ").forEach(function (e) {
        0 === e.indexOf("slinky") && i.removeClass(e);
      }), ["settings", "menu", "base"].forEach(function (t) {
        return delete e[t];
      });
    }
  }]), e;
}();

jQuery.fn.slinky = function (e) {
  return new Slinky(this, e);
};
/**
 * Owl Carousel v2.2.1
 * Copyright 2013-2017 David Deutsch
 * Licensed under  ()
 */


!function (a, b, c, d) {
  function e(b, c) {
    this.settings = null, this.options = a.extend({}, e.Defaults, c), this.$element = a(b), this._handlers = {}, this._plugins = {}, this._supress = {}, this._current = null, this._speed = null, this._coordinates = [], this._breakpoint = null, this._width = null, this._items = [], this._clones = [], this._mergers = [], this._widths = [], this._invalidated = {}, this._pipe = [], this._drag = {
      time: null,
      target: null,
      pointer: null,
      stage: {
        start: null,
        current: null
      },
      direction: null
    }, this._states = {
      current: {},
      tags: {
        initializing: ["busy"],
        animating: ["busy"],
        dragging: ["interacting"]
      }
    }, a.each(["onResize", "onThrottledResize"], a.proxy(function (b, c) {
      this._handlers[c] = a.proxy(this[c], this);
    }, this)), a.each(e.Plugins, a.proxy(function (a, b) {
      this._plugins[a.charAt(0).toLowerCase() + a.slice(1)] = new b(this);
    }, this)), a.each(e.Workers, a.proxy(function (b, c) {
      this._pipe.push({
        filter: c.filter,
        run: a.proxy(c.run, this)
      });
    }, this)), this.setup(), this.initialize();
  }

  e.Defaults = {
    items: 3,
    loop: !1,
    center: !1,
    rewind: !1,
    mouseDrag: !0,
    touchDrag: !0,
    pullDrag: !0,
    freeDrag: !1,
    margin: 0,
    stagePadding: 0,
    merge: !1,
    mergeFit: !0,
    autoWidth: !1,
    startPosition: 0,
    rtl: !1,
    smartSpeed: 250,
    fluidSpeed: !1,
    dragEndSpeed: !1,
    responsive: {},
    responsiveRefreshRate: 200,
    responsiveBaseElement: b,
    fallbackEasing: "swing",
    info: !1,
    nestedItemSelector: !1,
    itemElement: "div",
    stageElement: "div",
    refreshClass: "owl-refresh",
    loadedClass: "owl-loaded",
    loadingClass: "owl-loading",
    rtlClass: "owl-rtl",
    responsiveClass: "owl-responsive",
    dragClass: "owl-drag",
    itemClass: "owl-item",
    stageClass: "owl-stage",
    stageOuterClass: "owl-stage-outer",
    grabClass: "owl-grab"
  }, e.Width = {
    Default: "default",
    Inner: "inner",
    Outer: "outer"
  }, e.Type = {
    Event: "event",
    State: "state"
  }, e.Plugins = {}, e.Workers = [{
    filter: ["width", "settings"],
    run: function run() {
      this._width = this.$element.width();
    }
  }, {
    filter: ["width", "items", "settings"],
    run: function run(a) {
      a.current = this._items && this._items[this.relative(this._current)];
    }
  }, {
    filter: ["items", "settings"],
    run: function run() {
      this.$stage.children(".cloned").remove();
    }
  }, {
    filter: ["width", "items", "settings"],
    run: function run(a) {
      var b = this.settings.margin || "",
          c = !this.settings.autoWidth,
          d = this.settings.rtl,
          e = {
        width: "auto",
        "margin-left": d ? b : "",
        "margin-right": d ? "" : b
      };
      !c && this.$stage.children().css(e), a.css = e;
    }
  }, {
    filter: ["width", "items", "settings"],
    run: function run(a) {
      var b = (this.width() / this.settings.items).toFixed(3) - this.settings.margin,
          c = null,
          d = this._items.length,
          e = !this.settings.autoWidth,
          f = [];

      for (a.items = {
        merge: !1,
        width: b
      }; d--;) {
        c = this._mergers[d], c = this.settings.mergeFit && Math.min(c, this.settings.items) || c, a.items.merge = c > 1 || a.items.merge, f[d] = e ? b * c : this._items[d].width();
      }

      this._widths = f;
    }
  }, {
    filter: ["items", "settings"],
    run: function run() {
      var b = [],
          c = this._items,
          d = this.settings,
          e = Math.max(2 * d.items, 4),
          f = 2 * Math.ceil(c.length / 2),
          g = d.loop && c.length ? d.rewind ? e : Math.max(e, f) : 0,
          h = "",
          i = "";

      for (g /= 2; g--;) {
        b.push(this.normalize(b.length / 2, !0)), h += c[b[b.length - 1]][0].outerHTML, b.push(this.normalize(c.length - 1 - (b.length - 1) / 2, !0)), i = c[b[b.length - 1]][0].outerHTML + i;
      }

      this._clones = b, a(h).addClass("cloned").appendTo(this.$stage), a(i).addClass("cloned").prependTo(this.$stage);
    }
  }, {
    filter: ["width", "items", "settings"],
    run: function run() {
      for (var a = this.settings.rtl ? 1 : -1, b = this._clones.length + this._items.length, c = -1, d = 0, e = 0, f = []; ++c < b;) {
        d = f[c - 1] || 0, e = this._widths[this.relative(c)] + this.settings.margin, f.push(d + e * a);
      }

      this._coordinates = f;
    }
  }, {
    filter: ["width", "items", "settings"],
    run: function run() {
      var a = this.settings.stagePadding,
          b = this._coordinates,
          c = {
        width: Math.ceil(Math.abs(b[b.length - 1])) + 2 * a,
        "padding-left": a || "",
        "padding-right": a || ""
      };
      this.$stage.css(c);
    }
  }, {
    filter: ["width", "items", "settings"],
    run: function run(a) {
      var b = this._coordinates.length,
          c = !this.settings.autoWidth,
          d = this.$stage.children();
      if (c && a.items.merge) for (; b--;) {
        a.css.width = this._widths[this.relative(b)], d.eq(b).css(a.css);
      } else c && (a.css.width = a.items.width, d.css(a.css));
    }
  }, {
    filter: ["items"],
    run: function run() {
      this._coordinates.length < 1 && this.$stage.removeAttr("style");
    }
  }, {
    filter: ["width", "items", "settings"],
    run: function run(a) {
      a.current = a.current ? this.$stage.children().index(a.current) : 0, a.current = Math.max(this.minimum(), Math.min(this.maximum(), a.current)), this.reset(a.current);
    }
  }, {
    filter: ["position"],
    run: function run() {
      this.animate(this.coordinates(this._current));
    }
  }, {
    filter: ["width", "position", "items", "settings"],
    run: function run() {
      var a,
          b,
          c,
          d,
          e = this.settings.rtl ? 1 : -1,
          f = 2 * this.settings.stagePadding,
          g = this.coordinates(this.current()) + f,
          h = g + this.width() * e,
          i = [];

      for (c = 0, d = this._coordinates.length; c < d; c++) {
        a = this._coordinates[c - 1] || 0, b = Math.abs(this._coordinates[c]) + f * e, (this.op(a, "<=", g) && this.op(a, ">", h) || this.op(b, "<", g) && this.op(b, ">", h)) && i.push(c);
      }

      this.$stage.children(".active").removeClass("active"), this.$stage.children(":eq(" + i.join("), :eq(") + ")").addClass("active"), this.settings.center && (this.$stage.children(".center").removeClass("center"), this.$stage.children().eq(this.current()).addClass("center"));
    }
  }], e.prototype.initialize = function () {
    if (this.enter("initializing"), this.trigger("initialize"), this.$element.toggleClass(this.settings.rtlClass, this.settings.rtl), this.settings.autoWidth && !this.is("pre-loading")) {
      var b, c, e;
      b = this.$element.find("img"), c = this.settings.nestedItemSelector ? "." + this.settings.nestedItemSelector : d, e = this.$element.children(c).width(), b.length && e <= 0 && this.preloadAutoWidthImages(b);
    }

    this.$element.addClass(this.options.loadingClass), this.$stage = a("<" + this.settings.stageElement + ' class="' + this.settings.stageClass + '"/>').wrap('<div class="' + this.settings.stageOuterClass + '"/>'), this.$element.append(this.$stage.parent()), this.replace(this.$element.children().not(this.$stage.parent())), this.$element.is(":visible") ? this.refresh() : this.invalidate("width"), this.$element.removeClass(this.options.loadingClass).addClass(this.options.loadedClass), this.registerEventHandlers(), this.leave("initializing"), this.trigger("initialized");
  }, e.prototype.setup = function () {
    var b = this.viewport(),
        c = this.options.responsive,
        d = -1,
        e = null;
    c ? (a.each(c, function (a) {
      a <= b && a > d && (d = Number(a));
    }), e = a.extend({}, this.options, c[d]), "function" == typeof e.stagePadding && (e.stagePadding = e.stagePadding()), delete e.responsive, e.responsiveClass && this.$element.attr("class", this.$element.attr("class").replace(new RegExp("(" + this.options.responsiveClass + "-)\\S+\\s", "g"), "$1" + d))) : e = a.extend({}, this.options), this.trigger("change", {
      property: {
        name: "settings",
        value: e
      }
    }), this._breakpoint = d, this.settings = e, this.invalidate("settings"), this.trigger("changed", {
      property: {
        name: "settings",
        value: this.settings
      }
    });
  }, e.prototype.optionsLogic = function () {
    this.settings.autoWidth && (this.settings.stagePadding = !1, this.settings.merge = !1);
  }, e.prototype.prepare = function (b) {
    var c = this.trigger("prepare", {
      content: b
    });
    return c.data || (c.data = a("<" + this.settings.itemElement + "/>").addClass(this.options.itemClass).append(b)), this.trigger("prepared", {
      content: c.data
    }), c.data;
  }, e.prototype.update = function () {
    for (var b = 0, c = this._pipe.length, d = a.proxy(function (a) {
      return this[a];
    }, this._invalidated), e = {}; b < c;) {
      (this._invalidated.all || a.grep(this._pipe[b].filter, d).length > 0) && this._pipe[b].run(e), b++;
    }

    this._invalidated = {}, !this.is("valid") && this.enter("valid");
  }, e.prototype.width = function (a) {
    switch (a = a || e.Width.Default) {
      case e.Width.Inner:
      case e.Width.Outer:
        return this._width;

      default:
        return this._width - 2 * this.settings.stagePadding + this.settings.margin;
    }
  }, e.prototype.refresh = function () {
    this.enter("refreshing"), this.trigger("refresh"), this.setup(), this.optionsLogic(), this.$element.addClass(this.options.refreshClass), this.update(), this.$element.removeClass(this.options.refreshClass), this.leave("refreshing"), this.trigger("refreshed");
  }, e.prototype.onThrottledResize = function () {
    b.clearTimeout(this.resizeTimer), this.resizeTimer = b.setTimeout(this._handlers.onResize, this.settings.responsiveRefreshRate);
  }, e.prototype.onResize = function () {
    return !!this._items.length && this._width !== this.$element.width() && !!this.$element.is(":visible") && (this.enter("resizing"), this.trigger("resize").isDefaultPrevented() ? (this.leave("resizing"), !1) : (this.invalidate("width"), this.refresh(), this.leave("resizing"), void this.trigger("resized")));
  }, e.prototype.registerEventHandlers = function () {
    a.support.transition && this.$stage.on(a.support.transition.end + ".owl.core", a.proxy(this.onTransitionEnd, this)), this.settings.responsive !== !1 && this.on(b, "resize", this._handlers.onThrottledResize), this.settings.mouseDrag && (this.$element.addClass(this.options.dragClass), this.$stage.on("mousedown.owl.core", a.proxy(this.onDragStart, this)), this.$stage.on("dragstart.owl.core selectstart.owl.core", function () {
      return !1;
    })), this.settings.touchDrag && (this.$stage.on("touchstart.owl.core", a.proxy(this.onDragStart, this)), this.$stage.on("touchcancel.owl.core", a.proxy(this.onDragEnd, this)));
  }, e.prototype.onDragStart = function (b) {
    var d = null;
    3 !== b.which && (a.support.transform ? (d = this.$stage.css("transform").replace(/.*\(|\)| /g, "").split(","), d = {
      x: d[16 === d.length ? 12 : 4],
      y: d[16 === d.length ? 13 : 5]
    }) : (d = this.$stage.position(), d = {
      x: this.settings.rtl ? d.left + this.$stage.width() - this.width() + this.settings.margin : d.left,
      y: d.top
    }), this.is("animating") && (a.support.transform ? this.animate(d.x) : this.$stage.stop(), this.invalidate("position")), this.$element.toggleClass(this.options.grabClass, "mousedown" === b.type), this.speed(0), this._drag.time = new Date().getTime(), this._drag.target = a(b.target), this._drag.stage.start = d, this._drag.stage.current = d, this._drag.pointer = this.pointer(b), a(c).on("mouseup.owl.core touchend.owl.core", a.proxy(this.onDragEnd, this)), a(c).one("mousemove.owl.core touchmove.owl.core", a.proxy(function (b) {
      var d = this.difference(this._drag.pointer, this.pointer(b));
      a(c).on("mousemove.owl.core touchmove.owl.core", a.proxy(this.onDragMove, this)), Math.abs(d.x) < Math.abs(d.y) && this.is("valid") || (b.preventDefault(), this.enter("dragging"), this.trigger("drag"));
    }, this)));
  }, e.prototype.onDragMove = function (a) {
    var b = null,
        c = null,
        d = null,
        e = this.difference(this._drag.pointer, this.pointer(a)),
        f = this.difference(this._drag.stage.start, e);
    this.is("dragging") && (a.preventDefault(), this.settings.loop ? (b = this.coordinates(this.minimum()), c = this.coordinates(this.maximum() + 1) - b, f.x = ((f.x - b) % c + c) % c + b) : (b = this.settings.rtl ? this.coordinates(this.maximum()) : this.coordinates(this.minimum()), c = this.settings.rtl ? this.coordinates(this.minimum()) : this.coordinates(this.maximum()), d = this.settings.pullDrag ? -1 * e.x / 5 : 0, f.x = Math.max(Math.min(f.x, b + d), c + d)), this._drag.stage.current = f, this.animate(f.x));
  }, e.prototype.onDragEnd = function (b) {
    var d = this.difference(this._drag.pointer, this.pointer(b)),
        e = this._drag.stage.current,
        f = d.x > 0 ^ this.settings.rtl ? "left" : "right";
    a(c).off(".owl.core"), this.$element.removeClass(this.options.grabClass), (0 !== d.x && this.is("dragging") || !this.is("valid")) && (this.speed(this.settings.dragEndSpeed || this.settings.smartSpeed), this.current(this.closest(e.x, 0 !== d.x ? f : this._drag.direction)), this.invalidate("position"), this.update(), this._drag.direction = f, (Math.abs(d.x) > 3 || new Date().getTime() - this._drag.time > 300) && this._drag.target.one("click.owl.core", function () {
      return !1;
    })), this.is("dragging") && (this.leave("dragging"), this.trigger("dragged"));
  }, e.prototype.closest = function (b, c) {
    var d = -1,
        e = 30,
        f = this.width(),
        g = this.coordinates();
    return this.settings.freeDrag || a.each(g, a.proxy(function (a, h) {
      return "left" === c && b > h - e && b < h + e ? d = a : "right" === c && b > h - f - e && b < h - f + e ? d = a + 1 : this.op(b, "<", h) && this.op(b, ">", g[a + 1] || h - f) && (d = "left" === c ? a + 1 : a), d === -1;
    }, this)), this.settings.loop || (this.op(b, ">", g[this.minimum()]) ? d = b = this.minimum() : this.op(b, "<", g[this.maximum()]) && (d = b = this.maximum())), d;
  }, e.prototype.animate = function (b) {
    var c = this.speed() > 0;
    this.is("animating") && this.onTransitionEnd(), c && (this.enter("animating"), this.trigger("translate")), a.support.transform3d && a.support.transition ? this.$stage.css({
      transform: "translate3d(" + b + "px,0px,0px)",
      transition: this.speed() / 1e3 + "s"
    }) : c ? this.$stage.animate({
      left: b + "px"
    }, this.speed(), this.settings.fallbackEasing, a.proxy(this.onTransitionEnd, this)) : this.$stage.css({
      left: b + "px"
    });
  }, e.prototype.is = function (a) {
    return this._states.current[a] && this._states.current[a] > 0;
  }, e.prototype.current = function (a) {
    if (a === d) return this._current;
    if (0 === this._items.length) return d;

    if (a = this.normalize(a), this._current !== a) {
      var b = this.trigger("change", {
        property: {
          name: "position",
          value: a
        }
      });
      b.data !== d && (a = this.normalize(b.data)), this._current = a, this.invalidate("position"), this.trigger("changed", {
        property: {
          name: "position",
          value: this._current
        }
      });
    }

    return this._current;
  }, e.prototype.invalidate = function (b) {
    return "string" === a.type(b) && (this._invalidated[b] = !0, this.is("valid") && this.leave("valid")), a.map(this._invalidated, function (a, b) {
      return b;
    });
  }, e.prototype.reset = function (a) {
    a = this.normalize(a), a !== d && (this._speed = 0, this._current = a, this.suppress(["translate", "translated"]), this.animate(this.coordinates(a)), this.release(["translate", "translated"]));
  }, e.prototype.normalize = function (a, b) {
    var c = this._items.length,
        e = b ? 0 : this._clones.length;
    return !this.isNumeric(a) || c < 1 ? a = d : (a < 0 || a >= c + e) && (a = ((a - e / 2) % c + c) % c + e / 2), a;
  }, e.prototype.relative = function (a) {
    return a -= this._clones.length / 2, this.normalize(a, !0);
  }, e.prototype.maximum = function (a) {
    var b,
        c,
        d,
        e = this.settings,
        f = this._coordinates.length;
    if (e.loop) f = this._clones.length / 2 + this._items.length - 1;else if (e.autoWidth || e.merge) {
      for (b = this._items.length, c = this._items[--b].width(), d = this.$element.width(); b-- && (c += this._items[b].width() + this.settings.margin, !(c > d));) {
        ;
      }

      f = b + 1;
    } else f = e.center ? this._items.length - 1 : this._items.length - e.items;
    return a && (f -= this._clones.length / 2), Math.max(f, 0);
  }, e.prototype.minimum = function (a) {
    return a ? 0 : this._clones.length / 2;
  }, e.prototype.items = function (a) {
    return a === d ? this._items.slice() : (a = this.normalize(a, !0), this._items[a]);
  }, e.prototype.mergers = function (a) {
    return a === d ? this._mergers.slice() : (a = this.normalize(a, !0), this._mergers[a]);
  }, e.prototype.clones = function (b) {
    var c = this._clones.length / 2,
        e = c + this._items.length,
        f = function f(a) {
      return a % 2 === 0 ? e + a / 2 : c - (a + 1) / 2;
    };

    return b === d ? a.map(this._clones, function (a, b) {
      return f(b);
    }) : a.map(this._clones, function (a, c) {
      return a === b ? f(c) : null;
    });
  }, e.prototype.speed = function (a) {
    return a !== d && (this._speed = a), this._speed;
  }, e.prototype.coordinates = function (b) {
    var c,
        e = 1,
        f = b - 1;
    return b === d ? a.map(this._coordinates, a.proxy(function (a, b) {
      return this.coordinates(b);
    }, this)) : (this.settings.center ? (this.settings.rtl && (e = -1, f = b + 1), c = this._coordinates[b], c += (this.width() - c + (this._coordinates[f] || 0)) / 2 * e) : c = this._coordinates[f] || 0, c = Math.ceil(c));
  }, e.prototype.duration = function (a, b, c) {
    return 0 === c ? 0 : Math.min(Math.max(Math.abs(b - a), 1), 6) * Math.abs(c || this.settings.smartSpeed);
  }, e.prototype.to = function (a, b) {
    var c = this.current(),
        d = null,
        e = a - this.relative(c),
        f = (e > 0) - (e < 0),
        g = this._items.length,
        h = this.minimum(),
        i = this.maximum();
    this.settings.loop ? (!this.settings.rewind && Math.abs(e) > g / 2 && (e += f * -1 * g), a = c + e, d = ((a - h) % g + g) % g + h, d !== a && d - e <= i && d - e > 0 && (c = d - e, a = d, this.reset(c))) : this.settings.rewind ? (i += 1, a = (a % i + i) % i) : a = Math.max(h, Math.min(i, a)), this.speed(this.duration(c, a, b)), this.current(a), this.$element.is(":visible") && this.update();
  }, e.prototype.next = function (a) {
    a = a || !1, this.to(this.relative(this.current()) + 1, a);
  }, e.prototype.prev = function (a) {
    a = a || !1, this.to(this.relative(this.current()) - 1, a);
  }, e.prototype.onTransitionEnd = function (a) {
    if (a !== d && (a.stopPropagation(), (a.target || a.srcElement || a.originalTarget) !== this.$stage.get(0))) return !1;
    this.leave("animating"), this.trigger("translated");
  }, e.prototype.viewport = function () {
    var d;
    return this.options.responsiveBaseElement !== b ? d = a(this.options.responsiveBaseElement).width() : b.innerWidth ? d = b.innerWidth : c.documentElement && c.documentElement.clientWidth ? d = c.documentElement.clientWidth : console.warn("Can not detect viewport width."), d;
  }, e.prototype.replace = function (b) {
    this.$stage.empty(), this._items = [], b && (b = b instanceof jQuery ? b : a(b)), this.settings.nestedItemSelector && (b = b.find("." + this.settings.nestedItemSelector)), b.filter(function () {
      return 1 === this.nodeType;
    }).each(a.proxy(function (a, b) {
      b = this.prepare(b), this.$stage.append(b), this._items.push(b), this._mergers.push(1 * b.find("[data-merge]").addBack("[data-merge]").attr("data-merge") || 1);
    }, this)), this.reset(this.isNumeric(this.settings.startPosition) ? this.settings.startPosition : 0), this.invalidate("items");
  }, e.prototype.add = function (b, c) {
    var e = this.relative(this._current);
    c = c === d ? this._items.length : this.normalize(c, !0), b = b instanceof jQuery ? b : a(b), this.trigger("add", {
      content: b,
      position: c
    }), b = this.prepare(b), 0 === this._items.length || c === this._items.length ? (0 === this._items.length && this.$stage.append(b), 0 !== this._items.length && this._items[c - 1].after(b), this._items.push(b), this._mergers.push(1 * b.find("[data-merge]").addBack("[data-merge]").attr("data-merge") || 1)) : (this._items[c].before(b), this._items.splice(c, 0, b), this._mergers.splice(c, 0, 1 * b.find("[data-merge]").addBack("[data-merge]").attr("data-merge") || 1)), this._items[e] && this.reset(this._items[e].index()), this.invalidate("items"), this.trigger("added", {
      content: b,
      position: c
    });
  }, e.prototype.remove = function (a) {
    a = this.normalize(a, !0), a !== d && (this.trigger("remove", {
      content: this._items[a],
      position: a
    }), this._items[a].remove(), this._items.splice(a, 1), this._mergers.splice(a, 1), this.invalidate("items"), this.trigger("removed", {
      content: null,
      position: a
    }));
  }, e.prototype.preloadAutoWidthImages = function (b) {
    b.each(a.proxy(function (b, c) {
      this.enter("pre-loading"), c = a(c), a(new Image()).one("load", a.proxy(function (a) {
        c.attr("src", a.target.src), c.css("opacity", 1), this.leave("pre-loading"), !this.is("pre-loading") && !this.is("initializing") && this.refresh();
      }, this)).attr("src", c.attr("src") || c.attr("data-src") || c.attr("data-src-retina"));
    }, this));
  }, e.prototype.destroy = function () {
    this.$element.off(".owl.core"), this.$stage.off(".owl.core"), a(c).off(".owl.core"), this.settings.responsive !== !1 && (b.clearTimeout(this.resizeTimer), this.off(b, "resize", this._handlers.onThrottledResize));

    for (var d in this._plugins) {
      this._plugins[d].destroy();
    }

    this.$stage.children(".cloned").remove(), this.$stage.unwrap(), this.$stage.children().contents().unwrap(), this.$stage.children().unwrap(), this.$element.removeClass(this.options.refreshClass).removeClass(this.options.loadingClass).removeClass(this.options.loadedClass).removeClass(this.options.rtlClass).removeClass(this.options.dragClass).removeClass(this.options.grabClass).attr("class", this.$element.attr("class").replace(new RegExp(this.options.responsiveClass + "-\\S+\\s", "g"), "")).removeData("owl.carousel");
  }, e.prototype.op = function (a, b, c) {
    var d = this.settings.rtl;

    switch (b) {
      case "<":
        return d ? a > c : a < c;

      case ">":
        return d ? a < c : a > c;

      case ">=":
        return d ? a <= c : a >= c;

      case "<=":
        return d ? a >= c : a <= c;
    }
  }, e.prototype.on = function (a, b, c, d) {
    a.addEventListener ? a.addEventListener(b, c, d) : a.attachEvent && a.attachEvent("on" + b, c);
  }, e.prototype.off = function (a, b, c, d) {
    a.removeEventListener ? a.removeEventListener(b, c, d) : a.detachEvent && a.detachEvent("on" + b, c);
  }, e.prototype.trigger = function (b, c, d, f, g) {
    var h = {
      item: {
        count: this._items.length,
        index: this.current()
      }
    },
        i = a.camelCase(a.grep(["on", b, d], function (a) {
      return a;
    }).join("-").toLowerCase()),
        j = a.Event([b, "owl", d || "carousel"].join(".").toLowerCase(), a.extend({
      relatedTarget: this
    }, h, c));
    return this._supress[b] || (a.each(this._plugins, function (a, b) {
      b.onTrigger && b.onTrigger(j);
    }), this.register({
      type: e.Type.Event,
      name: b
    }), this.$element.trigger(j), this.settings && "function" == typeof this.settings[i] && this.settings[i].call(this, j)), j;
  }, e.prototype.enter = function (b) {
    a.each([b].concat(this._states.tags[b] || []), a.proxy(function (a, b) {
      this._states.current[b] === d && (this._states.current[b] = 0), this._states.current[b]++;
    }, this));
  }, e.prototype.leave = function (b) {
    a.each([b].concat(this._states.tags[b] || []), a.proxy(function (a, b) {
      this._states.current[b]--;
    }, this));
  }, e.prototype.register = function (b) {
    if (b.type === e.Type.Event) {
      if (a.event.special[b.name] || (a.event.special[b.name] = {}), !a.event.special[b.name].owl) {
        var c = a.event.special[b.name]._default;
        a.event.special[b.name]._default = function (a) {
          return !c || !c.apply || a.namespace && a.namespace.indexOf("owl") !== -1 ? a.namespace && a.namespace.indexOf("owl") > -1 : c.apply(this, arguments);
        }, a.event.special[b.name].owl = !0;
      }
    } else b.type === e.Type.State && (this._states.tags[b.name] ? this._states.tags[b.name] = this._states.tags[b.name].concat(b.tags) : this._states.tags[b.name] = b.tags, this._states.tags[b.name] = a.grep(this._states.tags[b.name], a.proxy(function (c, d) {
      return a.inArray(c, this._states.tags[b.name]) === d;
    }, this)));
  }, e.prototype.suppress = function (b) {
    a.each(b, a.proxy(function (a, b) {
      this._supress[b] = !0;
    }, this));
  }, e.prototype.release = function (b) {
    a.each(b, a.proxy(function (a, b) {
      delete this._supress[b];
    }, this));
  }, e.prototype.pointer = function (a) {
    var c = {
      x: null,
      y: null
    };
    return a = a.originalEvent || a || b.event, a = a.touches && a.touches.length ? a.touches[0] : a.changedTouches && a.changedTouches.length ? a.changedTouches[0] : a, a.pageX ? (c.x = a.pageX, c.y = a.pageY) : (c.x = a.clientX, c.y = a.clientY), c;
  }, e.prototype.isNumeric = function (a) {
    return !isNaN(parseFloat(a));
  }, e.prototype.difference = function (a, b) {
    return {
      x: a.x - b.x,
      y: a.y - b.y
    };
  }, a.fn.owlCarousel = function (b) {
    var c = Array.prototype.slice.call(arguments, 1);
    return this.each(function () {
      var d = a(this),
          f = d.data("owl.carousel");
      f || (f = new e(this, "object" == _typeof(b) && b), d.data("owl.carousel", f), a.each(["next", "prev", "to", "destroy", "refresh", "replace", "add", "remove"], function (b, c) {
        f.register({
          type: e.Type.Event,
          name: c
        }), f.$element.on(c + ".owl.carousel.core", a.proxy(function (a) {
          a.namespace && a.relatedTarget !== this && (this.suppress([c]), f[c].apply(this, [].slice.call(arguments, 1)), this.release([c]));
        }, f));
      })), "string" == typeof b && "_" !== b.charAt(0) && f[b].apply(f, c);
    });
  }, a.fn.owlCarousel.Constructor = e;
}(window.Zepto || window.jQuery, window, document), function (a, b, c, d) {
  var e = function e(b) {
    this._core = b, this._interval = null, this._visible = null, this._handlers = {
      "initialized.owl.carousel": a.proxy(function (a) {
        a.namespace && this._core.settings.autoRefresh && this.watch();
      }, this)
    }, this._core.options = a.extend({}, e.Defaults, this._core.options), this._core.$element.on(this._handlers);
  };

  e.Defaults = {
    autoRefresh: !0,
    autoRefreshInterval: 500
  }, e.prototype.watch = function () {
    this._interval || (this._visible = this._core.$element.is(":visible"), this._interval = b.setInterval(a.proxy(this.refresh, this), this._core.settings.autoRefreshInterval));
  }, e.prototype.refresh = function () {
    this._core.$element.is(":visible") !== this._visible && (this._visible = !this._visible, this._core.$element.toggleClass("owl-hidden", !this._visible), this._visible && this._core.invalidate("width") && this._core.refresh());
  }, e.prototype.destroy = function () {
    var a, c;
    b.clearInterval(this._interval);

    for (a in this._handlers) {
      this._core.$element.off(a, this._handlers[a]);
    }

    for (c in Object.getOwnPropertyNames(this)) {
      "function" != typeof this[c] && (this[c] = null);
    }
  }, a.fn.owlCarousel.Constructor.Plugins.AutoRefresh = e;
}(window.Zepto || window.jQuery, window, document), function (a, b, c, d) {
  var e = function e(b) {
    this._core = b, this._loaded = [], this._handlers = {
      "initialized.owl.carousel change.owl.carousel resized.owl.carousel": a.proxy(function (b) {
        if (b.namespace && this._core.settings && this._core.settings.lazyLoad && (b.property && "position" == b.property.name || "initialized" == b.type)) for (var c = this._core.settings, e = c.center && Math.ceil(c.items / 2) || c.items, f = c.center && e * -1 || 0, g = (b.property && b.property.value !== d ? b.property.value : this._core.current()) + f, h = this._core.clones().length, i = a.proxy(function (a, b) {
          this.load(b);
        }, this); f++ < e;) {
          this.load(h / 2 + this._core.relative(g)), h && a.each(this._core.clones(this._core.relative(g)), i), g++;
        }
      }, this)
    }, this._core.options = a.extend({}, e.Defaults, this._core.options), this._core.$element.on(this._handlers);
  };

  e.Defaults = {
    lazyLoad: !1
  }, e.prototype.load = function (c) {
    var d = this._core.$stage.children().eq(c),
        e = d && d.find(".owl-lazy");

    !e || a.inArray(d.get(0), this._loaded) > -1 || (e.each(a.proxy(function (c, d) {
      var e,
          f = a(d),
          g = b.devicePixelRatio > 1 && f.attr("data-src-retina") || f.attr("data-src");
      this._core.trigger("load", {
        element: f,
        url: g
      }, "lazy"), f.is("img") ? f.one("load.owl.lazy", a.proxy(function () {
        f.css("opacity", 1), this._core.trigger("loaded", {
          element: f,
          url: g
        }, "lazy");
      }, this)).attr("src", g) : (e = new Image(), e.onload = a.proxy(function () {
        f.css({
          "background-image": 'url("' + g + '")',
          opacity: "1"
        }), this._core.trigger("loaded", {
          element: f,
          url: g
        }, "lazy");
      }, this), e.src = g);
    }, this)), this._loaded.push(d.get(0)));
  }, e.prototype.destroy = function () {
    var a, b;

    for (a in this.handlers) {
      this._core.$element.off(a, this.handlers[a]);
    }

    for (b in Object.getOwnPropertyNames(this)) {
      "function" != typeof this[b] && (this[b] = null);
    }
  }, a.fn.owlCarousel.Constructor.Plugins.Lazy = e;
}(window.Zepto || window.jQuery, window, document), function (a, b, c, d) {
  var e = function e(b) {
    this._core = b, this._handlers = {
      "initialized.owl.carousel refreshed.owl.carousel": a.proxy(function (a) {
        a.namespace && this._core.settings.autoHeight && this.update();
      }, this),
      "changed.owl.carousel": a.proxy(function (a) {
        a.namespace && this._core.settings.autoHeight && "position" == a.property.name && this.update();
      }, this),
      "loaded.owl.lazy": a.proxy(function (a) {
        a.namespace && this._core.settings.autoHeight && a.element.closest("." + this._core.settings.itemClass).index() === this._core.current() && this.update();
      }, this)
    }, this._core.options = a.extend({}, e.Defaults, this._core.options), this._core.$element.on(this._handlers);
  };

  e.Defaults = {
    autoHeight: !1,
    autoHeightClass: "owl-height"
  }, e.prototype.update = function () {
    var b = this._core._current,
        c = b + this._core.settings.items,
        d = this._core.$stage.children().toArray().slice(b, c),
        e = [],
        f = 0;

    a.each(d, function (b, c) {
      e.push(a(c).height());
    }), f = Math.max.apply(null, e), this._core.$stage.parent().height(f).addClass(this._core.settings.autoHeightClass);
  }, e.prototype.destroy = function () {
    var a, b;

    for (a in this._handlers) {
      this._core.$element.off(a, this._handlers[a]);
    }

    for (b in Object.getOwnPropertyNames(this)) {
      "function" != typeof this[b] && (this[b] = null);
    }
  }, a.fn.owlCarousel.Constructor.Plugins.AutoHeight = e;
}(window.Zepto || window.jQuery, window, document), function (a, b, c, d) {
  var e = function e(b) {
    this._core = b, this._videos = {}, this._playing = null, this._handlers = {
      "initialized.owl.carousel": a.proxy(function (a) {
        a.namespace && this._core.register({
          type: "state",
          name: "playing",
          tags: ["interacting"]
        });
      }, this),
      "resize.owl.carousel": a.proxy(function (a) {
        a.namespace && this._core.settings.video && this.isInFullScreen() && a.preventDefault();
      }, this),
      "refreshed.owl.carousel": a.proxy(function (a) {
        a.namespace && this._core.is("resizing") && this._core.$stage.find(".cloned .owl-video-frame").remove();
      }, this),
      "changed.owl.carousel": a.proxy(function (a) {
        a.namespace && "position" === a.property.name && this._playing && this.stop();
      }, this),
      "prepared.owl.carousel": a.proxy(function (b) {
        if (b.namespace) {
          var c = a(b.content).find(".owl-video");
          c.length && (c.css("display", "none"), this.fetch(c, a(b.content)));
        }
      }, this)
    }, this._core.options = a.extend({}, e.Defaults, this._core.options), this._core.$element.on(this._handlers), this._core.$element.on("click.owl.video", ".owl-video-play-icon", a.proxy(function (a) {
      this.play(a);
    }, this));
  };

  e.Defaults = {
    video: !1,
    videoHeight: !1,
    videoWidth: !1
  }, e.prototype.fetch = function (a, b) {
    var c = function () {
      return a.attr("data-vimeo-id") ? "vimeo" : a.attr("data-vzaar-id") ? "vzaar" : "youtube";
    }(),
        d = a.attr("data-vimeo-id") || a.attr("data-youtube-id") || a.attr("data-vzaar-id"),
        e = a.attr("data-width") || this._core.settings.videoWidth,
        f = a.attr("data-height") || this._core.settings.videoHeight,
        g = a.attr("href");

    if (!g) throw new Error("Missing video URL.");
    if (d = g.match(/(http:|https:|)\/\/(player.|www.|app.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com)|vzaar\.com)\/(video\/|videos\/|embed\/|channels\/.+\/|groups\/.+\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(\&\S+)?/), d[3].indexOf("youtu") > -1) c = "youtube";else if (d[3].indexOf("vimeo") > -1) c = "vimeo";else {
      if (!(d[3].indexOf("vzaar") > -1)) throw new Error("Video URL not supported.");
      c = "vzaar";
    }
    d = d[6], this._videos[g] = {
      type: c,
      id: d,
      width: e,
      height: f
    }, b.attr("data-video", g), this.thumbnail(a, this._videos[g]);
  }, e.prototype.thumbnail = function (b, c) {
    var d,
        e,
        f,
        g = c.width && c.height ? 'style="width:' + c.width + "px;height:" + c.height + 'px;"' : "",
        h = b.find("img"),
        i = "src",
        j = "",
        k = this._core.settings,
        l = function l(a) {
      e = '<div class="owl-video-play-icon"></div>', d = k.lazyLoad ? '<div class="owl-video-tn ' + j + '" ' + i + '="' + a + '"></div>' : '<div class="owl-video-tn" style="opacity:1;background-image:url(' + a + ')"></div>', b.after(d), b.after(e);
    };

    if (b.wrap('<div class="owl-video-wrapper"' + g + "></div>"), this._core.settings.lazyLoad && (i = "data-src", j = "owl-lazy"), h.length) return l(h.attr(i)), h.remove(), !1;
    "youtube" === c.type ? (f = "//img.youtube.com/vi/" + c.id + "/hqdefault.jpg", l(f)) : "vimeo" === c.type ? a.ajax({
      type: "GET",
      url: "//vimeo.com/api/v2/video/" + c.id + ".json",
      jsonp: "callback",
      dataType: "jsonp",
      success: function success(a) {
        f = a[0].thumbnail_large, l(f);
      }
    }) : "vzaar" === c.type && a.ajax({
      type: "GET",
      url: "//vzaar.com/api/videos/" + c.id + ".json",
      jsonp: "callback",
      dataType: "jsonp",
      success: function success(a) {
        f = a.framegrab_url, l(f);
      }
    });
  }, e.prototype.stop = function () {
    this._core.trigger("stop", null, "video"), this._playing.find(".owl-video-frame").remove(), this._playing.removeClass("owl-video-playing"), this._playing = null, this._core.leave("playing"), this._core.trigger("stopped", null, "video");
  }, e.prototype.play = function (b) {
    var c,
        d = a(b.target),
        e = d.closest("." + this._core.settings.itemClass),
        f = this._videos[e.attr("data-video")],
        g = f.width || "100%",
        h = f.height || this._core.$stage.height();

    this._playing || (this._core.enter("playing"), this._core.trigger("play", null, "video"), e = this._core.items(this._core.relative(e.index())), this._core.reset(e.index()), "youtube" === f.type ? c = '<iframe width="' + g + '" height="' + h + '" src="//www.youtube.com/embed/' + f.id + "?autoplay=1&rel=0&v=" + f.id + '" frameborder="0" allowfullscreen></iframe>' : "vimeo" === f.type ? c = '<iframe src="//player.vimeo.com/video/' + f.id + '?autoplay=1" width="' + g + '" height="' + h + '" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>' : "vzaar" === f.type && (c = '<iframe frameborder="0"height="' + h + '"width="' + g + '" allowfullscreen mozallowfullscreen webkitAllowFullScreen src="//view.vzaar.com/' + f.id + '/player?autoplay=true"></iframe>'), a('<div class="owl-video-frame">' + c + "</div>").insertAfter(e.find(".owl-video")), this._playing = e.addClass("owl-video-playing"));
  }, e.prototype.isInFullScreen = function () {
    var b = c.fullscreenElement || c.mozFullScreenElement || c.webkitFullscreenElement;
    return b && a(b).parent().hasClass("owl-video-frame");
  }, e.prototype.destroy = function () {
    var a, b;

    this._core.$element.off("click.owl.video");

    for (a in this._handlers) {
      this._core.$element.off(a, this._handlers[a]);
    }

    for (b in Object.getOwnPropertyNames(this)) {
      "function" != typeof this[b] && (this[b] = null);
    }
  }, a.fn.owlCarousel.Constructor.Plugins.Video = e;
}(window.Zepto || window.jQuery, window, document), function (a, b, c, d) {
  var e = function e(b) {
    this.core = b, this.core.options = a.extend({}, e.Defaults, this.core.options), this.swapping = !0, this.previous = d, this.next = d, this.handlers = {
      "change.owl.carousel": a.proxy(function (a) {
        a.namespace && "position" == a.property.name && (this.previous = this.core.current(), this.next = a.property.value);
      }, this),
      "drag.owl.carousel dragged.owl.carousel translated.owl.carousel": a.proxy(function (a) {
        a.namespace && (this.swapping = "translated" == a.type);
      }, this),
      "translate.owl.carousel": a.proxy(function (a) {
        a.namespace && this.swapping && (this.core.options.animateOut || this.core.options.animateIn) && this.swap();
      }, this)
    }, this.core.$element.on(this.handlers);
  };

  e.Defaults = {
    animateOut: !1,
    animateIn: !1
  }, e.prototype.swap = function () {
    if (1 === this.core.settings.items && a.support.animation && a.support.transition) {
      this.core.speed(0);
      var b,
          c = a.proxy(this.clear, this),
          d = this.core.$stage.children().eq(this.previous),
          e = this.core.$stage.children().eq(this.next),
          f = this.core.settings.animateIn,
          g = this.core.settings.animateOut;
      this.core.current() !== this.previous && (g && (b = this.core.coordinates(this.previous) - this.core.coordinates(this.next), d.one(a.support.animation.end, c).css({
        left: b + "px"
      }).addClass("animated owl-animated-out").addClass(g)), f && e.one(a.support.animation.end, c).addClass("animated owl-animated-in").addClass(f));
    }
  }, e.prototype.clear = function (b) {
    a(b.target).css({
      left: ""
    }).removeClass("animated owl-animated-out owl-animated-in").removeClass(this.core.settings.animateIn).removeClass(this.core.settings.animateOut), this.core.onTransitionEnd();
  }, e.prototype.destroy = function () {
    var a, b;

    for (a in this.handlers) {
      this.core.$element.off(a, this.handlers[a]);
    }

    for (b in Object.getOwnPropertyNames(this)) {
      "function" != typeof this[b] && (this[b] = null);
    }
  }, a.fn.owlCarousel.Constructor.Plugins.Animate = e;
}(window.Zepto || window.jQuery, window, document), function (a, b, c, d) {
  var e = function e(b) {
    this._core = b, this._timeout = null, this._paused = !1, this._handlers = {
      "changed.owl.carousel": a.proxy(function (a) {
        a.namespace && "settings" === a.property.name ? this._core.settings.autoplay ? this.play() : this.stop() : a.namespace && "position" === a.property.name && this._core.settings.autoplay && this._setAutoPlayInterval();
      }, this),
      "initialized.owl.carousel": a.proxy(function (a) {
        a.namespace && this._core.settings.autoplay && this.play();
      }, this),
      "play.owl.autoplay": a.proxy(function (a, b, c) {
        a.namespace && this.play(b, c);
      }, this),
      "stop.owl.autoplay": a.proxy(function (a) {
        a.namespace && this.stop();
      }, this),
      "mouseover.owl.autoplay": a.proxy(function () {
        this._core.settings.autoplayHoverPause && this._core.is("rotating") && this.pause();
      }, this),
      "mouseleave.owl.autoplay": a.proxy(function () {
        this._core.settings.autoplayHoverPause && this._core.is("rotating") && this.play();
      }, this),
      "touchstart.owl.core": a.proxy(function () {
        this._core.settings.autoplayHoverPause && this._core.is("rotating") && this.pause();
      }, this),
      "touchend.owl.core": a.proxy(function () {
        this._core.settings.autoplayHoverPause && this.play();
      }, this)
    }, this._core.$element.on(this._handlers), this._core.options = a.extend({}, e.Defaults, this._core.options);
  };

  e.Defaults = {
    autoplay: !1,
    autoplayTimeout: 5e3,
    autoplayHoverPause: !1,
    autoplaySpeed: !1
  }, e.prototype.play = function (a, b) {
    this._paused = !1, this._core.is("rotating") || (this._core.enter("rotating"), this._setAutoPlayInterval());
  }, e.prototype._getNextTimeout = function (d, e) {
    return this._timeout && b.clearTimeout(this._timeout), b.setTimeout(a.proxy(function () {
      this._paused || this._core.is("busy") || this._core.is("interacting") || c.hidden || this._core.next(e || this._core.settings.autoplaySpeed);
    }, this), d || this._core.settings.autoplayTimeout);
  }, e.prototype._setAutoPlayInterval = function () {
    this._timeout = this._getNextTimeout();
  }, e.prototype.stop = function () {
    this._core.is("rotating") && (b.clearTimeout(this._timeout), this._core.leave("rotating"));
  }, e.prototype.pause = function () {
    this._core.is("rotating") && (this._paused = !0);
  }, e.prototype.destroy = function () {
    var a, b;
    this.stop();

    for (a in this._handlers) {
      this._core.$element.off(a, this._handlers[a]);
    }

    for (b in Object.getOwnPropertyNames(this)) {
      "function" != typeof this[b] && (this[b] = null);
    }
  }, a.fn.owlCarousel.Constructor.Plugins.autoplay = e;
}(window.Zepto || window.jQuery, window, document), function (a, b, c, d) {
  "use strict";

  var e = function e(b) {
    this._core = b, this._initialized = !1, this._pages = [], this._controls = {}, this._templates = [], this.$element = this._core.$element, this._overrides = {
      next: this._core.next,
      prev: this._core.prev,
      to: this._core.to
    }, this._handlers = {
      "prepared.owl.carousel": a.proxy(function (b) {
        b.namespace && this._core.settings.dotsData && this._templates.push('<div class="' + this._core.settings.dotClass + '">' + a(b.content).find("[data-dot]").addBack("[data-dot]").attr("data-dot") + "</div>");
      }, this),
      "added.owl.carousel": a.proxy(function (a) {
        a.namespace && this._core.settings.dotsData && this._templates.splice(a.position, 0, this._templates.pop());
      }, this),
      "remove.owl.carousel": a.proxy(function (a) {
        a.namespace && this._core.settings.dotsData && this._templates.splice(a.position, 1);
      }, this),
      "changed.owl.carousel": a.proxy(function (a) {
        a.namespace && "position" == a.property.name && this.draw();
      }, this),
      "initialized.owl.carousel": a.proxy(function (a) {
        a.namespace && !this._initialized && (this._core.trigger("initialize", null, "navigation"), this.initialize(), this.update(), this.draw(), this._initialized = !0, this._core.trigger("initialized", null, "navigation"));
      }, this),
      "refreshed.owl.carousel": a.proxy(function (a) {
        a.namespace && this._initialized && (this._core.trigger("refresh", null, "navigation"), this.update(), this.draw(), this._core.trigger("refreshed", null, "navigation"));
      }, this)
    }, this._core.options = a.extend({}, e.Defaults, this._core.options), this.$element.on(this._handlers);
  };

  e.Defaults = {
    nav: !1,
    navText: ["prev", "next"],
    navSpeed: !1,
    navElement: "div",
    navContainer: !1,
    navContainerClass: "owl-nav",
    navClass: ["owl-prev", "owl-next"],
    slideBy: 1,
    dotClass: "owl-dot",
    dotsClass: "owl-dots",
    dots: !0,
    dotsEach: !1,
    dotsData: !1,
    dotsSpeed: !1,
    dotsContainer: !1
  }, e.prototype.initialize = function () {
    var b,
        c = this._core.settings;
    this._controls.$relative = (c.navContainer ? a(c.navContainer) : a("<div>").addClass(c.navContainerClass).appendTo(this.$element)).addClass("disabled"), this._controls.$previous = a("<" + c.navElement + ">").addClass(c.navClass[0]).html(c.navText[0]).prependTo(this._controls.$relative).on("click", a.proxy(function (a) {
      this.prev(c.navSpeed);
    }, this)), this._controls.$next = a("<" + c.navElement + ">").addClass(c.navClass[1]).html(c.navText[1]).appendTo(this._controls.$relative).on("click", a.proxy(function (a) {
      this.next(c.navSpeed);
    }, this)), c.dotsData || (this._templates = [a("<div>").addClass(c.dotClass).append(a("<span>")).prop("outerHTML")]), this._controls.$absolute = (c.dotsContainer ? a(c.dotsContainer) : a("<div>").addClass(c.dotsClass).appendTo(this.$element)).addClass("disabled"), this._controls.$absolute.on("click", "div", a.proxy(function (b) {
      var d = a(b.target).parent().is(this._controls.$absolute) ? a(b.target).index() : a(b.target).parent().index();
      b.preventDefault(), this.to(d, c.dotsSpeed);
    }, this));

    for (b in this._overrides) {
      this._core[b] = a.proxy(this[b], this);
    }
  }, e.prototype.destroy = function () {
    var a, b, c, d;

    for (a in this._handlers) {
      this.$element.off(a, this._handlers[a]);
    }

    for (b in this._controls) {
      this._controls[b].remove();
    }

    for (d in this.overides) {
      this._core[d] = this._overrides[d];
    }

    for (c in Object.getOwnPropertyNames(this)) {
      "function" != typeof this[c] && (this[c] = null);
    }
  }, e.prototype.update = function () {
    var a,
        b,
        c,
        d = this._core.clones().length / 2,
        e = d + this._core.items().length,
        f = this._core.maximum(!0),
        g = this._core.settings,
        h = g.center || g.autoWidth || g.dotsData ? 1 : g.dotsEach || g.items;

    if ("page" !== g.slideBy && (g.slideBy = Math.min(g.slideBy, g.items)), g.dots || "page" == g.slideBy) for (this._pages = [], a = d, b = 0, c = 0; a < e; a++) {
      if (b >= h || 0 === b) {
        if (this._pages.push({
          start: Math.min(f, a - d),
          end: a - d + h - 1
        }), Math.min(f, a - d) === f) break;
        b = 0, ++c;
      }

      b += this._core.mergers(this._core.relative(a));
    }
  }, e.prototype.draw = function () {
    var b,
        c = this._core.settings,
        d = this._core.items().length <= c.items,
        e = this._core.relative(this._core.current()),
        f = c.loop || c.rewind;

    this._controls.$relative.toggleClass("disabled", !c.nav || d), c.nav && (this._controls.$previous.toggleClass("disabled", !f && e <= this._core.minimum(!0)), this._controls.$next.toggleClass("disabled", !f && e >= this._core.maximum(!0))), this._controls.$absolute.toggleClass("disabled", !c.dots || d), c.dots && (b = this._pages.length - this._controls.$absolute.children().length, c.dotsData && 0 !== b ? this._controls.$absolute.html(this._templates.join("")) : b > 0 ? this._controls.$absolute.append(new Array(b + 1).join(this._templates[0])) : b < 0 && this._controls.$absolute.children().slice(b).remove(), this._controls.$absolute.find(".active").removeClass("active"), this._controls.$absolute.children().eq(a.inArray(this.current(), this._pages)).addClass("active"));
  }, e.prototype.onTrigger = function (b) {
    var c = this._core.settings;
    b.page = {
      index: a.inArray(this.current(), this._pages),
      count: this._pages.length,
      size: c && (c.center || c.autoWidth || c.dotsData ? 1 : c.dotsEach || c.items)
    };
  }, e.prototype.current = function () {
    var b = this._core.relative(this._core.current());

    return a.grep(this._pages, a.proxy(function (a, c) {
      return a.start <= b && a.end >= b;
    }, this)).pop();
  }, e.prototype.getPosition = function (b) {
    var c,
        d,
        e = this._core.settings;
    return "page" == e.slideBy ? (c = a.inArray(this.current(), this._pages), d = this._pages.length, b ? ++c : --c, c = this._pages[(c % d + d) % d].start) : (c = this._core.relative(this._core.current()), d = this._core.items().length, b ? c += e.slideBy : c -= e.slideBy), c;
  }, e.prototype.next = function (b) {
    a.proxy(this._overrides.to, this._core)(this.getPosition(!0), b);
  }, e.prototype.prev = function (b) {
    a.proxy(this._overrides.to, this._core)(this.getPosition(!1), b);
  }, e.prototype.to = function (b, c, d) {
    var e;
    !d && this._pages.length ? (e = this._pages.length, a.proxy(this._overrides.to, this._core)(this._pages[(b % e + e) % e].start, c)) : a.proxy(this._overrides.to, this._core)(b, c);
  }, a.fn.owlCarousel.Constructor.Plugins.Navigation = e;
}(window.Zepto || window.jQuery, window, document), function (a, b, c, d) {
  "use strict";

  var e = function e(c) {
    this._core = c, this._hashes = {}, this.$element = this._core.$element, this._handlers = {
      "initialized.owl.carousel": a.proxy(function (c) {
        c.namespace && "URLHash" === this._core.settings.startPosition && a(b).trigger("hashchange.owl.navigation");
      }, this),
      "prepared.owl.carousel": a.proxy(function (b) {
        if (b.namespace) {
          var c = a(b.content).find("[data-hash]").addBack("[data-hash]").attr("data-hash");
          if (!c) return;
          this._hashes[c] = b.content;
        }
      }, this),
      "changed.owl.carousel": a.proxy(function (c) {
        if (c.namespace && "position" === c.property.name) {
          var d = this._core.items(this._core.relative(this._core.current())),
              e = a.map(this._hashes, function (a, b) {
            return a === d ? b : null;
          }).join();

          if (!e || b.location.hash.slice(1) === e) return;
          b.location.hash = e;
        }
      }, this)
    }, this._core.options = a.extend({}, e.Defaults, this._core.options), this.$element.on(this._handlers), a(b).on("hashchange.owl.navigation", a.proxy(function (a) {
      var c = b.location.hash.substring(1),
          e = this._core.$stage.children(),
          f = this._hashes[c] && e.index(this._hashes[c]);

      f !== d && f !== this._core.current() && this._core.to(this._core.relative(f), !1, !0);
    }, this));
  };

  e.Defaults = {
    URLhashListener: !1
  }, e.prototype.destroy = function () {
    var c, d;
    a(b).off("hashchange.owl.navigation");

    for (c in this._handlers) {
      this._core.$element.off(c, this._handlers[c]);
    }

    for (d in Object.getOwnPropertyNames(this)) {
      "function" != typeof this[d] && (this[d] = null);
    }
  }, a.fn.owlCarousel.Constructor.Plugins.Hash = e;
}(window.Zepto || window.jQuery, window, document), function (a, b, c, d) {
  function e(b, c) {
    var e = !1,
        f = b.charAt(0).toUpperCase() + b.slice(1);
    return a.each((b + " " + h.join(f + " ") + f).split(" "), function (a, b) {
      if (g[b] !== d) return e = !c || b, !1;
    }), e;
  }

  function f(a) {
    return e(a, !0);
  }

  var g = a("<support>").get(0).style,
      h = "Webkit Moz O ms".split(" "),
      i = {
    transition: {
      end: {
        WebkitTransition: "webkitTransitionEnd",
        MozTransition: "transitionend",
        OTransition: "oTransitionEnd",
        transition: "transitionend"
      }
    },
    animation: {
      end: {
        WebkitAnimation: "webkitAnimationEnd",
        MozAnimation: "animationend",
        OAnimation: "oAnimationEnd",
        animation: "animationend"
      }
    }
  },
      j = {
    csstransforms: function csstransforms() {
      return !!e("transform");
    },
    csstransforms3d: function csstransforms3d() {
      return !!e("perspective");
    },
    csstransitions: function csstransitions() {
      return !!e("transition");
    },
    cssanimations: function cssanimations() {
      return !!e("animation");
    }
  };
  j.csstransitions() && (a.support.transition = new String(f("transition")), a.support.transition.end = i.transition.end[a.support.transition]), j.cssanimations() && (a.support.animation = new String(f("animation")), a.support.animation.end = i.animation.end[a.support.animation]), j.csstransforms() && (a.support.transform = new String(f("transform")), a.support.transform3d = j.csstransforms3d());
}(window.Zepto || window.jQuery, window, document); // Avoid `console` errors in browsers that lack a console.

(function () {
  var method;

  var noop = function noop() {};

  var methods = ['assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error', 'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log', 'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd', 'timeline', 'timelineEnd', 'timeStamp', 'trace', 'warn'];
  var length = methods.length;
  var console = window.console = window.console || {};

  while (length--) {
    method = methods[length]; // Only stub undefined methods.

    if (!console[method]) {
      console[method] = noop;
    }
  }
})(); // Place any jQuery/helper plugins in here.

/*
     _ _      _       _
 ___| (_) ___| | __  (_)___
/ __| | |/ __| |/ /  | / __|
\__ \ | | (__|   < _ | \__ \
|___/_|_|\___|_|\_(_)/ |___/
                   |__/

 Version: 1.6.0
  Author: Ken Wheeler
 Website: http://kenwheeler.github.io
    Docs: http://kenwheeler.github.io/slick
    Repo: http://github.com/kenwheeler/slick
  Issues: http://github.com/kenwheeler/slick/issues

 */


!function (a) {
  "use strict";

  "function" == typeof define && define.amd ? define(["jquery"], a) : "undefined" != typeof exports ? module.exports = a(require("jquery")) : a(jQuery);
}(function (a) {
  "use strict";

  var b = window.Slick || {};
  b = function () {
    function c(c, d) {
      var f,
          e = this;
      e.defaults = {
        accessibility: !0,
        adaptiveHeight: !1,
        appendArrows: a(c),
        appendDots: a(c),
        arrows: !0,
        asNavFor: null,
        prevArrow: '<button type="button" data-role="none" class="slick-prev" aria-label="Previous" tabindex="0" role="button">Previous</button>',
        nextArrow: '<button type="button" data-role="none" class="slick-next" aria-label="Next" tabindex="0" role="button">Next</button>',
        autoplay: !1,
        autoplaySpeed: 3e3,
        centerMode: !1,
        centerPadding: "50px",
        cssEase: "ease",
        customPaging: function customPaging(b, c) {
          return a('<button type="button" data-role="none" role="button" tabindex="0" />').text(c + 1);
        },
        dots: !1,
        dotsClass: "slick-dots",
        draggable: !0,
        easing: "linear",
        edgeFriction: .35,
        fade: !1,
        focusOnSelect: !1,
        infinite: !0,
        initialSlide: 0,
        lazyLoad: "ondemand",
        mobileFirst: !1,
        pauseOnHover: !0,
        pauseOnFocus: !0,
        pauseOnDotsHover: !1,
        respondTo: "window",
        responsive: null,
        rows: 1,
        rtl: !1,
        slide: "",
        slidesPerRow: 1,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 500,
        swipe: !0,
        swipeToSlide: !1,
        touchMove: !0,
        touchThreshold: 5,
        useCSS: !0,
        useTransform: !0,
        variableWidth: !1,
        vertical: !1,
        verticalSwiping: !1,
        waitForAnimate: !0,
        zIndex: 1e3
      }, e.initials = {
        animating: !1,
        dragging: !1,
        autoPlayTimer: null,
        currentDirection: 0,
        currentLeft: null,
        currentSlide: 0,
        direction: 1,
        $dots: null,
        listWidth: null,
        listHeight: null,
        loadIndex: 0,
        $nextArrow: null,
        $prevArrow: null,
        slideCount: null,
        slideWidth: null,
        $slideTrack: null,
        $slides: null,
        sliding: !1,
        slideOffset: 0,
        swipeLeft: null,
        $list: null,
        touchObject: {},
        transformsEnabled: !1,
        unslicked: !1
      }, a.extend(e, e.initials), e.activeBreakpoint = null, e.animType = null, e.animProp = null, e.breakpoints = [], e.breakpointSettings = [], e.cssTransitions = !1, e.focussed = !1, e.interrupted = !1, e.hidden = "hidden", e.paused = !0, e.positionProp = null, e.respondTo = null, e.rowCount = 1, e.shouldClick = !0, e.$slider = a(c), e.$slidesCache = null, e.transformType = null, e.transitionType = null, e.visibilityChange = "visibilitychange", e.windowWidth = 0, e.windowTimer = null, f = a(c).data("slick") || {}, e.options = a.extend({}, e.defaults, d, f), e.currentSlide = e.options.initialSlide, e.originalSettings = e.options, "undefined" != typeof document.mozHidden ? (e.hidden = "mozHidden", e.visibilityChange = "mozvisibilitychange") : "undefined" != typeof document.webkitHidden && (e.hidden = "webkitHidden", e.visibilityChange = "webkitvisibilitychange"), e.autoPlay = a.proxy(e.autoPlay, e), e.autoPlayClear = a.proxy(e.autoPlayClear, e), e.autoPlayIterator = a.proxy(e.autoPlayIterator, e), e.changeSlide = a.proxy(e.changeSlide, e), e.clickHandler = a.proxy(e.clickHandler, e), e.selectHandler = a.proxy(e.selectHandler, e), e.setPosition = a.proxy(e.setPosition, e), e.swipeHandler = a.proxy(e.swipeHandler, e), e.dragHandler = a.proxy(e.dragHandler, e), e.keyHandler = a.proxy(e.keyHandler, e), e.instanceUid = b++, e.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/, e.registerBreakpoints(), e.init(!0);
    }

    var b = 0;
    return c;
  }(), b.prototype.activateADA = function () {
    var a = this;
    a.$slideTrack.find(".slick-active").attr({
      "aria-hidden": "false"
    }).find("a, input, button, select").attr({
      tabindex: "0"
    });
  }, b.prototype.addSlide = b.prototype.slickAdd = function (b, c, d) {
    var e = this;
    if ("boolean" == typeof c) d = c, c = null;else if (0 > c || c >= e.slideCount) return !1;
    e.unload(), "number" == typeof c ? 0 === c && 0 === e.$slides.length ? a(b).appendTo(e.$slideTrack) : d ? a(b).insertBefore(e.$slides.eq(c)) : a(b).insertAfter(e.$slides.eq(c)) : d === !0 ? a(b).prependTo(e.$slideTrack) : a(b).appendTo(e.$slideTrack), e.$slides = e.$slideTrack.children(this.options.slide), e.$slideTrack.children(this.options.slide).detach(), e.$slideTrack.append(e.$slides), e.$slides.each(function (b, c) {
      a(c).attr("data-slick-index", b);
    }), e.$slidesCache = e.$slides, e.reinit();
  }, b.prototype.animateHeight = function () {
    var a = this;

    if (1 === a.options.slidesToShow && a.options.adaptiveHeight === !0 && a.options.vertical === !1) {
      var b = a.$slides.eq(a.currentSlide).outerHeight(!0);
      a.$list.animate({
        height: b
      }, a.options.speed);
    }
  }, b.prototype.animateSlide = function (b, c) {
    var d = {},
        e = this;
    e.animateHeight(), e.options.rtl === !0 && e.options.vertical === !1 && (b = -b), e.transformsEnabled === !1 ? e.options.vertical === !1 ? e.$slideTrack.animate({
      left: b
    }, e.options.speed, e.options.easing, c) : e.$slideTrack.animate({
      top: b
    }, e.options.speed, e.options.easing, c) : e.cssTransitions === !1 ? (e.options.rtl === !0 && (e.currentLeft = -e.currentLeft), a({
      animStart: e.currentLeft
    }).animate({
      animStart: b
    }, {
      duration: e.options.speed,
      easing: e.options.easing,
      step: function step(a) {
        a = Math.ceil(a), e.options.vertical === !1 ? (d[e.animType] = "translate(" + a + "px, 0px)", e.$slideTrack.css(d)) : (d[e.animType] = "translate(0px," + a + "px)", e.$slideTrack.css(d));
      },
      complete: function complete() {
        c && c.call();
      }
    })) : (e.applyTransition(), b = Math.ceil(b), e.options.vertical === !1 ? d[e.animType] = "translate3d(" + b + "px, 0px, 0px)" : d[e.animType] = "translate3d(0px," + b + "px, 0px)", e.$slideTrack.css(d), c && setTimeout(function () {
      e.disableTransition(), c.call();
    }, e.options.speed));
  }, b.prototype.getNavTarget = function () {
    var b = this,
        c = b.options.asNavFor;
    return c && null !== c && (c = a(c).not(b.$slider)), c;
  }, b.prototype.asNavFor = function (b) {
    var c = this,
        d = c.getNavTarget();
    null !== d && "object" == _typeof(d) && d.each(function () {
      var c = a(this).slick("getSlick");
      c.unslicked || c.slideHandler(b, !0);
    });
  }, b.prototype.applyTransition = function (a) {
    var b = this,
        c = {};
    b.options.fade === !1 ? c[b.transitionType] = b.transformType + " " + b.options.speed + "ms " + b.options.cssEase : c[b.transitionType] = "opacity " + b.options.speed + "ms " + b.options.cssEase, b.options.fade === !1 ? b.$slideTrack.css(c) : b.$slides.eq(a).css(c);
  }, b.prototype.autoPlay = function () {
    var a = this;
    a.autoPlayClear(), a.slideCount > a.options.slidesToShow && (a.autoPlayTimer = setInterval(a.autoPlayIterator, a.options.autoplaySpeed));
  }, b.prototype.autoPlayClear = function () {
    var a = this;
    a.autoPlayTimer && clearInterval(a.autoPlayTimer);
  }, b.prototype.autoPlayIterator = function () {
    var a = this,
        b = a.currentSlide + a.options.slidesToScroll;
    a.paused || a.interrupted || a.focussed || (a.options.infinite === !1 && (1 === a.direction && a.currentSlide + 1 === a.slideCount - 1 ? a.direction = 0 : 0 === a.direction && (b = a.currentSlide - a.options.slidesToScroll, a.currentSlide - 1 === 0 && (a.direction = 1))), a.slideHandler(b));
  }, b.prototype.buildArrows = function () {
    var b = this;
    b.options.arrows === !0 && (b.$prevArrow = a(b.options.prevArrow).addClass("slick-arrow"), b.$nextArrow = a(b.options.nextArrow).addClass("slick-arrow"), b.slideCount > b.options.slidesToShow ? (b.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), b.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), b.htmlExpr.test(b.options.prevArrow) && b.$prevArrow.prependTo(b.options.appendArrows), b.htmlExpr.test(b.options.nextArrow) && b.$nextArrow.appendTo(b.options.appendArrows), b.options.infinite !== !0 && b.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true")) : b.$prevArrow.add(b.$nextArrow).addClass("slick-hidden").attr({
      "aria-disabled": "true",
      tabindex: "-1"
    }));
  }, b.prototype.buildDots = function () {
    var c,
        d,
        b = this;

    if (b.options.dots === !0 && b.slideCount > b.options.slidesToShow) {
      for (b.$slider.addClass("slick-dotted"), d = a("<ul />").addClass(b.options.dotsClass), c = 0; c <= b.getDotCount(); c += 1) {
        d.append(a("<li />").append(b.options.customPaging.call(this, b, c)));
      }

      b.$dots = d.appendTo(b.options.appendDots), b.$dots.find("li").first().addClass("slick-active").attr("aria-hidden", "false");
    }
  }, b.prototype.buildOut = function () {
    var b = this;
    b.$slides = b.$slider.children(b.options.slide + ":not(.slick-cloned)").addClass("slick-slide"), b.slideCount = b.$slides.length, b.$slides.each(function (b, c) {
      a(c).attr("data-slick-index", b).data("originalStyling", a(c).attr("style") || "");
    }), b.$slider.addClass("slick-slider"), b.$slideTrack = 0 === b.slideCount ? a('<div class="slick-track"/>').appendTo(b.$slider) : b.$slides.wrapAll('<div class="slick-track"/>').parent(), b.$list = b.$slideTrack.wrap('<div aria-live="polite" class="slick-list"/>').parent(), b.$slideTrack.css("opacity", 0), (b.options.centerMode === !0 || b.options.swipeToSlide === !0) && (b.options.slidesToScroll = 1), a("img[data-lazy]", b.$slider).not("[src]").addClass("slick-loading"), b.setupInfinite(), b.buildArrows(), b.buildDots(), b.updateDots(), b.setSlideClasses("number" == typeof b.currentSlide ? b.currentSlide : 0), b.options.draggable === !0 && b.$list.addClass("draggable");
  }, b.prototype.buildRows = function () {
    var b,
        c,
        d,
        e,
        f,
        g,
        h,
        a = this;

    if (e = document.createDocumentFragment(), g = a.$slider.children(), a.options.rows > 1) {
      for (h = a.options.slidesPerRow * a.options.rows, f = Math.ceil(g.length / h), b = 0; f > b; b++) {
        var i = document.createElement("div");

        for (c = 0; c < a.options.rows; c++) {
          var j = document.createElement("div");

          for (d = 0; d < a.options.slidesPerRow; d++) {
            var k = b * h + (c * a.options.slidesPerRow + d);
            g.get(k) && j.appendChild(g.get(k));
          }

          i.appendChild(j);
        }

        e.appendChild(i);
      }

      a.$slider.empty().append(e), a.$slider.children().children().children().css({
        width: 100 / a.options.slidesPerRow + "%",
        display: "inline-block"
      });
    }
  }, b.prototype.checkResponsive = function (b, c) {
    var e,
        f,
        g,
        d = this,
        h = !1,
        i = d.$slider.width(),
        j = window.innerWidth || a(window).width();

    if ("window" === d.respondTo ? g = j : "slider" === d.respondTo ? g = i : "min" === d.respondTo && (g = Math.min(j, i)), d.options.responsive && d.options.responsive.length && null !== d.options.responsive) {
      f = null;

      for (e in d.breakpoints) {
        d.breakpoints.hasOwnProperty(e) && (d.originalSettings.mobileFirst === !1 ? g < d.breakpoints[e] && (f = d.breakpoints[e]) : g > d.breakpoints[e] && (f = d.breakpoints[e]));
      }

      null !== f ? null !== d.activeBreakpoint ? (f !== d.activeBreakpoint || c) && (d.activeBreakpoint = f, "unslick" === d.breakpointSettings[f] ? d.unslick(f) : (d.options = a.extend({}, d.originalSettings, d.breakpointSettings[f]), b === !0 && (d.currentSlide = d.options.initialSlide), d.refresh(b)), h = f) : (d.activeBreakpoint = f, "unslick" === d.breakpointSettings[f] ? d.unslick(f) : (d.options = a.extend({}, d.originalSettings, d.breakpointSettings[f]), b === !0 && (d.currentSlide = d.options.initialSlide), d.refresh(b)), h = f) : null !== d.activeBreakpoint && (d.activeBreakpoint = null, d.options = d.originalSettings, b === !0 && (d.currentSlide = d.options.initialSlide), d.refresh(b), h = f), b || h === !1 || d.$slider.trigger("breakpoint", [d, h]);
    }
  }, b.prototype.changeSlide = function (b, c) {
    var f,
        g,
        h,
        d = this,
        e = a(b.currentTarget);

    switch (e.is("a") && b.preventDefault(), e.is("li") || (e = e.closest("li")), h = d.slideCount % d.options.slidesToScroll !== 0, f = h ? 0 : (d.slideCount - d.currentSlide) % d.options.slidesToScroll, b.data.message) {
      case "previous":
        g = 0 === f ? d.options.slidesToScroll : d.options.slidesToShow - f, d.slideCount > d.options.slidesToShow && d.slideHandler(d.currentSlide - g, !1, c);
        break;

      case "next":
        g = 0 === f ? d.options.slidesToScroll : f, d.slideCount > d.options.slidesToShow && d.slideHandler(d.currentSlide + g, !1, c);
        break;

      case "index":
        var i = 0 === b.data.index ? 0 : b.data.index || e.index() * d.options.slidesToScroll;
        d.slideHandler(d.checkNavigable(i), !1, c), e.children().trigger("focus");
        break;

      default:
        return;
    }
  }, b.prototype.checkNavigable = function (a) {
    var c,
        d,
        b = this;
    if (c = b.getNavigableIndexes(), d = 0, a > c[c.length - 1]) a = c[c.length - 1];else for (var e in c) {
      if (a < c[e]) {
        a = d;
        break;
      }

      d = c[e];
    }
    return a;
  }, b.prototype.cleanUpEvents = function () {
    var b = this;
    b.options.dots && null !== b.$dots && a("li", b.$dots).off("click.slick", b.changeSlide).off("mouseenter.slick", a.proxy(b.interrupt, b, !0)).off("mouseleave.slick", a.proxy(b.interrupt, b, !1)), b.$slider.off("focus.slick blur.slick"), b.options.arrows === !0 && b.slideCount > b.options.slidesToShow && (b.$prevArrow && b.$prevArrow.off("click.slick", b.changeSlide), b.$nextArrow && b.$nextArrow.off("click.slick", b.changeSlide)), b.$list.off("touchstart.slick mousedown.slick", b.swipeHandler), b.$list.off("touchmove.slick mousemove.slick", b.swipeHandler), b.$list.off("touchend.slick mouseup.slick", b.swipeHandler), b.$list.off("touchcancel.slick mouseleave.slick", b.swipeHandler), b.$list.off("click.slick", b.clickHandler), a(document).off(b.visibilityChange, b.visibility), b.cleanUpSlideEvents(), b.options.accessibility === !0 && b.$list.off("keydown.slick", b.keyHandler), b.options.focusOnSelect === !0 && a(b.$slideTrack).children().off("click.slick", b.selectHandler), a(window).off("orientationchange.slick.slick-" + b.instanceUid, b.orientationChange), a(window).off("resize.slick.slick-" + b.instanceUid, b.resize), a("[draggable!=true]", b.$slideTrack).off("dragstart", b.preventDefault), a(window).off("load.slick.slick-" + b.instanceUid, b.setPosition), a(document).off("ready.slick.slick-" + b.instanceUid, b.setPosition);
  }, b.prototype.cleanUpSlideEvents = function () {
    var b = this;
    b.$list.off("mouseenter.slick", a.proxy(b.interrupt, b, !0)), b.$list.off("mouseleave.slick", a.proxy(b.interrupt, b, !1));
  }, b.prototype.cleanUpRows = function () {
    var b,
        a = this;
    a.options.rows > 1 && (b = a.$slides.children().children(), b.removeAttr("style"), a.$slider.empty().append(b));
  }, b.prototype.clickHandler = function (a) {
    var b = this;
    b.shouldClick === !1 && (a.stopImmediatePropagation(), a.stopPropagation(), a.preventDefault());
  }, b.prototype.destroy = function (b) {
    var c = this;
    c.autoPlayClear(), c.touchObject = {}, c.cleanUpEvents(), a(".slick-cloned", c.$slider).detach(), c.$dots && c.$dots.remove(), c.$prevArrow && c.$prevArrow.length && (c.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), c.htmlExpr.test(c.options.prevArrow) && c.$prevArrow.remove()), c.$nextArrow && c.$nextArrow.length && (c.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), c.htmlExpr.test(c.options.nextArrow) && c.$nextArrow.remove()), c.$slides && (c.$slides.removeClass("slick-slide slick-active slick-center slick-visible slick-current").removeAttr("aria-hidden").removeAttr("data-slick-index").each(function () {
      a(this).attr("style", a(this).data("originalStyling"));
    }), c.$slideTrack.children(this.options.slide).detach(), c.$slideTrack.detach(), c.$list.detach(), c.$slider.append(c.$slides)), c.cleanUpRows(), c.$slider.removeClass("slick-slider"), c.$slider.removeClass("slick-initialized"), c.$slider.removeClass("slick-dotted"), c.unslicked = !0, b || c.$slider.trigger("destroy", [c]);
  }, b.prototype.disableTransition = function (a) {
    var b = this,
        c = {};
    c[b.transitionType] = "", b.options.fade === !1 ? b.$slideTrack.css(c) : b.$slides.eq(a).css(c);
  }, b.prototype.fadeSlide = function (a, b) {
    var c = this;
    c.cssTransitions === !1 ? (c.$slides.eq(a).css({
      zIndex: c.options.zIndex
    }), c.$slides.eq(a).animate({
      opacity: 1
    }, c.options.speed, c.options.easing, b)) : (c.applyTransition(a), c.$slides.eq(a).css({
      opacity: 1,
      zIndex: c.options.zIndex
    }), b && setTimeout(function () {
      c.disableTransition(a), b.call();
    }, c.options.speed));
  }, b.prototype.fadeSlideOut = function (a) {
    var b = this;
    b.cssTransitions === !1 ? b.$slides.eq(a).animate({
      opacity: 0,
      zIndex: b.options.zIndex - 2
    }, b.options.speed, b.options.easing) : (b.applyTransition(a), b.$slides.eq(a).css({
      opacity: 0,
      zIndex: b.options.zIndex - 2
    }));
  }, b.prototype.filterSlides = b.prototype.slickFilter = function (a) {
    var b = this;
    null !== a && (b.$slidesCache = b.$slides, b.unload(), b.$slideTrack.children(this.options.slide).detach(), b.$slidesCache.filter(a).appendTo(b.$slideTrack), b.reinit());
  }, b.prototype.focusHandler = function () {
    var b = this;
    b.$slider.off("focus.slick blur.slick").on("focus.slick blur.slick", "*:not(.slick-arrow)", function (c) {
      c.stopImmediatePropagation();
      var d = a(this);
      setTimeout(function () {
        b.options.pauseOnFocus && (b.focussed = d.is(":focus"), b.autoPlay());
      }, 0);
    });
  }, b.prototype.getCurrent = b.prototype.slickCurrentSlide = function () {
    var a = this;
    return a.currentSlide;
  }, b.prototype.getDotCount = function () {
    var a = this,
        b = 0,
        c = 0,
        d = 0;
    if (a.options.infinite === !0) for (; b < a.slideCount;) {
      ++d, b = c + a.options.slidesToScroll, c += a.options.slidesToScroll <= a.options.slidesToShow ? a.options.slidesToScroll : a.options.slidesToShow;
    } else if (a.options.centerMode === !0) d = a.slideCount;else if (a.options.asNavFor) for (; b < a.slideCount;) {
      ++d, b = c + a.options.slidesToScroll, c += a.options.slidesToScroll <= a.options.slidesToShow ? a.options.slidesToScroll : a.options.slidesToShow;
    } else d = 1 + Math.ceil((a.slideCount - a.options.slidesToShow) / a.options.slidesToScroll);
    return d - 1;
  }, b.prototype.getLeft = function (a) {
    var c,
        d,
        f,
        b = this,
        e = 0;
    return b.slideOffset = 0, d = b.$slides.first().outerHeight(!0), b.options.infinite === !0 ? (b.slideCount > b.options.slidesToShow && (b.slideOffset = b.slideWidth * b.options.slidesToShow * -1, e = d * b.options.slidesToShow * -1), b.slideCount % b.options.slidesToScroll !== 0 && a + b.options.slidesToScroll > b.slideCount && b.slideCount > b.options.slidesToShow && (a > b.slideCount ? (b.slideOffset = (b.options.slidesToShow - (a - b.slideCount)) * b.slideWidth * -1, e = (b.options.slidesToShow - (a - b.slideCount)) * d * -1) : (b.slideOffset = b.slideCount % b.options.slidesToScroll * b.slideWidth * -1, e = b.slideCount % b.options.slidesToScroll * d * -1))) : a + b.options.slidesToShow > b.slideCount && (b.slideOffset = (a + b.options.slidesToShow - b.slideCount) * b.slideWidth, e = (a + b.options.slidesToShow - b.slideCount) * d), b.slideCount <= b.options.slidesToShow && (b.slideOffset = 0, e = 0), b.options.centerMode === !0 && b.options.infinite === !0 ? b.slideOffset += b.slideWidth * Math.floor(b.options.slidesToShow / 2) - b.slideWidth : b.options.centerMode === !0 && (b.slideOffset = 0, b.slideOffset += b.slideWidth * Math.floor(b.options.slidesToShow / 2)), c = b.options.vertical === !1 ? a * b.slideWidth * -1 + b.slideOffset : a * d * -1 + e, b.options.variableWidth === !0 && (f = b.slideCount <= b.options.slidesToShow || b.options.infinite === !1 ? b.$slideTrack.children(".slick-slide").eq(a) : b.$slideTrack.children(".slick-slide").eq(a + b.options.slidesToShow), c = b.options.rtl === !0 ? f[0] ? -1 * (b.$slideTrack.width() - f[0].offsetLeft - f.width()) : 0 : f[0] ? -1 * f[0].offsetLeft : 0, b.options.centerMode === !0 && (f = b.slideCount <= b.options.slidesToShow || b.options.infinite === !1 ? b.$slideTrack.children(".slick-slide").eq(a) : b.$slideTrack.children(".slick-slide").eq(a + b.options.slidesToShow + 1), c = b.options.rtl === !0 ? f[0] ? -1 * (b.$slideTrack.width() - f[0].offsetLeft - f.width()) : 0 : f[0] ? -1 * f[0].offsetLeft : 0, c += (b.$list.width() - f.outerWidth()) / 2)), c;
  }, b.prototype.getOption = b.prototype.slickGetOption = function (a) {
    var b = this;
    return b.options[a];
  }, b.prototype.getNavigableIndexes = function () {
    var e,
        a = this,
        b = 0,
        c = 0,
        d = [];

    for (a.options.infinite === !1 ? e = a.slideCount : (b = -1 * a.options.slidesToScroll, c = -1 * a.options.slidesToScroll, e = 2 * a.slideCount); e > b;) {
      d.push(b), b = c + a.options.slidesToScroll, c += a.options.slidesToScroll <= a.options.slidesToShow ? a.options.slidesToScroll : a.options.slidesToShow;
    }

    return d;
  }, b.prototype.getSlick = function () {
    return this;
  }, b.prototype.getSlideCount = function () {
    var c,
        d,
        e,
        b = this;
    return e = b.options.centerMode === !0 ? b.slideWidth * Math.floor(b.options.slidesToShow / 2) : 0, b.options.swipeToSlide === !0 ? (b.$slideTrack.find(".slick-slide").each(function (c, f) {
      return f.offsetLeft - e + a(f).outerWidth() / 2 > -1 * b.swipeLeft ? (d = f, !1) : void 0;
    }), c = Math.abs(a(d).attr("data-slick-index") - b.currentSlide) || 1) : b.options.slidesToScroll;
  }, b.prototype.goTo = b.prototype.slickGoTo = function (a, b) {
    var c = this;
    c.changeSlide({
      data: {
        message: "index",
        index: parseInt(a)
      }
    }, b);
  }, b.prototype.init = function (b) {
    var c = this;
    a(c.$slider).hasClass("slick-initialized") || (a(c.$slider).addClass("slick-initialized"), c.buildRows(), c.buildOut(), c.setProps(), c.startLoad(), c.loadSlider(), c.initializeEvents(), c.updateArrows(), c.updateDots(), c.checkResponsive(!0), c.focusHandler()), b && c.$slider.trigger("init", [c]), c.options.accessibility === !0 && c.initADA(), c.options.autoplay && (c.paused = !1, c.autoPlay());
  }, b.prototype.initADA = function () {
    var b = this;
    b.$slides.add(b.$slideTrack.find(".slick-cloned")).attr({
      "aria-hidden": "true",
      tabindex: "-1"
    }).find("a, input, button, select").attr({
      tabindex: "-1"
    }), b.$slideTrack.attr("role", "listbox"), b.$slides.not(b.$slideTrack.find(".slick-cloned")).each(function (c) {
      a(this).attr({
        role: "option",
        "aria-describedby": "slick-slide" + b.instanceUid + c
      });
    }), null !== b.$dots && b.$dots.attr("role", "tablist").find("li").each(function (c) {
      a(this).attr({
        role: "presentation",
        "aria-selected": "false",
        "aria-controls": "navigation" + b.instanceUid + c,
        id: "slick-slide" + b.instanceUid + c
      });
    }).first().attr("aria-selected", "true").end().find("button").attr("role", "button").end().closest("div").attr("role", "toolbar"), b.activateADA();
  }, b.prototype.initArrowEvents = function () {
    var a = this;
    a.options.arrows === !0 && a.slideCount > a.options.slidesToShow && (a.$prevArrow.off("click.slick").on("click.slick", {
      message: "previous"
    }, a.changeSlide), a.$nextArrow.off("click.slick").on("click.slick", {
      message: "next"
    }, a.changeSlide));
  }, b.prototype.initDotEvents = function () {
    var b = this;
    b.options.dots === !0 && b.slideCount > b.options.slidesToShow && a("li", b.$dots).on("click.slick", {
      message: "index"
    }, b.changeSlide), b.options.dots === !0 && b.options.pauseOnDotsHover === !0 && a("li", b.$dots).on("mouseenter.slick", a.proxy(b.interrupt, b, !0)).on("mouseleave.slick", a.proxy(b.interrupt, b, !1));
  }, b.prototype.initSlideEvents = function () {
    var b = this;
    b.options.pauseOnHover && (b.$list.on("mouseenter.slick", a.proxy(b.interrupt, b, !0)), b.$list.on("mouseleave.slick", a.proxy(b.interrupt, b, !1)));
  }, b.prototype.initializeEvents = function () {
    var b = this;
    b.initArrowEvents(), b.initDotEvents(), b.initSlideEvents(), b.$list.on("touchstart.slick mousedown.slick", {
      action: "start"
    }, b.swipeHandler), b.$list.on("touchmove.slick mousemove.slick", {
      action: "move"
    }, b.swipeHandler), b.$list.on("touchend.slick mouseup.slick", {
      action: "end"
    }, b.swipeHandler), b.$list.on("touchcancel.slick mouseleave.slick", {
      action: "end"
    }, b.swipeHandler), b.$list.on("click.slick", b.clickHandler), a(document).on(b.visibilityChange, a.proxy(b.visibility, b)), b.options.accessibility === !0 && b.$list.on("keydown.slick", b.keyHandler), b.options.focusOnSelect === !0 && a(b.$slideTrack).children().on("click.slick", b.selectHandler), a(window).on("orientationchange.slick.slick-" + b.instanceUid, a.proxy(b.orientationChange, b)), a(window).on("resize.slick.slick-" + b.instanceUid, a.proxy(b.resize, b)), a("[draggable!=true]", b.$slideTrack).on("dragstart", b.preventDefault), a(window).on("load.slick.slick-" + b.instanceUid, b.setPosition), a(document).on("ready.slick.slick-" + b.instanceUid, b.setPosition);
  }, b.prototype.initUI = function () {
    var a = this;
    a.options.arrows === !0 && a.slideCount > a.options.slidesToShow && (a.$prevArrow.show(), a.$nextArrow.show()), a.options.dots === !0 && a.slideCount > a.options.slidesToShow && a.$dots.show();
  }, b.prototype.keyHandler = function (a) {
    var b = this;
    a.target.tagName.match("TEXTAREA|INPUT|SELECT") || (37 === a.keyCode && b.options.accessibility === !0 ? b.changeSlide({
      data: {
        message: b.options.rtl === !0 ? "next" : "previous"
      }
    }) : 39 === a.keyCode && b.options.accessibility === !0 && b.changeSlide({
      data: {
        message: b.options.rtl === !0 ? "previous" : "next"
      }
    }));
  }, b.prototype.lazyLoad = function () {
    function g(c) {
      a("img[data-lazy]", c).each(function () {
        var c = a(this),
            d = a(this).attr("data-lazy"),
            e = document.createElement("img");
        e.onload = function () {
          c.animate({
            opacity: 0
          }, 100, function () {
            c.attr("src", d).animate({
              opacity: 1
            }, 200, function () {
              c.removeAttr("data-lazy").removeClass("slick-loading");
            }), b.$slider.trigger("lazyLoaded", [b, c, d]);
          });
        }, e.onerror = function () {
          c.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"), b.$slider.trigger("lazyLoadError", [b, c, d]);
        }, e.src = d;
      });
    }

    var c,
        d,
        e,
        f,
        b = this;
    b.options.centerMode === !0 ? b.options.infinite === !0 ? (e = b.currentSlide + (b.options.slidesToShow / 2 + 1), f = e + b.options.slidesToShow + 2) : (e = Math.max(0, b.currentSlide - (b.options.slidesToShow / 2 + 1)), f = 2 + (b.options.slidesToShow / 2 + 1) + b.currentSlide) : (e = b.options.infinite ? b.options.slidesToShow + b.currentSlide : b.currentSlide, f = Math.ceil(e + b.options.slidesToShow), b.options.fade === !0 && (e > 0 && e--, f <= b.slideCount && f++)), c = b.$slider.find(".slick-slide").slice(e, f), g(c), b.slideCount <= b.options.slidesToShow ? (d = b.$slider.find(".slick-slide"), g(d)) : b.currentSlide >= b.slideCount - b.options.slidesToShow ? (d = b.$slider.find(".slick-cloned").slice(0, b.options.slidesToShow), g(d)) : 0 === b.currentSlide && (d = b.$slider.find(".slick-cloned").slice(-1 * b.options.slidesToShow), g(d));
  }, b.prototype.loadSlider = function () {
    var a = this;
    a.setPosition(), a.$slideTrack.css({
      opacity: 1
    }), a.$slider.removeClass("slick-loading"), a.initUI(), "progressive" === a.options.lazyLoad && a.progressiveLazyLoad();
  }, b.prototype.next = b.prototype.slickNext = function () {
    var a = this;
    a.changeSlide({
      data: {
        message: "next"
      }
    });
  }, b.prototype.orientationChange = function () {
    var a = this;
    a.checkResponsive(), a.setPosition();
  }, b.prototype.pause = b.prototype.slickPause = function () {
    var a = this;
    a.autoPlayClear(), a.paused = !0;
  }, b.prototype.play = b.prototype.slickPlay = function () {
    var a = this;
    a.autoPlay(), a.options.autoplay = !0, a.paused = !1, a.focussed = !1, a.interrupted = !1;
  }, b.prototype.postSlide = function (a) {
    var b = this;
    b.unslicked || (b.$slider.trigger("afterChange", [b, a]), b.animating = !1, b.setPosition(), b.swipeLeft = null, b.options.autoplay && b.autoPlay(), b.options.accessibility === !0 && b.initADA());
  }, b.prototype.prev = b.prototype.slickPrev = function () {
    var a = this;
    a.changeSlide({
      data: {
        message: "previous"
      }
    });
  }, b.prototype.preventDefault = function (a) {
    a.preventDefault();
  }, b.prototype.progressiveLazyLoad = function (b) {
    b = b || 1;
    var e,
        f,
        g,
        c = this,
        d = a("img[data-lazy]", c.$slider);
    d.length ? (e = d.first(), f = e.attr("data-lazy"), g = document.createElement("img"), g.onload = function () {
      e.attr("src", f).removeAttr("data-lazy").removeClass("slick-loading"), c.options.adaptiveHeight === !0 && c.setPosition(), c.$slider.trigger("lazyLoaded", [c, e, f]), c.progressiveLazyLoad();
    }, g.onerror = function () {
      3 > b ? setTimeout(function () {
        c.progressiveLazyLoad(b + 1);
      }, 500) : (e.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"), c.$slider.trigger("lazyLoadError", [c, e, f]), c.progressiveLazyLoad());
    }, g.src = f) : c.$slider.trigger("allImagesLoaded", [c]);
  }, b.prototype.refresh = function (b) {
    var d,
        e,
        c = this;
    e = c.slideCount - c.options.slidesToShow, !c.options.infinite && c.currentSlide > e && (c.currentSlide = e), c.slideCount <= c.options.slidesToShow && (c.currentSlide = 0), d = c.currentSlide, c.destroy(!0), a.extend(c, c.initials, {
      currentSlide: d
    }), c.init(), b || c.changeSlide({
      data: {
        message: "index",
        index: d
      }
    }, !1);
  }, b.prototype.registerBreakpoints = function () {
    var c,
        d,
        e,
        b = this,
        f = b.options.responsive || null;

    if ("array" === a.type(f) && f.length) {
      b.respondTo = b.options.respondTo || "window";

      for (c in f) {
        if (e = b.breakpoints.length - 1, d = f[c].breakpoint, f.hasOwnProperty(c)) {
          for (; e >= 0;) {
            b.breakpoints[e] && b.breakpoints[e] === d && b.breakpoints.splice(e, 1), e--;
          }

          b.breakpoints.push(d), b.breakpointSettings[d] = f[c].settings;
        }
      }

      b.breakpoints.sort(function (a, c) {
        return b.options.mobileFirst ? a - c : c - a;
      });
    }
  }, b.prototype.reinit = function () {
    var b = this;
    b.$slides = b.$slideTrack.children(b.options.slide).addClass("slick-slide"), b.slideCount = b.$slides.length, b.currentSlide >= b.slideCount && 0 !== b.currentSlide && (b.currentSlide = b.currentSlide - b.options.slidesToScroll), b.slideCount <= b.options.slidesToShow && (b.currentSlide = 0), b.registerBreakpoints(), b.setProps(), b.setupInfinite(), b.buildArrows(), b.updateArrows(), b.initArrowEvents(), b.buildDots(), b.updateDots(), b.initDotEvents(), b.cleanUpSlideEvents(), b.initSlideEvents(), b.checkResponsive(!1, !0), b.options.focusOnSelect === !0 && a(b.$slideTrack).children().on("click.slick", b.selectHandler), b.setSlideClasses("number" == typeof b.currentSlide ? b.currentSlide : 0), b.setPosition(), b.focusHandler(), b.paused = !b.options.autoplay, b.autoPlay(), b.$slider.trigger("reInit", [b]);
  }, b.prototype.resize = function () {
    var b = this;
    a(window).width() !== b.windowWidth && (clearTimeout(b.windowDelay), b.windowDelay = window.setTimeout(function () {
      b.windowWidth = a(window).width(), b.checkResponsive(), b.unslicked || b.setPosition();
    }, 50));
  }, b.prototype.removeSlide = b.prototype.slickRemove = function (a, b, c) {
    var d = this;
    return "boolean" == typeof a ? (b = a, a = b === !0 ? 0 : d.slideCount - 1) : a = b === !0 ? --a : a, d.slideCount < 1 || 0 > a || a > d.slideCount - 1 ? !1 : (d.unload(), c === !0 ? d.$slideTrack.children().remove() : d.$slideTrack.children(this.options.slide).eq(a).remove(), d.$slides = d.$slideTrack.children(this.options.slide), d.$slideTrack.children(this.options.slide).detach(), d.$slideTrack.append(d.$slides), d.$slidesCache = d.$slides, void d.reinit());
  }, b.prototype.setCSS = function (a) {
    var d,
        e,
        b = this,
        c = {};
    b.options.rtl === !0 && (a = -a), d = "left" == b.positionProp ? Math.ceil(a) + "px" : "0px", e = "top" == b.positionProp ? Math.ceil(a) + "px" : "0px", c[b.positionProp] = a, b.transformsEnabled === !1 ? b.$slideTrack.css(c) : (c = {}, b.cssTransitions === !1 ? (c[b.animType] = "translate(" + d + ", " + e + ")", b.$slideTrack.css(c)) : (c[b.animType] = "translate3d(" + d + ", " + e + ", 0px)", b.$slideTrack.css(c)));
  }, b.prototype.setDimensions = function () {
    var a = this;
    a.options.vertical === !1 ? a.options.centerMode === !0 && a.$list.css({
      padding: "0px " + a.options.centerPadding
    }) : (a.$list.height(a.$slides.first().outerHeight(!0) * a.options.slidesToShow), a.options.centerMode === !0 && a.$list.css({
      padding: a.options.centerPadding + " 0px"
    })), a.listWidth = a.$list.width(), a.listHeight = a.$list.height(), a.options.vertical === !1 && a.options.variableWidth === !1 ? (a.slideWidth = Math.ceil(a.listWidth / a.options.slidesToShow), a.$slideTrack.width(Math.ceil(a.slideWidth * a.$slideTrack.children(".slick-slide").length))) : a.options.variableWidth === !0 ? a.$slideTrack.width(5e3 * a.slideCount) : (a.slideWidth = Math.ceil(a.listWidth), a.$slideTrack.height(Math.ceil(a.$slides.first().outerHeight(!0) * a.$slideTrack.children(".slick-slide").length)));
    var b = a.$slides.first().outerWidth(!0) - a.$slides.first().width();
    a.options.variableWidth === !1 && a.$slideTrack.children(".slick-slide").width(a.slideWidth - b);
  }, b.prototype.setFade = function () {
    var c,
        b = this;
    b.$slides.each(function (d, e) {
      c = b.slideWidth * d * -1, b.options.rtl === !0 ? a(e).css({
        position: "relative",
        right: c,
        top: 0,
        zIndex: b.options.zIndex - 2,
        opacity: 0
      }) : a(e).css({
        position: "relative",
        left: c,
        top: 0,
        zIndex: b.options.zIndex - 2,
        opacity: 0
      });
    }), b.$slides.eq(b.currentSlide).css({
      zIndex: b.options.zIndex - 1,
      opacity: 1
    });
  }, b.prototype.setHeight = function () {
    var a = this;

    if (1 === a.options.slidesToShow && a.options.adaptiveHeight === !0 && a.options.vertical === !1) {
      var b = a.$slides.eq(a.currentSlide).outerHeight(!0);
      a.$list.css("height", b);
    }
  }, b.prototype.setOption = b.prototype.slickSetOption = function () {
    var c,
        d,
        e,
        f,
        h,
        b = this,
        g = !1;
    if ("object" === a.type(arguments[0]) ? (e = arguments[0], g = arguments[1], h = "multiple") : "string" === a.type(arguments[0]) && (e = arguments[0], f = arguments[1], g = arguments[2], "responsive" === arguments[0] && "array" === a.type(arguments[1]) ? h = "responsive" : "undefined" != typeof arguments[1] && (h = "single")), "single" === h) b.options[e] = f;else if ("multiple" === h) a.each(e, function (a, c) {
      b.options[a] = c;
    });else if ("responsive" === h) for (d in f) {
      if ("array" !== a.type(b.options.responsive)) b.options.responsive = [f[d]];else {
        for (c = b.options.responsive.length - 1; c >= 0;) {
          b.options.responsive[c].breakpoint === f[d].breakpoint && b.options.responsive.splice(c, 1), c--;
        }

        b.options.responsive.push(f[d]);
      }
    }
    g && (b.unload(), b.reinit());
  }, b.prototype.setPosition = function () {
    var a = this;
    a.setDimensions(), a.setHeight(), a.options.fade === !1 ? a.setCSS(a.getLeft(a.currentSlide)) : a.setFade(), a.$slider.trigger("setPosition", [a]);
  }, b.prototype.setProps = function () {
    var a = this,
        b = document.body.style;
    a.positionProp = a.options.vertical === !0 ? "top" : "left", "top" === a.positionProp ? a.$slider.addClass("slick-vertical") : a.$slider.removeClass("slick-vertical"), (void 0 !== b.WebkitTransition || void 0 !== b.MozTransition || void 0 !== b.msTransition) && a.options.useCSS === !0 && (a.cssTransitions = !0), a.options.fade && ("number" == typeof a.options.zIndex ? a.options.zIndex < 3 && (a.options.zIndex = 3) : a.options.zIndex = a.defaults.zIndex), void 0 !== b.OTransform && (a.animType = "OTransform", a.transformType = "-o-transform", a.transitionType = "OTransition", void 0 === b.perspectiveProperty && void 0 === b.webkitPerspective && (a.animType = !1)), void 0 !== b.MozTransform && (a.animType = "MozTransform", a.transformType = "-moz-transform", a.transitionType = "MozTransition", void 0 === b.perspectiveProperty && void 0 === b.MozPerspective && (a.animType = !1)), void 0 !== b.webkitTransform && (a.animType = "webkitTransform", a.transformType = "-webkit-transform", a.transitionType = "webkitTransition", void 0 === b.perspectiveProperty && void 0 === b.webkitPerspective && (a.animType = !1)), void 0 !== b.msTransform && (a.animType = "msTransform", a.transformType = "-ms-transform", a.transitionType = "msTransition", void 0 === b.msTransform && (a.animType = !1)), void 0 !== b.transform && a.animType !== !1 && (a.animType = "transform", a.transformType = "transform", a.transitionType = "transition"), a.transformsEnabled = a.options.useTransform && null !== a.animType && a.animType !== !1;
  }, b.prototype.setSlideClasses = function (a) {
    var c,
        d,
        e,
        f,
        b = this;
    d = b.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden", "true"), b.$slides.eq(a).addClass("slick-current"), b.options.centerMode === !0 ? (c = Math.floor(b.options.slidesToShow / 2), b.options.infinite === !0 && (a >= c && a <= b.slideCount - 1 - c ? b.$slides.slice(a - c, a + c + 1).addClass("slick-active").attr("aria-hidden", "false") : (e = b.options.slidesToShow + a, d.slice(e - c + 1, e + c + 2).addClass("slick-active").attr("aria-hidden", "false")), 0 === a ? d.eq(d.length - 1 - b.options.slidesToShow).addClass("slick-center") : a === b.slideCount - 1 && d.eq(b.options.slidesToShow).addClass("slick-center")), b.$slides.eq(a).addClass("slick-center")) : a >= 0 && a <= b.slideCount - b.options.slidesToShow ? b.$slides.slice(a, a + b.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false") : d.length <= b.options.slidesToShow ? d.addClass("slick-active").attr("aria-hidden", "false") : (f = b.slideCount % b.options.slidesToShow, e = b.options.infinite === !0 ? b.options.slidesToShow + a : a, b.options.slidesToShow == b.options.slidesToScroll && b.slideCount - a < b.options.slidesToShow ? d.slice(e - (b.options.slidesToShow - f), e + f).addClass("slick-active").attr("aria-hidden", "false") : d.slice(e, e + b.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false")), "ondemand" === b.options.lazyLoad && b.lazyLoad();
  }, b.prototype.setupInfinite = function () {
    var c,
        d,
        e,
        b = this;

    if (b.options.fade === !0 && (b.options.centerMode = !1), b.options.infinite === !0 && b.options.fade === !1 && (d = null, b.slideCount > b.options.slidesToShow)) {
      for (e = b.options.centerMode === !0 ? b.options.slidesToShow + 1 : b.options.slidesToShow, c = b.slideCount; c > b.slideCount - e; c -= 1) {
        d = c - 1, a(b.$slides[d]).clone(!0).attr("id", "").attr("data-slick-index", d - b.slideCount).prependTo(b.$slideTrack).addClass("slick-cloned");
      }

      for (c = 0; e > c; c += 1) {
        d = c, a(b.$slides[d]).clone(!0).attr("id", "").attr("data-slick-index", d + b.slideCount).appendTo(b.$slideTrack).addClass("slick-cloned");
      }

      b.$slideTrack.find(".slick-cloned").find("[id]").each(function () {
        a(this).attr("id", "");
      });
    }
  }, b.prototype.interrupt = function (a) {
    var b = this;
    a || b.autoPlay(), b.interrupted = a;
  }, b.prototype.selectHandler = function (b) {
    var c = this,
        d = a(b.target).is(".slick-slide") ? a(b.target) : a(b.target).parents(".slick-slide"),
        e = parseInt(d.attr("data-slick-index"));
    return e || (e = 0), c.slideCount <= c.options.slidesToShow ? (c.setSlideClasses(e), void c.asNavFor(e)) : void c.slideHandler(e);
  }, b.prototype.slideHandler = function (a, b, c) {
    var d,
        e,
        f,
        g,
        j,
        h = null,
        i = this;
    return b = b || !1, i.animating === !0 && i.options.waitForAnimate === !0 || i.options.fade === !0 && i.currentSlide === a || i.slideCount <= i.options.slidesToShow ? void 0 : (b === !1 && i.asNavFor(a), d = a, h = i.getLeft(d), g = i.getLeft(i.currentSlide), i.currentLeft = null === i.swipeLeft ? g : i.swipeLeft, i.options.infinite === !1 && i.options.centerMode === !1 && (0 > a || a > i.getDotCount() * i.options.slidesToScroll) ? void (i.options.fade === !1 && (d = i.currentSlide, c !== !0 ? i.animateSlide(g, function () {
      i.postSlide(d);
    }) : i.postSlide(d))) : i.options.infinite === !1 && i.options.centerMode === !0 && (0 > a || a > i.slideCount - i.options.slidesToScroll) ? void (i.options.fade === !1 && (d = i.currentSlide, c !== !0 ? i.animateSlide(g, function () {
      i.postSlide(d);
    }) : i.postSlide(d))) : (i.options.autoplay && clearInterval(i.autoPlayTimer), e = 0 > d ? i.slideCount % i.options.slidesToScroll !== 0 ? i.slideCount - i.slideCount % i.options.slidesToScroll : i.slideCount + d : d >= i.slideCount ? i.slideCount % i.options.slidesToScroll !== 0 ? 0 : d - i.slideCount : d, i.animating = !0, i.$slider.trigger("beforeChange", [i, i.currentSlide, e]), f = i.currentSlide, i.currentSlide = e, i.setSlideClasses(i.currentSlide), i.options.asNavFor && (j = i.getNavTarget(), j = j.slick("getSlick"), j.slideCount <= j.options.slidesToShow && j.setSlideClasses(i.currentSlide)), i.updateDots(), i.updateArrows(), i.options.fade === !0 ? (c !== !0 ? (i.fadeSlideOut(f), i.fadeSlide(e, function () {
      i.postSlide(e);
    })) : i.postSlide(e), void i.animateHeight()) : void (c !== !0 ? i.animateSlide(h, function () {
      i.postSlide(e);
    }) : i.postSlide(e))));
  }, b.prototype.startLoad = function () {
    var a = this;
    a.options.arrows === !0 && a.slideCount > a.options.slidesToShow && (a.$prevArrow.hide(), a.$nextArrow.hide()), a.options.dots === !0 && a.slideCount > a.options.slidesToShow && a.$dots.hide(), a.$slider.addClass("slick-loading");
  }, b.prototype.swipeDirection = function () {
    var a,
        b,
        c,
        d,
        e = this;
    return a = e.touchObject.startX - e.touchObject.curX, b = e.touchObject.startY - e.touchObject.curY, c = Math.atan2(b, a), d = Math.round(180 * c / Math.PI), 0 > d && (d = 360 - Math.abs(d)), 45 >= d && d >= 0 ? e.options.rtl === !1 ? "left" : "right" : 360 >= d && d >= 315 ? e.options.rtl === !1 ? "left" : "right" : d >= 135 && 225 >= d ? e.options.rtl === !1 ? "right" : "left" : e.options.verticalSwiping === !0 ? d >= 35 && 135 >= d ? "down" : "up" : "vertical";
  }, b.prototype.swipeEnd = function (a) {
    var c,
        d,
        b = this;
    if (b.dragging = !1, b.interrupted = !1, b.shouldClick = b.touchObject.swipeLength > 10 ? !1 : !0, void 0 === b.touchObject.curX) return !1;

    if (b.touchObject.edgeHit === !0 && b.$slider.trigger("edge", [b, b.swipeDirection()]), b.touchObject.swipeLength >= b.touchObject.minSwipe) {
      switch (d = b.swipeDirection()) {
        case "left":
        case "down":
          c = b.options.swipeToSlide ? b.checkNavigable(b.currentSlide + b.getSlideCount()) : b.currentSlide + b.getSlideCount(), b.currentDirection = 0;
          break;

        case "right":
        case "up":
          c = b.options.swipeToSlide ? b.checkNavigable(b.currentSlide - b.getSlideCount()) : b.currentSlide - b.getSlideCount(), b.currentDirection = 1;
      }

      "vertical" != d && (b.slideHandler(c), b.touchObject = {}, b.$slider.trigger("swipe", [b, d]));
    } else b.touchObject.startX !== b.touchObject.curX && (b.slideHandler(b.currentSlide), b.touchObject = {});
  }, b.prototype.swipeHandler = function (a) {
    var b = this;
    if (!(b.options.swipe === !1 || "ontouchend" in document && b.options.swipe === !1 || b.options.draggable === !1 && -1 !== a.type.indexOf("mouse"))) switch (b.touchObject.fingerCount = a.originalEvent && void 0 !== a.originalEvent.touches ? a.originalEvent.touches.length : 1, b.touchObject.minSwipe = b.listWidth / b.options.touchThreshold, b.options.verticalSwiping === !0 && (b.touchObject.minSwipe = b.listHeight / b.options.touchThreshold), a.data.action) {
      case "start":
        b.swipeStart(a);
        break;

      case "move":
        b.swipeMove(a);
        break;

      case "end":
        b.swipeEnd(a);
    }
  }, b.prototype.swipeMove = function (a) {
    var d,
        e,
        f,
        g,
        h,
        b = this;
    return h = void 0 !== a.originalEvent ? a.originalEvent.touches : null, !b.dragging || h && 1 !== h.length ? !1 : (d = b.getLeft(b.currentSlide), b.touchObject.curX = void 0 !== h ? h[0].pageX : a.clientX, b.touchObject.curY = void 0 !== h ? h[0].pageY : a.clientY, b.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(b.touchObject.curX - b.touchObject.startX, 2))), b.options.verticalSwiping === !0 && (b.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(b.touchObject.curY - b.touchObject.startY, 2)))), e = b.swipeDirection(), "vertical" !== e ? (void 0 !== a.originalEvent && b.touchObject.swipeLength > 4 && a.preventDefault(), g = (b.options.rtl === !1 ? 1 : -1) * (b.touchObject.curX > b.touchObject.startX ? 1 : -1), b.options.verticalSwiping === !0 && (g = b.touchObject.curY > b.touchObject.startY ? 1 : -1), f = b.touchObject.swipeLength, b.touchObject.edgeHit = !1, b.options.infinite === !1 && (0 === b.currentSlide && "right" === e || b.currentSlide >= b.getDotCount() && "left" === e) && (f = b.touchObject.swipeLength * b.options.edgeFriction, b.touchObject.edgeHit = !0), b.options.vertical === !1 ? b.swipeLeft = d + f * g : b.swipeLeft = d + f * (b.$list.height() / b.listWidth) * g, b.options.verticalSwiping === !0 && (b.swipeLeft = d + f * g), b.options.fade === !0 || b.options.touchMove === !1 ? !1 : b.animating === !0 ? (b.swipeLeft = null, !1) : void b.setCSS(b.swipeLeft)) : void 0);
  }, b.prototype.swipeStart = function (a) {
    var c,
        b = this;
    return b.interrupted = !0, 1 !== b.touchObject.fingerCount || b.slideCount <= b.options.slidesToShow ? (b.touchObject = {}, !1) : (void 0 !== a.originalEvent && void 0 !== a.originalEvent.touches && (c = a.originalEvent.touches[0]), b.touchObject.startX = b.touchObject.curX = void 0 !== c ? c.pageX : a.clientX, b.touchObject.startY = b.touchObject.curY = void 0 !== c ? c.pageY : a.clientY, void (b.dragging = !0));
  }, b.prototype.unfilterSlides = b.prototype.slickUnfilter = function () {
    var a = this;
    null !== a.$slidesCache && (a.unload(), a.$slideTrack.children(this.options.slide).detach(), a.$slidesCache.appendTo(a.$slideTrack), a.reinit());
  }, b.prototype.unload = function () {
    var b = this;
    a(".slick-cloned", b.$slider).remove(), b.$dots && b.$dots.remove(), b.$prevArrow && b.htmlExpr.test(b.options.prevArrow) && b.$prevArrow.remove(), b.$nextArrow && b.htmlExpr.test(b.options.nextArrow) && b.$nextArrow.remove(), b.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden", "true").css("width", "");
  }, b.prototype.unslick = function (a) {
    var b = this;
    b.$slider.trigger("unslick", [b, a]), b.destroy();
  }, b.prototype.updateArrows = function () {
    var b,
        a = this;
    b = Math.floor(a.options.slidesToShow / 2), a.options.arrows === !0 && a.slideCount > a.options.slidesToShow && !a.options.infinite && (a.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), a.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), 0 === a.currentSlide ? (a.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true"), a.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : a.currentSlide >= a.slideCount - a.options.slidesToShow && a.options.centerMode === !1 ? (a.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), a.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : a.currentSlide >= a.slideCount - 1 && a.options.centerMode === !0 && (a.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), a.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")));
  }, b.prototype.updateDots = function () {
    var a = this;
    null !== a.$dots && (a.$dots.find("li").removeClass("slick-active").attr("aria-hidden", "true"), a.$dots.find("li").eq(Math.floor(a.currentSlide / a.options.slidesToScroll)).addClass("slick-active").attr("aria-hidden", "false"));
  }, b.prototype.visibility = function () {
    var a = this;
    a.options.autoplay && (document[a.hidden] ? a.interrupted = !0 : a.interrupted = !1);
  }, a.fn.slick = function () {
    var f,
        g,
        a = this,
        c = arguments[0],
        d = Array.prototype.slice.call(arguments, 1),
        e = a.length;

    for (f = 0; e > f; f++) {
      if ("object" == _typeof(c) || "undefined" == typeof c ? a[f].slick = new b(a[f], c) : g = a[f].slick[c].apply(a[f].slick, d), "undefined" != typeof g) return g;
    }

    return a;
  };
}); // smoothscroll.js in here.

/*!
 * Smooth Scroll - v1.4.13 - 2013-11-02
 * https://github.com/kswedberg/jquery-smooth-scroll
 * Copyright (c) 2013 Karl Swedberg
 * Licensed MIT (https://github.com/kswedberg/jquery-smooth-scroll/blob/master/LICENSE-MIT)
 */

(function (t) {
  function e(t) {
    return t.replace(/(:|\.)/g, "\\$1");
  }

  var l = "1.4.13",
      o = {},
      s = {
    exclude: [],
    excludeWithin: [],
    offset: 0,
    direction: "top",
    scrollElement: null,
    scrollTarget: null,
    beforeScroll: function beforeScroll() {},
    afterScroll: function afterScroll() {},
    easing: "swing",
    speed: 400,
    autoCoefficent: 2,
    preventDefault: !0
  },
      n = function n(e) {
    var l = [],
        o = !1,
        s = e.dir && "left" == e.dir ? "scrollLeft" : "scrollTop";
    return this.each(function () {
      if (this != document && this != window) {
        var e = t(this);
        e[s]() > 0 ? l.push(this) : (e[s](1), o = e[s]() > 0, o && l.push(this), e[s](0));
      }
    }), l.length || this.each(function () {
      "BODY" === this.nodeName && (l = [this]);
    }), "first" === e.el && l.length > 1 && (l = [l[0]]), l;
  };

  t.fn.extend({
    scrollable: function scrollable(t) {
      var e = n.call(this, {
        dir: t
      });
      return this.pushStack(e);
    },
    firstScrollable: function firstScrollable(t) {
      var e = n.call(this, {
        el: "first",
        dir: t
      });
      return this.pushStack(e);
    },
    smoothScroll: function smoothScroll(l, o) {
      if (l = l || {}, "options" === l) return o ? this.each(function () {
        var e = t(this),
            l = t.extend(e.data("ssOpts") || {}, o);
        t(this).data("ssOpts", l);
      }) : this.first().data("ssOpts");
      var s = t.extend({}, t.fn.smoothScroll.defaults, l),
          n = t.smoothScroll.filterPath(location.pathname);
      return this.unbind("click.smoothscroll").bind("click.smoothscroll", function (l) {
        var o = this,
            r = t(this),
            i = t.extend({}, s, r.data("ssOpts") || {}),
            c = s.exclude,
            a = i.excludeWithin,
            f = 0,
            h = 0,
            u = !0,
            d = {},
            p = location.hostname === o.hostname || !o.hostname,
            m = i.scrollTarget || (t.smoothScroll.filterPath(o.pathname) || n) === n,
            S = e(o.hash);

        if (i.scrollTarget || p && m && S) {
          for (; u && c.length > f;) {
            r.is(e(c[f++])) && (u = !1);
          }

          for (; u && a.length > h;) {
            r.closest(a[h++]).length && (u = !1);
          }
        } else u = !1;

        u && (i.preventDefault && l.preventDefault(), t.extend(d, i, {
          scrollTarget: i.scrollTarget || S,
          link: o
        }), t.smoothScroll(d));
      }), this;
    }
  }), t.smoothScroll = function (e, l) {
    if ("options" === e && "object" == _typeof(l)) return t.extend(o, l);
    var s,
        n,
        r,
        i,
        c = 0,
        a = "offset",
        f = "scrollTop",
        h = {},
        u = {};
    "number" == typeof e ? (s = t.extend({
      link: null
    }, t.fn.smoothScroll.defaults, o), r = e) : (s = t.extend({
      link: null
    }, t.fn.smoothScroll.defaults, e || {}, o), s.scrollElement && (a = "position", "static" == s.scrollElement.css("position") && s.scrollElement.css("position", "relative"))), f = "left" == s.direction ? "scrollLeft" : f, s.scrollElement ? (n = s.scrollElement, /^(?:HTML|BODY)$/.test(n[0].nodeName) || (c = n[f]())) : n = t("html, body").firstScrollable(s.direction), s.beforeScroll.call(n, s), r = "number" == typeof e ? e : l || t(s.scrollTarget)[a]() && t(s.scrollTarget)[a]()[s.direction] || 0, h[f] = r + c + s.offset, i = s.speed, "auto" === i && (i = h[f] || n.scrollTop(), i /= s.autoCoefficent), u = {
      duration: i,
      easing: s.easing,
      complete: function complete() {
        s.afterScroll.call(s.link, s);
      }
    }, s.step && (u.step = s.step), n.length ? n.stop().animate(h, u) : s.afterScroll.call(s.link, s);
  }, t.smoothScroll.version = l, t.smoothScroll.filterPath = function (t) {
    return t.replace(/^\//, "").replace(/(?:index|default).[a-zA-Z]{3,4}$/, "").replace(/\/$/, "");
  }, t.fn.smoothScroll.defaults = s;
})(jQuery);
/*!
 * The Final Countdown for jQuery v2.0.4 (http://hilios.github.io/jQuery.countdown/)
 * Copyright (c) 2014 Edson Hilios
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy of
 * this software and associated documentation files (the "Software"), to deal in
 * the Software without restriction, including without limitation the rights to
 * use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
 * the Software, and to permit persons to whom the Software is furnished to do so,
 * subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
 * FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
 * COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
 * IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
 * CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */


!function (a) {
  "use strict";

  "function" == typeof define && define.amd ? define(["jquery"], a) : a(jQuery);
}(function (a) {
  "use strict";

  function b(a) {
    if (a instanceof Date) return a;
    if (String(a).match(g)) return String(a).match(/^[0-9]*$/) && (a = Number(a)), String(a).match(/\-/) && (a = String(a).replace(/\-/g, "/")), new Date(a);
    throw new Error("Couldn't cast `" + a + "` to a date object.");
  }

  function c(a) {
    return function (b) {
      var c = b.match(/%(-|!)?[A-Z]{1}(:[^;]+;)?/gi);
      if (c) for (var e = 0, f = c.length; f > e; ++e) {
        var g = c[e].match(/%(-|!)?([a-zA-Z]{1})(:[^;]+;)?/),
            i = new RegExp(g[0]),
            j = g[1] || "",
            k = g[3] || "",
            l = null;
        g = g[2], h.hasOwnProperty(g) && (l = h[g], l = Number(a[l])), null !== l && ("!" === j && (l = d(k, l)), "" === j && 10 > l && (l = "0" + l.toString()), b = b.replace(i, l.toString()));
      }
      return b = b.replace(/%%/, "%");
    };
  }

  function d(a, b) {
    var c = "s",
        d = "";
    return a && (a = a.replace(/(:|;|\s)/gi, "").split(/\,/), 1 === a.length ? c = a[0] : (d = a[0], c = a[1])), 1 === Math.abs(b) ? d : c;
  }

  var e = 100,
      f = [],
      g = [];
  g.push(/^[0-9]*$/.source), g.push(/([0-9]{1,2}\/){2}[0-9]{4}( [0-9]{1,2}(:[0-9]{2}){2})?/.source), g.push(/[0-9]{4}([\/\-][0-9]{1,2}){2}( [0-9]{1,2}(:[0-9]{2}){2})?/.source), g = new RegExp(g.join("|"));

  var h = {
    Y: "years",
    m: "months",
    w: "weeks",
    d: "days",
    D: "totalDays",
    H: "hours",
    M: "minutes",
    S: "seconds"
  },
      i = function i(b, c, d) {
    this.el = b, this.$el = a(b), this.interval = null, this.offset = {}, this.instanceNumber = f.length, f.push(this), this.$el.data("countdown-instance", this.instanceNumber), d && (this.$el.on("update.countdown", d), this.$el.on("stoped.countdown", d), this.$el.on("finish.countdown", d)), this.setFinalDate(c), this.start();
  };

  a.extend(i.prototype, {
    start: function start() {
      null !== this.interval && clearInterval(this.interval);
      var a = this;
      this.update(), this.interval = setInterval(function () {
        a.update.call(a);
      }, e);
    },
    stop: function stop() {
      clearInterval(this.interval), this.interval = null, this.dispatchEvent("stoped");
    },
    pause: function pause() {
      this.stop.call(this);
    },
    resume: function resume() {
      this.start.call(this);
    },
    remove: function remove() {
      this.stop(), f[this.instanceNumber] = null, delete this.$el.data().countdownInstance;
    },
    setFinalDate: function setFinalDate(a) {
      this.finalDate = b(a);
    },
    update: function update() {
      return 0 === this.$el.closest("html").length ? void this.remove() : (this.totalSecsLeft = this.finalDate.getTime() - new Date().getTime(), this.totalSecsLeft = Math.ceil(this.totalSecsLeft / 1e3), this.totalSecsLeft = this.totalSecsLeft < 0 ? 0 : this.totalSecsLeft, this.offset = {
        seconds: this.totalSecsLeft % 60,
        minutes: Math.floor(this.totalSecsLeft / 60) % 60,
        hours: Math.floor(this.totalSecsLeft / 60 / 60) % 24,
        days: Math.floor(this.totalSecsLeft / 60 / 60 / 24) % 7,
        totalDays: Math.floor(this.totalSecsLeft / 60 / 60 / 24),
        weeks: Math.floor(this.totalSecsLeft / 60 / 60 / 24 / 7),
        months: Math.floor(this.totalSecsLeft / 60 / 60 / 24 / 30),
        years: Math.floor(this.totalSecsLeft / 60 / 60 / 24 / 365)
      }, void (0 === this.totalSecsLeft ? (this.stop(), this.dispatchEvent("finish")) : this.dispatchEvent("update")));
    },
    dispatchEvent: function dispatchEvent(b) {
      var d = a.Event(b + ".countdown");
      d.finalDate = this.finalDate, d.offset = a.extend({}, this.offset), d.strftime = c(this.offset), this.$el.trigger(d);
    }
  }), a.fn.countdown = function () {
    var b = Array.prototype.slice.call(arguments, 0);
    return this.each(function () {
      var c = a(this).data("countdown-instance");

      if (void 0 !== c) {
        var d = f[c],
            e = b[0];
        i.prototype.hasOwnProperty(e) ? d[e].apply(d, b.slice(1)) : null === String(e).match(/^[$A-Z_][0-9A-Z_$]*$/i) ? (d.setFinalDate.call(d, e), d.start()) : a.error("Method %s does not exist on jQuery.countdown".replace(/\%s/gi, e));
      } else new i(this, b[0], b[1]);
    });
  };
});
/*! jQuery UI - v1.11.4 - 2015-12-03
* http://jqueryui.com
* Includes: core.js, widget.js, mouse.js, button.js, slider.js
* Copyright jQuery Foundation and other contributors; Licensed MIT */

(function (e) {
  "function" == typeof define && define.amd ? define(["jquery"], e) : e(jQuery);
})(function (e) {
  function t(t, s) {
    var n,
        a,
        o,
        r = t.nodeName.toLowerCase();
    return "area" === r ? (n = t.parentNode, a = n.name, t.href && a && "map" === n.nodeName.toLowerCase() ? (o = e("img[usemap='#" + a + "']")[0], !!o && i(o)) : !1) : (/^(input|select|textarea|button|object)$/.test(r) ? !t.disabled : "a" === r ? t.href || s : s) && i(t);
  }

  function i(t) {
    return e.expr.filters.visible(t) && !e(t).parents().addBack().filter(function () {
      return "hidden" === e.css(this, "visibility");
    }).length;
  }

  e.ui = e.ui || {}, e.extend(e.ui, {
    version: "1.11.4",
    keyCode: {
      BACKSPACE: 8,
      COMMA: 188,
      DELETE: 46,
      DOWN: 40,
      END: 35,
      ENTER: 13,
      ESCAPE: 27,
      HOME: 36,
      LEFT: 37,
      PAGE_DOWN: 34,
      PAGE_UP: 33,
      PERIOD: 190,
      RIGHT: 39,
      SPACE: 32,
      TAB: 9,
      UP: 38
    }
  }), e.fn.extend({
    scrollParent: function scrollParent(t) {
      var i = this.css("position"),
          s = "absolute" === i,
          n = t ? /(auto|scroll|hidden)/ : /(auto|scroll)/,
          a = this.parents().filter(function () {
        var t = e(this);
        return s && "static" === t.css("position") ? !1 : n.test(t.css("overflow") + t.css("overflow-y") + t.css("overflow-x"));
      }).eq(0);
      return "fixed" !== i && a.length ? a : e(this[0].ownerDocument || document);
    },
    uniqueId: function () {
      var e = 0;
      return function () {
        return this.each(function () {
          this.id || (this.id = "ui-id-" + ++e);
        });
      };
    }(),
    removeUniqueId: function removeUniqueId() {
      return this.each(function () {
        /^ui-id-\d+$/.test(this.id) && e(this).removeAttr("id");
      });
    }
  }), e.extend(e.expr[":"], {
    data: e.expr.createPseudo ? e.expr.createPseudo(function (t) {
      return function (i) {
        return !!e.data(i, t);
      };
    }) : function (t, i, s) {
      return !!e.data(t, s[3]);
    },
    focusable: function focusable(i) {
      return t(i, !isNaN(e.attr(i, "tabindex")));
    },
    tabbable: function tabbable(i) {
      var s = e.attr(i, "tabindex"),
          n = isNaN(s);
      return (n || s >= 0) && t(i, !n);
    }
  }), e("<a>").outerWidth(1).jquery || e.each(["Width", "Height"], function (t, i) {
    function s(t, i, s, a) {
      return e.each(n, function () {
        i -= parseFloat(e.css(t, "padding" + this)) || 0, s && (i -= parseFloat(e.css(t, "border" + this + "Width")) || 0), a && (i -= parseFloat(e.css(t, "margin" + this)) || 0);
      }), i;
    }

    var n = "Width" === i ? ["Left", "Right"] : ["Top", "Bottom"],
        a = i.toLowerCase(),
        o = {
      innerWidth: e.fn.innerWidth,
      innerHeight: e.fn.innerHeight,
      outerWidth: e.fn.outerWidth,
      outerHeight: e.fn.outerHeight
    };
    e.fn["inner" + i] = function (t) {
      return void 0 === t ? o["inner" + i].call(this) : this.each(function () {
        e(this).css(a, s(this, t) + "px");
      });
    }, e.fn["outer" + i] = function (t, n) {
      return "number" != typeof t ? o["outer" + i].call(this, t) : this.each(function () {
        e(this).css(a, s(this, t, !0, n) + "px");
      });
    };
  }), e.fn.addBack || (e.fn.addBack = function (e) {
    return this.add(null == e ? this.prevObject : this.prevObject.filter(e));
  }), e("<a>").data("a-b", "a").removeData("a-b").data("a-b") && (e.fn.removeData = function (t) {
    return function (i) {
      return arguments.length ? t.call(this, e.camelCase(i)) : t.call(this);
    };
  }(e.fn.removeData)), e.ui.ie = !!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase()), e.fn.extend({
    focus: function (t) {
      return function (i, s) {
        return "number" == typeof i ? this.each(function () {
          var t = this;
          setTimeout(function () {
            e(t).focus(), s && s.call(t);
          }, i);
        }) : t.apply(this, arguments);
      };
    }(e.fn.focus),
    disableSelection: function () {
      var e = "onselectstart" in document.createElement("div") ? "selectstart" : "mousedown";
      return function () {
        return this.bind(e + ".ui-disableSelection", function (e) {
          e.preventDefault();
        });
      };
    }(),
    enableSelection: function enableSelection() {
      return this.unbind(".ui-disableSelection");
    },
    zIndex: function zIndex(t) {
      if (void 0 !== t) return this.css("zIndex", t);
      if (this.length) for (var i, s, n = e(this[0]); n.length && n[0] !== document;) {
        if (i = n.css("position"), ("absolute" === i || "relative" === i || "fixed" === i) && (s = parseInt(n.css("zIndex"), 10), !isNaN(s) && 0 !== s)) return s;
        n = n.parent();
      }
      return 0;
    }
  }), e.ui.plugin = {
    add: function add(t, i, s) {
      var n,
          a = e.ui[t].prototype;

      for (n in s) {
        a.plugins[n] = a.plugins[n] || [], a.plugins[n].push([i, s[n]]);
      }
    },
    call: function call(e, t, i, s) {
      var n,
          a = e.plugins[t];
      if (a && (s || e.element[0].parentNode && 11 !== e.element[0].parentNode.nodeType)) for (n = 0; a.length > n; n++) {
        e.options[a[n][0]] && a[n][1].apply(e.element, i);
      }
    }
  };
  var s = 0,
      n = Array.prototype.slice;
  e.cleanData = function (t) {
    return function (i) {
      var s, n, a;

      for (a = 0; null != (n = i[a]); a++) {
        try {
          s = e._data(n, "events"), s && s.remove && e(n).triggerHandler("remove");
        } catch (o) {}
      }

      t(i);
    };
  }(e.cleanData), e.widget = function (t, i, s) {
    var n,
        a,
        o,
        r,
        h = {},
        l = t.split(".")[0];
    return t = t.split(".")[1], n = l + "-" + t, s || (s = i, i = e.Widget), e.expr[":"][n.toLowerCase()] = function (t) {
      return !!e.data(t, n);
    }, e[l] = e[l] || {}, a = e[l][t], o = e[l][t] = function (e, t) {
      return this._createWidget ? (arguments.length && this._createWidget(e, t), void 0) : new o(e, t);
    }, e.extend(o, a, {
      version: s.version,
      _proto: e.extend({}, s),
      _childConstructors: []
    }), r = new i(), r.options = e.widget.extend({}, r.options), e.each(s, function (t, s) {
      return e.isFunction(s) ? (h[t] = function () {
        var e = function e() {
          return i.prototype[t].apply(this, arguments);
        },
            n = function n(e) {
          return i.prototype[t].apply(this, e);
        };

        return function () {
          var t,
              i = this._super,
              a = this._superApply;
          return this._super = e, this._superApply = n, t = s.apply(this, arguments), this._super = i, this._superApply = a, t;
        };
      }(), void 0) : (h[t] = s, void 0);
    }), o.prototype = e.widget.extend(r, {
      widgetEventPrefix: a ? r.widgetEventPrefix || t : t
    }, h, {
      constructor: o,
      namespace: l,
      widgetName: t,
      widgetFullName: n
    }), a ? (e.each(a._childConstructors, function (t, i) {
      var s = i.prototype;
      e.widget(s.namespace + "." + s.widgetName, o, i._proto);
    }), delete a._childConstructors) : i._childConstructors.push(o), e.widget.bridge(t, o), o;
  }, e.widget.extend = function (t) {
    for (var i, s, a = n.call(arguments, 1), o = 0, r = a.length; r > o; o++) {
      for (i in a[o]) {
        s = a[o][i], a[o].hasOwnProperty(i) && void 0 !== s && (t[i] = e.isPlainObject(s) ? e.isPlainObject(t[i]) ? e.widget.extend({}, t[i], s) : e.widget.extend({}, s) : s);
      }
    }

    return t;
  }, e.widget.bridge = function (t, i) {
    var s = i.prototype.widgetFullName || t;

    e.fn[t] = function (a) {
      var o = "string" == typeof a,
          r = n.call(arguments, 1),
          h = this;
      return o ? this.each(function () {
        var i,
            n = e.data(this, s);
        return "instance" === a ? (h = n, !1) : n ? e.isFunction(n[a]) && "_" !== a.charAt(0) ? (i = n[a].apply(n, r), i !== n && void 0 !== i ? (h = i && i.jquery ? h.pushStack(i.get()) : i, !1) : void 0) : e.error("no such method '" + a + "' for " + t + " widget instance") : e.error("cannot call methods on " + t + " prior to initialization; " + "attempted to call method '" + a + "'");
      }) : (r.length && (a = e.widget.extend.apply(null, [a].concat(r))), this.each(function () {
        var t = e.data(this, s);
        t ? (t.option(a || {}), t._init && t._init()) : e.data(this, s, new i(a, this));
      })), h;
    };
  }, e.Widget = function () {}, e.Widget._childConstructors = [], e.Widget.prototype = {
    widgetName: "widget",
    widgetEventPrefix: "",
    defaultElement: "<div>",
    options: {
      disabled: !1,
      create: null
    },
    _createWidget: function _createWidget(t, i) {
      i = e(i || this.defaultElement || this)[0], this.element = e(i), this.uuid = s++, this.eventNamespace = "." + this.widgetName + this.uuid, this.bindings = e(), this.hoverable = e(), this.focusable = e(), i !== this && (e.data(i, this.widgetFullName, this), this._on(!0, this.element, {
        remove: function remove(e) {
          e.target === i && this.destroy();
        }
      }), this.document = e(i.style ? i.ownerDocument : i.document || i), this.window = e(this.document[0].defaultView || this.document[0].parentWindow)), this.options = e.widget.extend({}, this.options, this._getCreateOptions(), t), this._create(), this._trigger("create", null, this._getCreateEventData()), this._init();
    },
    _getCreateOptions: e.noop,
    _getCreateEventData: e.noop,
    _create: e.noop,
    _init: e.noop,
    destroy: function destroy() {
      this._destroy(), this.element.unbind(this.eventNamespace).removeData(this.widgetFullName).removeData(e.camelCase(this.widgetFullName)), this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName + "-disabled " + "ui-state-disabled"), this.bindings.unbind(this.eventNamespace), this.hoverable.removeClass("ui-state-hover"), this.focusable.removeClass("ui-state-focus");
    },
    _destroy: e.noop,
    widget: function widget() {
      return this.element;
    },
    option: function option(t, i) {
      var s,
          n,
          a,
          o = t;
      if (0 === arguments.length) return e.widget.extend({}, this.options);
      if ("string" == typeof t) if (o = {}, s = t.split("."), t = s.shift(), s.length) {
        for (n = o[t] = e.widget.extend({}, this.options[t]), a = 0; s.length - 1 > a; a++) {
          n[s[a]] = n[s[a]] || {}, n = n[s[a]];
        }

        if (t = s.pop(), 1 === arguments.length) return void 0 === n[t] ? null : n[t];
        n[t] = i;
      } else {
        if (1 === arguments.length) return void 0 === this.options[t] ? null : this.options[t];
        o[t] = i;
      }
      return this._setOptions(o), this;
    },
    _setOptions: function _setOptions(e) {
      var t;

      for (t in e) {
        this._setOption(t, e[t]);
      }

      return this;
    },
    _setOption: function _setOption(e, t) {
      return this.options[e] = t, "disabled" === e && (this.widget().toggleClass(this.widgetFullName + "-disabled", !!t), t && (this.hoverable.removeClass("ui-state-hover"), this.focusable.removeClass("ui-state-focus"))), this;
    },
    enable: function enable() {
      return this._setOptions({
        disabled: !1
      });
    },
    disable: function disable() {
      return this._setOptions({
        disabled: !0
      });
    },
    _on: function _on(t, i, s) {
      var n,
          a = this;
      "boolean" != typeof t && (s = i, i = t, t = !1), s ? (i = n = e(i), this.bindings = this.bindings.add(i)) : (s = i, i = this.element, n = this.widget()), e.each(s, function (s, o) {
        function r() {
          return t || a.options.disabled !== !0 && !e(this).hasClass("ui-state-disabled") ? ("string" == typeof o ? a[o] : o).apply(a, arguments) : void 0;
        }

        "string" != typeof o && (r.guid = o.guid = o.guid || r.guid || e.guid++);
        var h = s.match(/^([\w:-]*)\s*(.*)$/),
            l = h[1] + a.eventNamespace,
            u = h[2];
        u ? n.delegate(u, l, r) : i.bind(l, r);
      });
    },
    _off: function _off(t, i) {
      i = (i || "").split(" ").join(this.eventNamespace + " ") + this.eventNamespace, t.unbind(i).undelegate(i), this.bindings = e(this.bindings.not(t).get()), this.focusable = e(this.focusable.not(t).get()), this.hoverable = e(this.hoverable.not(t).get());
    },
    _delay: function _delay(e, t) {
      function i() {
        return ("string" == typeof e ? s[e] : e).apply(s, arguments);
      }

      var s = this;
      return setTimeout(i, t || 0);
    },
    _hoverable: function _hoverable(t) {
      this.hoverable = this.hoverable.add(t), this._on(t, {
        mouseenter: function mouseenter(t) {
          e(t.currentTarget).addClass("ui-state-hover");
        },
        mouseleave: function mouseleave(t) {
          e(t.currentTarget).removeClass("ui-state-hover");
        }
      });
    },
    _focusable: function _focusable(t) {
      this.focusable = this.focusable.add(t), this._on(t, {
        focusin: function focusin(t) {
          e(t.currentTarget).addClass("ui-state-focus");
        },
        focusout: function focusout(t) {
          e(t.currentTarget).removeClass("ui-state-focus");
        }
      });
    },
    _trigger: function _trigger(t, i, s) {
      var n,
          a,
          o = this.options[t];
      if (s = s || {}, i = e.Event(i), i.type = (t === this.widgetEventPrefix ? t : this.widgetEventPrefix + t).toLowerCase(), i.target = this.element[0], a = i.originalEvent) for (n in a) {
        n in i || (i[n] = a[n]);
      }
      return this.element.trigger(i, s), !(e.isFunction(o) && o.apply(this.element[0], [i].concat(s)) === !1 || i.isDefaultPrevented());
    }
  }, e.each({
    show: "fadeIn",
    hide: "fadeOut"
  }, function (t, i) {
    e.Widget.prototype["_" + t] = function (s, n, a) {
      "string" == typeof n && (n = {
        effect: n
      });
      var o,
          r = n ? n === !0 || "number" == typeof n ? i : n.effect || i : t;
      n = n || {}, "number" == typeof n && (n = {
        duration: n
      }), o = !e.isEmptyObject(n), n.complete = a, n.delay && s.delay(n.delay), o && e.effects && e.effects.effect[r] ? s[t](n) : r !== t && s[r] ? s[r](n.duration, n.easing, a) : s.queue(function (i) {
        e(this)[t](), a && a.call(s[0]), i();
      });
    };
  }), e.widget;
  var a = !1;
  e(document).mouseup(function () {
    a = !1;
  }), e.widget("ui.mouse", {
    version: "1.11.4",
    options: {
      cancel: "input,textarea,button,select,option",
      distance: 1,
      delay: 0
    },
    _mouseInit: function _mouseInit() {
      var t = this;
      this.element.bind("mousedown." + this.widgetName, function (e) {
        return t._mouseDown(e);
      }).bind("click." + this.widgetName, function (i) {
        return !0 === e.data(i.target, t.widgetName + ".preventClickEvent") ? (e.removeData(i.target, t.widgetName + ".preventClickEvent"), i.stopImmediatePropagation(), !1) : void 0;
      }), this.started = !1;
    },
    _mouseDestroy: function _mouseDestroy() {
      this.element.unbind("." + this.widgetName), this._mouseMoveDelegate && this.document.unbind("mousemove." + this.widgetName, this._mouseMoveDelegate).unbind("mouseup." + this.widgetName, this._mouseUpDelegate);
    },
    _mouseDown: function _mouseDown(t) {
      if (!a) {
        this._mouseMoved = !1, this._mouseStarted && this._mouseUp(t), this._mouseDownEvent = t;
        var i = this,
            s = 1 === t.which,
            n = "string" == typeof this.options.cancel && t.target.nodeName ? e(t.target).closest(this.options.cancel).length : !1;
        return s && !n && this._mouseCapture(t) ? (this.mouseDelayMet = !this.options.delay, this.mouseDelayMet || (this._mouseDelayTimer = setTimeout(function () {
          i.mouseDelayMet = !0;
        }, this.options.delay)), this._mouseDistanceMet(t) && this._mouseDelayMet(t) && (this._mouseStarted = this._mouseStart(t) !== !1, !this._mouseStarted) ? (t.preventDefault(), !0) : (!0 === e.data(t.target, this.widgetName + ".preventClickEvent") && e.removeData(t.target, this.widgetName + ".preventClickEvent"), this._mouseMoveDelegate = function (e) {
          return i._mouseMove(e);
        }, this._mouseUpDelegate = function (e) {
          return i._mouseUp(e);
        }, this.document.bind("mousemove." + this.widgetName, this._mouseMoveDelegate).bind("mouseup." + this.widgetName, this._mouseUpDelegate), t.preventDefault(), a = !0, !0)) : !0;
      }
    },
    _mouseMove: function _mouseMove(t) {
      if (this._mouseMoved) {
        if (e.ui.ie && (!document.documentMode || 9 > document.documentMode) && !t.button) return this._mouseUp(t);
        if (!t.which) return this._mouseUp(t);
      }

      return (t.which || t.button) && (this._mouseMoved = !0), this._mouseStarted ? (this._mouseDrag(t), t.preventDefault()) : (this._mouseDistanceMet(t) && this._mouseDelayMet(t) && (this._mouseStarted = this._mouseStart(this._mouseDownEvent, t) !== !1, this._mouseStarted ? this._mouseDrag(t) : this._mouseUp(t)), !this._mouseStarted);
    },
    _mouseUp: function _mouseUp(t) {
      return this.document.unbind("mousemove." + this.widgetName, this._mouseMoveDelegate).unbind("mouseup." + this.widgetName, this._mouseUpDelegate), this._mouseStarted && (this._mouseStarted = !1, t.target === this._mouseDownEvent.target && e.data(t.target, this.widgetName + ".preventClickEvent", !0), this._mouseStop(t)), a = !1, !1;
    },
    _mouseDistanceMet: function _mouseDistanceMet(e) {
      return Math.max(Math.abs(this._mouseDownEvent.pageX - e.pageX), Math.abs(this._mouseDownEvent.pageY - e.pageY)) >= this.options.distance;
    },
    _mouseDelayMet: function _mouseDelayMet() {
      return this.mouseDelayMet;
    },
    _mouseStart: function _mouseStart() {},
    _mouseDrag: function _mouseDrag() {},
    _mouseStop: function _mouseStop() {},
    _mouseCapture: function _mouseCapture() {
      return !0;
    }
  });

  var o,
      r = "ui-button ui-widget ui-state-default ui-corner-all",
      h = "ui-button-icons-only ui-button-icon-only ui-button-text-icons ui-button-text-icon-primary ui-button-text-icon-secondary ui-button-text-only",
      l = function l() {
    var t = e(this);
    setTimeout(function () {
      t.find(":ui-button").button("refresh");
    }, 1);
  },
      u = function u(t) {
    var i = t.name,
        s = t.form,
        n = e([]);
    return i && (i = i.replace(/'/g, "\\'"), n = s ? e(s).find("[name='" + i + "'][type=radio]") : e("[name='" + i + "'][type=radio]", t.ownerDocument).filter(function () {
      return !this.form;
    })), n;
  };

  e.widget("ui.button", {
    version: "1.11.4",
    defaultElement: "<button>",
    options: {
      disabled: null,
      text: !0,
      label: null,
      icons: {
        primary: null,
        secondary: null
      }
    },
    _create: function _create() {
      this.element.closest("form").unbind("reset" + this.eventNamespace).bind("reset" + this.eventNamespace, l), "boolean" != typeof this.options.disabled ? this.options.disabled = !!this.element.prop("disabled") : this.element.prop("disabled", this.options.disabled), this._determineButtonType(), this.hasTitle = !!this.buttonElement.attr("title");
      var t = this,
          i = this.options,
          s = "checkbox" === this.type || "radio" === this.type,
          n = s ? "" : "ui-state-active";
      null === i.label && (i.label = "input" === this.type ? this.buttonElement.val() : this.buttonElement.html()), this._hoverable(this.buttonElement), this.buttonElement.addClass(r).attr("role", "button").bind("mouseenter" + this.eventNamespace, function () {
        i.disabled || this === o && e(this).addClass("ui-state-active");
      }).bind("mouseleave" + this.eventNamespace, function () {
        i.disabled || e(this).removeClass(n);
      }).bind("click" + this.eventNamespace, function (e) {
        i.disabled && (e.preventDefault(), e.stopImmediatePropagation());
      }), this._on({
        focus: function focus() {
          this.buttonElement.addClass("ui-state-focus");
        },
        blur: function blur() {
          this.buttonElement.removeClass("ui-state-focus");
        }
      }), s && this.element.bind("change" + this.eventNamespace, function () {
        t.refresh();
      }), "checkbox" === this.type ? this.buttonElement.bind("click" + this.eventNamespace, function () {
        return i.disabled ? !1 : void 0;
      }) : "radio" === this.type ? this.buttonElement.bind("click" + this.eventNamespace, function () {
        if (i.disabled) return !1;
        e(this).addClass("ui-state-active"), t.buttonElement.attr("aria-pressed", "true");
        var s = t.element[0];
        u(s).not(s).map(function () {
          return e(this).button("widget")[0];
        }).removeClass("ui-state-active").attr("aria-pressed", "false");
      }) : (this.buttonElement.bind("mousedown" + this.eventNamespace, function () {
        return i.disabled ? !1 : (e(this).addClass("ui-state-active"), o = this, t.document.one("mouseup", function () {
          o = null;
        }), void 0);
      }).bind("mouseup" + this.eventNamespace, function () {
        return i.disabled ? !1 : (e(this).removeClass("ui-state-active"), void 0);
      }).bind("keydown" + this.eventNamespace, function (t) {
        return i.disabled ? !1 : ((t.keyCode === e.ui.keyCode.SPACE || t.keyCode === e.ui.keyCode.ENTER) && e(this).addClass("ui-state-active"), void 0);
      }).bind("keyup" + this.eventNamespace + " blur" + this.eventNamespace, function () {
        e(this).removeClass("ui-state-active");
      }), this.buttonElement.is("a") && this.buttonElement.keyup(function (t) {
        t.keyCode === e.ui.keyCode.SPACE && e(this).click();
      })), this._setOption("disabled", i.disabled), this._resetButton();
    },
    _determineButtonType: function _determineButtonType() {
      var e, t, i;
      this.type = this.element.is("[type=checkbox]") ? "checkbox" : this.element.is("[type=radio]") ? "radio" : this.element.is("input") ? "input" : "button", "checkbox" === this.type || "radio" === this.type ? (e = this.element.parents().last(), t = "label[for='" + this.element.attr("id") + "']", this.buttonElement = e.find(t), this.buttonElement.length || (e = e.length ? e.siblings() : this.element.siblings(), this.buttonElement = e.filter(t), this.buttonElement.length || (this.buttonElement = e.find(t))), this.element.addClass("ui-helper-hidden-accessible"), i = this.element.is(":checked"), i && this.buttonElement.addClass("ui-state-active"), this.buttonElement.prop("aria-pressed", i)) : this.buttonElement = this.element;
    },
    widget: function widget() {
      return this.buttonElement;
    },
    _destroy: function _destroy() {
      this.element.removeClass("ui-helper-hidden-accessible"), this.buttonElement.removeClass(r + " ui-state-active " + h).removeAttr("role").removeAttr("aria-pressed").html(this.buttonElement.find(".ui-button-text").html()), this.hasTitle || this.buttonElement.removeAttr("title");
    },
    _setOption: function _setOption(e, t) {
      return this._super(e, t), "disabled" === e ? (this.widget().toggleClass("ui-state-disabled", !!t), this.element.prop("disabled", !!t), t && ("checkbox" === this.type || "radio" === this.type ? this.buttonElement.removeClass("ui-state-focus") : this.buttonElement.removeClass("ui-state-focus ui-state-active")), void 0) : (this._resetButton(), void 0);
    },
    refresh: function refresh() {
      var t = this.element.is("input, button") ? this.element.is(":disabled") : this.element.hasClass("ui-button-disabled");
      t !== this.options.disabled && this._setOption("disabled", t), "radio" === this.type ? u(this.element[0]).each(function () {
        e(this).is(":checked") ? e(this).button("widget").addClass("ui-state-active").attr("aria-pressed", "true") : e(this).button("widget").removeClass("ui-state-active").attr("aria-pressed", "false");
      }) : "checkbox" === this.type && (this.element.is(":checked") ? this.buttonElement.addClass("ui-state-active").attr("aria-pressed", "true") : this.buttonElement.removeClass("ui-state-active").attr("aria-pressed", "false"));
    },
    _resetButton: function _resetButton() {
      if ("input" === this.type) return this.options.label && this.element.val(this.options.label), void 0;
      var t = this.buttonElement.removeClass(h),
          i = e("<span></span>", this.document[0]).addClass("ui-button-text").html(this.options.label).appendTo(t.empty()).text(),
          s = this.options.icons,
          n = s.primary && s.secondary,
          a = [];
      s.primary || s.secondary ? (this.options.text && a.push("ui-button-text-icon" + (n ? "s" : s.primary ? "-primary" : "-secondary")), s.primary && t.prepend("<span class='ui-button-icon-primary ui-icon " + s.primary + "'></span>"), s.secondary && t.append("<span class='ui-button-icon-secondary ui-icon " + s.secondary + "'></span>"), this.options.text || (a.push(n ? "ui-button-icons-only" : "ui-button-icon-only"), this.hasTitle || t.attr("title", e.trim(i)))) : a.push("ui-button-text-only"), t.addClass(a.join(" "));
    }
  }), e.widget("ui.buttonset", {
    version: "1.11.4",
    options: {
      items: "button, input[type=button], input[type=submit], input[type=reset], input[type=checkbox], input[type=radio], a, :data(ui-button)"
    },
    _create: function _create() {
      this.element.addClass("ui-buttonset");
    },
    _init: function _init() {
      this.refresh();
    },
    _setOption: function _setOption(e, t) {
      "disabled" === e && this.buttons.button("option", e, t), this._super(e, t);
    },
    refresh: function refresh() {
      var t = "rtl" === this.element.css("direction"),
          i = this.element.find(this.options.items),
          s = i.filter(":ui-button");
      i.not(":ui-button").button(), s.button("refresh"), this.buttons = i.map(function () {
        return e(this).button("widget")[0];
      }).removeClass("ui-corner-all ui-corner-left ui-corner-right").filter(":first").addClass(t ? "ui-corner-right" : "ui-corner-left").end().filter(":last").addClass(t ? "ui-corner-left" : "ui-corner-right").end().end();
    },
    _destroy: function _destroy() {
      this.element.removeClass("ui-buttonset"), this.buttons.map(function () {
        return e(this).button("widget")[0];
      }).removeClass("ui-corner-left ui-corner-right").end().button("destroy");
    }
  }), e.ui.button, e.widget("ui.slider", e.ui.mouse, {
    version: "1.11.4",
    widgetEventPrefix: "slide",
    options: {
      animate: !1,
      distance: 0,
      max: 100,
      min: 0,
      orientation: "horizontal",
      range: !1,
      step: 1,
      value: 0,
      values: null,
      change: null,
      slide: null,
      start: null,
      stop: null
    },
    numPages: 5,
    _create: function _create() {
      this._keySliding = !1, this._mouseSliding = !1, this._animateOff = !0, this._handleIndex = null, this._detectOrientation(), this._mouseInit(), this._calculateNewMax(), this.element.addClass("ui-slider ui-slider-" + this.orientation + " ui-widget" + " ui-widget-content" + " ui-corner-all"), this._refresh(), this._setOption("disabled", this.options.disabled), this._animateOff = !1;
    },
    _refresh: function _refresh() {
      this._createRange(), this._createHandles(), this._setupEvents(), this._refreshValue();
    },
    _createHandles: function _createHandles() {
      var t,
          i,
          s = this.options,
          n = this.element.find(".ui-slider-handle").addClass("ui-state-default ui-corner-all"),
          a = "<span class='ui-slider-handle ui-state-default ui-corner-all' tabindex='0'></span>",
          o = [];

      for (i = s.values && s.values.length || 1, n.length > i && (n.slice(i).remove(), n = n.slice(0, i)), t = n.length; i > t; t++) {
        o.push(a);
      }

      this.handles = n.add(e(o.join("")).appendTo(this.element)), this.handle = this.handles.eq(0), this.handles.each(function (t) {
        e(this).data("ui-slider-handle-index", t);
      });
    },
    _createRange: function _createRange() {
      var t = this.options,
          i = "";
      t.range ? (t.range === !0 && (t.values ? t.values.length && 2 !== t.values.length ? t.values = [t.values[0], t.values[0]] : e.isArray(t.values) && (t.values = t.values.slice(0)) : t.values = [this._valueMin(), this._valueMin()]), this.range && this.range.length ? this.range.removeClass("ui-slider-range-min ui-slider-range-max").css({
        left: "",
        bottom: ""
      }) : (this.range = e("<div></div>").appendTo(this.element), i = "ui-slider-range ui-widget-header ui-corner-all"), this.range.addClass(i + ("min" === t.range || "max" === t.range ? " ui-slider-range-" + t.range : ""))) : (this.range && this.range.remove(), this.range = null);
    },
    _setupEvents: function _setupEvents() {
      this._off(this.handles), this._on(this.handles, this._handleEvents), this._hoverable(this.handles), this._focusable(this.handles);
    },
    _destroy: function _destroy() {
      this.handles.remove(), this.range && this.range.remove(), this.element.removeClass("ui-slider ui-slider-horizontal ui-slider-vertical ui-widget ui-widget-content ui-corner-all"), this._mouseDestroy();
    },
    _mouseCapture: function _mouseCapture(t) {
      var i,
          s,
          n,
          a,
          o,
          r,
          h,
          l,
          u = this,
          d = this.options;
      return d.disabled ? !1 : (this.elementSize = {
        width: this.element.outerWidth(),
        height: this.element.outerHeight()
      }, this.elementOffset = this.element.offset(), i = {
        x: t.pageX,
        y: t.pageY
      }, s = this._normValueFromMouse(i), n = this._valueMax() - this._valueMin() + 1, this.handles.each(function (t) {
        var i = Math.abs(s - u.values(t));
        (n > i || n === i && (t === u._lastChangedValue || u.values(t) === d.min)) && (n = i, a = e(this), o = t);
      }), r = this._start(t, o), r === !1 ? !1 : (this._mouseSliding = !0, this._handleIndex = o, a.addClass("ui-state-active").focus(), h = a.offset(), l = !e(t.target).parents().addBack().is(".ui-slider-handle"), this._clickOffset = l ? {
        left: 0,
        top: 0
      } : {
        left: t.pageX - h.left - a.width() / 2,
        top: t.pageY - h.top - a.height() / 2 - (parseInt(a.css("borderTopWidth"), 10) || 0) - (parseInt(a.css("borderBottomWidth"), 10) || 0) + (parseInt(a.css("marginTop"), 10) || 0)
      }, this.handles.hasClass("ui-state-hover") || this._slide(t, o, s), this._animateOff = !0, !0));
    },
    _mouseStart: function _mouseStart() {
      return !0;
    },
    _mouseDrag: function _mouseDrag(e) {
      var t = {
        x: e.pageX,
        y: e.pageY
      },
          i = this._normValueFromMouse(t);

      return this._slide(e, this._handleIndex, i), !1;
    },
    _mouseStop: function _mouseStop(e) {
      return this.handles.removeClass("ui-state-active"), this._mouseSliding = !1, this._stop(e, this._handleIndex), this._change(e, this._handleIndex), this._handleIndex = null, this._clickOffset = null, this._animateOff = !1, !1;
    },
    _detectOrientation: function _detectOrientation() {
      this.orientation = "vertical" === this.options.orientation ? "vertical" : "horizontal";
    },
    _normValueFromMouse: function _normValueFromMouse(e) {
      var t, i, s, n, a;
      return "horizontal" === this.orientation ? (t = this.elementSize.width, i = e.x - this.elementOffset.left - (this._clickOffset ? this._clickOffset.left : 0)) : (t = this.elementSize.height, i = e.y - this.elementOffset.top - (this._clickOffset ? this._clickOffset.top : 0)), s = i / t, s > 1 && (s = 1), 0 > s && (s = 0), "vertical" === this.orientation && (s = 1 - s), n = this._valueMax() - this._valueMin(), a = this._valueMin() + s * n, this._trimAlignValue(a);
    },
    _start: function _start(e, t) {
      var i = {
        handle: this.handles[t],
        value: this.value()
      };
      return this.options.values && this.options.values.length && (i.value = this.values(t), i.values = this.values()), this._trigger("start", e, i);
    },
    _slide: function _slide(e, t, i) {
      var s, n, a;
      this.options.values && this.options.values.length ? (s = this.values(t ? 0 : 1), 2 === this.options.values.length && this.options.range === !0 && (0 === t && i > s || 1 === t && s > i) && (i = s), i !== this.values(t) && (n = this.values(), n[t] = i, a = this._trigger("slide", e, {
        handle: this.handles[t],
        value: i,
        values: n
      }), s = this.values(t ? 0 : 1), a !== !1 && this.values(t, i))) : i !== this.value() && (a = this._trigger("slide", e, {
        handle: this.handles[t],
        value: i
      }), a !== !1 && this.value(i));
    },
    _stop: function _stop(e, t) {
      var i = {
        handle: this.handles[t],
        value: this.value()
      };
      this.options.values && this.options.values.length && (i.value = this.values(t), i.values = this.values()), this._trigger("stop", e, i);
    },
    _change: function _change(e, t) {
      if (!this._keySliding && !this._mouseSliding) {
        var i = {
          handle: this.handles[t],
          value: this.value()
        };
        this.options.values && this.options.values.length && (i.value = this.values(t), i.values = this.values()), this._lastChangedValue = t, this._trigger("change", e, i);
      }
    },
    value: function value(e) {
      return arguments.length ? (this.options.value = this._trimAlignValue(e), this._refreshValue(), this._change(null, 0), void 0) : this._value();
    },
    values: function values(t, i) {
      var s, n, a;
      if (arguments.length > 1) return this.options.values[t] = this._trimAlignValue(i), this._refreshValue(), this._change(null, t), void 0;
      if (!arguments.length) return this._values();
      if (!e.isArray(arguments[0])) return this.options.values && this.options.values.length ? this._values(t) : this.value();

      for (s = this.options.values, n = arguments[0], a = 0; s.length > a; a += 1) {
        s[a] = this._trimAlignValue(n[a]), this._change(null, a);
      }

      this._refreshValue();
    },
    _setOption: function _setOption(t, i) {
      var s,
          n = 0;

      switch ("range" === t && this.options.range === !0 && ("min" === i ? (this.options.value = this._values(0), this.options.values = null) : "max" === i && (this.options.value = this._values(this.options.values.length - 1), this.options.values = null)), e.isArray(this.options.values) && (n = this.options.values.length), "disabled" === t && this.element.toggleClass("ui-state-disabled", !!i), this._super(t, i), t) {
        case "orientation":
          this._detectOrientation(), this.element.removeClass("ui-slider-horizontal ui-slider-vertical").addClass("ui-slider-" + this.orientation), this._refreshValue(), this.handles.css("horizontal" === i ? "bottom" : "left", "");
          break;

        case "value":
          this._animateOff = !0, this._refreshValue(), this._change(null, 0), this._animateOff = !1;
          break;

        case "values":
          for (this._animateOff = !0, this._refreshValue(), s = 0; n > s; s += 1) {
            this._change(null, s);
          }

          this._animateOff = !1;
          break;

        case "step":
        case "min":
        case "max":
          this._animateOff = !0, this._calculateNewMax(), this._refreshValue(), this._animateOff = !1;
          break;

        case "range":
          this._animateOff = !0, this._refresh(), this._animateOff = !1;
      }
    },
    _value: function _value() {
      var e = this.options.value;
      return e = this._trimAlignValue(e);
    },
    _values: function _values(e) {
      var t, i, s;
      if (arguments.length) return t = this.options.values[e], t = this._trimAlignValue(t);

      if (this.options.values && this.options.values.length) {
        for (i = this.options.values.slice(), s = 0; i.length > s; s += 1) {
          i[s] = this._trimAlignValue(i[s]);
        }

        return i;
      }

      return [];
    },
    _trimAlignValue: function _trimAlignValue(e) {
      if (this._valueMin() >= e) return this._valueMin();
      if (e >= this._valueMax()) return this._valueMax();
      var t = this.options.step > 0 ? this.options.step : 1,
          i = (e - this._valueMin()) % t,
          s = e - i;
      return 2 * Math.abs(i) >= t && (s += i > 0 ? t : -t), parseFloat(s.toFixed(5));
    },
    _calculateNewMax: function _calculateNewMax() {
      var e = this.options.max,
          t = this._valueMin(),
          i = this.options.step,
          s = Math.floor(+(e - t).toFixed(this._precision()) / i) * i;

      e = s + t, this.max = parseFloat(e.toFixed(this._precision()));
    },
    _precision: function _precision() {
      var e = this._precisionOf(this.options.step);

      return null !== this.options.min && (e = Math.max(e, this._precisionOf(this.options.min))), e;
    },
    _precisionOf: function _precisionOf(e) {
      var t = "" + e,
          i = t.indexOf(".");
      return -1 === i ? 0 : t.length - i - 1;
    },
    _valueMin: function _valueMin() {
      return this.options.min;
    },
    _valueMax: function _valueMax() {
      return this.max;
    },
    _refreshValue: function _refreshValue() {
      var t,
          i,
          s,
          n,
          a,
          o = this.options.range,
          r = this.options,
          h = this,
          l = this._animateOff ? !1 : r.animate,
          u = {};
      this.options.values && this.options.values.length ? this.handles.each(function (s) {
        i = 100 * ((h.values(s) - h._valueMin()) / (h._valueMax() - h._valueMin())), u["horizontal" === h.orientation ? "left" : "bottom"] = i + "%", e(this).stop(1, 1)[l ? "animate" : "css"](u, r.animate), h.options.range === !0 && ("horizontal" === h.orientation ? (0 === s && h.range.stop(1, 1)[l ? "animate" : "css"]({
          left: i + "%"
        }, r.animate), 1 === s && h.range[l ? "animate" : "css"]({
          width: i - t + "%"
        }, {
          queue: !1,
          duration: r.animate
        })) : (0 === s && h.range.stop(1, 1)[l ? "animate" : "css"]({
          bottom: i + "%"
        }, r.animate), 1 === s && h.range[l ? "animate" : "css"]({
          height: i - t + "%"
        }, {
          queue: !1,
          duration: r.animate
        }))), t = i;
      }) : (s = this.value(), n = this._valueMin(), a = this._valueMax(), i = a !== n ? 100 * ((s - n) / (a - n)) : 0, u["horizontal" === this.orientation ? "left" : "bottom"] = i + "%", this.handle.stop(1, 1)[l ? "animate" : "css"](u, r.animate), "min" === o && "horizontal" === this.orientation && this.range.stop(1, 1)[l ? "animate" : "css"]({
        width: i + "%"
      }, r.animate), "max" === o && "horizontal" === this.orientation && this.range[l ? "animate" : "css"]({
        width: 100 - i + "%"
      }, {
        queue: !1,
        duration: r.animate
      }), "min" === o && "vertical" === this.orientation && this.range.stop(1, 1)[l ? "animate" : "css"]({
        height: i + "%"
      }, r.animate), "max" === o && "vertical" === this.orientation && this.range[l ? "animate" : "css"]({
        height: 100 - i + "%"
      }, {
        queue: !1,
        duration: r.animate
      }));
    },
    _handleEvents: {
      keydown: function keydown(t) {
        var i,
            s,
            n,
            a,
            o = e(t.target).data("ui-slider-handle-index");

        switch (t.keyCode) {
          case e.ui.keyCode.HOME:
          case e.ui.keyCode.END:
          case e.ui.keyCode.PAGE_UP:
          case e.ui.keyCode.PAGE_DOWN:
          case e.ui.keyCode.UP:
          case e.ui.keyCode.RIGHT:
          case e.ui.keyCode.DOWN:
          case e.ui.keyCode.LEFT:
            if (t.preventDefault(), !this._keySliding && (this._keySliding = !0, e(t.target).addClass("ui-state-active"), i = this._start(t, o), i === !1)) return;
        }

        switch (a = this.options.step, s = n = this.options.values && this.options.values.length ? this.values(o) : this.value(), t.keyCode) {
          case e.ui.keyCode.HOME:
            n = this._valueMin();
            break;

          case e.ui.keyCode.END:
            n = this._valueMax();
            break;

          case e.ui.keyCode.PAGE_UP:
            n = this._trimAlignValue(s + (this._valueMax() - this._valueMin()) / this.numPages);
            break;

          case e.ui.keyCode.PAGE_DOWN:
            n = this._trimAlignValue(s - (this._valueMax() - this._valueMin()) / this.numPages);
            break;

          case e.ui.keyCode.UP:
          case e.ui.keyCode.RIGHT:
            if (s === this._valueMax()) return;
            n = this._trimAlignValue(s + a);
            break;

          case e.ui.keyCode.DOWN:
          case e.ui.keyCode.LEFT:
            if (s === this._valueMin()) return;
            n = this._trimAlignValue(s - a);
        }

        this._slide(t, o, n);
      },
      keyup: function keyup(t) {
        var i = e(t.target).data("ui-slider-handle-index");
        this._keySliding && (this._keySliding = !1, this._stop(t, i), this._change(t, i), e(t.target).removeClass("ui-state-active"));
      }
    }
  });
});
/* img zoom */

/*!
 * @name        easyzoom
 * @author      Matt Hinchliffe <>
 * @modified    Tuesday, February 14th, 2017
 * @version     2.5.0
 */


!function (a, b) {
  "use strict";

  "function" == typeof define && define.amd ? define(["jquery"], function (a) {
    b(a);
  }) : "object" == (typeof module === "undefined" ? "undefined" : _typeof(module)) && module.exports ? module.exports = a.EasyZoom = b(require("jquery")) : a.EasyZoom = b(a.jQuery);
}(this, function (a) {
  "use strict";

  function b(b, c) {
    this.$target = a(b), this.opts = a.extend({}, i, c, this.$target.data()), void 0 === this.isOpen && this._init();
  }

  var c,
      d,
      e,
      f,
      g,
      h,
      i = {
    loadingNotice: "Loading image",
    errorNotice: "The image could not be loaded",
    errorDuration: 2500,
    linkAttribute: "href",
    preventClicks: !0,
    beforeShow: a.noop,
    beforeHide: a.noop,
    onShow: a.noop,
    onHide: a.noop,
    onMove: a.noop
  };
  b.prototype._init = function () {
    this.$link = this.$target.find("a"), this.$image = this.$target.find("img"), this.$flyout = a('<div class="easyzoom-flyout" />'), this.$notice = a('<div class="easyzoom-notice" />'), this.$target.on({
      "mousemove.easyzoom touchmove.easyzoom": a.proxy(this._onMove, this),
      "mouseleave.easyzoom touchend.easyzoom": a.proxy(this._onLeave, this),
      "mouseenter.easyzoom touchstart.easyzoom": a.proxy(this._onEnter, this)
    }), this.opts.preventClicks && this.$target.on("click.easyzoom", function (a) {
      a.preventDefault();
    });
  }, b.prototype.show = function (a, b) {
    var g,
        h,
        i,
        j,
        k = this;

    if (this.opts.beforeShow.call(this) !== !1) {
      if (!this.isReady) return this._loadImage(this.$link.attr(this.opts.linkAttribute), function () {
        !k.isMouseOver && b || k.show(a);
      });
      this.$target.append(this.$flyout), g = this.$target.width(), h = this.$target.height(), i = this.$flyout.width(), j = this.$flyout.height(), c = this.$zoom.width() - i, d = this.$zoom.height() - j, c < 0 && (c = 0), d < 0 && (d = 0), e = c / g, f = d / h, this.isOpen = !0, this.opts.onShow.call(this), a && this._move(a);
    }
  }, b.prototype._onEnter = function (a) {
    var b = a.originalEvent.touches;
    this.isMouseOver = !0, b && 1 != b.length || (a.preventDefault(), this.show(a, !0));
  }, b.prototype._onMove = function (a) {
    this.isOpen && (a.preventDefault(), this._move(a));
  }, b.prototype._onLeave = function () {
    this.isMouseOver = !1, this.isOpen && this.hide();
  }, b.prototype._onLoad = function (a) {
    a.currentTarget.width && (this.isReady = !0, this.$notice.detach(), this.$flyout.html(this.$zoom), this.$target.removeClass("is-loading").addClass("is-ready"), a.data.call && a.data());
  }, b.prototype._onError = function () {
    var a = this;
    this.$notice.text(this.opts.errorNotice), this.$target.removeClass("is-loading").addClass("is-error"), this.detachNotice = setTimeout(function () {
      a.$notice.detach(), a.detachNotice = null;
    }, this.opts.errorDuration);
  }, b.prototype._loadImage = function (b, c) {
    var d = new Image();
    this.$target.addClass("is-loading").append(this.$notice.text(this.opts.loadingNotice)), this.$zoom = a(d).on("error", a.proxy(this._onError, this)).on("load", c, a.proxy(this._onLoad, this)), d.style.position = "absolute", d.src = b;
  }, b.prototype._move = function (a) {
    if (0 === a.type.indexOf("touch")) {
      var b = a.touches || a.originalEvent.touches;
      g = b[0].pageX, h = b[0].pageY;
    } else g = a.pageX || g, h = a.pageY || h;

    var i = this.$target.offset(),
        j = h - i.top,
        k = g - i.left,
        l = Math.ceil(j * f),
        m = Math.ceil(k * e);
    if (m < 0 || l < 0 || m > c || l > d) this.hide();else {
      var n = l * -1,
          o = m * -1;
      this.$zoom.css({
        top: n,
        left: o
      }), this.opts.onMove.call(this, n, o);
    }
  }, b.prototype.hide = function () {
    this.isOpen && this.opts.beforeHide.call(this) !== !1 && (this.$flyout.detach(), this.isOpen = !1, this.opts.onHide.call(this));
  }, b.prototype.swap = function (b, c, d) {
    this.hide(), this.isReady = !1, this.detachNotice && clearTimeout(this.detachNotice), this.$notice.parent().length && this.$notice.detach(), this.$target.removeClass("is-loading is-ready is-error"), this.$image.attr({
      src: b,
      srcset: a.isArray(d) ? d.join() : d
    }), this.$link.attr(this.opts.linkAttribute, c);
  }, b.prototype.teardown = function () {
    this.hide(), this.$target.off(".easyzoom").removeClass("is-loading is-ready is-error"), this.detachNotice && clearTimeout(this.detachNotice), delete this.$link, delete this.$zoom, delete this.$image, delete this.$notice, delete this.$flyout, delete this.isOpen, delete this.isReady;
  }, a.fn.easyZoom = function (c) {
    return this.each(function () {
      var d = a.data(this, "easyZoom");
      d ? void 0 === d.isOpen && d._init() : a.data(this, "easyZoom", new b(this, c));
    });
  };
});
/**
 * sticky-sidebar - A JavaScript plugin for making smart and high performance.
 * @version v3.3.0
 * @link https://github.com/abouolia/sticky-sidebar
 * @author Ahmed Bouhuolia
 * @license The MIT License (MIT)
**/

!function (t, e) {
  "object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) && "undefined" != typeof module ? e() : "function" == typeof define && define.amd ? define(e) : e();
}(0, function () {
  "use strict";

  function t(t, e) {
    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
  }

  var e = function () {
    function t(t, e) {
      for (var i = 0; i < e.length; i++) {
        var n = e[i];
        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n);
      }
    }

    return function (e, i, n) {
      return i && t(e.prototype, i), n && t(e, n), e;
    };
  }(),
      i = function () {
    var i = ".stickySidebar",
        n = {
      topSpacing: 0,
      bottomSpacing: 0,
      containerSelector: !1,
      innerWrapperSelector: ".inner-wrapper-sticky",
      stickyClass: "is-affixed",
      resizeSensor: !0,
      minWidth: !1
    };
    return function () {
      function s(e) {
        var i = this,
            o = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        if (t(this, s), this.options = s.extend(n, o), this.sidebar = "string" == typeof e ? document.querySelector(e) : e, void 0 === this.sidebar) throw new Error("There is no specific sidebar element.");
        this.sidebarInner = !1, this.container = this.sidebar.parentElement, this.affixedType = "STATIC", this.direction = "down", this.support = {
          transform: !1,
          transform3d: !1
        }, this._initialized = !1, this._reStyle = !1, this._breakpoint = !1, this._resizeListeners = [], this.dimensions = {
          translateY: 0,
          topSpacing: 0,
          lastTopSpacing: 0,
          bottomSpacing: 0,
          lastBottomSpacing: 0,
          sidebarHeight: 0,
          sidebarWidth: 0,
          containerTop: 0,
          containerHeight: 0,
          viewportHeight: 0,
          viewportTop: 0,
          lastViewportTop: 0
        }, ["handleEvent"].forEach(function (t) {
          i[t] = i[t].bind(i);
        }), this.initialize();
      }

      return e(s, [{
        key: "initialize",
        value: function value() {
          var t = this;

          if (this._setSupportFeatures(), this.options.innerWrapperSelector && (this.sidebarInner = this.sidebar.querySelector(this.options.innerWrapperSelector), null === this.sidebarInner && (this.sidebarInner = !1)), !this.sidebarInner) {
            var e = document.createElement("div");

            for (e.setAttribute("class", "inner-wrapper-sticky"), this.sidebar.appendChild(e); this.sidebar.firstChild != e;) {
              e.appendChild(this.sidebar.firstChild);
            }

            this.sidebarInner = this.sidebar.querySelector(".inner-wrapper-sticky");
          }

          if (this.options.containerSelector) {
            var i = document.querySelectorAll(this.options.containerSelector);
            if ((i = Array.prototype.slice.call(i)).forEach(function (e, i) {
              e.contains(t.sidebar) && (t.container = e);
            }), !i.length) throw new Error("The container does not contains on the sidebar.");
          }

          "function" != typeof this.options.topSpacing && (this.options.topSpacing = parseInt(this.options.topSpacing) || 0), "function" != typeof this.options.bottomSpacing && (this.options.bottomSpacing = parseInt(this.options.bottomSpacing) || 0), this._widthBreakpoint(), this.calcDimensions(), this.stickyPosition(), this.bindEvents(), this._initialized = !0;
        }
      }, {
        key: "bindEvents",
        value: function value() {
          window.addEventListener("resize", this, {
            passive: !0
          }), window.addEventListener("scroll", this, {
            passive: !0
          }), this.sidebar.addEventListener("update" + i, this), this.options.resizeSensor && "undefined" != typeof ResizeSensor && (new ResizeSensor(this.sidebarInner, this.handleEvent), new ResizeSensor(this.container, this.handleEvent));
        }
      }, {
        key: "handleEvent",
        value: function value(t) {
          this.updateSticky(t);
        }
      }, {
        key: "calcDimensions",
        value: function value() {
          if (!this._breakpoint) {
            var t = this.dimensions;
            t.containerTop = s.offsetRelative(this.container).top, t.containerHeight = this.container.clientHeight, t.containerBottom = t.containerTop + t.containerHeight, t.sidebarHeight = this.sidebarInner.offsetHeight, t.sidebarWidth = this.sidebar.offsetWidth, t.viewportHeight = window.innerHeight, this._calcDimensionsWithScroll();
          }
        }
      }, {
        key: "_calcDimensionsWithScroll",
        value: function value() {
          var t = this.dimensions;
          t.sidebarLeft = s.offsetRelative(this.sidebar).left, t.viewportTop = document.documentElement.scrollTop || document.body.scrollTop, t.viewportBottom = t.viewportTop + t.viewportHeight, t.viewportLeft = document.documentElement.scrollLeft || document.body.scrollLeft, t.topSpacing = this.options.topSpacing, t.bottomSpacing = this.options.bottomSpacing, "function" == typeof t.topSpacing && (t.topSpacing = parseInt(t.topSpacing(this.sidebar)) || 0), "function" == typeof t.bottomSpacing && (t.bottomSpacing = parseInt(t.bottomSpacing(this.sidebar)) || 0), "VIEWPORT-TOP" === this.affixedType ? t.topSpacing < t.lastTopSpacing && (t.translateY += t.lastTopSpacing - t.topSpacing, this._reStyle = !0) : "VIEWPORT-BOTTOM" === this.affixedType && t.bottomSpacing < t.lastBottomSpacing && (t.translateY += t.lastBottomSpacing - t.bottomSpacing, this._reStyle = !0), t.lastTopSpacing = t.topSpacing, t.lastBottomSpacing = t.bottomSpacing;
        }
      }, {
        key: "isSidebarFitsViewport",
        value: function value() {
          return this.dimensions.sidebarHeight < this.dimensions.viewportHeight;
        }
      }, {
        key: "observeScrollDir",
        value: function value() {
          var t = this.dimensions;

          if (t.lastViewportTop !== t.viewportTop) {
            var e = "down" === this.direction ? Math.min : Math.max;
            t.viewportTop === e(t.viewportTop, t.lastViewportTop) && (this.direction = "down" === this.direction ? "up" : "down");
          }
        }
      }, {
        key: "getAffixType",
        value: function value() {
          var t = this.dimensions,
              e = !1;

          this._calcDimensionsWithScroll();

          var i = t.sidebarHeight + t.containerTop,
              n = t.viewportTop + t.topSpacing,
              s = t.viewportBottom - t.bottomSpacing;
          return "up" === this.direction ? n <= t.containerTop ? (t.translateY = 0, e = "STATIC") : n <= t.translateY + t.containerTop ? (t.translateY = n - t.containerTop, e = "VIEWPORT-TOP") : !this.isSidebarFitsViewport() && t.containerTop <= n && (e = "VIEWPORT-UNBOTTOM") : this.isSidebarFitsViewport() ? t.sidebarHeight + n >= t.containerBottom ? (t.translateY = t.containerBottom - i, e = "CONTAINER-BOTTOM") : n >= t.containerTop && (t.translateY = n - t.containerTop, e = "VIEWPORT-TOP") : t.containerBottom <= s ? (t.translateY = t.containerBottom - i, e = "CONTAINER-BOTTOM") : i + t.translateY <= s ? (t.translateY = s - i, e = "VIEWPORT-BOTTOM") : t.containerTop + t.translateY <= n && (e = "VIEWPORT-UNBOTTOM"), t.translateY = Math.max(0, t.translateY), t.translateY = Math.min(t.containerHeight, t.translateY), t.lastViewportTop = t.viewportTop, e;
        }
      }, {
        key: "_getStyle",
        value: function value(t) {
          if (void 0 !== t) {
            var e = {
              inner: {},
              outer: {}
            },
                i = this.dimensions;

            switch (t) {
              case "VIEWPORT-TOP":
                e.inner = {
                  position: "fixed",
                  top: i.topSpacing,
                  left: i.sidebarLeft - i.viewportLeft,
                  width: i.sidebarWidth
                };
                break;

              case "VIEWPORT-BOTTOM":
                e.inner = {
                  position: "fixed",
                  top: "auto",
                  left: i.sidebarLeft,
                  bottom: i.bottomSpacing,
                  width: i.sidebarWidth
                };
                break;

              case "CONTAINER-BOTTOM":
              case "VIEWPORT-UNBOTTOM":
                var n = this._getTranslate(0, i.translateY + "px");

                e.inner = n ? {
                  transform: n
                } : {
                  position: "absolute",
                  top: i.translateY,
                  width: i.sidebarWidth
                };
            }

            switch (t) {
              case "VIEWPORT-TOP":
              case "VIEWPORT-BOTTOM":
              case "VIEWPORT-UNBOTTOM":
              case "CONTAINER-BOTTOM":
                e.outer = {
                  height: i.sidebarHeight,
                  position: "relative"
                };
            }

            return e.outer = s.extend({
              height: "",
              position: ""
            }, e.outer), e.inner = s.extend({
              position: "relative",
              top: "",
              left: "",
              bottom: "",
              width: "",
              transform: this._getTranslate()
            }, e.inner), e;
          }
        }
      }, {
        key: "stickyPosition",
        value: function value(t) {
          if (!this._breakpoint) {
            t = this._reStyle || t || !1;

            var e = this.getAffixType(),
                n = this._getStyle(e);

            if ((this.affixedType != e || t) && e) {
              var o = "affix." + e.toLowerCase().replace("viewport-", "") + i;
              s.eventTrigger(this.sidebar, o), "STATIC" === e ? s.removeClass(this.sidebar, this.options.stickyClass) : s.addClass(this.sidebar, this.options.stickyClass);

              for (var r in n.outer) {
                this.sidebar.style[r] = n.outer[r];
              }

              for (var a in n.inner) {
                var c = "number" == typeof n.inner[a] ? "px" : "";
                this.sidebarInner.style[a] = n.inner[a] + c;
              }

              var p = "affixed." + e.toLowerCase().replace("viewport-", "") + i;
              s.eventTrigger(this.sidebar, p);
            } else this._initialized && (this.sidebarInner.style.left = n.inner.left);

            this.affixedType = e;
          }
        }
      }, {
        key: "_widthBreakpoint",
        value: function value() {
          window.innerWidth <= this.options.minWidth ? (this._breakpoint = !0, this.affixedType = "STATIC", this.sidebar.removeAttribute("style"), s.removeClass(this.sidebar, this.options.stickyClass), this.sidebarInner.removeAttribute("style")) : this._breakpoint = !1;
        }
      }, {
        key: "updateSticky",
        value: function value() {
          var t = this,
              e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          this._running || (this._running = !0, function (e) {
            requestAnimationFrame(function () {
              switch (e) {
                case "scroll":
                  t._calcDimensionsWithScroll(), t.observeScrollDir(), t.stickyPosition();
                  break;

                case "resize":
                default:
                  t._widthBreakpoint(), t.calcDimensions(), t.stickyPosition(!0);
              }

              t._running = !1;
            });
          }(e.type));
        }
      }, {
        key: "_setSupportFeatures",
        value: function value() {
          var t = this.support;
          t.transform = s.supportTransform(), t.transform3d = s.supportTransform(!0);
        }
      }, {
        key: "_getTranslate",
        value: function value() {
          var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
              e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
              i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
          return this.support.transform3d ? "translate3d(" + t + ", " + e + ", " + i + ")" : !!this.support.translate && "translate(" + t + ", " + e + ")";
        }
      }, {
        key: "destroy",
        value: function value() {
          window.removeEventListener("resize", this), window.removeEventListener("scroll", this), this.sidebar.classList.remove(this.options.stickyClass), this.sidebar.style.minHeight = "", this.sidebar.removeEventListener("update" + i, this);
          var t = {
            inner: {},
            outer: {}
          };
          t.inner = {
            position: "",
            top: "",
            left: "",
            bottom: "",
            width: "",
            transform: ""
          }, t.outer = {
            height: "",
            position: ""
          };

          for (var e in t.outer) {
            this.sidebar.style[e] = t.outer[e];
          }

          for (var n in t.inner) {
            this.sidebarInner.style[n] = t.inner[n];
          }

          this.options.resizeSensor && "undefined" != typeof ResizeSensor && (ResizeSensor.detach(this.sidebarInner, this.handleEvent), ResizeSensor.detach(this.container, this.handleEvent));
        }
      }], [{
        key: "supportTransform",
        value: function value(t) {
          var e = !1,
              i = t ? "perspective" : "transform",
              n = i.charAt(0).toUpperCase() + i.slice(1),
              s = ["Webkit", "Moz", "O", "ms"],
              o = document.createElement("support").style;
          return (i + " " + s.join(n + " ") + n).split(" ").forEach(function (t, i) {
            if (void 0 !== o[t]) return e = t, !1;
          }), e;
        }
      }, {
        key: "eventTrigger",
        value: function value(t, e, i) {
          try {
            var n = new CustomEvent(e, {
              detail: i
            });
          } catch (t) {
            (n = document.createEvent("CustomEvent")).initCustomEvent(e, !0, !0, i);
          }

          t.dispatchEvent(n);
        }
      }, {
        key: "extend",
        value: function value(t, e) {
          var i = {};

          for (var n in t) {
            void 0 !== e[n] ? i[n] = e[n] : i[n] = t[n];
          }

          return i;
        }
      }, {
        key: "offsetRelative",
        value: function value(t) {
          var e = {
            left: 0,
            top: 0
          };

          do {
            var i = t.offsetTop,
                n = t.offsetLeft;
            isNaN(i) || (e.top += i), isNaN(n) || (e.left += n), t = "BODY" === t.tagName ? t.parentElement : t.offsetParent;
          } while (t);

          return e;
        }
      }, {
        key: "addClass",
        value: function value(t, e) {
          s.hasClass(t, e) || (t.classList ? t.classList.add(e) : t.className += " " + e);
        }
      }, {
        key: "removeClass",
        value: function value(t, e) {
          s.hasClass(t, e) && (t.classList ? t.classList.remove(e) : t.className = t.className.replace(new RegExp("(^|\\b)" + e.split(" ").join("|") + "(\\b|$)", "gi"), " "));
        }
      }, {
        key: "hasClass",
        value: function value(t, e) {
          return t.classList ? t.classList.contains(e) : new RegExp("(^| )" + e + "( |$)", "gi").test(t.className);
        }
      }]), s;
    }();
  }();

  window.StickySidebar = i, function () {
    if ("undefined" != typeof window) {
      var t = window.$ || window.jQuery || window.Zepto;

      if (t) {
        t.fn.stickySidebar = function (e) {
          return this.each(function () {
            var n = t(this),
                s = t(this).data("stickySidebar");

            if (s || (s = new i(this, "object" == _typeof(e) && e), n.data("stickySidebar", s)), "string" == typeof e) {
              if (void 0 === s[e] && -1 === ["destroy", "updateSticky"].indexOf(e)) throw new Error('No method named "' + e + '"');
              s[e]();
            }
          });
        }, t.fn.stickySidebar.Constructor = i;
        var e = t.fn.stickySidebar;

        t.fn.stickySidebar.noConflict = function () {
          return t.fn.stickySidebar = e, this;
        };
      }
    }
  }();
});
/*!
* jQuery meanMenu v2.0.8
* @Copyright (C) 2012-2014 Chris Wharton @ MeanThemes (https://github.com/meanthemes/meanMenu)
*
*/

/*
* This program is free software: you can redistribute it and/or modify
* it under the terms of the GNU General Public License as published by
* the Free Software Foundation, either version 3 of the License, or
* (at your option) any later version.
*
* THIS SOFTWARE AND DOCUMENTATION IS PROVIDED "AS IS," AND COPYRIGHT
* HOLDERS MAKE NO REPRESENTATIONS OR WARRANTIES, EXPRESS OR IMPLIED,
* INCLUDING BUT NOT LIMITED TO, WARRANTIES OF MERCHANTABILITY OR
* FITNESS FOR ANY PARTICULAR PURPOSE OR THAT THE USE OF THE SOFTWARE
* OR DOCUMENTATION WILL NOT INFRINGE ANY THIRD PARTY PATENTS,
* COPYRIGHTS, TRADEMARKS OR OTHER RIGHTS.COPYRIGHT HOLDERS WILL NOT
* BE LIABLE FOR ANY DIRECT, INDIRECT, SPECIAL OR CONSEQUENTIAL
* DAMAGES ARISING OUT OF ANY USE OF THE SOFTWARE OR DOCUMENTATION.
*
* You should have received a copy of the GNU General Public License
* along with this program. If not, see <http://gnu.org/licenses/>.
*
* Find more information at http://www.meanthemes.com/plugins/meanmenu/
*
*/

(function ($) {
  "use strict";

  $.fn.meanmenu = function (options) {
    var defaults = {
      meanMenuTarget: jQuery(this),
      // Target the current HTML markup you wish to replace
      meanMenuContainer: 'body',
      // Choose where meanmenu will be placed within the HTML
      meanMenuClose: "X",
      // single character you want to represent the close menu button
      meanMenuCloseSize: "18px",
      // set font size of close button
      meanMenuOpen: "<span /><span /><span />",
      // text/markup you want when menu is closed
      meanRevealPosition: "",
      // left right or center positions
      meanRevealPositionDistance: "0",
      // Tweak the position of the menu
      meanRevealColour: "",
      // override CSS colours for the reveal background
      meanScreenWidth: "480",
      // set the screen width you want meanmenu to kick in at
      meanNavPush: "",
      // set a height here in px, em or % if you want to budge your layout now the navigation is missing.
      meanShowChildren: true,
      // true to show children in the menu, false to hide them
      meanExpandableChildren: true,
      // true to allow expand/collapse children
      meanExpand: "+",
      // single character you want to represent the expand for ULs
      meanContract: "-",
      // single character you want to represent the contract for ULs
      meanRemoveAttrs: false,
      // true to remove classes and IDs, false to keep them
      onePage: false,
      // set to true for one page sites
      meanDisplay: "block",
      // override display method for table cell based layouts e.g. table-cell
      removeElements: "" // set to hide page elements

    };
    options = $.extend(defaults, options); // get browser width

    var currentWidth = window.innerWidth || document.documentElement.clientWidth;
    return this.each(function () {
      var meanMenu = options.meanMenuTarget;
      var meanContainer = options.meanMenuContainer;
      var meanMenuClose = options.meanMenuClose;
      var meanMenuCloseSize = options.meanMenuCloseSize;
      var meanMenuOpen = options.meanMenuOpen;
      var meanRevealPosition = options.meanRevealPosition;
      var meanRevealPositionDistance = options.meanRevealPositionDistance;
      var meanRevealColour = options.meanRevealColour;
      var meanScreenWidth = options.meanScreenWidth;
      var meanNavPush = options.meanNavPush;
      var meanRevealClass = ".meanmenu-reveal";
      var meanShowChildren = options.meanShowChildren;
      var meanExpandableChildren = options.meanExpandableChildren;
      var meanExpand = options.meanExpand;
      var meanContract = options.meanContract;
      var meanRemoveAttrs = options.meanRemoveAttrs;
      var onePage = options.onePage;
      var meanDisplay = options.meanDisplay;
      var removeElements = options.removeElements; //detect known mobile/tablet usage

      var isMobile = false;

      if (navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPod/i) || navigator.userAgent.match(/iPad/i) || navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/Blackberry/i) || navigator.userAgent.match(/Windows Phone/i)) {
        isMobile = true;
      }

      if (navigator.userAgent.match(/MSIE 8/i) || navigator.userAgent.match(/MSIE 7/i)) {
        // add scrollbar for IE7 & 8 to stop breaking resize function on small content sites
        jQuery('html').css("overflow-y", "scroll");
      }

      var meanRevealPos = "";

      var meanCentered = function meanCentered() {
        if (meanRevealPosition === "center") {
          var newWidth = window.innerWidth || document.documentElement.clientWidth;
          var meanCenter = newWidth / 2 - 22 + "px";
          meanRevealPos = "left:" + meanCenter + ";right:auto;";

          if (!isMobile) {
            jQuery('.meanmenu-reveal').css("left", meanCenter);
          } else {
            jQuery('.meanmenu-reveal').animate({
              left: meanCenter
            });
          }
        }
      };

      var menuOn = false;
      var meanMenuExist = false;

      if (meanRevealPosition === "right") {
        meanRevealPos = "right:" + meanRevealPositionDistance + ";left:auto;";
      }

      if (meanRevealPosition === "left") {
        meanRevealPos = "left:" + meanRevealPositionDistance + ";right:auto;";
      } // run center function


      meanCentered(); // set all styles for mean-reveal

      var $navreveal = "";

      var meanInner = function meanInner() {
        // get last class name
        if (jQuery($navreveal).is(".meanmenu-reveal.meanclose")) {
          $navreveal.html(meanMenuClose);
        } else {
          $navreveal.html(meanMenuOpen);
        }
      }; // re-instate original nav (and call this on window.width functions)


      var meanOriginal = function meanOriginal() {
        jQuery('.mean-bar,.mean-push').remove();
        jQuery(meanContainer).removeClass("mean-container");
        jQuery(meanMenu).css('display', meanDisplay);
        menuOn = false;
        meanMenuExist = false;
        jQuery(removeElements).removeClass('mean-remove');
      }; // navigation reveal


      var showMeanMenu = function showMeanMenu() {
        var meanStyles = "background:" + meanRevealColour + ";color:" + meanRevealColour + ";" + meanRevealPos;

        if (currentWidth <= meanScreenWidth) {
          jQuery(removeElements).addClass('mean-remove');
          meanMenuExist = true; // add class to body so we don't need to worry about media queries here, all CSS is wrapped in '.mean-container'

          jQuery(meanContainer).addClass("mean-container");
          jQuery('.mean-container').prepend('<div class="mean-bar"><a href="#nav" class="meanmenu-reveal" style="' + meanStyles + '">Show Navigation</a><nav class="mean-nav"></nav></div>'); //push meanMenu navigation into .mean-nav

          var meanMenuContents = jQuery(meanMenu).html();
          jQuery('.mean-nav').html(meanMenuContents); // remove all classes from EVERYTHING inside meanmenu nav

          if (meanRemoveAttrs) {
            jQuery('nav.mean-nav ul, nav.mean-nav ul *').each(function () {
              // First check if this has mean-remove class
              if (jQuery(this).is('.mean-remove')) {
                jQuery(this).attr('class', 'mean-remove');
              } else {
                jQuery(this).removeAttr("class");
              }

              jQuery(this).removeAttr("id");
            });
          } // push in a holder div (this can be used if removal of nav is causing layout issues)


          jQuery(meanMenu).before('<div class="mean-push" />');
          jQuery('.mean-push').css("margin-top", meanNavPush); // hide current navigation and reveal mean nav link

          jQuery(meanMenu).hide();
          jQuery(".meanmenu-reveal").show(); // turn 'X' on or off

          jQuery(meanRevealClass).html(meanMenuOpen);
          $navreveal = jQuery(meanRevealClass); //hide mean-nav ul

          jQuery('.mean-nav ul').hide(); // hide sub nav

          if (meanShowChildren) {
            // allow expandable sub nav(s)
            if (meanExpandableChildren) {
              jQuery('.mean-nav ul ul').each(function () {
                if (jQuery(this).children().length) {
                  jQuery(this, 'li:first').parent().append('<a class="mean-expand" href="#" style="font-size: ' + meanMenuCloseSize + '">' + meanExpand + '</a>');
                }
              });
              jQuery('.mean-expand').on("click", function (e) {
                e.preventDefault();

                if (jQuery(this).hasClass("mean-clicked")) {
                  jQuery(this).text(meanExpand);
                  jQuery(this).prev('ul').slideUp(300, function () {});
                } else {
                  jQuery(this).text(meanContract);
                  jQuery(this).prev('ul').slideDown(300, function () {});
                }

                jQuery(this).toggleClass("mean-clicked");
              });
            } else {
              jQuery('.mean-nav ul ul').show();
            }
          } else {
            jQuery('.mean-nav ul ul').hide();
          } // add last class to tidy up borders


          jQuery('.mean-nav ul li').last().addClass('mean-last');
          $navreveal.removeClass("meanclose");
          jQuery($navreveal).click(function (e) {
            e.preventDefault();

            if (menuOn === false) {
              $navreveal.css("text-align", "center");
              $navreveal.css("text-indent", "0");
              $navreveal.css("font-size", meanMenuCloseSize);
              jQuery('.mean-nav ul:first').slideDown();
              menuOn = true;
            } else {
              jQuery('.mean-nav ul:first').slideUp();
              menuOn = false;
            }

            $navreveal.toggleClass("meanclose");
            meanInner();
            jQuery(removeElements).addClass('mean-remove');
          }); // for one page websites, reset all variables...

          if (onePage) {
            jQuery('.mean-nav ul > li > a:first-child').on("click", function () {
              jQuery('.mean-nav ul:first').slideUp();
              menuOn = false;
              jQuery($navreveal).toggleClass("meanclose").html(meanMenuOpen);
            });
          }
        } else {
          meanOriginal();
        }
      };

      if (!isMobile) {
        // reset menu on resize above meanScreenWidth
        jQuery(window).resize(function () {
          currentWidth = window.innerWidth || document.documentElement.clientWidth;

          if (currentWidth > meanScreenWidth) {
            meanOriginal();
          } else {
            meanOriginal();
          }

          if (currentWidth <= meanScreenWidth) {
            showMeanMenu();
            meanCentered();
          } else {
            meanOriginal();
          }
        });
      }

      jQuery(window).resize(function () {
        // get browser width
        currentWidth = window.innerWidth || document.documentElement.clientWidth;

        if (!isMobile) {
          meanOriginal();

          if (currentWidth <= meanScreenWidth) {
            showMeanMenu();
            meanCentered();
          }
        } else {
          meanCentered();

          if (currentWidth <= meanScreenWidth) {
            if (meanMenuExist === false) {
              showMeanMenu();
            }
          } else {
            meanOriginal();
          }
        }
      }); // run main menuMenu function on load

      showMeanMenu();
    });
  };
})(jQuery);
/*-------------------------------------------------------------
    03. Scrollup Jquery 
---------------------------------------------------------------*/


!function (l, o, e) {
  "use strict";

  l.fn.scrollUp = function (o) {
    l.data(e.body, "scrollUp") || (l.data(e.body, "scrollUp", !0), l.fn.scrollUp.init(o));
  }, l.fn.scrollUp.init = function (r) {
    var s,
        t,
        c,
        i,
        n,
        a,
        d,
        p = l.fn.scrollUp.settings = l.extend({}, l.fn.scrollUp.defaults, r),
        f = !1;

    switch (d = p.scrollTrigger ? l(p.scrollTrigger) : l("<a/>", {
      id: p.scrollName,
      href: "#top"
    }), p.scrollTitle && d.attr("title", p.scrollTitle), d.appendTo("body"), p.scrollImg || p.scrollTrigger || d.html(p.scrollText), d.css({
      display: "none",
      position: "fixed",
      zIndex: p.zIndex
    }), p.activeOverlay && l("<div/>", {
      id: p.scrollName + "-active"
    }).css({
      position: "absolute",
      top: p.scrollDistance + "px",
      width: "100%",
      borderTop: "1px dotted" + p.activeOverlay,
      zIndex: p.zIndex
    }).appendTo("body"), p.animation) {
      case "fade":
        s = "fadeIn", t = "fadeOut", c = p.animationSpeed;
        break;

      case "slide":
        s = "slideDown", t = "slideUp", c = p.animationSpeed;
        break;

      default:
        s = "show", t = "hide", c = 0;
    }

    i = "top" === p.scrollFrom ? p.scrollDistance : l(e).height() - l(o).height() - p.scrollDistance, n = l(o).scroll(function () {
      l(o).scrollTop() > i ? f || (d[s](c), f = !0) : f && (d[t](c), f = !1);
    }), p.scrollTarget ? "number" == typeof p.scrollTarget ? a = p.scrollTarget : "string" == typeof p.scrollTarget && (a = Math.floor(l(p.scrollTarget).offset().top)) : a = 0, d.click(function (o) {
      o.preventDefault(), l("html, body").animate({
        scrollTop: a
      }, p.scrollSpeed, p.easingType);
    });
  }, l.fn.scrollUp.defaults = {
    scrollName: "scrollUp",
    scrollDistance: 300,
    scrollFrom: "top",
    scrollSpeed: 300,
    easingType: "linear",
    animation: "fade",
    animationSpeed: 200,
    scrollTrigger: !1,
    scrollTarget: !1,
    scrollText: "Scroll to top",
    scrollTitle: !1,
    scrollImg: !1,
    activeOverlay: !1,
    zIndex: 2147483647
  }, l.fn.scrollUp.destroy = function (r) {
    l.removeData(e.body, "scrollUp"), l("#" + l.fn.scrollUp.settings.scrollName).remove(), l("#" + l.fn.scrollUp.settings.scrollName + "-active").remove(), l.fn.jquery.split(".")[1] >= 7 ? l(o).off("scroll", r) : l(o).unbind("scroll", r);
  }, l.scrollUp = l.fn.scrollUp;
}(jQuery, window, document);
/*!
 * headroom.js v0.9.3 - Give your page some headroom. Hide your header until you need it
 * Copyright (c) 2016 Nick Williams - http://wicky.nillia.ms/headroom.js
 * License: MIT
 */

!function (a, b) {
  "use strict";

  "function" == typeof define && define.amd ? define([], b) : "object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) ? module.exports = b() : a.Headroom = b();
}(this, function () {
  "use strict";

  function a(a) {
    this.callback = a, this.ticking = !1;
  }

  function b(a) {
    return a && "undefined" != typeof window && (a === window || a.nodeType);
  }

  function c(a) {
    if (arguments.length <= 0) throw new Error("Missing arguments in extend function");
    var d,
        e,
        f = a || {};

    for (e = 1; e < arguments.length; e++) {
      var g = arguments[e] || {};

      for (d in g) {
        "object" != _typeof(f[d]) || b(f[d]) ? f[d] = f[d] || g[d] : f[d] = c(f[d], g[d]);
      }
    }

    return f;
  }

  function d(a) {
    return a === Object(a) ? a : {
      down: a,
      up: a
    };
  }

  function e(a, b) {
    b = c(b, e.options), this.lastKnownScrollY = 0, this.elem = a, this.tolerance = d(b.tolerance), this.classes = b.classes, this.offset = b.offset, this.scroller = b.scroller, this.initialised = !1, this.onPin = b.onPin, this.onUnpin = b.onUnpin, this.onTop = b.onTop, this.onNotTop = b.onNotTop, this.onBottom = b.onBottom, this.onNotBottom = b.onNotBottom;
  }

  var f = {
    bind: !!function () {}.bind,
    classList: "classList" in document.documentElement,
    rAF: !!(window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame)
  };
  return window.requestAnimationFrame = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame, a.prototype = {
    constructor: a,
    update: function update() {
      this.callback && this.callback(), this.ticking = !1;
    },
    requestTick: function requestTick() {
      this.ticking || (requestAnimationFrame(this.rafCallback || (this.rafCallback = this.update.bind(this))), this.ticking = !0);
    },
    handleEvent: function handleEvent() {
      this.requestTick();
    }
  }, e.prototype = {
    constructor: e,
    init: function init() {
      return e.cutsTheMustard ? (this.debouncer = new a(this.update.bind(this)), this.elem.classList.add(this.classes.initial), setTimeout(this.attachEvent.bind(this), 100), this) : void 0;
    },
    destroy: function destroy() {
      var a = this.classes;
      this.initialised = !1, this.elem.classList.remove(a.unpinned, a.pinned, a.top, a.notTop, a.initial), this.scroller.removeEventListener("scroll", this.debouncer, !1);
    },
    attachEvent: function attachEvent() {
      this.initialised || (this.lastKnownScrollY = this.getScrollY(), this.initialised = !0, this.scroller.addEventListener("scroll", this.debouncer, !1), this.debouncer.handleEvent());
    },
    unpin: function unpin() {
      var a = this.elem.classList,
          b = this.classes;
      !a.contains(b.pinned) && a.contains(b.unpinned) || (a.add(b.unpinned), a.remove(b.pinned), this.onUnpin && this.onUnpin.call(this));
    },
    pin: function pin() {
      var a = this.elem.classList,
          b = this.classes;
      a.contains(b.unpinned) && (a.remove(b.unpinned), a.add(b.pinned), this.onPin && this.onPin.call(this));
    },
    top: function top() {
      var a = this.elem.classList,
          b = this.classes;
      a.contains(b.top) || (a.add(b.top), a.remove(b.notTop), this.onTop && this.onTop.call(this));
    },
    notTop: function notTop() {
      var a = this.elem.classList,
          b = this.classes;
      a.contains(b.notTop) || (a.add(b.notTop), a.remove(b.top), this.onNotTop && this.onNotTop.call(this));
    },
    bottom: function bottom() {
      var a = this.elem.classList,
          b = this.classes;
      a.contains(b.bottom) || (a.add(b.bottom), a.remove(b.notBottom), this.onBottom && this.onBottom.call(this));
    },
    notBottom: function notBottom() {
      var a = this.elem.classList,
          b = this.classes;
      a.contains(b.notBottom) || (a.add(b.notBottom), a.remove(b.bottom), this.onNotBottom && this.onNotBottom.call(this));
    },
    getScrollY: function getScrollY() {
      return void 0 !== this.scroller.pageYOffset ? this.scroller.pageYOffset : void 0 !== this.scroller.scrollTop ? this.scroller.scrollTop : (document.documentElement || document.body.parentNode || document.body).scrollTop;
    },
    getViewportHeight: function getViewportHeight() {
      return window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
    },
    getElementPhysicalHeight: function getElementPhysicalHeight(a) {
      return Math.max(a.offsetHeight, a.clientHeight);
    },
    getScrollerPhysicalHeight: function getScrollerPhysicalHeight() {
      return this.scroller === window || this.scroller === document.body ? this.getViewportHeight() : this.getElementPhysicalHeight(this.scroller);
    },
    getDocumentHeight: function getDocumentHeight() {
      var a = document.body,
          b = document.documentElement;
      return Math.max(a.scrollHeight, b.scrollHeight, a.offsetHeight, b.offsetHeight, a.clientHeight, b.clientHeight);
    },
    getElementHeight: function getElementHeight(a) {
      return Math.max(a.scrollHeight, a.offsetHeight, a.clientHeight);
    },
    getScrollerHeight: function getScrollerHeight() {
      return this.scroller === window || this.scroller === document.body ? this.getDocumentHeight() : this.getElementHeight(this.scroller);
    },
    isOutOfBounds: function isOutOfBounds(a) {
      var b = 0 > a,
          c = a + this.getScrollerPhysicalHeight() > this.getScrollerHeight();
      return b || c;
    },
    toleranceExceeded: function toleranceExceeded(a, b) {
      return Math.abs(a - this.lastKnownScrollY) >= this.tolerance[b];
    },
    shouldUnpin: function shouldUnpin(a, b) {
      var c = a > this.lastKnownScrollY,
          d = a >= this.offset;
      return c && d && b;
    },
    shouldPin: function shouldPin(a, b) {
      var c = a < this.lastKnownScrollY,
          d = a <= this.offset;
      return c && b || d;
    },
    update: function update() {
      var a = this.getScrollY(),
          b = a > this.lastKnownScrollY ? "down" : "up",
          c = this.toleranceExceeded(a, b);
      this.isOutOfBounds(a) || (a <= this.offset ? this.top() : this.notTop(), a + this.getViewportHeight() >= this.getScrollerHeight() ? this.bottom() : this.notBottom(), this.shouldUnpin(a, c) ? this.unpin() : this.shouldPin(a, c) && this.pin(), this.lastKnownScrollY = a);
    }
  }, e.options = {
    tolerance: {
      up: 0,
      down: 0
    },
    offset: 0,
    scroller: window,
    classes: {
      pinned: "headroom--pinned",
      unpinned: "headroom--unpinned",
      top: "headroom--top",
      notTop: "headroom--not-top",
      bottom: "headroom--bottom",
      notBottom: "headroom--not-bottom",
      initial: "headroom"
    }
  }, e.cutsTheMustard = "undefined" != typeof f && f.rAF && f.bind && f.classList, e;
});

(function ($) {
  "use strict";
  /*--------------------------
  2. Newsletter Popup
  ---------------------------*/

  setTimeout(function () {
    $('.popup_wrapper').css({
      "opacity": "1",
      "visibility": "visible"
    });
    $('.popup_off').on('click', function () {
      $(".popup_wrapper").fadeOut(500);
    });
  }, 1000);
  /* jQuery MeanMenu */

  $('#mobile-menu-active').meanmenu({
    meanScreenWidth: "991",
    meanMenuContainer: ".mobile-menu-area .mobile-menu"
  });
  /*====== sidebarCart ======*/

  function sidebarCart() {
    var menuTrigger = $('button.sidebar-trigger'),
        endTrigger = $('button.op-sidebar-close'),
        container = $('.sidebar-cart'),
        wrapper = $('.wrapper');
    wrapper.prepend('<div class="body-overlay"></div>');
    menuTrigger.on('click', function () {
      container.addClass('inside');
      wrapper.addClass('overlay-active');
    });
    endTrigger.on('click', function () {
      container.removeClass('inside');
      wrapper.removeClass('overlay-active');
    });
    $('.body-overlay').on('click', function () {
      container.removeClass('inside');
      wrapper.removeClass('overlay-active');
    });
  }

  ;
  sidebarCart();
  /*====== sidebarSearch ======*/

  function sidebarSearch() {
    var searchTrigger = $('button.sidebar-trigger-search'),
        endTriggersearch = $('button.search-close'),
        container = $('.main-search-active');
    searchTrigger.on('click', function () {
      container.addClass('inside');
    });
    endTriggersearch.on('click', function () {
      container.removeClass('inside');
    });
  }

  ;
  sidebarSearch();
  /*====== sidebarCart ======*/

  function sidebarNav() {
    var navbarTrigger = $('button.header-navbar-active'),
        endTrigger = $('button.op-sidebar-close'),
        container = $('.cur-lang-acc-active'),
        wrapper = $('.wrapper');
    wrapper.prepend('<div class="body-overlay"></div>');
    navbarTrigger.on('click', function () {
      container.addClass('inside');
      wrapper.addClass('overlay-active');
    });
    endTrigger.on('click', function () {
      container.removeClass('inside');
      wrapper.removeClass('overlay-active');
    });
    $('.body-overlay').on('click', function () {
      container.removeClass('inside');
      wrapper.removeClass('overlay-active');
    });
  }

  ;
  sidebarNav();
  /* slider active */

  $('.slider-active').owlCarousel({
    loop: true,
    nav: false,
    autoplay: false,
    autoplayTimeout: 5000,
    animateOut: 'fadeOut',
    animateIn: 'fadeIn',
    item: 1,
    responsive: {
      0: {
        items: 1
      },
      768: {
        items: 1
      },
      1000: {
        items: 1
      }
    }
  });
  /* testimonial active */

  $('.testimonial-active').owlCarousel({
    loop: true,
    autoplay: true,
    autoplayTimeout: 5000,
    nav: false,
    item: 1,
    responsive: {
      0: {
        items: 1
      },
      768: {
        items: 1
      },
      1000: {
        items: 1
      }
    }
  });
  /* brand logo active */

  $('.brand-logo-active').owlCarousel({
    loop: true,
    nav: false,
    item: 5,
    responsive: {
      0: {
        items: 1
      },
      480: {
        items: 2
      },
      768: {
        items: 3
      },
      1000: {
        items: 4
      },
      1200: {
        items: 4
      },
      1300: {
        items: 5
      }
    }
  });
  /* product slider active */

  $('.product-slider-active').owlCarousel({
    loop: true,
    nav: false,
    item: 4,
    responsive: {
      0: {
        items: 1
      },
      768: {
        items: 2
      },
      1000: {
        items: 3
      },
      1200: {
        items: 4
      }
    }
  });
  /* new collection slider active */

  $('.new-collection-slider').owlCarousel({
    loop: true,
    nav: false,
    item: 4,
    responsive: {
      0: {
        items: 1
      },
      768: {
        items: 2
      },
      1000: {
        items: 3
      },
      1200: {
        items: 4
      }
    }
  });
  /*----------------------------
  	Cart Plus Minus Button
  ------------------------------ */

  $(".cart-plus-minus").prepend('<div class="dec qtybutton">-</div>');
  $(".cart-plus-minus").append('<div class="inc qtybutton">+</div>');
  $(".qtybutton").on("click", function () {
    var $button = $(this);
    var oldValue = $button.parent().find("input").val();

    if ($button.text() == "+") {
      var newVal = parseFloat(oldValue) + 1;
    } else {
      // Don't allow decrementing below zero
      if (oldValue > 0) {
        var newVal = parseFloat(oldValue) - 1;
      } else {
        newVal = 1;
      }
    }

    $button.parent().find("input").val(newVal);
  });
  /*--
  Smooth Scroll
  -----------------------------------*/

  $('.scroll-top').on('click', function (e) {
    e.preventDefault();
    var link = this;
    $.smoothScroll({
      offset: -80,
      scrollTarget: link.hash
    });
  });
  /*---------------------
      countdown
    --------------------- */

  $('[data-countdown]').each(function () {
    var $this = $(this),
        finalDate = $(this).data('countdown');
    $this.countdown(finalDate, function (event) {
      $this.html(event.strftime('<span class="cdown day">%-D <p>Days</p></span> <span class="cdown hour">%-H <p>Hour</p></span> <span class="cdown minutes">%M <p>Min</p></span class="cdown second"> <span>%S <p>Sec</p></span>'));
    });
  });
  /* magnificPopup video popup */

  $('.video-popup').magnificPopup({
    type: 'iframe'
  });
  /*---------------------
  price slider
  --------------------- */

  var sliderrange = $('#slider-range');
  var amountprice = $('#amount');
  $(function () {
    sliderrange.slider({
      range: true,
      min: 20,
      max: 100,
      values: [0, 100],
      slide: function slide(event, ui) {
        amountprice.val("$" + ui.values[0] + " - $" + ui.values[1]);
      }
    });
    amountprice.val("$" + sliderrange.slider("values", 0) + " - $" + sliderrange.slider("values", 1));
  }); // Instantiate EasyZoom instances

  var $easyzoom = $('.easyzoom').easyZoom();
  /*---------------------
  sidebar sticky
  --------------------- */

  $('.sidebar-active').stickySidebar({
    topSpacing: 80,
    bottomSpacing: 30,
    minWidth: 991
  });
  $('.sidebar-active1').stickySidebar({
    topSpacing: 80,
    bottomSpacing: 30,
    minWidth: 991
  });
  $('.sidebar-active3').stickySidebar({
    topSpacing: 80,
    bottomSpacing: 30,
    minWidth: 991
  });
  /*---------------------
      filter active
  --------------------- */

  function singleProductFilter() {
    var trigger = $('.shop-filter-active'),
        container = $('.shop-filters-left'),
        container2 = $('.shop-filters-right');
    trigger.on('click', function (e) {
      e.preventDefault();
      container.toggleClass('is-visible');
      container2.toggleClass('is-visible');
    });
  }

  singleProductFilter();
  /*--- showlogin toggle function ----*/

  $('#showlogin').on('click', function () {
    $('#checkout-login').slideToggle(900);
  });
  /*--- showlogin toggle function ----*/

  $('#showcoupon').on('click', function () {
    $('#checkout_coupon').slideToggle(900);
  });
  /*--- showlogin toggle function ----*/

  $('#ship-box').on('click', function () {
    $('#ship-box-info').slideToggle(1000);
  });
  /*--- clickable menu active ----*/

  var slinky = $('#menu').slinky();
  /*====== sidebarCart ======*/

  function sidebarMainmenu() {
    var menuTrigger = $('.clickable-mainmenu-active'),
        endTrigger = $('button.clickable-mainmenu-close'),
        container = $('.clickable-mainmenu');
    menuTrigger.on('click', function (e) {
      e.preventDefault();
      container.addClass('inside');
    });
    endTrigger.on('click', function () {
      container.removeClass('inside');
    });
  }

  ;
  sidebarMainmenu();
  /*--------------------------
   ScrollUp
  ---------------------------- */

  $.scrollUp({
    scrollText: '<i class="ion-arrow-up-c"></i>',
    easingType: 'linear',
    scrollSpeed: 900,
    animation: 'fade'
  });
  /*--------------------------
       Instagram
  ---------------------------- */

  if ($('#Instafeed').length) {
    var feed = new Instafeed({
      get: 'user',
      userId: 6665768655,
      accessToken: '6665768655.1677ed0.313e6c96807c45d8900b4f680650dee5',
      target: 'Instafeed',
      resolution: 'thumbnail',
      limit: 6,
      template: '<li><a href="{{link}}" target="_new"><img src="{{image}}" /></a></li>'
    });
    feed.run();
  }
})(jQuery);
