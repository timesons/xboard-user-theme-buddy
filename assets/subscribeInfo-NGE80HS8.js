import { I as W } from "./iconify-D5K5G99i.js";
import {
  g as w,
  j as Ft,
  m as zt,
  _ as O,
  V as Ht,
  d as Q,
  u as Yt,
  i as X,
  X as jt,
  f as Se,
  Y as _e,
  Z as wt,
  $ as Me,
  r as pt,
  b as $e,
  a0 as xe,
  a1 as Ee,
  a2 as Ae,
  a3 as _t,
  o as Re,
  l as Et,
  s as Ct,
  a4 as Vt,
  w as Zt,
  J as At,
  k as De,
  a5 as Ie,
  a6 as Le,
  D as N,
  E as Y,
  F as E,
  H as it,
  I as V,
  G as z,
  L as q,
  z as Rt,
  S as yt,
  K as ke,
  O as ft,
  R as at,
  B as Ne,
} from "./index-trPnz5BS.js";
import { u as Gt } from "./User-CHhtlxsL.js";
import { u as Oe } from "./index-DVjFoVco.js";
import { S as Te } from "./index-BSl9Db_y.js";
import { B as Be } from "./index-Dj6s8LTA.js";
import { M as Wt } from "./index-Cixf66yE.js";
import { i as Xt, R as Pe } from "./User-U_Q68dKX.js";
import { S as Ue } from "./Skeleton-DRQ7pli2.js";
import { o as Fe } from "./omit-Ddy602VB.js";
var ze =
  typeof globalThis < "u"
    ? globalThis
    : typeof window < "u"
    ? window
    : typeof global < "u"
    ? global
    : typeof self < "u"
    ? self
    : {};
