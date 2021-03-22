/*! modernizr 3.11.4 (Custom Build) | MIT *
 * https://modernizr.com/download/?-addtest-atrule-domprefixes-hasevent-mq-prefixed-prefixedcss-prefixedcssvalue-prefixes-printshiv-setclasses-testallprops-testprop-teststyles !*/
!(function (e, t, n, r) {
  function o(e, t) {
    return typeof e === t;
  }
  function i(e) {
    var t = _.className,
      n = Modernizr._config.classPrefix || "";
    if ((x && (t = t.baseVal), Modernizr._config.enableJSClass)) {
      var r = new RegExp("(^|\\s)" + n + "no-js(\\s|$)");
      t = t.replace(r, "$1" + n + "js$2");
    }
    Modernizr._config.enableClasses &&
      (e.length > 0 && (t += " " + n + e.join(" " + n)),
        x ? (_.className.baseVal = t) : (_.className = t));
  }
  function a(e, t) {
    if ("object" == typeof e) for (var n in e) j(e, n) && a(n, e[n]);
    else {
      e = e.toLowerCase();
      var r = e.split("."),
        o = Modernizr[r[0]];
      if ((2 === r.length && (o = o[r[1]]), void 0 !== o)) return Modernizr;
      (t = "function" == typeof t ? t() : t),
        1 === r.length
          ? (Modernizr[r[0]] = t)
          : (!Modernizr[r[0]] ||
            Modernizr[r[0]] instanceof Boolean ||
            (Modernizr[r[0]] = new Boolean(Modernizr[r[0]])),
            (Modernizr[r[0]][r[1]] = t)),
        i([(t && !1 !== t ? "" : "no-") + r.join("-")]),
        Modernizr._trigger(e, t);
    }
    return Modernizr;
  }
  function s() {
    return "function" != typeof n.createElement
      ? n.createElement(arguments[0])
      : x
        ? n.createElementNS.call(n, "http://www.w3.org/2000/svg", arguments[0])
        : n.createElement.apply(n, arguments);
  }
  function l() {
    var e = n.body;
    return e || ((e = s(x ? "svg" : "body")), (e.fake = !0)), e;
  }
  function u(e, t, r, o) {
    var i,
      a,
      u,
      c,
      f = "modernizr",
      d = s("div"),
      p = l();
    if (parseInt(r, 10))
      for (; r--;)
        (u = s("div")), (u.id = o ? o[r] : f + (r + 1)), d.appendChild(u);
    return (
      (i = s("style")),
      (i.type = "text/css"),
      (i.id = "s" + f),
      (p.fake ? p : d).appendChild(i),
      p.appendChild(d),
      i.styleSheet
        ? (i.styleSheet.cssText = e)
        : i.appendChild(n.createTextNode(e)),
      (d.id = f),
      p.fake &&
      ((p.style.background = ""),
        (p.style.overflow = "hidden"),
        (c = _.style.overflow),
        (_.style.overflow = "hidden"),
        _.appendChild(p)),
      (a = t(d, e)),
      p.fake
        ? (p.parentNode.removeChild(p), (_.style.overflow = c), _.offsetHeight)
        : d.parentNode.removeChild(d),
      !!a
    );
  }
  function c(e, n, r) {
    var o;
    if ("getComputedStyle" in t) {
      o = getComputedStyle.call(t, e, n);
      var i = t.console;
      if (null !== o) r && (o = o.getPropertyValue(r));
      else if (i) {
        var a = i.error ? "error" : "log";
        i[a].call(
          i,
          "getComputedStyle returning null, its possible modernizr test results are inaccurate"
        );
      }
    } else o = !n && e.currentStyle && e.currentStyle[r];
    return o;
  }
  function f(e, t) {
    return !!~("" + e).indexOf(t);
  }
  function d(e) {
    return e
      .replace(/([A-Z])/g, function (e, t) {
        return "-" + t.toLowerCase();
      })
      .replace(/^ms-/, "-ms-");
  }
  function p(e, n) {
    var o = e.length;
    if ("CSS" in t && "supports" in t.CSS) {
      for (; o--;) if (t.CSS.supports(d(e[o]), n)) return !0;
      return !1;
    }
    if ("CSSSupportsRule" in t) {
      for (var i = []; o--;) i.push("(" + d(e[o]) + ":" + n + ")");
      return (
        (i = i.join(" or ")),
        u(
          "@supports (" + i + ") { #modernizr { position: absolute; } }",
          function (e) {
            return "absolute" === c(e, null, "position");
          }
        )
      );
    }
    return r;
  }
  function m(e) {
    return e
      .replace(/([a-z])-([a-z])/g, function (e, t, n) {
        return t + n.toUpperCase();
      })
      .replace(/^-/, "");
  }
  function h(e, t, n, i) {
    function a() {
      u && (delete M.style, delete M.modElem);
    }
    if (((i = !o(i, "undefined") && i), !o(n, "undefined"))) {
      var l = p(e, n);
      if (!o(l, "undefined")) return l;
    }
    for (
      var u, c, d, h, v, g = ["modernizr", "tspan", "samp"];
      !M.style && g.length;

    )
      (u = !0), (M.modElem = s(g.shift())), (M.style = M.modElem.style);
    for (d = e.length, c = 0; c < d; c++)
      if (
        ((h = e[c]),
          (v = M.style[h]),
          f(h, "-") && (h = m(h)),
          M.style[h] !== r)
      ) {
        if (i || o(n, "undefined")) return a(), "pfx" !== t || h;
        try {
          M.style[h] = n;
        } catch (e) { }
        if (M.style[h] !== v) return a(), "pfx" !== t || h;
      }
    return a(), !1;
  }
  function v(e, t) {
    return function () {
      return e.apply(t, arguments);
    };
  }
  function g(e, t, n) {
    var r;
    for (var i in e)
      if (e[i] in t)
        return !1 === n
          ? e[i]
          : ((r = t[e[i]]), o(r, "function") ? v(r, n || t) : r);
    return !1;
  }
  function y(e, t, n, r, i) {
    var a = e.charAt(0).toUpperCase() + e.slice(1),
      s = (e + " " + P.join(a + " ") + a).split(" ");
    return o(t, "string") || o(t, "undefined")
      ? h(s, t, r, i)
      : ((s = (e + " " + N.join(a + " ") + a).split(" ")), g(s, t, n));
  }
  function S(e, t, n) {
    return y(e, r, r, t, n);
  }
  var E = [],
    C = {
      _version: "3.11.4",
      _config: {
        classPrefix: "",
        enableClasses: !0,
        enableJSClass: !0,
        usePrefixes: !0,
      },
      _q: [],
      on: function (e, t) {
        var n = this;
        setTimeout(function () {
          t(n[e]);
        }, 0);
      },
      addTest: function (e, t, n) {
        E.push({ name: e, fn: t, options: n });
      },
      addAsyncTest: function (e) {
        E.push({ name: null, fn: e });
      },
    },
    Modernizr = function () { };
  (Modernizr.prototype = C), (Modernizr = new Modernizr());
  var b = [],
    _ = n.documentElement,
    x = "svg" === _.nodeName.toLowerCase(),
    w = "Moz O ms Webkit",
    N = C._config.usePrefixes ? w.toLowerCase().split(" ") : [];
  C._domPrefixes = N;
  var T = C._config.usePrefixes
    ? " -webkit- -moz- -o- -ms- ".split(" ")
    : ["", ""];
  C._prefixes = T;
  var j;
  !(function () {
    var e = {}.hasOwnProperty;
    j =
      o(e, "undefined") || o(e.call, "undefined")
        ? function (e, t) {
          return t in e && o(e.constructor.prototype[t], "undefined");
        }
        : function (t, n) {
          return e.call(t, n);
        };
  })(),
    (C._l = {}),
    (C.on = function (e, t) {
      this._l[e] || (this._l[e] = []),
        this._l[e].push(t),
        Modernizr.hasOwnProperty(e) &&
        setTimeout(function () {
          Modernizr._trigger(e, Modernizr[e]);
        }, 0);
    }),
    (C._trigger = function (e, t) {
      if (this._l[e]) {
        var n = this._l[e];
        setTimeout(function () {
          var e;
          for (e = 0; e < n.length; e++) (0, n[e])(t);
        }, 0),
          delete this._l[e];
      }
    }),
    Modernizr._q.push(function () {
      C.addTest = a;
    });
  var P = C._config.usePrefixes ? w.split(" ") : [];
  C._cssomPrefixes = P;
  var z = function (e) {
    var n,
      o = T.length,
      i = t.CSSRule;
    if (void 0 === i) return r;
    if (!e) return !1;
    if (
      ((e = e.replace(/^@/, "")),
        (n = e.replace(/-/g, "_").toUpperCase() + "_RULE") in i)
    )
      return "@" + e;
    for (var a = 0; a < o; a++) {
      var s = T[a];
      if (s.toUpperCase() + "_" + n in i)
        return "@-" + s.toLowerCase() + "-" + e;
    }
    return !1;
  };
  C.atRule = z;
  var k = (function () {
    function e(e, n) {
      var o;
      return (
        !!e &&
        ((n && "string" != typeof n) || (n = s(n || "div")),
          (e = "on" + e),
          (o = e in n),
          !o &&
          t &&
          (n.setAttribute || (n = s("div")),
            n.setAttribute(e, ""),
            (o = "function" == typeof n[e]),
            n[e] !== r && (n[e] = r),
            n.removeAttribute(e)),
          o)
      );
    }
    var t = !("onblur" in _);
    return e;
  })();
  C.hasEvent = k;
  var A = (function () {
    var e = t.matchMedia || t.msMatchMedia;
    return e
      ? function (t) {
        var n = e(t);
        return (n && n.matches) || !1;
      }
      : function (e) {
        var t = !1;
        return (
          u(
            "@media " + e + " { #modernizr { position: absolute; } }",
            function (e) {
              t = "absolute" === c(e, null, "position");
            }
          ),
          t
        );
      };
  })();
  C.mq = A;
  var F = { elem: s("modernizr") };
  Modernizr._q.push(function () {
    delete F.elem;
  });
  var M = { style: F.elem.style };
  Modernizr._q.unshift(function () {
    delete M.style;
  }),
    (C.testAllProps = y);
  var L = (C.prefixed = function (e, t, n) {
    return 0 === e.indexOf("@")
      ? z(e)
      : (-1 !== e.indexOf("-") && (e = m(e)), t ? y(e, t, n) : y(e, "pfx"));
  }),
    $ =
      ((C.prefixedCSS = function (e) {
        var t = L(e);
        return t && d(t);
      }),
        function (e, t) {
          var n = !1,
            r = s("div"),
            o = r.style;
          if (e in o) {
            var i = N.length;
            for (o[e] = t, n = o[e]; i-- && !n;)
              (o[e] = "-" + N[i] + "-" + t), (n = o[e]);
          }
          return "" === n && (n = !1), n;
        });
  (C.prefixedCSSValue = $), (C.testAllProps = S);
  (C.testProp = function (e, t, n) {
    return h([e], r, t, n);
  }),
    (C.testStyles = u);
  x ||
    (function (e, t) {
      function n(e, t) {
        var n = e.createElement("p"),
          r = e.getElementsByTagName("head")[0] || e.documentElement;
        return (
          (n.innerHTML = "x<style>" + t + "</style>"),
          r.insertBefore(n.lastChild, r.firstChild)
        );
      }
      function r() {
        var e = _.elements;
        return "string" == typeof e ? e.split(" ") : e;
      }
      function o(e, t) {
        var n = _.elements;
        "string" != typeof n && (n = n.join(" ")),
          "string" != typeof e && (e = e.join(" ")),
          (_.elements = n + " " + e),
          u(t);
      }
      function i(e) {
        var t = b[e[E]];
        return t || ((t = {}), C++, (e[E] = C), (b[C] = t)), t;
      }
      function a(e, n, r) {
        if ((n || (n = t), v)) return n.createElement(e);
        r || (r = i(n));
        var o;
        return (
          (o = r.cache[e]
            ? r.cache[e].cloneNode()
            : S.test(e)
              ? (r.cache[e] = r.createElem(e)).cloneNode()
              : r.createElem(e)),
          !o.canHaveChildren || y.test(e) || o.tagUrn
            ? o
            : r.frag.appendChild(o)
        );
      }
      function s(e, n) {
        if ((e || (e = t), v)) return e.createDocumentFragment();
        n = n || i(e);
        for (
          var o = n.frag.cloneNode(), a = 0, s = r(), l = s.length;
          a < l;
          a++
        )
          o.createElement(s[a]);
        return o;
      }
      function l(e, t) {
        t.cache ||
          ((t.cache = {}),
            (t.createElem = e.createElement),
            (t.createFrag = e.createDocumentFragment),
            (t.frag = t.createFrag())),
          (e.createElement = function (n) {
            return _.shivMethods ? a(n, e, t) : t.createElem(n);
          }),
          (e.createDocumentFragment = Function(
            "h,f",
            "return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&(" +
            r()
              .join()
              .replace(/[\w\-:]+/g, function (e) {
                return (
                  t.createElem(e), t.frag.createElement(e), 'c("' + e + '")'
                );
              }) +
            ");return n}"
          )(_, t.frag));
      }
      function u(e) {
        e || (e = t);
        var r = i(e);
        return (
          !_.shivCSS ||
          h ||
          r.hasCSS ||
          (r.hasCSS = !!n(
            e,
            "article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}"
          )),
          v || l(e, r),
          e
        );
      }
      function c(e) {
        for (
          var t,
          n = e.getElementsByTagName("*"),
          o = n.length,
          i = RegExp("^(?:" + r().join("|") + ")$", "i"),
          a = [];
          o--;

        )
          (t = n[o]), i.test(t.nodeName) && a.push(t.applyElement(f(t)));
        return a;
      }
      function f(e) {
        for (
          var t,
          n = e.attributes,
          r = n.length,
          o = e.ownerDocument.createElement(w + ":" + e.nodeName);
          r--;

        )
          (t = n[r]), t.specified && o.setAttribute(t.nodeName, t.nodeValue);
        return (o.style.cssText = e.style.cssText), o;
      }
      function d(e) {
        for (
          var t,
          n = e.split("{"),
          o = n.length,
          i = RegExp(
            "(^|[\\s,>+~])(" + r().join("|") + ")(?=[[\\s,>+~#.:]|$)",
            "gi"
          ),
          a = "$1" + w + "\\:$2";
          o--;

        )
          (t = n[o] = n[o].split("}")),
            (t[t.length - 1] = t[t.length - 1].replace(i, a)),
            (n[o] = t.join("}"));
        return n.join("{");
      }
      function p(e) {
        for (var t = e.length; t--;) e[t].removeNode();
      }
      function m(e) {
        function t() {
          clearTimeout(a._removeSheetTimer), r && r.removeNode(!0), (r = null);
        }
        var r,
          o,
          a = i(e),
          s = e.namespaces,
          l = e.parentWindow;
        return !N || e.printShived
          ? e
          : (void 0 === s[w] && s.add(w),
            l.attachEvent("onbeforeprint", function () {
              t();
              for (
                var i,
                a,
                s,
                l = e.styleSheets,
                u = [],
                f = l.length,
                p = Array(f);
                f--;

              )
                p[f] = l[f];
              for (; (s = p.pop());)
                if (!s.disabled && x.test(s.media)) {
                  try {
                    (i = s.imports), (a = i.length);
                  } catch (e) {
                    a = 0;
                  }
                  for (f = 0; f < a; f++) p.push(i[f]);
                  try {
                    u.push(s.cssText);
                  } catch (e) { }
                }
              (u = d(u.reverse().join(""))), (o = c(e)), (r = n(e, u));
            }),
            l.attachEvent("onafterprint", function () {
              p(o),
                clearTimeout(a._removeSheetTimer),
                (a._removeSheetTimer = setTimeout(t, 500));
            }),
            (e.printShived = !0),
            e);
      }
      var h,
        v,
        g = e.html5 || {},
        y = /^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,
        S = /^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,
        E = "_html5shiv",
        C = 0,
        b = {};
      !(function () {
        try {
          var e = t.createElement("a");
          (e.innerHTML = "<xyz></xyz>"),
            (h = "hidden" in e),
            (v =
              1 == e.childNodes.length ||
              (function () {
                t.createElement("a");
                var e = t.createDocumentFragment();
                return (
                  void 0 === e.cloneNode ||
                  void 0 === e.createDocumentFragment ||
                  void 0 === e.createElement
                );
              })());
        } catch (e) {
          (h = !0), (v = !0);
        }
      })();
      var _ = {
        elements:
          g.elements ||
          "abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output picture progress section summary template time video",
        version: "3.7.3",
        shivCSS: !1 !== g.shivCSS,
        supportsUnknownElements: v,
        shivMethods: !1 !== g.shivMethods,
        type: "default",
        shivDocument: u,
        createElement: a,
        createDocumentFragment: s,
        addElements: o,
      };
      (e.html5 = _), u(t);
      var x = /^$|\b(?:all|print)\b/,
        w = "html5shiv",
        N =
          !v &&
          (function () {
            var n = t.documentElement;
            return !(
              void 0 === t.namespaces ||
              void 0 === t.parentWindow ||
              void 0 === n.applyElement ||
              void 0 === n.removeNode ||
              void 0 === e.attachEvent
            );
          })();
      (_.type += " print"),
        (_.shivPrint = m),
        m(t),
        "object" == typeof module && module.exports && (module.exports = _);
    })(void 0 !== t ? t : this, n),
    (function () {
      var e, t, n, r, i, a, s;
      for (var l in E)
        if (E.hasOwnProperty(l)) {
          if (
            ((e = []),
              (t = E[l]),
              t.name &&
              (e.push(t.name.toLowerCase()),
                t.options && t.options.aliases && t.options.aliases.length))
          )
            for (n = 0; n < t.options.aliases.length; n++)
              e.push(t.options.aliases[n].toLowerCase());
          for (
            r = o(t.fn, "function") ? t.fn() : t.fn, i = 0;
            i < e.length;
            i++
          )
            (a = e[i]),
              (s = a.split(".")),
              1 === s.length
                ? (Modernizr[s[0]] = r)
                : ((Modernizr[s[0]] &&
                  (!Modernizr[s[0]] || Modernizr[s[0]] instanceof Boolean)) ||
                  (Modernizr[s[0]] = new Boolean(Modernizr[s[0]])),
                  (Modernizr[s[0]][s[1]] = r)),
              b.push((r ? "" : "no-") + s.join("-"));
        }
    })(),
    i(b),
    delete C.addTest,
    delete C.addAsyncTest;
  for (var q = 0; q < Modernizr._q.length; q++) Modernizr._q[q]();
  e.Modernizr = Modernizr;
})(window, window, document);
