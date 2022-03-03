(() => {
  "use strict";
  var e,
    t,
    r = {},
    o = {};
  function n(e) {
    var t = o[e];
    if (void 0 !== t) return t.exports;
    var a = (o[e] = { id: e, exports: {} });
    return r[e](a, a.exports, n), a.exports;
  }
  (n.m = r),
    (n.n = (e) => {
      var t = e && e.__esModule ? () => e.default : () => e;
      return n.d(t, { a: t }), t;
    }),
    (n.d = (e, t) => {
      for (var r in t)
        n.o(t, r) &&
          !n.o(e, r) &&
          Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
    }),
    (n.f = {}),
    (n.e = (e) =>
      Promise.all(Object.keys(n.f).reduce((t, r) => (n.f[r](e, t), t), []))),
    (n.u = (e) => e + ".bundle.js"),
    (n.g = (function () {
      if ("object" == typeof globalThis) return globalThis;
      try {
        return this || new Function("return this")();
      } catch (e) {
        if ("object" == typeof window) return window;
      }
    })()),
    (n.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
    (e = {}),
    (t = "webpack:"),
    (n.l = (r, o, a, c) => {
      if (e[r]) e[r].push(o);
      else {
        var i, l;
        if (void 0 !== a)
          for (
            var u = document.getElementsByTagName("script"), d = 0;
            d < u.length;
            d++
          ) {
            var s = u[d];
            if (
              s.getAttribute("src") == r ||
              s.getAttribute("data-webpack") == t + a
            ) {
              i = s;
              break;
            }
          }
        i ||
          ((l = !0),
          ((i = document.createElement("script")).charset = "utf-8"),
          (i.timeout = 120),
          n.nc && i.setAttribute("nonce", n.nc),
          i.setAttribute("data-webpack", t + a),
          (i.src = r)),
          (e[r] = [o]);
        var p = (t, o) => {
            (i.onerror = i.onload = null), clearTimeout(m);
            var n = e[r];
            if (
              (delete e[r],
              i.parentNode && i.parentNode.removeChild(i),
              n && n.forEach((e) => e(o)),
              t)
            )
              return t(o);
          },
          m = setTimeout(
            p.bind(null, void 0, { type: "timeout", target: i }),
            12e4
          );
        (i.onerror = p.bind(null, i.onerror)),
          (i.onload = p.bind(null, i.onload)),
          l && document.head.appendChild(i);
      }
    }),
    (n.r = (e) => {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (() => {
      var e;
      n.g.importScripts && (e = n.g.location + "");
      var t = n.g.document;
      if (!e && t && (t.currentScript && (e = t.currentScript.src), !e)) {
        var r = t.getElementsByTagName("script");
        r.length && (e = r[r.length - 1].src);
      }
      if (!e)
        throw new Error(
          "Automatic publicPath is not supported in this browser"
        );
      (e = e
        .replace(/#.*$/, "")
        .replace(/\?.*$/, "")
        .replace(/\/[^\/]+$/, "/")),
        (n.p = e);
    })(),
    (() => {
      var e = { 179: 0 };
      n.f.j = (t, r) => {
        var o = n.o(e, t) ? e[t] : void 0;
        if (0 !== o)
          if (o) r.push(o[2]);
          else {
            var a = new Promise((r, n) => (o = e[t] = [r, n]));
            r.push((o[2] = a));
            var c = n.p + n.u(t),
              i = new Error();
            n.l(
              c,
              (r) => {
                if (n.o(e, t) && (0 !== (o = e[t]) && (e[t] = void 0), o)) {
                  var a = r && ("load" === r.type ? "missing" : r.type),
                    c = r && r.target && r.target.src;
                  (i.message =
                    "Loading chunk " + t + " failed.\n(" + a + ": " + c + ")"),
                    (i.name = "ChunkLoadError"),
                    (i.type = a),
                    (i.request = c),
                    o[1](i);
                }
              },
              "chunk-" + t,
              t
            );
          }
      };
      var t = (t, r) => {
          var o,
            a,
            [c, i, l] = r,
            u = 0;
          if (c.some((t) => 0 !== e[t])) {
            for (o in i) n.o(i, o) && (n.m[o] = i[o]);
            l && l(n);
          }
          for (t && t(r); u < c.length; u++)
            (a = c[u]), n.o(e, a) && e[a] && e[a][0](), (e[a] = 0);
        },
        r = (self.webpackChunkwebpack = self.webpackChunkwebpack || []);
      r.forEach(t.bind(null, 0)), (r.push = t.bind(null, r.push.bind(r)));
    })();
  const a = n.p + "85e6c64e31b1761e7f88a60b9ab39cf6.jpg";
  n.e(548).then(n.bind(n, 548)), console.log(a);
  const c = document.createElement("img");
  (c.src = a),
    document.getElementById("root").append(c),
    document.querySelector("#myForm").addEventListener("submit", function (e) {
      e.preventDefault();
      var t = document.querySelector("#name").value,
        r = document.querySelector("#qty").value,
        o = document.querySelector("#priority").value,
        n = { itemName: t, itemQty: r, itemPriority: o };
      i.push(n),
        console.log(i),
        localStorage.setItem("todolist", JSON.stringify(i));
      var a = document.createElement("tr"),
        c = document.createElement("td");
      c.textContent = t;
      var u = document.createElement("td");
      u.textContent = r;
      var d = document.createElement("td");
      (d.textContent = o), "high" == o && (d.style.backgroundColor = "red");
      var s = document.createElement("td");
      (s.textContent = "Delete"),
        s.addEventListener("click", l),
        a.append(c, u, d, s),
        document.querySelector("tbody").append(a);
    });
  var i = [];
  function l(e) {
    console.log(e.target.parentNode), e.target.parentNode.remove();
  }
})();