function He(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default")
    ? t.default
    : t;
}
var Kt = { exports: {} };
(function (t, r) {
  (function (a, c) {
    t.exports = c();
  })(ze, function () {
    var a = 1e3,
      c = 6e4,
      d = 36e5,
      l = "millisecond",
      h = "second",
      n = "minute",
      o = "hour",
      e = "day",
      s = "week",
      i = "month",
      f = "quarter",
      u = "year",
      v = "date",
      y = "Invalid Date",
      P =
        /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,
      R =
        /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,
      S = {
        name: "en",
        weekdays:
          "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
        months:
          "January_February_March_April_May_June_July_August_September_October_November_December".split(
            "_"
          ),
        ordinal: function (C) {
          var g = ["th", "st", "nd", "rd"],
            p = C % 100;
          return "[" + C + (g[(p - 20) % 10] || g[p] || g[0]) + "]";
        },
      },
      $ = function (C, g, p) {
        var b = String(C);
        return !b || b.length >= g
          ? C
          : "" + Array(g + 1 - b.length).join(p) + C;
      },
      U = {
        s: $,
        z: function (C) {
          var g = -C.utcOffset(),
            p = Math.abs(g),
            b = Math.floor(p / 60),
            m = p % 60;
          return (g <= 0 ? "+" : "-") + $(b, 2, "0") + ":" + $(m, 2, "0");
        },
        m: function C(g, p) {
          if (g.date() < p.date()) return -C(p, g);
          var b = 12 * (p.year() - g.year()) + (p.month() - g.month()),
            m = g.clone().add(b, i),
            _ = p - m < 0,
            M = g.clone().add(b + (_ ? -1 : 1), i);
          return +(-(b + (p - m) / (_ ? m - M : M - m)) || 0);
        },
        a: function (C) {
          return C < 0 ? Math.ceil(C) || 0 : Math.floor(C);
        },
        p: function (C) {
          return (
            { M: i, y: u, w: s, d: e, D: v, h: o, m: n, s: h, ms: l, Q: f }[
              C
            ] ||
            String(C || "")
              .toLowerCase()
              .replace(/s$/, "")
          );
        },
        u: function (C) {
          return C === void 0;
        },
      },
      L = "en",
      F = {};
    F[L] = S;
    var G = "$isDayjsObject",
      ot = function (C) {
        return C instanceof rt || !(!C || !C[G]);
      },
      tt = function C(g, p, b) {
        var m;
        if (!g) return L;
        if (typeof g == "string") {
          var _ = g.toLowerCase();
          F[_] && (m = _), p && ((F[_] = p), (m = _));
          var M = g.split("-");
          if (!m && M.length > 1) return C(M[0]);
        } else {
          var A = g.name;
          (F[A] = g), (m = A);
        }
        return !b && m && (L = m), m || (!b && L);
      },
      I = function (C, g) {
        if (ot(C)) return C.clone();
        var p = typeof g == "object" ? g : {};
        return (p.date = C), (p.args = arguments), new rt(p);
      },
      x = U;
    (x.l = tt),
      (x.i = ot),
      (x.w = function (C, g) {
        return I(C, { locale: g.$L, utc: g.$u, x: g.$x, $offset: g.$offset });
      });
    var rt = (function () {
        function C(p) {
          (this.$L = tt(p.locale, null, !0)),
            this.parse(p),
            (this.$x = this.$x || p.x || {}),
            (this[G] = !0);
        }
        var g = C.prototype;
        return (
          (g.parse = function (p) {
            (this.$d = (function (b) {
              var m = b.date,
                _ = b.utc;
              if (m === null) return new Date(NaN);
              if (x.u(m)) return new Date();
              if (m instanceof Date) return new Date(m);
              if (typeof m == "string" && !/Z$/i.test(m)) {
                var M = m.match(P);
                if (M) {
                  var A = M[2] - 1 || 0,
                    D = (M[7] || "0").substring(0, 3);
                  return _
                    ? new Date(
                        Date.UTC(
                          M[1],
                          A,
                          M[3] || 1,
                          M[4] || 0,
                          M[5] || 0,
                          M[6] || 0,
                          D
                        )
                      )
                    : new Date(
                        M[1],
                        A,
                        M[3] || 1,
                        M[4] || 0,
                        M[5] || 0,
                        M[6] || 0,
                        D
                      );
                }
              }
              return new Date(m);
            })(p)),
              this.init();
          }),
          (g.init = function () {
            var p = this.$d;
            (this.$y = p.getFullYear()),
              (this.$M = p.getMonth()),
              (this.$D = p.getDate()),
              (this.$W = p.getDay()),
              (this.$H = p.getHours()),
              (this.$m = p.getMinutes()),
              (this.$s = p.getSeconds()),
              (this.$ms = p.getMilliseconds());
          }),
          (g.$utils = function () {
            return x;
          }),
          (g.isValid = function () {
            return this.$d.toString() !== y;
          }),
          (g.isSame = function (p, b) {
            var m = I(p);
            return this.startOf(b) <= m && m <= this.endOf(b);
          }),
          (g.isAfter = function (p, b) {
            return I(p) < this.startOf(b);
          }),
          (g.isBefore = function (p, b) {
            return this.endOf(b) < I(p);
          }),
          (g.$g = function (p, b, m) {
            return x.u(p) ? this[b] : this.set(m, p);
          }),
          (g.unix = function () {
            return Math.floor(this.valueOf() / 1e3);
          }),
          (g.valueOf = function () {
            return this.$d.getTime();
          }),
          (g.startOf = function (p, b) {
            var m = this,
              _ = !!x.u(b) || b,
              M = x.p(p),
              A = function (nt, H) {
                var K = x.w(
                  m.$u ? Date.UTC(m.$y, H, nt) : new Date(m.$y, H, nt),
                  m
                );
                return _ ? K : K.endOf(e);
              },
              D = function (nt, H) {
                return x.w(
                  m
                    .toDate()
                    [nt].apply(
                      m.toDate("s"),
                      (_ ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(H)
                    ),
                  m
                );
              },
              k = this.$W,
              B = this.$M,
              j = this.$D,
              st = "set" + (this.$u ? "UTC" : "");
            switch (M) {
              case u:
                return _ ? A(1, 0) : A(31, 11);
              case i:
                return _ ? A(1, B) : A(0, B + 1);
              case s:
                var et = this.$locale().weekStart || 0,
                  ut = (k < et ? k + 7 : k) - et;
                return A(_ ? j - ut : j + (6 - ut), B);
              case e:
              case v:
                return D(st + "Hours", 0);
              case o:
                return D(st + "Minutes", 1);
              case n:
                return D(st + "Seconds", 2);
              case h:
                return D(st + "Milliseconds", 3);
              default:
                return this.clone();
            }
          }),
          (g.endOf = function (p) {
            return this.startOf(p, !1);
          }),
          (g.$set = function (p, b) {
            var m,
              _ = x.p(p),
              M = "set" + (this.$u ? "UTC" : ""),
              A = ((m = {}),
              (m[e] = M + "Date"),
              (m[v] = M + "Date"),
              (m[i] = M + "Month"),
              (m[u] = M + "FullYear"),
              (m[o] = M + "Hours"),
              (m[n] = M + "Minutes"),
              (m[h] = M + "Seconds"),
              (m[l] = M + "Milliseconds"),
              m)[_],
              D = _ === e ? this.$D + (b - this.$W) : b;
            if (_ === i || _ === u) {
              var k = this.clone().set(v, 1);
              k.$d[A](D),
                k.init(),
                (this.$d = k.set(v, Math.min(this.$D, k.daysInMonth())).$d);
            } else A && this.$d[A](D);
            return this.init(), this;
          }),
          (g.set = function (p, b) {
            return this.clone().$set(p, b);
          }),
          (g.get = function (p) {
            return this[x.p(p)]();
          }),
          (g.add = function (p, b) {
            var m,
              _ = this;
            p = Number(p);
            var M = x.p(b),
              A = function (B) {
                var j = I(_);
                return x.w(j.date(j.date() + Math.round(B * p)), _);
              };
            if (M === i) return this.set(i, this.$M + p);
            if (M === u) return this.set(u, this.$y + p);
            if (M === e) return A(1);
            if (M === s) return A(7);
            var D = ((m = {}), (m[n] = c), (m[o] = d), (m[h] = a), m)[M] || 1,
              k = this.$d.getTime() + p * D;
            return x.w(k, this);
          }),
          (g.subtract = function (p, b) {
            return this.add(-1 * p, b);
          }),
          (g.format = function (p) {
            var b = this,
              m = this.$locale();
            if (!this.isValid()) return m.invalidDate || y;
            var _ = p || "YYYY-MM-DDTHH:mm:ssZ",
              M = x.z(this),
              A = this.$H,
              D = this.$m,
              k = this.$M,
              B = m.weekdays,
              j = m.months,
              st = m.meridiem,
              et = function (H, K, dt, gt) {
                return (H && (H[K] || H(b, _))) || dt[K].slice(0, gt);
              },
              ut = function (H) {
                return x.s(A % 12 || 12, H, "0");
              },
              nt =
                st ||
                function (H, K, dt) {
                  var gt = H < 12 ? "AM" : "PM";
                  return dt ? gt.toLowerCase() : gt;
                };
            return _.replace(R, function (H, K) {
              return (
                K ||
                (function (dt) {
                  switch (dt) {
                    case "YY":
                      return String(b.$y).slice(-2);
                    case "YYYY":
                      return x.s(b.$y, 4, "0");
                    case "M":
                      return k + 1;
                    case "MM":
                      return x.s(k + 1, 2, "0");
                    case "MMM":
                      return et(m.monthsShort, k, j, 3);
                    case "MMMM":
                      return et(j, k);
                    case "D":
                      return b.$D;
                    case "DD":
                      return x.s(b.$D, 2, "0");
                    case "d":
                      return String(b.$W);
                    case "dd":
                      return et(m.weekdaysMin, b.$W, B, 2);
                    case "ddd":
                      return et(m.weekdaysShort, b.$W, B, 3);
                    case "dddd":
                      return B[b.$W];
                    case "H":
                      return String(A);
                    case "HH":
                      return x.s(A, 2, "0");
                    case "h":
                      return ut(1);
                    case "hh":
                      return ut(2);
                    case "a":
                      return nt(A, D, !0);
                    case "A":
                      return nt(A, D, !1);
                    case "m":
                      return String(D);
                    case "mm":
                      return x.s(D, 2, "0");
                    case "s":
                      return String(b.$s);
                    case "ss":
                      return x.s(b.$s, 2, "0");
                    case "SSS":
                      return x.s(b.$ms, 3, "0");
                    case "Z":
                      return M;
                  }
                  return null;
                })(H) ||
                M.replace(":", "")
              );
            });
          }),
          (g.utcOffset = function () {
            return 15 * -Math.round(this.$d.getTimezoneOffset() / 15);
          }),
          (g.diff = function (p, b, m) {
            var _,
              M = this,
              A = x.p(b),
              D = I(p),
              k = (D.utcOffset() - this.utcOffset()) * c,
              B = this - D,
              j = function () {
                return x.m(M, D);
              };
            switch (A) {
              case u:
                _ = j() / 12;
                break;
              case i:
                _ = j();
                break;
              case f:
                _ = j() / 3;
                break;
              case s:
                _ = (B - k) / 6048e5;
                break;
              case e:
                _ = (B - k) / 864e5;
                break;
              case o:
                _ = B / d;
                break;
              case n:
                _ = B / c;
                break;
              case h:
                _ = B / a;
                break;
              default:
                _ = B;
            }
            return m ? _ : x.a(_);
          }),
          (g.daysInMonth = function () {
            return this.endOf(i).$D;
          }),
          (g.$locale = function () {
            return F[this.$L];
          }),
          (g.locale = function (p, b) {
            if (!p) return this.$L;
            var m = this.clone(),
              _ = tt(p, b, !0);
            return _ && (m.$L = _), m;
          }),
          (g.clone = function () {
            return x.w(this.$d, this);
          }),
          (g.toDate = function () {
            return new Date(this.valueOf());
          }),
          (g.toJSON = function () {
            return this.isValid() ? this.toISOString() : null;
          }),
          (g.toISOString = function () {
            return this.$d.toISOString();
          }),
          (g.toString = function () {
            return this.$d.toUTCString();
          }),
          C
        );
      })(),
      mt = rt.prototype;
    return (
      (I.prototype = mt),
      [
        ["$ms", l],
        ["$s", h],
        ["$m", n],
        ["$H", o],
        ["$W", e],
        ["$M", i],
        ["$y", u],
        ["$D", v],
      ].forEach(function (C) {
        mt[C[1]] = function (g) {
          return this.$g(g, C[0], C[1]);
        };
      }),
      (I.extend = function (C, g) {
        return C.$i || (C(g, rt, I), (C.$i = !0)), I;
      }),
      (I.locale = tt),
      (I.isDayjs = ot),
      (I.unix = function (C) {
        return I(1e3 * C);
      }),
      (I.en = F[L]),
      (I.Ls = F),
      (I.p = {}),
      I
    );
  });
})(Kt);
var Ye = Kt.exports;
const je = He(Ye),
  qt = (t) => {
    const {
      value: r,
      formatter: a,
      precision: c,
      decimalSeparator: d,
      groupSeparator: l = "",
      prefixCls: h,
    } = t;
    let n;
    if (typeof a == "function") n = a({ value: r });
    else {
      const o = String(r),
        e = o.match(/^(-?)(\d*)(\.(\d+))?$/);
      if (!e) n = o;
      else {
        const s = e[1];
        let i = e[2] || "0",
          f = e[4] || "";
        (i = i.replace(/\B(?=(\d{3})+(?!\d))/g, l)),
          typeof c == "number" &&
            (f = f.padEnd(c, "0").slice(0, c > 0 ? c : 0)),
          f && (f = `${d}${f}`),
          (n = [
            w("span", { key: "int", class: `${h}-content-value-int` }, [s, i]),
            f &&
              w(
                "span",
                { key: "decimal", class: `${h}-content-value-decimal` },
                [f]
              ),
          ]);
      }
    }
    return w("span", { class: `${h}-content-value` }, [n]);
  };
qt.displayName = "StatisticNumber";
const Ve = (t) => {
    const {
      componentCls: r,
      marginXXS: a,
      padding: c,
      colorTextDescription: d,
      statisticTitleFontSize: l,
      colorTextHeading: h,
      statisticContentFontSize: n,
      statisticFontFamily: o,
    } = t;
    return {
      [`${r}`]: O(O({}, Ht(t)), {
        [`${r}-title`]: { marginBottom: a, color: d, fontSize: l },
        [`${r}-skeleton`]: { paddingTop: c },
        [`${r}-content`]: {
          color: h,
          fontSize: n,
          fontFamily: o,
          [`${r}-content-value`]: { display: "inline-block", direction: "ltr" },
          [`${r}-content-prefix, ${r}-content-suffix`]: {
            display: "inline-block",
          },
          [`${r}-content-prefix`]: { marginInlineEnd: a },
          [`${r}-content-suffix`]: { marginInlineStart: a },
        },
      }),
    };
  },
  Ze = Ft("Statistic", (t) => {
    const { fontSizeHeading3: r, fontSize: a, fontFamily: c } = t,
      d = zt(t, {
        statisticTitleFontSize: a,
        statisticContentFontSize: r,
        statisticFontFamily: c,
      });
    return [Ve(d)];
  }),
  Jt = () => ({
    prefixCls: String,
    decimalSeparator: String,
    groupSeparator: String,
    format: String,
    value: jt([Number, String, Object]),
    valueStyle: { type: Object, default: void 0 },
    valueRender: Se(),
    formatter: _e(),
    precision: Number,
    prefix: wt(),
    suffix: wt(),
    title: wt(),
    loading: Me(),
  }),
  J = Q({
    compatConfig: { MODE: 3 },
    name: "AStatistic",
    inheritAttrs: !1,
    props: Xt(Jt(), {
      decimalSeparator: ".",
      groupSeparator: ",",
      loading: !1,
    }),
    slots: Object,
    setup(t, r) {
      let { slots: a, attrs: c } = r;
      const { prefixCls: d, direction: l } = Yt("statistic", t),
        [h, n] = Ze(d);
      return () => {
        var o, e, s, i, f, u, v;
        const { value: y = 0, valueStyle: P, valueRender: R } = t,
          S = d.value,
          $ =
            (o = t.title) !== null && o !== void 0
              ? o
              : (e = a.title) === null || e === void 0
              ? void 0
              : e.call(a),
          U =
            (s = t.prefix) !== null && s !== void 0
              ? s
              : (i = a.prefix) === null || i === void 0
              ? void 0
              : i.call(a),
          L =
            (f = t.suffix) !== null && f !== void 0
              ? f
              : (u = a.suffix) === null || u === void 0
              ? void 0
              : u.call(a),
          F = (v = t.formatter) !== null && v !== void 0 ? v : a.formatter;
        let G = w(
          qt,
          X(
            { "data-for-update": Date.now() },
            O(O({}, t), { prefixCls: S, value: y, formatter: F })
          ),
          null
        );
        return (
          R && (G = R(G)),
          h(
            w(
              "div",
              X(
                X({}, c),
                {},
                {
                  class: [
                    S,
                    { [`${S}-rtl`]: l.value === "rtl" },
                    c.class,
                    n.value,
                  ],
                }
              ),
              [
                $ && w("div", { class: `${S}-title` }, [$]),
                w(
                  Ue,
                  { paragraph: !1, loading: t.loading },
                  {
                    default: () => [
                      w("div", { style: P, class: `${S}-content` }, [
                        U && w("span", { class: `${S}-content-prefix` }, [U]),
                        G,
                        L && w("span", { class: `${S}-content-suffix` }, [L]),
                      ]),
                    ],
                  }
                ),
              ]
            )
          )
        );
      };
    },
  }),
  Ge = [
    ["Y", 1e3 * 60 * 60 * 24 * 365],
    ["M", 1e3 * 60 * 60 * 24 * 30],
    ["D", 1e3 * 60 * 60 * 24],
    ["H", 1e3 * 60 * 60],
    ["m", 1e3 * 60],
    ["s", 1e3],
    ["S", 1],
  ];
function We(t, r) {
  let a = t;
  const c = /\[[^\]]*]/g,
    d = (r.match(c) || []).map((o) => o.slice(1, -1)),
    l = r.replace(c, "[]"),
    h = Ge.reduce((o, e) => {
      let [s, i] = e;
      if (o.includes(s)) {
        const f = Math.floor(a / i);
        return (
          (a -= f * i),
          o.replace(new RegExp(`${s}+`, "g"), (u) => {
            const v = u.length;
            return f.toString().padStart(v, "0");
          })
        );
      }
      return o;
    }, l);
  let n = 0;
  return h.replace(c, () => {
    const o = d[n];
    return (n += 1), o;
  });
}
function Xe(t, r) {
  const { format: a = "" } = r,
    c = new Date(t).getTime(),
    d = Date.now(),
    l = Math.max(c - d, 0);
  return We(l, a);
}
const Ke = 1e3 / 30;
function St(t) {
  return new Date(t).getTime();
}
const qe = () =>
    O(O({}, Jt()), {
      value: jt([Number, String, Object]),
      format: String,
      onFinish: Function,
      onChange: Function,
    }),
  Je = Q({
    compatConfig: { MODE: 3 },
    name: "AStatisticCountdown",
    props: Xt(qe(), { format: "HH:mm:ss" }),
    setup(t, r) {
      let { emit: a, slots: c } = r;
      const d = pt(),
        l = pt(),
        h = () => {
          const { value: i } = t;
          St(i) >= Date.now() ? n() : o();
        },
        n = () => {
          if (d.value) return;
          const i = St(t.value);
          d.value = setInterval(() => {
            l.value.$forceUpdate(),
              i > Date.now() && a("change", i - Date.now()),
              h();
          }, Ke);
        },
        o = () => {
          const { value: i } = t;
          d.value &&
            (clearInterval(d.value),
            (d.value = void 0),
            St(i) < Date.now() && a("finish"));
        },
        e = (i) => {
          let { value: f, config: u } = i;
          const { format: v } = t;
          return Xe(f, O(O({}, u), { format: v }));
        },
        s = (i) => i;
      return (
        $e(() => {
          h();
        }),
        xe(() => {
          h();
        }),
        Ee(() => {
          o();
        }),
        () => {
          const i = t.value;
          return w(
            J,
            X(
              { ref: l },
              O(O({}, Fe(t, ["onFinish", "onChange"])), {
                value: i,
                valueRender: s,
                formatter: e,
              })
            ),
            c
          );
        }
      );
    },
  });
