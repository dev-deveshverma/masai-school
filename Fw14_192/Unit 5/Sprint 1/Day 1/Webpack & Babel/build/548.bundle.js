"use strict";
(self.webpackChunkwebpack = self.webpackChunkwebpack || []).push([
  [548],
  {
    424: (n, r, e) => {
      e.d(r, { Z: () => c });
      var t = e(81),
        o = e.n(t),
        a = e(645),
        i = e.n(a)()(o());
      i.push([
        n.id,
        " h1{\r\n     text-align: center;\r\n     background-color: bisque;\r\n     color:  red;\r\n }\r\nform{\r\n    font-size: 20px;\r\n    margin-bottom: 20px;\r\n}\r\nth{\r\n    border:  2px solid red;\r\n    font-size: 20px;\r\n    \r\n    padding: 10px;\r\n   \r\n}\r\ntr{\r\n    font-size: 20px;\r\n}\r\ntd{\r\n   border: 2px solid rgb(1, 7, 6); \r\n   margin: auto;\r\n   cursor: pointer;\r\n    \r\n}\r\n.data{\r\n    display: flex;\r\n    justify-content: space-around;\r\n     \r\n}\r\nform{\r\n   \r\n   width: 25%; \r\n\r\n}\r\ninput,select{\r\n    width: 90%;\r\n    height: 35px;\r\n    margin-bottom: 20px;\r\n}\r\ntable{\r\n    display: block;\r\n    border-collapse: collapse;\r\n    \r\n}\r\nimg{\r\n     height: 200px;\r\n     width: 99.5%;\r\n      \r\n }",
        "",
      ]);
      const c = i;
    },
    645: (n) => {
      n.exports = function (n) {
        var r = [];
        return (
          (r.toString = function () {
            return this.map(function (r) {
              var e = "",
                t = void 0 !== r[5];
              return (
                r[4] && (e += "@supports (".concat(r[4], ") {")),
                r[2] && (e += "@media ".concat(r[2], " {")),
                t &&
                  (e += "@layer".concat(
                    r[5].length > 0 ? " ".concat(r[5]) : "",
                    " {"
                  )),
                (e += n(r)),
                t && (e += "}"),
                r[2] && (e += "}"),
                r[4] && (e += "}"),
                e
              );
            }).join("");
          }),
          (r.i = function (n, e, t, o, a) {
            "string" == typeof n && (n = [[null, n, void 0]]);
            var i = {};
            if (t)
              for (var c = 0; c < this.length; c++) {
                var s = this[c][0];
                null != s && (i[s] = !0);
              }
            for (var u = 0; u < n.length; u++) {
              var p = [].concat(n[u]);
              (t && i[p[0]]) ||
                (void 0 !== a &&
                  (void 0 === p[5] ||
                    (p[1] = "@layer"
                      .concat(p[5].length > 0 ? " ".concat(p[5]) : "", " {")
                      .concat(p[1], "}")),
                  (p[5] = a)),
                e &&
                  (p[2]
                    ? ((p[1] = "@media ".concat(p[2], " {").concat(p[1], "}")),
                      (p[2] = e))
                    : (p[2] = e)),
                o &&
                  (p[4]
                    ? ((p[1] = "@supports ("
                        .concat(p[4], ") {")
                        .concat(p[1], "}")),
                      (p[4] = o))
                    : (p[4] = "".concat(o))),
                r.push(p));
            }
          }),
          r
        );
      };
    },
    81: (n) => {
      n.exports = function (n) {
        return n[1];
      };
    },
    548: (n, r, e) => {
      e.r(r), e.d(r, { default: () => b });
      var t = e(379),
        o = e.n(t),
        a = e(795),
        i = e.n(a),
        c = e(569),
        s = e.n(c),
        u = e(565),
        p = e.n(u),
        l = e(216),
        d = e.n(l),
        f = e(589),
        h = e.n(f),
        v = e(424),
        m = {};
      (m.styleTagTransform = h()),
        (m.setAttributes = p()),
        (m.insert = s().bind(null, "head")),
        (m.domAPI = i()),
        (m.insertStyleElement = d()),
        o()(v.Z, m);
      const b = v.Z && v.Z.locals ? v.Z.locals : void 0;
    },
    379: (n) => {
      var r = [];
      function e(n) {
        for (var e = -1, t = 0; t < r.length; t++)
          if (r[t].identifier === n) {
            e = t;
            break;
          }
        return e;
      }
      function t(n, t) {
        for (var a = {}, i = [], c = 0; c < n.length; c++) {
          var s = n[c],
            u = t.base ? s[0] + t.base : s[0],
            p = a[u] || 0,
            l = "".concat(u, " ").concat(p);
          a[u] = p + 1;
          var d = e(l),
            f = {
              css: s[1],
              media: s[2],
              sourceMap: s[3],
              supports: s[4],
              layer: s[5],
            };
          if (-1 !== d) r[d].references++, r[d].updater(f);
          else {
            var h = o(f, t);
            (t.byIndex = c),
              r.splice(c, 0, { identifier: l, updater: h, references: 1 });
          }
          i.push(l);
        }
        return i;
      }
      function o(n, r) {
        var e = r.domAPI(r);
        return (
          e.update(n),
          function (r) {
            if (r) {
              if (
                r.css === n.css &&
                r.media === n.media &&
                r.sourceMap === n.sourceMap &&
                r.supports === n.supports &&
                r.layer === n.layer
              )
                return;
              e.update((n = r));
            } else e.remove();
          }
        );
      }
      n.exports = function (n, o) {
        var a = t((n = n || []), (o = o || {}));
        return function (n) {
          n = n || [];
          for (var i = 0; i < a.length; i++) {
            var c = e(a[i]);
            r[c].references--;
          }
          for (var s = t(n, o), u = 0; u < a.length; u++) {
            var p = e(a[u]);
            0 === r[p].references && (r[p].updater(), r.splice(p, 1));
          }
          a = s;
        };
      };
    },
    569: (n) => {
      var r = {};
      n.exports = function (n, e) {
        var t = (function (n) {
          if (void 0 === r[n]) {
            var e = document.querySelector(n);
            if (
              window.HTMLIFrameElement &&
              e instanceof window.HTMLIFrameElement
            )
              try {
                e = e.contentDocument.head;
              } catch (n) {
                e = null;
              }
            r[n] = e;
          }
          return r[n];
        })(n);
        if (!t)
          throw new Error(
            "Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid."
          );
        t.appendChild(e);
      };
    },
    216: (n) => {
      n.exports = function (n) {
        var r = document.createElement("style");
        return n.setAttributes(r, n.attributes), n.insert(r, n.options), r;
      };
    },
    565: (n, r, e) => {
      n.exports = function (n) {
        var r = e.nc;
        r && n.setAttribute("nonce", r);
      };
    },
    795: (n) => {
      n.exports = function (n) {
        var r = n.insertStyleElement(n);
        return {
          update: function (e) {
            !(function (n, r, e) {
              var t = "";
              e.supports && (t += "@supports (".concat(e.supports, ") {")),
                e.media && (t += "@media ".concat(e.media, " {"));
              var o = void 0 !== e.layer;
              o &&
                (t += "@layer".concat(
                  e.layer.length > 0 ? " ".concat(e.layer) : "",
                  " {"
                )),
                (t += e.css),
                o && (t += "}"),
                e.media && (t += "}"),
                e.supports && (t += "}");
              var a = e.sourceMap;
              a &&
                "undefined" != typeof btoa &&
                (t +=
                  "\n/*# sourceMappingURL=data:application/json;base64,".concat(
                    btoa(unescape(encodeURIComponent(JSON.stringify(a)))),
                    " */"
                  )),
                r.styleTagTransform(t, n, r.options);
            })(r, n, e);
          },
          remove: function () {
            !(function (n) {
              if (null === n.parentNode) return !1;
              n.parentNode.removeChild(n);
            })(r);
          },
        };
      };
    },
    589: (n) => {
      n.exports = function (n, r) {
        if (r.styleSheet) r.styleSheet.cssText = n;
        else {
          for (; r.firstChild; ) r.removeChild(r.firstChild);
          r.appendChild(document.createTextNode(n));
        }
      };
    },
  },
]);