J.Countdown = Je;
J.install = function (t) {
  return t.component(J.name, J), t.component(J.Countdown.name, J.Countdown), t;
};
const Qe = J.Countdown,
  tn = (t) => {
    const { componentCls: r } = t;
    return {
      [r]: O(O({}, Ht(t)), {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: t.paddingSM,
        backgroundColor: t.colorWhite,
        borderRadius: t.borderRadiusLG,
        border: `${t.lineWidth}px ${t.lineType} ${t.colorSplit}`,
        position: "relative",
        width: "100%",
        height: "100%",
        overflow: "hidden",
        [`& > ${r}-mask`]: {
          position: "absolute",
          insetBlockStart: 0,
          insetInlineStart: 0,
          zIndex: 10,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          height: "100%",
          color: t.colorText,
          lineHeight: t.lineHeight,
          background: t.QRCodeMaskBackgroundColor,
          textAlign: "center",
          [`& > ${r}-expired , & > ${r}-scanned`]: { color: t.QRCodeTextColor },
        },
        "&-icon": { marginBlockEnd: t.marginXS, fontSize: t.controlHeight },
      }),
      [`${r}-borderless`]: { borderColor: "transparent" },
    };
  },
  en = Ft("QRCode", (t) =>
    tn(
      zt(t, {
        QRCodeTextColor: "rgba(0, 0, 0, 0.88)",
        QRCodeMaskBackgroundColor: "rgba(255, 255, 255, 0.96)",
      })
    )
  );
var nn = {
  icon: {
    tag: "svg",
    attrs: { viewBox: "64 64 896 896", focusable: "false" },
    children: [
      {
        tag: "path",
        attrs: {
          d: "M909.1 209.3l-56.4 44.1C775.8 155.1 656.2 92 521.9 92 290 92 102.3 279.5 102 511.5 101.7 743.7 289.8 932 521.9 932c181.3 0 335.8-115 394.6-276.1 1.5-4.2-.7-8.9-4.9-10.3l-56.7-19.5a8 8 0 00-10.1 4.8c-1.8 5-3.8 10-5.9 14.9-17.3 41-42.1 77.8-73.7 109.4A344.77 344.77 0 01655.9 829c-42.3 17.9-87.4 27-133.8 27-46.5 0-91.5-9.1-133.8-27A341.5 341.5 0 01279 755.2a342.16 342.16 0 01-73.7-109.4c-17.9-42.4-27-87.4-27-133.9s9.1-91.5 27-133.9c17.3-41 42.1-77.8 73.7-109.4 31.6-31.6 68.4-56.4 109.3-73.8 42.3-17.9 87.4-27 133.8-27 46.5 0 91.5 9.1 133.8 27a341.5 341.5 0 01109.3 73.8c9.9 9.9 19.2 20.4 27.8 31.4l-60.2 47a8 8 0 003 14.1l175.6 43c5 1.2 9.9-2.6 9.9-7.7l.8-180.9c-.1-6.6-7.8-10.3-13-6.2z",
        },
      },
    ],
  },
  name: "reload",
  theme: "outlined",
};
function Nt(t) {
  for (var r = 1; r < arguments.length; r++) {
    var a = arguments[r] != null ? Object(arguments[r]) : {},
      c = Object.keys(a);
    typeof Object.getOwnPropertySymbols == "function" &&
      (c = c.concat(
        Object.getOwnPropertySymbols(a).filter(function (d) {
          return Object.getOwnPropertyDescriptor(a, d).enumerable;
        })
      )),
      c.forEach(function (d) {
        on(t, d, a[d]);
      });
  }
  return t;
}
function on(t, r, a) {
  return (
    r in t
      ? Object.defineProperty(t, r, {
          value: a,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (t[r] = a),
    t
  );
}
var Dt = function (r, a) {
  var c = Nt({}, r, a.attrs);
  return w(Ae, Nt({}, c, { icon: nn }), null);
};
Dt.displayName = "ReloadOutlined";
Dt.inheritAttrs = !1;
const It = () => ({
    size: { type: Number, default: 160 },
    value: { type: String, required: !0 },
    type: _t("canvas"),
    color: String,
    bgColor: String,
    includeMargin: Boolean,
    imageSettings: Re(),
  }),
  rn = () =>
    O(O({}, It()), {
      errorLevel: _t("M"),
      icon: String,
      iconSize: { type: Number, default: 40 },
      status: _t("active"),
      bordered: { type: Boolean, default: !0 },
    });
/**
 * @license QR Code generator library (TypeScript)
 * Copyright (c) Project Nayuki.
 * SPDX-License-Identifier: MIT
 */ var Z;
(function (t) {
  class r {
    static encodeText(n, o) {
      const e = t.QrSegment.makeSegments(n);
      return r.encodeSegments(e, o);
    }
    static encodeBinary(n, o) {
      const e = t.QrSegment.makeBytes(n);
      return r.encodeSegments([e], o);
    }
    static encodeSegments(n, o) {
      let e =
          arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 1,
        s = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : 40,
        i = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : -1,
        f = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : !0;
      if (
        !(r.MIN_VERSION <= e && e <= s && s <= r.MAX_VERSION) ||
        i < -1 ||
        i > 7
      )
        throw new RangeError("Invalid value");
      let u, v;
      for (u = e; ; u++) {
        const S = r.getNumDataCodewords(u, o) * 8,
          $ = l.getTotalBits(n, u);
        if ($ <= S) {
          v = $;
          break;
        }
        if (u >= s) throw new RangeError("Data too long");
      }
      for (const S of [r.Ecc.MEDIUM, r.Ecc.QUARTILE, r.Ecc.HIGH])
        f && v <= r.getNumDataCodewords(u, S) * 8 && (o = S);
      const y = [];
      for (const S of n) {
        a(S.mode.modeBits, 4, y), a(S.numChars, S.mode.numCharCountBits(u), y);
        for (const $ of S.getData()) y.push($);
      }
      d(y.length == v);
      const P = r.getNumDataCodewords(u, o) * 8;
      d(y.length <= P),
        a(0, Math.min(4, P - y.length), y),
        a(0, (8 - (y.length % 8)) % 8, y),
        d(y.length % 8 == 0);
      for (let S = 236; y.length < P; S ^= 253) a(S, 8, y);
      const R = [];
      for (; R.length * 8 < y.length; ) R.push(0);
      return (
        y.forEach((S, $) => (R[$ >>> 3] |= S << (7 - ($ & 7)))),
        new r(u, o, R, i)
      );
    }
    constructor(n, o, e, s) {
      if (
        ((this.version = n),
        (this.errorCorrectionLevel = o),
        (this.modules = []),
        (this.isFunction = []),
        n < r.MIN_VERSION || n > r.MAX_VERSION)
      )
        throw new RangeError("Version value out of range");
      if (s < -1 || s > 7) throw new RangeError("Mask value out of range");
      this.size = n * 4 + 17;
      const i = [];
      for (let u = 0; u < this.size; u++) i.push(!1);
      for (let u = 0; u < this.size; u++)
        this.modules.push(i.slice()), this.isFunction.push(i.slice());
      this.drawFunctionPatterns();
      const f = this.addEccAndInterleave(e);
      if ((this.drawCodewords(f), s == -1)) {
        let u = 1e9;
        for (let v = 0; v < 8; v++) {
          this.applyMask(v), this.drawFormatBits(v);
          const y = this.getPenaltyScore();
          y < u && ((s = v), (u = y)), this.applyMask(v);
        }
      }
      d(0 <= s && s <= 7),
        (this.mask = s),
        this.applyMask(s),
        this.drawFormatBits(s),
        (this.isFunction = []);
    }
    getModule(n, o) {
      return (
        0 <= n && n < this.size && 0 <= o && o < this.size && this.modules[o][n]
      );
    }
    getModules() {
      return this.modules;
    }
    drawFunctionPatterns() {
      for (let e = 0; e < this.size; e++)
        this.setFunctionModule(6, e, e % 2 == 0),
          this.setFunctionModule(e, 6, e % 2 == 0);
      this.drawFinderPattern(3, 3),
        this.drawFinderPattern(this.size - 4, 3),
        this.drawFinderPattern(3, this.size - 4);
      const n = this.getAlignmentPatternPositions(),
        o = n.length;
      for (let e = 0; e < o; e++)
        for (let s = 0; s < o; s++)
          (e == 0 && s == 0) ||
            (e == 0 && s == o - 1) ||
            (e == o - 1 && s == 0) ||
            this.drawAlignmentPattern(n[e], n[s]);
      this.drawFormatBits(0), this.drawVersion();
    }
    drawFormatBits(n) {
      const o = (this.errorCorrectionLevel.formatBits << 3) | n;
      let e = o;
      for (let i = 0; i < 10; i++) e = (e << 1) ^ ((e >>> 9) * 1335);
      const s = ((o << 10) | e) ^ 21522;
      d(s >>> 15 == 0);
      for (let i = 0; i <= 5; i++) this.setFunctionModule(8, i, c(s, i));
      this.setFunctionModule(8, 7, c(s, 6)),
        this.setFunctionModule(8, 8, c(s, 7)),
        this.setFunctionModule(7, 8, c(s, 8));
      for (let i = 9; i < 15; i++) this.setFunctionModule(14 - i, 8, c(s, i));
      for (let i = 0; i < 8; i++)
        this.setFunctionModule(this.size - 1 - i, 8, c(s, i));
      for (let i = 8; i < 15; i++)
        this.setFunctionModule(8, this.size - 15 + i, c(s, i));
      this.setFunctionModule(8, this.size - 8, !0);
    }
    drawVersion() {
      if (this.version < 7) return;
      let n = this.version;
      for (let e = 0; e < 12; e++) n = (n << 1) ^ ((n >>> 11) * 7973);
      const o = (this.version << 12) | n;
      d(o >>> 18 == 0);
      for (let e = 0; e < 18; e++) {
        const s = c(o, e),
          i = this.size - 11 + (e % 3),
          f = Math.floor(e / 3);
        this.setFunctionModule(i, f, s), this.setFunctionModule(f, i, s);
      }
    }
    drawFinderPattern(n, o) {
      for (let e = -4; e <= 4; e++)
        for (let s = -4; s <= 4; s++) {
          const i = Math.max(Math.abs(s), Math.abs(e)),
            f = n + s,
            u = o + e;
          0 <= f &&
            f < this.size &&
            0 <= u &&
            u < this.size &&
            this.setFunctionModule(f, u, i != 2 && i != 4);
        }
    }
    drawAlignmentPattern(n, o) {
      for (let e = -2; e <= 2; e++)
        for (let s = -2; s <= 2; s++)
          this.setFunctionModule(
            n + s,
            o + e,
            Math.max(Math.abs(s), Math.abs(e)) != 1
          );
    }
    setFunctionModule(n, o, e) {
      (this.modules[o][n] = e), (this.isFunction[o][n] = !0);
    }
    addEccAndInterleave(n) {
      const o = this.version,
        e = this.errorCorrectionLevel;
      if (n.length != r.getNumDataCodewords(o, e))
        throw new RangeError("Invalid argument");
      const s = r.NUM_ERROR_CORRECTION_BLOCKS[e.ordinal][o],
        i = r.ECC_CODEWORDS_PER_BLOCK[e.ordinal][o],
        f = Math.floor(r.getNumRawDataModules(o) / 8),
        u = s - (f % s),
        v = Math.floor(f / s),
        y = [],
        P = r.reedSolomonComputeDivisor(i);
      for (let S = 0, $ = 0; S < s; S++) {
        const U = n.slice($, $ + v - i + (S < u ? 0 : 1));
        $ += U.length;
        const L = r.reedSolomonComputeRemainder(U, P);
        S < u && U.push(0), y.push(U.concat(L));
      }
      const R = [];
      for (let S = 0; S < y[0].length; S++)
        y.forEach(($, U) => {
          (S != v - i || U >= u) && R.push($[S]);
        });
      return d(R.length == f), R;
    }
    drawCodewords(n) {
      if (n.length != Math.floor(r.getNumRawDataModules(this.version) / 8))
        throw new RangeError("Invalid argument");
      let o = 0;
      for (let e = this.size - 1; e >= 1; e -= 2) {
        e == 6 && (e = 5);
        for (let s = 0; s < this.size; s++)
          for (let i = 0; i < 2; i++) {
            const f = e - i,
              v = ((e + 1) & 2) == 0 ? this.size - 1 - s : s;
            !this.isFunction[v][f] &&
              o < n.length * 8 &&
              ((this.modules[v][f] = c(n[o >>> 3], 7 - (o & 7))), o++);
          }
      }
      d(o == n.length * 8);
    }
    applyMask(n) {
      if (n < 0 || n > 7) throw new RangeError("Mask value out of range");
      for (let o = 0; o < this.size; o++)
        for (let e = 0; e < this.size; e++) {
          let s;
          switch (n) {
            case 0:
              s = (e + o) % 2 == 0;
              break;
            case 1:
              s = o % 2 == 0;
              break;
            case 2:
              s = e % 3 == 0;
              break;
            case 3:
              s = (e + o) % 3 == 0;
              break;
            case 4:
              s = (Math.floor(e / 3) + Math.floor(o / 2)) % 2 == 0;
              break;
            case 5:
              s = ((e * o) % 2) + ((e * o) % 3) == 0;
              break;
            case 6:
              s = (((e * o) % 2) + ((e * o) % 3)) % 2 == 0;
              break;
            case 7:
              s = (((e + o) % 2) + ((e * o) % 3)) % 2 == 0;
              break;
            default:
              throw new Error("Unreachable");
          }
          !this.isFunction[o][e] &&
            s &&
            (this.modules[o][e] = !this.modules[o][e]);
        }
    }
    getPenaltyScore() {
      let n = 0;
      for (let i = 0; i < this.size; i++) {
        let f = !1,
          u = 0;
        const v = [0, 0, 0, 0, 0, 0, 0];
        for (let y = 0; y < this.size; y++)
          this.modules[i][y] == f
            ? (u++, u == 5 ? (n += r.PENALTY_N1) : u > 5 && n++)
            : (this.finderPenaltyAddHistory(u, v),
              f || (n += this.finderPenaltyCountPatterns(v) * r.PENALTY_N3),
              (f = this.modules[i][y]),
              (u = 1));
        n += this.finderPenaltyTerminateAndCount(f, u, v) * r.PENALTY_N3;
      }
      for (let i = 0; i < this.size; i++) {
        let f = !1,
          u = 0;
        const v = [0, 0, 0, 0, 0, 0, 0];
        for (let y = 0; y < this.size; y++)
          this.modules[y][i] == f
            ? (u++, u == 5 ? (n += r.PENALTY_N1) : u > 5 && n++)
            : (this.finderPenaltyAddHistory(u, v),
              f || (n += this.finderPenaltyCountPatterns(v) * r.PENALTY_N3),
              (f = this.modules[y][i]),
              (u = 1));
        n += this.finderPenaltyTerminateAndCount(f, u, v) * r.PENALTY_N3;
      }
      for (let i = 0; i < this.size - 1; i++)
        for (let f = 0; f < this.size - 1; f++) {
          const u = this.modules[i][f];
          u == this.modules[i][f + 1] &&
            u == this.modules[i + 1][f] &&
            u == this.modules[i + 1][f + 1] &&
            (n += r.PENALTY_N2);
        }
      let o = 0;
      for (const i of this.modules) o = i.reduce((f, u) => f + (u ? 1 : 0), o);
      const e = this.size * this.size,
        s = Math.ceil(Math.abs(o * 20 - e * 10) / e) - 1;
      return (
        d(0 <= s && s <= 9),
        (n += s * r.PENALTY_N4),
        d(0 <= n && n <= 2568888),
        n
      );
    }
    getAlignmentPatternPositions() {
      if (this.version == 1) return [];
      {
        const n = Math.floor(this.version / 7) + 2,
          o =
            this.version == 32
              ? 26
              : Math.ceil((this.version * 4 + 4) / (n * 2 - 2)) * 2,
          e = [6];
        for (let s = this.size - 7; e.length < n; s -= o) e.splice(1, 0, s);
        return e;
      }
    }
    static getNumRawDataModules(n) {
      if (n < r.MIN_VERSION || n > r.MAX_VERSION)
        throw new RangeError("Version number out of range");
      let o = (16 * n + 128) * n + 64;
      if (n >= 2) {
        const e = Math.floor(n / 7) + 2;
        (o -= (25 * e - 10) * e - 55), n >= 7 && (o -= 36);
      }
      return d(208 <= o && o <= 29648), o;
    }
    static getNumDataCodewords(n, o) {
      return (
        Math.floor(r.getNumRawDataModules(n) / 8) -
        r.ECC_CODEWORDS_PER_BLOCK[o.ordinal][n] *
          r.NUM_ERROR_CORRECTION_BLOCKS[o.ordinal][n]
      );
    }
    static reedSolomonComputeDivisor(n) {
      if (n < 1 || n > 255) throw new RangeError("Degree out of range");
      const o = [];
      for (let s = 0; s < n - 1; s++) o.push(0);
      o.push(1);
      let e = 1;
      for (let s = 0; s < n; s++) {
        for (let i = 0; i < o.length; i++)
          (o[i] = r.reedSolomonMultiply(o[i], e)),
            i + 1 < o.length && (o[i] ^= o[i + 1]);
        e = r.reedSolomonMultiply(e, 2);
      }
      return o;
    }
    static reedSolomonComputeRemainder(n, o) {
      const e = o.map((s) => 0);
      for (const s of n) {
        const i = s ^ e.shift();
        e.push(0), o.forEach((f, u) => (e[u] ^= r.reedSolomonMultiply(f, i)));
      }
      return e;
    }
    static reedSolomonMultiply(n, o) {
      if (n >>> 8 || o >>> 8) throw new RangeError("Byte out of range");
      let e = 0;
      for (let s = 7; s >= 0; s--)
        (e = (e << 1) ^ ((e >>> 7) * 285)), (e ^= ((o >>> s) & 1) * n);
      return d(e >>> 8 == 0), e;
    }
    finderPenaltyCountPatterns(n) {
      const o = n[1];
      d(o <= this.size * 3);
      const e = o > 0 && n[2] == o && n[3] == o * 3 && n[4] == o && n[5] == o;
      return (
        (e && n[0] >= o * 4 && n[6] >= o ? 1 : 0) +
        (e && n[6] >= o * 4 && n[0] >= o ? 1 : 0)
      );
    }
    finderPenaltyTerminateAndCount(n, o, e) {
      return (
        n && (this.finderPenaltyAddHistory(o, e), (o = 0)),
        (o += this.size),
        this.finderPenaltyAddHistory(o, e),
        this.finderPenaltyCountPatterns(e)
      );
    }
    finderPenaltyAddHistory(n, o) {
      o[0] == 0 && (n += this.size), o.pop(), o.unshift(n);
    }
  }
  (r.MIN_VERSION = 1),
    (r.MAX_VERSION = 40),
    (r.PENALTY_N1 = 3),
    (r.PENALTY_N2 = 3),
    (r.PENALTY_N3 = 40),
    (r.PENALTY_N4 = 10),
    (r.ECC_CODEWORDS_PER_BLOCK = [
      [
        -1, 7, 10, 15, 20, 26, 18, 20, 24, 30, 18, 20, 24, 26, 30, 22, 24, 28,
        30, 28, 28, 28, 28, 30, 30, 26, 28, 30, 30, 30, 30, 30, 30, 30, 30, 30,
        30, 30, 30, 30, 30,
      ],
      [
        -1, 10, 16, 26, 18, 24, 16, 18, 22, 22, 26, 30, 22, 22, 24, 24, 28, 28,
        26, 26, 26, 26, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28,
        28, 28, 28, 28, 28,
      ],
      [
        -1, 13, 22, 18, 26, 18, 24, 18, 22, 20, 24, 28, 26, 24, 20, 30, 24, 28,
        28, 26, 30, 28, 30, 30, 30, 30, 28, 30, 30, 30, 30, 30, 30, 30, 30, 30,
        30, 30, 30, 30, 30,
      ],
      [
        -1, 17, 28, 22, 16, 22, 28, 26, 26, 24, 28, 24, 28, 22, 24, 24, 30, 28,
        28, 26, 28, 30, 24, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30,
        30, 30, 30, 30, 30,
      ],
    ]),
    (r.NUM_ERROR_CORRECTION_BLOCKS = [
      [
        -1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 4, 4, 4, 4, 4, 6, 6, 6, 6, 7, 8, 8, 9, 9,
        10, 12, 12, 12, 13, 14, 15, 16, 17, 18, 19, 19, 20, 21, 22, 24, 25,
      ],
      [
        -1, 1, 1, 1, 2, 2, 4, 4, 4, 5, 5, 5, 8, 9, 9, 10, 10, 11, 13, 14, 16,
        17, 17, 18, 20, 21, 23, 25, 26, 28, 29, 31, 33, 35, 37, 38, 40, 43, 45,
        47, 49,
      ],
      [
        -1, 1, 1, 2, 2, 4, 4, 6, 6, 8, 8, 8, 10, 12, 16, 12, 17, 16, 18, 21, 20,
        23, 23, 25, 27, 29, 34, 34, 35, 38, 40, 43, 45, 48, 51, 53, 56, 59, 62,
        65, 68,
      ],
      [
        -1, 1, 1, 2, 4, 4, 4, 5, 6, 8, 8, 11, 11, 16, 16, 18, 16, 19, 21, 25,
        25, 25, 34, 30, 32, 35, 37, 40, 42, 45, 48, 51, 54, 57, 60, 63, 66, 70,
        74, 77, 81,
      ],
    ]),
    (t.QrCode = r);
  function a(h, n, o) {
    if (n < 0 || n > 31 || h >>> n) throw new RangeError("Value out of range");
    for (let e = n - 1; e >= 0; e--) o.push((h >>> e) & 1);
  }
  function c(h, n) {
    return ((h >>> n) & 1) != 0;
  }
  function d(h) {
    if (!h) throw new Error("Assertion error");
  }
  class l {
    static makeBytes(n) {
      const o = [];
      for (const e of n) a(e, 8, o);
      return new l(l.Mode.BYTE, n.length, o);
    }
    static makeNumeric(n) {
      if (!l.isNumeric(n))
        throw new RangeError("String contains non-numeric characters");
      const o = [];
      for (let e = 0; e < n.length; ) {
        const s = Math.min(n.length - e, 3);
        a(parseInt(n.substring(e, e + s), 10), s * 3 + 1, o), (e += s);
      }
      return new l(l.Mode.NUMERIC, n.length, o);
    }
    static makeAlphanumeric(n) {
      if (!l.isAlphanumeric(n))
        throw new RangeError(
          "String contains unencodable characters in alphanumeric mode"
        );
      const o = [];
      let e;
      for (e = 0; e + 2 <= n.length; e += 2) {
        let s = l.ALPHANUMERIC_CHARSET.indexOf(n.charAt(e)) * 45;
        (s += l.ALPHANUMERIC_CHARSET.indexOf(n.charAt(e + 1))), a(s, 11, o);
      }
      return (
        e < n.length && a(l.ALPHANUMERIC_CHARSET.indexOf(n.charAt(e)), 6, o),
        new l(l.Mode.ALPHANUMERIC, n.length, o)
      );
    }
    static makeSegments(n) {
      return n == ""
        ? []
        : l.isNumeric(n)
        ? [l.makeNumeric(n)]
        : l.isAlphanumeric(n)
        ? [l.makeAlphanumeric(n)]
        : [l.makeBytes(l.toUtf8ByteArray(n))];
    }
    static makeEci(n) {
      const o = [];
      if (n < 0) throw new RangeError("ECI assignment value out of range");
      if (n < 128) a(n, 8, o);
      else if (n < 16384) a(2, 2, o), a(n, 14, o);
      else if (n < 1e6) a(6, 3, o), a(n, 21, o);
      else throw new RangeError("ECI assignment value out of range");
      return new l(l.Mode.ECI, 0, o);
    }
    static isNumeric(n) {
      return l.NUMERIC_REGEX.test(n);
    }
    static isAlphanumeric(n) {
      return l.ALPHANUMERIC_REGEX.test(n);
    }
    constructor(n, o, e) {
      if (((this.mode = n), (this.numChars = o), (this.bitData = e), o < 0))
        throw new RangeError("Invalid argument");
      this.bitData = e.slice();
    }
    getData() {
      return this.bitData.slice();
    }
    static getTotalBits(n, o) {
      let e = 0;
      for (const s of n) {
        const i = s.mode.numCharCountBits(o);
        if (s.numChars >= 1 << i) return 1 / 0;
        e += 4 + i + s.bitData.length;
      }
      return e;
    }
    static toUtf8ByteArray(n) {
      n = encodeURI(n);
      const o = [];
      for (let e = 0; e < n.length; e++)
        n.charAt(e) != "%"
          ? o.push(n.charCodeAt(e))
          : (o.push(parseInt(n.substring(e + 1, e + 3), 16)), (e += 2));
      return o;
    }
  }
  (l.NUMERIC_REGEX = /^[0-9]*$/),
    (l.ALPHANUMERIC_REGEX = /^[A-Z0-9 $%*+.\/:-]*$/),
    (l.ALPHANUMERIC_CHARSET = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ $%*+-./:"),
    (t.QrSegment = l);
})(Z || (Z = {}));
(function (t) {
  (function (r) {
    class a {
      constructor(d, l) {
        (this.ordinal = d), (this.formatBits = l);
      }
    }
    (a.LOW = new a(0, 1)),
      (a.MEDIUM = new a(1, 0)),
      (a.QUARTILE = new a(2, 3)),
      (a.HIGH = new a(3, 2)),
      (r.Ecc = a);
  })(t.QrCode || (t.QrCode = {}));
})(Z || (Z = {}));
(function (t) {
  (function (r) {
    class a {
      constructor(d, l) {
        (this.modeBits = d), (this.numBitsCharCount = l);
      }
      numCharCountBits(d) {
        return this.numBitsCharCount[Math.floor((d + 7) / 17)];
      }
    }
    (a.NUMERIC = new a(1, [10, 12, 14])),
      (a.ALPHANUMERIC = new a(2, [9, 11, 13])),
      (a.BYTE = new a(4, [8, 16, 16])),
      (a.KANJI = new a(8, [8, 10, 12])),
      (a.ECI = new a(7, [0, 0, 0])),
      (r.Mode = a);
  })(t.QrSegment || (t.QrSegment = {}));
})(Z || (Z = {}));
const Qt = {
    L: Z.QrCode.Ecc.LOW,
    M: Z.QrCode.Ecc.MEDIUM,
    Q: Z.QrCode.Ecc.QUARTILE,
    H: Z.QrCode.Ecc.HIGH,
  },
  Mt = 128,
  te = "L",
  ee = "#FFFFFF",
  ne = "#000000",
  oe = !1,
  sn = 4,
  an = 0,
  ln = 0.1;
function re(t) {
  let r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
  const a = [];
  return (
    t.forEach(function (c, d) {
      let l = null;
      c.forEach(function (h, n) {
        if (!h && l !== null) {
          a.push(`M${l + r} ${d + r}h${n - l}v1H${l + r}z`), (l = null);
          return;
        }
        if (n === c.length - 1) {
          if (!h) return;
          l === null
            ? a.push(`M${n + r},${d + r} h1v1H${n + r}z`)
            : a.push(`M${l + r},${d + r} h${n + 1 - l}v1H${l + r}z`);
          return;
        }
        h && l === null && (l = n);
      });
    }),
    a.join("")
  );
}
function se(t, r) {
  return t
    .slice()
    .map((a, c) =>
      c < r.y || c >= r.y + r.h
        ? a
        : a.map((d, l) => (l < r.x || l >= r.x + r.w ? d : !1))
    );
}
function ie(t, r, a, c) {
  if (c == null) return null;
  const d = t.length + a * 2,
    l = Math.floor(r * ln),
    h = d / r,
    n = (c.width || l) * h,
    o = (c.height || l) * h,
    e = c.x == null ? t.length / 2 - n / 2 : c.x * h,
    s = c.y == null ? t.length / 2 - o / 2 : c.y * h;
  let i = null;
  if (c.excavate) {
    const f = Math.floor(e),
      u = Math.floor(s),
      v = Math.ceil(n + e - f),
      y = Math.ceil(o + s - u);
    i = { x: f, y: u, w: v, h: y };
  }
  return { x: e, y: s, h: o, w: n, excavation: i };
}
function ae(t, r) {
  return r != null ? Math.floor(r) : t ? sn : an;
}
const cn = (function () {
    try {
      new Path2D().addPath(new Path2D());
    } catch {
      return !1;
    }
    return !0;
  })(),
  un = Q({
    name: "QRCodeCanvas",
    inheritAttrs: !1,
    props: O(O({}, It()), {
      level: String,
      bgColor: String,
      fgColor: String,
      marginSize: Number,
    }),
    setup(t, r) {
      let { attrs: a, expose: c } = r;
      const d = Et(() => {
          var o;
          return (o = t.imageSettings) === null || o === void 0
            ? void 0
            : o.src;
        }),
        l = Ct(null),
        h = Ct(null),
        n = Ct(!1);
      return (
        c({
          toDataURL: (o, e) => {
            var s;
            return (s = l.value) === null || s === void 0
              ? void 0
              : s.toDataURL(o, e);
          },
        }),
        Vt(
          () => {
            const {
              value: o,
              size: e = Mt,
              level: s = te,
              bgColor: i = ee,
              fgColor: f = ne,
              includeMargin: u = oe,
              marginSize: v,
              imageSettings: y,
            } = t;
            if (l.value != null) {
              const P = l.value,
                R = P.getContext("2d");
              if (!R) return;
              let S = Z.QrCode.encodeText(o, Qt[s]).getModules();
              const $ = ae(u, v),
                U = S.length + $ * 2,
                L = ie(S, e, $, y),
                F = h.value,
                G =
                  n.value &&
                  L != null &&
                  F !== null &&
                  F.complete &&
                  F.naturalHeight !== 0 &&
                  F.naturalWidth !== 0;
              G && L.excavation != null && (S = se(S, L.excavation));
              const ot = window.devicePixelRatio || 1;
              P.height = P.width = e * ot;
              const tt = (e / U) * ot;
              R.scale(tt, tt),
                (R.fillStyle = i),
                R.fillRect(0, 0, U, U),
                (R.fillStyle = f),
                cn
                  ? R.fill(new Path2D(re(S, $)))
                  : S.forEach(function (I, x) {
                      I.forEach(function (rt, mt) {
                        rt && R.fillRect(mt + $, x + $, 1, 1);
                      });
                    }),
                G && R.drawImage(F, L.x + $, L.y + $, L.w, L.h);
            }
          },
          { flush: "post" }
        ),
        Zt(d, () => {
          n.value = !1;
        }),
        () => {
          var o;
          const e = (o = t.size) !== null && o !== void 0 ? o : Mt,
            s = { height: `${e}px`, width: `${e}px` };
          let i = null;
          return (
            d.value != null &&
              (i = w(
                "img",
                {
                  src: d.value,
                  key: d.value,
                  style: { display: "none" },
                  onLoad: () => {
                    n.value = !0;
                  },
                  ref: h,
                },
                null
              )),
            w(At, null, [
              w(
                "canvas",
                X(X({}, a), {}, { style: [s, a.style], ref: l }),
                null
              ),
              i,
            ])
          );
        }
      );
    },
  }),
  dn = Q({
    name: "QRCodeSVG",
    inheritAttrs: !1,
    props: O(O({}, It()), {
      color: String,
      level: String,
      bgColor: String,
      fgColor: String,
      marginSize: Number,
      title: String,
    }),
    setup(t) {
      let r = null,
        a = null,
        c = null,
        d = null,
        l = null,
        h = null;
      return (
        Vt(() => {
          const {
            value: n,
            size: o = Mt,
            level: e = te,
            includeMargin: s = oe,
            marginSize: i,
            imageSettings: f,
          } = t;
          (r = Z.QrCode.encodeText(n, Qt[e]).getModules()),
            (a = ae(s, i)),
            (c = r.length + a * 2),
            (d = ie(r, o, a, f)),
            f != null &&
              d != null &&
              (d.excavation != null && (r = se(r, d.excavation)),
              (h = w(
                "image",
                {
                  "xlink:href": f.src,
                  height: d.h,
                  width: d.w,
                  x: d.x + a,
                  y: d.y + a,
                  preserveAspectRatio: "none",
                },
                null
              ))),
            (l = re(r, a));
        }),
        () => {
          const n = t.bgColor && ee,
            o = t.fgColor && ne;
          return w(
            "svg",
            { height: t.size, width: t.size, viewBox: `0 0 ${c} ${c}` },
            [
              !!t.title && w("title", null, [t.title]),
              w(
                "path",
                {
                  fill: n,
                  d: `M0,0 h${c}v${c}H0z`,
                  "shape-rendering": "crispEdges",
                },
                null
              ),
              w(
                "path",
                { fill: o, d: l, "shape-rendering": "crispEdges" },
                null
              ),
              h,
            ]
          );
        }
      );
    },
  }),
  fn = Q({
    name: "AQrcode",
    inheritAttrs: !1,
    props: rn(),
    emits: ["refresh"],
    setup(t, r) {
      let { emit: a, attrs: c, expose: d } = r;
      const [l] = Ie("QRCode"),
        { prefixCls: h } = Yt("qrcode", t),
        [n, o] = en(h),
        [, e] = Le(),
        s = pt();
      d({
        toDataURL: (f, u) => {
          var v;
          return (v = s.value) === null || v === void 0
            ? void 0
            : v.toDataURL(f, u);
        },
      });
      const i = Et(() => {
        const {
            value: f,
            icon: u = "",
            size: v = 160,
            iconSize: y = 40,
            color: P = e.value.colorText,
            bgColor: R = "transparent",
            errorLevel: S = "M",
          } = t,
          $ = {
            src: u,
            x: void 0,
            y: void 0,
            height: y,
            width: y,
            excavate: !0,
          };
        return {
          value: f,
          size: v - (e.value.paddingSM + e.value.lineWidth) * 2,
          level: S,
          bgColor: R,
          fgColor: P,
          imageSettings: u ? $ : void 0,
        };
      });
      return () => {
        const f = h.value;
        return n(
          w(
            "div",
            X(
              X({}, c),
              {},
              {
                style: [
                  c.style,
                  {
                    width: `${t.size}px`,
                    height: `${t.size}px`,
                    backgroundColor: i.value.bgColor,
                  },
                ],
                class: [o.value, f, { [`${f}-borderless`]: !t.bordered }],
              }
            ),
            [
              t.status !== "active" &&
                w("div", { class: `${f}-mask` }, [
                  t.status === "loading" && w(Te, null, null),
                  t.status === "expired" &&
                    w(At, null, [
                      w("p", { class: `${f}-expired` }, [l.value.expired]),
                      w(
                        Be,
                        { type: "link", onClick: (u) => a("refresh", u) },
                        {
                          default: () => [l.value.refresh],
                          icon: () => w(Dt, null, null),
                        }
                      ),
                    ]),
                  t.status === "scanned" &&
                    w("p", { class: `${f}-scanned` }, [l.value.scanned]),
                ]),
              t.type === "canvas"
                ? w(un, X({ ref: s }, i.value), null)
                : w(dn, i.value, null),
            ]
          )
        );
      };
    },
  }),
  hn = De(fn),
  pn = Q({
    __name: "titleCard",
    props: { name: {}, icon: {} },
    setup(t) {
      return (r, a) => (
        N(),
        Y(
          "div",
          { class: V(r.$style.titleDisplay) },
          [
            E("p", null, it(r.name), 1),
            r.icon
              ? (N(),
                Y(
                  "div",
                  { key: 0, class: V(r.$style.iconDisplay) },
                  [w(z(W), { icon: r.icon, width: 32 }, null, 8, ["icon"])],
                  2
                ))
              : q("", !0),
          ],
          2
        )
      );
    },
  }),
  mn = "_titleDisplay_1k0hc_1",
  gn = "_iconDisplay_1k0hc_10",
  vn = { titleDisplay: mn, iconDisplay: gn },
  bn = { $style: vn },
  le = Rt(pn, [["__cssModules", bn]]),
  ce = "3.7.7",
  yn = ce,
  ct = typeof Buffer == "function",
  Ot = typeof TextDecoder == "function" ? new TextDecoder() : void 0,
  Tt = typeof TextEncoder == "function" ? new TextEncoder() : void 0,
  wn = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
  ht = Array.prototype.slice.call(wn),
  vt = ((t) => {
    let r = {};
    return t.forEach((a, c) => (r[a] = c)), r;
  })(ht),
  Cn =
    /^(?:[A-Za-z\d+\/]{4})*?(?:[A-Za-z\d+\/]{2}(?:==)?|[A-Za-z\d+\/]{3}=?)?$/,
  T = String.fromCharCode.bind(String),
  Bt =
    typeof Uint8Array.from == "function"
      ? Uint8Array.from.bind(Uint8Array)
      : (t) => new Uint8Array(Array.prototype.slice.call(t, 0)),
  ue = (t) =>
    t.replace(/=/g, "").replace(/[+\/]/g, (r) => (r == "+" ? "-" : "_")),
  de = (t) => t.replace(/[^A-Za-z0-9\+\/]/g, ""),
  fe = (t) => {
    let r,
      a,
      c,
      d,
      l = "";
    const h = t.length % 3;
    for (let n = 0; n < t.length; ) {
      if (
        (a = t.charCodeAt(n++)) > 255 ||
        (c = t.charCodeAt(n++)) > 255 ||
        (d = t.charCodeAt(n++)) > 255
      )
        throw new TypeError("invalid character found");
      (r = (a << 16) | (c << 8) | d),
        (l +=
          ht[(r >> 18) & 63] +
          ht[(r >> 12) & 63] +
          ht[(r >> 6) & 63] +
          ht[r & 63]);
    }
    return h ? l.slice(0, h - 3) + "===".substring(h) : l;
  },
  Lt =
    typeof btoa == "function"
      ? (t) => btoa(t)
      : ct
      ? (t) => Buffer.from(t, "binary").toString("base64")
      : fe,
  $t = ct
    ? (t) => Buffer.from(t).toString("base64")
    : (t) => {
        let a = [];
        for (let c = 0, d = t.length; c < d; c += 4096)
          a.push(T.apply(null, t.subarray(c, c + 4096)));
        return Lt(a.join(""));
      },
  bt = (t, r = !1) => (r ? ue($t(t)) : $t(t)),
  Sn = (t) => {
    if (t.length < 2) {
      var r = t.charCodeAt(0);
      return r < 128
        ? t
        : r < 2048
        ? T(192 | (r >>> 6)) + T(128 | (r & 63))
        : T(224 | ((r >>> 12) & 15)) +
          T(128 | ((r >>> 6) & 63)) +
          T(128 | (r & 63));
    } else {
      var r =
        65536 + (t.charCodeAt(0) - 55296) * 1024 + (t.charCodeAt(1) - 56320);
      return (
        T(240 | ((r >>> 18) & 7)) +
        T(128 | ((r >>> 12) & 63)) +
        T(128 | ((r >>> 6) & 63)) +
        T(128 | (r & 63))
      );
    }
  },
  _n = /[\uD800-\uDBFF][\uDC00-\uDFFFF]|[^\x00-\x7F]/g,
  he = (t) => t.replace(_n, Sn),
  Pt = ct
    ? (t) => Buffer.from(t, "utf8").toString("base64")
    : Tt
    ? (t) => $t(Tt.encode(t))
    : (t) => Lt(he(t)),
  lt = (t, r = !1) => (r ? ue(Pt(t)) : Pt(t)),
  Ut = (t) => lt(t, !0),
  Mn =
    /[\xC0-\xDF][\x80-\xBF]|[\xE0-\xEF][\x80-\xBF]{2}|[\xF0-\xF7][\x80-\xBF]{3}/g,
  $n = (t) => {
    switch (t.length) {
      case 4:
        var r =
            ((7 & t.charCodeAt(0)) << 18) |
            ((63 & t.charCodeAt(1)) << 12) |
            ((63 & t.charCodeAt(2)) << 6) |
            (63 & t.charCodeAt(3)),
          a = r - 65536;
        return T((a >>> 10) + 55296) + T((a & 1023) + 56320);
      case 3:
        return T(
          ((15 & t.charCodeAt(0)) << 12) |
            ((63 & t.charCodeAt(1)) << 6) |
            (63 & t.charCodeAt(2))
        );
      default:
        return T(((31 & t.charCodeAt(0)) << 6) | (63 & t.charCodeAt(1)));
    }
  },
  pe = (t) => t.replace(Mn, $n),
  me = (t) => {
    if (((t = t.replace(/\s+/g, "")), !Cn.test(t)))
      throw new TypeError("malformed base64.");
    t += "==".slice(2 - (t.length & 3));
    let r,
      a = "",
      c,
      d;
    for (let l = 0; l < t.length; )
      (r =
        (vt[t.charAt(l++)] << 18) |
        (vt[t.charAt(l++)] << 12) |
        ((c = vt[t.charAt(l++)]) << 6) |
        (d = vt[t.charAt(l++)])),
        (a +=
          c === 64
            ? T((r >> 16) & 255)
            : d === 64
            ? T((r >> 16) & 255, (r >> 8) & 255)
            : T((r >> 16) & 255, (r >> 8) & 255, r & 255));
    return a;
  },
  kt =
    typeof atob == "function"
      ? (t) => atob(de(t))
      : ct
      ? (t) => Buffer.from(t, "base64").toString("binary")
      : me,
  ge = ct
    ? (t) => Bt(Buffer.from(t, "base64"))
    : (t) =>
        Bt(
          kt(t)
            .split("")
            .map((r) => r.charCodeAt(0))
        ),
  ve = (t) => ge(be(t)),
  xn = ct
    ? (t) => Buffer.from(t, "base64").toString("utf8")
    : Ot
    ? (t) => Ot.decode(ge(t))
    : (t) => pe(kt(t)),
  be = (t) => de(t.replace(/[-_]/g, (r) => (r == "-" ? "+" : "/"))),
  xt = (t) => xn(be(t)),
  En = (t) => {
    if (typeof t != "string") return !1;
    const r = t.replace(/\s+/g, "").replace(/={0,2}$/, "");
    return !/[^\s0-9a-zA-Z\+/]/.test(r) || !/[^\s0-9a-zA-Z\-_]/.test(r);
  },
  ye = (t) => ({ value: t, enumerable: !1, writable: !0, configurable: !0 }),
  we = function () {
    const t = (r, a) => Object.defineProperty(String.prototype, r, ye(a));
    t("fromBase64", function () {
      return xt(this);
    }),
      t("toBase64", function (r) {
        return lt(this, r);
      }),
      t("toBase64URI", function () {
        return lt(this, !0);
      }),
      t("toBase64URL", function () {
        return lt(this, !0);
      }),
      t("toUint8Array", function () {
        return ve(this);
      });
  },
  Ce = function () {
    const t = (r, a) => Object.defineProperty(Uint8Array.prototype, r, ye(a));
    t("toBase64", function (r) {
      return bt(this, r);
    }),
      t("toBase64URI", function () {
        return bt(this, !0);
      }),
      t("toBase64URL", function () {
        return bt(this, !0);
      });
  },
  An = () => {
    we(), Ce();
  },
  Rn = {
    version: ce,
    VERSION: yn,
    atob: kt,
    atobPolyfill: me,
    btoa: Lt,
    btoaPolyfill: fe,
    fromBase64: xt,
    toBase64: lt,
    encode: lt,
    encodeURI: Ut,
    encodeURL: Ut,
    utob: he,
    btou: pe,
    decode: xt,
    isValid: En,
    fromUint8Array: bt,
    toUint8Array: ve,
    extendString: we,
    extendUint8Array: Ce,
    extendBuiltins: An,
  },
  Dn = "" + new URL("clash-Cqz3v2cm.png", import.meta.url).href,
  In = "" + new URL("Quantumult-9DMydjBn.png", import.meta.url).href,
  Ln = "" + new URL("Shadowrocket-CriHKwFw.webp", import.meta.url).href,
  kn =
    "data:image/svg+xml,%3csvg%20width='1027'%20height='1109'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20xml:space='preserve'%20overflow='hidden'%3e%3cdefs%3e%3cfilter%20id='fx0'%20x='-10%25'%20y='-10%25'%20width='120%25'%20height='120%25'%20filterUnits='userSpaceOnUse'%20primitiveUnits='userSpaceOnUse'%3e%3cfeComponentTransfer%20color-interpolation-filters='sRGB'%3e%3cfeFuncR%20type='discrete'%20tableValues='0%200'%20/%3e%3cfeFuncG%20type='discrete'%20tableValues='0%200'%20/%3e%3cfeFuncB%20type='discrete'%20tableValues='0%200'%20/%3e%3cfeFuncA%20type='linear'%20slope='0.4'%20intercept='0'%20/%3e%3c/feComponentTransfer%3e%3cfeGaussianBlur%20stdDeviation='4.58333%204.58333'%20/%3e%3c/filter%3e%3cclipPath%20id='clip1'%3e%3crect%20x='692'%20y='855'%20width='1027'%20height='1109'%20/%3e%3c/clipPath%3e%3cclipPath%20id='clip2'%3e%3crect%20x='-2'%20y='-2'%20width='541'%20height='786'%20/%3e%3c/clipPath%3e%3cclipPath%20id='clip3'%3e%3crect%20x='0'%20y='0'%20width='535'%20height='782'%20/%3e%3c/clipPath%3e%3c/defs%3e%3cg%20clip-path='url(%23clip1)'%20transform='translate(-692%20-855)'%3e%3cpath%20d='M692%201191%20692%201575.69C692%201640.41%20731.499%201651.19%20731.499%201651.19L1148.03%201931.62C1212.66%201974.77%201194.71%201881.29%201194.71%201881.29L1194.71%201528.96%20692%201191Z'%20fill='%2337474F'%20fill-rule='evenodd'%20/%3e%3cg%20clip-path='url(%23clip2)'%20filter='url(%23fx0)'%20transform='translate(1184%201182)'%3e%3cg%20clip-path='url(%23clip3)'%3e%3cpath%20d='M520.482%2015.4819%20520.482%20400.176C520.482%20464.89%20480.983%20475.676%20480.983%20475.676%20480.983%20475.676%20129.086%20712.963%2064.4523%20756.106-0.181814%20799.25%2017.7721%20705.773%2017.7721%20705.773L17.7721%20353.437%20520.482%2015.4819Z'%20fill='%23455A64'%20fill-rule='evenodd'%20/%3e%3c/g%3e%3c/g%3e%3cpath%20d='M1698%201191%201698%201575.69C1698%201640.41%201658.5%201651.19%201658.5%201651.19%201658.5%201651.19%201306.6%201888.48%201241.97%201931.62%201177.34%201974.77%201195.29%201881.29%201195.29%201881.29L1195.29%201528.96%201698%201191Z'%20fill='%23455A64'%20fill-rule='evenodd'%20/%3e%3cpath%20d='M1241.71%20868.473C1212.96%20850.509%201169.85%20850.509%201144.7%20868.473L713.557%201163.07C684.814%201181.04%20684.814%201213.37%20713.557%201231.33L1144.7%201529.53C1173.44%201547.49%201216.56%201547.49%201241.71%201529.53L1676.44%201227.74C1705.19%201209.78%201705.19%201177.44%201676.44%201159.48L1241.71%20868.473Z'%20fill='%23546E7A'%20fill-rule='evenodd'%20/%3e%3cpath%20d='M1195%201949C1173.4%201949%201159%201935.19%201159%201917.92L1159%201531.08C1159%201513.82%201173.4%201500%201195%201500%201216.6%201500%201231%201513.82%201231%201531.08L1231%201914.46C1231%201935.19%201216.6%201949%201195%201949Z'%20fill='%23546E7A'%20fill-rule='evenodd'%20/%3e%3cpath%20d='M1553.92%201435.92C1553.92%201471.89%201557.5%201486.27%201518.03%201511.45L1428.32%201568.99C1388.85%201594.17%201374.5%201572.59%201374.5%201540.22L1374.5%201446.71C1374.5%201439.52%201374.5%201435.92%201363.73%201428.73%201270.43%201363.99%20911.591%201115.84%20847%201069.09L1012.07%20954C1058.72%20982.772%201399.61%201209.35%201539.56%201306.45%201546.74%201310.05%201550.33%201317.24%201550.33%201320.84L1550.33%201435.92Z'%20fill='%2399AAB5'%20fill-rule='evenodd'%20/%3e%3cpath%20d='M1543.41%201310.21C1399.82%201213.17%201058.79%20986.752%201015.72%20958L951.103%20997.534%20847%201069.41C911.615%201116.14%201270.59%201360.53%201363.92%201425.22%201371.1%201428.81%201371.1%201432.41%201371.1%201436L1547%201313.8C1547%201313.8%201547%201310.21%201543.41%201310.21Z'%20fill='%23CCD6DD'%20fill-rule='evenodd'%20/%3e%3cpath%20d='M1554.9%201435.48%201554.9%201324.19C1554.9%201317.01%201551.3%201313.42%201544.11%201309.83%201400.28%201212.89%201058.67%20986.721%201015.51%20958L940%201008.26C1062.26%201090.83%201389.49%201306.24%201475.79%201367.27%201486.58%201374.45%201486.58%201381.63%201486.58%201385.22L1486.58%201536%201522.54%201510.87C1558.5%201485.74%201554.9%201467.79%201554.9%201435.48Z'%20fill='%23CCD6DD'%20fill-rule='evenodd'%20/%3e%3cpath%20d='M1543.23%201309.95C1399.6%201212.98%201058.49%20986.731%201015.4%20958L940%201008.28C1062.08%201090.88%201388.83%201306.36%201475.01%201367.41%201475.01%201367.41%201478.6%201371%201478.6%201371L1554%201317.13C1546.82%201313.54%201546.82%201309.95%201543.23%201309.95Z'%20fill='%23E1E8ED'%20fill-rule='evenodd'%20/%3e%3c/g%3e%3c/svg%3e",
  Nn = E("span", null, "复制订阅地址", -1),
  On = ["aria-label", "onClick"],
  Tn = ["src"],
  Bn = Q({
    __name: "SubscribeActions",
    props: { code: { type: Boolean } },
    setup(t) {
      const { copy: r, copied: a } = Oe(),
        c = Gt();
      Zt(a, (o) => {
        o && at.success("复制成功");
      });
      const d = [
          {
            id: "Clash",
            name: "导入到 Clash",
            img: Dn,
            icon: "fluent:animal-cat-24-regular",
          },
          {
            id: "Shadowrocket",
            name: "导入到 Shadowrocket",
            img: Ln,
            icon: "ph:rocket-duotone",
          },
          {
            id: "Quantumult",
            name: "导入到 Quantumult",
            img: In,
            icon: "ph:rocket-duotone",
          },
          {
            id: "SingBox",
            name: "导入到 Sing-Box",
            img: kn,
            icon: "ph:rocket-duotone",
          },
        ],
        l = (o) => {
          var s, i, f, u, v, y;
          if (
            !((s = c.Subscribe) != null && s.plan) ||
            !((i = c.Subscribe) != null && i.plan_id)
          )
            return at.error("你还为订阅任何套餐，请先订阅");
          let e;
          switch (o) {
            case "Clash":
              e = `clash://install-config?url=${
                (f = c.Subscribe) == null ? void 0 : f.subscribe_url
              }&name=${window.config.title}`;
              break;
            case "Shadowrocket":
              e = `shadowrocket://add/sub://${Rn.encode(
                (u = c.Subscribe) == null ? void 0 : u.subscribe_url
              )}?remark=${window.config.title}`;
              break;
            case "Quantumult":
              e = `quantumult-x:///update-configuration?remote-resource=${encodeURI(
                JSON.stringify({
                  server_remote: [
                    ((v = c.Subscribe) == null ? void 0 : v.subscribe_url) +
                      ", tag=" +
                      window.config.title,
                  ],
                })
              )}`;
              break;
            case "SingBox":
              e = `sing-box://import-remote-profile?url=${
                encodeURIComponent(
                  ((y = c.Subscribe) == null ? void 0 : y.subscribe_url) +
                    "&flag=sing-box"
                ) +
                "#" +
                window.config.title
              }`;
              break;
            default:
              at.error("暂不支持此应用");
          }
          e && (window.location.href = e);
        },
        h = () => {
          var o, e;
          return !((o = c.Subscribe) != null && o.plan) ||
            !((e = c.Subscribe) != null && e.plan_id)
            ? at.error("你还为订阅任何套餐，请先订阅")
            : r(c.Subscribe.subscribe_url);
        },
        n = pt(!1);
      return (o, e) => {
        var f;
        const s = hn,
          i = Wt;
        return (
          N(),
          Y(
            "div",
            { class: V(o.$style.card) },
            [
              w(le, { name: "一键订阅" }),
              E(
                "div",
                { class: V(o.$style.actionList) },
                [
                  o.code
                    ? (N(),
                      yt(
                        s,
                        {
                          key: 0,
                          value:
                            (f = z(c).Subscribe) == null
                              ? void 0
                              : f.subscribe_url,
                          bordered: !1,
                          size: 200,
                        },
                        null,
                        8,
                        ["value"]
                      ))
                    : q("", !0),
                  E(
                    "div",
                    { class: V(o.$style.actionItem), onClick: h },
                    [
                      w(z(W), {
                        width: 28,
                        icon: "fluent:copy-arrow-right-20-regular",
                      }),
                      Nn,
                      o.code
                        ? q("", !0)
                        : (N(),
                          yt(z(W), {
                            key: 0,
                            icon: "ri:qr-code-fill",
                            width: 28,
                            onClick: e[0] || (e[0] = (u) => (n.value = !0)),
                          })),
                    ],
                    2
                  ),
                  (N(),
                  Y(
                    At,
                    null,
                    ke(d, (u) =>
                      E(
                        "div",
                        {
                          key: u.name,
                          "aria-label": u.id,
                          class: V(o.$style.actionItem),
                          onClick: (v) => l(u.id),
                        },
                        [
                          E("div", null, [
                            E(
                              "img",
                              { src: u.img, alt: "appIcon" },
                              null,
                              8,
                              Tn
                            ),
                          ]),
                          E("span", null, it(u.name), 1),
                        ],
                        10,
                        On
                      )
                    ),
                    64
                  )),
                ],
                2
              ),
              w(
                i,
                {
                  open: n.value,
                  "onUpdate:open": e[1] || (e[1] = (u) => (n.value = u)),
                  closable: !1,
                  footer: null,
                  width: 240 + 24 * 2,
                },
                {
                  default: ft(() => {
                    var u;
                    return [
                      w(
                        s,
                        {
                          value:
                            (u = z(c).Subscribe) == null
                              ? void 0
                              : u.subscribe_url,
                          bordered: !1,
                          size: 240,
                        },
                        null,
                        8,
                        ["value"]
                      ),
                    ];
                  }),
                  _: 1,
                },
                8,
                ["open"]
              ),
            ],
            2
          )
        );
      };
    },
  }),
  Pn = "_card_1mxag_1",
  Un = "_actionList_1mxag_15",
  Fn = "_actionItem_1mxag_43",
  zn = { card: Pn, actionList: Un, actionItem: Fn },
  Hn = { $style: zn },
  Yn = Rt(Bn, [["__cssModules", Hn]]),
  jn = ["aria-hidden"],
  Vn = ["aria-hidden"],
  Zn = { "aria-label": "slogan" },
  Gn = { key: 0 },
  Wn = E("span", { "aria-label": "prefix" }, "订阅套餐:  ", -1),
  Xn = { "aria-label": "value" },
  Kn = { key: 1 },
  qn = E(
    "span",
    { "aria-label": "prefix" },
    "你还没有订阅任何套餐，因此无法正常使用本站节点服务，点击下方「立即订阅」按钮快来订阅吧",
    -1
  ),
  Jn = [qn],
  Qn = { key: 2 },
  to = E("span", { "aria-label": "prefix" }, "到期时间:  ", -1),
  eo = { "aria-label": "value" },
  no = E("span", { "aria-label": "prefix" }, "套餐还剩: ", -1),
  oo = { key: 4 },
  ro = E("span", { "aria-label": "prefix" }, "流量重置日:  ", -1),
  so = { "aria-label": "value" },
  io = E("span", null, "一键订阅", -1),
  ao = E("span", null, "查看订阅", -1),
  lo = E("span", null, "套餐续费", -1),
  co = E("span", null, "重置当月流量", -1),
  uo = E("span", null, "重置订阅信息", -1),
  fo = E("div", null, "立即订阅", -1),
  ho = [fo],
  po = E(
    "p",
    null,
    "点击「确定」将会跳转到收银台，支付订单后系统将会清空您当月已使用流量。",
    -1
  ),
  mo = E(
    "p",
    null,
    "如果你的订阅地址或信息泄露可以进行此操作。重置后你的UUID及订阅将会变更，需要重新导入订阅！旧订阅会失效。如果您不清楚它的含义，请关闭此操作！【再次提醒，不论是续费还是连不上都不要进行此操作，此操作仅需要在订阅泄露时需要考虑！有问题请联系在线客服】",
    -1
  ),
  go = Q({
    __name: "subscribeInfo",
    props: { full: { type: Boolean } },
    setup(t) {
      const r = Ne(),
        a = Gt(),
        c = Et(() => {
          var u;
          const l = a.Subscribe || {},
            h = l.plan !== null,
            n = window.config.title,
            o = l.plan === null ? "Halo, 你好" : `Halo, 尊贵的 ${n} 会员`;
          let e, s, i, f;
          return (
            h &&
              l.plan &&
              ((e =
                ((u = l == null ? void 0 : l.plan) == null ? void 0 : u.name) ||
                "未知"),
              (s = ((l == null ? void 0 : l.expired_at) || 0) * 1e3),
              (i = je(s).format("YYYY 年 MM 月 DD 日") || "未知"),
              (f = (l == null ? void 0 : l.reset_day) || "未知")),
            {
              status: h,
              slogan: o,
              plan_name: e,
              plan_expire_unix: s,
              plan_expire_date: i,
              plan_reset_day: f,
            }
          );
        }),
        d = pt({
          actionShow: !1,
          resetShow: !1,
          resetLoading: !1,
          resetOK() {
            (this.resetLoading = !0),
              Pe()
                .then(() => {
                  at.success("重置订阅链接成功"),
                    (this.resetLoading = !1),
                    window.location.reload();
                })
                .catch(() => {
                  at.error("重置失败，请联系客服"), (this.resetLoading = !1);
                });
          },
          planShow: !1,
          planOK() {
            r.push("/dashboard/store/plan/" + a.Subscribe.plan_id);
          },
        });
      return (l, h) => {
        const n = Qe,
          o = Wt;
        return (
          N(),
          Y(
            "div",
            { "aria-hidden": l.full, class: V(l.$style.card) },
            [
              l.full ? q("", !0) : (N(), yt(le, { key: 0, name: "我的订阅" })),
              E(
                "div",
                { "aria-hidden": l.full, class: V(l.$style.cardContainer) },
                [
                  E("div", Zn, it(c.value.slogan), 1),
                  c.value.plan_name
                    ? (N(),
                      Y("div", Gn, [
                        Wn,
                        E("span", Xn, it(c.value.plan_name), 1),
                      ]))
                    : (N(), Y("div", Kn, Jn)),
                  c.value.plan_expire_date
                    ? (N(),
                      Y("div", Qn, [
                        to,
                        E("span", eo, it(c.value.plan_expire_date), 1),
                      ]))
                    : q("", !0),
                  c.value.plan_expire_unix
                    ? (N(),
                      yt(
                        n,
                        {
                          key: 3,
                          value: c.value.plan_expire_unix,
                          "value-style": {
                            color: "white",
                            fontSize: "16px",
                            fontWeight: 800,
                          },
                          format: "DD 天 HH 时 mm 分 ss 秒",
                        },
                        { prefix: ft(() => [no]), _: 1 },
                        8,
                        ["value"]
                      ))
                    : q("", !0),
                  c.value.plan_reset_day !== "未知"
                    ? (N(),
                      Y("div", oo, [
                        ro,
                        E(
                          "span",
                          so,
                          "还剩 " + it(c.value.plan_reset_day) + " 天",
                          1
                        ),
                      ]))
                    : q("", !0),
                  c.value.status
                    ? (N(),
                      Y(
                        "div",
                        { key: 5, class: V(l.$style.cardActions) },
                        [
                          l.full
                            ? (N(),
                              Y(
                                "div",
                                {
                                  key: 0,
                                  onClick:
                                    h[0] ||
                                    (h[0] = (e) => (d.value.actionShow = !0)),
                                },
                                [
                                  w(z(W), {
                                    width: 20,
                                    icon: "bxs:paper-plane",
                                  }),
                                  io,
                                ]
                              ))
                            : (N(),
                              Y(
                                "div",
                                {
                                  key: 1,
                                  onClick:
                                    h[1] ||
                                    (h[1] = (e) =>
                                      z(r).push("/dashboard/subscribe")),
                                },
                                [
                                  w(z(W), {
                                    width: 20,
                                    icon: "bxs:paper-plane",
                                  }),
                                  ao,
                                ]
                              )),
                          E(
                            "div",
                            {
                              onClick:
                                h[2] ||
                                (h[2] = (e) =>
                                  z(r).push(
                                    "/dashboard/store/plan/" +
                                      z(a).Subscribe.plan_id
                                  )),
                            },
                            [
                              w(z(W), {
                                width: 20,
                                icon: "icon-park-solid:mall-bag",
                              }),
                              lo,
                            ]
                          ),
                          E(
                            "div",
                            {
                              onClick:
                                h[3] || (h[3] = (e) => (d.value.planShow = !0)),
                            },
                            [
                              w(z(W), { width: 20, icon: "mdi:cloud-refresh" }),
                              co,
                            ]
                          ),
                          l.full
                            ? (N(),
                              Y(
                                "div",
                                {
                                  key: 2,
                                  onClick:
                                    h[4] ||
                                    (h[4] = (e) => (d.value.resetShow = !0)),
                                },
                                [
                                  w(z(W), {
                                    width: 20,
                                    icon: "mdi:refresh-circle",
                                  }),
                                  uo,
                                ]
                              ))
                            : q("", !0),
                        ],
                        2
                      ))
                    : (N(),
                      Y(
                        "div",
                        {
                          key: 6,
                          class: V(l.$style.cardActions),
                          onClick:
                            h[5] ||
                            (h[5] = (e) => z(r).push("/dashboard/store")),
                        },
                        ho,
                        2
                      )),
                  E(
                    "div",
                    { class: V(l.$style.cardIcon) },
                    [w(z(W), { width: 80, icon: "fa6-solid:bolt" })],
                    2
                  ),
                ],
                10,
                Vn
              ),
              w(
                o,
                {
                  open: d.value.actionShow,
                  "onUpdate:open":
                    h[6] || (h[6] = (e) => (d.value.actionShow = e)),
                  class: V(l.$style.subscribeContainer),
                  closable: !1,
                  footer: null,
                },
                { default: ft(() => [w(Yn, { code: !0 })]), _: 1 },
                8,
                ["open", "class"]
              ),
              w(
                o,
                {
                  open: d.value.planShow,
                  "onUpdate:open":
                    h[7] || (h[7] = (e) => (d.value.planShow = e)),
                  "cancel-text": "取消",
                  "ok-text": "确定",
                  title: "确定要重置当月流量？",
                  onOk: h[8] || (h[8] = (e) => d.value.planOK()),
                },
                { default: ft(() => [po]), _: 1 },
                8,
                ["open"]
              ),
              w(
                o,
                {
                  open: d.value.resetShow,
                  "onUpdate:open":
                    h[9] || (h[9] = (e) => (d.value.resetShow = e)),
                  "confirm-loading": d.value.resetLoading,
                  "cancel-text": "取消",
                  "ok-text": "确定",
                  title: "确定要重置订阅链接？",
                  onOk: h[10] || (h[10] = (e) => d.value.resetOK()),
                },
                { default: ft(() => [mo]), _: 1 },
                8,
                ["open", "confirm-loading"]
              ),
            ],
            10,
            jn
          )
        );
      };
    },
  }),
  vo = "_card_ms7er_1",
  bo = "_cardContainer_ms7er_24",
  yo = "_cardActions_ms7er_63",
  wo = "_cardIcon_ms7er_107",
  Co = "_subscribeContainer_ms7er_127",
  So = {
    card: vo,
    cardContainer: bo,
    cardActions: yo,
    cardIcon: wo,
    subscribeContainer: Co,
  },
  _o = { $style: So },
  No = Rt(go, [["__cssModules", _o]]);
export { Yn as S, le as T, No as U, je as d };
